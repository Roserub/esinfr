/* Validates the DELF mock-exam data (format in tools/delf-spec.md).
   node tools/check-delf.js            → every data/delf-*.js
   node tools/check-delf.js file.js …  → only those files */
const fs = require("fs"), vm = require("vm"), path = require("path");
const root = path.join(__dirname, "..");
const files = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync(path.join(root, "data")).filter(f => /^delf-.*\.js$/.test(f)).sort().map(f => "data/" + f);
const ctx = { window: {} }; vm.createContext(ctx);
const errors = [];
for (const f of files) {
  const src = fs.readFileSync(path.isAbsolute(f) ? f : path.join(root, f), "utf8");
  if (src.includes("`")) errors.push(`${f}: template literals are not allowed`);
  try { vm.runInContext(src, ctx, { filename: f }); } catch (e) { errors.push(`${f}: ${e.message}`); }
}
const D = ctx.window.DELF || [];
const ids = new Set(), sums = {}, words = s => (s || "").trim().split(/\s+/).filter(Boolean).length;
const SPK = ["N", "F", "M", "F2", "M2", "K"];
const isStr = s => typeof s === "string" && s.trim().length > 0;
const checkQ = (it, q, i, needAudio) => {
  const w = `${it.id} q${i + 1}`;
  if (!isStr(q.q)) errors.push(`${w}: missing q`);
  if (!Array.isArray(q.o) || q.o.length < 2 || q.o.some(o => !isStr(o))) errors.push(`${w}: options`);
  else if (new Set(q.o).size !== q.o.length) errors.push(`${w}: duplicate options`);
  if (!Number.isInteger(q.a) || !q.o || q.a < 0 || q.a >= q.o.length) errors.push(`${w}: bad answer index`);
  if (!isStr(q.x)) errors.push(`${w}: missing explanation x`);
  if (needAudio && !(Array.isArray(q.audio) && q.audio.length)) errors.push(`${w}: missing per-question audio`);
  if (q.audio) checkAudio(w, q.audio);
};
const checkAudio = (w, a) => { if (!Array.isArray(a)) return errors.push(`${w}: audio must be a list`); a.forEach((l, i) => { if (!Array.isArray(l) || !SPK.includes(l[0]) || !isStr(l[1])) errors.push(`${w}: audio line ${i + 1} must be [speaker, text] with speaker in ${SPK}`); }); };
const checkMust = (it) => { if (!Array.isArray(it.must) || it.must.length < 2) return errors.push(`${it.id}: must needs 2+ points`); it.must.forEach((m, i) => { if (!isStr(m.c) || !Array.isArray(m.kw) || !m.kw.length) errors.push(`${it.id}: must ${i + 1} needs c and kw`); }); };

for (const it of D) {
  const w = it.id || JSON.stringify(it).slice(0, 60);
  if (!/^a[12]-s\d\d-(co|ce|pe|po)\d$/.test(it.id || "")) errors.push(`${w}: bad id`);
  if (ids.has(it.id)) errors.push(`${w}: duplicate id`); ids.add(it.id);
  if (!["A1", "A2"].includes(it.level)) errors.push(`${w}: level`);
  if (!(it.sujet >= 1 && it.sujet <= 10)) errors.push(`${w}: sujet`);
  if (!["co", "ce", "pe", "po"].includes(it.sec)) errors.push(`${w}: sec`);
  if (it.id && it.level && it.id !== `${it.level.toLowerCase()}-s${String(it.sujet).padStart(2, "0")}-${it.sec}${it.ex}`) errors.push(`${w}: id does not match level/sujet/sec/ex`);
  if (typeof it.pts !== "number" || it.pts <= 0) errors.push(`${w}: pts`);
  for (const k of ["title", "consigne"]) if (!isStr(it[k])) errors.push(`${w}: missing ${k}`);
  if (!it.help || !isStr(it.help.tr) || !isStr(it.help.en)) errors.push(`${w}: help.tr / help.en`);
  const key = `${it.level} sujet ${it.sujet} ${it.sec}`; sums[key] = (sums[key] || 0) + (it.pts || 0);
  if (it.sec === "co") {
    checkAudio(w, it.audio || []);
    const per = !(it.audio || []).length;
    if (!Array.isArray(it.questions) || !it.questions.length) errors.push(`${w}: questions`);
    else it.questions.forEach((q, i) => checkQ(it, q, i, per));
  } else if (it.sec === "ce") {
    if (!it.doc || !isStr(it.doc.type) || !(isStr(it.doc.body) || Array.isArray(it.doc.rows))) errors.push(`${w}: doc needs type and body or rows`);
    if (!Array.isArray(it.questions) || !it.questions.length) errors.push(`${w}: questions`);
    else it.questions.forEach((q, i) => checkQ(it, q, i, false));
  } else if (it.sec === "pe") {
    if (it.kind === "form") {
      if (!isStr(it.context) || !Array.isArray(it.fields) || it.fields.length < 5) errors.push(`${w}: form needs context and 5+ fields`);
      else it.fields.forEach((f, i) => { if (!isStr(f.l) || !["text", "number", "date", "email", "phone", "choice", "free"].includes(f.k) || (f.k === "choice" && !(Array.isArray(f.o) && f.o.length > 1))) errors.push(`${w}: field ${i + 1}`); });
    } else if (it.kind === "text") {
      if (!(it.min >= 30)) errors.push(`${w}: min`);
      checkMust(it);
      if (!isStr(it.model) || words(it.model) < it.min) errors.push(`${w}: model shorter than min (${words(it.model)} < ${it.min})`);
    } else errors.push(`${w}: pe kind must be form or text`);
  } else if (it.sec === "po") {
    if (it.kind === "entretien" || it.kind === "echange") {
      if (!Array.isArray(it.prompts) || it.prompts.length < 4 || it.prompts.some(p => !isStr(p.q) || !isStr(p.m))) errors.push(`${w}: prompts need q and m`);
      if (it.kind === "echange" && !(Array.isArray(it.cards) && it.cards.length >= 4)) errors.push(`${w}: cards`);
    } else if (it.kind === "monologue") {
      if (!isStr(it.topic) || !Array.isArray(it.hints) || !isStr(it.model)) errors.push(`${w}: monologue needs topic, hints, model`);
      checkMust(it);
    } else if (it.kind === "dialogue") {
      if (!isStr(it.scenario) || !isStr(it.you) || !isStr(it.them)) errors.push(`${w}: dialogue needs scenario, you, them`);
      if (!Array.isArray(it.model) || it.model.length < 6 || it.model.some(l => !["E", "C"].includes(l[0]) || !isStr(l[1]))) errors.push(`${w}: model lines ["E"|"C", text]`);
      if (it.items && it.items.some(x => !isStr(x.n) || !isStr(x.p))) errors.push(`${w}: items need n and p`);
      checkMust(it);
    } else errors.push(`${w}: po kind`);
  }
}
for (const [k, v] of Object.entries(sums)) if (Math.abs(v - 25) > 0.01) errors.push(`${k}: points add up to ${v}, not 25`);

const count = {}; for (const it of D) { const k = it.level + " " + it.sec; count[k] = (count[k] || 0) + 1; }
console.log(`${D.length} DELF items · ` + Object.entries(count).sort().map(([k, v]) => `${k}: ${v}`).join(" · "));
if (errors.length) { console.error(errors.slice(0, 80).join("\n") + (errors.length > 80 ? `\n… ${errors.length - 80} more` : "")); process.exit(1); }
console.log("OK");
