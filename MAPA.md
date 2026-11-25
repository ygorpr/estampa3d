# Mapa do repositório (Wine Know – Dark Divino)

Leia nesta ordem numa sessão nova: `CLAUDE.md` → `pauta/HANDOFF.md` → só o que o HANDOFF mandar.

| Pasta | O que tem |
|---|---|
| `pauta/HANDOFF.md` | **Estado atual e próximo passo** (sempre atualizado ao trocar de sessão) |
| `pauta/STATUS.md` | Situação de cada vídeo |
| `pauta/NN-tema/` | Um vídeo por pasta: `pesquisa.md`, `roteiro.md`, `pronuncia.json`, `painel.json`, `youtube.md`, `producao/`, `thumbs/` |
| `pauta/_temas-e-pesquisas/` | Pesquisas de temas, listas de curiosidades, em alta, checagens antigas |
| `videos/` | MP4 finais (`videos/shorts/` = cortes do Shorts, textos em `videos/shorts/LEIA.md`) |
| `painel/` | Código do painel (`esteira.html`), prévias, thumbs, fichas |
| `.claude/skills/wine-know-video/` | Habilidade dos vídeos: `references/` (regras, ronda, painel, briefs), `scripts/`, `engine/` |
| `.claude/skills/nova-sessao/` | Habilidade para passar o trabalho a uma sessão nova (economia) |
| `kit-dark-divino/` | Motor ajustado, exemplos completos (Sobrou vinho = modelo aprovado), ferramentas |
| `obsidian-wine-know/` | Cópia do cofre do Obsidian |
| `plugins/`, `*.zip` | Pacotes da habilidade para o app do Claude |
| `privacidade/`, `README.md` | Site antigo do Estampa 3D (não mexer) |

## Economia de tokens (regras de 25/11)
1. Ronda da Beatriz: sessão NOVA a cada vez, dia útil 9h07 e 18h07 (Brasília), modelo mais barato. Passo a passo: `.claude/skills/wine-know-video/references/ronda.md`.
2. Uma sessão só cuida do painel: a ronda agendada. A sessão com Chrome só sobe vídeos no Studio quando o dono pedir; as outras só trabalham quando o dono pede no chat.
3. Agentes de roteiro, checagem, textos e thumbs com modelo "sonnet"; produção com o padrão.
4. Trabalho em lote: todos os roteiros liberados num agente só (até 4), todas as thumbs num só.
5. Conversa longa (já resumida uma vez) → habilidade `nova-sessao`.
