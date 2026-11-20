// ---------- cenas do vídeo 15 "Por que se chama vinho do Porto?" — abre na cave de Gaia (thumb B viva); cena i = fala i ----------
const B15={set:(x,t)=>caveGaia(x,t,{wx:1260,wy:180,ww:520,wh:560,lamp:760,r1:.1,r2:.84}),front:cellarTable,bottles:[['exp',1100]],candles:[[560,60]]};
const BC15={set:(x,t)=>caveBarrels(x,t),front:cellarTable,bottles:[['exp',1100]],candles:[[560,60]]};
const PT_MAP=[{pts:[[.18,.05],[.62,.04],[.72,.3],[.66,.6],[.7,.95],[.2,.96],[.24,.7],[.12,.45]],col:'#D9C493'}];
const SC=[null,
 // 1 guerra, barco, marquês, aguardente
 tk(B15,{gest:[[0,'open'],[2.6,'point'],[5.2,'open']],chips:[['GUERRA',430,260,'guerra'],['BARCO NA CORREDEIRA',430,370,'barco'],['UM MARQUÊS',430,480,'marquês'],['AGUARDENTE',430,590,'aguardente']],face:t=>({brow:.7,mouth:.65})}),
 // 2 Portus Cale: mapa antigo
 C3((x,t)=>caveGaia(x,t),'NO TEMPO DOS ROMANOS',[
  ART(0,(g,t)=>{oldMap(g,760,560,640,560,PT_MAP,{river:[[.95,.32],[.7,.36],[.45,.33],[.2,.3]]});goldText(g,'OCEANO',520,720,26,'Cinzel',700)}),
  ART('douro',(g,t,s,a)=>{const [x,y]=mp(760,560,640,560,[.62,.36]);txt(g,'rio Douro',x+60,y-36,32,'#3A1A0E','italic')}),
  ART('mar',(g,t,s,a)=>{const [x,y]=mp(760,560,640,560,[.2,.3]);pin(g,x+10,y,'PORTUS CALE',a)}),
  PQ(1430,430,560,150,'PORTUS = PORTO',null,'quer',44),TX('o povoado romano na foz do rio',1430,560,'povoado',32)]),
 // 3 Portus Cale → Porto e Portugal
 C3((x,t)=>caveGaia(x,t),'O NOME DE UM PAÍS',[PQ(960,330,640,130,'PORTUS CALE',null,0.3,56),
  ARW(820,410,560,560,'porto'),ARW(1100,410,1360,560,'portugal'),PQ(520,640,440,140,'PORTO','A CIDADE','porto',60),PQ(1400,640,500,140,'PORTUGAL','O PAÍS','portugal',60),
  ART('portugal',(g,t)=>flag2(g,'pt',1400,800,110)),TX('o país tem o nome de uma cidade!',960,820,'país',36)]),
 // 4 vale do Douro em degraus — patrimônio
 SCN((x,t)=>douroValley(x,t),[CH('RIO ACIMA',400,170,'acima'),CH('VINHA EM DEGRAUS',1420,170,'degraus'),ST(1500,330,'UNESCO 2001','patrimônio',.5),ARW(1180,260,1000,520,'degraus',6)],.05),
 // 5 o barco rabelo na corredeira, o arrais no remo
 SCN((x,t)=>{rapids(x,t);const bx=lerp(1500,600,seg(t,T[5],T[6])),by=760+Math.sin(t*2.2)*10;x.save();x.translate(bx,by);x.rotate(Math.sin(t*1.7)*.04);rabelo(x,0,0,1.05);arrais(x,330,-40,.36,t);x.restore()},
  [CH('BARCO RABELO',430,170,'rabelo'),CH('FUNDO CHATO',430,280,'chato'),CH('VELA QUADRADA',1450,170,'quadrada'),CH('O REMO ENORME',1450,280,'remo')]),
 // 6 cais de Gaia: caves, pipas, navio pra Inglaterra; até 1986
 SCN((x,t)=>gaiaQuay(x,t),[CH('VILA NOVA DE GAIA',430,170,'gaia'),CH('CAVES = ARMAZÉNS',430,280,'caves'),CH('PIPA = BARRIL GRANDE',1460,170,'pipas'),
  ART('inglaterra',(g,t)=>{arrow(g,1250,520,1700,470,GOLD2,7);flag2(g,'uk',1760,440,90)}),PQ(960,330,520,120,'ATÉ 1986','SÓ SAÍA POR ALI','oitenta',54,26)]),
 // 7 "Port wine": o nome é do porto de saída
 C3((x,t)=>caveBarrels(x,t),'"PORT WINE"',[ART(0,(g,t)=>{pipaEnd(g,500,560,190,'PORT')}),
  ART('vinho',(g,t)=>{oldMap(g,1300,560,640,420,[{pts:[[.1,.4],[.4,.35],[.5,.7],[.2,.9]]},{pts:[[.62,.05],[.85,.02],[.9,.3],[.7,.36]]}]);const a=mp(1300,560,640,420,[.42,.62]),b=mp(1300,560,640,420,[.25,.62]),c=mp(1300,560,640,420,[.74,.2]);pin(g,a[0],a[1],'DOURO',1,'#5E1428',34);pin(g,b[0],b[1],'PORTO',1);pin(g,c[0],c[1],'INGLATERRA',1,'#1E2E6A',34);arrow(g,a[0]-20,a[1],b[0]+22,b[1],'#5E1428',6);arrow(g,b[0],b[1]-20,c[0]-10,c[1]+18,'#1E2E6A',6)}),
  CH('NOME DO PORTO DE SAÍDA',960,820,'saída')]),
 // 8 guerra com a França; tratado de 1703
 C3((x,t)=>caveGaia(x,t),'E POR QUE A INGLATERRA?',[ART('guerra',(g,t)=>{flag2(g,'uk',620,380,200);flag2(g,'fr',1300,380,200);goldText(g,'×',960,380,110)}),
  ART('tratado',(g,t)=>{scroll(g,960,650,640,240,'','');goldText(g,'TRATADO DE METHUEN',960,615,40);goldText(g,'1703',960,680,50)}),CH('−1/3 DE IMPOSTO',960,840,'terço')]),
 // 9 a força: 13% x 19–22%
 tk(BC15,{gest:[[0,'thinking'],[2.6,'point'],[5.4,'open']],props:(f,t,s)=>{fade(f,ap(t,9,'comum',.4),()=>{glassW(f,1290,806,1,.4,'#7A1630');goldText(f,'13%',1290,560,40,'Cinzel',900)});fade(f,ap(t,9,'dezenove',.4),()=>{portGlass(f,1460,806,1.25,'#B0182E',.6);goldText(f,'19–22%',1460,540,40,'Cinzel',900)})},
  chips:[['VINHO COMUM: 13%',430,300,'comum'],['PORTO: 19 A 22%',430,420,'dezenove']],face:t=>({brow:.9,mouth:.55})}),
 // 10 leveduras comem açúcar e fazem álcool
 C3((x,t)=>caveBarrels(x,t),'COMO O VINHO NASCE',[ART(0,(g,t)=>{pipaEnd(g,960,580,300)}),
  ART('leveduras',(g,t)=>{for(const [i,[px,py]] of [[640,520],[900,450],[1160,540],[780,700],[1080,690]].entries())yeastFace(g,px+Math.sin(t+i)*14,py,46,t,0,i)}),
  ART('açúcar',(g,t)=>{for(let i=0;i<5;i++)sugarCube(g,700+i*130,840-((t*40+i*30)%60),.6)}),CH('LEVEDURAS: BICHINHOS INVISÍVEIS',960,260,'leveduras'),CH('AÇÚCAR → ÁLCOOL',1520,820,'álcool')]),
 // 11 entra a aguardente: as leveduras param
 C3((x,t)=>caveBarrels(x,t),'NO MEIO DO BANQUETE',[ART(0,(g,t)=>pipaEnd(g,1060,600,280)),
  ART('aguardente',(g,t)=>{const u=ease(seg(t,wq(11,'aguardente'),wq(11,'aguardente')+1));g.save();g.translate(520,520);g.rotate(-.8*u);jug(g,0,140,.8);g.restore();if(u>.6){g.fillStyle='rgba(242,214,140,.7)';g.fillRect(640,430,14,180*u)}}),
  ART(0,(g,t,s)=>{const k=ap(t,11,'param',.8);for(const [i,[px,py]] of [[900,520],[1180,480],[1000,700],[1240,680]].entries())yeastFace(g,px,py+k*30,42,t,k,i)}),
  CH('AGUARDENTE: DESTILADO DE VINHO',960,260,'destilado'),CH('AS LEVEDURAS PARAM!',1480,860,'param')]),
 // 12 doce e forte: vinho fortificado
 C3((x,t)=>caveGaia(x,t),'O VINHO FORTIFICADO',[ART('sobra',(g,t)=>{sugarCube(g,520,470,1.3);goldText(g,'SOBRA AÇÚCAR',520,600,36)}),ART('álcool',(g,t)=>{thermoS(g,1400,620,300,.8);goldText(g,'O ÁLCOOL SOBE',1400,330,36)}),
  PQ(960,770,980,150,'FORTIFICADO','= VINHO + AGUARDENTE','fortificado',60,32),ART('doce',(g,t)=>portGlass(g,960,600,1.3,'#B0182E',.6))]),
 // 13 aguentar a viagem? em parte
 SCN((x,t)=>{stormSea(x,t);ship(x,960+Math.sin(t*.8)*20,640+Math.sin(t*1.6)*16,1.1)},[CH('PRA AGUENTAR A VIAGEM?',960,170,0.3),ST(1450,380,'EM PARTE','parte',.55),TX('um pouquinho de aguardente antes de embarcar',960,800,'pouquinho',40)]),
 // 14 o abade do mosteiro: lenda; regra só lá por 1850
 C3((x,t)=>monastery(x,t),'O ABADE DO MOSTEIRO?',[ART(0,(g,t)=>monge(g,640,900,.62,t)),ST(1400,360,'LENDA','lenda',.6),TX('ninguém prova',1400,480,'ninguém',40),PQ(1400,680,460,150,'1850','VIROU REGRA','oitocentos',70,28)],.5),
 // 15 a fraude do sabugueiro e o Marquês de Pombal
 C3((x,t)=>caveGaia(x,t),'VEIO A FRAUDE',[ART('fraude',(g,t)=>{glassW(g,480,760,1.6,.4,'#4A0E2A');elderberry(g,480,380+((t*30)%40),.9);const a=ap(t,15,'sabugueiro',.4);fade(g,a,()=>{g.strokeStyle='#C8213F';g.lineWidth=16;g.beginPath();g.moveTo(330,360);g.lineTo(630,760);g.moveTo(630,360);g.lineTo(330,760);g.stroke()})}),
  CH('FRUTINHA DE SABUGUEIRO',480,830,'sabugueiro'),ART('marquês',(g,t)=>pombal(g,1300,900,.62,t)),PQ(1300,250,560,120,'MARQUÊS DE POMBAL','1756 · MINISTRO DO REI','marquês',38,24)]),
 // 16 companhia + 335 marcos: região demarcada
 SCN((x,t)=>{douroValley(x,t);const n=Math.floor(clamp(seg(t,wq(16,'trezentos'),wq(16,'marcos')+1.2))*6);for(let i=0;i<6;i++)marco(x,300+i*270,880-(i%2)*40,.7,i<n?1:0)},
  [CH('A COMPANHIA',430,170,'companhia'),CNT(1480,180,0,335,'trezentos','marcos',v=>v+' MARCOS',64),CH('REGIÃO DEMARCADA',960,300,'demarcadas'),TX('fronteira na lei',960,390,'lei',40)],.12),
 // 17 Ruby x Tawny
 tk(BC15,{bottles:[],gest:[[0,'open'],[3.4,'point'],[6.6,'open']],props:(f,t,s)=>{fade(f,ap(t,17,'ruby',.4),()=>{portBottle(f,1260,806,.95,'RUBY','');portGlass(f,1360,806,1.1,'#C0182E',.6)});fade(f,ap(t,17,'tawny',.4),()=>{portBottle(f,1500,806,.95,'TAWNY','10 ANOS');portGlass(f,1610,806,1.1,'#A8541E',.6)})},
  chips:[['RUBY: JOVEM E FRUTADO',430,280,'ruby'],['TAWNY: COR DE TIJOLO',430,400,'tawny'],['NOZES E CARAMELO',430,520,'nozes']],face:t=>({brow:.5,mouth:.7})}),
 // 18 Vintage e o branco com tônica
 C3((x,t)=>caveBarrels(x,t),'VINTAGE E BRANCO',[ART('vintage',(g,t)=>{dustyBottle(g,560,780,1.6)}),PQ(560,300,520,130,'VINTAGE','UMA COLHEITA SÓ','vintage',52,26),CH('SÓ NOS MELHORES ANOS',560,880,'melhores'),
  ART('branco',(g,t)=>tonicGlass(g,1360,780,1.5,t)),PQ(1360,300,560,130,'PORTO BRANCO','COM GELO E TÔNICA','branco',46,26)]),
 // 19 nome protegido; no Brasil desde 1933
 tk(B15,{gest:[[0,'point'],[3.6,'open'],[6,'rest']],chips:[['NOME PROTEGIDO',430,280,'protegido'],['SÓ O DO DOURO É PORTO',430,400,'outro'],['BRASIL · 1933',430,520,'brasil']],
  over:(g,t,s)=>{fade(g,ap(t,19,'brasil',.5),()=>{flag2(g,'pt',1520,300,120);flag2(g,'br',1680,300,120)})},face:t=>({brow:.4,mouth:.6})}),
];
SC.length=LEN.length;
function icRabelo(c,cx,cy,t){rabelo(c,cx,cy+60,.42)}
ddFilm({SC,base:B15,talks:[1,9,17,19],places:{4:.6,5:.6,6:.6,13:.6,14:.6,16:.6},cta:['RUBY OU TAWNY?','ruby'],
 table:[(x,t)=>caveGaia(x,t),'POR QUE "PORTO"?',[
  [(c,cx,cy)=>{pipaEnd(c,cx,cy,110,'PORT')},'NOME','do porto','de saída'],
  [(c,cx,cy)=>{flag2(c,'pt',cx,cy,200)},'PORTUGAL','nome da cidade','Portus Cale'],
  [icRabelo,'VIAGEM','rabelo até Gaia,','navio à Inglaterra'],
  [(c,cx,cy)=>{portGlass(c,cx,cy+130,1.5,'#B0182E',.6)},'FORÇA','aguardente para','a fermentação'],
  [(c,cx,cy)=>{marco(c,cx,cy+140,.95)},'1756','Pombal e os','335 marcos']]],
 tags:[[1,'guerra'],[1,'barco'],[1,'marquês'],[1,'aguardente'],[2,'mar'],[2,'quer'],[3,'porto'],[3,'portugal'],[4,'degraus'],[4,'patrimônio'],[5,'rabelo'],[5,'remo'],[6,'caves'],[6,'oitenta'],[7,'saída'],[8,'tratado'],[8,'terço'],[9,'comum'],[9,'dezenove'],[10,'leveduras'],[11,'aguardente'],[11,'param'],[12,'fortificado'],[13,'parte'],[14,'lenda'],[14,'oitocentos'],[15,'sabugueiro'],[15,'marquês'],[16,'marcos'],[16,'demarcadas'],[17,'ruby'],[17,'tawny'],[18,'vintage'],[18,'branco'],[19,'protegido'],[19,'brasil']]});
