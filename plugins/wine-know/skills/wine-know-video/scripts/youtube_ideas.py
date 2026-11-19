#!/usr/bin/env python3
"""Pesquisa de pauta: o que o Brasil digita no YouTube sobre vinho (autocompletar). Precisa do host suggestqueries.google.com liberado.
uso: youtube_ideas.py [termos...]          autocompletar (padrão: começos de busca sobre vinho)
     youtube_ideas.py --views "tema" ...     vídeos que já existem sobre cada tema, com visualizações e idade
O autocompletar mostra o que as pessoas digitam; as visualizações mostram o tamanho do interesse e se a concorrência é velha."""
import json, sys, urllib.parse, urllib.request


def top_videos(q, n=5):
    """Vídeos que já existem sobre o tema (título, canal, visualizações, idade), da página de busca do YouTube."""
    import re
    req = urllib.request.Request("https://www.youtube.com/results?" + urllib.parse.urlencode({"search_query": q, "hl": "pt-BR", "gl": "BR"}),
                                 headers={"User-Agent": "Mozilla/5.0", "Accept-Language": "pt-BR"})
    h = urllib.request.urlopen(req, timeout=15).read().decode("utf8", "ignore")
    m = re.search(r"var ytInitialData = (\{.*?\});</script>", h); out = []
    def walk(o):
        if isinstance(o, dict):
            v = o.get("videoRenderer")
            if v:
                vc = v.get("viewCountText", {}); vc = vc.get("simpleText") or "".join(r.get("text", "") for r in vc.get("runs", []))
                out.append((v.get("title", {}).get("runs", [{}])[0].get("text"), v.get("ownerText", {}).get("runs", [{}])[0].get("text"), vc, v.get("publishedTimeText", {}).get("simpleText")))
            for x in o.values(): walk(x)
        elif isinstance(o, list):
            for x in o: walk(x)
    if m: walk(json.loads(m.group(1)))
    return out[:n]


if __name__ == "__main__":
    if sys.argv[1:2] == ["--views"]:
        for q in sys.argv[2:]:
            print(f"== {q}")
            try:
                for t, ch, vc, age in top_videos(q): print(f"   {vc:>22} | {age or '-':>12} | {ch} | {t}")
            except Exception as e: print(f"   (falhou: {e})")
    else:
        seeds = sys.argv[1:] or ["vinho ", "vinho por que", "vinho como", "vinho pode", "vinho qual", "vinho aberto", "vinho faz mal", "vinho caro",
                                 "vinho barato", "vinho seco ou suave", "vinho temperatura", "espumante", "taça de vinho", "vinho com"]
        for q in seeds:
            url = "https://suggestqueries.google.com/complete/search?" + urllib.parse.urlencode({"client": "firefox", "ds": "yt", "hl": "pt-BR", "gl": "BR", "q": q})
            try:
                s = json.load(urllib.request.urlopen(url, timeout=10))[1][:10]
            except Exception as e:
                s = [f"(falhou: {e})"]
            print(f"== {q.strip()}: " + " | ".join(s))
