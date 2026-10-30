# Esin FR · Doucement

A calm, free platform to learn French from zero (A0) to mastery (C2), made for a Turkish speaker who also speaks English.

**Live site:** https://roserub.github.io/esinfr/

## What's inside

- **Path**: 7 CEFR levels (A0 → C2), 55 concrete steps, each linking the best free resources for that moment.
- **Library**: 160+ hand-picked free resources (courses, YouTube, podcasts, TV, reading, tools, exams), filterable by level, type, skill and topic: daily life & admin, health & physiotherapy, sport & STAPS, university, DELF/DALF/TCF, explanations in Turkish.
- **Cards**: 500+ flashcards in 11 decks (French ↔ Turkish ↔ English) with French audio and spaced repetition, including Turkish words borrowed from French, physio and sport vocabulary, admin and academic French. Add your own words.
- **Guide for Turkish speakers**: pronunciation, grammar compared with Turkish, loanwords and false friends, polite email templates, a language roadmap for studies.
- **Calm by design**: "how do you feel today?" suggestions, no streak pressure.
- **Interface** in Turkish, English and French.
- **Private**: no account, no tracking. Progress is saved in the browser (localStorage), with backup export/import to move between iPhone, iPad and Mac. Works offline once added to the home screen.

## Development

No build step: plain HTML, CSS and JavaScript.

```sh
python3 -m http.server 8000   # then open http://localhost:8000
node tools/check-data.js      # sanity-check the data files
```

- `data/resources.js` — the resource directory
- `data/path.js` — levels and steps
- `data/decks.js` — flashcards
- `data/guide.js` — the guide
- `assets/i18n.js` — interface strings

Pushing to `main` deploys to GitHub Pages (`gh-pages` branch). A weekly workflow checks every external link.
