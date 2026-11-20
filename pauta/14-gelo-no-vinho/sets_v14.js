// ===== Vídeo 14 "Pode colocar gelo no vinho?" — cenários e personagens extras (no estilo do Sommelier, rig npc do dd_common) =====
// ---------- Grécia: banquete ao entardecer; cratera (vaso grande de boca larga, figuras negras) ----------
function crater(x,cx,base,s,lv=.0,t=0){x.save();x.translate(cx,base);x.scale(s,s);
 x.fillStyle='rgba(0,0,0,.35)';x.beginPath();x.ellipse(0,0,130,16,0,0,7);x.fill();
 // pé
 x.fillStyle='#1A0F0C';x.beginPath();x.moveTo(-70,0);x.lineTo(70,0);x.lineTo(40,-40);x.lineTo(-40,-40);x.closePath();x.fill();
 // corpo (terracota com faixa preta)
 let g=x.createLinearGradient(-160,0,160,0);g.addColorStop(0,'#8A3A18');g.addColorStop(.35,'#D9783A');g.addColorStop(.6,'#C0602C');g.addColorStop(1,'#6A2A10');x.fillStyle=g;
 x.beginPath();x.moveTo(-40,-40);x.quadraticCurveTo(-170,-120,-150,-250);x.lineTo(-190,-300);x.lineTo(190,-300);x.lineTo(150,-250);x.quadraticCurveTo(170,-120,40,-40);x.closePath();x.fill();
 // faixa preta com figuras (silhuetas de bebedores) e meandro
 x.fillStyle='#1A0F0C';x.beginPath();x.moveTo(-158,-235);x.lineTo(158,-235);x.lineTo(150,-150);x.quadraticCurveTo(0,-128,-150,-150);x.closePath();x.fill();
 x.fillStyle='#D9783A';for(const k of [-90,0,90]){x.beginPath();x.arc(k,-205,11,0,7);x.fill();x.fillRect(k-10,-194,20,32);x.fillRect(k+8,-190,22,6)}
 x.strokeStyle='#1A0F0C';x.lineWidth=5;x.beginPath();for(let i=-7;i<=7;i++){const px=i*22;x.moveTo(px-8,-262);x.lineTo(px-8,-276);x.lineTo(px+8,-276);x.lineTo(px+8,-268)}x.stroke();
 // alças baixas
 x.strokeStyle='#1A0F0C';x.lineWidth=12;for(const sd of [-1,1]){x.beginPath();x.moveTo(sd*150,-190);x.quadraticCurveTo(sd*215,-200,sd*170,-245);x.stroke()}
 // boca larga com o vinho misturado
 x.fillStyle='#2A0A10';x.beginPath();x.ellipse(0,-300,190,26,0,0,7);x.fill();x.fillStyle=`rgba(${Math.round(110+60*lv)},${Math.round(22+40*lv)},${Math.round(40+30*lv)},1)`;x.beginPath();x.ellipse(0,-298,172,19,0,0,7);x.fill();
 x.fillStyle='rgba(255,220,180,.25)';x.beginPath();x.ellipse(-50+Math.sin(t*2)*10,-300,40,5,0,0,7);x.fill();
 x.strokeStyle='#E8A060';x.lineWidth=4;x.beginPath();x.ellipse(0,-300,190,26,0,0,7);x.stroke();x.restore()}
function hydria(x,cx,base,s,rot=0){x.save();x.translate(cx,base);x.rotate(rot);x.scale(s,s);x.fillStyle='#1A0F0C';x.beginPath();x.moveTo(-50,0);x.quadraticCurveTo(-95,-90,-40,-150);x.lineTo(-24,-190);x.lineTo(24,-190);x.lineTo(40,-150);x.quadraticCurveTo(95,-90,50,0);x.closePath();x.fill();
 x.fillStyle='#D9783A';x.fillRect(-70,-110,140,14);x.fillRect(-32,-198,64,12);x.strokeStyle='#1A0F0C';x.lineWidth=10;x.beginPath();x.arc(-62,-120,24,1.6,4.6);x.stroke();x.restore()}
function greekBanquet(x,t){greece(x,t);greekColumn(x,260,880,1.25);greekColumn(x,1680,880,1.25);
 x.fillStyle='#4A2A1E';x.fillRect(-900,860,W+1800,300);x.fillStyle='rgba(212,162,76,.45)';x.fillRect(-900,860,W+1800,5);
 // divãs do banquete com almofadas
 for(const [cx,w] of [[420,420],[1500,420]]){x.fillStyle='#5E1428';x.beginPath();x.roundRect(cx-w/2,770,w,70,18);x.fill();x.fillStyle='#8E1B3A';x.beginPath();x.ellipse(cx-w/2+60,760,60,28,0,0,7);x.fill();x.fillStyle='#3A1C12';x.fillRect(cx-w/2+20,840,18,40);x.fillRect(cx+w/2-38,840,18,40)}}
