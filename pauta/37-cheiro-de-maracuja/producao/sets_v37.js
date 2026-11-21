// ===== Vídeo 37 — Como o vinho tem cheiro de maracujá sem ter maracujá? — desenhos das cenas =====
// molécula (enxofre amarelo brilhando, cadeado opcional), botijão e fogão, tanque de inox, levedura com tesourinha, goiaba, toranja,
// cassis, buxo, gato desconfiado, vinhedo de Marlborough (montanhas secas), mapa da Nova Zelândia e mapa-múndi, colhedeira com operador,
// serra catarinense com araucárias e geada, cofre, grão que se parte, nariz-radar.
function araucaria(x,cx,base,s){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='#3A2A1E';x.beginPath();x.moveTo(-10,0);x.lineTo(-6,-430);x.lineTo(6,-430);x.lineTo(10,0);x.fill();
 // galhos que sobem em curva (candelabro) com tufos verde-escuros nas pontas: copa achatada em forma de taça
 const B=[[-1,.0],[-1,.5],[1,.15],[1,.6],[-1,.9],[1,1],[0,0]];x.lineCap='round';
 for(const [sd,k] of B){const y0=-330-k*70,len=sd==0?0:150-k*30,ex=sd*len,ey=-470-k*10;if(sd){x.strokeStyle='#3A2A1E';x.lineWidth=7;x.beginPath();x.moveTo(0,y0);x.quadraticCurveTo(ex*.8,y0+10,ex,ey);x.stroke()}
  x.fillStyle='#1E3A28';x.beginPath();x.ellipse(ex,ey-8,52-k*8,20,0,0,7);x.fill();x.fillStyle='#2E5236';x.beginPath();x.ellipse(ex,ey-16,40-k*8,12,0,0,7);x.fill()}x.restore()}
// molécula estilizada: carbono (cinza), hidrogênio (branco), S amarelo brilhando; lock = cadeado preso por uma corrente
function molecule(g,cx,cy,s,t,o={}){g.save();g.translate(cx,cy);g.scale(s,s);const A=[[-150,0,'C'],[-75,-40,'C'],[0,0,'C'],[75,-40,'C'],[150,0,'C'],[-30,80,'O'],[0,-120,'S']];
 g.strokeStyle='#C9C2B4';g.lineWidth=10;g.lineCap='round';const B=[[0,1],[1,2],[2,3],[3,4],[2,5],[1,6]];for(const [a,b] of B){g.beginPath();g.moveTo(A[a][0],A[a][1]);g.lineTo(A[b][0],A[b][1]);g.stroke()}
 if(o.lock!=null){const cut=o.cut||0;g.strokeStyle='#B8B8B8';g.lineWidth=8;g.setLineDash([14,8]);g.beginPath();g.moveTo(0,-120);g.lineTo(lerp(110,160,cut),lerp(-200,-150,cut));g.stroke();g.setLineDash([]);
  g.save();g.translate(lerp(150,230,cut),lerp(-230,-120,cut));g.rotate(cut*.8);g.globalAlpha*=1-cut*.6;
  g.strokeStyle='#B8B8B8';g.lineWidth=12;g.beginPath();g.arc(0,-26,30,Math.PI,0);g.lineTo(30,0);g.moveTo(-30,-26);g.lineTo(-30,0);g.stroke();g.fillStyle=GOLD;g.beginPath();g.roundRect(-46,-10,92,74,10);g.fill();g.fillStyle='#2A0A10';g.beginPath();g.arc(0,18,9,0,7);g.fill();g.fillRect(-3,20,6,22);g.restore()}
 for(const [x,y,k] of A){const r=k=='S'?46:k=='O'?30:34;if(k=='S'){const p=.6+.4*Math.sin(t*4),gl=g.createRadialGradient(x,y,r*.4,x,y,r*2.6);gl.addColorStop(0,`rgba(255,230,90,${.55*p*(o.glow??1)})`);gl.addColorStop(1,'rgba(255,230,90,0)');g.fillStyle=gl;g.beginPath();g.arc(x,y,r*2.6,0,7);g.fill()}
  const gr=g.createRadialGradient(x-r*.35,y-r*.35,r*.15,x,y,r);gr.addColorStop(0,k=='S'?'#FFF2A0':k=='O'?'#F08A8A':'#9A948A');gr.addColorStop(1,k=='S'?'#E0A818':k=='O'?'#B0122E':'#4A4640');g.fillStyle=gr;g.beginPath();g.arc(x,y,r,0,7);g.fill();
  g.font=`900 ${r*.8}px Cinzel`;g.textAlign='center';g.textBaseline='middle';g.fillStyle=k=='S'?'#5A3A00':'#F3E6C8';g.fillText(k,x,y+2)}
 if(o.label)goldText(g,o.label,0,140,40,'Cinzel',900);g.restore()}
