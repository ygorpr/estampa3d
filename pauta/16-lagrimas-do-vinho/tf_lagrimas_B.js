// 16 AS "LÁGRIMAS" DO VINHO — opção B: mais perto; o Sommelier desconfia das gotas da taça ("são qualidade?") — abertura = thumbnail viva
function thumbFrame(t){const u=easeIO(seg(t,.6,LEN[0])),cam={x:1100+u*10,y:480-u*6,z:1.95+u*.07,b:[6,0,0]};
 let x=layer('w',cam);barWall(x,t);
 const live=t>0,sp=live?speak(t):0,lk=live?kf(t,[[0,-.6],[2.5,-.6],[3,.4],[5.5,.4],[6,-.6]]):-.6,sw=live?Math.sin(t*5)*6*(1-seg(t,1.5,2.2)):0;
 const p={x:1330,y:600,s:1,face:1,noLegs:true,breath:1+(live?t*2.1:0),look:lk,lookY:-.45,brow:1.35,wide:.85,sad:.05,mouth:.05,open:Math.max(.3-(live?seg(t,.3,.5)*.3:0),sp),tilt:-.12+(live?Math.sin(t*1.2)*.02:0),blink:live?blinkAt(t,[1.4,3.9,6.6]):0,hands:{},arm3d:true};
 p.hands.l=[...w2l(p,[1145+sw,560]),95];p.hands.r=[...w2l(p,[1525,585]),60];const hp=actor(layer('h',cam),'s',C10,p,cam,'rgba(255,220,180,1)',1);
 const f=layer('f',cam);barCounterL(f);const hl=h2w(hp,'l'),hr=h2w(hp,'r');tearGlass(f,hl[0],hl[1]+48,1.6,.28,'#6E1630',4);gripHand(f,hl[0],hl[1],0,C10,.85);
 bottleS(f,[hr[0],800],1,'red');gripHand(f,hr[0],hr[1],0,C10,.85);
 comp([['w',10]]);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='rgba(16,3,7,.42)';ctx.fillRect(0,0,W,H);ctx.restore();blit(ctx,L.h,0);blit(ctx,L.f,0);
 ctx.save();ctx.setTransform(1,0,0,1,0,0);const v=ctx.createLinearGradient(0,0,W*.6,0);v.addColorStop(0,'rgba(16,3,7,.92)');v.addColorStop(.75,'rgba(16,3,7,.45)');v.addColorStop(1,'rgba(16,3,7,0)');ctx.fillStyle=v;ctx.fillRect(0,0,W,H);ctx.restore();
 const T_=layer('t',null);goldText(T_,'ESSAS GOTAS',470,425,96,'Cinzel',900);goldText(T_,'SÃO QUALIDADE?',470,535,72,'Cinzel',900);T_.fillStyle='#B0122E';T_.fillRect(140,645,660,10);blit(ctx,L.t,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.85;ctx.drawImage(LOGO,470-62,680,124,119);ctx.restore()}}
