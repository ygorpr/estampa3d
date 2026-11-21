// 35 · Opção B (ESPELHADA: texto à direita) — VINHEDO A / 3.563 METROS! — terraços de videira no Tibete com o Himalaia nevado ao fundo;
// o Sommelier de cachecol vinho aponta para cima com a mão livre (ao lado, longe do rosto)
// e segura a garrafa pelo gargalo (rótulo livre); cara de espanto
function thumbFrame(t){
 thumbTH(t,{right:true,set:(x,t)=>{tibeteVinhedo(x,t,{sun:[1880,215],flags:[[700,430,1300,450],[1700,425,2600,455]]})},blur:2.5,dim:.12,cam:{x:1577,y:500,z:1.7},
 hl:[[1180,520],90],hr:[[1490,600],80],look:-.3,face:{lookY:-.35,brow:1.7,wide:1.3,sad:0,open:.5,mouth:.1},
 l1:'VINHEDO A',l2:'3.563 METROS!',s1:120,s2:112,
 front:(f,hl,hr,hp)=>{balcaoPedra(f);cachecol(f,hp,1);wineBottle(f,hr[0],hr[1]+258,.95);gripHand(f,hr[0],hr[1],0,C10,.85);
  pointHand(f,hl[0],hl[1],-Math.PI/2-.15,C10,.85)}})}
