// ===== Vídeo 27 — Tampa de rosca é vinho barato? — cenário e objetos =====
// barAdega: bar de vinhos com adega envidraçada ao fundo — o "duelo": garrafas DEITADAS de rolha (só o fundo aparece) num lado,
//   garrafas EM PÉ com tampa de rosca prateada no outro (o.split = x da divisória; o.swap troca os lados)
// screwBottle: garrafa de vinho branco com tampa de rosca (capa de alumínio comprida, frisos no topo, picote do lacre); base em (0,0), eixo para cima
// corkHeld: rolha de cortiça em pé (textura de poros, topo manchado de vinho) para ficar entre os dedos
// twistArrow: setinha curva em volta da tampa (gesto de girar) — traço fino, sem brilho
function bottleEnds27(x,x0,y0,cols,rows,r,seed){const R=rng(seed);for(let j=0;j<rows;j++)for(let i=0;i<cols;i++){const cx=x0+i*r*2.1+(j%2)*r*1.05,cy=y0-j*r*1.82;
 x.fillStyle='#0E1E17';x.beginPath();x.arc(cx,cy,r,0,7);x.fill();x.fillStyle='#16251C';x.beginPath();x.arc(cx,cy,r*.8,0,7);x.fill();
 x.fillStyle='#0A140F';x.beginPath();x.arc(cx,cy,r*.38,0,7);x.fill();x.fillStyle=`rgba(255,200,130,${.06+R()*.08})`;x.beginPath();x.arc(cx-r*.35,cy-r*.35,r*.18,0,7);x.fill()}}
function standCap(x,bx,base,h,w,col,seed){const R=rng(seed);x.fillStyle=col;x.beginPath();x.moveTo(bx,base);x.lineTo(bx,base-h+20);x.quadraticCurveTo(bx,base-h,bx+w/2-6,base-h-6);x.lineTo(bx+w/2-6,base-h-44);x.lineTo(bx+w/2+6,base-h-44);x.lineTo(bx+w/2+6,base-h-6);x.quadraticCurveTo(bx+w,base-h,bx+w,base-h+20);x.lineTo(bx+w,base);x.closePath();x.fill();
 x.fillStyle='#B9BEC4';x.fillRect(bx+w/2-7,base-h-46,14,30);x.fillStyle='rgba(255,255,255,.35)';x.fillRect(bx+w/2-4,base-h-44,3,26);
 x.fillStyle='rgba(243,230,200,.6)';x.fillRect(bx+4,base-h*.6,w-8,h*.3);x.fillStyle='rgba(255,200,140,.18)';x.fillRect(bx+4,base-h+22,3,h-34)}
function barAdega(x,t=0,o={}){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1A070D');g.addColorStop(1,'#2C0B15');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 const x0=o.x0!=null?o.x0:-200,x1=o.x1!=null?o.x1:W+400,sp=o.split!=null?o.split:1330,sw=!!o.swap,y0=40,y1=600;
 // adega envidraçada: fundo escuro, divisória dourada no meio
 x.fillStyle='#14060A';x.fillRect(x0,y0,x1-x0,y1-y0);
 const lying=(a,b)=>{x.save();x.beginPath();x.rect(a,y0,b-a,y1-y0);x.clip();bottleEnds27(x,a+18,y1-24,Math.ceil((b-a)/40)+1,14,19,a|0);x.fillStyle='rgba(20,6,10,.42)';x.fillRect(a,y0,b-a,y1-y0);x.restore()},
  standing=(a,b)=>{x.save();x.beginPath();x.rect(a,y0,b-a,y1-y0);x.clip();const R=rng(27);for(const sy of [310,590]){let bx=a+16;while(bx<b-30){const w=28+R()*6;standCap(x,bx,sy,96+R()*20,w,R()<.6?'#2F4A2C':'#5A6A3A',bx);bx+=w+14+R()*10}x.fillStyle='#5A2E1C';x.fillRect(a,sy,b-a,12)}x.restore()};
 if(!sw){lying(x0,sp);standing(sp,x1)}else{standing(x0,sp);lying(sp,x1)}
 // luz fria de adega por cima + reflexo do vidro
 g=x.createLinearGradient(0,y0,0,y1);g.addColorStop(0,'rgba(255,200,140,.10)');g.addColorStop(1,'rgba(255,200,140,0)');x.fillStyle=g;x.fillRect(x0,y0,x1-x0,y1-y0);
 x.fillStyle='rgba(255,240,220,.05)';for(let k=x0+80;k<x1;k+=520){x.beginPath();x.moveTo(k,y0);x.lineTo(k+120,y0);x.lineTo(k-80,y1);x.lineTo(k-200,y1);x.closePath();x.fill()}
 // caixilhos dourados
 x.strokeStyle='#8A6A34';x.lineWidth=10;x.strokeRect(x0,y0,x1-x0,y1-y0);for(let k=x0+260;k<x1;k+=260){if(Math.abs(k-sp)>60){x.lineWidth=5;x.beginPath();x.moveTo(k,y0);x.lineTo(k,y1);x.stroke()}}
 x.lineWidth=14;x.strokeStyle='#D4A24C';x.beginPath();x.moveTo(sp,y0);x.lineTo(sp,y1);x.stroke();
 // lambri de madeira embaixo
 g=x.createLinearGradient(0,y1,0,820);g.addColorStop(0,'#3A1C12');g.addColorStop(1,'#1E0C08');x.fillStyle=g;x.fillRect(-900,y1,W+1800,300);x.strokeStyle='rgba(0,0,0,.35)';x.lineWidth=4;for(let xx=-900;xx<W+900;xx+=150)x.strokeRect(xx+12,y1+24,126,170);
 // pendentes
 for(const lx of (o.lamps||[560,1500])){g=x.createLinearGradient(0,150,0,820);g.addColorStop(0,'rgba(255,190,110,.2)');g.addColorStop(1,'rgba(255,190,110,0)');x.fillStyle=g;x.beginPath();x.moveTo(lx-40,150);x.lineTo(lx+40,150);x.lineTo(lx+300,820);x.lineTo(lx-300,820);x.closePath();x.fill();
  x.fillStyle='#14080A';x.fillRect(lx-2,-400,4,500);x.fillStyle='#D4A24C';x.beginPath();x.moveTo(lx-16,100);x.lineTo(lx+16,100);x.lineTo(lx+52,150);x.lineTo(lx-52,150);x.closePath();x.fill();x.fillStyle='#FFE2A8';x.beginPath();x.ellipse(lx,150,50,7,0,0,7);x.fill()}}
