"""Sound mix for one film. build.py runs this inside the film folder.
Edit the marked block only. Plants and EVENTS come from film.js, so sound stays on the picture's clock."""
import json, os, sys
sys.path.insert(0, os.environ["STICKMAN_SCRIPTS"])
from audio_kit import Mix

info = json.load(open("film.json"))
m = Mix(info["dur"], seed=9)

# ---- EDIT FROM HERE ----
SFX, MUSIC, VOICE = True, True, "vo"
if SFX:
    D = info["dur"]
    m.room_bed([(0, .3), (D, .3)])
    for e in info["events"]:
        t, k = e["t"], e["k"]
        if k == "cloth": m.cloth(t, pan=.1)
        elif k == "corkin": m.nb(t, 200, 1400, .18, .01, .12, .3, .2); m.sfx("impactsoft-medium-001", t + .05, 1.3, 3000, .15, .2)
        elif k == "lift": m.sfx("impactglass-light-003", t, .8, 3000, .1, .2)
        elif k == "step": m.step(t, pan=.3, g=.12)
        elif k == "fridgeopen": m.sfx("dooropen-1", t, 1.25, 4000, .3, .2); m.nb(t, 60, 300, 1.2, .2, .6, .12)
        elif k == "fridgeclose": m.sfx("doorclose-1", t, 1.2, 3500, .35, .2)
        elif k == "bottledown": m.sfx("impactglass-medium-001", t, .85, 3500, .22, .1)
        elif k == "sip": m.nb(t, 300, 1600, .45, .08, .25, .12, -.1)
        elif k == "glassdown": m.cup_down(t, pan=-.2)
        elif k == "flip": m.sfx("bookplace1", t, 1.4, 5000, .18, .2)
        elif k == "yuck": m.sfx("impactsoft-medium-000", t, .7, 1500, .3, 0); m.sigh(t + .15, g=.22)
        elif k == "whoosh": m.whoosh(t, d=.9, g=.28)
        elif k == "tag": m.sfx("impactglass-light-002", t, 1.2, 6000, .14, .1, .3)
        elif k == "coins":
            for j in range(5): m.sfx("impactmetal-light-00%d" % (j % 5), t + j * .07, 1.6, 7000, .07, .2, .3)
        elif k == "pour": m.nb(t, 400, 2200, 1.3, .1, .4, .1, .2); m.sfx("impactglass-light-001", t + .1, 1.4, 4000, .06, .2)
        elif k == "pop": m.nb(t, 300, 2500, .06, .002, .05, .5, .1); m.sfx("impactsoft-medium-001", t, 1.6, 4000, .2, .1)
        elif k == "sniff": m.nb(t, 1500, 6000, .45, .1, .2, .05, .1)
        elif k == "clink": m.sfx("impactglass-light-003", t, 1.5, 6000, .22, .1, .4); m.sfx("impactglass-light-002", t + .03, 1.9, 7000, .1, -.1, .4)
        elif k == "line": m.sfx("impactglass-light-002", t, 1.0, 5000, .08, 0, .35)
if MUSIC:
    m.music_file("jazz.wav", gain_db=-15)
    # fechamento: a música sobe no brinde (+5 dB) e volta a ficar embaixo da voz do logo
    TOAST, LOGO_T = 182.6, 185.8
    up = m.curve([(0, 1), (TOAST, 1), (TOAST + 1.0, 1.78), (LOGO_T - .1, 1.78), (LOGO_T + .4, 1.15), (info["dur"], 1.15)])
    m.mus[0] *= up; m.mus[1] *= up
if VOICE:
    st = json.load(open("vo/starts.json"))
    for i, at in enumerate(st):
        m.voice(f"vo/l{i:02d}.mp3", at=at, gain_db=-1.5)
# ---- TO HERE ----
m.write("audio.wav")
