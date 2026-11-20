// Vídeo 13 — Por que a taça de vinho tem haste? Desenhos novos: kylix grega, taça romana, veneziana de dragão, inglesa air twist,
// taça lisa (Riedel), VIDREIRO (personagem: avental de couro, luvas, tubo de soprar), tigela/chifre/caneca/estanho, mapa Veneza→Murano,
// cadeado, moedas, mapa da língua, vista de cima da taça (anel de álcool), mão genérica no bojo, copo americano.
// ---------- taças antigas (base = y do chão, s = escala) ----------
function kylix(x,cx,base,s,lv=0,tondo=1){x.save();x.translate(cx,base);x.scale(s,s);
 x.fillStyle='rgba(0,0,0,.35)';x.beginPath();x.ellipse(0,4,90,12,0,0,7);x.fill();
 const clay='#B8602E',dark='#1E120E';
 // pé + haste curta
 x.fillStyle=dark;x.beginPath();x.ellipse(0,-6,70,14,0,0,7);x.fill();x.fillStyle=clay;x.beginPath();x.moveTo(-60,-8);x.quadraticCurveTo(-14,-20,-12,-70);x.lineTo(12,-70);x.quadraticCurveTo(14,-20,60,-8);x.closePath();x.fill();
 // bojo largo e raso
 x.fillStyle=dark;x.beginPath();x.moveTo(-230,-110);x.quadraticCurveTo(-200,-62,-20,-66);x.lineTo(20,-66);x.quadraticCurveTo(200,-62,230,-110);x.closePath();x.fill();
 x.strokeStyle=clay;x.lineWidth=5;x.beginPath();x.moveTo(-200,-96);x.quadraticCurveTo(0,-74,200,-96);x.stroke();
 // alças
 x.strokeStyle=dark;x.lineWidth=12;x.lineCap='round';for(const k of [-1,1]){x.beginPath();x.moveTo(k*200,-104);x.quadraticCurveTo(k*270,-110,k*250,-140);x.stroke()}
 // boca (elipse, vista de 3/4) com o vinho e o tondo
 x.fillStyle=clay;x.beginPath();x.ellipse(0,-112,232,30,0,0,7);x.fill();x.fillStyle='#2A1612';x.beginPath();x.ellipse(0,-112,214,24,0,0,7);x.fill();
 if(tondo>0){x.save();x.globalAlpha=tondo;x.fillStyle=clay;x.beginPath();x.ellipse(0,-112,78,14,0,0,7);x.fill();x.fillStyle=dark;x.beginPath();x.ellipse(-12,-114,16,5,0,0,7);x.fill();x.fillRect(-4,-113,40,3);x.fillRect(-20,-110,6,8);x.restore()}
 if(lv>0){x.fillStyle=`rgba(94,20,40,${.95})`;x.beginPath();x.ellipse(0,-112,200*lv+14,22*lv+3,0,0,7);x.fill();x.fillStyle='rgba(255,220,200,.25)';x.beginPath();x.ellipse(-40*lv,-116,60*lv,4,0,0,7);x.fill()}
 x.restore()}
// taça romana de vidro esverdeado, haste curta
function romanGlass(x,cx,base,s,lv=0){x.save();x.translate(cx,base);x.scale(s,s);const gl='rgba(190,215,170,.5)';
 x.fillStyle='rgba(0,0,0,.3)';x.beginPath();x.ellipse(0,3,50,8,0,0,7);x.fill();x.fillStyle=gl;x.beginPath();x.ellipse(0,-4,46,9,0,0,7);x.fill();x.fillRect(-7,-44,14,40);
 x.beginPath();x.ellipse(0,-46,14,6,0,0,7);x.fill();
 const bowl=()=>{x.beginPath();x.moveTo(-10,-48);x.quadraticCurveTo(-70,-60,-66,-150);x.lineTo(66,-150);x.quadraticCurveTo(70,-60,10,-48);x.closePath()};bowl();x.fillStyle='rgba(190,215,170,.32)';x.fill();
 if(lv>0){x.save();bowl();x.clip();x.fillStyle='#6E1630';x.fillRect(-80,-50-lv*95,160,120);x.restore()}
 x.strokeStyle='rgba(220,240,200,.7)';x.lineWidth=3;bowl();x.stroke();x.fillStyle='rgba(255,255,255,.3)';x.beginPath();x.ellipse(-40,-110,5,26,-.1,0,7);x.fill();x.restore()}
