// ---------- cenas do vídeo "De onde vem a cor do vinho?" — Sommelier de jaleco num LABORATÓRIO de vinho; cena i = fala i ----------
function watermark(){if(!LOGO.complete)return;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.075;ctx.filter='blur(.6px)';ctx.drawImage(LOGO,960-230,720-221,460,442);ctx.restore()}
const LB={set:lab,front:labFront};
const ap=(t,i,w,d=.35)=>ease(seg(t,wt(i,w)-.1,wt(i,w)-.1+d));
function card(t,s,set,title,dim=.72){veil(null,t,set,dim);const g=layer('g',null);goldText(g,title,960,165,Math.min(62,Math.floor(1500/title.length)));ornament(g,960,232,560);return g}
const done=(g,t,s)=>blit(ctx,L.g,0,seg(t,T[s],T[s]+.4));
const fade=(g,a,fn)=>{if(a<=0)return;g.save();g.globalAlpha=a;fn();g.restore()};
const C3=(t,s,set,title,fn,dim)=>{const g=card(t,s,set,title,dim);fn(g);done(g,t,s)};
const mixC=(a,b,u)=>{const p=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)),A=p(a),B=p(b);return '#'+A.map((v,i)=>Math.round(v+(B[i]-v)*u).toString(16).padStart(2,'0')).join('')};
const lbl=(g,txt,x0,y0,sz=34,a=1)=>fade(g,a,()=>goldText(g,txt,x0,y0,sz,'Cinzel',900));
const SC=[null,
 // 1 laboratório, jaleco
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['red',1100]],gest:[[0,'open'],[3.4,'point']],props:(f,t)=>{tubeRack(f,520,806,[ANT.red,ANT.purple,ANT.blue]);beaker(f,1330,806,90,110,ANT.wine,.55)},
  chips:[['LABORATÓRIO DE VINHO',430,300,wt(1,'laboratório')],['BOTA O JALECO!',1500,360,wt(1,'jaleco')]],face:t=>({brow:.7,mouth:.65})},LB)),
 // 2 uva cortada
 (t,c,s)=>C3(t,s,lab,'UMA UVA TINTA AO MEIO',g=>{const u=ap(t,2,'meio',.6);
  g.fillStyle='#3A1030';g.beginPath();g.ellipse(560,560,150,168,0,0,7);g.fill();g.fillStyle='rgba(255,255,255,.22)';g.beginPath();g.ellipse(510,500,34,54,-.4,0,7);g.fill();g.strokeStyle='#3E6A2A';g.lineWidth=12;g.beginPath();g.moveTo(560,394);g.lineTo(580,350);g.stroke();
  fade(g,u,()=>{halvedGrape(g,980,560,150);arrow(g,740,560,800,560,GOLD2,6)});
  chip(g,1470,420,'CASCA ROXA',ap(t,2,'roxa'));chip(g,1470,560,'POLPA CLARINHA',ap(t,2,'clarinha'))},.62),
 // 3 camadas da casca
 (t,c,s)=>C3(t,s,lab,'A COR MORA NA CASCA',g=>{skinLayers(g,700,560,520,t,.4+.6*ap(t,3,'pigmentos',.8));
  fade(g,ap(t,3,'camadas',.5),()=>arrow(g,1110,400,980,420,GOLD2,6));chip(g,1380,400,'CAMADAS DA CASCA',ap(t,3,'camadas'));
  fade(g,ap(t,3,'antocianinas',.5),()=>{plaque(g,1380,620,520,170);goldText(g,'ANTOCIANINAS',1380,610,52)})},.62),
 // 4 mirtilo, amora, repolho
 (t,c,s)=>C3(t,s,lab,'O MESMO PIGMENTO',g=>{const a1=ap(t,4,'mirtilo',.5),a2=ap(t,4,'amora',.5),a3=ap(t,4,'repolho',.5);
  fade(g,a1,()=>blueberries(g,480,540,1.3));fade(g,a2,()=>blackberry(g,960,560,1.3));fade(g,a3,()=>redCabbage(g,1440,550,1.3));
  lbl(g,'MIRTILO',480,780,44,a1);lbl(g,'AMORA',960,780,44,a2);lbl(g,'REPOLHO ROXO',1440,780,44,a3)},.62),
 // 5 tanque: suco de molho com as cascas
 (t,c,s)=>C3(t,s,lab,'NA VINÍCOLA',g=>{const u=easeIO(seg(t,wt(5,'molho'),T[6]-.6));tank(g,680,850,1.25,u,t);
  chip(g,1380,360,'SUCO + CASCAS',ap(t,5,'cascas'));chip(g,1380,480,'VÁRIOS DIAS',ap(t,5,'dias'));chip(g,1380,600,'O ÁLCOOL PUXA A COR',ap(t,5,'álcool'))},.62),
 // 6 maceração
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['red',1100]],gest:[[0,'thinking'],[3.2,'open'],[6.5,'rest']],props:(f,t)=>{grapesC(f,520,740,1.1);glassW(f,1330,806,1.1,.55,ANT.wine)},
  chips:[['MACERAÇÃO',430,300,wt(6,'maceração')],['2 A 7 DIAS',1500,330,wt(6,'dois')],['CASCA GROSSA = + COR',430,430,wt(6,'grossa')]],face:t=>({brow:.6,mouth:.5})},LB)),
 // 7 a química
 (t,c,s)=>C3(t,s,lab,'A QUÍMICA DE VERDADE',g=>{const m=seg(t,wt(7,'muda'),wt(7,'muda')+3),k=(m*3)%3,cols=[ANT.red,'#7A1A70','#3A4AB8'],col=m>0?mixC(cols[Math.floor(k)],cols[(Math.floor(k)+1)%3],k%1):ANT.red;
  anthoMol(g,560,540,2.3,col);chip(g,1400,420,'ANTOCIANINA',ap(t,7,'antocianina'));chip(g,1400,560,'MUDA COM A ACIDEZ',ap(t,7,'acidez'))},.62),
 // 8 tubos vermelho -> roxo -> azul
 (t,c,s)=>C3(t,s,lab,'A COR MUDA COM A ACIDEZ',g=>{const a=[ap(t,8,'vermelha',.6),ap(t,8,'roxo',.6),ap(t,8,'azul',.6)],cols=[ANT.red,'#6A1A66','#2E44B0'],nm=['VERMELHO','ROXO','AZUL'];
  g.fillStyle='#4A2414';g.fillRect(420,700,820,22);
  for(let i=0;i<3;i++){const cx=560+i*270;testTube(g,cx,700,380,a[i]>0?cols[i]:null,.0+.68*a[i],96);lbl(g,nm[i],cx,752,36,a[i])}
  fade(g,a[0],()=>{arrow(g,470,815,1190,815,GOLD2,6);goldText(g,'MAIS ÁCIDO',560,855,28,'Cinzel',700);goldText(g,'MENOS ÁCIDO',1100,855,28,'Cinzel',700)});
  fade(g,ap(t,8,'repolho',.5),()=>{redCabbage(g,1540,480,.9);goldText(g,'REPOLHO ROXO',1540,640,34,'Cinzel',900)})},.62),
 // 9 pHmetro e duas taças
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['red',1100]],gest:[[0,'point'],[3.5,'open'],[7,'rest']],props:(f,t)=>{const late=t>wt(9,'menos');phMeter(f,470,806,.9,late?'pH 3,8':'pH 3,2',late?ANT.young:ANT.red);
   glassW(f,1290,806,1.1,.55,ANT.red);glassW(f,1450,806,1.1,.55,ANT.young);goldText(f,'pH 3,2',1290,570,30,'Cinzel',900);goldText(f,'pH 3,8',1450,570,30,'Cinzel',900)},
  chips:[['MAIS ÁCIDO = VERMELHO',430,300,wt(9,'vivo')],['MENOS ÁCIDO = ROXO',430,420,wt(9,'roxo')]],face:t=>({brow:.5,mouth:.55})},LB)),
 // 10 dióxido de enxofre
 (t,c,s)=>C3(t,s,lab,'O CONSERVANTE DO VINHO',g=>{const u1=ap(t,10,'apaga',.9),u2=ap(t,10,'temporário',1.2);glassW(g,720,800,2.6,.6,mixC(ANT.wine,'#D9A0AA',u1*(1-u2)));
  fade(g,ap(t,10,'dióxido',.5),()=>{reagent(g,400,800,1.6,'rgba(220,230,235,.5)',GOLD);goldText(g,'SO2',400,700,30,'Cinzel',900)});
  chip(g,1380,360,'DIÓXIDO DE ENXOFRE',ap(t,10,'dióxido'));chip(g,1380,480,'APAGA A COR...',ap(t,10,'apaga'));chip(g,1380,600,'...MAS ELA VOLTA!',ap(t,10,'temporário'))},.62),
 // 11 antocianina + tanino
 (t,c,s)=>C3(t,s,lab,'PIGMENTOS MAIS FIRMES',g=>{const m=easeIO(seg(t,wt(11,'juntam'),wt(11,'juntam')+1.4)),glow=ap(t,11,'firmes',.6);
  if(glow>0){const gr=g.createRadialGradient(960,540,10,960,540,330);gr.addColorStop(0,`rgba(242,210,122,${.35*glow})`);gr.addColorStop(1,'rgba(242,210,122,0)');g.fillStyle=gr;g.fillRect(560,200,800,680)}
  anthoMol(g,lerp(400,700,m),540,1.6,ANT.red);tanninChain(g,lerp(1480,1170,m),540,1.4);
  lbl(g,'ANTOCIANINA',lerp(480,720,m),400,38,ap(t,11,'antocianinas')*(1-glow));lbl(g,'TANINO',lerp(1480,1170,m),400,38,ap(t,11,'taninos')*(1-glow));
  chip(g,960,760,'PIGMENTO FIRME: A COR RESISTE',ap(t,11,'resiste'))},.62),
 // 12 a física: o vinho engole o verde
 (t,c,s)=>C3(t,s,lab,'A FÍSICA DA COR',g=>{const u=.5*seg(t,T[s]+.3,wt(12,'engole'))+.5*seg(t,wt(12,'passar')-.2,wt(12,'passar')+.8);lightThroughGlass(g,u,t);glassW(g,960,760,2.2,.55,ANT.wine);
  chip(g,960,330,'O VERDE É ENGOLIDO',ap(t,12,'verde'));chip(g,1460,440,'O VERMELHO PASSA',ap(t,12,'passar'));lbl(g,'LUZ BRANCA',255,660,30,ap(t,12,'física'))},.62),
 // 13 espectrofotômetro na bancada
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['red',1100]],gest:[[0,'open'],[2.6,'point'],[8,'rest']],props:(f,t)=>{spectro(f,1400,806,1.05,t,ap(t,13,'joga',.6),ANT.wine);tubeRack(f,520,806,[ANT.red,ANT.wine,ANT.young])},
  chips:[['ESPECTROFOTÔMETRO',430,300,wt(13,'espectrofotômetro')],['MEDE QUANTO PASSA',430,420,wt(13,'mede')]],face:t=>({brow:.8,mouth:.6})},LB)),
 // 14 gráfico 420/520/620
 (t,c,s)=>C3(t,s,lab,'TRÊS CORES DE LUZ',g=>{absChart(g,760,740,[.45,.9,.28],[ap(t,14,'amarelo',.5),ap(t,14,'vermelho',.5),ap(t,14,'azul',.5)]);
  fade(g,ap(t,14,'intensidade',.5),()=>{plaque(g,1440,420,540,170);goldText(g,'INTENSIDADE',1440,395,44);goldText(g,'A SOMA DAS TRÊS',1440,455,28,'Cinzel',700)});
  fade(g,ap(t,14,'tonalidade',.5),()=>{plaque(g,1440,650,540,170);goldText(g,'TONALIDADE',1440,625,44);goldText(g,'AMARELO / VERMELHO',1440,685,28,'Cinzel',700)})},.62),
 // 15 com a idade: vermelho cai, amarelo sobe; taça roxa -> tijolo
 (t,c,s)=>C3(t,s,lab,'COM A IDADE',g=>{const u=easeIO(seg(t,wt(15,'idade'),wt(15,'tijolo')));absChart(g,700,740,[lerp(.4,.75,u),lerp(.9,.45,u),lerp(.3,.12,u)]);
  fade(g,ap(t,15,'cai',.4),()=>arrow(g,790,470,790,570,'#FF6A6A',10));fade(g,ap(t,15,'sobe',.4),()=>arrow(g,590,560,590,450,'#F2D27A',10));
  glassW(g,1440,700,2.1,.55,mixC(ANT.young,ANT.brick,u));lbl(g,u<.5?'JOVEM':'VELHO',1440,760,40);fade(g,ap(t,15,'tijolo',.5),()=>chip(g,1440,830,'COR DE TIJOLO',1))},.62),
 // 16 rosé e blanc de noirs
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['red',1100]],gest:[[0,'thinking'],[3,'open'],[7.5,'point']],props:(f,t)=>{grapesC(f,520,740,1.1);glassW(f,1300,806,1.1,.55,ANT.rose);glassW(f,1460,806,1.1,.55,ANT.white)},
  chips:[['ROSÉ: POUCAS HORAS',430,300,wt(16,'horas')],['BRANCO DE UVA TINTA',430,420,wt(16,'branco')],['BLANC DE NOIRS',1500,330,wt(16,'blanc')]],face:t=>({brow:.7,mouth:.6})},LB)),
 // 17 vinho laranja, Geórgia
 (t,c,s)=>C3(t,s,lab,'O VINHO LARANJA',g=>{for(const [x0,k] of [[400,1.2],[660,1.45],[900,1.15]])clayJar(g,x0,820,k);g.fillStyle='#4A2A18';g.beginPath();g.ellipse(650,830,420,60,0,0,7);g.fill();
  glassW(g,1160,820,2,.55,mixC(ANT.white,ANT.orange,ap(t,17,'laranja',1.2)));
  chip(g,1560,360,'UVA BRANCA + CASCA',ap(t,17,'branca'));chip(g,1560,480,'GEÓRGIA',ap(t,17,'geórgia'));fade(g,ap(t,17,'milhares',.5),()=>{plaque(g,1560,640,420,150);goldText(g,'HÁ MILHARES',1560,620,40);goldText(g,'DE ANOS',1560,670,34,'Cinzel',700)})},.62),
 // 18 a dica: taça inclinada sobre toalha branca
 (t,c,s)=>C3(t,s,lab,'A DICA DO SOMMELIER',g=>{const k=ap(t,18,'incline',1);whiteCloth(g,960,640,1300,380);
  tiltGlass(g,700,820,1.9,-.8*k,ANT.young,'#9A4AA0',-1);tiltGlass(g,1220,820,1.9,.8*k,'#6A2418','#D08A50',1);
  chip(g,560,330,'ROXA = JOVEM',ap(t,18,'roxa'));chip(g,1360,330,'TIJOLO = MAIS VELHO',ap(t,18,'tijolo'))},.62),
 (t,c,s)=>finalTable(t,s),
 (t,c,s)=>ctaScene(t,c,s),
 null];
