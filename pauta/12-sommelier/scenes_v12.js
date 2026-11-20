// ---------- cenas do vídeo "De onde vem a palavra sommelier?" — castelo do rei da França → restaurante; cena i = fala i ----------
function watermark(){if(!LOGO.complete)return;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.075;ctx.filter='blur(.6px)';ctx.drawImage(LOGO,960-230,720-221,460,442);ctx.restore()}
const HALL={set:castleHall,front:castleTable,candles:[[560,60]]},CELL={set:castleCellar,front:castleTable,candles:[[560,60]]},REST={set:restaurant,front:restFront,candles:[[560,60]]};
const ap=(t,i,w,d=.35)=>ease(seg(t,wt(i,w)-.1,wt(i,w)-.1+d));
function card(t,s,set,title,dim=.72){veil(null,t,set,dim);const g=layer('g',null);goldText(g,title,960,165,Math.min(62,Math.floor(1500/title.length)));ornament(g,960,232,560);return g}
const done=(g,t,s)=>blit(ctx,L.g,0,seg(t,T[s],T[s]+.4));
const fade=(g,a,fn)=>{if(a<=0)return;g.save();g.globalAlpha=a;fn();g.restore()};
const C3=(t,s,set,title,fn,dim)=>{const g=card(t,s,set,title,dim);fn(g);done(g,t,s)};
const plq=(g,cx,cy,w,h,txt,size,a)=>fade(g,a,()=>{plaque(g,cx,cy,w,h);goldText(g,txt,cx,cy-6,size)});
const walkX=(t,s,x0,x1)=>lerp(x0,x1,seg(t,T[s],T[s+1]));
const SC=[null,
 // 1 — a viagem: Grécia → castelo → restaurante
 (t,c,s)=>C3(t,s,castleHall,'UMA VIAGEM DE 2.000 ANOS',g=>{g.strokeStyle=GOLD;g.lineWidth=6;g.setLineDash([16,14]);g.beginPath();g.moveTo(420,640);g.lineTo(1500,640);g.stroke();g.setLineDash([]);
  const st=[[460,'grécia','GRÉCIA',x=>greekColumn(g,x,600,1)],[960,'castelo','CASTELO DO REI',x=>castleSil(g,x,600,.6)],[1460,'restaurante','RESTAURANTE',x=>restIcon(g,x,600,1)]];
  for(const [x0,w,lab,art] of st){const a=ap(t,1,w,.5);fade(g,a,()=>{art(x0);g.fillStyle=GOLD2;g.beginPath();g.arc(x0,640,16,0,7);g.fill();goldText(g,lab,x0,720,42,'Cinzel',900)})}
  chip(g,960,820,'FICA COMIGO!',ap(t,1,'comigo'))},.55),
 // 2 — Grécia: ságma, a sela de carga
 (t,c,s)=>C3(t,s,greece,'GRÉCIA: SÁGMA',g=>{const d=ap(t,2,'lombo',.7);fade(g,1-d,()=>packSaddle(g,680,560,2));fade(g,d,()=>donkey(g,680,860,1.05,t,{load:'saddle'}));
  chip(g,1400,400,'SÁGMA = SELA DE CARGA',ap(t,2,'sela'));chip(g,1400,520,'VAI NO LOMBO DO ANIMAL',ap(t,2,'lombo'));chip(g,1400,640,'PRA LEVAR PESO',ap(t,2,'peso'))},.5),
 // 3 — Roma: sagma → sagmarius
 (t,c,s)=>C3(t,s,rome,'ROMA: SAGMA → SAGMARIUS',g=>{donkey(g,walkX(t,s,520,700),860,1,t,{load:'saddle',walk:1,speed:.8});
  chip(g,1400,400,'SAGMA = A SELA',ap(t,3,'"sagma"'));chip(g,1400,520,'SAGMARIUS =',ap(t,3,'sagmarius'));chip(g,1400,640,'O ANIMAL DE CARGA',ap(t,3,'carga'))},.5),
 // 4 — francês antigo: sommier
 (t,c,s)=>C3(t,s,courtyard,'FRANCÊS ANTIGO: SOMMIER',g=>{donkey(g,660,860,1.05,t,{load:'baskets',nod:kf(t,[[T[s],0],[wt(4,'burro'),0],[wt(4,'burro')+.3,.14],[wt(4,'burro')+.8,0]])});
  plq(g,1400,430,620,170,'SOMMIER',84,ap(t,4,'"sommier"',.5));chip(g,1400,620,'O CAVALO OU O BURRO',ap(t,4,'cavalo'));chip(g,1400,740,'DE CARGA',ap(t,4,'carga'))},.45),
 // 5 — a cama box (somiê) é a mesma palavra
 (t,c,s)=>C3(t,s,castleHall,'SOMMIER = SOMIÊ!',g=>{const b=ap(t,5,'box',.6);fade(g,b,()=>boxBed(g,620,760,.95));fade(g,ap(t,5,'burro',.6),()=>donkey(g,1420,860,.9,t,{load:'baskets',face:-1}));
  chip(g,620,360,'A CAMA BOX',b);stamp(g,1360,330,'MESMA PALAVRA!',ease(seg(t,wt(5,'mesma')-.15,wt(5,'mesma')+.25)));
  chip(g,620,830,'CARREGA O COLCHÃO',ap(t,5,'colchão'));fade(g,ap(t,5,'colchão',.5)*(1-ap(t,5,'burro',.4)),()=>arrow(g,620,520,620,610,GOLD2,8))},.55),
 // 6 — o oficial: quem cuidava dos animais e das provisões
 (t,c,s)=>C3(t,s,courtyard,'O SOMMELIER DO REI',g=>{const pt=kf(t,[[T[s],0],[wt(6,'animais'),0],[wt(6,'animais')+.4,1],[wt(6,'sommelier')+.6,1],[wt(6,'sommelier')+1,0]]);
  donkey(g,1060,860,.95,t,{load:'baskets',face:-1,nod:pt*.08});officer(g,520,880,.78,t,{point:pt,scroll:1,t0:T[s],look:.5});
  chip(g,1560,330,'O SOMMELIER!',ap(t,6,'sommelier!'));chip(g,1560,450,'ANIMAIS + PROVISÕES',ap(t,6,'provisões'));plq(g,1560,640,420,150,'ANOS 1200',58,ap(t,6,'duzentos',.5))},.35),
 // 7 — a caravana do rei: bagagem no lombo dos animais
 (t,c,s)=>C3(t,s,courtyard,'DE CASTELO EM CASTELO',g=>{const x0=walkX(t,s,1900,700);officer(g,x0-420,880,.62,t,{t0:T[s],look:-.2});
  for(let i=0;i<3;i++)donkey(g,x0+i*420,860,.72,t+i*.37,{load:'baskets',walk:1,face:-1,speed:.9});
  chip(g,420,330,'COMIDA',ap(t,7,'comida'));chip(g,960,330,'ROUPA DE CAMA',ap(t,7,'roupa'));chip(g,1500,330,'E VINHO!',ap(t,7,'vinho'))},.3),
 // 8 — quem mandava no vinho do rei? o bouteiller
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['red',1100],['red',1500]],gest:[[0,'thinking'],[3.2,'point']],chips:[['BOUTEILLER',1500,320,wt(8,'"bouteiller"')],['O DAS GARRAFAS',1500,440,wt(8,'garrafas')]],face:t=>({brow:.8,mouth:.55})},CELL)),
 // 9 — o Grande Bouteiller e as duas garrafas douradas
 (t,c,s)=>C3(t,s,castleHall,'O GRANDE BOUTEILLER',g=>{const b=ap(t,9,'garrafas',.7);fade(g,b,()=>{goldBottle(g,560,830,1.05,-.12);goldBottle(g,800,830,1.05,.12)});fade(g,1-b,()=>crown(g,680,560,1.6));
  chip(g,1360,360,'CORTE DA FRANÇA',ap(t,9,'corte'));chip(g,1360,480,'1 DOS 5 GRANDES OFICIAIS',ap(t,9,'cinco'));chip(g,1360,640,'2 GARRAFAS DOURADAS',b)},.5),
 // 10 — bouteiller → butler, o mordomo
 (t,c,s)=>C3(t,s,castleHall,'BOUTEILLER → BUTLER',g=>{const bw=kf(t,[[T[s],0],[wt(10,'mordomo'),0],[wt(10,'mordomo')+.4,1],[wt(10,'mordomo')+1.3,1],[wt(10,'mordomo')+1.8,0]]);
  butler(g,1360,890,.8,t,{t0:T[s],bow:bw});chip(g,600,360,'EM INGLÊS: BUTLER',ap(t,10,'"butler"'));chip(g,600,500,'O MORDOMO',ap(t,10,'mordomo'));chip(g,600,640,'O HOMEM DAS GARRAFAS',ap(t,10,'garrafas'))},.45),
 // 11 — deixou a bagagem, ficou com o vinho
 (t,c,s)=>C3(t,s,castleCellar,'SÓ FICOU O VINHO',g=>{const d=ap(t,11,'deixando',.9),v=ap(t,11,'vinho',.6);
  fade(g,1-d*.75,()=>{donkey(g,520,840,.8,t,{load:'baskets'})});
  for(const [x0,lab,ww] of [[1000,'COMIDA',0],[1240,'ROUPA',1]]){fade(g,1-d*.8,()=>{if(ww){g.fillStyle='#E9DCC0';g.beginPath();g.roundRect(x0-80,640,160,90,20);g.fill();g.fillStyle='#8E1B3A';g.fillRect(x0-80,676,160,12)}else{g.fillStyle='#D8A860';g.beginPath();g.ellipse(x0,690,90,50,0,0,7);g.fill()}goldText(g,lab,x0,800,36,'Cinzel',700)});
   fade(g,d,()=>{g.strokeStyle='#C8213F';g.lineWidth=10;g.beginPath();g.moveTo(x0-70,620);g.lineTo(x0+70,760);g.moveTo(x0+70,620);g.lineTo(x0-70,760);g.stroke()})}
  g.save();if(v>0){const gr=g.createRadialGradient(1520,600,10,1520,600,260);gr.addColorStop(0,`rgba(255,200,120,${.45*v})`);gr.addColorStop(1,'rgba(255,200,120,0)');g.fillStyle=gr;g.fillRect(1260,340,520,520)}g.restore();
  bottleS(g,[1520,800],1.25,'red');chip(g,1520,330,'O VINHO!',v)},.5),
 // 12 — anos 1600: sommelier = encarregado do vinho
 (t,c,s)=>C3(t,s,castleCellar,'SOMMELIER = O VINHO',g=>{g.strokeStyle=GOLD;g.lineWidth=8;g.beginPath();g.moveTo(420,560);g.lineTo(1500,560);g.stroke();
  for(const [x0,y,n,a] of [[560,'ANOS 1200','animais e provisões',T[s]+.2],[1360,'ANOS 1600','o encarregado do vinho',wt(12,'seiscentos')]]){const k=ease(seg(t,a,a+.4));fade(g,k,()=>{g.fillStyle=GOLD2;g.beginPath();g.arc(x0,560,18,0,7);g.fill();goldText(g,y,x0,470,60)});serif(n,x0,640,42,`rgba(243,230,200,${k})`)}
  fade(g,ap(t,12,'encarregado',.5),()=>{bottleS(g,[1360,830],.5,'red');glassW(g,1220,830,.75,.4,'#5E1428')});pannier(g,560,770,.7,1)},.55),
 // 13 — Portugal: escanção
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['red',1100]],gest:[[0,'open'],[3.4,'point'],[6,'rest']],chips:[['PORTUGAL: ESCANÇÃO',1480,320,wt(13,'escanção')],['O COPEIRO',1480,440,wt(13,'copeiro')]],face:t=>({brow:.5,mouth:.6})},CELL)),
 // 14 — 1969: associação internacional + 1º Melhor Sommelier do Mundo
 (t,c,s)=>C3(t,s,castleCellar,'1969',g=>{trophy(g,640,560,1.7*ap(t,14,'concurso',.6)+.0001);plq(g,640,380,400,160,'1969',80,ap(t,14,'mil',.5)*(1-ap(t,14,'concurso',.4)));
  chip(g,1340,360,'NASCE A ASSOCIAÇÃO',ap(t,14,'associação'));chip(g,1340,470,'INTERNACIONAL (ASI)',ap(t,14,'internacional'));chip(g,1340,620,'BÉLGICA · 1º CONCURSO',ap(t,14,'bélgica'));chip(g,1340,730,'MELHOR SOMMELIER DO MUNDO',ap(t,14,'mundo'))},.6),
 // 15 — Master Sommelier: ~300 no mundo
 (t,c,s)=>C3(t,s,castleCellar,'MASTER SOMMELIER',g=>{msPin(g,560,520,1.3*ap(t,15,'master',.5)+.0001);chip(g,560,780,'O TÍTULO MAIS DIFÍCIL',ap(t,15,'difícil'));
  const n=Math.floor(300*ap(t,15,'trezentos',1.4));for(let i=0;i<n;i++){g.fillStyle=GOLD2;g.beginPath();g.arc(1040+(i%25)*28,420+Math.floor(i/25)*26,8,0,7);g.fill()}
  chip(g,1376,330,'DESDE 1969',ap(t,15,'começou'));chip(g,1376,790,'≈ 300 NO MUNDO',ap(t,15,'trezentos'))},.6),
 // 16 — Brasil: ABS, 1983, Rio de Janeiro
 (t,c,s)=>C3(t,s,restaurant,'NO BRASIL',g=>{fade(g,ap(t,16,'rio',.6),()=>sugarloaf(g,600,800,.95,t));plq(g,1380,420,420,170,'1983',84,ap(t,16,'oitenta',.5));
  chip(g,1380,620,'ASSOCIAÇÃO BRASILEIRA (ABS)',ap(t,16,'brasileira'));chip(g,1380,740,'RIO DE JANEIRO',ap(t,16,'rio'))},.55),
 // 17 — hoje: o que o sommelier faz
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['red',1100],['white',1520]],gest:[[0,'open'],[2.6,'point'],[5.6,'bottleUp']],bottleHeld:'red',chips:[['ESCOLHE OS VINHOS',1500,250,wt(17,'escolhe')],['CUIDA DA ADEGA',1500,350,wt(17,'adega')],['COMBINA COM A COMIDA',1500,450,wt(17,'combinar')],['O RITUAL DA ROLHA',1500,550,wt(17,'ritual')]],face:t=>({brow:.5,mouth:.6})},REST)),
 // 18 — lembra do burro!
 (t,c,s)=>talkScene(t,c,s,Object.assign({},REST,{set:(x,t)=>{restaurant(x,t);const a=ease(seg(t,wt(18,'lembra')-.3,wt(18,'lembra')+.5));if(a>0){x.save();x.globalAlpha=a;donkey(x,1700,840,.82,t,{face:-1,load:'baskets',nod:kf(t,[[0,0],[wt(18,'burro'),0],[wt(18,'burro')+.3,.15],[wt(18,'burro')+.8,0]])});x.restore()}},
  bottles:[['red',800]],gest:[[0,'open'],[3.5,'point'],[6.5,'rest']],chips:[['LÁ NO COMEÇO...',430,320,wt(18,'começo')]],face:t=>({brow:.7,mouth:.75})})),
 (t,c,s)=>ctaScene(t,c,s),
 (t,c,s)=>finalTable(t,s),
 (t,c,s)=>toastScene(t,c,s),
 null];
