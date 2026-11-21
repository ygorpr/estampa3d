// ===== Vídeo 35 — cenários e personagens extras (carregado DEPOIS do film.js; usa sets_tibete) =====
// guarda a pose do Sommelier da cena (para o cachecol e para o cacho na mão)
{const _sa=sommActor;sommActor=function(...a){const hp=_sa(...a);window.LASTHP=hp;return hp}}
// régua de altitude: praia (0 m) embaixo, montanha em cima; u = quanto já "subiu"
function altRuler(g,cx,top,bot,u,t){g.save();g.fillStyle='rgba(20,6,10,.85)';g.beginPath();g.roundRect(cx-40,top-20,80,bot-top+40,40);g.fill();g.strokeStyle='#D4A24C';g.lineWidth=4;g.stroke();
 for(let i=0;i<=4;i++){const y=lerp(bot,top,i/4);g.fillStyle='#D4A24C';g.fillRect(cx+40,y-2,30,4);goldText(g,i==0?'0 M':i==4?'3.563 M':String(Math.round(3563*i/4/100)*100)+' M',cx+170,y,26,'Cinzel',700)}
 const y=lerp(bot,top,u);g.fillStyle='#F2D27A';g.beginPath();g.arc(cx,y,22,0,7);g.fill();
 // praia embaixo e neve em cima
 g.fillStyle='#E8C88A';g.fillRect(cx-260,bot+30,520,26);g.fillStyle='#3A7AB0';g.fillRect(cx-260,bot+56,520,20);
 g.fillStyle='#6A6F98';g.beginPath();g.moveTo(cx-260,top+60);g.lineTo(cx-160,top-60);g.lineTo(cx-60,top+60);g.closePath();g.fill();g.fillStyle='#EDE6E0';g.beginPath();g.moveTo(cx-190,top-20);g.lineTo(cx-160,top-60);g.lineTo(cx-130,top-20);g.closePath();g.fill();g.restore()}
// pontinhos de ar (mais finos em cima)
function airDots(g,x0,x1,top,bot,t){g.save();const R=rng(3);for(let i=0;i<160;i++){const y=lerp(bot,top,Math.pow(R(),.6)),dens=(y-top)/(bot-top);if(R()>dens+.15)continue;g.fillStyle='rgba(200,230,255,.55)';g.beginPath();g.arc(x0+R()*(x1-x0)+Math.sin(t+i)*6,y,4,0,7);g.fill()}g.restore()}
// mapa estilizado da Ásia (Tibete), pergaminho
function asiaMap(g,cx,cy,w,h){oldMap(g,cx,cy,w,h,[{pts:[[.05,.2],[.3,.1],[.6,.08],[.95,.15],[.97,.6],[.8,.85],[.6,.78],[.45,.95],[.3,.7],[.1,.75],[.03,.5]],col:'#D9C493'},{pts:[[.3,.45],[.55,.42],[.7,.5],[.6,.6],[.35,.6]],col:'#C9B07A'}]);
 g.save();g.fillStyle='#8A7A6A';for(let i=0;i<9;i++){const px=cx-w/2+w*(.28+i*.045),py=cy-h/2+h*(.62+((i%2)*.03));g.beginPath();g.moveTo(px-20,py+16);g.lineTo(px,py-18);g.lineTo(px+20,py+16);g.closePath();g.fill();g.fillStyle='#F3EDE0';g.beginPath();g.moveTo(px-6,py-6);g.lineTo(px,py-18);g.lineTo(px+6,py-6);g.fill();g.fillStyle='#8A7A6A'}
 g.font='italic 600 30px Cormorant';g.fillStyle='#5A3A1A';g.textAlign='center';g.fillText('Himalaia',cx-w/2+w*.46,cy-h/2+h*.78);g.fillText('Tibete',cx-w/2+w*.48,cy-h/2+h*.48);g.restore()}
// colunas de altitude: items [[nome, metros, cor]]; u = crescimento 0..1
function altCols(g,items,x0,base,maxM,hmax,u,gap=300){items.forEach(([n,m,col],i)=>{const cx=x0+i*gap,h=hmax*m/maxM*easeIO(clamp(u*1.4-i*.25));g.fillStyle=col;g.beginPath();g.roundRect(cx-80,base-h,160,h,[10,10,0,0]);g.fill();g.strokeStyle='#D4A24C';g.lineWidth=4;g.stroke();
 if(h>20){goldText(g,m.toLocaleString('pt-BR')+' M',cx,base-h-34,34,'Cinzel',900)}goldText(g,n,cx,base+34,28,'Cinzel',700)})}
