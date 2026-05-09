<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="description" content="Full-Stack Developer Portfolio — Cyberpunk Edgerunners aesthetic"/>
<meta name="keywords" content="developer, portfolio, PHP, JavaScript, MySQL, full-stack"/>
<title>DEV//PORTFOLIO — Edge Runner</title>

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Share+Tech+Mono&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
<!-- Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>

<style>
/* ══════════════════════════════════════════════════════════════
   CYBERPUNK EDGERUNNERS — PORTFOLIO
   ══════════════════════════════════════════════════════════════ */

/* ── Variables ─────────────────────────────────────────────── */
:root{
  --bg:        #07090d;
  --bg2:       #0d1117;
  --bg3:       #111820;
  --glass:     rgba(0,245,255,0.04);
  --border:    rgba(0,245,255,0.15);

  --cyan:      #00f5ff;
  --cyan-d:    #00b4c8;
  --yellow:    #f0e040;
  --yellow-d:  #b8aa28;
  --magenta:   #ff2d78;
  --mag-d:     #c42060;
  --white:     #ddeef5;
  --muted:     #4a6070;

  --gc: 0 0 6px #00f5ff, 0 0 18px rgba(0,245,255,.35);
  --gy: 0 0 6px #f0e040, 0 0 18px rgba(240,224,64,.35);
  --gm: 0 0 6px #ff2d78, 0 0 18px rgba(255,45,120,.35);

  --ff-head: 'Orbitron',    monospace;
  --ff-mono: 'Share Tech Mono', monospace;
  --ff-body: 'Rajdhani',    sans-serif;
  --nav-h:   60px;
  --ease:    cubic-bezier(.4,0,.2,1);
}

/* ── Reset ─────────────────────────────────────────────────── */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;font-size:16px}
body{
  font-family:var(--ff-body);
  background:var(--bg);
  color:var(--white);
  line-height:1.65;
  overflow-x:hidden;
  cursor:none;
}
a{text-decoration:none;color:inherit}
img{max-width:100%;display:block}
ul{list-style:none}
button{cursor:none;border:none;background:none;font:inherit}

/* ── Custom Cursor ─────────────────────────────────────────── */
#cursor-dot,#cursor-ring{
  position:fixed;border-radius:50%;pointer-events:none;
  z-index:9999;transform:translate(-50%,-50%);transition:opacity .3s;
}
#cursor-dot{
  width:6px;height:6px;background:var(--cyan);
  box-shadow:var(--gc);
}
#cursor-ring{
  width:32px;height:32px;
  border:1px solid rgba(0,245,255,.5);
  transition:transform .12s var(--ease), width .2s, height .2s;
}

/* ── Loading Screen ────────────────────────────────────────── */
#loader{
  position:fixed;inset:0;background:var(--bg);
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  z-index:10000;
}
.loader-logo{
  font-family:var(--ff-head);font-size:clamp(1.4rem,4vw,2.2rem);
  color:var(--cyan);text-shadow:var(--gc);letter-spacing:.2em;
  animation:glitch-text 1s infinite;
}
.loader-bar-wrap{
  width:280px;height:2px;background:var(--bg3);margin-top:28px;
  position:relative;overflow:hidden;
}
.loader-bar{
  height:100%;width:0;background:linear-gradient(90deg,var(--cyan),var(--magenta));
  box-shadow:var(--gc);animation:load-fill 2.2s var(--ease) forwards;
}
.loader-bar-wrap::after{
  content:'';position:absolute;inset:0;
  background:linear-gradient(90deg,transparent 60%,rgba(0,245,255,.4));
  animation:scan 1.1s linear infinite;
}
.loader-txt{
  font-family:var(--ff-mono);font-size:.72rem;color:var(--cyan-d);
  margin-top:10px;letter-spacing:.12em;
  animation:blink .8s step-end infinite;
}
@keyframes load-fill{to{width:100%}}
@keyframes scan{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}
@keyframes blink{50%{opacity:0}}

/* ── Particles Canvas ──────────────────────────────────────── */
#particles{
  position:fixed;inset:0;pointer-events:none;z-index:0;opacity:.55;
}

/* ── Scrollbar ─────────────────────────────────────────────── */
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-track{background:var(--bg2)}
::-webkit-scrollbar-thumb{background:var(--cyan-d);border-radius:2px}

/* ── Navigation ────────────────────────────────────────────── */
nav{
  position:fixed;top:0;left:0;right:0;height:var(--nav-h);
  display:flex;align-items:center;justify-content:space-between;
  padding:0 clamp(1.2rem,4vw,3rem);
  background:rgba(7,9,13,.82);
  border-bottom:1px solid var(--border);
  backdrop-filter:blur(14px);
  z-index:900;
}
.nav-logo{
  font-family:var(--ff-head);font-size:1rem;font-weight:700;
  color:var(--cyan);text-shadow:var(--gc);letter-spacing:.18em;
}
.nav-logo span{color:var(--magenta);text-shadow:var(--gm)}
.nav-links{display:flex;gap:clamp(.8rem,2vw,1.8rem);align-items:center}
.nav-links a{
  font-family:var(--ff-mono);font-size:.72rem;color:var(--muted);
  letter-spacing:.12em;text-transform:uppercase;
  transition:color .25s,text-shadow .25s;
  position:relative;
}
.nav-links a::after{
  content:'';position:absolute;bottom:-4px;left:0;width:0;height:1px;
  background:var(--cyan);box-shadow:var(--gc);
  transition:width .25s var(--ease);
}
.nav-links a:hover{color:var(--cyan);text-shadow:var(--gc)}
.nav-links a:hover::after{width:100%}
.nav-toggle{display:none;flex-direction:column;gap:4px;padding:4px}
.nav-toggle span{display:block;width:22px;height:1.5px;background:var(--cyan);transition:.3s}
.mobile-menu{
  display:none;position:fixed;top:var(--nav-h);left:0;right:0;
  background:rgba(7,9,13,.96);border-bottom:1px solid var(--border);
  padding:1.2rem 1.5rem;flex-direction:column;gap:.9rem;z-index:899;
  backdrop-filter:blur(14px);
}
.mobile-menu a{
  font-family:var(--ff-mono);font-size:.78rem;color:var(--white);
  letter-spacing:.12em;text-transform:uppercase;
  padding:.5rem 0;border-bottom:1px solid rgba(0,245,255,.08);
}

