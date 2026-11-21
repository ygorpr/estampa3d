// ===== Vídeo 26 — cenários e personagens das cenas (carregado DEPOIS do film.js; usa sets_pisa/sets_porto) =====
// parede de tumba egípcia (pintura plana, ocre e azul) com faixas e hieróglifos genéricos
function egyptWall(x,t){x.fillStyle='#D9B878';x.fillRect(-900,-600,W+1800,1900);x.fillStyle='rgba(120,80,30,.12)';const R=rng(4);for(let i=0;i<300;i++){x.beginPath();x.arc(R()*W,R()*H,2+R()*6,0,7);x.fill()}
 for(const [y,h,c] of [[40,26,'#2E5A8A'],[66,10,'#B0402A'],[860,14,'#B0402A'],[874,30,'#2E5A8A']]){x.fillStyle=c;x.fillRect(-900,y,W+1800,h)}
 x.fillStyle='#5A3A1A';const G=['eye','bird','wave','ankh','reed'];for(let i=0;i<26;i++){const gx=80+i*70,gy=140,k=G[i%5];x.save();x.translate(gx,gy);if(k=='eye'){x.beginPath();x.ellipse(0,0,20,9,0,0,7);x.fill();x.fillStyle='#D9B878';x.beginPath();x.arc(0,0,5,0,7);x.fill();x.fillStyle='#5A3A1A'}
  else if(k=='bird'){x.beginPath();x.ellipse(0,4,12,16,0,0,7);x.fill();x.beginPath();x.arc(4,-14,7,0,7);x.fill()}else if(k=='wave'){x.lineWidth=4;x.strokeStyle='#2E5A8A';x.beginPath();for(let k2=-20;k2<=20;k2+=10)x.lineTo(k2,k2%20?-6:6);x.stroke()}
  else if(k=='ankh'){x.lineWidth=5;x.strokeStyle='#5A3A1A';x.beginPath();x.ellipse(0,-12,7,10,0,0,7);x.moveTo(0,-2);x.lineTo(0,26);x.moveTo(-12,4);x.lineTo(12,4);x.stroke()}else{x.fillRect(-3,-20,6,40);x.beginPath();x.ellipse(5,-18,7,4,.5,0,7);x.fill()}x.restore()}}
// pisador egípcio de PERFIL (estilo das pinturas): peruca preta, olho grande, saiote branco, mãos nas cordas da trave; ph = fase do passo, slip = pé escorregando
function egyptTreader(x,cx,base,s,t,ph=0,slip=0){x.save();x.translate(cx,base);x.scale(s,s);const st=Math.sin(t*3+ph),sk='#A0603A';x.lineCap='round';
 // cordas da trave
 x.strokeStyle='#7A5A2A';x.lineWidth=5;x.beginPath();x.moveTo(-30,-520);x.lineTo(-24,-330);x.moveTo(30,-520);x.lineTo(34,-320);x.stroke();
 // pernas (uma sobe, outra desce)
 const leg=(hx,up,sl)=>{x.strokeStyle=sk;x.lineWidth=26;x.beginPath();x.moveTo(hx,-150);x.lineTo(hx+10+sl*30,-80-up*40);x.lineTo(hx+sl*70,0-up*50);x.stroke();x.fillStyle=sk;x.beginPath();x.ellipse(hx+sl*70+16,-up*50,26,10,0,0,7);x.fill()};
 leg(-14,Math.max(0,st),0);leg(14,Math.max(0,-st),slip);
 // saiote branco
 x.fillStyle='#F4F0E8';x.beginPath();x.moveTo(-40,-200);x.lineTo(40,-200);x.lineTo(56,-120);x.lineTo(-50,-120);x.closePath();x.fill();x.strokeStyle='rgba(0,0,0,.15)';x.lineWidth=3;for(let k=-30;k<50;k+=16){x.beginPath();x.moveTo(k,-196);x.lineTo(k+6,-124);x.stroke()}
 // tronco (ombros de frente, como na pintura)
 x.fillStyle=sk;x.beginPath();x.moveTo(-58,-320);x.lineTo(58,-320);x.lineTo(40,-200);x.lineTo(-40,-200);x.closePath();x.fill();
 // braços erguidos até as cordas
 x.strokeStyle=sk;x.lineWidth=20;x.beginPath();x.moveTo(-52,-312);x.lineTo(-44,-380);x.lineTo(-24,-430);x.moveTo(52,-312);x.lineTo(50,-382);x.lineTo(34,-430);x.stroke();
 x.fillStyle=sk;for(const hx of [-24,34]){x.beginPath();x.arc(hx,-436,13,0,7);x.fill()}
 // pescoço, cabeça de perfil, peruca, olho
 x.fillRect(-10,-350,22,34);x.beginPath();x.ellipse(6,-388,38,44,0,0,7);x.fill();x.beginPath();x.moveTo(40,-392);x.lineTo(54,-378);x.lineTo(40,-372);x.fill();
 x.fillStyle='#14101A';x.beginPath();x.moveTo(-36,-420);x.quadraticCurveTo(0,-450,34,-420);x.lineTo(30,-404);x.lineTo(-10,-404);x.lineTo(-14,-350);x.lineTo(-40,-356);x.closePath();x.fill();
 x.fillStyle='#F4F0E8';x.beginPath();x.ellipse(26,-394,11,6,0,0,7);x.fill();x.fillStyle='#14101A';x.beginPath();x.arc(28,-394,4,0,7);x.fill();x.strokeStyle='#14101A';x.lineWidth=3;x.beginPath();x.moveTo(14,-394);x.lineTo(40,-392);x.stroke();
 x.strokeStyle='#5A2A1A';x.lineWidth=3;x.beginPath();x.moveTo(36,-366);x.lineTo(46,-366);x.stroke();
 // colar azul
 x.strokeStyle='#2E5A8A';x.lineWidth=10;x.beginPath();x.arc(0,-326,40,.3,Math.PI-.3);x.stroke();x.restore()}
