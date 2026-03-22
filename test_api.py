#!/usr/bin/env python3
"""Debug script: test Weiyun API with saved cookies."""
import json
import requests
import sys

def main():
    with open("cookies.json", "r") as f:
        data = json.load(f)

    cookies = data.get("cookies_dict", {})
    print("Key cookies:")
    for k in ["uin", "skey", "p_skey", "p_uin", "pt4_token", "TOK", "fingerprint"]:
        print(f"  {k}: {cookies.get(k, 'N/A')}")

    session = requests.Session()
    session.headers.update({
        "User-Agent": (
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/120.0.0.0 Safari/537.36"
        ),
        "Referer": "https://www.weiyun.com/",
        "Origin": "https://www.weiyun.com",
    })
    session.cookies.update(cookies)

    # Test 1: Visit disk page
    print("\n--- Test 1: Visit /disk ---")
    try:
        resp = session.get("https://www.weiyun.com/disk", timeout=5,
                           allow_redirects=False)
        print(f"  Status: {resp.status_code}")
        loc = resp.headers.get("Location", "")
        print(f"  Location: {loc[:100] if loc else 'none'}")
    except Exception as e:
        print(f"  Error: {e}")

    # Test 2: Try API - list root directory
    print("\n--- Test 2: DiskDirAttrList API ---")
    try:
        payload = {
            "req_header": {
                "cmd": "DiskDirAttrList",
                "main_v": 12,
                "sub_v": 1,
            },
            "req_body": {
                "ppdir_key": {"dir_key": "/", "pdir_key": "/"},
                "start": 0,
                "count": 20,
                "sort_field": 0,
                "sort_order": 0,
                "get_type": 0,
            },
        }
        resp2 = session.post(
            "https://www.weiyun.com/webapp/json/weiyunQdiskClient/DiskDirAttrList",
            json=payload,
            timeout=5,
        )
        print(f"  Status: {resp2.status_code}")
        print(f"  Body: {resp2.text[:300]}")
    except Exception as e:
        print(f"  Error: {e}")

    # Test 3: Try legacy CGI endpoint
    print("\n--- Test 3: Legacy CGI endpoint ---")
    try:
        uin = cookies.get("uin", "").replace("o", "")
        skey = cookies.get("skey", "")
        resp3 = session.get(
            f"https://www.weiyun.com/cgi-bin/qdisk/weiyunQdiskClient?cmd=DiskUserInfoGet&uin={uin}&skey={skey}",
            timeout=5,
        )
        print(f"  Status: {resp3.status_code}")
        print(f"  Body: {resp3.text[:300]}")
    except Exception as e:
        print(f"  Error: {e}")

    # Test 4: Try new webapp API format
    print("\n--- Test 4: New webapp API ---")
    try:
        resp4 = session.post(
            "https://www.weiyun.com/webapp/json/weiyunQdiskClient/DiskUserInfoGet",
            json={
                "req_header": {"cmd": "DiskUserInfoGet", "main_v": 12, "sub_v": 1},
                "req_body": {},
            },
            headers={"Content-Type": "application/json"},
            timeout=5,
        )
        print(f"  Status: {resp4.status_code}")
        print(f"  Body: {resp4.text[:300]}")
    except Exception as e:
        print(f"  Error: {e}")

if __name__ == "__main__":
    main()
