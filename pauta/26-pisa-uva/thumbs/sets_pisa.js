// ===== Vídeo 26 — Ainda se pisa uva com o pé? — cenário e personagens =====
// adegaLagar: adega de pedra de uma quinta do Douro (paredes de granito, vigas de madeira, lampiões) com o LAGAR ao fundo:
//   tanque de granito largo e baixo, cheio de uva, e uma fila de PISADORES de braço dado (o "corte"), pisando devagar
// pisador: personagem de verdade (rosto, cabelo/boina, camisa com mangas arregaçadas, suspensório, calça arregaçada até o joelho,
//   pernas e pés descalços; um pé sobe da uva pingando suco). Braços por cima dos ombros dos vizinhos.
// uvaMassa: a massa de uva pisada (bagos, cachos, espuma roxa) — fica DENTRO do lagar
// lagarFrente: borda de granito do lagar na frente do Sommelier (ele fica atrás dela, como atrás do balcão), com cachos em cima
const PISA={g0:'#3A2226',g1:'#2A161A',gL:'#5A3C3A',must:'#4A0E22',must2:'#6E1838',wood:'#4A2616'};
function uvaMassa(x,x0,x1,top,bot,seed=3,dens=1){const R=rng(seed);let g=x.createLinearGradient(0,top,0,bot);g.addColorStop(0,'#5A1230');g.addColorStop(1,'#2A0614');x.fillStyle=g;
 x.beginPath();x.moveTo(x0,bot);x.lineTo(x0,top+10);for(let xx=x0;xx<=x1;xx+=24)x.lineTo(xx,top+Math.sin(xx*.07)*6+R()*8);x.lineTo(x1,bot);x.closePath();x.fill();
 const n=Math.floor((x1-x0)*(bot-top)/420*dens);for(let i=0;i<n;i++){const gx=x0+R()*(x1-x0),gy=top+6+R()*(bot-top-6),r=7+R()*7;
  const gg=x.createRadialGradient(gx-r*.35,gy-r*.4,1,gx,gy,r);gg.addColorStop(0,R()<.5?'#B0406A':'#8E2A52');gg.addColorStop(1,'#3A0A1E');x.fillStyle=gg;x.beginPath();x.arc(gx,gy,r,0,7);x.fill()}
 // espuminha roxa e brilhos do suco
 x.fillStyle='rgba(200,120,170,.28)';for(let i=0;i<n/6;i++){const gx=x0+R()*(x1-x0),gy=top+4+R()*14;x.beginPath();x.ellipse(gx,gy,10+R()*14,3+R()*3,0,0,7);x.fill()}
 x.fillStyle='rgba(255,220,230,.35)';for(let i=0;i<n/5;i++){const gx=x0+R()*(x1-x0),gy=top+8+R()*(bot-top-8);x.beginPath();x.arc(gx,gy,1.6+R()*1.6,0,7);x.fill()}}
function graniteBlock(x,x0,y0,w,h,seed){const R=rng(seed);let g=x.createLinearGradient(0,y0,0,y0+h);g.addColorStop(0,PISA.gL);g.addColorStop(.08,PISA.g0);g.addColorStop(1,PISA.g1);x.fillStyle=g;x.fillRect(x0,y0,w,h);
 // pintinhas do granito
 for(let i=0;i<w*h/90;i++){x.fillStyle=R()<.5?'rgba(255,235,220,.10)':'rgba(0,0,0,.22)';x.fillRect(x0+R()*w,y0+R()*h,2+R()*2.4,2+R()*2.4)}
 x.strokeStyle='rgba(0,0,0,.35)';x.lineWidth=3;for(let xx=x0+90+R()*80;xx<x0+w-40;xx+=220+R()*90){x.beginPath();x.moveTo(xx,y0+6);x.lineTo(xx+R()*6-3,y0+h);x.stroke()}
 x.fillStyle='rgba(255,220,180,.18)';x.fillRect(x0,y0,w,4)}