// tanque pintado (egípcio) com uvas e cano de suco
function egyptVat(x,cx,base,w,t){x.fillStyle='#8A5A2A';x.fillRect(cx-w/2,base-120,w,120);x.strokeStyle='#5A3A1A';x.lineWidth=5;x.strokeRect(cx-w/2,base-120,w,120);x.fillStyle='#5A1A3A';x.fillRect(cx-w/2+6,base-130,w-12,20);
 for(let i=0;i<w/30;i++){x.fillStyle='#6E2A5A';x.beginPath();x.arc(cx-w/2+16+i*30,base-130,12,0,7);x.fill()}
 x.fillStyle='#5A3A1A';x.fillRect(cx+w/2,base-60,70,20);x.fillStyle='#7A1838';const k=(t*1.2)%1;x.fillRect(cx+w/2+60,base-44,12,90);x.beginPath();x.arc(cx+w/2+66,base+50+k*10,10,0,7);x.fill();
 x.fillStyle='#8A5A2A';x.beginPath();x.moveTo(cx+w/2+20,base+60);x.lineTo(cx+w/2+110,base+60);x.lineTo(cx+w/2+96,base+130);x.lineTo(cx+w/2+34,base+130);x.closePath();x.fill()}
function egyptBeam(x,x0,x1,y){x.fillStyle='#6A4426';x.fillRect(x0,y-14,x1-x0,28);x.fillStyle='#4A2E18';x.fillRect(x0+20,y+14,24,700);x.fillRect(x1-44,y+14,24,700)}
// tanque romano de pedra
function romanTank(x,cx,base,s){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='#B8A88A';x.fillRect(-220,-160,440,160);x.strokeStyle='#7A6A50';x.lineWidth=5;x.strokeRect(-220,-160,440,160);for(let k=-220;k<220;k+=88){x.beginPath();x.moveTo(k,-160);x.lineTo(k,0);x.stroke()}
 x.fillStyle='#5A1230';x.fillRect(-210,-172,420,20);for(let i=0;i<14;i++){x.fillStyle=i%2?'#8E2A52':'#6E1838';x.beginPath();x.arc(-200+i*30,-172,12,0,7);x.fill()}
 x.fillStyle='#9A8A6E';x.fillRect(-250,-180,30,180);x.fillRect(220,-180,30,180);x.fillStyle='#D4A24C';x.font='900 30px Cinzel';x.textAlign='center';x.fillText('ROMA',0,-70);x.restore()}