// ---------- personagens extras (mesmo rig do Sommelier) ----------
const GREGO=CHX({cloth:'#EFE6D2',hood:'#CFC2A4',leg:'#6A4A30',short:'#2A1A12',beard:'#2A1A12',beardT:'full',skin:'#D9A880',hand:'#D9A880'});
function grego(x,cx,base,s,t,o={}){return npc(x,cx,base,s,t,Object.assign({ch:GREGO,face:1,look:.4,mouth:.6,brow:.6,shawl:'#8E1B3A',
 headExtra:(x)=>{x.strokeStyle='#C9A060';x.lineWidth=7;x.beginPath();x.arc(0,-6,HR+2,Math.PI*1.08,Math.PI*1.92);x.stroke()}},o))}
const NERO=CHX({cloth:'#F2EADA',hood:'#D9CDB2',leg:'#6A4A30',short:'#B0703A',skin:'#E8C4A0',hand:'#E8C4A0'});
function laurel(x,r){for(const sd of [-1,1])for(let i=0;i<7;i++){const a=Math.PI*(1.5+sd*(.12+i*.075)),px=Math.cos(a)*r,py=Math.sin(a)*r-4;x.save();x.translate(px,py);x.rotate(a+Math.PI/2+sd*.5);
 x.fillStyle=i%2?'#C9A040':'#E2B456';x.beginPath();x.ellipse(0,0,8,18,0,0,7);x.fill();x.restore()}}
function nero(x,cx,base,s,t,o={}){return npc(x,cx,base,s,t,Object.assign({ch:NERO,face:-1,look:-.35,mouth:.65,brow:.3,shawl:'#6A1A5A',headExtra:(x)=>laurel(x,HR+4)},o))}
const SENECA=CHX({cloth:'#E9E2D0',hood:'#C9BEA4',leg:'#6A4A30',bald:1,sides:'#9A948A',beard:'#9A948A',beardT:'full',skin:'#E2B890',hand:'#E2B890'});
function seneca(x,cx,base,s,t,o={}){return npc(x,cx,base,s,t,Object.assign({ch:SENECA,face:1,look:.35,mouth:-.3,brow:-.4,sad:.2,shawl:'#3A4A6A'},o))}
const ESCRAVO=CHX({cloth:'#9A7A54',hood:'#7A5E3E',leg:'#5A4030',short:'#1A1210',skin:'#C8946A',hand:'#C8946A'});
function snowPorter(x,cx,base,s,t,o={}){return npc(x,cx,base,s,t,Object.assign({ch:ESCRAVO,face:1,look:.3,mouth:.3,brow:.6,hands:{l:[-40,-150,60],r:[60,-150,60]},
 back:(x,p,br)=>{const y=p.y+(-HR-40)*p.s;x.save();x.translate(p.x,y);x.scale(p.s,p.s);x.fillStyle='#7A5232';x.beginPath();x.moveTo(-120,-60);x.lineTo(120,-60);x.lineTo(96,30);x.lineTo(-96,30);x.closePath();x.fill();
  x.strokeStyle='#5A3A22';x.lineWidth=4;for(let i=-4;i<=4;i++){x.beginPath();x.moveTo(i*24,-60);x.lineTo(i*20,30);x.stroke()}x.fillStyle='#F4F8FF';x.beginPath();x.moveTo(-118,-58);x.quadraticCurveTo(-60,-130,0,-110);x.quadraticCurveTo(70,-140,118,-58);x.closePath();x.fill();x.restore()}},o))}
// neve: monte e vaso de vidro enterrado
function snowPile(x,cx,base,w,h){x.save();x.fillStyle='#E8EEF6';x.beginPath();x.moveTo(cx-w/2,base);x.quadraticCurveTo(cx-w/3,base-h*1.1,cx,base-h);x.quadraticCurveTo(cx+w/3,base-h*1.05,cx+w/2,base);x.closePath();x.fill();
 x.fillStyle='rgba(160,190,230,.35)';x.beginPath();x.ellipse(cx+w*.12,base-h*.35,w*.28,h*.25,0,0,7);x.fill();x.fillStyle='rgba(255,255,255,.9)';x.beginPath();x.ellipse(cx-w*.1,base-h*.8,w*.16,h*.1,0,0,7);x.fill();x.restore()}
