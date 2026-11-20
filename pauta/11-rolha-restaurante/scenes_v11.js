// ---------- cenas do vídeo 11 "Cheirar a rolha é erro?" — Sommelier no RESTAURANTE, na mesa; cena i = fala i ----------
function watermark(){if(!LOGO.complete)return;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.075;ctx.filter='blur(.6px)';ctx.drawImage(LOGO,960-230,720-221,460,442);ctx.restore()}
const ap=(t,i,w,d=.35)=>ease(seg(t,wt(i,w)-.1,wt(i,w)-.1+d));
function card(t,s,set,title,dim=.72){veil(null,t,set,dim);const g=layer('g',null);goldText(g,title,960,165,Math.min(62,Math.floor(1500/title.length)));ornament(g,960,232,560);return g}
const done=(g,t,s)=>blit(ctx,L.g,0,seg(t,T[s],T[s]+.4));
const fade=(g,a,fn)=>{if(a<=0)return;g.save();g.globalAlpha=a;fn();g.restore()};
const C3=(t,s,set,title,fn,dim)=>{const g=card(t,s,set,title,dim);fn(g);done(g,t,s)};
// ---------- personagens extras (mesmo motor e cuidado do Sommelier) ----------
// garçom: colete e gravata-borboleta pretos, camisa branca, avental branco longo, cabelo preto penteado, bigode fino
const WAITER={skin:'#C99A72',cloth:'#F6F3EC',hood:'#DCD6CA',outfit:'vest',vest:'#17131A',bow:'#17131A',apron:'#F6F3EC',short:'#1A1412',part:1,hand:'#C99A72',face:'#1c1a2b',leg:'#111',shoe:'#000',finger:'#1c1a2b'};
// falsário do séc. XIX: sobretudo escuro, chapéu, barba por fazer
const FORGER={skin:'#D8B08A',cloth:'#2B2430',hood:'#1A151E',coat:true,beard:'#3A3036',beardT:'stubble',hand:'#D8B08A',face:'#1c1a2b',leg:'#17141F',shoe:'#0f0d15',finger:'#1c1a2b'};
function mustache(x,p,col){const hx=p.x+(p.headX||0)*p.s,hy=p.y+(-HR-20+(p.headY||0))*p.s,fx=(p.look||0)*46*.95;x.save();x.translate(hx,hy);x.rotate(p.tilt||0);x.scale(p.s,p.s);x.fillStyle=col;x.beginPath();x.moveTo(fx-30,42);x.quadraticCurveTo(fx-14,30,fx,36);x.quadraticCurveTo(fx+14,30,fx+30,42);x.quadraticCurveTo(fx+12,40,fx,44);x.quadraticCurveTo(fx-12,40,fx-30,42);x.fill();x.restore()}
function towel(x,p,k){const h=h2w(p,k),e=[p.x+p._e[k][0]*p.s,p.y+p._e[k][1]*p.s];x.save();x.fillStyle='#FBF8F1';x.beginPath();x.moveTo(e[0]-28,e[1]-6);x.lineTo(e[0]+26,e[1]-4);x.lineTo(e[0]+20,e[1]+96);x.lineTo(e[0]-24,e[1]+88);x.closePath();x.fill();x.strokeStyle='rgba(0,0,0,.12)';x.lineWidth=2;x.beginPath();x.moveTo(e[0]-4,e[1]);x.lineTo(e[0]-6,e[1]+90);x.stroke();x.restore()}
// ---------- objetos ----------
function bottleAt(x,hx,hy,s,rot,style){x.save();x.translate(hx,hy);x.rotate(rot);bottleS(x,[0,250*s],s,style||'red');x.restore()}
function plate(x,cx,cy,s=1){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='rgba(0,0,0,.12)';x.beginPath();x.ellipse(4,6,128,28,0,0,7);x.fill();x.fillStyle='#FBF8F1';x.beginPath();x.ellipse(0,0,124,26,0,0,7);x.fill();x.strokeStyle=GOLD;x.lineWidth=3;x.beginPath();x.ellipse(0,0,112,22,0,0,7);x.stroke();x.fillStyle='#EDE6D6';x.beginPath();x.ellipse(0,1,74,14,0,0,7);x.fill();x.restore()}
function cutlery(x,cx,cy){x.save();x.fillStyle='#C9C4BA';x.fillRect(cx,cy-4,120,7);x.fillRect(cx,cy+16,120,7);x.restore()}
// rolha deitada (vista de lado), ponta do vinho à direita. o: brand, year, wet, seep, dry, crumbs, stink
function corkH(x,cx,cy,L,D,o={}){x.save();x.translate(cx,cy);const dry=o.dry||0;
 x.fillStyle='rgba(0,0,0,.18)';x.beginPath();x.ellipse(6,D*.55,L*.52,D*.12,0,0,7);x.fill();
 x.fillStyle=dry>.5?'#DCC08A':'#C99A5B';x.beginPath();x.roundRect(-L/2,-D/2,L,D,D*.18);x.fill();
 x.fillStyle='rgba(255,230,180,.25)';x.fillRect(-L/2+D*.2,-D/2+D*.1,L-D*.4,D*.12);
 x.fillStyle='rgba(120,80,40,.55)';for(let i=0;i<22;i++){const px=((i*97)%100)/100-.5,py=((i*61)%100)/100-.5,r=(2+(i*7)%5)*D/110;x.beginPath();x.arc(px*L*.9,py*D*.8,r,0,7);x.fill()}
 if(o.wet){const w=L*.16*o.wet;const g=x.createLinearGradient(L/2-w,0,L/2,0);g.addColorStop(0,'rgba(94,20,40,0)');g.addColorStop(.35,'rgba(94,20,40,.75)');g.addColorStop(1,'rgba(70,10,28,.95)');x.fillStyle=g;x.beginPath();x.roundRect(L/2-w,-D/2,w,D,[0,D*.18,D*.18,0]);x.fill()}
 if(o.seep){const u=o.seep;x.strokeStyle='rgba(80,12,30,.85)';x.lineCap='round';for(const [yy,lw,k] of [[-.42,D*.09,1],[.4,D*.08,.85],[-.05,D*.05,.6]]){x.lineWidth=lw;x.beginPath();x.moveTo(L/2,yy*D);const end=L/2-L*u*k;for(let q=0;q<=12;q++){const xx=lerp(L/2,end,q/12);x.lineTo(xx,yy*D+Math.sin(q*1.7)*D*.04)}x.stroke()}
  x.fillStyle='rgba(70,10,28,.9)';x.beginPath();x.roundRect(L/2-L*.12,-D/2,L*.12,D,[0,D*.18,D*.18,0]);x.fill();if(u>.95){x.fillStyle='rgba(80,12,30,.85)';x.beginPath();x.roundRect(-L/2,-D/2,L*.06,D,[D*.18,0,0,D*.18]);x.fill()}}
 if(dry){x.strokeStyle=`rgba(90,60,30,${.8*dry})`;x.lineWidth=Math.max(2,D*.03);for(const [a,b,c,d] of [[-.35,-.5,-.25,-.1],[-.25,-.1,-.3,.2],[.05,.5,.12,.15],[.12,.15,.05,-.1],[.3,-.5,.36,-.2]]){x.beginPath();x.moveTo(a*L,b*D);x.lineTo(c*L,d*D);x.stroke()}
  x.fillStyle='#140509';for(const [a,b,r] of [[-.5,-.35,.12],[.5,.3,.14],[.2,-.5,.1]]){x.beginPath();x.arc(a*L,b*D,r*D*dry,0,7);x.fill()}}
 if(o.brand){x.font=`900 ${Math.round(D*.26)}px Cinzel`;x.textAlign='center';x.textBaseline='middle';x.fillStyle=`rgba(90,40,16,${o.brandA??1})`;x.fillText(o.brand,-L*.04,o.year?-D*.15:0);
  if(o.year){x.font=`900 ${Math.round(D*.24)}px Cinzel`;x.fillStyle=`rgba(90,40,16,${o.yearA??1})`;x.fillText(o.year,-L*.04,D*.2)}}
 if(o.crumbs){for(let i=0;i<9;i++){const u=(o.crumbs+i*.13)%1,px=-L*.4+i*L*.09,py=D*.55+u*D*1.6;x.globalAlpha=1-u;x.fillStyle='#C99A5B';x.beginPath();x.arc(px,py,D*.05+i%3*D*.02,0,7);x.fill()}x.globalAlpha=1}
 x.restore()}
