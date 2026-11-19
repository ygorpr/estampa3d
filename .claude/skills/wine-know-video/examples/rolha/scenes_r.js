// ---------- cenas do vídeo "E antes da rolha?" (cena i = fala i) ----------
function watermark(){if(!LOGO.complete)return;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.075;ctx.filter='blur(.6px)';ctx.drawImage(LOGO,960-230,720-221,460,442);ctx.restore()}
const CEL_={set:cellarWall,barrels:[[260,1],[1680,1]]};
const ap=(t,i,w,d=.35)=>ease(seg(t,wt(i,w)-.1,wt(i,w)-.1+d));
function card(t,s,set,title,dim=.72){veil(null,t,set,dim);const g=layer('g',null);goldText(g,title,960,165,Math.min(62,Math.floor(1500/title.length)));ornament(g,960,232,560);return g}
const done=(g,t,s)=>blit(ctx,L.g,0,seg(t,T[s],T[s]+.4));
const fade=(g,a,fn)=>{if(a<=0)return;g.save();g.globalAlpha=a;fn();g.restore()};
// 3 — o que é uma ânfora
function amphoraCard(t,s){const g=card(t,s,rome,'O QUE É UMA ÂNFORA?',.62);const u=ease(seg(t,T[s]+.2,T[s]+.8));fade(g,u,()=>amphora(g,960,880,1.35));
 chip(g,560,420,'BARRO',ap(t,3,'barro'));chip(g,1380,360,'2 ALÇAS',ap(t,3,'alças'));chip(g,1360,800,'FUNDO PONTUDO',ap(t,3,'pontudo'));done(g,t,s)}
// 4 — fechada com cortiça
function corkAmphora(t,s){const g=card(t,s,rome,'FECHADA COM CORTIÇA',.62);const c=easeIO(seg(t,wt(4,'cortiça')-.4,wt(4,'cortiça')+.5));amphora(g,820,880,1.35,{cork:c});
 chip(g,1360,420,'CORTIÇA!',ap(t,4,'cortiça'));chip(g,1360,560,'A MESMA DA ROLHA',ap(t,4,'mesma'));done(g,t,s)}
// 5 — gesso / resina por cima
function sealCard(t,s){const g=card(t,s,rome,'E POR CIMA...',.62);const a=easeIO(seg(t,wt(5,'gesso')-.3,wt(5,'gesso')+.6));amphora(g,820,880,1.35,{cork:1,seal:a});
 chip(g,1380,360,'GESSO',ap(t,5,'gesso'));chip(g,1380,480,'OU RESINA: A COLA DO PINHEIRO',ap(t,5,'resina'));chip(g,1380,600,'O AR NÃO ENTRA',ap(t,5,'ar'));done(g,t,s)}
// 6 — mil anos sem cortiça (linha do tempo)
function timelineCard(t,s){const g=card(t,s,rome,'A CORTIÇA SUMIU',.74);const y=560,x0=300,x1=1620,u=easeIO(seg(t,wt(6,'acabou')-.2,wt(6,'mil')+.6));
 g.strokeStyle=GOLD;g.lineWidth=8;g.beginPath();g.moveTo(x0,y);g.lineTo(x0+(x1-x0)*Math.max(.05,u),y);g.stroke();
 fade(g,1,()=>{amphora(g,x0,y-40,.42,{cork:1})});g.fillStyle=GOLD2;g.beginPath();g.arc(x0,y,16,0,7);g.fill();goldText(g,'ROMA',x0,y+70,40,'Cinzel',700);
 if(u>.2){g.save();g.globalAlpha=Math.min(1,(u-.2)*3);g.fillStyle='rgba(140,120,110,.55)';g.fillRect(x0+80,y-30,(x1-x0-260)*Math.min(1,u),60);g.restore()}
 chip(g,960,y-130,'UNS 1.000 ANOS SEM CORTIÇA',ap(t,6,'mil'));fade(g,ease(seg(t,wt(6,'mil')+.6,wt(6,'mil')+1.1)),()=>{g.fillStyle=GOLD2;g.beginPath();g.arc(x1,y,16,0,7);g.fill();goldText(g,'1600',x1,y+70,40,'Cinzel',700)});done(g,t,s)}
