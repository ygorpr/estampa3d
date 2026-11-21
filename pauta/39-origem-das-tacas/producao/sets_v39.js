// ===== Vídeo 39 — De onde vem cada taça de vinho? — desenhos das cenas =====
// personagens extras (mesmo rig do Sommelier): cavalheiro inglês do séc. XVII, Maria Antonieta, físico francês, Claus Riedel (1958), Jancis Robinson
const CAVALHEIRO=CHX({cloth:'#5E1428',hood:'#3A0A18',outfit:'blazer',shirt:'#F4F0E8',collar:'#F4F0E8',btn:'#D4A24C',leg:'#3A0A18',skin:'#E8C4A0',hand:'#E8C4A0'});
const RAINHA=CHX({cloth:'#A8C8E0',hood:'#7EA6C8',leg:'#A8C8E0',hair:'#ECE6DC',skin:'#F2D6BE',hand:'#F2D6BE'});
const FISICO=CHX({cloth:'#F4F2EE',hood:'#C9C6C0',outfit:'blazer',shirt:'#3A4A6A',collar:'#3A4A6A',tie:'#3A4A6A',short:'#4A3A2A',leg:'#2A3040',skin:'#E6BF98',hand:'#E6BF98'});
const RIEDEL=CHX({cloth:'#3A3A44',hood:'#24242C',outfit:'blazer',shirt:'#F4F0E8',collar:'#F4F0E8',tie:'#1A1A22',short:'#2A2018',leg:'#3A3A44',skin:'#E8C4A0',hand:'#E8C4A0'});
const JANCIS=CHX({cloth:'#1E1E2A',hood:'#121218',outfit:'blazer',shirt:'#B0122E',collar:'#B0122E',short:'#C8C8C8',leg:'#1E1E2A',skin:'#EAC8A8',hand:'#EAC8A8'});
// taça com líquido de cor livre (branco/dourado), sempre recortado no bojo
function tacaL(x,bx,by,s,tipo,lv,c1,c2){taca(x,bx,by,s,tipo,0);const T=TAC[tipo];x.save();x.translate(bx,by);x.scale(s,s);x.beginPath();T.path(x);x.closePath();x.clip();
 const lvl=-T.stem-lv*(T.h-T.stem),g=x.createLinearGradient(0,lvl,0,-T.stem);g.addColorStop(0,c1);g.addColorStop(1,c2);x.fillStyle=g;x.fillRect(-100,lvl,200,300);x.fillStyle='rgba(255,250,225,.5)';x.fillRect(-100,lvl,200,3);x.restore()}
// flauta (instrumento) deitada, com furinhos
function flauta(g,cx,cy,len,a=0){g.save();g.translate(cx,cy);g.rotate(a);let gr=g.createLinearGradient(0,-12,0,12);gr.addColorStop(0,'#F2E6C0');gr.addColorStop(.5,'#C9A86A');gr.addColorStop(1,'#8A6A34');g.fillStyle=gr;g.beginPath();g.roundRect(-len/2,-12,len,24,10);g.fill();
 g.fillStyle='#3A2414';for(let i=0;i<6;i++){g.beginPath();g.arc(-len*.15+i*len*.09,0,5,0,7);g.fill()}g.beginPath();g.ellipse(-len*.36,0,8,5,0,0,7);g.fill();g.restore()}
// salão inglês do séc. XVII à luz de velas: lambris, quadro, candelabro
function salaoIngles(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1E0E10');g.addColorStop(1,'#3A1A16');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='#4A2418';x.fillRect(-900,560,W+1800,600);x.strokeStyle='rgba(212,162,76,.3)';x.lineWidth=4;for(let i=-4;i<14;i++)x.strokeRect(i*200+20,600,170,200);
 for(let i=-4;i<14;i++){x.strokeStyle='rgba(212,162,76,.12)';x.strokeRect(i*200+20,60,170,440)}
 for(const cx of [520,1400]){x.fillStyle='#D4A24C';x.fillRect(cx-60,250,120,8);for(const k of [-50,0,50]){x.fillStyle='#F3E6C8';x.fillRect(cx+k-6,200,12,50);const fl=.9+Math.sin(t*8+k)*.08;x.fillStyle=`rgba(255,200,110,${fl})`;x.beginPath();x.ellipse(cx+k,192,6,12,0,0,7);x.fill()}
  const gl=x.createRadialGradient(cx,200,4,cx,240,500);gl.addColorStop(0,'rgba(255,180,94,.35)');gl.addColorStop(1,'rgba(255,170,80,0)');x.fillStyle=gl;x.fillRect(cx-500,-200,1000,900)}}