function finalTable(t,s){veil(null,t,lab,.8);const g=layer('g',null);goldText(g,'DE ONDE VEM A COR?',960,130,72);ornament(g,960,205,600);blit(ctx,L.g,0,seg(t,T[s],T[s]+.5));
 const C=[['casca','CASCA','onde mora a cor','casca'],['acid','ACIDEZ','vermelho ou roxo','acidez'],['so2','ENXOFRE','apaga, mas volta','acidez'],['luz','LUZ','o vinho engole o verde','luz'],['tempo','TEMPO','roxo vira tijolo','tempo']];
 C.forEach(([ic,n,d,w],i)=>{const cx=220+i*370,ta=wt(19,w)-.15+(ic=='so2'?.7:0),c=layer('c'+i,null);plaque(c,cx,600,330,560);
  if(ic=='casca')halvedGrape(c,cx,560,80);else if(ic=='acid'){[ANT.red,'#6A1A66','#2E44B0'].forEach((cl,j)=>testTube(c,cx-60+j*60,680,220,cl,.65,42))}
  else if(ic=='so2')glassW(c,cx,690,1.2,.55,'#C77A88');else if(ic=='luz'){c.fillStyle='rgba(255,255,240,.8)';c.fillRect(cx-150,560,110,22);c.fillStyle='#D8202E';c.fillRect(cx+40,560,110,22);glassW(c,cx,690,1.1,.55,ANT.wine)}
  else glassW(c,cx,690,1.2,.55,ANT.brick);
  goldText(c,n,cx,768,34,'Cinzel',700);blit(ctx,L['c'+i],0,seg(t,ta,ta+.45));serif(d,cx,822,d.length>18?28:32,`rgba(243,230,200,${seg(t,ta,ta+.45)})`)})}