const CARD_AT=[1.2,2.5,4.0,5.2,6.2];   // segundos após o início da tabela; todos visíveis aos ~7 s, parados até o fim (15 s)
function finalTable(t,s){veil(null,t,castleHall,.78);const g=layer('g',null);goldText(g,'DE ONDE VEM SOMMELIER',960,130,66);ornament(g,960,205,600);blit(ctx,L.g,0,seg(t,T[s],T[s]+.5));
 const C=[['saddle','SÁGMA','a sela grega',''],['donkey','SOMMIER','o burro de carga',''],['bottle','SOMMELIER','das provisões','ao vinho'],['gold','BOUTEILLER','virou "butler",','o mordomo'],['trophy','1969','1º Melhor Sommelier','do Mundo']];
 C.forEach(([ic,n,d,d2],i)=>{const cx=220+i*370,ta=T[s]+CARD_AT[i],c=layer('c'+i,null);plaque(c,cx,600,330,560);
  if(ic=='saddle')packSaddle(c,cx,620,1);else if(ic=='donkey')donkey(c,cx+20,720,.48,t,{load:'baskets',face:-1});else if(ic=='bottle')bottleS(c,[cx,720],.8,'red');else if(ic=='gold')goldBottle(c,cx,720,.62);else trophy(c,cx,600,1);
  goldText(c,n,cx,768,34,'Cinzel',700);const a=easeIO(seg(t,ta,ta+.8));blit(ctx,L['c'+i],0,a);serif(d,cx,818,30,`rgba(243,230,200,${a})`);if(d2)serif(d2,cx,852,30,`rgba(243,230,200,${a})`)})}
