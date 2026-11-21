// ===== Vídeo 33 — Por que o champanhe tem uma gaiolinha de arame? — desenhos das cenas =====
// personagens extras (mesmo rig do Sommelier): adegueiro do séc. XVIII, Adolphe Jacquesson (1844), colecionador, mecânico
const ADEGUEIRO=CHX({cloth:'#D8C8A8',hood:'#B8A888',outfit:'apron',apron:'#8A6A44',collar:'#C8B898',short:'#4A3A2A',beard:'#4A3A2A',beardT:'mustache',leg:'#4A3A2A',skin:'#DDAE86',hand:'#DDAE86'});
const JACQ=CHX({cloth:'#1E1A22',hood:'#121016',outfit:'blazer',shirt:'#8A8A90',collar:'#F4F0E8',bow:'#F4F0E8',short:'#9A9A9A',temples:'#C8C8C8',beard:'#9A9A9A',beardT:'short',leg:'#1E1A22',skin:'#E6BF98',hand:'#E6BF98'});
const COLEC=CHX({cloth:'#2E5A3A',hood:'#1E3E28',outfit:'blazer',shirt:'#F4F0E8',collar:'#F4F0E8',btn:'#D4A24C',bald:1,sides:'#C8C8C8',leg:'#3A3030',skin:'#E8C4A0',hand:'#E8C4A0'});
const MECAN=CHX({cloth:'#2A4A7A',hood:'#1A3460',outfit:'shirt',collar:'#1A3460',short:'#2A1A12',leg:'#2A4A7A',skin:'#D9A880',hand:'#D9A880'});
// focinheira (cestinho de tiras de couro em volta de um focinho)
function muzzle(g,cx,cy,s,a=1){g.save();g.globalAlpha*=a;g.translate(cx,cy);g.scale(s,s);g.strokeStyle='#6A4424';g.lineWidth=12;g.lineCap='round';
 g.beginPath();g.ellipse(0,0,90,60,0,0,7);g.stroke();g.beginPath();g.ellipse(130,0,40,34,0,0,7);g.stroke();for(const y of [-50,0,50]){g.beginPath();g.moveTo(0,y*.9);g.quadraticCurveTo(70,y*.6,130,y*.6);g.stroke()}
 g.strokeStyle='#8A6434';g.lineWidth=10;g.beginPath();g.moveTo(-90,0);g.quadraticCurveTo(-170,-90,-60,-140);g.stroke();g.fillStyle=GOLD;g.beginPath();g.arc(-90,0,12,0,7);g.fill();g.restore()}
// garrafa em corte com setinhas de pressão saindo do líquido
function pressureBottle(g,cx,base,s,t,a=1){gaiolaBottle(g,cx,base,s,0,{loop:.3});g.save();g.globalAlpha*=a;g.strokeStyle=GOLD2;g.fillStyle=GOLD2;g.lineWidth=5;
 for(let i=0;i<8;i++){const an=i/8*Math.PI*2,p=.5+.5*Math.sin(t*5+i),r0=50*s,r1=r0+(30+20*p)*s,cy=base-120*s;g.beginPath();g.moveTo(cx+Math.cos(an)*r0*.6,cy+Math.sin(an)*r0);g.lineTo(cx+Math.cos(an)*r1,cy+Math.sin(an)*r1*1.3);g.stroke()}
 g.restore()}
// mostrador com ponteiro (0..8 bar)
function gauge(g,cx,cy,r,v,label,a=1){if(a<=0)return;g.save();g.globalAlpha*=a;g.fillStyle='#F3E6C8';g.beginPath();g.arc(cx,cy,r,0,7);g.fill();g.strokeStyle=GOLD;g.lineWidth=8;g.stroke();
 g.strokeStyle='#5E1428';g.lineWidth=3;g.font=`900 ${r*.2}px Cinzel`;g.textAlign='center';g.textBaseline='middle';g.fillStyle='#5E1428';
 for(let k=0;k<=8;k++){const an=Math.PI*(.75+1.5*k/8);g.beginPath();g.moveTo(cx+Math.cos(an)*r*.78,cy+Math.sin(an)*r*.78);g.lineTo(cx+Math.cos(an)*r*.9,cy+Math.sin(an)*r*.9);g.stroke();if(k%2==0)g.fillText(String(k),cx+Math.cos(an)*r*.62,cy+Math.sin(an)*r*.62)}
 const an=Math.PI*(.75+1.5*v/8);g.strokeStyle='#B0122E';g.lineWidth=7;g.beginPath();g.moveTo(cx,cy);g.lineTo(cx+Math.cos(an)*r*.75,cy+Math.sin(an)*r*.75);g.stroke();g.fillStyle='#2A0A10';g.beginPath();g.arc(cx,cy,r*.1,0,7);g.fill();
 goldText(g,label,cx,cy+r+44,34,'Cinzel',900);g.restore()}
