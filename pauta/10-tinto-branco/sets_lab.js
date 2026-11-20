// ---------- vídeo 10 "De onde vem a cor do vinho?" — LABORATÓRIO de análise de vinho (madeira escura, luz quente, bancada clara/inox) ----------
// cores de antocianina: vermelho (ácido) -> roxo -> azul (menos ácido)
const ANT={red:'#C0182E',purple:'#5A1450',blue:'#2A3A8E',wine:'#7A1028',young:'#4E0E3A',brick:'#9A4A26',rose:'#E8788A',white:'#E8D98A',orange:'#D9862E'};
// tubo de ensaio: base = fundo arredondado; liquido sempre dentro do vidro
function testTube(x,cx,base,h,col,lv=.6,w=34){x.save();const r=w/2,top=base-h;
 const shape=()=>{x.beginPath();x.moveTo(cx-r,top);x.lineTo(cx-r,base-r);x.arc(cx,base-r,r,Math.PI,0,true);x.lineTo(cx+r,top);x.closePath()};
 shape();x.fillStyle='rgba(230,240,245,.16)';x.fill();
 if(lv>0&&col){x.save();shape();x.clip();x.fillStyle=col;x.fillRect(cx-r-2,base-h*lv,w+4,h*lv+2);x.fillStyle='rgba(255,255,255,.28)';x.fillRect(cx-r,base-h*lv,w,3);x.restore()}
 shape();x.strokeStyle='rgba(235,240,245,.75)';x.lineWidth=3;x.stroke();x.fillStyle='rgba(255,255,255,.35)';x.fillRect(cx-r+6,top+10,4,h-r-20);
 x.strokeStyle='rgba(235,240,245,.85)';x.lineWidth=5;x.beginPath();x.moveTo(cx-r-4,top);x.lineTo(cx+r+4,top);x.stroke();x.restore()}
// estante de tubos (madeira) com tubos coloridos
function tubeRack(x,cx,base,cols,s=1,lv=.62){x.save();x.translate(cx,base);x.scale(s,s);const n=cols.length,w=n*56+40;
 x.fillStyle='#4A2414';x.fillRect(-w/2,-14,w,14);x.fillRect(-w/2,-14,10,-0);
 cols.forEach((c,i)=>testTube(x,-w/2+48+i*56,-16,150,c,lv,32));
 x.fillStyle='#6A3A1E';x.fillRect(-w/2,-96,w,16);x.fillStyle='rgba(0,0,0,.25)';x.fillRect(-w/2,-82,w,4);
 x.fillStyle='#4A2414';x.fillRect(-w/2,-96,12,96);x.fillRect(w/2-12,-96,12,96);x.restore()}
// béquer graduado
function beaker(x,cx,base,w,h,col,lv=.55){x.save();const L_=cx-w/2,R=cx+w/2,top=base-h;
 const shape=()=>{x.beginPath();x.moveTo(L_-8,top);x.lineTo(L_,top+10);x.lineTo(L_,base-8);x.quadraticCurveTo(L_,base,L_+8,base);x.lineTo(R-8,base);x.quadraticCurveTo(R,base,R,base-8);x.lineTo(R,top);x.closePath()};
 shape();x.fillStyle='rgba(230,240,245,.14)';x.fill();
 if(lv>0&&col){x.save();shape();x.clip();x.fillStyle=col;x.fillRect(L_-10,base-h*lv,w+20,h*lv);x.fillStyle='rgba(255,255,255,.25)';x.fillRect(L_,base-h*lv,w,3);x.restore()}
 shape();x.strokeStyle='rgba(235,240,245,.75)';x.lineWidth=3;x.stroke();
 x.strokeStyle='rgba(235,240,245,.55)';x.lineWidth=2;for(let i=1;i<5;i++){const y=base-h*i/5.4;x.beginPath();x.moveTo(L_+6,y);x.lineTo(L_+(i%2?26:16),y);x.stroke()}x.restore()}
