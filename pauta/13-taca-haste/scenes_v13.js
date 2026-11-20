// ---------- cenas do vídeo 13 "Por que a taça de vinho tem haste?" — museu do vidro → oficina do vidreiro → bar; cena i = fala i ----------
function watermark(){if(!LOGO.complete)return;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.075;ctx.filter='blur(.6px)';ctx.drawImage(LOGO,960-230,720-221,460,442);ctx.restore()}
const ap=(t,i,w,d=.35)=>ease(seg(t,wt(i,w)-.1,wt(i,w)-.1+d));
function card(t,s,set,title,dim=.72){veil(null,t,set,dim);const g=layer('g',null);goldText(g,title,960,165,Math.min(62,Math.floor(1500/title.length)));ornament(g,960,232,560);return g}
const done=(g,t,s)=>blit(ctx,L.g,0,seg(t,T[s],T[s]+.4));
const fade=(g,a,fn)=>{if(a<=0)return;g.save();g.globalAlpha=a;fn();g.restore()};
const C3=(t,s,set,title,fn,dim)=>{const g=card(t,s,set,title,dim);fn(g);done(g,t,s)};
const plq=(g,cx,cy,w,h,txt,size,a)=>fade(g,a,()=>{plaque(g,cx,cy,w,h);goldText(g,txt,cx,cy-6,size)});
// vitrine simples do museu (para os cartões)
function showcase(g,cx,base,w,h){g.fillStyle='#2A1410';g.fillRect(cx-w/2-20,base,w+40,60);g.fillStyle=GOLD;g.fillRect(cx-w/2-20,base,w+40,7);
 g.fillStyle='rgba(200,230,240,.06)';g.fillRect(cx-w/2,base-h,w,h);g.strokeStyle='rgba(220,240,250,.4)';g.lineWidth=4;g.strokeRect(cx-w/2,base-h,w,h);g.strokeStyle='rgba(255,255,255,.3)';g.lineWidth=3;g.beginPath();g.moveTo(cx-w/2+24,base-h+30);g.lineTo(cx-w/2+80,base-h+130);g.stroke()}
// ---------- o Sommelier no bar segurando a taça PELA HASTE (mão direita) ----------
// o: {gest (mão esquerda), glass:t=>({p:[x,y], z, sc, swirl}), chips, face}
function sommGlass(t,cam,s,o){const x=layer('w',cam);barWall(x,t);const t0=T[s];
 const gs=gest(t,(o.gest||[[0,'rest']]).map(q=>[t0+q[0],q[1]]));
 const p=sommPose(t,Object.assign({look:-.15,brow:.35,mouth:.45,blink:blinkAt(t,[t0+1.3,t0+3.9,t0+6.4])},o.face?o.face(t):{}));
 const sp=speak(t);p.open=Math.max(p.open||0,sp);if(sp>.1)p.mouth=Math.min(p.mouth,.35);p.tilt=(p.tilt||0)+Math.sin(t*1.3)*.015;
 const G_=o.glass(t),sw=G_.swirl||0,hx=G_.p[0]+Math.cos(t*7)*14*sw,hy=G_.p[1]+Math.sin(t*7)*7*sw;
 setHands(p,gs.l,[[hx,hy],G_.z]);const hp=sommActor(cam,p);
 const f=layer('f',cam);barCounterH(f);if(o.props)o.props(f,t);const hl=h2w(hp,'l'),hr=h2w(hp,'r');(gs.lo?openHand:gripHand)(f,hl[0],hl[1],gs.lo?-.4:0,C10,.85);
 const sc=G_.sc||1.3;glassW(f,hr[0],hr[1]+26*sc/1.45*1.45,sc,.4,'#6E1630');
 if(sw>0){f.save();f.globalAlpha=sw*.5;f.strokeStyle='rgba(255,220,200,.7)';f.lineWidth=3;f.beginPath();f.ellipse(hr[0]+Math.cos(t*7+1)*6,hr[1]+26*sc-74*sc-42*sc*.4-30,30*sc,5*sc,0,0,7);f.stroke();f.restore()}
 if(o.aroma){const a=o.aroma(t);if(a>0){f.save();f.globalAlpha=a;f.strokeStyle=GOLD2;f.lineWidth=5;f.lineCap='round';for(let k=-1;k<=1;k++){const y0=hr[1]+26*sc-190*sc,ph=(t*1.4+k*.33)%1;f.globalAlpha=a*(1-ph);f.beginPath();for(let i=0;i<=20;i++){const u=i/20;f.lineTo(hr[0]+k*28+Math.sin(u*6+t*3+k)*10,y0-u*150-ph*60)}f.stroke()}f.restore()}}
 gripHand(f,hr[0],hr[1],0,C10,.8);
 comp([['w',cam.b[0]],['h'],['f']]);
 chipSafe.top=0;for(const [txt,cx0,cy0,ta] of (o.chips||[])){const c=layer('chipL',null),[cx,cy]=chipSafe(txt,cx0,cy0);chip(c,cx,cy,txt,ease(seg(t,ta,ta+.35)));blit(ctx,L.chipL,0)}}
