// VINHO CARO VALE A PENA? — versão longa (~3 min), Wine Know / Dark Divino.
const LEN=[6.1,5.0,7.8,3.5,5.6,6.0,4.7,6.9,6.6,3.5,4.3,6.3,5.2,3.4,5.9,7.6,6.5,4.5,4.0,5.8,5.7,4.9,3.8,4.8,5.1,4.9,4.4,7.0,5.4,5.8,7.5,7.0,3.2],T=sceneStarts(LEN);
const LOGO=new Image();LOGO.src='logo_badge.png';
// ---------- lip sync from the narration timings ----------
function speak(t){for(const l of VOX){if(t<l.at||t>l.at+l.dur)continue;for(const w of l.words){const s=l.at+w[1],e=l.at+w[2];if(t>=s&&t<=e){const u=(t-s)/Math.max(.05,e-s);return .18+.34*Math.sin(u*Math.PI)}}return .05}return 0}
// ---------- gestures: hand targets [[x,y],z] and open/closed hands ----------
const G={
 rest:{l:[[790,776],40],r:[[1086,706],50]},
 open:{l:[[800,690],95],r:[[1120,690],95],lo:1,ro:1},
 thinking:{l:[[915,585],135],r:[[1086,706],50]},
 point:{l:[[790,776],40],r:[[1185,630],40],ro:1},
 bottleUp:{l:[[790,776],40],r:[[1135,665],90]},
 shrug:{l:[[745,700],80],r:[[1175,700],80],lo:1,ro:1},
 wave:{l:[[790,776],40],r:[[1150,560],80],ro:1}};
function gest(t,seq){let a=seq[0][1],b=a,u=1;for(let i=0;i<seq.length;i++){if(t>=seq[i][0]){a=i?seq[i-1][1]:seq[i][1];b=seq[i][1];u=easeIO(seg(t,seq[i][0],seq[i][0]+.45))}}
 const A=G[a],B=G[b],mix=(p,q)=>[[lerp(p[0][0],q[0][0],u),lerp(p[0][1],q[0][1],u)],lerp(p[1],q[1],u)];
 const wob=k=>b=='open'||b=='shrug'?Math.sin(t*2.3+k)*6:b=='wave'?Math.sin(t*9)*18:0;
 const l=mix(A.l,B.l),r=mix(A.r,B.r);l[0][0]+=wob(0);r[0][0]+=wob(1.4);return {l,r,lo:lerp(A.lo||0,B.lo||0,u)>.5,ro:lerp(A.ro||0,B.ro||0,u)>.5,name:b}}
