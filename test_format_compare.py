#!/usr/bin/env python3
"""Compare string vs object format for pre-upload API."""
import json
import os
import random
from weiyun_skills.client import WeiyunClient, API_BASE
from weiyun_skills.utils import get_file_md5

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
            'file_size': fs, 'filename': 'format_test.txt',
            'file_exist_option': 6, 'use_mutil_channel': True,
            'file_sha': fsh, 'file_md5': fm},
        'upload_scr': 0}}}}

results = {}

# Test 1: String format
pd_str = {'req_header': json.dumps(ph), 'req_body': json.dumps(pb)}
try:
    r1 = c.session.post(f'{API_BASE}/api/v3/ftn_pre_upload',
                         params={'g_tk': str(gt), 'r': str(random.random())},
                         json=pd_str, timeout=30)
    d1 = r1.json()
    results['string_format'] = d1
except Exception as e:
    results['string_format'] = {'error': str(e)}

# Test 2: Object format
pd_obj = {'req_header': ph, 'req_body': pb}
try:
    r2 = c.session.post(f'{API_BASE}/api/v3/ftn_pre_upload',
                         params={'g_tk': str(gt), 'r': str(random.random())},
                         json=pd_obj, timeout=30)
    d2 = r2.json()
    results['object_format'] = d2
except Exception as e:
    results['object_format'] = {'error': str(e)}

with open('test_format_results.json', 'w') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print(json.dumps(results, ensure_ascii=False, indent=2)[:3000])
