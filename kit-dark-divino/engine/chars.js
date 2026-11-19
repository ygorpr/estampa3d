// ===== STICKMAN ENGINE: characters. One rig, fixed proportions, so identity never drifts. =====
const INK='#1c1a2b';
const HERO={skin:'#F8E9CC',cloth:'#FF6B5E',hood:'#E4493F',hand:'#F8E9CC',face:INK,leg:'#2C2A49',shoe:'#17141F',finger:INK};
const FRIEND={skin:'#17141F',cloth:'#F6B73C',hood:'#D9962A',hand:'#17141F',face:'#FFFFFF',leg:'#3A2F55',shoe:'#17141F',finger:'#5b5468'};
const WOMAN={skin:'#E9C6A0',cloth:'#2DB2AE',hood:'#187E86',hand:'#E9C6A0',face:INK,leg:'#2C2A49',shoe:'#17141F',finger:INK,hair:'#3A2230'};
const STRANGER={skin:'#C9C3CF',cloth:'#2A2536',hood:'#191622',hand:'#C9C3CF',face:'#17141F',leg:'#17141F',shoe:'#0f0d15',finger:'#17141F',coat:true};
const GUEST_A={skin:'#17141F',cloth:'#7A56A0',hood:'#5C3F80',hand:'#17141F',face:'#FFFFFF',leg:'#2C2A49',shoe:'#17141F',finger:'#5b5468'};
const GUEST_B={skin:'#E9C7A2',cloth:'#3A5C9A',hood:'#223A6C',hand:'#E9C7A2',face:INK,leg:'#2C2A49',shoe:'#17141F',finger:INK};
// rig units: full figure height is about 800 at s=1
const UA=102,FA=98,HR=96,TH=235,THIGH=130,SHIN=130,STANDY=TH+250,TW=215;
/* pose p: x,y,s  face(1 right,-1 left)  breath  look lookY blink brow sad mouth mouthW open wide laugh tilt headX headY
   hands{l,r}(rig units) showH{l,r} tuck{l,r} walk feet{l,r} noLegs noFace bend(hip lean radians)
   accessories: hat glasses glassY glassR  coat flutter: flut time
   Idle arms end with no hand, on purpose. Show a hand only when it is doing something. */
