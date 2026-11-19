#!/usr/bin/env python3
"""Depois da narração: calcula a duração de cada cena para a fala caber e grava vo/starts.json e vo_words.js.
uso: plan_timing.py <pasta> [--min 2.5 2.5 ...]   (uma duração mínima por cena; padrão 3.0)
Imprime a linha LEN=[...] para colar no bloco de time-warp do film.js."""
import argparse, json
from pathlib import Path
a = argparse.ArgumentParser(); a.add_argument("folder"); a.add_argument("--min", nargs="*", type=float); o = a.parse_args()
d = Path(o.folder); W = json.load(open(d / "vo" / "words.json"))
mins = o.min or [3.0] * len(W); LEN = []; starts = []; t = 0
for i, w in enumerate(W):
    lead = .4 if i == 0 else .3; ln = max(mins[i] if i < len(mins) else 3.0, round(lead + w["dur"] + .45, 1))
    starts.append(round(t + lead, 2)); LEN.append(ln); t += ln
json.dump(starts, open(d / "vo" / "starts.json", "w"))
open(d / "vo_words.js", "w").write("const VOX=" + json.dumps([{"at": s, **w} for s, w in zip(starts, W)], ensure_ascii=False) + ";\n")
print("LEN=" + json.dumps(LEN), "\nduração total:", round(t, 1), "s")