// taça veneziana de cristallo, haste alta com dragão
function veniceGlass(x,cx,base,s,t=0,glow=0){x.save();x.translate(cx,base);x.scale(s,s);const gl='rgba(235,245,250,.55)';
 x.fillStyle='rgba(0,0,0,.3)';x.beginPath();x.ellipse(0,3,60,9,0,0,7);x.fill();x.fillStyle=gl;x.beginPath();x.ellipse(0,-4,56,10,0,0,7);x.fill();
 x.fillRect(-5,-210,10,206);
 // dragão em volta da haste: corpo em S, cabeça, asinhas (vidro azul/dourado)
 x.strokeStyle='rgba(120,190,230,.85)';x.lineWidth=10;x.lineCap='round';x.beginPath();x.moveTo(0,-40);x.bezierCurveTo(70,-60,70,-110,0,-120);x.bezierCurveTo(-70,-130,-70,-180,0,-190);x.stroke();
 x.fillStyle='rgba(120,190,230,.9)';x.beginPath();x.ellipse(18,-196,20,12,-.4,0,7);x.fill();x.fillStyle=GOLD2;x.beginPath();x.arc(26,-200,3.5,0,7);x.fill();
 for(const [wx,wy,k] of [[52,-90,1],[-52,-150,-1]]){x.fillStyle='rgba(212,162,76,.8)';x.beginPath();x.moveTo(wx,wy);x.lineTo(wx+k*40,wy-26);x.lineTo(wx+k*28,wy+4);x.closePath();x.fill()}
 const bowl=()=>{x.beginPath();x.moveTo(-8,-210);x.quadraticCurveTo(-96,-230,-90,-330);x.lineTo(90,-330);x.quadraticCurveTo(96,-230,8,-210);x.closePath()};bowl();x.fillStyle='rgba(235,245,250,.22)';x.fill();x.strokeStyle='rgba(240,250,255,.8)';x.lineWidth=3;x.stroke();
 x.fillStyle='rgba(255,255,255,.35)';x.beginPath();x.ellipse(-56,-280,6,30,-.1,0,7);x.fill();
 if(glow>0){const g=x.createRadialGradient(0,-200,10,0,-200,260);g.addColorStop(0,`rgba(255,240,200,${.4*glow})`);g.addColorStop(1,'rgba(255,240,200,0)');x.fillStyle=g;x.fillRect(-260,-460,520,520)}
 x.restore()}
// taça inglesa de cristal com chumbo (pesada, brilhante) — opcional com "air twist" (espiral de ar dentro da haste)
function englishGlass(x,cx,base,s,t=0,o={}){x.save();x.translate(cx,base);x.scale(s,s);const sh=o.shine||0,tw=o.twist||0;
 x.fillStyle='rgba(0,0,0,.3)';x.beginPath();x.ellipse(0,3,58,9,0,0,7);x.fill();x.fillStyle='rgba(235,240,250,.6)';x.beginPath();x.ellipse(0,-4,54,10,0,0,7);x.fill();
 const sw=o.thin?8:16;x.fillStyle='rgba(225,235,245,.45)';x.fillRect(-sw/2,-180,sw,176);x.strokeStyle='rgba(255,255,255,.6)';x.lineWidth=2;x.strokeRect(-sw/2,-180,sw,176);
 if(o.knop){x.fillStyle='rgba(225,235,245,.55)';x.beginPath();x.ellipse(0,-90,18,14,0,0,7);x.fill()}
 if(tw>0){x.save();x.beginPath();x.rect(-sw/2,-180,sw,176);x.clip();for(let k=0;k<2;k++){x.strokeStyle=`rgba(255,250,235,${.95*tw})`;x.lineWidth=2.6;x.beginPath();for(let i=0;i<=120;i++){const u=i/120,y=-6-u*170;x.lineTo(Math.sin(u*Math.PI*2*5+k*Math.PI+t*3)*(sw/2-2),y)}x.stroke()}x.restore();
  const g=x.createRadialGradient(0,-90,4,0,-90,120);g.addColorStop(0,`rgba(255,240,190,${.45*tw})`);g.addColorStop(1,'rgba(255,240,190,0)');x.fillStyle=g;x.fillRect(-120,-210,240,240)}
 const bowl=()=>{x.beginPath();x.moveTo(-sw/2,-180);x.lineTo(-62,-300);x.lineTo(62,-300);x.lineTo(sw/2,-180);x.closePath()};bowl();x.fillStyle='rgba(235,240,250,.25)';x.fill();x.strokeStyle='rgba(255,255,255,.8)';x.lineWidth=3;x.stroke();
 if(o.lv){x.save();bowl();x.clip();x.fillStyle='#6E1630';x.fillRect(-70,-190-o.lv*110,140,140);x.restore()}
 if(sh>0){x.save();x.globalAlpha=sh;x.strokeStyle='#FFF6D8';x.lineWidth=3;for(const [px,py,r] of [[-40,-270,22],[34,-230,16],[0,-60,14]]){const a=t*2+px;x.beginPath();x.moveTo(px-r,py);x.lineTo(px+r,py);x.moveTo(px,py-r);x.lineTo(px,py+r);x.stroke()}x.restore()}
 x.restore()}
