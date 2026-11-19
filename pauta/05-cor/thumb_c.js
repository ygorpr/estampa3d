// POR QUE A GARRAFA É VERDE OU ESCURA? — abertura = thumbnail viva
function thumbFrame(t){const u=easeIO(seg(t,.6,LEN[0])),cam={x:1080+u*10,y:500-u*6,z:1.7+u*.07,b:[6,0,0]};
 let x=layer('w',cam);cellarWall(x,t);rack(x,560,230,330,560);rack(x,1500,230,330,560);barrelSide(x,1720,820,.8,.95);
 const live=t>0,sp=live?speak(t):0,wv=live?Math.sin(t*2.4)*.5+.5:0,lk=live?kf(t,[[0,-.45],[2.5,-.45],[3,.4],[5.5,.4],[6,-.45]]):-.45;
 const p={x:1330,y:600,s:1,face:1,noLegs:true,breath:1+(live?t*2.1:0),look:lk,lookY:-.2,brow:1.15,wide:1,sad:.25,mouth:.05,open:Math.max(.5-(live?seg(t,.3,.5)*.5:0),sp),tilt:-.08+(live?Math.sin(t*1.2)*.02:0),blink:live?blinkAt(t,[1.4,3.9,6.6]):0,hands:{},arm3d:true};
 p.hands.l=[...w2l(p,[1175,552]),120];p.hands.r=[...w2l(p,[1480,560-wv*10]),90];const hp=actor(layer('h',cam),'s',C10,p,cam,'rgba(255,220,180,1)',1);
 const f=layer('f',cam);cellarTable(f);const hl=h2w(hp,'l'),hr=h2w(hp,'r');bottleS(f,[1585,815],.95,'clear');bottleS(f,[hl[0],hl[1]+250],1,'red');gripHand(f,hl[0],hl[1],0,C10,.85);openHand(f,hr[0],hr[1],.5,C10,.85);
 comp([['w',10]]);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='rgba(16,3,7,.42)';ctx.fillRect(0,0,W,H);ctx.restore();blit(ctx,L.h,0);blit(ctx,L.f,0);
 ctx.save();ctx.setTransform(1,0,0,1,0,0);const v=ctx.createLinearGradient(0,0,W*.62,0);v.addColorStop(0,'rgba(16,3,7,.92)');v.addColorStop(.75,'rgba(16,3,7,.42)');v.addColorStop(1,'rgba(16,3,7,0)');ctx.fillStyle=v;ctx.fillRect(0,0,W,H);ctx.restore();
 const T_=layer('t',null);goldText(T_,'POR QUE A GARRAFA',545,416,65,'Cinzel',900);goldText(T_,'É VERDE?',545,528,124,'Cinzel',900);T_.fillStyle='#B0122E';T_.fillRect(205,645,680,10);blit(ctx,L.t,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.85;ctx.drawImage(LOGO,545-62,680,124,119);ctx.restore()}}
