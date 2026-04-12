/* ═══════════════════════════════════════════════
   KHANAL LAB — SHARED DESIGN SYSTEM
   Environmental Biotechnology Research Group
   HKUST
═══════════════════════════════════════════════ */

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;600&display=swap');

:root {
  --ink:       #08111f;
  --navy:      #0d1f3c;
  --slate:     #1a3052;
  --teal:      #0a7075;
  --teal-mid:  #0e9da3;
  --teal-pale: rgba(10,112,117,0.12);
  --gold:      #c8903a;
  --gold-lt:   #e0a94e;
  --parchment: #f6f1e9;
  --white:     #ffffff;
  --txt:       #1d2f47;
  --muted:     #5e738c;
  --border:    rgba(10,112,117,0.14);

  --ff-serif: 'Playfair Display', Georgia, serif;
  --ff-body:  'Outfit', sans-serif;
  --ff-mono:  'IBM Plex Mono', monospace;

  --r-sm: 3px;
  --r-md: 6px;
  --shadow: 0 4px 28px rgba(8,17,31,0.10);
  --shadow-lg: 0 12px 50px rgba(8,17,31,0.16);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--ff-body);
  background: var(--parchment);
  color: var(--txt);
  line-height: 1.65;
  overflow-x: hidden;
}
img { display: block; max-width: 100%; }
a { color: inherit; }

/* ── SCROLLBAR ── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--ink); }
::-webkit-scrollbar-thumb { background: var(--teal); border-radius: 3px; }

/* ══════════════════════════════
   NAV
══════════════════════════════ */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 999;
  height: 74px;
  background: rgba(8,17,31,0.97);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(200,144,58,0.2);
  display: flex; align-items: center;
}
.nav-inner {
  max-width: 1280px; margin: 0 auto; padding: 0 24px 0 16px;
  width: 100%;
  display: flex; align-items: center; justify-content: space-between;
}
.nav-brand { display: flex; align-items: center; gap: 13px; text-decoration: none; }
.nav-monogram {
  width: 40px; height: 40px; border-radius: 50%;
  border: 1.5px solid var(--gold);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--ff-mono); font-size: 11px; font-weight: 600;
  color: var(--gold); letter-spacing: 0.04em; flex-shrink: 0;
  background: rgba(200,144,58,0.08);
}

.nav-logo {
  height: 60px; width: auto; flex-shrink: 0;
  border-radius: 4px;
  mix-blend-mode: screen;
  filter: brightness(1.15) contrast(1.05);
}

