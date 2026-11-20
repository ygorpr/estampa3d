// ===== Vídeo 15 — cenários e personagens novos (vale do Douro em degraus, rabelo na corredeira com o arrais, cais de Gaia, Pombal, monge) =====
function sunsetSky(x,y0=-300,y1=620){let g=x.createLinearGradient(0,y0,0,y1);g.addColorStop(0,'#2A0A1E');g.addColorStop(.55,'#7A2C34');g.addColorStop(1,'#D88A4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='rgba(255,200,120,.55)';x.beginPath();x.arc(1460,330,70,0,7);x.fill()}
// vale do Douro: morros de xisto com a vinha em DEGRAUS (socalcos), rio embaixo
function douroValley(x,t,o={}){sunsetSky(x);
 const hill=(pts,col)=>{x.fillStyle=col;x.beginPath();x.moveTo(-900,900);for(const p of pts)x.lineTo(p[0],p[1]);x.lineTo(W+900,900);x.closePath();x.fill()};
 hill([[-900,420],[200,300],[700,380],[1200,260],[1800,360],[W+900,330]],'#4A2028');
 // morro da frente com socalcos
 x.save();x.beginPath();x.moveTo(-900,900);x.lineTo(-900,520);x.quadraticCurveTo(500,330,1000,470);x.quadraticCurveTo(1500,560,W+900,420);x.lineTo(W+900,900);x.closePath();x.fillStyle='#5A2A22';x.fill();x.clip();
 for(let k=0;k<10;k++){const y=470+k*42;x.strokeStyle='#8A5A3A';x.lineWidth=7;x.beginPath();x.moveTo(-900,y+60);x.quadraticCurveTo(500,y-120+k*6,1000,y);x.quadraticCurveTo(1500,y+90,W+900,y-40);x.stroke();
  x.strokeStyle='#3E6A2E';x.lineWidth=12;x.setLineDash([16,10]);x.beginPath();x.moveTo(-900,y+48);x.quadraticCurveTo(500,y-132+k*6,1000,y-12);x.quadraticCurveTo(1500,y+78,W+900,y-52);x.stroke();x.setLineDash([])}
 x.restore();
 // rio
 let g=x.createLinearGradient(0,800,0,1000);g.addColorStop(0,'#5A3A4A');g.addColorStop(1,'#2A1420');x.fillStyle=g;x.beginPath();x.moveTo(-900,860);x.quadraticCurveTo(960,800,W+900,850);x.lineTo(W+900,1200);x.lineTo(-900,1200);x.fill();
 x.strokeStyle='rgba(255,200,150,.25)';x.lineWidth=3;for(let i=0;i<8;i++){const xx=(i*260+t*30)%2200-100;x.beginPath();x.moveTo(xx,880+i%3*20);x.lineTo(xx+90,880+i%3*20);x.stroke()}
 if(o.boat)rabelo(x,o.boat,850,.55)}
// corredeira: rio bravo com pedras e espuma; o rabelo desce e balança
function rapids(x,t){sunsetSky(x);x.fillStyle='#4A2028';x.beginPath();x.moveTo(-900,560);x.quadraticCurveTo(300,380,900,520);x.quadraticCurveTo(1400,600,W+900,470);x.lineTo(W+900,900);x.lineTo(-900,900);x.fill();
 x.fillStyle='#3A1820';x.beginPath();x.moveTo(-900,660);x.quadraticCurveTo(600,560,W+900,640);x.lineTo(W+900,900);x.lineTo(-900,900);x.fill();
 let g=x.createLinearGradient(0,640,0,1080);g.addColorStop(0,'#5A4A5A');g.addColorStop(1,'#241420');x.fillStyle=g;x.fillRect(-900,690,W+1800,600);
 const r=rng(8);for(let i=0;i<14;i++){const px=r()*1900,py=760+r()*260;x.fillStyle='#2A2026';x.beginPath();x.ellipse(px,py,40+r()*50,18+r()*16,0,0,7);x.fill();
  x.strokeStyle='rgba(240,236,224,.7)';x.lineWidth=4;for(let k=0;k<3;k++){const ph=t*3+i+k;x.beginPath();x.arc(px-50-k*16,py-6,10+5*Math.sin(ph),Math.PI*1.1,Math.PI*1.9);x.stroke()}}
 x.strokeStyle='rgba(240,236,224,.35)';x.lineWidth=3;for(let i=0;i<30;i++){const xx=((i*137+t*220)%2300)-200,yy=720+(i*53)%330;x.beginPath();x.moveTo(xx,yy);x.lineTo(xx+70,yy+4);x.stroke()}}
// o arrais (barqueiro) no remo da popa: personagem de verdade
const ARRAIS=CHX({cloth:'#6A5A44',hood:'#4A3E2E',outfit:'shirt',collar:'#4A3E2E',leg:'#3A2E22',short:'#2A1A12',beard:'#2A1A12',beardT:'full',skin:'#D9A880',hand:'#D9A880'});
function arrais(x,cx,base,s,t){return npc(x,cx,base,s,t,{ch:ARRAIS,face:1,look:.5,lookY:-.1,brow:.9,mouth:.2,hat:'cap',capCol:'#2A2018',hands:{l:[-60,90,120],r:[60,160,120]},
 back:(x,p,br)=>{x.save();x.translate(p.x,p.y);x.scale(p.s,p.s);x.strokeStyle='#5A3A1E';x.lineWidth=16;x.lineCap='round';x.beginPath();x.moveTo(-240,-40+Math.sin(t*1.2)*10);x.lineTo(260,330);x.stroke();x.fillStyle='#4A2E18';x.beginPath();x.ellipse(250,330,26,70,-.6,0,7);x.fill();x.restore()}})}
// cais de Vila Nova de Gaia: caves de telhado vermelho com nomes, pipas no cais, navio à vela
function gaiaQuay(x,t,o={}){sunsetSky(x);
 // Porto do outro lado (casario) e a ponte
 x.fillStyle='#3A1626';x.beginPath();x.moveTo(-900,420);x.quadraticCurveTo(600,300,W+900,380);x.lineTo(W+900,560);x.lineTo(-900,560);x.fill();
 const r=rng(3);for(let i=0;i<40;i++){x.fillStyle=r()>.6?'rgba(255,200,120,.75)':'rgba(255,200,120,.25)';x.fillRect(r()*1920,400+r()*140,8,12)}
 x.strokeStyle='#1A0A12';x.lineWidth=10;x.beginPath();x.moveTo(300,560);x.quadraticCurveTo(960,250,1620,560);x.stroke();x.lineWidth=6;x.beginPath();x.moveTo(200,330);x.lineTo(1720,330);x.stroke();
 // rio
 let g=x.createLinearGradient(0,560,0,760);g.addColorStop(0,'#5A3040');g.addColorStop(1,'#2A1420');x.fillStyle=g;x.fillRect(-900,560,W+1800,220);
 if(o.ship!==false)ship(x,(o.shipX||1350)+Math.sin(t*.4)*10,600,.62);
 // caves (armazéns) no primeiro plano
 for(let i=0;i<4;i++){const cx=170+i*520;x.fillStyle='#E9DCC0';x.fillRect(cx-210,690,420,260);x.fillStyle='#A8402E';x.beginPath();x.moveTo(cx-240,700);x.lineTo(cx,610);x.lineTo(cx+240,700);x.closePath();x.fill();
  x.fillStyle='#3A1A12';x.beginPath();x.roundRect(cx-60,820,120,130,[60,60,0,0]);x.fill();x.fillStyle='#2A0A12';x.fillRect(cx-170,740,300,46);goldText(x,['CAVES','VINHO DO PORTO','ARMAZÉM','CAVES'][i],cx-20,764,30,'Cinzel',900)}
 x.fillStyle='#4A3A30';x.fillRect(-900,940,W+1800,200);for(let i=0;i<5;i++){const px=120+i*400;pipaEnd(x,px,905,42)}}
// mosteiro: arcos de pedra e vitral
function monastery(x,t){graniteWall(x);for(const cx of [380,960,1540]){x.fillStyle='#120408';x.beginPath();x.moveTo(cx-170,900);x.lineTo(cx-170,360);x.arc(cx,360,170,Math.PI,0);x.lineTo(cx+170,900);x.fill()}
 let g=x.createRadialGradient(960,330,10,960,330,220);g.addColorStop(0,'rgba(255,200,120,.5)');g.addColorStop(1,'rgba(255,200,120,0)');x.fillStyle=g;x.fillRect(700,100,520,500);
 x.fillStyle='#8E1B3A';x.beginPath();x.arc(960,330,90,0,7);x.fill();x.strokeStyle='#D4A24C';x.lineWidth=6;x.stroke();for(let i=0;i<8;i++){x.beginPath();x.moveTo(960,330);x.lineTo(960+Math.cos(i*.785)*90,330+Math.sin(i*.785)*90);x.stroke()}
 candle(x,240,900,140,t);candle(x,1680,900,140,t)}
const MONGE=CHX({cloth:'#4A2A1A',hood:'#2E180E',leg:'#2E180E',bald:1,sides:'#5A3E2A',skin:'#E2B890',hand:'#E2B890'});
function monge(x,cx,base,s,t,o={}){return npc(x,cx,base,s,t,Object.assign({ch:MONGE,face:-1,look:-.35,mouth:.75,brow:.7,hands:{l:[-60,120,130],r:[150,40,90]},
 headExtra:(x)=>{x.fillStyle='#5A3E2A';x.beginPath();x.arc(0,0,HR+2,-.15,Math.PI+.15,true);x.arc(0,0,HR-30,Math.PI+.1,-.1);x.fill()},
 back:(x,p,br)=>{x.save();x.translate(p.x,p.y);x.scale(p.s,p.s);x.fillStyle='#4A2A1A';x.beginPath();x.moveTo(-TW/2,TH-30);x.lineTo(-TW/2-30,STANDY+10);x.lineTo(TW/2+30,STANDY+10);x.lineTo(TW/2,TH-30);x.fill();x.strokeStyle='#C99A5B';x.lineWidth=10;x.beginPath();x.moveTo(-TW/2,TH-40);x.lineTo(TW/2,TH-40);x.stroke();x.restore()},
 noLegs:true,hold:(x,hl,hr)=>portGlass(x,hr[0],hr[1]+40,.9,'#B0182E',.6)},o))}
// Marquês de Pombal: peruca branca empoada, casaca vinho bordada a ouro, colete, medalha
const POMBAL=CHX({cloth:'#3A1428',hood:'#22091A',outfit:'blazer',shirt:'#F4F0E8',collar:'#F4F0E8',btn:'#D4A24C',leg:'#22091A',skin:'#E8C4A0',hand:'#E8C4A0'});
function pombal(x,cx,base,s,t,o={}){return npc(x,cx,base,s,t,Object.assign({ch:POMBAL,face:-1,look:-.3,brow:-.2,sad:-.4,mouth:.1,wig:'#EDE8E0',queue:1,ruff:1,medal:1,hands:{l:[-110,170,110],r:[170,0,80]},ro:1},o))}
// marco de granito "FEITORIA" (os 335 marcos pombalinos)
function marco(x,cx,base,s,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(cx,base);x.scale(s,s);x.fillStyle='rgba(0,0,0,.35)';x.beginPath();x.ellipse(0,0,70,12,0,0,7);x.fill();
 let g=x.createLinearGradient(-50,0,50,0);g.addColorStop(0,'#8A8278');g.addColorStop(1,'#5A544C');x.fillStyle=g;x.beginPath();x.moveTo(-50,0);x.lineTo(-44,-230);x.quadraticCurveTo(0,-262,44,-230);x.lineTo(50,0);x.closePath();x.fill();
 x.fillStyle='#3A3630';x.font='900 20px Cinzel';x.textAlign='center';x.fillText('FEITORIA',0,-170);x.font='900 26px Cinzel';x.fillText('1758',0,-130);x.restore()}
// baga de sabugueiro (cacho pendente)
function elderberry(x,cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.strokeStyle='#6A2A3A';x.lineWidth=4;const r=rng(5);for(let i=0;i<22;i++){const a=r()*Math.PI-Math.PI,d=30+r()*60,px=Math.cos(a)*d*.9,py=40+Math.abs(Math.sin(a))*d*.6+r()*30;x.beginPath();x.moveTo(0,0);x.lineTo(px,py);x.stroke();x.fillStyle='#1A0A1E';x.beginPath();x.arc(px,py,9,0,7);x.fill();x.fillStyle='rgba(255,255,255,.3)';x.beginPath();x.arc(px-3,py-3,2.5,0,7);x.fill()}x.restore()}
// navio à vela no mar agitado
function stormSea(x,t){let g=x.createLinearGradient(0,-300,0,700);g.addColorStop(0,'#14101E');g.addColorStop(1,'#3A2A3A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='#22283A';for(let k=0;k<4;k++){x.beginPath();x.moveTo(-900,1100);for(let i=-900;i<=W+900;i+=40)x.lineTo(i,640+k*90+Math.sin(i*.01+t*1.6+k)*30);x.lineTo(W+900,1100);x.fill();x.fillStyle=['#2A3046','#1E2436','#161A2A','#10141E'][k]}}
// garrafa VINTAGE empoeirada e taça de Porto branco com gelo
function dustyBottle(x,cx,base,s){portBottle(x,cx,base,s,'VINTAGE','2017');x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='rgba(200,190,170,.28)';x.beginPath();x.moveTo(-38,-170);x.quadraticCurveTo(0,-200,38,-170);x.lineTo(38,-120);x.lineTo(-38,-120);x.fill();x.restore()}
function tonicGlass(x,cx,base,s,t){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='rgba(245,232,210,.18)';x.beginPath();x.roundRect(-60,-220,120,220,10);x.fill();
 x.save();x.beginPath();x.roundRect(-56,-200,112,196,8);x.clip();x.fillStyle='rgba(236,214,140,.75)';x.fillRect(-60,-170,120,170);for(let i=0;i<10;i++){const by=-10-((t*60+i*37)%160);x.fillStyle='rgba(255,255,255,.6)';x.beginPath();x.arc(-40+((i*29)%80),by,3,0,7);x.fill()}
 x.fillStyle='rgba(235,245,250,.75)';for(const [ix,iy,r] of [[-20,-160,24],[18,-150,22],[0,-125,20]]){x.beginPath();x.roundRect(ix-r,iy-r,2*r,2*r,6);x.fill()}x.fillStyle='#7AA83A';x.beginPath();x.ellipse(30,-175,30,10,.3,0,7);x.fill();x.restore();
 x.strokeStyle='rgba(255,240,220,.6)';x.lineWidth=3;x.beginPath();x.roundRect(-60,-220,120,220,10);x.stroke();x.restore()}
