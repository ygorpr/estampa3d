// 25 · Opção C (ESPELHADA: texto à direita) — DALÍ E WARHOL / NO RÓTULO! — parede da galeria cheia de rótulos emoldurados, um por ano
// (1924, 1945, 1958, 1975 em cor pop); o Sommelier, sorrindo orgulhoso, segura a garrafa de rótulo pop pelo gargalo e a taça pela haste
function thumbFrame(t){const S_=1.1;
 thumbTH(t,{right:true,set:(x,t)=>gallery(x,t,{frames:[[1090,240,104,140,'geo','1924'],[1520,240,104,140,'v','1945'],[1760,240,104,140,'dots','1958'],[2000,240,104,140,'pop','1975']]}),blur:2,dim:.28,cam:{x:1577,y:500,z:1.7},
 hl:[[1172,650],90],hr:[[1490,600],90],look:.05,face:{brow:1.3,wide:.3,sad:0,open:0,mouth:1},
 l1:'DALÍ E WARHOL',l2:'NO RÓTULO!',s1:104,s2:124,
 front:(f,hl,hr)=>{cellarTable(f);glassW(f,hl[0],hl[1]+36,1,.5,'#6E0F22');gripHand(f,hl[0],hl[1],0,C10,.85);
  artBottle(f,hr[0],hr[1]+204*S_,S_,'pop');gripHand(f,hr[0],hr[1],0,C10,.85)}})}
