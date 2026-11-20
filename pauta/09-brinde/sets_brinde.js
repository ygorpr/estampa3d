// desenhos do vídeo 9 "Por que a gente brinda?" — personagens extras detalhados (mesmo estilo do Sommelier) e cenários
// ---------- personagem genérico (frontal, cabeça grande, olhos de ponto, mãos com dedos) ----------
// o: {x,y(base dos pés),s, kind:'greek'|'roman'|'lands'|'medieval'|'sailor'|'casual'|'woman', skin, hair, hairT:'short'|'curly'|'bald'|'long'|'none',
//     beard(cor|null), stache, top, top2, cloak, legs, shoe, hat:'laurel'|'barett'|'chaperon'|'dixie'|null, hatCol,
//     hl:[x,y], hr:[x,y] (mãos em coordenadas locais: pés=(0,0), ombros≈(±96,-505)), hold:{l,r}, a:{l,r} (inclinação do objeto),
//     look, lookY, brow, mouth:'smile'|'talk'|'o'|'flat', open(0..1), blink(0..1), tilt, seated(sem pernas), lv (nível da bebida)}
const SKN={a:'#E6BF98',b:'#C98E62',c:'#8A5A3A',d:'#F0CFA8'};
function ikEl(s,h,a,b){const dx=h[0]-s[0],dy=h[1]-s[1];let d=Math.hypot(dx,dy);const dd=Math.min(d,a+b-2),ang=Math.atan2(dy,dx),hh=[s[0]+Math.cos(ang)*dd,s[1]+Math.sin(ang)*dd];
 const c=Math.acos(clamp((a*a+dd*dd-b*b)/(2*a*dd),-1,1)),e1=[s[0]+Math.cos(ang+c)*a,s[1]+Math.sin(ang+c)*a],e2=[s[0]+Math.cos(ang-c)*a,s[1]+Math.sin(ang-c)*a];return {e:e1[1]>e2[1]?e1:e2,h:hh}}
function figHand(x,hx,hy,skin,a=0,open=false){x.save();x.translate(hx,hy);x.rotate(a);x.fillStyle=skin;
 if(open){x.beginPath();x.roundRect(-19,-26,38,50,15);x.fill();x.strokeStyle=skin;x.lineCap='round';x.lineWidth=9;for(let i=0;i<4;i++){const q=-.3+i*.2,fx=-13+i*9;x.beginPath();x.moveTo(fx,-20);x.lineTo(fx+Math.sin(q)*40,-20-Math.cos(q)*40);x.stroke()}x.beginPath();x.moveTo(-16,2);x.lineTo(-40,-16);x.stroke()}
 else{x.beginPath();x.roundRect(-20,-19,40,38,14);x.fill();x.strokeStyle='rgba(40,20,20,.55)';x.lineWidth=2.4;x.lineCap='round';for(const y of [-7,2,11]){x.beginPath();x.moveTo(-14,y);x.lineTo(12,y);x.stroke()}}x.restore()}
