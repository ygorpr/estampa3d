// ===== Vídeo 32 — Por que a garrafa gigante tem nome de rei? — personagens extras (MESMO rig do Sommelier) e objetos =====
// Reis e patriarcas = npc() (dd_common) com figurino: túnica longa (skirt), coroa/turbante (headExtra), barba, mãos de verdade.
const HEADY=-HR-20; // centro da cabeça no espaço do tronco
// figurino de rei/patriarca: túnica + gola
const ROBE=(robe,trim,o={})=>CHX(Object.assign({cloth:robe,hood:trim,outfit:'turtle',leg:robe,shoe:'#2A1A10'},o));
// faixa dourada na túnica + cinto (desenha sobre o corpo, mesmo transform do npc)
function robeTrim(x,cx,base,s,col='#D4A24C',o={}){const y=base-505*s;x.save();x.translate(cx,y);x.scale(s,s);x.fillStyle=col;
 x.fillRect(-10,6,20,TH-10);x.fillRect(-TW/2+4,TH-40,TW-8,18);if(o.hem){x.fillRect(-TW/2-58,STANDY-14,TW+116,16)}
 if(o.gem){x.fillStyle='#C8213F';x.beginPath();x.arc(0,TH-31,9,0,7);x.fill()}x.restore()}
// barba longa (cai do queixo até len), cor col; curls = cachos trançados (assírio)
function longBeard(x,fx,len,w,col,curls){x.fillStyle=col;x.beginPath();x.moveTo(-HR+6,10);x.quadraticCurveTo(-HR+4,HR*.9,-w*.55,len*.55);x.quadraticCurveTo(-w*.2,len,fx*.3,len+10);x.quadraticCurveTo(w*.2,len,w*.55,len*.55);x.quadraticCurveTo(HR-4,HR*.9,HR-6,10);
 x.quadraticCurveTo(HR-14,46,fx+32,50);x.quadraticCurveTo(fx,40,fx-32,50);x.quadraticCurveTo(-HR+14,46,-HR+6,10);x.fill();
 x.fillStyle=col;x.beginPath();x.moveTo(fx-36,44);x.quadraticCurveTo(fx,28,fx+36,44);x.quadraticCurveTo(fx,38,fx-36,44);x.fill();
 if(curls){x.strokeStyle='rgba(0,0,0,.35)';x.lineWidth=3;for(let r=0;r<6;r++)for(let k=-2;k<=2;k++){const by=86+r*((len-90)/6),bx=k*(w*.17)*(1-r*.06);x.beginPath();x.arc(bx,by,8,0,Math.PI*1.6);x.stroke()}}
 else{x.strokeStyle='rgba(0,0,0,.12)';x.lineWidth=3;for(let k=-2;k<=2;k++){x.beginPath();x.moveTo(k*18,70);x.quadraticCurveTo(k*20,len*.6,k*10,len-10);x.stroke()}}}
// boca por cima da barba longa
function mouthOver(x,fx,fy,open,m){x.fillStyle='#1c1a2b';x.strokeStyle='#1c1a2b';x.lineWidth=7;x.lineCap='round';const my=fy+44,mx=fx*.95;x.beginPath();if(open>.02){x.ellipse(mx,my+6,14+open*7,5+open*17,0,0,7);x.fill()}else{x.moveTo(mx-24,my-m*5);x.quadraticCurveTo(mx,my+m*22,mx+24,my-m*5);x.stroke()}}
// coroa no topo da cabeça
const crownOn=(k=1)=>(x)=>kingCrown(x,0,-HR-6,.95*k);
function assyrCrown(x){let g=x.createLinearGradient(0,-HR-110,0,-HR+10);g.addColorStop(0,'#F2D27A');g.addColorStop(1,'#B9852F');x.fillStyle=g;x.beginPath();x.moveTo(-74,-HR+20);x.lineTo(-66,-HR-96);x.quadraticCurveTo(0,-HR-110,66,-HR-96);x.lineTo(74,-HR+20);x.quadraticCurveTo(0,-HR+34,-74,-HR+20);x.fill();
 x.strokeStyle='rgba(90,50,10,.6)';x.lineWidth=3;x.stroke();x.fillStyle='#8E1B3A';x.fillRect(-70,-HR-40,140,16);x.fillStyle='#F2D27A';for(const k of [-48,-16,16,48]){x.beginPath();x.arc(k,-HR-32,6,0,7);x.fill()}
 x.fillStyle='#F2D27A';x.beginPath();x.moveTo(-14,-HR-102);x.lineTo(0,-HR-142);x.lineTo(14,-HR-102);x.closePath();x.fill()}
