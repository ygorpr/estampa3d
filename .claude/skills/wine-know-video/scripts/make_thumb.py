#!/usr/bin/env python3
"""Thumbnail no estilo do canal: placa dourada com o título à esquerda, Sommelier surpreso à direita, selo Wine Know.
uso: make_thumb.py <pasta-do-video> --title "VINHO CARO" "VALE A" "PENA?" [--set bar|cellar] [--bottles exp:R$ 500 cheap:R$ 50]
Grava <pasta>/thumb.jpg (abre o vídeo) e imprime o caminho. Rótulos de garrafa: cheap (creme), mid (vinho), exp (preto e ouro)."""
import argparse, base64, io, json
from pathlib import Path
from PIL import Image
from playwright.sync_api import sync_playwright
a = argparse.ArgumentParser(); a.add_argument("folder"); a.add_argument("--title", nargs="+", required=True, help="2 linhas no máximo")
a.add_argument("--set", default="cellar", choices=["bar", "cellar"]); a.add_argument("--bottles", nargs="*", default=["mid:"]); o = a.parse_args()
d = Path(o.folder).resolve(); lines = o.title[:2]
size = lambda s: max(84, min(132, int(1180 / max(4, len(s)) * 1.05)))
bottles = [b.split(":", 1) for b in o.bottles][:2]
cfg = {"lines": [[s, size(s)] for s in lines], "set": o.set, "bottles": bottles}
(d / "thumb_cfg.js").write_text("const THUMB=" + json.dumps(cfg, ensure_ascii=False) + ";\n")
(d / "thumb_scene.js").write_text(r"""
// 2 linhas de texto, um ponto focal (rosto surpreso), selo real do canal
FILM={dur:1,cuts:[0,30],fadeIn:0,fadeOut:0,cam(){return {x:1080,y:500,z:1.7,b:[10,0,0]}},warm(){return .6},
 draw(t,cam){let x=layer('w',cam);(THUMB.set=='bar'?barWall:cellarWall)(x,0);
  const p={x:1330,y:600,s:1,face:1,noLegs:true,breath:1,look:-.45,lookY:-.15,brow:1.1,wide:1,sad:.15,mouth:.05,open:.5,tilt:-.08,hands:{},arm3d:true};
  p.hands.l=[...w2l(p,[1190,640]),110];p.hands.r=[...w2l(p,[1470,640]),90];const hp=actor(layer('h',cam),'s',C10,p,cam,'rgba(255,190,110,1)',1);
  const f=layer('f',cam);cellarTable(f);bottleL(f,[1190,760],1,(THUMB.bottles[0]||['exp'])[0]||'exp');
  const hl=h2w(hp,'l'),hr=h2w(hp,'r');gripHand(f,hl[0],hl[1],0,C10,.85);openHand(f,hr[0],hr[1],.5,C10,.85);
  comp([['w',10],['h'],['f']]);ctx.save();ctx.setTransform(1,0,0,1,0,0);const v=ctx.createLinearGradient(0,0,W*.62,0);v.addColorStop(0,'rgba(16,3,7,.92)');v.addColorStop(.75,'rgba(16,3,7,.55)');v.addColorStop(1,'rgba(16,3,7,0)');ctx.fillStyle=v;ctx.fillRect(0,0,W,H);
  const r=ctx.createRadialGradient(1380,430,40,1380,430,560);r.addColorStop(0,'rgba(255,190,110,.18)');r.addColorStop(1,'rgba(255,190,110,0)');ctx.fillStyle=r;ctx.fillRect(0,0,W,H);ctx.restore();
  const T_=layer('t',null),L2=THUMB.lines;goldText(T_,L2[0][0],545,L2.length>1?400:480,L2[0][1],'Cinzel',900);if(L2[1])goldText(T_,L2[1][0],545,570,Math.min(L2[1][1],L2[0][1]),'Cinzel',900);
  T_.fillStyle='#B0122E';T_.fillRect(205,645,680,10);blit(ctx,L.t,0);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.85;ctx.drawImage(SEAL,545-62,680,124,119);ctx.restore()},plants(){return {}}};
""")
html = (d / "index.html").read_text().replace("<script src=vo_words.js></script>", "<script>VOX=[];</script>").replace("<script src=film.js></script>", "<script src=thumb_cfg.js></script><script>const SEAL=new Image();SEAL.src='logo_badge.png';</script><script src=thumb_scene.js></script>").replace("bootFilm()", "SEAL.decode().then(()=>bootFilm())")
(d / "thumb.html").write_text(html)
with sync_playwright() as p:
    b = p.chromium.launch(args=["--allow-file-access-from-files"]); g = b.new_page(viewport={"width": 1920, "height": 1080}); errs = []; g.on("pageerror", lambda e: errs.append(str(e)))
    g.goto((d / "thumb.html").as_uri()); g.wait_for_function("window.READY", timeout=60000)
    r = g.evaluate("()=>{renderAt(.5);return c.toDataURL('image/png')}"); b.close()
if errs: raise SystemExit("erro na thumb: " + "; ".join(errs))
Image.open(io.BytesIO(base64.b64decode(r.split(",")[1]))).convert("RGB").save(d / "thumb.jpg", quality=92); print(d / "thumb.jpg")
