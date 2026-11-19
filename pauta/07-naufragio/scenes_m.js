// ---------- cenas do vídeo "Champanhe no fundo do mar" — Sommelier num bar de navio de cruzeiro; cena i = fala i ----------
function watermark(){if(!LOGO.complete)return;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.075;ctx.filter='blur(.6px)';ctx.drawImage(LOGO,960-230,720-221,460,442);ctx.restore()}
const CR={set:cruiseBar,front:cruiseFront};
const ap=(t,i,w,d=.35)=>ease(seg(t,wt(i,w)-.1,wt(i,w)-.1+d));
function card(t,s,set,title,dim=.72){veil(null,t,set,dim);const g=layer('g',null);goldText(g,title,960,165,Math.min(62,Math.floor(1500/title.length)));ornament(g,960,232,560);return g}
const done=(g,t,s)=>blit(ctx,L.g,0,seg(t,T[s],T[s]+.4));
const fade=(g,a,fn)=>{if(a<=0)return;g.save();g.globalAlpha=a;fn();g.restore()};
const C3=(t,s,set,title,fn,dim)=>{const g=card(t,s,set,title,dim);fn(g);done(g,t,s)};
const UW=(x,t)=>underwater(x,t);
const SC=[null,
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['spark',1100]],gest:[[0,'open'],[3.5,'point']],chips:[['NAUFRÁGIO',430,300,wt(1,'naufrágio')],['LEILÃO',430,420,wt(1,'leilão')],['CIÊNCIA',1500,360,wt(1,'ciência')]],face:t=>({brow:.6,mouth:.7})},CR)),
 (t,c,s)=>C3(t,s,cellarWall,'2010 · MAR BÁLTICO',g=>{balticMap(g,ap(t,2,'finlândia',.8))},.74),
 (t,c,s)=>C3(t,s,UW,'O NAVIO AFUNDADO',g=>{const u=easeIO(seg(t,T[s]+.3,T[s+1]));wreck(g,1150,860,1.5);diver(g,620,400+u*200,1.5,t);chip(g,1400,330,'50 METROS DE FUNDO',ap(t,3,'cinquenta'))},.2),
 (t,c,s)=>C3(t,s,UW,'E LÁ DENTRO...',g=>{for(let i=0;i<7;i++){const a=ease(seg(t,wt(4,'garrafas')-.2+i*.12,wt(4,'garrafas')+i*.12+.2));fade(g,a,()=>lyingBottle(g,480+i*160,830-(i%2)*30,1.05,1.35+(i%3)*.12))}chip(g,960,380,'UMAS 150 GARRAFAS',ap(t,4,'cento'))},.2),
 (t,c,s)=>C3(t,s,cellarWall,'A MARCA NA ROLHA',g=>{bigCork(g,700,560,3.2);fade(g,ap(t,5,'marca',.5),()=>{g.fillStyle='rgba(60,30,10,.85)';star(g,700,500,40)});chip(g,1340,420,'RÓTULO SUMIU',ap(t,5,'sumido'));chip(g,1340,560,'MARCA GRAVADA',ap(t,5,'marca'));chip(g,1340,700,'VEUVE CLICQUOT · JUGLAR',ap(t,5,'clicquot'))},.74),
 (t,c,s)=>C3(t,s,UW,'170 ANOS DEBAIXO D\'ÁGUA',g=>{g.strokeStyle=GOLD;g.lineWidth=8;g.beginPath();g.moveTo(420,560);g.lineTo(1500,560);g.stroke();for(const [x0,y,w] of [[520,'1840',wt(6,'mil')],[1400,'2010',wt(6,'setenta')]]){const a=ease(seg(t,w-.1,w+.3));fade(g,a,()=>{g.fillStyle=GOLD2;g.beginPath();g.arc(x0,560,18,0,7);g.fill();goldText(g,y,x0,470,76)})}chip(g,960,680,'170 ANOS!',ap(t,6,'setenta'))},.4),
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['spark',1100]],gest:[[0,'thinking'],[2.6,'point']],chips:[['UMA ADEGA PERFEITA',1520,330,wt(7,'adega')]],face:t=>({brow:.8,mouth:.5})},CR)),
 (t,c,s)=>C3(t,s,UW,'A ADEGA DO FUNDO DO MAR',g=>{thermo(g,620,760,380,ap(t,8,'graus',.8)*.25+.05,'2–4 °C');lyingBottle(g,1260,820,.9,1.4);chip(g,1340,360,'ESCURO',ap(t,8,'escuro'));chip(g,1340,480,'SEMPRE GELADO',ap(t,8,'graus'));chip(g,1340,600,'SEM LUZ, SEM ESTRAGO',ap(t,8,'estrago'))},.35),
 (t,c,s)=>C3(t,s,cruiseBar,'O LEILÃO',g=>{const hit=wt(9,'trinta');hammer(g,620,620,Math.max(0,Math.sin(Math.min(1,seg(t,hit-.5,hit))*Math.PI))*.9);fade(g,ap(t,9,'trinta',.5),()=>{plaque(g,1320,520,520,220);goldText(g,'30.000 €',1320,505,92)});chip(g,1320,740,'RECORDE!',ap(t,9,'recorde'))},.6),
 (t,c,s)=>C3(t,s,UW,'PARA ONDE FOI O DINHEIRO',g=>{for(let i=0;i<5;i++)fish(g,(300+i*330+t*60)%1700+100,420+i*70,1.1,t+i);chip(g,960,700,'PROTEGER O MAR BÁLTICO',ap(t,10,'proteger'));chip(g,960,820-10,'HISTÓRIA DOS NAVIOS',ap(t,10,'navios'))},.3),
 (t,c,s)=>C3(t,s,UW,'1916 · PRIMEIRA GUERRA',g=>{const u=easeIO(seg(t,wt(11,'submarino')-.2,wt(11,'afundou')+.8));wreck(g,1160,560+u*300,1.3);g.save();g.fillStyle='#4A5A62';g.strokeStyle='#9AB0B8';g.lineWidth=4;g.beginPath();g.ellipse(560,520,240,46,0,0,7);g.fill();g.stroke();g.fillRect(520,450,80,50);g.strokeRect(520,450,80,50);g.fillRect(556,410,8,40);g.restore();
  fade(g,ap(t,11,'mil',.5),()=>{plaque(g,560,330,300,140);goldText(g,'1916',560,320,70)});chip(g,1360,330,'NAVIO SUECO',ap(t,11,'sueco'))},.3),
 (t,c,s)=>C3(t,s,cellarWall,'RUMO À RÚSSIA',g=>{balticMap(g,0);fade(g,ap(t,12,'petersburgo',.5),()=>{arrow(g,620,560,1470,500,'#C8213F',8);goldText(g,'SÃO PETERSBURGO',1330,560,34,'Cinzel',700)});chip(g,960,800,'60 METROS DE FUNDO',ap(t,12,'sessenta'))},.74),
 (t,c,s)=>C3(t,s,UW,'1998 · O RESGATE',g=>{const u=easeIO(seg(t,wt(13,'resgataram')-.3,T[s+1]));cage(g,960,860-u*360,1.1);diver(g,345,560,1.3,t);
  fade(g,ap(t,13,'duas',.5),()=>{plaque(g,1460,420,420,170);goldText(g,'+2.000',1460,405,76)});chip(g,1460,580,'CHAMPANHE DE 1907',ap(t,13,'sete'));chip(g,1460,700,'QUASE TODAS INTEIRAS',ap(t,13,'inteiras'))},.25),
 (t,c,s)=>C3(t,s,cellarWall,'E O GOSTO?',g=>{microscope(g,560,860,1.3);glassW(g,980,820,1.6,.55,'#F2D27A',true);fade(g,ap(t,14,'revista',.5),()=>{plaque(g,1440,540,380,200);goldText(g,'PNAS',1440,515,72);serif('revista científica · 2015',1440,575,30)});chip(g,960,330,'CIENTISTAS DA FRANÇA',ap(t,14,'cientistas'))},.74),
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['spark',1100]],gest:[[0,'thinking'],[3.4,'open']],chips:[['"ANIMAL"',430,300,wt(15,'animal')],['"CABELO MOLHADO"',520,420,wt(15,'cabelo')],['QUEIJO!',1500,360,wt(15,'queijo')]],face:t=>({brow:-.4,mouth:.2,look:.2})},CR)),
 (t,c,s)=>C3(t,s,cellarWall,'DEPOIS DE RESPIRAR...',g=>{g.save();g.translate(960,820);g.rotate(Math.sin(t*5)*.06*ap(t,16,'girar',.5));glassW(g,0,0,2.2,.5,'#F2D27A',true);g.restore();
  [['TOSTADO',520,380],['DEFUMADO',520,520],['COURO',520,660],['FRUTAS',1400,420],['FLORES',1400,580]].forEach(([w,x0,y0])=>chip(g,x0,y0,w,ap(t,16,w.toLowerCase().slice(0,5))))},.74),
 (t,c,s)=>C3(t,s,cellarWall,'DOCÍSSIMO!',g=>{const ts=wt(17,'cento'),n=Math.round(14*easeIO(seg(t,ts-.4,ts+1.2)));for(let i=0;i<n;i++)sugarCube(g,620+(i%4)*64,800-Math.floor(i/4)*64,56);fade(g,ap(t,17,'gramas',.5),()=>{plaque(g,1360,520,480,220);goldText(g,'140 G',1360,500,96);serif('de açúcar por litro',1360,565,34)})},.74),
 (t,c,s)=>C3(t,s,cellarWall,'ONTEM x HOJE',g=>{const a=ease(seg(t,T[s]+.3,T[s]+1));if(a>0)bar(g,700,780,180,440*a,'#E9D8B0','1840','140 G');const b=ap(t,18,'seis',.6);if(b>0)bar(g,1220,780,180,Math.max(4,22*b),'#E9D8B0','HOJE','7 G');chip(g,1220,420,'QUASE 20× MENOS!',ap(t,18,'vinte'))},.74),
 (t,c,s)=>C3(t,s,cellarWall,'A CARTA DA VIÚVA',g=>{letter(g,720,560,1.3);chip(g,1380,420,'DOCE ERA MODA',ap(t,19,'moda'));chip(g,1380,560,'OS RUSSOS: AINDA MAIS DOCE',ap(t,19,'russos'))},.74),
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['spark',1100]],gest:[[0,'open'],[1.6,'point']],chips:[['UM EXPERIMENTO!',1500,330,wt(20,'experimento')]],face:t=>({brow:.7,mouth:.75})},CR)),
 (t,c,s)=>C3(t,s,UW,'2014 · DE PROPÓSITO',g=>{const u=easeIO(seg(t,T[s]+.3,T[s]+3.5));cage(g,960,380+u*450,1.2);chip(g,1520,360,'300 GARRAFAS',ap(t,21,'trezentas'));chip(g,1520,480,'+ 50 GRANDES',ap(t,21,'grandes'));chip(g,420,360,'NUMA GAIOLA',ap(t,21,'gaiola'))},.25),
 (t,c,s)=>C3(t,s,cellarWall,'MAR x ADEGA',g=>{g.save();g.beginPath();g.rect(300,300,640,520);g.clip();underwater(g,t);cage(g,620,800,.8);g.restore();barrelSide(g,1300,800,1.2,1);bottleS(g,[1520,800],1,'spark');
  goldText(g,'NO MAR',620,880-20,40,'Cinzel',700);goldText(g,'NA ADEGA',1300,860,40,'Cinzel',700);chip(g,960,300,'PROVANDO POR 40 ANOS',ap(t,22,'quarenta'))},.74),
 (t,c,s)=>C3(t,s,cellarWall,'O PRIMEIRO RESULTADO',g=>{balance(g,960,360,Math.sin(t*1.5)*.04);goldText(g,'MAR',660,560,52,'Cinzel',700);goldText(g,'ADEGA',1260,560,52,'Cinzel',700);chip(g,960,760,'O DO MAR: MAIS FECHADO',ap(t,23,'fechado'))},.74),
 (t,c,s)=>C3(t,s,cruiseBar,'E A CERVEJA?',g=>{for(const [x0,k] of [[560,1.2],[760,1.3]])bottleS(g,[x0,820],k,'amber');fade(g,ap(t,24,'cervejaria',.5),()=>{g.fillStyle='#E9C46A';g.beginPath();g.roundRect(1180,520,180,260,16);g.fill();g.fillStyle='#FFF8E8';g.beginPath();g.ellipse(1270,520,96,34,0,0,7);g.fill();g.strokeStyle='#E9C46A';g.lineWidth=20;g.beginPath();g.arc(1380,640,60,-1.2,1.2);g.stroke()});
  chip(g,1400,330,'RECEITA DE 170 ANOS',ap(t,24,'receita'));chip(g,660,330,'TAMBÉM TINHA CERVEJA',ap(t,24,'cerveja'))},.6),
 (t,c,s)=>C3(t,s,UW,'TODO MUNDO NO MAR?',g=>{for(const [x0,k] of [[520,.7],[960,.9],[1400,.7]])cage(g,x0,820,k);fade(g,ap(t,25,'ciência',.5),()=>goldText(g,'?',960,420,180));chip(g,960,300,'AINDA EM ESTUDO',ap(t,25,'estudando'))},.25),
 (t,c,s)=>finalTable(t,s),
 (t,c,s)=>ctaScene(t,c,s),
 null];
