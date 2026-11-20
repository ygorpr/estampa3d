// Vídeo 16 — As "lágrimas" do vinho: peças animadas e personagens (Thomson 1855, Marangoni 1865)
// REGRA: líquido e lágrimas SEMPRE dentro do bojo (clip em bowlPathL). Vapor (gás) pode sair pela boca da taça.
const TCOL='rgba(112,16,40,.9)';
// taça com lágrimas ANIMADAS: o: {tt (tempo da animação; congele passando constante), film (0..1 altura da película), ridge (0..1 cordão), drops (0..1 quantidade), speed, col, seed, n}
function tearGlassT(x,bx,by,s,lv,o={}){const col=o.col||'#6E1630',tt=o.tt||0,film=o.film??.72,ridge=o.ridge??.6,dropA=o.drops??1,n=o.n||6,seed=o.seed||9,spd=o.speed||.32;
 const DO=o.dropsOnly;if(!DO)glassW(x,bx,by,s,lv,col);x.save();x.translate(bx,by);x.scale(s,s);bowlPathL(x);x.clip();
 const tp=-74-lv*(178-74),ft=tp-film*(tp+170),w0=-46,w1=46,dw=(w1-w0)/n,r=rng(seed),hs=[];for(let i=0;i<n;i++)hs.push(6+r()*6);
 if(film>0.02&&!DO){x.fillStyle=o.filmCol||'rgba(120,22,46,.30)';x.beginPath();x.moveTo(w0,tp+2);x.lineTo(w0,ft+8);
  for(let i=0;i<n;i++){const a=w0+i*dw;x.quadraticCurveTo(a+dw/2,ft-hs[i]*1.6,a+dw,ft+8)}x.lineTo(w1,tp+2);x.closePath();x.fill();
  // cordão no alto (engrossa com ridge)
  x.strokeStyle=`rgba(150,30,58,${.45+.4*ridge})`;x.lineWidth=1.4+ridge*3.4;x.beginPath();x.moveTo(w0,ft+8);for(let i=0;i<n;i++){const a=w0+i*dw;x.quadraticCurveTo(a+dw/2,ft-hs[i]*1.6,a+dw,ft+8)}x.stroke()}
 // lágrimas: nascem nos encontros dos arcos, engordam, descem e voltam ao vinho
 if(dropA>0&&film>.15)for(let i=1;i<n;i++){const px=w0+i*dw+(r()-.5)*3,ph=((tt*spd*(o.slow?.55:1)+r())%1),y0=ft+6,len=tp-3-y0,R0=2.6+r()*1.4;
  x.save();x.globalAlpha=dropA;
  if(ph<.28){const g=ph/.28,R=R0*(.4+.6*g);x.fillStyle=TCOL;x.beginPath();x.arc(px,y0+R,R,0,7);x.fill()}
  else{const g=easeIO((ph-.28)/.72),yy=y0+len*g,R=R0;
   x.fillStyle='rgba(112,16,40,.55)';x.beginPath();x.moveTo(px-.8,y0);x.lineTo(px+.8,y0);x.lineTo(px+1.2,yy-R);x.lineTo(px-1.2,yy-R);x.closePath();x.fill();
   x.fillStyle=TCOL;x.beginPath();x.moveTo(px-1.2,yy-R*2.6);x.quadraticCurveTo(px+R*1.1,yy-R*1.2,px+R,yy-R*.2);x.arc(px,yy-R*.2,R,0,Math.PI);x.quadraticCurveTo(px-R*1.1,yy-R*1.2,px-1.2,yy-R*2.6);x.fill();
   x.fillStyle='rgba(255,230,230,.6)';x.beginPath();x.arc(px-R*.35,yy-R*.6,R*.3,0,7);x.fill()}
  x.restore()}
 x.restore();if(DO)return;x.save();x.translate(bx,by);x.scale(s,s);x.strokeStyle='rgba(255,255,255,.35)';x.lineWidth=4;x.beginPath();x.moveTo(-30,-158);x.quadraticCurveTo(-36,-120,-24,-98);x.stroke();x.restore()}
