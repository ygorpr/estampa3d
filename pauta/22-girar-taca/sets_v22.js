// ===== Vídeo 22 — objetos e personagens novos: físico suíço com câmera, monitor, taça vista de cima (cristas), bomba em laço, biorreator + cientista, plateia, barras, abacaxi/pêssego =====
const BAR22=(x,t)=>barDD(x,t);
// taça girando no balcão com a mão na BASE (apoiada), desenhando círculos pequenos
function swirlOnCounter(f,bx,by,s,t,a=1,o={}){const ph=t*5.5,r=10*a;const ox=Math.cos(ph)*r,oy=Math.sin(ph)*r*.3;if(a>.05)swirlTrail(f,bx+ox,by+oy,s,a*.7,1);swirlGlass(f,bx+ox,by+oy,s,ph,a,o.col,o.crest||1);if(o.wisps)aromaWisps(f,bx+ox,by+oy,s,t,o.wisps,o.al||.5);
 if(o.hand!==false)gripHand(f,bx+ox+30*s,by+oy+4,0,C10,.85)}
const PHYS=LABCOAT({short:'#8A8A8A',temples:'#B8B8B8',skin:'#E8C4A0',hand:'#E8C4A0'});
function physicist(g,cx,base,s,t,o={}){return npc(g,cx,base,s,t,Object.assign({ch:PHYS,specs:1,look:.4,mouth:.6,brow:.7,hands:{l:[150,90,110],r:[170,20,100]},ro:1},o))}
function hsCamera(g,cx,base,s,t){g.save();g.translate(cx,base);g.scale(s,s);g.strokeStyle='#2A2A30';g.lineWidth=10;for(const k of [-80,0,80]){g.beginPath();g.moveTo(0,-300);g.lineTo(k,0);g.stroke()}
 g.fillStyle='#1A1A20';g.beginPath();g.roundRect(-110,-420,220,130,16);g.fill();g.fillStyle='#3A3A44';g.beginPath();g.arc(140,-355,52,0,7);g.fill();g.fillStyle='#7AB0D0';g.beginPath();g.arc(140,-355,30,0,7);g.fill();
 g.fillStyle=Math.sin(t*6)>0?'#E8202E':'#5A1010';g.beginPath();g.arc(-80,-395,9,0,7);g.fill();g.restore()}
function monitor(g,cx,cy,w,h,fn){g.save();g.fillStyle='#14141A';g.beginPath();g.roundRect(cx-w/2-16,cy-h/2-16,w+32,h+32,14);g.fill();g.fillStyle='#0A1018';g.fillRect(cx-w/2,cy-h/2,w,h);g.beginPath();g.rect(cx-w/2,cy-h/2,w,h);g.clip();fn();g.restore();g.fillStyle='#2A2A30';g.fillRect(cx-20,cy+h/2+16,40,60);g.fillRect(cx-90,cy+h/2+70,180,14)}
// taça vista de cima: n cristas da onda correndo em volta do aro
function topView(g,cx,cy,R,n,t,a=1){g.save();g.fillStyle='rgba(245,232,210,.12)';g.beginPath();g.arc(cx,cy,R,0,7);g.fill();g.strokeStyle='rgba(255,240,220,.7)';g.lineWidth=5;g.stroke();
 g.fillStyle='#5E1428';g.beginPath();for(let i=0;i<=120;i++){const an=i/120*6.283,rr=R*.82+R*.1*Math.sin(n*an-t*4)*a;i?g.lineTo(cx+Math.cos(an)*rr,cy+Math.sin(an)*rr):g.moveTo(cx+Math.cos(an)*rr,cy+Math.sin(an)*rr)}g.closePath();g.fill();
 g.fillStyle='rgba(255,215,120,.85)';for(let k=0;k<n;k++){const an=(t*4)/n+k*6.283/n;g.beginPath();g.arc(cx+Math.cos(an)*R*.92,cy+Math.sin(an)*R*.92,10,0,7);g.fill()}g.restore()}
