// ---------- cenas do vídeo 16 "As lágrimas do vinho" — abre no BAR (thumb A viva), explica no LABORATÓRIO, volta ao BAR; cena i = fala i ----------
function watermark(){if(!LOGO.complete)return;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.075;ctx.filter='blur(.6px)';ctx.drawImage(LOGO,960-230,720-221,460,442);ctx.restore()}
const LB={set:lab,front:labFront},BR={set:barWall,front:barCounterL};
const ap=(t,i,w,d=.35)=>ease(seg(t,wt(i,w)-.1,wt(i,w)-.1+d));
function card(t,s,set,title,dim=.72){veil(null,t,set,dim);const g=layer('g',null);goldText(g,title,960,165,Math.min(62,Math.floor(1500/title.length)));ornament(g,960,232,560);return g}
const done=(g,t,s)=>blit(ctx,L.g,0,seg(t,T[s],T[s]+.4));
const fade=(g,a,fn)=>{if(a<=0)return;g.save();g.globalAlpha=a;fn();g.restore()};
const C3=(t,s,set,title,fn,dim)=>{const g=card(t,s,set,title,dim);fn(g);done(g,t,s)};
const lbl=(g,txt,x0,y0,sz=34,a=1)=>fade(g,a,()=>goldText(g,txt,x0,y0,sz,'Cinzel',900));
const stampS=(g,cx,cy,txt,a,k=.55)=>{if(a<=0)return;g.save();g.translate(cx,cy);g.scale(k,k);stamp(g,0,0,txt,a);g.restore()};
const plq=(g,cx,cy,w,h,l1,l2,a,s1=44,s2=28)=>fade(g,a,()=>{plaque(g,cx,cy,w,h);goldText(g,l1,cx,l2?cy-22:cy,s1);if(l2)goldText(g,l2,cx,cy+32,s2,'Cinzel',700)});
const over=(fn)=>{const g=layer('g',null);fn(g);blit(ctx,L.g,0)};
const candleSet=(x,t)=>cellarWall(x,t);
const SC=[null,
 // 1 bar: não é qualidade, é física (e passa pela Bíblia)
 (t,c,s)=>{talkScene(t,c,s,Object.assign({bottles:[['red',1100]],gest:[[0,'open'],[2.2,'point'],[5.6,'open'],[7.6,'rest']],props:(f,t)=>{tearGlassT(f,1330,806,1.1,.3,{tt:t})},
  chips:[['FÍSICA PURA',430,330,wt(1,'física')],['ATÉ NA BÍBLIA',1500,330,wt(1,'bíblia')]],face:t=>({brow:.6,mouth:.6})},BR));
  over(g=>stampS(g,380,520,'NÃO É QUALIDADE',ap(t,1,'qualidade',.45),.5))},
 // 2 lágrimas, pernas, legs, larmes
 (t,c,s)=>C3(t,s,barWall,'LÁGRIMAS OU PERNAS?',g=>{tearGlassT(g,960,840,2.5,.3,{tt:t});
  const P=(cx,cy,fl,a,b,w)=>fade(g,ap(t,2,w,.4),()=>{plaque(g,cx,cy,540,150);flag(g,fl,cx-170,cy,110);goldText(g,a,cx+60,b?cy-20:cy,44);if(b)goldText(g,b,cx+60,cy+30,26,'Cinzel',700)});
  P(440,400,'br','LÁGRIMAS','NO BRASIL','lágrimas');P(440,620,'br','PERNAS','NO BRASIL','pernas');P(1480,400,'uk','LEGS','= PERNAS','legs');P(1480,620,'fr','LARMES','= LÁGRIMAS','larmes')},.62),
 // 3 Alemanha: janelas de igreja (vitrais)
 (t,c,s)=>C3(t,s,barWall,'KIRCHENFENSTER',g=>{tearGlassT(g,620,840,2.4,.3,{tt:t,ridge:.9,film:.78});
  fade(g,ap(t,3,'alemanha',.4),()=>flag(g,'de',960,330,120));chip(g,960,440,'= JANELAS DE IGREJA',ap(t,3,'janelas'));
  fade(g,ap(t,3,'arquinhos',.5),()=>arrow(g,760,560,1120,600,GOLD2,6));
  fade(g,ap(t,3,'vitrais',.6),()=>stainedGlass(g,1380,840,300,420,ap(t,3,'vitrais',1),t))},.62),
 // 4 laboratório: por que o vinho chora? tensão superficial
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['red',1100]],gest:[[0,'thinking'],[2,'open'],[4.6,'point']],props:(f,t)=>{tearGlassT(f,1330,806,1.1,.3,{tt:t});beaker(f,520,806,90,110,'rgba(150,200,235,.7)',.55)},
  chips:[['POR QUE O VINHO CHORA?',430,300,wt(4,'chora')],['TENSÃO SUPERFICIAL',430,420,wt(4,'tensão')]],face:t=>({brow:.8,mouth:.5})},LB)),
 // 5 a pele da água: gota redonda e inseto sobre a água
 (t,c,s)=>C3(t,s,lab,'UMA PELE FININHA',g=>{chip(g,960,320,'TENSÃO SUPERFICIAL',ap(t,5,'pele'));
  fade(g,ap(t,5,'gota',.5),()=>{g.fillStyle='#5A4A40';g.fillRect(330,700,460,16);roundDrop(g,560,700,110);lbl(g,'GOTA REDONDA',560,790,36)});
  fade(g,ap(t,5,'inseto',.5),()=>{waterStrider(g,1360,640,1.25,t);lbl(g,'INSETO SOBRE A ÁGUA',1360,420,34)})},.62),
 // 6 cabo de guerra: água puxa forte x álcool puxa fraco
 (t,c,s)=>C3(t,s,lab,'O CABO DE GUERRA',g=>{chalkboard(g,960,560,1320,500);const u=easeIO(seg(t,wt(6,'quanto'),wt(6,'puxão')+.3));
  fade(g,ap(t,6,'água',.4),()=>{chalk(g,'ÁGUA',560,410,64);chalk(g,'PELE FORTE: PUXA FORTE',560,480,30);arrow(g,560,560,360,560,'rgba(240,236,224,.95)',16)});
  fade(g,ap(t,6,'álcool',.4),()=>{chalk(g,'ÁLCOOL',1360,410,64);chalk(g,'PELE FRACA: PUXA FRACO',1360,480,30);arrow(g,1360,560,1480,560,'rgba(240,236,224,.95)',5)});
  fade(g,ap(t,6,'truque',.4),()=>tugRope(g,960,660,u,t));fade(g,ap(t,6,'quanto',.4),()=>chalk(g,'MAIS ÁGUA = PUXÃO MAIS FORTE',960,750,34))},.62),
 // 7 a película e a evaporação do álcool
 (t,c,s)=>C3(t,s,lab,'A PELÍCULA DE VINHO',g=>{tearGlassT(g,900,860,3,.3,{tt:t,drops:0,film:.8,ridge:.25});vapor(g,900,860-178*3+178*1.6,1.6,t,ap(t,7,'evapora',.8));
  fade(g,ap(t,7,'película',.4),()=>arrow(g,1260,420,1010,470,GOLD2,6));chip(g,1490,400,'PELÍCULA FININHA',ap(t,7,'película'));
  chip(g,1490,560,'O ÁLCOOL EVAPORA',ap(t,7,'evapora'));chip(g,1490,700,'MAIS RÁPIDO!',ap(t,7,'rápido'))},.62),
 // 8 em cima sobra água, puxa mais: o vinho sobe contra a gravidade
 (t,c,s)=>C3(t,s,lab,'CONTRA A GRAVIDADE',g=>{tearGlassT(g,960,860,3,.3,{tt:t,drops:0,film:.82,ridge:.45});climbArrows(g,960,860,3,t,ap(t,8,'puxado',.6));
  chip(g,470,400,'EM CIMA: MAIS ÁGUA',ap(t,8,'sobra'));chip(g,470,540,'PUXA MAIS FORTE',ap(t,8,'puxa'));
  fade(g,ap(t,8,'acima',.5),()=>arrow(g,1320,780,1320,400,GOLD2,10));chip(g,1520,300,'SOBE!',ap(t,8,'gravidade'))},.62),
 // 9 cordão no alto, pesa, cai: as lágrimas
 (t,c,s)=>C3(t,s,lab,'NASCEM AS LÁGRIMAS',g=>{tearGlassT(g,960,860,3,.3,{tt:t,film:.82,ridge:ap(t,9,'cordão',1.4),drops:ap(t,9,'cai',.4)});
  chip(g,470,400,'O CORDÃO',ap(t,9,'cordão'));chip(g,470,540,'PESADO DEMAIS',ap(t,9,'pesado'));chip(g,1450,400,'CAI EM GOTAS',ap(t,9,'cai'));
  plq(g,1450,620,460,130,'AS LÁGRIMAS!',null,ap(t,9,'pronto',.4),46)},.62),
 // 10 efeito Marangoni (1865) — personagem Carlo Marangoni na lousa
 (t,c,s)=>C3(t,s,lab,'O NOME DO PUXÃO',g=>{chalkboard(g,1220,500,880,420);
  fade(g,ap(t,10,'carlo',.5),()=>{chalk(g,'CARLO MARANGONI',1220,360,44);chalk(g,'ITALIANO · UNIVERSIDADE',1220,420,28)});
  fade(g,ap(t,10,'estudou',.5),()=>{g.strokeStyle='rgba(240,236,224,.9)';g.lineWidth=5;g.beginPath();g.moveTo(1070,640);g.quadraticCurveTo(1040,560,1050,480);g.lineTo(1150,480);g.quadraticCurveTo(1160,560,1130,640);g.closePath();g.stroke();arrow(g,1200,620,1200,500,'rgba(240,236,224,.95)',5);chalk(g,'ÁGUA PUXA',1330,560,30)});
  marangoni(g,560,880,.74,t,{point:ease(seg(t,T[s]+.6,T[s]+1.2)),mouth:.6});
  plq(g,1220,800,720,110,'EFEITO MARANGONI · 1865',null,ap(t,10,'efeito',.45),42)},.62),
 // 11 James Thomson (1855), irmão de Lorde Kelvin — personagem com a taça
 (t,c,s)=>C3(t,s,lab,'DEZ ANOS ANTES...',g=>{thomson(g,1380,880,.74,t,{glassUp:ease(seg(t,T[s]+.4,T[s]+1.1)),lapel:true});
  plq(g,620,420,700,160,'JAMES THOMSON','ENGENHEIRO · 1855',ap(t,11,'james',.45),52);
  chip(g,620,620,'IRMÃO DE LORDE KELVIN',ap(t,11,'irmão'));fade(g,ap(t,11,'kelvin',.4),()=>serif('o famoso físico',620,690,34))},.62),
 // 12 a Bíblia: Provérbios 23:31 à luz de vela
 (t,c,s)=>C3(t,s,candleSet,'E A BÍBLIA?',g=>{candle(g,300,860,150,t);candle(g,1620,860,150,t);
  fade(g,ap(t,12,'provérbios',.5),()=>{scroll(g,960,560,900,440,'','');goldText(g,'PROVÉRBIOS 23:31',960,410,52)});
  const q=(txt,y,w)=>fade(g,ap(t,12,w,.5),()=>{g.save();g.font='italic 600 46px Cormorant';g.textAlign='center';g.textBaseline='middle';g.fillStyle='#5E1428';g.fillText(txt,960,y);g.restore()});
  q('“Não olhes para o vinho',500,'olhes');q('quando resplandece no copo...',570,'resplandece');q('e se escoa suavemente.”',640,'escoa')},.62),
 // 13 Charles Boys: o versículo falaria das lágrimas (interpretação)
 (t,c,s)=>C3(t,s,candleSet,'UMA INTERPRETAÇÃO',g=>{candle(g,240,860,130,t);oldBook(g,560,520,1);fade(g,ap(t,13,'chora',.5),()=>tearGlassT(g,900,860,1.7,.3,{tt:t}));
  plq(g,1400,380,600,150,'CHARLES BOYS','FÍSICO INGLÊS',ap(t,13,'charles',.45),48);chip(g,1400,560,'= AS LÁGRIMAS?',ap(t,13,'lágrimas'));
  stampS(g,1400,700,'NINGUÉM PROVA',ap(t,13,'ninguém',.45),.5);chip(g,560,760,'CHORA MUITO = VINHO FORTE',ap(t,13,'forte'))},.62),
 // 14 laboratório: UCLA 2020, onda de choque
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['red',1100]],gest:[[0,'open'],[2.4,'point'],[7,'open']],props:(f,t)=>{tearGlassT(f,1330,806,1.1,.3,{tt:t});tubeRack(f,520,806,[ANT.wine,ANT.red,ANT.young])},
  chips:[['UCLA · 2020',430,300,wt(14,'dois')],['ONDA DE CHOQUE',430,420,wt(14,'onda')]],face:t=>({brow:.9,mouth:.65})},LB)),
 // 15 a lombada que sobe e quebra em lágrimas
 (t,c,s)=>C3(t,s,lab,'UMA ONDA NO VIDRO',g=>{const u=easeIO(seg(t,wt(15,'sobe'),wt(15,'instável')));shockWall(g,640,820,520,u,t,ease(seg(t,wt(15,'quebra')-.2,wt(15,'quebra')+.9)));lbl(g,'VIDRO',520,330,30);
  chip(g,1430,380,'A LOMBADA SOBE',ap(t,15,'lombada'));chip(g,1430,520,'ATRÁS: CAMADA FINA',ap(t,15,'fina'));chip(g,1430,660,'QUEBRA EM LÁGRIMAS',ap(t,15,'quebra'))},.62),
 // 16 o mito: não é qualidade, nem glicerina
 (t,c,s)=>C3(t,s,lab,'AGORA, O MITO',g=>{plq(g,600,500,560,170,'QUALIDADE',null,ap(t,16,'lágrima',.4),56);stampS(g,760,400,'MITO',ap(t,16,'bom',.45),.62);
  plq(g,1320,500,560,170,'GLICERINA',null,ap(t,16,'glicerina',.4),56);stampS(g,1480,400,'MITO',ap(t,16,'substância',.45),.62);
  fade(g,ap(t,16,'substância',.5),()=>serif('uma substância meio adocicada do vinho',1320,640,32));fade(g,ap(t,16,'bom',.5),()=>serif('lágrima não é sinal de vinho bom',600,640,32))},.62),
 // 17 laboratório: mais álcool, mais lágrimas; vinho doce escorre devagar
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['red',1100]],gest:[[0,'point'],[3.6,'open'],[5.8,'thinking'],[8.8,'rest']],props:(f,t)=>{const a1=ap(t,17,'álcool',.5),a2=ap(t,17,'doce',.5);
   tearGlassT(f,1290,806,1.1,.3,{tt:t,n:4,seed:3,film:.5,drops:.8});tearGlassT(f,1450,806,1.1,.3,{tt:t,n:8,seed:7,film:.82,ridge:.9});
   tearGlassT(f,520,806,1.1,.3,{tt:t,col:'#B87A1E',filmCol:'rgba(190,130,40,.32)',slow:true,n:5,seed:11,drops:a2});
   fade(f,a1,()=>{goldText(f,'12%',1290,570,34,'Cinzel',900);goldText(f,'15%',1450,570,34,'Cinzel',900)});fade(f,a2,()=>goldText(f,'DOCE',520,570,34,'Cinzel',900))},
  chips:[['+ ÁLCOOL = + LÁGRIMAS',430,300,wt(17,'mais')],['AÇÚCAR = DEVAGAR',430,420,wt(17,'açúcar')]],face:t=>({brow:.6,mouth:.55})},LB)),
 // 18 temperatura e umidade mudam as lágrimas
 (t,c,s)=>C3(t,s,lab,'O CLIMA DA SALA',g=>{const u=lerp(.35,.75,easeIO(seg(t,wt(18,'temperatura'),wt(18,'temperatura')+2)));
  fade(g,ap(t,18,'temperatura',.5),()=>{thermoS(g,480,700,330,u);lbl(g,'TEMPERATURA',480,800,36)});
  fade(g,ap(t,18,'umidade',.5),()=>{humidity(g,1440,520,1.4,t);lbl(g,'UMIDADE DO AR',1440,800,36)});
  tearGlassT(g,960,820,2.4,.3,{tt:t*(1+.6*ap(t,18,'velocidade',1))});chip(g,960,320,'FALAM DA SALA!',ap(t,18,'sala'))},.62),
 // 19 prova em casa: tampe a taça (mão) — as lágrimas param; destampe e recomeçam
 (t,c,s)=>C3(t,s,lab,'TIRE A PROVA EM CASA',g=>{const c0=wt(19,'tampe'),c1=wt(19,'destampe'),cv=ap(t,19,'tampe',.6)*(1-ap(t,19,'destampe',.6));
  const tt=t<c0?t:t<c1?c0+.9*(1-Math.exp(-(t-c0)*1.2)):c0+.9+(t-c1),dr=1-.9*ease(seg(t,wt(19,'param')-.6,wt(19,'param')+.2))+.9*ease(seg(t,c1,c1+.8));
  tearGlassT(g,1000,880,2.6,.3,{tt,drops:dr,ridge:.3+.5*dr});coverHand(g,1000,880,2.6,cv);
  chip(g,470,400,'1. TAMPE A TAÇA',ap(t,19,'tampe'));chip(g,470,540,'2. AS LÁGRIMAS PARAM',ap(t,19,'param'));chip(g,470,680,'3. DESTAMPE',ap(t,19,'destampe'));
  chip(g,1520,560,'OU PLÁSTICO FILME',ap(t,19,'plástico')*(1-ap(t,19,'sem',.4)))},.62),
 // 20 bar: vale para toda bebida de álcool com água
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[],gest:[[0,'open'],[4,'point'],[8.2,'shrug']],props:(f,t)=>{fade(f,ap(t,20,'porto',.4),()=>portGlass(f,1230,806,1.05));fade(f,ap(t,20,'uísque',.4),()=>tumbler(f,1340,806,.95));fade(f,ap(t,20,'cachaça',.4),()=>shotGlass(f,1440,806,1.05))},
  chips:[['VINHO DO PORTO',430,300,wt(20,'porto')],['UÍSQUE',430,420,wt(20,'uísque')],['CACHAÇA',430,540,wt(20,'cachaça')],['A MESMA FÍSICA!',1500,330,wt(20,'mesma')]],face:t=>({brow:.5,mouth:.65})},BR)),
 (t,c,s)=>finalTable(t,s),
 (t,c,s)=>ctaScene(t,c,s),
 null];
