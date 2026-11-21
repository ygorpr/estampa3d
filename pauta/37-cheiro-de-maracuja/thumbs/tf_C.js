// 37 · Opção C (ESPELHADA: texto à direita) — POR QUE ESSE VINHO / CHEIRA A MARACUJÁ? — bar Dark Divino à noite;
// o Sommelier ergue a taça de Sauvignon Blanc pela haste e os fiozinhos de aroma formam o maracujá-fantasma no ar (longe do rosto);
// a outra mão segura a garrafa de Sauvignon Blanc pelo gargalo (rótulo livre); cara de prazer, sorrindo
function thumbFrame(t){const G=1.05;
 thumbTH(t,{right:true,set:(x,t)=>barDD(x,t,{lamps:[1100,2100]}),blur:3,dim:.3,cam:{x:1577,y:500,z:1.7},
 hl:[[1165,672],100],hr:[[1490,610],80],look:-.3,face:{lookY:-.3,brow:1.3,wide:.2,sad:0,open:0,mouth:1},
 l1:'POR QUE ESSE VINHO',l2:'CHEIRA A MARACUJÁ?',s1:84,s2:84,
 front:(f,hl,hr)=>{cellarTable(f);const bx=hl[0],by=hl[1]+46*G;aromaFruta(f,bx,by,G,1110,330,52,t);sbGlass(f,bx,by,G);gripHand(f,hl[0],hl[1],0,C10,.85);
  sbBottle(f,hr[0],hr[1]+258,.95);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
