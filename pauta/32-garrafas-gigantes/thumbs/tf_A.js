// 32 · Opção A — GARRAFA COM / NOME DE REI? — adega de giz de Champagne (arcos de pedra clara, garrafas deitadas nos nichos, vela);
// ao lado do Sommelier, a gigante Melquisedeque (30 L), maior que ele, com uma COROA dourada no topo; a mão dele apoiada no ombro dela
// (atrás do vidro, longe do rótulo); na outra mão, uma garrafa normal segura pelo gargalo, para comparar; cara de espanto
function thumbFrame(t){
 thumbTH(t,{set:(x,t)=>chalkCave(x,t,{arches:[560,1080,1600,2120],lamps:[820,1360]}),blur:2.5,dim:.3,cam:{x:1080,y:470,z:1.55},
 hl:[[1168,600],90],hr:[[1515,505],70],look:-.05,face:{brow:1.6,wide:.9,sad:0,open:.3,mouth:.3},
 l1:'GARRAFA COM',l2:'NOME DE REI?',s1:110,s2:124,
 front:(f,hl,hr)=>{cellarTable(f);bigBottle(f,hl[0],hl[1]+240*.9,.9);gripHand(f,hl[0],hl[1],0,C10,.85);
  gripHand(f,hr[0],hr[1],-.3,C10,.9);bigBottle(f,1602,800,1.9,{name:'MELQUISEDEQUE',fs:6.6,sub:'30 L',fs2:8,crown:true})}})}
