# Wine Know – Dark Divino

Produz os vídeos animados do canal no padrão aprovado (vídeo-modelo: "Sobrou vinho?").

- **Habilidade `wine-know-video`**: pauta (autocompletar e visualizações do YouTube Brasil), roteiro, thumbnail no estilo do canal,
  voz do Paulo (ElevenLabs), animação do Sommelier (braço 3D, gole com vinho nivelado), legenda karaokê igual à fala, jazz com sax,
  dissolves, render e conferência.
- **Agente `wine-know-video`**: faz o vídeo inteiro sozinho; bom para vários temas em paralelo.

Precisa de: Python 3, ffmpeg, Chromium (Playwright). Voz: chave do ElevenLabs no ambiente (cabeçalho `xi-api-key`, host
`api.elevenlabs.io`); pauta: acesso a `suggestqueries.google.com` e `www.youtube.com`.
Motor de animação baseado em michxlai/stickman-skill (MIT); efeitos sonoros Kenney (CC0); fontes Cinzel e Cormorant (OFL).
