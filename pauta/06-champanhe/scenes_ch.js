// ---------- cenas do vídeo "Quem inventou o champanhe?" — cena i = fala i ----------
function watermark(){if(!LOGO.complete)return;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.075;ctx.filter='blur(.6px)';ctx.drawImage(LOGO,960-230,720-221,460,442);ctx.restore()}
const CEL_={set:cellarWall,barrels:[[260,1],[1680,1]]};
const ap=(t,i,w,d=.35)=>ease(seg(t,wt(i,w)-.1,wt(i,w)-.1+d));
function card(t,s,set,title,dim=.72){veil(null,t,set,dim);const g=layer('g',null);goldText(g,title,960,165,Math.min(62,Math.floor(1500/title.length)));ornament(g,960,232,560);return g}
const done=(g,t,s)=>blit(ctx,L.g,0,seg(t,T[s],T[s]+.4));
const fade=(g,a,fn)=>{if(a<=0)return;g.save();g.globalAlpha=a;fn();g.restore()};
const C3=(t,s,set,title,fn,dim)=>{const g=card(t,s,set,title,dim);fn(g);done(g,t,s)};
const SC=[null,
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['spark',1100]],gest:[[0,'open'],[3,'point']],chips:[['O MONGE INVENTOU?',430,300,T[1]+.2],['POR QUE A ROLHA VOA?',1480,300,wt(1,'rolha')]],face:t=>({brow:.7,mouth:.6})},CEL_)),
 (t,c,s)=>C3(t,s,cellarWall,'CHAMPAGNE É UMA REGIÃO',g=>{franceMap(g,700,560,1.4,ap(t,2,'região',.8));chip(g,1320,420,'NA FRANÇA',ap(t,2,'frança'));chip(g,1320,560,'ESPUMANTE = VINHO COM GÁS',ap(t,2,'espumante'));chip(g,1320,700,'SÓ O DE LÁ É CHAMPANHE',ap(t,2,'só'))},.74),
 (t,c,s)=>C3(t,s,cellarWall,'O INVERNO PARAVA TUDO',g=>{barrelSide(g,700,820,1.2,1);barrelSide(g,1200,820,1.2,1);snow(g,t,ap(t,3,'inverno',.6));chip(g,960,380,'A FERMENTAÇÃO PARAVA',ap(t,3,'parava'))},.7),
 (t,c,s)=>C3(t,s,cellarWall,'O QUE É FERMENTAÇÃO?',g=>{grapesC(g,420,560,1.6);fade(g,ap(t,4,'fermento',.5),()=>{arrow(g,560,560,700,560);yeast(g,860,560,60,t);goldText(g,'FERMENTO',860,700,34,'Cinzel',700)});
  fade(g,ap(t,4,'álcool',.5),()=>{arrow(g,1000,560,1140,560);goldText(g,'ÁLCOOL',1340,500,56)});fade(g,ap(t,4,'gás',.5),()=>{goldText(g,'+ GÁS',1340,620,56);bubbles(g,1340,700,200,160,t,14)})},.74),
 (t,c,s)=>C3(t,s,cellarWall,'NA PRIMAVERA...',g=>{const u=easeIO(seg(t,wt(5,'fechada')-.3,T[s+1]));bottleS(g,[960,840],2,'spark');bubbles(g,960,800,60,420,t,16+Math.round(30*u));
  for(const [dx,dy] of [[-1,-.3],[1,-.3],[-1,.4],[1,.4]])fade(g,u,()=>arrow(g,960+dx*70,560+dy*200,960+dx*(110+90*u),560+dy*200,'#C8213F',7));chip(g,1460,400,'O FERMENTO ACORDA',ap(t,5,'acordava'));chip(g,1460,540,'O GÁS FICA PRESO',ap(t,5,'ir'))},.74),
 (t,c,s)=>C3(t,s,cellarWall,'GARRAFAS EXPLODINDO!',g=>{g.fillStyle='#5A2E1C';g.fillRect(360,800,1200,22);const t0=wt(6,'explodindo');for(let i=0;i<6;i++){const te=t0+[0,.9,1.6,2.6,3.2,4.1][i],x0=480+i*190;if(t<te)oldBottle(g,x0,800,1.1,'#2E5A3A');burst(g,x0,680,seg(t,te,te+.8));
  fade(g,ease(seg(t,te,te+.15))*(1-seg(t,te+.5,te+.9)),()=>goldText(g,'POW!',x0,420,70))}},.7),
 (t,c,s)=>C3(t,s,cellarWall,'DOM PÉRIGNON',g=>{fade(g,ease(seg(t,T[s]+.2,T[s]+.7)),()=>monk(g,700,880,1.5));chip(g,1320,400,'MONGE DA ADEGA',ap(t,7,'monge'));fade(g,ap(t,7,'mil',.5),()=>{plaque(g,1320,600,460,180);goldText(g,'1668–1715',1320,590,62)})},.72),
 (t,c,s)=>C3(t,s,cellarWall,'O TRABALHO DELE',g=>{monk(g,640,880,1.5);stamp(g,1300,480,'TIRAR AS BOLHAS',ease(seg(t,wt(8,'bolhas')-.15,wt(8,'bolhas')+.25)));chip(g,1300,700,'O GÁS ERA DEFEITO',ap(t,8,'defeito'))},.72),
 (t,c,s)=>C3(t,s,cellarWall,'VINHO BRANCO DE UVA TINTA',g=>{grapesC(g,520,560,1.7);fade(g,ap(t,9,'apertando',.6),()=>{arrow(g,680,560,880,560);glassW(g,1100,760,1.6,.55,'#E9D98A')});chip(g,520,330,'UVA TINTA',ap(t,9,'tinta'));chip(g,1300,420,'APERTANDO COM CUIDADO',ap(t,9,'cuidado'))},.74),
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['spark',1100]],gest:[[0,'thinking'],[3,'point']],chips:[['VEIO DA INGLATERRA!',1480,330,wt(10,'inglaterra')]],face:t=>({brow:.8,mouth:.6})},CEL_)),
 (t,c,s)=>C3(t,s,tavern,'1662 · LONDRES',g=>{scroll(g,600,520,420,300,'1662','MERRET');chip(g,600,760,'UM MÉDICO INGLÊS',ap(t,11,'médico'));chip(g,1320,330,'SOCIEDADE DE CIENTISTAS',ap(t,11,'cientistas'));
  const ta=wt(11,'açúcar');glassW(g,1320,820,1.5,.55,'#F2D27A',true);for(let i=0;i<3;i++){const u=seg(t,ta+i*.25,ta+i*.25+.6);if(u>0&&u<1)sugarCube(g,1320+(i-1)*20,420+u*260,26)}fade(g,ap(t,11,'borbulhante',.5),()=>bubbles(g,1320,760,40,240,t,16))},.7),
 (t,c,s)=>C3(t,s,cellarWall,'QUEM VEIO PRIMEIRO?',g=>{g.strokeStyle=GOLD;g.lineWidth=8;g.beginPath();g.moveTo(420,560);g.lineTo(1500,560);g.stroke();for(const [x0,y,n,w] of [[520,'1662','MERRET',T[s]+.2],[1400,'1668','DOM PÉRIGNON',T[s]+.9]]){const a=ease(seg(t,w,w+.4));fade(g,a,()=>{g.fillStyle=GOLD2;g.beginPath();g.arc(x0,560,18,0,7);g.fill();goldText(g,y,x0,470,70);goldText(g,n,x0,650,40,'Cinzel',700)})}
  chip(g,960,800,'6 ANOS ANTES!',ap(t,12,'seis'))},.74),
 (t,c,s)=>C3(t,s,workshop,'A GARRAFA INGLESA',g=>{oldBottle(g,860,860,2.1,'#16281E');chip(g,1360,400,'GROSSA',ap(t,13,'grossa'));chip(g,1360,520,'FORNO A CARVÃO',ap(t,13,'carvão'));chip(g,1360,640,'AGUENTAVA A PRESSÃO',ap(t,13,'pressão'))},.62),
 (t,c,s)=>C3(t,s,cellarWall,'A FRASE FAMOSA',g=>{for(let i=0;i<14;i++){const r=rng(i+3),sx=300+r()*1320,sy=300+r()*300,k=.5+.5*Math.sin(t*3+i);g.fillStyle=`rgba(242,210,122,${.7*k})`;star(g,sx,sy,10+8*k)}
  serif('"Venham, estou bebendo estrelas!"',960,600,72,'#F3E6C8','italic');stamp(g,960,760,'LENDA',ease(seg(t,wt(14,'lenda')-.15,wt(14,'lenda')+.25)));chip(g,960,380,'NENHUM REGISTRO',ap(t,14,'registro'))},.74),
 (t,c,s)=>C3(t,s,cellarWall,'DE ONDE VEIO A LENDA',g=>{fade(g,ap(t,15,'cem',.5),()=>{plaque(g,620,560,420,280);goldText(g,'1821',620,540,96)});chip(g,620,780,'+100 ANOS DEPOIS',ap(t,15,'cem'));fade(g,ap(t,15,'monge',.5),()=>monk(g,1300,880,1.3));chip(g,1300,330,'OUTRO MONGE',ap(t,15,'monge'))},.74),
 (t,c,s)=>talkScene(t,c,s,Object.assign({gest:[[0,'rest'],[.3,'bottleUp']],bottleHeld:'spark',chips:[['POR QUE ELA VOA?',1480,330,wt(16,'voa')]],face:t=>({brow:.9,look:.3,mouth:.55})},CEL_)),
 (t,c,s)=>C3(t,s,cellarWall,'A PRESSÃO LÁ DENTRO',g=>{fade(g,ap(t,17,'pneu',.5),()=>tire(g,560,560,200));fade(g,ap(t,17,'três',.5),()=>goldText(g,'3×',960,560,150));bottleS(g,[1360,800],1.6,'spark');bubbles(g,1360,760,40,300,t,18);chip(g,960,780,'3 PNEUS DE CARRO',ap(t,17,'pneu'))},.74),
 (t,c,s)=>C3(t,s,cellarWall,'A ROLHA VOA',g=>{const ts=wt(18,'solta')-.2,u=seg(t,ts,ts+1.2);g.save();g.translate(520,820);g.rotate(.6);bottleS(g,[0,0],1.5,'spark');g.restore();
  if(u>0){const px=520+Math.sin(.6)*430+u*900,py=820-Math.cos(.6)*430-u*260+u*u*160;g.strokeStyle='rgba(242,210,122,.5)';g.lineWidth=6;g.setLineDash([12,10]);g.beginPath();g.moveTo(520+Math.sin(.6)*430,820-Math.cos(.6)*430);g.lineTo(px,py);g.stroke();g.setLineDash([]);g.fillStyle='#C99A5B';g.beginPath();g.roundRect(px-16,py-22,32,44,8);g.fill()}
  speedo(g,1400,720,140,easeIO(seg(t,wt(18,'cinquenta')-.4,wt(18,'cinquenta')+.6))*.8,'+50 KM/H')},.74),
 (t,c,s)=>C3(t,s,cellarWall,'ABRA GELADO',g=>{iceBucket(g,760,860,1.4);bottleS(g,[760,640],1.3,'spark');chip(g,1360,400,'QUENTE = ESTOURO MAIS FORTE',ap(t,19,'quente'));chip(g,1360,540,'ABRA GELADO',ap(t,19,'gelado'));chip(g,1360,680,'SEGURE A ROLHA',ap(t,19,'segurando'))},.74),
 (t,c,s)=>C3(t,s,cellarWall,'AS BOLHAS',g=>{glassW(g,760,860,2.6,.6,'#F2D27A',true);bubbles(g,760,820,50,360,t,30);fade(g,ap(t,20,'vinte',.5),()=>{plaque(g,1340,460,520,170);goldText(g,'20 MILHÕES',1340,450,54);serif('por garrafa',1340,505,34)});
  fade(g,ap(t,20,'milhão',.5),()=>{plaque(g,1340,700,520,170);goldText(g,'1 MILHÃO',1340,690,54);serif('numa taça',1340,745,34)})},.74),
 (t,c,s)=>C3(t,s,cellarWall,'A VIÚVA CLICQUOT',g=>{riddlingRack(g,720,880,1.3,t);fade(g,ap(t,21,'mil',.5),()=>{plaque(g,1340,460,400,200);goldText(g,'1816',1340,445,90)});chip(g,1340,660,'TIROU A BORRA',ap(t,21,'borra'));chip(g,1340,330,'UMA MULHER',ap(t,21,'mulher'))},.74),
 (t,c,s)=>finalTable(t,s),
 (t,c,s)=>ctaScene(t,c,s),
 null];