function turban(x){x.fillStyle='#F3E6C8';x.beginPath();x.ellipse(0,-HR+6,HR+16,62,0,Math.PI,0);x.fill();x.beginPath();x.ellipse(0,-HR+10,HR+18,26,0,0,7);x.fill();
 x.strokeStyle='rgba(120,90,40,.35)';x.lineWidth=4;for(let k=0;k<4;k++){x.beginPath();x.ellipse(0,-HR-6-k*12,HR+10-k*8,14,-.15,Math.PI*1.05,Math.PI*1.95);x.stroke()}
 x.fillStyle='#D4A24C';x.beginPath();x.arc(0,-HR-8,14,0,7);x.fill();x.fillStyle='#1E6A4A';x.beginPath();x.arc(0,-HR-8,7,0,7);x.fill();x.fillStyle='#8E1B3A';x.beginPath();x.moveTo(-6,-HR-22);x.quadraticCurveTo(-20,-HR-80,8,-HR-96);x.quadraticCurveTo(0,-HR-60,6,-HR-22);x.fill()}
function priestHat(x){x.fillStyle='#F4F0E8';x.beginPath();x.moveTo(-70,-HR+24);x.lineTo(-56,-HR-80);x.quadraticCurveTo(0,-HR-130,56,-HR-80);x.lineTo(70,-HR+24);x.quadraticCurveTo(0,-HR+36,-70,-HR+24);x.fill();
 x.fillStyle='#D4A24C';x.fillRect(-70,-HR+4,140,16);x.fillRect(-8,-HR-112,16,116);x.beginPath();x.arc(0,-HR-60,14,0,7);x.fill();x.fillStyle='#8E1B3A';x.beginPath();x.arc(0,-HR-60,7,0,7);x.fill()}
function scarfHead(col){return (x)=>{x.fillStyle=col;x.beginPath();x.moveTo(-HR-14,60);x.quadraticCurveTo(-HR-24,-HR-30,0,-HR-24);x.quadraticCurveTo(HR+24,-HR-30,HR+14,60);x.lineTo(HR-4,60);x.quadraticCurveTo(HR-6,-HR+20,0,-HR+14);x.quadraticCurveTo(-HR+6,-HR+20,-HR+4,60);x.closePath();x.fill();
 x.fillStyle='#D4A24C';x.fillRect(-HR-6,-HR+10,2*HR+12,12)}}
// ---------- personagens ----------
// Jeroboão (verde) e Roboão (vinho): reis jovens de coroa, barba curta, braços cruzados, cara de birra
function youngKing(x,cx,base,s,t,robe,face,o={}){const cr=o.cross??1;const H=cr?{l:[45,150,120],r:[-45,165,125]}:{l:[-95,205,95],r:[95,205,95]};
 const hp=npc(x,cx,base,s,t,Object.assign({ch:ROBE(robe,'#D4A24C',{short:'#3A2618',beard:'#3A2618',beardT:'short',skin:o.skin||SKIN,hand:o.skin||SKIN}),face,look:.45*face,brow:-.2,sad:-.9,mouth:-.4,skirt:robe,hands:H,headExtra:crownOn()},o));
 robeTrim(x,cx,base,s,'#D4A24C',{hem:1,gem:1});return hp}