// prensa de ferro (parafuso com volante girando)
function ironPress(x,cx,base,s,t){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='#3A3A42';x.fillRect(-200,-40,400,40);x.fillStyle='#5A3A22';x.fillRect(-160,-200,320,160);x.strokeStyle='#2A2A30';x.lineWidth=6;for(let k=-160;k<=160;k+=40){x.beginPath();x.moveTo(k,-200);x.lineTo(k,-40);x.stroke()}
 x.fillStyle='#4A4A54';x.fillRect(-180,-420,24,380);x.fillRect(156,-420,24,380);x.fillRect(-180,-440,360,30);x.fillStyle='#6A6A74';x.fillRect(-12,-440,24,220);x.fillRect(-150,-230,300,30);
 x.save();x.translate(0,-470);x.scale(1,.35);x.rotate(t*1.5);x.strokeStyle='#8A8A94';x.lineWidth=14;x.beginPath();x.arc(0,0,110,0,7);x.stroke();for(let k=0;k<4;k++){x.rotate(Math.PI/4);x.beginPath();x.moveTo(-110,0);x.lineTo(110,0);x.stroke()}x.restore();
 x.fillStyle='#7A1838';x.fillRect(-200,-10,400,10);x.restore()}
// mapa de Portugal (contorno simples) com o Douro brilhando
function ptMap(g,cx,cy,s,glow,t){g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle='rgba(20,6,10,.85)';g.beginPath();g.roundRect(-230,-330,460,660,20);g.fill();g.strokeStyle='#D4A24C';g.lineWidth=4;g.stroke();
 const P=[[-60,-280],[60,-290],[110,-250],[150,-250],[140,-160],[90,-120],[100,-20],[70,40],[90,120],[60,200],[70,270],[-20,280],[-70,250],[-90,170],[-120,120],[-110,40],[-90,-40],[-120,-120],[-100,-200]];
 g.fillStyle='#5A7A3C';g.beginPath();P.forEach((p,i)=>i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1]));g.closePath();g.fill();g.strokeStyle='#E9D8B0';g.lineWidth=3;g.stroke();
 g.strokeStyle=`rgba(242,210,122,${.5+.5*glow})`;g.lineWidth=8+6*glow*(.7+.3*Math.sin(t*4));g.lineCap='round';g.beginPath();g.moveTo(-95,-190);g.quadraticCurveTo(0,-200,40,-185);g.quadraticCurveTo(100,-175,140,-200);g.stroke();
 if(glow>0){goldText(g,'DOURO',30,-230,30)}g.restore()}
// uva gigante em corte: casca roxa, polpa verde-clara, sementes
function grapeCut(g,cx,cy,r,hiSeed=0,crack=0,t=0){g.save();g.fillStyle='#3A1030';g.beginPath();g.ellipse(cx,cy,r,r*1.12,0,0,7);g.fill();g.fillStyle='#D8E6B4';g.beginPath();g.ellipse(cx,cy,r*.86,r*.97,0,0,7);g.fill();
 g.fillStyle='rgba(255,255,255,.35)';g.beginPath();g.ellipse(cx-r*.3,cy-r*.4,r*.2,r*.1,-.5,0,7);g.fill();
 for(const [dx,dy,a] of [[-.25,.1,.4],[.25,.15,-.4]]){const sx=cx+dx*r,sy=cy+dy*r;g.save();g.translate(sx,sy);g.rotate(a);if(hiSeed>0){g.fillStyle=`rgba(242,210,122,${.45*hiSeed})`;g.beginPath();g.ellipse(0,0,r*.2,r*.26,0,0,7);g.fill()}
  g.fillStyle='#8A5A2A';g.beginPath();g.ellipse(0,0,r*.11,r*.17,0,0,7);g.fill();if(crack>0){g.strokeStyle='#2A1408';g.lineWidth=4;g.beginPath();g.moveTo(-r*.08,-r*.14);g.lineTo(r*.03,-r*.02);g.lineTo(-r*.04,r*.06);g.lineTo(r*.06,r*.15);g.stroke()}g.restore()}g.restore()}