// ---------- the Sommelier at the counter ----------
// o: {set, gest:[[t,name],...], face:{...}, bottles:[[kind,x]], tags:[[text,x,y,t]], sip:t0, napkins, bottleHeld:kind, candles}
function talkScene(t,cam,s,o){const x=layer('w',cam);(o.set||cellarWall)(x,t);if(o.barrels)for(const [bx,sc] of o.barrels)barrelSide(x,bx,900,sc,.9);
 const t0=T[s],g0=o.sip!=null?keyed(t,o.sip,sipKeys(860,812)):null,gl=g0||{b:[860,812],a:0},k=clamp(gl.a/.95);
 const gs=gest(t,(o.gest||[[0,'rest']]).map(q=>[t0+q[0],q[1]]));
 const p=sommPose(t,Object.assign({look:-.15,brow:.35,mouth:.45,blink:k>.7?1:blinkAt(t,[t0+1.3,t0+3.9])},o.face?o.face(t):{}));
 const sp=speak(t);if(k<.3&&!(o.face&&o.face(t).laugh)){p.open=Math.max(p.open||0,sp);if(sp>.1)p.mouth=Math.min(p.mouth,.35)}
 p.tilt=(p.tilt||0)-k*.1+Math.sin(t*1.3)*.015;p.headX=(p.headX||0)-k*6;p.headY=(p.headY||0)-k*4;p.lookY=(p.lookY||0)-k*.4;
 const L_=o.sip!=null?[gripOf(gl),70+clamp((812-gl.b[1])/182)*95]:gs.l;setHands(p,L_,gs.r);const hp=sommActor(cam,p);
 const f=layer('f',cam);cellarTable(f);for(const c of (o.candles||[[560,80],[1400,100]]))candle(f,c[0],830,c[1],t);
 if(o.sip!=null)glassT(f,gl,o.wine??.4,o.wineCol||CEL.wine,t,keyed(t-1/30,o.sip,sipKeys(860,812))||gl);
 const held=gs.name=='bottleUp';for(const [kind,bx] of (o.bottles||[]))if(!(held&&kind==(o.bottleHeld||'exp')&&bx>1000))bottleL(f,[bx,815],1,kind);
 if(o.napkins)for(const [bx,l] of o.napkins){bottleL(f,[bx,815],1,'mid');napkin(f,[bx,815],1,l)}
 if(held){const hr=h2w(hp,'r');bottleL(f,[hr[0],hr[1]+110],1,o.bottleHeld||'exp')}
 const hl=h2w(hp,'l'),hr=h2w(hp,'r');(gs.lo&&o.sip==null?openHand:gripHand)(f,hl[0],hl[1],gs.lo?-.4:gl.a,C10,.85);(gs.ro?openHand:gripHand)(f,hr[0],hr[1],gs.ro?.4:0,C10,.85);
 for(const [txt,tx,ty,ta] of (o.tags||[]))priceTag(f,tx,ty,txt,ease(seg(t,ta,ta+.35)));
 comp([['w',cam.b[0]],['h'],['f']]);
 for(const [txt,cx,cy,ta] of (o.chips||[])){const c=layer('chipL',null);chip(c,cx,cy,txt,ease(seg(t,ta,ta+.35)));blit(ctx,L.chipL,0)}
 if(o.tip)tip_(o.tip,win(t,t0+.2,T[s+1]-.1))}
// ---------- cards ----------
function veil(cam,t,set,a=.74){const x=layer('w',cam);(set||cellarWall)(x,t);comp([['w',12]]);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle=`rgba(20,6,10,${a})`;ctx.fillRect(0,0,W,H);ctx.restore()}
function chapter(t,cam,s,num,title,sub){veil(cam,t,cellarWall,.8);const u=easeIO(seg(t,T[s],T[s]+.6)),g=layer('g',null);
 g.save();g.globalAlpha=u;g.translate(0,(1-u)*30);plaque(g,960,520,1100,420);goldText(g,isNaN(+num)?num:'CAPÍTULO '+num,960,405,46,'Cinzel',700);ornament(g,960,465,520);goldText(g,title,960,560,92);if(sub)goldText(g,sub,960,650,54,'Cinzel',700);g.restore();blit(ctx,L.g,0)}
function chipsCard(t,cam,s,title,items,set,art){veil(cam,t,set);const g=layer('g',null);goldText(g,title,960,200,70);ornament(g,960,272,560);if(art)art(g,t);
 for(const [txt,cx,cy,ta] of items)chip(g,cx,cy,txt,ease(seg(t,ta,ta+.35)));blit(ctx,L.g,0,seg(t,T[s],T[s]+.4))}
function bigGrapes(g,cx,cy,s){grapes(g,cx,cy,s)}
// stacked price bar: segments [label, share, colour, appearTime]
function priceBar(t,s,title,segs,total){veil(null,t);const g=layer('g',null);goldText(g,title,960,220,64);ornament(g,960,290,560);const bx=260,bw=1400,by=500,bh=130;
 g.fillStyle='#2A0610';g.beginPath();g.roundRect(bx,by,bw,bh,22);g.fill();let x0=bx;g.save();g.beginPath();g.roundRect(bx,by,bw,bh,22);g.clip();
 for(const [lab,sh,col,ta] of segs){const w=bw*sh*easeIO(seg(t,ta,ta+.5));g.fillStyle=col;g.fillRect(x0,by,w,bh);if(w>120){g.fillStyle=col=='#E2B456'||col=='#F2D27A'?'#2A0610':'#F3E6C8';g.font="900 34px Cinzel";g.textAlign='center';g.textBaseline='middle';g.fillText(lab,x0+w/2,by+bh/2)}x0+=w}
 g.restore();g.strokeStyle='#D4A24C';g.lineWidth=5;g.beginPath();g.roundRect(bx,by,bw,bh,22);g.stroke();if(total)priceTag(g,bx+bw-40,by-60,total,1,.9);blit(ctx,L.g,0,seg(t,T[s],T[s]+.4))}
