// ===== Wine Know – Dark Divino shared helpers. Load after the engine and vo_words.js, before film.js. =====
// Character C10 (Sommelier), images, keyframes, glass with level wine, gold plaques, karaoke subtitles, dissolves, thumbnail parts.
const LAB={cheap:'#E9DCC0',mid:'#5E1428',exp:'#141012'};
// word time: absolute time when narration line i says the first word containing w (lowercase)
const wt=(i,w)=>{const l=VOX[i];for(const q of l.words)if(q[0].toLowerCase().includes(w))return l.at+q[1];return l.at};
// scene starts from scene lengths (paste LEN from plan_timing.py)
function sceneStarts(LEN){const T=[0];for(const l of LEN)T.push(+(T[T.length-1]+l).toFixed(3));return T}
// sip keyframes: [offset s, glass base x, y, angle]. Angle ~1 rad brings the rim to the lips; base x/y keep the rim at the mouth.
function sipKeys(x0,y0){return [[0,x0,y0,0],[.15,x0,y0+4,0],[.6,x0,y0-90,.05],[.95,x0-18,y0-144,.4],[1.25,x0-38,y0-182,.95],[1.9,x0-40,y0-184,1.0],[2.2,x0-12,y0-136,.3],[2.6,x0-2,y0-72,.03],[3.05,x0,y0,0],[3.2,x0,y0-3,0],[3.35,x0,y0,0]]}
function keyed(t,t0,keys){const u=t-t0;if(u<0||u>keys[keys.length-1][0])return null;const ch=i=>kf(u,keys.map(q=>[q[0],q[i]]));return {b:[ch(1),ch(2)],a:ch(3)}}
// standard pose for the Sommelier; arm3d keeps elbows down with depth
function sommPose(t,o){return Object.assign({x:960,y:600,s:1,face:1,noLegs:true,breath:t*2.1,hands:{},arm3d:true},o)}
function sommActor(cam,p){const h=layer('h',cam);return actor(h,'somm',C10,p,cam,'rgba(255,180,94,1)',1)}
// dissolves between places + karaoke subtitles until scene `noCaptionFrom`
function installFinish(T,DISS,noCaptionFrom){const xf=mk(),draw0=FILM.draw,cam0=FILM.cam;
 FILM.draw=(t,c,s,u)=>{const d=DISS[s],a=d?1-easeIO(seg(t,T[s],T[s]+d)):0;if(a>0){draw0(t,cam0(s-1,1,t),s-1,1);const x=xf.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0)}
  draw0(t,c,s,u);if(a>0)blit(ctx,xf,0,a);if(s<noCaptionFrom)karaoke(t)}}
const C10={skin:'#E6BF98',cloth:'#F4F0E8',hood:'#D9D2C4',outfit:'vest',vest:'#5E1428',bow:'#5E1428',short:'#5A3E2A',part:1,beard:'#5A3E2A',beardT:'short',hand:'#E6BF98',face:'#1c1a2b',leg:'#1E1418',shoe:'#0F0A0C',finger:'#1c1a2b'};
const IMG={};for(const k of ['thumb','logo']){IMG[k]=new Image();IMG[k].src=k+'.jpg'}
const K=(t,k)=>kf(t,k);
const rot=(v,a)=>[v[0]*Math.cos(a)-v[1]*Math.sin(a),v[0]*Math.sin(a)+v[1]*Math.cos(a)];
const gripOf=g=>{const r=rot([0,-42],g.a);return [g.b[0]+r[0],g.b[1]+r[1]]};
function glassT(x,g,lv,col,t,gPrev){const a=g.a,da=(a-(gPrev?gPrev.a:(typeof glassAt=='function'?glassAt(t-1/30).a:a)))*30,slosh=clamp(-da*.06,-.18,.18);x.save();x.translate(g.b[0],g.b[1]);x.rotate(a);const bw=42,top=-178;
 const bowl=()=>{x.beginPath();x.moveTo(-6,-72);x.quadraticCurveTo(-bw-4,-92,-bw,-136);x.lineTo(-bw+4,top);x.lineTo(bw-4,top);x.lineTo(bw,-136);x.quadraticCurveTo(bw+4,-92,6,-72);x.closePath()};
 x.fillStyle='rgba(245,232,210,.55)';x.beginPath();x.ellipse(0,0,34,7,0,0,7);x.fill();x.fillRect(-4,-74,8,74);bowl();x.fillStyle='rgba(255,236,210,.14)';x.fill();
 if(lv>0){x.save();bowl();x.clip();const sy=-74-lv*104+Math.abs(Math.sin(a))*(30+lv*70);x.translate(0,sy);x.rotate(-a+slosh);x.fillStyle=col;x.fillRect(-200,0,400,400);x.fillStyle='rgba(255,210,200,.35)';x.fillRect(-200,0,400,4);x.restore()}
 bowl();x.strokeStyle='rgba(255,240,220,.6)';x.lineWidth=3;x.stroke();x.strokeStyle='rgba(255,255,255,.4)';x.lineWidth=4;x.beginPath();x.moveTo(-bw+12,top+20);x.quadraticCurveTo(-bw+6,-120,-bw+18,-98);x.stroke();x.restore()}
