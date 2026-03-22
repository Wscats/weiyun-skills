"""Weiyun API client - core module for interacting with Weiyun services."""

import os
import json
import time
import hashlib
import requests
import random
from typing import Optional

from weiyun_skills.login import load_cookies, DEFAULT_COOKIES_PATH
from weiyun_skills.utils import (
    format_size,
    get_file_md5,
    parse_cookies_str,
    get_timestamp,
    ensure_dir,
    build_response,
)

# Weiyun API base URLs
API_BASE = "https://www.weiyun.com"

# Command name to protocol mapping (URL path component)
CMD_PROTOCOLS = {
    "DiskUserInfoGet": "weiyunQdiskClient",
    "DiskUserConfigGet": "weiyunQdiskClient",
    "DiskDirList": "weiyunQdisk",
    "DiskDirBatchList": "weiyunQdisk",
    "DiskFileBatchDownload": "weiyunQdiskClient",
    "DiskFilePackageDownload": "weiyunQdisk",
    "DiskFileDocDownloadAbs": "weiyunQdiskClient",
    "DiskDirFileBatchDeleteEx": "weiyunQdiskClient",
    "DiskFileRename": "weiyunQdiskClient",
    "DiskDirCreate": "weiyunQdiskClient",
    "DiskDirAttrModify": "weiyunQdiskClient",
    "DiskDirFileBatchMove": "weiyunQdiskClient",
    "DiskRecycleList": "weiyunQdiskClient",
    "DiskRecycleDirFileBatchRestore": "weiyunQdiskClient",
    "DiskRecycleDirFileClear": "weiyunQdiskClient",
    "WeiyunShareList": "weiyunShare",
    "WeiyunShareDelete": "weiyunShare",
    "WeiyunShareAddV2": "weiyunShare",
    "WeiyunSharePwdCreate": "weiyunShare",
    "WeiyunSharePwdDelete": "weiyunShare",
    "WeiyunShareRenewal": "weiyunShare",
    "WeiyunShareTraceInfo": "weiyunShare",
    "FileSearchbyKeyWord": "weiyunFileSearch",
    "FileSearchTipsList": "weiyunFileSearch",
}

# Command name to numeric ID mapping (extracted from Weiyun JS SDK)
CMD_IDS = {
    "DiskUserInfoGet": 2201,
    "DiskDirList": 2208,
    "DiskDirBatchList": 2209,
    "DiskUserConfigGet": 2225,
    "DiskFileBatchDownload": 2402,
    "DiskFilePackageDownload": 2403,
    "DiskFileDocDownloadAbs": 2414,
    "DiskDirFileBatchDeleteEx": 2509,
    "DiskFileRename": 2605,
    "DiskDirCreate": 2614,
    "DiskDirAttrModify": 2615,
    "DiskDirFileBatchMove": 2618,
    "DiskRecycleList": 2702,
    "DiskRecycleDirFileBatchRestore": 2708,
    "DiskRecycleDirFileClear": 2710,
    "WeiyunShareList": 12008,
    "WeiyunShareDelete": 12007,
    "WeiyunShareAddV2": 12100,
    "WeiyunSharePwdCreate": 12012,
    "WeiyunSharePwdDelete": 12014,
    "WeiyunShareRenewal": 12035,
    "WeiyunShareTraceInfo": 12033,
    "FileSearchbyKeyWord": 247251,
    "FileSearchTipsList": 247250,
}