// botijão de gás (P13) com nuvenzinha de cheiro
function gasBottle(g,cx,base,s,t,smell=0){g.save();g.translate(cx,base);g.scale(s,s);let gr=g.createLinearGradient(-110,0,110,0);gr.addColorStop(0,'#5A6A7A');gr.addColorStop(.45,'#B8C4CE');gr.addColorStop(1,'#4A5866');g.fillStyle=gr;
 g.beginPath();g.roundRect(-110,-300,220,280,70);g.fill();g.fillStyle='#3A4652';g.fillRect(-90,-24,180,24);g.fillStyle='#2E3842';g.beginPath();g.roundRect(-60,-360,120,70,14);g.fill();g.fillStyle='#14181C';g.beginPath();g.roundRect(-36,-340,72,36,8);g.fill();
 g.fillStyle='#8E1B3A';g.fillRect(-12,-392,24,34);g.fillStyle='rgba(255,255,255,.35)';g.fillRect(-80,-250,12,180);g.strokeStyle='rgba(0,0,0,.25)';g.lineWidth=4;g.beginPath();g.moveTo(-110,-170);g.lineTo(110,-170);g.stroke();
 g.font='900 30px Cinzel';g.textAlign='center';g.fillStyle='#2A3440';g.fillText('GÁS',0,-120);
 if(smell>0){g.globalAlpha=smell;for(let i=0;i<4;i++){const u=((t*.35+i/4)%1),yy=-400-u*260,xx=Math.sin(u*7+i)*40;g.strokeStyle=`rgba(190,200,120,${.8*(1-u)})`;g.lineWidth=7;g.beginPath();g.moveTo(xx-40,yy);g.bezierCurveTo(xx-10,yy-30,xx+10,yy+30,xx+40,yy);g.stroke()}}
 g.restore()}
function stove(g,cx,base,s){g.save();g.translate(cx,base);g.scale(s,s);g.fillStyle='#D8D2C6';g.beginPath();g.roundRect(-220,-330,440,330,10);g.fill();g.fillStyle='#1A1416';g.fillRect(-220,-350,440,30);
 for(const k of [-110,110]){g.strokeStyle='#4A4446';g.lineWidth=8;g.beginPath();g.arc(k,-352,48,Math.PI,0);g.stroke()}g.fillStyle='#2A2224';g.beginPath();g.roundRect(-180,-270,360,200,12);g.fill();g.fillStyle='rgba(255,180,94,.15)';g.fillRect(-170,-260,340,180);
 for(let i=0;i<4;i++){g.fillStyle='#3A3436';g.beginPath();g.arc(-150+i*100,-300,14,0,7);g.fill()}g.restore()}