// semente grande (rachando) e nuvem cinza de amargor
function bigSeed(g,cx,cy,s,crack,t){g.save();g.translate(cx,cy);g.scale(s,s);const o=crack*20;for(const sd of [-1,1]){g.save();g.translate(sd*o,0);g.rotate(sd*crack*.2);g.fillStyle='#8A5A2A';g.beginPath();g.moveTo(0,-110);g.quadraticCurveTo(sd*80,-40,sd*60,40);g.quadraticCurveTo(sd*30,100,0,110);g.closePath();g.fill();g.fillStyle='rgba(255,230,200,.2)';g.beginPath();g.ellipse(sd*24,-30,10,30,0,0,7);g.fill();g.restore()}
 if(crack>.3){g.fillStyle=`rgba(120,120,120,${.6*crack})`;for(let i=0;i<7;i++){const a=i*.9+t*.5;g.beginPath();g.arc(Math.cos(a)*120*crack,-80-Math.abs(Math.sin(a))*90*crack,30+i*4,0,7);g.fill()}}g.restore()}
// pé descalço grande pisando a uva (close de perfil); press 0..1; bagos estouram, semente fica inteira
function footPress(g,cx,base,s,press,t){g.save();g.translate(cx,base);g.scale(s,s);uvaMassa(g,-380,380,-60,60,7,1.2);const y=-260+press*190;
 g.fillStyle='#D8A47E';g.strokeStyle='#D8A47E';g.lineWidth=90;g.lineCap='round';g.beginPath();g.moveTo(-20,y-400);g.lineTo(-10,y-60);g.stroke();
 g.beginPath();g.moveTo(-60,y-80);g.quadraticCurveTo(-70,y+10,-40,y+20);g.lineTo(190,y+30);g.quadraticCurveTo(230,y+20,220,y-10);g.quadraticCurveTo(160,y-40,40,y-90);g.closePath();g.fill();
 for(const [tx,r] of [[214,14],[196,12],[178,11],[162,10]]){g.beginPath();g.arc(tx,y+10,r,0,7);g.fill()}g.fillStyle='rgba(110,24,56,.6)';g.fillRect(-60,y-40,280,64);
 if(press>.6){for(let i=0;i<10;i++){const a=-Math.PI*(i/9),r=120+press*90;g.fillStyle='#7A1838';g.beginPath();g.arc(80+Math.cos(a)*r,-40+Math.sin(a)*r*.6,9,0,7);g.fill()}}g.restore()}
// relógio
function clockS(g,cx,cy,r,t){g.save();g.fillStyle='#F3E6C8';g.beginPath();g.arc(cx,cy,r,0,7);g.fill();g.strokeStyle='#D4A24C';g.lineWidth=8;g.stroke();g.strokeStyle='#5E1428';g.lineWidth=6;g.lineCap='round';g.beginPath();g.moveTo(cx,cy);g.lineTo(cx+Math.cos(t*2)*r*.75,cy+Math.sin(t*2)*r*.75);g.moveTo(cx,cy);g.lineTo(cx+Math.cos(t*.2)*r*.5,cy+Math.sin(t*.2)*r*.5);g.stroke();g.restore()}
// tanque com o mosto ganhando cor (u 0..1)
function mustTank(g,cx,base,w,h,u){g.save();g.fillStyle='rgba(243,230,200,.15)';g.strokeStyle='#F3E6C8';g.lineWidth=5;g.beginPath();g.roundRect(cx-w/2,base-h,w,h,10);g.fill();g.stroke();g.beginPath();g.roundRect(cx-w/2+6,base-h*.75,w-12,h*.75-6,8);g.fillStyle=mixC('#E6C27A','#5A0A22',u);g.fill();
 for(let i=0;i<10;i++){g.fillStyle='#3A0A1E';g.beginPath();g.arc(cx-w/2+24+i*(w-48)/9,base-h*.75+8,12,0,7);g.fill()}g.restore()}