/* ── Section Base ──────────────────────────────────────────── */
section{
  position:relative;z-index:1;
  padding:clamp(4rem,8vw,6.5rem) clamp(1.2rem,5vw,3rem);
  max-width:1200px;margin:0 auto;
}
.section-label{
  font-family:var(--ff-mono);font-size:.68rem;color:var(--magenta);
  letter-spacing:.22em;text-transform:uppercase;margin-bottom:.6rem;
}
.section-title{
  font-family:var(--ff-head);font-size:clamp(1.5rem,3.5vw,2.4rem);
  font-weight:700;color:var(--white);line-height:1.15;
  margin-bottom:2.5rem;
}
.section-title span{color:var(--cyan);text-shadow:var(--gc)}
.section-divider{
  width:60px;height:2px;
  background:linear-gradient(90deg,var(--cyan),transparent);
  box-shadow:var(--gc);margin-bottom:2.5rem;
}
.reveal{opacity:0;transform:translateY(30px);transition:opacity .6s var(--ease),transform .6s var(--ease)}
.reveal.visible{opacity:1;transform:translateY(0)}

/* ── HERO ──────────────────────────────────────────────────── */
#hero{
  min-height:100vh;max-width:100%;padding:0;
  display:flex;align-items:center;justify-content:center;
  position:relative;overflow:hidden;
}
.hero-grid-bg{
  position:absolute;inset:0;
  background-image:
    linear-gradient(rgba(0,245,255,.04) 1px,transparent 1px),
    linear-gradient(90deg,rgba(0,245,255,.04) 1px,transparent 1px);
  background-size:48px 48px;
  mask-image:radial-gradient(ellipse 80% 80% at 50% 50%,black 40%,transparent 100%);
}
.hero-scan{
  position:absolute;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,var(--cyan),transparent);
  box-shadow:var(--gc);animation:hero-scan 4s linear infinite;opacity:.5;
}
@keyframes hero-scan{0%{top:-2px}100%{top:100%}}
.hero-inner{
  position:relative;z-index:2;
  display:grid;grid-template-columns:1fr 1fr;
  gap:clamp(2rem,5vw,5rem);align-items:center;
  padding:clamp(5rem,10vw,7rem) clamp(1.5rem,5vw,4rem);
  max-width:1200px;width:100%;margin:0 auto;
}
.hero-tag{
  font-family:var(--ff-mono);font-size:.72rem;color:var(--cyan);
  letter-spacing:.2em;text-transform:uppercase;margin-bottom:1rem;
  animation:fade-down .6s var(--ease) .2s both;
}
.hero-tag::before{content:'> ';color:var(--magenta)}
.hero-name{
  font-family:var(--ff-head);
  font-size:clamp(2rem,5vw,3.8rem);
  font-weight:900;line-height:1.05;
  color:var(--white);
  text-shadow:0 0 40px rgba(0,245,255,.15);
  margin-bottom:.5rem;
  animation:fade-down .6s var(--ease) .35s both;
}
.hero-name .accent{
  color:var(--cyan);text-shadow:var(--gc);
  display:block;
}
.hero-type-wrap{
  font-family:var(--ff-mono);font-size:clamp(.9rem,1.8vw,1.1rem);
  color:var(--yellow);text-shadow:var(--gy);
  min-height:1.6em;margin:.6rem 0 1.4rem;
  animation:fade-down .6s var(--ease) .5s both;
}
#typed-cursor{
  display:inline-block;width:2px;height:1em;
  background:var(--yellow);margin-left:2px;vertical-align:text-bottom;
  animation:blink .7s step-end infinite;
}
.hero-desc{
  font-size:clamp(.95rem,1.6vw,1.05rem);color:rgba(221,238,245,.65);
  max-width:440px;line-height:1.75;margin-bottom:2rem;
  animation:fade-down .6s var(--ease) .65s both;
}
.hero-cta{display:flex;gap:1rem;flex-wrap:wrap;animation:fade-down .6s var(--ease) .8s both}
.btn{
  font-family:var(--ff-mono);font-size:.75rem;letter-spacing:.12em;
  text-transform:uppercase;padding:.7rem 1.5rem;
  border-radius:2px;transition:.25s var(--ease);display:inline-flex;align-items:center;gap:.5rem;
}
.btn-primary{
  background:transparent;color:var(--cyan);
  border:1px solid var(--cyan);box-shadow:var(--gc), inset 0 0 20px rgba(0,245,255,.05);
}
.btn-primary:hover{
  background:rgba(0,245,255,.1);box-shadow:var(--gc),0 0 30px rgba(0,245,255,.2);
  transform:translateY(-2px);
}
.btn-secondary{
  background:transparent;color:var(--magenta);
  border:1px solid var(--magenta);
}
.btn-secondary:hover{
  background:rgba(255,45,120,.08);box-shadow:var(--gm);
  transform:translateY(-2px);
}
.hero-socials{
  display:flex;gap:1rem;margin-top:2rem;
  animation:fade-down .6s var(--ease) .95s both;
}
.social-icon{
  width:38px;height:38px;display:flex;align-items:center;justify-content:center;
  border:1px solid var(--border);border-radius:2px;color:var(--muted);font-size:.9rem;
  transition:.25s var(--ease);
}
.social-icon:hover{color:var(--cyan);border-color:var(--cyan);box-shadow:var(--gc);transform:translateY(-3px)}

/* Avatar */
.hero-visual{display:flex;justify-content:center;align-items:center;animation:fade-in .8s var(--ease) .4s both}
.avatar-frame{
  position:relative;width:clamp(220px,28vw,320px);height:clamp(220px,28vw,320px);
}
.avatar-hex{
  width:100%;height:100%;
  clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);
  background:linear-gradient(135deg,var(--bg3),var(--bg2));
  border:0;overflow:hidden;position:relative;
  animation:float 4s ease-in-out infinite;
}
.avatar-hex img{width:100%;height:100%;object-fit:cover;opacity:.9}
.avatar-hex-border{
  position:absolute;inset:-2px;
  clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);
  background:linear-gradient(135deg,var(--cyan),var(--magenta),var(--yellow));
  z-index:-1;animation:border-spin 4s linear infinite;
}
.avatar-ring{
  position:absolute;inset:-20px;
  clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);
  border:1px solid rgba(0,245,255,.2);
  animation:pulse-ring 2.5s ease-in-out infinite;
}
.avatar-hud{
  position:absolute;font-family:var(--ff-mono);font-size:.58rem;color:var(--cyan);
  opacity:.7;letter-spacing:.08em;
}
.avatar-hud.tl{top:-36px;left:0}
.avatar-hud.br{bottom:-36px;right:0}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes pulse-ring{0%,100%{opacity:.2;transform:scale(1)}50%{opacity:.5;transform:scale(1.04)}}
@keyframes border-spin{0%{filter:hue-rotate(0deg)}100%{filter:hue-rotate(360deg)}}
@keyframes fade-down{from{opacity:0;transform:translateY(-18px)}to{opacity:1;transform:translateY(0)}}
@keyframes fade-in{from{opacity:0}to{opacity:1}}