// 7 — o improviso: pino de madeira com pano e azeite
function pegCard(t,s){const g=card(t,s,tavern,'O IMPROVISO',.7);fade(g,ap(t,7,'pino',.5),()=>peg(g,760,560,2.4));
 chip(g,1300,420,'PINO DE MADEIRA',ap(t,7,'pino'));chip(g,1300,560,'PANO COM AZEITE',ap(t,7,'azeite'));done(g,t,s)}
// 8 — a tampa pulava
function popCard(t,s){const g=card(t,s,tavern,'NÃO SEGURAVA NADA',.7);const tp=wt(8,'pulando')-.3,u=easeIO(seg(t,tp,tp+.7));oldBottle(g,860,860,1.9,'white');
 peg(g,860+u*330,860-1.9*250-30-u*110+u*u*60,.9,u*3);fade(g,ease(seg(t,tp,tp+.25))*(1-seg(t,tp+1,tp+1.6)),()=>goldText(g,'POP!',1240,380,110));
 chip(g,560,420,'VINHO COM GÁS',ap(t,8,'gás'));done(g,t,s)}
// 9 — o truque italiano: azeite boiando
function oilCard(t,s){const g=card(t,s,tavern,'O TRUQUE ITALIANO',.7);const o=easeIO(seg(t,wt(9,'azeite')-.2,wt(9,'azeite')+.8));fiasco(g,760,880,1.7,o);
 chip(g,1320,400,'AZEITE POR CIMA DO VINHO',ap(t,9,'azeite'));chip(g,1320,540,'O AZEITE BOIA...',ap(t,9,'boiava'));chip(g,1320,680,'...E VIRA A TAMPA!',ap(t,9,'tampa'));done(g,t,s)}
// 11 — tampa de vidro dos ricos
function glassStopCard(t,s){const g=card(t,s,tavern,'TAMPA DE VIDRO',.7);const sh=.5+.5*Math.sin(t*4);oldBottle(g,700,880,1.7,'white');glassStopper(g,700,880-1.7*262,.9,sh);
 chip(g,1300,400,'SÓ PARA OS RICOS',ap(t,11,'ricos'));chip(g,1300,540,'LIXADA UMA POR UMA',ap(t,11,'lixada'));chip(g,1300,680,'MUITO CARA',ap(t,11,'cara'));done(g,t,s)}
// 13 — a cortiça voltou
function corkBackCard(t,s){const g=card(t,s,cellarWall,'A CORTIÇA VOLTOU!',.72);const c=easeIO(seg(t,wt(13,'rolha')-.3,wt(13,'gargalo')+.3));
 bottleS(g,[960,880],1.9,'red');g.save();g.fillStyle=CORK;const ny=880-1.9*286;g.beginPath();g.roundRect(960-19,ny-120*(1-c)-10,38,60,8);g.fill();g.restore();
 chip(g,560,420,'DOS ROMANOS...',ap(t,13,'romanos'));chip(g,1380,420,'...AGORA EM ROLHA',ap(t,13,'rolha'));done(g,t,s)}
// 14 — Dom Pérignon
function monkCard(t,s){const g=card(t,s,cellarWall,'DOM PÉRIGNON',.72);fade(g,ease(seg(t,T[s]+.2,T[s]+.7)),()=>monk(g,760,880,1.5));
 chip(g,1320,420,'"INVENTOU A ROLHA"?',ap(t,14,'inventou'));stamp(g,1320,660,'SEM PROVA',ease(seg(t,wt(14,'prova')-.15,wt(14,'prova')+.25)));done(g,t,s)}
