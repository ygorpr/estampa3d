import sys,base64
from playwright.sync_api import sync_playwright
d=sys.argv[1]
with sync_playwright() as p:
    b=p.chromium.launch(args=["--allow-file-access-from-files"]);g=b.new_page(viewport={"width":1920,"height":1080})
    g.on("pageerror",lambda e:print("PAGE ERROR",e))
    g.goto("file://"+d+"/thumb.html");g.wait_for_function("window.READY",timeout=120000)
    r=g.evaluate("()=>{renderAt(0);return document.getElementById('c').toDataURL('image/jpeg',.93)}")
    open(d+"/thumb.jpg","wb").write(base64.b64decode(r.split(",")[1]));b.close()
