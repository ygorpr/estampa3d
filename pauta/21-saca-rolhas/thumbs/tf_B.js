// 21 · Opção B (ESPELHADA: texto à direita) — SACA-ROLHAS: / VEIO DO MOSQUETE? — bar com o mosquete e a vareta de "gun worm" na parede;
// Sommelier à esquerda ergue o saca-rolhas em T e aponta, com o indicador, para a espiral da vareta na parede (mesma espiral!)
function thumbFrame(t){thumbTH(t,{right:true,set:(x,t)=>armsBar(x,t,{plaque:[1720,285],pw:780,lamp:1150}),blur:2,dim:.28,
 hl:[[1170,600],120],hr:[[1475,470],70],look:.5,face:{lookY:-.35,brow:1.45,wide:.7,sad:0,open:.2,mouth:.7},
 l1:'SACA-ROLHAS:',l2:'VEIO DO MOSQUETE?',s1:100,s2:92,
 front:(f,hl,hr)=>{cellarTable(f);tScrew(f,hl[0],hl[1],.68);gripHand(f,hl[0],hl[1],0,C10,.85);pointHand(f,hr[0],hr[1],-.5,C10,.85)}})}
