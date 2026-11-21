// ===== Vídeo 33 — Por que o champanhe tem uma gaiolinha de arame? — cenário e objetos =====
// cavaGiz: adega de espumante cavada no giz (pedra calcária clara, arcos, garrafas deitadas nos nichos) com um POÇO DE LUZ
//   (feixe de luz do dia descendo de um buraco no teto) e velas
// museletTop: a gaiolinha (muselet) vista de frente no alto do gargalo: rolha em cogumelo sob a cápsula, PLAQUINHA dourada com brasão,
//   quatro pernas de arame, o anel em volta da boca e a ARGOLINHA torcida para fora (o.loop = ângulo da argolinha)
// gaiolaBottle: garrafa de espumante com a gaiolinha à mostra (cápsula só no pescoço), base em (bx,by), eixo para cima, rot gira na base
// looseMuselet: gaiolinha solta (fora da garrafa), para segurar entre os dedos · turnArrow: setinha curva de giro · sixBadge: medalhão "6×"
const GZ={chalk:'#CDBFA6',chalk2:'#9C8C74',dark:'#2A1A14',wire:'#C9CED4',wireD:'#7E848C',gold:'#D4A24C',gold2:'#F2D27A'};
function cavaGiz(x,t=0,o={}){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#2A1C16');g.addColorStop(1,'#4A382C');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 // blocos de giz (calcário claro, marcas de picareta)
 const R=rng(33);for(let y=-260;y<820;y+=70){const off=(Math.floor((y+260)/70)%2)*60;for(let xx=-900+off;xx<W+900;xx+=130+R()*30){const w=124+R()*16;x.fillStyle=`rgba(${150+R()*30|0},${130+R()*25|0},${105+R()*20|0},.38)`;x.beginPath();x.roundRect(xx,y,w-8,62,8);x.fill();
  x.strokeStyle='rgba(60,40,30,.18)';x.lineWidth=2;for(let k=0;k<3;k++){const sx=xx+10+R()*(w-30),sy=y+10+R()*40;x.beginPath();x.moveTo(sx,sy);x.lineTo(sx+10,sy+8);x.stroke()}}}
 // arcos com garrafas deitadas
 for(const nx of (o.niches||[160,600,1560,2000])){x.fillStyle='#1E120E';x.beginPath();x.moveTo(nx-170,820);x.lineTo(nx-170,320);x.arc(nx,320,170,Math.PI,0);x.lineTo(nx+170,820);x.closePath();x.fill();
  x.strokeStyle='rgba(205,191,166,.35)';x.lineWidth=16;x.stroke();x.save();x.beginPath();x.rect(nx-162,150,324,670);x.clip();bottleEnds(x,nx-150,790,8,12,19,nx|0);x.restore();x.fillStyle='#3A281C';for(const yy of [470,640])x.fillRect(nx-170,yy,340,12)}
 // poço de luz: feixe de luz do dia descendo do teto
 const bx=o.well!=null?o.well:1100;g=x.createLinearGradient(0,-200,0,820);g.addColorStop(0,'rgba(255,246,220,.55)');g.addColorStop(1,'rgba(255,246,220,0)');x.fillStyle=g;
 x.beginPath();x.moveTo(bx-60,-200);x.lineTo(bx+60,-200);x.lineTo(bx+260,820);x.lineTo(bx-140,820);x.closePath();x.fill();
 x.fillStyle='rgba(255,246,220,.35)';for(let i=0;i<26;i++){const px=bx-40+R()*260,py=-100+R()*800;x.beginPath();x.arc(px+py*.12,py,1.4+R()*1.6,0,7);x.fill()}
 x.fillStyle='#120A08';x.beginPath();x.ellipse(bx,-190,80,22,0,0,7);x.fill();x.fillStyle='rgba(255,250,235,.8)';x.beginPath();x.ellipse(bx,-192,62,14,0,0,7);x.fill();
 // velas
 for(const sx of (o.lamps||[380,1800])){g=x.createRadialGradient(sx,280,10,sx,280,300);g.addColorStop(0,'rgba(255,180,94,.3)');g.addColorStop(1,'rgba(255,180,94,0)');x.fillStyle=g;x.fillRect(sx-300,-20,600,600);x.fillStyle=CEL.gold;x.fillRect(sx-6,280,12,50);x.fillStyle=CEL.cream;x.fillRect(sx-9,246,18,36);flame(x,sx,244,1,t)}}
