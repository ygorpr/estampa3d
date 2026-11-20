// Vídeo 14 — "Pode colocar gelo no vinho?": bar de praia ao entardecer (Dark Divino), balde de gelo suando, gelo transparente
const PRAIA={sky0:'#22091A',sky1:'#5E1428',sky2:'#B8452E',sky3:'#F0A050',sea0:'#3A1428',sea1:'#16060F',wood:'#5A2E1C',wood2:'#3A1C12',palm:'#14050B'};
const HORIZ=540;
function palmTree(x,bx,by,s,lean,t=0){x.save();x.translate(bx,by);x.scale(s,s);x.fillStyle=PRAIA.palm;x.strokeStyle=PRAIA.palm;
 // tronco curvo, em gomos
 x.lineCap='round';for(let i=0;i<14;i++){const u=i/14,px=Math.sin(u*1.6)*lean*u*120,py=-u*520;x.lineWidth=34-u*14;x.beginPath();x.moveTo(px,py);x.lineTo(Math.sin((u+.08)*1.6)*lean*(u+.08)*120,py-40);x.stroke()}
 const tx=Math.sin(1.6)*lean*120,ty=-540,sw=Math.sin(t*.8)*.04;
 for(let k=0;k<7;k++){const a=-Math.PI*.95+k*Math.PI*.32+sw,len=230+(k%2)*40;x.save();x.translate(tx,ty);x.rotate(a);
  x.beginPath();x.moveTo(0,0);x.quadraticCurveTo(len*.5,-46,len,30);x.quadraticCurveTo(len*.5,-8,0,0);x.fill();
  x.lineWidth=3;for(let j=1;j<9;j++){const u=j/9,qx=len*u,qy=-46*4*u*(1-u)+30*u*u;x.beginPath();x.moveTo(qx,qy);x.lineTo(qx+16,qy+34);x.stroke()}x.restore()}
 x.beginPath();x.arc(tx,ty+8,20,0,7);x.fill();x.restore()}
function beachBar(x,t=0,o={}){const palms=o.palms||[[690,720,.62,-.8],[1660,720,.7,.6]],posts=o.posts||[480,1800],sunX=o.sunX||1480;
 // céu de fim de tarde
 let g=x.createLinearGradient(0,-300,0,HORIZ);g.addColorStop(0,PRAIA.sky0);g.addColorStop(.45,PRAIA.sky1);g.addColorStop(.8,PRAIA.sky2);g.addColorStop(1,PRAIA.sky3);x.fillStyle=g;x.fillRect(-900,-600,W+1800,HORIZ+600);
 // sol se pondo (metade atrás do horizonte)
 const sx=sunX,sy=HORIZ+6;let gl=x.createRadialGradient(sx,sy,10,sx,sy,420);gl.addColorStop(0,'rgba(255,190,100,.55)');gl.addColorStop(1,'rgba(255,190,100,0)');x.fillStyle=gl;x.fillRect(sx-420,sy-420,840,440);
 x.save();x.beginPath();x.rect(-900,-600,W+1800,HORIZ+600);x.clip();x.fillStyle='#FFC870';x.beginPath();x.arc(sx,sy,80,0,7);x.fill();x.restore();
 // nuvens finas
 x.fillStyle='rgba(255,170,120,.18)';for(const [cx,cy,w] of [[700,300,340],[1250,230,420],[1800,330,300]]){x.beginPath();x.ellipse(cx,cy,w,14,0,0,7);x.fill()}
 // mar
 g=x.createLinearGradient(0,HORIZ,0,720);g.addColorStop(0,PRAIA.sea0);g.addColorStop(1,PRAIA.sea1);x.fillStyle=g;x.fillRect(-900,HORIZ,W+1800,400);
 x.fillStyle='rgba(255,200,110,.75)';const r=rng(14);for(let i=0;i<26;i++){const yy=HORIZ+6+i*7,w=(90-i*2.6)*(.6+r()*.6),ox=Math.sin(t*1.3+i)*8;x.fillRect(sx-w/2+ox+(r()-.5)*40,yy,w,2.5)}
 x.strokeStyle='rgba(255,200,170,.22)';x.lineWidth=2;for(let i=0;i<9;i++){const yy=HORIZ+20+i*18;x.beginPath();x.moveTo(-900,yy);x.lineTo(W+900,yy);x.stroke()}
 // coqueiros
 for(const [px,py,ps,pl] of palms)palmTree(x,px,py,ps,pl,t);
 // quiosque: telhado de palha no alto, postes de madeira
 x.fillStyle='#4A2614';x.fillRect(-900,40,W+1800,70);x.fillStyle='#6A3A1C';for(let i=-20;i<60;i++){const px=i*48;x.beginPath();x.moveTo(px,100);x.lineTo(px+24,168+(i%3)*10);x.lineTo(px+48,100);x.fill()}
 x.fillStyle=PRAIA.wood;for(const px of posts){x.fillRect(px-16,100,32,640)}
 // cordão de lâmpadas discreto
 x.strokeStyle='rgba(30,10,8,.8)';x.lineWidth=3;x.beginPath();x.moveTo(600,190);x.quadraticCurveTo(1150,290,1700,190);x.stroke();
 for(let i=1;i<12;i++){const u=i/12,px=600+1100*u,py=190+4*100*u*(1-u);x.fillStyle='rgba(255,190,110,.9)';x.beginPath();x.arc(px,py+10,7,0,7);x.fill()}
 // mureta do bar (atrás do Sommelier)
 g=x.createLinearGradient(0,720,0,900);g.addColorStop(0,PRAIA.wood);g.addColorStop(1,PRAIA.wood2);x.fillStyle=g;x.fillRect(-900,720,W+1800,400);x.fillStyle='rgba(0,0,0,.25)';for(let i=-20;i<60;i++)x.fillRect(i*70,720,4,400);x.fillStyle='rgba(212,162,76,.5)';x.fillRect(-900,720,W+1800,5)}
