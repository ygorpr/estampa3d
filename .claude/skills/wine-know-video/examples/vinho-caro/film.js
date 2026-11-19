// VINHO CARO VALE A PENA? — Wine Know / Dark Divino. Scene times come from the narration (LEN from plan_timing).
const LEN=[4.5,5.6,5.9,4.5,5.0,5.6,4.6,5.1,5.4,7.0,2.7],T=[0];for(const l of LEN)T.push(+(T[T.length-1]+l).toFixed(3));
const wt=(i,w)=>{const l=VOX[i];for(const q of l.words)if(q[0].toLowerCase().includes(w))return l.at+q[1];return l.at};
const HX=960,HY=600,B_CHEAP=[760,815],B_EXP=[1160,815],GREST=[860,812];
const LAB={cheap:'#E9DCC0',mid:'#5E1428',exp:'#141012'};
function bottleL(x,b,s,kind){wineBottle(x,b[0],b[1],s,true,LAB[kind]);if(kind=='exp'){x.save();x.translate(b[0],b[1]);x.scale(s,s);x.fillStyle='#D4A24C';x.fillRect(-13,-272,26,26);x.fillRect(-30,-118,60,6);x.restore()}}
function priceTag(x,cx,cy,txt,a,s=1){if(a<=0)return;x.save();x.globalAlpha=a;x.translate(cx,cy);x.scale(s*(.6+.4*a),s*(.6+.4*a));x.rotate(-.06);x.strokeStyle='#D4A24C';x.lineWidth=3;x.beginPath();x.moveTo(0,-70);x.lineTo(0,-40);x.stroke();
 x.fillStyle='#2A0610';x.beginPath();x.moveTo(-80,-40);x.lineTo(80,-40);x.lineTo(80,40);x.lineTo(-80,40);x.lineTo(-100,0);x.closePath();x.fill();x.strokeStyle='#E2B456';x.lineWidth=5;x.stroke();goldText(x,txt,-6,2,46,'Cinzel',900);x.restore()}
function napkin(x,b,s,letter){x.save();x.translate(b[0],b[1]);x.scale(s,s);x.fillStyle='#4A0E1C';x.beginPath();x.moveTo(-58,-10);x.quadraticCurveTo(-64,-120,-40,-205);x.quadraticCurveTo(0,-232,40,-205);x.quadraticCurveTo(64,-120,58,-10);x.quadraticCurveTo(0,8,-58,-10);x.fill();
 x.strokeStyle='rgba(0,0,0,.25)';x.lineWidth=5;for(const q of [-24,0,24]){x.beginPath();x.moveTo(q,-200);x.quadraticCurveTo(q*1.3,-100,q*1.1,-8);x.stroke()}x.strokeStyle='#D4A24C';x.lineWidth=6;x.beginPath();x.moveTo(-44,-200);x.quadraticCurveTo(0,-214,44,-200);x.stroke();x.restore();goldText(x,letter,b[0],b[1]-110*s,70*s,'Cinzel',900)}
