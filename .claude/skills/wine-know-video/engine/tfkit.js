// tfkit — molde comum da thumb viva (thumbFrame(0) = thumb). Mesmo enquadramento dos vídeos 9–11.
// o: set(x,t) fundo · back(h,t) atrás do Sommelier · hl/hr alvo das mãos (mundo, z) · face{} · front(f,hl,hr,hp,t) objetos e mãos
//    l1/l2 textos (s1/s2 tamanho máx.) · cam{} opcional · dim (0..1) véu do fundo
//    right:true = ESPELHADA: Sommelier à esquerda, texto à direita (câmera em x≈1577, véu vindo da direita)
//    txtA opcional: opacidade do título/selo (abertura viva: some entre 1,4 e 2,4 s)
//    over(T,t) opcional: desenha por cima do véu (no espaço da tela) — ex.: rolha voando
function fitSize(txt,max,maxW){const c=document.createElement('canvas').getContext('2d');c.font=`900 100px Cinzel`;const w=c.measureText(txt).width;return Math.min(max,Math.floor(maxW/w*100))}
function thumbTH(t,o){const R=!!o.right,sg=R?-1:1,u=easeIO(seg(t,.6,LEN[0])),c0=o.cam||(R?{x:1577,y:500,z:1.7}:{x:1080,y:500,z:1.7}),cam={x:c0.x+sg*u*10,y:c0.y-u*6,z:c0.z+u*.07,b:[6,0,0]};
 let x=layer('w',cam);o.set(x,t);
 const live=t>0,sp=live?speak(t):0,wv=live?Math.sin(t*2.4)*.5+.5:0,lk0=o.look!=null?o.look:-.45*sg,lk=live?kf(t,[[0,lk0],[2.5,lk0],[3,.4*sg],[5.5,.4*sg],[6,lk0]]):lk0;
 const p=Object.assign({x:1330,y:600,s:1,face:1,noLegs:true,breath:1+(live?t*2.1:0),look:lk,lookY:-.2,brow:1.15,wide:1,sad:.25,mouth:.05,open:Math.max(.5-(live?seg(t,.3,.5)*.5:0),sp),tilt:-.08*sg+(live?Math.sin(t*1.2)*.02:0),blink:live?blinkAt(t,[1.4,3.9,6.6]):0,hands:{},arm3d:true},o.face||{});
 const hl=o.hl,hr=o.hr;p.hands.l=[...w2l(p,hl[0]),hl[1]];p.hands.r=[...w2l(p,[hr[0][0],hr[0][1]-(o.wave?wv*10:0)]),hr[1]];
 const h=layer('h',cam);if(o.back)o.back(h,t);const hp=actor(h,'s',C10,p,cam,R?'rgba(255,200,150,1)':'rgba(255,220,180,1)',sg);
 const f=layer('f',cam);o.front(f,h2w(hp,'l'),h2w(hp,'r'),hp,t);
 comp([['w',o.blur!=null?o.blur:10]]);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle=`rgba(16,3,7,${o.dim!=null?o.dim:.42})`;ctx.fillRect(0,0,W,H);ctx.restore();blit(ctx,L.h,0);blit(ctx,L.f,0);
 ctx.save();ctx.setTransform(1,0,0,1,0,0);const v=R?ctx.createLinearGradient(W,0,W*.38,0):ctx.createLinearGradient(0,0,W*.62,0);v.addColorStop(0,'rgba(16,3,7,.92)');v.addColorStop(.75,'rgba(16,3,7,.42)');v.addColorStop(1,'rgba(16,3,7,0)');ctx.fillStyle=v;ctx.fillRect(0,0,W,H);ctx.restore();
 if(o.over){ctx.save();ctx.setTransform(1,0,0,1,0,0);o.over(ctx,t,cam);ctx.restore()}
 const TX=R?W-545:545,T_=layer('t',null),s1=fitSize(o.l1,o.s1||90,740),s2=fitSize(o.l2,o.s2||124,740);
 const y2=598-s2/2;goldText(T_,o.l1,TX,y2-s2/2-14-s1/2,s1,'Cinzel',900);goldText(T_,o.l2,TX,y2,s2,'Cinzel',900);T_.fillStyle='#B0122E';T_.fillRect(TX-340,645,680,10);const tA=o.txtA==null?1:o.txtA;blit(ctx,L.t,0,tA);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.85*tA;ctx.drawImage(LOGO,TX-62,680,124,119);ctx.restore()}}
