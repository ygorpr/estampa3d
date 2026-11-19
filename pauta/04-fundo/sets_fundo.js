// desenhos do vídeo "Para que serve o buraco no fundo da garrafa?"
// garrafa de cabeça para baixo, segura pelo gargalo, mostrando o fundo afundado (punt)
function invBottle(x,hx,hy,s){x.save();x.translate(hx,hy);x.scale(s,s);x.rotate(Math.PI);const ef=x.ellipse;let sk=true;x.ellipse=function(...a){if(sk){sk=false;return}return ef.apply(this,a)};bottleS(x,[0,250],1,'red');x.ellipse=ef;x.restore();puntView(x,hx,hy-250*s,s)}
function puntView(x,cx,cy,s,glow=0){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#2C5244';x.beginPath();x.ellipse(0,0,38,13,0,0,7);x.fill();
 x.fillStyle='#0E1E18';x.beginPath();x.ellipse(0,1,24,8,0,0,7);x.fill();x.strokeStyle='rgba(255,220,170,.55)';x.lineWidth=2.5;x.beginPath();x.ellipse(0,0,37,12,0,Math.PI*1.05,Math.PI*1.7);x.stroke();
 if(glow>0){x.strokeStyle=`rgba(242,210,122,${glow})`;x.lineWidth=4;x.beginPath();x.ellipse(0,0,50,20,0,0,7);x.stroke()}x.restore()}