// rolha de espumante: u=0 cilindro reto (entrando no gargalo), u=1 cogumelo
function champCork(x,cx,base,s,u){x.save();x.translate(cx,base);x.scale(s,s);const hw=lerp(40,52,u),sw=lerp(40,28,u),bw=lerp(40,34,u);
 x.fillStyle='#C99A5B';x.beginPath();x.moveTo(-bw,0);x.lineTo(-sw,-90);x.quadraticCurveTo(-sw,-112,-hw,-118);x.quadraticCurveTo(-hw-6,-170,0,-176);x.quadraticCurveTo(hw+6,-170,hw,-118);x.quadraticCurveTo(sw,-112,sw,-90);x.lineTo(bw,0);x.quadraticCurveTo(0,8,-bw,0);x.fill();
 x.fillStyle='#E6D2B0';for(let i=0;i<3;i++){x.fillRect(-bw+2-i*.3,-14-i*14,(bw-1)*2,8)}
 x.fillStyle='rgba(120,80,40,.5)';for(const [dx,dy] of [[-14,-150],[12,-135],[-8,-60],[10,-40],[0,-100]]){x.beginPath();x.arc(dx,dy,4,0,7);x.fill()}
 x.restore()}
// jarra de barro: origem na alça (onde a mão segura), corpo e bico à esquerda; base em y+65
function pitcher(x,hx=0,hy=0){x.save();x.translate(hx,hy);x.fillStyle='#8A5A3A';x.beginPath();x.ellipse(-70,10,56,58,0,0,7);x.fill();x.beginPath();x.moveTo(-100,-30);x.lineTo(-96,-62);x.lineTo(-138,-62);x.lineTo(-120,-40);x.lineTo(-44,-62);x.lineTo(-40,-30);x.closePath();x.fill();x.fillStyle='#6E4428';x.fillRect(-112,62,84,8);x.strokeStyle='#6E4428';x.lineWidth=12;x.beginPath();x.moveTo(-26,-34);x.quadraticCurveTo(14,-30,4,6);x.quadraticCurveTo(0,30,-20,34);x.stroke();x.fillStyle='rgba(255,220,170,.18)';x.beginPath();x.ellipse(-90,-6,12,30,.2,0,7);x.fill();x.restore()}
function screwBottle(x,cx,base,s){bottleS(x,[cx,base],s,'white');x.save();x.translate(cx,base);x.scale(s,s);const g=x.createLinearGradient(-16,0,16,0);g.addColorStop(0,'#8E9196');g.addColorStop(.45,'#E8EAED');g.addColorStop(1,'#7A7D82');x.fillStyle=g;x.beginPath();x.roundRect(-15,-292,30,64,5);x.fill();x.strokeStyle='rgba(60,60,70,.55)';x.lineWidth=2;for(let i=0;i<5;i++){x.beginPath();x.moveTo(-15,-282+i*6);x.lineTo(15,-282+i*6);x.stroke()}x.beginPath();x.moveTo(-15,-250);x.lineTo(15,-250);x.stroke();x.restore()}
function cardboard(x,cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#9A7448';x.beginPath();x.moveTo(-90,-40);x.lineTo(90,-40);x.lineTo(90,70);x.lineTo(-90,70);x.closePath();x.fill();x.fillStyle='#B48A58';x.beginPath();x.moveTo(-90,-40);x.lineTo(-40,-80);x.lineTo(130,-80);x.lineTo(90,-40);x.closePath();x.fill();x.fillStyle='#7A5A36';x.beginPath();x.moveTo(90,-40);x.lineTo(130,-80);x.lineTo(130,30);x.lineTo(90,70);x.closePath();x.fill();
 x.fillStyle='rgba(60,40,24,.45)';for(const [a,b,r] of [[-40,20,26],[30,0,18],[0,50,14]]){x.beginPath();x.ellipse(a,b,r,r*.7,0,0,7);x.fill()}x.fillStyle='rgba(120,160,190,.7)';for(const k of [0,1,2]){x.beginPath();x.ellipse(-60+k*55,90+k*6,7,10,0,0,7);x.fill()}x.restore()}