function fig(x,o){const sk=o.skin||SKN.a,k=o.kind||'casual',f=o.face||1;x.save();x.translate(o.x,o.y);x.scale(o.s||1,o.s||1);o._hw={};
 const br=Math.sin((o.t||0)*2.1+(o.ph||0))*3,top=o.top||'#8E1B3A',top2=o.top2||'#D4A24C';
 // ---- pernas e pés ----
 if(!o.seated){const legC=o.legs||'#2A2230',shoe=o.shoe||'#1A1012';
  for(const sx of [-1,1]){const hx=sx*44,fx=sx*(o.wide||48);
   if(k=='greek'||k=='roman'){x.strokeStyle=sk;x.lineWidth=40;x.lineCap='round';x.beginPath();x.moveTo(hx,-200);x.lineTo(fx,-22);x.stroke();
    x.fillStyle=sk;x.beginPath();x.roundRect(fx-24+sx*10,-30,58,28,12);x.fill();x.strokeStyle='#6A4426';x.lineWidth=5;for(const y of [-30,-60,-90]){x.beginPath();x.moveTo(fx-21,y);x.lineTo(fx+21,y+8);x.stroke()}x.fillStyle='#6A4426';x.fillRect(fx-28+sx*10,-6,66,8)}
   else if(k=='lands'){x.fillStyle='#E9D8B0';x.beginPath();x.roundRect(fx-22,-150,44,130,14);x.fill();x.fillStyle=sx<0?top:top2;x.beginPath();x.ellipse(hx,-215,62,78,sx*.15,0,7);x.fill();
    x.strokeStyle=sx<0?top2:top;x.lineWidth=9;for(let i=-2;i<=2;i++){x.beginPath();x.moveTo(hx+i*20,-285);x.quadraticCurveTo(hx+i*24,-215,hx+i*18,-145);x.stroke()}
    x.fillStyle=shoe;x.beginPath();x.ellipse(fx+sx*8,-12,40,18,0,0,7);x.fill()}
   else if(k=='woman'){}
   else{x.strokeStyle=legC;x.lineWidth=58;x.lineCap='round';x.beginPath();x.moveTo(hx,-270);x.lineTo(fx,-34);x.stroke();
    if(k=='medieval'){x.fillStyle=shoe;x.beginPath();x.roundRect(fx-32,-110,64,100,16);x.fill();x.fillStyle='rgba(255,255,255,.12)';x.fillRect(fx-28,-104,56,10)}
    x.fillStyle=k=='casual'&&o.sneaker?'#E8E2D4':shoe;x.beginPath();x.roundRect(fx-34+sx*12,-34,80,32,15);x.fill();if(k=='casual'&&o.sneaker){x.fillStyle='#8E1B3A';x.fillRect(fx-34+sx*12,-12,80,6)}}}}
 // ---- corpo / roupa ----
 const SH=[[-96,-505+br],[96,-505+br]];
 const torso=(w0,w1,y0,y1)=>{x.beginPath();x.moveTo(-w1,y1);x.lineTo(-w0+4,y0+50);x.quadraticCurveTo(-w0,y0,-w0+56,y0-4);x.lineTo(w0-56,y0-4);x.quadraticCurveTo(w0,y0,w0-4,y0+50);x.lineTo(w1,y1);x.quadraticCurveTo(0,y1+16,-w1,y1);x.closePath()};
 x.fillStyle=sk;x.fillRect(-28,-560+br,56,60);
 if(k=='greek'||k=='roman'){const hem=o.seated?-200:-150;x.fillStyle=k=='greek'?'#EDE3CC':'#F3EDE0';torso(110,o.seated?118:124,-512+br,hem);x.fill();
  x.strokeStyle='rgba(150,120,90,.35)';x.lineWidth=4;for(const dx of [-60,-20,25,65]){x.beginPath();x.moveTo(dx,-440);x.quadraticCurveTo(dx+10,-300,dx-4,hem+6);x.stroke()}
  if(!o.seated){x.fillStyle=GOLD;x.fillRect(-122,hem-20,244,14);x.strokeStyle='#8A5A20';x.lineWidth=3;for(let i=-112;i<112;i+=24){x.beginPath();x.moveTo(i,hem-8);x.lineTo(i,hem-17);x.lineTo(i+12,hem-17);x.lineTo(i+12,hem-11);x.stroke()}}
  x.fillStyle=o.cloak||(k=='roman'?'#F3EDE0':'#8E1B3A');x.beginPath();x.moveTo(-104,-500+br);x.quadraticCurveTo(-30,-470,30,-420);x.quadraticCurveTo(100,-340,118,-250);x.lineTo(118,-205);x.quadraticCurveTo(40,-300,-40,-330);x.quadraticCurveTo(-100,-360,-110,-430);x.closePath();x.fill();
  if(k=='roman'){x.strokeStyle=o.cloak2||'#6A1A5A';x.lineWidth=14;x.beginPath();x.moveTo(-100,-498+br);x.quadraticCurveTo(-30,-468,30,-418);x.quadraticCurveTo(100,-338,116,-250);x.stroke()}
  x.fillStyle=GOLD;x.beginPath();x.arc(-92,-488+br,11,0,7);x.fill();if(!o.seated){x.fillStyle='#8A5A20';x.fillRect(-110,-300,220,12)}}
 else if(k=='lands'){x.fillStyle=top;torso(108,110,-512+br,-262);x.fill();x.save();x.clip();x.fillStyle=top2;for(let i=-4;i<=4;i+=2)x.fillRect(i*26-13,-520,26,270);
  x.fillStyle='#F3E6C8';for(const [sx,sy] of [[-60,-430],[0,-400],[60,-430],[-40,-340],[40,-340]]){x.beginPath();x.ellipse(sx,sy,9,26,0,0,7);x.fill()}x.restore();
  x.fillStyle='#3A2418';x.fillRect(-112,-300,224,26);x.fillStyle=GOLD;x.fillRect(-14,-302,28,30);
  x.strokeStyle='#B8B8B8';x.lineWidth=10;x.beginPath();x.moveTo(90,-290);x.lineTo(150,-90);x.stroke();x.fillStyle='#8A6A34';x.fillRect(70,-310,44,18)}
 else if(k=='medieval'){x.fillStyle=top;torso(108,126,-512+br,-210);x.fill();x.fillStyle=top2;x.beginPath();x.moveTo(-70,-512+br);x.lineTo(0,-430);x.lineTo(70,-512+br);x.quadraticCurveTo(0,-470,-70,-512+br);x.fill();
  x.fillStyle='#3A2418';x.fillRect(-118,-300,236,22);x.fillStyle=GOLD;x.fillRect(-12,-304,24,30);x.fillStyle='rgba(0,0,0,.12)';x.fillRect(-4,-470,8,170);
  if(o.cloak){x.fillStyle=o.cloak;x.beginPath();x.moveTo(-112,-500);x.lineTo(-150,-200);x.lineTo(-108,-210);x.lineTo(-96,-470);x.fill();x.beginPath();x.moveTo(112,-500);x.lineTo(150,-200);x.lineTo(108,-210);x.lineTo(96,-470);x.fill()}}
 else if(k=='sailor'){x.fillStyle=top||'#1C2A4A';torso(108,112,-512+br,-262);x.fill();x.fillStyle='#1C2A4A';x.fillRect(-112,-300,224,40);
  x.fillStyle='#1C2A4A';x.beginPath();x.moveTo(-90,-512+br);x.lineTo(0,-420);x.lineTo(90,-512+br);x.closePath();x.fill();x.strokeStyle='#F3F0E8';x.lineWidth=6;x.beginPath();x.moveTo(-80,-505+br);x.lineTo(0,-430);x.lineTo(80,-505+br);x.stroke();
  x.fillStyle='#111';x.beginPath();x.moveTo(-20,-430);x.lineTo(20,-430);x.lineTo(30,-380);x.lineTo(0,-395);x.lineTo(-30,-380);x.closePath();x.fill();x.fillStyle=GOLD;for(const y of [-370,-330])x.fillRect(-4,y,8,8)}
 else if(k=='woman'){x.fillStyle=top;x.beginPath();x.moveTo(-100,-500+br);x.quadraticCurveTo(-112,-360,-150,-30);x.quadraticCurveTo(0,-10,150,-30);x.quadraticCurveTo(112,-360,100,-500+br);x.quadraticCurveTo(0,-520,-100,-500+br);x.fill();
  x.fillStyle=top2;x.fillRect(-104,-330,208,16);x.fillStyle=sk;x.beginPath();x.moveTo(-50,-512+br);x.lineTo(0,-450);x.lineTo(50,-512+br);x.fill();
  x.fillStyle=o.shoe||'#2A1014';x.beginPath();x.ellipse(-50,-20,34,14,0,0,7);x.ellipse(50,-20,34,14,0,0,7);x.fill()}
 else{x.fillStyle=top;torso(108,110,-512+br,-262);x.fill();if(o.stripes){x.save();x.clip();x.fillStyle=o.stripes;for(let i=-5;i<=5;i++)x.fillRect(i*36-6,-520,12,270);x.restore()}
  x.fillStyle=top2;x.beginPath();x.moveTo(-48,-514+br);x.lineTo(0,-470);x.lineTo(48,-514+br);x.lineTo(30,-520);x.lineTo(0,-490);x.lineTo(-30,-520);x.closePath();x.fill();
  x.fillStyle='rgba(0,0,0,.2)';for(const y of [-450,-400,-350,-300]){x.beginPath();x.arc(0,y,5,0,7);x.fill()}x.fillStyle=o.legs||'#2A3A5A';x.fillRect(-110,-280,220,22)}
 // ---- braços (cotovelo sempre para baixo) e objetos ----
 const sleeve=k=='greek'||k=='roman'?sk:k=='lands'?null:k=='woman'?sk:top,arm=(si,h0,hold,a)=>{const s=SH[si],r=ikEl(s,h0,128,120),e=r.e,h=r.h;
  const upC=k=='greek'||k=='roman'?(k=='roman'?'#F3EDE0':'#EDE3CC'):k=='woman'?top:k=='lands'?(si?top2:top):top;
  limb(x,s,e,62,52,upC);if(k=='lands'){x.fillStyle=si?top:top2;x.beginPath();x.ellipse((s[0]+e[0])/2,(s[1]+e[1])/2,40,58,Math.atan2(e[1]-s[1],e[0]-s[0])+Math.PI/2,0,7);x.fill();x.fillStyle='#F3E6C8';x.beginPath();x.ellipse((s[0]+e[0])/2,(s[1]+e[1])/2,7,24,Math.atan2(e[1]-s[1],e[0]-s[0])+Math.PI/2,0,7);x.fill()}
  const lowC=k=='casual'?sk:k=='greek'||k=='roman'||k=='woman'?sk:k=='lands'?(si?top:top2):top;limb(x,e,h,50,42,lowC);
  if(k=='casual'){x.fillStyle=top;x.beginPath();x.ellipse(e[0]*.35+s[0]*.65,e[1]*.35+s[1]*.65,40,46,0,0,7);x.fill()}
  if(k=='sailor'||k=='medieval'){x.fillStyle=k=='sailor'?'#F3F0E8':top2;const u=.85;x.beginPath();x.arc(e[0]+(h[0]-e[0])*u,e[1]+(h[1]-e[1])*u,22,0,7);x.fill()}
  if(hold)holdItem(x,hold,h[0],h[1],a||0,o);const ang=a||0;figHand(x,h[0],h[1],sk,ang,!hold&&o.open2);
  const m=x.getTransform();o._hw[si?'r':'l']=[m.a*h[0]+m.c*h[1]+m.e,m.b*h[0]+m.d*h[1]+m.f]};
 const hold=o.hold||{},ang=o.a||{};arm(0,o.hl||[-120,-300],hold.l,ang.l);arm(1,o.hr||[120,-300],hold.r,ang.r);
 // ---- cabeça ----
 x.save();x.translate(o.headX||0,-640+br);x.rotate(o.tilt||0);const R=92,hair=o.hair||'#5A3E2A',ht=o.hairT||'short';
 if(ht=='long'){x.fillStyle=hair;x.beginPath();x.moveTo(-R-14,-10);x.quadraticCurveTo(-R-30,150,-R+10,190);x.lineTo(R-10,190);x.quadraticCurveTo(R+30,150,R+14,-10);x.closePath();x.fill()}
 x.fillStyle=sk;for(const sx of [-1,1]){x.beginPath();x.ellipse(sx*(R-2),8,16,22,0,0,7);x.fill()}x.beginPath();x.arc(0,0,R,0,7);x.fill();
 x.fillStyle='rgba(220,110,90,.18)';for(const sx of [-1,1]){x.beginPath();x.ellipse(sx*50,28,18,11,0,0,7);x.fill()}
 if(ht=='short'||ht=='curly'||ht=='long'){x.fillStyle=hair;x.beginPath();x.moveTo(-R-3,-2);x.quadraticCurveTo(-R+2,-R-12,8,-R-8);x.quadraticCurveTo(R+6,-R+2,R+3,-2);x.quadraticCurveTo(R-14,-50,ht=='long'?20:40,-56);x.quadraticCurveTo(-34,-44,-R-3,-2);x.fill();
  if(ht=='curly'){for(let i=0;i<9;i++){const q=Math.PI*(1.05+i*.1);x.beginPath();x.arc(Math.cos(q)*(R-4),Math.sin(q)*(R-4),20,0,7);x.fill()}}}
 if(ht=='bald'){x.fillStyle=hair;for(const sx of [-1,1]){x.beginPath();x.ellipse(sx*(R-8),-10,18,40,sx*.2,0,7);x.fill()}}
 const lk=(o.look||0)*20,ly=(o.lookY||0)*10,bl=o.blink||0,brow=o.brow||0;
 x.fillStyle='#1c1a2b';for(const sx of [-1,1]){x.beginPath();x.ellipse(sx*30+lk,-8+ly,9,12*(1-bl*.9),0,0,7);x.fill()}
 x.fillStyle='#fff';if(bl<.5)for(const sx of [-1,1]){x.beginPath();x.arc(sx*30+lk+3,-12+ly,3,0,7);x.fill()}
 x.strokeStyle=o.hairT=='bald'?'#6A5040':hair;x.lineWidth=8;x.lineCap='round';for(const sx of [-1,1]){x.beginPath();x.moveTo(sx*16+lk*.5,-36-brow*8);x.lineTo(sx*44+lk*.5,-38-brow*4+(o.angry?-sx*0:0));x.stroke()}
 x.strokeStyle='rgba(120,60,40,.6)';x.lineWidth=4;x.beginPath();x.moveTo(lk*.6-4,8);x.quadraticCurveTo(lk*.6+8,22,lk*.6-6,26);x.stroke();
 if(o.beard){x.fillStyle=o.beard;x.beginPath();x.moveTo(-R+4,6);x.quadraticCurveTo(-R+10,R*.9,0,R+(o.longBeard?40:14));x.quadraticCurveTo(R-10,R*.9,R-4,6);x.lineTo(R-18,10);x.quadraticCurveTo(40,70,0,66);x.quadraticCurveTo(-40,70,-R+18,10);x.closePath();x.fill()}
 if(o.stache||o.beard){x.fillStyle=o.stache||o.beard;x.beginPath();x.moveTo(-38,46);x.quadraticCurveTo(0,26,38,46);x.quadraticCurveTo(0,40,-38,46);x.fill();x.beginPath();x.ellipse(0,38,30,9,0,0,7);x.fill()}
 const op=o.open||0,mt=o.mouth||'smile';x.fillStyle='#3A1218';
 if(op>.08||mt=='o'){x.beginPath();x.ellipse(lk*.4,54,mt=='o'?12:16,4+op*16,0,0,7);x.fill();x.fillStyle='#C25050';x.beginPath();x.ellipse(lk*.4,58+op*6,10,3+op*5,0,0,Math.PI);x.fill()}
 else{x.strokeStyle='#3A1218';x.lineWidth=5;x.beginPath();if(mt=='flat'){x.moveTo(-14,54);x.lineTo(14,54)}else{x.moveTo(-18,50);x.quadraticCurveTo(0,64,18,50)}x.stroke()}
 if(o.lip){x.fillStyle='rgba(180,40,60,.5)';x.beginPath();x.ellipse(0,54,13,5,0,0,7);x.fill()}
 const hat=o.hat;
 if(hat=='laurel'){x.strokeStyle='#5E7A2E';x.lineWidth=6;x.beginPath();x.arc(0,8,R+4,Math.PI*1.08,Math.PI*1.92);x.stroke();x.fillStyle='#7A9A3A';for(let i=0;i<11;i++){const q=Math.PI*(1.1+i*.08);x.save();x.translate(Math.cos(q)*(R+4),8+Math.sin(q)*(R+4));x.rotate(q+Math.PI/2+(i<5?-.6:.6));x.beginPath();x.ellipse(0,-12,8,17,0,0,7);x.fill();x.restore()}}
 if(hat=='barett'){x.fillStyle=o.hatCol||'#2A1A2A';x.beginPath();x.ellipse(-6,-R+6,R+46,30,-.12,0,7);x.fill();x.beginPath();x.ellipse(-6,-R-10,R-8,30,-.12,0,7);x.fill();
  for(const [c,q] of [['#F3E6C8',-.5],['#C8213F',-.15],['#F3E6C8',.2],[GOLD,.5]]){x.save();x.translate(30,-R-14);x.rotate(q);x.fillStyle=c;x.beginPath();x.moveTo(0,0);x.quadraticCurveTo(26,-60,10,-150);x.quadraticCurveTo(-22,-70,0,0);x.fill();x.restore()}}
 if(hat=='chaperon'){x.fillStyle=o.hatCol||'#5E1428';x.beginPath();x.ellipse(0,-R+18,R+12,34,0,Math.PI,0);x.fill();x.beginPath();x.ellipse(0,-R-4,R-10,40,0,0,7);x.fill();x.beginPath();x.moveTo(R-30,-R);x.quadraticCurveTo(R+60,-R+30,R+40,60);x.lineTo(R+20,60);x.quadraticCurveTo(R+30,-R+40,R-40,-R+20);x.fill()}
 if(hat=='dixie'){x.fillStyle='#F3F0E8';x.beginPath();x.ellipse(0,-R+20,R+8,22,0,0,7);x.fill();x.beginPath();x.moveTo(-R+14,-R+20);x.quadraticCurveTo(-R+10,-R-44,0,-R-46);x.quadraticCurveTo(R-10,-R-44,R-14,-R+20);x.fill();x.strokeStyle='#D8D2C4';x.lineWidth=4;x.beginPath();x.ellipse(0,-R+20,R+8,22,0,0,7);x.stroke()}
 if(hat=='cap'){x.fillStyle=o.hatCol||'#1E3A31';x.beginPath();x.arc(0,-30,R+4,Math.PI*1.05,Math.PI*1.95);x.fill();x.beginPath();x.ellipse(40,-50,70,16,-.1,0,7);x.fill()}
 x.restore();x.restore();return o._hw}
