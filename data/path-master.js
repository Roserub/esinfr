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
      "Tam başlangıç için RFI'nin sesli dizisi, alıştırmalı. Bir kez metinsiz dinle, sonra metinle.",
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
      ["globalstory", "storyweaver"]),
    S("a1-tandem", "One tandem chat a week", "Haftada bir tandem sohbeti", "Un échange tandem par semaine",
      "Find a French speaker who wants to learn Turkish or English. 15 minutes in French, 15 in Turkish or English. Text chat counts too.",
      "Türkçe veya İngilizce öğrenmek isteyen bir Fransız bul. 15 dakika Fransızca, 15 dakika Türkçe veya İngilizce. Yazışmak da sayılır.",
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
      "The words you need early: le loyer, le bail, la carte Vitale, le RIB, la mutuelle… Study the deck, then read the 'Official language levels' page.",
      "Erken lazım olan kelimeler: le loyer, le bail, la carte Vitale, le RIB, la mutuelle… Desteyi çalış, sonra 'Resmî dil seviyeleri' sayfasını oku.",
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

  /* French version of every step's "do" text (the French interface showed the English one). */
  const DO_FR = {
    "a0-start": "Lis la page « Commencer ici » : 12 ressources gratuites suffisent pour atteindre le B1. Coche ta liste de la première semaine sur cette page. N'installe pas tout : une chose à la fois.",
    "a0-loan": "Le turc a emprunté des centaines de mots au français : asansör, kuaför, randevu… Feuillette le paquet et souris : tu en connais déjà beaucoup.",
    "a0-sounds": "Lis le guide de prononciation pour turcophones (u/ou, voyelles nasales, lettres muettes). Puis regarde une vidéo de prononciation.",
    "a0-hello": "Apprends les phrases de survie avec l'audio. Dis chacune à voix haute, lentement. Pas besoin d'être parfaite.",
    "a0-numbers": "Les nombres (oui, 70 = soixante-dix…), les jours, les mois, l'heure. Utilise les cartes et une vidéo.",
    "a0-lt": "Un cours audio qui te fait construire des phrases dès la première minute, à partir de ce que tu sais en anglais. 10 à 15 minutes par jour ; mets en pause et réponds à voix haute.",
    "a0-voisins": "Le feuilleton audio de RFI pour grands débutants, avec des exercices. Écoute une fois sans le texte, puis avec la transcription.",
    "a0-habit": "Choisis UNE application pour 5 minutes par jour (Duolingo ou Drops). Cinq minutes suffisent. Vraiment.",
    "a0-tr": "Regarde une leçon pour débutants expliquée en turc, pour te sentir à l'aise avec les bases.",
    "a1-spine": "Choisis Français interactif (+ Tex's French Grammar) OU TV5MONDE A1, et suis-le dans l'ordre. Tout le reste est un soutien. Les chapitres 1 à 4 couvrent l'A1.",
    "a1-etre": "Les deux verbes clés et le/la/les/un/une. Lis d'abord les notes de grammaire pour turcophones : elles comparent avec le turc.",
    "a1-er": "parler, aimer, travailler… 90 % des verbes fonctionnent ainsi. Fais 2 ou 3 petits exercices.",
    "a1-me": "Écris 5 phrases sur toi (nom, pays, métier, sport, famille). Lis-les à voix haute et enregistre-toi sur ton téléphone.",
    "a1-tv5": "Choisis n'importe quelle activité A1 sur TV5MONDE. Une par séance, c'est un très bon rythme.",
    "a1-questions": "Est-ce que… ? / ne… pas. Compare : le turc ajoute -mi et -me, le français entoure le verbe.",
    "a1-daily": "Apprends le paquet « La vie quotidienne », puis lis une recette sur Marmiton ou cherche un train sur SNCF Connect.",
    "a1-listen": "Un court dialogue A1 de Podcast Français Facile, avec la transcription. Écoute-le deux fois.",
    "a1-lt": "Continue Language Transfer 10 à 15 minutes par jour jusqu'à la fin du cours. Il construit tes réflexes de phrase.",
    "a1-stories": "Global Storybooks niveaux 1–2 : la même histoire en français et en turc, avec l'audio. Lis le français, regarde le turc seulement quand tu bloques.",
    "a1-tandem": "Trouve un francophone qui veut apprendre le turc ou l'anglais. 15 minutes en français, 15 en turc ou en anglais. Écrire compte aussi.",
    "a1-mission": "Achète du pain ou un café uniquement en français. Si on te répond en anglais, souris et continue en français. C'est une victoire.",
    "a1-check": "Essaie les parties écoute et lecture d'un sujet officiel du DELF A1. Pas pour réussir : juste pour voir le chemin parcouru.",
    "a2-pc": "Le passé de tous les jours, comme le -dı turc. Regarde une explication en turc, puis fais des exercices Kwiziq.",
    "a2-imp": "Imparfait ≈ turc -(i)yordu / -rdı ; futur proche (je vais + verbe) ≈ -ecek. Deux temps, une soirée pour chacun.",
    "a2-doctor": "Apprends le paquet « La santé : les bases » et lis une page d'ameli.fr sur un problème courant (rhume, mal de dos).",
    "a2-body": "Regarde un épisode d'« Il était une fois… la vie » (tu le connais peut-être en turc !) et apprends le paquet du corps.",
    "a2-lifefr": "Les mots dont tu as vite besoin : le loyer, le bail, la carte Vitale, le RIB, la mutuelle… Étudie le paquet, puis lis la page « Niveaux de langue officiels ».",
    "a2-falsefriends": "garson ≠ garçon, apartman ≠ appartement, actually ≠ actuellement… Le turc et l'anglais tendent tous les deux des pièges. Apprends le paquet une fois, ris, et passe à la suite.",
    "a2-stories": "Le podcast français de Duolingo ou le journal en français facile de RFI, avec les transcriptions.",
    "a2-read": "Un article sur 1jour1actu ou Vikidia. L'actualité pour enfants, c'est la lecture A2 idéale.",
    "a2-write": "Écris 5 lignes sur ta journée. Vérifie-les avec LanguageTool ou publie-les sur Journaly.",
    "a2-mistakes": "Lis la liste des erreurs des turcophones (je suis 30 ans → j'ai 30 ans…), puis joue à « Trouve l'erreur ». Relis-la chaque mois.",
    "a2-talk": "Trouve un Français qui apprend le turc sur Tandem/HelloTalk, ou va dans un café langues. 15 minutes, c'est déjà une réussite.",
    "a2-local": "Cherche ta ville sur Refugies.info (ouvert à tous les étrangers), demande à la mairie et à la médiathèque. Si tu y as droit, le contrat d'intégration de l'OFII comprend des cours de français gratuits jusqu'au niveau A2.",
    "a2-mooc": "Suis à ton rythme le MOOC gratuit A2 de l'Alliance Française sur la vie en France.",
    "a2-check": "Essaie un sujet du DELF A2. Quel que soit le score, tu apprends.",
    "b1-subj": "Il faut que tu viennes / je voudrais… Le turc a -meli/-se : compare dans le guide, puis entraîne-toi.",
    "b1-inner": "Écoute innerFrench une fois par semaine (en marchant, en cuisinant…). N'essaie pas de tout comprendre.",
    "b1-real": "Les micros-trottoirs d'Easy French et Comme une Française : comment les gens parlent vraiment (ouais, chais pas, du coup…).",
    "b1-series": "TV5MONDEplus (gratuit) ou france.tv, avec les sous-titres français. Language Reactor affiche deux lignes de sous-titres sur Netflix et YouTube.",
    "b1-books": "La bibliothèque numérique gratuite de TV5MONDE et Le Petit Nicolas. Lis pour le plaisir : si tu connais 95 % des mots, c'est le bon niveau.",
    "b1-news": "Lis un article court sur franceinfo ou 20 Minutes. Note 3 mots nouveaux dans ton carnet.",
    "b1-sport": "Apprends le paquet sport et handball, puis lis un compte rendu de match de handball.",
    "b1-physio": "Le paquet kiné (flexion, entorse, rééducation…) + une vidéo de Major Mouvement + un article de Passeport Santé.",
    "b1-work": "CV, lettre de motivation, entretien, CDI/CDD… Étudie le paquet et fais une leçon « Travailler en français » de RFI.",
    "b1-admin": "Apprends le paquet administratif, puis lis une page de Service-Public sur un sujet qui te concerne, avec DeepL à côté.",
    "b1-email": "Utilise les modèles d'e-mails formels du guide pour écrire un vrai e-mail (à une école, un club, un bureau).",
    "b1-volunteer": "Deviens bénévole dans un club de handball ou une association : du français chaque semaine, gratuitement, dans ton domaine.",
    "b1-check": "Regards sur l'actualité (ex-7 jours sur la planète) + des sujets du DELF B1. Le B1 est une grande étape : fête-le.",
    "b2-connect": "Apprends le paquet des connecteurs (cependant, en revanche, d'une part…). Ça change tout à l'écrit.",
    "b2-science": "C'est pas sorcier, la biologie sur Lumni et Dirty Biology : de la science que tu connais déjà, en français.",
    "b2-conv": "Un article par semaine sur The Conversation, sur le sport, la santé ou l'éducation.",
    "b2-dfp": "Des sujets d'exemple gratuits avec audio et corrigés, l'actualité santé de RFI et le français médical du Point du FLE. Ton parcours de kiné est un gros atout ici.",
    "b2-anat": "Des vidéos d'anatomie universitaires et les articles du manuel MSD, en français et en anglais côte à côte.",
    "b2-films": "Regarde avec les sous-titres français (pas turcs). Un épisode, c'est une séance parfaite et détendue.",
    "b2-essay": "Production écrite du DELF B2 : 250 mots avec introduction, deux arguments, conclusion. Vérifie avec Scribens.",
    "b2-mooc2move": "Un MOOC gratuit d'environ 24 heures de l'Université Grenoble Alpes sur les cours magistraux, la prise de notes et la vie étudiante. Puis « Étudier en France » de RFI.",
    "b2-studies": "Renseigne-toi sur la licence STAPS sur Onisep, la reconnaissance des diplômes (ENIC-NARIC) et la profession de kiné (Ordre des MK).",
    "b2-check": "Sujets officiels du DELF B2. Le B2 ouvre la plupart des portes de l'université.",
    "c1-listen": "La Méthode scientifique (France Culture) : prends des notes comme pendant un cours.",
    "c1-research": "Trouve sur HAL un article en français sur la kinésithérapie ou les STAPS, lis le résumé et la conclusion.",
    "c1-synth": "Compétence du DALF C1 : résumer deux documents en 220 mots. Utilise les expressions du paquet universitaire.",
    "c1-pro": "Lis une recommandation de la HAS et un article de Kiné Actualité. Explique-les à voix haute.",
    "c1-register": "Formel ou familier, le mot précis, les erreurs courantes que même les Français font.",
    "c1-expose": "Enregistre un exposé de 5 minutes sur un sujet de kiné que tu aimes (par ex. la rééducation du LCA chez les handballeuses).",
    "c1-check": "Sujets officiels du DALF C1. Beaucoup d'universités et de parcours professionnels acceptent le C1.",
    "c2-lit": "Une nouvelle de Maupassant sur Wikisource, ou sa version en livre audio.",
    "c2-debate": "Philosophie et société : Monsieur Phi, Les Pieds sur terre, les éditoriaux du Monde.",
    "c2-finesse": "Dire, ne pas dire ; l'étymologie sur le CNRTL ; Linguisticae pour le plaisir.",
    "c2-teach": "Écris un court article ou anime un atelier sur la kinésithérapie du sport. Maintenant, tu es aussi l'experte en français.",
    "c2-check": "Seulement si tu en as envie. Tu as déjà gagné."
  };
  for (const l of window.PATH) for (const s of l.steps) if (DO_FR[s.id]) s.do.fr = DO_FR[s.id];
})();