// gaiolinha no alto do gargalo; (0,0) = boca da garrafa (topo do vidro), eixo para cima; unidades da garrafa (s=1)
function museletTop(x,o={}){const loop=o.loop!=null?o.loop:.5;
 // cápsula dourada sobre a rolha (cogumelo)
 let g=x.createLinearGradient(-20,0,20,0);g.addColorStop(0,'#8A6424');g.addColorStop(.4,'#F2D27A');g.addColorStop(1,'#8A6424');x.fillStyle=g;
 x.beginPath();x.moveTo(-17,6);x.lineTo(-18,-14);x.quadraticCurveTo(-21,-32,-12,-38);x.lineTo(12,-38);x.quadraticCurveTo(21,-32,18,-14);x.lineTo(17,6);x.closePath();x.fill();
 // anel de arame em volta da boca (com a argolinha torcida)
 x.strokeStyle=GZ.wire;x.lineWidth=4.4;x.lineCap='round';x.beginPath();x.ellipse(0,2,20,5,0,0,7);x.stroke();
 // quatro pernas de arame (duas da frente, duas de trás mais apagadas)
 const legs=[[-17,-.5],[17,-.5],[-8,1],[8,1]];
 for(const [lx,f] of legs){x.strokeStyle=f>0?GZ.wire:GZ.wireD;x.lineWidth=f>0?4.2:3;x.beginPath();x.moveTo(lx,2);x.quadraticCurveTo(lx*1.05,-22,lx*.45,-37);x.stroke()}
 // plaquinha (disco dourado com brasão) por cima
 g=x.createLinearGradient(0,-46,0,-34);g.addColorStop(0,'#FFF0B8');g.addColorStop(.5,'#D4A24C');g.addColorStop(1,'#8A6424');x.fillStyle=g;x.beginPath();x.ellipse(0,-40,17,7,0,0,7);x.fill();
 x.fillStyle='#5E1428';x.beginPath();x.ellipse(0,-40.5,7,2.4,0,0,7);x.fill();x.strokeStyle='rgba(255,240,184,.9)';x.lineWidth=1;x.beginPath();x.ellipse(0,-40,12,4.2,0,0,7);x.stroke();
 // cruzinha de arame por cima da plaquinha
 x.strokeStyle=GZ.wire;x.lineWidth=3;x.beginPath();x.moveTo(-15,-40);x.lineTo(15,-40);x.stroke();
 // argolinha torcida (sai do anel, na frente)
 x.save();x.translate(-6,6);x.rotate(loop);x.strokeStyle=GZ.wire;x.lineWidth=4;for(let k=0;k<3;k++){x.beginPath();x.arc(0,4+k*5,3.5,Math.PI*.2,Math.PI*1.8);x.stroke()}
 x.beginPath();x.ellipse(0,25,7,8,0,0,7);x.stroke();x.restore()}
function gaiolaBottle(x,bx,by,s,rot=0,o={}){x.save();x.translate(bx,by);x.rotate(rot);x.scale(s,s);
 x.fillStyle='rgba(0,0,0,.35)';x.beginPath();x.ellipse(6,2,52,8,0,0,7);x.fill();
 const body=()=>{x.beginPath();x.moveTo(-40,0);x.lineTo(-40,-165);x.bezierCurveTo(-40,-215,-16,-226,-15,-262);x.lineTo(-15,-292);x.lineTo(15,-292);x.lineTo(15,-262);x.bezierCurveTo(16,-226,40,-215,40,-165);x.lineTo(40,0);x.closePath()};
 body();let g=x.createLinearGradient(-40,0,40,0);g.addColorStop(0,'#0C1A13');g.addColorStop(.35,'#24402F');g.addColorStop(1,'#0E1E16');x.fillStyle=g;x.fill();
 x.fillStyle='rgba(255,220,150,.26)';x.fillRect(-27,-170,7,160);x.fillRect(-9,-262,4,30);
 // rótulo (creme, moldura dourada) e colarinho vinho
 x.fillStyle='#F3E6C8';x.beginPath();x.roundRect(-36,-140,72,78,8);x.fill();x.strokeStyle=CEL.gold;x.lineWidth=2.5;x.strokeRect(-31,-135,62,68);
 x.fillStyle='#5E1428';x.font='900 15px Cinzel';x.textAlign='center';x.textBaseline='middle';x.fillText('BRUT',0,-110);x.fillStyle=CEL.gold;x.fillRect(-18,-96,36,3);x.fillStyle='#5E1428';x.font='700 9px Cinzel';x.fillText('ESPUMANTE',0,-84);
 x.fillStyle='#5E1428';x.beginPath();x.moveTo(-26,-200);x.lineTo(26,-200);x.lineTo(20,-182);x.lineTo(-20,-182);x.closePath();x.fill();x.fillStyle=CEL.gold;x.fillRect(-20,-194,40,3);
 // cápsula só no pescoço (rasgada em cima, deixando a gaiolinha à mostra)
 g=x.createLinearGradient(-17,0,17,0);g.addColorStop(0,'#3A0A16');g.addColorStop(.4,'#7A1F33');g.addColorStop(1,'#3A0A16');x.fillStyle=g;
 x.beginPath();x.moveTo(-16,-238);x.lineTo(16,-238);x.lineTo(15.5,-266);for(let k=0;k<=6;k++)x.lineTo(15-k*5,-268-(k%2)*5);x.closePath();x.fill();x.fillStyle=CEL.gold;x.fillRect(-16,-246,32,2.5);
 x.translate(0,-292);museletTop(x,o);x.restore()}