function ctaScene(t,cam,s){talkScene(t,cam,s,Object.assign({gest:[[0,'wave'],[2.2,'open'],[4.2,'rest']],bottles:[['red',1100]],face:t=>({mouth:.7,brow:.5})},REST));
 const a=easeIO(seg(t,T[s]+.4,T[s]+1)),g=layer('g',null);g.save();g.globalAlpha=a;g.fillStyle='#B0122E';g.beginPath();g.roundRect(120,120,520,110,55);g.fill();g.strokeStyle=GOLD2;g.lineWidth=5;g.stroke();g.restore();
 g.save();g.globalAlpha=a;goldText(g,'INSCREVA-SE',380,176,52,'Cinzel',900);g.restore();chip(g,380,300,'QUAL CURIOSIDADE?',ap(t,20,'curiosidade'));blit(ctx,L.g,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=a;ctx.drawImage(LOGO,1640,40,230,220);ctx.restore()}}
// fechamento sem fala: o Sommelier ergue a taça pela haste num brinde (só música), câmera aproximando devagar
const TOAST_K=[[0,860,812,0],[.45,860,812,0],[.6,860,808,0],[1.5,808,616,-.05],[1.85,794,600,-.08],[2.1,804,592,-.03],[2.35,796,600,-.08],[3.5,794,598,-.07],[4.5,794,598,-.07]];
function toastScene(t,cam,s){talkScene(t,cam,s,Object.assign({bottles:[['red',1100]],gest:[[0,'rest']],sip:T[s],keys:TOAST_K,wine:.45,face:t=>({mouth:.9,brow:.45,look:-.05,lookY:-.1,open:0})},REST))}
const TALKS=[8,13,17,18,19];
FILM={dur:T[T.length-1],cuts:T.map(v=>Math.round(v*30)),fadeIn:0,fadeOut:.8,warm(){return .4},
 cam(s,u,t){if(s==21)return {x:lerp(960,930,u),y:lerp(545,505,u),z:lerp(1.12,1.34,easeIO(u)),b:[6,0,0]};if(TALKS.includes(s)){const k=TALKS.indexOf(s)%3;return [{x:lerp(950,975,u),y:lerp(560,545,u),z:lerp(1.18,1.28,easeIO(u)),b:[6,0,0]},{x:lerp(930,915,u),y:lerp(545,520,u),z:lerp(1.3,1.45,easeIO(u)),b:[8,0,0]},{x:lerp(1000,985,u),y:550,z:lerp(1.2,1.3,u),b:[7,0,0]}][k]}return {x:960,y:540,z:1,b:[10,0,0]}},
 draw(t,cam,s,u){if(s==0){thumbFrame(t);return}if(s==22){photo(IMG.logo,t,T[22],T[23],1,1.05);return}SC[s](t,cam,s)},
 plants(){return {}}};
