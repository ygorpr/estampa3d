// 35 · Opção A — O VINHEDO MAIS / ALTO DO MUNDO — vinhedo em terraços de pedra no alto do Tibete, ao entardecer: picos nevados do Himalaia,
// céu azul-escuro limpo, sol forte com raios, bandeirinhas de oração ao longe; o Sommelier, de cachecol vinho por cima do colete (frio lá em cima),
// atrás do balcão de pedra, ergue a taça de tinto pela haste e apoia a outra mão na garrafa (pelo gargalo, rótulo livre); olhar maravilhado
function thumbFrame(t){
 thumbTH(t,{set:(x,t)=>tibeteVinhedo(x,t,{sun:[1590,215]}),blur:2.5,dim:.12,cam:{x:1080,y:500,z:1.7},
 hl:[[1168,640],100],hr:[[1488,610],80],look:-.1,face:{lookY:-.3,brow:1.6,wide:1.1,sad:0,open:.35,mouth:.2},
 l1:'O VINHEDO MAIS',l2:'ALTO DO MUNDO',s1:100,s2:110,
 front:(f,hl,hr,hp)=>{balcaoPedra(f);cachecol(f,hp,1);wineBottle(f,hr[0],hr[1]+258,.95);gripHand(f,hr[0],hr[1],0,C10,.85);
  glassW(f,hl[0],hl[1]+46,1.05,.5,'#6E0F24');gripHand(f,hl[0],hl[1],0,C10,.85)}})}