function finalTable(t,s){veil(null,t,cruiseBar,.78);const g=layer('g',null);goldText(g,'CHAMPANHE DO MAR',960,130,72);ornament(g,960,205,600);blit(ctx,L.g,0,seg(t,T[s],T[s]+.5));
 const C=[['map','2010','achado no Báltico','escuro'],['wreck','170 ANOS','debaixo d\'água','frio'],['thermo','2–4 °C','escuro e frio','mexer'],['sugar','140 G','de açúcar por litro','naufrágio'],['cage','40 ANOS','o experimento','adega']];
 C.forEach(([ic,n,d,w],i)=>{const cx=220+i*370,ta=wt(26,w)-.15,c=layer('c'+i,null);plaque(c,cx,600,330,560);
  if(ic=='map'){c.fillStyle='#1E3A5A';c.fillRect(cx-110,450,220,180);c.fillStyle=GOLD2;c.beginPath();c.arc(cx,540,10,0,7);c.fill()}else if(ic=='wreck')wreck(c,cx,640,.4);else if(ic=='thermo')thermo(c,cx-60,660,180,.15,'');else if(ic=='sugar'){for(let k=0;k<6;k++)sugarCube(c,cx-50+(k%3)*50,650-Math.floor(k/3)*50,44)}else cage(c,cx,690,.5);
  goldText(c,n,cx,768,34,'Cinzel',700);blit(ctx,L['c'+i],0,seg(t,ta,ta+.45));serif(d,cx,822,32,`rgba(243,230,200,${seg(t,ta,ta+.45)})`)})}