// ---------- O VIDREIRO (personagem): camisa clara de manga, avental de couro, luvas grossas, lenço na cabeça, bigode ----------
const BLOWER={skin:'#D2A27A',cloth:'#E6D8BC',hood:'#C9B894',hand:'#6A4326',face:'#1c1a2b',leg:'#3A2A1E',shoe:'#1A120C',finger:'#2A1A10',short:'#3A2618',beard:'#3A2618',beardT:'full',outfit:'apron',apron:'#7A4A26',collar:'#E6D8BC',btn:'#C9A050'};
// o: {mode:'blow'|'pull'|'hold', inflate 0..1, pull 0..1, face, t0}
function glassblower(x,cx,base,s,t,o={}){const y=base-520*s,face=o.face||1,mode=o.mode||'blow',sp=o.cheeks||0;
 const p={x:cx,y,s,face,breath:t*2.1,look:o.look??.2,lookY:mode=='blow'?.1:.2,brow:.6,mouth:mode=='blow'?.0:.45,open:mode=='blow'?.0:(o.open||0),blink:blinkAt(t,[1.1,3.7,6.3,8.9].map(v=>v+(o.t0||0))),hands:{},arm3d:true,noLegs:!!o.noLegs};
 // mãos: no tubo (sopro) — ambas para a frente, uma perto da boca; puxando — uma segura o tubo, outra a pinça
 if(mode=='blow'){p.hands.l=[150,-40,70];p.hands.r=[240,-10,60]}
 else if(mode=='pull'){const u=o.pull||0;p.hands.l=[150,60,60];p.hands.r=[lerp(220,320,u),lerp(40,-30,u),60]}
 else {p.hands.l=[-70,180,40];p.hands.r=[170,40,70]}
 const hp=actor(x,'blower',BLOWER,p,null,'rgba(255,170,90,1)',-face);
 x.save();x.translate(cx,y);x.scale(s*face,s);
 // lenço na cabeça (bandana vinho com nó)
 x.save();x.translate(0,Math.sin(t*2.1)*3);x.fillStyle='#8E1B3A';x.beginPath();x.ellipse(0,-196,96,40,0,Math.PI,0);x.fill();x.fillRect(-96,-200,192,16);x.beginPath();x.moveTo(-90,-196);x.lineTo(-136,-172);x.lineTo(-120,-206);x.closePath();x.fill();x.restore();
 x.restore();
 const hl=h2w(hp,'l'),hr=h2w(hp,'r');
 if(mode=='blow'){// tubo de soprar da boca até a bolha de vidro em brasa
  const mx=cx+face*58*s,my=y-96*s,ex=cx+face*640*s,ey=y+60*s;x.strokeStyle='#6A5A4A';x.lineWidth=13*s;x.lineCap='round';x.beginPath();x.moveTo(mx,my);x.lineTo(ex,ey);x.stroke();x.strokeStyle='rgba(255,255,255,.25)';x.lineWidth=3*s;x.beginPath();x.moveTo(mx,my-4*s);x.lineTo(ex,ey-4*s);x.stroke();
  // bochecha cheia
  if(sp>0){x.fillStyle=BLOWER.skin;x.beginPath();x.arc(cx+face*40*s,y-104*s,(14+16*sp)*s,0,7);x.fill()}
  const r=(26+(o.inflate||0)*70)*s,g=x.createRadialGradient(ex+face*r*.7,ey,4,ex+face*r*.8,ey,r*1.3);g.addColorStop(0,'rgba(255,245,190,.98)');g.addColorStop(.5,'rgba(255,160,60,.9)');g.addColorStop(1,'rgba(170,50,10,.8)');x.fillStyle=g;x.beginPath();x.ellipse(ex+face*r*.85,ey+r*.05,r,r*.92,0,0,7);x.fill();
  gripHand(x,hl[0],hl[1],.5*face,BLOWER,.9*s);gripHand(x,hr[0],hr[1],.5*face,BLOWER,.9*s)}
 else if(mode=='pull'){// tubo na mão esquerda com a taça em brasa; pinça na direita esticando a haste
  const u=o.pull||0,bx=cx+face*360*s,by=y+40*s;x.strokeStyle='#6A5A4A';x.lineWidth=13*s;x.lineCap='round';x.beginPath();x.moveTo(hl[0]-face*120*s,hl[1]+20*s);x.lineTo(bx,by);x.stroke();
  const g=x.createRadialGradient(bx+face*40*s,by,4,bx+face*40*s,by,90*s);g.addColorStop(0,'rgba(255,245,190,.98)');g.addColorStop(.6,'rgba(255,160,60,.9)');g.addColorStop(1,'rgba(170,50,10,.75)');x.fillStyle=g;x.beginPath();x.ellipse(bx+face*40*s,by,54*s,46*s,0,0,7);x.fill();
  // fio de vidro esticado (caramelo)
  x.strokeStyle='rgba(255,190,90,.95)';x.lineWidth=(14-8*u)*s;x.beginPath();x.moveTo(bx+face*80*s,by);x.quadraticCurveTo((bx+hr[0])/2+face*10*s,by+30*s*(1-u),hr[0]-face*10*s,hr[1]);x.stroke();
  x.strokeStyle='#8A8A90';x.lineWidth=6*s;x.beginPath();x.moveTo(hr[0],hr[1]);x.lineTo(hr[0]+face*60*s,hr[1]+40*s);x.moveTo(hr[0],hr[1]);x.lineTo(hr[0]+face*64*s,hr[1]+18*s);x.stroke();
  gripHand(x,hl[0],hl[1],.3*face,BLOWER,.9*s);gripHand(x,hr[0],hr[1],-.2*face,BLOWER,.9*s)}
 else {gripHand(x,hl[0],hl[1],0,BLOWER,.9*s);gripHand(x,hr[0],hr[1],0,BLOWER,.9*s)}
 return hp}