// tanque de inox com o vinho branco fermentando (bolhas) e uma janelinha
function inoxTank(g,cx,base,s,t,a=1){g.save();g.translate(cx,base);g.scale(s,s);let gr=g.createLinearGradient(-150,0,150,0);gr.addColorStop(0,'#6E6E72');gr.addColorStop(.35,'#E6E6E8');gr.addColorStop(.6,'#B4B4B8');gr.addColorStop(1,'#5A5A5E');g.fillStyle=gr;
 g.beginPath();g.moveTo(-150,-60);g.lineTo(-150,-520);g.quadraticCurveTo(0,-600,150,-520);g.lineTo(150,-60);g.closePath();g.fill();g.fillStyle='#4A4A4E';for(const k of [-120,120])g.fillRect(k-10,-60,20,60);
 g.strokeStyle='rgba(0,0,0,.25)';g.lineWidth=3;for(const y of [-180,-360]){g.beginPath();g.moveTo(-150,y);g.lineTo(150,y);g.stroke()}
 g.fillStyle='#1A1416';g.beginPath();g.ellipse(0,-300,60,80,0,0,7);g.fill();g.save();g.beginPath();g.ellipse(0,-300,52,72,0,0,7);g.clip();g.fillStyle='rgba(230,214,120,.9)';g.fillRect(-60,-330,120,120);
 for(let i=0;i<10;i++){const u=(t*.6+i*.13)%1;g.fillStyle='rgba(255,250,220,.7)';g.beginPath();g.arc(-35+i*8,-232-u*95,3,0,7);g.fill()}g.restore();g.strokeStyle='#C9C9CC';g.lineWidth=8;g.beginPath();g.ellipse(0,-300,60,80,0,0,7);g.stroke();
 g.fillStyle='#3A3A3E';g.beginPath();g.arc(0,-150,16,0,7);g.fill();g.restore()}
// adega moderna: parede de pedra escura, fileira de tanques de inox ao fundo, lâmpadas
function winery(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1A0A0E');g.addColorStop(1,'#2C0B15');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='#2A1418';x.fillRect(-900,700,W+1800,500);x.strokeStyle='rgba(212,162,76,.08)';x.lineWidth=2;for(let i=-6;i<30;i++){x.beginPath();x.moveTo(i*90,700);x.lineTo(i*160-800,1100);x.stroke()}
 for(const k of [-80,260,600,1320,1660,2000])inoxTank(x,k,760,.82,t);for(const lx of [430,1490]){const gl=x.createRadialGradient(lx,60,4,lx,160,420);gl.addColorStop(0,'rgba(255,200,120,.35)');gl.addColorStop(1,'rgba(255,190,110,0)');x.fillStyle=gl;x.fillRect(lx-420,0,840,700);x.fillStyle='#FFE2A8';x.beginPath();x.ellipse(lx,40,50,9,0,0,7);x.fill()}}
// levedura (bichinho com carinha, brotinho de lado) segurando uma tesourinha; snip 0..1 fecha a tesoura
function yeastScissor(g,cx,cy,r,t,snip=0){yeastFace(g,cx,cy,r,t,0,1.2);g.save();g.translate(cx+r*.95,cy-r*.15);g.rotate(-.5);g.strokeStyle='#E6BF98';g.lineWidth=r*.16;g.lineCap='round';g.beginPath();g.moveTo(-r*.55,r*.3);g.lineTo(-r*.08,r*.04);g.stroke();
 const op=.45*(1-snip);g.strokeStyle='#C9CCD2';g.lineWidth=r*.09;for(const sd of [-1,1]){g.save();g.rotate(sd*op);g.beginPath();g.moveTo(0,0);g.lineTo(r*.9,0);g.stroke();g.beginPath();g.arc(-r*.16,sd*r*.12,r*.12,0,7);g.stroke();g.restore()}g.restore()}
function guava(g,cx,cy,r,a=0){g.save();g.translate(cx,cy);g.rotate(a);let gr=g.createRadialGradient(-r*.3,-r*.3,r*.1,0,0,r);gr.addColorStop(0,'#C9DC7A');gr.addColorStop(1,'#6E8A2A');g.fillStyle=gr;g.beginPath();g.ellipse(0,0,r,r*.92,0,0,7);g.fill();
 g.fillStyle='#F7E6D0';g.beginPath();g.ellipse(0,0,r*.86,r*.78,0,0,7);g.fill();gr=g.createRadialGradient(0,0,r*.1,0,0,r*.7);gr.addColorStop(0,'#F0627A');gr.addColorStop(1,'#E8455E');g.fillStyle=gr;g.beginPath();g.ellipse(0,0,r*.7,r*.62,0,0,7);g.fill();
 g.fillStyle='#F7E2C8';const R=rng(5);for(let i=0;i<26;i++){const an=R()*7,d=r*(.22+R()*.3);g.beginPath();g.arc(Math.cos(an)*d,Math.sin(an)*d,r*.04,0,7);g.fill()}g.restore()}
