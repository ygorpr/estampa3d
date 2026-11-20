// ---------- cenas do vídeo "Você nunca reparou? (o buraco no fundo da garrafa)" — cena i = fala i ----------
function watermark(){if(!LOGO.complete)return;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.075;ctx.filter='blur(.6px)';ctx.drawImage(LOGO,960-230,720-221,460,442);ctx.restore()}
const CEL_={set:cellarWall,barrels:[[260,1],[1680,1]]};
const ap=(t,i,w,d=.35)=>ease(seg(t,wt(i,w)-.1,wt(i,w)-.1+d));
function card(t,s,set,title,dim=.72){veil(null,t,set,dim);const g=layer('g',null);goldText(g,title,960,165,Math.min(62,Math.floor(1500/title.length)));ornament(g,960,232,560);return g}
const done=(g,t,s)=>blit(ctx,L.g,0,seg(t,T[s],T[s]+.4));
const fade=(g,a,fn)=>{if(a<=0)return;g.save();g.globalAlpha=a;fn();g.restore()};
const C3=(t,s,set,title,fn,dim)=>{const g=card(t,s,set,title,dim);fn(g);done(g,t,s)};
const SC=[null,
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['red',1100]],gest:[[0,'open'],[3,'point']],chips:[['O NOME',430,300,wt(1,'nome')],['A HISTÓRIA',430,420,wt(1,'história')],['A LENDA',1480,360,wt(1,'lenda')]],face:t=>({brow:.7,mouth:.6})},CEL_)),
 (t,c,s)=>talkScene(t,c,s,{set:workshop,front:cellarTable,gest:[[0,'thinking'],[2.8,'open']],chips:[['FEITA À MÃO',1560,300,wt(2,'mão')],['ARTESÃO DO VIDRO',1560,420,wt(2,'vidreiro')]],face:t=>({look:-.3,brow:.6})}),
 (t,c,s)=>C3(t,s,workshop,'SOPRADA COMO UM BALÃO',g=>{blowpipe(g,880,560,easeIO(seg(t,wt(3,'soprava')-.3,wt(3,'balão')+.6)));chip(g,560,360,'VIDRO DERRETIDO',ap(t,3,'derretido'))},.6),
 (t,c,s)=>C3(t,s,workshop,'A VARETA NO FUNDO',g=>{oldBottle(g,1000,560,1.3,'white',Math.PI/2);const r=easeIO(seg(t,wt(4,'vareta')-.3,wt(4,'vareta')+.5));g.strokeStyle='#8A8A92';g.lineWidth=16;g.lineCap='round';g.beginPath();g.moveTo(1000-560*r,560);g.lineTo(1000-8,560);g.stroke();
  fade(g,r,()=>{const gl=g.createRadialGradient(990,560,4,990,560,40);gl.addColorStop(0,'rgba(255,200,120,.9)');gl.addColorStop(1,'rgba(255,150,60,0)');g.fillStyle=gl;g.fillRect(950,520,80,80)});chip(g,560,400,'VARETA DE FERRO',ap(t,4,'vareta'));chip(g,1300,760,'PRA SEGURAR',ap(t,4,'segurar'))},.66),
 (t,c,s)=>C3(t,s,workshop,'A MARCA NO FUNDO',g=>{const k=easeIO(seg(t,wt(5,'ponta')-.3,wt(5,'ponta')+.5));spikeBottle(g,800,700,1.5,k);chip(g,1300,420,'UMA PONTA DE VIDRO',ap(t,5,'ponta'));chip(g,1300,560,'ÁSPERA E AFIADA',ap(t,5,'afiada'))},.66),
 (t,c,s)=>C3(t,s,tavern,'NÃO PARA EM PÉ!',g=>{g.fillStyle='#5A2E1C';g.fillRect(420,770,900,22);const w=Math.sin(t*5)*.22*ease(seg(t,T[s]+.3,T[s]+1));spikeBottle(g,870,770,1.5,1,w);
  fade(g,ease(seg(t,wt(6,'corta')-.1,wt(6,'corta')+.3)),()=>goldText(g,'AI!',1260,420,120));chip(g,560,380,'FICA BALANÇANDO',ap(t,6,'balançando'))},.7),
 (t,c,s)=>C3(t,s,workshop,'A SOLUÇÃO GENIAL',g=>{const u=easeIO(seg(t,wt(7,'empurrava')-.2,wt(7,'empurrava')+1.2));baseSection(g,960,830,380,lerp(-60,80,u));
  fade(g,ease(seg(t,wt(7,'empurrava')-.4,wt(7,'empurrava'))),()=>arrow(g,960,940-u*40,960,850-u*80));chip(g,480,420,'COM O VIDRO AINDA MOLE',ap(t,7,'mole'));chip(g,1440,640,'EMPURRA PRA DENTRO',ap(t,7,'empurrava'))},.66),
 (t,c,s)=>C3(t,s,cellarWall,'NASCEU O BURACO!',g=>{g.fillStyle='#5A2E1C';g.fillRect(420,800,500,22);oldBottle(g,670,800,1.6,'red');baseSection(g,1380,820,320,70);
  chip(g,670,330,'PARA EM PÉ, FIRME',ap(t,8,'firme'));chip(g,1380,450,'NINGUÉM SE CORTA',ap(t,8,'cortava'))},.72),
 (t,c,s)=>C3(t,s,cellarWall,'O NOME',g=>{fade(g,ap(t,9,'punt',.5),()=>{plaque(g,1360,520,460,220);goldText(g,'PUNT',1360,505,100)});fade(g,ap(t,9,'punty',.5),()=>{plaque(g,560,520,460,220);goldText(g,'PUNTY',560,505,92);arrow(g,810,520,1100,520)});
  chip(g,1360,700,'PALAVRA INGLESA',ap(t,9,'inglesa'));chip(g,560,700,'O APELIDO DA VARETA',ap(t,9,'apelido'))},.74),
 (t,c,s)=>C3(t,s,cellarWall,'HOJE: MÁQUINA E FORMA',g=>{const o=easeIO(seg(t,wt(10,'forma')-.1,wt(10,'forma')+.9));fade(g,o,()=>bottleS(g,[960,820],1.6,'red'));mold(g,960,840,10+o*230);
  chip(g,960,330,'FEITA NA FORMA',ap(t,10,'forma'))},.74),
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['spark',1100]],gest:[[0,'thinking'],[3.4,'point']],chips:[['NO ESPUMANTE',1480,300,wt(11,'espumante')],['O VINHO COM GÁS',1480,420,wt(11,'gás')]],face:t=>({brow:.8,mouth:.5})},CEL_)),
 (t,c,s)=>C3(t,s,cellarWall,'A PRESSÃO DO ESPUMANTE',g=>{fade(g,ap(t,12,'pneu',.5),()=>tire(g,560,560,200));fade(g,ap(t,12,'três',.5),()=>goldText(g,'3×',960,560,150));bottleS(g,[1360,800],1.6,'spark');
  chip(g,960,780,'3 VEZES UM PNEU DE CARRO',ap(t,12,'pneu'))},.74),
 (t,c,s)=>C3(t,s,cellarWall,'FUNCIONA COMO UM ARCO',g=>{baseSection(g,960,830,400,90);const a=ap(t,13,'espalha',.6);for(const [dx,dy] of [[-1,-1],[0,-1.2],[1,-1],[-1.3,0],[1.3,0]])fade(g,a,()=>arrow(g,960,760,960+dx*200,760+dy*110,GOLD2,7));
  chip(g,560,360,'ESPALHA A FORÇA',ap(t,13,'espalha'));chip(g,1360,360,'VIDRO GROSSO E PESADO',ap(t,13,'grossa'))},.74),
 (t,c,s)=>C3(t,s,cellarWall,'DE CABEÇA PRA BAIXO',g=>{for(let r=0;r<3;r++){const a=ease(seg(t,T[s]+.4+r*.5,T[s]+.9+r*.5));for(let c=0;c<5;c++)fade(g,a,()=>invBottleS(g,560+c*170,860-r*185,.8,'spark'))}
  chip(g,960,300,'GARGALO NO FUNDO DA OUTRA',ap(t,14,'encaixado'))},.74),
 (t,c,s)=>C3(t,s,cellarWall,'A LENDA DA BORRA',g=>{baseSection(g,760,830,380,80);const b=ap(t,15,'borra',.8);g.fillStyle=`rgba(120,70,30,${.95*b})`;for(const k of [-1,1]){g.beginPath();g.ellipse(760+k*115,812,55,12,0,0,7);g.fill()}
  chip(g,1340,420,'BORRA: O RESTO ESCURO',ap(t,15,'borra'));chip(g,1340,560,'DO VINHO TINTO VELHO',ap(t,15,'velho'))},.74),
 (t,c,s)=>C3(t,s,cellarWall,'NINGUÉM BATE O MARTELO',g=>{balance(g,960,360,Math.sin(t*2.2)*.18);fade(g,ap(t,16,'ajuda'),()=>goldText(g,'AJUDA?',660,560,52,'Cinzel',700));fade(g,ap(t,16,'mito'),()=>goldText(g,'MITO?',1260,560,52,'Cinzel',700))},.74),
 (t,c,s)=>C3(t,s,cellarWall,'FUNDO MAIS FUNDO...',g=>{baseSection(g,470,830,320,40);baseSection(g,1450,830,320,130);stamp(g,960,330,'NÃO É QUALIDADE',ease(seg(t,wt(17,'melhor')-.15,wt(17,'melhor')+.25)));chip(g,960,640,'SÓ É GARRAFA MAIS CARA',ap(t,17,'caro'))},.74),
 (t,c,s)=>C3(t,s,tavern,'SÓ PRA IMPRESSIONAR',g=>{g.fillStyle='#5A2E1C';g.fillRect(420,800,1080,22);bottleS(g,[700,800],1.1,'white');bottleS(g,[1220,800],1.75,'red');const sh=.5+.5*Math.sin(t*4);g.fillStyle=`rgba(255,240,200,${.8*sh})`;star(g,1300,380,22*sh);
  chip(g,1220,330,'GARRAFA PESADONA',ap(t,18,'pesadona'));chip(g,700,500,'É CHARME!',ap(t,18,'charme'))},.68),
 (t,c,s)=>talkScene(t,c,s,{set:tavern,front:cellarTable,gest:[[0,'rest'],[.3,'bottleUp']],bottleHeld:'red',chips:[['O DEDÃO NO FUNDO?',1560,300,wt(19,'dedão')],['MALVISTO',1560,420,wt(19,'malvisto')]],face:t=>({brow:.7,look:.3,mouth:.5})}),
 (t,c,s)=>C3(t,s,cellarWall,'NEM TODA GARRAFA TEM',g=>{g.fillStyle='#5A2E1C';g.fillRect(500,800,920,22);bottleS(g,[700,800],1.5,'red');fade(g,ap(t,20,'altas',.5),()=>slimBottle(g,1220,800,1.5));
  chip(g,1600,420,'VINHO ALEMÃO',ap(t,20,'alemão'));chip(g,1600,560,'FUNDO RETINHO',ap(t,20,'retinho'))},.74),
 (t,c,s)=>finalTable(t,s),
 (t,c,s)=>ctaScene(t,c,s),
 null];
