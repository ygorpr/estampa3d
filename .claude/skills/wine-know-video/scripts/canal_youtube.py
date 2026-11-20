#!/usr/bin/env python3
"""Lê o canal Wine Know (Dark Divino) pela API do Windsor.ai e gera o JSON do painel (doc canal/youtube).
Chave: variável de ambiente WINDSOR_API_KEY_DARKDIVINO (nunca gravar em arquivo). Uso: canal_youtube.py saida.json"""
import json, os, sys, urllib.request, urllib.parse, datetime
K=os.environ.get('WINDSOR_API_KEY_DARKDIVINO'); A='108952'
if not K: sys.exit('Falta WINDSOR_API_KEY_DARKDIVINO')
def q(fields,preset='last_28d'):
    u='https://connectors.windsor.ai/youtube?'+urllib.parse.urlencode({'date_preset':preset,'fields':','.join(fields),'select_accounts':A,'api_key':K})
    with urllib.request.urlopen(u,timeout=180) as r: return json.load(r).get('data',[])
num=lambda x:float(x or 0)
ch=(q(['channel_title','subscriber_count','video_count','view_count'],'last_2years') or [{}])[0]
serie=q(['date','views','estimated_minutes_watched','subscribers_gained','subscribers_lost'])
vids=q(['video','video_title','published_at','video_view_count','video_like_count','video_comment_count','average_view_percentage','average_view_duration','videourl','videoimage'],'last_2years')
idade=q(['viewer_age_group','viewer_gender','viewer_percentage'])
coms=q(['comment_id','comment_text','comment_author','comment_published_at','comment_video_id','comment_like_count','comment_reply_count'],'last_2years')
trafego=q(['traffic_source','views']); disp=q(['device_type','views']); pais=q(['country','views'])
def soma(L,k,v):
    d={}
    for r in L: d[r.get(k) or '—']=d.get(r.get(k) or '—',0)+num(r.get(v))
    return sorted(([a,b] for a,b in d.items()),key=lambda x:-x[1])[:8]
v28=sum(num(r.get('views')) for r in serie); m28=sum(num(r.get('estimated_minutes_watched')) for r in serie)
g28=sum(num(r.get('subscribers_gained')) for r in serie)-sum(num(r.get('subscribers_lost')) for r in serie)
V={}
for r in vids:
    k=r.get('video') or r.get('video_title')
    if k and k not in V: V[k]={'titulo':r.get('video_title'),'publicado':r.get('published_at'),'views':num(r.get('video_view_count')),'likes':num(r.get('video_like_count')),
      'comentarios':num(r.get('video_comment_count')),'retencao':num(r.get('average_view_percentage')),'duracaoMedia':num(r.get('average_view_duration')),'url':r.get('videourl'),'thumb':r.get('videoimage')}
out={'atualizado':datetime.datetime.now(datetime.timezone.utc).isoformat(),'canal':{'titulo':ch.get('channel_title'),'inscritos':num(ch.get('subscriber_count')),
  'videos':num(ch.get('video_count')),'viewsTotal':num(ch.get('view_count')),'views28':v28,'horas28':round(m28/60,1),'inscritos28':g28,
  'duracaoMedia28':round(m28*60/v28) if v28 else 0},
 'serie':[{'d':r.get('date'),'v':num(r.get('views')),'m':num(r.get('estimated_minutes_watched')),'s':num(r.get('subscribers_gained'))-num(r.get('subscribers_lost'))} for r in sorted(serie,key=lambda r:r.get('date') or '')],
 'videos':sorted(V.values(),key=lambda x:-x['views']),
 'comentariosPublico':[{'id':r.get('comment_id'),'texto':r.get('comment_text'),'autor':r.get('comment_author'),'em':r.get('comment_published_at'),'video':r.get('comment_video_id'),'curtidas':num(r.get('comment_like_count')),'respostas':num(r.get('comment_reply_count'))} for r in coms],
 'publico':{'idade':soma(idade,'viewer_age_group','viewer_percentage'),'genero':soma(idade,'viewer_gender','viewer_percentage'),
   'trafego':soma(trafego,'traffic_source','views'),'dispositivo':soma(disp,'device_type','views'),'pais':soma(pais,'country','views')}}
json.dump(out,open(sys.argv[1],'w'),ensure_ascii=False,indent=1); print(json.dumps(out['canal'],ensure_ascii=False),len(out['serie']),len(out['videos']))