function grapefruit(g,cx,cy,r){g.save();g.translate(cx,cy);g.fillStyle='#F2A23A';g.beginPath();g.arc(0,0,r,0,7);g.fill();g.fillStyle='#FBEBD0';g.beginPath();g.arc(0,0,r*.88,0,7);g.fill();
 for(let i=0;i<10;i++){const a0=i/10*Math.PI*2+.04,a1=(i+1)/10*Math.PI*2-.04;g.fillStyle=i%2?'#E8606A':'#F07078';g.beginPath();g.moveTo(0,0);g.arc(0,0,r*.8,a0,a1);g.closePath();g.fill()}g.restore()}
// balão de cheiro (círculo creme translúcido com uma fruta dentro, ligado à taça por bolinhas)
function smellBalloon(g,cx,cy,r,fromX,fromY,a,draw){if(a<=0)return;g.save();g.globalAlpha*=a;for(let i=1;i<=3;i++){const u=i/4;g.fillStyle='rgba(243,230,200,.55)';g.beginPath();g.arc(lerp(fromX,cx,u),lerp(fromY,cy+r,u),6+i*4,0,7);g.fill()}
 g.fillStyle='rgba(243,230,200,.16)';g.strokeStyle='rgba(242,210,122,.9)';g.lineWidth=4;g.beginPath();g.arc(cx,cy,r,0,7);g.fill();g.stroke();draw(g,cx,cy,r*.72);g.restore()}
function cassis(g,cx,cy,s){g.save();g.translate(cx,cy);g.scale(s,s);g.strokeStyle='#4A6A2A';g.lineWidth=6;g.beginPath();g.moveTo(0,-90);g.quadraticCurveTo(20,0,10,90);g.stroke();
 const B=[[-20,-50],[24,-30],[-18,-6],[28,14],[-10,36],[22,58],[0,84]];for(const [x,y] of B){g.strokeStyle='#4A6A2A';g.lineWidth=3;g.beginPath();g.moveTo(8+y*.05,y-8);g.lineTo(x,y);g.stroke();
  const gr=g.createRadialGradient(x-6,y-6,2,x,y,20);gr.addColorStop(0,'#6A4A7A');gr.addColorStop(1,'#1A0A22');g.fillStyle=gr;g.beginPath();g.arc(x,y,19,0,7);g.fill();g.fillStyle='rgba(255,255,255,.4)';g.beginPath();g.arc(x-6,y-7,4,0,7);g.fill()}g.restore()}
function boxBush(g,cx,base,s){g.save();g.translate(cx,base);g.scale(s,s);g.fillStyle='#5A3A22';g.fillRect(-150,-30,300,30);const R=rng(9);
 for(let i=0;i<140;i++){const x=-140+R()*280,y=-30-R()*200*(1-Math.abs(x)/220);g.fillStyle=['#2E5A26','#3E7A30','#24481E','#4E8A3A'][i%4];g.beginPath();g.ellipse(x,y,14,9,R()*3,0,7);g.fill()}g.restore()}