function finalTable(t,s){veil(null,t,cellarWall,.78);const g=layer('g',null);goldText(g,'VOCÊ NUNCA REPAROU?',960,130,72);ornament(g,960,205,600);blit(ctx,L.g,0,seg(t,T[s],T[s]+.5));
 const C=[['blow','VIDREIRO','nasceu do sopro','vidreiro'],['stand','EM PÉ','sem cortar a mão','pé'],['spark','ESPUMANTE','aguenta a pressão','espumante'],['lees','BORRA','ninguém confirma','resto'],['deep','FUNDO FUNDO','não é qualidade','charme']];
 C.forEach(([ic,n,d,w],i)=>{const cx=220+i*370,ta=wt(21,w)-.15,c=layer('c'+i,null);plaque(c,cx,600,330,560);
  if(ic=='blow'){c.save();c.translate(cx,540);c.scale(.32,.32);blowpipe(c,200,0,.3);c.restore()}else if(ic=='stand')oldBottle(c,cx,680,.9,'red');else if(ic=='spark')bottleS(c,[cx,680],.9,'spark');else if(ic=='lees')baseSection(c,cx,690,150,25);else baseSection(c,cx,690,150,55);
  goldText(c,n,cx,768,32,'Cinzel',700);blit(ctx,L['c'+i],0,seg(t,ta,ta+.45));serif(d,cx,822,34,`rgba(243,230,200,${seg(t,ta,ta+.45)})`)})}
