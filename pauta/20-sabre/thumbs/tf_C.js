// 20 · Opção C — O SABRE NEM / TEM FIO! — adega de espumante; o Sommelier mostra o sabre deitado na horizontal (lâmina para o lado,
// longe do rosto) e segura a própria lâmina com a mão nua: não corta; garrafa de espumante fechada no balde de gelo; sorriso de quem conta um segredo
function thumbFrame(t){thumbTH(t,{set:(x,t)=>champCave(x,t),blur:3,dim:.3,cam:{x:1110,y:500,z:1.7},
 hl:[[1245,650],80],hr:[[1465,662],90],look:.0,face:{lookY:0,brow:1.4,wide:.5,sad:0,open:.15,mouth:.8},
 l1:'O SABRE NEM',l2:'TEM FIO!',s1:96,s2:140,
 front:(f,hl,hr)=>{cellarTable(f);champBottle(f,1592,740,.55,.14,0);iceBucket(f,1580,800,.55);
  f.save();f.translate(hr[0],hr[1]);f.scale(-1,1);sabre(f,0,0,.0,1,300);f.restore();gripHand(f,hr[0],hr[1],0,C10,.85);
  gripHand(f,hl[0],hl[1]-6,0,C10,.85)}})}
