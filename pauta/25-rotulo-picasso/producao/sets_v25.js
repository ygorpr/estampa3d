// ===== Vídeo 25 — personagens e cenários extras (carregado DEPOIS do film.js: usa npc/CHX de dd_common) =====
// arte de rótulo emoldurada (genérica, nada copiado de obra real)
function framedArt(g,cx,cy,w,h,k,ano,a=1,seed){fade(g,a,()=>{g.fillStyle='rgba(0,0,0,.35)';g.fillRect(cx-w/2-14,cy-h/2-10,w+40,h+44);goldFrame(g,cx,cy,w,h,Math.max(14,w*.07));artLabel(g,cx,cy,w,h,k,seed||(cx|0)+7);
 if(ano){g.fillStyle='#D4A24C';g.beginPath();g.roundRect(cx-70,cy+h/2+34,140,40,6);g.fill();g.fillStyle='#2A0610';g.font='900 26px Cinzel';g.textAlign='center';g.textBaseline='middle';g.fillText(ano,cx,cy+h/2+55)}})}
// castelo (château) ao entardecer
function chateau(x,cx,base,s){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='#D9C49A';x.fillRect(-260,-200,520,200);x.fillRect(-320,-260,110,260);x.fillRect(210,-260,110,260);
 x.fillStyle='#3A2A30';for(const [tx,w] of [[-265,110],[265,110]]){x.beginPath();x.moveTo(tx-w/2-6,-260);x.lineTo(tx,-360);x.lineTo(tx+w/2+6,-260);x.fill()}x.beginPath();x.moveTo(-270,-200);x.lineTo(-200,-270);x.lineTo(200,-270);x.lineTo(270,-200);x.fill();
 x.fillStyle='#FFD08A';for(let i=0;i<5;i++)for(let j=0;j<2;j++)x.fillRect(-200+i*90,-170+j*80,36,52);x.fillStyle='#5A3A22';x.fillRect(-30,-80,60,80);x.restore()}
// carneirinho
function sheep(x,cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#2A2024';for(const lx of [-50,-20,25,55])x.fillRect(lx-7,30,14,60);x.fillStyle='#F4F0E8';for(const [dx,dy,r] of [[-50,0,40],[-10,-20,46],[35,-5,42],[0,25,40],[-40,30,32],[50,25,34]]){x.beginPath();x.arc(dx,dy,r,0,7);x.fill()}
 x.fillStyle='#2A2024';x.beginPath();x.ellipse(-95,-10,26,34,-.3,0,7);x.fill();x.fillStyle='#F4F0E8';x.beginPath();x.arc(-100,-22,5,0,7);x.fill();x.restore()}
// colina (motte) com fileiras de vinhas
function motte(x,cx,base,s){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='#6A4A2A';x.beginPath();x.moveTo(-420,0);x.quadraticCurveTo(0,-330,420,0);x.closePath();x.fill();
 x.save();x.clip();x.strokeStyle='#4E7A3C';x.lineWidth=14;for(let i=0;i<9;i++){const yy=-20-i*32;x.beginPath();x.moveTo(-420,yy);x.lineTo(420,yy);x.stroke();x.fillStyle='#6AA04A';for(let k=-400;k<400;k+=46){x.beginPath();x.arc(k+(i%2)*20,yy-6,11,0,7);x.fill()}}x.restore();x.restore()}
