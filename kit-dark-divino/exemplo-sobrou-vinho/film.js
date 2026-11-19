// SOBROU VINHO? Dark Divino film with character 10. 40 s.
const C10={skin:'#E6BF98',cloth:'#F4F0E8',hood:'#D9D2C4',outfit:'vest',vest:'#5E1428',bow:'#5E1428',short:'#5A3E2A',part:1,beard:'#5A3E2A',beardT:'short',hand:'#E6BF98',face:'#1c1a2b',leg:'#1E1418',shoe:'#0F0A0C',finger:'#1c1a2b'};
const IMG={};for(const k of ['thumb','logo']){IMG[k]=new Image();IMG[k].src=k+'.jpg'}
const CX0=900,CX1=1230,HY=600,GREST=[760,812],BOT=[1100,815],RREST=[1086,706],LREST=[790,776],CORK_IN=[1100,537];
const cxAt=t=>(t>=11.8&&t<14)?lerp(CX0,CX1,easeIO(seg(t,11.8,13.4))):CX0;
const moving=t=>t>11.8&&t<13.4;
// keyed channel helper: keys [[t,v],...] eased between keys (a held, deliberate move with a clean stop)
const K=(t,k)=>kf(t,k);
// glass pose per sip: [time offset, x, y, angle]. The angle carries the wine to the lip.
const SIP_GOOD=[[0,760,812,0],[.15,760,816,0],[.6,770,722,.05],[.95,758,668,.4],[1.25,738,630,.95],[1.9,736,628,1.0],[2.2,768,676,.3],[2.6,775,740,.03],[3.05,760,812,0],[3.2,760,809,0],[3.35,760,812,0]];
const SIP_BAD=[[0,760,812,0],[.15,760,816,0],[.6,770,722,.05],[.95,758,668,.4],[1.25,738,630,.95],[1.45,738,630,.98],[1.62,768,690,.12],[1.9,742,716,-.12],[2.6,742,716,-.1],[3.1,760,812,0],[3.25,760,809,0],[3.4,760,812,0]];
const SIPS=[[21.6,SIP_GOOD],[28.4,SIP_BAD]];
function glassAt(t){for(const [t0,k] of SIPS){const u=t-t0;if(u>=0&&u<=k[k.length-1][0]){const ch=i=>K(u,k.map(q=>[q[0],q[i]]));return {b:[ch(1),ch(2)],a:ch(3)}}}return {b:GREST.slice(),a:0}}
const tipAmt=t=>clamp(glassAt(t).a/.95);
const rot=(v,a)=>[v[0]*Math.cos(a)-v[1]*Math.sin(a),v[0]*Math.sin(a)+v[1]*Math.cos(a)];
const gripOf=g=>{const r=rot([0,-42],g.a);return [g.b[0]+r[0],g.b[1]+r[1]]};
const level=t=>kf(t,[[0,.36],[18,.44],[22.9,.44],[23.5,.32],[28,.32],[29.65,.32],[29.85,.27]]);
const wineC=t=>t<26?CEL.wine:'#6E3A26';
// left hand: on the glass, except while he walks and is at the fridge
function lHand(t){const cx=cxAt(t),g=gripOf(glassAt(t));if(t<11||t>=18)return {p:g,hold:true};
 if(t<11.45){const u=easeIO(seg(t,11,11.45));return {p:[lerp(g[0],cx-150,u),lerp(g[1],LREST[1]-30*Math.sin(u*Math.PI),u)],hold:false}}return {p:[cx-150,LREST[1]],hold:false}}
// right hand: a world path with a held pose at each key
function rHand(t){const cx=cxAt(t);
 if(t<11){const x=K(t,[[4.6,1000],[5.4,1010],[6.2,995],[8.25,1000],[8.7,1060],[9.0,1100],[9.32,1100],[9.55,1102],[10.25,1086]]),y=K(t,[[4.6,712],[5.4,700],[6.2,708],[8.25,706],[8.7,560],[9.0,500],[9.32,531],[9.55,512],[10.25,706]]);return {p:[x,y],what:t<9.32?'cork':'none',z:K(t,[[8.25,85],[8.9,70],[9.32,60],[10.25,50]])}}
 if(t<11.75){const x=K(t,[[11,1086],[11.45,1100]]),y=K(t,[[11,706],[11.45,690],[11.75,665]]);return {p:[x,y],what:t>=11.45?'bottle':'none',z:50}}
 if(t<14){let g=[cx+200,665];if(t>13.4){const u=easeIO(seg(t,13.4,13.9));g=[cx+200+15*u,665-25*u]}return {p:g,what:'bottle',z:60}}
 return {p:RREST,what:'rest'}}
