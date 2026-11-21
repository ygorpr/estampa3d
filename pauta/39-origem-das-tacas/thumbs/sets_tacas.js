// ===== Vídeo 39 — De onde vem cada taça de vinho? — cenário, taças e personagem =====
// taca(x,bx,by,s,tipo,lv,col): taça desenhada pela base (bx,by), eixo para cima. Tipos: 'flute' (flûte, alta e fina), 'coupe' (taça rasa e larga),
//   'bordeaux' (bojo alto, boca um pouco fechada), 'borgonha' (bojo bem largo, "aquário"), 'tulipa' (espumante/branco, boca que fecha),
//   'roemer' (copo verde antigo com pé de anéis). O vinho fica SEMPRE dentro do bojo (recorte); bolhas só dentro do líquido.
// prateleiraTacas: prateleira iluminada no alto do bar com a FILEIRA de taças diferentes, cada uma com luz por trás
// barTacas: bar Dark Divino com a prateleira de taças no alto (painel escuro, pendentes)
// retratoRainha: quadro de moldura dourada com retrato estilizado de Maria Antonieta (penteado alto empoado, vestido azul-claro com laço, leque)
//   — personagem de verdade, no estilo do canal (cômico e elegante, nada explícito)
const TAC={
 flute:{h:250,stem:96,path:(x)=>{x.moveTo(-5,-96);x.bezierCurveTo(-22,-104,-24,-150,-22,-200);x.lineTo(-21,-250);x.lineTo(21,-250);x.lineTo(22,-200);x.bezierCurveTo(24,-150,22,-104,5,-96)},spark:1},
 coupe:{h:150,stem:96,path:(x)=>{x.moveTo(-5,-96);x.bezierCurveTo(-30,-98,-66,-112,-74,-150);x.lineTo(74,-150);x.bezierCurveTo(66,-112,30,-98,5,-96)},spark:1},
 bordeaux:{h:270,stem:92,path:(x)=>{x.moveTo(-6,-92);x.bezierCurveTo(-56,-104,-56,-200,-40,-270);x.lineTo(40,-270);x.bezierCurveTo(56,-200,56,-104,6,-92)}},
 borgonha:{h:250,stem:86,path:(x)=>{x.moveTo(-6,-86);x.bezierCurveTo(-82,-100,-84,-200,-40,-250);x.lineTo(40,-250);x.bezierCurveTo(84,-200,82,-100,6,-86)}},
 tulipa:{h:240,stem:96,path:(x)=>{x.moveTo(-5,-96);x.bezierCurveTo(-40,-104,-42,-180,-26,-240);x.lineTo(26,-240);x.bezierCurveTo(42,-180,40,-104,5,-96)},spark:1},
 roemer:{h:220,stem:110,green:1,path:(x)=>{x.moveTo(-14,-110);x.bezierCurveTo(-50,-116,-58,-176,-44,-220);x.lineTo(44,-220);x.bezierCurveTo(58,-176,50,-116,14,-110)}}};
