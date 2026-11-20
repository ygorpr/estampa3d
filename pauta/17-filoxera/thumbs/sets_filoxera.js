// ===== Vídeo 17 — A praga que quase acabou com o vinho (filoxera) — cenários e personagens =====
// phylloxera(): o inseto como PERSONAGEM — corpo oval amarelo-ouro segmentado, cabeça com olhos grandes vermelho-escuros
// (pálpebra de cima reta = "fofo-assustador"), 2 antenas segmentadas, 6 patas com joelho, bico (rostro) enfiado na raiz.
function phylloxera(x,cx,cy,s,t=0,o={}){x.save();x.translate(cx,cy);x.scale(s*(o.flip?-1:1),s);const wig=Math.sin(t*6)*.08;
 // patas (atrás do corpo): 3 de cada lado, com coxa e canela
 x.strokeStyle='#8A5A10';x.lineCap='round';x.lineJoin='round';
 for(const [bx,k,ph] of [[-34,-1,0],[0,-1,1],[34,-1,2],[-30,1,.5],[4,1,1.5],[38,1,2.5]]){const a=Math.sin(t*8+ph)*.12;x.lineWidth=9;x.beginPath();x.moveTo(bx,k*22);const kx=bx+(bx<0?-26:22)+a*30,ky=k*58;x.lineTo(kx,ky);x.lineWidth=7;x.lineTo(kx+(bx<0?-12:16),ky+k*34);x.stroke();x.fillStyle='#6A4008';x.beginPath();x.arc(kx+(bx<0?-12:16),ky+k*34,5,0,7);x.fill()}
 // abdômen
 let g=x.createRadialGradient(-10,-30,10,10,0,110);g.addColorStop(0,'#FFE27A');g.addColorStop(.55,'#E8B42A');g.addColorStop(1,'#A86E10');x.fillStyle=g;x.beginPath();x.ellipse(18,0,96,62,0,0,7);x.fill();
 x.strokeStyle='rgba(120,70,10,.55)';x.lineWidth=4;for(const sx of [-10,18,46,74]){x.beginPath();x.ellipse(sx,0,10,58*Math.sqrt(Math.max(0,1-((sx-18)/96)**2)),0,-Math.PI/2,Math.PI/2);x.stroke()}
 x.fillStyle='rgba(255,250,220,.55)';x.beginPath();x.ellipse(0,-34,40,12,-.15,0,7);x.fill();
 // pelinhos
 x.strokeStyle='rgba(120,70,10,.6)';x.lineWidth=2;for(const [px,py] of [[40,-58],[70,-48],[95,-26],[10,-62],[100,8]]){x.beginPath();x.moveTo(px,py);x.lineTo(px+6,py-10);x.stroke()}
 // cabeça
 x.save();x.translate(-84,-8);x.rotate(wig);g=x.createRadialGradient(-8,-14,4,0,0,52);g.addColorStop(0,'#FFE27A');g.addColorStop(1,'#C88A1A');x.fillStyle=g;x.beginPath();x.ellipse(0,0,46,40,0,0,7);x.fill();
 // rostro (bico sugador)
 x.strokeStyle='#6A4008';x.lineWidth=7;x.beginPath();x.moveTo(-26,26);x.quadraticCurveTo(-40,48,-34,70);x.stroke();
 // antenas segmentadas
 x.strokeStyle='#5A3408';x.lineWidth=7;for(const k of [-1,1]){x.beginPath();x.moveTo(-20+k*6,-34);x.quadraticCurveTo(-46+k*14,-86,-84+k*26,-96+Math.sin(t*5+k)*6);x.stroke();x.fillStyle='#7A4C0C';for(let i=1;i<4;i++){const u=i/4;x.beginPath();x.arc(lerp(-20+k*6,-84+k*26,u)-(1-u)*u*30,lerp(-34,-96,u)-(1-u)*u*40,4,0,7);x.fill()}}
 // olhos grandes, vermelho-escuros com brilho; pálpebra reta em cima (cara de bravo)
 for(const [ex,er] of [[-22,17],[10,15]]){x.fillStyle='#5A0812';x.beginPath();x.arc(ex,-6,er,0,7);x.fill();x.fillStyle='#B01E2E';x.beginPath();x.arc(ex-3,-3,er*.55,0,7);x.fill();x.fillStyle='#FFF4E0';x.beginPath();x.arc(ex-er*.35,-er*.55,er*.28,0,7);x.fill();
  x.fillStyle='#C88A1A';x.beginPath();x.moveTo(ex-er-3,-6-er*.55);x.lineTo(ex+er+3,-6-er*.9);x.lineTo(ex+er+3,-6-er-6);x.lineTo(ex-er-3,-6-er-6);x.closePath();x.fill();x.strokeStyle='#7A4C0C';x.lineWidth=3;x.beginPath();x.moveTo(ex-er-2,-6-er*.55);x.lineTo(ex+er+2,-6-er*.9);x.stroke()}
 x.restore();x.restore()}
