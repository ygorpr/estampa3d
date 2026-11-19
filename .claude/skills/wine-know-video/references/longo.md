# Vídeo longo (2–3 min ou mais) — o formato aprovado para monetizar

Modelo completo: `examples/vinho-caro-3min/` (33 cenas, 2:59). O dono pediu vídeos de ~3 min; para anúncios no meio do vídeo o
YouTube exige 8 min ou mais, então para isso some capítulos (mesma estrutura, mais conteúdo).

## Roteiro em capítulos (retenção)
Gancho com promessa ("fica comigo até o final...") · Capítulo 1 · 2 · 3 ... · Bônus (3 dicas) · Resumo (tabela) · CTA (inscreva-se +
pergunta para comentar) · "Wine Know. Dark Divino.". Cada capítulo abre com um cartão "CAPÍTULO N" e termina com uma frase que puxa o
próximo. ~450 palavras ≈ 2,5 min de fala ≈ 3 min de vídeo. Fatos: cite estudos só de forma geral e verdadeira.

## Variedade visual (nunca a mesma cena 3 vezes seguidas)
Alterne: Sommelier falando (3 enquadramentos em rodízio) · cartão com chips que entram na palavra (`wt`) · gráfico (barra de preço,
curva preço×qualidade, contador animado) · cenário (vinhedo, adega com barris, prateleira) · capítulo. Troque a cada 4–8 s.

## Sommelier vivo
- `speak(t)`: boca abre e fecha com as palavras do Paulo (tempos do ElevenLabs) — o personagem "fala" a narração.
- Gestos prontos (`G` + `gest`): rest, open (mãos abertas), thinking (mão no queixo), point (aponta), bottleUp (ergue a garrafa),
  shrug (dá de ombros), wave (acena no CTA). Troque de gesto 1–3 vezes por cena, sempre com cotovelo para baixo (arm3d).
- Copie `talkScene`, `chapter`, `chipsCard`, `priceBar`, `curveCard`, `finalTable`, `ctaScene` do exemplo.

## Legenda
Sempre no máximo 2 linhas: o `karaoke()` divide frases longas em páginas e mostra a página que está sendo falada.

## Abertura = thumbnail viva
O primeiro quadro do vídeo é a própria thumbnail, idêntica pixel a pixel, e ela ganha vida (piscar, falar a 1ª frase, acenar, câmera
aproximando). Faça as duas com a MESMA função (`thumbFrame(t)` no exemplo): a thumb é `thumbFrame(0)` renderizada por `thumb.html`.
Use `fadeIn:0`. Depois da abertura, um dissolve leva à cena 1.

## Marca d'água
Selo do canal GRANDE (~460 px), centralizado na horizontal e abaixo do rosto (centro em y≈720), a ~7,5% de opacidade, em todas as
cenas menos a abertura e o logo final (`watermark()` no exemplo). Centralizado para sobreviver a um recorte vertical de Reels.

## Thumbnail
2 linhas de texto no máximo (sem nada por cima), rosto do Sommelier grande e expressivo como ponto focal, selo real do canal
(`assets/logo_badge.png`) PEQUENO e centralizado logo abaixo da linha vermelha, fundo escurecido atrás do texto. Confira em tamanho pequeno (320×180): tem que ler.
`make_thumb.py` já faz esse layout. Imagens locais no canvas pedem Chromium com `--allow-file-access-from-files`.

## Fechamento (aprovado)
- Tabela final: a narração cita CADA cartão, e cada cartão entra quando o Paulo diz a palavra dele (`wt`). Cartão sem fala = erro.
- CTA "Inscreva-se" + "Comente" no canto superior esquerdo: nada de botão ou cartão na faixa de baixo, que é da legenda.