function drawPerson(x,ch,p){x.save();x.translate(p.x,p.y);x.scale(p.s,p.s);const br=Math.sin(p.breath||0)*3,face=p.face||1;
 const ft=p.feet||{l:[-48,STANDY],r:[48,STANDY]};
 if(!p.noLegs)for(const k of (face<0?['r','l']:['l','r'])){const hip=[k=='l'?-46:46,TH-14],f=ft[k],r=ik(hip,f,THIGH,SHIN,face<0?1:-1);limb(x,hip,r.e,62,50,ch.leg);limb(x,r.e,r.h,50,38,ch.leg);
  x.fillStyle=ch.shoe;x.beginPath();x.roundRect(r.h[0]-(face<0?58:20),r.h[1]+6,78,28,13);x.fill()}
 if(p.bend){x.translate(0,TH-14);x.rotate(p.bend);x.translate(0,-(TH-14))}
 if(!ch.outfit){x.fillStyle=ch.hood;x.beginPath();x.ellipse(-8,-30+br,98,70,0,0,7);x.fill();}else{x.fillStyle=ch.skin;x.fillRect(-26,-46+br,52,50)}
 if(ch.coat){const fl=p.flut||0,fa=Math.sin((p.time||0)*5.5),fb=Math.sin((p.time||0)*4.1+1),hem=TH+150;
  x.fillStyle=ch.cloth;x.beginPath();x.moveTo(-TW/2,70);x.quadraticCurveTo(-TW/2,-5,-TW/2+60,-8+br);x.lineTo(TW/2-60,-8+br);x.quadraticCurveTo(TW/2,-5,TW/2,70);
  x.quadraticCurveTo(TW/2+8,TH,TW/2+34+fl*(20+fa*20),hem+fb*fl*10);x.quadraticCurveTo(50,hem+24+fa*fl*12,0,hem+8);x.quadraticCurveTo(-60,hem+24-fb*fl*12,-TW/2-34-fl*(46+fb*20),hem-fa*fl*12);x.quadraticCurveTo(-TW/2-8,TH,-TW/2,70);x.closePath();x.fill();
  x.strokeStyle=ch.hood;x.lineWidth=7;x.lineCap='round';x.beginPath();x.moveTo(0,10);x.lineTo(0,hem);x.stroke();x.lineWidth=16;x.beginPath();x.moveTo(-TW/2+6,TH-20);x.lineTo(TW/2-6,TH-20);x.stroke();
  x.fillStyle=ch.hood;x.beginPath();x.moveTo(-70,-10);x.lineTo(0,70);x.lineTo(70,-10);x.lineTo(30,-16);x.lineTo(0,18);x.lineTo(-30,-16);x.closePath();x.fill()}
 else{x.fillStyle=ch.cloth;x.beginPath();x.moveTo(-TW/2,TH);x.lineTo(-TW/2,60);x.quadraticCurveTo(-TW/2,-5,-TW/2+60,-8+br);x.lineTo(TW/2-60,-8+br);x.quadraticCurveTo(TW/2,-5,TW/2,60);x.lineTo(TW/2,TH);x.quadraticCurveTo(0,TH+14,-TW/2,TH);x.closePath();x.fill();
  if(!ch.outfit){x.strokeStyle=ch.hood;x.lineWidth=14;x.lineCap='round';x.beginPath();x.arc(0,-8+br,52,.15*Math.PI,.85*Math.PI);x.stroke();x.lineWidth=6;x.globalAlpha=.55;x.beginPath();x.moveTo(-60,TH-90);x.lineTo(60,TH-90);x.stroke();x.globalAlpha=1}else outfit(x,ch,br)}
 const sh={l:[-TW/2+34,34+br],r:[TW/2-34,34+br]},hd=p.hands||{};p._h={};p._over={};p._e={};
 for(const k of ['l','r']){const s=sh[k],tgt=hd[k]||[s[0]+(k=='l'?-24:24),s[1]+UA+FA-14],side=k=='l'?1:-1;
  // walking: elbows trail the direction of travel. A tucked arm folds toward the body to hold something close.
  let r,fe=1,fh=1;if(p.arm3d){r=ik3(s,tgt,UA,FA,k=='l'?-1:1);fe=1+r.ez*.0018;fh=1+r.hz*.0024}else{const dir=(p.tuck&&p.tuck[k])?-side:(p.walk?(face>0?1:-1):side);r=ik(s,tgt,UA,FA,dir);if(p.elbowDown){const r2=ik(s,tgt,UA,FA,-dir);if(r2.e[1]>r.e[1]+6)r=r2}}
  limb(x,s,r.e,66,54*fe,ch.hood);limb(x,r.e,r.h,54*fe,44*fh,ch.hood);limb(x,s,r.e,58,48*fe,ch.cloth);limb(x,r.e,r.h,46*fe,38*fh,ch.cloth);
  if(p.showH&&p.showH[k]){const a=Math.atan2(r.h[1]-r.e[1],r.h[0]-r.e[0]);x.save();x.translate(r.h[0],r.h[1]);x.rotate(a);x.fillStyle=ch.hand;x.beginPath();x.roundRect(-4,-12,32,24,12);x.fill();x.restore()}
  p._h[k]=r.h;p._over[k]=r.over;p._e[k]=r.e}
 x.save();x.translate(p.headX||0,-HR-20+br+(p.headY||0));x.rotate(p.tilt||0);
 if(ch.hair){x.fillStyle=ch.hair;x.beginPath();x.moveTo(-HR-16,44);x.quadraticCurveTo(-HR-24,-HR-22,0,-HR-16);x.quadraticCurveTo(HR+24,-HR-22,HR+16,44);x.quadraticCurveTo(HR+8,66,HR-18,62);x.lineTo(-HR+18,62);x.quadraticCurveTo(-HR-8,66,-HR-16,44);x.fill()}
 x.fillStyle=ch.skin;x.beginPath();x.arc(0,0,HR,0,7);x.fill();headExtras(x,ch,p);
 if(ch.hair){x.fillStyle=ch.hair;x.beginPath();x.moveTo(-HR-4,-6);x.quadraticCurveTo(-HR+4,-HR-10,10,-HR-6);x.quadraticCurveTo(HR+4,-HR+4,HR+4,-6);x.quadraticCurveTo(HR-16,-52,44,-58);x.quadraticCurveTo(-30,-44,-HR-4,-6);x.fill()}
 if(!p.noFace){const lk=p.look||0,ly=p.lookY||0,fx=lk*46,fy=ly*18+6;x.strokeStyle=ch.face;x.fillStyle=ch.face;x.lineCap='round';const bl=p.blink||0;
  for(let i=0;i<2;i++){const e=(i?30:-30)+fx*(i?1.1:.9);x.lineWidth=8;
   if(p.laugh){x.beginPath();x.arc(e,fy+6,13,Math.PI*1.1,Math.PI*1.9);x.stroke()}
   else if(bl>.5){x.beginPath();x.moveTo(e-12,fy);x.lineTo(e+12,fy);x.stroke()}
   else{x.beginPath();x.ellipse(e,fy,7,13*(1-bl*1.6)+2+(p.wide||0)*4,0,0,7);x.fill()}
   // brows: positive sad lifts the inner end. Negative sad reads angry.
   const by=fy-30-(p.brow||0)*7,sl=(p.sad||0)*8*(i?-1:1);x.lineWidth=6;x.beginPath();x.moveTo(e-14,by+sl);x.lineTo(e+14,by-sl);x.stroke()}
  const m=p.mouth||0,my=fy+44,mx=fx*.95,mw=p.mouthW||26;x.lineWidth=7;x.beginPath();
  if(p.open>.02){x.ellipse(mx,my+6,14+p.open*7,5+p.open*17,0,0,7);x.fill()}else{x.moveTo(mx-mw,my-m*5);x.quadraticCurveTo(mx,my+m*22,mx+mw,my-m*5);x.stroke()}
  if(p.glasses){x.save();x.translate(0,p.glassY||0);x.rotate(p.glassR||0);x.fillStyle='#0d0b14';for(const s of [-1,1]){x.beginPath();x.roundRect(fx+s*32-26,fy-15,52,31,12);x.fill()}x.strokeStyle='#0d0b14';x.lineWidth=5;x.beginPath();x.moveTo(fx-8,fy-6);x.lineTo(fx+8,fy-6);x.moveTo(fx-58,fy-6);x.lineTo(-92,fy-14);x.moveTo(fx+58,fy-6);x.lineTo(92,fy-14);x.stroke();x.strokeStyle='rgba(255,255,255,.28)';x.lineWidth=3;x.beginPath();x.moveTo(fx-48,fy+7);x.lineTo(fx-34,fy-7);x.stroke();x.restore()}}
 if(p.hat){x.fillStyle='#14111B';x.beginPath();x.ellipse(0,-68,150,20,0,0,7);x.fill();x.beginPath();x.moveTo(-82,-70);x.quadraticCurveTo(-78,-165,-30,-168);x.quadraticCurveTo(0,-154,30,-168);x.quadraticCurveTo(78,-165,82,-70);x.closePath();x.fill();x.fillStyle='#8E2F2C';x.fillRect(-81,-94,162,18);x.strokeStyle='rgba(255,190,150,.32)';x.lineWidth=3;x.beginPath();x.moveTo(-140,-62);x.quadraticCurveTo(0,-48,140,-62);x.stroke()}
 x.restore();x.restore()}
