// Cenários e desenhos do vídeo "Por que 750 ml?" — paleta Dark Divino
const GOLD='#D4A24C',GOLD2='#F2D27A',CREAM='#F3E6C8',WINE='#5E1428',BORDO='#8E1B3A';
// oficina do vidreiro: parede de pedra, forno aceso, prateleira com garrafas tortas
function workshop(x,t){let g=x.createLinearGradient(0,-200,0,900);g.addColorStop(0,'#1A0A08');g.addColorStop(1,'#2E1410');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='rgba(0,0,0,.18)';for(let r=0;r<14;r++)for(let c=-6;c<26;c++){const ox=(r%2)*60;x.beginPath();x.roundRect(c*120+ox-900+900,r*70-200,112,62,10);x.fill()}
 const fl=.85+.15*Math.sin(t*7)+.05*Math.sin(t*13);
 x.fillStyle='#3A1A12';x.beginPath();x.moveTo(1380,820);x.lineTo(1380,420);x.quadraticCurveTo(1560,250,1740,420);x.lineTo(1740,820);x.closePath();x.fill();
 g=x.createRadialGradient(1560,640,20,1560,640,170);g.addColorStop(0,`rgba(255,236,170,${fl})`);g.addColorStop(.5,`rgba(255,150,60,${.9*fl})`);g.addColorStop(1,'rgba(160,40,10,.9)');x.fillStyle=g;x.beginPath();x.moveTo(1460,820);x.lineTo(1460,560);x.quadraticCurveTo(1560,470,1660,560);x.lineTo(1660,820);x.closePath();x.fill();
 g=x.createRadialGradient(1560,640,40,1560,640,700);g.addColorStop(0,`rgba(255,160,70,${.28*fl})`);g.addColorStop(1,'rgba(255,160,70,0)');x.fillStyle=g;x.fillRect(800,0,1400,1100);
 x.fillStyle='#4A2414';x.fillRect(180,330,620,18);
 for(const [bx,s,st] of [[250,.55,'red'],[340,.7,'white'],[450,.5,'red'],[540,.78,'red'],[650,.62,'white'],[740,.48,'red']])oldBottle(x,bx,330,s,st)}
// garrafa antiga soprada (barriguda, um pouco torta)
function oldBottle(x,bx,by,s,st='red',tilt=0){x.save();x.translate(bx,by);x.rotate(tilt);x.scale(s,s);const gl=st=='white'?'#5E7A46':'#1C3328';
 x.fillStyle='rgba(0,0,0,.35)';x.beginPath();x.ellipse(4,2,70,9,0,0,7);x.fill();x.fillStyle=gl;x.beginPath();x.moveTo(-70,-6);x.quadraticCurveTo(-82,-120,-30,-160);x.quadraticCurveTo(-14,-180,-14,-250);x.lineTo(14,-250);x.quadraticCurveTo(14,-180,30,-160);x.quadraticCurveTo(82,-120,70,-6);x.quadraticCurveTo(0,8,-70,-6);x.fill();
 x.fillStyle='rgba(255,200,130,.22)';x.beginPath();x.ellipse(-38,-90,10,48,-.15,0,7);x.fill();x.fillStyle='#C99A5B';x.fillRect(-11,-268,22,20);x.strokeStyle='#2A1A10';x.lineWidth=5;x.beginPath();x.moveTo(-18,-238);x.lineTo(18,-238);x.stroke();x.restore()}