function chip(x,cx,cy,txt,a){if(a<=0)return;x.save();x.globalAlpha=a;const w=txt.length*26+80;x.fillStyle='rgba(30,6,12,.88)';x.beginPath();x.roundRect(cx-w/2,cy-40,w,80,20);x.fill();x.strokeStyle='#D4A24C';x.lineWidth=4;x.stroke();x.restore();x.save();x.globalAlpha=a;goldText(x,txt,cx,cy+2,40,'Cinzel',900);x.restore()}
// glass + sip (scene 5) and hands
const SIP=[[0,860,812,0],[.15,860,816,0],[.6,860,722,.05],[.95,842,668,.4],[1.25,822,630,.95],[1.9,820,628,1.0],[2.2,848,676,.3],[2.6,858,740,.03],[3.05,860,812,0],[3.2,860,809,0],[3.35,860,812,0]];
const SIP_AT=()=>T[5]+.35;
function glassAt(t){const u=t-SIP_AT();if(u>=0&&u<=3.35){const ch=i=>K(u,SIP.map(q=>[q[0],q[i]]));return {b:[ch(1),ch(2)],a:ch(3)}}return {b:GREST.slice(),a:0}}
const tipAmt=t=>clamp(glassAt(t).a/.95);
function pose(t,o){const k=tipAmt(t);return Object.assign({x:HX,y:HY,s:1,face:1,noLegs:true,breath:t*2.1,blink:k>.7?1:blinkAt(t,[2,6.2,9.4,13,22.4,33.6,37.9,44,49]),hands:{},arm3d:true,tilt:-k*.1,headX:-k*6,headY:-k*4,lookY:-k*.4},o)}
function setHands(p,l,r){p.hands.l=[...w2l(p,l[0]),l[1]];p.hands.r=[...w2l(p,r[0]),r[1]]}
function room(cam,t){const x=layer('w',cam);cellarWall(x,t);return x}
function heroLayer(cam,p){const h=layer('h',cam);return actor(h,'somm',C10,p,cam,'rgba(255,180,94,1)',1)}
function gripsOn(f,hp,which){for(const [k,a] of which){const hh=h2w(hp,k);gripHand(f,hh[0],hh[1],a,C10,.85)}}
FILM={dur:T[T.length-1],cuts:T.map(v=>Math.round(v*30)),fadeIn:.3,fadeOut:.8,warm(){return .4},
 cam(s,u,t){return [{x:960,y:540,z:1,b:[0,0,0]},{x:lerp(960,975,u),y:lerp(560,545,u),z:lerp(1.18,1.26,easeIO(u)),b:[6,0,0]},{x:lerp(700,1220,easeIO(u)),y:600,z:1.5,b:[3,0,0]},{x:960,y:540,z:1,b:[10,0,0]},
  {x:960,y:550,z:lerp(1.3,1.38,u),b:[7,0,0]},{x:lerp(930,920,u),y:lerp(545,520,u),z:lerp(1.45,1.65,easeIO(u)),b:[8,0,0]},{x:960,y:540,z:1,b:[10,0,0]},{x:lerp(960,980,u),y:550,z:lerp(1.35,1.45,u),b:[7,0,0]},
  {x:lerp(980,1000,u),y:lerp(560,520,u),z:lerp(1.3,1.7,easeIO(u)),b:[8,0,0]},{x:960,y:540,z:1,b:[12,0,0]},{x:960,y:540,z:1,b:[0,0,0]}][s]},
 draw(t,cam,s){
  if(s==0){photo(IMG.thumb,t,0,T[1],1,1.07);return}
  if(s==10){photo(IMG.logo,t,T[10],T[11],1,1.05);return}
  if(s==1){room(cam,t);const tc=wt(1,'cinquenta'),te=wt(1,'quinhentos');const p=pose(t,{look:kf(t,[[T[1],.1],[tc-.2,.1],[tc,-.55],[te-.2,-.55],[te,.6]]),brow:kf(t,[[te,.2],[te+.2,.9],[T[2],.6]]),mouth:kf(t,[[T[1],.5],[te,.5],[te+.2,.2]]),wide:kf(t,[[te,0],[te+.2,.6]])});
   const lU=kf(t,[[tc-.3,0],[tc,1],[tc+.6,0]]),rU=kf(t,[[te-.3,0],[te,1],[te+.6,0]]);setHands(p,[[790,705-lU*30],50],[[1130,705-rU*30],50]);const hp=heroLayer(cam,p);
   const f=layer('f',cam);cellarTable(f);candle(f,560,830,80,t);candle(f,1380,830,100,t);bottleL(f,[B_CHEAP[0],B_CHEAP[1]-lU*30],1,'cheap');bottleL(f,[B_EXP[0],B_EXP[1]-rU*30],1,'exp');gripsOn(f,hp,[['l',0],['r',0]]);
   priceTag(f,B_CHEAP[0],430,'R$ 50',ease(seg(t,tc,tc+.35)));priceTag(f,B_EXP[0],430,'R$ 500',ease(seg(t,te,te+.35)));comp([['w',cam.b[0]],['h'],['f']]);return}
  if(s==2){const x=room(cam,t);x.fillStyle='rgba(10,3,6,.35)';x.fillRect(-900,-600,W+1800,2000);for(const [bx,sc] of [[520,1.15],[960,1.25],[1400,1.15]])barrelSide(x,bx,900,sc,1);
   const f=layer('f',null);chip(f,W/2-480,330,'BARRICA DE CARVALHO',ease(seg(t,wt(2,'barrica'),wt(2,'barrica')+.35)));chip(f,W/2,450,'COLHEITA À MÃO',ease(seg(t,wt(2,'colheita'),wt(2,'colheita')+.35)));chip(f,W/2+480,330,'ANOS DE ESPERA',ease(seg(t,wt(2,'anos'),wt(2,'anos')+.35)));
   comp([['w',cam.b[0]],['f']]);tip_('1. O QUE VOCÊ PAGA',win(t,T[2]+.2,T[3]-.1));return}
  if(s==3){const x=room(cam,t);comp([['w',10]]);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='rgba(20,6,10,.74)';ctx.fillRect(0,0,W,H);ctx.restore();
   const g=layer('g',null);goldText(g,'PARA ONDE VAI O SEU DINHEIRO?',960,230,62);ornament(g,960,300,560);const bx=360,bw=1200,by=520,ti=wt(3,'imposto'),u=easeIO(seg(t,ti-.5,ti+.4));
   g.fillStyle='#5E1428';g.beginPath();g.roundRect(bx,by,bw,120,20);g.fill();g.strokeStyle='#D4A24C';g.lineWidth=5;g.stroke();const iw=bw*.45*u;g.save();g.beginPath();g.roundRect(bx,by,bw,120,20);g.clip();const gr=g.createLinearGradient(0,by,0,by+120);gr.addColorStop(0,'#F2D27A');gr.addColorStop(1,'#B8832E');g.fillStyle=gr;g.fillRect(bx+bw-iw,by,iw,120);g.restore();
   goldText(g,'VINHO',bx+(bw-iw)/2,by+62,52,'Cinzel',900);if(u>.3){g.save();g.globalAlpha=seg(u,.3,.8);g.fillStyle='#2A0610';g.font="900 46px Cinzel";g.textAlign='center';g.textBaseline='middle';g.fillText('IMPOSTOS',bx+bw-iw/2,by+62);g.restore()}
   priceTag(g,bx+bw+10,by-40,'R$ 500',1,.8);blit(ctx,L.g,0,seg(t,T[3],T[3]+.4));return}
  if(s==4||s==5){room(cam,t);const ta=wt(4,'qual');const g=glassAt(t),sipEnd=SIP_AT()+3.35,sh=s==5?easeIO(seg(t,sipEnd+.1,sipEnd+.6))*(1-easeIO(seg(t,T[6]-.5,T[6]))):0;
   const p=pose(t,{look:s==4?kf(t,[[T[4],0],[ta,-.5],[ta+.7,.5],[ta+1.4,0]]):kf(t,[[sipEnd,-.2],[sipEnd+.4,0]]),brow:s==4?kf(t,[[T[4],.3],[ta,-.15],[ta+1.5,.3]]):kf(t,[[sipEnd,.3],[sipEnd+.3,1]]),sad:s==5?sh*.5:0,mouth:s==4?.3:kf(t,[[SIP_AT()+1.2,.4],[SIP_AT()+1.4,.1],[sipEnd,.1],[sipEnd+.3,-.15]]),tilt:-tipAmt(t)*.1+sh*.12});
   const gw=gripOf(g),lz=70+clamp((812-g.b[1])/182)*95;const L0=[gw,lz],Lsh=[[HX-215,700],80],R0=[[1086,706],50],Rsh=[[HX+215,700],80];
   const lp=[[lerp(L0[0][0],Lsh[0][0],sh),lerp(L0[0][1],Lsh[0][1],sh)],lerp(L0[1],Lsh[1],sh)],rp=[[lerp(R0[0][0],Rsh[0][0],sh),lerp(R0[0][1],Rsh[0][1],sh)],lerp(R0[1],Rsh[1],sh)];setHands(p,lp,rp);const hp=heroLayer(cam,p);
   const f=layer('f',cam);cellarTable(f);candle(f,520,830,80,t);bottleL(f,[1120,815],1,'cheap');napkin(f,[1120,815],1,'A');bottleL(f,[1290,815],1,'exp');napkin(f,[1290,815],1,'B');glassT(f,g,.4,CEL.wine,t);
   const hl=h2w(hp,'l'),hr=h2w(hp,'r');if(sh<.05){gripHand(f,hl[0],hl[1],g.a,C10,.85);gripHand(f,hr[0],hr[1],0,C10,.85)}else{openHand(f,hl[0],hl[1],-.5*sh,C10,.85);openHand(f,hr[0],hr[1],.5*sh,C10,.85)}
   comp([['w',cam.b[0]],['h'],['f']]);if(s==4)tip_('TESTE ÀS CEGAS',win(t,T[4]+.2,T[5]-.1));if(s==5)dayTag('?',0);return}
  if(s==6){const x=room(cam,t);comp([['w',10]]);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='rgba(20,6,10,.7)';ctx.fillRect(0,0,W,H);ctx.restore();const tm=wt(6,'meio'),u=easeIO(seg(t,tm-.2,tm+.5));
   const g=layer('g',null);const sg=g.createLinearGradient(0,150,0,820);sg.addColorStop(0,`rgba(255,200,120,${.45*u})`);sg.addColorStop(1,'rgba(255,200,120,0)');g.fillStyle=sg;g.beginPath();g.moveTo(900,120);g.lineTo(1020,120);g.lineTo(1180,820);g.lineTo(740,820);g.closePath();g.fill();
   g.fillStyle='#5A2E1C';g.fillRect(360,800,1200,26);g.fillStyle='rgba(0,0,0,.4)';g.fillRect(360,826,1200,10);bottleL(g,[600,800],1.2,'cheap');bottleL(g,[960,800],1.2+.08*u,'mid');bottleL(g,[1320,800],1.2,'exp');
   priceTag(g,600,330,'R$ 50',1,.8);priceTag(g,960,330,'R$ 150',1,.8+.15*u);priceTag(g,1320,330,'R$ 500',1,.8);comp([]);blit(ctx,L.w,10);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='rgba(20,6,10,.7)';ctx.fillRect(0,0,W,H);ctx.restore();blit(ctx,L.g,0);tip_('2. O PONTO CERTO',win(t,T[6]+.2,T[7]-.1));return}
  if(s==7||s==8){room(cam,t);const kind=s==7?'mid':'exp',t0=T[s],u=easeIO(seg(t,t0+.2,t0+1.1));const p=pose(t,{look:kf(t,[[t0,.3],[t0+1,.45],[t0+2.5,0]]),brow:s==7?.5:.3,mouth:s==7?kf(t,[[t0,.4],[t0+1.2,.85]]):.6,laugh:s==8&&t>t0+2.2&&t<t0+3.6?1:0,tilt:s==7?Math.sin((t-t0)*3)*.03*u:.04});
   const bpos=[lerp(1120,1135,u),lerp(815,775,u)],grip=[bpos[0],bpos[1]-110];setHands(p,[[800,770],40],[grip,lerp(50,90,u)]);const hp=heroLayer(cam,p);
   const f=layer('f',cam);cellarTable(f);candle(f,560,830,90,t);candle(f,1400,830,110,t);if(s==8)candle(f,1250,830,70,t);glassT(f,{b:[800,812],a:0},.35,CEL.wine,t);bottleL(f,bpos,1,kind);gripsOn(f,hp,[['l',0],['r',0]]);comp([['w',cam.b[0]],['h'],['f']]);return}
  if(s==9){room(cam,t);comp([['w',12]]);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='rgba(20,6,10,.74)';ctx.fillRect(0,0,W,H);ctx.restore();const g=layer('g',null);goldText(g,'VINHO CARO VALE A PENA?',960,150,84);ornament(g,960,240,620);blit(ctx,L.g,0,seg(t,T[9],T[9]+.5));
   const cols=[[480,'DIA A DIA','Intermediário','mid',T[9]+.6],[960,'GRANDES MOMENTOS','O caro','exp',T[9]+1.3],[1440,'PARA GUARDAR','O caro, por anos','exp',T[9]+2.0]];
   for(const [cx,n,d,kind,ta] of cols){const c=layer('c'+cx,null);plaque(c,cx,600,400,500);bottleL(c,[cx,690],.95,kind);goldText(c,n,cx,750,34,'Cinzel',700);blit(ctx,L['c'+cx],0,seg(t,ta,ta+.5));serif(d,cx,808,48,`rgba(243,230,200,${seg(t,ta,ta+.5)})`)}
   serif('Pague pelo vinho, não pela fama do rótulo',960,960,50,`rgba(212,162,76,${seg(t,T[9]+3,T[9]+3.6)})`,'italic');return}
 },plants(){return {}}};