// ---------- bebidas e objetos na mão (mão = ponto de pega) ----------
function kylix(x,cx,cy,s,a,lv=.6,col='#5E1428'){x.save();x.translate(cx,cy);x.rotate(a);x.scale(s,s);x.fillStyle='#B4562A';x.beginPath();x.ellipse(0,30,34,9,0,0,7);x.fill();x.fillRect(-8,-10,16,40);
 x.beginPath();x.moveTo(-110,-38);x.quadraticCurveTo(-90,0,0,-4);x.quadraticCurveTo(90,0,110,-38);x.closePath();x.fill();x.fillStyle='#1A0E0A';x.beginPath();x.moveTo(-100,-30);x.quadraticCurveTo(-80,-10,0,-12);x.quadraticCurveTo(80,-10,100,-30);x.lineTo(96,-26);x.quadraticCurveTo(0,-20,-96,-26);x.fill();
 x.strokeStyle='#B4562A';x.lineWidth=8;for(const sx of [-1,1]){x.beginPath();x.arc(sx*118,-30,16,sx>0?-Math.PI*.6:Math.PI*.4,sx>0?Math.PI*.6:Math.PI*1.6);x.stroke()}
 if(lv>0){x.save();x.rotate(-a);x.fillStyle=col;x.beginPath();x.ellipse(0,-30,96*lv+4,7,0,0,7);x.fill();x.restore()}x.restore()}
