// ---------- cenas do vídeo 18 "Leve ou encorpado?" — adega (thumb C viva); balcão com taças e copos de leite; cena i = fala i ----------
const B18={set:CELLAR18,front:cellarTable,bottles:[['red',1100]],candles:[[560,60]]};
const BR18={set:barWall,front:cellarTable,bottles:[['red',1100]],candles:[[560,60]]};
// 3 taças + 3 copos no balcão (props de talkScene)
const trio=(f,t,s,a=1,milk=1)=>{const G=[['leve',1250],['medio',1420],['encorpado',1590]];G.forEach(([k,x],i)=>fade(f,a,()=>glassW(f,x,806,.85,.42,BODY[k])));
 if(milk>0)['desnatado','integral','creme'].forEach((k,i)=>fade(f,milk,()=>milkGlass(f,1250+i*170,890,.62,k)))};
const SC=[null,
 // 1 você vai sentir na boca; leve · médio · encorpado
 tk(B18,{gest:[[0,'open'],[2.6,'point'],[5,'open']],props:(f,t,s)=>trio(f,t,s,1,0),chips:[['LEVE',430,280,'sentir'],['MÉDIO',430,390,'boca'],['ENCORPADO',430,500,'descobrir'],['MUITO É MITO!',430,640,'mito']],face:t=>({brow:.6,mouth:.7})}),
 // 2 o teste do leite: desnatado e integral
 C3(CELLAR18,'FAZ UM TESTE',[ART('desnatado',(g,t)=>{milkGlass(g,620,760,1.5,'desnatado');goldText(g,'DESNATADO',620,820,40)}),ART('integral',(g,t)=>{milkGlass(g,1300,760,1.5,'integral');goldText(g,'INTEGRAL',1300,820,40)}),
  CH('PESA MAIS NA BOCA!',1300,280,'pesa'),ARW(860,560,1060,560,'integral',8)]),
 // 3 isso é corpo: leve = desnatado, médio = integral, encorpado = creme de leite
 C3(CELLAR18,'ISSO É CORPO!',[...[['leve','desnatado','LEVE',480,'leve'],['medio','integral','MÉDIO',960,'médio'],['encorpado','creme','ENCORPADO',1440,'encorpado']].map(([k,m,l,x,w])=>ART(w,(g,t)=>{glassW(g,x-70,700,1.1,.42,BODY[k]);milkGlass(g,x+90,700,1,m);goldText(g,l,x,790,40)})),
  CH('= CREME DE LEITE!',1440,320,'creme')]),
 // 4 body · corsé · encorpado
 C3(CELLAR18,'O NOME',[ART('inglês',(g,t)=>flag2(g,'uk',480,420,170)),PQ(480,620,380,130,'BODY','= CORPO','body',56,28),ART('francês',(g,t)=>flag2(g,'fr',960,420,170)),PQ(960,620,380,130,'CORSÉ','FRANCÊS','corsé',56,24),
  ART('encorpado',(g,t)=>flag2(g,'br',1440,420,170)),PQ(1440,620,440,130,'ENCORPADO','TEM CORPO','encorpado',48,24)]),
 // 5 no leite é a gordura; vinho não tem gordura — quem é?
 tk(B18,{gest:[[0,'open'],[3.2,'shrug'],[5.6,'thinking']],props:(f,t,s)=>trio(f,t,s,1,0),chips:[['LEITE: GORDURA',430,300,'gordura'],['VINHO: ?',430,420,'quem']],face:t=>({brow:1,sad:.4,mouth:.3})}),
 // 6 o álcool: mais grosso que a água
 C3(barWall,'O PRINCIPAL: O ÁLCOOL',[ART(0,(g,t,s)=>{const u=clamp(seg(t,wq(6,'misturado'),T[s+1]-.3));dropRace(g,640,300,u,'rgba(150,200,235,.9)','ÁGUA',0);dropRace(g,1280,300,u,'rgba(142,27,58,.95)','ÁLCOOL + ÁGUA',1)}),
  CH('MAIS GROSSO',1280,860-40,'grosso')]),
 // 7 o rótulo: 13,5–14% costuma ser encorpado
 tk(B18,{gest:[[0,'point'],[4,'open'],[6.5,'rest']],chips:[],face:t=>({brow:.6,mouth:.6}),
  over:(g,t,s)=>{fade(g,ap(t,7,'rótulo',.5),()=>bigLabel(g,1520,500,'14% vol',ap(t,7,'quatorze',1)));chip(g,430,320,'13,5 A 14% = ENCORPADO',ap(t,7,'treze'))}}),
 // 8 do sol: uva de lugar quente, mais açúcar
 SCN((x,t,s)=>{sunVineyard(x,t);const u=easeIO(seg(t,wq(8,'amadurece'),wq(8,'açúcar')+.5));x.strokeStyle='#3A1A10';x.lineWidth=26;x.lineCap='round';x.beginPath();x.moveTo(960,700);x.quadraticCurveTo(930,560,980,430);x.stroke();for(let i=0;i<7;i++){x.fillStyle='#3E7A34';x.beginPath();x.ellipse(860+i*34,420+Math.sin(i*2)*30,46,30,i,0,7);x.fill()}grapesC(x,960,520,1.6,`rgb(${Math.round(lerp(140,58,u))},${Math.round(lerp(150,26,u))},${Math.round(lerp(80,74,u))})`)},
  [CH('DO SOL!',430,170,'sol'),CH('MAIS AÇÚCAR',1460,700,'açúcar'),ART('açúcar',(g,t)=>{sugarCube(g,1460,560,1.2)})]),
 // 9 fermentação: leveduras comem o açúcar e soltam álcool (bolhas só dentro do tanque)
 C3((x,t)=>lab(x,t),'A FERMENTAÇÃO',[ART(0,(g,t,s)=>{tank(g,700,880,1,.6,t);for(let i=0;i<4;i++)yeastFace(g,620+(i%2)*150,620+Math.floor(i/2)*110,30,t,0,i)}),
  CH('LEVEDURAS: FUNGOS MINÚSCULOS',1380,320,'leveduras'),CH('AÇÚCAR → ÁLCOOL',1380,450,'soltam'),PQ(1380,620,560,140,'MAIS AÇÚCAR','MAIS ÁLCOOL!','mais',50,34)],.55),
 // 10 a glicerina, ~1%
 C3((x,t)=>lab(x,t),'A GLICERINA',[ART('glicerina',(g,t)=>{reagent(g,700,800,1.6,true,'rgba(240,236,224,.7)');goldText(g,'GLICERINA',700,840,36)}),CH('SEM CHEIRO, ADOCICADA',1360,330,'cheiro'),PQ(1360,560,460,160,'~1%','POUQUINHO','um',90,30)],.55),
 // 11 mito? os cientistas testaram: mais adoça do que engrossa
 C3((x,t)=>lab(x,t),'ELA ENGROSSA O VINHO?',[ST(560,420,'MITO?','jura',.6),ART('testaram',(g,t)=>{tubeRack(g,560,800,['rgba(240,236,224,.7)',ANT.wine,ANT.red])}),
  PQ(1360,420,640,170,'MAIS DOÇURA','QUE PESO','adoça',60,40),ART('adoça',(g,t)=>sugarCube(g,1360,640,1))],.55),
 // 12 as lágrimas: álcool evaporando
 C3(barWall,'E AS LÁGRIMAS?',[ART(0,(g,t)=>tearGlassT(g,700,860,2.6,.3,{tt:t})),ST(1380,360,'NÃO É GLICERINA','glicerina',.45),ST(1380,540,'NEM VINHO BOM','bom',.45),CH('É O ÁLCOOL EVAPORANDO',1380,720,'evaporando')]),
 // 13 açúcar, barril, taninos
 C3(CELLAR18,'TAMBÉM AJUDAM',[ART('açúcar',(g,t)=>{sugarCube(g,480,560,1.5);goldText(g,'RESTINHO DE AÇÚCAR',480,720,32)}),ART('barril',(g,t)=>{pipaEnd(g,960,560,130);goldText(g,'BARRIL DE CARVALHO',960,720,32)}),
  ART('taninos',(g,t)=>{grapesC(g,1440,560,1.2,'#3A1A4A');goldText(g,'TANINOS (CASCA)',1440,720,32)})]),
 // 14 tanino seca a boca (banana verde); acidez deixa mais leve
 C3(CELLAR18,'TANINO × ACIDEZ',[ART('banana',(g,t)=>{greenBanana(g,520,520,1.5);goldText(g,'BOCA SECA',520,640,34)}),CH('VEM DA CASCA',520,760,'casca'),
  ART('acidez',(g,t,s)=>{const u=easeIO(seg(t,wq(14,'acidez'),wq(14,'leve')+.4));balance(g,1360,380,-.18*u);goldText(g,'TANINO',1060,560-u*0+40,30);goldText(g,'ACIDEZ',1660,560-u*0+40,30)}),CH('ÁCIDO PARECE MAIS LEVE',1360,800,'leve')]),
 // 15 o maior mito: escuro é encorpado? nem sempre
 tk(B18,{gest:[[0,'thinking'],[3,'point'],[5.4,'open']],props:(f,t,s)=>{glassW(f,1420,806,1.2,.45,BODY.encorpado)},chips:[['VINHO ESCURO = ENCORPADO?',430,300,'escuro'],['NEM SEMPRE!',430,420,'nem'],['A COR VEM DA CASCA',430,540,'casca']],face:t=>({brow:1,mouth:.4})}),
 // 16 Barolo: clarinho e potente
 C3(CELLAR18,'O BAROLO',[ART('barolo',(g,t)=>glassW(g,700,800,2.2,.42,'#A8442A')),PQ(1340,330,560,140,'BAROLO · ITÁLIA','UVA NEBBIOLO','barolo',46,28),ART('barolo',(g,t)=>flag2(g,'it',1340,520,140)),CH('CLARINHO... E POTENTE!',1340,700,'potentes')]),
 // 17 encorpado ≠ melhor
 C3(CELLAR18,'ENCORPADO É MELHOR?',[ST(960,380,'ENCORPADO ≠ MELHOR','melhor',.6),CH('CORPO É ESTILO, NÃO NOTA',960,580,'estilo'),ART('pinot',(g,t)=>{glassW(g,1500,820,1.3,.42,BODY.leve)}),TX('um Pinot Noir leve pode ser uma obra-prima',960,700,'obra',38)]),
 // 18 a régua: leves, médio, encorpados
 C3(CELLAR18,'PRA GUARDAR',[ART(0,(g,t)=>bodyRuler(g,260,1660,760)),
  ...[['PINOT NOIR',340,'pinot'],['SAUVIGNON BLANC',420,'blanc'],['MERLOT',960,'merlot'],['CABERNET',1200,'cabernet'],['SYRAH',1380,'syrah'],['MALBEC',1520,'malbec'],['CHARDONNAY DE BARRIL',1500,'chardonnay']].map(([n,x,w],i)=>CH(n,x,[300,420,360,300,420,540,660][i],w))]),
 // 19 no Brasil: "suave" é doce
 C3(marketWall,'NO SUPERMERCADO',[PQ(560,400,560,170,'SUAVE = DOCE','+25 g/L DE AÇÚCAR','doce',50,30),PQ(1360,400,560,170,'SECO','ATÉ 4 g/L','seco',60,30),ST(960,640,'SUAVE NÃO É LEVE','leve',.5),CH('CORPO É O PESO',960,810,'peso')]),
 // 20 Serra (Merlot) × Campanha (Tannat)
 C3(CELLAR18,'NO RIO GRANDE DO SUL',[ART(0,(g,t)=>{oldMap(g,760,540,620,620,RS)}),ART('serra',(g,t)=>{const [x,y]=mp(760,540,620,620,[.66,.3]);pin(g,x,y,'SERRA GAÚCHA',1)}),ART('campanha',(g,t)=>{const [x,y]=mp(760,540,620,620,[.4,.78]);pin(g,x,y,'CAMPANHA',1)}),
  CH('SERRA: MERLOT, MÉDIO',1440,330,'merlot'),CH('CAMPANHA: SOL FORTE',1440,450,'sol'),CH('TANNAT: TINTOS POTENTES',1440,570,'tannat'),TX('perto do Uruguai',760,880-40,'uruguai',32)]),
 // 21 na mesa: peso com peso
 C3(barWall,'PESO COM PESO',[ART('peixe',(g,t)=>{fishPlate(g,560,760);glassW(g,780,760,1,.42,BODY.leve)}),ART('picanha',(g,t)=>{meatBoard(g,1300,760);glassW(g,1540,760,1,.42,BODY.encorpado)}),
  CH('PEIXE: VINHO LEVE',600,420,'peixe'),CH('PICANHA E FEIJOADA: ENCORPADO',1300,420,'picanha'),ST(960,580,'UM ENGOLE O OUTRO','engole',.42)]),
];
SC.length=LEN.length;
ddFilm({SC,base:B18,talks:[1,5,7,15],places:{2:.6,6:.6,8:.6,9:.6,12:.6,19:.6},cta:['QUAL PALAVRA?','palavra'],
 table:[CELLAR18,'O QUE É ENCORPADO?',[
  [(c,cx,cy)=>{milkGlass(c,cx-60,cy+120,1,'integral');glassW(c,cx+60,cy+120,1,.42,BODY.medio)},'CORPO','o peso','na boca'],
  [(c,cx,cy)=>{bigLabel(c,cx,cy+40,'14%',0);},'ÁLCOOL','o principal',''],
  [(c,cx,cy)=>{glassW(c,cx-60,cy+120,1,.42,'#A8442A');glassW(c,cx+60,cy+120,1,.42,BODY.encorpado)},'COR','não diz corpo',''],
  [(c,cx,cy)=>{icGlass(c,cx,cy,BODY.encorpado)},'ENCORPADO','não é melhor',''],
  [(c,cx,cy)=>{meatBoard(c,cx,cy+80)},'NA MESA','peso com peso','']]],
 tags:[[2,'desnatado'],[2,'integral'],[3,'leve'],[3,'médio'],[3,'encorpado'],[4,'body'],[4,'corsé'],[5,'gordura'],[6,'álcool'],[7,'quatorze'],[8,'sol'],[9,'leveduras'],[10,'glicerina'],[11,'jura'],[11,'adoça'],[12,'glicerina'],[12,'bom'],[13,'açúcar'],[13,'barril'],[13,'taninos'],[14,'banana'],[14,'acidez'],[15,'nem'],[16,'barolo'],[17,'melhor'],[18,'pinot'],[18,'merlot'],[18,'cabernet'],[18,'syrah'],[18,'malbec'],[18,'chardonnay'],[19,'doce'],[19,'leve'],[20,'serra'],[20,'campanha'],[21,'peixe'],[21,'picanha'],[21,'engole']]});
