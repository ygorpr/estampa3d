// 20 · Opção A — DÁ PARA ABRIR CHAMPANHE / COM ESPADA? — adega de espumante (nichos de garrafas deitadas, cavaletes de remuagem);
// o Sommelier segura a garrafa pela base, inclinada, gargalo longe do rosto; o sabre acabou de passar pelo gargalo e a rolha voa com o anel de vidro
function thumbFrame(t){const B=[1460,705],ROT=.72,S=.72,ax=Math.sin(ROT),ay=-Math.cos(ROT),lip=[B[0]+ax*290*S,B[1]+ay*290*S],
 HS=[1290,695],SA=Math.atan2(lip[1]-14-HS[1],lip[0]-HS[0]);
 thumbTH(t,{set:(x,t)=>champCave(x,t),blur:3,dim:.3,cam:{x:1170,y:500,z:1.7},
 hl:[HS,110],hr:[[B[0]+ax*14,B[1]+ay*14],60],look:.5,face:{brow:1.5,wide:1.4,sad:0,open:.5,mouth:.1},
 l1:'DÁ PARA ABRIR CHAMPANHE',l2:'COM ESPADA?',s1:64,s2:116,
 front:(f,hl,hr)=>{cellarTable(f);champBottle(f,B[0],B[1],S,ROT,1);gripHand(f,hr[0],hr[1],ROT,C10,.85);
  foam(f,lip[0],lip[1],.9,ROT);flyTop(f,lip[0]+ax*112,lip[1]+ay*112,1.35,ROT+.2);
  sabre(f,hl[0],hl[1],SA,1,Math.hypot(lip[0]-HS[0],lip[1]-HS[1])-10);gripHand(f,hl[0],hl[1],SA,C10,.85)}})}
