// ---------- cenas do vídeo 32 "Por que a garrafa gigante tem nome de rei?" — adega de giz de Champagne (thumb A viva); cena i = fala i ----------
// Garrafa SEMPRE pelo gargalo ou pelo ombro (rótulo livre); mão de descanso atrás da garrafa ou no balcão. Personagens extras = npc (rig do Sommelier).
// "escada de garrafas" ao fundo (desfocada): Magnum → Melquisedeque, cada uma com coroa
const LADDER=[[1.5,1290],[3,1380],[4.5,1480],[6,1590],[9,1710],[15,1840],[30,1990]];
function CAVE(x,t){chalkCave(x,t,{arches:[300,960,1620],lamps:[620,1300]});x.fillStyle='#3A1C12';x.fillRect(1220,598,900,14);for(const [l,bx] of LADDER)bigBottle(x,bx,600,gScale(l,.4),{crown:l>=3})}
const B32={set:CAVE,front:cellarTable,bottles:[['spark',1100]],candles:[[560,60]]};
G.shoulder={l:[[790,776],40],r:[[1212,548],70]};G.neck2={l:[[790,776],40],r:[[1196,590],80]};G.shoulderUp={l:[[790,776],40],r:[[1206,536],80]};
const NM=(x,y,n,word,sub,w=420)=>PQ(x,y,w,sub?120:96,n,sub,word,46,26);
const fadeOut=(t,i,w,d=.5)=>1-ap(t,i,w,d);
// garrafa do tamanho certo + placa (nome · litros · garrafas) embaixo
const GB=(cx,base,lit,word,o={})=>ART(word,(g,t)=>bigBottle(g,cx,base,gScale(lit,o.k||.5),o),.5);
// cena: fundo NÍTIDO + itens
const SCX=(set,fn,dim=0)=>(t,c,s)=>{const x=layer('w',{x:960,y:540,z:1,b:[0,0,0]});set(x,t,s);comp([['w',0]]);if(dim>0){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle=`rgba(20,6,10,${dim})`;ctx.fillRect(0,0,W,H);ctx.restore()}
 const g=layer('g',null);fn(g,t,s);blit(ctx,L.g,0)};
