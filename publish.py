#!/usr/bin/env python3
"""Publish helper for the `weiyun-skills` ClawHub skill.

Usage::

    python publish.py <skill_path> --version=1.0.4 [--changelog "..."] \\
                      [--tags latest,stable] [--dry-run]

What it does
------------
1. Validates the requested ``--version`` is a strict semantic version and
   greater than the current ``__version__`` declared in
   ``<skill_path>/weiyun_skills/__init__.py``.
2. Rewrites ``__version__`` in-place to the new version.
3. Temporarily moves this ``publish.py`` out of the skill directory so that
   ``clawhub publish`` never uploads the publishing helper itself, then
   invokes::

       clawhub publish <skill_path> --version=<new_version> [extras...]

   The script is always moved back to its original location in a ``finally``
   block, even on Ctrl-C or errors.
4. On failure the ``__version__`` change is rolled back so re-running the
   script is idempotent.

This mirrors the canonical invocation requested by the user::

    clawhub publish /Users/reky/Documents/GitHub/weiyun-skills --version=1.0.4
"""

from __future__ import annotations

import argparse
import os
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path
from typing import List, Optional, Tuple

# Files inside the skill folder that must NOT be pushed to ClawHub.
# Paths are relative to the skill root. Add more entries here if needed.
#
# Rationale for each entry:
#   - publish.py       : this helper script; irrelevant to end users.
#   - cookies.json     : password-equivalent Weiyun session cookies. If a
#                        maintainer happens to have logged in locally and
#                        forgotten to delete the file, we must still never
#                        ship it to ClawHub under any circumstances.
IGNORED_RELATIVE_PATHS: Tuple[str, ...] = (
    "publish.py",
    "cookies.json",
)

SEMVER_RE = re.compile(r"^\d+\.\d+\.\d+$")
VERSION_LINE_RE = re.compile(
    r'^(?P<prefix>__version__\s*=\s*")(?P<ver>\d+\.\d+\.\d+)(?P<suffix>".*)$',
    re.MULTILINE,
)


def _parse_semver(v: str) -> Tuple[int, int, int]:
    """Parse a strict ``MAJOR.MINOR.PATCH`` semver string."""
    if not SEMVER_RE.match(v):
        raise ValueError(
            f"Invalid semver '{v}'. Expected MAJOR.MINOR.PATCH, e.g. 1.0.4."
        )
    major, minor, patch = v.split(".")
    return int(major), int(minor), int(patch)


def _locate_init_file(skill_root: Path) -> Path:
    """Return the path of the package ``__init__.py`` that owns __version__."""
    init_path = skill_root / "weiyun_skills" / "__init__.py"
    if not init_path.is_file():
        raise FileNotFoundError(
            f"Could not find version file: {init_path}. "
            "Is this really the weiyun-skills project root?"
        )
    return init_path


def _read_current_version(init_path: Path) -> str:
    text = init_path.read_text(encoding="utf-8")
    match = VERSION_LINE_RE.search(text)
    if not match:
        raise RuntimeError(
            f"__version__ = \"...\" line not found in {init_path}."
        )
    return match.group("ver")


def _write_new_version(init_path: Path, new_version: str) -> str:
    """Replace ``__version__`` in ``init_path`` and return the original text."""
    original_text = init_path.read_text(encoding="utf-8")
    new_text, n = VERSION_LINE_RE.subn(
        lambda m: f"{m.group('prefix')}{new_version}{m.group('suffix')}",
        original_text,
        count=1,
    )
    if n != 1:
        raise RuntimeError(
            f"Failed to update __version__ in {init_path} "
            f"(matched {n} occurrences)."
        )
    init_path.write_text(new_text, encoding="utf-8")
    return original_text


def _ensure_clawhub_available() -> None:
    """Fail fast with a helpful message if `clawhub` is not on PATH."""
    if shutil.which("clawhub") is None:
        raise RuntimeError(
            "The `clawhub` CLI was not found on PATH. Install it first, "
            "e.g. `npm i -g @clawhub/cli`, then retry."
        )


class _IgnoredFilesGuard:
    """Context manager that temporarily moves ignored files out of the skill
    directory and restores them on exit (even on errors).

    ``clawhub publish`` does not currently support ``--ignore`` / ``--exclude``
    flags, so the only reliable way to keep files out of the published
    artifact is to make them physically absent during the publish call.
    """

    def __init__(self, skill_root: Path, relative_paths: Tuple[str, ...]):
        self._skill_root = skill_root
        self._relative_paths = relative_paths
        self._staging_dir: Optional[Path] = None
        # Records (original_path, staged_path) for each moved file.
        self._moved: List[Tuple[Path, Path]] = []

    def __enter__(self) -> "_IgnoredFilesGuard":
        self._staging_dir = Path(
            tempfile.mkdtemp(prefix="clawhub-publish-ignored-")
        )
        for rel in self._relative_paths:
            src = self._skill_root / rel
            if not src.exists():
                continue
            # Preserve the original relative structure inside the staging
            # directory so nested paths don't collide.
            dst = self._staging_dir / rel
            dst.parent.mkdir(parents=True, exist_ok=True)
            shutil.move(str(src), str(dst))
            self._moved.append((src, dst))
            print(f"[ignore] Temporarily excluded from publish: {rel}")
        return self

    def __exit__(self, exc_type, exc, tb) -> None:
        # Always restore, in reverse order of moves, so nested dirs come back
        # in a consistent state.
        for src, dst in reversed(self._moved):
            try:
                src.parent.mkdir(parents=True, exist_ok=True)
                shutil.move(str(dst), str(src))
            except Exception as restore_err:  # pragma: no cover - defensive
                print(
                    f"[ERROR] Failed to restore '{src}' from '{dst}': "
                    f"{restore_err}. Please move it back manually.",
                    file=sys.stderr,
                )
        # Clean up the (now empty) staging directory.
        if self._staging_dir and self._staging_dir.exists():
            shutil.rmtree(self._staging_dir, ignore_errors=True)


