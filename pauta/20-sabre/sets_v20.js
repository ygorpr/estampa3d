// ===== Vídeo 20 — cenários e personagens novos: gargalo em close (costura + anel), pressão, campo do séc. XIX com château, hussardo a cavalo, Madame Clicquot, praça de Garibaldi, festeiros, dentista suíço e tabeliães =====
// SEGURANÇA na tela: o sabre e o gargalo sempre apontam para o lado VAZIO da tela, nunca para alguém nem para o espectador.
// gargalo em close, deitado na horizontal (boca para a direita): costura (seam) e anel (ring); u = trinca dando a volta; fly = topo voando
function neckClose(g,cx,cy,s,o={}){g.save();g.translate(cx,cy);g.scale(s,s);const seam=o.seam||0,ring=o.ring||0,crack=o.crack||0,fly=o.fly||0;
 // vidro verde-escuro
 g.fillStyle='#1E3A2C';g.beginPath();g.moveTo(-700,-150);g.quadraticCurveTo(-420,-150,-300,-80);g.lineTo(150,-70);g.lineTo(150,70);g.lineTo(-300,80);g.quadraticCurveTo(-420,150,-700,150);g.closePath();g.fill();
 g.fillStyle='rgba(255,255,255,.12)';g.fillRect(-680,-120,830,22);
 // cápsula dourada recuada
 g.fillStyle='#B8902E';g.fillRect(-420,-96,120,192);
 if(fly<=0){g.fillStyle='#2A4A38';g.beginPath();g.roundRect(150,-92,70,184,14);g.fill();g.fillStyle='#C9A76A';g.fillRect(220,-60,40,120)}
 // costura (linha fina que sobe pela lateral)
 if(seam>0){g.strokeStyle=`rgba(255,215,120,${seam})`;g.lineWidth=6;g.beginPath();g.moveTo(-700,0);g.lineTo(150,0);g.stroke();g.shadowColor='rgba(255,210,120,.8)';g.shadowBlur=18*seam;g.stroke();g.shadowBlur=0}
 if(ring>0){g.strokeStyle=`rgba(255,215,120,${ring})`;g.lineWidth=8;g.beginPath();g.roundRect(150,-92,70,184,14);g.stroke()}
 if(o.weak>0){g.fillStyle=`rgba(200,30,50,${o.weak*(.6+.4*Math.sin((o.t||0)*8))})`;g.beginPath();g.arc(150,0,28,0,7);g.fill()}
 if(crack>0){g.strokeStyle='rgba(240,250,255,.95)';g.lineWidth=5;g.beginPath();g.moveTo(140,-90);for(let i=0;i<=10;i++){const yy=-90+i*18*crack;g.lineTo(140+(i%2?8:-6),yy)}g.stroke()}
 g.restore();
 if(fly>0){const fx=cx+(260+fly*620)*s,fy=cy-fly*fly*120*s;g.save();g.translate(fx,fy);g.rotate(fly*5);g.scale(s,s);g.fillStyle='#2A4A38';g.beginPath();g.roundRect(-35,-92,70,184,14);g.fill();g.fillStyle='#C9A76A';g.fillRect(35,-60,50,120);g.restore();
  g.save();g.globalAlpha*=.8;g.fillStyle='rgba(250,245,230,.85)';const r=rng(3);for(let i=0;i<26;i++){g.beginPath();g.arc(cx+(170+r()*fly*560)*s,cy+(r()-.5)*160*s*fly,(6+r()*14)*s,0,7);g.fill()}g.restore()}}
// garrafa em corte com setinhas de pressão
function pressureBottle(g,cx,base,s,t,a=1){g.save();g.translate(cx,base);g.scale(s,s);g.fillStyle='rgba(30,58,44,.85)';g.beginPath();g.moveTo(-80,0);g.lineTo(-80,-300);g.quadraticCurveTo(-80,-370,-26,-400);g.lineTo(-26,-520);g.lineTo(26,-520);g.lineTo(26,-400);g.quadraticCurveTo(80,-370,80,-300);g.lineTo(80,0);g.closePath();g.fill();
 g.save();g.beginPath();g.rect(-70,-390,140,385);g.clip();g.fillStyle='rgba(242,214,140,.6)';g.fillRect(-70,-330,140,330);g.fillStyle='rgba(255,255,255,.7)';for(let i=0;i<24;i++){const by=-((t*80+i*41)%330);g.beginPath();g.arc(-55+(i*37)%110,by,3,0,7);g.fill()}g.restore();
 g.strokeStyle=`rgba(255,215,120,${a})`;g.fillStyle=`rgba(255,215,120,${a})`;g.lineWidth=6;const k=6+Math.sin(t*6)*4;
 for(const [x0,y0,dx,dy] of [[0,-200,-1,0],[0,-200,1,0],[0,-120,-1,0],[0,-120,1,0],[0,-280,-1,0],[0,-280,1,0],[0,-360,0,-1]]){const x1=x0+dx*(50+k),y1=y0+dy*(50+k);arrow(g,x0+dx*20,y0+dy*20,x1+dx*40,y1+dy*40,`rgba(255,215,120,${a})`,5)}
 g.restore()}
