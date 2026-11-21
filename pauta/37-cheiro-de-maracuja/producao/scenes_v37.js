// ---------- cenas do vídeo 37 "Como o vinho tem cheiro de maracujá sem ter maracujá?" — bar Dark Divino (thumb C viva); cena i = fala i ----------
// Mão esquerda sempre na haste da taça de Sauvignon Blanc (glassT); mão direita de descanso ATRÁS da garrafa (rótulo livre).
// Inserções com dissolve: cozinha (4), adega com tanques de inox (10–11), Marlborough (17, 19), serra catarinense (21).
BST.sb=1;{const _bS=bottleS;bottleS=function(x,b,s,st){if(st=='sb')return sbBottle(x,b[0],b[1],s*.95);return _bS(x,b,s,st)}}
const BAR=(x,t)=>barDD(x,t,{lamps:[560,1500]});
const PALE='#E6D27A';
const REST_K=[[0,860,812,0],[999,860,812,0]];
// cheirar a taça: ergue pela haste até o nariz, pausa, volta
const SNIFF_K=[[0,860,812,0],[.3,860,812,0],[1.1,812,612,-.04],[3.2,812,612,-.04],[4,860,812,0],[99,860,812,0]];
function fruitPlate(f){f.fillStyle='rgba(0,0,0,.35)';f.beginPath();f.ellipse(1330,818,110,14,0,0,7);f.fill();f.fillStyle='#F3E6C8';f.beginPath();f.ellipse(1330,810,104,18,0,0,7);f.fill();f.strokeStyle=GOLD;f.lineWidth=3;f.stroke();
 maracujaMeio(f,1290,782,34,.2);maracujaInteiro(f,1372,778,30,.3)}
const B37={set:BAR,front:cellarTable,bottles:[['sb',1100]],candles:[[560,60]],sip:0,keys:REST_K,wine:.42,wineCol:PALE,props:(f,t)=>fruitPlate(f)};
// talk com a taça em repouso (sip fixo) ou cheirando a partir da palavra w
const TK=(o,sniffW)=>(t,c,s)=>{const sp=sniffW?TWS(s,sniffW)-.3:T[s];return tk(Object.assign({},B37,{sip:sp,keys:sniffW?SNIFF_K:REST_K}),Object.assign({},o,{props:(f,t_)=>{fruitPlate(f);if(o.props)o.props(f,t_,s)}}))(t,c,s)};
G.bunch={l:[[790,776],40],r:[[1190,520],100]};G.fruitUp={l:[[790,776],40],r:[[1046,500],150]};G.laugh={l:[[790,776],40],r:[[1150,640],80],ro:1};
const SCX=(set,fn,dim=0)=>(t,c,s)=>{const x=layer('w',{x:960,y:540,z:1,b:[0,0,0]});set(x,t,s);comp([['w',0]]);if(dim>0){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle=`rgba(20,6,10,${dim})`;ctx.fillRect(0,0,W,H);ctx.restore()}
 const g=layer('g',null);fn(g,t,s);blit(ctx,L.g,0)};