// Rim light: a tinted, offset copy of the silhouette under the figure. Legs are skipped because rim on dark trousers reads as an outline.
function personRim(dst,ch,p,rimCol='rgba(255,196,150,1)',dx=4,dy=-1){const qr=Object.assign({},p,{noLegs:true}),t2=L.tmp2,tc=t2.getContext('2d');tc.setTransform(1,0,0,1,0,0);tc.globalCompositeOperation='source-over';tc.clearRect(0,0,W,H);tc.setTransform(dst.getTransform());drawPerson(tc,ch,qr);tc.setTransform(1,0,0,1,0,0);tc.globalCompositeOperation='source-in';tc.fillStyle=rimCol;tc.fillRect(0,0,W,H);tc.globalCompositeOperation='source-over';dst.save();dst.setTransform(1,0,0,1,0,0);dst.drawImage(t2,dx,dy);dst.restore();drawPerson(dst,ch,p);return p}
// actor(x,id,ch,p,cam): rim + draw + report for audit. Use this for every character.
function actor(x,id,ch,p,cam,rim='rgba(255,196,150,1)',side=1){personRim(x,ch,p,rim,side*(3+1.4*(cam?cam.z:1)),-1);report(id,p);return p}
// rig-space hand point to world, and back
const h2w=(p,k)=>[p.x+p._h[k][0]*p.s,p.y+p._h[k][1]*p.s];
const w2l=(p,w)=>[(w[0]-p.x)/p.s,(w[1]-p.y)/p.s];