function bottleAt(t){const r=rHand(t);if(r.what=='bottle')return [r.p[0],r.p[1]+125];return BOT}
function corkAt(t){if(t>=9.32)return CORK_IN;const r=rHand(t);return [r.p[0],r.p[1]+6]}
function hero(t){const cx=cxAt(t),k=tipAmt(t),mv=moving(t);
 const p={x:cx,y:HY-(mv?Math.abs(Math.sin((t-11.8)*8))*7:0),s:1,face:1,noLegs:true,breath:t*2.1,
  look:kf(t,[[3.5,.3],[5,.6],[7.6,.6],[8,.55],[11,.55],[11.5,.8],[14,.8],[18,-.35],[24.9,-.35],[25.2,.1],[28,-.35]])*(1-k*.6),
  lookY:kf(t,[[3.5,.2],[5,.6],[10,.6],[11.5,.2],[18,.3]])-k*.4,
  blink:k>.7?1:blinkAt(t,[4.4,6.9,10.6,12.9,19.5,25.4,27.2]),
  brow:kf(t,[[3.5,.2],[5.2,.7],[6.5,.4],[23.8,.4],[24.1,.9],[25,.5],[29.6,.5],[29.8,-.3]]),
  sad:kf(t,[[3.5,.35],[6.5,.35],[7,0],[29.6,0],[29.8,-.7]]),
  mouth:kf(t,[[3.5,-.1],[6.6,-.1],[7.0,.55],[11,.6],[22.6,.45],[22.8,.1],[23.8,.1],[24.1,.9],[25,.7],[28.9,.3],[29.1,.1],[29.6,.1],[29.75,-.9]]),
  laugh:(t>24.1&&t<24.9)?1:0,wide:kf(t,[[29.6,0],[29.75,1.2],[31.5,.8]]),open:kf(t,[[29.7,0],[29.9,.45],[30.5,.45],[30.8,.1]]),
  tilt:kf(t,[[3.5,0],[5,.08],[6.6,.08],[7,0],[29.7,0],[29.9,-.16],[31.5,-.1]])-k*.1,headX:kf(t,[[29.7,0],[29.95,14],[31.5,8]])-k*6,headY:-k*4,
  hands:{},tuck:{},elbowDown:true};
 const lh=lHand(t),rh=rHand(t),g=glassAt(t),lz=lh.hold?70+clamp((812-g.b[1])/182)*95:20;p.hands.l=[...w2l(p,lh.p),lz];p.hands.r=[...w2l(p,rh.p),rh.z??50];p.arm3d=true;return p}
// glass with a level wine surface: the bowl tilts, the wine stays flat and runs toward the rim
let _ga=0;
function glassT(x,g,lv,col,t){const a=g.a,da=(a-glassAt(t-1/30).a)*30,slosh=clamp(-da*.06,-.18,.18);x.save();x.translate(g.b[0],g.b[1]);x.rotate(a);const bw=42,top=-178;
 const bowl=()=>{x.beginPath();x.moveTo(-6,-72);x.quadraticCurveTo(-bw-4,-92,-bw,-136);x.lineTo(-bw+4,top);x.lineTo(bw-4,top);x.lineTo(bw,-136);x.quadraticCurveTo(bw+4,-92,6,-72);x.closePath()};
 x.fillStyle='rgba(245,232,210,.55)';x.beginPath();x.ellipse(0,0,34,7,0,0,7);x.fill();x.fillRect(-4,-74,8,74);bowl();x.fillStyle='rgba(255,236,210,.14)';x.fill();
 if(lv>0){x.save();bowl();x.clip();const sy=-74-lv*104+Math.abs(Math.sin(a))*(30+lv*70);x.translate(0,sy);x.rotate(-a+slosh);x.fillStyle=col;x.fillRect(-200,0,400,400);x.fillStyle='rgba(255,210,200,.35)';x.fillRect(-200,0,400,4);x.restore()}
 bowl();x.strokeStyle='rgba(255,240,220,.6)';x.lineWidth=3;x.stroke();x.strokeStyle='rgba(255,255,255,.4)';x.lineWidth=4;x.beginPath();x.moveTo(-bw+12,top+20);x.quadraticCurveTo(-bw+6,-120,-bw+18,-98);x.stroke();x.restore()}
