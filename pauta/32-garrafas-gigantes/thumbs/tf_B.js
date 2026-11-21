// 32 · Opção B (ESPELHADA: texto à direita) — GARRAFA DE / 30 LITROS! — adega de giz de Champagne; a gigante Melquisedeque (rótulo "30 L"),
// maior que o Sommelier, com a etiqueta "= 40 GARRAFAS" no gargalo; a mão dele apoiada no ombro dela; na outra mão, uma garrafa normal pelo gargalo
function thumbFrame(t){
 thumbTH(t,{right:true,set:(x,t)=>chalkCave(x,t,{arches:[1000,1580,2160],lamps:[1290,1870]}),blur:2.5,dim:.3,cam:{x:1577,y:470,z:1.55},
 hl:[[1148,505],70],hr:[[1490,600],90],look:.1,face:{brow:1.55,wide:.8,sad:0,open:.32,mouth:.3,tilt:.05},
 l1:'GARRAFA DE',l2:'30 LITROS!',s1:110,s2:140,
 front:(f,hl,hr)=>{cellarTable(f);gripHand(f,hl[0],hl[1],.3,C10,.9);bigBottle(f,1062,800,1.9,{name:'MELQUISEDEQUE',fs:6.6,sub:'30 L',fs2:8});gtag(f,1090,326,'40 GARRAFAS',.95,-.05);
  bigBottle(f,hr[0],hr[1]+240*.9,.9);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