// gato de verdade: sentado de lado, orelhas, bigodes, rabo balançando; cara desconfiada (olhos meio fechados)
function cat(g,cx,base,s,t,look=-1){g.save();g.translate(cx,base);g.scale(s*look,s);const tail=Math.sin(t*2.2)*.25;
 g.strokeStyle='#C87A3A';g.lineWidth=26;g.lineCap='round';g.beginPath();g.moveTo(60,-20);g.quadraticCurveTo(150+tail*80,-40,130+tail*60,-170);g.stroke();
 let gr=g.createLinearGradient(0,-260,0,0);gr.addColorStop(0,'#E8A060');gr.addColorStop(1,'#B86A2E');g.fillStyle=gr;g.beginPath();g.ellipse(10,-110,95,115,0,0,7);g.fill();
 g.fillStyle='#F3E6C8';g.beginPath();g.ellipse(-40,-90,40,80,0,0,7);g.fill();g.fillStyle='#C87A3A';for(const k of [-50,0]){g.beginPath();g.ellipse(k,-10,26,16,0,0,7);g.fill()}
 g.strokeStyle='rgba(120,60,20,.5)';g.lineWidth=8;for(const y of [-170,-140,-110]){g.beginPath();g.moveTo(50,y);g.lineTo(95,y+10);g.stroke()}
 g.save();g.translate(-30,-250);g.fillStyle='#E8A060';g.beginPath();g.arc(0,0,80,0,7);g.fill();for(const sd of [-1,1]){g.beginPath();g.moveTo(sd*30,-60);g.lineTo(sd*72,-118);g.lineTo(sd*76,-36);g.closePath();g.fill();g.fillStyle='#F2B8A8';g.beginPath();g.moveTo(sd*40,-58);g.lineTo(sd*68,-98);g.lineTo(sd*68,-46);g.closePath();g.fill();g.fillStyle='#E8A060'}
 g.fillStyle='#F3E6C8';g.beginPath();g.ellipse(-8,30,40,30,0,0,7);g.fill();
 for(const sd of [-1,1]){g.fillStyle='#F2E8A0';g.beginPath();g.ellipse(sd*30-10,-8,17,10,0,0,7);g.fill();g.fillStyle='#1A1410';g.beginPath();g.ellipse(sd*30-10,-6,4,8,0,0,7);g.fill();g.fillStyle='#C87A3A';g.fillRect(sd*30-30,-22,40,10)}
 g.fillStyle='#D86A7A';g.beginPath();g.moveTo(-20,18);g.lineTo(0,18);g.lineTo(-10,30);g.closePath();g.fill();g.strokeStyle='#3A2418';g.lineWidth=3;g.beginPath();g.moveTo(-10,30);g.lineTo(-10,40);g.moveTo(-24,44);g.quadraticCurveTo(-10,36,4,44);g.stroke();
 g.strokeStyle='rgba(255,255,255,.85)';g.lineWidth=2.5;for(const sd of [-1,1])for(const k of [-6,4,14]){g.beginPath();g.moveTo(-10+sd*24,30+k*.4);g.lineTo(-10+sd*96,22+k*1.6);g.stroke()}g.restore();g.restore()}
// vinhedo de dia, Marlborough: céu claro, montanhas secas marrons, fileiras verdes em perspectiva
function marlborough(x,t){let g=x.createLinearGradient(0,-300,0,560);g.addColorStop(0,'#6FA0C8');g.addColorStop(1,'#D8E6EE');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1200);
 x.fillStyle='rgba(255,255,255,.8)';for(const [cx,cy,s] of [[300,120,1],[1300,90,1.3],[1800,170,.8]]){for(const [dx,dy,r] of [[-50,0,40],[0,-18,52],[50,0,40]]){x.beginPath();x.arc(cx+dx*s+t*4,cy+dy*s,r*s,0,7);x.fill()}}
 x.fillStyle='#A88A5E';x.beginPath();x.moveTo(-900,520);for(let i=0;i<=24;i++){const X=-900+i*170;x.lineTo(X,360+Math.sin(i*1.3)*70+Math.cos(i*.7)*40)}x.lineTo(W+900,560);x.closePath();x.fill();
 x.fillStyle='#8A6E48';x.beginPath();x.moveTo(-900,560);for(let i=0;i<=24;i++){const X=-900+i*170;x.lineTo(X,450+Math.sin(i*2.1+1)*40)}x.lineTo(W+900,600);x.closePath();x.fill();
 g=x.createLinearGradient(0,520,0,1100);g.addColorStop(0,'#8AA04A');g.addColorStop(1,'#5A7A2E');x.fillStyle=g;x.fillRect(-900,540,W+1800,700);
 for(let i=-14;i<=14;i++){const x0=960+i*30,x1=960+i*260;x.strokeStyle='#3A5A22';x.lineWidth=2+Math.abs(i)*.2;x.beginPath();x.moveTo(x0,545);x.lineTo(x1,1100);x.stroke();
  x.fillStyle='#2E5A1E';for(let k=0;k<10;k++){const u=k/10,px=lerp(x0,x1,u),py=lerp(545,1100,u),r=4+u*30;x.beginPath();x.ellipse(px,py-r*.6,r*1.2,r,0,0,7);x.fill()}}}
