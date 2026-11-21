// ===== Vídeo 25 — Picasso pintou rótulo de vinho? — cenário e objetos =====
// gallery(x,t,o): galeria de arte à noite: parede bordô com rótulos de vinho EMOLDURADOS (molduras douradas, spots de luz em cone),
//   plaquinha de ano sob cada quadro, lambri de madeira. o.frames=[[cx,cy,w,h,tipo,ano],...]  (arte genérica, nada copiado de obra real)
// artPiece(x,tipo,w,h): arte estilizada do rótulo: 'geo' (formas geométricas de cartaz), 'v' (V dourado com louros), 'pop' (retrato pop),
//   'bacc' (taças e uvas), 'dots' (pontos e linhas soltas), 'blue' (azul com lua e violino), 'q' (um "?" pintado a pincel)
// artLabel(x,cx,cy,w,h,tipo): rótulo inteiro (arte em cima + texto genérico em linhas embaixo)
// artBottle(x,bx,by,s,tipo): garrafa de Bordeaux com rótulo de artista; base em (0,0)
// brush(x,cx,cy,s,rot,col): pincel com tinta na ponta (cabo de madeira, virola, cerdas); o centro do cabo fica em (cx,cy)
function artPiece(x,k,w,h,seed=1){const R=rng(seed);x.save();x.beginPath();x.rect(-w/2,-h/2,w,h);x.clip();
 const bg={geo:'#EFE3C4',v:'#F3E6C8',pop:'#F2D27A',bacc:'#EADBB8',dots:'#F1E8D2',blue:'#2B4A86',q:'#F3E6C8'}[k]||'#F3E6C8';x.fillStyle=bg;x.fillRect(-w/2,-h/2,w,h);
 if(k=='geo'){x.fillStyle='#8E1B3A';x.beginPath();x.arc(-w*.15,-h*.05,w*.28,0,7);x.fill();x.fillStyle='#1E3A31';x.beginPath();x.moveTo(-w*.45,h*.45);x.lineTo(w*.1,-h*.4);x.lineTo(w*.45,h*.45);x.closePath();x.fill();
  x.fillStyle='#D4A24C';x.fillRect(w*.05,-h*.42,w*.3,h*.12);x.strokeStyle='#140509';x.lineWidth=w*.03;x.beginPath();x.moveTo(-w*.45,-h*.2);x.lineTo(w*.45,-h*.2);x.stroke()}
 else if(k=='v'){x.strokeStyle='#D4A24C';x.lineWidth=w*.1;x.lineJoin='round';x.beginPath();x.moveTo(-w*.25,-h*.3);x.lineTo(0,h*.3);x.lineTo(w*.25,-h*.3);x.stroke();
  x.fillStyle='#4E6A3A';for(const s of [-1,1])for(let i=0;i<6;i++){x.beginPath();x.ellipse(s*(w*.36-i*w*.015),h*.3-i*h*.1,w*.05,h*.025,s*(.6+i*.1),0,7);x.fill()}}
 else if(k=='pop'){x.fillStyle='#C8217A';x.fillRect(-w/2,-h/2,w/2,h);x.fillStyle='#2BA7C9';x.fillRect(0,-h/2,w/2,h/2);
  x.fillStyle='#140509';x.beginPath();x.arc(0,-h*.08,w*.2,0,7);x.fill();x.beginPath();x.ellipse(0,h*.42,w*.36,h*.28,0,0,7);x.fill();x.fillStyle='#F2D27A';x.beginPath();x.arc(w*.06,-h*.1,w*.05,0,7);x.fill()}
 else if(k=='bacc'){for(const [gx,c] of [[-w*.22,'#8E1B3A'],[w*.2,'#5E1428']]){x.save();x.translate(gx,h*.32);x.scale(w/330,w/330);x.strokeStyle='#140509';x.lineWidth=7;x.beginPath();x.moveTo(-36,-150);x.quadraticCurveTo(-40,-70,0,-60);x.quadraticCurveTo(40,-70,36,-150);x.stroke();x.fillStyle=c;x.beginPath();x.moveTo(-34,-120);x.quadraticCurveTo(-36,-72,0,-64);x.quadraticCurveTo(36,-72,34,-120);x.closePath();x.fill();x.beginPath();x.moveTo(0,-60);x.lineTo(0,0);x.moveTo(-26,0);x.lineTo(26,0);x.stroke();x.restore()}
  x.fillStyle='#5A2A6A';for(let i=0;i<9;i++){const r=w*.035;x.beginPath();x.arc(-w*.04+((i%3)-1)*r*1.8+(i>5?0:0),-h*.32+Math.floor(i/3)*r*1.7,r,0,7);x.fill()}x.fillStyle='#4E6A3A';x.beginPath();x.ellipse(w*.08,-h*.42,w*.08,h*.04,.4,0,7);x.fill()}
 else if(k=='dots'){const cs=['#C8213F','#1E4E9A','#D4A24C','#140509','#2E7A4A'];x.strokeStyle='#140509';x.lineWidth=w*.015;x.beginPath();x.moveTo(-w*.4,h*.2);x.bezierCurveTo(-w*.1,-h*.5,w*.1,h*.5,w*.4,-h*.2);x.stroke();
  for(let i=0;i<9;i++){x.fillStyle=cs[i%5];x.beginPath();x.arc(-w*.4+R()*w*.8,-h*.4+R()*h*.8,w*(.03+R()*.06),0,7);x.fill()}x.strokeStyle='#C8213F';x.beginPath();x.moveTo(w*.2,h*.3);x.lineTo(w*.32,h*.42);x.moveTo(w*.32,h*.3);x.lineTo(w*.2,h*.42);x.stroke()}
 else if(k=='blue'){x.fillStyle='#F2D27A';x.beginPath();x.arc(w*.25,-h*.28,w*.1,0,7);x.fill();x.fillStyle='#2B4A86';x.beginPath();x.arc(w*.29,-h*.31,w*.09,0,7);x.fill();
  x.fillStyle='#8E1B3A';x.beginPath();x.ellipse(-w*.1,h*.1,w*.12,h*.2,-.5,0,7);x.fill();x.strokeStyle='#F3E6C8';x.lineWidth=w*.012;x.beginPath();x.moveTo(-w*.25,h*.35);x.lineTo(w*.1,-h*.2);x.stroke();
  x.fillStyle='#4E6A3A';x.beginPath();x.ellipse(-w*.25,-h*.3,w*.12,h*.06,.3,0,7);x.fill()}
 else if(k=='q'){x.strokeStyle='#B0122E';x.lineCap='round';x.lineWidth=w*.11;x.beginPath();x.arc(0,-h*.12,w*.2,Math.PI*1.05,Math.PI*2.35);x.quadraticCurveTo(0,h*.05,0,h*.16);x.stroke();x.fillStyle='#B0122E';x.beginPath();x.arc(0,h*.33,w*.065,0,7);x.fill();
  x.fillStyle='rgba(176,18,46,.6)';for(let i=0;i<6;i++){x.beginPath();x.arc(-w*.3+R()*w*.6,-h*.42+R()*h*.84,w*.012+R()*w*.01,0,7);x.fill()}}
 x.restore()}
