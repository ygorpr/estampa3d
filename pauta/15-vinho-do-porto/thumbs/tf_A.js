// 15 · Opção A — POR QUE SE CHAMA / VINHO DO PORTO? — cave em Gaia com janela para o Douro (rabelos, ponte, casario do Porto);
// cálice de Porto erguido pela haste; a outra mão no gargalo da garrafa de Porto apoiada no balcão
function thumbFrame(t){thumbTH(t,{set:(x,t)=>caveGaia(x,t,{wx:1040,wy:150,ww:660,wh:470,lamp:880,r1:.1,r2:.84}),blur:3,dim:.3,hl:[[1170,575],90],hr:[[1500,575],40],
 l1:'POR QUE SE CHAMA',l2:'VINHO DO PORTO?',s1:84,s2:110,
 front:(f,hl,hr)=>{cellarTable(f);portBottle(f,hr[0],hr[1]+250,1);gripHand(f,hr[0],hr[1],0,C10,.85);portGlass(f,hl[0],hl[1]+44,1.1,'#9A4A22');gripHand(f,hl[0],hl[1],0,C10,.85)}})}
