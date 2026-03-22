#!/usr/bin/env python3
"""Test script: Generate Weiyun QR code for scanning."""
import requests
import time
import os
import io
import sys


def render_qr_from_image(img_bytes: bytes) -> None:
    """Render QR code in terminal from image bytes with accurate display."""
    from PIL import Image

    img = Image.open(io.BytesIO(img_bytes)).convert("L")
    w, h = img.size
    print(f"    Image size: {w}x{h}")

    # Method 1: Try to decode QR content and regenerate with qrcode library
    try:
        from pyzbar.pyzbar import decode as qr_decode
        decoded = qr_decode(img)
        if decoded:
            qr_url = decoded[0].data.decode("utf-8")
            print(f"    QR URL: {qr_url}")
            import qrcode
            qr = qrcode.QRCode(border=2)
            qr.add_data(qr_url)
            qr.make(fit=True)
            qr.print_ascii(invert=True)
            return
    except ImportError:
        pass  # pyzbar not available, use fallback

    # Method 2: Direct pixel rendering - no scaling, 1:1 mapping
    # Use half-block characters for better resolution: ▀ ▄ █ (space)
    # Each character represents 2 vertical pixels
    print()
    for y in range(0, h - 1, 2):
        line = "    "  # indent
        for x in range(w):
            top = img.getpixel((x, y)) < 128  # True = black
            bottom = img.getpixel((x, y + 1)) < 128 if y + 1 < h else False
            if top and bottom:
                line += "█"
            elif top and not bottom:
                line += "▀"
            elif not top and bottom:
                line += "▄"
            else:
                line += " "
        print(line)
    # Handle last row if height is odd
    if h % 2 == 1:
        line = "    "
        for x in range(w):
            line += "▀" if img.getpixel((x, h - 1)) < 128 else " "
        print(line)
    print()


def main():
    session = requests.Session()
    session.headers.update({
        "User-Agent": (
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/120.0.0.0 Safari/537.36"
        ),
        "Referer": "https://www.weiyun.com/",
    })

    print("[1/4] Initializing login session...")
    try:
        resp1 = session.get(
            "https://xui.ptlogin2.qq.com/cgi-bin/xlogin",
            params={
                "appid": "527020901", "daid": "372", "style": "33",
                "login_text": "登录", "hide_title_bar": "1", "hide_border": "1",
                "target": "self",
                "s_url": "https://www.weiyun.com/web/callback/common_qq_login_ok.html",
                "pt_3rd_aid": "0",
            },
            timeout=15,
        )
        print(f"    Status: {resp1.status_code}, Cookies: {list(session.cookies.keys())}")
    except Exception as e:
        print(f"    [FAIL] Init failed: {e}")
        sys.exit(1)

    print("[2/4] Fetching QR code...")
    try:
        qr_resp = session.get(
            "https://ssl.ptlogin2.qq.com/ptqrshow",
            params={
                "appid": "527020901", "e": "2", "l": "M", "s": "3",
                "d": "72", "v": "4", "t": str(time.time()),
                "daid": "372", "pt_3rd_aid": "0",
            },
            timeout=15,
        )
        print(f"    Status: {qr_resp.status_code}, Size: {len(qr_resp.content)} bytes")
        print(f"    Content-Type: {qr_resp.headers.get('Content-Type', 'unknown')}")
    except Exception as e:
        print(f"    [FAIL] QR fetch failed: {e}")
        sys.exit(1)

    if qr_resp.status_code != 200 or len(qr_resp.content) < 100:
        print("[FAIL] Could not get QR code image")
        sys.exit(1)

    print("[3/4] Saving QR code image...")
    qr_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "weiyun_qrcode.png")
    with open(qr_path, "wb") as f:
        f.write(qr_resp.content)
    print(f"    Saved: {qr_path}")

    # Also save an enlarged version for easier scanning
    try:
        from PIL import Image
        img = Image.open(io.BytesIO(qr_resp.content))
        # Enlarge to at least 300x300 using NEAREST to keep sharp pixels
        if img.width < 300:
            scale_factor = 300 // img.width + 1
            enlarged = img.resize(
                (img.width * scale_factor, img.height * scale_factor),
                Image.NEAREST,
            )
            enlarged_path = qr_path.replace(".png", "_large.png")
            enlarged.save(enlarged_path)
            print(f"    Enlarged version saved: {enlarged_path}")
    except Exception as e:
        print(f"    (Could not create enlarged version: {e})")

    print("[4/4] Displaying QR code in terminal...")
    try:
        render_qr_from_image(qr_resp.content)
    except Exception as e:
        print(f"    [WARN] Terminal display failed: {e}")
        print("    Please open the PNG file to scan.")

    print("=" * 60)
    print("  ✅ QR code generated! Scan with QQ/WeChat app.")
    print(f"  📁 Image file: {qr_path}")
    print(f"  📁 Large image: {qr_path.replace('.png', '_large.png')}")
    print()
    print("  💡 If terminal QR code is hard to scan,")
    print("     open the _large.png file instead.")
    print("=" * 60)

    qrsig = session.cookies.get("qrsig", "")
    print(f"  qrsig: {qrsig}")


if __name__ == "__main__":
    main()