// campo do século XIX ao entardecer com château e janela iluminada
function fieldChateau(x,t){let g=x.createLinearGradient(0,-300,0,700);g.addColorStop(0,'#2A0B24');g.addColorStop(.6,'#8A3A3A');g.addColorStop(1,'#F0A060');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='#3A2A2A';x.fillRect(1180,300,520,340);x.beginPath();x.moveTo(1150,310);x.lineTo(1440,150);x.lineTo(1730,310);x.fill();for(const tx of [1200,1680]){x.fillRect(tx-40,220,80,420);x.beginPath();x.moveTo(tx-50,230);x.lineTo(tx,120);x.lineTo(tx+50,230);x.fill()}
 x.fillStyle='rgba(255,200,120,.85)';for(let i=0;i<4;i++)x.fillRect(1260+i*110,400,50,80);
 x.fillStyle='#4A3A22';x.beginPath();x.moveTo(-900,640);x.quadraticCurveTo(800,560,W+900,640);x.lineTo(W+900,1100);x.lineTo(-900,1100);x.fill();
 for(let r=0;r<3;r++){x.strokeStyle='#3E5A2E';x.lineWidth=14;x.setLineDash([22,14]);x.beginPath();x.moveTo(-900,700+r*60);x.lineTo(W+900,690+r*60);x.stroke()}x.setLineDash([])}
// cavalo (de lado, virado para a esquerda: o lado vazio), patas que se movem
function horse(g,cx,base,s,t,trot=1){g.save();g.translate(cx,base);g.scale(-s,s);const ph=t*6*trot;
 g.strokeStyle='#4A2A18';g.lineCap='round';for(const [lx,o] of [[-120,0],[-90,Math.PI],[110,Math.PI/2],[140,Math.PI*1.5]]){const a=Math.sin(ph+o)*.35;g.lineWidth=24;g.beginPath();g.moveTo(lx,-200);const kx=lx+Math.sin(a)*70,ky=-200+Math.cos(a)*90;g.lineTo(kx,ky);g.lineTo(kx+Math.sin(a*1.4)*20,-10);g.stroke();g.fillStyle='#1A100A';g.fillRect(kx+Math.sin(a*1.4)*20-16,-18,32,18)}
 g.fillStyle='#5A3220';g.beginPath();g.ellipse(0,-250,190,80,0,0,7);g.fill();g.beginPath();g.moveTo(140,-290);g.quadraticCurveTo(210,-420,260,-430);g.lineTo(330,-380);g.quadraticCurveTo(300,-350,240,-360);g.quadraticCurveTo(210,-300,190,-220);g.closePath();g.fill();
 g.fillStyle='#2A160C';g.beginPath();g.moveTo(150,-300);g.quadraticCurveTo(200,-430,250,-440);g.lineTo(230,-400);g.quadraticCurveTo(190,-330,175,-280);g.fill();g.beginPath();g.moveTo(-185,-270);g.quadraticCurveTo(-260,-200+Math.sin(ph)*10,-240,-120);g.lineTo(-210,-200);g.fill();
 g.fillStyle='#1A100A';g.beginPath();g.arc(290,-405,7,0,7);g.fill();g.fillStyle='#8E1B3A';g.fillRect(-70,-330,150,60);g.strokeStyle='#D4A24C';g.lineWidth=5;g.strokeRect(-70,-330,150,60);
 g.strokeStyle='#2A1A10';g.lineWidth=4;g.beginPath();g.moveTo(300,-390);g.lineTo(60,-330);g.stroke();g.restore()}
