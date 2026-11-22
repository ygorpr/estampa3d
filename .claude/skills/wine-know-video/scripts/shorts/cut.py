import sys,json,subprocess,math
import numpy as np
from PIL import Image,ImageDraw,ImageFilter,ImageFont
S='/tmp/claude-0/-home-user-estampa3d/b0f0cc1c-a8e7-5c2a-8d40-81a18c04daff/scratchpad'
FC=f'{S}/shorts/fonts/cinzel-latin-900-normal.ttf'
FG=f'{S}/shorts/fonts/cormorant-garamond-latin-600-normal.ttf'
GOLD=(212,162,76);LGOLD=(242,210,122);CREAM=(243,230,200);BG=(20,5,9)
OW,OH=1080,1920
RATIO=0.5375; MW,MH=1080,580
TITLE_Y=290; MAIN_Y=620; SUB_Y=MAIN_Y+MH+22
SUBBOX=(190,870,1730,1050)
SUBH=round((SUBBOX[3]-SUBBOX[1])*1080/(SUBBOX[2]-SUBBOX[0]))

def grad_text(lines,size):
    f=ImageFont.truetype(FC,size)
    img=Image.new('RGBA',(OW,330),(0,0,0,0))
    y=10
    for ln in lines:
        bb=f.getbbox(ln); w=bb[2]-bb[0]; s=size
        ff=f
        while w>1000:
            s-=2; ff=ImageFont.truetype(FC,s); bb=ff.getbbox(ln); w=bb[2]-bb[0]
        x=(OW-w)//2-bb[0]
        # shadow
        sh=Image.new('RGBA',img.size,(0,0,0,0)); ImageDraw.Draw(sh).text((x+3,y+5),ln,font=ff,fill=(0,0,0,220))
        img=Image.alpha_composite(img,sh.filter(ImageFilter.GaussianBlur(5)))
        mask=Image.new('L',img.size,0); ImageDraw.Draw(mask).text((x,y),ln,font=ff,fill=255)
        h=bb[3]
        g=np.zeros((img.size[1],OW,4),np.uint8)
        for yy in range(img.size[1]):
            k=min(1,max(0,(yy-y-bb[1])/max(1,h-bb[1])))
            c=[int(LGOLD[i]*(1-k)+GOLD[i]*k) for i in range(3)]
            g[yy,:,:3]=c
        g[:,:,3]=np.array(mask)
        img=Image.alpha_composite(img,Image.fromarray(g))
        y+=int(s*1.18)
    # ornament
    d=ImageDraw.Draw(img); cy=y+18
    d.line([(300,cy),(505,cy)],fill=GOLD+(255,),width=3); d.line([(575,cy),(780,cy)],fill=GOLD+(255,),width=3)
    d.polygon([(540,cy-12),(552,cy),(540,cy+12),(528,cy)],fill=GOLD+(255,))
    return img.crop((0,0,OW,cy+20))

