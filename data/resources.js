/* Curated directory of FREE (or generous free tier) French resources.
   R(id, name, url, type, levels, skills, tracks, cost, help, en, tr)
   levels: "A1-B2" (A0 A1 A2 B1 B2 C1 C2)
   skills: l=listening r=reading s=speaking w=writing g=grammar v=vocabulary p=pronunciation
   tracks: core life health sport academic exam turkish culture
   cost: "free" | "freemium"
   help: languages of explanation besides French ("en", "tr", "en,tr", "") */
(function () {
  const L = ["A0", "A1", "A2", "B1", "B2", "C1", "C2"];
  const list = [];
  function R(id, name, url, type, levels, skills, tracks, cost, help, en, tr) {
    const [a, b] = levels.split("-");
    const lo = L.indexOf(a), hi = L.indexOf(b || a);
    list.push({ id, name, url, type, levels: L.slice(lo, hi + 1), skills: skills.split(""), tracks: tracks.split(" "), cost, help: help ? help.split(",") : [], d: { en, tr } });
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
  R("hugodecrypte", "HugoDécrypte", "https://www.youtube.com/@HugoDecrypte", "video", "B2-C1", "lv", "culture", "free", "",
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

  window.RESOURCES = list;
  window.LEVELS = L;
})();