// a onda como bomba: setas em laço (de baixo pra cima, do centro pra borda)
function pumpLoops(g,cx,cy,s,t,a=1){fade(g,a,()=>{g.save();g.translate(cx,cy);g.scale(s,s);g.strokeStyle=GOLD2;g.lineWidth=7;g.setLineDash([18,12]);g.lineDashOffset=-t*40;for(const sd of [-1,1]){g.beginPath();g.ellipse(sd*90,0,80,140,0,0,7);g.stroke()}g.setLineDash([]);
 for(const sd of [-1,1]){arrow(g,sd*30,120,sd*30,-100,GOLD2,6);arrow(g,sd*60,-140,sd*160,-130,GOLD2,6)}g.restore()})}
// biorreator orbital: tanque redondo de aço numa base, girando em círculos pequenos com a onda dourada dentro
function bioRoom(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#141A22');g.addColorStop(1,'#2A303A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);x.fillStyle='#3A404A';x.fillRect(-900,800,W+1800,400);
 for(let i=0;i<6;i++){x.fillStyle='rgba(200,220,240,.08)';x.fillRect(100+i*300,80,200,500)}}
function bioreactor(g,cx,base,s,t,a=1){const ph=t*2.2,ox=Math.cos(ph)*14*a,oy=Math.sin(ph)*5*a;g.save();g.translate(cx,base);g.scale(s,s);g.fillStyle='#4A505A';g.fillRect(-260,-90,520,90);g.fillStyle='#2A3038';g.fillRect(-200,-110,400,24);
 g.translate(ox,oy);const sh=()=>{g.beginPath();g.ellipse(0,-160,230,60,0,Math.PI,0);g.lineTo(230,-460);g.ellipse(0,-460,230,60,0,0,Math.PI,true);g.closePath()};
 let gr=g.createLinearGradient(-230,0,230,0);gr.addColorStop(0,'#8A9098');gr.addColorStop(.5,'#D8DEE4');gr.addColorStop(1,'#7A8088');g.fillStyle=gr;sh();g.fill();
 g.fillStyle='rgba(20,30,40,.75)';g.beginPath();g.roundRect(-120,-420,240,220,30);g.fill();g.save();g.beginPath();g.roundRect(-120,-420,240,220,30);g.clip();g.fillStyle='rgba(242,196,90,.75)';g.beginPath();g.moveTo(-130,-250);for(let i=0;i<=24;i++){const xx=-130+i*11;g.lineTo(xx,-300+Math.sin(i*.4-ph*2)*30*a)}g.lineTo(130,-190);g.lineTo(-130,-190);g.fill();
 g.fillStyle='rgba(255,255,255,.7)';for(let i=0;i<8;i++){const yy=-300+((t*40+i*30)%110);g.beginPath();g.arc(-80+(i*29)%160,yy,5,0,7);g.fill()}g.restore();
 g.fillStyle='#8A9098';g.beginPath();g.ellipse(0,-460,230,60,0,0,7);g.fill();g.fillStyle='#5A6068';g.beginPath();g.ellipse(0,-460,180,44,0,0,7);g.fill();g.fillStyle='#2A3038';g.fillRect(-16,-540,32,80);g.restore()}
const BIOSCI=CHX({cloth:'#A8C8E8',hood:'#7898B8',outfit:'blazer',shirt:'#E8F0F8',collar:'#E8F0F8',leg:'#3A4050',hand:'#6A9AD8',skin:'#E2B890',finger:'#3A5A8A',short:'#3A2A1E'});
function bioScientist(g,cx,base,s,t){return npc(g,cx,base,s,t,{ch:BIOSCI,hat:'cap',capCol:'#7AA8D8',look:.4,lookY:.2,mouth:.5,brow:.6,hands:{l:[-60,150,130],r:[170,60,100]},
 hold:(x,hl,hr)=>{x.fillStyle='#8A6A3A';x.fillRect(hl[0]-50,hl[1]-70,100,130);x.fillStyle='#F4ECD8';x.fillRect(hl[0]-40,hl[1]-56,80,110);x.fillStyle='#5A5A5A';for(let i=0;i<4;i++)x.fillRect(hl[0]-30,hl[1]-40+i*22,60,4)}})}
