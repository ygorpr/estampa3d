// ===== Vídeo 23 — O vinho que passou 14 meses no espaço — cenário e objetos =====
// spaceBar(x,t,o): bar Dark Divino com uma grande janela panorâmica (moldura dourada) para o espaço: estrelas, a Terra azul,
//   a Estação Espacial (módulos brancos, painéis solares dourados) e, opcional, o astronauta flutuando.
//   o.earth=[x,y,r] · o.iss=[x,y,s,rot] · o.astro=[x,y,s,rot] · o.rocket=[x,y,s] · o.lamps=[...]
// earth / iss / astronaut / rocket: peças soltas, reutilizáveis nas cenas
// spaceBottle(x,bx,by,s,rot): garrafa de tinto de Bordeaux, rótulo genérico (sem marca real) com "2000"; base em (0,0)
// tagHang(x,cx,cy,txt): etiqueta de papel pendurada (ex.: "TERRA" / "ESPAÇO")
function stars23(x,x0,y0,w,h,seed){const R=rng(seed);for(let i=0;i<w*h/2600;i++){const a=R();x.fillStyle=`rgba(255,${235+R()*20|0},${200+R()*55|0},${.25+a*.7})`;const r=a>.94?2.4:a>.7?1.5:1;x.beginPath();x.arc(x0+R()*w,y0+R()*h,r,0,7);x.fill()}
 for(let i=0;i<6;i++){const sx=x0+R()*w,sy=y0+R()*h;x.strokeStyle='rgba(255,240,210,.5)';x.lineWidth=1.2;x.beginPath();x.moveTo(sx-7,sy);x.lineTo(sx+7,sy);x.moveTo(sx,sy-7);x.lineTo(sx,sy+7);x.stroke()}}
function earth(x,cx,cy,r){x.save();
 // brilho da atmosfera
 let g=x.createRadialGradient(cx,cy,r*.9,cx,cy,r*1.16);g.addColorStop(0,'rgba(120,190,255,.55)');g.addColorStop(1,'rgba(120,190,255,0)');x.fillStyle=g;x.beginPath();x.arc(cx,cy,r*1.16,0,7);x.fill();
 g=x.createRadialGradient(cx-r*.35,cy-r*.4,r*.1,cx,cy,r);g.addColorStop(0,'#3E86CF');g.addColorStop(.6,'#1F5596');g.addColorStop(1,'#0C2650');x.fillStyle=g;x.beginPath();x.arc(cx,cy,r,0,7);x.fill();
 x.save();x.beginPath();x.arc(cx,cy,r,0,7);x.clip();
 // continentes (formas suaves, verdes e ocre)
 const land=(pts,col)=>{x.fillStyle=col;x.beginPath();x.moveTo(cx+pts[0][0]*r,cy+pts[0][1]*r);for(let i=1;i<pts.length;i++){const p=pts[i],q=pts[(i+1)%pts.length];x.quadraticCurveTo(cx+p[0]*r,cy+p[1]*r,cx+(p[0]+q[0])/2*r,cy+(p[1]+q[1])/2*r)}x.closePath();x.fill()};
 land([[-.55,-.55],[-.2,-.62],[-.05,-.35],[-.25,-.1],[-.15,.2],[-.35,.45],[-.5,.15],[-.7,-.15]],'#4E7A3C');
 land([[.1,-.75],[.45,-.6],[.6,-.3],[.35,-.15],[.15,-.3]],'#7A8A48');
 land([[.15,.05],[.45,.0],[.55,.35],[.35,.7],[.15,.45]],'#5D7F40');
 land([[-.3,-.45],[-.15,-.5],[-.12,-.3],[-.28,-.25]],'#A08A54');
 // nuvens
 x.strokeStyle='rgba(255,255,255,.75)';x.lineCap='round';const R=rng(23);for(let i=0;i<16;i++){const a=-1+R()*2,b=-.9+R()*1.8;x.lineWidth=r*(.03+R()*.05);x.beginPath();x.moveTo(cx+a*r,cy+b*r);x.quadraticCurveTo(cx+(a+.15)*r,cy+(b-.05)*r,cx+(a+.3+R()*.2)*r,cy+(b+.02)*r);x.stroke()}
 // lado da noite
 g=x.createLinearGradient(cx-r,cy-r*.3,cx+r,cy+r*.3);g.addColorStop(0,'rgba(4,8,20,0)');g.addColorStop(.55,'rgba(4,8,20,.1)');g.addColorStop(1,'rgba(4,8,20,.85)');x.fillStyle=g;x.fillRect(cx-r,cy-r,r*2,r*2);
 x.restore();x.strokeStyle='rgba(170,215,255,.7)';x.lineWidth=r*.02;x.beginPath();x.arc(cx,cy,r,Math.PI*.6,Math.PI*1.6);x.stroke();x.restore()}
