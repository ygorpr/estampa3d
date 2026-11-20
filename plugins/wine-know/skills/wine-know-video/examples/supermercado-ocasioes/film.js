// COMO ESCOLHER VINHO NO SUPERMERCADO SEM ERRAR — Wine Know / Dark Divino
const LEN=[8.5,6.1,5.0,3.4,5.7,5.7,6.7,3.7,4.3,5.0,6.8,3.9,5.3,3.9,7.3,4.8,7.7,5.5,4.5,4.1,6.9,8.2,5.7,6.9,6.1,12.5,7.0,3.0],T=sceneStarts(LEN);
const LOGO=new Image();LOGO.src='logo_badge.png';
// ---------- lip sync from the narration timings ----------
function speak(t){for(const l of VOX){if(t<l.at||t>l.at+l.dur)continue;for(const w of l.words){const s=l.at+w[1],e=l.at+w[2];if(t>=s&&t<=e){const u=(t-s)/Math.max(.05,e-s);return .18+.34*Math.sin(u*Math.PI)}}return .05}return 0}
// ---------- gestures: hand targets [[x,y],z] and open/closed hands ----------
const G={
 rest:{l:[[790,776],40],r:[[1086,706],50]},
 open:{l:[[800,690],95],r:[[1120,690],95],lo:1,ro:1},
 thinking:{l:[[915,585],135],r:[[1086,706],50]},
 point:{l:[[790,776],40],r:[[1185,630],40],ro:1},
 bottleUp:{l:[[790,776],40],r:[[1140,560],100]},
 shrug:{l:[[745,700],80],r:[[1175,700],80],lo:1,ro:1},
 wave:{l:[[790,776],40],r:[[1150,560],80],ro:1}};
function gest(t,seq){let a=seq[0][1],b=a,u=1;for(let i=0;i<seq.length;i++){if(t>=seq[i][0]){a=i?seq[i-1][1]:seq[i][1];b=seq[i][1];u=easeIO(seg(t,seq[i][0],seq[i][0]+.45))}}
 const A=G[a],B=G[b],mix=(p,q)=>[[lerp(p[0][0],q[0][0],u),lerp(p[0][1],q[0][1],u)],lerp(p[1],q[1],u)];
 const wob=k=>b=='open'||b=='shrug'?Math.sin(t*2.3+k)*6:b=='wave'?Math.sin(t*9)*18:0;
 const l=mix(A.l,B.l),r=mix(A.r,B.r);l[0][0]+=wob(0);r[0][0]+=wob(1.4);return {l,r,lo:lerp(A.lo||0,B.lo||0,u)>.5,ro:lerp(A.ro||0,B.ro||0,u)>.5,name:b}}