const kfp=(t,keys)=>[kf(t,keys.map(k=>[k[0],k[1]])),kf(t,keys.map(k=>[k[0],k[2]]))];
const SC=[null,
 // 1 — gancho: Grécia · Veneza · Inglaterra · Ciência
 (t,c,s)=>C3(t,s,museum,'DO GREGO À CIÊNCIA',g=>{const P=[[330,'grego','GRÉCIA',x=>kylix(g,x,600,.62,0,1)],[750,'veneza','VENEZA',x=>veniceGlass(g,x,620,.62,t)],[1170,'inglês','INGLATERRA',x=>englishGlass(g,x,620,.7,t,{shine:1})],[1590,'câmera','CIÊNCIA',x=>topView(g,x,490,110,1,t)]];
  for(const [x0,w,lab,art] of P){const a=ap(t,1,w,.5);fade(g,a,()=>{plaque(g,x0,530,360,400);art(x0);goldText(g,lab,x0,680,40,'Cinzel',900)})}
  chip(g,960,800,'FICA COMIGO!',ap(t,1,'comigo'))},.6),
 // 2 — Grécia: a kylix (taça de barro, larga e rasa, com pé); o vinho baixa e revela o desenho do fundo
 (t,c,s)=>C3(t,s,museum,'GRÉCIA: A KYLIX',g=>{showcase(g,640,790,860,500);const lv=1-ease(seg(t,wt(2,'estava')-.6,wt(2,'estava')+1.4));kylix(g,640,780,1.55,lv*.95,1);
  fade(g,ap(t,2,'pezinho',.4),()=>arrow(g,1000,735,760,735,GOLD2,8));
  chip(g,1460,330,'KYLIX = TAÇA DE BARRO',ap(t,2,'kylix'));chip(g,1460,450,'LARGA E RASINHA',ap(t,2,'rasinha'));chip(g,1460,570,'COM UM PEZINHO',ap(t,2,'pezinho'));stamp(g,1460,740,'O PÉ!',ease(seg(t,wt(2,'estava')-.15,wt(2,'estava')+.25)))},.6),
 // 3 — o vidro soprado (vidreiro de verdade soprando no tubo) e a taça romana com haste
 (t,c,s)=>C3(t,s,workshop,'O VIDRO SOPRADO',g=>{const blow=seg(t,wt(3,'sopra')-.2,wt(3,'balão')+.4),puff=Math.max(0,Math.sin(t*5))*seg(t,wt(3,'sopra')-.2,wt(3,'balão')+.2)*(1-seg(t,wt(3,'balão')+.2,wt(3,'balão')+.6));
  glassblower(g,420,900,.78,t,{mode:'blow',inflate:ease(blow),cheeks:puff,t0:T[s]});
  const r=ap(t,3,'romanos',.6);fade(g,r,()=>{plaque(g,1480,640,380,400);romanGlass(g,1480,800,1.65,.45)});
  chip(g,1480,300,'VIDRO SOPRADO',ap(t,3,'soprado'));chip(g,1480,395,'FEITO BALÃO',ap(t,3,'balão'));fade(g,r,()=>goldText(g,'ROMA',1480,490,48,'Cinzel',900))},.6),
 // 4 — Idade Média: vidro era luxo; madeira, chifre, barro, estanho
 (t,c,s)=>C3(t,s,tavern,'IDADE MÉDIA',g=>{plq(g,960,340,560,130,'VIDRO = LUXO!',56,ap(t,4,'luxo',.5));shelfBoard(g,220,1700,700);
  const O=[[400,'madeira','MADEIRA',x=>woodBowl(g,x,700,1.2)],[760,'chifre','CHIFRE',x=>hornCup(g,x,700,1.1)],[1120,'barro','BARRO',x=>clayMug(g,x,700,1.1)],[1500,'estanho','ESTANHO',x=>pewterMug(g,x,700,1.1)]];
  for(const [x0,w,lab,art] of O){const a=ap(t,4,w,.45);fade(g,a,()=>{art(x0);goldText(g,lab,x0,780,40,'Cinzel',900)})}
  serif('um metal parecido com prata',1500,835,32,`rgba(243,230,200,${ap(t,4,'prata',.5)})`)},.6),
 // 5 — Veneza leva os fornos para Murano (1291): evitar incêndio e guardar o segredo
 (t,c,s)=>C3(t,s,museum,'VENEZA → MURANO',g=>{veniceMap(g,700,560,.95,ease(seg(t,wt(5,'levou'),wt(5,'murano')+.3)),t);
  for(const [fx,fy] of [[800,440],[850,430]])furnaceIcon(g,fx,fy,.32,t,ap(t,5,'fornos',.5));
  plq(g,1460,360,420,150,'1291',80,ap(t,5,'noventa',.5));chip(g,1460,540,'CONTRA INCÊNDIO',ap(t,5,'incêndio'));chip(g,1460,660,'E O SEGREDO!',ap(t,5,'segredo'));padlock(g,1460,790,.55,ap(t,5,'segredo',.5),ease(seg(t,wt(5,'segredo'),wt(5,'segredo')+.5)))},.6),
 // 6 — o cristallo de Murano: vidreiro estica o vidro feito caramelo; nasce a taça de haste alta (dragão)
 (t,c,s)=>C3(t,s,workshop,'MURANO: O CRISTALLO',g=>{glassblower(g,400,900,.78,t,{mode:'pull',pull:ease(seg(t,wt(6,'esticava')-.4,wt(6,'caramelo')+.8)),t0:T[s],look:.3});
  const n=ap(t,6,'nasciam',.7);fade(g,n,()=>veniceGlass(g,1560,860,1.25,t,n));
  chip(g,1090,320,'CRISTALLO',ap(t,6,'cristallo'));chip(g,1090,430,'QUASE TRANSPARENTE',ap(t,6,'transparente'));chip(g,1090,540,'ESTICA FEITO CARAMELO',ap(t,6,'caramelo'));chip(g,1090,820,'HASTE ALTA!',ap(t,6,'alta'))},.55),
 // 7 — Inglaterra: George Ravenscroft, vidro com chumbo = cristal
 (t,c,s)=>C3(t,s,tavern,'O CRISTAL INGLÊS',g=>{englishGlass(g,560,820,1.75,t,{shine:ap(t,7,'brilhante',.6),lv:.4,knop:1});
  chip(g,1320,330,'ANOS 1670',ap(t,7,'setenta'));chip(g,1320,440,'GEORGE RAVENSCROFT',ap(t,7,'ravenscroft'));plq(g,1320,600,800,140,'VIDRO + CHUMBO = CRISTAL',44,ap(t,7,'chumbo',.5));chip(g,1320,780,'A EUROPA COPIOU',ap(t,7,'copiou'))},.6),
 // 8 — imposto sobre o vidro, cobrado pelo peso (1746–1845)
 (t,c,s)=>C3(t,s,tavern,'IMPOSTO PELO PESO',g=>{const tl=.16*ease(seg(t,wt(8,'peso')-.2,wt(8,'peso')+.6)),cx=600,cy=380,c_=Math.cos(tl),s_=Math.sin(tl);balance(g,cx,cy,tl);
  const L_=[cx-300*c_,cy-300*s_+120],R_=[cx+300*c_,cy+300*s_+120];englishGlass(g,L_[0],L_[1]+2,.62,t,{knop:1});const nc=Math.floor(7*ap(t,8,'imposto',1.2));coinStack(g,R_[0],R_[1]-4,nc,30);
  const a1=ap(t,8,'imposto',.5),a2=ap(t,8,'cem',.5);fade(g,a1,()=>calPage(g,1260,430,'1746','COMEÇA'));fade(g,a2,()=>{arrow(g,1430,430,1500,430,GOLD2,8);calPage(g,1670,430,'1845','ACABA')});
  chip(g,1460,700,'COBRADO PELO PESO',ap(t,8,'peso'));chip(g,1460,820,'DUROU 100 ANOS',a2)},.6),
 // 9 — taças menores e leves; o air twist (espiral de ar na haste)
 (t,c,s)=>C3(t,s,tavern,'O AIR TWIST',g=>{const tw=ap(t,9,'twist',.8),z=lerp(1.9,2.35,easeIO(seg(t,T[s],T[s+1])));
  g.save();g.translate(560,870);g.scale(z/2.35,z/2.35);englishGlass(g,0,0,2.35,t,{twist:tw,thin:0,lv:.25});g.restore();
  chip(g,1380,330,'MENORES E MAIS LEVES',ap(t,9,'leves'));chip(g,1380,450,'AIR TWIST',ap(t,9,'twist'));chip(g,1380,570,'BOLHA DE AR TORCIDA',ap(t,9,'torcida'));chip(g,1380,690,'SACA-ROLHAS DE LUZ',ap(t,9,'saca'))},.62),
 // 10 — bar: Claus Riedel, 1958, a taça lisa; o Sommelier ergue a taça pela haste
 (t,c,s)=>sommGlass(t,c,s,{gest:[[0,'rest'],[3.6,'point'],[6.5,'rest']],glass:t=>{const u=ease(seg(t,wt(10,'mostra')-.3,wt(10,'mostra')+.5));return {p:[lerp(1110,1150,u),lerp(770,560,u)],z:lerp(50,100,u),sc:1.3}},
  chips:[['1958 · CLAUS RIEDEL',1500,300,wt(10,'riedel')],['LISA, FINA, SEM ENFEITE',1500,420,wt(10,'lisa')],['SÓ O VINHO!',1500,540,wt(10,'aparecendo')]],face:t=>({brow:.5,mouth:.6})}),
 // 11 — uma taça para cada uva: ciência ou marketing?
 (t,c,s)=>C3(t,s,barWall,'UMA TAÇA PARA CADA UVA',g=>{glassRow(g,960,700,1.7,ap(t,11,'diferente',1.2));chip(g,640,820,'CIÊNCIA?',ap(t,11,'ciência'));chip(g,1280,820,'MARKETING?',ap(t,11,'marketing'))},.6),
 // 12 — o mito do mapa da língua
 (t,c,s)=>C3(t,s,barWall,'O MITO DA LÍNGUA',g=>{const al=ap(t,12,'toda',.8);tongueMap(g,620,560,1.15,1,al);stamp(g,620,520,'LENDA!',ease(seg(t,wt(12,'lenda!')-.15,wt(12,'lenda!')+.25))*(1-al*.7));
  chip(g,1380,360,'"UM PONTO CERTO DA LÍNGUA"',ap(t,12,'ponto'));chip(g,1380,520,'É LENDA!',ap(t,12,'lenda!'));chip(g,1380,680,'O GOSTO: NA LÍNGUA TODA',ap(t,12,'toda'))},.6),
 // 13 — o cheiro muda: estudo alemão com 181 pessoas
 (t,c,s)=>C3(t,s,barWall,'O CHEIRO MUDA!',g=>{glassW(g,470,800,2.2,.38,'#6E1630');straightCup(g,800,800,1.5,.4);
  chip(g,1380,330,'ESTUDO ALEMÃO',ap(t,13,'alemão'));chip(g,1380,440,'181 PESSOAS',ap(t,13,'oitenta'));
  const u=ease(seg(t,wt(13,'mudou')-.2,wt(13,'mudou')+.9));fade(g,ap(t,13,'formato',.4),()=>{bar(g,1250,820,130,40+180*u,'#8E1B3A','TAÇA','');bar(g,1510,820,130,40+90*u,'#4A2030','COPO','');goldText(g,'NOTA DO AROMA',1380,535,34,'Cinzel',700)})},.62),
 // 14 — Japão: câmera do vapor de álcool; a 13 °C o álcool faz um anel na borda e o meio fica livre
 (t,c,s)=>C3(t,s,barWall,'A CÂMERA DO ÁLCOOL',g=>{const r=ap(t,14,'anel',1);topView(g,700,540,230,r,t);thermo(g,1130,760,360,.36*ap(t,14,'treze',.6),ap(t,14,'treze')>.5?'13 °C':'');
  chip(g,1520,330,'JAPÃO',ap(t,14,'japão'));chip(g,1520,440,'VAPOR DO ÁLCOOL',ap(t,14,'vapor'));chip(g,1520,700,'ANEL NA BORDA',ap(t,14,'borda'));chip(g,1520,810,'MEIO LIVRE = AROMA',ap(t,14,'meio'))},.62),
 // 15 — a 24 °C o anel some: aqui entra a haste
 (t,c,s)=>C3(t,s,barWall,'E A 24 °C?',g=>{const h=ease(seg(t,wt(15,'vinte')-.2,wt(15,'graus')+.3)),r=1-ease(seg(t,wt(15,'graus'),wt(15,'sumiu')+.3));topView(g,700,540,230,r,t);thermo(g,1130,760,360,lerp(.36,.66,h),h>.5?'24 °C':'13 °C');
  chip(g,1520,330,'O ANEL SUMIU!',ap(t,15,'sumiu'));chip(g,1520,810,'AQUI ENTRA A HASTE!',ap(t,15,'haste'))},.62),
 // 16 — a mão (de um cliente) no bojo: esquenta o vinho e deixa digital
 (t,c,s)=>C3(t,s,barWall,'PEGANDO PELO BOJO',g=>{bowlGrip(g,620,840,2.6,ap(t,16,'esquenta',1.6),ap(t,16,'digital',.6),t);
  chip(g,1460,320,'SUA MÃO: 36 °C',ap(t,16,'trinta'));chip(g,1460,440,'BOJO = A PARTE REDONDA',ap(t,16,'redonda'));chip(g,1460,560,'ESQUENTA O VINHO',ap(t,16,'esquenta'));chip(g,1460,680,'DIGITAL NO VIDRO',ap(t,16,'digital'))},.6),
 // 17 — pela haste: fresco, limpo, dá pra girar; o giro solta o aroma
 (t,c,s)=>sommGlass(t,c,s,{gest:[[0,'rest'],[2.2,'open'],[5.5,'rest']],glass:t=>{const u=ease(seg(t,T[s]+.2,T[s]+.9)),sw=kf(t,[[T[s],0],[wt(17,'girar')-.2,0],[wt(17,'girar')+.3,1],[wt(17,'aroma,')+.4,1],[wt(17,'aroma,')+.9,0]]);return {p:[lerp(1110,1150,u),lerp(770,580,u)],z:lerp(50,100,u),sc:1.3,swirl:sw}},
  aroma:t=>ap(t,17,'solta',.6)*(1-ap(t,17,'nariz',.8)*.3),chips:[['VINHO FRESCO',1500,300,wt(17,'fresco')],['VIDRO LIMPO',1500,400,wt(17,'limpo')],['GIRE: SOLTA O AROMA',1500,500,wt(17,'giro')],['GUARDA O CHEIRO',1500,600,wt(17,'guarda')]],face:t=>({brow:.4,mouth:.6})}),
 // 18 — Brasil: o copo americano (1947), sem haste, no MoMA
 (t,c,s)=>C3(t,s,boteco,'E NO BRASIL?',g=>{botecoFront(g);copoAmericano(g,680,800,2.2,.55);chip(g,680,330,'NEM TEM HASTE!',ap(t,18,'nem'));
  chip(g,1400,400,'COPO AMERICANO',ap(t,18,'americano'));plq(g,1400,560,360,140,'1947',72,ap(t,18,'quarenta',.5));plq(g,1400,730,620,130,'MoMA · NOVA YORK',46,ap(t,18,'york',.5))},.55),
 (t,c,s)=>finalTable(t,s),
 (t,c,s)=>ctaScene(t,c,s),
 null];