function goblet(x,cx,cy,s,a,lv=.6,col='#5E1428'){x.save();x.translate(cx,cy);x.rotate(a);x.scale(s,s);x.fillStyle='#C9963A';x.beginPath();x.ellipse(0,40,32,9,0,0,7);x.fill();x.fillRect(-7,-20,14,60);
 x.beginPath();x.moveTo(-46,-90);x.lineTo(46,-90);x.quadraticCurveTo(44,-26,0,-18);x.quadraticCurveTo(-44,-26,-46,-90);x.fill();x.fillStyle='#F2D27A';x.fillRect(-36,-76,8,40);x.fillStyle=col;x.save();x.rotate(-a);x.beginPath();x.ellipse(0,-88,42,8,0,0,7);x.fill();x.restore();x.restore()}
function tankard(x,cx,cy,s,a,metal=false){x.save();x.translate(cx,cy);x.rotate(a);x.scale(s,s);const c=metal?'#9A9AA4':'#7A4A26';x.fillStyle=c;x.beginPath();x.roundRect(-46,-80,92,130,10);x.fill();
 x.strokeStyle=metal?'#6A6A74':'#3A2012';x.lineWidth=7;for(const y of [-60,30]){x.beginPath();x.moveTo(-46,y);x.lineTo(46,y);x.stroke()}if(!metal){x.lineWidth=3;for(const dx of [-24,0,24]){x.beginPath();x.moveTo(dx,-76);x.lineTo(dx,46);x.stroke()}}
 x.strokeStyle=c;x.lineWidth=14;x.beginPath();x.arc(52,-14,30,-Math.PI/2,Math.PI/2);x.stroke();x.fillStyle='#5E1428';x.beginPath();x.ellipse(0,-80,42,9,0,0,7);x.fill();x.restore()}
function copo(x,cx,cy,s,lv=.7,col='#F2C04A',foam=true,a=0){x.save();x.translate(cx,cy);x.rotate(a);x.scale(s,s);const body=()=>{x.beginPath();x.moveTo(-34,-70);x.lineTo(34,-70);x.lineTo(28,50);x.lineTo(-28,50);x.closePath()};
 if(lv>0){x.save();body();x.clip();x.save();x.rotate(-a);const ty=50-lv*120;x.fillStyle=col;x.fillRect(-80,ty,160,200);if(foam){x.fillStyle='#FFF6E0';x.fillRect(-80,ty-14,160,16)}x.restore();x.restore()}
 body();x.fillStyle='rgba(240,236,220,.16)';x.fill();x.strokeStyle='rgba(255,250,235,.7)';x.lineWidth=3;x.stroke();x.lineWidth=2;x.strokeStyle='rgba(255,250,235,.4)';for(let i=-3;i<=3;i++){x.beginPath();x.moveTo(i*9,-30);x.lineTo(i*8,50);x.stroke()}
 x.strokeStyle='rgba(255,250,235,.6)';x.lineWidth=3;x.beginPath();x.moveTo(-34,-40);x.lineTo(34,-40);x.stroke();x.restore()}
