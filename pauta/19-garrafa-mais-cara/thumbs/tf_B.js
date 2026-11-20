// 19 · Opção B — R$ 4 MILHÕES / NUMA GARRAFA? — a garrafa de 1945 dentro da vitrine iluminada sobre o balcão; o Sommelier
// apoia uma mão no topo da vitrine e leva a outra ao lado do rosto, boquiaberto
function thumbFrame(t){thumbTH(t,{set:(x,t)=>vaultRoom(x,t,{dx:1590,dy:300,dr:220,spots:[1140,1590]}),blur:6,dim:.34,
 hl:[[1150,546],70],hr:[[1500,560],100],look:-.5,face:{lookY:.2,brow:1.6,wide:1.7,sad:0,open:.75,mouth:.05},
 l1:'R$ 4 MILHÕES',l2:'NUMA GARRAFA?',s1:110,s2:110,
 front:(f,hl,hr)=>{cellarTable(f);showcase(f,1140,800,170,250,.72);gripHand(f,hl[0],hl[1]+4,0,C10,.85);openHand(f,hr[0],hr[1],.3,C10,.85)}})}
