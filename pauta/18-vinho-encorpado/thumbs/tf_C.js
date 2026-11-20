// 18 · Opção C — LEVE OU / ENCORPADO? — adega com arco de tijolo; o Sommelier ergue duas taças pela haste,
// a do vinho leve (rubi claro) e a do encorpado (quase preto), e olha para a escura; câmera mais perto
function thumbFrame(t){thumbTH(t,{set:(x,t)=>{cellarWall(x,t);rack(x,560,230,330,560);rack(x,1500,230,330,560)},blur:9,cam:{x:1090,y:505,z:1.8},
 hl:[[1165,585],90],hr:[[1500,585],90],look:.45,face:{lookY:.15,brow:1.25,wide:.9,sad:0,open:.2,mouth:.7},
 l1:'LEVE OU',l2:'ENCORPADO?',s1:124,s2:124,
 front:(f,hl,hr)=>{cellarTable(f);glassW(f,hl[0],hl[1]+48,1.12,.42,BODY.leve);gripHand(f,hl[0],hl[1],0,C10,.85);glassW(f,hr[0],hr[1]+48,1.12,.42,BODY.encorpado);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