// gaiolinha solta (como sai da garrafa): (cx,cy) = centro do anel; s escala
function looseMuselet(x,cx,cy,s,a=0,o={}){x.save();x.translate(cx,cy);x.rotate(a);x.scale(s,s);
 x.strokeStyle=GZ.wire;x.lineWidth=4.2;x.lineCap='round';x.beginPath();x.ellipse(0,0,20,5,0,0,7);x.stroke();
 for(const [lx,f] of [[-18,1],[18,1],[-8,0],[8,0]]){x.strokeStyle=f?GZ.wire:GZ.wireD;x.lineWidth=f?4:3;x.beginPath();x.moveTo(lx,0);x.quadraticCurveTo(lx*1.1,-24,lx*.45,-38);x.stroke()}
 let g=x.createLinearGradient(0,-48,0,-34);g.addColorStop(0,'#FFF0B8');g.addColorStop(.5,'#D4A24C');g.addColorStop(1,'#8A6424');x.fillStyle=g;x.beginPath();x.ellipse(0,-41,16,6,0,0,7);x.fill();
 x.fillStyle='#5E1428';x.beginPath();x.ellipse(0,-41.5,7.5,2.6,0,0,7);x.fill();x.strokeStyle=GZ.wire;x.lineWidth=2.2;x.beginPath();x.moveTo(-15,-41);x.lineTo(15,-41);x.stroke();
 x.save();x.translate(-6,4);x.rotate(o.loop||.6);x.strokeStyle=GZ.wire;x.lineWidth=3;for(let k=0;k<3;k++){x.beginPath();x.arc(0,4+k*4.5,3,Math.PI*.2,Math.PI*1.8);x.stroke()}x.beginPath();x.ellipse(0,22,6,7,0,0,7);x.stroke();x.restore();x.restore()}
// plaquinha grande vista de cima (disco com brasão), para colecionador / destaque
function plaqueTop(x,cx,cy,r,col='#D4A24C',mark='#5E1428'){x.save();let g=x.createRadialGradient(cx-r*.3,cy-r*.3,2,cx,cy,r);g.addColorStop(0,'#FFF0B8');g.addColorStop(.6,col);g.addColorStop(1,'#7A5420');x.fillStyle=g;x.beginPath();x.arc(cx,cy,r,0,7);x.fill();
 x.strokeStyle='rgba(255,240,184,.8)';x.lineWidth=r*.06;x.beginPath();x.arc(cx,cy,r*.82,0,7);x.stroke();x.fillStyle=mark;x.beginPath();x.moveTo(cx,cy-r*.45);x.lineTo(cx+r*.36,cy-r*.2);x.lineTo(cx+r*.28,cy+r*.3);x.lineTo(cx,cy+r*.48);x.lineTo(cx-r*.28,cy+r*.3);x.lineTo(cx-r*.36,cy-r*.2);x.closePath();x.fill();
 x.fillStyle=col;x.beginPath();x.arc(cx,cy,r*.14,0,7);x.fill();x.restore()}
// setinha curva de giro (em volta de um ponto), sem brilho
function turnArrow(x,cx,cy,rx,ry,a=1,dir=1){x.save();x.translate(cx,cy);x.strokeStyle=`rgba(242,210,122,${.9*a})`;x.lineWidth=5;x.lineCap='round';
 const a0=.3,a1=Math.PI*1.55;x.beginPath();x.ellipse(0,0,rx,ry,0,a0,a1);x.stroke();const ex=Math.cos(a1)*rx,ey=Math.sin(a1)*ry;
 x.fillStyle=`rgba(242,210,122,${a})`;x.beginPath();x.moveTo(ex+10,ey-2);x.lineTo(ex-6,ey-12);x.lineTo(ex-6,ey+10);x.closePath();x.fill();x.restore()}
// medalhão dourado com o número (ex.: "6×")
function sixBadge(x,cx,cy,r,txt='6×'){x.save();let g=x.createLinearGradient(0,cy-r,0,cy+r);g.addColorStop(0,'#5A1020');g.addColorStop(1,'#2A0610');x.fillStyle=g;x.beginPath();x.arc(cx,cy,r,0,7);x.fill();
 const gg=x.createLinearGradient(0,cy-r,0,cy+r);gg.addColorStop(0,'#FFE7A0');gg.addColorStop(.5,'#C8913A');gg.addColorStop(1,'#F2D27A');x.strokeStyle=gg;x.lineWidth=r*.12;x.stroke();x.lineWidth=r*.04;x.beginPath();x.arc(cx,cy,r*.8,0,7);x.stroke();x.restore();
 goldText(x,txt,cx,cy+r*.04,r*1.05,'Cinzel',900)}
