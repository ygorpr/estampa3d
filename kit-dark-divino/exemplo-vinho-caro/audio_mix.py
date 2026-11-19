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
    m.room_bed([(0, .2), (3.5, .7), (14, .7), (14.2, .3), (21, .3), (21.1, .7), (25.5, .7), (25.6, .3), (28, .3), (28.1, .7), (32, .5), (D, .3)])
    m.drone([(0, 0), (14, 0), (14.3, .18), (21, .18), (21.1, 0), (25.5, 0), (25.6, .2), (28, .2), (28.1, 0), (29.7, .3), (31.5, .05), (D, 0)])
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
        elif k == "line": m.sfx("impactglass-light-002", t, 1.0, 5000, .08, 0, .35)
if MUSIC:
    m.music_file("jazz.wav", gain_db=-15)
if VOICE:
    st = json.load(open("vo/starts.json"))
    for i, at in enumerate(st):
        m.voice(f"vo/l{i:02d}.mp3", at=at, gain_db=-1.5)
# ---- TO HERE ----
m.write("audio.wav")
