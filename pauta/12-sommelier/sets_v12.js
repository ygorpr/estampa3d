// desenhos do vídeo 12 — "De onde vem a palavra sommelier?": castelo do rei da França, adega do castelo, pátio,
// Grécia, burro de carga (sela + cestos), oficial medieval, mordomo inglês, cama box, garrafas douradas.
const hash=(a,b)=>{const s=Math.sin(a*12.9898+b*78.233)*43758.5453;return s-Math.floor(s)};
function fleur(x,cx,cy,s,col=GOLD){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle=col;x.beginPath();x.moveTo(0,-60);x.quadraticCurveTo(22,-30,10,0);x.lineTo(-10,0);x.quadraticCurveTo(-22,-30,0,-60);x.fill();
 for(const k of [-1,1]){x.beginPath();x.moveTo(k*8,-2);x.quadraticCurveTo(k*50,-40,k*44,-6);x.quadraticCurveTo(k*40,12,k*14,8);x.closePath();x.fill()}
 x.fillRect(-26,6,52,10);x.beginPath();x.moveTo(-8,16);x.lineTo(8,16);x.lineTo(0,42);x.closePath();x.fill();for(const k of [-1,1]){x.beginPath();x.moveTo(k*6,16);x.quadraticCurveTo(k*30,22,k*26,40);x.quadraticCurveTo(k*16,28,k*4,20);x.fill()}x.restore()}
function stoneWall(x,x0,y0,x1,y1,base='#2E2226'){x.fillStyle=base;x.fillRect(x0,y0,x1-x0,y1-y0);const bh=64,bw=150;
 for(let r=0,y=y0;y<y1;r++,y+=bh)for(let c=-1,xx=x0-(r%2)*bw/2;xx<x1;c++,xx+=bw){const h=hash(r,c+40);x.fillStyle=`rgba(${h>.5?255:0},${h>.5?220:0},${h>.5?190:0},${.03+h*.05})`;x.fillRect(xx+3,y+3,bw-6,bh-6)}
 x.strokeStyle='rgba(0,0,0,.35)';x.lineWidth=4;for(let r=0,y=y0;y<y1;r++,y+=bh){x.beginPath();x.moveTo(x0,y);x.lineTo(x1,y);x.stroke();for(let xx=x0-(r%2)*bw/2;xx<x1;xx+=bw){x.beginPath();x.moveTo(xx,y);x.lineTo(xx,y+bh);x.stroke()}}}
function torch(x,cx,cy,t){let g=x.createRadialGradient(cx,cy-40,6,cx,cy-40,300);g.addColorStop(0,'rgba(255,170,80,.5)');g.addColorStop(1,'rgba(255,170,80,0)');x.fillStyle=g;x.fillRect(cx-300,cy-340,600,600);
 x.fillStyle='#2A2024';x.fillRect(cx-30,cy+40,60,14);x.fillRect(cx-8,cy+10,16,40);x.fillStyle='#5A3A22';x.beginPath();x.moveTo(cx-22,cy-14);x.lineTo(cx+22,cy-14);x.lineTo(cx+10,cy+40);x.lineTo(cx-10,cy+40);x.closePath();x.fill();
 x.fillStyle='#3A2A20';x.fillRect(cx-24,cy-20,48,10);flame(x,cx,cy-20,2.2,t);flame(x,cx-8,cy-22,1.3,t+.7);flame(x,cx+9,cy-21,1.2,t+1.3)}
function gothicWindow(x,cx,top,w,h,t){x.save();x.fillStyle='#1A1216';x.beginPath();x.moveTo(cx-w/2-22,top+h+22);x.lineTo(cx-w/2-22,top+w*.6);x.quadraticCurveTo(cx-w/2-22,top-30,cx,top-60);x.quadraticCurveTo(cx+w/2+22,top-30,cx+w/2+22,top+w*.6);x.lineTo(cx+w/2+22,top+h+22);x.closePath();x.fill();
 x.beginPath();x.moveTo(cx-w/2,top+h);x.lineTo(cx-w/2,top+w*.6);x.quadraticCurveTo(cx-w/2,top-6,cx,top-34);x.quadraticCurveTo(cx+w/2,top-6,cx+w/2,top+w*.6);x.lineTo(cx+w/2,top+h);x.closePath();
 const g=x.createLinearGradient(0,top-30,0,top+h);g.addColorStop(0,'#1E2E5A');g.addColorStop(1,'#0C1430');x.fillStyle=g;x.fill();x.clip();
 x.fillStyle='rgba(240,240,220,.85)';x.beginPath();x.arc(cx+w*.18,top+60,16,0,7);x.fill();x.fillStyle='rgba(255,255,255,.5)';for(let i=0;i<6;i++){x.fillRect(cx-w/2+hash(i,3)*w,top+hash(i,7)*h*.6,3,3)}
 x.strokeStyle='#1A1216';x.lineWidth=10;x.beginPath();x.moveTo(cx,top-40);x.lineTo(cx,top+h);x.moveTo(cx-w/2,top+h*.45);x.lineTo(cx+w/2,top+h*.45);x.stroke();x.restore();
 x.fillStyle='#3A2C30';x.fillRect(cx-w/2-36,top+h+18,w+72,20)}