// calibrador de pneu na mão do mecânico
function tireGauge(g,hx,hy,s){g.save();g.translate(hx,hy);g.scale(s,s);g.fillStyle='#2A2A2E';g.fillRect(-8,-10,90,20);g.fillStyle='#C9CED4';g.beginPath();g.arc(100,0,26,0,7);g.fill();g.fillStyle='#F3E6C8';g.beginPath();g.arc(100,0,19,0,7);g.fill();g.restore()}
// adega antiga à luz de lampião (giz escurecido)
function oldCellar(x,t){cavaGiz(x,t,{well:-2000,niches:[200,1720],lamps:[]});x.fillStyle='rgba(20,8,4,.45)';x.fillRect(-900,-600,W+1800,1900);
 for(const lx of [620,1300]){const fl=.9+Math.sin(t*7+lx)*.06,gl=x.createRadialGradient(lx,260,6,lx,300,520);gl.addColorStop(0,`rgba(255,180,94,${.55*fl})`);gl.addColorStop(1,'rgba(255,170,80,0)');x.fillStyle=gl;x.fillRect(lx-520,-100,1040,1000);
  x.strokeStyle='#1A0C08';x.lineWidth=4;x.beginPath();x.moveTo(lx,-200);x.lineTo(lx,220);x.stroke();x.fillStyle='#2A1A10';x.fillRect(lx-26,220,52,70);x.fillStyle=`rgba(255,200,110,${fl})`;x.fillRect(lx-18,230,36,50)}}
function woodTable(f,cx,top,w){f.fillStyle='#5A3A22';f.fillRect(cx-w/2,top,w,26);f.fillStyle='#3A2414';f.fillRect(cx-w/2+20,top+26,w-40,260);f.fillStyle='rgba(0,0,0,.3)';f.fillRect(cx-w/2,top+26,w,8)}
// panelinha de cera vermelha sobre brasa
function waxPot(g,cx,base,t){g.save();for(let i=0;i<7;i++){g.fillStyle=i%2?'#FF7A2A':'#C83A14';g.beginPath();g.arc(cx-48+i*16,base-6,10+Math.sin(t*6+i)*2,0,7);g.fill()}
 g.fillStyle='#3A3236';g.beginPath();g.moveTo(cx-60,base-20);g.lineTo(cx+60,base-20);g.lineTo(cx+48,base-90);g.lineTo(cx-48,base-90);g.closePath();g.fill();g.fillStyle='#B0122E';g.beginPath();g.ellipse(cx,base-90,48,10,0,0,7);g.fill();
 g.strokeStyle='#3A3236';g.lineWidth=8;g.beginPath();g.moveTo(cx+48,base-70);g.lineTo(cx+110,base-84);g.stroke();g.restore()}
// rolha de cogumelo amarrada com barbante em X (vista no gargalo de uma garrafa antiga)
function tiedBottle(g,bx,base,s,tie=1,pop=0,t=0){g.save();g.translate(bx,base);g.scale(s,s);g.fillStyle='#1E2A1E';g.beginPath();g.moveTo(-42,0);g.lineTo(-42,-160);g.bezierCurveTo(-42,-210,-16,-220,-15,-262);g.lineTo(-15,-288);g.lineTo(15,-288);g.lineTo(15,-262);g.bezierCurveTo(16,-220,42,-210,42,-160);g.lineTo(42,0);g.closePath();g.fill();
 g.fillStyle='rgba(255,220,150,.2)';g.fillRect(-30,-160,7,150);const cy=-300-pop*220,rot=pop*2.5;g.save();g.translate(0,cy);g.rotate(rot);g.fillStyle='#C9A060';g.beginPath();g.roundRect(-16,-6,32,30,4);g.fill();g.beginPath();g.ellipse(0,-6,22,12,0,0,7);g.fill();g.restore();
 if(tie>0){g.globalAlpha*=tie*(1-pop);g.strokeStyle='#E9D8B0';g.lineWidth=4;g.beginPath();g.moveTo(-22,-306);g.lineTo(18,-258);g.moveTo(22,-306);g.lineTo(-18,-258);g.stroke();g.beginPath();g.moveTo(-17,-262);g.lineTo(17,-262);g.stroke()}g.restore()}
// folha de lata na parede, brilhando quando o feixe bate
function tinSheet(g,cx,cy,w,h,shine){g.save();let gr=g.createLinearGradient(cx-w/2,cy-h/2,cx+w/2,cy+h/2);gr.addColorStop(0,'#8A8E94');gr.addColorStop(.5,`rgba(${200+55*shine|0},${205+50*shine|0},${210+40*shine|0},1)`);gr.addColorStop(1,'#6A6E74');g.fillStyle=gr;g.fillRect(cx-w/2,cy-h/2,w,h);
 g.strokeStyle='#4A4E54';g.lineWidth=3;g.strokeRect(cx-w/2,cy-h/2,w,h);if(shine>0){const gl=g.createRadialGradient(cx,cy,4,cx,cy,w*1.4);gl.addColorStop(0,`rgba(255,250,220,${.6*shine})`);gl.addColorStop(1,'rgba(255,250,220,0)');g.fillStyle=gl;g.fillRect(cx-w*1.4,cy-w*1.4,w*2.8,w*2.8)}g.restore()}
