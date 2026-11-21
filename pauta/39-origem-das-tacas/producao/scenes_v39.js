// ---------- cenas do vídeo 39 "De onde vem cada taça de vinho?" — bar Dark Divino com a fileira de taças (thumb C viva); cena i = fala i ----------
// Taça SEMPRE pela haste; vinho e bolhas só dentro do bojo; garrafa com a mão de descanso atrás dela (rótulo livre).
// Inserções com dissolve: museu do vidro (3–4, 6, 8), salão inglês (5), laboratório (10), sala de reunião (12–13), Expo de Bruxelas (16).
const BAR39=(x,t)=>barTacas(x,t,{y:372,s:.6,x0:-200,x1:2120,tipos:['roemer','flute','coupe','tulipa','bordeaux','borgonha','coupe','flute','tulipa','bordeaux','borgonha']});
const REST_K=[[0,860,812,0],[999,860,812,0]];
const B39={set:BAR39,front:cellarTable,bottles:[['red',1100]],candles:[[560,60]],sip:0,keys:REST_K,wine:.38};
const TK=(o)=>(t,c,s)=>tk(Object.assign({},B39,{sip:T[s]}),o)(t,c,s);
const MUS=(x,t)=>museum(x,t);
const SCX=(set,fn,dim=0)=>(t,c,s)=>{const x=layer('w',{x:960,y:540,z:1,b:[0,0,0]});set(x,t,s);comp([['w',0]]);if(dim>0){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle=`rgba(20,6,10,${dim})`;ctx.fillRect(0,0,W,H);ctx.restore()}
 const g=layer('g',null);fn(g,t,s);blit(ctx,L.g,0)};
const fo=(t,s,w,d=.5)=>1-AW(t,s,w,d);
const GOLDW='#E8C860';
// vitrine iluminada com uma peça dentro (fn desenha a peça com base em (cx, base-20))
function showcase(g,cx,base,w,h,fn){g.save();g.fillStyle='#2A1410';g.fillRect(cx-w/2-20,base,w+40,110);g.fillStyle=GOLD;g.fillRect(cx-w/2-20,base,w+40,8);
 const gl=g.createRadialGradient(cx,base-h,10,cx,base-h*.4,h);gl.addColorStop(0,'rgba(255,236,200,.35)');gl.addColorStop(1,'rgba(255,236,200,.04)');g.fillStyle=gl;g.fillRect(cx-w/2,base-h,w,h);fn(g,cx,base);
 g.strokeStyle='rgba(255,240,220,.5)';g.lineWidth=4;g.strokeRect(cx-w/2,base-h,w,h);g.fillStyle='rgba(255,255,255,.08)';g.beginPath();g.moveTo(cx-w/2+20,base-h);g.lineTo(cx-w/2+80,base-h);g.lineTo(cx-w/2+20,base-h*.5);g.closePath();g.fill();g.restore()}
