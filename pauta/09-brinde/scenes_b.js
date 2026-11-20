// ---------- cenas do vídeo 9 "Por que a gente brinda?" — Sommelier num bar aconchegante (taverna); cena i = fala i ----------
function watermark(){if(!LOGO.complete)return;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.075;ctx.filter='blur(.6px)';ctx.drawImage(LOGO,960-230,720-221,460,442);ctx.restore()}
const BAR={set:tavern,front:cellarTable};
const ap=(t,i,w,d=.35)=>ease(seg(t,wt(i,w)-.1,wt(i,w)-.1+d));
function card(t,s,set,title,dim=.72){veil(null,t,set,dim);const g=layer('g',null);goldText(g,title,960,150,Math.min(62,Math.floor(1500/title.length)));ornament(g,960,215,560);return g}
const done=(g,t,s)=>blit(ctx,L.g,0,seg(t,T[s],T[s]+.4));
const fade=(g,a,fn)=>{if(a<=0)return;g.save();g.globalAlpha=Math.min(1,a);fn();g.restore()};
const C3=(t,s,set,title,fn,dim)=>{const g=card(t,s,set,title,dim);fn(g);done(g,t,s)};
// cena ilustrada nítida (cenário + personagens), título dourado no topo
function stage(t,s,set,title,draw,over){const x=layer('w',null);set(x,t);draw(x);comp([['w']]);const g=layer('g',null);
 const gr=g.createLinearGradient(0,0,0,240);gr.addColorStop(0,'rgba(20,5,9,.88)');gr.addColorStop(1,'rgba(20,5,9,0)');g.fillStyle=gr;g.fillRect(0,0,W,240);
 goldText(g,title,960,100,Math.min(62,Math.floor(1500/title.length)));ornament(g,960,160,520);if(over)over(g);blit(ctx,L.g,0)}
const lab=(g,txt,cx,cy,a,sz=46)=>fade(g,a,()=>{g.font=`900 ${sz}px Cinzel`;const w=g.measureText(txt).width+70;plaque(g,cx,cy,w,sz*2.1);goldText(g,txt,cx,cy+2,sz)});
// derramar: fio de vinho da borda até o chão + poça
function pour(x,p0,floor,u,col='#6E1830',w=9){if(u<=0)return;x.save();x.strokeStyle=col;x.lineWidth=w;x.lineCap='round';const y1=lerp(p0[1],floor,clamp(u*1.6));x.beginPath();x.moveTo(p0[0],p0[1]);x.quadraticCurveTo(p0[0]+26,p0[1]+30,p0[0]+30,y1);x.stroke();
 if(u>.5){x.fillStyle=col;x.beginPath();x.ellipse(p0[0]+34,floor+4,30+60*clamp((u-.5)*2),9+8*clamp((u-.5)*2),0,0,7);x.fill()}x.restore()}
