# Briefing de PRODUÇÃO — Wine Know – Dark Divino (roteiro, thumb e execução JÁ APROVADOS pelo dono no painel)

O dono aprovou no painel "Esteira Dark Divino": roteiro APROVADO + thumb escolhida + "Execução APROVADA (pode gerar a voz)".
Portanto você PODE gerar a voz (uma única vez). Siga também o briefing comum: /tmp/claude-0/-home-user-estampa3d/b0f0cc1c-a8e7-5c2a-8d40-81a18c04daff/scratchpad/BRIEF-COMUM.md
(seção "Voz": "roteiro aprovado → pode gerar"), e LEIA /home/user/estampa3d/.claude/skills/wine-know-video/references/regras-do-dono.md.

## Material pronto do vídeo (na pasta pauta/<NN-...>/)
- roteiro.md (tabela de falas com tag de emoção e o que aparece na tela; tabela de pronúncia), pesquisa.md, painel.json, pronuncia.json (se não houver, monte a partir da tabela "Pronúncia").
- thumbs/thumbs.json com "escolhida": a letra escolhida. O código da thumb escolhida é o tf_*_<LETRA>.js da pasta (ou em pauta/<pasta>/), e os sets novos (sets_*.js) estão na pasta. O QUADRO 0 DO VÍDEO = ESSA THUMB (thumbFrame(0)), que ganha vida.
- Pastas de trabalho das thumbs (com o motor + sets): $S/th<NN>/film — use como base (copie para $S/v<NN>/film sem shots/, vo/, *.mp4, *.wav).

## Passos
1. vo/tagged.json a partir da tabela do roteiro (texto EXATO da fala, tag separada; última "Wine Know. Dark Divino." com tag vazia) + vo/pronuncia.json.
2. tts_v3.py UMA vez → plan_timing.py → cenas (uma por fala; usar o "o que aparece na tela" do roteiro) → stills de conferência (OLHE) → corrigir → jazz → build.py → OLHE o contact_sheet.jpg.
3. Copie o vídeo final para /home/user/estampa3d/videos/<slug>.mp4 e a thumb escolhida (1920x1080) para /home/user/estampa3d/videos/thumb-<slug>.jpg.
4. Copie scenes/sets/thumb/tagged/pronuncia para a pasta pauta/ do vídeo. NÃO faça git commit.
5. Relatório curto em português: duração, o que conferiu, problemas, e lembrar "áudio medido, não ouvido".

## FECHAMENTO OBRIGATÓRIO (o dono reclamou 2x: "não teve final")
Ordem: resumo → TABELA FINAL (cartões entram durante a fala do resumo; depois da fala no máx. ~2 s parada; sem legenda; NUNCA pausa muda > 2,5 s) → CTA → CENA DE FECHAMENTO
(~3 s, sem fala: Sommelier ergue a taça num brinde, câmera aproxima, música sobe) → LOGO 3,5 s. Pode passar de 3 min.
Também: se o dono escreveu um pedido junto com a escolha da thumb, ele está no campo "pedido" do painel e é OBRIGATÓRIO.
