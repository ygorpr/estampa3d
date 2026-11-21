// ===== Vídeo 32 — Por que a garrafa gigante tem nome de rei? — cenário e objetos =====
// chalkCave(x,t,o): adega de giz de Champagne: túnel em arco de pedra calcária clara (luz de vela quente), blocos, nichos com garrafas deitadas,
//   cavaletes de remuagem (riddlingRack) e arandelas. o.arches=[cx...] · o.racks=[[cx,s]...] · o.lamps=[x...]
// bigBottle(x,bx,by,s,o): garrafa de espumante (ombro caído, vidro verde-garrafa, cápsula dourada, rótulo creme com o NOME escrito); base em (0,0)
//   o.name (texto no rótulo) · o.crown (coroa dourada sobre a cápsula)
// kingCrown(x,cx,cy,s): coroa de rei com pontas e pedras
// nebuchadnezzar(x,cx,cy,s,t): o rei Nabucodonosor em busto (coroa alta com pontas, barba longa em cachos trançados, manto com leões dourados,
//   cetro na mão); kingPortrait(x,cx,cy,w,h,t): ele num quadro com moldura dourada e plaquinha
// gtag(x,cx,cy,txt,s): etiqueta dourada pendurada no gargalo
function chalkCave(x,t=0,o={}){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#2A1A16');g.addColorStop(1,'#3A241C');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 // blocos de giz (claros, gastos)
 const r=rng(32);for(let y=-260;y<620;y+=70){const off=(Math.floor(y/70)%2)*60;for(let xx=-900+off;xx<W+900;){const w=120+r()*50;x.fillStyle=`rgba(${200+r()*30|0},${180+r()*20|0},${150+r()*20|0},${.16+r()*.08})`;x.fillRect(xx+3,y+3,w-6,64);xx+=w}}
 x.strokeStyle='rgba(20,8,6,.45)';x.lineWidth=4;for(let y=-260;y<620;y+=70){x.beginPath();x.moveTo(-900,y);x.lineTo(W+900,y);x.stroke()}
 // arcos do túnel (abóbada) com nichos escuros e garrafas deitadas
 for(const ax of (o.arches||[300,1000,1700,2400])){x.fillStyle='#120708';x.beginPath();x.moveTo(ax-210,600);x.lineTo(ax-210,120);x.arc(ax,120,210,Math.PI,0);x.lineTo(ax+210,600);x.closePath();x.fill();
  x.save();x.beginPath();x.moveTo(ax-200,600);x.lineTo(ax-200,120);x.arc(ax,120,200,Math.PI,0);x.lineTo(ax+200,600);x.closePath();x.clip();
  const R2=rng(ax|0);for(let j=0;j<12;j++)for(let i=0;i<11;i++){const cx=ax-200+i*40+(j%2)*20,cy=590-j*36;x.fillStyle='#0E1E17';x.beginPath();x.arc(cx,cy,17,0,7);x.fill();x.fillStyle='#16251C';x.beginPath();x.arc(cx,cy,13,0,7);x.fill();x.fillStyle=`rgba(255,200,130,${.05+R2()*.08})`;x.beginPath();x.arc(cx-5,cy-5,3,0,7);x.fill()}
  x.fillStyle='rgba(18,7,8,.45)';x.fillRect(ax-200,-100,400,700);x.restore();
  x.strokeStyle='#C9B48E';x.globalAlpha=.55;x.lineWidth=18;x.beginPath();x.moveTo(ax-219,600);x.lineTo(ax-219,120);x.arc(ax,120,219,Math.PI,0);x.lineTo(ax+219,600);x.stroke();x.globalAlpha=1;
  x.strokeStyle='rgba(20,8,6,.5)';x.lineWidth=3;for(let a=Math.PI;a<=2*Math.PI+.01;a+=Math.PI/7){x.beginPath();x.moveTo(ax+Math.cos(a)*210,120+Math.sin(a)*210);x.lineTo(ax+Math.cos(a)*228,120+Math.sin(a)*228);x.stroke()}}
 // cavaletes de remuagem
 for(const [cx,s] of (o.racks||[]))riddlingRack(x,cx,800,s,t);
 // arandelas com vela
 for(const sx of (o.lamps||[650,1350])){g=x.createRadialGradient(sx,250,10,sx,250,380);g.addColorStop(0,'rgba(255,180,94,.34)');g.addColorStop(1,'rgba(255,180,94,0)');x.fillStyle=g;x.fillRect(sx-380,-130,760,760);x.fillStyle='#D4A24C';x.fillRect(sx-6,250,12,60);x.fillRect(sx-22,306,44,8);x.fillStyle='#F3E6C8';x.fillRect(sx-9,214,18,38);flame(x,sx,212,1,t)}
 // rodapé de pedra / lambri
 g=x.createLinearGradient(0,600,0,820);g.addColorStop(0,'#3A1C12');g.addColorStop(1,'#1E0C08');x.fillStyle=g;x.fillRect(-900,600,W+1800,300);x.fillStyle='#D4A24C';x.fillRect(-900,596,W+1800,6)}
