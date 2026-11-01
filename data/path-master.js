/* Path additions from "French from zero — the master list" (phases 0–5).
   Keeps every existing step id (so progress is kept), inserts new steps, adds resources,
   in-site practice (practice: exercise id) and the cumulative hours of each level. */
(function () {
  const S = (id, en, tr, fr, doEn, doTr, res, extra) =>
    Object.assign({ id, t: { en, tr, fr }, do: { en: doEn, tr: doTr }, res: res || [] }, extra || {});
  const L = id => window.PATH.find(l => l.id === id);
  const step = id => { for (const l of window.PATH) { const s = l.steps.find(x => x.id === id); if (s) return s; } return null; };
  const insert = (lv, afterId, steps) => {
    const arr = L(lv).steps; const i = afterId ? arr.findIndex(s => s.id === afterId) + 1 : 0;
    arr.splice(i, 0, ...steps);
  };
  const more = (id, res, extra) => { const s = step(id); if (!s) return; res.forEach(r => { if (!s.res.includes(r)) s.res.push(r); }); Object.assign(s, extra || {}); };

  /* Hours: guided hours for the level + cumulative total (Alliance Française). */
  const H = { A0: [20, "15–20"], A1: [80, "60–100"], A2: [100, "160–200"], B1: [200, "360–400"], B2: [230, "560–650"], C1: [280, "810–950"], C2: [250, "1060–1200"] };
  Object.entries(H).forEach(([k, [h, cum]]) => { L(k).hours = h; L(k).cum = cum; });

  /* ── A0 · Phase 0: sounds & survival ── */
  insert("A0", null, [
    S("a0-start", "Start here: your core kit", "Buradan başla: temel setin", "Commencer ici : ton kit de base",
      "Read the 'Start here' page: 12 free resources are enough to reach B1. Tick off your first-week checklist there. Don't install everything: one thing at a time.",
      "'Buradan başla' sayfasını oku: B1'e ulaşmak için 12 ücretsiz kaynak yeterli. Oradaki ilk hafta listesini işaretle. Her şeyi yükleme: her seferinde bir şey.",
      [], { guide: "start" })
  ]);
  more("a0-sounds", ["prononcer", "fonetix", "pointdufle-phon"], { practice: "sounds" });
  more("a0-hello", [], { practice: "speak" });
  more("a0-numbers", [], { practice: "numbers" });
  insert("A0", "a0-numbers", [
    S("a0-lt", "Language Transfer, tracks 1–10", "Language Transfer, 1–10. bölümler", "Language Transfer, pistes 1 à 10",
      "An audio course that makes you build sentences from minute one, using what you know from English. 10–15 minutes a day; pause and answer out loud.",
      "İngilizceden bildiklerini kullanarak ilk dakikadan cümle kurduran sesli kurs. Günde 10–15 dakika; durdur ve yüksek sesle cevap ver.",
      ["langtransfer"]),
    S("a0-voisins", "Les voisins du 12 bis, episodes 1–4", "Les voisins du 12 bis, 1–4. bölümler", "Les voisins du 12 bis, épisodes 1 à 4",
      "RFI's audio soap for absolute beginners, with exercises. Listen once without text, then with the transcript.",
      "Tam başlangıç için RFI'ın sesli dizisi, alıştırmalı. Bir kez metinsiz dinle, sonra metinle.",
      ["voisins12bis"])
  ]);
  more("a0-habit", ["anki"]);
  more("a0-tr", ["aykut", "kolayfr"]);

  /* ── A1 · Phase 1 ── */
  insert("A1", null, [
    S("a1-spine", "Choose ONE main course (your spine)", "TEK bir ana kurs seç (omurgan)", "Choisir UN cours principal",
      "Pick Français interactif (+ Tex's French Grammar) OR TV5MONDE A1, and follow it in order. Everything else is support. Chapters 1–4 cover A1.",
      "Français interactif (+ Tex's French Grammar) VEYA TV5MONDE A1 seç ve sırayla takip et. Geri kalan her şey destek. 1–4. bölümler A1'i kapsar.",
      ["fi-texas", "tex", "tv5"], { guide: "roadmap" })
  ]);
  more("a1-etre", ["pointdufle", "lingolia"], { practice: "gender" });
  more("a1-er", ["conjugueur"], { practice: "conj" });
  more("a1-listen", ["aliceayel", "supereasy", "coffeebreak", "extra", "voisins12bis"], { practice: "dictation" });
  insert("A1", "a1-listen", [
    S("a1-lt", "Finish Language Transfer", "Language Transfer'ı bitir", "Finir Language Transfer",
      "Keep 10–15 minutes of Language Transfer a day until the end of the course. It builds your sentence reflexes.",
      "Kurs bitene kadar günde 10–15 dakika Language Transfer'a devam et. Cümle reflekslerini kurar.",
      ["langtransfer"]),
    S("a1-stories", "Read with Turkish beside", "Türkçesi yanında oku", "Lire avec le turc à côté",
      "Global Storybooks levels 1–2: the same story in French and in Turkish, with audio. Read the French, check the Turkish only when stuck.",
      "Global Storybooks 1–2. seviyeler: aynı hikâye Fransızca ve Türkçe, sesli. Fransızcayı oku, sadece takılınca Türkçeye bak.",
      ["globalstory", "storyweaver"], { kind: "write" }),
    S("a1-tandem", "One tandem chat a week", "Haftada bir tandem sohbeti", "Un échange tandem par semaine",
      "Find a French speaker who wants to learn Turkish or English. 15 minutes in French, 15 in Turkish. Text chat counts too.",
      "Türkçe veya İngilizce öğrenmek isteyen bir Fransız bul. 15 dakika Fransızca, 15 dakika Türkçe. Yazışmak da sayılır.",
      ["tandem", "hellotalk", "mylangex"], { kind: "speak", practice: "speak" })
  ]);
  more("a1-questions", ["kwiziq"], { practice: "mistakes" });
  more("a1-check", ["fei-delf"]);

  /* ── A2 · Phase 2 ── */
  more("a2-pc", ["lawless"], { practice: "conj" });
  more("a2-stories", ["jeff", "pff", "duopod"], { practice: "listen" });
  more("a2-read", ["1jour1actu", "globalstory"]);
  more("a2-write", ["bonpatron", "langcorrect"]);
  more("a2-talk", ["avf", "centressociaux"]);
  insert("A2", "a2-body", [
    S("a2-lifefr", "Life in France: housing, admin, bank", "Fransa'da yaşam: ev, evrak, banka", "La vie en France : logement, papiers, banque",
      "The words you need early: le loyer, le bail, la carte Vitale, le RIB, la mutuelle… Study the deck, then read the 'Official help' page.",
      "Erken lazım olan kelimeler: le loyer, le bail, la carte Vitale, le RIB, la mutuelle… Desteyi çalış, sonra 'Resmî yardım' sayfasını oku.",
      ["sp-cards", "vivreenfrance"], { deck: "lifefr", guide: "official", kind: "life" }),
    S("a2-falsefriends", "False friends", "Yanlış dostlar", "Les faux amis",
      "garson ≠ garçon, apartman ≠ appartement, actually ≠ actuellement… Turkish and English both set traps. Learn the deck once, laugh, move on.",
      "garson ≠ garçon, apartman ≠ appartement, actually ≠ actuellement… Hem Türkçe hem İngilizce tuzak kurar. Desteyi bir kez öğren, gül, devam et.",
      [], { deck: "falsefriends", guide: "falsefriends" })
  ]);
  insert("A2", "a2-write", [
    S("a2-mistakes", "The classic mistakes", "Klasik hatalar", "Les erreurs classiques",
      "Read the checklist of mistakes Turkish speakers make (je suis 30 ans → j'ai 30 ans…), then play 'Spot the mistake'. Reread it every month.",
      "Türkçe konuşanların yaptığı hataların listesini oku (je suis 30 ans → j'ai 30 ans…), sonra 'Hatayı bul' oyununu oyna. Her ay yeniden oku.",
      [], { guide: "mistakes", practice: "mistakes" })
  ]);
  insert("A2", "a2-talk", [
    S("a2-local", "Find a free class or conversation group", "Ücretsiz bir kurs veya sohbet grubu bul", "Trouver un cours ou un groupe de conversation gratuit",
      "Search your town on Refugies.info (open to all foreigners), ask the town hall and the library. If you're eligible, the OFII integration contract includes free French up to A2.",
      "Refugies.info'da şehrini ara (tüm yabancılara açık), belediyeye ve kütüphaneye sor. Uygunsan OFII uyum sözleşmesi A2'ye kadar ücretsiz Fransızca içerir.",
      ["refugiesinfo", "sp-cir", "croixrouge", "mediatheque"], { guide: "courses", kind: "life" })
  ]);
  more("a2-check", ["tcf-irn", "tef-irn", "tv5-tcf"], { guide: "exams" });

  /* ── B1 · Phase 3 ── */
  more("b1-subj", ["bescherelle"], { practice: "conj" });
  more("b1-inner", ["innerfrench-pod", "easyfrench-pod", "onething", "chosesasavoir"]);
  more("b1-real", ["easyfrench", "fia"], { practice: "dictation" });
  insert("B1", "b1-real", [
    S("b1-series", "A daily series with French subtitles", "Fransızca altyazılı günlük bir dizi", "Une série quotidienne sous-titrée en français",
      "Free TV5MONDEplus or france.tv, with French subtitles. Language Reactor shows two subtitle lines on Netflix and YouTube.",
      "Ücretsiz TV5MONDEplus veya france.tv, Fransızca altyazılı. Language Reactor Netflix ve YouTube'da iki altyazı satırı gösterir.",
      ["tv5plus", "francetv", "langreactor"]),
    S("b1-books", "Your first real books", "İlk gerçek kitapların", "Tes premiers vrais livres",
      "TV5MONDE's free digital library and Le Petit Nicolas. Read for pleasure: if you know 95% of the words, it's the right level.",
      "TV5MONDE'un ücretsiz dijital kütüphanesi ve Le Petit Nicolas. Zevk için oku: kelimelerin %95'ini biliyorsan doğru seviyedir.",
      ["tv5biblio", "petitnicolas", "bibebook"])
  ]);
  insert("B1", "b1-admin", [
    S("b1-work", "Work words and job hunting", "İş kelimeleri ve iş arama", "Le vocabulaire du travail",
      "CV, lettre de motivation, entretien, CDI/CDD… Study the deck and do one RFI 'Travailler en français' lesson.",
      "CV, lettre de motivation, entretien, CDI/CDD… Desteyi çalış ve bir RFI 'Travailler en français' dersi yap.",
      ["rfi-travailler", "afpa"], { deck: "work", guide: "fos" })
  ]);
  more("b1-check", ["delf-b1-manual", "rfi-delf"], { guide: "exams" });

  /* ── B2 · Phase 4 ── */
  insert("B2", "b2-anat", [
    S("b2-dfp", "Health French: DFP Santé B2", "Sağlık Fransızcası: DFP Santé B2", "Le français de la santé : DFP Santé B2",
      "Free sample papers with audio and answers, RFI health news and the medical French of Le Point du FLE. Your physio background is a big advantage here.",
      "Sesli ve cevaplı ücretsiz örnek sınavlar, RFI sağlık haberleri ve Le Point du FLE'nin tıbbi Fransızcası. Fizyoterapi geçmişin burada büyük avantaj.",
      ["dfp-sante", "rfi-sante", "rfi-dfp", "pointdufle-fos"], { deck: "physio", guide: "fos" })
  ]);
  insert("B2", "b2-studies", [
    S("b2-mooc2move", "French for university: Mooc2Move", "Üniversite Fransızcası: Mooc2Move", "Le français universitaire : Mooc2Move",
      "A free ~24-hour MOOC from Université Grenoble Alpes on lectures, note-taking and university life. Then RFI 'Étudier en France'.",
      "Université Grenoble Alpes'in ders, not alma ve üniversite hayatı üzerine ~24 saatlik ücretsiz MOOC'u. Sonra RFI 'Étudier en France'.",
      ["mooc2move", "rfi-etudier"], { deck: "academic" })
  ]);
  more("b2-films", ["hugodecrypte", "tv5info", "arte"]);
  more("b2-check", ["delfdalfch"]);

  /* ── C1 · Phase 5 ── */
  more("c1-pro", ["dfp-sante", "ordremk"]);
  more("c1-check", ["fei-dalf", "tcf-irn"]);
})();