const SC=[null,
 // 1 rainha · câmera de gás · França × Alemanha · 1 taça por uva
 TK({gest:[[0,'open'],[3,'point'],[6,'open']],chips:[['UMA RAINHA',430,250,'rainha'],['UMA CÂMERA DE GÁS',430,360,'câmera'],['FRANÇA × ALEMANHA',430,470,'briga'],['1 TAÇA POR UVA',430,580,'uva']],face:t=>({brow:.9,mouth:.8})}),
 // 2 a haste já tem vídeo; hoje: o formato do copo, começando no branco
 TK({gest:[[0,'rest'],[3.4,'point'],[7,'rest']],chips:[['O FORMATO DO COPO',430,500,'formato'],['COMEÇA NO VINHO BRANCO',430,610,'branco']],face:t=>({brow:.6,mouth:.8}),
  over:(g,t,s)=>videoCard(g,430,250,440,['POR QUE A TAÇA','TEM HASTE?'],AW(t,s,'haste',.5))}),
 // 3 museu: o roemer (Holanda/Alemanha, 1600s), vidro verde, bolinhas na haste
 SCX(MUS,(g,t,s)=>{showcase(g,820,800,460,560,(g,cx,b)=>tacaL(g,cx,b-14,1.9,'roemer',.5,'rgba(220,210,120,.75)','rgba(200,190,90,.85)'));
  fade(g,AW(t,s,'holanda'),()=>{plaque(g,1420,200,620,120);goldText(g,'HOLANDA · ALEMANHA',1420,182,40,'Cinzel',900);goldText(g,'ANOS 1600',1420,232,24,'Cinzel',700)});
  chip(g,1420,380,'O ROEMER',AW(t,s,'roemer'));chip(g,1420,490,'VIDRO VERDE',AW(t,s,'verde'));fade(g,AW(t,s,'bolinhas',.5),()=>arrow(g,1180,620,870,700,GOLD2,6));chip(g,1420,600,'BOLINHAS: NÃO ESCORREGA',AW(t,s,'bolinhas'))},.1),
 // 4 por que verde? o vidro verde deixa o branco com cor de ouro
 C3(MUS,'POR QUE VERDE?',[ART(0,(g,t,s)=>{const u=AW(t,s,'ouro',.9),b=easeIO(seg(t,T[s]+.3,T[s]+2));g.save();g.globalAlpha*=b;const gr=g.createLinearGradient(300,0,1600,0);gr.addColorStop(0,'rgba(255,246,220,0)');gr.addColorStop(.5,'rgba(255,246,220,.35)');gr.addColorStop(1,'rgba(255,230,150,0)');g.fillStyle=gr;g.fillRect(300,420,1300,120);g.restore();
   tacaL(g,960,820,2.4,'roemer',.55,u>.5?'rgba(242,190,60,.9)':'rgba(220,214,150,.7)',u>.5?'rgba(214,150,30,.95)':'rgba(200,196,130,.8)')}),CH('VIDRO VERDE = COR DE OURO',960,880-40,'ouro')],.66),
 // 5 Inglaterra séc. XVII: o champanhe vira moda; a flûte (= flauta)
 SCX(salaoIngles,(g,t,s)=>{g.fillStyle='#3A2012';g.fillRect(300,780,1000,30);g.fillStyle='#2A160C';g.fillRect(340,810,920,300);
  npc(g,760,1100,.85,t,{ch:CAVALHEIRO,face:1,look:.4,lookY:-.4,brow:.8,mouth:.95,wig:'#3A2418',noLegs:true,ruff:true,hands:{l:[-60,170,110],r:[80,-60,140]},
   hold:(x,hl,hr)=>taca(x,hr[0],hr[1]+40,1.05,'flute',.6)});
  const m=AW(t,s,'francês',.8);fade(g,AW(t,s,'altas'),()=>{fade(g,1-m*.5,()=>taca(g,1420,640,1.7,'flute',.6));fade(g,m,()=>flauta(g,1420,380,520,-.1))});
  chip(g,1420,170,'MODA NA INGLATERRA',AW(t,s,'inglaterra'));fade(g,AW(t,s,'flûte'),()=>{plaque(g,1420,780,520,100);goldText(g,'FLÛTE = FLAUTA',1420,782,40,'Cinzel',900)})},.05),
 // 6 anos 1830: a rival, a coupe larga e rasinha
 SCX(MUS,(g,t,s)=>{showcase(g,560,800,380,460,(g,cx,b)=>tacaL(g,cx,b-14,1.5,'flute',.6,'rgba(242,214,130,.85)','rgba(220,186,90,.9)'));
  fade(g,AW(t,s,'coupe'),()=>showcase(g,1240,800,520,460,(g,cx,b)=>{taca(g,cx,b-14,2.2,'coupe',.55,'#E8C860',{nb:20});g.fillStyle='rgba(255,250,235,.9)';for(let i=0;i<9;i++){g.beginPath();g.arc(cx-120+i*30,b-14-150*2.2+2,14,Math.PI,0);g.fill()}}));
  fade(g,AW(t,s,'mil'),()=>{plaque(g,1240,190,420,100);goldText(g,'ANOS 1830',1240,192,44,'Cinzel',900)});chip(g,1240,880-30,'LARGA E RASINHA',AW(t,s,'larga'))},.1),
 // 7 a lenda de Maria Antonieta: LENDA (ela morreu em 1793, a coupe vira moda nos anos 1830)
 SCX(MUS,(g,t,s)=>{npc(g,620,1000,.8,t,{ch:RAINHA,face:1,look:lerp(.3,-.2,AW(t,s,'lenda!')),brow:lerp(.6,1.4,AW(t,s,'lenda!')),wide:AW(t,s,'lenda!')*.6,mouth:lerp(.8,.2,AW(t,s,'lenda!')),skirt:'#A8C8E0',headExtra:pouf,
   hands:{l:[-90,90,120],r:[80,60,130]},lo:true,hold:(x,hl,hr)=>{taca(x,hr[0],hr[1]+40,1,'coupe',.5,'#E8C860');fanL(x,hl[0],hl[1],.8,-.4)}});
  fade(g,AW(t,s,'maria'),()=>{plaque(g,620,140,520,96);goldText(g,'MARIA ANTONIETA',620,142,36,'Cinzel',900)});
  const lg=AW(t,s,'lenda!',.45);if(lg>0)carimboLenda(g,1360,250,1.3*(1+(1-lg)*.6),-.18,'LENDA');
  fade(g,AW(t,s,'morreu'),()=>{g.strokeStyle=GOLD2;g.lineWidth=6;g.beginPath();g.moveTo(1060,560);g.lineTo(1700,560);g.stroke();for(const [x,l,sub] of [[1110,'1793','A RAINHA MORRE'],[1640,'1830','A COUPE VIRA MODA']]){g.fillStyle=GOLD2;g.beginPath();g.arc(x,560,14,0,7);g.fill();goldText(g,l,x,500,46,'Cinzel',900);goldText(g,sub,x,620,22,'Cinzel',700)}});
  chip(g,1380,760,'40 ANOS DE DIFERENÇA',AW(t,s,'quarenta'))},.1),
 // 8 o que existe: tigela de porcelana da leiteria da rainha (Sèvres, 1787); molde? ninguém prova
 SCX(MUS,(g,t,s)=>{showcase(g,760,800,620,500,(g,cx,b)=>{fade(g,AW(t,s,'tigela'),()=>bolSevres(g,cx-60,b-14,1.25));fade(g,AW(t,s,'leite'),()=>milkJug(g,cx+190,b-14,1.1))});
  fade(g,AW(t,s,'leiteria'),()=>{plaque(g,1460,240,560,140);goldText(g,'SÈVRES · 1787',1460,214,40,'Cinzel',900);goldText(g,'LEITERIA DA RAINHA',1460,270,24,'Cinzel',700)});
  chip(g,1460,420,'TIGELA PRA BEBER LEITE',AW(t,s,'tigela'));const a=AW(t,s,'ninguém',.45);if(a>0){g.save();g.translate(1460,620);g.scale(.5,.5);stamp(g,0,0,'BOATO',a);g.restore()}},.1),
 // 9 auge da coupe entre as guerras; a flûte volta; qual é melhor?
 C3(MUS,'QUAL É MELHOR?',[ART(0,(g,t,s)=>{g.strokeStyle=GOLD2;g.lineWidth=6;g.beginPath();g.moveTo(260,640);g.lineTo(1660,640);g.stroke();}),
  ART('auge',(g,t)=>{taca(g,760,600,2,'coupe',.55,'#E8C860');goldText(g,'1918–1939',760,700,40,'Cinzel',900);txt(g,'entre as duas guerras',760,750,34)}),
  ART('flûte',(g,t,s,a)=>{taca(g,lerp(1800,1400,a),600,1.5,'flute',.6);goldText(g,'DEPOIS: A FLÛTE',1400,700,36,'Cinzel',900)}),ART('melhor',(g,t)=>goldText(g,'?',1110,430,160,'Cinzel',900))],.66),
 // 10 laboratório: físico francês com câmera que enxerga gás; o dobro de gás sobre a flûte
 SCX(labRoom,(g,t,s)=>{g.fillStyle='#4A3A34';g.fillRect(820,760,700,24);taca(g,1000,760,1.2,'flute',.6);taca(g,1300,760,1.2,'coupe',.5,'#E8C860');irCamera(g,1660,900,1);
  npc(g,420,1040,.82,t,{ch:FISICO,face:1,look:.6,lookY:-.2,brow:.8,mouth:.7,specs:true,noLegs:true,hands:{l:[-95,205,95],r:[120,-40,110]},ro:true});
  fade(g,AW(t,s,'câmera'),()=>irMonitor(g,1150,330,520,300,t,AW(t,s,'servir',1.5)));chip(g,420,180,'UM FÍSICO FRANCÊS',AW(t,s,'físico'));
  fade(g,AW(t,s,'dobro'),()=>{plaque(g,1150,620,560,90);goldText(g,'2× MAIS GÁS NA FLÛTE',1150,622,36,'Cinzel',900)})},0),
 // 11 coupe deixa a bolha fugir; flûte esconde o perfume; a tulipa (como a flor)
 C3(BAR39,'E A TULIPA?',[ART(0,(g,t,s)=>{taca(g,420,760,2,'coupe',.55,'#E8C860');for(let i=0;i<4;i++){const u=((t*.7+i/4)%1);g.strokeStyle=`rgba(242,210,122,${1-u})`;g.lineWidth=4;g.beginPath();g.arc(420+(i-1.5)*60+(i-1.5)*u*60,460-u*150,6,0,7);g.stroke()}goldText(g,'A BOLHA FOGE',420,820-20,30,'Cinzel',900)}),
  ART('apertada',(g,t)=>{taca(g,960,760,1.7,'flute',.6);g.strokeStyle='rgba(242,210,122,.8)';g.lineWidth=4;for(const k of [-1,1]){g.beginPath();g.moveTo(960+k*10,420);g.quadraticCurveTo(960+k*40,380,960+k*8,350);g.stroke()}goldText(g,'ESCONDE O PERFUME',960,800,30,'Cinzel',900)}),
  ART('tulipa',(g,t)=>{const gl=g.createRadialGradient(1500,560,10,1500,560,260);gl.addColorStop(0,'rgba(255,220,140,.35)');gl.addColorStop(1,'rgba(255,220,140,0)');g.fillStyle=gl;g.fillRect(1240,300,520,520);taca(g,1440,760,1.8,'tulipa',.5,'#E8C860');goldText(g,'A TULIPA',1500,800,34,'Cinzel',900)}),
  ART('flor',(g,t)=>tulipFlower(g,1680,460,.9))],.66),
 // 12 profissionais: uma taça igual pra todos; 1968: Alemanha × França
 SCX(meetingRoom,(g,t,s)=>{meetTable(g);fade(g,AW(t,s,'alemanha'),()=>{tacaL(g,700,760,1.5,'tulipa',.35,'#8E1B3A','#3A0612');flag(g,'de',700,440,130)});fade(g,AW(t,s,'frança'),()=>{taca(g,1220,760,1.5,'bordeaux',.3,'#6E0F24');flag(g,'fr',1220,440,130)});
  fade(g,AW(t,s,'mil'),()=>{plaque(g,960,150,520,100);goldText(g,'1968',960,152,46,'Cinzel',900)});chip(g,960,290,'UMA TAÇA IGUAL PRA TODOS',AW(t,s,'igual'));fade(g,AW(t,s,'frança'),()=>goldText(g,'×',960,600,90,'Cinzel',900))},0),
 // 13 Turquia 1970: vence a francesa; taça INAO; depois norma mundial (ISO 3591)
 SCX(meetingRoom,(g,t,s)=>{meetTable(g);const v=AW(t,s,'venceu',.5);fade(g,1-v*.7,()=>tacaL(g,700,760,1.5,'tulipa',.35,'#8E1B3A','#3A0612'));tacaL(g,1220,760,1.5+v*.15,'tulipa',.3,'#8E1B3A','#3A0612');flag(g,'fr',1220,440,130);
  gavel(g,500,560,kf(t-wq(s,'venceu'),[[-1,-.9],[0,-.9],[.15,.1],[.4,-.6]]));fade(g,AW(t,s,'turquia'),()=>{plaque(g,960,150,560,100);goldText(g,'TURQUIA · 1970',960,152,42,'Cinzel',900)});
  seal(g,1400,560,70,'INAO',AW(t,s,'inao',.5));chip(g,1500,300,'INSTITUTO FRANCÊS',AW(t,s,'instituto'));chip(g,960,880-40,'NORMA MUNDIAL: ISO 3591',AW(t,s,'norma'))},0),
 // 14 pequena (~215 ml), formato de ovo: boca mais estreita que a barriga, pra prender o cheiro
 C3(BAR39,'A TAÇA DOS PROFISSIONAIS',[ART(0,(g,t,s)=>{tacaL(g,800,820,2.6,'tulipa',.32,'#8E1B3A','#3A0612')}),ART('ovo',(g,t,s,a)=>{g.setLineDash([14,10]);g.strokeStyle=`rgba(242,210,122,${a})`;g.lineWidth=5;g.beginPath();g.ellipse(800,820-2.6*170,2.6*44,2.6*80,0,0,7);g.stroke();g.setLineDash([])}),
  LB('~215 ML',1400,300,'duzentos',56),ART('boca',(g,t)=>{arrow(g,1220,420,880,210,GOLD2,6);goldText(g,'BOCA ESTREITA',1400,420,34,'Cinzel',900)}),ART('barriga',(g,t)=>{arrow(g,1220,560,950,520,GOLD2,6);goldText(g,'BARRIGA LARGA',1400,560,34,'Cinzel',900)}),CH('PRENDE O CHEIRO',1400,720,'prender')],.66),
 // 15 Bordeaux e Borgonha: regiões da França; a regra foi de Claus Riedel (Áustria)
 C3(BAR39,null,[ART(0,(g,t)=>franceMap(g,700,520,1.5,0)),ART('bordeaux',(g,t,s,a)=>{pin(g,520,650,'BORDEAUX',a);taca(g,400,560,.8,'bordeaux',.35,'#6E0F24')}),ART('borgonha',(g,t,s,a)=>{pin(g,880,500,'BORGONHA',a);taca(g,980,440,.8,'borgonha',.3,'#7A1A2A')}),
  CH('DUAS REGIÕES DA FRANÇA',700,880-40,'regiões'),ART('austríaco',(g,t)=>{flagAT(g,1500,250,150);plaque(g,1500,460,520,140);goldText(g,'CLAUS RIEDEL',1500,440,44,'Cinzel',900);goldText(g,'ÁUSTRIA',1500,494,24,'Cinzel',700)})],.66),
 // 16 Bruxelas 1958: grande prêmio com a taça de Borgonha lisa e fina; 1973: uma taça pra cada uva
 SCX(expo58,(g,t,s)=>{const r=AW(t,s,'setenta',.6);npc(g,620,1060,.86,t,{ch:RIEDEL,face:1,look:.3,lookY:-.3,brow:.9,mouth:.95,thick:true,medal:AW(t,s,'prêmio')>.5,noLegs:true,hands:{l:[-95,205,95],r:[150,40,140]},
   hold:(x,hl,hr)=>taca(x,hr[0],hr[1]+40,1.05,'borgonha',0)});g.fillStyle='#3A2A20';g.fillRect(200,820,840,24);
  fade(g,AW(t,s,'bruxelas'),()=>{plaque(g,1340,150,560,110);goldText(g,'BRUXELAS · 1958',1340,136,40,'Cinzel',900);goldText(g,'GRAND PRIX',1340,182,24,'Cinzel',700)});chip(g,1340,310,'LISA E FINA',AW(t,s,'lisa'));
  fade(g,r,()=>{g.fillStyle='rgba(20,6,10,.75)';g.beginPath();g.roundRect(1000,440,720,360,20);g.fill();g.strokeStyle=GOLD;g.lineWidth=4;g.stroke();['flute','tulipa','bordeaux','borgonha','coupe'].forEach((k,i)=>taca(g,1080+i*140,740,.85,k,.35,'#6E0F24'));goldText(g,'1973: UMA TAÇA PRA CADA UVA',1360,480,30,'Cinzel',900)})},0),
 // 17 Borgonha: bojo de balão (> 1 litro), Pinot Noir; Bordeaux: mais alta, tintos encorpados
 TK({gest:[[0,'rest'],[1.4,'point'],[9,'open'],[12,'rest']],props:(f,t,s)=>{taca(f,1270,815,1.35,'borgonha',.25,'#7A1A2A');taca(f,1460,815,1.35,'bordeaux',.3,'#5A0A1E');
   const a=AW(t,s,'bordeaux',.5);if(a>0){f.strokeStyle=`rgba(242,210,122,${a})`;f.lineWidth=4;f.beginPath();f.moveTo(1560,815);f.lineTo(1560,815-270*1.35);f.stroke();for(let k=0;k<=6;k++){f.beginPath();f.moveTo(1560,815-k*60);f.lineTo(1576,815-k*60);f.stroke()}}},
  chips:[['BOJO = A PARTE REDONDA',430,250,'bojo'],['BORGONHA: + DE 1 LITRO',430,360,'litro'],['PINOT NOIR: DELICADA',430,470,'pinot'],['BORDEAUX: TINTO ENCORPADO',430,580,'encorpados']],face:t=>({brow:.6,mouth:.7})}),
 // 18 a de branco é menor: fica gelado; o cheiro tímido fica perto do nariz
 C3(BAR39,'A TAÇA DE BRANCO É MENOR',[ART(0,(g,t,s)=>{tacaL(g,760,820,1.9,'tulipa',.45,'rgba(236,226,150,.8)','rgba(214,200,110,.9)');fade(g,AW(t,s,'gelado'),()=>{g.fillStyle='rgba(220,236,255,.7)';const R=rng(3);for(let i=0;i<14;i++){g.beginPath();g.ellipse(760+(R()-.5)*120,820-190-R()*200,3,5,0,0,7);g.fill()}})}),
  ART('gelado',(g,t)=>{thermo(g,400,620,240,.3,'');goldText(g,'GELADO',400,330,34,'Cinzel',900)}),ART('nariz',(g,t)=>{noseRadar(g,1300,340,1.4,t);g.strokeStyle='rgba(242,210,122,.8)';g.lineWidth=4;for(const k of [-1,0,1]){g.beginPath();g.moveTo(800+k*20,360);g.quadraticCurveTo(1000,330+k*20,1240,400);g.stroke()}}),
  CH('O CHEIRO FICA PERTO DO NARIZ',1220,720,'pertinho')],.66),
 // 19 precisa de uma pra cada vinho? estudo alemão: muda o cheiro; Jancis Robinson: uma só resolve
 SCX(BAR39,(g,t,s)=>{const j=AW(t,s,'jancis',.6);fade(g,1-j,()=>{g.fillStyle='rgba(20,6,10,.7)';g.fillRect(0,0,W,H);plaque(g,960,180,560,100);goldText(g,'ESTUDO ALEMÃO',960,182,40,'Cinzel',900);
   ['tulipa','bordeaux','borgonha'].forEach((k,i)=>{const x=620+i*340,h=[180,260,330][i]*AW(t,s,'muda',.8);g.fillStyle=GOLD;g.fillRect(x-40,690-h,80,h);(k=='tulipa'?tacaL(g,x,880,.6,k,.3,'#8E1B3A','#3A0612'):taca(g,x,880,.6,k,.3,'#6E0F24'))});chip(g,960,320,'O FORMATO MUDA O CHEIRO',AW(t,s,'muda'))});
  fade(g,j,()=>{g.fillStyle='rgba(20,6,10,.35)';g.fillRect(0,0,W,H);g.fillStyle='#3A2012';g.fillRect(300,800,1300,30);
   npc(g,800,1100,.86,t,{ch:JANCIS,face:1,look:.5+Math.sin(t*5)*.25*AW(t,s,'resolve'),brow:.7,mouth:.9,specs:true,noLegs:true,hands:{l:[-95,205,95],r:[70,120,120]},hold:(x,hl,hr)=>tacaL(x,hr[0],hr[1]+40,1,'tulipa',.3,'#8E1B3A','#3A0612')});
   plaque(g,1440,300,560,110);goldText(g,'JANCIS ROBINSON',1440,284,38,'Cinzel',900);goldText(g,'CRÍTICA INGLESA',1440,330,22,'Cinzel',700);chip(g,1440,480,'UMA SÓ RESOLVE',AW(t,s,'resolve'))})},0),
 // 20 2018: uma taça só, pra tudo (as outras somem)
 SCX(BAR39,(g,t,s)=>{g.fillStyle='rgba(20,6,10,.35)';g.fillRect(0,0,W,H);['flute','coupe','bordeaux','borgonha','tulipa'].forEach((k,i)=>{const a=1-easeIO(seg(t,T[s]+1+i*.5,T[s]+1.5+i*.5));fade(g,a,()=>k=='tulipa'?tacaL(g,1100+i*150,560,.75,k,.3,'#8E1B3A','#3A0612'):taca(g,1100+i*150,560,.75,k,.3,'#6E0F24'))});g.fillStyle='#3A2012';g.fillRect(300,800,1300,30);
  npc(g,760,1100,.86,t,{ch:JANCIS,face:1,look:.3,lookY:-.3,brow:.8,mouth:.95,specs:true,noLegs:true,hands:{l:[-95,205,95],r:[120,-30,140]},hold:(x,hl,hr)=>tacaL(x,hr[0],hr[1]+40,1.1,'tulipa',.3,'#8E1B3A','#3A0612')});
  fade(g,AW(t,s,'dezoito'),()=>{plaque(g,1420,200,560,110);goldText(g,'2018',1420,184,44,'Cinzel',900);goldText(g,'UMA TAÇA SÓ',1420,232,24,'Cinzel',700)});
  chip(g,1250,720,'TINTO',AW(t,s,'tinto'));chip(g,1560,720,'BRANCO',AW(t,s,'branco'));chip(g,1250,830,'ROSÉ',AW(t,s,'rosé'));chip(g,1560,830,'ESPUMANTE',AW(t,s,'espumante'))},0),
 // 21 em casa: vidro fino e liso, bojo largo, boca mais fechada; copo americano também vale
 TK({gest:[[0,'open'],[4,'point'],[7.2,'shrug'],[9.6,'rest']],props:(f,t,s)=>{fade(f,AW(t,s,'americano',.5),()=>copoAmericano(f,1330,815,.9,.6))},
  chips:[['VIDRO FINO E LISO',430,250,'fino'],['BOJO LARGO',430,360,'bojo'],['BOCA UM POUCO FECHADA',430,470,'boca'],['COPO AMERICANO? TUDO BEM!',430,580,'bem']],face:t=>({brow:.7,mouth:.95,laugh:t>wq(21,'americano')+.3&&t<wq(21,'americano')+2.6})}),
];
SC.length=LEN.length;
ddFilm({SC,base:B39,talks:[1,2,17,21],places:{3:.6,5:.6,9:.6,10:.6,12:.6,14:.6,16:.6,17:.6,19:.6},cta:['QUAL É A SUA TAÇA?','taça'],
 table:[BAR39,'DE ONDE VEM CADA TAÇA',[
  [(c,cx,cy)=>tacaL(c,cx,cy+170,1.25,'roemer',.5,'rgba(242,190,60,.9)','rgba(214,150,30,.95)'),'ROEMER VERDE','branco cor de ouro','(anos 1600)'],
  [(c,cx,cy)=>taca(c,cx,cy+160,1.15,'flute',.6),'FLÛTE','a "flauta" inglesa','segura as bolhas'],
  [(c,cx,cy)=>taca(c,cx,cy+110,1.3,'coupe',.55,'#E8C860'),'COUPE','anos 1830: não é','o seio da rainha'],
  [(c,cx,cy)=>tacaL(c,cx,cy+150,1.15,'tulipa',.3,'#8E1B3A','#3A0612'),'INAO / ISO','a taça-ovo dos','profissionais (1970)'],
  [(c,cx,cy)=>taca(c,cx,cy+150,1.15,'borgonha',.3,'#7A1A2A'),'RIEDEL','uma taça por uva','(1958 / 1973)']]],
 tags:[[1,'rainha'],[1,'câmera'],[1,'briga'],[1,'uva'],[2,'haste'],[2,'formato'],[2,'branco'],[3,'holanda'],[3,'roemer'],[3,'verde'],[3,'bolinhas'],[4,'ouro'],[5,'inglaterra'],[5,'flûte'],[6,'mil'],[6,'larga'],[7,'maria'],[7,'lenda!'],[7,'morreu'],[7,'quarenta'],
  [8,'tigela'],[8,'leiteria'],[8,'ninguém'],[9,'auge'],[9,'flûte'],[10,'físico'],[10,'câmera'],[10,'dobro'],[11,'apertada'],[11,'tulipa'],[11,'flor'],[12,'igual'],[12,'alemanha'],[12,'frança'],[13,'turquia'],[13,'inao'],[13,'norma'],[14,'duzentos'],[14,'ovo'],[14,'prender'],
  [15,'bordeaux'],[15,'borgonha'],[15,'austríaco'],[16,'bruxelas'],[16,'lisa'],[16,'setenta'],[17,'bojo'],[17,'litro'],[17,'pinot'],[17,'encorpados'],[18,'gelado'],[18,'nariz'],[19,'estudo'],[19,'muda'],[19,'jancis'],[19,'resolve'],[20,'dezoito'],[20,'tinto'],[20,'branco'],[20,'rosé'],[20,'espumante'],
  [21,'fino'],[21,'bojo'],[21,'boca'],[21,'americano']],
 sfx:[[13,'venceu','corkin']]});