// pedaço de raiz de videira com nódulos (galhas)
function vineRoot(x,cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.strokeStyle='#5A3220';x.lineCap='round';x.lineWidth=58;x.beginPath();x.moveTo(-260,-40);x.quadraticCurveTo(-60,10,260,30);x.stroke();
 x.strokeStyle='#7A4A2C';x.lineWidth=40;x.beginPath();x.moveTo(-260,-46);x.quadraticCurveTo(-60,4,260,24);x.stroke();
 x.strokeStyle='rgba(40,20,10,.5)';x.lineWidth=3;for(let i=-5;i<6;i++){x.beginPath();x.moveTo(i*46,-20+i*3);x.lineTo(i*46+30,-8+i*3);x.stroke()}
 x.fillStyle='#8A5A34';for(const [px,py,r] of [[-150,-8,22],[120,40,26],[200,46,18]]){x.beginPath();x.arc(px,py,r,0,7);x.fill()}
 x.strokeStyle='#5A3220';x.lineWidth=12;x.beginPath();x.moveTo(-40,0);x.quadraticCurveTo(-20,80,-60,140);x.moveTo(140,30);x.quadraticCurveTo(170,100,150,150);x.stroke();x.restore()}
// ovinhos/insetos pequenos ao redor
function tinyBugs(x,list,t){for(const [px,py,s,f] of list)phylloxera(x,px,py,s,t,{flip:f})}
// lupa grande: o conteúdo ampliado aparece só dentro da lente; cabo de latão/madeira até a mão
function bigLens(x,cx,cy,r,hx,hy,content){x.save();x.beginPath();x.arc(cx,cy,r,0,7);x.clip();let g=x.createRadialGradient(cx-r*.3,cy-r*.3,r*.1,cx,cy,r);g.addColorStop(0,'#5A3A2A');g.addColorStop(1,'#2A160E');x.fillStyle=g;x.fillRect(cx-r,cy-r,2*r,2*r);content(x);
 g=x.createRadialGradient(cx,cy,r*.6,cx,cy,r);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(20,6,4,.45)');x.fillStyle=g;x.fillRect(cx-r,cy-r,2*r,2*r);
 x.strokeStyle='rgba(255,255,255,.28)';x.lineWidth=r*.07;x.beginPath();x.arc(cx,cy,r*.82,Math.PI*1.1,Math.PI*1.45);x.stroke();x.restore();
 const a=Math.atan2(hy-cy,hx-cx);x.save();x.lineCap='round';x.strokeStyle='#B8832E';x.lineWidth=r*.16;x.beginPath();x.moveTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r);x.lineTo(cx+Math.cos(a)*(r+r*.28),cy+Math.sin(a)*(r+r*.28));x.stroke();
 x.strokeStyle='#4A2414';x.lineWidth=r*.2;x.beginPath();x.moveTo(cx+Math.cos(a)*(r+r*.28),cy+Math.sin(a)*(r+r*.28));x.lineTo(hx+Math.cos(a)*r*.25,hy+Math.sin(a)*r*.25);x.stroke();
 g=x.createLinearGradient(cx-r,cy-r,cx+r,cy+r);g.addColorStop(0,'#FFE7A0');g.addColorStop(.5,'#D4A24C');g.addColorStop(1,'#8A5A1E');x.strokeStyle=g;x.lineWidth=r*.12;x.beginPath();x.arc(cx,cy,r,0,7);x.stroke();x.restore()}