// ---------- the Sommelier at the counter ----------
// o: {set, gest:[[t,name],...], face:{...}, bottles:[[kind,x]], tags:[[text,x,y,t]], sip:t0, napkins, bottleHeld:kind, candles}
function talkScene(t,cam,s,o){const x=layer('w',cam);(o.set||cellarWall)(x,t);if(o.barrels)for(const [bx,sc] of o.barrels)barrelSide(x,bx,900,sc,.9);
 const t0=T[s],g0=o.sip!=null?keyed(t,o.sip,sipKeys(860,812)):null,gl=g0||{b:[860,812],a:0},k=clamp(gl.a/.95);
 const gs=gest(t,(o.gest||[[0,'rest']]).map(q=>[t0+q[0],q[1]]));
 const p=sommPose(t,Object.assign({look:-.15,brow:.35,mouth:.45,blink:k>.7?1:blinkAt(t,[t0+1.3,t0+3.9])},o.face?o.face(t):{}));
 const sp=speak(t);if(k<.3&&!(o.face&&o.face(t).laugh)){p.open=Math.max(p.open||0,sp);if(sp>.1)p.mouth=Math.min(p.mouth,.35)}
 p.tilt=(p.tilt||0)-k*.1+Math.sin(t*1.3)*.015;p.headX=(p.headX||0)-k*6;p.headY=(p.headY||0)-k*4;p.lookY=(p.lookY||0)-k*.4;
 const L_=o.sip!=null?[gripOf(gl),70+clamp((812-gl.b[1])/182)*95]:gs.l;setHands(p,L_,gs.r);const hp=sommActor(cam,p);
 const f=layer('f',cam);(o.front||cellarTable)(f);for(const c of (o.candles||[]))candle(f,c[0],830,c[1],t);if(o.props)o.props(f,t);
 if(o.sip!=null)glassT(f,gl,o.wine??.4,o.wineCol||CEL.wine,t,keyed(t-1/30,o.sip,sipKeys(860,812))||gl);
 const held=gs.name=='bottleUp',hl=h2w(hp,'l'),hr=h2w(hp,'r'),behindL=o.sip==null,behindR=!held;
 if(behindL)(gs.lo?openHand:gripHand)(f,hl[0],hl[1],gs.lo?-.4:0,C10,.85);if(behindR)(gs.ro?openHand:gripHand)(f,hr[0],hr[1],gs.ro?.4:0,C10,.85);
for(const [kind,bx] of (o.bottles||[]))if(!(held&&kind==(o.bottleHeld||'exp')&&bx>1000))(BST[kind]?bottleS:bottleL)(f,[bx,815],1,kind);
 
 if(held){const hr=h2w(hp,'r'),k2=o.bottleHeld||'exp';(BST[k2]?bottleS:bottleL)(f,[hr[0],hr[1]+250],1,k2)}
 if(!behindL)gripHand(f,hl[0],hl[1],gl.a,C10,.85);if(!behindR)gripHand(f,hr[0],hr[1],0,C10,.85);
 for(const [txt,tx,ty,ta] of (o.tags||[]))priceTag(f,tx,ty,txt,ease(seg(t,ta,ta+.35)));
 comp([['w',cam.b[0]],['h'],['f']]);
 for(const [txt,cx,cy,ta] of (o.chips||[])){const c=layer('chipL',null);chip(c,cx,cy,txt,ease(seg(t,ta,ta+.35)));blit(ctx,L.chipL,0)}
 if(o.tip)tip_(o.tip,win(t,t0+.2,T[s+1]-.1))}

function veil(cam,t,set,a=.74){const x=layer('w',cam);(set||marketWall)(x,t);comp([['w',12]]);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle=`rgba(20,6,10,${a})`;ctx.fillRect(0,0,W,H);ctx.restore()}
function chapter(t,cam,s,num,title,sub){veil(cam,t,marketWall,.8);const u=easeIO(seg(t,T[s],T[s]+.6)),g=layer('g',null);
 g.save();g.globalAlpha=u;g.translate(0,(1-u)*30);plaque(g,960,520,1100,420);goldText(g,isNaN(+num)?num:'CAPÍTULO '+num,960,405,46,'Cinzel',700);ornament(g,960,465,520);goldText(g,title,960,560,Math.min(92,Math.floor(1400/title.length)));if(sub)goldText(g,sub,960,650,Math.min(54,Math.floor(1500/sub.length)),'Cinzel',700);g.restore();blit(ctx,L.g,0)}
function chipsCard(t,cam,s,title,items,set,art){veil(cam,t,set);const g=layer('g',null);goldText(g,title,960,200,70);ornament(g,960,272,560);if(art)art(g,t);
 for(const [txt,cx,cy,ta] of items)chip(g,cx,cy,txt,ease(seg(t,ta,ta+.35)));blit(ctx,L.g,0,seg(t,T[s],T[s]+.4))}
function shelf(t,s){veil(null,t,marketWall,.7);const tm=wt(24,'meio'),u=easeIO(seg(t,tm-.2,tm+.5)),g=layer('g',null);const sg=g.createLinearGradient(0,150,0,820);sg.addColorStop(0,`rgba(255,200,120,${.45*u})`);sg.addColorStop(1,'rgba(255,200,120,0)');g.fillStyle=sg;g.beginPath();g.moveTo(900,120);g.lineTo(1020,120);g.lineTo(1180,820);g.lineTo(740,820);g.closePath();g.fill();
 g.fillStyle='#5A2E1C';g.fillRect(360,800,1200,26);bottleL(g,[600,800],1.2,'cheap');bottleL(g,[960,800],1.2+.08*u,'mid');bottleL(g,[1320,800],1.2,'exp');priceTag(g,600,330,'R$ 30',1,.8);priceTag(g,960,330,'R$ 90',1,.8+.15*u);priceTag(g,1320,330,'R$ 400',1,.8);blit(ctx,L.g,0);tip_('A FAIXA DO MEIO',win(t,T[s]+.2,T[s+1]-.1))}
