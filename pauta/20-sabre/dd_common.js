// ===== Dark Divino — base comum das cenas (vídeos 15–24): cartões, avisos, personagens extras, tabela final, CTA, BRINDE, montagem =====
// Uso: film.js = LEN + engine_part.js + thumb_vNN.js + dd_common.js + scenes_vNN.js (scenes_vNN chama ddFilm({...}) no fim)
function watermark(){if(!LOGO.complete)return;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=.075;ctx.filter='blur(.6px)';ctx.drawImage(LOGO,960-230,720-221,460,442);ctx.restore()}
window.MISS=window.MISS||[];
// instante da palavra w na fala i (registra palavra inexistente em window.MISS para a conferência)
function wq(i,w){const l=VOX[i];if(!l)return 0;for(const q of l.words)if(q[0].toLowerCase().includes(w))return l.at+q[1];if(!MISS.includes(i+':'+w))MISS.push(i+':'+w);return l.at}
const ap=(t,i,w,d=.35)=>ease(seg(t,wq(i,w)-.1,wq(i,w)-.1+d));
// w = palavra (string) ou segundos após o começo da cena (número)
const AW=(t,s,w,d=.4)=>typeof w=='number'?ease(seg(t,T[s]+w,T[s]+w+d)):ap(t,s,w,d);
const TWS=(s,w)=>typeof w=='number'?T[s]+w:wq(s,w);
const fade=(g,a,fn)=>{if(a<=0)return;g.save();g.globalAlpha*=Math.min(1,a);fn();g.restore()};
function card(t,s,set,title,dim=.72){veil(null,t,set,dim);const g=layer('g',null);if(title){goldText(g,title,960,150,Math.min(62,Math.floor(1500/title.length)));ornament(g,960,214,560)}return g}
const done=(g,t,s)=>blit(ctx,L.g,0,seg(t,T[s],T[s]+.4));
// cartão: cenário desfocado + véu + título + itens (cada item é uma função (g,t,s))
const C3=(set,title,items,dim=.66)=>(t,c,s)=>{const g=card(t,s,set,title,dim);for(const it of items)it(g,t,s);done(g,t,s)};
const txt=(g,s_,cx,cy,size=34,col='#F3E6C8',st='')=>{g.save();g.font=`${st} 600 ${size}px Cormorant`;g.textAlign='center';g.textBaseline='middle';g.lineWidth=6;g.strokeStyle='rgba(20,6,10,.85)';g.strokeText(s_,cx,cy);g.fillStyle=col;g.fillText(s_,cx,cy);g.restore()};
// itens de cartão
const CH=(s_,x,y,w)=>(g,t,s)=>chip(g,x,y,s_,AW(t,s,w));
const PQ=(x,y,w,h,l1,l2,word,s1=46,s2=28)=>(g,t,s)=>fade(g,AW(t,s,word),()=>{plaque(g,x,y,w,h);goldText(g,l1,x,l2?y-22:y,Math.min(s1,Math.floor((w-60)/Math.max(1,l1.length)*1.6)));if(l2)goldText(g,l2,x,y+30,s2,'Cinzel',700)});
const ST=(x,y,s_,word,k=.55)=>(g,t,s)=>{const a=AW(t,s,word,.45);if(a<=0)return;g.save();g.translate(x,y);g.scale(k,k);stamp(g,0,0,s_,a);g.restore()};
const ART=(word,fn,d=.5)=>(g,t,s)=>{const a=typeof word=='number'||typeof word=='string'?AW(t,s,word,d):1;fade(g,a,()=>fn(g,t,s,a))};
const LB=(s_,x,y,word,size=34)=>(g,t,s)=>fade(g,AW(t,s,word),()=>goldText(g,s_,x,y,size,'Cinzel',900));
const TX=(s_,x,y,word,size=34)=>(g,t,s)=>fade(g,AW(t,s,word),()=>txt(g,s_,x,y,size));
const ARW=(x0,y0,x1,y1,word,w=7)=>(g,t,s)=>{const a=AW(t,s,word,.6);if(a<=0)return;fade(g,Math.min(1,a*2),()=>arrow(g,x0,y0,lerp(x0,x1,a),lerp(y0,y1,a),GOLD2,w))};
const CNT=(x,y,v0,v1,w0,w1,fmt,size=96)=>(g,t,s)=>{const a=AW(t,s,w0,.3);if(a<=0)return;const u=easeIO(seg(t,TWS(s,w0),TWS(s,w1)));fade(g,a,()=>goldText(g,fmt(Math.round(lerp(v0,v1,u))),x,y,size,'Cinzel',900))};
const fmtK=v=>v.toLocaleString('pt-BR');
// Sommelier no balcão: tk(BASE,{...}) — chips [texto,x,y,palavra|segundos], props(f,t,s)
function tk(base,o){return (t,c,s)=>{const q=Object.assign({},base,o);if(q.chips)q.chips=q.chips.map(k=>[k[0],k[1],k[2],TWS(s,k[3])]);if(q.props){const pf=q.props;q.props=(f,t)=>pf(f,t,s)}
 if(q.setX){const sx=q.setX,s0=q.set||cellarWall;q.set=(x,t)=>{s0(x,t);sx(x,t,s)}}talkScene(t,c,s,q);if(q.over){const g=layer('g',null);q.over(g,t,s);blit(ctx,L.g,0)}}}
