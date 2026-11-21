// 32 · Opção A (ESCOLHIDA) — GARRAFA COM / NOME DE REI? — adega de giz; ao lado do Sommelier, a gigante Melquisedeque (30 L) com coroa;
// mão direita apoiada no ombro dela (longe do rótulo); na esquerda, a garrafa normal pelo gargalo. thumbFrame(0) = thumb A idêntica.
// ABERTURA VIVA: já em 0,4 s ele ergue a garrafa normal para comparar com a gigante; título some entre 1,4 e 2,4 s; dá dois tapinhas na gigante.
function thumbFrame(t){const up=kf(t,[[0,0],[.35,0],[1.05,150],[3.6,150],[4.3,40],[6,40],[6.6,0]]),pat=kf(t,[[0,0],[4.4,0],[4.6,-14],[4.8,0],[5,-14],[5.2,0]]),
 sp=t>0?speak(t):0,op=lerp(.3,sp,seg(t,0,.35)),br=lerp(1.6,1.1,seg(t,.2,.8)),wd=lerp(.9,.35,seg(t,.2,.8));
 thumbTH(t,{set:(x,t)=>chalkCave(x,t,{arches:[560,1080,1600,2120],lamps:[820,1360]}),blur:2.5,dim:.3,cam:{x:1080,y:470,z:1.55},
 hl:[[1168-up*.25,600-up],90+up*.2],hr:[[1515,505+pat],70],look:-.05,face:{brow:br,wide:wd,sad:0,open:op,mouth:.3},txtA:1-easeIO(seg(t,1.4,2.4)),
 l1:'GARRAFA COM',l2:'NOME DE REI?',s1:110,s2:124,
 front:(f,hl,hr)=>{cellarTable(f);bigBottle(f,hl[0],hl[1]+240*.9,.9);gripHand(f,hl[0],hl[1],0,C10,.85);
  gripHand(f,hr[0],hr[1],-.3,C10,.9);bigBottle(f,1602,800,1.9,{name:'MELQUISEDEQUE',fs:6.6,sub:'30 L',fs2:8,crown:true})}})}