// ---------- COMO ESCOLHER VINHO NO SUPERMERCADO SEM ERRAR — scenes (one per narration line) ----------
const MK={set:marketWall,front:marketFront};
const BIG=(fn,cx,k=1.45,y=805)=>(f,t)=>{f.save();f.translate(cx,y);f.scale(k,k);f.translate(-cx,-y);fn(f,cx,y);f.restore()};
const W_WHITE='#E8D58A',W_ROSE='#E9A0A8',W_SPARK='#F0DE9A',W_MOSC='#E2B456';
// opening = the thumbnail, alive (thumbFrame(0) IS the thumbnail)
function thumbFrame(t){const u=easeIO(seg(t,.6,LEN[0])),cam={x:1080+u*10,y:500-u*6,z:1.7+u*.07,b:[10,0,0]};
 let x=layer('w',cam);marketWall(x,0);
 const live=t>0,sp=live?speak(t):0,wv=live?Math.sin(t*2.4)*.5+.5:0,lk=live?kf(t,[[0,-.45],[2.5,-.45],[3,.4],[5.5,.4],[6,-.45]]):-.45;
 const p={x:1330,y:600,s:1,face:1,noLegs:true,breath:1+(live?t*2.1:0),look:lk,lookY:-.15,brow:1.1,wide:1,sad:.35,mouth:.05,open:Math.max(.5-(live?seg(t,.3,.5)*.5:0),sp),tilt:-.08+(live?Math.sin(t*1.2)*.02:0),blink:live?blinkAt(t,[1.4,3.9,6.6]):0,hands:{},arm3d:true};
 p.hands.l=[...w2l(p,[1190,522]),110];p.hands.r=[...w2l(p,[1470,600-wv*12]),90];const hp=actor(layer('h',cam),'s',C10,p,cam,'rgba(255,220,180,1)',1);
 const f=layer('f',cam);marketFront(f);bottleS(f,[1190,760],1,'red');const hl=h2w(hp,'l'),hr=h2w(hp,'r');gripHand(f,hl[0],hl[1],0,C10,.85);openHand(f,hr[0],hr[1],.5,C10,.85);
 comp([['w',10]]);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='rgba(16,3,7,.62)';ctx.fillRect(0,0,W,H);ctx.restore();blit(ctx,L.h,0);blit(ctx,L.f,0);
 ctx.save();ctx.setTransform(1,0,0,1,0,0);const v=ctx.createLinearGradient(0,0,W*.62,0);v.addColorStop(0,'rgba(16,3,7,.92)');v.addColorStop(.75,'rgba(16,3,7,.55)');v.addColorStop(1,'rgba(16,3,7,0)');ctx.fillStyle=v;ctx.fillRect(0,0,W,H);ctx.restore();
 const T_=layer('t',null);goldText(T_,'QUAL VINHO',545,400,124,'Cinzel',900);goldText(T_,'EU LEVO?',545,570,124,'Cinzel',900);T_.fillStyle='#B0122E';T_.fillRect(205,645,680,10);blit(ctx,L.t,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.85;ctx.drawImage(LOGO,545-62,680,124,119);ctx.restore()}}
