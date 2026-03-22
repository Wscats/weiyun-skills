#!/usr/bin/env python3
"""Debug: test the correct API request format for Weiyun."""
import json
import time
import random
import requests

with open("cookies.json", "r") as f:
    data = json.load(f)

cookies = data.get("cookies_dict", {})
p_skey = cookies.get("p_skey", "")
uin = cookies.get("uin", "").lstrip("o").lstrip("0") or "0"

print(f"uin: {uin}")
print(f"p_skey: {p_skey[:20]}...")

session = requests.Session()
session.headers.update({
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/134.0.0.0 Safari/537.36"
    ),
    "Referer": "https://www.weiyun.com/disk",
    "Origin": "https://www.weiyun.com",
})
# Update cookies simply (no domain specification)
session.cookies.update(cookies)

req_header = json.dumps({
    "seq": int(time.time()) + random.randint(0, 9999),
    "type": 1,
    "cmd": "DiskUserInfoGet",
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
})

req_body = json.dumps({
    "ReqMsg_body": {
        "ext_req_head": {
            "token_info": {
                "token_type": 0,
                "login_key_type": 27,
                "login_key_value": p_skey,
            },
            "language_info": {"language_type": 2052},
        },
        ".weiyun.DiskUserInfoGetMsgReq_body": {},
    },
})

url = "https://www.weiyun.com/webapp/json/weiyunQdiskClient/DiskUserInfoGet"
params = {"refer": "Chrome_Mac", "g_tk": "5381", "r": str(random.random())}

# Method 1: form-encoded data (axios default)
print("\n=== Test 1: form-encoded ===")
try:
    r = session.post(url, params=params,
                     data={"req_header": req_header, "req_body": req_body},
                     timeout=10)
    print(f"  Status: {r.status_code}")
    print(f"  Body: {r.text[:300]}")
except Exception as e:
    print(f"  Error: {e}")

# Method 2: json-encoded
print("\n=== Test 2: json-encoded ===")
try:
    r = session.post(url, params=params,
                     json={"req_header": req_header, "req_body": req_body},
                     timeout=10)
    print(f"  Status: {r.status_code}")
    print(f"  Body: {r.text[:300]}")
except Exception as e:
    print(f"  Error: {e}")

# Method 3: Use curl to compare
print("\n=== Test 3: direct curl comparison ===")
import subprocess
curl_cmd = [
    "curl", "-s", "-w", "\nHTTP_CODE:%{http_code}",
    "-X", "POST",
    f"{url}?refer=Chrome_Mac&g_tk=5381&r={random.random()}",
    "-H", "Origin: https://www.weiyun.com",
    "-H", "Referer: https://www.weiyun.com/disk",
    "-H", f"Cookie: {data.get('cookies_str', '')}",
    "--data-urlencode", f"req_header={req_header}",
    "--data-urlencode", f"req_body={req_body}",
    "--max-time", "10",
]
try:
    result = subprocess.run(curl_cmd, capture_output=True, text=True, timeout=15)
    print(f"  Output: {result.stdout[:400]}")
    if result.stderr:
        print(f"  Stderr: {result.stderr[:200]}")
except Exception as e:
    print(f"  Error: {e}")

print("\nDone!")