// pisador: (px,py) = ponto do quadril-base (como o drawPerson: y do ombro ≈ py), s escala; o.lift = perna levantada ('l'|'r'|null),
//   o.cap boina, o.hair cor, o.shirt cor, o.trou cor da calça, o.sing (boca aberta cantando), o.look, o.reach{l,r} alvo das mãos (rig)
function pisador(x,px,py,s,o={}){const sk=o.skin||'#D8A47E',tr=o.trou||'#3A3440',sh=o.shirt||'#E8DCC4';
 const ch={skin:sk,cloth:sh,hood:o.shirtD||'#C9BCA2',hand:sk,face:'#1c1a2b',finger:'#6A4A34',outfit:'shirt',collar:o.shirtD||'#C9BCA2',sus:o.sus||'#5A2E1C',
  short:o.cap?null:(o.hair||'#2A1C14'),part:1,beard:o.beard||null,beardT:o.beardT||'mustache',leg:tr,shoe:sk};
 const legs=(only)=>{x.save();x.translate(px,py);x.scale(s,s);
 // pernas: calça até o joelho (arregaçada), canela e pé descalços
 for(const k of ['l','r']){const sd=k=='l'?-1:1,up=o.lift==k;if(up!==only)continue;const hip=[sd*46,TH-14],knee=up?[sd*36,TH+14]:[sd*48,TH+122],foot=up?[sd*30,TH+(o.shin||64)]:[sd*48,STANDY];
  x.lineCap='round';x.strokeStyle=tr;x.lineWidth=60;x.beginPath();x.moveTo(hip[0],hip[1]);x.lineTo(knee[0],knee[1]);x.stroke();if(up){x.fillStyle=tr;x.beginPath();x.ellipse(knee[0],knee[1]-4,38,32,0,0,7);x.fill();x.fillStyle='rgba(255,255,255,.08)';x.beginPath();x.ellipse(knee[0]-8,knee[1]-14,16,9,0,0,7);x.fill()}
  x.strokeStyle=sk;x.lineWidth=42;x.beginPath();x.moveTo(knee[0],knee[1]);x.lineTo(foot[0],foot[1]);x.stroke();
  // barra dobrada da calça
  x.fillStyle=o.cuff||'rgba(255,255,255,.12)';x.beginPath();x.roundRect(knee[0]-34,knee[1]-14,68,26,8);x.fill();x.fillStyle=tr;x.globalAlpha=.0;x.beginPath();x.roundRect(knee[0]-34,knee[1]-14,68,26,8);x.fill();x.globalAlpha=1;
  // pé (de frente, um pouco de lado) — manchado de roxo
  if(up){// pé levantado visto de frente: peito do pé, cinco dedos, sola roxa de suco
   // pé levantado de PERFIL (calcanhar atrás, dedos para o lado de o.toe), sola roxa de suco
   const F=o.bigFoot||1,dr=o.toe||-1;x.save();x.translate(foot[0],foot[1]);x.scale(F*-dr,F);x.fillStyle=sk;
   x.beginPath();x.moveTo(-14,-16);x.lineTo(14,-16);x.quadraticCurveTo(26,6,16,22);x.quadraticCurveTo(0,30,-40,28);x.lineTo(-64,26);x.quadraticCurveTo(-78,22,-74,10);x.quadraticCurveTo(-60,0,-30,-4);x.quadraticCurveTo(-18,-6,-14,-16);x.closePath();x.fill();
   for(const [tx,ty,r] of [[-70,14,9],[-60,8,7],[-51,4,6],[-43,1,5.5]]){x.beginPath();x.arc(tx,ty,r,0,7);x.fill()}
   x.fillStyle='rgba(110,24,56,.8)';x.beginPath();x.moveTo(20,14);x.quadraticCurveTo(10,30,-40,30);x.lineTo(-68,28);x.quadraticCurveTo(-80,22,-76,16);x.quadraticCurveTo(-40,24,20,14);x.fill();
   x.fillStyle='rgba(255,255,255,.25)';x.beginPath();x.ellipse(-30,-2,14,4,-.2,0,7);x.fill();x.restore()}
  else{x.fillStyle=sk;x.beginPath();x.ellipse(foot[0]+sd*6,foot[1]+12,30,16,0,0,7);x.fill();x.fillStyle='rgba(110,24,56,.55)';x.beginPath();x.ellipse(foot[0]+sd*6,foot[1]+16,30,10,0,0,7);x.fill()}
  if(up){x.fillStyle='rgba(110,24,56,.6)';x.fillRect(foot[0]-21,foot[1]-22,42,22);
   // pingos de suco caindo do pé
   const F2=o.bigFoot||1;x.fillStyle='#7A1838';for(const [dx,dy,r] of [[-16,62,8],[12,80,7],[-2,108,9],[18,132,6],[-12,150,6]]){const ddx=dx*F2,ddy=dy*F2;x.beginPath();x.arc(foot[0]+ddx,foot[1]+ddy,r,0,7);x.fill();x.beginPath();x.moveTo(foot[0]+ddx-r*.8,foot[1]+ddy);x.lineTo(foot[0]+ddx,foot[1]+ddy-r*2.2);x.lineTo(foot[0]+ddx+r*.8,foot[1]+ddy);x.fill()}}}
 x.restore()};legs(false);
 const p={x:px,y:py,s:s,face:1,noLegs:true,breath:o.br||0,look:o.look||0,lookY:o.lookY||0,brow:o.brow||1,mouth:o.sing?0:(o.mouth!=null?o.mouth:1),open:o.sing?(o.open||.6):0,wide:o.wide||0,tilt:o.tilt||0,hands:o.reach||{},arm3d:false,showH:{l:true,r:true}};
 drawPerson(x,ch,p);
 // mangas arregaçadas: faixa da camisa dobrada no cotovelo e antebraço de pele
 for(const k of ['l','r']){if(!p._e||!p._e[k])continue;const e=p._e[k],h=p._h[k];x.save();x.translate(px,py);x.scale(s,s);x.lineCap='round';x.strokeStyle=sk;x.lineWidth=36;x.beginPath();x.moveTo(e[0]+(h[0]-e[0])*.18,e[1]+(h[1]-e[1])*.18);x.lineTo(h[0],h[1]);x.stroke();
  x.strokeStyle=o.shirtD||'#C9BCA2';x.lineWidth=52;x.beginPath();x.moveTo(e[0]-(h[0]-e[0])*.02,e[1]-(h[1]-e[1])*.02);x.lineTo(e[0]+(h[0]-e[0])*.16,e[1]+(h[1]-e[1])*.16);x.stroke();
  x.fillStyle=sk;x.beginPath();x.arc(h[0],h[1],20,0,7);x.fill();x.restore()}
 legs(true);
 // boina de pano
 if(o.cap){const hx=px,hy=py+(-HR-20)*s;x.save();x.translate(hx,hy);x.scale(s,s);x.rotate(o.tilt||0);x.fillStyle=o.cap;x.beginPath();x.ellipse(-6,-HR+20,HR+12,40,-.08,Math.PI,0);x.fill();
  x.beginPath();x.ellipse(-4,-HR+30,HR+20,16,-.05,0,7);x.fill();x.fillStyle='rgba(0,0,0,.25)';x.beginPath();x.ellipse(-4,-HR+36,HR+16,8,-.05,0,Math.PI);x.fill();x.restore()}}
