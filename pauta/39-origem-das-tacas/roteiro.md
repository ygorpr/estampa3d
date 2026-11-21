# De onde vem cada taça de vinho? — roteiro v1 — AGUARDANDO APROVAÇÃO DO DONO
~3 min 45 s · 24 falas + logo · 635 palavras · fluido, sem capítulos · para quem NÃO sabe nada de vinho · fontes: pesquisa.md
Voz só depois do "aprovado" explícito. Áudio será medido, não ouvido.
Não repete o vídeo 13 (haste: kylix, Murano, imposto do vidro, sniffer-cam, mapa da língua, copo americano) nem o 22 (girar): a haste só é citada de passagem (fala 2).

**Cenário sugerido:** **museu do vidro à noite** (vitrines iluminadas em linha do tempo: roemer verde → flûte → coupe → tigela de Sèvres) alternado com o
**bar Dark Divino** (balcão a y=600, fileira de taças diferentes, garrafa SEMPRE pelo gargalo, taça pela haste). Pode reaproveitar o museu/oficina do vídeo 13
(`pauta/13-taca-haste/sets_haste.js`), trocando as peças das vitrines. Inserções com dissolve de ~0,5 s: salão inglês do séc. XVII (f. 5),
laboratório com câmera infravermelha (f. 10), sala de reunião da ISO (f. 12–13), pavilhão da Expo de Bruxelas 1958 (f. 16).

**Personagens extras (personagem de verdade, no estilo do Sommelier, nada de "mancha"):**
- **Cavalheiro inglês do séc. XVII** (f. 5): peruca longa cacheada, casaca bordada, jabô de renda; ergue a flûte e brinda; apoiado numa mesa.
- **Maria Antonieta** (f. 7): penteado alto empoado, vestido azul-claro com laço, leque; segura a coupe com ar de "eu não!" (cômico, elegante, nada explícito).
- **Físico francês** (f. 10): jaleco sobre suéter, óculos, câmera infravermelha num tripé; aponta o monitor.
- **Claus Riedel** (f. 16): ~33 anos, terno dos anos 50, gravata fina, cabelo penteado para trás; recebe a medalha e ergue a taça lisa.
- **Jancis Robinson** (f. 19–20): ~70 anos, cabelo curto grisalho, óculos, blazer escuro; segura UMA taça pela haste.
- **Cuidado:** bolhas e vinho SEMPRE dentro do bojo (flûte, coupe e tulipa); tigela de Sèvres estilizada e discreta (só uma tigela branca em tripé).

**Thumbs sugeridas (fazer depois, 3 opções; 2 linhas que DIZEM o assunto):**
- A) **"DE ONDE VEM / CADA TAÇA?"** — fileira de 5 taças diferentes + rosto do Sommelier. Título: "De onde vem cada taça de vinho? (a história que ninguém conta)". **Recomendada.**
- B) **"A COUPE NÃO É / O SEIO DA RAINHA!"** — Maria Antonieta com a coupe e carimbo "LENDA". Título: "A taça de champanhe foi moldada no seio de Maria Antonieta? É lenda!".
- C) **"POR QUE CADA VINHO / TEM UMA TAÇA?"** — Sommelier entre a Bordeaux e a Borgonha. Título: "Por que cada vinho tem uma taça diferente? Bordeaux, Borgonha, flûte e coupe".

