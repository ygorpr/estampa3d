// 23 · Opção B (ESPELHADA: texto à direita) — 14 MESES / NO ESPAÇO — quadro 0 = thumb B idêntica; ABERTURA VIVA:
// já no 1º segundo o Sommelier ERGUE a garrafa pelo gargalo (mostra o vinho), o título some entre 1,4 e 2,4 s; o astronauta flutua; depois ele ergue a taça
function thumbFrame(t){const S_=1.1,up=kf(t,[[0,0],[.15,0],[.8,78],[4.2,78],[4.9,0]]),gu=kf(t,[[0,0],[4.9,0],[5.6,60],[7.6,60],[8.3,0]]);
 thumbTH(t,{right:true,set:(x,t)=>spaceBar(x,t,{lamps:[1000,1900]}),back:(h,t)=>spaceFG(h,{earth:[1040,330,190],iss:[1500+t*6,232-t*1.2,.3,.1+t*.004],astro:[1760-t*4,285+Math.sin(t*.9)*14,.4,-1.05+Math.sin(t*.6)*.06]},t),blur:2,dim:.26,cam:{x:1577,y:500,z:1.7},
 hl:[[1168,600-up],90+up*.4],hr:[[1490,660-gu],90+gu*.5],txtA:1-easeIO(seg(t,1.4,2.4)),look:.1,face:{brow:1.5,wide:.6,sad:0,open:.2,mouth:.5,tilt:.05},
 l1:'14 MESES',l2:'NO ESPAÇO',s1:124,s2:130,
 front:(f,hl,hr)=>{cellarTable(f);spaceBottle(f,hl[0],hl[1]+204*S_,S_,0);gripHand(f,hl[0],hl[1],0,C10,.85);
  glassW(f,hr[0],hr[1]+36,1,.5,'#6E0F22');gripHand(f,hr[0],hr[1],0,C10,.85)}})}