function kingCrown(x,cx,cy,s=1){x.save();x.translate(cx,cy);x.scale(s,s);let g=x.createLinearGradient(0,-50,0,30);g.addColorStop(0,'#F2D27A');g.addColorStop(1,'#B9852F');x.fillStyle=g;
 x.beginPath();x.moveTo(-60,30);x.lineTo(-66,-34);x.lineTo(-36,-6);x.lineTo(-18,-48);x.lineTo(0,-10);x.lineTo(18,-48);x.lineTo(36,-6);x.lineTo(66,-34);x.lineTo(60,30);x.closePath();x.fill();
 x.strokeStyle='rgba(90,50,10,.6)';x.lineWidth=2.5;x.stroke();x.fillStyle='#B9852F';x.fillRect(-60,16,120,14);
 for(const [px,py] of [[-66,-34],[-18,-48],[18,-48],[66,-34]]){x.fillStyle='#F2D27A';x.beginPath();x.arc(px,py,6,0,7);x.fill()}
 x.fillStyle='#C8213F';x.beginPath();x.arc(0,23,7,0,7);x.fill();x.fillStyle='#1E6A4A';x.beginPath();x.arc(-34,23,5,0,7);x.arc(34,23,5,0,7);x.fill();
 x.fillStyle='rgba(255,255,255,.35)';x.fillRect(-52,-2,6,16);x.restore()}
function bigBottle(x,bx,by,s=1,o={}){x.save();x.translate(bx,by);x.rotate(o.rot||0);x.scale(s,s);
 x.fillStyle='rgba(0,0,0,.4)';x.beginPath();x.ellipse(6,2,54,9,0,0,7);x.fill();
 let g=x.createLinearGradient(-42,0,42,0);g.addColorStop(0,'#0C1A14');g.addColorStop(.32,'#2A4C3E');g.addColorStop(.5,'#1E3A31');g.addColorStop(1,'#0A1611');x.fillStyle=g;
 // espumante: ombro caído e longo, gargalo com anel
 x.beginPath();x.moveTo(-42,0);x.lineTo(-42,-160);x.bezierCurveTo(-42,-215,-14,-235,-14,-262);x.lineTo(-14,-296);x.lineTo(14,-296);x.lineTo(14,-262);x.bezierCurveTo(14,-235,42,-215,42,-160);x.lineTo(42,0);x.closePath();x.fill();
 x.fillStyle='rgba(255,220,150,.22)';x.fillRect(-31,-170,7,160);x.fillStyle='rgba(255,220,150,.12)';x.beginPath();x.moveTo(-28,-178);x.quadraticCurveTo(-26,-210,-10,-232);x.lineTo(-6,-228);x.quadraticCurveTo(-20,-208,-22,-176);x.closePath();x.fill();
 // cápsula dourada (até o ombro)
 g=x.createLinearGradient(-16,0,16,0);g.addColorStop(0,'#8A6A34');g.addColorStop(.4,'#F2D27A');g.addColorStop(1,'#7A5A26');x.fillStyle=g;x.beginPath();x.moveTo(-15,-306);x.lineTo(15,-306);x.lineTo(16,-232);x.quadraticCurveTo(0,-222,-16,-232);x.closePath();x.fill();
 x.fillStyle='rgba(255,255,255,.28)';x.fillRect(-9,-302,4,64);x.fillStyle='#5E1428';x.fillRect(-16,-252,32,6);
 // rótulo creme com moldura e o nome
 x.fillStyle='#F3E6C8';x.beginPath();x.roundRect(-38,-142,76,84,6);x.fill();x.strokeStyle='#D4A24C';x.lineWidth=2.5;x.strokeRect(-33,-137,66,74);
 x.fillStyle='#5E1428';x.beginPath();x.arc(0,-122,7,0,7);x.fill();x.fillStyle='#D4A24C';x.beginPath();x.arc(0,-122,3,0,7);x.fill();
 if(o.name){x.fillStyle='#5E1428';x.font=`900 ${o.fs||9}px Cinzel`;x.textAlign='center';x.textBaseline='middle';x.fillText(o.name,0,-100);x.fillRect(-20,-88,40,2);if(o.sub){x.font=`700 ${o.fs2||8}px Cinzel`;x.fillText(o.sub,0,-77)}}
 else{x.fillStyle='#5E1428';x.fillRect(-18,-104,36,3);x.fillRect(-12,-94,24,2)}
 // colar (gola) dourada no ombro
 x.fillStyle='#D4A24C';x.beginPath();x.moveTo(-30,-196);x.quadraticCurveTo(0,-182,30,-196);x.lineTo(26,-184);x.quadraticCurveTo(0,-170,-26,-184);x.closePath();x.fill();
 if(o.crown)kingCrown(x,0,-326,.42);
 x.restore()}