// ---------- antes do vidro: madeira, chifre, barro, estanho ----------
function woodBowl(x,cx,base,s){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='#7A4A26';x.beginPath();x.moveTo(-90,-80);x.quadraticCurveTo(-80,0,0,0);x.quadraticCurveTo(80,0,90,-80);x.closePath();x.fill();x.fillStyle='#5A3418';x.beginPath();x.ellipse(0,-80,90,16,0,0,7);x.fill();
 x.strokeStyle='rgba(40,20,10,.5)';x.lineWidth=3;for(const k of [-50,-20,20,50]){x.beginPath();x.moveTo(k,-66);x.quadraticCurveTo(k*.8,-30,k*.6,-6);x.stroke()}x.restore()}
function hornCup(x,cx,base,s){x.save();x.translate(cx,base);x.scale(s,s);const g=x.createLinearGradient(-90,0,90,0);g.addColorStop(0,'#3A2A1E');g.addColorStop(1,'#D8C8A0');x.fillStyle=g;x.beginPath();x.moveTo(-100,-170);x.quadraticCurveTo(-20,-150,40,-40);x.quadraticCurveTo(70,0,100,-10);x.quadraticCurveTo(60,-60,-30,-200);x.closePath();x.fill();
 x.fillStyle='#2A1A10';x.beginPath();x.ellipse(-66,-186,40,14,.6,0,7);x.fill();x.strokeStyle=GOLD;x.lineWidth=6;x.beginPath();x.moveTo(-96,-166);x.lineTo(-34,-200);x.stroke();x.fillStyle='#4A3A2A';x.fillRect(-10,-10,60,10);x.restore()}
