// 14 PODE COLOCAR GELO NO VINHO? — opção C (espelhada): Sommelier à esquerda ergue a "piscine" (espumante com gelo); texto à direita — abertura = thumbnail viva
function thumbFrame(t){const u=easeIO(seg(t,.6,LEN[0])),cam={x:1577-u*10,y:500-u*6,z:1.7+u*.07,b:[6,0,0]};
 let x=layer('w',cam);beachBar(x,t,{palms:[[1120,720,.62,-.9]],posts:[960,2300],sunX:1300});
 const live=t>0,sp=live?speak(t):0,lk=live?kf(t,[[0,.45],[2.5,.45],[3,-.3],[5.5,-.3],[6,.45]]):.45;
 const p={x:1330,y:600,s:1,face:1,noLegs:true,breath:1+(live?t*2.1:0),look:lk,lookY:-.2,brow:1.15,wide:1,sad:.1,mouth:.05,open:Math.max(.5-(live?seg(t,.3,.5)*.5:0),sp),tilt:.07+(live?Math.sin(t*1.2)*.02:0),blink:live?blinkAt(t,[1.4,3.9,6.6]):0,hands:{},arm3d:true};
 p.hands.l=[...w2l(p,[1165,615]),60];p.hands.r=[...w2l(p,[1490,560]),90];const hp=actor(layer('h',cam),'s',C10,p,cam,'rgba(255,200,150,1)',-1);
 const f=layer('f',cam);beachCounter(f);const hl=h2w(hp,'l'),hr=h2w(hp,'r');sweatBucket(f,1130,800,.86,11);gripHand(f,hl[0],hl[1],0,C10,.85);piscineGlass(f,hr[0],hr[1]+48,1.3,.6,3,3);gripHand(f,hr[0],hr[1],0,C10,.85);
 comp([['w',10]]);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='rgba(16,3,7,.30)';ctx.fillRect(0,0,W,H);ctx.restore();blit(ctx,L.h,0);blit(ctx,L.f,0);
 ctx.save();ctx.setTransform(1,0,0,1,0,0);const v=ctx.createLinearGradient(W,0,W*.38,0);v.addColorStop(0,'rgba(16,3,7,.92)');v.addColorStop(.75,'rgba(16,3,7,.42)');v.addColorStop(1,'rgba(16,3,7,0)');ctx.fillStyle=v;ctx.fillRect(0,0,W,H);ctx.restore();
 const T_=layer('t',null);goldText(T_,'VINHO COM GELO?',1440,430,76,'Cinzel',900);goldText(T_,'NA FRANÇA, PODE!',1440,540,76,'Cinzel',900);T_.fillStyle='#B0122E';T_.fillRect(1100,645,680,10);blit(ctx,L.t,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.85;ctx.drawImage(LOGO,1440-62,680,124,119);ctx.restore()}}
