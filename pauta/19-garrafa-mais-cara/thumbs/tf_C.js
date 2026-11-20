// 19 · Opção C — POR QUE ESSE VINHO / VALE US$ 812 MIL? — sala do leilão escura (nichos ao fundo, sem a porta do cofre);
// o Sommelier de LUVAS BRANCAS segura a garrafa de 1945 pelo gargalo, apoiada no balcão, e abre a outra mão, admirado; martelo de leilão no balcão
function thumbFrame(t){thumbTH(t,{set:(x,t)=>vaultRoom(x,t,{door:false,spots:[1300]}),blur:7,cam:{x:1090,y:505,z:1.78},
 hl:[[1190,540],40],hr:[[1490,640],100],look:-.3,face:{brow:1.2,wide:1,sad:0,open:.3,mouth:.55},
 l1:'POR QUE ESSE VINHO',l2:'VALE US$ 812 MIL?',s1:90,s2:96,
 front:(f,hl,hr)=>{cellarTable(f);gavel(f,1500,770,.9);rcBottle(f,hl[0],800,1.05);gripHand(f,hl[0],hl[1],0,C10G,.85);openHand(f,hr[0],hr[1],.9,C10G,.85)}})}
