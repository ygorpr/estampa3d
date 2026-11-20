// 22 · Opção A — POR QUE A GENTE / GIRA O VINHO? — bar Dark Divino; o Sommelier gira a taça pela haste (vinho em onda inclinada,
// sempre dentro do bojo, película no vidro, fiozinhos de aroma), olha para quem assiste com a sobrancelha erguida;
// a outra mão segura a garrafa pelo gargalo (rótulo livre)
function thumbFrame(t){const G=1.0;
 thumbTH(t,{set:(x,t)=>barDD(x,t),blur:3,dim:.3,cam:{x:1080,y:500,z:1.7},
 hl:[[1165,672],100],hr:[[1488,610],80],look:-.15,face:{brow:1.55,wide:.7,sad:0,open:.25,mouth:.35},
 l1:'POR QUE A GENTE',l2:'GIRA O VINHO?',s1:90,s2:116,
 front:(f,hl,hr)=>{cellarTable(f);wineBottle(f,1488,830,.95,true);gripHand(f,hr[0],hr[1],0,C10,.85);
  const bx=hl[0],by=hl[1]+46*G;swirlTrail(f,bx,by,G,1,1);swirlGlass(f,bx,by,G,0,1);aromaWisps(f,bx,by,G,0,3,.35);gripHand(f,hl[0],hl[1],0,C10,.85)}})}
