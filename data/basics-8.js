/* Basics, part 8: the passé composé with être (and agreement), the relative pronouns qui / que / où, tout / tous / toute / toutes, and verbs + à / de. Loads right after data/basics-7.js. */
(function () {
  // item line: "fr|tr|en" or "fr|tr|en|say" or "fr|tr|en|say|ex". say = what the French voice reads (default: fr, leave empty to keep default). ex = optional short French example (word or phrase) also read aloud.
  const I = s => s.trim().split("\n").map(l => { const [fr, tr, en, say, ex] = l.split("|").map(x => x.trim()); return { fr, tr, en, say: say || "", ex: ex || "" }; });
  const G = (fr, tr, en, items, tip) => ({ t: { fr, tr, en }, items: I(items), tip: tip || null });
  window.BASICS = window.BASICS || [];
  window.BASICS.push(

    /* ───────────── 53. The passé composé with être ───────────── */
    { id: "pcetre", emoji: "🚪", kind: "words", t: { fr: "Le passé composé avec être", tr: "Être ile passé composé", en: "The passé composé with être" },
      intro: {
        fr: "Je suis née à Istanbul, je suis arrivée en France il y a un an… Certains verbes font leur passé composé avec « être », et alors le participe s'accorde, comme un adjectif. Ça a l'air compliqué ? Il y a seulement une quinzaine de verbes, plus les verbes pronominaux. On y va ensemble !",
        tr: "Je suis née à Istanbul, je suis arrivée en France il y a un an (İstanbul'da doğdum, bir yıl önce Fransa'ya geldim)… Bazı fiiller passé composé'yi 'avoir' yerine 'être' ile kurar ve o zaman ortaç (participe) tıpkı bir sıfat gibi özneye uyar. Zor mu görünüyor? Sadece on beş kadar fiil var, bir de dönüşlü fiiller. Hadi birlikte bakalım!",
        en: "Je suis née à Istanbul, je suis arrivée en France il y a un an… Some verbs build their passé composé with « être », and then the participle agrees, like an adjective. Sounds complicated? There are only about fifteen verbs, plus the reflexive verbs. Let's go through them together!"
      },
      groups: [
        G("Les verbes de la « maison d'être »", "'Être evi'nin fiilleri", "The 'house of être' verbs", `
je suis allé(e)|gittim|I went|je suis allé|Je suis allée à la piscine.
je suis venu(e)|geldim|I came|je suis venu
je suis arrivé(e)|vardım, geldim|I arrived|je suis arrivé|Je suis arrivée en retard.
je suis parti(e)|ayrıldım, yola çıktım|I left|je suis parti
je suis entré(e)|girdim|I went in|je suis entré
je suis sorti(e)|çıktım, dışarı çıktım|I went out|je suis sorti|Je suis sortie avec des amis.
je suis monté(e)|(yukarı) çıktım, bindim|I went up, I got on|je suis monté
je suis descendu(e)|indim|I went down, I got off|je suis descendu|Je suis descendue du bus.
je suis tombé(e)|düştüm|I fell|je suis tombé
je suis resté(e)|kaldım|I stayed|je suis resté|Je suis restée à la maison.
je suis rentré(e)|eve döndüm|I came home, I went back|je suis rentré
je suis né(e)|doğdum|I was born|je suis né|Je suis née à Istanbul.`, {
          fr: "Imaginez une maison : on arrive, on entre, on monte, on descend, on sort, on part… et on naît, on reste, on tombe ! Ces verbes de mouvement ou de changement prennent « être ».",
          tr: "Bir ev hayal edin: gelirsiniz, girersiniz, merdivenden çıkarsınız, inersiniz, dışarı çıkarsınız, gidersiniz… bir de doğarsınız, kalırsınız, düşersiniz! Bu hareket ya da değişim fiilleri 'être' alır. Otobüse binmek = monter dans le bus, inmek = descendre du bus: Türkçedeki 'binmek/inmek' ile aynı fiiller!",
          en: "Picture a house: you arrive, go in, go up, come down, go out, leave… and you're born, you stay, you fall! These verbs of movement or change take « être »."
        }),
        G("L'accord : -e, -s, -es", "Uyum: -e, -s, -es", "Agreement: -e, -s, -es", `
il est parti|o (erkek) gitti|he left
elle est partie|o (kadın) gitti|she left
ils sont partis|onlar gitti (erkekler ya da karışık grup)|they left (men or a mixed group)
elles sont parties|onlar gitti (kadınlar)|they left (women)
Esin est arrivée à 9 h.|Esin saat 9'da geldi.|Esin arrived at 9.|Esin est arrivée à neuf heures.
Nous sommes restés une semaine.|Bir hafta kaldık.|We stayed for a week.
Vous êtes allés où ?|Nereye gittiniz?|Where did you go?
Léa et Chloé sont sorties hier soir.|Léa ile Chloé dün akşam dışarı çıktı.|Léa and Chloé went out last night.
Mes cousins sont venus en août.|Kuzenlerim ağustosta geldi.|My cousins came in August.
On est allés au cinéma.|Sinemaya gittik.|We went to the cinema.`, {
          fr: "Avec « être », le participe s'accorde avec le sujet : + e pour une femme, + s au pluriel. Un groupe mixte, c'est masculin. Bonne nouvelle : à l'oral, allé et allée se prononcent pareil !",
          tr: "'Être' ile ortaç özneye uyar: kadınsa + e, çoğulsa + s eklenir. Kadın-erkek karışık bir grup eril sayılır (partis). Güzel haber: konuşurken allé ile allée aynı okunur, fark sadece yazıda! Yani bir kadın olarak yazarken 'je suis allée' yazın, ama telaffuz için endişelenmeyin.",
          en: "With « être », the participle agrees with the subject: + e for a woman, + s in the plural. A mixed group counts as masculine. Good news: allé and allée sound exactly the same!"
        }),
        G("Les verbes pronominaux au passé", "Dönüşlü fiiller geçmişte", "Reflexive verbs in the past", `
je me suis levé(e)|kalktım|I got up|je me suis levé|Je me suis levée tôt.
tu t'es reposé(e) ?|dinlendin mi?|did you rest?|tu t'es reposé ?
il s'est couché tard|geç yattı|he went to bed late
elle s'est blessée|sakatlandı, yaralandı|she got hurt||Elle s'est blessée au genou.
nous nous sommes promenés|yürüyüşe çıktık, gezindik|we went for a walk
vous vous êtes inscrits ?|kaydoldunuz mu?|did you sign up?
ils se sont rencontrés|tanıştılar|they met
je me suis trompé(e)|yanıldım, hata yaptım|I made a mistake|je me suis trompé
Je me suis perdu(e).|Kayboldum.|I got lost.|Je me suis perdu.`, {
          fr: "Tous les verbes pronominaux (se lever, se doucher, se blesser…) font leur passé composé avec « être ». Le petit pronom reste devant « être » : je me suis levée.",
          tr: "Bütün dönüşlü fiiller (se lever, se doucher, se blesser…) passé composé'yi 'être' ile kurar, istisnasız! Küçük zamir 'être'nin önünde durur: je me suis levée (kalktım). Türkçedeki 'yıkandım, sakatlandım, kayboldum' gibi dönüşlü fiilleri düşünün: çoğu Fransızcada da dönüşlüdür.",
          en: "All reflexive verbs (se lever, se doucher, se blesser…) use « être » in the passé composé. The little pronoun stays in front of « être »: je me suis levée."
        }),
        G("Négation et questions", "Olumsuz ve soru", "Negatives and questions", `
Je ne suis pas allé(e) au travail.|İşe gitmedim.|I didn't go to work.|Je ne suis pas allé au travail.
Elle n'est pas encore arrivée.|Henüz gelmedi.|She hasn't arrived yet.
Il n'est jamais venu ici.|Buraya hiç gelmedi.|He has never been here.
Je ne me suis pas réveillé(e) !|Uyanamadım!|I didn't wake up!|Je ne me suis pas réveillé !
Tu es déjà allé(e) à Lyon ?|Hiç Lyon'a gittin mi?|Have you ever been to Lyon?|Tu es déjà allé à Lyon ?
Tu es rentré(e) à quelle heure ?|Eve saat kaçta döndün?|What time did you get home?|Tu es rentré à quelle heure ?
Vous êtes arrivés quand ?|Ne zaman geldiniz?|When did you arrive?
Qu'est-ce qui s'est passé ?|Ne oldu?|What happened?`, {
          fr: "« Ne… pas » entoure seulement « être » : je ne suis pas allée. Les petits mots « déjà », « encore », « jamais » se placent entre « être » et le participe.",
          tr: "'Ne… pas' sadece 'être'yi sarar: je NE suis PAS allée (gitmedim). 'Déjà' (zaten, hiç), 'encore' (henüz), 'jamais' (hiç) kelimeleri 'être' ile ortacın arasına girer: tu es déjà allée ? Dönüşlü fiilde zamir de içeride kalır: je ne me suis pas réveillée.",
          en: "« Ne… pas » wraps only « être »: je ne suis pas allée. The little words « déjà », « encore », « jamais » go between « être » and the participle."
        }),
        G("Avoir ou être ? Les pièges", "Avoir mı être mi? Tuzaklar", "Avoir or être? The traps", `
Je suis sorti(e) ce soir.|Bu akşam dışarı çıktım.|I went out tonight.|Je suis sorti ce soir.
J'ai sorti la poubelle.|Çöpü dışarı çıkardım.|I took the bin out.
Je suis monté(e) au troisième étage.|Üçüncü kata çıktım.|I went up to the third floor.|Je suis monté au troisième étage.
J'ai monté les courses.|Alışveriş poşetlerini yukarı taşıdım.|I carried the shopping upstairs.
Je suis passé(e) à la pharmacie.|Eczaneye uğradım.|I stopped by the pharmacy.|Je suis passé à la pharmacie.
J'ai passé un bon week-end.|Güzel bir hafta sonu geçirdim.|I had a nice weekend.
J'ai couru 5 km.|5 km koştum.|I ran 5 km.|J'ai couru cinq kilomètres.
J'ai marché une heure.|Bir saat yürüdüm.|I walked for an hour.`, {
          fr: "Avec un objet direct (la poubelle, les courses, un week-end), sortir, monter et passer prennent « avoir ». Et attention : courir, marcher, nager, voyager prennent toujours « avoir » !",
          tr: "Sortir, monter ve passer fiillerinin bir nesnesi varsa (çöpü, alışverişi, hafta sonunu) 'avoir' alırlar: j'ai sorti la poubelle. Türkçedeki 'çıktım / çıkardım' farkı gibi düşünün! Dikkat: courir (koşmak), marcher (yürümek), nager (yüzmek), voyager (seyahat etmek) hareket bildirse de her zaman 'avoir' alır.",
          en: "With a direct object (the bin, the shopping, a weekend), sortir, monter and passer take « avoir ». And careful: courir, marcher, nager, voyager always take « avoir »!"
        })
      ] },

    /* ───────────── 54. Relative pronouns qui / que / où ───────────── */
    { id: "relatives", emoji: "🧩", kind: "words", t: { fr: "Qui, que, où : relier deux phrases", tr: "Qui, que, où: ilgi zamirleri", en: "Qui, que, où: relative pronouns" },
      intro: {
        fr: "Le coach qui arrive, le cours que je préfère, la salle où je travaille : avec qui, que et où, on fait une seule phrase au lieu de deux. Votre français devient tout de suite plus fluide !",
        tr: "Le coach qui arrive (gelen koç), le cours que je préfère (en sevdiğim ders), la salle où je travaille (çalıştığım salon): qui, que ve où ile iki cümle yerine tek cümle kurulur. Türkçede bunu '-en' ve '-dığı' ekleriyle yapıyoruz; Fransızcada ise isimden sonra küçük bir kelime geliyor. Fransızcanız hemen daha akıcı olur!",
        en: "The coach who's arriving, the class I like best, the gym where I work: with qui, que and où you make one sentence instead of two. Your French instantly sounds smoother!"
      },
      groups: [
        G("Qui : le sujet", "Qui: özne", "Qui: the subject", `
qui|-en, -an (özne)|who, which, that (subject)||le coach qui arrive
la femme qui parle|konuşan kadın|the woman who is talking
le bus qui va à la gare|gara giden otobüs|the bus that goes to the station
un ami qui habite à Lille|Lille'de oturan bir arkadaş|a friend who lives in Lille
C'est Sophie qui ouvre la salle.|Salonu açan Sophie.|It's Sophie who opens the gym.
J'ai un collègue qui parle turc.|Türkçe konuşan bir iş arkadaşım var.|I have a colleague who speaks Turkish.
le cours qui commence à 18 h|saat 18'de başlayan ders|the class that starts at 6 pm|le cours qui commence à dix-huit heures
les gens qui courent le matin|sabahları koşan insanlar|people who run in the morning`, {
          fr: "Après « qui », il y a directement un verbe : la femme qui parle. « Qui » ne perd jamais son « i » : on dit « qui arrive », jamais « qu'arrive ».",
          tr: "'Qui'den hemen sonra fiil gelir: la femme qui parle (konuşan kadın). Türkçedeki '-en/-an' ekine karşılık gelir: konuş-AN kadın = la femme QUI parle. 'Qui' asla 'i' harfini kaybetmez: 'qui arrive' denir, 'qu'arrive' değil.",
          en: "« Qui » is followed straight away by a verb: la femme qui parle. « Qui » never drops its « i »: it's « qui arrive », never « qu'arrive »."
        }),
        G("Que : l'objet", "Que: nesne", "Que: the object", `
que / qu'|-dığı, -diği (nesne)|that, which, whom (object)||le livre que je lis
le livre que je lis|okuduğum kitap|the book I'm reading
la ville que j'adore|bayıldığım şehir|the city I love
le film qu'on a vu|izlediğimiz film|the film we saw
la personne que tu cherches|aradığın kişi|the person you're looking for
le sport que je préfère|en sevdiğim spor|my favourite sport
les exercices que le kiné propose|fizyoterapistin önerdiği egzersizler|the exercises the physio suggests
C'est le gâteau que ma grand-mère fait.|Bu, büyükannemin yaptığı pasta.|It's the cake my grandmother makes.`, {
          fr: "Après « que », il y a un sujet et un verbe : le livre que JE LIS. Devant une voyelle, « que » devient « qu' ». En anglais on peut supprimer « that », en français jamais !",
          tr: "'Que'den sonra bir özne ve bir fiil gelir: le livre que JE LIS (okuduğum kitap). Türkçedeki '-dığı/-diği' ekine karşılık gelir: oku-DUĞUM kitap. Ünlüden önce 'que' → 'qu'' olur: le film qu'on a vu. İngilizcede 'that' atılabilir (the book I read), Fransızcada asla!",
          en: "« Que » is followed by a subject and a verb: le livre que JE LIS. Before a vowel, « que » becomes « qu' ». In English you can drop 'that'; in French, never!"
        }),
        G("Où : le lieu et le moment", "Où: yer ve zaman", "Où: place and time", `
où|-dığı yer, -dığı zaman|where, when (relative)||la ville où j'habite
la ville où je suis née|doğduğum şehir|the city where I was born
la salle où je travaille|çalıştığım salon|the gym where I work
le parc où on court|koştuğumuz park|the park where we run
le restaurant où on a dîné|akşam yemeği yediğimiz restoran|the restaurant where we had dinner
le jour où je suis arrivé(e)|geldiğim gün|the day (when) I arrived|le jour où je suis arrivé
l'année où il a eu son bac|liseyi bitirdiği yıl|the year he passed his bac
au moment où le téléphone a sonné|tam telefon çaldığı anda|just as the phone rang`, {
          fr: "« Où » sert pour un lieu, mais aussi pour un moment : le jour où, l'année où, au moment où. On ne dit jamais « le jour quand » !",
          tr: "'Où' sadece yer için değil, zaman için de kullanılır: le jour où (… olduğu gün), l'année où (… olduğu yıl). Asla 'le jour quand' denmez! Türkçede de aynı yapı: geldiğim gün = le jour où je suis arrivée, çalıştığım salon = la salle où je travaille.",
          en: "« Où » is used for a place, but also for a moment: le jour où, l'année où, au moment où. Never say « le jour quand »!"
        }),
        G("Qui ou que ?", "Qui mi que mi?", "Qui or que?", `
C'est le coach qui m'entraîne.|Beni çalıştıran koç bu.|He's the coach who trains me.
C'est le coach que je préfère.|En sevdiğim koç bu.|He's the coach I like best.
Voilà la clé que tu cherchais.|İşte aradığın anahtar.|Here's the key you were looking for.
Voilà la clé qui ouvre le casier.|İşte dolabı açan anahtar.|Here's the key that opens the locker.
Tu connais quelqu'un qui loue un studio ?|Stüdyo daire kiralayan birini tanıyor musun?|Do you know anyone who's renting out a studio?
Le médecin que j'ai vu est très gentil.|Gittiğim doktor çok nazik.|The doctor I saw is very kind.
La pharmacie qui est au coin ferme à 20 h.|Köşedeki eczane saat 20'de kapanıyor.|The pharmacy on the corner closes at 8 pm.|La pharmacie qui est au coin ferme à vingt heures.
Le bus que je prends passe toutes les dix minutes.|Bindiğim otobüs on dakikada bir geçiyor.|The bus I take comes every ten minutes.`, {
          fr: "Le test magique : regardez le mot juste après. Un verbe ? → qui. Une personne ou un nom (je, tu, le coach…) ? → que.",
          tr: "Sihirli test: boşluktan hemen sonraki kelimeye bakın. Fiil mi? → qui. Bir kişi ya da isim mi (je, tu, le coach…)? → que. Türkçe ipucu: '-en' ekiyle çevirebiliyorsanız (açAN anahtar) qui; '-dığı' ekiyle çevirebiliyorsanız (aradığın anahtar) que!",
          en: "The magic test: look at the word right after. A verb? → qui. A person or a noun (je, tu, le coach…)? → que."
        }),
        G("Ce qui, ce que : la chose", "Ce qui, ce que: … olan şey", "Ce qui, ce que: what", `
ce qui|… olan şey (özne)|what (subject)||ce qui est difficile
ce que / ce qu'|… -dığı şey (nesne)|what (object)||ce que tu veux
Ce qui est difficile, c'est la prononciation.|Zor olan şey telaffuz.|What's hard is the pronunciation.
Dis-moi ce que tu veux.|Ne istediğini söyle.|Tell me what you want.
Je ne comprends pas ce qu'il dit.|Ne dediğini anlamıyorum.|I don't understand what he's saying.
C'est exactement ce que je pensais.|Tam da düşündüğüm şey.|That's exactly what I thought.
Ce qui me plaît ici, c'est le calme.|Burada hoşuma giden şey sakinlik.|What I like here is the peace and quiet.
Ce que je veux, c'est dormir !|Tek istediğim uyumak!|What I want is to sleep!`, {
          fr: "Quand l'anglais dit « what » au milieu d'une phrase (I don't know what…), le français dit « ce qui » ou « ce que ». Même règle : verbe après → ce qui, sujet après → ce que.",
          tr: "İngilizcede cümle ortasındaki 'what' (I don't know what…) Fransızcada 'ce qui' ya da 'ce que' olur, 'quoi' değil! Kural aynı: arkasından fiil geliyorsa ce qui, özne geliyorsa ce que. 'Ce que je veux, c'est…' (Benim istediğim şey…) konuşmada çok işe yarar.",
          en: "When English says 'what' in the middle of a sentence (I don't know what…), French says « ce qui » or « ce que ». Same rule: verb after → ce qui, subject after → ce que."
        })
      ] },

    /* ───────────── 55. Tout, tous, toute, toutes ───────────── */
    { id: "tout", emoji: "💯", kind: "words", t: { fr: "Tout, tous, toute, toutes", tr: "Tout, tous, toute, toutes: hepsi, bütün", en: "Tout, tous, toute, toutes: all, every" },
      intro: {
        fr: "Tous les jours, toute la journée, tout le monde, c'est tout ! Ce petit mot est partout. Il change de forme comme un adjectif, et il a même une prononciation surprise. Courage, vous allez tout comprendre !",
        tr: "Tous les jours (her gün), toute la journée (bütün gün), tout le monde (herkes), c'est tout (hepsi bu)! Bu küçük kelime her yerde. Bir sıfat gibi şekil değiştirir, hatta sürpriz bir telaffuzu var. Cesaret, her şeyi anlayacaksınız!",
        en: "Every day, all day, everybody, that's all! This little word is everywhere. It changes form like an adjective, and it even has a surprise pronunciation. Courage, you'll understand it all!"
      },
      groups: [
        G("Tout + nom : les quatre formes", "Tout + isim: dört şekil", "Tout + noun: the four forms", `
tout le temps|her zaman, sürekli|all the time
tout le monde|herkes|everybody||Tout le monde est là ?
tout le week-end|bütün hafta sonu|the whole weekend
toute la journée|bütün gün|all day
toute la famille|bütün aile|the whole family
tous les jours|her gün|every day||La salle est ouverte tous les jours.
tous les deux|ikisi de, ikimiz de|both||On y va tous les deux ?
toutes les semaines|her hafta|every week
toutes les filles de l'équipe|takımdaki bütün kızlar|all the girls on the team`, {
          fr: "Tout s'accorde avec le nom : tout (masculin), toute (féminin), tous (masculin pluriel), toutes (féminin pluriel). Et « tout le monde » est singulier : tout le monde EST là.",
          tr: "Tout, isme uyar: tout (eril tekil), toute (dişil tekil), tous (eril çoğul), toutes (dişil çoğul). Dikkat: 'tout le monde' = herkes (bütün dünya değil!) ve fiil tekil olur: tout le monde EST là (herkes burada). 'Tous les jours' = her gün, 'tout le jour' denmez; 'toute la journée' = bütün gün.",
          en: "Tout agrees with the noun: tout (masculine), toute (feminine), tous (masculine plural), toutes (feminine plural). And « tout le monde » (everybody) is singular: tout le monde EST là."
        }),
        G("Tous : « tou » ou « touss » ?", "Tous: 'tu' mu 'tus' mu?", "Tous: 'too' or 'tooss'?", `
tous les matins|her sabah|every morning
Ils sont tous là.|Hepsi burada.|They're all here.
Nous sommes tous fatigués.|Hepimiz yorgunuz.|We're all tired.
Elles sont toutes venues.|Hepsi geldi (kadınlar).|They all came (women).
Merci à tous !|Herkese teşekkürler!|Thanks, everyone!
Bonjour à toutes et à tous !|Herkese merhaba!|Hello, everyone!
Vous avez tous compris ?|Hepiniz anladınız mı?|Did you all understand?
Je les connais tous.|Hepsini tanıyorum.|I know them all.`, {
          fr: "Devant un nom, le « s » de « tous » est muet : tous les matins (« tou »). Seul, à la place d'un nom, on prononce le « s » : ils sont tous là (« touss »), merci à tous (« touss »).",
          tr: "İsimden önce 'tous' kelimesinin 's' harfi okunmaz: tous les matins (burada sadece 'tu' okunur). Ama tek başına, bir ismin yerine kullanılınca 's' okunur: ils sont tous là ('tus'), merci à tous ('tus'). Sınıfta öğretmen 'Vous avez tous compris ?' diye sorduğunda 'tus' sesini duyacaksınız!",
          en: "Before a noun, the « s » of « tous » is silent: tous les matins ('too'). On its own, standing for a noun, you pronounce the « s »: ils sont tous là ('tooss'), merci à tous ('tooss')."
        }),
        G("Tout = tout ce qui existe", "Tout = her şey", "Tout = everything", `
Tout va bien ?|Her şey yolunda mı?|Is everything OK?
C'est tout ?|Bu kadar mı?|Is that all?
C'est tout pour aujourd'hui.|Bugünlük bu kadar.|That's all for today.
J'ai tout compris !|Her şeyi anladım!|I understood everything!
Tout est prêt.|Her şey hazır.|Everything's ready.
Merci pour tout.|Her şey için teşekkürler.|Thanks for everything.
Je vous explique tout.|Size her şeyi anlatayım.|Let me explain everything.
Tout ce que tu fais est super.|Yaptığın her şey harika.|Everything you do is great.
avant tout|her şeyden önce|above all, first and foremost`, {
          fr: "Seul, « tout » veut dire « everything » et reste au masculin singulier. Au passé composé, il se place entre l'auxiliaire et le participe : j'ai tout compris, j'ai tout mangé.",
          tr: "Tek başına 'tout' = her şey ve hep eril tekil kalır. Passé composé'de yardımcı fiil ile ortacın arasına girer: j'ai tout compris (her şeyi anladım), j'ai tout mangé (her şeyi yedim). Kasada 'C'est tout ?' sorusunu çok duyacaksınız: 'Başka bir şey var mı?' anlamına gelir. Cevap: 'Oui, c'est tout, merci !'",
          en: "On its own, « tout » means 'everything' and stays masculine singular. In the passé composé it goes between the auxiliary and the participle: j'ai tout compris, j'ai tout mangé."
        }),
        G("Les expressions avec tout", "Tout ile kalıplar", "Expressions with tout", `
tout de suite|hemen, derhal|right away||J'arrive tout de suite !
tout à l'heure|birazdan / az önce|in a moment / a moment ago
À tout à l'heure !|Sonra görüşürüz! (aynı gün)|See you later! (today)
tout à coup|birdenbire, aniden|suddenly
pas du tout|hiç, asla (olumsuz)|not at all||Je ne suis pas du tout fatiguée.
tout près|çok yakın|very close||La gare est tout près.
tout seul / toute seule|tek başına, yapayalnız|all alone, on your own
en tout|toplamda|in total||Ça fait 12 euros en tout.
tout compris|her şey dahil|all included`, {
          fr: "« Tout à l'heure » marche pour le passé ET le futur, mais toujours le même jour : je l'ai vu tout à l'heure / je te rappelle tout à l'heure. Devant un adjectif, « tout » veut dire « très » : tout près, tout seul.",
          tr: "'Tout à l'heure' hem geçmiş (az önce) hem gelecek (birazdan) için kullanılır, ama hep aynı gün içinde: je l'ai vu tout à l'heure (onu az önce gördüm) / je te rappelle tout à l'heure (seni birazdan ararım). Sıfattan önce 'tout' = çok, tamamen: tout près (çok yakın), toute seule (yapayalnız, kadın).",
          en: "« Tout à l'heure » works for the past AND the future, but always the same day: je l'ai vu tout à l'heure / je te rappelle tout à l'heure. Before an adjective, « tout » means 'very': tout près, tout seul."
        }),
        G("À la salle de sport", "Spor salonunda", "At the gym", `
Tout le monde en place !|Herkes yerine!|Everyone in position!
Tous les cours sont complets ce soir.|Bu akşam bütün dersler dolu.|All the classes are full tonight.
La salle est ouverte tous les jours de 7 h à 22 h.|Salon her gün 7'den 22'ye kadar açık.|The gym is open every day from 7 am to 10 pm.|La salle est ouverte tous les jours de sept heures à vingt-deux heures.
Les douches sont toutes libres.|Duşların hepsi boş.|The showers are all free.
On a travaillé tout le corps.|Bütün vücudu çalıştık.|We worked the whole body.
Toutes les deux minutes, on change d'exercice.|İki dakikada bir egzersiz değiştiriyoruz.|Every two minutes we switch exercises.
Tout est compris dans l'abonnement.|Her şey üyeliğe dahil.|Everything's included in the membership.
Bravo à tous, à la semaine prochaine !|Herkese bravo, haftaya görüşürüz!|Well done, everyone, see you next week!`, {
          fr: "À l'accueil, Esin répète « tous les jours » et « tout est compris » plusieurs fois par jour. « Toutes les deux minutes » = chaque fois que deux minutes passent : très utile pour les intervalles !",
          tr: "Esin resepsiyonda 'tous les jours' (her gün) ve 'tout est compris' (her şey dahil) cümlelerini günde birkaç kez tekrarlıyor. 'Toutes les deux minutes' = iki dakikada bir: interval antrenmanlarında çok işe yarar! Aynı şekilde: toutes les heures (saatte bir), tous les trois jours (üç günde bir).",
          en: "At the front desk, Esin says « tous les jours » and « tout est compris » several times a day. « Toutes les deux minutes » = every two minutes: very handy for interval training!"
        })
      ] },

    /* ───────────── 56. Verbs + à / de ───────────── */
    { id: "verbprep", emoji: "🧷", kind: "words", t: { fr: "Penser à, avoir besoin de : verbes et prépositions", tr: "Penser à, avoir besoin de: fiiller ve edatlar", en: "Penser à, avoir besoin de: verbs and prepositions" },
      intro: {
        fr: "On pense À quelque chose, on a besoin DE quelque chose, on joue AU foot mais DU piano… Beaucoup de verbes vont avec une petite préposition. Le turc vous aide : vous avez déjà l'habitude des terminaisons -e, -den ! Apprenez le verbe et sa préposition ensemble, comme un seul bloc.",
        tr: "Penser À quelque chose (bir şeyi düşünmek), avoir besoin DE quelque chose (bir şeye ihtiyacı olmak), jouer AU foot ama DU piano… Birçok fiil küçük bir edatla birlikte kullanılır. Türkçe size yardım ediyor: -e, -den gibi hâl eklerine zaten alışkınsınız! Fiili ve edatını tek bir blok gibi birlikte ezberleyin.",
        en: "You think À something, you need DE something, you play AU football but DU piano… Many verbs come with a little preposition. Learn the verb and its preposition together, as one block, just like 'listen to' or 'look after' in English."
      },
      groups: [
        G("Les verbes avec à", "À ile kullanılan fiiller", "Verbs with à", `
penser à|-i düşünmek|to think about||Je pense à toi.
parler à quelqu'un|biriyle konuşmak|to talk to someone||Je parle à Sophie.
téléphoner à|-i (telefonla) aramak|to phone||Téléphone à ta mère !
répondre à|-e cevap vermek|to answer, to reply to||Je réponds à un mail.
demander à|-e sormak|to ask (someone)||Demande au coach !
s'intéresser à|-e ilgi duymak|to be interested in||Je m'intéresse au sport.
commencer à + infinitif|-meye başlamak|to start to|commencer à|Je commence à comprendre.
apprendre à + infinitif|-meyi öğrenmek|to learn to|apprendre à|Il apprend à nager.
aider quelqu'un à|birine -mede yardım etmek|to help someone to||Tu m'aides à porter le sac ?`, {
          fr: "N'oubliez pas : à + le = au, à + les = aux. On demande AU coach, on téléphone AUX parents. Attention : « téléphoner à quelqu'un », mais « appeler quelqu'un » (sans à).",
          tr: "Unutmayın: à + le = au, à + les = aux. On demande AU coach (koça sorulur), on téléphone AUX parents. Dikkat: Türkçede 'birini aramak' deriz (-i hâli), Fransızcada 'téléphoner À quelqu'un' denir. Ama 'appeler quelqu'un' (birini aramak) edatsızdır: j'appelle Sophie.",
          en: "Remember: à + le = au, à + les = aux. On demande AU coach, on téléphone AUX parents. Careful: « téléphoner à quelqu'un », but « appeler quelqu'un » (no à)."
        }),
        G("Les verbes avec de", "De ile kullanılan fiiller", "Verbs with de", `
avoir besoin de|-e ihtiyacı olmak|to need||J'ai besoin d'aide.
avoir envie de|canı istemek|to feel like||J'ai envie d'un café.
avoir peur de|-den korkmak|to be afraid of||Il a peur des chiens.
parler de|-den bahsetmek|to talk about||On parle de quoi ?
s'occuper de|ilgilenmek, bakmak|to take care of, to deal with||Je m'occupe des inscriptions.
rêver de|-in hayalini kurmak|to dream of||Elle rêve de voyager.
arrêter de + infinitif|-meyi bırakmak|to stop|arrêter de|Il a arrêté de fumer.
essayer de + infinitif|-meye çalışmak|to try to|essayer de|J'essaie de parler français.
oublier de + infinitif|-meyi unutmak|to forget to|oublier de|N'oublie pas de boire de l'eau !
se souvenir de|hatırlamak|to remember||Tu te souviens de moi ?`, {
          fr: "De + le = du, de + les = des, et devant une voyelle « de » devient « d' » : j'ai besoin d'aide, j'ai envie d'un café.",
          tr: "De + le = du, de + les = des; ünlüden önce 'de' → 'd'' olur: j'ai besoin d'aide (yardıma ihtiyacım var). Türkçe ipucu: 'korkmak' ve 'bahsetmek' Türkçede de '-den' alır: köpeklerDEN korkmak = avoir peur DES chiens, bir şeyDEN bahsetmek = parler DE quelque chose. Tesadüf değil, kolay hatırlanır!",
          en: "De + le = du, de + les = des, and before a vowel « de » becomes « d' »: j'ai besoin d'aide, j'ai envie d'un café."
        }),
        G("Jouer à ou jouer de ?", "Jouer à mı jouer de mı?", "Jouer à or jouer de?", `
jouer au foot|futbol oynamak|to play football
jouer au handball|hentbol oynamak|to play handball
jouer aux cartes|kâğıt oynamak, iskambil oynamak|to play cards
jouer à la pétanque|petank oynamak|to play pétanque
jouer du piano|piyano çalmak|to play the piano
jouer de la guitare|gitar çalmak|to play the guitar
jouer du violon|keman çalmak|to play the violin
faire du vélo|bisiklete binmek|to cycle, to ride a bike
faire de la natation|yüzme sporu yapmak|to swim (as a sport)`, {
          fr: "Jouer À + un sport ou un jeu, jouer DE + un instrument. Et beaucoup de sports vont avec « faire de » : faire du vélo, faire de la natation, faire du yoga.",
          tr: "Jouer À + spor ya da oyun (oynamak), jouer DE + müzik aleti (çalmak). Türkçede de iki ayrı fiil var: futbol OYNAMAK ama piyano ÇALMAK. Fransızcada fiil aynı, edat değişiyor! Birçok spor da 'faire de' ile söylenir: faire du vélo, faire de la natation, faire du yoga.",
          en: "Jouer À + a sport or a game, jouer DE + an instrument. And lots of sports go with « faire de »: faire du vélo, faire de la natation, faire du yoga."
        }),
        G("Attention : sans préposition !", "Dikkat: edatsız!", "Careful: no preposition!", `
écouter la radio|radyo dinlemek|to listen to the radio
regarder la télé|televizyon izlemek|to watch TV
chercher ses clés|anahtarlarını aramak|to look for your keys
attendre le bus|otobüsü beklemek|to wait for the bus
payer le café|kahvenin parasını ödemek|to pay for the coffee
demander l'addition|hesabı istemek|to ask for the bill
aimer + infinitif|-meyi sevmek|to like doing|aimer|J'aime courir.
vouloir + infinitif|-mek istemek|to want to|vouloir|Je veux partir.`, {
          fr: "En anglais on dit « listen to », « look for », « wait for », mais en français : écouter, chercher, attendre, sans préposition. On ne dit pas « attendre pour le bus » !",
          tr: "İngilizcede 'listen TO', 'look FOR', 'wait FOR' denir ama Fransızcada écouter, chercher, attendre edatsız kullanılır. 'Attendre pour le bus' yanlış, doğrusu 'attendre le bus'! İngilizcenizi biraz unutun, burada Türkçe daha yakın: otobüsü beklemek = attendre le bus.",
          en: "English says 'listen to', 'look for', 'wait for', but French says écouter, chercher, attendre with no preposition. Never « attendre pour le bus »!"
        }),
        G("Poser la question, répondre vite", "Soru sormak, kısa cevap vermek", "Asking and answering quickly", `
À quoi tu penses ?|Ne düşünüyorsun?|What are you thinking about?
De quoi tu as besoin ?|Neye ihtiyacın var?|What do you need?
De quoi vous parlez ?|Neden bahsediyorsunuz?|What are you talking about?
À qui tu téléphones ?|Kimi arıyorsun?|Who are you calling?
J'y pense.|Bunu düşünüyorum.|I'm thinking about it.
J'en ai besoin.|Ona ihtiyacım var.|I need it.
Je pense à lui.|Onu düşünüyorum (erkek).|I'm thinking about him.
On en parle demain ?|Bunu yarın konuşalım mı?|Shall we talk about it tomorrow?`, {
          fr: "En français, la préposition va au début de la question : À quoi… ? De quoi… ? Pour répondre vite, « y » remplace « à + chose » et « en » remplace « de + chose ». Pour une personne : à lui, à elle, d'elle…",
          tr: "Fransızcada edat sorunun başına gelir: À quoi tu penses ? (Ne düşünüyorsun?), De quoi tu as besoin ? (Neye ihtiyacın var?). İngilizcedeki gibi sona konmaz. Kısa cevap için 'y' = à + şey, 'en' = de + şey: j'y pense, j'en ai besoin. Kişiler için: je pense à lui (onu düşünüyorum).",
          en: "In French the preposition goes at the start of the question: À quoi… ? De quoi… ? (not at the end like English). For quick answers, « y » replaces « à + thing » and « en » replaces « de + thing ». For people: à lui, à elle, d'elle…"
        })
      ] }
  );
})();
