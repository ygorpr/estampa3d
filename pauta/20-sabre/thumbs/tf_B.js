// 20 · Opção B (ESPELHADA: texto à direita) — ABRIR CHAMPANHE / NA ESPADA? — adega de espumante;
// Sommelier à esquerda: garrafa pela base, gargalo para cima e para fora (longe do rosto), sabre passando pelo gargalo, rolha + anel voando para o canto livre
function thumbFrame(t){const B=[1200,705],ROT=-.72,S=.72,ax=Math.sin(ROT),ay=-Math.cos(ROT),lip=[B[0]+ax*290*S,B[1]+ay*290*S],
 HS=[1370,695],SA=Math.atan2(lip[1]-14-HS[1],lip[0]-HS[0]);
 thumbTH(t,{right:true,set:(x,t)=>champCave(x,t,{niches:[700,1120,1980,2400],racks:[[1560,.9],[2240,.9]],lamps:[1500,2160]}),blur:3,dim:.3,cam:{x:1480,y:500,z:1.7},
 hl:[[B[0]+ax*14,B[1]+ay*14],60],hr:[HS,110],look:-.5,face:{brow:1.4,wide:.6,sad:0,open:.2,mouth:.75},
 l1:'ABRIR CHAMPANHE',l2:'NA ESPADA?',s1:80,s2:120,
 front:(f,hl,hr)=>{cellarTable(f);champBottle(f,B[0],B[1],S,ROT,1);gripHand(f,hl[0],hl[1],ROT,C10,.85);
  foam(f,lip[0],lip[1],.9,ROT);flyTop(f,lip[0]+ax*112,lip[1]+ay*112,1.35,ROT-.2);
  f.save();f.translate(hr[0],hr[1]);f.scale(1,-1);sabre(f,0,0,-SA,1,Math.hypot(lip[0]-HS[0],lip[1]-HS[1])-10);f.restore();gripHand(f,hr[0],hr[1],SA,C10,.85)}})}