function gtag(x,cx,cy,txt,s=1,rot=.08){x.save();x.translate(cx,cy);x.rotate(rot);x.scale(s,s);x.strokeStyle='#D4A24C';x.lineWidth=2.5;x.beginPath();x.moveTo(0,-26);x.lineTo(0,0);x.stroke();
 x.font='900 24px Cinzel';const w=x.measureText(txt).width+40;let g=x.createLinearGradient(0,0,0,48);g.addColorStop(0,'#F2D27A');g.addColorStop(1,'#C08A36');x.fillStyle=g;
 x.beginPath();x.moveTo(-w/2+12,0);x.lineTo(w/2-12,0);x.lineTo(w/2,14);x.lineTo(w/2,46);x.lineTo(-w/2,46);x.lineTo(-w/2,14);x.closePath();x.fill();x.strokeStyle='#5E1428';x.lineWidth=2;x.stroke();
 x.fillStyle='#2A0610';x.textAlign='center';x.textBaseline='middle';x.fillText(txt,0,25);x.restore()}
// Nabucodonosor: rosto no traço do Sommelier, barba e cabelo em cachos trançados, coroa alta com pontas, manto vinho com leões dourados, cetro
function nebuchadnezzar(x,cx,cy,s=1,t=0){x.save();x.translate(cx,cy);x.scale(s,s);x.lineCap='round';x.lineJoin='round';
 const skin='#C99A72',hair='#1E120C';
 // manto e ombros
 let g=x.createLinearGradient(0,40,0,300);g.addColorStop(0,'#7A1A34');g.addColorStop(1,'#3A0A18');x.fillStyle=g;x.beginPath();x.moveTo(-150,300);x.quadraticCurveTo(-150,70,-60,46);x.lineTo(60,46);x.quadraticCurveTo(150,70,150,300);x.closePath();x.fill();
 // faixa franjada dourada em diagonal + leões
 x.fillStyle='#D4A24C';x.save();x.beginPath();x.moveTo(-150,300);x.quadraticCurveTo(-150,70,-60,46);x.lineTo(60,46);x.quadraticCurveTo(150,70,150,300);x.closePath();x.clip();
 x.beginPath();x.moveTo(-120,70);x.lineTo(-80,60);x.lineTo(150,250);x.lineTo(150,290);x.closePath();x.fill();x.strokeStyle='#D4A24C';x.lineWidth=3;for(let k=0;k<14;k++){const px=-110+k*19,py=78+k*15.6;x.beginPath();x.moveTo(px,py);x.lineTo(px-6,py+12);x.stroke()}
 const lion=(lx,ly,sc)=>{x.save();x.translate(lx,ly);x.scale(sc,sc);x.fillStyle='#E0B45A';x.beginPath();x.ellipse(0,0,26,12,0,0,7);x.fill();x.beginPath();x.arc(24,-8,11,0,7);x.fill();x.fillStyle='#B9852F';x.beginPath();x.arc(24,-8,7,0,7);x.fill();
  x.strokeStyle='#E0B45A';x.lineWidth=5;for(const lx2 of [-18,-8,10,18]){x.beginPath();x.moveTo(lx2,6);x.lineTo(lx2,22);x.stroke()}x.beginPath();x.moveTo(-26,-2);x.quadraticCurveTo(-40,-16,-34,-24);x.stroke();x.restore()};
 lion(-90,200,1);lion(70,150,.8);x.restore();
 // pescoço e cabeça
 x.fillStyle=skin;x.fillRect(-22,10,44,44);
 x.fillStyle=hair;x.beginPath();x.moveTo(-96,-30);x.quadraticCurveTo(-112,60,-80,96);x.lineTo(80,96);x.quadraticCurveTo(112,60,96,-30);x.closePath();x.fill();// cabelo longo atrás
 x.fillStyle=skin;x.beginPath();x.arc(0,-40,86,0,7);x.fill();
 // barba longa e retangular, em cachos trançados (fileiras de espirais)
 x.fillStyle=hair;x.beginPath();x.moveTo(-80,-20);x.quadraticCurveTo(-82,40,-62,140);x.lineTo(62,140);x.quadraticCurveTo(82,40,80,-20);x.quadraticCurveTo(60,10,0,6);x.quadraticCurveTo(-60,10,-80,-20);x.fill();
 x.fillStyle=skin;x.beginPath();x.ellipse(0,0,26,13,0,0,7);x.fill();// boca à mostra
 x.strokeStyle='#4A3022';x.lineWidth=2.5;for(let row=0;row<5;row++)for(let k=-2;k<=2;k++){const bx=k*24,by=34+row*22;if(Math.abs(bx)>62-row*0)continue;x.beginPath();x.arc(bx,by,7,0,Math.PI*1.6);x.stroke()}
 x.fillStyle='#D4A24C';for(let k=-2;k<=2;k++){x.beginPath();x.arc(k*24,142,4,0,7);x.fill()}
 // bigode
 x.fillStyle=hair;x.beginPath();x.moveTo(-34,-6);x.quadraticCurveTo(0,-22,34,-6);x.quadraticCurveTo(0,-10,-34,-6);x.fill();
 // olhos (traço do canal), sobrancelhas fortes, nariz
 x.fillStyle='#1c1a2b';x.strokeStyle='#1c1a2b';for(const e of [-28,28]){x.beginPath();x.ellipse(e,-44,7,12,0,0,7);x.fill();x.lineWidth=7;x.beginPath();x.moveTo(e-16,-70+(e<0?4:-2));x.lineTo(e+16,-70+(e<0?-2:4));x.stroke()}
 x.strokeStyle='rgba(120,70,40,.55)';x.lineWidth=4;x.beginPath();x.moveTo(2,-36);x.quadraticCurveTo(10,-18,0,-14);x.stroke();
 x.strokeStyle='#1c1a2b';x.lineWidth=5;x.beginPath();x.moveTo(-12,2);x.quadraticCurveTo(0,6,12,2);x.stroke();
 // cabelo em cachos na testa
 x.fillStyle=hair;x.beginPath();x.moveTo(-86,-60);x.quadraticCurveTo(-60,-110,0,-112);x.quadraticCurveTo(60,-110,86,-60);x.quadraticCurveTo(40,-86,0,-84);x.quadraticCurveTo(-40,-86,-86,-60);x.fill();
 // coroa alta (cilíndrica, com pontas e rosetas)
 g=x.createLinearGradient(0,-200,0,-90);g.addColorStop(0,'#F2D27A');g.addColorStop(1,'#B9852F');x.fillStyle=g;x.beginPath();x.moveTo(-70,-92);x.lineTo(-74,-178);x.lineTo(-52,-158);x.lineTo(-34,-196);x.lineTo(-14,-160);x.lineTo(0,-206);x.lineTo(14,-160);x.lineTo(34,-196);x.lineTo(52,-158);x.lineTo(74,-178);x.lineTo(70,-92);x.quadraticCurveTo(0,-82,-70,-92);x.fill();
 x.strokeStyle='rgba(90,50,10,.6)';x.lineWidth=2.5;x.stroke();x.fillStyle='#B9852F';x.fillRect(-70,-118,140,10);
 for(const rx of [-44,0,44]){x.fillStyle='#C8213F';x.beginPath();x.arc(rx,-134,8,0,7);x.fill();x.fillStyle='#F2D27A';x.beginPath();x.arc(rx,-134,3,0,7);x.fill()}
 // mão com cetro (dedos no traço do canal)
 x.strokeStyle='#D4A24C';x.lineWidth=10;x.beginPath();x.moveTo(116,280);x.lineTo(126,40);x.stroke();x.fillStyle='#F2D27A';x.beginPath();x.arc(127,30,16,0,7);x.fill();
 x.fillStyle='#7A1A34';x.beginPath();x.moveTo(60,300);x.quadraticCurveTo(90,230,104,206);x.lineTo(140,214);x.quadraticCurveTo(130,260,120,300);x.closePath();x.fill();
 x.fillStyle=skin;x.beginPath();x.roundRect(102,176,46,40,14);x.fill();x.strokeStyle='#1c1a2b';x.lineWidth=2.4;for(let k=0;k<3;k++){x.beginPath();x.moveTo(108,186+k*10);x.lineTo(120,186+k*10);x.stroke()}
 x.restore()}
