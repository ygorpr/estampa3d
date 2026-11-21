// ===== Vídeo 37 — Como o vinho tem cheiro de maracujá sem ter maracujá? — objetos =====
// cenário: barDD (bar Dark Divino à noite, de sets_girar.js)
// maracujaMeio: maracujá-amarelo cortado ao meio, visto de frente (casca amarela pintadinha, parte branca, polpa dourada com sementes pretas)
// maracujaInteiro: maracujá-amarelo inteiro (casca com pintinhas e cabinho)
// sbGlass: taça de vinho branco (Sauvignon Blanc: palha-esverdeado), vinho SEMPRE dentro do bojo
// aromaFruta: fiozinhos de aroma saindo da taça que formam, no alto, o "fantasma" de um maracujá (só contorno e sementes, translúcido)
// sbBottle: garrafa de vinho branco (vidro verde-claro, rótulo creme "SAUVIGNON BLANC") — segurada sempre pelo gargalo
// palmaMao: mão aberta com a palma para cima (para apoiar o maracujá)
function maracujaMeio(x,cx,cy,r,a=0){x.save();x.translate(cx,cy);x.rotate(a);
 // casca (anel amarelo com pintinhas)
 let g=x.createRadialGradient(-r*.3,-r*.3,r*.2,0,0,r);g.addColorStop(0,'#F2D24A');g.addColorStop(1,'#B88A1A');x.fillStyle=g;x.beginPath();x.arc(0,0,r,0,7);x.fill();
 // parte branca (albedo)
 x.fillStyle='#F6EEDC';x.beginPath();x.arc(0,0,r*.86,0,7);x.fill();
 // polpa: gel dourado-alaranjado com sementes pretas
 g=x.createRadialGradient(0,0,r*.1,0,0,r*.74);g.addColorStop(0,'#F7B53A');g.addColorStop(1,'#E08A18');x.fillStyle=g;x.beginPath();x.arc(0,0,r*.74,0,7);x.fill();
 const R=rng(37);for(let i=0;i<34;i++){const an=R()*7,d=Math.sqrt(R())*r*.62,sx=Math.cos(an)*d,sy=Math.sin(an)*d;
  x.fillStyle='rgba(255,220,120,.6)';x.beginPath();x.ellipse(sx,sy,r*.09,r*.07,an,0,7);x.fill();x.fillStyle='#1A1008';x.beginPath();x.ellipse(sx,sy,r*.055,r*.04,an,0,7);x.fill()}
 x.fillStyle='rgba(255,255,255,.35)';x.beginPath();x.ellipse(-r*.3,-r*.35,r*.18,r*.08,-.6,0,7);x.fill();x.restore()}
function maracujaInteiro(x,cx,cy,r,a=0){x.save();x.translate(cx,cy);x.rotate(a);let g=x.createRadialGradient(-r*.35,-r*.35,r*.1,0,0,r);g.addColorStop(0,'#F7DC5A');g.addColorStop(.7,'#D9A82A');g.addColorStop(1,'#9A7414');x.fillStyle=g;
 x.beginPath();x.ellipse(0,0,r,r*1.06,0,0,7);x.fill();const R=rng(8);x.fillStyle='rgba(120,90,20,.35)';for(let i=0;i<22;i++){const an=R()*7,d=R()*r*.85;x.beginPath();x.arc(Math.cos(an)*d,Math.sin(an)*d,1.5+R()*2,0,7);x.fill()}
 x.strokeStyle='#5A6A2A';x.lineWidth=r*.1;x.lineCap='round';x.beginPath();x.moveTo(0,-r*1.02);x.quadraticCurveTo(r*.1,-r*1.3,r*.32,-r*1.38);x.stroke();x.restore()}
const SBG={bw:50,top:-214,neck:-84};
function sbBowl(x){const {bw,top,neck}=SBG;x.beginPath();x.moveTo(-6,neck);x.bezierCurveTo(-bw-12,neck-16,-bw-6,-170,-bw+14,top);x.lineTo(bw-14,top);x.bezierCurveTo(bw+6,-170,bw+12,neck-16,6,neck);x.closePath()}
function sbGlass(x,bx,by,s,lv=.42){x.save();x.translate(bx,by);x.scale(s,s);const {bw,top,neck}=SBG;
 x.fillStyle='rgba(245,232,210,.55)';x.beginPath();x.ellipse(0,0,38,8,0,0,7);x.fill();x.fillRect(-4,neck+2,8,-neck-2);
 sbBowl(x);x.fillStyle='rgba(255,236,210,.12)';x.fill();
 x.save();sbBowl(x);x.clip();const lvl=neck-lv*(neck-top);let g=x.createLinearGradient(0,lvl,0,neck);g.addColorStop(0,'rgba(238,226,140,.85)');g.addColorStop(1,'rgba(214,196,90,.9)');x.fillStyle=g;x.fillRect(-80,lvl,160,200);
 x.fillStyle='rgba(255,250,220,.6)';x.fillRect(-80,lvl,160,3);x.restore();
 sbBowl(x);x.strokeStyle='rgba(255,240,220,.55)';x.lineWidth=2.4;x.stroke();x.fillStyle='rgba(255,255,255,.3)';x.fillRect(-bw+16,top+14,5,60);x.restore()}
