# 腾讯微云管理 Skills
> 一套用于管理腾讯微云（Weiyun）云存储服务的 Python 工具集，支持 **扫码登录** 和 **Cookies 登录** 两种认证方式。

---

## 🔐 安全与权限声明（请先阅读）

本 skill 会直接操作用户的腾讯微云账号，属于**高权限工具**，使用前请确认：

1. **凭据持久化** — 登录后会把完整的会话 cookies 写入项目目录下的 `cookies.json`（权限 `0600`，仅当前用户可读写）。
   该文件等价于账号密码：**能读到它的人就能完全控制你的微云账号**（读取、上传、下载、删除、对外分享任意文件），且在腾讯微云侧的有效期通常约 24 小时。
   - 建议使用专用或非主账号登录；
   - 不要把 `cookies.json` 复制到日志、仓库、聊天记录、共享目录中；
   - 用完后及时 `rm cookies.json`。
2. **会变更云端状态的命令**（mutating）：`upload`、`upload-folder`、`delete`、`move`、`copy`、`rename`、`mkdir`、`restore`、`clear-recycle`。
3. **会把文件对外暴露的命令**（exposure）：`share`、`unshare`。
4. **确认机制** — 上述命令在 CLI 中都要求交互式 `y/yes` 确认；在非 TTY / Agent 环境下默认**拒绝执行**，除非显式传入 `--yes`。`--permanent` 删除和 `clear-recycle` 额外打印不可逆警告。
5. **仓库根目录下的 `upload_readme.py`** 只是一次性辅助脚本，默认 **不** 覆盖云端已有 `/README.md`，并需要交互确认；若需非交互运行请显式传 `--yes --overwrite`，或先用 `--dry-run` 预演。
6. **AI Agent 使用契约**（如果你是通过 AI Agent 调用本 skill，以下规则对 Agent 生效）：
   - **逐项授权**：每个 mutating / exposure 命令（`upload`、`delete`、`move`、`copy`、`rename`、`mkdir`、`restore`、`clear-recycle`、`share`、`unshare`、`upload-folder`）都必须由用户在**本次会话中**明确指名目标后再执行。Agent **不得**自行链式执行、批量执行、或以"整理/清理/优化"为由主动修改云端内容。
   - **`--yes` 不得默认启用**：Agent 不得在未获得用户针对该次操作的显式授权时传入 `--yes`；用户的"以后都默认同意"这类概括性授权应被拒绝。
   - **禁止失败升级**：命令失败时不得自动加上更具破坏性的标志重试（例如把 `delete` 换成 `delete --permanent`，或重试时补上 `--overwrite`）—— 必须把失败原样上报给用户。
   - **凭据不可外泄**：Agent 不得读取、打印、截图、转存、上传或以任何方式外泄 `cookies.json` 的内容，也不得把它放进 tar 包、commit、截图、工具输出中。
   - **操作域纪律**：对 Weiyun 根目录 `/` 附近的操作、以及递归的文件夹操作，必须让用户**第二次显式确认**并指名根路径。

---

## 🚀 使用方法

### 1. 安装依赖

```bash
cd weiyun-skills
pip install -r requirements.txt
```

### 2. 登录认证（二选一）

#### 方式一：扫码登录（推荐）

运行扫码登录脚本，终端会显示二维码，使用微信/QQ 扫码即可完成登录：

```bash
python weiyun_skills/login.py --method qrcode
```

扫码成功后，Cookies 会自动保存到 `cookies.json` 文件中，后续操作无需重复登录。

#### 方式二：复制 Cookies 登录

