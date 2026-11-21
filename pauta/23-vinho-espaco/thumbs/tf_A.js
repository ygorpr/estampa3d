// 23 · Opção A — VINHO FOI / PRO ESPAÇO! — bar Dark Divino com janela panorâmica para o espaço: a Terra azul (em cima, à esquerda) e a Estação Espacial;
// o Sommelier ergue a garrafa de tinto pelo gargalo (rótulo livre) e segura a taça pela haste na outra mão, sobrancelhas erguidas de espanto
function thumbFrame(t){const S_=1.1;
 thumbTH(t,{set:(x,t)=>spaceBar(x,t,{lamps:[300,1900]}),back:(h,t)=>spaceFG(h,{earth:[960,250,160],iss:[1550,300,.38,-.12]},t),blur:2,dim:.26,cam:{x:1080,y:500,z:1.7},
 hl:[[1168,650],90],hr:[[1492,600],90],look:-.05,face:{brow:1.6,wide:.8,sad:0,open:.25,mouth:.3},
 l1:'VINHO FOI',l2:'PRO ESPAÇO!',s1:112,s2:124,
 front:(f,hl,hr)=>{cellarTable(f);glassW(f,hl[0],hl[1]+36,1,.5,'#6E0F22');gripHand(f,hl[0],hl[1],0,C10,.85);
  spaceBottle(f,hr[0],hr[1]+204*S_,S_,0);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
