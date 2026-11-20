// ---------- cenas do vídeo 27 "Tampa de rosca é vinho barato?" — bar com adega envidraçada (thumb C viva); cena i = fala i ----------
// Garrafa SEMPRE pelo gargalo (rótulo livre); mão de descanso atrás da garrafa ou no balcão.
const B27={set:BARA,front:cellarTable,bottles:[['white',1100]],candles:[[560,60]]};
const LABS=(x,t)=>lab(x,t);
const stampS=(g,cx,cy,s_,a,k=.55)=>{if(a<=0)return;g.save();g.translate(cx,cy);g.scale(k,k);stamp(g,0,0,s_,a);g.restore()};
const SC=[null,
 // 1 fungo, Austrália, Nova Zelândia, ploc
 tk(B27,{gest:[[0,'open'],[2.6,'point'],[5.4,'open']],chips:[['FUNGO',430,260,'fungo'],['AUSTRÁLIA',430,370,'austrália'],['UM PAÍS INTEIRO',430,480,'país'],['PLOC!',430,590,'som']],face:t=>({brow:.7,mouth:.65})}),
 // 2 a rolha de cortiça, casca do sobreiro, ~400 anos; um ponto fraco
 C3((x,t)=>montado(x,t),'A ROLHA DE CORTIÇA',[ART(0,(g,t)=>corkOak(g,560,880,1,1,t)),ART('rolha',(g,t)=>bigCork(g,1360,560,1.6)),CH('CASCA DO SOBREIRO',560,250,'casca'),PQ(1360,280,520,120,'~400 ANOS',null,'quatrocentos',56),CH('UM PONTO FRACO',1360,800,'fraco')],.5),
 // 3 bouchonné: gosto de rolha (papelão molhado, porão mofado)
 C3(BARA,'O GOSTO DE ROLHA',[ART(0,(g,t)=>{glassW(g,640,860,2,.42,'#E8D488');grayCloud27(g,640,330,1.3,ap(t,3,'cheiro',.6))}),PQ(1340,330,600,150,'BOUCHONNÉ','= GOSTO DE ROLHA','bouchonné',56,28),CH('PAPELÃO MOLHADO',1340,500,'papelão'),CH('PORÃO MOFADO',1340,620,'mofado')]),
 // 4 de <1 até ~3 em cada 100
 C3(BARA,'QUANTAS GARRAFAS?',[ART(0,(g,t,s)=>bottleRow(g,520,420,100,20,ap(t,4,'três',.4)>0?[13,47,82]:ap(t,4,'uma',.4)>0?[47]:[],t)),PQ(960,780,760,130,'DE MENOS DE 1 A ~3 EM 100',null,'cem',40),TX('até ser a sua garrafa especial!',960,260,'especial',40)]),
 // 5 a tampa de rosca nasce na França (fim dos anos 50); Stelvin
 SCN((x,t)=>factory50(x,t),[ART(0,(g,t)=>flag2(g,'fr',300,200,140)),PQ(960,240,700,130,'FÁBRICA FRANCESA','FIM DOS ANOS 50','fábrica',46,28),PQ(1480,420,440,120,'STELVIN',null,'stelvin',56)]),
 // 6 anos 70: Austrália testa, o público acha cara de barato; ~20 anos de rolha
 C3(BARA,'ANOS 70 NA AUSTRÁLIA',[ART(0,(g,t)=>{g.strokeStyle=GOLD2;g.lineWidth=6;g.beginPath();g.moveTo(260,560);g.lineTo(1660,560);g.stroke()}),PQ(420,440,340,120,'ANOS 70','ROSCA','setenta',44,26),ST(420,680,'CARA DE BARATO','barato',.42),
  PQ(960,440,440,120,'QUASE 20 ANOS','DE ROLHA','vinte',40,24),PQ(1500,440,320,120,'2000',null,'vinte',56)]),
 // 7 Clare Valley, 2000: os produtores trocam juntos
 SCN((x,t)=>clareValley(x,t),[ART(0,(g,t,s)=>{const u=ap(t,7,'trocaram',1);for(let i=0;i<7;i++){const bx=520+i*150;if(u<.5)corkBottle(g,bx,900,.9);else screwBottle(g,bx,900,.9,0,'#6F8F57')}}),PQ(500,220,560,130,'CLARE VALLEY · 2000','AUSTRÁLIA','clare',40,26),CH('RIESLING: VINHO BRANCO',1440,220,'riesling'),CH('+ DE 10 PRODUTORES JUNTOS',1440,340,'dez'),CH('VINHOS DE GUARDAR!',1440,460,'guardar')]),
 // 8 Nova Zelândia: 1% em 2001 → quase todos
 C3(BARA,'NOVA ZELÂNDIA',[ART(0,(g,t)=>nzFlag(g,480,420,300)),ART(0,(g,t,s)=>{const u=easeIO(seg(t,wq(8,'hoje'),wq(8,'todos')+.6));g.fillStyle='rgba(20,6,10,.8)';g.fillRect(900,560,780,90);g.fillStyle=GOLD2;g.fillRect(908,568,lerp(12,764,u),74);goldText(g,u<.5?'1% · 2001':'QUASE TODOS!',1290,500,48,'Cinzel',900)}),CH('ATÉ OS MELHORES!',1290,760,'melhores')]),
 // 9 e o vinho caro de guardar? a ciência
 tk(B27,{gest:[[0,'thinking'],[3,'open'],[5,'point']],props:(f,t,s)=>{fade(f,ap(t,9,'caro',.5),()=>oldBottle(f,1340,806,.75,'#1E3A31'))},chips:[['COM ROSCA, ELE ENVELHECE?',430,300,'envelhece'],['AÍ ENTRA A CIÊNCIA',430,420,'ciência']],face:t=>({brow:.9,mouth:.4})}),
 // 10 AWRI 1999: 14 tampas, ano a ano
 SCN(LABS,[ART(0,(g,t)=>{g.fillStyle='#5A3A22';g.fillRect(240,780,1440,16);for(let i=0;i<14;i++){const bx=300+i*100;if(i==13)screwBottle(g,bx,780,.62,0,'#6F8F57');else corkBottle(g,bx,780,.62)}}),PQ(960,240,720,130,'AWRI · AUSTRÁLIA · 1999','O MESMO VINHO, 14 TAMPAS','instituto',40,26),CH('PROVANDO ANO A ANO',960,380,'ano')],.2),
 // 11 dez anos depois: quase todas estragadas; a rosca campeã
 SCN(LABS,[ART(0,(g,t,s)=>{const u=ap(t,11,'estragadas',1);g.fillStyle='#5A3A22';g.fillRect(240,780,1440,16);for(let i=0;i<14;i++){const bx=300+i*100;if(i==13)screwBottle(g,bx,780,.62,0,'#6F8F57');else{corkBottle(g,bx,780,.62,u>.5?'#4A4A3A':'#6F8F57');bigX(g,bx,680,26,u)}}
  fade(g,ap(t,11,'campeã',.6),()=>trophy(g,1600,560,1.2))}),CH('QUASE TODAS ESTRAGADAS',700,330,'estragadas'),CH('A ROSCA: FRESQUINHA!',1360,330,'fresquinha')],.2),
 // 12 o segredo é o ar: rolha deixa passar, rosca quase nada (disquinho)
 C3(LABS,'O SEGREDO É O AR',[ART(0,(g,t)=>capCut(g,640,520,1.5,'cork',t)),ART('rosca',(g,t)=>capCut(g,1280,520,1.5,'screw',t)),LB('ROLHA',640,820,'rolha',40),LB('ROSCA',1280,820,'rosca',40),CH('O DISQUINHO CONTROLA',1280,250,'disquinho')],.55),
 // 13 não é perfeita: cheiro de borracha / fósforo; tampas com mais ou menos ar
 C3(LABS,'NÃO É PERFEITA',[ART('borracha',(g,t)=>{match(g,560,560,1.6,t);grayCloud27(g,560,330,1,1)}),CH('BORRACHA · FÓSFORO RISCADO',560,780,'fósforo'),PQ(1360,480,640,160,'TAMPAS COM MAIS','OU MENOS AR','existem',44,44)],.55),
 // 14 Bordeaux: Château Margaux testa a rosca desde 2002
 SCN((x,t)=>chateau(x,t),[ART(0,(g,t)=>flag2(g,'fr',300,200,140)),PQ(960,200,640,130,'CHÂTEAU MARGAUX','BORDEAUX · FRANÇA','château',44,26),ART('testou',(g,t)=>{for(let i=0;i<3;i++){corkBottle(g,1300+i*80,900,.7,'#1E3A31');screwBottle(g,1540+i*80,900,.7,0,'#1E3A31')}}),PQ(500,420,320,120,'2002',null,'dois',56)],.05),
 // 15 resultado: rosca mais fresco, rolha mais complexo; a rolha continua lá
 C3((x,t)=>chateau(x,t),'O RESULTADO',[ART(0,(g,t)=>{glassW(g,620,780,1.8,.42,'#7A1630');glassW(g,1300,780,1.8,.42,'#7A1630')}),CH('ROSCA = MAIS FRESCO',620,300,'fresco'),CH('ROLHA = MAIS COMPLEXO',1300,300,'complexo'),CH('LÁ, A ROLHA CONTINUA',960,820,'continua')],.55),
 // 16 Hill of Grace com rosca; na Califórnia, mais caro com rosca
 C3(BARA,'TINTOS CAROS COM ROSCA',[ART('hill',(g,t)=>{screwBottle(g,560,840,1.6,0,'#1E3A31');priceTag(g,780,480,'A$ ~1.000',1,.8)}),PQ(560,310,520,120,'HILL OF GRACE','AUSTRÁLIA','hill',44,26),
  ART('califórnia',(g,t)=>{screwBottle(g,1360,840,1.6,0,'#1E3A31');priceTag(g,1580,480,'+US$ 10',1,.8)}),PQ(1360,310,520,120,'CALIFÓRNIA','ROSCA MAIS CARA!','califórnia',44,26)]),
 // 17 no Brasil: a rosca veio primeiro nos vinhos simples
 C3(shelfBR,'E NO BRASIL?',[ART(0,(g,t)=>{g.fillStyle='#5A2E1C';g.fillRect(360,800,1200,20);for(let i=0;i<7;i++)screwBottle(g,460+i*165,800,.9,0,['#6F8F57','#1E3A31','#C98A93'][i%3])}),CH('VINHOS SIMPLES DO DIA A DIA',960,300,'simples'),ART('fama',(g,t)=>priceTag(g,1460,460,'BARATO?',1,.9))],.55),
 // 18 o ploc: Oxford, nota ~15% maior
 C3(BARA,'E TEM O SOM!',[ART(0,(g,t,s)=>{corkBottle(g,460,860,1.4);soundWave(g,520,380,1,t,ap(t,18,'ploc',.4))}),ART('teste',(g,t)=>{headphones(g,1160,440,1);glassW(g,1100,820,1.2,.42,'#7A1630');glassW(g,1300,820,1.2,.42,'#7A1630')}),CH('OXFORD · INGLATERRA',1300,250,'oxford'),PQ(1560,600,300,130,'+15%','NA NOTA','quinze',56,24)]),
 // 19 apresentado com a associação da cortiça: também é marketing
 tk(B27,{gest:[[0,'point'],[3,'thinking'],[6,'open']],chips:[['COM A ASSOCIAÇÃO DA CORTIÇA',430,300,'associação']],face:t=>({brow:1.1,sad:-.2,mouth:.4}),over:(g,t,s)=>stampS(g,1500,420,'MARKETING','marketing',.55)}),
];
function grayCloud27(g,cx,cy,s,a){fade(g,a,()=>{g.fillStyle='rgba(150,150,150,.75)';for(const [dx,dy,r] of [[-60,10,50],[0,-20,65],[60,10,50],[0,25,55]]){g.beginPath();g.arc(cx+dx*s,cy+dy*s,r*s,0,7);g.fill()}})}
const bigX=(g,cx,cy,r,a)=>fade(g,a,()=>{g.strokeStyle='#C8213F';g.lineWidth=10;g.lineCap='round';g.beginPath();g.moveTo(cx-r,cy-r);g.lineTo(cx+r,cy+r);g.moveTo(cx+r,cy-r);g.lineTo(cx-r,cy+r);g.stroke()});
SC.length=LEN.length;
ddFilm({SC,base:B27,talks:[1,9,19],places:{2:.6,5:.6,7:.6,10:.6,14:.6,17:.6},cta:['ROLHA OU ROSCA?','rolha'],
 table:[BARA,'ROSCA É VINHO BARATO?',[
  [(c,cx,cy)=>{bigCork(c,cx,cy,1);stampS(c,cx,cy+90,'FIM',1,.3)},'GOSTO DE ROLHA','a rosca acaba','com ele'],
  [(c,cx,cy)=>screwBottle(c,cx,cy+170,.75,0,'#6F8F57'),'AUSTRÁLIA 2000','Clare Valley','troca tudo'],
  [(c,cx,cy)=>nzFlag(c,cx,cy,200),'NOVA ZELÂNDIA','de 1% a','quase todos'],
  [(c,cx,cy)=>trophy(c,cx,cy,1),'CIÊNCIA','rosca campeã','nos brancos'],
  [(c,cx,cy,t)=>soundWave(c,cx-80,cy,.6,t,1),'O PLOC','charme,','não qualidade']]],
 tags:[[1,'fungo'],[1,'austrália'],[1,'país'],[1,'som'],[2,'quatrocentos'],[3,'bouchonné'],[4,'cem'],[5,'stelvin'],[6,'barato'],[6,'vinte'],[7,'trocaram'],[8,'todos'],[10,'catorze'],[11,'campeã'],[12,'disquinho'],[13,'fósforo'],[14,'dois'],[15,'fresco'],[15,'complexo'],[16,'hill'],[16,'califórnia'],[17,'fama'],[18,'ploc'],[18,'quinze'],[19,'marketing']],
 sfx:[[18,'ploc','corkin']]});
