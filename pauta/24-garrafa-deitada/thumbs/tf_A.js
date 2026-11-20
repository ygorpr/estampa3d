// 24 · Opção A — POR QUE O VINHO / FICA DEITADO? — adega de pedra com nichos de garrafas deitadas (pilhas vistas de lado);
// o Sommelier apresenta uma garrafa DEITADA na horizontal: uma mão no gargalo, a outra por baixo do fundo (rótulo livre); cara de curiosidade
function thumbFrame(t){thumbTH(t,{set:(x,t)=>adegaDeitada(x,t),blur:3,dim:.3,
 hl:[[1218,700],80],hr:[[1452,728],80],look:-.35,face:{lookY:.05,brow:1.5,wide:1.3,sad:0,open:.4,mouth:.1},
 l1:'POR QUE O VINHO',l2:'FICA DEITADO?',s1:96,s2:108,
 front:(f,hl,hr)=>{cellarTable(f);lyingWine(f,1320,700,1,-1);gripHand(f,hl[0],hl[1],0,C10,.85);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
