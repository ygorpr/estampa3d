#!/usr/bin/env python3
"""Corrige a PAUSA LONGA do fechamento num filme já pronto (regra do dono, 21/11): a tabela final passa a durar
fala do resumo + 2 s; CTA, brinde e logo sobem junto. Não gera voz de novo. Uso: encurtar_fecho.py <pasta do filme>
Depois: mkfilm.sh → jazz.py (DUR novo) → build.py --shots <índice da tabela em diante>. Imprime o índice da tabela."""
import json, sys
d = sys.argv[1]; L = json.load(open(d + "/LEN.txt")); n = len(L)
js = open(d + "/vo_words.js").read(); V = json.loads(js[len("const VOX="):].rstrip().rstrip(";"))
T = [0]
for l in L: T.append(round(T[-1] + l, 3))
it = n - 4                                   # cenas: ... tabela, CTA, brinde, logo
fim = V[it]["at"] + V[it]["dur"]; novo = round(fim + 2.0 - T[it], 1); delta = round(L[it] - novo, 2)
if delta <= 0.3: print("nada a fazer: pausa já curta", L[it], novo); sys.exit(0)
L[it] = novo; json.dump(L, open(d + "/LEN.txt", "w"))
st = json.load(open(d + "/vo/starts.json"))
for k in (-2, -1): st[k] = round(st[k] - delta, 2); V[k]["at"] = round(V[k]["at"] - delta, 2)
json.dump(st, open(d + "/vo/starts.json", "w")); open(d + "/vo_words.js", "w").write("const VOX=" + json.dumps(V, ensure_ascii=False) + ";\n")
T = [0]
for l in L: T.append(round(T[-1] + l, 3))
json.dump({"tabela": [T[n-4], T[n-3]], "fala_resumo_fim": fim, "brinde": [T[n-2], T[n-1]], "logo": [T[n-1], T[n]], "dur": T[-1]}, open(d + "/vo/fecho.json", "w"))
print("tabela", it, "encurtada em", delta, "s · nova duração", T[-1], "· SHOTS", " ".join(str(i) for i in range(it, n)))