const fo=(t,s,w,d=.5)=>1-AW(t,s,w,d);
const SC=[null,
 // 1 química · fermento · nariz
 TK({gest:[[0,'open'],[3,'point'],[6,'open']],chips:[['QUÍMICA',430,280,'química'],['FERMENTO',430,400,'fermento'],['NARIZ: UM DETECTOR',430,520,'nariz']],face:t=>({brow:.9,mouth:.8})}),
 // 2 Sauvignon Blanc: uva branca; balões de cheiro: maracujá e toranja
 C3(BAR,null,[ART(0,(g,t)=>{grapesC(g,430,470,2.3,'#B8C860');g.fillStyle='#4A6A2A';g.fillRect(424,330,12,40)}),PQ(430,760,520,110,'SAUVIGNON BLANC','UVA BRANCA','sauvignon',44,26),
  ART(0,(g,t)=>{sbGlass(g,1100,800,1.6)}),ART('maracujá',(g,t,s,a)=>smellBalloon(g,900,330,120,1070,440,a,(g,x,y,r)=>maracujaMeio(g,x,y,r,.2))),
  ART('toranja',(g,t,s,a)=>smellBalloon(g,1380,330,120,1130,440,a,(g,x,y,r)=>grapefruit(g,x,y,r))),LB('MARACUJÁ!',900,175,'maracujá',38),LB('TORANJA',1380,175,'toranja',38),
  CH('PRIMA AMARGA DA LARANJA',1560,640,'prima')],.62),
 // 3 tióis = moléculas com enxofre
 C3(BAR,'O SEGREDO: TIÓIS',[ART('tióis',(g,t)=>molecule(g,960,500,1.5,t)),CH('TIÓIS = MOLÉCULAS COM ENXOFRE',960,780,'enxofre'),ART('enxofre',(g,t,s,a)=>{arrow(g,1250,330,1040,322,GOLD2,6);goldText(g,'S = ENXOFRE',1420,330,40,'Cinzel',900)}),ST(1500,620,'CHEIRO FORTE','fortíssimo',.5)],.7),
 // 4 cozinha: o gás puro não tem cheiro; colocam mercaptana (um tiol) para perceber o vazamento
 SCX((x,t)=>{fakerKitchen(x,t)},(g,t,s)=>{stove(g,560,860,1);const sm=AW(t,s,'mercaptana',1);gasBottle(g,1000,880,1,t,sm);
  const sx=1450,sb=880;npc(g,sx,sb+120,.86,t,{ch:C10,face:-1,look:-.5,lookY:.2,brow:fo(t,s,'mercaptana')*.4+1.1*(1-fo(t,s,'mercaptana')),sad:AW(t,s,'mercaptana')*.5,mouth:.4-AW(t,s,'mercaptana')*.3,open:speak(t)*.6,hands:{l:[-95,205,95],r:[-70,40,140]},ro:AW(t,s,'vazamento')>.5});
  chip(g,1000,240,'GÁS PURO: SEM CHEIRO',AW(t,s,'puro'));chip(g,1000,350,'MERCAPTANA = UM TIOL',AW(t,s,'mercaptana'));chip(g,540,240,'PRA PERCEBER O VAZAMENTO',AW(t,s,'vazamento'))},.1),
 // 5 de volta ao bar: o nome trava-língua "3-mercapto-hexanol" (a placa balança, ele ri)
 TK({gest:[[0,'open'],[3.4,'laugh'],[7.4,'rest']],chips:[['OUTROS TIÓIS',430,260,'outros'],['BEM MAIS SIMPÁTICOS',430,370,'simpáticos']],face:t=>({brow:.7,mouth:.95}),
  over:(g,t,s)=>{const a=AW(t,s,'mercapto',.45);if(a<=0)return;fade(g,a,()=>{g.save();g.translate(440,560);g.rotate(Math.sin(t*9)*.05*a);plaque(g,0,0,640,120);goldText(g,'3-MERCAPTO-HEXANOL',0,2,40,'Cinzel',900);g.restore()})}}),
 // 6 a mesma molécula no maracujá-amarelo e na goiaba (linha dourada até a taça)
 C3(BAR,'A MESMA MOLÉCULA',[ART('amarelo',(g,t)=>{maracujaMeio(g,420,610,120,.2);goldText(g,'MARACUJÁ-AMARELO',420,770,32,'Cinzel',900)}),ART('goiaba',(g,t)=>{guava(g,860,620,110,.1);goldText(g,'GOIABA',860,770,32,'Cinzel',900)},.35),
  ART(0,(g,t)=>{sbGlass(g,1460,790,1.45);goldText(g,'NO VINHO',1460,830,32,'Cinzel',900)}),
  ART('surpresa',(g,t)=>molecule(g,1460,330,.55,t)),ART('amarelo',(g,t)=>molecule(g,420,350,.55,t)),ART('goiaba',(g,t)=>molecule(g,860,350,.55,t)),
  ART('amarelo',(g,t,s,a)=>{g.setLineDash([14,10]);g.strokeStyle=GOLD2;g.lineWidth=5;g.beginPath();g.moveTo(420,440);g.lineTo(lerp(420,1460,a),440);g.stroke();g.setLineDash([])}),CH('O NOSSO MARACUJÁ DE SUCO',640,855,'suco')],.66),
 // 7 vinho = fruta: sinal de igual dourado
 C3(BAR,'NÃO É IMAGINAÇÃO',[ART(0,(g,t)=>sbGlass(g,560,800,1.9)),ART('fruta',(g,t)=>maracujaMeio(g,1360,560,170,.2)),ART('literalmente',(g,t)=>goldText(g,'=',960,540,200,'Cinzel',900)),
  CH('A MESMA MOLÉCULA DE CHEIRO',960,830,'molécula')],.7),
 // 8 espremer a uva e cheirar o suco: quase não sente
 TK({gest:[[0,'rest'],[1.2,'bunch'],[5.8,'thinking'],[7.6,'rest']],props:(f,t,s)=>{const seq=[[0,'rest'],[1.2,'bunch'],[5.8,'thinking'],[7.6,'rest']].map(q=>[T[s]+q[0],q[1]]),gs=gest(t,seq),[hx,hy]=gs.r[0],on=kf(t-T[s],[[0,0],[1.4,0],[1.7,1],[5.6,1],[5.9,0]]);
   f.fillStyle='rgba(243,230,200,.25)';f.beginPath();f.roundRect(1170,730,70,82,8);f.fill();f.strokeStyle='rgba(243,230,200,.7)';f.lineWidth=3;f.stroke();const jl=seg(t,T[s]+1.8,T[s]+5.2);f.fillStyle='rgba(214,206,120,.8)';f.fillRect(1173,809-jl*50,64,jl*50);
   if(on>0)fade(f,on,()=>{grapesC(f,hx,hy+70,1.05,'#B8C860');for(let i=0;i<3;i++){const u=((t*1.4+i/3)%1);f.fillStyle='rgba(214,206,120,.9)';f.beginPath();f.ellipse(1205,hy+150+u*(730-hy-150),5,8,0,0,7);f.fill()}})},
  chips:[['O MISTÉRIO',430,260,'mistério'],['SUCO: QUASE SEM CHEIRO',430,380,'quase']],face:t=>({brow:.4,sad:.3,mouth:.4}),
  over:(g,t,s)=>{const a=AW(t,s,'quase',.4);if(a>0)fade(g,a,()=>goldText(g,'?',430,560,180,'Cinzel',900))}}),
 // 9 na uva o tiol está preso: molécula com cadeado; o perfume trancado no cofre
 C3(BAR,'O CHEIRO ESTÁ PRESO',[ART(0,(g,t)=>{halvedGrape(g,400,520,150)}),ART('preso',(g,t)=>molecule(g,820,520,.75,t,{lock:1,glow:.2})),CH('GRUDADO = SEM CHEIRO',820,800,'grudado'),
  ART('perfume',(g,t)=>{safeBox(g,1470,520,1.1,0,t);goldText(g,'UM PERFUME NO COFRE',1470,780,34,'Cinzel',900)})],.68),
 // 10 quem abre o cofre: a levedura (fermento), bichinho microscópico que come açúcar e faz álcool
 C3(winery,'O FERMENTO: A LEVEDURA',[ART(0,(g,t)=>microscope(g,330,820,1.1)),ART('levedura',(g,t)=>{g.save();g.beginPath();g.arc(1050,520,290,0,7);g.fillStyle='rgba(240,236,210,.18)';g.fill();g.clip();
   for(const [x,y,r,p] of [[930,430,62,0],[1160,470,54,1.1],[1020,640,58,2.2]])yeastFace(g,x,y,r,t,0,p);const R=rng(4);for(let i=0;i<9;i++)sugarCube(g,860+R()*380,330+R()*380,18+R()*8);g.restore();
   g.strokeStyle=GOLD;g.lineWidth=10;g.beginPath();g.arc(1050,520,290,0,7);g.stroke()}),CH('LEVEDURA = FERMENTO',1050,860,'levedura'),
  ART('açúcar',(g,t)=>{goldText(g,'AÇÚCAR',1560,380,38,'Cinzel',900);arrow(g,1560,420,1560,520,GOLD2,6)}),LB('ÁLCOOL',1560,570,'álcool',38)],.64),
 // 11 na fermentação a levedura corta a ligação e solta o cheiro (nuvem de maracujá sobe do tanque)
 SCX(winery,(g,t,s)=>{inoxTank(g,560,900,1.0,t);const cut=AW(t,s,'corta',.5),out=AW(t,s,'solta',1.2);
  g.save();g.beginPath();g.arc(1240,470,260,0,7);g.fillStyle='rgba(30,6,12,.78)';g.fill();g.strokeStyle=GOLD;g.lineWidth=8;g.stroke();g.clip();molecule(g,1180,520,.6,t,{lock:1,cut,glow:cut});yeastScissor(g,1360,640,58,t,cut);g.restore();
  if(out>0){const wx=560,wy=900-560;fade(g,out,()=>{for(let i=0;i<3;i++){g.strokeStyle=`rgba(242,210,122,${.7-i*.15})`;g.lineWidth=4;g.beginPath();g.moveTo(wx-20+i*20,wy);for(let k=1;k<=14;k++){const u=k/14;g.lineTo(wx-20+i*20+Math.sin(u*6+t*2+i)*16*(1-u)+u*(i-1)*20,wy-u*(wy-200))}g.stroke()}
   g.globalAlpha*=.85;maracujaMeio(g,560,150,80,.2)})}
  chip(g,1240,140,'FERMENTAÇÃO',AW(t,s,'fermentação'));chip(g,1240,800,'CORTA E SOLTA O CHEIRO!',AW(t,s,'solta'));chip(g,1240,910-10,'TEM FERMENTO MELHOR NISSO',AW(t,s,'melhor'))},.15),
 // 12 solta pouco: menos de 10 %
 C3(winery,'SOLTA POUCO',[ART(0,(g,t,s)=>pctBar(g,960,470,1200,120,AW(t,s,'dez',.6),t)),LB('TUDO O QUE ESTAVA GUARDADO',960,360,0,32),
  ART('dez',(g,t)=>{arrow(g,420,640,410,550,GOLD2,6);goldText(g,'VIRA CHEIRO',520,680,36,'Cinzel',900)}),ST(1340,700,'MENOS DE 10 %','dez',.55)],.7),
 // 13 o nariz: 60 bilionésimos de grama num litro
 TK({gest:[[0,'rest']],chips:[['O SEU NARIZ',430,250,'nariz'],['POR LITRO DE VINHO',430,560,'litro']],face:t=>({brow:.6,mouth:.6}),
  over:(g,t,s)=>{const a=AW(t,s,'sessenta',.4);if(a>0)fade(g,a,()=>{plaque(g,430,410,640,140);goldText(g,'60 BILIONÉSIMOS',430,392,44,'Cinzel',900);goldText(g,'DE GRAMA',430,440,28,'Cinzel',700)})}},'nariz'),
 // 14 o primo (a levedura fabrica) é mais forte: 4 bilionésimos por litro
 C3(BAR,'O PRIMO É AINDA MAIS FORTE',[ART(0,(g,t)=>molecule(g,560,420,.8,t,{label:'O TIOL'})),ART('primo',(g,t)=>molecule(g,1360,420,.8,t,{label:'O PRIMO'})),
  ART(0,(g,t)=>{plaque(g,560,720,420,130);goldText(g,'60',560,706,60,'Cinzel',900);goldText(g,'BILIONÉSIMOS / L',560,752,22,'Cinzel',700)}),
  ART('quatro',(g,t)=>{plaque(g,1360,720,420,130);goldText(g,'4',1360,706,60,'Cinzel',900);goldText(g,'BILIONÉSIMOS / L',1360,752,22,'Cinzel',700)}),CH('A LEVEDURA FABRICA',1360,240,'fabrica')],.7),
 // 15 1 bilionésimo = 1 grama dividido em 1 bilhão de pedacinhos; o nariz pega
 C3(BAR,'1 GRAMA ÷ 1 BILHÃO',[ART(0,(g,t,s)=>grainSplit(g,700,500,easeIO(seg(t,wq(s,'grama')-.2,wq(s,'bilhão')+1.2)))),LB('1 GRAMA',700,330,'grama',36),
  ART('nariz',(g,t)=>noseRadar(g,1380,480,1.6,t)),CH('E O NARIZ PEGA!',1380,780,'nariz')],.7),
 // 16 terceiro tiol: cassis e buxo; em dose alta, xixi de gato (gato desconfiado ao lado da taça)
 C3(BAR,'O TERCEIRO TIOL',[ART('cassis',(g,t,s)=>fade(g,fo(t,s,'alta'),()=>{cassis(g,520,500,1.9);goldText(g,'CASSIS',520,740,36,'Cinzel',900);txt(g,'a groselha preta',520,790,34)})),
  ART('buxo',(g,t,s)=>fade(g,fo(t,s,'alta'),()=>{boxBush(g,1340,650,1.3);goldText(g,'BUXO',1340,740,36,'Cinzel',900);txt(g,'planta de cerca viva',1340,790,34)})),
  ART('alta',(g,t)=>{sbGlass(g,720,820,1.6);cat(g,1200,820,1.15,t,-1)}),ST(960,330,'DOSE ALTA','xixi',.5)],.68),
 // 17 Marlborough, Nova Zelândia
 SCX(marlborough,(g,t,s)=>{fade(g,AW(t,s,'zelândia',.5),()=>nzMap(g,1560,360,.75,AW(t,s,'marlborough')));chip(g,520,170,'MARLBOROUGH',AW(t,s,'marlborough'));chip(g,520,280,'NOVA ZELÂNDIA',AW(t,s,'zelândia'));chip(g,520,390,'DO OUTRO LADO DO MUNDO',AW(t,s,'mundo'))},0),
 // 18 primeiras videiras em 1973; o Sauvignon Blanc de lá virou febre no mundo
 C3(BAR,null,[ART(0,(g,t)=>worldMap(g,960,520,1300,620)),ART('primeiras',(g,t,s,a)=>{const [x,y]=[960-650+.94*1300,520-310+.86*620];pin(g,x-10,y-20,'',a)}),PQ(960,150,620,110,'MARLBOROUGH · 1973','AS PRIMEIRAS VIDEIRAS','mil',44,24),
  ART('febre',(g,t,s)=>{const u=seg(t,wq(s,'febre')-.3,wq(s,'febre')+2.4),o=[1460,725];for(const [dx,dy,d] of [[600,300,0],[260,360,.15],[420,700,.3],[1000,300,.1]]){const k=clamp((u-d)/.7);if(k<=0)continue;const px=lerp(o[0],dx,k),py=lerp(o[1],dy,k)-Math.sin(k*Math.PI)*120;
   g.strokeStyle='rgba(242,210,122,.6)';g.setLineDash([10,8]);g.lineWidth=4;g.beginPath();g.moveTo(o[0],o[1]);g.quadraticCurveTo((o[0]+dx)/2,Math.min(o[1],dy)-160,px,py);g.stroke();g.setLineDash([]);sbBottle(g,px,py+40,.32)}}),CH('VIROU FEBRE NO MUNDO!',960,900-40,'febre')],.66),
 // 19 colheita por máquina: a colhedeira passa por cima da fileira; operador acena da cabine
 SCX(marlborough,(g,t,s)=>{const u=easeIO(seg(t,T[s],T[s+1])),sc=lerp(.55,.95,u),by=lerp(640,1000,u),cx=960;harvester(g,cx,by,sc,t);
  npc(g,cx+170*sc,by-440*sc,.42*sc,t,{ch:OPERADOR(),face:-1,look:-.3,brow:.6,mouth:.8,noLegs:true,hat:'cap',capCol:'#2A3A5A',headExtra:(x,fx,fy)=>sunglasses(x,fx,fy+2,1.05),hands:{l:[-95,205,95],r:[110,-90+Math.sin(t*9)*25,60]},ro:true});
  chip(g,960,140,'COLHIDO POR MÁQUINA',AW(t,s,'máquina'));chip(g,960,250,'= MAIS TIÓIS NO VINHO',AW(t,s,'tióis'))},0),
 // 20 a uva machucada reage e solta mais perfume
 C3(marlborough,'UMA DAS EXPLICAÇÕES',[ART(0,(g,t,s)=>{grapesC(g,700,520,3,'#B8C860');const m=AW(t,s,'machuca',.4);g.fillStyle='#9AB04A';g.beginPath();g.ellipse(790,690,52*(1+m*.4),52*(1-m*.5),0,0,7);g.fill();if(m>0){g.fillStyle='rgba(214,206,120,.8)';g.beginPath();g.ellipse(800,740,70*m,14*m,0,0,7);g.fill()}}),
  ART('reage',(g,t,s,a)=>{const k=AW(t,s,'perfume',1.2);smellBalloon(g,1320,420,80+k*70,880,560,a,(g,x,y,r)=>maracujaMeio(g,x,y,r,.2))}),CH('A UVA MACHUCADA REAGE',1320,780,'reage')],.62),
 // 21 Brasil: serra fria de Santa Catarina, vinhedos a mais de 900 m
 SCX(serraSC,(g,t,s)=>{fade(g,AW(t,s,'brasil'),()=>flag2(g,'br',200,140,150));fade(g,AW(t,s,'santa'),()=>{plaque(g,960,160,720,120);goldText(g,'SÃO JOAQUIM (SC)',960,140,46,'Cinzel',900);goldText(g,'SERRA CATARINENSE',960,190,24,'Cinzel',700)});
  chip(g,1560,330,'+900 M DE ALTITUDE',AW(t,s,'novecentos'));chip(g,420,330,'SAUVIGNON BLANC DOS BONS',AW(t,s,'bons'))},0),
 // 22 Brasil, maior produtor de maracujá: cheira o maracujá, depois a taça
 TK({gest:[[0,'rest'],[3.6,'fruitUp'],[6.2,'rest']],props:(f,t,s)=>{},chips:[['BRASIL: Nº 1 EM MARACUJÁ',430,260,'maior'],['O TESTE: MARACUJÁ × TAÇA',430,380,'teste']],face:t=>({brow:.8,mouth:.9}),
  over:(g,t,s)=>{}},'taça'),
 // 23 perfume delicado: some com o tempo e com o calor; beber jovem e guardar no fresco
 C3(BAR,'BEBA JOVEM',[ART(0,(g,t,s)=>{const u=seg(t,T[s]+.6,wq(s,'calor')+.8),yr=2025+Math.floor(u*2.99);calPage(g,420,520,String(yr),'ANO');smellBalloon(g,420,240,lerp(90,30,u),420,390,1-u*.5,(g,x,y,r)=>maracujaMeio(g,x,y,r,.2))}),
  ART('calor',(g,t)=>{thermo(g,900,620,260,.9,'');goldText(g,'CALOR',900,330,36,'Cinzel',900);g.strokeStyle='#B0122E';g.lineWidth=12;g.beginPath();g.moveTo(820,420);g.lineTo(980,620);g.moveTo(980,420);g.lineTo(820,620);g.stroke()}),
  ART('fresco',(g,t)=>{thermo(g,1440,620,260,.35,'');goldText(g,'FRESCO',1440,330,36,'Cinzel',900);sbBottle(g,1590,680,.6)}),CH('PERFUME DELICADO',420,800,'delicado'),CH('GUARDADO NO FRESCO',1440,800,'fresco')],.68),
];
// a fala 22 precisa do maracujá na mão: desenha a meia fruta na mão direita enquanto 'fruitUp' (props recebe s)
{SC[22]=(t,c,s)=>{const tc=wq(s,'cheira')-T[s]-.6,td=wq(s,'depois')-T[s]-.1,GS=[[0,'rest'],[tc,'fruitUp'],[td,'rest']],seq=GS.map(q=>[T[s]+q[0],q[1]]);
 return TK({gest:GS,props:(f,t_)=>{const on=kf(t_-T[s],[[0,0],[tc+.1,0],[tc+.4,1],[td,1],[td+.3,0]]),gs=gest(t_,seq),[hx,hy]=gs.r[0];if(on>0)fade(f,on,()=>maracujaMeio(f,hx-4,hy-22,36,.3))},
  chips:[['BRASIL: Nº 1 EM MARACUJÁ',430,260,'maior'],['O TESTE: MARACUJÁ × TAÇA',430,380,'teste']],face:t=>({brow:.8,mouth:.9})},'depois')(t,c,s)}}
