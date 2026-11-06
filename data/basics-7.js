/* Basics, part 7: the imparfait, the simple future, the little words y and en, and il faut / devoir / pouvoir (obligation and permission). Loads right after data/basics-6.js. */
(function () {
  // item line: "fr|tr|en" or "fr|tr|en|say" or "fr|tr|en|say|ex". say = what the French voice reads (default: fr, leave empty to keep default). ex = optional short French example (word or phrase) also read aloud.
  const I = s => s.trim().split("\n").map(l => { const [fr, tr, en, say, ex] = l.split("|").map(x => x.trim()); return { fr, tr, en, say: say || "", ex: ex || "" }; });
  const G = (fr, tr, en, items, tip) => ({ t: { fr, tr, en }, items: I(items), tip: tip || null });
  window.BASICS = window.BASICS || [];
  window.BASICS.push(

    /* ───────────── 49. The imparfait ───────────── */
    { id: "imparfait", emoji: "🕰️", kind: "words", t: { fr: "L'imparfait : raconter le passé", tr: "Imparfait: geçmişi anlatmak", en: "The imparfait: describing the past" },
      intro: {
        fr: "Quand j'étais petite, j'habitais à Istanbul et j'allais à l'école à pied. L'imparfait sert à décrire le passé : comment c'était, ce qu'on faisait souvent, le décor d'une histoire. Bonne nouvelle : les terminaisons sont les mêmes pour tous les verbes !",
        tr: "Quand j'étais petite, j'habitais à Istanbul et j'allais à l'école à pied (Küçükken İstanbul'da oturuyordum ve okula yürüyerek giderdim). Imparfait geçmişi tarif etmek için kullanılır: bir şey nasıldı, eskiden ne yapardık, bir hikâyenin dekoru. Türkçedeki '-iyordu' ve '-erdi' eklerine çok benzer. Güzel haber: sonekler bütün fiiller için aynı!",
        en: "Quand j'étais petite, j'habitais à Istanbul et j'allais à l'école à pied. The imparfait describes the past: what things were like, what you used to do, the background of a story. Good news: the endings are the same for every verb!"
      },
      groups: [
        G("Comment on le forme", "Nasıl kurulur", "How to form it", `
je parlais|konuşuyordum / konuşurdum|I was speaking, I used to speak
tu parlais|konuşuyordun|you were speaking
il parlait|konuşuyordu|he was speaking
nous parlions|konuşuyorduk|we were speaking
vous parliez|konuşuyordunuz|you were speaking
elles parlaient|konuşuyorlardı|they were speaking
nous finissons → je finissais|nous finissons → bitiriyordum|nous finissons → I was finishing|je finissais
nous prenons → je prenais|nous prenons → alıyordum|nous prenons → I was taking|je prenais
nous faisons → je faisais|nous faisons → yapıyordum|nous faisons → I was doing|je faisais`, {
          fr: "La recette : on prend « nous » au présent, on enlève « -ons », et on ajoute -ais, -ais, -ait, -ions, -iez, -aient. Parlais, parlait, parlaient : à l'oral, c'est le même son !",
          tr: "Tarif: fiilin şimdiki zamandaki 'nous' hâlini alın, '-ons' ekini atın, sonra -ais, -ais, -ait, -ions, -iez, -aient ekleyin. Nous prenons → pren- → je prenais. Müjde: parlais, parlait, parlaient üçü de aynı okunur ('parlè' gibi, sonu açık 'e' sesiyle). Yani altı biçim için konuşmada sadece üç farklı ses var!",
          en: "The recipe: take the « nous » form in the present, remove « -ons », and add -ais, -ais, -ait, -ions, -iez, -aient. Parlais, parlait, parlaient all sound the same!"
        }),
        G("Être, avoir et les verbes utiles", "Être, avoir ve faydalı fiiller", "Être, avoir and useful verbs", `
j'étais|idim / -iyordum|I was||J'étais fatiguée.
c'était|…ydı, öyleydi|it was||C'était super !
il y avait|vardı|there was, there were||Il y avait beaucoup de monde.
j'avais|vardı (benim)|I had||J'avais un chien.
il faisait beau|hava güzeldi|the weather was nice
il faisait froid|hava soğuktu|it was cold
il pleuvait|yağmur yağıyordu|it was raining
je voulais|istiyordum|I wanted||Je voulais un café.
je pouvais|-ebiliyordum|I could, I was able to
je savais|biliyordum|I knew||Je ne savais pas.
j'allais|gidiyordum|I was going, I used to go`, {
          fr: "« Être » est le seul verbe vraiment irrégulier : j'étais, c'était. Retenez trois expressions magiques pour raconter : c'était…, il y avait…, il faisait…",
          tr: "Gerçekten düzensiz olan tek fiil 'être': j'étais, c'était. Bir hikâye anlatmak için üç sihirli kalıbı ezberleyin: c'était… (… idi), il y avait… (… vardı), il faisait… (hava … idi). Örnek: C'était samedi, il faisait beau, il y avait du monde au parc.",
          en: "« Être » is the only truly irregular verb: j'étais, c'était. Learn three magic phrases for telling stories: c'était…, il y avait…, il faisait…"
        }),
        G("Les habitudes d'avant", "Eskiden alışkanlıklar", "Past habits", `
Avant, je fumais.|Eskiden sigara içerdim.|I used to smoke.
Quand j'étais petit, je jouais au foot.|Küçükken futbol oynardım.|When I was little, I played football.
Le samedi, on allait chez ma grand-mère.|Cumartesileri büyükanneme giderdik.|On Saturdays we used to go to my grandma's.
Tous les matins, il courait au parc.|Her sabah parkta koşardı.|Every morning he ran in the park.
En Turquie, je travaillais dans un club.|Türkiye'de bir kulüpte çalışıyordum.|In Turkey I worked in a club.
À l'école, j'aimais le sport.|Okulda sporu severdim.|At school I liked sport.
On se levait à six heures.|Saat altıda kalkardık.|We used to get up at six.
Elle habitait à Lyon.|Lyon'da oturuyordu.|She used to live in Lyon.
autrefois|eskiden, bir zamanlar|in the past, formerly`, {
          fr: "Avec « avant », « quand j'étais petit(e) », « le samedi », « tous les matins », on utilise presque toujours l'imparfait : c'est une habitude, pas un événement unique.",
          tr: "'Avant' (eskiden), 'quand j'étais petit(e)' (küçükken), 'le samedi' (cumartesileri), 'tous les matins' (her sabah) gibi ifadelerle neredeyse hep imparfait kullanılır: tek seferlik bir olay değil, bir alışkanlık söz konusu. Türkçedeki '-erdi' (oynardım, giderdik) ile birebir aynı mantık!",
          en: "With « avant », « quand j'étais petit(e) », « le samedi », « tous les matins », you almost always use the imparfait: it's a habit, not a one-off event. It's like English 'used to'."
        }),
        G("Décrire une scène", "Bir sahneyi tarif etmek", "Describing a scene", `
Il était huit heures.|Saat sekizdi.|It was eight o'clock.
La salle était pleine.|Salon doluydu.|The gym was full.
Les enfants dormaient.|Çocuklar uyuyordu.|The children were sleeping.
J'étais au téléphone.|Telefondaydım.|I was on the phone.
Il portait un manteau rouge.|Kırmızı bir mont giyiyordu.|He was wearing a red coat.
Elle avait l'air triste.|Üzgün görünüyordu.|She looked sad.
Je me sentais bien.|Kendimi iyi hissediyordum.|I felt good.
Tout le monde attendait le bus.|Herkes otobüsü bekliyordu.|Everyone was waiting for the bus.`, {
          fr: "L'imparfait, c'est la photo ; le passé composé, c'est l'action. Il pleuvait (photo) quand je suis sortie (action). Le décor à l'imparfait, l'événement au passé composé.",
          tr: "Imparfait bir fotoğraf, passé composé ise bir eylem gibidir. Il pleuvait (yağmur yağıyordu = fotoğraf) quand je suis sortie (dışarı çıktığımda = eylem). Dekor imparfait ile, olay passé composé ile anlatılır. Türkçede de aynı: 'yağıyorDU' ve 'çıkTIM'.",
          en: "The imparfait is the photo; the passé composé is the action. Il pleuvait (photo) quand je suis sortie (action). Background in the imparfait, events in the passé composé."
        }),
        G("Imparfait ou passé composé ?", "Imparfait mi, passé composé mi?", "Imparfait or passé composé?", `
Je dormais quand le téléphone a sonné.|Telefon çaldığında uyuyordum.|I was sleeping when the phone rang.
Il courait et il est tombé.|Koşuyordu ve düştü.|He was running and he fell.
C'était bien ?|İyi miydi? / Güzel miydi?|Was it good?
Oui, j'ai passé une bonne soirée.|Evet, güzel bir akşam geçirdim.|Yes, I had a nice evening.
J'étais malade, alors je suis restée à la maison.|Hastaydım, o yüzden evde kaldım.|I was ill, so I stayed at home.
Il faisait chaud, on est allés à la plage.|Hava sıcaktı, plaja gittik.|It was hot, so we went to the beach.
Je voulais t'appeler, mais j'ai oublié.|Seni aramak istiyordum ama unuttum.|I wanted to call you, but I forgot.
Qu'est-ce que tu faisais hier à 20 heures ?|Dün saat 20'de ne yapıyordun?|What were you doing yesterday at 8 pm?`, {
          fr: "Une question simple aide : « Qu'est-ce qui se passait ? » → imparfait. « Qu'est-ce qui s'est passé ? » → passé composé. Pas de panique : même les Français hésitent parfois !",
          tr: "Basit bir soru yardımcı olur: 'Ne oluyordu?' → imparfait. 'Ne oldu?' → passé composé. Türkçede bu ayrımı zaten her gün yapıyorsunuz: 'uyuyordum' (imparfait) / 'telefon çaldı' (passé composé). Panik yok, Fransızlar bile bazen tereddüt eder!",
          en: "A simple question helps: 'What was going on?' → imparfait. 'What happened?' → passé composé. Don't panic: even French people hesitate sometimes!"
        })
      ] },

    /* ───────────── 50. The simple future ───────────── */
    { id: "futursimple", emoji: "🔮", kind: "words", t: { fr: "Le futur simple : demain, je serai…", tr: "Gelecek zaman (futur simple)", en: "The simple future: tomorrow I will…" },
      intro: {
        fr: "Un jour, je serai kiné en France. Demain, il fera beau. Le futur simple parle de l'avenir, des projets, des promesses et de la météo. Pour les verbes réguliers, c'est facile : l'infinitif + une petite terminaison.",
        tr: "Un jour, je serai kiné en France (Bir gün Fransa'da fizyoterapist olacağım). Demain, il fera beau (Yarın hava güzel olacak). Futur simple geleceği, planları, sözleri ve hava tahminini anlatır; Türkçedeki '-ecek' gibi. Düzenli fiillerde çok kolay: mastar + küçük bir ek.",
        en: "Un jour, je serai kiné en France. Demain, il fera beau. The simple future talks about the future, plans, promises and the weather. For regular verbs it's easy: the infinitive + a short ending."
      },
      groups: [
        G("La recette", "Tarif", "The recipe", `
je parlerai|konuşacağım|I will speak
tu parleras|konuşacaksın|you will speak
il parlera|konuşacak|he will speak
nous parlerons|konuşacağız|we will speak
vous parlerez|konuşacaksınız|you will speak
ils parleront|konuşacaklar|they will speak
je finirai|bitireceğim|I will finish
je prendrai|alacağım|I will take||Je prendrai le train.
j'écrirai|yazacağım|I will write
j'attendrai|bekleyeceğim|I will wait`, {
          fr: "Infinitif + -ai, -as, -a, -ons, -ez, -ont (ce sont presque les terminaisons de « avoir » !). Les verbes en -re perdent leur « e » : prendre → je prendrai.",
          tr: "Mastar + -ai, -as, -a, -ons, -ez, -ont. Bu ekler neredeyse 'avoir' fiilinin şimdiki zaman hâlleri (j'ai, tu as, il a…)! -re ile biten fiiller sondaki 'e'yi kaybeder: prendre → je prendrai. Fiilin içinde hep bir 'r' sesi duyarsınız: o 'r' geleceğin işareti.",
          en: "Infinitive + -ai, -as, -a, -ons, -ez, -ont (almost the present of « avoir »!). Verbs in -re drop their « e »: prendre → je prendrai. Listen for the « r » sound: it signals the future."
        }),
        G("Les verbes irréguliers", "Düzensiz fiiller", "Irregular verbs", `
je serai|olacağım|I will be||Je serai là à 9 heures.
j'aurai|sahip olacağım|I will have||J'aurai mon diplôme.
j'irai|gideceğim|I will go||J'irai à Paris.
je ferai|yapacağım|I will do, I will make
je viendrai|geleceğim|I will come
je pourrai|-ebileceğim|I will be able to
je voudrai|isteyeceğim|I will want
je verrai|göreceğim|I will see||On verra !
je saurai|bileceğim|I will know
il faudra|gerekecek|it will be necessary||Il faudra un certificat.`, {
          fr: "Les terminaisons ne changent jamais ; seul le début change : ser-, aur-, ir-, fer-, viendr-, pourr-, verr-. « On verra ! » est une réponse très française quand on ne sait pas encore.",
          tr: "Ekler hiç değişmez; değişen sadece fiilin başı: ser-, aur-, ir-, fer-, viendr-, pourr-, verr-. 'On verra !' (Göreceğiz! / Bakarız!) bir şeyden henüz emin olmadığınızda çok Fransızca bir cevaptır, bizim 'Bakalım, kısmet' gibi.",
          en: "The endings never change; only the stem does: ser-, aur-, ir-, fer-, viendr-, pourr-, verr-. « On verra ! » ('We'll see!') is a very French answer when you're not sure yet."
        }),
        G("Les mots du futur", "Geleceği anlatan sözcükler", "Future time words", `
demain|yarın|tomorrow
après-demain|öbür gün|the day after tomorrow
la semaine prochaine|gelecek hafta|next week
l'année prochaine|seneye, gelecek yıl|next year
plus tard|daha sonra|later||Je t'expliquerai plus tard.
un jour|bir gün|one day||Un jour, j'irai au Japon.
bientôt|yakında|soon
à l'avenir|gelecekte, bundan sonra|in the future, from now on
dans dix ans|on yıl sonra|in ten years`, {
          fr: "Avec semaine, mois, année, « prochain(e) » se place après le nom, comme « dernier » : la semaine prochaine. « À l'avenir » sert souvent pour une bonne résolution : à l'avenir, je ferai attention.",
          tr: "'Prochain(e)' (gelecek), semaine, mois, année ile 'dernier' gibi isimden sonra gelir: la semaine prochaine (gelecek hafta). 'À l'avenir' (bundan sonra) genelde bir söz verirken kullanılır: À l'avenir, je ferai attention (Bundan sonra dikkat edeceğim).",
          en: "With semaine, mois, année, « prochain(e) » goes after the noun, like « dernier »: la semaine prochaine. « À l'avenir » is often used for a resolution: à l'avenir, je ferai attention."
        }),
        G("Projets et promesses", "Planlar ve sözler", "Plans and promises", `
Je t'appellerai ce soir.|Bu akşam seni arayacağım.|I'll call you tonight.
Je serai à l'heure, promis !|Zamanında geleceğim, söz!|I'll be on time, I promise!
L'année prochaine, je commencerai mes études.|Seneye öğrenimime başlayacağım.|Next year I'll start my studies.
On se verra samedi.|Cumartesi görüşürüz.|We'll see each other on Saturday.
Ça ira mieux demain.|Yarın daha iyi olacak.|It will be better tomorrow.
Tu verras, ce sera facile.|Göreceksin, kolay olacak.|You'll see, it will be easy.
Je ne recommencerai pas.|Bir daha yapmayacağım.|I won't do it again.
Quand j'aurai le temps, je lirai ce livre.|Vaktim olunca bu kitabı okuyacağım.|When I have time, I'll read this book.`, {
          fr: "Attention : après « quand » qui parle du futur, le français utilise le futur : quand j'aurai le temps. L'anglais dit « when I have », le français dit « quand j'aurai ».",
          tr: "Dikkat: gelecekten bahseden 'quand' (… -ince / … -dığında) sonrasında Fransızca da gelecek zamanı kullanır: quand j'aurai le temps (vaktim olunca, kelimesi kelimesine 'vaktim olacağı zaman'). İngilizcedeki 'when I have' kalıbı burada sizi yanıltmasın!",
          en: "Careful: after « quand » about the future, French uses the future: quand j'aurai le temps. English says 'when I have', French says 'when I will have'."
        }),
        G("Futur proche ou futur simple ?", "Futur proche mu, futur simple mı?", "Near future or simple future?", `
Je vais manger.|Yemek yiyeceğim (birazdan).|I'm going to eat (now, soon).
Je mangerai plus tard.|Daha sonra yiyeceğim.|I'll eat later.
Attention, tu vas tomber !|Dikkat, düşeceksin!|Careful, you're going to fall!
Demain, il pleuvra.|Yarın yağmur yağacak.|Tomorrow it will rain.
Il va pleuvoir.|Yağmur yağacak (birazdan).|It's going to rain.
Le cours aura lieu lundi.|Ders pazartesi yapılacak.|The class will take place on Monday.
Si tu veux, je t'aiderai.|İstersen sana yardım ederim.|If you want, I'll help you.`, {
          fr: "À l'oral, le futur proche (je vais + infinitif) est partout, surtout pour un futur proche et sûr. Le futur simple sonne un peu plus loin, plus officiel : promesses, prévisions, annonces.",
          tr: "Konuşmada futur proche (je vais + mastar) her yerdedir, özellikle yakın ve kesin bir gelecek için. Futur simple biraz daha uzak ve resmî durur: sözler, hava tahmini, duyurular. 'Si' + şimdiki zaman, sonra futur simple: Si tu veux, je t'aiderai (İstersen yardım ederim). İkisini de bilirseniz, her durumda rahatsınız!",
          en: "In speech the near future (je vais + infinitive) is everywhere, especially for something soon and certain. The simple future sounds more distant and official: promises, forecasts, announcements. 'Si' + present, then simple future: Si tu veux, je t'aiderai."
        })
      ] },

    /* ───────────── 51. The little words y and en ───────────── */
    { id: "yen", emoji: "🧲", kind: "words", t: { fr: "Les petits mots « y » et « en »", tr: "Küçük sözcükler: « y » ve « en »", en: "The little words « y » and « en »" },
      intro: {
        fr: "Tu vas à la salle ? Oui, j'y vais. Tu veux du café ? Oui, j'en veux un peu. « Y » et « en » sont deux petits mots qui évitent de répéter. Les Français les utilisent tout le temps, même dans « il y a » et « je m'en vais » !",
        tr: "Tu vas à la salle ? Oui, j'y vais (Salona mı gidiyorsun? Evet, oraya gidiyorum). Tu veux du café ? Oui, j'en veux un peu (Kahve ister misin? Evet, biraz isterim). 'Y' ve 'en' tekrar etmemek için kullanılan iki küçük sözcüktür. Türkçede bunları çoğu zaman hiç söylemeyiz ('Evet, gidiyorum'), ama Fransızcada boş bırakılamaz. Fransızlar onları sürekli kullanır: 'il y a', 'je m'en vais'…",
        en: "Tu vas à la salle ? Oui, j'y vais. Tu veux du café ? Oui, j'en veux un peu. « Y » and « en » are two little words that avoid repetition. French people use them all the time, even in « il y a » and « je m'en vais »!"
      },
      groups: [
        G("« Y » = là-bas", "« Y » = orada, oraya", "« Y » = there", `
J'y vais.|Oraya gidiyorum. / Ben gidiyorum.|I'm going (there).||Tu vas au parc ? J'y vais.
On y va !|Hadi gidelim! / Hadi başlayalım!|Let's go!
J'y suis allée hier.|Dün oraya gittim.|I went there yesterday.
Il y habite depuis deux ans.|İki yıldır orada oturuyor.|He has lived there for two years.
Tu y travailles le samedi ?|Cumartesileri orada çalışıyor musun?|Do you work there on Saturdays?
Je n'y vais jamais.|Oraya hiç gitmem.|I never go there.
Vas-y !|Hadi! / Git hadi!|Go on! Go for it!
Allez-y !|Buyurun! / Hadi başlayın!|Go ahead!`, {
          fr: "« Y » remplace un lieu introduit par à, au, en, chez, dans… : Tu vas à la pharmacie ? Oui, j'y vais. Il se place devant le verbe (ou devant « avoir / être » au passé).",
          tr: "'Y', à, au, en, chez, dans… ile başlayan bir yerin yerini tutar: Tu vas à la pharmacie ? Oui, j'y vais (Eczaneye mi gidiyorsun? Evet, gidiyorum). Fiilden önce gelir; geçmişte 'avoir / être'den önce: j'y suis allée. 'Allez-y !' bir müşteriye 'Buyurun, sizi dinliyorum' demenin de kibar yolu.",
          en: "« Y » replaces a place introduced by à, au, en, chez, dans…: Tu vas à la pharmacie ? Oui, j'y vais. It goes before the verb (or before « avoir / être » in the past)."
        }),
        G("« Y » avec penser à, réfléchir à…", "Penser à, réfléchir à… ile « y »", "« Y » with penser à, réfléchir à…", `
J'y pense.|Onu düşünüyorum.|I'm thinking about it.||Le concours ? J'y pense tous les jours.
N'y pense plus !|Artık düşünme onu!|Stop thinking about it!
Je vais y réfléchir.|Biraz düşüneyim.|I'll think about it.
Tu t'y habitues ?|Alışıyor musun?|Are you getting used to it?
Je m'y habitue doucement.|Yavaş yavaş alışıyorum.|I'm slowly getting used to it.
J'y arrive !|Başarıyorum! / Oluyor!|I can do it! I'm managing!
Je n'y arrive pas.|Yapamıyorum, beceremiyorum.|I can't manage it.
Je n'y crois pas !|İnanamıyorum!|I can't believe it!`, {
          fr: "« Y » remplace aussi une chose après « à » : penser à l'examen → y penser. Mais pour une personne, on dit « à lui / à elle » : je pense à ma mère → je pense à elle.",
          tr: "'Y', 'à'dan sonra gelen bir şeyin de yerini tutar: penser à l'examen → j'y pense (sınavı düşünüyorum → onu düşünüyorum). Ama bir insan için 'à lui / à elle' denir: je pense à ma mère → je pense à elle. 'J'y arrive !' Fransızca öğrenirken kendinize sık sık söyleyeceğiniz bir cümle olsun!",
          en: "« Y » also replaces a thing after « à »: penser à l'examen → y penser. But for a person you say « à lui / à elle »: je pense à ma mère → je pense à elle."
        }),
        G("« En » = une quantité", "« En » = miktar", "« En » = some, of it", `
J'en veux.|Ondan istiyorum.|I want some.||Du pain ? Oui, j'en veux.
J'en prends deux.|Ondan iki tane alıyorum.|I'll take two (of them).
Il en reste ?|Kaldı mı? / Ondan kalan var mı?|Is there any left?
Il n'en reste plus.|Hiç kalmadı.|There's none left.
Tu en as ?|Sende var mı?|Do you have any?
Je n'en ai pas.|Bende yok.|I don't have any.
J'en ai un peu.|Biraz var.|I have a little.
J'en ai beaucoup.|Çok var.|I have a lot.
Combien en voulez-vous ?|Ondan kaç tane istersiniz?|How many (of them) do you want?`, {
          fr: "« En » remplace un nom avec du, de la, des, un, une ou un nombre : Vous avez des pommes ? Oui, j'en ai. Avec un nombre, on répète le nombre : J'en prends trois.",
          tr: "'En', du, de la, des, un, une veya bir sayıyla gelen ismin yerini tutar: Vous avez des pommes ? Oui, j'en ai (Elmanız var mı? Evet, var). Sayı varsa sayı tekrar edilir: J'en prends trois (Üç tane alıyorum). Türkçede 'evet, var' demek yeter, Fransızcada 'en' şart: 'Oui, j'ai' demeyin!",
          en: "« En » replaces a noun with du, de la, des, un, une or a number: Vous avez des pommes ? Oui, j'en ai. With a number, repeat the number: J'en prends trois."
        }),
        G("« En » avec parler de, avoir besoin de…", "Parler de, avoir besoin de… ile « en »", "« En » with parler de, avoir besoin de…", `
J'en ai besoin.|Ona ihtiyacım var.|I need it.||Ton stylo ? Oui, j'en ai besoin.
On en parle demain ?|Yarın konuşalım mı (bunu)?|Shall we talk about it tomorrow?
Je n'en sais rien.|Hiçbir fikrim yok.|I have no idea.
J'en ai marre !|Bıktım!|I'm fed up!
Qu'est-ce que tu en penses ?|Sen ne düşünüyorsun (bu konuda)?|What do you think (of it)?
J'en rêve.|Onun hayalini kuruyorum.|I dream about it.
Je m'en occupe.|Ben hallederim. / Ben ilgileniyorum.|I'll take care of it.
Je m'en souviens.|Hatırlıyorum.|I remember it.
Ne t'en fais pas.|Dert etme.|Don't worry about it.`, {
          fr: "« En » remplace « de + chose » : parler du match → en parler ; avoir besoin d'un stylo → en avoir besoin. « Qu'est-ce que tu en penses ? » est parfait pour demander un avis.",
          tr: "'En', 'de + bir şey' yerine geçer: parler du match → en parler (maçtan bahsetmek → ondan bahsetmek); avoir besoin d'un stylo → en avoir besoin. 'Qu'est-ce que tu en penses ?' (Sen ne dersin?) fikir sormanın en doğal yolu. 'Je m'en occupe' resepsiyonda çok işe yarar: 'Ben hallederim, merak etmeyin.'",
          en: "« En » replaces « de + thing »: parler du match → en parler; avoir besoin d'un stylo → en avoir besoin. « Qu'est-ce que tu en penses ? » is perfect for asking someone's opinion."
        }),
        G("Expressions toutes faites", "Kalıplaşmış ifadeler", "Set phrases", `
Il y a|var|there is, there are||Il y a un problème.
Il n'y a pas de quoi.|Bir şey değil, rica ederim.|You're welcome. Don't mention it.
Ça y est !|Tamam, oldu! / İşte!|That's it! Done!
Je m'en vais.|Ben gidiyorum, kalkıyorum.|I'm off. I'm leaving.
Va-t'en !|Git buradan!|Go away!
Je n'en peux plus.|Artık dayanamıyorum.|I can't take any more. I'm exhausted.
Je t'en prie.|Rica ederim. / Buyur.|You're welcome. Please do. (informal)
Je vous en prie.|Rica ederim. / Buyurun.|You're welcome. Please do. (formal)
Il y en a deux.|İki tane var.|There are two (of them).`, {
          fr: "Beaucoup d'expressions très courantes cachent « y » ou « en ». Pas besoin de les analyser : apprenez-les comme des blocs. « Je n'en peux plus ! », c'est la phrase de la fin d'un cours de HIIT.",
          tr: "Çok sık kullanılan birçok ifadenin içinde 'y' ya da 'en' saklıdır. Analiz etmeye gerek yok: onları kalıp olarak öğrenin. 'Ça y est !' bir işi bitirince (Oldu! Tamam!), 'Je n'en peux plus !' ise zor bir HIIT dersinin sonunda herkesin söylediği cümle (Bittim, dayanamıyorum!).",
          en: "Many very common phrases hide « y » or « en ». No need to analyse them: learn them as blocks. « Je n'en peux plus ! » is what everyone says at the end of a HIIT class."
        })
      ] },

    /* ───────────── 52. Il faut, devoir, pouvoir ───────────── */
    { id: "obligation", emoji: "✅", kind: "words", t: { fr: "Il faut, devoir, pouvoir : obligation et permission", tr: "Il faut, devoir, pouvoir: zorunluluk ve izin", en: "Il faut, devoir, pouvoir: must and may" },
      intro: {
        fr: "Il faut un certificat médical. Vous devez signer ici. Est-ce que je peux payer par carte ? Ces trois petites formules sont partout : à la préfecture, à la salle de sport, à la fac. Avec elles, vous comprenez les règles et vous demandez poliment.",
        tr: "Il faut un certificat médical (Sağlık raporu gerekiyor). Vous devez signer ici (Burayı imzalamanız gerekiyor). Est-ce que je peux payer par carte ? (Kartla ödeyebilir miyim?) Bu üç kalıp her yerde: valilikte, spor salonunda, üniversitede. Onlarla kuralları anlar ve kibarca bir şey isteyebilirsiniz. Türkçedeki '-meli / gerek' ve '-ebilmek' karşılıkları.",
        en: "Il faut un certificat médical. Vous devez signer ici. Est-ce que je peux payer par carte ? These three little formulas are everywhere: at the préfecture, the gym, the university. With them you understand the rules and ask politely."
      },
      groups: [
        G("Il faut", "Il faut (gerekir)", "Il faut (you need / one must)", `
Il faut une photo.|Bir fotoğraf gerekiyor.|You need a photo.
Il faut un justificatif de domicile.|İkametgâh belgesi gerekiyor.|You need proof of address.
Il faut réserver.|Rezervasyon yapmak gerekiyor.|You have to book.
Il faut attendre dix minutes.|On dakika beklemek gerekiyor.|You have to wait ten minutes.
Il ne faut pas courir.|Koşmamak gerekiyor. / Koşmak yasak.|You mustn't run.
Qu'est-ce qu'il faut faire ?|Ne yapmak gerekiyor?|What do I need to do?
Il faut combien de temps ?|Ne kadar zaman gerekiyor?|How long does it take?
Il me faut un rendez-vous.|Bana bir randevu lazım.|I need an appointment.
Il fallait le dire !|Söyleseydin ya!|You should have said so!`, {
          fr: "« Il faut » ne change jamais : pas de « je faut » ! Il faut + nom (il faut une photo) ou + infinitif (il faut signer). Attention : « il ne faut pas » = c'est interdit, pas « ce n'est pas nécessaire ».",
          tr: "'Il faut' hiç değişmez: 'je faut' diye bir şey yok! Il faut + isim (il faut une photo: fotoğraf lazım) veya + mastar (il faut signer: imzalamak gerekiyor). Dikkat: 'il ne faut pas' = yasak, yapmamalısın; 'gerek yok' anlamına gelmez. 'Gerek yok' için 'ce n'est pas la peine' denir.",
          en: "« Il faut » never changes: no « je faut »! Il faut + noun (il faut une photo) or + infinitive (il faut signer). Careful: « il ne faut pas » = it's forbidden, not 'it isn't necessary'."
        }),
        G("Devoir", "Devoir (zorunda olmak)", "Devoir (must, have to)", `
je dois|zorundayım, -meliyim|I must, I have to||Je dois partir.
tu dois|zorundasın|you must
il doit|zorunda|he must
nous devons|zorundayız|we must
vous devez|zorundasınız|you must||Vous devez remplir ce formulaire.
ils doivent|zorundalar|they must
Je dois travailler samedi.|Cumartesi çalışmam gerekiyor.|I have to work on Saturday.
Tu ne dois pas t'inquiéter.|Endişelenmemelisin.|You mustn't worry.
J'ai dû attendre une heure.|Bir saat beklemek zorunda kaldım.|I had to wait an hour.
Il doit être malade.|Hasta olmalı. (herhâlde)|He must be ill.`, {
          fr: "« Devoir » est irrégulier : dois, dois, doit, devons, devez, doivent. Au passé : j'ai dû. Il peut aussi exprimer une supposition : il doit être fatigué = il est probablement fatigué.",
          tr: "'Devoir' düzensizdir: dois, dois, doit, devons, devez, doivent. Geçmişte: j'ai dû (… zorunda kaldım). Bir tahmin de anlatabilir, tıpkı Türkçedeki '-meli' gibi: Il doit être fatigué = Yorgun olmalı (herhâlde yorgundur). Türkçe ile aynı çift anlam, ne güzel!",
          en: "« Devoir » is irregular: dois, dois, doit, devons, devez, doivent. Past: j'ai dû. It can also express a guess: il doit être fatigué = he's probably tired."
        }),
        G("Pouvoir : demander la permission", "Pouvoir: izin istemek", "Pouvoir: asking permission", `
Je peux entrer ?|Girebilir miyim?|Can I come in?
Est-ce que je peux payer par carte ?|Kartla ödeyebilir miyim?|Can I pay by card?
On peut s'asseoir ici ?|Buraya oturabilir miyiz?|Can we sit here?
Vous pouvez répéter, s'il vous plaît ?|Tekrar eder misiniz, lütfen?|Could you repeat, please?
Tu peux m'aider ?|Bana yardım edebilir misin?|Can you help me?
Pourriez-vous parler plus lentement ?|Daha yavaş konuşabilir misiniz?|Could you speak more slowly?
Oui, bien sûr, vous pouvez.|Evet, tabii ki, yapabilirsiniz.|Yes, of course you can.
Je pourrais avoir un verre d'eau ?|Bir bardak su alabilir miyim?|Could I have a glass of water?
Ils peuvent venir avec nous.|Bizimle gelebilirler.|They can come with us.`, {
          fr: "« Pouvoir » : peux, peux, peut, pouvons, pouvez, peuvent. Pour être encore plus poli, utilisez le conditionnel : je pourrais, vous pourriez. C'est la formule magique au guichet !",
          tr: "'Pouvoir' (-ebilmek): peux, peux, peut, pouvons, pouvez, peuvent. Daha da kibar olmak için şart kipini kullanın: je pourrais (… -ebilir miyim acaba), vous pourriez (… -ebilir misiniz acaba). Gişede sihirli kalıp budur: 'Pourriez-vous m'aider ?'",
          en: "« Pouvoir »: peux, peux, peut, pouvons, pouvez, peuvent. To be even more polite, use the conditional: je pourrais, vous pourriez. It's the magic formula at any counter!"
        }),
        G("C'est permis ? C'est interdit ?", "İzinli mi? Yasak mı?", "Allowed? Forbidden?", `
On peut se garer ici ?|Buraya park edilebilir mi?|Can you park here?
C'est interdit.|Yasak.|It's forbidden.
Il est interdit de fumer.|Sigara içmek yasaktır.|Smoking is forbidden.
C'est autorisé.|İzin veriliyor.|It's allowed.
C'est obligatoire.|Zorunlu.|It's compulsory.
Le casque est obligatoire.|Kask zorunludur.|A helmet is compulsory.
Ce n'est pas obligatoire.|Zorunlu değil.|It's not compulsory.
Ce n'est pas la peine.|Gerek yok.|There's no need. Don't bother.
Vous n'avez pas le droit de…|… hakkınız yok, … yapamazsınız.|You're not allowed to…||Vous n'avez pas le droit de filmer.
J'ai le droit ?|Yapabilir miyim? (iznim var mı?)|Am I allowed?`, {
          fr: "Sur les panneaux, on lit « interdit » et « obligatoire ». À l'oral, on dit plutôt « on n'a pas le droit de… » et « il faut… ». Et pour dire « pas besoin » : « ce n'est pas la peine ».",
          tr: "Tabelalarda 'interdit' (yasak) ve 'obligatoire' (zorunlu) yazar. Konuşmada daha çok 'on n'a pas le droit de…' (… yapmak yasak) ve 'il faut…' (… gerekiyor) denir. 'Gerek yok' demek için: 'ce n'est pas la peine'. Spor salonunun kuralları da böyle: Les chaussures propres sont obligatoires !",
          en: "Signs say « interdit » and « obligatoire ». In speech people say « on n'a pas le droit de… » and « il faut… ». And for 'no need': « ce n'est pas la peine »."
        }),
        G("À l'accueil de la salle", "Spor salonunun resepsiyonunda", "At the gym front desk", `
Il faut un certificat médical pour s'inscrire.|Kayıt için sağlık raporu gerekiyor.|You need a medical certificate to sign up.
Vous devez avoir une serviette.|Havlunuzun olması gerekiyor.|You must have a towel.
Vous pouvez laisser votre sac au vestiaire.|Çantanızı soyunma odasında bırakabilirsiniz.|You can leave your bag in the changing room.
On ne peut pas entrer sans badge.|Kartsız girilemez.|You can't get in without a badge.
Les enfants ne peuvent pas venir seuls.|Çocuklar yalnız gelemez.|Children can't come on their own.
Il faut réserver le cours sur l'application.|Dersi uygulamadan ayırtmak gerekiyor.|You have to book the class on the app.
Est-ce que je peux essayer un cours ?|Bir derse deneme olarak katılabilir miyim?|Can I try a class?
Vous devrez payer la première mensualité.|İlk aylık taksiti ödemeniz gerekecek.|You'll have to pay the first monthly instalment.`, {
          fr: "À l'accueil, Esin utilise ces trois verbes toute la journée. Pour adoucir une règle, on peut commencer par « Désolée, mais… » : Désolée, mais il faut un badge.",
          tr: "Esin resepsiyonda bu üç fiili bütün gün kullanıyor. Bir kuralı yumuşatmak için cümleye 'Désolée, mais…' (Üzgünüm ama…) ile başlanabilir: Désolée, mais il faut un badge (Üzgünüm ama kart gerekiyor). Kural aynı, ton çok daha sıcak!",
          en: "At the front desk, Esin uses these three verbs all day long. To soften a rule, start with « Désolée, mais… »: Désolée, mais il faut un badge."
        })
      ] }
  );
})();