// gabinete do cientista (séc. XIX): estantes com frascos, prancha botânica de videira, janela escura
function cabinet(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1A070D');g.addColorStop(1,'#2C0B15');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='#2A140C';x.fillRect(-900,560,W+1800,260);
 const r=rng(7);for(const sy of [200,360,520]){x.fillStyle='#4A2414';x.fillRect(80,sy,1700,16);let bx=110;while(bx<1740){const h=50+r()*60,w=36+r()*30,c=['rgba(120,160,120,.55)','rgba(200,170,90,.55)','rgba(160,60,70,.55)','rgba(200,200,180,.4)'][Math.floor(r()*4)];x.fillStyle=c;x.beginPath();x.roundRect(bx,sy-h,w,h,8);x.fill();x.fillStyle='#3A1C12';x.fillRect(bx+4,sy-h-10,w-8,12);x.fillStyle='rgba(243,230,200,.55)';x.fillRect(bx+6,sy-h*.6,w-12,h*.25);bx+=w+18+r()*30}}
 // prancha botânica: folha de videira e raiz
 x.save();x.translate(1560,300);x.fillStyle='#CDBB95';x.fillRect(-120,-110,240,250);x.strokeStyle='#D4A24C';x.lineWidth=5;x.strokeRect(-120,-110,240,250);x.fillStyle='#4A6A3A';x.beginPath();for(let i=0;i<5;i++){const a=-Math.PI/2+(i-2)*.6;x.lineTo(Math.cos(a)*80,10+Math.sin(a)*80);x.lineTo(Math.cos(a+.3)*40,10+Math.sin(a+.3)*40)}x.closePath();x.fill();x.strokeStyle='#5A3220';x.lineWidth=5;x.beginPath();x.moveTo(0,40);x.lineTo(0,100);x.stroke();x.restore();
 g=x.createRadialGradient(1000,300,10,1000,300,560);g.addColorStop(0,'rgba(255,190,110,.22)');g.addColorStop(1,'rgba(255,190,110,0)');x.fillStyle=g;x.fillRect(300,-200,1400,1000)}
// vinhedo francês do séc. XIX ao entardecer, com os pés de uva secando
function deadVineyard(x,t){let g=x.createLinearGradient(0,-200,0,620);g.addColorStop(0,'#2A0B24');g.addColorStop(.6,'#7A2A34');g.addColorStop(1,'#C8703E');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1300);
 g=x.createRadialGradient(1560,480,10,1560,480,260);g.addColorStop(0,'rgba(255,210,140,.75)');g.addColorStop(.3,'rgba(255,180,100,.3)');g.addColorStop(1,'rgba(255,180,100,0)');x.fillStyle=g;x.fillRect(1200,200,720,560);
 x.fillStyle='#4A1A2A';x.beginPath();x.moveTo(-900,520);x.quadraticCurveTo(600,430,1200,500);x.quadraticCurveTo(1700,560,2800,470);x.lineTo(2800,1100);x.lineTo(-900,1100);x.fill();
 // fileiras de videiras: troncos tortos e galhos secos, poucas folhas marrons
 const r=rng(12);for(let row=0;row<3;row++){const y=560+row*90,sc=.6+row*.25;for(let i=0;i<14;i++){const vx=-200+i*190+(row%2)*90;x.save();x.translate(vx,y);x.scale(sc,sc);x.strokeStyle='#1A060C';x.lineCap='round';x.lineWidth=12;x.beginPath();x.moveTo(0,0);x.quadraticCurveTo(-8,-50,4,-90);x.stroke();x.lineWidth=6;for(const k of [-1,1]){x.beginPath();x.moveTo(4,-90);x.quadraticCurveTo(k*30,-110,k*60,-100+r()*20);x.stroke()}
  x.fillStyle=['#6A3A1A','#8A5A20','#4A2A14'][Math.floor(r()*3)];for(let k=0;k<3;k++){x.beginPath();x.ellipse(-50+r()*100,-110+r()*30,10,6,r()*3,0,7);x.fill()}x.restore()}}
 x.strokeStyle='rgba(30,10,14,.6)';x.lineWidth=3;for(let row=0;row<3;row++){const y=520+row*90;x.beginPath();x.moveTo(-900,y);x.lineTo(W+900,y);x.stroke()}}
