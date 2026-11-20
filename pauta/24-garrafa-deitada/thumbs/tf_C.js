// 24 · Opção C (ESPELHADA: texto à direita) — DEITADO OU / EM PÉ? — adega com nichos de garrafas deitadas;
// Sommelier à esquerda "pesa" as duas formas: numa mão uma garrafa DEITADA (a mão por baixo, atrás do vidro; rótulo livre; gargalo para fora), na outra uma garrafa EM PÉ pelo gargalo
function thumbFrame(t){thumbTH(t,{right:true,set:(x,t)=>adegaDeitada(x,t,{niches:[[700,'ends'],[1200,'stack'],[1880,'stack'],[2380,'ends']],lamps:[1540,2200]}),blur:3,dim:.3,cam:{x:1540,y:500,z:1.7},
 hl:[[1232,688],90],hr:[[1500,540],90],look:.2,face:{lookY:-.1,brow:1.5,wide:1.1,sad:.2,open:.2,mouth:.3,tilt:.06},
 l1:'DEITADO OU',l2:'EM PÉ?',s1:104,s2:150,
 front:(f,hl,hr)=>{cellarTable(f);gripHand(f,hl[0],hl[1],0,C10,.85);lyingWine(f,1150,650,.85,-1);
  wineBottle(f,hr[0],hr[1]+258,.9);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