1. 在浏览器中登录 [腾讯微云](https://www.weiyun.com/)
2. 打开开发者工具 (F12) → Network → 任意请求 → 复制 `Cookie` 请求头的值
3. 运行以下命令：

```bash
python weiyun_skills/login.py --method cookies --cookies "your_cookie_string_here"
```

或者直接编辑 `cookies.json` 文件：

```json
{
  "cookies_str": "uin=o012345678; skey=@abcdef1234; ...",
  "update_time": "2026-03-15 21:00:00"
}
```

### 3. 使用 Skills

```bash
# List files in root directory
python weiyun_skills/main.py list /

# Upload a file
python weiyun_skills/main.py upload ./local_file.pdf /云端目录/

# Download a file
python weiyun_skills/main.py download /云端目录/file.pdf ./local_dir/

# Create a share link
python weiyun_skills/main.py share /云端目录/file.pdf --expire 7 --password abc123

# Get space usage info
python weiyun_skills/main.py space

# Search files by keyword
python weiyun_skills/main.py search "报告"

# Delete a file (to recycle bin)
python weiyun_skills/main.py delete /云端目录/old_file.pdf

# Move a file
python weiyun_skills/main.py move /源路径/file.pdf /目标路径/

# Create a folder
python weiyun_skills/main.py mkdir /新文件夹/子文件夹
```

### 4. 在 Python 中调用

```python
from weiyun_skills.client import WeiyunClient

# Initialize client (auto-loads cookies.json)
client = WeiyunClient()

# Or pass cookies string directly
client = WeiyunClient(cookies_str="uin=o012345678; skey=@abcdef1234; ...")

# List files
files = client.list_files("/我的文档")
for f in files:
    print(f["name"], f["size"])

# Upload file
client.upload_file("./report.pdf", "/我的文档/report.pdf")

# Download file
client.download_file("/我的文档/report.pdf", "./downloads/report.pdf")

# Create share link
share = client.create_share("/我的文档/report.pdf", expire_days=7, password="abc1")
print(share["share_url"])

# Get space info
info = client.get_space_info()
print(f"Used: {info['used_space_str']} / {info['total_space_str']}")
```

---

## 📋 项目简介

本项目提供了一组 Python 脚本，用于自动化管理腾讯微云中的文件。核心特性：

- ✅ **扫码登录** — 终端展示二维码，微信/QQ 扫码完成认证
- ✅ **Cookies 登录** — 从浏览器复制 Cookies 快速登录
- ✅ **自动保存会话** — 登录状态持久化，无需重复认证
- ✅ **文件管理** — 上传、下载、删除、移动、复制、重命名、搜索
- ✅ **分享管理** — 创建/取消分享链接，支持密码和有效期
- ✅ **空间管理** — 查看容量、回收站操作
- ✅ **命令行工具** — 所有功能均可通过命令行直接使用

---

## 📁 项目结构

```
weiyun-skills/
├── README.md                        # Project documentation
├── SKILL.md                         # Skills definition
├── LICENSE                          # MIT License
├── requirements.txt                 # Python dependencies
├── cookies.json                     # Saved login cookies (auto-generated)
└── weiyun_skills/
    ├── __init__.py                  # Package init
    ├── login.py                     # QR code login & cookies login
    ├── client.py                    # Weiyun API client
    ├── main.py                      # CLI entry point
    └── utils.py                     # Utility functions
```

---

## ⚙️ 依赖说明

| 依赖包 | 用途 |
|--------|------|
| `requests` | HTTP 请求 |
| `qrcode` | 终端展示扫码登录二维码 |
| `Pillow` | 图片处理（二维码渲染） |
| `tabulate` | 命令行表格输出 |

---

## 🛠️ Skills 一览

详细定义请参阅 [SKILL.md](./SKILL.md)。

| 分类 | Skill | 说明 |
|------|-------|------|
| 🔑 认证 | `qrcode_login` | 扫码登录 |
| 🔑 认证 | `cookies_login` | Cookies 登录 |
| 📂 文件 | `list_files` | 列出文件 |
| 📂 文件 | `upload_file` | 上传文件 |
| 📂 文件 | `download_file` | 下载文件 |
| 📂 文件 | `delete_file` | 删除文件 |
| 📂 文件 | `move_file` | 移动文件 |
| 📂 文件 | `copy_file` | 复制文件 |
| 📂 文件 | `rename_file` | 重命名 |
| 📂 文件 | `create_folder` | 创建文件夹 |
| 📂 文件 | `search_files` | 搜索文件 |
| 🔗 分享 | `create_share` | 创建分享 |
| 🔗 分享 | `cancel_share` | 取消分享 |
| 🔗 分享 | `list_shares` | 列出分享 |
| 💾 空间 | `get_space_info` | 空间信息 |
| 💾 空间 | `get_recycle_bin` | 回收站 |
| 💾 空间 | `restore_file` | 恢复文件 |
| 💾 空间 | `clear_recycle_bin` | 清空回收站 |

---

## 📝 注意事项

1. **Cookies 等价于账号密码** — 请参阅上方「安全与权限声明」。`cookies.json` 默认以 `0600` 权限写入；请勿提交到版本库、上传到云盘或粘贴到聊天中。建议使用专用账号并在使用完毕后删除该文件。
2. **Cookies 有效期**：腾讯微云的 Cookies 通常在 24 小时后过期，届时需重新登录
3. **扫码登录**：需要终端支持 Unicode 字符显示（大部分现代终端均支持）
4. **频率限制**：请避免短时间内大量请求，以免触发风控
5. **大文件上传**：支持分片上传，默认分片大小为 4MB
6. **变更/分享操作需确认**：所有会修改云端文件或对外暴露文件的命令都需要 `y/yes` 确认；在非交互环境请显式传入 `--yes`。

---

## 📄 许可证

[MIT License](./LICENSE) © 2026 enoyao