// Matusalém: velhinho de barba branca até os pés, bengala, costas curvadas, sorriso
function methuselah(x,cx,base,s,t,o={}){const y=base-505*s;
 return npc(x,cx,base,s,t,Object.assign({ch:ROBE('#8A6A44','#6A4A2A',{bald:1,sides:'#F4F0E8',skin:'#E0B48C',hand:'#E0B48C'}),face:1,look:.3,brow:.9,mouth:.9,skirt:'#8A6A44',tilt:.08,
  hands:{l:[-90,200,90],r:[110,150,110]},
  headExtra:(x,fx,fy)=>{longBeard(x,fx,560,150,'#F4F0E8',false);x.strokeStyle='#E9E4DA';x.lineWidth=10;for(const sd of [-1,1]){x.beginPath();x.moveTo(sd*12+fx,fy-34);x.lineTo(sd*40+fx,fy-40);x.stroke()}mouthOver(x,fx,fy,0,.9)},
  hold:(x,hl,hr)=>{x.strokeStyle='#5A3A1E';x.lineWidth=14*s;x.lineCap='round';x.beginPath();x.moveTo(hr[0]-8*s,hr[1]-40*s);x.quadraticCurveTo(hr[0]-60*s,hr[1]-70*s,hr[0]-40*s,hr[1]-10*s);x.moveTo(hr[0],hr[1]);x.lineTo(hr[0]+30*s,base);x.stroke()}},o))}
// rei assírio (Salmanazar): coroa alta cilíndrica, barba e cabelo em cachos trançados, manto franjado
function assyrianKing(x,cx,base,s,t,o={}){const hp=npc(x,cx,base,s,t,Object.assign({ch:ROBE('#1E3A31','#D4A24C',{short:'#1E120C',skin:'#C99A72',hand:'#C99A72'}),face:1,look:.35,brow:.4,mouth:.2,skirt:'#1E3A31',
  hands:{l:[-95,200,95],r:[110,120,120]},
  headExtra:(x,fx,fy)=>{x.fillStyle='#1E120C';for(const sd of [-1,1]){x.beginPath();x.roundRect(sd*(HR-6)-22,-10,44,120,20);x.fill()}longBeard(x,fx,250,170,'#1E120C',true);mouthOver(x,fx,fy,o.open||0,.2);assyrCrown(x)},
  hold:(x,hl,hr)=>{x.strokeStyle='#D4A24C';x.lineWidth=12*s;x.beginPath();x.moveTo(hr[0],hr[1]+80*s);x.lineTo(hr[0],hr[1]-200*s);x.stroke();x.fillStyle='#F2D27A';x.beginPath();x.arc(hr[0],hr[1]-212*s,20*s,0,7);x.fill()}},o));
 // franjas do manto
 const y=base-505*s;x.save();x.translate(cx,y);x.scale(s,s);x.fillStyle='#D4A24C';x.fillRect(-TW/2-56,STANDY-40,TW+112,14);x.strokeStyle='#D4A24C';x.lineWidth=4;for(let k=-8;k<=8;k++){x.beginPath();x.moveTo(k*19,STANDY-26);x.lineTo(k*19,STANDY-4);x.stroke()}
 x.beginPath();x.moveTo(-TW/2+10,30);x.lineTo(TW/2-10,TH-40);x.lineWidth=16;x.stroke();x.restore();return hp}
// rei mago Baltazar: turbante, presente nas mãos
function magiKing(x,cx,base,s,t,o={}){return npc(x,cx,base,s,t,Object.assign({ch:ROBE('#5E1428','#D4A24C',{short:'#1A100C',beard:'#1A100C',beardT:'short',skin:'#8A5A3A',hand:'#8A5A3A'}),face:1,look:.4,lookY:-.3,brow:.6,mouth:.6,skirt:'#5E1428',
  hands:{l:[-20,170,140],r:[60,170,140]},headExtra:turban,
  hold:(x,hl,hr)=>{const cx2=(hl[0]+hr[0])/2,cy2=(hl[1]+hr[1])/2-30*s;x.fillStyle='#D4A24C';x.beginPath();x.roundRect(cx2-46*s,cy2-40*s,92*s,64*s,8*s);x.fill();x.fillStyle='#B9852F';x.beginPath();x.moveTo(cx2-46*s,cy2-40*s);x.quadraticCurveTo(cx2,cy2-80*s,cx2+46*s,cy2-40*s);x.closePath();x.fill();
   x.fillStyle='#8E1B3A';x.fillRect(cx2-6*s,cy2-60*s,12*s,84*s);x.fillStyle='#F2D27A';x.beginPath();x.arc(cx2,cy2-70*s,9*s,0,7);x.fill()}},o))}
