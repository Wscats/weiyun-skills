#!/usr/bin/env python3
"""Full test: upload_folder with corrected format.
Waits 5 minutes for rate limit cooldown, then tests upload.
"""
import time
import json
import sys
import os

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

print(f"[{time.strftime('%H:%M:%S')}] Waiting 5 minutes for rate limit cooldown...")
time.sleep(300)

from weiyun_skills.client import WeiyunClient

print(f"[{time.strftime('%H:%M:%S')}] Starting upload test...")
c = WeiyunClient()

# Test 1: Single file upload
print(f"\n=== Test 1: upload_file ===")
r1 = c.upload_file('./upload_file/abc.txt', '/upload_test.txt', overwrite=True)
print(json.dumps(r1, ensure_ascii=False, indent=2))

# Test 2: Folder upload
print(f"\n=== Test 2: upload_folder ===")
r2 = c.upload_folder('./upload_file', '/', overwrite=True)
print(json.dumps(r2, ensure_ascii=False, indent=2))

# Test 3: Verify upload
print(f"\n=== Test 3: Verify ===")
mk = getattr(c, '_main_dir_key', c._get_root_dir_key())
r3 = c.list_files(mk)
if r3['success']:
    for f in r3['data']['files']:
        if 'upload' in f.get('name', '').lower():
            print(f"Found: {f['name']} (type={f['type']})")
            if f['type'] == 'folder':
                sub = c.list_files(f['file_id'])
                if sub['success']:
                    for sf in sub['data']['files']:
                        print(f"  -> {sf['name']} ({sf['size_str']})")

print(f"\n[{time.strftime('%H:%M:%S')}] Done!")
