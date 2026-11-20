// ---------- cenas do vídeo 24 "Por que se guarda vinho deitado?" — adega (thumb C viva), laboratório, cozinha; cena i = fala i ----------
const B24={set:ADEGA,front:cellarTable,bottles:[['red',1100]],candles:[[560,60]]};
const L24={set:(x,t)=>lab(x,t),front:labFront,bottles:[['red',1100]]};
const stampS=(g,cx,cy,s_,a,k=.55)=>{if(a<=0)return;g.save();g.translate(cx,cy);g.scale(k,k);stamp(g,0,0,s_,a);g.restore()};
const LABS=(x,t)=>lab(x,t);
const SC=[null,
 // 1 rolha, ciência, mito?
 tk(B24,{gest:[[0,'open'],[2.6,'point'],[5.2,'open']],chips:[['ROLHA',430,280,'rolha'],['CIÊNCIA',430,390,'ciência'],['MITO?',430,500,'mito']],face:t=>({brow:.8,mouth:.65})}),
 // 2 explicação clássica: a rolha molhada
 C3(ADEGA,'A EXPLICAÇÃO CLÁSSICA',[ART(0,(g,t,s)=>lyingCut(g,860,560,1.5,{wet:ap(t,2,'encosta',.8)})),PQ(960,800,560,120,'ROLHA MOLHADA',null,'molhada',50),CH('O VINHO ENCOSTA NA ROLHA',960,300,'encosta')],.6),
 // 3 em pé por anos: a rolha seca, o ar entra, o vinho oxida (maçã)
 C3(ADEGA,'DIZEM QUE...',[ART(0,(g,t,s)=>{const u=ap(t,3,'encolhe',1);g.save();g.translate(680,600);g.rotate(-Math.PI/2);lyingCut(g,0,0,1.0,{stand:1,shrink:u});g.restore();if(u>.3)for(let i=0;i<3;i++){const k=((t*.8+i*.33)%1);arrow(g,500+k*40,270+i*28,600+k*40,270+i*28,'rgba(200,230,255,.9)',4)}}),
  CH('A ROLHA SECA E ENCOLHE',1100,250,'seca'),ART('oxida',(g,t,s)=>apple(g,1460,560,1.4,ap(t,3,'escurece',1.5))),CH('OXIDAR = PERDER A FRUTA',1460,780,'oxida')],.6),
 // 4 2018: a Amorim (Portugal), maior fabricante de rolhas
 SCN(LABS,[ART('amorim',(g,t)=>{for(let i=0;i<5;i++)bigCork(g,560+i*90,700,.5)}),PQ(960,260,700,140,'AMORIM · PORTUGAL · 2018','A MAIOR FÁBRICA DE ROLHAS','amorim',40,26),ART('portugal',(g,t)=>flag2(g,'pt',1460,560,150)),CH('UMA BOMBA!',560,460,'bomba')],.25),
 // 5 Miguel Cabral: deitar pra rolha não secar é mito
 SCN(LABS,[ART(0,(g,t)=>corkScientist(g,620,900,.64,t)),PQ(1360,280,560,130,'MIGUEL CABRAL','DIRETOR DE PESQUISA','miguel',46,26),ST(1360,520,'MITO?','mito',.6)],.25),
 // 6 dentro da garrafa: umidade ~100%
 C3(LABS,'DENTRO DA GARRAFA',[ART(0,(g,t)=>standCut(g,640,880,1.2,t,{vapor:1})),ARW(1100,330,760,240,'espacinho'),PQ(1360,420,520,150,'~100%','DE UMIDADE','cem',80,30),CH('A ROLHA NÃO SECA',1360,620,'seca')],.55),
 // 7 AWRI 2005: brancos por 5 anos, em pé e deitados
 SCN(LABS,[ART(0,(g,t)=>{ausScientist(g,1440,900,.62,t);g.fillStyle='#5A3A22';g.fillRect(240,700,820,16);for(let i=0;i<3;i++)bottleS(g,[320+i*90,700],.7,'white');for(let i=0;i<3;i++)lyingWine(g,780,670-i*60,.5,1)}),
  PQ(650,230,700,130,'INSTITUTO AUSTRALIANO','DE PESQUISA DO VINHO · 2005','instituto',34,24),ART('cinco',(g,t,s)=>{calPage(g,1100,380,String(1+Math.floor(4*clamp(seg(t,wq(7,'cinco'),T[s+1])))),'ANOS')}),CH('EM PÉ × DEITADOS',650,380,'deitados')],.2),
 // 8 resultado: quase nada mudou
 C3(LABS,'RESULTADO',[ART(0,(g,t)=>{glassW(g,640,800,1.8,.42,'#E8D488');glassW(g,1280,800,1.8,.42,'#E8D488');goldText(g,'=',960,560,140)}),CH('NEM A COR',480,300,'cor'),CH('NEM A QUÍMICA',960,300,'química'),CH('NEM O SABOR',1440,300,'sabor')],.55),
 // 9 a briga não acabou: sommeliers ainda dizem deitado
 tk(B24,{gest:[[0,'thinking'],[3,'open'],[6.4,'point']],chips:[['MUITOS SOMMELIERS',430,300,'sommeliers'],['E O PRÓPRIO INSTITUTO:',430,420,'instituto'],['COM ROLHA, POR ANOS: DEITADO',430,540,'deitado']],face:t=>({brow:.9,sad:.3,mouth:.3})}),
 // 10 o placar honesto: meses = tanto faz; anos = deitado
 C3(ADEGA,'O PLACAR HONESTO',[ART(0,(g,t)=>balance(g,960,380,-.12)),PQ(560,320,520,130,'MESES','TANTO FAZ','meses',56,28),PQ(1360,320,520,130,'ANOS','DEITADO','anos',56,28)],.55),
 // 11 tampa de rosca: pode em pé
 C3(ADEGA,'E A TAMPA DE ROSCA?',[ART(0,(g,t)=>{bottleS(g,[700,860],1.6,'white');g.fillStyle='#C9CDD2';g.fillRect(700-20*1.6,860-300*1.6,40*1.6,60*1.6);g.strokeStyle='#8A8A92';g.lineWidth=2;for(let i=0;i<6;i++){g.beginPath();g.moveTo(700-32,860-300*1.6+8+i*14);g.lineTo(700+32,860-300*1.6+8+i*14);g.stroke()}}),
  CH('SEM CORTIÇA PRA SECAR',1360,360,'cortiça'),PQ(1360,560,520,150,'ROSCA = EM PÉ',null,'pé',56)],.55),
 // 12 espumante: Champagne, 3.000 garrafas; pesou a temperatura
 C3(ADEGA,'E O ESPUMANTE?',[ART(0,(g,t)=>{for(let i=0;i<3;i++)bottleS(g,[340+i*100,860],.9,'spark');for(let i=0;i<3;i++)lyingWine(g,820,820-i*70,.55,1)}),
  PQ(1380,320,520,130,'3.000 GARRAFAS','REGIÃO DE CHAMPAGNE','três',46,24),CH('POUCA DIFERENÇA',1380,470,'pouca'),ART('temperatura',(g,t)=>thermoS(g,1380,800,220,.5)),CH('PESOU A TEMPERATURA!',1380,620+0,'temperatura')],.55),
 // 13 o vilão: o calor; acima de 25 °C
 C3(ADEGA,'O VILÃO DE VERDADE',[ART(0,(g,t,s)=>{const u=ap(t,13,'vinte',1.2);g.fillStyle=`rgba(232,100,42,${.25*u})`;g.fillRect(0,0,W,H);thermoS(g,760,820,440,lerp(.35,.8,u));heatWaves(g,1300,700,400,t,u)}),PQ(1300,380,460,150,'25 °C','O LIMITE','vinte',80,28),CH('O CALOR',760,250,'calor')],.55),
 // 14 1 ano a 30 °C: gosto de cozido
 C3(ADEGA,'GOSTO DE COZIDO',[ART(0,(g,t)=>calPage(g,560,480,'1 ANO','A 30 °C')),ART('cozido',(g,t)=>pot(g,1360,780,1.3,t)),ST(1360,360,'COZIDO','cozido',.55),CH('ENVELHECE RÁPIDO DEMAIS',960,780+40,'rápido')],.55),
 // 15 luz (vídeo da garrafa verde) e vibração (Coreia, 18 meses)
 C3(ADEGA,'MAIS DOIS VILÕES',[ART('luz',(g,t)=>{sunIcon(g,480,480,90,t);goldText(g,'A LUZ',480,640,40)}),ART('vídeo',(g,t)=>{g.fillStyle='rgba(20,6,10,.9)';g.beginPath();g.roundRect(330,700,300,130,14);g.fill();g.strokeStyle='#D4A24C';g.lineWidth=4;g.stroke();goldText(g,'A GARRAFA VERDE',480,765,24)}),
  ART('vibração',(g,t)=>{shaker(g,1360,700,1,t);goldText(g,'A VIBRAÇÃO',1360,320,40)}),CH('COREIA · 18 MESES',1360,800,'coreia')],.55),
 // 16 adegas antigas: 1. rolha, 2. espaço
 SCN((x,t)=>oldCellar(x,t),[ART(0,(g,t)=>{for(let r=0;r<4;r++)for(let i=0;i<6;i++)lyingWine(g,520+i*160+(r%2)*80,780-r*80,.5,i%2?1:-1)}),PQ(560,240,440,120,'1. A ROLHA',null,'rolha',48),PQ(1360,240,440,120,'2. ESPAÇO!',null,'espaço',48)],.1),
 // 17 garrafa cebola rola; cilíndricas empilham deitadas
 SCN((x,t)=>oldCellar(x,t),[ART(0,(g,t,s)=>{const u=ap(t,17,'retas',1);cellarman(g,960,900,.62,t,{hands:{l:[-110,170,110],r:[110,170,110]}});const roll=Math.sin(t*3)*.25*(1-u);fade(g,1-u*.7,()=>onionBottle(g,500,850,.8,Math.PI/2+roll));
  const n=Math.floor(clamp(seg(t,wq(17,'empilhar'),T[s+1]-.4))*9);for(let i=0;i<n;i++)lyingWine(g,1280+(i%3)*150,820-Math.floor(i/3)*70,.5,1)}),CH('GARRAFA "CEBOLA"',500,300,'cebola'),CH('CILÍNDRICAS: EMPILHAM!',1440,300,'cilíndricas'),CH('CABE MUITO MAIS!',1440,420,'cabe')],.05),
 // 18 Brasil: nada de guardar em cima da geladeira (quente e vibra)
 SCN((x,t)=>barWall(x,t),[ART(0,(g,t,s)=>{const fx=1560;wineBottle(g,fx+60,250,.7);heatWaves(g,fx+60,250,180,t,ap(t,18,'quente',.6));bigX(g,fx+60,160,90,ap(t,18,'nada',.5))}),CH('NADA DE EM CIMA DA GELADEIRA!',640,250,'geladeira'),CH('É QUENTE...',640,370,'quente'),CH('...E VIBRA!',640,490,'vibra')],.1),
 // 19 fuja da cozinha e da janela; canto fresco e escuro (armário)
 C3(ADEGA,'O CANTO CERTO',[ART('armário',(g,t)=>wardrobe(g,640,880,.95)),CH('FUJA DA COZINHA E DA JANELA',960,280,'fuja'),PQ(1400,520,560,170,'FRESCO · ESCURO','· ESTÁVEL ·','fresco',46,40)],.55),
 // 20 por anos: adega climatizada a ~13 °C
 tk(B24,{bottles:[],gest:[[0,'open'],[3,'point'],[5,'rest']],setX:(x,t,s)=>{},props:(f,t,s)=>{fade(f,ap(t,20,'adega',.5),()=>wineFridge(f,1420,806,.75,'13 °C'))},chips:[['ADEGA CLIMATIZADA',430,300,'adega'],['~13 °C, SEMPRE IGUAL',430,420,'treze']],face:t=>({brow:.5,mouth:.7})}),
];
SC.length=LEN.length;
ddFilm({SC,base:B24,talks:[1,9,20],places:{4:.6,7:.6,9:.6,16:.6,18:.6,19:.6},cta:['DEITADO OU EM PÉ?','deitado'],
 table:[ADEGA,'DEITADO OU EM PÉ?',[
  [(c,cx,cy)=>lyingCut(c,cx-40,cy,.45,{wet:1}),'ROLHA','por anos, deitado','é o mais seguro'],
  [(c,cx,cy)=>calPage(c,cx,cy,'MESES',''),'MESES','em pé ou deitado,','tanto faz'],
  [(c,cx,cy)=>{bottleS(c,[cx,cy+150],.9,'white');c.fillStyle='#C9CDD2';c.fillRect(cx-18,cy+150-270,36,52)},'ROSCA','pode ficar','em pé'],
  [(c,cx,cy)=>thermoS(c,cx,cy+120,220,.8),'CALOR','o vilão: nada','acima de 25 °C'],
  [(c,cx,cy)=>{wineFridge(c,cx,cy+190,.42,'13°');flag2(c,'br',cx,cy-160,80)},'BRASIL','longe da geladeira','e do fogão, ~13 °C']]],
 tags:[[1,'rolha'],[1,'ciência'],[1,'mito'],[2,'molhada'],[3,'seca'],[3,'oxida'],[4,'amorim'],[5,'mito'],[6,'cem'],[7,'cinco'],[8,'cor'],[8,'química'],[8,'sabor'],[10,'meses'],[10,'anos'],[11,'pé'],[12,'três'],[12,'temperatura'],[13,'vinte'],[14,'cozido'],[15,'luz'],[15,'vibração'],[16,'rolha'],[16,'espaço'],[17,'cebola'],[17,'cabe'],[18,'nada'],[18,'vibra'],[19,'fresco'],[20,'adega'],[20,'treze']],
 sfx:[[17,'cebola','bottledown'],[18,'geladeira','fridgeopen']]});