const loc=(x,p)=>{const q=x.getTransform().invertSelf().transformPoint(new DOMPoint(p[0],p[1]));return [q.x,q.y]};
const rimOf=(hw,s,a,dx=110,dy=-72)=>{const c=Math.cos(a),n=Math.sin(a);return [hw[0]+s*(dx*c-dy*n),hw[1]+s*(dx*n+dy*c)]};
// mapa da Europa (lon/lat aproximados)
function euMap(x,cx,cy,k,hlDE){const P=(lo,la)=>[cx+(lo-10)*k,cy-(la-47.5)*k*1.4],poly=(pts,fill,stroke=true)=>{x.beginPath();pts.forEach((q,i)=>{const p=P(q[0],q[1]);i?x.lineTo(p[0],p[1]):x.moveTo(p[0],p[1])});x.closePath();x.fillStyle=fill;x.fill();if(stroke){x.strokeStyle='#8A6A34';x.lineWidth=3;x.stroke()}};
 x.save();const a=P(-12,61),b=P(33,35);x.fillStyle='rgba(20,40,70,.55)';x.beginPath();x.roundRect(a[0],a[1],b[0]-a[0],b[1]-a[1],24);x.fill();x.strokeStyle=GOLD;x.lineWidth=5;x.stroke();x.beginPath();x.roundRect(a[0],a[1],b[0]-a[0],b[1]-a[1],24);x.clip();
 const land='#CDB27A';
 poly([[-9,43.5],[-8.9,42],[-8.9,38.7],[-8.9,37],[-6,36.2],[-5.6,36],[-4,36.7],[-2,36.8],[-.5,38.3],[.2,39.5],[.9,41],[3.2,42],[3.1,42.5],[4.8,43.4],[6.5,43.1],[7.5,43.8],[8.8,44.4],[10.3,43.5],[12.2,41.8],[14.2,40.8],[15.7,40],[15.6,38.2],[16.6,38.4],[17.1,39],[16.5,39.7],[17.2,40.5],[18.5,40.1],[17.9,40.6],[16,41.5],[14,42.5],[12.4,44.2],[12.3,45.4],[13.7,45.6],[15,44.5],[17,43.3],[19.3,42],[19.5,40.5],[21,38.5],[22.4,36.5],[23.7,38],[22.9,40.6],[26,40.8],[29,41.2],[28,43.2],[30.5,46.5],[34,46.5],[34,62],[30,62],[30,60],[24,59.4],[21.5,57.5],[21,55.7],[19,54.4],[14.5,54],[11,54],[10.2,56],[10.6,57.7],[8.6,57.1],[8.6,53.6],[7,53.4],[4.8,52.9],[3.6,51.4],[1.6,50.9],[.2,49.6],[-1.6,49.6],[-1.6,48.7],[-4.7,48.4],[-2.2,47.2],[-1.2,46],[-1.5,43.4],[-3.8,43.4],[-8,43.7]],land);
 poly([[12.5,56],[11.9,57.7],[10.6,59.9],[5.5,58.9],[5,62],[19,62],[18.1,59.3],[16.5,57],[14.5,56.1]],land);
 poly([[-5.7,50.1],[1.4,51.1],[1.7,52.7],[.3,53.5],[-1.5,55],[-2,56],[-1.8,57.6],[-3,58.6],[-5,58.6],[-6.2,56.5],[-4.8,55.3],[-3.1,54.6],[-3,53.4],[-4.6,53.3],[-4.2,52.2],[-5.2,51.7],[-3,51.3]],land);
 poly([[-6,52.2],[-6.2,54],[-7.3,55.3],[-10,54.2],[-10,51.6],[-8,51.6]],land);poly([[12.4,37.8],[15.6,38.2],[15.1,36.7]],land);poly([[8.6,43],[9.5,42.9],[9.4,41.4],[8.6,41.8]],land);poly([[8.4,41],[9.8,41],[9.6,39],[8.4,39]],land);
 if(hlDE>0){x.globalAlpha=hlDE;poly([[6,51.8],[7,53.4],[8.6,53.6],[9.5,54.8],[11,54.2],[14.2,53.9],[14.8,51],[12.1,50.3],[13.8,48.6],[13,47.5],[10,47.5],[7.6,47.6],[8.2,49],[6.4,49.5],[6,50.8]],'#C8213F',false);x.globalAlpha=1}
 x.restore();return P}
// Sommelier com duas taças (bate pelo bojo)
function twoGlass(t,cam,s){const x=layer('w',cam);tavern(x,t);const t0=T[s],tb=wt(8,'bater'),u=kf(t,[[t0,0],[tb-.4,0],[tb,1],[tb+.6,1],[tb+1.1,.15],[T[s+1]+1,.15]]);
 const p=sommPose(t,{look:-.1,brow:.8,mouth:.5,blink:blinkAt(t,[t0+1.3,t0+3.9])});const sp=speak(t);p.open=Math.max(p.open||0,sp);if(sp>.1)p.mouth=.35;
 setHands(p,[[lerp(790,915,u),lerp(770,758,u)],lerp(70,110,u)],[[lerp(1130,1005,u),lerp(770,758,u)],lerp(70,110,u)]);const hp=sommActor(cam,p);
 const f=layer('f',cam);cellarTable(f);const hl=h2w(hp,'l'),hr=h2w(hp,'r');glassW(f,hl[0],hl[1]+37,1,.4,'#5E1428');glassW(f,hr[0],hr[1]+37,1,.4,'#5E1428');gripHand(f,hl[0],hl[1],0,C10,.85);gripHand(f,hr[0],hr[1],0,C10,.85);
 comp([['w',cam.b[0]],['h'],['f']]);chipSafe.top=0;for(const [txt,cx0,cy0,ta] of [['E O VENENO?',1500,330,wt(8,'veneno')]]){const c=layer('chipL',null),[cx,cy]=chipSafe(txt,cx0,cy0);chip(c,cx,cy,txt,ease(seg(t,ta,ta+.35)));blit(ctx,L.chipL,0)}}
