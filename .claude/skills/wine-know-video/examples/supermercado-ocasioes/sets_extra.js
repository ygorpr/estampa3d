// ===== Extra sets and props for "Como escolher vinho no supermercado" (Dark Divino palette, flat shapes) =====
// ---- bottles in several styles: red, white, rose, spark (gold foil), moscato ----
const BST={red:{glass:'#1E3A31',label:'#5E1428'},white:{glass:'#6F8F57',label:'#E9DCC0'},rose:{glass:'#C98A93',label:'#F3E6C8'},
 spark:{glass:'#1F3326',label:'#141012',foil:'#D4A24C'},moscato:{glass:'#B98A3A',label:'#F3E6C8',foil:'#E2B456'},clear:{glass:'#B9C7C2',label:'#E9DCC0'}};
function bottleS(x,b,s,style){const st=BST[style]||BST.red,g0=CEL.glass;CEL.glass=st.glass;wineBottle(x,b[0],b[1],s,true,st.label);CEL.glass=g0;
 if(st.foil){x.save();x.translate(b[0],b[1]);x.scale(s,s);x.fillStyle=st.foil;x.beginPath();x.moveTo(-14,-290);x.lineTo(14,-290);x.lineTo(16,-232);x.quadraticCurveTo(0,-222,-16,-232);x.closePath();x.fill();x.fillStyle='rgba(255,255,255,.25)';x.fillRect(-8,-286,4,50);x.restore()}}
// ---- supermarket aisle ----
function marketWall(x,t){x.fillStyle='#1C080D';x.fillRect(-900,-600,W+1800,1900);
 for(const lx of [200,960,1720]){let g=x.createLinearGradient(0,-60,0,560);g.addColorStop(0,'rgba(255,236,200,.22)');g.addColorStop(1,'rgba(255,236,200,0)');x.fillStyle=g;x.beginPath();x.moveTo(lx-160,-40);x.lineTo(lx+160,-40);x.lineTo(lx+420,700);x.lineTo(lx-420,700);x.closePath();x.fill();x.fillStyle='#FFF1D6';x.fillRect(lx-170,-52,340,14)}
 const r=rng(33),cols=['#1E3A31','#3A0E18','#6F8F57','#C98A93','#1F3326','#4A3020','#B9C7C2'];
 for(const [sy,h] of [[150,110],[300,110],[450,110],[600,120]]){x.fillStyle='#4A2416';x.fillRect(-500,sy,W+1000,14);x.fillStyle='rgba(0,0,0,.35)';x.fillRect(-500,sy+14,W+1000,8);
  let bx=-480;while(bx<W+480){const w=26+r()*6,hh=h*(.78+r()*.2),c=cols[Math.floor(r()*cols.length)];x.fillStyle=c;x.beginPath();x.roundRect(bx,sy-hh,w,hh,7);x.fill();x.fillRect(bx+w/2-5,sy-hh-26,10,28);x.fillStyle=r()<.5?'#E9DCC0':'#5E1428';x.fillRect(bx+4,sy-hh*.62,w-8,hh*.32);x.fillStyle='rgba(255,220,180,.16)';x.fillRect(bx+3,sy-hh+6,4,hh-12);bx+=w+10}
  x.fillStyle='#E9DCC0';for(let px=-460;px<W+460;px+=150){x.fillRect(px,sy+2,64,11)}}
 x.fillStyle='rgba(10,3,6,.35)';x.fillRect(-900,-600,W+1800,1900);
 x.save();x.fillStyle='#2A0610';x.beginPath();x.roundRect(820,-30,280,70,14);x.fill();x.strokeStyle='#D4A24C';x.lineWidth=4;x.stroke();x.restore();goldText(x,'VINHOS',960,6,40,'Cinzel',900)}
function marketFront(f){let g=f.createLinearGradient(0,800,0,1100);g.addColorStop(0,'#5A2E1C');g.addColorStop(.08,'#3A1C12');g.addColorStop(1,'#140806');f.fillStyle=g;f.fillRect(-900,800,W+1800,600);f.fillStyle='rgba(201,184,154,.55)';for(let px=-200;px<W+200;px+=260)f.fillRect(px,814,56,10);
 f.fillStyle='rgba(255,236,200,.35)';f.fillRect(-900,800,W+1800,3)}
