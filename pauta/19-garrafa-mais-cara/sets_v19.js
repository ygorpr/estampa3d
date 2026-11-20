// ===== Vídeo 19 — cenários e personagens novos: vinhedo na colina, campos de futebol, Príncipe de Conti, Pompadour, sala de leilão + leiloeiro, cozinha do falsificador, grades, cérebro, taças vendadas =====
const VAULT=(x,t)=>vaultRoom(x,t,{dx:1590,dy:300,dr:220,spots:[1140,1590]});
// vinhedo na colina da Borgonha, com muro de pedra e cruz de pedra (as "climats")
function burgundyHill(x,t){let g=x.createLinearGradient(0,-300,0,700);g.addColorStop(0,'#2A0B24');g.addColorStop(.6,'#8A3A3A');g.addColorStop(1,'#E8A06E');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='#4A3A2A';x.beginPath();x.moveTo(-900,560);x.quadraticCurveTo(700,300,W+900,520);x.lineTo(W+900,1100);x.lineTo(-900,1100);x.fill();x.save();x.clip();
 for(let k=0;k<14;k++){x.strokeStyle=k%2?'#3E6A2E':'#4A7A34';x.lineWidth=14;x.setLineDash([20,12]);x.beginPath();x.moveTo(-900,600+k*38);x.quadraticCurveTo(700,350+k*40,W+900,560+k*38);x.stroke()}x.setLineDash([]);x.restore();
 x.fillStyle='#8A7A66';x.fillRect(-900,900,W+1800,40);x.fillStyle='#6A5A48';for(let i=0;i<40;i++)x.fillRect(-900+i*80,900,40,20);
 x.fillStyle='#8A8278';x.fillRect(1470,700,20,120);x.fillRect(1440,720,80,18)}
// campo de futebol (contorno) — "uns dois campos e meio"
function pitch(g,cx,cy,w,h,a=1){fade(g,a,()=>{g.save();g.fillStyle='rgba(60,120,60,.55)';g.fillRect(cx-w/2,cy-h/2,w,h);g.strokeStyle='rgba(255,255,255,.85)';g.lineWidth=4;g.strokeRect(cx-w/2,cy-h/2,w,h);g.beginPath();g.moveTo(cx,cy-h/2);g.lineTo(cx,cy+h/2);g.stroke();g.beginPath();g.arc(cx,cy,h*.18,0,7);g.stroke();
 g.strokeRect(cx-w/2,cy-h*.25,w*.14,h*.5);g.strokeRect(cx+w/2-w*.14,cy-h*.25,w*.14,h*.5);g.restore()})}
const CONTI=CHX({cloth:'#2A3A6A',hood:'#18244A',outfit:'blazer',shirt:'#F4F0E8',collar:'#F4F0E8',btn:'#D4A24C',leg:'#F4F0E8',shoe:'#1A1418',skin:'#EAC8A4',hand:'#EAC8A4'});
const conti=(x,cx,base,s,t,o={})=>npc(x,cx,base,s,t,Object.assign({ch:CONTI,wig:'#EDE8E0',queue:1,ruff:1,frogs:1,look:.3,mouth:.7,brow:.4},o));
const POMPA=CHX({cloth:'#C8A0B8',hood:'#A87898',hair:'#D9C9B0',skin:'#F0D0B4',hand:'#F0D0B4'});
const pompadour=(x,cx,base,s,t,o={})=>npc(x,cx,base,s,t,Object.assign({ch:POMPA,skirt:'#B888A8',look:.3,mouth:.55,brow:.6,shawl:'rgba(244,240,232,.7)',hands:{l:[-90,200,95],r:[150,40,100]},
 hold:(x,hl,hr)=>{x.save();x.translate(hr[0],hr[1]);for(let i=0;i<9;i++){x.save();x.rotate(-1.2+i*.22);x.fillStyle=i%2?'#F4F0E8':'#E9D2E0';x.fillRect(0,-6,90,12);x.restore()}x.restore()}},o));