def _run_clawhub_publish(
    skill_root: Path,
    new_version: str,
    changelog: Optional[str],
    tags: Optional[str],
    extra_args: List[str],
    dry_run: bool,
) -> int:
    cmd: List[str] = [
        "clawhub",
        "publish",
        str(skill_root),
        f"--version={new_version}",
    ]
    if changelog:
        cmd += ["--changelog", changelog]
    if tags:
        cmd += ["--tags", tags]
    if extra_args:
        cmd += extra_args

    pretty = " ".join(
        # Quote any arg containing whitespace, purely for human display.
        f'"{a}"' if any(c.isspace() for c in a) else a for a in cmd
    )
    print(f"[publish] $ {pretty}")

    if dry_run:
        print("[publish] --dry-run specified; skipping actual invocation.")
        return 0

    result = subprocess.run(cmd)
    return result.returncode


def _parse_args(argv: List[str]) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        prog="publish.py",
        description=(
            "Bump the skill version and run `clawhub publish`, making sure "
            "this helper script itself is never uploaded."
        ),
    )
    parser.add_argument(
        "path",
        help="Path to the skill root (e.g. /Users/reky/Documents/GitHub/weiyun-skills).",
    )
    parser.add_argument(
        "--version",
        required=True,
        help="New semver version to publish (must be strictly greater "
             "than the current __version__).",
    )
    parser.add_argument(
        "--changelog",
        default=None,
        help="Optional changelog text forwarded to `clawhub publish`.",
    )
    parser.add_argument(
        "--tags",
        default=None,
        help="Comma-separated tags forwarded to `clawhub publish` "
             "(clawhub default is 'latest').",
    )
    parser.add_argument(
        "--allow-same-version",
        action="store_true",
        help="Allow re-publishing without bumping the version number "
             "(useful for retrying a failed publish).",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print the clawhub command without executing it. The version "
             "file is still rewritten, but rolled back on exit.",
    )
    # Anything after a literal `--` is forwarded verbatim to `clawhub publish`.
    # We parse these ourselves (instead of using argparse.REMAINDER) so that
    # argparse doesn't accidentally swallow flags like `--version=...`.
    return parser.parse_args(argv)


def main(argv: Optional[List[str]] = None) -> int:
    raw_argv = list(sys.argv[1:] if argv is None else argv)
    # Split off any pass-through args for clawhub that follow a literal `--`.
    extra: List[str] = []
    if "--" in raw_argv:
        idx = raw_argv.index("--")
        extra = raw_argv[idx + 1:]
        raw_argv = raw_argv[:idx]

    args = _parse_args(raw_argv)

    skill_root = Path(args.path).expanduser().resolve()
    if not skill_root.is_dir():
        print(f"[ERROR] Skill path is not a directory: {skill_root}",
              file=sys.stderr)
        return 2

    try:
        _parse_semver(args.version)
    except ValueError as e:
        print(f"[ERROR] {e}", file=sys.stderr)
        return 2

    try:
        _ensure_clawhub_available()
    except RuntimeError as e:
        print(f"[ERROR] {e}", file=sys.stderr)
        return 2

    try:
        init_path = _locate_init_file(skill_root)
        current_version = _read_current_version(init_path)
    except Exception as e:
        print(f"[ERROR] {e}", file=sys.stderr)
        return 2

    print(f"[publish] Skill root:      {skill_root}")
    print(f"[publish] Current version: {current_version}")
    print(f"[publish] New version:     {args.version}")

    cur_t = _parse_semver(current_version)
    new_t = _parse_semver(args.version)
    if new_t < cur_t or (new_t == cur_t and not args.allow_same_version):
        print(
            f"[ERROR] Refusing to publish: new version {args.version} is "
            f"not strictly greater than current {current_version}. "
            f"Pass --allow-same-version to override.",
            file=sys.stderr,
        )
        return 2

    # Bump version first so the published artifact carries the new string.
    if new_t == cur_t:
        print("[publish] Version unchanged (allow-same-version); "
              "skipping __init__.py rewrite.")
        original_text = None
    else:
        original_text = _write_new_version(init_path, args.version)
        print(f"[publish] Updated __version__ in {init_path}")

    rc = 1
    try:
        with _IgnoredFilesGuard(skill_root, IGNORED_RELATIVE_PATHS):
            rc = _run_clawhub_publish(
                skill_root=skill_root,
                new_version=args.version,
                changelog=args.changelog,
                tags=args.tags,
                extra_args=extra,
                dry_run=args.dry_run,
            )
    except KeyboardInterrupt:
        print("\n[publish] Interrupted by user.", file=sys.stderr)
        rc = 130
    except Exception as e:
        print(f"[ERROR] Publish crashed: {e}", file=sys.stderr)
        rc = 1

    if rc != 0:
        # Roll back the version bump so the working tree stays clean and a
        # retry re-enters this script with consistent state.
        if original_text is not None:
            try:
                init_path.write_text(original_text, encoding="utf-8")
                print(
                    f"[publish] Publish failed (exit={rc}); rolled back "
                    f"__version__ in {init_path} to {current_version}."
                )
            except Exception as rb_err:  # pragma: no cover - defensive
                print(
                    f"[ERROR] Failed to roll back version in {init_path}: "
                    f"{rb_err}. Please revert manually.",
                    file=sys.stderr,
                )
        return rc

    print(f"[publish] ✓ Successfully published weiyun-skills @ {args.version}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
