"""Code-made lounge jazz: rootless piano comping, walking bass, brushed ride, breathy sax. usage: jazz.py out.wav seconds"""
import sys, numpy as np, wave
from scipy.signal import butter, sosfilt, fftconvolve
SR=44100;out=sys.argv[1];D=float(sys.argv[2]);N=int(SR*D);rng=np.random.default_rng(7)
L=np.zeros(N);R=np.zeros(N);WET=np.zeros(N)
f=lambda m:440*2**((m-69)/12)
def filt(x,k,a,b=None):return sosfilt(butter(2,a if b is None else [a,b],k,fs=SR,output='sos'),x)
def put(t,s,g,pan=0,wet=.3):
    i=int(t*SR);j=min(N,i+len(s))
    if i>=N or i<0:return
    s=s[:j-i]*g;L[i:j]+=s*np.cos((pan+1)*np.pi/4);R[i:j]+=s*np.sin((pan+1)*np.pi/4);WET[i:j]+=s*wet
BPM=86;B=60/BPM;BAR=4*B;SW=2/3
CH=[[53,57,58,62],[52,57,58,62],[57,60,64,67],[54,60,63,66]]           # Gm9, C13, Fmaj9, D7b9 (rootless)
BASS=[[43,46,50,49],[48,45,43,40],[41,45,48,51],[50,54,57,44]]
def piano(m,d,v):
    n=int((d+1.5)*SR);k=np.arange(n)/SR;fr=f(m);s=np.zeros(n)
    for h,a in [(1,1),(2,.42),(3,.18),(4,.08),(5,.04)]:s+=a*np.sin(2*np.pi*fr*h*1.0006**h*k)*np.exp(-k*(1.6+h*.9))
    s*=np.minimum(1,k/.004)*np.where(k<d,1,np.exp(-(k-d)*6));return filt(s,'low',3200)*v
def bass(m,d):
    n=int((d+.3)*SR);k=np.arange(n)/SR;fr=f(m);s=(np.sin(2*np.pi*fr*k)+.45*np.sin(4*np.pi*fr*k)+.15*np.sin(6*np.pi*fr*k))*np.exp(-k*2.2)*np.minimum(1,k/.01)
    return filt(s,'low',900)
def noise(d,lo,hi,dec):
    n=int(d*SR);k=np.arange(n)/SR;return filt(rng.standard_normal(n),'band',lo,hi)*np.exp(-k*dec)*np.minimum(1,k/.002)
def ride(acc):
    n=int(.9*SR);k=np.arange(n)/SR;s=sum(np.sin(2*np.pi*fr*k+p) for fr,p in [(3150,0),(4420,1),(5370,2),(6810,.5)])*.12+filt(rng.standard_normal(n),'high',6000)*.5
    return s*np.exp(-k*5)*acc
def sax(m,d):
    n=int((d+.12)*SR);k=np.arange(n)/SR;fr=f(m);vib=1+.006*np.sin(2*np.pi*5.2*k)*np.clip((k-.18)/.3,0,1);ph=2*np.pi*fr*np.cumsum(vib)/SR;s=np.zeros(n)
    for h in range(1,18):
        hf=fr*h;a=(np.exp(-((hf-650)/260)**2)+.7*np.exp(-((hf-1250)/380)**2)+.35*np.exp(-((hf-2600)/700)**2)+.05)/h**.35;s+=a*np.sin(h*ph)
    env=np.minimum(1,k/.05)*np.where(k<d,1,np.exp(-(k-d)*25))*(1-.12*k/max(d,.1));br=filt(rng.standard_normal(n),'band',1500,4500)*.05*env
    return filt(s*env+br,'low',5200)*.16
PH={'A':[(69,0,1),(70,1,SW),(72,1+SW,1+1-SW),(74,3,1),(72,4,SW),(69,4+SW,1-SW),(70,5,2),(67,7,.9)],
    'B':[(65,0,1.4),(69,1+SW,1-SW),(72,2,1),(77,3,1.5),(75,4+SW,1-SW),(74,5,1),(72,6,1.8)],
    'C':[(74,0,SW),(72,SW,1-SW),(70,1,SW),(69,1+SW,1-SW),(67,2,1),(65,3,2.8)]}
PLAN={2:'A',6:'B',10:'C',13:'A'}
nb=int(D/BAR)+1
for b in range(nb):
    t0=b*BAR;c=b%4;last=b==nb-1 or t0+BAR>D-2.5
    ch=CH[2] if last else CH[c]
    if last:
        for m in ch:put(t0,piano(m,3.5,.07),.9,-.25)
        put(t0,bass(41,3.5),.55,0,.1);put(t0,ride(.8),.35,.45);break
    for st,du in [(0,.9),(1+SW,.5)] if b%2==0 else [(SW,.6),(2,1.2)]:
        for m in ch:put(t0+st*B+rng.uniform(0,.012),piano(m,du*B,.06),.9,-.25)
    for q,m in enumerate(BASS[c]):put(t0+q*B,bass(m,B*.95),.5,0,.08)
    for q in range(4):
        put(t0+q*B,ride(1 if q%2 else .8),.32,.45,.25)
        if q%2:put(t0+(q+SW)*B,ride(.6),.32,.45,.25);put(t0+q*B,noise(.09,6000,12000,40),.18,-.3,.05);put(t0+q*B,noise(.35,900,5000,9),.10,.1,.2)
    if b in PLAN:
        for m,st,du in PLAN[b] and PH[PLAN[b]]:put(t0+st*B,sax(m,du*B),1,.3,.45)
ir=filt(rng.standard_normal(int(1.6*SR)),'low',3500)*np.exp(-np.arange(int(1.6*SR))/SR*3.2);wet=fftconvolve(WET,ir)[:N];wet=wet/max(1e-6,np.abs(wet).max())*.18
L+=wet;R+=wet;fade=np.minimum(1,np.minimum(np.arange(N)/(.3*SR),(N-np.arange(N))/(2.2*SR)));st=np.stack([L*fade,R*fade],1);st=st/np.abs(st).max()*.8
with wave.open(out,'wb') as w:w.setnchannels(2);w.setsampwidth(2);w.setframerate(SR);w.writeframes((st*32767).astype('<i2').tobytes())
print('jazz ok',out)
