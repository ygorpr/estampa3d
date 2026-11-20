// ===== Vídeo 24 — objetos e personagens novos: garrafa deitada em corte, rolha encolhendo, maçã, cientistas, adegueiro do séc. XVIII, garrafa "cebola", geladeira, armário, adega climatizada =====
const ADEGA=(x,t)=>adegaDeitada(x,t,{niches:[[160,'stack'],[700,'ends'],[1240,'stack'],[1780,'ends']],lamps:[460,1500]});
// garrafa deitada em corte (gargalo à direita): vinho encostando na rolha; air = bolha de ar perto do gargalo
function lyingCut(g,cx,cy,s,o={}){g.save();g.translate(cx,cy);g.scale(s,s);const sh=()=>{g.beginPath();g.moveTo(-300,-80);g.lineTo(120,-80);g.quadraticCurveTo(180,-80,200,-26);g.lineTo(330,-26);g.lineTo(330,26);g.lineTo(200,26);g.quadraticCurveTo(180,80,120,80);g.lineTo(-300,80);g.closePath()};
 sh();g.fillStyle='rgba(30,58,44,.55)';g.fill();g.save();sh();g.clip();g.fillStyle='#6E0F24';if(o.stand)g.fillRect(-300,-80,380,160);else g.fillRect(-300,-62,640,200);g.restore();
 const ck=o.shrink||0;g.fillStyle='#C99A5B';g.fillRect(250,-22+ck*6,110-ck*20,44-ck*12);g.fillStyle='rgba(0,0,0,.15)';for(let i=0;i<5;i++)g.fillRect(262+i*18,-18+ck*6,4,36-ck*12);
 if(o.wet){g.fillStyle=`rgba(110,15,36,${o.wet})`;g.fillRect(250,-22,10,44)}
 sh();g.strokeStyle='rgba(255,240,220,.6)';g.lineWidth=4;g.stroke();g.restore()}
// garrafa em pé em corte: o ar fica entre o vinho e a rolha (headspace) com gotinhas de vapor
function standCut(g,cx,base,s,t,o={}){g.save();g.translate(cx,base);g.scale(s,s);const sh=()=>{g.beginPath();g.moveTo(-80,0);g.lineTo(-80,-300);g.quadraticCurveTo(-80,-370,-26,-400);g.lineTo(-26,-520);g.lineTo(26,-520);g.lineTo(26,-400);g.quadraticCurveTo(80,-370,80,-300);g.lineTo(80,0);g.closePath()};
 sh();g.fillStyle='rgba(30,58,44,.55)';g.fill();g.save();sh();g.clip();g.fillStyle='#6E0F24';g.fillRect(-90,-440,180,440);
 if(o.vapor){g.fillStyle='rgba(220,235,255,.8)';for(let i=0;i<14;i++){const yy=-450-((t*30+i*13)%40),xx=-18+(i*11)%36;g.beginPath();g.arc(xx,yy,3,0,7);g.fill()}}g.restore();
 g.fillStyle='#C99A5B';g.fillRect(-22,-560,44,60);sh();g.strokeStyle='rgba(255,240,220,.6)';g.lineWidth=4;g.stroke();g.restore()}
function apple(g,cx,cy,s,brown){g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle='#B0222E';g.beginPath();g.arc(-20,0,70,0,7);g.fill();g.fillStyle=`rgb(${Math.round(lerp(245,170,brown))},${Math.round(lerp(236,120,brown))},${Math.round(lerp(200,60,brown))})`;g.beginPath();g.ellipse(30,0,46,66,0,0,7);g.fill();
 g.fillStyle='#3A2A1A';g.beginPath();g.ellipse(30,-8,6,10,0,0,7);g.ellipse(30,14,6,10,0,0,7);g.fill();g.strokeStyle='#4A2A14';g.lineWidth=7;g.beginPath();g.moveTo(-20,-66);g.lineTo(-14,-96);g.stroke();g.restore()}
