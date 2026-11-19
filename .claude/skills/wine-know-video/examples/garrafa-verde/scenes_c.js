// ---------- cenas do vídeo "Por que a garrafa é verde ou escura?" — cena i = fala i ----------
function watermark(){if(!LOGO.complete)return;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.075;ctx.filter='blur(.6px)';ctx.drawImage(LOGO,960-230,720-221,460,442);ctx.restore()}
const CEL_={set:cellarWall,barrels:[[260,1],[1680,1]]};
const ap=(t,i,w,d=.35)=>ease(seg(t,wt(i,w)-.1,wt(i,w)-.1+d));
function card(t,s,set,title,dim=.72){veil(null,t,set,dim);const g=layer('g',null);goldText(g,title,960,165,Math.min(62,Math.floor(1500/title.length)));ornament(g,960,232,560);return g}
const done=(g,t,s)=>blit(ctx,L.g,0,seg(t,T[s],T[s]+.4));
const fade=(g,a,fn)=>{if(a<=0)return;g.save();g.globalAlpha=a;fn();g.restore()};
const C3=(t,s,set,title,fn,dim)=>{const g=card(t,s,set,title,dim);fn(g);done(g,t,s)};
const mixC=(a,b,u)=>{const p=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)),A=p(a),B=p(b);return '#'+A.map((v,i)=>Math.round(v+(B[i]-v)*u).toString(16).padStart(2,'0')).join('')};
const SC=[null,
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['red',1100]],gest:[[0,'open'],[3,'point']],chips:[['AREIA',430,300,wt(1,'areia')],['UM INIMIGO INVISÍVEL',560,420,wt(1,'inimigo')],['UM IMPERADOR',1500,360,wt(1,'imperador')]],face:t=>({brow:.7,mouth:.6})},CEL_)),
 (t,c,s)=>C3(t,s,workshop,'VIDRO É FEITO DE AREIA',g=>{sandPile(g,520,800,380,0);fade(g,ap(t,2,'forno',.5),()=>{arrow(g,760,640,900,640);blowpipe(g,1060,640,.35)});fade(g,ap(t,2,'vira',.5),()=>bottleS(g,[1520,820],1.4,'flint'));
  chip(g,520,420,'AREIA',ap(t,2,'areia'));chip(g,1500,400,'VIRA VIDRO!',ap(t,2,'vira'))},.62),
 (t,c,s)=>C3(t,s,workshop,'O FERRO DA AREIA',g=>{sandPile(g,560,800,420,Math.round(30*ap(t,3,'ferro',.8)));const u=easeIO(seg(t,wt(3,'esverdeado')-.6,wt(3,'esverdeado')+.6));oldBottle(g,1340,820,1.7,mixC('#C8D4CC','#2E5A3A',u));
  chip(g,560,420,'UM POUQUINHO DE FERRO',ap(t,3,'ferro'));chip(g,1340,330,'VIDRO ESVERDEADO',ap(t,3,'esverdeado'))},.62),
 (t,c,s)=>C3(t,s,workshop,'NINGUÉM ESCOLHEU O VERDE',g=>{for(const [x,k] of [[640,1.3],[960,1.5],[1280,1.2]])oldBottle(g,x,820,k,'#2E5A3A');stamp(g,960,420,'DE FÁBRICA',ease(seg(t,wt(4,'fábrica')-.15,wt(4,'fábrica')+.25)))},.62),
 (t,c,s)=>talkScene(t,c,s,{set:workshop,front:cellarTable,gest:[[0,'thinking'],[3.4,'open']],chips:[['INGLATERRA · ANOS 1600',1480,300,wt(5,'inglaterra')],['FORNO A CARVÃO',1560,420,wt(5,'carvão')],['QUASE PRETO',1560,540,wt(5,'preto')]],face:t=>({look:-.3,brow:.6})}),
 (t,c,s)=>C3(t,s,tavern,'A "GARRAFA PRETA"',g=>{const u=easeIO(seg(t,wt(6,'contra')-.2,wt(6,'contra')+.8));fade(g,u,()=>{const gl=g.createRadialGradient(960,560,10,960,560,320);gl.addColorStop(0,'rgba(255,200,120,.75)');gl.addColorStop(1,'rgba(255,200,120,0)');g.fillStyle=gl;g.fillRect(640,240,640,640);candle(g,1180,830,90,t)});
  oldBottle(g,960,840,2,mixC('#0C1410','#2C6A40',u));chip(g,560,420,'"GARRAFA PRETA"',ap(t,6,'preta'));chip(g,1400,420,'NA LUZ: VERDE-ESCURA',ap(t,6,'verde-escura'))},.7),
 (t,c,s)=>C3(t,s,workshop,'VIDRO CLARO CUSTAVA MAIS',g=>{sandPile(g,500,800,320,26);sandPile(g,960,800,320,0,'#F2EAD8');goldText(g,'COMUM',500,850,34,'Cinzel',700);goldText(g,'PURA',960,850,34,'Cinzel',700);bottleS(g,[1420,820],1.5,'flint');
  chip(g,960,420,'MAIS TRABALHO',ap(t,7,'trabalho'));chip(g,1420,330,'MAIS CARO',ap(t,7,'caro'))},.62),
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['red',1100]],gest:[[0,'open'],[3.6,'point']],chips:[['O INIMIGO INVISÍVEL...',1460,300,wt(8,'inimigo')],['A LUZ!',1560,420,wt(8,'luz')]],face:t=>({brow:.8,mouth:.6})},CEL_)),
 (t,c,s)=>C3(t,s,marketWall,'A LUZ DO MERCADO',g=>{const pul=.6+.4*Math.sin(t*6);g.fillStyle='#FFF1D6';g.fillRect(560,300,800,16);const gl=g.createLinearGradient(0,316,0,820);gl.addColorStop(0,`rgba(255,240,200,${.45*pul})`);gl.addColorStop(1,'rgba(255,240,200,0)');g.fillStyle=gl;g.beginPath();g.moveTo(560,316);g.lineTo(1360,316);g.lineTo(1260,820);g.lineTo(660,820);g.closePath();g.fill();
  g.fillStyle='#5A2E1C';g.fillRect(420,800,1080,22);for(let i=0;i<4;i++)bottleS(g,[700+i*170,800],1.05,'flint');fade(g,ap(t,9,'sol',.5),()=>sunIcon(g,300,380,50,t));chip(g,1600,420,'REAÇÃO QUÍMICA',ap(t,9,'química'))},.6),
 (t,c,s)=>C3(t,s,cellarWall,'VITAMINA B2 + LUZ',g=>{fade(g,ap(t,10,'vitamina',.5),()=>{g.fillStyle=GOLD;g.beginPath();g.arc(480,560,110,0,7);g.fill();g.fillStyle=WINE;g.font='900 96px Cinzel';g.textAlign='center';g.textBaseline='middle';g.fillText('B2',480,566)});
  fade(g,ap(t,10,'luz',.5),()=>{goldText(g,'+',720,560,110);sunIcon(g,940,560,70,t)});fade(g,ap(t,10,'enxofre',.5),()=>{arrow(g,1100,560,1240,560);g.save();g.translate(1460,560);g.scale(1.6,1.6);cloud(g,0,0,'rgba(200,190,60,.85)','ENXOFRE');g.restore()})},.74),
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['white',1100]],gest:[[0,'thinking'],[4.2,'open']],chips:[['FRANÇA · REGIÃO DO CHAMPANHE',1300,300,wt(11,'champanhe')],['"GOSTO DE LUZ"',1560,420,wt(11,'gosto')],['CHEIRO DE REPOLHO ESTRAGADO',1300,540,wt(11,'repolho')]],face:t=>({brow:t>wt(11,'repolho')?-.4:.6,mouth:t>wt(11,'repolho')?.2:.55,look:.2})},CEL_)),
 (t,c,s)=>C3(t,s,marketWall,'NA PRATELEIRA DO MERCADO',g=>{bottleS(g,[700,820],1.6,'flint');fade(g,ap(t,12,'dois',.5),()=>calPage(g,1260,520,'1–2','DIAS'));chip(g,700,330,'GARRAFA TRANSPARENTE',ap(t,12,'transparente'));stamp(g,960,800-120,'ESTRAGOU',ease(seg(t,wt(12,'estragados')-.15,wt(12,'estragados')+.25)))},.66),
 (t,c,s)=>C3(t,s,marketWall,'TRANSPARENTE x VERDE',g=>{bottleS(g,[440,820],1.4,'flint');bottleS(g,[1480,820],1.4,'white');fade(g,ap(t,13,'semanas',.5),()=>calPage(g,760,560,'3','SEMANAS'));fade(g,ap(t,13,'cinquenta',.5),()=>calPage(g,1160,560,'50','DIAS'));
  chip(g,560,330,'TODOS ESTRAGADOS',ap(t,13,'defeito'));chip(g,1360,330,'AGUENTOU BEM',ap(t,13,'aguentou'))},.66),
 (t,c,s)=>C3(t,s,cellarWall,'QUEM MAIS SOFRE',g=>{const a1=ap(t,14,'brancos',.5);fade(g,a1,()=>{glassW(g,520,780,1.3,.45,'#E9D98A');glassW(g,760,780,1.3,.45,'#E89AA0');glassW(g,1000,780,1.3,.55,'#F2D27A',true)});
  const a2=ap(t,14,'tinto',.5);fade(g,a2,()=>glassW(g,1400,780,1.3,.45,'#5E1428'));fade(g,ap(t,14,'taninos',.5),()=>{g.fillStyle=GOLD;g.beginPath();g.moveTo(1400,330);g.lineTo(1470,360);g.quadraticCurveTo(1470,450,1400,490);g.quadraticCurveTo(1330,450,1330,360);g.closePath();g.fill()});
  chip(g,760,330,'BRANCO · ROSÉ · ESPUMANTE',a1);chip(g,1400,560,'TANINOS PROTEGEM',ap(t,14,'taninos'))},.74),
 (t,c,s)=>C3(t,s,cellarWall,'ÓCULOS ESCUROS PRA GARRAFA',g=>{sunIcon(g,420,380,60,t);bottleS(g,[1000,860],2.2,'red');fade(g,ap(t,15,'óculos',.4),()=>sunglasses(g,1000,860-2.2*120,1.2));chip(g,1500,420,'VIDRO ESCURO = PROTEÇÃO',ap(t,15,'padrão'))},.74),
 (t,c,s)=>C3(t,s,tavern,'E A CERVEJA?',g=>{bottleS(g,[700,820],1.5,'amber');bottleS(g,[1200,820],1.5,'white');chip(g,1200,330,'CHEIRO DE GAMBÁ',ap(t,16,'gambá'));chip(g,700,330,'GARRAFA MARROM',ap(t,16,'marrom'))},.7),
 (t,c,s)=>C3(t,s,cellarWall,'QUANTA LUZ RUIM PASSA?',g=>{const a=easeIO(seg(t,wt(17,'trinta')-.3,wt(17,'trinta')+.8)),b=easeIO(seg(t,wt(17,'menos')-.3,wt(17,'menos')+.6));if(a>0)bar(g,700,780,180,420*a,'rgba(215,228,224,.85)','TRANSPARENTE','35%');if(b>0)bar(g,1220,780,180,Math.max(4,10*b),'#5A2E0E','MARROM ESCURA','< 1%');
  chip(g,1220,330,'O CAMPEÃO',ap(t,17,'campeão'))},.74),
 (t,c,s)=>C3(t,s,marketWall,'E A GARRAFA TRANSPARENTE?',g=>{const sh=.5+.5*Math.sin(t*4);bottleS(g,[960,840],2,'rose');g.fillStyle=`rgba(255,240,220,${.8*sh})`;star(g,1040,420,22*sh);chip(g,1440,420,'PRA MOSTRAR A COR',ap(t,18,'cor'))},.66),
 (t,c,s)=>C3(t,s,(x,t)=>{let gr=x.createLinearGradient(0,0,0,1080);gr.addColorStop(0,'#1A0A20');gr.addColorStop(1,'#5A2A30');x.fillStyle=gr;x.fillRect(-900,-600,W+1800,1900);palace(x,960,900,1.2)},'RÚSSIA · 1876',g=>{fade(g,ap(t,19,'mil',.5),()=>{plaque(g,480,420,360,180);goldText(g,'1876',480,410,80)});chip(g,1440,420,'O CZAR ALEXANDRE II',ap(t,19,'czar'))},.3),
 (t,c,s)=>C3(t,s,cellarWall,'MEDO DE ATENTADO',g=>{bottleS(g,[860,840],2,'flint');const u=Math.sin(t*1.6);magnifier(g,860+u*60,560+Math.cos(t*1.3)*80,1.1);chip(g,1440,420,'ENXERGAR LÁ DENTRO',ap(t,20,'enxergar'));chip(g,1440,560,'NADA ESCONDIDO',ap(t,20,'escondido'))},.74),
 (t,c,s)=>C3(t,s,cellarWall,'O CRISTAL',g=>{bottleS(g,[860,840],2,'flint');cellophane(g,860,840,2,ap(t,21,'celofane',.8));chip(g,1440,420,'TRANSPARENTE ATÉ HOJE',ap(t,21,'hoje'));chip(g,1440,560,'CELOFANE LARANJA',ap(t,21,'celofane'))},.74),
 (t,c,s)=>talkScene(t,c,s,{set:marketWall,front:marketFront,bottles:[['white',760],['red',1100]],gest:[[0,'open'],[3.4,'point']],chips:[['GUARDE LONGE DA LUZ',1460,300,wt(22,'guarde')],['PEGUE A DO FUNDO',1560,420,wt(22,'fundo')]],face:t=>({brow:.5,mouth:.6})}),
 (t,c,s)=>finalTable(t,s),
 (t,c,s)=>ctaScene(t,c,s),
 null];