function kingPortrait(x,cx,cy,w,h,t=0,txt){x.save();goldFrame32(x,cx,cy,w,h);x.beginPath();x.rect(cx-w/2,cy-h/2,w,h);x.clip();
 let g=x.createLinearGradient(0,cy-h/2,0,cy+h/2);g.addColorStop(0,'#3A6A9A');g.addColorStop(1,'#C9A86A');x.fillStyle=g;x.fillRect(cx-w/2,cy-h/2,w,h);
 // jardins em terraços ao fundo (Babilônia)
 x.fillStyle='#8A6A44';for(let k=0;k<4;k++){x.fillRect(cx-w/2+k*w*.06,cy+h*.12-k*h*.1,w*.5-k*w*.12,h*.1)}x.fillStyle='#3E6A34';for(let k=0;k<4;k++){x.beginPath();x.ellipse(cx-w/2+w*.22,cy+h*.1-k*h*.1,w*.2-k*w*.04,h*.03,0,0,7);x.fill()}
 nebuchadnezzar(x,cx+w*.06,cy+h*.04,w/420,t);x.restore();
 if(txt){x.save();x.fillStyle='#D4A24C';x.beginPath();x.roundRect(cx-w*.36,cy+h/2+30,w*.72,34,6);x.fill();x.fillStyle='#2A0610';x.font='900 20px Cinzel';x.textAlign='center';x.textBaseline='middle';x.fillText(txt,cx,cy+h/2+48);x.restore()}}
function goldFrame32(x,cx,cy,w,h,b=20){x.save();let g=x.createLinearGradient(cx-w/2,cy-h/2,cx+w/2,cy+h/2);g.addColorStop(0,'#8A6A34');g.addColorStop(.45,'#F2D27A');g.addColorStop(.6,'#D4A24C');g.addColorStop(1,'#7A5A26');
 x.fillStyle='rgba(0,0,0,.4)';x.fillRect(cx-w/2-b+10,cy-h/2-b+14,w+b*2,h+b*2);x.fillStyle=g;x.fillRect(cx-w/2-b,cy-h/2-b,w+b*2,h+b*2);x.strokeStyle='rgba(60,36,10,.6)';x.lineWidth=2;x.strokeRect(cx-w/2-b+6,cy-h/2-b+6,w+b*2-12,h+b*2-12);x.restore()}
