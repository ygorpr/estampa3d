// 37 · Opção B (ESPELHADA: texto à direita) — MARACUJÁ NO VINHO? / NÃO TEM! — bar Dark Divino à noite;
// o Sommelier mostra na palma da mão um maracujá-amarelo cortado ao meio e, na outra, a taça de Sauvignon Blanc pela haste;
// sobrancelhas lá em cima e boca de "nada disso!"
function thumbFrame(t){const G=1.05;
 thumbTH(t,{right:true,set:(x,t)=>barDD(x,t,{lamps:[1100,2100]}),blur:3,dim:.3,cam:{x:1577,y:500,z:1.7},
 hl:[[1160,650],100],hr:[[1488,672],100],look:.1,face:{brow:1.75,wide:1.2,sad:0,open:.45,mouth:0},
 l1:'MARACUJÁ NO VINHO?',l2:'NÃO TEM!',s1:80,s2:150,
 front:(f,hl,hr)=>{cellarTable(f);palmaMao(f,hl[0],hl[1],-1,C10,.9);maracujaMeio(f,hl[0]-8,hl[1]-54,54,-.1);
  sbGlass(f,hr[0],hr[1]+46*G,G);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