// vapor de álcool saindo pela boca da taça (gás, fora do líquido)
function vapor(x,bx,by,s,t,a=1){if(a<=0)return;x.save();x.translate(bx,by);x.scale(s,s);x.lineCap='round';
 for(let i=0;i<5;i++){const ph=(t*.45+i/5)%1,yy=-178-ph*150,xx=-28+i*14+Math.sin(t*2+i)*8;x.strokeStyle=`rgba(255,240,230,${.32*a*Math.sin(ph*Math.PI)})`;x.lineWidth=5;x.beginPath();x.moveTo(xx,yy+30);x.bezierCurveTo(xx+10,yy+18,xx-10,yy+8,xx,yy-6);x.stroke()}x.restore()}
// setas douradas subindo pela parede do vidro
function climbArrows(x,bx,by,s,t,a=1){if(a<=0)return;x.save();x.translate(bx,by);x.scale(s,s);x.globalAlpha=a;
 for(const sd of [-1,1])for(let k=0;k<2;k++){const ph=(t*.6+k*.5)%1,y=-92-ph*70,xx=sd*(36-ph*2);x.globalAlpha=a*Math.sin(ph*Math.PI);x.strokeStyle=GOLD2;x.fillStyle=GOLD2;x.lineWidth=2.4;x.beginPath();x.moveTo(xx,y+16);x.lineTo(xx,y);x.stroke();x.beginPath();x.moveTo(xx-5,y+4);x.lineTo(xx,y-5);x.lineTo(xx+5,y+4);x.closePath();x.fill()}x.restore()}
// lousa (quadro-negro) com moldura de madeira
function chalkboard(x,cx,cy,w,h){x.save();x.fillStyle='#5A3A1E';x.beginPath();x.roundRect(cx-w/2-18,cy-h/2-18,w+36,h+36,10);x.fill();x.fillStyle='#1E2A24';x.fillRect(cx-w/2,cy-h/2,w,h);
 x.fillStyle='rgba(255,255,255,.04)';for(let i=0;i<6;i++){x.beginPath();x.ellipse(cx-w/3+i*w/7,cy+((i*37)%60)-30,90,30,.3,0,7);x.fill()}x.fillStyle='#4A2E16';x.fillRect(cx-w/2,cy+h/2+4,w,12);x.fillStyle='#EDE8DC';x.fillRect(cx+w/2-120,cy+h/2-4,40,9);x.restore()}
function chalk(x,txt,cx,cy,sz){x.save();x.font=`700 ${sz}px Cinzel`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='rgba(240,236,224,.92)';x.fillText(txt,cx,cy);x.restore()}
// bandeirinhas
function flag(x,kind,cx,cy,w){const h=w*.66;x.save();x.translate(cx-w/2,cy-h/2);x.beginPath();x.rect(0,0,w,h);x.clip();
 if(kind=='br'){x.fillStyle='#1E8A3A';x.fillRect(0,0,w,h);x.fillStyle='#F2D13A';x.beginPath();x.moveTo(w*.08,h/2);x.lineTo(w/2,h*.1);x.lineTo(w*.92,h/2);x.lineTo(w/2,h*.9);x.closePath();x.fill();x.fillStyle='#1E3A8A';x.beginPath();x.arc(w/2,h/2,h*.24,0,7);x.fill();x.strokeStyle='#F3F0E6';x.lineWidth=h*.04;x.beginPath();x.arc(w/2,h*.75,h*.4,-2.3,-.84);x.stroke()}
 else if(kind=='uk'){x.fillStyle='#1E2E6A';x.fillRect(0,0,w,h);x.strokeStyle='#F3F0E6';x.lineWidth=h*.2;x.beginPath();x.moveTo(0,0);x.lineTo(w,h);x.moveTo(w,0);x.lineTo(0,h);x.stroke();x.strokeStyle='#C8213F';x.lineWidth=h*.07;x.stroke();x.strokeStyle='#F3F0E6';x.lineWidth=h*.32;x.beginPath();x.moveTo(w/2,0);x.lineTo(w/2,h);x.moveTo(0,h/2);x.lineTo(w,h/2);x.stroke();x.strokeStyle='#C8213F';x.lineWidth=h*.18;x.stroke()}
 else if(kind=='fr'){for(const [i,c] of [[0,'#1E3A8A'],[1,'#F3F0E6'],[2,'#C8213F']]){x.fillStyle=c;x.fillRect(i*w/3,0,w/3+1,h)}}
 else if(kind=='de'){for(const [i,c] of [[0,'#141414'],[1,'#C8213F'],[2,'#F2C12E']]){x.fillStyle=c;x.fillRect(0,i*h/3,w,h/3+1)}}
 x.restore();x.save();x.strokeStyle=GOLD;x.lineWidth=4;x.strokeRect(cx-w/2,cy-h/2,w,h);x.restore()}
