# HANDOFF — Esteira Wine Know / Dark Divino (25/11/2026, 2h UTC)

Leia junto: `CLAUDE.md`, `.claude/skills/wine-know-video/references/regras-do-dono.md` (todas as regras, inclusive as de 21/11 no fim), `references/painel.md`.

## Painel
- Artifact "Esteira Dark Divino": https://claude.ai/artifact/1t32YxYY99HV5bq4DAvcAB — código `painel/esteira.html` (publicar com `root=painel`, arquivos `previas/*.mp4`, `thumbs/*.jpg`). **Outra sessão também publica o painel** (24/11 21h: versão com sala da Sofia + aba Trends, doc `trends/sofia`). Antes de publicar, SEMPRE ler a versão viva (Artifact read) e partir dela.
- **Nunca publicar sem** `node .claude/skills/wine-know-video/scripts/testar_painel.js /home/user/estampa3d/painel/esteira.html` → OK.
- Dados: ArtifactData `videos/<id>` (etapa: pauta|roteiro|thumb|producao|revisao|entregue|studio), `equipe/agora` (v30), `escritorios/<look>`, `calendario/posts`, `canal/youtube`, `relatorios`, `config/custos`.
- Decisões do dono chegam como comentários "[Esteira] Decisões do dono" (webhook). Responder + resolver cada thread.
- Ronda (Beatriz): tarefa agendada em sessão NOVA a cada vez, dia útil 9h07 e 18h07 (Brasília), modelo sonnet. Passo a passo: `.claude/skills/wine-know-video/references/ronda.md`. Mapa: `MAPA.md`. Conversa longa → `/nova-sessao`.

## Equipe (máx. 8)
Beatriz (gerente) · Sofia (pauta) · Rafael (roteiro) · Caio (checagem) · Helena (thumbs) · Otávio (produção + cortes Shorts) · Larissa (redatora: youtube.md) · Rodrigo (publicador/analista).

## Situação agora (25/11)
- **Esperando o dono — 17 roteiros:** 28, 29, 30, 31, 34, 36, 38, 40–49 (45–49 feitos em 24/11; cada um com "PARA VOCÊ DECIDIR" no cartão). 45 e 47–49: fatos a reconferir em site oficial antes da voz (rede bloqueou planalto.gov.br, vinhoverde.pt, ABS, mastersommeliers.org).
- **Esperando o dono — Revisão:** 33, 35, 37, 39 e s-32-corte1 (corte 1 do Short do 32).
- **Studio:** 25 (Picasso) precisa estar agendado para 25/11 19h. Subir no Studio é com a OUTRA sessão (tem o Claude in Chrome); card do Rodrigo mostra o bloqueio.
- 3 temas do Instagram esperando o dono colar o texto (Instagram bloqueado).
- Calendário (calendario/posts) até 21/12, 1 vídeo/dia. Pauta: 15 temas + 3 do Instagram.
- Equipe (equipe/agora): os 8 com fazendo/fila/bloqueio preenchidos.

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

## Upload automático no YouTube (24/11, 23h30 Brasília)
- Windsor_Dark_Divino (youtube, conta 108952) tem `upload_video` por URL pública (raw do GitHub funciona; repo público) com `publish_at`. NÃO define thumbnail.
- 24/11 noite: 4 tentativas do Picasso deram "rate-limited" (cota diária). Tarefa agendada trig_01QKAcmZUPFzZ6gHRnK2NPkx (25/11 5h10) tenta de novo: Picasso para 25/11 9h (dono liberou manhã), depois os "subir" do calendário.
- Thumb sem o dono: proposta = conector Make (módulo YouTube de thumbnail/upload) ou Zapier. Dono precisa conectar uma vez (OAuth do YouTube dentro do Make); depois tudo roda sozinho.
- **Próximo passo quando o Make estiver ligado (sessão nova):** conferir as ferramentas `mcp__Make__*`; ver se a conexão YouTube existe no Make (se não, gerar o link de conexão e o dono só clica no login); criar o cenário "Wine Know – subir e agendar" (entrada: URL do mp4 + URL da thumb, ambos raw do GitHub; título, descrição, tags, publish_at) com upload + thumbnail; testar com o Picasso (se a tarefa das 5h10 já tiver subido pelo Windsor, só colocar a thumb nele); depois os "subir" do calendário.