// boneco simples de contagem (silhueta de pisador)
function miniMan(g,cx,cy,s,col){g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle=col;g.beginPath();g.arc(0,-46,16,0,7);g.fill();g.beginPath();g.roundRect(-18,-28,36,48,10);g.fill();g.fillRect(-16,18,12,34);g.fillRect(4,18,12,34);g.restore()}
// lagar robótico de inox: ponte com "pés" de silicone subindo e descendo, luzinha de status, vapor
function robotLagar(g,cx,base,s,t){g.save();g.translate(cx,base);g.scale(s,s);let gr=g.createLinearGradient(-500,0,500,0);gr.addColorStop(0,'#7A8088');gr.addColorStop(.5,'#D8DCE0');gr.addColorStop(1,'#6A7078');
 g.fillStyle=gr;g.fillRect(-520,-200,1040,200);uvaMassa(g,-500,500,-200,-140,13,1.1);g.fillStyle=gr;g.fillRect(-520,-150,1040,150);g.strokeStyle='rgba(0,0,0,.25)';g.lineWidth=3;for(let k=-480;k<520;k+=120){g.beginPath();g.moveTo(k,-150);g.lineTo(k,0);g.stroke()}
 g.fillStyle='#9AA0A8';g.fillRect(-540,-620,40,620);g.fillRect(500,-620,40,620);g.fillStyle='#B8BEC6';g.fillRect(-540,-640,1080,70);g.fillStyle='#4A5058';g.fillRect(-540,-578,1080,8);
 g.fillStyle=(Math.sin(t*4)>0)?'#6AD07A':'#2A6A3A';g.beginPath();g.arc(460,-605,12,0,7);g.fill();
 for(let i=0;i<6;i++){const fx=-400+i*160,y=-430+Math.max(0,Math.sin(t*2.2+i*1.05))*-110+110;g.fillStyle='#C9CDD2';g.fillRect(fx-10,-570,20,y+570-60);
  g.fillStyle='#E9E6E0';g.beginPath();g.ellipse(fx,y-40,52,26,0,0,7);g.fill();g.fillStyle='#B8B4AE';g.beginPath();g.ellipse(fx,y-30,52,14,0,0,Math.PI);g.fill();
  g.fillStyle='rgba(255,255,255,.18)';for(let k=0;k<3;k++){const v=((t*.6+i*.3+k*.33)%1);g.beginPath();g.arc(fx+Math.sin(t+k)*14,y-60-v*120,10+v*14,0,7);g.fill()}}g.restore()}
// pistões num tanque (Taylor's)
function pistonTank(g,cx,base,s,t){g.save();g.translate(cx,base);g.scale(s,s);g.fillStyle='#5A5E66';g.fillRect(-300,-220,600,220);uvaMassa(g,-290,290,-220,-170,17,1);g.fillStyle='#4A4E56';g.fillRect(-300,-170,600,170);
 g.fillStyle='#8A8E96';g.fillRect(-320,-560,640,40);for(let i=0;i<4;i++){const px=-210+i*140,y=-300+Math.max(0,Math.sin(t*2.6+i*1.6))*-80;g.fillStyle='#B8BEC6';g.fillRect(px-12,-520,24,y+520);g.fillStyle='#6A6E76';g.fillRect(px-46,y,92,30)}g.restore()}
// barra de porcentagem
function pctBar(g,cx,cy,w,u,lbl){g.save();g.fillStyle='rgba(20,6,10,.9)';g.beginPath();g.roundRect(cx-w/2,cy-34,w,68,34);g.fill();g.strokeStyle='#D4A24C';g.lineWidth=4;g.stroke();g.fillStyle='#D4A24C';g.beginPath();g.roundRect(cx-w/2+8,cy-26,(w-16)*u,52,26);g.fill();goldText(g,lbl,cx,cy-76,44);g.restore()}
// pé com coroa
function crownFoot(g,cx,cy,s){g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle='#D8A47E';g.beginPath();g.moveTo(-40,-120);g.lineTo(40,-120);g.lineTo(40,0);g.quadraticCurveTo(140,0,150,30);g.quadraticCurveTo(150,56,100,56);g.lineTo(-50,56);g.quadraticCurveTo(-70,40,-50,0);g.closePath();g.fill();
 for(const [tx,r] of [[146,14],[128,12],[110,11],[94,10]]){g.beginPath();g.arc(tx,48,r,0,7);g.fill()}g.fillStyle='rgba(110,24,56,.6)';g.fillRect(-56,30,200,26);
 g.translate(0,-170);g.fillStyle='#F2D27A';g.beginPath();g.moveTo(-60,30);g.lineTo(-70,-30);g.lineTo(-35,0);g.lineTo(0,-45);g.lineTo(35,0);g.lineTo(70,-30);g.lineTo(60,30);g.closePath();g.fill();g.fillStyle='#C8213F';g.beginPath();g.arc(0,10,9,0,7);g.fill();g.restore()}
