// ---------- cenas do vídeo "Por que 750 ml?" (cena i = fala i) ----------
function watermark(){if(!LOGO.complete)return;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.075;ctx.filter='blur(.6px)';ctx.drawImage(LOGO,960-230,720-221,460,442);ctx.restore()}
const CEL_={set:cellarWall,barrels:[[260,1],[1680,1]]};
const ap=(t,i,w,d=.35)=>ease(seg(t,wt(i,w)-.1,wt(i,w)-.1+d));
function card(t,s,set,title,dim=.72){veil(null,t,set,dim);const g=layer('g',null);goldText(g,title,960,165,Math.min(62,Math.floor(1500/title.length)));ornament(g,960,232,560);return g}
const done=(g,t,s)=>blit(ctx,L.g,0,seg(t,T[s],T[s]+.4));
// 3 — a lenda do sopro
function legendCard(t,s){const g=card(t,s,workshop,'A LENDA DO SOPRO',.6);const u=easeIO(seg(t,T[s]+.3,wt(3,'sopro')+.6));blowpipe(g,880,560,u);
 chip(g,1300,820,'750 ML NUM SOPRO SÓ?',ap(t,3,'sopro'));done(g,t,s)}
// 4 — o pulmão leva bem mais
function lungCard(t,s){const g=card(t,s,workshop,'A CONTA NÃO FECHA',.7);const a1=ap(t,4,'pulmão',.5),a2=ap(t,4,'isso',.5);
 g.save();g.globalAlpha=a1;lungs(g,640,520,1.5);g.restore();priceTag(g,640,800,'3 A 5 LITROS',a1,.9);
 g.save();g.globalAlpha=a2;bottleS(g,[1300,760],1.2,'red');g.restore();priceTag(g,1300,820,'0,75 L',a2,.9);
 goldText(g,'>',970,560,140,'Cinzel',900);done(g,t,s)}
// 5 — o limite era o vidro
function glassCard(t,s){const g=card(t,s,workshop,'O LIMITE ERA O VIDRO',.66);const d=easeIO(seg(t,wt(5,'peso')-.2,wt(5,'peso')+1));blowpipe(g,880,500,.55,d);
 chip(g,1320,330,'PESO DO VIDRO NA PONTA',ap(t,5,'peso'));stamp(g,960,760,'LENDA',ease(seg(t,wt(5,'lenda')-.15,wt(5,'lenda')+.25)));done(g,t,s)}
// 6 — a resposta está no mar
function mapCard(t,s){const g=card(t,s,harbor,'A RESPOSTA ESTÁ NO MAR',.6);seaMap(g,t,seg(t,wt(6,'frança'),T[s+1]));done(g,t,s)}
// 8 — a barrica
function barrelCard(t,s){const g=card(t,s,cellarWall,'A BARRICA DE BORDEAUX',.72);barrelSide(g,960,820,1.7,1);
 g.fillStyle=CREAM;g.font='900 64px Cinzel';g.textAlign='center';g.textBaseline='middle';g.globalAlpha=ap(t,8,'duzentos',.5);g.fillText('225 L',960,600);g.globalAlpha=1;
 chip(g,960,330,'CERCA DE 50 GALÕES INGLESES',ap(t,8,'cinquenta'));done(g,t,s)}
// 9 — faz a conta
function mathCard(t,s){const g=card(t,s,cellarWall,'FAZ A CONTA',.74);const aj=ap(t,9,'galão',.5);g.save();g.globalAlpha=aj;jug(g,420,780,1.1);g.restore();
 const t6=wt(9,'seis');for(let i=0;i<6;i++){const a=ease(seg(t,t6+i*.12,t6+i*.12+.3));if(a>0){g.save();g.globalAlpha=a;bottleS(g,[640+i*72,780],.62,'red');g.restore()}}
 chip(g,820,330,'1 GALÃO = 6 GARRAFAS',ap(t,9,'seis'));const tb=wt(9,'barrica'),n=Math.round(300*easeIO(seg(t,tb,wt(9,'trezentas')+.3)));
 if(t>tb-.3){barrelSide(g,1480,780,.9,ease(seg(t,tb-.3,tb+.1)));goldText(g,String(n),1480,450,110)}
 chip(g,1480,330,'1 BARRICA = 300',ap(t,9,'trezentas'));done(g,t,s)}
