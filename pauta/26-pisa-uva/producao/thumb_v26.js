// 26 · Opção A — AINDA SE PISA / UVA COM O PÉ? — adega de pedra de uma quinta do Douro, com o lagar de granito cheio de uva;
// ao lado do Sommelier, dentro do lagar, um pisador de verdade (boina, bigode, camisa arregaçada, suspensório, calça dobrada no joelho)
// levanta o pé pingando suco e acena; ao fundo, a fila de pisadores de braço dado; o Sommelier olha para ele, ergue o cálice de Porto
// pela haste e apoia a outra mão na garrafa de Porto (pelo gargalo, rótulo livre)
// ABERTURA VIVA: já no 1º segundo o Sommelier ERGUE o cálice de Porto (brinda com o pisador); o título some entre 1,4 e 2,4 s; o pisador sacode o pé
function thumbFrame(t){const up=kf(t,[[0,0],[.15,0],[.8,80],[4.2,80],[4.9,0]]),kk=kf(t,[[0,0],[.3,0],[.9,-26],[1.5,0],[2.1,-26],[2.7,0]]);
 thumbTH(t,{set:(x,t)=>{adegaLagar(x,t,{xs:[560,700,840,980,1120,1260,1400,1540,1680,1820],ps:.36,base:282,top:410,lifts:{1:'r',4:'l',8:'r'},sing:[3,6],off:2});
   // lagar da frente (onde está o pisador): uva até o joelho e borda de granito
   pisador(x,1585,452+Math.sin(t*3)*5+kk,.72,{skin:'#C8916A',shirt:'#E8DCC4',shirtD:'#C9BCA2',cap:'#3A3036',trou:'#2E3A44',beard:'#2A1C14',beardT:'mustache',lift:'l',shin:58,bigFoot:1.5,toe:-1,look:-.4,mouth:1,brow:1.2,reach:{l:[-150,-150],r:[110,120]}});
   uvaMassa(x,1360,W+500,708,780,31,1.4);graniteBlock(x,1360,772,1200,300,41)},
 blur:2,dim:.3,cam:{x:1080,y:500,z:1.7},
 hl:[[1110,575],80],hr:[[1385-up*.3,600-up],100+up*.4],txtA:1-easeIO(seg(t,1.4,2.4)),look:.3,face:{x:1250,brow:1.55,wide:.8,sad:0,open:.2,mouth:.35},
 l1:'AINDA SE PISA',l2:'UVA COM O PÉ?',s1:100,s2:106,
 front:(f,hl,hr)=>{lagarFrente(f);portBottle(f,hl[0],hl[1]+272,1);gripHand(f,hl[0],hl[1],0,C10,.85);
  portGlass(f,hr[0],hr[1]+40,1.05);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