function glassVase(x,cx,base,s){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='rgba(200,230,240,.35)';x.beginPath();x.moveTo(-40,0);x.quadraticCurveTo(-80,-80,-34,-150);x.lineTo(-30,-200);x.lineTo(30,-200);x.lineTo(34,-150);x.quadraticCurveTo(80,-80,40,0);x.closePath();x.fill();
 x.strokeStyle='rgba(235,250,255,.85)';x.lineWidth=4;x.stroke();x.fillStyle='rgba(150,200,235,.55)';x.beginPath();x.moveTo(-50,-20);x.quadraticCurveTo(-72,-80,-40,-120);x.lineTo(40,-120);x.quadraticCurveTo(72,-80,50,-20);x.closePath();x.fill();
 x.strokeStyle='rgba(255,255,255,.8)';x.lineWidth=3;x.beginPath();x.moveTo(-22,-140);x.lineTo(-30,-60);x.stroke();x.restore()}
function romeSnow(x,t){let g=x.createLinearGradient(0,-300,0,800);g.addColorStop(0,'#2A0A18');g.addColorStop(.6,'#8A3A30');g.addColorStop(1,'#E0A060');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1500);
 // montanhas com neve no alto
 for(const [cx,h,w,c] of [[300,420,700,'#5A3040'],[1000,520,900,'#4A2638'],[1700,440,760,'#5A3040']]){x.fillStyle=c;x.beginPath();x.moveTo(cx-w/2,720);x.lineTo(cx,720-h);x.lineTo(cx+w/2,720);x.closePath();x.fill();
  x.fillStyle='#F2F4FA';x.beginPath();x.moveTo(cx-w*.14,720-h*.72);x.lineTo(cx,720-h);x.lineTo(cx+w*.14,720-h*.72);x.lineTo(cx+w*.06,720-h*.66);x.lineTo(cx,720-h*.74);x.lineTo(cx-w*.06,720-h*.66);x.closePath();x.fill()}
 x.fillStyle='#C8A880';x.fillRect(-900,700,W+1800,40);greekColumn(x,180,900,1.1);greekColumn(x,1740,900,1.1);x.fillStyle='#E8D8B8';x.fillRect(60,500,1800,0);
 x.fillStyle='#6A4A36';x.fillRect(-900,880,W+1800,300);x.fillStyle='rgba(212,162,76,.4)';x.fillRect(-900,880,W+1800,5)}
// ---------- Espanha: pousada branca em Córdoba, sol forte ----------
function cordoba(x,t){let g=x.createLinearGradient(0,-300,0,500);g.addColorStop(0,'#E87A30');g.addColorStop(1,'#FFC860');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1200);
 g=x.createRadialGradient(1580,160,20,1580,160,380);g.addColorStop(0,'rgba(255,240,180,.95)');g.addColorStop(1,'rgba(255,240,180,0)');x.fillStyle=g;x.fillRect(1100,-300,960,900);x.fillStyle='#FFF2C0';x.beginPath();x.arc(1580,160,70,0,7);x.fill();
 // paredes caiadas com arcos e vasos azuis de gerânio
 x.fillStyle='#F2E8D8';x.fillRect(-900,300,W+1800,600);x.fillStyle='rgba(200,150,110,.25)';x.fillRect(-900,860,W+1800,40);
 for(const cx of [300,960,1620]){x.fillStyle='#3A2418';x.beginPath();x.moveTo(cx-140,900);x.lineTo(cx-140,560);x.arc(cx,560,140,Math.PI,0);x.lineTo(cx+140,900);x.fill();x.strokeStyle='#C89A5A';x.lineWidth=10;x.beginPath();x.moveTo(cx-140,900);x.lineTo(cx-140,560);x.arc(cx,560,140,Math.PI,0);x.lineTo(cx+140,900);x.stroke()}
 for(const px of [120,520,760,1160,1420,1820]){x.fillStyle='#2A5AA8';x.beginPath();x.moveTo(px-30,420);x.lineTo(px+30,420);x.lineTo(px+22,470);x.lineTo(px-22,470);x.closePath();x.fill();x.fillStyle='#2E6A2E';x.beginPath();x.arc(px,410,30,0,7);x.fill();x.fillStyle='#D8283E';for(const [a,b] of [[-14,-8],[10,-14],[2,6]]){x.beginPath();x.arc(px+a,410+b,10,0,7);x.fill()}}
 x.fillStyle='#B8643A';x.fillRect(-900,900,W+1800,300);x.strokeStyle='rgba(90,40,20,.35)';x.lineWidth=3;for(let i=-20;i<60;i++){x.beginPath();x.moveTo(i*80,900);x.lineTo(i*80-60,1100);x.stroke()}}