const CORKSCI=LABCOAT({short:'#8A8A8A',temples:'#B0B0B0',beard:'#9A9A9A',beardT:'short',skin:'#E2B890',hand:'#E2B890'});
function corkScientist(g,cx,base,s,t,o={}){return npc(g,cx,base,s,t,Object.assign({ch:CORKSCI,specs:1,look:.3,mouth:.55,brow:.6,hands:{l:[-60,150,130],r:[170,40,100]},
 hold:(x,hl,hr)=>{x.fillStyle='#8A5A34';x.beginPath();x.roundRect(hl[0]-60,hl[1]-24,120,48,10);x.fill();x.strokeStyle='#5A3A20';x.lineWidth=3;x.stroke();
  x.strokeStyle='#C9CDD2';x.lineWidth=5;x.beginPath();x.moveTo(hr[0],hr[1]);x.lineTo(hr[0]+70,hr[1]-60);x.moveTo(hr[0]+8,hr[1]+4);x.lineTo(hr[0]+76,hr[1]-52);x.stroke();x.fillStyle='#C99A5B';x.fillRect(hr[0]+64,hr[1]-84,24,34)}},o))}
const AUSSCI=LABCOAT({hair:'#C89A5A',shirt:'#D88A6A',collar:'#E9B8A0',tie:null,skin:'#F0D0B4',hand:'#F0D0B4'});
function ausScientist(g,cx,base,s,t,o={}){return npc(g,cx,base,s,t,Object.assign({ch:AUSSCI,look:.4,mouth:.55,brow:.6,hands:{l:[-60,150,130],r:[170,40,100]},
 hold:(x,hl,hr)=>{x.fillStyle='#8A6A3A';x.fillRect(hl[0]-50,hl[1]-70,100,130);x.fillStyle='#F4ECD8';x.fillRect(hl[0]-40,hl[1]-56,80,110);x.fillStyle='#5A5A5A';for(let i=0;i<4;i++)x.fillRect(hl[0]-30,hl[1]-40+i*22,60,4)},
 headExtra:(x)=>{x.fillStyle='#C89A5A';x.beginPath();x.arc(-HR+4,-30,26,0,7);x.fill()}},o))}
