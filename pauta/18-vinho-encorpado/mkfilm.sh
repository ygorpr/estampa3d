#!/bin/bash
# monta film.js: LEN de LEN.txt (vem do plan_timing + fechamento.py)
cd "$(dirname "$0")"; { echo "const LEN=$(cat LEN.txt),T=sceneStarts(LEN);"; cat engine_part.js thumb_v18.js dd_common.js sets_v18.js scenes_v18.js; } > film.js
