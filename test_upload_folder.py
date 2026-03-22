#!/usr/bin/env python3
"""Debug script for upload_folder testing."""
import json
import os
import random
from weiyun_skills.client import WeiyunClient, API_BASE
from weiyun_skills.utils import get_file_md5

c = WeiyunClient()
c._warm_session()

lp = './upload_file/abc.txt'
fs = os.path.getsize(lp)
fm = get_file_md5(lp)
fsh = c._get_file_sha1(lp)
rk = c._get_root_dir_key()
mk = getattr(c, '_main_dir_key', rk)
gt = c._get_gtk()
ui = c._get_uin()
tk = 'b93a782b2e8649f03e78bc2f83b417ab'

print(f"root_key: {rk}")
print(f"main_dir_key: {mk}")
print(f"target_dir_key: {tk}")
print()

# Pre-upload to main_dir (known working case)
print("=== Pre-upload to main_dir ===")
ph = {'cmd': 247120, 'appid': 30013, 'version': 3, 'major_version': 3,
      'minor_version': 0, 'fix_version': 0, 'type': 1, 'user_flag': 0,
      'env_id': '', 'login_keytype': 27, 'uin': ui, 'uid': ui}

pb1 = {'ReqMsg_body': {
    'ext_req_head': {'token_info': c._get_token_info(),
                     'language_info': {'language_type': 2052}},
    '.weiyun.PreUploadMsgReq_body': {'req': {
        'common_upload_req': {
            'ppdir_key': rk, 'pdir_key': mk,
            'file_size': fs, 'filename': 'main_test.txt',
            'file_exist_option': 6, 'use_mutil_channel': True,
            'file_sha': fsh, 'file_md5': fm},
        'upload_scr': 0}}}}

pd1 = {'req_header': json.dumps(ph), 'req_body': json.dumps(pb1)}
r1 = c.session.post(f'{API_BASE}/api/v3/ftn_pre_upload',
                     params={'g_tk': str(gt), 'r': str(random.random())},
                     json=pd1, timeout=30)
d1 = r1.json()
print(json.dumps(d1, ensure_ascii=False, indent=2)[:2000])

# Pre-upload to sub-folder
print("\n=== Pre-upload to sub-folder ===")
pb2 = {'ReqMsg_body': {
    'ext_req_head': {'token_info': c._get_token_info(),
                     'language_info': {'language_type': 2052}},
    '.weiyun.PreUploadMsgReq_body': {'req': {
        'common_upload_req': {
            'ppdir_key': mk, 'pdir_key': tk,
            'file_size': fs, 'filename': 'sub_test.txt',
            'file_exist_option': 6, 'use_mutil_channel': True,
            'file_sha': fsh, 'file_md5': fm},
        'upload_scr': 0}}}}

pd2 = {'req_header': json.dumps(ph), 'req_body': json.dumps(pb2)}
r2 = c.session.post(f'{API_BASE}/api/v3/ftn_pre_upload',
                     params={'g_tk': str(gt), 'r': str(random.random())},
                     json=pd2, timeout=30)
d2 = r2.json()
print(json.dumps(d2, ensure_ascii=False, indent=2)[:2000])

# Try uploading with the main_dir pre-upload response channel
print("\n=== Actual upload test ===")
rsp_body1 = d1.get('data', {}).get('rsp_body', {}).get('RspMsg_body', {})
pre1 = rsp_body1.get('.weiyun.PreUploadMsgRsp_body', rsp_body1)
common1 = pre1.get('common_upload_rsp', pre1.get('rsp', {}))
if isinstance(common1, dict) and 'common_upload_rsp' in common1:
    common1 = common1['common_upload_rsp']
channel1 = common1.get('channel', {})
print(f"Main dir channel keys: {list(channel1.keys()) if channel1 else 'empty'}")
print(f"Main dir common_rsp keys: {list(common1.keys())}")

rsp_body2 = d2.get('data', {}).get('rsp_body', {}).get('RspMsg_body', {})
pre2 = rsp_body2.get('.weiyun.PreUploadMsgRsp_body', rsp_body2)
common2 = pre2.get('common_upload_rsp', pre2.get('rsp', {}))
if isinstance(common2, dict) and 'common_upload_rsp' in common2:
    common2 = common2['common_upload_rsp']
channel2 = common2.get('channel', {})
print(f"Sub dir channel keys: {list(channel2.keys()) if channel2 else 'empty'}")
print(f"Sub dir common_rsp keys: {list(common2.keys())}")