// rei babilônio (coroa com pontas, barba negra longa)
function babKing(x,cx,base,s,t,o={}){return npc(x,cx,base,s,t,Object.assign({ch:ROBE('#3A1A5A','#D4A24C',{short:'#140C08',skin:'#C99A72',hand:'#C99A72'}),face:-1,look:-.4,brow:.3,sad:-.3,mouth:.1,skirt:'#3A1A5A',
  hands:{l:[-110,120,120],r:[95,205,95]},headExtra:(x,fx,fy)=>{longBeard(x,fx,200,150,'#140C08',true);mouthOver(x,fx,fy,0,.1);kingCrown(x,0,-HR-6,.95)},
  hold:(x,hl,hr)=>{x.strokeStyle='#D4A24C';x.lineWidth=12*s;x.beginPath();x.moveTo(hl[0],hl[1]+80*s);x.lineTo(hl[0],hl[1]-200*s);x.stroke();x.fillStyle='#F2D27A';x.beginPath();x.arc(hl[0],hl[1]-212*s,20*s,0,7);x.fill()}},o))}
// Salomão: coroa, cetro, trono; mão no queixo (pensativo)
function throne(x,cx,base,s){x.save();x.translate(cx,base);x.scale(s,s);let g=x.createLinearGradient(-180,0,180,0);g.addColorStop(0,'#7A5A26');g.addColorStop(.5,'#D4A24C');g.addColorStop(1,'#7A5A26');x.fillStyle=g;
 x.beginPath();x.moveTo(-170,0);x.lineTo(-170,-560);x.quadraticCurveTo(-170,-700,0,-720);x.quadraticCurveTo(170,-700,170,-560);x.lineTo(170,0);x.closePath();x.fill();x.fillStyle='#5E1428';x.beginPath();x.moveTo(-130,-260);x.lineTo(-130,-560);x.quadraticCurveTo(-120,-660,0,-670);x.quadraticCurveTo(120,-660,130,-560);x.lineTo(130,-260);x.closePath();x.fill();
 x.fillStyle='#F2D27A';x.beginPath();x.arc(0,-640,22,0,7);x.fill();for(const sd of [-1,1]){x.fillStyle='#B9852F';x.fillRect(sd*170-(sd>0?40:0),-330,40,330);x.fillStyle='#F2D27A';x.beginPath();x.arc(sd*150,-340,26,0,7);x.fill()}x.restore()}
function solomon(x,cx,base,s,t,o={}){return npc(x,cx,base,s,t,Object.assign({ch:ROBE('#8E1B3A','#D4A24C',{short:'#4A3020',beard:'#4A3020',beardT:'full',skin:'#D9AE86',hand:'#D9AE86'}),face:1,look:.2,lookY:-.4,brow:.9,mouth:.3,skirt:'#8E1B3A',
  hands:{l:[-110,130,120],r:[20,-18,150]},headExtra:crownOn(1.05),back:(x)=>throne(x,cx,base,s),
  hold:(x,hl,hr)=>{x.strokeStyle='#D4A24C';x.lineWidth=12*s;x.beginPath();x.moveTo(hl[0],hl[1]+120*s);x.lineTo(hl[0],hl[1]-190*s);x.stroke();x.fillStyle='#F2D27A';x.beginPath();x.arc(hl[0],hl[1]-200*s,20*s,0,7);x.fill()}},o))}