const bowlPath=(x,bx,by,s)=>{x.beginPath();const P=(a,b)=>[bx+a*s,by+b*s],bw=42;let q=P(-6,-72);x.moveTo(q[0],q[1]);q=P(-bw-4,-92);let r=P(-bw,-136);x.quadraticCurveTo(q[0],q[1],r[0],r[1]);q=P(-bw+4,-178);x.lineTo(q[0],q[1]);q=P(bw-4,-178);x.lineTo(q[0],q[1]);q=P(bw,-136);x.lineTo(q[0],q[1]);q=P(bw+4,-92);r=P(6,-72);x.quadraticCurveTo(q[0],q[1],r[0],r[1]);x.closePath()};
const SC=[null,
 // 1 — gancho: 3.000 anos de história
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['red',1100]],gest:[[0,'open'],[3.2,'point'],[6.5,'open']],chips:[['3.000 ANOS',430,240,wt(1,'três')],['GRÉCIA',430,360,wt(1,'gregos')],['ROMA',430,480,wt(1,'romano')],['ALEMANHA',1500,360,wt(1,'alemão')],['LENDA',1500,480,wt(1,'lenda')]],face:t=>({brow:.8,mouth:.65})},BAR)),
 // 2 — a libação na Grécia
 (t,c,s)=>{const ta=wt(2,'derramava'),u=easeIO(seg(t,ta-.3,ta+.6)),pu=seg(t,ta+.3,ta+3.2),a=lerp(.05,.95,u);let hw;
  stage(t,s,greece,'GRÉCIA ANTIGA',x=>{altar(x,1180,800,t);hw=fig(x,{x:600,y:960,s:.85,kind:'greek',beard:'#3A2A1E',hairT:'curly',hair:'#3A2A1E',hat:'laurel',hl:[-190,-560],hr:[175,-500],hold:{r:'kylix'},a:{r:a},lv:lerp(.65,.35,pu),t,look:.4,lookY:.5,blink:blinkAt(t,[T[s]+1.5,T[s]+5])});
   pour(x,rimOf(hw.r,.85,a),925,pu*(u>.9?1:0))},g=>{lab(g,'LIBAÇÃO',1400,330,ap(t,2,'libação'));lab(g,'UM PRESENTE AOS DEUSES',1250,820,ap(t,2,'presente'),40)})},
 // 3 — o primeiro gole era dos deuses
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['red',1100]],gest:[[0,'open'],[3,'thinking'],[5.6,'point']],chips:[['AGRADECER',430,300,wt(3,'agradecer')],['PEDIR PROTEÇÃO',430,420,wt(3,'proteção')],['O 1º GOLE É DOS DEUSES!',1500,360,wt(3,'primeiro')]],face:t=>({brow:.6,mouth:.6})},BAR)),
 // 4 — Roma: banquetes e Ovídio
 (t,c,s)=>{const tv=wt(4,'ovídio'),tr=wt(4,'registrou'),up=easeIO(seg(t,wt(4,'saúde')-.4,wt(4,'saúde')+.4)),tc=wt(4,'césar');
  stage(t,s,rome,'ROMA · OS BANQUETES',x=>{const F=(o)=>fig(x,Object.assign({seated:1,kind:'roman',t,s:.78},o));
   F({x:520,y:960,hairT:'short',hair:'#3A2A1E',hat:'laurel',hl:[-150,-330],hr:[lerp(150,175,up),lerp(-380,-580,up)],hold:{r:'goblet'},look:.5,mouth:'smile',ph:1});
   F({x:960,y:960,cloak2:'#6A1A6A',hairT:'short',hair:'#5A3E2A',hat:'laurel',hl:[-160,-330],hr:[lerp(150,175,up),lerp(-380,-580,up)],hold:{r:'goblet'},look:-.2,mouth:t>tc?'talk':'smile',open:t>tc?.4:0,ph:2});
   F({x:1400,y:960,hairT:'curly',hair:'#2A1A10',beard:'#2A1A10',hat:'laurel',hl:[-170,-420],hr:[lerp(150,175,up),lerp(-380,-580,up)],hold:{l:'scroll',r:'goblet'},look:-.5,ph:3,open:speak(t)*.0});
   x.fillStyle='#5A2E1C';x.fillRect(200,760,1520,30);x.fillStyle='#3A1C12';x.fillRect(200,790,1520,200);x.fillStyle='rgba(212,162,76,.6)';x.fillRect(200,760,1520,4);
   grapesC(x,700,740,.6);x.fillStyle='#C98A4A';x.beginPath();x.ellipse(1180,748,70,22,0,Math.PI,0);x.fill();amphora(x,280,900,.55)},
  g=>{lab(g,'OVÍDIO, POETA ROMANO',1400,300,ease(seg(t,tv-.1,tv+.25)),36);fade(g,ease(seg(t,tr-.1,tr+.4)),()=>{g.fillStyle='#E9D8B0';g.beginPath();g.roundRect(420,200,700,150,12);g.fill();g.fillStyle='#C9B488';for(const k of [-1,1]){g.beginPath();g.ellipse(420+350+k*350,275,16,86,0,0,7);g.fill()}
   g.font='italic 600 40px Cormorant';g.textAlign='center';g.textBaseline='middle';g.fillStyle='#3A1A10';g.fillText('“Saúde a vocês...',770,250);g.fillText('e saúde a ti, César!”',770,300)})})},
 // 5 — a palavra brinde vem do alemão
 (t,c,s)=>{stage(t,s,castle,'DE ONDE VEM A PALAVRA?',x=>{const off=easeIO(seg(t,wt(5,'ofereço')-.5,wt(5,'ofereço')+.3));
   fig(x,{x:470,y:1000,s:.85,kind:'lands',top:'#C8213F',top2:'#E8C24A',beard:'#8A5A2A',hair:'#8A5A2A',hat:'barett',hatCol:'#1A1220',hl:[-150,-380],hr:[lerp(160,230,off),lerp(-430,-520,off)],hold:{r:'tankard',l:'pike'},t,look:.3,mouth:'smile'})},
   g=>{lab(g,'NÃO É PORTUGUESA!',1260,300,ap(t,5,'portuguesa'),40);fade(g,ap(t,5,'alemão',.5),()=>{plaque(g,1260,500,760,190);goldText(g,"BRING DIR'S",1260,488,86)});lab(g,'= “EU TE OFEREÇO”',1260,700,ap(t,5,'ofereço'),48)})},
 // 6 — soldados alemães espalham a palavra
 (t,c,s)=>C3(t,s,castle,'ANOS 1500 · A PALAVRA VIAJA',g=>{const P=euMap(g,760,530,15,ap(t,6,'alemães',.6)),de=P(10.5,51);
   for(const [lo,la,w,txt,dx,dy] of [[-3.7,40.4,'brindis','BRINDIS (ESP.)',30,80],[14,41.8,'brindisi','BRINDISI (IT.)',140,50],[-8.2,39.6,'nosso','BRINDE (PORT.)',-60,-90]]){const u=ease(seg(t,wt(6,w)-.4,wt(6,w)+.4)),q=P(lo,la);if(u>0){arrow(g,de[0],de[1],lerp(de[0],q[0],u),lerp(de[1],q[1],u),GOLD2,8)}lab(g,txt,q[0]+dx,q[1]+dy,ease(seg(t,wt(6,w),wt(6,w)+.35)),28)}
   fade(g,ap(t,6,'alemães',.5),()=>{g.fillStyle='#F2D27A';g.beginPath();g.arc(de[0],de[1],12,0,7);g.fill()});
   fig(g,{x:1600,y:880,s:.55,kind:'lands',top:'#1E3A31',top2:'#E8C24A',stache:'#5A3E2A',hair:'#5A3E2A',hat:'barett',hatCol:'#5E1428',hl:[-150,-380],hr:[150,-420],hold:{r:'tankard',l:'pike'},t,look:-.4});
   chip(g,1560,300,'SOLDADOS ALEMÃES',ap(t,6,'soldados'))},.6),
 // 7 — toast = torrada
 (t,c,s)=>C3(t,s,tavern,'EM INGLÊS: TOAST = TORRADA',g=>{const bx=640,by=860,sc=3.1,lvY=by+sc*(-74-.45*104);glassW(g,bx,by,sc,.45,'#5E1428');
   const dt=wt(7,'punham'),u=clamp((t-dt)/1.1),y=lerp(160,lvY-6,u*u),bob=u>=1?Math.sin((t-dt-1.1)*3)*4:0;
   g.save();bowlPath(g,bx,by,sc);g.clip();if(u>0)toastSlice(g,bx,y+bob,1.05,.1+.2*(1-u));const se=clamp((t-wt(7,'especiarias'))/1);if(se>0){cinnamon(g,bx+40,lerp(150,lvY-2,se*se),.55,.3);clove(g,bx-50,lerp(120,lvY-8,se*se),1,.2)}
   g.fillStyle='rgba(94,20,40,.55)';g.fillRect(bx-200,lvY+4,400,300);g.restore();if(u>0&&u<1){g.save();g.globalAlpha=.9;toastSlice(g,bx,y,1.05,.1+.2*(1-u));g.restore()}
   if(u>=1){const k=clamp((t-dt-1.1)/.8);g.strokeStyle=`rgba(255,220,200,${.6*(1-k)})`;g.lineWidth=4;g.beginPath();g.ellipse(bx,lvY,60+60*k,8+6*k,0,0,7);g.stroke()}
   lab(g,'PÃO TORRADO + ESPECIARIAS',1330,300,ap(t,7,'especiarias'),36);fade(g,ap(t,7,'shakespeare',.5),()=>shakespeare(g,1330,580,.78));lab(g,'SHAKESPEARE',1330,820,ap(t,7,'shakespeare'),38)},.62),
 // 8 — e bater as taças?
 (t,c,s)=>twoGlass(t,c,s),
 // 9 — a lenda do veneno (castelo)
 (t,c,s)=>{const tf=wt(9,'força'),u=kf(t,[[T[s],0],[tf-.45,0],[tf,1],[tf+.6,1],[tf+1.1,.35],[T[s+1]+1,.35]]),tv=wt(9,'veneno');
  stage(t,s,castle,'IDADE MÉDIA',x=>{hallTable(x);fig(x,{x:640,y:980,s:.88,kind:'medieval',top:'#5E1428',top2:'#D4A24C',beard:'#6A4A2A',hair:'#6A4A2A',hat:'chaperon',hatCol:'#1E3A31',hl:[-120,-320],hr:[lerp(170,320,u),lerp(-470,-560,u)],hold:{r:'tankard'},t,look:.6,lookY:-.2,mouth:t>tv?'o':'smile'});
   fig(x,{x:1280,y:980,s:.88,kind:'medieval',top:'#1E3A31',top2:'#C9963A',cloak:'#3A2A50',stache:'#2A1A10',hair:'#2A1A10',hl:[lerp(-170,-320,u),lerp(-470,-560,u)],hr:[120,-320],hold:{l:'tankard'},metal:true,t,look:-.6,lookY:-.2,mouth:t>tv?'o':'smile',ph:2})},
   g=>{lab(g,'DIZEM QUE...',360,250,ap(t,9,'dizem'),40);const pa=ap(t,9,'pular',.5);if(pa>0){g.save();g.globalAlpha=pa;g.setLineDash([16,14]);g.strokeStyle=GOLD2;g.lineWidth=6;g.beginPath();g.moveTo(880,440);g.quadraticCurveTo(960,330,1040,440);g.stroke();g.setLineDash([]);g.restore();arrow(g,1030,425,1042,442,GOLD2,6)}
    fade(g,ap(t,9,'veneno',.5),()=>skullVial(g,1600,560,1.1));lab(g,'VENENO?',1600,330,ap(t,9,'veneno'),44)})},
 // 10 — é lenda; o tim-tim vem do cristal (anos 1600)
 (t,c,s)=>C3(t,s,castle,'A VERDADE',g=>{const tl=wt(10,'lenda'),ts=wt(10,'seiscentos');
   g.save();g.globalAlpha=1-.55*ease(seg(t,ts-.3,ts+.3));tankard(g,470,600,1.5,.25);tankard(g,700,600,1.5,-.25,true);skullVial(g,585,800,.7);g.restore();
   stamp(g,585,560,'LENDA',ease(seg(t,tl-.15,tl+.25)));lab(g,'NENHUMA PROVA',585,330,ap(t,10,'prova'),40);
   const cu=easeIO(seg(t,ts+.2,ts+1.1));fade(g,ap(t,10,'seiscentos',.5),()=>{crystalPair(g,1340,780,1.6,cu);if(cu>.95)waves(g,1340,560,(t*1.2)%1,ap(t,10,'som',.5))});lab(g,'ANOS 1600: CRISTAL',1340,330,ap(t,10,'seiscentos'),40)},.62),
 // 11 — os cinco sentidos
 (t,c,s)=>C3(t,s,tavern,'OS 5 SENTIDOS',g=>{const K_=[['olho','VÊ','vê,'],['nariz','CHEIRA','cheira'],['mao','SEGURA','segura'],['boca','PROVA','prova'],['ouvido','ESCUTA','escuta']];
   K_.forEach(([k,n,w],i)=>{const a=ease(seg(t,wt(11,w)-.15,wt(11,w)+.3)),hl=i==4&&a>0;senseIcon(g,360+i*300,500,100,k,a,hl);fade(g,a,()=>goldText(g,n,360+i*300,650,42,'Cinzel',900))});
   if(t>wt(11,'escuta'))waves(g,1560,500,(t*1.1)%1,ap(t,11,'escuta',.6));lab(g,'O SOM COMPLETA!',960,800,ap(t,11,'escuta'),40)},.62),
 // 12 — Brasil: saúde e tim-tim (boteco)
 (t,c,s)=>{const tt=wt(12,'tim-tim'),u=kf(t,[[T[s],0],[tt-.45,0],[tt,1],[tt+.7,1],[tt+1.2,.3],[T[s+1]+1,.3]]);
  stage(t,s,boteco,'AQUI NO BRASIL',x=>{botecoTable(x,960,880,1240);
   fig(x,{x:520,y:1010,s:.82,kind:'casual',top:'#E8C24A',top2:'#C9A23A',stache:'#2A1A10',hair:'#2A1A10',skin:SKN.b,hl:[-110,-170],hr:[lerp(170,300,u),lerp(-520,-560,u)],hold:{r:'copo'},t,look:.5,mouth:'smile',sneaker:1});
   fig(x,{x:960,y:1010,s:.82,kind:'woman',top:'#2E7A5A',top2:'#F2D27A',hair:'#3A2230',hairT:'long',skin:SKN.d,hl:[lerp(-130,-200,u),lerp(-520,-560,u)],hr:[110,-170],hold:{l:'copo'},t,lip:1,mouth:'smile',ph:2});
   fig(x,{x:1400,y:1010,s:.82,kind:'casual',top:'#F3F0E8',stripes:'#1C2A4A',top2:'#1C2A4A',beard:'#1A1210',hair:'#1A1210',hairT:'curly',skin:SKN.c,hl:[lerp(-170,-250,u),lerp(-520,-600,u)],hr:[110,-170],hold:{l:'copo'},t,look:-.5,mouth:'smile',ph:3})},
   g=>{const bub=(txt,cx,cy,a)=>fade(g,a,()=>{g.fillStyle='#FFF6E0';g.beginPath();g.roundRect(cx-170,cy-55,340,110,40);g.fill();g.beginPath();g.moveTo(cx-20,cy+50);g.lineTo(cx+10,cy+100);g.lineTo(cx+30,cy+50);g.fill();g.font='900 54px Cinzel';g.textAlign='center';g.textBaseline='middle';g.fillStyle='#8E1B3A';g.fillText(txt,cx,cy+3)});
    bub('SAÚDE!',430,300,ap(t,12,'saúde'));bub('TIM-TIM!',1490,300,ap(t,12,'tim-tim'));if(t>tt)waves(g,782,560,(t*1.3)%1,1-seg(t,tt+1.5,tt+2.2))})},
 // 13 — copo vazio dá azar
 (t,c,s)=>talkScene(t,c,s,Object.assign({bottles:[['red',1100]],gest:[[0,'open'],[3.4,'shrug'],[5.5,'rest']],props:(f,t)=>{glassW(f,620,812,1.25,0,'#5E1428');bigX(f,620,690,70,ap(t,13,'vazio',.4))},chips:[['SUPERSTIÇÃO',430,300,wt(13,'superstição')],['DÁ AZAR!',1500,360,wt(13,'azar')]],face:t=>({brow:t>wt(13,'azar')?-.2:.7,mouth:.55})},BAR)),
 // 14 — olho no olho
 (t,c,s)=>{const te=wt(14,'esfria'),tc=wt(14,'crendice'),cool=ease(seg(t,te-.2,te+.4))*(1-ease(seg(t,tc+.6,tc+1.2)));
  stage(t,s,restaurant,'OLHO NO OLHO',x=>{const u=easeIO(seg(t,T[s]+.6,T[s]+1.6));
   fig(x,{x:680,y:1120,s:.9,kind:'casual',top:'#1C2A4A',top2:'#F3F0E8',beard:'#5A3E2A',hair:'#5A3E2A',hl:[-110,-200],hr:[lerp(190,262,u),-560],hold:{r:'wine'},lv:.4,t,look:1,lookY:-.1,mouth:'smile'});
   fig(x,{x:1240,y:1120,s:.9,kind:'woman',top:'#8E1B3A',top2:'#D4A24C',hair:'#2A1A14',hairT:'long',skin:SKN.d,hl:[lerp(-190,-262,u),-560],hr:[110,-200],hold:{l:'wine'},lv:.4,t,look:-1,lookY:-.1,lip:1,mouth:'smile',ph:2});restFront(x)},
   g=>{const ha=ap(t,14,'amorosa',.5);if(ha>0){heart(g,960,300-8*Math.sin(t*3),1.3*ha,cool>0?mixC('#C8213F','#8AB8E0',cool):'#C8213F');if(cool>.5){g.fillStyle='#E8F4FF';g.font='900 46px Cinzel';g.textAlign='center';g.fillText('❄',960,300)}}
    lab(g,'SE NÃO OLHAR...',400,300,ap(t,14,'olhar'),36);lab(g,'ESFRIA!',1520,300,ap(t,14,'esfria'),44);stamp(g,960,560,'CRENDICE',ease(seg(t,tc-.15,tc+.25))*(1-ease(seg(t,tc+1.4,tc+1.8))))})},
 // 15 — gole pro santo ≈ libação
 (t,c,s)=>{const x=layer('w',null);x.fillStyle='#140509';x.fillRect(0,0,W,H);const panel=(x0,set,draw)=>{x.save();x.beginPath();x.roundRect(x0,230,800,600,26);x.clip();x.translate(x0,230);x.scale(800/1920,800/1920);x.translate(0,-200);set(x,t);draw(x);x.restore();x.strokeStyle=GOLD;x.lineWidth=6;x.beginPath();x.roundRect(x0,230,800,600,26);x.stroke()};
  const tg=wt(15,'derramar'),ug=easeIO(seg(t,tg-.2,tg+.5)),pg=seg(t,tg+.3,tg+2.6),tl=wt(15,'libação'),ul=easeIO(seg(t,tl-.4,tl+.4)),pl=seg(t,tl,tl+2.4);
  panel(120,boteco,x=>{const hw=fig(x,{x:960,y:1440,s:1.25,kind:'casual',top:'#E8C24A',top2:'#C9A23A',stache:'#2A1A10',hair:'#2A1A10',skin:SKN.b,hl:[-110,-170],hr:[200,-420],hold:{r:'cacha'},a:{r:lerp(0,1.2,ug)},lv:.9,t,look:.6,lookY:.6,mouth:'smile'});
   if(ug>.95){const p0=loc(x,rimOf(hw.r,1.25*800/1920,1.2,30*.75,-70*.75+8));pour(x,p0,1400,pg,'#F3E2A0',10)}});
  panel(1000,greece,x=>{const hw=fig(x,{x:900,y:1440,s:1.25,kind:'greek',beard:'#3A2A1E',hairT:'curly',hair:'#3A2A1E',hat:'laurel',hl:[-190,-560],hr:[175,-500],hold:{r:'kylix'},a:{r:lerp(.05,.95,ul)},lv:.6,t,look:.4,lookY:.5});if(ul>.9)pour(x,loc(x,rimOf(hw.r,1.25*800/1920,.95)),1400,pl)});
  comp([['w']]);const g=layer('g',null);goldText(g,'O MESMO GESTO',960,110,62);ornament(g,960,172,520);lab(g,'GOLE PRO SANTO',520,290,ap(t,15,'santo'),38);lab(g,'LIBAÇÃO',1400,290,ap(t,15,'libação'),40);
  fade(g,ap(t,15,'libação',.5),()=>goldText(g,'=',960,530,110));lab(g,'3.000 ANOS DEPOIS',960,790,ap(t,15,'depois'),40);blit(ctx,L.g,0)},
 // 16 — marinha: nunca brindar com água
 (t,c,s)=>{const ta=wt(16,'água');stage(t,s,seaNight,'NA MARINHA',x=>{navyShip(x,760,560,.75,t);fig(x,{x:1460,y:1080,s:.9,kind:'sailor',top:'#1C2A4A',hairT:'none',hat:'dixie',skin:SKN.a,hl:[-200,-470],hr:[150,-470],hold:{r:'water'},open2:1,t,look:-.3,mouth:t>wt(16,'afogado')?'o':'flat',brow:.6})},
   g=>{bigX(g,1460+.9*150,1080-.9*500,70,ap(t,16,'água',.4));lab(g,'NUNCA COM ÁGUA',560,300,ap(t,16,'água'),40);lab(g,'AFOGADO?!',560,420,ap(t,16,'afogado'),44)})},
 // 17 — a dica: bata pelo bojo
 (t,c,s)=>C3(t,s,tavern,'A DICA DO SOMMELIER',g=>{const tb=wt(17,'bojo'),u=easeIO(seg(t,tb-.9,tb-.1)),sc=2.6,by=860;crystalPair(g,960,by,sc,u);
   const cy=by-sc*120;if(u>.98){waves(g,960,cy,(t*1.2)%1,1-seg(t,tb+1.2,tb+1.8));check(g,960,cy+120,40,ap(t,17,'bojo',.4))}
   fade(g,ap(t,17,'larga'),()=>arrow(g,620,cy,880,cy,GOLD2,8));lab(g,'BOJO: BATA AQUI',420,cy,ap(t,17,'larga'),36);
   const rx=960+44*sc+2+42*sc-4*sc,ry=by-178*sc;fade(g,ap(t,17,'borda'),()=>arrow(g,1450,ry-10,rx+40,ry+6,'#E0213F',8));lab(g,'BORDA: QUEBRA!',1560,ry+90,ap(t,17,'quebra'),36);bigX(g,rx+8,ry+4,26,ap(t,17,'quebra',.3))},.62),
 // 18 — tabela final (sem legenda)
 (t,c,s)=>finalTable(t,s),
 // 19 — CTA
 (t,c,s)=>ctaScene(t,c,s),
 null];
