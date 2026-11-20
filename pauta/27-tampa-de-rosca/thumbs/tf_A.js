// 27 · Opção A — TAMPA DE ROSCA / É VINHO BARATO? — bar com adega envidraçada (garrafas de rosca em pé de um lado, de rolha deitadas do outro);
// o Sommelier ergue a garrafa de rosca pelo gargalo (rótulo livre), a setinha mostra o giro da tampa; na outra mão, a rolha de cortiça; sobrancelha erguida
function thumbFrame(t){const S_=1.1;
 thumbTH(t,{set:(x,t)=>barAdega(x,t,{swap:true}),blur:3,dim:.3,cam:{x:1080,y:500,z:1.7},
 hl:[[1172,600],90],hr:[[1492,640],90],look:-.1,face:{brow:1.6,wide:.8,sad:0,open:.22,mouth:.3},
 l1:'TAMPA DE ROSCA',l2:'É VINHO BARATO?',s1:96,s2:100,
 front:(f,hl,hr)=>{cellarTable(f);screwBottle(f,hl[0],hl[1]+204*S_,S_,0);twistArrow(f,hl[0],hl[1]-66*S_,S_);gripHand(f,hl[0],hl[1],0,C10,.85);
  corkHeld(f,hr[0],hr[1]-62,1.05,.08);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
