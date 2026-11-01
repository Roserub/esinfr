/* Validates the adventure stories (format in tools/adventure-spec.md).
   node tools/check-adventures.js            → every data/adv-*.js
   node tools/check-adventures.js file.js …  → only those files */
const fs = require("fs"), vm = require("vm"), path = require("path");
const root = path.join(__dirname, "..");
const files = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync(path.join(root, "data")).filter(f => /^adv-.*\.js$/.test(f)).sort().map(f => "data/" + f);
const ctx = { window: {} }; vm.createContext(ctx);
const errors = [];
for (const f of files) {
  const src = fs.readFileSync(path.isAbsolute(f) ? f : path.join(root, f), "utf8");
  if (src.includes("`")) errors.push(`${f}: template literals are not allowed`);
  try { vm.runInContext(src, ctx, { filename: f }); } catch (e) { errors.push(`${f}: ${e.message}`); }
}
const A = ctx.window.ADVENTURES || [];
const SPK = ["N", "F", "M", "F2", "M2", "K"];
const isStr = s => typeof s === "string" && s.trim().length > 0;
const tri = (w, o, name) => { if (!o || !isStr(o.fr) || !isStr(o.tr) || !isStr(o.en)) errors.push(`${w}: ${name} needs fr, tr, en`); };
const ids = new Set();
let nodesTotal = 0;
for (const a of A) {
  const w = a.id || JSON.stringify(a).slice(0, 60);
  if (!/^av-[a-z0-9-]+$/.test(a.id || "")) errors.push(`${w}: bad id`);
  if (ids.has(a.id)) errors.push(`${w}: duplicate id`); ids.add(a.id);
  if (!["A1", "A2"].includes(a.level)) errors.push(`${w}: level`);
  if (!isStr(a.emoji)) errors.push(`${w}: emoji`);
  tri(w, a.t, "t"); tri(w, a.goal, "goal");
  const N = a.nodes || {};
  if (!N[a.start]) { errors.push(`${w}: start node missing`); continue; }
  let decisions = 0, branches = 0;
  for (const [k, n] of Object.entries(N)) {
    const nw = `${w} node ${k}`; nodesTotal++;
    if (n.scene) tri(nw, n.scene, "scene");
    if (n.say) { if (!Array.isArray(n.say)) errors.push(`${nw}: say must be a list`); else n.say.forEach((l, i) => { if (!Array.isArray(l) || !SPK.includes(l[0]) || !isStr(l[1])) errors.push(`${nw}: say line ${i + 1} must be [speaker, text]`); }); }
    if (!n.scene && !(n.say && n.say.length)) errors.push(`${nw}: needs scene or say`);
    if (n.end) { if (n.end !== "win") errors.push(`${nw}: end must be "win"`); if (n.choices) errors.push(`${nw}: end node has choices`); continue; }
    decisions++;
    const c = n.choices;
    if (!Array.isArray(c) || c.length < 2 || c.length > 4) { errors.push(`${nw}: 2–4 choices`); continue; }
    if (new Set(c.map(x => x.fr)).size !== c.length) errors.push(`${nw}: duplicate choices`);
    const good = c.filter(x => x.ok === true);
    if (!good.length) errors.push(`${nw}: no ok choice`);
    if (new Set(good.map(x => x.go)).size > 1) branches++;
    c.forEach((x, i) => {
      const cw = `${nw} choice ${i + 1}`;
      tri(cw, x, "choice");
      if (typeof x.ok !== "boolean") errors.push(`${cw}: ok must be true or false`);
      if (x.ok && !x.go) errors.push(`${cw}: ok choice needs go`);
      if (!x.ok) tri(cw, x.fb, "fb");
      if (x.go && !N[x.go]) errors.push(`${cw}: go → unknown node ${x.go}`);
    });
  }
  // reachability from start (any choice), and an end reachable through ok choices from every node
  const seen = new Set([a.start]), todo = [a.start];
  while (todo.length) { const n = N[todo.pop()]; for (const x of n.choices || []) if (x.go && N[x.go] && !seen.has(x.go)) { seen.add(x.go); todo.push(x.go); } }
  for (const k of Object.keys(N)) if (!seen.has(k)) errors.push(`${w}: node ${k} is unreachable`);
  const canEnd = new Set(Object.keys(N).filter(k => N[k].end));
  for (let changed = true; changed;) { changed = false; for (const [k, n] of Object.entries(N)) if (!canEnd.has(k) && (n.choices || []).some(x => x.go && canEnd.has(x.go) && x.ok)) { canEnd.add(k); changed = true; } }
  for (const k of Object.keys(N)) if (!canEnd.has(k)) errors.push(`${w}: no way to an end from node ${k}`);
  // main path length: shortest number of decisions from start to an end
  const dist = { [a.start]: 0 }, q = [a.start]; let shortest = Infinity;
  while (q.length) { const k = q.shift(), n = N[k]; if (n.end) { shortest = Math.min(shortest, dist[k]); continue; } for (const x of n.choices || []) if (x.ok && x.go && N[x.go] && !(x.go in dist)) { dist[x.go] = dist[k] + 1; q.push(x.go); } }
  if (shortest < 6) errors.push(`${w}: story too short (${shortest} decisions to the end, need 6+)`);
  if (!branches) errors.push(`${w}: needs at least one real branch (two ok choices going to different nodes)`);
  if (!Object.values(N).some(n => n.end)) errors.push(`${w}: no end node`);
}
const count = {}; for (const a of A) count[a.level] = (count[a.level] || 0) + 1;
console.log(`${A.length} adventures (${Object.entries(count).sort().map(([k, v]) => k + ": " + v).join(", ")}), ${nodesTotal} nodes`);
if (errors.length) { console.error(errors.slice(0, 80).join("\n") + (errors.length > 80 ? `\n… ${errors.length - 80} more` : "")); process.exit(1); }
console.log("OK");
