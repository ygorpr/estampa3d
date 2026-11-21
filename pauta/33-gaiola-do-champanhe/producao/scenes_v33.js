// ---------- cenas do vídeo 33 "Por que o champanhe tem uma gaiolinha de arame?" — bar na adega de giz (thumb B viva); cena i = fala i ----------
// Garrafa SEMPRE pelo gargalo/base (rótulo livre); na segurança a garrafa aponta para o lado vazio (direita, longe do público e dos personagens).
const CAVA=(x,t)=>cavaGiz(x,t,{well:1500,niches:[200,600,1320,1760],lamps:[400,1540]});
const CHAMP='rgba(242,210,122,.8)';
function bucketProps(f,t){iceBucket(f,1165,815,.62);gaiolaBottle(f,1165,770,1,.08,{loop:.3});f.fillStyle='rgba(220,230,240,.5)';for(let i=0;i<6;i++){f.beginPath();f.arc(1110+i*22,690+(i%2)*6,10,0,7);f.fill()}
 glassW(f,690,815,1.05,.7,CHAMP,true)}
const B33={set:CAVA,front:cellarTable,candles:[[520,60]],props:bucketProps,wineCol:CHAMP,wine:.5};
G.tilt={l:[[985,792],60],r:[[1168,580],90]};G.tiltT={l:[[985,792],60],r:[[1166,570],95]};
const TILT=(f,t,s,o={})=>{const k=AW(t,s,o.w||0,.6),rot=.7*k,bx=980,by=800;glassW(f,690,815,1.05,.7,CHAMP,true);iceBucket(f,1500,815,.5);
 gaiolaBottle(f,bx,by,1,rot,{loop:o.loop??.3});return [bx+292*Math.sin(rot),by-292*Math.cos(rot),rot]};
const SCX=(set,fn,dim=0)=>(t,c,s)=>{const x=layer('w',{x:960,y:540,z:1,b:[0,0,0]});set(x,t,s);comp([['w',0]]);if(dim>0){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle=`rgba(20,6,10,${dim})`;ctx.fillRect(0,0,W,H);ctx.restore()}
 const g=layer('g',null);fn(g,t,s);blit(ctx,L.g,0)};
const fo=(t,s,w,d=.5)=>1-AW(t,s,w,d);
// adegueiro atrás da bancada amarrando a rolha (mãos no gargalo); scare 0..1 = susto, mãos na cabeça
function adegueiroScene(g,t,s,o={}){const sc=o.scare||0,pop=o.pop||0;woodTable(g,960,760,900);
 npc(g,900,1060,.78,t,{ch:ADEGUEIRO,face:1,look:lerp(.2,-.2,sc),lookY:lerp(.5,-.4,sc),brow:.5+sc*.9,wide:sc,sad:sc*.4,mouth:lerp(.5,.2,sc),open:sc*.5+speak(t)*0,hat:'cap',capCol:'#6A5A44',noLegs:true,
  hands:{l:[lerp(-40,-70,sc),lerp(140,-140,sc),lerp(120,60,sc)],r:[lerp(60,70,sc),lerp(150,-140,sc),lerp(120,60,sc)]},lo:sc>.5,ro:sc>.5,
  back:(x)=>{}});
 tiedBottle(g,960,760,1,o.tie??1,pop,t);waxPot(g,1260,760,t);if(o.foam>0){g.save();g.globalAlpha*=o.foam;foam(g,960,760-288,1,0);g.restore()}}
