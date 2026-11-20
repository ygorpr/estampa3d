// ===== Vídeo 17 — cenários e personagens novos (mapa da Europa manchando, corte do solo, navio a vapor, vinhateiro, Planchon, Riley, Munson, enxerto, Chile, Colares, Serra Gaúcha) =====
const EUROPE=[{pts:[[.08,.62],[.16,.44],[.28,.42],[.3,.3],[.42,.22],[.5,.08],[.62,.1],[.6,.24],[.72,.2],[.9,.22],[.94,.6],[.8,.7],[.66,.66],[.6,.86],[.54,.7],[.46,.64],[.42,.78],[.34,.66],[.24,.7],[.18,.8],[.1,.76]]},{pts:[[.2,.16],[.27,.12],[.29,.3],[.22,.34]]}];
// mancha bordô que se espalha (u 0..1) a partir do sul da França
function stain(g,cx,cy,w,h,u,o={}){if(u<=0)return;g.save();g.beginPath();g.roundRect(cx-w/2,cy-h/2,w,h,14);g.clip();const sx=cx-w/2+w*(o.ox??.33),sy=cy-h/2+h*(o.oy??.6),R=u*w*(o.r??.7);
 let gr=g.createRadialGradient(sx,sy,R*.1,sx,sy,R);gr.addColorStop(0,'rgba(110,14,40,.82)');gr.addColorStop(.75,'rgba(110,14,40,.62)');gr.addColorStop(1,'rgba(110,14,40,0)');g.fillStyle=gr;g.beginPath();g.arc(sx,sy,R,0,7);g.fill();g.restore()}
function europeMap(g,cx,cy,w,h,u,o={}){oldMap(g,cx,cy,w,h,EUROPE);stain(g,cx,cy,w,h,u,o)}
// corte do solo com a videira em cima e a raiz com o inseto
function soilCut(g,cx,base,t,wilt=0,bugs=1){g.save();g.fillStyle='#4A2A1A';g.fillRect(cx-560,base-260,1120,360);g.fillStyle='rgba(0,0,0,.15)';const r=rng(9);for(let i=0;i<60;i++){g.beginPath();g.arc(cx-540+r()*1080,base-240+r()*330,3+r()*6,0,7);g.fill()}
 g.fillStyle='#6A4A2A';g.fillRect(cx-560,base-270,1120,14);
 // tronco e folhas acima do solo
 g.strokeStyle='#3A1A10';g.lineWidth=26;g.lineCap='round';g.beginPath();g.moveTo(cx,base-262);g.quadraticCurveTo(cx-10,base-380,cx+10,base-470);g.stroke();g.lineWidth=12;g.beginPath();g.moveTo(cx+10,base-460);g.quadraticCurveTo(cx-140,base-520-wilt*-60,cx-240,base-480+wilt*80);g.moveTo(cx+10,base-460);g.quadraticCurveTo(cx+150,base-530,cx+250,base-480+wilt*80);g.stroke();
 for(const [lx,ly] of [[-200,-500],[-120,-540],[150,-540],[230,-500],[0,-520]]){g.fillStyle=wilt>.5?'#7A5A24':wilt>.2?'#7A7A2E':'#4A7A34';g.save();g.translate(cx+lx,base+ly+wilt*70);g.rotate(wilt*1.1*(lx<0?-1:1));g.beginPath();g.ellipse(0,0,40,28,0,0,7);g.fill();g.restore()}
 g.restore();vineRoot(g,cx+40,base-120,.95);if(bugs>0){g.save();g.globalAlpha*=bugs;tinyBugs(g,[[cx-60,base-150,.32,0],[cx+120,base-110,.3,1],[cx+230,base-100,.26,0],[cx-150,base-165,.28,1]],t);g.restore()}}
// navio a vapor no cais (casco, rodas de pás, chaminé com fumaça) e caixa de mudas
function steamQuay(x,t){harbor(x,t);const sx=1180+Math.sin(t*.5)*6;x.save();x.translate(sx,640);x.fillStyle='#160810';x.beginPath();x.moveTo(-360,-40);x.lineTo(360,-40);x.lineTo(300,50);x.lineTo(-320,50);x.closePath();x.fill();
 x.fillStyle='#2A1418';x.fillRect(-220,-110,380,70);x.fillStyle='#8E1B3A';x.fillRect(-60,-260,60,160);x.fillStyle='#1A0A10';x.fillRect(-66,-270,72,20);
 for(let i=0;i<5;i++){const u=((t*.35+i*.2)%1);x.fillStyle=`rgba(200,190,190,${.45*(1-u)})`;x.beginPath();x.arc(-30-u*220,-290-u*160,30+u*50,0,7);x.fill()}
 x.fillStyle='#3A1A1E';x.beginPath();x.arc(120,10,70,Math.PI,0);x.fill();x.strokeStyle='#D4A24C';x.lineWidth=5;for(let k=0;k<8;k++){const a=Math.PI+k*Math.PI/8+t;x.beginPath();x.moveTo(120,10);x.lineTo(120+Math.cos(a)*70,10+Math.sin(a)*70);x.stroke()}x.restore()}