// erlenmeyer
function erlen(x,cx,base,s,col,lv=.4){x.save();x.translate(cx,base);x.scale(s,s);
 const shape=()=>{x.beginPath();x.moveTo(-14,-120);x.lineTo(-14,-80);x.lineTo(-56,-6);x.quadraticCurveTo(-58,0,-50,0);x.lineTo(50,0);x.quadraticCurveTo(58,0,56,-6);x.lineTo(14,-80);x.lineTo(14,-120);x.closePath()};
 shape();x.fillStyle='rgba(230,240,245,.14)';x.fill();if(col){x.save();shape();x.clip();x.fillStyle=col;x.fillRect(-60,-120*lv,120,120*lv);x.restore()}
 shape();x.strokeStyle='rgba(235,240,245,.7)';x.lineWidth=3;x.stroke();x.fillStyle='rgba(235,240,245,.8)';x.fillRect(-18,-124,36,6);x.restore()}
// frasco de reagente com rótulo
function reagent(x,cx,base,s,glass,col){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle=glass;x.beginPath();x.roundRect(-30,-96,60,96,10);x.fill();x.fillRect(-14,-118,28,24);
 x.fillStyle='#1A1012';x.fillRect(-17,-130,34,14);x.fillStyle='#EFE6D2';x.fillRect(-24,-70,48,36);x.fillStyle=col||BORDO;x.fillRect(-24,-70,48,8);x.fillStyle='rgba(60,40,30,.6)';x.fillRect(-16,-54,32,3);x.fillRect(-16,-46,24,3);x.restore()}
// pHmetro: caixa com visor + eletrodo num béquer
function phMeter(x,cx,base,s,val,col,glow=1){x.save();x.translate(cx,base);x.scale(s,s);
 x.fillStyle='#D8D4CC';x.beginPath();x.roundRect(-90,-120,180,120,14);x.fill();x.fillStyle='#A9A49A';x.fillRect(-90,-22,180,22);
 x.fillStyle='#14231C';x.beginPath();x.roundRect(-70,-104,140,56,8);x.fill();
 x.fillStyle=`rgba(140,255,170,${.9*glow})`;x.font='700 34px monospace';x.textAlign='center';x.textBaseline='middle';x.fillText(val,0,-75);
 x.fillStyle='#5E1428';for(const bx of [-50,-20,10,40]){x.beginPath();x.arc(bx,-34,8,0,7);x.fill()}
 x.strokeStyle='#2A2226';x.lineWidth=5;x.beginPath();x.moveTo(90,-60);x.quadraticCurveTo(150,-150,190,-150);x.stroke();
 x.fillStyle='#2A2226';x.fillRect(184,-160,14,20);x.fillStyle='#E0E6E8';x.fillRect(186,-140,10,110);x.restore();
 beaker(x,cx+191*s,base,90*s,90*s,col,.6)}
// espectrofotômetro: aparelho com cubeta; feixe de luz atravessa (beam 0..1); out = cor do feixe que sai
function spectro(x,cx,base,s,t,beam=1,col=ANT.wine,out='rgba(255,70,80,1)'){x.save();x.translate(cx,base);x.scale(s,s);
 // corpo
 let g=x.createLinearGradient(0,-170,0,0);g.addColorStop(0,'#E4E0D8');g.addColorStop(1,'#B8B2A6');x.fillStyle=g;x.beginPath();x.roundRect(-170,-170,340,170,18);x.fill();
 x.fillStyle='#8E8A80';x.fillRect(-170,-26,340,26);x.fillStyle='#2A2226';x.beginPath();x.roundRect(-40,-196,80,34,6);x.fill();// tampa da cubeta
 // janela de vidro mostrando o feixe
 x.fillStyle='#120A0E';x.beginPath();x.roundRect(-150,-140,200,70,10);x.fill();
 if(beam>0){x.save();x.beginPath();x.roundRect(-150,-140,200,70,10);x.clip();
  const lg=x.createLinearGradient(-150,0,50,0);lg.addColorStop(0,`rgba(255,255,240,${beam})`);lg.addColorStop(.42,`rgba(255,255,240,${beam})`);lg.addColorStop(.6,out.replace(/,1\)$/,`,${beam})`));lg.addColorStop(1,out.replace(/,1\)$/,`,${beam})`));
  x.fillStyle=lg;x.fillRect(-150,-112,200,14);x.globalAlpha=.35*beam;x.fillRect(-150,-118,200,26);x.restore()}
 // cubeta com vinho no meio do feixe
 x.fillStyle='rgba(230,240,245,.35)';x.fillRect(-72,-150,30,90);x.fillStyle=col;x.fillRect(-69,-132,24,70);x.strokeStyle='rgba(240,245,250,.8)';x.lineWidth=2;x.strokeRect(-72,-150,30,90);
 // visor digital
 x.fillStyle='#14231C';x.beginPath();x.roundRect(70,-146,84,52,8);x.fill();x.fillStyle=`rgba(140,255,170,.9)`;x.font='700 26px monospace';x.textAlign='center';x.textBaseline='middle';x.fillText('520',112,-120);
 x.fillStyle=GOLD;x.font='700 15px Cinzel';x.fillText('nm',112,-102);
 x.fillStyle='#5E1428';for(const bx of [80,112,144]){x.beginPath();x.arc(bx,-62,9,0,7);x.fill()}
 x.fillStyle='rgba(255,180,94,.9)';x.beginPath();x.arc(-150,-44,6,0,7);x.fill();x.restore()}
