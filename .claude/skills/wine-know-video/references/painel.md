# Painel "Esteira Dark Divino" (artefato) — como funciona e como operar

Link: https://claude.ai/artifact/1t32YxYY99HV5bq4DAvcAB (privado do dono). Código: `painel/esteira.html` (cópia na skill em `painel/esteira.html`).
Publicar sempre com o MESMO arquivo (`Artifact` publish, file_path `/home/user/estampa3d/painel/esteira.html`, root `/home/user/estampa3d/painel`)
para manter o link. Imagens e prévias vão como `files` (`thumbs/...`, `previas/...`). Capacidades: `db`, `user`, `comments`.

## Fluxo (o dono decide; eu executo)
1. **Pauta** — eu sugiro temas (≥10 SEMPRE; reposição automática quando cair abaixo de 10, pesquisando Google/YouTube/redes).
   Dono: Aceitar / Recusar (botões na linha "Sua vez" ou arrastando o cartão; Recusados é uma coluna).
2. **Roteiro** — pesquisa profunda + roteiro + pronúncia. Dono: Aprovar / Mudar (com comentário).
3. **Thumbnail** — 3 opções A/B/C (pelo menos uma com texto à DIREITA — ele costuma escolher assim). **Escolher a letra = aprovar a execução**
   (pode gerar a voz). Junto vem um campo "pedido para o vídeo": obrigatório seguir.
4. **Produção** — voz (ElevenLabs), cenas, render. Fechamento obrigatório (tabela parada ≥8 s, brinde, logo 3,5 s).
5. **Revisão** — vídeo com prévia 480p (`painel/previas/<slug>.mp4`) para ele assistir no painel. Aprovar → 6. Ajustar → FICA na Revisão
   com estado "Ajustando o vídeo" até voltar para "Sua vez" (não volta para Produção).
6. **Entregue e aprovado**.

Cada decisão do dono vira um comentário "[Esteira] Decisões do dono: …" enviado a mim (comments.sendToClaude). Ao receber:
fazer o trabalho, responder no thread (ArtifactComments reply) e resolver o thread. Nunca gerar voz antes da thumb escolhida.

## Banco de dados (ArtifactData; sempre `if_version` ao atualizar)
- `videos/<id>`: titulo, num, etapa (pauta|roteiro|thumb|producao|revisao|entregue|recusado), vez (dono|claude), estado, ordem,
  gancho, emAlta, fontes, obs ("Recado meu" / o que o dono precisa decidir), roteiro[], pronuncia[], duracao, thumbs{A,B,C},
  thumbOpcoesImg, thumbEscolhida, thumbImg, video, previa, duracaoSeg, producaoMin, creditosVoz, pedido, historico[].
  - Roteiro pronto → `scripts/painel_roteiro.py <pasta> <num> "<recado>"` gera o JSON a partir de `painel.json`; depois `update`.
- `config/custos`: usdPor1000 (plano Creator: US$ 22 / 121 mil créditos), cotacao (R$ 6), moeda "BRL" (mostrar em reais),
  creditosUsadosTotal (160 mil informado pelo dono), ledger[{item,creditos}], ledgerNota. Custo médio = total ÷ vídeos prontos.
  Somar ao ledger cada nova geração de voz.
- `equipe/agora`: agentes[{look,nome,cargo,esperando,comoResolver,link,fazendo[{txt,pct,eta|bloqueio}],fila[...],nota}].
  Equipe: Beatriz (gerente), Sofia (pauta), Rafael (roteiro), Helena (thumbs), Otávio/Lucas/Marina (produção; Pedro e Júlia saíram em 20/11).
  Atualizar SEMPRE que um trabalho começa/termina; porcentagens: cenas ~50%, stills ~70%, voz ~85%, render ~95%, Revisão 100%.
  Agente travado → `esperando` + `comoResolver` + `link`; o card mostra "Já resolvi, pode continuar" (me manda um aviso; testar e retomar).

## Topo do painel
esperando você · em produção · em revisão · entregues · tempo médio (duracaoSeg) · custo médio por vídeo em R$ (clicável: detalhe e plano) ·
tempo de produção médio (producaoMin = minutos de máquina somados de roteiro+thumbs+cenas+voz+render+ajustes).
Ordem da página: números → A equipe agora → Sua vez → sugerir tema → esteira.

## Gerente automática
Tarefa agendada "Gerente da esteira Dark Divino" (de hora em hora, nesta sessão): lê painel e comentários, confere agentes,
dispara o que o dono já liberou, repõe a pauta, atualiza a equipe e só chama o dono quando precisa.

## Produção em paralelo (briefs prontos)
- `references/brief-comum.md` e `references/brief-producao.md` (inclui FECHAMENTO OBRIGATÓRIO e o pedido do dono).
- Thumbs: molde `engine/tfkit.js` (thumbTH, `right:true` = texto à direita); `scripts/th_run.sh <n> <A|B|C>`; entregar A/B/C.jpg, *-640.jpg,
  opcoes-NN.jpg e thumbs.json (A,B,C, recomendada, porque, tituloYouTube, layout).