function seedlingBox(g,cx,base,s){g.save();g.translate(cx,base);g.scale(s,s);g.fillStyle='#8A5A2E';g.fillRect(-150,-90,300,90);g.strokeStyle='#5A3A1A';g.lineWidth=5;g.strokeRect(-150,-90,300,90);
 for(let i=0;i<6;i++){const px=-125+i*50;g.strokeStyle='#4A2A14';g.lineWidth=7;g.beginPath();g.moveTo(px,-90);g.quadraticCurveTo(px+8,-140,px,-170);g.stroke();g.fillStyle='#5A8A3A';g.beginPath();g.ellipse(px+12,-170,16,10,-.4,0,7);g.fill();g.beginPath();g.ellipse(px-12,-150,14,9,.4,0,7);g.fill()}
 g.fillStyle='#2A0A12';g.font='900 26px Cinzel';g.textAlign='center';g.fillText('MUDAS · EUA',0,-38);g.restore()}
// floresta americana com a videira selvagem forte (o inseto não vence)
function usForest(x,t){let g=x.createLinearGradient(0,-300,0,800);g.addColorStop(0,'#1A1020');g.addColorStop(1,'#4A2A2A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 for(let i=0;i<12;i++){const cx=-100+i*190,h=380+(i%3)*80;x.fillStyle=['#1E2A22','#24321E','#1A241C'][i%3];x.beginPath();x.moveTo(cx,780-h);x.lineTo(cx-110,780);x.lineTo(cx+110,780);x.closePath();x.fill();x.fillStyle='#2A1A10';x.fillRect(cx-12,760,24,40)}
 x.fillStyle='#3A2418';x.fillRect(-900,780,W+1800,400)}
// figurinos do séc. XIX
const VINHATEIRO=CHX({cloth:'#5A6A8A',hood:'#3A4A6A',outfit:'shirt',collar:'#3A4A6A',sus:'#4A2A14',leg:'#3A2E22',short:'#3A2A1E',beard:'#3A2A1E',beardT:'mustache',skin:'#DDA882',hand:'#DDA882'});
const PLANCHON=CHX({cloth:'#2A2432',hood:'#17131C',outfit:'blazer',shirt:'#F4F0E8',collar:'#F4F0E8',bow:'#1A1418',short:'#4A4038',beard:'#4A4038',beardT:'full',leg:'#2A2432',skin:'#E8C4A0',hand:'#E8C4A0'});
const RILEY=CHX({cloth:'#4A3A2A',hood:'#2E241A',outfit:'blazer',shirt:'#F4F0E8',collar:'#F4F0E8',tie:'#5E1428',short:'#2A1A12',beard:'#2A1A12',beardT:'mustache',leg:'#2E241A',skin:'#E6BF98',hand:'#E6BF98'});
const MUNSON=CHX({cloth:'#6A5A40',hood:'#4A3E2A',outfit:'vest',vest:'#3A2A1E',collar:'#F4F0E8',short:'#6A6A6A',beard:'#8A8A86',beardT:'full',leg:'#3A2E22',skin:'#DDB08A',hand:'#DDB08A'});
const ve=(x,cx,base,s,t,o={})=>npc(x,cx,base,s,t,Object.assign({ch:VINHATEIRO,hat:'beret',capCol:'#1E2030',look:.3,brow:.9,sad:.7,mouth:-.3},o));
const planchon=(x,cx,base,s,t,o={})=>npc(x,cx,base,s,t,Object.assign({ch:PLANCHON,specs:1,look:.4,brow:1,mouth:.3},o));
const riley=(x,cx,base,s,t,o={})=>npc(x,cx,base,s,t,Object.assign({ch:RILEY,specs:1,look:-.3,mouth:.6},o));
const munson=(x,cx,base,s,t,o={})=>npc(x,cx,base,s,t,Object.assign({ch:MUNSON,hat:'plume',look:.3,mouth:.7,hands:{l:[-95,205,95],r:[150,60,100]},hold:(x,hl,hr)=>{seedlingS(x,hr[0],hr[1]+10,.5)}},o));
function seedlingS(g,cx,cy,s){g.save();g.translate(cx,cy);g.scale(s,s);g.strokeStyle='#4A2A14';g.lineWidth=12;g.beginPath();g.moveTo(0,0);g.lineTo(0,-150);g.stroke();g.fillStyle='#5A8A3A';g.beginPath();g.ellipse(24,-150,30,18,-.4,0,7);g.fill();g.beginPath();g.ellipse(-22,-120,26,16,.4,0,7);g.fill();g.strokeStyle='#6A4A2A';g.lineWidth=5;for(const k of [-20,0,20]){g.beginPath();g.moveTo(0,0);g.lineTo(k,50);g.stroke()}g.restore()}
// medalha dourada
function medal(g,cx,cy,s,t){g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle='#8E1B3A';g.beginPath();g.moveTo(-30,-110);g.lineTo(30,-110);g.lineTo(20,-40);g.lineTo(-20,-40);g.closePath();g.fill();let gr=g.createRadialGradient(-15,-15,5,0,0,60);gr.addColorStop(0,'#FFE7A0');gr.addColorStop(1,'#B8832E');g.fillStyle=gr;g.beginPath();g.arc(0,0,58,0,7);g.fill();g.strokeStyle='#8A5A1E';g.lineWidth=5;g.beginPath();g.arc(0,0,44,0,7);g.stroke();
 g.globalAlpha*=.5+.5*Math.sin(t*3);g.fillStyle='#FFF4C8';g.beginPath();g.arc(-20,-20,8,0,7);g.fill();g.restore()}
// enxerto em fenda, passo a passo (u 0..3): 0 corte · 1 encaixe · 2 amarra · 3 cicatriza
function graftSteps(g,cx,base,s,u){g.save();g.translate(cx,base);g.scale(s,s);
 // porta-enxerto (raiz americana)
 g.strokeStyle='#5A3220';g.lineWidth=10;for(const k of [-50,-10,30,60]){g.beginPath();g.moveTo(0,0);g.quadraticCurveTo(k,40,k*1.4,90);g.stroke()}
 g.fillStyle='#6A4028';g.beginPath();g.roundRect(-34,-220,68,220,10);g.fill();const cut=clamp(u);g.fillStyle='#2A160E';g.beginPath();g.moveTo(-4,-220);g.lineTo(4,-220);g.lineTo(2,-220+90*cut);g.lineTo(-2,-220+90*cut);g.fill();
 // galho europeu (cavaleiro) descendo para a fenda
 const dy=lerp(-220,0,clamp(u-1+0));g.save();g.translate(0,Math.min(0,dy-0)+(u<1?-120:0));const k=clamp(u-.6);g.globalAlpha*=k;g.fillStyle='#7A5A30';g.beginPath();g.moveTo(-22,-430);g.lineTo(22,-430);g.lineTo(16,-250);g.lineTo(0,-170);g.lineTo(-16,-250);g.closePath();g.fill();
 g.fillStyle='#4A7A34';g.beginPath();g.ellipse(40,-420,40,24,-.4,0,7);g.fill();g.beginPath();g.ellipse(-36,-390,34,20,.4,0,7);g.fill();g.restore();
 // ráfia
 const tie=clamp(u-2);if(tie>0){g.strokeStyle='#E2C98A';g.lineWidth=8;for(let i=0;i<Math.ceil(tie*5);i++){g.beginPath();g.moveTo(-38,-200+i*18);g.lineTo(38,-190+i*18);g.stroke()}}
 g.restore();goldText(g,'AMERICANA',cx+230*s,base-110*s,30,'Cinzel',900);if(u>.8)goldText(g,'EUROPEIA',cx+230*s,base-380*s,30,'Cinzel',900)}
// Andes, vinhedo chileno
function chileAndes(x,t){let g=x.createLinearGradient(0,-300,0,700);g.addColorStop(0,'#2A1430');g.addColorStop(1,'#E8894E');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='#5A3A4A';x.beginPath();x.moveTo(-900,560);for(const [px,py] of [[-200,300],[200,420],[520,180],[800,380],[1100,220],[1400,400],[1700,260],[2100,480],[W+900,520]])x.lineTo(px,py);x.lineTo(W+900,900);x.lineTo(-900,900);x.fill();
 x.fillStyle='#F4F0E8';for(const [px,py] of [[520,180],[1100,220],[1700,260]]){x.beginPath();x.moveTo(px,py);x.lineTo(px-70,py+70);x.lineTo(px+60,py+80);x.closePath();x.fill()}
 x.fillStyle='#3A2A22';x.fillRect(-900,600,W+1800,500);for(let r=0;r<4;r++){x.strokeStyle='#3E6A2E';x.lineWidth=18-r*2;x.setLineDash([22,12]);x.beginPath();x.moveTo(-900,650+r*70);x.lineTo(W+900,630+r*70);x.stroke()}x.setLineDash([])}
// Colares: vinha rasteira na areia, mar ao fundo, cercas de cana
function colaresSand(x,t){let g=x.createLinearGradient(0,-300,0,520);g.addColorStop(0,'#2A1A3A');g.addColorStop(1,'#E8A06E');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='#3A5A7A';x.fillRect(-900,440,W+1800,90);x.strokeStyle='rgba(255,240,220,.5)';x.lineWidth=3;for(let i=0;i<10;i++){const xx=(i*230+t*40)%2200-100;x.beginPath();x.moveTo(xx,470+i%3*16);x.lineTo(xx+80,470+i%3*16);x.stroke()}
 x.fillStyle='#E2C98A';x.fillRect(-900,520,W+1800,600);const r=rng(4);x.fillStyle='rgba(160,120,60,.25)';for(let i=0;i<200;i++){x.fillRect(r()*1920,530+r()*500,4,3)}
 for(let i=0;i<6;i++){const cx=150+i*330;x.strokeStyle='#A8864A';x.lineWidth=6;x.beginPath();x.moveTo(cx-150,640);x.lineTo(cx+150,640);x.stroke();for(let k=-150;k<=150;k+=20){x.beginPath();x.moveTo(cx+k,640);x.lineTo(cx+k,560+(k%40?10:0));x.stroke()}
  x.strokeStyle='#4A2A14';x.lineWidth=10;x.beginPath();x.moveTo(cx-80,720);x.quadraticCurveTo(cx,700,cx+90,724);x.stroke();for(let k=0;k<5;k++){x.fillStyle='#4A7A34';x.beginPath();x.ellipse(cx-70+k*38,706,24,15,0,0,7);x.fill()}}}
// Serra Gaúcha: parreiral (latada) com cachos de Isabel
function serraGaucha(x,t){let g=x.createLinearGradient(0,-300,0,620);g.addColorStop(0,'#2A1430');g.addColorStop(1,'#C8703E');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='#3E4A2E';x.beginPath();x.moveTo(-900,520);x.quadraticCurveTo(400,380,960,470);x.quadraticCurveTo(1500,540,W+900,420);x.lineTo(W+900,1100);x.lineTo(-900,1100);x.fill();
 x.strokeStyle='#5A3A1E';x.lineWidth=12;for(const px of [200,700,1220,1720]){x.beginPath();x.moveTo(px,900);x.lineTo(px,330);x.stroke()}x.lineWidth=6;x.beginPath();x.moveTo(100,330);x.lineTo(1820,330);x.stroke();
 for(let i=0;i<26;i++){x.fillStyle=i%2?'#3E6A2E':'#4A7A34';x.beginPath();x.ellipse(120+i*68,320+Math.sin(i)*14,56,34,0,0,7);x.fill()}
 for(const px of [360,540,960,1140,1500,1640])grapesC(x,px,420,.75,'#3A1A4A')}
// sapo de olhos arregalados
function frog(g,cx,cy,s,t){g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle='#5A8A3A';g.beginPath();g.ellipse(0,0,90,60,0,0,7);g.fill();for(const sd of [-1,1]){g.fillStyle='#5A8A3A';g.beginPath();g.arc(sd*42,-54,30,0,7);g.fill();g.fillStyle='#F4F0E8';g.beginPath();g.arc(sd*42,-56,22,0,7);g.fill();g.fillStyle='#1A1410';g.beginPath();g.arc(sd*42+Math.sin(t*2)*4,-56,10,0,7);g.fill()}
 g.strokeStyle='#2A4A1A';g.lineWidth=6;g.beginPath();g.moveTo(-40,10);g.quadraticCurveTo(0,30,40,10);g.stroke();g.fillStyle='#4A7A2E';for(const sd of [-1,1]){g.beginPath();g.ellipse(sd*80,46,40,18,sd*.4,0,7);g.fill()}g.restore()}
function syringe(g,cx,cy,s){g.save();g.translate(cx,cy);g.rotate(.6);g.scale(s,s);g.fillStyle='rgba(220,230,235,.7)';g.fillRect(-30,-200,60,200);g.fillStyle='rgba(120,200,80,.6)';g.fillRect(-26,-120,52,116);g.fillStyle='#8A8A8A';g.fillRect(-4,0,8,90);g.fillRect(-50,-210,100,14);g.fillRect(-8,-290,16,80);g.fillRect(-40,-300,80,14);g.restore()}
function poster(g,cx,cy,w,h,l1,l2,l3){g.save();g.fillStyle='#E9D8B0';g.fillRect(cx-w/2,cy-h/2,w,h);g.strokeStyle='#8A6A3A';g.lineWidth=8;g.strokeRect(cx-w/2+12,cy-h/2+12,w-24,h-24);g.fillStyle='#5E1428';g.textAlign='center';g.textBaseline='middle';
 g.font='900 44px Cinzel';g.fillText(l1,cx,cy-h*.28);g.font='900 74px Cinzel';g.fillText(l2,cx,cy);g.font='700 40px Cinzel';g.fillText(l3,cx,cy+h*.26);g.restore()}
