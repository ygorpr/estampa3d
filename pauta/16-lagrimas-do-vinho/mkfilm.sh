#!/bin/bash
# monta film.js: LEN de LEN.txt (vem do plan_timing)
cd "$(dirname "$0")"; { echo "const LEN=$(cat LEN.txt),T=sceneStarts(LEN);"; cat engine_part.js thumb_v16.js scenes_v16.js; } > film.js