function drawCork(x,c,lie=0){x.save();x.translate(c[0],c[1]);x.rotate(lie);x.fillStyle='#C99A5B';x.beginPath();x.roundRect(-10,-14,20,28,5);x.fill();x.fillStyle='#7A2A3A';x.fillRect(-10,8,20,6);x.restore()}
function cap(txt,a,y=975,size=74){if(a<=0)return;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=a;ctx.font=`600 ${size}px Cormorant`;ctx.textAlign='center';ctx.lineJoin='round';ctx.lineWidth=12;ctx.strokeStyle='rgba(20,6,10,.9)';ctx.strokeText(txt,W/2,y);ctx.fillStyle='#F3E6C8';ctx.fillText(txt,W/2,y);ctx.restore()}
function tip_(txt,a){if(a<=0)return;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=a;ctx.fillStyle='rgba(30,6,12,.82)';ctx.beginPath();ctx.roundRect(W/2-560,70,1120,110,24);ctx.fill();ctx.strokeStyle='#D4A24C';ctx.lineWidth=4;ctx.stroke();ctx.restore();const g=L.tip||(L.tip=mk());const x=g.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);goldText(x,txt,W/2,127,56,'Cinzel',900);blit(ctx,g,0,a)}
function dayTag(n,a){if(a<=0)return;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=a;ctx.fillStyle='rgba(30,6,12,.82)';ctx.beginPath();ctx.roundRect(70,64,300,104,22);ctx.fill();ctx.strokeStyle='#D4A24C';ctx.lineWidth=4;ctx.stroke();ctx.restore();const g=L.day||(L.day=mk());const x=g.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);goldText(x,'DIA '+n,220,118,58,'Cinzel',900);blit(ctx,g,0,a)}
const win=(t,a,b,f=.3)=>Math.min(seg(t,a,a+f),1-seg(t,b-f,b));
function photo(img,t,a,b,z0,z1){const u=seg(t,a,b),z=lerp(z0,z1,u);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='#0a0406';ctx.fillRect(0,0,W,H);ctx.translate(W/2,H/2);ctx.scale(z,z);ctx.drawImage(img,-W/2,-H/2,W,H);ctx.restore()}
// fridge interior seen from the front, with the bottle and a desk calendar
function fridgeFront(t,day,dim){const x=layer('w',null);let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#E6EEF7');g.addColorStop(1,'#9DAEC6');x.fillStyle='#2A0B14';x.fillRect(0,0,W,H);x.fillStyle=g;x.fillRect(260,40,1400,1000);x.fillStyle='rgba(255,255,255,.85)';x.fillRect(420,70,1080,14);
 x.fillStyle='#B8C6D8';for(const yy of [420,760])x.fillRect(260,yy,1400,18);x.fillStyle='rgba(255,255,255,.5)';for(const yy of [420,760])x.fillRect(260,yy,1400,4);x.fillStyle='#C7D3E3';for(let i=0;i<4;i++){x.fillRect(1560,140+i*220,100,26);x.fillRect(260,140+i*220,100,26)}x.fillStyle='#3E0C1A';x.fillRect(220,0,40,H);x.fillStyle=CEL.gold;x.fillRect(250,0,10,H);
 wineBottle(x,820,760,1.3,true);x.save();x.translate(1150,760);x.fillStyle='#4A0E1C';x.beginPath();x.moveTo(-170,0);x.lineTo(-150,-300);x.lineTo(150,-300);x.lineTo(170,0);x.closePath();x.fill();x.fillStyle='#F3E6C8';x.fillRect(-140,-290,280,270);x.fillStyle=CEL.gold;for(let i=0;i<4;i++)x.fillRect(-105+i*65,-318,14,40);
 const fl=(t*30)%30;x.restore();goldText(x,'DIA '+day,1150,620,84,'Cinzel',900);
 comp([['w']]);if(dim>0){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle=`rgba(10,14,30,${dim})`;ctx.fillRect(0,0,W,H);ctx.restore()}}