// porcelana: tigela branca em tripé (estilizada, discreta) + jarra de leite
function bolSevres(g,cx,base,s){g.save();g.translate(cx,base);g.scale(s,s);g.strokeStyle='#D4A24C';g.lineWidth=8;for(const k of [-50,0,50]){g.beginPath();g.moveTo(k*.5,-110);g.lineTo(k*1.3,0);g.stroke()}
 let gr=g.createLinearGradient(-110,0,110,0);gr.addColorStop(0,'#D8D4CC');gr.addColorStop(.5,'#FFFFFF');gr.addColorStop(1,'#C8C4BC');g.fillStyle=gr;g.beginPath();g.moveTo(-110,-210);g.quadraticCurveTo(-100,-90,0,-90);g.quadraticCurveTo(100,-90,110,-210);g.closePath();g.fill();
 g.fillStyle='#EDE9E2';g.beginPath();g.ellipse(0,-210,110,18,0,0,7);g.fill();g.strokeStyle='#D4A24C';g.lineWidth=4;g.beginPath();g.ellipse(0,-210,110,18,0,0,7);g.stroke();g.restore()}
function milkJug(g,cx,base,s){g.save();g.translate(cx,base);g.scale(s,s);g.fillStyle='#F4F0E8';g.beginPath();g.moveTo(-40,0);g.quadraticCurveTo(-56,-80,-30,-130);g.lineTo(34,-130);g.lineTo(46,-146);g.lineTo(40,-120);g.quadraticCurveTo(56,-80,40,0);g.closePath();g.fill();
 g.strokeStyle='#F4F0E8';g.lineWidth=10;g.beginPath();g.arc(-50,-70,26,Math.PI*.5,Math.PI*1.5);g.stroke();g.strokeStyle='#5E7AA8';g.lineWidth=3;g.beginPath();g.moveTo(-44,-60);g.quadraticCurveTo(0,-40,44,-60);g.stroke();g.restore()}
