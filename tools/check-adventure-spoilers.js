/* Do the adventure options give the right answer away?
   The app shuffles the options, so position is no longer a clue. What is left is the text itself:
   1. length: the right answer is clearly the longest option (5+ characters longer than every wrong one);
   2. politeness: « s'il vous plaît / merci / excusez-moi / pardon » only on the right answers;
   3. tags such as « (yanlış) », « (wrong) », « (formal) » in the help translation of a wrong option (always a fail).
   Each is compared with what pure chance would give. A file fails when it is clearly above chance.
   node tools/check-adventure-spoilers.js [data/adv-x.js …]      LIST=1 prints the flagged steps. */
const fs = require("fs"), vm = require("vm"), path = require("path");
const root = path.join(__dirname, "..");
const files = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync(path.join(root, "data")).filter(f => /^adv-.*\.js$/.test(f)).sort().map(f => "data/" + f);
const POLITE = /s'il vous pla[iî]t|merci|excusez|pardon/i;
const len = s => s.replace(/\p{Extended_Pictographic}️?/gu, "").length;
let bad = 0; const T = { lo: 0, le: 0, po: 0, pe: 0 };
for (const f of files) {
  const ctx = { window: {} }; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.isAbsolute(f) ? f : path.join(root, f), "utf8"), ctx);
  let lo = 0, le = 0, po = 0, pe = 0, tags = 0; const list = [];
  for (const a of ctx.window.ADVENTURES || []) for (const [k, n] of Object.entries(a.nodes)) {
    const c = n.choices; if (!c) continue;
    c.forEach(x => { if (!x.ok && /\((yanl|wrong|formal|informal|fem|masc|!)/i.test(x.tr + x.en)) { tags++; list.push(`${a.id}/${k} (tag in translation)`); } });
    const oks = c.filter(x => x.ok).length; if (!oks || oks === c.length) continue;
    const L = c.map(x => len(x.fr)), clear = i => L.every((x, j) => j === i || L[i] - x >= 5);
    c.forEach((x, i) => { if (clear(i)) { le += oks / c.length; if (x.ok) { lo++; list.push(`${a.id}/${k} (long)`); } } });
    /* politeness: a step counts when exactly the right answers carry the polite words */
    const P = c.map(x => POLITE.test(x.fr));
    if (P.some(Boolean) && !P.every(Boolean)) { const pol = P.filter(Boolean).length;
      if (c.every((x, i) => P[i] === !!x.ok)) { po++; list.push(`${a.id}/${k} (polite)`); }
      /* chance that a random split with the same number of polite options matches the right answers exactly */
      const comb = (n, r) => { let v = 1; for (let i = 1; i <= r; i++) v = v * (n - r + i) / i; return v; };
      if (pol === oks) pe += 1 / comb(c.length, oks);
    }
  }
  const koL = lo > le * 1.25 + 2, koP = po > pe * 1.5 + 3, ko = koL || koP || tags > 0; if (ko) bad++;
  T.lo += lo; T.le += le; T.po += po; T.pe += pe;
  console.log(`${ko ? "✗" : "✓"} ${f}: right answer clearly longest ${lo}× (chance ≈ ${le.toFixed(1)}) · only right answers polite ${po}× (chance ≈ ${pe.toFixed(1)})${tags ? ` · ${tags} translation tag(s) like « (wrong) »` : ""}${process.env.LIST && list.length ? "\n   " + list.join(", ") : ""}`);
}
console.log(`total: longest ${T.lo} vs chance ≈ ${Math.round(T.le)} · polite ${T.po} vs chance ≈ ${Math.round(T.pe)}`);
if (bad) { console.error(`${bad} file(s) where the wording gives the right answer away`); process.exit(1); }