function finalTable(t,s){veil(null,t,cellarWall,.78);const g=layer('g',null);goldText(g,'QUEM INVENTOU?',960,130,76);ornament(g,960,205,600);blit(ctx,L.g,0,seg(t,T[s],T[s]+.5));
 const C=[['snow','ACIDENTE','o frio parava tudo','acidente'],['scroll','1662','Merret, Inglaterra','ingleses'],['monk','DOM PÉRIGNON','queria tirar as bolhas','pérignon'],['tire','3 PNEUS','a pressão','acabar'],['rack','1816','viúva Clicquot','acabar']];
 C.forEach(([ic,n,d,w],i)=>{const cx=220+i*370,ta=wt(22,w)-.15+(i==3?.5:i==4?1:0),c=layer('c'+i,null);plaque(c,cx,600,330,560);
  if(ic=='snow'){barrelSide(c,cx,680,.6,1);c.fillStyle='#fff';for(let k=0;k<8;k++){c.beginPath();c.arc(cx-100+k*28,440+(k%3)*30,4,0,7);c.fill()}}else if(ic=='scroll')scroll(c,cx,560,200,150,'1662','');else if(ic=='monk')monk(c,cx,700,.7);else if(ic=='tire')tire(c,cx,560,90);else bottleS(c,[cx,690],.9,'spark');
  goldText(c,n,cx,768,n.length>9?28:34,'Cinzel',700);blit(ctx,L['c'+i],0,seg(t,ta,ta+.45));serif(d,cx,822,32,`rgba(243,230,200,${seg(t,ta,ta+.45)})`)})}