function clayMug(x,cx,base,s){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='#A0522D';x.beginPath();x.moveTo(-60,0);x.quadraticCurveTo(-76,-80,-56,-150);x.lineTo(56,-150);x.quadraticCurveTo(76,-80,60,0);x.closePath();x.fill();
 x.strokeStyle='#A0522D';x.lineWidth=16;x.beginPath();x.moveTo(60,-120);x.quadraticCurveTo(120,-90,62,-40);x.stroke();x.fillStyle='#5A2A14';x.beginPath();x.ellipse(0,-150,56,12,0,0,7);x.fill();x.fillStyle='rgba(255,220,180,.2)';x.fillRect(-60,-110,120,6);x.restore()}
function pewterMug(x,cx,base,s){x.save();x.translate(cx,base);x.scale(s,s);const g=x.createLinearGradient(-60,0,60,0);g.addColorStop(0,'#6A6E74');g.addColorStop(.4,'#C8CCD0');g.addColorStop(1,'#5A5E64');x.fillStyle=g;x.beginPath();x.moveTo(-58,0);x.lineTo(-50,-160);x.lineTo(50,-160);x.lineTo(58,0);x.closePath();x.fill();
 x.strokeStyle='#8A8E94';x.lineWidth=14;x.beginPath();x.moveTo(52,-140);x.quadraticCurveTo(110,-110,56,-36);x.stroke();x.fillStyle='#9A9EA4';x.beginPath();x.ellipse(0,-162,54,12,0,0,7);x.fill();x.fillStyle='#4A4E54';x.fillRect(-58,-20,116,8);x.fillRect(-52,-140,104,6);x.restore()}
function shelfBoard(x,x0,x1,y){x.fillStyle='#4A2414';x.fillRect(x0,y,x1-x0,22);x.fillStyle='rgba(255,200,140,.25)';x.fillRect(x0,y,x1-x0,3);x.fillStyle='#2A140A';for(const k of [x0+40,x1-60])x.fillRect(k,y+22,20,60)}
// ---------- mapa: Veneza → ilha de Murano ----------
function veniceMap(x,cx,cy,s,u,t){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#1E3A4A';x.beginPath();x.roundRect(-420,-260,840,520,30);x.fill();x.strokeStyle=GOLD;x.lineWidth=5;x.stroke();
 x.strokeStyle='rgba(180,220,240,.18)';x.lineWidth=2;for(let i=0;i<9;i++){x.beginPath();x.moveTo(-400,-220+i*55+Math.sin(t*1.5+i)*4);x.quadraticCurveTo(0,-230+i*55,400,-220+i*55-Math.sin(t*1.5+i)*4);x.stroke()}
 // Veneza (peixe) e Murano (ilha ao norte)
 x.fillStyle='#C9A878';x.beginPath();x.moveTo(-260,110);x.quadraticCurveTo(-140,10,40,40);x.quadraticCurveTo(180,60,220,120);x.quadraticCurveTo(120,190,-80,170);x.quadraticCurveTo(-200,160,-260,110);x.fill();
 x.strokeStyle='#1E3A4A';x.lineWidth=7;x.beginPath();x.moveTo(-200,120);x.bezierCurveTo(-100,70,-20,170,60,100);x.bezierCurveTo(110,70,150,120,190,110);x.stroke();
 x.fillStyle='#C9A878';x.beginPath();x.ellipse(120,-150,90,50,-.2,0,7);x.fill();x.fillStyle='#B89868';x.beginPath();x.ellipse(160,-140,30,20,0,0,7);x.fill();
 x.font='900 40px Cinzel';x.textAlign='center';x.fillStyle=GOLD2;x.fillText('VENEZA',-40,230);x.fillText('MURANO',120,-220);
 if(u>0){x.strokeStyle=GOLD2;x.lineWidth=7;x.setLineDash([18,12]);x.beginPath();x.moveTo(-20,60);x.quadraticCurveTo(-60,-60,120*u+(-20)*(1-u)+0,lerp(60,-110,u));x.stroke();x.setLineDash([])}
 x.restore()}
