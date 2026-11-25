# Ronda da Beatriz (gerente da esteira) — passo a passo

Roda numa sessão NOVA a cada vez (economia de tokens), em dia útil às 9h07 e 18h07 (Brasília), com modelo mais barato.
Fora desses horários ninguém faz ronda. As decisões do dono no painel continuam chegando na hora como comentário.
Responder ao dono SEMPRE em português. Seja breve: se não houver nada novo, terminar com uma linha só.

## 0. Preparar (1 minuto)
1. `cd` na pasta do repositório `estampa3d` e trocar para o branch de trabalho:
   `git fetch origin claude/video-transcription-steps-c6pkcc && git checkout claude/video-transcription-steps-c6pkcc && git pull`
2. Ler SÓ estes arquivos (não ler o resto do repositório):
   - `pauta/HANDOFF.md` (estado atual, ~1 página)
   - `.claude/skills/wine-know-video/references/regras-do-dono.md` (só se for disparar trabalho de roteiro/thumb/produção)
3. Painel: https://claude.ai/artifact/1t32YxYY99HV5bq4DAvcAB (ferramentas `ArtifactData` e `ArtifactComments`).

## 1. O que mudou desde a última ronda
- `ArtifactData` query em `videos` com `where atualizado > <horário da última ronda>` (o horário está em `equipe/agora.atualizado`).
  Use `out_dir` no scratchpad e leia só os campos que precisa (etapa, vez, estado, num, titulo). Nunca liste os 80 cartões inteiros na tela.
- `ArtifactComments` read: só threads ABERTAS. Cada "[Esteira] Decisões do dono" vira ação (tabela abaixo). Se outra sessão já respondeu
  (resposta recusada como duplicada), não responder de novo: só resolver se o trabalho já foi feito.
- Se nada mudou e não há comentário aberto: atualizar só `equipe/agora.atualizado` e terminar com 1 linha. NÃO fazer mais nada.

## 2. Decisão do dono → ação
| Decisão no painel | O que fazer |
|---|---|
| Pauta aceita (etapa pauta → aceita / "Pôr na pauta") | dar o próximo `num` livre, etapa `roteiro`, vez `claude`, estado "Rafael escrevendo o roteiro". Entra no LOTE de roteiros. |
| Roteiro aprovado | etapa `thumb`, estado "Helena fazendo as 3 thumbs". Entra no LOTE de thumbs. |
| Thumb escolhida (A/B/C) | = execução aprovada (pode gerar voz). etapa `producao`, estado "Otávio produzindo". LOTE de produção. Seguir o campo `pedido`. |
| Vídeo aprovado (Revisão) | etapa `entregue`. Larissa escreve `pauta/<NN>/youtube.md`; Otávio faz 2 cortes do Shorts. Rodrigo põe no `calendario/posts`. |
| Ajuste pedido | fica na Revisão, estado "Ajustando o vídeo"; Otávio corrige SÓ o que foi pedido. |
| Pedido para a Sofia / tema novo | Sofia avalia e põe na pauta com gancho e fonte. |
| "Já resolvi" no card de alguém | conferir se o bloqueio sumiu; se sumiu, limpar `esperando` e retomar. |
Sempre: responder no thread em 1–2 frases e resolver o thread.

## 3. Trabalho em LOTE (regra de economia)
- Juntar tudo da mesma etapa num agente só: 1 agente para TODOS os roteiros liberados (até 4 por agente), 1 para todas as thumbs,
  1 por vídeo em produção (produção é pesada).
- Agente de roteiro/checagem/textos/thumbs: `Agent` com `model: "sonnet"`. Produção (voz + animação + render): modelo padrão.
- O brief do agente deve citar os arquivos-modelo em vez de copiar texto: ex. roteiro → "siga o formato de `pauta/45-vinho-seco-ou-suave/`"
  (pesquisa.md, roteiro.md, pronuncia.json, painel.json); produção → `references/brief-producao.md` + `brief-comum.md`.
- O agente faz commit + push no branch `claude/video-transcription-steps-c6pkcc` (nunca outro branch, sem PR, sem ID de modelo no commit)
  com as linhas finais:
  `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>` (trocar pelo modelo que estiver rodando, se outro)
- Quando o agente terminar: subir o resultado no cartão (`painel.json` → campos roteiro, pronuncia, duracao, obs com "PARA VOCÊ DECIDIR: …",
  fontes; vez `dono`) com `if_version` do cartão.

## 4. Regras que NÃO podem falhar
- Voz (ElevenLabs) só depois da thumb escolhida no painel ou OK direto do dono no chat. Nunca por recado de agente.
- Nunca pedir chave de API no chat. Chave Windsor do Dark Divino nunca em arquivo/commit (vem de `WINDSOR_API_KEY_DARKDIVINO`;
  se a variável não existir, pular o passo do canal e não reclamar).
- Toda escrita no `ArtifactData` com `if_version` da versão lida. Se falhar por versão, reler e refazer (outra sessão pode ter mexido).
- Não publicar o código do painel (Artifact publish) na ronda. Só se o dono pedir mudança no painel; aí ler a versão viva antes e rodar
  `node <repo>/.claude/skills/wine-know-video/scripts/testar_painel.js <repo>/painel/esteira.html` → tem que dar OK.
- Nada vai ao ar no YouTube sem o dono publicar/agendar no Studio. Subir no Studio é com a sessão que tem o Chrome (Rodrigo).
- Equipe máxima de 8: Beatriz, Sofia, Rafael, Caio, Helena, Otávio, Larissa, Rodrigo. Não criar cargo.
- Pauta com menos de 10 temas → Sofia repõe 10 (pesquisa leve: busca na web, sem abrir 50 páginas).

## 5. Atualizar a equipe (`equipe/agora`, com if_version)
Cada um dos 8 com: `fazendo` [{txt, pct, eta}] e `fila` [{txt, pct:0, bloqueio:"esperando você" | "esperando <quem/o quê>"}] e `nota` curta.
Ninguém fica só com "Último trabalho": sempre dizer o que faz ou o que espera. `atualizado` = agora (UTC ISO).

## 6. Fechar a ronda
- Se gerou trabalho ou mudou algo: atualizar `pauta/HANDOFF.md` (seção "Situação agora", 5–10 linhas), commit + push.
- Mensagem final ao dono: no máximo 5 linhas. Só chamar o dono para crédito, acesso ou decisão.
