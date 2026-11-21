#!/usr/bin/env python3
"""Tira o SILÊNCIO do fim (regra do dono, 21/11): depois da tabela, nada de mais de ~2 s mudo.
CTA termina 0,3 s depois da fala; brinde sem fala cai para 1,5 s; a voz "Wine Know. Dark Divino." entra 0,3 s após o logo.
Não gera voz. Uso: apertar_final.py <pasta do filme>  → depois mkfilm.sh, jazz.py, build.py --shots <CTA em diante>."""
import json, sys
d = sys.argv[1]; L = json.load(open(d + "/LEN.txt")); n = len(L)
js = open(d + "/vo_words.js").read(); V = json.loads(js[len("const VOX="):].rstrip().rstrip(";"))
T = [0]
for l in L: T.append(round(T[-1] + l, 3))
c, lg = V[-2], V[-1]
L[n-3] = round(c["at"] + c["dur"] + .3 - T[n-3], 2); L[n-2] = 1.5
T = [0]
for l in L: T.append(round(T[-1] + l, 3))
novo = round(T[n-1] + .3, 2); delta = round(lg["at"] - novo, 2); lg["at"] = novo
st = json.load(open(d + "/vo/starts.json")); st[-1] = novo; json.dump(st, open(d + "/vo/starts.json", "w"))
json.dump(L, open(d + "/LEN.txt", "w")); open(d + "/vo_words.js", "w").write("const VOX=" + json.dumps(V, ensure_ascii=False) + ";\n")
print("silêncio CTA→logo", round(novo - c["at"] - c["dur"], 1), "s (antes", round(novo + delta - c["at"] - c["dur"], 1), ") · duração", T[-1], "· SHOTS", " ".join(str(i) for i in range(n-3, n)))
