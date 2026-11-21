---
tags: [wine-know, youtube, windsor, conector]
data: 2026-11-20
---

# Windsor Dark Divino – teste do conector

## Contas conectadas
| Conector | Conta | ID |
|---|---|---|
| YouTube | Wine Know | canal `UCfr0s_zb5R87pfvcLzbjAbQ` · conta Windsor `108952` |
| Instagram | 3uniformes | `17841403421425820` |

## O que o conector faz no YouTube
- `update_video_details`: título, descrição, tags, categoria e privacidade
- `add_video_to_playlist` / `remove_video_from_playlist`
- `reply_to_comment` / `moderate_comment` / `delete_comment`
- Cada ação gasta 50 unidades da cota diária da API do YouTube (10.000/dia)

## Teste de troca de título (20/11/2026)
- Vídeo: rascunho `uArLok74_WE` ("champanhe no fundo do mar")
- Trocado para `[TESTE] champanhe no fundo do mar`, conferido no Studio ✅
- Voltado para `champanhe no fundo do mar` ✅

## Limitações encontradas
- Rascunhos não aparecem nas consultas do Windsor; para editar um rascunho é preciso o ID do vídeo (o código depois de `udvid=` ou `/video/` no link do Studio).
- O plano de teste do Windsor só lê os últimos 30 dias de dados.
- O canal tem 10 rascunhos; o Windsor mostra 0 vídeos públicos e 0 inscritos.

## Próximo passo
- Pôr título e descrição em todos os rascunhos no padrão Dark Divino (habilidade `wine-know:wine-know-video`).
- Fazer pelo Chrome (habilidade `anthropic-skills:chrome-browser`) numa sessão do app Claude para desktop com o Claude in Chrome conectado.
- Salvar tudo no cofre do Obsidian: `C:\Users\User\Desktop\GPT - WINE KNOW`
