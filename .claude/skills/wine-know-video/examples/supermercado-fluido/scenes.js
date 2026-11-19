// ---------- COMO ESCOLHER VINHO NO SUPERMERCADO SEM ERRAR — scenes (one per narration line) ----------
const MK={set:marketWall,front:marketFront};
const BIG=(fn,cx,k=1.45,y=805)=>(f,t)=>{f.save();f.translate(cx,y);f.scale(k,k);f.translate(-cx,-y);fn(f,cx,y);f.restore()};
const W_WHITE='#E8D58A',W_ROSE='#E9A0A8',W_SPARK='#F0DE9A',W_MOSC='#E2B456';
// opening = the thumbnail, alive (thumbFrame(0) IS the thumbnail)
function thumbFrame(t){const u=easeIO(seg(t,.6,LEN[0])),cam={x:1080+u*10,y:500-u*6,z:1.7+u*.07,b:[10,0,0]};
 let x=layer('w',cam);marketWall(x,0);
 const live=t>0,sp=live?speak(t):0,wv=live?Math.sin(t*2.4)*.5+.5:0,lk=live?kf(t,[[0,-.45],[2.5,-.45],[3,.4],[5.5,.4],[6,-.45]]):-.45;
 const p={x:1330,y:600,s:1,face:1,noLegs:true,breath:1+(live?t*2.1:0),look:lk,lookY:-.15,brow:1.1,wide:1,sad:.35,mouth:.05,open:Math.max(.5-(live?seg(t,.3,.5)*.5:0),sp),tilt:-.08+(live?Math.sin(t*1.2)*.02:0),blink:live?blinkAt(t,[1.4,3.9,6.6]):0,hands:{},arm3d:true};
 p.hands.l=[...w2l(p,[1190,522]),110];p.hands.r=[...w2l(p,[1470,600-wv*12]),90];const hp=actor(layer('h',cam),'s',C10,p,cam,'rgba(255,220,180,1)',1);
 const f=layer('f',cam);marketFront(f);bottleS(f,[1190,760],1,'red');const hl=h2w(hp,'l'),hr=h2w(hp,'r');gripHand(f,hl[0],hl[1],0,C10,.85);openHand(f,hr[0],hr[1],.5,C10,.85);
 comp([['w',10]]);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='rgba(16,3,7,.62)';ctx.fillRect(0,0,W,H);ctx.restore();blit(ctx,L.h,0);blit(ctx,L.f,0);
 ctx.save();ctx.setTransform(1,0,0,1,0,0);const v=ctx.createLinearGradient(0,0,W*.62,0);v.addColorStop(0,'rgba(16,3,7,.92)');v.addColorStop(.75,'rgba(16,3,7,.55)');v.addColorStop(1,'rgba(16,3,7,0)');ctx.fillStyle=v;ctx.fillRect(0,0,W,H);ctx.restore();
 const T_=layer('t',null);goldText(T_,'QUAL VINHO',545,400,124,'Cinzel',900);goldText(T_,'EU LEVO?',545,570,124,'Cinzel',900);T_.fillStyle='#B0122E';T_.fillRect(205,645,680,10);blit(ctx,L.t,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.85;ctx.drawImage(LOGO,545-62,680,124,119);ctx.restore()}}
function watermark(){if(!LOGO.complete)return;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.075;ctx.filter='blur(.6px)';ctx.drawImage(LOGO,960-230,720-221,460,442);ctx.restore()}
// cards for the shelf checklist
function labelCard(t,s){veil(null,t,marketWall,.78);const g=layer('g',null),a=easeIO(seg(t,wt(16,'fino')-.3,wt(16,'fino')+.3));goldText(g,'O QUE ESTÁ ESCRITO NO RÓTULO',960,170,58);ornament(g,960,235,560);
 for(const [cx,title,sub,hi] of [[620,'VINHO FINO','uvas viníferas',1],[1300,'VINHO DE MESA','pode ser uva americana',0]]){g.save();g.globalAlpha=hi?1:.55+.0*a;g.fillStyle='#F3E6C8';g.beginPath();g.roundRect(cx-230,330,460,460,22);g.fill();g.strokeStyle=hi?'#D4A24C':'#8A6A3A';g.lineWidth=hi?10*a+4:4;g.stroke();
  g.fillStyle="#5E1428";g.font="900 42px Cinzel";g.textAlign='center';g.textBaseline='middle';g.fillText(title,cx,470);g.font="italic 600 38px Cormorant";g.fillStyle='#4A2A1A';g.fillText(sub,cx,540);g.strokeStyle='#8A6A3A';g.lineWidth=3;g.beginPath();g.moveTo(cx-150,600);g.lineTo(cx+150,600);g.stroke();g.restore()}
 chip(g,620,700,'CABERNET · CHARDONNAY',ease(seg(t,wt(16,'cabernet')-.1,wt(16,'cabernet')+.3)));blit(ctx,L.g,0,seg(t,T[s],T[s]+.4))}
