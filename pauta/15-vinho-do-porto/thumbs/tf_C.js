// 15 · Opção C — POR QUE O PORTO / É MAIS FORTE? — dentro da cave: parede de pipas (uma carimbada "PORT");
// cálice de Porto ruby erguido pela haste, a outra mão no gargalo da garrafa no balcão; cara de espanto; câmera mais perto
function thumbFrame(t){thumbTH(t,{set:(x,t)=>caveBarrels(x,t),blur:6,cam:{x:1090,y:505,z:1.78},
 hl:[[1175,555],95],hr:[[1490,580],40],face:{brow:1.5,wide:1.6,sad:0,open:.62,mouth:.1},
 l1:'POR QUE O PORTO',l2:'É MAIS FORTE?',s1:90,s2:112,
 front:(f,hl,hr)=>{cellarTable(f);portBottle(f,hr[0],hr[1]+250,1,'RUBY','RESERVA');gripHand(f,hr[0],hr[1],0,C10,.85);portGlass(f,hl[0],hl[1]+44,1.15,'#B0182E',.6);gripHand(f,hl[0],hl[1],0,C10,.85)}})}