// pendente metálico de laboratório
function labLamp(x,lx,t){x.strokeStyle='#1A0C10';x.lineWidth=4;x.beginPath();x.moveTo(lx,-400);x.lineTo(lx,40);x.stroke();
 x.fillStyle='#3A2A26';x.beginPath();x.moveTo(lx-70,90);x.lineTo(lx-28,40);x.lineTo(lx+28,40);x.lineTo(lx+70,90);x.closePath();x.fill();
 const fl=.92+Math.sin(t*3.1+lx)*.02,gr=x.createRadialGradient(lx,100,4,lx,140,360);gr.addColorStop(0,`rgba(255,200,120,${.55*fl})`);gr.addColorStop(1,'rgba(255,190,110,0)');x.fillStyle=gr;x.fillRect(lx-380,60,760,520);
 x.fillStyle='#FFE2A8';x.beginPath();x.ellipse(lx,92,58,10,0,0,7);x.fill()}
// prateleira de vidraria
function glassShelf(x,x0,x1,y,items){x.fillStyle='#4A2414';x.fillRect(x0,y,x1-x0,14);x.fillStyle='rgba(0,0,0,.35)';x.fillRect(x0,y+14,x1-x0,6);
 x.fillStyle='#2A140C';x.fillRect(x0+20,y+14,10,30);x.fillRect(x1-30,y+14,10,30);
 for(const [k,px,c] of items){const bx=x0+px;if(k=='e')erlen(x,bx,y,.7,c,.45);else if(k=='r')reagent(x,bx,y,.8,c=='amber'?'#6A3A14':'rgba(220,230,235,.5)',c=='amber'?GOLD:BORDO);else if(k=='b')beaker(x,bx,y,54,70,c,.5);else if(k=='t')tubeRack(x,bx,y,c,.62);else if(k=='f'){x.save();x.fillStyle='rgba(230,240,245,.16)';x.beginPath();x.arc(bx,y-34,32,0,7);x.fill();x.fillRect(bx-9,y-104,18,50);if(c){x.fillStyle=c;x.beginPath();x.arc(bx,y-34,30,0,Math.PI);x.fill()}x.strokeStyle='rgba(235,240,245,.7)';x.lineWidth=3;x.beginPath();x.arc(bx,y-34,32,0,7);x.stroke();x.restore()}}}