function ctaScene(t,cam,s){talkScene(t,cam,s,Object.assign({gest:[[0,'wave'],[2.2,'open'],[4.2,'rest']],bottles:[['spark',1100]],face:t=>({mouth:.7,brow:.5})},CEL_));
 const a=easeIO(seg(t,T[s]+.4,T[s]+1)),g=layer('g',null);g.save();g.globalAlpha=a;g.fillStyle='#B0122E';g.beginPath();g.roundRect(120,120,520,110,55);g.fill();g.strokeStyle=GOLD2;g.lineWidth=5;g.stroke();g.restore();
 g.save();g.globalAlpha=a;goldText(g,'INSCREVA-SE',380,176,52,'Cinzel',900);g.restore();chip(g,380,300,'QUAL CURIOSIDADE?',ap(t,23,'curiosidade'));blit(ctx,L.g,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=a;ctx.drawImage(LOGO,1640,40,230,220);ctx.restore()}}
const TALKS=[1,10,16,23];
FILM={dur:T[T.length-1],cuts:T.map(v=>Math.round(v*30)),fadeIn:0,fadeOut:.8,warm(){return .4},
 cam(s,u,t){if(TALKS.includes(s)){const k=TALKS.indexOf(s)%3;return [{x:lerp(950,975,u),y:lerp(560,545,u),z:lerp(1.18,1.28,easeIO(u)),b:[6,0,0]},{x:lerp(930,915,u),y:lerp(545,520,u),z:lerp(1.42,1.62,easeIO(u)),b:[8,0,0]},{x:lerp(1000,985,u),y:550,z:lerp(1.3,1.4,u),b:[7,0,0]}][k]}return {x:960,y:540,z:1,b:[10,0,0]}},
 draw(t,cam,s,u){if(s==0){thumbFrame(t);return}if(s==24){photo(IMG.logo,t,T[24],T[25],1,1.05);return}SC[s](t,cam,s)},
 plants(){return {}}};