// ---------- bandeiras extras ----------
function flag2(x,kind,cx,cy,w){const h=w*.66;if(['br','uk','fr','de'].includes(kind))return flag(x,kind,cx,cy,w);x.save();x.translate(cx-w/2,cy-h/2);x.beginPath();x.rect(0,0,w,h);x.clip();
 if(kind=='pt'){x.fillStyle='#1E7A3A';x.fillRect(0,0,w*.4,h);x.fillStyle='#C8213F';x.fillRect(w*.4,0,w*.6,h);x.fillStyle='#F2D13A';x.beginPath();x.arc(w*.4,h/2,h*.22,0,7);x.fill();x.fillStyle='#C8213F';x.fillRect(w*.4-h*.1,h/2-h*.12,h*.2,h*.24)}
 else if(kind=='it'){for(const [i,c] of [[0,'#1E8A3A'],[1,'#F3F0E6'],[2,'#C8213F']]){x.fillStyle=c;x.fillRect(i*w/3,0,w/3+1,h)}}
 else if(kind=='ch'){x.fillStyle='#C8213F';x.fillRect(0,0,w,h);x.fillStyle='#F3F0E6';x.fillRect(w/2-h*.08,h*.2,h*.16,h*.6);x.fillRect(w/2-h*.3,h/2-h*.08,h*.6,h*.16)}
 else if(kind=='us'){for(let i=0;i<7;i++){x.fillStyle=i%2?'#F3F0E6':'#C8213F';x.fillRect(0,i*h/7,w,h/7+1)}x.fillStyle='#1E2E6A';x.fillRect(0,0,w*.42,h*.54);x.fillStyle='#F3F0E6';for(let i=0;i<4;i++)for(let j=0;j<3;j++){x.beginPath();x.arc(w*.06+i*w*.1,h*.1+j*h*.16,h*.03,0,7);x.fill()}}
 else if(kind=='cl'){x.fillStyle='#F3F0E6';x.fillRect(0,0,w,h/2);x.fillStyle='#C8213F';x.fillRect(0,h/2,w,h/2);x.fillStyle='#1E3A8A';x.fillRect(0,0,w/3,h/2);x.fillStyle='#F3F0E6';x.beginPath();x.arc(w/6,h/4,h*.09,0,7);x.fill()}
 else if(kind=='ro'){for(const [i,c] of [[0,'#1E3A8A'],[1,'#F2D13A'],[2,'#C8213F']]){x.fillStyle=c;x.fillRect(i*w/3,0,w/3+1,h)}}
 x.restore();x.save();x.strokeStyle=GOLD;x.lineWidth=3;x.strokeRect(cx-w/2,cy-h/2,w,h);x.restore()}