function tapestry(x,cx,top,w,h,t,col='#1F2A5A'){const sw=Math.sin(t*.8+cx)*3;x.save();x.fillStyle='#5A3A22';x.fillRect(cx-w/2-30,top-14,w+60,14);x.fillStyle=GOLD;x.beginPath();x.arc(cx-w/2-30,top-7,10,0,7);x.arc(cx+w/2+30,top-7,10,0,7);x.fill();
 x.fillStyle=col;x.beginPath();x.moveTo(cx-w/2,top);x.lineTo(cx+w/2,top);x.lineTo(cx+w/2+sw,top+h);x.lineTo(cx,top+h+50);x.lineTo(cx-w/2+sw,top+h);x.closePath();x.fill();
 x.strokeStyle=GOLD;x.lineWidth=6;x.beginPath();x.moveTo(cx-w/2+16,top+14);x.lineTo(cx+w/2-16,top+14);x.lineTo(cx+w/2-16+sw,top+h-8);x.lineTo(cx,top+h+32);x.lineTo(cx-w/2+16+sw,top+h-8);x.closePath();x.stroke();
 for(let r=0;r<3;r++)for(let c=0;c<2;c++)fleur(x,cx-w/4+c*w/2+sw*.5,top+80+r*(h-60)/3,.55,'#D4A24C');x.fillStyle='rgba(0,0,0,.18)';x.fillRect(cx-w/2,top,18,h);x.restore()}