// ---- backyard with brick grill ----
function backyard(x,t){let g=x.createLinearGradient(0,-300,0,800);g.addColorStop(0,'#2A0B24');g.addColorStop(.6,'#7A2E3A');g.addColorStop(1,'#E8894E');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='#24101A';for(let i=0;i<14;i++){const tx=-400+i*200;x.beginPath();x.moveTo(tx,560);x.quadraticCurveTo(tx+60,330+((i*53)%90),tx+150,560);x.fill()}
 x.fillStyle='#4A1A1E';x.fillRect(-900,560,W+1800,400);x.strokeStyle='#2C0B12';x.lineWidth=4;for(let r=0;r<9;r++){const y=560+r*30;x.beginPath();x.moveTo(-900,y);x.lineTo(W+900,y);x.stroke();for(let c=-15;c<40;c++){const xx=c*70+(r%2)*35;x.beginPath();x.moveTo(xx,y);x.lineTo(xx,y+30);x.stroke()}}
 // churrasqueira
 x.fillStyle='#5A2422';x.fillRect(180,180,560,560);x.fillStyle='#3A1418';x.fillRect(250,-200,420,380);x.fillStyle='#2A0E12';x.fillRect(240,400,440,220);
 const glow=.75+.25*Math.sin(t*5);g=x.createLinearGradient(0,560,0,620);g.addColorStop(0,`rgba(255,120,40,${.9*glow})`);g.addColorStop(1,'rgba(120,20,10,.9)');x.fillStyle=g;x.fillRect(260,560,400,52);
 x.strokeStyle='#8A8A92';x.lineWidth=5;for(let i=0;i<5;i++){const yy=470+i*16;x.beginPath();x.moveTo(250,yy);x.lineTo(670,yy);x.stroke()}
 for(const [sx,c] of [[300,'#7A2E1C'],[420,'#8A3A22'],[540,'#6E2A1A']]){x.fillStyle=c;for(let k=0;k<4;k++){x.beginPath();x.roundRect(sx+k*24-10,474,22,44,6);x.fill()}}
 for(let i=0;i<4;i++){const ph=(t*.35+i*.25)%1;x.fillStyle=`rgba(230,220,230,${.18*(1-ph)})`;x.beginPath();x.ellipse(460+Math.sin(ph*6+i)*30,180-ph*360,60+ph*80,40+ph*40,0,0,7);x.fill()}
 x.fillStyle='#3A1C12';for(let i=0;i<7;i++)x.fillRect(1300+i*90,300,40,560)}
// ---- beach kiosk at sunset ----
function beach(x,t){let g=x.createLinearGradient(0,-300,0,560);g.addColorStop(0,'#3A1440');g.addColorStop(.6,'#C24A5E');g.addColorStop(1,'#FFB45E');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1200);
 g=x.createLinearGradient(0,470,0,560);g.addColorStop(0,'rgba(255,214,140,.9)');g.addColorStop(1,'rgba(255,214,140,0)');x.fillStyle=g;x.beginPath();x.ellipse(960,560,170,90,0,Math.PI,0);x.fill();
 x.fillStyle='#4A2A5A';x.fillRect(-900,560,W+1800,300);x.strokeStyle='rgba(255,200,140,.45)';x.lineWidth=3;for(let i=0;i<14;i++){const yy=575+i*14,off=(t*30+i*57)%300;x.beginPath();x.moveTo(-900+off,yy);x.lineTo(-700+off+i*40,yy);x.moveTo(500+off,yy);x.lineTo(760+off,yy);x.moveTo(1300-off,yy);x.lineTo(1500-off,yy);x.stroke()}
 x.fillStyle='#E8B07A';x.fillRect(-900,760,W+1800,400);
 x.fillStyle='#3A1C12';for(const px of [-60,1980])x.fillRect(px-18,-200,36,1100);x.fillStyle='#6B4A26';x.fillRect(-300,-80,W+600,70);x.fillStyle='#8A6230';for(let i=-10;i<70;i++)x.fillRect(i*36,-10,22,40+((i*37)%30));
 x.fillStyle='#24101A';x.save();x.translate(1620,560);x.fillRect(-10,-380,20,380);for(let i=0;i<6;i++){x.save();x.translate(0,-380);x.rotate(-1.2+i*.48);x.beginPath();x.moveTo(0,0);x.quadraticCurveTo(110,-40,200,30);x.quadraticCurveTo(110,-10,0,10);x.fill();x.restore()}x.restore()}
