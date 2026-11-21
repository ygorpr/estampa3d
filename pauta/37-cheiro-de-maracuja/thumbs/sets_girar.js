// ===== Vídeo 22 — Por que a gente gira o vinho na taça? — cenário e objetos =====
// barDD: bar Dark Divino (prateleiras iluminadas com garrafas, painel de madeira, pendentes) — sem geladeira
// swirlGlass: taça de tinto GIRANDO, base em (bx,by), eixo vertical; o vinho fica SEMPRE dentro do bojo:
//   a superfície é uma onda inclinada (sobe de um lado, côncava no meio) recortada pelo vidro, com a película fininha
//   que o giro deixa na parede; ph = fase do giro (lado alto), a = força do giro (0 parado .. 1 forte), crest = n.º de cristas no aro
// swirlTrail: rastro do giro (arcos finos em volta do bojo, sem brilho) · aromaWisps: fiozinhos de aroma saindo da boca
function barDD(x,t=0,o={}){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1A070D');g.addColorStop(1,'#2C0B15');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 const r=rng(o.seed||22),x0=o.x0!=null?o.x0:-300,x1=o.x1!=null?o.x1:W+300;
 // painel do fundo (espelho escuro emoldurado)
 x.fillStyle='#22080F';x.fillRect(x0,60,x1-x0,500);x.strokeStyle='#5A2E1C';x.lineWidth=14;x.strokeRect(x0,60,x1-x0,500);
 // prateleiras com garrafas iluminadas por baixo
 for(const sy of [250,440]){g=x.createLinearGradient(0,sy-150,0,sy);g.addColorStop(0,'rgba(255,180,94,0)');g.addColorStop(1,'rgba(255,180,94,.16)');x.fillStyle=g;x.fillRect(x0,sy-150,x1-x0,150);
  let bx=x0+30;while(bx<x1-40){const h=86+r()*40,w=26+r()*10,col=r()<.5?'#1E3A31':(r()<.5?'#3A0E18':'#4A3020');x.fillStyle=col;x.beginPath();x.moveTo(bx,sy);x.lineTo(bx,sy-h+18);x.quadraticCurveTo(bx,sy-h,bx+w/2-5,sy-h-4);x.lineTo(bx+w/2-5,sy-h-34);x.lineTo(bx+w/2+5,sy-h-34);x.lineTo(bx+w/2+5,sy-h-4);x.quadraticCurveTo(bx+w,sy-h,bx+w,sy-h+18);x.lineTo(bx+w,sy);x.closePath();x.fill();
   x.fillStyle=r()<.5?'#D4A24C':'#7A1F33';x.fillRect(bx+w/2-5,sy-h-36,10,12);x.fillStyle='rgba(243,230,200,.55)';x.fillRect(bx+4,sy-h*.62,w-8,h*.3);x.fillStyle='rgba(255,200,140,.2)';x.fillRect(bx+4,sy-h+20,3,h-30);bx+=w+14+r()*22}
  x.fillStyle='#5A2E1C';x.fillRect(x0,sy,x1-x0,14);x.fillStyle='rgba(0,0,0,.4)';x.fillRect(x0,sy+14,x1-x0,8)}
 // lambri de madeira embaixo
 g=x.createLinearGradient(0,560,0,820);g.addColorStop(0,'#3A1C12');g.addColorStop(1,'#1E0C08');x.fillStyle=g;x.fillRect(-900,560,W+1800,300);x.strokeStyle='rgba(0,0,0,.35)';x.lineWidth=4;for(let xx=-900;xx<W+900;xx+=150){x.strokeRect(xx+12,590,126,190)}
 // pendentes
 for(const lx of (o.lamps||[560,1500])){g=x.createLinearGradient(0,150,0,820);g.addColorStop(0,'rgba(255,190,110,.22)');g.addColorStop(1,'rgba(255,190,110,0)');x.fillStyle=g;x.beginPath();x.moveTo(lx-40,150);x.lineTo(lx+40,150);x.lineTo(lx+300,820);x.lineTo(lx-300,820);x.closePath();x.fill();
  x.fillStyle='#14080A';x.fillRect(lx-2,-400,4,500);x.fillStyle='#D4A24C';x.beginPath();x.moveTo(lx-16,100);x.lineTo(lx+16,100);x.lineTo(lx+52,150);x.lineTo(lx-52,150);x.closePath();x.fill();x.fillStyle='#FFE2A8';x.beginPath();x.ellipse(lx,150,50,7,0,0,7);x.fill()}}
