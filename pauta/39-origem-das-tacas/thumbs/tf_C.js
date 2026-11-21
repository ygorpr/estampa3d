// 39 · Opção C (ESPELHADA: texto à direita) — POR QUE CADA VINHO / TEM UMA TAÇA? — bar Dark Divino com a fileira de taças diferentes no alto;
// o Sommelier compara as duas taças de tinto, uma em cada mão, pelas hastes: a Bordeaux (bojo alto) e a Borgonha (bojo largo, "aquário");
// vinho sempre dentro do bojo; olhar de quem vai explicar
function thumbFrame(t){const G=.92;
 thumbTH(t,{right:true,set:(x,t)=>barTacas(x,t,{y:372,s:.6,x0:1000,x1:2450,tipos:['roemer','flute','coupe','tulipa','bordeaux','borgonha','coupe','flute','tulipa']}),blur:2,dim:.26,cam:{x:1577,y:500,z:1.7},
 hl:[[1150,680],100],hr:[[1512,680],100],look:.1,face:{brow:1.45,wide:.5,sad:0,open:.2,mouth:.6},
 l1:'POR QUE CADA VINHO',l2:'TEM UMA TAÇA?',s1:84,s2:104,
 front:(f,hl,hr)=>{cellarTable(f);taca(f,hl[0],hl[1]+46*G,G,'bordeaux',.36,'#6E0F24');gripHand(f,hl[0],hl[1],0,C10,.85);
  taca(f,hr[0],hr[1]+43*G,G,'borgonha',.3,'#7A1A2A');gripHand(f,hr[0],hr[1],0,C10,.85)}})}