/* HUD corner decorations */
.hud-corner{
  position:absolute;width:18px;height:18px;
  border-color:var(--cyan);border-style:solid;
}
.hud-corner.tl{top:0;left:0;border-width:2px 0 0 2px}
.hud-corner.tr{top:0;right:0;border-width:2px 2px 0 0}
.hud-corner.bl{bottom:0;left:0;border-width:0 0 2px 2px}
.hud-corner.br{bottom:0;right:0;border-width:0 2px 2px 0}

/* ── ABOUT ─────────────────────────────────────────────────── */
#about .about-grid{
  display:grid;grid-template-columns:1fr 1fr;gap:clamp(2rem,4vw,4rem);
}
.about-bio p{
  color:rgba(221,238,245,.72);font-size:1.02rem;
  margin-bottom:1rem;line-height:1.78;
}
.about-bio p span{color:var(--cyan)}
.timeline{position:relative;padding-left:1.6rem;margin-top:2rem}
.timeline::before{
  content:'';position:absolute;left:0;top:0;bottom:0;width:1px;
  background:linear-gradient(180deg,var(--cyan),transparent);
}
.tl-item{position:relative;margin-bottom:1.6rem;padding-bottom:1.6rem;border-bottom:1px solid rgba(0,245,255,.06)}
.tl-item::before{
  content:'';position:absolute;left:-1.82rem;top:5px;
  width:8px;height:8px;border-radius:50%;
  background:var(--cyan);box-shadow:var(--gc);
}
.tl-date{font-family:var(--ff-mono);font-size:.65rem;color:var(--magenta);letter-spacing:.1em}
.tl-title{font-family:var(--ff-head);font-size:.88rem;color:var(--white);margin:.25rem 0 .2rem;font-weight:600}
.tl-place{font-size:.85rem;color:var(--muted)}

.skills-grid{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-top:1rem}
.skill-row{display:flex;flex-direction:column;gap:.3rem}
.skill-name{font-family:var(--ff-mono);font-size:.7rem;color:var(--white);letter-spacing:.08em;display:flex;justify-content:space-between}
.skill-name span{color:var(--cyan)}
.skill-bar{height:3px;background:var(--bg3);border-radius:2px;overflow:hidden}
.skill-fill{height:100%;border-radius:2px;background:linear-gradient(90deg,var(--cyan),var(--magenta));box-shadow:var(--gc);width:0;transition:width 1.2s var(--ease)}

/* ── TECH STACK ────────────────────────────────────────────── */
#tech .tech-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(110px,1fr));
  gap:1rem;
}
.tech-card{
  background:var(--glass);
  border:1px solid var(--border);
  border-radius:var(--radius);
  padding:1.4rem 1rem;
  text-align:center;
  position:relative;overflow:hidden;
  transition:.3s var(--ease);
  cursor:default;
}
.tech-card::before{
  content:'';position:absolute;inset:0;
  background:linear-gradient(135deg,rgba(0,245,255,.06),transparent);
  opacity:0;transition:.3s;
}
.tech-card:hover{
  border-color:var(--cyan);
  box-shadow:var(--gc);
  transform:translateY(-4px);
}
.tech-card:hover::before{opacity:1}
.tech-icon{font-size:2rem;margin-bottom:.65rem;display:block;transition:.3s}
.tech-card:hover .tech-icon{transform:scale(1.15)}
.tech-card:nth-child(2n) .tech-icon{filter:drop-shadow(0 0 6px var(--magenta))}
.tech-name{font-family:var(--ff-mono);font-size:.65rem;color:var(--muted);letter-spacing:.1em;text-transform:uppercase}

/* ── PROJECTS ──────────────────────────────────────────────── */
#projects .proj-grid{
  display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:1.4rem;
}
.proj-card{
  background:var(--bg-card,rgba(13,17,23,.75));
  border:1px solid var(--border);
  border-radius:var(--radius);
  overflow:hidden;position:relative;
  transition:.3s var(--ease);
}
.proj-card::after{
  content:'';position:absolute;top:0;left:0;right:0;height:2px;
  background:linear-gradient(90deg,var(--cyan),var(--magenta));
  transform:scaleX(0);transform-origin:left;transition:.4s var(--ease);
}
.proj-card:hover::after{transform:scaleX(1)}
.proj-card:hover{
  transform:translateY(-5px);
  box-shadow:0 20px 40px rgba(0,0,0,.4),0 0 0 1px var(--border);
}
.proj-header{
  padding:1.4rem 1.4rem .8rem;
  display:flex;justify-content:space-between;align-items:flex-start;
}
.proj-icon{
  font-size:1.6rem;
  width:48px;height:48px;display:flex;align-items:center;justify-content:center;
  background:rgba(0,245,255,.06);border-radius:2px;
  border:1px solid rgba(0,245,255,.12);
}
.proj-tag{
  font-family:var(--ff-mono);font-size:.6rem;padding:.25rem .6rem;
  border-radius:2px;letter-spacing:.1em;text-transform:uppercase;
}
.tag-cyan{background:rgba(0,245,255,.1);color:var(--cyan);border:1px solid rgba(0,245,255,.2)}
.tag-yellow{background:rgba(240,224,64,.1);color:var(--yellow);border:1px solid rgba(240,224,64,.2)}
.tag-mag{background:rgba(255,45,120,.1);color:var(--magenta);border:1px solid rgba(255,45,120,.2)}
.proj-body{padding:0 1.4rem 1.4rem}
.proj-title{font-family:var(--ff-head);font-size:1rem;font-weight:600;margin-bottom:.5rem;color:var(--white)}
.proj-desc{font-size:.88rem;color:rgba(221,238,245,.6);line-height:1.65;margin-bottom:1rem}
.proj-tech{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1.2rem}
.proj-tech span{
  font-family:var(--ff-mono);font-size:.6rem;color:var(--muted);
  background:var(--bg3);padding:.2rem .5rem;border-radius:2px;
}
.proj-links{display:flex;gap:.7rem}
.proj-link{
  font-family:var(--ff-mono);font-size:.65rem;letter-spacing:.1em;
  padding:.45rem .9rem;border-radius:2px;transition:.25s var(--ease);
  display:flex;align-items:center;gap:.35rem;text-transform:uppercase;
}
.proj-link.gh{border:1px solid var(--border);color:var(--muted)}
.proj-link.gh:hover{border-color:var(--cyan);color:var(--cyan);box-shadow:var(--gc)}
.proj-link.live{border:1px solid var(--magenta);color:var(--magenta)}
.proj-link.live:hover{background:rgba(255,45,120,.1);box-shadow:var(--gm)}

