// ===== Vídeo 24 — Por que se guarda vinho deitado? — cenário e objetos =====
// adegaDeitada: adega de pedra Dark Divino com arcos; nichos com PILHAS DE GARRAFAS DEITADAS vistas de lado (ripas de madeira
// entre as camadas) e nichos de grade com os fundos das garrafas; arandelas com vela
// lyingWine: garrafa de vinho deitada (centro em cx,cy; dir=1 gargalo para a direita, -1 para a esquerda)
function lyingWine(x,cx,cy,s,dir=1,label){x.save();x.translate(cx,cy);x.rotate(dir*Math.PI/2);const e=x.ellipse;x.ellipse=function(){};wineBottle(x,0,143*s,s,true,label||CEL.wine);x.ellipse=e;x.restore()}
function wineEnds(x,x0,y0,cols,rows,r,seed){const R=rng(seed);for(let j=0;j<rows;j++)for(let i=0;i<cols;i++){const cx=x0+i*r*2.2,cy=y0-j*r*2.2;
 x.fillStyle='#0E1A14';x.beginPath();x.arc(cx,cy,r,0,7);x.fill();x.fillStyle=R()<.6?'#1E3A31':'#3A0E18';x.beginPath();x.arc(cx,cy,r*.8,0,7);x.fill();
 x.fillStyle='#0A0F0C';x.beginPath();x.arc(cx,cy,r*.36,0,7);x.fill();x.fillStyle=`rgba(255,200,130,${.15+R()*.2})`;x.beginPath();x.arc(cx-r*.35,cy-r*.35,r*.17,0,7);x.fill()}}
function stoneArchNiche(x,x0,y0,w,h){x.fillStyle='#14060A';x.beginPath();x.moveTo(x0,y0+h);x.lineTo(x0,y0+w/2);x.arc(x0+w/2,y0+w/2,w/2,Math.PI,0);x.lineTo(x0+w,y0+h);x.closePath();x.fill();x.strokeStyle='#4A1A1E';x.lineWidth=20;x.stroke();
 x.strokeStyle='#24080E';x.lineWidth=3;for(let i=0;i<=10;i++){const a=Math.PI+i/10*Math.PI,cx=x0+w/2,cy=y0+w/2;x.beginPath();x.moveTo(cx+Math.cos(a)*(w/2-10),cy+Math.sin(a)*(w/2-10));x.lineTo(cx+Math.cos(a)*(w/2+10),cy+Math.sin(a)*(w/2+10));x.stroke()}}
// pilha de garrafas deitadas vista de lado (gargalos alternados), com ripas
function lyingStack(x,cx,base,rows,s,seed){const R=rng(seed),bl=286*s,bh=76*s;for(let j=0;j<rows;j++){const y=base-j*(bh+10*s)-bh/2;
 x.fillStyle='#5A2E1C';x.fillRect(cx-bl-20*s,y+bh/2,bl*2+40*s,8*s);
 for(const k of [-1,1])lyingWine(x,cx+k*bl/2,y,s,k,R()<.5?'#5E1428':'#E9DCC0')}}
function adegaDeitada(x,t,o={}){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1A070D');g.addColorStop(1,'#2E1016');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 const r=rng(24);x.strokeStyle='rgba(10,2,5,.5)';x.lineWidth=4;for(let y=-200;y<820;y+=64){const off=(Math.floor(y/64)%2)*55;x.beginPath();x.moveTo(-900,y);x.lineTo(W+900,y);x.stroke();for(let xx=-900+off;xx<W+900;xx+=110+r()*40){x.beginPath();x.moveTo(xx,y);x.lineTo(xx,y+64);x.stroke()}}
 for(const [nx,kind] of (o.niches||[[260,'ends'],[760,'stack'],[1560,'stack'],[2060,'ends']])){const w=kind=='stack'?440:340;stoneArchNiche(x,nx-w/2,130,w,700);x.save();x.beginPath();x.rect(nx-w/2+10,130,w-20,700);x.clip();
  if(kind=='stack')lyingStack(x,nx,820,7,.62,nx);else{wineEnds(x,nx-130,800,6,14,22,nx);x.fillStyle='#3A1C12';for(const yy of [420,610])x.fillRect(nx-w/2,yy,w,12)}x.restore()}
 for(const sx of (o.lamps||[1060,1860])){g=x.createRadialGradient(sx,260,10,sx,260,340);g.addColorStop(0,`rgba(255,180,94,${.32+.04*Math.sin(t*7+sx)})`);g.addColorStop(1,'rgba(255,180,94,0)');x.fillStyle=g;x.fillRect(sx-340,-80,680,680);x.fillStyle=CEL.gold;x.fillRect(sx-6,260,12,60);x.fillStyle=CEL.cream;x.fillRect(sx-9,224,18,38);flame(x,sx,222,1,t)}}
// mão apontando (punho fechado, indicador esticado na direção ang, polegar por cima)
function pointHand(x,hx,hy,ang,ch,s){x.save();x.translate(hx,hy);x.rotate(ang);x.scale(s,s);x.fillStyle=ch.hand;x.beginPath();x.roundRect(-22,-20,44,42,14);x.fill();
 x.strokeStyle=ch.hand;x.lineCap='round';x.lineWidth=11;x.beginPath();x.moveTo(14,-12);x.lineTo(58,-12);x.stroke();x.lineWidth=10;x.beginPath();x.moveTo(-6,-16);x.lineTo(14,-30);x.stroke();
 x.strokeStyle=ch.finger;x.lineWidth=2.4;for(const y of [0,10]){x.beginPath();x.moveTo(-8,y);x.lineTo(20,y);x.stroke()}x.restore()}