// cais do porto ao entardecer, mar e navio
function harbor(x,t){let g=x.createLinearGradient(0,-300,0,620);g.addColorStop(0,'#2A0A18');g.addColorStop(.6,'#7A2A2E');g.addColorStop(1,'#D88A4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1300);
 g=x.createRadialGradient(560,560,10,560,560,260);g.addColorStop(0,'rgba(255,220,150,.9)');g.addColorStop(.25,'rgba(255,190,110,.5)');g.addColorStop(1,'rgba(255,190,110,0)');x.fillStyle=g;x.fillRect(200,300,720,520);
 g=x.createLinearGradient(0,600,0,900);g.addColorStop(0,'#3A1C2C');g.addColorStop(1,'#1A0A14');x.fillStyle=g;x.fillRect(-900,600,W+1800,400);
 x.strokeStyle='rgba(255,200,140,.25)';x.lineWidth=3;for(let i=0;i<10;i++){const y=630+i*22,o=Math.sin(t*1.5+i)*30;x.beginPath();x.moveTo(300+o-i*20,y);x.lineTo(820+o+i*20,y);x.stroke()}
 const bob=Math.sin(t*1.2)*6;ship(x,1380,640+bob,1);
 x.fillStyle='#2A140C';x.fillRect(-900,790,W+1800,40)}
function ship(x,cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#160810';x.beginPath();x.moveTo(-260,-40);x.lineTo(260,-40);x.lineTo(200,30);x.lineTo(-210,30);x.closePath();x.fill();
 x.fillRect(-90,-330,10,290);x.fillRect(70,-300,10,260);x.fillStyle='rgba(243,230,200,.75)';for(const [mx,h,w] of [[-85,250,150],[75,220,130]]){x.beginPath();x.moveTo(mx,-40-h);x.quadraticCurveTo(mx+w,-40-h/2,mx+6,-60);x.closePath();x.fill()}x.restore()}
// taverna inglesa
function tavern(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1E0A08');g.addColorStop(1,'#3A1A10');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='#2A120A';for(let i=-4;i<20;i++)x.fillRect(i*140,-200,16,1100);x.fillStyle='#4A2212';x.fillRect(-900,120,W+1800,26);x.fillRect(-900,420,W+1800,22);
 for(let i=0;i<14;i++)oldBottle(x,140+i*125,420,.55+(i%3)*.05,i%4==1?'white':'red');for(let i=0;i<10;i++)oldBottle(x,300+i*150,120,.5,'red');
 for(const lx of [420,1500]){g=x.createRadialGradient(lx,240,10,lx,240,300);g.addColorStop(0,'rgba(255,190,110,.35)');g.addColorStop(1,'rgba(255,190,110,0)');x.fillStyle=g;x.fillRect(lx-300,-60,600,600);candle(x,lx,300,60,t)}}
// cano de sopro com a bolha de vidro
function blowpipe(x,cx,cy,inflate,droop=0){x.save();x.strokeStyle='#6A5A4A';x.lineWidth=14;x.lineCap='round';x.beginPath();x.moveTo(cx-640,cy-40);x.lineTo(cx-40,cy);x.stroke();
 const r=60+inflate*130,dy=droop*70;let g=x.createRadialGradient(cx+r*.6,cy+dy-r*.2,10,cx+r*.8,cy+dy,r*1.3);g.addColorStop(0,'rgba(255,240,180,.95)');g.addColorStop(.5,'rgba(255,150,60,.85)');g.addColorStop(1,'rgba(150,40,10,.75)');x.fillStyle=g;
 x.beginPath();x.moveTo(cx-40,cy-24);x.quadraticCurveTo(cx+10,cy-30+dy*.3,cx+30,cy-r*.75+dy);x.quadraticCurveTo(cx+r*1.9,cy-r*1.05+dy,cx+r*2.05,cy+dy);x.quadraticCurveTo(cx+r*1.9,cy+r*1.05+dy,cx+30,cy+r*.75+dy);x.quadraticCurveTo(cx+10,cy+30+dy*.3,cx-40,cy+24);x.fill();x.restore()}
function lungs(x,cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#B85A62';for(const k of [-1,1]){x.beginPath();x.moveTo(k*14,-120);x.quadraticCurveTo(k*130,-110,k*120,60);x.quadraticCurveTo(k*90,120,k*18,90);x.closePath();x.fill()}
 x.strokeStyle='#E9C0A0';x.lineWidth=14;x.lineCap='round';x.beginPath();x.moveTo(0,-170);x.lineTo(0,-90);x.moveTo(0,-90);x.lineTo(-30,-50);x.moveTo(0,-90);x.lineTo(30,-50);x.stroke();x.restore()}
function stamp(x,cx,cy,txt,a){if(a<=0)return;const k=1+(1-a)*.8;x.save();x.globalAlpha=Math.min(1,a*1.4);x.translate(cx,cy);x.rotate(-.16);x.scale(k,k);x.font='900 92px Cinzel';const tw=Math.max(380,x.measureText(txt).width+80);x.strokeStyle='#C8213F';x.lineWidth=10;x.beginPath();x.roundRect(-tw/2,-70,tw,140,14);x.stroke();
 x.fillStyle='#C8213F';x.textAlign='center';x.textBaseline='middle';x.fillText(txt,0,6);x.restore()}
function jug(x,cx,base,s){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='#B8946A';x.beginPath();x.moveTo(-90,0);x.quadraticCurveTo(-130,-150,-50,-210);x.lineTo(-40,-250);x.lineTo(40,-250);x.lineTo(50,-210);x.quadraticCurveTo(130,-150,90,0);x.closePath();x.fill();
 x.strokeStyle='#B8946A';x.lineWidth=18;x.beginPath();x.moveTo(45,-230);x.quadraticCurveTo(120,-230,95,-140);x.stroke();x.fillStyle='#8A6A44';x.fillRect(-100,-40,200,14);x.fillStyle='#C99A5B';x.fillRect(-30,-275,60,28);
 x.fillStyle=CREAM;x.beginPath();x.roundRect(-70,-150,140,70,8);x.fill();x.fillStyle=WINE;x.font='900 28px Cinzel';x.textAlign='center';x.textBaseline='middle';x.fillText('1 GALÃO',0,-115);x.restore()}
function crate(x,cx,base,n,s=1){x.save();x.translate(cx,base);x.scale(s,s);const cols=n==6?3:4,rows=n==6?2:3,w=cols*80+40;
 for(let r=rows-1;r>=0;r--)for(let c=0;c<cols;c++){const bx=-w/2+60+c*80+(r%2)*10,by=-150-r*26;x.fillStyle='#1E3A31';x.fillRect(bx-14,by-110,28,120);x.fillStyle='#C99A5B';x.fillRect(bx-10,by-124,20,16)}
 x.fillStyle='#7A4A26';x.beginPath();x.roundRect(-w/2,-170,w,170,8);x.fill();x.strokeStyle='#4A2A14';x.lineWidth=5;for(const y of [-120,-60])x.beginPath(),x.moveTo(-w/2,y),x.lineTo(w/2,y),x.stroke();
 x.fillStyle=GOLD2;x.font='900 54px Cinzel';x.textAlign='center';x.textBaseline='middle';x.fillText(String(n),0,-90);x.restore()}
function euStars(x,cx,cy,r,a){x.save();x.globalAlpha=a;x.fillStyle='#1E2A5A';x.beginPath();x.arc(cx,cy,r+70,0,7);x.fill();x.fillStyle=GOLD2;for(let i=0;i<12;i++){const an=i/12*Math.PI*2,sx=cx+Math.cos(an)*r,sy=cy+Math.sin(an)*r;star(x,sx,sy,18)}x.restore()}
function star(x,cx,cy,r){x.beginPath();for(let i=0;i<10;i++){const an=-Math.PI/2+i*Math.PI/5,rr=i%2?r*.45:r;x.lineTo(cx+Math.cos(an)*rr,cy+Math.sin(an)*rr)}x.closePath();x.fill()}
function usFlag(x,cx,cy,w,h,a){x.save();x.globalAlpha=a;x.translate(cx-w/2,cy-h/2);for(let i=0;i<13;i++){x.fillStyle=i%2?CREAM:BORDO;x.fillRect(0,i*h/13,w,h/13+1)}x.fillStyle='#1E2A5A';x.fillRect(0,0,w*.4,h*7/13);x.fillStyle=CREAM;
 for(let r=0;r<5;r++)for(let c=0;c<6;c++)star(x,22+c*w*.4/6.2,20+r*h*7/13/5.4,7);x.strokeStyle=GOLD;x.lineWidth=6;x.strokeRect(0,0,w,h);x.restore()}
function seaMap(x,t,u){x.save();let g=x.createLinearGradient(0,280,0,880);g.addColorStop(0,'#22324A');g.addColorStop(1,'#141E30');x.fillStyle=g;x.beginPath();x.roundRect(360,300,1200,580,26);x.fill();x.clip();
 x.fillStyle='#5A4A2E';x.beginPath();x.moveTo(820,300);x.quadraticCurveTo(760,380,800,440);x.quadraticCurveTo(700,500,780,560);x.quadraticCurveTo(900,540,1000,520);x.quadraticCurveTo(1040,420,960,300);x.closePath();x.fill();
 x.beginPath();x.moveTo(1560,560);x.quadraticCurveTo(1200,600,1120,700);x.quadraticCurveTo(1140,800,1100,880);x.lineTo(1560,880);x.closePath();x.fill();
 x.strokeStyle='rgba(243,230,200,.7)';x.lineWidth=5;x.setLineDash([16,14]);x.beginPath();x.moveTo(1130,800);x.quadraticCurveTo(820,760,900,500);x.stroke();x.setLineDash([]);
 const p=easeIO(u),px=lerp(1130,900,p)-Math.sin(p*Math.PI)*160,py=lerp(800,510,p);ship(x,px,py,.22);
 for(const [lx,ly,n] of [[900,490,'LONDRES'],[1140,810,'BORDEAUX']]){x.fillStyle=GOLD2;x.beginPath();x.arc(lx,ly,12,0,7);x.fill();x.font='700 34px Cinzel';x.textAlign='center';x.fillText(n,lx+(n=='LONDRES'?-140:150),ly+12)}x.restore();x.strokeStyle=GOLD;x.lineWidth=6;x.beginPath();x.roundRect(360,300,1200,580,26);x.stroke()}
function smallGlass(x,cx,base,s){glassW(x,cx,base,s,.35,'#5E1428')}
function bigCork(x,cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#C99A5B';x.beginPath();x.roundRect(-26,-70,52,120,12);x.fill();x.fillStyle='rgba(120,80,40,.55)';for(const [dx,dy,r] of [[-10,-40,4],[8,-20,3],[-6,5,5],[10,25,3],[-12,30,3],[4,-55,3]]){x.beginPath();x.arc(dx,dy,r,0,7);x.fill()}x.fillStyle='rgba(94,20,40,.75)';x.beginPath();x.roundRect(-26,30,52,20,[0,0,12,12]);x.fill();x.restore()}