function finalTable(t,s){veil(null,t,museum,.8);const g=layer('g',null);goldText(g,'POR QUE A TAÇA TEM HASTE?',960,130,60);ornament(g,960,205,600);blit(ctx,L.g,0,seg(t,T[s],T[s]+.5));
 const C=[['kylix','GRÉCIA','o pé da kylix','','grego',0],['venice','MURANO','a haste alta','','murano',0],['eng','INGLATERRA','cristal e imposto','pelo peso','imposto',0],['row','RIEDEL','uma taça','por uva','imposto',1.1],['stem','PELA HASTE','vinho fresco,','sem digital','fresco',0]];
 C.forEach(([ic,n,d,d2,w,dl],i)=>{const cx=220+i*370,ta=wt(19,w)-.15+dl,c=layer('c'+i,null);plaque(c,cx,600,330,560);
  if(ic=='kylix')kylix(c,cx,640,.55,.6,1);else if(ic=='venice')veniceGlass(c,cx,730,.95,t);else if(ic=='eng'){englishGlass(c,cx-30,730,.95,t,{knop:1,lv:.4});coinStack(c,cx+90,720,4,24)}
  else if(ic=='row'){glassW(c,cx-70,730,1.1,.4,'#6E1630');glassW(c,cx,730,1.2,.5,'#E8C870',true);glassW(c,cx+75,730,1.0,.4,'#6E1630')}else{glassW(c,cx,730,1.75,.4,'#6E1630');gripHand(c,cx,730-45,0,C10,.8)}
  goldText(c,n,cx,780,34,'Cinzel',700);const a=seg(t,ta,ta+.45);blit(ctx,L['c'+i],0,a);serif(d,cx,825,30,`rgba(243,230,200,${a})`);if(d2)serif(d2,cx,858,30,`rgba(243,230,200,${a})`)})}