// fila de pisadores de braço dado (o "corte"); xs = centros, base = y do ombro; cada um põe as mãos nos ombros dos vizinhos
function pisadoresFila(x,xs,base,s,t=0,o={}){const D=(xs[1]-xs[0])/s,looks=o.looks||[],TYPES=[
 {skin:'#D8A47E',shirt:'#E8DCC4',shirtD:'#C9BCA2',hair:'#2A1C14',beard:'#2A1C14',beardT:'mustache',trou:'#3A3440'},
 {skin:'#C8916A',shirt:'#8E3A2E',shirtD:'#6E2A22',cap:'#3A3036',trou:'#2E3A44',sus:'#2A1A12'},
 {skin:'#E2B48E',shirt:'#3E5A6E',shirtD:'#2E4458',hair:'#5A3E2A',trou:'#3A3440'},
 {skin:'#B9835E',shirt:'#E8DCC4',shirtD:'#C9BCA2',cap:'#2E2A24',beard:'#3A2A1C',beardT:'short',trou:'#4A3A2E'},
 {skin:'#D8A47E',shirt:'#6E5A3A',shirtD:'#54442C',hair:'#1E1612',trou:'#2E3A44'}];
 xs.forEach((cx,i)=>{const T=TYPES[(i+(o.off||0))%TYPES.length],bob=Math.sin(t*3+i*1.7)*6,lift=(o.lifts||{})[i]||null;
  const reach={l:i>0?[-D-40,30]:[-60,150],r:i<xs.length-1?[D+40,30]:[60,150]};
  pisador(x,cx,base+bob+((i*37)%3)*4,s*(1+((i*53)%5-2)*.025),Object.assign({},T,{lift,reach,look:looks[i]!=null?looks[i]:(i%2?.2:-.2),sing:(o.sing||[]).includes(i),open:.55}))})}