// laboratório simples (azulejo claro, bancada) com monitor
function labRoom(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1A1418');g.addColorStop(1,'#2C1E22');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 for(let i=-6;i<20;i++)for(let j=0;j<6;j++){x.fillStyle=(i+j)%2?'#3A3236':'#423A3E';x.fillRect(i*120,60+j*90,118,88)}x.fillStyle='#5A4A44';x.fillRect(-900,600,W+1800,30);x.fillStyle='#2A1E1C';x.fillRect(-900,630,W+1800,600)}
// câmera infravermelha num tripé
function irCamera(g,cx,base,s){g.save();g.translate(cx,base);g.scale(s,s);g.strokeStyle='#2A2A2E';g.lineWidth=8;for(const k of [-70,0,70]){g.beginPath();g.moveTo(0,-260);g.lineTo(k,0);g.stroke()}
 g.fillStyle='#3A3A42';g.beginPath();g.roundRect(-80,-340,160,90,12);g.fill();g.fillStyle='#14141A';g.beginPath();g.arc(90,-295,34,0,7);g.fill();g.fillStyle='#B0122E';g.beginPath();g.arc(90,-295,16,0,7);g.fill();g.fillStyle='#F2A23A';g.fillRect(-60,-330,30,10);g.restore()}
// monitor com a imagem térmica: nuvem laranja de gás sobre a flûte x fraca sobre a coupe
function irMonitor(g,cx,cy,w,h,t,u){g.save();g.fillStyle='#14141A';g.beginPath();g.roundRect(cx-w/2-16,cy-h/2-16,w+32,h+32,14);g.fill();g.fillStyle='#0A0A20';g.fillRect(cx-w/2,cy-h/2,w,h);g.beginPath();g.rect(cx-w/2,cy-h/2,w,h);g.clip();
 const fx=cx-w*.22,kx=cx+w*.22,by=cy+h*.42;for(const [x0,amt] of [[fx,1],[kx,.45]]){for(let i=0;i<5;i++){const yy=by-h*.42-i*h*.09-((t*20)%10),r=(44+i*16)*amt*(.4+.6*u);const gl=g.createRadialGradient(x0,yy,2,x0,yy,r);gl.addColorStop(0,`rgba(255,160,40,${.55*amt*u})`);gl.addColorStop(1,'rgba(255,80,20,0)');g.fillStyle=gl;g.beginPath();g.arc(x0,yy,r,0,7);g.fill()}}
 g.strokeStyle='rgba(120,200,255,.8)';g.lineWidth=3;taca(g,fx,by,.62,'flute',0);taca(g,kx,by,.62,'coupe',0);g.restore();g.save();g.fillStyle='#2A2A2E';g.fillRect(cx-14,cy+h/2+16,28,60);g.restore()}
// flor de tulipa
function tulipFlower(g,cx,cy,s){g.save();g.translate(cx,cy);g.scale(s,s);g.strokeStyle='#3E7A30';g.lineWidth=8;g.beginPath();g.moveTo(0,40);g.lineTo(0,200);g.stroke();g.fillStyle='#4E8A3A';g.beginPath();g.ellipse(-30,150,14,46,-.5,0,7);g.fill();
 g.fillStyle='#C8213F';g.beginPath();g.moveTo(-50,-10);g.quadraticCurveTo(-56,50,0,50);g.quadraticCurveTo(56,50,50,-10);g.lineTo(26,-60);g.lineTo(10,-20);g.lineTo(0,-70);g.lineTo(-10,-20);g.lineTo(-26,-60);g.closePath();g.fill();g.restore()}
// sala de reunião antiga (madeira escura, janela alta)
function meetingRoom(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1A0E0C');g.addColorStop(1,'#3A2218');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='rgba(212,162,76,.1)';for(let i=-4;i<14;i++)x.fillRect(i*220,40,16,560);x.fillStyle='#5A6E84';x.fillRect(820,80,280,380);x.strokeStyle='#3A2218';x.lineWidth=12;x.strokeRect(820,80,280,380);x.beginPath();x.moveTo(960,80);x.lineTo(960,460);x.moveTo(820,270);x.lineTo(1100,270);x.stroke()}
function meetTable(f){f.fillStyle='#4A2A18';f.beginPath();f.ellipse(960,760,900,90,0,0,7);f.fill();f.fillStyle='#3A2012';f.fillRect(60,760,1800,400);f.fillStyle='rgba(255,220,150,.12)';f.beginPath();f.ellipse(960,750,860,70,0,0,7);f.fill()}
function gavel(g,cx,cy,a){g.save();g.translate(cx,cy);g.rotate(a);g.fillStyle='#6A3A1E';g.fillRect(-8,0,16,170);g.fillStyle='#4A2412';g.beginPath();g.roundRect(-60,-30,120,56,12);g.fill();g.fillStyle='#D4A24C';g.fillRect(-60,-8,120,8);g.restore()}
function seal(g,cx,cy,r,txt,a=1){if(a<=0)return;g.save();g.globalAlpha*=a;const k=1+(1-a)*.6;g.translate(cx,cy);g.scale(k,k);for(let i=0;i<16;i++){g.fillStyle='#D4A24C';g.beginPath();g.arc(Math.cos(i/16*7)*r,Math.sin(i/16*7)*r,r*.2,0,7);g.fill()}
 let gr=g.createRadialGradient(-r*.3,-r*.3,2,0,0,r);gr.addColorStop(0,'#FFF0B8');gr.addColorStop(1,'#B8862C');g.fillStyle=gr;g.beginPath();g.arc(0,0,r,0,7);g.fill();g.font=`900 ${r*.5}px Cinzel`;g.textAlign='center';g.textBaseline='middle';g.fillStyle='#5E1428';g.fillText(txt,0,2);g.restore()}
// Expo de Bruxelas 1958: céu e o Atomium estilizado ao fundo
function expo58(x,t){let g=x.createLinearGradient(0,-300,0,700);g.addColorStop(0,'#3A5A80');g.addColorStop(1,'#E8D8C0');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1300);
 const P=[[1500,120],[1380,240],[1620,240],[1500,360],[1380,480],[1620,480],[1500,600],[1450,300],[1550,420]];x.strokeStyle='#9AA4B0';x.lineWidth=16;for(const [a,b] of [[0,1],[0,2],[1,3],[2,3],[3,4],[3,5],[4,6],[5,6],[1,4],[2,5],[0,3],[3,6]]){x.beginPath();x.moveTo(P[a][0],P[a][1]);x.lineTo(P[b][0],P[b][1]);x.stroke()}
 for(const [px,py] of P.slice(0,7)){const gr=x.createRadialGradient(px-12,py-12,4,px,py,42);gr.addColorStop(0,'#F4F6F8');gr.addColorStop(1,'#8A949E');x.fillStyle=gr;x.beginPath();x.arc(px,py,42,0,7);x.fill()}
 x.fillStyle='#C9B89A';x.fillRect(-900,640,W+1800,600);x.fillStyle='#8E1B3A';for(let i=0;i<8;i++){x.fillRect(100+i*120,560,8,90);x.beginPath();x.moveTo(108+i*120,560);x.lineTo(160+i*120,576);x.lineTo(108+i*120,592);x.fill()}}
// nariz com radar
function noseRadar(g,cx,cy,s,t,a=1){g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle='#E6BF98';g.beginPath();g.moveTo(0,-120);g.quadraticCurveTo(20,-40,70,40);g.quadraticCurveTo(80,62,50,66);g.quadraticCurveTo(30,90,0,70);g.lineTo(0,-120);g.fill();
 g.fillStyle='#C9966E';g.beginPath();g.ellipse(36,58,12,6,.3,0,7);g.fill();g.restore()}
// bandeira da Áustria
function flagAT(g,cx,cy,w){const h=w*.66;g.save();for(let i=0;i<3;i++){g.fillStyle=i==1?'#F3F0E6':'#C8213F';g.fillRect(cx-w/2,cy-h/2+i*h/3,w,h/3+1)}g.strokeStyle=GOLD;g.lineWidth=3;g.strokeRect(cx-w/2,cy-h/2,w,h);g.restore()}
// penteado alto empoado da rainha (desenho na cabeça do npc)
function pouf(x,fx,fy){x.fillStyle='#ECE6DC';x.beginPath();x.moveTo(-HR-6,-10);x.quadraticCurveTo(-HR-30,-HR-140,0,-HR-170);x.quadraticCurveTo(HR+30,-HR-140,HR+6,-10);x.quadraticCurveTo(0,-HR+20,-HR-6,-10);x.fill();
 x.fillStyle='#D8D0C2';for(const [a,b] of [[-40,-HR-60],[30,-HR-100],[-10,-HR-140]]){x.beginPath();x.ellipse(a,b,26,16,0,0,7);x.fill()}x.fillStyle='#7EA6C8';x.beginPath();x.ellipse(36,-HR-120,30,14,.5,0,7);x.fill();
 for(const sd of [-1,1]){x.fillStyle='#ECE6DC';x.beginPath();x.ellipse(sd*(HR+6),14,18,22,0,0,7);x.fill()}}
// leque aberto
function fanL(g,hx,hy,s,a=0){g.save();g.translate(hx,hy);g.rotate(a);g.scale(s,s);for(let i=0;i<9;i++){const an=-Math.PI*.85+i*Math.PI*.7/8;g.fillStyle=i%2?'#F3E6C8':'#E8D8B8';g.beginPath();g.moveTo(0,0);g.arc(0,0,90,an,an+Math.PI*.7/8+.01);g.closePath();g.fill()}
 g.strokeStyle='#D4A24C';g.lineWidth=3;g.beginPath();g.arc(0,0,90,-Math.PI*.85,-Math.PI*.15);g.stroke();g.restore()}
// mini-cartão de outro vídeo do canal
function videoCard(g,cx,cy,w,txt,a=1){if(a<=0)return;const h=w*.5625;g.save();g.globalAlpha*=a;g.fillStyle='#2A0A12';g.beginPath();g.roundRect(cx-w/2,cy-h/2,w,h,10);g.fill();g.strokeStyle=GOLD;g.lineWidth=4;g.stroke();
 taca(g,cx-w*.28,cy+h*.38,.55,'bordeaux',.3);goldText(g,txt[0],cx+w*.12,cy-h*.12,w*.07,'Cinzel',900);goldText(g,txt[1],cx+w*.12,cy+h*.06,w*.07,'Cinzel',900);
 g.fillStyle='rgba(176,18,46,.9)';g.beginPath();g.moveTo(cx+w*.06,cy+h*.2);g.lineTo(cx+w*.16,cy+h*.28);g.lineTo(cx+w*.06,cy+h*.36);g.closePath();g.fill();g.restore()}
function flag(x,kind,cx,cy,w){const h=w*.66;x.save();x.translate(cx-w/2,cy-h/2);x.beginPath();x.rect(0,0,w,h);x.clip();
 if(kind=='br'){x.fillStyle='#1E8A3A';x.fillRect(0,0,w,h);x.fillStyle='#F2D13A';x.beginPath();x.moveTo(w*.08,h/2);x.lineTo(w/2,h*.1);x.lineTo(w*.92,h/2);x.lineTo(w/2,h*.9);x.closePath();x.fill();x.fillStyle='#1E3A8A';x.beginPath();x.arc(w/2,h/2,h*.24,0,7);x.fill();x.strokeStyle='#F3F0E6';x.lineWidth=h*.04;x.beginPath();x.arc(w/2,h*.75,h*.4,-2.3,-.84);x.stroke()}
 else if(kind=='uk'){x.fillStyle='#1E2E6A';x.fillRect(0,0,w,h);x.strokeStyle='#F3F0E6';x.lineWidth=h*.2;x.beginPath();x.moveTo(0,0);x.lineTo(w,h);x.moveTo(w,0);x.lineTo(0,h);x.stroke();x.strokeStyle='#C8213F';x.lineWidth=h*.07;x.stroke();x.strokeStyle='#F3F0E6';x.lineWidth=h*.32;x.beginPath();x.moveTo(w/2,0);x.lineTo(w/2,h);x.moveTo(0,h/2);x.lineTo(w,h/2);x.stroke();x.strokeStyle='#C8213F';x.lineWidth=h*.18;x.stroke()}
 else if(kind=='fr'){for(const [i,c] of [[0,'#1E3A8A'],[1,'#F3F0E6'],[2,'#C8213F']]){x.fillStyle=c;x.fillRect(i*w/3,0,w/3+1,h)}}
 else if(kind=='de'){for(const [i,c] of [[0,'#141414'],[1,'#C8213F'],[2,'#F2C12E']]){x.fillStyle=c;x.fillRect(0,i*h/3,w,h/3+1)}}
 x.restore();x.save();x.strokeStyle=GOLD;x.lineWidth=4;x.strokeRect(cx-w/2,cy-h/2,w,h);x.restore()}
function copoAmericano(x,cx,base,s,lv=.6){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='rgba(0,0,0,.35)';x.beginPath();x.ellipse(0,3,62,10,0,0,7);x.fill();
 const body=()=>{x.beginPath();x.moveTo(-48,0);x.lineTo(-62,-150);x.lineTo(-60,-176);x.lineTo(60,-176);x.lineTo(62,-150);x.lineTo(48,0);x.closePath()};
 x.save();body();x.clip();x.fillStyle='rgba(255,236,210,.14)';x.fillRect(-70,-180,140,180);x.fillStyle='#6E1630';x.fillRect(-70,-8-130*lv,140,140);x.fillStyle='rgba(255,220,200,.3)';x.fillRect(-70,-8-130*lv,140,4);
 x.strokeStyle='rgba(255,245,230,.45)';x.lineWidth=2.5;for(let i=-5;i<=5;i++){x.beginPath();x.moveTo(i*11,-6);x.lineTo(i*12.6,-148);x.stroke()}x.restore();
 body();x.strokeStyle='rgba(255,245,230,.75)';x.lineWidth=3;x.stroke();x.beginPath();x.moveTo(-62,-150);x.lineTo(62,-150);x.stroke();x.restore()}