function furnaceIcon(x,cx,base,s,t,a=1){if(a<=0)return;x.save();x.globalAlpha=a;x.translate(cx,base);x.scale(s,s);x.fillStyle='#4A2A1E';x.beginPath();x.moveTo(-60,0);x.lineTo(-60,-80);x.quadraticCurveTo(0,-140,60,-80);x.lineTo(60,0);x.closePath();x.fill();x.fillRect(16,-150,22,50);
 const fl=.8+.2*Math.sin(t*9);const g=x.createRadialGradient(0,-40,4,0,-40,46);g.addColorStop(0,`rgba(255,240,170,${fl})`);g.addColorStop(1,'rgba(200,60,10,.9)');x.fillStyle=g;x.beginPath();x.moveTo(-30,0);x.lineTo(-30,-50);x.quadraticCurveTo(0,-80,30,-50);x.lineTo(30,0);x.closePath();x.fill();x.restore()}
function padlock(x,cx,cy,s,a=1,shut=1){if(a<=0)return;x.save();x.globalAlpha=a;x.translate(cx,cy);x.scale(s,s);x.strokeStyle='#B8B8B8';x.lineWidth=18;x.beginPath();x.arc(0,-40-(1-shut)*30,46,Math.PI,0);x.lineTo(46,-(1-shut)*30);x.moveTo(-46,-40-(1-shut)*30);x.lineTo(-46,-10);x.stroke();
 x.fillStyle=GOLD;x.beginPath();x.roundRect(-74,-20,148,120,16);x.fill();x.fillStyle='#2A0A10';x.beginPath();x.arc(0,26,14,0,7);x.fill();x.fillRect(-5,30,10,34);x.restore()}
function coin(x,cx,cy,r){x.save();x.fillStyle='#B8832E';x.beginPath();x.ellipse(cx,cy+4,r,r*.4,0,0,7);x.fill();x.fillStyle=GOLD2;x.beginPath();x.ellipse(cx,cy,r,r*.4,0,0,7);x.fill();x.strokeStyle='#B8832E';x.lineWidth=2;x.beginPath();x.ellipse(cx,cy,r*.7,r*.28,0,0,7);x.stroke();x.restore()}
function coinStack(x,cx,base,n,r=34){for(let i=0;i<n;i++)coin(x,cx+((i*7)%5-2),base-i*12,r)}
// ---------- ciência ----------
function tongueMap(x,cx,cy,s,legend=1,all=0){x.save();x.translate(cx,cy);x.scale(s,s);const g=x.createRadialGradient(0,-40,20,0,0,260);g.addColorStop(0,'#E88A94');g.addColorStop(1,'#B8505E');x.fillStyle=g;
 x.beginPath();x.moveTo(-150,-210);x.quadraticCurveTo(-190,40,-110,170);x.quadraticCurveTo(0,280,110,170);x.quadraticCurveTo(190,40,150,-210);x.quadraticCurveTo(0,-250,-150,-210);x.fill();
 x.strokeStyle='rgba(120,30,40,.5)';x.lineWidth=5;x.beginPath();x.moveTo(0,-220);x.lineTo(0,140);x.stroke();
 if(legend>0){x.save();x.globalAlpha=legend*(1-all);x.lineWidth=4;x.setLineDash([10,8]);x.strokeStyle='#FFF0D8';x.font='700 30px Cinzel';x.textAlign='center';x.fillStyle='#FFF0D8';
  for(const [lx,ly,w,h,txt] of [[0,170,150,70,'DOCE'],[-120,30,80,150,'SALGADO'],[120,30,80,150,'AZEDO'],[0,-170,220,70,'AMARGO']]){x.beginPath();x.ellipse(lx,ly,w/2,h/2,0,0,7);x.stroke()}
  x.setLineDash([]);x.fillText('DOCE',0,180);x.fillText('AMARGO',0,-160);x.save();x.translate(-120,30);x.rotate(-Math.PI/2);x.fillText('SALGADO',0,10);x.restore();x.save();x.translate(120,30);x.rotate(Math.PI/2);x.fillText('AZEDO',0,10);x.restore();x.restore()}
 if(all>0){x.save();x.globalAlpha=all*.55;const r=rng(4);x.fillStyle='#FFF0D8';for(let i=0;i<70;i++){const px=(r()-.5)*260,py=-200+r()*360;if(Math.abs(px)<150-Math.max(0,py-60)*.3){x.beginPath();x.arc(px,py,5,0,7);x.fill()}}x.restore()}
 x.restore()}