function watermark(){if(!LOGO.complete)return;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.075;ctx.filter='blur(.6px)';ctx.drawImage(LOGO,960-230,720-221,460,442);ctx.restore()}
// cards for the shelf checklist
function labelCard(t,s){veil(null,t,marketWall,.78);const g=layer('g',null),a=easeIO(seg(t,wt(20,'fino')-.3,wt(20,'fino')+.3));goldText(g,'O QUE ESTÁ ESCRITO NO RÓTULO',960,170,58);ornament(g,960,235,560);
 for(const [cx,title,sub,hi] of [[620,'VINHO FINO','uvas viníferas',1],[1300,'VINHO DE MESA','pode ser uva americana',0]]){g.save();g.globalAlpha=hi?1:.55+.0*a;g.fillStyle='#F3E6C8';g.beginPath();g.roundRect(cx-230,330,460,460,22);g.fill();g.strokeStyle=hi?'#D4A24C':'#8A6A3A';g.lineWidth=hi?10*a+4:4;g.stroke();
  g.fillStyle="#5E1428";g.font="900 42px Cinzel";g.textAlign='center';g.textBaseline='middle';g.fillText(title,cx,470);g.font="italic 600 38px Cormorant";g.fillStyle='#4A2A1A';g.fillText(sub,cx,540);g.strokeStyle='#8A6A3A';g.lineWidth=3;g.beginPath();g.moveTo(cx-150,600);g.lineTo(cx+150,600);g.stroke();g.restore()}
 chip(g,620,700,'CABERNET · CHARDONNAY',ease(seg(t,wt(20,'cabernet')-.1,wt(20,'cabernet')+.3)));blit(ctx,L.g,0,seg(t,T[s],T[s]+.4))}
function lightCard(t,s){veil(null,t,marketWall,.6);const g=layer('g',null);goldText(g,'A LUZ ESTRAGA O VINHO',960,150,62);ornament(g,960,215,560);
 g.fillStyle='#FFF1D6';g.fillRect(560,280,800,16);const pul=.6+.4*Math.sin(t*6),gl=g.createLinearGradient(0,296,0,820);gl.addColorStop(0,`rgba(255,240,200,${.45*pul})`);gl.addColorStop(1,'rgba(255,240,200,0)');g.fillStyle=gl;g.beginPath();g.moveTo(560,296);g.lineTo(1360,296);g.lineTo(1260,820);g.lineTo(660,820);g.closePath();g.fill();
 g.fillStyle='#5A2E1C';g.fillRect(420,800,1080,22);for(let i=0;i<4;i++)bottleS(g,[700+i*170,800],1.05,'clear');const back=easeIO(seg(t,wt(21,'fundo')-.2,wt(21,'fundo')+.4));g.save();g.globalAlpha=.55+.45*back;bottleS(g,[1600,800],1.05,'white');g.restore();
 chip(g,1600,420,'PEGUE A DO FUNDO',back);chip(g,960,900,'GARRAFA TRANSPARENTE = MAIS RISCO',ease(seg(t,wt(21,'transparentes')-.3,wt(21,'transparentes')+.2)));blit(ctx,L.g,0,seg(t,T[s],T[s]+.4))}
function vintageCard(t,s){veil(null,t,marketWall,.75);const g=layer('g',null);goldText(g,'BRANCO, ROSÉ E ESPUMANTE',960,170,58);ornament(g,960,235,560);const a=easeIO(seg(t,wt(22,'nova')-.3,wt(22,'nova')+.3));
 for(const [cx,yr,st,best] of [[560,'2022','white',0],[960,'2024','rose',0],[1360,'2025','spark',1]]){g.save();g.globalAlpha=best?1:1-.45*a;bottleS(g,[cx,760],1.15,st);g.restore();priceTag(g,cx,420,yr,1,best?.9+.15*a:.8)}
 chip(g,1360,860,'A SAFRA MAIS NOVA',a);blit(ctx,L.g,0,seg(t,T[s],T[s]+.4))}
function corkCard(t,s){veil(null,t,marketWall,.75);const g=layer('g',null);goldText(g,'FUJA DESTA GARRAFA',960,170,60);ornament(g,960,235,560);const u=easeIO(seg(t,T[s]+.4,T[s]+1.6));
 g.save();g.translate(960,1100);g.scale(2.6,2.6);CEL.glass='#1E3A31';wineBottle(g,0,0,1,false,'#5E1428');g.fillStyle='#C99A5B';g.fillRect(-10,-286-22*u,20,26);g.fillStyle='rgba(120,30,40,.85)';g.beginPath();g.moveTo(-13,-262);g.quadraticCurveTo(-16,-236,-11,-226);g.quadraticCurveTo(-8,-236,-9,-262);g.fill();g.beginPath();g.moveTo(9,-262);g.quadraticCurveTo(14,-226,10,-214);g.quadraticCurveTo(6,-226,6,-262);g.fill();g.restore();
 chip(g,1400,420,'ROLHA ESTUFADA',ease(seg(t,wt(23,'estufada')-.2,wt(23,'estufada')+.2)));chip(g,520,560,'MELADO NO GARGALO',ease(seg(t,wt(23,'melada')-.2,wt(23,'melada')+.2)));chip(g,960,880,'PEGOU CALOR',ease(seg(t,wt(23,'calor')-.2,wt(23,'calor')+.2)));blit(ctx,L.g,0,seg(t,T[s],T[s]+.4))}
