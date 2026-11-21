// 23 · Opção B (ESPELHADA: texto à direita) — 14 MESES / NO ESPAÇO — bar com janela para o espaço: a Terra atrás do Sommelier, a Estação Espacial
// e um astronauta de traje branco (viseira levantada, rosto à mostra) flutuando preso por um cabo; o Sommelier mostra a garrafa pelo gargalo
function thumbFrame(t){const S_=1.1;
 thumbTH(t,{right:true,set:(x,t)=>spaceBar(x,t,{lamps:[1000,1900]}),back:(h,t)=>spaceFG(h,{earth:[1040,330,190],iss:[1500,232,.3,.1],astro:[1760,285,.4,-1.05]},t),blur:2,dim:.26,cam:{x:1577,y:500,z:1.7},
 hl:[[1168,600],90],hr:[[1490,660],90],look:.1,face:{brow:1.5,wide:.6,sad:0,open:.2,mouth:.5,tilt:.05},
 l1:'14 MESES',l2:'NO ESPAÇO',s1:124,s2:130,
 front:(f,hl,hr)=>{cellarTable(f);spaceBottle(f,hl[0],hl[1]+204*S_,S_,0);gripHand(f,hl[0],hl[1],0,C10,.85);
  glassW(f,hr[0],hr[1]+36,1,.5,'#6E0F22');gripHand(f,hr[0],hr[1],0,C10,.85)}})}
