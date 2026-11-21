#!/usr/bin/env python3
"""Depois do plan_timing.py: põe a CENA DE FECHAMENTO (brinde, sem fala, ~3,2 s) entre o CTA e o logo.
Lê o LEN do vo/plan.txt, grava LEN.txt, empurra o "Wine Know. Dark Divino." (vo_words.js e vo/starts.json) e grava vo/fecho.json."""
import json, re, sys
d = sys.argv[1]; TOAST = float(sys.argv[2]) if len(sys.argv) > 2 else 3.2
LEN = json.loads(re.search(r"LEN=(\[[^\]]*\])", open(d + "/vo/plan.txt").read()).group(1))
LEN = LEN[:-1] + [TOAST] + [max(3.5, LEN[-1])]
open(d + "/LEN.txt", "w").write(json.dumps(LEN))
st = json.load(open(d + "/vo/starts.json")); st[-1] = round(st[-1] + TOAST, 2); json.dump(st, open(d + "/vo/starts.json", "w"))
js = open(d + "/vo_words.js").read(); V = json.loads(js[len("const VOX="):].rstrip().rstrip(";")); V[-1]["at"] = st[-1]
open(d + "/vo_words.js", "w").write("const VOX=" + json.dumps(V, ensure_ascii=False) + ";\n")
T = [0]
for l in LEN: T.append(round(T[-1] + l, 3))
n = len(LEN); fe = {"tabela": [T[n - 4], T[n - 3]], "fala_resumo_fim": V[n - 4]["at"] + V[n - 4]["dur"], "brinde": [T[n - 2], T[n - 1]], "logo": [T[n - 1], T[n]], "dur": T[-1]}
json.dump(fe, open(d + "/vo/fecho.json", "w")); print("LEN com brinde:", LEN, "\nduração:", round(T[-1], 1), "s", fe)