/* ── GITHUB STATS ──────────────────────────────────────────── */
#stats .stats-grid{
  display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1.2rem;
}
.stat-card{
  background:var(--glass);border:1px solid var(--border);
  border-radius:var(--radius);padding:1.4rem;
  position:relative;overflow:hidden;
  transition:.3s var(--ease);
}
.stat-card:hover{border-color:var(--cyan);box-shadow:var(--gc)}
.stat-label{
  font-family:var(--ff-mono);font-size:.65rem;color:var(--muted);
  letter-spacing:.12em;text-transform:uppercase;margin-bottom:.5rem;
}
.stat-val{
  font-family:var(--ff-head);font-size:2rem;font-weight:700;
  color:var(--cyan);text-shadow:var(--gc);
}
.stat-sub{font-size:.8rem;color:rgba(221,238,245,.45);margin-top:.25rem}
.stat-bar-wrap{margin-top:1rem}
.stat-bar-row{display:flex;align-items:center;gap:.6rem;margin-bottom:.5rem}
.stat-bar-label{font-family:var(--ff-mono);font-size:.62rem;color:var(--muted);width:70px}
.stat-bar-track{flex:1;height:3px;background:var(--bg3);border-radius:2px;overflow:hidden}
.stat-bar-fill{height:100%;border-radius:2px;background:linear-gradient(90deg,var(--cyan),var(--magenta));width:0;transition:width 1.4s var(--ease) .3s}
.stat-bar-pct{font-family:var(--ff-mono);font-size:.58rem;color:var(--cyan);width:30px;text-align:right}

.contrib-grid{
  margin-top:1.8rem;display:flex;flex-direction:column;gap:.3rem;
}
.contrib-row{display:flex;gap:.3rem}
.contrib-cell{
  width:12px;height:12px;border-radius:2px;
  background:var(--bg3);transition:box-shadow .2s;
}
.contrib-cell:hover{box-shadow:var(--gc)}
.contrib-cell.l1{background:rgba(0,245,255,.2)}
.contrib-cell.l2{background:rgba(0,245,255,.45)}
.contrib-cell.l3{background:rgba(0,245,255,.7)}
.contrib-cell.l4{background:var(--cyan)}

/* ── CONTACT ───────────────────────────────────────────────── */
#contact .contact-inner{
  display:grid;grid-template-columns:1fr 1fr;gap:clamp(2rem,4vw,4rem);
}
.contact-info p{color:rgba(221,238,245,.65);font-size:.97rem;line-height:1.78;margin-bottom:1.4rem}
.contact-item{
  display:flex;align-items:center;gap:.75rem;
  margin-bottom:.9rem;font-size:.9rem;color:rgba(221,238,245,.7);
}
.contact-item i{color:var(--cyan);width:18px;text-align:center}
.contact-form{display:flex;flex-direction:column;gap:.9rem}
.form-group{display:flex;flex-direction:column;gap:.4rem}
.form-group label{font-family:var(--ff-mono);font-size:.65rem;color:var(--cyan);letter-spacing:.12em;text-transform:uppercase}
.form-group input,
.form-group textarea{
  background:rgba(0,245,255,.03);
  border:1px solid var(--border);
  border-radius:2px;padding:.7rem .9rem;
  color:var(--white);font-family:var(--ff-body);font-size:.95rem;
  outline:none;resize:none;
  transition:.25s var(--ease);
}
.form-group input:focus,
.form-group textarea:focus{
  border-color:var(--cyan);box-shadow:var(--gc);
  background:rgba(0,245,255,.06);
}
.form-group textarea{min-height:120px}
.form-status{
  font-family:var(--ff-mono);font-size:.72rem;
  padding:.5rem .8rem;border-radius:2px;display:none;letter-spacing:.08em;
}
.form-status.success{
  display:block;background:rgba(0,245,255,.08);
  color:var(--cyan);border:1px solid rgba(0,245,255,.2);
}

/* ── FOOTER ────────────────────────────────────────────────── */
footer{
  position:relative;z-index:1;
  border-top:1px solid var(--border);
  padding:2rem clamp(1.2rem,5vw,3rem);
  display:flex;align-items:center;justify-content:space-between;
  flex-wrap:wrap;gap:1rem;
}
.footer-logo{font-family:var(--ff-head);font-size:.85rem;color:var(--cyan);text-shadow:var(--gc);letter-spacing:.15em}
.footer-copy{font-family:var(--ff-mono);font-size:.65rem;color:var(--muted);letter-spacing:.08em}
.footer-socials{display:flex;gap:.7rem}
.footer-socials a{
  font-size:.85rem;color:var(--muted);transition:.25s;
  width:30px;height:30px;display:flex;align-items:center;justify-content:center;
  border:1px solid rgba(74,96,112,.3);border-radius:2px;
}
.footer-socials a:hover{color:var(--cyan);border-color:var(--cyan);box-shadow:var(--gc)}

/* ── Glitch ────────────────────────────────────────────────── */
@keyframes glitch-text{
  0%,90%,100%{text-shadow:var(--gc)}
  91%{text-shadow:-2px 0 var(--magenta),2px 0 var(--yellow);filter:blur(.5px)}
  93%{text-shadow:2px 0 var(--magenta),-2px 0 var(--yellow)}
  95%{text-shadow:var(--gc)}
}
.glitch{animation:glitch-text 4s infinite}

/* ── HUD Decorations ───────────────────────────────────────── */
.hud-line{
  position:absolute;background:linear-gradient(90deg,var(--cyan),transparent);
  height:1px;opacity:.25;pointer-events:none;
}

