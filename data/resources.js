/* Curated directory of FREE (or generous free tier) French resources.
   R(id, name, url, type, levels, skills, tracks, cost, help, en, tr)
   levels: "A1-B2" (A0 A1 A2 B1 B2 C1 C2)
   skills: l=listening r=reading s=speaking w=writing g=grammar v=vocabulary p=pronunciation
   tracks: core life health sport academic exam turkish culture
   cost: "free" | "freemium" | "paid" (cheap paid, listed last) | "lib" (often free with a library card)
   help: languages of explanation besides French ("en", "tr", "en,tr", "")
   x (optional): { star: top pick, note: {en,tr} status/tips, price: "…" } */
(function () {
  const L = ["A0", "A1", "A2", "B1", "B2", "C1", "C2"];
  const list = [];
  function R(id, name, url, type, levels, skills, tracks, cost, help, en, tr, x) {
    const [a, b] = levels.split("-");
    const lo = L.indexOf(a), hi = L.indexOf(b || a);
    list.push(Object.assign({ id, name, url, type, levels: L.slice(lo, hi + 1), skills: skills.split(""), tracks: tracks.split(" "), cost, help: help ? help.split(",") : [], d: { en, tr }, star: false, note: null, price: "" }, x || {}));
  }
  const yt = q => "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);

  /* ───────── Structured courses ───────── */
  R("tv5", "TV5MONDE · Apprendre le français", "https://apprendre.tv5monde.com/fr", "course", "A1-C1", "lrgvw", "core exam", "free", "en",
    "The best free course: thousands of exercises built on real TV clips, sorted by CEFR level. Start here every week.",
    "En iyi ücretsiz kurs: gerçek TV videolarına dayalı binlerce alıştırma, CEFR seviyesine göre sıralı. Her hafta buradan başla.");
  R("rfi-ff", "RFI · Le français facile", "https://francaisfacile.rfi.fr/fr/", "course", "A1-B2", "lrvg", "core", "free", "en",
    "Radio France Internationale's learning site: news in easy French, audio dramas and exercises with transcripts.",
    "RFI'nin öğrenme sitesi: kolay Fransızca haberler, sesli hikâyeler ve metinli alıştırmalar.");
  R("fi-texas", "Français interactif (UT Austin)", "https://www.laits.utexas.edu/fi/", "course", "A1-B1", "lrgvp", "core", "free", "en",
    "A complete free university first-year course with videos of real French speakers, vocabulary lists and grammar (Tex's French Grammar).",
    "Gerçek konuşmacı videoları, kelime listeleri ve dilbilgisi içeren eksiksiz, ücretsiz üniversite birinci yıl kursu.");
  R("tex", "Tex's French Grammar", "https://www.laits.utexas.edu/tex/", "course", "A1-B2", "gw", "core", "free", "en",
    "Clear grammar explanations told through funny dialogues, each with self-correcting exercises.",
    "Komik diyaloglarla anlatılan net dilbilgisi açıklamaları ve kendi kendini düzelten alıştırmalar.");
  R("lawless", "Lawless French", "https://www.lawlessfrench.com/", "course", "A1-C1", "gvwp", "core", "free", "en",
    "Huge free reference for grammar, vocabulary, pronunciation and false friends, with quizzes. Great when a rule is confusing.",
    "Dilbilgisi, kelime, telaffuz ve yanlış dostlar için dev bir ücretsiz kaynak. Bir kural kafanı karıştırdığında ideal.");
  R("kwiziq", "Kwiziq French", "https://french.kwiziq.com/", "course", "A1-C1", "gvl", "core", "freemium", "en",
    "Adaptive quizzes that find your weak grammar points and give a short lesson for each. Free tier is enough for daily use.",
    "Zayıf dilbilgisi noktalarını bulan uyarlanabilir testler. Ücretsiz sürüm günlük kullanım için yeterli.");
  R("lingolia", "Lingolia Français", "https://francais.lingolia.com/en/", "course", "A1-B2", "gv", "core", "freemium", "en",
    "Tidy grammar tables and examples, with free exercises for every tense and structure.",
    "Her zaman ve yapı için düzenli dilbilgisi tabloları, örnekler ve ücretsiz alıştırmalar.");
  R("openlearn", "OpenLearn · French (The Open University)", "https://www.open.edu/openlearn/languages/french", "course", "A0-B1", "lrsv", "core", "free", "en",
    "Free short university courses (e.g. Beginners' French) with audio, from the UK Open University.",
    "İngiltere Open University'den sesli, ücretsiz kısa kurslar (ör. Beginners' French).");
  R("ielang", "ielanguages · French tutorial", "https://ielanguages.com/french.html", "course", "A0-A2", "gvp", "core", "free", "en",
    "A friendly one-page-per-topic beginner tutorial with audio, made by a language teacher.",
    "Bir dil öğretmeninin hazırladığı, sesli, konu konu başlangıç dersi.");
  R("pointdufle", "Le Point du FLE", "https://www.lepointdufle.net/", "course", "A1-C1", "gvrlp", "core", "free", "",
    "An enormous index of free online exercises sorted by topic (grammar, vocabulary, phonetics). Use it like a menu.",
    "Konulara göre sıralanmış dev bir ücretsiz alıştırma dizini (dilbilgisi, kelime, fonetik). Bir menü gibi kullan.");
  R("bonjourdefrance", "Bonjour de France", "https://www.bonjourdefrance.com/", "course", "A1-C1", "grlv", "core", "free", "",
    "Free online magazine with exercises, tests and games for every level.",
    "Her seviye için alıştırmalar, testler ve oyunlar içeren ücretsiz çevrimiçi dergi.");
  R("ffcom", "Français Facile", "https://www.francaisfacile.com/", "course", "A1-C1", "gv", "core", "free", "",
    "Thousands of grammar and vocabulary exercises with instant correction, written by teachers.",
    "Öğretmenlerin hazırladığı, anında düzeltmeli binlerce dilbilgisi ve kelime alıştırması.");
  R("ccdmd", "CCDMD · Amélioration du français", "https://www.ccdmd.qc.ca/fr/", "course", "B2-C2", "gwv", "core academic", "free", "",
    "Advanced grammar, spelling and writing exercises for university students (from Québec, standard French).",
    "Üniversite öğrencileri için ileri dilbilgisi, yazım ve yazma alıştırmaları (Québec'ten, standart Fransızca).");
  R("funmooc", "FUN MOOC (French university MOOCs)", "https://www.fun-mooc.fr/fr/cours/?search=fran%C3%A7ais", "mooc", "A1-C2", "lrw", "core life academic health", "free", "",
    "Free university MOOCs in French: 'Vivre en France' (A1–B1), plus science, health and sport courses for later.",
    "Fransızca ücretsiz üniversite MOOC'ları: 'Vivre en France' (A1–B1), ileride bilim, sağlık ve spor kursları.");
  R("duolingo", "Duolingo", "https://www.duolingo.com/", "app", "A0-A2", "vgl", "core", "freemium", "en,tr",
    "Five gamified minutes a day. Good for habit and basics; pair it with real listening.",
    "Günde beş eğlenceli dakika. Alışkanlık ve temel için iyi; gerçek dinleme ile birlikte kullan.");
  R("busuu", "Busuu", "https://www.busuu.com/", "app", "A1-B2", "vgw", "core", "freemium", "en,tr",
    "Structured lessons; free tier lets you write short texts that native speakers correct.",
    "Yapılandırılmış dersler; ücretsiz sürümde yazdıklarını anadili Fransızca olanlar düzeltir.");
  R("memrise", "Memrise", "https://www.memrise.com/", "app", "A0-B1", "vl", "core", "freemium", "en",
    "Vocabulary with short videos of real people saying the words.",
    "Kelimeleri söyleyen gerçek insanların kısa videolarıyla kelime öğrenimi.");
  R("drops", "Drops", "https://languagedrops.com/", "app", "A0-A2", "v", "core", "freemium", "en,tr",
    "Beautiful 5-minute visual vocabulary games. Perfect on a tired day.",
    "Güzel, 5 dakikalık görsel kelime oyunları. Yorgun günler için ideal.");
  R("loecsen", "Loecsen", "https://www.loecsen.com/", "course", "A0-A1", "vlp", "core turkish", "free", "tr,en",
    "Survival phrases with audio and pictures; works from Turkish.",
    "Sesli ve resimli temel ifadeler; Türkçeden de çalışır.");
  R("50lang", "50languages (book2)", "https://www.50languages.com/", "course", "A0-A2", "vlp", "core turkish", "free", "tr,en",
    "100 free lessons of phrases with audio, available Turkish → French.",
    "Sesli ifadelerden oluşan 100 ücretsiz ders, Türkçe → Fransızca olarak mevcut.");
  R("clozemaster", "Clozemaster", "https://www.clozemaster.com/", "app", "A2-C1", "vr", "core", "freemium", "en,tr",
    "Fill-in-the-blank on thousands of real sentences. Great after A2 to grow vocabulary in context.",
    "Binlerce gerçek cümlede boşluk doldurma. A2'den sonra bağlam içinde kelime için harika.");
  R("lingq", "LingQ", "https://www.lingq.com/", "app", "A2-C2", "rlv", "core", "freemium", "en,tr",
    "Read and listen to real content and save unknown words with one tap.",
    "Gerçek içerikleri oku/dinle, bilinmeyen kelimeleri tek dokunuşla kaydet.");
  R("anki", "Anki / AnkiWeb", "https://apps.ankiweb.net/", "tool", "A0-C2", "v", "core", "free", "en,tr",
    "The classic spaced-repetition flashcards. Free on Mac, Android and the web (iPhone app is paid; use this site's Cards tab instead).",
    "Klasik aralıklı tekrar kartları. Mac, Android ve web'de ücretsiz (iPhone uygulaması ücretli; bu sitenin Kartlar sekmesini kullan).");
  R("quizlet", "Quizlet", "https://quizlet.com/", "app", "A0-B2", "v", "core", "freemium", "en,tr",
    "Millions of shared French flashcard sets (search 'Fransızca' too).",
    "Milyonlarca paylaşılmış Fransızca kart seti ('Fransızca' diye de ara).");

  /* ───────── YouTube ───────── */
  R("easyfrench", "Easy French", "https://www.youtube.com/@EasyFrench", "video", "A2-B2", "lv", "core culture", "free", "en",
    "Street interviews in France with French + English subtitles. Real everyday French.",
    "Fransa'da sokak röportajları, Fransızca + İngilizce altyazılı. Gerçek gündelik Fransızca.");
  R("innerfrench-yt", "innerFrench (YouTube)", "https://www.youtube.com/@innerFrench", "video", "B1-B2", "lv", "core culture", "free", "",
    "Hugo speaks slowly and clearly about interesting topics, entirely in French. The perfect bridge to B2.",
    "Hugo ilginç konuları yavaş ve net, tamamen Fransızca anlatıyor. B2'ye mükemmel köprü.");
  R("pierre", "Français avec Pierre", "https://www.youtube.com/@FrancaisavecPierre", "video", "A2-B2", "lgv", "core", "free", "",
    "Hundreds of grammar and vocabulary lessons explained in simple French.",
    "Basit Fransızca ile anlatılan yüzlerce dilbilgisi ve kelime dersi.");
  R("alexa", "Learn French with Alexa", yt("Learn French with Alexa"), "video", "A0-A2", "lgp", "core", "free", "en",
    "Warm, very clear beginner lessons explained in English.",
    "İngilizce anlatılan sıcak ve çok net başlangıç dersleri.");
  R("frenchpod101", "FrenchPod101 (YouTube)", "https://www.youtube.com/@FrenchPod101", "video", "A0-B1", "lvp", "core", "free", "en",
    "Free videos: vocabulary by theme, listening practice, pronunciation.",
    "Ücretsiz videolar: temalara göre kelime, dinleme, telaffuz.");
  R("vincent", "Learn French with Vincent", yt("Learn French with Vincent"), "video", "A0-B1", "lvg", "core", "free", "en",
    "Long, calm lessons (often 1 hour) on vocabulary and verbs. Good background listening.",
    "Kelime ve fiiller üzerine uzun, sakin dersler (genelde 1 saat). Arka planda dinlemek için iyi.");
  R("elisa", "French Mornings with Elisa", yt("French Mornings with Elisa"), "video", "A2-B1", "lvs", "core", "free", "en",
    "Short, cheerful lessons on everyday French and expressions.",
    "Gündelik Fransızca ve deyimler üzerine kısa, neşeli dersler.");
  R("cuf", "Comme une Française", yt("Comme une Française Géraldine"), "video", "A2-B2", "lv", "core culture life", "free", "en",
    "Géraldine explains real spoken French and French culture codes. Very useful to understand people around you.",
    "Géraldine gerçek konuşma Fransızcasını ve kültür kodlarını anlatıyor. Çevrendekileri anlamak için çok faydalı.");
  R("fauth-yt", "Français Authentique (YouTube)", yt("Français Authentique Johan"), "video", "B1-B2", "ls", "core", "free", "",
    "Johan's calm videos on spoken French and confidence. Motivating, slow-ish French.",
    "Johan'ın konuşma Fransızcası ve özgüven üzerine sakin videoları.");
  R("1j1q", "1 jour, 1 question (Lumni)", yt("1 jour 1 question"), "video", "A2-B1", "lv", "core culture", "free", "",
    "1.5-minute cartoons answering kids' questions about the world. Easy, short, rewatchable.",
    "Çocukların dünya hakkındaki sorularına 1,5 dakikalık çizgi film cevaplar. Kolay, kısa.");
  R("karambolage", "Karambolage (ARTE)", yt("Karambolage ARTE"), "video", "B1-B2", "lv", "culture", "free", "",
    "Short, charming videos about French daily objects, words and habits.",
    "Fransız gündelik nesneleri, kelimeleri ve alışkanlıkları üzerine kısa, sevimli videolar.");
  R("cpsorcier", "C'est pas sorcier", yt("C'est pas sorcier corps humain"), "video", "B1-B2", "lv", "health sport academic", "free", "",
    "Legendary science show. Episodes on muscles, heart, bones and sport are perfect for your field.",
    "Efsanevi bilim programı. Kaslar, kalp, kemikler ve spor bölümleri alanına çok uygun.");
  R("ietaitunefois", "Il était une fois… la vie", yt("Il était une fois la vie épisode"), "video", "A2-B2", "lv", "health", "free", "",
    "The classic cartoon about the human body (Turkish TV showed it as 'Bir Zamanlar Hayat'). Body vocabulary with pleasure.",
    "İnsan vücudu hakkındaki klasik çizgi film (Türkiye'de 'Bir Zamanlar Hayat'). Keyifle vücut kelimeleri.");
  R("majormouv", "Major Mouvement", yt("Major Mouvement kiné"), "video", "B1-C1", "lv", "health sport", "free", "",
    "A French physiotherapist explaining pain, posture, injuries and training. Your profession, in French.",
    "Ağrı, duruş, sakatlık ve antrenmanı anlatan Fransız bir fizyoterapist. Senin mesleğin, Fransızca.");
  R("anat3d", "Anatomie 3D Lyon", yt("Anatomie 3D Lyon"), "video", "B2-C1", "lv", "health academic", "free", "",
    "University anatomy videos in French (Lyon 1). Muscles, joints, nerves: exactly the vocabulary of kiné school.",
    "Fransızca üniversite anatomi videoları (Lyon 1). Kaslar, eklemler, sinirler: tam kine okulu kelimeleri.");
  R("dirtybio", "Dirty Biology", "https://www.youtube.com/@DirtyBiology", "video", "B2-C1", "lv", "health academic", "free", "",
    "Fun, fast biology videos. Harder French, great for B2+.",
    "Eğlenceli, hızlı biyoloji videoları. Daha zor Fransızca, B2+ için harika.");
  R("sciet", "Science Étonnante", "https://www.youtube.com/@ScienceEtonnante", "video", "B2-C2", "lv", "academic", "free", "",
    "Clear science explanations by a physicist. Academic French in a friendly voice.",
    "Bir fizikçiden net bilim anlatımları. Samimi bir sesle akademik Fransızca.");
  R("hugodecrypte", "HugoDécrypte", yt("HugoDécrypte"), "video", "B2-C1", "lv", "culture", "free", "",
    "Daily news explained for young French people. Fast but very clear.",
    "Genç Fransızlar için günlük haber açıklamaları. Hızlı ama çok net.");
  R("brut", "Brut", yt("Brut France"), "video", "B1-C1", "lv", "culture", "free", "",
    "Short subtitled news and portraits. French subtitles help a lot.",
    "Kısa, altyazılı haberler ve portreler. Fransızca altyazılar çok yardımcı.");
  R("konbini", "Konbini", yt("Konbini interview"), "video", "B2-C1", "l", "culture", "free", "",
    "Relaxed interviews with French celebrities. Natural spoken French.",
    "Fransız ünlülerle rahat röportajlar. Doğal konuşma dili.");
  R("notabene", "Nota Bene", yt("Nota Bene histoire"), "video", "B2-C1", "l", "culture", "free", "",
    "History stories told with passion. Good C1 listening.",
    "Tutkuyla anlatılan tarih hikâyeleri. İyi C1 dinleme.");
  R("linguisticae", "Linguisticae", yt("Linguisticae"), "video", "C1-C2", "l", "culture academic", "free", "",
    "Funny videos about the French language itself, for advanced learners.",
    "Fransızca dilinin kendisi hakkında eğlenceli videolar, ileri seviye için.");
  R("monsieurphi", "Monsieur Phi", yt("Monsieur Phi"), "video", "C1-C2", "l", "academic", "free", "",
    "Philosophy explained clearly. Pure C1/C2 reasoning vocabulary.",
    "Net anlatılmış felsefe. Saf C1/C2 akıl yürütme kelimeleri.");
  R("yt-tr", "Fransızca dersleri (Turkish YouTube)", yt("Fransızca dersleri sıfırdan A1"), "video", "A0-A2", "gvp", "turkish core", "free", "tr",
    "French lessons explained in Turkish by Turkish teachers. Use when a grammar point is easier in your own language.",
    "Türk öğretmenlerin Türkçe anlattığı Fransızca dersler. Bir konu ana dilinde daha kolaysa kullan.");
  R("yt-tr-gram", "Fransızca gramer (Turkish YouTube)", yt("Fransızca gramer passé composé Türkçe anlatım"), "video", "A1-B1", "g", "turkish core", "free", "tr",
    "Turkish explanations of tenses: passé composé, imparfait, subjonctif…",
    "Zamanların Türkçe anlatımı: passé composé, imparfait, subjonctif…");

  /* ───────── Podcasts & audio ───────── */
  R("pff", "Podcast Français Facile", "https://www.podcastfrancaisfacile.com/", "podcast", "A1-B2", "lr", "core life", "free", "",
    "Short everyday dialogues with full transcripts and exercises, sorted by level.",
    "Tam metinli kısa günlük diyaloglar ve alıştırmalar, seviyelere göre.");
  R("coffeebreak", "Coffee Break French", "https://coffeebreaklanguages.com/coffeebreakfrench/", "podcast", "A0-B1", "lvg", "core", "freemium", "en",
    "A teacher and a learner over coffee: structured lessons in English, free episodes.",
    "Kahve eşliğinde bir öğretmen ve bir öğrenci: İngilizce yapılandırılmış dersler, ücretsiz bölümler.");
  R("duopod", "Duolingo French Podcast", "https://podcast.duolingo.com/", "podcast", "A2-B1", "l", "core culture", "free", "en",
    "True, moving stories told in easy French with English narration.",
    "Kolay Fransızca ile, İngilizce anlatımla gerçek ve dokunaklı hikâyeler.");
  R("innerfrench-pod", "innerFrench Podcast", "https://innerfrench.com/podcast/", "podcast", "B1-B2", "l", "core culture", "free", "",
    "The most loved intermediate podcast: interesting topics, clear voice, transcripts.",
    "En sevilen orta seviye podcast: ilginç konular, net ses, metinler.");
  R("fauth-pod", "Français Authentique (podcast)", "https://www.francaisauthentique.com/", "podcast", "B1-B2", "l", "core", "free", "",
    "Calm podcast about everyday expressions and learning without stress.",
    "Gündelik ifadeler ve stressiz öğrenme üzerine sakin podcast.");
  R("jeff", "RFI · Journal en français facile", "https://francaisfacile.rfi.fr/fr/podcasts/journal-en-fran%C3%A7ais-facile/", "podcast", "A2-B1", "lr", "core culture exam", "free", "",
    "10 minutes of world news, read slowly, with the transcript. Daily.",
    "Yavaş okunan 10 dakikalık dünya haberleri, metniyle. Her gün.");
  R("motsactu", "RFI · Les mots de l'actualité", "https://francaisfacile.rfi.fr/fr/podcasts/les-mots-de-l-actualit%C3%A9/", "podcast", "B1-B2", "lv", "core", "free", "",
    "3 minutes to learn one word or expression from the news.",
    "Haberlerden bir kelime ya da ifadeyi 3 dakikada öğren.");
  R("oli", "Une histoire et… Oli (France Inter)", "https://www.radiofrance.fr/franceinter/podcasts/une-histoire-et-oli", "podcast", "A2-B1", "l", "culture", "free", "",
    "Bedtime stories for children told by French artists. Soft and relaxing.",
    "Fransız sanatçıların anlattığı çocuk masalları. Yumuşak ve rahatlatıcı.");
  R("odyssees", "Les Odyssées (France Inter)", "https://www.radiofrance.fr/franceinter/podcasts/les-odyssees", "podcast", "B1-B2", "l", "culture", "free", "",
    "History adventures for kids, beautifully produced.",
    "Çocuklar için güzel prodüksiyonlu tarih maceraları.");
  R("methodesci", "La Méthode scientifique (France Culture)", "https://www.radiofrance.fr/franceculture/podcasts/la-methode-scientifique", "podcast", "C1-C2", "l", "academic health", "free", "",
    "One hour of science with researchers. Academic listening at its best.",
    "Araştırmacılarla bir saat bilim. En iyi akademik dinleme.");
  R("piedssurterre", "Les Pieds sur terre (France Culture)", "https://www.radiofrance.fr/franceculture/podcasts/les-pieds-sur-terre", "podcast", "C1-C2", "l", "culture", "free", "",
    "Real people telling their stories. Natural, emotional French.",
    "Kendi hikâyelerini anlatan gerçek insanlar. Doğal, duygusal Fransızca.");
  R("affsens", "Affaires sensibles (France Inter)", "https://www.radiofrance.fr/franceinter/podcasts/affaires-sensibles", "podcast", "B2-C1", "l", "culture", "free", "",
    "Gripping stories of famous events. Great narration.",
    "Ünlü olayların sürükleyici hikâyeleri. Harika anlatım.");
  R("transfert", "Transfert (Slate)", "https://www.slate.fr/podcasts/transfert", "podcast", "B2-C1", "l", "culture", "free", "",
    "Ordinary people tell one incredible story from their life.",
    "Sıradan insanlar hayatlarından inanılmaz bir hikâye anlatıyor.");
  R("radiofrance", "Radio France (all podcasts)", "https://www.radiofrance.fr/podcasts", "podcast", "B1-C2", "l", "culture academic", "free", "",
    "Thousands of free podcasts from France Inter, France Culture, franceinfo.",
    "France Inter, France Culture, franceinfo'dan binlerce ücretsiz podcast.");
  R("radiogarden", "Radio Garden", "https://radio.garden/", "tool", "A2-C2", "l", "culture", "free", "",
    "Spin the globe and listen to live radio from any French city. Lovely background French.",
    "Dünyayı çevir, herhangi bir Fransız şehrinden canlı radyo dinle.");
  R("litaudio", "Littérature audio", "https://www.litteratureaudio.com/", "podcast", "B1-C2", "lr", "culture", "free", "",
    "Thousands of free audiobooks read by volunteers: tales, novels, poems.",
    "Gönüllülerin okuduğu binlerce ücretsiz sesli kitap: masallar, romanlar, şiirler.");
  R("audiocite", "Audiocité", "https://www.audiocite.net/", "podcast", "B1-C2", "l", "culture", "free", "",
    "Free audiobooks; start with short tales (contes).",
    "Ücretsiz sesli kitaplar; kısa masallarla (contes) başla.");
  R("lyricstraining", "LyricsTraining", "https://lyricstraining.com/fr", "app", "A1-B2", "lv", "culture core", "free", "en",
    "Fill in missing words in French songs. Learning while singing — perfect for low-energy days.",
    "Fransızca şarkılarda eksik kelimeleri doldur. Şarkı söyleyerek öğren — enerjin düşükken ideal.");

  /* ───────── TV, films, culture ───────── */
  R("tv5plus", "TV5MONDEplus", "https://www.tv5mondeplus.com/", "tv", "A2-C2", "l", "culture", "free", "en",
    "Free streaming of French-language films and series, often with French subtitles.",
    "Fransızca film ve dizilerin ücretsiz yayını, çoğu zaman Fransızca altyazılı.");
  R("francetv", "france.tv", "https://www.france.tv/", "tv", "B1-C2", "l", "culture", "free", "",
    "Free French TV replay (series, documentaries, news). Works in France.",
    "Ücretsiz Fransız TV tekrarı (dizi, belgesel, haber). Fransa'da çalışır.");
  R("arte", "ARTE", "https://www.arte.tv/fr/", "tv", "B1-C2", "l", "culture academic", "free", "",
    "High-quality documentaries and films, many with French subtitles.",
    "Yüksek kaliteli belgeseller ve filmler, çoğu Fransızca altyazılı.");
  R("lumni", "Lumni", "https://www.lumni.fr/", "tv", "A2-C1", "lv", "academic culture health", "free", "",
    "France's free school video library: biology, PE, history… from primary to lycée. Easy academic French.",
    "Fransa'nın ücretsiz okul video kütüphanesi: biyoloji, beden eğitimi, tarih… Kolay akademik Fransızca.");
  R("allocine", "AlloCiné", "https://www.allocine.fr/", "reading", "B1-C1", "r", "culture", "free", "",
    "Film reviews and trailers; pick a film to watch and read the comments.",
    "Film eleştirileri ve fragmanlar; izleyeceğin filmi seç, yorumları oku.");
  R("langreactor", "Language Reactor", "https://www.languagereactor.com/", "tool", "A2-C2", "lv", "core", "freemium", "en,tr",
    "Browser extension (Mac/Chrome): double subtitles on YouTube/Netflix with instant translation to Turkish or English.",
    "Tarayıcı eklentisi (Mac/Chrome): YouTube/Netflix'te çift altyazı, Türkçe veya İngilizce anında çeviri.");

  /* ───────── Reading ───────── */
  R("1jour1actu", "1jour1actu", "https://www.1jour1actu.com/", "news", "A2-B1", "r", "core culture", "free", "",
    "Daily news written for children. Short sentences, real topics.",
    "Çocuklar için yazılmış günlük haberler. Kısa cümleler, gerçek konular.");
  R("jde", "Le Journal des enfants", "https://www.jde.fr/", "news", "A2-B1", "r", "core", "freemium", "",
    "News for 9–14 year olds. Easy reading practice.",
    "9–14 yaş için haberler. Kolay okuma pratiği.");
  R("vikidia", "Vikidia", "https://fr.vikidia.org/", "reading", "A2-B1", "r", "core academic", "free", "",
    "Wikipedia for kids: simple French articles on any subject (try 'muscle', 'handball').",
    "Çocuklar için Vikipedi: her konuda basit Fransızca makaleler ('muscle', 'handball' dene).");
  R("franceinfo", "franceinfo", "https://www.francetvinfo.fr/", "news", "B1-C1", "rl", "culture", "free", "",
    "Free public news site with short videos. Read one article a day.",
    "Kısa videolu ücretsiz kamu haber sitesi. Günde bir makale oku.");
  R("20min", "20 Minutes", "https://www.20minutes.fr/", "news", "B1-B2", "r", "culture", "free", "",
    "Free daily newspaper with short articles.",
    "Kısa makaleli ücretsiz günlük gazete.");
  R("lemonde", "Le Monde", "https://www.lemonde.fr/", "news", "B2-C2", "r", "culture academic", "freemium", "",
    "France's reference newspaper; some articles free.",
    "Fransa'nın referans gazetesi; bazı makaleler ücretsiz.");
  R("vdn", "La Voix du Nord", "https://www.lavoixdunord.fr/", "news", "B1-C1", "r", "life culture", "freemium", "",
    "Regional news for the north of France: events, transport, local life.",
    "Kuzey Fransa bölgesel haberleri: etkinlikler, ulaşım, yerel yaşam.");
  R("theconv", "The Conversation France", "https://theconversation.com/fr", "reading", "B2-C2", "r", "academic health sport", "free", "",
    "Researchers write for the public: sport science, health, education. Ideal academic reading.",
    "Araştırmacılar halk için yazıyor: spor bilimi, sağlık, eğitim. İdeal akademik okuma.");
  R("lingua", "Lingua.com · French texts", "https://lingua.com/french/reading/", "reading", "A1-B1", "r", "core", "free", "en",
    "Short graded texts with comprehension questions.",
    "Anlama sorulu kısa, seviyeli metinler.");
  R("wikisource", "Wikisource (FR)", "https://fr.wikisource.org/", "reading", "B2-C2", "r", "culture", "free", "",
    "Free classic French literature: start with La Fontaine's fables or Maupassant's short stories.",
    "Ücretsiz klasik Fransız edebiyatı: La Fontaine fablları veya Maupassant öyküleriyle başla.");
  R("gutenberg", "Project Gutenberg · French", "https://www.gutenberg.org/browse/languages/fr", "reading", "B2-C2", "r", "culture", "free", "",
    "Free e-books in French for your iPad.",
    "iPad'in için Fransızca ücretsiz e-kitaplar.");
  R("ebooksgratuits", "Ebooks libres et gratuits", "https://www.ebooksgratuits.com/", "reading", "B2-C2", "r", "culture", "free", "",
    "Well-formatted free classic e-books (EPUB for Apple Books).",
    "İyi biçimlendirilmiş ücretsiz klasik e-kitaplar (Apple Books için EPUB).");
  R("gallica", "Gallica (BnF)", "https://gallica.bnf.fr/", "reading", "C1-C2", "r", "culture academic", "free", "",
    "The national library's digital collection: books, press, maps.",
    "Ulusal kütüphanenin dijital koleksiyonu: kitaplar, basın, haritalar.");
  R("marmiton", "Marmiton", "https://www.marmiton.org/", "reading", "A2-B1", "rv", "life", "free", "",
    "Recipes in French: read the recipe, then cook it. Vocabulary you can taste.",
    "Fransızca tarifler: tarifi oku, sonra pişir. Tadına bakabileceğin kelimeler.");

  /* ───────── Dictionaries & tools ───────── */
  R("wordref", "WordReference", "https://www.wordreference.com/fren/", "tool", "A0-C2", "v", "core", "free", "en",
    "The best French↔English dictionary, with forums for tricky expressions.",
    "En iyi Fransızca↔İngilizce sözlük, zor ifadeler için forumlar.");
  R("reverso", "Reverso Context", "https://context.reverso.net/translation/french-turkish/", "tool", "A1-C2", "v", "core turkish", "freemium", "tr,en",
    "See any word in real sentences with Turkish translations.",
    "Herhangi bir kelimeyi Türkçe çevirileriyle gerçek cümlelerde gör.");
  R("glosbe", "Glosbe FR–TR", "https://glosbe.com/fr/tr", "tool", "A0-C2", "v", "turkish", "free", "tr",
    "French–Turkish dictionary with example sentences.",
    "Örnek cümleli Fransızca–Türkçe sözlük.");
  R("vikisozluk", "Vikisözlük", "https://tr.wiktionary.org/", "tool", "A0-C1", "v", "turkish", "free", "tr",
    "Turkish Wiktionary: many French words explained in Turkish.",
    "Türkçe Vikisözlük: birçok Fransızca kelime Türkçe açıklamalı.");
  R("wiktionnaire", "Wiktionnaire", "https://fr.wiktionary.org/", "tool", "A2-C2", "vp", "core", "free", "",
    "French dictionary with pronunciation (IPA + audio) and translations into Turkish.",
    "Telaffuz (IPA + ses) ve Türkçe çevirili Fransızca sözlük.");
  R("larousse", "Larousse (dictionnaire)", "https://www.larousse.fr/dictionnaires/francais", "tool", "B1-C2", "v", "core", "free", "",
    "Monolingual dictionary: the step after bilingual ones.",
    "Tek dilli sözlük: iki dilli sözlüklerden sonraki adım.");
  R("robert", "Dico en ligne Le Robert", "https://dictionnaire.lerobert.com/", "tool", "B1-C2", "v", "core", "free", "",
    "Clear modern definitions and examples.",
    "Net, modern tanımlar ve örnekler.");
  R("cnrtl", "CNRTL", "https://www.cnrtl.fr/", "tool", "C1-C2", "v", "academic", "free", "",
    "Academic dictionary with synonyms, antonyms and etymology.",
    "Eş anlam, zıt anlam ve köken bilgili akademik sözlük.");
  R("conjugueur", "Le Conjugueur", "https://leconjugueur.lefigaro.fr/", "tool", "A1-C2", "g", "core", "free", "",
    "Every verb conjugated in every tense, plus exercises.",
    "Her fiil her zamanda çekimli, artı alıştırmalar.");
  R("reverso-conj", "Reverso Conjugaison", "https://conjugator.reverso.net/conjugation-french.html", "tool", "A1-C2", "g", "core", "free", "en",
    "Fast verb tables, works great on phone.",
    "Hızlı fiil tabloları, telefonda çok iyi çalışır.");
  R("forvo", "Forvo", "https://forvo.com/languages/fr/", "tool", "A0-C2", "p", "core", "free", "en",
    "Hear any word pronounced by native speakers.",
    "Herhangi bir kelimeyi anadili konuşanlardan dinle.");
  R("youglish", "YouGlish French", "https://youglish.com/french", "tool", "A2-C2", "pl", "core", "free", "en",
    "Type a word, hear it in hundreds of YouTube videos.",
    "Bir kelime yaz, yüzlerce YouTube videosunda dinle.");
  R("tatoeba", "Tatoeba", "https://tatoeba.org/", "tool", "A1-C1", "vr", "turkish core", "free", "tr,en",
    "Hundreds of thousands of example sentences, many with Turkish translations and audio.",
    "Yüz binlerce örnek cümle, çoğu Türkçe çevirili ve sesli.");
  R("deepl", "DeepL Translator", "https://www.deepl.com/translator", "tool", "A0-C2", "rw", "core life", "freemium", "tr,en",
    "Very good translator FR↔TR/EN. Use it to check, not to replace your thinking.",
    "Çok iyi bir çevirmen FR↔TR/EN. Düşünmeni değil, kontrol etmeni sağlamak için kullan.");
  R("gtranslate", "Google Translate (camera)", "https://translate.google.com/", "tool", "A0-C2", "r", "life turkish", "free", "tr,en",
    "Point your phone camera at a letter or a sign for an instant Turkish translation.",
    "Bir mektuba veya tabelaya telefon kameranı tut, anında Türkçe çeviri.");
  R("languagetool", "LanguageTool", "https://languagetool.org/fr", "tool", "A2-C2", "w", "core academic", "freemium", "en",
    "Checks your French spelling and grammar as you type (also a Mac/Safari extension).",
    "Yazarken Fransızca yazım ve dilbilgisini kontrol eder (Mac/Safari eklentisi de var).");
  R("scribens", "Scribens", "https://www.scribens.fr/", "tool", "B1-C2", "w", "academic", "free", "",
    "Free French corrector with explanations for each mistake.",
    "Her hata için açıklamalı ücretsiz Fransızca düzeltici.");
  R("bonpatron", "BonPatron", "https://bonpatron.com/", "tool", "A2-B2", "w", "core", "freemium", "en",
    "Grammar checker designed for learners of French.",
    "Fransızca öğrenenler için tasarlanmış dilbilgisi denetleyicisi.");
  R("academie", "Académie française · Dire, ne pas dire", "https://www.academie-francaise.fr/dire-ne-pas-dire", "reading", "C1-C2", "vw", "academic", "free", "",
    "Fine points of correct French, explained by the Académie.",
    "Doğru Fransızcanın ince noktaları, Académie tarafından.");
  R("oqlf", "Banque de dépannage linguistique", "https://vitrinelinguistique.oqlf.gouv.qc.ca/", "tool", "B2-C2", "gw", "academic", "free", "",
    "Answers to every grammar/spelling doubt, very well organised.",
    "Her dilbilgisi/yazım şüphesine çok düzenli cevaplar.");
  R("voltaire", "Projet Voltaire", "https://www.projet-voltaire.fr/", "app", "B2-C2", "w", "academic", "freemium", "",
    "Spelling and grammar training used by French universities.",
    "Fransız üniversitelerinin kullandığı yazım ve dilbilgisi eğitimi.");
  R("speechling", "Speechling", "https://speechling.com/", "app", "A1-B2", "ps", "core", "freemium", "en",
    "Record yourself; a real coach sends feedback on your pronunciation (free plan).",
    "Kendini kaydet; gerçek bir koç telaffuzuna geri bildirim gönderir (ücretsiz plan).");

  /* ───────── Speaking & community ───────── */
  R("tandem", "Tandem", "https://www.tandem.net/", "community", "A2-C2", "sw", "core", "freemium", "tr,en",
    "Language exchange: help someone with Turkish/English, they help you with French.",
    "Dil değişimi: birine Türkçe/İngilizce'de yardım et, o da sana Fransızca'da.");
  R("hellotalk", "HelloTalk", "https://www.hellotalk.com/", "community", "A2-C2", "sw", "core", "freemium", "tr,en",
    "Chat with French people learning Turkish; they correct your messages.",
    "Türkçe öğrenen Fransızlarla sohbet; mesajlarını düzeltirler.");
  R("convex", "Conversation Exchange", "https://www.conversationexchange.com/", "community", "A2-C2", "s", "core", "free", "en",
    "Find a French partner nearby for face-to-face conversation.",
    "Yüz yüze sohbet için yakınında Fransız bir partner bul.");
  R("journaly", "Journaly", "https://journaly.com/", "community", "A2-C1", "w", "core", "free", "en",
    "Write a small diary entry in French; native speakers correct it.",
    "Fransızca küçük bir günlük yaz; anadili konuşanlar düzeltir.");
  R("rfrench", "r/French", "https://www.reddit.com/r/French/", "community", "A1-C2", "rw", "core", "free", "en",
    "Big friendly community to ask any question about French.",
    "Fransızca hakkında her şeyi sorabileceğin büyük, samimi topluluk.");
  R("meetup", "Meetup · cafés langues", "https://www.meetup.com/find/?keywords=langue%20%C3%A9change", "community", "A2-C2", "s", "core life", "free", "",
    "Language-exchange evenings in bars and cafés near you, usually free.",
    "Yakınındaki bar ve kafelerde dil değişimi akşamları, genelde ücretsiz.");
  R("jeveuxaider", "JeVeuxAider.gouv.fr", "https://www.jeveuxaider.gouv.fr/", "community", "A2-C2", "sl", "life sport health", "free", "",
    "Official volunteering platform: helping at a sport club or association is the best free speaking practice.",
    "Resmî gönüllülük platformu: bir spor kulübünde veya dernekte yardım etmek en iyi ücretsiz konuşma pratiği.");

  /* ───────── Daily life & admin (real French you will meet) ───────── */
  R("welcomefr", "Welcome to France", "https://www.welcometofrance.com/", "official", "A0-B1", "r", "life", "free", "en",
    "Official guide for newcomers, in English: settling in, studying, working.",
    "Yeni gelenler için İngilizce resmî rehber: yerleşme, okuma, çalışma.");
  R("servicepublic", "Service-Public.fr", "https://www.service-public.fr/", "official", "B1-C1", "r", "life", "free", "",
    "The official guide to every administrative procedure. Hard French at first — read with DeepL next to it.",
    "Her idari işlem için resmî rehber. Başta zor Fransızca — DeepL ile yan yana oku.");
  R("ofii", "OFII", "https://www.ofii.fr/", "official", "A0-B1", "r", "life", "free", "en",
    "Office for immigration and integration. Newcomers who sign the integration contract (CIR) can get free French classes (up to 600 h).",
    "Göç ve uyum ofisi. Uyum sözleşmesini (CIR) imzalayan yeni gelenler ücretsiz Fransızca kursu alabilir (600 saate kadar).");
  R("anef", "ANEF (titres de séjour)", "https://administration-etrangers-en-france.interieur.gouv.fr/", "official", "B1-C1", "r", "life", "free", "",
    "Online platform for residence permits. Learn its vocabulary before you need it.",
    "Oturma izinleri için çevrimiçi platform. Kelimelerini ihtiyaç duymadan önce öğren.");
  R("ameli", "ameli.fr (Assurance Maladie)", "https://www.ameli.fr/", "official", "A2-C1", "r", "life health", "free", "",
    "Health insurance site + very clear health articles (ameli santé) in simple French.",
    "Sağlık sigortası sitesi + basit Fransızca ile çok net sağlık makaleleri (ameli santé).");
  R("caf", "CAF", "https://www.caf.fr/", "official", "B1-C1", "r", "life", "free", "",
    "Family and housing benefits. Typical administrative French.",
    "Aile ve konut yardımları. Tipik idari Fransızca.");
  R("francetravail", "France Travail", "https://www.francetravail.fr/", "official", "B1-C1", "rw", "life", "free", "",
    "Employment agency: job offers to read, CV and cover letter vocabulary.",
    "İş ajansı: okunacak iş ilanları, CV ve motivasyon mektubu kelimeleri.");
  R("doctolib", "Doctolib", "https://www.doctolib.fr/", "official", "A2-B1", "r", "life health", "free", "",
    "Book doctors and kinés online. Read practitioner pages: real medical French.",
    "Doktor ve kineleri çevrimiçi randevu. Uygulayıcı sayfalarını oku: gerçek tıbbi Fransızca.");
  R("sncf", "SNCF Connect", "https://www.sncf-connect.com/", "official", "A1-B1", "r", "life", "free", "",
    "Trains and buses. Buying a ticket is a nice small French mission.",
    "Trenler ve otobüsler. Bilet almak güzel, küçük bir Fransızca görevi.");
  R("laposte", "La Poste", "https://www.laposte.fr/", "official", "A2-B1", "r", "life", "free", "",
    "Post office services: parcels, letters, recommandé.",
    "Postane hizmetleri: kargo, mektup, iadeli taahhütlü.");
  R("leboncoin", "Leboncoin", "https://www.leboncoin.fr/", "reading", "A2-B1", "rw", "life", "free", "",
    "Second-hand ads: short real texts, and a reason to write messages in French.",
    "İkinci el ilanlar: kısa gerçek metinler ve Fransızca mesaj yazmak için bir sebep.");
  R("meteo", "Météo-France", "https://meteofrance.com/", "official", "A1-A2", "r", "life", "free", "",
    "Weather forecast: a 30-second daily reading habit.",
    "Hava durumu: günlük 30 saniyelik okuma alışkanlığı.");
  R("vivreenfrance", "MOOC « Vivre en France »", "https://www.fun-mooc.fr/fr/cours/?search=vivre%20en%20france", "mooc", "A1-B1", "lrs", "life core", "free", "",
    "Alliance Française MOOCs (A1, A2, B1) about everyday life in France: housing, health, work, admin.",
    "Alliance Française MOOC'ları (A1, A2, B1): Fransa'da günlük yaşam, konut, sağlık, iş, idari işler.");
  R("mediatheque", "Médiathèques (public libraries)", "https://www.google.com/maps/search/m%C3%A9diath%C3%A8que", "community", "A0-C2", "rls", "life core", "free", "",
    "Public libraries are free or very cheap, have FLE books, films, and often free conversation workshops.",
    "Halk kütüphaneleri ücretsiz ya da çok ucuz; FLE kitapları, filmler ve sıklıkla ücretsiz sohbet atölyeleri var.");

  /* ───────── Health, physio ───────── */
  R("msd-fr", "Manuel MSD (grand public)", "https://www.msdmanuals.com/fr/accueil", "reading", "B1-C1", "rv", "health", "free", "en",
    "Free medical encyclopedia. Read the same article in English and French to learn medical vocabulary fast.",
    "Ücretsiz tıp ansiklopedisi. Aynı makaleyi İngilizce ve Fransızca okuyarak tıbbi kelimeleri hızla öğren.");
  R("passeportsante", "Passeport Santé", "https://www.passeportsante.net/", "reading", "B1-B2", "rv", "health", "free", "",
    "Health articles in accessible French: diseases, anatomy, sport.",
    "Anlaşılır Fransızca sağlık makaleleri: hastalıklar, anatomi, spor.");
  R("larousse-med", "Larousse médical", "https://www.larousse.fr/encyclopedie/medical", "reading", "B2-C1", "rv", "health", "free", "",
    "Medical encyclopedia: precise definitions of anatomy and pathology terms.",
    "Tıp ansiklopedisi: anatomi ve patoloji terimlerinin kesin tanımları.");
  R("allodocteurs", "Allô Docteurs / Le Magazine de la santé", "https://www.allodocteurs.fr/", "tv", "B1-C1", "lr", "health", "free", "",
    "Health TV show and articles: doctors speaking clearly to the public.",
    "Sağlık programı ve makaleleri: halka net konuşan doktorlar.");
  R("inserm", "Inserm · dossiers", "https://www.inserm.fr/c-est-quoi/", "reading", "B2-C1", "r", "health academic", "free", "",
    "French national health research institute: clear science pages on the body and diseases.",
    "Fransız ulusal sağlık araştırma enstitüsü: vücut ve hastalıklar üzerine net bilim sayfaları.");
  R("has", "HAS (Haute Autorité de Santé)", "https://www.has-sante.fr/", "official", "C1-C2", "r", "health academic", "free", "",
    "Official clinical guidelines, including physiotherapy recommendations. Professional French.",
    "Fizyoterapi önerileri dahil resmî klinik kılavuzlar. Profesyonel Fransızca.");
  R("spf", "Santé publique France", "https://www.santepubliquefrance.fr/", "official", "B2-C1", "r", "health", "free", "",
    "Public health information and campaigns.",
    "Halk sağlığı bilgileri ve kampanyalar.");
  R("ordremk", "Ordre des masseurs-kinésithérapeutes", "https://www.ordremk.fr/", "official", "B2-C1", "r", "health", "free", "",
    "The physiotherapy professional body: how the profession works in France, and rules for diplomas obtained abroad.",
    "Fizyoterapi meslek kuruluşu: mesleğin Fransa'da işleyişi ve yurt dışında alınan diplomalar için kurallar.");
  R("kineactu", "Kiné Actualité", "https://www.kineactu.com/", "news", "B2-C1", "r", "health", "freemium", "",
    "News for French physiotherapists. Professional vocabulary in context.",
    "Fransız fizyoterapistler için haberler. Bağlam içinde mesleki kelimeler.");
  R("sfphysio", "Société Française de Physiothérapie", "https://www.sfphysio.fr/", "official", "C1-C2", "r", "health academic", "free", "",
    "Scientific society for physiotherapy: evidence-based practice in French.",
    "Fizyoterapi bilim derneği: Fransızca kanıta dayalı uygulama.");
  R("uness", "UNESS (Université numérique en santé et sport)", "https://www.uness.fr/", "course", "B2-C2", "rl", "health sport academic", "free", "",
    "French digital university for health and sport studies; some open resources.",
    "Sağlık ve spor eğitimi için Fransız dijital üniversite; bazı açık kaynaklar.");

  /* ───────── Sport, STAPS ───────── */
  R("ffhb", "Fédération Française de Handball", "https://www.ffhandball.fr/", "news", "A2-C1", "r", "sport", "free", "",
    "French handball news and club finder. Your sport — easy motivation to read.",
    "Fransız hentbol haberleri ve kulüp bulucu. Senin sporun — okumak için kolay motivasyon.");
  R("lequipe", "L'Équipe", "https://www.lequipe.fr/Handball/", "news", "B1-C1", "rl", "sport", "freemium", "",
    "The sports daily. Match reports use lots of repeated vocabulary.",
    "Spor gazetesi. Maç raporları çok tekrar eden kelimeler kullanır.");
  R("insep", "INSEP", "https://www.insep.fr/", "official", "B2-C1", "r", "sport academic", "free", "",
    "National Institute of Sport: high-performance and sport science articles.",
    "Ulusal Spor Enstitüsü: yüksek performans ve spor bilimi makaleleri.");
  R("sportsgouv", "Ministère des Sports", "https://www.sports.gouv.fr/", "official", "B1-C1", "r", "sport", "free", "",
    "Official sport policy, sport-santé programmes, coaching diplomas.",
    "Resmî spor politikası, spor-sağlık programları, antrenörlük diplomaları.");
  R("onisep-staps", "Onisep · Licence STAPS", "https://www.onisep.fr/recherche?text=staps", "official", "B1-C1", "r", "sport academic", "free", "",
    "Official information on STAPS degrees and sport careers.",
    "STAPS lisansı ve spor kariyerleri hakkında resmî bilgi.");
  R("revuestaps", "Revue STAPS (Cairn)", "https://shs.cairn.info/revue-staps", "reading", "C1-C2", "r", "sport academic", "freemium", "",
    "The French academic journal of sport sciences; older articles are often free.",
    "Fransız spor bilimleri akademik dergisi; eski makaleler çoğu zaman ücretsiz.");

  /* ───────── Academic & university ───────── */
  R("campusfrance", "Campus France", "https://www.campusfrance.org/fr", "official", "A2-B2", "r", "academic", "free", "en",
    "Official agency for studying in France: programmes, language requirements, life as a student.",
    "Fransa'da okumak için resmî ajans: programlar, dil şartları, öğrenci yaşamı.");
  R("parcoursup", "Parcoursup", "https://www.parcoursup.gouv.fr/", "official", "B1-C1", "rw", "academic sport", "free", "",
    "Admission platform for first-year university (including STAPS).",
    "Üniversite birinci sınıf kabul platformu (STAPS dahil).");
  R("enic", "ENIC-NARIC France", "https://www.france-education-international.fr/enic-naric-france", "official", "B1-C1", "r", "academic health", "free", "en",
    "Issues 'attestations de comparabilité' for foreign diplomas — useful for your physiotherapy degree.",
    "Yabancı diplomalar için 'attestation de comparabilité' verir — fizyoterapi diploman için faydalı.");
  R("persee", "Persée", "https://www.persee.fr/", "reading", "C1-C2", "r", "academic", "free", "",
    "Free archive of French academic journals.",
    "Fransız akademik dergilerinin ücretsiz arşivi.");
  R("hal", "HAL (open archive)", "https://hal.science/", "reading", "C1-C2", "r", "academic health sport", "free", "",
    "Open-access French research papers and theses — search 'kinésithérapie' or 'STAPS'.",
    "Açık erişimli Fransız araştırma makaleleri ve tezler — 'kinésithérapie' veya 'STAPS' ara.");
  R("openedition", "OpenEdition", "https://www.openedition.org/", "reading", "C1-C2", "r", "academic", "free", "",
    "Open humanities and social-science books and journals.",
    "Açık erişimli beşerî ve sosyal bilimler kitapları ve dergileri.");
  R("erudit", "Érudit", "https://www.erudit.org/fr/", "reading", "C1-C2", "r", "academic", "free", "",
    "Francophone academic journals, many in open access.",
    "Frankofon akademik dergiler, çoğu açık erişimli.");
  R("scholar", "Google Scholar (FR)", "https://scholar.google.fr/", "tool", "B2-C2", "r", "academic", "free", "",
    "Search scientific literature; filter to French results.",
    "Bilimsel literatür ara; Fransızca sonuçlara filtrele.");
  R("mercipro", "Merci Professeur ! (TV5MONDE)", "https://apprendre.tv5monde.com/fr/merci-professeur", "video", "B2-C1", "lv", "academic core", "free", "",
    "Two-minute videos explaining tricky words and expressions.",
    "Zor kelime ve ifadeleri anlatan iki dakikalık videolar.");

  /* ───────── Exams: DELF, DALF, TCF ───────── */
  R("fei-delf", "France Éducation international · DELF", "https://www.france-education-international.fr/diplome/delf-tout-public", "exam", "A1-B2", "lrsw", "exam", "free", "en",
    "Official DELF page with free sample papers (sujets d'exemple) and audio for A1 to B2.",
    "A1'den B2'ye ücretsiz örnek sınavlar (sujets d'exemple) ve ses dosyalarıyla resmî DELF sayfası.");
  R("fei-dalf", "France Éducation international · DALF", "https://www.france-education-international.fr/diplome/dalf", "exam", "C1-C2", "lrsw", "exam academic", "free", "en",
    "Official DALF C1/C2 page and sample papers. Many universities ask for C1.",
    "Resmî DALF C1/C2 sayfası ve örnek sınavlar. Birçok üniversite C1 ister.");
  R("fei-tcf", "France Éducation international · TCF", "https://www.france-education-international.fr/test/tcf-tout-public", "exam", "A1-C2", "lr", "exam academic life", "free", "en",
    "TCF (tout public, DAP for university, IRN/ANF for residence) with sample tests.",
    "TCF (tout public, üniversite için DAP, oturum için IRN/ANF) örnek testleriyle.");
  R("tv5-delf", "TV5MONDE · Préparer le DELF", "https://apprendre.tv5monde.com/fr/delf", "exam", "A1-B2", "lrsw", "exam", "free", "en",
    "Free DELF training activities with real exam formats.",
    "Gerçek sınav formatlarında ücretsiz DELF hazırlık etkinlikleri.");
  R("rfi-delf", "RFI · Préparer le DELF / DALF", "https://francaisfacile.rfi.fr/fr/test-delf-dalf", "exam", "A1-C1", "l", "exam", "free", "",
    "Listening practice in DELF/DALF format based on RFI news.",
    "RFI haberlerine dayalı DELF/DALF formatında dinleme pratiği.");
  R("prepmyfuture", "Prepmyfuture", "https://www.prepmyfuture.com/", "exam", "A2-C1", "lrg", "exam", "freemium", "en",
    "Online TCF/DELF practice; a few free tests to know your level.",
    "Çevrimiçi TCF/DELF pratiği; seviyeni görmek için birkaç ücretsiz test.");
  R("7jours", "7 jours sur la planète (TV5MONDE)", "https://apprendre.tv5monde.com/fr/7-jours-sur-la-planete", "video", "B1-B2", "lr", "exam core", "free", "",
    "Weekly news reports with exercises in three levels. Excellent DELF B1/B2 preparation.",
    "Üç seviyede alıştırmalı haftalık haber raporları. Mükemmel DELF B1/B2 hazırlığı.");


  /* ═════════ From the master list (compiled 30 Oct 2026) ═════════ */
  const STAR = { star: true };
  const N = (en, tr, extra) => Object.assign({ note: { en, tr } }, extra || {});

  /* §12 Complete courses */
  R("langtransfer", "Language Transfer · Introduction to French", "https://www.languagetransfer.org/courses", "course", "A0-A2", "sgl", "core", "free", "en",
    "~40 audio tracks where a teacher makes you BUILD sentences from minute one. The fastest way to start speaking: weeks 1–4, beside your main course.",
    "Bir öğretmenin ilk dakikadan cümle KURDURDUĞU ~40 ses kaydı. Konuşmaya başlamanın en hızlı yolu: ana kursunla birlikte ilk 1–4 hafta.",
    N("Free app (works offline) on iPhone and Android. French is an 'Introduction' only.", "Ücretsiz uygulama (çevrimdışı çalışır), iPhone ve Android. Fransızca sadece 'Giriş' seviyesinde.", STAR));
  R("voisins12bis", "RFI · Les voisins du 12 bis", "https://francaisfacile.rfi.fr/fr/podcasts/les-voisins-du-12-bis-en-fran%C3%A7ais-anglais/", "podcast", "A0-A1", "lv", "core", "free", "en",
    "A bilingual French/English audio sitcom (13 episodes). The ideal very first listening.",
    "İki dilli (Fransızca/İngilizce) sesli komedi dizisi (13 bölüm). En ideal ilk dinleme.",
    N("If the link moved, search the title on francaisfacile.rfi.fr.", "Bağlantı değiştiyse başlığı francaisfacile.rfi.fr'de ara.", STAR));
  R("rfi-series", "RFI · Parlez-vous Paris ? / Le talisman brisé", "https://francaisfacile.rfi.fr/en/exercices/a1/", "podcast", "A1-A2", "lv", "core", "free", "en",
    "More beginner audio series and levelled exercises with transcripts on RFI's learning site.",
    "RFI öğrenme sitesinde daha fazla başlangıç sesli dizisi ve metinli, seviyeli alıştırmalar.");
  R("openlearn-hub", "OpenLearn · free French courses hub", "https://www.open.edu/openlearn/education-development/university-ready/free-online-french-courses", "course", "A1-B2", "lrw", "core", "free", "en",
    "10 short university units (5–20 h each): Getting started 1–3, travel, holiday plans…",
    "10 kısa üniversite ünitesi (her biri 5–20 saat): Getting started 1–3, seyahat, tatil planları…");
  R("ensemble", "Ensemble en France", "https://mooc.ensemble-en-france.org", "mooc", "A2-B1", "lr", "life exam", "free", "",
    "Videos on civic and daily life in France + A2/B1 quizzes, permanent access, funded by the Interior Ministry. Great for the civic exam.",
    "Fransa'da yurttaşlık ve günlük yaşam videoları + A2/B1 testleri, kalıcı erişim, İçişleri Bakanlığı destekli. Yurttaşlık sınavı için harika.");
  R("coursera-a1", "Coursera · Français Débutant A1 (Naples)", "https://www.coursera.org/fr-FR/learn/french-beginner", "mooc", "A0-A1", "lrg", "core", "free", "en",
    "~9 h in 6 modules. Free to follow; the certificate is paid. Optional.",
    "6 modülde ~9 saat. Takip etmek ücretsiz; sertifika ücretli. İsteğe bağlı.");
  R("edx-montreal", "edX · Français élémentaire 1 (Montréal)", "https://www.edx.org/es/learn/language/universite-de-montreal-francais-elementaire-1", "mooc", "A0-A1", "lsw", "core", "free", "",
    "6 weeks of spoken and written basics (free audit, Québec context).",
    "Konuşma ve yazmanın temellerine 6 hafta (ücretsiz izleme, Québec bağlamı).");
  R("textbooks", "Textbooks at the library (Alter Ego+, Édito, Cosmopolite, Inspire)", "https://www.hachettefle.com/", "book", "A1-C1", "grlw", "core", "lib", "",
    "The series used in French language schools. Borrow them at the médiathèque and take the 'cahier d'activités' with 'corrigés' (answer key).",
    "Dil okullarında kullanılan seriler. Médiathèque'ten ödünç al; 'corrigés' (cevap anahtarı) olan 'cahier d'activités'i de al.");

  /* §13 Apps */
  R("tv5-app", "TV5MONDE EDU: Learn (app)", "https://apps.apple.com/us/app/tv5monde-edu-learn/id1482250598", "app", "A1-C2", "lrgv", "core exam", "free", "en",
    "The TV5MONDE course as an app: A1 course (A2 and B1 added in 2026), placement test, offline mode, TCF practice.",
    "TV5MONDE kursunun uygulaması: A1 kursu (2026'da A2 ve B1 eklendi), seviye testi, çevrimdışı mod, TCF pratiği.", STAR);
  R("mondly", "Mondly", "https://www.mondly.com/", "app", "A0-B1", "vls", "core turkish", "freemium", "tr,en",
    "Short lessons taught from your own language (Turkish too) with a chatbot. 1 free lesson a day.",
    "Kendi dilinden (Türkçe de) öğretilen kısa dersler ve sohbet robotu. Günde 1 ücretsiz ders.");
  R("frenchpod101-site", "FrenchPod101 (site)", "https://www.frenchpod101.com/", "app", "A0-C1", "lv", "core", "freemium", "en",
    "Huge library of short audio/video lessons with transcripts; frequent big discounts.",
    "Metinli kısa ses/video derslerinden dev kütüphane; sık büyük indirimler.");
  R("mauril", "Mauril (CBC/Radio-Canada)", "https://mauril.ca/", "app", "A1-B2", "lv", "core", "free", "en",
    "Learn with Canadian TV and news clips (Québec French). May only work from Canada — test it.",
    "Kanada TV ve haber klipleriyle öğren (Québec Fransızcası). Sadece Kanada'dan çalışabilir — dene.");
  R("mosalingua", "MosaLingua", "https://www.mosalingua.com/", "app", "A1-B2", "vl", "core", "paid", "en",
    "Paid app with a free trial. Only if you really want one more app.",
    "Ücretsiz denemeli ücretli uygulama. Sadece gerçekten bir uygulama daha istersen.");
  R("babbel", "Babbel", "https://www.babbel.com/", "app", "A1-B2", "gvls", "core", "paid", "en",
    "Solid dialogue + grammar course, no free tier (~107–215 $/year, often discounted). Only if you want ONE paid app.",
    "Sağlam diyalog + dilbilgisi kursu, ücretsiz sürüm yok (~107–215 $/yıl, sık indirim). Sadece TEK ücretli uygulama istersen.");

  /* §14 Grammar & conjugation */
  R("tolearnfrench", "To Learn French (Français facile, English version)", "https://www.tolearnfrench.com/", "course", "A0-C1", "gv", "core", "free", "en",
    "8,000+ exercises, placement tests and a free weekly lesson by e-mail.",
    "8.000+ alıştırma, seviye testleri ve e-postayla ücretsiz haftalık ders.");
  R("columbia", "Columbia University grammar drills", "https://www.columbia.edu/~ab410/drills.html", "course", "A2-B2", "g", "core", "free", "en",
    "Multiple-choice drills that explain every answer.",
    "Her cevabı açıklayan çoktan seçmeli alıştırmalar.");
  R("bescherelle", "Bescherelle Conjugaison (app)", "https://apps.apple.com/fr/app/bescherelle-conjugaison/id6745481522", "app", "A1-C2", "g", "core", "free", "",
    "The official conjugation app of the famous reference book (free, with ads).",
    "Ünlü başvuru kitabının resmî fiil çekimi uygulaması (ücretsiz, reklamlı).");
  R("grammaire-prog", "Grammaire progressive du français (CLE)", "https://www.cle-international.com/", "book", "A1-B2", "g", "core", "lib", "",
    "The classic self-study grammar book with answer key. Look for it at the library or second-hand.",
    "Cevap anahtarlı klasik kendi kendine dilbilgisi kitabı. Kütüphanede veya ikinci el ara.");

  /* §15 Vocabulary */
  R("anki-decks", "Anki shared decks (French 5000)", "https://ankiweb.net/shared/decks", "tool", "A1-B2", "v", "core", "free", "en",
    "Search 'French 5000' or 'French frequency' and pick a deck WITH audio and good reviews.",
    "'French 5000' veya 'French frequency' ara; sesli ve iyi yorumlu bir deste seç.");
  R("languageguide", "LanguageGuide.org (picture dictionary)", "https://www.languageguide.org/french/vocabulary/", "tool", "A0-A2", "vp", "core", "free", "en",
    "Point at a picture, hear the word: house, kitchen, body, clothes… Perfect for the first 500 words.",
    "Resme dokun, kelimeyi duy: ev, mutfak, vücut, kıyafetler… İlk 500 kelime için mükemmel.");
  R("ikonet", "Le Dictionnaire visuel (Ikonet)", "https://www.ikonet.com/fr/ledictionnairevisuel/", "tool", "A1-B2", "v", "core health", "freemium", "",
    "Labelled illustrations by theme (including the human body).",
    "Temalara göre etiketli çizimler (insan vücudu dahil).");

  /* §16 Pronunciation */
  R("prononcer", "prononcer.net", "http://www.prononcer.net/progression", "course", "A0-A2", "p", "core", "free", "en",
    "A beginner pronunciation course: alphabet, sounds, minimal pairs, nasal vowels, with MP3s.",
    "Başlangıç telaffuz kursu: alfabe, sesler, minimal çiftler, genizden ünlüler, MP3'lerle.", STAR);
  R("fi-phon", "Français interactif · Phonetics", "https://laits.utexas.edu/fi/html/pho/02.html", "course", "A0-A2", "p", "core", "free", "en",
    "The French sound chart (IPA) with audio; liaison and elision explained in English.",
    "Sesli Fransızca ses tablosu (IPA); liaison ve elision İngilizce anlatımlı.", STAR);
  R("pointdufle-phon", "Le Point du FLE · phonétique", "https://www.lepointdufle.net/p/phonetique.htm", "course", "A0-B2", "p", "core", "free", "",
    "Hub of IPA charts, minimal pairs and liaison drills from all over the web.",
    "Web'in her yerinden IPA tabloları, minimal çiftler ve liaison alıştırmaları.");
  R("phonetiqueca", "phonetique.ca", "https://www.phonetique.ca/exercices_discrimination.html", "course", "A0-B1", "pl", "core", "free", "",
    "~58 'which one did you hear?' drills: vent / vin, ils sont / ils ont… (Québec voices).",
    "~58 'hangisini duydun?' alıştırması: vent / vin, ils sont / ils ont… (Québec sesleri).");
  R("fonetix", "Fonetix", "https://fonetix.org/en/accueil", "course", "A0-B1", "pl", "core", "freemium", "en",
    "Pronunciation + listening course made by FLE teachers; free introductory course.",
    "FLE öğretmenlerinin hazırladığı telaffuz + dinleme kursu; ücretsiz giriş kursu.");
  R("flenet", "FLENET · Phonétique (Univ. León)", "http://flenet.unileon.es/phon/indexphon.html", "course", "A1-B2", "pl", "core", "free", "",
    "Articulation guides, audio exercises and self-correcting dictations (older site, still useful).",
    "Boğumlama rehberleri, sesli alıştırmalar ve kendini düzelten dikteler (eski site, hâlâ faydalı).");

  /* §17 Podcasts */
  R("lfbp", "Learn French by Podcast", "https://learnfrenchbypodcast.com/", "podcast", "A1-B1", "l", "core", "freemium", "en",
    "Short dialogues explained in English; the PDF guides are the paid part.",
    "İngilizce açıklanan kısa diyaloglar; PDF rehberler ücretli kısım.");
  R("littletalk", "Little Talk in Slow French", "https://podcasts.apple.com/search?term=Little%20Talk%20in%20Slow%20French", "podcast", "A2-B1", "l", "core", "free", "",
    "580+ short, slow episodes; active in 2026. Search the title in any podcast app.",
    "580+ kısa, yavaş bölüm; 2026'da aktif. Başlığı herhangi bir podcast uygulamasında ara.");
  R("nisf", "News in Slow French", "https://www.newsinslowfrench.com/french-podcast", "podcast", "A1-C1", "lg", "core", "paid", "en",
    "Weekly slowed-down news + grammar in 3 levels (7-day free trial). RFI's free journal does almost the same.",
    "3 seviyede yavaşlatılmış haftalık haber + dilbilgisi (7 gün ücretsiz). RFI'ın ücretsiz haberi neredeyse aynısını yapar.");
  R("easyfrench-pod", "Easy French Podcast", "https://www.easyfrench.fm/episodes", "podcast", "B1-C1", "l", "core culture", "freemium", "",
    "Two French women chat about daily life in France, every week.",
    "İki Fransız kadın her hafta Fransa'daki günlük yaşamı konuşuyor.", STAR);
  R("onething", "One Thing in a French Day", "https://onethinginafrenchday.podbean.com", "podcast", "B1-B2", "l", "core", "freemium", "",
    "Short slices of everyday life in Paris, 2,300+ episodes.",
    "Paris'te günlük yaşamdan kısa kesitler, 2.300+ bölüm.");
  R("dailyfrenchpod", "Daily French Pod", "http://www.dailyfrenchpod.com/", "podcast", "B1-B2", "lv", "core", "freemium", "en",
    "2,600+ short lessons built on news stories; audio free, PDF guides paid.",
    "Haberlere dayalı 2.600+ kısa ders; ses ücretsiz, PDF rehberler ücretli.");
  R("chosesasavoir", "Choses à Savoir", "https://www.chosesasavoir.com/", "podcast", "B1-C1", "l", "culture academic health", "free", "",
    "Short daily episodes on science, history and health — France's most downloaded podcast brand.",
    "Bilim, tarih ve sağlık üzerine kısa günlük bölümler — Fransa'nın en çok indirilen podcast markası.");
  R("heuredumonde", "L'Heure du Monde (Le Monde)", "https://www.lemonde.fr/lheure-du-monde/", "podcast", "B2-C1", "l", "culture", "free", "",
    "Daily news explainer by Le Monde journalists.",
    "Le Monde gazetecilerinden günlük haber açıklaması.");
  R("grandreportage", "Grand Reportage (RFI)", "https://www.rfi.fr/fr/podcasts/grand-reportage/", "podcast", "B2-C1", "l", "culture", "free", "",
    "~19-minute field reports from all over the world.",
    "Dünyanın her yerinden ~19 dakikalık saha röportajları.");
  R("baladeurs", "Les Baladeurs", "https://www.lesothers.com/podcast-les-baladeurs", "podcast", "B2-C1", "l", "culture sport", "free", "",
    "Outdoor and adventure stories.",
    "Doğa ve macera hikâyeleri.");
  R("metadechoc", "Méta de choc", "https://metadechoc.fr/", "podcast", "C1-C2", "l", "academic", "free", "",
    "Beliefs, science and critical thinking.",
    "İnançlar, bilim ve eleştirel düşünce.");
  R("kiffetarace", "Kiffe ta race", "https://www.youtube.com/channel/UCWT82CHZtVXt0ETIfhs3xrw", "podcast", "C1-C2", "l", "culture", "free", "",
    "Race and society in France — fast and slangy (C1).",
    "Fransa'da ırk ve toplum — hızlı ve argolu (C1).");
  R("cheminsphilo", "Les Chemins de la philosophie (France Culture)", "https://www.radiofrance.fr/franceculture/podcasts/les-chemins-de-la-philosophie", "podcast", "C1-C2", "l", "academic", "free", "",
    "Philosophy, slowly and clearly, for advanced listeners.",
    "İleri seviye dinleyiciler için yavaş ve net felsefe.");

  /* §18 YouTube for learners */
  R("aliceayel", "Alice Ayel", "https://www.youtube.com/user/aliceayel", "video", "A0-A2", "lv", "core", "free", "",
    "Comprehensible-input stories you understand from day 1 without translation (meaning shown with drawings). Perfect from zero.",
    "Çeviri olmadan ilk günden anlaşılan hikâyeler (anlam çizimlerle). Sıfırdan başlamak için mükemmel.", STAR);
  R("fci", "French Comprehensible Input", "https://www.youtube.com/c/FrenchComprehensibleInput/featured", "video", "A0-A2", "l", "core", "free", "",
    "Very simple visual stories, same idea as Alice Ayel.",
    "Çok basit görsel hikâyeler, Alice Ayel ile aynı fikir.");
  R("coffeebreak-yt", "Coffee Break Languages (YouTube)", "https://www.youtube.com/c/CoffeeBreakLanguages/featured", "video", "A0-B1", "lg", "core", "free", "en",
    "Video versions of the Coffee Break French lessons.",
    "Coffee Break French derslerinin video versiyonları.", STAR);
  R("supereasy", "Easy French · Super Easy French", "https://www.youtube.com/playlist?list=PLA5UIoabheFMChKPAUUNNEOd7BobVJVoQ", "video", "A1-A2", "lv", "core", "free", "en",
    "Street interviews made for beginners, with French + English subtitles.",
    "Yeni başlayanlar için sokak röportajları, Fransızca + İngilizce altyazılı.", STAR);
  R("extra", "Extr@ French (sitcom for learners)", "https://celebratelanguages.com/extrafrench.html", "video", "A1-A2", "lv", "core culture", "free", "",
    "13-episode comedy sitcom made for learners, Friends-style, very simple French.",
    "Öğrenenler için yapılmış 13 bölümlük komedi dizisi, Friends tarzı, çok basit Fransızca.",
    N("Unofficial uploads that can disappear: watch them while they're there. Episode 1: youtube.com/watch?v=nftpRbl7r7w", "Kaybolabilen resmî olmayan yüklemeler: varken izle. 1. bölüm: youtube.com/watch?v=nftpRbl7r7w", STAR));
  R("fia", "French in Action (Yale)", "https://archive.org/details/french_in_action", "video", "A0-B1", "lv", "core", "free", "",
    "The legendary immersion video course (52 × 30 min).",
    "Efsanevi dalış (immersion) video kursu (52 × 30 dk).",
    N("Its official home (learner.org) closed in 2026; this is an archive copy.", "Resmî sitesi (learner.org) 2026'da kapandı; bu bir arşiv kopyası."));
  R("pieceoffrench", "Piece of French", "https://www.youtube.com/@pieceoffrench", "video", "A2-B1", "l", "core life", "free", "",
    "Daily-life vlogs designed for comprehension.",
    "Anlamak için tasarlanmış günlük yaşam vlogları.");

  /* §19 YouTube in real French */
  R("hugo-gf", "HugoDécrypte · Grands formats", "https://www.youtube.com/channel/UCUo1RqYV8tGjV38sQ8S5p9A", "video", "B2-C1", "l", "culture", "free", "",
    "Longer explainers and interviews by HugoDécrypte.",
    "HugoDécrypte'den daha uzun açıklamalar ve röportajlar.");
  R("tv5info", "TV5MONDE Info", "https://www.youtube.com/c/TV5MONDEInfo/featured", "video", "B1-C1", "l", "culture", "free", "",
    "World news with many francophone accents.",
    "Birçok frankofon aksanla dünya haberleri.");
  R("rfi-yt", "RFI (YouTube)", "https://www.youtube.com/user/rfivideos", "video", "B1-C1", "l", "culture", "free", "",
    "Radio France Internationale's videos.",
    "Radio France Internationale videoları.");
  R("axolot", "Axolot", "https://www.youtube.com/user/Axolotblog", "video", "B2-C1", "l", "culture", "free", "",
    "Strange and surprising history stories.",
    "Tuhaf ve şaşırtıcı tarih hikâyeleri.");
  R("fastgood", "FastGoodCuisine", "https://www.youtube.com/@FastGoodCuisine", "video", "B1-B2", "lv", "culture life", "free", "",
    "Cooking: the images carry the meaning — good from B1.",
    "Yemek: görüntüler anlamı taşıyor — B1'den itibaren iyi.");
  R("cyprien", "Cyprien", "https://www.youtube.com/@cyprien/videos", "video", "C1-C2", "l", "culture", "free", "",
    "Comedy and slang, for C1.",
    "Komedi ve argo, C1 için.");

  /* §20 TV & streaming */
  R("usgs", "Un si grand soleil (france.tv)", "https://www.france.tv/france-3/un-si-grand-soleil/", "tv", "A2-B1", "l", "culture life", "free", "",
    "Daily soap: a short episode every weekday, same characters, same vocabulary — ideal daily listening with French subtitles.",
    "Günlük dizi: her hafta içi kısa bir bölüm, aynı karakterler, aynı kelimeler — Fransızca altyazıyla ideal günlük dinleme.", STAR);
  R("tf1plus", "TF1+ (Plus belle la vie…)", "https://www.tf1.fr/", "tv", "B1-C1", "l", "culture", "free", "",
    "Private TV replay with ads; the daily soap 'Plus belle la vie, encore plus belle'.",
    "Reklamlı özel TV tekrarı; günlük dizi 'Plus belle la vie, encore plus belle'.");
  R("m6plus", "M6+ (Scènes de ménages…)", "https://www.m6.fr/", "tv", "B1-C1", "l", "culture", "free", "",
    "Short sketch series like 'Scènes de ménages' (couples, 2–4 minutes) — very good for B1.",
    "'Scènes de ménages' gibi kısa skeç dizileri (çiftler, 2–4 dakika) — B1 için çok iyi.");
  R("ina", "INA (TV & radio archive)", "https://www.ina.fr/", "tv", "B2-C1", "l", "culture", "free", "",
    "Decades of French life in short TV and radio clips.",
    "Kısa TV ve radyo kliplerinde onlarca yıllık Fransız yaşamı.");
  R("netflix", "Netflix (French audio + French subtitles)", "https://www.netflix.com/", "tv", "B1-C2", "l", "culture", "paid", "",
    "If you already have it: audio French, subtitles French, plus Language Reactor.",
    "Zaten varsa: ses Fransızca, altyazı Fransızca, artı Language Reactor.");

  /* §21 Music */
  R("parolesclips", "TV5MONDE · Paroles de clips", "https://apprendre.tv5monde.com/fr/recherche?search_api_fulltext=paroles%20de%20clips", "course", "A1-B2", "lv", "culture", "free", "",
    "Exercises built on French music videos.",
    "Fransızca müzik videolarına dayalı alıştırmalar.");
  R("spotify-fr", "Playlists « chanson française »", "https://open.spotify.com/search/chanson%20fran%C3%A7aise/playlists", "podcast", "A1-C2", "l", "culture", "free", "",
    "Free tiers of Spotify/Deezer (with ads): 'chanson française', 'variété française', 'apprendre le français avec des chansons'.",
    "Spotify/Deezer ücretsiz sürümleri (reklamlı): 'chanson française', 'variété française', 'apprendre le français avec des chansons'.");

  /* §22 Reading */
  R("globalstory", "Global Storybooks · Contes en français", "https://global-asp.github.io/storybooks-french/", "reading", "A0-A2", "rl", "core turkish", "free", "tr,en",
    "40 illustrated children's stories in 5 levels WITH AUDIO — and the same stories exist in Turkish: perfect parallel reading from day one.",
    "5 seviyede SESLİ 40 resimli çocuk hikâyesi — aynı hikâyeler Türkçe de var: ilk günden mükemmel paralel okuma.",
    N("Turkish versions: storybookscanada.ca/stories/tr/", "Türkçe versiyonlar: storybookscanada.ca/stories/tr/", STAR));
  R("storyweaver", "StoryWeaver", "https://storyweaver.org.in/", "reading", "A0-A2", "r", "core", "free", "",
    "Thousands of open picture books in 380+ languages (filter by French).",
    "380+ dilde binlerce açık resimli kitap (Fransızca filtrele).");
  R("beelinguapp", "Beelinguapp", "https://beelinguapp.com/", "app", "A1-B2", "rl", "core turkish", "freemium", "tr",
    "Stories side by side in two languages (Turkish | French) with native audio.",
    "Anadil seslendirmeli, iki dilde yan yana hikâyeler (Türkçe | Fransızca).");
  R("tv5biblio", "TV5MONDE · Bibliothèque numérique", "https://bibliothequenumerique.tv5monde.com/", "reading", "A2-B2", "r", "culture", "free", "",
    "600+ books from French-speaking authors to read online or download (ePub/PDF), some with audio.",
    "Fransızca yazarlardan çevrimiçi okunacak veya indirilecek 600+ kitap (ePub/PDF), bazıları sesli.", STAR);
  R("lff", "Lire en français facile (Hachette FLE)", "https://www.hachettefle.com/collections/lff-lire-en-francais-facile", "book", "A1-B2", "rl", "core", "lib", "",
    "Graded readers with audio (~7.50 €, ePub ~5.50 €). Often at the library's FLE shelf.",
    "Sesli seviyeli kitaplar (~7,50 €, ePub ~5,50 €). Çoğu zaman kütüphanenin FLE rafında.");
  R("lcle", "Lectures CLE en français facile", "https://lectures-cle-francais-facile.cle-international.com", "book", "A1-B2", "rl", "core", "lib", "",
    "Graded readers with downloadable audio. Cheap second-hand.",
    "İndirilebilir sesli seviyeli kitaplar. İkinci el ucuz.");
  R("petitnicolas", "Le Petit Nicolas, Astérix, Tintin (library)", "https://www.google.com/maps/search/m%C3%A9diath%C3%A8que", "book", "B1-B2", "r", "culture", "lib", "",
    "Comics and illustrated short stories: a classic first 'real' book. Borrow them at the médiathèque.",
    "Çizgi romanlar ve resimli kısa öyküler: klasik ilk 'gerçek' kitap. Médiathèque'ten ödünç al.");
  R("bibebook", "Bibebook", "https://bibebook.com/", "reading", "B2-C2", "r", "culture", "free", "",
    "Free public-domain e-books.",
    "Ücretsiz kamu malı e-kitaplar.");
  R("readlang", "Readlang", "https://readlang.com", "tool", "A2-C1", "rv", "core", "freemium", "tr,en",
    "Click any word on any web page for its translation; it builds your flashcards automatically.",
    "Herhangi bir web sayfasında kelimeye tıkla, çevirisini gör; kartlarını otomatik oluşturur.", STAR);

  /* §23 Writing */
  R("langcorrect", "LangCorrect", "https://langcorrect.com/", "community", "A1-C1", "w", "core", "free", "en",
    "Post a short journal entry; native speakers correct it line by line. You correct Turkish or English in return.",
    "Kısa bir günlük yaz; anadili konuşanlar satır satır düzeltir. Sen de Türkçe veya İngilizce düzeltirsin.", STAR);
  R("reverso-corr", "Reverso Corrector", "https://www.reverso.net/spell-checker/french-spelling-grammar/", "tool", "A2-C1", "w", "core", "freemium", "en",
    "Spelling and grammar corrector.",
    "Yazım ve dilbilgisi düzeltici.");

  /* §24 Speaking */
  R("mylangex", "MyLanguageExchange", "https://www.mylanguageexchange.com/", "community", "A2-C2", "s", "core", "freemium", "en",
    "Partner directory by city.",
    "Şehre göre partner rehberi.");
  R("polyglot", "Polyglot Club", "https://polyglotclub.com/", "community", "A2-C2", "s", "core life", "free", "en",
    "Exchange website + weekly language-exchange evenings in bars in many French cities.",
    "Değişim sitesi + birçok Fransız şehrinde barlarda haftalık dil değişimi akşamları.");
  R("ai-voice", "AI voice conversation (Claude, ChatGPT, Gemini Live)", "https://gemini.google/overview/gemini-live/", "community", "A1-C2", "sl", "core life", "freemium", "tr,en",
    "Role-play the pharmacy, the bank, a doctor's appointment, a job interview — any time, no shyness. Ask for corrections at the end.",
    "Eczane, banka, doktor randevusu, iş görüşmesi canlandır — her zaman, utanmadan. Sonunda düzeltme iste.");
  R("italki", "italki", "https://www.italki.com/", "community", "A1-C2", "s", "core exam", "paid", "tr,en",
    "Community tutors from ~5 $/h, professional teachers from ~15 $/h, cheap trial lessons. From A2, the best use of money.",
    "Topluluk eğitmenleri ~5 $/saat'ten, profesyonel öğretmenler ~15 $/saat'ten, ucuz deneme dersleri. A2'den itibaren paranın en iyi kullanımı.");
  R("preply", "Preply", "https://preply.com/", "community", "A1-C2", "s", "core exam", "paid", "tr,en",
    "~10–40 $/h; trial lesson 5–20 $; switch tutor for free.",
    "~10–40 $/saat; deneme dersi 5–20 $; eğitmen değiştirmek ücretsiz.");

  /* §25 Dictionaries */
  R("larousse-en", "Larousse FR–EN", "https://www.larousse.fr/dictionnaires/francais-anglais", "tool", "A1-C2", "v", "core", "free", "en",
    "Bilingual dictionary + monolingual + conjugation.",
    "İki dilli sözlük + tek dilli + fiil çekimi.");
  R("collins", "Collins French", "https://www.collinsdictionary.com/", "tool", "A1-C2", "v", "core", "free", "en",
    "Reliable French–English dictionary.",
    "Güvenilir Fransızca–İngilizce sözlük.");
  R("linguee", "Linguee", "https://www.linguee.com/", "tool", "A2-C2", "v", "core", "free", "en",
    "Words in real translated sentences (by DeepL).",
    "Gerçek çevrilmiş cümlelerde kelimeler (DeepL'den).");
  R("reverso-dict", "Reverso Dictionnaire", "https://dictionnaire.reverso.net/francais-anglais/", "tool", "A1-C2", "v", "core", "freemium", "en",
    "Thousands of example sentences in context.",
    "Bağlam içinde binlerce örnek cümle.");
  R("tdk", "TDK Güncel Türkçe Sözlük", "https://sozluk.gov.tr/", "tool", "A0-C2", "v", "turkish", "free", "tr",
    "For every loanword it gives the French source ('Fransızca garçon'…): the perfect tool to spot cognates and false friends.",
    "Her alıntı kelime için Fransızca kaynağını verir ('Fransızca garçon'…): ortak kelimeleri ve yanlış dostları bulmak için mükemmel.", STAR);
  R("reverso-frtr", "Reverso French–Turkish", "https://dictionary.reverso.net/french-turkish/", "tool", "A1-C2", "v", "turkish", "freemium", "tr",
    "Direct French–Turkish dictionary.",
    "Doğrudan Fransızca–Türkçe sözlük.");
  R("turkcesozluk", "TurkceSozluk.net", "https://www.turkcesozluk.net/", "tool", "A0-C1", "v", "turkish", "free", "tr",
    "Direct Turkish ↔ French lookup.",
    "Doğrudan Türkçe ↔ Fransızca arama.");
  R("fransizcasozluk", "fransizcasozluk.net", "http://www.fransizcasozluk.net/", "tool", "A0-C1", "v", "turkish", "free", "tr",
    "French–Turkish dictionary and text translation.",
    "Fransızca–Türkçe sözlük ve metin çevirisi.");
  R("lexilogos", "Lexilogos · Turkish dictionaries", "https://www.lexilogos.com/turc_dictionnaire.htm", "tool", "A1-C2", "v", "turkish", "free", "",
    "Directory of French–Turkish dictionaries (Lingea, Reverso, Glosbe, Eurodict, Saraç).",
    "Fransızca–Türkçe sözlükler rehberi (Lingea, Reverso, Glosbe, Eurodict, Saraç).");
  R("yandex", "Yandex Translate", "https://translate.yandex.com/", "tool", "A0-C2", "rw", "turkish", "free", "tr",
    "Good Turkish ↔ French translator.",
    "İyi bir Türkçe ↔ Fransızca çevirmen.");
  R("enwikt", "English Wiktionary (Turkish words from French)", "https://en.wiktionary.org/wiki/peron", "tool", "A1-C2", "v", "turkish", "free", "en",
    "Marks Turkish words 'borrowed from French' — e.g. peron.",
    "Türkçe kelimeleri 'Fransızcadan alıntı' olarak işaretler — ör. peron.");
  R("lens", "Google Lens", "https://search.google/ways-to-search/lens/", "tool", "A0-C2", "r", "life", "free", "tr,en",
    "Point the phone at a sign, a form, a letter, a label: instant translation.",
    "Telefonu bir tabelaya, forma, mektuba, etikete tut: anında çeviri.");

  /* §26 In Turkish */
  R("aykut", "Aykut Yavuz Fransızca Dersleri", "https://www.youtube.com/channel/UC3JYej3asgx4D7iAf8QSWXQ", "video", "A1-C2", "gvlp", "turkish exam", "free", "tr",
    "~700 videos in Turkish, playlists by level + DELF/DALF; the teacher grew up in France. Your Turkish safety net.",
    "Türkçe ~700 video, seviyeye göre oynatma listeleri + DELF/DALF; öğretmen Fransa'da büyümüş. Türkçe güvenlik ağın.",
    N("Free roadmap articles on yavuzaykut.com (books are paid).", "yavuzaykut.com'da ücretsiz yol haritası yazıları (kitaplar ücretli).", STAR));
  R("kolayfr", "Kolay Fransızca", "https://www.youtube.com/channel/UCmUzDSiKmguvVl5GSBSLs4Q", "video", "A1-B1", "lsp", "turkish", "free", "tr",
    "Slow listen-and-repeat everyday sentences and dialogues.",
    "Yavaş, dinle-tekrar et tarzında günlük cümleler ve diyaloglar.");
  R("detaylariyla", "Detaylarıyla Fransızca", "https://www.youtube.com/@detaylariyla.fransizca", "video", "A1-C1", "g", "turkish", "free", "tr",
    "'Fransızca Öğreniyorum' A1–A2 grammar series with a PDF.",
    "PDF'li 'Fransızca Öğreniyorum' A1–A2 dilbilgisi serisi.");
  R("askla", "Aşk'la Fransızca", "https://www.youtube.com/@asklafransizca", "video", "A1-B2", "gv", "turkish", "free", "tr",
    "Long A1–A2 grammar and vocabulary exercise videos.",
    "Uzun A1–A2 dilbilgisi ve kelime alıştırma videoları.");
  R("fransizcadersler", "Fransızca Dersler", "https://www.youtube.com/fransizcadersler", "video", "A1-B1", "g", "turkish", "free", "tr",
    "Clear grammar explainers (e.g. passé composé with avoir / être).",
    "Net dilbilgisi anlatımları (ör. avoir / être ile passé composé).");
  R("uplearner-yt", "Dil Okulumuz (Merve Yıldırım Yüzen)", "https://www.youtube.com/@uplearner", "video", "A1-A2", "g", "turkish", "free", "tr",
    "'Fransızca Öğreniyorum' beginner series (promotes a paid course).",
    "'Fransızca Öğreniyorum' başlangıç serisi (ücretli bir kursu tanıtıyor).");
  R("fransizca-a1a2", "Fransizca Dersler A1–A2", "https://www.youtube.com/channel/UCRVoOm_0C9QAxqCfkWo8kcw", "video", "A1-A2", "g", "turkish exam", "free", "tr",
    "A1–A2 lessons and DELF practice in Turkish.",
    "Türkçe A1–A2 dersleri ve DELF pratiği.");
  R("asbu", "ASBÜ « Fransızca – A1 » (free PDF coursebook)", "https://yayinasbu.asbu.edu.tr/sites/digerleri/yayinasbu.asbu.edu.tr/files/inline-files/fransizca.pdf", "book", "A0-A1", "grlv", "turkish core", "free", "tr",
    "A complete university A1 coursebook (2024) with QR-code audio and an answer key, Turkish introduction.",
    "QR kodlu sesli ve cevap anahtarlı eksiksiz üniversite A1 ders kitabı (2024), Türkçe giriş.", STAR);
  R("derkunt", "Derkunt · Türkçede Kullanılan Fransızca Sözcükler", "https://bys-sbmyo.marmara.edu.tr/en/books/turkcede-kullanilan-fransizca-sozcukler", "book", "A0-B1", "v", "turkish", "free", "tr",
    "Free PDF/ePub: the French words Turkish already uses. Instant vocabulary.",
    "Ücretsiz PDF/ePub: Türkçenin zaten kullandığı Fransızca kelimeler. Anında kelime hazinesi.", STAR);
  R("meb-aol", "MEB Açık Öğretim Lisesi · Yabancı Dil Fransızca 1–8", "http://aokul.gov.tr/Kitaplar/Kitaplar.aspx?type=2", "book", "A1-B2", "grv", "turkish", "free", "tr",
    "State high-school textbooks A1.1–B2.1 as free PDFs (audio missing).",
    "Ücretsiz PDF devlet lise ders kitapları A1.1–B2.1 (ses yok).");
  R("lingohut", "LingoHut (Türkçe → Fransızca)", "https://www.lingohut.com/tr/l58/frans%C4%B1zca-%C3%B6%C4%9Frenin", "course", "A0-A1", "vl", "turkish", "free", "tr",
    "125 short vocabulary and phrase lessons with audio, no login.",
    "Sesli 125 kısa kelime ve ifade dersi, giriş gerektirmez.");
  R("uplearner", "UpLearner (live classes in Turkish)", "https://uplearner.org", "course", "A1-B1", "gls", "turkish", "paid", "tr",
    "~279 € for 2 years of live classes, taught in Turkish. Only if you want a structured paid course.",
    "Türkçe canlı dersler, 2 yıl için ~279 €. Sadece yapılandırılmış ücretli bir kurs istersen.");
  R("boenstitu", "Boğaziçi Enstitüsü · Temel Seviye Fransızca", "https://boenstitu.com/online-egitimler/temel-seviye-fransizca-egitimi", "course", "A0-A1", "g", "turkish", "paid", "tr",
    "~1,499 TL, 45 video units, taught in Turkish.",
    "~1.499 TL, 45 video ünite, Türkçe anlatım.");
  R("culturetheque", "Culturethèque (Institut français)", "https://www.culturetheque.com/", "reading", "A1-B2", "rl", "core", "freemium", "",
    "Institut français digital library: 'Français facile' A1–B2, DELF reading lists, audiobooks. Needs an account.",
    "Institut français dijital kütüphanesi: 'Français facile' A1–B2, DELF okuma listeleri, sesli kitaplar. Hesap gerekir.");
  R("ifturquie", "Institut français de Turquie", "https://www.ifturquie.org/", "official", "A1-C2", "lsrw", "turkish exam", "paid", "tr",
    "In-person courses in Ankara, İstanbul and İzmir; DELF/DALF exam centre in Turkey.",
    "Ankara, İstanbul ve İzmir'de yüz yüze kurslar; Türkiye'de DELF/DALF sınav merkezi.");

  /* §27 Extensions */
  R("deepl-ext", "DeepL browser extension", "https://www.deepl.com/en/chrome-extension", "tool", "A1-C2", "r", "core", "free", "tr,en",
    "Translate any selected text in the browser.",
    "Tarayıcıda seçili herhangi bir metni çevir.");
  R("toucan", "Toucan", "https://jointoucan.com/", "tool", "A0-A2", "v", "core", "free", "en",
    "Swaps a few words on English websites you read for their French translation — painless vocabulary.",
    "Okuduğun İngilizce sitelerde birkaç kelimeyi Fransızcasıyla değiştirir — zahmetsiz kelime.");

  /* §28 Exams */
  R("delfdalfch", "delfdalf.ch · full practice papers", "https://www.delfdalf.ch/niveaux/exemples-dexamens", "exam", "A1-C2", "lrsw", "exam", "free", "",
    "Full DELF/DALF practice papers A1–C2 (check the format matches the current exam).",
    "A1–C2 eksiksiz DELF/DALF deneme sınavları (formatın güncel sınavla uyumunu kontrol et).", STAR);
  R("delf-b1-manual", "DELF B1 candidate handbook", "https://france-education-international.fr/document/manuel-candidat-delf-b1", "exam", "B1", "lrsw", "exam", "free", "",
    "The official handbook: format, timing, marking.",
    "Resmî el kitabı: format, süre, puanlama.");
  R("tef-irn", "TEF IRN (CCI Paris)", "https://lefrancaisdesaffaires.fr/en/candidate/test-evaluation-francais/tef-irn/presentation", "exam", "A1-B2", "lrsw", "exam life", "free", "en",
    "Test for residence and citizenship (90 min, valid 2 years, ~180 €, CPF eligible). Free sample tasks and tutorials.",
    "Oturum ve vatandaşlık testi (90 dk, 2 yıl geçerli, ~180 €, CPF ile ödenebilir). Ücretsiz örnek görevler ve eğitimler.",
    N("Free prep hub: lefrancaisdesaffaires.fr › TEF IRN › préparation", "Ücretsiz hazırlık: lefrancaisdesaffaires.fr › TEF IRN › préparation"));
  R("tcf-irn", "TCF IRN (France Éducation international)", "https://www.france-education-international.fr/actualites/nouveautes-tcf-irn", "exam", "A1-B2", "lrsw", "exam life", "free", "en",
    "Test built for residence cards and citizenship: 4 skills, ~1h35, same day; result valid 2 years (~174–200 €).",
    "Oturma kartları ve vatandaşlık için test: 4 beceri, ~1s35, aynı gün; sonuç 2 yıl geçerli (~174–200 €).");
  R("tv5-tcf", "TV5MONDE · TCF simulation", "https://apprendre.tv5monde.com/fr/tcf", "exam", "A1-C2", "lr", "exam", "free", "en",
    "Free TCF practice in the real format.",
    "Gerçek formatta ücretsiz TCF pratiği.");
  R("dfp-sante", "DFP Santé (French for health professionals)", "https://www.lefrancaisdesaffaires.fr/candidat/diplomes-francais-professionnel/dfp-sante/presentation/", "exam", "B1-C1", "lrsw", "exam health", "free", "en",
    "Diploma of professional French for physiotherapists, nurses and doctors (B1, B2/C1); valid for life.",
    "Fizyoterapist, hemşire ve doktorlar için mesleki Fransızca diploması (B1, B2/C1); ömür boyu geçerli.", STAR);
  R("pointdufle-eval", "Le Point du FLE · DELF, DALF, TCF, TEF, DFP practice", "https://www.lepointdufle.net/p/francais-evaluation.htm", "exam", "A1-C2", "lrsw", "exam", "free", "",
    "Directory of practice for every French exam.",
    "Her Fransızca sınavı için pratik rehberi.");
  R("carif", "Carif-Oref DIAN (courses & test centres)", "https://www.intercariforef.org/formations/recherche-formations-dian.html", "official", "A1-B2", "", "exam life", "free", "",
    "Official search for French courses and TCF IRN / TEF IRN test venues.",
    "Fransızca kursları ve TCF IRN / TEF IRN sınav merkezleri için resmî arama.");

  /* §29 Official levels */
  R("sp-cards", "Service-Public · residence cards & language level", "https://www.service-public.gouv.fr/particuliers/vosdroits/F34501", "official", "B1-C1", "r", "life exam", "free", "",
    "Official rules: A2 for the first multi-year card, B1 for the 10-year card (first applications since 2026).",
    "Resmî kurallar: ilk çok yıllık kart için A2, 10 yıllık kart için B1 (2026'dan beri ilk başvurular).");
  R("sp-natur", "Service-Public · naturalisation", "https://www.service-public.gouv.fr/particuliers/vosdroits/F11926", "official", "B1-C1", "r", "life", "free", "",
    "Naturalisation requires B2 (speaking + writing).",
    "Vatandaşlık B2 gerektirir (konuşma + yazma).");
  R("sp-civic", "Service-Public · the civic exam", "https://www.service-public.gouv.fr/particuliers/vosdroits/F39426", "official", "A2-B1", "r", "life exam", "free", "",
    "40 questions in French, 45 min, pass mark 32/40, ~60–80 €; a pass never expires.",
    "Fransızca 40 soru, 45 dk, geçme notu 32/40, ~60–80 €; geçince ömür boyu geçerli.");
  R("civique", "Formation civique (official prep)", "https://formation-civique.interieur.gouv.fr/", "official", "A2-B1", "r", "life exam", "free", "",
    "Official topic sheets and question lists from the Interior Ministry.",
    "İçişleri Bakanlığı'nın resmî konu sayfaları ve soru listeleri.", STAR);
  R("civique-pdf", "Civic exam · knowledge questions (PDF)", "https://www.lefrancaisdesaffaires.fr/wp-content/uploads/2025/12/examen-civique-naturalisation-questions-de-connaissance.pdf", "exam", "A2-B2", "r", "life exam", "free", "",
    "The naturalisation knowledge questions in one PDF.",
    "Vatandaşlık bilgi soruları tek bir PDF'te.");
  R("sp-dap", "Service-Public · university admission (DAP)", "https://www.service-public.gouv.fr/particuliers/vosdroits/R1278", "official", "B1-C1", "r", "academic", "free", "",
    "For a non-EU national living in France: the 'dossier vert' DAP, 3 choices, filed by 15 December; TCF + writing test late Jan/early Feb (exempt with DELF B2).",
    "Fransa'da yaşayan AB dışı vatandaş için: 'dossier vert' DAP, 3 tercih, 15 Aralık'a kadar; Ocak sonu/Şubat başı TCF + yazma testi (DELF B2 ile muaf).", STAR);
  R("dap-notice", "DAP 2027–28 notice (PDF)", "https://www.enseignementsup-recherche.gouv.fr/sites/default/files/2026-10/Notice%20dossier%20vert%20DAP%202027-2028.pdf", "official", "B1-C1", "r", "academic", "free", "",
    "The official notice for the 2027–28 first-year admission round.",
    "2027–28 birinci sınıf kabul dönemi için resmî duyuru.");
  R("campus-eef", "Campus France · Études en France", "https://www.campusfrance.org/fr/candidature-procedure-etudes-en-france", "official", "B1-C1", "r", "academic", "free", "",
    "Only for applicants living in one of 75 listed countries and applying from there (otherwise: DAP).",
    "Sadece listelenen 75 ülkeden birinde yaşayıp oradan başvuranlar için (değilse: DAP).");

  /* §30 In-person courses */
  R("sp-cir", "Service-Public · OFII integration contract (CIR)", "https://www.service-public.gouv.fr/particuliers/vosdroits/F17048?lang=en", "official", "A0-A2", "lsrw", "life", "free", "en",
    "Free State-funded French training up to A2 (up to 600 h) + 4 civic days, for many first residence permits. If eligible, say yes to everything.",
    "Birçok ilk oturma izni için A2'ye kadar (600 saate kadar) devlet destekli ücretsiz Fransızca + 4 yurttaşlık günü. Uygunsan her şeye evet de.", STAR);
  R("refugiesinfo", "Refugies.info · Find a French class", "https://refugies.info/en/find-french-class", "community", "A0-B2", "lsrw", "life", "free", "en",
    "Search classes by town and level; open to ALL foreigners (not only refugees).",
    "Şehir ve seviyeye göre kurs ara; TÜM yabancılara açık (sadece mültecilere değil).", STAR);
  R("bonjourbonjour", "BonjourBonjour", "https://www.bonjourbonjour.fr/en", "community", "A0-B2", "lsrw", "life", "free", "en",
    "Course finder (web + app); many classes free or reduced-price.",
    "Kurs bulucu (web + uygulama); birçok kurs ücretsiz veya indirimli.");
  R("reseaualpha", "Réseau Alpha (Paris region)", "https://www.reseau-alpha.org/trouver-une-formation", "community", "A0-B1", "lsrw", "life", "free", "",
    "Excellent course finder, but Paris region only.",
    "Mükemmel kurs bulucu, ama sadece Paris bölgesi.");
  R("avf", "AVF · Accueil des Villes Françaises", "https://avf-union-nationale.fr/", "community", "A1-C1", "s", "life", "free", "",
    "245 local associations welcoming newcomers; many run French conversation groups.",
    "Yeni gelenleri karşılayan 245 yerel dernek; çoğu Fransızca sohbet grupları düzenliyor.");
  R("centressociaux", "Centres sociaux (ASL workshops)", "https://www.centres-sociaux.fr/reseau/", "community", "A0-B1", "sl", "life", "free", "",
    "1,250+ neighbourhood centres: ask for 'ateliers sociolinguistiques (ASL)' or 'Français pour tous'.",
    "1.250+ mahalle merkezi: 'ateliers sociolinguistiques (ASL)' veya 'Français pour tous' sor.");
  R("cimade", "La Cimade · French workshops", "https://www.lacimade.org/nos-actions/cours-de-francais-pour-les-adultes-etrangers/", "community", "A0-B1", "s", "life", "free", "",
    "Volunteer speaking workshops in 34 cities.",
    "34 şehirde gönüllü konuşma atölyeleri.");
  R("croixrouge", "Croix-Rouge · French classes", "https://www.croix-rouge.fr/annuaire", "community", "A0-B1", "lsrw", "life", "free", "",
    "French classes open to everyone, whatever their situation (find your local unit).",
    "Durumu ne olursa olsun herkese açık Fransızca kursları (yerel birimini bul).");
  R("sp-cpf", "CPF (personal training account)", "https://www.service-public.gouv.fr/particuliers/vosdroits/F10705", "official", "A1-C1", "", "life exam", "free", "",
    "If you work in France, the CPF can pay for French courses or the TEF IRN (~150 € flat contribution per use).",
    "Fransa'da çalışıyorsan CPF Fransızca kurslarını veya TEF IRN'i ödeyebilir (kullanım başına ~150 € sabit katkı).");
  R("ulorraine", "Université de Lorraine · intensive French", "https://defle.univ-lorraine.fr/fr/inscriptions/tarifs", "course", "A1-C1", "lsrw", "academic", "paid", "",
    "For comparison: 1,560 € per semester (240 h) ≈ 6.50 €/hour.",
    "Karşılaştırma için: dönem başı 1.560 € (240 saat) ≈ saati 6,50 €.");
  R("alliancefr", "Alliance Française", "https://www.alliancefr.org/", "course", "A1-C2", "lsrw", "core exam", "paid", "",
    "Paid courses in Paris and many cities. The free plan + a cheap tutor covers most of what they offer.",
    "Paris ve birçok şehirde ücretli kurslar. Ücretsiz plan + ucuz bir eğitmen çoğunu karşılar.");

  /* §31 Work, studies, health */
  R("dfp-prep", "DFP Santé · free preparation", "https://www.lefrancaisdesaffaires.fr/candidat/diplomes-francais-professionnel/dfp-sante/preparation/", "exam", "B1-C1", "lrsw", "health exam", "free", "",
    "B1 and B2/C1 sample papers with audio and answer keys + online tutorials. Made for health professionals like you.",
    "Sesli ve cevap anahtarlı B1 ve B2/C1 örnek sınavlar + çevrimiçi eğitimler. Senin gibi sağlık profesyonelleri için.", STAR);
  R("pointdufle-fos", "Le Point du FLE · French for specific purposes", "https://www.lepointdufle.net/p/francais-sur-objectifs-specifiques.htm", "course", "A2-C1", "vr", "health academic", "free", "",
    "Medical vocabulary, nursing French (CCDMD 'La piqûre du français'), workplace and academic French.",
    "Tıbbi kelimeler, hemşirelik Fransızcası (CCDMD 'La piqûre du français'), iş yeri ve akademik Fransızca.", STAR);
  R("rfi-sante", "RFI · Health & science news by level", "https://francaisfacile.rfi.fr/fr/comprendre-actualit%C3%A9-fran%C3%A7ais/sant%C3%A9-sciences-a1/", "course", "A1-B2", "lr", "health", "free", "",
    "Health and science news with exercises, A1 to B2.",
    "A1'den B2'ye alıştırmalı sağlık ve bilim haberleri.");
  R("rfi-dfp", "RFI · DFP Santé practice (advising a patient)", "https://francaisfacile.rfi.fr/fr/r%C3%A9viser/20221107-se-pr%C3%A9parer-au-dipl%C3%B4me-de-fran%C3%A7ais-professionnel-de-la-sant%C3%A9-conseiller-sur-un-traitement", "exam", "B1", "ls", "health exam", "free", "",
    "B1 task: advising a patient on a treatment.",
    "B1 görevi: bir hastaya tedavi hakkında tavsiye vermek.");
  R("mooc2move", "Mooc2Move (Univ. Grenoble Alpes)", "https://www.fun-mooc.fr/fr/cours/mooc2move/", "mooc", "B1-B2", "lrw", "academic", "free", "",
    "~24 h of French for university study (session dates vary).",
    "Üniversite eğitimi için ~24 saat Fransızca (oturum tarihleri değişir).");
  R("rfi-etudier", "RFI · Étudier en France", "https://francaisfacile.rfi.fr/fr/tag/%C3%A9tudier-en-france/", "course", "C1-C2", "lr", "academic", "free", "",
    "Advanced listening on studying in France.",
    "Fransa'da okumak üzerine ileri seviye dinleme.");
  R("rfi-travailler", "RFI · Travailler en français", "https://francaisfacile.rfi.fr/fr/tag/travailler-en-fran%C3%A7ais/", "course", "A2-B2", "lr", "life", "free", "",
    "French for the workplace, with exercises.",
    "İş yeri Fransızcası, alıştırmalarla.");
  R("afpa", "AFPA · free beginner French MOOC", "https://mooc.afpa.fr/courses/course-v1:afpa+MOOC_FLE_AFPA+FLE/about", "mooc", "A0-A2", "lsrw", "life", "free", "",
    "Beginner French for work (check for an open session).",
    "İş için başlangıç Fransızcası (açık oturum olup olmadığını kontrol et).");

  /* Corrections and top picks from the master list */
  /* ───────── v3 additions (31 Oct 2026): sport, health, C1–C2 reading, podcasts, admin ───────── */
  // Sport, STAPS, physiotherapy
  R("irbms", "IRBMS · médecine du sport", "https://www.irbms.com/", "reading", "B2-C1", "rv", "health sport", "free", "",
    "A sports-medicine institute's library of clear articles on injuries, training, nutrition and return to sport. Perfect professional reading.",
    "Bir spor hekimliği enstitüsünün sakatlıklar, antrenman, beslenme ve spora dönüş üzerine anlaşılır makaleleri. Mükemmel mesleki okuma.", STAR);
  R("handnews", "Handnews", "https://www.handnews.fr/", "news", "B1-C1", "r", "sport culture", "free", "",
    "French handball news: clubs, national teams, transfers. Your favourite sport as daily reading practice.",
    "Fransız hentbol haberleri: kulüpler, milli takımlar, transferler. En sevdiğin spor günlük okuma pratiği olarak.");
  R("lnh", "LNH · Ligue nationale de handball", "https://www.lnh.fr/", "news", "B1-C1", "rl", "sport culture", "free", "",
    "The French men's handball league: results, interviews and match videos with French commentary.",
    "Fransa erkekler hentbol ligi: sonuçlar, röportajlar ve Fransızca anlatımlı maç videoları.");
  R("fnek", "FNEK · étudiants en kinésithérapie", "https://www.fnek.fr/", "official", "B1-C1", "r", "health academic", "free", "",
    "The national federation of physiotherapy students: how IFMK schools work, studies, student life. Useful to understand the French route.",
    "Ulusal fizyoterapi öğrencileri federasyonu: IFMK okulları nasıl işler, eğitim, öğrenci hayatı. Fransız yolunu anlamak için faydalı.");
  R("ffmkr", "FFMKR · kinésithérapeutes", "https://www.ffmkr.org/", "official", "B2-C1", "r", "health", "free", "",
    "The main French physiotherapists' union: news about the profession, practice rules and fees.",
    "Fransa'nın ana fizyoterapist sendikası: meslek haberleri, çalışma kuralları ve ücretler.");
  R("sante-gouv", "Ministère de la Santé", "https://sante.gouv.fr/", "official", "B2-C1", "r", "health life", "free", "",
    "Official health ministry site. Search « autorisation d'exercice masseur-kinésithérapeute » for the procedure for foreign diplomas.",
    "Resmî sağlık bakanlığı sitesi. Yabancı diplomalar için prosedür: « autorisation d'exercice masseur-kinésithérapeute » diye ara.", N("Rules change: always check the date of the page.", "Kurallar değişir: sayfanın tarihine mutlaka bak."));
  R("vae", "France VAE", "https://vae.gouv.fr/", "official", "B2-C1", "r", "academic life", "free", "",
    "The official service to have your work experience recognised as a French diploma (validation des acquis de l'expérience).",
    "İş deneyimini Fransız diploması olarak tanıtmak için resmî servis (validation des acquis de l'expérience).");
  R("etudiantgouv", "etudiant.gouv.fr", "https://www.etudiant.gouv.fr/", "official", "B1-C1", "r", "academic life", "free", "",
    "Everything about student life in France: grants, housing, health, jobs, international students.",
    "Fransa'da öğrenci hayatı hakkında her şey: burslar, konut, sağlık, iş, uluslararası öğrenciler.");
  R("messervices", "MesServices.étudiant (CROUS)", "https://www.messervices.etudiant.gouv.fr/", "official", "B1-C1", "r", "academic life", "free", "",
    "Apply for a CROUS grant or student housing.",
    "CROUS bursu veya öğrenci yurdu başvurusu.");
  R("physiopedia", "Physiopedia (English)", "https://www.physio-pedia.com/", "reading", "B1-C2", "rv", "health academic", "free", "en",
    "The physiotherapy wiki, in English. Look up a condition in English, then find the French terms in the Physio deck or a French article.",
    "İngilizce fizyoterapi vikisi. Bir durumu İngilizce bak, sonra Fransızca terimleri Fizyoterapi destesinde veya Fransızca bir makalede bul.");
  R("vidal", "VIDAL", "https://www.vidal.fr/", "tool", "B2-C1", "rv", "health", "free", "",
    "The French reference for medicines, with patient-friendly health pages. Real medical vocabulary.",
    "İlaçlar için Fransız referansı, hastaya yönelik sağlık sayfalarıyla. Gerçek tıbbi kelime hazinesi.");
  R("santefr", "Santé.fr", "https://www.sante.fr/", "official", "A2-B2", "r", "health life", "free", "",
    "Official public health information: find a doctor or a pharmacy, vaccines, prevention, in simple French.",
    "Resmî halk sağlığı bilgisi: doktor veya eczane bul, aşılar, önleme, sade Fransızcayla.");
  R("mangerbouger", "Manger Bouger", "https://www.mangerbouger.fr/", "reading", "A2-B2", "rv", "health sport life", "free", "",
    "The national nutrition and physical activity site: recipes, tips, simple texts. Handy for sport-health French.",
    "Ulusal beslenme ve fiziksel aktivite sitesi: tarifler, öneriler, basit metinler. Spor-sağlık Fransızcası için kullanışlı.");
  R("cochrane-fr", "Cochrane France", "https://france.cochrane.org/", "reading", "C1-C2", "r", "health academic", "free", "",
    "Evidence-based medicine in French: plain-language summaries of systematic reviews.",
    "Fransızca kanıta dayalı tıp: sistematik derlemelerin sade dille özetleri.");
  R("tibo", "Tibo InShape", yt("Tibo InShape"), "video", "B1-B2", "lv", "sport culture", "free", "",
    "France's biggest fitness YouTuber: training, challenges, very spoken French. Fun listening for a sports person.",
    "Fransa'nın en büyük fitness YouTuber'ı: antrenman, meydan okumalar, çok gündelik Fransızca. Sporcu biri için eğlenceli dinleme.");
  R("yt-kine", "YouTube · exercices de kiné", yt("kinésithérapeute exercices rééducation"), "video", "B1-C1", "lv", "health sport", "free", "",
    "French physios explaining rehab exercises: knee, back, shoulder. Listen to how they give instructions to patients.",
    "Rehabilitasyon egzersizlerini anlatan Fransız fizyoterapistler: diz, bel, omuz. Hastalara nasıl talimat verdiklerini dinle.");
  R("espritsorcier", "L'Esprit Sorcier", yt("L'Esprit Sorcier Jamy"), "video", "B1-C1", "lv", "culture health", "free", "",
    "Jamy (from C'est pas sorcier) explains science and health clearly, with diagrams. Great for B1–B2 listening.",
    "Jamy (C'est pas sorcier'den) bilimi ve sağlığı şemalarla açıkça anlatır. B1–B2 dinleme için harika.");

  // C1–C2 reading, culture, science
  R("shortedition", "Short Édition", "https://short-edition.com/fr", "reading", "B1-C2", "r", "culture", "free", "",
    "Thousands of free short stories and poems, sorted by reading time (1, 3, 5 minutes). Perfect for a daily short read.",
    "Okuma süresine göre (1, 3, 5 dakika) sıralı binlerce ücretsiz kısa öykü ve şiir. Günlük kısa okuma için mükemmel.", STAR);
  R("bnr", "Bibliothèque numérique romande", "https://ebooks-bnr.com/", "book", "B2-C2", "r", "culture", "free", "",
    "Beautifully made free e-books of French classics (EPUB/PDF), perfect for e-readers and iPad.",
    "Fransız klasiklerinin özenle hazırlanmış ücretsiz e-kitapları (EPUB/PDF), e-okuyucu ve iPad için ideal.");
  R("librivox", "LibriVox (audiobooks)", "https://librivox.org/", "podcast", "B2-C2", "lr", "culture", "free", "en",
    "Free public-domain audiobooks read by volunteers. Filter Language: French and read along with the e-book.",
    "Gönüllülerin okuduğu ücretsiz telifsiz sesli kitaplar. Dil: French seç ve e-kitapla birlikte takip et.");
  R("wikipedia", "Wikipédia en français", "https://fr.wikipedia.org/", "reading", "B1-C2", "rv", "academic culture", "free", "",
    "Tip: read the French article on a topic you know well (handball, physiotherapy, Istanbul). Prior knowledge makes it easy.",
    "İpucu: iyi bildiğin bir konunun Fransızca makalesini oku (hentbol, fizyoterapi, İstanbul). Ön bilgi işi kolaylaştırır.");
  R("wikimini", "Wikimini", "https://fr.wikimini.org/", "reading", "A2-B1", "r", "core culture", "free", "",
    "An encyclopedia written by and for children: short, simple articles on every topic.",
    "Çocuklar tarafından ve çocuklar için yazılmış ansiklopedi: her konuda kısa, basit makaleler.");
  R("dicoado", "Le Dico des ados", "https://www.dicoado.org/", "tool", "A2-B2", "v", "core", "free", "",
    "A dictionary written for teenagers: simple French definitions and examples. The ideal first monolingual dictionary.",
    "Gençler için yazılmış sözlük: basit Fransızca tanımlar ve örnekler. İdeal ilk tek dilli sözlük.");
  R("futura", "Futura Sciences", "https://www.futura-sciences.com/", "reading", "B2-C1", "r", "academic health", "free", "",
    "Science and health news in accessible French, with a big glossary. Good bridge to academic texts.",
    "Anlaşılır Fransızcayla bilim ve sağlık haberleri, büyük bir sözlükle. Akademik metinlere iyi bir köprü.");
  R("cnrs", "CNRS Le journal", "https://lejournal.cnrs.fr/", "reading", "C1-C2", "r", "academic", "free", "",
    "France's national research centre explains its research: university-level reading for C1.",
    "Fransa'nın ulusal araştırma merkezi araştırmalarını anlatıyor: C1 için üniversite düzeyinde okuma.");
  R("babelio", "Babelio", "https://www.babelio.com/", "community", "B2-C2", "rw", "culture", "free", "",
    "Readers' reviews of French books: find your next novel and write short reviews to practise.",
    "Fransızca kitaplar için okur yorumları: sıradaki romanını bul, pratik için kısa yorumlar yaz.");
  R("ouestfrance", "Ouest-France", "https://www.ouest-france.fr/", "news", "B1-C1", "r", "culture life", "free", "",
    "France's biggest daily newspaper, mostly free: national and local news by town.",
    "Fransa'nın en büyük günlük gazetesi, çoğunlukla ücretsiz: ulusal ve şehir şehir yerel haberler.");
  R("slate", "Slate.fr", "https://www.slate.fr/", "news", "C1-C2", "r", "culture", "free", "",
    "Long-form articles, analysis and opinion: rich vocabulary and argument for C1–C2.",
    "Uzun makaleler, analiz ve görüş yazıları: C1–C2 için zengin kelime ve argümantasyon.");
  R("dessouscartes", "Le Dessous des cartes (ARTE)", yt("Le Dessous des cartes ARTE"), "video", "B2-C1", "lv", "culture academic", "free", "",
    "Geopolitics explained with maps in 12 minutes. Clear, structured French: a model for presentations.",
    "12 dakikada haritalarla jeopolitik. Açık, düzenli Fransızca: sunumlar için bir model.");
  R("geopolitix", "Mister Geopolitix", yt("Mister Geopolitix"), "video", "B2-C1", "lv", "culture", "free", "",
    "Popular geopolitics videos: fast but very clear French.",
    "Popüler jeopolitik videoları: hızlı ama çok net Fransızca.");
  R("docseven", "Doc Seven", yt("Doc Seven"), "video", "B1-B2", "l", "culture", "free", "",
    "Fun top-10 videos on history and curiosities. Lively spoken French.",
    "Tarih ve ilginç bilgiler üzerine eğlenceli top-10 videoları. Canlı konuşma Fransızcası.");
  R("merciprof", "Merci Professeur ! (TV5MONDE)", yt("Merci Professeur TV5MONDE"), "video", "B2-C2", "lv", "core culture", "free", "",
    "Two-minute videos on French expressions, spelling traps and word origins. Perfect C1 nuance.",
    "Fransızca deyimler, yazım tuzakları ve kelime kökenleri üzerine iki dakikalık videolar. Mükemmel C1 nüansı.");
  R("poissonfecond", "Poisson Fécond", yt("Poisson Fécond"), "video", "B2-C1", "l", "culture academic", "free", "",
    "Science questions answered with humour (bodies, animals, health).",
    "Bilim sorularına mizahla cevaplar (vücut, hayvanlar, sağlık).");

  // Podcasts B2–C2
  R("arteradio", "ARTE Radio", "https://www.arteradio.com/", "podcast", "B2-C2", "l", "culture", "free", "",
    "Award-winning documentary podcasts and stories: real voices, real lives.",
    "Ödüllü belgesel podcast'ler ve hikâyeler: gerçek sesler, gerçek hayatlar.");
  R("binge", "Binge Audio", "https://www.binge.audio/", "podcast", "B2-C2", "l", "culture", "free", "",
    "Popular French podcast network on society, work, relationships and culture.",
    "Toplum, iş, ilişkiler ve kültür üzerine popüler Fransız podcast ağı.");
  R("louie", "Louie Media · Émotions", "https://louiemedia.com/", "podcast", "B2-C2", "l", "culture", "free", "",
    "Thoughtful podcasts; « Émotions » explores one feeling per episode (stress, shame, joy…). Calm and very human.",
    "Düşündürücü podcast'ler; « Émotions » her bölümde bir duyguyu ele alır (stres, utanç, sevinç…). Sakin ve çok insani.");
  R("nouvellesecoutes", "Nouvelles Écoutes", "https://www.nouvellesecoutes.fr/", "podcast", "B2-C2", "l", "culture", "free", "",
    "Independent podcast studio: conversations, culture and society.",
    "Bağımsız podcast stüdyosu: sohbetler, kültür ve toplum.");
  R("franceculture", "France Culture", "https://www.radiofrance.fr/franceculture", "podcast", "C1-C2", "l", "academic culture", "free", "",
    "Thousands of hours on science, history, philosophy and health: the C1–C2 lecture hall in your pocket.",
    "Bilim, tarih, felsefe ve sağlık üzerine binlerce saat: cebindeki C1–C2 amfisi.");
  R("franceinter", "France Inter", "https://www.radiofrance.fr/franceinter", "podcast", "B2-C2", "l", "culture", "free", "",
    "France's main public radio: news, humour, interviews, podcasts on every subject.",
    "Fransa'nın ana kamu radyosu: haberler, mizah, röportajlar, her konuda podcast.");
  R("audiolingua", "Audio Lingua", "https://audio-lingua.eu/?lang=fr", "podcast", "A1-C1", "l", "core", "free", "",
    "Hundreds of short recordings (under 2 minutes) by real French speakers, sorted by level, age and topic.",
    "Gerçek Fransızların seviye, yaş ve konuya göre sıralı yüzlerce kısa kaydı (2 dakikanın altında).", STAR);

  // Courses, grammar, writing
  R("polarfle", "Polar FLE", "https://www.polarfle.com/", "course", "A1-B1", "rlg", "core", "free", "en",
    "Learn French by solving a detective story: chapters with audio, exercises and grammar points.",
    "Bir polisiye hikâyeyi çözerek Fransızca öğren: sesli bölümler, alıştırmalar ve dilbilgisi.");
  R("conjuguemos", "Conjuguemos", "https://conjuguemos.com/", "tool", "A1-B2", "g", "core", "free", "en",
    "Timed conjugation and vocabulary drills by tense. Good extra practice after the Conjugation exercise here.",
    "Zamana göre süreli fiil çekimi ve kelime alıştırmaları. Buradaki Fiil çekimi alıştırmasından sonra iyi ek pratik.");
  R("orthodidacte", "Orthodidacte", "https://www.orthodidacte.com/", "course", "B2-C2", "gw", "core academic", "freemium", "",
    "Spelling and grammar for writing well in French, with a free level test and free articles.",
    "Fransızcada iyi yazmak için yazım ve dilbilgisi; ücretsiz seviye testi ve ücretsiz makaleler.");
  R("cordial", "Cordial en ligne", "https://www.cordial-enligne.fr/", "tool", "B1-C2", "w", "core academic", "free", "",
    "Free online grammar and spelling checker. Use it with Bon Patron for a second opinion.",
    "Ücretsiz çevrimiçi dilbilgisi ve yazım denetleyici. İkinci görüş için Bon Patron ile birlikte kullan.");
  R("crisco", "Dictionnaire des synonymes (CRISCO)", "https://crisco4.unicaen.fr/des/", "tool", "B2-C2", "vw", "academic", "free", "",
    "The University of Caen's synonym dictionary: find a better word for your essays.",
    "Caen Üniversitesi'nin eş anlamlılar sözlüğü: kompozisyonların için daha iyi kelimeyi bul.");
  R("usito", "Usito", "https://usito.usherbrooke.ca/", "tool", "B1-C2", "v", "core", "free", "",
    "A modern, free French dictionary (from Québec) with clear definitions and usage notes.",
    "Açık tanımlar ve kullanım notlarıyla modern, ücretsiz bir Fransızca sözlük (Québec'ten).");
  R("frantastique", "Frantastique", "https://www.frantastique.com/", "course", "A1-C1", "rgw", "core", "paid", "en",
    "A funny daily e-mail lesson (10 minutes) personalised to your mistakes. Free trial, then paid.",
    "Hatalarına göre kişiselleştirilmiş, eğlenceli günlük e-posta dersi (10 dakika). Ücretsiz deneme, sonra ücretli.", { price: "≈ 20–30 €/month" });
  R("tureng", "Tureng (Fransızca–Türkçe)", "https://tureng.com/", "tool", "A1-C1", "v", "turkish", "free", "tr",
    "The popular Turkish dictionary site also has French ↔ Turkish, with many phrases.",
    "Popüler Türkçe sözlük sitesinde Fransızca ↔ Türkçe de var, birçok ifadeyle.");

  // Life in France: rights, money, admin
  R("impots", "impots.gouv.fr", "https://www.impots.gouv.fr/", "official", "B1-C1", "r", "life", "free", "",
    "Income tax: create your personal space and file your first return (even with no income, it's often needed).",
    "Gelir vergisi: kişisel alanını oluştur ve ilk beyannameni ver (gelir olmasa bile çoğu zaman gerekir).");
  R("ants", "ANTS", "https://ants.gouv.fr/", "official", "B1-C1", "r", "life", "free", "",
    "Official site for driving licences (including exchanging a foreign licence), ID cards and vehicle papers.",
    "Ehliyet (yabancı ehliyet değişimi dahil), kimlik kartı ve araç belgeleri için resmî site.");
  R("mesdroits", "Mes droits sociaux", "https://www.mesdroitssociaux.gouv.fr/", "official", "B1-C1", "r", "life", "free", "",
    "A free simulator showing which social benefits you may be entitled to.",
    "Hangi sosyal yardımlara hakkın olabileceğini gösteren ücretsiz simülatör.");
  R("anil", "ANIL · information logement", "https://www.anil.org/", "official", "B1-C1", "r", "life", "free", "",
    "Free, neutral information on renting: leases, deposits, repairs, disputes. Local ADIL offices answer questions.",
    "Kiralama hakkında ücretsiz, tarafsız bilgi: sözleşme, depozito, tamirat, anlaşmazlık. Yerel ADIL ofisleri soruları cevaplar.");
  R("mesquestions", "Mes questions d'argent", "https://www.mesquestionsdargent.fr/", "official", "B1-B2", "r", "life", "free", "",
    "The Banque de France's plain-language guide to banking, budgets, credit and fraud.",
    "Banque de France'ın bankacılık, bütçe, kredi ve dolandırıcılık üzerine sade dilli rehberi.");
  R("defenseur", "Défenseur des droits", "https://www.defenseurdesdroits.fr/", "official", "B1-C1", "r", "life", "free", "",
    "Free help if you face discrimination or a problem with a public service.",
    "Ayrımcılığa uğrarsan veya bir kamu hizmetiyle sorun yaşarsan ücretsiz yardım.");
  R("gisti", "GISTI", "https://www.gisti.org/", "official", "B2-C1", "r", "life", "free", "",
    "An association expert in foreigners' rights in France: practical guides on residence permits and procedures.",
    "Fransa'da yabancı hakları konusunda uzman bir dernek: oturma izni ve prosedürler hakkında pratik rehberler.");

  const PATCH = {
    "tv5": { url: "https://apprendre.tv5monde.com/en/collection-all", levels: L.slice(1), star: true, note: { en: "App: 'TV5MONDE EDU: Learn' (offline mode). A1 course, A2 and B1 courses added in 2026.", tr: "Uygulama: 'TV5MONDE EDU: Learn' (çevrimdışı mod). A1 kursu, 2026'da A2 ve B1 eklendi." } },
    "rfi-ff": { url: "https://francaisfacile.rfi.fr/fr/", star: true },
    "fi-texas": { url: "https://laits.utexas.edu/fi/page/about-us/", levels: L.slice(0, 4), star: true, note: { en: "New edition: utexas.pressbooks.pub/francais-interactif. About 1 chapter every 1–2 weeks.", tr: "Yeni baskı: utexas.pressbooks.pub/francais-interactif. 1–2 haftada yaklaşık 1 bölüm." } },
    "tex": { url: "https://laits.utexas.edu/tex/gr/overview.html", star: true },
    "lawless": { url: "https://lawlessfrench.com/", star: true },
    "pointdufle": { url: "https://www.lepointdufle.net/p/learnfrench.htm", levels: L.slice(0, 6), star: true, note: { en: "8,200+ exercises with an 'A0 new beginners' section.", tr: "'A0 yeni başlayanlar' bölümüyle 8.200+ alıştırma." } },
    "kwiziq": { note: { en: "Free: 10 quizzes a month — enough as a monthly check-up.", tr: "Ücretsiz: ayda 10 test — aylık kontrol için yeterli." } },
    "lingolia": { url: "https://francais.lingolia.com/", price: "Plus ~42 €/an" },
    "openlearn": { url: "https://www.open.edu/openlearn/languages/get-ready-beginners-french", note: { en: "'Get ready for beginners' French': ~24 h over 8 weeks + free badge.", tr: "'Get ready for beginners' French': 8 haftada ~24 saat + ücretsiz rozet." } },
    "duolingo": { url: "https://www.duolingo.com/courses", star: true, note: { en: "A course from Turkish exists (handy at first); the course from English is the most developed — switch when comfortable.", tr: "Türkçeden bir kurs var (başta kullanışlı); İngilizceden kurs en gelişmişi — rahatlayınca geç." } },
    "busuu": { url: "https://www.busuu.com/tr" },
    "memrise": { note: { en: "Old community decks moved to community-courses.memrise.com.", tr: "Eski topluluk desteleri community-courses.memrise.com'a taşındı." } },
    "loecsen": { url: "https://www.loecsen.com/tr/ogrenme-frans%C4%B1zca" },
    "50lang": { url: "https://www.goethe-verlag.com/book2/TR/TRFR/TRFR002.HTM", star: true, note: { en: "Also 50languages.com and an Android app; MP3s to listen on the bus.", tr: "Ayrıca 50languages.com ve Android uygulaması; otobüste dinlemek için MP3'ler." } },
    "lingq": { note: { en: "Free tier is tiny (20 saved words): treat it as a trial. Readlang is the cheaper equivalent.", tr: "Ücretsiz sürüm çok küçük (20 kayıtlı kelime): deneme gibi düşün. Readlang daha ucuz eşdeğeri." } },
    "anki": { star: true },
    "easyfrench": { url: "https://www.youtube.com/channel/UCoUWq2QawqdC3-nRXKk-JUw", star: true },
    "innerfrench-yt": { url: "https://www.youtube.com/channel/UCI4xp8qHD1MDErkqxb1dPbA" },
    "pierre": { url: "https://www.youtube.com/channel/UCVgW9ZQaGBk6fsiPgE2mYDg", levels: L.slice(2, 6), star: true },
    "alexa": { url: "https://www.youtube.com/user/learnfrenchwithalexa" },
    "elisa": { url: "https://www.youtube.com/@FrenchmorningswithElisa" },
    "cuf": { url: "https://www.youtube.com/user/CommeUneFrancaiseTV" },
    "fauth-yt": { url: "https://www.youtube.com/user/francaisauthentique" },
    "notabene": { url: "https://www.youtube.com/user/notabenemovies" },
    "dirtybio": { url: "https://www.youtube.com/channel/UCtqICqGbPSbTN09K1_7VZ3Q" },
    "hugodecrypte": { name: "HugoDécrypte · Actus du jour", url: "https://www.youtube.com/channel/UCAcAnMF0OrCtUep3Y4M-ZPw", star: true },
    "pff": { star: true },
    "coffeebreak": { star: true },
    "duopod": { url: "https://podcast.duolingo.com/french", note: { en: "No new episodes since 2024, but the whole archive is online — still excellent.", tr: "2024'ten beri yeni bölüm yok ama tüm arşiv çevrimiçi — hâlâ mükemmel." } },
    "innerfrench-pod": { url: "https://podcast.innerfrench.com/", star: true, note: { en: "The show ended in September 2026 after 200 episodes; the archive stays online — a year of B1 listening.", tr: "Program 200 bölümle Eylül 2026'da bitti; arşiv çevrimiçi — bir yıllık B1 dinleme." } },
    "fauth-pod": { url: "https://www.francaisauthentique.com/podcasts/", cost: "freemium" },
    "jeff": { star: true, note: { en: "Start at A2 with the text; by B1 try without. The single best free listening habit.", tr: "A2'de metinle başla; B1'de metinsiz dene. En iyi ücretsiz dinleme alışkanlığı." } },
    "transfert": { url: "https://www.slate.fr/audio/transfert/" },
    "lyricstraining": { url: "https://lyricstraining.com/", star: true },
    "tv5plus": { url: "https://www.tv5mondeplus.com/fr", star: true, note: { en: "Free with ads, no card. Since July 2025 the catalogue is also on france.tv.", tr: "Reklamlı ücretsiz, kart gerekmez. Temmuz 2025'ten beri katalog france.tv'de de." } },
    "francetv": { star: true },
    "langreactor": { star: true },
    "1jour1actu": { star: true },
    "jde": { name: "JDE · Journal des Enfants (Belgium)", url: "https://www.lejde.be/", cost: "free", note: { en: "The French 'Journal des enfants' closed in 2024; this is the Belgian one.", tr: "Fransız 'Journal des enfants' 2024'te kapandı; bu Belçika'daki." } },
    "7jours": { name: "TV5MONDE · Regards sur l'actualité (ex-7 jours sur la planète)", url: "https://enseigner.tv5monde.com/fiches-pedagogiques-fle/regards-sur-lactualite", levels: L.slice(2, 5) },
    "wordref": { url: "https://www.wordreference.com/", star: true },
    "glosbe": { star: true },
    "robert": { star: true },
    "conjugueur": { star: true },
    "reverso-conj": { note: { en: "Type ANY form (even 'nous nous sommes levés') and it finds the verb.", tr: "HERHANGİ bir biçimi yaz ('nous nous sommes levés' bile), fiili bulur." } },
    "bonpatron": { url: "https://bonpatron.com/en/", star: true, cost: "free" },
    "languagetool": { url: "https://languagetool.org/spellchecking-french" },
    "journaly": { note: { en: "Activity in 2026 not confirmed: prefer LangCorrect.", tr: "2026'daki aktivitesi doğrulanmadı: LangCorrect'i tercih et." } },
    "tandem": { star: true },
    "hellotalk": { star: true },
    "ofii": { note: { en: "See the CIR entry: free training up to A2 if eligible.", tr: "CIR kaydına bak: uygunsan A2'ye kadar ücretsiz eğitim." } },
    "vivreenfrance": { url: "https://www.fun-mooc.fr/fr/cours/?query=vivre%20en%20france", note: { en: "A1 (~50 h), A2 (~70 h), B1 (~90 h). The old course pages moved: search « Vivre en France » in the FUN-MOOC catalogue and pick an open session.", tr: "A1 (~50 saat), A2 (~70 saat), B1 (~90 saat). Eski kurs sayfaları taşındı: FUN-MOOC kataloğunda « Vivre en France » ara ve açık bir oturum seç." } },
    "ordremk": { url: "https://www.ordremk.fr/je-suis-kinesitherapeute/mobilite/je-suis-un-ressortissant-dun-etat-tiers/", note: { en: "Non-EU physio diplomas are not recognised as such: partial exemption in an IFMK (small quota) after tests in French, then the DE.", tr: "AB dışı fizyoterapi diplomaları olduğu gibi tanınmaz: Fransızca sınavlardan sonra bir IFMK'da kısmi muafiyet (küçük kontenjan), sonra DE." } },
    "campusfrance": { note: { en: "Living in France already? First-year admission goes through the DAP (see Service-Public R1278).", tr: "Zaten Fransa'da mı yaşıyorsun? Birinci sınıf kabulü DAP üzerinden (Service-Public R1278'e bak)." } },
    "fei-delf": { star: true, note: { en: "Diploma valid for life. Free sample papers with audio on each level page. ~130 € (A1/A2), ~140–200 € (B1/B2).", tr: "Ömür boyu geçerli diploma. Her seviye sayfasında sesli ücretsiz örnek sınavlar. ~130 € (A1/A2), ~140–200 € (B1/B2)." } },
    "fei-dalf": { url: "https://www.france-education-international.fr/diplome/dalf?langue=fr" },
    "fei-tcf": { url: "https://www.france-education-international.fr/test/tcf-tout-public?langue=fr", note: { en: "With its compulsory writing part, the TCF is the language test for university admission. Valid 2 years.", tr: "Zorunlu yazma bölümüyle TCF, üniversite kabulü için dil testidir. 2 yıl geçerli." } },
    "rfi-delf": { url: "https://francaisfacile.rfi.fr/fr/dipl%C3%B4mes-tests/", name: "RFI · DELF / TCF / DFP practice" },
    "speechling": { price: "19.99 $/month for unlimited coaching" },
    "mediatheque": { note: { en: "Ask at the desk: « Avez-vous des ressources pour apprendre le français ? »", tr: "Masada sor: « Avez-vous des ressources pour apprendre le français ? »" } }
  };
  for (const r of list) if (PATCH[r.id]) Object.assign(r, PATCH[r.id]);

  /* Order: top picks first, then free, freemium, library, paid. */
  const COST_ORDER = { free: 0, freemium: 1, lib: 2, paid: 3 };
  list.forEach((r, i) => (r._i = i));
  list.sort((a, b) => (b.star - a.star) || (COST_ORDER[a.cost] - COST_ORDER[b.cost]) || (a._i - b._i));

  window.RESOURCES = list;
  window.LEVELS = L;
})();