function stampS(g,cx,cy,txt,a,k){if(a<=0)return;g.save();g.translate(cx,cy);g.scale(k,k);stamp(g,0,0,txt,a);g.restore()}
// ---------- Sommelier na mesa do restaurante ----------
// o: hands(t)->{l:[[x,y],z],r:[[x,y],z],lo,ro}, held(f,hl,hr,t) desenha o que está na mão (antes da mão), face(t), props(f,t), bottle:false, glass:{b,lv}, sx
function mesaFront(f,t,o){restFront(f);plate(f,600,846,1);cutlery(f,430,846);candle(f,1460,836,46,t);if(o.cork!==false)corkH(f,1300,858,70,24,{brand:'',wet:1})}
function mesa(t,cam,s,o={}){const x=layer('w',cam);restaurant(x,t);const t0=T[s];
 const hd=o.hands?o.hands(t):{l:[[840,780],70],r:[[1086,706],50]};
 const p=sommPose(t,Object.assign({x:o.sx||960,look:-.12,brow:.4,mouth:.45,blink:blinkAt(t,[t0+1.3,t0+3.9,t0+7.1,t0+10.2])},o.face?o.face(t):{}));
 const sp=speak(t);if(!o.noTalk){p.open=Math.max(p.open||0,sp);if(sp>.1)p.mouth=Math.min(p.mouth,.35)}
 p.tilt=(p.tilt||0)+Math.sin(t*1.3)*.015;setHands(p,hd.l,hd.r);
 const h=layer('h',cam);if(o.behind)o.behind(h,t);const hp=actor(h,'somm',C10,p,cam,'rgba(255,180,94,1)',1);if(o.extra)o.extra(h,t,cam);
 const f=layer('f',cam);mesaFront(f,t,o);const hl=h2w(hp,'l'),hr=h2w(hp,'r');
 const gl=o.glass||{b:[840,822],lv:.35};
 if(o.bottle!==false&&!o.rHold){gripHand(f,hr[0],hr[1],0,C10,.85);bottleS(f,[1100,815],1,'red')}
 if(o.glassOn!==false)glassW(f,gl.b[0],gl.b[1],1,gl.lv,CEL.wine);
 if(o.props)o.props(f,t,hl,hr);
 if(o.held)o.held(f,hl,hr,t);
 if(!o.lFree)(hd.lo?openHand:gripHand)(f,hl[0],hl[1],hd.lo?-.4:0,C10,.85);
 if(o.rHold)(hd.ro?openHand:gripHand)(f,hr[0],hr[1],hd.ro?.4:0,C10,.85);
 if(o.front)o.front(f,t);
 comp([['w',cam.b[0]],['h'],['f']]);
 const c=layer('chipL',null);for(const [txt,cx,cy,ta] of (o.chips||[]))chip(c,cx,cy,txt,ease(seg(t,ta,ta+.35)));if(o.over)o.over(c,t);blit(ctx,L.chipL,0)}
const REST={l:[[840,780],70]};
const corkUp=(t,a,b)=>{const u=easeIO(seg(t,a,a+.6))*(1-easeIO(seg(t,b,b+.6)));return [[lerp(1086,1130,u),lerp(706,560,u)],lerp(50,100,u)]};
// garçom em pé ao lado da mesa (à esquerda); o Sommelier sentado à direita
function duo(t,cam,s,o){const t0=T[s];
 const wp=Object.assign({x:o.wx||560,y:520,s:1.04,face:1,noLegs:true,breath:t*2+1,hands:{},arm3d:true,look:.45,lookY:.1,brow:.3,mouth:.55,blink:blinkAt(t,[t0+.9,t0+3.3,t0+6.1])},o.wface?o.wface(t):{});
 const wh=o.whands(t);setHands(wp,wh.l,wh.r);
 mesa(t,cam,s,Object.assign({sx:1280,cork:false,bottle:o.sBottle??false,
  extra:(h,tt,cam_)=>{actor(h,'waiter',WAITER,wp,cam_,'rgba(255,200,150,1)',1);mustache(h,wp,'#1A1412');if(o.wTowel)towel(h,wp,'l')},
  hands:o.shands,face:o.sface,glass:o.glass,
  props:(f,tt)=>{const wl=h2w(wp,'l'),wr=h2w(wp,'r');o.wheld(f,wl,wr,tt);if(o.wGripL!==false)gripHand(f,wl[0],wl[1],0,WAITER,.85);if(o.wGripR!==false)(o.wOpenR?openHand:gripHand)(f,wr[0],wr[1],0,WAITER,.85)}},o.m||{}))}
