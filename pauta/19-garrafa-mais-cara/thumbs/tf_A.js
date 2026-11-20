// 19 · Opção A — A GARRAFA DE VINHO / MAIS CARA DO MUNDO — adega-cofre (porta de cofre redonda ao fundo, nichos de garrafas antigas);
// o Sommelier ergue a garrafa velha de Romanée-Conti 1945 pelo gargalo (rótulo livre), a outra mão aberta de espanto
function thumbFrame(t){thumbTH(t,{set:(x,t)=>vaultRoom(x,t,{dx:1560,dy:330,dr:240}),blur:5,dim:.34,
 hl:[[1160,520],100],hr:[[1500,575],90],look:-.35,face:{brow:1.5,wide:1.5,sad:0,open:.55,mouth:.05},
 l1:'A GARRAFA DE VINHO',l2:'MAIS CARA DO MUNDO',s1:90,s2:90,
 front:(f,hl,hr)=>{cellarTable(f);rcBottle(f,hl[0],hl[1]+262,1.08);gripHand(f,hl[0],hl[1],0,C10,.85);openHand(f,hr[0],hr[1],.45,C10,.85)}})}