function ctaScene(t,cam,s){talkScene(t,cam,s,Object.assign({gest:[[0,'wave'],[2.2,'open'],[4.2,'rest']],bottles:[['red',1100]],props:(f,t)=>{tubeRack(f,520,806,[ANT.red,ANT.purple,ANT.blue])},face:t=>({mouth:.7,brow:.5})},LB));
 const a=easeIO(seg(t,T[s]+.4,T[s]+1)),g=layer('g',null);g.save();g.globalAlpha=a;g.fillStyle='#B0122E';g.beginPath();g.roundRect(120,120,520,110,55);g.fill();g.strokeStyle=GOLD2;g.lineWidth=5;g.stroke();g.restore();
 g.save();g.globalAlpha=a;goldText(g,'INSCREVA-SE',380,176,52,'Cinzel',900);g.restore();chip(g,380,300,'QUAL CURIOSIDADE?',ap(t,20,'curiosidade'));blit(ctx,L.g,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=a;ctx.drawImage(LOGO,1640,40,230,220);ctx.restore()}}
const TALKS=[1,6,9,13,16,20],NS=LEN.length,LOGO_S=NS-1,TABLE_S=NS-3,CTA_S=NS-2;
FILM={dur:T[T.length-1],cuts:T.map(v=>Math.round(v*30)),fadeIn:0,fadeOut:.8,warm(){return .4},
 cam(s,u,t){if(TALKS.includes(s)){const k=TALKS.indexOf(s)%3;return [{x:lerp(950,975,u),y:lerp(560,545,u),z:lerp(1.18,1.28,easeIO(u)),b:[6,0,0]},{x:lerp(930,915,u),y:lerp(545,520,u),z:lerp(1.32,1.48,easeIO(u)),b:[8,0,0]},{x:lerp(1000,985,u),y:550,z:lerp(1.22,1.32,u),b:[7,0,0]}][k]}return {x:960,y:540,z:1,b:[10,0,0]}},
 draw(t,cam,s,u){if(s==0){thumbFrame(t);return}if(s==LOGO_S){photo(IMG.logo,t,T[LOGO_S],T[LOGO_S+1],1,1.05);return}SC[s](t,cam,s)},
 plants(){return {}}};