// ---------- mapa antigo (pergaminho) com contornos simples: pts em coordenadas 0..1 do quadro ----------
function oldMap(g,cx,cy,w,h,lands,o={}){g.save();g.fillStyle='#E9D8B0';g.beginPath();g.roundRect(cx-w/2,cy-h/2,w,h,14);g.fill();g.strokeStyle='#8A6A3A';g.lineWidth=6;g.stroke();
 g.beginPath();g.roundRect(cx-w/2,cy-h/2,w,h,14);g.clip();g.fillStyle='rgba(120,150,170,.35)';g.fillRect(cx-w/2,cy-h/2,w,h);
 for(const L_ of lands){g.fillStyle=L_.col||'#D9C493';g.strokeStyle='#7A5A2E';g.lineWidth=4;g.beginPath();L_.pts.forEach((p,i)=>{const X=cx-w/2+p[0]*w,Y=cy-h/2+p[1]*h;i?g.lineTo(X,Y):g.moveTo(X,Y)});g.closePath();g.fill();g.stroke()}
 if(o.river){g.strokeStyle='#4A7AA0';g.lineWidth=7;g.lineCap='round';g.beginPath();o.river.forEach((p,i)=>{const X=cx-w/2+p[0]*w,Y=cy-h/2+p[1]*h;i?g.lineTo(X,Y):g.moveTo(X,Y)});g.stroke()}
 g.restore();g.save();g.strokeStyle='#8A6A3A';g.lineWidth=6;g.beginPath();g.roundRect(cx-w/2,cy-h/2,w,h,14);g.stroke();g.restore()}
