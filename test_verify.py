#!/usr/bin/env python3
"""Verify: check if README.md was uploaded to Weiyun."""
import sys
import json

sys.path.insert(0, "/Users/reky/Documents/GitHub/weiyun-skills")
from weiyun_skills.client import WeiyunClient

client = WeiyunClient(
    cookies_path="/Users/reky/Documents/GitHub/weiyun-skills/cookies.json"
)

# List main dir (微云 folder) with recent files first
print("Listing '微云' directory (sorted by time)...")
result = client._api_request("DiskDirList", {
    "pdir_key": "b93a782bf338fdcb41c5dfa52b9ed888",
    "dir_key": "b93a782bf0a739ae12b58dcd423dce4a",
    "get_type": 0,
    "start": 0,
    "count": 50,
    "sort_field": 2,
    "reverse_order": True,
    "get_abstract_url": True,
})

if result["success"]:
    data = result["data"]
    dirs = data.get("dir_list", [])
    files = data.get("file_list", [])
    print(f"  Dirs: {data.get('total_dir_count', 0)}")
    print(f"  Files: {data.get('total_file_count', 0)}")
    
    print("\n  Recent files:")
    for f in files[:10]:
        name = f.get("file_name", "")
        size = f.get("file_size", 0)
        mtime = f.get("file_mtime", "")
        print(f"  📄 {name}  ({size} bytes, mtime: {mtime})")
    
    # Check if README.md is there
    readme_found = any(f.get("file_name") == "README.md" for f in files)
    if readme_found:
        print("\n  ✅ README.md found in 微云 directory!")
    else:
        print("\n  ⚠️  README.md not found in this directory.")
        print("  Checking root dir...")
        
        result2 = client._api_request("DiskDirList", {
            "pdir_key": "",
            "dir_key": "b93a782bf338fdcb41c5dfa52b9ed888",
            "get_type": 0,
            "start": 0,
            "count": 50,
            "sort_field": 2,
            "reverse_order": True,
            "get_abstract_url": True,
        })
        if result2["success"]:
            files2 = result2["data"].get("file_list", [])
            for f in files2[:10]:
                print(f"  📄 {f.get('file_name', '')}  ({f.get('file_size', 0)} bytes)")
else:
    print(f"Error: {result['message']}")

print("\nDone!")
