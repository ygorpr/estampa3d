// 14 PODE COLOCAR GELO NO VINHO? — opção A: pedra de gelo sobre a taça no balcão do bar de praia — abertura = thumbnail viva
function thumbFrame(t){const u=easeIO(seg(t,.6,LEN[0])),cam={x:1080+u*10,y:500-u*6,z:1.7+u*.07,b:[6,0,0]};
 let x=layer('w',cam);beachBar(x,t);
 const live=t>0,sp=live?speak(t):0,lk=live?kf(t,[[0,-.45],[2.5,-.45],[3,.4],[5.5,.4],[6,-.45]]):-.45,dip=live?kf(t,[[0,0],[2,0],[2.6,14],[3.4,14],[4,0]]):0;
 const p={x:1330,y:600,s:1,face:1,noLegs:true,breath:1+(live?t*2.1:0),look:lk,lookY:-.1,brow:1.15,wide:1,sad:.25,mouth:.05,open:Math.max(.5-(live?seg(t,.3,.5)*.5:0),sp),tilt:-.08+(live?Math.sin(t*1.2)*.02:0),blink:live?blinkAt(t,[1.4,3.9,6.6]):0,hands:{},arm3d:true};
 p.hands.l=[...w2l(p,[1150,452+dip]),95];p.hands.r=[...w2l(p,[1500,615]),60];const hp=actor(layer('h',cam),'s',C10,p,cam,'rgba(255,200,150,1)',1);
 const f=layer('f',cam);beachCounter(f);const hl=h2w(hp,'l'),hr=h2w(hp,'r');
 piscineGlass(f,1150,800,1.3,.6,0);pinchIce(f,hl[0],hl[1],C10,.85,1.5);
 sweatBucket(f,1530,800,.86);gripHand(f,hr[0],hr[1],0,C10,.85);
 comp([['w',10]]);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='rgba(16,3,7,.30)';ctx.fillRect(0,0,W,H);ctx.restore();blit(ctx,L.h,0);blit(ctx,L.f,0);
 ctx.save();ctx.setTransform(1,0,0,1,0,0);const v=ctx.createLinearGradient(0,0,W*.62,0);v.addColorStop(0,'rgba(16,3,7,.92)');v.addColorStop(.75,'rgba(16,3,7,.42)');v.addColorStop(1,'rgba(16,3,7,0)');ctx.fillStyle=v;ctx.fillRect(0,0,W,H);ctx.restore();
 const T_=layer('t',null);goldText(T_,'GELO NO VINHO:',530,430,78,'Cinzel',900);goldText(T_,'PODE?',530,540,124,'Cinzel',900);T_.fillStyle='#B0122E';T_.fillRect(205,645,680,10);blit(ctx,L.t,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.85;ctx.drawImage(LOGO,545-62,680,124,119);ctx.restore()}}