function ctaScene(t,cam,s){sommGlass(t,cam,s,{gest:[[0,'waveL'],[2.4,'open'],[4.6,'rest']],glass:t=>({p:[1150,600],z:95,sc:1.3}),face:t=>({mouth:.7,brow:.5})});
 const a=easeIO(seg(t,T[s]+.4,T[s]+1)),g=layer('g',null);g.save();g.globalAlpha=a;g.fillStyle='#B0122E';g.beginPath();g.roundRect(120,120,520,110,55);g.fill();g.strokeStyle=GOLD2;g.lineWidth=5;g.stroke();g.restore();
 g.save();g.globalAlpha=a;goldText(g,'INSCREVA-SE',380,176,52,'Cinzel',900);g.restore();chip(g,380,300,'HASTE OU BOJO?',ap(t,20,'bojo'));blit(ctx,L.g,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=a;ctx.drawImage(LOGO,1640,40,230,220);ctx.restore()}}
const TALKS=[10,17,20];
FILM={dur:T[T.length-1],cuts:T.map(v=>Math.round(v*30)),fadeIn:0,fadeOut:.8,warm(){return .4},
 cam(s,u,t){if(TALKS.includes(s)){const k=TALKS.indexOf(s)%3;return [{x:lerp(950,975,u),y:lerp(560,545,u),z:lerp(1.18,1.28,easeIO(u)),b:[6,0,0]},{x:lerp(930,945,u),y:lerp(545,530,u),z:lerp(1.2,1.32,easeIO(u)),b:[8,0,0]},{x:lerp(1000,985,u),y:550,z:lerp(1.2,1.3,u),b:[7,0,0]}][k]}return {x:960,y:540,z:1,b:[10,0,0]}},
 draw(t,cam,s,u){if(s==0){thumbFrame(t);return}if(s==21){photo(IMG.logo,t,T[21],T[22],1,1.05);return}SC[s](t,cam,s)},
 plants(){return {}}};