// Melquisedeque: rei-sacerdote de manto branco e dourado, oferece pão (esq.) e taça de vinho (dir.)
function melchizedek(x,cx,base,s,t,o={}){const hp=npc(x,cx,base,s,t,Object.assign({ch:ROBE('#F4F0E8','#D4A24C',{short:'#8A8070',beard:'#C9C2B4',beardT:'full',skin:'#D9AE86',hand:'#D9AE86'}),face:1,look:.4,brow:.6,mouth:.8,skirt:'#F4F0E8',
  hands:{l:[60,120,150],r:[150,110,150]},headExtra:priestHat,
  hold:(x,hl,hr)=>{x.fillStyle='#C98A3A';x.beginPath();x.ellipse(hl[0],hl[1]-26*s,48*s,26*s,0,0,7);x.fill();x.strokeStyle='#8A5A20';x.lineWidth=3*s;for(const k of [-1,0,1]){x.beginPath();x.moveTo(hl[0]+k*20*s-8*s,hl[1]-44*s);x.lineTo(hl[0]+k*20*s+8*s,hl[1]-12*s);x.stroke()}
   // cálice dourado com vinho (pela haste)
   x.fillStyle='#D4A24C';x.beginPath();x.moveTo(hr[0]-34*s,hr[1]-90*s);x.quadraticCurveTo(hr[0],hr[1]-10*s,hr[0]+34*s,hr[1]-90*s);x.closePath();x.fill();x.fillStyle='#6E1630';x.beginPath();x.ellipse(hr[0],hr[1]-88*s,30*s,8*s,0,0,7);x.fill();
   x.fillStyle='#D4A24C';x.fillRect(hr[0]-5*s,hr[1]-46*s,10*s,52*s);x.beginPath();x.ellipse(hr[0],hr[1]+8*s,24*s,7*s,0,0,7);x.fill()}},o));
 robeTrim(x,cx,base,s,'#D4A24C',{hem:1,gem:1});return hp}
// Abraão: velho de túnica, cajado, barba grisalha, lenço na cabeça
function abraham(x,cx,base,s,t,o={}){return npc(x,cx,base,s,t,Object.assign({ch:ROBE('#6A4A2A','#4A3020',{skin:'#D9AE86',hand:'#D9AE86',beard:'#B9B2A4',beardT:'full'}),face:-1,look:-.4,brow:.8,mouth:.7,skirt:'#6A4A2A',
  hands:{l:[-120,100,110],r:[95,205,95]},headExtra:(x,fx,fy)=>{longBeard(x,fx,190,150,'#B9B2A4',false);mouthOver(x,fx,fy,0,.7);scarfHead('#E9DCC0')(x)},
  hold:(x,hl)=>{x.strokeStyle='#5A3A1E';x.lineWidth=14*s;x.lineCap='round';x.beginPath();x.moveTo(hl[0],hl[1]-180*s);x.lineTo(hl[0]-10*s,base);x.stroke();x.beginPath();x.arc(hl[0]+18*s,hl[1]-190*s,22*s,Math.PI,Math.PI*2.2);x.stroke()}},o))}
// Walter Scott: escritor escocês do séc. XIX, casaca escura, colarinho alto com gravata branca, cabelo ralo; escreve com pena à luz de vela
const SCOTT=CHX({skin:'#E6BF98',hand:'#E6BF98',cloth:'#2A2A3A',hood:'#1A1A26',outfit:'blazer',shirt:'#F4F0E8',collar:'#F4F0E8',bow:'#F4F0E8',bald:1,sides:'#B98A5A',leg:'#2A2A3A'});
function scott(x,cx,base,s,t,o={}){const w=Math.sin(t*5)*8;return npc(x,cx,base,s,t,Object.assign({ch:SCOTT,face:1,look:.35,lookY:.6,brow:.6,mouth:.3,noLegs:true,
  hands:{l:[-40,215,140],r:[110+w,225,150]},
  headExtra:(x,fx,fy)=>{x.fillStyle='#B98A5A';x.beginPath();x.moveTo(-50,-HR+16);x.quadraticCurveTo(0,-HR-6,40,-HR+20);x.quadraticCurveTo(0,-HR+6,-50,-HR+16);x.fill();x.fillStyle='#B98A5A';for(const sd of [-1,1]){x.beginPath();x.roundRect(sd*(HR-10)-10,0,20,56,8);x.fill()}},
  hold:(x,hl,hr)=>{x.strokeStyle='#F4F0E8';x.lineWidth=4*s;x.beginPath();x.moveTo(hr[0],hr[1]);x.lineTo(hr[0]+40*s,hr[1]-90*s);x.stroke();x.fillStyle='#F4F0E8';x.beginPath();x.moveTo(hr[0]+40*s,hr[1]-90*s);x.quadraticCurveTo(hr[0]+70*s,hr[1]-70*s,hr[0]+12*s,hr[1]-20*s);x.quadraticCurveTo(hr[0]+30*s,hr[1]-60*s,hr[0]+40*s,hr[1]-90*s);x.fill()}},o))}
