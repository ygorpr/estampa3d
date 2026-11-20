// 17 · Opção B — FILOXERA: / A PRAGA DO VINHO — vinhedo francês do séc. XIX ao entardecer, videiras secando;
// Sommelier ergue a lupa ao lado do rosto (mão direita): na lente, a filoxera na raiz; a outra mão segura a taça pela haste no balcão
function thumbFrame(t){const L0=[1515,590],R=98;thumbTH(t,{set:(x,t)=>deadVineyard(x,t),blur:3,dim:.3,
 hl:[[1165,700],50],hr:[[1480,700],70],look:.55,face:{lookY:.1,brow:.95,wide:1.1,sad:.65,open:.35,mouth:.05},
 l1:'FILOXERA:',l2:'A PRAGA DO VINHO',s1:120,s2:96,
 front:(f,hl,hr,hp,t)=>{cellarTable(f);glassW(f,hl[0],hl[1]+48,1.05,.4,'#5E1428');gripHand(f,hl[0],hl[1],0,C10,.85);
  bigLens(f,L0[0],L0[1],R,hr[0],hr[1],g=>{vineRoot(g,L0[0]-10,L0[1]+80,.45);phylloxera(g,L0[0]-6,L0[1]-2,.56,0,{flip:1})});gripHand(f,hr[0],hr[1],-.9,C10,.85)}})}
