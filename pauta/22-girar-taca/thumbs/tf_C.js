// 22 · Opção C — O VINHO FAZ / UMA ONDA! — bar Dark Divino; taça um pouco maior, girando forte: a onda sobe pela parede e corre em volta
// (sempre dentro do bojo, recortada no vidro); o Sommelier olha para a taça, olhos arregalados de surpresa; a outra mão segura a garrafa pelo gargalo
function thumbFrame(t){const G=1.12;
 thumbTH(t,{set:(x,t)=>barDD(x,t),blur:3,dim:.3,cam:{x:1080,y:500,z:1.7},
 hl:[[1155,722],100],hr:[[1488,610],80],look:-.8,face:{lookY:.35,brow:1.6,wide:1.5,sad:0,open:.55,mouth:.1},
 l1:'O VINHO FAZ',l2:'UMA ONDA!',s1:104,s2:136,
 front:(f,hl,hr)=>{cellarTable(f);wineBottle(f,1488,830,.95,true);gripHand(f,hr[0],hr[1],0,C10,.85);
  const bx=hl[0],by=hl[1]+46*G;swirlTrail(f,bx,by,G,1.2,1);swirlGlass(f,bx,by,G,0,1.25);gripHand(f,hl[0],hl[1],0,C10,.85)}})}
