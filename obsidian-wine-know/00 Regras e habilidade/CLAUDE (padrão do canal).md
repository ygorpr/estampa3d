# Wine Know – Dark Divino: padrão dos vídeos animados

Canal de vinho para homens 40+, com dinheiro, que gostam de vinho e querem tirar dúvidas.
Vídeos de bonecos (skill **/stickman**, repositório `michxlai/stickman-skill`) no padrão abaixo.
**Habilidade instalada: `/wine-know-video`** (`.claude/skills/wine-know-video/`) e agente `wine-know-video` (`.claude/agents/`).
Para um vídeo novo: "faz um vídeo do canal sobre <tema>" + thumbnail. O zip para o app do Claude está em `wine-know-video.zip`.
O kit pronto (motor ajustado, cenários, exemplo completo, ferramentas) está em `kit-dark-divino/`.
Instalar a skill: copiar `skills/stickman` do repositório para `~/.claude/skills/stickman`, depois copiar `kit-dark-divino/engine/*` por cima da pasta do filme.

## LEIA PRIMEIRO
- `.claude/skills/wine-know-video/references/regras-do-dono.md`: TODAS as regras e correções do dono (pesquisa profunda, público leigo,
  pronúncia por dicionário, 3 thumbs que dizem o assunto, voz só após aprovação, gestos, avisos, bolhas, personagens extras).
- Situação atual dos vídeos: `pauta/STATUS.md` e o painel https://claude.ai/artifact/1t32YxYY99HV5bq4DAvcAB (ver `.claude/skills/wine-know-video/references/painel.md`). Biblioteca de cenários: `.claude/skills/wine-know-video/engine/lib/`.
- Responder ao dono SEMPRE em português.
- Cofre do Obsidian de tudo do Wine Know: `C:\Users\User\Desktop\GPT - WINE KNOW` (cópia no repo em `obsidian-wine-know/`).

## Referência de qualidade (APROVADA pelo dono do canal)
- **`videos/sobrou-vinho-narrado-paulo.mp4`** é o vídeo-modelo. Todo vídeo novo deve chegar neste nível.
  O projeto completo dele está em `kit-dark-divino/exemplo-sobrou-vinho/` (partir dele para novos temas).
- Sempre terminar com o logo Wine Know e a narração **"Wine Know. Dark Divino."** (sem legenda nessa parte).

## Visual
- Paleta Dark Divino: fundo #140509, parede #2C0B15, vinho #5E1428, bordô #8E1B3A, ouro #D4A24C, ouro claro #F2D27A, vela #FFB45E, creme #F3E6C8, garrafa #1E3A31.
- Títulos em ouro serifado (Cinzel 900), textos em Cormorant 600. Placas com moldura dourada e ornamento.
- **Primeiro quadro = a thumbnail, idêntica, que ganha vida** (o Sommelier pisca, fala a 1ª frase, acena; câmera aproxima devagar).
  Thumb e abertura saem do MESMO código (`thumbFrame(0)` = thumb). Fechar com o logo Wine Know (~2,5–3 s).
- Thumb: 2 linhas de texto que DIZEM O ASSUNTO do vídeo (curiosidade sim, mistério vazio não: "A LUZ ESTRAGA SEU VINHO!", não "O INIMIGO INVISÍVEL"); sempre levar 3 opções. Rosto como ponto focal, selo do canal PEQUENO, centralizado, logo abaixo da linha vermelha.
- Marca d'água: selo do canal GRANDE, centralizado (abaixo do rosto), bem clarinho (~7,5%), em todas as cenas menos abertura e logo final
  — sobrevive a recorte de Reels.
- Avisos/placas NUNCA por cima do rosto ou da cabeça do Sommelier (o motor empurra para o lado livre: `chipSafe`).
- Bolhas e líquidos SEMPRE dentro do recipiente (taça/garrafa): nada na haste nem fora do vidro (`fluteBubbles` recorta no bojo).
- Mão NUNCA na frente do rótulo: mão apoiada fica atrás da garrafa; ao erguer, segura pelo gargalo.
- Tela final com tabela em cartões dourados (ícone de taça + prazo/dica).
- Cenário NÃO é fixo: escolher o que combina com o assunto (bar/cozinha com geladeira, adega, vinhedo, sala...).