const HUSSAR=CHX({cloth:'#1E3A7A',hood:'#122458',outfit:'blazer',shirt:'#1E3A7A',collar:'#D4A24C',btn:'#D4A24C',leg:'#C8213F',short:'#2A1A12',beard:'#2A1A12',beardT:'mustache',skin:'#E2B890',hand:'#E2B890'});
// hussardo montado: o sabre erguido para o alto (para o céu, nunca para alguém)
function hussar(g,cx,base,s,t){horse(g,cx,base,s*1.45,t,.6);const up=.5+.5*Math.sin(t*1.5);return npc(g,cx-10*s,base-200*s,s*.95,t,{ch:HUSSAR,face:-1,look:-.4,mouth:.8,brow:.6,hat:'shako',frogs:1,noLegs:true,hands:{l:[-60,150,120],r:[-150,-110-30*up,90]},
 hold:(x,hl,hr)=>{sabre(x,hr[0],hr[1],-1.9,.8,280)}})}
const CLICQ=CHX({cloth:'#16141A',hood:'#0C0A10',hair:'#5A4030',skin:'#EAC8A8',hand:'#EAC8A8'});
function clicquotWindow(g,cx,cy,s,t){g.save();g.fillStyle='#E8B060';g.fillRect(cx-140*s,cy-170*s,280*s,340*s);g.beginPath();g.rect(cx-140*s,cy-170*s,280*s,340*s);g.clip();npc(g,cx,cy+330*s,s*.7,t,{ch:CLICQ,hat:'bonnet',shawl:'#3A3440',look:-.3,mouth:.5,noLegs:true,hands:{l:[-60,150,120],r:[60,150,120]}});g.restore();
 g.strokeStyle='#3A2418';g.lineWidth=12*s;g.strokeRect(cx-140*s,cy-170*s,280*s,340*s);g.beginPath();g.moveTo(cx,cy-170*s);g.lineTo(cx,cy+170*s);g.stroke()}
// praça de festa (Garibaldi): bandeirolas, pórtico, céu de fim de tarde
function festaSquare(x,t){let g=x.createLinearGradient(0,-300,0,700);g.addColorStop(0,'#2A1430');g.addColorStop(1,'#E8894E');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='#3A1A22';for(let i=0;i<7;i++){const bx=-60+i*300;x.fillRect(bx,320,240,380);x.beginPath();x.moveTo(bx-20,330);x.lineTo(bx+120,240);x.lineTo(bx+260,330);x.fill();x.fillStyle='rgba(255,200,120,.75)';x.fillRect(bx+40,420,50,70);x.fillRect(bx+150,420,50,70);x.fillStyle='#3A1A22'}
 for(let k=0;k<3;k++){x.strokeStyle='rgba(30,10,14,.7)';x.lineWidth=3;x.beginPath();x.moveTo(-100,140+k*60);x.quadraticCurveTo(960,240+k*60,2020,140+k*60);x.stroke();
  for(let i=0;i<24;i++){const u=i/23,px=-100+u*2120,py=140+k*60+Math.sin(u*Math.PI)*100;x.fillStyle=['#C8213F','#F2D13A','#1E8A3A','#2A6AC8'][(i+k)%4];x.beginPath();x.moveTo(px-14,py);x.lineTo(px+14,py);x.lineTo(px,py+32+Math.sin(t*3+i)*3);x.closePath();x.fill()}}
 x.fillStyle='#4A3A30';x.fillRect(-900,700,W+1800,500)}
// fila de festeiros, todos com a garrafa inclinada para o MESMO lado vazio (a direita), sabre encostado na garrafa
const FEST=[['#C8213F','#3A2A22',null],['#2A6AC8','#1A1410','#2A1A12'],['#F2A23A','#5A3A22',null],['#1E8A3A','#2A1A12','#6A4A2A'],['#8E1B3A','#3A2A22',null],['#E9DCC0','#1A1410','#3A2A1E']];
function festeiros(g,x0,base,s,t,n=6,pop=0){for(let i=0;i<n;i++){const [cl,hr,bd]=FEST[i%FEST.length],woman=i%2==0;const ch=CHX(Object.assign({cloth:cl,hood:'rgba(0,0,0,.25)',outfit:'shirt',collar:'rgba(0,0,0,.2)',leg:'#2A2A3A'},woman?{hair:hr}:{short:hr,beard:bd,beardT:'short'}));
 npc(g,x0+i*230*s/.5,base,s,t,{ch,ph:i,face:1,look:.4,mouth:.7,hands:{l:[80,170,130],r:[200,120,110]},
  hold:(x,hl,hr2)=>{champBottle(x,hl[0],hl[1]+30,.32,.3,pop>i/n?1:0);sabre(x,hr2[0]-20,hr2[1],-1.27,.4,170);if(pop>i/n&&pop<i/n+.4)flyTop(x,hl[0]+60,hl[1]-200,.5,.3)}})}}
