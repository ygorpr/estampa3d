#!/bin/bash
# monta film.js: LEN de LEN.txt (vem do plan_timing + fechamento.py)
cd "$(dirname "$0")"; { echo "const LEN=$(cat LEN.txt),T=sceneStarts(LEN);"; cat engine_part.js thumb_v27.js dd_common.js sets_v27.js scenes_v27.js; } > film.js