// prédio (para a diferença de ~450 m)
function tower(g,cx,base,w,h,floors){g.save();g.fillStyle='#3A3A48';g.fillRect(cx-w/2,base-h,w,h);g.fillStyle='rgba(255,220,150,.55)';const n=Math.min(floors,60);for(let i=0;i<n;i++){const y=base-h+8+i*(h-16)/n;g.fillRect(cx-w/2+8,y,w-16,Math.max(1.5,(h-16)/n*.45))}g.restore()}
// cacto (vale seco de Salta)
function cactus(g,cx,base,s){g.save();g.translate(cx,base);g.scale(s,s);g.fillStyle='#4E7A3C';g.beginPath();g.roundRect(-22,-260,44,260,22);g.fill();g.beginPath();g.roundRect(-80,-180,30,90,15);g.fill();g.fillRect(-60,-110,40,24);g.beginPath();g.roundRect(50,-220,30,100,15);g.fill();g.fillRect(20,-140,40,24);
 g.strokeStyle='rgba(20,40,10,.35)';g.lineWidth=3;for(const k of [-10,0,10]){g.beginPath();g.moveTo(k,-250);g.lineTo(k,-6);g.stroke()}g.restore()}
function saltaValley(x,t){let g=x.createLinearGradient(0,-300,0,700);g.addColorStop(0,'#2E4A8A');g.addColorStop(1,'#E8B080');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1400);
 x.fillStyle='#A0442A';x.beginPath();x.moveTo(-900,560);for(const [px,py] of [[-400,330],[100,420],[500,280],[900,400],[1300,300],[1700,390],[2200,320],[2800,420]])x.lineTo(px,py);x.lineTo(W+900,560);x.closePath();x.fill();
 x.fillStyle='#C8683A';x.beginPath();x.moveTo(-900,600);for(const [px,py] of [[-300,470],[300,520],[800,450],[1400,520],[2000,460],[2800,520]])x.lineTo(px,py);x.lineTo(W+900,620);x.closePath();x.fill();
 x.fillStyle='#C9A878';x.fillRect(-900,600,W+1800,600);for(let i=0;i<5;i++){x.fillStyle='#4E6A34';const y=640+i*50;for(let k=-400;k<W+400;k+=60){x.beginPath();x.ellipse(k+(i%2)*30,y,22,14,0,0,7);x.fill()}}cactus(x,160,900,.9);cactus(x,1780,880,.75)}
// selo dourado redondo
function goldSeal(g,cx,cy,r,l1,l2,a=1){fade(g,a,()=>{g.save();g.fillStyle='#D4A24C';g.beginPath();for(let i=0;i<32;i++){const an=i*Math.PI/16,rr=i%2?r:r*1.08;g.lineTo(cx+Math.cos(an)*rr,cy+Math.sin(an)*rr)}g.closePath();g.fill();g.fillStyle='#5E1428';g.beginPath();g.arc(cx,cy,r*.82,0,7);g.fill();g.strokeStyle='#F2D27A';g.lineWidth=3;g.beginPath();g.arc(cx,cy,r*.74,0,7);g.stroke();
 goldText(g,l1,cx,cy-(l2?r*.16:0),Math.min(r*.32,Math.floor(r*1.4/Math.max(1,l1.length)*1.6)));if(l2)goldText(g,l2,cx,cy+r*.24,Math.min(r*.2,Math.floor(r*1.4/l2.length*1.6)),'Cinzel',700);g.restore()})}
// sol com raios violeta em camadas (UV)
function uvSun(g,cx,cy,t,k){g.save();const gr=g.createRadialGradient(cx,cy,10,cx,cy,260);gr.addColorStop(0,'rgba(255,230,170,.9)');gr.addColorStop(1,'rgba(255,230,170,0)');g.fillStyle=gr;g.beginPath();g.arc(cx,cy,260,0,7);g.fill();g.fillStyle='#FFF1CC';g.beginPath();g.arc(cx,cy,70,0,7);g.fill();
 for(let i=0;i<7;i++){const x0=cx-300+i*100,ph=(t*.8+i*.2)%1;g.strokeStyle=`rgba(170,90,230,${.4+.4*k})`;g.lineWidth=5+3*k;g.beginPath();for(let y=0;y<520;y+=10)g.lineTo(x0+Math.sin(y*.05+t*4)*10,cy+100+y);g.stroke()}g.restore()}