// 16 — ferramenta de soldado
function musketCard(t,s){const g=card(t,s,cellarWall,'FERRAMENTA DE SOLDADO',.74);fade(g,ap(t,16,'ferramenta',.5),()=>musket(g,900,500,1.5));
 const r=easeIO(seg(t,wt(16,'espiral')-.2,wt(16,'espiral')+.6));fade(g,r,()=>spiralRod(g,420,700,900*r,1.2,9));chip(g,960,820,'LIMPAVA O CANO DA ESPINGARDA',ap(t,16,'cano'));done(g,t,s)}
// 17 — nasce o saca-rolhas
function screwCard(t,s){const g=card(t,s,cellarWall,'NASCE O SACA-ROLHAS',.74);fade(g,ap(t,17,'adaptada',.5),()=>corkscrew(g,720,420,1.6));
 fade(g,ap(t,17,'mil',.5),()=>{plaque(g,1340,520,420,240);goldText(g,'1795',1340,505,92)});chip(g,1340,720,'PATENTE NA INGLATERRA',ap(t,17,'patente'));done(g,t,s)}
// 19 — Robert Hooke, 1665
function hookeCard(t,s){const g=card(t,s,cellarWall,'1665 · ROBERT HOOKE',.74);microscope(g,560,860,1.5);const u=easeIO(seg(t,wt(19,'caixinhas')-.6,wt(19,'caixinhas')+.8));
 if(t>wt(19,'perto')-.3)cellView(g,1260,560,260,u);chip(g,1260,880-20,'"CÉLULAS"',ap(t,19,'células'));chip(g,560,330,'UM CIENTISTA INGLÊS',ap(t,19,'cientista'));done(g,t,s)}
// 20 — a palavra célula + ar
function cellCard(t,s){const g=card(t,s,cellarWall,'A PALAVRA "CÉLULA"',.74);const air=easeIO(seg(t,wt(20,'ar,')-.3,wt(20,'ar,')+.6));cellView(g,700,580,280,1,air);
 bigCork(g,1340,560,2.4);chip(g,1340,360,'NASCEU NA ROLHA!',ap(t,20,'rolha'));chip(g,1340,800,'MAIS DE 50% É AR',ap(t,20,'metade'));done(g,t,s)}
// 21 — o truque: não estufa
function squeezeCard(t,s){const g=card(t,s,cellarWall,'O TRUQUE DA CORTIÇA',.74);const p=.5-.5*Math.cos(Math.max(0,t-wt(21,'aperta'))*3);
 squeeze(g,640,700,'CORTIÇA',0,p,CORK);squeeze(g,1280,700,'BORRACHA',1,p,'#3A3A40');chip(g,640,330,'NÃO ESTUFA',ap(t,21,'estufa'));chip(g,1280,330,'ESTUFA PRO LADO',ap(t,21,'estufa'));
 chip(g,960,500,'ENTRA JUSTINHA',ap(t,21,'justinha'));done(g,t,s)}
// 22 — o sobreiro
function oakCard(t,s){const g=card(t,s,montado,'O SOBREIRO',.35);
 const st=easeIO(seg(t,wt(22,'casca')-.3,wt(22,'casca')+1.2));corkOak(g,760,900,1.05,st,t);
 chip(g,1360,380,'A ÁRVORE NÃO É CORTADA',ap(t,22,'cortado'));chip(g,1360,520,'TIRAM SÓ A CASCA',ap(t,22,'casca'));chip(g,1360,660,'A CADA 9 ANOS',ap(t,22,'nove'));done(g,t,s)}
// 23 — o Sobreiro Assobiador
function whistlerCard(t,s){const g=card(t,s,montado,'O SOBREIRO ASSOBIADOR',.3);
 corkOak(g,820,960,1.0,.45,t,1);chip(g,1420,420,'PORTUGAL',ap(t,23,'portugal'));chip(g,1420,560,'+100.000 ROLHAS',ap(t,23,'cem'));done(g,t,s)}
