// ---------- cenas do vídeo 25 "Picasso pintou rótulo de vinho?" — galeria à noite (thumb B viva), vinhedo, adega, escada de 1855, leilão; cena i = fala i ----------
const GAL=(x,t)=>gallery(x,t,{frames:[[380,290,140,180,'geo','1924'],[1560,290,140,180,'v','1945']]});
const GALW=(x,t)=>gallery(x,t,{frames:[]});
const B25={set:GAL,front:cellarTable,bottles:[['red',1100]],candles:[[560,60]]};
const DUSK=(x,t)=>{vineyard(x,t);chateau(x,1300,560,.7)};
const ST_CX=960,ST_CY=560;
const SC=[null,
 // 1 barão, Dalí, Warhol, censura, pago em vinho
 tk(B25,{gest:[[0,'open'],[2.6,'point'],[5.4,'open'],[8.4,'rest']],chips:[['BARÃO TEIMOSO',430,230,'barão'],['DALÍ',430,330,'dalí'],['WARHOL',430,430,'warhol'],['CENSURA',430,530,'censura'],['PAGO EM VINHO',430,630,'pagamento']],face:t=>({brow:.8,mouth:.7})}),
 // 2 Château Mouton Rothschild, Bordeaux; château = vinícola
 SCN(DUSK,[PQ(560,250,700,150,'MOUTON ROTHSCHILD','BORDEAUX · FRANÇA','mouton',48,30),CH('CHÂTEAU = VINÍCOLA',560,460,'vinícola')],.1),
 // 3 Mouton parece "carneiro", mas vem de "motte" (morrinho)
 C3(DUSK,'MOUTON?',[ART('carneiro',(g,t,s)=>{sheep(g,560,560,1.5);bigX(g,560,560,150,ap(t,3,'mas',.4))}),ART('motte',(g,t)=>motte(g,1360,780,1)),CH('MOTTE = MORRINHO',1360,330,'morrinho'),TX('"carneiro"?',560,780,'carneiro',42)],.55),
 // 4 1922: o barão Philippe de Rothschild, 20 anos
 SCN(GALW,[ART(0,(g,t)=>baronYoung(g,700,1060,.8,t)),PQ(1400,300,460,150,'1922',null,'novecentos',80),CH('BARÃO PHILIPPE',1400,500,'barão'),CH('SÓ 20 ANOS',1400,610,'rapaz')],.05),
 // 5 engarrafar dentro da própria vinícola (antes: os comerciantes)
 SCN((x,t)=>{cellarWall(x,t);for(const [bx,sc] of [[200,1],[520,1],[360,.8]])barrelSide(x,bx,900,sc,.95)},[ART(0,(g,t)=>baronYoung(g,1380,1060,.78,t,{face:-1,look:-.4,lo:0,ro:1,hands:{l:[-100,200,90],r:[-200,90,100]}})),
  ART('engarrafar',(g,t,s)=>{const n=Math.floor(clamp(seg(t,wq(5,'passa'),T[s+1]-1))*6);for(let i=0;i<n;i++)artBottle(g,760+i*70,860,.55,'geo')}),CH('ANTES: OS COMERCIANTES',560,240,'comerciantes'),CH('AGORA: NA PRÓPRIA VINÍCOLA',960,360,'própria')],.1),
 // 6 1924: rótulo moderno de Jean Carlu, desenhista de cartazes
 SCN(GALW,[ART(0,(g,t,s)=>{painter(g,560,1060,.8,t,{stroke:t*3});g.fillStyle='#5A3A22';g.fillRect(1040,300,16,600);g.fillRect(1320,300,16,600);framedArt(g,1190,500,300,380,'geo','',1,3)}),PQ(1580,240,440,140,'1924','JEAN CARLU','jean',64,32),CH('DESENHISTA DE CARTAZES',1500,820-20,'cartazes')],.05),
 // 7 o mercado odiou; gaveta por 20 anos, com a guerra no meio
 SCN(GALW,[ART(0,(g,t)=>{merchant(g,420,1060,.74,t);merchant(g,760,1060,.74,t,{ph:1.3,face:-1,look:-.3,ch:Object.assign({},MERCH,{short:'#2A2020',beard:'#3A3030'})})}),ART(0,(g,t,s)=>{const u=ap(t,7,'gaveta',.9);framedArt(g,1300,330+u*170,180,230,'geo','',1-u*.0,3);g.fillStyle='#4A2614';g.fillRect(1120,460,360,240);g.fillStyle='#6A3A1E';g.fillRect(1100,440,400,40);g.fillStyle='#D4A24C';g.beginPath();g.arc(1300,600,12,0,7);g.fill()}),
  ART('vinte',(g,t,s)=>calPage(g,1640,300,String(Math.round(lerp(1925,1944,clamp(seg(t,wq(7,'vinte'),T[s+1]-.6))))),'')),CH('O MERCADO ODIOU!',560,240,'odiou'),CH('2ª GUERRA',1300,800,'guerra')],.05),
 // 8 1945: o V da Vitória (Philippe Jullian)
 C3(GALW,'1945 · A VITÓRIA',[ART(0,(g,t)=>framedArt(g,960,520,320,400,'v','',1,8)),CH('PHILIPPE JULLIAN',1500,420,'jullian'),LB('V = VITÓRIA',420,520,'vitória',44)],.5),
 // 9 desde então, cada safra ganha um artista
 SCN(GALW,[ART(0,(g,t,s)=>{const K=['geo','v','dots','blue','bacc','pop','geo','dots'];for(let i=0;i<8;i++){const a=easeIO(seg(t,T[s]+.6+i*.7,T[s]+1.1+i*.7));framedArt(g,180+(i%4)*520,i<4?220:500,170,200,K[i],String(1946+i*7),a,i*5+2)}}),
  CH('CADA SAFRA, UM ARTISTA',960,760,'artista')],.05),
 // 10 Braque, Dalí, Miró, Chagall, Kandinsky e Warhol
 SCN(GALW,[ART(0,(g,t,s)=>{const L_=[['braque','geo','1955','BRAQUE'],['dalí','dots','1958','DALÍ'],['miró','dots','1969','MIRÓ'],['chagall','blue','1970','CHAGALL'],['kandinsky','geo','1971','KANDINSKY'],['warhol','pop','1975','WARHOL']];
  const ox=-40*seg(t,T[s],T[s+1]);L_.forEach(([w,k,y,n],i)=>{const a=ap(t,10,w,.5),cx=210+i*300+ox;framedArt(g,cx,360,200,250,k,y,a,i*11+3);fade(g,a,()=>goldText(g,n,cx,630,32))})}),CH('E QUE ARTISTAS!',960,760,'artistas')],.05),
 // 11 Francis Bacon, Jeff Koons, o rei Charles (príncipe)
 SCN(GALW,[ART(0,(g,t,s)=>{const L_=[['bacon','blue','1990','FRANCIS BACON'],['koons','pop','2010','JEFF KOONS'],['charles','bacc','2004','PRÍNCIPE CHARLES']];L_.forEach(([w,k,y,n],i)=>{const a=ap(t,11,w,.5),cx=400+i*560;framedArt(g,cx,360,240,300,k,y,a,i*13+5);fade(g,a,()=>goldText(g,n,cx,640,34))});
  fade(g,ap(t,11,'charles',.5),()=>crown(g,1520,140,.8))})],.05),
 // 12 pagamento em vinho: 10 caixas, 5 da safra pintada
 SCN(GALW,[ART(0,(g,t,s)=>{painter(g,600,1060,.8,t,{noBrush:true,noPalette:true,mouth:.85,hands:{l:[-60,170,120],r:[60,170,120]}});const n=Math.floor(clamp(seg(t,wq(12,'dez')-.4,wq(12,'dez')+1.6))*10);for(let i=0;i<n;i++)crateBox(g,1150+(i%5)*130,860-Math.floor(i/5)*110,i<5)}),
  CH('DINHEIRO, NENHUM!',1400,230,'nenhum'),PQ(1400,420,560,140,'10 CAIXAS','DE VINHO','dez',60,30)],.05),
 // 13 surpresa: Picasso nunca pintou um rótulo para eles
 tk(B25,{gest:[[0,'rest'],[1.2,'point'],[4.6,'open'],[6.2,'rest']],chips:[['PICASSO?',430,300,'picasso'],['NUNCA PINTOU PARA ELES!',430,420,'nunca']],over:(g,t,s)=>{const a=ap(t,13,'surpresa',.5);if(a>0){g.save();g.translate(1560,240);g.scale(.6,.6);stamp(g,0,0,'SURPRESA',a);g.restore()}},face:t=>({brow:1.1,wide:.6,mouth:.7})}),
 // 14 1973: homenagem com uma pintura de 1959 (bacanal = festa do deus do vinho)
 C3(GALW,'1973 · HOMENAGEM A PICASSO',[ART(0,(g,t)=>{framedArt(g,960,520,300,380,'bacc','',1,73);candle(g,700,800,110,t);candle(g,1220,800,110,t)}),CH('PINTURA DE 1959',420,420,'cinquenta'),CH('BACANAL =',1500,380,'bacanal'),CH('FESTA DO DEUS DO VINHO',1500,490,'festa')],.55),
 // 15 1973: virou Premier Cru, a primeira classe
 C3(GALW,'1973 · O MAIOR ANO',[ART('premier',(g,t,s)=>confetti(g,1,t)),PQ(960,500,760,200,'PREMIER CRU','= A PRIMEIRA CLASSE','premier',80,40),ART(0,(g,t)=>artBottle(g,960,860,.9,'bacc'))],.6),
 // 16 1855: 5 classes como uma escada; Mouton no 2º degrau
 C3(GALW,'BORDEAUX · 1855',[ART('cinco',(g,t)=>stairs(g,ST_CX,ST_CY)),ART('segundo',(g,t)=>{const p=stepTop(ST_CX,ST_CY,1);artBottle(g,p[0],p[1],.6,'geo');goldText(g,'← MOUTON',p[0]+150,p[1]-110,30)}),CH('5 CLASSES',1500,330,'classes')],.6),
 // 17 o lema: "Primeiro não posso, segundo não me digno, Mouton sou."
 SCN(GALW,[ART(0,(g,t)=>baronOld(g,620,1060,.8,t)),ART('lema',(g,t)=>{scroll(g,1340,440,700,420,'','');darkTxt(g,'"PRIMEIRO NÃO POSSO,',1340,360,36);darkTxt(g,'SEGUNDO NÃO ME DIGNO,',1340,430,36);darkTxt(g,'MOUTON SOU."',1340,510,46)})],.05),
 // 18 o decreto: sobe para a primeira classe; o lema muda
 C3(GALW,'A PROMOÇÃO',[ART(0,(g,t,s)=>{stairs(g,ST_CX-200,ST_CY+40);const u=easeIO(seg(t,wq(18,'subiu')-.2,wq(18,'subiu')+1.2)),p0=stepTop(ST_CX-200,ST_CY+40,1),p1=stepTop(ST_CX-200,ST_CY+40,0);artBottle(g,lerp(p0[0],p1[0],u),lerp(p0[1],p1[1],u)-Math.sin(u*Math.PI)*80,.6,'geo')}),
  CH('ÚNICA PROMOÇÃO EM +100 ANOS',1460,270,'única'),ART('virou',(g,t)=>{g.fillStyle='rgba(20,6,10,.92)';g.beginPath();g.roundRect(1240,420,520,260,16);g.fill();g.strokeStyle='#D4A24C';g.lineWidth=4;g.stroke();goldText(g,'"PRIMEIRO SOU,',1500,480,32);goldText(g,'SEGUNDO FUI,',1500,550,32);goldText(g,'MOUTON NÃO MUDA."',1500,620,32)})],.6),
 // 19 1993: Balthus; nos EUA o desenho foi barrado e o rótulo saiu em branco
 C3(GALW,'1993 · BALTHUS',[ART(0,(g,t)=>{goldFrame(g,640,520,280,360,20);curtain(g,640,520,284,364)}),ART('barrado',(g,t)=>{blankLabel(g,1300,520,280,360);goldText(g,'EUA',1300,300,44)}),ST(1300,560,'CENSURADO','barrado',.5),CH('ESPAÇO EM BRANCO!',1300,800,'branco')],.6),
 // 20 latinos: Chile (Matta), México (Tamayo), Portugal (Joana Vasconcelos, 2023); Brasil? nenhum
 C3(GALW,'E OS LATINOS?',[ART('matta',(g,t)=>{flag2(g,'cl',300,440,200);goldText(g,'CHILE',300,600,34);txt(g,'Roberto Matta',300,660,32)}),ART('tamayo',(g,t)=>{mxFlag(g,740,440,200);goldText(g,'MÉXICO',740,600,34);txt(g,'Rufino Tamayo',740,660,32)}),
  ART('portugal',(g,t)=>{flag2(g,'pt',1180,440,200);goldText(g,'PORTUGAL',1180,600,34);txt(g,'Joana Vasconcelos · 2023',1180,660,32)}),ART('brasileiro',(g,t)=>{flag(g,'br',1620,440,200);goldText(g,'BRASIL',1620,600,34);goldText(g,'?',1620,700,80)})],.6),
 // 21 colecionador; Sotheby's leiloa os cem anos de rótulos
 SCN(GALW,[ART(0,(g,t,s)=>{framedArt(g,260,330,170,210,'pop','1975',1,21);collector(g,520,1060,.74,t);const hit=Math.max(0,Math.sin(Math.max(0,t-wq(21,'leiloa'))*6))*(t>wq(21,'leiloa')&&t<wq(21,'leiloa')+1.6?1:0);auctioneer(g,1480,1000,.74,t,hit);podium(g,1480,1000,.9)}),
  PQ(960,230,640,140,"SOTHEBY'S · FEV 2027",'100 ANOS DE RÓTULOS','sotheby',40,28),CH('UM RÓTULO DE CADA ANO',960,420,'cada')],.05),
 // 22 o rótulo de 2024 será revelado em 1º de dezembro: quem será?
 tk(B25,{gest:[[0,'open'],[3.4,'point'],[7.4,'open'],[9.6,'rest']],chips:[['SAFRA 2024',430,280,'vinte'],['REVELADO EM 1º DE DEZEMBRO',430,400,'revelado'],['QUEM SERÁ?',430,520,'quem']],over:(g,t,s)=>{const a=ap(t,22,'rótulo',.6);fade(g,a,()=>{goldFrame(g,1620,300,200,250,16);coverCloth(g,1620,300,200,250,t)})},face:t=>({brow:.8,mouth:.7})}),
];
SC.length=LEN.length;
function crateBox(g,cx,base,hl){g.save();g.fillStyle='#8A5A34';g.fillRect(cx-60,base-100,120,100);g.strokeStyle='#5A3A20';g.lineWidth=4;g.strokeRect(cx-60,base-100,120,100);g.beginPath();g.moveTo(cx-60,base-50);g.lineTo(cx+60,base-50);g.stroke();
 g.fillStyle=hl?'#D4A24C':'#F3E6C8';g.font='900 18px Cinzel';g.textAlign='center';g.textBaseline='middle';g.fillText(hl?'SAFRA':'VINHO',cx,base-74);g.restore()}