const POUSADA=CHX({cloth:'#F4F0E8',hood:'#D9D2C4',outfit:'shirt',collar:'#E9E2D0',apron:'#2A2A30',leg:'#2A2024',short:'#1A1210',skin:'#D9A880',hand:'#D9A880'});
function mustache(x,fx,fy){x.fillStyle='#1A1210';x.beginPath();x.moveTo(fx-30,fy+40);x.quadraticCurveTo(fx,fy+26,fx+30,fy+40);x.quadraticCurveTo(fx,fy+34,fx-30,fy+40);x.fill()}
function innkeeper(x,cx,base,s,t,o={}){return npc(x,cx,base,s,t,Object.assign({ch:POUSADA,face:1,look:.35,mouth:.7,brow:.5,headExtra:(x,fx,fy)=>mustache(x,fx,fy)},o))}
// copo alto de tinto de verão: tinto + refrigerante + gelo + rodela de limão
function tallGlass(x,cx,base,s,col='#8E1B3A',ice=3,lemon=1,t=0){x.save();x.translate(cx,base);x.scale(s,s);
 x.save();x.beginPath();x.moveTo(-46,-230);x.lineTo(46,-230);x.lineTo(40,0);x.lineTo(-40,0);x.closePath();x.clip();x.fillStyle=col;x.fillRect(-60,-190,120,200);
 x.fillStyle='rgba(255,230,220,.6)';for(let i=0;i<12;i++){const yy=-10-((t*60+i*37)%170);x.beginPath();x.arc(-30+(i*23)%60,yy,2.2,0,7);x.fill()}
 for(let i=0;i<ice;i++)iceCube(x,-14+(i%2)*26,-170+i*34,.9,i*.4);x.restore();
 x.fillStyle='rgba(255,236,220,.14)';x.beginPath();x.moveTo(-46,-230);x.lineTo(46,-230);x.lineTo(40,0);x.lineTo(-40,0);x.closePath();x.fill();x.strokeStyle='rgba(255,240,230,.75)';x.lineWidth=4;x.stroke();
 x.fillStyle='rgba(255,255,255,.35)';x.fillRect(-34,-220,8,200);
 if(lemon){x.save();x.translate(40,-226);x.fillStyle='#F2E04A';x.beginPath();x.arc(0,0,30,0,7);x.fill();x.fillStyle='#FFF6B0';x.beginPath();x.arc(0,0,24,0,7);x.fill();x.strokeStyle='#F2E04A';x.lineWidth=3;for(let i=0;i<6;i++){x.beginPath();x.moveTo(0,0);x.lineTo(Math.cos(i*1.05)*24,Math.sin(i*1.05)*24);x.stroke()}x.restore()}
 x.restore()}