// price x quality curve
function curveCard(t,s,phase){veil(null,t);const g=layer('g',null);goldText(g,'PREÇO × QUALIDADE',960,170,66);ornament(g,960,240,560);
 const ox=330,oy=880,w=1260,h=560,f=u=>1-Math.exp(-u*4.2);g.strokeStyle='#8A6A3A';g.lineWidth=4;g.beginPath();g.moveTo(ox,oy-h-20);g.lineTo(ox,oy);g.lineTo(ox+w+20,oy);g.stroke();
 serif('qualidade',ox-10,oy-h-50,40,'#D4A24C','italic');serif('preço',ox+w-20,oy+50,40,'#D4A24C','italic');
 const prog=phase==0?easeIO(seg(t,T[s]+.3,T[s+1]-.6)):1;g.strokeStyle='#F2D27A';g.lineWidth=10;g.lineCap='round';g.beginPath();for(let i=0;i<=100*prog;i++){const u=i/100;const X=ox+u*w,Y=oy-f(u)*h;i?g.lineTo(X,Y):g.moveTo(X,Y)}g.stroke();
 const zoneA=phase==1?easeIO(seg(t,T[s]+.4,T[s]+1.2)):phase==2?1:0;if(zoneA>0){g.fillStyle=`rgba(242,210,122,${.18*zoneA})`;g.fillRect(ox+.22*w,oy-h,.26*w,h);goldText(g,'O PONTO CERTO',ox+.35*w,oy-h-10+40,34,'Cinzel',900)}
 if(phase>=1){const a=easeIO(seg(t,T[s]+1.6,T[s]+2.2));g.save();g.globalAlpha=a;g.setLineDash([14,12]);g.strokeStyle='#C24A6E';g.lineWidth=5;g.beginPath();g.moveTo(ox+.55*w,oy-f(.55)*h);g.lineTo(ox+w,oy-f(.55)*h);g.stroke();g.restore();chip(g,ox+.8*w,oy-h+190,'+ R$ = + POUCO',a)}
 const u=phase==0?prog:clamp(.35+.6*seg(t,T[s],T[s+1])*(phase==1?1:0)+(phase==2?.35:0)),X=ox+u*w,Y=oy-f(u)*h;g.fillStyle='#FFE39A';g.beginPath();g.arc(X,Y,16,0,7);g.fill();blit(ctx,L.g,0,seg(t,T[s],T[s]+.4))}
function shelf(t,s){veil(null,t,cellarWall,.7);const tm=wt(21,'meio'),u=easeIO(seg(t,tm-.2,tm+.5)),g=layer('g',null);const sg=g.createLinearGradient(0,150,0,820);sg.addColorStop(0,`rgba(255,200,120,${.45*u})`);sg.addColorStop(1,'rgba(255,200,120,0)');g.fillStyle=sg;g.beginPath();g.moveTo(900,120);g.lineTo(1020,120);g.lineTo(1180,820);g.lineTo(740,820);g.closePath();g.fill();
 g.fillStyle='#5A2E1C';g.fillRect(360,800,1200,26);bottleL(g,[600,800],1.2,'cheap');bottleL(g,[960,800],1.2+.08*u,'mid');bottleL(g,[1320,800],1.2,'exp');priceTag(g,600,330,'R$ 50',1,.8);priceTag(g,960,330,'R$ 150',1,.8+.15*u);priceTag(g,1320,330,'R$ 500',1,.8);blit(ctx,L.g,0);tip_('O MEIO DA PRATELEIRA',win(t,T[s]+.2,T[s+1]-.1))}
