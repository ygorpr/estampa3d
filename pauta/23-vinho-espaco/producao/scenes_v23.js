// ---------- cenas do vídeo 23 "O vinho que passou 14 meses no espaço" — bar com janela para o espaço (thumb B viva), Lua, estação, Bordeaux; cena i = fala i ----------
const BAR23=(x,t)=>spaceBar(x,t,{earth:[250,250,170],iss:[1580+t*3,170,.22,.1],lamps:[560,1500]});
const B23={set:BAR23,front:cellarTable,bottles:[['red',1100]],candles:[[560,60]]};
const cnt=(t,i,w0,w1)=>easeIO(seg(t,wq(i,w0),wq(i,w1)));
const SC=[null,
 // 1 foguete, prova às cegas, US$ 1 milhão
 tk(B23,{gest:[[0,'open'],[2.8,'point'],[5.6,'open'],[8.6,'rest']],chips:[['FOGUETE',430,260,'foguete'],['ASTRONAUTA',430,370,'astronauta'],['PROVA ÀS CEGAS',430,480,'prova'],['US$ 1 MILHÃO',430,590,'milhão']],face:t=>({brow:.8,mouth:.7})}),
 // 2 Lua, 1969: Buzz Aldrin com o cálice, dentro do módulo lunar
 SCN((x,t)=>lunarCabin(x,t),[ART(0,(g,t,s)=>aldrin(g,640,1180,.95,t,{climb:0})),PQ(1440,680,560,140,'LUA · 1969','BUZZ ALDRIN','sessenta',58,30),CH('PRA COMUNGAR',1440,850-30,'comungar')],.12),
 // 3 o vinho subiu devagar pela parede do cálice
 C3((x,t)=>lunarCabin(x,t),'GRAVIDADE FRACA',[ART(0,(g,t,s)=>chalice(g,960,640,3.4,clamp(seg(t,wq(3,'subiu')-.3,T[s+1]-.6)),t)),CH('1/6 DA GRAVIDADE DA TERRA',960,300,'gravidade'),LB('O VINHO SUBIU!',1500,560,'subiu',40)],.5),
 // 4 nov/2019: 12 garrafas de Pétrus 2000 sobem para a Estação Espacial
 SCN((x,t,s)=>{launchSky(x,t);const u=easeIO(seg(t,T[s]+.8,T[s+1]+5));if(u>0){x.fillStyle=`rgba(230,220,210,${.35*(1-u)})`;for(let i=0;i<8;i++){x.beginPath();x.arc(1150+(i-4)*60,880,90+i*10,0,7);x.fill()}}rocket(x,1150,lerp(760,-200,u*u),1.3)},
  [PQ(560,250,640,140,'NOV · 2019','12 GARRAFAS','novembro',56,32),ART('doze',(g,t)=>{for(let i=0;i<12;i++)spaceBottle(g,300+(i%6)*92,i<6?640:860-0,.55)}),CH('ESTAÇÃO ESPACIAL INTERNACIONAL',960,120,'internacional')],0),
 // 5 Pétrus: tinto de Bordeaux, uva Merlot; milhares de dólares
 tk(B23,{gest:[[0,'rest'],[.6,'bottleUp'],[6.2,'open'],[8,'rest']],bottleHeld:'red',chips:[['PÉTRUS 2000',430,260,'pétrus'],['BORDEAUX · FRANÇA',430,370,'bordeaux'],['UVA MERLOT',430,480,'merlot'],['MILHARES DE DÓLARES',430,590,'milhares']],face:t=>({brow:.6,mouth:.6})}),
 // 6 a Estação: laboratório dando voltas na Terra a ~400 km; lá dentro tudo flutua
 SCN((x,t,s)=>{spaceView(x,t,{earth:[960,1650,1150]});const u=seg(t,T[s],T[s+1]);iss(x,lerp(-150,2050,u),300,.55,.06)},
  [PQ(1440,620,460,140,'~400 KM','DE ALTURA','quatrocentos',62,30),ART('quatrocentos',(g,t)=>{g.save();g.setLineDash([14,12]);g.strokeStyle='#F2D27A';g.lineWidth=4;g.beginPath();g.moveTo(1100,520);g.lineTo(1100,760);g.stroke();g.restore()}),CH('UM LABORATÓRIO QUE DÁ VOLTAS NA TERRA',960,150,'laboratório'),ART('flutua',(g,t)=>astronaut(g,520,560+Math.sin(t)*16,.45,-.6+Math.sin(t*.5)*.1,t))],0),
 // 7 bebida proibida: o vapor do álcool atrapalha a máquina que recicla a água
 SCN((x,t)=>issInterior(x,t),[ART('proibida',(g,t,s)=>noDrink(g,520,520,1)),ART('máquina',(g,t)=>recycler(g,1150,560,t)),CH('BEBIDA PROIBIDA!',520,220,'proibida'),CH('VAPOR DO ÁLCOOL',1150,200,'vapor')],.1),
 // 8 cada garrafa trancada num cilindro de aço; ninguém abriu
 SCN((x,t)=>issInterior(x,t),[ART(0,(g,t)=>crewman(g,760,440,.78,t,{rot:.18,npc:{look:.4,hands:{l:[60,160,130],r:[150,120,130]},hold:(x,hl,hr)=>steelCyl(x,(hl[0]+hr[0])/2+40,(hl[1]+hr[1])/2,.62,-.15,'2000')}})),
  PQ(1430,300,440,130,'CILINDRO DE AÇO',null,'cilindro',42),ST(1430,560,'FECHADA','ninguém',.6)],.08),
 // 9 438 dias; jan/2021 volta numa cápsula com paraquedas, no mar
 SCN((x,t,s)=>{seaSky(x,t);const u=easeIO(seg(t,wq(9,'cápsula')-1,T[s+1]-.2));capsule(x,1300,lerp(330,720,u),.82,t);if(u>.92){x.fillStyle='rgba(255,255,255,.5)';for(let i=0;i<6;i++){x.beginPath();x.arc(1300+(i-2.5)*40,760,14+i*2,0,7);x.fill()}}},
  [ART(0,(g,t,s)=>calPage(g,480,430,String(Math.round(lerp(1,438,cnt(t,9,'foram','dias')))),'DIAS')),PQ(480,720,520,130,'JAN · 2021','DE VOLTA À TERRA','janeiro',48,28)],0),
 // 10 prova às cegas em Bordeaux, 12 especialistas
 SCN((x,t)=>tastingRoom(x,t),[ART(0,(g,t)=>{taster(g,430,990,.72,t,TASTER1);taster(g,1480,990,.72,t,TASTER2,{face:-1,look:-.3,hands:{l:[-90,150,120],r:[80,200,100]}});tastingTable(g,t,{glasses:[[700,'1'],[860,'2'],[1060,'3'],[1220,'4']],candle:960});blindBottle(g,960,790,.7,'?')}),
  PQ(960,230,700,140,'PROVA ÀS CEGAS','BORDEAUX · 2021','cegas',52,30),CH('12 ESPECIALISTAS',960,420,'especialistas')],.05),
 // 11 dois Pétrus gêmeos: ESPAÇO × TERRA
 C3((x,t)=>tastingRoom(x,t),'DOIS GÊMEOS',[ART(0,(g,t)=>{stars23(g,460,360,480,420,3);spaceBottle(g,700,840,1.5);tagHang(g,700,330,'ESPAÇO',1.3)}),ART('outro',(g,t)=>{earth(g,1420,520,70);spaceBottle(g,1220,840,1.5);tagHang(g,1220,330,'TERRA',1.3)}),CH('MESMA SAFRA',960,300,'safra')],.55),
 // 12 deu diferença: cor de tijolo (mais velho) e cheiro de flor
 C3((x,t)=>tastingRoom(x,t),'E DEU DIFERENÇA!',[ART(0,(g,t)=>{glassW(g,640,800,2.1,.42,'#7A0F2A');glassW(g,1280,800,2.1,.42,mixC('#7A0F2A','#A2462A',ap(t,12,'tijolo',1.2)));goldText(g,'TERRA',640,860-20,36);goldText(g,'ESPAÇO',1280,860-20,36)}),
  ART('flor',(g,t)=>flowers(g,1280,330,1,t)),CH('COR DE TIJOLO = VINHO MAIS VELHO',960,280,'tijolo')],.55),
 // 13 Jane Anson: parecia 2 ou 3 anos mais velho
 SCN((x,t)=>tastingRoom(x,t),[ART(0,(g,t,s)=>{anson(g,700,990,.74,t,{write:seg(t,T[s]+1,T[s+1])});tastingTable(g,t,{glasses:[[980,'1'],[1140,'2']]})}),PQ(1400,300,560,140,'+2 A 3 ANOS','MAIS VELHO','três',62,30),CH('JANE ANSON · CRÍTICA',1400,500,'jane')],.05),
 // 14 cedo para concluir; os dois ótimos
 tk(B23,{gest:[[0,'thinking'],[3.4,'open'],[6.6,'point'],[8.6,'rest']],chips:[['POUCA GARRAFA',430,280,'pouca'],['CEDO PARA CONCLUIR',430,390,'cedo'],['OS DOIS: ÓTIMOS!',430,500,'ótimos']],face:t=>({brow:.9,sad:.2,mouth:.4})}),
 // 15 Christie's ~US$ 1 milhão: estojo com a gêmea, taças e saca-rolhas de meteorito
 C3(BAR23,"CHRISTIE'S · 2021",[ART(0,(g,t,s)=>woodCase(g,960,600,.95,ap(t,15,'ofereceu',1.4),t)),PQ(600,300,560,120,'~US$ 1 MILHÃO',null,'milhão',50),CH('SACA-ROLHAS DE METEORITO!',1400,300,'meteorito')],.6),
 // 16 venda particular, preço nunca divulgado
 C3(BAR23,'E VENDEU?',[ST(960,470,'SEGREDO','particular',.62),ART('nunca',(g,t)=>{bigQ(g,420,520,220,1);bigQ(g,1500,520,220,1)}),CH('PREÇO NUNCA DIVULGADO',960,640,'divulgado'),CH('QUEM COMPROU?',960,750,'quem')],.62),
 // 17 320 pedacinhos de videira, ~10 meses no espaço
 SCN((x,t)=>issInterior(x,t),[ART('videira',(g,t)=>{const P=[[1040,380,.1],[1180,560,-.3],[1320,330,.5],[1460,620,.2],[1120,760,-.6],[1560,420,-.2],[1300,780,.7],[980,600,.35]];P.forEach((p,i)=>vineTube(g,p[0],p[1]+Math.sin(t*.8+i)*10,1,p[2]+t*.05*(i%2?1:-1),t))}),
  PQ(560,270,620,140,'320 VIDEIRAS','~10 MESES LÁ EM CIMA','trezentos',52,28),CH('MERLOT + CABERNET',560,520,'merlot'),TX('videira = a planta da uva',560,640,'planta',46)],.12),
 // 18 plantadas na volta; 2024: mais resistentes ao míldio
 SCN((x,t)=>nursery(x,t),[ART(0,(g,t)=>nurseryman(g,500,1110,.86,t,{glow:ap(t,18,'resistentes',1)})),ART('míldio',(g,t)=>{vineLeaf(g,1160,580,1.1,1);goldText(g,'MÍLDIO',1160,790,34);vineLeaf(g,1560,580,1.1,0);goldText(g,'RESISTENTE',1560,790,34)}),
  CH('2024 · UM ESTUDO',1360,170,'estudo'),PQ(1360,300,600,100,'MAIS RESISTENTES',null,'resistentes',44)],.1),
 // 19 mundo mais quente: o estresse do espaço para achar videiras mais fortes
 SCN((x,t)=>vineyard(x,t),[ART('quente',(g,t,s)=>thermoS(g,360,760,420,lerp(.35,.85,ap(t,19,'quente',2)))),ART('fortes',(g,t)=>seedling(g,1300,720,2.4,1,t)),CH('MUNDO MAIS QUENTE',560,200,'quente'),CH('VIDEIRAS MAIS FORTES',1300,330,'fortes')],.2),
 // 20 2026: Texas vai mandar sementes de uva; uma é do Thomas Munson (vídeo da filoxera)
 tk(B23,{gest:[[0,'open'],[3.6,'point'],[7.6,'open'],[11,'rest']],props:(f,t,s)=>fade(f,ap(t,20,'sementes',.5),()=>seedBag(f,1430,700,.85,t)),
  chips:[['2026 · TEXAS',430,260,'texas'],['SEMENTES DE UVA',430,370,'sementes'],['THOMAS MUNSON',430,480,'thomas']],over:(g,t,s)=>miniCard(g,1640,190,'A FILOXERA',ap(t,20,'filoxera',.5)),face:t=>({brow:.6,mouth:.7})}),
];
SC.length=LEN.length;
ddFilm({SC,base:B23,talks:[1,5,14,20],places:{2:.6,4:.6,5:.6,6:.6,7:.6,9:.6,10:.6,14:.6,15:.6,17:.6,18:.6,19:.6,20:.6},cta:['ABRIA OU GUARDAVA?','abria'],
 table:[BAR23,'14 MESES NO ESPAÇO',[
  [(c,cx,cy,t)=>chalice(c,cx,cy+50,2.3,.6,t),'1969','vinho na Lua','(Buzz Aldrin)'],
  [(c,cx,cy)=>steelCyl(c,cx,cy,.68,0,'2000'),'438 DIAS','12 Pétrus','na estação'],
  [(c,cx,cy)=>glassW(c,cx,cy+120,1.25,.42,'#A2462A'),'ÀS CEGAS','"2 a 3 anos','mais velho"'],
  [(c,cx,cy)=>{spaceBottle(c,cx,cy+140,1);goldText(c,'US$',cx,cy-100,44)},'US$ 1 MILHÃO','preço nunca','revelado'],
  [(c,cx,cy,t)=>seedling(c,cx,cy+60,1.3,.7,t),'VIDEIRAS','mais resistentes','ao fungo']]],
 tags:[[1,'foguete'],[1,'astronauta'],[1,'prova'],[1,'milhão'],[2,'sessenta'],[3,'gravidade'],[4,'novembro'],[4,'doze'],[5,'pétrus'],[5,'bordeaux'],[5,'merlot'],[5,'milhares'],[6,'quatrocentos'],[7,'proibida'],[8,'cilindro'],[8,'ninguém'],[9,'janeiro'],[10,'cegas'],[10,'especialistas'],[11,'safra'],[12,'tijolo'],[13,'três'],[14,'pouca'],[14,'cedo'],[14,'ótimos'],[15,'milhão'],[15,'meteorito'],[16,'particular'],[16,'divulgado'],[17,'trezentos'],[18,'resistentes'],[19,'quente'],[19,'fortes'],[20,'texas'],[20,'sementes'],[20,'filoxera']],
 sfx:[[5,'pétrus','lift'],[15,'ofereceu','flip'],[15,'milhão','coins']]});