// mesa com livro aberto e vela (na frente do Walter Scott)
function desk(x,cx,top,s,t){x.save();x.translate(cx,top);x.scale(s,s);x.fillStyle='#4A2416';x.fillRect(-420,0,840,40);x.fillStyle='#2A140C';x.fillRect(-380,40,40,300);x.fillRect(340,40,40,300);x.fillStyle='rgba(0,0,0,.35)';x.fillRect(-420,40,840,14);
 x.fillStyle='#E9D8B0';x.beginPath();x.moveTo(-40,-6);x.quadraticCurveTo(-120,-30,-230,-14);x.lineTo(-230,2);x.lineTo(-40,6);x.closePath();x.fill();x.beginPath();x.moveTo(-40,-6);x.quadraticCurveTo(40,-30,150,-14);x.lineTo(150,2);x.lineTo(-40,6);x.closePath();x.fill();
 x.strokeStyle='rgba(60,40,20,.5)';x.lineWidth=2;for(let k=0;k<4;k++){x.beginPath();x.moveTo(-210,-14+k*3);x.lineTo(-60,-10+k*3);x.stroke()}
 x.fillStyle='#1A1A26';x.beginPath();x.roundRect(240,-40,46,40,6);x.fill();x.restore();candle(x,cx-330*s,top,90*s,t)}
// biblioteca antiga (estantes de livros, janela escura)
function library(x,t){x.fillStyle='#1E0C08';x.fillRect(-900,-600,W+1800,1900);const r=rng(41),cols=['#5E1428','#1E3A31','#4A3020','#2A2A4A','#7A5A26','#3A0E18'];
 for(let sy=40;sy<760;sy+=150){x.fillStyle='#3A1C10';x.fillRect(-400,sy+120,W+800,18);let bx=-380;while(bx<W+380){const w=22+r()*20,h=90+r()*28;x.fillStyle=cols[Math.floor(r()*cols.length)];x.fillRect(bx,sy+120-h,w,h);x.fillStyle='rgba(212,162,76,.5)';x.fillRect(bx+3,sy+120-h+14,w-6,4);x.fillRect(bx+3,sy+120-22,w-6,4);bx+=w+3}}
 let g=x.createRadialGradient(560,500,20,560,500,700);g.addColorStop(0,'rgba(255,180,94,.32)');g.addColorStop(1,'rgba(255,180,94,0)');x.fillStyle=g;x.fillRect(-200,-200,1600,1400);x.fillStyle='rgba(20,6,10,.25)';x.fillRect(-900,-600,W+1800,1900)}
