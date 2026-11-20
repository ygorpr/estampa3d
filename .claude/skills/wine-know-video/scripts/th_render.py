import sys,base64,shutil
from playwright.sync_api import sync_playwright
d=sys.argv[1]; tfs=sys.argv[2:]
with sync_playwright() as p:
    b=p.chromium.launch(args=["--allow-file-access-from-files"])
    for tf in tfs:
        shutil.copy(tf,d+"/tf.js")
        g=b.new_page(viewport={"width":1920,"height":1080})
        g.on("pageerror",lambda e:print("PAGE ERROR",e))
        g.goto("file://"+d+"/thumb.html");g.wait_for_function("window.READY",timeout=120000)
        r=g.evaluate("()=>{renderAt(0);return document.getElementById('c').toDataURL('image/jpeg',.93)}")
        out=tf.rsplit('/',1)[0]+"/"+tf.rsplit('/',1)[1].replace('.js','.jpg')
        open(out,"wb").write(base64.b64decode(r.split(",")[1]));g.close();print("ok",out)
    b.close()
