#!/usr/bin/env python3
"""Test: upload README.md to Weiyun."""
import sys
import json

sys.path.insert(0, "/Users/reky/Documents/GitHub/weiyun-skills")
from weiyun_skills.client import WeiyunClient

client = WeiyunClient(
    cookies_path="/Users/reky/Documents/GitHub/weiyun-skills/cookies.json"
)

# Test 1: Get space info
print("[1] Getting user info...")
result = client._api_request("DiskUserInfoGet", {})
if result["success"]:
    data = result["data"]
    print(f"  ✅ Root dir: {data.get('root_dir_key', 'N/A')}")
    print(f"  ✅ Main dir: {data.get('main_dir_key', 'N/A')}")
    print(f"  ✅ Files: {data.get('index_number', 0)}")
    print(f"  ✅ Used: {data.get('used_space', 0)} bytes")
else:
    print(f"  ❌ {result['message']}")
    sys.exit(1)

# Test 2: List root directory
print("\n[2] Listing root directory...")
result2 = client.list_files("/")
if result2["success"]:
    print(f"  ✅ Total items: {result2['data']['total']}")
    for f in result2["data"]["files"][:5]:
        icon = "📁" if f["type"] == "folder" else "📄"
        print(f"     {icon} {f['name']} ({f['size_str']})")
    if len(result2["data"]["files"]) > 5:
        print(f"     ... and {len(result2['data']['files']) - 5} more")
else:
    print(f"  ❌ {result2['message']}")

# Test 3: Upload README.md
print("\n[3] Uploading README.md...")
readme_path = "/Users/reky/Documents/GitHub/weiyun-skills/README.md"
result3 = client.upload_file(readme_path, "/README.md", overwrite=True)
print(f"  Success: {result3['success']}")
if result3["success"]:
    print(f"  ✅ File ID: {result3['data'].get('file_id', 'N/A')}")
    print(f"  ✅ Name: {result3['data'].get('name', 'N/A')}")
    print(f"  ✅ Size: {result3['data'].get('size', 0)} bytes")
    print(f"  ✅ Instant: {result3['data'].get('instant_upload', False)}")
else:
    print(f"  ❌ Error: {result3['message']}")
    print(f"  ❌ Code: {result3.get('error_code', 'N/A')}")

print("\nDone!")