// cartaz do espectro (a física da cor) na parede
function spectrumPoster(x,cx,cy,w,h){x.save();x.fillStyle=GOLD;x.fillRect(cx-w/2-8,cy-h/2-8,w+16,h+16);x.fillStyle='#E9DFC8';x.fillRect(cx-w/2,cy-h/2,w,h);
 const g=x.createLinearGradient(cx-w/2+30,0,cx+w/2-30,0);['#5A2CA8','#2A5ACF','#2AA86A','#E8D23A','#F08A2A','#D8202E'].forEach((c,i,a)=>g.addColorStop(i/(a.length-1),c));
 x.fillStyle=g;x.fillRect(cx-w/2+30,cy+h/2-62,w-60,24);
 x.strokeStyle='#5E1428';x.lineWidth=5;x.beginPath();for(let i=0;i<=40;i++){const u=i/40,px=cx-w/2+30+u*(w-60),py=cy+h/2-80-Math.exp(-Math.pow((u-.42)/.16,2))*(h-150)-12;i?x.lineTo(px,py):x.moveTo(px,py)}x.stroke();
 x.fillStyle='#5E1428';x.font='700 22px Cinzel';x.textAlign='center';x.fillText('ABSORBÂNCIA',cx,cy-h/2+30);x.font='600 18px Cormorant';x.fillText('420     520     620 nm',cx,cy+h/2-16);x.restore()}
// O LABORATÓRIO (fundo) — mesmo mundo para todas as cenas
function lab(x,t=0){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#16080C');g.addColorStop(1,'#2C0B15');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 // painéis de madeira escura
 x.fillStyle='#24100E';x.fillRect(-900,-600,W+1800,1100);x.strokeStyle='rgba(212,162,76,.10)';x.lineWidth=3;for(let i=-6;i<22;i++){x.strokeRect(i*160+12,-60,136,520)}
 // azulejo claro de laboratório atrás da bancada do fundo
 x.fillStyle='#8C8276';x.fillRect(-900,440,W+1800,124);x.strokeStyle='rgba(40,20,20,.35)';x.lineWidth=2;for(let i=-20;i<60;i++){x.beginPath();x.moveTo(i*44,440);x.lineTo(i*44,564);x.stroke()}for(const y of [482,524]){x.beginPath();x.moveTo(-900,y);x.lineTo(W+900,y);x.stroke()}
 x.fillStyle='rgba(20,6,10,.35)';x.fillRect(-900,440,W+1800,124);
 // prateleiras de vidraria
 glassShelf(x,120,720,190,[['e',70,ANT.red],['r',170,'amber'],['f',260,ANT.purple],['r',350,'clear'],['e',450,ANT.white],['b',540,ANT.blue]]);
 glassShelf(x,120,720,350,[['t',150,[ANT.red,ANT.wine,ANT.purple,ANT.blue]],['r',330,'amber'],['r',400,'amber'],['e',500,ANT.rose]]);
 glassShelf(x,1200,1800,190,[['b',70,ANT.rose],['r',160,'clear'],['e',260,ANT.wine],['r',360,'amber'],['f',450,ANT.orange],['e',540,ANT.purple]]);
 glassShelf(x,1200,1800,350,[['r',70,'amber'],['e',170,ANT.blue],['t',380,[ANT.white,ANT.rose,ANT.red,ANT.young]]]);
 spectrumPoster(x,960,190,330,220);
 // bancada do fundo (inox) com aparelhos
 x.fillStyle='#3A1C12';x.fillRect(-900,580,W+1800,320);let sg=x.createLinearGradient(0,560,0,584);sg.addColorStop(0,'#D6D2CA');sg.addColorStop(1,'#8A867E');x.fillStyle=sg;x.fillRect(-900,560,W+1800,22);
 x.strokeStyle='rgba(212,162,76,.25)';x.lineWidth=3;for(let i=-4;i<14;i++)x.strokeRect(i*240+20,600,200,180);
 spectro(x,420,560,.8,t,1,ANT.wine);microscope(x,-40,560,.9);tubeRack(x,700,560,[ANT.red,ANT.purple,ANT.blue],.8);
 beaker(x,1280,560,70,90,ANT.wine,.5);erlen(x,1390,560,.8,ANT.white,.4);phMeter(x,1560,560,.7,'3.4',ANT.wine);
 for(const lx of [520,1400])labLamp(x,lx,t)}
