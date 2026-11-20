---
name: wine-know-video
description: Produz vídeos animados do canal de vinho Wine Know – Dark Divino no padrão aprovado (Sommelier de colete vinho, visual bordô e ouro, voz do Paulo no ElevenLabs, legenda karaokê igual à fala, jazz com sax, abre com a thumbnail e fecha com "Wine Know. Dark Divino."), além de pesquisa de pauta no YouTube, roteiro e thumbnail no estilo do canal. Use sempre que pedirem vídeo, Short, roteiro, thumb ou pauta do canal de vinho, "o próximo vídeo", "um vídeo no nosso padrão", "faz igual ao Sobrou vinho?", ou qualquer dúvida de vinho que deva virar vídeo do canal — mesmo que o pedido não cite o nome da habilidade.
---

> **LEIA PRIMEIRO `references/regras-do-dono.md`** — todas as regras e correções do dono do canal (pesquisa "nos confins do universo",
> público que não sabe nada de vinho, pronúncia por dicionário, 3 thumbs que dizem o assunto, voz SÓ após aprovação do roteiro,
> avisos nunca sobre a cabeça, bolhas só dentro da taça, personagens extras detalhados, não refazer vídeos entregues sem pedido).
>
> Biblioteca pronta de cenários/desenhos dos vídeos de curiosidade em `engine/lib/` (sets_garrafa, sets_rolha, sets_fundo, sets_cor,
> sets_champ, sets_mar, sets_antigo, sets_trio): oficina do vidreiro, taverna, porto, Roma, ânfora, sobreiro, microscópio, mergulhador,
> fundo do mar, bar de cruzeiro, museu, restaurante, garrafa de Speyer, uvas, taças com bolhas recortadas, carimbo, mapas...
> Exemplos completos em `examples/` (garrafa-750ml, rolha, buraco-no-fundo, garrafa-verde, ...). Thumb: `scripts/thumb_shot.py <pasta>`.
> Pronúncia na voz: `vo/pronuncia.json` lido por `scripts/tts_v3.py`.

# Wine Know – Dark Divino: vídeo animado no padrão aprovado

O canal fala com homens 40+, que têm dinheiro para vinho e querem tirar dúvidas sem enrolação. O dono aprovou um vídeo-modelo
("Sobrou vinho?") depois de várias rodadas de correção; esta habilidade existe para que todo vídeo novo saia nesse nível sem
repetir aqueles erros. `SK` = a pasta desta habilidade. Fale com o usuário em português, curto e sem jargão técnico.

Antes de começar, leia **`references/padrao.md`** (o que foi aprovado e por quê). Os outros arquivos você abre quando chegar no passo.


## FECHAMENTO OBRIGATÓRIO (erro real nos vídeos 11 e 12: "não teve final")
A ordem do fim é SEMPRE: fala de resumo → **tabela final** → CTA (inscreva-se) → **cena de fechamento** → **logo**.
- **Tabela final** (5 cartões, sem legenda): cartões entram um a um com calma (~1 s cada) e ficam PARADOS ≥ 8 s; a cena tem **≥ 14 s**.
  Se a tabela tem fala por cima, a cena dura a fala + 8 s de tabela parada.
- **Cena de fechamento** (sem fala, sem legenda, ~3 s): o Sommelier ergue a taça pela haste num brinde, câmera aproxima, música sobe.
- **Logo** 3,5 s com o áudio "Wine Know. Dark Divino.".
- Em `plan_timing.py` passe `--min` com esses mínimos (ex.: `--min 3 3 ... 14 6 3 3.5`) e acrescente a cena de fechamento no LEN.
- Pode passar dos 3 min (o dono autorizou). Conferir o FIM no contact sheet: os 5 cartões visíveis e o brinde antes do logo.

## Fluxo

**1. Pauta.** Se o usuário não deu tema, pesquise o que o público pergunta: `python3 SK/scripts/youtube_ideas.py` (autocompletar do
YouTube Brasil; precisa do host `suggestqueries.google.com` liberado) e, para os melhores candidatos,
`youtube_ideas.py --views "tema"` (vídeos que já existem: visualizações e idade — mostra o tamanho do interesse e se a concorrência
está velha). Pule temas que o canal já fez (veja `examples/` e a pasta de vídeos do projeto). Proponha 3–4 temas com as buscas
reais e os números que os justificam e deixe o usuário escolher — o tema é decisão dele.