// figurinos
const BARONY=CHX({cloth:'#3A3A46',hood:'#2A2A34',outfit:'blazer',shirt:'#F4F0E8',collar:'#F4F0E8',tie:'#5E1428',short:'#1E1410',part:1,skin:'#E8C4A0',hand:'#E8C4A0',leg:'#3A3A46'});
const BARONO=CHX({cloth:'#1E1E28',hood:'#14141C',outfit:'blazer',shirt:'#F4F0E8',collar:'#F4F0E8',tie:'#8E1B3A',short:'#B8B8B8',temples:'#D0D0D0',skin:'#E2B890',hand:'#E2B890',leg:'#1E1E28'});
const PAINTER=CHX({cloth:'#F3E6C8',hood:'#D9CCAE',outfit:'apron',apron:'#D8CDB4',collar:'#F3E6C8',short:'#2A1E18',beard:'#2A1E18',beardT:'stubble',skin:'#E6BF98',hand:'#E6BF98',leg:'#3A3030'});
const MERCH=CHX({cloth:'#6A4426',hood:'#4A2E18',outfit:'blazer',shirt:'#F4F0E8',collar:'#F4F0E8',tie:'#2A2020',short:'#5A4A3A',beard:'#6A5A4A',beardT:'short',skin:'#DDA882',hand:'#DDA882',leg:'#3A2A20'});
const TUX=CHX({cloth:'#141418',hood:'#0A0A0E',outfit:'blazer',shirt:'#F4F0E8',collar:'#F4F0E8',tie:'#141418',short:'#8A8A8A',temples:'#B0B0B0',beard:'#9A9A9A',beardT:'short',skin:'#E6BF98',hand:'#E6BF98',leg:'#141418'});
const AUCT=CHX({cloth:'#2A2E3A',hood:'#1E222C',outfit:'blazer',shirt:'#F4F0E8',collar:'#F4F0E8',tie:'#8E1B3A',short:'#4A3424',skin:'#E6BF98',hand:'#E6BF98',leg:'#2A2E3A'});
const pocketSq=(cx,base,s,col='#F4F0E8')=>(x)=>{const y=base-505*s;x.save();x.translate(cx,y);x.scale(s,s);x.fillStyle=col;x.beginPath();x.moveTo(-70,64);x.lineTo(-40,64);x.lineTo(-55,44);x.closePath();x.fill();x.restore()};
const bowler=(x)=>{x.fillStyle='#1A1416';x.beginPath();x.ellipse(0,-HR+16,HR+34,14,0,0,7);x.fill();x.beginPath();x.arc(0,-HR+10,HR-6,Math.PI,0);x.fill();x.fillStyle='#5E1428';x.fillRect(-HR+6,-HR+2,2*HR-12,8)};
function baronYoung(g,cx,base,s,t,o={}){return npc(g,cx,base,s,t,Object.assign({ch:BARONY,look:.25,mouth:.75,brow:.5,lo:1,ro:1,hands:{l:[-170,120,80],r:[170,120,80]},hold:pocketSq(cx,base,s)},o))}
function baronOld(g,cx,base,s,t,o={}){return npc(g,cx,base,s,t,Object.assign({ch:BARONO,specs:1,look:.2,lookY:-.15,mouth:.4,brow:.9,hands:{l:[60,200,120],r:[-60,190,130]},hold:pocketSq(cx,base,s,'#8E1B3A')},o))}
function painter(g,cx,base,s,t,o={}){const st=o.stroke||0;return npc(g,cx,base,s,t,Object.assign({ch:PAINTER,hat:'beret',capCol:'#141016',look:.4,mouth:.6,brow:.55,hands:{l:[-90,170,110],r:[150+Math.sin(st)*30,60+Math.cos(st*2)*20,120]},
 headExtra:(x,fx,fy)=>{x.fillStyle='#2A1E18';x.beginPath();x.moveTo(fx-30,fy+40);x.quadraticCurveTo(fx,fy+30,fx+30,fy+40);x.quadraticCurveTo(fx,fy+36,fx-30,fy+40);x.lineWidth=6;x.strokeStyle='#2A1E18';x.stroke()},
 hold:(x,hl,hr)=>{const y=base-505*s;x.save();x.translate(cx,y);x.scale(s,s);for(const [px,py,c] of [[-30,180,'#C8213F'],[20,230,'#2D6BB5'],[-10,280,'#E8B04A'],[40,320,'#4E8A3A']]){x.fillStyle=c;x.beginPath();x.arc(px,py,9,0,7);x.fill()}x.restore();
  if(!o.noPalette){x.save();x.translate(hl[0],hl[1]);x.fillStyle='#C99A5B';x.beginPath();x.ellipse(-10,0,70*s/.62*.8,46*s/.62*.8,-.3,0,7);x.fill();for(const [px,py,c] of [[-50,-10,'#C8213F'],[-20,-28,'#2D6BB5'],[14,-24,'#E8B04A'],[-40,18,'#4E8A3A'],[0,10,'#F3E6C8']]){x.fillStyle=c;x.beginPath();x.arc(px*s/.62*.8,py*s/.62*.8,9,0,7);x.fill()}x.restore()}
  if(!o.noBrush)brush(x,hr[0],hr[1]-10,s/.62*.75,.5);if(o.hold2)o.hold2(x,hl,hr)}},o))}