const SC=[null,
 // 1 pra que serve · quem inventou · quantas voltas · coleção
 tk(B33,{gest:[[0,'open'],[3,'point'],[6,'open']],chips:[['PRA QUÊ?',430,250,'serve'],['QUEM INVENTOU?',430,360,'quem'],['QUANTAS VOLTAS?',430,470,'quantas'],['A COLEÇÃO',430,580,'coleciona']],face:t=>({brow:.9,mouth:.8})}),
 // 2 muselet = focinheira (a focinheira vira a gaiolinha)
 C3(CAVA,'MUSELET',[ART(0,(g,t,s)=>{const m=AW(t,s,'museler',.9);muzzle(g,560,520,1.6,1-m);fade(g,m,()=>looseMuselet(g,560,600,6.5,0,{loop:.3}))}),
  ART(0,(g,t)=>gaiolaBottle(g,1400,1500,3,0,{loop:.4})),CH('MUSEAU = FOCINHO',560,800,'museau'),CH('MUSELET = FOCINHEIRA',1400,240,'focinheira')],.66),
 // 3 pressão: ~6 bar, quase o triplo do pneu (mecânico com calibrador)
 SCX((x,t)=>CAVA(x,t),(g,t,s)=>{pressureBottle(g,520,850,1.55,t);fade(g,AW(t,s,'pressão'),()=>gauge(g,960,380,120,kf(t,[[0,0],[wq(s,'seis'),0],[wq(s,'seis')+1,6]]),'GARRAFA ~6 BAR'));
  fade(g,AW(t,s,'pneu'),()=>{tire(g,1500,760,120);npc(g,1720,960,.62,t,{ch:MECAN,face:-1,look:-.4,lookY:.3,brow:.6,mouth:.5,hat:'cap',capCol:'#1A3460',hands:{l:[-95,205,95],r:[-110,120,110]},
   hold:(x,hl,hr)=>tireGauge(x,hr[0]-90,hr[1],-1)});gauge(g,1500,340,100,2,'PNEU ~2 BAR')});chip(g,960,140,'QUASE O TRIPLO DO PNEU!',AW(t,s,'triplo'))},.25),
 // 4 sem nada segurando, a rolha escapa sozinha
 C3(CAVA,'SEM NADA SEGURANDO...',[ART(0,(g,t,s)=>{const u=easeIO(seg(t,T[s]+.6,wq(s,'sozinha')+.6));tiedBottle(g,800,900,1.9,0,u*.3,t)}),ART('antes',(g,t)=>goldText(g,'?',1320,520,220,'Cinzel',900)),
  CH('A ROLHA ESCAPA SOZINHA',1320,800,'escapa')],.7),
 // 5 séc. XVIII: madeira, pano engordurado, cera → barbante amarrado à mão
 SCX(oldCellar,(g,t,s)=>{adegueiroScene(g,t,s,{tie:AW(t,s,'barbante',.8)});chip(g,420,180,'TAMPA DE MADEIRA',AW(t,s,'madeira'));chip(g,420,290,'PANO COM GORDURA',AW(t,s,'pano'));chip(g,420,400,'CERA',AW(t,s,'cera'));
  fade(g,AW(t,s,'segurava'),()=>{g.save();g.translate(430,580);g.scale(.6,.6);stamp(g,0,0,'NÃO SEGURAVA!',1);g.restore()});chip(g,1500,240,'ANTES: BARBANTE E CERA',AW(t,s,'barbante'))},.05),
 // 6 o barbante falhava: vaza, a rolha escapa; susto
 SCX(oldCellar,(g,t,s)=>{const p=AW(t,s,'escapava',.7);adegueiroScene(g,t,s,{pop:p,scare:AW(t,s,'escapava',.5),foam:AW(t,s,'vazava',.6)});chip(g,420,200,'O BARBANTE FALHAVA',AW(t,s,'falhava'));chip(g,420,310,'VAZAVA...',AW(t,s,'vazava'));chip(g,1500,240,'ESTOURANDO!',AW(t,s,'estourando'))},.05),
 // 7 1844: Adolphe Jacquesson patenteia a plaquinha de metal sobre a rolha
 SCX((x,t)=>cavaGiz(x,t,{well:1500,niches:[200,700],lamps:[400]}),(g,t,s)=>{woodTable(g,760,780,760);const u=AW(t,s,'plaquinha',1.2);
  npc(g,700,1080,.8,t,{ch:JACQ,face:1,look:.4,lookY:.5,brow:lerp(.5,1.2,AW(t,s,'ideia')),mouth:.8,noLegs:true,hands:{l:[-60,150,120],r:[70,lerp(60,110,u),130]},
   hold:(x,hl,hr)=>plaqueTop(x,hr[0]+14,hr[1]-10,16)});tiedBottle(g,860,780,.95,1,0,t);
  fade(g,AW(t,s,'mil'),()=>{scroll(g,1460,360,460,300,'PATENTE','1844')});chip(g,1460,640,'ADOLPHE JACQUESSON',AW(t,s,'adolphe'));chip(g,1460,750,'PLAQUINHA DE METAL',AW(t,s,'metal'))},0),
 // 8 a origem: adegas cavadas no giz; folhas de lata refletindo a luz dos poços
 SCX((x,t)=>cavaGiz(x,t,{well:1000,niches:[200,1760],lamps:[]}),(g,t,s)=>{const sh=AW(t,s,'refletiam',.8);fade(g,AW(t,s,'lata'),()=>{for(const [x,y] of [[1230,300],[1330,420],[1210,520]])tinSheet(g,x,y,90,70,sh*(.7+.3*Math.sin(t*3+x)))});
  npc(g,620,1020,.7,t,{ch:JACQ,face:1,look:lerp(.5,.2,AW(t,s,'refletiam')),lookY:-.3,brow:1.1,mouth:.7,noLegs:true,hands:{l:[-95,205,95],r:[100,40,120]},ro:true});
  chip(g,420,160,'ROCHA DE GIZ',AW(t,s,'giz'));chip(g,1560,700,'FOLHAS DE LATA',AW(t,s,'lata'));chip(g,1000,110,'POÇO DE LUZ NO TETO',AW(t,s,'poços'))},0),
 // 9 raio-X: o aperto fica no metal; barbante → arame; uma peça só
 C3(CAVA,'O APERTO FICA NO METAL',[ART(0,(g,t,s)=>xrayCork(g,620,430,1.35,AW(t,s,'arame',.6),t)),CH('PROTEGE A CORTIÇA',620,820,'protege'),
  ART('arame',(g,t)=>{goldText(g,'BARBANTE',1320,330,40,'Cinzel',900);arrow(g,1320,370,1320,450,GOLD2,6);goldText(g,'ARAME',1320,500,40,'Cinzel',900)}),ART('peça',(g,t)=>looseMuselet(g,1320,700,3.2,0,{loop:.3})),CH('UMA PEÇA SÓ',1320,830,'peça')],.7),
 // 10 as voltas: contador 1 → 6
 C3(CAVA,'QUANTAS MEIAS-VOLTAS?',[ART(0,(g,t,s)=>{const W_=['uma','duas','três','quatro','cinco','seis'];let n=0;for(const w of W_)if(t>=wq(s,w)-.05)n++;const lp=n*Math.PI+easeIO(seg(t,wq(s,W_[Math.max(0,n-1)])-.1,wq(s,W_[Math.max(0,n-1)])+.3))*0;
   gaiolaBottle(g,640,1480,3,0,{loop:.4+Math.sin(n*Math.PI/2)*.9});turnArrow(g,640,1480-292*3+40,110,30,1);if(n>0){goldText(g,String(n),1340,480,260,'Cinzel',900)}}),CH('6 MEIAS-VOLTAS',1340,760,'quase')],.66),
 // 11 seis voltas = seis bar? "dizem"; ninguém prova; virou costume
 tk(B33,{gest:[[0,'open'],[4.6,'shrug'],[7.4,'rest']],chips:[['6 VOLTAS = 6 BAR?',430,280,'dizem'],['VIROU COSTUME',430,520,'costume']],face:t=>({brow:.9,mouth:.6}),
  over:(g,t,s)=>{const a=AW(t,s,'ninguém',.45);if(a>0){g.save();g.translate(430,400);g.scale(.45,.45);stamp(g,0,0,'DIZEM...',a);g.restore()}}}),
 // 12 cada produtor estampa o seu desenho (plaquinhas girando como moedas)
 C3(CAVA,'CADA UMA COM SEU DESENHO',[ART(0,(g,t,s)=>{for(let i=0;i<10;i++){const a=i==0||i==6?AW(t,s,.3,.5):AW(t,s,['estampa','brasão','data','arte','edição'][i%5],.5);if(a<=0)continue;const cx=330+(i%5)*315,cy=i<5?420:700,k=Math.cos(t*2.2+i*.7);
   g.save();g.globalAlpha*=a;g.translate(cx,cy);g.scale(Math.max(.08,Math.abs(k)),1);plaqueTop(g,0,0,95,PLC[i],PLC[(i+4)%10]);if(i%3==0)goldText(g,String(1990+i*3),0,62,22,'Cinzel',900);g.restore()}}),
  CH('BRASÃO · DATA · ARTE',960,860-30,'arte')],.68),
 // 13 placomusofilia: colecionador
 SCX((x,t)=>{CAVA(x,t)},(g,t,s)=>{velvetBoard(g,1260,440,760,470,1);woodTable(g,1000,780,1300);npc(g,560,1080,.82,t,{ch:COLEC,face:1,look:.5,lookY:.2,brow:.7,mouth:.9,specs:true,noLegs:true,hands:{l:[-60,170,110],r:[90,90,130]},
   hold:(x,hl,hr)=>{magnifier(x,hr[0]+30,hr[1]-40,.7)}});
  fade(g,AW(t,s,'placomusofilia'),()=>{plaque(g,1260,780-60,560,90);goldText(g,'PLACOMUSOFILIA',1260,722,40,'Cinzel',900)});
  chip(g,1060,120,'PLAQUE = PLAQUINHA',AW(t,s,'plaque,'));chip(g,1560,120,'FILIA = AMOR',AW(t,s,'amor'))},.2),
 // 14 clubes, encontros de troca, catálogo com preço
 SCX((x,t)=>{CAVA(x,t)},(g,t,s)=>{velvetBoard(g,1260,440,760,470,1);woodTable(g,1000,780,1300);
  fade(g,AW(t,s,'catálogo'),()=>{g.save();g.translate(1000,760);g.rotate(-.05);g.fillStyle='#F3E6C8';g.fillRect(-180,-50,360,80);g.strokeStyle='#5E1428';g.lineWidth=3;g.beginPath();g.moveTo(0,-50);g.lineTo(0,30);g.stroke();
   g.font='900 20px Cinzel';g.textAlign='center';g.fillStyle='#5E1428';g.fillText('CATÁLOGO',-90,-14);g.fillText('€ 2 · € 15',90,-14);g.restore()});
  npc(g,560,1080,.82,t,{ch:COLEC,face:1,look:.6,lookY:-.1,brow:.8,mouth:.95,specs:true,noLegs:true,hands:{l:[-60,170,110],r:[120,-20,130]},
   hold:(x,hl,hr)=>{x.strokeStyle='#C9CED4';x.lineWidth=5;x.beginPath();x.moveTo(hr[0],hr[1]);x.lineTo(hr[0]+80,hr[1]-40);x.stroke();plaqueTop(x,hr[0]+92,hr[1]-46,20,'#2A4A8A','#D4A24C')}});
  fade(g,AW(t,s,'frança'),()=>flag(g,'fr',300,150,140));chip(g,960,140,'CLUBES DE COLECIONADOR',AW(t,s,'clube'));chip(g,960,250,'ENCONTRO DE TROCA',AW(t,s,'troca'));chip(g,1560,760,'ÁLBUM DE FIGURINHA!',AW(t,s,'figurinha'))},.2),
 // 15 Brasil: Garibaldi, serra gaúcha, 1913
 SCX(serraRS,(g,t,s)=>{fade(g,AW(t,s,'brasil'),()=>flag(g,'br',200,140,150));fade(g,AW(t,s,'plaquinha'),()=>{gaiolaBottle(g,620,900,1.6,0,{loop:.3})});
  fade(g,AW(t,s,'garibaldi'),()=>{plaque(g,1200,200,640,120);goldText(g,'GARIBALDI (RS)',1200,180,46,'Cinzel',900);goldText(g,'SERRA GAÚCHA',1200,230,24,'Cinzel',700)});
  chip(g,1200,360,'1º ESPUMANTE DO PAÍS: 1913',AW(t,s,'mil'));chip(g,1200,800,'GUARDA OU JOGA FORA?',AW(t,s,'guarda'))},0),
 // 16 segurança: a rolha sai a ~80 km/h; cuidado com os olhos
 C3(CAVA,'ABRIR COM SEGURANÇA',[ART(0,(g,t,s)=>{const u=easeIO(seg(t,wq(s,'oitenta')-.4,wq(s,'oitenta')+.8));gaiolaBottle(g,420,880,1.5,.7,{loop:.3});if(u>0){flyTop(g,lerp(620,1100,u),lerp(560,300,u),1.1,u*8,u)}}),
  ART('oitenta',(g,t,s)=>{speedo(g,1350,560,170,.6,'');goldText(g,'~80 KM/H',1350,610,56,'Cinzel',900)}),ART('médicos',(g,t,s,a)=>eyeX(g,1350,280,.9,a)),CH('PODE MACHUCAR FEIO!',1350,800,'machucar')],.68),
 // 17 bem gelada, inclinada, longe de todos; afrouxe as 6 meias-voltas; polegar na rolha
 tk(Object.assign({},B33,{props:(f,t,s)=>TILT(f,t,s,{w:'inclinada'})}),{gest:[[0,'rest'],[2.2,'tilt'],[99,'tilt']],chips:[['BEM GELADA',430,230,'gelada'],['INCLINADA E PRA LONGE',430,340,'longe'],['AFROUXE AS 6 VOLTAS',430,450,'afrouxe'],['1. POLEGAR NA ROLHA',430,560,'polegar']],face:t=>({brow:.6,mouth:.6,look:.3})}),
 // 18 pano por cima; gire a garrafa, não a rolha; sai com um suspiro
 tk(Object.assign({},B33,{props:(f,t,s)=>{const [tx,ty,r]=TILT(f,t,s,{w:0});const a=AW(t,s,'pano',.5);if(a>0)fade(f,a,()=>napkin(f,tx,ty-6,1,t));fade(f,AW(t,s,'gire'),()=>turnArrow(f,985,770,60,18,1));
   const w=AW(t,s,'suspiro',.8);if(w>0){f.strokeStyle=`rgba(243,230,200,${.6*w})`;f.lineWidth=5;f.beginPath();f.moveTo(tx+20,ty-30);f.bezierCurveTo(tx+60,ty-80,tx+20,ty-120,tx+70,ty-180);f.stroke()}}}),
  {gest:[[0,'tiltT']],chips:[['2. GIRE A GARRAFA',430,300,'gire'],['SAI COM UM SUSPIRO',430,420,'suspiro']],face:t=>({brow:.6,mouth:.7,look:.3})}),
 // 19 estouro é coisa de pódio; na mesa, chique é o suspiro; vídeo do sabre
 tk(B33,{gest:[[0,'open'],[3.2,'rest'],[5.6,'point'],[8,'rest']],chips:[['CHIQUE É O SUSPIRO',430,450,'chique']],face:t=>({brow:.7,mouth:.9}),
  over:(g,t,s)=>{const a=AW(t,s,'pódio',.45);if(a>0){g.save();g.translate(560,260);g.scale(.42,.42);stamp(g,0,0,'MITO: ESTOURO É CHIQUE',a);g.restore()}sabreThumb(g,1560,300,420,AW(t,s,'espada',.5))}}),
];
SC.length=LEN.length;
ddFilm({SC,base:B33,talks:[1,11,17,18,19],places:{3:.6,5:.6,7:.6,8:.6,13:.6,15:.6,16:.6},cta:['QUE TEMA VOCÊ QUER?','curiosidade'],
 table:[CAVA,'A GAIOLINHA DO CHAMPANHE',[
  [(c,cx,cy)=>looseMuselet(c,cx,cy+40,3.4,0,{loop:.3}),'MUSELET','a "focinheira"','da rolha'],
  [(c,cx,cy,t)=>tiedBottle(c,cx,cy+190,.75,1,0,t),'ANTES','barbante','e cera'],
  [(c,cx,cy)=>plaqueTop(c,cx,cy,80),'1844','a plaquinha de','A. Jacquesson'],
  [(c,cx,cy)=>sixBadge(c,cx,cy,80),'6 MEIAS-VOLTAS','e os "6 bar"?','só dizem'],
  [(c,cx,cy)=>{gaiolaBottle(c,cx-40,cy+150,.9,.7,{loop:.3})},'SEGURANÇA','polegar na rolha,','gire a garrafa']]],
 tags:[[1,'serve'],[1,'quem'],[1,'quantas'],[1,'coleciona'],[2,'museau'],[2,'rolha'],[3,'pressão'],[3,'triplo'],[3,'pneu'],[4,'escapa'],[5,'madeira'],[5,'pano'],[5,'cera'],[5,'barbante'],[6,'falhava'],[6,'vazava'],[6,'estourando'],
  [7,'mil'],[7,'adolphe'],[7,'metal'],[8,'giz'],[8,'lata'],[8,'poços'],[9,'protege'],[9,'arame'],[9,'peça'],[10,'uma'],[10,'duas'],[10,'três'],[10,'quatro'],[10,'cinco'],[10,'seis'],[11,'dizem'],[11,'costume'],[12,'estampa'],[12,'brasão'],[12,'data'],[12,'arte'],[12,'edição'],
  [13,'placomusofilia'],[13,'amor'],[14,'clube'],[14,'troca'],[14,'figurinha'],[15,'garibaldi'],[15,'mil'],[15,'guarda'],[16,'médicos'],[16,'oitenta'],[16,'machucar'],[17,'gelada'],[17,'longe'],[17,'afrouxe'],[17,'polegar'],[18,'gire'],[18,'suspiro'],[19,'chique'],[19,'espada']],
 sfx:[[6,'escapava','corkin'],[16,'oitenta','corkin']]});
