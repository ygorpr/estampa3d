// 24 · Opção B (ESPELHADA: texto à direita) — VINHO EM PÉ / ESTRAGA? — adega com nichos de garrafas deitadas;
// Sommelier à esquerda ergue uma garrafa EM PÉ pelo gargalo (rótulo livre), cara de preocupado; a outra mão ergue o indicador (a dúvida)
function thumbFrame(t){thumbTH(t,{right:true,set:(x,t)=>adegaDeitada(x,t,{niches:[[700,'ends'],[1200,'stack'],[1880,'stack'],[2380,'ends']],lamps:[1540,2200]}),blur:3,dim:.3,
 hl:[[1165,520],90],hr:[[1490,575],90],look:.3,face:{lookY:-.05,brow:1.0,wide:1.2,sad:.85,open:.3,mouth:.0},
 l1:'VINHO EM PÉ',l2:'ESTRAGA?',s1:104,s2:140,
 front:(f,hl,hr)=>{cellarTable(f);wineBottle(f,hl[0],hl[1]+258,.95);gripHand(f,hl[0],hl[1],0,C10,.85);pointHand(f,hr[0],hr[1],-Math.PI/2+.2,C10,.85)}})}
