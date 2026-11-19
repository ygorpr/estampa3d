---
name: wine-know-video
description: Produz vídeos animados do canal de vinho Wine Know – Dark Divino no padrão aprovado (Sommelier de colete vinho, visual bordô e ouro, voz do Paulo no ElevenLabs, legenda karaokê igual à fala, jazz com sax, abre com a thumbnail e fecha com "Wine Know. Dark Divino."), além de pesquisa de pauta no YouTube, roteiro e thumbnail no estilo do canal. Use sempre que pedirem vídeo, Short, roteiro, thumb ou pauta do canal de vinho, "o próximo vídeo", "um vídeo no nosso padrão", "faz igual ao Sobrou vinho?", ou qualquer dúvida de vinho que deva virar vídeo do canal — mesmo que o pedido não cite o nome da habilidade.
---

# Wine Know – Dark Divino: vídeo animado no padrão aprovado

O canal fala com homens 40+, que têm dinheiro para vinho e querem tirar dúvidas sem enrolação. O dono aprovou um vídeo-modelo
("Sobrou vinho?") depois de várias rodadas de correção; esta habilidade existe para que todo vídeo novo saia nesse nível sem
repetir aqueles erros. `SK` = a pasta desta habilidade. Fale com o usuário em português, curto e sem jargão técnico.

Antes de começar, leia **`references/padrao.md`** (o que foi aprovado e por quê). Os outros arquivos você abre quando chegar no passo.

## Fluxo

**1. Pauta.** Se o usuário não deu tema, pesquise o que o público pergunta: `python3 SK/scripts/youtube_ideas.py` (autocompletar do
YouTube Brasil; precisa do host `suggestqueries.google.com` liberado) e, para os melhores candidatos,
`youtube_ideas.py --views "tema"` (vídeos que já existem: visualizações e idade — mostra o tamanho do interesse e se a concorrência
está velha). Pule temas que o canal já fez (veja `examples/` e a pasta de vídeos do projeto). Proponha 3–4 temas com as buscas
reais e os números que os justificam e deixe o usuário escolher — o tema é decisão dele.

**2. Roteiro.** Formato padrão agora é o **longo (~3 min, em capítulos)** — leia `references/longo.md`; o curto (40–55 s,
~11 cenas) serve para Shorts. Uma frase falada por cena. Estrutura, tom e checagem de fatos em
`references/roteiro.md`. Grave em `<pasta>/vo/lines.json` como `[[0,0,"frase"], ...]`. A última frase é sempre "Wine Know. Dark Divino.".

**3. Pasta e thumbnail.**
```
python3 SK/scripts/doctor.py
python3 SK/scripts/new_video.py <pasta> --thumb <thumbnail-do-usuário>      # ou qualquer imagem provisória
python3 SK/scripts/make_thumb.py <pasta> --title "LINHA 1" "LINHA 2?" --set bar|cellar --bottles "exp:"     # 2 linhas, selo real
```
Se o usuário mandou thumbnail própria, ela abre o vídeo; se não, use a do `make_thumb.py` e mostre a ele.
Se o Chromium já existir no sistema (ex.: /opt/pw-browsers), instale `playwright` na mesma versão em vez de baixar outro.

**4. Voz do Paulo.**
```
python3 SK/scripts/tts_paulo.py <pasta>/vo/lines.json <pasta>/vo
python3 SK/scripts/plan_timing.py <pasta> --min <duração mínima por cena...>
```
A chave do ElevenLabs fica salva no ambiente e é injetada no cabeçalho `xi-api-key`; nunca peça a chave no chat. Se vier 401 por
falta de chave ou de permissão, peça a credencial do host `api.elevenlabs.io` (permissão mínima: Text to Speech). O `plan_timing`
estica as cenas para a fala caber (melhor que cortar sentido) e imprime `LEN=[...]` para o `film.js`.

**5. Animação.** Comece do esqueleto `<pasta>/film.js` (já copiado) e escreva uma cena por frase. A API dos helpers, os cenários e os
padrões de gesto estão em `references/animacao.md`; dois vídeos completos para copiar cenas estão em `examples/`.
Confira quadros cedo e vá corrigindo: `python3 SK/scripts/stills.py <pasta> sheet.jpg <tempos>` e olhe a imagem (2 rodadas é normal).

**6. Som.** `python3 SK/scripts/jazz.py <pasta>/jazz.wav <duração>`; edite só o bloco marcado de `audio_mix.py` (efeitos da cena).

**7. Render e entrega.** `python3 SK/scripts/build.py <pasta> --out <nome>.mp4` (em segundo plano; `--shots N` refaz só cenas).
Passe pela lista de conferência de `references/padrao.md` olhando o `contact_sheet.jpg`, entregue o MP4 + a thumb e diga que o áudio
foi medido, não ouvido. "pop" do audit em dissolves e em luz que acende é esperado; quadro parado em cartão/tabela também.