// vitral de catedral (arco gótico com vidros coloridos que acendem)
function stainedGlass(x,cx,base,w,h,a=1,t=0){x.save();const top=base-h;x.fillStyle='#1A1216';x.beginPath();x.moveTo(cx-w/2-18,base+18);x.lineTo(cx-w/2-18,top+w*.5);x.quadraticCurveTo(cx-w/2-18,top-24,cx,top-50);x.quadraticCurveTo(cx+w/2+18,top-24,cx+w/2+18,top+w*.5);x.lineTo(cx+w/2+18,base+18);x.closePath();x.fill();
 x.beginPath();x.moveTo(cx-w/2,base);x.lineTo(cx-w/2,top+w*.5);x.quadraticCurveTo(cx-w/2,top,cx,top-30);x.quadraticCurveTo(cx+w/2,top,cx+w/2,top+w*.5);x.lineTo(cx+w/2,base);x.closePath();x.save();x.clip();
 const cols=['#8E1B3A','#2E4AA0','#D4A24C','#3A7A4A','#B0122E','#6A2A80'],r=rng(4);for(let yy=top-40;yy<base;yy+=56)for(let xx=cx-w/2;xx<cx+w/2;xx+=52){x.fillStyle=cols[Math.floor(r()*6)];x.globalAlpha=.35+.6*a*(.75+.25*Math.sin(t*1.5+xx*.03+yy*.02));x.fillRect(xx,yy,52,56)}
 x.globalAlpha=1;x.strokeStyle='#14100E';x.lineWidth=6;for(let yy=top-40;yy<base;yy+=56){x.beginPath();x.moveTo(cx-w/2,yy);x.lineTo(cx+w/2,yy);x.stroke()}for(let xx=cx-w/2;xx<cx+w/2;xx+=52){x.beginPath();x.moveTo(xx,top-40);x.lineTo(xx,base);x.stroke()}
 // arcos (como os arquinhos do vinho)
 x.strokeStyle='#14100E';x.lineWidth=10;for(let i=0;i<3;i++){const a0=cx-w/2+i*w/3;x.beginPath();x.moveTo(a0,base-h*.42);x.quadraticCurveTo(a0+w/6,base-h*.62,a0+w/3,base-h*.42);x.stroke()}
 x.restore();x.strokeStyle=GOLD;x.lineWidth=5;x.beginPath();x.moveTo(cx-w/2,base);x.lineTo(cx-w/2,top+w*.5);x.quadraticCurveTo(cx-w/2,top,cx,top-30);x.quadraticCurveTo(cx+w/2,top,cx+w/2,top+w*.5);x.lineTo(cx+w/2,base);x.closePath();x.stroke();x.restore()}