const AUCT=CHX({cloth:'#16141C',hood:'#0C0A10',outfit:'blazer',shirt:'#F4F0E8',collar:'#F4F0E8',bow:'#1A1418',short:'#6A6A6A',temples:'#9A9A9A',leg:'#16141C',skin:'#E6BF98',hand:'#E6BF98'});
const auctioneer=(x,cx,base,s,t,o={})=>npc(x,cx,base,s,t,Object.assign({ch:AUCT,specs:1,look:-.3,mouth:.6,brow:.8},o));
const FAKER=CHX({cloth:'#5A6A7A',hood:'#3A4A5A',outfit:'apron',apron:'#C9BCA0',collar:'#F4F0E8',short:'#1A1410',leg:'#2A2A30',skin:'#D9B48E',hand:'#D9B48E'});
const faker=(x,cx,base,s,t,o={})=>npc(x,cx,base,s,t,Object.assign({ch:FAKER,thick:1,look:.4,lookY:.3,mouth:-.2,brow:-.2,sad:-.3},o));
// sala de leilão: púlpito, painel de lances, plateia com plaquinhas
function auctionRoom(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1A070D');g.addColorStop(1,'#3A1220');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 for(let i=0;i<5;i++){x.fillStyle='#4A1A26';x.fillRect(80+i*380,80,280,420);x.strokeStyle='#D4A24C';x.lineWidth=4;x.strokeRect(96+i*380,96,248,388)}
 x.fillStyle='#2A0A12';x.fillRect(-900,820,W+1800,400)}
function audience(g,y,t,raise=0){for(let i=0;i<9;i++){const cx=140+i*210,up=(i==3||i==6)?raise:0;g.fillStyle='#120408';g.beginPath();g.arc(cx,y-70,46,0,7);g.fill();g.beginPath();g.roundRect(cx-70,y-30,140,140,30);g.fill();
 if(up>0){g.strokeStyle='#120408';g.lineWidth=12;g.beginPath();g.moveTo(cx+40,y);g.lineTo(cx+70,y-130*up);g.stroke();g.fillStyle='#E9DCC0';g.fillRect(cx+40,y-200*up,60,50);g.fillStyle='#5E1428';g.font='900 26px Cinzel';g.textAlign='center';g.fillText(String(10+i),cx+70,y-165*up)}}}
function podium(g,cx,base){g.fillStyle='#4A2414';g.beginPath();g.moveTo(cx-120,base);g.lineTo(cx-100,base-260);g.lineTo(cx+100,base-260);g.lineTo(cx+120,base);g.closePath();g.fill();g.strokeStyle='#D4A24C';g.lineWidth=5;g.stroke();g.fillStyle='#D4A24C';g.beginPath();g.arc(cx,base-150,40,0,7);g.fill()}
function bidBoard(g,cx,cy,val,a=1){fade(g,a,()=>{g.fillStyle='#120408';g.beginPath();g.roundRect(cx-300,cy-90,600,180,18);g.fill();g.strokeStyle='#D4A24C';g.lineWidth=6;g.stroke();goldText(g,val,cx,cy+6,82,'Cinzel',900)})}
// cozinha do falsificador
function fakerKitchen(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1E1418');g.addColorStop(1,'#3A2A26');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='#E9E2D2';for(let i=0;i<14;i++)for(let j=0;j<5;j++){x.fillStyle=(i+j)%2?'#D9D2C2':'#E9E2D2';x.fillRect(-100+i*150,120+j*90,148,88)}
 x.fillStyle='#5A3A22';x.fillRect(-900,700,W+1800,40);x.fillStyle='#3A2414';x.fillRect(-900,740,W+1800,400);
 let lg=x.createRadialGradient(960,200,10,960,200,500);lg.addColorStop(0,'rgba(255,220,150,.35)');lg.addColorStop(1,'rgba(255,220,150,0)');x.fillStyle=lg;x.fillRect(400,-100,1100,800)}
