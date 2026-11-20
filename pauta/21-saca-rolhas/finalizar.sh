#!/bin/bash
# Vídeo 21 — "O saca-rolhas nasceu numa arma?" (thumb C). RODAR QUANDO FOR HORA DE GERAR A VOZ (roteiro e thumb já aprovados no painel).
# Faz: voz UMA vez (ElevenLabs v3, Paulo) → tempos com os mínimos do FECHAMENTO → brinde antes do logo → film.js → jazz → build
#      → videos/o-saca-rolhas-nasceu-numa-arma.mp4 → prévia 480p em painel/previas/o-saca-rolhas-nasceu-numa-arma.mp4. Se a voz já existir (vo/words.json real), NÃO gera de novo.
set -e
D="$(cd "$(dirname "$0")" && pwd)"; SK=/home/user/estampa3d/.claude/skills/wine-know-video/scripts; SLUG=o-saca-rolhas-nasceu-numa-arma
cd "$D"
# 1) voz — uma única vez
if python3 -c "import json,sys;w=json.load(open('vo/words.json'));sys.exit(0 if any(x.get('estimado') for x in w) else 1)" 2>/dev/null || [ ! -f vo/words.json ]; then
  [ -f vo/words.json ] && mv vo/words.json vo/words_estimado.json
  python3 "$SK/tts_v3.py" "$D/vo/tagged.json" "$D/vo"
  [ -f vo/words.json ] || { echo "ERRO: a voz não foi gerada (vo/words.json ausente)"; exit 1; }
else
  echo "voz já existe (vo/words.json) — não gera de novo"
fi
# 2) tempos: mínimos do fechamento (abertura 7 s · tabela = resumo + 8,5 s, nunca < 14 s · CTA 6 s · logo 3,5 s)
python3 "$SK/plan_timing.py" "$D" --min $(python3 "$D/mins.py" "$D") | tee "$D/vo/plan.txt"
# 3) cena de fechamento (brinde, 3,2 s, sem fala) entre o CTA e o logo → LEN.txt, vo_words.js, vo/starts.json, vo/fecho.json
python3 "$D/fechamento.py" "$D" 3.2
"$D/mkfilm.sh"; rm -rf "${D:?}/shots"
DUR=$(python3 -c "import json;print(round(sum(json.load(open('$D/LEN.txt')))+1,1))")
python3 "$SK/jazz.py" "$D/jazz.wav" "$DUR"
python3 "$SK/build.py" "$D" --out "$SLUG.mp4" --jobs 2
# 4) entrega
cp "$D/$SLUG.mp4" "/home/user/estampa3d/videos/$SLUG.mp4"
# 5) prévia 480p para o painel (Revisão)
mkdir -p /home/user/estampa3d/painel/previas
ffmpeg -v error -y -i "$D/$SLUG.mp4" -vf scale=-2:480 -c:v libx264 -preset veryfast -crf 28 -c:a aac -b:a 96k -movflags +faststart "/home/user/estampa3d/painel/previas/$SLUG.mp4"
echo "OK: /home/user/estampa3d/videos/$SLUG.mp4 · prévia painel/previas/$SLUG.mp4 · confira $D/contact_sheet.jpg (áudio medido, não ouvido)"