function finalTable(t,s){veil(null,t,cellarWall,.78);const g=layer('g',null);goldText(g,'POR QUE É VERDE?',960,130,76);ornament(g,960,205,600);blit(ctx,L.g,0,seg(t,T[s],T[s]+.5));
 const C=[['green','VERDE','ferro da areia','verde'],['black','PRETA','carvão inglês','areia'],['sun','LUZ','"gosto de luz"','luz'],['amber','MARROM','protege mais','escuro'],['flint','CLARA','guarde no escuro','cuidado']];
 C.forEach(([ic,n,d,w],i)=>{const cx=220+i*370,ta=wt(23,w)-.15+(i==3?.6:0),c=layer('c'+i,null);plaque(c,cx,600,330,560);
  if(ic=='green')oldBottle(c,cx,680,.9,'#2E5A3A');else if(ic=='black')oldBottle(c,cx,680,.9,'#0C1410');else if(ic=='sun')sunIcon(c,cx,560,50,t);else bottleS(c,[cx,680],.9,ic);
  goldText(c,n,cx,768,34,'Cinzel',700);blit(ctx,L['c'+i],0,seg(t,ta,ta+.45));serif(d,cx,822,34,`rgba(243,230,200,${seg(t,ta,ta+.45)})`)})}
function ctaScene(t,cam,s){talkScene(t,cam,s,Object.assign({gest:[[0,'wave'],[2.2,'open'],[4.2,'rest']],bottles:[['red',1100]],face:t=>({mouth:.7,brow:.5})},CEL_));
 const a=easeIO(seg(t,T[s]+.4,T[s]+1)),g=layer('g',null);g.save();g.globalAlpha=a;g.fillStyle='#B0122E';g.beginPath();g.roundRect(120,120,520,110,55);g.fill();g.strokeStyle=GOLD2;g.lineWidth=5;g.stroke();g.restore();
 g.save();g.globalAlpha=a;goldText(g,'INSCREVA-SE',380,176,52,'Cinzel',900);g.restore();chip(g,380,300,'QUAL CURIOSIDADE?',ap(t,24,'curiosidade'));blit(ctx,L.g,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=a;ctx.drawImage(LOGO,1640,40,230,220);ctx.restore()}}