function crown(g,cx,cy,s){g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle='#F2D27A';g.beginPath();g.moveTo(-60,30);g.lineTo(-70,-30);g.lineTo(-35,0);g.lineTo(0,-45);g.lineTo(35,0);g.lineTo(70,-30);g.lineTo(60,30);g.closePath();g.fill();g.fillStyle='#C8213F';g.beginPath();g.arc(0,10,9,0,7);g.fill();g.restore()}
ddFilm({SC,base:B25,talks:[1,13,22],places:{2:.6,4:.6,5:.6,6:.6,9:.6,12:.6,13:.6,16:.6,17:.6,21:.6,22:.6},cta:['QUE ARTISTA NO RÓTULO?','artista'],
 table:[GALW,'PICASSO NO RÓTULO?',[
  [(c,cx,cy)=>framedArt(c,cx,cy,170,220,'geo','',1,3),'1924','Jean Carlu: o 1º','rótulo de artista'],
  [(c,cx,cy)=>framedArt(c,cx,cy,170,220,'v','',1,8),'1945','o V da Vitória:','a tradição volta'],
  [(c,cx,cy)=>{crateBox(c,cx-60,cy+120,1);crateBox(c,cx+60,cy+120,0);crateBox(c,cx,cy+20,1)},'PAGAMENTO','10 caixas de vinho,','dinheiro nenhum'],
  [(c,cx,cy)=>framedArt(c,cx,cy,170,220,'bacc','',1,73),'1973','Picasso (homenagem)','e Premier Cru'],
  [(c,cx,cy)=>{goldFrame(c,cx,cy,170,220,14);curtain(c,cx,cy,174,224)},'1993','Balthus: censurado','nos EUA']]],
 tags:[[1,'barão'],[1,'dalí'],[1,'warhol'],[1,'censura'],[1,'pagamento'],[2,'mouton'],[2,'vinícola'],[3,'morrinho'],[4,'novecentos'],[5,'própria'],[6,'jean'],[7,'odiou'],[7,'guerra'],[8,'vitória'],[9,'artista'],[10,'braque'],[10,'dalí'],[10,'miró'],[10,'chagall'],[10,'kandinsky'],[10,'warhol'],[11,'bacon'],[11,'koons'],[11,'charles'],[12,'nenhum'],[13,'nunca'],[14,'bacanal'],[15,'premier'],[16,'segundo'],[17,'lema'],[18,'única'],[19,'barrado'],[20,'matta'],[20,'tamayo'],[20,'portugal'],[20,'brasileiro'],[21,'sotheby'],[22,'revelado'],[22,'quem']],
 sfx:[[5,'passa','bottledown'],[7,'gaveta','flip'],[12,'dez','bottledown'],[13,'surpresa','tag'],[18,'subiu','lift'],[21,'leiloa','glassdown']]});
