cd "$(dirname "$0")"
{ grep -o "^LEN=.*" ../len.txt | sed 's/^/const /;s/$/,T=sceneStarts(LEN);/'; cat engine_part.js; echo "G.waveL={l:[[800,560],95],r:[[1086,706],50],lo:1};"; cat tf.js; cat scenes_v13.js; } > film.js
