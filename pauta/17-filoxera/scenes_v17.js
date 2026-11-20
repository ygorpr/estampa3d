// ---------- cenas do vídeo 17 "Filoxera: a praga do vinho" — abre no vinhedo seco (thumb B viva), explica no bar e no gabinete; cena i = fala i ----------
const B17={set:barWall,front:cellarTable,bottles:[['red',1100]],candles:[[560,60]]};
const CB17={set:cabinet,front:cellarTable,bottles:[['red',1100]],candles:[[560,60]]};
const SC=[null,
 // 1 a partir de 1863: de 2/3 a 9/10 dos vinhedos
 C3((x,t)=>deadVineyard(x,t),'A PARTIR DE 1863',[ART(0,(g,t,s)=>europeMap(g,760,560,880,600,easeIO(seg(t,T[s]+.6,T[s+1]-.4)))),
  PQ(1490,420,460,150,'2/3','DOS VINHEDOS','dois',80,26),PQ(1490,640,460,150,'9 EM 10','EM ALGUNS LUGARES','nove',70,24),CH('VINHEDO = PLANTAÇÃO DE UVA',960,840,'plantações')]),
 // 2 raiz americana + faca afiada
 tk(B17,{gest:[[0,'thinking'],[2.4,'open'],[4.6,'point']],props:(f,t,s)=>{fade(f,ap(t,2,'raiz',.4),()=>vineRoot(f,1420,640,.55));fade(f,ap(t,2,'faca',.4),()=>{f.save();f.translate(1420,560);f.rotate(-.7);f.fillStyle='#C9CDD2';f.beginPath();f.moveTo(0,-14);f.lineTo(190,0);f.lineTo(0,14);f.closePath();f.fill();f.fillStyle='#4A2A14';f.fillRect(-110,-16,110,32);f.restore()})},
  chips:[['UMA RAIZ AMERICANA',430,300,'raiz'],['E UMA FACA AFIADA',430,420,'faca']],face:t=>({brow:.6,mouth:.7})}),
 // 3 o vilão: filoxera (na lupa)
 C3((x,t)=>cabinet(x,t),'O VILÃO',[ART(0,(g,t)=>bigLens(g,700,540,250,980,820,q=>{vineRoot(q,690,640,.8);phylloxera(q,700,520,1.15,t)})),
  PQ(1420,420,520,150,'FILOXERA',null,'filoxera',70),CH('PRAGA: ATACA EM MASSA',1420,600,'praga'),CH('UM INSETO',1420,720,'inseto')],.6),
 // 4 parente do pulgão: chupa a raiz, a planta morre
 C3((x,t)=>deadVineyard(x,t),'O QUE ELE FAZ',[ART(0,(g,t,s)=>soilCut(g,960,860,t,ap(t,4,'morre',1.2)+.3*ap(t,4,'apodrece',1),1)),
  CH('PARENTE DO PULGÃO',430,300,'pulgão'),CH('CHUPA A RAIZ',1490,300,'chupa'),CH('VIDEIRA = PÉ DE UVA',1490,420,'videira'),ST(430,450,'A PLANTA MORRE','morre',.5)],.55),
 // 5 o nome: folha seca; vastatrix
 C3((x,t)=>cabinet(x,t),'O NOME',[PQ(560,380,620,170,'PHYLLOXERA','GREGO: "FOLHA SECA"','grego',60,30),
  ART('seca',(g,t)=>{for(let i=0;i<3;i++){g.save();g.translate(440+i*120,620);g.rotate(.4*i-.3);g.fillStyle='#8A6A2A';g.beginPath();for(let k=0;k<5;k++){const a=-Math.PI/2+(k-2)*.6;g.lineTo(Math.cos(a)*60,Math.sin(a)*60);g.lineTo(Math.cos(a+.3)*28,Math.sin(a+.3)*28)}g.closePath();g.fill();g.restore()}}),
  PQ(1360,380,620,170,'VASTATRIX','A DEVASTADORA','vastatrix',66,30),ART('devastadora',(g,t)=>phylloxera(g,1360,640,.9,t))],.6),
 // 6 veio da América do Norte, videiras nativas se defendem
 SCN((x,t)=>{usForest(x,t);x.strokeStyle='#3A2A14';x.lineWidth=30;x.lineCap='round';x.beginPath();x.moveTo(960,800);x.quadraticCurveTo(900,600,980,420);x.stroke();for(let i=0;i<9;i++){x.fillStyle='#3E7A34';x.beginPath();x.ellipse(860+i*30,400+Math.sin(i)*40,50,32,i,0,7);x.fill()}},
  [ART(0,(g,t)=>{phylloxera(g,1120,820+Math.abs(Math.sin(t*5))*-40,.45,t)}),CH('AMÉRICA DO NORTE',430,170,'américa'),CH('CONVIVEM HÁ MILÊNIOS',1460,170,'milênios'),PQ(960,300,600,120,'SE DEFENDEM!',null,'defender',50)]),
 // 7 navio a vapor: viagem curta, o bicho chegou vivo
 SCN((x,t)=>steamQuay(x,t),[CH('O NAVIO A VAPOR',430,170,'vapor'),PQ(1460,200,560,130,'VELA: ~1 MÊS','VAPOR: ~10 DIAS','curta',40,30),ART('mudas',(g,t)=>{seedlingBox(g,420,880,1.1);phylloxera(g,500,700,.22,t)}),CH('CHEGOU VIVO!',960,330,'vivo')]),
 // 8 1863, sul da França: vinhateiro coça a cabeça
 SCN((x,t)=>deadVineyard(x,t),[ART(0,(g,t)=>ve(g,1260,900,.66,t,{face:-1,look:-.4,hands:{l:[-90,205,95],r:[70,-90,110]}})),PQ(500,250,420,140,'1863','SUL DA FRANÇA','1863',64,26),CH('NINGUÉM SABIA POR QUÊ',500,420,'ninguém')]),
 // 9 Planchon com a lupa: raiz coberta de bichinhos amarelos (1868)
 C3((x,t)=>deadVineyard(x,t),'CINCO ANOS DEPOIS · 1868',[ART(0,(g,t)=>planchon(g,560,900,.66,t,{look:.6,lookY:.4,hands:{l:[120,170,120],r:[170,90,110]},hold:(x,hl,hr)=>{vineRoot(x,hl[0]+80,hl[1]+10,.35)}})),
  ART('lupa',(g,t)=>bigLens(g,1260,560,220,980,760,q=>{vineRoot(q,1240,640,.75);tinyBugs(q,[[1160,600,.3,0],[1260,630,.34,1],[1340,610,.28,0],[1220,560,.26,1]],t)})),
  PQ(1460,270,560,130,'JULES-ÉMILE PLANCHON','BOTÂNICO: ESTUDA PLANTAS','botânico',36,24),CH('BICHINHOS AMARELOS!',1260,840,'amarelos')],.5),
 // 10 a praga se espalha: Bordeaux, Borgonha, Champagne, Itália, Alemanha
 C3((x,t)=>deadVineyard(x,t),'A PRAGA CORRIA SOLTA',[ART(0,(g,t,s)=>{europeMap(g,960,540,1100,640,lerp(.2,.85,easeIO(seg(t,T[s],T[s+1]))));const P=(w,p,l)=>{const [x,y]=mp(960,540,1100,640,p);pin(g,x,y,l,ap(t,10,w))};
  P('bordeaux',[.27,.6],'BORDEAUX');P('borgonha',[.36,.52],'BORGONHA');P('champagne',[.36,.4],'CHAMPAGNE');P('itália',[.5,.72],'ITÁLIA');P('alemanha',[.48,.36],'ALEMANHA')})],.6),
 // 11 em 14 anos, a França perdeu quase 3/4 do vinho
 C3((x,t)=>deadVineyard(x,t),'EM CATORZE ANOS',[ART(0,(g,t,s)=>{g.fillStyle='#5A2E1C';g.fillRect(380,820,1160,16);for(let i=0;i<8;i++)pipaEnd(g,480+(i%4)*130,755-Math.floor(i/4)*130,62);goldText(g,'1875',675,450,48);
  const u=easeIO(seg(t,wq(11,'perdeu'),wq(11,'perdeu')+1.5)),n=Math.max(2,Math.round(8-6*u));for(let i=0;i<8;i++)fade(g,i<n?1:.12,()=>pipaEnd(g,1050+(i%4)*130,755-Math.floor(i/4)*130,62));goldText(g,'1889',1245,450,48)}),
  CH('−3/4 DO VINHO',960,300,'três')]),
 // 12 prêmio de 300 mil francos
 C3((x,t)=>cabinet(x,t),'UMA FORTUNA PELA CURA',[ART('fortuna',(g,t)=>poster(g,700,540,620,520,'PRÊMIO','300.000','FRANCOS')),
  ART('ideias',(g,t)=>{for(let i=0;i<6;i++){const u=((t*.4+i*.17)%1);g.save();g.translate(1150+i*110,820-u*560);g.rotate(Math.sin(t+i)*.5);g.fillStyle='#F4ECD8';g.fillRect(-50,-34,100,68);g.strokeStyle='#8A6A3A';g.lineWidth=3;for(let k=0;k<3;k++){g.beginPath();g.moveTo(-36,-14+k*14);g.lineTo(36,-14+k*14);g.stroke()}g.restore()}}),CH('IDEIAS MALUCAS!',1440,240,'malucas')]),
 // 13 inundar, veneno, sapo vivo
 C3((x,t)=>deadVineyard(x,t),'NADA FUNCIONOU',[ART('inundar',(g,t)=>{g.save();g.fillStyle='rgba(80,120,160,.7)';g.beginPath();g.roundRect(220,560,440,240,20);g.fill();g.strokeStyle='rgba(255,255,255,.4)';g.lineWidth=4;for(let i=0;i<4;i++){g.beginPath();g.moveTo(250+i*100+Math.sin(t*2+i)*10,620+i*40);g.lineTo(320+i*100,620+i*40);g.stroke()}g.restore();goldText(g,'INUNDAR',440,490,40)}),
  ART('veneno',(g,t)=>{syringe(g,960,640,.8);goldText(g,'VENENO NO CHÃO',960,430,40)}),ART('sapo',(g,t)=>{g.fillStyle='#4A2A1A';g.fillRect(1300,700,380,100);frog(g,1490,660,.9,t);goldText(g,'UM SAPO VIVO?',1490,480,40)}),
  TX('dizem que...',1490,560,'dizem',34),ST(960,300,'NÃO FUNCIONOU','pé',.5)]),
 // 14 a resposta: os Estados Unidos
 C3((x,t)=>usForest(x,t),'NA TERRA DO INIMIGO',[ART('nada',(g,t)=>{phylloxera(g,560,580,.9,t)}),ARW(760,580,1160,580,'resposta',10),ART('estados',(g,t)=>{flag2(g,'us',1400,580,320)}),CH('ESTADOS UNIDOS',1400,800,'estados')]),
 // 15 Riley + Planchon: aperto de mão
 C3((x,t)=>cabinet(x,t),'UNIÃO DE CIENTISTAS',[ART(0,(g,t,s)=>{const k=ap(t,15,'juntou',.8);riley(g,lerp(1500,1110,k),900,.64,t,{face:-1,hands:{l:[-95,205,95],r:[lerp(95,175,k),lerp(205,120,k),110]},hold:(x,hl,hr)=>{x.fillStyle='#8A5A2E';x.fillRect(hl[0]-80,hl[1]-40,160,90);x.fillStyle='#2A0A12';x.font='900 22px Cinzel';x.textAlign='center';x.fillText('MISSOURI',hl[0],hl[1]+10)}});
  planchon(g,lerp(420,780,k),900,.64,t,{hands:{l:[-95,205,95],r:[lerp(95,175,k),lerp(205,120,k),110]}})}),
  PQ(1460,250,520,130,'CHARLES RILEY','ESTUDIOSO DE INSETOS','riley',40,24),CH('LÁ ELAS QUASE NÃO SOFRIAM',560,250,'sofriam')],.5),
 // 16 a ideia: enxertar (passo a passo)
 C3((x,t)=>deadVineyard(x,t),'A IDEIA: ENXERTAR',[ART(0,(g,t,s)=>{const u=3*clamp(seg(t,wq(16,'galho'),wq(16,'cicatrizam')+.6));graftSteps(g,700,860,1.15,u)}),
  CH('1. CORTA A RAIZ AMERICANA',1400,330,'enxerto'),CH('2. ENCAIXA O GALHO',1400,450,'encaixado'),CH('3. AMARRA',1400,570,'cicatrizam'),PQ(1400,720,560,120,'VIRAM UMA PLANTA SÓ',null,'só',38)],.6),
 // 17 porta-enxerto aguenta o inseto; em cima a mesma uva
 C3((x,t)=>deadVineyard(x,t),'O PORTA-ENXERTO',[ART(0,(g,t)=>{graftSteps(g,800,860,1.15,3.2);grapesC(g,860,370,.8,'#4A1A3A')}),ART('aguenta',(g,t)=>{const u=(t*.7)%1;g.save();g.globalAlpha*=1-u;phylloxera(g,1040+u*160,800,.3,t,{flip:1});g.restore()}),
  CH('EMBAIXO: AGUENTA O INSETO',1500,760,'aguenta'),CH('EM CIMA: A MESMA UVA',1440,330,'cima')],.6),
 // 18 milhões de mudas; Munson do Texas; medalhas
 C3((x,t)=>steamQuay(x,t),'MILHÕES DE MUDAS',[ART('milhões',(g,t)=>{for(let i=0;i<3;i++)seedlingBox(g,360+i*190,870-i*20,.8)}),ART('munson',(g,t)=>munson(g,1180,900,.62,t)),
  PQ(1560,250,500,130,'THOMAS MUNSON','TEXAS','munson',40,26),ART('medalha',(g,t)=>{medal(g,1560,520,1,t);medal(g,1720,560,.8,t+1)}),CH('AS RAÍZES CERTAS',560,250,'raízes')],.55),
 // 19 décadas, fraude, Argélia
 C3((x,t)=>harbor(x,t),'DÉCADAS PRA REPLANTAR',[ART('fraude',(g,t)=>{pipaEnd(g,480,560,160);stampS(g,480,560,'FALSO',1,.45)}),CH('UVA-PASSA',480,320,'passa'),CH('ÁGUA COM AÇÚCAR',480,800,'água'),
  ART('argélia',(g,t)=>{ship(g,1380+Math.sin(t)*8,600,.8);arrow(g,1180,700,1650,700,GOLD2,7)}),PQ(1380,320,460,120,'ARGÉLIA',null,'argélia',56)],.5),
 // 20 Chile: nunca foi atingido; pé-franco
 SCN((x,t)=>chileAndes(x,t),[CH('QUASE TODO VINHO EUROPEU: ENXERTADO',960,170,'enxertada'),ART('chile',(g,t)=>flag2(g,'cl',300,330,150)),CH('ANDES · DESERTO · MAR',400,460,'andes'),
  PQ(1440,420,600,150,'PÉ-FRANCO','= RAIZ PRÓPRIA','pé-franco',60,30)],.05),
 // 21 Colares: na areia da praia
 SCN((x,t)=>colaresSand(x,t),[ART('colares',(g,t)=>flag2(g,'pt',300,200,140)),PQ(960,200,520,120,'COLARES · PORTUGAL',null,'colares',40),CH('NA AREIA, O INSETO NÃO ATACA',960,330,'areia')]),
 // 22 Brasil: Isabel aguenta; finas vão enxertadas
 SCN((x,t)=>serraGaucha(x,t),[ART('brasil',(g,t)=>flag2(g,'br',300,200,150)),CH('A FILOXERA ESTÁ AQUI',960,170,'aqui'),CH('ISABEL: AMERICANA, AGUENTA',520,780,'isabel'),CH('UVAS FINAS: ENXERTADAS',1440,780,'enxertadas')]),
];
const stampS=(g,cx,cy,s_,a,k=.55)=>{if(a<=0)return;g.save();g.translate(cx,cy);g.scale(k,k);stamp(g,0,0,s_,a);g.restore()};
SC.length=LEN.length;
ddFilm({SC,base:B17,talks:[2],places:{1:.6,3:.6,6:.6,7:.6,8:.6,12:.6,14:.6,15:.6,18:.6,20:.6,21:.6,22:.6},cta:['PÉ-FRANCO?','pé-franco'],
 table:[(x,t)=>barWall(x,t),'A PRAGA DO VINHO',[
  [(c,cx,cy,t)=>phylloxera(c,cx,cy,.7,t),'O VILÃO','filoxera,','inseto de 1 mm'],
  [(c,cx,cy,t)=>{europeMap(c,cx,cy,280,220,.8)},'O ESTRAGO','até 9 em 10','vinhedos (1863)'],
  [(c,cx,cy,t)=>graftSteps(c,cx-30,cy+170,.62,3.2),'A SALVAÇÃO','enxerto em','raiz americana'],
  [(c,cx,cy,t)=>{flag2(c,'cl',cx,cy-60,150);flag2(c,'pt',cx,cy+70,150)},'QUEM ESCAPOU','Chile e as areias','de Colares'],
  [(c,cx,cy,t)=>{grapesC(c,cx,cy,1.2,'#3A1A4A');flag2(c,'br',cx,cy+140,90)},'NO BRASIL','a Isabel','aguenta']]],
 tags:[[1,'dois'],[1,'nove'],[2,'raiz'],[2,'faca'],[3,'filoxera'],[4,'chupa'],[4,'morre'],[5,'grego'],[5,'vastatrix'],[6,'defender'],[7,'vapor'],[7,'vivo'],[8,'1863'],[9,'botânico'],[9,'amarelos'],[10,'bordeaux'],[10,'borgonha'],[10,'champagne'],[10,'itália'],[10,'alemanha'],[11,'três'],[12,'fortuna'],[13,'inundar'],[13,'veneno'],[13,'sapo'],[14,'estados'],[15,'riley'],[16,'enxerto'],[16,'encaixado'],[16,'cicatrizam'],[17,'aguenta'],[18,'munson'],[18,'medalha'],[19,'fraude'],[19,'argélia'],[20,'chile'],[20,'pé-franco'],[21,'colares'],[22,'isabel'],[22,'enxertadas']]});