function finalTable(t,s){veil(null,t,barWall,.8);const g=layer('g',null);goldText(g,'AS LÁGRIMAS DO VINHO',960,130,66);ornament(g,960,205,600);blit(ctx,L.g,0,seg(t,T[s],T[s]+.5));
 const C=[['fis','FÍSICA','efeito|Marangoni','física'],['mito','MITO','nem qualidade,|nem glicerina','qualidade'],['alc','ÁLCOOL','mais álcool,|mais lágrimas','álcool'],['sala','SALA','calor e umidade|mudam tudo','clima'],['teste','TESTE','tampe a taça|e elas param','explicou']];
 C.forEach(([ic,n,d,w],i)=>{const cx=220+i*370,ta=wt(21,w)-.15,c=layer('c'+i,null);plaque(c,cx,600,330,560);
  if(ic=='fis')tearGlassT(c,cx,700,1.35,.3,{tt:t});
  else if(ic=='mito'){glassW(c,cx,700,1.2,.3,'#6E1630');stampS(c,cx,600,'MITO',1,.42)}
  else if(ic=='alc'){tearGlassT(c,cx-55,700,1.0,.3,{tt:t,n:4,seed:3,film:.5});tearGlassT(c,cx+55,700,1.0,.3,{tt:t,n:8,seed:7,film:.82});goldText(c,'12%',cx-55,500,26,'Cinzel',900);goldText(c,'15%',cx+55,500,26,'Cinzel',900)}
  else if(ic=='sala'){thermoS(c,cx-60,680,200,.6);humidity(c,cx+60,560,.7,t)}
  else{c.save();c.beginPath();c.roundRect(cx-160,325,320,550,24);c.clip();tearGlassT(c,cx-40,700,1.25,.3,{tt:0,drops:0});coverHand(c,cx-40,700,1.25,1);c.restore()}
  goldText(c,n,cx,768,34,'Cinzel',700);blit(ctx,L['c'+i],0,seg(t,ta,ta+.45));const a=seg(t,ta,ta+.45),[d1,d2]=d.split('|');
  serif(d1,cx,815,28,`rgba(243,230,200,${a})`);serif(d2,cx,850,28,`rgba(243,230,200,${a})`)})}