function holdItem(x,it,hx,hy,a,o){const lv=o.lv??.6;
 if(it=='kylix')kylix(x,hx,hy-34,1,a,lv);else if(it=='goblet')goblet(x,hx,hy-14,1,a,lv);else if(it=='tankard')tankard(x,hx+6,hy+10,1,a,!!o.metal);
 else if(it=='copo')copo(x,hx,hy-4,1,lv,o.drink||'#F2C04A',o.foam!==false,a);else if(it=='cacha')copo(x,hx,hy+8,.75,lv*.6,'#F3E2A0',false,a);
 else if(it=='wine'){x.save();x.translate(hx,hy);x.rotate(a);glassW(x,0,40,1.1,lv,o.drink||'#5E1428');x.restore()}
 else if(it=='water'){x.save();x.translate(hx,hy);x.rotate(a);copo(x,0,-4,1,.75,'rgba(150,200,230,.55)',false);x.restore()}
 else if(it=='pike'){x.save();x.translate(hx,hy);x.rotate(a);x.fillStyle='#6A4426';x.fillRect(-7,-520,14,780);x.fillStyle='#B8B8C0';x.beginPath();x.moveTo(0,-640);x.lineTo(16,-520);x.lineTo(-16,-520);x.closePath();x.fill();x.beginPath();x.moveTo(8,-560);x.quadraticCurveTo(80,-560,70,-490);x.lineTo(8,-500);x.fill();x.restore()}
 else if(it=='scroll'){x.save();x.translate(hx,hy);x.rotate(a);x.fillStyle='#E9D8B0';x.fillRect(-14,-90,70,150);x.fillStyle='#C9B488';x.beginPath();x.ellipse(21,-90,40,12,0,0,7);x.ellipse(21,60,40,12,0,0,7);x.fill();x.strokeStyle='#8A6A44';x.lineWidth=3;for(let i=0;i<5;i++){x.beginPath();x.moveTo(-4,-60+i*22);x.lineTo(46,-60+i*22);x.stroke()}x.restore()}}
// ---------- cenários ----------
function greece(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1E0A20');g.addColorStop(.55,'#7A2E3A');g.addColorStop(1,'#D88A4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 g=x.createRadialGradient(1500,560,20,1500,560,520);g.addColorStop(0,'rgba(255,210,140,.6)');g.addColorStop(1,'rgba(255,210,140,0)');x.fillStyle=g;x.fillRect(900,0,1200,1100);
 x.fillStyle='#3A1A28';x.beginPath();x.moveTo(-900,700);x.quadraticCurveTo(300,520,800,640);x.quadraticCurveTo(1300,520,2800,660);x.lineTo(2800,900);x.lineTo(-900,900);x.fill();
 // templo
 x.save();x.translate(1180,700);x.fillStyle='#E9D8B8';x.beginPath();x.moveTo(-420,-420);x.lineTo(0,-560);x.lineTo(420,-420);x.closePath();x.fill();x.fillStyle='#CDB894';x.fillRect(-440,-430,880,36);x.fillRect(-460,-14,920,24);x.fillRect(-480,8,960,24);
 x.fillStyle='rgba(120,60,50,.35)';x.beginPath();x.moveTo(-330,-430);x.lineTo(0,-530);x.lineTo(330,-430);x.closePath();x.fill();
 for(let i=0;i<7;i++){const cx=-390+i*130;let cg=x.createLinearGradient(cx-26,0,cx+26,0);cg.addColorStop(0,'#BFA882');cg.addColorStop(.5,'#F3E6C8');cg.addColorStop(1,'#A89070');x.fillStyle=cg;x.fillRect(cx-26,-394,52,380);x.fillStyle='#E0CEA8';x.fillRect(cx-36,-404,72,16);x.fillRect(cx-34,-20,68,10)}
 x.restore();x.fillStyle='#5A3A2A';x.fillRect(-900,740,W+1800,400);x.fillStyle='rgba(255,200,140,.18)';x.fillRect(-900,740,W+1800,6);
 // oliveira
 x.fillStyle='#3A2418';x.beginPath();x.moveTo(250,760);x.quadraticCurveTo(230,600,280,500);x.lineTo(300,500);x.quadraticCurveTo(270,620,290,760);x.fill();x.fillStyle='#4A5A2E';for(const [ox,oy,r] of [[290,440,110],[200,480,80],[380,470,90],[300,380,80]]){x.beginPath();x.ellipse(ox,oy,r,r*.7,0,0,7);x.fill()}
 x.fillStyle='rgba(160,180,110,.5)';for(let i=0;i<30;i++){const r=rng(i+3);x.beginPath();x.ellipse(170+r()*260,360+r()*160,8,4,r()*3,0,7);x.fill()}}
function altar(x,cx,base,t){x.fillStyle='#CDB894';x.fillRect(cx-90,base-150,180,150);x.fillStyle='#E9D8B8';x.fillRect(cx-110,base-170,220,26);x.fillRect(cx-104,base-14,208,14);flame(x,cx,base-170,1.5,t)}
function castle(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1A1418');g.addColorStop(1,'#3A2A26');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.strokeStyle='rgba(0,0,0,.35)';x.lineWidth=4;for(let r=0;r<16;r++)for(let c=-6;c<26;c++){const bx=c*120+(r%2)*60,by=-200+r*60;x.fillStyle=(r*7+c*3)%5?'#4A3C36':'#54443C';x.fillRect(bx,by,118,58);x.strokeRect(bx,by,118,58)}
 // janela em arco com lua
 x.fillStyle='#0E1424';x.beginPath();x.moveTo(860,420);x.lineTo(860,200);x.arc(960,200,100,Math.PI,0);x.lineTo(1060,420);x.fill();x.fillStyle='rgba(230,230,200,.8)';x.beginPath();x.arc(1000,190,26,0,7);x.fill();x.strokeStyle='#2A2220';x.lineWidth=10;x.beginPath();x.moveTo(960,100);x.lineTo(960,420);x.moveTo(860,280);x.lineTo(1060,280);x.stroke();
 // estandartes
 for(const [bx,c] of [[420,'#8E1B3A'],[1500,'#1E3A31']]){x.fillStyle=GOLD;x.fillRect(bx-110,90,220,12);x.fillStyle=c;x.beginPath();x.moveTo(bx-100,100);x.lineTo(bx+100,100);x.lineTo(bx+100,420);x.lineTo(bx,370);x.lineTo(bx-100,420);x.closePath();x.fill();
  x.fillStyle=GOLD;x.beginPath();x.moveTo(bx,170);x.lineTo(bx+40,210);x.lineTo(bx+30,290);x.lineTo(bx,320);x.lineTo(bx-30,290);x.lineTo(bx-40,210);x.closePath();x.fill();x.fillStyle=c;x.beginPath();x.moveTo(bx,200);x.lineTo(bx+20,230);x.lineTo(bx,280);x.lineTo(bx-20,230);x.closePath();x.fill()}
 // tochas
 for(const tx of [200,1720]){x.fillStyle='#3A2418';x.fillRect(tx-10,320,20,90);x.fillStyle='#6A4426';x.beginPath();x.moveTo(tx-26,320);x.lineTo(tx+26,320);x.lineTo(tx+14,350);x.lineTo(tx-14,350);x.fill();flame(x,tx,322,1.6,t);
  const gr=x.createRadialGradient(tx,300,10,tx,300,380);gr.addColorStop(0,'rgba(255,170,80,.35)');gr.addColorStop(1,'rgba(255,170,80,0)');x.fillStyle=gr;x.fillRect(tx-380,-80,760,760)}
 x.fillStyle='#2A1C16';x.fillRect(-900,820,W+1800,400)}
