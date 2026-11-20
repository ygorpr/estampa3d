# Regras do dono do canal — tudo o que ele já pediu e corrigiu (LER ANTES DE QUALQUER VÍDEO)

Consolidado de meses de conversa. Cada item é um pedido ou uma correção real do dono. Não repita os erros listados.

## 1. Público, idioma e tom
- Canal **Wine Know – Dark Divino**. Público: homens 40+, com dinheiro, que gostam de vinho. MAS o roteiro é escrito para
  **quem NÃO sabe nada de vinho**: toda palavra difícil é explicada na hora ("ânfora: um jarro grande de barro, com duas alças";
  "sobreiro, a árvore da cortiça"; "espumante, o vinho com gás"; "maceração"; "antocianina").
- **Responder e pensar em português** com o dono (ele pediu explicitamente). Mensagens curtas, claras, sem jargão técnico de programação.
- Linha do tempo SEM buracos: se algo existiu, sumiu e voltou, dizer que sumiu e por quanto tempo
  (erro real: "no séc. XVII a cortiça voltou" sem ter dito que tinha sumido por ~1.000 anos).

## 2. Pauta (escolha de temas)
- O dono gosta de **CURIOSIDADES**, não de temas batidos de "dica de compra". Ex. que ele aprovou: por que a garrafa tem 750 ml;
  e antes da rolha?; o buraco no fundo da garrafa; por que a garrafa é verde; quem inventou o champanhe; champanhe no fundo do mar;
  o vinho mais antigo do mundo; por que brindamos; de onde vem a cor do vinho; o ritual da rolha no restaurante; de onde vem a palavra sommelier.
- Quando ele pedir temas: pesquisar e trazer **~10 opções** com 1–2 linhas cada (o gancho e o fato surpreendente), recomendar 2 e esperar a escolha.
- **Pauta SEMPRE pesquisada no Google, no YouTube e nas redes (TikTok, Instagram, Reddit, notícias)** para saber do que o público está
  falando agora; **sempre que a Pauta da esteira ficar sem assunto (ou abaixo de 10), gerar sozinho mais 10 temas novos** a partir dessas pesquisas,
  sem esperar pedido, aprendendo com o que ele aceitou e recusou (ver histórico no painel); trazer **no mínimo 10 temas** na esteira, cada um com o gancho e a evidência ("o que estão falando": vídeo, matéria, dúvida comum).