def endcard():
    img=Image.new('RGBA',(OW,OH),BG+(238,))
    logo=Image.open(f'{S}/v09/film/logo_badge.png').convert('RGBA')
    lw=330; logo=logo.resize((lw,round(logo.size[1]*lw/logo.size[0])),Image.LANCZOS)
    y0=720; img.alpha_composite(logo,((OW-lw)//2,y0))
    d=ImageDraw.Draw(img); f=ImageFont.truetype(FG,64)
    t='Vídeo completo no canal'; bb=f.getbbox(t)
    d.text(((OW-(bb[2]-bb[0]))//2,y0+logo.size[1]+50),t,font=f,fill=LGOLD)
    cy=y0+logo.size[1]+40
    d.line([(330,cy),(750,cy)],fill=GOLD,width=2)
    return img

def smooth(u): u=min(1,max(0,u)); return u*u*(3-2*u)
def cam(t,kf):
    kf=[k if len(k)==5 else list(k)+[2000] for k in kf]
    if t<=kf[0][0]: return kf[0][1:]
    for (t0,*p0),(t1,*p1) in zip(kf,kf[1:]):
        if t0<=t<=t1:
            u=smooth((t-t0)/(t1-t0)) if t1>t0 else 1
            return [p0[i]+(p1[i]-p0[i])*u for i in range(4)]
    return kf[-1][1:]

def main(cfg):
    src=cfg['src']; a=cfg['a']; end=cfg['end']; nxt=cfg['next']
    T=end+1.6-a; bsrc=min(a+T,nxt-0.05); srcdur=bsrc-a
    title=grad_text(cfg['title'],84); ec=endcard()
    fps=30; N=int(round(T*fps))
    dec=subprocess.Popen(['ffmpeg','-v','error','-ss',f'{a:.3f}','-i',src,'-t',f'{srcdur:.3f}','-f','rawvideo','-pix_fmt','rgb24','-'],stdout=subprocess.PIPE)
    out=cfg['out']; afade_st=max(0,srcdur-0.3)
    enc=subprocess.Popen(['ffmpeg','-v','error','-y','-f','rawvideo','-pix_fmt','rgb24','-s',f'{OW}x{OH}','-r',str(fps),'-i','-',
        '-ss',f'{a:.3f}','-t',f'{srcdur:.3f}','-i',src,
        '-filter_complex',f'[1:a]afade=t=in:d=0.3,afade=t=out:st={afade_st:.3f}:d=0.3,apad[aa]',
        '-map','0:v','-map','[aa]','-t',f'{N/fps:.3f}','-c:v','libx264','-preset','medium','-crf','19','-pix_fmt','yuv420p','-threads','2',
        '-c:a','aac','-b:a','192k','-movflags','+faststart',out],stdin=subprocess.PIPE)
    fsz=1920*1080*3; last=None; frames_for_sheet=[]
    sheet_t=set(int(round(x*fps)) for x in np.linspace(0.05,T-0.1,cfg.get('nsheet',12)))
    for n in range(N):
        t=n/fps
        buf=dec.stdout.read(fsz)
        if len(buf)==fsz: fr=Image.frombuffer('RGB',(1920,1080),buf); last=fr
        else: fr=last
        W,cx,cy,Hm=cam(a+t,cfg['kf']); H=min(W*RATIO,Hm)
        canvas=fr.crop((656,0,1264,1080)).resize((135,240),Image.BILINEAR).filter(ImageFilter.GaussianBlur(5)).resize((OW,OH),Image.BILINEAR)
        canvas=Image.blend(canvas,Image.new('RGB',(OW,OH),BG),0.55).convert('RGBA')
        canvas.alpha_composite(title,(0,TITLE_Y))
        x0=min(max(0,cx-W/2),1920-W); y0=min(max(0,cy-H/2),1080-H)
        mh=int(round(H*MW/W))
        m=fr.resize((MW,mh),Image.BICUBIC,box=(x0,y0,x0+W,y0+H))
        canvas.paste(m,(0,MAIN_Y+(MH-mh)//2))
        sb=fr.resize((1080,SUBH),Image.BICUBIC,box=SUBBOX)
        canvas.paste(sb,(0,SUB_Y))
        d=ImageDraw.Draw(canvas)
        d.line([(0,MAIN_Y-2),(OW,MAIN_Y-2)],fill=GOLD,width=3); d.line([(0,SUB_Y+SUBH+1),(OW,SUB_Y+SUBH+1)],fill=GOLD,width=3)
        te=T-1.5
        if t>=te:
            al=smooth((t-te)/0.3); e=ec.copy(); e.putalpha(e.getchannel('A').point(lambda v:int(v*al)))
            lg=e; canvas.alpha_composite(lg)
        if t<0.3:
            canvas=Image.blend(Image.new('RGBA',(OW,OH),(0,0,0,255)),canvas,t/0.3)
        rgb=canvas.convert('RGB')
        if n in sheet_t: frames_for_sheet.append((t,rgb.resize((270,480))))
        enc.stdin.write(rgb.tobytes())
    enc.stdin.close(); enc.wait(); dec.stdout.close(); dec.wait()
    c=6; r=(len(frames_for_sheet)+c-1)//c
    sh=Image.new('RGB',(270*c,480*r+0),(0,0,0)); d=ImageDraw.Draw(sh)
    for i,(t,im) in enumerate(frames_for_sheet):
        sh.paste(im,((i%c)*270,(i//c)*480)); d.text(((i%c)*270+4,(i//c)*480+4),f'{t:.1f}s',fill=(0,255,255))
    sh.save(cfg['sheet'],quality=88)
    print('T',T,'N',N)
main(json.load(open(sys.argv[1])))