function ctaScene(t,cam,s){talkScene(t,cam,s,Object.assign({gest:[[0,'wave'],[2.2,'open'],[4.2,'rest']],bottles:[['red',1100]],face:t=>({mouth:.7,brow:.5})},CEL_));
 const a=easeIO(seg(t,T[s]+.4,T[s]+1)),g=layer('g',null);g.save();g.globalAlpha=a;g.fillStyle='#B0122E';g.beginPath();g.roundRect(120,120,520,110,55);g.fill();g.strokeStyle=GOLD2;g.lineWidth=5;g.stroke();g.restore();
 g.save();g.globalAlpha=a;goldText(g,'INSCREVA-SE',380,176,52,'Cinzel',900);g.restore();chip(g,380,300,'QUAL CURIOSIDADE?',ap(t,22,'curiosidade'));blit(ctx,L.g,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=a;ctx.drawImage(LOGO,1640,40,230,220);ctx.restore()}}
const TALKS=[1,2,11,19,22];
FILM={dur:T[T.length-1],cuts:T.map(v=>Math.round(v*30)),fadeIn:0,fadeOut:.8,warm(){return .4},
 cam(s,u,t){if(TALKS.includes(s)){const k=TALKS.indexOf(s)%3;return [{x:lerp(950,975,u),y:lerp(560,545,u),z:lerp(1.18,1.28,easeIO(u)),b:[6,0,0]},{x:lerp(930,915,u),y:lerp(545,520,u),z:lerp(1.42,1.62,easeIO(u)),b:[8,0,0]},{x:lerp(1000,985,u),y:550,z:lerp(1.3,1.4,u),b:[7,0,0]}][k]}return {x:960,y:540,z:1,b:[10,0,0]}},
 draw(t,cam,s,u){if(s==0){thumbFrame(t);return}if(s==23){photo(IMG.logo,t,T[23],T[24],1,1.05);return}SC[s](t,cam,s)},
 plants(){return {}}};