function ctaScene(t,cam,s){talkScene(t,cam,s,Object.assign({gest:[[0,'wave'],[2.2,'open'],[4.2,'rest']],bottles:[['spark',1100]],face:t=>({mouth:.7,brow:.5})},CR));
 const a=easeIO(seg(t,T[s]+.4,T[s]+1)),g=layer('g',null);g.save();g.globalAlpha=a;g.fillStyle='#B0122E';g.beginPath();g.roundRect(120,120,520,110,55);g.fill();g.strokeStyle=GOLD2;g.lineWidth=5;g.stroke();g.restore();
 g.save();g.globalAlpha=a;goldText(g,'INSCREVA-SE',380,176,52,'Cinzel',900);g.restore();chip(g,380,300,'QUAL CURIOSIDADE?',ap(t,27,'curiosidade'));blit(ctx,L.g,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=a;ctx.drawImage(LOGO,1640,40,230,220);ctx.restore()}}
const TALKS=[1,7,15,20,27];
FILM={dur:T[T.length-1],cuts:T.map(v=>Math.round(v*30)),fadeIn:0,fadeOut:.8,warm(){return .4},
 cam(s,u,t){if(TALKS.includes(s)){const k=TALKS.indexOf(s)%3;return [{x:lerp(950,975,u),y:lerp(560,545,u),z:lerp(1.18,1.28,easeIO(u)),b:[6,0,0]},{x:lerp(930,915,u),y:lerp(545,520,u),z:lerp(1.42,1.62,easeIO(u)),b:[8,0,0]},{x:lerp(1000,985,u),y:550,z:lerp(1.3,1.4,u),b:[7,0,0]}][k]}return {x:960,y:540,z:1,b:[10,0,0]}},
 draw(t,cam,s,u){if(s==0){thumbFrame(t);return}if(s==28){photo(IMG.logo,t,T[28],T[29],1,1.05);return}SC[s](t,cam,s)},
 plants(){return {}}};