// Estação Espacial Internacional: treliça central, 4 pares de asas solares douradas, módulos brancos em cruz, radiadores
function iss(x,cx,cy,s=1,rot=0){x.save();x.translate(cx,cy);x.rotate(rot);x.scale(s,s);
 const wing=(wx,wy,w,h)=>{let g=x.createLinearGradient(wx,wy,wx+w,wy+h);g.addColorStop(0,'#B98632');g.addColorStop(.5,'#E8B95A');g.addColorStop(1,'#9C6E28');x.fillStyle=g;x.fillRect(wx,wy,w,h);
  x.strokeStyle='rgba(60,36,10,.55)';x.lineWidth=1.4;for(let k=1;k<6;k++){x.beginPath();x.moveTo(wx+w*k/6,wy);x.lineTo(wx+w*k/6,wy+h);x.stroke()}x.beginPath();x.moveTo(wx,wy+h/2);x.lineTo(wx+w,wy+h/2);x.stroke();
  x.fillStyle='rgba(255,240,200,.25)';x.fillRect(wx,wy,w,h*.18)};
 // asas solares (em cima e embaixo da treliça, nas duas pontas)
 for(const sx of [-300,-215,215,300]){wing(sx-34,-190,68,170);wing(sx-34,20,68,170);x.fillStyle='#8A8F96';x.fillRect(sx-4,-24,8,48)}
 // treliça
 x.fillStyle='#9AA0A8';x.fillRect(-330,-9,660,18);x.strokeStyle='#5F646C';x.lineWidth=2;for(let k=-330;k<330;k+=22){x.beginPath();x.moveTo(k,-9);x.lineTo(k+22,9);x.stroke()}
 // radiadores
 x.fillStyle='#D9DDE2';x.fillRect(-120,14,26,90);x.fillRect(94,14,26,90);x.strokeStyle='rgba(90,96,104,.5)';x.lineWidth=1.5;for(let k=0;k<5;k++){x.beginPath();x.moveTo(-120,24+k*18);x.lineTo(-94,24+k*18);x.moveTo(94,24+k*18);x.lineTo(120,24+k*18);x.stroke()}
 // módulos brancos (cilindros)
 const mod=(mx,my,w,h)=>{const g=x.createLinearGradient(0,my,0,my+h);g.addColorStop(0,'#F4F2EC');g.addColorStop(.5,'#D6D4CE');g.addColorStop(1,'#8E8C88');x.fillStyle=g;x.beginPath();x.roundRect(mx,my,w,h,h/2.6);x.fill();
  x.strokeStyle='rgba(80,80,80,.35)';x.lineWidth=1.5;for(let k=1;k<4;k++){x.beginPath();x.moveTo(mx+w*k/4,my+2);x.lineTo(mx+w*k/4,my+h-2);x.stroke()}};
 mod(-30,8,60,140);mod(-110,26,220,40);mod(-24,-110,48,120);x.save();x.rotate(Math.PI/2);x.restore();
 x.fillStyle='#F4F2EC';x.beginPath();x.arc(0,48,26,0,7);x.fill();x.fillStyle='#2A3A55';x.beginPath();x.arc(0,48,10,0,7);x.fill();
 // braço robótico
 x.strokeStyle='#E8E6E0';x.lineWidth=7;x.lineCap='round';x.beginPath();x.moveTo(60,30);x.lineTo(110,-40);x.lineTo(150,-20);x.stroke();
 x.restore()}
