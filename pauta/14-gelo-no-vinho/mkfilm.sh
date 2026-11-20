#!/bin/bash
cd "$(dirname "$0")"; { echo "const LEN=$(cat LEN.txt),T=sceneStarts(LEN);"; cat engine_part.js tf_gelo_C.js dd_common.js sets_v14.js scenes_v14.js; } > film.js