function hallTable(x){let g=x.createLinearGradient(0,700,0,900);g.addColorStop(0,'#6A4024');g.addColorStop(1,'#3A2012');x.fillStyle=g;x.fillRect(200,700,1520,40);x.fillStyle='#3A2012';x.fillRect(200,740,1520,120);x.fillStyle='rgba(255,210,150,.3)';x.fillRect(200,700,1520,4);
 x.fillStyle='#C9B48A';x.beginPath();x.ellipse(960,690,90,24,0,0,7);x.fill();x.fillStyle='#A8642E';x.beginPath();x.ellipse(960,676,62,26,0,Math.PI,0);x.fill();x.fillStyle='#4A1A3A';for(const [gx,gy] of [[1300,680],[1320,668],[1290,662],[1310,652],[1330,684]]){x.beginPath();x.arc(gx,gy,12,0,7);x.fill()}}
function boteco(x,t){x.fillStyle='#F0EDE2';x.fillRect(-900,-600,W+1800,1900);
 // azulejos
 x.strokeStyle='rgba(120,140,130,.35)';x.lineWidth=2;for(let r=0;r<16;r++)for(let c=-8;c<26;c++){x.strokeRect(c*90,-200+r*90,90,90)}
 x.fillStyle='#2E7A5A';x.fillRect(-900,380,W+1800,450);x.strokeStyle='rgba(0,0,0,.2)';for(let r=0;r<5;r++)for(let c=-8;c<26;c++)x.strokeRect(c*90,380+r*90,90,90);x.fillStyle='#E8C24A';x.fillRect(-900,372,W+1800,14);
 // placa do bar
 x.fillStyle='#8E1B3A';x.beginPath();x.roundRect(720,200,480,110,16);x.fill();x.strokeStyle='#F2D27A';x.lineWidth=6;x.stroke();x.font='900 64px Cinzel';x.textAlign='center';x.textBaseline='middle';x.fillStyle='#F2D27A';x.fillText('BAR DO ZÉ',960,258);
 // prateleira com garrafas de cachaça
 x.fillStyle='#7A4A26';x.fillRect(150,250,520,16);x.fillRect(1250,250,520,16);for(let i=0;i<6;i++){for(const bx of [190+i*82,1290+i*82]){x.fillStyle=['#E8D9A0','#C98A3A','#2E5A3A','#E8D9A0','#8E1B3A','#C98A3A'][i];x.beginPath();x.roundRect(bx,150,40,100,6);x.fill();x.fillRect(bx+13,118,14,34);x.fillStyle='#F3F0E8';x.fillRect(bx+4,190,32,30)}}
 // ventilador de teto e varal de luzes
 x.strokeStyle='#5A5A5A';x.lineWidth=6;x.beginPath();x.moveTo(400,-200);x.lineTo(400,30);x.stroke();x.fillStyle='#6A6A6A';x.beginPath();x.ellipse(400,40,26,14,0,0,7);x.fill();const fa=t*6;x.fillStyle='#8A7A5A';for(let i=0;i<3;i++){const q=fa+i*2.09;x.beginPath();x.ellipse(400+Math.cos(q)*90,40+Math.sin(q)*14,90,10*Math.abs(Math.cos(q))+3,0,0,7);x.fill()}
 x.strokeStyle='#3A3A3A';x.lineWidth=3;x.beginPath();x.moveTo(-100,20);x.quadraticCurveTo(960,140,2020,20);x.stroke();for(let i=0;i<16;i++){const u=i/15,lx=-100+u*2120,ly=20+Math.sin(u*Math.PI)*60+6;const gr=x.createRadialGradient(lx,ly,2,lx,ly,40);gr.addColorStop(0,'rgba(255,220,140,.9)');gr.addColorStop(1,'rgba(255,220,140,0)');x.fillStyle=gr;x.fillRect(lx-40,ly-40,80,80);x.fillStyle='#FFE6A0';x.beginPath();x.arc(lx,ly,8,0,7);x.fill()}}
function botecoTable(x,cx,y,w){x.fillStyle='#C8213F';x.fillRect(cx-w/2,y,w,26);x.fillStyle='#A81A34';x.fillRect(cx-w/2,y+26,w,14);x.fillStyle='#B81D38';for(const dx of [-w/2+30,w/2-50])x.fillRect(cx+dx,y+40,20,220);x.font='900 22px Cinzel';x.fillStyle='rgba(255,240,200,.85)';x.textAlign='center';x.fillText('CERVEJA GELADA',cx,y+16)}
function seaNight(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#0A0E1E');g.addColorStop(.6,'#1E2A44');g.addColorStop(1,'#3A3048');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='rgba(255,250,230,.8)';for(let i=0;i<60;i++){const r=rng(i+9);x.beginPath();x.arc(r()*1920,r()*380,r()*2+1,0,7);x.fill()}x.fillStyle='#F3EED8';x.beginPath();x.arc(1600,150,50,0,7);x.fill();
 x.fillStyle='#14203A';x.fillRect(-900,600,W+1800,600);x.strokeStyle='rgba(200,210,240,.25)';x.lineWidth=3;for(let i=0;i<14;i++){const y=620+i*22,o=(t*30+i*80)%240;x.beginPath();for(let xx=-100;xx<2000;xx+=240){x.moveTo(xx+o,y);x.lineTo(xx+o+90,y)}x.stroke()}}