// ---------- cenas ----------
const SC=[null,
 // 1 — senta aqui na mesa comigo
 (t,c,s)=>mesa(t,c,s,{hands:t=>{const a=wt(1,'senta')-.2,u=easeIO(seg(t,a,a+.5))*(1-easeIO(seg(t,T[2]-.9,T[2]-.4)));return {l:REST.l,r:[[lerp(1086,1190,u),lerp(706,690,u)],lerp(50,90,u)],ro:u>.5}},
  rHold:true,bottle:false,props:(f,t,hl,hr)=>{bottleS(f,[1100,815],1,'red')},face:t=>({mouth:.7,brow:.6,look:-.05}),
  chips:[['ORIGEM',420,250,wt(1,'veio')],['MITO OU VERDADE?',1500,250,wt(1,'mito')]]}),
 // 2 — anos 1800, rótulo de papel estraga na adega úmida
 (t,c,s)=>C3(t,s,cellarWall,'ANOS 1800',g=>{const m=easeIO(seg(t,wt(2,'estragava')-.3,wt(2,'sumia')+.4));
  oldBottle(g,760,860,1.5);g.save();g.translate(760,690);g.fillStyle=`rgb(${lerp(240,150,m)},${lerp(228,140,m)},${lerp(196,110,m)})`;g.beginPath();g.roundRect(-70,-60,140,120,6);g.fill();
  g.font='900 26px Cinzel';g.textAlign='center';g.fillStyle=`rgba(90,20,30,${1-m})`;g.fillText('CHÂTEAU',0,-18);g.font='900 30px Cinzel';g.fillText('1870',0,22);
  g.fillStyle='rgba(70,90,60,.75)';for(let i=0;i<14;i++){const r=(4+(i*5)%9)*m*1.4;g.beginPath();g.arc(((i*37)%120)-60,((i*53)%100)-50,r,0,7);g.fill()}g.restore();
  g.fillStyle='rgba(160,190,200,.5)';for(let i=0;i<10;i++){const u=((t*.4+i*.17)%1);g.beginPath();g.ellipse(420+i*120,300+u*520,4,9,0,0,7);g.fill()}
  chip(g,1360,420,'ADEGA ÚMIDA',ap(t,2,'úmidas'));chip(g,1360,560,'RÓTULO DE PAPEL',ap(t,2,'rótulo'));chip(g,1360,700,'O NOME SUMIA',ap(t,2,'sumia'))},.55),
 // 3 — o nome gravado na rolha = identidade
 (t,c,s)=>C3(t,s,restaurant,'O NOME NA ROLHA',g=>{const a=ap(t,3,'gravar',.6),b=ap(t,3,'ano',.6);corkH(g,960,470,620,210,{wet:1,brand:'CHÂTEAU',year:'1870',brandA:a,yearA:b});
  if(a>0&&a<1){g.save();g.globalAlpha=1-a;g.fillStyle='#FFB45E';g.beginPath();g.arc(960+(a-.5)*300,440,26,0,7);g.fill();g.restore()}
  fade(g,ap(t,3,'identidade',.5),()=>{plaque(g,960,740,760,150);goldText(g,'A IDENTIDADE DA GARRAFA',960,740,44,'Cinzel',900)})},.6),
 // 4 — falsário reenche e retampa (mão esquerda: jarra e depois a rolha; direita apoiada na mesa)
 (t,c,s)=>{veil(null,t,tavern,.5);const g=layer('g',null);const t0=T[s],tE=wt(4,'enchesse')-.3,tT=wt(4,'tampasse')-.3;
  const pour=easeIO(seg(t,tE,tE+.6)),cap=easeIO(seg(t,tT,tT+.6)),press=cap*(1-.0)+Math.max(0,Math.sin((t-tT-.6)*7))*seg(t,tT+.6,tT+1.4)*(1-seg(t,tT+1.4,tT+1.6));
  const p={x:990,y:560,s:1,face:1,noLegs:true,breath:t*2,hands:{},arm3d:true,hat:true,look:kf(t,[[t0,-.5],[t0+1.6,-.5],[t0+2,.55],[t0+3.3,.55],[t0+3.7,-.4]]),lookY:.25,brow:-.3,sad:-.4,mouth:-.1,blink:blinkAt(t,[t0+1,t0+4.4,t0+8.2])};
  const rest=[1000,750],pourP=[860,450],capP=[760,492+press*6];
  const lh=cap>0?[lerp(pourP[0],capP[0],cap),lerp(pourP[1],capP[1],cap)]:[lerp(rest[0],pourP[0],pour),lerp(rest[1],pourP[1],pour)];
  setHands(p,[lh,cap>0?60:lerp(40,20,pour)],[[1085,745],30]);const h=layer('h',null);actor(h,'forger',FORGER,p,null,'rgba(255,180,110,1)',1);
  const f=layer('f',null);f.fillStyle='#3A1C12';f.fillRect(0,815,W,300);f.fillStyle='#5A2E1C';f.fillRect(0,815,W,14);candle(f,1300,840,50,t);
  const hl=h2w(p,'l'),hr=h2w(p,'r');gripHand(f,hr[0],hr[1],0,FORGER,.85);bottleS(f,[760,825],1,'red');
  const pa=1-seg(cap,0,.5);if(cap>0)fade(f,1-pa,()=>pitcher(f,560,750));if(pa>0){f.save();f.globalAlpha=pa;if(pour>.02){f.save();f.translate(hl[0],hl[1]);f.rotate(-1*pour*(1-cap));pitcher(f);f.restore()}else pitcher(f,hl[0],hl[1]);f.restore()}if(cap<=0){
   if(pour>.97){f.strokeStyle='rgba(120,20,40,.9)';f.lineWidth=8;f.beginPath();const sp=[hl[0]-119,hl[1]+84];f.moveTo(sp[0],sp[1]);f.quadraticCurveTo(sp[0]-4,sp[1]+20,761,552);f.stroke()}}
  else{fade(f,seg(cap,.3,.7),()=>bigCork(f,hl[0],hl[1]+44,.5))}
  gripHand(f,hl[0],hl[1],0,FORGER,.85);
  comp([['w',10]]);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='rgba(20,6,10,.45)';ctx.fillRect(0,0,W,H);ctx.restore();blit(ctx,L.h,0);blit(ctx,L.f,0);
  goldText(g,'A FALSIFICAÇÃO',960,165,62);ornament(g,960,232,560);chip(g,1520,380,'TROCAVAM O VINHO',ap(t,4,'trocasse'));chip(g,1520,520,'ENCHIAM DE NOVO',ap(t,4,'enchesse'));chip(g,1520,660,'OUTRA ROLHA',ap(t,4,'tampasse'));done(g,t,s)},
 // 5 — garçom mostra a rolha marcada
 (t,c,s)=>{const ta=T[5]+.5;duo(t,c,s,{whands:t=>{const u=easeIO(seg(t,ta,ta+.7));return {l:[[440,600],60],r:[[lerp(700,800,u),lerp(720,650,u)],lerp(50,55,u)]}},
  wheld:(f,wl,wr,t)=>{bottleAt(f,wl[0],wl[1],1,0,'red');corkH(f,wr[0]+10,wr[1]-46,150,54,{brand:'CHÂTEAU',wet:1})},wface:t=>({look:.5,mouth:.6,brow:.5}),
  shands:t=>({l:[[1160,780],70],r:[[1450,778],40]}),glass:{b:[1160,822],lv:.0},sface:t=>({look:-.5,lookY:.15,brow:t>wt(5,'provava')?.8:.4,mouth:.6}),
  m:{bottle:false,rHold:true,props0:null,front:(f,t)=>{}},
  sBottle:false}) ;const c2=layer('chipL',null);chip(c2,960,140,'ROLHA MARCADA = GARRAFA ORIGINAL',ap(t,5,'provava'));chip(c2,960,260,'A EXPLICAÇÃO MAIS ACEITA',ap(t,5,'aceita'));blit(ctx,L.chipL,0)},
 // 6 — hoje: termômetro de como foi guardado
 (t,c,s)=>mesa(t,c,s,{hands:t=>({l:REST.l,r:corkUp(t,T[6]+.2,T[7]+1)}),rHold:true,bottle:false,props:(f)=>bottleS(f,[1100,815],1,'red'),cork:false,
  held:(f,hl,hr)=>{if(hr[1]<690)bigCork(f,hr[0],hr[1]-70,1.15)},face:t=>({look:.35,lookY:-.3,brow:.8,mouth:.5}),
  over:(c,t)=>{fade(c,ap(t,6,'termômetro',.5),()=>{thermo(c,1620,560,240,.55,'');})},chips:[['COMO FOI GUARDADO?',440,250,wt(6,'guardado')]]}),
 // 7 — úmida na ponta e firme: garrafa deitada
 (t,c,s)=>C3(t,s,restaurant,'ÚMIDA E FIRME',g=>{const sq=Math.max(0,Math.sin((t-wt(7,'aperta'))*5))*ap(t,7,'aperta',.3)*(1-ap(t,7,'firme',.5));
  corkH(g,760,420,360-sq*14,120+sq*6,{wet:1});fade(g,ap(t,7,'deitada',.5),()=>{g.save();g.translate(980,690);g.rotate(Math.PI/2);bottleS(g,[0,0],1.25,'red');g.restore();g.fillStyle='rgba(142,27,58,.85)';g.fillRect(990,700,330,40);
   g.strokeStyle=GOLD2;g.lineWidth=5;g.setLineDash([10,8]);g.beginPath();g.ellipse(1305,712,40,34,0,0,7);g.stroke();g.setLineDash([])});
  chip(g,1400,330,'ÚMIDA NA PONTA',ap(t,7,'úmida'));chip(g,1400,450,'FIRME',ap(t,7,'firme'));chip(g,1000,560,'GARRAFA DEITADA',ap(t,7,'deitada'))},.62),
 // 8 — seca e esfarelando
 (t,c,s)=>C3(t,s,restaurant,'SECA E ESFARELANDO',g=>{corkH(g,720,470,380,130,{dry:1,crumbs:(t*.5)%1});fade(g,ap(t,8,'pé',.5),()=>bottleS(g,[1180,840],1.1,'red'));fade(g,ap(t,8,'seco',.5),()=>sunIcon(g,1420,420,60,t));
  chip(g,720,720,'FICOU EM PÉ?',ap(t,8,'pé'));chip(g,1440,600,'LUGAR SECO',ap(t,8,'seco'));fade(g,ap(t,8,'alerta',.5),()=>{plaque(g,1080,800,820,110);goldText(g,'NÃO ESTRAGOU... MAS É UM ALERTA',1080,800,30,'Cinzel',900)})},.62),
 // 9 — vinho até o topo: calor
 (t,c,s)=>C3(t,s,restaurant,'VINHO ATÉ O TOPO',g=>{corkH(g,760,470,420,140,{wet:1,seep:easeIO(seg(t,wt(9,'escorrido')-.2,wt(9,'topo')+.8))});
  fade(g,ap(t,9,'calor',.5),()=>{thermo(g,1130,660,260,.9,'');sunIcon(g,1500,420,62,t)});chip(g,1460,640,'SINAL DE CALOR',ap(t,9,'calor'));
  fade(g,ap(t,9,'prove',.5),()=>{plaque(g,760,760,640,110);goldText(g,'PROVE COM ATENÇÃO',760,760,40,'Cinzel',900)})},.62),
 // 10 — o grande mito: cheirar a rolha
 (t,c,s)=>{const a=T[10]+.35;mesa(t,c,s,{hands:t=>{const u=easeIO(seg(t,a,a+.8));return {l:REST.l,r:[[lerp(1086,1035,u),lerp(706,602,u)],lerp(50,150,u)]}},rHold:true,bottle:false,cork:false,
  props:(f)=>bottleS(f,[1180,815],1,'red'),held:(f,hl,hr)=>bigCork(f,hr[0],hr[1]-53,.8),
  face:t=>{const u=seg(t,a+.7,a+1);return {look:.25,lookY:-.1,brow:u>.5?1:.5,tilt:-.06*u,mouth:.3,blink:u>.5&&t<T[11]-.5?1:0}},noTalk:false,
  chips:[['O GRANDE MITO',430,250,wt(10,'mito')]]})},
 // 11 — pode cheirar? quase não ajuda; melhor sommelier: "não"
 (t,c,s)=>C3(t,s,restaurant,'CHEIRAR A ROLHA?',g=>{corkH(g,620,480,340,120,{wet:1});const w=Math.sin(t*3);g.strokeStyle='rgba(243,230,200,.6)';g.lineWidth=5;for(const k of [0,1,2]){g.beginPath();g.moveTo(560+k*60,400);g.bezierCurveTo(540+k*60+w*10,360,600+k*60-w*10,330,570+k*60,290);g.stroke()}
  chip(g,620,660,'ROLHA CHEIRA A ROLHA',ap(t,11,'cheira'));stampS(g,1340,400,'QUASE NÃO AJUDA',ap(t,11,'ajuda',.4),.62);
  fade(g,ap(t,11,'perguntaram',.5),()=>{plaque(g,1340,690,760,230);goldText(g,'UM DOS MELHORES',1340,630,34,'Cinzel',700);goldText(g,'SOMMELIERS DO MUNDO',1340,672,34,'Cinzel',700);fade(g,ap(t,11,'simples',.5),()=>goldText(g,'"NÃO."',1340,742,64,'Cinzel',900))})},.62),
 // 12 — o garçom serve um pouquinho
 (t,c,s)=>{const t0=T[12],a=wt(12,'serve')-.4,po=easeIO(seg(t,a,a+.7))*(1-easeIO(seg(t,T[13]-.9,T[13]-.35))),lv=.16*seg(t,a+.6,a+1.6);
  duo(t,c,s,{wx:640,whands:t=>({l:[[540,690],60],r:[[lerp(790,820,po),lerp(700,555,po)],lerp(60,100,po)]}),wTowel:true,
  wheld:(f,wl,wr,t)=>{const th=lerp(0,1.85,po);f.save();f.translate(wr[0],wr[1]);f.rotate(th);bottleS(f,[0,14],1,'red');f.restore();if(po>.95&&lv<.159){const m=[wr[0]+Math.sin(th)*272,wr[1]-Math.cos(th)*272];f.strokeStyle='rgba(120,20,40,.9)';f.lineWidth=7;f.beginPath();f.moveTo(m[0],m[1]);f.quadraticCurveTo(m[0]+14,m[1]+30,1095,760);f.stroke()}},
  wGripL:false,wface:t=>({look:.6,lookY:.4,mouth:.5,brow:.3}),
  shands:t=>({l:[[1200,782],40],r:[[1450,778],40]}),glass:{b:[1095,822],lv},sface:t=>({look:-.4,lookY:.35,brow:.5,mouth:.6}),m:{bottle:false,rHold:true}});
  const c2=layer('chipL',null);chip(c2,960,140,'QUEM CONTA É O VINHO',ap(t,12,'próprio'));chip(c2,960,260,'SÓ UM POUQUINHO',ap(t,12,'pouquinho'));blit(ctx,L.chipL,0)},
 // 13 — o gole é para defeito, não para gosto
 (t,c,s)=>C3(t,s,restaurant,'PRA QUE SERVE O GOLE?',g=>{glassW(g,620,840,2.3,.16,CEL.wine);chip(g,1340,360,'NÃO É "GOSTEI?"',ap(t,13,'gostou'));stampS(g,1340,580,'É DEFEITO, NÃO GOSTO',ap(t,13,'defeito',.4),.55)},.62),
 // 14 — TCA: papelão molhado, porão mofado
 (t,c,s)=>C3(t,s,cellarWall,'O GOSTO DE ROLHA',g=>{fade(g,ap(t,14,'papelão',.5),()=>cardboard(g,520,470,1.2));fade(g,ap(t,14,'porão',.5),()=>{g.fillStyle='rgba(70,90,60,.6)';for(let i=0;i<9;i++){g.beginPath();g.arc(420+(i*53)%240,330+(i*29)%60,10+i%4*5,0,7);g.fill()}});
  chip(g,520,690,'PAPELÃO MOLHADO',ap(t,14,'papelão'));chip(g,520,800,'PORÃO MOFADO',ap(t,14,'porão'));
  fade(g,ap(t,14,'substância',.6),()=>{const b=Math.sin(t*1.5)*8;g.save();g.translate(0,b);g.translate(1340,405);g.scale(1.9,1.9);cloud(g,0,0,'rgba(120,120,128,.85)','');goldText(g,'TCA',0,4,44,'Cinzel',900);g.restore()});
  fade(g,ap(t,14,'trilhão',.5),()=>{plaque(g,1340,750,620,170);goldText(g,'POUCAS PARTES',1340,720,40,'Cinzel',900);goldText(g,'POR TRILHÃO!',1340,775,40,'Cinzel',900)})},.62),
 // 15 — pode pedir outra garrafa
 (t,c,s)=>{const t0=T[15],u=easeIO(seg(t,t0+.1,t0+1.6));duo(t,c,s,{wx:lerp(-150,600,u),whands:t=>({l:[[lerp(-250,500,u),690],60],r:[[lerp(-30,760,u),565],90]}),wTowel:true,
  wheld:(f,wl,wr,t)=>bottleAt(f,wr[0],wr[1],1,0,'red'),wGripL:false,wface:t=>({look:.55,mouth:.75,brow:.5}),
  shands:t=>{const k=easeIO(seg(t,wt(15,'vergonha')-.4,wt(15,'vergonha')+.1));return {l:[[1160,780],70],r:[[lerp(1450,1480,k),lerp(778,640,k)],lerp(40,90,k)],ro:k>.5}},glass:{b:[1160,822],lv:.16},sface:t=>({look:-.5,mouth:.8,brow:.6}),m:{bottle:false,rHold:true}});
  const c2=layer('chipL',null);chip(c2,960,140,'PEÇA OUTRA GARRAFA',ap(t,15,'outra'));chip(c2,960,260,'SEM VERGONHA NENHUMA',ap(t,15,'vergonha'));blit(ctx,L.chipL,0)},
 // 16 — farelo de rolha boiando
 (t,c,s)=>C3(t,s,restaurant,'FARELO NA TAÇA',g=>{glassW(g,640,860,2.4,.42,CEL.wine);const rm=easeIO(seg(t,wt(16,'tira')-.2,wt(16,'tira')+.8)),bob=Math.sin(t*2)*3;
  const crumbs=[[600,590],[640,598],[676,588]];g.fillStyle='#C99A5B';crumbs.forEach(([cx,cy],i)=>{const k=i==1?rm:0;g.beginPath();g.ellipse(cx+k*40,cy+bob-k*120,9,5,0,0,7);g.fill()});
  fade(g,ap(t,16,'tira',.4),()=>{g.save();g.translate(700+rm*10,560-rm*120);g.rotate(-.6);g.fillStyle='#C9C4BA';g.fillRect(-4,-220,8,200);g.beginPath();g.ellipse(0,-6,20,14,0,0,7);g.fill();g.restore()});
  chip(g,1340,380,'NÃO É GOSTO DE ROLHA',ap(t,16,'isso'));chip(g,1340,520,'SÓ ESFARELOU',ap(t,16,'esfarelou'));chip(g,1340,660,'TIRA E BEBE',ap(t,16,'tira'))},.62),
 // 17 — espumante: rolha vira cogumelo
 (t,c,s)=>C3(t,s,restaurant,'A ROLHA DO ESPUMANTE',g=>{const u=easeIO(seg(t,wt(17,'sai')-.2,wt(17,'sai')+1)),out=easeIO(seg(t,wt(17,'incha')-.3,wt(17,'incha')+.8));
  bottleS(g,[560,900],2,'spark');champCork(g,560,429,.62,0);fade(g,ap(t,17,'terços',.5),()=>{g.strokeStyle=GOLD2;g.lineWidth=4;g.setLineDash([12,8]);g.beginPath();g.moveTo(470,356);g.lineTo(650,356);g.stroke();g.setLineDash([]);goldText(g,'2/3 DENTRO',560,470,30,'Cinzel',900)});
  fade(g,u,()=>champCork(g,1000,720,1.6,out));chip(g,1440,330,'FORMA DE COGUMELO',ap(t,17,'cogumelo'));chip(g,1440,470,'ENTRA SÓ 2/3',ap(t,17,'terços'));chip(g,1440,610,'A BASE INCHA',ap(t,17,'incha'))},.62),
 // 18 — tampa de rosca, Nova Zelândia ~90%
 (t,c,s)=>C3(t,s,restaurant,'TAMPA DE ROSCA',g=>{screwBottle(g,620,880,1.7);fade(g,ap(t,18,'barato',.4),()=>chip(g,1340,330,'NÃO É VINHO BARATO',1));
  fade(g,ap(t,18,'nova',.5),()=>{plaque(g,1340,560,600,220);goldText(g,'NOVA ZELÂNDIA',1340,505,44,'Cinzel',900);fade(g,ap(t,18,'noventa',.4),()=>goldText(g,'~90%',1340,590,78,'Cinzel',900))});
  chip(g,1340,770,'FOGE DO GOSTO DE ROLHA',ap(t,18,'fugir'))},.62),
 (t,c,s)=>finalTable(t,s),
 (t,c,s)=>ctaScene(t,c,s),
 (t,c,s)=>toastScene(t,c,s),
 null];