// copo reto (comparação do estudo)
function straightCup(x,cx,base,s,lv=.5){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='rgba(0,0,0,.3)';x.beginPath();x.ellipse(0,3,50,8,0,0,7);x.fill();
 x.fillStyle='rgba(255,236,210,.15)';x.beginPath();x.moveTo(-44,0);x.lineTo(-50,-190);x.lineTo(50,-190);x.lineTo(44,0);x.closePath();x.fill();x.strokeStyle='rgba(255,240,220,.6)';x.lineWidth=3;x.stroke();
 x.fillStyle='#6E1630';x.beginPath();x.moveTo(-44,-4);x.lineTo(-46-6*lv,-8-150*lv);x.lineTo(46+6*lv,-8-150*lv);x.lineTo(44,-4);x.closePath();x.fill();x.restore()}
// vista de cima da taça: anel de vapor de álcool (dourado) na borda e centro escuro; ring 0..1
function topView(x,cx,cy,r,ring,t){x.save();x.translate(cx,cy);x.fillStyle='rgba(245,232,210,.18)';x.beginPath();x.arc(0,0,r+18,0,7);x.fill();x.strokeStyle='rgba(255,240,220,.7)';x.lineWidth=6;x.beginPath();x.arc(0,0,r+18,0,7);x.stroke();
 x.fillStyle='#3A0A18';x.beginPath();x.arc(0,0,r,0,7);x.fill();
 // vapor: com anel (frio) ou espalhado (quente)
 const g=x.createRadialGradient(0,0,r*.45*ring+r*.05,0,0,r);g.addColorStop(0,`rgba(255,200,90,${.55*(1-ring)})`);g.addColorStop(Math.max(.05,.62*ring),`rgba(255,200,90,${.35*(1-ring)})`);g.addColorStop(.9,`rgba(255,210,100,${.15+.75*ring})`);g.addColorStop(1,`rgba(255,220,120,${.1+.6*ring})`);x.fillStyle=g;x.beginPath();x.arc(0,0,r,0,7);x.fill();
 const rr=rng(8);x.fillStyle=`rgba(255,235,170,${.5})`;for(let i=0;i<40;i++){const a=rr()*7+t*.4,d=ring>.5?r*(.75+rr()*.22):r*rr()*.95;x.beginPath();x.arc(Math.cos(a)*d,Math.sin(a)*d,3,0,7);x.fill()}
 x.restore()}
// mão genérica (de um cliente, NÃO do Sommelier) segurando a taça pelo bojo: manga azul, dedos em volta do vidro
const GUEST_H={hand:'#C99877',finger:'#7A4A30'};
function bowlGrip(x,bx,by,s,heat,prints,t){glassW(x,bx,by,s,.4,'#6E1630');x.save();x.translate(bx,by);x.scale(s,s);
 // calor vindo da mão
 if(heat>0){const g=x.createRadialGradient(0,-110,4,0,-110,90);g.addColorStop(0,`rgba(255,120,40,${.55*heat})`);g.addColorStop(1,'rgba(255,120,40,0)');x.fillStyle=g;x.beginPath();x.arc(0,-110,90,0,7);x.fill();
  x.strokeStyle=`rgba(255,170,90,${.7*heat})`;x.lineWidth=3;for(let k=0;k<3;k++){const yy=-190-((t*40+k*22)%60);x.beginPath();x.moveTo(-20+k*20,yy);x.quadraticCurveTo(-10+k*20,yy-12,-20+k*20,yy-24);x.stroke()}}
 // digitais no vidro (lado esquerdo, onde a mão já esteve)
 if(prints>0){x.save();x.globalAlpha=prints*.75;x.strokeStyle='rgba(255,250,240,.9)';x.lineWidth=1.3;for(const [px,py] of [[-26,-150],[-12,-160],[24,-152]])for(let k=1;k<5;k++){x.beginPath();x.ellipse(px,py,k*2.4,k*3.2,.2,0,7);x.stroke()}x.restore()}
 // mão: palma atrás, dedos na frente do bojo
 x.fillStyle='#2B4A7A';x.beginPath();x.roundRect(40,-60,170,64,20);x.fill();x.fillStyle='#E9E2D2';x.fillRect(40,-60,18,64);
 x.fillStyle=GUEST_H.hand;x.beginPath();x.roundRect(14,-118,52,86,20);x.fill();
 for(let i=0;i<4;i++){x.beginPath();x.roundRect(-46+i*3,-130+i*16,86-i*3,15,7.5);x.fill()}x.beginPath();x.roundRect(10,-146,22,52,11);x.fill()
 x.strokeStyle=GUEST_H.finger;x.lineWidth=1.6;for(let i=0;i<3;i++){x.beginPath();x.moveTo(-40+i*3,-115+i*16);x.lineTo(20,-115+i*16);x.stroke()}
 x.restore()}
