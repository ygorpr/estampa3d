#!/usr/bin/env python3
"""Thumbnail no estilo do canal: placa dourada com o título à esquerda, Sommelier surpreso à direita, selo Wine Know.
uso: make_thumb.py <pasta-do-video> --title "VINHO CARO" "VALE A" "PENA?" [--set bar|cellar] [--bottles exp:R$ 500 cheap:R$ 50]
Grava <pasta>/thumb.jpg (abre o vídeo) e imprime o caminho. Rótulos de garrafa: cheap (creme), mid (vinho), exp (preto e ouro)."""
import argparse, base64, io, json
from pathlib import Path
from PIL import Image
from playwright.sync_api import sync_playwright
a = argparse.ArgumentParser(); a.add_argument("folder"); a.add_argument("--title", nargs="+", required=True)
a.add_argument("--set", default="cellar", choices=["bar", "cellar"]); a.add_argument("--bottles", nargs="*", default=["mid:"]); o = a.parse_args()
d = Path(o.folder).resolve(); lines = o.title[:3]
size = lambda s: max(84, min(170, int(1250 / max(4, len(s)) * 1.05)))
bottles = [b.split(":", 1) for b in o.bottles][:2]
cfg = {"lines": [[s, size(s)] for s in lines], "set": o.set, "bottles": bottles}
(d / "thumb_cfg.js").write_text("const THUMB=" + json.dumps(cfg, ensure_ascii=False) + ";\n")
(d / "thumb_scene.js").write_text(r"""
FILM={dur:1,cuts:[0,30],fadeIn:0,fadeOut:0,cam(){return {x:1000,y:560,z:1.25,b:[7,0,0]}},warm(){return .55},
 draw(t,cam){let x=layer('w',cam);(THUMB.set=='bar'?barWall:cellarWall)(x,0);
  const p={x:1330,y:600,s:1,face:1,noLegs:true,breath:1,look:-.5,lookY:-.1,brow:1,wide:.7,sad:.2,mouth:.1,open:.3,tilt:-.05,hands:{},arm3d:true};
  const B=THUMB.bottles,pos=[[1200,790],[1490,815]];p.hands.l=[...w2l(p,[1200,680]),90];p.hands.r=[...w2l(p,[1470,700]),60];const hp=actor(layer('h',cam),'s',C10,p,cam,'rgba(255,180,94,1)',1);
  const f=layer('f',cam);cellarTable(f);candle(f,1700,830,100,0);B.forEach((b,i)=>bottleL(f,pos[i],1,b[0]||'mid'));
  const hl=h2w(hp,'l'),hr=h2w(hp,'r');gripHand(f,hl[0],hl[1],0,C10,.85);gripHand(f,hr[0],hr[1],0,C10,.85);
  B.forEach((b,i)=>{if(b[1])priceTag(f,i?1650:1200,i?560:400,b[1],1,i?.85:1.1)});
  comp([['w',7],['h'],['f']]);ctx.save();ctx.setTransform(1,0,0,1,0,0);const v=ctx.createLinearGradient(0,0,W*.6,0);v.addColorStop(0,'rgba(18,4,8,.75)');v.addColorStop(1,'rgba(18,4,8,0)');ctx.fillStyle=v;ctx.fillRect(0,0,W,H);ctx.restore();
  const T_=layer('t',null);bigPlaque(T_,470,560,800,700);grapes(T_,470,240,1.2);const n=THUMB.lines.length,ys=n==1?[600]:n==2?[500,700]:[450,600,750];THUMB.lines.forEach((l,i)=>goldText(T_,l[0],470,ys[i],l[1],'Cinzel',900));
  T_.save();T_.translate(1760,150);const gg=T_.createRadialGradient(0,0,10,0,0,120);gg.addColorStop(0,'#5A1020');gg.addColorStop(1,'#2A0610');T_.fillStyle=gg;T_.beginPath();T_.arc(0,0,128,0,7);T_.fill();T_.strokeStyle='#E2B456';T_.lineWidth=8;T_.stroke();T_.restore();
  goldText(T_,'WINE',1760,120,40,'Cinzel',900);goldText(T_,'KNOW',1760,164,40,'Cinzel',900);blit(ctx,L.t,0);serif('DARK DIVINO',1760,206,22,'#D4A24C')},plants(){return {}}};
""")
html = (d / "index.html").read_text().replace("<script src=vo_words.js></script>", "<script>VOX=[];</script>").replace("<script src=film.js></script>", "<script src=thumb_cfg.js></script><script src=thumb_scene.js></script>")
(d / "thumb.html").write_text(html)
with sync_playwright() as p:
    b = p.chromium.launch(); g = b.new_page(viewport={"width": 1920, "height": 1080}); errs = []; g.on("pageerror", lambda e: errs.append(str(e)))
    g.goto((d / "thumb.html").as_uri()); g.wait_for_function("window.READY", timeout=60000)
    r = g.evaluate("()=>{renderAt(.5);return c.toDataURL('image/png')}"); b.close()
if errs: raise SystemExit("erro na thumb: " + "; ".join(errs))
Image.open(io.BytesIO(base64.b64decode(r.split(",")[1]))).convert("RGB").save(d / "thumb.jpg", quality=92); print(d / "thumb.jpg")
