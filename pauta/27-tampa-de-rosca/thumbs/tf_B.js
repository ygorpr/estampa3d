// 27 · Opção B (ESPELHADA: texto à direita) — ROLHA OU / ROSCA? — bar com adega envidraçada (rolha deitada × rosca em pé);
// o duelo nas mãos: a rolha de cortiça numa mão, a garrafa de rosca erguida pelo gargalo na outra (rótulo livre), o Sommelier olha para quem assiste em dúvida
function thumbFrame(t){const S_=1.1;
 thumbTH(t,{right:true,set:(x,t)=>barAdega(x,t,{split:1330,lamps:[1000,1900]}),blur:3,dim:.3,cam:{x:1577,y:500,z:1.7},
 hl:[[1168,640],90],hr:[[1490,600],90],look:.1,face:{brow:1.55,wide:.7,sad:.15,open:.15,mouth:.2,tilt:.06},
 l1:'ROLHA OU',l2:'ROSCA?',s1:110,s2:150,
 front:(f,hl,hr)=>{cellarTable(f);corkHeld(f,hl[0],hl[1]-62,1.05,-.08);gripHand(f,hl[0],hl[1],0,C10,.85);
  screwBottle(f,hr[0],hr[1]+204*S_,S_,0);twistArrow(f,hr[0],hr[1]-66*S_,S_);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
