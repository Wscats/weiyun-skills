#!/usr/bin/env python3
"""Test pre-upload with nested objects format."""
import json
import os
import random
import time
from weiyun_skills.client import WeiyunClient, API_BASE
from weiyun_skills.utils import get_file_md5

print("Waiting 30s for rate limit cooldown...")
time.sleep(30)

c = WeiyunClient()
c._warm_session()

lp = './upload_file/abc.txt'
rk = c._get_root_dir_key()
mk = getattr(c, '_main_dir_key', rk)
gt = c._get_gtk()
ui = c._get_uin()
fs = os.path.getsize(lp)
fm = get_file_md5(lp)
fsh = c._get_file_sha1(lp)

ph = {'cmd': 247120, 'appid': 30013, 'version': 3, 'major_version': 3,
      'minor_version': 0, 'fix_version': 0, 'type': 1, 'user_flag': 0,
      'env_id': '', 'login_keytype': 27, 'uin': ui, 'uid': ui}

pb = {'ReqMsg_body': {
    'ext_req_head': {'token_info': c._get_token_info(),
                     'language_info': {'language_type': 2052}},
    '.weiyun.PreUploadMsgReq_body': {'req': {
        'common_upload_req': {
            'ppdir_key': rk, 'pdir_key': mk,
            'file_size': fs, 'filename': 'nested_obj_test.txt',
            'file_exist_option': 6, 'use_mutil_channel': True,
            'file_sha': fsh, 'file_md5': fm},
        'upload_scr': 0}}}}

# Method 1: nested objects (correct per JS SDK)
pd = {'req_header': ph, 'req_body': pb}
r = c.session.post(f'{API_BASE}/api/v3/ftn_pre_upload',
                    params={'g_tk': str(gt), 'r': str(random.random())},
                    json=pd, timeout=30)
d = r.json()
with open('test_result.json', 'w') as f:
    json.dump(d, f, ensure_ascii=False, indent=2)
print("Result written to test_result.json")
print(json.dumps(d, ensure_ascii=False, indent=2)[:2000])
