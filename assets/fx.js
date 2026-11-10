/* Success sounds and celebration effects (window.FX). No audio files: every sound is made on the fly with the
   Web Audio API, so nothing to download and it works offline. Sounds are soft and short; a wrong answer only
   gets a quiet, low "hmm", never a buzzer. The 🔔 button in the top bar mutes everything (saved on the device).
   Animations are skipped when the system asks for reduced motion.
   iPhone/iPad: the audio engine is woken up inside a tap (iOS refuses sound started any other way). It is never
   woken by a tap on a "listen" button, so it can't get in the way of the French voice starting. */
(function () {
  "use strict";
  const KEY = "esinfr.fx";
  const AC = window.AudioContext || window.webkitAudioContext;
  let ctx = null, master = null, muted = false;
  try { muted = localStorage.getItem(KEY) === "off"; } catch (e) { /* private mode */ }
  const calm = () => !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
  const SPEAK_SEL = "[data-speak],[data-speakall],[data-dx=play],[data-dx=flash-play],[data-gm=av-play],[data-gm=ord-play],[data-bplay],[data-bq]";

  /* ── Audio engine ── */
  function wake() {
    if (!AC || muted) return null;
    try {
      if (!ctx) {
        ctx = new AC();
        master = ctx.createGain(); master.gain.value = 0.5;
        const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 6500; // rounder, never shrill
        master.connect(lp); lp.connect(ctx.destination);
        // iOS: a one-sample silent buffer played inside the tap unlocks the context.
        const b = ctx.createBuffer(1, 1, 22050), s = ctx.createBufferSource(); s.buffer = b; s.connect(ctx.destination); s.start(0);
      }
      if (ctx.state !== "running" && ctx.resume) { const p = ctx.resume(); if (p && p.catch) p.catch(() => {}); }
    } catch (e) { ctx = null; }
    return ctx;
  }
  function onTap(e) { if (!(e.target && e.target.closest && e.target.closest(SPEAK_SEL))) wake(); }
  for (const ev of ["pointerdown", "touchend", "keydown"]) document.addEventListener(ev, onTap, { capture: true, passive: true });

  // One soft bell-like note: a sine with a quiet octave partial and a quick fade.
  function note(f, at, dur, o) {
    o = o || {};
    const c = ctx, t0 = c.currentTime + (at || 0), g = c.createGain(), vol = (o.vol || 0.22) * duck();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + (o.att || 0.012));
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    g.connect(master);
    const a = c.createOscillator(); a.type = o.type || "sine"; a.frequency.setValueAtTime(f, t0);
    if (o.to) a.frequency.exponentialRampToValueAtTime(o.to, t0 + dur * 0.8);
    a.connect(g); a.start(t0); a.stop(t0 + dur + 0.05);
    if (o.bell !== false) {
      const g2 = c.createGain(); g2.gain.value = 0.18; g2.connect(g);
      const b = c.createOscillator(); b.type = "sine"; b.frequency.setValueAtTime(f * 2.01, t0); b.connect(g2); b.start(t0); b.stop(t0 + dur + 0.05);
    }
  }
  // Quieter while the French voice is speaking, so the sound never covers a word.
  const duck = () => ("speechSynthesis" in window && speechSynthesis.speaking) ? 0.45 : 1;
  const ST = n => Math.pow(2, n / 12);
  // A soft firework "pop": a short burst of filtered noise.
  let noiseBuf = null;
  function pop2(at, f) {
    const c = ctx, t0 = c.currentTime + (at || 0);
    if (!noiseBuf) { noiseBuf = c.createBuffer(1, c.sampleRate * 0.4, c.sampleRate); const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 3); }
    const n = c.createBufferSource(), bp = c.createBiquadFilter(), g = c.createGain();
    n.buffer = noiseBuf; bp.type = "bandpass"; bp.frequency.value = f || 1800; bp.Q.value = 0.9;
    g.gain.setValueAtTime(0.16 * duck(), t0); g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.35);
    n.connect(bp); bp.connect(g); g.connect(master); n.start(t0); n.stop(t0 + 0.4);
  }
  const D5 = 587.33, C5 = 523.25, E5 = 659.25, G5 = 783.99, A5 = 880, C6 = 1046.5, E6 = 1318.5, G6 = 1568;
  function sound(name, n) {
    if (muted || !wake()) return;
    try {
      switch (name) {
        case "good": { // bright "ding-ding": a tiny click, then two notes a fourth apart, a little higher with each answer in a row
          const k = ST(Math.min(n || 0, 10));
          note(2600, 0, 0.03, { vol: 0.05, bell: false, type: "triangle" });
          note(E5 * k, 0, 0.16, { vol: 0.22, type: "triangle" }); note(A5 * k, 0.075, 0.5, { vol: 0.24, type: "triangle" });
          note(A5 * k * 2, 0.075, 0.3, { vol: 0.04, bell: false }); break; }
        case "soft": note(392, 0, 0.32, { vol: 0.09, to: 330, bell: false, att: 0.03 }); break;
        case "tick": note(1180, 0, 0.07, { vol: 0.05, bell: false }); break;
        case "flip": note(660, 0, 0.09, { vol: 0.06, to: 880, bell: false }); break;
        case "match": [C6, E6, G6].forEach((f, i) => note(f, i * 0.06, 0.3, { vol: 0.13 })); break;
        case "done": [C5, E5, G5].forEach((f, i) => note(f, i * 0.085, 0.25, { vol: 0.17, type: "triangle" }));
          [C6, E6].forEach(f => note(f, 0.27, 0.8, { vol: 0.12, type: "triangle" })); break;
        case "finale": { // end of a block: a climbing run, a warm chord, then little firework pops and sparkles
          const run = [C5, D5, E5, G5, A5, C6, D5 * 2, E6];
          run.forEach((f, i) => note(f, i * 0.055, 0.16, { vol: 0.12, type: "triangle", bell: false }));
          [C5, G5, C6, E6, G6].forEach(f => note(f, 0.5, 1.6, { vol: 0.075, type: "triangle" }));
          [[0.9, 1500], [1.15, 2400], [1.45, 1900]].forEach(([t, f]) => pop2(t, f));
          for (let i = 0; i < 8; i++) note(C6 * 2 * ST([0, 7, 4, 12, 9, 16, 12, 19][i]), 0.95 + i * 0.07, 0.25, { vol: 0.03, bell: false });
          if (n) { [E6, G6, C6 * 2].forEach((f, i) => note(f, 1.9 + i * 0.12, i === 2 ? 0.9 : 0.25, { vol: 0.09 })); } // perfect: a little "ta-da-daa"
          break; }
        case "xp": for (let i = 0; i < 5; i++) note(G6 * ST(i * 2), i * 0.045, 0.12, { vol: 0.045, bell: false }); break;
        case "big":
          [C5, E5, G5].forEach((f, i) => note(f, i * 0.1, 0.32, { vol: 0.17 }));
          [C6, E6, G6].forEach(f => note(f, 0.32, 1.1, { vol: 0.11 }));
          [G6, C6 * 2, E6 * 2, G6 * 2].forEach((f, i) => note(f, 0.5 + i * 0.07, 0.35, { vol: 0.035, bell: false }));
          break;
        case "level":
          [C5, E5, G5, C6, E6].forEach((f, i) => note(f, i * 0.09, 0.3, { vol: 0.16 }));
          [C5, G5, C6, E6, G6].forEach(f => note(f, 0.48, 1.4, { vol: 0.08 }));
          for (let i = 0; i < 6; i++) note(C6 * 2 * ST([0, 4, 7, 12, 7, 4][i]), 0.6 + i * 0.08, 0.3, { vol: 0.03, bell: false });
          break;
      }
    } catch (e) { /* no sound is fine */ }
  }

  /* ── Visual effects ── */
  let px = 0, py = 0, pAt = 0;
  document.addEventListener("pointerdown", e => { px = e.clientX; py = e.clientY; pAt = Date.now(); }, { capture: true, passive: true });
  // Where the effect starts: the button that was just tapped (found again after a redraw), else the screen centre.
  function origin(sel) {
    const el = sel && document.querySelector(sel);
    if (el) { const r = el.getBoundingClientRect(); if (r.width && r.bottom > 0 && r.top < innerHeight) return [r.left + r.width / 2, r.top + r.height / 2]; }
    if (Date.now() - pAt < 2500 && (px || py)) return [px, py];
    return [innerWidth / 2, innerHeight * 0.45];
  }
  const COLORS = ["#3f6f5a", "#e39a72", "#e2bb5c", "#3d5f92", "#c96b8b", "#7fb59b"];
  function layer(cls, ms) {
    const box = document.createElement("div"); box.className = "fx-layer " + (cls || ""); box.setAttribute("aria-hidden", "true");
    document.body.appendChild(box); setTimeout(() => box.remove(), ms); return box;
  }
  function burst(n, sel, big) {
    if (calm()) return;
    const [x, y] = origin(sel), box = layer("", 1100);
    for (let i = 0; i < n; i++) {
      const p = document.createElement("i"), a = (i / n) * Math.PI * 2 + Math.random() * 0.5, d = (big ? 70 : 42) + Math.random() * (big ? 60 : 34);
      p.className = i % 3 === 0 ? "fx-star" : "fx-dot";
      if (p.className === "fx-star") p.textContent = "✦";
      p.style.left = x + "px"; p.style.top = y + "px"; p.style.color = p.style.background = COLORS[i % COLORS.length];
      if (p.className === "fx-star") p.style.background = "none";
      p.style.setProperty("--dx", Math.cos(a) * d + "px"); p.style.setProperty("--dy", Math.sin(a) * d + "px");
      box.appendChild(p);
    }
  }
  const PRAISE = ["Bravo !", "Super !", "Très bien !", "Parfait !", "Génial !", "Excellent !", "Oui !", "Bien joué !", "Magnifique !", "Top !"];
  let lastPraise = -1;
  function praise(text, sel) {
    if (calm()) return;
    let i; do i = Math.floor(Math.random() * PRAISE.length); while (i === lastPraise && PRAISE.length > 1); lastPraise = i;
    const [x, y] = origin(sel), box = layer("", 1300), w = document.createElement("b");
    w.className = "fx-word"; w.lang = "fr"; w.textContent = text || PRAISE[i];
    w.style.left = Math.min(Math.max(x, 70), innerWidth - 70) + "px"; w.style.top = Math.max(y - 18, 40) + "px";
    box.appendChild(w);
  }
  function confetti(n) {
    if (calm()) return;
    const box = layer("confetti", 3600);
    for (let i = 0; i < (n || 80); i++) {
      const p = document.createElement("i");
      p.style.left = Math.random() * 100 + "%"; p.style.background = COLORS[i % COLORS.length];
      if (i % 4 === 0) { p.style.borderRadius = "50%"; p.style.height = "9px"; }
      p.style.animationDelay = Math.random() * 0.6 + "s"; p.style.animationDuration = 1.6 + Math.random() * 1.5 + "s";
      p.style.transform = `rotate(${Math.random() * 360}deg)`; box.appendChild(p);
    }
  }
  // Fireworks: rings of sparks bursting at a few places, a little gravity at the end.
  function fireworks(n) {
    if (calm()) return;
    const box = layer("", 3200);
    for (let k = 0; k < n; k++) {
      const x = innerWidth * (0.18 + Math.random() * 0.64), y = innerHeight * (0.16 + Math.random() * 0.34), delay = 0.9 + k * 0.28 + Math.random() * 0.1;
      const m = 16 + Math.floor(Math.random() * 6), col = COLORS[(k * 2) % COLORS.length], col2 = COLORS[(k * 2 + 3) % COLORS.length];
      for (let i = 0; i < m; i++) {
        const p = document.createElement("i"), a = (i / m) * Math.PI * 2, d = 55 + Math.random() * 45;
        p.className = "fx-spark"; p.style.left = x + "px"; p.style.top = y + "px"; p.style.background = i % 2 ? col : col2;
        p.style.setProperty("--dx", Math.cos(a) * d + "px"); p.style.setProperty("--dy", Math.sin(a) * d + "px");
        p.style.animationDelay = delay + "s"; box.appendChild(p);
      }
    }
  }
  function starRain(n) {
    if (calm()) return;
    const box = layer("", 4200), E = ["⭐", "✨", "🌟", "💫"];
    for (let i = 0; i < n; i++) {
      const p = document.createElement("i"); p.className = "fx-fall"; p.textContent = E[i % E.length];
      p.style.left = Math.random() * 96 + "%"; p.style.fontSize = 14 + Math.random() * 16 + "px";
      p.style.animationDelay = 0.3 + Math.random() * 1.6 + "s"; p.style.animationDuration = 1.8 + Math.random() * 1.4 + "s";
      box.appendChild(p);
    }
  }
  function banner(emoji, text) {
    if (calm()) return;
    const box = layer("fx-center", 1900), b = document.createElement("div");
    b.className = "fx-banner"; b.innerHTML = `<span class="fx-emo"></span><b lang="fr"></b>`;
    b.firstChild.textContent = emoji || "🎉"; b.lastChild.textContent = text || ""; if (!text) b.lastChild.remove();
    box.appendChild(b);
  }
  // Gives the freshly drawn "correct" elements a small happy bounce (after the screen is redrawn).
  function pop(sel) {
    if (calm()) return;
    const go = () => document.querySelectorAll(sel || ".opt.ok, .opt.right, .fb.ok, .ord-line.ok, .dx-q.ok, .mem.ok.fx-new").forEach(el => { el.classList.remove("fx-pop"); void el.offsetWidth; el.classList.add("fx-pop"); });
    (window.requestAnimationFrame || setTimeout)(go);
  }
  function haptic(ms) { try { if (!muted && navigator.vibrate) navigator.vibrate(ms); } catch (e) {} }

  /* ── Combo chip: "⚡ 3 d'affilée" while answers in a row are right. It just disappears after a mistake. ── */
  function chip() {
    let c = document.getElementById("fx-combo");
    if (streak < 2 || document.querySelector(".dx-combo")) { if (c) c.classList.remove("show"); return; }
    if (!c) { c = document.createElement("div"); c.id = "fx-combo"; c.setAttribute("aria-hidden", "true"); document.body.appendChild(c); }
    c.textContent = "⚡ " + streak + " d'affilée"; c.classList.toggle("hot", streak >= 5);
    c.classList.remove("show", "bump"); void c.offsetWidth; c.classList.add("show"); if (!calm()) c.classList.add("bump");
  }
  window.addEventListener("hashchange", () => { streak = 0; chip(); });
  // Enter = "Continue" on the bottom feedback sheet (like pressing the big button).
  document.addEventListener("keydown", e => {
    if (e.key !== "Enter" || e.metaKey || e.ctrlKey || (e.target.matches && e.target.matches("button, a, textarea, select, input:not([readonly])"))) return;
    const go = document.querySelector(".fb.sheet .sheet-go"); if (go) { e.preventDefault(); go.click(); }
  });

  /* ── What the app calls ── */
  let streak = 0, best = 0, finaleAt = 0;
  const FX = {
    // A right answer. sel: the element to start from / to bounce (optional).
    good(o) {
      o = o || {}; streak++; best = Math.max(best, streak); chip();
      sound("good", streak - 1); haptic(12);
      pop(o.pop); burst(streak >= 3 ? 14 : 9, o.from);
      if (streak === 3 || streak === 5 || streak === 10 || (streak > 10 && streak % 5 === 0)) praise(streak + " de suite ! ✨", o.from);
      // The bottom sheet already shows a praise word: no second one floating over it.
      else if (o.praise !== false) (window.requestAnimationFrame || setTimeout)(() => { if (!document.querySelector(".fb.sheet")) praise(null, o.from); });
    },
    // A wrong answer: quiet and kind, no animation that could feel like a punishment.
    soft() { streak = 0; chip(); sound("soft"); if (!calm()) (window.requestAnimationFrame || setTimeout)(() => document.querySelectorAll(".opt.bad, .opt.wrong").forEach(el => el.classList.add("fx-nudge"))); },
    tick() { sound("tick"); },
    flip() { sound("flip"); },
    match(o) { o = o || {}; sound("match"); haptic(15); pop(o.pop); burst(10, o.from); },
    // Something finished (an exercise, a deck, a step). great = a very good score.
    // End of a block (recap screen): the full show. r = share of right answers (0..1).
    finale(r) {
      finaleAt = Date.now(); streak = 0; chip();
      const perfect = r >= 1, great = r >= 0.8;
      sound("finale", perfect ? 1 : 0); haptic(perfect ? [30, 60, 30, 60, 60] : [25, 50, 25]);
      confetti(great ? 120 : 70); fireworks(perfect ? 5 : great ? 3 : 2); starRain(perfect ? 34 : great ? 20 : 10);
      banner(perfect ? "💯" : great ? "🌟" : "🌱", perfect ? "Parfait !" : great ? "Super travail !" : "Bien joué !");
      if (perfect) setTimeout(() => { const el = document.querySelector(".rc-title"); if (el) el.classList.add("rainbow"); }, 400);
    },
    done(great) { if (Date.now() - finaleAt < 2500 || document.querySelector(".recap")) return; streak = 0; chip(); if (great) { sound("big"); confetti(70); fireworks(2); starRain(12); banner("🌟"); haptic([20, 40, 20]); } else { sound("done"); burst(16, null, true); haptic(20); } },
    // Big wins: a DELF paper passed, an adventure finished, a new record or badge.
    big(emoji, text) {
      if (Date.now() - finaleAt < 2500) { setTimeout(() => FX.big(emoji, text), 2300); finaleAt = 0; return; } // let the finale finish first
      sound("big"); confetti(90); fireworks(3); starRain(16); banner(emoji || "🎉", text); haptic([20, 40, 20]);
    },
    // A whole level finished.
    level(text) { sound("level"); confetti(140); fireworks(6); starRain(40); setTimeout(() => confetti(60), 900); banner("🏆", text); haptic([30, 50, 30, 50, 40]); },
    reset() { streak = 0; best = 0; chip(); },
    get best() { return best; },
    // A fixed praise word for question i (stays the same when the screen is redrawn).
    word(i) { return PRAISE[Math.abs(i || 0) % PRAISE.length]; },
    // Recap screen: numbers count up from 0, with a sparkly tick for the XP.
    countUp() {
      const els = document.querySelectorAll("[data-count]:not(.counted)"); if (!els.length) return;
      els.forEach(el => {
        el.classList.add("counted"); const to = +el.dataset.count, suf = el.dataset.suf || "";
        if (calm() || !to) { el.textContent = to + suf; return; }
        const t0 = performance.now(), dur = 700 + Math.min(600, to * 4);
        let last = 0;
        const step = now => { const k = Math.min(1, (now - t0) / dur), v = Math.round(to * (1 - Math.pow(1 - k, 3))); el.textContent = v + suf;
          if (el.closest(".rc-xp") && v - last >= Math.max(1, to / 8)) { last = v; sound("tick"); }
          if (k < 1) requestAnimationFrame(step); else { const tl = el.closest(".rc-tile"); if (tl) { tl.classList.add("landed"); } } };
        requestAnimationFrame(step);
      });
      setTimeout(() => sound("xp"), 500);
    },
    confetti, burst, praise, pop,
    sound,
    get muted() { return muted; },
    toggle() {
      muted = !muted;
      try { localStorage.setItem(KEY, muted ? "off" : "on"); } catch (e) {}
      if (!muted) { wake(); setTimeout(() => sound("good"), 30); } else if (ctx && ctx.suspend) { try { ctx.suspend(); } catch (e) {} }
      paint(); return muted;
    }
  };
  function paint() {
    document.querySelectorAll("[data-fxtoggle]").forEach(b => { b.textContent = muted ? "🔕" : "🔔"; b.setAttribute("aria-pressed", String(!muted)); b.classList.toggle("off", muted); });
  }
  document.addEventListener("click", e => { const b = e.target.closest && e.target.closest("[data-fxtoggle]"); if (b) { e.preventDefault(); FX.toggle(); } });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", paint); else paint();
  window.FX = FX;
})();
