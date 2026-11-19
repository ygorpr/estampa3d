// ---------- cenas do vídeo "O vinho mais antigo do mundo" — Sommelier num museu; cena i = fala i ----------
function watermark(){if(!LOGO.complete)return;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.075;ctx.filter='blur(.6px)';ctx.drawImage(LOGO,960-230,720-221,460,442);ctx.restore()}
const MU={set:museum,front:cellarTable};
const ap=(t,i,w,d=.35)=>ease(seg(t,wt(i,w)-.1,wt(i,w)-.1+d));
function card(t,s,set,title,dim=.72){veil(null,t,set,dim);const g=layer('g',null);goldText(g,title,960,165,Math.min(62,Math.floor(1500/title.length)));ornament(g,960,232,560);return g}
const done=(g,t,s)=>blit(ctx,L.g,0,seg(t,T[s],T[s]+.4));
const fade=(g,a,fn)=>{if(a<=0)return;g.save();g.globalAlpha=a;fn();g.restore()};
const C3=(t,s,set,title,fn,dim)=>{const g=card(t,s,set,title,dim);fn(g);done(g,t,s)};
const SC=[null,
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['red',1100]],gest:[[0,'open'],[3,'point']],chips:[['1.700 ANOS',430,300,T[1]+.3],['E UMA REVIRAVOLTA!',1500,360,wt(1,'reviravolta')]],face:t=>({brow:.7,mouth:.65})},MU)),
 (t,c,s)=>C3(t,s,museum,'ALEMANHA · 1867',g=>{germanyMap(g,760,560,1.2,ap(t,2,'speyer',.6));fade(g,ap(t,2,'mil',.5),()=>{plaque(g,1340,520,380,180);goldText(g,'1867',1340,505,84)})},.6),
 (t,c,s)=>C3(t,s,museum,'UM TÚMULO ROMANO',g=>{tombChamber(g,t);chip(g,960,380,'UM CASAL ROMANO',ap(t,3,'casal'));chip(g,960,480,'2 CAIXÕES DE PEDRA',ap(t,3,'caixões'))},.5),
 (t,c,s)=>C3(t,s,museum,'16 GARRAFAS',g=>{const one=ap(t,4,'só',.5);for(let i=0;i<16;i++){const cx=420+(i%8)*155,b=560+Math.floor(i/8)*260;fade(g,ease(seg(t,T[s]+.2+i*.08,T[s]+.5+i*.08))*(i==10?1:1-.6*one),()=>oldBottle(g,cx,b,.55,i==10?'#6A7A3A':'#5E6E50'))}
  chip(g,960,330,'SÓ UMA COM LÍQUIDO!',one)},.6),
 (t,c,s)=>C3(t,s,museum,'A GARRAFA',g=>{speyerBottle(g,820,860,1.6);chip(g,1380,360,'1,5 LITRO',ap(t,5,'litro'));chip(g,1380,480,'ALÇAS DE GOLFINHO',ap(t,5,'golfinho'));fade(g,ap(t,5,'trezentos',.5),()=>{plaque(g,1380,660,360,170);goldText(g,'ANO 325',1380,650,70)})},.55),
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['red',1100]],gest:[[0,'thinking'],[3.4,'point']],chips:[['LEMBRA DO AZEITE?',1500,330,wt(6,'azeite')]],face:t=>({brow:.8,mouth:.55})},MU)),
 (t,c,s)=>C3(t,s,museum,'O TRUQUE ROMANO',g=>{speyerBottle(g,820,860,1.6);const a=ap(t,7,'azeite',.8);if(a>0&&a<1){g.fillStyle='rgba(232,190,70,.85)';g.fillRect(814,180,12,330)}fade(g,ap(t,7,'cera',.5),()=>{g.fillStyle='#8E1B3A';g.beginPath();g.ellipse(820,860-1.6*336,52,20,0,0,7);g.fill()});
  chip(g,1380,420,'CAMADA DE AZEITE',ap(t,7,'azeite'));chip(g,1380,560,'FECHADA COM CERA',ap(t,7,'cera'))},.55),
 (t,c,s)=>C3(t,s,museum,'A TAMPA NATURAL',g=>{speyerBottle(g,760,880,1.6);fade(g,ap(t,8,'tampa',.5),()=>arrow(g,1180,610,920,610,GOLD2,8));chip(g,1420,560,'O AZEITE ENDURECEU',ap(t,8,'endureceu'));chip(g,1420,700,'DÁ PRA VER ATÉ HOJE',ap(t,8,'hoje'))},.55),
 (t,c,s)=>C3(t,s,museum,'POR QUE NUM TÚMULO?',g=>{offerings(g,960,760);chip(g,960,400,'COMIDA E BEBIDA',ap(t,9,'comida'));chip(g,960,520,'PRA OUTRA VIDA',ap(t,9,'vida'))},.55),
 (t,c,s)=>C3(t,s,museum,'ATÉ HOJE NO MUSEU',g=>{vitrine(g,960,840,300,420,1);chip(g,960,320,'MUSEU HISTÓRICO DO PALATINADO',ap(t,10,'palatinado'))},.35),
 (t,c,s)=>C3(t,s,museum,'PRIMEIRA GUERRA MUNDIAL',g=>{flask(g,560,820,1.6);speyerBottle(g,1200,840,1.3);chip(g,560,380,'UM QUÍMICO',ap(t,11,'químico'));chip(g,1300,330,'NÃO TEVE CORAGEM',ap(t,11,'coragem'))},.6),
 (t,c,s)=>C3(t,s,museum,'NUNCA FOI ABERTA',g=>{vitrine(g,760,840,300,420,1);stamp(g,1340,460,'NÃO ABRIR',ease(seg(t,wt(12,'nunca')-.15,wt(12,'nunca')+.25)));chip(g,1340,660,'MEDO DO AR',ap(t,12,'ar'))},.5),
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['red',1100]],gest:[[0,'thinking'],[3.2,'open']],chips:[['NÃO FARIA MAL...',430,330,wt(13,'mal')],['MAS O GOSTO...',1500,330,wt(13,'gosto')]],face:t=>({brow:t>wt(13,'gosto')?-.4:.6,mouth:t>wt(13,'gosto')?.2:.5})},MU)),
 (t,c,s)=>C3(t,s,museum,'JÁ NEM É MAIS VINHO',g=>{speyerBottle(g,760,880,1.6);chip(g,1420,420,'RESTO DE VINHO',ap(t,14,'restos'));chip(g,1420,560,'+ AZEITE',ap(t,14,'azeite'))},.55),
 (t,c,s)=>C3(t,s,museum,'A CAMPEÃ',g=>{trophy(g,760,600,1.6);chip(g,1340,420,'+150 ANOS NO TOPO',ap(t,15,'cinquenta'));chip(g,1340,580,'ATÉ A REVIRAVOLTA!',ap(t,15,'reviravolta'))},.55),
 (t,c,s)=>C3(t,s,museum,'ESPANHA · 2019',g=>{g.fillStyle='#E9D8B0';g.fillRect(420,480,520,340);g.fillStyle='#8E1B3A';g.beginPath();g.moveTo(400,480);g.lineTo(680,320);g.lineTo(960,480);g.closePath();g.fill();g.fillStyle='#3A2A20';g.fillRect(620,640,120,180);
  const u=ap(t,16,'túmulo',.8);fade(g,u,()=>{g.fillStyle='#1A100C';g.beginPath();g.ellipse(680,860,200,40*u,0,0,7);g.fill()});fade(g,ap(t,16,'dezenove',.5),()=>{plaque(g,1340,460,360,170);goldText(g,'2019',1340,450,80)});chip(g,1340,660,'CARMONA · SUL DA ESPANHA',ap(t,16,'carmona'))},.55),
 (t,c,s)=>C3(t,s,museum,'A URNA',g=>{urn(g,800,860,2,ap(t,17,'líquido',1));chip(g,1380,420,'URNA FUNERÁRIA',ap(t,17,'urna'));chip(g,1380,560,'UNS 5 LITROS',ap(t,17,'cinco'))},.55),
 (t,c,s)=>C3(t,s,museum,'ERA VINHO!',g=>{microscope(g,560,860,1.3);urn(g,960,860,1.2,1);fade(g,ap(t,18,'anos',.5),()=>{plaque(g,1440,520,400,180);goldText(g,'2.000 ANOS',1440,505,64)});chip(g,1440,700,'UNIV. DE CÓRDOBA',ap(t,18,'córdoba'))},.55),
 (t,c,s)=>C3(t,s,museum,'A SURPRESA',g=>{const u=easeIO(seg(t,wt(19,'mudou')-.3,wt(19,'mudou')+1));glassW(g,820,840,2.4,.55,mixC('#E9D98A','#A85A3A',1-u));chip(g,1380,420,'ERA VINHO BRANCO!',ap(t,19,'branco'));chip(g,1380,560,'A COR MUDOU COM O TEMPO',ap(t,19,'mudou'))},.55),
 (t,c,s)=>C3(t,s,museum,'QUEM É MAIS VELHO?',g=>{g.strokeStyle=GOLD;g.lineWidth=8;g.beginPath();g.moveTo(420,560);g.lineTo(1500,560);g.stroke();for(const [x0,y,n,w] of [[520,'CARMONA','séc. I',T[s]+.2],[1400,'SPEYER','ano 325',T[s]+.8]]){const a=ease(seg(t,w,w+.4));fade(g,a,()=>{g.fillStyle=GOLD2;g.beginPath();g.arc(x0,560,18,0,7);g.fill();goldText(g,y,x0,470,60);serif(n,x0,630,40)})}chip(g,960,780,'~300 ANOS MAIS VELHO',ap(t,20,'trezentos'))},.6),
 (t,c,s)=>C3(t,s,museum,'O TÍTULO DE SPEYER',g=>{speyerBottle(g,820,880,1.7);crown(g,820,880-1.7*360,1.3);chip(g,1400,420,'A GARRAFA FECHADA',ap(t,21,'fechada'));chip(g,1400,560,'MAIS ANTIGA DO MUNDO',ap(t,21,'mundo'))},.55),
 (t,c,s)=>C3(t,s,museum,'GEÓRGIA · 8.000 ANOS',g=>{for(const [x0,k] of [[520,1.3],[780,1.6],[1040,1.2]])clayJar(g,x0,860,k);fade(g,ap(t,22,'oito',.5),()=>{plaque(g,1440,520,400,180);goldText(g,'8.000 ANOS',1440,505,64)});chip(g,1440,700,'POTES DE BARRO',ap(t,22,'barro'))},.55),
 (t,c,s)=>finalTable(t,s),
 (t,c,s)=>ctaScene(t,c,s),
 null];