- Voz: `scripts/tts_v3.py` salva cada bloco ao chegar e retoma sem pagar de novo; se acabar crédito, parar, salvar parciais em `pauta/<v>/vo-parcial/`
  e pôr o agente em "esperando".
- Prévia: `ffmpeg -i v.mp4 -vf scale=854:480 -c:v libx264 -preset veryfast -crf 30 -c:a aac -b:a 64k -movflags +faststart painel/previas/<slug>.mp4`.

## Escritórios (salas de cada funcionário)
- Cada cartão da equipe tem "Entrar no escritório →": abre a sala em tela cheia (Esc ou "Voltar ao painel" fecha; o painel principal fica igual).
- Sala = Fazendo agora (barras) · Passo a passo do cargo (passo atual em ouro, pela % da tarefa) · Próximas tarefas (fila + o que o
  painel mostra para aquele cargo) · Já fez · Ligação com a gerente (relatório que a Beatriz lê a cada ronda).
- Beatriz: "Mesa da gerente" com todos os agentes, relatório de cada um e atalho para cada sala.
- Rodrigo (publicador; antes era a Larissa): Contas conectadas (YouTube e Instagram do Dark Divino, via Windsor.ai) + Calendário de postagem (9 semanas; YouTube
  vermelho, Shorts laranja, Reels roxo; tracejado = vídeo ainda na Revisão). Ritmo: longos qui 19h e dom 18h; cortes 12h nos dias entre.
- Dados: `escritorios/<look>` {feitos:[{em,txt}], relatorio, pacotes:[nums] (Larissa), cortados:[nums] (Diego)} e
  `calendario/posts` {itens:[{data:'AAAA-MM-DD',hora,plat:'yt'|'sh'|'rl',titulo,status:'agendado'|'aguarda'|'publicado'}], nota, integracoes[]}.
  A cada trabalho concluído, acrescentar em `feitos` da sala; ao aprovar um vídeo, mudar o status dele no calendário para "agendado".
- Links de conexão do Windsor.ai NÃO vão para o painel (são da conta do dono); mandar no chat.
- Cartão inteiro da equipe é clicável (sem botão). Cartão e Mesa da gerente mostram: nome, cargo, bandeirinha (Trabalhando/Travado/Livre)
  e até 2 linhas do que está acontecendo, com NOME do vídeo, não só o número (resumoDe()).
- Toda sala mostra "Recebe de / Entrega para" (FLUXO) e a sala da Beatriz mostra "O caminho de um vídeo":
  Sofia → Você aceita → Rafael → Caio → Você aprova → Helena → Você escolhe → Produção → Você revisa → Diego → Larissa → Você publica.
  Ninguém pula etapa (a pauta não vira vídeo sem passar pela pesquisa profunda do Rafael e a checagem do Caio).
- Produtores: "Padrão único de produção" (igual para os 5: mesmo kit, voz, abertura/fechamento, Sommelier v10, legenda, jazz, stills)
  e "Histórico de produção" com cada vídeo (thumb, nome, etapa, duração); clicar abre a gaveta com a "Ficha de produção".
- Ao terminar um vídeo, gravar no doc do vídeo: `produtor` (nome) e `ficha` {cenario, regras[], cenas[{n,desc}], stills
  ('fichas/vNN-stills.jpg', publicado em files, máx. 1200 px), voz, som, legenda, fechamento, pasta}. Extrair de scenes_vNN.js
  (1ª linha = cenário; comentários "// N ..." = cena N) e de stills-conferencia.jpg.

## Painel do canal (sala do Rodrigo, publicador → botão "Painel do canal"; comentários assinados por ele)
- Igual ao YouTube Studio: Inscritos, Visualizações (28 d), Tempo de exibição (h), Duração média, Inscritos ganhos, Vídeos publicados;
  gráfico de visualizações por dia (28 d, com dica ao passar o mouse); um cartão por vídeo; Público (idade, gênero, tráfego, aparelho, país).
- Embaixo de cada cartão: comentário de especialista do Rodrigo (`comentarios.<chave>` e `videos[i].comentario`). Escrever de verdade,
  com base nos números (o que funcionou, o que mudar, quem avisar: Rafael para gancho, Helena para thumb/CTR).
- Dados: doc `canal/youtube`, gerado por `scripts/canal_youtube.py saida.json` (precisa de WINDSOR_API_KEY_DARKDIVINO no ambiente;
  conta separada da 3uniformes). Atualizar a cada ronda da Beatriz e reescrever os comentários quando os números mudarem.

## Teste obrigatório
`node scripts/testar_painel.js <caminho absoluto do esteira.html>` precisa dar OK antes de publicar (pega erro de JavaScript e painel vazio).