function finalTable(t,s){veil(null,t);const g=layer('g',null);goldText(g,'VINHO CARO VALE A PENA?',960,150,84);ornament(g,960,240,620);blit(ctx,L.g,0,seg(t,T[s],T[s]+.5));
 for(const [cx,n,d,kind,ta] of [[480,'DIA A DIA','Intermediário','mid',T[s]+.6],[960,'GRANDES MOMENTOS','O caro','exp',T[s]+1.3],[1440,'PARA GUARDAR','O caro, por anos','exp',T[s]+2]]){const c=layer('c'+cx,null);plaque(c,cx,600,400,500);bottleL(c,[cx,690],.95,kind);goldText(c,n,cx,750,34,'Cinzel',700);blit(ctx,L['c'+cx],0,seg(t,ta,ta+.5));serif(d,cx,808,48,`rgba(243,230,200,${seg(t,ta,ta+.5)})`)}
 serif('Pague pelo vinho, não pela fama do rótulo',960,960,50,`rgba(212,162,76,${seg(t,T[s]+3,T[s]+3.6)})`,'italic')}
function ctaScene(t,cam,s){talkScene(t,cam,s,{gest:[[0,'wave'],[2.2,'open'],[4.5,'rest']],face:t=>({mouth:.7,brow:.5})});
 const a=easeIO(seg(t,T[s]+.4,T[s]+1)),g=layer('g',null);g.save();g.globalAlpha=a;g.fillStyle='#B0122E';g.beginPath();g.roundRect(150,780,520,110,55);g.fill();g.strokeStyle='#F2D27A';g.lineWidth=5;g.stroke();g.restore();
 g.save();g.globalAlpha=a;goldText(g,'INSCREVA-SE',410,836,52,'Cinzel',900);g.restore();chip(g,410,700,'COMENTE: QUAL VINHO?',easeIO(seg(t,wt(31,'comentários'),wt(31,'comentários')+.4)));blit(ctx,L.g,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=a;ctx.drawImage(LOGO,1620,40,250,240);ctx.restore()}}