const mp=(cx,cy,w,h,p)=>[cx-w/2+p[0]*w,cy-h/2+p[1]*h];
function pin(g,x,y,label,a=1,col='#B0122E',dy=-34){fade(g,a,()=>{g.fillStyle=col;g.beginPath();g.arc(x,y,13,0,7);g.fill();g.strokeStyle='#F2D27A';g.lineWidth=4;g.stroke();if(label){g.save();g.font='900 30px Cinzel';g.textAlign='center';g.textBaseline='middle';g.lineWidth=7;g.strokeStyle='#E9D8B0';g.strokeText(label,x,y+dy);g.fillStyle='#3A1A0E';g.fillText(label,x,y+dy);g.restore()}})}
// ---------- personagens extras: o MESMO rig do Sommelier (arm3d, rosto, mãos), com figurino ----------
// o: {ch, face(1/-1), look, mouth, open, brow, sad, blink, hands:{l:[x,y,z],r:[x,y,z]} (rig), wig, hat:'tricorn'|'shako'|'plume'|'cap'|'bonnet'|'beret', specs, bands, skirt, noLegs, lo/ro (mão aberta), hold(x,hl,hr)}
const SKIN='#E6BF98';
function npc(x,cx,base,s,t,o={}){const y=base-505*s,br=Math.sin(t*2.1+(o.ph||0))*3,face=o.face||1;
 const p={x:cx,y,s,face,breath:t*2.1+(o.ph||0),look:o.look??.3*face,lookY:o.lookY??0,brow:o.brow??.5,sad:o.sad??0,mouth:o.mouth??.45,open:o.open||0,blink:blinkAt(t+(o.ph||0),[1.3,4.2,7.1,9.6]),hands:{},arm3d:true,tilt:o.tilt??Math.sin(t*1.3)*.02,noLegs:!!(o.skirt||o.noLegs),wide:o.wide||0,laugh:o.laugh};
 const H=o.hands||{};p.hands.l=H.l||[-95,205,95];p.hands.r=H.r||[95,205,95];
 if(o.skirt){x.save();x.translate(cx,y);x.scale(s,s);x.fillStyle=o.skirt;x.beginPath();x.moveTo(-TW/2+6,TH-30);x.quadraticCurveTo(-TW/2-70,TH+260,-TW/2-60,STANDY+10);x.lineTo(TW/2+60,STANDY+10);x.quadraticCurveTo(TW/2+70,TH+260,TW/2-6,TH-30);x.closePath();x.fill();
  x.fillStyle='rgba(0,0,0,.18)';for(const k of [-60,0,60]){x.beginPath();x.moveTo(k*.3,TH);x.lineTo(k*1.4-8,STANDY+10);x.lineTo(k*1.4+8,STANDY+10);x.closePath();x.fill()}x.restore()}
 if(o.back)o.back(x,p,br);
 const hp=actor(x,o.id||'npc',o.ch,p,null,o.rim||'rgba(255,200,150,1)',face);
 const head=fn=>{x.save();x.translate(cx,y);x.scale(s,s);x.translate(p.headX||0,-HR-20+br+(p.headY||0));x.rotate(p.tilt||0);fn(x,(p.look||0)*46,(p.lookY||0)*18+6);x.restore()};
 const body=fn=>{x.save();x.translate(cx,y);x.scale(s,s);fn(x,br);x.restore()};
 if(o.bands)body((x,br)=>{x.fillStyle='#F4F0E8';x.fillRect(-14,br+2,12,46);x.fillRect(2,br+2,12,46)});
 if(o.medal)body((x,br)=>{x.fillStyle='#D4A24C';x.beginPath();x.arc(-58,br+110,16,0,7);x.fill();x.strokeStyle='#C8213F';x.lineWidth=6;x.beginPath();x.moveTo(-58,br+60);x.lineTo(-58,br+94);x.stroke()});
 if(o.frogs)body((x,br)=>{x.strokeStyle='#E2B456';x.lineWidth=7;for(let i=0;i<5;i++){x.beginPath();x.moveTo(-50,br+40+i*32);x.lineTo(50,br+40+i*32);x.stroke()}x.fillStyle='#E2B456';for(let i=0;i<5;i++){x.beginPath();x.arc(0,br+40+i*32,7,0,7);x.fill()}});
 if(o.bandolier)body((x,br)=>{x.strokeStyle='#5A3A1E';x.lineWidth=16;x.beginPath();x.moveTo(-80,br+10);x.lineTo(90,TH-20);x.stroke();x.fillStyle='#C9A060';for(let i=0;i<5;i++){const u=.15+i*.16;x.beginPath();x.roundRect(lerp(-80,90,u)-9,lerp(br+10,TH-20,u)+6,18,30,5);x.fill()}});
 if(o.ruff)body((x,br)=>{x.fillStyle='#F4F0E8';x.beginPath();x.ellipse(0,br-4,92,26,0,0,7);x.fill();x.strokeStyle='rgba(0,0,0,.12)';x.lineWidth=3;for(let i=-4;i<=4;i++){x.beginPath();x.moveTo(i*20,br-24);x.lineTo(i*20,br+16);x.stroke()}});
 if(o.shawl)body((x,br)=>{x.fillStyle=o.shawl;x.beginPath();x.moveTo(-TW/2-6,br+30);x.quadraticCurveTo(0,br+150,TW/2+6,br+30);x.lineTo(TW/2-20,br-6);x.quadraticCurveTo(0,br+70,-TW/2+20,br-6);x.closePath();x.fill()});
 head((x,fx,fy)=>{
  if(o.wig){x.fillStyle=o.wig;x.beginPath();x.moveTo(-HR-8,-4);x.quadraticCurveTo(-HR,-HR-24,0,-HR-20);x.quadraticCurveTo(HR,-HR-24,HR+8,-4);x.quadraticCurveTo(HR-14,-56,40,-60);x.quadraticCurveTo(0,-50,-40,-60);x.quadraticCurveTo(-HR+14,-56,-HR-8,-4);x.fill();
   for(const sd of [-1,1])for(const yy of [-4,30]){x.beginPath();x.ellipse(sd*(HR+4),yy,24,17,0,0,7);x.fill();x.strokeStyle='rgba(0,0,0,.12)';x.lineWidth=3;x.stroke()}
   if(o.queue){x.fillStyle='#1E1418';x.beginPath();x.moveTo(-face*HR*.7,40);x.lineTo(-face*(HR+30),70);x.lineTo(-face*(HR+10),82);x.closePath();x.fill()}}
  if(o.specs){x.strokeStyle='#2A2018';x.lineWidth=5;for(const sd of [-1,1]){x.beginPath();x.arc(fx*(sd>0?1.1:.9)+sd*30,fy,19,0,7);x.stroke()}x.beginPath();x.moveTo(fx-11,fy-2);x.lineTo(fx+11,fy-2);x.stroke()}
  if(o.thick){x.strokeStyle='#1A1410';x.lineWidth=9;for(const sd of [-1,1]){x.beginPath();x.roundRect(fx+sd*32-24,fy-16,48,32,8);x.stroke()}x.beginPath();x.moveTo(fx-8,fy-4);x.lineTo(fx+8,fy-4);x.stroke()}
  if(o.mask){x.fillStyle='rgba(20,20,26,.0)'}
  const hat=o.hat;
  if(hat=='tricorn'){x.fillStyle='#1A1418';x.beginPath();x.moveTo(-HR-40,-50);x.quadraticCurveTo(0,-HR-110,HR+40,-50);x.quadraticCurveTo(0,-HR+10,-HR-40,-50);x.fill();x.strokeStyle='#D4A24C';x.lineWidth=5;x.stroke()}
  else if(hat=='shako'){x.fillStyle='#14182A';x.beginPath();x.moveTo(-HR+6,-62);x.lineTo(-HR+18,-HR-120);x.lineTo(HR-18,-HR-120);x.lineTo(HR-6,-62);x.closePath();x.fill();x.fillStyle='#D4A24C';x.fillRect(-HR+8,-74,2*HR-16,14);x.fillRect(-HR+18,-HR-128,2*HR-36,12);
   x.beginPath();x.arc(0,-HR-30,16,0,7);x.fill();x.fillStyle='#F4F0E8';x.beginPath();x.moveTo(-10,-HR-130);x.quadraticCurveTo(-30,-HR-210,10,-HR-240);x.quadraticCurveTo(10,-HR-180,14,-HR-130);x.fill();x.fillStyle='#C8213F';x.beginPath();x.ellipse(0,-HR-232,9,16,0,0,7);x.fill();
   x.fillStyle='#14182A';x.beginPath();x.moveTo(-HR+6,-62);x.lineTo(HR-6,-62);x.lineTo(HR*.2,-46);x.lineTo(-HR*.2,-46);x.closePath();x.fill()}
  else if(hat=='plume'){x.fillStyle='#2A1A12';x.beginPath();x.ellipse(0,-HR+18,HR+70,28,-.08*face,0,7);x.fill();x.beginPath();x.moveTo(-HR+4,-HR+14);x.quadraticCurveTo(-HR+10,-HR-70,0,-HR-72);x.quadraticCurveTo(HR-10,-HR-70,HR-4,-HR+14);x.closePath();x.fill();
   x.fillStyle='#F4F0E8';x.beginPath();x.moveTo(-face*20,-HR-50);x.quadraticCurveTo(-face*(HR+90),-HR-120,-face*(HR+120),-HR-10);x.quadraticCurveTo(-face*(HR+40),-HR-60,-face*10,-HR-30);x.fill();x.fillStyle='#8E1B3A';x.fillRect(-HR+6,-HR-10,2*HR-12,16)}
  else if(hat=='cap'){x.fillStyle=o.capCol||'#3A2A20';x.beginPath();x.arc(0,-HR+30,HR+4,Math.PI,0);x.fill();x.fillRect(-HR-4,-HR+24,2*HR+8,18)}
  else if(hat=='bonnet'){x.fillStyle='#F4F0E8';x.beginPath();x.arc(0,-24,HR+18,Math.PI*.95,Math.PI*2.05);x.fill();x.strokeStyle='rgba(0,0,0,.12)';x.lineWidth=3;for(let i=0;i<9;i++){const a=Math.PI*(1+i/8);x.beginPath();x.arc(Math.cos(a)*(HR+10),-24+Math.sin(a)*(HR+10),8,0,7);x.stroke()}
   x.strokeStyle='#F4F0E8';x.lineWidth=8;x.beginPath();x.moveTo(-HR-10,-10);x.quadraticCurveTo(-HR,60,-30,96);x.moveTo(HR+10,-10);x.quadraticCurveTo(HR,60,30,96);x.stroke()}
  else if(hat=='beret'){x.fillStyle=o.capCol||'#2A2030';x.beginPath();x.ellipse(-10*face,-HR+6,HR+16,36,-.12*face,0,7);x.fill()}
  else if(hat=='headscarf'){x.fillStyle=o.capCol||'#8E1B3A';x.beginPath();x.arc(0,-20,HR+8,Math.PI*.98,Math.PI*2.02);x.fill()}
  if(o.headExtra)o.headExtra(x,fx,fy)});
 const hl=h2w(hp,'l'),hr=h2w(hp,'r');if(o.hold)o.hold(x,hl,hr,hp);
 (o.lo?openHand:gripHand)(x,hl[0],hl[1],o.lo?-.3:(o.la||0),o.ch,.85*s);(o.ro?openHand:gripHand)(x,hr[0],hr[1],o.ro?.3:(o.ra||0),o.ch,.85*s);return hp}