const CELLARMAN=CHX({cloth:'#E9DCC0',hood:'#C9BC9C',outfit:'apron',apron:'#6A4426',collar:'#E9DCC0',short:'#5A3A22',beard:'#5A3A22',beardT:'stubble',leg:'#4A3A2A',skin:'#DDA882',hand:'#DDA882'});
function cellarman(g,cx,base,s,t,o={}){return npc(g,cx,base,s,t,Object.assign({ch:CELLARMAN,hat:'cap',capCol:'#3A2A1A',look:.4,lookY:.3,mouth:.5,brow:.6},o))}
// garrafa "cebola" (barriguda): rola se deitada
function onionBottle(g,cx,base,s,rot=0){g.save();g.translate(cx,base);g.rotate(rot);g.scale(s,s);g.fillStyle='#1E3A28';g.beginPath();g.ellipse(0,-80,110,90,0,0,7);g.fill();g.beginPath();g.moveTo(-20,-160);g.lineTo(-16,-280);g.lineTo(16,-280);g.lineTo(20,-160);g.fill();g.fillStyle='#C99A5B';g.fillRect(-14,-300,28,26);g.fillStyle='rgba(255,255,255,.18)';g.beginPath();g.ellipse(-50,-110,18,40,.4,0,7);g.fill();g.restore()}
function oldCellar(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#14080A');g.addColorStop(1,'#2A1410');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.strokeStyle='rgba(0,0,0,.35)';x.lineWidth=4;for(let y=0;y<900;y+=60){x.beginPath();x.moveTo(-900,y);x.lineTo(W+900,y);x.stroke()}x.fillStyle='#3A2418';x.fillRect(-900,820,W+1800,300);candle(x,200,820,140,t);candle(x,1720,820,140,t)}
// armário de quarto aberto, garrafas deitadas no escuro
function wardrobe(g,cx,base,s){g.save();g.translate(cx,base);g.scale(s,s);g.fillStyle='#4A2E1C';g.fillRect(-260,-620,520,620);g.fillStyle='#120608';g.fillRect(-230,-590,460,560);g.fillStyle='#5A3A22';g.save();g.transform(1,-.15,0,1,0,0);g.fillRect(230,-560,180,560);g.restore();
 for(let r=0;r<3;r++)for(let i=0;i<3;i++){g.fillStyle='#1E3A28';g.beginPath();g.arc(-150+i*150,-130-r*130,44,0,7);g.fill();g.fillStyle='#C99A5B';g.beginPath();g.arc(-150+i*150,-130-r*130,14,0,7);g.fill()}g.restore()}
// adega climatizada com visor
function wineFridge(g,cx,base,s,temp){g.save();g.translate(cx,base);g.scale(s,s);g.fillStyle='#1A1A20';g.beginPath();g.roundRect(-180,-640,360,640,16);g.fill();g.fillStyle='rgba(120,160,200,.18)';g.fillRect(-150,-560,300,520);
 for(let r=0;r<5;r++){g.fillStyle='#5A3A22';g.fillRect(-150,-120-r*100,300,8);for(let i=0;i<3;i++){g.fillStyle='#1E3A28';g.beginPath();g.ellipse(-90+i*90,-150-r*100,36,22,0,0,7);g.fill()}}
 g.fillStyle='#0A0A0E';g.fillRect(-90,-620,180,50);g.fillStyle='#7AD0FF';g.font='900 36px Cinzel';g.textAlign='center';g.fillText(temp,0,-582);g.restore()}
function pot(g,cx,base,s,t){g.save();g.translate(cx,base);g.scale(s,s);g.fillStyle='#5A5A62';g.beginPath();g.roundRect(-120,-150,240,150,20);g.fill();g.fillRect(-150,-130,30,16);g.fillRect(120,-130,30,16);g.fillStyle='#3A3A42';g.fillRect(-130,-162,260,20);
 for(let i=0;i<4;i++){const u=((t*.6+i*.25)%1);g.fillStyle=`rgba(230,230,230,${.5*(1-u)})`;g.beginPath();g.arc(-60+i*40,-190-u*140,20+u*20,0,7);g.fill()}g.restore()}
function shaker(g,cx,base,s,t){g.save();g.translate(cx+Math.sin(t*40)*4,base);g.scale(s,s);g.fillStyle='#3A3A42';g.fillRect(-140,-40,280,40);g.strokeStyle='rgba(255,215,120,.8)';g.lineWidth=4;for(const sd of [-1,1])for(let k=0;k<3;k++){g.beginPath();g.arc(sd*160,-20,14+k*14,sd>0?-.8:Math.PI-.8,sd>0?.8:Math.PI+.8);g.stroke()}g.restore();wineBottle(g,cx+Math.sin(t*40)*4,base-40*s,s*1.0)}
function heatWaves(g,cx,y,w,t,a=1){fade(g,a,()=>{g.strokeStyle='rgba(255,140,60,.8)';g.lineWidth=5;for(let k=0;k<3;k++){g.beginPath();for(let i=0;i<=20;i++){const xx=cx-w/2+i*w/20;g.lineTo(xx,y-k*40-((t*40)%40)+Math.sin(i*.9+t*4)*8)}g.stroke()}})}
const bigX=(g,cx,cy,r,a)=>fade(g,a,()=>{g.strokeStyle='#C8213F';g.lineWidth=18;g.lineCap='round';g.beginPath();g.moveTo(cx-r,cy-r);g.lineTo(cx+r,cy+r);g.moveTo(cx+r,cy-r);g.lineTo(cx-r,cy+r);g.stroke()});
