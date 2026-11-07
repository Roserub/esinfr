# Esin FR · Doucement

A calm, free platform to learn French from zero (A0) to mastery (C2), made for a Turkish speaker who also speaks English.

**Live site:** https://roserub.github.io/esinfr/

## What's inside

- **Basics** (new in v8, extended in v10–v12): 56 topics with French audio on every item, Turkish/English meanings and Turkish-speaker tips — alphabet and spelling, sounds (vowels, nasals, tricky consonants, silent letters, liaison, minimal pairs), numbers, days/months/dates, telling the time, greetings, survival phrases, the house, family, the body, food, colours, weather, the city, feelings, 30 key verbs, articles, questions, where things are, clothes, sport and the gym, jobs, shops, linking words, negation, possessives, describing people, pronouns, near future, passé composé, health, classroom phrases, irregular verbs, reflexive verbs, comparisons, frequency, money, the phone, invitations, directions, imperative, c'est / il est, à/en/au with countries, depuis/il y a/pendant/dans, transport, cooking, workout instructions, small talk, imparfait, futur simple, y and en, il faut/devoir/pouvoir, passé composé with être, qui/que/où, tout/tous, verbs + prepositions. "Listen to all" per group, hide the meanings to test yourself, a 10-question quiz per topic, add the words to your cards.
- **DELF mock exams** (v4, doubled in v5, extended in v6 and v9): 50 full DELF A1 papers and 50 full DELF A2 papers (1300 exercises); papers 21–26 come from a corrected mock-exam pack, papers 27–50 are original themed papers (student life, handball, the sea, Paris, Lyon, the Olympics…); papers 21–50 show a Turkish explanation under every answer (marked « TR ✓ »). Every paper has the four parts of the real exam (listening with French audio, reading with realistic documents, writing with live word count and content checklist, speaking with examiner questions, role-plays and speech recognition). Zen mode (no clock, replay the audio, Turkish help) or exam mode (real timings, audio twice). Scores out of 100 with the real pass rules, stars, badges, history, one-part practice, a quick 10-question challenge and a survival mode (3 lives).
- **Adventures** (new in v5): 75 interactive stories set in real life in France (café, swimming pool, cinema, the gym front desk, physio, A&E after a fall, STAPS enrolment, lost parcel, charity run, metro, market, handball club, pharmacy, flat visit, water leak, préfecture, cancelled train, sprained ankle, student-job interview…). The characters speak with French voices; she picks what to say, wrong picks get a kind, often funny explanation in French + Turkish/English, and each story ends with 1–3 stars.
- **Games corner** (new in v5): memory pairs (French ↔ Turkish/English from the A0–A2 decks), a sentence puzzle (rebuild dialogue lines word by word) and the DELF survival and quick challenges.
- **Focus A1–A2**: the site centres on A1–A2; B1 → C2 content is kept under "Later" (a switch in More shows it again).
- **Path**: 7 CEFR levels (A0 → C2), 71 concrete steps organised in the phases of the master list (sounds & survival → A1 → … → C1), cumulative study hours per level, and a grammar checklist per level.
- **Read & talk** (v3, extended in v5): 142 graded readings written for Esin's life (A1 → C1: café, doctor, physio session, handball, préfecture, STAPS lecture, sport-science and health articles), each with French audio, a Turkish/English glossary you can add to your cards and comprehension questions; 134 real-life dialogues (bakery, pharmacy, bank, move-in inspection, a physio session from the therapist's side, job interview…) played with two voices, with a role-play mode. Every reading paragraph, question and answer option, and every dialogue line, has a "cheat" button that shows the real Turkish/English translation (or all at once). "Listen to all" highlights the sentence being read, has a slow speed and turns into a Stop button.
- **Practice**: 8 in-site exercises with French audio — hear the difference (minimal pairs), numbers, listening, dictation with word-by-word correction, conjugation (41 verbs, tenses by level), un/une with ending rules, spot the mistake (48 classic mistakes of Turkish speakers), speaking with speech recognition (live transcript of what the phone hears, word-by-word comparison with the sentence, gentle score, retry, plain explanations for microphone / Safari / iPad issues and a record-yourself fallback when the browser can't recognise speech) — plus a mistakes notebook to review.
- **Weekly plan**: generated from the level, hours per week and days per week; tick tasks off; study-time log; pace calculator with an estimated date for each level; a daily calendar reminder (.ics).
- **Library**: 357 resources (courses, apps, YouTube, podcasts, TV, books, reading, tools, exams, official help, free classes in France), with top picks, cost (free / free tier / library / paid), status notes and prices, filterable by level, type, skill, topic and cost.
- **Cards**: 3,900+ flashcards in 114 decks (including 28 DELF A1–A2 decks: exam vocabulary by theme and ready-made phrases for writing and speaking) — French ↔ Turkish ↔ English with French audio and spaced repetition: survival phrases, words you already know from Turkish, false friends, life in France, health, physio, sport, work, admin, academic French, the 80 most useful verbs, food & shopping, sports science / STAPS, everyday idioms, and 36 A1–A2 decks (arts & culture, furniture, signs, money, packing, polite requests, comparatives, stress at work, sports rules, the coach's commands, pronominal verbs, numbers in daily life, animals, kitchen, hobbies, describing people, French class, near future, imparfait, y/en, injuries & A&E, chores, environment, online shopping, gym front desk, running, the pool, daily routine, questions, opposites, where things are, passé composé, talking with a physio patient, healthy eating, phone & apps, small talk). Add your own words.
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
node tools/audio-check.js     # every audio button + spoken text check, incl. iPhone rules
```

- `data/resources.js` — the resource directory (`data/resources-fr.js`: French descriptions)
- `data/path.js`, `data/path-master.js` — levels and steps
- `data/decks.js`, `data/decks-master.js`, `data/decks-delf*.js` — flashcards
- `data/guide.js`, `data/guide-master.js` — the guide (`data/guide-fr.js`: French version)
- `data/readings*.js`, `data/dialogues*.js` — graded readings and dialogues
- `data/adv-*.js` — adventures (format: `tools/adventure-spec.md`, check: `node tools/check-adventures.js`); player and games in `assets/games.js`
- `assets/voice.js` — speech recognition panel shared by Practice → Speaking and the DELF speaking part (strings in `assets/i18n-voice.js`)
- `data/delf-*.js` — DELF mock exams (format: `tools/delf-spec.md`, check: `node tools/check-delf.js`); engine in `assets/exam.js`
- `data/basics.js` — Basics topics (UI in `assets/basics.js`, strings in `assets/i18n-basics.js`); `data/readings-tr-*.js` — translations of the readings
- `data/practice.js` — verbs, nouns and minimal pairs for the exercises
- `assets/i18n.js` — interface strings

Pushing to `main` deploys to GitHub Pages (`gh-pages` branch). A weekly workflow checks every external link.