// torneira de parede com água
function tapWater(g,cx,cy,len,t){g.save();g.fillStyle='#8A8E96';g.fillRect(cx-10,cy-60,20,60);g.fillRect(cx-60,cy-10,70,20);g.fillStyle='#C9CDD2';g.beginPath();g.arc(cx,cy-70,18,0,7);g.fill();
 g.fillStyle='rgba(150,200,240,.6)';g.fillRect(cx-54,cy+10,14,len);for(let i=0;i<6;i++){const k=(t*2+i/6)%1;g.fillStyle=`rgba(200,230,255,${.9-k*.6})`;g.beginPath();g.arc(cx-47+Math.sin(i)*6,cy+10+k*len,6,0,7);g.fill()}g.restore()}
function soapBubbles(g,cx,cy,t){g.save();for(let i=0;i<12;i++){const k=(t*.4+i/12)%1;g.strokeStyle=`rgba(255,255,255,${.8-k*.6})`;g.lineWidth=3;g.beginPath();g.arc(cx+Math.sin(i*2.3+t)*80,cy-k*160,8+(i%4)*5,0,7);g.stroke()}g.fillStyle='#F2E6A8';g.beginPath();g.roundRect(cx+90,cy-20,80,40,10);g.fill();g.restore()}
// micróbio vilão (verde, cara brava) — foge
function badBug(g,cx,cy,r,t,ph=0){g.save();g.translate(cx,cy+Math.sin(t*6+ph)*5);g.fillStyle='#5AA04A';g.beginPath();for(let i=0;i<12;i++){const a=i*Math.PI/6,rr=r*(i%2?.8:1);g.lineTo(Math.cos(a)*rr,Math.sin(a)*rr)}g.closePath();g.fill();
 g.fillStyle='#14200E';for(const sd of [-1,1]){g.beginPath();g.arc(sd*r*.3,-r*.1,r*.12,0,7);g.fill()}g.strokeStyle='#14200E';g.lineWidth=r*.08;g.beginPath();g.moveTo(-r*.45,-r*.4);g.lineTo(-r*.15,-r*.25);g.moveTo(r*.45,-r*.4);g.lineTo(r*.15,-r*.25);g.stroke();
 g.beginPath();g.arc(0,r*.42,r*.2,Math.PI*1.1,Math.PI*1.9);g.stroke();g.restore()}
// festa colonial: céu de fim de tarde, parreiral (latada) com cachos, bandeirolas verde-branco-vermelho
function festaUva(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#3A1A3A');g.addColorStop(.6,'#C86A4A');g.addColorStop(1,'#E8A060');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='#5A3A2A';for(const px of [-300,300,900,1500,2100]){x.fillRect(px-12,120,24,800)}x.fillStyle='#4A2E1C';x.fillRect(-900,110,W+1800,22);
 for(let i=-6;i<24;i++){vineLeaf(x,i*110+((i%2)*40),150+Math.sin(i)*20,1.4,i*.7);if(i%3==0)cachoT(x,i*110+30,170,.8,0)}
 const C=['#1E8A3A','#F3F0E6','#C8213F'];for(let r=0;r<2;r++){x.strokeStyle='rgba(60,40,30,.6)';x.lineWidth=2;x.beginPath();for(let k=-200;k<W+200;k+=20)x.lineTo(k,260+r*90+Math.sin(k*.006)*30);x.stroke();
  for(let k=-160,i=0;k<W+200;k+=70,i++){const y=260+r*90+Math.sin(k*.006)*30;x.fillStyle=C[i%3];x.beginPath();x.moveTo(k-24,y);x.lineTo(k+24,y);x.lineTo(k,y+40+Math.sin(t*3+i)*3);x.closePath();x.fill()}}
 x.fillStyle='#6A4A2A';x.fillRect(-900,860,W+1800,300)}
