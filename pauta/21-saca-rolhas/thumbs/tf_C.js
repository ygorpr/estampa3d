// 21 · Opção C — QUEM INVENTOU / O SACA-ROLHAS? — parede de colecionador cheia de saca-rolhas emoldurados (em T, de garçom, de asas);
// o Sommelier ergue o saca-rolhas em T com a rolha ainda fisgada na espiral; a outra mão apoiada atrás da garrafa aberta (rótulo livre); cara de dúvida
function thumbFrame(t){thumbTH(t,{set:(x,t)=>collectionWall(x,t,{lamp:1350}),blur:3,dim:.3,
 hl:[[1182,612],30],hr:[[1515,560],120],look:.3,face:{lookY:-.45,brow:1.6,wide:1.1,sad:.1,open:.12,mouth:.25,tilt:.08},
 l1:'QUEM INVENTOU',l2:'O SACA-ROLHAS?',s1:96,s2:104,
 front:(f,hl,hr)=>{cellarTable(f);gripHand(f,hl[0],hl[1],0,C10,.85);wineBottle(f,1170,800,.88,false);tScrew(f,hr[0],hr[1],.68,0,1);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
