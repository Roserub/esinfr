# DELF mock exams: data format

Mock exams ("examens blancs") for DELF A1 and A2 live in `data/delf-*.js`.
Every file pushes items into one global array:

```js
/* DELF A1 — listening (compréhension de l'oral), papers 1–5 */
(window.DELF = window.DELF || []).push(
  { id: "a1-s01-co1", level: "A1", sujet: 1, sec: "co", ex: 1, pts: 6,
    title: "Message sur le répondeur",
    consigne: "Vous écoutez un message sur votre répondeur. Lisez les questions, écoutez le document puis répondez.",
    help: { tr: "Telesekreterinizdeki bir mesajı dinliyorsunuz. Soruları okuyun, kaydı dinleyin ve cevaplayın.", en: "You hear a message on your answering machine. Read the questions, listen, then answer." },
    audio: [["F", "Bonjour, c'est Julie. ..."]],
    questions: [
      { q: "Julie vous propose…", o: ["🎬 d'aller au cinéma", "🍽️ de dîner au restaurant", "⚽ de faire du sport"], a: 1, x: "Julie dit : « on va au restaurant ce soir ? »" }
    ] }
);
```

A **sujet** (paper) = all items with the same `level` + `sujet`. Each sujet has the four sections of the real exam, and the points of each section add up to **25** (total 100; pass = 50 with at least 5/25 in each section).

