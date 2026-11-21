// 26 · Opção C (ESPELHADA: texto à direita) — O PÉ QUE FAZ / VINHO DO PORTO — adega de pedra da quinta com o lagar de granito;
// a fila de pisadores de braço dado atravessa o lagar ao fundo (pés subindo da uva); à esquerda, um pisador de boina levanta o pé pingando suco;
// o Sommelier, sorrindo, ergue o cálice de Porto pela haste e apoia a outra mão na garrafa de Porto (pelo gargalo, rótulo livre)
function thumbFrame(t){
 thumbTH(t,{right:true,set:(x,t)=>{adegaLagar(x,t,{xs:[1000,1140,1280,1420,1560,1700,1840,1980,2120],ps:.36,base:282,top:410,lifts:{1:'r',4:'l',6:'r'},sing:[3],off:3,lamps:[900,1600,2300]});
   pisador(x,1120,452+Math.sin(t*3+2)*5,.72,{skin:'#B9835E',shirt:'#E8DCC4',shirtD:'#C9BCA2',cap:'#2E2A24',beard:'#3A2A1C',beardT:'short',trou:'#4A3A2E',lift:'r',shin:58,bigFoot:1.5,toe:1,look:.45,mouth:1,brow:1.1,reach:{l:[-120,140],r:[120,130]}});
   uvaMassa(x,-400,1330,708,780,35,1.4);graniteBlock(x,-400,772,1730,300,45)},
 blur:2,dim:.3,cam:{x:1577,y:500,z:1.7},
 hl:[[1265,575],100],hr:[[1590,600],80],look:.05,face:{x:1420,brow:1.3,wide:.3,sad:0,open:0,mouth:1},
 l1:'O PÉ QUE FAZ',l2:'VINHO DO PORTO',s1:104,s2:100,
 front:(f,hl,hr)=>{lagarFrente(f);portGlass(f,hl[0],hl[1]+40,1.05);gripHand(f,hl[0],hl[1],0,C10,.85);
  portBottle(f,hr[0],hr[1]+272,1);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
