// 27 · Opção C (ESPELHADA: texto à direita) — ROSCA NÃO É / VINHO RUIM! — bar com adega envidraçada;
// o Sommelier, sorrindo confiante, apresenta a garrafa de rosca erguida pelo gargalo (rótulo livre) e deixa a rolha de lado, apoiada no balcão na outra mão
function thumbFrame(t){const S_=1.1;
 thumbTH(t,{right:true,set:(x,t)=>barAdega(x,t,{split:1330,lamps:[1000,1900]}),blur:3,dim:.3,cam:{x:1577,y:500,z:1.7},
 hl:[[1175,730],90],hr:[[1488,575],90],look:.05,face:{brow:1.3,wide:.3,sad:0,open:0,mouth:1},
 l1:'ROSCA NÃO É',l2:'VINHO RUIM!',s1:104,s2:124,
 front:(f,hl,hr)=>{cellarTable(f);corkHeld(f,hl[0]-4,hl[1]-56,.9,-.35);gripHand(f,hl[0],hl[1],0,C10,.85);
  screwBottle(f,hr[0],hr[1]+204*S_,S_,0);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
