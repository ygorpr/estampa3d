# HANDOFF — Esteira Wine Know / Dark Divino (22/11/2026, 15h UTC)

Leia junto: `CLAUDE.md`, `.claude/skills/wine-know-video/references/regras-do-dono.md` (todas as regras, inclusive as de 21/11 no fim), `references/painel.md`.

## Painel
- Artifact "Esteira Dark Divino": https://claude.ai/artifact/1t32YxYY99HV5bq4DAvcAB — código `painel/esteira.html` (publicar com `root=painel`, arquivos `previas/*.mp4`, `thumbs/*.jpg`). **Outra sessão também publica o painel** (24/11 21h: versão com sala da Sofia + aba Trends, doc `trends/sofia`). Antes de publicar, SEMPRE ler a versão viva (Artifact read) e partir dela.
- **Nunca publicar sem** `node .claude/skills/wine-know-video/scripts/testar_painel.js /home/user/estampa3d/painel/esteira.html` → OK.
- Dados: ArtifactData `videos/<id>` (etapa: pauta|roteiro|thumb|producao|revisao|entregue|studio), `equipe/agora` (v30), `escritorios/<look>`, `calendario/posts`, `canal/youtube`, `relatorios`, `config/custos`.
- Decisões do dono chegam como comentários "[Esteira] Decisões do dono" (webhook). Responder + resolver cada thread.
- Ronda horária (Beatriz) = scheduled task `trig_01DTZdBq8N1iGaECLq8rKF1P` às :49. Se não há nada, ficar em silêncio.

## Equipe (máx. 8)
Beatriz (gerente) · Sofia (pauta) · Rafael (roteiro) · Caio (checagem) · Helena (thumbs) · Otávio (produção + cortes Shorts) · Larissa (redatora: youtube.md) · Rodrigo (publicador/analista).

## Situação agora
- **Esperando o dono — Revisão:** 26, 33, 35, 37, 39 e o corte 1 do Shorts do 32 (s-32-corte1). 23, 25 e 32 aprovados em 23/11 (pacote + Shorts prontos).
- **Esperando o dono — 12 roteiros:** 28, 29, 30, 31, 34, 36, 38 e 40–44. 3 temas do Instagram esperando o dono colar o texto (Instagram bloqueado na rede).
- **Aprovados em 21/11 (13, 14, 16–22, 24, 27, 18):** pacote do YouTube (`pauta/<NN>/youtube.md`) e 2 cortes do Shorts cada (`videos/shorts/`, textos em `videos/shorts/LEIA.md`) prontos. **Falta:** Rodrigo encaixar no calendário (calendario/posts) — ainda sem datas.
- Vídeos 1–8 no YouTube Studio (estação 7); 9–12 entregues. Rodrigo aguarda OK do dono para agendar 1 vídeo/dia.
- Pauta: ~20 temas na estação pauta.

## Regras novas de 21/11 (já no motor e nas regras)
- Abertura viva: quadro 0 = thumb; gesto já no 1º s; título some 1,4–2,4 s (`txtA` no `thumbTH`, `engine/tfkit.js`).
- Fim sem silêncio: tabela = resumo + 2 s; brinde 1,5 s; logo com voz 0,3 s após o corte (`scripts/apertar_final.py`, `scripts/encurtar_fecho.py`). Nunca > ~2,5 s mudo.
- **Voz (ElevenLabs) só com OK do dono DIRETO no chat ou escolha de thumb no painel — nunca repassar a liberação por recado entre agentes** (a checagem de permissão bloqueia; em 21/11 as vozes de 25/26/35 saíram antes do OK no chat e foi preciso avisar o dono).

## Ferramentas
- Cortes do Shorts: `.claude/skills/wine-know-video/scripts/shorts/cut.py` + configs `cNNx.json` (copiados do scratchpad).
- Produção: `references/brief-producao.md` + `brief-comum.md` (citam pastas do scratchpad `.../scratchpad/vNN/film` e `thNN/film`, que **somem** com a sessão; o código de cada vídeo pronto está em `pauta/<NN>/producao/` e as thumbs em `pauta/<NN>/thumbs/`).

## Segurança
- Chave Windsor do Dark Divino: nunca gravar em arquivo/commit. Contas Dark Divino e 3uniformes separadas.
- Branch: `claude/video-transcription-steps-c6pkcc`. Sem PR. Responder sempre em português.
- Calendário remarcado em 24/11: 25 em 25/11 (antes de 1º/12), 23 em 19/12, 32 em 20/12.