// uva em corte com casca fina × grossa
function grapeSkin(g,cx,cy,r,thick){g.save();g.fillStyle=mixC('#6A2A5A','#2A061C',thick);g.beginPath();g.arc(cx,cy,r,0,7);g.fill();g.fillStyle='#D8E6B4';g.beginPath();g.arc(cx,cy,r*(1-.05-.12*thick),0,7);g.fill();g.fillStyle='#8A5A2A';for(const sd of [-1,1]){g.beginPath();g.ellipse(cx+sd*r*.2,cy+r*.1,r*.08,r*.13,sd*.4,0,7);g.fill()}g.restore()}
function sunscreen(g,cx,cy,s){g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle='#F3E6C8';g.beginPath();g.roundRect(-50,-110,100,200,20);g.fill();g.fillStyle='#E8A040';g.fillRect(-50,-40,100,50);g.fillStyle='#5E1428';g.fillRect(-30,90,60,30);g.font='900 26px Cinzel';g.textAlign='center';g.fillStyle='#5E1428';g.fillText('FPS',0,-10);g.restore()}
// lua e cacho dormindo
function moonS(g,cx,cy,r){g.save();g.fillStyle='#F3EDE0';g.beginPath();g.arc(cx,cy,r,0,7);g.fill();g.fillStyle='#101C44';g.beginPath();g.arc(cx+r*.4,cy-r*.2,r*.9,0,7);g.fill();g.restore()}
function sleepyGrapes(g,cx,cy,s,t){g.save();g.translate(cx,cy);g.scale(s,s);cachoUva(g,0,0,3);g.strokeStyle='#F3E6C8';g.lineWidth=4;g.lineCap='round';for(const ex of [-26,26]){g.beginPath();g.arc(ex,130,12,.2,Math.PI-.2);g.stroke()}
 for(let i=0;i<3;i++){const k=(t*.5+i/3)%1;g.globalAlpha=1-k;goldText(g,'z',90+k*60,40-k*90,30+i*8,'Cinzel',900);g.globalAlpha=1}g.restore()}
function sparkleDrop(g,cx,cy,s,t){g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle='rgba(160,220,255,.9)';g.beginPath();g.moveTo(0,-60);g.quadraticCurveTo(40,0,0,40);g.quadraticCurveTo(-40,0,0,-60);g.fill();g.strokeStyle='#F2D27A';g.lineWidth=3;const k=1+.2*Math.sin(t*5);for(let i=0;i<4;i++){g.rotate(Math.PI/2);g.beginPath();g.moveTo(0,-70*k);g.lineTo(0,-95*k);g.stroke()}g.restore()}
// globo com meridianos
function globeS(g,cx,cy,r,t){g.save();const gr=g.createRadialGradient(cx-r*.3,cy-r*.3,r*.1,cx,cy,r);gr.addColorStop(0,'#3E86CF');gr.addColorStop(1,'#0C2650');g.fillStyle=gr;g.beginPath();g.arc(cx,cy,r,0,7);g.fill();g.save();g.beginPath();g.arc(cx,cy,r,0,7);g.clip();
 g.strokeStyle='rgba(255,255,255,.25)';g.lineWidth=2;for(let i=-3;i<=3;i++){g.beginPath();g.ellipse(cx,cy,Math.abs(Math.cos(t*.3+i*.45))*r,r,0,0,7);g.stroke();g.beginPath();g.moveTo(cx-r,cy+i*r/4);g.lineTo(cx+r,cy+i*r/4);g.stroke()}
 g.fillStyle='#5D7F40';for(const [a,b,w,h] of [[-.1,-.6,.4,.3],[-.5,.1,.25,.55],[.3,.3,.3,.2],[-.6,-.4,.3,.25]]){g.beginPath();g.ellipse(cx+a*r,cy+b*r,w*r,h*r,.3,0,7);g.fill()}g.restore();g.strokeStyle='#D4A24C';g.lineWidth=4;g.beginPath();g.arc(cx,cy,r,0,7);g.stroke();g.restore()}
