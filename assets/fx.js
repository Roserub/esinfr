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
  const C5 = 523.25, E5 = 659.25, G5 = 783.99, A5 = 880, C6 = 1046.5, E6 = 1318.5, G6 = 1568;
  function sound(name, n) {
    if (muted || !wake()) return;
    try {
      switch (name) {
        case "good": { const k = ST(Math.min(n || 0, 8)); note(E5 * k, 0, 0.32, { vol: 0.2 }); note(A5 * k * 1.12, 0.085, 0.45, { vol: 0.2 }); break; }
        case "soft": note(392, 0, 0.32, { vol: 0.09, to: 330, bell: false, att: 0.03 }); break;
        case "tick": note(1180, 0, 0.07, { vol: 0.05, bell: false }); break;
        case "flip": note(660, 0, 0.09, { vol: 0.06, to: 880, bell: false }); break;
        case "match": [C6, E6, G6].forEach((f, i) => note(f, i * 0.06, 0.3, { vol: 0.13 })); break;
        case "done": [C5, E5, G5, C6].forEach((f, i) => note(f, i * 0.09, i === 3 ? 0.7 : 0.35, { vol: 0.17 })); break;
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

  /* ── What the app calls ── */
  let streak = 0;
  const FX = {
    // A right answer. sel: the element to start from / to bounce (optional).
    good(o) {
      o = o || {}; streak++;
      sound("good", streak - 1); haptic(12);
      pop(o.pop); burst(streak >= 3 ? 14 : 9, o.from);
      if (streak === 3 || streak === 5 || streak === 10 || (streak > 10 && streak % 5 === 0)) praise(streak + " de suite ! ✨", o.from);
      else if (o.praise !== false) praise(null, o.from);
    },
    // A wrong answer: quiet and kind, no animation that could feel like a punishment.
    soft() { streak = 0; sound("soft"); },
    tick() { sound("tick"); },
    flip() { sound("flip"); },
    match(o) { o = o || {}; sound("match"); haptic(15); pop(o.pop); burst(10, o.from); },
    // Something finished (an exercise, a deck, a step). great = a very good score.
    done(great) { streak = 0; if (great) { sound("big"); confetti(70); banner("🌟"); haptic([20, 40, 20]); } else { sound("done"); burst(16, null, true); haptic(20); } },
    // Big wins: a DELF paper passed, an adventure finished, a new record or badge.
    big(emoji, text) { sound("big"); confetti(90); banner(emoji || "🎉", text); haptic([20, 40, 20]); },
    // A whole level finished.
    level(text) { sound("level"); confetti(140); setTimeout(() => confetti(60), 900); banner("🏆", text); haptic([30, 50, 30, 50, 40]); },
    reset() { streak = 0; },
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
