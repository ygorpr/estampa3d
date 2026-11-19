// Thumbnail: 2 lines of text, one focal face, price contrast, real Wine Know seal
FILM={dur:1,cuts:[0,30],fadeIn:0,fadeOut:0,cam(){return {x:1080,y:500,z:1.7,b:[10,0,0]}},warm(){return .6},
 draw(t,cam){let x=layer('w',cam);cellarWall(x,0);
  const p={x:1330,y:600,s:1,face:1,noLegs:true,breath:1,look:-.45,lookY:-.15,brow:1.1,wide:1,sad:.15,mouth:.05,open:.5,tilt:-.08,hands:{},arm3d:true};
  p.hands.l=[...w2l(p,[1190,640]),110];p.hands.r=[...w2l(p,[1470,640]),90];const hp=actor(layer('h',cam),'s',C10,p,cam,'rgba(255,190,110,1)',1);
  const f=layer('f',cam);cellarTable(f);bottleL(f,[1190,760],1,'exp');
  const hl=h2w(hp,'l'),hr=h2w(hp,'r');gripHand(f,hl[0],hl[1],0,C10,.85);openHand(f,hr[0],hr[1],.5,C10,.85);
  comp([['w',10],['h'],['f']]);ctx.save();ctx.setTransform(1,0,0,1,0,0);
  const v=ctx.createLinearGradient(0,0,W*.62,0);v.addColorStop(0,'rgba(16,3,7,.92)');v.addColorStop(.75,'rgba(16,3,7,.55)');v.addColorStop(1,'rgba(16,3,7,0)');ctx.fillStyle=v;ctx.fillRect(0,0,W,H);
  const r=ctx.createRadialGradient(1380,430,40,1380,430,560);r.addColorStop(0,'rgba(255,190,110,.18)');r.addColorStop(1,'rgba(255,190,110,0)');ctx.fillStyle=r;ctx.fillRect(0,0,W,H);ctx.restore();
  const T_=layer('t',null);goldText(T_,'VINHO CARO',545,400,124,'Cinzel',900);goldText(T_,'VALE A PENA?',545,570,106,'Cinzel',900);
  T_.fillStyle='#B0122E';T_.fillRect(205,645,680,10);blit(ctx,L.t,0);
  if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.drawImage(LOGO,1640,30,240,230);ctx.restore()}},plants(){return {}}};
