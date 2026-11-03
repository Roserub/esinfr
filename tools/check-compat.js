/* Older iPhones/iPads (iOS 15–16) refuse a whole script when it uses syntax they don't know, and the site goes blank.
   This scans the site's scripts for the usual suspects.  Run: node tools/check-compat.js */
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const files = ["assets", "data"].flatMap(d => fs.readdirSync(path.join(root, d)).filter(f => f.endsWith(".js")).map(f => d + "/" + f)).concat(["sw.js"]);
const RULES = [
  [/\(\?<[!=]/, "regex lookbehind (iOS 16.4+)"],
  [/\.at\(-?\d/, "Array.prototype.at (iOS 15.4+)"],
  [/\.findLast(Index)?\(/, "findLast (iOS 15.4+)"],
  [/Object\.hasOwn\(/, "Object.hasOwn (iOS 15.4+)"],
  [/structuredClone\(/, "structuredClone (iOS 15.4+)"],
  [/\.to(Sorted|Reversed|Spliced)\(/, "change-array-by-copy (iOS 16+)"],
  [/\b(Object|Map)\.groupBy\(/, "groupBy (iOS 17.4+)"],
  [/static\s*\{/, "class static block (iOS 16.4+)"],
];
const errors = [];
for (const f of files) {
  fs.readFileSync(path.join(root, f), "utf8").split("\n").forEach((line, i) => {
    for (const [re, what] of RULES) if (re.test(line)) errors.push(`${f}:${i + 1}: ${what}`);
  });
}
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`${files.length} scripts, no syntax too new for iOS 15\nOK`);