const mixC=(a,b,u)=>{const p=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)),A=p(a),B=p(b);return '#'+A.map((v,i)=>Math.round(v+(B[i]-v)*u).toString(16).padStart(2,'0')).join('')};
function finalTable(t,s){veil(null,t,tavern,.8);const g=layer('g',null);goldText(g,'POR QUE A GENTE BRINDA?',960,130,64);ornament(g,960,200,600);blit(ctx,L.g,0,seg(t,T[s],T[s]+.5));
 const C=[['kylix','GRÉCIA','a libação','gregos',0],['tank','ALEMÃO','“eu te ofereço”','alemão',0],['toast','TOAST','a torrada','alemão',.7],['copo','BRASIL','tim-tim e gole pro santo','tim-tim',0],['skull','VENENO','é lenda!','veneno',0]];
 C.forEach(([ic,n,d,w,dl],i)=>{const cx=220+i*370,ta=wt(18,w)-.15+dl,c=layer('c'+i,null);plaque(c,cx,600,330,560);
  if(ic=='kylix')kylix(c,cx,560,1.05,0,.6);else if(ic=='tank')tankard(c,cx,580,1.2,0);else if(ic=='toast')toastSlice(c,cx,560,1.5,-.1);else if(ic=='copo'){copo(c,cx-45,590,1,.7,'#F2C04A',true,.15);copo(c,cx+45,590,1,.7,'#F2C04A',true,-.15)}else{skullVial(c,cx,580,1.1);c.save();c.translate(cx,470);c.scale(.6,.6);stamp(c,0,0,'LENDA',ease(seg(t,ta+.4,ta+.8)));c.restore()}
  goldText(c,n,cx,768,40,'Cinzel',900);blit(ctx,L['c'+i],0,seg(t,ta,ta+.45));const sz=d.length>16?27:32;serif(d,cx,822,sz,`rgba(243,230,200,${seg(t,ta,ta+.45)})`)})}