.nav-label { line-height: 1.2; }
.nav-label strong {
  display: block; font-family: var(--ff-serif);
  font-size: 16px; font-weight: 500; color: #fff; letter-spacing: 0.01em;
}
.nav-label span {
  font-size: 10px; color: var(--gold-lt); letter-spacing: 0.12em;
  text-transform: uppercase; font-weight: 300;
}
.nav-links { display: flex; list-style: none; gap: 2px; }
.nav-links a {
  display: block; padding: 8px 9px;
  font-size: 12px; font-weight: 500; letter-spacing: 0.07em; text-transform: uppercase;
  color: rgba(255,255,255,0.65); text-decoration: none;
  border-radius: var(--r-sm); transition: all 0.2s;
  position: relative;
}
.nav-links a::after {
  content: ''; position: absolute; bottom: 4px; left: 15px; right: 15px; height: 1px;
  background: var(--gold); transform: scaleX(0); transition: transform 0.25s;
}
.nav-links a:hover { color: #fff; }
.nav-links a:hover::after,
.nav-links a.active::after { transform: scaleX(1); }
.nav-links a.active { color: var(--gold-lt); }
.nav-ham {
  display: none; background: none; border: none; cursor: pointer; padding: 6px; flex-direction: column; gap: 5px;
}
.nav-ham span { display: block; width: 22px; height: 1.5px; background: #fff; transition: all 0.3s; }
.nav-ham.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.nav-ham.open span:nth-child(2) { opacity: 0; }
.nav-ham.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* ══════════════════════════════
   PAGE WRAPPER
══════════════════════════════ */
.page-wrap { padding-top: 74px; }

/* ══════════════════════════════
   PAGE HERO (inner pages)
══════════════════════════════ */
.page-hero {
  background: var(--ink);
  padding: 80px 0 72px;
  position: relative; overflow: hidden;
}
.page-hero::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse at 15% 50%, rgba(10,112,117,0.22) 0%, transparent 60%),
              radial-gradient(ellipse at 85% 20%, rgba(200,144,58,0.1) 0%, transparent 50%);
}
.page-hero-grid {
  position: absolute; inset: 0; opacity: 0.035;
  background-image:
    linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px);
  background-size: 50px 50px;
}
.page-hero-inner { position: relative; z-index: 1; max-width: 1280px; margin: 0 auto; padding: 0 40px; }
.page-eyebrow {
  font-family: var(--ff-mono); font-size: 11px; color: var(--gold);
  letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 18px;
  display: flex; align-items: center; gap: 12px;
}
.page-eyebrow::before { content: ''; display: block; width: 32px; height: 1px; background: var(--gold); }
.page-title {
  font-family: var(--ff-serif); font-size: clamp(36px, 5vw, 62px);
  font-weight: 400; color: #fff; line-height: 1.1; letter-spacing: -0.02em;
  margin-bottom: 18px;
}
.page-title em { color: var(--teal-mid); font-style: italic; }
.page-desc { font-size: 16px; color: rgba(255,255,255,0.55); max-width: 560px; line-height: 1.8; }

/* ══════════════════════════════
   SECTION COMMONS
══════════════════════════════ */
.section { padding: 96px 0; }
.section-alt { background: #fff; }
.section-dark { background: var(--ink); }
.container { max-width: 1280px; margin: 0 auto; padding: 0 40px; }
.section-hd { margin-bottom: 60px; }
.section-hd.centered { text-align: center; }
.eyebrow {
  font-family: var(--ff-mono); font-size: 10.5px;
  color: var(--teal); letter-spacing: 0.18em; text-transform: uppercase;
  margin-bottom: 14px; display: block;
}
.eyebrow-gold { color: var(--gold); }
.heading {
  font-family: var(--ff-serif);
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: 400; color: var(--ink); line-height: 1.18; letter-spacing: -0.01em;
}
.heading em { color: var(--teal); font-style: italic; }
.heading-white { color: #fff; }
.heading-white em { color: var(--teal-mid); }
.rule {
  width: 52px; height: 2px; margin-top: 18px;
  background: linear-gradient(90deg, var(--teal), var(--gold));
}
.rule.centered { margin-left: auto; margin-right: auto; }
.lead { font-size: 16px; color: var(--muted); line-height: 1.85; margin-top: 16px; max-width: 600px; }
.lead.centered { margin-left: auto; margin-right: auto; text-align: center; }

/* ══════════════════════════════
   BUTTONS
══════════════════════════════ */
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  text-decoration: none; font-size: 12.5px; font-weight: 600;
  letter-spacing: 0.09em; text-transform: uppercase;
  padding: 13px 28px; border-radius: var(--r-sm);
  transition: all 0.28s; cursor: pointer; border: none;
}
.btn-teal {
  background: linear-gradient(135deg, var(--teal), var(--teal-mid));
  color: #fff; box-shadow: 0 4px 18px rgba(10,112,117,0.32);
}
.btn-teal:hover { transform: translateY(-2px); box-shadow: 0 8px 26px rgba(10,112,117,0.42); }
.btn-gold {
  background: var(--gold); color: var(--ink);
  box-shadow: 0 4px 16px rgba(200,144,58,0.3);
}
.btn-gold:hover { background: var(--gold-lt); transform: translateY(-2px); }
.btn-outline {
  border: 1.5px solid rgba(200,144,58,0.5);
  color: var(--gold-lt); background: transparent;
}
.btn-outline:hover { background: rgba(200,144,58,0.1); border-color: var(--gold); }
.btn-ghost {
  border: 1.5px solid rgba(255,255,255,0.18);
  color: rgba(255,255,255,0.75); background: transparent;
}
.btn-ghost:hover { border-color: rgba(255,255,255,0.45); color: #fff; }

/* ══════════════════════════════
   CARDS
══════════════════════════════ */
.card {
  background: #fff; border: 1px solid var(--border);
  border-radius: var(--r-md); overflow: hidden;
  transition: all 0.3s; box-shadow: var(--shadow);
}
.card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }

/* ══════════════════════════════
   FOOTER
══════════════════════════════ */
.footer {
  background: #050d1a;
  border-top: 1px solid rgba(200,144,58,0.18);
  padding: 64px 0 28px;
}
.footer-grid {
  display: grid; grid-template-columns: 2.2fr 1fr 1fr 1fr;
  gap: 56px; margin-bottom: 52px;
}
.footer-about p { font-size: 13.5px; color: rgba(255,255,255,0.38); line-height: 1.85; margin-top: 18px; }
.footer-socials { display: flex; gap: 10px; margin-top: 22px; }
.fsoc {
  width: 36px; height: 36px; border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.12);
  display: flex; align-items: center; justify-content: center;
  color: rgba(255,255,255,0.45); text-decoration: none; font-size: 13px;
  transition: all 0.22s;
}
.fsoc:hover { border-color: var(--teal); color: var(--teal-mid); }
.footer-col h5 {
  font-family: var(--ff-mono); font-size: 10px; color: var(--gold);
  letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 20px;
}
.footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.footer-col ul a {
  font-size: 13.5px; color: rgba(255,255,255,0.4); text-decoration: none; transition: color 0.2s;
}
.footer-col ul a:hover { color: var(--teal-mid); }
.footer-bar {
  border-top: 1px solid rgba(255,255,255,0.06); padding-top: 26px;
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 12px;
}
.footer-bar p { font-size: 12px; color: rgba(255,255,255,0.25); }
.footer-bar span { color: var(--gold); }