// serra catarinense: céu frio de manhã, morros verdes, araucárias, vinhedo com geada leve
function serraSC(x,t){let g=x.createLinearGradient(0,-300,0,560);g.addColorStop(0,'#8EA8C0');g.addColorStop(1,'#E6E2DA');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1200);
 x.fillStyle='#5E7A6A';x.beginPath();x.moveTo(-900,560);for(let i=0;i<=24;i++)x.lineTo(-900+i*170,400+Math.sin(i*1.1)*60);x.lineTo(W+900,600);x.closePath();x.fill();
 x.fillStyle='rgba(255,255,255,.35)';x.fillRect(-900,420,W+1800,80);for(const [ax,s] of [[120,.8],[330,.62],[1620,.85],[1820,.6],[1450,.5],[560,.45]])araucaria(x,ax,600,s);
 g=x.createLinearGradient(0,560,0,1100);g.addColorStop(0,'#7A9060');g.addColorStop(1,'#4E6A3A');x.fillStyle=g;x.fillRect(-900,580,W+1800,700);
 for(let i=-12;i<=12;i++){const x0=960+i*34,x1=960+i*280;x.strokeStyle='#3A2A1E';x.lineWidth=3;x.beginPath();x.moveTo(x0,585);x.lineTo(x1,1100);x.stroke();
  for(let k=0;k<9;k++){const u=k/9,px=lerp(x0,x1,u),py=lerp(585,1100,u),r=4+u*26;x.fillStyle='#3E5E2A';x.beginPath();x.ellipse(px,py-r*.6,r*1.2,r,0,0,7);x.fill();x.fillStyle='rgba(240,248,255,.55)';x.beginPath();x.ellipse(px,py-r*1.1,r*.9,r*.35,0,0,7);x.fill()}}
 x.fillStyle='rgba(240,248,255,.25)';x.fillRect(-900,580,W+1800,500)}
// mapa simples da Nova Zelândia (ilhas Norte e Sul) num pergaminho; hl = destaque em Marlborough
function nzMap(g,cx,cy,s,hl=0){const N=[[.58,.05],[.66,.2],[.74,.3],[.86,.36],[.8,.46],[.7,.48],[.64,.42],[.56,.3]],Sx=[[.52,.5],[.62,.52],[.58,.62],[.46,.78],[.32,.92],[.2,.9],[.26,.78],[.4,.62]];
 oldMap(g,cx,cy,520*s,620*s,[{pts:N},{pts:Sx,col:'#D9C493'}]);const [mx,my]=mp(cx,cy,520*s,620*s,[.56,.53]);if(hl>0)pin(g,mx,my,'MARLBOROUGH',hl,'#B0122E',-30*s)}
// mapa-múndi estilizado (continentes em blocos suaves), ret. 1000x520 no centro
function worldMap(g,cx,cy,w,h){g.save();g.fillStyle='rgba(60,90,120,.35)';g.beginPath();g.roundRect(cx-w/2,cy-h/2,w,h,20);g.fill();g.strokeStyle=GOLD;g.lineWidth=4;g.stroke();
 const C=[[.2,.3,.13,.16],[.27,.7,.07,.17],[.49,.25,.07,.1],[.52,.58,.08,.17],[.7,.3,.17,.15],[.82,.72,.07,.07],[.94,.86,.02,.04]];g.fillStyle='#C9B07A';for(const [a,b,rw,rh] of C){g.beginPath();g.ellipse(cx-w/2+a*w,cy-h/2+b*h,rw*w,rh*h,0,0,7);g.fill()}g.restore()}