// ---------- País Basco: festa na praça (bandeirinhas vermelho/verde/branco), banheira de mistura ----------
function basqueFest(x,t){let g=x.createLinearGradient(0,-300,0,700);g.addColorStop(0,'#1A0A20');g.addColorStop(1,'#5A2A3A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 // casas de pedra com janelas acesas e varandas vermelhas
 for(const [cx,w,h] of [[180,420,560],[700,460,640],[1260,440,600],[1780,420,560]]){x.fillStyle='#E9DCC8';x.fillRect(cx-w/2,860-h,w,h);x.fillStyle='#8A2A2A';x.beginPath();x.moveTo(cx-w/2-20,860-h);x.lineTo(cx,860-h-90);x.lineTo(cx+w/2+20,860-h);x.closePath();x.fill();
  for(let r=0;r<2;r++)for(let c=-1;c<=1;c++){const wx=cx+c*120,wy=860-h+110+r*170;x.fillStyle='rgba(255,200,110,.85)';x.fillRect(wx-30,wy,60,90);x.fillStyle='#C8213F';x.fillRect(wx-40,wy+84,80,14)}}
 // bandeirinhas
 const cols=['#C8213F','#1E7A3A','#F4F0E8'];for(const [y0,ph] of [[150,0],[260,1]]){x.strokeStyle='#2A1418';x.lineWidth=3;x.beginPath();x.moveTo(-100,y0);x.quadraticCurveTo(960,y0+120,2020,y0);x.stroke();
  for(let i=0;i<30;i++){const u=i/30,px=-100+2120*u,py=y0+4*120*u*(1-u)*.95+Math.sin(t*3+i)*2;x.fillStyle=cols[(i+ph)%3];x.beginPath();x.moveTo(px-18,py);x.lineTo(px+18,py);x.lineTo(px,py+36);x.closePath();x.fill()}}
 x.fillStyle='#4A3A36';x.fillRect(-900,860,W+1800,300);x.fillStyle='rgba(255,200,120,.25)';x.fillRect(-900,860,W+1800,5)}
const FESTA=CHX({cloth:'#F4F0E8',hood:'#D9D2C4',outfit:'shirt',collar:'#E9E2D0',leg:'#F4F0E8',short:'#2A1A12',beard:'#2A1A12',beardT:'short',skin:'#E2B890',hand:'#E2B890'});
function festeiro(x,cx,base,s,t,o={}){return npc(x,cx,base,s,t,Object.assign({ch:FESTA,face:1,look:.35,mouth:.8,brow:.7,hat:'beret',capCol:'#C8213F',shawl:'#C8213F'},o))}
function mixTub(x,cx,base,s,lv=.5,dark=0){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='rgba(0,0,0,.35)';x.beginPath();x.ellipse(0,0,230,20,0,0,7);x.fill();
 let g=x.createLinearGradient(-220,0,220,0);g.addColorStop(0,'#5A5A64');g.addColorStop(.3,'#C8C8D2');g.addColorStop(1,'#3A3A44');x.fillStyle=g;x.beginPath();x.moveTo(-220,-160);x.lineTo(220,-160);x.lineTo(190,0);x.lineTo(-190,0);x.closePath();x.fill();
 x.fillStyle=mixC('#7A1630','#2A0A0E',dark);x.beginPath();x.ellipse(0,-160,214,26,0,0,7);x.fill();x.strokeStyle='#E0E0E8';x.lineWidth=8;x.beginPath();x.ellipse(0,-160,220,28,0,0,7);x.stroke();
 x.strokeStyle='#8A8A94';x.lineWidth=8;for(const sd of [-1,1]){x.beginPath();x.arc(sd*210,-110,24,sd>0?-1.4:1.7,sd>0?1.4:4.6);x.stroke()}x.restore()}
function colaBottle(x,cx,base,s,rot=0){x.save();x.translate(cx,base);x.rotate(rot);x.scale(s,s);x.fillStyle='rgba(60,30,20,.92)';x.beginPath();x.moveTo(-28,0);x.quadraticCurveTo(-40,-60,-26,-110);x.quadraticCurveTo(-36,-150,-14,-190);x.lineTo(-12,-230);x.lineTo(12,-230);x.lineTo(14,-190);x.quadraticCurveTo(36,-150,26,-110);x.quadraticCurveTo(40,-60,28,0);x.closePath();x.fill();
 x.fillStyle='#C8213F';x.fillRect(-30,-100,60,30);x.fillStyle='rgba(255,255,255,.25)';x.fillRect(-18,-180,6,160);x.fillStyle='#B0B0B8';x.fillRect(-13,-240,26,12);x.restore()}
// ---------- Saint-Tropez: praia de dia, guarda-sóis listrados ----------
function stTropez(x,t){let g=x.createLinearGradient(0,-300,0,520);g.addColorStop(0,'#3A5A9A');g.addColorStop(1,'#F2C890');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1200);
 x.fillStyle='#FFF0C0';x.beginPath();x.arc(420,170,60,0,7);x.fill();
 g=x.createLinearGradient(0,520,0,700);g.addColorStop(0,'#2A6A9A');g.addColorStop(1,'#3A8AAA');x.fillStyle=g;x.fillRect(-900,520,W+1800,200);x.strokeStyle='rgba(255,255,255,.5)';x.lineWidth=3;for(let i=0;i<10;i++){const yy=540+i*16,off=(t*25+i*80)%240;x.beginPath();x.moveTo(-200+off,yy);x.lineTo(60+off,yy);x.moveTo(800+off,yy);x.lineTo(1000+off,yy);x.stroke()}
 // veleiro ao fundo
 x.fillStyle='#F4F0E8';x.beginPath();x.moveTo(1500,520);x.lineTo(1500,400);x.lineTo(1580,512);x.closePath();x.fill();x.fillStyle='#2A1418';x.fillRect(1440,512,160,12);
 x.fillStyle='#EAC690';x.fillRect(-900,700,W+1800,500);x.fillStyle='rgba(180,130,80,.25)';for(let i=0;i<50;i++)x.fillRect(hash(i,3)*1920,720+hash(i,4)*300,30,3);
 for(const [cx,cy,c] of [[300,640,'#C8213F'],[980,600,'#1E5A9A'],[1640,650,'#C8213F']]){x.strokeStyle='#5A3A22';x.lineWidth=8;x.beginPath();x.moveTo(cx,cy);x.lineTo(cx+10,cy+260);x.stroke();
  for(let i=0;i<8;i++){x.fillStyle=i%2?'#F4F0E8':c;x.beginPath();x.moveTo(cx,cy-60);x.lineTo(cx-200+i*50,cy);x.lineTo(cx-150+i*50,cy);x.closePath();x.fill()}
  x.fillStyle='#F4F0E8';x.fillRect(cx-120,cy+200,240,10);x.fillStyle='#5A3A22';x.fillRect(cx-100,cy+210,10,50);x.fillRect(cx+90,cy+210,10,50)}}