// ---------- the scene list (one per narration line) ----------
const TALK=(o)=>(t,c,s)=>talkScene(t,c,s,o);
const SC=[
 null,
 (t,c,s)=>talkScene(t,c,s,{bottles:[['cheap',760],['exp',1160]],gest:[[0,'rest'],[wt(1,'cinquenta')-T[1]-.3,'open'],[wt(1,'quinhentos')-T[1],'bottleUp']],bottleHeld:'exp',tags:[['R$ 50',760,430,wt(1,'cinquenta')],['R$ 500',1250,380,wt(1,'quinhentos')]],face:t=>({look:t<wt(1,'quinhentos')?-.5:.5})}),
 (t,c,s)=>talkScene(t,c,s,{bottles:[['cheap',760]],gest:[[0,'thinking'],[3.4,'point'],[5.6,'open']],chips:[['10× MELHOR?',1400,300,wt(2,'dez')]],face:t=>({brow:t<T[2]+3.4?1:.5,sad:t<T[2]+3.4?.35:0,look:.25})}),
 (t,c,s)=>chapter(t,c,s,'1','O QUE VOCÊ PAGA','DENTRO DA GARRAFA'),
 (t,c,s)=>{const x=layer('w',c);vineyard(x,t);comp([['w',2]]);const g=layer('g',null);for(const [w,cx,cy] of [['vinhedo',560,250],['terra',960,360],['pouca',1360,250]])chip(g,cx,cy,{vinhedo:'VINHEDO PEQUENO',terra:'TERRA CARA',pouca:'POUCA UVA POR PÉ'}[w],ease(seg(t,wt(4,w),wt(4,w)+.35)));blit(ctx,L.g,0)},
 (t,c,s)=>chipsCard(t,c,s,'MENOS UVA, MAIS SABOR',[['FRUTA CONCENTRADA',760,790,wt(5,'concentrada')],['MENOS GARRAFAS',1160,790,wt(5,'garrafas')]],vineyard,(g,t)=>{for(let i=0;i<5;i++)grapes(g,380+i*90,560,.9);grapes(g,1440,560,1.6);goldText(g,'MUITA UVA',560,700,36,'Cinzel',700);goldText(g,'POUCA UVA',1440,700,36,'Cinzel',700)}),
 (t,c,s)=>chipsCard(t,c,s,'COLHEITA À MÃO',[['CACHO POR CACHO',960,800,wt(6,'cacho')]],vineyard,(g,t)=>{const y=540+Math.sin(t*2)*10;grapes(g,960,y,2.2);g.strokeStyle='#5A3E2A';g.lineWidth=12;g.beginPath();g.moveTo(960,y-140);g.lineTo(960,y-200);g.stroke();gripHand(g,960,y-215,0,C10,2.6)}),
 (t,c,s)=>{const x=layer('w',c);cellarWall(x,t);x.fillStyle='rgba(10,3,6,.35)';x.fillRect(-900,-600,W+1800,2000);for(const [bx,sc] of [[520,1.15],[960,1.25],[1400,1.15]])barrelSide(x,bx,900,sc,1);comp([['w',c.b[0]]]);const g=layer('g',null);chip(g,960,330,'CARVALHO FRANCÊS',ease(seg(t,wt(7,'carvalho'),wt(7,'carvalho')+.35)));priceTag(g,1380,250,'R$ MILHARES',ease(seg(t,wt(7,'milhares'),wt(7,'milhares')+.35)),.9);blit(ctx,L.g,0);tip_('BARRICA DE CARVALHO',win(t,T[7]+.2,T[8]-.1))},
 (t,c,s)=>{const x=layer('w',c);cellarWall(x,t);comp([['w',c.b[0]]]);const g=layer('g',null),n=Math.min(3,1+Math.floor(seg(t,wt(8,'anos'),wt(8,'anos')+1.6)*3));chip(g,960,540,n+(n>1?' ANOS':' ANO')+' NA ADEGA',ease(seg(t,wt(8,'anos'),wt(8,'anos')+.3)));chip(g,960,700,'TEMPO CUSTA DINHEIRO',ease(seg(t,wt(8,'tempo'),wt(8,'tempo')+.35)));blit(ctx,L.g,0)},
 (t,c,s)=>chapter(t,c,s,'2','O QUE VOCÊ PAGA','FORA DA GARRAFA'),
 (t,c,s)=>priceBar(t,s,'PARA ONDE VAI O SEU DINHEIRO?',[['VINHO',.55,'#5E1428',T[10]],['IMPOSTOS',.45,'#E2B456',wt(10,'imposto')-.3]],'R$ 500'),
 (t,c,s)=>priceBar(t,s,'O PREÇO SOBE A CADA ETAPA',[['VINHO',.3,'#5E1428',T[11]],['FRETE',.12,'#8E1B3A',wt(11,'frete')],['IMPORTADORA',.2,'#B0122E',wt(11,'importadora')],['LOJA',.13,'#C24A6E',wt(11,'margem')],['IMPOSTOS',.25,'#E2B456',wt(11,'preço')]],'R$ 500'),
 (t,c,s)=>talkScene(t,c,s,{gest:[[0,'rest'],[.6,'bottleUp']],bottleHeld:'exp',chips:[['FAMA DO RÓTULO',1350,320,wt(12,'famoso')]],face:t=>({brow:.8,look:.4,mouth:.55})}),
 (t,c,s)=>chapter(t,c,s,'3','A PROVA ÀS CEGAS',''),
 (t,c,s)=>talkScene(t,c,s,{napkins:[[1110,'A'],[1290,'B']],gest:[[0,'thinking'],[3,'rest']],face:t=>({look:Math.sin((t-T[14])*1.6)*.6,brow:-.1,sad:.25})}),
 (t,c,s)=>chipsCard(t,c,s,'MILHARES DE DEGUSTAÇÕES',[['RÓTULOS ESCONDIDOS',960,420,wt(15,'cegas')],['O CARO NÃO GANHOU',960,790,wt(15,'caros')]],null,(g,t)=>{const n=Math.round(6000*easeIO(seg(t,T[15]+.6,T[15]+3)));goldText(g,(n>=6000?'+':'')+n.toLocaleString('pt-BR'),960,610,150,'Cinzel',900)}),
 (t,c,s)=>talkScene(t,c,s,{sip:T[16]+1.2,tags:[['R$ 500',1250,380,T[16]+.3]],chips:[['O CÉREBRO GOSTA MAIS',1350,250,wt(16,'cérebro')]],face:t=>({mouth:t>T[16]+4.3?.9:.45,laugh:t>T[16]+4.4&&t<T[16]+5.6?1:0})}),
 (t,c,s)=>talkScene(t,c,s,{gest:[[0,'open']],chips:[['ANTES DO 1º GOLE',960,250,wt(17,'gole')-.4]],face:t=>({brow:.7,mouth:.5})}),
 (t,c,s)=>chapter(t,c,s,'4','O PONTO CERTO',''),
 (t,c,s)=>curveCard(t,s,0),
 (t,c,s)=>curveCard(t,s,1),
 (t,c,s)=>shelf(t,s),
 (t,c,s)=>chapter(t,c,s,'5','QUANDO O CARO','VALE A PENA'),
 (t,c,s)=>talkScene(t,c,s,{gest:[[0,'bottleUp']],bottleHeld:'exp',candles:[[560,90],[1400,110],[1250,70]],chips:[['OCASIÃO ESPECIAL',1350,280,T[23]+.4]],face:t=>({mouth:.7,laugh:t>T[23]+2.6&&t<T[23]+3.8?1:0})}),
 (t,c,s)=>{const x=layer('w',c);cellarWall(x,t);comp([['w',c.b[0]]]);const g=layer('g',null);for(let i=0;i<5;i++)bottleL(g,[600+i*180,820],1,'exp');chip(g,960,300,'PARA GUARDAR',ease(seg(t,T[24]+.3,T[24]+.7)));chip(g,960,420,'MELHORA POR ANOS',ease(seg(t,wt(24,'anos'),wt(24,'anos')+.35)));blit(ctx,L.g,0)},
 (t,c,s)=>chipsCard(t,c,s,'PARA PRESENTEAR',[['QUEM ENTENDE DE VINHO',960,330,wt(25,'entende')]],null,(g,t)=>{const y=780;bottleL(g,[960,y],1.6,'exp');g.strokeStyle='#C24A6E';g.lineWidth=16;g.beginPath();g.moveTo(905,y-200);g.lineTo(1015,y-200);g.stroke();g.fillStyle='#C24A6E';for(const d of [-1,1]){g.beginPath();g.moveTo(960,y-200);g.quadraticCurveTo(960+d*90,y-280,960+d*70,y-170);g.closePath();g.fill()}}),
 (t,c,s)=>chapter(t,c,s,'BÔNUS','3 DICAS PARA PAGAR','MENOS E BEBER MELHOR'),
 (t,c,s)=>talkScene(t,c,s,{bottles:[['cheap',760]],gest:[[0,'rest'],[.5,'bottleUp']],bottleHeld:'mid',tip:'1. ESCOLHA PELO PRODUTOR',face:t=>({brow:.5,mouth:.55})}),
 (t,c,s)=>chipsCard(t,c,s,'2. REGIÕES MENOS FAMOSAS',[['ALENTEJO',560,480,T[28]+1],['DÃO',1360,480,T[28]+1.6],['CAMPANHA GAÚCHA',560,700,T[28]+2.2],['SUL DA ITÁLIA',1360,700,T[28]+2.8]],null,(g,t)=>{goldText(g,'muito vinho pelo preço',960,590,40,'Cinzel',700)}),
 (t,c,s)=>talkScene(t,c,s,{sip:T[29]+1,tip:'3. CONFIE NO SEU GOSTO',face:t=>({mouth:t>T[29]+4.2?.9:.45,laugh:t>T[29]+4.3&&t<T[29]+5.4?1:0})}),
 (t,c,s)=>finalTable(t,s),
 (t,c,s)=>ctaScene(t,c,s),
 null];