(function(){const DISS={1:.6},xf=mk(),xz=mk(),CARD=[2,3,4,5,7,8,10,11,12,14,15,17,18,19],draw0=FILM.draw,cam0=FILM.cam;for(let s=2;s<LOGO_S;s++)DISS[s]=.45;
 FILM.draw=(t,c,s,u)=>{const d=DISS[s],a=d?1-easeIO(seg(t,T[s],T[s]+d)):0;if(a>0){draw0(t,cam0(s-1,1,t),s-1,1);const x=xf.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0)}
  draw0(t,c,s,u);if(CARD.includes(s)){const k=1+.035*easeIO(u),x=xz.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0);ctx.save();ctx.setTransform(k,0,0,k,W/2*(1-k),H/2*(1-k));ctx.drawImage(xz,0,0);ctx.restore()}
  if(a>0)blit(ctx,xf,0,a);if(s!=0&&s!=CTA_S&&s!=LOGO_S)watermark();if(s!=TABLE_S&&s!=LOGO_S)karaoke(t)}})();
// som
for(let s=1;s<LOGO_S;s++)say(T[s],'whoosh');
for(const [i,w] of [[1,'jaleco'],[2,'meio'],[3,'antocianinas'],[4,'mirtilo'],[4,'amora'],[4,'repolho'],[6,'dois'],[8,'vermelha'],[8,'roxo'],[8,'azul'],[10,'temporário'],[11,'firmes'],[13,'joga'],[14,'amarelo'],[14,'vermelho'],[14,'azul'],[16,'blanc'],[17,'milhares'],[18,'tijolo']])say(wt(i,w),'tag');
say(wt(9,'vivo'),'glassdown');say(wt(18,'incline'),'cloth');
for(const w of ['casca','acidez','luz','tempo'])say(wt(19,w)-.15,'line');say(wt(19,'acidez')+.55,'line');
