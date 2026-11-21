// 25 · Opção A — PICASSO PINTOU / RÓTULO DE VINHO? — galeria de arte à noite, rótulos de vinho emoldurados em ouro com spots de luz;
// o Sommelier ergue a garrafa com rótulo de artista pelo gargalo (rótulo livre) e segura um pincel com tinta vermelha na outra mão, intrigado
function thumbFrame(t){const S_=1.1;
 thumbTH(t,{set:(x,t)=>gallery(x,t,{frames:[[640,300,130,170,'blue'],[930,300,130,170,'geo'],[1580,300,130,170,'pop']]}),blur:2.5,dim:.28,cam:{x:1080,y:500,z:1.7},
 hl:[[1172,650],90],hr:[[1492,600],90],look:-.05,face:{brow:1.6,wide:.8,sad:0,open:.25,mouth:.3},
 l1:'PICASSO PINTOU',l2:'RÓTULO DE VINHO?',s1:100,s2:100,
 front:(f,hl,hr)=>{cellarTable(f);brush(f,hl[0],hl[1]-10,1.1,-.18);gripHand(f,hl[0],hl[1],0,C10,.85);
  artBottle(f,hr[0],hr[1]+204*S_,S_,'geo');gripHand(f,hr[0],hr[1],0,C10,.85)}})}
