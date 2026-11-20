// ---------- cenas do vídeo 22 "Por que a gente gira o vinho?" — bar (thumb A viva), laboratório, sala de biorreatores; cena i = fala i ----------
// REGRA: o vinho fica SEMPRE dentro do bojo, com a onda recortada no vidro (swirlGlass); taça girada pela base/haste.
const B22={set:BAR22,front:cellarTable,bottles:[['red',1100]],candles:[[560,60]]};
const L22={set:(x,t)=>lab(x,t),front:labFront,bottles:[['red',1100]]};
const LABS=(x,t)=>lab(x,t);
const stampS=(g,cx,cy,s_,a,k=.55)=>{if(a<=0)return;g.save();g.translate(cx,cy);g.scale(k,k);stamp(g,0,0,s_,a);g.restore()};
const SC=[null,
 // 1 física, Suíça, remédio
 tk(B22,{gest:[[0,'open'],[2.6,'point'],[5.4,'open']],props:(f,t)=>swirlOnCounter(f,1360,806,.9,t,.8,{hand:false}),chips:[['FÍSICA DE VERDADE',430,280,'física'],['UNIVERSIDADE DA SUÍÇA',430,390,'suíça'],['ATÉ REMÉDIO!',430,500,'remédio']],face:t=>({brow:.7,mouth:.65})}),
 // 2 o cheiro vem do que evapora: aroma
 tk(B22,{gest:[[0,'thinking'],[3.4,'open'],[7,'point']],props:(f,t,s)=>{swirlOnCounter(f,1360,806,.9,t,0,{hand:false,wisps:3,al:.6*ap(t,2,'evaporam',1)})},chips:[['NÃO É POSE',430,280,'pose'],['O CHEIRO EVAPORA',430,390,'evaporam'],['= AROMA',430,500,'aroma']],face:t=>({brow:.5,mouth:.55})}),
 // 3 parado: quase nada evapora
 C3(BAR22,'O VINHO PARADO',[ART(0,(g,t)=>{swirlGlass(g,900,860,1.7,0,0);aromaWisps(g,900,860,1.7,t,1,.25)}),PQ(1460,420,520,150,'PARADO','= POUCO AROMA','quase',56,30),CH('SÓ A SUPERFÍCIE TOCA O AR',1400,640,'superfície')]),
 // 4 girando: película no vidro, mais aroma
 C3(BAR22,'QUANDO VOCÊ GIRA',[ART(0,(g,t,s)=>{const a=ap(t,4,'gira',1);swirlTrail(g,960,860,1.75,a,1);swirlGlass(g,960,860,1.75,t*5.5,a);aromaWisps(g,960,860,1.75,t,1+Math.round(4*ap(t,4,'aroma',1)),.6)}),CH('CAMADA FININHA NO VIDRO',480,330,'fininha'),PQ(1460,420,520,150,'MAIS AROMA!',null,'aroma',50)]),
 // 5 Lausanne 2011: físicos filmam em câmera lenta
 SCN(LABS,[ART(0,(g,t)=>{physicist(g,560,900,.64,t);hsCamera(g,1000,880,.9,t);swirlGlass(g,1380,800,1.2,t*5.5,1)}),PQ(1340,250,620,130,'LAUSANNE · SUÍÇA · 2011','POLITÉCNICA','lausanne',36,26),ART('suíça',(g,t)=>flag2(g,'ch',1680,400,100)),CH('CÂMERA LENTA',1340,420,'lenta')],.15),
 // 6 viram uma onda que corre em volta
 C3(LABS,'E VIRAM UMA ONDA!',[ART(0,(g,t)=>monitor(g,700,520,620,420,()=>{swirlGlass(g,700,720,1.9,t*3,1,'#6E0F24',1)})),ART('onda',(g,t)=>topView(g,1400,520,190,1,t,1)),CH('CORRE EM VOLTA, SEM PARAR',1400,800,'volta')],.55),
 // 7 a onda é uma bomba: de baixo pra cima, do centro pra borda
 C3(LABS,'UMA BOMBA',[ART(0,(g,t)=>{chalkboard(g,700,540,820,520);pumpLoops(g,700,540,1.2,t,ap(t,7,'bomba',.6))}),CH('DE BAIXO PRA CIMA',1440,330,'baixo'),CH('DO CENTRO PRA BORDA',1440,450,'centro'),CH('MISTURA ATÉ O AR',1440,570,'ar')],.55),
 // 8 1, 2, 3, 4 cristas; copinho ou tanque gigante
 C3(LABS,'UMA, DUAS, TRÊS... QUATRO!',[ART(0,(g,t,s)=>{const n=1+Math.floor(clamp(seg(t,wq(8,'crista'),wq(8,'quatro')+.2))*3.01);topView(g,700,500,200,n,t,1);goldText(g,String(n),700,500,80)}),
  ART('copinho',(g,t,s)=>{const u=ap(t,8,'tanque',1);fade(g,1-u,()=>swirlGlass(g,1400,700,1,t*5,1));fade(g,u,()=>bioreactor(g,1400,820,.62,t))}),CH('A MESMA CONTA!',1400,250,'conta')],.55),
 // 9 2014: estudo maior, pensando em remédio
 C3(LABS,'2014: UM ESTUDO MAIOR',[ART(0,(g,t)=>swirlGlass(g,700,820,1.8,t*5.5,1)),ART('remédio',(g,t)=>{reagent(g,1300,780,1.4,true,'rgba(150,200,235,.7)');g.fillStyle='#F4F0E8';g.beginPath();g.roundRect(1420,700,110,50,25);g.fill();g.fillStyle='#B0122E';g.beginPath();g.roundRect(1475,700,55,50,[0,25,25,0]);g.fill()}),PQ(1360,330,480,140,'REMÉDIO!',null,'remédio',56)],.55),
 // 10 biorreatores: células precisam de oxigênio
 SCN((x,t)=>bioRoom(x,t),[ART(0,(g,t)=>{bioreactor(g,1240,880,.85,t,.2);bioScientist(g,560,900,.62,t)}),PQ(960,200,780,130,'BIORREATOR','= TANQUE DE CÉLULAS','biorreatores',50,28),CH('PRECISAM DE OXIGÊNIO',560,330,'oxigênio')]),
 // 11 girar o tanque inteiro como uma taça; +3.000 L
 SCN((x,t)=>bioRoom(x,t),[ART(0,(g,t)=>bioreactor(g,960,880,1,t,1)),CH('EM VEZ DE PÁS: GIRA O TANQUE',960,170,'girar'),CH('LEVA OXIGÊNIO ÀS CÉLULAS',480,330,'oxigênio'),PQ(1460,330,460,130,'+3.000 LITROS',null,'três',46)]),
 // 12 Alemanha: 181 pessoas comuns
 C3(BAR22,'E NA TAÇA, FUNCIONA?',[ART('pesquisadores',(g,t)=>crowd(g,760,t)),ART('alemanha',(g,t)=>flag2(g,'de',560,330,140)),PQ(1360,330,520,140,'181 PESSOAS','NÃO ESPECIALISTAS','cento',56,26)],.55),
 // 13 girando: cheiro mais forte e gostaram mais
 tk(B22,{gest:[[0,'open'],[2.6,'point'],[5,'open']],props:(f,t,s)=>swirlOnCounter(f,1360,806,.9,t,1,{wisps:4,al:.55}),chips:[['CHEIRO MAIS FORTE',430,300,'forte'],['GOSTARAM MAIS!',430,420,'gostou']],
  over:(g,t,s)=>{meter(g,1560,520,300,lerp(.2,.85,ap(t,13,'forte',1.2)),'AROMA');meter(g,1720,520,300,lerp(.2,.8,ap(t,13,'gostou',1.2)),'GOSTEI')},face:t=>({brow:.4,mouth:.8})}),
 // 14 cheiro de ovo: 30 s girando, some e a fruta aparece (África do Sul)
 C3(BAR22,'O CHEIRO DE OVO',[ART(0,(g,t,s)=>{const u=ap(t,14,'diminuem',1.4);swirlTrail(g,760,860,2,u,1);swirlGlass(g,760,860,2,t*5.5,u);grayCloud(g,760,360,1.4,ap(t,14,'ovo',.5)*(1-u));fade(g,ap(t,14,'fruta',.6),()=>{pineapple(g,620,380,1.1);peach(g,900,400,1.1)})}),
  CH('ÁFRICA DO SUL',1400,300,'áfrica'),PQ(1400,480,480,140,'30 SEGUNDOS',null,'trinta',50),CH('A FRUTA APARECE',1400,660,'fruta')]),
 // 15 1. poucos segundos: gira, para, cheira
 tk(B22,{gest:[[0,'open'],[3,'point'],[6.5,'rest']],props:(f,t,s)=>{const on=ap(t,15,'gira',.4)*(1-ap(t,15,'para',.4));swirlOnCounter(f,1360,806,.9,t,on,{wisps:3,al:.5})},chips:[['1. POUCOS SEGUNDOS',430,280,'segundos'],['GIRA, PARA...',430,390,'gira'],['...E LEVA AO NARIZ',430,500,'nariz']],face:t=>({brow:.4,mouth:.7})}),
 // 16 2. apoiada na mesa, pela base, círculos pequenos
 C3(BAR22,'2. APOIADA NA MESA',[ART(0,(g,t)=>{g.fillStyle='#4A2414';g.fillRect(300,840,1320,30);swirlOnCounter(g,960,840,1.6,t,1);const ph=t*5.5;g.strokeStyle='rgba(255,215,120,.6)';g.lineWidth=4;g.beginPath();g.ellipse(960,850,70,16,0,0,7);g.stroke()}),CH('SEGURA PELA BASE',480,300,'base'),CH('PEQUENOS CÍRCULOS',1440,300,'círculos'),CH('ASSIM APRENDEM OS PROFISSIONAIS!',1340,450,'profissionais')]),
 // 17 3. até o bojo
 C3(BAR22,'3. NÃO ENCHE DEMAIS',[ART(0,(g,t)=>{swirlGlass(g,760,860,2.2,0,0);g.save();g.setLineDash([16,10]);g.strokeStyle=GOLD2;g.lineWidth=5;g.beginPath();g.moveTo(560,860-118*2.2);g.lineTo(980,860-118*2.2);g.stroke();g.restore()}),PQ(1400,380,520,140,'3. ATÉ O BOJO','A PARTE MAIS LARGA','bojo',48,26),CH('ESPAÇO PRO VINHO GIRAR',1400,560,'espaço'),CH('E PRO AROMA FICAR',1400,680,'aroma')]),
 // 18 4. espumante não se gira
 C3(BAR22,'4. ESPUMANTE NÃO',[ART(0,(g,t)=>{flute(g,760,860,2,t);const a=ap(t,18,'gira',.5);fade(g,a,()=>{g.strokeStyle='rgba(255,215,120,.7)';g.lineWidth=5;g.beginPath();g.ellipse(760,820,160,34,0,0,7);g.stroke();g.strokeStyle='#C8213F';g.lineWidth=16;g.lineCap='round';g.beginPath();g.moveTo(560,700);g.lineTo(960,900-40);g.moveTo(960,700);g.lineTo(560,860);g.stroke()})}),
  CH('VINHO COM GÁS',1400,330,'gás'),CH('AS BOLHAS VÃO EMBORA',1400,460,'bolhinhas')]),
 // 19 lágrimas: já ganharam um vídeo
 C3(BAR22,'E AS GOTINHAS?',[ART(0,(g,t)=>tearGlassT(g,700,860,2.6,.3,{tt:t})),CH('AS LÁGRIMAS DO VINHO',1400,330,'lágrimas'),ART('vídeo',(g,t)=>miniCard22(g,1400,560,'AS LÁGRIMAS DO VINHO'))]),
];
SC.length=LEN.length;
ddFilm({SC,base:B22,talks:[1,2,13,15],places:{3:.6,5:.6,10:.6,12:.6},cta:['GIRA OU ACHA FRESCURA?','frescura'],
 table:[BAR22,'POR QUE GIRAR?',[
  [(c,cx,cy,t)=>topView(c,cx,cy,110,2,t,1),'ONDA','o giro bombeia','o vinho'],
  [(c,cx,cy,t)=>{swirlGlass(c,cx,cy+150,1.05,t*5.5,1);aromaWisps(c,cx,cy+150,1.05,t,3,.6)},'AROMA','mais vinho no ar,','mais cheiro'],
  [(c,cx,cy,t)=>bioreactor(c,cx,cy+170,.42,t),'REMÉDIO','a mesma onda nos','biorreatores'],
  [(c,cx,cy,t)=>{c.fillStyle='#4A2414';c.fillRect(cx-140,cy+150,280,14);swirlOnCounter(c,cx,cy+150,1,t,1)},'NA MESA','taça apoiada,','círculos pequenos'],
  [(c,cx,cy,t)=>{flute(c,cx,cy+160,1,t)},'ESPUMANTE','não se gira','']]],
 tags:[[1,'física'],[1,'suíça'],[1,'remédio'],[2,'aroma'],[3,'superfície'],[4,'gira'],[4,'aroma'],[5,'lausanne'],[6,'onda'],[7,'bomba'],[8,'crista'],[8,'quatro'],[8,'tanque'],[9,'remédio'],[10,'biorreatores'],[11,'três'],[12,'cento'],[13,'forte'],[13,'gostou'],[14,'trinta'],[14,'fruta'],[15,'segundos'],[16,'base'],[17,'bojo'],[18,'espumante'],[19,'lágrimas']]});