// 10 — a caixa de 6 e de 12
function crateCard(t,s){const g=card(t,s,cellarWall,'POR ISSO A CAIXA',.74);const a1=ap(t,10,'seis',.5),a2=ap(t,10,'doze',.5);
 g.save();g.globalAlpha=a1;crate(g,640,780,6,1.3);g.restore();g.save();g.globalAlpha=a2;crate(g,1280,780,12,1.3);g.restore();
 chip(g,640,330,'6 = 1 GALÃO',ap(t,10,'galão'));chip(g,1280,330,'12 = 2 GALÕES',ap(t,10,'dois'));done(g,t,s)}
// 11 — reputed quart, 757 ml
function quartCard(t,s){const g=card(t,s,tavern,'A GARRAFA DOS INGLESES',.68);const u=ap(t,11,'nome',.5);oldBottle(g,640,820,1.9*(.85+.15*u),'red',-.03);
 g.save();g.globalAlpha=u;g.fillStyle=CREAM;g.beginPath();g.roundRect(560,580,160,96,6);g.fill();g.fillStyle=WINE;g.font='700 22px Cinzel';g.textAlign='center';g.fillText('REPUTED',640,618);g.fillText('QUART',640,648);g.restore();
 chip(g,1260,400,'1/6 DE GALÃO',ap(t,11,'sexto'));const a3=ap(t,11,'setecentos',.5);if(a3>0){g.save();g.globalAlpha=a3;goldText(g,'757 ML',1260,620,130*(.8+.2*a3));g.restore()}done(g,t,s)}
// 14 — Europa
function euCard(t,s){const g=card(t,s,cellarWall,'EUROPA · ANOS 70',.74);const a=ap(t,14,'europa',.6);euStars(g,960,560,200,a);
 const b=ap(t,14,'setenta',.5);if(b>0){g.save();g.globalAlpha=b;goldText(g,'75 CL',960,560,96*(.8+.2*b));g.restore()}done(g,t,s)}
// 15 — EUA 1979
function usCard(t,s){const g=card(t,s,cellarWall,'ESTADOS UNIDOS',.74);usFlag(g,700,540,520,320,ap(t,15,'estados',.6));
 const a=ap(t,15,'mil',.5);if(a>0){g.save();g.globalAlpha=a;plaque(g,1340,540,420,260);goldText(g,'1979',1340,520,96);g.restore()}
 chip(g,1340,790,'750 ML OBRIGATÓRIO',ap(t,15,'obrigatório'));done(g,t,s)}
// 16 — 757 vira 750
function roundCard(t,s){const g=card(t,s,tavern,'A MESMA GARRAFA',.72);const m=easeIO(seg(t,wt(16,'arredondado')-.4,wt(16,'arredondado')+.4));
 oldBottle(g,560,820,1.5,'red');bottleS(g,[1360,820],1.5,'red');goldText(g,'SÉCULOS ATRÁS',560,330,40,'Cinzel',700);goldText(g,'HOJE',1360,330,40,'Cinzel',700);
 g.save();g.globalAlpha=1-m;goldText(g,'757',960,560,140);g.restore();g.save();g.globalAlpha=m;goldText(g,'750',960,560,140*(1+.08*Math.sin(m*Math.PI)));g.restore();
 goldText(g,'→',960,420,80);done(g,t,s)}
// 17 — tamanhos
function sizesCard(t,s){const g=card(t,s,cellarWall,'A RÉGUA DE TUDO',.74);
 for(const [cx,k,lab,w,tag] of [[560,.85,'375 ML','meia',0],[960,1.15,'750 ML','hoje',1],[1360,1.5,'1,5 L','magnum',2]]){const a=tag==1?ease(seg(t,T[s]+.2,T[s]+.6)):ap(t,17,w,.5);if(a<=0)continue;g.save();g.globalAlpha=a;bottleS(g,[cx,820],k,'red');g.restore();priceTag(g,cx,360,lab,a,.85)}
 chip(g,1640,560,'= 2 GARRAFAS',ap(t,17,'duas'));done(g,t,s)}
// 18 — Nabucodonosor
function nebuCard(t,s){const g=card(t,s,cellarWall,'NABUCODONOSOR',.74);const u=ap(t,18,'gigante',.7);g.save();g.globalAlpha=u;bottleS(g,[1400,860],2*(.8+.2*u),'red');g.restore();
 priceTag(g,1020,420,'15 LITROS',ap(t,18,'quinze'),.85);const tv=wt(18,'vinte');for(let i=0;i<20;i++){const a=ease(seg(t,tv-.6+i*.04,tv-.4+i*.04));if(a>0){g.save();g.globalAlpha=a;bottleS(g,[360+(i%5)*95,520+Math.floor(i/5)*95+60],.32,'red');g.restore()}}
 chip(g,550,330,'= 20 GARRAFAS',ap(t,18,'vinte'));done(g,t,s)}
