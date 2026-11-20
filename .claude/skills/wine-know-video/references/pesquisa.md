# Pesquisa e checagem de fatos (obrigatória antes do roteiro)

O canal vive de credibilidade com um público que entende de vinho. Todo fato dito pelo Paulo precisa de fonte confiável.

## 1. Demanda (o que o público procura)
`scripts/youtube_ideas.py` (autocompletar) e `--views` (vídeos existentes, visualizações e idade). O vídeo mais visto do tema é a
referência PRINCIPAL de cobertura, mas não a única: veja também os 3–5 seguintes. Use os títulos/descrições para saber o que o
público já recebeu e ache o que falta (nosso diferencial). Nunca copie roteiro, frase ou estrutura de outro canal.

## 2. Fatos — só fontes de quem entende, com referência
Busque com `allowed_domains` para não cair em blog sem base. Use, em ordem:
- **Lei e órgãos oficiais (Brasil):** planalto.gov.br (Lei 7.678/1988 e alterações), gov.br/agricultura (MAPA), embrapa.br
  (Embrapa Uva e Vinho), Ibravin/Consevitis.
- **Pesquisa:** AWRI (awri.com.au), universidades, artigos com revisão (PNAS, Journal of Wine Economics).
- **Críticos e escolas:** jancisrobinson.com, wsetglobal.com, decanter.com, winespectator.com, winefolly.com, GuildSomm.
- **Brasil especializado:** Revista Adega, ABS (Associação Brasileira de Sommeliers), Guia Descorchados.
Evite: blogs de loja, sites de receita, agregadores, IA, fóruns — no máximo como pista para achar a fonte primária.

## 3. Regras
- Cada fato do roteiro vem com a fonte ao lado no `pesquisa.md` do vídeo (pasta `pauta/NN-tema/` do projeto).
- Fontes divergem? Fale a faixa conservadora ou deixe o número de fora ("boa parte", "em poucas horas").
- Saúde: nada de conselho médico; só o que é consenso e dito com cautela.
- Mostre o `pesquisa.md` ao usuário junto com o roteiro.

## 4. Profundidade exigida (pedido do dono)
- "Ir nos confins do universo": etimologia, história completa, ciência (química/física), números, datas, nomes, ângulo Brasil,
  mito × verdade e curiosidades que quase ninguém sabe. Ver exemplos em `regras-do-dono.md` §3.
- Pronúncia de todo nome estrangeiro conferida em dicionário (IPA) e posta na tabela do roteiro + `vo/pronuncia.json`.
- Fato sem fonte boa: tirar do roteiro e avisar. Divergência: "a explicação mais aceita".