// ---- food props, drawn on the table layer; (cx, top of table y≈805) ----
function board(f,cx,y,w){f.fillStyle='#7A4A2A';f.beginPath();f.roundRect(cx-w/2,y-14,w,24,10);f.fill();f.fillStyle='rgba(0,0,0,.25)';f.fillRect(cx-w/2,y+4,w,6)}
function meatBoard(f,cx,y=805){board(f,cx,y,320);for(let i=0;i<5;i++){f.save();f.translate(cx-120+i*56,y-20);f.rotate(-.35+i*.04);
  f.fillStyle='#4A1E10';f.beginPath();f.ellipse(0,0,40,22,0,0,7);f.fill();f.fillStyle='#C2505E';f.beginPath();f.ellipse(2,3,32,15,0,0,7);f.fill();f.fillStyle='#E07A86';f.beginPath();f.ellipse(4,5,18,7,0,0,7);f.fill();
  f.fillStyle='#F3E6C8';f.beginPath();f.ellipse(-4,-17,34,6,0,Math.PI,0);f.fill();f.restore()}
 f.strokeStyle='#C9C9D2';f.lineWidth=6;f.lineCap='round';f.beginPath();f.moveTo(cx+110,y-6);f.lineTo(cx+200,y-40);f.stroke();f.strokeStyle='#3A1C12';f.lineWidth=10;f.beginPath();f.moveTo(cx+200,y-40);f.lineTo(cx+240,y-55);f.stroke()}
function fishPlate(f,cx,y=805){f.fillStyle='#F3EDE2';f.beginPath();f.ellipse(cx,y-10,170,30,0,0,7);f.fill();f.fillStyle='#D4A24C';f.beginPath();f.moveTo(cx-120,y-24);f.quadraticCurveTo(cx-20,y-70,cx+80,y-24);f.quadraticCurveTo(cx-20,y+8,cx-120,y-24);f.fill();f.beginPath();f.moveTo(cx+80,y-24);f.lineTo(cx+125,y-52);f.lineTo(cx+125,y+4);f.closePath();f.fill();
 f.strokeStyle='#8A5A26';f.lineWidth=5;for(const q of [-70,-35,0,35]){f.beginPath();f.moveTo(cx+q-10,y-44);f.lineTo(cx+q+10,y-8);f.stroke()}f.fillStyle='#F2D27A';f.beginPath();f.moveTo(cx-150,y-12);f.lineTo(cx-110,y-40);f.lineTo(cx-100,y-8);f.closePath();f.fill();
 f.strokeStyle='#E8836A';f.lineWidth=12;f.lineCap='round';for(const q of [110,150]){f.beginPath();f.arc(cx+q-20,y-26,16,.4,3.6);f.stroke()}}
function cheeseBoard(f,cx,y=805){board(f,cx,y,340);for(const [dx,c] of [[-110,'#F2D27A'],[-30,'#E9C46A'],[60,'#F7EFDF']]){f.fillStyle=c;f.beginPath();f.moveTo(cx+dx-40,y-14);f.lineTo(cx+dx+40,y-14);f.lineTo(cx+dx+30,y-70);f.closePath();f.fill();f.fillStyle='rgba(180,120,40,.35)';f.fillRect(cx+dx-40,y-24,80,10)}
 grapes(f,cx+130,y-60,.5);f.fillStyle='#E0B87A';for(let i=0;i<3;i++)f.fillRect(cx-160+i*20,y-30,16,16)}
function pizzaBoard(f,cx,y=805){board(f,cx,y,360);f.fillStyle='#C9893A';f.beginPath();f.ellipse(cx,y-22,160,34,0,0,7);f.fill();f.fillStyle='#B0122E';f.beginPath();f.ellipse(cx,y-24,140,27,0,0,7);f.fill();f.fillStyle='#F3E2B0';for(const [dx,dy] of [[-80,-6],[-20,4],[40,-8],[90,2],[0,-14]]){f.beginPath();f.ellipse(cx+dx,y-24+dy,26,7,0,0,7);f.fill()}
 f.fillStyle='#3F6B2E';for(const [dx,dy] of [[-50,0],[60,-4],[10,6]]){f.beginPath();f.ellipse(cx+dx,y-24+dy,10,5,.6,0,7);f.fill()}}
function pudim(f,cx,y=805){f.fillStyle='#F3EDE2';f.beginPath();f.ellipse(cx,y-8,150,26,0,0,7);f.fill();f.fillStyle='#E8B85A';f.beginPath();f.moveTo(cx-100,y-12);f.lineTo(cx+100,y-12);f.lineTo(cx+80,y-120);f.lineTo(cx-80,y-120);f.closePath();f.fill();
 f.fillStyle='#8A4A1A';f.beginPath();f.ellipse(cx,y-120,80,14,0,0,7);f.fill();for(const dx of [-60,-20,30,66]){f.beginPath();f.moveTo(cx+dx-8,y-118);f.quadraticCurveTo(cx+dx,y-60-(dx%40),cx+dx+8,y-118);f.fill()}}
// small icon versions for cards
function foodIcon(g,kind,cx,cy){g.save();g.translate(cx,cy);g.scale(.62,.62);g.translate(-cx,-cy);({meat:meatBoard,fish:fishPlate,cheese:cheeseBoard,pizza:pizzaBoard,dessert:pudim})[kind](g,cx,cy+60);g.restore()}
