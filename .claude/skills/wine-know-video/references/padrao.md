# O padrão aprovado (e por que cada regra existe)

O vídeo-modelo é `examples/sobrou-vinho/` ("Sobrou vinho?", 45 s, narrado pelo Paulo). `examples/vinho-caro/` é o segundo vídeo.

## Personagem: o Sommelier (versão 10)
- Pele #E6BF98, cabelo e barba curta #5A3E2A com risca, camisa creme, **colete #5E1428 e gravata-borboleta da mesma cor do colete**.
  O dono escolheu essa combinação; gravata dourada ou preta foi rejeitada. Já está no helper `C10`.
- Aparência de ~40–45 anos: é o público se vendo na tela. Versões grisalhas pareceram velhas demais.

## Braços (a correção que mais custou)
- Use sempre `arm3d` (helpers `sommPose` + `setHands`): a mão tem profundidade z. Sem isso o braço só dobra no plano da tela e, ao levar a
  taça à boca, o cotovelo é jogado para dentro ou para fora e "parece quebrado".
- Cotovelo para baixo, junto ao corpo. Mão que bebe/pega vem para a frente (z 70–160). Mão parada fica apoiada em algo (garrafa, taça,
  balcão) — mão solta perto da cintura lê como "mão na cintura".
- Personagem atrás do balcão a y=600: assim o balcão (y=800) fica ao alcance com cotovelo dobrado; mais alto, o braço estica e fica mole.
- Gestos por keyframes (`kf`) com ida, pausa e volta. Movimento contínuo sem pausa pareceu "sem coordenação motora".

## O gole
- A taça inclina até ~1 rad e a borda chega na boca (`sipKeys`). Com inclinação pequena "o vinho não levanta".
- O vinho fica sempre nivelado e corre para a borda (`glassT`); no primeiro vídeo ele girava junto com a taça e pareceu errado.

## Legendas
- Legenda = exatamente o que o Paulo fala, estilo karaokê (palavra fica dourada quando é dita). Textos soltos diferentes da fala
  foram rejeitados. Vem pronto em `karaoke()` a partir do `words.json` do ElevenLabs.
- Só enquanto ele explica: tabela final e logo ficam sem legenda (`installFinish(T,DISS,<cena da tabela>)`).
- Rótulos fixos são bem-vindos: "DIA N", placas de dica "1. ...", chips de palavra-chave, etiquetas de preço.

## Montagem e câmera
- Abrir com a thumbnail (~3,5–4,5 s, zoom lento) e fechar com o logo + "Wine Know. Dark Divino." — o dono pediu esse final em todos.
- Dissolve de ~0,5 s entre lugares diferentes (calendário ↔ bar, cartão ↔ cena). Corte seco para close apertado "pulou a câmera":
  comece no enquadramento médio e aproxime devagar.
- Cenário não é fixo: o que combina com o assunto (bar com geladeira, adega, sala, rua, vinhedo...).

## Visual e som
- Paleta: fundo #140509, parede #2C0B15, vinho #5E1428, bordô #8E1B3A, ouro #D4A24C/#F2D27A, vela #FFB45E, creme #F3E6C8, garrafa #1E3A31.
  Títulos em ouro Cinzel 900 (`goldText`), textos em Cormorant 600, placas com moldura e ornamento.
- Trilha: jazz/blues/piano com sax (o dono pediu; `jazz.py`). Voz na frente, música e efeitos abaixo.
- Voz: ElevenLabs, Paulo `Qrdut83w0Cr152Yb4Xn3`, eleven_multilingual_v2, estabilidade .45, similaridade .75, speed 1.05–1.1.

## Lista de conferência (olhe os quadros, não confie só no audit)
1. Cotovelos para baixo em todo gesto; nenhuma mão na cintura; mãos encostam no que seguram.
2. No gole, borda da taça na boca e vinho nivelado.
3. Gravata da mesma cor do colete.
4. Legenda batendo com a fala; sem legenda na tabela final e no logo.
5. Nenhum corte direto para close; dissolves entre lugares.
6. Abre com a thumbnail, fecha com "Wine Know. Dark Divino.".
7. Nada cruza o rosto (garrafa, placa, etiqueta).