// frente da bancada: tampo claro (epóxi branco) com borda inox e armário de madeira escura
function labFront(f){let g=f.createLinearGradient(0,800,0,1200);g.addColorStop(0,'#3A1C12');g.addColorStop(1,'#120604');f.fillStyle=g;f.fillRect(-900,836,W+1800,600);
 f.fillStyle='#E6E1D6';f.fillRect(-900,800,W+1800,24);f.fillStyle='rgba(255,255,255,.5)';f.fillRect(-900,800,W+1800,3);
 g=f.createLinearGradient(0,824,0,838);g.addColorStop(0,'#C9C4BA');g.addColorStop(1,'#6E6A62');f.fillStyle=g;f.fillRect(-900,824,W+1800,14);
 f.strokeStyle='rgba(212,162,76,.35)';f.lineWidth=3;for(let i=-4;i<12;i++){f.strokeRect(i*300+30,860,260,240);f.fillStyle=GOLD;f.fillRect(i*300+130,880,60,8)}}
// camadas da casca da uva (corte ampliado)
function skinLayers(x,cx,cy,w,t,glow=1){x.save();x.beginPath();x.roundRect(cx-w/2,cy-200,w,440,30);x.clip();
 x.fillStyle='#DCE8B8';x.fillRect(cx-w/2,cy-200,w,440);// polpa
 const r=rng(7);for(let i=0;i<30;i++){x.strokeStyle='rgba(120,150,80,.45)';x.lineWidth=3;x.beginPath();x.ellipse(cx-w/2+r()*w,cy+30+r()*200,34,24,0,0,7);x.stroke()}
 x.fillStyle='#2A0A24';x.fillRect(cx-w/2,cy-200,w,34);// cutícula/pele
 x.fillStyle='rgba(255,255,255,.25)';x.fillRect(cx-w/2,cy-196,w,6);
 for(let row=0;row<3;row++)for(let i=0;i<Math.ceil(w/70)+1;i++){const px=cx-w/2+i*70+(row%2)*35,py=cy-140+row*52;
  x.fillStyle=row==0?'#4A0E3A':row==1?'#6A1A4E':'#8A3A6A';x.beginPath();x.ellipse(px,py,34,24,0,0,7);x.fill();
  x.fillStyle=`rgba(200,40,110,${(.35+.25*Math.sin(t*3+i+row))*glow})`;x.beginPath();x.ellipse(px,py,16,11,0,0,7);x.fill()}
 x.restore();x.strokeStyle=GOLD;x.lineWidth=5;x.beginPath();x.roundRect(cx-w/2,cy-200,w,440,30);x.stroke()}
// mirtilo, amora, repolho roxo
function blueberries(x,cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);for(const [px,py] of [[-50,20],[45,26],[0,-30]]){x.fillStyle='#2E2A6A';x.beginPath();x.arc(px,py,52,0,7);x.fill();x.fillStyle='rgba(170,180,230,.35)';x.beginPath();x.arc(px-14,py-16,18,0,7);x.fill();
 x.fillStyle='#15123A';x.beginPath();for(let k=0;k<5;k++){const a=k*1.2566;x.lineTo(px+Math.cos(a)*12,py-30+Math.sin(a)*12);x.lineTo(px+Math.cos(a+.63)*5,py-30+Math.sin(a+.63)*5)}x.closePath();x.fill()}x.restore()}
function blackberry(x,cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#3E6A2A';for(let k=0;k<5;k++){x.save();x.rotate(-1.2+k*.6);x.beginPath();x.ellipse(0,-96,10,34,0,0,7);x.fill();x.restore()}
 const r=rng(3);for(let i=0;i<34;i++){const a=r()*7,d=Math.sqrt(r())*1,px=Math.cos(a)*d*60,py=Math.sin(a)*d*80;x.fillStyle=i%3?'#2A0A2A':'#3E1240';x.beginPath();x.arc(px,py,20,0,7);x.fill();x.fillStyle='rgba(255,200,230,.3)';x.beginPath();x.arc(px-6,py-6,5,0,7);x.fill()}x.restore()}
