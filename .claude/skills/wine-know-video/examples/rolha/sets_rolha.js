// Cenários e desenhos do vídeo "E antes da rolha?" — paleta Dark Divino
const CORK='#C99A5B',CLAY='#B8673E';
function rome(x,t){let g=x.createLinearGradient(0,-300,0,800);g.addColorStop(0,'#2A0A18');g.addColorStop(.6,'#8A3A30');g.addColorStop(1,'#E0A060');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1500);
 g=x.createRadialGradient(960,620,10,960,620,420);g.addColorStop(0,'rgba(255,220,150,.75)');g.addColorStop(1,'rgba(255,220,150,0)');x.fillStyle=g;x.fillRect(400,200,1100,700);
 x.fillStyle='#5A2A22';x.beginPath();x.moveTo(560,250);x.lineTo(960,90);x.lineTo(1360,250);x.closePath();x.fill();x.fillRect(560,250,800,40);
 for(const cx of [-200,40,280,600,760,920,1080,1240,1640,1880,2120]){const far=cx>=560&&cx<=1360;x.fillStyle=far?'#6A3428':'#7A3E2E';const w=far?60:110,top=far?290:120;x.fillRect(cx-w/2,top,w,900-top);x.fillStyle=far?'#7A4030':'#8A4A36';x.fillRect(cx-w/2-14,top-30,w+28,34);x.fillRect(cx-w/2-14,860,w+28,40);
  x.fillStyle='rgba(0,0,0,.15)';for(let k=-1;k<=1;k++)x.fillRect(cx+k*w/4-3,top,6,900-top)}
 x.fillStyle='#3A1A14';x.fillRect(-900,860,W+1800,300)}
function amphora(x,cx,base,s,o={}){x.save();x.translate(cx,base);x.scale(s,s);
 x.fillStyle=CLAY;x.beginPath();x.moveTo(0,0);x.quadraticCurveTo(-30,-40,-62,-150);x.quadraticCurveTo(-92,-260,-60,-330);x.lineTo(-30,-350);x.lineTo(-22,-430);x.lineTo(22,-430);x.lineTo(30,-350);x.lineTo(60,-330);x.quadraticCurveTo(92,-260,62,-150);x.quadraticCurveTo(30,-40,0,0);x.fill();
 x.strokeStyle=CLAY;x.lineWidth=13;x.lineCap='round';for(const k of [-1,1]){x.beginPath();x.moveTo(k*24,-415);x.quadraticCurveTo(k*78,-418,k*60,-338);x.stroke()}
 x.fillStyle='#9A5230';x.fillRect(-30,-440,60,14);x.fillStyle='rgba(255,220,170,.22)';x.beginPath();x.ellipse(-36,-230,12,70,-.1,0,7);x.fill();
 x.strokeStyle='rgba(90,40,20,.45)';x.lineWidth=3;for(const y of [-300,-200])x.beginPath(),x.moveTo(-70,y),x.quadraticCurveTo(0,y+12,70,y),x.stroke();
 if(o.cork!=null){const d=(1-o.cork)*-120;x.fillStyle=CORK;x.beginPath();x.roundRect(-20,-452+d,40,34,6);x.fill()}
 if(o.seal){x.globalAlpha=o.seal;x.fillStyle='#EDE0C4';x.beginPath();x.ellipse(0,-448,40,16,0,0,7);x.fill();x.fillStyle='rgba(212,162,76,.85)';x.beginPath();x.ellipse(0,-452,30,10,0,0,7);x.fill();x.globalAlpha=1}
 if(o.broken){x.fillStyle='#140509';x.beginPath();x.moveTo(-70,-260);x.lineTo(-20,-220);x.lineTo(-50,-170);x.lineTo(10,-150);x.lineTo(-30,-90);x.lineTo(-90,-120);x.closePath();x.fill()}
 x.restore()}
function peg(x,cx,cy,s,rot=0){x.save();x.translate(cx,cy);x.rotate(rot);x.scale(s,s);x.fillStyle='#7A4A26';x.beginPath();x.moveTo(-26,-60);x.lineTo(26,-60);x.lineTo(18,70);x.lineTo(-18,70);x.closePath();x.fill();
 x.fillStyle='#D8C8A0';x.beginPath();x.moveTo(-30,-10);x.lineTo(30,-10);x.lineTo(26,50);x.lineTo(-26,50);x.closePath();x.fill();x.strokeStyle='#A89870';x.lineWidth=3;for(let y=-2;y<50;y+=10)x.beginPath(),x.moveTo(-28,y),x.lineTo(28,y+4),x.stroke();
 x.fillStyle='rgba(212,162,76,.9)';x.beginPath();x.moveTo(26,40);x.quadraticCurveTo(40,70,30,82);x.quadraticCurveTo(18,70,26,40);x.fill();x.restore()}