// copo americano (1947): copo baixo de vidro facetado (gomos), com vinho
function copoAmericano(x,cx,base,s,lv=.6){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='rgba(0,0,0,.35)';x.beginPath();x.ellipse(0,3,62,10,0,0,7);x.fill();
 const body=()=>{x.beginPath();x.moveTo(-48,0);x.lineTo(-62,-150);x.lineTo(-60,-176);x.lineTo(60,-176);x.lineTo(62,-150);x.lineTo(48,0);x.closePath()};
 x.save();body();x.clip();x.fillStyle='rgba(255,236,210,.14)';x.fillRect(-70,-180,140,180);x.fillStyle='#6E1630';x.fillRect(-70,-8-130*lv,140,140);x.fillStyle='rgba(255,220,200,.3)';x.fillRect(-70,-8-130*lv,140,4);
 x.strokeStyle='rgba(255,245,230,.45)';x.lineWidth=2.5;for(let i=-5;i<=5;i++){x.beginPath();x.moveTo(i*11,-6);x.lineTo(i*12.6,-148);x.stroke()}x.restore();
 body();x.strokeStyle='rgba(255,245,230,.75)';x.lineWidth=3;x.stroke();x.beginPath();x.moveTo(-62,-150);x.lineTo(62,-150);x.stroke();x.restore()}
// boteco: parede de azulejo, prateleira com garrafas, balcão de fórmica
function boteco(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1A0A0E');g.addColorStop(1,'#2C1014');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='rgba(243,230,200,.06)';for(let r=0;r<14;r++)for(let c=-6;c<28;c++)x.fillRect(c*80+2,r*80-200+2,76,76);
 x.fillStyle='#4A2414';x.fillRect(200,330,1520,18);for(let i=0;i<12;i++)oldBottle(x,260+i*125,330,.48,i%3==1?'white':'red');
 const gr=x.createRadialGradient(960,120,10,960,120,700);gr.addColorStop(0,'rgba(255,220,150,.25)');gr.addColorStop(1,'rgba(255,220,150,0)');x.fillStyle=gr;x.fillRect(0,-200,1920,1100)}
function botecoFront(f){let g=f.createLinearGradient(0,800,0,1200);g.addColorStop(0,'#C9B48A');g.addColorStop(.04,'#8E1B3A');g.addColorStop(1,'#3A0A14');f.fillStyle=g;f.fillRect(-900,800,W+1800,600);f.fillStyle='rgba(255,240,220,.5)';f.fillRect(-900,800,W+1800,4)}
// fileira de taças diferentes (uma para cada uva)
function glassRow(x,cx,base,s,a){const K=[[0,1.15,.42,'#6E1630'],[1,1.0,.4,'#6E1630'],[2,.95,.4,'#E8C870'],[3,1.05,.5,'#F0D890'],[4,1.05,.4,'#6E1630']];
 K.forEach(([i,sc,lv,col],k)=>{const al=clamp(a*5-k);if(al<=0)return;x.save();x.globalAlpha=al;const px=cx+(k-2)*200;
  if(i==0){x.save();x.translate(px,base);x.scale(1.25,1);x.translate(-px,-base);glassW(x,px,base,s*1.12,lv,col);x.restore()}
  else if(i==2)glassW(x,px,base,s*1.15,.5,col,true);else if(i==3)glassW(x,px,base,s*.86,lv,col);else glassW(x,px,base,s*sc,lv,col);x.restore()})}
