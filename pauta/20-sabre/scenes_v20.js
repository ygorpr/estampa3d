// ---------- cenas do vídeo 20 "Dá para abrir champanhe com espada?" — adega de espumante (thumb A viva); cena i = fala i ----------
// SEGURANÇA: em nenhuma cena o sabre ou o gargalo aponta para alguém ou para o espectador; o anel sempre voa para o lado vazio.
const B20={set:(x,t)=>champCave(x,t),front:cellarTable,bottles:[['spark',1100]],candles:[[560,60]],props:(f,t)=>iceBucket(f,1420,806,.75)};
const stampS=(g,cx,cy,s_,a,k=.55)=>{if(a<=0)return;g.save();g.translate(cx,cy);g.scale(k,k);stamp(g,0,0,s_,a);g.restore()};
const CAVE=(x,t)=>champCave(x,t);
const SC=[null,
 // 1 física, Napoleão, recorde, Brasil, lenda
 tk(B20,{gest:[[0,'open'],[2.4,'point'],[5.2,'open']],chips:[['FÍSICA',430,240,'física'],['SOLDADO DE NAPOLEÃO',430,350,'napoleão'],['RECORDE MUNDIAL',430,460,'recorde'],['FESTA NO BRASIL',430,570,'brasil'],['LENDA',430,680,'lenda']],face:t=>({brow:.7,mouth:.65})}),
 // 2 sabrage = abrir com o sabre (espada curva da cavalaria)
 C3(CAVE,'SABRAGE',[ART(0,(g,t)=>sabre(g,380,560,-.05,1.6,700)),PQ(1360,360,640,150,'SABRAGE','ABRIR COM O SABRE','sabrage',64,30),CH('SABRE: ESPADA CURVA DA CAVALARIA',960,780,'curva')],.55),
 // 3 não é o fio que corta: o sabre nem é afiado
 C3(CAVE,'O SEGREDO',[ART(0,(g,t,s)=>{sabre(g,380,520,-.05,1.6,700);const u=(t-T[s])*.4%1;openHand(g,500+u*700,470,.2,C10,1.1)}),ST(1380,330,'SEM FIO!','afiado',.6),CH('QUEM CORTA É A GARRAFA',1300,760,'garrafa')],.55),
 // 4 pressão: ~6 atm, mais que o dobro do pneu
 C3(CAVE,'A PRESSÃO DO GÁS',[ART(0,(g,t)=>pressureBottle(g,560,860,1.15,t,ap(t,4,'aperta',.8))),CH('ESPUMANTE = VINHO COM GÁS',560,250,'espumante'),
  PQ(1320,380,500,160,'~6 ATM','6 × O AR QUE RESPIRAMOS','seis',72,26),ART('pneu',(g,t)=>{tire(g,1180,680,110);goldText(g,'PNEU ~2,2',1180,820,30);goldText(g,'+ DO DOBRO!',1480,680,40)})],.55),
 // 5 ponto fraco 1: a costura
 C3(CAVE,'DOIS PONTOS FRACOS',[ART(0,(g,t,s)=>neckClose(g,1000,560,1,{seam:ap(t,5,'costura',.8)})),CH('1. A COSTURA',560,250,'costura'),TX('a linha fininha que o molde deixa',960,760,'linha',38)],.6),
 // 6 ponto fraco 2: o anel; encontro com a costura
 C3(CAVE,'DOIS PONTOS FRACOS',[ART(0,(g,t,s)=>neckClose(g,1000,560,1,{seam:1,ring:ap(t,6,'anel',.6),weak:ap(t,6,'encontra',.6),t})),CH('1. A COSTURA',560,250,0),CH('2. O ANEL',1400,250,'anel'),CH('MENOS DA METADE DA FORÇA!',960,770,'metade')],.6),
 // 7 câmera lenta: sabre corre na costura, bate no anel; rolha e anel voam para o lado vazio
 C3(CAVE,'EM CÂMERA LENTA',[ART(0,(g,t,s)=>{const t1=wq(7,'desliza'),t2=wq(7,'bate'),t3=wq(7,'rachadura'),t4=wq(7,'voam');const sl=easeIO(seg(t,t1,t2)),cr=clamp(seg(t,t3,t4)),fl=easeIO(seg(t,t4-.2,t4+1.6));
  neckClose(g,900,560,1,{seam:1,ring:1,crack:cr,fly:fl});if(fl<.2)sabre(g,lerp(360,880,sl),640+(1-sl)*30,-.12,1.2,300)}),CH('GARRAFA INCLINADA',430,250,'inclinada'),CH('ROLHA E ANEL VOAM!',1440,800,'voam')],.6),
 // 8 caco lá dentro? quase nunca; joga fora o 1º gole
 tk(B20,{gest:[[0,'thinking'],[3,'open'],[6.5,'point']],props:(f,t,s)=>{iceBucket(f,1420,806,.75);fade(f,ap(t,8,'joga',.5),()=>glassW(f,1290,806,.9,.25,'rgba(242,214,140,.8)'))},
  chips:[['QUASE NUNCA FICA CACO',430,300,'quase'],['O 1º JATO LAVA A BOCA',430,420,'jato'],['JOGUE FORA O 1º GOLE',430,540,'joga']],face:t=>({brow:.5,mouth:.55})}),
 // 9 quem inventou? a história mais famosa e mais duvidosa
 SCN((x,t)=>fieldChateau(x,t),[CH('QUEM INVENTOU?',430,170,'inventou'),CH('A MAIS FAMOSA...',1460,170,'famosa'),CH('...E A MAIS DUVIDOSA',1460,280,'duvidosa')]),
 // 10 hussardos a cavalo; Madame Clicquot na janela
 SCN((x,t)=>{fieldChateau(x,t)},[ART(0,(g,t,s)=>{const u=seg(t,T[s],T[s+1]);hussar(g,lerp(1000,700,u),900,.6,t)}),ART('clicquot',(g,t)=>clicquotWindow(g,1440,420,.62,t)),
  PQ(460,200,520,120,'HUSSARDOS','SOLDADOS A CAVALO','hussardos',50,24),CH('MADAME CLICQUOT',1440,170,'clicquot')]),
 // 11 lenda; Confraria do Sabre de Ouro (1986)
 C3((x,t)=>fieldChateau(x,t),'NINGUÉM PROVA',[ST(560,420,'LENDA','lenda',.65),TX('não há registro da época',560,560,'registro',38),ART('confraria',(g,t)=>{medal(g,1360,500,1.6,t)}),PQ(1360,740,560,130,'SABRE DE OURO','CONFRARIA · FRANÇA · 1986','confraria',44,24)],.5),
 // 12 Garibaldi: sabrage coletivo
 SCN((x,t)=>festaSquare(x,t),[ART(0,(g,t,s)=>festeiros(g,180,900,.45,t,6,0)),CH('GARIBALDI (RS)',430,170,'garibaldi'),CH('A TERRA DO ESPUMANTE',1460,170,'terra'),CH('TODOS AO MESMO TEMPO!',1460,280,'mesmo')]),
 // 13 2013: 196 pessoas; a festa conta que entrou pro Guinness
 SCN((x,t)=>festaSquare(x,t),[ART(0,(g,t,s)=>festeiros(g,180,900,.45,t,6,ap(t,13,'pessoas',1.2))),CNT(500,200,0,196,'cento','pessoas',v=>v+' PESSOAS',70),ART('livro',(g,t)=>recordBook(g,1460,280,.9,ap(t,13,'livro',.8))),TX('a festa conta...',1460,470,'conta',36)],.1),
 // 14 Suíça 2015: 487 pessoas (Guinness atual)
 C3((x,t)=>festaSquare(x,t),'O RECORDE NÃO PAROU',[ART(0,(g,t)=>{oldMap(g,760,560,620,440,EU20);const a=mp(760,560,620,440,[.28,.86]),b=mp(760,560,620,440,[.56,.4]);pin(g,a[0],a[1],'GARIBALDI',1);fade(g,ap(t,14,'suíça',.5),()=>{arrow(g,a[0]+20,a[1]-20,b[0]-20,b[1]+20,GOLD2,6);pin(g,b[0],b[1],'SUÍÇA',1)})}),
  ART('suíça',(g,t)=>flag2(g,'ch',1400,330,140)),CNT(1400,520,196,487,'quatrocentas','sete',v=>String(v),110),CH('2015 · GUINNESS',1400,680,'guinness')]),
 // 15 contra o relógio: 91 em 1 minuto (maio de 2026)
 C3(CAVE,'CONTRA O RELÓGIO',[ART(0,(g,t,s)=>stopwatch(g,520,520,170,clamp(seg(t,T[s]+.5,T[s+1]-.3)))),ART('italiano',(g,t)=>flag2(g,'it',1380,280,130)),
  ART(0,(g,t,s)=>{const n=Math.floor(clamp(seg(t,wq(15,'noventa'),T[s+1]-.4))*8);for(let i=0;i<8;i++)champBottle(g,980+i*95,820,.42,0,i<n?1:0)}),CNT(1380,460,0,91,'noventa','minuto',v=>v+' GARRAFAS',60),CH('RECORDE OFICIAL',1380,600,'oficial')],.55),
 // 16 o dentista suíço: 118 com dois tabeliães, sem Guinness
 SCN((x,t)=>{champCave(x,t)},[ART(0,(g,t)=>{g.fillStyle='#4A2414';g.fillRect(1100,760,700,24);notary(g,420,900,.56,t,0);notary(g,660,900,.56,t,1);dentist(g,1280,900,.6,t)}),
  CH('UM DENTISTA SUÍÇO',1400,170,'dentista'),CNT(600,220,0,118,'cento','minuto',v=>v+' EM 1 MIN',56),CH('DOIS TABELIÃES CONFERINDO',560,340,'tabeliães'),ST(1000,470,'SEM GUINNESS','guinness',.42)],.15),
 // 17 com uma colher: as costas da colher fazem o serviço
 tk(B20,{gest:[[0,'point'],[3,'open'],[6.5,'rest']],props:(f,t,s)=>{iceBucket(f,1420,806,.75);fade(f,ap(t,17,'colher',.5),()=>spoon(f,1290,640,.9,.5))},chips:[['E COM UMA COLHER?',430,300,'colher'],['DÁ!',430,420,'dá'],['QUEM TRABALHA É A PRESSÃO',430,540,'pressão']],face:t=>({brow:.8,mouth:.7})}),
 // 18 segurança: bem gelada (quente tem mais pressão)
 C3(CAVE,'ATENÇÃO',[ART('gelada',(g,t)=>{iceBucket(g,560,840,1.2);chillBottle(g,560,640,.7,1);thermoS(g,820,760,260,.2)}),PQ(560,260,500,120,'BEM GELADA',null,'gelada',56),
  ART('quente',(g,t)=>{champBottle(g,1340,800,.75,0,0);thermoS(g,1580,760,260,.85)}),CH('QUENTE = MAIS PRESSÃO',1360,260,'quente'),ST(1360,420,'PODE ESTOURAR','estourar',.42)],.55),
 // 19 nunca aponte; aprenda com quem sabe; no Réveillon, mão na rolha
 C3(CAVE,'NUNCA APONTE PRA NINGUÉM',[ART(0,(g,t)=>{champBottle(g,380,800,.75,1.0,0);g.save();g.setLineDash([18,14]);g.strokeStyle='rgba(255,215,120,.9)';g.lineWidth=6;g.beginPath();g.moveTo(560,520);g.quadraticCurveTo(900,300,1250,420);g.stroke();g.restore();g.fillStyle='rgba(255,215,120,.12)';g.beginPath();g.ellipse(1250,560,260,180,0,0,7);g.fill();goldText(g,'ÁREA VAZIA',1250,560,34)}),
  CH('O ANEL VOA VÁRIOS METROS',960,820,'metros'),ART('réveillon',(g,t)=>{fireworks(g,t)}),PQ(1500,250,520,120,'NO RÉVEILLON:','MÃO NA ROLHA','réveillon',40,30)],.55),
];
const EU20=[{pts:[[.08,.62],[.16,.44],[.28,.42],[.3,.3],[.42,.22],[.5,.08],[.62,.1],[.72,.2],[.9,.22],[.94,.6],[.8,.7],[.66,.66],[.6,.86],[.54,.7],[.46,.64],[.42,.78],[.34,.66],[.24,.7],[.18,.8],[.1,.76]]},{pts:[[.12,.8],[.36,.78],[.4,.98],[.1,.98]],col:'#C9B488'}];
function medal(g,cx,cy,s,t){g.save();g.translate(cx,cy);g.scale(s,s);g.fillStyle='#8E1B3A';g.beginPath();g.moveTo(-30,-110);g.lineTo(30,-110);g.lineTo(20,-40);g.lineTo(-20,-40);g.closePath();g.fill();let gr=g.createRadialGradient(-15,-15,5,0,0,60);gr.addColorStop(0,'#FFE7A0');gr.addColorStop(1,'#B8832E');g.fillStyle=gr;g.beginPath();g.arc(0,0,58,0,7);g.fill();g.save();g.rotate(-.6);g.fillStyle='#8A5A1E';g.fillRect(-36,-4,72,8);g.restore();g.restore()}
SC.length=LEN.length;
ddFilm({SC,base:B20,talks:[1,8,17],places:{2:.6,9:.6,12:.6,15:.6,17:.6,18:.6},cta:['JÁ VIU UM SABRAGE?','sabre'],
 table:[CAVE,'SABRAGE: O RESUMO',[
  [(c,cx,cy)=>sabre(c,cx-120,cy+40,-.5,.7,300),'SABRAGE','abrir com o sabre','(sem fio!)'],
  [(c,cx,cy,t)=>pressureBottle(c,cx,cy+170,.55,t,1),'PRESSÃO','~6 atm, mais que','o dobro do pneu'],
  [(c,cx,cy)=>{c.save();c.translate(cx,cy);c.scale(.36,.36);neckClose(c,250,0,1,{seam:1,ring:1,weak:1});c.restore()},'PONTO FRACO','costura','+ anel'],
  [(c,cx,cy)=>{stampS(c,cx,cy,'LENDA',1,.45)},'NAPOLEÃO','é lenda',''],
  [(c,cx,cy,t)=>{medal(c,cx,cy,1.1,t)},'RECORDES','Garibaldi 196 (2013)','Suíça 487 · 91 em 1 min']]],
 tags:[[1,'física'],[1,'napoleão'],[1,'recorde'],[1,'brasil'],[1,'lenda'],[2,'sabrage'],[3,'afiado'],[4,'seis'],[4,'pneu'],[5,'costura'],[6,'anel'],[6,'metade'],[8,'jato'],[10,'hussardos'],[10,'clicquot'],[11,'lenda'],[11,'confraria'],[12,'garibaldi'],[13,'pessoas'],[14,'quatrocentas'],[15,'noventa'],[16,'cento'],[16,'guinness'],[17,'colher'],[18,'gelada'],[18,'quente'],[19,'nunca'],[19,'réveillon']],
 sfx:[[7,'voam','corkin'],[13,'pessoas','corkin'],[15,'noventa','corkin']]});
