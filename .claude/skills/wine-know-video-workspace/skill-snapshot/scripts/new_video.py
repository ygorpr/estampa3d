#!/usr/bin/env python3
"""Cria a pasta de um vídeo novo no padrão Wine Know – Dark Divino.
uso: new_video.py <pasta> --thumb thumbnail.png
Copia o motor ajustado (braço 3D, Sommelier, cenários), o filme-modelo, o logo e a fonte; converte a thumbnail para 1920x1080."""
import argparse, shutil
from pathlib import Path
from PIL import Image
SK = Path(__file__).resolve().parent.parent
a = argparse.ArgumentParser(); a.add_argument("folder"); a.add_argument("--thumb", required=True); o = a.parse_args()
d = Path(o.folder); d.mkdir(parents=True, exist_ok=True); (d / "vo").mkdir(exist_ok=True)
shutil.copytree(SK / "engine", d, dirs_exist_ok=True)
for f in ("film.js", "index.html", "audio_mix.py"): shutil.copy(SK / "template" / f, d / f)
shutil.copy(SK / "assets" / "logo.jpg", d / "logo.jpg")
Image.open(o.thumb).convert("RGB").resize((1920, 1080)).save(d / "thumb.jpg", quality=92)
print("pasta pronta:", d.resolve(), "\nfilm.js é o vídeo-modelo 'Sobrou vinho?': adapte as cenas ao novo tema.")