// astronauta em traje branco, flutuando; viseira dourada levantada mostra o rosto (~40 anos); mochila, luvas, botas, remendo da missão
function astronaut(x,cx,cy,s=1,rot=0,t=0){x.save();x.translate(cx,cy);x.rotate(rot);x.scale(s,s);
 const suit='#EFEDE6',sh='#C9C6BE',seam='rgba(110,105,95,.55)';x.lineCap='round';x.lineJoin='round';
 const limb2=(a,b,w,col)=>{x.strokeStyle=col;x.lineWidth=w;x.beginPath();x.moveTo(a[0],a[1]);x.lineTo(b[0],b[1]);x.stroke()};
 const ring=(p,w)=>{x.fillStyle='#9CA3AC';x.beginPath();x.ellipse(p[0],p[1],w/2,w/5,0,0,7);x.fill()};
 // cabo de segurança
 x.strokeStyle='rgba(230,220,200,.6)';x.lineWidth=3;x.beginPath();x.moveTo(-20,60);x.bezierCurveTo(-160,120,-260,0,-420,-40);x.stroke();
 // mochila (atrás)
 x.fillStyle='#D8D5CC';x.beginPath();x.roundRect(-78,-70,156,170,18);x.fill();x.fillStyle='#B7B3A9';x.fillRect(-60,-56,30,18);
 // pernas (dobradas, flutuando)
 const hipL=[-30,90],hipR=[30,90],kL=[-60,170],kR=[52,180],fL=[-40,250],fR=[96,236];
 for(const [h,k,f] of [[hipL,kL,fL],[hipR,kR,fR]]){limb2(h,k,58,sh);limb2(k,f,52,sh);limb2(h,k,50,suit);limb2(k,f,44,suit);ring(k,50)}
 x.fillStyle='#E4E1D8';x.beginPath();x.roundRect(fL[0]-30,fL[1]-8,62,34,12);x.fill();x.beginPath();x.roundRect(fR[0]-22,fR[1]-8,62,34,12);x.fill();
 x.fillStyle='#8E949C';x.fillRect(fL[0]-30,fL[1]+18,62,8);x.fillRect(fR[0]-22,fR[1]+18,62,8);
 // tronco rígido
 let g=x.createLinearGradient(-70,0,70,0);g.addColorStop(0,'#CFCBC2');g.addColorStop(.4,suit);g.addColorStop(1,'#BDB9AF');x.fillStyle=g;x.beginPath();x.roundRect(-66,-60,132,170,30);x.fill();
 x.strokeStyle=seam;x.lineWidth=2;x.beginPath();x.moveTo(-66,40);x.lineTo(66,40);x.stroke();
 // painel de controle no peito
 x.fillStyle='#E2DFD6';x.beginPath();x.roundRect(-40,0,80,34,6);x.fill();x.fillStyle='#C8213F';x.beginPath();x.arc(-22,17,5,0,7);x.fill();x.fillStyle='#2D6BB5';x.beginPath();x.arc(-6,17,5,0,7);x.fill();x.fillStyle='#8E949C';x.fillRect(6,10,26,6);x.fillRect(6,20,20,5);
 // remendo da missão (dourado, com taça) e faixa vinho
 x.fillStyle='#5E1428';x.beginPath();x.arc(-44,-34,15,0,7);x.fill();x.strokeStyle='#D4A24C';x.lineWidth=3;x.stroke();x.fillStyle='#D4A24C';x.beginPath();x.moveTo(-50,-40);x.lineTo(-38,-40);x.quadraticCurveTo(-38,-30,-44,-29);x.quadraticCurveTo(-50,-30,-50,-40);x.fill();x.fillRect(-45,-29,2,7);
 x.fillStyle='#5E1428';x.fillRect(26,-46,30,8);
 // braços: o esquerdo acena, o direito segura a alça/cabo
 const sL=[-58,-36],eL=[-118,-70],hL=[-138,-140],sR=[58,-36],eR=[110,10],hR=[90,70];
 for(const [a,e,h] of [[sL,eL,hL],[sR,eR,hR]]){limb2(a,e,50,sh);limb2(e,h,46,sh);limb2(a,e,42,suit);limb2(e,h,38,suit);ring(e,44)}
 // luvas
 for(const [h,ang] of [[hL,-1.9],[hR,1.2]]){x.save();x.translate(h[0],h[1]);x.rotate(ang);x.fillStyle='#8E949C';x.fillRect(-20,-6,10,32);x.fillStyle='#E9E6DE';x.beginPath();x.roundRect(-14,-18,40,36,12);x.fill();
  x.fillStyle='#E9E6DE';x.beginPath();x.roundRect(20,-14,14,10,5);x.fill();x.strokeStyle='rgba(110,105,95,.5)';x.lineWidth=2;for(let k=0;k<3;k++){x.beginPath();x.moveTo(14,-10+k*10);x.lineTo(24,-10+k*10);x.stroke()}x.restore()}
 // capacete
 x.fillStyle='#E9E6DE';x.beginPath();x.ellipse(0,-78,58,14,0,0,7);x.fill();
 g=x.createRadialGradient(-20,-150,10,0,-130,80);g.addColorStop(0,'#FFFFFF');g.addColorStop(1,'#CFCBC2');x.fillStyle=g;x.beginPath();x.arc(0,-132,74,0,7);x.fill();
 // abertura do rosto
 x.fillStyle='#1A1420';x.beginPath();x.ellipse(4,-126,54,50,0,0,7);x.fill();
 // rosto (~40 anos): pele, cabelo castanho curto, olhos, sobrancelhas, sorriso
 x.save();x.beginPath();x.ellipse(4,-126,50,46,0,0,7);x.clip();x.fillStyle='#E6BF98';x.beginPath();x.arc(4,-118,44,0,7);x.fill();
 x.fillStyle='#4A3424';x.beginPath();x.ellipse(4,-162,46,18,0,0,7);x.fill();
 x.fillStyle='#1c1a2b';x.strokeStyle='#1c1a2b';x.lineCap='round';for(const e of [-12,20]){x.beginPath();x.ellipse(e,-124,4,7,0,0,7);x.fill();x.lineWidth=3.5;x.beginPath();x.moveTo(e-7,-140);x.lineTo(e+7,-142);x.stroke()}
 x.lineWidth=4;x.beginPath();x.moveTo(-6,-100);x.quadraticCurveTo(4,-90,16,-100);x.stroke();x.restore();
 // viseira dourada levantada + reflexo
 g=x.createLinearGradient(-60,-200,60,-150);g.addColorStop(0,'#8A5A18');g.addColorStop(.5,'#F2C96A');g.addColorStop(1,'#9C6A22');x.fillStyle=g;x.beginPath();x.ellipse(2,-180,62,26,0,Math.PI,0);x.lineTo(64,-172);x.quadraticCurveTo(2,-160,-60,-172);x.closePath();x.fill();
 x.fillStyle='rgba(255,255,255,.55)';x.beginPath();x.ellipse(-24,-190,16,5,-.2,0,7);x.fill();
 // lanternas do capacete
 x.fillStyle='#B7B3A9';x.fillRect(-82,-146,14,26);x.fillRect(68,-146,14,26);x.fillStyle='#FFE9B0';x.fillRect(-80,-142,10,8);x.fillRect(70,-142,10,8);
 x.restore()}