function adegaLagar(x,t=0,o={}){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#160609');g.addColorStop(1,'#2A1216');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 // parede de pedra (blocos de granito)
 const R=rng(26);for(let y=-260;y<560;y+=78){const off=(Math.floor((y+260)/78)%2)*70;for(let xx=-900+off;xx<W+900;xx+=150+R()*30){const w=140+R()*20;x.fillStyle=`rgba(${70+R()*20|0},${42+R()*10|0},${44+R()*10|0},.55)`;x.beginPath();x.roundRect(xx,y,w-8,70,10);x.fill()}}
 // vigas de madeira e lampiões
 x.fillStyle=PISA.wood;for(const bx of [-200,520,1240,1960]){x.fillRect(bx,-300,46,860)}x.fillRect(-900,-40,W+1800,44);
 for(const lx of (o.lamps||[300,1000,1700,2400])){g=x.createRadialGradient(lx,110,6,lx,110,300);g.addColorStop(0,'rgba(255,180,94,.5)');g.addColorStop(1,'rgba(255,180,94,0)');x.fillStyle=g;x.fillRect(lx-320,-200,640,640);
  x.fillStyle='#14080A';x.fillRect(lx-2,4,4,70);x.fillStyle='#D4A24C';x.beginPath();x.roundRect(lx-18,74,36,54,6);x.fill();x.fillStyle='#FFE2A8';x.beginPath();x.roundRect(lx-11,82,22,38,4);x.fill()}
 // lagar: parede de trás, gente, uva, parede da frente
 const L0=o.lx0!=null?o.lx0:-400,L1=o.lx1!=null?o.lx1:W+500,top=o.top||398;
 graniteBlock(x,L0,top-60,L1-L0,66,7);
 const xs=o.xs||(()=>{const a=[];for(let k=o.fx0||560;k<=(o.fx1||2100);k+=o.fd||98)a.push(k);return a})();pisadoresFila(x,xs,o.base||291,o.ps||.34,t,o);
 uvaMassa(x,L0,L1,top,top+70,11,1.3);
 graniteBlock(x,L0,top+60,L1-L0,400,9)}
// borda de granito do lagar na frente do Sommelier (no lugar do balcão), com cachos e folhas por cima
function lagarFrente(x,o={}){const y=o.y||800;graniteBlock(x,-900,y,W+1800,420,5);x.fillStyle='rgba(0,0,0,.35)';x.fillRect(-900,y+16,W+1800,10);
 let g=x.createRadialGradient(1330,y+10,30,1330,y+10,700);g.addColorStop(0,'rgba(255,180,94,.22)');g.addColorStop(1,'rgba(255,180,94,0)');x.fillStyle=g;x.fillRect(400,y,1900,300)}
function vineLeaf(x,cx,cy,s,a=0){x.save();x.translate(cx,cy);x.rotate(a);x.scale(s,s);x.fillStyle='#3E5E36';x.beginPath();x.moveTo(0,30);for(let i=0;i<=5;i++){const an=Math.PI*(1+i/5),r=i%2?30:42;x.lineTo(Math.cos(an)*r,Math.sin(an)*r)}x.closePath();x.fill();
 x.strokeStyle='rgba(20,40,16,.6)';x.lineWidth=2;for(const an of [-2.2,-1.57,-.9]){x.beginPath();x.moveTo(0,20);x.lineTo(Math.cos(an)*30,Math.sin(an)*30+4);x.stroke()}x.restore()}
// cacho de uva tinta mais caprichado (bagos com brilho), pendurado do cabinho em (cx,cy)
function cachoT(x,cx,cy,s,a=0){x.save();x.translate(cx,cy);x.rotate(a);x.scale(s,s);x.strokeStyle='#5A3A1A';x.lineWidth=6;x.lineCap='round';x.beginPath();x.moveTo(0,-14);x.quadraticCurveTo(4,-30,16,-38);x.stroke();
 vineLeaf(x,30,-34,.8,.5);
 const P=[[-26,6],[0,2],[26,6],[-38,32],[-13,30],[13,30],[38,32],[-26,58],[0,56],[26,58],[-13,82],[13,82],[0,106]];
 for(const [gx,gy] of P){const g=x.createRadialGradient(gx-5,gy-6,2,gx,gy,15);g.addColorStop(0,'#9A3A66');g.addColorStop(1,'#33081C');x.fillStyle=g;x.beginPath();x.arc(gx,gy,14,0,7);x.fill();x.fillStyle='rgba(255,255,255,.25)';x.beginPath();x.arc(gx-5,gy-5,3,0,7);x.fill()}x.restore()}
// pé grande pisando (close): canela + pé descalço afundando na uva, respingos — usado em placa/inserto
