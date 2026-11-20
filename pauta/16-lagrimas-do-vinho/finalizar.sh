#!/bin/bash
# RODAR SÓ QUANDO HOUVER CRÉDITO NO ELEVENLABS (~350 créditos): gera só as falas 18-22, refaz tempos e renderiza.
set -e; D="$(cd "$(dirname "$0")" && pwd)"; SK=/home/user/estampa3d/.claude/skills/wine-know-video/scripts
cd $D/vo && python3 tts_resto.py tagged.json . && cd $D
python3 $SK/plan_timing.py $D --min 7 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 9 3 3 | tee $D/vo/plan.txt
grep -o 'LEN=\[[^]]*\]' $D/vo/plan.txt | sed 's/^LEN=//' > $D/LEN.txt
$D/mkfilm.sh; rm -rf $D/shots
DUR=$(python3 -c "import json;print(round(sum(json.load(open('$D/LEN.txt')))+1,1))")
python3 $SK/jazz.py $D/jazz.wav $DUR
python3 $SK/build.py $D --out as-lagrimas-do-vinho.mp4 --jobs 2
cp $D/as-lagrimas-do-vinho.mp4 /home/user/estampa3d/videos/as-lagrimas-do-vinho.mp4
echo "OK: confira $D/contact_sheet.jpg"