// taça grande de tinto (bojo largo) — mesma linguagem do glassW, maior para o giro aparecer
const SWG={bw:58,top:-236,neck:-86};
function swBowl(x){const {bw,top,neck}=SWG;x.beginPath();x.moveTo(-6,neck);x.bezierCurveTo(-bw-14,neck-14,-bw-8,-176,-bw+12,top);x.lineTo(bw-12,top);x.bezierCurveTo(bw+8,-176,bw+14,neck-14,6,neck);x.closePath()}
function swirlGlass(x,bx,by,s,ph=0,a=1,col='#6E0F24',crest=1){x.save();x.translate(bx,by);x.scale(s,s);const {bw,top,neck}=SWG;
 // pé e haste
 x.fillStyle='rgba(245,232,210,.55)';x.beginPath();x.ellipse(0,0,40,8,0,0,7);x.fill();x.fillRect(-4,neck+2,8,-neck-2);
 swBowl(x);x.fillStyle='rgba(255,236,210,.12)';x.fill();
 // vinho: superfície em onda inclinada (lado alto = sinal de ph), côncava no meio, recortada no bojo
 const side=Math.cos(ph)>=0?1:-1,lvl=-128,tilt=a*.5*side,curv=a*.006,surf=xx=>lvl-tilt*xx+curv*xx*xx-a*8+(crest>1?Math.sin(xx/bw*Math.PI*crest)*6*a:0);
 x.save();swBowl(x);x.clip();
 // película fininha que o giro deixa na parede (só dentro do vidro)
 if(a>0){x.fillStyle='rgba(110,15,36,.32)';x.beginPath();x.moveTo(-90,surf(-90));for(let xx=-90;xx<=90;xx+=4)x.lineTo(xx,surf(xx));for(let xx=90;xx>=-90;xx-=4){const e=Math.max(0,Math.abs(xx)/bw-.55)/.45;x.lineTo(xx,surf(xx)-(side*xx>0?44*a*e:14*a*e))}x.closePath();x.fill()}
 let g=x.createLinearGradient(-bw,0,bw,0);g.addColorStop(0,col);g.addColorStop(.5,'#8A1830');g.addColorStop(1,'#4A0818');x.fillStyle=g;x.beginPath();x.moveTo(-90,surf(-90));for(let xx=-90;xx<=90;xx+=4)x.lineTo(xx,surf(xx));x.lineTo(90,40);x.lineTo(-90,40);x.closePath();x.fill();
 // brilho da superfície (linha clara fina acompanhando a onda) e reflexo escuro embaixo
 x.strokeStyle='rgba(255,205,190,.45)';x.lineWidth=3.5;x.beginPath();for(let xx=-90;xx<=90;xx+=4)xx===-90?x.moveTo(xx,surf(xx)+1):x.lineTo(xx,surf(xx)+1);x.stroke();
 x.fillStyle='rgba(30,0,8,.28)';x.beginPath();x.ellipse(0,neck-6,bw*.7,22,0,0,7);x.fill();
 x.restore();
 // contorno do vidro e reflexo
 swBowl(x);x.strokeStyle='rgba(255,240,220,.6)';x.lineWidth=3;x.stroke();
 x.strokeStyle='rgba(255,255,255,.34)';x.lineWidth=5;x.beginPath();x.moveTo(-bw+18,top+26);x.quadraticCurveTo(-bw-2,-160,-bw+14,-112);x.stroke();
 x.strokeStyle='rgba(255,240,220,.5)';x.lineWidth=2;x.beginPath();x.ellipse(0,top,bw-12,6,0,0,7);x.stroke();
 x.restore()}
// rastro do giro: arcos finos em elipse em volta do bojo (não é brilho, é traço de movimento)
function swirlTrail(x,bx,by,s,a=1,dir=1){x.save();x.translate(bx,by);x.scale(s,s);x.lineCap='round';
 for(const [ry,rx,al,w] of [[-120,92,.55,4],[-104,104,.35,3]]){x.strokeStyle=`rgba(212,162,76,${al*a})`;x.lineWidth=w;x.beginPath();x.ellipse(0,ry,rx,20,0,dir>0?.15:Math.PI-1.7,dir>0?1.7:Math.PI-.15);x.stroke();
  x.beginPath();x.ellipse(0,ry,rx,20,0,Math.PI+.3,Math.PI+1.4);x.stroke()}
 // pontinha de seta no fim do arco da frente
 const ang=dir>0?1.7:Math.PI-1.7,px=Math.cos(ang)*92,py=-120+Math.sin(ang)*20;x.fillStyle=`rgba(212,162,76,${.6*a})`;x.beginPath();x.moveTo(px-dir*14,py+2);x.lineTo(px+dir*4,py-9);x.lineTo(px+dir*2,py+12);x.closePath();x.fill();
 x.restore()}
function aromaWisps(x,bx,by,s,t=0,n=4,al=.5){x.save();x.translate(bx,by);x.scale(s,s);x.lineCap='round';
 for(let i=0;i<n;i++){const o=(i-(n-1)/2)*22,h=64+i%2*22;x.strokeStyle=`rgba(242,210,122,${al*(1-i%2*.3)})`;x.lineWidth=3;x.beginPath();x.moveTo(o,SWG.top-6);
  for(let k=1;k<=12;k++){const yy=SWG.top-6-k*h/12;x.lineTo(o+Math.sin(k*.7+i*1.3+t*2)*9*(k/12)+k*1.6,yy)}x.stroke()}
 x.restore()}