function lightCard(t,s){veil(null,t,marketWall,.6);const g=layer('g',null);goldText(g,'A LUZ ESTRAGA O VINHO',960,150,62);ornament(g,960,215,560);
 g.fillStyle='#FFF1D6';g.fillRect(560,280,800,16);const pul=.6+.4*Math.sin(t*6),gl=g.createLinearGradient(0,296,0,820);gl.addColorStop(0,`rgba(255,240,200,${.45*pul})`);gl.addColorStop(1,'rgba(255,240,200,0)');g.fillStyle=gl;g.beginPath();g.moveTo(560,296);g.lineTo(1360,296);g.lineTo(1260,820);g.lineTo(660,820);g.closePath();g.fill();
 g.fillStyle='#5A2E1C';g.fillRect(420,800,1080,22);for(let i=0;i<4;i++)bottleS(g,[700+i*170,800],1.05,'clear');const back=easeIO(seg(t,wt(17,'fundo')-.2,wt(17,'fundo')+.4));g.save();g.globalAlpha=.55+.45*back;bottleS(g,[1600,800],1.05,'white');g.restore();
 chip(g,1600,420,'PEGUE A DO FUNDO',back);chip(g,960,900,'GARRAFA TRANSPARENTE = MAIS RISCO',ease(seg(t,wt(17,'transparentes')-.3,wt(17,'transparentes')+.2)));blit(ctx,L.g,0,seg(t,T[s],T[s]+.4))}
function vintageCard(t,s){veil(null,t,marketWall,.75);const g=layer('g',null);goldText(g,'BRANCO, ROSÉ E ESPUMANTE',960,170,58);ornament(g,960,235,560);const a=easeIO(seg(t,wt(18,'nova')-.3,wt(18,'nova')+.3));
 for(const [cx,yr,st,best] of [[560,'2022','white',0],[960,'2024','rose',0],[1360,'2025','spark',1]]){g.save();g.globalAlpha=best?1:1-.45*a;bottleS(g,[cx,760],1.15,st);g.restore();priceTag(g,cx,420,yr,1,best?.9+.15*a:.8)}
 chip(g,1360,860,'A SAFRA MAIS NOVA',a);blit(ctx,L.g,0,seg(t,T[s],T[s]+.4))}
function corkCard(t,s){veil(null,t,marketWall,.75);const g=layer('g',null);goldText(g,'FUJA DESTA GARRAFA',960,170,60);ornament(g,960,235,560);const u=easeIO(seg(t,T[s]+.4,T[s]+1.6));
 g.save();g.translate(960,1100);g.scale(2.6,2.6);CEL.glass='#1E3A31';wineBottle(g,0,0,1,false,'#5E1428');g.fillStyle='#C99A5B';g.fillRect(-10,-286-22*u,20,26);g.fillStyle='rgba(120,30,40,.85)';g.beginPath();g.moveTo(-13,-262);g.quadraticCurveTo(-16,-236,-11,-226);g.quadraticCurveTo(-8,-236,-9,-262);g.fill();g.beginPath();g.moveTo(9,-262);g.quadraticCurveTo(14,-226,10,-214);g.quadraticCurveTo(6,-226,6,-262);g.fill();g.restore();
 chip(g,1400,420,'ROLHA ESTUFADA',ease(seg(t,wt(19,'estufada')-.2,wt(19,'estufada')+.2)));chip(g,520,560,'MELADO NO GARGALO',ease(seg(t,wt(19,'melada')-.2,wt(19,'melada')+.2)));chip(g,960,880,'PEGOU CALOR',ease(seg(t,wt(19,'calor')-.2,wt(19,'calor')+.2)));blit(ctx,L.g,0,seg(t,T[s],T[s]+.4))}
