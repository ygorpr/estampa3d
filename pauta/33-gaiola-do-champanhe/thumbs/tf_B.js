// 33 · Opção B (ESPELHADA: texto à direita) — PRA QUE SERVE / A GAIOLINHA? — adega de espumante cavada no giz com o poço de luz;
// o Sommelier ergue a garrafa pelo gargalo ao lado do rosto (rótulo livre), a gaiolinha de arame com a plaquinha dourada bem à mostra,
// e na outra mão a taça flûte (bolhas só dentro do bojo); olhar intrigado para a gaiolinha
function thumbFrame(t){const S_=1.6;
 thumbTH(t,{right:true,set:(x,t)=>cavaGiz(x,t,{well:1500,niches:[880,1320,2160,2600],lamps:[1100,2300]}),blur:3,dim:.3,cam:{x:1577,y:500,z:1.7},
 hl:[[1150,610],90],hr:[[1490,640],100],look:-.45,face:{lookY:-.35,brow:1.5,wide:.9,sad:.1,open:.12,mouth:.25,tilt:-.04},
 l1:'PRA QUE SERVE',l2:'A GAIOLINHA?',s1:104,s2:118,
 front:(f,hl,hr)=>{cellarTable(f);gaiolaBottle(f,hl[0],hl[1]+232*S_,S_,0,{loop:-.4});gripHand(f,hl[0],hl[1],0,C10,.85);
  glassW(f,hr[0],hr[1]+44,1.05,.75,'rgba(242,210,122,.75)',true);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