function ctaScene(t,cam,s){talkScene(t,cam,s,Object.assign({gest:[[0,'wave'],[2.2,'open'],[4.2,'rest']],bottles:[['red',1100]],props:(f,t)=>{tearGlassT(f,1330,806,1.1,.3,{tt:t})},face:t=>({mouth:.7,brow:.5})},BR));
 const a=easeIO(seg(t,T[s]+.4,T[s]+1)),g=layer('g',null);g.save();g.globalAlpha=a;g.fillStyle='#B0122E';g.beginPath();g.roundRect(120,120,520,110,55);g.fill();g.strokeStyle=GOLD2;g.lineWidth=5;g.stroke();g.restore();
 g.save();g.globalAlpha=a;goldText(g,'INSCREVA-SE',380,176,52,'Cinzel',900);g.restore();chip(g,380,300,'QUAL MITO?',ap(t,22,'mito'));blit(ctx,L.g,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=a;ctx.drawImage(LOGO,1640,40,230,220);ctx.restore()}}
const TALKS=[1,4,14,17,20,22],NS=LEN.length,LOGO_S=NS-1,TABLE_S=NS-3,CTA_S=NS-2;
FILM={dur:T[T.length-1],cuts:T.map(v=>Math.round(v*30)),fadeIn:0,fadeOut:.8,warm(){return .4},
 cam(s,u,t){if(TALKS.includes(s)){const k=TALKS.indexOf(s)%3;return [{x:lerp(950,975,u),y:lerp(560,545,u),z:lerp(1.18,1.28,easeIO(u)),b:[6,0,0]},{x:lerp(930,915,u),y:lerp(545,520,u),z:lerp(1.32,1.48,easeIO(u)),b:[8,0,0]},{x:lerp(1000,985,u),y:550,z:lerp(1.22,1.32,u),b:[7,0,0]}][k]}return {x:960,y:540,z:1,b:[10,0,0]}},
 draw(t,cam,s,u){if(s==0){thumbFrame(t);return}if(s==LOGO_S){photo(IMG.logo,t,T[LOGO_S],T[LOGO_S+1],1,1.05);return}SC[s](t,cam,s)},
 plants(){return {}}};
