#!/usr/bin/env python3
"""Debug: test API with session pre-warming."""
import json
import time
import random
import requests

with open("cookies.json", "r") as f:
    data = json.load(f)

cookies = data.get("cookies_dict", {})
p_skey = cookies.get("p_skey", "")
uin = cookies.get("uin", "").lstrip("o").lstrip("0") or "0"

session = requests.Session()
session.headers.update({
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/134.0.0.0 Safari/537.36"
    ),
})
session.cookies.update(cookies)

# Step 1: Visit disk page
print("[1] Visiting /disk to warm session...")
r = session.get("https://www.weiyun.com/disk", timeout=10)
print(f"  Status: {r.status_code}")

# Get all cookies after visit
all_cookies = {}
for c in session.cookies:
    all_cookies[c.name] = c.value
wyctoken = all_cookies.get("wyctoken", "")
print(f"  wyctoken: {wyctoken}")
print(f"  Total cookies: {len(all_cookies)}")

g_tk = int(wyctoken) if wyctoken and wyctoken.isdigit() else 5381

# Step 2: API call
print(f"\n[2] API call (g_tk={g_tk})...")
req_header = json.dumps({
    "seq": int(time.time()) + random.randint(0, 9999),
    "type": 1, "cmd": "DiskUserInfoGet", "appid": 30013,
    "version": 3, "major_version": 3, "minor_version": 3, "fix_version": 3,
    "wx_openid": "", "qq_openid": "", "user_flag": 0, "env_id": "",
    "uin": uin, "uid": uin,
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

r2 = session.post(
    "https://www.weiyun.com/webapp/json/weiyunQdiskClient/DiskUserInfoGet",
    params={"refer": "Chrome_Mac", "g_tk": str(g_tk), "r": str(random.random())},
    json={"req_header": req_header, "req_body": req_body},
    headers={
        "Referer": "https://www.weiyun.com/disk",
        "Origin": "https://www.weiyun.com",
    },
    timeout=10,
)
print(f"  Status: {r2.status_code}")
print(f"  Headers: {dict(r2.headers)}")
print(f"  Body: {r2.text[:400]}")
print("\nDone!")