function cheeseCard(t,s){veil(null,t,drawRoom,.7);const g=layer('g',null);goldText(g,'QUEIJO E VINHO',960,170,62);ornament(g,960,235,560);const a1=ease(seg(t,wt(14,'fresco')-.3,wt(14,'fresco')+.3)),a2=ease(seg(t,wt(14,'curado')-.3,wt(14,'curado')+.3));
 g.save();g.globalAlpha=a1;g.fillStyle='#F7EFDF';g.beginPath();g.moveTo(400,600);g.lineTo(600,600);g.lineTo(570,450);g.closePath();g.fill();bottleS(g,[740,640],1,'white');goldText(g,'FRESCO OU DE CABRA',600,700,36,'Cinzel',700);g.restore();
 g.save();g.globalAlpha=a2;g.fillStyle='#E9C46A';g.beginPath();g.moveTo(1120,600);g.lineTo(1320,600);g.lineTo(1290,450);g.closePath();g.fill();bottleS(g,[1460,640],1,'red');goldText(g,'CURADO, TIPO PARMESÃO',1320,700,36,'Cinzel',700);g.restore();blit(ctx,L.g,0);
 serif('branco',600,760,48,`rgba(243,230,200,${a1})`,'italic');serif('tinto',1320,760,48,`rgba(243,230,200,${a2})`,'italic')}
function finalTable(t,s){veil(null,t,marketWall,.76);const g=layer('g',null);goldText(g,'O QUE EU LEVO?',960,130,80);ornament(g,960,210,600);blit(ctx,L.g,0,seg(t,T[s],T[s]+.5));
 const C=[['meat','CHURRASCO','tinto encorpado','red','churrasco'],['fish','PEIXE','branco','white','peixe'],['cheese','PETISCOS','espumante brut','spark','petiscos'],['pizza','PIZZA','tinto médio','red','pizza'],['dessert','SOBREMESA','moscatel','moscato','sobremesa']];
 C.forEach(([food,n,d,st,w],i)=>{const cx=220+i*370,ta=wt(25,w)-.15,c=layer('c'+i,null);plaque(c,cx,600,330,560);foodIcon(c,food,cx-40,430);bottleS(c,[cx+90,700],.62,st);goldText(c,n,cx,768,28,'Cinzel',700);blit(ctx,L['c'+i],0,seg(t,ta,ta+.45));serif(d,cx,822,38,`rgba(243,230,200,${seg(t,ta,ta+.45)})`)})}
function ctaScene(t,cam,s){talkScene(t,cam,s,Object.assign({gest:[[0,'wave'],[2.2,'open'],[4.5,'rest']],bottles:[['red',1100]],face:t=>({mouth:.7,brow:.5})},MK));
 const a=easeIO(seg(t,T[s]+.4,T[s]+1)),g=layer('g',null);g.save();g.globalAlpha=a;g.fillStyle='#B0122E';g.beginPath();g.roundRect(120,120,520,110,55);g.fill();g.strokeStyle='#F2D27A';g.lineWidth=5;g.stroke();g.restore();
 g.save();g.globalAlpha=a;goldText(g,'INSCREVA-SE',380,176,52,'Cinzel',900);g.restore();chip(g,380,300,'COMENTE: QUAL OCASIÃO?',easeIO(seg(t,wt(26,'comentários'),wt(26,'comentários')+.4)));blit(ctx,L.g,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=a;ctx.drawImage(LOGO,1640,40,230,220);ctx.restore()}}
