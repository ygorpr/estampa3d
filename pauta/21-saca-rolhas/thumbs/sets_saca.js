// ===== Vídeo 21 — O saca-rolhas nasceu numa arma? — cenário e objetos =====
// armsBar: bar Dark Divino com lambri de madeira, prateleira de garrafas e, na parede, um MOSQUETE antigo numa placa de madeira
//          com a VARETA de "gun worm" (espiral na ponta) logo abaixo; luminária pendente
// musketGun: mosquete de pederneira (coronha, cano comprido, fecho, vareta) · gunWorm: vareta com a espiral dupla na ponta
// tScrew: saca-rolhas em T (cabo de madeira com ponteiras de latão, haste e espiral helicoidal), opcional com rolha fisgada
function helix(x,len,r,turns,w,col='#C9CDD2',back='#6E7378'){const N=160;for(const pass of [0,1]){x.strokeStyle=pass?col:back;x.lineWidth=w;x.lineCap='round';
 for(let i=0;i<N;i++){const a0=i/N,a1=(i+1)/N,t0=a0*turns*Math.PI*2,t1=a1*turns*Math.PI*2,front=Math.cos((t0+t1)/2)>0;if(front!==!!pass)continue;
  const r0=r*Math.min(1,(1-a0)*6),r1=r*Math.min(1,(1-a1)*6);x.beginPath();x.moveTo(Math.sin(t0)*r0,a0*len);x.lineTo(Math.sin(t1)*r1,a1*len);x.stroke()}}}
function tScrew(x,cx,cy,s,rot=0,cork=0){x.save();x.translate(cx,cy);x.rotate(rot);x.scale(s,s);
 // haste
 x.fillStyle='#A8ADB2';x.fillRect(-5,10,10,40);
 // espiral
 x.save();x.translate(0,48);helix(x,150,15,4.5,6);x.restore();
 if(cork){x.fillStyle='#C99A5B';x.beginPath();x.roundRect(-20,118,40,72,6);x.fill();x.fillStyle='#8E1B3A';x.fillRect(-20,182,40,8);x.fillStyle='rgba(90,50,20,.45)';for(const [px,py] of [[-8,135],[6,150],[-4,165],[9,128]]){x.beginPath();x.arc(px,py,2.4,0,7);x.fill()}
  x.save();x.beginPath();x.rect(-30,40,60,80);x.clip();x.translate(0,48);helix(x,150,15,4.5,6);x.restore()}
 // cabo
 let g=x.createLinearGradient(0,-22,0,22);g.addColorStop(0,'#9A6034');g.addColorStop(1,'#5A3218');x.fillStyle=g;x.beginPath();x.roundRect(-110,-20,220,40,20);x.fill();
 x.fillStyle='rgba(255,220,170,.25)';x.fillRect(-90,-14,180,5);x.fillStyle='#D4A24C';for(const k of [-1,1]){x.beginPath();x.roundRect(k*104-10,-21,20,42,8);x.fill()}
 x.fillStyle='#B8BDC2';x.beginPath();x.arc(0,0,12,0,7);x.fill();x.restore()}
