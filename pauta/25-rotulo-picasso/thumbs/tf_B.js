// 25 · Opção B (ESPELHADA: texto à direita) — PICASSO / NO RÓTULO? — galeria à noite; acima do título, o quadro "1973" (taças e uvas estilizadas,
// a homenagem); o Sommelier mostra a garrafa de rótulo artístico pelo gargalo e aponta o pincel com tinta, sobrancelha erguida
function thumbFrame(t){const S_=1.1;
 thumbTH(t,{right:true,set:(x,t)=>gallery(x,t,{frames:[[1100,300,140,180,'bacc','1973'],[1840,272,110,140,'dots']]}),blur:2.5,dim:.28,cam:{x:1577,y:500,z:1.7},
 hl:[[1168,620],90],hr:[[1494,650],90],look:.1,face:{brow:1.6,wide:.7,sad:.1,open:.15,mouth:.25,tilt:.06},
 l1:'PICASSO',l2:'NO RÓTULO?',s1:130,s2:130,
 front:(f,hl,hr)=>{cellarTable(f);artBottle(f,hl[0],hl[1]+204*S_,S_,'bacc');gripHand(f,hl[0],hl[1],0,C10,.85);
  brush(f,hr[0],hr[1]-10,1.1,.28);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
