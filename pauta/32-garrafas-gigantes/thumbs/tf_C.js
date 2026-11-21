// 32 · Opção C (ESPELHADA: texto à direita) — QUEM É / NABUCODONOSOR? — adega de giz; acima do título, o retrato do rei Nabucodonosor
// (coroa alta com pontas, barba em cachos trançados, manto com leões, cetro, jardins em terraços ao fundo); ao lado do Sommelier, a gigante
// Nabucodonosor (15 L) com a mão dele no ombro dela; na outra mão, uma taça de espumante pela haste (bolhas só dentro do bojo)
function thumbFrame(t){
 thumbTH(t,{right:true,set:(x,t)=>chalkCave(x,t,{arches:[1000,1580,2160],lamps:[1290,1580]}),back:(h,t)=>kingPortrait(h,1830,240,170,190,t),blur:2.5,dim:.3,cam:{x:1577,y:455,z:1.55},
 hl:[[1148,515],70],hr:[[1492,640],90],look:.1,face:{brow:1.5,wide:.6,sad:.15,open:.12,mouth:.2,tilt:.06},
 l1:'QUEM É',l2:'NABUCODONOSOR?',s1:100,s2:120,
 front:(f,hl,hr)=>{cellarTable(f);gripHand(f,hl[0],hl[1],.3,C10,.9);bigBottle(f,1066,800,1.75,{name:'NABUCODONOSOR',fs:5.9,sub:'15 L',fs2:8});
  glassW(f,hr[0],hr[1]+36,1,.7,'#E8C86A',true);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
