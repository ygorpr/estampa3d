// Vídeo 13 — Por que a taça tem haste?: balcão do bar e pedestal/vitrine do museu do vidro (camada da frente)
function barCounterH(f){let g=f.createLinearGradient(0,800,0,1200);g.addColorStop(0,'#7A4A26');g.addColorStop(.05,'#4A2614');g.addColorStop(1,'#1A0A06');f.fillStyle=g;f.fillRect(-900,800,W+1800,600);f.fillStyle='rgba(255,210,150,.5)';f.fillRect(-900,800,W+1800,4)}
function museumFront(f){let g=f.createLinearGradient(0,800,0,1200);g.addColorStop(0,'#2A1014');g.addColorStop(1,'#0E0406');f.fillStyle=g;f.fillRect(-900,800,W+1800,600);f.fillStyle='#D4A24C';f.fillRect(-900,800,W+1800,5);f.fillStyle='rgba(212,162,76,.25)';f.fillRect(-900,818,W+1800,2)}
// vitrine do museu do vidro: pedestal + caixa de vidro com uma taça antiga dentro (fundo)
function vitrine(x,cx,base,s,t=0){x.save();x.translate(cx,base);x.scale(s,s);x.fillStyle='#3A1A12';x.fillRect(-90,-260,180,260);x.fillStyle='#D4A24C';x.fillRect(-96,-266,192,10);x.fillRect(-96,-6,192,8);
 x.fillStyle='rgba(220,235,245,.10)';x.fillRect(-80,-520,160,254);x.strokeStyle='rgba(255,240,220,.45)';x.lineWidth=3;x.strokeRect(-80,-520,160,254);x.fillStyle='#D4A24C';x.fillRect(-84,-526,168,8);
 glassW(x,0,-280,1.05,.0,'#000');x.fillStyle='rgba(255,230,180,.18)';x.beginPath();x.moveTo(-60,-520);x.lineTo(60,-520);x.lineTo(80,-270);x.lineTo(-80,-270);x.closePath();x.fill();x.restore()}