// garrafa com tampa de rosca (vinho branco, vidro verde-claro); rot gira em torno da base
function screwBottle(x,bx,by,s=1,rot=0,glass='#2F4A2C'){x.save();x.translate(bx,by);x.rotate(rot);x.scale(s,s);
 x.fillStyle='rgba(0,0,0,.35)';x.beginPath();x.ellipse(6,2,50,8,0,0,7);x.fill();
 let g=x.createLinearGradient(-38,0,38,0);g.addColorStop(0,'#16261A');g.addColorStop(.35,glass);g.addColorStop(1,'#14241A');x.fillStyle=g;
 x.beginPath();x.moveTo(-38,0);x.lineTo(-38,-180);x.quadraticCurveTo(-38,-222,-13,-236);x.lineTo(-13,-276);x.lineTo(13,-276);x.lineTo(13,-236);x.quadraticCurveTo(38,-222,38,-180);x.lineTo(38,0);x.closePath();x.fill();
 x.fillStyle='rgba(255,220,150,.22)';x.fillRect(-28,-186,8,176);
 // vinho branco visto pelo vidro (dourado escuro)
 x.fillStyle='rgba(212,162,76,.18)';x.fillRect(-34,-176,68,172);
 // tampa de rosca: capa de alumínio comprida até o ombro, frisos no topo, picote do lacre
 g=x.createLinearGradient(-15,0,15,0);g.addColorStop(0,'#7E848C');g.addColorStop(.35,'#E2E6EA');g.addColorStop(.6,'#B4BAC1');g.addColorStop(1,'#6C727A');x.fillStyle=g;
 x.beginPath();x.roundRect(-15.5,-284,31,72,[5,5,2,2]);x.fill();
 x.strokeStyle='rgba(60,64,70,.6)';x.lineWidth=1.4;for(let k=0;k<5;k++){x.beginPath();x.moveTo(-15,-280+k*3.6);x.lineTo(15,-280+k*3.6);x.stroke()}
 x.setLineDash([3,2.5]);x.beginPath();x.moveTo(-15.5,-255);x.lineTo(15.5,-255);x.stroke();x.setLineDash([]);
 x.fillStyle='#D4A24C';x.fillRect(-15.5,-232,31,5);
 // rótulo creme com moldura dourada
 x.fillStyle='#F3E6C8';x.beginPath();x.roundRect(-34,-146,68,86,6);x.fill();x.strokeStyle='#D4A24C';x.lineWidth=2.5;x.strokeRect(-29,-141,58,76);
 x.fillStyle='#5E1428';x.fillRect(-16,-118,32,4);x.fillRect(-10,-108,20,3);x.fillStyle='#D4A24C';x.beginPath();x.arc(0,-84,7,0,7);x.fill();
 x.restore()}
// rolha de cortiça em pé, centro em (cx,cy)
function corkHeld(x,cx,cy,s=1,rot=0){x.save();x.translate(cx,cy);x.rotate(rot);x.scale(s,s);
 let g=x.createLinearGradient(-24,0,24,0);g.addColorStop(0,'#A87A44');g.addColorStop(.4,'#D8AC6E');g.addColorStop(1,'#9A6E3C');x.fillStyle=g;x.beginPath();x.roundRect(-24,-58,48,116,10);x.fill();
 const R=rng(7);x.fillStyle='rgba(110,70,34,.55)';for(let i=0;i<22;i++){x.beginPath();x.ellipse(-18+R()*36,-50+R()*100,1.5+R()*2.6,1+R()*1.6,0,0,7);x.fill()}
 x.fillStyle='rgba(94,20,40,.8)';x.beginPath();x.ellipse(0,-56,22,6,0,0,7);x.fill();x.fillStyle='#C99A5B';x.beginPath();x.ellipse(0,58,22,6,0,0,7);x.fill();
 x.restore()}
// setinha curva em volta da tampa (gesto de girar)
function twistArrow(x,cx,cy,s=1,a=1){x.save();x.translate(cx,cy);x.scale(s,s);x.strokeStyle=`rgba(212,162,76,${.8*a})`;x.lineWidth=4;x.lineCap='round';
 x.beginPath();x.ellipse(0,0,34,10,0,.25,Math.PI-.25);x.stroke();const ex=Math.cos(Math.PI-.25)*34,ey=Math.sin(Math.PI-.25)*10;
 x.fillStyle=`rgba(212,162,76,${.85*a})`;x.beginPath();x.moveTo(ex-6,ey-10);x.lineTo(ex-10,ey+8);x.lineTo(ex+8,ey+4);x.closePath();x.fill();x.restore()}
