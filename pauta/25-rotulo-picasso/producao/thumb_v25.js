// 25 · Opção B (ESPELHADA: texto à direita) — PICASSO / NO RÓTULO? — quadro 0 = thumb B idêntica; ABERTURA VIVA:
// já no 1º segundo o Sommelier ERGUE a garrafa de rótulo artístico pelo gargalo; o título some entre 1,4 e 2,4 s; depois dá pinceladas no ar
function thumbFrame(t){const S_=1.1,up=kf(t,[[0,0],[.15,0],[.8,78],[4.2,78],[4.9,0]]),pw=seg(t,4.6,8.6),px=pw>0&&pw<1?Math.sin(pw*Math.PI*4)*40*Math.sin(pw*Math.PI):0,py=kf(t,[[0,0],[4.4,0],[5,-50],[8.4,-50],[9,0]]);
 thumbTH(t,{right:true,set:(x,t)=>gallery(x,t,{frames:[[1100,300,140,180,'bacc','1973'],[1840,272,110,140,'dots']]}),blur:2.5,dim:.28,cam:{x:1577,y:500,z:1.7},
 hl:[[1168,620-up],90+up*.4],hr:[[1494+px,650+py],90-py*.4],txtA:1-easeIO(seg(t,1.4,2.4)),look:.1,face:{brow:1.6,wide:.7,sad:.1,open:.15,mouth:.25,tilt:.06},
 l1:'PICASSO',l2:'NO RÓTULO?',s1:130,s2:130,
 front:(f,hl,hr)=>{cellarTable(f);artBottle(f,hl[0],hl[1]+204*S_,S_,'bacc');gripHand(f,hl[0],hl[1],0,C10,.85);
  brush(f,hr[0],hr[1]-10,1.1,.28+px*.004);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
