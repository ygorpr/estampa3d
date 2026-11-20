// 21 · Opção A — O SACA-ROLHAS / NASCEU NUMA ARMA? — bar com um mosquete antigo e a vareta de "gun worm" (espiral na ponta) na parede;
// o Sommelier ergue o saca-rolhas em T pelo cabo (espiral para baixo), ao lado do rosto; a outra mão apoiada atrás da garrafa no balcão (rótulo livre)
function thumbFrame(t){thumbTH(t,{set:(x,t)=>armsBar(x,t,{plaque:[1270,300],pw:760,lamp:900}),blur:2,dim:.28,
 hl:[[1182,612],30],hr:[[1515,600],120],look:.45,face:{lookY:-.1,brow:1.5,wide:1.4,sad:0,open:.45,mouth:.1},
 l1:'O SACA-ROLHAS',l2:'NASCEU NUMA ARMA?',s1:96,s2:96,
 front:(f,hl,hr)=>{cellarTable(f);gripHand(f,hl[0],hl[1],0,C10,.85);wineBottle(f,1170,800,.88);tScrew(f,hr[0],hr[1],.68);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
