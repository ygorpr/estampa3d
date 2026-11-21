// 33 · Opção C (ESPELHADA: texto à direita) — GAIOLINHA DO CHAMPANHE / 6 MEIAS-VOLTAS? — adega de espumante cavada no giz;
// o Sommelier ergue a garrafa pelo gargalo (rótulo livre): setinha dourada de giro em volta da gaiolinha e o medalhão "6×" ao lado;
// na outra mão, a taça flûte (bolhas só no bojo); sorriso de quem sabe a resposta
function thumbFrame(t){const S_=1.55;
 thumbTH(t,{right:true,set:(x,t)=>cavaGiz(x,t,{well:1500,niches:[880,1320,2160,2600],lamps:[1100,2300]}),blur:3,dim:.3,cam:{x:1577,y:500,z:1.7},
 hl:[[1160,630],90],hr:[[1490,640],100],look:-.2,face:{brow:1.35,wide:.4,sad:0,open:0,mouth:1},
 l1:'GAIOLINHA DO CHAMPANHE',l2:'6 MEIAS-VOLTAS?',s1:64,s2:96,
 front:(f,hl,hr)=>{cellarTable(f);gaiolaBottle(f,hl[0],hl[1]+232*S_,S_,0,{loop:.2});gripHand(f,hl[0],hl[1],0,C10,.85);
  const ty=hl[1]-292*S_+232*S_;turnArrow(f,hl[0],ty+4,44,13,1);sixBadge(f,hl[0]-30,ty-190,46);
  glassW(f,hr[0],hr[1]+44,1.05,.75,'rgba(242,210,122,.75)',true);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
