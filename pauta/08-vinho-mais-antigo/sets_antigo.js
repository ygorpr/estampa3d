// desenhos do vídeo "O vinho mais antigo do mundo"
function museum(x,t){let g=x.createLinearGradient(0,-300,0,900);g.addColorStop(0,'#16080C');g.addColorStop(1,'#2C0E14');x.fillStyle=g;x.fillRect(-900,-600,W+1800,1900);
 x.fillStyle='rgba(255,255,255,.03)';for(let i=-6;i<22;i++)x.fillRect(i*160,-300,3,1200);
 for(const [fx,fy,fw,fh] of [[200,120,260,200],[1560,140,240,180]]){x.fillStyle='#D4A24C';x.fillRect(fx-10,fy-10,fw+20,fh+20);x.fillStyle='#3A1E1A';x.fillRect(fx,fy,fw,fh);x.fillStyle='rgba(180,140,90,.25)';x.beginPath();x.arc(fx+fw/2,fy+fh/2,fh*.32,0,7);x.fill()}
 for(const lx of [700,1250]){const gr=x.createLinearGradient(lx,0,lx,800);gr.addColorStop(0,'rgba(255,230,180,.22)');gr.addColorStop(1,'rgba(255,230,180,0)');x.fillStyle=gr;x.beginPath();x.moveTo(lx-30,0);x.lineTo(lx+30,0);x.lineTo(lx+200,800);x.lineTo(lx-200,800);x.closePath();x.fill()}}
// a garrafa de Speyer: vidro esverdeado-amarelado, alças de golfinho, camada escura de azeite no alto
function speyerBottle(x,cx,base,s){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='rgba(0,0,0,.35)';x.beginPath();x.ellipse(0,2,80,10,0,0,7);x.fill();
 x.fillStyle='rgba(190,200,140,.55)';x.beginPath();x.moveTo(-34,0);x.quadraticCurveTo(-90,-60,-80,-170);x.quadraticCurveTo(-70,-230,-30,-250);x.lineTo(-24,-330);x.lineTo(24,-330);x.lineTo(30,-250);x.quadraticCurveTo(70,-230,80,-170);x.quadraticCurveTo(90,-60,34,0);x.closePath();x.fill();
 x.fillStyle='rgba(120,90,40,.8)';x.beginPath();x.moveTo(-76,-150);x.quadraticCurveTo(-90,-60,-34,-4);x.lineTo(34,-4);x.quadraticCurveTo(90,-60,76,-150);x.closePath();x.fill();
 x.fillStyle='rgba(40,28,14,.92)';x.fillRect(-79,-175,158,26);
 x.strokeStyle='rgba(190,200,140,.8)';x.lineWidth=10;x.lineCap='round';for(const k of [-1,1]){x.beginPath();x.moveTo(k*28,-300);x.bezierCurveTo(k*90,-320,k*110,-250,k*72,-215);x.stroke();x.fillStyle='rgba(190,200,140,.8)';x.beginPath();x.arc(k*96,-290,8,0,7);x.fill()}
 x.fillStyle='rgba(255,255,255,.25)';x.beginPath();x.ellipse(-46,-120,10,50,-.1,0,7);x.fill();x.fillStyle='#8A6A3A';x.fillRect(-26,-342,52,14);x.restore()}
function vitrine(x,cx,base,w,h,s){x.save();x.fillStyle='#2A1410';x.fillRect(cx-w/2-20,base,w+40,90);x.fillStyle='#D4A24C';x.fillRect(cx-w/2-20,base,w+40,8);
 speyerBottle(x,cx,base,s);x.fillStyle='rgba(200,230,240,.08)';x.fillRect(cx-w/2,base-h,w,h);x.strokeStyle='rgba(220,240,250,.45)';x.lineWidth=4;x.strokeRect(cx-w/2,base-h,w,h);x.strokeStyle='rgba(255,255,255,.35)';x.lineWidth=3;x.beginPath();x.moveTo(cx-w/2+20,base-h+30);x.lineTo(cx-w/2+70,base-h+120);x.stroke();x.restore()}