// palácio antigo (pedra, colunas, cortina) — fundo dos reis
function kingHall(x,t,o={}){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#2A1410');g.addColorStop(1,'#4A2A1A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 for(const cx of (o.cols||[200,640,1280,1720])){g=x.createLinearGradient(cx-50,0,cx+50,0);g.addColorStop(0,'#6A4A30');g.addColorStop(.5,'#C9A878');g.addColorStop(1,'#5A3A22');x.fillStyle=g;x.fillRect(cx-50,-100,100,900);x.fillStyle='#D4A24C';x.fillRect(cx-70,-100,140,30);x.fillRect(cx-70,770,140,30)}
 x.fillStyle='#5E1428';x.beginPath();x.moveTo(760,-120);x.quadraticCurveTo(960,260,1160,-120);x.closePath();x.fill();x.fillStyle='rgba(212,162,76,.6)';x.fillRect(-900,-120,W+1800,14);
 g=x.createLinearGradient(0,800,0,1100);g.addColorStop(0,'#3A1C10');g.addColorStop(1,'#1E0C08');x.fillStyle=g;x.fillRect(-900,800,W+1800,500);x.fillStyle='#D4A24C';x.fillRect(-900,798,W+1800,5);
 for(const sx of (o.lamps||[420,1500])){g=x.createRadialGradient(sx,260,10,sx,260,420);g.addColorStop(0,'rgba(255,180,94,.30)');g.addColorStop(1,'rgba(255,180,94,0)');x.fillStyle=g;x.fillRect(sx-420,-160,840,840);x.fillStyle='#D4A24C';x.fillRect(sx-6,260,12,60);x.fillStyle='#F3E6C8';x.fillRect(sx-9,224,18,38);flame(x,sx,222,1,t)}}
// céu do deserto à noite com estrela (rei mago)
function desertNight(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#0E0A22');g.addColorStop(1,'#3A1A2A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);const r=rng(7);x.fillStyle='rgba(255,240,210,.8)';for(let i=0;i<90;i++){x.beginPath();x.arc(r()*W,r()*560,1+r()*2,0,7);x.fill()}
 x.fillStyle='#5A3A22';x.beginPath();x.moveTo(-900,820);x.quadraticCurveTo(300,700,900,800);x.quadraticCurveTo(1500,700,W+900,800);x.lineTo(W+900,1300);x.lineTo(-900,1300);x.fill()}
// estrela-guia
function bigStar(x,cx,cy,r,t){const k=1+Math.sin(t*3)*.06;let g=x.createRadialGradient(cx,cy,2,cx,cy,r*3);g.addColorStop(0,'rgba(255,230,160,.55)');g.addColorStop(1,'rgba(255,230,160,0)');x.fillStyle=g;x.fillRect(cx-r*3,cy-r*3,r*6,r*6);
 x.fillStyle='#F2D27A';x.beginPath();for(let i=0;i<8;i++){const a=i*Math.PI/4-Math.PI/2,rr=(i%2?r*.3:r)*k;x.lineTo(cx+Math.cos(a)*rr,cy+Math.sin(a)*rr)}x.closePath();x.fill()}
// garrafa gigante pelo VOLUME (litros): escala ~ raiz cúbica; k = escala da 750 ml
const gScale=(lit,k=.42)=>k*Math.cbrt(lit/.75);
// contador de garrafinhas (n garrafas de 750 ml em fileiras), entra uma a uma com a
function miniRow(g,cx,cy,n,a,perRow=8,sz=.16){const rows=Math.ceil(n/perRow),sp=Math.max(40,sz*250);for(let i=0;i<n;i++){const u=clamp(a*n-i);if(u<=0)continue;const r=Math.floor(i/perRow),c=i%perRow,inRow=Math.min(perRow,n-r*perRow);
 const bx=cx+(c-(inRow-1)/2)*sp,by=cy+r*sz*400;g.save();g.globalAlpha*=u;bigBottle(g,bx,by,sz);g.restore()}}
// garrafa em corte: vidro, vinho, ar sob a rolha (o mesmo para a 750 e a Magnum)
function bottleCut(g,cx,base,s,airPx,t){g.save();g.translate(cx,base);g.scale(s,s);const path=()=>{g.beginPath();g.moveTo(-42,0);g.lineTo(-42,-160);g.bezierCurveTo(-42,-215,-14,-235,-14,-262);g.lineTo(-14,-296);g.lineTo(14,-296);g.lineTo(14,-262);g.bezierCurveTo(14,-235,42,-215,42,-160);g.lineTo(42,0);g.closePath()};
 path();g.fillStyle='rgba(30,58,49,.55)';g.fill();g.save();path();g.clip();g.fillStyle='#8E1B3A';g.fillRect(-60,-296+airPx/s,120,400);g.fillStyle='rgba(243,230,200,.55)';g.fillRect(-60,-284,120,airPx/s-12);g.restore();
 g.strokeStyle='#D4A24C';g.lineWidth=3/s;path();g.stroke();g.fillStyle='#B98A5A';g.fillRect(-12,-318,24,34);g.restore()}
