// 22 · Opção B (ESPELHADA: texto à direita) — GIRAR A TAÇA / É FRESCURA? — bar Dark Divino; Sommelier à esquerda,
// gira a taça pela haste do lado do texto (vinho em onda dentro do bojo, película no vidro), sorriso de canto de quem sabe a resposta;
// a outra mão segura a garrafa pelo gargalo (rótulo livre)
function thumbFrame(t){const G=1.0;
 thumbTH(t,{right:true,set:(x,t)=>barDD(x,t,{lamps:[1000,1900]}),blur:3,dim:.3,cam:{x:1577,y:500,z:1.7},
 hl:[[1172,610],80],hr:[[1492,672],100],look:.15,face:{brow:1.5,wide:.35,sad:0,open:0,mouth:1},
 l1:'GIRAR A TAÇA',l2:'É FRESCURA?',s1:100,s2:120,
 front:(f,hl,hr)=>{cellarTable(f);wineBottle(f,1172,830,.95,true);gripHand(f,hl[0],hl[1],0,C10,.85);
  const bx=hr[0],by=hr[1]+46*G;swirlTrail(f,bx,by,G,1,-1);swirlGlass(f,bx,by,G,Math.PI,1);aromaWisps(f,bx,by,G,0,3,.35);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