// figurinos prontos (paleta no estilo do Sommelier)
const CHX=(o)=>Object.assign({skin:SKIN,hand:SKIN,face:'#1c1a2b',finger:'#1c1a2b',leg:'#2A2024',shoe:'#0F0A0C'},o);
const LABCOAT=(o={})=>CHX(Object.assign({cloth:'#F4F2EE',hood:'#C9C6C0',outfit:'blazer',shirt:'#9CB8D8',collar:'#C8D8EC',tie:'#2A3A5A',leg:'#2A3040'},o));
// ---------- tabela final: 5 cartões dourados; entram com calma durante o "Resumindo" e ficam PARADOS ≥ 8 s; SEM legenda ----------
// C: [[icone(c,cx,cy,t), NOME, linha1, linha2], ...]
function finalTable(t,s,set,title,C){veil(null,t,set,.8);const g=layer('g',null);goldText(g,title,960,128,Math.min(64,Math.floor(1500/title.length)));ornament(g,960,200,600);blit(ctx,L.g,0,seg(t,T[s],T[s]+.5));
 const v=VOX[s],t0=Math.max(T[s]+.8,v.at),span=Math.max(3.5,v.dur*.8);
 C.forEach(([ic,n,d1,d2],i)=>{const cx=220+i*370,ta=t0+span*i/5,c=layer('c'+i,null);plaque(c,cx,590,330,560);c.save();c.beginPath();c.roundRect(cx-160,320,320,400,24);c.clip();ic(c,cx,560,t);c.restore();
  goldText(c,n,cx,762,Math.min(36,Math.floor(400/n.length)),'Cinzel',900);const a=easeIO(seg(t,ta,ta+.9));blit(ctx,L['c'+i],0,a);
  serif(d1,cx,808,29,`rgba(243,230,200,${a})`);if(d2)serif(d2,cx,842,29,`rgba(243,230,200,${a})`)})}