// view from inside the fridge, looking out at the sommelier
function fridgePOV(t){const open=ease(seg(t,14.1,14.6))*(1-ease(seg(t,17.1,17.6))),light=open;
 let x=layer('w',{x:1000,y:430,z:1.35});barWall(x,t);
 const h=layer('h',null);const p={x:960,y:610,s:1.3,face:1,noLegs:true,breath:t*2.1,look:kf(t,[[14,.2],[15.8,.2],[16.2,0]]),lookY:.5,mouth:kf(t,[[14,.4],[16.3,.4],[16.6,.8]]),brow:.4,blink:blinkAt(t,[16.9]),hands:{},elbowDown:true};
 const gp=t<15.6?[lerp(1150,1170,easeIO(seg(t,14.6,15.6))),lerp(700,870,easeIO(seg(t,14.6,15.6)))]:[1170,870],wr=1-ease(seg(t,15.8,16.4));const q=w2l(p,gp);p.hands.r=[lerp(97,q[0],wr),lerp(220,q[1],wr),lerp(0,28,wr)];p.arm3d=true;const hp=actor(h,'somm',C10,p,null,'rgba(190,215,255,1)',1);
 h.setTransform(1,0,0,1,0,0);h.globalCompositeOperation='source-atop';h.fillStyle=`rgba(150,190,255,${.2*light})`;h.fillRect(0,0,W,H);h.globalCompositeOperation='source-over';
 const f=layer('f',null);let g=f.createLinearGradient(0,0,260,0);g.addColorStop(0,'#AEBBD0');g.addColorStop(1,'#E2EAF4');poly(f,[[0,0],[260,140],[260,940],[0,1080]],'#C9D4E4');poly(f,[[W,0],[W-260,140],[W-260,940],[W,1080]],'#B8C4D8');poly(f,[[0,0],[W,0],[W-260,140],[260,140]],'#EEF3FA');poly(f,[[0,1080],[260,940],[W-260,940],[W,1080]],'#D5DEEA');
 f.fillStyle='rgba(255,255,255,.9)';f.fillRect(420,150,1080,10);f.fillStyle='#F5E6A0';poly(f,[[380,1040],[560,1040],[470,980]],'#F2D27A');f.fillStyle='#E9E2D2';f.beginPath();f.roundRect(1480,960,220,90,10);f.fill();f.fillStyle='#7A1F33';f.fillRect(1480,990,220,14);
 comp([]);ctx.save();ctx.beginPath();ctx.rect(260,140,(W-520)*open,800);ctx.clip();blit(ctx,L.w,10);blit(ctx,L.h,0);ctx.restore();
 ctx.save();ctx.fillStyle='#16171E';ctx.fillRect(260+(W-520)*open,140,(W-520)*(1-open)+1,800);ctx.restore();blit(ctx,L.f,0);
 const bb=[gp[0],gp[1]+150];if(t>=14)wineBottle(ctx,bb[0],bb[1],1.2,true);if(wr>.98){const hh=h2w(hp,'r');gripHand(ctx,hh[0],hh[1],0,C10,1.1);contact('hand-bottle',hh,gp)}
 ctx.save();ctx.fillStyle=`rgba(4,6,14,${.88*(1-light)})`;ctx.fillRect(0,0,W,H);ctx.restore()}