(function(){const DISS={1:.6},xf=mk(),xz=mk(),CARD=[2,3,5,6,7,8,9,10,11,12,13,15,16,18,19,21],draw0=FILM.draw,cam0=FILM.cam;for(let s=2;s<LOGO_S;s++)DISS[s]=.45;DISS[4]=.6;DISS[20]=.6;DISS[12]=.6;DISS[14]=.6;
 FILM.draw=(t,c,s,u)=>{const d=DISS[s],a=d?1-easeIO(seg(t,T[s],T[s]+d)):0;if(a>0){draw0(t,cam0(s-1,1,t),s-1,1);const x=xf.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0)}
  draw0(t,c,s,u);if(CARD.includes(s)){const k=1+.035*easeIO(u),x=xz.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0);ctx.save();ctx.setTransform(k,0,0,k,W/2*(1-k),H/2*(1-k));ctx.drawImage(xz,0,0);ctx.restore()}
  if(a>0)blit(ctx,xf,0,a);if(s!=0&&s!=CTA_S&&s!=LOGO_S)watermark();if(s!=TABLE_S&&s!=LOGO_S)karaoke(t)}})();
// som
for(let s=1;s<LOGO_S;s++)say(T[s],'whoosh');
for(const [i,w] of [[1,'física'],[1,'bíblia'],[2,'lágrimas'],[2,'pernas'],[2,'legs'],[2,'larmes'],[3,'janelas'],[3,'vitrais'],[4,'tensão'],[5,'gota'],[5,'inseto'],[6,'água'],[6,'álcool'],[7,'película'],[7,'evapora'],[8,'sobra'],[8,'gravidade'],[9,'cordão'],[9,'cai'],[10,'efeito'],[11,'james'],[11,'irmão'],[12,'provérbios'],[13,'charles'],[14,'dois'],[14,'onda'],[15,'lombada'],[15,'quebra'],[17,'mais'],[17,'açúcar'],[18,'temperatura'],[18,'umidade'],[19,'tampe'],[19,'param'],[19,'destampe'],[20,'porto'],[20,'uísque'],[20,'cachaça'],[22,'mito']])say(wt(i,w),'tag');
say(wt(1,'qualidade'),'tag');say(wt(16,'bom'),'tag');say(wt(16,'substância'),'tag');say(wt(13,'ninguém'),'tag');say(wt(12,'provérbios'),'flip');say(wt(13,'mais'),'flip');
for(const w of ['física','qualidade','álcool','clima','explicou'])say(wt(21,w)-.15,'line');