(function(){const DISS={1:.6},xf=mk(),xz=mk(),CARD=[1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,18,19],draw0=FILM.draw,cam0=FILM.cam;for(let s=2;s<22;s++)DISS[s]=.45;for(const s of [2,3,10])DISS[s]=.55;
 FILM.draw=(t,c,s,u)=>{const d=DISS[s],a=d?1-easeIO(seg(t,T[s],T[s]+d)):0;if(a>0){draw0(t,cam0(s-1,1,t),s-1,1);const x=xf.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0)}
  draw0(t,c,s,u);if(CARD.includes(s)){const k=1+.035*easeIO(u),x=xz.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0);ctx.save();ctx.setTransform(k,0,0,k,W/2*(1-k),H/2*(1-k));ctx.drawImage(xz,0,0);ctx.restore()}
  if(a>0)blit(ctx,xf,0,a);if(s!=0&&s!=20&&s!=21)watermark();if(s!=19&&s!=21)karaoke(t)}})();
// som
for(let s=1;s<21;s++)say(T[s],'whoosh');
for(const [i,w] of [[2,'kylix'],[3,'romanos'],[4,'luxo'],[5,'noventa'],[6,'cristallo'],[7,'chumbo'],[9,'twist'],[10,'riedel'],[13,'oitenta'],[14,'anel'],[15,'sumiu'],[16,'digital'],[18,'americano']])say(wt(i,w),'tag');
say(wt(8,'imposto'),'coins');say(wt(8,'peso'),'coins');say(wt(10,'mostra'),'lift');say(wt(17,'girar'),'lift');say(wt(18,'quarenta'),'glassdown');
for(const [w,d] of [['grego',0],['murano',0],['imposto',0],['imposto',1.1],['fresco',0]])say(wt(19,w)-.15+d,'line');