SC.length=LEN.length;
ddFilm({SC,base:B37,talks:[1,5,8,13,22],places:{4:.6,5:.6,10:.6,17:.6,21:.6,22:.6},cta:['JÁ SENTIU MARACUJÁ?','sentiu'],
 table:[BAR,'CHEIRO DE MARACUJÁ SEM MARACUJÁ',[
  [(c,cx,cy)=>maracujaMeio(c,cx,cy,95,.2),'NENHUMA FRUTA','é a mesma molécula','do maracujá'],
  [(c,cx,cy,t)=>molecule(c,cx,cy+20,.62,t),'TIÓIS','moléculas','com enxofre'],
  [(c,cx,cy,t)=>yeastFace(c,cx,cy,90,t),'O FERMENTO SOLTA','o perfume preso','na uva'],
  [(c,cx,cy,t)=>noseRadar(c,cx-60,cy,1.2,t),'BILIONÉSIMOS','de grama:','e o nariz sente'],
  [(c,cx,cy)=>sbGlass(c,cx,cy+150,1.25),'BEBA JOVEM','e guarde','no fresco']]],
 tags:[[1,'química'],[1,'fermento'],[1,'nariz'],[2,'sauvignon'],[2,'maracujá'],[2,'toranja'],[3,'tióis'],[3,'enxofre'],[3,'fortíssimo'],[4,'puro'],[4,'mercaptana'],[4,'vazamento'],[5,'outros'],[5,'simpáticos'],[5,'mercapto'],
  [6,'amarelo'],[6,'goiaba'],[6,'suco'],[7,'literalmente'],[7,'molécula'],[8,'mistério'],[8,'quase'],[9,'preso'],[9,'grudado'],[9,'cofre'],[10,'levedura'],[10,'açúcar'],[10,'álcool'],[11,'fermentação'],[11,'solta'],[11,'melhor'],[12,'dez'],
  [13,'nariz'],[13,'sessenta'],[13,'litro'],[14,'primo'],[14,'fabrica'],[14,'quatro'],[15,'grama'],[15,'nariz'],[16,'cassis'],[16,'buxo'],[16,'alta'],[16,'gato'],[17,'marlborough'],[17,'zelândia'],[17,'mundo'],[18,'mil'],[18,'febre'],
  [19,'máquina'],[19,'tióis'],[20,'reage'],[21,'santa'],[21,'novecentos'],[21,'bons'],[22,'maior'],[22,'teste'],[23,'delicado'],[23,'calor'],[23,'fresco']],
 sfx:[[11,'corta','cloth'],[8,'espremer','cloth']]});
