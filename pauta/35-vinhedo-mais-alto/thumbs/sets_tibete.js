// ===== Vídeo 35 — O vinhedo mais alto do mundo fica no Tibete — cenário e personagens =====
// tibeteVinhedo: vinhedo em TERRAÇOS de pedra no alto do Tibete, ao entardecer: céu azul-escuro limpo, sol forte com raios,
//   picos nevados do Himalaia, fileiras de videiras baixas nos degraus, bandeirinhas coloridas de oração ao longe (sem bandeira de país)
// balcaoPedra: balcão de pedra e madeira na beira do terraço (onde o Sommelier fica, no lugar do balcão do bar)
// cachecol: cachecol vinho-escuro por cima do colete (colete e gravata-borboleta continuam à mostra) — o frio lá de cima
// viticultorTib: viticultor tibetano de verdade (~50 anos): rosto queimado de sol, bochechas vermelhas, chapéu de feltro de aba larga,
//   chuba cinza-escura com faixa colorida e uma manga caída no ombro, cesto de vime nas costas, cacho erguido contra o sol
// altPlaca: plaquinha de madeira cravada no terraço com a altitude ("3.563 M")
const TB={sky0:'#101C44',sky1:'#2E4078',sky2:'#9A5A6A',sky3:'#E8A070',snow:'#EDE6E0',snowS:'#A9A4B8',rock:'#3A3148',rock2:'#2A2236',terr:'#5A4632',terr2:'#3E3024',vine:'#2E4A2A',vine2:'#3E6236'};
function himalaia(x,base,pk,seed,col,snow,scale=1){const R=rng(seed);x.fillStyle=col;x.beginPath();x.moveTo(-900,base);for(const [px,py] of pk)x.lineTo(px,py);x.lineTo(W+900,base);x.closePath();x.fill();
 // lado da sombra (metade direita de cada pico, mais escura)
 for(let i=1;i<pk.length-1;i++){const [px,py]=pk[i],[bx,by]=pk[i+1];x.fillStyle='rgba(20,16,40,.22)';x.beginPath();x.moveTo(px,py);x.lineTo(bx,by);x.lineTo(bx,base);x.lineTo(px+(bx-px)*.25,base);x.closePath();x.fill()}
 if(snow){// capa de neve: do pico desce pelas duas encostas e fecha em zigue-zague
  for(let i=1;i<pk.length-1;i++){const [px,py]=pk[i],[ax,ay]=pk[i-1],[bx,by]=pk[i+1];if(py>base-120*scale)continue;const f=.32+R()*.12;
   const la=[px+(ax-px)*f,py+(ay-py)*f],lb=[px+(bx-px)*f,py+(by-py)*f];
   x.fillStyle=TB.snow;x.beginPath();x.moveTo(px,py);x.lineTo(la[0],la[1]);const n=4;for(let k=1;k<n;k++){const u=k/n,zx=la[0]+(lb[0]-la[0])*u,zy=la[1]+(lb[1]-la[1])*u+(k%2?-14:10)*scale;x.lineTo(zx,zy)}x.lineTo(lb[0],lb[1]);x.closePath();x.fill();
   x.fillStyle='rgba(150,150,190,.45)';x.beginPath();x.moveTo(px,py);x.lineTo(lb[0],lb[1]);x.lineTo(px+(lb[0]-px)*.3,py+(lb[1]-py)*.9);x.closePath();x.fill()}}}
function prayerFlags(x,x0,y0,x1,y1,sag,n,t=0){const cols=['#2E5AA8','#F3EDE0','#B0242E','#2E7A3E','#E0B030'];x.strokeStyle='rgba(30,20,20,.7)';x.lineWidth=2;x.beginPath();
 for(let i=0;i<=40;i++){const u=i/40,px=x0+(x1-x0)*u,py=y0+(y1-y0)*u+Math.sin(u*Math.PI)*sag;i?x.lineTo(px,py):x.moveTo(px,py)}x.stroke();
 for(let i=0;i<n;i++){const u=(i+.5)/n,px=x0+(x1-x0)*u,py=y0+(y1-y0)*u+Math.sin(u*Math.PI)*sag,sw=Math.sin(t*3+i)*3;x.fillStyle=cols[i%5];x.beginPath();x.moveTo(px-9,py);x.lineTo(px+9,py);x.lineTo(px+9+sw,py+24);x.lineTo(px-9+sw,py+24);x.closePath();x.fill()}}
