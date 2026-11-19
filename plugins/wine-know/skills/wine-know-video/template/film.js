// STARTER FILM — Wine Know / Dark Divino. Copy the scene patterns, then write one scene per narration line.
// Scene lengths: paste LEN from scripts/plan_timing.py. Scene i shows narration line i.
const LEN=[4.5,6,6,7,2.7],T=sceneStarts(LEN);
const GREST=[860,812];
const SIP_T0=()=>T[1]+1.2,SIPK=sipKeys(GREST[0],GREST[1]);
function glassAt(t){return keyed(t,SIP_T0(),SIPK)||{b:GREST.slice(),a:0}}
const tipAmt=t=>clamp(glassAt(t).a/.95);
FILM={dur:T[T.length-1],cuts:T.map(v=>Math.round(v*30)),fadeIn:.3,fadeOut:.8,warm(){return .4},
 cam(s,u,t){return [
  {x:960,y:540,z:1,b:[0,0,0]},                                                     // 0 thumbnail
  {x:lerp(940,920,u),y:lerp(560,535,u),z:lerp(1.3,1.55,easeIO(u)),b:[7,0,0]},       // 1 Sommelier, slow push-in (never cut straight to a tight close)
  {x:960,y:540,z:1,b:[10,0,0]},                                                    // 2 info card over a blurred set
  {x:960,y:540,z:1,b:[12,0,0]},                                                    // 3 final table (no subtitles)
  {x:960,y:540,z:1,b:[0,0,0]}][s]},                                                // 4 logo + "Wine Know. Dark Divino."
 draw(t,cam,s){
  if(s==0){photo(IMG.thumb,t,0,T[1],1,1.07);return}
  if(s==4){photo(IMG.logo,t,T[4],T[5],1,1.05);return}
  if(s==1){const x=layer('w',cam);barWall(x,t);                                     // pick the set that fits the topic: barWall, cellarWall, drawRoom...
   const g=glassAt(t),k=tipAmt(t);
   const p=sommPose(t,{look:-.2,mouth:kf(t,[[T[1],.5],[SIP_T0()+1.2,.1],[SIP_T0()+3.3,.8]]),blink:k>.7?1:blinkAt(t,[T[1]+.8]),tilt:-k*.1,headX:-k*6,headY:-k*4,lookY:-k*.4});
   // hands are [ [worldX,worldY], depthZ ]: z>0 brings the hand toward camera, elbows stay down
   setHands(p,[gripOf(g),70+clamp((812-g.b[1])/182)*95],[[1086,706],50]);const hp=sommActor(cam,p);
   const f=layer('f',cam);cellarTable(f);candle(f,560,830,80,t);bottleL(f,[1100,815],1,'mid');glassT(f,g,.42,CEL.wine,t);
   const hl=h2w(hp,'l'),hr=h2w(hp,'r');gripHand(f,hl[0],hl[1],g.a,C10,.85);gripHand(f,hr[0],hr[1],0,C10,.85);
   comp([['w',cam.b[0]],['h'],['f']]);tip_('1. DICA NUMERADA',win(t,T[1]+.2,T[2]-.1));return}
  if(s==2){const x=layer('w',cam);cellarWall(x,t);comp([['w',10]]);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='rgba(20,6,10,.72)';ctx.fillRect(0,0,W,H);ctx.restore();
   const g=layer('g',null);goldText(g,'TÍTULO DO CARTÃO',960,230,62);ornament(g,960,300,560);chip(g,960,520,'PALAVRA-CHAVE',ease(seg(t,T[2]+.6,T[2]+1)));blit(ctx,L.g,0,seg(t,T[2],T[2]+.4));return}
  if(s==3){const x=layer('w',cam);cellarWall(x,t);comp([['w',12]]);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='rgba(20,6,10,.74)';ctx.fillRect(0,0,W,H);ctx.restore();
   const g=layer('g',null);goldText(g,'A RESPOSTA',960,150,84);ornament(g,960,240,620);blit(ctx,L.g,0,seg(t,T[3],T[3]+.5));
   for(const [cx,n,d,kind,ta] of [[480,'CASO 1','resposta','cheap',T[3]+.6],[960,'CASO 2','resposta','mid',T[3]+1.3],[1440,'CASO 3','resposta','exp',T[3]+2]]){const c=layer('c'+cx,null);plaque(c,cx,600,400,500);bottleL(c,[cx,690],.95,kind);goldText(c,n,cx,750,34,'Cinzel',700);blit(ctx,L['c'+cx],0,seg(t,ta,ta+.5));serif(d,cx,808,48,`rgba(243,230,200,${seg(t,ta,ta+.5)})`)}
   return}},
 plants(){return {}}};
installFinish(T,{2:.5,3:.5},3);                                                     // dissolves; subtitles stop at the final table
say(T[1],'whoosh');say(SIP_T0()+.1,'cloth');say(SIP_T0()+1.2,'sip');say(SIP_T0()+3.05,'glassdown');say(T[2],'whoosh');say(T[3],'whoosh');