function fakeLabels(g,cx,y){for(let i=0;i<5;i++){g.save();g.translate(cx+i*90-180,y+(i%2)*10);g.rotate((i-2)*.1);g.fillStyle='#E9DCC0';g.fillRect(-36,-48,72,96);g.strokeStyle='#D4A24C';g.lineWidth=3;g.strokeRect(-30,-42,60,84);g.fillStyle='#5E1428';g.font='900 12px Cinzel';g.textAlign='center';g.fillText(['1945','1945','1959','1962','1971'][i],0,4);g.restore()}
 for(let i=0;i<4;i++){bigCork(g,cx+260+i*40,y+20,.28)}}
function bars(g,a=1){fade(g,a,()=>{g.fillStyle='#2A2A30';for(let i=0;i<11;i++)g.fillRect(140+i*170,250,26,620);g.fillRect(100,260,1720,24);g.fillRect(100,840,1720,24)})}
function brain(g,cx,cy,s,glow){g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle='#E8A8B0';g.beginPath();g.ellipse(-40,0,90,80,0,0,7);g.ellipse(40,0,90,80,0,0,7);g.fill();g.strokeStyle='#B87080';g.lineWidth=6;
 for(let i=0;i<6;i++){g.beginPath();g.arc(-60+i*24,-10+(i%2)*20,26,.5,2.6);g.stroke()}g.beginPath();g.moveTo(0,-76);g.lineTo(0,76);g.stroke();
 if(glow>0){let gr=g.createRadialGradient(0,0,10,0,0,180);gr.addColorStop(0,`rgba(255,220,120,${.6*glow})`);gr.addColorStop(1,'rgba(255,220,120,0)');g.fillStyle=gr;g.beginPath();g.arc(0,0,180,0,7);g.fill()}g.restore()}
function blindGlass(g,cx,base,s,col){glassW(g,cx,base,s,.42,col);g.save();g.fillStyle='#120408';g.fillRect(cx-60*s,base-150*s,120*s,30*s);g.restore()}
function jeffersonFrame(g,cx,cy,s){g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle='#D4A24C';g.fillRect(-120,-150,240,300);g.fillStyle='#2A1A14';g.fillRect(-100,-130,200,260);
 g.fillStyle='#E6BF98';g.beginPath();g.arc(0,-30,52,0,7);g.fill();g.fillStyle='#D9C9B0';g.beginPath();g.arc(0,-48,56,Math.PI,0);g.fill();g.fillStyle='#3A2A22';g.beginPath();g.moveTo(-90,130);g.quadraticCurveTo(0,10,90,130);g.fill();g.fillStyle='#F4F0E8';g.beginPath();g.moveTo(-20,30);g.lineTo(20,30);g.lineTo(0,70);g.fill();g.restore()}
function engravedBottle(g,cx,base,s){oldBottle(g,cx,base,s,'#141A14');g.save();g.fillStyle='rgba(240,236,224,.85)';g.font=`italic 600 ${34*s}px Cormorant`;g.textAlign='center';g.fillText('Th.J.',cx,base-90*s);g.fillText('1787',cx,base-55*s);g.restore()}
function bigBottle(g,cx,base,s){g.save();g.translate(cx,base);g.scale(s,s);g.fillStyle='#14100C';g.beginPath();g.moveTo(-70,0);g.lineTo(-70,-300);g.quadraticCurveTo(-70,-360,-24,-380);g.lineTo(-24,-450);g.lineTo(24,-450);g.lineTo(24,-380);g.quadraticCurveTo(70,-360,70,-300);g.lineTo(70,0);g.closePath();g.fill();
 g.fillStyle='#E9DCC0';g.fillRect(-56,-260,112,140);g.fillStyle='#5E1428';g.font='900 22px Cinzel';g.textAlign='center';g.fillText('6 L',0,-180);g.restore()}