## Pronúncia (na voz vai escrito como se fala — `pronuncia.json`; a legenda mostra a grafia certa)
| Escreve | Fala | Fonte IPA |
|---|---|---|
| flûte | "flút" | francês /flyt/ (Wiktionary "flûte"); o /y/ não existe em português — **dono decide** ("flút" ou dizer "flute" à brasileira) |
| coupe | "cúp" | francês /kup/ (Wiktionary "coupe") |
| roemer | "rúmer" | holandês /ˈru.mər/ (Wiktionary "roemer"); alemão Römer /ˈʁøːmɐ/ |
| INAO | "Inaô" | sigla francesa lida como palavra /i.na.o/ (Institut National des Appellations d'Origine) — **dono decide**: "Inaô" ou soletrar "I-N-A-O" |
| Bordeaux | "Bordô" | francês /bɔʁ.do/ (Wiktionary "Bordeaux"); em português "bordô" |
| Bourgogne | "Borgonha" (português) | francês /buʁ.ɡɔɲ/ (Wiktionary "Bourgogne") — a fala usa o nome em português |
| Claus Riedel | "Kláus Rídel" | alemão /klaʊs ˈʁiːdl̩/ (Duden: "ie" = /iː/); mesma forma do vídeo 13 |
| Pinot Noir | "Pinô Nuár" | francês /pi.no nwaʁ/ (Wiktionary; já aprovado no canal) |
| Jancis Robinson | "Djânsis Róbinson" | inglês: Robinson /ˈrɒb.ɪn.sən/ (Cambridge); Jancis = nome raro sem verbete, /ˈdʒæn.sɪs/ provável — **CONFIRMAR com o dono** |
| Maria Antonieta, Bruxelas, Turquia, Holanda | português | — |

`pronuncia.json`: `{"flûte": "flút", "coupe": "cúp", "roemer": "rúmer", "INAO": "Inaô", "Bordeaux": "Bordô", "Claus Riedel": "Kláus Rídel", "Riedel": "Rídel", "Pinot Noir": "Pinô Nuár", "Jancis Robinson": "Djânsis Róbinson"}`

Números por extenso na fala e na legenda (legenda = fala). Algarismos (1600s, 1830, 1793, 1968, 1970, 1977, 215 ml, 1958, 1973, 1.050 ml, 2018) só nos chips/placas.

| # | Fala (narração = legenda) | Emoção (eleven_v3) | O que aparece na tela |
|---|---|---|---|
| 0 | Por que tem taça de vinho de tudo quanto é jeito? Alta, redonda, fininha, rasinha... Quem inventou cada uma? | [curious] | THUMB viva: Sommelier atrás do balcão com uma fileira de taças diferentes (roemer verde, flûte, coupe, INAO, Bordeaux, Borgonha) à frente; ele segura a de Borgonha pela haste; pisca, fala, aponta a fileira; câmera aproxima devagar |
| 1 | Tem rainha da França, câmera que enxerga gás, briga entre França e Alemanha... e uma taça pra cada uva! Fica comigo! | [excited] | placas fora do rosto (chipSafe): RAINHA · CÂMERA DE GÁS · FRANÇA × ALEMANHA · 1 TAÇA POR UVA |
| 2 | A haste, o cabinho, já ganhou vídeo próprio aqui no canal. Hoje é o formato do copo, e tudo começa no vinho branco! | [warm] | mini-cartão no canto "POR QUE A TAÇA TEM HASTE?" (vídeo 13); Sommelier gira a fileira para o lado e aponta o bojo |
| 3 | Na Holanda e na Alemanha dos anos mil e seiscentos, o branco tinha taça própria: o roemer. Vidro verde, com bolinhas de vidro na haste, pra mão não escorregar. | [thoughtful] | dissolve → MUSEU DO VIDRO: vitrine com o roemer verde (bojo, tronco com bolinhas de vidro, pé de rosca); placa "HOLANDA · ALEMANHA · 1600s"; push-in nas bolinhas |
| 4 | E por que verde? Porque o vidro esverdeado deixava o vinho branco com cor de ouro! | [curious] | luz atravessa o roemer: o vinho branco dentro fica dourado; chip "VIDRO VERDE = COR DE OURO" |
| 5 | Nessa época, o champanhe, o vinho com bolinhas da França, virou moda na Inglaterra. E bebia-se em taças altas e estreitas: a flûte, que em francês quer dizer flauta! | [playful] | dissolve → salão inglês do séc. XVII à luz de velas: cavalheiro de peruca (personagem extra) ergue taça alta e estreita; ao lado aparece uma flauta e a taça "vira" a flauta; placa "FLÛTE = FLAUTA" |
| 6 | Aí, nos anos mil oitocentos e trinta, aparece a rival: a coupe, larga e rasinha, quase um pratinho com pé. | [curious] | vitrine seguinte: a coupe larga, rasa, com espuma alta; placa "ANOS 1830" |
| 7 | E vem a lenda: dizem que a coupe foi moldada no seio da rainha Maria Antonieta. Lenda! A rainha morreu em mil setecentos e noventa e três, uns quarenta anos antes da coupe virar moda. | [emphatic] | retrato estilizado de Maria Antonieta (personagem: penteado alto, vestido, leque) com a coupe; carimbo vermelho "LENDA"; linha do tempo 1793 → 1830s |
| 8 | O que existe é outra peça: uma tigela de porcelana pra beber leite, feita pra leiteria de luxo da rainha. E até essa história de molde... ninguém prova! | [amazed] | vitrine: tigela branca de porcelana em tripé (bol-sein, estilizada, sem nada explícito) com jarra de leite; placa "SÈVRES · LEITERIA DA RAINHA · 1787"; carimbo "BOATO" |
| 9 | A coupe viveu seu auge entre as duas guerras mundiais. Depois, a flûte voltou com tudo. Mas qual é melhor? | [confident] | linha do tempo dourada: coupe grande no meio (1918–1939), flûte voltando à direita |
| 10 | Um físico francês mediu com uma câmera que enxerga gás: logo depois de servir, em cima da flûte tinha o dobro do gás das bolhas do que na coupe! | [amazed] | dissolve → LABORATÓRIO: físico francês (personagem) com câmera infravermelha num tripé; monitor mostra nuvem laranja de gás sobre a flûte (alta) × nuvem fraca sobre a coupe; placa "2× MAIS GÁS NA FLÛTE" |
| 11 | A coupe deixa a bolha fugir. Só que a flûte, de boca apertada, esconde o perfume. Por isso, muito especialista hoje prefere a tulipa: larga no meio e fechadinha na boca, como a flor! | [thoughtful] | três taças lado a lado: coupe (setas de bolha fugindo), flûte (setinhas de aroma presas), TULIPA no meio brilhando; ao lado, uma tulipa de flor; bolhas só dentro do bojo |
| 12 | E os profissionais? Precisavam de uma taça igual pra todo mundo. Em mil novecentos e sessenta e oito, a Alemanha propôs um modelo... e a França, outro! | [serious] | dissolve → sala de reunião antiga: duas taças de prova sobre a mesa com bandeirinhas Alemanha × França; placa "LONDRES · 1968" |
| 13 | Em mil novecentos e setenta, numa reunião na Turquia, venceu o francês! É a taça INAO, do instituto francês que cuida dos vinhos com nome de lugar. Depois, virou norma mundial. | [excited] | martelo de juiz/carimbo "ANCARA · 1970"; a taça francesa ganha selo dourado "INAO"; depois "ISO 3591 · 1977" |
| 14 | Pequena, uns duzentos e quinze mililitros, com formato de ovo: a boca mais estreita que a barriga, pra prender o cheiro. Vale até hoje! | [confident] | de volta ao BAR: Sommelier segura a taça INAO pela haste; desenho de ovo pontilhado sobre o bojo; placa "~215 ml"; setas mostrando boca estreita × barriga larga |
| 15 | E as taças Bordeaux e Borgonha? Os nomes vêm de duas regiões de vinho da França. Mas quem fez disso uma regra foi um austríaco: Claus Riedel. | [curious] | mapa da França com BORDEAUX e BORGONHA; taças correspondentes surgem sobre cada região; placa "CLAUS RIEDEL · ÁUSTRIA" |
| 16 | Em mil novecentos e cinquenta e oito, ele ganhou um grande prêmio em Bruxelas com uma taça de Borgonha lisa e fina. Em mil novecentos e setenta e três, lançou uma taça pra cada uva! | [excited] | dissolve → pavilhão da Expo de Bruxelas 1958 (o Atomium ao fundo, estilizado); Claus Riedel (personagem: terno anos 50, óculos de aro grosso, cabelo penteado para trás) recebe medalha "GRAND PRIX"; depois fileira de taças "1973" |
| 17 | A de Borgonha tem o bojo, a parte redonda, feito um balão: cabe mais de um litro! É pra uvas de perfume delicado, como a Pinot Noir. A Bordeaux é mais alta, pros tintos encorpados, mais pesados na boca. | [confident] | BAR: as duas taças lado a lado; régua mostrando a Bordeaux mais alta; chip "BOJO = A PARTE REDONDA"; contador "1.050 ml" na Borgonha |
| 18 | E a de branco é menor: o vinho fica gelado por mais tempo, e o cheiro, que no frio é tímido, fica pertinho do nariz. | [thoughtful] | taça de branco menor, com gotinhas de frio por fora e termômetro azul; setinhas de aroma subindo curtinhas até o nariz do Sommelier |
| 19 | Mas precisa de uma pra cada vinho? Um estudo alemão mostrou que o formato muda o cheiro, sim. Mas a famosa crítica inglesa Jancis Robinson acha que uma só resolve. | [curious] | placa "ESTUDO ALEMÃO" com barras de aroma; depois Jancis Robinson (personagem: ~70 anos, cabelo curto grisalho, óculos, blazer) balança a cabeça sorrindo |
| 20 | Em dois mil e dezoito, ela lançou uma taça só, pra tudo: tinto, branco, rosé... e até espumante! | [warm] | Jancis ergue UMA taça; atrás dela as outras taças somem uma a uma; placa "2018 · UMA TAÇA SÓ" |
| 21 | Então, em casa: vidro fino e liso, bojo largo, boca um pouco mais fechada. E se hoje for no copo americano do boteco... tudo bem também! | [playful] | BAR: Sommelier mostra 3 ícones: VIDRO FINO · BOJO LARGO · BOCA FECHADA; no fim, um copo americano aparece no balcão e ele dá risada |
| 22 | Resumindo: a verde era do branco, a flûte veio da Inglaterra, a coupe não é da rainha, a INAO é dos profissionais... e a Riedel deu uma taça pra cada uva! | [confident] | TABELA final em 5 cartões dourados (sem legenda); cartões entram durante a fala + máx. 2 s parada |
| 23 | Curtiu? Se inscreve no canal e me conta: em casa, você bebe vinho em qual taça? | [friendly] | CTA no canto superior esquerdo; Sommelier acena; depois fechamento sem fala (~3 s: brinde pela haste, câmera aproxima, música sobe) |
| 24 | Wine Know. Dark Divino. | (sem tag — logo, falado sozinho) | logo (sem legenda) |

**Tabela final (5 cartões dourados, ícone de taça + texto, sem legenda):**
1. **ROEMER VERDE** – o vinho branco ganha cor de ouro (1600s)
2. **FLÛTE** – a "flauta" inglesa, segura as bolhas
3. **COUPE** – anos 1830, NÃO é o seio da rainha
4. **INAO / ISO** – a taça-ovo dos profissionais (1970)
5. **RIEDEL** – uma taça por uva (1958 / 1973)

**Fechamento obrigatório (regra de 21/11):** fala 22 (resumo) com os cartões entrando durante a fala → tabela parada no máximo ~2 s → fala 23 (CTA, canto superior esquerdo)
→ cena de fechamento sem fala (~3,2 s: brinde pela haste, câmera aproxima, música sobe) → logo ~3 s com "Wine Know. Dark Divino." (sem legenda).
Nenhum trecho sem fala por mais de ~2,5 s.

## Palavras difíceis explicadas na hora
haste ("o cabinho", f. 2) · roemer ("taça própria do branco... vidro verde, com bolinhas de vidro na haste", f. 3) · champanhe ("o vinho com bolinhas da França", f. 5) ·
flûte ("em francês quer dizer flauta", f. 5) · coupe ("larga e rasinha, quase um pratinho com pé", f. 6) · gás das bolhas (f. 10) ·
tulipa ("larga no meio e fechadinha na boca, como a flor", f. 11) · INAO ("o instituto francês que cuida dos vinhos com nome de lugar", f. 13) ·
norma mundial (f. 13) · bojo ("a parte redonda", f. 17) · encorpados ("mais pesados na boca", f. 17) · Jancis Robinson ("famosa crítica inglesa", f. 19).

## Checar antes da voz
- f. 3–4: roemer = copo mais popular para vinho branco na Holanda do séc. XVII; verde "ideal para o branco" (Rijksmuseum, Chrysler Museum). A fala diz "Holanda e Alemanha" (vidro verde vinha da Alemanha).
- f. 5: champanhe na sociedade britânica desde meados do séc. XVII (Harding); flûtes populares no fim do séc. XVII (V&A, via busca — página do museu bloqueada aqui).
- f. 6: coupe popular a partir dos anos 1830, primeiro na Grã-Bretanha (Harding, EHNE/Sorbonne). Data 1663 (Snopes) ficou FORA.
- f. 7–8: mito desmentido (Snopes, The Smart Set, Slate.fr); Maria Antonieta executada em 1793 (Britannica). Bol-sein de Sèvres para a leiteria de Rambouillet (The Met, Sèvres), para leite; "moldado no seio" = lenda, segundo a própria Sèvres.
- f. 9: coupe dominante entre as guerras (Harding: "parece ter sido"). "A flûte voltou" sem data (só fonte secundária para "depois de 1950").
- f. 10: Liger-Belair et al., PLoS ONE 2012: CO2 significativamente maior sobre a flûte; "o dobro" vem das reportagens (Phys.org, ATK: coupe ≈ metade). Artigo original não lido (WebFetch bloqueado) → **checar o número no artigo**; se não confirmar: "bem mais gás das bolhas".
- f. 11: flûte "ingênua" para o aroma e tulipa como compromisso (Decanter 2016; America's Test Kitchen; Harding).
- f. 12–13: Londres 1968 (proposta alemã), Ancara set. 1970 (vitória francesa), INAO 1970, AFNOR 1971 — fonte de setor (Syndicat des Côtes-du-Rhône), peso médio; ISO 3591 de 1977 confirmada pela ISO. **Checar**: se o dono quiser só fonte forte, trocar f. 12–13 por "Nos anos setenta, a França criou a taça INAO, que virou norma mundial".
- f. 14: ~215 ml (210–225), boca mais estreita que o corpo (ISO); confirmada em 2022 → "vale até hoje".
- f. 16: Bruxelas 1958, grand prix (V&A, Riedel); Sommeliers 1973 (Riedel; o V&A cita as taças de 1971 — fala usa a data oficial do lançamento).
- f. 17: Burgundy Grand Cru 1.050 ml; Bordeaux Grand Cru 860 ml e mais alta (270 mm × 248 mm). "Pra uvas de perfume delicado" = explicação do fabricante/guias.
- f. 18: taça de branco menor = "explicação mais aceita" (Wine Enthusiast); a fala não dá número.
- f. 19–20: Hummel 2003 (181 pessoas, sem número na fala); taça única de Jancis Robinson e Richard Brendon, 25/6/2018, para tinto, branco, rosé, espumante e fortificado.