function redCabbage(x,cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#6A1E5E';x.beginPath();x.arc(0,0,110,0,7);x.fill();x.fillStyle='#7E2A70';x.beginPath();x.arc(10,8,80,0,7);x.fill();
 x.strokeStyle='rgba(230,200,240,.55)';x.lineWidth=5;for(const a of [-2.4,-1.6,-.8,0,.8,1.6,2.4]){x.beginPath();x.moveTo(0,40);x.quadraticCurveTo(Math.cos(a)*50,Math.sin(a)*50+20,Math.cos(a)*100,Math.sin(a)*100);x.stroke()}x.restore()}
// tanque de fermentação em corte: suco + chapéu de cascas; cor u 0..1; bolhas só dentro do tanque
function tank(x,cx,base,s,u,t){x.save();x.translate(cx,base);x.scale(s,s);const w=300,h=460;
 let g=x.createLinearGradient(-w/2,0,w/2,0);g.addColorStop(0,'#8A867E');g.addColorStop(.5,'#E2DED6');g.addColorStop(1,'#7A766E');x.fillStyle=g;x.beginPath();x.roundRect(-w/2-16,-h-16,w+32,h+16,20);x.fill();
 x.fillStyle='#120A0E';x.beginPath();x.roundRect(-w/2,-h,w,h,10);x.fill();
 x.save();x.beginPath();x.roundRect(-w/2,-h,w,h,10);x.clip();
 x.fillStyle=mixC('#D9D69A',ANT.wine,u);x.fillRect(-w/2,-h+90,w,h);
 const r=rng(11);for(let i=0;i<22;i++){const bx=-w/2+20+r()*(w-40),sp=40+r()*40,by=-((t*sp+r()*h)%(h-120))-10;x.fillStyle='rgba(255,240,220,.4)';x.beginPath();x.arc(bx,by,3+r()*3,0,7);x.fill()}
 for(let i=0;i<40;i++){const bx=-w/2+r()*w,by=-h+90+r()*50;x.fillStyle=i%2?'#3A0E2E':'#5A1A44';x.beginPath();x.arc(bx,by,16,0,7);x.fill()}
 // cor saindo das cascas
 for(let i=0;i<6;i++){const bx=-w/2+30+i*48,yy=-h+140+((t*30+i*40)%200);x.fillStyle=`rgba(122,16,40,${.35*Math.min(1,u*2)})`;x.beginPath();x.ellipse(bx,yy,10,26,0,0,7);x.fill()}
 x.restore();x.fillStyle='#5E5A52';x.fillRect(-60,-h-40,120,26);x.fillRect(-w/2,-6,w,8);x.restore()}
// molécula: anel de antocianina (hexágonos) e cadeia de taninos
function hexRing(x,cx,cy,r,col){x.beginPath();for(let k=0;k<6;k++){const a=k*Math.PI/3+Math.PI/6;x.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r)}x.closePath();x.strokeStyle=col;x.lineWidth=6;x.stroke()}
function anthoMol(x,cx,cy,s,col=ANT.red){x.save();x.translate(cx,cy);x.scale(s,s);const r=34,dx=r*Math.sqrt(3);hexRing(x,-dx/2,0,r,col);hexRing(x,dx/2,0,r,col);hexRing(x,dx*1.5+20,-r*.6,r,col);x.strokeStyle=col;x.lineWidth=6;x.beginPath();x.moveTo(dx,-r*.3);x.lineTo(dx*1.5+20-dx/2+4,-r*.5);x.stroke();
 x.fillStyle=col;for(const [px,py] of [[-dx,-r*1.4],[dx*2.1+20,-r*1.7],[-dx*.4,r*1.6]]){x.beginPath();x.arc(px,py,8,0,7);x.fill()}x.restore()}
