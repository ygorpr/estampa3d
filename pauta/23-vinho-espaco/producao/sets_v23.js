// ===== Vídeo 23 — cenários e personagens das cenas (usa sets_espaco.js: earth, iss, astronaut, rocket, spaceBar, spaceBottle, tagHang) =====
// céu do espaço em tela cheia (estrelas + Terra grande embaixo + estação passando)
function spaceView(x,t,o={}){x.fillStyle='#04050C';x.fillRect(-900,-600,W+1800,1900);let g=x.createRadialGradient(W*.3,0,40,W*.3,0,1400);g.addColorStop(0,'rgba(70,30,100,.35)');g.addColorStop(1,'rgba(70,30,100,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 stars23(x,-300,-300,W+600,1500,7);if(o.earth!==false){const e=o.earth||[960,1700,1100];earth(x,e[0],e[1],e[2])}if(o.iss)iss(x,...o.iss)}
// céu noturno com chão (base de lançamento) — para o foguete
function launchSky(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#05060F');g.addColorStop(.7,'#1A1030');g.addColorStop(1,'#3A1A2A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);stars23(x,-300,-300,W+600,1000,11);
 x.fillStyle='#120A10';x.beginPath();x.moveTo(-900,880);for(let k=-900;k<=W+900;k+=120)x.lineTo(k,860-Math.sin(k*.004)*24);x.lineTo(W+900,1200);x.lineTo(-900,1200);x.fill();
 // torre de lançamento
 x.strokeStyle='#3A2A30';x.lineWidth=6;for(let k=0;k<12;k++){x.beginPath();x.moveTo(1120,880-k*50);x.lineTo(1180,830-k*50);x.moveTo(1180,880-k*50);x.lineTo(1120,830-k*50);x.stroke()}x.fillStyle='#3A2A30';x.fillRect(1112,280,10,600);x.fillRect(1178,280,10,600)}
// módulo lunar por dentro: paredes cinza com painéis, botões, janela triangular com a Lua e o céu preto
function lunarCabin(x,t){x.fillStyle='#2A2A30';x.fillRect(-900,-600,W+1800,1900);
 let g=x.createLinearGradient(0,0,W,0);g.addColorStop(0,'#3C3C44');g.addColorStop(.5,'#55555E');g.addColorStop(1,'#34343A');x.fillStyle=g;x.fillRect(-900,-200,W+1800,1100);
 // janela triangular
 x.save();x.beginPath();x.moveTo(1180,120);x.lineTo(1700,120);x.lineTo(1440,520);x.closePath();x.fillStyle='#05050A';x.fill();x.clip();stars23(x,1180,120,520,400,5);
 x.fillStyle='#8E8C88';x.beginPath();x.moveTo(1150,430);x.quadraticCurveTo(1440,380,1730,420);x.lineTo(1730,600);x.lineTo(1150,600);x.fill();x.fillStyle='rgba(60,60,60,.5)';for(const [cx,cy,r] of [[1300,450,18],[1520,440,12],[1400,470,9]]){x.beginPath();x.ellipse(cx,cy,r*2,r*.6,0,0,7);x.fill()}
 earth(x,1560,200,34);x.restore();x.strokeStyle='#1E1E24';x.lineWidth=18;x.beginPath();x.moveTo(1180,120);x.lineTo(1700,120);x.lineTo(1440,520);x.closePath();x.stroke();x.strokeStyle='#D4A24C';x.lineWidth=3;x.stroke();
 // painéis de controle com botões e luzes
 const panel=(px,py,w,h,R)=>{x.fillStyle='#2E2E34';x.beginPath();x.roundRect(px,py,w,h,8);x.fill();x.strokeStyle='#1A1A1E';x.lineWidth=4;x.stroke();for(let i=0;i<w/40-1;i++)for(let j=0;j<h/40-1;j++){const r=R();x.fillStyle=r>.85?'#E8B04A':r>.72?'#C8213F':r>.6?'#6AC07A':'#8E949C';x.beginPath();x.arc(px+30+i*40,py+30+j*40,r>.6?6:8,0,7);x.fill()}};
 const R=rng(69);panel(80,140,420,260,R);panel(560,120,460,200,R);panel(80,460,300,200,R);panel(1760,180,260,420,R);
 // tubos e alças
 x.strokeStyle='#6A6A72';x.lineWidth=14;x.lineCap='round';x.beginPath();x.moveTo(-100,80);x.lineTo(1100,80);x.stroke();x.lineWidth=8;x.strokeStyle='#8A8A92';x.beginPath();x.moveTo(1040,340);x.lineTo(1040,620);x.stroke();
 x.fillStyle='#1E1E24';x.fillRect(-900,860,W+1800,400);x.fillStyle='#3A3A42';x.fillRect(-900,850,W+1800,14)}
// Buzz Aldrin (1969): traje branco da Apollo, capacete-bolha com viseira dourada levantada, segura o cálice pequenino de prata
const APOLLO=CHX({cloth:'#EFEDE6',hood:'#D2CFC6',outfit:'jacket',shirt:'#E4E1D8',short:'#3A2A20',temples:'#5A4A3A',skin:'#E2B890',hand:'#EDEAE2',leg:'#E4E1D8',shoe:'#BFBBB2'});
function aldrin(g,cx,base,s,t,o={}){return npc(g,cx,base,s,t,Object.assign({ch:APOLLO,look:.35,lookY:.2,mouth:.6,brow:.55,hands:{l:[-70,175,90],r:[95,120,140]},
 headExtra:(x,fx,fy)=>{x.save();x.fillStyle='rgba(200,225,255,.12)';x.strokeStyle='rgba(235,240,250,.75)';x.lineWidth=6;x.beginPath();x.arc(0,-6,HR+36,0,7);x.fill();x.stroke();
  let gr=x.createLinearGradient(-HR,-HR-50,HR,-HR);gr.addColorStop(0,'#8A5A18');gr.addColorStop(.5,'#F2C96A');gr.addColorStop(1,'#9C6A22');x.fillStyle=gr;x.beginPath();x.arc(0,-6,HR+32,Math.PI*1.12,Math.PI*1.88);x.arc(0,-6,HR+6,Math.PI*1.86,Math.PI*1.14,true);x.closePath();x.fill();
  x.fillStyle='rgba(255,255,255,.5)';x.beginPath();x.ellipse(-HR*.6,-HR*.55,14,30,.5,0,7);x.fill();x.restore()},
 hold:(x,hl,hr,hp)=>{const y=base-505*s;x.save();x.translate(cx,y);x.scale(s,s);x.fillStyle='#E2DFD6';x.beginPath();x.roundRect(-46,96,92,46,6);x.fill();x.strokeStyle='#A8A49A';x.lineWidth=3;x.stroke();
  x.fillStyle='#C8213F';x.beginPath();x.arc(-26,119,7,0,7);x.fill();x.fillStyle='#2D6BB5';x.beginPath();x.arc(-4,119,7,0,7);x.fill();x.fillStyle='#8E949C';x.fillRect(10,110,26,7);x.fillRect(10,123,20,6);
  // anel do pescoço (onde encaixa o capacete)
  x.fillStyle='#9CA3AC';x.beginPath();x.ellipse(0,-6,84,16,0,0,7);x.fill();x.fillStyle='#C8213F';x.fillRect(-84,-8,10,8);x.fillStyle='#2D6BB5';x.fillRect(74,-8,10,8);
  // bandeira no ombro
  x.fillStyle='#F4F0E8';x.fillRect(-150,40,40,26);x.fillStyle='#C8213F';for(let i=0;i<3;i++)x.fillRect(-150,42+i*8,40,4);x.fillStyle='#1E2E6A';x.fillRect(-150,40,16,12);x.restore();
  if(o.chalice!==false)chalice(x,hr[0]+4,hr[1]-18,.9*s/.62,o.climb||0,t)}},o))}
// cálice pequeno de prata; climb 0..1 = o vinho sobe pela parede (sempre DENTRO do cálice)
function chalice(x,cx,cy,s,climb=0,t=0){x.save();x.translate(cx,cy);x.scale(s,s);
 const bowl=()=>{x.beginPath();x.moveTo(-34,-70);x.quadraticCurveTo(-36,-8,0,-4);x.quadraticCurveTo(36,-8,34,-70);x.closePath()};
 x.save();bowl();x.clip();x.fillStyle='rgba(30,30,36,.55)';x.fillRect(-40,-80,80,80);
 const lv=-30,c=climb*30,w=Math.sin(t*1.3)*1.5;x.fillStyle='#6E0F22';x.beginPath();x.moveTo(-40,lv-c+w);x.quadraticCurveTo(-30,lv-c*.15,0,lv+4);x.quadraticCurveTo(30,lv-c*.15,40,lv-c-w);x.lineTo(40,0);x.lineTo(-40,0);x.closePath();x.fill();
 x.fillStyle='rgba(255,120,140,.25)';x.beginPath();x.ellipse(0,lv+3,20,3,0,0,7);x.fill();x.restore();
 let g=x.createLinearGradient(-36,0,36,0);g.addColorStop(0,'#8E949C');g.addColorStop(.35,'#F2F2F4');g.addColorStop(1,'#7A7F88');x.strokeStyle=g;x.lineWidth=5;bowl();x.stroke();
 x.fillStyle=g;x.fillRect(-4,-6,8,40);x.beginPath();x.ellipse(0,36,22,6,0,0,7);x.fill();x.fillStyle='rgba(255,255,255,.6)';x.fillRect(-26,-62,4,30);x.restore()}
// interior da Estação Espacial: módulo cilíndrico, painéis brancos, cabos, alças amarelas, sacolas presas, janela redonda com a Terra
function issInterior(x,t){x.fillStyle='#1A1C22';x.fillRect(-900,-600,W+1800,1900);
 let g=x.createLinearGradient(0,-100,0,1000);g.addColorStop(0,'#C9CBC8');g.addColorStop(.5,'#E4E4DE');g.addColorStop(1,'#A9ABA6');x.fillStyle=g;x.fillRect(-900,-100,W+1800,1100);
 // anéis do módulo (perspectiva)
 x.strokeStyle='rgba(90,92,96,.45)';x.lineWidth=6;for(const k of [-500,0,500,1000,1500,2000,2500]){x.beginPath();x.moveTo(k,-100);x.lineTo(k+60,1000);x.stroke()}
 // painéis com etiquetas, sacolas presas com velcro
 const R=rng(31);for(let i=-2;i<10;i++)for(let j=0;j<3;j++){const px=i*260+20,py=-40+j*300;x.fillStyle=R()>.5?'#D6D7D2':'#CFD0CB';x.fillRect(px,py,230,270);x.strokeStyle='rgba(80,80,80,.35)';x.lineWidth=3;x.strokeRect(px,py,230,270);
  const r=R();if(r>.7){x.fillStyle='#E9E4D4';x.beginPath();x.roundRect(px+40,py+50,150,120,14);x.fill();x.strokeStyle='#9A9484';x.stroke();x.fillStyle='#2A6AB0';x.fillRect(px+60,py+70,50,14)}else if(r>.45){x.fillStyle='#2A2C30';x.fillRect(px+30,py+40,170,100);x.fillStyle='#5AB06A';for(let k=0;k<4;k++)x.fillRect(px+44,py+56+k*20,60+R()*80,8)}
  x.fillStyle='#E8C23A';x.fillRect(px+180,py+12,36,8)}
 // cabos soltos
 x.strokeStyle='#3A4048';x.lineWidth=5;for(let k=0;k<6;k++){const a=-200+k*420;x.beginPath();x.moveTo(a,-20);x.bezierCurveTo(a+120,160+Math.sin(t+k)*10,a+200,40,a+360,120);x.stroke()}
 // alças amarelas
 x.strokeStyle='#E8C23A';x.lineWidth=12;x.lineCap='round';for(const k of [200,860,1520]){x.beginPath();x.moveTo(k,40);x.lineTo(k+120,40);x.stroke()}
 // janela redonda com a Terra
 x.save();x.beginPath();x.arc(1640,330,130,0,7);x.fillStyle='#04050C';x.fill();x.clip();earth(x,1700,520,260);x.restore();x.strokeStyle='#8E949C';x.lineWidth=22;x.beginPath();x.arc(1640,330,130,0,7);x.stroke();x.strokeStyle='#D4A24C';x.lineWidth=4;x.stroke();
 // piso/parede de baixo
 x.fillStyle='#9A9C98';x.fillRect(-900,880,W+1800,300)}
// astronauta da estação: macacão azul-marinho, meias, remendo da missão, cabelo flutuando, luvas finas; flutua devagar (rot e bob)
const CREW=CHX({cloth:'#1E2A44',hood:'#16203A',outfit:'jacket',shirt:'#2A3654',short:'#5A3E2A',beard:'#5A3E2A',beardT:'stubble',skin:'#E2B890',hand:'#D8D2C4',leg:'#1E2A44',shoe:'#D8D5CC'});
function crewman(g,cx,cy,s,t,o={}){const bob=Math.sin(t*.9+(o.ph||0))*12,rot=(o.rot||0)+Math.sin(t*.6)*.04;g.save();g.translate(cx,cy+bob);g.rotate(rot);
 const hp=npc(g,0,505*s*.55,s,t,Object.assign({ch:CREW,look:.35,mouth:.5,brow:.55,
  headExtra:(x)=>{x.fillStyle='#5A3E2A';for(let i=0;i<5;i++){x.save();x.rotate(-.5+i*.25+Math.sin(t*1.5+i)*.06);x.beginPath();x.ellipse(0,-HR-22,10,26,0,0,7);x.fill();x.restore()}},
  hold:(x,hl,hr,hp)=>{const y=505*s*.55-505*s;x.save();x.scale(s,s);x.translate(0,y/s);x.fillStyle='#5E1428';x.beginPath();x.arc(-56,70,18,0,7);x.fill();x.strokeStyle='#D4A24C';x.lineWidth=3;x.stroke();x.fillStyle='#D4A24C';x.beginPath();x.arc(-56,70,6,0,7);x.fill();
   x.fillStyle='#F4F0E8';x.fillRect(40,56,34,22);x.fillStyle='#2D6BB5';x.fillRect(40,56,34,7);x.fillStyle='#C8213F';x.fillRect(40,71,34,7);x.restore();if(o.hold)o.hold(x,hl,hr,hp)}},o.npc||{}));
 g.restore();return hp}
// cilindro de aço (o estojo da garrafa); base no centro; rot em rad
function steelCyl(x,cx,cy,s=1,rot=0,lbl){x.save();x.translate(cx,cy);x.rotate(rot);x.scale(s,s);let g=x.createLinearGradient(-60,0,60,0);g.addColorStop(0,'#6A7078');g.addColorStop(.35,'#E6E9EC');g.addColorStop(.6,'#B8BDC3');g.addColorStop(1,'#5A6068');
 x.fillStyle=g;x.beginPath();x.roundRect(-60,-200,120,400,24);x.fill();x.fillStyle='#8E949C';x.fillRect(-64,-170,128,14);x.fillRect(-64,156,128,14);x.fillStyle='#4A5058';for(const yy of [-163,163])for(const xx of [-44,-14,16,46]){x.beginPath();x.arc(xx,yy,3,0,7);x.fill()}
 if(lbl){x.fillStyle='#F3E6C8';x.fillRect(-46,-40,92,60);x.fillStyle='#5E1428';x.font='900 20px Cinzel';x.textAlign='center';x.textBaseline='middle';x.fillText(lbl,0,-10)}x.restore()}
// reciclador de água: caixa com mostrador e gotas voltando para o tanque
function recycler(x,cx,cy,t){x.save();x.fillStyle='#D2D3CE';x.beginPath();x.roundRect(cx-170,cy-220,340,440,16);x.fill();x.strokeStyle='#7A7C78';x.lineWidth=5;x.stroke();x.fillStyle='#2A2C30';x.fillRect(cx-120,cy-180,240,110);x.fillStyle='#5AB06A';x.font='700 30px Cinzel';x.textAlign='center';x.fillText('H₂O',cx,cy-112);
 x.fillStyle='rgba(120,180,230,.35)';x.beginPath();x.roundRect(cx-120,cy-40,240,220,12);x.fill();x.fillStyle='#5A9AD0';x.fillRect(cx-120,cy+60,240,120);
 for(let i=0;i<4;i++){const k=(t*.7+i*.25)%1;x.fillStyle=`rgba(140,200,255,${1-k})`;x.beginPath();x.arc(cx-60+i*40,cy-30+k*80,9,0,7);x.fill()}x.restore()}
// copo com X (bebida proibida)
function noDrink(x,cx,cy,a){fade(x,a,()=>{x.save();x.fillStyle='rgba(243,230,200,.18)';x.strokeStyle='#F3E6C8';x.lineWidth=5;x.beginPath();x.moveTo(cx-60,cy-90);x.lineTo(cx-44,cy+80);x.lineTo(cx+44,cy+80);x.lineTo(cx+60,cy-90);x.closePath();x.fill();x.stroke();
 x.fillStyle='#6E0F22';x.beginPath();x.moveTo(cx-54,cy-30);x.lineTo(cx-45,cy+76);x.lineTo(cx+45,cy+76);x.lineTo(cx+54,cy-30);x.closePath();x.fill();x.strokeStyle='#C8213F';x.lineWidth=18;x.lineCap='round';x.beginPath();x.moveTo(cx-100,cy-110);x.lineTo(cx+100,cy+110);x.moveTo(cx+100,cy-110);x.lineTo(cx-100,cy+110);x.stroke();x.restore()})}
// mar e céu de dia (para a cápsula)
function seaSky(x,t){let g=x.createLinearGradient(0,-300,0,700);g.addColorStop(0,'#2C4A78');g.addColorStop(1,'#D89A78');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1400);cloudS(x,300,200,1.2);cloudS(x,1500,140,1);cloudS(x,1100,330,.7);
 g=x.createLinearGradient(0,700,0,1100);g.addColorStop(0,'#1E4A6A');g.addColorStop(1,'#0C2438');x.fillStyle=g;x.fillRect(-900,700,W+1800,600);x.strokeStyle='rgba(255,255,255,.25)';x.lineWidth=3;for(let i=0;i<14;i++){const yy=730+i*26,o=(t*30+i*90)%300;x.beginPath();for(let k=-300;k<W+300;k+=300){x.moveTo(k+o,yy);x.quadraticCurveTo(k+o+40,yy-8,k+o+80,yy)}x.stroke()}}
function cloudS(x,cx,cy,s){x.save();x.fillStyle='rgba(255,240,230,.55)';for(const [dx,dy,r] of [[-60,10,50],[0,-10,70],[70,8,52],[130,18,38]]){x.beginPath();x.arc(cx+dx*s,cy+dy*s,r*s,0,7);x.fill()}x.restore()}
// cápsula de volta com 3 paraquedas listrados
function capsule(x,cx,cy,s=1,t=0){x.save();x.translate(cx,cy);x.scale(s,s);const sw=Math.sin(t*1.2)*.04;x.rotate(sw);
 for(const [dx,col] of [[-150,'#E8E4DA'],[0,'#C8213F'],[150,'#E8E4DA']]){x.strokeStyle='rgba(60,60,60,.6)';x.lineWidth=2;x.beginPath();x.moveTo(0,-20);x.lineTo(dx-90,-330);x.moveTo(0,-20);x.lineTo(dx+90,-330);x.stroke();
  x.fillStyle=col;x.beginPath();x.moveTo(dx-100,-330);x.quadraticCurveTo(dx,-470,dx+100,-330);x.quadraticCurveTo(dx,-350,dx-100,-330);x.fill();x.strokeStyle='rgba(0,0,0,.2)';x.beginPath();x.moveTo(dx,-330);x.lineTo(dx,-430);x.stroke()}
 x.fillStyle='#D9D6CE';x.beginPath();x.moveTo(-40,-30);x.lineTo(40,-30);x.lineTo(80,60);x.lineTo(-80,60);x.closePath();x.fill();x.fillStyle='#3A3A40';x.beginPath();x.ellipse(0,62,82,14,0,0,7);x.fill();x.fillStyle='#2A3A55';x.beginPath();x.arc(-10,14,12,0,7);x.fill();x.fillStyle='#C8213F';x.fillRect(-40,-34,80,8);x.restore()}
// sala de prova em Bordeaux: parede creme e boiserie, quadro, castiçal, mesa com toalha branca
function tastingRoom(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#2A1014');g.addColorStop(1,'#3E1A1E');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.strokeStyle='rgba(212,162,76,.25)';x.lineWidth=4;for(let k=-800;k<W+800;k+=320){x.strokeRect(k+30,60,260,420);x.strokeRect(k+30,520,260,240)}
 // janelas altas com vinhedo ao longe
 for(const wx of [380,1540]){x.fillStyle='#E9B880';x.fillRect(wx-110,90,220,360);x.fillStyle='#5A7A3C';x.fillRect(wx-110,330,220,120);x.strokeStyle='#3A2A1A';x.lineWidth=10;x.strokeRect(wx-110,90,220,360);x.beginPath();x.moveTo(wx,90);x.lineTo(wx,450);x.moveTo(wx-110,250);x.lineTo(wx+110,250);x.stroke()}
 x.fillStyle='#1A0A0C';x.fillRect(-900,900,W+1800,300)}
function tastingTable(f,t,o={}){f.fillStyle='#DCD2BE';f.beginPath();f.moveTo(-200,780);f.lineTo(W+200,780);f.lineTo(W+200,1100);f.lineTo(-200,1100);f.fill();f.fillStyle='rgba(0,0,0,.08)';for(let k=0;k<W;k+=240)f.fillRect(k,780,4,320);f.fillStyle='#D8D2C4';f.fillRect(-200,780,W+400,10);
 for(const [gx,num] of (o.glasses||[])){glassW(f,gx,800,.8,.42,o.col||'#6E1630');f.save();f.fillStyle='#F3E6C8';f.beginPath();f.arc(gx,840,20,0,7);f.fill();f.strokeStyle='#D4A24C';f.lineWidth=3;f.stroke();f.fillStyle='#5E1428';f.font='900 22px Cinzel';f.textAlign='center';f.textBaseline='middle';f.fillText(num,gx,841);f.restore()}
 if(o.candle)candle(f,o.candle,800,110,t)}
// garrafa com o rótulo coberto por um saco de pano (prova às cegas)
function blindBottle(x,bx,by,s,num){spaceBottle(x,bx,by,s,0);x.save();x.translate(bx,by);x.scale(s,s);x.fillStyle='#8E1B3A';x.beginPath();x.moveTo(-44,-196);x.quadraticCurveTo(0,-214,44,-196);x.lineTo(48,4);x.lineTo(-48,4);x.closePath();x.fill();
 x.strokeStyle='#D4A24C';x.lineWidth=3;x.beginPath();x.moveTo(-40,-180);x.quadraticCurveTo(0,-196,40,-180);x.stroke();x.fillStyle='#F3E6C8';x.font='900 40px Cinzel';x.textAlign='center';x.textBaseline='middle';x.fillText(num,0,-90);x.restore()}
// provadores (jaleco / paletó) e a crítica Jane Anson (cabelo curto claro, sem caricatura)
const TASTER1=LABCOAT({short:'#4A3424',beard:'#4A3424',beardT:'short',skin:'#E6BF98',hand:'#E6BF98'});
const TASTER2=CHX({cloth:'#2A2A34',hood:'#1E1E28',outfit:'blazer',shirt:'#F4F0E8',collar:'#F4F0E8',tie:'#5E1428',short:'#8A8A8A',temples:'#B0B0B0',skin:'#DDA882',hand:'#DDA882'});
const ANSON=CHX({cloth:'#2C3A4A',hood:'#1E2A38',outfit:'blazer',shirt:'#E8E2D4',collar:'#E8E2D4',tie:null,short:'#E2C98E',vol:30,skin:'#F0D0B4',hand:'#F0D0B4'});
function taster(g,cx,base,s,t,ch,o={}){return npc(g,cx,base,s,t,Object.assign({ch,look:.2,mouth:.5,brow:.55,hands:{l:[-80,200,100],r:[90,150,120]},
 hold:(x,hl,hr)=>{x.fillStyle='#F4ECD8';x.save();x.translate(hl[0],hl[1]);x.rotate(-.2);x.fillRect(-40,-56,80,100);x.fillStyle='#8A6A3A';x.fillRect(-40,-62,80,10);x.fillStyle='#7A7A7A';for(let i=0;i<4;i++)x.fillRect(-28,-36+i*20,56,3);x.restore();glassW(x,hr[0]+4,hr[1]+40,.62*s/.62,.4,'#6E1630')}},o))}
function anson(g,cx,base,s,t,o={}){return npc(g,cx,base,s,t,Object.assign({ch:ANSON,look:.25,lookY:.1,mouth:.45,brow:.6,hands:{l:[-40,90,160],r:[110,190,110]},
 headExtra:(x)=>{x.fillStyle='#E2C98E';x.beginPath();x.ellipse(-HR+6,-20,22,34,0,0,7);x.fill();x.beginPath();x.ellipse(HR-6,-20,22,34,0,0,7);x.fill()},
 hold:(x,hl,hr)=>{glassW(x,hl[0]+4,hl[1]+40,.62*s/.62,.4,'#7A2A1E');x.fillStyle='#F4ECD8';x.save();x.translate(hr[0],hr[1]);x.rotate(.15);x.fillRect(-44,-60,88,104);x.fillStyle='#8A6A3A';x.fillRect(-44,-66,88,10);x.fillStyle='#5A5A5A';for(let i=0;i<4;i++)x.fillRect(-30,-38+i*20,Math.min(60,(o.write||1)*60*(1-i*.1)),3);x.restore()}},o))}
// flores (aroma floral) pairando
function flowers(x,cx,cy,a,t){fade(x,a,()=>{for(let i=0;i<5;i++){const ang=i*1.25+t*.3,fx=cx+Math.cos(ang)*90,fy=cy+Math.sin(ang)*40-i*14;x.save();x.translate(fx,fy);x.rotate(t*.4+i);x.fillStyle=['#E88AA8','#F2D27A','#D86A8A','#F3E6C8','#C86AB0'][i];for(let k=0;k<5;k++){x.rotate(1.2566);x.beginPath();x.ellipse(0,-14,8,14,0,0,7);x.fill()}x.fillStyle='#D4A24C';x.beginPath();x.arc(0,0,6,0,7);x.fill();x.restore()}})}
// estojo de madeira (Christie's): abre a tampa; garrafa, gêmea, taças e saca-rolhas de meteorito (pedra escura)
function woodCase(x,cx,cy,s,open,t){x.save();x.translate(cx,cy);x.scale(s,s);
 x.fillStyle='#4A2614';x.beginPath();x.roundRect(-420,-40,840,300,14);x.fill();x.fillStyle='#2A1408';x.fillRect(-396,-20,792,250);x.fillStyle='#6E1630';x.fillRect(-386,-10,772,230);
 // conteúdo
 spaceBottle(x,-280,200,.72,0);tagHang(x,-280,-30,'ESPAÇO',.7);spaceBottle(x,-150,200,.72,0);tagHang(x,-150,-30,'TERRA',.7);
 for(const gx of [10,110])glassW(x,gx,200,.62,0,'#6E1630');
 // saca-rolhas de meteorito: cabo de pedra escura com pintas metálicas + espiral
 x.save();x.translate(290,110);x.rotate(-.3);x.fillStyle='#2A2624';x.beginPath();x.ellipse(0,-40,80,30,0,0,7);x.fill();x.fillStyle='rgba(200,200,210,.6)';for(const [px,py] of [[-30,-46],[10,-34],[40,-50],[-50,-32]]){x.beginPath();x.arc(px,py,4,0,7);x.fill()}
 x.strokeStyle='#C9CDD2';x.lineWidth=6;x.beginPath();for(let k=0;k<6;k++){x.moveTo(-14,-10+k*18);x.quadraticCurveTo(14,-2+k*18,-14,8+k*18)}x.stroke();x.restore();
 // tampa (gira para trás)
 x.save();x.translate(0,-40);x.scale(1,Math.cos(open*1.35));x.fillStyle='#5A3018';x.beginPath();x.roundRect(-420,-150,840,150,14);x.fill();x.strokeStyle='#D4A24C';x.lineWidth=4;x.strokeRect(-380,-120,760,90);x.fillStyle='#D4A24C';x.font='900 40px Cinzel';x.textAlign='center';x.textBaseline='middle';x.fillText('PÉTRUS 2000',0,-75);x.restore();
 x.fillStyle='#D4A24C';x.fillRect(-20,-48,40,16);x.restore()}
// ponto de interrogação dourado grande
function bigQ(g,cx,cy,size,a){fade(g,a,()=>goldText(g,'?',cx,cy,size,'Cinzel',900))}
// tubinho com galho de videira (estaca) flutuando
function vineTube(x,cx,cy,s,rot,t){x.save();x.translate(cx,cy);x.rotate(rot+Math.sin(t*.7+cx)*.08);x.scale(s,s);x.fillStyle='rgba(220,235,245,.35)';x.strokeStyle='rgba(240,248,255,.85)';x.lineWidth=3;x.beginPath();x.roundRect(-22,-110,44,220,20);x.fill();x.stroke();
 x.strokeStyle='#6A4A2A';x.lineWidth=9;x.lineCap='round';x.beginPath();x.moveTo(0,90);x.lineTo(0,-80);x.stroke();x.fillStyle='#7A5A34';for(const yy of [-40,10,55]){x.beginPath();x.arc(0,yy,8,0,7);x.fill()}x.fillStyle='#6AA04A';x.beginPath();x.ellipse(8,-60,12,7,-.5,0,7);x.fill();
 x.fillStyle='#8E949C';x.fillRect(-24,-118,48,14);x.restore()}
// folha de videira: sick 0..1 (manchas do míldio)
function vineLeaf(x,cx,cy,s,sick=0){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle=sick>.5?'#7A8A3A':'#4E8A3A';x.beginPath();x.moveTo(0,120);
 const P=[[-40,90],[-120,60],[-100,10],[-150,-30],[-90,-50],[-80,-110],[-30,-80],[0,-140],[30,-80],[80,-110],[90,-50],[150,-30],[100,10],[120,60],[40,90]];for(const p of P)x.lineTo(p[0],p[1]);x.closePath();x.fill();
 x.strokeStyle='rgba(20,50,20,.6)';x.lineWidth=4;for(const p of [[-120,40],[-90,-90],[0,-130],[90,-90],[120,40]]){x.beginPath();x.moveTo(0,110);x.lineTo(p[0]*.85,p[1]*.85);x.stroke()}
 if(sick>0){const R=rng(5);for(let i=0;i<10;i++){x.fillStyle=`rgba(${200+R()*40|0},${190+R()*30|0},${90},${.8*sick})`;x.beginPath();x.ellipse(-90+R()*180,-90+R()*170,10+R()*18,8+R()*12,R()*3,0,7);x.fill()}
  x.fillStyle=`rgba(240,240,235,${.6*sick})`;for(let i=0;i<14;i++){x.beginPath();x.arc(-80+R()*160,-70+R()*150,4,0,7);x.fill()}}
 x.strokeStyle='#5A4A2A';x.lineWidth=7;x.beginPath();x.moveTo(0,110);x.lineTo(0,170);x.stroke();x.restore()}
// viveiro (estufa) com mesas de mudas
function nursery(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#3A4A3A');g.addColorStop(1,'#1E2A1E');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.strokeStyle='rgba(220,230,210,.35)';x.lineWidth=6;for(let k=-800;k<W+800;k+=200){x.beginPath();x.moveTo(k,-200);x.lineTo(k,760);x.stroke()}for(let y=0;y<760;y+=190){x.beginPath();x.moveTo(-900,y);x.lineTo(W+900,y);x.stroke()}
 x.fillStyle='rgba(255,240,200,.08)';x.fillRect(-900,-200,W+1800,960);x.fillStyle='#4A3424';x.fillRect(-900,760,W+1800,40);for(let k=-600;k<W+600;k+=110){x.fillStyle='#2A1A12';x.fillRect(k,700,70,60);x.fillStyle='#5A8A3A';x.beginPath();x.ellipse(k+35,680,30,22,0,0,7);x.fill()}
 x.fillStyle='#3A2A1E';x.fillRect(-900,800,W+1800,400)}
// viveirista: botas, avental verde, tesoura de poda no bolso; segura a muda com a raiz à mostra
const NURSE=CHX({cloth:'#E9DCC0',hood:'#C9BC9C',outfit:'apron',apron:'#3E6A3A',collar:'#E9DCC0',short:'#3A2A1E',beard:'#3A2A1E',beardT:'short',leg:'#4A3A2A',shoe:'#2A2A1E',skin:'#C99A74',hand:'#C99A74'});
function nurseryman(g,cx,base,s,t,o={}){return npc(g,cx,base,s,t,Object.assign({ch:NURSE,look:.35,lookY:.3,mouth:.5,brow:.55,hands:{l:[-40,200,140],r:[60,200,140]},
 hold:(x,hl,hr)=>{const mx=(hl[0]+hr[0])/2,my=(hl[1]+hr[1])/2;seedling(x,mx,my-10,.9*s/.62,o.glow||0,t);
  const y=base-505*s;x.save();x.translate(cx,y);x.scale(s,s);x.strokeStyle='#C9CDD2';x.lineWidth=5;x.beginPath();x.moveTo(70,250);x.lineTo(96,206);x.moveTo(84,250);x.lineTo(84,204);x.stroke();x.fillStyle='#C8213F';x.fillRect(64,250,30,26);x.restore()}},o))}
function seedling(x,cx,cy,s,glow=0,t=0){x.save();x.translate(cx,cy);x.scale(s,s);if(glow>0){const g=x.createRadialGradient(0,-60,10,0,-60,160);g.addColorStop(0,`rgba(242,210,122,${.55*glow})`);g.addColorStop(1,'rgba(242,210,122,0)');x.fillStyle=g;x.beginPath();x.arc(0,-60,160,0,7);x.fill()}
 x.strokeStyle='#C9A878';x.lineWidth=3;for(let i=0;i<7;i++){x.beginPath();x.moveTo(0,10);x.quadraticCurveTo(-30+i*10,40,-40+i*13,70+(i%3)*10);x.stroke()}x.fillStyle='#5A3A22';x.beginPath();x.ellipse(0,14,26,14,0,0,7);x.fill();
 x.strokeStyle='#6A4A2A';x.lineWidth=8;x.beginPath();x.moveTo(0,8);x.lineTo(0,-110);x.stroke();for(const [yy,sd] of [[-60,-1],[-95,1],[-120,-1]]){x.save();x.translate(0,yy);x.rotate(sd*.6);vineLeaf(x,sd*34,-10,.24,0);x.restore()}x.restore()}
// saquinho de sementes com a bandeira do Texas
function texasFlag(x,cx,cy,w){const h=w*.66;x.save();x.translate(cx-w/2,cy-h/2);x.fillStyle='#F4F0E8';x.fillRect(0,0,w,h/2);x.fillStyle='#C8213F';x.fillRect(0,h/2,w,h/2);x.fillStyle='#1E2E6A';x.fillRect(0,0,w/3,h);
 x.fillStyle='#F4F0E8';x.translate(w/6,h/2);x.beginPath();for(let i=0;i<5;i++){const a=-Math.PI/2+i*Math.PI*.8;x.lineTo(Math.cos(a)*h*.18,Math.sin(a)*h*.18)}x.closePath();x.fill();x.restore();x.save();x.strokeStyle=GOLD;x.lineWidth=2;x.strokeRect(cx-w/2,cy-h/2,w,h);x.restore()}
function seedBag(x,cx,cy,s,t){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#D9C49A';x.beginPath();x.moveTo(-80,-120);x.lineTo(80,-120);x.lineTo(92,110);x.quadraticCurveTo(0,124,-92,110);x.closePath();x.fill();x.strokeStyle='#8A6A3A';x.lineWidth=4;x.stroke();
 x.fillStyle='#B89A6A';x.beginPath();x.moveTo(-80,-120);x.lineTo(80,-120);x.lineTo(64,-140);x.lineTo(-64,-140);x.closePath();x.fill();texasFlag(x,0,-50,110);
 x.fillStyle='#5E1428';x.font='900 22px Cinzel';x.textAlign='center';x.fillText('SEMENTES',0,30);x.fillText('DE UVA',0,58);x.fillStyle='#3A2A1A';for(let i=0;i<6;i++){x.beginPath();x.ellipse(-120+i*12,118+(i%2)*6,6,9,.4,0,7);x.fill()}x.restore()}
// mini-cartão de vídeo anterior
function miniCard(g,cx,cy,txt,a){fade(g,a,()=>{g.fillStyle='rgba(20,6,10,.92)';g.beginPath();g.roundRect(cx-170,cy-60,340,120,14);g.fill();g.strokeStyle='#D4A24C';g.lineWidth=4;g.stroke();goldText(g,'VÍDEO',cx,cy-22,20,'Cinzel',700);goldText(g,txt,cx,cy+16,30)})}