// ícone padrão: taça dourada com o vinho
function icGlass(c,cx,cy,col='#6E1630',lv=.42){glassW(c,cx,cy+120,1.25,lv,col)}
// ---------- CTA: Sommelier acena, "INSCREVA-SE" no canto superior esquerdo ----------
function ctaScene(t,cam,s,base,chipTxt,chipW){talkScene(t,cam,s,Object.assign({},base,{gest:[[0,'wave'],[2.2,'open'],[4.4,'rest']],face:t=>({mouth:.7,brow:.5})}));
 const a=easeIO(seg(t,T[s]+.4,T[s]+1)),g=layer('g',null);g.save();g.globalAlpha=a;g.fillStyle='#B0122E';g.beginPath();g.roundRect(120,110,520,110,55);g.fill();g.strokeStyle=GOLD2;g.lineWidth=5;g.stroke();g.restore();
 g.save();g.globalAlpha=a;goldText(g,'INSCREVA-SE',380,166,52,'Cinzel',900);g.restore();if(chipTxt)chip(g,380,290,chipTxt,AW(t,s,chipW));blit(ctx,L.g,0);
 if(LOGO.complete){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=a;ctx.drawImage(LOGO,1640,40,230,220);ctx.restore()}}
// ---------- FECHAMENTO sem fala: o Sommelier ergue a taça pela haste num brinde; câmera aproxima; música sobe ----------
const TOAST_K=[[0,860,812,0],[.35,860,812,0],[.5,860,808,0],[1.35,800,606,-.05],[1.7,778,582,-.08],[1.95,790,572,-.03],[2.2,780,580,-.08],[3.6,778,578,-.07]];
function toastScene(t,cam,s,base){talkScene(t,cam,s,Object.assign({},base,{gest:[[0,'rest']],sip:T[s],keys:TOAST_K,wine:.45,chips:[],face:t=>({mouth:.9,brow:.45,look:-.05,lookY:-.1,open:0})}))}
// ---------- montagem: câmeras, dissolves, push-in nos cartões, marca d'água, legenda karaokê (sem legenda na tabela/brinde/logo) ----------
// cfg: {SC, talks:[...], places:{s:.6}, tableArgs:[set,title,cards], base, cta:[chip,palavra]}
function ddFilm(cfg){const NS=LEN.length,LOGO_S=NS-1,TOAST_S=NS-2,CTA_S=NS-3,TABLE_S=NS-4;
 cfg.SC[TABLE_S]=(t,c,s)=>finalTable(t,s,...cfg.table);cfg.SC[CTA_S]=(t,c,s)=>ctaScene(t,c,s,cfg.base,...(cfg.cta||[]));cfg.SC[TOAST_S]=(t,c,s)=>toastScene(t,c,s,cfg.base);
 const TALKS=(cfg.talks||[]).concat([CTA_S]);
 FILM={dur:T[T.length-1],cuts:T.map(v=>Math.round(v*30)),fadeIn:0,fadeOut:.8,warm(){return .4},
  cam(s,u,t){if(s==TOAST_S)return {x:lerp(960,915,u),y:lerp(545,495,u),z:lerp(1.12,1.42,easeIO(u)),b:[6,0,0]};
   if(TALKS.includes(s)){const k=TALKS.indexOf(s)%3;return [{x:lerp(950,975,u),y:lerp(560,545,u),z:lerp(1.16,1.27,easeIO(u)),b:[6,0,0]},{x:lerp(930,915,u),y:lerp(548,525,u),z:lerp(1.24,1.38,easeIO(u)),b:[8,0,0]},{x:lerp(1000,985,u),y:552,z:lerp(1.18,1.29,u),b:[7,0,0]}][k]}
   return {x:960,y:540,z:1,b:[10,0,0]}},
  draw(t,cam,s,u){if(s==0){thumbFrame(t);return}if(s==LOGO_S){photo(IMG.logo,t,T[LOGO_S],T[LOGO_S+1],1,1.05);return}cfg.SC[s](t,cam,s)},
  plants(){return {}}};
 const DISS={1:.6},xf=mk(),xz=mk(),draw0=FILM.draw,cam0=FILM.cam;for(let s=2;s<=LOGO_S;s++)DISS[s]=.45;Object.assign(DISS,cfg.places||{});DISS[TABLE_S]=.6;DISS[LOGO_S]=.6;
 const CARD=[];for(let s=1;s<LOGO_S;s++)if(!TALKS.includes(s)&&s!=TOAST_S)CARD.push(s);
 FILM.draw=(t,c,s,u)=>{const d=DISS[s],a=d?1-easeIO(seg(t,T[s],T[s]+d)):0;if(a>0){draw0(t,cam0(s-1,1,t),s-1,1);const x=xf.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0)}
  draw0(t,c,s,u);if(CARD.includes(s)){const k=1+.035*easeIO(u),x=xz.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);x.drawImage(main,0,0);ctx.save();ctx.setTransform(k,0,0,k,W/2*(1-k),H/2*(1-k));ctx.drawImage(xz,0,0);ctx.restore()}
  if(a>0)blit(ctx,xf,0,a);if(s!=0&&s!=CTA_S&&s!=LOGO_S)watermark();if(s<TABLE_S||s==CTA_S)karaoke(t)};
 // sons
 for(let s=1;s<LOGO_S;s++)if(s!=TOAST_S)say(T[s],'whoosh');
 for(const [i,w] of (cfg.tags||[]))say(TWS(i,w),'tag');for(const [i,w,k] of (cfg.sfx||[]))say(TWS(i,w),k);
 {const v=VOX[TABLE_S],t0=Math.max(T[TABLE_S]+.8,v.at),span=Math.max(3.5,v.dur*.8);for(let i=0;i<5;i++)say(t0+span*i/5,'line')}
 say(T[TOAST_S]+1.4,'lift');
 window.DD={TABLE_S,CTA_S,TOAST_S,LOGO_S}}
