// Vídeo 16 — As "lágrimas" do vinho: taça com película de vinho, arcos ("janelas de igreja") e gotas escorrendo
// TUDO recortado DENTRO do bojo (mesma forma de glassW) — nada na haste nem fora do vidro.
function bowlPathL(x){const bw=42,top=-178;x.beginPath();x.moveTo(-6,-72);x.quadraticCurveTo(-bw-4,-92,-bw,-136);x.lineTo(-bw+4,top);x.lineTo(bw-4,top);x.lineTo(bw,-136);x.quadraticCurveTo(bw+4,-92,6,-72);x.closePath()}
function tearGlass(x,bx,by,s,lv=.3,col='#6E1630',seed=9,film=.72){glassW(x,bx,by,s,lv,col);x.save();x.translate(bx,by);x.scale(s,s);bowlPathL(x);x.clip();
 const tp=-74-lv*(178-74),ft=tp-film*(tp+170),r=rng(seed),n=6,w0=-46,w1=46,dw=(w1-w0)/n;
 // película fina de vinho grudada no vidro, com a borda de cima em arcos
 x.fillStyle='rgba(120,22,46,.30)';x.beginPath();x.moveTo(w0,tp+2);x.lineTo(w0,ft+8);
 for(let i=0;i<n;i++){const a=w0+i*dw,b=a+dw,h=6+r()*6;x.quadraticCurveTo(a+dw/2,ft-h*1.6,b,ft+8)}x.lineTo(w1,tp+2);x.closePath();x.fill();
 x.strokeStyle='rgba(150,30,58,.75)';x.lineWidth=2.2;x.beginPath();x.moveTo(w0,ft+8);const r2=rng(seed);for(let i=0;i<n;i++){const a=w0+i*dw,b=a+dw,h=6+r2()*6;x.quadraticCurveTo(a+dw/2,ft-h*1.6,b,ft+8)}x.stroke();
 // lágrimas: filetes que descem dos encontros dos arcos até o vinho, engrossando numa gota na ponta
 for(let i=1;i<n;i++){const px=w0+i*dw+(r()-.5)*3,y0=ft+4,len=(tp-ft)*(.45+r()*.5),y1=Math.min(tp-3,y0+len),R=3.4+r()*1.2;
  x.fillStyle='rgba(112,16,40,.9)';x.beginPath();x.moveTo(px-.9,y0);x.lineTo(px+.9,y0);x.quadraticCurveTo(px+1.6,y1-R*2.4,px+R,y1-R);x.arc(px,y1-R,R,0,Math.PI);x.quadraticCurveTo(px-1.6,y1-R*2.4,px-.9,y0);x.closePath();x.fill();
  x.fillStyle='rgba(255,230,230,.6)';x.beginPath();x.arc(px-R*.35,y1-R*1.25,R*.32,0,7);x.fill();
  if(r()<.6){const yd=y0+(y1-y0)*(.25+r()*.3),rd=1.8+r();x.fillStyle='rgba(112,16,40,.85)';x.beginPath();x.arc(px+dw*.5*(r()<.5?-1:1)*.5,yd,rd,0,7);x.fill()}}
 // brilho do vidro por cima
 x.restore();x.save();x.translate(bx,by);x.scale(s,s);x.strokeStyle='rgba(255,255,255,.35)';x.lineWidth=4;x.beginPath();x.moveTo(-30,-158);x.quadraticCurveTo(-36,-120,-24,-98);x.stroke();x.restore()}
// balcão de madeira do bar (camada da frente)
function barCounterL(f){let g=f.createLinearGradient(0,800,0,1200);g.addColorStop(0,'#7A4A26');g.addColorStop(.05,'#4A2614');g.addColorStop(1,'#1A0A06');f.fillStyle=g;f.fillRect(-900,800,W+1800,600);f.fillStyle='rgba(255,210,150,.5)';f.fillRect(-900,800,W+1800,4)}