(function(){const DISS={1:.6},xf=mk(),xz=mk(),CARD=[2,3,4,5,6,7,8,9,11,12,13,14,15,17,18,19,20,21,22],draw0=FILM.draw,cam0=FILM.cam;for(let s=2;s<24;s++)DISS[s]=.45;
 FILM.draw=(t,c,s,u)=>{const d=DISS[s],a=d?1-easeIO(seg(t,T[s],T[s]+d)):0;if(a>0){draw0(t,cam0(s-1,1,t),s-1,1);const x=xf.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0)}
  draw0(t,c,s,u);if(CARD.includes(s)){const k=1+.035*easeIO(u),x=xz.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0);ctx.save();ctx.setTransform(k,0,0,k,W/2*(1-k),H/2*(1-k));ctx.drawImage(xz,0,0);ctx.restore()}
  if(a>0)blit(ctx,xf,0,a);if(s!=0&&s!=23&&s!=24)watermark();if(s!=22&&s!=24)karaoke(t)}})();
// som
for(let s=1;s<24;s++)say(T[s],'whoosh');
{const t0=wt(6,'explodindo');for(const d of [0,.9,1.6,2.6,3.2,4.1])say(t0+d,'yuck')}
say(wt(18,'solta')-.2,'corkin');say(wt(14,'lenda'),'bottledown');say(wt(8,'bolhas'),'bottledown');
for(const [i,w] of [[2,'região'],[7,'mil'],[11,'mil'],[12,'seis'],[15,'cem'],[17,'três'],[18,'cinquenta'],[20,'vinte'],[20,'milhão'],[21,'mil']])say(wt(i,w),'tag');
for(const [w,d] of [['acidente',0],['ingleses',0],['pérignon',0],['acabar',.5],['acabar',1]])say(wt(22,w)-.15+d,'line');
