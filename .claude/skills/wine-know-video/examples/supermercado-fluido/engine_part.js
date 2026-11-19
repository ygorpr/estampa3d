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
function shelf(t,s){veil(null,t,marketWall,.7);const tm=wt(20,'meio'),u=easeIO(seg(t,tm-.2,tm+.5)),g=layer('g',null);const sg=g.createLinearGradient(0,150,0,820);sg.addColorStop(0,`rgba(255,200,120,${.45*u})`);sg.addColorStop(1,'rgba(255,200,120,0)');g.fillStyle=sg;g.beginPath();g.moveTo(900,120);g.lineTo(1020,120);g.lineTo(1180,820);g.lineTo(740,820);g.closePath();g.fill();
 g.fillStyle='#5A2E1C';g.fillRect(360,800,1200,26);bottleL(g,[600,800],1.2,'cheap');bottleL(g,[960,800],1.2+.08*u,'mid');bottleL(g,[1320,800],1.2,'exp');priceTag(g,600,330,'R$ 30',1,.8);priceTag(g,960,330,'R$ 90',1,.8+.15*u);priceTag(g,1320,330,'R$ 400',1,.8);blit(ctx,L.g,0);tip_('A FAIXA DO MEIO',win(t,T[s]+.2,T[s+1]-.1))}
