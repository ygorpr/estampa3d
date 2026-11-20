// 18 · Opção A — O QUE É VINHO / ENCORPADO? — bar Dark Divino; no balcão, três taças (leve · médio · encorpado) e, na frente
// ao lado de cada uma, o copo de leite que corresponde (desnatado · integral · creme de leite); as mãos apoiadas nas taças das pontas, pela haste
function thumbFrame(t){const P=[1140,1310,1480];thumbTH(t,{set:(x,t)=>barWall(x,t),blur:8,cam:{x:1080,y:522,z:1.7},
 hl:[[P[0],752],40],hr:[[P[2],752],40],face:{brow:1.3,wide:1.1,sad:0,open:.45,mouth:.2},
 l1:'O QUE É VINHO',l2:'ENCORPADO?',s1:96,s2:120,
 front:(f,hl,hr)=>{cellarTable(f);const K=['leve','medio','encorpado'],M=['desnatado','integral','creme'];
  for(let i=0;i<3;i++)glassW(f,P[i],792,.9,.42,BODY[K[i]]);gripHand(f,hl[0],hl[1],0,C10,.8);gripHand(f,hr[0],hr[1],0,C10,.8);
  for(let i=0;i<3;i++)milkGlass(f,P[i]+74,808,.56,M[i])}})}
