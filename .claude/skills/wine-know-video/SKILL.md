---
name: wine-know-video
description: Make a Wine Know – Dark Divino animated wine video in the approved house standard (Sommelier character, burgundy-gold look, Paulo voice from ElevenLabs, karaoke subtitles, jazz with sax, thumbnail open and logo close). Use for any Wine Know / Dark Divino video, "vídeo do canal de vinho", or when the user asks for a video "no nosso padrão".
argument-hint: "[tema do vídeo] [+ thumbnail anexada]"
---

# Wine Know – Dark Divino: vídeo animado no padrão aprovado

O vídeo-modelo aprovado é "Sobrou vinho?" (45 s). `template/film.js` é o projeto completo dele: todo vídeo novo parte dele e
precisa chegar no mesmo nível. Público: homens 40+, com dinheiro, que gostam de vinho e querem tirar dúvidas.
Tudo abaixo é relativo à pasta desta skill (chame de `SK`). Responda ao usuário em português, curto, sem jargão.

## Passo 1 — Entender o pedido
- Tema e a thumbnail (imagem do usuário, abre o vídeo). Sem thumbnail: peça; se não houver, abra com uma placa dourada do título.
- Cenário: escolha o que combina com o assunto (bar/cozinha com geladeira, adega, vinhedo, sala). NÃO é fixo.
- Duração alvo 40–45 s, ~11 cenas. Não pergunte o que o padrão já decide (voz, música, legenda, estilo).

## Passo 2 — Roteiro (uma frase por cena)
Estrutura do modelo: 0 thumbnail + gancho · 1 situação · 2–3 dicas numeradas (placas "1. ...", "2. ...") · 4–5 explicação/prazo
· 6 "dia bom" · 7–8 o erro, com reação engraçada · 9 tabela dourada com a resposta · 10 logo com **"Wine Know. Dark Divino."** (sempre).
Frases curtas e faladas, 3–5 s cada. Fatos corretos de vinho; na dúvida, prazos conservadores. Grave em `<pasta>/vo/lines.json`
como `[[0,0,"frase"], ...]`.

## Passo 3 — Montar a pasta
```
python3 SK/scripts/doctor.py                       # instala o que faltar (python, ffmpeg, chromium)
python3 SK/scripts/new_video.py <pasta> --thumb <thumbnail>
```
Se o Chromium já vier instalado no sistema (ex.: /opt/pw-browsers), use `pip install playwright==<mesma versão>` em vez de baixar outro.

## Passo 4 — Narração (ElevenLabs, voz Paulo)
```
python3 SK/scripts/tts_paulo.py <pasta>/vo/lines.json <pasta>/vo
python3 SK/scripts/plan_timing.py <pasta>
```
- Voz Paulo `Qrdut83w0Cr152Yb4Xn3`, eleven_multilingual_v2, estabilidade .45, similaridade .75, speed 1.05 (até 1.1 se apertar).
- A chave vai no cabeçalho `xi-api-key` e fica salva no ambiente (proxy). Se der 401 de chave ausente/sem permissão, peça a
  credencial do host `api.elevenlabs.io` (permissão mínima: Text to Speech). Nunca peça a chave no chat.
- `tts_paulo.py` usa o endpoint **with-timestamps**: gera `l00.mp3…` e `words.json` (tempo de cada palavra).
- `plan_timing.py` estica as cenas para a fala caber (nunca corte sentido), grava `starts.json` + `vo_words.js` e imprime `LEN=[...]`.

## Passo 5 — Escrever o filme (`<pasta>/film.js`)
Adapte o modelo; mantenha estes blocos como estão:
- **Personagem `C10` (Sommelier):** pele #E6BF98, cabelo/barba curta #5A3E2A, camisa creme, **colete #5E1428 e gravata-borboleta
  da MESMA cor**. Atrás do balcão a y=600 (cotovelos dobram).
- **Braço 3D (`p.arm3d=true`, mãos `[x,y,z]`):** cotovelo SEMPRE para baixo, junto ao corpo; mão vem para a frente (z>0) ao beber
  ou pegar. Mãos de descanso apoiadas em algo (garrafa/taça), nunca na cintura. Gestos com keyframes (ida, pausa, volta).
- **Gole (`glassT`):** taça inclina até ~1 rad, borda na boca, vinho SEMPRE nivelado e correndo para a borda, com leve balanço.
- **Time-warp:** escreva as cenas no tempo "antigo" (OLD) e cole o `LEN` do plan_timing no bloco final.
- **Transições:** dissolve ~0,5 s entre lugares diferentes (`DISS`). Nunca corte direto para close: comece médio e aproxime devagar.
- **Legenda karaokê (`karaoke`):** exatamente a fala; palavra fica dourada quando é dita (ditas #E2B456, atual #FFE39A, próximas
  #F3E6C8). Só enquanto ele explica: **sem legenda na tabela final e no logo**. Rótulos "DIA N" e placas de dica são permitidos.
- Abertura: `photo(IMG.thumb…)` ~3,5 s com zoom lento. Fechamento: `photo(IMG.logo…)` ~2,5 s.
- Paleta: fundo #140509, parede #2C0B15, vinho #5E1428, bordô #8E1B3A, ouro #D4A24C/#F2D27A, vela #FFB45E, creme #F3E6C8, garrafa #1E3A31.
  Títulos Cinzel 900 dourado (`goldText`), textos Cormorant 600, placas com moldura e ornamento.
- Cenários prontos em `engine/sets/` (bar.js com geladeira, cellar.js adega, room.js, cafe.js, street.js, symbolic.js).
  Cenário novo: formas chapadas, mesma paleta, um só "mundo" com posições fixas.

## Passo 6 — Som
```
python3 SK/scripts/jazz.py <pasta>/jazz.wav <duração total>
```
Trilha sempre jazz/blues/piano com sax (se o usuário mandar uma faixa liberada, use-a com `m.music_file`). Edite só o bloco
marcado de `audio_mix.py` (efeitos: rolha, taça, geladeira, calendário…). Voz na frente; música e efeitos abaixo.

## Passo 7 — Conferir e renderizar
```
python3 SK/scripts/stills.py <pasta> sheet.jpg <tempos...>   # veja a imagem; 2 rodadas é normal
python3 SK/scripts/build.py <pasta> --out <nome>.mp4         # roda em segundo plano; --shots N refaz só cenas
```
Antes de entregar, confira nos quadros: cotovelos para baixo, taça na boca com vinho nivelado, gravata igual ao colete,
legenda batendo com a fala, sem legenda no final, nenhum pulo de câmera. "pop" do audit em dissolves e na luz da geladeira é esperado.
Entregue o MP4 com nota curta e diga que o áudio foi medido, não ouvido.