function poly(x,pts,col){x.fillStyle=col;x.beginPath();x.moveTo(pts[0][0],pts[0][1]);for(const q of pts.slice(1))x.lineTo(q[0],q[1]);x.closePath();x.fill()}
function outfit(x,ch,br){const y=-8+br,o=ch.outfit,B=TH;x.lineCap='round';
 const collar=(col)=>{poly(x,[[-44,y-4],[-6,y+10],[-30,y+44]],col);poly(x,[[44,y-4],[6,y+10],[30,y+44]],col)};
 const tie=()=>{if(ch.tie){poly(x,[[-12,y+10],[12,y+10],[7,y+26],[-7,y+26]],ch.tie);poly(x,[[-7,y+26],[7,y+26],[14,y+150],[0,y+168],[-14,y+150]],ch.tie)}if(ch.bow){poly(x,[[0,y+18],[-34,y+4],[-34,y+34]],ch.bow);poly(x,[[0,y+18],[34,y+4],[34,y+34]],ch.bow);x.fillStyle=ch.bow;x.fillRect(-8,y+10,16,16)}};
 if(o=='blazer'){poly(x,[[-50,y],[50,y],[6,y+175],[-6,y+175]],ch.shirt);if(ch.turtle){x.fillStyle=ch.shirt;x.beginPath();x.roundRect(-38,y-16,76,34,12);x.fill()}else collar(ch.collar||'#F4F0E8');tie();
  x.strokeStyle=ch.hood;x.lineWidth=16;x.beginPath();x.moveTo(-52,y);x.lineTo(-30,y+60);x.lineTo(-6,y+176);x.moveTo(52,y);x.lineTo(30,y+60);x.lineTo(6,y+176);x.stroke();if(ch.pocket){poly(x,[[54,y+80],[86,y+80],[82,y+96],[58,y+96]],ch.pocket)}x.fillStyle=ch.hood;x.fillRect(-6,y+190,12,10);x.fillRect(-6,y+215,12,10)}
 else if(o=='vest'){collar(ch.collar||ch.cloth);tie();for(const sd of [-1,1])poly(x,[[sd*48,y+2],[sd*(TW/2-8),y+40],[sd*(TW/2),B],[0,B],[0,y+170]],ch.vest);x.fillStyle=ch.btn||'#D4A24C';for(let i=0;i<3;i++)x.fillRect(-5,y+178+i*20,10,10);
  if(ch.apron){x.fillStyle=ch.apron;x.fillRect(-TW/2+6,B-70,TW-12,90);x.fillStyle='rgba(0,0,0,.2)';x.fillRect(-TW/2+6,B-70,TW-12,8)}}
 else if(o=='apron'){collar(ch.collar||'#F4F0E8');tie();x.strokeStyle=ch.apron;x.lineWidth=12;x.beginPath();x.moveTo(-62,y+10);x.lineTo(-56,y+96);x.moveTo(62,y+10);x.lineTo(56,y+96);x.stroke();x.fillStyle=ch.apron;x.beginPath();x.roundRect(-78,y+92,156,B-y-60,10);x.fill();x.fillStyle=ch.btn||'#D4A24C';x.fillRect(-30,y+130,60,6)}
 else if(o=='turtle'){x.fillStyle=ch.hood;x.beginPath();x.roundRect(-44,y-22,88,42,14);x.fill();x.strokeStyle='rgba(0,0,0,.18)';x.lineWidth=3;for(let i=-3;i<=3;i++){x.beginPath();x.moveTo(i*11,y-16);x.lineTo(i*11,y+14);x.stroke()}}
 else if(o=='polo'){poly(x,[[-30,y],[30,y],[0,y+46]],ch.skin);collar(ch.hood);x.fillStyle=ch.hood;x.fillRect(-6,y+30,12,60);x.fillStyle=ch.btn||'#F4F0E8';x.fillRect(-4,y+50,8,8);x.fillRect(-4,y+72,8,8)}
 else if(o=='shirt'){poly(x,[[-34,y],[34,y],[0,y+62]],ch.skin);collar(ch.collar||ch.hood);x.strokeStyle=ch.hood;x.lineWidth=4;x.beginPath();x.moveTo(0,y+62);x.lineTo(0,B);x.stroke();x.fillStyle=ch.hood;for(let i=0;i<4;i++)x.fillRect(-4,y+90+i*36,8,8);if(ch.sus){x.strokeStyle=ch.sus;x.lineWidth=12;x.beginPath();x.moveTo(-58,y+8);x.lineTo(-48,B);x.moveTo(58,y+8);x.lineTo(48,B);x.stroke()}}
 else if(o=='jacket'){poly(x,[[-46,y],[46,y],[40,B],[-40,B]],ch.shirt);x.fillStyle=ch.skin;x.beginPath();x.ellipse(0,y+2,34,16,0,0,Math.PI);x.fill();poly(x,[[-48,y-6],[-86,y+8],[-46,y+80]],ch.hood);poly(x,[[48,y-6],[86,y+8],[46,y+80]],ch.hood);x.strokeStyle=ch.hood;x.lineWidth=8;x.beginPath();x.moveTo(-44,y+70);x.lineTo(-42,B);x.moveTo(44,y+70);x.lineTo(42,B);x.stroke();x.strokeStyle=ch.zip||'#B8A07A';x.lineWidth=3;x.beginPath();x.moveTo(-36,y+90);x.lineTo(-36,B);x.stroke()}}
