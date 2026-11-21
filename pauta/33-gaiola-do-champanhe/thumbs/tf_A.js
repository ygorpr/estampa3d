// 33 · Opção A — POR QUE O CHAMPANHE / TEM GAIOLINHA? — adega de espumante cavada no giz, com o feixe do poço de luz e nichos de garrafas;
// o Sommelier ergue a garrafa pelo gargalo (rótulo livre) com a gaiolinha de arame e a plaquinha dourada à mostra;
// na outra mão, uma gaiolinha solta entre os dedos; sobrancelha erguida de curiosidade
function thumbFrame(t){const S_=1.55;
 thumbTH(t,{set:(x,t)=>cavaGiz(x,t,{well:1240,niches:[300,760,1640,2080]}),blur:3,dim:.3,cam:{x:1080,y:500,z:1.7},
 hl:[[1160,610],90],hr:[[1500,600],80],look:.3,face:{brow:1.6,wide:.9,sad:0,open:.25,mouth:.3},
 l1:'POR QUE O CHAMPANHE',l2:'TEM GAIOLINHA?',s1:66,s2:100,
 front:(f,hl,hr)=>{cellarTable(f);gaiolaBottle(f,hr[0],hr[1]+232*S_,S_,0,{loop:.5});gripHand(f,hr[0],hr[1],0,C10,.85);
  looseMuselet(f,hl[0]+4,hl[1]-34,2.1,-.08);gripHand(f,hl[0],hl[1],0,C10,.85)}})}
