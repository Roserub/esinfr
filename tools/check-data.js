/* Sanity checks for the data files. Run: node tools/check-data.js */
const fs = require("fs"), vm = require("vm"), path = require("path");
const ctx = { window: {} }; vm.createContext(ctx);
for (const f of ["data/resources.js", "data/path.js", "data/decks.js", "data/guide.js", "assets/i18n.js"])
  vm.runInContext(fs.readFileSync(path.join(__dirname, "..", f), "utf8"), ctx, { filename: f });
const { RESOURCES, PATH, DECKS, GUIDE, I18N } = ctx.window;
const errors = [];
const ids = new Set();
for (const r of RESOURCES) {
  if (ids.has(r.id)) errors.push("duplicate resource id " + r.id);
  ids.add(r.id);
  if (!/^https:\/\//.test(r.url)) errors.push("non-https url " + r.id);
  if (!r.levels.length) errors.push("bad levels " + r.id);
  if (!r.d.en || !r.d.tr) errors.push("missing description " + r.id);
  if (!["free", "freemium"].includes(r.cost)) errors.push("bad cost " + r.id);
  if (!I18N.en["type." + r.type]) errors.push("unknown type " + r.type + " on " + r.id);
  for (const t of r.tracks) if (!I18N.en["track." + t]) errors.push("unknown track " + t + " on " + r.id);
}
const deckIds = new Set(DECKS.map(d => d.id)), guideIds = new Set(GUIDE.map(g => g.id)), stepIds = new Set();
for (const lv of PATH) for (const s of lv.steps) {
  if (stepIds.has(s.id)) errors.push("duplicate step " + s.id);
  stepIds.add(s.id);
  for (const id of s.res) if (!ids.has(id)) errors.push(`step ${s.id}: unknown resource ${id}`);
  if (s.deck && !deckIds.has(s.deck)) errors.push(`step ${s.id}: unknown deck ${s.deck}`);
  if (s.guide && !guideIds.has(s.guide)) errors.push(`step ${s.id}: unknown guide ${s.guide}`);
  for (const k of ["en", "tr", "fr"]) if (!s.t[k]) errors.push(`step ${s.id}: missing title ${k}`);
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
const cards = DECKS.reduce((n, d) => n + d.cards.length, 0);
console.log(`${RESOURCES.length} resources, ${stepIds.size} steps, ${DECKS.length} decks / ${cards} cards, ${GUIDE.length} guide sections`);
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("OK");