// ---------- taça "piscine" com gelo derretendo (u: 0..1) e faixa de água ----------
function meltGlass(x,bx,by,s,u,t=0){glassW(x,bx,by,s,.62,'rgba(226,190,96,.88)');x.save();x.translate(bx,by);x.scale(s,s);bowlPath(x);x.clip();
 const lv=.62+.08*u,tp=-74-lv*(178-74);x.fillStyle=`rgba(200,225,240,${.18+.4*u})`;x.fillRect(-60,tp,120,22*u+2);
 x.fillStyle='rgba(255,248,220,.7)';const r=rng(4);for(let i=0;i<10;i++){x.beginPath();x.arc(-30+r()*60,tp+20+r()*(-74-tp-24)-((t*30+i*13)%30),1.5,0,7);x.fill()}
 const k=1-.55*u;for(const [px,py,a] of [[-14,tp+6,-.3],[16,tp,.35],[0,tp+30,.1]])iceCube(x,px,py+(1-k)*8,.5*k,a);x.restore()}
// faixa de água marcada numa taça (tinto)
function waterBandGlass(g,bx,by,s,a){glassW(g,bx,by,s,.6,'#8E1B3A');g.save();g.translate(bx,by);g.scale(s,s);bowlPath(g);g.clip();const tp=-74-.6*(178-74);
 g.fillStyle=`rgba(190,220,245,${.55*a})`;g.fillRect(-60,tp,120,18);g.restore();if(a>0){g.save();g.globalAlpha=a;g.strokeStyle=GOLD2;g.lineWidth=4;g.setLineDash([10,8]);g.beginPath();g.moveTo(bx+46*s,by+(tp+9)*s);g.lineTo(bx+150*s,by+(tp+9)*s);g.stroke();g.restore()}}
// geada na taça (copo gelado)
function frost(g,bx,by,s,a){if(a<=0)return;g.save();g.translate(bx,by);g.scale(s,s);bowlPath(g);g.clip();g.globalAlpha=a*.6;g.fillStyle='rgba(230,245,255,.55)';g.fillRect(-60,-190,120,130);g.fillStyle='rgba(255,255,255,.95)';const r=rng(9);for(let i=0;i<40;i++){g.beginPath();g.arc(-40+r()*80,-180+r()*106,1.2+r()*2,0,7);g.fill()}g.restore()}
function snowflake(g,cx,cy,r,a=1){g.save();g.globalAlpha*=a;g.strokeStyle='#CFE8FF';g.lineWidth=r*.14;g.lineCap='round';for(let i=0;i<6;i++){const an=i*Math.PI/3;g.beginPath();g.moveTo(cx,cy);g.lineTo(cx+Math.cos(an)*r,cy+Math.sin(an)*r);g.stroke();
 for(const k of [.55,.8]){const px=cx+Math.cos(an)*r*k,py=cy+Math.sin(an)*r*k;for(const d of [-.6,.6]){g.beginPath();g.moveTo(px,py);g.lineTo(px+Math.cos(an+d)*r*.22,py+Math.sin(an+d)*r*.22);g.stroke()}}}g.restore()}
// ---------- castelo europeu: lareira apagada, gente de casaco ----------
function coldFireplace(x,cx,base,s){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='#5A4A44';x.fillRect(-230,-420,460,420);x.fillStyle='#3A2E2A';x.fillRect(-260,-450,520,46);x.fillStyle='#120A0A';x.beginPath();x.moveTo(-160,0);x.lineTo(-160,-260);x.quadraticCurveTo(0,-330,160,-260);x.lineTo(160,0);x.closePath();x.fill();
 x.fillStyle='#3A2A22';x.fillRect(-120,-40,240,24);x.fillStyle='#2A2422';for(const [px,py] of [[-60,-50],[10,-58],[70,-48]]){x.beginPath();x.ellipse(px,py,46,14,.1,0,7);x.fill()}
 x.fillStyle='rgba(160,160,170,.35)';x.beginPath();x.ellipse(0,-30,110,14,0,0,7);x.fill();x.restore()}
const CASACO=CHX({cloth:'#3A2A4A',hood:'#22182E',outfit:'blazer',shirt:'#5E1428',collar:'#5E1428',btn:'#D4A24C',leg:'#22182E',short:'#5A3E2A',skin:'#E8C4A0',hand:'#E8C4A0'});
function friorento(x,cx,base,s,t,o={}){const sh=Math.sin(t*28)*3;return npc(x,cx+sh,base,s,t,Object.assign({ch:CASACO,face:-1,look:-.3,mouth:-.3,brow:.9,sad:.6,hands:{l:[-30,120,130],r:[30,120,130]},hat:'cap',capCol:'#3A2A20',
 headExtra:(x)=>{x.fillStyle='#8E1B3A';x.beginPath();x.roundRect(-HR+10,HR-16,2*HR-20,26,10);x.fill()}},o))}
