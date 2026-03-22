#!/usr/bin/env python3
"""Debug: trace the complete upload process."""
import sys
import json
import time
import random
import hashlib
import os

sys.path.insert(0, "/Users/reky/Documents/GitHub/weiyun-skills")
from weiyun_skills.client import WeiyunClient

client = WeiyunClient(
    cookies_path="/Users/reky/Documents/GitHub/weiyun-skills/cookies.json"
)
client._warm_session()

readme_path = "/Users/reky/Documents/GitHub/weiyun-skills/README.md"
file_size = os.path.getsize(readme_path)
file_name = "README.md"

# Calculate hashes
md5 = hashlib.md5()
sha1 = hashlib.sha1()
with open(readme_path, "rb") as f:
    data = f.read()
    md5.update(data)
    sha1.update(data)
file_md5 = md5.hexdigest()
file_sha = sha1.hexdigest()

print(f"File: {file_name}")
print(f"Size: {file_size}")
print(f"MD5:  {file_md5}")
print(f"SHA1: {file_sha}")

root_key = client._get_root_dir_key()
main_key = getattr(client, "_main_dir_key", root_key)
g_tk = client._get_gtk()
uin = client._get_uin()

print(f"Root: {root_key}")
print(f"Main: {main_key}")
print(f"g_tk: {g_tk}")

# PreUpload
print("\n=== PreUpload ===")
pre_header = {
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

pre_body = {
    "ReqMsg_body": {
        "ext_req_head": {
            "token_info": client._get_token_info(),
            "language_info": {"language_type": 2052},
        },
        ".weiyun.PreUploadMsgReq_body": {
            "req": {
                "common_upload_req": {
                    "ppdir_key": root_key,
                    "pdir_key": main_key,
                    "file_size": file_size,
                    "filename": file_name,
                    "file_exist_option": 6,
                    "use_mutil_channel": True,
                    "file_sha": file_sha,
                    "file_md5": file_md5,
                },
                "upload_scr": 0,
            },
        },
    },
}

resp = client.session.post(
    "https://www.weiyun.com/api/v3/ftn_pre_upload",
    params={"g_tk": str(g_tk), "r": str(random.random())},
    json={
        "req_header": json.dumps(pre_header),
        "req_body": json.dumps(pre_body),
    },
    timeout=30,
)

print(f"Status: {resp.status_code}")
pre_data = resp.json()
print(f"Raw response:")
print(json.dumps(pre_data, indent=2, ensure_ascii=False)[:2000])

print("\nDone!")