function tip_(txt,a){if(a<=0)return;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=a;ctx.fillStyle='rgba(30,6,12,.82)';ctx.beginPath();ctx.roundRect(W/2-560,70,1120,110,24);ctx.fill();ctx.strokeStyle='#D4A24C';ctx.lineWidth=4;ctx.stroke();ctx.restore();const g=L.tip||(L.tip=mk());const x=g.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);goldText(x,txt,W/2,127,56,'Cinzel',900);blit(ctx,g,0,a)}
function dayTag(n,a){if(a<=0)return;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=a;ctx.fillStyle='rgba(30,6,12,.82)';ctx.beginPath();ctx.roundRect(70,64,300,104,22);ctx.fill();ctx.strokeStyle='#D4A24C';ctx.lineWidth=4;ctx.stroke();ctx.restore();const g=L.day||(L.day=mk());const x=g.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);goldText(x,'DIA '+n,220,118,58,'Cinzel',900);blit(ctx,g,0,a)}
const win=(t,a,b,f=.3)=>Math.min(seg(t,a,a+f),1-seg(t,b-f,b));
function photo(img,t,a,b,z0,z1){const u=seg(t,a,b),z=lerp(z0,z1,u);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='#0a0406';ctx.fillRect(0,0,W,H);ctx.translate(W/2,H/2);ctx.scale(z,z);ctx.drawImage(img,-W/2,-H/2,W,H);ctx.restore()}
// ---- karaoke subtitles: exactly the narration, each word turns gold as it is spoken ----
function karaoke(t){let L=null;for(const l of VOX){if(t>=l.at-.12&&t<=l.at+l.dur+.35)L=l}if(!L)return;
 const a=Math.min(seg(t,L.at-.12,L.at+.08),1-seg(t,L.at+L.dur+.15,L.at+L.dur+.35));if(a<=0)return;
 const size=70;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.font=`600 ${size}px Cormorant`;ctx.textBaseline='alphabetic';
 const sp=ctx.measureText(' ').width,ws=L.words.map(w=>({w:w[0],s:L.at+w[1],e:L.at+w[2],wd:ctx.measureText(w[0]).width}));
 // pages of at most 2 lines: show only the page being spoken
 const pg=[[]];let pw=0;for(const w of ws){if(pw+w.wd>2900&&pg[pg.length-1].length){pg.push([]);pw=0}pg[pg.length-1].push(w);pw+=w.wd+sp}
 let cur=pg[0];for(const q of pg)if(t>=q[0].s-.05)cur=q;ws.length=0;ws.push(...cur);
 const lines=[[]];let lw=0;for(const w of ws){if(lw+w.wd>1500&&lines[lines.length-1].length){lines.push([]);lw=0}lines[lines.length-1].push(w);lw+=w.wd+sp}
 const y0=1010-(lines.length-1)*(size*1.08);
 lines.forEach((ln,j)=>{const tw=ln.reduce((q,w)=>q+w.wd,0)+sp*(ln.length-1);let x=W/2-tw/2;const y=y0+j*size*1.08;
  ctx.globalAlpha=a*.55;ctx.fillStyle='rgba(14,4,8,1)';ctx.beginPath();ctx.roundRect(x-26,y-size*.86,tw+52,size*1.12,18);ctx.fill();
  for(const w of ln){const on=t>=w.s,cur=on&&t<w.e+.08,k=cur?1+.06*Math.sin(seg(t,w.s,w.e+.08)*Math.PI):1;ctx.save();ctx.globalAlpha=a;ctx.translate(x+w.wd/2,y);ctx.scale(k,k);
   ctx.lineJoin='round';ctx.lineWidth=10;ctx.strokeStyle='rgba(20,6,10,.9)';ctx.strokeText(w.w,-w.wd/2,0);ctx.fillStyle=cur?'#FFE39A':on?'#E2B456':'#F3E6C8';ctx.fillText(w.w,-w.wd/2,0);ctx.restore();x+=w.wd+sp}});
 ctx.restore()}

function bottleL(x,b,s,kind){wineBottle(x,b[0],b[1],s,true,LAB[kind]);if(kind=='exp'){x.save();x.translate(b[0],b[1]);x.scale(s,s);x.fillStyle='#D4A24C';x.fillRect(-13,-272,26,26);x.fillRect(-30,-118,60,6);x.restore()}}
function priceTag(x,cx,cy,txt,a,s=1){if(a<=0)return;x.save();x.globalAlpha=a;x.translate(cx,cy);x.scale(s*(.6+.4*a),s*(.6+.4*a));x.rotate(-.06);x.strokeStyle='#D4A24C';x.lineWidth=3;x.beginPath();x.moveTo(0,-70);x.lineTo(0,-40);x.stroke();
 x.fillStyle='#2A0610';x.beginPath();x.moveTo(-80,-40);x.lineTo(80,-40);x.lineTo(80,40);x.lineTo(-80,40);x.lineTo(-100,0);x.closePath();x.fill();x.strokeStyle='#E2B456';x.lineWidth=5;x.stroke();goldText(x,txt,-6,2,46,'Cinzel',900);x.restore()}