// balcão de madeira (camada da frente)
function beachCounter(f){let g=f.createLinearGradient(0,800,0,1200);g.addColorStop(0,'#7A4A26');g.addColorStop(.05,'#4A2614');g.addColorStop(1,'#1A0A06');f.fillStyle=g;f.fillRect(-900,800,W+1800,600);f.fillStyle='rgba(255,210,150,.5)';f.fillRect(-900,800,W+1800,4);
 f.fillStyle='rgba(0,0,0,.18)';for(let i=-20;i<60;i++)f.fillRect(i*96,806,3,600)}
// pedra de gelo transparente: cx,cy centro; s escala; a rotação
function iceCube(x,cx,cy,s,a=0){x.save();x.translate(cx,cy);x.rotate(a);x.scale(s,s);x.lineJoin='round';
 const F=[[-24,-14],[18,-14],[18,26],[-24,26]],T=[[-24,-14],[-12,-28],[30,-28],[18,-14]],R=[[18,-14],[30,-28],[30,12],[18,26]];
 const poly=(P,c)=>{x.beginPath();x.moveTo(...P[0]);for(const q of P.slice(1))x.lineTo(...q);x.closePath();x.fillStyle=c;x.fill()};
 poly(F,'rgba(190,222,246,.62)');poly(T,'rgba(236,248,255,.72)');poly(R,'rgba(150,196,232,.62)');
 x.fillStyle='rgba(120,175,220,.30)';x.beginPath();x.roundRect(-14,-4,26,24,5);x.fill();
 x.strokeStyle='rgba(255,255,255,.92)';x.lineWidth=2.4;for(const P of [F,T,R]){x.beginPath();x.moveTo(...P[0]);for(const q of P.slice(1))x.lineTo(...q);x.closePath();x.stroke()}
 x.strokeStyle='rgba(255,255,255,.95)';x.lineWidth=3.2;x.lineCap='round';x.beginPath();x.moveTo(-17,-6);x.lineTo(-17,14);x.stroke();
 x.fillStyle='rgba(255,255,255,.95)';x.beginPath();x.arc(10,18,2.4,0,7);x.fill();x.restore()}
// mesma forma do bojo de glassW (para recortar gelo/bolhas DENTRO do vidro)
function bowlPath(x,flute=false){const bw=flute?24:42,top=flute?-210:-178;x.beginPath();x.moveTo(-6,-72);x.quadraticCurveTo(-bw-4,-92,-bw,-136);x.lineTo(-bw+4,top);x.lineTo(bw-4,top);x.lineTo(bw,-136);x.quadraticCurveTo(bw+4,-92,6,-72);x.closePath()}
// "piscine": taça grande de espumante com pedras de gelo dentro; bolhas só no bojo
function piscineGlass(x,bx,by,s,lv=.62,n=3,seed=3,col='rgba(226,190,96,.88)',bub=true){glassW(x,bx,by,s,lv,col);x.save();x.translate(bx,by);x.scale(s,s);bowlPath(x);x.clip();
 const tp=-74-lv*(178-74),r=rng(seed);
 x.fillStyle='rgba(255,248,220,.75)';if(bub)for(let i=0;i<14;i++){x.beginPath();x.arc(-30+r()*60,tp+12+r()*(-74-tp-14),1.4+r()*1.6,0,7);x.fill()}
 const pos=[[-14,tp+4,.5,-.3],[16,tp-2,.48,.35],[0,tp+30,.46,.1]];for(let i=0;i<n;i++){const [px,py,ss,a]=pos[i];iceCube(x,px,py,ss,a)}
 x.restore()}
