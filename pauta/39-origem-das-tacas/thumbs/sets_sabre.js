// ===== Vídeo 20 — Dá para abrir champanhe com espada? — cenário e objetos =====
// champCave: adega de espumante (cave de pedra em arco, pilhas de garrafas deitadas, cavaletes de remuagem, velas)
// champBottle: garrafa de espumante (fechada ou já "sabrada", com a boca cortada) · flyTop: rolha + anel de vidro voando
// sabre: sabre de sabrage (lâmina curva SEM fio, guarda dourada com arco) · foam: jato de espuma saindo da boca
function bottleEnds(x,x0,y0,cols,rows,r,seed){const R=rng(seed);for(let j=0;j<rows;j++)for(let i=0;i<cols;i++){const cx=x0+i*r*2.1+(j%2)*r*1.05,cy=y0-j*r*1.82;
 x.fillStyle='#0E1E17';x.beginPath();x.arc(cx,cy,r,0,7);x.fill();x.fillStyle='#1F3326';x.beginPath();x.arc(cx,cy,r*.8,0,7);x.fill();
 x.fillStyle='#0A140F';x.beginPath();x.arc(cx,cy,r*.38,0,7);x.fill();x.fillStyle=`rgba(255,200,130,${.18+R()*.2})`;x.beginPath();x.arc(cx-r*.35,cy-r*.35,r*.18,0,7);x.fill()}}
function niche(x,x0,y0,w,h){x.fillStyle='#14060A';x.beginPath();x.moveTo(x0,y0+h);x.lineTo(x0,y0+w/2);x.arc(x0+w/2,y0+w/2,w/2,Math.PI,0);x.lineTo(x0+w,y0+h);x.closePath();x.fill();
 x.strokeStyle='#4A1A1E';x.lineWidth=18;x.stroke()}
function champCave(x,t,o={}){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1A070D');g.addColorStop(1,'#2E1016');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 // blocos de pedra
 const r=rng(21);x.strokeStyle='rgba(10,2,5,.5)';x.lineWidth=4;for(let y=-200;y<820;y+=64){const off=(Math.floor(y/64)%2)*55;x.beginPath();x.moveTo(-900,y);x.lineTo(W+900,y);x.stroke();for(let xx=-900+off;xx<W+900;xx+=110+r()*40){x.beginPath();x.moveTo(xx,y);x.lineTo(xx,y+64);x.stroke()}}
 // nichos em arco com garrafas deitadas (só o fundo da garrafa aparece)
 for(const nx of (o.niches||[200,620,1500,1920])){niche(x,nx-170,150,340,650);x.save();x.beginPath();x.rect(nx-165,150,330,650);x.clip();bottleEnds(x,nx-150,780,8,12,19,nx);x.restore();x.fillStyle='#3A1C12';for(const yy of [430,620])x.fillRect(nx-170,yy,340,12)}
 // cavaletes de remuagem (garrafas de cabeça para baixo)
 for(const [cx,s] of (o.racks||[[1080,.9],[1760,.9]]))riddlingRack(x,cx,800,s,t);
 // luz de vela/arandelas
 for(const sx of (o.lamps||[1000,1680])){g=x.createRadialGradient(sx,260,10,sx,260,340);g.addColorStop(0,`rgba(255,180,94,${.32+.04*Math.sin(t*7+sx)})`);g.addColorStop(1,'rgba(255,180,94,0)');x.fillStyle=g;x.fillRect(sx-340,-80,680,680);x.fillStyle=CEL.gold;x.fillRect(sx-6,260,12,60);x.fillStyle=CEL.cream;x.fillRect(sx-9,224,18,38);flame(x,sx,222,1,t)}}
// garrafa de espumante, base em (0,0) local, eixo para cima; rot gira em torno da base. open=1: boca já cortada (sem rolha, sem anel, sem cápsula)
function champBottle(x,bx,by,s,rot,open=0){x.save();x.translate(bx,by);x.rotate(rot);x.scale(s,s);
 const body=()=>{x.beginPath();x.moveTo(-40,0);x.lineTo(-40,-165);x.bezierCurveTo(-40,-215,-16,-226,-15,-262);x.lineTo(-15,open?-290:-296);x.lineTo(15,open?-290:-296);x.lineTo(15,-262);x.bezierCurveTo(16,-226,40,-215,40,-165);x.lineTo(40,0);x.closePath()};
 body();let g=x.createLinearGradient(-40,0,40,0);g.addColorStop(0,'#0C1A13');g.addColorStop(.35,'#24402F');g.addColorStop(1,'#0E1E16');x.fillStyle=g;x.fill();
 x.fillStyle='rgba(255,200,130,.28)';x.fillRect(-27,-170,7,160);x.fillRect(-9,-270,4,40);
 // costura (linha fininha do molde)
 x.strokeStyle='rgba(242,210,122,.22)';x.lineWidth=1.6;x.beginPath();x.moveTo(30,-10);x.lineTo(30,-170);x.bezierCurveTo(30,-210,13,-226,12,-262);x.lineTo(12,open?-290:-296);x.stroke();
 // rótulo e colarinho
 x.fillStyle='#F3E6C8';x.beginPath();x.roundRect(-36,-140,72,78,8);x.fill();x.strokeStyle=CEL.gold;x.lineWidth=2.5;x.strokeRect(-31,-135,62,68);
 x.fillStyle='#5E1428';x.font='900 15px Cinzel';x.textAlign='center';x.textBaseline='middle';x.fillText('BRUT',0,-110);x.fillStyle=CEL.gold;x.fillRect(-18,-96,36,3);x.fillStyle='#5E1428';x.font='700 10px Cinzel';x.fillText('ESPUMANTE',0,-84);
 x.fillStyle='#5E1428';x.beginPath();x.moveTo(-26,-200);x.lineTo(26,-200);x.lineTo(20,-182);x.lineTo(-20,-182);x.closePath();x.fill();x.fillStyle=CEL.gold;x.fillRect(-20,-194,40,3);
 if(!open){// anel + cápsula dourada
  x.fillStyle='#D4A24C';x.beginPath();x.moveTo(-18,-312);x.lineTo(18,-312);x.lineTo(17,-240);x.quadraticCurveTo(0,-232,-17,-240);x.closePath();x.fill();x.fillStyle='rgba(255,255,255,.25)';x.fillRect(-10,-308,4,62)}
 else{// boca cortada, limpinha
  x.fillStyle='#3E6A50';x.beginPath();x.ellipse(0,-290,15,4.5,0,0,7);x.fill();x.fillStyle='#F5EED8';x.beginPath();x.ellipse(0,-290,10,3,0,0,7);x.fill()}
 x.restore()}
