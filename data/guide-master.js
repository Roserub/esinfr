/* Guide sections built from "French from zero — the master list" (compiled 30 Oct 2026).
   Adds and replaces sections of window.GUIDE, then sets the reading order.
   Optional fields: res (resource ids shown as cards), widget ("pace" | "firstweek"), links ([{t:{en,tr}, href}]). */
(function () {
  const T = (head, rows) => `<table class="tbl"><tr>${head.map(h => `<th>${h}</th>`).join("")}</tr>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</table>`;

  /* ── shared tables ── */
  const VOWELS = [
    ["<b>u</b>", "tu, rue", "ü — « tü », « rü »"],
    ["<b>ou</b>", "vous, rouge", "u — « vu », « ruj »"],
    ["<b>eu, œu</b> (closed)", "deux, bleu", "ö — « dö », « blö »"],
    ["<b>eu, œu</b> (open)", "peur, sœur", "ö, a bit more open"],
    ["<b>e</b> (unstressed)", "le, je, petit", "short ö — « lö », « jö », often swallowed: « p'ti »"],
    ["<b>é</b>", "été, café", "closed e — « ete », « kafe »"],
    ["<b>è, ê, ai, ei</b>", "mère, fête, lait, neige", "open e"],
    ["<b>i, î, y</b>", "ici, île, stylo", "i (French has NO ı)"],
    ["<b>o, ô, au, eau</b>", "dos, hôtel, auto, beau", "o"],
    ["<b>oi</b>", "moi, trois", "« ua » — « mua », « trua »"],
    ["<b>oy</b>", "voyage", "« uay » — « vuayaj »"],
    ["<b>ui</b>", "huit, nuit", "« üi » — « üit », « nüi »"]
  ];
  const NASALS = [
    ["<b>an, am, en, em</b>", "enfant, temps", "a~ — « a~fa~ », « ta~ »"],
    ["<b>on, om</b>", "bon, nom", "o~ — « bo~ », « no~ »"],
    ["<b>in, im, ain, ein</b>", "vin, pain", "e~ — « ve~ », « pe~ »"],
    ["<b>un, um</b>", "un, parfum", "e~ (some speakers ö~)"]
  ];
  const CONS = [
    ["<b>ch</b>", "chat, chose", "ş — « şa », « şoz »"],
    ["<b>j</b>", "je, jour", "j — « jö », « jur » (like garaj, plaj)"],
    ["<b>g</b> + e/i/y", "gens, girafe, garage", "j — « ja~ », « jiraf »"],
    ["<b>g</b> + a/o/u", "gare, goût", "g"],
    ["<b>gu</b> + e/i", "guide, guerre", "g — the u is silent"],
    ["<b>gn</b>", "montagne", "« ny » — « mo~tany »"],
    ["<b>c</b> + e/i/y", "ce, ici, cycle", "s — ⚠️ French c is NEVER Turkish c (dj)"],
    ["<b>c</b> + a/o/u", "café, comme", "k"],
    ["<b>ç</b>", "ça, garçon", "s — ⚠️ French ç = s, NOT Turkish ç"],
    ["<b>qu</b>", "qui, quatre", "k — « ki », « katr »"],
    ["<b>s</b> between vowels", "maison, rose", "z — « mezo~ », « roz »"],
    ["<b>ss</b>", "poisson", "s — « puaso~ » (poison « puazo~ » = poison!)"],
    ["<b>th / ph</b>", "thé, photo", "t / f"],
    ["<b>h</b>", "homme, hôtel", "SILENT — « om », « otel »"],
    ["<b>r</b>", "rouge, Paris", "back-of-throat r (a light gargle), not the tapped Turkish r"],
    ["<b>ill</b> (after vowel)", "fille, travail", "y — « fiy », « travay » (but ville, mille, tranquille = « il »)"],
    ["<b>ti</b> + vowel", "nation, patient", "s — « nasyo~ », « pasya~ »"],
    ["<b>x</b>", "taxi / six / deux", "« ks » / « s » / silent — it depends"]
  ];
  const MISTAKES = [
    ["Je mange pomme.", "Je mange <b>une</b> pomme.", "articles are compulsory", "artikel zorunlu"],
    ["Mange une pomme. (= I eat)", "<b>Je</b> mange une pomme.", "subject pronoun is compulsory", "özne zamiri zorunlu"],
    ["Je une pomme mange.", "Je <b>mange</b> une pomme.", "S-V-O, not S-O-V", "ÖYN, ÖNY değil"],
    ["« ça » read like Turkish ça", "ça = « sa », ce = « sö », h = silent", "French letter values", "Fransızca harf değerleri"],
    ["ils parlent = « parlent »", "« il parl »", "-ent of verbs is silent", "fiil sonundaki -ent okunmaz"],
    ["bon = « bon » with an n", "« bo~ »", "nasal: no n sound", "genizden: n sesi yok"],
    ["une petit maison", "une petit<b>e</b> maison", "adjective agreement", "sıfat uyumu"],
    ["sa mari / son mère", "<b>son</b> mari / <b>sa</b> mère", "agrees with the noun", "isme göre değişir"],
    ["Je suis 30 ans.", "<b>J'ai</b> 30 ans.", "age = avoir", "yaş = avoir"],
    ["Je suis froid / faim.", "<b>J'ai</b> froid / faim.", "avoir froid, faim, soif, peur", "avoir froid, faim, soif, peur"],
    ["Est une table.", "<b>Il y a</b> une table.", "var = il y a", "var = il y a"],
    ["Je vais à France / en Paris.", "Je vais <b>en</b> France / <b>à</b> Paris.", "en + country, à + city", "en + ülke, à + şehir"],
    ["une rouge voiture", "une voiture <b>rouge</b>", "most adjectives after", "çoğu sıfat sonra gelir"],
    ["J'ai allé.", "<b>Je suis allé(e).</b>", "movement verbs take être", "hareket fiilleri être alır"],
    ["Je suis content. (a woman)", "Je suis content<b>e</b>.", "feminine for yourself", "kendin için dişil"],
    ["Elle est allé.", "Elle est allé<b>e</b>.", "agreement with être", "être ile uyum"],
    ["Je n'ai pas un chat.", "Je n'ai pas <b>de</b> chat.", "negation: un/du → de", "olumsuzluk: un/du → de"],
    ["beaucoup des gens", "beaucoup <b>de</b> gens", "beaucoup de + noun", "beaucoup de + isim"],
    ["très beaucoup", "beaucoup / vraiment beaucoup", "no « très » before beaucoup", "beaucoup'tan önce « très » yok"],
    ["Je ne vois pas personne.", "Je ne vois <b>personne</b>.", "personne replaces pas", "personne, pas'nın yerini alır"],
    ["Tu viens mi ?", "Tu viens ? / Est-ce que tu viens ?", "no question particle", "soru eki yok"],
    ["C'est nécessaire aller.", "<b>Il faut</b> aller. / Je dois aller.", "-mek lazım = il faut", "-mek lazım = il faut"],
    ["« tu » to a stranger / an official", "<b>vous</b>", "politeness = siz", "nezaket = siz"],
    ["pour je mange", "pour <b>manger</b>", "pour + infinitive", "pour + mastar"],
    ["les amis = « le ami »", "« le-zami »", "liaison", "liaison (bağlama)"]
  ];
  const FF_TR = [
    ["garson = waiter", "garçon = boy, young man", "serveur / serveuse"],
    ["apartman = the BUILDING", "appartement = a flat", "immeuble"],
    ["kolej = (private) school", "collège = state middle school (11–15)", "—"],
    ["bluz = woman's blouse", "blouse = work smock / lab coat", "chemisier"],
    ["eşarp = headscarf", "écharpe = winter scarf (also sling)", "foulard"],
    ["deplasman = away match", "déplacement = trip, travel", "match à l'extérieur"],
    ["metres = mistress", "maîtresse = ABOVE ALL a primary-school teacher", "—"],
    ["mayo = swimsuit", "maillot = sports jersey", "maillot de bain"],
    ["peron = platform", "perron = front steps of a building", "quai"],
    ["eşofman = tracksuit", "échauffement = warm-up", "survêtement"],
    ["fermuar = zip", "fermoir = clasp", "fermeture éclair"],
    ["küvet = bathtub", "cuvette = basin, toilet bowl", "baignoire"],
    ["abiye = evening dress", "habillé = dressed up", "robe de soirée"],
    ["karne = school report", "carnet = notebook, booklet of tickets", "bulletin (scolaire)"],
    ["buji = spark plug", "bougie = mainly a CANDLE", "—"],
    ["jaluzi = Venetian blind", "jalousie = mainly JEALOUSY", "store vénitien"],
    ["sütyen = bra", "soutien = support", "soutien-gorge"],
    ["tuvalet = toilet", "la toilette = washing / outfit", "les toilettes (WC)"],
    ["pasta (Italian) = cake", "pâtes = pasta", "gâteau"],
    ["jilet (Gillette) = razor blade", "gilet = cardigan, waistcoat", "lame de rasoir"],
    ["otogar (made in Turkey)", "— doesn't exist", "gare routière"],
    ["bonfile (made in Turkey)", "— doesn't exist", "filet de bœuf"],
    ["panjur (made in Turkey)", "— doesn't exist", "volet"]
  ];
  const FF_EN = [
    ["actuellement", "currently", "actually = en fait"], ["éventuellement", "possibly", "eventually = finalement"],
    ["librairie", "bookshop", "library = bibliothèque"], ["assister à", "to attend", "to assist = aider"],
    ["attendre", "to wait", "to attend = assister à"], ["rester", "to stay", "to rest = se reposer"],
    ["sensible", "sensitive", "sensible = raisonnable"], ["location", "rental", "location = endroit, lieu"],
    ["journée", "day", "journey = voyage, trajet"], ["coin", "corner", "coin = pièce de monnaie"],
    ["monnaie", "change, currency", "money = argent"], ["car", "because", "car = voiture"],
    ["blesser", "to injure", "to bless = bénir"], ["préservatif", "condom", "preservative = conservateur"],
    ["raisin", "grape", "raisin = raisin sec"], ["pain", "bread", "pain = douleur"],
    ["chair", "flesh", "chair = chaise"], ["sale", "dirty", "sale = soldes"],
    ["stage", "internship, course", "stage = scène"], ["formation", "training", "training course = une formation"],
    ["habit", "garment", "habit = habitude"], ["entrée", "starter (menu)", "US entree = plat principal"],
    ["déception", "disappointment", "deception = tromperie"], ["demander", "to ask", "to demand = exiger"],
    ["lecture", "reading", "lecture = cours magistral"], ["collège", "middle school", "college = université"],
    ["excité", "over-excited (can be sexual!)", "I'm excited = J'ai hâte !"]
  ];
  const GRAMMAR_ORDER = {
    A1: "être / avoir · articles · gender &amp; plural · présent of -er verbs · negation · questions · aller, faire, venir, pouvoir, vouloir · possessives · prepositions of place · numbers, time, dates · futur proche · c'est / il est",
    A2: "passé composé (avoir / être + agreement) · imparfait · passé composé vs imparfait · object pronouns (le, la, lui, leur) · y / en · comparatives &amp; superlatives · reflexive verbs · futur simple · imperative · qui / que / où",
    B1: "conditionnel · subjonctif présent (il faut que, je veux que…) · plus-que-parfait · si + tenses · dont · passive · gérondif (en + -ant) · reported speech · connectors (donc, pourtant, cependant)",
    B2: "subjunctive after conjunctions (bien que, pour que…) · sequence of tenses · participle clauses · nuanced connectors · formal vs informal registers",
    C1: "passé simple (to recognise in books) · subjonctif passé · nominalisation (réduire → la réduction) · concession &amp; opposition (quoique, certes… mais) · inversion and mise en relief (c'est… que) · academic register: hedging and impersonal phrasing"
  };
  const GRAMMAR_ORDER_TR = {
    A1: "être / avoir · artikeller · cinsiyet ve çoğul · -er fiillerinin présent'i · olumsuzluk · sorular · aller, faire, venir, pouvoir, vouloir · iyelikler · yer edatları · sayılar, saat, tarihler · futur proche · c'est / il est",
    A2: "passé composé (avoir / être + uyum) · imparfait · passé composé mı imparfait mi · nesne zamirleri (le, la, lui, leur) · y / en · karşılaştırma ve üstünlük · dönüşlü fiiller · futur simple · emir kipi · qui / que / où",
    B1: "conditionnel · subjonctif présent (il faut que, je veux que…) · plus-que-parfait · si + zamanlar · dont · edilgen çatı · gérondif (en + -ant) · dolaylı anlatım · bağlaçlar (donc, pourtant, cependant)",
    B2: "bağlaçlardan sonra subjonctif (bien que, pour que…) · zaman uyumu · ortaç cümlecikleri · ince anlamlı bağlaçlar · resmî ve gündelik üslup",
    C1: "passé simple (kitaplarda tanımak için) · subjonctif passé · isimleştirme (réduire → la réduction) · taviz ve karşıtlık (quoique, certes… mais) · devrik yapı ve vurgulama (c'est… que) · akademik üslup: temkinli ve kişisiz anlatım"
  };
  window.GRAMMAR_ORDER = GRAMMAR_ORDER;
  window.GRAMMAR_ORDER_TR = GRAMMAR_ORDER_TR;

  const S = [];

  S.push({
    id: "start", icon: "🧭",
    t: { en: "Start here: the core kit", tr: "Buradan başla: temel set", fr: "Commencer ici : le kit de base" },
    res: ["langtransfer", "fi-texas", "tv5", "voisins12bis", "duolingo", "anki", "aliceayel", "supereasy", "globalstory", "pointdufle", "wordref", "glosbe", "bonpatron", "langcorrect", "tandem", "hellotalk", "aykut", "sp-cir"],
    widget: "firstweek",
    en: `<p><b>Don't try to use everything.</b> With just these 12 (all free or with a useful free tier) you can get to B1. Everything else in the library is support.</p>
<ol>
<li><b>Language Transfer</b> — audio course, build sentences from minute one (weeks 1–4).</li>
<li><b>Français interactif + Tex's French Grammar</b> — your free university textbook.</li>
<li><b>TV5MONDE</b> (app + site) — exercises on real TV clips.</li>
<li><b>RFI</b> — « Les voisins du 12 bis », then « Journal en français facile ».</li>
<li><b>Duolingo</b> — 10–15 minutes a day for the habit.</li>
<li><b>Flashcards</b> — Anki, or the Cards tab of this site (free on iPhone too).</li>
<li><b>Alice Ayel + Super Easy French</b> — YouTube you understand from day one.</li>
<li><b>Global Storybooks</b> — the same stories in French AND Turkish, with audio.</li>
<li><b>Le Point du FLE</b> — an exercise for every grammar point.</li>
<li><b>WordReference + Glosbe</b> — French–English and French–Turkish dictionaries.</li>
<li><b>Bon Patron + LangCorrect</b> — your writing, corrected.</li>
<li><b>Tandem or HelloTalk</b> + a free local conversation group.</li>
</ol>
<p><b>Turkish safety net:</b> when an English explanation doesn't click, watch the same point in Turkish with Aykut Yavuz.<br>
<b>The biggest free lever:</b> if eligible, the OFII integration contract (CIR) includes free French training up to A2.</p>`,
    tr: `<p><b>Her şeyi kullanmaya çalışma.</b> Sadece bu 12 kaynakla (hepsi ücretsiz veya işe yarar ücretsiz sürümlü) B1'e ulaşabilirsin. Kütüphanedeki geri kalan her şey destek.</p>
<ol>
<li><b>Language Transfer</b> — ilk dakikadan cümle kurduran sesli kurs (1–4. haftalar).</li>
<li><b>Français interactif + Tex's French Grammar</b> — ücretsiz üniversite ders kitabın.</li>
<li><b>TV5MONDE</b> (uygulama + site) — gerçek TV kliplerinde alıştırmalar.</li>
<li><b>RFI</b> — « Les voisins du 12 bis », sonra « Journal en français facile ».</li>
<li><b>Duolingo</b> — alışkanlık için günde 10–15 dakika.</li>
<li><b>Kartlar</b> — Anki veya bu sitenin Kartlar sekmesi (iPhone'da da ücretsiz).</li>
<li><b>Alice Ayel + Super Easy French</b> — ilk günden anlaşılan YouTube.</li>
<li><b>Global Storybooks</b> — aynı hikâyeler Fransızca VE Türkçe, sesli.</li>
<li><b>Le Point du FLE</b> — her dilbilgisi konusu için bir alıştırma.</li>
<li><b>WordReference + Glosbe</b> — Fransızca–İngilizce ve Fransızca–Türkçe sözlükler.</li>
<li><b>Bon Patron + LangCorrect</b> — yazdıkların düzeltilir.</li>
<li><b>Tandem veya HelloTalk</b> + ücretsiz yerel sohbet grubu.</li>
</ol>
<p><b>Türkçe güvenlik ağı:</b> İngilizce açıklama oturmazsa aynı konuyu Aykut Yavuz'dan Türkçe izle.<br>
<b>En büyük ücretsiz kaldıraç:</b> uygunsan OFII uyum sözleşmesi (CIR) A2'ye kadar ücretsiz Fransızca eğitimi içerir.</p>`
  });

  S.push({
    id: "roadmap", icon: "🗺️", widget: "pace",
    t: { en: "Roadmap A0 → C1 and how long it takes", tr: "A0 → C1 yol haritası ve ne kadar sürer", fr: "Feuille de route A0 → C1 et durée" },
    en: `<p><b>Cumulative guided hours</b> (Alliance Française estimates; a Turkish speaker should plan for the upper end — English B2 and living in France help):</p>
${T(["A1", "A2", "B1", "B2", "C1", "C2"], [["60–100 h", "160–200 h", "360–400 h", "560–650 h", "810–950 h", "1,060–1,200 h"]])}
<p>"Hours" = active study: course, exercises, conversation, attentive listening. Background TV only partly counts. Use the calculator below with your own pace.</p>
<h3>Phase 0 — weeks 1–2 — sounds &amp; survival (~15–20 h)</h3>
<p>Read French aloud with the right sounds; greet, introduce yourself, numbers 0–100, the 40 survival phrases. Use: pronunciation guide + prononcer.net · Language Transfer tracks 1–10 · Les voisins du 12 bis 1–4 · Alice Ayel · Duolingo 10 min/day · flashcards.</p>
<h3>Phase 1 — A1 — months 1–2/3</h3>
<p>Talk about yourself, family, routine, shopping, time and dates; ask simple questions. <b>Spine:</b> Français interactif ch. 1–4 (+ Tex's) OR TV5MONDE A1. <b>Daily:</b> finish Language Transfer · flashcards (first 500 words) · Duolingo/Busuu. <b>Listen:</b> Les voisins du 12 bis · Coffee Break · Alice Ayel · Super Easy French · Extr@. <b>Read:</b> Global Storybooks 1–2 with the Turkish version beside. <b>Speak:</b> 1 tandem chat a week. <b>Check:</b> one DELF A1 sample.</p>
<h3>Phase 2 — A2 — months 3–5</h3>
<p>Past and plans, health, housing, paperwork; a short e-mail. <b>Spine:</b> Français interactif ch. 5–9 / TV5MONDE A2. <b>Listen:</b> Journal en français facile WITH the transcript · Podcast Français Facile · Duolingo Podcast · Oli. <b>Read:</b> 1jour1actu · Storybooks 3–5. <b>Write:</b> 100-word diary 3×/week → Bon Patron → LangCorrect → rewrite. <b>Speak:</b> weekly group + tandem. <b>Check:</b> DELF A2 / TCF IRN practice (A2 = first multi-year residence card).</p>
<h3>Phase 3 — B1 — months 5–10</h3>
<p>Tell stories, give opinions, handle most situations alone. <b>Spine:</b> TV5MONDE B1 + Français interactif ch. 10–14 + drills. <b>Listen:</b> innerFrench archive · Easy French Podcast · One Thing in a French Day · a daily soap with French subtitles. <b>Read:</b> TV5MONDE Bibliothèque numérique · Le Petit Nicolas. <b>Check:</b> DELF B1 (never expires; level for the 10-year card).</p>
<h3>Phase 4 — B2 — months 10–16</h3>
<p>Argue, follow news and films, academic and professional French. University expects B2 in practice; DFP Santé B2 for health careers. Native podcasts, HugoDécrypte, series with then without subtitles, texts from your field, DELF B2-style essays. <b>Check:</b> DELF B2 (exempts from the university language test).</p>
<h3>Phase 5 — C1 (year 2+)</h3>
<p>Nuance, speed, specialised vocabulary. DALF C1 / DFP Santé C1. Native media only.</p>
<p class="muted small">The US Foreign Service Institute puts French in its easiest category for English speakers: ~30 weeks full-time (~690 class hours + self-study) for professional proficiency.</p>`,
    tr: `<p><b>Toplam rehberli saatler</b> (Alliance Française tahminleri; Türkçe konuşan biri üst sınırı planlamalı — B2 İngilizce ve Fransa'da yaşamak yardımcı olur):</p>
${T(["A1", "A2", "B1", "B2", "C1", "C2"], [["60–100 s", "160–200 s", "360–400 s", "560–650 s", "810–950 s", "1.060–1.200 s"]])}
<p>"Saat" = aktif çalışma: kurs, alıştırma, sohbet, dikkatli dinleme. Arka planda TV kısmen sayılır. Aşağıdaki hesaplayıcıyı kendi temponla kullan.</p>
<h3>Aşama 0 — 1–2. haftalar — sesler ve hayatta kalma (~15–20 s)</h3>
<p>Fransızcayı doğru seslerle yüksek sesle oku; selamlaş, kendini tanıt, 0–100 sayılar, 40 temel ifade. Kullan: telaffuz rehberi + prononcer.net · Language Transfer 1–10 · Les voisins du 12 bis 1–4 · Alice Ayel · Duolingo günde 10 dk · kartlar.</p>
<h3>Aşama 1 — A1 — 1–2/3. aylar</h3>
<p>Kendin, ailen, günlük rutin, alışveriş, saat ve tarihler; basit sorular. <b>Ana kurs:</b> Français interactif 1–4. bölüm (+ Tex's) VEYA TV5MONDE A1. <b>Her gün:</b> Language Transfer'ı bitir · kartlar (ilk 500 kelime) · Duolingo/Busuu. <b>Dinle:</b> Les voisins du 12 bis · Coffee Break · Alice Ayel · Super Easy French · Extr@. <b>Oku:</b> Global Storybooks 1–2, Türkçesi yanında. <b>Konuş:</b> haftada 1 tandem. <b>Kontrol:</b> bir DELF A1 örneği.</p>
<h3>Aşama 2 — A2 — 3–5. aylar</h3>
<p>Geçmiş ve planlar, sağlık, konut, evrak; kısa bir e-posta. <b>Ana kurs:</b> Français interactif 5–9 / TV5MONDE A2. <b>Dinle:</b> metniyle Journal en français facile · Podcast Français Facile · Duolingo Podcast · Oli. <b>Oku:</b> 1jour1actu · Storybooks 3–5. <b>Yaz:</b> haftada 3 kez 100 kelimelik günlük → Bon Patron → LangCorrect → yeniden yaz. <b>Konuş:</b> haftalık grup + tandem. <b>Kontrol:</b> DELF A2 / TCF IRN pratiği (A2 = ilk çok yıllık oturma kartı).</p>
<h3>Aşama 3 — B1 — 5–10. aylar</h3>
<p>Hikâye anlat, fikir belirt, çoğu durumu tek başına hallet. <b>Ana kurs:</b> TV5MONDE B1 + Français interactif 10–14 + alıştırmalar. <b>Dinle:</b> innerFrench arşivi · Easy French Podcast · One Thing in a French Day · Fransızca altyazılı günlük dizi. <b>Oku:</b> TV5MONDE Bibliothèque numérique · Le Petit Nicolas. <b>Kontrol:</b> DELF B1 (süresiz; 10 yıllık kart seviyesi).</p>
<h3>Aşama 4 — B2 — 10–16. aylar</h3>
<p>Tartış, haberleri ve filmleri takip et, akademik ve mesleki Fransızca. Üniversite pratikte B2 bekler; sağlık kariyerleri için DFP Santé B2. Anadil podcast'leri, HugoDécrypte, önce altyazılı sonra altyazısız diziler, alanından metinler, DELF B2 tarzı kompozisyonlar. <b>Kontrol:</b> DELF B2 (üniversite dil testinden muaf tutar).</p>
<h3>Aşama 5 — C1 (2. yıl+)</h3>
<p>Nüans, hız, uzmanlık kelimeleri. DALF C1 / DFP Santé C1. Sadece anadil medyası.</p>`
  });

  S.push({
    id: "routines", icon: "⏰",
    t: { en: "Routines & habits (and living with a French speaker)", tr: "Rutinler ve alışkanlıklar (ve Fransızca konuşan biriyle yaşamak)", fr: "Routines et habitudes (et vivre avec un francophone)" },
    en: `<h3>Daily minimum (30–45 min — keeps the chain going on bad days)</h3>
<p>10 min flashcards · 10–15 min app · 15–20 min of your main course (one lesson).</p>
<h3>Daily ideal in the first months (60–90 min)</h3>
<p>+ 20 min listening (podcast / YouTube for learners) · + 5 min pronunciation drill.</p>
<h3>Every week</h3>
<p>1–2 conversation sessions · 1 episode of a series · 1 corrected text · 1 review of your error log and the classic mistakes.</p>
<h3>Every month</h3>
<p>One practice test (DELF sample) to see progress. Note your hours (the Progress page does it for you).</p>
<h3>Immersion habits at home</h3>
<ul><li>Sticky notes on objects WITH the article, one colour per gender: la porte, le frigo, la fenêtre.</li>
<li>Narrate what you do, out loud: « Je prépare le café. J'ouvre la fenêtre. Je cherche mes clés. »</li>
<li>Shopping list and to-do list in French.</li>
<li>French radio or a podcast while cooking or walking (helps rhythm; doesn't replace active study).</li>
<li>From A2: phone and apps in French. From B1: social media in French.</li>
<li>Errands in French: bakery, pharmacy, post office — the best real-life lessons, and free.</li></ul>
<h3>Living with a French speaker (tips for both of you)</h3>
<ul><li>A daily « French moment» (breakfast, dinner or a walk): French only, 15–30 minutes.</li>
<li>The native speaker: short sentences, slower, repeat or rephrase before switching to English.</li>
<li>Correct by <b>recasting</b>: repeat the sentence correctly and continue — don't stop at every mistake.</li>
<li>Agree on a signal (« Pause — en anglais ? ») for when it's too much. Frustration kills motivation.</li>
<li>Do real tasks together: the learner speaks, the native is the safety net (calls, shops, the doctor's receptionist…).</li>
<li>From A2: watch the same series together with French audio + French subtitles.</li></ul>
<h3>What actually makes people succeed</h3>
<ul><li>Short daily sessions beat long weekly ones.</li><li>One main course, finished. Not ten courses started.</li>
<li>Speak early, badly, often. Mistakes are the material you learn from.</li><li>Listening is the foundation: you can't say what you've never heard.</li></ul>`,
    tr: `<h3>Günlük minimum (30–45 dk — kötü günlerde zinciri korur)</h3>
<p>10 dk kartlar · 10–15 dk uygulama · 15–20 dk ana kursun (bir ders).</p>
<h3>İlk aylarda ideal gün (60–90 dk)</h3>
<p>+ 20 dk dinleme (podcast / öğrenciler için YouTube) · + 5 dk telaffuz alıştırması.</p>
<h3>Her hafta</h3>
<p>1–2 sohbet seansı · bir dizi bölümü · düzeltilmiş bir metin · hata defterini ve klasik hataları bir kez gözden geçir.</p>
<h3>Her ay</h3>
<p>İlerlemeyi görmek için bir deneme sınavı (DELF örneği). Saatlerini not et (İlerleme sayfası bunu senin için yapar).</p>
<h3>Evde dalış alışkanlıkları</h3>
<ul><li>Eşyalara artikelleriyle yapışkan not, her cinsiyete bir renk: la porte, le frigo, la fenêtre.</li>
<li>Yaptığını yüksek sesle anlat: « Je prépare le café. J'ouvre la fenêtre. Je cherche mes clés. »</li>
<li>Alışveriş ve yapılacaklar listesi Fransızca.</li>
<li>Yemek yaparken veya yürürken Fransızca radyo/podcast (ritme yardım eder; aktif çalışmanın yerini tutmaz).</li>
<li>A2'den itibaren: telefon ve uygulamalar Fransızca. B1'den itibaren: sosyal medya Fransızca.</li>
<li>Fransızca ayak işleri: fırın, eczane, postane — en iyi ve ücretsiz gerçek dersler.</li></ul>
<h3>Fransızca konuşan biriyle yaşamak (ikiniz için ipuçları)</h3>
<ul><li>Her gün bir « Fransızca anı » (kahvaltı, akşam yemeği veya yürüyüş): sadece Fransızca, 15–30 dakika.</li>
<li>Anadili Fransızca olan: kısa cümleler, daha yavaş, İngilizceye geçmeden önce tekrar et veya başka türlü söyle.</li>
<li><b>Yeniden söyleyerek</b> düzelt: cümleyi doğru tekrarla ve devam et — her hatada durma.</li>
<li>Çok geldiğinde bir işaret belirleyin (« Pause — en anglais ? »). Hayal kırıklığı motivasyonu öldürür.</li>
<li>Gerçek işleri birlikte yapın: öğrenen konuşur, anadili olan güvenlik ağıdır (telefonlar, dükkânlar, doktor sekreteri…).</li>
<li>A2'den itibaren: aynı diziyi birlikte Fransızca ses + Fransızca altyazıyla izleyin.</li></ul>
<h3>İnsanları gerçekten başarılı kılan şey</h3>
<ul><li>Kısa günlük oturumlar uzun haftalık oturumlardan iyidir.</li><li>Tek bir ana kurs, bitirilmiş. On başlanmış kurs değil.</li>
<li>Erken, kötü, sık konuş. Hatalar öğrendiğin malzemedir.</li><li>Dinlemek temeldir: hiç duymadığını söyleyemezsin.</li></ul>`
  });

  S.push({
    id: "budget", icon: "💶",
    t: { en: "Budget plans: 0 € / ~10 € / ~40 € a month", tr: "Bütçe planları: ayda 0 € / ~10 € / ~40 €", fr: "Budgets : 0 € / ~10 € / ~40 € par mois" },
    en: `<h3>0 € a month — everything you need to reach B1 is free</h3>
<p>Main course: Français interactif or TV5MONDE · speaking start: Language Transfer · daily: Duolingo (free) + flashcards · listening: RFI, podcasts, YouTube · reading: Global Storybooks, 1jour1actu, TV5MONDE Bibliothèque numérique · writing: Bon Patron + LangCorrect · speaking: Tandem / HelloTalk free tiers + free local groups · OFII CIR training if eligible · library card (free or cheap, depends on the town).</p>
<h3>~10 € a month</h3>
<p>The 0 € plan + second-hand graded readers or a textbook with answer key, OR one small upgrade (e.g. Readlang ~6 $/month), OR put it aside for the next exam.</p>
<h3>~40 € a month</h3>
<p>The 0 € plan + 2–4 sessions a month with a cheap online community tutor (italki / Preply, ~5–15 $ an hour). From A2, this is the best use of money: speaking with correction.</p>
<h3>Exam budget (2026 examples, set by each centre)</h3>
${T(["Exam", "Fee"], [["DELF A2", "~130 €"], ["DELF B1", "~140–160 €"], ["DELF B2", "~140–200 €"], ["TCF IRN", "~174–200 €"], ["TEF IRN", "~180 €"], ["Civic exam", "~60–80 €"]])}
<h3>Don't pay for</h3>
<ul><li>"Lifetime" app deals or yearly subscriptions in the first month — test the free tier first.</li>
<li>Several paid apps at once (they overlap).</li>
<li>A language school you could replace with the free plan + a cheap tutor (a university intensive course is ~6.50 € per hour).</li></ul>`,
    tr: `<h3>Ayda 0 € — B1'e ulaşmak için gereken her şey ücretsiz</h3>
<p>Ana kurs: Français interactif veya TV5MONDE · konuşmaya başlama: Language Transfer · günlük: Duolingo (ücretsiz) + kartlar · dinleme: RFI, podcast'ler, YouTube · okuma: Global Storybooks, 1jour1actu, TV5MONDE Bibliothèque numérique · yazma: Bon Patron + LangCorrect · konuşma: Tandem / HelloTalk ücretsiz sürümleri + ücretsiz yerel gruplar · uygunsan OFII CIR eğitimi · kütüphane kartı (şehre göre ücretsiz veya ucuz).</p>
<h3>Ayda ~10 €</h3>
<p>0 € planı + ikinci el seviyeli kitaplar veya cevap anahtarlı bir ders kitabı, VEYA küçük bir yükseltme (ör. Readlang ~6 $/ay), VEYA sonraki sınav için kenara koy.</p>
<h3>Ayda ~40 €</h3>
<p>0 € planı + ayda 2–4 kez ucuz bir çevrimiçi topluluk eğitmeni (italki / Preply, saati ~5–15 $). A2'den itibaren paranın en iyi kullanımı: düzeltmeli konuşma.</p>
<h3>Sınav bütçesi (2026 örnekleri, her merkez belirler)</h3>
${T(["Sınav", "Ücret"], [["DELF A2", "~130 €"], ["DELF B1", "~140–160 €"], ["DELF B2", "~140–200 €"], ["TCF IRN", "~174–200 €"], ["TEF IRN", "~180 €"], ["Yurttaşlık sınavı", "~60–80 €"]])}
<h3>Bunlara para verme</h3>
<ul><li>İlk ayda "ömür boyu" uygulama fırsatları veya yıllık abonelikler — önce ücretsiz sürümü dene.</li>
<li>Aynı anda birkaç ücretli uygulama (birbirleriyle örtüşürler).</li>
<li>Ücretsiz plan + ucuz bir eğitmenle değiştirebileceğin bir dil okulu (bir üniversite yoğun kursu saati ~6,50 €).</li></ul>`
  });

  S.push({
    id: "easyhard", icon: "⚖️",
    t: { en: "What will be easy, what will be hard", tr: "Ne kolay olacak, ne zor olacak", fr: "Ce qui sera facile, ce qui sera difficile" },
    en: `<h3>Your head start</h3>
<ul><li><b>Sounds:</b> Turkish already has the vowels most learners fight with for months: ü = French u (tu), ö = eu (deux), u = ou (vous).</li>
<li><b>Vocabulary:</b> Turkish borrowed about 5,000 words from French; English B2 adds thousands of cognates (nation, important, possible…).</li>
<li><b>Free pronunciation key:</b> the Turkish spelling of a loanword shows how French sounds: şoför = chauffeur · kuaför = coiffeur · asansör = ascenseur · kruvasan = croissant · ruj = rouge.</li>
<li><b>tu / vous</b> works like <b>sen / siz</b>, and vous is also the plural "you".</li>
<li><b>Verbs change with the person</b>, like in Turkish: geliyorum / geliyorsun → je viens / tu viens.</li>
<li><b>Rhythm:</b> French stresses the END of each word group; Turkish mostly stresses the end of the word.</li>
<li><b>Object pronouns go BEFORE the verb</b>, like Turkish: Onu görüyorum → Je le vois.</li>
<li><b>English B2</b> opens the best free courses in the world.</li></ul>
<h3>Your main challenges (plan extra repetition)</h3>
<ul><li><b>Gender:</b> every noun is masculine or feminine → always learn a noun WITH its article.</li>
<li><b>Articles everywhere:</b> le / la / l' / les, un / une / des, du / de la.</li>
<li><b>Spelling ≠ pronunciation:</b> many silent letters and letter groups (eau, ou, oi, ch, gn).</li>
<li><b>Nasal vowels</b> and the French <b>r</b>.</li>
<li><b>Word order</b> S-V-O: the verb comes early.</li>
<li><b>Prepositions instead of suffixes:</b> -de/-e/-den become à, en, dans, de, chez…</li>
<li><b>Relative clauses AFTER the noun</b> with qui / que / où / dont.</li>
<li><b>Agreement</b> of adjectives and some past participles.</li>
<li><b>Two auxiliaries</b> (avoir / être) and passé composé vs imparfait.</li></ul>`,
    tr: `<h3>Avantajların</h3>
<ul><li><b>Sesler:</b> Türkçede çoğu öğrencinin aylarca uğraştığı ünlüler zaten var: ü = Fransızca u (tu), ö = eu (deux), u = ou (vous).</li>
<li><b>Kelimeler:</b> Türkçe Fransızcadan yaklaşık 5.000 kelime aldı; B2 İngilizce binlerce ortak kelime ekler (nation, important, possible…).</li>
<li><b>Ücretsiz telaffuz anahtarı:</b> bir alıntının Türkçe yazımı Fransızcanın nasıl okunduğunu gösterir: şoför = chauffeur · kuaför = coiffeur · asansör = ascenseur · kruvasan = croissant · ruj = rouge.</li>
<li><b>tu / vous</b> tam <b>sen / siz</b> gibi çalışır; vous aynı zamanda çoğul "siz".</li>
<li><b>Fiiller kişiye göre değişir</b>, Türkçedeki gibi: geliyorum / geliyorsun → je viens / tu viens.</li>
<li><b>Ritim:</b> Fransızca her kelime grubunun SONUNU vurgular; Türkçe çoğunlukla kelimenin sonunu.</li>
<li><b>Nesne zamirleri fiilden ÖNCE gelir</b>, Türkçedeki gibi: Onu görüyorum → Je le vois.</li>
<li><b>B2 İngilizce</b> dünyanın en iyi ücretsiz kurslarını açar.</li></ul>
<h3>Ana zorlukların (fazladan tekrar planla)</h3>
<ul><li><b>Cinsiyet:</b> her isim eril veya dişil → ismi her zaman artikeliyle öğren.</li>
<li><b>Her yerde artikel:</b> le / la / l' / les, un / une / des, du / de la.</li>
<li><b>Yazım ≠ telaffuz:</b> çok sayıda okunmayan harf ve harf grubu (eau, ou, oi, ch, gn).</li>
<li><b>Genizden ünlüler</b> ve Fransız <b>r</b>'si.</li>
<li><b>Sözcük dizimi</b> ÖYN: fiil erken gelir.</li>
<li><b>Ekler yerine edatlar:</b> -de/-e/-den → à, en, dans, de, chez…</li>
<li><b>Sıfat cümlecikleri ismin ARDINDAN</b> qui / que / où / dont ile gelir.</li>
<li><b>Uyum:</b> sıfatlar ve bazı geçmiş zaman ortaçları.</li>
<li><b>İki yardımcı fiil</b> (avoir / être) ve passé composé ile imparfait seçimi.</li></ul>`
  });

  S.push({
    id: "pron", icon: "👄", widget: "drills",
    t: { en: "Pronunciation & spelling: the Turkish → French key", tr: "Telaffuz ve yazım: Türkçe → Fransızca anahtar", fr: "Prononciation et orthographe : la clé turc → français" },
    en: `<p><b>Golden rule:</b> read French with French rules. In Turkish 1 letter = 1 sound; in French, groups of letters make one sound and many final letters are silent. Hints use Turkish letters; "~" = nasal vowel. Tap 🔊 in the drills to hear each sound.</p>
<h3>Vowels</h3>${T(["Spelling", "Example", "Turkish key"], VOWELS)}
<h3>Nasal vowels (the real novelty — practise daily in week 1)</h3>
<p>Air goes through the nose; the n/m itself is NOT pronounced.</p>${T(["Spelling", "Example", "Turkish key"], NASALS)}
<p><b>Not nasal when a vowel follows the n/m:</b> un « e~ » / une « ün » · bon « bo~ » / bonne « bon » · fin « fe~ » / fine « fin ». Many masculine/feminine pairs work like this!</p>
<h3>Consonants</h3>${T(["Spelling", "Example", "Turkish key"], CONS)}
<h3>Silent letters (the big one)</h3>
<ul><li>Final consonants are usually silent: petit, grand, vous, nous, trop, beaucoup, nez, prix. Often pronounced: c, r, f, l ("CaReFuL"): lac, mer, neuf, sel — but not -er infinitives: parler = « parlé ».</li>
<li>Final e is silent (except le, je, ce): table = « tabl ». It makes the consonant before it audible: petit « pöti » / petite « pötit ».</li>
<li>The verb ending <b>-ent</b> (they) is SILENT: ils parlent = « il parl ».</li>
<li>Plural -s / -es is silent: les chats = « le şa ». You hear the plural in the article.</li></ul>
<h3>Linking (liaison)</h3>
<p>les amis = « le-zami » · vous avez = « vu-zave » · ils ont = « il-zo~ » (they have) vs ils sont = « il-so~ » (they are) — liaison changes the meaning!</p>
<h3>Accents</h3>
<p>On e they change the sound (é closed, è/ê open); ç = s; on other letters they distinguish words: a (has) / à (to) · ou (or) / où (where).</p>
<h3>Numbers trap</h3>
<p>70 = soixante-dix (60+10) · 80 = quatre-vingts (4×20) · 90 = quatre-vingt-dix. Belgium &amp; Switzerland: septante, nonante (huitante in parts of Switzerland).</p>`,
    tr: `<p><b>Altın kural:</b> Fransızcayı Fransızca kurallarla oku. Türkçede 1 harf = 1 ses; Fransızcada harf grupları tek ses yapar ve birçok son harf okunmaz. İpuçları Türkçe harflerle; "~" = genizden ünlü. Her sesi duymak için alıştırmalarda 🔊'a dokun.</p>
<h3>Ünlüler</h3>${T(["Yazım", "Örnek", "Türkçe anahtar"], VOWELS)}
<h3>Genizden ünlüler (asıl yenilik — ilk hafta her gün çalış)</h3>
<p>Hava burundan geçer; n/m'nin kendisi OKUNMAZ.</p>${T(["Yazım", "Örnek", "Türkçe anahtar"], NASALS)}
<p><b>n/m'den sonra ünlü gelirse genizden değildir:</b> un « e~ » / une « ün » · bon « bo~ » / bonne « bon » · fin « fe~ » / fine « fin ». Birçok eril/dişil çift böyle çalışır!</p>
<h3>Ünsüzler</h3>${T(["Yazım", "Örnek", "Türkçe anahtar"], CONS)}
<h3>Okunmayan harfler (en önemlisi)</h3>
<ul><li>Son ünsüzler genelde okunmaz: petit, grand, vous, nous, trop, beaucoup, nez, prix. Sıklıkla okunanlar: c, r, f, l ("CaReFuL"): lac, mer, neuf, sel — ama -er mastarları hariç: parler = « parlé ».</li>
<li>Sondaki e okunmaz (le, je, ce hariç): table = « tabl ». Önündeki ünsüzü duyulur yapar: petit « pöti » / petite « pötit ».</li>
<li>Fiil sonu <b>-ent</b> (onlar) OKUNMAZ: ils parlent = « il parl ».</li>
<li>Çoğul -s / -es okunmaz: les chats = « le şa ». Çoğulu artikelden duyarsın.</li></ul>
<h3>Bağlama (liaison)</h3>
<p>les amis = « le-zami » · vous avez = « vu-zave » · ils ont = « il-zo~ » (onların var) / ils sont = « il-so~ » (onlar …dır) — bağlama anlamı değiştirir!</p>
<h3>Aksanlar</h3>
<p>e üzerinde sesi değiştirir (é kapalı, è/ê açık); ç = s; diğer harflerde kelimeleri ayırır: a (var) / à (-e, -de) · ou (veya) / où (nerede).</p>
<h3>Sayı tuzağı</h3>
<p>70 = soixante-dix (60+10) · 80 = quatre-vingts (4×20) · 90 = quatre-vingt-dix. Belçika ve İsviçre: septante, nonante (İsviçre'nin bazı yerlerinde huitante).</p>`
  });

  const GMAP_EN = `
<h3>1) Word order</h3><p>Ben bir elma yiyorum. → Je mange une pomme. (S-V-O)<br>kırmızı bir araba → une voiture rouge (most adjectives AFTER the noun). Before: beau, joli, bon, mauvais, petit, grand, jeune, vieux, nouveau, premier — une petite maison.</p>
<h3>2) Articles (the big new thing)</h3><p>bir → un / une; plural "some" = des. No Turkish "the" → le / la / l' / les.<br>
Clue from Turkish: the accusative often marks a DEFINITE object — Kitabı okudum → J'ai lu <b>le</b> livre · Kitap okudum → J'ai lu <b>un</b> livre.<br>
Uncountable "some" = du / de la / de l' — Ekmek aldım → J'ai acheté <b>du</b> pain. General statements: Kahve severim → J'aime <b>le</b> café.<br>
After negation un/une/du/de la/des → <b>de</b>: Je n'ai pas <b>de</b> pain.</p>
<h3>3) Gender — learn every noun with un/une or le/la</h3><p>Usually <b>feminine</b>: -tion/-sion, -té, -ette, -ance/-ence, -ure, -ude, -ée (but le lycée, le musée), -ie.<br>Usually <b>masculine</b>: -ment, -age (but la page, la plage, l'image), -eau (but l'eau, la peau), -isme, -oir, -al.</p>
<h3>4) Subject pronouns are compulsory</h3><p>Geliyorum → <b>Je</b> viens. je, tu, il/elle/on, nous, vous, ils/elles. « on » = people, and in speech = "we": On y va ? = Gidelim mi?</p>
<h3>5) Case suffixes → prepositions</h3>
${T(["Turkish", "French"], [["Okul<b>a</b> gidiyorum.", "Je vais <b>à</b> l'école. (à+le = au, à+les = aux)"], ["Doktor<b>a</b> gidiyorum.", "Je vais <b>chez</b> le médecin."], ["Ev<b>de</b>yim. · çanta<b>da</b>", "Je suis <b>à</b> la maison. · <b>dans</b> le sac"], ["İstanbul'<b>dan</b> geliyorum.", "Je viens <b>d'</b>Istanbul. (de+le = du)"], ["arkadaşım<b>la</b>", "<b>avec</b> mon ami"], ["Ayşe'<b>nin</b> kitabı · evin kapısı", "le livre <b>d'</b>Ayşe · la porte <b>de</b> la maison (reversed!)"], ["Türkiye'de / Fransa'ya", "<b>en</b> Turquie / <b>en</b> France · <b>à</b> Paris · <b>au</b> Portugal · <b>aux</b> États-Unis"]])}
<h3>6) Var / yok, to be, to have</h3><p>Masada su var → <b>Il y a</b> de l'eau sur la table. · Bir kedim var → <b>J'ai</b> un chat. · Öğrenciyim → <b>Je suis</b> étudiante.<br><b>avoir</b>, not être, for age, hunger, thirst, cold, heat, fear, need: 30 yaşındayım → J'ai 30 ans · Acıktım → J'ai faim · Üşüyorum → J'ai froid.</p>
<h3>7) Negation</h3><p>Gelmiyorum → Je <b>ne</b> viens <b>pas</b> (speech drops ne). ne… jamais · ne… plus · ne… rien · ne… personne.</p>
<h3>8) Questions (no "mi")</h3><p>Geliyor musun? → Tu viens ? (rising voice) / Est-ce que tu viens ? / Viens-tu ?<br>kim = qui · ne = que/quoi · nerede = où · ne zaman = quand · nasıl = comment · neden = pourquoi · kaç = combien · hangi = quel/quelle</p>
<h3>9) Tenses — rough Turkish equivalents</h3>
${T(["Turkish", "French", "Example"], [["-iyor / -ir", "présent", "je mange (yiyorum / yerim)"], ["-di", "passé composé", "j'ai mangé (yedim)"], ["-iyordu / -irdi (used to)", "imparfait", "je mangeais (yiyordum)"], ["-ecek", "futur proche / futur simple", "je vais manger / je mangerai"], ["-irdi / -se", "conditionnel", "Vaktim olsa gelirdim → Si j'avais le temps, je viendrais."], ["-miş", "no tense: apparemment, il paraît que, il serait parti", "(gitmiş)"], ["-meli", "devoir / il faut", "Gitmeliyim → Je dois partir."], ["-ebil", "pouvoir", "Gelebilirim → Je peux venir."], ["-mek istiyorum", "vouloir (politer: je voudrais)", "Gitmek istiyorum → Je veux partir."], ["-mesini istiyorum", "subjonctif", "Gelmeni istiyorum → Je veux que tu viennes."]])}
<p>Passé composé with <b>être</b> for movement/change verbs (aller, venir, partir, arriver, entrer, sortir, monter, descendre, naître, mourir, rester, tomber…) and all reflexive verbs; the participle agrees: elle est allée.</p>
<h3>10) Relative clauses (participle → qui / que / où / dont)</h3>
${T(["Turkish", "French"], [["gelen adam", "l'homme <b>qui</b> vient"], ["okuduğum kitap", "le livre <b>que</b> je lis"], ["yaşadığım şehir", "la ville <b>où</b> j'habite"], ["bahsettiğim film", "le film <b>dont</b> je parle"]])}
<h3>11) Possessives agree with the THING owned</h3><p>annem / babam → <b>ma</b> mère / <b>mon</b> père · annesi → <b>sa</b> mère (his OR her) · kocası → <b>son</b> mari. Before a vowel: mon amie, son école.</p>
<h3>12) Object pronouns before the verb (like Turkish)</h3><p>Onu görüyorum → Je <b>le</b> vois · Ona veriyorum → Je <b>lui</b> donne · Onu ona veriyorum → Je le lui donne · Onu görmek istiyorum → Je veux le voir · Oraya gidiyorum → J'<b>y</b> vais · Ondan istiyorum → J'<b>en</b> veux.</p>`;
  const GMAP_TR = `
<h3>1) Kelime sırası</h3><p>Ben bir elma yiyorum. → Je mange une pomme. (Özne-Yüklem-Nesne)<br>kırmızı bir araba → une voiture rouge (çoğu sıfat isimden SONRA gelir). Önce gelenler: beau, joli, bon, mauvais, petit, grand, jeune, vieux, nouveau, premier — une petite maison.</p>
<h3>2) Artikeller (asıl yenilik)</h3><p>bir → un / une; çoğul "bazı" = des. Türkçede "the" yok → le / la / l' / les.<br>
Türkçeden ipucu: belirtme hâli (-ı) çoğu zaman BELİRLİ nesneyi gösterir — Kitabı okudum → J'ai lu <b>le</b> livre · Kitap okudum → J'ai lu <b>un</b> livre.<br>
Sayılamayanlar için "biraz" = du / de la / de l' — Ekmek aldım → J'ai acheté <b>du</b> pain. Genel ifadeler: Kahve severim → J'aime <b>le</b> café.<br>
Olumsuzlukta un/une/du/de la/des → <b>de</b>: Je n'ai pas <b>de</b> pain.</p>
<h3>3) Cinsiyet — her ismi un/une veya le/la ile öğren</h3><p>Genelde <b>dişil</b>: -tion/-sion, -té, -ette, -ance/-ence, -ure, -ude, -ée (ama le lycée, le musée), -ie.<br>Genelde <b>eril</b>: -ment, -age (ama la page, la plage, l'image), -eau (ama l'eau, la peau), -isme, -oir, -al.</p>
<h3>4) Özne zamirleri zorunlu</h3><p>Geliyorum → <b>Je</b> viens. je, tu, il/elle/on, nous, vous, ils/elles. « on » = insanlar, konuşmada da "biz": On y va ? = Gidelim mi?</p>
<h3>5) Hâl ekleri → edatlar</h3>
${T(["Türkçe", "Fransızca"], [["Okul<b>a</b> gidiyorum.", "Je vais <b>à</b> l'école. (à+le = au, à+les = aux)"], ["Doktor<b>a</b> gidiyorum.", "Je vais <b>chez</b> le médecin."], ["Ev<b>de</b>yim. · çanta<b>da</b>", "Je suis <b>à</b> la maison. · <b>dans</b> le sac"], ["İstanbul'<b>dan</b> geliyorum.", "Je viens <b>d'</b>Istanbul. (de+le = du)"], ["arkadaşım<b>la</b>", "<b>avec</b> mon ami"], ["Ayşe'<b>nin</b> kitabı · evin kapısı", "le livre <b>d'</b>Ayşe · la porte <b>de</b> la maison (sıra ters!)"], ["Türkiye'de / Fransa'ya", "<b>en</b> Turquie / <b>en</b> France · <b>à</b> Paris · <b>au</b> Portugal · <b>aux</b> États-Unis"]])}
<h3>6) Var / yok, olmak, sahip olmak</h3><p>Masada su var → <b>Il y a</b> de l'eau sur la table. · Bir kedim var → <b>J'ai</b> un chat. · Öğrenciyim → <b>Je suis</b> étudiante.<br>Yaş, açlık, susuzluk, üşümek, sıcak, korku, ihtiyaç için être değil <b>avoir</b>: 30 yaşındayım → J'ai 30 ans · Acıktım → J'ai faim · Üşüyorum → J'ai froid.</p>
<h3>7) Olumsuzluk</h3><p>Gelmiyorum → Je <b>ne</b> viens <b>pas</b> (konuşmada ne düşer). ne… jamais (asla) · ne… plus (artık) · ne… rien (hiçbir şey) · ne… personne (kimse).</p>
<h3>8) Sorular ("mi" yok)</h3><p>Geliyor musun? → Tu viens ? (ses yükselir) / Est-ce que tu viens ? / Viens-tu ?<br>kim = qui · ne = que/quoi · nerede = où · ne zaman = quand · nasıl = comment · neden = pourquoi · kaç = combien · hangi = quel/quelle</p>
<h3>9) Zamanlar — kabaca Türkçe karşılıkları</h3>
${T(["Türkçe", "Fransızca", "Örnek"], [["-iyor / -ir", "présent", "je mange (yiyorum / yerim)"], ["-di", "passé composé", "j'ai mangé (yedim)"], ["-iyordu / -irdi (eskiden)", "imparfait", "je mangeais (yiyordum)"], ["-ecek", "futur proche / futur simple", "je vais manger / je mangerai"], ["-irdi / -se", "conditionnel", "Vaktim olsa gelirdim → Si j'avais le temps, je viendrais."], ["-miş", "zaman yok: apparemment, il paraît que, il serait parti", "(gitmiş)"], ["-meli", "devoir / il faut", "Gitmeliyim → Je dois partir."], ["-ebil", "pouvoir", "Gelebilirim → Je peux venir."], ["-mek istiyorum", "vouloir (kibarı: je voudrais)", "Gitmek istiyorum → Je veux partir."], ["-mesini istiyorum", "subjonctif", "Gelmeni istiyorum → Je veux que tu viennes."]])}
<p>Hareket/değişim fiilleri (aller, venir, partir, arriver, entrer, sortir, monter, descendre, naître, mourir, rester, tomber…) ve tüm dönüşlü fiiller passé composé'de <b>être</b> alır; ortaç uyum gösterir: elle est allée.</p>
<h3>10) Sıfat cümlecikleri (ortaç → qui / que / où / dont)</h3>
${T(["Türkçe", "Fransızca"], [["gelen adam", "l'homme <b>qui</b> vient"], ["okuduğum kitap", "le livre <b>que</b> je lis"], ["yaşadığım şehir", "la ville <b>où</b> j'habite"], ["bahsettiğim film", "le film <b>dont</b> je parle"]])}
<h3>11) İyelikler sahip olunan ŞEYE uyar</h3><p>annem / babam → <b>ma</b> mère / <b>mon</b> père · annesi → <b>sa</b> mère (onun: erkek VEYA kadın) · kocası → <b>son</b> mari. Ünlüden önce: mon amie, son école.</p>
<h3>12) Nesne zamirleri fiilden önce (Türkçedeki gibi)</h3><p>Onu görüyorum → Je <b>le</b> vois · Ona veriyorum → Je <b>lui</b> donne · Onu ona veriyorum → Je le lui donne · Onu görmek istiyorum → Je veux le voir · Oraya gidiyorum → J'<b>y</b> vais · Ondan istiyorum → J'<b>en</b> veux.</p>`;
  const GORDER = lang => T([lang === "tr" ? "Seviye" : "Level", lang === "tr" ? "Dilbilgisi sırası" : "Grammar, in the order you need it"], Object.entries(lang === "tr" ? GRAMMAR_ORDER_TR : GRAMMAR_ORDER).map(([k, v]) => [`<b>${k}</b>`, v]));

  S.push({
    id: "grammar", icon: "🧩",
    t: { en: "Grammar map: Turkish (and English) → French", tr: "Dilbilgisi haritası: Türkçe (ve İngilizce) → Fransızca", fr: "Carte de grammaire : turc (et anglais) → français" },
    en: GMAP_EN + `<h3>Grammar in the order you need it</h3>${GORDER("en")}`,
    tr: GMAP_TR + `<h3>İhtiyaç sırasına göre dilbilgisi</h3>${GORDER("tr")}`
  });

  S.push({
    id: "loanwords", icon: "🤝",
    t: { en: "Words you already know", tr: "Zaten bildiğin kelimeler", fr: "Les mots que tu connais déjà" },
    res: ["derkunt", "tdk"],
    en: `<p>Turkish took about <b>5,000 words</b> from French: the TDK dictionary counted 4,977 French-origin words in 2005 — about 72% of all its words of Western origin (Vural &amp; Böler 2008). Flip through the "Words you already know" deck: 140 of them with audio.</p>
<h3>French words hidden in Turkish (* = meaning shifted, see False friends)</h3>
${T(["Theme", "Turkish → French"], [
      ["Transport &amp; city", "otobüs (autobus), otomobil, taksi, metro, kamyon (camion), bisiklet (bicyclette), şoför (chauffeur), garaj, bulvar (boulevard), asansör (ascenseur), apartman* (appartement)"],
      ["Clothes &amp; beauty", "pantolon, kravat, manto (manteau), palto (paletot), bere (béret), fular (foulard), eşarp* (écharpe), bluz*, mayo* (maillot), sütyen* (soutien-gorge), kostüm, ruj (rouge), parfüm, kuaför"],
      ["Home", "kanepe (canapé), abajur (abat-jour), şömine (cheminée), lavabo, duş (douche), tuvalet*, parke (parquet), deterjan, ekran (écran), televizyon, şarj (charge), pil (pile)"],
      ["Food &amp; café", "restoran, menü, adisyon (addition = the bill), kruvasan, jambon, mayonez, krem, püre (purée), konserve"],
      ["People &amp; daily", "mersi, pardon, randevu, sürpriz, kuzen / kuzin, ekip (équipe), direktör, dosya (dossier), abone (abonné), rötar (retard), avantaj, şans, prestij"],
      ["School &amp; culture", "lise (lycée), üniversite, fakülte, enstitü, kültür, müzik, aktör / aktris, dekor, jüri, vitrin, kartpostal"],
      ["Ideas", "problem, sistem, program, ekonomi, demokrasi, teknik, kategori, referans, enerji, prensip"],
      ["Health &amp; body", "klinik, ambulans, pansuman (pansement), masaj, egzersiz, terapi, refleks, tendon, anatomi, sendrom, kronik, migren, romatizma, protez (prothèse), ortopedi"]])}
<p><b>Method:</b> meet a new French word → "Is it in Turkish?" → say it the Turkish way → fix the vowels and drop the silent letters. Often 80% right on the first try.</p>
<h3>Tricks to guess the French word</h3>
<ul><li>Turkish <b>-syon</b> = French <b>-tion</b>: televizyon → télévision, rehabilitasyon → réhabilitation.</li>
<li>Turkish <b>ş</b> often = French <b>ch</b>: şans → chance, şömine → cheminée, şampiyon → champion.</li>
<li>Turkish <b>j</b> = French <b>j/g</b> (same sound!): masaj → massage, garaj → garage.</li></ul>
<h3>English → French patterns (thousands of words for free)</h3>
${T(["English", "French", "Examples"], [["-tion", "-tion", "nation, information, situation (said « -syo~ »)"], ["-ty", "-té", "university → université, quality → qualité"], ["-ous", "-eux / -euse", "famous → fameux, delicious → délicieux"], ["-ic, -ical", "-ique", "music → musique, physical → physique"], ["-ly", "-ment", "rapidly → rapidement, exactly → exactement"], ["-or", "-eur", "actor → acteur, doctor → docteur, colour → couleur"], ["-ive", "-if / -ive", "active → actif, positive → positif"], ["-ize", "-iser", "organize → organiser, realize → réaliser"], ["-ist, -ism", "-iste, -isme", "tourist → touriste, optimism → optimisme"], ["-ance, -ence", "-ance, -ence", "chance, patience, différence"], ["lost s → ^", "", "forest → forêt, hospital → hôpital, feast → fête"], ["s- → é- / es-", "", "student → étudiant, school → école, space → espace"]])}`,
    tr: `<p>Türkçe Fransızcadan yaklaşık <b>5.000 kelime</b> aldı: TDK sözlüğü 2005'te 4.977 Fransızca kökenli kelime saydı — Batı kökenli kelimelerinin yaklaşık %72'si (Vural ve Böler 2008). "Zaten bildiğin kelimeler" destesine göz at: 140 tanesi sesli.</p>
<h3>Türkçede gizli Fransızca kelimeler (* = anlamı kaymış, Yanlış dostlar'a bak)</h3>
${T(["Tema", "Türkçe → Fransızca"], [
      ["Ulaşım ve şehir", "otobüs (autobus), otomobil, taksi, metro, kamyon (camion), bisiklet (bicyclette), şoför (chauffeur), garaj, bulvar (boulevard), asansör (ascenseur), apartman* (appartement)"],
      ["Giyim ve güzellik", "pantolon, kravat, manto (manteau), palto (paletot), bere (béret), fular (foulard), eşarp* (écharpe), bluz*, mayo* (maillot), sütyen* (soutien-gorge), kostüm, ruj (rouge), parfüm, kuaför"],
      ["Ev", "kanepe (canapé), abajur (abat-jour), şömine (cheminée), lavabo, duş (douche), tuvalet*, parke (parquet), deterjan, ekran (écran), televizyon, şarj (charge), pil (pile)"],
      ["Yemek ve kafe", "restoran, menü, adisyon (addition = hesap), kruvasan, jambon, mayonez, krem, püre (purée), konserve"],
      ["İnsanlar ve gündelik", "mersi, pardon, randevu, sürpriz, kuzen / kuzin, ekip (équipe), direktör, dosya (dossier), abone (abonné), rötar (retard), avantaj, şans, prestij"],
      ["Okul ve kültür", "lise (lycée), üniversite, fakülte, enstitü, kültür, müzik, aktör / aktris, dekor, jüri, vitrin, kartpostal"],
      ["Fikirler", "problem, sistem, program, ekonomi, demokrasi, teknik, kategori, referans, enerji, prensip"],
      ["Sağlık ve vücut", "klinik, ambulans, pansuman (pansement), masaj, egzersiz, terapi, refleks, tendon, anatomi, sendrom, kronik, migren, romatizma, protez (prothèse), ortopedi"]])}
<p><b>Yöntem:</b> yeni bir Fransızca kelime gör → "Türkçede var mı?" → Türkçe gibi söyle → ünlüleri düzelt ve okunmayan harfleri at. Çoğu zaman ilk denemede %80 doğru.</p>
<h3>Fransızca kelimeyi tahmin etme taktikleri</h3>
<ul><li>Türkçe <b>-syon</b> = Fransızca <b>-tion</b>: televizyon → télévision, rehabilitasyon → réhabilitation.</li>
<li>Türkçe <b>ş</b> çoğu zaman = Fransızca <b>ch</b>: şans → chance, şömine → cheminée, şampiyon → champion.</li>
<li>Türkçe <b>j</b> = Fransızca <b>j/g</b> (aynı ses!): masaj → massage, garaj → garage.</li></ul>
<h3>İngilizce → Fransızca kalıplar (bedava binlerce kelime)</h3>
${T(["İngilizce", "Fransızca", "Örnekler"], [["-tion", "-tion", "nation, information, situation (« -syo~ » okunur)"], ["-ty", "-té", "university → université, quality → qualité"], ["-ous", "-eux / -euse", "famous → fameux, delicious → délicieux"], ["-ic, -ical", "-ique", "music → musique, physical → physique"], ["-ly", "-ment", "rapidly → rapidement, exactly → exactement"], ["-or", "-eur", "actor → acteur, doctor → docteur"], ["-ive", "-if / -ive", "active → actif, positive → positif"], ["-ize", "-iser", "organize → organiser, realize → réaliser"], ["-ist, -ism", "-iste, -isme", "tourist → touriste, optimism → optimisme"], ["-ance, -ence", "-ance, -ence", "chance, patience, différence"], ["düşen s → ^", "", "forest → forêt, hospital → hôpital, feast → fête"], ["s- → é- / es-", "", "student → étudiant, school → école, space → espace"]])}`
  });

  S.push({
    id: "falsefriends", icon: "🎭",
    t: { en: "False friends (Turkish → French and English → French)", tr: "Yanlış dostlar (Türkçe → Fransızca ve İngilizce → Fransızca)", fr: "Les faux amis (turc → français et anglais → français)" },
    en: `<h3>Turkish → French: same origin, different meaning</h3>
${T(["Turkish", "French look-alike", "Say instead"], FF_TR)}
<h3>Where Turkish is a better guide than English</h3>
<p>aktüel = <b>actuel</b> (current) — English "actual" ≠ actuel · ajanda = <b>agenda</b> (diary) — English "agenda" = ordre du jour · sempatik = <b>sympathique / sympa</b> · kuzen, randevu, rötar, adisyon → same meaning as in French.</p>
<h3>English → French classic traps</h3>
${T(["French", "means", "careful"], FF_EN)}
<p>All of them are in the "False friends" flashcard deck.</p>`,
    tr: `<h3>Türkçe → Fransızca: aynı köken, farklı anlam</h3>
${T(["Türkçe", "Fransızca benzeri", "Bunun yerine söyle"], FF_TR)}
<h3>Türkçenin İngilizceden daha iyi rehber olduğu yerler</h3>
<p>aktüel = <b>actuel</b> (güncel) — İngilizce "actual" ≠ actuel · ajanda = <b>agenda</b> — İngilizce "agenda" = ordre du jour · sempatik = <b>sympathique / sympa</b> · kuzen, randevu, rötar, adisyon → Fransızcadakiyle aynı anlam.</p>
<h3>İngilizce → Fransızca klasik tuzaklar</h3>
${T(["Fransızca", "anlamı", "dikkat"], FF_EN)}
<p>Hepsi "Yanlış dostlar" kart destesinde.</p>`
  });

  S.push({
    id: "mistakes", icon: "✅",
    t: { en: "The 25 classic mistakes of Turkish speakers", tr: "Türkçe konuşanların 25 klasik hatası", fr: "Les 25 erreurs classiques des turcophones" },
    en: `<p>Reread this checklist every month — and test yourself with the "Spot the mistake" exercise.</p>${T(["✗ wrong", "✓ right", "why"], MISTAKES.map(m => [m[0], m[1], m[2]]))}`,
    tr: `<p>Bu listeyi her ay yeniden oku — ve kendini "Hatayı bul" alıştırmasıyla dene.</p>${T(["✗ yanlış", "✓ doğru", "neden"], MISTAKES.map(m => [m[0], m[1], m[3]]))}`
  });
  window.MISTAKES = MISTAKES;

  S.push({
    id: "survival", icon: "🆘",
    t: { en: "Survival kit & emergency numbers", tr: "Hayatta kalma seti ve acil numaralar", fr: "Kit de survie et numéros d'urgence" },
    en: `<p>The 40 phrases for day 1 are in the "Survival phrases" deck, with audio. (e) = add -e when the speaker is a woman: enchanté → enchantée, perdu → perdue.</p>
<h3>Emergency numbers in France</h3>
${T(["Number", "For"], [["<b>112</b>", "EU emergency number (works everywhere)"], ["<b>15</b>", "Medical emergency (SAMU)"], ["<b>17</b>", "Police"], ["<b>18</b>", "Fire brigade"], ["<b>114</b>", "By text message, if you can't speak or hear"]])}
<p>Key sentences: « Au secours ! » · « Appelez un médecin / une ambulance ! » · « Je suis malade. J'ai mal ici. » · « Je suis perdue. »</p>`,
    tr: `<p>İlk gün için 40 ifade "Temel ifadeler" destesinde, sesli. (e) = konuşan kadınsa -e ekle: enchanté → enchantée, perdu → perdue.</p>
<h3>Fransa'da acil numaralar</h3>
${T(["Numara", "Ne için"], [["<b>112</b>", "AB acil numarası (her yerde çalışır)"], ["<b>15</b>", "Tıbbi acil (SAMU)"], ["<b>17</b>", "Polis"], ["<b>18</b>", "İtfaiye"], ["<b>114</b>", "Konuşamıyor veya duyamıyorsan SMS ile"]])}
<p>Anahtar cümleler: « Au secours ! » (İmdat!) · « Appelez un médecin / une ambulance ! » · « Je suis malade. J'ai mal ici. » · « Je suis perdue. » (Kayboldum.)</p>`
  });

  S.push({
    id: "listening", icon: "🎧",
    t: { en: "Listening: podcasts, YouTube, TV, music", tr: "Dinleme: podcast, YouTube, TV, müzik", fr: "Écouter : podcasts, YouTube, TV, musique" },
    res: ["voisins12bis", "jeff", "easyfrench-pod", "usgs", "lyricstraining"],
    en: `<h3>How to use a podcast (every level)</h3>
<ol><li>Listen once without text.</li><li>Listen again with the transcript; look up 5–10 words.</li><li>Shadow 1–2 minutes (repeat right after the speaker, same rhythm).</li><li>Relisten the next day while walking or cooking.</li></ol>
<p>One episode used 4 times &gt; 4 episodes heard once.</p>
<h3>YouTube settings</h3>
<p>Subtitles in French (from B1 auto-generated ones are fine), speed 0.75× at first, press "," / "." to step frame by frame on desktop. The best native channel is the one about YOUR interests: search « anatomie », « kiné », « résumé match handball », « recette facile », « yoga débutant »…</p>
<h3>Watch ladder</h3>
${T(["Level", "What to watch"], [["A1–A2", "Extr@, Easy French, cartoons in French, a film you know by heart in Turkish/English — now in French"], ["A2–B1", "One daily soap with French subtitles (Un si grand soleil, Plus belle la vie) + short sketches (Scènes de ménages, Caméra Café)"], ["B1–B2", "French series with French subtitles: Lupin, Dix pour cent, HPI, En thérapie, Le Bureau des légendes, Fais pas ci fais pas ça"], ["B2–C1", "Films and series without subtitles; talk shows; stand-up"]])}
<p><b>Method:</b> the same episode twice (French subtitles, then none) beats two different episodes.</p>
<h3>Music</h3>
<p>Start with songs you may know from Turkey: <b>Indila</b> — « Dernière danse », « Tourner dans le vide » · <b>Stromae</b> — « Alors on danse », « Papaoutai », « Formidable » · <b>Zaz</b> — « Je veux », « Les passants ». Then clear diction: Édith Piaf, Joe Dassin, Charles Aznavour, Christophe Maé, Kendji Girac, Louane, Vianney, Angèle, Clara Luciani, Grand Corps Malade (slam, B1+).</p>
<p><b>One song a week:</b> read the lyrics, look up the words, sing along (= free pronunciation training), then do it on LyricsTraining.</p>`,
    tr: `<h3>Bir podcast nasıl kullanılır (her seviye)</h3>
<ol><li>Bir kez metinsiz dinle.</li><li>Metinle tekrar dinle; 5–10 kelimeye bak.</li><li>1–2 dakika gölgele (konuşmacının hemen ardından aynı ritimle tekrarla).</li><li>Ertesi gün yürürken veya yemek yaparken tekrar dinle.</li></ol>
<p>4 kez kullanılan bir bölüm &gt; bir kez dinlenen 4 bölüm.</p>
<h3>YouTube ayarları</h3>
<p>Altyazı Fransızca (B1'den itibaren otomatik olanlar da iyi), başta hız 0,75×, bilgisayarda kare kare ilerlemek için "," / ".". En iyi anadil kanalı SENİN ilgi alanınla ilgili olandır: « anatomie », « kiné », « résumé match handball », « recette facile », « yoga débutant » ara…</p>
<h3>İzleme merdiveni</h3>
${T(["Seviye", "Ne izlenir"], [["A1–A2", "Extr@, Easy French, Fransızca çizgi filmler, Türkçe/İngilizce ezbere bildiğin bir film — şimdi Fransızca"], ["A2–B1", "Fransızca altyazılı günlük bir dizi (Un si grand soleil, Plus belle la vie) + kısa skeçler (Scènes de ménages, Caméra Café)"], ["B1–B2", "Fransızca altyazılı Fransız dizileri: Lupin, Dix pour cent, HPI, En thérapie, Le Bureau des légendes, Fais pas ci fais pas ça"], ["B2–C1", "Altyazısız film ve diziler; talk show'lar; stand-up"]])}
<p><b>Yöntem:</b> aynı bölümü iki kez (Fransızca altyazıyla, sonra altyazısız) izlemek iki farklı bölümden iyidir.</p>
<h3>Müzik</h3>
<p>Türkiye'den bildiğin şarkılarla başla: <b>Indila</b> — « Dernière danse », « Tourner dans le vide » · <b>Stromae</b> — « Alors on danse », « Papaoutai », « Formidable » · <b>Zaz</b> — « Je veux », « Les passants ». Sonra net diksiyon: Édith Piaf, Joe Dassin, Charles Aznavour, Christophe Maé, Kendji Girac, Louane, Vianney, Angèle, Clara Luciani, Grand Corps Malade (slam, B1+).</p>
<p><b>Haftada bir şarkı:</b> sözleri oku, kelimelere bak, birlikte söyle (= bedava telaffuz eğitimi), sonra LyricsTraining'de yap.</p>`
  });

  S.push({
    id: "readwrite", icon: "📖",
    t: { en: "Reading & writing: method and tools", tr: "Okuma ve yazma: yöntem ve araçlar", fr: "Lire et écrire : méthode et outils" },
    res: ["globalstory", "tv5biblio", "readlang", "bonpatron", "langcorrect"],
    en: `<h3>Two kinds of reading</h3>
<p><b>Extensive</b>: easy texts, lots of them, for pleasure — you should know 95% of the words. <b>Intensive</b>: one short text analysed word by word. Do both, mostly extensive. B1+: a book you already read in Turkish, now in French — you know the story, so you follow the French.</p>
<h3>Writing method</h3>
${T(["Level", "What to do"], [["A1", "Copy short texts by hand; dictations (also in the Practice tab); 5 sentences a day about your day."], ["A2", "A 100-word diary 3× a week → Bon Patron → LangCorrect → REWRITE the corrected version."], ["B1+", "E-mails, short opinion texts (DELF format), summaries of podcasts you heard."]])}
<p><b>Always keep an error log</b> of your 20 recurring mistakes and reread it before you write — there's one in the Practice tab.</p>
<p>With an AI assistant: ask « list my errors and explain them, don't rewrite my text » — rewriting teaches you nothing.</p>
<h3>Dictionaries vs translators</h3>
<p>Translators to UNDERSTAND, dictionaries to LEARN (examples, gender, register). Never paste your own French into a translator to "fix" it before writing it yourself — you skip the learning. From A2–B1 switch to French-only dictionaries (Le Robert, Wiktionnaire): you start thinking in French.</p>
<h3>Small settings that help</h3>
<ul><li>Typing accents: on a phone, long-press the letter (e → é è ê ë, c → ç, a → à â). On a Mac: hold the key, or add the French keyboard.</li>
<li>From A2: switch phone and apps to French. From A1: follow a few French accounts on topics you like.</li>
<li>Turn on French auto-subtitles on YouTube by default.</li></ul>`,
    tr: `<h3>İki tür okuma</h3>
<p><b>Kapsamlı</b>: kolay metinler, bol bol, keyif için — kelimelerin %95'ini bilmelisin. <b>Yoğun</b>: kelime kelime incelenen kısa bir metin. İkisini de yap, çoğunlukla kapsamlı. B1+: Türkçe okuduğun bir kitap, şimdi Fransızca — hikâyeyi bildiğin için Fransızcayı takip edersin.</p>
<h3>Yazma yöntemi</h3>
${T(["Seviye", "Ne yapılır"], [["A1", "Kısa metinleri elle kopyala; dikteler (Pratik sekmesinde de var); günün hakkında günde 5 cümle."], ["A2", "Haftada 3 kez 100 kelimelik günlük → Bon Patron → LangCorrect → düzeltilmiş hâlini YENİDEN YAZ."], ["B1+", "E-postalar, kısa fikir yazıları (DELF formatı), dinlediğin podcast'lerin özetleri."]])}
<p><b>Her zaman bir hata defteri tut</b>: tekrarlayan 20 hatan; yazmadan önce yeniden oku — Pratik sekmesinde bir tane var.</p>
<p>Bir yapay zekâ asistanıyla: « hatalarımı listele ve açıkla, metnimi yeniden yazma » de — yeniden yazmak sana hiçbir şey öğretmez.</p>
<h3>Sözlükler ve çevirmenler</h3>
<p>Çevirmenler ANLAMAK için, sözlükler ÖĞRENMEK için (örnekler, cinsiyet, üslup). Kendi Fransızcanı kendin yazmadan önce "düzeltmek" için çevirmene yapıştırma — öğrenmeyi atlarsın. A2–B1'den itibaren sadece Fransızca sözlüklere geç (Le Robert, Wiktionnaire): Fransızca düşünmeye başlarsın.</p>
<h3>Yardımcı küçük ayarlar</h3>
<ul><li>Aksan yazmak: telefonda harfe basılı tut (e → é è ê ë, c → ç, a → à â). Mac'te: tuşa basılı tut veya Fransızca klavye ekle.</li>
<li>A2'den itibaren: telefon ve uygulamaları Fransızcaya geçir. A1'den itibaren: sevdiğin konularda birkaç Fransızca hesabı takip et.</li>
<li>YouTube'da Fransızca otomatik altyazıyı varsayılan yap.</li></ul>`
  });

  S.push({
    id: "speaking", icon: "🗣️",
    t: { en: "Speaking: partners, groups and scripts", tr: "Konuşma: partnerler, gruplar ve senaryolar", fr: "Parler : partenaires, groupes et scripts" },
    res: ["tandem", "hellotalk", "polyglot", "ai-voice", "italki"],
    en: `<p><b>Free:</b> Tandem, HelloTalk, ConversationExchange, Polyglot Club evenings, Meetup « échange linguistique » / « café des langues », free workshops (AVF, centres sociaux, libraries), and AI voice role-plays (pharmacy, bank, doctor, job interview — ask for corrections at the end).</p>
<p><b>Cheap paid</b> (best value per euro when you're ready): italki or Preply — a cheap community tutor for conversation; a qualified FLE teacher for exam prep.</p>
<h3>Scripts to rehearse (A1–A2)</h3>
<p>1-minute self-introduction · your daily routine · ordering in a café · asking for directions.</p>
<p class="ex"><b>Phone appointment</b> — « Bonjour, je voudrais prendre rendez-vous, s'il vous plaît. » — « Je suis disponible lundi ou mardi matin. » — « Mon nom est …, ça s'écrit … » — « Merci beaucoup, au revoir. »</p>
<p>Write it, say it 10 times, then make the real call. You can practise it with the speaking exercise in the Practice tab.</p>`,
    tr: `<p><b>Ücretsiz:</b> Tandem, HelloTalk, ConversationExchange, Polyglot Club akşamları, Meetup « échange linguistique » / « café des langues », ücretsiz atölyeler (AVF, centres sociaux, kütüphaneler) ve yapay zekâ ile sesli canlandırmalar (eczane, banka, doktor, iş görüşmesi — sonunda düzeltme iste).</p>
<p><b>Ucuz ücretli</b> (hazır olduğunda euro başına en iyi değer): italki veya Preply — sohbet için ucuz bir topluluk eğitmeni; sınav hazırlığı için kalifiye bir FLE öğretmeni.</p>
<h3>Prova edilecek senaryolar (A1–A2)</h3>
<p>1 dakikalık kendini tanıtma · günlük rutinin · kafede sipariş · yol sorma.</p>
<p class="ex"><b>Telefonla randevu</b> — « Bonjour, je voudrais prendre rendez-vous, s'il vous plaît. » — « Je suis disponible lundi ou mardi matin. » — « Mon nom est …, ça s'écrit … » — « Merci beaucoup, au revoir. »</p>
<p>Yaz, 10 kez söyle, sonra gerçek aramayı yap. Pratik sekmesindeki konuşma alıştırmasıyla çalışabilirsin.</p>`
  });

  S.push({
    id: "exams", icon: "📝",
    t: { en: "Exams: DELF, DALF, TCF, TEF, DFP Santé", tr: "Sınavlar: DELF, DALF, TCF, TEF, DFP Santé", fr: "Examens : DELF, DALF, TCF, TEF, DFP Santé" },
    res: ["fei-delf", "delfdalfch", "dfp-sante", "tef-irn", "tcf-irn", "tv5-tcf"],
    en: `${T(["Exam", "What for", "Validity", "Fee (2026)"], [["DELF A1–B2", "Diploma; residence cards; DELF B2 exempts from the university language test", "For life", "~130–200 €"], ["DALF C1/C2", "Advanced diploma", "For life", "~180–220 €"], ["TCF IRN / TEF IRN", "Residence cards and citizenship; 4 skills, same day", "2 years", "~174–200 €"], ["TCF tout public (+ writing)", "University admission (DAP)", "2 years", "varies"], ["DFP Santé B1, B2/C1", "Professional French for physiotherapists, nurses, doctors; accepted for the 10-year card and citizenship", "For life", "varies"]])}
<p><b>Strategy:</b> TCF/TEF expire after 2 years → take them shortly before you need them. DELF/DALF never expire → collect them as milestones (A2 → B1 → B2). Always check which exact test the institution wants BEFORE paying.</p>
<p><b>Free preparation:</b> official DELF sample papers (audio + marking grids) on each level page · delfdalf.ch full papers · TEF IRN sample tasks · TV5MONDE TCF simulation · RFI practice · Le Point du FLE directory · Podcast Français Facile DELF A1/A2 · DFP Santé sample papers. Where: universities, Alliances Françaises, approved centres (Carif-Oref search).</p>`,
    tr: `${T(["Sınav", "Ne için", "Geçerlilik", "Ücret (2026)"], [["DELF A1–B2", "Diploma; oturma kartları; DELF B2 üniversite dil testinden muaf tutar", "Ömür boyu", "~130–200 €"], ["DALF C1/C2", "İleri seviye diploma", "Ömür boyu", "~180–220 €"], ["TCF IRN / TEF IRN", "Oturma kartları ve vatandaşlık; 4 beceri, aynı gün", "2 yıl", "~174–200 €"], ["TCF tout public (+ yazma)", "Üniversite kabulü (DAP)", "2 yıl", "değişir"], ["DFP Santé B1, B2/C1", "Fizyoterapist, hemşire, doktorlar için mesleki Fransızca; 10 yıllık kart ve vatandaşlık için kabul edilir", "Ömür boyu", "değişir"]])}
<p><b>Strateji:</b> TCF/TEF 2 yıl sonra geçersiz olur → ihtiyacından kısa süre önce gir. DELF/DALF süresizdir → kilometre taşı olarak topla (A2 → B1 → B2). Ödemeden ÖNCE kurumun tam olarak hangi testi istediğini kontrol et.</p>
<p><b>Ücretsiz hazırlık:</b> her seviye sayfasında resmî DELF örnekleri (ses + puanlama tabloları) · delfdalf.ch tam sınavlar · TEF IRN örnek görevler · TV5MONDE TCF simülasyonu · RFI pratiği · Le Point du FLE rehberi · Podcast Français Facile DELF A1/A2 · DFP Santé örnek sınavları. Nerede: üniversiteler, Alliance Française'ler, onaylı merkezler (Carif-Oref araması).</p>`
  });

  S.push({
    id: "official", icon: "🏛️",
    t: { en: "Official language levels in France (residence, university, physiotherapy)", tr: "Fransa'da resmî dil seviyeleri (oturum, üniversite, fizyoterapi)", fr: "Niveaux de langue officiels (séjour, université, kinésithérapie)" },
    res: ["sp-cards", "civique", "sp-dap", "ordremk"],
    en: `<p class="note">State of the rules on 30 Oct 2026. They change: always check service-public.gouv.fr before any application. This is information, not legal advice.</p>
<h3>Residence cards &amp; citizenship (first applications since 1 Jan 2026)</h3>
${T(["Step", "Level required"], [["First multi-year residence card", "A2 (speaking + writing) + civic exam"], ["First 10-year resident card", "B1 + civic exam"], ["Naturalisation", "B2 (speaking + writing)"]])}
<p>Accepted proof: TCF IRN or TEF IRN (less than 2 years old), or a diploma that never expires — DELF / DALF, DELF Pro, DFP, DCL, DUEF — or a French school diploma. Foreign diplomas are not accepted. Since 2026 an OFII attendance certificate alone no longer proves the level.</p>
<h3>The civic exam</h3>
<p>40 multiple-choice questions in French (28 knowledge + 12 real-life situations), 45 minutes, pass mark 32/40, ~60–80 €, never expires, retakes allowed. Free prep: official topic sheets (formation-civique.interieur.gouv.fr), Ensemble en France. <b>Tip:</b> it's a reading test in disguise — the A2–B1 French you're learning IS the prep.</p>
<h3>University — first year of a licence (non-EU national living in France)</h3>
<ul><li>Procedure: <b>DAP</b> ("dossier vert"), 3 university choices, filed by <b>15 December</b> for the following September.</li>
<li>Language test: TCF tout public + compulsory writing, late January / early February. Each university decides; B2 is the usual expectation. <b>Exempt with DELF B2 or DALF</b> (proof by 15 Dec).</li>
<li>"Études en France" (Campus France) is only for applicants living in one of 75 listed countries.</li>
<li><b>Timing from zero:</b> starting at A0 in the autumn, the first realistic window is the round about 15 months later (B2 ≈ 560–650 h ≈ 10–12 h a week for 14 months).</li></ul>
<h3>Physiotherapy (masseur-kinésithérapeute)</h3>
<p>The Ordre states that non-EU physiotherapy diplomas are not recognised as such. The route: a partial training exemption in a physiotherapy school (IFMK), within a small quota (up to 2% of places), after a written test (including French), an interview in French and a practical test; then completing the remaining training (at least 60 ECTS), obtaining the French State Diploma (DE), and registering with the Ordre. No CEFR level is set, but selection and training are in French: <b>aim for B2 or higher</b> (e.g. DFP Santé B2).</p>`,
    tr: `<p class="note">Kuralların 30 Ekim 2026 itibarıyla durumu. Değişirler: her başvurudan önce service-public.gouv.fr'yi kontrol et. Bu bilgidir, hukuki tavsiye değildir.</p>
<h3>Oturma kartları ve vatandaşlık (1 Ocak 2026'dan beri ilk başvurular)</h3>
${T(["Adım", "Gereken seviye"], [["İlk çok yıllık oturma kartı", "A2 (konuşma + yazma) + yurttaşlık sınavı"], ["İlk 10 yıllık oturma kartı", "B1 + yurttaşlık sınavı"], ["Vatandaşlık", "B2 (konuşma + yazma)"]])}
<p>Kabul edilen belge: TCF IRN veya TEF IRN (2 yıldan yeni), veya süresiz bir diploma — DELF / DALF, DELF Pro, DFP, DCL, DUEF — veya bir Fransız okul diploması. Yabancı diplomalar kabul edilmez. 2026'dan beri tek başına OFII katılım belgesi seviyeyi kanıtlamıyor.</p>
<h3>Yurttaşlık sınavı</h3>
<p>Fransızca 40 çoktan seçmeli soru (28 bilgi + 12 gerçek hayat durumu), 45 dakika, geçme notu 32/40, ~60–80 €, süresiz, tekrar girilebilir. Ücretsiz hazırlık: resmî konu sayfaları (formation-civique.interieur.gouv.fr), Ensemble en France. <b>İpucu:</b> kılık değiştirmiş bir okuma testi — öğrendiğin A2–B1 Fransızcası zaten hazırlıktır.</p>
<h3>Üniversite — lisans birinci sınıf (Fransa'da yaşayan AB dışı vatandaş)</h3>
<ul><li>Prosedür: <b>DAP</b> ("dossier vert"), 3 üniversite tercihi, bir sonraki Eylül için <b>15 Aralık</b>'a kadar.</li>
<li>Dil testi: TCF tout public + zorunlu yazma, Ocak sonu / Şubat başı. Her üniversite kendi karar verir; genelde B2 beklenir. <b>DELF B2 veya DALF ile muaf</b> (15 Aralık'a kadar belge).</li>
<li>"Études en France" (Campus France) sadece listelenen 75 ülkeden birinde yaşayan adaylar için.</li>
<li><b>Sıfırdan zamanlama:</b> sonbaharda A0'dan başlayınca ilk gerçekçi dönem yaklaşık 15 ay sonrakidir (B2 ≈ 560–650 saat ≈ 14 ay boyunca haftada 10–12 saat).</li></ul>
<h3>Fizyoterapi (masseur-kinésithérapeute)</h3>
<p>Ordre, AB dışı fizyoterapi diplomalarının olduğu gibi tanınmadığını belirtiyor. Yol: yazılı test (Fransızca dahil), Fransızca mülakat ve pratik sınavdan sonra küçük bir kontenjan dahilinde (yerlerin %2'sine kadar) bir fizyoterapi okulunda (IFMK) kısmi eğitim muafiyeti; sonra kalan eğitimi tamamlamak (en az 60 AKTS), Fransız Devlet Diploması'nı (DE) almak ve Ordre'a kaydolmak. Belirli bir CEFR seviyesi yok, ama seçim ve eğitim Fransızca: <b>B2 veya üstünü hedefle</b> (ör. DFP Santé B2).</p>`
  });

  S.push({
    id: "courses", icon: "🏫",
    t: { en: "Free or cheap in-person courses in France", tr: "Fransa'da ücretsiz veya ucuz yüz yüze kurslar", fr: "Cours gratuits ou pas chers en France" },
    res: ["sp-cir", "refugiesinfo", "avf", "centressociaux", "croixrouge", "mediatheque"],
    en: `<h3>1) OFII — Contrat d'intégration républicaine (CIR) · free, State-funded · target A2</h3>
<p>For non-EU nationals settling long-term with a first residence permit — including most "vie privée et familiale" permits (e.g. partners or spouses of French nationals) and employees; not students or visitors. An OFII test; below A2 → free training (up to 600 h; in person for people with low literacy, otherwise often a year on an online platform), compulsory once accepted; plus 4 civic training days. <b>If eligible, it's the biggest free resource there is: say yes to everything offered.</b></p>
<h3>2) Course finders</h3>
<p>Refugies.info (open to ALL foreigners) · BonjourBonjour · Carif-Oref DIAN · Réseau Alpha (Paris region only).</p>
<h3>3) Associations (volunteer teachers, free or small fee — the best conversation practice)</h3>
<p>AVF (245 local associations for newcomers) · centres sociaux (ask for « ateliers sociolinguistiques (ASL) » or « Français pour tous ») · La Cimade (34 cities) · Croix-Rouge · Secours populaire / Secours catholique (ask locally).</p>
<h3>4) Town hall &amp; public library</h3>
<p>Mairie / CCAS: ask for « cours de français pour adultes » and « ateliers de conversation ». Médiathèque: FLE textbooks, graded readers, comics, DVDs with subtitles. Ask: « Avez-vous des ressources pour apprendre le français ? »</p>
<h3>5) Money that can pay for courses or exams</h3>
<p>France Travail (registered jobseekers: ask your adviser) · CPF if you work in France (e.g. TEF IRN; ~150 € flat contribution per use).</p>
<h3>6) For comparison — paid</h3>
<p>University intensive French ≈ 6.50 €/hour (1,560 € per semester) · Alliance Française. The free plan + a cheap online tutor covers most of what they offer.</p>`,
    tr: `<h3>1) OFII — Contrat d'intégration républicaine (CIR) · ücretsiz, devlet destekli · hedef A2</h3>
<p>İlk oturma iznini alarak uzun süreli yerleşen AB dışı vatandaşlar için — çoğu "vie privée et familiale" izni (ör. Fransız vatandaşlarının partnerleri veya eşleri) ve çalışanlar dahil; öğrenciler ve ziyaretçiler hariç. Bir OFII testi; A2'nin altındaysan → ücretsiz eğitim (600 saate kadar; okuma-yazması zayıf olanlar için yüz yüze, diğerleri için sıklıkla bir yıl çevrimiçi platform), kabul edilince zorunlu; artı 4 yurttaşlık eğitim günü. <b>Uygunsan, var olan en büyük ücretsiz kaynak: sunulan her şeye evet de.</b></p>
<h3>2) Kurs bulucular</h3>
<p>Refugies.info (TÜM yabancılara açık) · BonjourBonjour · Carif-Oref DIAN · Réseau Alpha (sadece Paris bölgesi).</p>
<h3>3) Dernekler (gönüllü öğretmenler, ücretsiz veya küçük aidat — en iyi sohbet pratiği)</h3>
<p>AVF (yeni gelenler için 245 yerel dernek) · centres sociaux (« ateliers sociolinguistiques (ASL) » veya « Français pour tous » sor) · La Cimade (34 şehir) · Croix-Rouge · Secours populaire / Secours catholique (yerelde sor).</p>
<h3>4) Belediye ve halk kütüphanesi</h3>
<p>Mairie / CCAS: « cours de français pour adultes » ve « ateliers de conversation » sor. Médiathèque: FLE ders kitapları, seviyeli kitaplar, çizgi romanlar, altyazılı DVD'ler. Sor: « Avez-vous des ressources pour apprendre le français ? »</p>
<h3>5) Kursları veya sınavları ödeyebilecek kaynaklar</h3>
<p>France Travail (kayıtlı iş arayanlar: danışmanına sor) · Fransa'da çalışıyorsan CPF (ör. TEF IRN; kullanım başına ~150 € sabit katkı).</p>
<h3>6) Karşılaştırma için — ücretli</h3>
<p>Üniversite yoğun Fransızca ≈ saati 6,50 € (dönem başı 1.560 €) · Alliance Française. Ücretsiz plan + ucuz bir çevrimiçi eğitmen sundukları şeylerin çoğunu karşılar.</p>`
  });

  S.push({
    id: "fos", icon: "🩺",
    t: { en: "French for work, studies & health professions", tr: "İş, eğitim ve sağlık meslekleri için Fransızca", fr: "Le français pour le travail, les études et la santé" },
    res: ["dfp-prep", "pointdufle-fos", "rfi-sante", "mooc2move", "rfi-travailler"],
    en: `<h3>Health</h3>
<p>DFP Santé free preparation · Le Point du FLE French for specific purposes (medical vocabulary, CCDMD « La piqûre du français ») · RFI health &amp; science news A1–B2 · RFI DFP Santé practice. Your Turkish head start: klinik, masaj, egzersiz, refleks, tendon, anatomi, ortopedi, protez, romatizma, migren, sendrom… are all French words. The physio glossary is in the "Physio &amp; sports medicine" deck.</p>
<p>Key institutions: <b>IFMK</b> (physiotherapy school) · <b>DE</b> (diplôme d'État) · <b>Ordre des masseurs-kinésithérapeutes</b>.</p>
<h3>University</h3>
<p>Mooc2Move (~24 h of French for university study) · RFI « Étudier en France » (C1–C2). Words for day 1: le cours magistral (CM) · les travaux dirigés (TD) · le partiel · la licence / le master · la prise de notes · la dissertation · la synthèse.</p>
<h3>Work</h3>
<p>RFI « Travailler en français » · AFPA beginner MOOC. Job-hunt words: le CV · la lettre de motivation · l'entretien d'embauche · le CDI / le CDD · la période d'essai · la fiche de paie · les congés payés · le / la responsable — all in the "Work" deck.</p>`,
    tr: `<h3>Sağlık</h3>
<p>DFP Santé ücretsiz hazırlık · Le Point du FLE özel amaçlı Fransızca (tıbbi kelimeler, CCDMD « La piqûre du français ») · RFI A1–B2 sağlık ve bilim haberleri · RFI DFP Santé pratiği. Türkçe avantajın: klinik, masaj, egzersiz, refleks, tendon, anatomi, ortopedi, protez, romatizma, migren, sendrom… hepsi Fransızca kelimeler. Fizyoterapi sözlüğü "Fizyoterapi ve spor hekimliği" destesinde.</p>
<p>Anahtar kurumlar: <b>IFMK</b> (fizyoterapi okulu) · <b>DE</b> (devlet diploması) · <b>Ordre des masseurs-kinésithérapeutes</b>.</p>
<h3>Üniversite</h3>
<p>Mooc2Move (üniversite eğitimi için ~24 saat Fransızca) · RFI « Étudier en France » (C1–C2). İlk gün kelimeleri: le cours magistral (CM, amfi dersi) · les travaux dirigés (TD, uygulama) · le partiel (sınav) · la licence / le master · la prise de notes (not alma) · la dissertation · la synthèse.</p>
<h3>İş</h3>
<p>RFI « Travailler en français » · AFPA başlangıç MOOC'u. İş arama kelimeleri: le CV · la lettre de motivation · l'entretien d'embauche (iş görüşmesi) · le CDI / le CDD (süresiz / belirli süreli sözleşme) · la période d'essai (deneme süresi) · la fiche de paie (maaş bordrosu) · les congés payés (ücretli izin) · le / la responsable (yönetici) — hepsi "İş" destesinde.</p>`
  });

  S.push({
    id: "glossary", icon: "🔤",
    t: { en: "Glossary: FLE jargon decoded", tr: "Sözlükçe: FLE jargonu", fr: "Glossaire : le jargon du FLE" },
    en: `<p>Use these words to search in French.</p>${T(["Term", "Meaning"], [["CECRL / CEFR", "Common European Framework: A1–A2 basic, B1–B2 independent, C1–C2 proficient"], ["FLE", "Français Langue Étrangère — THE search keyword: « FLE A1 exercices articles »"], ["FLS", "Français Langue Seconde (for people living in a French-speaking country)"], ["FOS / FOU", "French for specific purposes (health, business) / for university"], ["Méthode", "A textbook series (Alter Ego+, Édito, Cosmopolite, Inspire, Défi…)"], ["Cahier d'activités", "The workbook that goes with a textbook"], ["Corrigés", "Answer key — « avec corrigés » is essential for self-study"], ["CO / CE / PO / PE", "Listening / reading / speaking / writing — the 4 exam skills"], ["DELF / DALF", "Official diplomas (A1–B2 / C1–C2)"], ["TCF / TEF", "Official tests giving a level for each skill"], ["IRN", "Intégration, Résidence, Nationalité — TCF/TEF versions for administrative procedures"], ["OFII / CIR", "Immigration and integration office / integration contract"], ["ASL", "Atelier sociolinguistique — practical French workshop for everyday life"], ["Médiathèque", "Public library"]])}`,
    tr: `<p>Fransızca arama yapmak için bu kelimeleri kullan.</p>${T(["Terim", "Anlamı"], [["CECRL / CEFR", "Avrupa Ortak Çerçevesi: A1–A2 temel, B1–B2 bağımsız, C1–C2 yetkin"], ["FLE", "Français Langue Étrangère (yabancı dil olarak Fransızca) — EN ÖNEMLİ arama kelimesi: « FLE A1 exercices articles »"], ["FLS", "Français Langue Seconde (Fransızca konuşulan bir ülkede yaşayanlar için)"], ["FOS / FOU", "Özel amaçlı Fransızca (sağlık, iş) / üniversite için"], ["Méthode", "Bir ders kitabı serisi (Alter Ego+, Édito, Cosmopolite, Inspire, Défi…)"], ["Cahier d'activités", "Ders kitabının alıştırma kitabı"], ["Corrigés", "Cevap anahtarı — kendi kendine çalışmak için « avec corrigés » şart"], ["CO / CE / PO / PE", "Dinleme / okuma / konuşma / yazma — sınavın 4 becerisi"], ["DELF / DALF", "Resmî diplomalar (A1–B2 / C1–C2)"], ["TCF / TEF", "Her beceri için seviye veren resmî testler"], ["IRN", "Intégration, Résidence, Nationalité — idari işlemler için TCF/TEF versiyonları"], ["OFII / CIR", "Göç ve uyum ofisi / uyum sözleşmesi"], ["ASL", "Atelier sociolinguistique — günlük yaşam için pratik Fransızca atölyesi"], ["Médiathèque", "Halk kütüphanesi"]])}`
  });

  S.push({
    id: "sources", icon: "📚",
    t: { en: "Sources, notes & discontinued resources", tr: "Kaynaklar, notlar ve kapanan kaynaklar", fr: "Sources, notes et ressources disparues" },
    en: `<p>The catalogue was compiled on 30 October 2026 by web research, and a robot re-checks every link each Monday. Some sites block automated checks (TV5MONDE, RFI, France Éducation International, france.tv, arte.tv, Lumni, Radio France). <b>If a link fails, search the resource's name</b> — it has usually just moved.</p>
<h3>Discontinued or changed — don't waste time looking for these</h3>
<ul><li>Annenberg Learner closed in 2026: French in Action only survives as archive copies.</li>
<li>innerFrench podcast ended in September 2026 (archive still online).</li>
<li>Duolingo French Podcast: no new episodes since 2024 (archive online).</li>
<li>Le Journal des enfants (France) closed in 2024 → 1jour1actu or the Belgian JDE.</li>
<li>"Talk in French" free podcast feed stopped in 2015.</li>
<li>phonetique.free.fr (needs Flash) no longer works.</li>
<li>TV5MONDE « 7 jours sur la planète » is now « Regards sur l'actualité »; the app is now « TV5MONDE EDU: Learn ».</li>
<li>RFI's learning site moved from savoirs.rfi.fr to francaisfacile.rfi.fr.</li>
<li>Language Transfer offers French as an "Introduction" only.</li>
<li>Memrise moved its user-made courses out of the app (2024).</li></ul>
<h3>Linguistics sources</h3>
<ul><li>French loanwords in Turkish — Vural &amp; Böler (2008), TAED 36.</li><li>Article and gender errors of Turkish learners — Eren (2015), Synergies Turquie 8.</li><li>French prepositions vs Turkish case suffixes — Demiral &amp; Kaya (2016).</li><li>English (1st foreign language) and learning French — Bür &amp; Aycan (2013).</li><li>False friends: TDK (Turkish) and Larousse (French). Study hours: Alliance Française and the US Foreign Service Institute.</li></ul>`,
    tr: `<p>Katalog 30 Ekim 2026'da web araştırmasıyla derlendi ve bir robot her pazartesi tüm bağlantıları yeniden kontrol ediyor. Bazı siteler otomatik kontrolleri engelliyor (TV5MONDE, RFI, France Éducation International, france.tv, arte.tv, Lumni, Radio France). <b>Bir bağlantı çalışmazsa kaynağın adını ara</b> — genelde sadece adresi değişmiştir.</p>
<h3>Kapanan veya değişenler — bunları aramakla vakit kaybetme</h3>
<ul><li>Annenberg Learner 2026'da kapandı: French in Action sadece arşiv kopyalarında yaşıyor.</li>
<li>innerFrench podcast'i Eylül 2026'da bitti (arşiv çevrimiçi).</li>
<li>Duolingo French Podcast: 2024'ten beri yeni bölüm yok (arşiv çevrimiçi).</li>
<li>Le Journal des enfants (Fransa) 2024'te kapandı → 1jour1actu veya Belçika JDE.</li>
<li>"Talk in French" ücretsiz yayını 2015'te durdu.</li>
<li>phonetique.free.fr (Flash gerektirir) artık çalışmıyor.</li>
<li>TV5MONDE « 7 jours sur la planète » artık « Regards sur l'actualité »; uygulama artık « TV5MONDE EDU: Learn ».</li>
<li>RFI'ın öğrenme sitesi savoirs.rfi.fr'den francaisfacile.rfi.fr'ye taşındı.</li>
<li>Language Transfer Fransızcayı sadece "Giriş" olarak sunuyor.</li>
<li>Memrise kullanıcı kurslarını uygulamadan çıkardı (2024).</li></ul>
<h3>Dilbilim kaynakları</h3>
<ul><li>Türkçedeki Fransızca alıntılar — Vural ve Böler (2008), TAED 36.</li><li>Türk öğrencilerin artikel ve cinsiyet hataları — Eren (2015), Synergies Turquie 8.</li><li>Fransızca edatlar ve Türkçe hâl ekleri — Demiral ve Kaya (2016).</li><li>İngilizcenin (1. yabancı dil) Fransızca öğrenimine etkisi — Bür ve Aycan (2013).</li><li>Yanlış dostlar: TDK ve Larousse. Çalışma saatleri: Alliance Française ve ABD Dışişleri Enstitüsü.</li></ul>`
  });

  /* Merge into window.GUIDE: replace same ids, drop "studies" (replaced by official + fos), set order. */
  const byId = Object.fromEntries((window.GUIDE || []).map(g => [g.id, g]));
  S.forEach(g => { byId[g.id] = g; });
  delete byId.studies;
  const ORDER = ["start", "method", "roadmap", "routines", "budget", "easyhard", "pron", "grammar", "loanwords", "falsefriends", "mistakes", "survival", "listening", "readwrite", "speaking", "email", "exams", "official", "courses", "fos", "glossary", "sources"];
  window.GUIDE = ORDER.map(id => byId[id]).filter(Boolean).concat(Object.values(byId).filter(g => !ORDER.includes(g.id)));
})();
