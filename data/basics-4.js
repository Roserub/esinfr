/* Basics, part 4: irregular verbs, reflexive verbs, comparisons, frequency, money, phone calls, invitations and directions. Loads right after data/basics-3.js. */
(function () {
  // item line: "fr|tr|en" or "fr|tr|en|say" or "fr|tr|en|say|ex". say = what the French voice reads (default: fr, leave empty to keep default). ex = optional short French example (word or phrase) also read aloud.
  const I = s => s.trim().split("\n").map(l => { const [fr, tr, en, say, ex] = l.split("|").map(x => x.trim()); return { fr, tr, en, say: say || "", ex: ex || "" }; });
  const G = (fr, tr, en, items, tip) => ({ t: { fr, tr, en }, items: I(items), tip: tip || null });
  window.BASICS = window.BASICS || [];
  window.BASICS.push(

    /* ───────────── 33. Irregular verbs ───────────── */
    { id: "irregular", emoji: "🧩", kind: "words", t: { fr: "Les verbes irréguliers au présent", tr: "Düzensiz fiiller (şimdiki zaman)", en: "Irregular verbs in the present" },
      intro: {
        fr: "Être, avoir, aller, faire… Ces dix verbes sont irréguliers, mais vous les entendez partout, tous les jours. Apprenez-les petit à petit : quelques minutes par jour suffisent !",
        tr: "Être, avoir, aller, faire… Bu on fiil düzensiz ama her gün, her yerde karşınıza çıkıyor. Türkçede fiil çekimi neredeyse hiç bozulmaz (gel-iyor-um, gel-iyor-sun); Fransızcada ise en sık kullanılan fiiller kendi kurallarını koyar. Yavaş yavaş öğrenin: günde birkaç dakika yeter!",
        en: "Être, avoir, aller, faire… These ten verbs are irregular, but you hear them everywhere, every day. Learn them little by little: a few minutes a day is enough!"
      },
      groups: [
        G("Être et avoir", "Être (olmak) ve avoir (sahip olmak)", "Être (to be) and avoir (to have)", `
je suis|ben …-ım (olmak)|I am||Je suis fatiguée.
tu es|sen …-sın|you are (informal)||Tu es prête ?
il est / elle est|o …-dır|he is, she is|il est, elle est|Elle est kiné.
nous sommes|biz …-ız|we are||Nous sommes en retard.
vous êtes|siz …-sınız|you are (formal or plural)||Vous êtes français ?
ils sont / elles sont|onlar …-dır|they are|ils sont, elles sont|Ils sont gentils.
j'ai|benim … var|I have||J'ai une question.
tu as|senin … var|you have (informal)||Tu as faim ?
il a / elle a|onun … var|he has, she has|il a, elle a|Elle a trente ans.
nous avons|bizim … var|we have||Nous avons un chat.
vous avez|sizin … var|you have (formal or plural)||Vous avez la carte Vitale ?
ils ont / elles ont|onların … var|they have|ils ont, elles ont|Ils ont deux enfants.`, {
          fr: "Attention à la liaison : « nous‿avons », « vous‿avez », « ils‿ont » (on entend un « z »). Et ne confondez pas « ils sont » (s) et « ils ont » (z) !",
          tr: "Türkçede 'var' ayrı bir kelimedir (arabam var); Fransızcada 'avoir' fiili kullanılır: j'ai une voiture. Yaş da 'avoir' ile söylenir: j'ai trente ans (otuz yaşındayım, kelimesi kelimesine 'otuz yılım var'). Dikkat: 'ils sont' (s sesi, onlar …-dır) ile 'ils ont' (z sesi, onların var) çok karışır!",
          en: "Watch the liaison: « nous‿avons », « vous‿avez », « ils‿ont » (you hear a 'z'). Don't mix up « ils sont » (s sound) and « ils ont » (z sound)! Age uses avoir: j'ai trente ans."
        }),
        G("Aller et faire", "Aller (gitmek) ve faire (yapmak)", "Aller (to go) and faire (to do, make)", `
je vais|gidiyorum|I go, I'm going||Je vais au travail.
tu vas|gidiyorsun|you go (informal)||Tu vas bien ?
il va / elle va|gidiyor|he goes, she goes|il va, elle va|Il va à la piscine.
nous allons|gidiyoruz|we go||Nous allons au marché.
vous allez|gidiyorsunuz|you go (formal or plural)||Comment allez-vous ?
ils vont / elles vont|gidiyorlar|they go|ils vont, elles vont|Elles vont au cinéma.
je fais, tu fais, il fait|yapıyorum, yapıyorsun, yapıyor|I do, you do, he does||Je fais du sport.
nous faisons|yapıyoruz|we do||Nous faisons les courses.
vous faites|yapıyorsunuz|you do (formal or plural)||Qu'est-ce que vous faites ?
ils font / elles font|yapıyorlar|they do|ils font, elles font|Ils font du vélo.`, {
          fr: "« Aller » sert aussi pour la santé (Ça va ? Comment allez-vous ?) et pour le futur proche (je vais manger). « Faire » sert pour le sport (faire du yoga) et la météo (il fait beau).",
          tr: "'Aller' sağlık için de kullanılır: Ça va ? (Nasılsın?), ve yakın gelecek için: je vais manger (yemek yiyeceğim). 'Faire' Türkçedeki 'yapmak' gibi çok işe yarar: faire du sport (spor yapmak), faire les courses (alışveriş yapmak). Hava durumu bile 'faire' ile: il fait beau (hava güzel). 'Vous faites' telaffuzu 'vu fet' (faisez değil!).",
          en: "« Aller » is also used for health (Ça va ? Comment allez-vous ?) and the near future (je vais manger). « Faire » covers sport (faire du yoga) and weather (il fait beau). Note: « vous faites », never 'faisez'."
        }),
        G("Pouvoir, vouloir, devoir", "Pouvoir (-ebilmek), vouloir (istemek), devoir (-meli)", "Pouvoir (can), vouloir (want), devoir (must)", `
je peux, tu peux, il peut|yapabilirim, yapabilirsin, yapabilir|I can, you can, he can||Je peux entrer ?
nous pouvons, vous pouvez|yapabiliriz, yapabilirsiniz|we can, you can||Vous pouvez répéter ?
ils peuvent / elles peuvent|yapabilirler|they can|ils peuvent, elles peuvent|Ils peuvent venir.
je veux, tu veux, il veut|istiyorum, istiyorsun, istiyor|I want, you want, he wants||Tu veux un café ?
nous voulons, vous voulez|istiyoruz, istiyorsunuz|we want, you want||Vous voulez de l'eau ?
ils veulent / elles veulent|istiyorlar|they want|ils veulent, elles veulent|Ils veulent jouer.
je dois, tu dois, il doit|-meliyim, -melisin, -meli|I must, you must, he must||Je dois partir.
nous devons, vous devez|-meliyiz, -melisiniz|we must, you must||Vous devez signer ici.
ils doivent / elles doivent|-meliler|they must|ils doivent, elles doivent|Elles doivent travailler.`, {
          fr: "Ces trois verbes sont suivis d'un infinitif : je peux venir, je veux dormir, je dois partir. Je, tu et il se prononcent pareil : « peu », « veu », « doi ». Au pluriel, on entend la consonne : ils peuvent, ils veulent, ils doivent.",
          tr: "Türkçede bunlar fiile eklenen eklerdir: gel-ebil-irim, gel-meli-yim. Fransızcada ayrı bir fiil + mastar kullanılır: je peux venir (gelebilirim), je dois partir (gitmeliyim). İyi haber: je, tu, il hâlleri aynı okunur. Kibar rica için 'Vous pouvez… ?' (… -ebilir misiniz?) altın değerinde.",
          en: "These three verbs are followed by an infinitive: je peux venir, je veux dormir, je dois partir. Je, tu and il sound the same; in « ils peuvent, veulent, doivent » you hear the final consonant."
        }),
        G("Venir, prendre, savoir", "Venir (gelmek), prendre (almak), savoir (bilmek)", "Venir (come), prendre (take), savoir (know)", `
je viens, tu viens, il vient|geliyorum, geliyorsun, geliyor|I come, you come, he comes||Je viens de Turquie.
nous venons, vous venez|geliyoruz, geliyorsunuz|we come, you come||Vous venez avec nous ?
ils viennent / elles viennent|geliyorlar|they come|ils viennent, elles viennent|Ils viennent ce soir.
je prends, tu prends, il prend|alıyorum, alıyorsun, alıyor|I take, you take, he takes||Je prends le bus.
nous prenons, vous prenez|alıyoruz, alıyorsunuz|we take, you take||Vous prenez un dessert ?
ils prennent / elles prennent|alıyorlar|they take|ils prennent, elles prennent|Elles prennent le train.
je sais, tu sais, il sait|biliyorum, biliyorsun, biliyor|I know, you know, he knows||Je sais nager.
nous savons, vous savez|biliyoruz, biliyorsunuz|we know, you know||Vous savez où est la gare ?
ils savent / elles savent|biliyorlar|they know|ils savent, elles savent|Ils savent cuisiner.`, {
          fr: "« Prendre » est partout : prendre le bus, prendre un café, prendre rendez-vous. « Savoir + infinitif » = avoir appris à faire quelque chose : je sais nager.",
          tr: "'Prendre' Türkçedeki 'almak' kadar çok işe yarar: prendre le bus (otobüse binmek), prendre un café (kahve içmek), prendre rendez-vous (randevu almak). 'Savoir + mastar' bir beceriyi anlatır, Türkçedeki 'yüzmeyi biliyorum / yüzebiliyorum' gibi: je sais nager. 'Je viens de Turquie' = Türkiye'den geliyorum, -den eki 'de' ile söylenir.",
          en: "« Prendre » is everywhere: prendre le bus, prendre un café, prendre rendez-vous. « Savoir + infinitive » is about a learned skill: je sais nager (I can swim)."
        })
      ] },

    /* ───────────── 34. Reflexive verbs ───────────── */
    { id: "reflexive", emoji: "🪞", kind: "words", t: { fr: "Les verbes pronominaux", tr: "Dönüşlü fiiller", en: "Reflexive verbs" },
      intro: {
        fr: "Je me lève, je m'habille, je me repose : avec ces verbes, on fait l'action sur soi-même. Ils sont parfaits pour raconter sa journée.",
        tr: "Je me lève (kalkıyorum), je m'habille (giyiniyorum), je me repose (dinleniyorum): bu fiillerde kişi eylemi kendine yapar. Türkçedeki dönüşlü '-n' eki gibi düşünün: yıka-n-mak, giyi-n-mek, tara-n-mak. Gününüzü anlatmak için mükemmeller!",
        en: "Je me lève, je m'habille, je me repose: with these verbs, you do the action to yourself. They're perfect for describing your day."
      },
      groups: [
        G("Je me, tu te, il se", "Je me, tu te, il se", "Je me, tu te, il se", `
je me lève|kalkıyorum|I get up
tu te lèves|kalkıyorsun|you get up (informal)
il se lève / elle se lève|kalkıyor|he gets up, she gets up|il se lève, elle se lève
nous nous levons|kalkıyoruz|we get up
vous vous levez|kalkıyorsunuz|you get up (formal or plural)
ils se lèvent / elles se lèvent|kalkıyorlar|they get up|ils se lèvent, elles se lèvent
je m'appelle|adım …|my name is (I call myself)||Je m'appelle Clara.
Comment tu t'appelles ?|Adın ne?|What's your name?
Je ne me lève pas tôt le dimanche.|Pazar günleri erken kalkmam.|I don't get up early on Sundays.`, {
          fr: "Le petit mot change avec la personne : je me, tu te, il se, nous nous, vous vous, ils se. Devant une voyelle : je m'habille, tu t'appelles. À la négation, « ne » se place avant « me » : je ne me lève pas.",
          tr: "Küçük kelime kişiye göre değişir: je me, tu te, il se, nous nous, vous vous, ils se. Ünlüden önce 'me' → 'm'', 'te' → 't'': je m'habille. Olumsuzda 'ne' zamirin önüne gelir: je ne me lève pas. 'Je m'appelle' aslında 'kendimi … diye çağırırım' demek, ama Türkçedeki 'adım …' gibi kullanılır.",
          en: "The little word changes with the person: je me, tu te, il se, nous nous, vous vous, ils se. Before a vowel: je m'habille, tu t'appelles. In negatives, 'ne' goes before 'me': je ne me lève pas."
        }),
        G("La routine du matin et du soir", "Sabah ve akşam rutini", "Morning and evening routine", `
se réveiller|uyanmak|to wake up||Je me réveille à six heures et demie.
se lever|kalkmak|to get up||Je me lève tout de suite.
se doucher|duş almak|to have a shower||Je me douche le matin.
se laver les mains|ellerini yıkamak|to wash your hands||Je me lave les mains.
se brosser les dents|dişlerini fırçalamak|to brush your teeth||Je me brosse les dents.
s'habiller|giyinmek|to get dressed||Je m'habille vite.
se coiffer|saçını taramak|to do your hair||Je me coiffe devant le miroir.
se maquiller|makyaj yapmak|to put on make-up||Elle se maquille.
se raser|tıraş olmak|to shave||Il se rase le matin.
se préparer|hazırlanmak|to get ready||Je me prépare pour le travail.
se dépêcher|acele etmek|to hurry||Dépêche-toi !
se déshabiller|soyunmak|to get undressed||Je me déshabille.
se coucher|yatmak|to go to bed||Je me couche à onze heures.
s'endormir|uykuya dalmak|to fall asleep||Je m'endors vite.`, {
          fr: "Avec une partie du corps, on dit « se laver les mains », pas « laver mes mains » : le « se » montre déjà à qui sont les mains.",
          tr: "Vücut bölümleriyle Fransızca iyelik kullanmaz: 'je me lave les mains' (ellerimi yıkıyorum), 'mes mains' değil. Türkçede iyelik eki kullanırız (ellerimi), Fransızcada ise sahibi 'me' gösterir. 'Se coucher' = yatmak, 's'endormir' = uykuya dalmak: ikisi farklı.",
          en: "With body parts, French says « se laver les mains », not « laver mes mains »: 'se' already shows whose hands they are. Note: se coucher (go to bed) and s'endormir (fall asleep) are different."
        }),
        G("Se reposer, s'entraîner", "Dinlenmek, antrenman yapmak", "Resting and training", `
se reposer|dinlenmek|to rest||Je me repose le dimanche.
se détendre|gevşemek, rahatlamak|to relax||Je me détends avec un livre.
se promener|gezinmek, yürüyüşe çıkmak|to go for a walk||On se promène au parc.
s'asseoir|oturmak|to sit down||Asseyez-vous, je vous en prie.
s'entraîner|antrenman yapmak|to train, to practise||Elle s'entraîne trois fois par semaine.
s'étirer|esnemek, germe hareketi yapmak|to stretch||Je m'étire après le sport.
s'échauffer|ısınmak (spor öncesi)|to warm up||On s'échauffe dix minutes.
se blesser|sakatlanmak, yaralanmak|to get injured||Attention, tu vas te blesser !
s'amuser|eğlenmek|to have fun||Les enfants s'amusent.
s'inquiéter|endişelenmek|to worry||Ne t'inquiète pas !
s'occuper de|ilgilenmek, bakmak|to take care of||Je m'occupe des inscriptions.`, {
          fr: "Pour une sportive, « s'échauffer », « s'étirer » et « s'entraîner » sont des mots essentiels. Et « Ne t'inquiète pas ! » est une phrase gentille à connaître.",
          tr: "Sporcular ve fizyoterapistler için 's'échauffer' (ısınmak), 's'étirer' (esnemek) ve 's'entraîner' (antrenman yapmak) temel kelimeler; danışanlarla da çok kullanılır. 'Ne t'inquiète pas !' (Merak etme!) de bilinmesi gereken tatlı bir cümle. Türkçede 'otur-mak' dönüşlü değil ama Fransızcada 's'asseoir' dönüşlüdür.",
          en: "For sporty people, « s'échauffer », « s'étirer » and « s'entraîner » are key words. And « Ne t'inquiète pas ! » (Don't worry!) is a kind phrase worth knowing."
        })
      ] },

    /* ───────────── 35. Comparisons ───────────── */
    { id: "comparisons", emoji: "⚖️", kind: "words", t: { fr: "Comparer : plus, moins, aussi", tr: "Karşılaştırma", en: "Comparing: more, less, as" },
      intro: {
        fr: "Plus grand, moins cher, aussi rapide, le meilleur… Pour comparer, le français utilise de petits mots autour de l'adjectif. C'est très logique !",
        tr: "Daha büyük, daha az pahalı, kadar hızlı, en iyisi… Türkçede 'daha' ve 'en' kullanırız; Fransızcada 'plus' (daha), 'moins' (daha az), 'aussi' (kadar) ve 'le plus' (en) var. Çok mantıklı bir sistem!",
        en: "Bigger, less expensive, as fast, the best… To compare, French puts small words around the adjective. It's very logical!"
      },
      groups: [
        G("Plus, moins, aussi… que", "Daha, daha az, kadar", "More, less, as… as", `
plus… que|…-den daha|more… than|plus, que|plus grand que
moins… que|…-den daha az|less… than|moins, que|moins cher que
aussi… que|… kadar|as… as|aussi, que|aussi rapide que
Paris est plus grand que Lyon.|Paris Lyon'dan daha büyük.|Paris is bigger than Lyon.
Le bus est moins rapide que le métro.|Otobüs metrodan daha yavaş.|The bus is less fast than the metro.
Elle est aussi grande que sa sœur.|Kız kardeşi kadar uzun.|She's as tall as her sister.
Le vélo est plus pratique que la voiture.|Bisiklet arabadan daha pratik.|The bike is more practical than the car.
Ce pull est moins cher.|Bu kazak daha ucuz.|This jumper is cheaper.
Je cours plus vite que toi.|Senden daha hızlı koşuyorum.|I run faster than you.
Il travaille moins que moi.|Benden daha az çalışıyor.|He works less than me.`, {
          fr: "La structure est toujours la même : plus / moins / aussi + adjectif + que. Après « que », on dit « moi, toi, lui » : plus grand que moi.",
          tr: "Türkçede sıra: 'Paris Lyon'dan daha büyük'; karşılaştırılan şey önce gelir ve -den eki alır. Fransızcada sıra İngilizce gibi: plus grand QUE Lyon. 'Que' = Türkçedeki '-den'. 'Que'dan sonra 'moi, toi, lui' gelir: plus grand que moi (benden daha uzun).",
          en: "The pattern is always plus / moins / aussi + adjective + que. After 'que', use moi, toi, lui: plus grand que moi. No '-er' ending in French: 'bigger' is just 'plus grand'."
        }),
        G("Meilleur et mieux", "Daha iyi", "Better: meilleur and mieux", `
meilleur / meilleure|daha iyi (sıfat)|better (adjective)|meilleur, meilleure|un meilleur prix
mieux|daha iyi (zarf)|better (adverb)||Je vais mieux.
C'est meilleur avec du sel.|Tuzla daha lezzetli.|It's better with salt.
Ce café est meilleur que l'autre.|Bu kahve ötekinden daha iyi.|This coffee is better than the other one.
Ça va mieux aujourd'hui ?|Bugün daha iyi misin?|Are you feeling better today?
Elle parle mieux français maintenant.|Artık daha iyi Fransızca konuşuyor.|She speaks French better now.
C'est mieux comme ça.|Böyle daha iyi.|It's better like this.
pire|daha kötü|worse||C'est pire qu'hier.`, {
          fr: "On ne dit jamais « plus bon » : on dit « meilleur ». Et pas « plus bien » : on dit « mieux ». Meilleur va avec un nom (un meilleur prix), mieux va avec un verbe (je dors mieux).",
          tr: "Türkçede ikisi de 'daha iyi', ama Fransızcada ikiye ayrılır: 'meilleur' bir isimle (un meilleur prix = daha iyi bir fiyat, ce café est meilleur), 'mieux' bir fiille (je dors mieux = daha iyi uyuyorum). Hasta 'Ça va mieux ?' sorusunu kinede çok duyar. 'Plus bon' ve 'plus bien' asla denmez!",
          en: "Never say 'plus bon': it's « meilleur ». Never 'plus bien': it's « mieux ». Meilleur goes with a noun (un meilleur prix), mieux with a verb (je dors mieux), just like English 'better' vs 'well/better'."
        }),
        G("Le plus, le moins", "En, en az", "The most, the least", `
le plus / la plus|en (en çok)|the most|le plus, la plus|la plus belle ville
le moins / la moins|en az|the least|le moins, la moins|le moins cher
le meilleur / la meilleure|en iyi|the best|le meilleur, la meilleure|la meilleure équipe
C'est le plus grand magasin de la ville.|Şehrin en büyük mağazası.|It's the biggest shop in town.
C'est la saison la plus froide.|En soğuk mevsim bu.|It's the coldest season.
C'est le restaurant le moins cher du quartier.|Mahallenin en ucuz restoranı.|It's the cheapest restaurant in the area.
C'est mon meilleur ami.|O benim en iyi arkadaşım.|He's my best friend.
C'est elle qui court le plus vite.|En hızlı koşan o.|She's the one who runs fastest.
le plus souvent possible|olabildiğince sık|as often as possible`, {
          fr: "Pour le superlatif, on ajoute « le, la, les » : le plus grand, la plus belle. Après, on dit « de » : le plus grand magasin de la ville.",
          tr: "Türkçedeki 'en' = Fransızcada 'le plus / la plus'. Ama 'le / la' ismin cinsiyetine uyar: le plus grand magasin, la plus belle ville. 'Şehrin en büyüğü' derken Türkçede -in eki kullanırız; Fransızcada 'de' kullanılır: le plus grand DE la ville.",
          en: "For the superlative, add « le, la, les »: le plus grand, la plus belle. Then use « de » where English uses 'in': le plus grand magasin de la ville."
        })
      ] },

    /* ───────────── 36. Frequency ───────────── */
    { id: "frequency", emoji: "🔁", kind: "words", t: { fr: "Souvent, parfois, jamais : la fréquence", tr: "Sıklık bildiren sözcükler", en: "How often: frequency words" },
      intro: {
        fr: "Toujours, souvent, parfois, jamais… Ces mots disent combien de fois on fait quelque chose. Ils sont parfaits pour parler de ses habitudes, de son sport, de sa semaine.",
        tr: "Her zaman, sık sık, bazen, asla… Bu kelimeler bir şeyi ne sıklıkla yaptığımızı söyler. Alışkanlıklarınızı, sporunuzu, haftanızı anlatmak için mükemmeller. DELF sözlü sınavında da çok işe yararlar!",
        en: "Always, often, sometimes, never… These words say how often you do something. They're perfect for talking about your habits, your sport and your week."
      },
      groups: [
        G("De toujours à jamais", "Her zamandan hiçbir zamana", "From always to never", `
toujours|her zaman, hep|always||Je suis toujours à l'heure.
presque toujours|neredeyse her zaman|almost always
souvent|sık sık, çoğu zaman|often||Je vais souvent à la piscine.
d'habitude|genellikle, normalde|usually||D'habitude, je prends le bus.
parfois|bazen|sometimes||Parfois, je cours le soir.
de temps en temps|ara sıra, zaman zaman|from time to time||Je mange de temps en temps au restaurant.
rarement|nadiren|rarely||Je regarde rarement la télé.
ne… jamais|asla, hiç|never|ne, jamais|Je ne bois jamais de café le soir.
presque jamais|neredeyse hiç|hardly ever||Il ne pleut presque jamais.`, {
          fr: "Ces mots se placent en général juste après le verbe : je vais souvent, je cours parfois. « Parfois » et « d'habitude » peuvent aussi commencer la phrase.",
          tr: "Türkçede sıklık kelimesi fiilin önüne gelir (sık sık giderim); Fransızcada genelde fiilin ARKASINA gelir: je vais souvent (sık sık giderim). 'Parfois' ve 'd'habitude' cümle başında da olabilir. 'Jamais' için 'ne' unutulmamalı: je ne bois jamais (asla içmem).",
          en: "These words usually go right after the verb: je vais souvent, je cours parfois. « Parfois » and « d'habitude » can also start the sentence. Don't forget 'ne' with jamais."
        }),
        G("Tous les jours, chaque semaine", "Her gün, her hafta", "Every day, every week", `
tous les jours|her gün|every day||Je marche tous les jours.
chaque jour|her gün|each day||Chaque jour, j'apprends un mot.
tous les matins|her sabah|every morning
tous les soirs|her akşam|every evening
toutes les semaines|her hafta|every week
tous les mois|her ay|every month
tous les ans|her yıl|every year
tous les deux jours|iki günde bir|every other day
le lundi|pazartesileri|on Mondays||Le lundi, je travaille.
le week-end|hafta sonları|at the weekend||Le week-end, je me repose.`, {
          fr: "« Le lundi » (avec le) = tous les lundis. « Lundi » (sans le) = ce lundi-là, une seule fois. Une petite différence très utile !",
          tr: "'Le lundi' (le ile) = her pazartesi, pazartesileri. 'Lundi' (le olmadan) = bu pazartesi, tek bir kez. Türkçedeki 'pazartesi' ve 'pazartesileri' farkı gibi! 'Tous' eril, 'toutes' dişil kelimelerle: tous les jours, toutes les semaines.",
          en: "« Le lundi » (with le) = every Monday. « Lundi » (no le) = this Monday, once. 'Tous' goes with masculine nouns, 'toutes' with feminine: tous les jours, toutes les semaines."
        }),
        G("Une fois par semaine", "Haftada bir", "Once a week", `
une fois par semaine|haftada bir (kez)|once a week||Je nage une fois par semaine.
deux fois par jour|günde iki kez|twice a day||Prenez ce médicament deux fois par jour.
trois fois par mois|ayda üç kez|three times a month
une fois par an|yılda bir|once a year
Tu fais du sport souvent ?|Sık sık spor yapar mısın?|Do you do sport often?
Combien de fois par semaine ?|Haftada kaç kez?|How many times a week?
Tu vas souvent à la salle ?|Spor salonuna sık gider misin?|Do you often go to the gym?
Ça dépend.|Duruma göre değişir.|It depends.
Pas très souvent.|Pek sık değil.|Not very often.
De plus en plus souvent.|Gittikçe daha sık.|More and more often.`, {
          fr: "« Par » = chaque : une fois par semaine. Pour une habitude, c'est la forme la plus courante. Le médecin et le kiné utilisent beaucoup cette structure.",
          tr: "'Par' = Türkçedeki '-de' (haftaDA bir): une fois par semaine (haftada bir), deux fois par jour (günde iki kez). Doktor ve kine reçetelerinde bu yapıyı sürekli göreceksiniz: 'trois séances par semaine' (haftada üç seans). 'Fois' = kez, defa.",
          en: "« Par » = per: une fois par semaine (once a week), deux fois par jour (twice a day). Doctors and physios use this pattern all the time: trois séances par semaine."
        })
      ] },

    /* ───────────── 37. Money ───────────── */
    { id: "money", emoji: "💶", kind: "words", t: { fr: "L'argent et payer", tr: "Para ve ödeme", en: "Money & paying" },
      intro: {
        fr: "Payer par carte, en espèces, demander le prix, rendre la monnaie… Avec ces mots, vous êtes tranquille à la caisse, au marché ou au restaurant.",
        tr: "Kartla veya nakit ödemek, fiyat sormak, para üstü vermek… Bu kelimelerle kasada, pazarda ya da restoranda rahat edersiniz. Fransa'da kart çok yaygın, ama pazarda biraz nakit taşımak iyi bir fikir.",
        en: "Paying by card or in cash, asking the price, giving change… With these words you'll be relaxed at the till, at the market or in a restaurant."
      },
      groups: [
        G("Les mots de l'argent", "Para kelimeleri", "Money words", `
l'argent|para|money
l'euro|avro|the euro||un euro
le centime|sent, kuruş|the cent||cinquante centimes
le billet|banknot, kâğıt para|the banknote||un billet de 20 euros
la pièce|madeni para|the coin||une pièce de 2 euros
les espèces|nakit|cash||payer en espèces
la monnaie|bozuk para, para üstü|change, coins
la carte bancaire|banka kartı|bank card
le sans contact|temassız ödeme|contactless
le code|şifre (kart)|PIN code
le distributeur|ATM, bankamatik|cash machine||Il y a un distributeur près d'ici ?
le prix|fiyat|the price
cher / chère|pahalı|expensive|cher, chère
pas cher|ucuz|cheap
gratuit / gratuite|bedava, ücretsiz|free (no cost)|gratuit, gratuite`, {
          fr: "« L'argent » est toujours singulier. « La monnaie », c'est les petites pièces ou l'argent qu'on vous rend. Et « gratuit » veut dire sans payer.",
          tr: "Dikkat: 'l'argent' hem para hem gümüş demek ve hep tekildir. 'La monnaie' = bozuk para veya para üstü. Türkçede 'para üstü' tek kelime gibi; Fransızcada 'rendre la monnaie' (para üstünü vermek) denir. 'Gratuit' = bedava; İngilizcedeki 'free' gibi 'özgür' anlamı yok.",
          en: "« L'argent » is always singular. « La monnaie » means coins or the change you get back. « Gratuit » = free of charge (never 'free' as in freedom, that's libre)."
        }),
        G("À la caisse", "Kasada", "At the till", `
Ça coûte combien ?|Bu ne kadar?|How much does it cost?
Je vous dois combien ?|Size borcum ne kadar?|How much do I owe you?
Ça fait 12,50 €.|12,50 avro tutuyor.|That's 12.50 euros.|Ça fait douze euros cinquante.
Je peux payer par carte ?|Kartla ödeyebilir miyim?|Can I pay by card?
Je paie en espèces.|Nakit ödüyorum.|I'm paying in cash.
Vous avez de la monnaie ?|Bozuk paranız var mı?|Do you have any change?
Vous n'avez pas plus petit ?|Daha küçük paranız yok mu?|Don't you have anything smaller?
Je vous rends la monnaie.|Para üstünüzü veriyorum.|Here's your change.
Tapez votre code.|Şifrenizi girin.|Enter your PIN.
Le paiement est refusé.|Ödeme reddedildi.|The payment was declined.
Vous voulez le ticket ?|Fişi ister misiniz?|Do you want the receipt?
C'est un peu trop cher pour moi.|Benim için biraz fazla pahalı.|It's a bit too expensive for me.
On partage l'addition ?|Hesabı bölüşelim mi?|Shall we split the bill?
C'est pour moi !|Benden!|It's on me!`, {
          fr: "« Payer par carte » mais « payer en espèces ». Au restaurant, on demande « l'addition » ; au magasin, on reçoit « le ticket ». Souvent, le sans contact marche jusqu'à 50 €.",
          tr: "'Par carte' (kartla) ama 'en espèces' (nakit): Türkçedeki '-la / -le' iki farklı kelimeye dönüşür. Restoranda 'l'addition' (hesap) istenir, mağazada 'le ticket' (fiş) verilir. Türkiye'deki gibi 'C'est pour moi !' (Benden!) diyebilirsiniz; ama Fransa'da arkadaşlar arasında hesabı bölüşmek çok yaygındır.",
          en: "« Payer par carte » but « payer en espèces ». In a restaurant you ask for « l'addition »; in a shop you get « le ticket ». Splitting the bill among friends is very common in France."
        })
      ] },

    /* ───────────── 38. Phone calls ───────────── */
    { id: "phone", emoji: "📞", kind: "words", t: { fr: "Au téléphone", tr: "Telefonda", en: "On the phone" },
      intro: {
        fr: "Téléphoner en français fait un peu peur : on ne voit pas la personne ! Avec quelques phrases toutes faites, c'est beaucoup plus facile. Et vous avez le droit de dire : « Vous pouvez répéter ? »",
        tr: "Fransızca telefonda konuşmak biraz korkutucu: karşınızdakini göremiyorsunuz! Ama birkaç kalıp cümleyle çok daha kolay. 'Vous pouvez répéter ?' (Tekrar edebilir misiniz?) demek tamamen normal, Fransızlar da sık sık der.",
        en: "Phoning in French is a bit scary: you can't see the person! With a few ready-made phrases it gets much easier. And you're allowed to say: « Vous pouvez répéter ? »"
      },
      groups: [
        G("Allô ?", "Alo?", "Hello?", `
Allô ?|Alo?|Hello? (on the phone)
Allô, bonjour, c'est Marc.|Alo, merhaba, ben Marc.|Hello, it's Marc.
Qui est à l'appareil ?|Kiminle görüşüyorum?|Who's speaking?
C'est de la part de qui ?|Kim arıyor diyeyim?|Who's calling, please?
Je voudrais parler à Madame Martin.|Martin Hanım'la görüşmek istiyorum.|I'd like to speak to Mrs Martin.
Ne quittez pas.|Ayrılmayın, hatta kalın.|Please hold.
Je vous le passe.|Size bağlıyorum (onu, erkek).|I'll put him through.
Je vous la passe.|Size bağlıyorum (onu, kadın).|I'll put her through.
Elle n'est pas là pour le moment.|Şu anda burada değil.|She's not here at the moment.
La ligne est occupée.|Hat meşgul.|The line is busy.
Je vous entends mal.|Sizi iyi duyamıyorum.|I can't hear you well.
Ça coupe.|Ses kesiliyor.|You're breaking up.
Vous pouvez parler plus lentement ?|Daha yavaş konuşabilir misiniz?|Can you speak more slowly?`, {
          fr: "« Allô » s'utilise seulement au téléphone. « C'est de la part de qui ? » veut dire « Qui appelle ? ». Répondez simplement : « C'est Marc Dubois. »",
          tr: "'Allô' sadece telefonda kullanılır, Türkçedeki 'Alo' ile aynı! 'C'est de la part de qui ?' sekreterlerin klasik sorusudur: 'Kim arıyor?'. Cevap: 'C'est …' (Ben …). 'Je vous le passe' = onu size bağlıyorum; 'le' erkek, 'la' kadın için. Türkçedeki 'onu' cinsiyetsizdir, Fransızcada değil.",
          en: "« Allô » is only used on the phone. « C'est de la part de qui ? » means 'Who's calling?'. Answer « C'est… ». In « Je vous le passe », 'le' is for a man and 'la' for a woman."
        }),
        G("Laisser un message", "Mesaj bırakmak", "Leaving a message", `
un message|mesaj|a message
laisser un message|mesaj bırakmak|to leave a message||Je peux laisser un message ?
la messagerie|sesli mesaj kutusu|voicemail
rappeler|geri aramak|to call back||Je rappelle plus tard.
Vous pouvez lui demander de me rappeler ?|Ona beni geri aramasını söyleyebilir misiniz?|Can you ask him / her to call me back?
Mon numéro, c'est le 06 12 34 56 78.|Numaram 06 12 34 56 78.|My number is 06 12 34 56 78.|Mon numéro, c'est le zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit.
un appel manqué|cevapsız arama|a missed call
un texto|kısa mesaj, SMS|a text message||Je t'envoie un texto.
raccrocher|telefonu kapatmak|to hang up`, {
          fr: "En France, on dit les numéros deux chiffres par deux chiffres : 06 12 34 56 78 = zéro six, douze, trente-quatre… Entraînez-vous avec votre propre numéro !",
          tr: "Fransa'da telefon numaraları ikişer ikişer söylenir: 06 12 34 56 78 = 'zéro six, douze, trente-quatre…'. Türkiye'deki üçlü-ikili gruplamadan farklı. Kendi numaranızı Fransızca söyleyerek pratik yapın, resmî yerlerde mutlaka sorulur!",
          en: "In France phone numbers are said in pairs: 06 12 34 56 78 = zéro six, douze, trente-quatre… Practise with your own number, you'll be asked for it everywhere!"
        }),
        G("Épeler son email", "E-posta adresini harf harf söylemek", "Spelling your email", `
Vous pouvez épeler ?|Harf harf söyleyebilir misiniz?|Can you spell it?
l'adresse e-mail|e-posta adresi|email address
arobase|@ (et işareti)|at sign (@)
point|nokta|dot
tiret|tire (-)|hyphen, dash
tiret du bas|alt çizgi (_)|underscore
en minuscules|küçük harfle|in lower case
une majuscule|büyük harf|a capital letter
marie.dupont@exemple.fr|marie.dupont@exemple.fr|marie.dupont@exemple.fr|marie point dupont arobase exemple point f r
M comme Marseille|Marseille'in M'si|M for Marseille`, {
          fr: "Pour épeler, on utilise souvent des prénoms ou des villes : « D comme Daniel, M comme Marseille ». « @ » se dit « arobase » et « . » se dit « point ».",
          tr: "Türkçede '@' için 'et' deriz; Fransızcada 'arobase'. Nokta 'point', alt çizgi 'tiret du bas'. Adınızda ı, ş, ğ gibi harfler varsa e-postada çoğu zaman i, s, g yazılır; bunu önceden söyleyin: 'sans accent'. Harfleri netleştirmek için isim veya şehir adı kullanın: 'Y comme Yvonne'.",
          en: "To spell, people use first names or cities: « D comme Daniel, M comme Marseille ». '@' is « arobase » and '.' is « point »."
        })
      ] },

    /* ───────────── 39. Invitations ───────────── */
    { id: "invitations", emoji: "💌", kind: "words", t: { fr: "Inviter, accepter, refuser", tr: "Davet etmek, kabul etmek, reddetmek", en: "Inviting, accepting, declining" },
      intro: {
        fr: "Un café, un dîner, un footing ensemble ? Voici comment inviter, dire oui avec plaisir ou dire non gentiment, et trouver une date. Ce sont aussi des phrases très utiles pour le DELF !",
        tr: "Bir kahve, bir akşam yemeği, birlikte koşu? İşte davet etmenin, memnuniyetle evet demenin, kibarca hayır demenin ve tarih belirlemenin yolları. Bu cümleler DELF yazılı ve sözlü sınavında da çok işe yarar!",
        en: "A coffee, a dinner, a run together? Here's how to invite, say yes with pleasure or no kindly, and find a date. These phrases are also very useful for the DELF!"
      },
      groups: [
        G("Inviter", "Davet etmek", "Inviting", `
Tu es libre samedi ?|Cumartesi boş musun?|Are you free on Saturday?
Tu veux venir dîner à la maison ?|Akşam yemeğine bize gelmek ister misin?|Do you want to come for dinner at our place?
Ça te dit d'aller au cinéma ?|Sinemaya gitmeye ne dersin?|Do you fancy going to the cinema?
On va boire un café ?|Bir kahve içelim mi?|Shall we go for a coffee?
On pourrait courir ensemble dimanche.|Pazar günü birlikte koşabiliriz.|We could go running together on Sunday.
Je t'invite à mon anniversaire.|Seni doğum günüme davet ediyorum.|I'm inviting you to my birthday.
Vous êtes libres vendredi soir ?|Cuma akşamı boş musunuz?|Are you free on Friday evening?
inviter|davet etmek|to invite||J'invite mes collègues.`, {
          fr: "« Ça te dit ? » est très naturel entre amis. Attention : en France, « je t'invite » au restaurant veut souvent dire « je paie ».",
          tr: "'Ça te dit ?' arkadaşlar arasında çok doğal: 'ne dersin?'. Dikkat: Türkiye'deki gibi Fransa'da da restoranda 'je t'invite' genelde 'hesap benden' demektir. Birini eve yemeğe davet ederken sorulan 'Qu'est-ce que j'apporte ?' (Ne getireyim?) Türk misafirperverliğine çok benzer.",
          en: "« Ça te dit ? » is very natural among friends. Careful: in a restaurant, « je t'invite » usually means 'I'm paying'."
        }),
        G("Accepter", "Kabul etmek", "Accepting", `
Avec plaisir !|Memnuniyetle!|With pleasure!
Oui, bonne idée !|Evet, iyi fikir!|Yes, good idea!
Volontiers.|Seve seve.|Gladly.
Pourquoi pas ?|Neden olmasın?|Why not?
Ça marche !|Tamam, anlaştık!|Sounds good! Deal!
C'est gentil, merci !|Çok naziksin, teşekkürler!|That's kind, thank you!
Qu'est-ce que j'apporte ?|Ne getireyim?|What shall I bring?`, {
          fr: "« Volontiers » est un peu plus poli, « Ça marche ! » est plus familier. Si on vous invite chez quelqu'un, demandez « Qu'est-ce que j'apporte ? » : c'est très apprécié.",
          tr: "'Volontiers' biraz daha kibar, 'Ça marche !' daha samimi. 'Pourquoi pas ?' Türkçedeki 'neden olmasın?' ile birebir aynı! Eve davet edildiğinizde 'Qu'est-ce que j'apporte ?' diye sorun; Fransızlar genelde bir şişe şarap, tatlı ya da çiçek getirir.",
          en: "« Volontiers » is a little more polite, « Ça marche ! » more casual. If you're invited to someone's home, ask « Qu'est-ce que j'apporte ? »: it's much appreciated."
        }),
        G("Refuser poliment", "Kibarca reddetmek", "Declining politely", `
Désolé(e), je ne peux pas.|Üzgünüm, yapamam / gelemem.|Sorry, I can't.|Désolée, je ne peux pas.
C'est dommage, je travaille ce jour-là.|Ne yazık, o gün çalışıyorum.|What a shame, I'm working that day.
Merci, mais je suis déjà prise.|Teşekkürler ama başka bir planım var.|Thanks, but I already have plans.
J'aimerais bien, mais je suis fatiguée.|Çok isterdim ama yorgunum.|I'd love to, but I'm tired.
Une autre fois, peut-être ?|Belki başka bir zaman?|Another time, maybe?
Ce n'est pas possible pour moi.|Benim için mümkün değil.|It's not possible for me.
refuser|reddetmek|to decline, to refuse`, {
          fr: "Pour refuser gentiment : remerciez, donnez une raison courte, proposez une autre fois. Une femme dit « désolée » et « je suis prise » ; un homme dit « désolé » et « je suis pris ».",
          tr: "Kibarca reddetmenin formülü: teşekkür et + kısa bir sebep + başka bir zaman öner. Türkçedeki 'Çok isterdim ama…' tam olarak 'J'aimerais bien, mais…' demek. Kadınsanız 'désolée', 'prise', 'fatiguée' dersiniz (yazılışta -e eklenir); erkekler 'désolé', 'pris', 'fatigué'.",
          en: "To decline kindly: thank, give a short reason, suggest another time. A woman says « désolée, je suis prise »; a man says « désolé, je suis pris »."
        }),
        G("Trouver une date", "Tarih belirlemek", "Finding a date", `
Quand est-ce que tu es libre ?|Ne zaman boşsun?|When are you free?
Samedi, ça te va ?|Cumartesi sana uyar mı?|Does Saturday suit you?
Plutôt dimanche ?|Pazar daha mı iyi?|Sunday instead?
On se retrouve à quelle heure ?|Saat kaçta buluşalım?|What time shall we meet?
Vers 19 h ?|Saat 19 gibi?|Around 7 pm?|Vers dix-neuf heures ?
Rendez-vous devant le cinéma.|Sinemanın önünde buluşalım.|Let's meet in front of the cinema.
C'est noté !|Not ettim!|Noted! Got it!
À samedi !|Cumartesi görüşürüz!|See you on Saturday!`, {
          fr: "« Ça te va ? » (tu) ou « Ça vous va ? » (vous) pour vérifier qu'une date convient. Pour dire au revoir jusqu'au rendez-vous : « À samedi ! », « À demain ! ».",
          tr: "'Ça te va ?' (sana uyar mı?) tarih önermek için ideal. 'À samedi !' Türkçedeki 'Cumartesi görüşürüz!' gibi: 'à' + gün yeter. Fransa'da akşam yemeği daveti genelde 19 h 30 - 20 h civarıdır; tam saatinde değil, 10-15 dakika geç gitmek kibarlık sayılır.",
          en: "« Ça te va ? » (tu) or « Ça vous va ? » (vous) checks a date suits. To say bye until then: « À samedi ! », « À demain ! ». For dinner at someone's home, arriving 10–15 minutes late is polite."
        })
      ] },

    /* ───────────── 40. Directions ───────────── */
    { id: "directions", emoji: "🧭", kind: "words", t: { fr: "Demander et indiquer le chemin", tr: "Yol sormak ve tarif etmek", en: "Asking for & giving directions" },
      intro: {
        fr: "Le carrefour, le feu, le rond-point… et « prenez la deuxième à droite ». Avec ces mots, vous comprenez les explications dans la rue et vous pouvez aider un touriste !",
        tr: "Kavşak, trafik ışığı, göbek… ve 'ikinci sağa dönün'. Bu kelimelerle sokakta yapılan tarifleri anlarsınız, hatta bir turiste yardım edebilirsiniz! Sol, sağ ve düz için 'En ville' ve 'Où est… ?' konularına bakın.",
        en: "The crossroads, the traffic lights, the roundabout… and 'take the second right'. With these words you'll understand directions in the street, and even help a tourist!"
      },
      groups: [
        G("Dans la rue", "Sokakta", "In the street", `
le carrefour|kavşak|crossroads, junction
le feu|trafik ışığı|traffic lights||au feu rouge
le rond-point|göbek, döner kavşak|roundabout
le passage piéton|yaya geçidi|pedestrian crossing
le trottoir|kaldırım|pavement
le pont|köprü|bridge
l'avenue|geniş cadde|avenue
le boulevard|bulvar|boulevard
l'angle de la rue|sokağın köşesi|the corner of the street
le panneau|tabela|road sign
le plan|harita, şehir planı|map, street map`, {
          fr: "« Le feu » veut dire aussi « le feu » qui brûle ! Dans la rue, c'est le feu de circulation : « au feu, tournez à droite ».",
          tr: "'Le feu' hem ateş hem trafik ışığı demek! Yol tariflerinde hep trafik ışığıdır: 'au feu' = ışıklarda. Türkiye'deki 'ışıklardan sağa dön' ile aynı mantık. 'Le plan' = şehir haritası; 'la carte' daha çok ülke haritası için.",
          en: "« Le feu » also means 'fire'! In directions it's the traffic light: « au feu, tournez à droite » = at the lights, turn right."
        }),
        G("Indiquer le chemin", "Yol tarif etmek", "Giving directions", `
Prenez la deuxième à droite.|İkinci sağa dönün.|Take the second right.
Prenez la première rue à gauche.|İlk soldaki sokağa girin.|Take the first street on the left.
Tournez au feu.|Işıklardan dönün.|Turn at the lights.
Tournez au coin, après le café.|Kafeden sonra köşeden dönün.|Turn at the corner, after the café.
Allez jusqu'au carrefour.|Kavşağa kadar gidin.|Go as far as the crossroads.
Au rond-point, prenez la troisième sortie.|Göbekte üçüncü çıkışı alın.|At the roundabout, take the third exit.
Traversez le pont.|Köprüyü geçin.|Cross the bridge.
Traversez au passage piéton.|Yaya geçidinden karşıya geçin.|Cross at the pedestrian crossing.
Montez la rue.|Sokaktan yukarı çıkın.|Go up the street.
Descendez l'avenue.|Caddeden aşağı inin.|Go down the avenue.
C'est sur votre gauche.|Solunuzda.|It's on your left.
C'est juste après la pharmacie.|Eczaneden hemen sonra.|It's just after the pharmacy.
Vous ne pouvez pas le rater.|Kaçırmanız mümkün değil.|You can't miss it.`, {
          fr: "« La deuxième » veut dire « la deuxième rue ». On utilise l'impératif avec « vous » : prenez, tournez, traversez, allez. « Jusqu'à » = on s'arrête là.",
          tr: "'La deuxième à droite' = sağdaki ikinci sokak; 'rue' kelimesi söylenmez. Türkçede 'kavşağa KADAR' deriz, Fransızcada 'jusqu'au carrefour': 'jusqu'à' = '-e kadar'. Tarifler 'vous' emir kipiyle verilir: prenez (alın), tournez (dönün), traversez (geçin).",
          en: "« La deuxième » means 'the second street'. Directions use the 'vous' imperative: prenez, tournez, traversez, allez. « Jusqu'à » = as far as, up to."
        }),
        G("Demander son chemin", "Yol sormak", "Asking the way", `
Pardon, je cherche la gare.|Pardon, garı arıyorum.|Excuse me, I'm looking for the station.
Pour aller à la mairie, s'il vous plaît ?|Belediyeye nasıl gidilir, lütfen?|How do I get to the town hall, please?
Il y a une pharmacie près d'ici ?|Yakınlarda eczane var mı?|Is there a pharmacy near here?
C'est à combien de minutes ?|Kaç dakika uzaklıkta?|How many minutes away is it?
C'est à 200 mètres.|200 metre ileride.|It's 200 metres away.|C'est à deux cents mètres.
On peut y aller à pied ?|Yürüyerek gidilebilir mi?|Can you walk there?
Je suis perdue.|Kayboldum.|I'm lost.
Vous pouvez me montrer sur le plan ?|Haritada gösterebilir misiniz?|Can you show me on the map?
Je ne suis pas d'ici, désolé.|Buralı değilim, üzgünüm.|I'm not from around here, sorry.`, {
          fr: "« Pour aller à… ? » est la façon la plus simple de demander. Une femme dit « je suis perdue », un homme « je suis perdu ». Si la personne parle vite, demandez : « Vous pouvez me montrer ? »",
          tr: "'Pour aller à… ?' yol sormanın en kolay yolu, Türkçedeki '… nasıl gidilir?' gibi. Kadınlar 'je suis perdue', erkekler 'je suis perdu' der (aynı okunur). Karşınızdaki hızlı konuşursa telefonda haritayı açıp 'Vous pouvez me montrer ?' (Gösterebilir misiniz?) deyin; kimse bunu garip bulmaz.",
          en: "« Pour aller à… ? » is the simplest way to ask. A woman says « je suis perdue », a man « je suis perdu » (same sound). If they talk fast, open your map and ask « Vous pouvez me montrer ? »."
        })
      ] }
  );
})();