function musketGun(x,cx,cy,s,rot=0){x.save();x.translate(cx,cy);x.rotate(rot);x.scale(s,s);
 // coronha
 let g=x.createLinearGradient(0,-30,0,60);g.addColorStop(0,'#B87A44');g.addColorStop(1,'#7A4420');x.fillStyle=g;
 x.beginPath();x.moveTo(-430,-6);x.lineTo(-250,-22);x.lineTo(-120,-18);x.lineTo(380,-14);x.lineTo(380,8);x.lineTo(-110,14);x.lineTo(-210,26);x.lineTo(-300,40);x.lineTo(-430,78);x.quadraticCurveTo(-446,36,-430,-6);x.fill();
 x.fillStyle='#2A140A';x.fillRect(-436,-6,10,84);
 // cano
 g=x.createLinearGradient(0,-26,0,-8);g.addColorStop(0,'#9A9EA6');g.addColorStop(1,'#4A4E56');x.fillStyle=g;x.fillRect(-150,-26,700,16);x.fillStyle='#3A3E46';x.fillRect(540,-28,14,20);
 for(const bx of [60,260,420]){x.fillStyle='#B8893C';x.fillRect(bx,-28,10,40)}
 // vareta sob o cano
 x.fillStyle='#6A6E76';x.fillRect(-60,12,560,6);x.fillStyle='#B8893C';x.beginPath();x.arc(500,15,6,0,7);x.fill();
 // fecho de pederneira e gatilho
 x.fillStyle='#5A5E66';x.beginPath();x.roundRect(-170,-24,90,30,6);x.fill();x.fillStyle='#3A3E46';x.beginPath();x.moveTo(-170,-24);x.lineTo(-190,-54);x.lineTo(-176,-58);x.lineTo(-150,-24);x.fill();
 x.strokeStyle='#3A3E46';x.lineWidth=4;x.beginPath();x.arc(-150,30,16,0,Math.PI);x.stroke();x.beginPath();x.moveTo(-150,18);x.lineTo(-146,36);x.stroke();x.restore()}
function gunWorm(x,x0,y0,len,s,rot=0){x.save();x.translate(x0,y0);x.rotate(rot);x.scale(s,s);
 x.fillStyle='#7A5A3A';x.fillRect(0,-5,len,10);x.fillStyle='#B8893C';x.fillRect(len-6,-8,14,16);
 x.save();x.translate(len+6,0);x.rotate(-Math.PI/2);helix(x,90,14,3,5);x.translate(5,0);helix(x,84,14,3,4,'#A8ADB2','#5A5E64');x.restore();x.restore()}
function armsBar(x,t,o={}){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1A070D');g.addColorStop(1,'#2C0B15');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 // lambri de madeira na metade de baixo
 x.fillStyle='#3A1A12';x.fillRect(-900,470,W+1800,400);x.strokeStyle='#24100A';x.lineWidth=5;for(let px=-900;px<W+900;px+=150){x.strokeRect(px+14,500,122,280)}x.fillStyle='#5A2E1C';x.fillRect(-900,462,W+1800,14);
 // prateleiras de garrafas (lado do texto)
 const r=rng(21);for(const sy of [210,350]){x.fillStyle='#5A2E1C';x.fillRect(-200,sy,1000,16);let bx=-180;while(bx<780){const h=70+r()*40,w=22+r()*10,col=r()<.5?'#1E3A31':(r()<.5?'#3A0E18':'#4A3020');x.fillStyle=col;x.beginPath();x.roundRect(bx,sy-h,w,h,6);x.fill();x.fillRect(bx+w/2-4,sy-h-22,8,24);x.fillStyle=r()<.5?'#E9DCC0':'#5E1428';x.fillRect(bx+3,sy-h*.6,w-6,h*.3);bx+=w+12}}
 // placa de madeira com o mosquete e a vareta com espiral
 const P=o.plaque||[1330,250],pw=o.pw||760;x.fillStyle='#24100A';x.beginPath();x.roundRect(P[0]-pw/2,P[1]-110,pw,220,14);x.fill();x.strokeStyle=CEL.gold;x.lineWidth=5;x.stroke();x.strokeStyle='rgba(212,162,76,.4)';x.lineWidth=2;x.beginPath();x.roundRect(P[0]-pw/2+12,P[1]-98,pw-24,196,10);x.stroke();
 musketGun(x,P[0]-40,P[1]-30,.62*pw/760);gunWorm(x,P[0]-pw*.36,P[1]+62,pw*.6,1);
 for(const k of [-1,1]){x.fillStyle='#D4A24C';x.beginPath();x.arc(P[0]+k*pw*.3,P[1]-30,7,0,7);x.fill()}
 // luminária pendente
 const lx=o.lamp||1000;g=x.createRadialGradient(lx,300,10,lx,300,360);g.addColorStop(0,'rgba(255,190,110,.26)');g.addColorStop(1,'rgba(255,190,110,0)');x.fillStyle=g;x.fillRect(lx-360,-40,720,700);x.strokeStyle='#120608';x.lineWidth=3;x.beginPath();x.moveTo(lx,-200);x.lineTo(lx,100);x.stroke();x.fillStyle='#D4A24C';x.beginPath();x.moveTo(lx-16,100);x.lineTo(lx+16,100);x.lineTo(lx+52,150);x.lineTo(lx-52,150);x.closePath();x.fill();x.fillStyle='#FFE2A8';x.beginPath();x.ellipse(lx,150,50,7,0,0,7);x.fill()}