// tina de madeira com uva (na festa)
function tina(g,cx,base,w,h){g.save();g.fillStyle='#8A5A34';g.beginPath();g.moveTo(cx-w/2,base-h);g.lineTo(cx+w/2,base-h);g.lineTo(cx+w/2-24,base);g.lineTo(cx-w/2+24,base);g.closePath();g.fill();g.strokeStyle='#4A2E18';g.lineWidth=5;for(let k=-w/2+40;k<w/2;k+=50){g.beginPath();g.moveTo(cx+k,base-h);g.lineTo(cx+k*.94,base);g.stroke()}
 g.strokeStyle='#3A3A42';g.lineWidth=10;g.beginPath();g.moveTo(cx-w/2+6,base-h*.75);g.lineTo(cx+w/2-6,base-h*.75);g.moveTo(cx-w/2+16,base-h*.25);g.lineTo(cx+w/2-16,base-h*.25);g.stroke();uvaMassa(g,cx-w/2+6,cx+w/2-6,base-h-14,base-h+14,21,1.4);g.restore()}
// senhora de avental e menina de tranças (herança italiana)
const NONNA=CHX({cloth:'#3A4A6A',hood:'#2A3A5A',outfit:'apron',apron:'#F3E6C8',collar:'#F3E6C8',hair:'#C8C8C8',skin:'#E6BF98',hand:'#E6BF98',leg:'#3A4A6A'});
const GIRL=CHX({cloth:'#C8213F',hood:'#A01830',outfit:'apron',apron:'#F3E6C8',collar:'#F3E6C8',hair:'#6A4426',skin:'#F0D0B4',hand:'#F0D0B4',leg:'#C8213F'});
function nonna(g,cx,base,s,t,o={}){return npc(g,cx,base,s,t,Object.assign({ch:NONNA,skirt:'#3A4A6A',hat:'headscarf',capCol:'#8E1B3A',look:.3,mouth:.8,laugh:1,brow:.5,lo:1,ro:1,hands:{l:[-110,120,90],r:[110,120,90]}},o))}
function girl(g,cx,base,s,t,o={}){return npc(g,cx,base,s,t,Object.assign({ch:GIRL,skirt:'#C8213F',look:.3,mouth:.8,laugh:1,brow:.5,ro:1,hands:{l:[-80,200,90],r:[130,60+Math.sin(t*6)*20,90]},
 headExtra:(x)=>{x.fillStyle='#6A4426';for(const sd of [-1,1]){for(let k=0;k<4;k++){x.beginPath();x.ellipse(sd*(HR+4),20+k*26,14,16,0,0,7);x.fill()}x.fillStyle='#C8213F';x.fillRect(sd*(HR+4)-10,120,20,10);x.fillStyle='#6A4426'}}},o))}
// notas musicais flutuando
function notes(g,cx,cy,t,a=1){fade(g,a,()=>{for(let i=0;i<5;i++){const k=(t*.5+i/5)%1;g.save();g.globalAlpha*=1-k;g.translate(cx+Math.sin(i*2+t)*80,cy-k*200);g.fillStyle='#F2D27A';g.beginPath();g.ellipse(0,0,14,10,-.4,0,7);g.fill();g.fillRect(10,-56,5,56);g.fillRect(10,-56,24,8);g.restore()}})}
// garrafão de aguardente (vidro claro, rolha, etiqueta)
function aguaBottle(g,cx,base,s){g.save();g.translate(cx,base);g.scale(s,s);g.fillStyle='rgba(230,240,245,.35)';g.strokeStyle='rgba(240,248,255,.85)';g.lineWidth=4;g.beginPath();g.moveTo(-70,0);g.lineTo(-70,-140);g.quadraticCurveTo(-70,-190,-20,-200);g.lineTo(-18,-250);g.lineTo(18,-250);g.lineTo(20,-200);g.quadraticCurveTo(70,-190,70,-140);g.lineTo(70,0);g.closePath();g.fill();g.stroke();
 g.fillStyle='rgba(240,225,190,.55)';g.fillRect(-64,-120,128,114);g.fillStyle='#C99A5B';g.fillRect(-16,-272,32,26);g.fillStyle='#F3E6C8';g.fillRect(-50,-110,100,60);g.fillStyle='#5E1428';g.font='900 18px Cinzel';g.textAlign='center';g.textBaseline='middle';g.fillText('77%',0,-80);g.restore()}