const mixC=(a,b,u)=>{const p=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)),A=p(a),B=p(b);return '#'+A.map((v,i)=>Math.round(v+(B[i]-v)*u).toString(16).padStart(2,'0')).join('')};
function finalTable(t,s){veil(null,t,museum,.78);const g=layer('g',null);goldText(g,'O VINHO MAIS ANTIGO',960,130,72);ornament(g,960,205,600);blit(ctx,L.g,0,seg(t,T[s],T[s]+.5));
 const C=[['speyer','SPEYER','garrafa fechada','alemanha'],['325','ANO 325','feita pelos romanos','alemanha'],['oil','AZEITE','a tampa natural','alemanha'],['urn','CARMONA','2.000 anos, líquido','espanha'],['jar','GEÓRGIA','vinho há 8.000 anos','oito']];
 C.forEach(([ic,n,d,w],i)=>{const cx=220+i*370,ta=wt(23,w)-.15+(i==1?.4:i==2?.8:0),c=layer('c'+i,null);plaque(c,cx,600,330,560);
  if(ic=='speyer'||ic=='oil')speyerBottle(c,cx,700,.75);else if(ic=='325'){goldText(c,'325',cx,560,80)}else if(ic=='urn')urn(c,cx,700,.85,1);else clayJar(c,cx,700,.85);
  goldText(c,n,cx,768,34,'Cinzel',700);blit(ctx,L['c'+i],0,seg(t,ta,ta+.45));serif(d,cx,822,32,`rgba(243,230,200,${seg(t,ta,ta+.45)})`)})}