// gota redonda pousada numa superfície (tensão superficial)
function roundDrop(x,cx,base,r,col='rgba(150,200,235,.85)'){x.save();x.fillStyle='rgba(0,0,0,.25)';x.beginPath();x.ellipse(cx,base+4,r*1.1,r*.18,0,0,7);x.fill();
 const g=x.createRadialGradient(cx-r*.35,base-r*1.1,r*.1,cx,base-r*.7,r*1.3);g.addColorStop(0,'rgba(240,250,255,.95)');g.addColorStop(.4,col);g.addColorStop(1,'rgba(40,90,140,.9)');x.fillStyle=g;
 x.beginPath();x.moveTo(cx-r*1.05,base);x.bezierCurveTo(cx-r*1.2,base-r*1.5,cx+r*1.2,base-r*1.5,cx+r*1.05,base);x.closePath();x.fill();x.fillStyle='rgba(255,255,255,.85)';x.beginPath();x.ellipse(cx-r*.4,base-r*.75,r*.18,r*.12,-.5,0,7);x.fill();x.restore()}
// inseto andando sobre a água (alfaiate / "patinador"): corpo, cabeça, olhos, antenas, 6 pernas e as covinhas na "pele" da água
function waterStrider(x,cx,surf,s,t){x.save();x.translate(cx,surf);x.scale(s,s);const bob=Math.sin(t*3)*1.5;
 // água
 let g=x.createLinearGradient(0,0,0,220);g.addColorStop(0,'#3A6A9A');g.addColorStop(1,'#14283E');x.fillStyle=g;x.beginPath();x.moveTo(-330,0);
 const dimp=[-230,-120,120,230];for(let xx=-330;xx<=330;xx+=6){let d=0;for(const dx of dimp)d+=10*Math.exp(-(((xx-dx)/22)**2));x.lineTo(xx,d)}x.lineTo(330,220);x.lineTo(-330,220);x.closePath();x.fill();
 x.strokeStyle='rgba(220,240,255,.7)';x.lineWidth=3;x.beginPath();for(let xx=-330;xx<=330;xx+=6){let d=0;for(const dx of dimp)d+=10*Math.exp(-(((xx-dx)/22)**2));xx==-330?x.moveTo(xx,d):x.lineTo(xx,d)}x.stroke();
 for(const dx of dimp){x.strokeStyle='rgba(220,240,255,.25)';x.lineWidth=2;x.beginPath();x.ellipse(dx,4,40+Math.sin(t*2+dx)*4,6,0,0,7);x.stroke()}
 // pernas (finas, longas) apoiadas nas covinhas
 x.strokeStyle='#2A1A12';x.lineWidth=5;x.lineCap='round';x.lineJoin='round';const by=-62+bob;
 for(const [ax,kx,fx] of [[-20,-120,-230],[20,120,230],[-10,-70,-120],[10,70,120]]){x.beginPath();x.moveTo(ax,by);x.lineTo(kx,by-40);x.lineTo(fx,8);x.stroke()}
 x.beginPath();x.moveTo(30,by);x.lineTo(80,by-10);x.lineTo(110,by+6);x.stroke();x.beginPath();x.moveTo(26,by+2);x.lineTo(70,by+14);x.lineTo(96,by+22);x.stroke();
 // corpo + cabeça
 x.fillStyle='#4A2E1C';x.beginPath();x.ellipse(-10,by,62,15,0,0,7);x.fill();x.fillStyle='#6A4428';x.beginPath();x.ellipse(-20,by-5,40,7,0,0,7);x.fill();
 x.fillStyle='#3A2214';x.beginPath();x.ellipse(60,by-2,18,12,0,0,7);x.fill();x.fillStyle='#F3E6C8';x.beginPath();x.arc(68,by-6,5,0,7);x.fill();x.fillStyle='#1c1a2b';x.beginPath();x.arc(70,by-6,2.6,0,7);x.fill();
 x.strokeStyle='#2A1A12';x.lineWidth=3;x.beginPath();x.moveTo(74,by-10);x.quadraticCurveTo(100,by-40,118,by-36);x.moveTo(72,by-12);x.quadraticCurveTo(92,by-46,104,by-50);x.stroke();x.restore()}
