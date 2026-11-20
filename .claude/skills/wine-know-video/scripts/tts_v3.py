#!/usr/bin/env python3
"""Narração do Paulo no ElevenLabs v3, COM EMOÇÃO e embalo (padrão aprovado: voz "C").
uso: tts_v3.py <pasta>/vo/tagged.json <pasta>/vo [--bloco 3] [--blocos 5,6,7]
tagged.json = [["[excited]","frase da cena 0 ... pode ter [laughs] no meio"], ["[confident]","frase da cena 1"], ...]
Gera o áudio em BLOCOS de várias frases (o Paulo mantém o embalo, sem "fechar" cada frase), depois corta frase a frase
pelos tempos das palavras. Saída igual ao tts_paulo.py: l00.mp3..., words.json e lines.json (sem as marcações).

NUNCA PAGAR DUAS VEZES (correção de 20/11/2026, quando o crédito acabou no meio e os tempos se perderam):
- A resposta de cada bloco (áudio + alinhamento) é gravada em vo/raw_bN.json ASSIM QUE CHEGA, antes de qualquer outro passo.
- Se vo/raw_bN.json já existe, é válido e o texto é o mesmo, o bloco é reaproveitado (não chama a API, não gasta crédito).
  Basta rodar de novo o mesmo comando para retomar depois de uma queda/falta de crédito.
- --blocos 5,6,7 (ou SKIP=0,1,2 no ambiente) limita QUAIS blocos podem ir para a API; os outros só usam o que já está
  no disco (raw_bN.json, ou as falas lNN.mp3 + words.json que já existem).
- Se a API devolver erro (ex.: quota_exceeded), o script PARA na hora (não tenta os blocos seguintes) e mostra o erro.
- Cada chamada paga fica anotada em vo/tts_log.json (bloco, falas, nº de caracteres enviados, data).
"""
import json, subprocess, base64, re, sys, os, time
VOZ = "Qrdut83w0Cr152Yb4Xn3"  # Paulo
src, dst = sys.argv[1], sys.argv[2]; bsz = int(sys.argv[sys.argv.index("--bloco") + 1]) if "--bloco" in sys.argv else 3
L = json.load(open(src)); os.chdir(dst)
# PRONÚNCIA: vo/pronuncia.json = {"grafia certa": "como se fala"} (mesmo nº de palavras!). A voz recebe o "como se fala";
# a legenda continua com a grafia certa. Ex.: {"Veuve Clicquot": "Vév Clicô", "sommelier": "somelhê"}
PRON = json.load(open("pronuncia.json")) if os.path.exists("pronuncia.json") else {}
for a, b in PRON.items(): assert len(a.split()) == len(b.split()), f"pronúncia precisa ter o mesmo nº de palavras: {a} -> {b}"
def falado(t):
    for a, b in sorted(PRON.items(), key=lambda kv: -len(kv[0])): t = re.sub(r"(?<![\wÀ-ú])" + re.escape(a) + r"(?![\wÀ-ú])", b, t)
    return t
clean = lambda s: re.sub(r"\s*\[[^\]]*\]\s*", " ", s).strip()
blocks = [list(range(i, min(i + bsz, len(L)))) for i in range(0, len(L), bsz)]
if len(blocks[-1]) > 1: blocks[-1:] = [blocks[-1][:-1], [len(L) - 1]]  # "Wine Know. Dark Divino." sempre sozinha
allowed = None
if "--blocos" in sys.argv: allowed = {int(v) for v in sys.argv[sys.argv.index("--blocos") + 1].split(",") if v.strip()}
elif os.environ.get("SKIP"): allowed = set(range(len(blocks))) - {int(v) for v in os.environ["SKIP"].split(",") if v.strip()}

old = json.load(open("words.json")) if os.path.exists("words.json") else []
out = [old[i] if i < len(old) else None for i in range(len(L))]
def log(entry):
    lg = json.load(open("tts_log.json")) if os.path.exists("tts_log.json") else []
    lg.append(entry); json.dump(lg, open("tts_log.json", "w"), ensure_ascii=False, indent=1)