(function(){const DISS={1:.6},xf=mk(),xz=mk(),CARD=[2,3,4,5,6,8,9,10,11,12,13,14,16,17,18,19,21,22,23,24,25,26],draw0=FILM.draw,cam0=FILM.cam;for(let s=2;s<28;s++)DISS[s]=.45;
 FILM.draw=(t,c,s,u)=>{const d=DISS[s],a=d?1-easeIO(seg(t,T[s],T[s]+d)):0;if(a>0){draw0(t,cam0(s-1,1,t),s-1,1);const x=xf.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0)}
  draw0(t,c,s,u);if(CARD.includes(s)){const k=1+.035*easeIO(u),x=xz.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0);ctx.save();ctx.setTransform(k,0,0,k,W/2*(1-k),H/2*(1-k));ctx.drawImage(xz,0,0);ctx.restore()}
  if(a>0)blit(ctx,xf,0,a);if(s!=0&&s!=27&&s!=28)watermark();if(s!=26&&s!=28)karaoke(t)}})();
// som
for(let s=1;s<28;s++)say(T[s],'whoosh');say(wt(11,'afundou'),'bottledown');say(wt(13,'duas'),'tag');
for(const [i,w] of [[3,'cinquenta'],[4,'garrafas'],[6,'setenta'],[8,'graus'],[9,'trinta'],[14,'gramas'],[15,'vinte'],[18,'trezentas'],[19,'quarenta']])say(wt(i,w),'tag');
say(wt(9,'trinta'),'bottledown');say(wt(15,'queijo'),'yuck');
for(const w of ['escuro','frio','mexer','naufrágio','adega'])say(wt(26,w)-.15,'line');
