// 17 · Opção C — A PRAGA QUE QUASE / MATOU O VINHO — bar escuro do canal; a raiz arrancada da videira sobre o balcão,
// lupa por cima: a filoxera grande e mais duas pequenas na raiz; a outra mão no gargalo da garrafa (protege o vinho); câmera mais perto
function thumbFrame(t){const L0=[1200,660],R=108;thumbTH(t,{set:(x,t)=>barWall(x,t),blur:8,cam:{x:1095,y:505,z:1.8},
 hl:[[1275,790],60],hr:[[1500,575],40],look:-.6,face:{lookY:.4,brow:.8,wide:.8,sad:.2,open:.25,mouth:.05},
 l1:'A PRAGA QUE QUASE',l2:'MATOU O VINHO',s1:90,s2:110,
 front:(f,hl,hr,hp,t)=>{cellarTable(f);bottleS(f,[hr[0],hr[1]+250],1,'red');gripHand(f,hr[0],hr[1],0,C10,.85);
  bigLens(f,L0[0],L0[1],R,hl[0],hl[1],g=>{vineRoot(g,L0[0]+20,L0[1]+40,.62);phylloxera(g,L0[0]-18,L0[1]-30,.5,0);phylloxera(g,L0[0]+70,L0[1]+64,.2,0,{flip:1});phylloxera(g,L0[0]-80,L0[1]+40,.16,0)});gripHand(f,hl[0],hl[1],-.7,C10,.85)}})}
