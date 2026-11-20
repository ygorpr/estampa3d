// ===== Vídeo 18 — objetos novos: gota escorrendo (água × vinho), rótulo com 14%, vinhedo ao sol, banana verde, régua leve→encorpado, mapa do RS =====
const CELLAR18=(x,t)=>{cellarWall(x,t);rack(x,560,230,330,560);rack(x,1500,230,330,560)};
// gota descendo por uma placa de vidro: a de vinho (mais álcool) desce mais devagar
function dropRace(g,cx,top,u,col,label,slow){g.save();g.fillStyle='rgba(220,230,240,.12)';g.fillRect(cx-90,top,180,460);g.strokeStyle='rgba(255,240,220,.5)';g.lineWidth=3;g.strokeRect(cx-90,top,180,460);
 const y=top+30+u*(slow?260:400);g.fillStyle=col;g.globalAlpha*=.85;g.fillRect(cx-10,top+30,20,y-top-30);g.beginPath();g.arc(cx,y,22,0,7);g.fill();g.restore();goldText(g,label,cx,top+500,32,'Cinzel',900)}
// rótulo grande com o teor alcoólico circulado
function bigLabel(g,cx,cy,abv,a=1){g.save();g.fillStyle='#E9DCC0';g.beginPath();g.roundRect(cx-210,cy-260,420,520,16);g.fill();g.strokeStyle='#D4A24C';g.lineWidth=6;g.strokeRect(cx-190,cy-240,380,480);
 g.fillStyle='#5E1428';g.textAlign='center';g.font='900 46px Cinzel';g.fillText('TINTO',cx,cy-150);g.font='600 30px Cormorant';g.fillText('Safra 2021 · 750 ml',cx,cy-90);g.font='900 64px Cinzel';g.fillText(abv,cx,cy+60);g.font='700 26px Cinzel';g.fillText('ÁLCOOL',cx,cy+110);
 if(a>0){g.strokeStyle='#D4A24C';g.lineWidth=8;g.beginPath();g.ellipse(cx,cy+40,150*a+30,70,0,-1.6,-1.6+a*6.3);g.stroke()}g.restore()}
// vinhedo ao sol forte, cacho escurecendo (u)
function sunVineyard(x,t,u=0){let g=x.createLinearGradient(0,-300,0,700);g.addColorStop(0,'#8A3A2A');g.addColorStop(1,'#FFC66E');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);sunIcon(x,1560,220,90,t);
 x.fillStyle='#6A4A2A';x.beginPath();x.moveTo(-900,600);x.quadraticCurveTo(900,480,W+900,560);x.lineTo(W+900,1100);x.lineTo(-900,1100);x.fill();
 for(let r=0;r<4;r++){x.strokeStyle='#3E6A2E';x.lineWidth=20-r*3;x.setLineDash([24,14]);x.beginPath();x.moveTo(-900,650+r*80);x.lineTo(W+900,620+r*80);x.stroke()}x.setLineDash([])}
function greenBanana(g,cx,cy,s){g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle='#7AA83A';g.beginPath();g.moveTo(-120,-20);g.quadraticCurveTo(0,90,130,-30);g.quadraticCurveTo(0,40,-120,-20);g.fill();g.fillStyle='#4A6A2A';g.fillRect(128,-44,16,22);g.restore()}
// régua dourada leve → encorpado
function bodyRuler(g,x0,x1,y,a=1){g.save();g.globalAlpha*=a;let gr=g.createLinearGradient(x0,0,x1,0);gr.addColorStop(0,BODY.leve);gr.addColorStop(.5,BODY.medio);gr.addColorStop(1,BODY.encorpado);g.fillStyle=gr;g.beginPath();g.roundRect(x0,y-16,x1-x0,32,16);g.fill();g.strokeStyle=GOLD2;g.lineWidth=4;g.stroke();
 goldText(g,'LEVE',x0+60,y+50,30,'Cinzel',900);goldText(g,'MÉDIO',(x0+x1)/2,y+50,30,'Cinzel',900);goldText(g,'ENCORPADO',x1-110,y+50,30,'Cinzel',900);g.restore()}
// mapa do Rio Grande do Sul: Serra (norte) × Campanha (sul, perto do Uruguai)
const RS=[{pts:[[.2,.1],[.55,.05],[.8,.12],[.9,.3],[.85,.55],[.7,.8],[.55,.95],[.35,.85],[.15,.6],[.1,.35]]},{pts:[[.05,.88],[.32,.86],[.5,.98],[.05,.99]],col:'#C9B488'}];
