// 33 · Opção B (ESCOLHIDA, espelhada: texto à direita) — PRA QUE SERVE / A GAIOLINHA? — adega de espumante no giz com o poço de luz.
// thumbFrame(0) = thumb B idêntica. ABERTURA VIVA: já em 0,5 s ele traz a garrafa (pelo gargalo) para perto do rosto e a gira de leve,
// mostrando a gaiolinha (a argolinha balança); o título some entre 1,4 e 2,4 s; depois aponta a gaiolinha com a flûte. Câmera aproxima.
function thumbFrame(t){const S_=1.6;
 const hx=kf(t,[[0,1150],[.5,1150],[1.2,1182],[4.4,1182],[5.2,1170],[99,1170]]),hy=kf(t,[[0,610],[.5,610],[1.2,575],[4.4,575],[5.2,595],[99,595]]),
  rot=kf(t,[[0,0],[1.2,0],[1.6,-.06],[2.1,.05],[2.6,-.04],[3,0]]),loop=kf(t,[[0,-.4],[1.3,-.4],[1.8,.5],[2.3,-.3],[2.8,.4],[3.3,-.4]]),
  gx=kf(t,[[0,1490],[3.4,1490],[4,1450],[5.6,1450],[6.2,1490]]),gy=kf(t,[[0,640],[3.4,640],[4,600],[5.6,600],[6.2,640]]);
 thumbTH(t,{right:true,set:(x,t)=>cavaGiz(x,t,{well:1500,niches:[880,1320,2160,2600],lamps:[1100,2300]}),blur:3,dim:.3,cam:{x:1577,y:500,z:1.7},
 hl:[[hx,hy],90],hr:[[gx,gy],100],look:-.45,face:{lookY:-.35,brow:1.5,wide:.9,sad:.1,open:.12,mouth:.25,tilt:-.04},txtA:1-easeIO(seg(t,1.4,2.4)),
 l1:'PRA QUE SERVE',l2:'A GAIOLINHA?',s1:104,s2:118,
 front:(f,hl,hr)=>{cellarTable(f);const by=hl[1]+232*S_;f.save();f.translate(hl[0],hl[1]);f.rotate(rot);f.translate(-hl[0],-hl[1]);gaiolaBottle(f,hl[0],by,S_,0,{loop});gripHand(f,hl[0],hl[1],0,C10,.85);f.restore();
  glassW(f,hr[0],hr[1]+44,1.05,.75,'rgba(242,210,122,.75)',true);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