// collectionWall: parede de colecionador — quadros com saca-rolhas de vários tipos (em T, de garçom, de asas) sobre veludo vinho
function waiterKey(x,cx,cy,s,rot=0){x.save();x.translate(cx,cy);x.rotate(rot);x.scale(s,s);x.fillStyle='#2A2A30';x.beginPath();x.roundRect(-90,-12,180,24,10);x.fill();x.fillStyle='#B8BDC2';x.fillRect(-96,-6,30,12);x.save();x.translate(20,12);helix(x,60,9,3,4);x.restore();x.fillStyle='#8A8E94';x.beginPath();x.moveTo(-60,-12);x.lineTo(-40,-34);x.lineTo(-30,-34);x.lineTo(-44,-12);x.fill();x.restore()}
function wingScrew(x,cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#B8BDC2';x.beginPath();x.roundRect(-18,-60,36,110,12);x.fill();x.fillRect(-4,-96,8,36);x.beginPath();x.arc(0,-100,12,0,7);x.fill();
 for(const k of [-1,1]){x.save();x.rotate(k*.9);x.fillRect(-4,-110,8,90);x.beginPath();x.arc(0,-112,12,0,7);x.fill();x.restore()}x.save();x.translate(0,50);helix(x,60,9,3,4);x.restore();x.restore()}
function collectionWall(x,t,o={}){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1A070D');g.addColorStop(1,'#2C0B15');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 const r=rng(7);for(let j=0;j<4;j++)for(let i=0;i<11;i++){const fx=-200+i*230+(j%2)*30,fy=-60+j*230,k=Math.floor(r()*3);
  x.fillStyle='#4A0E1C';x.fillRect(fx,fy,190,190);x.strokeStyle=CEL.gold;x.lineWidth=7;x.strokeRect(fx,fy,190,190);x.strokeStyle='rgba(0,0,0,.35)';x.lineWidth=3;x.strokeRect(fx+12,fy+12,166,166);
  if(k==0)tScrew(x,fx+95,fy+60,.55);else if(k==1)waiterKey(x,fx+95,fy+95,.75,-.3);else wingScrew(x,fx+95,fy+105,.6)}
 x.fillStyle='#3A1A12';x.fillRect(-900,860,W+1800,300);
 const lx=o.lamp||1000;g=x.createRadialGradient(lx,300,10,lx,300,420);g.addColorStop(0,'rgba(255,190,110,.24)');g.addColorStop(1,'rgba(255,190,110,0)');x.fillStyle=g;x.fillRect(lx-420,-100,840,900)}
// mão apontando (punho fechado, indicador esticado na direção ang, polegar por cima)
function pointHand(x,hx,hy,ang,ch,s){x.save();x.translate(hx,hy);x.rotate(ang);x.scale(s,s);x.fillStyle=ch.hand;x.beginPath();x.roundRect(-22,-20,44,42,14);x.fill();
 x.strokeStyle=ch.hand;x.lineCap='round';x.lineWidth=11;x.beginPath();x.moveTo(14,-12);x.lineTo(58,-12);x.stroke();x.lineWidth=10;x.beginPath();x.moveTo(-6,-16);x.lineTo(14,-30);x.stroke();
 x.strokeStyle=ch.finger;x.lineWidth=2.4;for(const y of [0,10]){x.beginPath();x.moveTo(-8,y);x.lineTo(20,y);x.stroke()}x.restore()}
