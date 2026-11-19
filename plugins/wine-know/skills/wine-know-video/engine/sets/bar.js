// ===== SET: Dark Divino home bar / kitchen with a fridge. One world: counter top at y 800, fridge x 1380-1760. =====
const FR={x0:1380,x1:1760,top:160,split:380};
function barWall(x,t=0){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#1A070D');g.addColorStop(1,'#2C0B15');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 // tiled backsplash
 x.fillStyle='#3A1220';x.fillRect(-900,420,W+1800,420);x.strokeStyle='#22080F';x.lineWidth=4;for(let r=0;r<11;r++){const y=420+r*40;x.beginPath();x.moveTo(-900,y);x.lineTo(W+900,y);x.stroke();for(let c=-12;c<36;c++){const xx=c*80+(r%2)*40;x.beginPath();x.moveTo(xx,y);x.lineTo(xx,y+40);x.stroke()}}
 // open shelves with bottles
 const r=rng(21);for(const sy of [210,340]){x.fillStyle='#5A2E1C';x.fillRect(80,sy,1180,16);x.fillStyle='rgba(0,0,0,.35)';x.fillRect(80,sy+16,1180,8);let bx=110;while(bx<1220){const h=70+r()*40,w=22+r()*10,col=r()<.5?'#1E3A31':(r()<.5?'#3A0E18':'#4A3020');x.fillStyle=col;x.beginPath();x.roundRect(bx,sy-h,w,h,6);x.fill();x.fillRect(bx+w/2-5,sy-h-26,10,28);x.fillStyle=r()<.5?'#D4A24C':'#7A1F33';x.fillRect(bx+w/2-5,sy-h-28,10,10);x.fillStyle='rgba(255,200,140,.18)';x.fillRect(bx+4,sy-h+8,4,h-16);bx+=w+16+r()*26}}
 // pendant lamps
 for(const lx of [520,1080]){g=x.createLinearGradient(0,150,0,820);g.addColorStop(0,'rgba(255,190,110,.26)');g.addColorStop(1,'rgba(255,190,110,0)');x.fillStyle=g;x.beginPath();x.moveTo(lx-40,150);x.lineTo(lx+40,150);x.lineTo(lx+300,820);x.lineTo(lx-300,820);x.closePath();x.fill();
  x.fillStyle='#14080A';x.fillRect(lx-2,-400,4,500);x.fillStyle='#D4A24C';x.beginPath();x.moveTo(lx-16,100);x.lineTo(lx+16,100);x.lineTo(lx+52,150);x.lineTo(lx-52,150);x.closePath();x.fill();x.fillStyle='#FFE2A8';x.beginPath();x.ellipse(lx,150,50,7,0,0,7);x.fill()}
 fridge(x)}
function fridge(x){const {x0,x1,top,split}=FR;let g=x.createLinearGradient(x0,0,x1,0);g.addColorStop(0,'#4A4A56');g.addColorStop(.5,'#34343E');g.addColorStop(1,'#24242C');x.fillStyle=g;x.beginPath();x.roundRect(x0,top,x1-x0,1000-top,18);x.fill();
 x.fillStyle='rgba(255,255,255,.12)';x.fillRect(x0+8,top+8,6,1000-top-16);x.fillStyle='#16161C';x.fillRect(x0,split,x1-x0,6);
 x.fillStyle='#C8C8D2';x.beginPath();x.roundRect(x0+26,top+40,12,split-top-80,6);x.fill();x.beginPath();x.roundRect(x0+26,split+40,12,260,6);x.fill();
 x.fillStyle='#14141A';x.beginPath();x.roundRect(x1-120,top+60,80,34,6);x.fill();x.fillStyle='#7FD1FF';x.font='700 22px Inter';x.textAlign='center';x.fillText('4°C',x1-80,top+85)}