**2. Pesquisa de fatos (antes de escrever).** Leia `references/pesquisa.md`: o vídeo mais visto do tema é a referência principal,
mas busque mais respostas em fontes confiáveis (lei/Embrapa, AWRI, Jancis Robinson, WSET, Decanter, Wine Spectator, Wine Folly,
Revista Adega, ABS) e grave `pesquisa.md` com cada fato e sua fonte. Nada de site sem base.

**3. Roteiro.** Formato padrão: **longo (~3 min), FLUIDO, sem capítulos** — as transições são feitas pela própria fala — leia `references/longo.md`; o curto (40–55 s,
~11 cenas) serve para Shorts. Uma frase falada por cena. Estrutura, tom e checagem de fatos em
`references/roteiro.md`. Grave em `<pasta>/vo/lines.json` como `[[0,0,"frase"], ...]`. A última frase é sempre "Wine Know. Dark Divino.".

**4. Pasta e thumbnail.** A thumb precisa DIZER O ASSUNTO (curiosidade, não mistério vazio); leve 3 opções com título do YouTube para o dono escolher.
```
python3 SK/scripts/doctor.py
python3 SK/scripts/new_video.py <pasta> --thumb <thumbnail-do-usuário>      # ou qualquer imagem provisória
python3 SK/scripts/make_thumb.py <pasta> --title "LINHA 1" "LINHA 2?" --set bar|cellar --bottles "exp:"     # 2 linhas, selo real
```
Se o usuário mandou thumbnail própria, ela abre o vídeo; se não, use a do `make_thumb.py` e mostre a ele.
Se o Chromium já existir no sistema (ex.: /opt/pw-browsers), instale `playwright` na mesma versão em vez de baixar outro.

**5. (Só com APROVAÇÃO EXPLÍCITA do roteiro pelo dono — nunca antes.) Voz do Paulo (com emoção — padrão aprovado "C").** Escreva `vo/tagged.json` com uma marcação de emoção por frase
(`[excited]`, `[curious]`, `[confident]`, `[emphatic]`, `[warm]`, `[serious]`, `[cheerful]`, `[playful]`, `[thoughtful]`, `[friendly]`;
pode pôr `[laughs]` ou outra marcação no meio da frase). A emoção acompanha o momento: curioso nas perguntas, empolgado no gancho e
nas descobertas, sério nos cuidados, simpático no convite.
```
python3 SK/scripts/tts_v3.py <pasta>/vo/tagged.json <pasta>/vo          # ElevenLabs v3, em blocos de 3 frases (embalo)
python3 SK/scripts/plan_timing.py <pasta> --min <duração mínima por cena...>
```
Gerar frase por frase sozinha (tts_paulo.py, v2) deixou a voz "mole": cada frase fecha descendo o tom. Use o v2 só se o v3 falhar.
A chave do ElevenLabs fica salva no ambiente (cabeçalho `xi-api-key`); nunca peça a chave no chat. 401 → peça a credencial do host
`api.elevenlabs.io` (permissão: Text to Speech). Eu não ouço áudio: em dúvida de tom, gere 2–3 amostras curtas e deixe o usuário escolher.

**6. Animação.** Avisos (chips) NUNCA cobrem o rosto/cabeça do Sommelier — use `engine/engine_part.js` (função `chipSafe`) e confira nos quadros. Comece do esqueleto `<pasta>/film.js` (já copiado) e escreva uma cena por frase. A API dos helpers, os cenários e os
padrões de gesto estão em `references/animacao.md`; dois vídeos completos para copiar cenas estão em `examples/`.
Confira quadros cedo e vá corrigindo: `python3 SK/scripts/stills.py <pasta> sheet.jpg <tempos>` e olhe a imagem (2 rodadas é normal).

**7. Som.** `python3 SK/scripts/jazz.py <pasta>/jazz.wav <duração>`; edite só o bloco marcado de `audio_mix.py` (efeitos da cena).

**8. Render e entrega.** `python3 SK/scripts/build.py <pasta> --out <nome>.mp4` (em segundo plano; `--shots N` refaz só cenas).
Passe pela lista de conferência de `references/padrao.md` olhando o `contact_sheet.jpg`, entregue o MP4 + a thumb e diga que o áudio
foi medido, não ouvido. "pop" do audit em dissolves e em luz que acende é esperado; quadro parado em cartão/tabela também.
