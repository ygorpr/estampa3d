#!/bin/bash
cd "$(dirname "$0")"; { echo "const LEN=$(cat LEN.txt),T=sceneStarts(LEN);"; cat engine_part.js thumb_v25.js dd_common.js scenes_v25.js; } > film.js