- Painel de decisões: artefato "Esteira Dark Divino" (https://claude.ai/artifact/1t32YxYY99HV5bq4DAvcAB, código em `painel/esteira.html`).
  O dono aceita/recusa, aprova roteiro e escolhe a thumb arrastando o cartão ou pelos botões; cada decisão me chega como comentário.
  **Escolher a thumb (A/B/C) = aprovar a execução** (pode gerar a voz). Junto com a escolha ele pode mandar um pedido para o vídeo:
  esse pedido é obrigatório de seguir na produção. Não existe mais a etapa separada "Aprovar execução" (pedido do dono, 20/11/2026).
  Ler as decisões com ArtifactData (coleção `videos`) e atualizar os cartões (etapa, vez, roteiro, thumbs) conforme o trabalho anda.
- Pesquisa de demanda no YouTube (`scripts/youtube_ideas.py`) ajuda, mas curiosidade boa vale mesmo sem busca (cresce por recomendação/Shorts).
- Um tema pode virar dois vídeos (ex.: rolha no restaurante + palavra "sommelier"). Se surgir um assunto paralelo bom, separar em outro vídeo.

## 3. Pesquisa — nível de aprofundamento exigido
- **"Ir nos confins do universo"**: buscar a origem real, a etimologia, a história completa, a química/física por trás, números,
  datas, nomes, e as curiosidades que quase ninguém sabe. Exemplos do nível esperado:
  - 750 ml: a lenda do fôlego do vidreiro (desmentida) × a explicação do galão inglês (1/6 de galão = 757 ml; barrica 225 L = 300 garrafas) × 75 cl na Europa dos anos 70 e EUA 1979.
  - Cor do vinho: antocianinas, pH (vermelho→roxo→azul), SO2 que descora e volta, pigmentos polimerizados, espectrofotômetro 420/520/620 nm, tijolo com a idade.
  - Sommelier: grego *ságma* → latim *sagmarius* → francês *sommier* (= nosso "somiê", a cama box!) → sommelier; Grande Bouteiller → "butler"; escanção em Portugal; 1969, ~300 Master Sommeliers.
  - Brinde: libação grega, Ovídio em Roma, alemão "bring dir's" → "brinde", "toast" = torrada, mito do veneno, superstições do Brasil (gole pro santo, copo vazio, olhar nos olhos).
- **Ângulo Brasil** sempre que existir (como se faz/vê aqui, palavras em português, costumes).
- **Mito × verdade** dá ótimos ganchos: dizer claramente o que é lenda ("ninguém prova", "é lenda") e o que é comprovado.
- Fontes: só confiáveis (dicionários, museus, órgãos oficiais, estudos científicos/PNAS/PMC, Wine Spectator, Decanter, Jancis Robinson,
  Wine Folly, WSET, Comité Champagne, Britannica). Blog/loja/IA só como pista. Cada fato com link no `pesquisa.md` do vídeo.
- Fonte fraca ou divergente: dizer "a explicação mais aceita", "dizem que", usar faixa ("uns 150"), ou TIRAR do roteiro (e registrar em "Fora do roteiro").
- Fatos não checados ficam marcados "checar antes da voz"; se não achar fonte, tirar a frase e avisar o dono.

## 4. Pronúncia (nomes estrangeiros)
- Toda palavra estrangeira: checar em DICIONÁRIO (IPA) — não mandar "3 gravações para ele escolher". Ele quer: como se escreve, como se fala, a fonte.
- Tabela "Pronúncia" no topo do roteiro: Escreve | Fala | Fonte.
- Na voz vai "como se fala" via `vo/pronuncia.json` (mesmo nº de palavras); a legenda mostra a grafia certa. Ex.:
  `{"Veuve Clicquot": "Vév Clicô", "sommelier": "somelhê", "Pinot Noir": "Pinô Nuár", "blanc de noirs": "blã de nuár", "Shakespeare": "Xêikspir"}`.
- **Veuve Clicquot é a MARCA** (/vœv kli.ko/, "vév cli-KÔ"): não traduzir para "viúva Clicquot". A pessoa é "Madame Clicquot".

## 5. Fluxo de aprovação (OBRIGATÓRIO)
1. Pesquisa → roteiro (tabela) + `pesquisa.md` + tabela de pronúncia + **3 opções de thumb** → enviar e PARAR.
2. Voz (ElevenLabs gasta crédito do dono) **SÓ depois do "aprovado" explícito do roteiro**. Escolher thumb NÃO é aprovar roteiro.
   Mudou qualquer frase? Mostrar de novo e esperar.
3. Depois da voz: cenas → stills de conferência → corrigir → render → conferir contact sheet → enviar vídeo + thumb.
- **Não refazer vídeos já entregues** sem ele pedir. Corrigir só o que ele apontou; refazer só as cenas afetadas (`build.py --shots N N+1`).
- ATENÇÃO ao cache: `build.py` reaproveita `shots/`. Mudou o código? Apagar `shots/` (ou usar `--shots`) — senão o vídeo sai igual (erro real).

## 6. Thumbnail
- 2 linhas que **DIZEM O ASSUNTO** (curiosidade sim, mistério vazio não). Reprovadas: "E ESSE BURACO?", "O INIMIGO INVISÍVEL", "O VILÃO DO VINHO".
  Aprovadas: "POR QUE 750 ML?", "E ANTES DA ROLHA?", "VOCÊ NUNCA REPAROU?", "POR QUE A GARRAFA É VERDE?", "QUEM INVENTOU O CHAMPANHE?",
  "CHAMPANHE NO FUNDO DO MAR", "VINHO DE 1.700 ANOS", "POR QUE A GENTE BRINDA?", "DE ONDE VEM A COR DO VINHO?", "CHEIRAR A ROLHA É ERRO?".
- Sempre 3 opções (imagem única com as 3) + título de YouTube sugerido para cada + recomendação.
- Texto não encosta em nada (garrafa, vitrine). Rosto = ponto focal. Selo PEQUENO centralizado logo abaixo da linha vermelha. Sem brilho forçado.
- Primeiro quadro do vídeo = a thumb idêntica, que ganha vida (`thumbFrame(0)`).

## 7. Personagem e gestos (Sommelier v10)
- Colete e gravata-borboleta vinho #5E1428 (mesma cor). Braços arm3d, **cotovelo sempre para baixo**, sem braço "mole" ou "quebrado".
- Mãos de descanso apoiadas em algo (garrafa, taça, balcão, vitrine) — nunca na cintura, nunca soltas no ar.
- **Mão NUNCA na frente do rótulo**: segura a garrafa pelo GARGALO. Taça pela haste.
- Gestos com ida, pausa e volta. Gole com o vinho sempre nivelado.
- Personagens extras (mergulhador, monge, cientista, burro de carga...) = **personagem de verdade**, detalhado, no estilo do Sommelier
  (erro real: mergulhador era uma "mancha"; agora `diver()` tem máscara, rosto, cilindro, braços, pernas, nadadeiras).
- Cenário combina com o assunto e com o pedido do dono (ex.: bar do navio de cruzeiro, laboratório de análise, restaurante com mesa, museu, adega, oficina do vidreiro).

## 8. Tela, avisos e legendas
- **Avisos (chips) NUNCA sobre o rosto/cabeça** (motor: `chipSafe` empurra para o lado ou para o topo). Conferir no fim da cena (zoom maior).
- Nada encosta na legenda (avisos, garrafas, placas: até y≈880). Texto não sai de placa/cartão.
- **Bolhas e líquidos só dentro do recipiente** (`fluteBubbles` recorta no bojo da taça). Sem bolha na haste.
- Legenda = exatamente a fala, karaokê, **no máximo 2 linhas**. Sem legenda na tabela final e no logo.
- Marca d'água grande e clarinha. Tabela final em 5 cartões dourados. CTA no canto superior esquerdo. Logo + "Wine Know. Dark Divino."

## 9. Voz e som
- ElevenLabs, voz Paulo, **eleven_v3 com emoção por frase** (voz "C" aprovada), em blocos de 3 frases (`scripts/tts_v3.py`). Logo final sozinho.
- Frases para falar (perguntas, exclamações, curtas). Vídeo FLUIDO, sem capítulos, transição pela fala. ~3 min (até ~3 min 45 s está ok).
- Jazz/blues/piano com sax. Avisar sempre: "o áudio foi medido, não ouvido".

## 10. Comunicação
- Mostrar o que foi feito em frases simples; mandar arquivos (vídeo + thumb; roteiro + pesquisa) pelo SendUserFile.
- Se algo travar (ex.: GitHub sem acesso), avisar UMA vez com o link de solução; não repetir em toda resposta.