// cabo de guerra: corda com setas (água puxa forte x álcool puxa fraco)
function tugRope(x,cx,cy,u,t){x.save();const off=u*90;x.strokeStyle='#C99A5B';x.lineWidth=12;x.lineCap='round';x.beginPath();x.moveTo(cx-380,cy);x.lineTo(cx+380,cy);x.stroke();
 x.strokeStyle='#8A6A34';x.lineWidth=3;for(let i=-370;i<380;i+=22){x.beginPath();x.moveTo(cx+i,cy-6);x.lineTo(cx+i+10,cy+6);x.stroke()}
 x.fillStyle='#C8213F';x.fillRect(cx-off-6,cy-30,12,60);x.restore()}
// gráfico de "onda de choque": corte da parede do vidro com a película; lombada sobe e deixa camada fina; no fim quebra em gotas
function shockWall(x,cx,base,h,u,t,brk=0){x.save();x.fillStyle='rgba(235,240,245,.20)';x.fillRect(cx-44,base-h,44,h);x.strokeStyle='rgba(255,255,255,.55)';x.lineWidth=3;x.strokeRect(cx-44,base-h,44,h);
 // vinho embaixo (poça)
 x.fillStyle='#6E1630';x.beginPath();x.moveTo(cx,base);x.quadraticCurveTo(cx+14,base-40,cx+60,base-48);x.lineTo(cx+380,base-48);x.lineTo(cx+380,base);x.closePath();x.fill();
 const yb=base-60-u*(h-160);
 x.fillStyle='#8E1B3A';x.beginPath();x.moveTo(cx,base-40);
 for(let y=base-40;y>=base-h+6;y-=4){const beh=(12+18*seg(y,yb,base-40))*ease(seg(y,yb-30,yb+30)),bump=72*Math.exp(-(((y-yb)/34)**2))*(1-brk*.85),th=Math.max(beh,bump);x.lineTo(cx+th,y)}
 x.lineTo(cx,base-h+6);x.closePath();x.fill();
 if(u>.03&&brk<1){x.save();x.globalAlpha=1-brk;arrow(x,cx+140,yb+70,cx+140,yb-50,GOLD2,7);x.restore()}
 if(brk>0){const r=rng(3);for(let k=0;k<3;k++){const yy=yb+brk*(80+k*90)+k*10;x.fillStyle=TCOL;x.beginPath();x.ellipse(cx+18,yy,18,24,0,0,7);x.fill()}}
 x.restore()}
// mão aberta tampando a boca da taça (vem da direita, palma por cima) — é a mão do Sommelier: punho de camisa creme
function coverHand(x,bx,by,s,a){if(a<=0)return;x.save();x.translate(bx+(1-a)*260*s,by-178*s-14*s);x.scale(s,s);x.globalAlpha=Math.min(1,a*1.5);
 x.fillStyle='#F4F0E8';x.beginPath();x.roundRect(60,-34,180,56,18);x.fill();x.fillStyle='#5E1428';x.fillRect(206,-34,40,56);
 x.fillStyle='#E6BF98';x.beginPath();x.roundRect(-56,-22,130,38,18);x.fill();x.beginPath();x.roundRect(-80,-14,40,24,12);x.fill();
 x.strokeStyle='#1c1a2b';x.lineWidth=2.5;for(const yy of [-12,-3,6]){x.beginPath();x.moveTo(-70,yy);x.lineTo(-40,yy);x.stroke()}x.beginPath();x.moveTo(30,14);x.quadraticCurveTo(50,22,64,10);x.stroke();x.restore()}
// copos de outras bebidas (líquido dentro)
function tumbler(x,cx,base,s,col='#C8781E'){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='rgba(255,236,210,.14)';x.beginPath();x.moveTo(-50,-120);x.lineTo(50,-120);x.lineTo(44,0);x.lineTo(-44,0);x.closePath();x.fill();
 x.save();x.clip();x.fillStyle=col;x.fillRect(-60,-56,120,60);x.fillStyle='rgba(255,230,180,.35)';x.fillRect(-60,-56,120,4);x.fillStyle='rgba(200,110,30,.55)';for(const xx of [-30,-8,16,34]){x.beginPath();x.moveTo(xx-1,-106);x.lineTo(xx+1,-106);x.lineTo(xx+1.5,-70);x.arc(xx,-68,3.5,0,Math.PI);x.closePath();x.fill()}x.restore();
 x.strokeStyle='rgba(255,240,220,.6)';x.lineWidth=3;x.beginPath();x.moveTo(-50,-120);x.lineTo(-44,0);x.lineTo(44,0);x.lineTo(50,-120);x.stroke();x.fillStyle='rgba(255,240,220,.35)';x.fillRect(-44,-10,88,10);x.restore()}