// 24 — tabela final (sem legenda)
function finalTable(t,s){veil(null,t,cellarWall,.78);const g=layer('g',null);goldText(g,'E ANTES DA ROLHA?',960,130,76);ornament(g,960,205,600);blit(ctx,L.g,0,seg(t,T[s],T[s]+.5));
 const C=[['amph','ROMA','já usava cortiça','romanos'],['peg','MIL ANOS','madeira e azeite','mil'],['bottle','ANOS 1600','a rolha voltou','voltou'],['screw','1795','o saca-rolhas','voltou'],['cell','1665','"célula" na cortiça','hoje']];
 C.forEach(([ic,n,d,w],i)=>{const cx=220+i*370,ta=wt(24,w)-.15+(i==3?.5:0),c=layer('c'+i,null);plaque(c,cx,600,330,560);
  if(ic=='amph')amphora(c,cx,690,.6,{cork:1});else if(ic=='peg')peg(c,cx,560,1.3);else if(ic=='bottle')bottleS(c,[cx,680],.9,'red');else if(ic=='screw')corkscrew(c,cx,470,.75);else cellView(c,cx,560,110,1);
  goldText(c,n,cx,768,34,'Cinzel',700);blit(ctx,L['c'+i],0,seg(t,ta,ta+.45));serif(d,cx,822,34,`rgba(243,230,200,${seg(t,ta,ta+.45)})`)})}
// 25 — CTA
function ctaScene(t,cam,s){talkScene(t,cam,s,Object.assign({gest:[[0,'wave'],[2.2,'open'],[4.2,'rest']],bottles:[['red',1100]],face:t=>({mouth:.7,brow:.5})},CEL_));
 const a=easeIO(seg(t,T[s]+.4,T[s]+1)),g=layer('g',null);g.save();g.globalAlpha=a;g.fillStyle='#B0122E';g.beginPath();g.roundRect(120,120,520,110,55);g.fill();g.strokeStyle=GOLD2;g.lineWidth=5;g.stroke();g.restore();
 g.save();g.globalAlpha=a;goldText(g,'INSCREVA-SE',380,176,52,'Cinzel',900);g.restore();chip(g,380,300,'QUAL CURIOSIDADE?',ap(t,25,'curiosidade'));blit(ctx,L.g,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=a;ctx.drawImage(LOGO,1640,40,230,220);ctx.restore()}}
const S_=(o)=>(t,c,s)=>talkScene(t,c,s,o);
const RM={set:rome,front:cellarTable},WK={set:workshop,front:cellarTable},TV={set:tavern,front:cellarTable};
const SC=[null,
 S_(Object.assign({bottles:[['red',1100]],gest:[[0,'open'],[3,'point']],chips:[['ROMANOS',430,300,wt(1,'romanos')],['MONGES',430,420,wt(1,'monges')],['ESPINGARDA ANTIGA',1480,360,wt(1,'espingarda')]],face:t=>({brow:.7,mouth:.6})},CEL_)),
 S_(Object.assign({gest:[[0,'thinking'],[2.6,'open']],chips:[['ROMA · HÁ 2.000 ANOS',1460,300,wt(2,'roma')],['SEM GARRAFA DE VIDRO',1460,420,wt(2,'garrafa')]],face:t=>({look:-.3,brow:.6})},RM)),
 (t,c,s)=>amphoraCard(t,s),
 (t,c,s)=>corkAmphora(t,s),
 (t,c,s)=>sealCard(t,s),
 (t,c,s)=>timelineCard(t,s),
 (t,c,s)=>pegCard(t,s),
 (t,c,s)=>popCard(t,s),
 (t,c,s)=>oilCard(t,s),
 S_(Object.assign({gest:[[0,'rest'],[.3,'bottleUp']],bottleHeld:'white',chips:[['CUIDADO COM O AZEITE!',960,260,wt(10,'cuidado')]],face:t=>({mouth:.85,laugh:t>T[10]+.1&&t<T[10]+1.6?1:0,brow:.4})},TV)),
 (t,c,s)=>glassStopCard(t,s),
 S_(Object.assign({gest:[[0,'open'],[3,'point']],chips:[['INGLATERRA · ANOS 1600',1460,300,wt(12,'ingleses')],['VIDRO GROSSO E FORTE',1460,420,wt(12,'forte')]],face:t=>({brow:.6,mouth:.6})},WK)),
 (t,c,s)=>corkBackCard(t,s),
 (t,c,s)=>monkCard(t,s),
 S_(Object.assign({gest:[[0,'rest'],[.4,'bottleUp']],bottleHeld:'red',chips:[['E COMO TIRAR?',1480,330,wt(15,'tirar')]],face:t=>({brow:.9,look:.3,mouth:.5})},CEL_)),
 (t,c,s)=>musketCard(t,s),
 (t,c,s)=>screwCard(t,s),
 S_(Object.assign({bottles:[['red',1100]],gest:[[0,'thinking'],[2.4,'point']],chips:[['A RESPOSTA: O MICROSCÓPIO',960,260,wt(18,'microscópio')]],face:t=>({brow:.8,mouth:.5})},CEL_)),
 (t,c,s)=>hookeCard(t,s),
 (t,c,s)=>cellCard(t,s),
 (t,c,s)=>squeezeCard(t,s),
 (t,c,s)=>oakCard(t,s),
 (t,c,s)=>whistlerCard(t,s),
 (t,c,s)=>finalTable(t,s),
 (t,c,s)=>ctaScene(t,c,s),
 null];