function ctaScene(t,cam,s){talkScene(t,cam,s,Object.assign({gest:[[0,'wave'],[2.2,'open'],[4.2,'rest']],bottles:[['red',1100]],face:t=>({mouth:.7,brow:.5})},MU));
 const a=easeIO(seg(t,T[s]+.4,T[s]+1)),g=layer('g',null);g.save();g.globalAlpha=a;g.fillStyle='#B0122E';g.beginPath();g.roundRect(120,120,520,110,55);g.fill();g.strokeStyle=GOLD2;g.lineWidth=5;g.stroke();g.restore();
 g.save();g.globalAlpha=a;goldText(g,'INSCREVA-SE',380,176,52,'Cinzel',900);g.restore();chip(g,380,300,'QUAL CURIOSIDADE?',ap(t,24,'curiosidade'));blit(ctx,L.g,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=a;ctx.drawImage(LOGO,1640,40,230,220);ctx.restore()}}
const TALKS=[1,6,13,24];
FILM={dur:T[T.length-1],cuts:T.map(v=>Math.round(v*30)),fadeIn:0,fadeOut:.8,warm(){return .4},
 cam(s,u,t){if(TALKS.includes(s)){const k=TALKS.indexOf(s)%3;return [{x:lerp(950,975,u),y:lerp(560,545,u),z:lerp(1.18,1.28,easeIO(u)),b:[6,0,0]},{x:lerp(930,915,u),y:lerp(545,520,u),z:lerp(1.42,1.62,easeIO(u)),b:[8,0,0]},{x:lerp(1000,985,u),y:550,z:lerp(1.3,1.4,u),b:[7,0,0]}][k]}return {x:960,y:540,z:1,b:[10,0,0]}},
 draw(t,cam,s,u){if(s==0){thumbFrame(t);return}if(s==25){photo(IMG.logo,t,T[25],T[26],1,1.05);return}SC[s](t,cam,s)},
 plants(){return {}}};