function ctaScene(t,cam,s){talkScene(t,cam,s,Object.assign({gest:[[0,'wave'],[2.2,'open'],[4.2,'rest']],bottles:[['red',1100]],face:t=>({mouth:.7,brow:.5})},BAR));
 const a=easeIO(seg(t,T[s]+.4,T[s]+1)),g=layer('g',null);g.save();g.globalAlpha=a;g.fillStyle='#B0122E';g.beginPath();g.roundRect(120,120,520,110,55);g.fill();g.strokeStyle=GOLD2;g.lineWidth=5;g.stroke();g.restore();
 g.save();g.globalAlpha=a;goldText(g,'INSCREVA-SE',380,176,52,'Cinzel',900);g.restore();chip(g,380,300,'QUAL CURIOSIDADE?',ap(t,19,'curiosidade'));blit(ctx,L.g,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=a;ctx.drawImage(LOGO,1640,40,230,220);ctx.restore()}}
const TALKS=[1,3,8,13,19],NS=LEN.length;
FILM={dur:T[T.length-1],cuts:T.map(v=>Math.round(v*30)),fadeIn:0,fadeOut:.8,warm(){return .4},
 cam(s,u,t){if(TALKS.includes(s)){const k=TALKS.indexOf(s)%3;return [{x:lerp(950,975,u),y:lerp(560,545,u),z:lerp(1.18,1.28,easeIO(u)),b:[6,0,0]},{x:lerp(930,915,u),y:lerp(545,520,u),z:lerp(1.32,1.48,easeIO(u)),b:[8,0,0]},{x:lerp(1000,985,u),y:550,z:lerp(1.22,1.34,u),b:[7,0,0]}][k]}return {x:960,y:540,z:1,b:[10,0,0]}},
 draw(t,cam,s,u){if(s==0){thumbFrame(t);return}if(s==NS-1){photo(IMG.logo,t,T[NS-1],T[NS],1,1.05);return}SC[s](t,cam,s)},
 plants(){return {}}};
