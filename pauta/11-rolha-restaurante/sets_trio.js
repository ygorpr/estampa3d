// desenhos dos vídeos 9 (brinde), 10 (tinto de suco branco), 11 (rolha no restaurante)
function halvedGrape(x,cx,cy,r){x.save();x.fillStyle='#3A1030';x.beginPath();x.ellipse(cx,cy,r,r*1.12,0,0,7);x.fill();x.fillStyle='#CFE0A8';x.beginPath();x.ellipse(cx,cy,r*.84,r*.96,0,0,7);x.fill();
 x.fillStyle='rgba(255,255,255,.35)';x.beginPath();x.ellipse(cx-r*.3,cy-r*.3,r*.2,r*.32,-.4,0,7);x.fill();x.fillStyle='#8A7A3A';for(const [dx,dy] of [[-.2,.1],[.2,.15],[0,-.15]]){x.beginPath();x.ellipse(cx+dx*r,cy+dy*r,r*.08,r*.14,dx,0,7);x.fill()}x.restore()}
function restaurant(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1A0A0C');g.addColorStop(1,'#34141A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='#4A2014';x.fillRect(-900,420,W+1800,480);x.strokeStyle='rgba(212,162,76,.35)';x.lineWidth=3;for(let i=-6;i<22;i++)x.strokeRect(i*160+10,440,140,200);
 for(const [fx,fy] of [[260,110],[1520,110]]){x.fillStyle=GOLD;x.fillRect(fx-8,fy-8,276,196);x.fillStyle='#2A1C14';x.fillRect(fx,fy,260,180);grapesC(x,fx+130,fy+90,.7,'#4A1A3A')}
 for(const lx of [700,1220]){const gr=x.createRadialGradient(lx,180,4,lx,180,240);gr.addColorStop(0,'rgba(255,190,110,.45)');gr.addColorStop(1,'rgba(255,190,110,0)');x.fillStyle=gr;x.fillRect(lx-240,-60,480,480);candle(x,lx,240,40,t)}}
function restFront(f){f.fillStyle='#EFE6D2';f.fillRect(-900,800,W+1800,600);f.fillStyle='rgba(0,0,0,.08)';for(let i=-6;i<24;i++)f.fillRect(i*90,800,3,600);f.fillStyle='#D4A24C';f.fillRect(-900,800,W+1800,5)}