const TALKS=[1,5,8,11,22,24];
FILM={dur:T[T.length-1],cuts:T.map(v=>Math.round(v*30)),fadeIn:0,fadeOut:.8,warm(){return .4},
 cam(s,u,t){if(TALKS.includes(s)){const k=TALKS.indexOf(s)%3;return [{x:lerp(950,975,u),y:lerp(560,545,u),z:lerp(1.18,1.28,easeIO(u)),b:[6,0,0]},{x:lerp(930,915,u),y:lerp(545,520,u),z:lerp(1.42,1.62,easeIO(u)),b:[8,0,0]},{x:lerp(1000,985,u),y:550,z:lerp(1.3,1.4,u),b:[7,0,0]}][k]}return {x:960,y:540,z:1,b:[10,0,0]}},
 draw(t,cam,s,u){if(s==0){thumbFrame(t);return}if(s==25){photo(IMG.logo,t,T[25],T[26],1,1.05);return}SC[s](t,cam,s)},
 plants(){return {}}};
(function(){const DISS={1:.6},xf=mk(),xz=mk(),CARD=[2,3,4,6,7,9,10,12,13,14,15,16,17,18,19,20,21,23],draw0=FILM.draw,cam0=FILM.cam;for(let s=2;s<25;s++)DISS[s]=.45;
 FILM.draw=(t,c,s,u)=>{const d=DISS[s],a=d?1-easeIO(seg(t,T[s],T[s]+d)):0;if(a>0){draw0(t,cam0(s-1,1,t),s-1,1);const x=xf.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0)}
  draw0(t,c,s,u);if(CARD.includes(s)){const k=1+.035*easeIO(u),x=xz.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0);ctx.save();ctx.setTransform(k,0,0,k,W/2*(1-k),H/2*(1-k));ctx.drawImage(xz,0,0);ctx.restore()}
  if(a>0)blit(ctx,xf,0,a);if(s!=0&&s!=24&&s!=25)watermark();if(s!=23&&s!=25)karaoke(t)}})();
// som
for(let s=1;s<25;s++)say(T[s],'whoosh');
for(const [i,w] of [[2,'vira'],[3,'ferro'],[5,'preto'],[7,'caro'],[10,'enxofre'],[12,'dois'],[13,'semanas'],[13,'cinquenta'],[14,'taninos'],[17,'trinta'],[17,'menos'],[19,'mil'],[21,'celofane']])say(wt(i,w),'tag');
say(wt(11,'repolho'),'yuck');say(wt(4,'fábrica'),'bottledown');say(wt(12,'estragados'),'bottledown');
for(const w of ['verde','areia','luz','escuro','cuidado'])say(wt(23,w)-.15,'line');