// colhedeira (máquina alta em forma de arco que passa por cima da fileira) com operador na cabine
function harvester(g,cx,base,s,t){g.save();g.translate(cx,base);g.scale(s,s);const sh=Math.sin(t*30)*3;
 g.fillStyle='#1A1416';for(const k of [-150,150]){g.beginPath();g.arc(k,-50,50,0,7);g.fill();g.fillStyle='#5A5458';g.beginPath();g.arc(k,-50,20,0,7);g.fill();g.fillStyle='#1A1416'}
 g.fillStyle='#B0122E';g.beginPath();g.moveTo(-200,-60);g.lineTo(-200,-420);g.lineTo(200,-420);g.lineTo(200,-60);g.lineTo(120,-60);g.lineTo(120,-330);g.lineTo(-120,-330);g.lineTo(-120,-60);g.closePath();g.fill();
 g.fillStyle='#8E1B3A';g.fillRect(-200,-440,400,30);g.fillStyle='#F3E6C8';g.font='900 26px Cinzel';g.textAlign='center';g.fillText('COLHEITA',0,-370);
 g.strokeStyle='#C9C2B4';g.lineWidth=6;for(let i=0;i<5;i++){g.beginPath();g.moveTo(-110,-300+i*50+sh);g.lineTo(110,-300+i*50-sh);g.stroke()}
 g.fillStyle='#2A2224';g.beginPath();g.roundRect(60,-640,200,200,14);g.fill();g.fillStyle='rgba(180,220,240,.35)';g.fillRect(76,-624,168,110);g.restore()}
// grão dourado que se parte em pedacinhos até sumir (u 0..1)
function grainSplit(g,cx,cy,u){g.save();const n=Math.floor(1+u*u*80),R=rng(3);for(let i=0;i<n;i++){const an=R()*7,d=u*R()*300,r=Math.max(1.5,40/Math.sqrt(n));g.fillStyle=`rgba(242,210,122,${1-u*.6})`;g.beginPath();g.arc(cx+Math.cos(an)*d,cy+Math.sin(an)*d*.6,r,0,7);g.fill()}g.restore()}
// cofre dourado; open 0..1 abre a porta e solta um brilho
function safeBox(g,cx,cy,s,open=0,t=0){g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle='#3A2A1E';g.beginPath();g.roundRect(-150,-150,300,300,16);g.fill();g.fillStyle='#120A08';g.fillRect(-120,-120,240,240);
 if(open>0){const gl=g.createRadialGradient(0,0,10,0,0,200);gl.addColorStop(0,`rgba(255,220,120,${.7*open})`);gl.addColorStop(1,'rgba(255,220,120,0)');g.fillStyle=gl;g.fillRect(-200,-200,400,400)}
 g.save();g.translate(-120,0);g.scale(Math.cos(open*1.3),1);let gr=g.createLinearGradient(0,-120,240,120);gr.addColorStop(0,'#F2D27A');gr.addColorStop(1,'#A8782C');g.fillStyle=gr;g.beginPath();g.roundRect(0,-120,240,240,10);g.fill();
 g.strokeStyle='#5A3A10';g.lineWidth=6;g.beginPath();g.arc(120,0,46,0,7);g.stroke();for(let i=0;i<8;i++){const a=i/8*7+t;g.beginPath();g.moveTo(120+Math.cos(a)*30,Math.sin(a)*30);g.lineTo(120+Math.cos(a)*46,Math.sin(a)*46);g.stroke()}g.restore();g.restore()}
// nariz de perfil com ondas de radar (detector)
function noseRadar(g,cx,cy,s,t,a=1){g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle='#E6BF98';g.beginPath();g.moveTo(0,-120);g.quadraticCurveTo(20,-40,70,40);g.quadraticCurveTo(80,62,50,66);g.quadraticCurveTo(30,90,0,70);g.lineTo(0,-120);g.fill();
 g.fillStyle='#C9966E';g.beginPath();g.ellipse(36,58,12,6,.3,0,7);g.fill();for(let i=0;i<3;i++){const u=(t*.8+i/3)%1;g.strokeStyle=`rgba(242,210,122,${(1-u)*a})`;g.lineWidth=6;g.beginPath();g.arc(70,40,40+u*160,-.7,.7);g.stroke()}g.restore()}