function fiasco(x,cx,base,s,oil){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='rgba(200,230,210,.25)';x.beginPath();x.moveTo(-14,-330);x.lineTo(14,-330);x.lineTo(16,-170);x.lineTo(-16,-170);x.closePath();x.fill();
 x.fillStyle='#5E1428';x.fillRect(-12,-260,24,90);x.fillStyle=`rgba(232,190,70,${oil})`;x.fillRect(-12,-282,24,22*oil);x.strokeStyle='rgba(243,230,200,.6)';x.lineWidth=3;x.strokeRect(-14,-330,28,160);
 x.fillStyle='#C8A060';x.beginPath();x.arc(0,-90,100,0,7);x.fill();x.strokeStyle='#8A6A34';x.lineWidth=4;for(let k=-90;k<=90;k+=14){x.beginPath();x.moveTo(k,-180);x.quadraticCurveTo(k*1.3,-90,k,0);x.stroke()}
 x.strokeStyle='#A07A3E';x.lineWidth=10;for(const y of [-40,-140])x.beginPath(),x.moveTo(-96,y),x.lineTo(96,y),x.stroke();x.restore()}
function glassStopper(x,cx,cy,s,sh){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='rgba(220,235,240,.85)';x.beginPath();for(let i=0;i<8;i++){const a=i/8*Math.PI*2;x.lineTo(Math.cos(a)*60,Math.sin(a)*60-60)}x.closePath();x.fill();
 x.fillStyle='rgba(180,210,220,.9)';x.fillRect(-18,-6,36,70);x.strokeStyle='rgba(255,255,255,.9)';x.lineWidth=3;x.beginPath();x.moveTo(-30,-90);x.lineTo(20,-40);x.stroke();
 x.fillStyle=`rgba(255,255,255,${.7*sh})`;star(x,30,-90,18*sh);x.restore()}
function monk(x,cx,base,s){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='#4A2A1A';x.beginPath();x.moveTo(-110,0);x.quadraticCurveTo(-90,-200,-60,-260);x.lineTo(60,-260);x.quadraticCurveTo(90,-200,110,0);x.closePath();x.fill();
 x.fillStyle='#3A2012';x.beginPath();x.arc(0,-270,70,Math.PI*.9,Math.PI*2.1);x.fill();x.fillStyle='#E6BF98';x.beginPath();x.arc(0,-300,52,0,7);x.fill();x.fillStyle='#5A3E2A';x.beginPath();x.arc(0,-300,54,Math.PI*.05,Math.PI*.95);x.lineTo(-40,-300);x.fill();
 x.fillStyle='#2A1A10';x.beginPath();x.arc(-18,-305,5,0,7);x.arc(18,-305,5,0,7);x.fill();x.strokeStyle='#C99A5B';x.lineWidth=6;x.beginPath();x.moveTo(-80,-120);x.lineTo(80,-120);x.stroke();
 glassW(x,90,-150,.6,.5,'#F2D27A',true);x.restore()}
function spiralRod(x,x0,y0,len,s,turns=7){x.save();x.translate(x0,y0);x.scale(s,s);x.strokeStyle='#B8B8B8';x.lineWidth=7;x.lineCap='round';x.beginPath();for(let i=0;i<=200;i++){const u=i/200;x.lineTo(u*len,Math.sin(u*turns*Math.PI*2)*16)}x.stroke();x.restore()}
function musket(x,cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#6A4426';x.beginPath();x.moveTo(-420,-10);x.lineTo(-200,-26);x.lineTo(-120,-20);x.lineTo(-120,22);x.lineTo(-260,30);x.lineTo(-420,70);x.closePath();x.fill();
 x.fillStyle='#4A4A50';x.fillRect(-140,-22,560,20);x.fillStyle='#2A2A30';x.fillRect(-150,-4,40,26);x.restore()}