function rocket(x,cx,cy,s=1){x.save();x.translate(cx,cy);x.scale(s,s);
 let g=x.createLinearGradient(0,40,0,260);g.addColorStop(0,'rgba(255,200,110,.9)');g.addColorStop(.4,'rgba(255,140,60,.55)');g.addColorStop(1,'rgba(255,120,60,0)');x.fillStyle=g;x.beginPath();x.moveTo(-22,40);x.quadraticCurveTo(0,300,22,40);x.closePath();x.fill();
 g=x.createLinearGradient(-26,0,26,0);g.addColorStop(0,'#BDB9AF');g.addColorStop(.4,'#F4F2EC');g.addColorStop(1,'#9E9A91');x.fillStyle=g;x.beginPath();x.moveTo(-24,40);x.lineTo(-24,-120);x.quadraticCurveTo(0,-190,24,-120);x.lineTo(24,40);x.closePath();x.fill();
 x.fillStyle='#5E1428';x.beginPath();x.moveTo(-24,0);x.lineTo(-46,46);x.lineTo(-24,36);x.fill();x.beginPath();x.moveTo(24,0);x.lineTo(46,46);x.lineTo(24,36);x.fill();x.fillStyle='#D4A24C';x.fillRect(-24,-60,48,8);x.restore()}
