// ---------- cenas do vídeo 21 "O saca-rolhas nasceu numa arma?" — parede de colecionador (thumb C viva), bar com mosquete; cena i = fala i ----------
const B21={set:ARMS,front:cellarTable,bottles:[['red',1100]],candles:[[560,60]]};
const COLW=(x,t)=>collectionWall(x,t,{lamp:1350});
const stampS=(g,cx,cy,s_,a,k=.55)=>{if(a<=0)return;g.save();g.translate(cx,cy);g.scale(k,k);stamp(g,0,0,s_,a);g.restore()};
const SC=[null,
 // 1 soldado, padre, garçom, 24 mil
 tk(B21,{gest:[[0,'open'],[2.6,'point'],[5.4,'open']],chips:[['SOLDADO',430,260,'soldado'],['PADRE INVENTOR',430,370,'padre'],['GARÇOM ALEMÃO',430,480,'garçom'],['~24 MIL SACA-ROLHAS',430,590,'vinte']],face:t=>({brow:.7,mouth:.65})}),
 // 2 anos 1630: o mosquete, carregado pela boca
 SCN((x,t)=>camp17(x,t),[ART(0,(g,t)=>musketeer(g,1340,900,.62,t,{rod:false})),PQ(480,220,520,130,'ANOS 1630','O MOSQUETE','trinta',56,28),CH('ESPINGARDA ANTIGA',480,380,'espingarda'),CH('PÓLVORA · BALA · BUCHA',480,500,'pólvora')],.05),
 // 3 tiro falhou: bala e bucha entaladas; gun worm
 C3((x,t)=>camp17(x,t),'QUANDO O TIRO FALHAVA',[ART(0,(g,t,s)=>barrelCut(g,1060,520,1000,ap(t,3,'espiral',1.4),0,t)),CH('BALA E BUCHA ENTALADAS',700,330,'entaladas'),PQ(960,740,760,140,'GUN WORM','A MINHOCA DA ARMA','worm',56,28)],.6),
 // 4 a espiral gira, fisga e puxa
 C3((x,t)=>camp17(x,t),'GIRA, FISGA E PUXA',[ART(0,(g,t,s)=>barrelCut(g,1060,520,1000,1,ap(t,4,'puxa',1.6),t)),CH('GIRA',420,330,'gira'),CH('FISGA',760,330,'fisga'),CH('PUXA!',1100,330,'puxa'),TX('te lembra alguma coisa?',960,740,'lembra',44)],.6),
 // 5 a rolha voltava com a garrafa forte; mini-cartão do vídeo 3
 tk(B21,{gest:[[0,'point'],[3,'open'],[6,'rest']],props:(f,t,s)=>{fade(f,ap(t,5,'rolha',.5),()=>oldDarkBottle(f,1340,806,.8,1))},chips:[['A ROLHA VOLTAVA',430,300,'rolha'],['GARRAFA DE VIDRO FORTE',430,420,'garrafa']],
  over:(g,t,s)=>miniCard(g,1560,300,'E ANTES DA ROLHA?','NOSSO VÍDEO',ap(t,5,'lembra',.5)),face:t=>({brow:.5,mouth:.7})}),
 // 6 a rolha entrava inteira; alguém pegou a espiral
 C3(ARMS,'A ROLHA ENTRAVA INTEIRA',[ART(0,(g,t)=>{oldDarkBottle(g,600,860,1.6,0);g.fillStyle='#C99A5B';g.fillRect(584,860-262*1.6+30,32,60)}),ART('espiral',(g,t,s)=>{const u=ap(t,6,'enfiou',1.2);gunWorm(g,1000-u*360,300+u*0,360,.7,Math.PI/2*u)}),ST(1400,600,'QUEM? NINGUÉM SABE','ninguém',.45)],.55),
 // 7 1681: "minhoca de aço de tirar rolha"; worm
 C3(ARMS,'O PRIMEIRO REGISTRO',[ART(0,(g,t)=>{scroll(g,700,520,700,380,'','');goldText(g,'1681',700,410,64);g.save();g.font='italic 600 40px Cormorant';g.fillStyle='#5E1428';g.textAlign='center';g.fillText('"minhoca de aço',700,500);g.fillText('de tirar rolha"',700,550);g.restore();txt(g,'catálogo de museu',700,640,30,'#5E1428')}),
  ART('worm',(g,t)=>{tScrew(g,1440,440,.9,0,0);arrow(g,1640,700,1480,620,GOLD2,6)}),CH('A ESPIRAL = WORM',1440,800,'worm')]),
 // 8 parafuso de garrafa → corkscrew (1720)
 C3(ARMS,'E O NOME?',[ART(0,(g,t)=>{g.strokeStyle=GOLD2;g.lineWidth=6;g.beginPath();g.moveTo(300,520);g.lineTo(1620,520);g.stroke()}),PQ(560,400,560,130,'"BOTTLESCREW"','PARAFUSO DE GARRAFA','parafuso',40,24),ARW(860,520,1060,520,'corkscrew'),
  PQ(1360,400,560,130,'"CORKSCREW" · 1720','PARAFUSO DE ROLHA','corkscrew',38,24),CH('O NOSSO SACA-ROLHAS',1360,640,'nosso')]),
 // 9 1795: reverendo Samuel Henshall, 1ª patente
 SCN((x,t)=>georgian(x,t),[ART(0,(g,t)=>henshall(g,1160,900,.64,t)),PQ(480,240,560,130,'REV. SAMUEL HENSHALL','PADRE INGLÊS · 1795','reverendo',36,26),CH('1ª PATENTE',480,400,'patente'),TX('"essa invenção é minha"',480,500,'invenção',40)],.05),
 // 10 o botão de Henshall
 C3((x,t)=>georgian(x,t),'O BOTÃO DE HENSHALL',[ART(0,(g,t,s)=>buttonClose(g,760,560,1.2,t,ap(t,10,'girando',1.6))),CH('TRAVA NA ROLHA',1400,330,'trava'),CH('A ROLHA GIRA JUNTO',1400,450,'gira'),PQ(1400,620,480,130,'SIMPLES E GENIAL!',null,'genial',40)],.55),
 // 11 1882: o abridor de garçom, Karl Wienke
 SCN((x,t)=>rest1880(x,t),[ART(0,(g,t)=>wienke(g,1180,900,.64,t)),PQ(500,240,540,130,'KARL WIENKE','1882 · ALEMANHA','wienke',50,28),ART('alemão',(g,t)=>flag2(g,'de',500,410,130)),CH('O ABRIDOR DE GARÇOM',500,560,'abridor')],.05),
 // 12 canivete: espiral, alavanca, lâmina
 C3((x,t)=>rest1880(x,t),'UM CANIVETE',[ART(0,(g,t)=>waiterKey(g,820,540,1.6,-.15)),CH('1. ESPIRAL',1440,300,'espiral'),CH('2. ALAVANCA',1440,420,'alavanca'),CH('3. LÂMINA PRO LACRE',1440,540,'lâmina'),CH('CABE NO BOLSO DO AVENTAL!',960,800,'bolso')],.55),
 // 13 wine key: relato, sem prova
 C3((x,t)=>rest1880(x,t),'A WINE KEY',[PQ(560,380,520,150,'"WIENKE"',null,'wienke',60),ARW(860,380,1060,380,'mal'),PQ(1360,380,520,150,'"WINE KEY"','A CHAVE DO VINHO','chave',50,24),ST(960,620,'RELATO, SEM PROVA','ninguém',.5)],.55),
 // 14 saca-rolhas de borboleta (1930, EUA)
 C3(ARMS,'O DE BRACINHOS',[ART(0,(g,t,s)=>{const a=ap(t,14,'sobem',1),b=ap(t,14,'abaixa',1);wingAnim(g,700,380,1.2,a*(1-b))}),CH('GIRA: AS ASAS SOBEM',1400,320,'sobem'),CH('ABAIXA: A ROLHA SAI',1400,440,'abaixa'),PQ(1400,620,460,130,'1930','PATENTE · EUA','trinta',56,24),ART('estados',(g,t)=>flag2(g,'us',1400,780,110))]),
 // 15 1979: Herbert Allen e o Screwpull (MoMA)
 C3((x,t)=>museum(x,t),'O SCREWPULL',[ART(0,(g,t)=>allen(g,560,900,.64,t)),PQ(1360,260,560,130,'HERBERT ALLEN','TEXAS · 1979','herbert',46,26),CH('ESPIRAL COM TEFLON',960,700,'teflon'),ART('moma',(g,t)=>{pedestal(g,1360,880,'MoMA');screwpull(g,1360,500,.8)})],.5),
 // 16 os de alavanca: desce, sobe, sai
 C3(ARMS,'UM MOVIMENTO SÓ',[ART(0,(g,t,s)=>leverScrew(g,700,860,1.4,clamp(seg(t,wq(16,'desce'),wq(16,'sai')+.4)))),CH('DESCE',1400,320,'desce'),CH('SOBE',1400,440,'sobe'),CH('SEM FORÇA NENHUMA!',1400,600,'força')]),
 // 17 clube de colecionadores (1974), só 50
 C3(COLW,'GENTE APAIXONADA',[ART('clube',(g,t)=>clubTable(g,960,600,50)),PQ(960,330,560,130,'CLUBE · 1974','SÓ 50 MEMBROS','cinquenta',50,28)],.55),
 // 18 recorde Guinness: 23.965 (Bucareste); museu na França
 SCN((x,t)=>COLW(x,t),[ART(0,(g,t)=>collector(g,1240,900,.64,t)),ART(0,(g,t)=>flag2(g,'ro',300,200,120)),CNT(560,330,0,23965,'vinte','saca-rolhas',v=>fmtK(v),80),CH('BUCARESTE · GUINNESS',560,460,'bucareste'),CH('MUSEU NA FRANÇA (PROVENÇA)',560,580,'museu')],.15),
 // 19 Portugal: metade da cortiça do mundo
 SCN((x,t)=>montado(x,t),[ART(0,(g,t)=>corkOak(g,1360,880,1,1,t)),ART('portugal',(g,t)=>{oldMap(g,480,520,320,420,PT21);flag2(g,'pt',480,780,110)}),PQ(960,240,700,130,'PORTUGAL ≈ METADE','DA CORTIÇA DO MUNDO','metade',44,28),TX('cortiça: a casca do sobreiro',1360,460,'casca',36)],.1),
];
SC.length=LEN.length;
ddFilm({SC,base:B21,talks:[1,5],places:{2:.6,5:.6,9:.6,11:.6,15:.6,17:.6,19:.6},cta:['QUAL MORA NA GAVETA?','gaveta'],
 table:[COLW,'A HISTÓRIA DO SACA-ROLHAS',[
  [(c,cx,cy)=>{c.save();c.translate(cx,cy);c.rotate(-Math.PI/2);gunWorm(c,-150,0,300,.5,0);c.restore()},'ANOS 1630','a espiral do','mosquete'],
  [(c,cx,cy)=>{scroll(c,cx,cy,240,160,'','');goldText(c,'1681',cx,cy,44)},'1681','1º registro escrito',''],
  [(c,cx,cy)=>tScrew(c,cx,cy,.6,0,0),'1795','1ª patente:','o padre Henshall'],
  [(c,cx,cy)=>waiterKey(c,cx,cy,.9,-.2),'1882','garçom: Wienke','(wine key = relato)'],
  [(c,cx,cy)=>wingScrew(c,cx,cy,.7),'RECORDE','23.965','saca-rolhas']]],
 tags:[[1,'soldado'],[1,'padre'],[1,'garçom'],[1,'vinte'],[2,'pólvora'],[3,'worm'],[4,'gira'],[4,'fisga'],[4,'puxa'],[5,'lembra'],[6,'ninguém'],[7,'worm'],[8,'corkscrew'],[9,'patente'],[10,'trava'],[10,'genial'],[11,'abridor'],[12,'espiral'],[12,'alavanca'],[12,'lâmina'],[13,'chave'],[13,'ninguém'],[14,'sobem'],[14,'abaixa'],[15,'herbert'],[15,'moma'],[16,'desce'],[16,'sobe'],[17,'cinquenta'],[18,'vinte'],[18,'museu'],[19,'metade']],
 sfx:[[16,'sai','corkin'],[14,'abaixa','corkin'],[10,'solta','corkin']]});
