#!/usr/bin/env python3
"""Upload README.md to Weiyun - interactive login + upload script.

Security notes
--------------
This helper will write to the user's Weiyun account. It is documented as a
one-off utility and is *not* part of the default CLI surface. To avoid
accidentally clobbering an existing ``/README.md`` in the user's cloud
storage, the script now:

* defaults to ``overwrite=False`` and will abort if the remote file exists,
* requires an interactive ``y/yes`` confirmation before uploading,
* supports ``--dry-run`` to preview the upload without touching Weiyun, and
* supports ``--yes`` / ``--overwrite`` flags for users who have verified the
  operation and need to run it non-interactively.
"""
import sys
import os
import argparse

# Add project root to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from weiyun_skills.login import qrcode_login, cookies_login, load_cookies
from weiyun_skills.client import WeiyunClient


def _confirm(prompt: str, assume_yes: bool) -> bool:
    """Interactive confirmation that fails closed outside a TTY."""
    if assume_yes:
        return True
    if not sys.stdin or not sys.stdin.isatty():
        print(
            "[!] Refusing to upload without an interactive confirmation. "
            "Re-run in a terminal, or pass --yes after verifying the action."
        )
        return False
    try:
        return input(f"{prompt} [y/N]: ").strip().lower() in ("y", "yes")
    except EOFError:
        return False


def main():
    parser = argparse.ArgumentParser(
        description="Upload this project's README.md to the user's Weiyun root."
    )
    parser.add_argument(
        "--yes", "-y", action="store_true",
        help="Skip the interactive confirmation prompt (use with care)."
    )
    parser.add_argument(
        "--overwrite", action="store_true",
        help="Allow overwriting an existing /README.md on Weiyun."
    )
    parser.add_argument(
        "--dry-run", action="store_true",
        help="Show what would happen without calling the upload API."
    )
    parser.add_argument(
        "--remote-path", default="/README.md",
        help="Remote target path on Weiyun (default: /README.md)."
    )
    args = parser.parse_args()

    readme_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "README.md")
    cookies_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "cookies.json")

    if not os.path.isfile(readme_path):
        print(f"[ERROR] README.md not found at: {readme_path}")
        sys.exit(1)

    print("=" * 60)
    print("  Weiyun Skills - Upload README.md")
    print("=" * 60)
    print(f"  Local file:  {readme_path}")
    print(f"  Size:        {os.path.getsize(readme_path)} bytes")
    print(f"  Remote path: {args.remote_path}")
    print(f"  Overwrite:   {args.overwrite}")
    print(f"  Dry-run:     {args.dry_run}")
    print()

    if args.overwrite:
        print(
            "[!] --overwrite is enabled. If a file already exists at "
            f"{args.remote_path}, its contents will be REPLACED."
        )

    if not _confirm(
        f"Upload '{readme_path}' to Weiyun at '{args.remote_path}'"
        f"{' (overwrite allowed)' if args.overwrite else ''}?",
        assume_yes=args.yes,
    ):
        print("[-] Upload cancelled.")
        return

    if args.dry_run:
        print("[dry-run] No network call made. Exiting.")
        return

    # Step 1: Check if already logged in
    saved = load_cookies(cookies_path)
    if saved and saved.get("cookies_str"):
        print("[*] Found saved cookies, verifying...")
        client = WeiyunClient(cookies_path=cookies_path)
        space = client.get_space_info()
        if space["success"]:
            print(f"[✓] Already logged in as: {saved.get('uin', 'unknown')}")
        else:
            print("[*] Saved cookies expired, need to re-login.")
            saved = {}

    # Step 2: Login if needed
    if not saved or not saved.get("cookies_str"):
        print()
        print("Choose login method:")
        print("  1) QR code scan (recommended)")
        print("  2) Paste cookies from browser")
        print()

        choice = input("Enter choice [1/2]: ").strip()

        if choice == "2":
            print()
            print("Steps to get cookies:")
            print("  1. Open https://www.weiyun.com in browser and login")
            print("  2. Press F12 -> Network tab -> click any request")
            print("  3. Copy the 'Cookie:' header value")
            print()
            cookies_str = input("Paste cookies here: ").strip()
            result = cookies_login(cookies_str, save_path=cookies_path)
        else:
            result = qrcode_login(save_path=cookies_path)

        if not result["success"]:
            print(f"\n[ERROR] Login failed: {result['message']}")
            sys.exit(1)

        print(f"\n[✓] Login successful! Cookies saved to: {cookies_path}")

    # Step 3: Upload README.md
    print()
    print("-" * 60)
    print(f"[*] Uploading README.md to Weiyun at {args.remote_path}...")
    print("-" * 60)

    client = WeiyunClient(cookies_path=cookies_path)
    result = client.upload_file(readme_path, args.remote_path, overwrite=args.overwrite)

    if result["success"]:
        data = result["data"]
        print()
        print("=" * 60)
        print("  ✅ Upload successful!")
        print(f"  📄 File: {data.get('name', 'README.md')}")
        print(f"  📦 Size: {data.get('size', 0)} bytes")
        print(f"  📂 Path: {data.get('remote_path', args.remote_path)}")
        print(f"  🔑 MD5:  {data.get('md5', 'N/A')}")
        print(f"  🕐 Time: {data.get('uploaded_at', 'N/A')}")
        print("=" * 60)
    else:
        print(f"\n[ERROR] Upload failed: {result['message']}")
        print(f"  Error code: {result.get('error_code', 'UNKNOWN')}")
        sys.exit(1)


if __name__ == "__main__":
    main()