const SC=[null,
 // 1 nomes da Bíblia, garrafa de champanhe, a família inteira, ninguém sabe
 tk(B32,{gest:[[0,'open'],[3.2,'point'],[6.2,'open']],chips:[['NOMES DA BÍBLIA',430,250,'bíblia'],['EM GARRAFA DE CHAMPANHE',430,360,'champanhe'],['A FAMÍLIA INTEIRA',430,470,'família'],['A ORIGEM? MISTÉRIO!',430,580,'ninguém']],face:t=>({brow:.8,mouth:.7})}),
 // 2 a régua 750 ml; Magnum 1,5 L = 2; magnum = grande (latim)
 tk(Object.assign({},B32,{bottles:[]}),{gest:[[0,'rest'],[3.6,'neck2'],[8.6,'rest']],props:(f,t,s)=>{bigBottle(f,1340,815,.8);gtag(f,1340,610,'750 ML',.9,.06);bigBottle(f,1200,815,1,{name:'MAGNUM',fs:9});gtag(f,1200,560,'1,5 L',.9,-.06)},
  chips:[['A RÉGUA: 750 ML',430,260,'régua'],['MAGNUM: 1,5 L = 2 GARRAFAS',430,380,'duas'],['MAGNUM = "GRANDE" EM LATIM',430,500,'latim']],face:t=>({brow:.6,mouth:.5})}),
 // 3 daí pra cima, os reis: Jeroboão 3 L = 4; Roboão 4,5 L = 6
 C3(CAVE,null,[GB(330,800,.75,0,{k:.7}),GB(600,800,1.5,0,{name:'MAGNUM',fs:9,k:.7}),GB(960,800,3,'jeroboão',{name:'JEROBOÃO',fs:8.4,crown:1,k:.7}),GB(1420,800,4.5,'roboão',{name:'ROBOÃO',fs:9,crown:1,k:.7}),
  ART('jeroboão',(g,t,s)=>miniRow(g,960,320,4,seg(t,wq(3,'quatro')-.2,wq(3,'quatro')+.8),4,.25)),
  ART('três',(g,t)=>goldText(g,'JEROBOÃO: 3 L = 4',960,190,44,'Cinzel',900)),ART('roboão',(g,t,s)=>miniRow(g,1420,320,6,seg(t,wq(3,'seis')-.2,wq(3,'seis')+.8),6,.25)),ART('seis',(g,t)=>goldText(g,'ROBOÃO: 4,5 L = 6',1420,130,44,'Cinzel',900)),
  ART(0,(g,t)=>{goldText(g,'750 ML',330,845,32,'Cinzel',900);goldText(g,'MAGNUM 1,5 L',600,845,32,'Cinzel',900)})],.7),
 // 4 rivais: Roboão (filho de Salomão) × Jeroboão (se rebelou, dividiu o reino) → hoje dividem a prateleira
 SCX((x,t)=>kingHall(x,t,{cols:[120,1800]}),(g,t,s)=>{const out=ap(t,4,'hoje',.6);
  fade(g,1-out,()=>{youngKing(g,640,870,.72,t,'#5E1428',1,{ph:0});youngKing(g,1280,870,.72,t,'#1E3A31',-1,{ph:1.3});
   fade(g,ap(t,4,'roboão'),()=>{plaque(g,640,170,330,90);goldText(g,'ROBOÃO',640,172,40)});fade(g,ap(t,4,'jeroboão'),()=>{plaque(g,1280,170,360,90);goldText(g,'JEROBOÃO',1280,172,40)});
   chip(g,420,560,'FILHO DE SALOMÃO',ap(t,4,'filho'));chip(g,1520,560,'SE REBELOU',ap(t,4,'rebelou'));
   const sp=ap(t,4,'dividiu',1.2);fade(g,ap(t,4,'dividiu',.3),()=>{for(const sd of [-1,1]){g.save();g.translate(960+sd*(10+sp*40),320);g.rotate(sd*sp*.12);g.beginPath();if(sd<0)g.rect(-200,-120,200,240);else g.rect(0,-120,200,240);g.clip();scroll(g,0,0,300,180,'O REINO');g.restore()}})});
  fade(g,out,()=>{g.fillStyle='#4A2416';g.fillRect(560,780,800,22);g.fillStyle='rgba(0,0,0,.4)';g.fillRect(560,802,800,10);bigBottle(g,780,780,gScale(3,.85),{name:'JEROBOÃO',fs:8.4,crown:1});bigBottle(g,1140,780,gScale(4.5,.85),{name:'ROBOÃO',fs:9,crown:1});
   chip(g,960,240,'HOJE: DIVIDEM A PRATELEIRA',ap(t,4,'prateleira'))})},.15),
 // 5 Matusalém: 6 L = 8; o mais velho da Bíblia, 969 anos; boa pra guardar
 SCX((x,t)=>kingHall(x,t,{cols:[120,1800]}),(g,t,s)=>{methuselah(g,600,880,.82,t);fade(g,ap(t,5,'matusalém'),()=>{plaque(g,600,150,420,90);goldText(g,'MATUSALÉM',600,152,40)});
  fade(g,ap(t,5,'seis'),()=>{bigBottle(g,1200,830,gScale(6,.65),{name:'MATUSALÉM',fs:7.4,crown:1})});fade(g,ap(t,5,'oito'),()=>goldText(g,'6 L = 8',1620,260,52,'Cinzel',900));miniRow(g,1620,400,8,seg(t,wq(5,'oito')-.2,wq(5,'oito')+.8),4,.25);
  chip(g,960,200,'969 ANOS!',ap(t,5,'novecentos'));chip(g,1620,620,'BOA PRA GUARDAR',ap(t,5,'guardar'))},.15),
 // 6 Salmanazar: 9 L = 12 = uma caixa; reis da Assíria (hoje Iraque)
 SCX((x,t)=>kingHall(x,t,{cols:[120,1800]}),(g,t,s)=>{const m=ap(t,6,'caixa',.8);assyrianKing(g,520,880,.8,t);fade(g,ap(t,6,'salmanazar'),()=>{plaque(g,520,140,440,90);goldText(g,'SALMANAZAR',520,142,40)});
  fade(g,ap(t,6,'doze')*(1-m),()=>crate(g,1220,830,12,1.3));fade(g,m,()=>bigBottle(g,1220,830,gScale(9,.65),{name:'SALMANAZAR',fs:6.8,crown:1}));
  fade(g,ap(t,6,'nove'),()=>goldText(g,'9 L = 12',1620,260,52,'Cinzel',900));chip(g,1620,370,'UMA CAIXA INTEIRA!',ap(t,6,'caixa'));chip(g,1300,170,'ASSÍRIA = HOJE, O IRAQUE',ap(t,6,'iraque'))},.15),
 // 7 Baltazar: 12 L = 16; rei mago do Natal ou rei da Babilônia? nem isso é certo
 SCX((x,t)=>{desertNight(x,t);palace(x,1500,820,.8)},(g,t,s)=>{bigStar(g,420,170,40,t);fade(g,ap(t,7,'mago'),()=>magiKing(g,430,880,.75,t));fade(g,ap(t,7,'babilônia'),()=>babKing(g,1500,880,.75,t));
  fade(g,ap(t,7,'baltazar'),()=>{bigBottle(g,960,820,gScale(12,.5),{name:'BALTAZAR',fs:8,crown:1});plaque(g,960,150,560,100);goldText(g,'BALTAZAR · 12 L = 16',960,152,36)});
  chip(g,430,260,'O REI MAGO?',ap(t,7,'mago'));chip(g,1500,260,'UM REI DA BABILÔNIA?',ap(t,7,'babilônia'));fade(g,ap(t,7,'certo'),()=>goldText(g,'?',960,330,150,'Cinzel',900))},.1),
 // 8 Nabucodonosor: 15 L = 20; rei da Babilônia, Jardins Suspensos
 SCX((x,t)=>kingHall(x,t,{cols:[120,1800]}),(g,t,s)=>{kingPortrait(g,620,440,500,560,t,'NABUCODONOSOR');
  fade(g,ap(t,8,'quinze'),()=>bigBottle(g,1200,830,gScale(15,.6),{name:'NABUCODONOSOR',fs:5.6,crown:1}));fade(g,ap(t,8,'vinte'),()=>goldText(g,'15 L = 20',1620,260,52,'Cinzel',900));
  chip(g,1620,370,'REI DA BABILÔNIA',ap(t,8,'babilônia'));chip(g,620,820,'OS JARDINS SUSPENSOS',ap(t,8,'jardins'))},.15),
 // 9 Salomão: 18 L = 24; o rei sábio, filho de Davi
 SCX((x,t)=>kingHall(x,t,{cols:[120,1800]}),(g,t,s)=>{solomon(g,600,880,.8,t);fade(g,ap(t,9,'salomão'),()=>{plaque(g,600,120,380,90);goldText(g,'SALOMÃO',600,122,40)});
  fade(g,ap(t,9,'dezoito'),()=>bigBottle(g,1220,830,gScale(18,.6),{name:'SALOMÃO',fs:8,crown:1}));fade(g,ap(t,9,'vinte'),()=>goldText(g,'18 L = 24',1620,260,52,'Cinzel',900));
  chip(g,1620,370,'O REI SÁBIO',ap(t,9,'sábio'));chip(g,1620,480,'FILHO DE DAVI',ap(t,9,'davi'))},.15),
 // 10 Melquisedeque: 30 L = 40; rei de Salém; pão e vinho para Abraão
 SCX((x,t)=>kingHall(x,t,{cols:[120,1800]}),(g,t,s)=>{bigBottle(g,370,840,gScale(30,.5)*1.05,{name:'MELQUISEDEQUE',fs:6.6,sub:'30 L',fs2:8,crown:1});
  fade(g,ap(t,10,'trinta'),()=>{plaque(g,370,120,420,96);goldText(g,'30 L = 40',370,122,46)});
  fade(g,ap(t,10,'bíblia'),()=>{melchizedek(g,1050,880,.72,t);abraham(g,1540,880,.72,t)});
  chip(g,1050,190,'MELQUISEDEQUE, REI DE SALÉM',ap(t,10,'salém'));chip(g,1300,300,'PÃO E VINHO PARA ABRAÃO',ap(t,10,'pão'))},.15),
 // 11 essa lista é de Champagne; em Bordeaux os nomes mudam
 C3(CAVE,'CHAMPAGNE × BORDEAUX',[ART(0,(g,t)=>franceMap(g,960,560,1.6,0)),ART('champagne',(g,t,s,a)=>pin(g,1088,384,'CHAMPAGNE',a)),ART('bordeaux',(g,t,s,a)=>pin(g,770,690,'BORDEAUX',a)),
  CH('A REGIÃO DO CHAMPANHE',1560,300,'região'),CH('OUTRA REGIÃO FAMOSA',420,560,'famosa'),CH('OS NOMES MUDAM!',1480,700,'mudam')],.7),
 // 12 Bordeaux: 3 L = Dupla Magnum; Jeroboão 5 L; 6 L = Imperial
 C3(CAVE,'OS MESMOS LITROS, OUTRO NOME',[ART(0,(g,t)=>{plaque(g,800,280,460,90);goldText(g,'CHAMPAGNE',800,282,36);plaque(g,1340,280,460,90);goldText(g,'BORDEAUX',1340,282,36)}),
  ...[['três','3 L','JEROBOÃO','DUPLA MAGNUM',420],['cinco','5 L','—','JEROBOÃO',560],['seis','6 L','MATUSALÉM','IMPERIAL',700]].map(([w,l,a,b,y])=>ART(w,(g,t)=>{goldText(g,l,420,y,50,'Cinzel',900);g.fillStyle='rgba(212,162,76,.35)';g.fillRect(520,y+52,1080,3);txt(g,a,800,y,42);txt(g,b,1340,y,42,'#F2D27A')})),
  CH('JEROBOÃO EM BORDEAUX? VEM MAIOR!',960,820,'maior')],.72),
 // 13 ninguém sabe; o mais antigo registrado: Jeroboão, Walter Scott, 1816
 SCX(library,(g,t,s)=>{scott(g,700,1000,.8,t);desk(g,720,770,1,t);
  chip(g,1440,260,'POR QUE NOMES DA BÍBLIA?',ap(t,13,'por'));chip(g,1440,380,'NINGUÉM SABE AO CERTO',ap(t,13,'ninguém'));fade(g,ap(t,13,'walter'),()=>{plaque(g,1440,540,560,140);goldText(g,'WALTER SCOTT',1440,520,44);goldText(g,'ESCOCÊS · 1816',1440,572,28,'Cinzel',700)});
  chip(g,1440,720,'1º REGISTRO: "JEROBOÃO"',ap(t,13,'registrado'))},.1),
 // 14 a piada: Jeroboão, "homem valente"; ele tenta erguer a gigante
 tk(Object.assign({},B32,{bottles:[]}),{gest:[[0,'rest'],[5.2,'shoulder'],[6.4,'shoulderUp'],[7.2,'shoulder'],[7.9,'shoulderUp'],[9.4,'rest']],
  props:(f,t,s)=>{const lift=kf(t-T[s],[[0,0],[6.4,0],[6.8,-10],[7.2,0],[7.9,-12],[8.4,0]]);bigBottle(f,1300,815+lift,1.38,{name:'MELQUISEDEQUE',fs:6.6,sub:'30 L',fs2:8,crown:1,rot:lift*.002})},
  chips:[['A EXPLICAÇÃO MAIS ACEITA',430,250,'explicação'],['JEROBOÃO = "HOMEM VALENTE"',430,370,'valente']],face:t=>{const k=seg(t,wq(14,'encarar')-.2,wq(14,'mesmo'));return {brow:.5+k*.8,sad:-k*.6,mouth:.5-k*.5}},
  over:(g,t,s)=>{const a=AW(t,s,'brincadeira',.45);if(a>0){g.save();g.translate(430,560);g.scale(.5,.5);stamp(g,0,0,'TEORIA',a);g.restore()}}}),
 // 15 garrafa grande tem vantagem? mesmo ar, dobro de vinho
 C3(CAVE,'GARRAFA GRANDE TEM VANTAGEM?',[ART(0,(g,t)=>bottleCut(g,700,800,1.45,70,t)),ART('magnum',(g,t)=>bottleCut(g,1240,800,1.85,70,t)),LB('750 ML',700,842,0,34),LB('MAGNUM',1240,842,'magnum',34),
  CH('UM POUCO DE AR',960,300,'ar'),ART('mesmo',(g,t,s,a)=>{arrow(g,860,380,760,400,GOLD2,6);arrow(g,1080,380,1210,362,GOLD2,6)}),CH('O DOBRO DE VINHO',1560,560,'dobro'),TX('envelhece mais devagar?',400,560,'devagar',50)],.72),
 // 16 menos ar por gole → muda mais devagar; ainda sem prova
 C3(CAVE,'MENOS AR, MUDA DEVAGAR',[ART(0,(g,t)=>{bigBottle(g,640,830,.85);bigBottle(g,1280,830,1.05,{name:'MAGNUM',fs:9});clockG(g,400,420,110,t,5);clockG(g,1520,420,110,t,1.2)}),
  CH('750: MUDA RÁPIDO',400,600,'menos'),CH('MAGNUM: DEVAGAR',1520,600,'devagar'),ST(960,330,'AINDA SEM PROVA','ciência',.5)],.72),
 // 17 bolhas nascem na garrafa; gigante é difícil: fazem em normais e passam pra grande
 SCX((x,t)=>chalkCave(x,t,{arches:[300,960,1620],lamps:[620,1300],racks:[[320,.9]]}),(g,t,s)=>{const a=ap(t,17,'passam',.6);
  fade(g,ap(t,17,'normais'),()=>{for(let i=0;i<3;i++){const bx=760+i*130,rot=a*(1.9+i*.05);bigBottle(g,bx,640-a*160,.62,{rot});if(a>.6){g.strokeStyle='rgba(242,210,122,.8)';g.lineWidth=6;g.beginPath();const nx=bx+Math.sin(rot)*186,ny=640-a*160-Math.cos(rot)*186;g.moveTo(nx,ny);g.quadraticCurveTo(nx+80,ny+10,1300,560);g.stroke()}}});
  bigBottle(g,1300,860,1.3,{crown:1});fade(g,a,()=>funnel(g,1300,470,1));
  chip(g,620,200,'BOLHAS DENTRO DA GARRAFA',ap(t,17,'bolhas'));chip(g,1420,200,'GIGANTE É DIFÍCIL',ap(t,17,'difícil'));chip(g,960,320,'DA NORMAL PRA GRANDE',ap(t,17,'passam'))},.25),
 // 18 Drappier: diz que é a única que faz as bolhas na própria garrafa, da meia até 30 L
 SCX((x,t)=>chalkCave(x,t,{arches:[300,960,1620],lamps:[620,1300]}),(g,t,s)=>{const L_=[.375,.75,1.5,3,4.5,6,9,12,15,18,30];let bx=150;const u=seg(t,wq(18,'meia')-.3,wq(18,'trinta'));
  L_.forEach((l,i)=>{const sc=gScale(l,.42),w=84*sc;bx+=w/2+14;const a=clamp(u*11-i);if(a>0)fade(g,a,()=>bigBottle(g,bx,840,sc,{crown:l>=3}));bx+=w/2});
  fade(g,ap(t,18,'drappier'),()=>{plaque(g,1480,200,560,110);goldText(g,'DRAPPIER',1480,188,48);goldText(g,'CHAMPAGNE',1480,234,24,'Cinzel',700)});
  chip(g,1480,340,'"A ÚNICA", DIZ A CASA',ap(t,18,'única'));chip(g,1480,450,'BOLHA NA PRÓPRIA GARRAFA',ap(t,18,'bolhas'))},.2),
 // 19 recorde Guinness: Suíça, 2014, 3.094 L, 4,17 m
 SCX(swissSquare,(g,t,s)=>{const z=easeIO(seg(t,T[s],T[s+1]));bigBottle(g,1000,880,1.95,{name:'GUINNESS',fs:7,sub:'3.094 L',fs2:8});
  npc(g,1240,880,.3,t,{ch:C10,face:-1,look:-.3,lookY:-.9,brow:1.2,wide:.8,mouth:.5,open:.2,hands:{l:[-95,205,95],r:[60,60,130]},ro:true});
  fade(g,ap(t,19,'suíça'),()=>flag2(g,'ch',360,200,150));chip(g,420,330,'SUÍÇA · 2014',ap(t,19,'suíça'));chip(g,1560,240,'3.094 LITROS',ap(t,19,'noventa'));chip(g,1560,350,'4,17 M DE ALTURA',ap(t,19,'metros'));chip(g,420,440,'RECORDE DO GUINNESS',ap(t,19,'guinness'))},0),
 // 20 o caminho contrário: meia garrafa (375 ml) e a Piccolo (1/4, "pequeno")
 tk(Object.assign({},B32,{bottles:[]}),{gest:[[0,'rest'],[2.6,'point'],[6,'open'],[9.4,'rest']],props:(f,t,s)=>{bigBottle(f,1250,815,.62);fade(f,ap(t,20,'meia'),()=>bigBottle(f,1360,815,.5));fade(f,ap(t,20,'piccolo'),()=>bigBottle(f,1450,815,.39))},
  chips:[['MEIA GARRAFA · 375 ML',430,260,'meia'],['PICCOLO · 1/4 DE GARRAFA',430,380,'piccolo'],['"PICCOLO" = PEQUENO (ITALIANO)',430,500,'italiano']],face:t=>({brow:.6,mouth:.7})}),
];
SC.length=LEN.length;
const icQ=(c,cx,cy)=>goldText(c,'?',cx,cy,190,'Cinzel',900);
ddFilm({SC,base:B32,talks:[1,2,14,20],places:{3:.6,4:.6,11:.6,13:.6,17:.6,19:.6,20:.6},cta:['QUAL VOCÊ ABRIRIA?','qual'],
 table:[CAVE,'POR QUE NOME DE REI?',[
  [(c,cx,cy)=>bigBottle(c,cx,cy+150,.62,{name:'MAGNUM',fs:9}),'MAGNUM','"grande" em latim','= 2 garrafas'],
  [(c,cx,cy)=>kingCrown(c,cx,cy,1.6),'NOMES DE REIS','da Bíblia: de Jeroboão','a Melquisedeque'],
  [(c,cx,cy)=>bigBottle(c,cx,cy+170,.78,{name:'MELQUISEDEQUE',fs:6.6,crown:1}),'MELQUISEDEQUE','30 litros','= 40 garrafas'],
  [(c,cx,cy)=>franceMap(c,cx,cy,.55,1),'JEROBOÃO','Champagne: 3 L','Bordeaux: 5 L'],
  [icQ,'A ORIGEM?','ninguém sabe','(1º registro: 1816)']]],
 tags:[[1,'bíblia'],[1,'champanhe'],[1,'família'],[1,'ninguém'],[2,'régua'],[2,'duas'],[2,'latim'],[3,'jeroboão'],[3,'roboão'],[4,'filho'],[4,'rebelou'],[4,'prateleira'],[5,'novecentos'],[5,'guardar'],[6,'caixa'],[6,'iraque'],[7,'mago'],[7,'babilônia'],[8,'babilônia'],[8,'jardins'],[9,'sábio'],[9,'davi'],[10,'salém'],[10,'pão'],
  [11,'região'],[11,'famosa'],[11,'mudam'],[12,'três'],[12,'cinco'],[12,'seis'],[12,'maior'],[13,'ninguém'],[13,'walter'],[13,'registrado'],[14,'valente'],[15,'ar'],[15,'dobro'],[16,'ciência'],[17,'bolhas'],[17,'difícil'],[17,'passam'],[18,'drappier'],[18,'única'],[19,'suíça'],[19,'noventa'],[19,'metros'],[20,'meia'],[20,'piccolo'],[20,'italiano']],
 sfx:[[14,'encarar','lift'],[17,'passam','cloth']]});