// Serra Catarinense: araucárias, vinhedo em encosta, neblina; frost = geada (0..1)
function araucaria(x,cx,base,s){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='#3A2A1E';x.fillRect(-8,-420,16,420);x.fillStyle='#1E3A28';for(let i=0;i<5;i++){const y=-420+i*24,w=170-i*12;x.beginPath();x.moveTo(-w,y+30);x.quadraticCurveTo(0,y-40,w,y+30);x.quadraticCurveTo(0,y,-w,y+30);x.fill()}x.restore()}
function serraSC(x,t,frost=0){let g=x.createLinearGradient(0,-300,0,700);g.addColorStop(0,'#5A7AA0');g.addColorStop(1,'#E9D8C8');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1400);
 x.fillStyle='#4A6A5A';x.beginPath();x.moveTo(-900,560);for(const [px,py] of [[-300,380],[300,440],[900,360],[1500,430],[2200,380],[2800,460]])x.lineTo(px,py);x.lineTo(W+900,620);x.closePath();x.fill();
 for(const [ax,s] of [[120,.8],[300,.6],[1620,.75],[1820,.9],[1100,.5]])araucaria(x,ax,560,s);
 x.fillStyle='#5A7A3A';x.beginPath();x.moveTo(-900,560);x.quadraticCurveTo(900,470,W+900,600);x.lineTo(W+900,1200);x.lineTo(-900,1200);x.fill();
 for(let i=0;i<6;i++){const y=600+i*60;vineRow(x,-900+i*40,W+900,y,.7+i*.08,i+3)}
 g=x.createLinearGradient(0,380,0,640);g.addColorStop(0,'rgba(240,240,245,0)');g.addColorStop(.6,`rgba(240,240,245,${.35})`);g.addColorStop(1,'rgba(240,240,245,0)');x.fillStyle=g;x.fillRect(-900,380,W+1800,260);
 if(frost>0){x.fillStyle=`rgba(240,248,255,${.5*frost})`;const R=rng(8);for(let i=0;i<500;i++){x.beginPath();x.arc(R()*W,560+R()*500,1.5+R()*2.5,0,7);x.fill()}}}
// viticultor catarinense (jaqueta grossa, gorro, bota de borracha)
const SCMAN=CHX({cloth:'#4A5A3A',hood:'#3A4A2A',outfit:'jacket',shirt:'#8E3A2E',short:'#3A2A1E',beard:'#3A2A1E',beardT:'short',skin:'#E2B48E',hand:'#E2B48E',leg:'#2A3040',shoe:'#1E3A28'});
function scFarmer(g,cx,base,s,t,o={}){return npc(g,cx,base,s,t,Object.assign({ch:SCMAN,hat:'cap',capCol:'#8E1B3A',look:.3,mouth:.5,brow:.5,hands:{l:[-60,150,130],r:[90,170,110]},
 headExtra:(x)=>{x.fillStyle='#F3E6C8';x.beginPath();x.arc(0,-HR-30,14,0,7);x.fill()},hold:(x,hl,hr)=>cachoUva(x,hl[0],hl[1],.9)},o))}
// sommelier convidado (genérico, não é pessoa real) girando a taça
const GUEST=CHX({cloth:'#1E1E28',hood:'#14141C',outfit:'blazer',shirt:'#F4F0E8',collar:'#F4F0E8',tie:'#2A3A5A',short:'#2A2A2A',temples:'#6A6A6A',skin:'#DDA882',hand:'#DDA882',leg:'#1E1E28'});
function guestSomm(g,cx,base,s,t,o={}){const sw=Math.sin(t*5)*12;return npc(g,cx,base,s,t,Object.assign({ch:GUEST,look:.5,lookY:.25,mouth:.4,brow:.6,hands:{l:[-90,210,90],r:[120+sw,110+Math.cos(t*5)*8,140]},hold:(x,hl,hr)=>glassW(x,hr[0]+4,hr[1]+40,1.0*s/.62,.4,'#6E1630')},o))}
// cristal de gelo
function iceCrystal(g,cx,cy,r,a){fade(g,a,()=>{g.save();g.translate(cx,cy);g.strokeStyle='#CFEFFF';g.lineWidth=5;g.lineCap='round';for(let i=0;i<6;i++){g.rotate(Math.PI/3);g.beginPath();g.moveTo(0,0);g.lineTo(0,-r);g.moveTo(0,-r*.6);g.lineTo(-r*.2,-r*.8);g.moveTo(0,-r*.6);g.lineTo(r*.2,-r*.8);g.stroke()}g.restore()})}
// linhas de vento
function windLines(g,t,a){fade(g,a,()=>{g.save();g.strokeStyle='rgba(240,240,255,.55)';g.lineWidth=4;g.lineCap='round';for(let i=0;i<9;i++){const y=160+i*80,o=((t*600+i*230)%(W+600))-300;g.beginPath();g.moveTo(o,y);g.quadraticCurveTo(o+120,y-20,o+240,y);g.stroke()}g.restore()})}