(function(){const DISS={2:.5,3:.5,4:.5,6:.5,7:.5,8:.4,9:.5},xf=mk(),draw0=FILM.draw,cam0=FILM.cam;
 FILM.draw=(t,c,s,u)=>{const d=DISS[s],a=d?1-easeIO(seg(t,T[s],T[s]+d)):0;if(a>0){draw0(t,cam0(s-1,1,t),s-1,1);const x=xf.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0)}
  draw0(t,c,s,u);if(a>0)blit(ctx,xf,0,a);if(s<9)karaoke(t)}})();
say(T[1]-.1,'whoosh');for(const i of [2,3,4,6,7,9])say(T[i],'whoosh');
say(wt(1,'cinquenta'),'tag');say(wt(1,'quinhentos'),'tag');for(const w of ['barrica','colheita','anos'])say(wt(2,w),'tag');say(wt(3,'imposto'),'coins');
say(T[4]+.3,'cloth');say(SIP_AT()+.1,'cloth');say(SIP_AT()+1.2,'sip');say(SIP_AT()+3.05,'glassdown');say(SIP_AT()+3.45,'cloth');say(wt(6,'meio'),'line');say(T[7]+.2,'lift');say(T[8]+.2,'lift');for(const k of [.6,1.3,2])say(T[9]+k,'line');
const C10={skin:'#E6BF98',cloth:'#F4F0E8',hood:'#D9D2C4',outfit:'vest',vest:'#5E1428',bow:'#5E1428',short:'#5A3E2A',part:1,beard:'#5A3E2A',beardT:'short',hand:'#E6BF98',face:'#1c1a2b',leg:'#1E1418',shoe:'#0F0A0C',finger:'#1c1a2b'};
const IMG={};for(const k of ['thumb','logo']){IMG[k]=new Image();IMG[k].src=k+'.jpg'}
const K=(t,k)=>kf(t,k);
const rot=(v,a)=>[v[0]*Math.cos(a)-v[1]*Math.sin(a),v[0]*Math.sin(a)+v[1]*Math.cos(a)];
const gripOf=g=>{const r=rot([0,-42],g.a);return [g.b[0]+r[0],g.b[1]+r[1]]};
function glassT(x,g,lv,col,t){const a=g.a,da=(a-glassAt(t-1/30).a)*30,slosh=clamp(-da*.06,-.18,.18);x.save();x.translate(g.b[0],g.b[1]);x.rotate(a);const bw=42,top=-178;
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
 const lines=[[]];let lw=0;for(const w of ws){if(lw+w.wd>1500&&lines[lines.length-1].length){lines.push([]);lw=0}lines[lines.length-1].push(w);lw+=w.wd+sp}
 const y0=1010-(lines.length-1)*(size*1.08);
 lines.forEach((ln,j)=>{const tw=ln.reduce((q,w)=>q+w.wd,0)+sp*(ln.length-1);let x=W/2-tw/2;const y=y0+j*size*1.08;
  ctx.globalAlpha=a*.55;ctx.fillStyle='rgba(14,4,8,1)';ctx.beginPath();ctx.roundRect(x-26,y-size*.86,tw+52,size*1.12,18);ctx.fill();
  for(const w of ln){const on=t>=w.s,cur=on&&t<w.e+.08,k=cur?1+.06*Math.sin(seg(t,w.s,w.e+.08)*Math.PI):1;ctx.save();ctx.globalAlpha=a;ctx.translate(x+w.wd/2,y);ctx.scale(k,k);
   ctx.lineJoin='round';ctx.lineWidth=10;ctx.strokeStyle='rgba(20,6,10,.9)';ctx.strokeText(w.w,-w.wd/2,0);ctx.fillStyle=cur?'#FFE39A':on?'#E2B456':'#F3E6C8';ctx.fillText(w.w,-w.wd/2,0);ctx.restore();x+=w.wd+sp}});
 ctx.restore()}