function spaceBar(x,t=0,o={}){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1A070D');g.addColorStop(1,'#2C0B15');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 const x0=o.x0!=null?o.x0:-200,x1=o.x1!=null?o.x1:W+500,y0=-120,y1=560;
 // janela panorâmica: o espaço
 x.save();x.beginPath();x.roundRect(x0,y0,x1-x0,y1-y0,60);x.clip();x.fillStyle='#04050C';x.fillRect(x0,y0,x1-x0,y1-y0);
 g=x.createRadialGradient(W*.5,y0,40,W*.5,y0,1200);g.addColorStop(0,'rgba(60,30,90,.35)');g.addColorStop(1,'rgba(60,30,90,0)');x.fillStyle=g;x.fillRect(x0,y0,x1-x0,y1-y0);
 stars23(x,x0,y0,x1-x0,y1-y0,23);
 if(o.earth)earth(x,...o.earth);if(o.iss)iss(x,...o.iss);if(o.rocket)rocket(x,...o.rocket);if(o.astro)astronaut(x,o.astro[0],o.astro[1],o.astro[2],o.astro[3]||0,t);
 // reflexo do vidro
 x.fillStyle='rgba(255,230,200,.045)';for(let k=x0+120;k<x1;k+=560){x.beginPath();x.moveTo(k,y0);x.lineTo(k+140,y0);x.lineTo(k-60,y1);x.lineTo(k-200,y1);x.closePath();x.fill()}
 x.restore();
 // moldura dourada com rebites (estilo escotilha) e montantes
 x.strokeStyle='#8A6A34';x.lineWidth=22;x.beginPath();x.roundRect(x0,y0,x1-x0,y1-y0,60);x.stroke();x.strokeStyle='#D4A24C';x.lineWidth=6;x.beginPath();x.roundRect(x0+9,y0+9,x1-x0-18,y1-y0-18,52);x.stroke();
 for(const mx of (o.mull||[])){x.fillStyle='#6E5228';x.fillRect(mx-9,y0,18,y1-y0);x.fillStyle='#D4A24C';x.fillRect(mx-3,y0,6,y1-y0)}
 x.fillStyle='#D4A24C';for(let k=x0+40;k<x1-20;k+=70){x.beginPath();x.arc(k,y1+0,4,0,7);x.fill()}
 // balcão de trás com garrafas (fileira baixa, sob a janela)
 g=x.createLinearGradient(0,y1,0,820);g.addColorStop(0,'#3A1C12');g.addColorStop(1,'#1E0C08');x.fillStyle=g;x.fillRect(-900,y1+14,W+1800,320);
 x.strokeStyle='rgba(0,0,0,.35)';x.lineWidth=4;for(let xx=-900;xx<W+900;xx+=150)x.strokeRect(xx+12,y1+40,126,170);
 // pendentes
 for(const lx of (o.lamps||[560,1500])){g=x.createLinearGradient(0,150,0,820);g.addColorStop(0,'rgba(255,190,110,.16)');g.addColorStop(1,'rgba(255,190,110,0)');x.fillStyle=g;x.beginPath();x.moveTo(lx-40,150);x.lineTo(lx+40,150);x.lineTo(lx+300,820);x.lineTo(lx-300,820);x.closePath();x.fill();
  x.fillStyle='#14080A';x.fillRect(lx-2,-400,4,500);x.fillStyle='#D4A24C';x.beginPath();x.moveTo(lx-16,100);x.lineTo(lx+16,100);x.lineTo(lx+52,150);x.lineTo(lx-52,150);x.closePath();x.fill();x.fillStyle='#FFE2A8';x.beginPath();x.ellipse(lx,150,50,7,0,0,7);x.fill()}}
