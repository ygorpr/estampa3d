// DE ONDE VEM A PALAVRA SOMMELIER? — abertura = thumbnail viva (castelo do rei da França; burro de carga ao lado)
const THUMB_TXT={A:['DE ONDE VEM','A PALAVRA SOMMELIER?'],B:['SOMMELIER VEM','DE UM BURRO?'],C:['SOMMELIER:','A ORIGEM']};
function fitGold(g,txt,cx,cy,maxW,maxS){g.save();g.font=`900 100px Cinzel`;const w=g.measureText(txt).width;g.restore();goldText(g,txt,cx,cy,Math.min(maxS,Math.floor(100*maxW/w)),'Cinzel',900)}
function thumbFrame(t){const u=easeIO(seg(t,.6,LEN[0])),cam={x:1110+u*10,y:520-u*6,z:1.55+u*.07,b:[6,0,0]};
 let x=layer('w',cam);castleHall(x,t);
 const live=t>0,sp=live?speak(t):0,wv=live?Math.sin(t*2.4)*.5+.5:0,lk=live?kf(t,[[0,-.45],[2.5,-.45],[3,.45],[4.6,.45],[5.2,-.45]]):-.45;
 const dk=layer('d',cam);donkey(dk,1855,835,.84,t,{face:-1,load:'baskets',nod:live?kf(t,[[0,0],[4.2,0],[4.6,.06],[5.2,0]]):0,blink:[2.2]});
 const p={x:1330,y:600,s:1,face:1,noLegs:true,breath:1+(live?t*2.1:0),look:lk,lookY:-.2,brow:1.15,wide:1,sad:.25,mouth:.05,open:Math.max(.5-(live?seg(t,.3,.5)*.5:0),sp),tilt:-.08+(live?Math.sin(t*1.2)*.02:0),blink:live?blinkAt(t,[1.4,3.9,6.6]):0,hands:{},arm3d:true};
 const wave=live?kf(t,[[0,0],[3.6,0],[4.1,1],[5.6,1],[6.1,0]]):0;
 p.hands.l=[...w2l(p,[1212,552]),90];p.hands.r=[...w2l(p,[lerp(1452,1462,wave),lerp(625,600,wave)]),lerp(80,110,wave)];const hp=actor(layer('h',cam),'s',C10,p,cam,'rgba(255,220,180,1)',1);
 const f=layer('f',cam);castleTable(f);const hl=h2w(hp,'l'),hr=h2w(hp,'r');bottleS(f,[hl[0],hl[1]+250],1,'red');gripHand(f,hl[0],hl[1],0,C10,.85);openHand(f,hr[0],hr[1],.55+wave*.25,C10,.85);
 comp([['w',8]]);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='rgba(16,3,7,.38)';ctx.fillRect(0,0,W,H);ctx.restore();blit(ctx,L.d,1.2,.92);blit(ctx,L.h,0);blit(ctx,L.f,0);
 ctx.save();ctx.setTransform(1,0,0,1,0,0);const v=ctx.createLinearGradient(0,0,W*.62,0);v.addColorStop(0,'rgba(16,3,7,.92)');v.addColorStop(.75,'rgba(16,3,7,.42)');v.addColorStop(1,'rgba(16,3,7,0)');ctx.fillStyle=v;ctx.fillRect(0,0,W,H);ctx.restore();
 const T_=layer('t',null),tx=THUMB_TXT[(typeof THUMB_OPT!='undefined'&&THUMB_OPT)||'A'];fitGold(T_,tx[0],500,385,880,124);fitGold(T_,tx[1],500,525,880,124);T_.fillStyle='#B0122E';T_.fillRect(160,630,680,10);blit(ctx,L.t,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.85;ctx.drawImage(LOGO,500-62,664,124,119);ctx.restore()}}