const DENT=LABCOAT({short:'#7A7A7A',temples:'#B0B0B0'}),TAB=CHX({cloth:'#1E1C24',hood:'#121018',outfit:'blazer',shirt:'#F4F0E8',collar:'#F4F0E8',tie:'#3A3440',leg:'#1E1C24'});
function dentist(g,cx,base,s,t){return npc(g,cx,base,s,t,{ch:DENT,specs:1,look:.5,mouth:.7,brow:.6,hands:{l:[60,170,120],r:[190,110,100]},hold:(x,hl,hr)=>{champBottle(x,hl[0],hl[1]+30,.4,.9);sabre(x,hr[0]-30,hr[1],-.65,.5,200)}})}
function notary(g,cx,base,s,t,ph){return npc(g,cx,base,s,t,{ch:Object.assign({},TAB,{short:ph?'#2A1A12':'#6A6A6A'}),ph,face:1,look:.45,lookY:.3,mouth:.2,hands:{l:[-60,150,120],r:[70,150,120]},hold:(x,hl,hr)=>{x.fillStyle='#E9DCC0';x.fillRect(hl[0]-10,hl[1]-70,90,110);x.fillStyle='#5A3A1E';x.fillRect(hl[0]-10,hl[1]-74,90,10)}})}
function stopwatch(g,cx,cy,r,u){g.save();g.fillStyle='#F3E6C8';g.beginPath();g.arc(cx,cy,r,0,7);g.fill();g.strokeStyle='#D4A24C';g.lineWidth=10;g.stroke();g.fillStyle='#D4A24C';g.fillRect(cx-14,cy-r-30,28,30);
 g.fillStyle='rgba(176,18,46,.35)';g.beginPath();g.moveTo(cx,cy);g.arc(cx,cy,r-12,-Math.PI/2,-Math.PI/2+u*Math.PI*2);g.closePath();g.fill();g.strokeStyle='#5E1428';g.lineWidth=6;g.beginPath();g.moveTo(cx,cy);g.lineTo(cx+Math.cos(-Math.PI/2+u*6.283)*(r-20),cy+Math.sin(-Math.PI/2+u*6.283)*(r-20));g.stroke();g.restore()}
function recordBook(g,cx,cy,s,open){g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle='#8E1B3A';g.beginPath();g.roundRect(-210,-160,420,320,12);g.fill();
 if(open>0){g.globalAlpha*=open;g.fillStyle='#F4ECD8';g.fillRect(-196,-146,190,292);g.fillRect(6,-146,190,292);g.strokeStyle='rgba(0,0,0,.2)';g.lineWidth=3;g.beginPath();g.moveTo(0,-150);g.lineTo(0,150);g.stroke();
  goldText(g,'RECORDES',-100,-100,28,'Cinzel',900);g.fillStyle='#5E1428';g.font='600 30px Cormorant';g.textAlign='center';g.fillText('196 pessoas',100,-20);g.fillText('Garibaldi',100,20);g.fillText('2013',100,60)}
 else{goldText(g,'RECORDES',0,0,40,'Cinzel',900)}g.restore()}
function spoon(g,cx,cy,s,rot){g.save();g.translate(cx,cy);g.rotate(rot);g.scale(s,s);g.fillStyle='#C9CDD2';g.beginPath();g.ellipse(0,0,40,56,0,0,7);g.fill();g.fillRect(-9,40,18,220);g.fillStyle='rgba(255,255,255,.5)';g.beginPath();g.ellipse(-12,-14,10,20,0,0,7);g.fill();g.restore()}
function fireworks(g,t){for(let i=0;i<4;i++){const cx=300+i*450,cy=200+(i%2)*80,u=((t*.5+i*.27)%1),r=40+u*140;g.save();g.globalAlpha*=1-u;g.strokeStyle=['#F2D27A','#C8213F','#F4F0E8','#D4A24C'][i];g.lineWidth=4;for(let k=0;k<14;k++){const a=k*.449;g.beginPath();g.moveTo(cx+Math.cos(a)*r*.6,cy+Math.sin(a)*r*.6);g.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r);g.stroke()}g.restore()}}
function chillBottle(g,cx,base,s,cold){champBottle(g,cx,base,s,0,0);g.save();g.globalAlpha*=cold;g.fillStyle='rgba(200,230,255,.5)';for(let i=0;i<20;i++){g.beginPath();g.arc(cx+((i*37)%70-35)*s,base-(40+(i*53)%240)*s,4*s,0,7);g.fill()}g.restore()}