function artLabel(x,cx,cy,w,h,k,seed){x.save();x.translate(cx,cy);x.fillStyle='#F3E6C8';x.fillRect(-w/2,-h/2,w,h);
 x.save();x.translate(0,-h/2+h*.3+4);artPiece(x,k,w-10,h*.6-4,seed);x.restore();
 x.fillStyle='#5E1428';x.fillRect(-w*.32,h*.16,w*.64,Math.max(2,h*.03));x.fillStyle='rgba(94,20,40,.7)';x.fillRect(-w*.4,h*.25,w*.8,Math.max(1.5,h*.02));x.fillRect(-w*.3,h*.32,w*.6,Math.max(1.5,h*.02));x.fillStyle='#D4A24C';x.fillRect(-w*.18,h*.41,w*.36,Math.max(1.5,h*.02));
 x.restore()}
function goldFrame(x,cx,cy,w,h,b=22){x.save();let g=x.createLinearGradient(cx-w/2,cy-h/2,cx+w/2,cy+h/2);g.addColorStop(0,'#8A6A34');g.addColorStop(.45,'#F2D27A');g.addColorStop(.6,'#D4A24C');g.addColorStop(1,'#7A5A26');
 x.fillStyle=g;x.fillRect(cx-w/2-b,cy-h/2-b,w+b*2,h+b*2);x.fillStyle='#14060A';x.fillRect(cx-w/2-4,cy-h/2-4,w+8,h+8);x.strokeStyle='rgba(60,36,10,.6)';x.lineWidth=2;x.strokeRect(cx-w/2-b+6,cy-h/2-b+6,w+b*2-12,h+b*2-12);
 x.fillStyle='#F2D27A';for(const [sx,sy] of [[-1,-1],[1,-1],[-1,1],[1,1]]){x.beginPath();x.arc(cx+sx*(w/2+b/2),cy+sy*(h/2+b/2),b*.32,0,7);x.fill()}x.restore()}