function cheeseCard(t,s){veil(null,t,drawRoom,.7);const g=layer('g',null);goldText(g,'QUEIJO E VINHO',960,170,62);ornament(g,960,235,560);const a1=ease(seg(t,wt(11,'fresco')-.3,wt(11,'fresco')+.3)),a2=ease(seg(t,wt(11,'curado')-.3,wt(11,'curado')+.3));
 g.save();g.globalAlpha=a1;g.fillStyle='#F7EFDF';g.beginPath();g.moveTo(400,600);g.lineTo(600,600);g.lineTo(570,450);g.closePath();g.fill();bottleS(g,[740,640],1,'white');goldText(g,'FRESCO OU DE CABRA',600,700,36,'Cinzel',700);g.restore();
 g.save();g.globalAlpha=a2;g.fillStyle='#E9C46A';g.beginPath();g.moveTo(1120,600);g.lineTo(1320,600);g.lineTo(1290,450);g.closePath();g.fill();bottleS(g,[1460,640],1,'red');goldText(g,'CURADO, TIPO PARMESÃO',1320,700,36,'Cinzel',700);g.restore();blit(ctx,L.g,0);
 serif('branco',600,760,48,`rgba(243,230,200,${a1})`,'italic');serif('tinto',1320,760,48,`rgba(243,230,200,${a2})`,'italic')}
function finalTable(t,s){veil(null,t,marketWall,.76);const g=layer('g',null);goldText(g,'O QUE EU LEVO?',960,130,80);ornament(g,960,210,600);blit(ctx,L.g,0,seg(t,T[s],T[s]+.5));
 const C=[['meat','CHURRASCO','tinto encorpado','red','churrasco'],['fish','PEIXE','branco','white','peixe'],['cheese','PETISCOS','espumante brut','spark','petiscos'],['pizza','PIZZA','tinto médio','red','pizza'],['dessert','SOBREMESA','moscatel','moscato','sobremesa']];
 C.forEach(([food,n,d,st,w],i)=>{const cx=220+i*370,ta=wt(21,w)-.15,c=layer('c'+i,null);plaque(c,cx,600,330,560);foodIcon(c,food,cx-40,430);bottleS(c,[cx+90,700],.62,st);goldText(c,n,cx,768,28,'Cinzel',700);blit(ctx,L['c'+i],0,seg(t,ta,ta+.45));serif(d,cx,822,38,`rgba(243,230,200,${seg(t,ta,ta+.45)})`)})}
function ctaScene(t,cam,s){talkScene(t,cam,s,Object.assign({gest:[[0,'wave'],[2.2,'open'],[4.5,'rest']],bottles:[['red',1100]],face:t=>({mouth:.7,brow:.5})},MK));
 const a=easeIO(seg(t,T[s]+.4,T[s]+1)),g=layer('g',null);g.save();g.globalAlpha=a;g.fillStyle='#B0122E';g.beginPath();g.roundRect(120,120,520,110,55);g.fill();g.strokeStyle='#F2D27A';g.lineWidth=5;g.stroke();g.restore();
 g.save();g.globalAlpha=a;goldText(g,'INSCREVA-SE',380,176,52,'Cinzel',900);g.restore();chip(g,380,300,'COMENTE: QUAL OCASIÃO?',easeIO(seg(t,wt(22,'comentários'),wt(22,'comentários')+.4)));blit(ctx,L.g,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=a;ctx.drawImage(LOGO,1640,40,230,220);ctx.restore()}}