/* ── Floating Orbs ─────────────────────────────────────────── */
.orb{
  position:fixed;border-radius:50%;filter:blur(80px);
  pointer-events:none;z-index:0;animation:orb-float 8s ease-in-out infinite;
}
.orb1{width:300px;height:300px;background:rgba(0,245,255,.06);top:10%;left:-5%;animation-delay:0s}
.orb2{width:250px;height:250px;background:rgba(255,45,120,.05);bottom:15%;right:-5%;animation-delay:3s}
.orb3{width:200px;height:200px;background:rgba(240,224,64,.04);top:55%;left:45%;animation-delay:6s}
@keyframes orb-float{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-30px) scale(1.08)}}

/* ── Responsive ────────────────────────────────────────────── */
@media(max-width:860px){
  .hero-inner{grid-template-columns:1fr;text-align:center}
  .hero-visual{order:-1}
  .hero-desc{margin:0 auto 2rem}
  .hero-cta,.hero-socials{justify-content:center}
  .hero-tag::before{display:none}
  #about .about-grid,#contact .contact-inner{grid-template-columns:1fr}
  .skills-grid{grid-template-columns:1fr}
  .nav-links{display:none}
  .nav-toggle{display:flex}
  .mobile-menu.open{display:flex}
}
@media(max-width:560px){
  .proj-grid{grid-template-columns:1fr!important}
  .tech-grid{grid-template-columns:repeat(3,1fr)!important}
  .stats-grid{grid-template-columns:1fr!important}
  .hero-name{font-size:1.8rem}
}
</style>
</head>
<body>

<!-- Custom Cursor -->
<div id="cursor-dot"></div>
<div id="cursor-ring"></div>

<!-- Floating orbs -->
<div class="orb orb1"></div>
<div class="orb orb2"></div>
<div class="orb orb3"></div>

<!-- Particle Canvas -->
<canvas id="particles"></canvas>

<!-- ── LOADER ──────────────────────────────────────── -->
<div id="loader">
  <div class="loader-logo glitch">SYS://BOOT</div>
  <div style="font-family:var(--ff-mono);font-size:.65rem;color:var(--muted);margin-top:.5rem;letter-spacing:.15em">INITIALIZING PORTFOLIO...</div>
  <div class="loader-bar-wrap" style="margin-top:1.4rem"><div class="loader-bar"></div></div>
  <div class="loader-txt">LOADING ASSETS...</div>
</div>

<!-- ── NAV ────────────────────────────────────────── -->
<nav>
  <div class="nav-logo">DEV<span>/</span>PORT</div>
  <div class="nav-links">
    <a href="#hero">Home</a>
    <a href="#about">About</a>
    <a href="#tech">Stack</a>
    <a href="#projects">Projects</a>
    <a href="#stats">Stats</a>
    <a href="#contact">Contact</a>
  </div>
  <button class="nav-toggle" id="navToggle" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="#hero"     onclick="closeMobile()">Home</a>
  <a href="#about"    onclick="closeMobile()">About</a>
  <a href="#tech"     onclick="closeMobile()">Stack</a>
  <a href="#projects" onclick="closeMobile()">Projects</a>
  <a href="#stats"    onclick="closeMobile()">Stats</a>
  <a href="#contact"  onclick="closeMobile()">Contact</a>
</div>

<!-- ══════════════════════════════════════════════════
     HERO
════════════════════════════════════════════════════ -->
<section id="hero">
  <div class="hero-grid-bg"></div>
  <div class="hero-scan"></div>
  <div class="hero-inner">
    <!-- Text -->
    <div class="hero-text">
      <div class="hero-tag">STATUS: ONLINE // AVAILABLE FOR HIRE</div>
      <h1 class="hero-name">
        Hello, I'm<br>
        <span class="accent glitch">Your Name</span>
      </h1>
      <div class="hero-type-wrap">
        <span id="typed-text"></span><span id="typed-cursor"></span>
      </div>
      <p class="hero-desc">
        Building fast, scalable web applications with clean code and modern design.
        Passionate about creating digital experiences that push boundaries.
      </p>
      <div class="hero-cta">
        <a href="#projects" class="btn btn-primary"><i class="fa fa-code"></i> View Projects</a>
        <a href="#contact"  class="btn btn-secondary"><i class="fa fa-paper-plane"></i> Hire Me</a>
      </div>
      <div class="hero-socials">
        <a href="https://github.com"   target="_blank" class="social-icon" title="GitHub"><i class="fab fa-github"></i></a>
        <a href="https://linkedin.com" target="_blank" class="social-icon" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://facebook.com" target="_blank" class="social-icon" title="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="#"                    target="_blank" class="social-icon" title="Discord"><i class="fab fa-discord"></i></a>
      </div>
    </div>
    <!-- Avatar -->
    <div class="hero-visual">
      <div class="avatar-frame">
        <div class="avatar-hex-border"></div>
        <div class="avatar-hex">
          <!-- Replace src with your photo -->
          <img src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=edgerunner&backgroundColor=0d1117"
               alt="Developer Avatar" id="avatarImg"/>
        </div>
        <div class="avatar-ring"></div>
        <div class="avatar-hud tl">[SYS::ONLINE]</div>
        <div class="avatar-hud br">LVL.99 DEV</div>
        <div class="hud-corner tl"></div>
        <div class="hud-corner tr"></div>
        <div class="hud-corner bl"></div>
        <div class="hud-corner br"></div>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════════
     ABOUT