function merchant(g,cx,base,s,t,o={}){return npc(g,cx,base,s,t,Object.assign({ch:MERCH,look:.3,mouth:.2,sad:.6,brow:-.2,tilt:Math.sin(t*5)*.08,hands:{l:[-90,200,90],r:[90,200,90]},headExtra:bowler},o))}
function collector(g,cx,base,s,t,o={}){return npc(g,cx,base,s,t,Object.assign({ch:TUX,look:.45,lookY:-.2,mouth:.4,brow:.7,hands:{l:[-90,210,90],r:[150,40,140]},
 hold:(x,hl,hr)=>{x.strokeStyle='#5A3A22';x.lineWidth=10;x.lineCap='round';x.beginPath();x.moveTo(hr[0],hr[1]);x.lineTo(hr[0]+20,hr[1]-50);x.stroke();x.strokeStyle='#D4A24C';x.lineWidth=7;x.fillStyle='rgba(200,230,255,.3)';x.beginPath();x.arc(hr[0]+34,hr[1]-86,36,0,7);x.fill();x.stroke()}},o))}
function auctioneer(g,cx,base,s,t,hit,o={}){return npc(g,cx,base,s,t,Object.assign({ch:AUCT,face:-1,look:-.3,mouth:.7,brow:.6,hands:{l:[-110,210,100],r:[-130,30+hit*110,130]},
 hold:(x,hl,hr)=>{x.save();x.translate(hr[0],hr[1]);x.rotate(.5-hit*.5);x.fillStyle='#6A4426';x.fillRect(-70,-6,74,12);x.fillStyle='#8A5A34';x.beginPath();x.roundRect(-100,-26,40,52,8);x.fill();x.restore()}},o))}
function podium(g,cx,base,s){g.save();g.translate(cx,base);g.scale(s,s);g.fillStyle='#4A2614';g.beginPath();g.moveTo(-150,-330);g.lineTo(150,-330);g.lineTo(120,0);g.lineTo(-120,0);g.closePath();g.fill();g.strokeStyle='#D4A24C';g.lineWidth=5;g.strokeRect(-100,-260,200,140);
 g.fillStyle='#5A3018';g.fillRect(-170,-350,340,30);g.restore()}
// escada de 5 degraus (classificação de 1855)
function stairs(g,cx,cy,o={}){for(let i=0;i<5;i++){const x0=cx-500+i*200,y0=cy-i*0+(4-i)*0;const top=cy+260-(5-i)*100;g.fillStyle=i%2?'#5E1428':'#6E1A32';g.fillRect(x0,top,200,cy+300-top);g.strokeStyle='#D4A24C';g.lineWidth=4;g.strokeRect(x0,top,200,cy+300-top);
  goldText(g,(i+1)+'ª',x0+100,top+50,40,'Cinzel',900)}}