function castleHall(x,t){stoneWall(x,-900,-600,W+900,830,'#2C2024');let g=x.createLinearGradient(0,-300,0,830);g.addColorStop(0,'rgba(10,4,8,.55)');g.addColorStop(1,'rgba(10,4,8,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1430);
 gothicWindow(x,170,120,170,380,t);gothicWindow(x,1750,120,170,380,t);tapestry(x,600,90,250,440,t);tapestry(x,1320,90,250,440,t,'#5E1428');
 torch(x,380,360,t);torch(x,1540,360,t);x.fillStyle='#1E1418';x.fillRect(-900,820,W+1800,400);x.strokeStyle='rgba(0,0,0,.4)';x.lineWidth=3;for(let i=-8;i<26;i++){x.beginPath();x.moveTo(i*120,820);x.lineTo(i*120-(i*120-960)*.5,1100);x.stroke()}
 x.fillStyle='#3A2C30';x.fillRect(-900,812,W+1800,12)}
function castleTable(f){let g=f.createLinearGradient(0,800,0,1100);g.addColorStop(0,'#6A3E20');g.addColorStop(.07,'#4A2A16');g.addColorStop(1,'#1A0C06');f.fillStyle=g;f.fillRect(-900,800,W+1800,600);
 f.fillStyle='rgba(0,0,0,.22)';for(let i=-6;i<24;i++)f.fillRect(i*170,812,4,300);f.fillStyle='rgba(255,210,150,.4)';f.fillRect(-900,800,W+1800,4);f.fillStyle='#2A160C';f.fillRect(-900,868,W+1800,10)}
function castleCellar(x,t){x.fillStyle='#160C0E';x.fillRect(-900,-600,W+1800,1900);
 for(const [cx,w,top,k] of [[960,1500,-40,1],[960,1000,140,.8],[960,640,260,.62]]){x.fillStyle=`rgb(${Math.round(52*k)},${Math.round(38*k)},${Math.round(40*k)})`;x.beginPath();x.moveTo(cx-w/2,830);x.lineTo(cx-w/2,top+w*.3);x.quadraticCurveTo(cx-w/2,top,cx,top-w*.05);x.quadraticCurveTo(cx+w/2,top,cx+w/2,top+w*.3);x.lineTo(cx+w/2,830);
  x.lineTo(cx+w/2-50,830);x.lineTo(cx+w/2-50,top+w*.32);x.quadraticCurveTo(cx+w/2-50,top+40,cx,top+40-w*.05);x.quadraticCurveTo(cx-w/2+50,top+40,cx-w/2+50,top+w*.32);x.lineTo(cx-w/2+50,830);x.closePath();x.fill();
  x.strokeStyle='rgba(0,0,0,.35)';x.lineWidth=3;for(let a=0;a<14;a++){const u=a/13;x.beginPath();const px=cx-w/2+25+u*(w-50);x.moveTo(px,top+20+Math.pow(Math.abs(u-.5)*2,2)*w*.3-w*.05*(1-Math.pow(Math.abs(u-.5)*2,2)));x.lineTo(px,top+40);x.stroke()}}
 stoneWall(x,-900,-600,-60,830,'#2A1E20');stoneWall(x,1980,-600,W+900,830,'#2A1E20');
 rack(x,-40,250,300,520);rack(x,1660,250,300,520);for(const [bx,sc] of [[420,.75],[1500,.75],[640,.5],[1280,.5]])barrelSide(x,bx,830,sc,.95);
 x.fillStyle='#22161A';x.fillRect(-900,826,W+1800,400);torch(x,300,330,t);torch(x,1620,330,t);
 const g=x.createRadialGradient(960,520,20,960,520,700);g.addColorStop(0,'rgba(255,170,90,.16)');g.addColorStop(1,'rgba(255,170,90,0)');x.fillStyle=g;x.fillRect(0,0,W,H)}
function courtyard(x,t){let g=x.createLinearGradient(0,-300,0,700);g.addColorStop(0,'#1A1030');g.addColorStop(.6,'#5A2A3A');g.addColorStop(1,'#C8704A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1500);
 x.fillStyle='rgba(255,230,190,.8)';x.beginPath();x.arc(1560,180,40,0,7);x.fill();x.fillStyle='#3A2032';x.beginPath();x.moveTo(-900,640);x.quadraticCurveTo(300,520,900,600);x.quadraticCurveTo(1500,660,W+900,560);x.lineTo(W+900,900);x.lineTo(-900,900);x.fill();
 castleSil(x,420,600,1);x.fillStyle='#4A3024';x.fillRect(-900,760,W+1800,500);g=x.createLinearGradient(0,760,0,1000);g.addColorStop(0,'#8A6040');g.addColorStop(1,'#3A2418');x.fillStyle=g;x.beginPath();x.moveTo(-900,800);x.lineTo(W+900,780);x.lineTo(W+900,1100);x.lineTo(-900,1100);x.fill();
 x.fillStyle='rgba(0,0,0,.18)';for(let i=0;i<40;i++){x.beginPath();x.ellipse(hash(i,1)*2400-240,820+hash(i,2)*240,10+hash(i,3)*16,5,0,0,7);x.fill()}}
function castleSil(x,cx,base,s){x.save();x.translate(cx,base);x.scale(s,s);const st='#4A3A42',sl='#2A3456';x.fillStyle=st;x.fillRect(-300,-180,600,180);for(let i=-300;i<300;i+=40)x.fillRect(i,-205,24,30);
 for(const [dx,h,r] of [[-300,320,60],[300,320,60],[0,420,80]]){x.fillStyle=st;x.fillRect(dx-r,-h,r*2,h);x.fillStyle=sl;x.beginPath();x.moveTo(dx-r-12,-h);x.lineTo(dx,-h-r*2.2);x.lineTo(dx+r+12,-h);x.closePath();x.fill();x.fillStyle=GOLD;x.fillRect(dx-3,-h-r*2.2-30,6,30);
  x.fillStyle='rgba(255,200,120,.75)';x.beginPath();x.roundRect(dx-12,-h+60,24,40,12);x.fill()}x.fillStyle='#1A1014';x.beginPath();x.moveTo(-60,0);x.lineTo(-60,-90);x.quadraticCurveTo(0,-150,60,-90);x.lineTo(60,0);x.fill();
 x.fillStyle='rgba(255,200,120,.6)';for(const [wx,wy] of [[-200,-110],[-130,-110],[130,-110],[200,-110]])x.fillRect(wx-9,wy-18,18,36);x.restore()}
function greece(x,t){let g=x.createLinearGradient(0,-300,0,800);g.addColorStop(0,'#2A2050');g.addColorStop(.55,'#B8604A');g.addColorStop(1,'#E8A868');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1500);
 x.fillStyle='#24485A';x.fillRect(-900,640,W+1800,80);x.fillStyle='rgba(255,220,160,.35)';for(let i=0;i<14;i++)x.fillRect(hash(i,5)*1900,650+hash(i,6)*60,60+hash(i,8)*80,3);
 x.fillStyle='#5A3A2E';x.beginPath();x.moveTo(-900,760);x.quadraticCurveTo(700,560,1300,600);x.quadraticCurveTo(1700,620,W+900,700);x.lineTo(W+900,1100);x.lineTo(-900,1100);x.fill();
 x.save();x.translate(1300,600);x.fillStyle='#E8D8B8';x.fillRect(-260,-40,520,40);x.beginPath();x.moveTo(-280,-200);x.lineTo(0,-280);x.lineTo(280,-200);x.closePath();x.fill();x.fillRect(-270,-205,540,26);for(let i=0;i<8;i++){x.fillRect(-240+i*68,-180,30,140)}x.restore()}
// a sela de carga (ságma): manta + armação de madeira (cangalha) + cilha
function packSaddle(x,cx,cy,s,blanket='#8E1B3A'){x.save();x.translate(cx,cy);x.scale(s,s);
 x.fillStyle=blanket;x.beginPath();x.moveTo(-110,-30);x.quadraticCurveTo(0,-56,110,-30);x.lineTo(120,70);x.quadraticCurveTo(0,86,-120,70);x.closePath();x.fill();x.strokeStyle=GOLD;x.lineWidth=6;x.beginPath();x.moveTo(-112,58);x.quadraticCurveTo(0,74,112,58);x.stroke();
 x.fillStyle=GOLD;for(let i=-4;i<=4;i++){x.beginPath();x.moveTo(i*26-6,72+Math.abs(i)*-1);x.lineTo(i*26+6,72);x.lineTo(i*26,90);x.fill()}
 x.fillStyle='#7A5232';x.beginPath();x.roundRect(-96,-58,192,30,12);x.fill();x.strokeStyle='#5A3A22';x.lineWidth=14;x.lineCap='round';for(const k of [-1,1]){x.beginPath();x.moveTo(k*70,-30);x.lineTo(k*20,-110);x.moveTo(k*20,-30);x.lineTo(k*70,-110);x.stroke()}
 x.fillStyle='#C9A060';x.beginPath();x.arc(-45,-72,8,0,7);x.arc(45,-72,8,0,7);x.fill();x.restore()}
function pannier(x,cx,cy,s,goods=1){x.save();x.translate(cx,cy);x.scale(s,s);
 if(goods){bottleS(x,[-38,-40],.32,'red');x.fillStyle='#D8A860';x.beginPath();x.ellipse(18,-58,40,24,-.2,0,7);x.fill();x.strokeStyle='rgba(120,70,30,.6)';x.lineWidth=3;for(const k of [-1,0,1]){x.beginPath();x.moveTo(8+k*16,-76);x.lineTo(18+k*16,-44);x.stroke()}
  x.fillStyle='#E9DCC0';x.beginPath();x.roundRect(36,-90,60,40,10);x.fill();x.fillStyle='#8E1B3A';x.fillRect(36,-74,60,6)}
 x.fillStyle='#A07038';x.beginPath();x.moveTo(-70,-40);x.lineTo(70,-40);x.quadraticCurveTo(76,60,50,80);x.lineTo(-50,80);x.quadraticCurveTo(-76,60,-70,-40);x.closePath();x.fill();
 x.save();x.clip();x.strokeStyle='#6A4420';x.lineWidth=4;for(let y=-30;y<80;y+=14){x.beginPath();x.moveTo(-80,y);x.lineTo(80,y);x.stroke()}x.strokeStyle='rgba(255,220,160,.35)';for(let k=-70;k<=70;k+=20){x.beginPath();x.moveTo(k,-40);x.lineTo(k*.8,80);x.stroke()}x.restore();
 x.fillStyle='#7A5228';x.beginPath();x.roundRect(-76,-48,152,16,8);x.fill();x.restore()}
// BURRO DE CARGA — personagem detalhado: olhos (piscam), orelhas (mexem), focinho, crina, cabresto, 4 patas com cascos (andam), cauda (balança)
// o: {walk:0..1 (passo), face:1 direita/-1 esquerda, load:'saddle'|'baskets'|'none', blink:[t...], nod}
function donkey(x,cx,base,s,t,o={}){const face=o.face||1,wk=o.walk||0,ph=t*6.2*(o.speed||1),bob=wk?Math.abs(Math.sin(ph))*-6:Math.sin(t*1.6)*1.5;
 x.save();x.translate(cx,base);x.scale(s*face,s);
 x.fillStyle='rgba(0,0,0,.28)';x.beginPath();x.ellipse(0,4,230,18,0,0,7);x.fill();
 const COL='#8C7C70',DARK='#6A5C52',BELLY='#D2C6B8',HOOF='#2A2220';
 const leg=(hx,hy,a,col,front)=>{x.save();x.translate(hx,hy);x.rotate(a);x.fillStyle=col;x.beginPath();x.moveTo(-22,0);x.lineTo(22,0);x.lineTo(15,90);x.quadraticCurveTo(18,100,13,108);x.lineTo(10,168);x.lineTo(-10,168);x.lineTo(-12,108);x.quadraticCurveTo(-18,100,-15,90);x.closePath();x.fill();
  x.fillStyle=BELLY;x.fillRect(-11,130,22,30);x.fillStyle=HOOF;x.beginPath();x.moveTo(-14,164);x.lineTo(14,164);x.lineTo(18,186);x.lineTo(-16,186);x.closePath();x.fill();x.restore()};
 const sw=k=>wk?Math.sin(ph+k)*.32*wk:0;
 leg(-120,-190+bob,sw(Math.PI),DARK);leg(105,-190+bob,sw(0),DARK);
 // cauda
 const ts=Math.sin(t*2.4)*.25;x.save();x.translate(-175,-250+bob);x.rotate(.35+ts);x.strokeStyle=COL;x.lineWidth=14;x.lineCap='round';x.beginPath();x.moveTo(0,0);x.quadraticCurveTo(-20,60,-10,120);x.stroke();x.fillStyle='#3A2C24';x.beginPath();x.ellipse(-10,135,14,30,0,0,7);x.fill();x.restore();
 // corpo
 x.save();x.translate(0,bob);x.fillStyle=COL;x.beginPath();x.ellipse(-10,-245,180,80,0,0,7);x.fill();x.fillStyle=BELLY;x.beginPath();x.ellipse(-10,-200,150,34,0,0,Math.PI);x.fill();
 x.fillStyle='rgba(255,255,255,.08)';x.beginPath();x.ellipse(-30,-285,120,24,0,0,7);x.fill();x.strokeStyle='#4A3A30';x.lineWidth=8;x.beginPath();x.moveTo(-150,-290);x.quadraticCurveTo(-10,-330,120,-300);x.stroke();
 // pescoço e cabeça
 const nod=(o.nod||0)+Math.sin(t*1.9)*.03,ear=Math.sin(t*1.3)*.12+(hash(Math.floor(t*.7),9)>.7?Math.sin(t*14)*.08:0);
 x.save();x.translate(130,-270);x.rotate(nod);x.fillStyle=COL;x.beginPath();x.moveTo(-50,40);x.lineTo(-20,-60);x.quadraticCurveTo(10,-150,90,-150);x.lineTo(120,-110);x.quadraticCurveTo(60,-60,60,40);x.closePath();x.fill();
 x.fillStyle='#3A2C24';for(let i=0;i<7;i++){x.beginPath();x.ellipse(-24+i*16,-66-i*13+Math.min(i,3)*0,9,16,-.7,0,7);x.fill()}
 x.save();x.translate(110,-140);
 for(const [ex,ea,dk] of [[-14,-.32-ear,1],[12,-.12+ear*.6,0]]){x.save();x.translate(ex,-28);x.rotate(ea);x.fillStyle=dk?DARK:COL;x.beginPath();x.moveTo(-15,0);x.quadraticCurveTo(-22,-80,0,-120);x.quadraticCurveTo(22,-80,15,0);x.closePath();x.fill();x.fillStyle='#C8A898';x.beginPath();x.moveTo(-7,-8);x.quadraticCurveTo(-10,-70,0,-100);x.quadraticCurveTo(10,-70,7,-8);x.closePath();x.fill();
  x.fillStyle='#2A2220';x.beginPath();x.moveTo(-6,-104);x.quadraticCurveTo(0,-126,6,-104);x.fill();x.restore()}
 x.fillStyle=COL;x.beginPath();x.ellipse(10,10,62,52,.45,0,7);x.fill();x.beginPath();x.moveTo(-20,-10);x.quadraticCurveTo(80,0,108,70);x.lineTo(60,104);x.quadraticCurveTo(10,60,-30,40);x.closePath();x.fill();
 x.fillStyle=BELLY;x.beginPath();x.ellipse(88,84,44,36,.5,0,7);x.fill();x.fillStyle='#3A2C24';x.beginPath();x.ellipse(108,74,7,10,.5,0,7);x.fill();x.strokeStyle='#5A4A40';x.lineWidth=4;x.beginPath();x.moveTo(70,108);x.quadraticCurveTo(92,112,112,100);x.stroke();
 // olho
 const bl=(o.blink||[]).some(b=>t>b&&t<b+.16)||((t%4.3)<.14&&t>0);x.fillStyle='#F4EEE4';x.beginPath();x.ellipse(18,-6,15,bl?2:12,.2,0,7);x.fill();if(!bl){x.fillStyle='#1A1210';x.beginPath();x.arc(22,-5,8,0,7);x.fill();x.fillStyle='#fff';x.beginPath();x.arc(25,-8,3,0,7);x.fill()}
 x.strokeStyle='#3A2C24';x.lineWidth=4;x.beginPath();x.arc(18,-6,16,Math.PI*1.1,Math.PI*1.9);x.stroke();
 // cabresto
 x.strokeStyle='#7A2A1A';x.lineWidth=8;x.beginPath();x.moveTo(-22,-28);x.quadraticCurveTo(-30,40,30,70);x.moveTo(40,48);x.quadraticCurveTo(80,40,118,62);x.stroke();x.fillStyle=GOLD;x.beginPath();x.arc(34,64,9,0,7);x.fill();
 if(o.rope){x.strokeStyle='#B89A6A';x.lineWidth=5;x.beginPath();x.moveTo(34,64);x.quadraticCurveTo(80,170,o.rope,200);x.stroke()}
 x.restore();x.restore();
 // carga
 if(o.load!='none'){packSaddle(x,-10,-300,1.05,o.blanket);if(o.load=='baskets'||o.load=='cargo')pannier(x,-10,-250,1.05,1)}
 x.restore();
 leg(-95,-190+bob,sw(0),COL);leg(130,-190+bob,sw(Math.PI),COL);
 x.restore()}
// OFICIAL MEDIEVAL (o sommelier do séc. XIII): túnica azul do rei, capuz vinho, barba, chapéu, corrente de ouro com flor-de-lis, bastão
const OFFICER={skin:'#D9AE88',cloth:'#2B3F7A',hood:'#6A1424',hand:'#D9AE88',face:'#1c1a2b',leg:'#4A3424',shoe:'#1A120C',finger:'#1c1a2b',coat:true,short:'#4A3020',beard:'#4A3020',beardT:'full'};
function officer(x,cx,base,s,t,o={}){const y=base-520*s,p={x:cx,y,s,face:1,breath:t*2.1,look:o.look??.3,lookY:0,brow:.4,mouth:o.mouth??.4,blink:blinkAt(t,o.blinks||[1.2,3.8,6.5,9.1].map(v=>v+(o.t0||0))),hands:{},arm3d:true,open:o.open||0};
 const pt=o.point||0;p.hands.l=[-70,190,40];p.hands.r=[lerp(80,190,pt),lerp(180,40,pt),lerp(60,90,pt)];
 const hp=actor(x,'off',OFFICER,p,null,'rgba(255,190,120,1)',1);
 x.save();x.translate(cx,y);x.scale(s,s);
 // corrente de ouro + medalha com flor-de-lis
 x.strokeStyle=GOLD;x.lineWidth=6;x.beginPath();x.moveTo(-60,0);x.quadraticCurveTo(0,90,60,0);x.stroke();x.fillStyle=GOLD;x.beginPath();x.arc(0,74,22,0,7);x.fill();fleur(x,0,74,.3,'#2B3F7A');
 x.fillStyle='#6A3A1A';x.fillRect(-110,215,220,16);x.fillStyle=GOLD;x.fillRect(-14,211,28,24);
 // chapéu (barrete medieval)
 x.save();x.translate(0,-116+Math.sin(t*2.1)*3);x.fillStyle='#6A1424';x.beginPath();x.ellipse(0,-72,108,26,0,0,7);x.fill();x.beginPath();x.moveTo(-90,-80);x.quadraticCurveTo(-60,-150,30,-140);x.quadraticCurveTo(110,-130,96,-80);x.closePath();x.fill();
 x.strokeStyle=GOLD;x.lineWidth=5;x.beginPath();x.ellipse(0,-74,104,22,0,Math.PI*.05,Math.PI*.95);x.stroke();x.fillStyle='#E9DCC0';x.beginPath();x.moveTo(60,-110);x.quadraticCurveTo(140,-170,120,-200);x.quadraticCurveTo(100,-150,50,-120);x.fill();x.restore();
 x.restore();
 // bastão do cargo na mão esquerda e mão (atrás do bastão não: mão segura por cima)
 const hl=h2w(hp,'l'),hr=h2w(hp,'r');x.strokeStyle='#5A3A1A';x.lineWidth=12*s;x.lineCap='round';x.beginPath();x.moveTo(hl[0]-8*s,hl[1]-230*s);x.lineTo(hl[0]+10*s,hl[1]+300*s);x.stroke();x.fillStyle=GOLD;x.beginPath();x.arc(hl[0]-9*s,hl[1]-238*s,16*s,0,7);x.fill();
 gripHand(x,hl[0],hl[1],0,OFFICER,.85*s);(pt>.5?openHand:gripHand)(x,hr[0],hr[1],pt>.5?.3:0,OFFICER,.85*s);if(pt<=.5&&o.scroll){scrollMini(x,hr[0],hr[1]+30*s,s)}return hp}
function scrollMini(x,cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#E9DCC0';x.fillRect(-14,-10,28,90);x.fillStyle='#C9B48A';x.beginPath();x.ellipse(0,-10,18,8,0,0,7);x.ellipse(0,80,18,8,0,0,7);x.fill();x.restore()}
// MORDOMO INGLÊS (butler): fraque preto, colete, camisa branca, gravata-borboleta preta, luvas brancas, cabelo grisalho, bigode, bandeja de prata
const BUTLER={skin:'#E2BC9A',cloth:'#17141C',hood:'#08070B',outfit:'blazer',shirt:'#F4F0E8',collar:'#F4F0E8',bow:'#08070B',hand:'#F4F0E8',face:'#1c1a2b',leg:'#17141C',shoe:'#050406',finger:'#9A9AA0',short:'#B8B4B0',part:1,temples:'#D8D4D0',beard:'#B8B4B0',beardT:'mustache',btn:'#C8C8D0'};
function butler(x,cx,base,s,t,o={}){const y=base-520*s,bow=o.bow||0,p={x:cx,y,s,face:-1,breath:t*2.1,look:o.look??-.35,lookY:.1,brow:.6,mouth:o.mouth??.25,blink:blinkAt(t,o.blinks||[1,3.6,6.2,8.8].map(v=>v+(o.t0||0))),hands:{},arm3d:true,bend:-bow*.18,headY:bow*8,open:o.open||0};
 // abas do fraque (atrás das pernas)
 x.save();x.translate(cx,y);x.scale(s,s);x.fillStyle='#0E0C12';for(const k of [-1,1]){x.beginPath();x.moveTo(k*20,220);x.lineTo(k*112,215);x.lineTo(k*92,420);x.lineTo(k*48,440);x.closePath();x.fill()}x.restore();
 p.hands.l=[-150,110,120];p.hands.r=[60,200,40];const hp=actor(x,'but',BUTLER,p,null,'rgba(220,220,235,1)',1);
 const hl=h2w(hp,'l'),hr=h2w(hp,'r');
 openHand(x,hl[0],hl[1]+6*s,-.2,BUTLER,.85*s);
 // bandeja de prata com garrafa e taça (a mão fica POR BAIXO da bandeja)
 x.save();x.translate(hl[0],hl[1]-14*s);x.scale(s,s);x.fillStyle='#9A9AA4';x.beginPath();x.ellipse(0,0,130,20,0,0,7);x.fill();x.fillStyle='#D8D8E2';x.beginPath();x.ellipse(0,-4,124,15,0,0,7);x.fill();
 bottleS(x,[-30,-8],.62,'red');glassW(x,50,-8,.55,.35,'#5E1428');x.restore();
 // guardanapo branco no braço direito
 x.save();x.translate(hr[0],hr[1]);x.scale(s,s);x.fillStyle='#F4F0E8';x.beginPath();x.moveTo(-30,-40);x.lineTo(28,-40);x.lineTo(34,70);x.lineTo(-20,90);x.closePath();x.fill();x.restore();gripHand(x,hr[0],hr[1],0,BUTLER,.85*s);return hp}
// CAMA BOX (o "somiê"): base forrada + colchão + travesseiro
function boxBed(x,cx,base,s){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='rgba(0,0,0,.3)';x.beginPath();x.ellipse(0,6,330,20,0,0,7);x.fill();
 x.fillStyle='#3A2418';for(const k of [-1,1])x.fillRect(k*280-12,-30,24,30);
 let g=x.createLinearGradient(0,-170,0,-30);g.addColorStop(0,'#C9B490');g.addColorStop(1,'#9A845E');x.fillStyle=g;x.beginPath();x.roundRect(-310,-170,620,140,14);x.fill();
 x.fillStyle='rgba(90,60,30,.5)';for(let i=-4;i<=4;i++)for(const yy of [-130,-70]){x.beginPath();x.arc(i*66,yy,5,0,7);x.fill()}x.strokeStyle='rgba(90,60,30,.4)';x.lineWidth=3;x.strokeRect(-300,-160,600,120);
 g=x.createLinearGradient(0,-260,0,-170);g.addColorStop(0,'#FBF5E6');g.addColorStop(1,'#E2D6BC');x.fillStyle=g;x.beginPath();x.roundRect(-300,-262,600,96,26);x.fill();x.strokeStyle='rgba(150,120,80,.35)';for(let i=-5;i<=5;i++){x.beginPath();x.moveTo(i*52,-250);x.lineTo(i*52,-178);x.stroke()}
 x.fillStyle='#F4F0E8';x.beginPath();x.roundRect(-280,-310,170,56,26);x.fill();x.fillStyle='#8E1B3A';x.beginPath();x.roundRect(-60,-268,330,30,10);x.fill();x.restore()}
// as duas garrafas de prata dourada do Grande Bouteiller
function goldBottle(x,cx,base,s,rot=0){x.save();x.translate(cx,base);x.rotate(rot);x.scale(s,s);let g=x.createLinearGradient(-90,0,90,0);g.addColorStop(0,'#8A6420');g.addColorStop(.35,'#F2D27A');g.addColorStop(.6,'#D4A24C');g.addColorStop(1,'#6A4A18');x.fillStyle=g;
 x.beginPath();x.moveTo(-70,0);x.quadraticCurveTo(-110,-120,-80,-200);x.quadraticCurveTo(-40,-260,-24,-300);x.lineTo(-24,-370);x.lineTo(24,-370);x.lineTo(24,-300);x.quadraticCurveTo(40,-260,80,-200);x.quadraticCurveTo(110,-120,70,0);x.closePath();x.fill();
 x.fillStyle='#B8832E';x.fillRect(-34,-390,68,24);x.fillRect(-80,-12,160,16);x.strokeStyle='#8A6420';x.lineWidth=4;x.beginPath();x.moveTo(-95,-150);x.quadraticCurveTo(0,-130,95,-150);x.stroke();
 x.fillStyle='#1F2A5A';x.beginPath();x.ellipse(0,-100,46,56,0,0,7);x.fill();x.strokeStyle=GOLD2;x.lineWidth=4;x.stroke();fleur(x,0,-102,.62,GOLD2);x.fillStyle='rgba(255,255,255,.4)';x.fillRect(-56,-210,10,150);x.restore()}
function greekColumn(x,cx,base,s){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='#E8D8B8';x.fillRect(-70,-20,140,20);x.fillRect(-60,-34,120,14);x.fillRect(-46,-300,92,266);x.fillRect(-74,-326,148,26);x.fillRect(-60,-340,120,14);
 x.fillStyle='rgba(120,90,60,.35)';for(let i=-3;i<=3;i++)x.fillRect(i*13-2,-296,4,258);x.restore()}
function restIcon(x,cx,base,s){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='#EFE6D2';x.beginPath();x.moveTo(-150,-120);x.lineTo(150,-120);x.lineTo(170,-20);x.lineTo(-170,-20);x.closePath();x.fill();x.fillStyle='#4A2A16';x.fillRect(-140,-20,16,120-100+100);x.fillRect(124,-20,16,120);x.restore();
 glassW(x,cx-50*s,base-120*s,.9*s,.4,'#5E1428');bottleS(x,[cx+60*s,base-120*s],.55*s,'red');candle(x,cx-130*s,base-120*s,30*s,0)}
function sugarloaf(x,cx,base,s,t){x.save();x.translate(cx,base);x.scale(s,s);let g=x.createLinearGradient(0,-420,0,0);g.addColorStop(0,'#2A2050');g.addColorStop(1,'#E08A5A');x.fillStyle=g;x.beginPath();x.roundRect(-420,-420,840,420,30);x.fill();x.save();x.clip();
 x.fillStyle='#2A3A4A';x.beginPath();x.moveTo(60,0);x.quadraticCurveTo(80,-330,190,-340);x.quadraticCurveTo(290,-330,320,0);x.fill();x.beginPath();x.moveTo(-260,0);x.quadraticCurveTo(-210,-160,-130,-170);x.quadraticCurveTo(-60,-160,-20,0);x.fill();
 x.strokeStyle='rgba(30,30,40,.8)';x.lineWidth=2;x.beginPath();x.moveTo(-130,-170);x.lineTo(190,-340);x.stroke();const u=(t*.08)%1;x.fillStyle='#E9DCC0';x.fillRect(-130+u*320-8,-170-u*170,16,12);
 x.fillStyle='#1E4A5A';x.fillRect(-420,-50,840,50);x.fillStyle='rgba(255,220,160,.4)';for(let i=0;i<10;i++)x.fillRect(-400+hash(i,2)*780,-40+hash(i,4)*30,50,3);x.restore();x.strokeStyle=GOLD;x.lineWidth=6;x.beginPath();x.roundRect(-420,-420,840,420,30);x.stroke();x.restore()}
function msPin(x,cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#8E1B3A';x.beginPath();x.arc(0,0,120,0,7);x.fill();x.strokeStyle=GOLD;x.lineWidth=14;x.stroke();x.lineWidth=4;x.beginPath();x.arc(0,0,96,0,7);x.stroke();
 x.fillStyle=GOLD;x.beginPath();x.moveTo(-18,-60);x.lineTo(18,-60);x.lineTo(14,-10);x.quadraticCurveTo(50,10,40,50);x.lineTo(-40,50);x.quadraticCurveTo(-50,10,-14,-10);x.closePath();x.fill();x.fillRect(-8,50,16,30);x.fillRect(-36,78,72,10);x.restore()}