function finalTable(t,s){veil(null,t,restaurant,.8);const g=layer('g',null);goldText(g,'A ROLHA NO RESTAURANTE',960,130,64);ornament(g,960,205,600);blit(ctx,L.g,0,seg(t,T[s],T[s]+.5));
 const C=[['brand','ROLHA MARCADA','garrafa original','prova'],['wet','ÚMIDA','bem guardada','guardada'],['sniff','CHEIRAR','quase não ajuda','cheirar'],['tca','PAPELÃO MOLHADO','peça outra','defeito'],['crumb','FARELO','não é defeito','gosto']];
 C.forEach(([ic,n,d,w],i)=>{const cx=220+i*370,ta=wt(19,w)-.15+(i==4?.6:0),c=layer('c'+i,null);plaque(c,cx,600,330,560);
  if(ic=='brand')corkH(c,cx,560,220,84,{wet:1,brand:'CHÂTEAU',year:'1870'});else if(ic=='wet')corkH(c,cx,560,220,84,{wet:1});
  else if(ic=='sniff'){corkH(c,cx,600,200,74,{wet:1});c.strokeStyle='rgba(243,230,200,.6)';c.lineWidth=4;for(const k of [-1,0,1]){c.beginPath();c.moveTo(cx+k*40,540);c.quadraticCurveTo(cx+k*40-14,500,cx+k*40,460);c.stroke()}}
  else if(ic=='tca'){cloud(c,cx,560,'rgba(120,120,128,.85)','');goldText(c,'TCA',cx,565,48,'Cinzel',900)}else{glassW(c,cx,690,1.1,.4,CEL.wine);c.fillStyle='#C99A5B';c.beginPath();c.ellipse(cx-6,690-1.1*178*.4-40,7,4,0,0,7);c.fill()}
  goldText(c,n,cx,768,Math.min(34,Math.floor(290/(.8*n.length))),'Cinzel',700);blit(ctx,L['c'+i],0,easeIO(seg(t,ta,ta+.8)));serif(d,cx,822,32,`rgba(243,230,200,${easeIO(seg(t,ta,ta+.8))})`)})}