(function(){const DISS={1:.6},xf=mk(),xz=mk(),CARD=[2,3,4,5,7,8,9,10,11,12,14,15,16,17,18,19,20,21,22,23],draw0=FILM.draw,cam0=FILM.cam;for(let s=2;s<25;s++)DISS[s]=.45;
 FILM.draw=(t,c,s,u)=>{const d=DISS[s],a=d?1-easeIO(seg(t,T[s],T[s]+d)):0;if(a>0){draw0(t,cam0(s-1,1,t),s-1,1);const x=xf.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0)}
  draw0(t,c,s,u);if(CARD.includes(s)){const k=1+.035*easeIO(u),x=xz.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0);ctx.save();ctx.setTransform(k,0,0,k,W/2*(1-k),H/2*(1-k));ctx.drawImage(xz,0,0);ctx.restore()}
  if(a>0)blit(ctx,xf,0,a);if(s!=0&&s!=24&&s!=25)watermark();if(s!=23&&s!=25)karaoke(t)}})();
// som
for(let s=1;s<25;s++)say(T[s],'whoosh');
for(const [i,w] of [[2,'mil'],[4,'dezesseis'],[5,'trezentos'],[7,'cera'],[15,'reviravolta'],[16,'dezenove'],[17,'cinco'],[18,'anos'],[19,'branco'],[20,'trezentos'],[22,'oito']])say(wt(i,w),'tag');
say(wt(12,'nunca'),'bottledown');say(wt(13,'gosto'),'yuck');
for(const [w,d] of [['alemanha',0],['alemanha',.4],['alemanha',.8],['espanha',0],['oito',0]])say(wt(23,w)-.15+d,'line');