// barra de porcentagem: total guardado x pedacinho que vira cheiro
function pctBar(g,cx,cy,w,h,u,t){g.save();g.fillStyle='rgba(30,6,12,.85)';g.strokeStyle=GOLD;g.lineWidth=4;g.beginPath();g.roundRect(cx-w/2,cy-h/2,w,h,14);g.fill();g.stroke();
 const n=20;for(let i=0;i<n;i++){const x=cx-w/2+10+i*(w-20)/n,lit=i<2?u:0;g.fillStyle=lit>0?`rgba(242,210,122,${.3+.7*lit})`:'rgba(243,230,200,.12)';g.beginPath();g.roundRect(x+3,cy-h/2+10,(w-20)/n-6,h-20,6);g.fill()}g.restore()}
// Sommelier sem balcão? não: os extras são npc (mesmo rig). Operador da colhedeira: boné, colete refletivo laranja, óculos escuros, luvas
const OPERADOR=()=>CHX({cloth:'#5A6A7A',hood:'#4A5A68',outfit:'vest',vest:'#F07A1A',short:'#3A2A20',part:1,beard:'#3A2A20',beardT:'short',hand:'#3A3A3E',finger:'#2A2A2E'});
function fakerKitchen(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1E1418');g.addColorStop(1,'#3A2A26');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='#E9E2D2';for(let i=0;i<14;i++)for(let j=0;j<5;j++){x.fillStyle=(i+j)%2?'#D9D2C2':'#E9E2D2';x.fillRect(-100+i*150,120+j*90,148,88)}
 x.fillStyle='#5A3A22';x.fillRect(-900,700,W+1800,40);x.fillStyle='#3A2414';x.fillRect(-900,740,W+1800,400);
 let lg=x.createRadialGradient(960,200,10,960,200,500);lg.addColorStop(0,'rgba(255,220,150,.35)');lg.addColorStop(1,'rgba(255,220,150,0)');x.fillStyle=lg;x.fillRect(400,-100,1100,800)}
function flag(x,kind,cx,cy,w){const h=w*.66;x.save();x.translate(cx-w/2,cy-h/2);x.beginPath();x.rect(0,0,w,h);x.clip();
 if(kind=='br'){x.fillStyle='#1E8A3A';x.fillRect(0,0,w,h);x.fillStyle='#F2D13A';x.beginPath();x.moveTo(w*.08,h/2);x.lineTo(w/2,h*.1);x.lineTo(w*.92,h/2);x.lineTo(w/2,h*.9);x.closePath();x.fill();x.fillStyle='#1E3A8A';x.beginPath();x.arc(w/2,h/2,h*.24,0,7);x.fill();x.strokeStyle='#F3F0E6';x.lineWidth=h*.04;x.beginPath();x.arc(w/2,h*.75,h*.4,-2.3,-.84);x.stroke()}
 else if(kind=='uk'){x.fillStyle='#1E2E6A';x.fillRect(0,0,w,h);x.strokeStyle='#F3F0E6';x.lineWidth=h*.2;x.beginPath();x.moveTo(0,0);x.lineTo(w,h);x.moveTo(w,0);x.lineTo(0,h);x.stroke();x.strokeStyle='#C8213F';x.lineWidth=h*.07;x.stroke();x.strokeStyle='#F3F0E6';x.lineWidth=h*.32;x.beginPath();x.moveTo(w/2,0);x.lineTo(w/2,h);x.moveTo(0,h/2);x.lineTo(w,h/2);x.stroke();x.strokeStyle='#C8213F';x.lineWidth=h*.18;x.stroke()}
 else if(kind=='fr'){for(const [i,c] of [[0,'#1E3A8A'],[1,'#F3F0E6'],[2,'#C8213F']]){x.fillStyle=c;x.fillRect(i*w/3,0,w/3+1,h)}}
 else if(kind=='de'){for(const [i,c] of [[0,'#141414'],[1,'#C8213F'],[2,'#F2C12E']]){x.fillStyle=c;x.fillRect(0,i*h/3,w,h/3+1)}}
 x.restore();x.save();x.strokeStyle=GOLD;x.lineWidth=4;x.strokeRect(cx-w/2,cy-h/2,w,h);x.restore()}
