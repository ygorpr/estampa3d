// ===== Vídeo 15 — Por que se chama vinho do Porto? — cenários =====
// caveGaia: bar-cave em Vila Nova de Gaia — paredes de granito caiado, pipas deitadas, janela em arco para o Douro
// com barcos rabelos, a ponte de ferro e o casario do Porto do outro lado, ao entardecer.
const PORTO={sky0:'#2A0A1E',sky1:'#7A2C34',sky2:'#C8703E',river:'#3A1A2A',stone:'#3A1A1C',stone2:'#2A1014',wood:'#5A2E1C',wood2:'#3A1C12',hoop:'#24120A'};
// pipa deitada vista de frente (tampo redondo com aduelas e arcos)
function pipaEnd(x,cx,cy,r,txt){x.save();x.translate(cx,cy);let g=x.createRadialGradient(-r*.2,-r*.25,r*.1,0,0,r);g.addColorStop(0,'#6A3A22');g.addColorStop(1,'#3A1C12');x.fillStyle=g;x.beginPath();x.arc(0,0,r,0,7);x.fill();
 x.strokeStyle='rgba(20,8,4,.55)';x.lineWidth=r*.035;for(let i=-3;i<=3;i++){const yy=i*r*.27,w=Math.sqrt(Math.max(0,r*r-yy*yy));x.beginPath();x.moveTo(-w,yy);x.lineTo(w,yy);x.stroke()}
 x.strokeStyle=PORTO.hoop;x.lineWidth=r*.12;x.beginPath();x.arc(0,0,r*.94,0,7);x.stroke();x.strokeStyle='rgba(212,162,76,.35)';x.lineWidth=r*.025;x.beginPath();x.arc(0,0,r*.86,0,7);x.stroke();
 x.fillStyle='#24120A';x.beginPath();x.arc(0,r*.55,r*.07,0,7);x.fill();
 if(txt){x.save();x.globalAlpha=.8;x.font=`900 ${r*.34}px Cinzel`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#E9D2A0';x.fillText(txt,0,-r*.05);x.restore()}x.restore()}
// barco rabelo: casco comprido de fundo chato, proa e popa erguidas, vela quadrada, pipas no convés e a "espadela" (remo comprido) na popa
function rabelo(x,cx,cy,s,sail=1){x.save();x.translate(cx,cy);x.scale(s,s);
 x.fillStyle='rgba(0,0,0,.25)';x.beginPath();x.ellipse(0,14,190,10,0,0,7);x.fill();
 x.fillStyle='#7A4A2A';x.beginPath();x.moveTo(-215,-80);x.quadraticCurveTo(-200,10,-120,16);x.lineTo(130,16);x.quadraticCurveTo(205,10,220,-74);x.lineTo(196,-66);x.quadraticCurveTo(176,-18,120,-14);x.lineTo(-110,-14);x.quadraticCurveTo(-176,-18,-192,-72);x.closePath();x.fill();
 x.strokeStyle='#C89A5A';x.lineWidth=4;x.beginPath();x.moveTo(-212,-78);x.quadraticCurveTo(-190,-16,-110,-14);x.lineTo(120,-14);x.quadraticCurveTo(190,-16,218,-72);x.stroke();
 x.strokeStyle='rgba(30,12,6,.55)';x.lineWidth=2.5;for(const yy of [-2,8]){x.beginPath();x.moveTo(-170,yy);x.lineTo(176,yy);x.stroke()}
 // pipas no convés
 for(const [dx,dy] of [[-70,-30],[-20,-30],[30,-30],[-45,-62],[5,-62]]){x.fillStyle='#8A5A34';x.beginPath();x.ellipse(dx,dy,24,17,0,0,7);x.fill();x.strokeStyle='#24120A';x.lineWidth=3;x.beginPath();x.moveTo(dx-10,dy-16);x.lineTo(dx-10,dy+16);x.moveTo(dx+10,dy-16);x.lineTo(dx+10,dy+16);x.stroke()}
 // mastro e vela quadrada
 x.fillStyle='#2A140C';x.fillRect(-4,-280,8,270);x.fillRect(-82,-244,164,7);
 if(sail){x.fillStyle='#E9DCC0';x.beginPath();x.moveTo(-76,-238);x.lineTo(76,-238);x.quadraticCurveTo(86,-170,72,-96);x.lineTo(-72,-96);x.quadraticCurveTo(-86,-170,-76,-238);x.fill();x.strokeStyle='rgba(120,70,40,.35)';x.lineWidth=3;for(const yy of [-205,-170,-135]){x.beginPath();x.moveTo(-78,yy);x.lineTo(78,yy);x.stroke()}x.fillStyle='rgba(94,20,40,.75)';x.fillRect(-76,-150,152,18)}
 // estrado do arrais na popa + espadela
 x.fillStyle='#3A1C12';x.fillRect(130,-92,50,8);x.fillRect(150,-92,6,70);x.strokeStyle='#24120A';x.lineWidth=7;x.lineCap='round';x.beginPath();x.moveTo(170,-110);x.lineTo(290,10);x.stroke();x.fillStyle='#24120A';x.beginPath();x.ellipse(292,14,8,22,-.8,0,7);x.fill();
 // arrais (barqueiro) em silhueta no estrado
 x.fillStyle='#1A0A08';x.beginPath();x.arc(158,-128,10,0,7);x.fill();x.fillRect(150,-118,16,30);x.restore()}
// janela em arco com o Douro, o Porto e a ponte de ferro
function douroView(x,x0,y0,w,h,t,o={}){x.save();x.beginPath();x.moveTo(x0,y0+h);x.lineTo(x0,y0+w/2);x.arc(x0+w/2,y0+w/2,w/2,Math.PI,0);x.lineTo(x0+w,y0+h);x.closePath();x.clip();
 let g=x.createLinearGradient(0,y0,0,y0+h*.62);g.addColorStop(0,PORTO.sky0);g.addColorStop(.6,PORTO.sky1);g.addColorStop(1,PORTO.sky2);x.fillStyle=g;x.fillRect(x0,y0,w,h);
 // casario do Porto (Ribeira) do outro lado, em degraus, janelas acesas
 const r=rng(15),wy=y0+h*.6;x.fillStyle='#3A1626';x.beginPath();x.moveTo(x0,wy-70);x.quadraticCurveTo(x0+w*.4,wy-140,x0+w,wy-90);x.lineTo(x0+w,wy);x.lineTo(x0,wy);x.fill();
 for(let bx=x0;bx<x0+w;bx+=26+r()*16){const bh=22+r()*38,bw=26+r()*16,top=wy-bh-(1-Math.abs((bx-x0)/w-.45)*1.4)*40;x.fillStyle=r()<.5?'#4A1E2A':'#5A2830';x.fillRect(bx,top,bw,wy-top);x.fillStyle='#6A2A24';x.beginPath();x.moveTo(bx-2,top);x.lineTo(bx+bw/2,top-10);x.lineTo(bx+bw+2,top);x.fill();x.fillStyle='rgba(255,190,110,.65)';for(let k=0;k<3;k++)if(r()<.55)x.fillRect(bx+5+r()*(bw-12),top+10+k*16,5,7)}
 // torre (Clérigos) ao fundo
 const tx=x0+w*.3;x.fillStyle='#4A1E2A';x.fillRect(tx-9,wy-200,18,120);x.beginPath();x.moveTo(tx-12,wy-200);x.lineTo(tx,wy-224);x.lineTo(tx+12,wy-200);x.fill();
 // ponte de ferro (arco) atravessando o rio
 x.strokeStyle='#1E0E14';x.lineWidth=7;x.beginPath();x.moveTo(x0+w*.55,wy+4);x.quadraticCurveTo(x0+w*.8,wy-150,x0+w*1.05,wy+4);x.stroke();x.lineWidth=5;x.beginPath();x.moveTo(x0+w*.5,wy-112);x.lineTo(x0+w*1.1,wy-112);x.stroke();x.lineWidth=2;for(let i=0;i<10;i++){const px=x0+w*.6+i*w*.045;x.beginPath();x.moveTo(px,wy-112);x.lineTo(px,wy-112+Math.max(0,(Math.abs(px-(x0+w*.8))/(w*.25))**2*110));x.stroke()}
 // rio Douro com reflexos
 g=x.createLinearGradient(0,wy,0,y0+h);g.addColorStop(0,'#6A3448');g.addColorStop(1,'#24101E');x.fillStyle=g;x.fillRect(x0,wy,w,h);
 x.strokeStyle='rgba(255,190,120,.4)';x.lineWidth=3;for(let i=0;i<8;i++){const yy=wy+10+i*14,o=Math.sin(t*1.3+i)*14;x.beginPath();x.moveTo(x0+w*.2+o-i*8,yy);x.lineTo(x0+w*.6+o+i*8,yy);x.stroke()}
 // rabelos ancorados no cais de Gaia
 const bob=Math.sin(t*1.1)*3;rabelo(x,x0+w*(o.r1||.14),wy+40+bob,o.s1||.45);rabelo(x,x0+w*(o.r2||.8),wy+52-bob,o.s2||.62);
 x.restore();
 // caixilho de madeira
 x.save();x.strokeStyle='#24120A';x.lineWidth=16;x.beginPath();x.moveTo(x0,y0+h);x.lineTo(x0,y0+w/2);x.arc(x0+w/2,y0+w/2,w/2,Math.PI,0);x.lineTo(x0+w,y0+h);x.stroke();x.lineWidth=8;x.beginPath();x.moveTo(x0+w/2,y0);x.lineTo(x0+w/2,y0+h);x.moveTo(x0,y0+w/2+40);x.lineTo(x0+w,y0+w/2+40);x.stroke();
 x.fillStyle='#4A2A1E';x.fillRect(x0-30,y0+h,w+60,22);x.restore()}
function graniteWall(x){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1A070D');g.addColorStop(1,PORTO.stone);x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 const r=rng(33);x.strokeStyle='rgba(10,2,5,.45)';x.lineWidth=4;for(let y=-200;y<820;y+=70){const off=(Math.floor(y/70)%2)*60;x.beginPath();x.moveTo(-900,y);x.lineTo(W+900,y);x.stroke();for(let xx=-900+off;xx<W+900;xx+=120+r()*40){x.beginPath();x.moveTo(xx,y);x.lineTo(xx,y+70);x.stroke()}}
 // vigas do teto
 x.fillStyle='#1E0C08';for(const by of [40,150])x.fillRect(-900,by,W+1800,26)}
function caveGaia(x,t,o={}){graniteWall(x);
 // pipas empilhadas à esquerda (sob o texto, escurecidas pelo véu)
 for(const [cx,cy,r] of [[360,700,150],[680,700,150],[520,450,150],[840,450,120]])pipaEnd(x,cx,cy,r);
 if(o.window!==false)douroView(x,o.wx||1150,o.wy||200,o.ww||520,o.wh||560,t,o);
 // luminária pendente
 const lx=o.lamp||1000;let g=x.createRadialGradient(lx,300,10,lx,300,320);g.addColorStop(0,'rgba(255,190,110,.28)');g.addColorStop(1,'rgba(255,190,110,0)');x.fillStyle=g;x.fillRect(lx-340,0,680,640);x.strokeStyle='#120608';x.lineWidth=3;x.beginPath();x.moveTo(lx,-200);x.lineTo(lx,270);x.stroke();x.fillStyle='#2A140C';x.beginPath();x.moveTo(lx-40,300);x.lineTo(lx+40,300);x.lineTo(lx+18,268);x.lineTo(lx-18,268);x.fill();x.fillStyle='#FFD9A0';x.beginPath();x.ellipse(lx,302,26,6,0,0,7);x.fill()}
// parede só de pipas (dentro da cave, sem janela)
function caveBarrels(x,t){graniteWall(x);const r=rng(4);
 for(let row=0;row<3;row++)for(let i=0;i<7;i++){const R=118,cx=395+i*250+(row%2)*125,cy=740-row*230;pipaEnd(x,cx,cy,R,row==1&&i==4?'PORT':null)}
 let g=x.createRadialGradient(1300,380,20,1300,380,520);g.addColorStop(0,'rgba(255,180,94,.22)');g.addColorStop(1,'rgba(255,180,94,0)');x.fillStyle=g;x.fillRect(700,-100,1200,1000)}
// cálice de Porto (taça pequena em tulipa), base em (cx,base)
function portGlass(x,cx,base,s,col='#7A1A1E',lv=.55){x.save();x.translate(cx,base);x.scale(s,s);
 const bowl=()=>{x.beginPath();x.moveTo(-5,-78);x.bezierCurveTo(-40,-86,-46,-130,-34,-160);x.quadraticCurveTo(-26,-182,-24,-196);x.lineTo(24,-196);x.quadraticCurveTo(26,-182,34,-160);x.bezierCurveTo(46,-130,40,-86,5,-78);x.closePath()};
 x.fillStyle='rgba(245,232,210,.55)';x.beginPath();x.ellipse(0,0,30,6,0,0,7);x.fill();x.fillRect(-4,-80,8,80);bowl();x.fillStyle='rgba(255,236,210,.14)';x.fill();
 x.save();bowl();x.clip();const tp=-80-lv*116;let g=x.createLinearGradient(0,tp,0,-80);g.addColorStop(0,col);g.addColorStop(1,'#3A0A10');x.fillStyle=g;x.fillRect(-60,tp,120,120);x.fillStyle='rgba(255,210,170,.35)';x.fillRect(-60,tp,120,4);x.restore();
 bowl();x.strokeStyle='rgba(255,240,220,.6)';x.lineWidth=3;x.stroke();x.strokeStyle='rgba(255,255,255,.4)';x.lineWidth=4;x.beginPath();x.moveTo(-28,-180);x.quadraticCurveTo(-36,-140,-26,-110);x.stroke();x.restore()}
// garrafa de Porto (ombro alto, cápsula, rótulo "PORTO")
function portBottle(x,cx,base,s,kind='TAWNY',sub='20 ANOS'){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='rgba(0,0,0,.4)';x.beginPath();x.ellipse(6,2,52,8,0,0,7);x.fill();
 x.fillStyle='#14100C';x.beginPath();x.moveTo(-38,0);x.lineTo(-38,-170);x.quadraticCurveTo(-38,-196,-18,-206);x.quadraticCurveTo(-13,-218,-13,-238);x.lineTo(-13,-272);x.lineTo(13,-272);x.lineTo(13,-238);x.quadraticCurveTo(13,-218,18,-206);x.quadraticCurveTo(38,-196,38,-170);x.lineTo(38,0);x.closePath();x.fill();
 x.fillStyle='rgba(255,190,120,.22)';x.fillRect(-28,-176,7,166);x.fillStyle='#5E1428';x.fillRect(-14,-280,28,46);x.fillStyle='#D4A24C';x.fillRect(-14,-240,28,4);
 x.fillStyle='#E9DCC0';x.beginPath();x.roundRect(-34,-150,68,96,6);x.fill();x.strokeStyle='#D4A24C';x.lineWidth=3;x.strokeRect(-29,-145,58,86);
 x.fillStyle='#5E1428';x.font='900 14px Cinzel';x.textAlign='center';x.textBaseline='middle';x.fillText('PORTO',0,-120);x.font='700 11px Cinzel';x.fillText(kind,0,-98);x.fillText(sub,0,-82);x.restore()}
