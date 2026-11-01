# Esin FR · Doucement

A calm, free platform to learn French from zero (A0) to mastery (C2), made for a Turkish speaker who also speaks English.

**Live site:** https://roserub.github.io/esinfr/

## What's inside

- **DELF mock exams** (v4, doubled in v5, extended in v6): 26 full DELF A1 papers and 26 full DELF A2 papers (676 exercises); papers 21–26 come from a corrected mock-exam pack and show a Turkish explanation under every answer (marked « TR ✓ »). Every paper has the four parts of the real exam (listening with French audio, reading with realistic documents, writing with live word count and content checklist, speaking with examiner questions, role-plays and speech recognition). Zen mode (no clock, replay the audio, Turkish help) or exam mode (real timings, audio twice). Scores out of 100 with the real pass rules, stars, badges, history, one-part practice, a quick 10-question challenge and a survival mode (3 lives).
- **Adventures** (new in v5): 20 interactive stories set in real life in France (café, metro, market, handball club, pharmacy, flat visit, water leak, préfecture, cancelled train, sprained ankle, student-job interview…). The characters speak with French voices; she picks what to say, wrong picks get a kind, often funny explanation in French + Turkish/English, and each story ends with 1–3 stars.
- **Games corner** (new in v5): memory pairs (French ↔ Turkish/English from the A0–A2 decks), a sentence puzzle (rebuild dialogue lines word by word) and the DELF survival and quick challenges.
- **Focus A1–A2**: the site centres on A1–A2; B1 → C2 content is kept under "Later" (a switch in More shows it again).
- **Path**: 7 CEFR levels (A0 → C2), 71 concrete steps organised in the phases of the master list (sounds & survival → A1 → … → C1), cumulative study hours per level, and a grammar checklist per level.
- **Read & talk** (v3, extended in v5): 42 graded readings written for Esin's life (A1 → C1: café, doctor, physio session, handball, préfecture, STAPS lecture, sport-science and health articles), each with French audio, a Turkish/English glossary you can add to your cards and comprehension questions; 30 real-life dialogues (bakery, pharmacy, bank, move-in inspection, a physio session from the therapist's side, job interview…) played with two voices, with an optional translation and a role-play mode.
- **Practice**: 8 in-site exercises with French audio — hear the difference (minimal pairs), numbers, listening, dictation with word-by-word correction, conjugation (41 verbs, tenses by level), un/une with ending rules, spot the mistake (48 classic mistakes of Turkish speakers), speaking with speech recognition — plus a mistakes notebook to review.
- **Weekly plan**: generated from the level, hours per week and days per week; tick tasks off; study-time log; pace calculator with an estimated date for each level; a daily calendar reminder (.ics).
- **Library**: 357 resources (courses, apps, YouTube, podcasts, TV, books, reading, tools, exams, official help, free classes in France), with top picks, cost (free / free tier / library / paid), status notes and prices, filterable by level, type, skill, topic and cost.
- **Cards**: 1,700+ flashcards in 46 decks (including 28 DELF A1–A2 decks: exam vocabulary by theme and ready-made phrases for writing and speaking) — French ↔ Turkish ↔ English with French audio and spaced repetition: survival phrases, words you already know from Turkish, false friends, life in France, health, physio, sport, work, admin, academic French, the 80 most useful verbs, food & shopping, sports science / STAPS, everyday idioms. Add your own words.
- **Guide for Turkish speakers** (24 pages, including a DELF mini grammar and a DELF marking grid + 8-week study plan): start here, roadmap, routines, budget, easy vs hard, pronunciation key with sound drills, grammar map Turkish → French, loanwords, false friends, 48 classic mistakes, survival kit, listening / reading / writing / speaking, exams, official language levels, free classes, French for health / work / university, glossary, sources.
- **Search** across the path, guide, cards and library.
- **Calm by design**: "how do you feel today?" suggestions, no streak pressure, capped review sessions, gentle feedback.
- **Everything in Turkish, English and French**: interface, all 22 guide pages and every resource description.
- **Private**: no account, no tracking. Progress is saved in the browser (localStorage), with backup export/import to move between iPhone, iPad and Mac. Works offline once added to the home screen.

## Development

No build step: plain HTML, CSS and JavaScript.

```sh
python3 -m http.server 8000   # then open http://localhost:8000
node tools/check-data.js      # sanity-check the data files
node tools/smoke-test.js      # end-to-end test (needs playwright + chromium)
```

- `data/resources.js` — the resource directory (`data/resources-fr.js`: French descriptions)
- `data/path.js`, `data/path-master.js` — levels and steps
- `data/decks.js`, `data/decks-master.js`, `data/decks-delf*.js` — flashcards
- `data/guide.js`, `data/guide-master.js` — the guide (`data/guide-fr.js`: French version)
- `data/readings*.js`, `data/dialogues*.js` — graded readings and dialogues
- `data/adv-*.js` — adventures (format: `tools/adventure-spec.md`, check: `node tools/check-adventures.js`); player and games in `assets/games.js`
- `data/delf-*.js` — DELF mock exams (format: `tools/delf-spec.md`, check: `node tools/check-delf.js`); engine in `assets/exam.js`
- `data/practice.js` — verbs, nouns and minimal pairs for the exercises
- `assets/i18n.js` — interface strings

Pushing to `main` deploys to GitHub Pages (`gh-pages` branch). A weekly workflow checks every external link.