const S_=(o)=>(t,c,s)=>talkScene(t,c,s,o);
const SC=[null,
 S_(Object.assign({bottles:[['white',760],['red',1100]],gest:[[0,'rest'],[1.4,'open']],chips:[['PESO DA COMIDA',560,250,wt(1,'comida')],['PESO DO VINHO',1360,250,wt(1,'vinho')]],face:t=>({brow:.6})},MK)),
 S_(Object.assign({bottles:[['white',760],['red',1100]],gest:[[0,'point'],[2.2,'rest']],chips:[['FORTE → ENCORPADO',1360,250,wt(2,'forte')],['LEVE → LEVE',560,250,wt(2,'leve')]],face:t=>({look:t<wt(2,'leve')?.4:-.4})},MK)),
 (t,c,s)=>chapter(t,c,s,'1','O CHURRASCO',''),
 S_({set:backyard,props:BIG(meatBoard,700),bottles:[['red',1100]],gest:[[0,'rest'],[1.2,'open']],chips:[['PICANHA · COSTELA · LINGUIÇA',960,250,wt(4,'picanha')]],face:t=>({mouth:.6})}),
 S_({set:backyard,props:BIG(meatBoard,700),gest:[[0,'rest'],[.5,'bottleUp']],bottleHeld:'red',chips:[['MALBEC',1560,330,wt(5,'malbec')],['CABERNET',1560,450,wt(5,'cabernet')],['TANNAT',1560,570,wt(5,'tannat')]],face:t=>({look:.5,brow:.6})}),
 S_({set:backyard,props:BIG(meatBoard,620),bottles:[['red',1100]],sip:T[6]+1.1,chips:[['O TANINO LIMPA A GORDURA',960,250,wt(6,'tanino')]],face:t=>({mouth:t>T[6]+4.3?.9:.45,laugh:t>T[6]+4.4&&t<T[6]+5.6?1:0})}),
 (t,c,s)=>chapter(t,c,s,'2','PEIXE E FRUTOS DO MAR',''),
 S_({set:beach,props:BIG(fishPlate,700),gest:[[0,'rest'],[.4,'bottleUp']],bottleHeld:'white',chips:[['SAUVIGNON BLANC',1500,360,wt(8,'sauvignon')],['CHARDONNAY',1500,480,wt(8,'chardonnay')]],face:t=>({look:.4,mouth:.6})}),
 S_({set:beach,props:BIG(fishPlate,600),bottles:[['white',1100]],sip:T[9]+.8,wineCol:W_WHITE,chips:[['ACIDEZ = LIMÃO NO PEIXE',960,250,wt(9,'acidez')]],face:t=>({mouth:t>T[9]+3.9?.85:.45})}),
 S_({set:beach,props:BIG(fishPlate,700),bottles:[['rose',1100],['red',1260]],gest:[[0,'thinking'],[2.4,'point']],chips:[['SALMÃO · ATUM',420,300,wt(10,'salmão')],['ROSÉ',1520,300,wt(10,'rosé')],['PINOT NOIR',1520,420,wt(10,'pinot')]],face:t=>({brow:.8,look:.3})}),
 (t,c,s)=>chapter(t,c,s,'3','QUEIJOS E PETISCOS',''),
 S_({set:(x,t)=>drawRoom(x,true,t),props:BIG(cheeseBoard,680),gest:[[0,'rest'],[.4,'bottleUp']],bottleHeld:'spark',chips:[['ESPUMANTE BRUT',1500,360,wt(12,'espumante')],['COMBINA COM QUASE TUDO',1500,480,wt(12,'combina')]],face:t=>({mouth:.7,brow:.5})}),
 S_({set:(x,t)=>drawRoom(x,true,t),props:BIG(cheeseBoard,600),bottles:[['spark',1100]],sip:T[13]+.6,wineCol:W_SPARK,chips:[['AS BOLHAS LIMPAM A BOCA',960,250,wt(13,'bolhas')]],face:t=>({mouth:t>T[13]+3.7?.85:.45})}),
 (t,c,s)=>cheeseCard(t,s),
 (t,c,s)=>chapter(t,c,s,'4','PIZZA E MASSA',''),
 S_({set:barWall,props:BIG(pizzaBoard,680),gest:[[0,'rest'],[.5,'bottleUp']],bottleHeld:'red',chips:[['O TOMATE É ÁCIDO',420,300,wt(16,'tomate')],['MERLOT',1520,360,wt(16,'merlot')],['SANGIOVESE',1520,480,wt(16,'sangiovese')]],face:t=>({mouth:.6,look:.3})}),
 S_({set:(x,t)=>drawRoom(x,false,t),props:BIG(pudim,700),bottles:[['moscato',1100]],gest:[[0,'thinking'],[2.6,'open']],chips:[['O VINHO MAIS DOCE QUE O DOCE',960,250,wt(17,'regra')]],face:t=>({brow:.7,mouth:.55})}),
 S_({set:(x,t)=>drawRoom(x,false,t),props:BIG(pudim,680),gest:[[0,'rest'],[.4,'bottleUp']],bottleHeld:'moscato',chips:[['MOSCATEL',1520,380,wt(18,'moscatel')]],face:t=>({mouth:.85,laugh:t>T[18]+2.6&&t<T[18]+3.8?1:0})}),
 (t,c,s)=>chapter(t,c,s,'NA PRATELEIRA','3 CUIDADOS PARA','NÃO ERRAR'),
 (t,c,s)=>labelCard(t,s),
 (t,c,s)=>lightCard(t,s),
 (t,c,s)=>vintageCard(t,s),
 (t,c,s)=>corkCard(t,s),
 (t,c,s)=>shelf(t,s),
 (t,c,s)=>finalTable(t,s),
 (t,c,s)=>ctaScene(t,c,s),
 null];
