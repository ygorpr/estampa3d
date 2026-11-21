// 39 · Opção A — DE ONDE VEM / CADA TAÇA? — bar Dark Divino com uma prateleira iluminada no alto e a FILEIRA de taças diferentes
// (roemer verde antigo, flûte, coupe, tulipa, Bordeaux, Borgonha); o Sommelier segura uma coupe e uma flûte pelas hastes
// (espumante e bolhas só dentro do bojo), olhando de uma para a outra com a sobrancelha erguida
function thumbFrame(t){const G=1.1;
 thumbTH(t,{set:(x,t)=>barTacas(x,t,{y:372,s:.6,x0:560,x1:1900,tipos:['roemer','flute','coupe','tulipa','bordeaux','borgonha','coupe','flute','bordeaux']}),blur:2,dim:.26,cam:{x:1080,y:500,z:1.7},
 hl:[[1150,690],100],hr:[[1500,640],100],look:-.15,face:{brow:1.6,wide:.8,sad:0,open:.25,mouth:.3},
 l1:'DE ONDE VEM',l2:'CADA TAÇA?',s1:110,s2:130,
 front:(f,hl,hr)=>{cellarTable(f);taca(f,hl[0],hl[1]+48*G,G,'coupe',.55,null,{seed:11,nb:14});gripHand(f,hl[0],hl[1],0,C10,.85);
  taca(f,hr[0],hr[1]+48*G,G,'flute',.62,null,{seed:12,nb:12});gripHand(f,hr[0],hr[1],0,C10,.85)}})}