// balde de gelo de metal com espumante "suando" (gotas de condensação)
function sweatBucket(x,cx,base,s,seed=7){x.save();x.translate(cx,base);x.scale(s,s);
 // garrafa (pelo gargalo, rótulo para fora)
 x.save();x.translate(18,-150);x.rotate(.18);x.fillStyle='#1E3A31';x.beginPath();x.moveTo(-40,60);x.lineTo(-40,-120);x.quadraticCurveTo(-40,-170,-14,-190);x.lineTo(-14,-250);x.lineTo(14,-250);x.lineTo(14,-190);x.quadraticCurveTo(40,-170,40,-120);x.lineTo(40,60);x.closePath();x.fill();
 x.fillStyle='#D4A24C';x.fillRect(-16,-262,32,76);x.fillStyle='#F2D27A';x.fillRect(-16,-200,32,6);x.fillStyle='#F3E6C8';x.fillRect(-36,-110,72,70);x.fillStyle='#8E1B3A';x.fillRect(-36,-90,72,10);
 x.fillStyle='rgba(255,255,255,.18)';x.fillRect(-30,-170,8,150);x.restore();
 // gelo saindo da boca
 for(const [px,py,a] of [[-70,-226,-.3],[-30,-238,.2],[62,-232,-.15],[90,-222,.4],[-95,-214,.1]])iceCube(x,px,py,.9,a);
 // corpo do balde
 let g=x.createLinearGradient(-120,0,120,0);g.addColorStop(0,'#6E6E78');g.addColorStop(.25,'#D8D8E0');g.addColorStop(.5,'#9A9AA6');g.addColorStop(1,'#4A4A54');x.fillStyle=g;x.beginPath();x.moveTo(-122,-215);x.lineTo(122,-215);x.lineTo(98,0);x.lineTo(-98,0);x.closePath();x.fill();
 x.fillStyle='#C8C8D2';x.fillRect(-128,-222,256,14);x.fillStyle='rgba(0,0,0,.25)';x.fillRect(-110,-60,220,6);
 // alças
 x.strokeStyle='#8A8A94';x.lineWidth=7;for(const sd of [-1,1]){x.beginPath();x.arc(sd*120,-150,22,sd>0?-1.4:1.7,sd>0?1.4:4.6);x.stroke()}
 // gotas de condensação
 const r=rng(seed);for(let i=0;i<34;i++){const py=-200+r()*190,half=122-24*((py+215)/215),px=(r()*2-1)*(half-12),sz=2+r()*3.5;x.fillStyle='rgba(255,255,255,.7)';x.beginPath();x.ellipse(px,py,sz*.8,sz,0,0,7);x.fill();
  if(r()<.3){x.strokeStyle='rgba(255,255,255,.35)';x.lineWidth=1.6;x.beginPath();x.moveTo(px,py+sz);x.lineTo(px,py+sz+10+r()*22);x.stroke()}}
 x.restore()}
// pinça "gripHand" segurando uma pedra de gelo entre os dedos (mão fechada com gelo à frente)
function pinchIce(x,hx,hy,ch,s,iceS=1.15){const k=iceS*s;iceCube(x,hx-4*s,hy+52*s,k,.08);x.save();x.translate(hx,hy);x.scale(s,s);x.fillStyle=ch.hand;x.beginPath();x.roundRect(-21,-30,42,38,14);x.fill();
 // polegar e indicador descem pelas laterais da pedra
 x.strokeStyle=ch.hand;x.lineCap='round';x.lineWidth=12;const e=24*iceS;x.beginPath();x.moveTo(-13,2);x.quadraticCurveTo(-e-4,8,-e,26);x.stroke();x.beginPath();x.moveTo(13,2);x.quadraticCurveTo(e+8,6,e+4,20);x.stroke();
 x.strokeStyle=ch.finger;x.lineWidth=2.4;for(const y of [-19,-10,-1]){x.beginPath();x.moveTo(-15,y);x.lineTo(13,y);x.stroke()}x.restore()}
