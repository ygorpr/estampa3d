#!/usr/bin/env python3
"""Pesquisa de pauta: o que o Brasil digita no YouTube sobre vinho (autocompletar). Precisa do host suggestqueries.google.com liberado.
uso: youtube_ideas.py [termos...]   (padrão: uma lista de começos de busca sobre vinho)"""
import json, sys, urllib.parse, urllib.request
seeds = sys.argv[1:] or ["vinho ", "vinho por que", "vinho como", "vinho pode", "vinho qual", "vinho aberto", "vinho faz mal", "vinho caro",
                         "vinho barato", "vinho seco ou suave", "vinho temperatura", "espumante", "taça de vinho", "vinho com"]
for q in seeds:
    url = "https://suggestqueries.google.com/complete/search?" + urllib.parse.urlencode({"client": "firefox", "ds": "yt", "hl": "pt-BR", "gl": "BR", "q": q})
    try:
        s = json.load(urllib.request.urlopen(url, timeout=10))[1][:10]
    except Exception as e:
        s = [f"(falhou: {e})"]
    print(f"== {q.strip()}: " + " | ".join(s))
