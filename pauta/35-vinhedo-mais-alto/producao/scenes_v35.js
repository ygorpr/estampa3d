// ---------- cenas do vídeo 35 "O vinhedo mais alto do mundo fica no Tibete" — terraços do Tibete (thumb B viva), mapa, Salta, Serra Catarinense; cena i = fala i ----------
const TIB=(x,t)=>tibeteVinhedo(x,t,{sun:[1700,215]});
const scarf=(f)=>{if(window.LASTHP)cachecol(f,LASTHP,1)};
const B35={set:TIB,front:balcaoPedra,bottles:[['red',1100]],props:(f,t,s)=>scarf(f)};
const SC=[null,
 // 1 3.563 metros; recorde do Guinness (o livro dos recordes)
 tk(B35,{gest:[[0,'open'],[2.6,'point'],[5.6,'open'],[7.6,'rest']],chips:[['RECORDE DO GUINNESS',430,300,'guinness'],['O LIVRO DOS RECORDES',430,410,'livro']],over:(g,t,s)=>{const a=ap(t,1,'três',.6);fade(g,a,()=>{plaque(g,1560,260,520,170);goldText(g,'3.563 M',1560,262,90)});goldSeal(g,1560,500,95,'RECORDE','',ap(t,1,'recorde',.5))},face:t=>({brow:1.1,wide:.6,mouth:.7})}),
 // 2 altitude = altura em relação ao mar; mais frio e ar mais fino lá em cima
 C3(TIB,'ALTITUDE',[ART(0,(g,t,s)=>{const u=clamp(seg(t,wq(2,'sobe')-.3,T[s+1]-.5));altRuler(g,560,300,780,u,t);airDots(g,860,1160,300,780,t)}),CH('A ALTURA EM RELAÇÃO AO MAR',1380,300,'altura'),ART('frio',(g,t,s)=>thermoS(g,1380,760,300,lerp(.8,.25,ap(t,2,'frio',1.5)))),CH('AR MAIS FINO',1380,420+0,'fino')],.6),
 // 3 perto de Lhasa, capital do Tibete; Guinness, set/2018, 1º recorde
 SCN(TIB,[ART(0,(g,t,s)=>{asiaMap(g,760,500,980,600);const p=mp(760,500,980,600,[.52,.5]);pin(g,p[0],p[1],'LHASA',ap(t,3,'lhasa',.5))}),CH('SET. 2018 · 1º RECORDE',1500,700,'setembro'),PQ(1500,300,520,140,'TIBETE','PERTO DE LHASA','capital',60,28)],.35),
 // 4 lá em cima, cada respiração traz ~1/3 a menos de oxigênio; falta de ar
 tk(B35,{gest:[[0,'rest'],[.8,'thinking'],[5.4,'shrug'],[7.6,'rest']],chips:[['−1/3 DE OXIGÊNIO',430,300,'terço'],['FALTA DE AR!',430,420,'falta']],over:(g,t,s)=>{const a=ap(t,4,'respiração',.5);fade(g,a,()=>{for(let i=0;i<3;i++){const k=(t*.8+i/3)%1;g.fillStyle=`rgba(240,240,255,${.5*(1-k)})`;g.beginPath();g.arc(1110+k*60,470-k*30,14+k*18,0,7);g.fill()}})},face:t=>({brow:.4,sad:.7,mouth:.8,open:.35+.15*Math.sin(t*6)})}),
 // 5 plantadas em 2012; 11 tipos de uva; um vira vinho de gelo
 SCN((x,t)=>tibeteVinhedo(x,t,{sun:[1700,215],steps:[[470,.6],[540,.8],[640,1.05],[780,1.3]]}),[ART(0,(g,t)=>viticultorTib(g,560+Math.sin(t*.5)*30,430,.85,{reach:{l:[-60,140],r:[150,-80]},grape:'r',look:.3,lookY:-.4})),
  PQ(1380,230,460,130,'2012','PLANTADAS','doze',64,28),CNT(1380,450,1,11,'onze','uva',f=>f+' TIPOS DE UVA',60),ART('gelo',(g,t)=>{cachoUva(g,1380,600,1.6);iceCrystal(g,1450,640,46,1);iceCrystal(g,1320,700,32,1)}),CH('VINHO DE GELO = UVA CONGELADA',1380,850-20,'congelada')],.05),
 // 6 2024: o Guinness voltou com um sommelier para provar
 SCN(TIB,[ART(0,(g,t)=>guestSomm(g,620,1060,.8,t)),PQ(1400,280,520,140,'GUINNESS · 2024','DE VOLTA AO TIBETE','vinte',44,28),CH('SOMMELIER = ESPECIALISTA EM VINHO',1300,520,'especialista')],.15),
 // 7 a antiga campeã: Altura Máxima (Colomé), Salta, Argentina, 3.111 m
 SCN((x,t)=>saltaValley(x,t),[PQ(960,240,760,160,'ALTURA MÁXIMA','COLOMÉ · SALTA · ARGENTINA','altura',60,30),ART('três',(g,t)=>{plaque(g,960,470,360,110);goldText(g,'3.111 M',960,472,64)}),CH('QUEM TINHA A FAMA?',960,640,'fama')],.05),
 // 8 o Tibete passou por ~450 m: um prédio de 150 andares
 C3(TIB,'A DIFERENÇA',[ART(0,(g,t,s)=>{const u=clamp(seg(t,T[s]+.3,T[s]+2));altCols(g,[['ARGENTINA',3111,'#8E3A2E'],['TIBETE',3563,'#5E1428']],520,820,3563,480,u,320);
   const k=easeIO(seg(t,wq(8,'prédio')-.2,wq(8,'prédio')+1.6));if(k>0)tower(g,1360,820,110,480*450/3563*7*k,150)}),CH('~450 M A MAIS',1400,280,'quatrocentos'),LB('= PRÉDIO DE 150 ANDARES',1400,860,'andares',34)],.6),
 // 9 Jujuy já plantou a ~3.300 m; o recorde oficial continua no Tibete
 C3(TIB,'E A ARGENTINA?',[ART(0,(g,t,s)=>altCols(g,[['SALTA',3111,'#8E3A2E'],['JUJUY',3300,'#A0442A'],['TIBETE',3563,'#5E1428']],520,820,3563,460,clamp(seg(t,T[s]+.3,wq(9,'trezentos')+.5)),300)),ART('oficial',(g,t)=>goldSeal(g,1500,520,120,'RECORDE','OFICIAL: TIBETE',1)),CH('JUJUY: ~3.300 M',1500,280,'jujuy')],.6),
 // 10 por que plantar uva tão alto?
 tk(B35,{gest:[[0,'rest'],[.6,'wave'],[4.6,'rest']],props:(f,t,s)=>{scarf(f);if(window.LASTHP){const h=h2w(LASTHP,'r');cachoUva(f,h[0],h[1]+10,1.1)}},chips:[['POR QUE TÃO ALTO?',430,300,'alto']],face:t=>({brow:1.2,mouth:.5,look:.3,lookY:-.3})}),
 // 11 o sol: a cada 1.000 m, ~10% mais UV (o raio que queima a pele)
 C3(TIB,'PRIMEIRO, O SOL',[ART(0,(g,t,s)=>uvSun(g,640,260,t,ap(t,11,'ultravioleta',1))),PQ(1380,420,560,170,'+10% DE UV','A CADA 1.000 M','dez',66,30),CH('UV = O RAIO QUE QUEIMA A PELE',1380,660,'queima')],.6),
 // 12 a uva se defende: casca mais grossa e escura (protetor solar)
 C3(TIB,'A UVA SE DEFENDE',[ART(0,(g,t,s)=>{grapeSkin(g,520,560,170,0);goldText(g,'CASCA FINA',520,790,32);grapeSkin(g,1060,560,170,ap(t,12,'grossa',1.2));goldText(g,'CASCA GROSSA',1060,790,32)}),ART('protetor',(g,t)=>sunscreen(g,1520,560,1.3)),CH('PROTETOR SOLAR DA UVA!',1520,300,'protetor')],.6),
 // 13 de dia sol, de noite frio: amplitude térmica
 SCN(TIB,[ART(0,(g,t,s)=>{const u=ap(t,13,'noite',2.5);g.fillStyle=`rgba(8,14,40,${.7*u})`;g.fillRect(0,0,W,H);fade(g,u,()=>moonS(g,1500,200,70));thermoS(g,420,760,380,lerp(.85,.2,u))}),PQ(1100,600,640,150,'AMPLITUDE TÉRMICA','A DIFERENÇA DIA × NOITE','amplitude',48,28),CH('DIA: SOL FORTE',1100,240,'dia'),CH('NOITE: FRIO DE VERDADE',1100,360,'frio')],0),
 // 14 noite fria: a uva descansa e guarda a acidez (frescor)
 C3((x,t)=>{tibeteVinhedo(x,t,{sun:[1700,215]});x.fillStyle='rgba(8,14,40,.75)';x.fillRect(-900,-600,W+1800,1900)},'A UVA DESCANSA',[ART(0,(g,t)=>{moonS(g,1500,300,80);sleepyGrapes(g,700,420,1,t)}),ART('acidez',(g,t)=>sparkleDrop(g,1300,620,1.4,t)),CH('ACIDEZ = FRESCOR',1300,800-20,'frescor'),CH('VINHO MAIS VIVO',560,820,'vivo')],.4),
 // 15 o preço: geada, vento, pouco oxigênio; tudo dá mais trabalho
 SCN(TIB,[ART(0,(g,t,s)=>{viticultorTib(g,700,440,.85,{reach:{l:[-30,-260],r:[150,120]},shears:'r',tilt:Math.sin(t*3)*.08,look:-.2});windLines(g,t,ap(t,15,'vento',.6));fade(g,ap(t,15,'geada',.6),()=>{g.fillStyle='rgba(240,248,255,.35)';const R=rng(2);for(let i=0;i<260;i++){g.beginPath();g.arc(R()*W,480+R()*560,2+R()*2,0,7);g.fill()}})}),
  CH('GEADA',1400,240,'geada'),CH('VENTO FORTE',1400,350,'vento'),CH('POUCO OXIGÊNIO',1400,460,'oxigênio'),CH('MAIS TRABALHO',1400,570,'trabalho')],.05),
 // 16 os outros extremos: mais ao norte (Noruega), mais ao sul (Patagônia × Nova Zelândia)
 C3(TIB,'OS OUTROS EXTREMOS',[ART(0,(g,t)=>globeS(g,760,540,300,t)),ART('noruega',(g,t)=>{pin(g,790,330,'NORUEGA',1)}),ART('patagônia',(g,t)=>{pin(g,640,760,'PATAGÔNIA',1,'#B0122E',40)}),ART('zelândia',(g,t)=>{pin(g,960,740,'N. ZELÂNDIA',1,'#B0122E',40)}),
  CH('MAIS AO NORTE: NORUEGA',1460,360,'norte'),CH('MAIS AO SUL: EM DISPUTA',1460,520,'disputam')],.6),
 // 17 Brasil: Serra Catarinense, São Joaquim, 900–1.400 m
 SCN((x,t)=>serraSC(x,t,0),[ART(0,(g,t)=>scFarmer(g,1480,1060,.78,t,{face:-1,look:-.3})),PQ(700,250,700,160,'SÃO JOAQUIM (SC)','900 A 1.400 M','joaquim',56,34),CH('VINHO DE ALTITUDE DO BRASIL',700,460,'altitude')],.05),
 // 18 frio, geada; selo de origem desde 2021
 SCN((x,t,s)=>serraSC(x,t,ap(t,18,'geada',1.2)),[CH('GEADA NO INVERNO',560,250,'geada'),ART('selo',(g,t)=>goldSeal(g,1360,480,190,'IG 2021','VINHOS DE ALTITUDE · SC',1)),CH('SELO DE ORIGEM',1360,760,'origem')],.1),
 // 19 1.400 m × 3.563 m: 2,5 vezes mais alto
 C3(TIB,'2,5 VEZES MAIS ALTO',[ART(0,(g,t,s)=>altCols(g,[['SÃO JOAQUIM',1400,'#2E6A4A'],['TIBETE',3563,'#5E1428']],600,820,3563,480,clamp(seg(t,T[s]+.3,T[s]+2.4)),360)),ART('duas',(g,t)=>goldText(g,'2,5×',1440,520,140))],.6),
 // 20 "vinho de altitude" no rótulo: sol forte, noite fria, casca grossa, frescor
 tk(B35,{gest:[[0,'rest'],[.6,'bottleUp'],[7.6,'open'],[8.6,'rest']],bottleHeld:'red',chips:[['SOL FORTE',430,240,'sol'],['NOITE FRIA',430,350,'noite'],['CASCA GROSSA',430,460,'casca'],['MAIS FRESCOR',430,570,'frescor']],over:(g,t,s)=>fade(g,ap(t,20,'altitude',.5),()=>{plaque(g,1580,200,520,120);goldText(g,'"VINHO DE ALTITUDE"',1580,202,34)}),face:t=>({brow:.7,mouth:.7})}),
];
SC.length=LEN.length;
ddFilm({SC,base:B35,talks:[1,4,10,20],places:{2:.6,3:.6,4:.6,5:.6,7:.6,8:.6,10:.6,17:.6,19:.6,20:.6},cta:['VOCÊ JÁ PROVOU?','provou'],
 table:[TIB,'O VINHEDO MAIS ALTO',[
  [(c,cx,cy)=>{altPlaca(c,cx,cy+170,1,'3.563 M')},'3.563 M','Tibete, recorde','do Guinness (2018)'],
  [(c,cx,cy)=>{cactus(c,cx,cy+180,.9)},'3.111 M','Argentina, a','antiga campeã'],
  [(c,cx,cy,t)=>uvSun(c,cx,cy-60,t,.6),'SOL FORTE','casca grossa','e escura'],
  [(c,cx,cy,t)=>{moonS(c,cx,cy-40,70);sparkleDrop(c,cx,cy+120,.9,t)},'NOITE FRIA','guarda o frescor','(acidez)'],
  [(c,cx,cy)=>araucaria(c,cx,cy+190,.75),'BRASIL','Serra Catarinense,','900 a 1.400 m']]],
 tags:[[1,'guinness'],[1,'recorde'],[2,'altura'],[2,'frio'],[3,'lhasa'],[3,'setembro'],[4,'terço'],[5,'doze'],[5,'onze'],[5,'gelo'],[6,'vinte'],[7,'altura'],[7,'três'],[8,'quatrocentos'],[8,'andares'],[9,'jujuy'],[9,'oficial'],[11,'dez'],[12,'grossa'],[12,'protetor'],[13,'amplitude'],[14,'frescor'],[15,'geada'],[15,'vento'],[16,'noruega'],[16,'disputam'],[17,'joaquim'],[18,'selo'],[19,'duas'],[20,'altitude']],
 sfx:[[20,'altitude','lift']]});
