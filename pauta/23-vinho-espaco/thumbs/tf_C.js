// 23 · Opção C (ESPELHADA: texto à direita) — O ESPAÇO / ENVELHECE VINHO? — bar com janela para o espaço (Terra e Estação Espacial);
// o Sommelier compara duas taças pela haste: a da "TERRA" (rubi) e a do "ESPAÇO" (cor de tijolo, de vinho mais velho), com cara de desconfiado
function thumbFrame(t){
 thumbTH(t,{right:true,set:(x,t)=>spaceBar(x,t,{lamps:[1000,1900]}),back:(h,t)=>spaceFG(h,{earth:[1040,300,180],iss:[1770,240,.38,-.1]},t),blur:2,dim:.26,cam:{x:1577,y:500,z:1.7},
 hl:[[1165,660],90],hr:[[1495,660],90],look:.1,face:{brow:1.3,wide:.5,sad:-.25,open:0,mouth:.2,tilt:.06},
 l1:'O ESPAÇO',l2:'ENVELHECE VINHO?',s1:120,s2:110,
 front:(f,hl,hr)=>{cellarTable(f);glassW(f,hl[0],hl[1]+36,1,.55,'#7A0F26');gripHand(f,hl[0],hl[1],0,C10,.85);tagHang(f,hl[0],hl[1]+80,'TERRA',.95);
  glassW(f,hr[0],hr[1]+36,1,.55,'#9A4420');gripHand(f,hr[0],hr[1],0,C10,.85);tagHang(f,hr[0],hr[1]+80,'ESPAÇO',.95)}})}
