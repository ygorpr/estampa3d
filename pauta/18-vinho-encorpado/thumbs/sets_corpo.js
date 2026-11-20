// ===== Vídeo 18 — O que é vinho encorpado? — objetos =====
// copo de leite (tumbler) com base em (cx,base): kind 'desnatado' (ralo, azulado, translúcido), 'integral' (branco opaco),
// 'creme' (creme de leite grosso, marfim, com a borda grossa grudada no vidro). Líquido SEMPRE recortado dentro do copo.
const MILK={desnatado:{c:'rgba(226,236,244,.62)',top:'rgba(240,248,255,.8)',lv:.62},integral:{c:'#F6F1E6',top:'#FFFFFF',lv:.66},creme:{c:'#F1E2BE',top:'#FFF4D8',lv:.7}};
function milkGlass(x,cx,base,s,kind){const m=MILK[kind];x.save();x.translate(cx,base);x.scale(s,s);
 const cup=()=>{x.beginPath();x.moveTo(-40,-130);x.lineTo(-33,-4);x.quadraticCurveTo(-32,0,-26,0);x.lineTo(26,0);x.quadraticCurveTo(32,0,33,-4);x.lineTo(40,-130);x.closePath()};
 x.fillStyle='rgba(0,0,0,.3)';x.beginPath();x.ellipse(2,2,40,7,0,0,7);x.fill();cup();x.fillStyle='rgba(255,236,210,.12)';x.fill();
 x.save();cup();x.clip();const tp=-8-m.lv*120;x.fillStyle=m.c;x.fillRect(-50,tp,100,140);x.fillStyle=m.top;x.beginPath();x.ellipse(0,tp,40,6,0,0,7);x.fill();
 if(kind=='creme'){x.fillStyle=m.c;for(const [dx,h] of [[-30,22],[-8,14],[18,26],[34,12]]){x.beginPath();x.ellipse(dx,tp+h/2,7,h/2+4,0,0,7);x.fill()}}
 if(kind=='desnatado'){x.fillStyle='rgba(180,200,220,.25)';x.fillRect(-50,tp+20,100,10)}
 x.fillStyle='rgba(255,255,255,.22)';x.fillRect(-30,tp+8,6,-tp-16);x.restore();
 x.fillStyle='rgba(255,255,255,.18)';x.fillRect(-33,-6,66,6);cup();x.strokeStyle='rgba(255,240,220,.6)';x.lineWidth=3;x.stroke();x.restore()}
// três estilos de vinho: leve (rubi claro), médio (rubi), encorpado (quase preto)
const BODY={leve:'#DA7088',medio:'#8E1B3A',encorpado:'#1C0207'};