function headExtras(x,ch,p){x.save();x.beginPath();x.arc(0,0,HR,0,7);x.clip();const lk=(p.look||0)*44;
 if(ch.beard){const t=ch.beardT||'full';x.fillStyle=ch.beard;x.globalAlpha=t=='stubble'?.42:1;
  if(t=='full'||t=='stubble'||t=='short'){const d=t=='short'?10:0;x.beginPath();x.moveTo(-HR,8+d);x.quadraticCurveTo(-HR+18,HR+30,0,HR+24);x.quadraticCurveTo(HR-18,HR+30,HR,8+d);x.lineTo(HR,40+d);x.quadraticCurveTo(52,24+d,0,36+d);x.quadraticCurveTo(-52,24+d,-HR,40+d);x.closePath();x.fill();x.globalAlpha=1;x.fillStyle=ch.skin;x.beginPath();x.ellipse(lk,58,30,15,0,0,7);x.fill();x.fillStyle=ch.beard;x.globalAlpha=t=='stubble'?.42:1;x.beginPath();x.roundRect(lk-34,36,68,12,6);x.fill()}
  else if(t=='goatee'){x.beginPath();x.roundRect(lk-32,36,64,11,6);x.fill();x.beginPath();x.moveTo(lk-26,62);x.quadraticCurveTo(lk,100,lk+26,62);x.quadraticCurveTo(lk,76,lk-26,62);x.fill();x.beginPath();x.roundRect(lk-30,40,10,26,5);x.roundRect(lk+20,40,10,26,5);x.fill()}
  else if(t=='mustache'){x.beginPath();x.moveTo(lk-38,48);x.quadraticCurveTo(lk,26,lk+38,48);x.quadraticCurveTo(lk,40,lk-38,48);x.fill()}
  x.globalAlpha=1}
 if(ch.short){x.fillStyle=ch.short;x.beginPath();x.moveTo(-HR-5,-6);x.lineTo(-HR-5,-HR-10);x.lineTo(HR+5,-HR-10);x.lineTo(HR+5,-6);x.quadraticCurveTo(HR-8,-46,58,-52);x.quadraticCurveTo(ch.part?10:0,-38,-30,-56);x.quadraticCurveTo(-HR+6,-50,-HR-5,-6);x.fill();
  if(ch.temples){x.fillStyle=ch.temples;x.fillRect(-HR-2,-50,16,46);x.fillRect(HR-14,-50,16,46)}}
 if(ch.bald){x.fillStyle='rgba(255,255,255,.18)';x.beginPath();x.ellipse(-30,-62,26,10,-.4,0,7);x.fill();if(ch.sides){x.fillStyle=ch.sides;x.fillRect(-HR-2,-34,14,40);x.fillRect(HR-12,-34,14,40)}}
 x.restore();
 if(ch.short){x.fillStyle=ch.short;x.beginPath();x.ellipse(ch.part?6:0,-HR+30,HR*.74,(ch.vol||26)+8,0,0,7);x.fill()}}

// 3D two-bone arm, projected to the screen. The hand may come toward the camera (z>0); the elbow hangs down and a little out,
// so a hand raised to the mouth reads as a forearm coming forward, not a joint bent sideways.
function ik3(s,t,a,b,side){let d=[t[0]-s[0],t[1]-s[1],t[2]||0];let L=Math.hypot(d[0],d[1],d[2]);const reach=a+b-.5;let over=0;
 if(L>reach){over=L-reach;d=d.map(v=>v*reach/L);L=reach}L=Math.max(L,Math.abs(a-b)+1);const u=d.map(v=>v/L);
 const x=(a*a-b*b+L*L)/(2*L),r=Math.sqrt(Math.max(0,a*a-x*x));let P=[side*.32,1,-.35];const dp=P[0]*u[0]+P[1]*u[1]+P[2]*u[2];
 P=P.map((v,i)=>v-dp*u[i]);const pl=Math.hypot(P[0],P[1],P[2])||1;P=P.map(v=>v/pl);
 return {e:[s[0]+u[0]*x+P[0]*r,s[1]+u[1]*x+P[1]*r],h:[s[0]+d[0],s[1]+d[1]],ez:u[2]*x+P[2]*r,hz:d[2],over}}
