// ---------- cenas do vídeo 19 "A garrafa mais cara do mundo" — adega-cofre (thumb B viva), vinhedo, leilão, cozinha do falsificador, bar; cena i = fala i ----------
const B19={set:VAULT,front:cellarTable,bottles:[['exp',1100]],candles:[[560,60]],props:(f,t)=>showcase(f,1460,800,170,250,.72)};
const BR19={set:barWall,front:cellarTable,bottles:[['red',1100]],candles:[[560,60]]};
const stampS=(g,cx,cy,s_,a,k=.55)=>{if(a<=0)return;g.save();g.translate(cx,cy);g.scale(k,k);stamp(g,0,0,s_,a);g.restore()};
const SC=[null,
 // 1 mais de 4 milhões de reais; príncipe, revolução, inseto, fraude
 tk(B19,{gest:[[0,'open'],[2.4,'point'],[5.6,'open']],chips:[['+ DE R$ 4 MILHÕES!',430,240,'milhões'],['PRÍNCIPE',430,350,'príncipe'],['REVOLUÇÃO',430,460,'revolução'],['INSETO',430,570,'bichinho'],['FRAUDE',430,680,'fraude']],face:t=>({brow:1.1,wide:.6,mouth:.6})}),
 // 2 Romanée-Conti 1945, safra, Borgonha
 C3(VAULT,'ROMANÉE-CONTI 1945',[ART(0,(g,t)=>rcBottle(g,560,840,1.5)),CH('SAFRA = ANO DA COLHEITA',1360,300,'safra'),ART('borgonha',(g,t)=>{franceMap(g,1360,600,1,1);goldText(g,'BORGONHA',1500,470,30)}),TX('a região famosa pelos tintos',1360,830,'tintos',34)]),
 // 3 vinhedo minúsculo: 2,5 campos de futebol; ~6 mil garrafas
 SCN((x,t)=>burgundyHill(x,t),[ART('campos',(g,t,s)=>{for(let i=0;i<3;i++)pitch(g,620+i*250,600,230,150,i<2?1:ap(t,3,'meio',.5)*1)}),CH('VINHEDO = ONDE A UVA É PLANTADA',960,170,'vinhedo'),
  PQ(1500,320,440,120,'1,8 HECTARE',null,'campos',46),PQ(1500,470,440,140,'~6 MIL','GARRAFAS POR ANO','seis',56,24)]),
 // 4 1760, Príncipe de Conti põe o nome
 SCN((x,t)=>burgundyHill(x,t),[ART(0,(g,t)=>conti(g,700,900,.66,t,{hands:{l:[-95,205,95],r:[170,30,90]},ro:1})),PQ(1300,300,560,130,'1760','PRIMO DO REI LUÍS XV','1760',60,24),
  ART('nome',(g,t)=>{g.fillStyle='#5A3A1E';g.fillRect(1290,560,16,300);g.fillStyle='#E9DCC0';g.fillRect(1120,500,360,110);g.strokeStyle='#D4A24C';g.lineWidth=5;g.strokeRect(1120,500,360,110);g.fillStyle='#5E1428';g.font='900 36px Cinzel';g.textAlign='center';g.fillText('ROMANÉE-CONTI',1300,568)})]),
 // 5 lenda da Pompadour; Revolução: leiloado
 C3((x,t)=>burgundyHill(x,t),'A LENDA',[ART('pompadour',(g,t)=>pompadour(g,560,900,.62,t)),PQ(560,240,560,120,'MADAME DE POMPADOUR','A FAVORITA DO REI','pompadour',36,24),ST(1000,420,'LENDA','ninguém',.55),
  ART('revolução',(g,t)=>{flag2(g,'fr',1440,330,180);gavel(g,1440,620,1,-.35+.3*Math.sin(t*6)*ap(t,5,'leiloado'))}),CH('REVOLUÇÃO · 1794',1440,820,'leiloado')],.55),
 // 6 a filoxera
 C3((x,t)=>burgundyHill(x,t),'O GRANDE VILÃO',[ART(0,(g,t)=>bigLens(g,640,560,250,900,820,q=>{vineRoot(q,640,660,.8);phylloxera(q,650,540,1.1,t)})),PQ(1400,330,520,130,'FILOXERA','INSETO DA AMÉRICA','filoxera',56,26),CH('COME A RAIZ DA VIDEIRA',1400,500,'raiz'),CH('DESDE 1860',1400,620,'1860')],.55),
 // 7 enxerto × tratamento caro na terra
 C3((x,t)=>burgundyHill(x,t),'A SAÍDA',[PQ(560,300,560,130,'ENXERTO','EUROPEIA + RAIZ AMERICANA','enxerto',56,24),ART('enxerto',(g,t)=>{g.fillStyle='#6A4028';g.fillRect(530,420,60,260);g.fillStyle='#7A5A30';g.fillRect(540,380,40,80);g.strokeStyle='#E2C98A';g.lineWidth=7;for(let i=0;i<4;i++){g.beginPath();g.moveTo(524,440+i*16);g.lineTo(596,446+i*16);g.stroke()}goldText(g,'AMERICANA',560,720,28);goldText(g,'EUROPEIA',700,400,28)}),
  PQ(1360,300,600,130,'ROMANÉE-CONTI:','VIDEIRAS VELHAS SALVAS','romanée',40,26),ART('tratamento',(g,t)=>{reagent(g,1360,700,1.4,true,'rgba(150,200,120,.7)')}),CH('TRATAMENTO CARO NA TERRA',1360,800,'tratamento')],.55),
 // 8 guerra: faltou produto; geada em 1945; ~600 garrafas
 SCN((x,t)=>{burgundyHill(x,t);snow(x,t,.7);x.fillStyle='rgba(220,230,255,.25)';x.fillRect(-900,-600,W+1800,1900)},[CH('SEGUNDA GUERRA: FALTOU O PRODUTO',960,170,'guerra'),CH('GEADA EM 1945',430,300,'geada'),CNT(1440,400,6000,600,'resultado','seiscentas',v=>'~'+fmtK(v),110),TX('garrafas',1440,500,'seiscentas',44)]),
 // 9 videiras arrancadas; 1946–1951 sem Romanée-Conti; volta em 1952
 C3((x,t)=>burgundyHill(x,t),'ARRANCADAS E REPLANTADAS',[ART(0,(g,t)=>{g.strokeStyle=GOLD2;g.lineWidth=6;g.beginPath();g.moveTo(300,560);g.lineTo(1620,560);g.stroke();
  [[360,'1945'],[960,'1946–1951'],[1560,'1952']].forEach(([x,l],i)=>fade(g,i==0?1:ap(t,9,i==1?'seis':'1952',.5),()=>{g.fillStyle=i==1?'#3A1A22':'#D4A24C';g.beginPath();g.arc(x,560,22,0,7);g.fill();goldText(g,l,x,490,i==1?40:52)}))}),
  TX('seis anos sem Romanée-Conti',960,640,'seis',40),CH('VIDEIRAS VELHAS ARRANCADAS',960,330,'arrancadas'),CH('VOLTOU NA SAFRA DE 1952',1500,760,'1952')]),
 // 10 1945: última safra das vinhas de antes da filoxera
 tk(B19,{gest:[[0,'point'],[3.4,'open'],[6.2,'rest']],chips:[['ÚLTIMA SAFRA DAS VINHAS VELHAS',430,300,'última'],['~600 GARRAFAS',430,420,'seiscentas'],['RARIDADE DE VERDADE!',430,540,'raridade']],face:t=>({brow:.9,mouth:.7})}),
 // 11 Sotheby's 2018: US$ 558 mil (estimativa 32 mil)
 SCN((x,t)=>auctionRoom(x,t),[ART(0,(g,t,s)=>{podium(g,1460,880);auctioneer(g,1460,640,.5,t,{face:-1,hands:{l:[-95,205,95],r:[150,0,100]},hold:(x,hl,hr)=>gavel(x,hr[0]+30,hr[1]+20,.6,-.35)});audience(g,900,t,ap(t,11,'saiu',.4))}),
  PQ(500,200,560,120,"SOTHEBY'S · NOVA YORK · 2018",null,0.3,30),CH('CASA DE LEILÕES',500,320,'leilões'),CH('ESTIMATIVA: US$ 32 MIL',500,440,'estimativa'),
  ART('saiu',(g,t,s)=>{const u=easeIO(seg(t,wq(11,'saiu'),wq(11,'mil')+.6));bidBoard(g,960,560,'US$ '+fmtK(Math.round(lerp(32,558,u)))+' MIL',1)})]),
 // 12 adega Drouhin; Acker 2026 recorde US$ 812.500
 SCN((x,t)=>auctionRoom(x,t),[ART(0,(g,t,s)=>{podium(g,1460,880);const hit=ap(t,12,'recorde',.25);auctioneer(g,1460,640,.5,t,{face:-1,hands:{l:[-95,205,95],r:[150,lerp(-40,60,hit),100]},hold:(x,hl,hr)=>gavel(x,hr[0]+30,hr[1]+20,.6,lerp(-.6,0,hit))});audience(g,900,t,ap(t,12,'garrafa',.4))}),
  CH('ADEGA DE ROBERT DROUHIN',500,240,'drouhin'),CH('ACKER · MARÇO DE 2026',500,360,'acker'),ART('recorde',(g,t,s)=>{bidBoard(g,900,560,'US$ 812.500',1);goldText(g,'RECORDE MUNDIAL',900,690,40)})]),
 // 13 Screaming Eagle 6 L, US$ 500 mil (2000)
 C3(barWall,'OUTROS RECORDES',[ART('gigante',(g,t)=>{bigBottle(g,700,840,1.2);wineBottle(g,940,840,1);goldText(g,'750 ml',940,870,30)}),PQ(1400,360,560,140,'SCREAMING EAGLE','TINTO DA CALIFÓRNIA','eagle',40,26),PQ(1400,560,520,140,'US$ 500 MIL','ANO 2000','quinhentos',56,26)]),
 // 14 o lado escuro: Lafite 1787 "Th.J."
 C3(barWall,'O LADO ESCURO',[ART('lafite',(g,t)=>engravedBottle(g,600,840,1.6)),ART('jefferson',(g,t)=>jeffersonFrame(g,1360,480,1.2)),TX('Thomas Jefferson, presidente americano',1360,720,'presidente',34),CH('1985 · US$ 156 MIL',960,280,'cento')]),
 // 15 Rodenstock; peritos: gravação falsa
 C3(barWall,'DE ONDE ELA VEIO?',[ART(0,(g,t)=>{engravedBottle(g,760,840,1.8);bigLens(g,780,620,130,960,800,q=>{q.fillStyle='#141A14';q.fillRect(600,450,400,400);q.fillStyle='rgba(240,236,224,.9)';q.font='italic 600 90px Cormorant';q.textAlign='center';q.fillText('Th.J.',780,650)})}),
  PQ(1400,330,520,130,'HARDY RODENSTOCK','VENDEDOR ALEMÃO','hardy',40,26),CH('NUNCA CONTOU A ORIGEM',1400,480,'nunca'),ST(1400,660,'FALSA?','falsa',.55)]),
 // 16 Kurniawan: falsificava na cozinha; "1945" de produtor que começou em 1982
 SCN((x,t)=>fakerKitchen(x,t),[ART(0,(g,t)=>{g.fillStyle='#4A2A18';g.fillRect(200,760,900,30);fakeLabels(g,520,700);faker(g,1220,900,.62,t,{face:-1,hands:{l:[-130,160,120],r:[90,200,95]}})}),
  PQ(1560,250,500,120,'RUDY KURNIAWAN','O MAIOR FALSIFICADOR','rudy',38,24),PQ(560,300,320,120,'1945?',null,'1945',60),PQ(960,300,320,120,'1982',null,'1982',60),ST(760,450,'IMPOSSÍVEL','1982',.4)]),
 // 17 dez anos de prisão; procedência
 C3((x,t)=>fakerKitchen(x,t),'PEGOU DEZ ANOS',[ART(0,(g,t)=>bars(g,1)),PQ(960,560,820,170,'PROCEDÊNCIA','= A HISTÓRIA COMPROVADA','procedência',70,34)],.6),
 // 18 caro é melhor? o mesmo vinho a 90 e a 10; o cérebro concordou
 tk(BR19,{gest:[[0,'thinking'],[3,'point'],[6.4,'open']],props:(f,t,s)=>{glassW(f,1290,806,1,.42,'#7A1630');glassW(f,1470,806,1,.42,'#7A1630');priceTag(f,1290,560,'US$ 90',ap(t,18,'noventa'),.7);priceTag(f,1470,560,'US$ 10',ap(t,18,'dez'),.7)},
  chips:[['O MESMO VINHO',430,300,'mesmo'],['GOSTARAM MAIS DO CARO',430,420,'gostaram']],over:(g,t,s)=>{fade(g,ap(t,18,'cérebro',.5),()=>brain(g,1380,250,.8,ap(t,18,'concordou',.8)))},face:t=>({brow:.8,mouth:.55})}),
 // 19 às cegas: gosto igual ou até mais do barato
 C3(barWall,'ÀS CEGAS',[ART(0,(g,t)=>{blindGlass(g,620,780,1.6,'#7A1630');blindGlass(g,1300,780,1.6,'#7A1630')}),CH('+ DE 6 MIL PROVAS',960,280,'seis'),ART('gosta',(g,t,s)=>balance(g,960,420,-.12*ap(t,19,'barato',1))),CH('UM POUQUINHO MAIS DO BARATO!',960,860-40,'barato')]),
 // 20 Brasil: Receita leiloou um Romanée-Conti 1978, lance inicial R$ 89 mil
 C3(VAULT,'E AQUI NO BRASIL?',[ART('receita',(g,t)=>{g.fillStyle='#14202A';g.beginPath();g.roundRect(220,300,780,480,20);g.fill();g.strokeStyle='#D4A24C';g.lineWidth=6;g.stroke();goldText(g,'LEILÃO DA RECEITA FEDERAL',610,360,30);rcBottle(g,610,740,1.05)}),
  ART('brasil',(g,t)=>flag2(g,'br',1400,300,150)),PQ(1400,480,520,130,'ROMANÉE-CONTI 1978',null,'1978',40),PQ(1400,660,520,150,'R$ 89 MIL','LANCE INICIAL','lance',64,26)]),
];
SC.length=LEN.length;
ddFilm({SC,base:B19,talks:[1,10,18],places:{2:.6,3:.6,11:.6,13:.6,16:.6,18:.6,20:.6},cta:['ABRIA OU GUARDAVA?','abria'],
 table:[VAULT,'A GARRAFA MAIS CARA',[
  [(c,cx,cy)=>pitch(c,cx,cy,250,160,1),'VINHEDO','1,8 ha, ~6 mil','garrafas/ano'],
  [(c,cx,cy)=>rcBottle(c,cx,cy+150,.95),'1945','última das vinhas','velhas, ~600'],
  [(c,cx,cy)=>gavel(c,cx,cy,1.1,-.35),'RECORDE','US$ 812,5 mil','(2026) ≈ R$ 4,2 mi'],
  [(c,cx,cy)=>{stampS(c,cx,cy,'FALSA?',1,.5)},'FRAUDE','sem procedência,','desconfie'],
  [(c,cx,cy)=>{blindGlass(c,cx,cy+130,1.1,'#7A1630')},'CARO = MELHOR?','às cegas,','nem sempre']]],
 tags:[[1,'milhões'],[1,'príncipe'],[1,'revolução'],[1,'fraude'],[2,'safra'],[2,'borgonha'],[3,'campos'],[3,'seis'],[4,'nome'],[5,'ninguém'],[5,'leiloado'],[6,'filoxera'],[7,'enxerto'],[7,'tratamento'],[8,'geada'],[9,'1952'],[10,'última'],[11,'saiu'],[12,'recorde'],[13,'quinhentos'],[14,'cento'],[15,'falsa'],[16,'1982'],[17,'procedência'],[18,'noventa'],[18,'dez'],[19,'barato'],[20,'lance']],
 sfx:[[11,'mil','coins'],[12,'recorde','coins']]});