function corkscrew(x,cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#7A4A26';x.beginPath();x.roundRect(-120,-30,240,44,20);x.fill();x.fillStyle='#B8B8B8';x.fillRect(-6,14,12,40);x.beginPath();x.arc(0,60,22,0,7);x.fill();x.restore();x.save();x.translate(cx,cy+70*s);x.rotate(Math.PI/2);spiralRod(x,0,0,200,s,5);x.restore()}
function microscope(x,cx,base,s){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='#8A6A34';x.beginPath();x.roundRect(-110,-30,220,30,8);x.fill();x.fillStyle='#B8893C';x.save();x.rotate(-.35);x.fillRect(-26,-330,52,240);x.fillStyle='#D4A24C';x.fillRect(-34,-350,68,30);x.fillRect(-20,-90,40,40);x.restore();
 x.strokeStyle='#8A6A34';x.lineWidth=14;x.beginPath();x.moveTo(0,-30);x.quadraticCurveTo(70,-120,40,-200);x.stroke();x.fillStyle='#5A4020';x.fillRect(-60,-120,120,14);x.restore()}
function cellView(x,cx,cy,r,u,air=0){x.save();x.beginPath();x.arc(cx,cy,r,0,7);x.fillStyle='#E8D2A8';x.fill();x.clip();x.strokeStyle='#8A5A2E';x.lineWidth=4;const n=Math.floor(u*90);let k=0;
 for(let row=-6;row<=6;row++)for(let col=-8;col<=8;col++){if(k++>n&&u<1)continue;const w=46,h=30,ox=cx+col*w+(row%2)*w/2,oy=cy+row*h;x.strokeRect(ox-w/2,oy-h/2,w,h);if(air>0){x.fillStyle=`rgba(190,225,240,${.55*air})`;x.fillRect(ox-w/2+4,oy-h/2+4,w-8,h-8)}}
 x.restore();x.strokeStyle=GOLD;x.lineWidth=10;x.beginPath();x.arc(cx,cy,r,0,7);x.stroke()}
function squeeze(x,cx,base,label,bulge,p,col){x.save();const w=110,h=200-50*p,b=bulge*p*45;x.fillStyle='#6A6A70';x.fillRect(cx-110,base-h-24,220,20);x.fillRect(cx-110,base,220,20);
 x.fillStyle=col;x.beginPath();x.moveTo(cx-w/2,base);x.quadraticCurveTo(cx-w/2-b,base-h/2,cx-w/2,base-h);x.lineTo(cx+w/2,base-h);x.quadraticCurveTo(cx+w/2+b,base-h/2,cx+w/2,base);x.closePath();x.fill();
 goldText(x,label,cx,base+80,40,'Cinzel',700);x.restore()}
function corkOak(x,cx,base,s,strip,t,birds=0){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='#5A4030';x.beginPath();x.moveTo(-60,0);x.lineTo(-45,-260);x.quadraticCurveTo(-140,-330,-230,-360);x.lineTo(-210,-385);x.quadraticCurveTo(-110,-360,-20,-300);x.lineTo(20,-300);x.quadraticCurveTo(110,-370,220,-390);x.lineTo(235,-365);x.quadraticCurveTo(130,-330,45,-260);x.lineTo(60,0);x.closePath();x.fill();
 if(strip>0){x.fillStyle='#B4502A';x.fillRect(-52,-250*strip,104,250*strip)}x.strokeStyle='rgba(30,20,10,.5)';x.lineWidth=4;for(let k=-40;k<=40;k+=20)x.beginPath(),x.moveTo(k,-250),x.lineTo(k+6,-250*strip),x.stroke();
 x.fillStyle='#2E4A2A';for(const [bx,by,r] of [[-230,-420,90],[-120,-470,110],[0,-500,120],[130,-470,110],[240,-420,90],[-60,-400,90],[80,-400,90]]){x.beginPath();x.arc(bx,by,r,0,7);x.fill()}
 x.fillStyle='#3E5E36';for(const [bx,by,r] of [[-150,-500,60],[40,-560,70],[180,-500,55]]){x.beginPath();x.arc(bx,by,r,0,7);x.fill()}
 if(birds)for(let i=0;i<7;i++){const bx=-220+i*75,by=-560+Math.sin(t*3+i)*12-(i%2)*40;x.strokeStyle='#1A0A08';x.lineWidth=5;x.beginPath();x.moveTo(bx-14,by);x.quadraticCurveTo(bx-7,by-10,bx,by);x.quadraticCurveTo(bx+7,by-10,bx+14,by);x.stroke()}
 x.restore()}
function montado(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#3A1424');g.addColorStop(.7,'#B0603A');g.addColorStop(1,'#E0A060');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1500);
 x.fillStyle='#6A4A26';x.beginPath();x.moveTo(-900,820);for(let i=0;i<=30;i++)x.lineTo(-900+i*130,800+Math.sin(i*1.3)*20);x.lineTo(W+900,1300);x.lineTo(-900,1300);x.closePath();x.fill();
 for(const [cx,s] of [[200,.35],[1500,.3],[1750,.4],[380,.28]])corkOak(x,cx,820,s,.4,t)}