(function(){const DISS={1:.6},xf=mk(),xz=mk(),CARD=[3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,20,21],draw0=FILM.draw,cam0=FILM.cam;for(let s=2;s<23;s++)DISS[s]=.45;
 FILM.draw=(t,c,s,u)=>{const d=DISS[s],a=d?1-easeIO(seg(t,T[s],T[s]+d)):0;if(a>0){draw0(t,cam0(s-1,1,t),s-1,1);const x=xf.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0)}
  draw0(t,c,s,u);if(CARD.includes(s)){const k=1+.035*easeIO(u),x=xz.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0);ctx.save();ctx.setTransform(k,0,0,k,W/2*(1-k),H/2*(1-k));ctx.drawImage(xz,0,0);ctx.restore()}
  if(a>0)blit(ctx,xf,0,a);if(s!=0&&s!=22&&s!=23)watermark();if(s!=21&&s!=23)karaoke(t)}})();
// som
for(let s=1;s<23;s++)say(T[s],'whoosh');
for(const [i,w] of [[4,'vareta'],[5,'afiada'],[7,'empurrava'],[9,'punt'],[9,'punty'],[10,'forma'],[12,'três'],[13,'espalha'],[15,'borra'],[17,'caro'],[18,'charme'],[20,'retinho']])say(wt(i,w),'tag');
say(wt(6,'corta'),'yuck');say(wt(17,'melhor'),'bottledown');say(wt(8,'firme'),'bottledown');
for(const w of ['vidreiro','pé','espumante','resto','charme'])say(wt(21,w)-.15,'line');