// cenário NÍTIDO (sem véu) com itens por cima: SCN(set(x,t,s), itens, escurecer 0..1)
const SCN=(set,items,dim=0)=>(t,c,s)=>{const x=layer('w',{x:960,y:540,z:1,b:[0,0,0]});set(x,t,s);comp([['w',0]]);if(dim>0){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle=`rgba(20,6,10,${dim})`;ctx.fillRect(0,0,W,H);ctx.restore()}
 const g=layer('g',null);for(const it of items)it(g,t,s);blit(ctx,L.g,0)};
// levedura com carinha (bichinho do vinho): mood 0 feliz comendo, 1 desmaiada (olhos em X)
function yeastFace(x,cx,cy,r,t,mood=0,ph=0){x.save();x.translate(cx,cy+(mood>.5?0:Math.sin(t*4+ph)*4));x.rotate(mood*.5);let g=x.createRadialGradient(-r*.3,-r*.3,r*.1,0,0,r);g.addColorStop(0,'#FFF0C8');g.addColorStop(1,'#D9B878');x.fillStyle=g;x.beginPath();x.ellipse(0,0,r,r*.86,0,0,7);x.fill();
 x.fillStyle='#E8CD95';x.beginPath();x.arc(r*.72,-r*.55,r*.32,0,7);x.fill();x.strokeStyle='#2A1A10';x.fillStyle='#2A1A10';x.lineWidth=r*.09;x.lineCap='round';
 if(mood>.5){for(const sd of [-1,1]){const ex=sd*r*.32,ey=-r*.12,k=r*.12;x.beginPath();x.moveTo(ex-k,ey-k);x.lineTo(ex+k,ey+k);x.moveTo(ex+k,ey-k);x.lineTo(ex-k,ey+k);x.stroke()}x.beginPath();x.moveTo(-r*.2,r*.38);x.quadraticCurveTo(0,r*.28,r*.2,r*.38);x.stroke()}
 else{for(const sd of [-1,1]){x.beginPath();x.arc(sd*r*.32,-r*.12,r*.1,0,7);x.fill()}const o=.5+.5*Math.sin(t*9+ph);x.beginPath();x.ellipse(0,r*.32,r*.2,r*(.06+.12*o),0,0,7);x.fill()}
 x.restore()}