def get_block(bi, text):
    """Devolve a resposta (dict com audio_base64 + alignment) do disco ou da API. None = não pode/não quis chamar."""
    raw = f"raw_b{bi}.json"
    if os.path.exists(raw):
        try:
            d = json.load(open(raw))
            if "audio_base64" in d and d.get("_text", text) == text:
                print("bloco", bi, "reaproveitado do disco (sem crédito)"); return d
            if "audio_base64" in d: print("bloco", bi, "raw_b%d.json é de um texto antigo" % bi)
        except Exception: pass
    if allowed is not None and bi not in allowed: return None
    body = {"text": text, "model_id": "eleven_v3", "voice_settings": {"stability": .5, "similarity_boost": .75}}
    r = subprocess.run(["curl", "-sS", "-X", "POST", f"https://api.elevenlabs.io/v1/text-to-speech/{VOZ}/with-timestamps?output_format=mp3_44100_128",
                        "-H", "xi-api-key: proxy-injected", "-H", "Content-Type: application/json", "-d", json.dumps(body)], capture_output=True, text=True)
    try: d = json.loads(r.stdout)
    except Exception: d = {"_erro": r.stdout[:2000], "_stderr": r.stderr[:500]}
    ok = "audio_base64" in d
    d["_text"] = text
    # grava JÁ (arquivo temporário + rename: nunca fica meio escrito)
    json.dump(d, open(raw + ".tmp", "w"), ensure_ascii=False); os.replace(raw + ".tmp", raw)
    log({"bloco": bi, "falas": blocks[bi], "caracteres": len(text), "ok": ok, "quando": time.strftime("%Y-%m-%d %H:%M:%S")})
    if not ok:
        sys.exit(f"ERRO no bloco {bi} (nada mais foi pedido; rode de novo para retomar): {json.dumps(d, ensure_ascii=False)[:600]}")
    print("bloco", bi, "gerado:", len(text), "caracteres")
    return d

for bi, blk in enumerate(blocks):
    text = " ".join(L[i][0] + " " + falado(L[i][1]) for i in blk)
    d = get_block(bi, text)
    if d is None:
        falta = [i for i in blk if not (out[i] and os.path.exists(f"l{i:02d}.mp3"))]
        print("bloco", bi, "pulado" + (f" — FALTAM as falas {falta} (sem áudio/tempos no disco)" if falta else " (já estava pronto)"))
        continue
    open(f"b{bi}.mp3", "wb").write(base64.b64decode(d["audio_base64"])); al = d["alignment"]
    words = []; cur = ""; ws = we = None; tag = False
    for c, a, b in zip(al["characters"], al["character_start_times_seconds"], al["character_end_times_seconds"]):
        if c == "[": tag = True; continue
        if tag:
            if c == "]": tag = False
            continue
        if c.isspace():
            if cur: words.append([cur, ws, we]); cur = ""
            continue
        if not cur: ws = a
        cur += c; we = b
    if cur: words.append([cur, ws, we])
    k = 0; spans = []
    for i in blk:
        n = len(clean(falado(L[i][1])).split()); spans.append((i, words[k:k + n])); k += n
    dur = float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f"b{bi}.mp3"], capture_output=True, text=True).stdout)
    for j, (i, w_) in enumerate(spans):
        a = 0 if j == 0 else (spans[j - 1][1][-1][2] + w_[0][1]) / 2
        b = dur if j == len(spans) - 1 else (w_[-1][2] + spans[j + 1][1][0][1]) / 2
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", f"b{bi}.mp3", "-ss", str(a), "-to", str(b), "-c:a", "libmp3lame", "-q:a", "2", f"l{i:02d}.mp3"])
        disp = clean(L[i][1]).split()
        out[i] = {"text": clean(L[i][1]), "words": [[disp[k] if k < len(disp) else w, s - a, e - a] for k, (w, s, e) in enumerate(w_)], "dur": b - a}
    print("bloco", bi, round(dur, 1), "s")
    json.dump(out, open("words.json", "w"), ensure_ascii=False)  # salva a cada bloco
falta = [i for i, o in enumerate(out) if not o]
if falta: sys.exit(f"words.json incompleto: faltam as falas {falta}")
json.dump(out, open("words.json", "w"), ensure_ascii=False); json.dump([[0, 0, o["text"]] for o in out], open("lines.json", "w"), ensure_ascii=False)
print("fala total", round(sum(o["dur"] for o in out), 1), "s")