// rolha + anel de vidro voando (centro em cx,cy; rot = direção da garrafa)
function flyTop(x,cx,cy,s,rot,trail=1){x.save();x.translate(cx,cy);x.rotate(rot);x.scale(s,s);
 if(trail){x.strokeStyle='rgba(243,230,200,.45)';x.lineCap='round';for(const [dx,l,w] of [[-10,44,4],[0,66,5],[10,44,4]]){x.lineWidth=w;x.beginPath();x.moveTo(dx,40);x.lineTo(dx,40+l);x.stroke()}}
 // cortiça (cogumelo)
 x.fillStyle='#C99A5B';x.beginPath();x.moveTo(-14,-6);x.lineTo(-17,-30);x.quadraticCurveTo(-18,-46,0,-47);x.quadraticCurveTo(18,-46,17,-30);x.lineTo(14,-6);x.closePath();x.fill();
 x.fillStyle='rgba(90,50,20,.45)';for(const [px,py] of [[-6,-36],[5,-28],[-3,-18],[8,-40]]){x.beginPath();x.arc(px,py,2,0,7);x.fill()}
 // gaiola (muselet) já solta? não: a rolha sai com o anel de vidro inteiro
 x.fillStyle='#24402F';x.beginPath();x.roundRect(-20,-10,40,16,4);x.fill();x.fillStyle='#3E6A50';x.fillRect(-20,-10,40,4);
 x.fillStyle='#1F3326';x.beginPath();x.moveTo(-16,6);x.lineTo(16,6);x.lineTo(15,18);x.lineTo(-15,18);x.closePath();x.fill();
 x.fillStyle='#F5EED8';x.beginPath();x.moveTo(-15,18);x.lineTo(-10,16);x.lineTo(-4,19);x.lineTo(3,16);x.lineTo(9,19);x.lineTo(15,18);x.lineTo(15,20);x.lineTo(-15,20);x.closePath();x.fill();
 x.restore()}
// espuma saindo da boca (cx,cy = boca; rot = direção da garrafa)
function foam(x,cx,cy,s,rot){x.save();x.translate(cx,cy);x.rotate(rot);x.scale(s,s);const r=rng(9);
 for(let i=0;i<22;i++){const d=r()*70,w=6+r()*12;x.fillStyle=`rgba(250,244,225,${.85-d/110})`;x.beginPath();x.arc((r()-.5)*(10+d*.7),-d-4,w*(1-d/140),0,7);x.fill()}
 x.restore()}
// sabre de sabrage: punho em (hx,hy), lâmina na direção ang; s escala. Lado de cima = costas (sem fio), aqui tudo sem fio.
function sabre(x,hx,hy,ang,s,len=330){x.save();x.translate(hx,hy);x.rotate(ang);x.scale(s,s);
 // arco da guarda (protege os dedos)
 x.strokeStyle='#B8832E';x.lineWidth=6;x.beginPath();x.moveTo(30,22);x.quadraticCurveTo(-4,44,-46,14);x.stroke();
 // punho
 x.fillStyle='#2A140C';x.beginPath();x.roundRect(-46,-9,72,18,8);x.fill();x.strokeStyle='rgba(212,162,76,.6)';x.lineWidth=2;for(let k=-40;k<20;k+=9){x.beginPath();x.moveTo(k,-9);x.lineTo(k+6,9);x.stroke()}
 x.fillStyle='#D4A24C';x.beginPath();x.arc(-50,0,11,0,7);x.fill();
 // guarda
 x.fillStyle='#D4A24C';x.beginPath();x.roundRect(24,-28,12,56,5);x.fill();x.fillStyle='#F2D27A';x.fillRect(27,-24,3,48);
 // lâmina curva
 const bl=(o)=>{x.beginPath();x.moveTo(36,-11);for(let i=0;i<=20;i++){const u=i/20,px=36+u*len;x.lineTo(px,-11+u*u*(-28)+u*4)}for(let i=20;i>=0;i--){const u=i/20,px=36+u*len;x.lineTo(px,11-u*16+u*u*(-28))}x.closePath()};
 bl();let g=x.createLinearGradient(0,-14,0,14);g.addColorStop(0,'#F4F2EC');g.addColorStop(.45,'#B9BCC0');g.addColorStop(1,'#7C8086');x.fillStyle=g;x.fill();x.strokeStyle='rgba(40,30,30,.5)';x.lineWidth=1.5;x.stroke();
 x.strokeStyle='rgba(255,255,255,.7)';x.lineWidth=2;x.beginPath();for(let i=0;i<=18;i++){const u=i/18;x.lineTo(40+u*(len-30),-4+u*u*(-28))}x.stroke();
 x.restore()}
