// ===== Vídeo 21 — cenários e personagens novos: acampamento do séc. XVII, mosqueteiro, corte do cano, gabinete georgiano + reverendo Henshall, restaurante de 1880 + garçom Wienke, Herbert Allen, clube, colecionador =====
const ARMS=(x,t)=>armsBar(x,t,{lamp:1350});
function camp17(x,t){let g=x.createLinearGradient(0,-300,0,700);g.addColorStop(0,'#14101E');g.addColorStop(1,'#5A2A2A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='#2A1A1A';x.beginPath();x.moveTo(-900,640);x.quadraticCurveTo(900,560,W+900,630);x.lineTo(W+900,1100);x.lineTo(-900,1100);x.fill();
 for(const [cx,sc] of [[1500,1],[260,.8]]){x.save();x.translate(cx,700);x.scale(sc,sc);x.fillStyle='#C9B488';x.beginPath();x.moveTo(-260,0);x.lineTo(0,-300);x.lineTo(260,0);x.closePath();x.fill();x.fillStyle='#3A2A1A';x.beginPath();x.moveTo(-50,0);x.lineTo(0,-200);x.lineTo(50,0);x.fill();x.restore()}
 // fogueira
 const fx=980,fy=760;x.fillStyle='#3A2414';x.fillRect(fx-80,fy,160,20);for(let i=0;i<5;i++){const h=60+Math.sin(t*8+i)*20;x.fillStyle=i%2?'#FFB45E':'#E8642A';x.beginPath();x.moveTo(fx-50+i*25,fy);x.quadraticCurveTo(fx-40+i*25,fy-h,fx-30+i*25+Math.sin(t*5+i)*6,fy-h-20);x.quadraticCurveTo(fx-20+i*25,fy-h/2,fx-10+i*25,fy);x.fill()}
 let lg=x.createRadialGradient(fx,fy-40,10,fx,fy-40,400);lg.addColorStop(0,'rgba(255,170,90,.35)');lg.addColorStop(1,'rgba(255,170,90,0)');x.fillStyle=lg;x.fillRect(fx-400,fy-440,800,800);
 // mosquetes em pé (ensarilhados)
 x.save();x.translate(560,760);for(const a of [-.25,0,.25]){x.save();x.rotate(a);musketGun(x,0,-200,.45,-Math.PI/2);x.restore()}x.restore()}
const MUSK=CHX({cloth:'#7A5A3A',hood:'#5A3E24',outfit:'shirt',collar:'#5A3E24',leg:'#3A2E22',shoe:'#2A1A10',short:'#3A2414',beard:'#3A2414',beardT:'goatee',skin:'#E2B890',hand:'#E2B890'});
// mosqueteiro: chapéu de aba larga com pluma, gola branca, bandoleira com frasquinhos, mosquete pela boca do cano
function musketeer(g,cx,base,s,t,o={}){return npc(g,cx,base,s,t,Object.assign({ch:MUSK,hat:'plume',ruff:1,bandolier:1,look:.35,lookY:.25,brow:.7,mouth:.2,hands:{l:[120,40,120],r:[150,-40,110]},
 hold:(x,hl,hr)=>{musketGun(x,hl[0]+20,hl[1]+150,.5,-Math.PI/2+.15);if(o.rod!==false)gunWorm(x,hr[0],hr[1],170,.5,Math.PI/2+.1)}},o))}
// corte do cano: bala e bucha presas; a espiral entra, fisga e puxa (u 0..1 entra · v 0..1 puxa)
function barrelCut(g,cx,cy,w,u,v,t){g.save();g.fillStyle='#3A3A42';g.fillRect(cx-w/2,cy-70,w,140);g.fillStyle='#14141A';g.fillRect(cx-w/2,cy-44,w,88);g.fillStyle='#5A5A62';g.fillRect(cx-w/2,cy-70,w,10);
 const wadX=cx+w*.2-v*w*.75;g.fillStyle='#C9B488';g.fillRect(wadX-30,cy-42,40,84);g.fillStyle='#8A8A92';g.beginPath();g.arc(wadX+38,cy,30,0,7);g.fill();
 const tip=lerp(cx-w/2-200,wadX-10,u);g.save();g.translate(tip,cy);g.rotate(Math.PI);gunWorm(g,0,0,300,1.1,0);g.restore();g.restore()}
function oldDarkBottle(g,cx,base,s,cork=1){oldBottle(g,cx,base,s,'#141A14');if(cork){g.fillStyle='#C99A5B';g.fillRect(cx-10*s,base-262*s,20*s,30*s)}}
function miniCard(g,cx,cy,l1,l2,a=1){fade(g,a,()=>{g.fillStyle='rgba(20,6,10,.9)';g.beginPath();g.roundRect(cx-200,cy-120,400,240,16);g.fill();g.strokeStyle='#D4A24C';g.lineWidth=5;g.stroke();g.fillStyle='#B0122E';g.beginPath();g.moveTo(cx-30,cy-50);g.lineTo(cx+36,cy-14);g.lineTo(cx-30,cy+22);g.closePath();g.fill();goldText(g,l1,cx,cy+60,28,'Cinzel',900);if(l2)goldText(g,l2,cx,cy+94,20,'Cinzel',700)})}
// gabinete georgiano: lambri, estante, janela, escrivaninha
function georgian(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1A1410');g.addColorStop(1,'#3A2A1E');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='#4A3424';for(let i=0;i<8;i++)x.fillRect(-60+i*270,520,250,300);x.fillStyle='#2A1C12';for(let i=0;i<4;i++)x.fillRect(1240,140+i*110,520,14);
 const r=rng(6);for(let i=0;i<4;i++)for(let k=0;k<12;k++){x.fillStyle=['#5E1428','#2A3A5A','#3A4A2A','#6A4A2A'][Math.floor(r()*4)];x.fillRect(1250+k*42,140+i*110-70,34,70)}
 x.fillStyle='#22283A';x.fillRect(240,120,360,420);x.strokeStyle='#5A4030';x.lineWidth=12;x.strokeRect(240,120,360,420);x.beginPath();x.moveTo(420,120);x.lineTo(420,540);x.moveTo(240,330);x.lineTo(600,330);x.stroke();
 candle(x,780,820,120,t)}
const HENS=CHX({cloth:'#16141A',hood:'#0C0A10',leg:'#16141A',skin:'#EAC8A4',hand:'#EAC8A4'});
function henshall(g,cx,base,s,t,o={}){return npc(g,cx,base,s,t,Object.assign({ch:HENS,wig:'#EDE8E0',bands:1,specs:1,look:.3,mouth:.6,brow:.5,hands:{l:[-60,140,130],r:[160,40,100]},
 hold:(x,hl,hr)=>{scroll(x,hl[0]+10,hl[1]-10,180,130,'','');x.fillStyle='#5E1428';x.font='900 20px Cinzel';x.textAlign='center';x.fillText('PATENTE',hl[0]+10,hl[1]-20);x.fillText('1795',hl[0]+10,hl[1]+8);x.fillStyle='#B0122E';x.beginPath();x.arc(hl[0]+70,hl[1]+40,14,0,7);x.fill();
  tScrew(x,hr[0],hr[1],.42,0,0)}},o))}
// botão de Henshall: disco sobre a espiral; v = gira, a rolha solta
function buttonClose(g,cx,cy,s,t,v){g.save();g.translate(cx,cy);g.scale(s,s);
 g.fillStyle='#1E3A31';g.beginPath();g.moveTo(-90,300);g.lineTo(-90,40);g.lineTo(90,40);g.lineTo(90,300);g.fill();g.fillStyle='#C99A5B';g.fillRect(-60,40-v*60,120,150);
 g.save();g.translate(0,-v*60);g.fillStyle='#C9CDD2';g.fillRect(-8,-140,16,120);g.fillStyle='#D4A24C';g.beginPath();g.ellipse(0,32,74,16,0,0,7);g.fill();g.strokeStyle='#8A6A2E';g.lineWidth=4;g.stroke();
 g.fillStyle='#6A4A2A';g.beginPath();g.roundRect(-150,-180,300,50,24);g.fill();
 const sp=t*4*v;g.strokeStyle='rgba(255,215,120,.9)';g.lineWidth=5;g.beginPath();g.ellipse(0,-150,190,40,0,sp,sp+2.2);g.stroke();g.restore();g.restore()}
// restaurante alemão de 1880
function rest1880(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#2A1410');g.addColorStop(1,'#4A2A1E');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='#3A1E12';for(let i=0;i<10;i++)x.fillRect(-100+i*220,0,16,620);x.fillStyle='#5A3220';x.fillRect(-900,600,W+1800,30);
 for(const lx of [500,1420]){x.strokeStyle='#D4A24C';x.lineWidth=4;x.beginPath();x.moveTo(lx,-100);x.lineTo(lx,140);x.stroke();x.fillStyle='#D4A24C';x.beginPath();x.ellipse(lx,160,90,24,0,0,7);x.fill();for(let k=-2;k<=2;k++){x.fillStyle='#FFE0A0';x.beginPath();x.arc(lx+k*40,140,8,0,7);x.fill()}
  let lg=x.createRadialGradient(lx,160,10,lx,160,360);lg.addColorStop(0,'rgba(255,210,140,.3)');lg.addColorStop(1,'rgba(255,210,140,0)');x.fillStyle=lg;x.fillRect(lx-360,-200,720,760)}
 for(const tx of [300,1650]){x.fillStyle='#F4F0E8';x.fillRect(tx-170,700,340,30);x.fillStyle='#E0D8C8';x.fillRect(tx-170,730,340,120)}}
const WIENKE=CHX({cloth:'#F4F0E8',hood:'#D9D2C4',outfit:'vest',vest:'#1E1A22',collar:'#F4F0E8',bow:'#1E1A22',apron:'#F4F0E8',short:'#4A3020',beard:'#4A3020',beardT:'mustache',leg:'#1E1A22',skin:'#E6BF98',hand:'#E6BF98'});
function wienke(g,cx,base,s,t,o={}){return npc(g,cx,base,s,t,Object.assign({ch:WIENKE,look:.35,mouth:.65,brow:.5,hands:{l:[-95,205,95],r:[160,40,100]},
 back:(x,p)=>{x.save();x.translate(p.x,p.y);x.scale(p.s,p.s);x.fillStyle='#F4F0E8';x.fillRect(-TW/2+10,TH-40,TW-20,240);x.restore()},
 hold:(x,hl,hr)=>waiterKey(x,hr[0],hr[1]-10,.5,-.3)},o))}
const ALLEN=CHX({cloth:'#C8B8A0',hood:'#A89878',outfit:'blazer',shirt:'#E8DCC0',collar:'#E8DCC0',tie:'#8A4A1E',short:'#9A9A9A',temples:'#C0C0C0',leg:'#5A4A3A',skin:'#E2B890',hand:'#E2B890'});
function screwpull(g,cx,cy,s){g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle='#8E1B3A';g.beginPath();g.moveTo(-50,-120);g.lineTo(50,-120);g.lineTo(36,60);g.lineTo(-36,60);g.closePath();g.fill();g.fillStyle='#6E0F24';g.fillRect(-10,-110,20,160);
 g.fillStyle='#2A2A30';g.beginPath();g.roundRect(-70,-170,140,40,18);g.fill();g.restore();g.save();g.translate(cx,cy+20*s);g.rotate(Math.PI/2);helix(g,180*s,14*s,7,5*s,'#4A4A52','#2A2A30');g.restore()}
function allen(g,cx,base,s,t,o={}){return npc(g,cx,base,s,t,Object.assign({ch:ALLEN,thick:1,look:.3,mouth:.6,brow:.5,hands:{l:[-95,205,95],r:[160,40,100]},hold:(x,hl,hr)=>screwpull(x,hr[0],hr[1]-10,.6)},o))}
function pedestal(g,cx,base,label){g.fillStyle='#E9E4D8';g.fillRect(cx-110,base-320,220,320);g.fillStyle='#D4CCBC';g.fillRect(cx-130,base-340,260,30);goldText(g,label,cx,base-200,40,'Cinzel',900)}
// saca-rolhas de alavanca: desce, sobe, rolha sai (u 0..1)
function leverScrew(g,cx,base,s,u){g.save();g.translate(cx,base);g.scale(s,s);oldDarkBottle(g,0,0,1,0);const up=u<.5?0:(u-.5)*2,cork=up*90;
 g.fillStyle='#C99A5B';g.fillRect(-12,-262-cork,24,40);g.fillStyle='#2A2A30';g.beginPath();g.roundRect(-40,-330,80,90,10);g.fill();
 g.save();g.translate(30,-320);g.rotate(lerp(-1.2,.2,u<.5?u*2:1-(u-.5)*2));g.fillStyle='#8E1B3A';g.beginPath();g.roundRect(-10,-10,220,24,12);g.fill();g.restore();g.restore()}
// asas do saca-rolhas de borboleta: up 0..1
function wingAnim(g,cx,cy,s,up){g.save();g.translate(cx,cy);g.scale(s,s);oldDarkBottle(g,0,320,1,0);g.fillStyle='#C99A5B';g.fillRect(-12,62-up*60,24,40);
 g.fillStyle='#C9CDD2';g.fillRect(-26,-40-up*60,52,120);g.fillRect(-8,-110-up*60,16,80);g.beginPath();g.ellipse(0,-120-up*60,40,14,0,0,7);g.fill();
 for(const sd of [-1,1]){g.save();g.translate(sd*24,-10);g.rotate(sd*lerp(2.4,.6,up));g.fillStyle='#B8BCC2';g.beginPath();g.roundRect(-8,-8,140,16,8);g.fill();g.beginPath();g.ellipse(140,0,24,16,0,0,7);g.fill();g.restore()}g.restore()}
function clubTable(g,cx,cy,n,a=1){fade(g,a,()=>{g.fillStyle='#4A2414';g.beginPath();g.ellipse(cx,cy,420,150,0,0,7);g.fill();g.strokeStyle='#D4A24C';g.lineWidth=5;g.stroke();for(let i=0;i<n;i++){const an=i/n*6.283;g.fillStyle='#8E1B3A';g.beginPath();g.arc(cx+Math.cos(an)*470,cy+Math.sin(an)*190,16,0,7);g.fill()}})}
const COLL=CHX({cloth:'#5A6A4A',hood:'#3A4A2E',outfit:'turtle',short:'#6A6A6A',temples:'#9A9A9A',beard:'#8A8A8A',beardT:'short',leg:'#3A3A44',skin:'#E2B890',hand:'#E2B890'});
function collector(g,cx,base,s,t){return npc(g,cx,base,s,t,{ch:COLL,specs:1,face:1,look:.5,lookY:-.3,mouth:.6,brow:.8,hands:{l:[-95,205,95],r:[170,30,100]},hold:(x,hl,hr)=>{x.save();x.strokeStyle='#D4A24C';x.lineWidth=8;x.beginPath();x.arc(hr[0]+40,hr[1]-40,40,0,7);x.stroke();x.lineWidth=12;x.beginPath();x.moveTo(hr[0]+10,hr[1]-10);x.lineTo(hr[0],hr[1]);x.stroke();x.restore()}})}
const PT21=[{pts:[[.25,.05],[.75,.08],[.7,.4],[.78,.7],[.62,.95],[.3,.9],[.22,.6],[.18,.3]]}];
