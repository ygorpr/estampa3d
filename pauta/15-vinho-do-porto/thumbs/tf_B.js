// 15 · Opção B — O PORTO NEM É / FEITO NO PORTO! — mesma cave em Gaia; garrafa de Porto erguida pelo gargalo (rótulo à mostra),
// a outra mão aberta apresentando a janela com o rio e o casario; sorriso de quem conta um segredo
function thumbFrame(t){thumbTH(t,{set:(x,t)=>caveGaia(x,t,{wx:1040,wy:150,ww:660,wh:470,lamp:880,r1:.1,r2:.84}),blur:3,dim:.3,
 hl:[[1150,520],100],hr:[[1520,560],90],look:.35,face:{mouth:.75,sad:0,brow:1.35,wide:.4,open:.18},
 l1:'O PORTO NEM É',l2:'FEITO NO PORTO!',s1:96,s2:110,
 front:(f,hl,hr)=>{cellarTable(f);portGlass(f,1000,800,1,'#9A4A22');portBottle(f,hl[0],hl[1]+250,1.05);gripHand(f,hl[0],hl[1],0,C10,.85);openHand(f,hr[0],hr[1],.75,C10,.85)}})}
