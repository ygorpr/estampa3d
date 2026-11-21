// ---------- cenas do vídeo 26 "Ainda se pisa uva com o pé?" — adega da quinta do Douro com o lagar (thumb A viva), Egito, Roma, robô, Festa da Uva; cena i = fala i ----------
const liftsSync=(t,n)=>{const p=Math.floor(t/1.1)%4,k=p==0?'l':p==2?'r':null,o={};for(let i=0;i<n;i++)o[i]=k;return o};
const XS0=[560,700,840,980,1120,1260,1400,1540,1680,1820];
const LAGB=(x,t)=>adegaLagar(x,t,{xs:XS0,ps:.36,base:282,top:410,lifts:liftsSync(t,10),sing:[],off:2});
const LAG0=(x,t)=>adegaLagar(x,t,{xs:[],top:520});
const B26={set:LAGB,front:lagarFrente,bottles:[['red',1100]],candles:[[560,60]]};
const XS1=[200,420,640,860,1080,1300,1520,1740];
const SC=[null,
 // 1 Egito, lagar, robô, Brasil
 tk(B26,{gest:[[0,'open'],[2.4,'point'],[5,'open'],[7.4,'rest']],chips:[['EGITO',430,260,'egípcia'],['LAGAR DE PEDRA',430,370,'tanque'],['ROBÔ',430,480,'robô'],['FESTA NO BRASIL',430,590,'festa']],face:t=>({brow:.8,mouth:.7})}),
 // 2 Egito: tumbas com homens pisando uva num tanque
 SCN((x,t)=>egyptWall(x,t),[ART(0,(g,t)=>{egyptBeam(g,300,1500,300);for(const [cx,ph] of [[520,0],[800,1.6],[1080,3.1]])egyptTreader(g,cx,700,.82,t,ph);egyptVat(g,800,830,840,t)}),PQ(1600,560,420,150,'EGITO','+3.000 ANOS','três',64,32)],0),
 // 3 segurando nas cordas pra não escorregar; romanos; séculos
 C3((x,t)=>egyptWall(x,t),'PRA NÃO ESCORREGAR',[ART(0,(g,t,s)=>{egyptBeam(g,300,820,330);egyptTreader(g,560,860,1.05,t,0,Math.max(0,Math.sin(Math.max(0,t-wq(3,'escorregar'))*5))*(t>wq(3,'escorregar')&&t<wq(3,'escorregar')+1.4?.6:0))}),
  ART('romanos',(g,t)=>romanTank(g,1360,700,1)),ARW(1100,800,1700,800,'séculos'),LB('SÉCULOS',1400,860-20,'séculos',38)],.4),
 // 4 as máquinas; menos no Douro, em Portugal
 C3(LAG0,'AS MÁQUINAS',[ART('máquinas',(g,t)=>ironPress(g,560,860,1,t)),ART('douro',(g,t,s)=>ptMap(g,1360,560,.95,ap(t,4,'douro',.8),t)),CH('A PISA SUMIU...',560,300,'sumindo')],.6),
 // 5 o lagar: tanque de pedra (granito), largo e baixinho
 SCN(LAG0,[PQ(960,240,700,150,'LAGAR','= TANQUE DE PEDRA','lagar',72,34),CH('QUASE SEMPRE DE GRANITO',560,420,'granito'),CH('LARGO E BAIXINHO',1400,420,'baixinho'),ART(0,(g,t)=>{for(let i=0;i<5;i++)cachoT(g,300+i*330,520+Math.sin(i)*10,1.1,(i%2-.5)*.3)})],.05),
 // 6 o corte: fila de braço dado, pisando junto, devagar
 SCN((x,t)=>adegaLagar(x,t,{xs:XS1,ps:.6,base:390,top:620,lifts:liftsSync(t,8),off:1}),[PQ(960,110,520,120,'O CORTE',null,'corte',60),CH('DE BRAÇO DADO',480,900-60,'braço'),CH('JUNTOS, DEVAGAR',1440,900-60,'devagar')],.0),
 // 7 a liberdade: cada um pisa do seu jeito, e a turma canta
 SCN(LAG0,[ART(0,(g,t)=>{const T7=[{skin:'#D8A47E',shirt:'#E8DCC4',shirtD:'#C9BCA2',hair:'#2A1C14',beard:'#2A1C14',beardT:'mustache',trou:'#3A3440'},{skin:'#C8916A',shirt:'#8E3A2E',shirtD:'#6E2A22',cap:'#3A3036',trou:'#2E3A44'},{skin:'#E2B48E',shirt:'#3E5A6E',shirtD:'#2E4458',hair:'#5A3E2A',trou:'#3A3440'},{skin:'#B9835E',shirt:'#E8DCC4',shirtD:'#C9BCA2',cap:'#2E2A24',beard:'#3A2A1C',beardT:'short',trou:'#4A3A2E'}];
  [[340,0],[760,1],[1180,2],[1600,3]].forEach(([px,i])=>{const ph=t*2.2+i*1.3,lift=Math.sin(ph)>.3?'l':Math.sin(ph)<-.3?'r':null;pisador(g,px,445+Math.abs(Math.sin(ph))*-14,.62,Object.assign({},T7[i],{lift,reach:{l:[-240,70],r:i%2?[230,-170+Math.sin(t*4)*20]:[240,60]},sing:ap(t,7,'canta',.5)>.5||i%2==0,open:.6,look:(i%2?-.2:.2)}))});
  uvaMassa(g,-200,W+200,700,780,5,1.3);graniteBlock(g,-200,760,W+400,400,8)}),ART('canta',(g,t)=>{notes(g,560,300,t);notes(g,1400,280,t+1)}),PQ(960,160,560,130,'LIBERDADE!',null,'liberdade',60)],.0),
 // 8 por que o pé? a resposta: a semente
 C3(LAG0,'O SEGREDO DA UVA',[ART(0,(g,t,s)=>grapeCut(g,960,560,250,ap(t,8,'semente',.8),0,t)),LB('CASCA',520,420,'dentro',40),LB('POLPA',1420,420,'dentro',40),LB('SEMENTE',1420,700,'semente',44),ARW(1300,700,1060,620,'semente')],.6),
 // 9 a semente é amarga; se quebra, solta amargor
 C3(LAG0,'A SEMENTE É AMARGA',[ART(0,(g,t,s)=>bigSeed(g,760,600,1.6,ap(t,9,'quebra',1),t)),ST(1360,560,'AMARGO','amargor',.62),CH('SE QUEBRA...',1360,320,'quebra')],.6),
 // 10 o pé é perfeito: macio, firme, quentinho; estoura a casca, não quebra a semente
 C3(LAG0,'O PÉ É PERFEITO',[ART(0,(g,t,s)=>footPress(g,700,800,1,easeIO(clamp(seg(t,T[s]+.8,wq(10,'estoura')+.4))),t)),CH('MACIA · FIRME · QUENTINHA',1380,300,'macia'),CH('ESTOURA A CASCA',1380,420,'estoura'),
  ART('semente',(g,t)=>{bigSeed(g,1380,640,.7,0,t);goldText(g,'✓',1500,600,80)}),LB('SEMENTE INTEIRA',1380,800,'semente',36)],.6),
 // 11 no Porto: a aguardente para a fermentação; só ~2 dias pra tirar a cor
 C3(LAG0,'NO PORTO, É CORRIDA',[ART('aguardente',(g,t)=>{aguaBottle(g,420,820,1.2);goldText(g,'AGUARDENTE',420,850,30)}),ART('dois',(g,t)=>{clockS(g,960,460,110,t*3);goldText(g,'2 DIAS',960,640,60)}),ART('cor',(g,t,s)=>mustTank(g,1460,800,300,360,ap(t,11,'cor',3))),CH('RÁPIDO E COM CARINHO',960,800,'rápido')],.6),
 // 12 pisar custa caro: 24 pessoas por lagar (Decanter, 2002); falta gente
 C3(LAG0,'PISAR CUSTA CARO',[ART('vinte',(g,t,s)=>{const n=Math.round(24*clamp(seg(t,wq(12,'vinte'),wq(12,'pessoas')+.5)));const C=['#E8DCC4','#8E3A2E','#3E5A6E','#6E5A3A'];for(let i=0;i<n;i++)miniMan(g,250+(i%8)*92,400+Math.floor(i/8)*140,1.25,C[i%4]);goldText(g,String(n),620,820,64)}),
  PQ(1400,380,480,140,'24 PESSOAS','POR LAGAR · 2002','pessoas',48,26),CH('FALTA GENTE NO CAMPO',1400,620,'falta')],.6),
 // 13 o robô: pés de metal com almofadas de silicone, imitam até o calor
 SCN(LAG0,[ART(0,(g,t)=>robotLagar(g,960,880,.82,t)),PQ(440,190,520,130,'SYMINGTON · 2000','UMA FAMÍLIA DO PORTO','família',36,24),CH('PÉS DE SILICONE',1460,170,'silicone'),CH('IMITA ATÉ O CALOR',1460,280,'calor')],.35),
 // 14 provas às cegas: tão bom ou melhor — dado do produtor
 tk(B26,{gest:[[0,'open'],[3.6,'point'],[6.6,'thinking'],[9.2,'rest']],chips:[['PROVAS ÀS CEGAS',430,280,'cegas'],['TÃO BOM OU MELHOR',430,390,'melhor']],over:(g,t,s)=>{const a=ap(t,14,'produtor',.5);if(a>0){g.save();g.translate(1560,250);g.scale(.42,.42);stamp(g,0,0,'DADO DO PRODUTOR',a);g.restore()}},face:t=>({brow:.7,mouth:.6})}),
 // 15 Taylor's: pistões, 96–98% do pé; pros melhores, pé de gente
 C3(LAG0,"TAYLOR'S",[ART(0,(g,t)=>pistonTank(g,560,860,1,t)),ART('noventa',(g,t,s)=>pctBar(g,1380,400,560,lerp(0,.97,ap(t,15,'oito',1)),'96–98% DO PÉ')),ART('gente',(g,t)=>crownFoot(g,1380,760,.9)),CH('PISTÕES',560,290,'pistões')],.6),
 // 16 higiene: os pisadores lavam bem os pés e as pernas
 SCN(LAG0,[ART(0,(g,t)=>{const px=760,s=.7,py=870-485*s;pisador(g,px,py,s,{skin:'#C8916A',shirt:'#8E3A2E',shirtD:'#6E2A22',cap:'#3A3036',trou:'#2E3A44',reach:{l:[-30,300+Math.sin(t*5)*20],r:[60,320-Math.sin(t*5)*20]},look:.2,mouth:.8});
   tapWater(g,px+90,py+40,870-py-50,t);soapBubbles(g,px,820,t)}),CH('CALMA!',1400,250,'calma'),CH('PÉS E PERNAS BEM LAVADOS',1400,370,'lavam')],.05),
 // 17 fermentação: álcool + acidez; micróbios ruins não sobrevivem
 C3(LAG0,'ÁLCOOL + ACIDEZ',[ART(0,(g,t)=>{for(const [cx,cy,ph] of [[420,520,0],[640,620,1],[480,720,2]])yeastFace(g,cx,cy,70,t,0,ph)}),ART('micróbios',(g,t,s)=>{const u=clamp(seg(t,wq(17,'sobrevivem')-.6,T[s+1]));for(const [cx,cy,ph] of [[1220,480,0],[1420,600,1],[1300,720,2]])fade(g,1-u,()=>badBug(g,cx+u*400,cy,60,t,ph))}),
  CH('LEVEDURAS: FAZEM O VINHO',560,300,'fermentação'),CH('MICRÓBIOS RUINS: FORA!',1360,300,'micróbios')],.6),
 // 18 Brasil: Festa da Uva de Caxias do Sul (1931), vindimas da Serra Gaúcha
 SCN((x,t)=>festaUva(x,t),[ART(0,(g,t)=>{tina(g,1500,880,360,170);nonna(g,380,940,.6,t)}),PQ(960,540,640,150,'FESTA DA UVA · 1931','CAXIAS DO SUL · RS','festa',44,28),CH('VINDIMA = COLHEITA',960,740,'vindimas')],.0),
 // 19 o visitante tira o sapato e pisa; mas o vinho daqui é feito com máquinas
 SCN((x,t)=>festaUva(x,t),[ART(0,(g,t)=>{nonna(g,300,940,.58,t);girl(g,1640,940,.5,t,{face:-1,look:-.3});const s=.7,px=960,py=850-485*s+Math.abs(Math.sin(t*3))*-10;
   pisador(g,px,py,s,{skin:'#E2B48E',shirt:'#2D6BB5',shirtD:'#1E4A8A',hair:'#4A3424',trou:'#C9B48A',lift:Math.sin(t*3)>0?'l':'r',reach:{l:[-190,40],r:[230,-170+Math.sin(t*4)*20]},sing:true,open:.7,look:.1});
   const hx=px-190*s,hy=py+40*s;g.fillStyle='#3A2418';for(const d of [-16,16]){g.beginPath();g.ellipse(hx+d,hy+30,14,34,.2,0,7);g.fill()}tina(g,px,890,420,190)}),ART('música',(g,t)=>notes(g,1300,420,t)),ST(1420,560,'SÓ PELA FESTA','festa',.5)],.0),
 // 20 mito ou verdade
 tk(B26,{gest:[[0,'thinking'],[3,'point'],[6,'open'],[9,'rest']],chips:[['NINGUÉM MAIS PISA? MITO!',430,280,'mito'],['DIFERENÇA HOJE: PEQUENA',430,400,'pequena']],over:(g,t,s)=>{const a=ap(t,20,'garante',.5);if(a>0){g.save();g.translate(1560,250);g.scale(.42,.42);stamp(g,0,0,'DADO DO PRODUTOR',a);g.restore()}},face:t=>({brow:.9,mouth:.6})}),
];
SC.length=LEN.length;
ddFilm({SC,base:B26,talks:[1,14,20],places:{2:.6,4:.6,5:.6,13:.6,14:.6,16:.6,18:.6,20:.6},cta:['VOCÊ PISARIA?','coragem'],
 table:[LAG0,'AINDA SE PISA UVA COM O PÉ?',[
  [(c,cx,cy,t)=>grapeCut(c,cx,cy,100,1,0,t),'O PÉ','esmaga a casca,','poupa a semente'],
  [(c,cx,cy)=>{uvaMassa(c,cx-140,cx+140,cy+20,cy+80,3,1.4);graniteBlock(c,cx-150,cy+70,300,140,4)},'LAGAR','tanque de granito','do Douro'],
  [(c,cx,cy)=>{for(let i=0;i<3;i++)miniMan(c,cx-80+i*80,cy+60,1.6,['#E8DCC4','#8E3A2E','#3E5A6E'][i]);c.strokeStyle='#D4A24C';c.lineWidth=6;c.beginPath();c.moveTo(cx-100,cy);c.lineTo(cx+100,cy);c.stroke()},'O CORTE','de braço dado,','depois "liberdade"'],
  [(c,cx,cy,t)=>robotLagar(c,cx,cy+170,.28,t),'ROBÔ','pés de silicone','(dado do produtor)'],
  [(c,cx,cy)=>{flag(c,'br',cx,cy-60,140);tina(c,cx,cy+150,200,110)},'BRASIL','Festa da Uva','(Caxias, desde 1931)']]],
 tags:[[1,'egípcia'],[1,'tanque'],[1,'robô'],[1,'festa'],[2,'três'],[3,'séculos'],[4,'douro'],[5,'lagar'],[5,'granito'],[6,'corte'],[7,'liberdade'],[8,'semente'],[9,'amargor'],[10,'estoura'],[11,'dois'],[12,'pessoas'],[13,'silicone'],[14,'produtor'],[15,'noventa'],[15,'gente'],[16,'calma'],[17,'micróbios'],[18,'festa'],[19,'festa'],[20,'mito'],[20,'pequena']],
 sfx:[[10,'estoura','sip'],[13,'robô','lift'],[16,'lavam','sip']]});