FILM={dur:40,cuts:[0,105,240,330,420,540,630,765,840,960,1140,1200],fadeIn:.3,fadeOut:.8,
 cam(s,u,t){return [{x:960,y:540,z:1,b:[0,0,0]},{x:lerp(1040,1080,u),y:560,z:.95,b:[4,0,0]},{x:1070,y:610,z:2.0,b:[14,7,0]},{x:lerp(1060,1280,easeIO(seg(u,.2,.95))),y:560,z:.95,b:[4,0,0]},{x:960,y:540,z:1,b:[0,0,0]},{x:960,y:540,z:1,b:[0,0,0]},{x:lerp(860,880,u),y:550,z:1.5,b:[8,0,0]},{x:960,y:540,z:1,b:[0,0,0]},{x:lerp(870,872,u),y:lerp(550,522,easeIO(u)),z:lerp(1.5,2.2,easeIO(u)),b:[lerp(8,14,u),0,0]},{x:960,y:540,z:1,b:[12,0,0]},{x:960,y:540,z:1,b:[0,0,0]}][s]},
 warm(t){return .35},
 draw(t,cam,s){
  if(s==0){photo(IMG.thumb,t,0,3.5,1.0,1.07);return}
  if(s==10){photo(IMG.logo,t,38,40,1.0,1.05);return}
  if(s==4){fridgePOV(t);return}
  if(s==5||s==7){const d=s==5?1+Math.min(2,Math.floor(seg(t,18.3,20.7)*3)):4+Math.min(3,Math.floor(seg(t,25.7,27.8)*4));fridgeFront(t,d,s==7?.25:0);
   return}
  if(s==9){let x=layer('w',cam);barWall(x,t);comp([['w',12]]);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='rgba(20,6,10,.74)';ctx.fillRect(0,0,W,H);ctx.restore();
   const g=layer('g',null),a1=seg(t,32.2,32.8);goldText(g,'QUANTO DURA ABERTO?',960,150,92);ornament(g,960,240,620);
   const cols=[[480,'ESPUMANTE','1 a 3 dias','#E9D9A0',true,33.0],[960,'BRANCO E ROSÉ','3 a 7 dias','#E8D58A',false,33.6],[1440,'TINTO','3 a 5 dias',CEL.wine,false,34.2]];
   comp([['w',12]]);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='rgba(20,6,10,.74)';ctx.fillRect(0,0,W,H);ctx.restore();blit(ctx,L.g,0,a1);
   for(const [cx,n,d,col,fl,ta] of cols){const c=layer('c'+cx,null);plaque(c,cx,600,400,500);glassW(c,cx,640,1.35,.5,col,fl);goldText(c,n,cx,720,40,'Cinzel',700);blit(ctx,L['c'+cx],0,seg(t,ta,ta+.5));serif(d,cx,790,58,`rgba(243,230,200,${seg(t,ta,ta+.5)})`)}
   serif('Rolha de volta  ·  direto na geladeira',960,960,52,`rgba(212,162,76,${seg(t,35,35.6)})`,'italic');return}
  const g=glassAt(t),bt=bottleAt(t),cx=cxAt(t);
  let x=layer('w',cam);barWall(x,t);
  const h=layer('h',cam),hp=actor(h,'somm',C10,hero(t),cam,'rgba(255,180,94,1)',1);
  const f=layer('f',cam);cellarTable(f);candle(f,560,830,70,t);
  const corked=t>=9.4;wineBottle(f,bt[0],bt[1],1,corked);
  glassT(f,g,level(t),wineC(t),t);
  const lh=lHand(t),hl=h2w(hp,'l');gripHand(f,hl[0],hl[1],lh.hold?g.a:0,C10,.85);contact('hand-l',hl,lh.p);
  const r=rHand(t),hr=h2w(hp,'r');gripHand(f,hr[0],hr[1],0,C10,.85);contact('hand-r',hr,r.p);if(r.what=='cork')drawCork(f,corkAt(t));
  comp([['w',cam.b[0]],['h',cam.b[1]],['f',cam.b[2]]]);
  if(s==1)
  if(s==2){tip_('1. TAMPE COM A ROLHA',win(t,8.2,10.95))}
  if(s==3)tip_('2. LEVE PARA A GELADEIRA',win(t,11.3,13.95));
  if(s==6){dayTag(3,win(t,21,25.45,.2))}
  if(s==8){dayTag(7,win(t,28,31.95,.2))}},
 plants(){return {}}};
