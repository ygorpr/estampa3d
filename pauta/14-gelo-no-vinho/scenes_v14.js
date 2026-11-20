// ---------- cenas do vídeo 14 "Pode colocar gelo no vinho?" — bar de praia ao entardecer (thumb C viva); cena i = fala i ----------
const BB=(x,t)=>beachBar(x,t,{palms:[[1120,720,.62,-.9],[300,720,.7,.7]],posts:[480,1800],sunX:1300});
const B14={set:BB,front:beachCounter,bottles:[],candles:[]};
// taça "piscine" com n pedras já dentro + pedra caindo (fora do vidro só enquanto cai, por cima da boca)
function dropIce(f,bx,by,s,t,times){let n=0;for(const tt of times){if(t>=tt+.45)n++;else if(t>=tt){const y=lerp(by-520*s,by-200*s,seg(t,tt,tt+.45)**2);iceCube(f,bx+(n-1)*10*s,y,.55*s,t*3)}}
 piscineGlass(f,bx,by,s,.6,n,3)}
const SC=[null,
 // 1 piscine: taça grandona com 3 pedras; placa PISCINE = PISCINA
 tk(B14,{gest:[[0,'open'],[3.2,'point'],[6.2,'rest']],props:(f,t,s)=>{piscineGlass(f,1330,806,1.25,.6,3,3);sweatBucket(f,1560,800,.7,11)},
  chips:[['"PISCINE" = PISCINA',430,280,'piscina'],['ESPUMANTE: COM GÁS',430,400,'espumante'],['GELO + TAÇA GRANDE',430,520,'grandona']],face:t=>({brow:.7,mouth:.7})}),
 // 2 erro ou tradição? e a "temperatura ambiente"
 C3(BB,'ERRO OU TRADIÇÃO?',[PQ(560,330,460,150,'ERRO?',null,'erro',70),PQ(1360,330,520,150,'TRADIÇÃO?',null,'tradição',70),
  ART('temperatura',(g,t)=>{thermoS(g,960,760,220,.35+.1*Math.sin(t*1.5));goldText(g,'"TEMPERATURA AMBIENTE"',960,845,40,'Cinzel',900)}),
  TX('era bem mais fria antigamente',960,470,'antigamente',46)]),
 // 3 Grécia: banquete; vinho com água na cratera
 SCN((x,t,s)=>{greekBanquet(x,t);const tp=wq(3,'água');const a=-.9*ease(seg(t,tp-.6,tp+.2));
  grego(x,520,900,.62,t,{look:.4,mouth:.6+.2*speak(t)});crater(x,960,880,1.05,.5,t);
  grego(x,1400,900,.62,t,{face:-1,look:-.4,ph:2,mouth:.7,shawl:'#2E4A6A',hands:{l:[-120,60,110],r:[95,205,95]},hold:(x,hl,hr)=>{x.save();x.translate(hl[0]-10,hl[1]+70);hydria(x,0,0,.62,a);x.restore();
   if(a<-.6){x.fillStyle='rgba(170,210,235,.85)';x.beginPath();x.moveTo(hl[0]-118,hl[1]-10);x.quadraticCurveTo(hl[0]-160,hl[1]+40,hl[0]-165,640);x.lineTo(hl[0]-150,640);x.quadraticCurveTo(hl[0]-145,hl[1]+40,hl[0]-104,hl[1]-4);x.fill()}}})},
  [CH('GRÉCIA ANTIGA',430,170,'gregos'),CH('VINHO + ÁGUA',1460,170,'misturavam'),PQ(960,300,620,130,'CRATERA','VASO GRANDE DE BOCA LARGA','cratera',58,24)],.05),
 // 4 Roma: neve das montanhas; Nero gela a água fervida num vaso enterrado na neve
 SCN((x,t,s)=>{romeSnow(x,t);const wk=seg(t,T[4],wq(4,'imperador'));snowPorter(x,lerp(220,560,wk),900,.6,t,{look:.3});
  snowPile(x,1260,900,520,170);glassVase(x,1260,840,.9);nero(x,1560,900,.64,t,{look:-.45,mouth:.65+.2*Math.sin(t*3)})},
  [CH('NEVE DAS MONTANHAS',430,170,'neve'),CH('SÓ PARA OS RICOS',430,280,'ricos'),PQ(1260,260,560,130,'IMPERADOR NERO','FERVIA E GELAVA NA NEVE','nero',48,24),CH('VASO NA NEVE',1260,960-120,'enterrado')],.05),
 // 5 Sêneca: luxo absurdo!
 SCN((x,t,s)=>{romeSnow(x,t);snowPile(x,1400,900,460,150);seneca(x,760,900,.72,t,{look:Math.sin(t*7)*.45,mouth:-.3,brow:-.5,sad:.3})},
  [PQ(1400,300,520,130,'SÊNECA','FILÓSOFO ROMANO','filósofo',52,26),ST(1400,520,'LUXO!','luxo',.75),CH('FORTUNAS... COM NEVE!',1400,700,'fortunas')],.05),
 // 6 Córdoba: o dono da pousada inventa o tinto de verano
 SCN((x,t,s)=>{cordoba(x,t);x.fillStyle='#8A5A34';x.fillRect(1000,740,760,40);x.fillStyle='#5A3A22';x.fillRect(1030,780,30,120);x.fillRect(1700,780,30,120);
  innkeeper(x,700,900,.66,t,{look:.4,mouth:.55+.25*speak(t),hands:{l:[-95,205,95],r:[150,90,80]}});
  const a=ap(t,6,'refrigerante',.5),b=ap(t,6,'gelo',.5);tallGlass(x,1240,740,1.1,mixC('#5E1428','#B0283E',a),Math.round(3*b),b>.5?1:0,t);
  if(a>0){x.save();x.globalAlpha=a;bottleS(x,[1480,740],.8,'red');x.restore()}},
  [CH('ESPANHA · CÓRDOBA',430,170,'espanha'),CH('TINTO + REFRIGERANTE + GELO',1360,170,'refrigerante'),PQ(1360,330,560,130,'TINTO DE VERANO','= TINTO DE VERÃO','nasceu',46,26)],.05),
 // 7 País Basco: festa de 1972, Coca-Cola na banheira de mistura
 SCN((x,t,s)=>{basqueFest(x,t);const c=ap(t,7,'coca',.6);mixTub(x,960,900,1,.55,c);
  x.save();x.translate(1120,640);colaBottle(x,0,0,.9,-1.4*c);x.restore();if(c>.9){x.fillStyle='rgba(60,30,20,.9)';x.fillRect(1000,668,12,170)}
  festeiro(x,520,900,.62,t,{look:.4,mouth:c>.5?.9:-.2,brow:c>.5?.8:-.3,sad:c>.5?0:.5});festeiro(x,1460,900,.62,t,{face:-1,look:-.4,ph:1.5,mouth:c>.5?.95:-.2,sad:c>.5?0:.4,capCol:'#1E7A3A',shawl:'#1E7A3A'})},
  [CH('PAÍS BASCO',430,170,'basco'),CH('O VINHO ESTAVA RUIM...',1460,170,'ruim'),PQ(960,330,600,130,'1972 · KALIMOTXO','TINTO + COCA-COLA','virou',48,26)],.05),
 // 8 Saint-Tropez, anos 60
 SCN((x,t,s)=>{stTropez(x,t);const p=npc(x,1180,900,.62,t,{ch:CHX({cloth:'#F4F0E8',hood:'#D9D2C4',outfit:'shirt',collar:'#E9E2D0',leg:'#2A3A5A',short:'#5A3E2A'}),face:-1,look:-.3,mouth:.6,hat:'cap',capCol:'#E9DCC0',hands:{l:[-95,205,95],r:[60,40,110]},
   hold:(x,hl,hr)=>piscineGlass(x,hr[0],hr[1]+50,.7,.6,3,4)})},
  [PQ(960,280,640,140,'SAINT-TROPEZ','SUL DA FRANÇA · ANOS 60','tropez',56,26),CH('NO CALORÃO DO VERÃO',430,170,'calorão'),CH('DIZEM QUE...',1500,170,'dizem')],.05),
 // 9 2011: champanhe feito pra gelo; 3 pedras caem uma a uma
 tk(B14,{gest:[[0,'open'],[3,'point'],[7,'rest']],props:(f,t,s)=>{const t3=wq(9,'três');bottleS(f,[1560,806],1,'white');dropIce(f,1330,806,1.25,t,[t3-.3,t3+.25,wq(9,'pedras')+.2])},
  chips:[['2011',430,260,'dois'],['FEITO PRA GELO',430,380,'lançou'],['3 PEDRAS DE GELO',430,500,'três']],face:t=>({brow:.8,mouth:.75})}),
 // 10 close na taça: o gelo derrete e dilui
 C3(BB,'O GELO DERRETE...',[ART(0,(g,t,s)=>{const u=ease(seg(t,wq(10,'derrete')-.3,wq(10,'água')+.6));meltGlass(g,960,880,2.4,u,t)}),
  TX('mais docinho de propósito',470,420,'docinho',48),PQ(1450,440,560,150,'DILUI','= MISTURA ÁGUA','dilui',64,30),ARW(1240,520,1090,560,'água')],.5),
 // 11 a conta: ~20 g de gelo derretem
 C3(BB,'FAZ A CONTA COMIGO',[ART(0,(g,t,s)=>waterBandGlass(g,700,880,2.3,ap(t,11,'derretem',.6))),
  CNT(1360,360,0,20,'vinte','gelo',v=>v+' g DE GELO',80),TX('derretem para gelar uma taça',1360,460,'derretem',44),
  PQ(1360,640,620,160,'PODE PASSAR DE 10%','DE ÁGUA NO COPO','dez',50,28)],.5),
 // 12 o frio fecha o aroma; tinto gelado = amargo
 tk(B14,{gest:[[0,'rest'],[5.8,'point'],[8.6,'rest']],sip:T[12]+.3,keys:[[0,860,812,0],[.5,860,812,0],[1.3,846,636,.12],[4.6,846,632,.12],[5.3,860,812,0],[10,860,812,0]],wine:.42,
  props:(f,t,s)=>{fade(f,ap(t,12,'tinto',.4),()=>{glassW(f,1360,806,1.1,.45,'#5E1428');frost(f,1360,806,1.1,1);snowflake(f,1460,560,30,1)})},
  chips:[['AROMA = O CHEIRO',430,260,'aroma'],['FRIO: QUASE NÃO SOBE',430,380,'sobe'],['TINTO GELADO: AMARGO',430,500,'amargo']],face:t=>({brow:.2,sad:.4,mouth:-.2,look:-.2})}),
 // 13 castelo europeu: chambré
 SCN((x,t,s)=>{castleHall(x,t);coldFireplace(x,1450,880,.9)},
  [PQ(760,320,700,150,'CHAMBRÉ','= DO CÔMODO','chambré',64,30),TX('"chambre" = o cômodo da casa',760,480,'cômodo',48)],.15),
 // 14 Europa sem aquecedor: 13 a 18 °C, gente de casaco
 SCN((x,t,s)=>{castleHall(x,t);coldFireplace(x,960,880,.9);friorento(x,520,900,.6,t,{});friorento(x,1420,900,.6,t,{face:1,look:.3,ph:1,capCol:'#5A2A20'})},
  [CH('SEM AQUECEDOR',430,170,'aquecedor'),ART('jantar',(g,t)=>{thermoS(g,1700,620,260,.38);goldText(g,'13–18 °C',1700,300,48,'Cinzel',900)}),CH('LAREIRA APAGADA',960,300,'europa')],.1),
 // 15 Brasil no verão: 30 graus
 SCN((x,t,s)=>{brRoom(x,t);x.fillStyle='#6A3A22';x.fillRect(1180,760,420,30);x.fillRect(1210,790,24,110);x.fillRect(1546,790,24,110);
  glassW(x,1390,762,1.1,.45,'#5E1428');heatWaves(x,1390,560,40,t,ap(t,15,'álcool',.6))},
  [CH('VERÃO NO BRASIL',430,170,'brasil'),ART('trinta',(g,t)=>{const u=ease(seg(t,wq(15,'trinta'),wq(15,'trinta')+1.2));thermoS(g,1780,640,280,lerp(.4,.9,u));goldText(g,'30 °C',1780,300,52,'Cinzel',900)}),
   CH('PESADO E QUENTE NA BOCA',960,960-110,'pesado')],.05),
 // 16 as temperaturas certas: 3 cartões
 C3(BB,'A TEMPERATURA CERTA',[...[['ESPUMANTE','6 A 10 °C','espumante','rgba(226,190,96,.88)',1],['BRANCO E ROSÉ','7 A 12 °C','branco','#E8A0A8',0],['TINTO','15 A 18 °C','tinto','#6E1630',0]].map(([n,d,w,col,fl],i)=>ART(w,(g,t)=>{const cx=480+i*480;plaque(g,cx,560,400,520);
   if(fl)piscineGlass(g,cx,640,1.2,.6,0,3);else glassW(g,cx,640,1.2,.45,col);goldText(g,n,cx,720,Math.min(40,Math.floor(560/n.length)),'Cinzel',900);goldText(g,d,cx,780,44,'Cinzel',900)})),
  TX('mais fresquinho do que a sua sala!',960,890-30,'fresquinho',38)]),
 // 17 uva congelada e pedras de aço
 tk(B14,{gest:[[0,'open'],[2,'point'],[6,'open'],[8.4,'rest']],props:(f,t,s)=>{grapeBowl(f,1560,806,1);const n=Math.floor(clamp(seg(t,wq(17,'coloca'),wq(17,'esfria')))*4);
   glassW(f,1330,806,1.2,.5,'#E8C070');f.save();f.translate(1330,806);f.scale(1.2,1.2);bowlPath(f);f.clip();for(let i=0;i<n;i++)grapeBall(f,-20+i*14,-90-(i%2)*14,11);f.restore();
   fade(f,ap(t,17,'aço',.4),()=>steelStones(f,1760,770,.7))},
  chips:[['UVA CONGELADA',430,260,'uva'],['NÃO SOLTA ÁGUA',430,380,'nenhuma'],['PEDRAS DE AÇO',430,500,'aço']],face:t=>({brow:.6,mouth:.75})}),
 // 18 balde com gelo, água e sal
 C3(BB,'TÁ COM PRESSA?',[ART(0,(g,t,s)=>saltBucket(g,760,880,1.25,ap(t,18,'sal',.3)>0&&t<wq(18,'deixa')+1?1:0,ap(t,18,'pronta',.3)>0?0:1,t)),
  CH('GELO + ÁGUA + SAL',1360,330,'balde'),TX('o sal deixa a água mais fria que o gelo',1360,460,'fria',42),PQ(1360,640,420,160,'10 MIN',null,'minutos',80)]),
 // 19 tinto: 15 min na geladeira atrás do balcão
 tk(B14,{gest:[[0,'point'],[3,'open'],[5,'rest']],setX:(x,t,s)=>{const o=ap(t,19,'geladeira',.5),c=ap(t,19,'abrir',.5);miniFridge(x,1520,760,o*(1-c),ap(t,19,'antes',.5))},
  chips:[['15 MIN NA GELADEIRA',430,280,'quinze'],['ANTES DE ABRIR',430,400,'abrir']],face:t=>({brow:.5,mouth:.75})}),
 // 20 crime? MITO! tinto caro com gelo: desperdício
 C3(BB,'GELO NO VINHO É CRIME?',[ART(0,(g,t)=>{fade(g,1-.6*ap(t,20,'não',.4),()=>goldText(g,'CRIME?',560,320,80,'Cinzel',900))}),ST(620,420,'MITO','não',1),
  ART('rosé',(g,t)=>{piscineGlass(g,420,760,1.3,.6,3,5,'rgba(232,150,160,.85)');piscineGlass(g,700,760,1.3,.6,3,6)}),CH('PRAIA: TUDO BEM',560,860-30,'praia'),
  ART('caro',(g,t)=>{glassW(g,1360,760,1.5,.45,'#5E1428');g.save();g.translate(1360,760);g.scale(1.5,1.5);bowlPath(g);g.clip();iceCube(g,-8,-128,.5,.3);g.restore();bottleS(g,[1600,760],1,'red')}),
  ART('desperdício',(g,t)=>xMark(g,1360,560,140,ap(t,20,'desperdício',.5))),CH('TINTO CARO: DESPERDÍCIO',1400,860-30,'desperdício')]),
];
SC.length=LEN.length;
ddFilm({SC,base:B14,talks:[1,9,12,17,19],places:{3:.6,4:.6,6:.6,7:.6,8:.6,9:.6,13:.6,15:.6,16:.6},cta:['VOCÊ COLOCA GELO?','gelo'],
 table:[BB,'PODE GELO NO VINHO?',[
  [(c,cx,cy)=>piscineGlass(c,cx,cy+140,1.5,.6,3,3),'PISCINE','espumante com gelo','é tradição'],
  [(c,cx,cy,t)=>meltGlass(c,cx,cy+140,1.5,.7,t),'GELO','dilui e fecha','o aroma'],
  [(c,cx,cy)=>{thermoS(c,cx,cy+90,230,.4)},'AMBIENTE','era de 13','a 18 °C'],
  [(c,cx,cy)=>{bottleS(c,[cx,cy+150],.9,'red')},'TINTO','15 min','na geladeira'],
  [(c,cx,cy)=>{frozenGrapes(c,cx,cy+10,1.4)},'TRUQUE','uva','congelada']]],
 tags:[[1,'piscina'],[1,'espumante'],[2,'erro'],[2,'tradição'],[3,'cratera'],[4,'nero'],[5,'luxo'],[6,'nasceu'],[7,'virou'],[8,'tropez'],[9,'dois'],[10,'dilui'],[11,'dez'],[12,'amargo'],[13,'chambré'],[14,'aquecedor'],[15,'trinta'],[16,'espumante'],[16,'branco'],[16,'tinto'],[17,'uva'],[17,'aço'],[19,'quinze'],[20,'não']],
 sfx:[[9,'três','tag'],[17,'coloca','tag'],[18,'balde','tag'],[19,'geladeira','fridgeopen'],[19,'antes','fridgeclose'],[7,'coca','tag']]});