function navyShip(x,cx,cy,s,t){x.save();x.translate(cx,cy+Math.sin(t*1.1)*5);x.scale(s,s);x.rotate(Math.sin(t*.9)*.01);
 x.fillStyle='#4A5260';x.beginPath();x.moveTo(-620,-40);x.lineTo(640,-40);x.lineTo(560,60);x.lineTo(-560,60);x.closePath();x.fill();x.fillStyle='#8E1B3A';x.fillRect(-560,40,1120,20);
 x.fillStyle='#5A6270';x.fillRect(-300,-140,420,100);x.fillRect(-200,-220,240,80);x.fillRect(-130,-300,90,80);x.fillStyle='#3A4250';x.fillRect(-90,-420,12,140);x.fillRect(-160,-380,150,8);
 x.fillStyle='#FFE6A0';for(let i=0;i<8;i++)x.fillRect(-280+i*50,-110,22,16);for(let i=0;i<4;i++)x.fillRect(-180+i*55,-195,20,14);
 x.fillStyle='#3A4250';x.fillRect(260,-100,140,60);x.fillRect(380,-80,200,14);x.fillRect(-500,-90,140,50);x.fillRect(-620,-74,140,12);
 x.strokeStyle='#F3F0E8';x.lineWidth=2;x.beginPath();x.moveTo(-84,-420);x.lineTo(620,-40);x.moveTo(-84,-420);x.lineTo(-620,-40);x.stroke();
 for(let i=0;i<9;i++){x.fillStyle=['#C8213F','#F3F0E8','#1C2A4A','#E8C24A'][i%4];x.beginPath();x.moveTo(-84+i*70,-420+i*38);x.lineTo(-84+i*70+18,-420+i*38+8);x.lineTo(-84+i*70+2,-420+i*38+22);x.fill()}
 x.fillStyle='#C8213F';x.fillRect(-78,-420,70,40);x.fillStyle='#F3F0E8';x.fillRect(-78,-406,70,10);x.restore()}
function europeMap(x,cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#1E3A5A';x.globalAlpha=.55;x.fillRect(-700,-360,1400,720);x.globalAlpha=1;
 const land=(pts,c='#C9A86A')=>{x.fillStyle=c;x.beginPath();x.moveTo(pts[0],pts[1]);for(let i=2;i<pts.length;i+=2)x.lineTo(pts[i],pts[i+1]);x.closePath();x.fill();x.strokeStyle='#8A6A34';x.lineWidth=3;x.stroke()};
 land([-700,-60,-560,-110,-420,-150,-300,-90,-330,10,-380,120,-470,180,-600,160,-680,60]);// Ibéria
 land([-420,-150,-330,-250,-240,-330,-120,-320,-80,-200,-140,-90,-300,-90]);// França
 land([-240,-330,-200,-360,40,-360,140,-300,100,-170,-80,-200,-120,-320]);// Alemanha
 land([-80,-200,100,-170,130,-110,40,-80,-60,-100,-140,-90],'#B89858');// Suíça/Áustria
 land([-60,-100,40,-80,60,-20,180,80,240,140,200,170,120,100,60,40,-20,-40]);// Itália
 land([140,-300,320,-320,420,-200,300,-60,130,-110,100,-170]);// leste
 land([-400,-500,-300,-520,-250,-400,-320,-360,-420,-380]);// Inglaterra
 x.restore()}
function toastSlice(x,cx,cy,s,a){x.save();x.translate(cx,cy);x.rotate(a);x.scale(s,s);x.fillStyle='#8A5A2A';x.beginPath();x.moveTo(-50,40);x.lineTo(-50,-20);x.quadraticCurveTo(-60,-60,-25,-62);x.quadraticCurveTo(0,-80,25,-62);x.quadraticCurveTo(60,-60,50,-20);x.lineTo(50,40);x.closePath();x.fill();
 x.fillStyle='#D8A45A';x.beginPath();x.moveTo(-40,32);x.lineTo(-40,-18);x.quadraticCurveTo(-48,-50,-22,-52);x.quadraticCurveTo(0,-68,22,-52);x.quadraticCurveTo(48,-50,40,-18);x.lineTo(40,32);x.closePath();x.fill();
 x.fillStyle='rgba(120,70,30,.5)';for(const [px,py] of [[-15,-20],[10,0],[-20,15],[18,-30],[0,22]]){x.beginPath();x.arc(px,py,4,0,7);x.fill()}x.restore()}
function cinnamon(x,cx,cy,s,a){x.save();x.translate(cx,cy);x.rotate(a);x.scale(s,s);x.fillStyle='#8A4A22';x.beginPath();x.roundRect(-90,-14,180,28,10);x.fill();x.strokeStyle='#5A2E12';x.lineWidth=4;x.beginPath();x.moveTo(-86,0);x.lineTo(86,0);x.stroke();x.fillStyle='#6A3A1A';x.beginPath();x.ellipse(-90,0,8,14,0,0,7);x.fill();x.restore()}
function clove(x,cx,cy,s,a){x.save();x.translate(cx,cy);x.rotate(a);x.scale(s,s);x.fillStyle='#4A2414';x.fillRect(-5,-10,10,50);x.beginPath();x.arc(0,-16,12,0,7);x.fill();for(const q of [0,2.1,4.2]){x.beginPath();x.ellipse(Math.cos(q)*12,-16+Math.sin(q)*12,6,4,q,0,7);x.fill()}x.restore()}
function shakespeare(x,cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle=GOLD;x.fillRect(-170,-210,340,420);x.fillStyle='#2A1C14';x.fillRect(-150,-190,300,380);
 x.fillStyle='#1A1410';x.beginPath();x.moveTo(-120,190);x.quadraticCurveTo(-120,40,0,40);x.quadraticCurveTo(120,40,120,190);x.fill();
 x.fillStyle='#F3F0E8';for(let i=0;i<12;i++){const q=Math.PI*(.05+i*.075);x.beginPath();x.ellipse(Math.cos(q)*70,50-Math.sin(q)*-6+10,22,14,q,0,7);x.fill()}x.beginPath();x.ellipse(0,52,92,26,0,0,7);x.fill();x.strokeStyle='#C9C2B0';x.lineWidth=2;for(let i=-4;i<=4;i++){x.beginPath();x.moveTo(i*20,32);x.lineTo(i*22,72);x.stroke()}
 x.fillStyle='#E6BF98';x.beginPath();x.arc(0,-50,72,0,7);x.fill();x.fillStyle='#5A3E2A';for(const sx of [-1,1]){x.beginPath();x.moveTo(sx*40,-100);x.quadraticCurveTo(sx*100,-70,sx*80,10);x.quadraticCurveTo(sx*66,-30,sx*58,-60);x.fill()}
 x.fillStyle='#1c1a2b';for(const sx of [-1,1]){x.beginPath();x.ellipse(sx*24,-56,7,9,0,0,7);x.fill()}x.strokeStyle='#5A3E2A';x.lineWidth=6;x.lineCap='round';for(const sx of [-1,1]){x.beginPath();x.moveTo(sx*12,-78);x.lineTo(sx*36,-80);x.stroke()}
 x.fillStyle='#5A3E2A';x.beginPath();x.moveTo(-30,-14);x.quadraticCurveTo(0,-26,30,-14);x.quadraticCurveTo(0,-20,-30,-14);x.fill();x.beginPath();x.moveTo(-12,0);x.lineTo(12,0);x.lineTo(0,30);x.fill();x.strokeStyle='#3A1218';x.lineWidth=4;x.beginPath();x.moveTo(-10,-6);x.quadraticCurveTo(0,0,10,-6);x.stroke();
 x.strokeStyle='rgba(120,60,40,.6)';x.lineWidth=3;x.beginPath();x.moveTo(-2,-46);x.quadraticCurveTo(6,-34,-4,-30);x.stroke();
 x.strokeStyle='#F3E6C8';x.lineWidth=5;x.beginPath();x.moveTo(110,170);x.quadraticCurveTo(140,60,180,-20);x.stroke();x.fillStyle='#F3E6C8';x.beginPath();x.moveTo(180,-20);x.quadraticCurveTo(200,40,150,90);x.quadraticCurveTo(150,20,180,-20);x.fill();x.restore()}
