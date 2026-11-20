// ===== Vídeo 19 — A garrafa de vinho mais cara do mundo — cenários e objetos =====
// adega-cofre: paredes escuras com nichos de garrafas antigas, porta de cofre redonda (aço e latão) ao fundo, luz de vitrine.
function vaultDoor(x,cx,cy,r,open=0){x.save();x.translate(cx,cy);
 let g=x.createRadialGradient(-r*.3,-r*.3,r*.1,0,0,r*1.15);g.addColorStop(0,'#6A5A54');g.addColorStop(1,'#2A201E');x.fillStyle='#1A0E0C';x.beginPath();x.arc(0,0,r*1.14,0,7);x.fill();
 x.fillStyle=g;x.beginPath();x.arc(0,0,r,0,7);x.fill();x.strokeStyle='#B8832E';x.lineWidth=r*.05;x.beginPath();x.arc(0,0,r*.97,0,7);x.stroke();
 x.strokeStyle='rgba(0,0,0,.45)';x.lineWidth=r*.025;x.beginPath();x.arc(0,0,r*.78,0,7);x.stroke();
 // parafusos na borda
 x.fillStyle='#D4A24C';for(let i=0;i<16;i++){const a=i/16*Math.PI*2;x.beginPath();x.arc(Math.cos(a)*r*.88,Math.sin(a)*r*.88,r*.03,0,7);x.fill()}
 // volante de 5 raios com cubo
 x.strokeStyle='#C9A060';x.lineCap='round';x.lineWidth=r*.06;for(let i=0;i<5;i++){const a=i/5*Math.PI*2-Math.PI/2;x.beginPath();x.moveTo(0,0);x.lineTo(Math.cos(a)*r*.42,Math.sin(a)*r*.42);x.stroke();x.fillStyle='#E2B456';x.beginPath();x.arc(Math.cos(a)*r*.45,Math.sin(a)*r*.45,r*.05,0,7);x.fill()}
 g=x.createRadialGradient(-r*.04,-r*.04,1,0,0,r*.14);g.addColorStop(0,'#FFE7A0');g.addColorStop(1,'#8A5A1E');x.fillStyle=g;x.beginPath();x.arc(0,0,r*.13,0,7);x.fill();
 // dobradiças
 x.fillStyle='#3A2A24';x.fillRect(r*.95,-r*.5,r*.18,r*.22);x.fillRect(r*.95,r*.28,r*.18,r*.22);x.restore()}
function vaultRoom(x,t,o={}){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#14060A');g.addColorStop(1,'#2A0C14');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 // painéis de madeira escura com nichos de garrafas antigas deitadas (fundos à mostra)
 const r=rng(9);for(const [x0,y0] of [[150,130],[150,420],[620,130],[620,420]]){x.fillStyle='#1E0A0C';x.fillRect(x0,y0,400,250);x.strokeStyle='#5A3A1E';x.lineWidth=6;x.strokeRect(x0,y0,400,250);
  for(let rr=0;rr<4;rr++)for(let c=0;c<7;c++){const bx=x0+32+c*56,by=y0+36+rr*60;x.fillStyle=r()<.5?'#1C2A22':'#2A1A14';x.beginPath();x.arc(bx,by,22,0,7);x.fill();x.fillStyle='rgba(200,180,140,.18)';x.beginPath();x.arc(bx-6,by-6,7,0,7);x.fill()}}
 if(o.door!==false)vaultDoor(x,o.dx||1520,o.dy||330,o.dr||230);
 // focos de luz quente vindos do teto
 for(const lx of o.spots||[960,1520]){g=x.createLinearGradient(0,-100,0,800);g.addColorStop(0,'rgba(255,200,130,.20)');g.addColorStop(1,'rgba(255,200,130,0)');x.fillStyle=g;x.beginPath();x.moveTo(lx-30,-100);x.lineTo(lx+30,-100);x.lineTo(lx+260,800);x.lineTo(lx-260,800);x.closePath();x.fill()}}