const TALKS=[1,2,10,12,15,18,25];
FILM={dur:T[T.length-1],cuts:T.map(v=>Math.round(v*30)),fadeIn:0,fadeOut:.8,warm(){return .4},
 cam(s,u,t){if(TALKS.includes(s)){const k=TALKS.indexOf(s)%3;return [{x:lerp(950,975,u),y:lerp(560,545,u),z:lerp(1.18,1.28,easeIO(u)),b:[6,0,0]},{x:lerp(930,915,u),y:lerp(545,520,u),z:lerp(1.42,1.62,easeIO(u)),b:[8,0,0]},{x:lerp(1000,985,u),y:550,z:lerp(1.3,1.4,u),b:[7,0,0]}][k]}return {x:960,y:540,z:1,b:[10,0,0]}},
 draw(t,cam,s,u){if(s==0){thumbFrame(t);return}if(s==26){photo(IMG.logo,t,T[26],T[27],1,1.05);return}SC[s](t,cam,s)},
 plants(){return {}}};
(function(){const DISS={1:.6},xf=mk(),xz=mk(),CARD=[3,4,5,6,7,8,9,11,13,14,16,17,19,20,21,22,23,24],draw0=FILM.draw,cam0=FILM.cam;for(let s=2;s<26;s++)DISS[s]=.45;
 FILM.draw=(t,c,s,u)=>{const d=DISS[s],a=d?1-easeIO(seg(t,T[s],T[s]+d)):0;if(a>0){draw0(t,cam0(s-1,1,t),s-1,1);const x=xf.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0)}
  draw0(t,c,s,u);if(CARD.includes(s)){const k=1+.035*easeIO(u),x=xz.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0);ctx.save();ctx.setTransform(k,0,0,k,W/2*(1-k),H/2*(1-k));ctx.drawImage(xz,0,0);ctx.restore()}
  if(a>0)blit(ctx,xf,0,a);if(s!=0&&s!=25&&s!=26)watermark();if(s!=24&&s!=26)karaoke(t)}})();
// som
for(let s=1;s<26;s++)say(T[s],'whoosh');
for(const [i,w] of [[3,'barro'],[3,'alças'],[3,'pontudo'],[5,'gesso'],[6,'mil'],[9,'tampa'],[11,'cara'],[17,'mil'],[19,'células'],[20,'metade'],[22,'nove'],[23,'cem']])say(wt(i,w),'tag');
say(wt(4,'cortiça'),'corkin');say(wt(13,'rolha'),'corkin');say(wt(8,'pulando')-.2,'lift');say(wt(14,'prova'),'bottledown');
for(const w of ['romanos','mil','voltou','hoje'])say(wt(24,w)-.15,'line');