// fiozinhos de aroma da taça e o maracujá-fantasma (fx,fy = centro do fantasma em mundo)
function aromaFruta(x,bx,by,s,fx,fy,fr,t=0,al=.75){const top=[bx,by+SBG.top*s];x.save();x.lineCap='round';
 for(let i=0;i<3;i++){const o=(i-1)*16*s;x.strokeStyle=`rgba(242,210,122,${al*(1-i*.15)})`;x.lineWidth=3.2;x.beginPath();x.moveTo(top[0]+o,top[1]-6);
  for(let k=1;k<=16;k++){const u=k/16,px=top[0]+o+(fx-top[0]-o)*u+Math.sin(u*6+i*1.7+t*2)*14*s*(1-u),py=top[1]-6+(fy+fr-top[1]+6)*u;x.lineTo(px,py)}x.stroke()}
 // fantasma: o maracujá cortado, translúcido, com contorno tracejado dourado
 x.globalAlpha=al*.8;maracujaMeio(x,fx,fy,fr,.2);x.globalAlpha=al;x.setLineDash([12,8]);x.strokeStyle='rgba(242,210,122,.95)';x.lineWidth=3.4;x.beginPath();x.arc(fx,fy,fr+10,0,7);x.stroke();x.setLineDash([]);
 x.restore()}
// garrafa de vinho branco (verde-claro), base em (bx,by)
function sbBottle(x,bx,by,s=1){x.save();x.translate(bx,by);x.scale(s,s);x.fillStyle='rgba(0,0,0,.35)';x.beginPath();x.ellipse(6,2,50,8,0,0,7);x.fill();
 let g=x.createLinearGradient(-38,0,38,0);g.addColorStop(0,'#1E3424');g.addColorStop(.35,'#4A6E3E');g.addColorStop(1,'#1C3020');x.fillStyle=g;
 x.beginPath();x.moveTo(-38,0);x.lineTo(-38,-180);x.quadraticCurveTo(-38,-222,-13,-236);x.lineTo(-13,-276);x.lineTo(13,-276);x.lineTo(13,-236);x.quadraticCurveTo(38,-222,38,-180);x.lineTo(38,0);x.closePath();x.fill();
 x.fillStyle='rgba(238,226,140,.22)';x.fillRect(-34,-176,68,172);x.fillStyle='rgba(255,230,160,.25)';x.fillRect(-28,-184,7,174);
 x.fillStyle='#D4C07A';x.beginPath();x.roundRect(-14,-290,28,56,4);x.fill();x.fillStyle='#D4A24C';x.fillRect(-14,-246,28,4);
 x.fillStyle='#F3E6C8';x.beginPath();x.roundRect(-34,-150,68,92,6);x.fill();x.strokeStyle='#D4A24C';x.lineWidth=2.5;x.strokeRect(-29,-145,58,82);
 x.fillStyle='#5E1428';x.font='900 9.5px Cinzel';x.textAlign='center';x.textBaseline='middle';x.fillText('SAUVIGNON',0,-118);x.fillText('BLANC',0,-104);x.fillStyle='#D4A24C';x.fillRect(-16,-92,32,2.5);
 x.restore()}
// mão aberta de palma para cima (apoio), dedos para o lado dir
function palmaMao(x,hx,hy,dir,ch,s){x.save();x.translate(hx,hy);x.scale(dir*s,s);x.fillStyle=ch.hand;x.beginPath();x.roundRect(-26,-10,52,30,14);x.fill();
 x.strokeStyle=ch.hand;x.lineCap='round';x.lineWidth=11;for(let i=0;i<4;i++){x.beginPath();x.moveTo(18,-4+i*7);x.lineTo(40,-10+i*8);x.stroke()}x.lineWidth=12;x.beginPath();x.moveTo(-20,-4);x.lineTo(-30,-22);x.stroke();
 x.strokeStyle=ch.finger;x.lineWidth=2;x.beginPath();x.moveTo(-14,8);x.lineTo(14,8);x.stroke();x.restore()}
