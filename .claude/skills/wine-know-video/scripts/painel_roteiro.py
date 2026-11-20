import json,sys
pasta,num,extra=sys.argv[1],int(sys.argv[2]),sys.argv[3] if len(sys.argv)>3 else ""
p=json.load(open(pasta+'/painel.json'))
p.update({"num":num,"vez":"dono","estado":None})
if extra: p["obs"]=(p.get("obs","")+" "+extra).strip()
out=f"{sys.argv[0].rsplit('/',1)[0]}/up{num}.json"; json.dump(p,open(out,'w'),ensure_ascii=False); print(out,len(p['roteiro']),p.get('duracao'))