const stepTop=(cx,cy,i)=>[cx-500+i*200+100,cy+260-(5-i)*100];
// cortina de veludo fechada sobre a moldura
function curtain(g,cx,cy,w,h){g.save();g.fillStyle='#6E1630';g.fillRect(cx-w/2,cy-h/2,w,h);g.strokeStyle='rgba(0,0,0,.3)';g.lineWidth=6;for(let k=-w/2+20;k<w/2;k+=34){g.beginPath();g.moveTo(cx+k,cy-h/2);g.quadraticCurveTo(cx+k+8,cy,cx+k,cy+h/2);g.stroke()}
 g.fillStyle='#D4A24C';g.fillRect(cx-w/2-10,cy-h/2-14,w+20,14);g.restore()}
// rótulo em branco (EUA)
function blankLabel(g,cx,cy,w,h){g.fillStyle='#F3E6C8';g.fillRect(cx-w/2,cy-h/2,w,h);g.strokeStyle='#D4A24C';g.lineWidth=3;g.strokeRect(cx-w/2+8,cy-h/2+8,w-16,h-16);g.fillStyle='#5E1428';g.fillRect(cx-w*.3,cy+h*.22,w*.6,4);g.fillRect(cx-w*.22,cy+h*.3,w*.44,3)}
function mxFlag(g,cx,cy,w){const h=w*.66;g.save();for(const [i,c] of [[0,'#1E7A3A'],[1,'#F3F0E6'],[2,'#C8213F']]){g.fillStyle=c;g.fillRect(cx-w/2+i*w/3,cy-h/2,w/3+1,h)}g.fillStyle='#8A5A2A';g.beginPath();g.arc(cx,cy,h*.13,0,7);g.fill();g.strokeStyle=GOLD;g.lineWidth=3;g.strokeRect(cx-w/2,cy-h/2,w,h);g.restore()}
function coverCloth(g,cx,cy,w,h,t){g.save();g.fillStyle='#8E1B3A';g.beginPath();g.moveTo(cx-w/2-20,cy-h/2-10);g.quadraticCurveTo(cx,cy-h/2-40,cx+w/2+20,cy-h/2-10);g.lineTo(cx+w/2+34,cy+h/2+30);g.quadraticCurveTo(cx,cy+h/2+10+Math.sin(t*2)*6,cx-w/2-34,cy+h/2+30);g.closePath();g.fill();
 g.strokeStyle='rgba(0,0,0,.25)';g.lineWidth=5;for(let k=-2;k<=2;k++){g.beginPath();g.moveTo(cx+k*w/6,cy-h/2);g.quadraticCurveTo(cx+k*w/5,cy,cx+k*w/4.5,cy+h/2+20);g.stroke()}g.fillStyle='#D4A24C';g.font='900 60px Cinzel';g.textAlign='center';g.textBaseline='middle';g.fillText('?',cx,cy);g.restore()}
function confetti(g,a,t){fade(g,a,()=>{const R=rng(9);for(let i=0;i<60;i++){const x0=R()*W,sp=60+R()*80,y=((R()*H+t*sp)%(H+60))-30;g.save();g.translate(x0+Math.sin(t*2+i)*20,y);g.rotate(t*3+i);g.fillStyle=R()>.5?'#F2D27A':'#D4A24C';g.fillRect(-6,-3,12,6);g.restore()}})}
function bigX(g,cx,cy,r,a){fade(g,a,()=>{g.save();g.strokeStyle='#C8213F';g.lineWidth=22;g.lineCap='round';g.beginPath();g.moveTo(cx-r,cy-r);g.lineTo(cx+r,cy+r);g.moveTo(cx+r,cy-r);g.lineTo(cx-r,cy+r);g.stroke();g.restore()})}
function darkTxt(g,s_,cx,cy,size){g.save();g.font=`900 ${size}px Cinzel`;g.textAlign='center';g.textBaseline='middle';g.fillStyle='#5E1428';g.fillText(s_,cx,cy);g.restore()}