function tanninChain(x,cx,cy,s,col='#C8A060'){x.save();x.translate(cx,cy);x.scale(s,s);for(let i=0;i<4;i++){hexRing(x,i*62-93,(i%2?18:-18),30,col)}x.strokeStyle=col;x.lineWidth=5;x.beginPath();for(let i=0;i<4;i++)x.lineTo(i*62-93,(i%2?18:-18));x.stroke();x.restore()}
// taça inclinada sobre toalha branca, vinho sempre nivelado, com degradê na borda (young=roxo, old=tijolo)
function tiltGlass(x,cx,cy,s,ang,core,rim,side=0){x.save();x.translate(cx,cy);x.scale(s,s);const bw=60,top=-200,bc=[Math.sin(ang)*150,-Math.cos(ang)*150],ol='rgba(70,50,46,.75)';
 const bowl=()=>{x.beginPath();x.moveTo(-8,-90);x.quadraticCurveTo(-bw-6,-110,-bw,-150);x.lineTo(-bw+6,top);x.lineTo(bw-6,top);x.lineTo(bw,-150);x.quadraticCurveTo(bw+6,-110,8,-90);x.closePath()};
 // braço de jaleco vindo da lateral, mão na HASTE
 const hx=Math.sin(ang)*48,hy=-Math.cos(ang)*48;if(side){x.save();x.strokeStyle='#BDBAB2';x.lineWidth=58;x.lineCap='round';x.beginPath();x.moveTo(hx+side*420,hy+60);x.lineTo(hx+side*40,hy+6);x.stroke();x.strokeStyle='#F7F6F1';x.lineWidth=50;x.stroke();x.restore()}
 x.save();x.rotate(ang);x.fillStyle='rgba(225,215,200,.9)';x.fillRect(-5,-92,10,92);x.beginPath();x.ellipse(0,0,44,9,0,0,7);x.fill();x.strokeStyle=ol;x.lineWidth=2.5;x.strokeRect(-5,-92,10,92);x.beginPath();x.ellipse(0,0,44,9,0,0,7);x.stroke();
 bowl();x.fillStyle='rgba(255,255,255,.35)';x.fill();
 x.save();bowl();x.clip();x.rotate(-ang);const gr=x.createRadialGradient(bc[0]-Math.sign(ang)*10,bc[1]+30,6,bc[0]-Math.sign(ang)*10,bc[1]+30,80);gr.addColorStop(0,core);gr.addColorStop(.55,core);gr.addColorStop(1,rim);x.fillStyle=gr;x.fillRect(-300,bc[1]-6,600,400);x.restore();
 bowl();x.strokeStyle=ol;x.lineWidth=3.5;x.stroke();x.restore();
 if(side)gripHand(x,hx,hy,ang,C10,.85);x.restore()}
function whiteCloth(x,cx,cy,w,h){x.save();x.fillStyle='#F2EEE4';x.beginPath();x.moveTo(cx-w/2,cy-h/2);x.lineTo(cx+w/2,cy-h/2+10);x.lineTo(cx+w/2-10,cy+h/2);x.lineTo(cx-w/2+8,cy+h/2-8);x.closePath();x.fill();x.strokeStyle='rgba(0,0,0,.08)';x.lineWidth=3;for(let i=1;i<6;i++){x.beginPath();x.moveTo(cx-w/2+i*w/6,cy-h/2);x.lineTo(cx-w/2+i*w/6,cy+h/2);x.stroke()}x.restore()}
// gráfico de barras do espectrofotômetro (420 amarelo · 520 vermelho · 620 azul)
function absChart(x,cx,base,vals,a=[1,1,1]){x.save();const L_=[['420 nm','AMARELO','#E0B83A'],['520 nm','VERMELHO','#C0182E'],['620 nm','AZUL','#3A5ACF']];
 x.strokeStyle=GOLD;x.lineWidth=5;x.beginPath();x.moveTo(cx-330,base-400);x.lineTo(cx-330,base);x.lineTo(cx+330,base);x.stroke();
 L_.forEach(([nm,nome,c],i)=>{const bx=cx-200+i*200,h=vals[i]*360*a[i];x.fillStyle=c;x.fillRect(bx-60,base-h,120,h);x.strokeStyle=GOLD2;x.lineWidth=3;x.strokeRect(bx-60,base-h,120,h);
  x.globalAlpha=a[i];goldText(x,nome,bx,base+40,30,'Cinzel',900);goldText(x,nm,bx,base+80,26,'Cinzel',700);x.globalAlpha=1});x.restore()}
