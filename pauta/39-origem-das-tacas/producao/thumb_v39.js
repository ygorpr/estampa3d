// 39 · Opção C (ESCOLHIDA, espelhada: texto à direita) — POR QUE CADA VINHO / TEM UMA TAÇA? — bar Dark Divino com a fileira de taças no alto.
// thumbFrame(0) = thumb C idêntica. ABERTURA VIVA: já em 0,5 s ele ergue a Bordeaux (bojo alto) e olha para ela; o título some entre 1,4 e 2,4 s;
// depois baixa a Bordeaux e ergue a Borgonha (bojo largo), girando de leve; câmera aproxima durante a cena.
function thumbFrame(t){const G=.92;
 const sw=Math.sin(Math.max(0,t-3.6)*8)*8*kf(t,[[0,0],[3.6,0],[3.9,1],[5,1],[5.3,0]]);
 const lx=kf(t,[[0,1150],[.5,1150],[1.2,1165],[3,1165],[3.6,1150]]),ly=kf(t,[[0,680],[.5,680],[1.2,560],[3,560],[3.6,680]]);
 const rx=kf(t,[[0,1512],[3,1512],[3.7,1490],[5.6,1490],[6.3,1512]])+sw,ry=kf(t,[[0,680],[3,680],[3.7,560],[5.6,560],[6.3,680]]);
 const lk=kf(t,[[0,.1],[.5,.1],[1.1,-.4],[3,-.4],[3.6,.45],[5.6,.45],[6.2,.1]]);
 thumbTH(t,{right:true,set:(x,t)=>barTacas(x,t,{y:372,s:.6,x0:1000,x1:2450,tipos:['roemer','flute','coupe','tulipa','bordeaux','borgonha','coupe','flute','tulipa']}),blur:2,dim:.26,cam:{x:1577,y:500,z:1.7},
 hl:[[lx,ly],kf(t,[[0,100],[.5,100],[1.2,130],[3,130],[3.6,100]])],hr:[[rx,ry],kf(t,[[0,100],[3,100],[3.7,130],[5.6,130],[6.3,100]])],look:t>0?lk:.1,face:{brow:1.45,wide:.5,sad:0,open:.2,mouth:.6},
 l1:'POR QUE CADA VINHO',l2:'TEM UMA TAÇA?',s1:84,s2:104,txtA:1-easeIO(seg(t,1.4,2.4)),
 front:(f,hl,hr)=>{cellarTable(f);taca(f,hl[0],hl[1]+46*G,G,'bordeaux',.36,'#6E0F24');gripHand(f,hl[0],hl[1],0,C10,.85);
  taca(f,hr[0],hr[1]+43*G,G,'borgonha',.3,'#7A1A2A');gripHand(f,hr[0],hr[1],0,C10,.85)}})}