class WeiyunClient:
    """Tencent Weiyun API client.

    Supports file management, sharing, and space operations.
    Authentication via saved cookies file or direct cookies string.

    Usage:
        # Auto-load cookies from cookies.json
        client = WeiyunClient()

        # Or pass cookies string directly
        client = WeiyunClient(cookies_str="uin=xxx; skey=xxx; ...")
    """

    def __init__(self, cookies_str: str = None,
                 cookies_path: str = DEFAULT_COOKIES_PATH):
        """Initialize Weiyun client.

        Args:
            cookies_str: Optional cookies string. If not provided,
                         will try to load from cookies_path.
            cookies_path: Path to cookies JSON file.
        """
        self.session = requests.Session()
        self.session.headers.update({
            "User-Agent": (
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/134.0.0.0 Safari/537.36"
            ),
            "Referer": "https://www.weiyun.com/disk",
            "Origin": "https://www.weiyun.com",
        })

        # Store p_skey separately to avoid cookie domain conflicts
        self._p_skey = ""
        self._uin = ""
        self._warmed = False

        if cookies_str:
            cookies_dict = parse_cookies_str(cookies_str)
            self._p_skey = cookies_dict.get("p_skey", "")
            self._uin = cookies_dict.get("uin", "").lstrip("o").lstrip("0")
            self.session.cookies.update(cookies_dict)
        else:
            cookies_data = load_cookies(cookies_path)
            if cookies_data.get("cookies_dict"):
                self._p_skey = cookies_data["cookies_dict"].get("p_skey", "")
                self._uin = cookies_data["cookies_dict"].get(
                    "uin", ""
                ).lstrip("o").lstrip("0")
                self.session.cookies.update(cookies_data["cookies_dict"])
            elif cookies_data.get("cookies_str"):
                cookies_dict = parse_cookies_str(cookies_data["cookies_str"])
                self._p_skey = cookies_dict.get("p_skey", "")
                self._uin = cookies_dict.get(
                    "uin", ""
                ).lstrip("o").lstrip("0")
                self.session.cookies.update(cookies_dict)

    def _warm_session(self) -> None:
        """Warm up session by visiting /disk page to get wyctoken cookie.

        This is required before making API calls - the server sets
        a wyctoken cookie on the HTML page response that is needed
        as the g_tk CSRF token for API requests.
        """
        if self._warmed:
            return
        try:
            self.session.get(f"{API_BASE}/disk", timeout=10)
            self._warmed = True
        except requests.RequestException:
            pass  # Will proceed without warming, API may fail

    def _get_gtk(self) -> int:
        """Get g_tk token from wyctoken cookie.

        Must call _warm_session() first to obtain wyctoken.

        Returns:
            g_tk integer value.
        """
        for c in self.session.cookies:
            if c.name == "wyctoken":
                try:
                    return int(c.value)
                except ValueError:
                    pass
        return 5381

    def _get_uin(self) -> str:
        """Get numeric UIN from cookies.

        Returns:
            UIN string without 'o' prefix and leading zeros.
        """
        return self._uin or "0"

    def _get_token_info(self) -> dict:
        """Build token_info for API authentication.

        Returns:
            Token info dict matching the Weiyun JS SDK format.
        """
        return {
            "token_type": 0,
            "login_key_type": 27,
            "login_key_value": self._p_skey,
        }

    def _api_request(self, cmd: str, body: dict = None) -> dict:
        """Make an API request to Weiyun.

        Follows the exact format from Weiyun's JS SDK:
        - Session must be pre-warmed to obtain wyctoken cookie
        - req_header and req_body are JSON-stringified in the POST data
        - req_header.cmd uses numeric command ID
        - req_body contains ReqMsg_body with token_info and command data
        - g_tk (wyctoken) is passed as a URL query parameter

        Args:
            cmd: API command name (e.g., 'DiskDirList').
            body: Request body data for the specific command.

        Returns:
            API response as dict.
        """
        # Ensure session is warmed (gets wyctoken cookie)
        self._warm_session()

        g_tk = self._get_gtk()
        uin = self._get_uin()
        cmd_id = CMD_IDS.get(cmd, 0)
        protocol = CMD_PROTOCOLS.get(cmd, "weiyunQdiskClient")

        url = f"{API_BASE}/webapp/json/{protocol}/{cmd}"
        params = {
            "refer": "Chrome_Mac",
            "g_tk": str(g_tk),
            "r": str(random.random()),
        }

        # Build req_header matching JS SDK format
        req_header = {
            "seq": int(time.time()) + random.randint(0, 9999),
            "type": 1,
            "cmd": cmd_id,
            "appid": 30013,
            "version": 3,
            "major_version": 3,
            "minor_version": 3,
            "fix_version": 3,
            "wx_openid": "",
            "qq_openid": "",
            "user_flag": 0,
            "env_id": "",
            "uin": uin,
            "uid": uin,
        }

        # Build req_body matching JS SDK format
        req_body = {
            "ReqMsg_body": {
                "ext_req_head": {
                    "token_info": self._get_token_info(),
                    "language_info": {
                        "language_type": 2052,
                    },
                },
                f".weiyun.{cmd}MsgReq_body": body or {},
            },
        }

        # POST data: req_header and req_body are JSON strings
        post_data = {
            "req_header": json.dumps(req_header),
            "req_body": json.dumps(req_body),
        }

        try:
            resp = self.session.post(url, params=params, json=post_data,
                                     timeout=30)
            resp.raise_for_status()
            data = resp.json()

            # Response format:
            # - WAF block: {"ret": 403, "msg": "..."}
            # - Parse error: {"ret": 500, "msg": "..."}
            # - Success: {"data": {"rsp_header": {...}, "rsp_body": {...}}}
            if "ret" in data and data["ret"] != 0:
                return build_response(
                    False,
                    message=data.get("msg", f"API error (ret={data['ret']})"),
                    error_code="API_ERROR",
                )

            resp_data = data.get("data", data)
            rsp_header = resp_data.get("rsp_header", {})
            rsp_body = resp_data.get("rsp_body", {})
            rsp_msg_body = rsp_body.get("RspMsg_body", rsp_body)

            if rsp_header.get("retcode", 0) == 0:
                return build_response(True, data=rsp_msg_body)
            else:
                retcode = rsp_header.get("retcode", -1)
                msg = rsp_header.get("retmsg", f"API error (retcode={retcode})")
                return build_response(False, message=msg,
                                      error_code="API_ERROR")
        except requests.RequestException as e:
            return build_response(False, message=str(e),
                                  error_code="NETWORK_ERROR")
        except (json.JSONDecodeError, KeyError) as e:
            return build_response(False, message=f"Invalid response: {e}",
                                  error_code="API_ERROR")

    # ==================== File Management ====================

    def _get_root_dir_key(self) -> str:
        """Get the root directory key from DiskUserInfoGet.

        Returns:
            Root directory key string.
        """
        if hasattr(self, "_root_dir_key") and self._root_dir_key:
            return self._root_dir_key
        result = self._api_request("DiskUserInfoGet", {})
        if result["success"]:
            self._root_dir_key = result["data"].get("root_dir_key", "")
            self._main_dir_key = result["data"].get("main_dir_key", "")
            return self._root_dir_key
        return ""

    def _get_file_sha1(self, path: str) -> str:
        """Calculate SHA1 hash of a file.

        Args:
            path: Path to local file.

        Returns:
            SHA1 hex digest string.
        """
        sha1 = hashlib.sha1()
        with open(path, "rb") as f:
            while True:
                chunk = f.read(65536)
                if not chunk:
                    break
                sha1.update(chunk)
        return sha1.hexdigest()

    def list_files(self, remote_path: str = "/", sort_by: str = "name",
                   sort_order: str = "asc", page: int = 1,
                   page_size: int = 100) -> dict:
        """List files and folders in a directory.

        Args:
            remote_path: Remote directory path (currently uses root dir).
            sort_by: Sort field - 'name', 'size', or 'time'.
            sort_order: Sort order - 'asc' or 'desc'.
            page: Page number.
            page_size: Items per page.

        Returns:
            Response dict with file list.
        """
        sort_map = {"name": 0, "size": 1, "time": 2}
        start = (page - 1) * page_size

        # Use root dir key for "/" path
        root_key = self._get_root_dir_key()

        body = {
            "pdir_key": root_key if remote_path == "/" else "",
            "dir_key": root_key if remote_path == "/" else remote_path,
            "get_type": 0,
            "start": start,
            "count": page_size,
            "sort_field": sort_map.get(sort_by, 0),
            "reverse_order": sort_order == "desc",
            "get_abstract_url": True,
        }
        result = self._api_request("DiskDirList", body)
        if not result["success"]:
            return result

        # Format file list
        raw_files = result["data"].get("file_list", [])
        raw_dirs = result["data"].get("dir_list", [])
        files = []

        for d in raw_dirs:
            files.append({
                "file_id": d.get("dir_key", ""),
                "name": d.get("dir_name", ""),
                "type": "folder",
                "size": 0,
                "size_str": "-",
                "path": d.get("dir_path", ""),
                "updated_at": d.get("dir_mtime", ""),
            })

        for f in raw_files:
            size = f.get("file_size", 0)
            files.append({
                "file_id": f.get("file_id", ""),
                "name": f.get("filename", "") or f.get("file_name", ""),
                "type": "file",
                "size": size,
                "size_str": format_size(size),
                "path": f.get("file_path", ""),
                "updated_at": f.get("file_mtime", ""),
            })

        total_dirs = result["data"].get("total_dir_count", len(raw_dirs))
        total_files = result["data"].get("total_file_count", len(raw_files))
        return build_response(True, data={
            "files": files,
            "total": total_dirs + total_files,
            "pdir_key": result["data"].get("pdir_key", ""),
        })

    def upload_file(self, local_path: str, remote_path: str,
                    overwrite: bool = False) -> dict:
        """Upload a local file to Weiyun.

        Uses the real Weiyun upload API:
        1. PreUpload (cmd=247120) - send file metadata, check for instant upload
        2. Upload Piece (cmd=247121) - upload actual file data

        Args:
            local_path: Path to local file.
            remote_path: Target path on Weiyun (e.g., '/README.md').
            overwrite: Whether to overwrite existing file.

        Returns:
            Response dict with upload result.
        """
        if not os.path.isfile(local_path):
            return build_response(False,
                                  message=f"Local file not found: {local_path}",
                                  error_code="FILE_NOT_FOUND")

        # Warm session first
        self._warm_session()

        file_size = os.path.getsize(local_path)
        file_name = os.path.basename(remote_path) or os.path.basename(local_path)
        file_md5 = get_file_md5(local_path)
        file_sha = self._get_file_sha1(local_path)

        # Get root dir key for upload target
        root_key = self._get_root_dir_key()
        main_dir_key = getattr(self, "_main_dir_key", root_key)

        g_tk = self._get_gtk()
        uin = self._get_uin()

        # Step 1: PreUpload
        pre_upload_header = {
            "cmd": 247120,
            "appid": 30013,
            "version": 3,
            "major_version": 3,
            "minor_version": 0,
            "fix_version": 0,
            "type": 1,
            "user_flag": 0,
            "env_id": "",
            "login_keytype": 27,
            "uin": uin,
            "uid": uin,
        }

        pre_upload_body = {
            "ReqMsg_body": {
                "ext_req_head": {
                    "token_info": self._get_token_info(),
                    "language_info": {"language_type": 2052},
                },
                ".weiyun.PreUploadMsgReq_body": {
                    "req": {
                        "common_upload_req": {
                            "ppdir_key": root_key,
                            "pdir_key": main_dir_key,
                            "file_size": file_size,
                            "filename": file_name,
                            "file_exist_option": 6 if overwrite else 0,
                            "use_mutil_channel": True,
                            "file_sha": file_sha,
                            "file_md5": file_md5,
                        },
                        "upload_scr": 0,
                    },
                },
            },
        }

        pre_upload_data = {
            "req_header": json.dumps(pre_upload_header),
            "req_body": json.dumps(pre_upload_body),
        }

        try:
            pre_resp = self.session.post(
                f"{API_BASE}/api/v3/ftn_pre_upload",
                params={"g_tk": str(g_tk), "r": str(random.random())},
                json=pre_upload_data,
                timeout=30,
            )
            pre_resp.raise_for_status()
            pre_data = pre_resp.json()
        except requests.RequestException as e:
            return build_response(False, message=f"PreUpload failed: {e}",
                                  error_code="NETWORK_ERROR")
        except json.JSONDecodeError as e:
            return build_response(False,
                                  message=f"PreUpload invalid response: {e}",
                                  error_code="API_ERROR")

        # Check for errors
        if "ret" in pre_data and pre_data["ret"] != 0:
            return build_response(
                False,
                message=pre_data.get("msg", f"PreUpload error (ret={pre_data['ret']})"),
                error_code="API_ERROR",
            )

        resp_data = pre_data.get("data", {})
        rsp_body = resp_data.get("rsp_body", {})
        rsp_msg = rsp_body.get("RspMsg_body", {})
        pre_result = rsp_msg.get(
            ".weiyun.PreUploadMsgRsp_body",
            rsp_msg,
        )

        file_exist = pre_result.get("file_exist", False)
        common_rsp = pre_result.get("common_upload_rsp",
                                     pre_result.get("rsp", {}))
        if isinstance(common_rsp, dict) and "common_upload_rsp" in common_rsp:
            common_rsp = common_rsp["common_upload_rsp"]

        file_id = common_rsp.get("file_id", "")
        upload_filename = common_rsp.get("filename", file_name)

        # If file already exists (instant upload / sec upload), done!
        if file_exist:
            return build_response(True, data={
                "file_id": file_id,
                "name": upload_filename,
                "size": file_size,
                "remote_path": remote_path,
                "md5": file_md5,
                "uploaded_at": get_timestamp(),
                "instant_upload": True,
            })

        # Step 2: Upload file data
        # Get channel info from preUpload response
        channel = common_rsp.get("channel", {})
        upload_url = (
            f"https://upload.weiyun.com/ftnup_v2/weiyun?cmd=247121"
        )

        upload_header = {
            "cmd": 247121,
            "appid": 30013,
            "version": 0,
            "major_version": 3,
            "minor_version": 0,
            "fix_version": 0,
            "user_flag": 0,
        }

        upload_body = {
            "ReqMsg_body": {
                ".weiyun.UploadPieceMsgReq_body": {
                    "req": channel if channel else common_rsp,
                },
            },
        }

        upload_json_str = json.dumps({
            "req_header": upload_header,
            "req_body": upload_body,
        })

        try:
            with open(local_path, "rb") as f:
                files = {
                    "json": (None, upload_json_str, "application/json"),
                    "upload": (file_name, f, "application/octet-stream"),
                }
                upload_resp = self.session.post(
                    upload_url,
                    files=files,
                    timeout=300,
                )

            if upload_resp.status_code != 200:
                # Fallback to backup URL
                with open(local_path, "rb") as f:
                    files = {
                        "json": (None, upload_json_str, "application/json"),
                        "upload": (file_name, f, "application/octet-stream"),
                    }
                    upload_resp = self.session.post(
                        f"{API_BASE}/ftnup_v2/weiyun?cmd=247121",
                        files=files,
                        timeout=300,
                    )

            upload_data = upload_resp.json()
            if upload_resp.status_code != 200:
                return build_response(
                    False,
                    message=f"Upload failed: HTTP {upload_resp.status_code}",
                    error_code="NETWORK_ERROR",
                )
        except requests.RequestException as e:
            return build_response(False, message=f"Upload error: {e}",
                                  error_code="NETWORK_ERROR")
        except json.JSONDecodeError:
            # Upload may return non-JSON on success
            pass

        return build_response(True, data={
            "file_id": file_id,
            "name": upload_filename,
            "size": file_size,
            "remote_path": remote_path,
            "md5": file_md5,
            "uploaded_at": get_timestamp(),
            "instant_upload": False,
        })

    def _download_single_file(self, file_id: str, pdir_key: str,
                              local_path: str) -> dict:
        """Download a single file using DiskFileBatchDownload API.

        Args:
            file_id: File ID on Weiyun.
            pdir_key: Parent directory key.
            local_path: Local destination path.

        Returns:
            Response dict with download result.
        """
        body = {
            "file_list": [{"file_id": file_id, "pdir_key": pdir_key}],
            "download_type": 0,
        }
        result = self._api_request("DiskFileBatchDownload", body)
        if not result["success"]:
            return result

        file_list = result["data"].get("file_list", [])
        if not file_list:
            return build_response(False,
                                  message="No download info returned",
                                  error_code="API_ERROR")

        info = file_list[0]
        download_url = info.get("https_download_url", "") or info.get(
            "download_url", "")
        if not download_url:
            return build_response(False, message="No download URL returned",
                                  error_code="API_ERROR")

        # Set FTN cookie for download authentication
        cookie_name = info.get("cookie_name", "FTN5K")
        cookie_value = info.get("cookie_value", "")
        if cookie_value:
            self.session.cookies.set(cookie_name, cookie_value,
                                     domain=".weiyun.com", path="/")

        ensure_dir(local_path)
        start_time = time.time()
        try:
            resp = self.session.get(download_url, stream=True, timeout=300)
            resp.raise_for_status()
            with open(local_path, "wb") as f:
                for chunk in resp.iter_content(chunk_size=65536):
                    if chunk:
                        f.write(chunk)
        except requests.RequestException as e:
            return build_response(False, message=f"Download error: {e}",
                                  error_code="NETWORK_ERROR")

        elapsed = round(time.time() - start_time, 2)
        file_size = os.path.getsize(local_path)
        file_md5 = get_file_md5(local_path)

        return build_response(True, data={
            "local_path": local_path,
            "size": file_size,
            "md5": file_md5,
            "elapsed": elapsed,
        })

    def _download_package(self, pdir_key: str, dir_list: list,
                          file_list: list, zip_filename: str,
                          local_path: str) -> dict:
        """Download files/folders as a zip package using DiskFilePackageDownload.

        Args:
            pdir_key: Parent directory key.
            dir_list: List of dicts with dir_key and dir_name.
            file_list: List of dicts with file_id and pdir_key.
            zip_filename: Name for the zip file (URL-encoded).
            local_path: Local destination path for the zip file.

        Returns:
            Response dict with download result.
        """
        import urllib.parse

        body = {
            "pdir_list": [{
                "pdir_key": pdir_key,
                "dir_list": dir_list,
                "file_list": file_list,
            }],
            "zip_filename": urllib.parse.quote(zip_filename),
        }
        result = self._api_request("DiskFilePackageDownload", body)
        if not result["success"]:
            return result

        download_url = result["data"].get("https_download_url", "") or \
            result["data"].get("download_url", "")
        if not download_url:
            return build_response(False, message="No download URL returned",
                                  error_code="API_ERROR")

        # Set FTN cookie for download authentication
        cookie_name = result["data"].get("cookie_name", "FTN5K")
        cookie_value = result["data"].get("cookie_value", "")
        if cookie_value:
            self.session.cookies.set(cookie_name, cookie_value,
                                     domain=".weiyun.com", path="/")

        ensure_dir(local_path)
        start_time = time.time()
        try:
            resp = self.session.get(download_url, stream=True, timeout=600)
            resp.raise_for_status()
            with open(local_path, "wb") as f:
                for chunk in resp.iter_content(chunk_size=65536):
                    if chunk:
                        f.write(chunk)
        except requests.RequestException as e:
            return build_response(False, message=f"Download error: {e}",
                                  error_code="NETWORK_ERROR")

        elapsed = round(time.time() - start_time, 2)
        file_size = os.path.getsize(local_path)
        file_md5 = get_file_md5(local_path)

        return build_response(True, data={
            "local_path": local_path,
            "size": file_size,
            "size_str": format_size(file_size),
            "md5": file_md5,
            "elapsed": elapsed,
        })

    def download_file(self, remote_path: str, local_path: str,
                      overwrite: bool = False) -> dict:
        """Download a file from Weiyun to local.

        Supports both file path names and file_id based lookups.
        The remote_path can be a file name found via list_files.

        Args:
            remote_path: Remote file path or name on Weiyun.
            local_path: Local destination path.
            overwrite: Whether to overwrite local file.

        Returns:
            Response dict with download result.
        """
        if os.path.exists(local_path) and not overwrite:
            return build_response(
                False,
                message=f"Local file already exists: {local_path}",
                error_code="DUPLICATE_NAME"
            )

        # Need to find the file in the directory listing
        # Use root dir to search for the file
        root_key = self._get_root_dir_key()
        main_dir_key = getattr(self, "_main_dir_key", root_key)

        # List files in the main dir to find the target file
        list_result = self.list_files(main_dir_key)
        if not list_result["success"]:
            return list_result

        target_file = None
        for f in list_result["data"]["files"]:
            if f["type"] == "file" and f["name"] == remote_path:
                target_file = f
                break

        if not target_file:
            return build_response(
                False,
                message=f"File not found: {remote_path}",
                error_code="FILE_NOT_FOUND"
            )

        return self._download_single_file(
            file_id=target_file["file_id"],
            pdir_key=main_dir_key,
            local_path=local_path,
        )

    def download_folder(self, folder_name: str, local_path: str,
                        overwrite: bool = False,
                        as_zip: bool = False) -> dict:
        """Download a folder from Weiyun to local.

        Supports two modes:
        1. Recursive download: downloads each file individually, preserving
           the folder structure locally.
        2. Zip download: downloads the entire folder as a zip file.

        Args:
            folder_name: Folder name on Weiyun (as shown in list_files).
            local_path: Local destination directory (or zip file path).
            overwrite: Whether to overwrite existing local files.
            as_zip: If True, download as a single zip file.

        Returns:
            Response dict with download result.
        """
        # Find the folder in root listing
        root_key = self._get_root_dir_key()
        main_dir_key = getattr(self, "_main_dir_key", root_key)

        list_result = self.list_files(main_dir_key)
        if not list_result["success"]:
            return list_result

        target_folder = None
        for f in list_result["data"]["files"]:
            if f["type"] == "folder" and f["name"] == folder_name:
                target_folder = f
                break

        if not target_folder:
            return build_response(
                False,
                message=f"Folder not found: {folder_name}",
                error_code="FOLDER_NOT_FOUND"
            )

        folder_dir_key = target_folder["file_id"]

        if as_zip:
            # Download as zip package
            zip_path = local_path
            if os.path.isdir(local_path):
                zip_path = os.path.join(local_path, f"{folder_name}.zip")

            if os.path.exists(zip_path) and not overwrite:
                return build_response(
                    False,
                    message=f"Local file already exists: {zip_path}",
                    error_code="DUPLICATE_NAME"
                )

            return self._download_package(
                pdir_key=main_dir_key,
                dir_list=[{
                    "dir_key": folder_dir_key,
                    "dir_name": folder_name,
                }],
                file_list=[],
                zip_filename=folder_name,
                local_path=zip_path,
            )

        # Recursive download mode
        return self._download_folder_recursive(
            pdir_key=main_dir_key,
            dir_key=folder_dir_key,
            dir_name=folder_name,
            local_base=local_path,
            overwrite=overwrite,
        )

    def _download_folder_recursive(self, pdir_key: str, dir_key: str,
                                   dir_name: str, local_base: str,
                                   overwrite: bool = False) -> dict:
        """Recursively download folder contents.

        Args:
            pdir_key: Parent directory key.
            dir_key: Directory key to download.
            dir_name: Directory name (for local path).
            local_base: Local base directory path.
            overwrite: Whether to overwrite existing files.

        Returns:
            Response dict with download summary.
        """
        local_dir = os.path.join(local_base, dir_name)
        os.makedirs(local_dir, exist_ok=True)

        # List contents of this folder
        list_result = self.list_files(dir_key)
        if not list_result["success"]:
            return list_result

        downloaded_files = []
        failed_files = []
        total_size = 0
        start_time = time.time()

        for item in list_result["data"]["files"]:
            if item["type"] == "folder":
                # Recurse into subfolder
                sub_result = self._download_folder_recursive(
                    pdir_key=dir_key,
                    dir_key=item["file_id"],
                    dir_name=item["name"],
                    local_base=local_dir,
                    overwrite=overwrite,
                )
                if sub_result["success"]:
                    downloaded_files.extend(
                        sub_result["data"].get("downloaded_files", []))
                    failed_files.extend(
                        sub_result["data"].get("failed_files", []))
                    total_size += sub_result["data"].get("total_size", 0)
                else:
                    failed_files.append({
                        "name": item["name"],
                        "error": sub_result["message"],
                    })
            else:
                # Download file
                if not item["name"]:
                    # Skip files with empty names
                    failed_files.append({
                        "name": "(unnamed)",
                        "error": "File has no name, skipped",
                    })
                    continue
                file_local_path = os.path.join(local_dir, item["name"])
                if os.path.exists(file_local_path) and not overwrite:
                    failed_files.append({
                        "name": item["name"],
                        "error": "File already exists",
                    })
                    continue

                result = self._download_single_file(
                    file_id=item["file_id"],
                    pdir_key=dir_key,
                    local_path=file_local_path,
                )
                if result["success"]:
                    downloaded_files.append({
                        "name": item["name"],
                        "local_path": file_local_path,
                        "size": result["data"]["size"],
                        "size_str": format_size(result["data"]["size"]),
                    })
                    total_size += result["data"]["size"]
                else:
                    failed_files.append({
                        "name": item["name"],
                        "error": result["message"],
                    })

        elapsed = round(time.time() - start_time, 2)

        return build_response(True, data={
            "folder_name": dir_name,
            "local_path": local_dir,
            "downloaded_files": downloaded_files,
            "failed_files": failed_files,
            "downloaded_count": len(downloaded_files),
            "failed_count": len(failed_files),
            "total_size": total_size,
            "total_size_str": format_size(total_size),
            "elapsed": elapsed,
        })

    def delete_file(self, remote_path: str,
                    permanent: bool = False) -> dict:
        """Delete a file or folder on Weiyun.

        Args:
            remote_path: Path to delete.
            permanent: If True, permanently delete (skip recycle bin).

        Returns:
            Response dict with deletion result.
        """
        body = {
            "file_path": remote_path,
            "permanent": permanent,
        }
        result = self._api_request("DiskFileDelete", body)
        if not result["success"]:
            return result

        return build_response(True, data={
            "deleted_path": remote_path,
            "is_permanent": permanent,
            "deleted_at": get_timestamp(),
        })

    def move_file(self, source_path: str, target_path: str) -> dict:
        """Move a file or folder to another directory.

        Args:
            source_path: Source file/folder path.
            target_path: Target directory path.

        Returns:
            Response dict with move result.
        """
        body = {
            "src_path": source_path,
            "dst_path": target_path,
        }
        result = self._api_request("DiskFileMove", body)
        if not result["success"]:
            return result

        file_name = os.path.basename(source_path)
        new_path = os.path.join(target_path, file_name)
        return build_response(True, data={
            "source_path": source_path,
            "target_path": new_path,
        })

    def copy_file(self, source_path: str, target_path: str) -> dict:
        """Copy a file or folder to another directory.

        Args:
            source_path: Source file/folder path.
            target_path: Target directory path.

        Returns:
            Response dict with copy result.
        """
        body = {
            "src_path": source_path,
            "dst_path": target_path,
        }
        result = self._api_request("DiskFileCopy", body)
        if not result["success"]:
            return result

        file_name = os.path.basename(source_path)
        new_path = os.path.join(target_path, file_name)
        return build_response(True, data={
            "source_path": source_path,
            "target_path": new_path,
            "new_file_id": result["data"].get("file_id", ""),
        })

    def rename_file(self, remote_path: str, new_name: str) -> dict:
        """Rename a file or folder.

        Args:
            remote_path: Current file path.
            new_name: New name (without path).

        Returns:
            Response dict with rename result.
        """
        body = {
            "file_path": remote_path,
            "new_name": new_name,
        }
        result = self._api_request("DiskFileRename", body)
        if not result["success"]:
            return result

        parent_dir = os.path.dirname(remote_path)
        new_path = os.path.join(parent_dir, new_name)
        return build_response(True, data={
            "old_path": remote_path,
            "new_path": new_path,
        })

    def create_folder(self, remote_path: str) -> dict:
        """Create a folder on Weiyun.

        Args:
            remote_path: Folder path to create.

        Returns:
            Response dict with folder creation result.
        """
        body = {"dir_path": remote_path}
        result = self._api_request("DiskDirCreate", body)
        if not result["success"]:
            return result

        return build_response(True, data={
            "folder_id": result["data"].get("dir_key", ""),
            "path": remote_path,
            "created_at": get_timestamp(),
        })

    def search_files(self, keyword: str, file_type: str = "all",
                     page: int = 1, page_size: int = 50) -> dict:
        """Search files by keyword.

        Args:
            keyword: Search keyword.
            file_type: Type filter - 'all', 'document', 'image', 'video', 'audio'.
            page: Page number.
            page_size: Items per page.

        Returns:
            Response dict with search results.
        """
        type_map = {"all": 0, "document": 1, "image": 2, "video": 3, "audio": 4}
        body = {
            "keyword": keyword,
            "search_type": type_map.get(file_type, 0),
            "start": (page - 1) * page_size,
            "count": page_size,
        }
        result = self._api_request("DiskFileSearch", body)
        if not result["success"]:
            return result

        raw_files = result["data"].get("file_list", [])
        results = []
        for f in raw_files:
            size = f.get("file_size", 0)
            results.append({
                "file_id": f.get("file_id", ""),
                "name": f.get("file_name", ""),
                "type": "file",
                "size_str": format_size(size),
                "path": f.get("file_path", ""),
            })

        return build_response(True, data={
            "results": results,
            "total": result["data"].get("total_count", len(results)),
        })

    # ==================== Share Management ====================

    def create_share(self, remote_path: str, expire_days: int = 0,
                     password: str = None) -> dict:
        """Create a share link for a file or folder.

        Args:
            remote_path: Path to share.
            expire_days: Expiry in days (0 = permanent).
            password: Optional 4-char password.

        Returns:
            Response dict with share link info.
        """
        body = {
            "file_path": remote_path,
            "expire_days": expire_days,
        }
        if password:
            body["password"] = password

        result = self._api_request("DiskShareCreate", body)
        if not result["success"]:
            return result

        return build_response(True, data={
            "share_id": result["data"].get("share_id", ""),
            "share_url": result["data"].get("share_url", ""),
            "password": password or "",
            "expire_at": result["data"].get("expire_time", ""),
            "created_at": get_timestamp(),
        })

    def cancel_share(self, share_id: str) -> dict:
        """Cancel an existing share.

        Args:
            share_id: Share ID to cancel.

        Returns:
            Response dict with cancellation result.
        """
        body = {"share_id": share_id}
        result = self._api_request("DiskShareCancel", body)
        if not result["success"]:
            return result

        return build_response(True, data={
            "share_id": share_id,
            "cancelled_at": get_timestamp(),
        })

    def list_shares(self, status: str = "all", page: int = 1,
                    page_size: int = 20) -> dict:
        """List all share links.

        Args:
            status: Filter by status - 'all', 'active', 'expired'.
            page: Page number.
            page_size: Items per page.

        Returns:
            Response dict with share list.
        """
        status_map = {"all": 0, "active": 1, "expired": 2}
        body = {
            "status": status_map.get(status, 0),
            "start": (page - 1) * page_size,
            "count": page_size,
        }
        result = self._api_request("DiskShareList", body)
        if not result["success"]:
            return result

        raw_shares = result["data"].get("share_list", [])
        shares = []
        for s in raw_shares:
            shares.append({
                "share_id": s.get("share_id", ""),
                "share_url": s.get("share_url", ""),
                "file_name": s.get("file_name", ""),
                "status": s.get("status", ""),
                "view_count": s.get("view_count", 0),
                "download_count": s.get("download_count", 0),
                "created_at": s.get("create_time", ""),
                "expire_at": s.get("expire_time", ""),
            })

        return build_response(True, data={
            "shares": shares,
            "total": result["data"].get("total_count", len(shares)),
        })

    # ==================== Space Management ====================

    def get_space_info(self) -> dict:
        """Get storage space usage information.

        Returns:
            Response dict with space info.
        """
        result = self._api_request("DiskSpaceQuery", {})
        if not result["success"]:
            return result

        total = result["data"].get("total_space", 0)
        used = result["data"].get("used_space", 0)
        free = max(0, total - used)
        percent = round((used / total * 100), 1) if total > 0 else 0

        return build_response(True, data={
            "total_space": total,
            "total_space_str": format_size(total),
            "used_space": used,
            "used_space_str": format_size(used),
            "free_space": free,
            "free_space_str": format_size(free),
            "usage_percent": percent,
            "file_count": result["data"].get("file_count", 0),
            "folder_count": result["data"].get("dir_count", 0),
        })

    def get_recycle_bin(self, page: int = 1, page_size: int = 50) -> dict:
        """Get files in recycle bin.

        Args:
            page: Page number.
            page_size: Items per page.

        Returns:
            Response dict with recycle bin contents.
        """
        body = {
            "start": (page - 1) * page_size,
            "count": page_size,
        }
        result = self._api_request("DiskRecycleList", body)
        if not result["success"]:
            return result

        raw_files = result["data"].get("file_list", [])
        files = []
        total_size = 0
        for f in raw_files:
            size = f.get("file_size", 0)
            total_size += size
            files.append({
                "file_id": f.get("file_id", ""),
                "name": f.get("file_name", ""),
                "size_str": format_size(size),
                "original_path": f.get("original_path", ""),
                "deleted_at": f.get("delete_time", ""),
            })

        return build_response(True, data={
            "files": files,
            "total": result["data"].get("total_count", len(files)),
            "total_size_str": format_size(total_size),
        })

    def restore_file(self, file_id: str) -> dict:
        """Restore a file from recycle bin.

        Args:
            file_id: File ID in recycle bin.

        Returns:
            Response dict with restoration result.
        """
        body = {"file_id": file_id}
        result = self._api_request("DiskRecycleRestore", body)
        if not result["success"]:
            return result

        return build_response(True, data={
            "file_id": file_id,
            "restored_path": result["data"].get("restore_path", ""),
            "restored_at": get_timestamp(),
        })

    def clear_recycle_bin(self, confirm: bool = False) -> dict:
        """Clear all files in recycle bin. This action is irreversible!

        Args:
            confirm: Must be True to execute.

        Returns:
            Response dict with clear result.
        """
        if not confirm:
            return build_response(
                False,
                message="Must set confirm=True to clear recycle bin",
                error_code="INVALID_PARAM"
            )

        result = self._api_request("DiskRecycleClear", {})
        if not result["success"]:
            return result

        return build_response(True, data={
            "deleted_count": result["data"].get("delete_count", 0),
            "freed_space_str": format_size(
                result["data"].get("freed_space", 0)
            ),
            "cleared_at": get_timestamp(),
        })
