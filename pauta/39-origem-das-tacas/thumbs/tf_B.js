// 39 · Opção B (ESPELHADA: texto à direita) — A COUPE NÃO É / O SEIO DA RAINHA! — bar Dark Divino; na parede, o quadro de moldura dourada
// com Maria Antonieta (penteado alto empoado, pérolas, vestido azul-claro com laço, leque) e o carimbo "LENDA";
// o Sommelier ergue a coupe pela haste (espumante e bolhas só no bojo) e apoia a outra mão na garrafa de espumante (pelo gargalo); cara de "nada disso!"
function thumbFrame(t){const G=1.1;
 thumbTH(t,{right:true,set:(x,t)=>{barTacas(x,t,{y:372,s:.6,x0:1450,x1:2500,tipos:['flute','coupe','tulipa','bordeaux','borgonha','flute','coupe']});retratoRainha(x,1128,360,150,210);carimboLenda(x,1128,452,.45,-.12)},blur:2,dim:.26,cam:{x:1577,y:500,z:1.7},
 hl:[[1175,690],100],hr:[[1490,620],80],look:-.35,face:{brow:1.75,wide:1.1,sad:0,open:.4,mouth:0},
 l1:'A COUPE NÃO É',l2:'O SEIO DA RAINHA!',s1:104,s2:84,
 front:(f,hl,hr)=>{cellarTable(f);taca(f,hl[0],hl[1]+48*G,G,'coupe',.55,null,{seed:11,nb:14});gripHand(f,hl[0],hl[1],0,C10,.85);
  champBottle(f,hr[0],hr[1]+250*.95,.95,0,0);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