function ctaScene(t,cam,s){mesa(t,cam,s,{hands:t=>{const t0=T[s],u=easeIO(seg(t,t0+.2,t0+.7))*(1-easeIO(seg(t,t0+2.4,t0+2.9)));return {l:REST.l,r:[[lerp(1086,1150,u),lerp(706,560,u)],lerp(50,80,u)],ro:u>.5}},
  rHold:true,bottle:false,props:(f)=>bottleS(f,[1100,815],1,'red'),face:t=>({mouth:.75,brow:.5,look:-.05})});
 const a=easeIO(seg(t,T[s]+.4,T[s]+1)),g=layer('g',null);g.save();g.globalAlpha=a;g.fillStyle='#B0122E';g.beginPath();g.roundRect(120,120,520,110,55);g.fill();g.strokeStyle=GOLD2;g.lineWidth=5;g.stroke();g.restore();
 g.save();g.globalAlpha=a;goldText(g,'INSCREVA-SE',380,176,52,'Cinzel',900);g.restore();chip(g,380,300,'QUAL CURIOSIDADE?',ap(t,20,'curiosidade'));blit(ctx,L.g,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=a;ctx.drawImage(LOGO,1640,40,230,220);ctx.restore()}}
// fechamento (sem fala/legenda): o Sommelier ergue a taça pela haste num brinde; câmera aproxima, música sobe
function toastScene(t,cam,s){const t0=T[s],u=easeIO(seg(t,t0+.2,t0+1.1)),k=Math.sin(Math.PI*seg(t,t0+1.25,t0+1.75));
 mesa(t,cam,s,{noTalk:true,glassOn:false,
  hands:t=>({l:[[lerp(840,755,u)+k*14,lerp(780,615,u)-k*10],lerp(70,135,u)+k*20],r:[[1086,706],50]}),
  held:(f,hl,hr)=>glassW(f,hl[0],hl[1]+42,1+.1*u,.35,CEL.wine),
  face:t=>({look:-.05,lookY:-.05,brow:.6,mouth:.85,tilt:-.04*u})})}