function gallery(x,t=0,o={}){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1A070D');g.addColorStop(1,'#2C0B15');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 // papel de parede adamascado discreto
 x.fillStyle='rgba(94,20,40,.22)';for(let yy=-200;yy<560;yy+=90)for(let xx=-900+(yy/90%2)*60;xx<W+900;xx+=120){x.beginPath();x.moveTo(xx,yy-26);x.quadraticCurveTo(xx+18,yy,xx,yy+26);x.quadraticCurveTo(xx-18,yy,xx,yy-26);x.fill()}
 // spots de luz em cone
 for(const f of (o.frames||[])){const [cx,cy,w,h]=f;g=x.createLinearGradient(0,cy-h/2-260,0,cy+h/2+120);g.addColorStop(0,'rgba(255,210,140,.22)');g.addColorStop(1,'rgba(255,210,140,0)');x.fillStyle=g;x.beginPath();x.moveTo(cx-30,cy-h/2-260);x.lineTo(cx+30,cy-h/2-260);x.lineTo(cx+w*.75,cy+h/2+120);x.lineTo(cx-w*.75,cy+h/2+120);x.closePath();x.fill();
  x.fillStyle='#14080A';x.fillRect(cx-3,-500,6,cy-h/2-260+500);x.fillStyle='#D4A24C';x.beginPath();x.roundRect(cx-22,cy-h/2-272,44,26,8);x.fill()}
 for(const f of (o.frames||[])){const [cx,cy,w,h,k,ano]=f;x.fillStyle='rgba(0,0,0,.35)';x.fillRect(cx-w/2-14,cy-h/2-10,w+40,h+44);goldFrame(x,cx,cy,w,h,Math.max(14,w*.07));artLabel(x,cx,cy,w,h,k,(cx|0)+7);
  if(ano){x.fillStyle='#D4A24C';x.beginPath();x.roundRect(cx-46,cy+h/2+38,92,30,5);x.fill();x.fillStyle='#2A0610';x.font='900 20px Cinzel';x.textAlign='center';x.textBaseline='middle';x.fillText(ano,cx,cy+h/2+54)}}
 // rodapé / lambri
 g=x.createLinearGradient(0,600,0,820);g.addColorStop(0,'#3A1C12');g.addColorStop(1,'#1E0C08');x.fillStyle=g;x.fillRect(-900,600,W+1800,300);x.fillStyle='#D4A24C';x.fillRect(-900,596,W+1800,6);
 x.strokeStyle='rgba(0,0,0,.35)';x.lineWidth=4;for(let xx=-900;xx<W+900;xx+=150)x.strokeRect(xx+12,624,126,170)}
// garrafa com rótulo de artista (Bordeaux, vidro escuro, cápsula dourada); base em (0,0)
function artBottle(x,bx,by,s=1,k='geo',rot=0){x.save();x.translate(bx,by);x.rotate(rot);x.scale(s,s);
 x.fillStyle='rgba(0,0,0,.35)';x.beginPath();x.ellipse(6,2,50,8,0,0,7);x.fill();
 let g=x.createLinearGradient(-38,0,38,0);g.addColorStop(0,'#0C1A14');g.addColorStop(.35,'#1E3A31');g.addColorStop(1,'#0B1712');x.fillStyle=g;
 x.beginPath();x.moveTo(-38,0);x.lineTo(-38,-180);x.quadraticCurveTo(-38,-222,-13,-236);x.lineTo(-13,-276);x.lineTo(13,-276);x.lineTo(13,-236);x.quadraticCurveTo(38,-222,38,-180);x.lineTo(38,0);x.closePath();x.fill();
 x.fillStyle='rgba(255,220,150,.2)';x.fillRect(-28,-186,8,176);
 g=x.createLinearGradient(-14,0,14,0);g.addColorStop(0,'#8A6A34');g.addColorStop(.4,'#F2D27A');g.addColorStop(1,'#8A6A34');x.fillStyle=g;x.beginPath();x.roundRect(-14,-288,28,62,[5,5,2,2]);x.fill();
 artLabel(x,0,-100,70,108,k,11);x.strokeStyle='#D4A24C';x.lineWidth=2;x.strokeRect(-35,-154,70,108);
 x.restore()}
// pincel: cabo de madeira, virola dourada, cerdas com tinta
function brush(x,cx,cy,s=1,rot=0,col='#B0122E'){x.save();x.translate(cx,cy);x.rotate(rot);x.scale(s,s);
 let g=x.createLinearGradient(-8,0,8,0);g.addColorStop(0,'#3A1C12');g.addColorStop(.4,'#7A4A2A');g.addColorStop(1,'#2A140C');x.fillStyle=g;x.beginPath();x.moveTo(-6,110);x.lineTo(6,110);x.lineTo(9,-60);x.lineTo(-9,-60);x.closePath();x.fill();
 x.fillStyle='#5E1428';x.beginPath();x.ellipse(0,110,6,4,0,0,7);x.fill();
 g=x.createLinearGradient(-10,0,10,0);g.addColorStop(0,'#8A6A34');g.addColorStop(.45,'#F2D27A');g.addColorStop(1,'#8A6A34');x.fillStyle=g;x.fillRect(-10,-100,20,42);x.strokeStyle='rgba(60,36,10,.5)';x.lineWidth=1.5;x.beginPath();x.moveTo(-10,-90);x.lineTo(10,-90);x.stroke();
 x.fillStyle='#D8C29A';x.beginPath();x.moveTo(-10,-100);x.quadraticCurveTo(-12,-128,0,-150);x.quadraticCurveTo(12,-128,10,-100);x.closePath();x.fill();
 x.fillStyle=col;x.beginPath();x.moveTo(-9,-118);x.quadraticCurveTo(-10,-132,0,-150);x.quadraticCurveTo(10,-132,9,-118);x.closePath();x.fill();x.restore()}
