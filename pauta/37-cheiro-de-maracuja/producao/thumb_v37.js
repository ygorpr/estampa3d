// 37 · Opção C (ESCOLHIDA, espelhada: texto à direita) — POR QUE ESSE VINHO / CHEIRA A MARACUJÁ? — bar Dark Divino à noite.
// thumbFrame(0) = thumb C idêntica. ABERTURA VIVA: já em 0,5 s ele leva a taça ao nariz e cheira (o maracujá-fantasma brilha mais),
// o título some entre 1,4 e 2,4 s; depois baixa a taça e aponta o perfume com um leve giro. Câmera aproxima durante a cena.
function thumbFrame(t){const G_=1.05;
 const hx=kf(t,[[0,1165],[.5,1165],[1.2,1172],[3.2,1172],[3.9,1170],[5.6,1170],[6.3,1165]]),hy=kf(t,[[0,672],[.5,672],[1.2,600],[3.2,600],[3.9,640],[5.6,640],[6.3,672]]),
  hz=kf(t,[[0,100],[.5,100],[1.2,135],[3.2,135],[3.9,105]]),sw=Math.sin(Math.max(0,t-4)*7)*8*kf(t,[[0,0],[4,0],[4.3,1],[5.4,1],[5.8,0]]),
  glow=kf(t,[[0,.75],[.6,.75],[1.3,.95],[3.2,.95],[4,.8]]),sniff=kf(t,[[0,0],[1.1,0],[1.4,1],[2.6,1],[2.9,0]]);
 thumbTH(t,{right:true,set:(x,t)=>barDD(x,t,{lamps:[1100,2100]}),blur:3,dim:.3,cam:{x:1577,y:500,z:1.7},
 hl:[[hx+sw,hy],hz],hr:[[1490,610],80],look:t>0?lerp(-.3,-.55,sniff):-.3,face:Object.assign({lookY:-.3,brow:1.3,wide:.2,sad:0,open:0,mouth:1},sniff>.5?{blink:1}:{}),
 l1:'POR QUE ESSE VINHO',l2:'CHEIRA A MARACUJÁ?',s1:84,s2:84,txtA:1-easeIO(seg(t,1.4,2.4)),
 front:(f,hl,hr)=>{cellarTable(f);const bx=hl[0],by=hl[1]+46*G_;aromaFruta(f,bx,by,G_,1110,330,52+(glow-.75)*30,t,glow);sbGlass(f,bx,by,G_);gripHand(f,hl[0],hl[1],0,C10,.85);
  sbBottle(f,hr[0],hr[1]+258,.95);gripHand(f,hr[0],hr[1],0,C10,.85)}})}
