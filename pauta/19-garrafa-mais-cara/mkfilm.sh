#!/bin/bash
# monta film.js: LEN de LEN.txt (vem do plan_timing + fechamento.py)
cd "$(dirname "$0")"; { echo "const LEN=$(cat LEN.txt),T=sceneStarts(LEN);"; cat engine_part.js thumb_v19.js dd_common.js sets_v19.js scenes_v19.js; } > film.js
