# Esin FR · Doucement

A calm, free platform to learn French from zero (A0) to mastery (C2), made for a Turkish speaker who also speaks English.

**Live site:** https://roserub.github.io/esinfr/

## What's inside

- **Path**: 7 CEFR levels (A0 → C2), 71 concrete steps organised in the phases of the master list (sounds & survival → A1 → … → C1), cumulative study hours per level, and a grammar checklist per level.
- **Read & talk** (new in v3): 18 graded readings written for Esin's life (A1 → C1: café, doctor, physio session, handball, préfecture, STAPS lecture, sport-science and health articles), each with French audio, a Turkish/English glossary you can add to your cards and comprehension questions; 10 real-life dialogues (bakery, pharmacy, bank, move-in inspection, a physio session from the therapist's side, job interview…) played with two voices, with an optional translation and a role-play mode.
- **Practice**: 8 in-site exercises with French audio — hear the difference (minimal pairs), numbers, listening, dictation with word-by-word correction, conjugation (41 verbs, tenses by level), un/une with ending rules, spot the mistake (the 25 classic mistakes of Turkish speakers), speaking with speech recognition — plus a mistakes notebook to review.
- **Weekly plan**: generated from the level, hours per week and days per week; tick tasks off; study-time log; pace calculator with an estimated date for each level; a daily calendar reminder (.ics).
- **Library**: 358 resources (courses, apps, YouTube, podcasts, TV, books, reading, tools, exams, official help, free classes in France), with top picks, cost (free / free tier / library / paid), status notes and prices, filterable by level, type, skill, topic and cost.
- **Cards**: 880+ flashcards in 18 decks (French ↔ Turkish ↔ English) with French audio and spaced repetition: survival phrases, words you already know from Turkish, false friends, life in France, health, physio, sport, work, admin, academic French, the 80 most useful verbs, food & shopping, sports science / STAPS, everyday idioms. Add your own words.
- **Guide for Turkish speakers** (22 pages): start here, roadmap, routines, budget, easy vs hard, pronunciation key with sound drills, grammar map Turkish → French, loanwords, false friends, 25 classic mistakes, survival kit, listening / reading / writing / speaking, exams, official language levels, free classes, French for health / work / university, glossary, sources.
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
- `data/decks.js`, `data/decks-master.js` — flashcards
- `data/guide.js`, `data/guide-master.js` — the guide (`data/guide-fr.js`: French version)
- `data/readings.js`, `data/dialogues.js` — graded readings and dialogues
- `data/practice.js` — verbs, nouns and minimal pairs for the exercises
- `assets/i18n.js` — interface strings

Pushing to `main` deploys to GitHub Pages (`gh-pages` branch). A weekly workflow checks every external link.