const S_=(o)=>(t,c,s)=>talkScene(t,c,s,o);
const SC=[null,
 S_(Object.assign({bottles:[['white',760],['red',1100]],gest:[[0,'rest'],[1.4,'open']],chips:[['PESO DA COMIDA',560,250,wt(1,'comida')],['PESO DO VINHO',1360,250,wt(1,'vinho')]],face:t=>({brow:.6})},MK)),
 S_(Object.assign({bottles:[['white',760],['red',1100]],gest:[[0,'point'],[2.2,'rest']],chips:[['FORTE → ENCORPADO',1360,250,wt(2,'forte')],['LEVE → LEVE',560,250,wt(2,'leve')]],face:t=>({look:t<wt(2,'leve')?.4:-.4,brow:.7})},MK)),
 S_({set:backyard,props:BIG(meatBoard,700),bottles:[['red',1100]],gest:[[0,'rest'],[1.2,'open']],chips:[['PICANHA · COSTELA · LINGUIÇA',960,250,wt(3,'picanha')]],face:t=>({mouth:.65,brow:.6})}),
 S_({set:backyard,props:BIG(meatBoard,700),gest:[[0,'rest'],[.4,'bottleUp']],bottleHeld:'red',chips:[['MALBEC',1560,330,wt(4,'malbec')],['CABERNET',1560,450,wt(4,'cabernet')],['TANNAT',1560,570,wt(4,'tannat')]],face:t=>({look:.5,brow:.6})}),
 S_({set:backyard,props:BIG(meatBoard,620),bottles:[['red',1100]],sip:T[5]+1.0,chips:[['O TANINO LIMPA A GORDURA',960,250,wt(5,'tanino')]],face:t=>({mouth:t>T[5]+4.3?.9:.45,laugh:t>T[5]+4.4&&t<T[5]+5.6?1:0})}),
 S_({set:beach,props:BIG(fishPlate,700),gest:[[0,'thinking'],[1.6,'bottleUp']],bottleHeld:'white',chips:[['SAUVIGNON BLANC',1500,360,wt(6,'sauvignon')],['CHARDONNAY',1500,480,wt(6,'chardonnay')]],face:t=>({look:.4,mouth:.6,brow:.7})}),
 S_({set:beach,props:BIG(fishPlate,600),bottles:[['white',1100]],sip:T[7]+.6,wineCol:W_WHITE,chips:[['ACIDEZ = LIMÃO NO PEIXE',960,250,wt(7,'acidez')]],face:t=>({mouth:t>T[7]+3.7?.85:.45})}),
 S_({set:beach,props:BIG(fishPlate,700),bottles:[['rose',1100],['red',1260]],gest:[[0,'thinking'],[2.4,'point']],chips:[['SALMÃO · ATUM',420,300,wt(8,'salmão')],['ROSÉ',1520,300,wt(8,'rosé')],['PINOT NOIR',1520,420,wt(8,'pinot')]],face:t=>({brow:.8,look:.3})}),
 S_({set:(x,t)=>drawRoom(x,true,t),props:BIG(cheeseBoard,680),gest:[[0,'thinking'],[2.8,'bottleUp']],bottleHeld:'spark',chips:[['ESPUMANTE BRUT',1500,360,wt(9,'espumante')],['COMBINA COM QUASE TUDO',1500,480,wt(9,'combina')]],face:t=>({mouth:.7,brow:.6})}),
 S_({set:(x,t)=>drawRoom(x,true,t),props:BIG(cheeseBoard,600),bottles:[['spark',1100]],sip:T[10]+.3,wineCol:W_SPARK,chips:[['AS BOLHAS LIMPAM A BOCA',960,250,wt(10,'bolhas')]],face:t=>({mouth:t>T[10]+3.4?.85:.45})}),
 (t,c,s)=>cheeseCard(t,s),
 S_({set:barWall,props:BIG(pizzaBoard,680),gest:[[0,'thinking'],[2.2,'bottleUp']],bottleHeld:'red',chips:[['O TOMATE É ÁCIDO',420,300,wt(12,'tomate')],['MERLOT',1520,360,wt(12,'merlot')],['SANGIOVESE',1520,480,wt(12,'sangiovese')]],face:t=>({mouth:.6,look:.3,brow:.6})}),
 S_({set:(x,t)=>drawRoom(x,false,t),props:BIG(pudim,700),bottles:[['moscato',1100]],gest:[[0,'thinking'],[2.6,'open']],chips:[['O VINHO MAIS DOCE QUE O DOCE',960,250,wt(13,'regra')]],face:t=>({brow:.7,mouth:.55})}),
 S_({set:(x,t)=>drawRoom(x,false,t),props:BIG(pudim,680),gest:[[0,'rest'],[.4,'bottleUp']],bottleHeld:'moscato',chips:[['MOSCATEL',1520,380,wt(14,'moscatel')]],face:t=>({mouth:.85,laugh:t>T[14]+2.2&&t<T[14]+3.4?1:0})}),
 S_(Object.assign({bottles:[['white',760],['red',1100]],gest:[[0,'open'],[2.6,'point']],chips:[['3 CUIDADOS NA PRATELEIRA',960,250,wt(15,'três')]],face:t=>({brow:.4,mouth:.4})},MK)),
 (t,c,s)=>labelCard(t,s),
 (t,c,s)=>lightCard(t,s),
 (t,c,s)=>vintageCard(t,s),
 (t,c,s)=>corkCard(t,s),
 (t,c,s)=>shelf(t,s),
 (t,c,s)=>finalTable(t,s),
 (t,c,s)=>ctaScene(t,c,s),
 null];
