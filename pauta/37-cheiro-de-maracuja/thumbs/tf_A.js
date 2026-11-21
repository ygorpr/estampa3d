// 37 · Opção A — CHEIRO DE MARACUJÁ / SEM MARACUJÁ? — bar Dark Divino à noite; o Sommelier ergue a taça de Sauvignon Blanc pela haste:
// os fiozinhos de aroma sobem e formam no ar o "fantasma" de um maracujá (só contorno e sementes); na outra mão, apoiado na palma,
// um maracujá-amarelo cortado ao meio; sobrancelha erguida de quem não acredita
function thumbFrame(t){const G=1.05;
 thumbTH(t,{set:(x,t)=>barDD(x,t),blur:3,dim:.3,cam:{x:1080,y:500,z:1.7},
 hl:[[1170,672],100],hr:[[1500,660],100],look:-.25,face:{lookY:-.25,brow:1.6,wide:.9,sad:0,open:.25,mouth:.3},
 l1:'CHEIRO DE MARACUJÁ',l2:'SEM MARACUJÁ?',s1:76,s2:104,
 front:(f,hl,hr)=>{cellarTable(f);const bx=hl[0],by=hl[1]+46*G;aromaFruta(f,bx,by,G,1110,330,52,t);sbGlass(f,bx,by,G);gripHand(f,hl[0],hl[1],0,C10,.85);
  palmaMao(f,hr[0],hr[1],1,C10,.9);maracujaMeio(f,hr[0]+8,hr[1]-54,54,.1)}})}