// tampo de pipa (copiado de sets_porto, para os outros vídeos)
function pipaEnd(x,cx,cy,r,txt){x.save();x.translate(cx,cy);let g=x.createRadialGradient(-r*.2,-r*.25,r*.1,0,0,r);g.addColorStop(0,'#6A3A22');g.addColorStop(1,'#3A1C12');x.fillStyle=g;x.beginPath();x.arc(0,0,r,0,7);x.fill();
 x.strokeStyle='rgba(20,8,4,.55)';x.lineWidth=r*.035;for(let i=-3;i<=3;i++){const yy=i*r*.27,w=Math.sqrt(Math.max(0,r*r-yy*yy));x.beginPath();x.moveTo(-w,yy);x.lineTo(w,yy);x.stroke()}
 x.strokeStyle='#24120A';x.lineWidth=r*.12;x.beginPath();x.arc(0,0,r*.94,0,7);x.stroke();x.strokeStyle='rgba(212,162,76,.35)';x.lineWidth=r*.025;x.beginPath();x.arc(0,0,r*.86,0,7);x.stroke();
 x.fillStyle='#24120A';x.beginPath();x.arc(0,r*.55,r*.07,0,7);x.fill();
 if(txt){x.save();x.globalAlpha=.8;x.font=`900 ${r*.34}px Cinzel`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#E9D2A0';x.fillText(txt,0,-r*.05);x.restore()}x.restore()}
function mixC(a,b,u){const p=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)),A=p(a),B=p(b);return '#'+A.map((v,i)=>Math.round(v+(B[i]-v)*u).toString(16).padStart(2,'0')).join('')}
