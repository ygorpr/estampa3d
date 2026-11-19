# Wine Know – Dark Divino: padrão dos vídeos animados

Canal de vinho para homens 40+, com dinheiro, que gostam de vinho e querem tirar dúvidas.
Vídeos de bonecos (skill **/stickman**, repositório `michxlai/stickman-skill`) no padrão abaixo.
O kit pronto (motor ajustado, cenários, exemplo completo, ferramentas) está em `kit-dark-divino/`.
Instalar a skill: copiar `skills/stickman` do repositório para `~/.claude/skills/stickman`, depois copiar `kit-dark-divino/engine/*` por cima da pasta do filme.

## Visual
- Paleta Dark Divino: fundo #140509, parede #2C0B15, vinho #5E1428, bordô #8E1B3A, ouro #D4A24C, ouro claro #F2D27A, vela #FFB45E, creme #F3E6C8, garrafa #1E3A31.
- Títulos em ouro serifado (Cinzel 900), textos em Cormorant 600. Placas com moldura dourada e ornamento.
- Abrir com a thumbnail do vídeo (zoom lento, ~3,5 s) e fechar com o logo Wine Know (~2,5 s).
- Tela final com tabela em cartões dourados (ícone de taça + prazo/dica).
- Cenário NÃO é fixo: escolher o que combina com o assunto (bar/cozinha com geladeira, adega, vinhedo, sala...).

## Personagem padrão: Sommelier (versão 10)
- Pele #E6BF98, cabelo e barba curta castanhos #5A3E2A (risca lateral), camisa creme #F4F0E8,
  **colete vinho #5E1428 e gravata-borboleta da MESMA cor do colete (#5E1428)**. Cara de ~40-45 anos.
- **Braços com profundidade (arm3d):** a mão tem eixo z (vem para a frente). Cotovelo SEMPRE para baixo, junto ao corpo,
  nunca torto para dentro/fora. Antebraço encurta e engrossa ao vir para a frente. Mãos de descanso apoiadas em algo
  (garrafa, taça, balcão), nunca na cintura. Personagem atrás do balcão a y=600 para os cotovelos dobrarem.
- Gestos com ida, pausa e volta (keyframes com ease), sem movimento mole.
- Gole: a taça inclina até ~1 rad, a borda chega na boca, o vinho fica SEMPRE nivelado (horizontal) e corre para a borda, com leve balanço.

## Som
- Trilha: sempre jazz/blues/piano com sax (`kit-dark-divino/tools/jazz.py` gera uma; faixa real liberada é melhor se o usuário mandar).
- Narração: ElevenLabs, voz **Paulo** (ID `Qrdut83w0Cr152Yb4Xn3`), modelo eleven_multilingual_v2, estab. .45, simil. .75, speed ~1.05-1.1.
  Gerar frase por frase COM timestamps (`kit-dark-divino/tools/tts_paulo.py`); cada frase entra na sua cena.
  Se a fala não couber, esticar as cenas (time-warp), não cortar o sentido.
- Efeitos: rolha, taças, geladeira, calendário. Voz na frente; música e efeitos abaixo.

## Legendas
- **Legenda = exatamente o que o narrador fala**, estilo karaokê: frase atual embaixo, palavra dourada no instante em que é dita
  (já ditas em ouro, atual em ouro claro com leve escala, próximas em creme). Nada de textos de legenda diferentes da fala.
- Rótulos fixos permitidos: "DIA N" e as placas de dica ("1. TAMPE COM A ROLHA").

## Montagem
- Duração ~40-45 s (cabe a narração). Transições entre lugares diferentes (calendário ↔ bar) com dissolve de ~0,5 s.
- Nunca cortar direto para um close apertado: começar no enquadramento médio e aproximar devagar (push-in).
- Conferir quadros (stills) antes de renderizar; avisar que o áudio foi medido, não ouvido.