const TALKS=[1,2,4,5,6,8,9,10,12,13,16,17,18,26];
FILM={dur:T[T.length-1],cuts:T.map(v=>Math.round(v*30)),fadeIn:0,fadeOut:.8,warm(){return .4},
 cam(s,u,t){if(TALKS.includes(s)){const k=TALKS.indexOf(s)%3;return [{x:lerp(950,975,u),y:lerp(560,545,u),z:lerp(1.18,1.28,easeIO(u)),b:[6,0,0]},{x:lerp(930,915,u),y:lerp(545,520,u),z:lerp(1.42,1.62,easeIO(u)),b:[8,0,0]},{x:lerp(1000,985,u),y:550,z:lerp(1.3,1.4,u),b:[7,0,0]}][k]}return {x:960,y:540,z:1,b:[10,0,0]}},
 draw(t,cam,s,u){if(s==0){thumbFrame(t);return}if(s==27){photo(IMG.logo,t,T[27],T[28],1,1.05);return}SC[s](t,cam,s)},
 plants(){return {}}};
(function(){const DISS={1:.6},xf=mk(),xz=mk(),CARD=[3,7,11,14,15,19,20,21,22,23,24,25],draw0=FILM.draw,cam0=FILM.cam;for(let s=2;s<27;s++)DISS[s]=.5;
 FILM.draw=(t,c,s,u)=>{const d=DISS[s],a=d?1-easeIO(seg(t,T[s],T[s]+d)):0;if(a>0){draw0(t,cam0(s-1,1,t),s-1,1);const x=xf.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0)}
  draw0(t,c,s,u);if(CARD.includes(s)){const k=1+.035*easeIO(u),x=xz.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0);ctx.save();ctx.setTransform(k,0,0,k,W/2*(1-k),H/2*(1-k));ctx.drawImage(xz,0,0);ctx.restore()}
  if(a>0)blit(ctx,xf,0,a);if(s!=0&&s!=26&&s!=27)watermark();if(s!=25&&s!=27)karaoke(t)}})();
// sound
for(let s=1;s<27;s++)say(T[s],[3,7,11,15,19].includes(s)?'line':'whoosh');
for(const [i,w] of [[5,'malbec'],[5,'cabernet'],[5,'tannat'],[8,'sauvignon'],[8,'chardonnay'],[10,'rosé'],[10,'pinot'],[12,'espumante'],[16,'merlot'],[16,'sangiovese'],[18,'moscatel'],[22,'nova']])say(wt(i,w),'tag');
for(const t0 of [T[6]+1.1,T[9]+.8,T[13]+.6]){say(t0+.1,'cloth');say(t0+1.2,'sip');say(t0+3.05,'glassdown')}
for(const w of ['churrasco','peixe','petiscos','pizza','sobremesa'])say(wt(25,w)-.15,'line');