(function(){const DISS={1:.6},xf=mk(),xz=mk(),CARD=[1,2,3,4,5,6,7,9,10,11,12,14,15,16,20],draw0=FILM.draw,cam0=FILM.cam;for(let s=2;s<23;s++)DISS[s]=.45;
 FILM.draw=(t,c,s,u)=>{const d=DISS[s],a=d?1-easeIO(seg(t,T[s],T[s]+d)):0;if(a>0){draw0(t,cam0(s-1,1,t),s-1,1);const x=xf.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0)}
  draw0(t,c,s,u);if(CARD.includes(s)){const k=1+.035*easeIO(u),x=xz.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0);ctx.save();ctx.setTransform(k,0,0,k,W/2*(1-k),H/2*(1-k));ctx.drawImage(xz,0,0);ctx.restore()}
  if(a>0)blit(ctx,xf,0,a);if(s!=0&&s!=19&&s!=22)watermark();if(s<20)karaoke(t)}})();
// som
for(let s=1;s<22;s++)say(T[s],'whoosh');
for(const [i,w] of [[2,'sela'],[3,'sagmarius'],[4,'"sommier"'],[6,'duzentos'],[8,'"bouteiller"'],[9,'cinco'],[10,'"butler"'],[12,'seiscentos'],[13,'escanção'],[14,'mil'],[15,'trezentos'],[16,'oitenta']])say(wt(i,w),'tag');
say(wt(5,'mesma'),'bottledown');say(wt(9,'garrafas'),'coins');say(wt(14,'concurso'),'coins');
for(const st of [T[3],T[7]])for(let k=0;k<Math.floor(LEN[st==T[3]?3:7]/.5);k++)say(st+.2+k*.5,'step');
for(const d of CARD_AT)say(T[20]+d,'line');
say(T[21]+2.1,'lift');