// rolha em cogumelo em "raio-X": cortiça, plaquinha em cima, amarra (barbante -> arame)
function xrayCork(g,cx,cy,s,u,t){g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle='rgba(120,200,255,.12)';g.strokeStyle='rgba(140,210,255,.7)';g.lineWidth=3;
 g.beginPath();g.moveTo(-60,260);g.lineTo(-60,80);g.lineTo(60,80);g.lineTo(60,260);g.stroke();g.fillStyle='#C9A060';g.beginPath();g.roundRect(-58,40,116,200,10);g.fill();g.beginPath();g.ellipse(0,40,84,50,0,0,7);g.fill();
 g.fillStyle='rgba(90,60,30,.4)';const R=rng(2);for(let i=0;i<40;i++){g.beginPath();g.arc(-50+R()*100,0+R()*230,2+R()*2,0,7);g.fill()}
 plaqueTop(g,0,-14,58);const col=u<.5?'#E9D8B0':GZ.wire,lw=u<.5?7:6;g.strokeStyle=col;g.lineWidth=lw;for(const k of [-1,1]){g.beginPath();g.moveTo(k*52,-10);g.quadraticCurveTo(k*90,60,k*66,130);g.stroke()}
 g.beginPath();g.ellipse(0,130,70,14,0,0,7);g.stroke();g.restore()}
// quadro de veludo com plaquinhas coloridas em fileiras
const PLC=['#D4A24C','#B0122E','#2A4A8A','#1E6A3A','#F3E6C8','#6A2A6A','#C87A2A','#3A3A3A','#8E1B3A','#4A8AB0'];
function velvetBoard(g,cx,cy,w,h,n=1){g.save();g.fillStyle='#5E1428';g.beginPath();g.roundRect(cx-w/2,cy-h/2,w,h,10);g.fill();g.strokeStyle='#8A5A2A';g.lineWidth=18;g.stroke();
 const cols=8,rows=5,R=rng(14);let k=0;for(let j=0;j<rows;j++)for(let i=0;i<cols;i++){if(k++>n*cols*rows)break;const px=cx-w/2+w*(i+.5)/cols,py=cy-h/2+h*(j+.5)/rows;plaqueTop(g,px,py,Math.min(w/cols,h/rows)*.36,PLC[(i*3+j*7)%PLC.length],PLC[(i+j*5+3)%PLC.length])}g.restore()}
// serra gaúcha: encosta com parreirais, casarão de pedra
function serraRS(x,t){let g=x.createLinearGradient(0,-300,0,560);g.addColorStop(0,'#7EA6C8');g.addColorStop(1,'#E8E2D2');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1200);
 x.fillStyle='#6E8A5A';x.beginPath();x.moveTo(-900,520);for(let i=0;i<=24;i++)x.lineTo(-900+i*170,340+Math.sin(i*.9)*90);x.lineTo(W+900,560);x.closePath();x.fill();
 g=x.createLinearGradient(0,420,0,1100);g.addColorStop(0,'#7A9A4A');g.addColorStop(1,'#4E6E2E');x.fillStyle=g;x.beginPath();x.moveTo(-900,560);x.quadraticCurveTo(960,380,W+900,600);x.lineTo(W+900,1300);x.lineTo(-900,1300);x.closePath();x.fill();
 for(let r=0;r<9;r++){const y=520+r*62;x.strokeStyle='#2E4A1E';x.lineWidth=6+r;x.setLineDash([18+r*4,10]);x.beginPath();x.moveTo(-900,y+80);x.quadraticCurveTo(960,y-40,W+900,y+90);x.stroke()}x.setLineDash([]);
 // casarão de pedra
 x.save();x.translate(1500,560);x.fillStyle='#9A8A74';x.fillRect(-170,-180,340,180);x.fillStyle='#7A6A54';const R=rng(6);for(let i=0;i<40;i++){x.fillRect(-160+R()*320,-170+R()*160,24,12)}
 x.fillStyle='#7A2A1E';x.beginPath();x.moveTo(-200,-180);x.lineTo(0,-280);x.lineTo(200,-180);x.closePath();x.fill();x.fillStyle='#3A2418';for(const k of [-110,0,110])x.fillRect(k-24,-130,48,64);x.fillRect(-30,-70,60,70);x.restore()}
