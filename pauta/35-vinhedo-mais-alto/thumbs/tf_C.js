// 35 · Opção C (ESPELHADA: texto à direita) — VINHO NO / TIBETE? — terraços de videira no alto do Tibete, Himalaia nevado e sol forte;
// atrás, à esquerda, o viticultor tibetano (chapéu de feltro, chuba com faixa colorida, cesto de vime nas costas) ergue um cacho contra o sol;
// o Sommelier de cachecol vinho ergue a taça de tinto pela haste e apoia a outra mão na garrafa (pelo gargalo); sorriso de surpresa
function thumbFrame(t){
 thumbTH(t,{right:true,set:(x,t)=>{tibeteVinhedo(x,t,{sun:[1880,215],flags:[[700,430,1300,450],[1700,425,2600,455]]});viticultorTib(x,1140,500,.6,{look:.3,lookY:-.4,reach:{l:[-150,-170],r:[110,140]},grape:'l'});
   const s=.85;x.fillStyle=TB.terr;x.fillRect(800,690,700,140);vineRow(x,800,1500,690,1,77)},blur:2.5,dim:.12,cam:{x:1577,y:500,z:1.7},
 hl:[[1172,640],100],hr:[[1490,610],80],look:-.15,face:{lookY:-.2,brow:1.45,wide:.6,sad:0,open:.15,mouth:.9},
 l1:'VINHO NO',l2:'TIBETE?',s1:120,s2:150,
 front:(f,hl,hr,hp)=>{balcaoPedra(f);cachecol(f,hp,1);wineBottle(f,hr[0],hr[1]+258,.95);gripHand(f,hr[0],hr[1],0,C10,.85);
  glassW(f,hl[0],hl[1]+46,1.05,.5,'#6E0F24');gripHand(f,hl[0],hl[1],0,C10,.85)}})}
