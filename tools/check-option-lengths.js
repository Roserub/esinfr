/* Is the right answer a giveaway because it is the longest option?
   For each multiple-choice question (3+ options, not Vrai/Faux or lettered lists) it checks whether the right
   answer is clearly the longest (3+ characters longer than every other option, emoji ignored), and compares
   that count with what pure chance would give. A file fails when it is clearly above chance.
   node tools/check-option-lengths.js [file.js …]      LIST=1 also prints the flagged questions. */
const fs = require("fs"), vm = require("vm"), path = require("path");
const root = path.join(__dirname, "..");
const files = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync(path.join(root, "data")).filter(f => /^delf-.*\.js$/.test(f)).sort().map(f => "data/" + f);
const len = o => o.replace(/^\p{Extended_Pictographic}️?\s*/u, "").length;
let bad = 0, obsT = 0, expT = 0;
for (const f of files) {
  const ctx = { window: {} }; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.isAbsolute(f) ? f : path.join(root, f), "utf8"), ctx);
  let obs = 0, exp = 0; const list = [];
  for (const it of ctx.window.DELF || []) (it.questions || []).forEach((q, i) => {
    if (q.o.length < 3 || q.o.some(o => /^(vrai|faux|annonce|document|texte|message|dialogue|aucun)/i.test(o))) return;
    const L = q.o.map(len), clear = k => L.every((x, j) => j === k || L[k] - x >= 3);
    exp += L.filter((_, k) => clear(k)).length / L.length;
    if (clear(q.a)) { obs++; list.push(`${it.id} q${i + 1}`); }
  });
  obsT += obs; expT += exp;
  const ko = obs > exp * 1.25 + 2; if (ko) bad++;
  console.log(`${ko ? "✗" : "✓"} ${f}: right answer clearly longest ${obs}× (chance ≈ ${exp.toFixed(1)})${process.env.LIST && list.length ? "\n   " + list.join(", ") : ""}`);
}
console.log(`total: ${obsT} vs chance ≈ ${Math.round(expT)}`);
if (bad) { console.error(`${bad} file(s) where the longest option gives the answer away`); process.exit(1); }
