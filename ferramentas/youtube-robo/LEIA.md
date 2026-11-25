# Robô do YouTube (Google Apps Script)

Sobe o vídeo, coloca a thumb e agenda, tudo pelo Claude, sem abrir o Studio. O dono instala uma vez só (uns 5 minutos).

## Instalação (o dono faz uma vez)
1. Abrir https://script.google.com, entrando com a conta Google que é dona do canal Wine Know, e clicar em **Novo projeto**.
2. Apagar o que estiver no editor e colar todo o conteúdo de `Codigo.gs`. Dar ao projeto o nome "Robô Wine Know".
3. Na barra da esquerda, em **Serviços**, clicar em **+**, escolher **YouTube Data API v3** e clicar em **Adicionar**.
4. Lá em cima, escolher a função `autorizar` e clicar em **Executar**. Depois: **Revisar permissões**, escolher a conta, e, **quando ele pedir o canal, escolher Wine Know**.
   Se aparecer "O Google não verificou este app", clicar em **Avançado** e depois em **Acessar Robô Wine Know**. É seguro: o app é seu.
5. Clicar em **Implantar**, depois **Nova implantação**. Na engrenagem, escolher **App da Web**. Em "Executar como", escolher **Eu**. Em "Quem pode acessar", escolher **Qualquer pessoa**. Clicar em **Implantar**.
6. Copiar o **URL do app da Web** (termina em `/exec`) e mandar ao Claude.

## Uso (o Claude faz)
- `python3 ferramentas/youtube-robo/robo.py listar`
- `python3 ferramentas/youtube-robo/robo.py thumb <videoId> videos/thumb-x.jpg`
- `python3 ferramentas/youtube-robo/robo.py subir pauta/NN-*/youtube.md videos/x.mp4 videos/thumb-x.jpg 2026-11-26T19:00:00-03:00`

O link do robô **não vai para o repositório**, porque o repositório é público. Ele fica em `~/.robo_wine_know` ou na variável `ROBO_URL`.
Thumb personalizada exige o canal verificado por telefone (https://www.youtube.com/verify).
Cota do robô: projeto próprio do Google, separado do Windsor (cerca de 6 envios por dia).