function taca(x,bx,by,s,tipo,lv=.45,col='#6E0F24',o={}){const T=TAC[tipo];x.save();x.translate(bx,by);x.scale(s,s);
 const glass=T.green?'rgba(90,150,90,.55)':'rgba(245,232,210,.55)';
 // pé e haste (o roemer tem haste grossa com anéis)
 x.fillStyle=glass;x.beginPath();x.ellipse(0,0,tipo=='coupe'?40:36,7.5,0,0,7);x.fill();
 if(T.green){x.fillRect(-12,-T.stem,24,T.stem);for(let k=0;k<5;k++){x.beginPath();x.ellipse(0,-14-k*18,15,5,0,0,7);x.fill()}for(const [px,py] of [[-14,-50],[14,-70],[-12,-90]]){x.beginPath();x.arc(px,py,6,0,7);x.fill()}}
 else x.fillRect(-4,-T.stem,8,T.stem);
 const bowl=()=>{x.beginPath();T.path(x);x.closePath()};
 bowl();x.fillStyle=T.green?'rgba(120,180,110,.18)':'rgba(255,236,210,.12)';x.fill();
 if(lv>0){x.save();bowl();x.clip();const top=-T.h,lvl=-T.stem-lv*(T.h-T.stem);let g=x.createLinearGradient(0,lvl,0,-T.stem);
  if(T.spark){g.addColorStop(0,'rgba(242,214,130,.85)');g.addColorStop(1,'rgba(220,186,90,.9)')}else{g.addColorStop(0,col);g.addColorStop(1,'#3A0612')}
  x.fillStyle=g;x.fillRect(-100,lvl,200,300);x.fillStyle='rgba(255,240,220,.45)';x.fillRect(-100,lvl,200,3);
  if(T.spark){const R=rng(o.seed||5);x.strokeStyle='rgba(255,250,225,.85)';x.lineWidth=1.6;for(let i=0;i<(o.nb||12);i++){const bx2=(R()-.5)*(tipo=='coupe'?90:28),by2=lvl+6+R()*(-T.stem-lvl-10);x.beginPath();x.arc(bx2,by2,1.6+R()*2,0,7);x.stroke()}}
  x.restore()}
 bowl();x.strokeStyle=T.green?'rgba(140,200,130,.7)':'rgba(255,240,220,.6)';x.lineWidth=2.6;x.stroke();
 const HX={flute:-11,coupe:-44,bordeaux:-30,borgonha:-46,tulipa:-22,roemer:-28}[tipo];x.fillStyle='rgba(255,255,255,.32)';x.beginPath();if(tipo=='coupe')x.ellipse(HX,-140,12,3,0,0,7);else x.ellipse(HX,-T.stem-(T.h-T.stem)*.58,3.2,(T.h-T.stem)*.16,0,0,7);x.fill();x.restore()}
// prateleira no alto com fileira de taças (cada uma com halo de luz por trás)
function prateleiraTacas(x,x0,x1,y,s,tipos,t=0,o={}){const n=tipos.length,step=(x1-x0)/(n-1);
 let g=x.createLinearGradient(0,y-300*s,0,y);g.addColorStop(0,'rgba(255,180,94,0)');g.addColorStop(1,'rgba(255,180,94,.2)');x.fillStyle=g;x.fillRect(x0-200,y-300*s,x1-x0+400,300*s);
 tipos.forEach((tp,i)=>{const cx=x0+i*step;g=x.createRadialGradient(cx,y-130*s,10,cx,y-130*s,150*s);g.addColorStop(0,'rgba(255,200,130,.22)');g.addColorStop(1,'rgba(255,200,130,0)');x.fillStyle=g;x.fillRect(cx-160*s,y-300*s,320*s,320*s);
  const lv=o.empty?0:(TAC[tp].spark?.55:(tp=='roemer'?.35:.38));taca(x,cx,y,s,tp,lv,tp=='roemer'?'#C9B25A':'#6E0F24',{seed:i+3,nb:8})});
 x.fillStyle='#5A2E1C';x.fillRect(x0-240,y,x1-x0+480,14);x.fillStyle='rgba(255,210,150,.4)';x.fillRect(x0-240,y,x1-x0+480,3);x.fillStyle='rgba(0,0,0,.4)';x.fillRect(x0-240,y+14,x1-x0+480,10)}
function barTacas(x,t=0,o={}){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1A070D');g.addColorStop(1,'#2C0B15');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='#22080F';x.fillRect(-300,40,W+600,560);x.strokeStyle='#5A2E1C';x.lineWidth=14;x.strokeRect(-300,40,W+600,560);
 // garrafas escuras na prateleira de baixo (bem apagadas)
 const R=rng(39);let bx=-280;while(bx<W+280){const h=80+R()*30,w=26+R()*8;x.fillStyle=R()<.5?'#1E3A31':'#3A0E18';x.globalAlpha=.6;x.beginPath();x.roundRect(bx,560-h,w,h,6);x.fill();x.fillRect(bx+w/2-5,560-h-30,10,32);x.globalAlpha=1;bx+=w+18+R()*14}
 x.fillStyle='#5A2E1C';x.fillRect(-300,560,W+600,12);
 prateleiraTacas(x,o.x0!=null?o.x0:560,o.x1!=null?o.x1:2100,o.y||395,o.s||.82,o.tipos||['roemer','flute','coupe','tulipa','bordeaux','borgonha'],t,o);
 g=x.createLinearGradient(0,600,0,820);g.addColorStop(0,'#3A1C12');g.addColorStop(1,'#1E0C08');x.fillStyle=g;x.fillRect(-900,600,W+1800,300);
 for(const lx of (o.lamps||[])){g=x.createLinearGradient(0,150,0,820);g.addColorStop(0,'rgba(255,190,110,.18)');g.addColorStop(1,'rgba(255,190,110,0)');x.fillStyle=g;x.beginPath();x.moveTo(lx-40,150);x.lineTo(lx+40,150);x.lineTo(lx+300,820);x.lineTo(lx-300,820);x.closePath();x.fill()}}
