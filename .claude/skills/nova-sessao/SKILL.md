---
name: nova-sessao
description: Passa o trabalho do canal Wine Know para uma sessão NOVA e limpa, para economizar tokens. Atualiza o pauta/HANDOFF.md, faz commit e push, e abre uma sessão nova que começa lendo o HANDOFF. Use quando o dono disser "nova sessão", "passa o bastão", "começa uma sessão nova", "economizar", quando a conversa já foi resumida (compactada) uma vez, ou quando estiver longa (muitas rondas/tarefas seguidas).
---

# Nova sessão (passar o bastão)

Objetivo: a conversa longa custa caro porque cada mensagem relê todo o histórico. Uma sessão nova começa só com o HANDOFF (~1 página).

## Quando usar (sem esperar o dono pedir)
- A conversa já foi resumida/compactada pelo sistema pelo menos uma vez (sinal claro de que passou do tamanho bom; ~70% ou mais).
- Ou já houve mais de ~15 tarefas/rondas nesta conversa.
- Ou o dono pediu.
Não dá para medir "70% do chat" com exatidão por aqui; use os sinais acima. Antes de passar, terminar a tarefa em andamento
(ou deixá-la anotada no HANDOFF com o próximo passo exato).

## Passos
1. Esperar os agentes em segundo plano terminarem (ou anotar no HANDOFF quais estão rodando e o que cada um vai entregar).
2. Reescrever `pauta/HANDOFF.md` (máx. ~60 linhas):
   - data/hora; link do painel; branch `claude/video-transcription-steps-c6pkcc`;
   - "Situação agora": o que espera o dono (números dos vídeos), o que a equipe está fazendo, prazos (ex.: vídeo X no Studio até dd/mm hh);
   - "Próximo passo exato" (1–5 itens, com caminho de arquivo e ID do cartão quando houver);
   - regras críticas (voz só após thumb/OK direto; chave Windsor nunca em arquivo; if_version; testar painel antes de publicar).
   Copiar também para `obsidian-wine-know/02 Painel e equipe/HANDOFF.md`.
3. `git add` só o que mudou, commit ("Handoff: passa para sessão nova") com as linhas de autoria do sistema, `git push -u origin claude/video-transcription-steps-c6pkcc`.
4. Abrir a sessão nova com a ferramenta `create_session` (servidor claude-code-remote):
   - `source_url`: `https://github.com/ygorpr/estampa3d`, `source_revision`: `claude/video-transcription-steps-c6pkcc`
   - `title`: "Wine Know – esteira (dd/mm)"
   - `prompt`: "Continue o trabalho do canal Wine Know – Dark Divino. Leia primeiro CLAUDE.md e pauta/HANDOFF.md (e só depois o que o
     HANDOFF mandar). Responda sempre em português. Próximo passo: <copiar do HANDOFF>."
5. Responder ao dono em 2–3 linhas: link/título da sessão nova e o que ela vai fazer primeiro. Avisar que esta conversa pode ser
   arquivada; não fazer mais trabalho aqui (para não duplicar).

## Não fazer
- Não abrir sessão nova no meio de uma geração de voz ou render.
- Não passar chave/segredo no prompt da sessão nova.
- Não criar mais de uma sessão nova por vez.
