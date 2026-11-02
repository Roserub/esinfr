/* Sanity checks for the data files. Run: node tools/check-data.js */
const fs = require("fs"), vm = require("vm"), path = require("path");
const ctx = { window: {} }; vm.createContext(ctx);
for (const f of ["data/resources.js", "data/resources-fr.js", "data/path.js", "data/decks.js", "data/guide.js", "data/guide-master.js", "data/guide-fr.js", "data/decks-master.js", "data/path-master.js", "data/practice.js", "data/decks-more.js", "data/decks-delf.js", "data/decks-delf-phrases.js", "data/guide-delf.js", "data/readings.js", "data/dialogues.js", "data/readings-a1a2-1.js", "data/readings-a1a2-2.js", "data/dialogues-a1a2-1.js", "data/dialogues-a1a2-2.js", "data/readings-tr-1.js", "data/readings-tr-2.js", "data/readings-tr-3.js", "data/basics.js", "assets/i18n.js", "assets/i18n-exam.js", "assets/i18n-games.js", "assets/i18n-basics.js"])
  if (fs.existsSync(path.join(__dirname, "..", f))) vm.runInContext(fs.readFileSync(path.join(__dirname, "..", f), "utf8"), ctx, { filename: f });
const { RESOURCES, PATH, DECKS, GUIDE, I18N } = ctx.window;
const errors = [];
const ids = new Set();
for (const r of RESOURCES) {
  if (ids.has(r.id)) errors.push("duplicate resource id " + r.id);
  ids.add(r.id);
  if (!/^https?:\/\//.test(r.url)) errors.push("bad url " + r.id);
  if (!r.levels.length) errors.push("bad levels " + r.id);
  if (!r.d.en || !r.d.tr) errors.push("missing description " + r.id);
  if (!["free", "freemium", "paid", "lib"].includes(r.cost)) errors.push("bad cost " + r.id);
  if (!I18N.en["type." + r.type]) errors.push("unknown type " + r.type + " on " + r.id);
  for (const t of r.tracks) if (!I18N.en["track." + t]) errors.push("unknown track " + t + " on " + r.id);
}
for (const r of RESOURCES) {
  if (!r.d.fr) errors.push(`resource ${r.id}: missing French description`);
  if (r.note && !r.note.fr) errors.push(`resource ${r.id}: missing French note`);
}
for (const g of GUIDE) {
  for (const id of g.res || []) if (!ids.has(id)) errors.push(`guide ${g.id}: unknown resource ${id}`);
  for (const k of ["en", "tr", "fr"]) if (!g[k]) errors.push(`guide ${g.id}: missing body ${k}`);
  for (const k of ["en", "tr", "fr"]) if (g[k]) {
    const tags = s => (g[k].match(new RegExp("<" + s + "[ >]", "g")) || []).length;
    for (const tag of ["p", "ul", "ol", "li", "table", "tr", "h3"]) if (tags(tag) !== (g[k].match(new RegExp("</" + tag + ">", "g")) || []).length) errors.push(`guide ${g.id} (${k}): unbalanced <${tag}>`);
  }
  for (const k of ["en", "tr", "fr"]) if (!g.t[k]) errors.push(`guide ${g.id}: missing title ${k}`);
}
for (const [i, m] of (ctx.window.MISTAKES || []).entries()) if (!m[4]) errors.push(`mistake ${i}: missing French explanation`);
for (const lv of ["A1", "A2", "B1", "B2", "C1"]) if (!(ctx.window.GRAMMAR_ORDER_FR || {})[lv]) errors.push(`GRAMMAR_ORDER_FR missing ${lv}`);
const PRACTICE = ["sounds", "numbers", "dictation", "listen", "conj", "gender", "mistakes", "speak"];
const deckIds = new Set(DECKS.map(d => d.id)), guideIds = new Set(GUIDE.map(g => g.id)), stepIds = new Set();
for (const lv of PATH) for (const s of lv.steps) {
  if (stepIds.has(s.id)) errors.push("duplicate step " + s.id);
  stepIds.add(s.id);
  for (const id of s.res) if (!ids.has(id)) errors.push(`step ${s.id}: unknown resource ${id}`);
  if (s.deck && !deckIds.has(s.deck)) errors.push(`step ${s.id}: unknown deck ${s.deck}`);
  if (s.guide && !guideIds.has(s.guide)) errors.push(`step ${s.id}: unknown guide ${s.guide}`);
  for (const k of ["en", "tr", "fr"]) if (!s.t[k]) errors.push(`step ${s.id}: missing title ${k}`);
  if (s.practice && !PRACTICE.includes(s.practice)) errors.push(`step ${s.id}: unknown practice ${s.practice}`);
}
for (const d of DECKS) {
  const seen = new Set();
  for (const c of d.cards) {
    if (seen.has(c.id)) errors.push("duplicate card " + c.id);
    seen.add(c.id);
    if (!c.fr || !c.tr || !c.en) errors.push("incomplete card " + c.id);
  }
}
for (const k of Object.keys(I18N.en)) for (const l of ["tr", "fr"]) if (!(k in I18N[l])) errors.push(`i18n ${l} missing ${k}`);
const { READINGS, DIALOGUES } = ctx.window, textIds = new Set();
for (const r of READINGS) {
  if (textIds.has(r.id)) errors.push("duplicate reading " + r.id); textIds.add(r.id);
  if (!["A1", "A2", "B1", "B2", "C1", "C2"].includes(r.level)) errors.push("reading level " + r.id);
  for (const k of ["fr", "tr", "en"]) if (!r.t[k]) errors.push(`reading ${r.id}: missing title ${k}`);
  for (const g of r.gloss) if (g.length !== 3 || g.some(x => !x)) errors.push(`reading ${r.id}: bad glossary line ${g.join("|")}`);
  r.qs.forEach((q, i) => { if (!(q.a >= 0 && q.a < q.o.length)) errors.push(`reading ${r.id}: question ${i + 1} has no valid answer`); });
}
for (const d of DIALOGUES) {
  if (textIds.has(d.id)) errors.push("duplicate dialogue " + d.id); textIds.add(d.id);
  if (!d.roles[d.me]) errors.push(`dialogue ${d.id}: unknown role ${d.me}`);
  for (const l of d.lines) if (!d.roles[l.who] || !l.fr || !l.tr || !l.en) errors.push(`dialogue ${d.id}: bad line ${l.fr}`);
}
// Translations behind the "cheat" buttons: one per paragraph, question and option of every reading.
const RT = ctx.window.READING_TR || {};
for (const r of READINGS) {
  const x = RT[r.id], n = r.text.split(/\n\s*\n/).length;
  if (!x) { errors.push(`reading ${r.id}: no translation`); continue; }
  for (const k of ["tr", "en"]) if (!Array.isArray(x[k]) || x[k].length !== n || x[k].some(p => !p)) errors.push(`reading ${r.id}: ${k} translation needs ${n} paragraphs`);
  if (!Array.isArray(x.q) || x.q.length !== r.qs.length) errors.push(`reading ${r.id}: question translations needed`);
  else x.q.forEach((q, i) => { if (!q.tr || !q.en || !q.o || q.o.length !== r.qs[i].o.length || q.o.some(o => !o[0] || !o[1])) errors.push(`reading ${r.id}: question ${i + 1} translation incomplete`); });
}
// Basics: topics, groups and items complete in the three languages.
const BASICS = ctx.window.BASICS || [], bIds = new Set();
if (BASICS.length < 10) errors.push("basics: missing topics");
for (const b of BASICS) {
  if (bIds.has(b.id)) errors.push("duplicate basics topic " + b.id); bIds.add(b.id);
  if (!["letters", "sounds", "words"].includes(b.kind)) errors.push(`basics ${b.id}: bad kind`);
  for (const k of ["fr", "tr", "en"]) { if (!b.t[k]) errors.push(`basics ${b.id}: missing title ${k}`); if (!b.intro || !b.intro[k]) errors.push(`basics ${b.id}: missing intro ${k}`); }
  const seen = new Set();
  for (const g of b.groups) {
    for (const k of ["fr", "tr", "en"]) { if (!g.t[k]) errors.push(`basics ${b.id}: group title ${k}`); if (g.tip && !g.tip[k]) errors.push(`basics ${b.id}: tip ${k}`); }
    for (const it of g.items) { if (!it.fr || !it.tr || !it.en) errors.push(`basics ${b.id}: incomplete item ${it.fr}`); if (seen.has(it.fr)) errors.push(`basics ${b.id}: duplicate ${it.fr}`); seen.add(it.fr); }
  }
  if (seen.size < 4) errors.push(`basics ${b.id}: too few items for a quiz`);
}
const cards = DECKS.reduce((n, d) => n + d.cards.length, 0);
console.log(`${BASICS.length} basics topics, ${READINGS.length} readings, ${DIALOGUES.length} dialogues, ${RESOURCES.length} resources, ${stepIds.size} steps, ${DECKS.length} decks / ${cards} cards, ${GUIDE.length} guide sections`);
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("OK");