function crowd(g,y,t,n=10){for(let i=0;i<n;i++){const cx=140+i*(1640/(n-1));g.fillStyle='#120408';g.beginPath();g.arc(cx,y-80,44,0,7);g.fill();g.beginPath();g.roundRect(cx-66,y-36,132,150,30);g.fill();glassW(g,cx+50,y+40,.5,.4,'#6E1630')}}
function meter(g,cx,base,h,u,label,col=GOLD2){g.fillStyle='rgba(20,6,10,.8)';g.fillRect(cx-40,base-h,80,h);g.strokeStyle=GOLD;g.lineWidth=4;g.strokeRect(cx-40,base-h,80,h);g.fillStyle=col;g.fillRect(cx-32,base-h*u,64,h*u-8);goldText(g,label,cx,base+40,32,'Cinzel',900)}
function pineapple(g,cx,cy,s){g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle='#E8A83A';g.beginPath();g.ellipse(0,0,50,72,0,0,7);g.fill();g.strokeStyle='#A8702A';g.lineWidth=4;for(let i=-3;i<=3;i++){g.beginPath();g.moveTo(-50,i*20);g.lineTo(50,i*20+30);g.stroke()}g.fillStyle='#4A8A3A';for(const a of [-.5,0,.5]){g.save();g.translate(0,-70);g.rotate(a);g.beginPath();g.ellipse(0,-30,12,40,0,0,7);g.fill();g.restore()}g.restore()}
function peach(g,cx,cy,s){g.save();g.translate(cx,cy);g.scale(s,s);let gr=g.createRadialGradient(-15,-15,5,0,0,60);gr.addColorStop(0,'#FFC88A');gr.addColorStop(1,'#E8704A');g.fillStyle=gr;g.beginPath();g.arc(0,0,58,0,7);g.fill();g.fillStyle='#4A8A3A';g.beginPath();g.ellipse(20,-60,24,12,-.5,0,7);g.fill();g.restore()}
function grayCloud(g,cx,cy,s,a){fade(g,a,()=>{g.fillStyle='rgba(150,150,150,.75)';for(const [dx,dy,r] of [[-60,10,50],[0,-20,65],[60,10,50],[0,25,55]]){g.beginPath();g.arc(cx+dx*s,cy+dy*s,r*s,0,7);g.fill()}})}
function flute(g,cx,base,s,t){g.save();g.translate(cx,base);g.scale(s,s);g.fillStyle='rgba(245,232,210,.55)';g.beginPath();g.ellipse(0,0,30,6,0,0,7);g.fill();g.fillRect(-4,-90,8,90);
 const sh=()=>{g.beginPath();g.moveTo(-6,-90);g.quadraticCurveTo(-30,-110,-28,-200);g.lineTo(-26,-300);g.lineTo(26,-300);g.lineTo(28,-200);g.quadraticCurveTo(30,-110,6,-90);g.closePath()};
 g.save();sh();g.clip();g.fillStyle='rgba(242,214,140,.8)';g.fillRect(-40,-250,80,170);g.fillStyle='rgba(255,255,255,.85)';for(let i=0;i<14;i++){const yy=-100-((t*70+i*23)%150);g.beginPath();g.arc(-14+(i*13)%28,yy,3,0,7);g.fill()}g.restore();sh();g.strokeStyle='rgba(255,240,220,.6)';g.lineWidth=3;g.stroke();g.restore()}
function miniCard22(g,cx,cy,l1,a=1){fade(g,a,()=>{g.fillStyle='rgba(20,6,10,.9)';g.beginPath();g.roundRect(cx-200,cy-110,400,220,16);g.fill();g.strokeStyle='#D4A24C';g.lineWidth=5;g.stroke();g.fillStyle='#B0122E';g.beginPath();g.moveTo(cx-26,cy-50);g.lineTo(cx+32,cy-18);g.lineTo(cx-26,cy+14);g.closePath();g.fill();goldText(g,l1,cx,cy+62,26,'Cinzel',900)})}
