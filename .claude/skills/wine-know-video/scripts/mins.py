#!/usr/bin/env python3
"""Mínimos por cena para o --min do plan_timing.py. uso: mins.py <pasta do filme>
abertura (thumb viva) 7 s · cenas comuns 3 s · TABELA = fala do resumo + 2 s (NUNCA pausa muda longa — regra do dono, 21/11)
· CTA 6 s · logo 3,5 s. A cena de brinde (3,2 s, sem fala) é inserida depois por fechamento.py."""
import json, sys
W = json.load(open(sys.argv[1] + "/vo/words.json")); n = len(W); m = [3.0] * n
m[0] = 7.0; m[n - 3] = round(.3 + W[n - 3]["dur"] + 2.0, 1); m[n - 2] = 6.0; m[n - 1] = 3.5
print(" ".join(str(x) for x in m))