/* ══════════════════════════════
   FADE-IN ANIMATIONS
══════════════════════════════ */
.fi { opacity: 0; transform: translateY(26px); transition: opacity 0.7s ease, transform 0.7s ease; }
.fi.show { opacity: 1; transform: translateY(0); }
.fi-d1 { transition-delay: 0.1s; }
.fi-d2 { transition-delay: 0.2s; }
.fi-d3 { transition-delay: 0.3s; }
.fi-d4 { transition-delay: 0.4s; }
.fi-d5 { transition-delay: 0.5s; }

/* ══════════════════════════════
   RESPONSIVE
══════════════════════════════ */
@media (max-width: 1024px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
}
@media (max-width: 768px) {
  .nav-inner { padding: 0 20px; }
  .container { padding: 0 20px; }
  .page-hero-inner { padding: 0 20px; }
  .section { padding: 68px 0; }
  .nav-links { display: none; position: fixed; top: 68px; left: 0; right: 0;
    background: rgba(8,17,31,0.98); flex-direction: column; padding: 16px 20px 24px; gap: 2px; }
  .nav-links.open { display: flex; }
  .nav-ham { display: flex; }
  .footer-grid { grid-template-columns: 1fr; gap: 28px; }
  .footer-bar { flex-direction: column; align-items: flex-start; }
}

/* ══════════════════════════════
   UTILITY
══════════════════════════════ */
.text-gold { color: var(--gold-lt); }
.text-teal { color: var(--teal-mid); }
.text-muted { color: var(--muted); }
.chip {
  display: inline-block; font-size: 11px; font-weight: 600;
  letter-spacing: 0.07em; text-transform: uppercase;
  padding: 4px 12px; border-radius: 100px;
  background: rgba(10,112,117,0.1); border: 1px solid rgba(10,112,117,0.22);
  color: var(--teal);
}
.chip-gold {
  background: rgba(200,144,58,0.1); border-color: rgba(200,144,58,0.25); color: var(--gold);
}