function vineRow(x,x0,x1,y,s,seed){const R=rng(seed);for(let xx=x0;xx<x1;xx+=46*s){x.fillStyle='#4A3424';x.fillRect(xx-2*s,y-46*s,4*s,46*s);
 x.fillStyle=R()<.5?TB.vine:TB.vine2;x.beginPath();x.ellipse(xx,y-44*s,26*s,18*s,0,0,7);x.fill();x.beginPath();x.ellipse(xx+16*s,y-34*s,18*s,13*s,0,0,7);x.fill();
 if(R()<.55){x.fillStyle='#4A1A3A';for(const [gx,gy] of [[-6,-26],[2,-24],[-2,-18],[6,-19],[0,-12]]){x.beginPath();x.arc(xx+gx*s,y+gy*s,4*s,0,7);x.fill()}}}
 x.strokeStyle='rgba(30,24,18,.6)';x.lineWidth=1.5*s;x.beginPath();x.moveTo(x0,y-30*s);x.lineTo(x1,y-30*s);x.stroke()}
function tibeteVinhedo(x,t=0,o={}){let g=x.createLinearGradient(0,0,0,520);g.addColorStop(0,TB.sky0);g.addColorStop(.45,TB.sky1);g.addColorStop(.8,TB.sky2);g.addColorStop(1,TB.sky3);x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 // sol forte (raios marcados) no céu limpo
 const sx=o.sun?o.sun[0]:1700,sy=o.sun?o.sun[1]:240;g=x.createRadialGradient(sx,sy,10,sx,sy,420);g.addColorStop(0,'rgba(255,230,170,.65)');g.addColorStop(.25,'rgba(255,200,130,.22)');g.addColorStop(1,'rgba(255,200,130,0)');x.fillStyle=g;x.fillRect(sx-500,sy-500,1000,1000);
 x.save();x.translate(sx,sy);x.fillStyle='rgba(255,230,170,.12)';for(let i=0;i<14;i++){x.rotate(Math.PI*2/14);x.beginPath();x.moveTo(-14,0);x.lineTo(14,0);x.lineTo(4,620);x.lineTo(-4,620);x.closePath();x.fill()}x.restore();
 x.fillStyle='#FFF1CC';x.beginPath();x.arc(sx,sy,46,0,7);x.fill();
 // cordilheira: fundo (azulada) e frente (rocha), com neve
 himalaia(x,540,[[-900,470],[-500,330],[-260,410],[60,300],[340,400],[600,290],[840,410],[1060,270],[1320,400],[1560,300],[1800,405],[2060,280],[2360,410],[2700,320],[W+900,460]],7,'#6A6F98',true,.75);
 himalaia(x,560,[[-900,520],[-600,450],[-300,490],[0,445],[300,495],[640,455],[980,500],[1300,450],[1640,495],[1960,455],[2300,500],[2700,460],[W+900,510]],9,'#4A3E5A',false,.6);
 // névoa fina na base dos montes
 g=x.createLinearGradient(0,420,0,540);g.addColorStop(0,'rgba(230,190,190,0)');g.addColorStop(1,'rgba(230,190,190,.22)');x.fillStyle=g;x.fillRect(-900,420,W+1800,130);
 // bandeirinhas de oração ao longe
 for(const [a,b,c,d] of (o.flags||[[-300,440,700,420],[1450,430,2400,450]]))prayerFlags(x,a,b,c,d,40,22,t);
 // terraços de pedra com videiras (degraus descendo)
 const steps=o.steps||[[515,.5],[565,.65],[630,.8],[710,1]];
 steps.forEach(([y,s],i)=>{x.fillStyle=i%2?TB.terr:TB.terr2;x.fillRect(-900,y,W+1800,120);
  // muro de pedra seca do degrau
  const R=rng(40+i);x.fillStyle='#4E4038';x.fillRect(-900,y+4,W+1800,26*s);for(let xx=-900;xx<W+900;xx+=40*s+R()*20*s){x.fillStyle=`rgba(${110+R()*40|0},${96+R()*30|0},${84+R()*20|0},.6)`;x.beginPath();x.roundRect(xx,y+6,34*s,20*s,4);x.fill()}
  vineRow(x,-900,W+900,y,s,i*11)});
 // luz quente da tarde por cima
 g=x.createLinearGradient(W,0,0,600);g.addColorStop(0,'rgba(255,190,120,.16)');g.addColorStop(1,'rgba(255,190,120,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1500)}
// balcão de pedra com tampo de madeira (y = topo)
function balcaoPedra(x,y=800){const R=rng(5);x.fillStyle='#4E4038';x.fillRect(-900,y,W+1800,500);for(let yy=y+18;yy<y+400;yy+=34)for(let xx=-900+((yy/34)%2)*30;xx<W+900;xx+=64+R()*20){x.fillStyle=`rgba(${120+R()*40|0},${104+R()*30|0},${90+R()*20|0},.5)`;x.beginPath();x.roundRect(xx,yy,58,28,5);x.fill()}
 let g=x.createLinearGradient(0,y-8,0,y+18);g.addColorStop(0,'#7A4A2A');g.addColorStop(1,'#3A1C12');x.fillStyle=g;x.fillRect(-900,y-6,W+1800,24);x.fillStyle='rgba(255,210,150,.45)';x.fillRect(-900,y-6,W+1800,3)}
// cachecol por cima do colete: p = pose do Sommelier (world); fica abaixo do queixo, deixa a gravata-borboleta à mostra
function cachecol(x,p,side=-1){x.save();x.translate(p.x,p.y);x.scale(p.s,p.s);const br=Math.sin(p.breath||0)*3,y=-8+br;
 const c1='#3A0A16',c2='#5A1424';
 // ponta pendurada (lado escolhido), por cima do colete, longe da gravata
 x.fillStyle=c1;x.beginPath();x.moveTo(side*40,y+6);x.lineTo(side*92,y+10);x.lineTo(side*98,y+150);x.lineTo(side*60,y+156);x.closePath();x.fill();
 x.fillStyle='rgba(212,162,76,.8)';x.fillRect(side>0?60:-98,y+130,38,5);x.fillRect(side>0?60:-98,y+140,38,3);
 x.strokeStyle='rgba(212,162,76,.8)';x.lineWidth=2;for(let k=0;k<5;k++){x.beginPath();x.moveTo(side*(62+k*8),y+156);x.lineTo(side*(62+k*8),y+170);x.stroke()}
 // volta no pescoço
 x.fillStyle=c2;x.beginPath();x.moveTo(-66,y-12);x.quadraticCurveTo(0,y-34,66,y-12);x.quadraticCurveTo(70,y+6,48,y+10);x.quadraticCurveTo(0,y-4,-48,y+10);x.quadraticCurveTo(-70,y+6,-66,y-12);x.fill();
 x.strokeStyle='rgba(0,0,0,.25)';x.lineWidth=3;for(const k of [-30,0,30]){x.beginPath();x.moveTo(k-6,y-20);x.lineTo(k+6,y+2);x.stroke()}
 x.restore()}
// viticultor tibetano: (px,py) como o drawPerson; s escala; o.grape = mão erguida com cacho; o.hold vento no chapéu
function viticultorTib(x,px,py,s,o={}){const sk='#B87A52';
 const ch={skin:sk,cloth:'#4A4A52',hood:'#34343C',hand:sk,face:'#1c1a2b',finger:'#6A4A34',outfit:'shirt',collar:'#B0242E',short:'#1E1612',part:0,leg:'#2A2A30',shoe:'#3A2416'};
 // cesto de vime nas costas (aparece por trás dos ombros)
 x.save();x.translate(px,py);x.scale(s,s);x.fillStyle='#8A6A3A';x.beginPath();x.moveTo(-96,-40);x.lineTo(96,-40);x.lineTo(80,150);x.lineTo(-80,150);x.closePath();x.fill();
 x.strokeStyle='rgba(60,40,20,.55)';x.lineWidth=3;for(let yy=-30;yy<150;yy+=16){x.beginPath();x.moveTo(-94+yy*.09,yy);x.lineTo(94-yy*.09,yy);x.stroke()}x.fillStyle='#3E6236';x.beginPath();x.ellipse(-40,-44,26,14,0,0,7);x.ellipse(30,-46,30,14,0,0,7);x.fill();x.restore();
 const p={x:px,y:py,s:s,face:1,noLegs:!o.legs,breath:0,look:o.look||0,lookY:o.lookY||-.2,brow:1.1,mouth:1,open:0,wide:0,tilt:o.tilt||0,hands:o.reach||{},arm3d:false,showH:{l:true,r:true}};
 drawPerson(x,ch,p);
 x.save();x.translate(px,py);x.scale(s,s);
 // chuba: faixa colorida na cintura, gola cruzada, manga direita caída no ombro (o braço de baixo aparece em vermelho-vinho)
 x.fillStyle='#B0242E';x.fillRect(-TW/2,TH-70,TW,22);x.fillStyle='#E0B030';x.fillRect(-TW/2,TH-62,TW,6);
 x.fillStyle='#34343C';x.beginPath();x.moveTo(-40,-10);x.lineTo(30,90);x.lineTo(44,80);x.lineTo(-24,-12);x.closePath();x.fill();
 // bochechas vermelhas e rugas nos olhos
 const hy=-HR-20;x.fillStyle='rgba(200,60,60,.35)';x.beginPath();x.ellipse(-50+(o.look||0)*44,hy+26,18,11,0,0,7);x.ellipse(50+(o.look||0)*44,hy+26,18,11,0,0,7);x.fill();
 x.strokeStyle='rgba(60,30,20,.5)';x.lineWidth=2.5;for(const sd of [-1,1]){x.beginPath();x.moveTo(sd*70+(o.look||0)*44,hy-6);x.lineTo(sd*82+(o.look||0)*44,hy-12);x.moveTo(sd*70+(o.look||0)*44,hy);x.lineTo(sd*84+(o.look||0)*44,hy+2);x.stroke()}
 // chapéu de feltro marrom de aba larga
 x.translate(0,hy);x.rotate(o.tilt||0);x.fillStyle='#5A3E2A';x.beginPath();x.ellipse(0,-HR+34,HR+58,22,0,0,7);x.fill();
 x.beginPath();x.moveTo(-70,-HR+30);x.quadraticCurveTo(-74,-HR-58,0,-HR-62);x.quadraticCurveTo(74,-HR-58,70,-HR+30);x.closePath();x.fill();
 x.fillStyle='#3A2416';x.fillRect(-72,-HR+10,144,16);x.fillStyle='rgba(255,220,180,.12)';x.beginPath();x.ellipse(-20,-HR-30,26,12,-.3,0,7);x.fill();x.restore();
 // mãos (pele) e cacho erguido
 for(const k of ['l','r']){if(!p._h)continue;const h=p._h[k];x.save();x.translate(px,py);x.scale(s,s);x.fillStyle=sk;x.beginPath();x.arc(h[0],h[1],22,0,7);x.fill();x.restore()}
 if(o.grape&&p._h){const h=p._h[o.grape];cachoUva(x,px+h[0]*s,py+h[1]*s+8*s,s*1.1)}
 if(o.shears&&p._h){const h=p._h[o.shears];x.save();x.translate(px+h[0]*s,py+h[1]*s);x.scale(s,s);x.strokeStyle='#B9BEC4';x.lineWidth=6;x.lineCap='round';x.beginPath();x.moveTo(0,0);x.lineTo(30,-40);x.moveTo(6,4);x.lineTo(40,-30);x.stroke();x.fillStyle='#B0242E';x.beginPath();x.roundRect(-14,-4,20,30,6);x.fill();x.restore()}}
function cachoUva(x,cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.strokeStyle='#5A3A1A';x.lineWidth=5;x.beginPath();x.moveTo(0,-8);x.lineTo(0,6);x.stroke();
 for(const [gx,gy] of [[-18,16],[0,14],[18,16],[-26,34],[-9,32],[9,32],[26,34],[-18,52],[0,50],[18,52],[-9,68],[9,68],[0,84]]){const g=x.createRadialGradient(gx-4,gy-5,2,gx,gy,11);g.addColorStop(0,'#9A3A66');g.addColorStop(1,'#33081C');x.fillStyle=g;x.beginPath();x.arc(gx,gy,10.5,0,7);x.fill()}
 x.fillStyle='#3E6236';x.beginPath();x.ellipse(20,-6,18,10,-.4,0,7);x.fill();x.restore()}
// plaquinha de madeira cravada no chão com a altitude
function altPlaca(x,cx,base,s,txt='3.563 M'){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='#4A2E1C';x.fillRect(-8,-150,16,150);
 let g=x.createLinearGradient(0,-230,0,-140);g.addColorStop(0,'#7A4A2A');g.addColorStop(1,'#4A2A18');x.fillStyle=g;x.beginPath();x.roundRect(-120,-232,240,92,10);x.fill();x.strokeStyle='#D4A24C';x.lineWidth=5;x.stroke();
 x.restore();goldText(x,txt,cx,base-186*s,52*s,'Cinzel',900)}
