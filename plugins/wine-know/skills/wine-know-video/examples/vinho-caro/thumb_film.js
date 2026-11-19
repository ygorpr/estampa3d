FILM={dur:1,cuts:[0,30],fadeIn:0,fadeOut:0,cam(){return {x:1000,y:560,z:1.25,b:[7,0,0]}},warm(){return .55},
 draw(t,cam){let x=layer('w',cam);cellarWall(x,0);
  const h=layer('h',cam);const p={x:1330,y:600,s:1,face:1,noLegs:true,breath:1,look:-.5,lookY:-.1,brow:1,wide:.7,sad:.2,mouth:.1,open:.3,tilt:-.05,hands:{},arm3d:true};
  p.hands.l=[...w2l(p,[1200,680]),90];p.hands.r=[...w2l(p,[1470,700]),60];const hp=actor(h,'s',C10,p,cam,'rgba(255,180,94,1)',1);
  const f=layer('f',cam);cellarTable(f);candle(f,1700,830,100,0);bottleL(f,[1200,790],1,'exp');bottleL(f,[1490,815],1,'cheap');
  const hl=h2w(hp,'l');gripHand(f,hl[0],hl[1],0,C10,.85);const hr=h2w(hp,'r');gripHand(f,hr[0],hr[1],0,C10,.85);priceTag(f,1200,400,'R$ 500',1,1.1);priceTag(f,1650,560,'R$ 50',1,.85);
  comp([['w',7],['h'],['f']]);ctx.save();ctx.setTransform(1,0,0,1,0,0);const v=ctx.createLinearGradient(0,0,W*.6,0);v.addColorStop(0,'rgba(18,4,8,.75)');v.addColorStop(1,'rgba(18,4,8,0)');ctx.fillStyle=v;ctx.fillRect(0,0,W,H);ctx.restore();
  const T_=layer('t',null);bigPlaque(T_,470,560,800,700);grapes(T_,470,240,1.2);goldText(T_,'VINHO CARO',470,450,96,'Cinzel',900);goldText(T_,'VALE A',470,600,128,'Cinzel',900);goldText(T_,'PENA?',470,750,150,'Cinzel',900);
  T_.save();T_.translate(1760,150);let gg=T_.createRadialGradient(0,0,10,0,0,120);gg.addColorStop(0,'#5A1020');gg.addColorStop(1,'#2A0610');T_.fillStyle=gg;T_.beginPath();T_.arc(0,0,128,0,7);T_.fill();T_.strokeStyle='#E2B456';T_.lineWidth=8;T_.stroke();T_.restore();
  goldText(T_,'WINE',1760,120,40,'Cinzel',900);goldText(T_,'KNOW',1760,164,40,'Cinzel',900);blit(ctx,L.t,0);serif('DARK DIVINO',1760,206,22,'#D4A24C')},plants(){return {}}};