// quadro com retrato de Maria Antonieta (cx,cy centro; w,h tamanho)
function retratoRainha(x,cx,cy,w,h){x.save();
 // moldura dourada trabalhada
 let g=x.createLinearGradient(cx-w/2,cy-h/2,cx+w/2,cy+h/2);g.addColorStop(0,'#8A6424');g.addColorStop(.5,'#F2D27A');g.addColorStop(1,'#8A6424');x.fillStyle=g;x.beginPath();x.roundRect(cx-w/2-26,cy-h/2-26,w+52,h+52,10);x.fill();
 x.fillStyle='#5A3E14';x.fillRect(cx-w/2-6,cy-h/2-6,w+12,h+12);
 // fundo do quadro
 g=x.createRadialGradient(cx,cy-h*.1,10,cx,cy,w*.8);g.addColorStop(0,'#5A6A7A');g.addColorStop(1,'#1E2A36');x.fillStyle=g;x.fillRect(cx-w/2,cy-h/2,w,h);
 x.beginPath();x.rect(cx-w/2,cy-h/2,w,h);x.clip();
 const fx=cx,fy=cy-h*.02,r=w*.2;
 // vestido azul-claro com decote quadrado discreto, renda e laço
 x.fillStyle='#9EC2DA';x.beginPath();x.moveTo(cx-w*.48,cy+h/2);x.quadraticCurveTo(cx-w*.46,fy+r*1.5,cx-w*.2,fy+r*1.25);x.lineTo(cx+w*.2,fy+r*1.25);x.quadraticCurveTo(cx+w*.46,fy+r*1.5,cx+w*.48,cy+h/2);x.closePath();x.fill();
 x.fillStyle='#E9C9A8';x.beginPath();x.moveTo(cx-w*.16,fy+r*1.2);x.lineTo(cx+w*.16,fy+r*1.2);x.lineTo(cx+w*.13,fy+r*1.75);x.lineTo(cx-w*.13,fy+r*1.75);x.closePath();x.fill();
 x.fillStyle='#F3EDE0';x.fillRect(cx-w*.17,fy+r*1.72,w*.34,r*.14);
 x.fillStyle='#E07A9A';x.beginPath();x.moveTo(cx,fy+r*1.95);x.lineTo(cx-r*.5,fy+r*1.75);x.lineTo(cx-r*.5,fy+r*2.15);x.closePath();x.fill();x.beginPath();x.moveTo(cx,fy+r*1.95);x.lineTo(cx+r*.5,fy+r*1.75);x.lineTo(cx+r*.5,fy+r*2.15);x.closePath();x.fill();x.beginPath();x.arc(cx,fy+r*1.95,r*.14,0,7);x.fill();
 // pescoço e colar de pérolas
 x.fillStyle='#E9C9A8';x.fillRect(cx-r*.32,fy+r*.7,r*.64,r*.6);x.fillStyle='#F8F4EC';for(let k=-4;k<=4;k++){x.beginPath();x.arc(cx+k*r*.12,fy+r*1.1+Math.abs(k)*-r*.03,r*.06,0,7);x.fill()}
 // penteado alto empoado (torre de cachos) atrás da cabeça
 x.fillStyle='#E8E2DA';x.beginPath();x.ellipse(cx,fy-r*1.3,r*1.05,r*1.45,0,0,7);x.fill();
 for(const [dx,dy,rr] of [[-.95,-.3,.32],[.95,-.3,.32],[-.8,-1.1,.3],[.8,-1.1,.3],[-.5,-2.2,.3],[.5,-2.2,.3],[0,-2.6,.32],[-1.05,.25,.26],[1.05,.25,.26]]){x.beginPath();x.arc(cx+dx*r,fy+dy*r,rr*r,0,7);x.fill()}
 x.strokeStyle='rgba(150,140,130,.5)';x.lineWidth=2;for(const [dx,dy] of [[-.4,-1.6],[.3,-1.9],[-.1,-1.2],[.45,-1.0]]){x.beginPath();x.arc(cx+dx*r,fy+dy*r,r*.18,.5,3.5);x.stroke()}
 // laço e plumas no penteado
 x.fillStyle='#E07A9A';x.beginPath();x.ellipse(cx+r*.55,fy-r*1.75,r*.22,r*.12,.5,0,7);x.fill();x.fillStyle='#F8F4EC';x.beginPath();x.ellipse(cx+r*.35,fy-r*2.7,r*.12,r*.5,-.4,0,7);x.fill();
 // rosto (mesmo estilo do canal: cabeça redonda, olhos ovais, sobrancelha fina)
 x.fillStyle='#F0D2B4';x.beginPath();x.arc(fx,fy,r,0,7);x.fill();
 x.fillStyle='rgba(224,110,130,.35)';x.beginPath();x.ellipse(fx-r*.5,fy+r*.3,r*.2,r*.12,0,0,7);x.ellipse(fx+r*.5,fy+r*.3,r*.2,r*.12,0,0,7);x.fill();
 x.fillStyle='#1c1a2b';x.beginPath();x.ellipse(fx-r*.36,fy-r*.06,r*.09,r*.14,0,0,7);x.ellipse(fx+r*.36,fy-r*.06,r*.09,r*.14,0,0,7);x.fill();
 x.strokeStyle='#8A7A6A';x.lineWidth=r*.05;x.lineCap='round';x.beginPath();x.moveTo(fx-r*.5,fy-r*.34);x.quadraticCurveTo(fx-r*.36,fy-r*.44,fx-r*.2,fy-r*.34);x.moveTo(fx+r*.2,fy-r*.36);x.quadraticCurveTo(fx+r*.36,fy-r*.48,fx+r*.52,fy-r*.4);x.stroke();
 // boquinha de "eu não!" e pinta
 x.fillStyle='#B0364E';x.beginPath();x.ellipse(fx+r*.06,fy+r*.45,r*.13,r*.08,0,0,7);x.fill();x.fillStyle='#1c1a2b';x.beginPath();x.arc(fx+r*.45,fy+r*.18,r*.03,0,7);x.fill();
 // leque aberto na mão (canto)
 x.save();x.translate(cx-w*.3,cy+h*.33);x.rotate(-.5);x.fillStyle='#F3E6C8';x.beginPath();x.moveTo(0,0);x.arc(0,0,r*.9,-Math.PI*.9,-Math.PI*.1);x.closePath();x.fill();x.strokeStyle='#D4A24C';x.lineWidth=2;for(let k=0;k<7;k++){const a=-Math.PI*.9+k*Math.PI*.8/6;x.beginPath();x.moveTo(0,0);x.lineTo(Math.cos(a)*r*.9,Math.sin(a)*r*.9);x.stroke()}
 x.fillStyle='#F0D2B4';x.beginPath();x.arc(0,0,r*.2,0,7);x.fill();x.restore();
 x.restore()}
// carimbo "LENDA" (vinho com borda dourada, levemente torto)
function carimboLenda(x,cx,cy,s,a=-.18,txt='LENDA'){x.save();x.translate(cx,cy);x.rotate(a);x.scale(s,s);x.fillStyle='rgba(94,20,40,.92)';x.beginPath();x.roundRect(-150,-52,300,104,14);x.fill();x.strokeStyle='#D4A24C';x.lineWidth=7;x.stroke();x.lineWidth=2.5;x.beginPath();x.roundRect(-136,-38,272,76,10);x.stroke();goldText(x,txt,0,4,64,'Cinzel',900);x.restore()}
