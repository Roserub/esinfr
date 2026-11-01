# Adventures ("Aventures"): data format

Small interactive stories for A1/A2 where the learner plays herself in a real situation in France.
The characters speak (French text-to-speech); she picks what to say. A wrong pick gets a gentle,
funny explanation and she tries again (or the story takes a short detour). At the end she gets 1–3 stars.

Files: `data/adv-*.js`. Plain JavaScript, no template literals (`` ` ``), strings in double quotes.

```js
/* Aventures A1 — 1 to 5 */
(window.ADVENTURES = window.ADVENTURES || []).push(
  { id: "av-cafe", level: "A1", emoji: "☕",
    t: { fr: "Un café en terrasse", tr: "Terasta bir kahve", en: "A coffee on the terrace" },
    goal: { fr: "Commandez un café et un croissant, puis payez.", tr: "Bir kahve ve bir kruvasan sipariş edin, sonra ödeyin.", en: "Order a coffee and a croissant, then pay." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous êtes assise à la terrasse d'un café. Le serveur arrive.", tr: "…", en: "…" },
           say: [["M", "Bonjour madame ! Qu'est-ce que je vous sers ?"]],
           choices: [
             { fr: "Bonjour ! Un café, s'il vous plaît.", tr: "Merhaba! Bir kahve, lütfen.", en: "Hello! A coffee, please.", ok: true, go: "b" },
             { fr: "Je suis un café.", tr: "Ben bir kahveyim.", en: "I am a coffee.", ok: false,
               fb: { fr: "Oups ! « Je suis un café » = vous êtes une tasse ☕😄. On dit « je voudrais » ou « un café, s'il vous plaît ».", tr: "…", en: "…" } },
             { fr: "Salut mec, file-moi un café.", tr: "…", en: "…", ok: false,
               fb: { fr: "Trop familier avec un serveur ! Gardez « bonjour » et « s'il vous plaît ».", tr: "…", en: "…" } }
           ] },
      b: { … },
      fin: { end: "win", say: [["M", "Merci, bonne journée !"]], scene: { fr: "Bravo, vous avez commandé en français ! 🎉", tr: "…", en: "…" } }
    } }
);
```

## Fields

| field | value |
|---|---|
| `id` | `"av-<short-name>"`, unique |
| `level` | `"A1"` or `"A2"` |
| `emoji` | one emoji for the tile |
| `t` | title `{ fr, tr, en }` (2–6 words) |
| `goal` | the mission in one sentence `{ fr, tr, en }` (vouvoiement in French: « Achetez… ») |
| `start` | key of the first node |
| `nodes` | object of nodes |

A **node**:
- `scene` (optional): narration `{ fr, tr, en }`, one or two short sentences (what she sees, where she is).
- `say` (optional): what the other people say, list of `[speaker, text]`. Speakers: `"N"` neutral/announcement, `"F"` woman, `"M"` man, `"F2"`, `"M2"`, `"K"` child. Write numbers, prices and times in digits (« 3,50 € », « 18 h 30 »). Every node has `scene` or `say` (usually `say`).
- `choices`: 2–4 options (3 is best) `{ fr, tr, en, ok, go?, fb? }`
  - `fr`: what she says (natural spoken French at the level); `tr`, `en`: its translation (help button).
  - `ok: true` = a good answer. It must have `go` (next node). Several good answers can exist and may lead to different nodes (real branching is welcome: e.g. she chooses the terrace or inside, a card or cash).
  - `ok: false` = a mistake: wrong meaning, wrong register (tu/vous, too familiar), impolite, grammar trap typical for Turkish/English speakers, or simply not answering the question. It needs `fb` `{ fr, tr, en }`: a short, kind, often funny explanation (1–2 sentences) that says what would be right. Without `go`, she stays on the node and tries again. With `go`, the story takes a short detour (the character reacts, e.g. looks confused) and the detour node must lead back to the main story.
- An **end node** has `end: "win"` (and `say` and/or `scene` to close the story). No `choices`.

## Rules

- 7–10 decision nodes on the way to the end (a story takes 3–5 minutes). At least 1 real branch (two `ok` paths) per story.
- Every node is reachable from `start`, and from every node an end can be reached through `ok` choices.
- She is the main character, a young woman: people call her « madame »; she uses « vous » with strangers, « tu » only with friends/children. Do not use her name in the text.
- A1: présent, futur proche, very frequent words, short sentences. A2: passé composé, imparfait, futur simple, conditionnel de politesse (« je voudrais », « pourriez-vous »), everyday vocabulary.
- Distractors are plausible and teach something (classic traps: « je suis 25 ans », « je suis fini », « il fait froid / j'ai froid », « bonjour / bonsoir », « tu / vous », « combien / comment », « à / au / chez »…). Keep humour light and kind: she is stressed, never make her feel stupid.
- Turkish (`tr`) must be natural Turkish; English (`en`) natural English.
- Original content only. Check: `node tools/check-adventures.js` must print OK.