function shotGlass(x,cx,base,s,col='rgba(242,214,140,.75)'){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='rgba(255,236,210,.14)';x.beginPath();x.moveTo(-26,-90);x.lineTo(26,-90);x.lineTo(20,0);x.lineTo(-20,0);x.closePath();x.fill();x.save();x.clip();x.fillStyle=col;x.fillRect(-40,-60,80,60);
 x.fillStyle='rgba(190,150,60,.6)';for(const xx of [-12,8]){x.beginPath();x.moveTo(xx-1,-82);x.lineTo(xx+1,-82);x.arc(xx,-64,3,0,Math.PI);x.closePath();x.fill()}x.restore();
 x.strokeStyle='rgba(255,240,220,.6)';x.lineWidth=3;x.beginPath();x.moveTo(-26,-90);x.lineTo(-20,0);x.lineTo(20,0);x.lineTo(26,-90);x.stroke();x.fillStyle='rgba(255,240,220,.4)';x.fillRect(-20,-14,40,14);x.restore()}
function portGlass(x,cx,base,s){tearGlassT(x,cx,base,s*.78,.45,{col:'#4A0A1C',tt:0,drops:0,film:.5,seed:5})}
// termômetro e umidade
function thermoS(x,cx,cy,h,u){x.save();x.fillStyle='#F3E6C8';x.beginPath();x.roundRect(cx-18,cy-h,36,h,18);x.fill();x.beginPath();x.arc(cx,cy+16,32,0,7);x.fill();x.fillStyle='#C8213F';x.beginPath();x.arc(cx,cy+16,22,0,7);x.fill();x.fillRect(cx-8,cy-h*u,16,h*u+10);
 x.strokeStyle='rgba(60,20,20,.5)';x.lineWidth=2;for(let i=1;i<8;i++){x.beginPath();x.moveTo(cx+18,cy-i*h/8);x.lineTo(cx+30,cy-i*h/8);x.stroke()}x.restore()}
function humidity(x,cx,cy,s,t){x.save();x.translate(cx,cy);x.scale(s,s);for(const [dx,dy,r] of [[0,0,46],[-70,60,30],[60,70,34],[-20,120,22]]){const yy=dy+Math.sin(t*1.5+dx)*4;
 x.fillStyle='rgba(150,200,235,.8)';x.beginPath();x.moveTo(dx,yy-r*1.5);x.quadraticCurveTo(dx+r,yy-r*.2,dx+r*.9,yy+r*.3);x.arc(dx,yy+r*.3,r*.9,0,Math.PI);x.quadraticCurveTo(dx-r,yy-r*.2,dx,yy-r*1.5);x.fill();x.fillStyle='rgba(255,255,255,.7)';x.beginPath();x.ellipse(dx-r*.35,yy+r*.1,r*.15,r*.25,-.3,0,7);x.fill()}x.restore()}
// livro antigo aberto
function oldBook(x,cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#4A1A12';x.beginPath();x.roundRect(-250,-150,500,300,12);x.fill();
 for(const k of [-1,1]){x.fillStyle='#E9DCC0';x.beginPath();x.moveTo(0,-130);x.quadraticCurveTo(k*110,-150,k*235,-136);x.lineTo(k*235,136);x.quadraticCurveTo(k*110,124,0,140);x.closePath();x.fill();
  x.strokeStyle='rgba(90,60,30,.5)';x.lineWidth=3;for(let i=0;i<8;i++){const y=-96+i*28;x.beginPath();x.moveTo(k*30,y);x.lineTo(k*(205-((i*31)%40)),y);x.stroke()}}
 x.fillStyle='rgba(0,0,0,.25)';x.fillRect(-4,-130,8,270);x.fillStyle='#8E1B3A';x.fillRect(60,-150,14,90);x.restore()}