// feixe de luz branca -> taça -> sai vermelho; o verde é "engolido"
function lightThroughGlass(x,u,t){x.save();const y=560;
 // lanterna
 let lg=x.createLinearGradient(0,y-60,0,y+60);lg.addColorStop(0,'#E4E0D8');lg.addColorStop(1,'#8E8A80');x.fillStyle=lg;x.beginPath();x.roundRect(150,y-60,180,120,14);x.fill();x.fillStyle=GOLD;x.fillRect(310,y-64,26,128);x.fillStyle='#5E5A52';x.fillRect(200,y+60,80,90);x.fillRect(160,y+140,160,16);x.fillStyle='#14231C';x.beginPath();x.roundRect(175,y-36,90,40,6);x.fill();x.fillStyle='rgba(255,180,94,.9)';x.beginPath();x.arc(190,y+28,6,0,7);x.fill();const gw=x.createRadialGradient(340,y,4,340,y,90);gw.addColorStop(0,'rgba(255,250,230,.9)');gw.addColorStop(1,'rgba(255,250,230,0)');x.fillStyle=gw;x.fillRect(250,y-90,180,180);
 const k=clamp(u*2);const xb=340+k*(840-340);
 const rainbow=['#D8202E','#F08A2A','#E8D23A','#2AA86A','#2A5ACF','#5A2CA8'];
 rainbow.forEach((c,i)=>{x.fillStyle=c;x.globalAlpha=.85;x.fillRect(340,y-36+i*12,xb-340,12)});x.globalAlpha=1;
 x.fillStyle='rgba(255,255,240,.35)';x.fillRect(340,y-40,xb-340,80);
 const k2=clamp(u*2-1);if(k2>0){const xe=1080+k2*(1720-1080);const gr=x.createLinearGradient(1080,0,1720,0);gr.addColorStop(0,'rgba(216,32,46,.95)');gr.addColorStop(1,'rgba(216,32,46,.75)');x.fillStyle=gr;x.fillRect(1080,y-24,xe-1080,48);x.fillStyle='rgba(255,90,90,.3)';x.fillRect(1080,y-40,xe-1080,80)}
 x.restore()}
// jaleco branco ABERTO por cima do colete (colete e gravata vinho continuam visíveis)
const _outfitBase=outfit;
outfit=function(x,ch,br){_outfitBase(x,ch,br);if(!ch.labcoat)return;const y=-8+br,B=TH+20,c=ch.labcoat,e='#B9B5AC';
 for(const sd of [-1,1]){x.fillStyle=c;x.beginPath();x.moveTo(sd*38,y-4);x.lineTo(sd*(TW/2-44),y-10);x.quadraticCurveTo(sd*(TW/2+2),y-4,sd*(TW/2+4),y+60);x.lineTo(sd*(TW/2+6),B);x.lineTo(sd*64,B);x.lineTo(sd*66,y+170);x.lineTo(sd*52,y+58);x.closePath();x.fill();
  // lapela
  x.fillStyle='#E9E7E0';x.beginPath();x.moveTo(sd*38,y-4);x.lineTo(sd*52,y+58);x.lineTo(sd*84,y+44);x.lineTo(sd*70,y+4);x.closePath();x.fill();
  x.strokeStyle=e;x.lineWidth=3;x.beginPath();x.moveTo(sd*38,y-4);x.lineTo(sd*52,y+58);x.lineTo(sd*66,y+170);x.lineTo(sd*64,B);x.stroke();
  x.beginPath();x.moveTo(sd*52,y+58);x.lineTo(sd*84,y+44);x.stroke()}
 // bolso no peito com caneta
 x.strokeStyle=e;x.lineWidth=3;x.strokeRect(-100,y+96,30,4);x.fillStyle=GOLD;x.fillRect(-92,y+80,5,22);x.fillStyle='#2A2226';x.fillRect(-84,y+84,5,18)}
const C10L=Object.assign({},C10,{cloth:'#F7F6F1',hood:'#BDBAB2',collar:'#EFE9DD',labcoat:'#F7F6F1'});
sommActor=function(cam,p){const h=layer('h',cam);return actor(h,'somm',C10L,p,cam,'rgba(255,180,94,1)',1)};