════════════════════════════════════════════════════ -->
<section id="about" style="padding-top:calc(var(--nav-h) + 3rem)">
  <div class="reveal">
    <div class="section-label">// 01. ABOUT ME</div>
    <h2 class="section-title">Who I <span>Am</span></h2>
    <div class="section-divider"></div>
  </div>
  <div class="about-grid reveal">
    <!-- Bio + Skills -->
    <div class="about-bio">
      <p>I'm a <span>Full-Stack Developer</span> based in the Philippines, crafting web solutions from database design to pixel-perfect UIs. I thrive at the intersection of clean engineering and creative design.</p>
      <p>My toolkit spans <span>PHP, JavaScript, MySQL</span>, and modern front-end tech. Whether it's a CRUD system, a decision-support tool, or a disaster-response platform — I build things that work and look great.</p>
      <p>Always learning. Always shipping. Coffee-powered human.</p>

      <div class="skills-grid" style="margin-top:1.8rem">
        <div class="skill-row"><div class="skill-name">PHP <span>88%</span></div><div class="skill-bar"><div class="skill-fill" data-w="88"></div></div></div>
        <div class="skill-row"><div class="skill-name">JavaScript <span>82%</span></div><div class="skill-bar"><div class="skill-fill" data-w="82"></div></div></div>
        <div class="skill-row"><div class="skill-name">MySQL <span>85%</span></div><div class="skill-bar"><div class="skill-fill" data-w="85"></div></div></div>
        <div class="skill-row"><div class="skill-name">HTML/CSS <span>92%</span></div><div class="skill-bar"><div class="skill-fill" data-w="92"></div></div></div>
        <div class="skill-row"><div class="skill-name">VB.NET <span>70%</span></div><div class="skill-bar"><div class="skill-fill" data-w="70"></div></div></div>
        <div class="skill-row"><div class="skill-name">Git <span>78%</span></div><div class="skill-bar"><div class="skill-fill" data-w="78"></div></div></div>
      </div>
    </div>
    <!-- Timeline -->
    <div>
      <div style="font-family:var(--ff-mono);font-size:.65rem;color:var(--cyan);letter-spacing:.15em;text-transform:uppercase;margin-bottom:1.2rem">TIMELINE</div>
      <div class="timeline">
        <div class="tl-item">
          <div class="tl-date">2024 — PRESENT</div>
          <div class="tl-title">Bachelor of Science in Information Technology</div>
          <div class="tl-place">Your University Name</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">2023</div>
          <div class="tl-title">Freelance Web Developer</div>
          <div class="tl-place">Remote — Small Business Clients</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">2022</div>
          <div class="tl-title">Capstone Project Lead</div>
          <div class="tl-place">Disaster Response Management System</div>
        </div>
        <div class="tl-item" style="border:none;margin:0;padding:0">
          <div class="tl-date">2021</div>
          <div class="tl-title">First Line of Code</div>
          <div class="tl-place">Started self-learning HTML & PHP</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════════
     TECH STACK
════════════════════════════════════════════════════ -->
<section id="tech">
  <div class="reveal">
    <div class="section-label">// 02. TECH STACK</div>
    <h2 class="section-title">Tools of the <span>Trade</span></h2>
    <div class="section-divider"></div>
  </div>
  <div class="tech-grid reveal">
    <div class="tech-card"><span class="tech-icon">🐘</span><div class="tech-name">PHP</div></div>
    <div class="tech-card"><span class="tech-icon" style="font-size:1.8rem;color:#00758F">🗄</span><div class="tech-name">MySQL</div></div>
    <div class="tech-card"><span class="tech-icon">🌐</span><div class="tech-name">HTML5</div></div>
    <div class="tech-card"><span class="tech-icon">🎨</span><div class="tech-name">CSS3</div></div>
    <div class="tech-card"><span class="tech-icon">⚡</span><div class="tech-name">JavaScript</div></div>
    <div class="tech-card"><span class="tech-icon">🔵</span><div class="tech-name">VB.NET</div></div>
    <div class="tech-card"><span class="tech-icon">🦊</span><div class="tech-name">Git</div></div>
    <div class="tech-card"><span class="tech-icon">🖥</span><div class="tech-name">XAMPP</div></div>
    <div class="tech-card"><span class="tech-icon">🔗</span><div class="tech-name">Bootstrap</div></div>
    <div class="tech-card"><span class="tech-icon">🐬</span><div class="tech-name">phpMyAdmin</div></div>
  </div>
</section>

<!-- ══════════════════════════════════════════════════
     PROJECTS
════════════════════════════════════════════════════ -->
<section id="projects">
  <div class="reveal">
    <div class="section-label">// 03. FEATURED PROJECTS</div>
    <h2 class="section-title">What I've <span>Built</span></h2>
    <div class="section-divider"></div>
  </div>
  <div class="proj-grid reveal">

    <!-- Project 1 -->
    <div class="proj-card">
      <div class="proj-header">
        <div class="proj-icon">🗂</div>
        <span class="proj-tag tag-cyan">CRUD SYSTEM</span>
      </div>
      <div class="proj-body">
        <div class="proj-title">Student Information System</div>
        <div class="proj-desc">Full-featured CRUD application for managing student records, enrollment, and grade tracking with role-based access control.</div>
        <div class="proj-tech"><span>PHP</span><span>MySQL</span><span>Bootstrap</span><span>AJAX</span></div>
        <div class="proj-links">
          <a href="#" class="proj-link gh"><i class="fab fa-github"></i> Code</a>
          <a href="#" class="proj-link live"><i class="fa fa-external-link-alt"></i> Demo</a>
        </div>
      </div>
    </div>

    <!-- Project 2 -->
    <div class="proj-card">
      <div class="proj-header">
        <div class="proj-icon">🧠</div>
        <span class="proj-tag tag-yellow">DSS</span>
      </div>
      <div class="proj-body">
        <div class="proj-title">Decision Support System</div>
        <div class="proj-desc">Multi-criteria decision analysis tool using weighted scoring algorithms to assist administrators in resource allocation decisions.</div>
        <div class="proj-tech"><span>PHP</span><span>MySQL</span><span>JavaScript</span><span>Chart.js</span></div>
        <div class="proj-links">
          <a href="#" class="proj-link gh"><i class="fab fa-github"></i> Code</a>
          <a href="#" class="proj-link live"><i class="fa fa-external-link-alt"></i> Demo</a>
        </div>
      </div>
    </div>

    <!-- Project 3 -->
    <div class="proj-card">
      <div class="proj-header">
        <div class="proj-icon">🚨</div>
        <span class="proj-tag tag-mag">CAPSTONE</span>
      </div>
      <div class="proj-body">
        <div class="proj-title">Disaster Response System</div>
        <div class="proj-desc">Real-time disaster monitoring and resource management platform with interactive maps, alert systems, and rescue team coordination.</div>
        <div class="proj-tech"><span>PHP</span><span>MySQL</span><span>Leaflet.js</span><span>WebSocket</span></div>
        <div class="proj-links">
          <a href="#" class="proj-link gh"><i class="fab fa-github"></i> Code</a>
          <a href="#" class="proj-link live"><i class="fa fa-external-link-alt"></i> Demo</a>
        </div>
      </div>
    </div>

    <!-- Project 4 -->
    <div class="proj-card">
      <div class="proj-header">
        <div class="proj-icon">🛒</div>
        <span class="proj-tag tag-cyan">E-COMMERCE</span>
      </div>
      <div class="proj-body">
        <div class="proj-title">Inventory Management CRUD</div>
        <div class="proj-desc">Complete POS and inventory system with product management, sales reporting, and low-stock alerts for small businesses.</div>
        <div class="proj-tech"><span>PHP</span><span>MySQL</span><span>CSS3</span><span>FPDF</span></div>
        <div class="proj-links">
          <a href="#" class="proj-link gh"><i class="fab fa-github"></i> Code</a>
          <a href="#" class="proj-link live"><i class="fa fa-external-link-alt"></i> Demo</a>
        </div>
      </div>
    </div>

    <!-- Project 5 -->
    <div class="proj-card">
      <div class="proj-header">
        <div class="proj-icon">📊</div>
        <span class="proj-tag tag-yellow">VB.NET</span>
      </div>
      <div class="proj-body">
        <div class="proj-title">Desktop HR Application</div>
        <div class="proj-desc">Windows desktop app for human resource management including payroll computation, attendance tracking, and PDF report generation.</div>
        <div class="proj-tech"><span>VB.NET</span><span>MySQL</span><span>Crystal Reports</span></div>
        <div class="proj-links">
          <a href="#" class="proj-link gh"><i class="fab fa-github"></i> Code</a>
          <a href="#" class="proj-link live"><i class="fa fa-download"></i> Download</a>
        </div>
      </div>
    </div>

    <!-- Project 6 -->
    <div class="proj-card">
      <div class="proj-header">
        <div class="proj-icon">🌐</div>
        <span class="proj-tag tag-mag">PORTFOLIO</span>
      </div>
      <div class="proj-body">
        <div class="proj-title">Developer Portfolio</div>
        <div class="proj-desc">This very portfolio — built with pure HTML, CSS, and JavaScript. Cyberpunk Edgerunners aesthetic with glassmorphism, particle effects, and smooth animations.</div>
        <div class="proj-tech"><span>HTML5</span><span>CSS3</span><span>JavaScript</span></div>
        <div class="proj-links">
          <a href="#" class="proj-link gh"><i class="fab fa-github"></i> Code</a>
          <a href="#" class="proj-link live"><i class="fa fa-external-link-alt"></i> Live</a>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ══════════════════════════════════════════════════
     GITHUB STATS