// garrafa de tinto de Bordeaux (vidro escuro, cápsula vinho, rótulo creme genérico com a safra "2000"); base em (0,0)
function spaceBottle(x,bx,by,s=1,rot=0){x.save();x.translate(bx,by);x.rotate(rot);x.scale(s,s);
 x.fillStyle='rgba(0,0,0,.35)';x.beginPath();x.ellipse(6,2,50,8,0,0,7);x.fill();
 let g=x.createLinearGradient(-38,0,38,0);g.addColorStop(0,'#0C1A14');g.addColorStop(.35,'#1E3A31');g.addColorStop(1,'#0B1712');x.fillStyle=g;
 x.beginPath();x.moveTo(-38,0);x.lineTo(-38,-180);x.quadraticCurveTo(-38,-222,-13,-236);x.lineTo(-13,-276);x.lineTo(13,-276);x.lineTo(13,-236);x.quadraticCurveTo(38,-222,38,-180);x.lineTo(38,0);x.closePath();x.fill();
 x.fillStyle='rgba(255,220,150,.2)';x.fillRect(-28,-186,8,176);
 // cápsula vinho com friso dourado
 x.fillStyle='#5E1428';x.beginPath();x.roundRect(-14,-288,28,62,[5,5,2,2]);x.fill();x.fillStyle='rgba(255,255,255,.18)';x.fillRect(-8,-284,4,54);x.fillStyle='#D4A24C';x.fillRect(-14,-240,28,4);
 // rótulo
 x.fillStyle='#F3E6C8';x.beginPath();x.roundRect(-34,-150,68,92,6);x.fill();x.strokeStyle='#D4A24C';x.lineWidth=2.5;x.strokeRect(-29,-145,58,82);
 x.fillStyle='#5E1428';x.beginPath();x.arc(0,-124,9,0,7);x.fill();x.fillStyle='#D4A24C';x.beginPath();x.arc(0,-124,4,0,7);x.fill();
 x.fillStyle='#5E1428';x.fillRect(-18,-106,36,3);x.font='700 17px Cinzel';x.textAlign='center';x.textBaseline='middle';x.fillText('2000',0,-86);x.fillRect(-12,-72,24,2);
 x.restore()}
// etiqueta de papel pendurada por um fio
function tagHang(x,cx,cy,txt,s=1,rot=0){x.save();x.translate(cx,cy);x.rotate(rot);x.scale(s,s);x.strokeStyle='rgba(243,230,200,.8)';x.lineWidth=2;x.beginPath();x.moveTo(0,-30);x.lineTo(0,0);x.stroke();
 x.font='900 22px Cinzel';const w=x.measureText(txt).width+34;x.fillStyle='#F3E6C8';x.beginPath();x.moveTo(-w/2+10,0);x.lineTo(w/2-10,0);x.lineTo(w/2,12);x.lineTo(w/2,40);x.lineTo(-w/2,40);x.lineTo(-w/2,12);x.closePath();x.fill();
 x.strokeStyle='#D4A24C';x.lineWidth=2;x.stroke();x.fillStyle='#5E1428';x.textAlign='center';x.textBaseline='middle';x.fillText(txt,0,22);x.restore()}
// spaceFG(h,o): Terra, estação, foguete e astronauta desenhados NÍTIDOS (camada de trás do Sommelier, sem o desfoque do fundo), recortados na janela
function spaceFG(x,o={},t=0){const x0=o.x0!=null?o.x0:-200,x1=o.x1!=null?o.x1:W+500;x.save();x.beginPath();x.roundRect(x0+12,-108,x1-x0-24,656,50);x.clip();
 if(o.earth)earth(x,...o.earth);if(o.iss)iss(x,...o.iss);if(o.rocket)rocket(x,...o.rocket);if(o.astro)astronaut(x,o.astro[0],o.astro[1],o.astro[2],o.astro[3]||0,t);x.restore()}