const TALKS=[1,5,6,10,12,15,20],FINAL=22,TABLE=19,TOAST=21;
FILM={dur:T[T.length-1],cuts:T.map(v=>Math.round(v*30)),fadeIn:0,fadeOut:.8,warm(){return .4},
 cam(s,u,t){if(TALKS.includes(s)){if([5,12,15].includes(s))return {x:lerp(960,975,u),y:lerp(560,550,u),z:lerp(1.0,1.07,easeIO(u)),b:[6,0,0]};const k=TALKS.indexOf(s)%3;return [{x:lerp(950,975,u),y:lerp(560,545,u),z:lerp(1.18,1.28,easeIO(u)),b:[6,0,0]},{x:lerp(970,985,u),y:lerp(545,520,u),z:lerp(1.3,1.45,easeIO(u)),b:[8,0,0]},{x:lerp(1000,985,u),y:550,z:lerp(1.22,1.32,u),b:[7,0,0]}][k]}if(s==TOAST)return {x:lerp(975,965,u),y:lerp(545,560,u),z:lerp(1.28,1.5,easeIO(u)),b:[6,0,0]};return {x:960,y:540,z:1,b:[10,0,0]}},
 draw(t,cam,s,u){if(s==0){thumbFrame(t);return}if(s==FINAL){photo(IMG.logo,t,T[FINAL],T[FINAL+1],1,1.05);return}SC[s](t,cam,s)},
 plants(){return {}}};
