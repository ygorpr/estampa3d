"""Gera a narração no ElevenLabs, frase por frase, com o tempo de cada palavra (para a legenda karaokê).
uso: python3 tts_paulo.py lines.json   (lines.json = [[inicio, fim, "frase"], ...])
A chave fica salva no ambiente (cabeçalho xi-api-key injetado pelo proxy). Voz padrão: Paulo."""
import json, subprocess, base64, sys
VOZ = "Qrdut83w0Cr152Yb4Xn3"  # Paulo
L = json.load(open(sys.argv[1])); out = []
for i, (a, b, txt) in enumerate(L):
    vs = {"stability": .45, "similarity_boost": .75, "style": .2, "use_speaker_boost": True, "speed": 1.05}
    body = {"text": txt, "model_id": "eleven_multilingual_v2", "voice_settings": vs}
    if i: body["previous_text"] = L[i-1][2]
    if i + 1 < len(L): body["next_text"] = L[i+1][2]
    r = subprocess.run(["curl", "-sS", "-X", "POST", f"https://api.elevenlabs.io/v1/text-to-speech/{VOZ}/with-timestamps?output_format=mp3_44100_128",
                        "-H", "xi-api-key: proxy-injected", "-H", "Content-Type: application/json", "-d", json.dumps(body)], capture_output=True, text=True)
    d = json.loads(r.stdout); open(f"l{i:02d}.mp3", "wb").write(base64.b64decode(d["audio_base64"]))
    al = d["alignment"]; words = []; cur = ""; ws = we = None
    for c, s0, e0 in zip(al["characters"], al["character_start_times_seconds"], al["character_end_times_seconds"]):
        if c.isspace():
            if cur: words.append([cur, ws, we]); cur = ""
            continue
        if not cur: ws = s0
        cur += c; we = e0
    if cur: words.append([cur, ws, we])
    dur = float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f"l{i:02d}.mp3"], capture_output=True, text=True).stdout)
    out.append({"text": txt, "words": words, "dur": dur}); print(i, round(dur, 2), "s, cabe em", round(b - a, 2), "s:", txt)
json.dump(out, open("words.json", "w"), ensure_ascii=False)