// olho com X (cuidado com os olhos)
function eyeX(g,cx,cy,s,a=1){if(a<=0)return;g.save();g.globalAlpha*=a;g.translate(cx,cy);g.scale(s,s);g.fillStyle='#F3E6C8';g.beginPath();g.moveTo(-90,0);g.quadraticCurveTo(0,-70,90,0);g.quadraticCurveTo(0,70,-90,0);g.fill();
 g.fillStyle='#3A6A9A';g.beginPath();g.arc(0,0,30,0,7);g.fill();g.fillStyle='#120A0C';g.beginPath();g.arc(0,0,14,0,7);g.fill();g.strokeStyle='#B0122E';g.lineWidth=16;g.lineCap='round';g.beginPath();g.moveTo(-80,-70);g.lineTo(80,70);g.moveTo(80,-70);g.lineTo(-80,70);g.stroke();g.restore()}
// guardanapo branco cobrindo o topo da garrafa
function napkin(g,cx,cy,s,t){g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle='#F4F0E8';g.beginPath();g.moveTo(-30,-20);g.quadraticCurveTo(0,-44,30,-20);g.lineTo(48,60);g.quadraticCurveTo(10,48,0,70);g.quadraticCurveTo(-14,48,-48,60);g.closePath();g.fill();
 g.strokeStyle='rgba(0,0,0,.12)';g.lineWidth=3;for(const k of [-20,0,20]){g.beginPath();g.moveTo(k*.5,-20);g.lineTo(k,56);g.stroke()}g.restore()}
// miniatura do vídeo do sabre
function sabreThumb(g,cx,cy,w,a=1){if(a<=0)return;const h=w*.5625;g.save();g.globalAlpha*=a;g.fillStyle='#2A0A12';g.beginPath();g.roundRect(cx-w/2,cy-h/2,w,h,10);g.fill();g.save();g.beginPath();g.roundRect(cx-w/2,cy-h/2,w,h,10);g.clip();
 champBottle(g,cx+w*.12,cy+h*.42,.55,.6,0);sabre(g,cx-w*.1,cy-h*.05,-.5,.4,300);goldText(g,'O SABRE',cx-w*.24,cy-h*.3,w*.08,'Cinzel',900);g.restore();g.strokeStyle=GOLD;g.lineWidth=4;g.beginPath();g.roundRect(cx-w/2,cy-h/2,w,h,10);g.stroke();
 g.fillStyle='rgba(176,18,46,.9)';g.beginPath();g.moveTo(cx-18,cy-22);g.lineTo(cx+24,cy);g.lineTo(cx-18,cy+22);g.closePath();g.fill();g.restore()}
function flag(x,kind,cx,cy,w){const h=w*.66;x.save();x.translate(cx-w/2,cy-h/2);x.beginPath();x.rect(0,0,w,h);x.clip();
 if(kind=='br'){x.fillStyle='#1E8A3A';x.fillRect(0,0,w,h);x.fillStyle='#F2D13A';x.beginPath();x.moveTo(w*.08,h/2);x.lineTo(w/2,h*.1);x.lineTo(w*.92,h/2);x.lineTo(w/2,h*.9);x.closePath();x.fill();x.fillStyle='#1E3A8A';x.beginPath();x.arc(w/2,h/2,h*.24,0,7);x.fill();x.strokeStyle='#F3F0E6';x.lineWidth=h*.04;x.beginPath();x.arc(w/2,h*.75,h*.4,-2.3,-.84);x.stroke()}
 else if(kind=='uk'){x.fillStyle='#1E2E6A';x.fillRect(0,0,w,h);x.strokeStyle='#F3F0E6';x.lineWidth=h*.2;x.beginPath();x.moveTo(0,0);x.lineTo(w,h);x.moveTo(w,0);x.lineTo(0,h);x.stroke();x.strokeStyle='#C8213F';x.lineWidth=h*.07;x.stroke();x.strokeStyle='#F3F0E6';x.lineWidth=h*.32;x.beginPath();x.moveTo(w/2,0);x.lineTo(w/2,h);x.moveTo(0,h/2);x.lineTo(w,h/2);x.stroke();x.strokeStyle='#C8213F';x.lineWidth=h*.18;x.stroke()}
 else if(kind=='fr'){for(const [i,c] of [[0,'#1E3A8A'],[1,'#F3F0E6'],[2,'#C8213F']]){x.fillStyle=c;x.fillRect(i*w/3,0,w/3+1,h)}}
 else if(kind=='de'){for(const [i,c] of [[0,'#141414'],[1,'#C8213F'],[2,'#F2C12E']]){x.fillStyle=c;x.fillRect(0,i*h/3,w,h/3+1)}}
 x.restore();x.save();x.strokeStyle=GOLD;x.lineWidth=4;x.strokeRect(cx-w/2,cy-h/2,w,h);x.restore()}