════════════════════════════════════════════════════ -->
<section id="stats">
  <div class="reveal">
    <div class="section-label">// 04. GITHUB STATISTICS</div>
    <h2 class="section-title">By the <span>Numbers</span></h2>
    <div class="section-divider"></div>
  </div>

  <!-- Stat cards -->
  <div class="stats-grid reveal">
    <div class="stat-card">
      <div class="stat-label">Total Commits (2024)</div>
      <div class="stat-val" data-count="847">0</div>
      <div class="stat-sub">+18% from last year</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Repositories</div>
      <div class="stat-val" data-count="34">0</div>
      <div class="stat-sub">12 public · 22 private</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Pull Requests</div>
      <div class="stat-val" data-count="126">0</div>
      <div class="stat-sub">96% merged</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Current Streak</div>
      <div class="stat-val" data-count="21">0</div>
      <div class="stat-sub">days in a row 🔥</div>
    </div>
  </div>

  <!-- Top Languages -->
  <div class="stat-card reveal" style="margin-top:1.4rem">
    <div class="stat-label" style="margin-bottom:1rem">Top Languages</div>
    <div class="stat-bar-wrap">
      <div class="stat-bar-row"><span class="stat-bar-label">PHP</span><div class="stat-bar-track"><div class="stat-bar-fill" data-w="72"></div></div><span class="stat-bar-pct">72%</span></div>
      <div class="stat-bar-row"><span class="stat-bar-label">JavaScript</span><div class="stat-bar-track"><div class="stat-bar-fill" data-w="58"></div></div><span class="stat-bar-pct">58%</span></div>
      <div class="stat-bar-row"><span class="stat-bar-label">HTML/CSS</span><div class="stat-bar-track"><div class="stat-bar-fill" data-w="85"></div></div><span class="stat-bar-pct">85%</span></div>
      <div class="stat-bar-row"><span class="stat-bar-label">SQL</span><div class="stat-bar-track"><div class="stat-bar-fill" data-w="64"></div></div><span class="stat-bar-pct">64%</span></div>
      <div class="stat-bar-row"><span class="stat-bar-label">VB.NET</span><div class="stat-bar-track"><div class="stat-bar-fill" data-w="40"></div></div><span class="stat-bar-pct">40%</span></div>
    </div>
  </div>

  <!-- Contribution grid (decorative) -->
  <div class="stat-card reveal" style="margin-top:1.4rem;overflow-x:auto">
    <div class="stat-label" style="margin-bottom:1rem">Contribution Activity</div>
    <div class="contrib-grid" id="contribGrid"></div>
  </div>
</section>

<!-- ══════════════════════════════════════════════════
     CONTACT
════════════════════════════════════════════════════ -->
<section id="contact">
  <div class="reveal">
    <div class="section-label">// 05. CONTACT</div>
    <h2 class="section-title">Let's <span>Connect</span></h2>
    <div class="section-divider"></div>
  </div>
  <div class="contact-inner reveal">
    <!-- Info -->
    <div class="contact-info">
      <p>Have a project in mind? Looking for a developer who ships? Let's talk. I'm open to freelance work, collaborations, and full-time opportunities.</p>
      <div class="contact-item"><i class="fa fa-envelope"></i> yourname@email.com</div>
      <div class="contact-item"><i class="fa fa-map-marker-alt"></i> Dagupan City, Philippines</div>
      <div class="contact-item"><i class="fab fa-discord"></i> YourDiscord#0000</div>
      <div style="margin-top:1.6rem">
        <a href="#" download class="btn btn-primary" style="display:inline-flex">
          <i class="fa fa-download"></i> Download Resume
        </a>
      </div>
    </div>
    <!-- Form -->
    <form class="contact-form" id="contactForm">
      <div class="form-group">
        <label for="cname">Name</label>
        <input type="text" id="cname" placeholder="Your Name" required/>
      </div>
      <div class="form-group">
        <label for="cemail">Email</label>
        <input type="email" id="cemail" placeholder="your@email.com" required/>
      </div>
      <div class="form-group">
        <label for="csubject">Subject</label>
        <input type="text" id="csubject" placeholder="Project Inquiry"/>
      </div>
      <div class="form-group">
        <label for="cmsg">Message</label>
        <textarea id="cmsg" placeholder="Tell me about your project..." required></textarea>
      </div>
      <div class="form-status" id="formStatus">MESSAGE SENT — I'll get back to you soon.</div>
      <button type="submit" class="btn btn-primary" style="align-self:flex-start">
        <i class="fa fa-paper-plane"></i> Send Message
      </button>
    </form>
  </div>
