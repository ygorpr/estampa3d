# Animação: helpers, cenários e padrões

Arquivos carregados pela página (ordem): motor da skill stickman (`core.js`, `chars.js` com braço 3D, `motion.js`, `props.js`), cenários
(`sets/*.js`), `film_lib.js` (taça, garrafa, vela, placas), `wine_lib.js` (tudo abaixo), `vo_words.js` (fala + tempos), `film.js` (o seu).

## Tempo
- `const LEN=[...]` (do plan_timing) e `const T=sceneStarts(LEN)`: a cena i começa em `T[i]` e mostra a frase i.
- `wt(i,'palavra')` = instante em que a frase i diz a palavra. Use para fazer coisas aparecerem junto da fala (etiqueta de preço, chip).
- `FILM.cuts=T.map(v=>Math.round(v*30))`. No fim: `installFinish(T,{cena:0.5,...},cenaDaTabela)` (dissolves + legenda).

## Sommelier
- `p=sommPose(t,{look,lookY,brow,sad,mouth,laugh,wide,open,tilt,headX,headY,blink})` · `setHands(p,[[x,y],z],[[x,y],z])` (esq., dir.)
  · `hp=sommActor(cam,p)` · depois desenhe a mão sobre o objeto: `gripHand(f,...h2w(hp,'l'),ângulo,C10,.85)`; mão aberta: `openHand`.
- Expressões: sorriso `mouth .5–.9`, riso `laugh:1`, surpresa `brow 1, wide .6, open .3`, nojo `sad -.7, mouth -.9, wide 1.2, open .45`,
  dúvida `sad .5, brow 1, tilt .12` + mãos abertas para os lados (dar de ombros).
- Posições que dão cotovelo bonito (corpo em x 960, y 600): mão na garrafa (1086,706,z50) · taça em repouso (760–860,812) · mão
  segurando garrafa no peito (≈1135,665,z90) · dar de ombros (960±215,700,z80).

## Taça e gole
- `glassAt(t)` com `keyed(t,t0,sipKeys(x0,y0))`; `glassT(f,g,nível,cor,t)`; mão esquerda em `gripOf(g)` com z `70+clamp((812-g.b[1])/182)*95`.
- Rosto acompanha: `blink` fechado com a taça inclinada, `tilt:-k*.1, headX:-k*6, headY:-k*4, lookY:-k*.4` (k = inclinação/0.95).

## Objetos e cartões
- `bottleL(f,[x,base],escala,'cheap'|'mid'|'exp')` · `priceTag(f,x,y,'R$ 50',alfa,escala)` · `napkin(f,b,s,'A')` (garrafa às cegas) ·
  `chip(f,x,y,'TEXTO',alfa)` · `tip_('1. DICA',alfa)` (placa no topo) · `dayTag(n,alfa)` · `goldText`, `serif`, `plaque`, `ornament`.
- Cartão/tabela: cenário desfocado + véu escuro `rgba(20,6,10,.72)` + layer `g` com `goldText` e `plaque`.

## Cenários (sets/)
- `barWall` (bar de casa com geladeira, prateleiras, pendentes) · `cellarWall` + `barrelSide` (adega com arco, prateleiras, barris)
  · `drawRoom` (sala) · `cafe*` · `street*` · `drawVoid` (cena simbólica). Balcão em todos: `cellarTable` (topo y=800) + `candle`.
- Cenas da geladeira (vista de dentro e frente com calendário): copie `fridgePOV` e `fridgeFront` de `examples/sobrou-vinho/film.js`.
- Cenário novo: formas chapadas, mesma paleta, posições fixas num só "mundo".

## Som (`audio_mix.py`, bloco marcado)
Eventos com `say(t,'nome')` no film.js. Já mapeados: whoosh, cloth, sip, glassdown, tag, coins, line, lift, corkin, fridgeopen/close,
flip, yuck, step, bottledown. Novo som: `m.sfx(nome_do_arquivo_em_sfx, t, pitch, lowpass, ganho, pan)`.