// ===================== PERSONAGENS =====================
// JAMES THOMSON (1855): engenheiro vitoriano de ~33 anos, costeletas castanho-ruivas, cartola, sobrecasaca escura, colete cinza,
// plastrão (gravata larga) preto, corrente de relógio dourada; segura uma taça pela HASTE e observa as lágrimas.
const THOM={skin:'#E8C4A0',cloth:'#2A2432',hood:'#17131C',outfit:'blazer',shirt:'#F4F0E8',collar:'#F4F0E8',tie:'#121018',hand:'#E8C4A0',face:'#1c1a2b',leg:'#2A2432',shoe:'#0E0B10',finger:'#1c1a2b',short:'#7A4A2A',part:1,btn:'#D4A24C'};
function thomson(x,cx,base,s,t,o={}){const y=base-520*s,br=Math.sin(t*2.1)*3,tilt=o.tilt??-.04,look=o.look??-.35;
 const p={x:cx,y,s,face:-1,breath:t*2.1,look,lookY:o.lookY??-.25,brow:o.brow??.7,mouth:o.mouth??.4,blink:blinkAt(t,o.blinks||[1.1,3.7,6.3,8.9]),hands:{},arm3d:true,tilt,open:o.open||0};
 // abas da sobrecasaca
 x.save();x.translate(cx,y);x.scale(s,s);x.fillStyle='#211C28';x.beginPath();x.moveTo(-TW/2,180);x.lineTo(-TW/2-20,TH+120);x.lineTo(TW/2+20,TH+120);x.lineTo(TW/2,180);x.closePath();x.fill();x.restore();
 const ga=o.glassUp??1;p.hands.l=[lerp(-70,-165,ga),lerp(190,0,ga),lerp(50,120,ga)];p.hands.r=o.lapel?[40,60,70]:[150,120,110];
 const hp=actor(x,'thom',THOM,p,null,'rgba(255,200,140,1)',-1);
 x.save();x.translate(cx,y);x.scale(s,s);
 // colete cinza por baixo do plastrão + corrente de relógio
 x.fillStyle='#4A4652';for(const sd of [-1,1]){x.beginPath();x.moveTo(sd*36,-8+br+40);x.lineTo(sd*50,TH-30);x.lineTo(sd*8,TH-30);x.lineTo(sd*6,-8+br+150);x.closePath();x.fill()}
 x.strokeStyle=GOLD;x.lineWidth=4;x.beginPath();x.moveTo(-40,TH-90);x.quadraticCurveTo(-10,TH-60,30,TH-96);x.stroke();x.fillStyle=GOLD;x.beginPath();x.arc(30,TH-96,7,0,7);x.fill();
 // plastrão largo preto com alfinete dourado
 x.fillStyle='#121018';x.beginPath();x.moveTo(-26,-8+br+4);x.lineTo(26,-8+br+4);x.quadraticCurveTo(30,-8+br+50,0,-8+br+70);x.quadraticCurveTo(-30,-8+br+50,-26,-8+br+4);x.fill();x.fillStyle=GOLD;x.beginPath();x.arc(0,-8+br+34,5,0,7);x.fill();
 // cabeça: costeletas fartas e cartola
 x.save();x.translate(0,-HR-20+br);x.rotate(tilt);x.save();x.beginPath();x.arc(0,0,HR,0,7);x.clip();x.fillStyle='#7A4A2A';
 x.fillStyle='#6A3A1E';for(const sd of [-1,1]){x.beginPath();x.moveTo(sd*HR,-34);x.lineTo(sd*(HR-18),-34);x.quadraticCurveTo(sd*(HR-22),18,sd*60,40);x.quadraticCurveTo(sd*44,58,sd*54,78);x.quadraticCurveTo(sd*74,90,sd*HR,70);x.closePath();x.fill()}
 x.restore();{const lk=look*44;x.fillStyle='#6A3A1E';x.beginPath();x.moveTo(lk-40,50);x.quadraticCurveTo(lk,26,lk+40,50);x.quadraticCurveTo(lk,42,lk-40,50);x.fill()}
 x.fillStyle='#16121A';x.beginPath();x.ellipse(0,-HR+6,HR+34,16,0,0,7);x.fill();x.beginPath();x.moveTo(-66,-HR+4);x.lineTo(-74,-HR-128);x.quadraticCurveTo(0,-HR-140,74,-HR-128);x.lineTo(66,-HR+4);x.closePath();x.fill();
 x.fillStyle='#5E1428';x.fillRect(-68,-HR-24,136,18);x.strokeStyle='rgba(255,200,150,.25)';x.lineWidth=3;x.beginPath();x.moveTo(-58,-HR-120);x.lineTo(-52,-HR-8);x.stroke();x.restore();x.restore();
 const hl=h2w(hp,'l'),hr=h2w(hp,'r');
 if(o.lapel)gripHand(x,hr[0],hr[1],0,THOM,.85*s);else openHand(x,hr[0],hr[1],.3,THOM,.85*s);
 // taça pela haste (mão na haste, bojo acima da mão)
 tearGlassT(x,hl[0],hl[1]+46*s,1.15*s,.3,{tt:t,film:.7,ridge:.7});gripHand(x,hl[0],hl[1],0,THOM,.85*s);return hp}
