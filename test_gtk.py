#!/usr/bin/env python3
"""Debug: Try different API endpoint formats for Weiyun."""
import json
import requests
import sys

with open("cookies.json", "r") as f:
    data = json.load(f)

cookies = data.get("cookies_dict", {})
session = requests.Session()
session.cookies.update(cookies)
session.headers.update({
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/134.0.0.0 Safari/537.36"
    ),
    "Referer": "https://www.weiyun.com/disk",
    "Origin": "https://www.weiyun.com",
})

# Build g_tk token from skey
def get_gtk(skey):
    h = 5381
    for c in skey:
        h += (h << 5) + ord(c)
    return h & 0x7FFFFFFF

skey = cookies.get("skey", "")
p_skey = cookies.get("p_skey", "")
gtk = get_gtk(skey)
p_gtk = get_gtk(p_skey)
print(f"skey: {skey}")
print(f"p_skey: {p_skey[:20]}...")
print(f"g_tk: {gtk}")
print(f"p_gtk: {p_gtk}")

tests = [
    # Test 1: Standard JSON with g_tk param
    {
        "name": "JSON + g_tk",
        "url": f"https://www.weiyun.com/webapp/json/weiyunQdiskClient/DiskUserInfoGet?g_tk={gtk}",
        "method": "POST",
        "json": {
            "req_header": {"cmd": "DiskUserInfoGet", "main_v": 12, "sub_v": 1},
            "req_body": {},
        },
    },
    # Test 2: With p_gtk
    {
        "name": "JSON + p_gtk",
        "url": f"https://www.weiyun.com/webapp/json/weiyunQdiskClient/DiskUserInfoGet?g_tk={p_gtk}",
        "method": "POST",
        "json": {
            "req_header": {"cmd": "DiskUserInfoGet", "main_v": 12, "sub_v": 1},
            "req_body": {},
        },
    },
    # Test 3: DiskDirList with g_tk
    {
        "name": "DiskDirList + g_tk",
        "url": f"https://www.weiyun.com/webapp/json/weiyunQdiskClient/DiskDirList?g_tk={gtk}",
        "method": "POST",
        "json": {
            "req_header": {"cmd": "DiskDirList", "main_v": 12, "sub_v": 1},
            "req_body": {"pdir_key": 0, "start": 0, "count": 20},
        },
    },
    # Test 4: DiskDirList with p_gtk
    {
        "name": "DiskDirList + p_gtk",
        "url": f"https://www.weiyun.com/webapp/json/weiyunQdiskClient/DiskDirList?g_tk={p_gtk}",
        "method": "POST",
        "json": {
            "req_header": {"cmd": "DiskDirList", "main_v": 12, "sub_v": 1},
            "req_body": {"pdir_key": 0, "start": 0, "count": 20},
        },
    },
]

for t in tests:
    print(f"\n--- {t['name']} ---")
    try:
        if t["method"] == "POST":
            r = session.post(t["url"], json=t.get("json"), timeout=5)
        else:
            r = session.get(t["url"], timeout=5)
        print(f"  Status: {r.status_code}")
        body = r.text[:300] if r.text else "(empty)"
        print(f"  Body: {body}")
    except Exception as e:
        print(f"  Error: {e}")

print("\nDone!")