// relógio dourado (velocidade do ponteiro = sp)
function clockG(g,cx,cy,r,t,sp){g.save();g.fillStyle='#F3E6C8';g.beginPath();g.arc(cx,cy,r,0,7);g.fill();g.strokeStyle='#D4A24C';g.lineWidth=r*.12;g.stroke();g.strokeStyle='#2A0610';g.lineWidth=r*.04;for(let i=0;i<12;i++){const a=i*Math.PI/6;g.beginPath();g.moveTo(cx+Math.cos(a)*r*.78,cy+Math.sin(a)*r*.78);g.lineTo(cx+Math.cos(a)*r*.9,cy+Math.sin(a)*r*.9);g.stroke()}
 const a1=t*sp-Math.PI/2,a2=t*sp/12-Math.PI/2;g.lineCap='round';g.lineWidth=r*.07;g.beginPath();g.moveTo(cx,cy);g.lineTo(cx+Math.cos(a2)*r*.5,cy+Math.sin(a2)*r*.5);g.stroke();g.strokeStyle='#8E1B3A';g.lineWidth=r*.045;g.beginPath();g.moveTo(cx,cy);g.lineTo(cx+Math.cos(a1)*r*.75,cy+Math.sin(a1)*r*.75);g.stroke();g.fillStyle='#2A0610';g.beginPath();g.arc(cx,cy,r*.07,0,7);g.fill();g.restore()}
// praça suíça (casinhas) — recorde Guinness
function swissSquare(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#2A3A5A');g.addColorStop(1,'#C98A6A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='#4A5A6A';x.beginPath();x.moveTo(-900,520);x.lineTo(-300,200);x.lineTo(200,480);x.lineTo(700,160);x.lineTo(1300,470);x.lineTo(1800,220);x.lineTo(W+900,500);x.lineTo(W+900,900);x.lineTo(-900,900);x.fill();x.fillStyle='#E9E4DA';for(const [px,py] of [[-300,200],[700,160],[1800,220]]){x.beginPath();x.moveTo(px-90,py+50);x.lineTo(px,py);x.lineTo(px+90,py+50);x.closePath();x.fill()}
 const H=[[-100,300,'#E9D8B0'],[230,260,'#C98A6A'],[1500,280,'#E9D8B0'],[1780,240,'#B9C7C2'],[2050,300,'#C98A6A']];for(const [hx,hh,c] of H){x.fillStyle=c;x.fillRect(hx-110,840-hh,220,hh);x.fillStyle='#5E1428';x.beginPath();x.moveTo(hx-135,840-hh);x.lineTo(hx,840-hh-120);x.lineTo(hx+135,840-hh);x.closePath();x.fill();
  x.fillStyle='#2A1A10';for(const wx of [-55,55])for(const wy of [60,150]){if(wy<hh-60)x.fillRect(hx+wx-22,840-hh+wy,44,54)}x.fillStyle='#4A2A14';x.fillRect(hx-26,840-90,52,90)}
 x.fillStyle='#8A7A6A';x.fillRect(-900,840,W+1800,400);x.fillStyle='rgba(0,0,0,.15)';for(let k=-10;k<40;k++)x.fillRect(k*80,840,4,400)}
// funil sobre a garrafa grande (transvase)
function funnel(g,cx,cy,s){g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle='#B9C7C2';g.beginPath();g.moveTo(-70,-80);g.lineTo(70,-80);g.lineTo(14,0);g.lineTo(14,40);g.lineTo(-14,40);g.lineTo(-14,0);g.closePath();g.fill();g.strokeStyle='#6A7A76';g.lineWidth=4;g.stroke();g.restore()}
// cálice de pão (ícone tabela)