// CARLO MARANGONI (1865): jovem físico italiano de ~25 anos, cabelo preto, bigode farto com pontas, paletó marrom, gravata-borboleta,
// giz na mão apontando a lousa.
const MARA={skin:'#E2B890',cloth:'#4A3020',hood:'#2C1C12',outfit:'blazer',shirt:'#F4F0E8',collar:'#F4F0E8',bow:'#1E1A2A',hand:'#E2B890',face:'#1c1a2b',leg:'#2C1C12',shoe:'#0E0B10',finger:'#1c1a2b',short:'#1E140E',part:1,vol:30,beard:'#1E140E',beardT:'mustache',pocket:'#F4F0E8'};
function marangoni(x,cx,base,s,t,o={}){const y=base-520*s,br=Math.sin(t*2.1)*3,pt=o.point??1,tilt=o.tilt??.04,look=o.look??.4;
 const p={x:cx,y,s,face:1,breath:t*2.1,look,lookY:o.lookY??-.1,brow:o.brow??.5,mouth:o.mouth??.45,blink:blinkAt(t,o.blinks||[1.4,4.1,6.8,9.4]),hands:{},arm3d:true,tilt,open:o.open||0};
 p.hands.r=[lerp(70,210,pt),lerp(190,10,pt),lerp(50,80,pt)];p.hands.l=[-120,150,110];
 const hp=actor(x,'mara',MARA,p,null,'rgba(255,200,140,1)',1);
 // bigode com pontas viradas (por cima do bigode simples)
 x.save();x.translate(cx,y);x.scale(s,s);x.translate(0,-HR-20+br);x.rotate(tilt);const lk=look*44;x.fillStyle='#1E140E';x.lineCap='round';x.strokeStyle='#1E140E';x.lineWidth=7;
 x.beginPath();x.moveTo(lk-40,46);x.quadraticCurveTo(lk-58,46,lk-60,30);x.moveTo(lk+40,46);x.quadraticCurveTo(lk+58,46,lk+60,30);x.stroke();x.restore();
 const hl=h2w(hp,'l'),hr=h2w(hp,'r');openHand(x,hl[0],hl[1],-.2,MARA,.85*s);
 // giz entre os dedos
 x.save();x.translate(hr[0],hr[1]);x.rotate(-.6);x.fillStyle='#F4F0E8';x.fillRect(14*s,-5*s,34*s,10*s);x.restore();gripHand(x,hr[0],hr[1],-.3,MARA,.85*s);return hp}