function senseIcon(x,cx,cy,r,kind,a,hl){if(a<=0)return;x.save();x.globalAlpha=a;x.translate(cx,cy);x.scale(.6+.4*a,.6+.4*a);x.fillStyle='rgba(30,6,12,.9)';x.beginPath();x.arc(0,0,r,0,7);x.fill();x.strokeStyle=hl?'#F2D27A':GOLD;x.lineWidth=hl?10:6;x.stroke();
 x.strokeStyle='#F3E6C8';x.fillStyle='#F3E6C8';x.lineWidth=8;x.lineCap='round';x.lineJoin='round';
 if(kind=='olho'){x.beginPath();x.moveTo(-60,0);x.quadraticCurveTo(0,-50,60,0);x.quadraticCurveTo(0,50,-60,0);x.stroke();x.beginPath();x.arc(0,0,18,0,7);x.fill()}
 if(kind=='nariz'){x.beginPath();x.moveTo(-6,-56);x.quadraticCurveTo(-10,0,-34,24);x.quadraticCurveTo(-20,44,0,30);x.quadraticCurveTo(20,44,34,24);x.stroke()}
 if(kind=='mao'){x.beginPath();x.roundRect(-28,-6,56,56,16);x.fill();for(let i=0;i<4;i++){x.beginPath();x.moveTo(-21+i*14,0);x.lineTo(-21+i*14,-48+Math.abs(i-1.5)*8);x.stroke()}x.beginPath();x.moveTo(-26,22);x.lineTo(-52,-4);x.stroke()}
 if(kind=='boca'){x.beginPath();x.moveTo(-54,-4);x.quadraticCurveTo(-20,-30,0,-14);x.quadraticCurveTo(20,-30,54,-4);x.quadraticCurveTo(0,46,-54,-4);x.fill();x.strokeStyle='#2A0A10';x.lineWidth=5;x.beginPath();x.moveTo(-46,-2);x.quadraticCurveTo(0,10,46,-2);x.stroke()}
 if(kind=='ouvido'){x.beginPath();x.moveTo(-14,40);x.quadraticCurveTo(-30,60,-40,40);x.moveTo(-14,40);x.quadraticCurveTo(10,10,10,-10);x.quadraticCurveTo(10,-56,-20,-56);x.quadraticCurveTo(-50,-56,-50,-20);x.stroke();x.beginPath();x.moveTo(-26,-14);x.quadraticCurveTo(-24,-34,-8,-28);x.stroke();
  if(hl){x.strokeStyle='#F2D27A';x.lineWidth=6;for(const rr of [36,58]){x.beginPath();x.arc(14,-12,rr,-.6,.6);x.stroke()}}}
 x.restore()}
function heart(x,cx,cy,s,col='#C8213F'){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle=col;x.beginPath();x.moveTo(0,40);x.bezierCurveTo(-90,-20,-50,-80,0,-40);x.bezierCurveTo(50,-80,90,-20,0,40);x.fill();x.fillStyle='rgba(255,255,255,.3)';x.beginPath();x.ellipse(-30,-36,12,8,-.6,0,7);x.fill();x.restore()}
function bigX(x,cx,cy,r,a){if(a<=0)return;x.save();x.globalAlpha=a;x.strokeStyle='#E0213F';x.lineWidth=22;x.lineCap='round';const k=r*Math.min(1,a*1.2);x.beginPath();x.moveTo(cx-k,cy-k);x.lineTo(cx+k,cy+k);x.moveTo(cx+k,cy-k);x.lineTo(cx-k,cy+k);x.stroke();x.restore()}
function check(x,cx,cy,r,a){if(a<=0)return;x.save();x.globalAlpha=a;x.strokeStyle='#5AC86A';x.lineWidth=22;x.lineCap='round';x.lineJoin='round';x.beginPath();x.moveTo(cx-r,cy);x.lineTo(cx-r*.3,cy+r*.7);x.lineTo(cx+r,cy-r*.8);x.stroke();x.restore()}
function waves(x,cx,cy,u,a=1){if(a<=0)return;x.save();x.strokeStyle='#F2D27A';x.lineWidth=6;for(let i=0;i<3;i++){const k=(u+i/3)%1;x.globalAlpha=a*(1-k);x.beginPath();x.arc(cx,cy,30+k*150,0,7);x.stroke()}x.restore()}
function skullVial(x,cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#2E5A3A';x.beginPath();x.moveTo(-20,-80);x.lineTo(20,-80);x.lineTo(20,-50);x.quadraticCurveTo(60,-30,60,20);x.quadraticCurveTo(60,70,0,70);x.quadraticCurveTo(-60,70,-60,20);x.quadraticCurveTo(-60,-30,-20,-50);x.closePath();x.fill();x.fillStyle='#6A4426';x.fillRect(-24,-100,48,24);
 x.fillStyle='#F3E6C8';x.beginPath();x.arc(0,10,26,0,7);x.fill();x.fillRect(-14,24,28,20);x.fillStyle='#2E5A3A';x.beginPath();x.arc(-10,8,7,0,7);x.arc(10,8,7,0,7);x.fill();x.restore()}
function crystalPair(x,cx,base,s,u,col='#5E1428'){// duas taças de cristal se tocando pelo bojo; u=0 afastadas, 1 encostadas
 const d=lerp(150,44,u)*s;glassW(x,cx-d,base,s,.42,col);glassW(x,cx+d,base,s,.42,col)}