const CAMS=s=>{const u=0;return null};
FILM={dur:T[T.length-1],cuts:T.map(v=>Math.round(v*30)),fadeIn:.3,fadeOut:.8,warm(){return .4},
 cam(s,u,t){const talk=[1,2,12,14,16,17,23,27,29,31].includes(s);if(talk){const k=[1,2,12,14,16,17,23,27,29,31].indexOf(s)%3;return [{x:lerp(950,975,u),y:lerp(560,545,u),z:lerp(1.18,1.28,easeIO(u)),b:[6,0,0]},{x:lerp(930,915,u),y:lerp(545,520,u),z:lerp(1.42,1.62,easeIO(u)),b:[8,0,0]},{x:lerp(1000,985,u),y:550,z:lerp(1.3,1.4,u),b:[7,0,0]}][k]}
  if(s==4)return {x:lerp(900,1020,easeIO(u)),y:560,z:1.1,b:[2,0,0]};if(s==7)return {x:lerp(700,1220,easeIO(u)),y:600,z:1.5,b:[3,0,0]};if(s==8||s==24)return {x:960,y:560,z:lerp(1.2,1.3,u),b:[8,0,0]};return {x:960,y:540,z:1,b:[10,0,0]}},
 draw(t,cam,s,u){if(s==0){photo(IMG.thumb,t,0,T[1],1,1.07);return}if(s==32){photo(IMG.logo,t,T[32],T[33],1,1.05);return}SC[s](t,cam,s)},
 plants(){return {}}};
