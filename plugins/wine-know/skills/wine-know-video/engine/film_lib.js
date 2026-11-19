// Dark Divino style sheet: 0 cellar wide, 1 title card, 2 fridge, 3 info card
function glassW(x,bx,by,s,lv,col,flute=false){x.save();x.translate(bx,by);x.scale(s,s);const bw=flute?24:42,top=flute?-210:-178;
 const bowl=()=>{x.beginPath();x.moveTo(-6,-72);x.quadraticCurveTo(-bw-4,-92,-bw,-136);x.lineTo(-bw+4,top);x.lineTo(bw-4,top);x.lineTo(bw,-136);x.quadraticCurveTo(bw+4,-92,6,-72);x.closePath()};
 x.fillStyle='rgba(245,232,210,.55)';x.beginPath();x.ellipse(0,0,34,7,0,0,7);x.fill();x.fillRect(-4,-74,8,74);bowl();x.fillStyle='rgba(255,236,210,.14)';x.fill();
 if(lv>0){x.save();bowl();x.clip();const tp=-74-lv*(-top-74);x.fillStyle=col;x.fillRect(-60,tp,120,200);x.fillStyle='rgba(255,220,200,.3)';x.fillRect(-60,tp,120,4);if(flute){x.fillStyle='rgba(255,250,220,.7)';const r=rng(5);for(let i=0;i<9;i++)x.fillRect(-14+r()*28,tp+10+r()*90,3,3)}x.restore()}
 bowl();x.strokeStyle='rgba(255,240,220,.6)';x.lineWidth=3;x.stroke();x.strokeStyle='rgba(255,255,255,.4)';x.lineWidth=4;x.beginPath();x.moveTo(-bw+12,top+20);x.quadraticCurveTo(-bw+6,-120,-bw+18,-98);x.stroke();x.restore()}
function pose(o){return Object.assign({s:1,face:1,noLegs:true,breath:1},o)}
function serif(txt,cx,cy,size,col='#F3E6C8',style=''){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.font=`${style} 600 ${size}px Cormorant`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=col;ctx.fillText(txt,cx,cy);ctx.restore()}
