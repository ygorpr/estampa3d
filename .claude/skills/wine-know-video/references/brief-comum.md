# Briefing comum — vídeos 9 a 12 do canal Wine Know – Dark Divino (roteiros JÁ APROVADOS pelo dono)

LEIA ANTES: /home/user/estampa3d/.claude/skills/wine-know-video/references/regras-do-dono.md (todas as regras) e
/home/user/estampa3d/.claude/skills/wine-know-video/SKILL.md. Siga à risca. Linguagem do relatório final: português.

## Base de trabalho (já pronta, com TODOS os cenários e o motor corrigido)
- Copie a pasta base para a sua pasta de trabalho (sem `shots/`, `vo/`, `*.mp4`, `*.wav`):
  `S=/tmp/claude-0/-home-user-estampa3d/b0f0cc1c-a8e7-5c2a-8d40-81a18c04daff/scratchpad` ; base = `$S/trio/film`
  (index.html e thumb.html já carregam sets_extra, sets_garrafa, sets_rolha, sets_fundo, sets_cor, sets_champ, sets_mar, sets_antigo, sets_trio).
- Funções úteis prontas: talkScene, card/C3/chip/stamp/plaque/goldText/ornament/arrow/bar/calPage/serif, bottleS (estilos red/white/rose/spark/flint/amber/clear),
  oldBottle, glassW, fluteBubbles (bolhas recortadas no bojo), grapesC, halvedGrape, bigCork, baseSection, workshop, tavern, harbor, rome, museum,
  restaurant + restFront, cruiseBar, underwater, diver (mergulhador detalhado), monk, microscope, cellView, sunIcon, cloud, sandPile, palace, etc.
  Exemplos completos de cena: `$S/antigo/film/scenes_a.js`, `$S/mar/film/scenes_m.js`, `$S/cor/film/scenes_c.js` (copie o padrão: SC[], FILM, DISS, CARD, watermark, karaoke, finalTable, ctaScene, sons).
- Montagem do film.js: `{ echo "const LEN=[...],T=sceneStarts(LEN);"; cat engine_part.js thumb_X.js scenes_X.js; } > film.js` (LEN vem de `plan_timing.py .`).
- Thumb (quadro 0 = thumb): `python3 $S/rolha/shot_thumb.py <pasta>` gera <pasta>/thumb.jpg a partir de thumb.html (precisa de film.js com FILM mínimo, veja como os outros fizeram).

## Voz (roteiro aprovado → pode gerar)
- `vo/tagged.json` a partir da tabela do roteiro (coluna Fala; tag de emoção separada; última linha "Wine Know. Dark Divino." com tag vazia).
- `vo/pronuncia.json` com a tabela "Pronúncia" do roteiro (mesmo nº de palavras dos dois lados). Ex.: {"sommelier":"somelhê","sommeliers":"somelhês"}.
- `python3 /home/user/estampa3d/.claude/skills/wine-know-video/scripts/tts_v3.py <pasta>/vo/tagged.json <pasta>/vo` e depois `plan_timing.py <pasta>`.
- Gere a voz UMA vez. Não gere amostras extras (gasta crédito do dono).

## Cenas
- Uma cena por fala; cartões (C3) e cenas com o Sommelier falando (talkScene) alternados; dissolve 0,45 s; push-in nos cartões.
- Regras: avisos NUNCA sobre a cabeça (chipSafe já no motor), nada encostando na legenda (conteúdo até y≈870), texto dentro das placas,
  mão no gargalo/haste, cotovelo para baixo, bolhas só dentro da taça, personagens extras DETALHADOS (estilo do Sommelier), marca d'água, legenda ≤2 linhas,
  sem legenda na tabela final e no logo, CTA no canto superior esquerdo, logo final 3 s com "Wine Know. Dark Divino.".
- Confira wt(i,'palavra'): a palavra precisa existir na fala i (senão o efeito dispara no início da fala).
- ANTES de renderizar: `stills.py <pasta> r1.jpg <t1> <t2> ...` (um quadro por cena, ~88% de cada cena) e OLHE a imagem; corrija sobreposições.

## Render e entrega
- Trilha: `python3 .../scripts/jazz.py <pasta>/jazz.wav <duração+1>`. Render: `python3 .../scripts/build.py <pasta> --out <nome>.mp4 --jobs 2`.
  (Se mudar o código depois de renderizar, APAGUE `<pasta>/shots` ou use `--shots N` — o build reaproveita cenas antigas.)
- Olhe o contact_sheet.jpg. Copie o vídeo final e a thumb para /home/user/estampa3d/videos/ com os nomes indicados.
- Copie scenes/sets/thumb do vídeo e vo/tagged.json + vo/pronuncia.json para a pasta pauta/ do vídeo.
- NÃO faça git commit (o coordenador faz). Relatório final curto em português: duração, o que conferiu, problemas.
