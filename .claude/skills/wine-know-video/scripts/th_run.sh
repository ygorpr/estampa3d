#!/bin/bash
# uso: th_run.sh <n> <A|B|C>  -> copia tf_<v>.js para tf.js, gera thumb e salva opt-<v>.jpg
S=/tmp/claude-0/-home-user-estampa3d/b0f0cc1c-a8e7-5c2a-8d40-81a18c04daff/scratchpad
d=$S/th$1/film; cp $d/../tf_$2.js $d/tf.js && python3 $S/rolha/shot_thumb.py $d && cp $d/thumb.jpg $S/th$1/opt-$2.jpg && echo ok $1 $2