// 20 — tabela final (sem legenda)
function finalTable(t,s){veil(null,t,cellarWall,.78);const g=layer('g',null);goldText(g,'POR QUE 750 ML?',960,130,76);ornament(g,960,205,600);blit(ctx,L.g,0,seg(t,T[s],T[s]+.5));
 const C=[['lungs','FÔLEGO','é lenda','fôlego'],['jug','1 GALÃO','6 garrafas','inglês'],['barrel','1 BARRICA','300 garrafas','trezentas'],['old','757 ML','a garrafa inglesa','metro'],['bottle','750 ML','só arredondou','arredondou']];
 C.forEach(([ic,n,d,w],i)=>{const cx=220+i*370,ta=wt(20,w)-.15,c=layer('c'+i,null);plaque(c,cx,600,330,560);
  if(ic=='lungs')lungs(c,cx,520,.7);else if(ic=='jug')jug(c,cx,640,.75);else if(ic=='barrel')barrelSide(c,cx,640,.6,1);else if(ic=='old')oldBottle(c,cx,660,.95,'red');else bottleS(c,[cx,660],.9,'red');
  goldText(c,n,cx,768,34,'Cinzel',700);blit(ctx,L['c'+i],0,seg(t,ta,ta+.45));serif(d,cx,822,36,`rgba(243,230,200,${seg(t,ta,ta+.45)})`)})}
// 21 — CTA (canto superior esquerdo, nada sobre a legenda)
function ctaScene(t,cam,s){talkScene(t,cam,s,Object.assign({gest:[[0,'wave'],[2.2,'open'],[4.2,'rest']],bottles:[['red',1100]],face:t=>({mouth:.7,brow:.5})},CEL_));
 const a=easeIO(seg(t,T[s]+.4,T[s]+1)),g=layer('g',null);g.save();g.globalAlpha=a;g.fillStyle='#B0122E';g.beginPath();g.roundRect(120,120,520,110,55);g.fill();g.strokeStyle=GOLD2;g.lineWidth=5;g.stroke();g.restore();
 g.save();g.globalAlpha=a;goldText(g,'INSCREVA-SE',380,176,52,'Cinzel',900);g.restore();chip(g,380,300,'QUAL CURIOSIDADE?',ap(t,21,'curiosidade'));blit(ctx,L.g,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=a;ctx.drawImage(LOGO,1640,40,230,220);ctx.restore()}}