## Personagens extras (mergulhador, monge, cientista...)
- Sempre PERSONAGEM de verdade, no mesmo estilo e com o mesmo cuidado do Sommelier (rosto, roupa, mãos, equipamento, movimento).
  Nunca forma genérica ou mancha (ex.: o mergulhador `diver()` tem máscara, rosto, cilindro, braços, pernas e nadadeiras batendo).

## Personagem padrão: Sommelier (versão 10)
- Pele #E6BF98, cabelo e barba curta castanhos #5A3E2A (risca lateral), camisa creme #F4F0E8,
  **colete vinho #5E1428 e gravata-borboleta da MESMA cor do colete (#5E1428)**. Cara de ~40-45 anos.
- **Braços com profundidade (arm3d):** a mão tem eixo z (vem para a frente). Cotovelo SEMPRE para baixo, junto ao corpo,
  nunca torto para dentro/fora. Antebraço encurta e engrossa ao vir para a frente. Mãos de descanso apoiadas em algo
  (garrafa, taça, balcão), nunca na cintura. Personagem atrás do balcão a y=600 para os cotovelos dobrarem.
- Gestos com ida, pausa e volta (keyframes com ease), sem movimento mole.
- Gole: a taça inclina até ~1 rad, a borda chega na boca, o vinho fica SEMPRE nivelado (horizontal) e corre para a borda, com leve balanço.

## Fluxo de aprovação (regra do dono)
- A voz (ElevenLabs) é gerada SÓ depois que o dono APROVAR o roteiro daquele vídeo, de forma explícita. Mudou o roteiro? Mostra de novo e espera.
- Não refazer vídeos já entregues sem o dono pedir; corrigir só o que ele apontou e perguntar antes de re-renderizar os outros.

## Som
- Trilha: sempre jazz/blues/piano com sax (`kit-dark-divino/tools/jazz.py` gera uma; faixa real liberada é melhor se o usuário mandar).
- Narração: ElevenLabs, voz **Paulo** (ID `Qrdut83w0Cr152Yb4Xn3`), modelo **eleven_v3 com marcações de emoção** por frase (voz "C"
  aprovada), gerada em BLOCOS de 3 frases e cortada por frase (`.claude/skills/wine-know-video/scripts/tts_v3.py`).
  Texto escrito para falar: perguntas, exclamações, frases curtas. Nada de frase isolada (fica "mole").
  Se a fala não couber, esticar as cenas (time-warp), não cortar o sentido.
- Nomes estrangeiros: checar a pronúncia em dicionário (IPA) e combinar com o dono ANTES da voz. Na voz escreve-se como se fala
  (ex.: Veuve Clicquot /vœv kli.ko/ → "Vév Clicô"); a legenda mostra a grafia certa. Veuve Clicquot é a MARCA — não traduzir para "viúva".
- Efeitos: rolha, taças, geladeira, calendário. Voz na frente; música e efeitos abaixo.

## Legendas
- **Legenda = exatamente o que o narrador fala**, estilo karaokê: frase atual embaixo, palavra dourada no instante em que é dita
  (já ditas em ouro, atual em ouro claro com leve escala, próximas em creme). Nada de textos de legenda diferentes da fala.
- Legenda só enquanto ele explica: na tela final (tabela "Quanto dura aberto?") e no logo, SEM legenda.
- Rótulos fixos permitidos: "DIA N" e as placas de dica ("1. TAMPE COM A ROLHA").

## Roteiro
- Público: quem NÃO sabe nada de vinho. Explicar na hora toda palavra difícil (ânfora, sobreiro, espumante...) e contar a linha do tempo
  sem buracos (se algo sumiu e voltou, dizer que sumiu e por quanto tempo). Fatos só de fonte confiável, com `pesquisa.md`.

## Montagem
- Formato padrão: longo (~3 min), FLUIDO e SEM capítulos (transição pela fala), com gancho, CTA de inscrição e tabela final; o curto (~40–45 s) é para Shorts. Transições entre lugares diferentes (calendário ↔ bar) com dissolve de ~0,5 s.
- Nunca cortar direto para um close apertado: começar no enquadramento médio e aproximar devagar (push-in).
- Conferir quadros (stills) antes de renderizar; avisar que o áudio foi medido, não ouvido.