// garrafa velha da Borgonha (ombros caídos), vidro escuro empoeirado, cápsula gasta, rótulo amarelado ROMANÉE-CONTI 1945
function rcBottle(x,cx,base,s){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='rgba(0,0,0,.4)';x.beginPath();x.ellipse(6,2,52,8,0,0,7);x.fill();
 const body=()=>{x.beginPath();x.moveTo(-42,0);x.lineTo(-42,-150);x.bezierCurveTo(-42,-196,-14,-206,-13,-240);x.lineTo(-13,-282);x.lineTo(13,-282);x.lineTo(13,-240);x.bezierCurveTo(14,-206,42,-196,42,-150);x.lineTo(42,0);x.closePath()};
 body();x.fillStyle='#16201A';x.fill();x.save();body();x.clip();
 // poeira: véu acinzentado e pintinhas
 let g=x.createLinearGradient(0,-280,0,0);g.addColorStop(0,'rgba(190,180,160,.28)');g.addColorStop(.5,'rgba(190,180,160,.12)');g.addColorStop(1,'rgba(190,180,160,.22)');x.fillStyle=g;x.fillRect(-50,-290,100,300);
 const r=rng(45);x.fillStyle='rgba(220,210,190,.35)';for(let i=0;i<40;i++)x.fillRect(-40+r()*80,-270+r()*265,2.5,2.5);
 x.fillStyle='rgba(255,210,150,.2)';x.fillRect(-31,-150,7,140);x.restore();
 // cápsula vinho gasta
 x.fillStyle='#4A1018';x.fillRect(-14,-290,28,56);x.fillStyle='rgba(212,162,76,.6)';x.fillRect(-14,-246,28,3);x.fillStyle='rgba(20,6,8,.5)';x.fillRect(4,-288,6,20);
 // rótulo amarelado com bordas manchadas
 x.fillStyle='#E2D2A6';x.beginPath();x.moveTo(-38,-140);x.lineTo(38,-140);x.lineTo(38,-42);x.quadraticCurveTo(10,-36,-38,-44);x.closePath();x.fill();
 x.fillStyle='rgba(120,80,30,.25)';x.beginPath();x.ellipse(24,-60,14,10,.3,0,7);x.fill();x.beginPath();x.ellipse(-26,-128,10,7,0,0,7);x.fill();
 x.fillStyle='#3A1A10';x.textAlign='center';x.textBaseline='middle';x.font='700 7.5px Cinzel';x.fillText('DOMAINE DE LA',0,-128);x.font='900 12px Cinzel';x.fillText('ROMANÉE',0,-112);x.fillText('CONTI',0,-98);
 x.strokeStyle='#8A5A1E';x.lineWidth=1.5;x.beginPath();x.moveTo(-26,-88);x.lineTo(26,-88);x.stroke();x.fillStyle='#7A1A20';x.font='900 18px Cinzel';x.fillText('1945',0,-70);x.restore()}
// vitrine iluminada com pedestal (a garrafa dentro)
function showcase(x,cx,base,w,h,s){x.save();let g=x.createRadialGradient(cx,base-h*.5,10,cx,base-h*.5,h*.8);g.addColorStop(0,'rgba(255,214,150,.28)');g.addColorStop(1,'rgba(255,214,150,0)');x.fillStyle=g;x.fillRect(cx-w,base-h*1.3,w*2,h*1.4);
 x.fillStyle='#2A1410';x.fillRect(cx-w/2-16,base,w+32,70);x.fillStyle='#D4A24C';x.fillRect(cx-w/2-16,base,w+32,7);x.fillStyle='#1E0C0A';x.fillRect(cx-w*.3,base-24,w*.6,24);x.fillStyle='#B8832E';x.fillRect(cx-w*.3,base-24,w*.6,4);
 rcBottle(x,cx,base-24,s);
 x.fillStyle='rgba(200,230,240,.07)';x.fillRect(cx-w/2,base-h,w,h);x.strokeStyle='rgba(220,240,250,.5)';x.lineWidth=4;x.strokeRect(cx-w/2,base-h,w,h);x.fillStyle='#B8832E';x.fillRect(cx-w/2-8,base-h-12,w+16,12);
 x.strokeStyle='rgba(255,255,255,.3)';x.lineWidth=3;x.beginPath();x.moveTo(cx-w/2+16,base-h+24);x.lineTo(cx-w/2+56,base-h+110);x.stroke();x.restore()}
// martelo de leilão sobre o bloco
function gavel(x,cx,cy,s,a=-.35){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#2A140C';x.beginPath();x.ellipse(0,26,60,12,0,0,7);x.fill();x.fillStyle='#5A2E1C';x.fillRect(-56,12,112,14);
 x.rotate(a);x.fillStyle='#6A3A22';x.fillRect(-6,-20,120,12);x.fillStyle='#4A2414';x.beginPath();x.roundRect(-34,-46,40,64,8);x.fill();x.fillStyle='#D4A24C';x.fillRect(-34,-30,40,5);x.fillRect(-34,2,40,5);x.restore()}
const C10G=Object.assign({},C10,{hand:'#F4F0E8',finger:'#B8AFA0'});