</section>

<!-- ── FOOTER ─────────────────────────────────────── -->
<footer>
  <div class="footer-logo">DEV<span style="color:var(--magenta)">/</span>PORT</div>
  <div class="footer-copy">© 2025 Your Name — Built with ❤️ &amp; caffeine</div>
  <div class="footer-socials">
    <a href="https://github.com"   target="_blank"><i class="fab fa-github"></i></a>
    <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a>
    <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
    <a href="#"                    target="_blank"><i class="fab fa-discord"></i></a>
  </div>
</footer>

<!-- ══════════════════════════════════════════════════
     JAVASCRIPT
════════════════════════════════════════════════════ -->
<script>
/* ── Loader ───────────────────────────────────────── */
window.addEventListener('load',()=>{
  setTimeout(()=>{
    const l=document.getElementById('loader');
    l.style.transition='opacity .6s';
    l.style.opacity='0';
    setTimeout(()=>l.remove(),650);
  },2400);
});

/* ── Custom Cursor ────────────────────────────────── */
const dot  = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px'});
(function animRing(){
  rx+=(mx-rx)*.12; ry+=(my-ry)*.12;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  requestAnimationFrame(animRing);
})();
document.querySelectorAll('a,button,.tech-card,.proj-card,.stat-card,.social-icon').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ring.style.width='48px';ring.style.height='48px';ring.style.borderColor='rgba(0,245,255,.8)'});
  el.addEventListener('mouseleave',()=>{ring.style.width='32px';ring.style.height='32px';ring.style.borderColor='rgba(0,245,255,.5)'});
});

/* ── Nav toggle ───────────────────────────────────── */
const toggle=document.getElementById('navToggle');
const mMenu=document.getElementById('mobileMenu');
toggle.addEventListener('click',()=>mMenu.classList.toggle('open'));
function closeMobile(){mMenu.classList.remove('open')}

/* ── Particles ────────────────────────────────────── */
(function(){
  const c=document.getElementById('particles');
  const ctx=c.getContext('2d');
  let W,H,pts=[];
  const N=70;
  function resize(){W=c.width=innerWidth;H=c.height=innerHeight}
  resize();window.addEventListener('resize',resize);
  const palette=['rgba(0,245,255,','rgba(255,45,120,','rgba(240,224,64,'];
  for(let i=0;i<N;i++) pts.push({
    x:Math.random()*W,y:Math.random()*H,
    vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,
    r:Math.random()*1.5+.5,
    col:palette[Math.floor(Math.random()*palette.length)]
  });
  function draw(){
    ctx.clearRect(0,0,W,H);
    pts.forEach((p,i)=>{
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0)p.x=W;if(p.x>W)p.x=0;
      if(p.y<0)p.y=H;if(p.y>H)p.y=0;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=p.col+'0.6)';ctx.fill();
      for(let j=i+1;j<pts.length;j++){
        const q=pts[j],dx=p.x-q.x,dy=p.y-q.y,d=Math.sqrt(dx*dx+dy*dy);
        if(d<100){
          ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);
          ctx.strokeStyle=p.col+(1-d/100)*.12+')';ctx.lineWidth=.5;ctx.stroke();
        }
      }
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── Typing Effect ────────────────────────────────── */
(function(){
  const phrases=['Full-Stack Developer','PHP Enthusiast','MySQL Architect','UI/UX Craftsman','Problem Solver'];
  let pi=0,ci=0,del=false;
  const el=document.getElementById('typed-text');
  function tick(){
    const phrase=phrases[pi];
    el.textContent=del?phrase.substring(0,ci--):phrase.substring(0,ci++);
    if(!del&&ci>phrase.length){setTimeout(()=>{del=true},1400);return setTimeout(tick,80)}
    if(del&&ci<0){del=false;pi=(pi+1)%phrases.length;return setTimeout(tick,400)}
    setTimeout(tick,del?50:90);
  }
  tick();
})();

/* ── Scroll Reveal ────────────────────────────────── */
const revObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      /* Skill bars */
      e.target.querySelectorAll('.skill-fill,.stat-bar-fill').forEach(b=>{
        b.style.width=b.dataset.w+'%';
      });
      /* Count-up */
      e.target.querySelectorAll('.stat-val[data-count]').forEach(el=>{
        const target=+el.dataset.count,dur=1600;
        let start=null;
        function step(ts){
          if(!start)start=ts;
          const prog=Math.min((ts-start)/dur,1);
          el.textContent=Math.floor(prog*target);
          if(prog<1)requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }
  });
},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(el=>revObs.observe(el));

/* ── Contribution Grid ────────────────────────────── */
(function(){
  const g=document.getElementById('contribGrid');
  const levels=['','l1','l2','l3','l4'];
  for(let r=0;r<7;r++){
    const row=document.createElement('div');row.className='contrib-row';
    for(let c=0;c<52;c++){
      const cell=document.createElement('div');
      const lv=Math.random()<.35?0:Math.floor(Math.random()*4)+1;
      cell.className='contrib-cell '+(levels[lv]||'');
      row.appendChild(cell);
    }
    g.appendChild(row);
  }
})();

/* ── Contact Form ─────────────────────────────────── */
document.getElementById('contactForm').addEventListener('submit',function(e){
  e.preventDefault();
  const btn=this.querySelector('button[type=submit]');
  btn.textContent='SENDING...';btn.disabled=true;
  setTimeout(()=>{
    document.getElementById('formStatus').classList.add('success');
    btn.textContent='SENT ✓';
    this.reset();
  },1400);
});

/* ── Active Nav Link on Scroll ────────────────────── */
const sections=document.querySelectorAll('section[id]');
const navAs=document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>{
  let cur='';
  sections.forEach(s=>{if(window.scrollY>=s.offsetTop-120)cur=s.id});
  navAs.forEach(a=>{
    a.style.color=a.getAttribute('href')==='#'+cur?'var(--cyan)':'';
    a.style.textShadow=a.getAttribute('href')==='#'+cur?'var(--gc)':'';
  });
},{ passive:true });
</script>
</body>
</html>
