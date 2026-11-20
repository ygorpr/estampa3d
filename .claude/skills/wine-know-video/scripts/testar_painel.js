// Teste OBRIGATÓRIO antes de publicar o painel: abre painel/esteira.html com dados de exemplo e falha se houver QUALQUER erro de JavaScript
// ou se a equipe, o "Sua vez" e a esteira não aparecerem. Uso: node testar_painel.js /caminho/esteira.html
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1440,height:900}});const erros=[];
p.on('pageerror',e=>erros.push(e.stack||e.message));
await p.addInitScript(()=>{const ag=[{look:'gerente',nome:'Beatriz',cargo:'Gerente',fazendo:[{txt:'Ronda',pct:50,eta:'1 h'}]},{look:'producao',nome:'Otávio',cargo:'Produção'},{look:'youtube',nome:'Larissa',cargo:'Redatora'},{look:'publica',nome:'Rodrigo',cargo:'Publicador'}];
 const V=[{id:'a',titulo:'Tema',etapa:'pauta',vez:'dono'},{id:'b',titulo:'Vídeo',num:5,etapa:'revisao',vez:'dono',produtor:'Otávio',ficha:{cenario:'bar',cenas:[{n:1,desc:'x'}]}}];
 const docs={'equipe/agora':{agentes:ag},'calendario/posts':{itens:[]},'config/custos':{},'canal/youtube':{canal:{},serie:[],videos:[],publico:{}}};
 const db={doc:k=>({onSnapshot:f=>setTimeout(()=>f({exists:true,data:()=>docs[k]||{}}),30)}),collection:k=>({add:async()=>({id:'x'}),onSnapshot:f=>setTimeout(()=>f({docs:(k==='videos'?V:[]).map(d=>({id:d.id,data:()=>d})),metadata:{fromCache:false}}),30)})};
 window.claude={use:async k=>k==='db'?db:null};});
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(700);
const n=await p.evaluate(()=>({equipe:document.querySelectorAll('#team article').length,vez:document.querySelectorAll('#yours > *').length,esteira:document.querySelectorAll('#belt .station').length}));
try{for(const k of ['gerente','producao','youtube','publica']){await p.click(`article[data-sala="${k}"] .nm`);await p.waitForTimeout(150);if(k==='publica'){await p.click('[data-view="dash"]');await p.waitForTimeout(150)}await p.click('[data-sala-fechar]')}}catch(e){erros.push('Sala não abriu: '+e.message.split('\n')[0])}
await b.close();
if(erros.length||!n.equipe||!n.vez||!n.esteira){console.error('FALHOU',JSON.stringify(n),erros.join('\n'));process.exit(1)}console.log('OK',JSON.stringify(n))})();