function napkin(x,b,s,letter){x.save();x.translate(b[0],b[1]);x.scale(s,s);x.fillStyle='#4A0E1C';x.beginPath();x.moveTo(-58,-10);x.quadraticCurveTo(-64,-120,-40,-205);x.quadraticCurveTo(0,-232,40,-205);x.quadraticCurveTo(64,-120,58,-10);x.quadraticCurveTo(0,8,-58,-10);x.fill();
 x.strokeStyle='rgba(0,0,0,.25)';x.lineWidth=5;for(const q of [-24,0,24]){x.beginPath();x.moveTo(q,-200);x.quadraticCurveTo(q*1.3,-100,q*1.1,-8);x.stroke()}x.strokeStyle='#D4A24C';x.lineWidth=6;x.beginPath();x.moveTo(-44,-200);x.quadraticCurveTo(0,-214,44,-200);x.stroke();x.restore();goldText(x,letter,b[0],b[1]-110*s,70*s,'Cinzel',900)}
function chip(x,cx,cy,txt,a){if(a<=0)return;x.save();x.globalAlpha=a;const w=txt.length*26+80;x.fillStyle='rgba(30,6,12,.88)';x.beginPath();x.roundRect(cx-w/2,cy-40,w,80,20);x.fill();x.strokeStyle='#D4A24C';x.lineWidth=4;x.stroke();x.restore();x.save();x.globalAlpha=a;goldText(x,txt,cx,cy+2,40,'Cinzel',900);x.restore()}
function setHands(p,l,r){p.hands.l=[...w2l(p,l[0]),l[1]];p.hands.r=[...w2l(p,r[0]),r[1]]}
function gripsOn(f,hp,which){for(const [k,a] of which){const hh=h2w(hp,k);gripHand(f,hh[0],hh[1],a,C10,.85)}}
// ---- thumbnail parts ----
function grapes(x,cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#D4A24C';x.beginPath();x.moveTo(0,-62);x.quadraticCurveTo(40,-90,70,-60);x.quadraticCurveTo(40,-70,0,-50);x.fill();x.beginPath();x.moveTo(0,-62);x.quadraticCurveTo(-40,-90,-70,-60);x.quadraticCurveTo(-40,-70,0,-50);x.fill();
 const P=[[-24,-36],[0,-38],[24,-36],[-36,-12],[-12,-12],[12,-12],[36,-12],[-24,12],[0,12],[24,12],[-12,36],[12,36],[0,58]];for(const [gx,gy] of P){const g=x.createRadialGradient(gx-5,gy-6,2,gx,gy,15);g.addColorStop(0,'#C24A6E');g.addColorStop(1,'#4A0E22');x.fillStyle=g;x.beginPath();x.arc(gx,gy,13,0,7);x.fill()}x.restore()}
function bigPlaque(x,cx,cy,w,h){x.save();let g=x.createLinearGradient(0,cy-h/2,0,cy+h/2);g.addColorStop(0,'#5A1020');g.addColorStop(1,'#2A0610');x.fillStyle=g;x.beginPath();x.roundRect(cx-w/2,cy-h/2,w,h,46);x.fill();
 const gg=x.createLinearGradient(0,cy-h/2,0,cy+h/2);gg.addColorStop(0,'#FFE7A0');gg.addColorStop(.5,'#C8913A');gg.addColorStop(1,'#F2D27A');x.strokeStyle=gg;x.lineWidth=16;x.stroke();x.lineWidth=4;x.beginPath();x.roundRect(cx-w/2+26,cy-h/2+26,w-52,h-52,30);x.stroke();
 for(const [sx,sy] of [[-1,-1],[1,-1],[-1,1],[1,1]]){x.fillStyle='#E2B456';x.beginPath();x.moveTo(cx+sx*(w/2-8),cy+sy*(h/2-60));x.quadraticCurveTo(cx+sx*(w/2+30),cy+sy*(h/2+30),cx+sx*(w/2-60),cy+sy*(h/2-8));x.quadraticCurveTo(cx+sx*(w/2-20),cy+sy*(h/2-20),cx+sx*(w/2-8),cy+sy*(h/2-60));x.fill()}
 x.fillStyle='#B0122E';x.beginPath();x.moveTo(cx,cy+h/2-18);x.lineTo(cx+26,cy+h/2+10);x.lineTo(cx,cy+h/2+38);x.lineTo(cx-26,cy+h/2+10);x.closePath();x.fill();x.strokeStyle='#F2D27A';x.lineWidth=5;x.stroke();x.restore()}

