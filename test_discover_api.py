#!/usr/bin/env python3
"""Debug: find the real Weiyun API endpoints from the disk page."""
import json
import re
import requests
import sys

with open("cookies.json", "r") as f:
    data = json.load(f)

cookies = data.get("cookies_dict", {})
session = requests.Session()
session.headers.update({
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/134.0.0.0 Safari/537.36"
    ),
    "Referer": "https://www.weiyun.com/",
})
session.cookies.update(cookies)

print("=== Step 1: Fetch /disk page ===")
resp = session.get("https://www.weiyun.com/disk", timeout=10)
print(f"Status: {resp.status_code}, Length: {len(resp.text)}")

# Find JS bundle URLs
js_urls = re.findall(r'src="([^"]+\.js[^"]*)"', resp.text)
print(f"\nJS bundles found: {len(js_urls)}")
for u in js_urls[:5]:
    print(f"  {u}")

# Find any API endpoint patterns
print("\n=== Step 2: Search for API patterns in HTML ===")
patterns = [
    r'(weiyun\.com/[^"\'>\s]+(?:api|json|cgi|upload)[^"\'>\s]*)',
    r'(/webapp/[^"\'>\s]+)',
    r'(https?://[^"\'>\s]*(?:upload|download|share|file)[^"\'>\s]*\.com[^"\'>\s]*)',
]
for pat in patterns:
    matches = set(re.findall(pat, resp.text, re.IGNORECASE))
    if matches:
        for m in list(matches)[:10]:
            print(f"  {m}")

# Save first JS bundle content to analyze
if js_urls:
    print("\n=== Step 3: Analyze main JS bundle ===")
    main_js = None
    for js_url in js_urls:
        if "app" in js_url or "main" in js_url or "chunk" in js_url:
            main_js = js_url
            break
    if not main_js:
        main_js = js_urls[0]

    if not main_js.startswith("http"):
        main_js = "https://www.weiyun.com" + main_js

    print(f"Fetching: {main_js}")
    try:
        js_resp = session.get(main_js, timeout=10)
        js_text = js_resp.text

        # Search for API endpoint patterns
        api_patterns = [
            r'"(/webapp/[^"]+)"',
            r'"(https?://[^"]*weiyun[^"]*(?:api|json|upload|cgi)[^"]*)"',
            r'"(Disk[A-Z][a-zA-Z]+)"',
            r'url\s*[:=]\s*["\']([^"\']+(?:upload|file|dir)[^"\']*)["\']',
        ]
        for pat in api_patterns:
            matches = set(re.findall(pat, js_text, re.IGNORECASE))
            if matches:
                print(f"\n  Pattern: {pat}")
                for m in sorted(matches)[:15]:
                    print(f"    {m}")
    except Exception as e:
        print(f"  Error: {e}")

# Test alternative API format
print("\n=== Step 4: Try alternative API formats ===")
alt_urls = [
    "https://www.weiyun.com/webapp/json/weiyunQdiskClient/DiskDirAttrList",
    "https://www.weiyun.com/webapp/json/weiyunQdisk/DiskDirAttrList",
    "https://www.weiyun.com/webapp/json/DiskDirAttrList",
]
for url in alt_urls:
    try:
        r = session.post(url, json={
            "req_header": {"cmd": "DiskDirAttrList", "main_v": 12, "sub_v": 1},
            "req_body": {},
        }, timeout=5)
        print(f"  {r.status_code} {url[:60]}... -> {r.text[:80]}")
    except Exception as e:
        print(f"  ERR  {url[:60]}... -> {e}")