(function(){const DISS={1:.6},xf=mk(),xz=mk(),CARD=[2,4,5,6,7,9,10,11,12,14,15,16,17,18],draw0=FILM.draw,cam0=FILM.cam;for(let s=2;s<NS;s++)DISS[s]=.45;
 FILM.draw=(t,c,s,u)=>{const d=DISS[s],a=d?1-easeIO(seg(t,T[s],T[s]+d)):0;if(a>0){draw0(t,cam0(s-1,1,t),s-1,1);const x=xf.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0)}
  draw0(t,c,s,u);if(CARD.includes(s)){const k=1+.035*easeIO(u),x=xz.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0);ctx.save();ctx.setTransform(k,0,0,k,W/2*(1-k),H/2*(1-k));ctx.drawImage(xz,0,0);ctx.restore()}
  if(a>0)blit(ctx,xf,0,a);if(s!=0&&s!=NS-2&&s!=NS-1)watermark();if(s!=NS-3&&s!=NS-1)karaoke(t)}})();
// som
for(let s=1;s<NS;s++)say(T[s],'whoosh');
for(const [i,w] of [[1,'gregos'],[1,'romano'],[1,'alemão'],[1,'lenda'],[2,'libação'],[3,'primeiro'],[4,'ovídio'],[5,'alemão'],[5,'ofereço'],[6,'brindis'],[6,'brindisi'],[6,'nosso'],[7,'shakespeare'],[8,'veneno'],[9,'veneno'],[11,'vê,'],[11,'cheira'],[11,'segura'],[11,'prova'],[13,'azar'],[14,'esfria'],[15,'depois'],[16,'água'],[16,'afogado'],[17,'quebra']])say(wt(i,w),'tag');
for(const [i,w,d] of [[8,'bater',0],[9,'força',0],[10,'seiscentos',1.1],[12,'tim-tim',0],[17,'bojo',-.1]])say(wt(i,w)+d,'clink');
say(wt(2,'derramava')+.4,'pour');say(wt(15,'derramar')+.4,'pour');say(wt(15,'libação')+.1,'pour');say(wt(7,'punham')+1.05,'plop');
say(wt(10,'lenda'),'bottledown');say(wt(14,'crendice'),'bottledown');
for(const [w,d] of [['gregos',0],['alemão',0],['alemão',.7],['tim-tim',0],['veneno',0]])say(wt(18,w)-.15+d,'line');