const S_=(o)=>(t,c,s)=>talkScene(t,c,s,o);
const WK={set:workshop,front:cellarTable},HB={set:harbor,front:cellarTable},TV={set:tavern,front:cellarTable};
const unevenBottles=(f,t)=>{const a=ap(t,2,'tamanho',.5);for(const [bx,k] of [[470,.62],[560,.9],[660,.74]]){f.save();f.globalAlpha=Math.max(.0,a);oldBottle(f,bx,815,k,'red');f.restore()}};
const glasses6=(f,t)=>{const t6=wt(19,'seis');for(let i=0;i<5;i++){const a=ease(seg(t,t6-.3+i*.1,t6+i*.1));if(a>0){f.save();f.globalAlpha=a;glassW(f,380+i*95,815,.55,.35,'#5E1428');f.restore()}}};
const SC=[null,
 S_(Object.assign({bottles:[['red',1100]],gest:[[0,'open'],[3.2,'point']],chips:[['NÃO É 500 ML',430,300,wt(1,'meio')],['NEM 1 LITRO',430,420,wt(1,'litro')],['É 750 ML!',1500,360,wt(1,'setecentos')]],face:t=>({brow:.7,mouth:.6})},CEL_)),
 S_(Object.assign({props:unevenBottles,gest:[[0,'thinking'],[2.4,'open']],chips:[['SOPRADA À MÃO',1500,330,wt(2,'soprada')],['CADA UMA DE UM TAMANHO',1500,450,wt(2,'tamanho')]],face:t=>({look:-.3,brow:.6})},WK)),
 (t,c,s)=>legendCard(t,s),
 (t,c,s)=>lungCard(t,s),
 (t,c,s)=>glassCard(t,s),
 (t,c,s)=>mapCard(t,s),
 S_(Object.assign({barrels:[[330,.9],[540,.75]],bottles:[['red',1100]],gest:[[0,'open'],[3.4,'point']],chips:[['DE BORDEAUX PARA LONDRES',1450,300,wt(7,'bordeaux')],['VINHO MEDIDO EM GALÃO',1450,420,wt(7,'galão')]],face:t=>({brow:.5,look:.2})},HB)),
 (t,c,s)=>barrelCard(t,s),
 (t,c,s)=>mathCard(t,s),
 (t,c,s)=>crateCard(t,s),
 (t,c,s)=>quartCard(t,s),
 S_(Object.assign({gest:[[0,'rest'],[.4,'bottleUp']],bottleHeld:'red',chips:[['A GARRAFA PADRÃO DOS INGLESES',960,260,wt(12,'padrão')]],face:t=>({look:.3,brow:.5,mouth:.55})},TV)),
 S_(Object.assign({bottles:[['red',1100]],gest:[[0,'thinking'],[2.6,'point']],chips:[['SISTEMA MÉTRICO',1480,360,wt(13,'métrico')]],face:t=>({brow:.8,mouth:t>wt(13,'métrico')?.75:.5})},CEL_)),
 (t,c,s)=>euCard(t,s),
 (t,c,s)=>usCard(t,s),
 (t,c,s)=>roundCard(t,s),
 (t,c,s)=>sizesCard(t,s),
 (t,c,s)=>nebuCard(t,s),
 S_(Object.assign({props:glasses6,bottles:[['red',1100]],gest:[[0,'open'],[3.6,'thinking'],[5.6,'wave']],chips:[['UMAS 6 TAÇAS',1480,330,wt(19,'seis')]],face:t=>({mouth:.7,brow:.5})},{set:barWall,front:cellarTable})),
 (t,c,s)=>finalTable(t,s),
 (t,c,s)=>ctaScene(t,c,s),
 null];
const TALKS=[1,2,7,12,13,19,21];
FILM={dur:T[T.length-1],cuts:T.map(v=>Math.round(v*30)),fadeIn:0,fadeOut:.8,warm(){return .4},
 cam(s,u,t){if(TALKS.includes(s)){const k=TALKS.indexOf(s)%3;return [{x:lerp(950,975,u),y:lerp(560,545,u),z:lerp(1.18,1.28,easeIO(u)),b:[6,0,0]},{x:lerp(930,915,u),y:lerp(545,520,u),z:lerp(1.42,1.62,easeIO(u)),b:[8,0,0]},{x:lerp(1000,985,u),y:550,z:lerp(1.3,1.4,u),b:[7,0,0]}][k]}return {x:960,y:540,z:1,b:[10,0,0]}},
 draw(t,cam,s,u){if(s==0){thumbFrame(t);return}if(s==22){photo(IMG.logo,t,T[22],T[23],1,1.05);return}SC[s](t,cam,s)},
 plants(){return {}}};
(function(){const DISS={1:.6},xf=mk(),xz=mk(),CARD=[3,4,5,6,8,9,10,11,14,15,16,17,18,20],draw0=FILM.draw,cam0=FILM.cam;for(let s=2;s<22;s++)DISS[s]=.45;
 FILM.draw=(t,c,s,u)=>{const d=DISS[s],a=d?1-easeIO(seg(t,T[s],T[s]+d)):0;if(a>0){draw0(t,cam0(s-1,1,t),s-1,1);const x=xf.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0)}
  draw0(t,c,s,u);if(CARD.includes(s)){const k=1+.035*easeIO(u),x=xz.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0);ctx.save();ctx.setTransform(k,0,0,k,W/2*(1-k),H/2*(1-k));ctx.drawImage(xz,0,0);ctx.restore()}
  if(a>0)blit(ctx,xf,0,a);if(s!=0&&s!=21&&s!=22)watermark();if(s!=20&&s!=22)karaoke(t)}})();
// som
for(let s=1;s<22;s++)say(T[s],'whoosh');
for(const [i,w] of [[1,'setecentos'],[8,'duzentos'],[9,'seis'],[9,'trezentas'],[10,'seis'],[10,'doze'],[11,'setecentos'],[14,'setenta'],[15,'mil'],[16,'arredondado'],[17,'magnum'],[18,'vinte']])say(wt(i,w),'tag');
say(wt(5,'lenda'),'bottledown');
for(const w of ['fôlego','inglês','trezentas','metro','arredondou'])say(wt(20,w)-.15,'line');
