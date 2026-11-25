#!/usr/bin/env python3
"""Chama o robô do YouTube (Apps Script). URL em $ROBO_URL ou ~/.robo_wine_know (nunca no repo)."""
import json, os, re, subprocess, sys

RAW = 'https://raw.githubusercontent.com/ygorpr/estampa3d/claude/video-transcription-steps-c6pkcc/'


def url_robo():
    u = os.environ.get('ROBO_URL') or open(os.path.expanduser('~/.robo_wine_know')).read().strip()
    return u


def chamar(payload):
    r = subprocess.run(['curl', '-sL', '-H', 'Content-Type: application/json',
                        '--data-binary', '@-', url_robo()], input=json.dumps(payload).encode(),
                       capture_output=True, timeout=600)
    out = r.stdout.decode()
    try:
        return json.loads(out)
    except Exception:
        return {'ok': False, 'erro': out[:500]}


def pacote(md):
    t = open(md, encoding='utf-8').read()
    titulo = re.search(r'\|\s*A\s*\*\*\(RECOMENDADO\)\*\*\s*\|\s*(.+?)\s*\|', t)
    titulo = titulo.group(1) if titulo else re.search(r'\|\s*A[^|]*\|\s*(.+?)\s*\|', t).group(1)
    desc = re.search(r'## 2\. Descri.*?```\n(.*?)```', t, re.S).group(1).strip()
    tags = re.search(r'## 3\. Tags.*?\n(.*?)\n\n', t, re.S).group(1).replace('\n', ' ')
    return titulo.strip(), desc, [x.strip() for x in tags.split(',') if x.strip()]


def canal():
    r = subprocess.run(['curl', '-sL', url_robo()], capture_output=True, timeout=120)
    return json.loads(r.stdout.decode()).get('canal', '')


if __name__ == '__main__':
    a = sys.argv[1:]
    c = canal()
    if a[0] in ('thumb', 'subir') and 'wine know' not in c.lower():
        sys.exit('PARADO: o robô está no canal "%s", não no Wine Know. Reautorizar escolhendo o canal Wine Know.' % c)
    if a[0] == 'listar':
        print(json.dumps(chamar({'acao': 'listar'}), ensure_ascii=False, indent=1))
    elif a[0] == 'thumb':
        print(chamar({'acao': 'thumb', 'videoId': a[1], 'thumbUrl': RAW + a[2]}))
    elif a[0] == 'subir':
        titulo, desc, tags = pacote(a[1])
        print(chamar({'acao': 'subir', 'videoUrl': RAW + a[2], 'thumbUrl': RAW + a[3], 'titulo': titulo,
                      'descricao': desc, 'tags': tags, 'publishAt': a[4]}))