// dissolves between places; subtitles everywhere except the final table and the logo
(function(){const DISS={3:.5,4:.5,5:.5,7:.5,8:.4,9:.5,10:.5,12:.5,13:.5,14:.5,15:.5,16:.5,18:.5,19:.5,21:.5,22:.5,23:.5,24:.5,25:.5,26:.5,27:.5,28:.5,29:.5,30:.5,31:.5},xf=mk(),xz=mk(),CARD=[3,5,6,9,10,11,13,15,18,19,20,21,22,25,26,28,30],draw0=FILM.draw,cam0=FILM.cam;
 FILM.draw=(t,c,s,u)=>{const d=DISS[s],a=d?1-easeIO(seg(t,T[s],T[s]+d)):0;if(a>0){draw0(t,cam0(s-1,1,t),s-1,1);const x=xf.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0)}
  draw0(t,c,s,u);if(CARD.includes(s)){const k=1+.035*easeIO(u),x=xz.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0);ctx.save();ctx.setTransform(k,0,0,k,W/2*(1-k),H/2*(1-k));ctx.drawImage(xz,0,0);ctx.restore()}
  if(a>0)blit(ctx,xf,0,a);if(s!=30&&s!=32)karaoke(t)}})();
// sound
for(let s=1;s<33;s++)say(T[s],[3,9,13,18,22,26].includes(s)?'line':'whoosh');
say(wt(1,'cinquenta'),'tag');say(wt(1,'quinhentos'),'tag');say(wt(2,'dez'),'tag');for(const w of ['vinhedo','terra','pouca'])say(wt(4,w),'tag');say(wt(7,'milhares'),'coins');say(wt(10,'imposto'),'coins');for(const w of ['frete','importadora','margem'])say(wt(11,w),'tag');
for(const t0 of [T[16]+1.2,T[29]+1]){say(t0+.1,'cloth');say(t0+1.2,'sip');say(t0+3.05,'glassdown')}say(wt(21,'meio'),'line');for(const k of [.6,1.3,2])say(T[30]+k,'line');
