// 26 · Opção B (ESPELHADA: texto à direita) — PISAR UVA / COM O PÉ? — adega de pedra da quinta com o lagar de granito;
// à esquerda, dentro do lagar, um pisador de verdade (cabelo escuro, barba curta, camisa vinho arregaçada, suspensório) levanta o pé pingando suco
// e canta; ao fundo, a fila de braço dado; o Sommelier, atrás da borda de pedra, ergue um cacho de uva pelo cabinho e apoia a outra mão
// na garrafa de Porto (pelo gargalo, rótulo livre); cara de espanto divertido
function thumbFrame(t){
 thumbTH(t,{right:true,set:(x,t)=>{adegaLagar(x,t,{xs:[1000,1140,1280,1420,1560,1700,1840,1980,2120],ps:.36,base:282,top:410,lifts:{0:'l',3:'r',7:'l'},sing:[2,5],off:0,lamps:[900,1600,2300]});
   pisador(x,1125,452+Math.sin(t*3+1)*5,.72,{skin:'#D8A47E',shirt:'#8E3A2E',shirtD:'#6E2A22',hair:'#2A1C14',beard:'#2A1C14',beardT:'short',trou:'#3A3440',sus:'#2A1A12',lift:'r',shin:58,bigFoot:1.5,toe:1,look:.4,sing:true,open:.55,brow:1.3,reach:{l:[-110,120],r:[150,-150]}});
   uvaMassa(x,-400,1330,708,780,33,1.4);graniteBlock(x,-400,772,1730,300,43)},
 blur:2,dim:.3,cam:{x:1577,y:500,z:1.7},
 hl:[[1270,600],90],hr:[[1585,600],80],look:-.3,face:{x:1420,brow:1.7,wide:1.2,sad:0,open:.45,mouth:.2},
 l1:'PISAR UVA',l2:'COM O PÉ?',s1:118,s2:140,
 front:(f,hl,hr)=>{lagarFrente(f);cachoT(f,hl[0],hl[1]+18,1.25,.05);gripHand(f,hl[0],hl[1],0,C10,.85);
  portBottle(f,hr[0],hr[1]+272,1);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