Plain JavaScript, no imports, no template literals (`` ` ``), no `${`. Strings in double quotes; use French typographic quotes « » inside text and the apostrophe ' freely. Original content only (never copy official papers).

## Common fields (every item)

| field | value |
|---|---|
| `id` | `"<level lowercase>-s<2-digit sujet>-<sec><ex>"`, e.g. `"a2-s07-ce3"` |
| `level` | `"A1"` or `"A2"` |
| `sujet` | 1 … 20 |
| `sec` | `"co"` listening · `"ce"` reading · `"pe"` writing · `"po"` speaking |
| `ex` | exercise number inside the section (1, 2, 3 …) |
| `pts` | points of the exercise (integers or .5); per sujet and section they add up to 25 |
| `title` | short French title for the tile (3–6 words) |
| `consigne` | the French instruction, in the style of the real exam (vouvoiement) |
| `help` | `{ tr, en }` translation of the consigne (simple, short) |

## `co` — Compréhension de l'oral (4 exercises per sujet)

- `audio`: the recording, list of `[speaker, text]`. Speakers: `"N"` announcer/neutral, `"F"` woman, `"M"` man, `"F2"` second woman, `"M2"` second man, `"K"` child. The site reads it with French text-to-speech (played twice, like the exam), so write natural spoken French with full punctuation; write numbers, prices and times in digits (« 18 h 30 », « 12,50 € ») — the voice reads them.
- `questions`: `{ q, o, a, x }` — question, 3 options (4 for picture matching), index of the right option (0-based), and a short French explanation `x` quoting the recording.
- Picture questions: start each option with one emoji + 1–3 words (`"🚆 le train"`).
- Exercise with several short recordings (e.g. matching dialogues to situations): leave the item's `audio` empty `[]` and give each question its own `audio`.
- **A1** typical order: ex1 a phone/voicemail message · ex2 a public announcement (station, shop, school) · ex3 a message or radio ad · ex4 4–5 very short dialogues → match each to a picture/situation. 3–5 questions each; very simple, slow, high-frequency words; recordings 30–70 words.
- **A2** typical order: ex1 2–3 short announcements/messages · ex2 a radio item · ex3 a voicemail or conversation · ex4 4–5 short dialogues → identify the situation/intention (inviter, s'excuser, demander un renseignement…). 4–6 questions each; recordings 60–140 words.

## `ce` — Compréhension des écrits (4 exercises per sujet)

- `doc`: `{ type, from?, to?, subject?, title?, body?, rows?, sign? }`
  - `type`: `"email"`, `"sms"`, `"affiche"`, `"annonce"`, `"menu"`, `"horaires"`, `"lettre"`, `"article"`, `"programme"`, `"recette"`, `"carte"` (postcard), `"forum"`, `"notice"`.
  - `body`: the text; `\n` for a new line, `\n\n` for a new paragraph.
  - `rows`: optional table (`menu`, `horaires`, `programme`), first row = header, e.g. `[["Jour", "Activité", "Heure"], ["Lundi", "Yoga", "18 h"]]`.
- `questions`: same as `co` (`{ q, o, a, x }`). True/false: `o: ["Vrai", "Faux"]`. `x` quotes the document.
- **A1** typical order: ex1 an e-mail/letter from a friend · ex2 a poster or notice (orientation, opening hours) · ex3 a timetable/programme/menu · ex4 an ad or short article. Documents 40–110 words, 4–6 questions each.
- **A2** typical order: ex1 several small ads → choose the one that fits a person · ex2 an e-mail/letter · ex3 instructions/rules/notice · ex4 a short press article. Documents 80–220 words, 4–6 questions each.

## `pe` — Production écrite

Two kinds:

1. `kind: "form"` (A1 ex1, 10 pts): `context` (French: the situation) and `fields`: `[{ l: "Nom", k }]`, with `k` one of `"text"`, `"number"`, `"date"`, `"email"`, `"phone"`, `"choice"` (+ `o: [options]`), `"free"` (a short phrase answer, e.g. « Pourquoi voulez-vous vous inscrire ? »). 8–10 fields.
2. `kind: "text"`: `min` (A1: 40 words, A2: 60 words), `must`: 3–5 required content points `[{ c: "Saluer votre ami", kw: ["bonjour", "salut", "coucou", "cher", "chère"] }]` (lowercase keywords or short phrases the site can detect; accents optional), and `model`: a model answer in French that meets the length (A1 40–60 words, A2 60–90 words), using only A1/A2 grammar.
- **A1**: ex1 `form` (10 pts) + ex2 `text` (15 pts): a postcard, message, invitation, short e-mail about daily life.
- **A2**: ex1 `text` (13 pts): describe an event or personal experience (holiday, weekend, party, a day…) — past tenses · ex2 `text` (12 pts): write to invite / thank / apologise / ask / inform / congratulate (reply to a message given in the consigne).

## `po` — Production orale

- `kind: "entretien"` (ex1, A1 and A2): `prompts`: 6–8 examiner questions `[{ q: "Comment vous appelez-vous ?", m: "Je m'appelle Esin." }]` (`m` = a simple model answer).
- `kind: "echange"` (A1 ex2): `cards`: 6–8 words on cards (`"Sport ?"`, `"Week-end ?"`…), `prompts`: one model question per card `[{ q: "Sport ?", m: "Quel sport est-ce que vous aimez ?" }]`.
- `kind: "monologue"` (A2 ex2): `topic` (French question, e.g. « Parlez de votre ville préférée. »), `hints`: 3–5 ideas, `model`: a 80–130-word spoken model answer, `must`: 3–4 content points `{ c, kw }`.
- `kind: "dialogue"` (A1 ex3 dialogue simulé, A2 ex3 exercice en interaction): `scenario` (French), `you` (your role), `them` (examiner's role), optional `items` (A1 shopping/ordering: `[{ n: "une baguette", p: "1,20 €", e: "🥖" }]`, 4–8 items), `must` (3–5 points `{ c, kw }`), `model`: list of `["E", text]` (examiner) / `["C", text]` (candidate) lines, 8–14 lines.
- Points: **A1** 8 + 8 + 9; **A2** 8 + 8 + 9.

## Quality bar

- Real-life situations of someone living in France (shops, transport, housing, health, work, school, leisure, sport, family, weather, holidays, the town hall, the doctor, the pharmacy…). Vary names, places and topics across the 10 sujets; no two exercises with the same situation inside a level.
- Exactly the level: A1 = présent, futur proche, very common words; A2 = passé composé, imparfait, futur, everyday vocabulary.
- One unambiguous right answer; plausible distractors that are mentioned or hinted in the document.
- `x` explanations are short and in simple French.
- Run `node tools/check-delf.js` until it prints OK.