say(3.5,'whoosh');say(8.5,'cloth');say(9.35,'corkin');say(11.2,'cloth');say(11.55,'lift');
for(let k=0;k<5;k++)say(11.9+k*.32,'step');say(14.12,'fridgeopen');say(15.6,'bottledown');say(17.15,'fridgeclose');
for(const [t0,k] of SIPS){say(t0+.1,'cloth');say(t0+1.2,'sip');say(t0+k[k.length-3][0],'glassdown')}
for(const tt of [19.1,19.9,25.95,26.45,26.95,27.45])say(tt,'flip');say(29.75,'yuck');say(32,'whoosh');for(const tt of [33,33.6,34.2])say(tt,'line');say(38,'whoosh');
// ---- time warp: stretch each scene to fit the narration ----
(function(){const OLD=[0,3.5,8,11,14,18,21,25.5,28,32,38,40],LEN=[3.5,4.5,4.4,3.4,4.0,4.6,4.5,2.5,4.0,7.0,2.6],NEW=[0];for(const l of LEN)NEW.push(+(NEW[NEW.length-1]+l).toFixed(3));
 const map=(t,A,B)=>{let i=0;while(i<A.length-2&&t>=A[i+1])i++;return B[i]+(t-A[i])*(B[i+1]-B[i])/(A[i+1]-A[i])};
 const warp=t=>map(t,NEW,OLD),unwarp=t=>map(t,OLD,NEW);window.SCENE_START=NEW;
 const cam0=FILM.cam,draw0=FILM.draw;FILM.dur=NEW[NEW.length-1];FILM.cuts=NEW.map(v=>Math.round(v*30));
 FILM.cam=(s,u,t)=>cam0(s,u,warp(t));
 const DISS={5:.5,6:.5,7:.5,8:.6,9:.5},xf=mk();
 FILM.draw=(t,c,s,u)=>{const d=DISS[s],a=d?1-easeIO(seg(t,NEW[s],NEW[s]+d)):0;
  if(a>0){const wt=warp(t);draw0(wt,cam0(s-1,1,wt),s-1,1);const x=xf.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0)}
  draw0(warp(t),c,s,u);if(a>0)blit(ctx,xf,0,a);if(s<9)karaoke(t)};
 for(const e of EVENTS)e.t=unwarp(e.t);})();

// ---- karaoke subtitles: exactly the narration, each word turns gold as it is spoken ----
function karaoke(t){let L=null;for(const l of VOX){if(t>=l.at-.12&&t<=l.at+l.dur+.35)L=l}if(!L)return;
 const a=Math.min(seg(t,L.at-.12,L.at+.08),1-seg(t,L.at+L.dur+.15,L.at+L.dur+.35));if(a<=0)return;
 const size=70;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.font=`600 ${size}px Cormorant`;ctx.textBaseline='alphabetic';
 const sp=ctx.measureText(' ').width,ws=L.words.map(w=>({w:w[0],s:L.at+w[1],e:L.at+w[2],wd:ctx.measureText(w[0]).width}));
 const lines=[[]];let lw=0;for(const w of ws){if(lw+w.wd>1500&&lines[lines.length-1].length){lines.push([]);lw=0}lines[lines.length-1].push(w);lw+=w.wd+sp}
 const y0=1010-(lines.length-1)*(size*1.08);
 lines.forEach((ln,j)=>{const tw=ln.reduce((q,w)=>q+w.wd,0)+sp*(ln.length-1);let x=W/2-tw/2;const y=y0+j*size*1.08;
  ctx.globalAlpha=a*.55;ctx.fillStyle='rgba(14,4,8,1)';ctx.beginPath();ctx.roundRect(x-26,y-size*.86,tw+52,size*1.12,18);ctx.fill();
  for(const w of ln){const on=t>=w.s,cur=on&&t<w.e+.08,k=cur?1+.06*Math.sin(seg(t,w.s,w.e+.08)*Math.PI):1;ctx.save();ctx.globalAlpha=a;ctx.translate(x+w.wd/2,y);ctx.scale(k,k);
   ctx.lineJoin='round';ctx.lineWidth=10;ctx.strokeStyle='rgba(20,6,10,.9)';ctx.strokeText(w.w,-w.wd/2,0);ctx.fillStyle=cur?'#FFE39A':on?'#E2B456':'#F3E6C8';ctx.fillText(w.w,-w.wd/2,0);ctx.restore();x+=w.wd+sp}});
 ctx.restore()}