// ---------- sala brasileira no verão: janela de sol, ventilador ----------
function brRoom(x,t){x.fillStyle='#E8C89A';x.fillRect(-900,-600,W+1800,1500);x.fillStyle='rgba(255,180,90,.25)';x.fillRect(-900,-600,W+1800,1500);
 // janela com sol forte
 x.fillStyle='#FFE08A';x.fillRect(1200,160,520,440);let g=x.createRadialGradient(1460,300,20,1460,300,300);g.addColorStop(0,'#FFFFFF');g.addColorStop(1,'#FFC24A');x.fillStyle=g;x.fillRect(1200,160,520,440);
 x.strokeStyle='#F4F0E8';x.lineWidth=18;x.strokeRect(1200,160,520,440);x.beginPath();x.moveTo(1460,160);x.lineTo(1460,600);x.moveTo(1200,380);x.lineTo(1720,380);x.stroke();
 g=x.createLinearGradient(1200,600,800,1000);g.addColorStop(0,'rgba(255,230,140,.45)');g.addColorStop(1,'rgba(255,230,140,0)');x.fillStyle=g;x.beginPath();x.moveTo(1200,600);x.lineTo(1720,600);x.lineTo(1300,1100);x.lineTo(600,1100);x.closePath();x.fill();
 // sofá e chão
 x.fillStyle='#B0583A';x.fillRect(-900,860,W+1800,300);x.fillStyle='#5A7A4A';x.beginPath();x.roundRect(80,640,640,180,30);x.fill();x.beginPath();x.roundRect(60,740,680,120,30);x.fill();
 // ventilador de pé girando
 x.save();x.translate(980,420);x.fillStyle='#E9E2D0';x.fillRect(-10,0,20,440);x.fillRect(-90,430,180,20);x.strokeStyle='#B8B0A0';x.lineWidth=4;x.beginPath();x.arc(0,0,110,0,7);x.stroke();
 for(let i=0;i<3;i++){x.save();x.rotate(t*14+i*2.094);x.fillStyle='rgba(200,215,230,.75)';x.beginPath();x.ellipse(0,-55,30,55,0,0,7);x.fill();x.restore()}x.fillStyle='#8A8478';x.beginPath();x.arc(0,0,20,0,7);x.fill();x.restore()}
function heatWaves(g,cx,cy,w,t,a=1){if(a<=0)return;g.save();g.globalAlpha=a*.8;g.strokeStyle='#FF9A4A';g.lineWidth=6;g.lineCap='round';for(let k=-1;k<=1;k++){g.beginPath();for(let i=0;i<=20;i++){const u=i/20;g.lineTo(cx+k*w+Math.sin(u*9+t*5+k)*12,cy-u*120)}g.stroke()}g.restore()}
// ---------- dicas: uva congelada, pedras de aço, balde com sal ----------
function frozenGrapes(g,cx,cy,s){grapesC(g,cx,cy,s,'#5A2A5A');g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle='rgba(235,245,255,.55)';const r=rng(6);for(let i=0;i<46;i++){g.beginPath();g.arc(-50+r()*100,-50+r()*130,1.5+r()*2.5,0,7);g.fill()}g.restore()}
function grapeBall(g,cx,cy,r){g.save();g.fillStyle='#5A2A5A';g.beginPath();g.arc(cx,cy,r,0,7);g.fill();g.fillStyle='rgba(235,245,255,.6)';g.beginPath();g.arc(cx-r*.3,cy-r*.3,r*.35,0,7);g.fill();g.restore()}
function steelStones(g,cx,cy,s){g.save();g.translate(cx,cy);g.scale(s,s);for(const [px,py] of [[-60,0],[0,-8],[60,0]]){let gr=g.createLinearGradient(px-26,py-26,px+26,py+26);gr.addColorStop(0,'#F0F0F6');gr.addColorStop(.5,'#9A9AA6');gr.addColorStop(1,'#4A4A54');g.fillStyle=gr;g.beginPath();g.roundRect(px-26,py-26,52,52,10);g.fill();g.strokeStyle='rgba(255,255,255,.6)';g.lineWidth=2;g.stroke()}g.restore()}
function grapeBowl(f,cx,base,s){f.save();f.translate(cx,base);f.scale(s,s);f.fillStyle='#C8C8D2';f.beginPath();f.moveTo(-90,-60);f.quadraticCurveTo(0,30,90,-60);f.closePath();f.fill();f.restore();
 for(const [px,py] of [[-50,-74],[-18,-80],[16,-78],[48,-72],[-30,-98],[2,-100],[32,-96]])grapeBall(f,cx+px*s,base+py*s,15*s)}
