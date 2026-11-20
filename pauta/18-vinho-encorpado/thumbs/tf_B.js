// 18 · Opção B — VINHO ENCORPADO / É O QUÊ? — bar Dark Divino; o Sommelier ergue o copo de creme de leite (segura o copo
// pela base, olhando desconfiado) e a outra mão segura pela haste a taça de vinho quase preto, apoiada no balcão
function thumbFrame(t){thumbTH(t,{set:(x,t)=>barWall(x,t),blur:8,
 hl:[[1165,575],90],hr:[[1490,757],40],look:-.55,face:{lookY:-.05,brow:1.55,wide:1.3,sad:.15,open:.3,mouth:.05,tilt:-.14},
 l1:'VINHO ENCORPADO',l2:'É O QUÊ?',s1:90,s2:124,
 front:(f,hl,hr)=>{cellarTable(f);glassW(f,hr[0],792,.92,.42,BODY.encorpado);gripHand(f,hr[0],hr[1],0,C10,.8);
  milkGlass(f,1250,798,.6,'integral');milkGlass(f,hl[0],hl[1]+40,.8,'creme');cupGrip(f,hl[0],hl[1]+16,0,C10,.8)}})}