(function(){const DISS={1:.6},xf=mk(),xz=mk(),CARD=[2,3,4,7,8,9,11,13,14,16,17,18],draw0=FILM.draw,cam0=FILM.cam;for(let s=2;s<=FINAL;s++)DISS[s]=.45;
 FILM.draw=(t,c,s,u)=>{const d=DISS[s],a=d?1-easeIO(seg(t,T[s],T[s]+d)):0;if(a>0){draw0(t,cam0(s-1,1,t),s-1,1);const x=xf.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0)}
  draw0(t,c,s,u);if(CARD.includes(s)){const k=1+.035*easeIO(u),x=xz.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0);ctx.save();ctx.setTransform(k,0,0,k,W/2*(1-k),H/2*(1-k));ctx.drawImage(xz,0,0);ctx.restore()}
  if(a>0)blit(ctx,xf,0,a);if(s!=0&&s!=FINAL)watermark();if(s!=TABLE&&s!=TOAST&&s!=FINAL)karaoke(t)}})();
// som
for(let s=1;s<FINAL;s++)if(s!=TOAST)say(T[s],'whoosh');say(T[TOAST]+1.45,'clink');
for(const [i,w] of [[2,'sumia'],[3,'gravar'],[3,'identidade'],[5,'provava'],[7,'firme'],[8,'alerta'],[9,'calor'],[11,'ajuda'],[13,'defeito'],[14,'trilhão'],[16,'tira'],[17,'cogumelo'],[18,'noventa']])say(wt(i,w),'tag');
say(wt(4,'tampasse'),'corkin');say(wt(12,'serve'),'pour');say(wt(14,'papelão'),'yuck');say(wt(15,'outra'),'bottledown');say(wt(17,'sai'),'pop');say(T[10]+.6,'sniff');
for(const w of ['prova','guardada','cheirar','defeito','gosto'])say(wt(19,w)-.15,'line');