// balde com gelo, água e sal; garrafa girando
function saltBucket(g,cx,base,s,salt,spin,t){g.save();g.translate(cx,base);g.scale(s,s);
 // garrafa (gira dentro do balde)
 const w=Math.cos(t*6*spin);g.save();g.translate(0,-170);g.scale(.75+.25*Math.abs(w),1);g.fillStyle='#6F8F57';g.beginPath();g.moveTo(-38,60);g.lineTo(-38,-110);g.quadraticCurveTo(-38,-160,-13,-180);g.lineTo(-13,-240);g.lineTo(13,-240);g.lineTo(13,-180);g.quadraticCurveTo(38,-160,38,-110);g.lineTo(38,60);g.closePath();g.fill();
 g.fillStyle='#E9DCC0';g.fillRect(-34,-100,68*(w>0?1:.6),60);g.fillStyle='#D4A24C';g.fillRect(-14,-250,28,40);g.restore();
 let gr=g.createLinearGradient(-130,0,130,0);gr.addColorStop(0,'#6E6E78');gr.addColorStop(.25,'#D8D8E0');gr.addColorStop(.5,'#9A9AA6');gr.addColorStop(1,'#4A4A54');g.fillStyle=gr;g.beginPath();g.moveTo(-130,-230);g.lineTo(130,-230);g.lineTo(104,0);g.lineTo(-104,0);g.closePath();g.fill();
 g.fillStyle='rgba(150,200,235,.75)';g.beginPath();g.ellipse(0,-226,124,18,0,0,7);g.fill();for(const [px,py,a] of [[-80,-232,.2],[-40,-238,-.3],[50,-236,.4],[90,-230,-.1]])iceCube(g,px,py,.85,a);
 g.fillStyle='#C8C8D2';g.fillRect(-136,-238,272,14);
 // sal caindo de cima
 if(salt>0){g.fillStyle='rgba(255,255,255,.95)';const r=rng(3);for(let i=0;i<40;i++){const yy=-520+((t*260+i*31)%300);if(yy>-240)continue;g.beginPath();g.arc(-30+r()*60+(yy+520)*.05,yy,2.5,0,7);g.fill()}
  g.save();g.translate(-10,-560);g.rotate(2.4);g.fillStyle='#F4F0E8';g.beginPath();g.roundRect(-30,-60,60,110,12);g.fill();g.fillStyle='#2A5AA8';g.fillRect(-30,-20,60,30);g.restore()}
 g.restore()}
// geladeira pequena atrás do balcão do bar de praia (porta abre: u 0..1)
function miniFridge(x,cx,base,u,bottleIn=0){x.save();x.translate(cx,base);let g=x.createLinearGradient(-130,0,130,0);g.addColorStop(0,'#5A5A66');g.addColorStop(.5,'#3E3E48');g.addColorStop(1,'#2A2A32');x.fillStyle=g;x.beginPath();x.roundRect(-130,-330,260,330,16);x.fill();
 x.fillStyle='#0E1A24';x.fillRect(-114,-314,228,298);x.fillStyle='rgba(180,230,255,.25)';x.fillRect(-114,-314,228,298);x.fillStyle='#C8C8D2';x.fillRect(-114,-180,228,6);
 for(const px of [-70,-30])bottleS(x,[px,-186],.42,'white');if(bottleIn>0){x.save();x.globalAlpha=bottleIn;bottleS(x,[40,-186],.42,'red');x.restore()}
 // porta (abre para a direita: encurta)
 const dw=260*(1-.85*u);x.fillStyle='#4A4A56';x.beginPath();x.roundRect(130-dw,-330,dw,330,14);x.fill();x.fillStyle='rgba(255,255,255,.12)';x.fillRect(130-dw+6,-322,6,314);
 x.fillStyle='#C8C8D2';x.beginPath();x.roundRect(130-dw+14,-280,10,120,5);x.fill();x.fillStyle='#14141A';x.beginPath();x.roundRect(130-dw+dw*.45,-300,Math.max(10,dw*.35),26,6);x.fill();x.fillStyle='#7FD1FF';x.font='700 18px Inter';x.textAlign='center';if(dw>120)x.fillText('4°C',130-dw+dw*.45+dw*.175,-281);x.restore()}
function xMark(g,cx,cy,r,a){if(a<=0)return;g.save();g.globalAlpha=a;g.strokeStyle='#C8213F';g.lineWidth=r*.22;g.lineCap='round';const k=Math.min(1,a*1.4);g.beginPath();g.moveTo(cx-r,cy-r);g.lineTo(cx-r+2*r*k,cy-r+2*r*k);g.moveTo(cx+r,cy-r);g.lineTo(cx+r-2*r*k,cy-r+2*r*k);g.stroke();g.restore()}