const TALKS=[1,2,3,4,5,6,7,8,9,10,12,13,14,15,22];
FILM={dur:T[T.length-1],cuts:T.map(v=>Math.round(v*30)),fadeIn:0,fadeOut:.8,warm(){return .4},
 cam(s,u,t){if(TALKS.includes(s)){const k=TALKS.indexOf(s)%3;return [{x:lerp(950,975,u),y:lerp(560,545,u),z:lerp(1.18,1.28,easeIO(u)),b:[6,0,0]},{x:lerp(930,915,u),y:lerp(545,520,u),z:lerp(1.42,1.62,easeIO(u)),b:[8,0,0]},{x:lerp(1000,985,u),y:550,z:lerp(1.3,1.4,u),b:[7,0,0]}][k]}return {x:960,y:540,z:1,b:[10,0,0]}},
 draw(t,cam,s,u){if(s==0){thumbFrame(t);return}if(s==23){photo(IMG.logo,t,T[23],T[24],1,1.05);return}SC[s](t,cam,s)},
 plants(){return {}}};
(function(){const DISS={1:.6},xf=mk(),xz=mk(),CARD=[11,16,17,18,19,20,21],draw0=FILM.draw,cam0=FILM.cam;for(let s=2;s<23;s++)DISS[s]=.45;
 FILM.draw=(t,c,s,u)=>{const d=DISS[s],a=d?1-easeIO(seg(t,T[s],T[s]+d)):0;if(a>0){draw0(t,cam0(s-1,1,t),s-1,1);const x=xf.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0)}
  draw0(t,c,s,u);if(CARD.includes(s)){const k=1+.035*easeIO(u),x=xz.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0);ctx.save();ctx.setTransform(k,0,0,k,W/2*(1-k),H/2*(1-k));ctx.drawImage(xz,0,0);ctx.restore()}
  if(a>0)blit(ctx,xf,0,a);if(s!=0&&s!=22&&s!=23)watermark();if(s!=21&&s!=23)karaoke(t)}})();
// sound
for(let s=1;s<23;s++)say(T[s],'whoosh');
for(const [i,w] of [[4,'malbec'],[4,'cabernet'],[4,'tannat'],[6,'sauvignon'],[6,'chardonnay'],[8,'rosé'],[8,'pinot'],[9,'espumante'],[12,'merlot'],[12,'sangiovese'],[14,'moscatel'],[18,'nova']])say(wt(i,w),'tag');
for(const t0 of [T[5]+1.0,T[7]+.6,T[10]+.3]){say(t0+.1,'cloth');say(t0+1.2,'sip');say(t0+3.05,'glassdown')}
for(const w of ['churrasco','peixe','petiscos','pizza','sobremesa'])say(wt(21,w)-.15,'line');
