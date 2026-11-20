// 17 · Opção A — O INSETO QUE QUASE / ACABOU COM O VINHO — gabinete do cientista; Sommelier com a lupa grande:
// na lente, a filoxera gigante (personagem) sobre a raiz da videira; a outra mão segura o livro aberto no balcão
function thumbFrame(t){const L0=[1178,652],R=116;thumbTH(t,{set:(x,t)=>cabinet(x,t),blur:7,
 hl:[[1262,790],60],hr:[[1500,772],40],look:-.7,face:{lookY:.35,brow:1.45,wide:1.4,sad:.1,open:.55,mouth:.05},
 l1:'O INSETO QUE QUASE',l2:'ACABOU COM O VINHO',s1:90,s2:90,
 front:(f,hl,hr,hp,t)=>{cellarTable(f);
  f.save();f.fillStyle='#3A0E18';f.fillRect(1400,778,200,22);f.fillStyle='#E9DCC0';f.beginPath();f.moveTo(1405,780);f.lineTo(1500,770);f.lineTo(1595,780);f.lineTo(1595,798);f.lineTo(1405,798);f.fill();f.restore();
  gripHand(f,hr[0],hr[1]+8,0,C10,.85);
  bigLens(f,L0[0],L0[1],R,hl[0],hl[1],g=>{vineRoot(g,L0[0]+10,L0[1]+92,.5);phylloxera(g,L0[0]+22,L0[1]+2,.64,0)});gripHand(f,hl[0],hl[1],-.7,C10,.85)}})}
