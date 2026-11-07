/* Aventures A1 + A2 — 37 to 41: un parapluie cassé, le ballon des voisins (A1) ; un petit accrochage, une blessure en plein match, une bouilloire en panne (A2) */
(window.ADVENTURES = window.ADVENTURES || []).push(

  /* ───────────── 37. Un parapluie cassé ───────────── */
  { id: "av-parapluie", level: "A1", emoji: "☔",
    t: { fr: "Un parapluie cassé", tr: "Kırık bir şemsiye", en: "A broken umbrella" },
    goal: { fr: "Il pleut et votre parapluie est cassé : achetez un nouveau parapluie dans un magasin.", tr: "Yağmur yağıyor ve şemsiyeniz kırıldı: bir mağazadan yeni bir şemsiye alın.", en: "It's raining and your umbrella is broken: buy a new umbrella in a shop." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Il pleut beaucoup. Avec le vent, votre parapluie se retourne et casse. Vous entrez vite dans un petit bazar.", tr: "Çok yağmur yağıyor. Rüzgârla şemsiyeniz ters dönüyor ve kırılıyor. Hemen küçük bir tuhafiyeye giriyorsunuz.", en: "It's pouring. In the wind, your umbrella turns inside out and breaks. You hurry into a small variety store." },
           say: [["M", "Bonjour madame ! Oh là là, vous êtes toute mouillée !"]],
           choices: [
             { fr: "Oui, il fait très mouillé aujourd'hui.", tr: "Evet, bugün hava çok ıslak.", en: "Yes, the weather is very wet today.", ok: false,
               fb: { fr: "On comprend l'idée 💧, mais on ne dit pas « il fait mouillé ». On dit « il pleut ! ».", tr: "Ne demek istediğiniz anlaşılıyor 💧 ama « il fait mouillé » denmez. « il pleut ! » denir.", en: "We get the idea 💧, but you don't say « il fait mouillé ». You say « il pleut ! »." } },
             { fr: "Oui ! Mon parapluie est cassé. Vous vendez des parapluies ?", tr: "Evet! Şemsiyem kırıldı. Şemsiye satıyor musunuz?", en: "Yes! My umbrella is broken. Do you sell umbrellas?", ok: true, go: "b" },
             { fr: "Oui, je suis la pluie !", tr: "Evet, ben yağmurum!", en: "Yes, I'm the rain!", ok: false,
               fb: { fr: "Vous n'êtes pas la pluie, vous êtes sous la pluie 🌧️😄 ! Dites : « mon parapluie est cassé ».", tr: "Siz yağmur değilsiniz, yağmurun altındasınız 🌧️😄! Şunu söyleyin: « mon parapluie est cassé ».", en: "You're not the rain, you're in the rain 🌧️😄! Say: « mon parapluie est cassé »." } }
           ] },
      b: { say: [["M", "Oui, bien sûr ! Ils sont là-bas, à côté des chapeaux. Vous voulez un petit ou un grand parapluie ?"]],
           choices: [
             { fr: "Un petit, pour mon sac.", tr: "Küçük bir tane, çantam için.", en: "A small one, for my bag.", ok: true, go: "c" },
             { fr: "Un grand, s'il vous plaît. Il y a beaucoup de vent.", tr: "Büyük bir tane, lütfen. Çok rüzgâr var.", en: "A big one, please. It's very windy.", ok: true, go: "c2" },
             { fr: "Un moyen âge, s'il vous plaît.", tr: "Bir Orta Çağ, lütfen.", en: "A Middle Ages, please.", ok: false,
               fb: { fr: "« Le Moyen Âge », c'est l'histoire, avec les châteaux 🏰😄 ! Ici, choisissez « un petit » ou « un grand ».", tr: "« Le Moyen Âge » tarihtir, şatolarıyla 🏰😄! Burada « un petit » ya da « un grand » seçin.", en: "« Le Moyen Âge » is history, with castles 🏰😄! Here, choose « un petit » or « un grand »." } }
           ] },
      c: { say: [["M", "Voilà les petits parapluies pliants. Il y a du noir, du rouge et du jaune. Quelle couleur ?"]],
           choices: [
             { fr: "Je prends la rouge.", tr: "Kırmızıyı alıyorum.", en: "I'll take the red one.", ok: false,
               fb: { fr: "Presque ! On dit « un parapluie », c'est masculin ☂️. Alors : « je prends le rouge ».", tr: "Az kaldı! « un parapluie » denir, eril bir kelime ☂️. O yüzden: « je prends le rouge ».", en: "Almost! It's « un parapluie », masculine ☂️. So: « je prends le rouge »." } },
             { fr: "Le rouge, s'il vous plaît. Il est joli !", tr: "Kırmızı olanı, lütfen. Çok güzel!", en: "The red one, please. It's pretty!", ok: true, go: "d" },
             { fr: "Le jaune, comme le soleil !", tr: "Sarı olanı, güneş gibi!", en: "The yellow one, like the sun!", ok: true, go: "d" }
           ] },
      c2: { say: [["M", "Ce grand parapluie noir est très solide. Il résiste au vent !"]],
           choices: [
             { fr: "Super, je le prends !", tr: "Süper, onu alıyorum!", en: "Great, I'll take it!", ok: true, go: "d" },
             { fr: "Il est très cassé !", tr: "Çok kırık!", en: "It's very broken!", ok: false,
               fb: { fr: "Non, c'est votre vieux parapluie qui est cassé 😄 ! Le nouveau est « solide ». Dites « super, je le prends ! ».", tr: "Hayır, kırık olan eski şemsiyeniz 😄! Yenisi « solide » (sağlam). « super, je le prends ! » deyin.", en: "No, it's your old umbrella that's broken 😄! The new one is « solide ». Say « super, je le prends ! »." } },
             { fr: "Je ne le prends pas, je le prends.", tr: "Onu almıyorum, alıyorum.", en: "I'm not taking it, I'm taking it.", ok: false,
               fb: { fr: "Le vendeur est perdu 🤔😄 ! Choisissez une seule idée : « super, je le prends ! ».", tr: "Satıcının kafası karıştı 🤔😄! Tek bir şey seçin: « super, je le prends ! ».", en: "The salesman is lost 🤔😄! Pick just one idea: « super, je le prends ! »." } }
           ] },
      d: { say: [["M", "C'est 12 € pour le petit et 18 € pour le grand. Vous voulez autre chose ?"]],
           choices: [
             { fr: "Oui, vous avez des bottes de pluie ?", tr: "Evet, yağmur botunuz var mı?", en: "Yes, do you have rain boots?", ok: true, go: "e" },
             { fr: "Non merci, c'est tout.", tr: "Hayır teşekkürler, hepsi bu.", en: "No thanks, that's all.", ok: true, go: "f" },
             { fr: "Oui, je voudrais une autre pluie.", tr: "Evet, başka bir yağmur istiyorum.", en: "Yes, I'd like another rain.", ok: false,
               fb: { fr: "Encore de la pluie ? Ah non, ça suffit 🌧️😄 ! Dites « non merci, c'est tout » ou demandez autre chose.", tr: "Yine mi yağmur? Yok artık, yeter 🌧️😄! « non merci, c'est tout » deyin ya da başka bir şey isteyin.", en: "More rain? Oh no, that's enough 🌧️😄! Say « non merci, c'est tout » or ask for something else." } }
           ] },
      e: { say: [["M", "Désolé, je n'ai pas de bottes. Mais il y a un magasin de chaussures en face."]],
           choices: [
             { fr: "En face de moi ?", tr: "Benim karşımda mı?", en: "Opposite me?", ok: false,
               fb: { fr: "Devant vous, il y a… le vendeur 😄 ! Ici, « en face » = de l'autre côté de la rue. Dites « d'accord, merci ».", tr: "Karşınızda… satıcı var 😄! Burada « en face » = sokağın karşı tarafında. « d'accord, merci » deyin.", en: "Opposite you is… the salesman 😄! Here, « en face » = across the street. Say « d'accord, merci »." } },
             { fr: "D'accord, merci. Alors, c'est tout.", tr: "Tamam, teşekkürler. O zaman hepsi bu.", en: "OK, thanks. So that's all.", ok: true, go: "f" },
             { fr: "Ce n'est pas grave, j'ai des bottes à la maison.", tr: "Önemli değil, evde botum var.", en: "No problem, I have boots at home.", ok: true, go: "f" }
           ] },
      f: { say: [["M", "Vous payez par carte ?"]],
           choices: [
             { fr: "Oui, sans contact, c'est possible ?", tr: "Evet, temassız olur mu?", en: "Yes, contactless, is that possible?", ok: true, go: "g" },
             { fr: "Non, en espèces. Voilà 20 €.", tr: "Hayır, nakit. Buyurun 20 €.", en: "No, in cash. Here's 20 €.", ok: true, go: "g" },
             { fr: "Non, par carte.", tr: "Hayır, kartla.", en: "No, by card.", ok: false,
               fb: { fr: "« Non », puis « par carte » ? Le vendeur ne comprend plus 😄 ! Dites « oui, par carte » ou « non, en espèces ».", tr: "Önce « non », sonra « par carte » mı? Satıcı artık hiçbir şey anlamıyor 😄! « oui, par carte » ya da « non, en espèces » deyin.", en: "« Non », then « par carte »? The salesman is confused 😄! Say « oui, par carte » or « non, en espèces »." } }
           ] },
      g: { say: [["M", "Merci ! Vous voulez un sac ?"]],
           choices: [
             { fr: "Merci, vous aussi !", tr: "Teşekkürler, size de!", en: "Thanks, you too!", ok: false,
               fb: { fr: "Le réflexe « vous aussi » 😄 ! Mais il pose une question : « vous voulez un sac ? ». Répondez « oui » ou « non merci ».", tr: "Şu « vous aussi » refleksi 😄! Ama size bir soru soruyor: « vous voulez un sac ? ». « oui » ya da « non merci » diye cevap verin.", en: "That « vous aussi » reflex 😄! But he's asking a question: « vous voulez un sac ? ». Answer « oui » or « non merci »." } },
             { fr: "Non merci, j'ouvre mon parapluie tout de suite !", tr: "Hayır teşekkürler, şemsiyemi hemen açıyorum!", en: "No thanks, I'm opening my umbrella right away!", ok: true, go: "h" },
             { fr: "Oui, un petit sac, s'il vous plaît.", tr: "Evet, küçük bir poşet, lütfen.", en: "Yes, a small bag, please.", ok: true, go: "h" }
           ] },
      h: { scene: { fr: "Dehors, il pleut toujours. À l'arrêt de bus, une vieille dame n'a pas de parapluie.", tr: "Dışarıda hâlâ yağmur yağıyor. Otobüs durağında yaşlı bir kadının şemsiyesi yok.", en: "Outside, it's still raining. At the bus stop, an elderly lady has no umbrella." },
           say: [["F2", "Quelle pluie ! Et mon bus arrive dans 10 minutes…"]],
           choices: [
             { fr: "Venez sous mon parapluie, madame !", tr: "Şemsiyemin altına gelin, hanımefendi!", en: "Come under my umbrella, madam!", ok: true, go: "fin" },
             { fr: "Vous voulez partager mon parapluie ?", tr: "Şemsiyemi paylaşmak ister misiniz?", en: "Would you like to share my umbrella?", ok: true, go: "fin" },
             { fr: "Tu veux mon parapluie, mamie ?", tr: "Şemsiyemi ister misin, nineciğim?", en: "Want my umbrella, granny?", ok: false,
               fb: { fr: "Très gentil, mais trop familier 👵 ! Avec une dame inconnue, on dit « vous » et « madame » : « vous voulez partager mon parapluie ? ».", tr: "Çok tatlı ama fazla samimi 👵! Tanımadığınız bir hanımefendiye « vous » ve « madame » denir: « vous voulez partager mon parapluie ? ».", en: "Very kind, but too familiar 👵! With a lady you don't know, use « vous » and « madame »: « vous voulez partager mon parapluie ? »." } }
           ] },
      fin: { end: "win", say: [["F2", "Oh, merci beaucoup, vous êtes adorable !"]],
             scene: { fr: "Un nouveau parapluie, une gentille rencontre et les mots de la pluie. Bravo ! ☔🎉", tr: "Yeni bir şemsiye, tatlı bir tanışma ve yağmurla ilgili kelimeler. Bravo! ☔🎉", en: "A new umbrella, a lovely encounter and the words for rain. Well done! ☔🎉" } }
    } },

  /* ───────────── 38. Le ballon des voisins ───────────── */
  { id: "av-ballon", level: "A1", emoji: "⚽",
    t: { fr: "Le ballon des voisins", tr: "Komşuların topu", en: "The neighbours' ball" },
    goal: { fr: "Rendez le ballon aux enfants des nouveaux voisins et faites connaissance avec la famille.", tr: "Topu yeni komşuların çocuklarına geri verin ve aileyle tanışın.", en: "Give the ball back to the new neighbours' children and get to know the family." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous rentrez chez vous. Dans la cour de l'immeuble, un ballon roule jusqu'à vos pieds. Un petit garçon arrive en courant.", tr: "Eve dönüyorsunuz. Apartmanın avlusunda bir top ayaklarınızın dibine kadar yuvarlanıyor. Küçük bir oğlan koşarak geliyor.", en: "You're coming home. In the building's courtyard, a ball rolls up to your feet. A little boy comes running." },
           say: [["K", "Pardon, madame ! C'est mon ballon !"]],
           choices: [
             { fr: "Tenez, monsieur, voilà votre ballon.", tr: "Buyurun beyefendi, topunuz.", en: "Here you are, sir, here's your ball.", ok: false,
               fb: { fr: "« Monsieur » et « vous » pour un enfant de 8 ans, c'est très chic 🎩😄 ! Avec un enfant, on dit « tu » : « tiens, voilà ton ballon ».", tr: "8 yaşında bir çocuğa « monsieur » ve « vous », çok şık 🎩😄! Çocuklara « tu » denir: « tiens, voilà ton ballon ».", en: "« Monsieur » and « vous » for an 8-year-old, very posh 🎩😄! With a child, use « tu »: « tiens, voilà ton ballon »." } },
             { fr: "Pas de problème ! Tiens, voilà ton ballon.", tr: "Sorun değil! Al, işte topun.", en: "No problem! Here, here's your ball.", ok: true, go: "b" },
             { fr: "C'est mon ballon, maintenant !", tr: "Artık bu benim topum!", en: "It's my ball now!", ok: false,
               fb: { fr: "Il va pleurer 😢😄 ! Rendez-lui son ballon : « tiens, voilà ton ballon ».", tr: "Ağlayacak 😢😄! Topunu geri verin: « tiens, voilà ton ballon ».", en: "He's going to cry 😢😄! Give him his ball back: « tiens, voilà ton ballon »." } }
           ] },
      b: { say: [["K", "Merci ! Moi, c'est Noé. Tu habites ici ?"]],
           choices: [
             { fr: "Oui, je suis habite ici.", tr: "Evet, ben oturuyorum burada.", en: "Yes, I am live here.", ok: false,
               fb: { fr: "Un petit mot de trop 😉 ! On dit « j'habite ici », sans « suis ».", tr: "Bir kelime fazla 😉! « j'habite ici » denir, « suis » olmadan.", en: "One word too many 😉! You say « j'habite ici », without « suis »." } },
             { fr: "Oui, j'habite à le troisième étage.", tr: "Evet, üçüncü katta oturuyorum.", en: "Yes, I live on the third floor.", ok: false,
               fb: { fr: "Presque ! « À + le » devient « au » : « j'habite au troisième étage ».", tr: "Az kaldı! « à + le », « au » olur: « j'habite au troisième étage ».", en: "Almost! « à + le » becomes « au »: « j'habite au troisième étage »." } },
             { fr: "Oui, j'habite au troisième étage. Et toi ?", tr: "Evet, üçüncü katta oturuyorum. Ya sen?", en: "Yes, I live on the third floor. And you?", ok: true, go: "c" }
           ] },
      c: { scene: { fr: "Une petite fille arrive. Elle est timide et se cache derrière Noé.", tr: "Küçük bir kız geliyor. Utangaç, Noé'nin arkasına saklanıyor.", en: "A little girl comes over. She's shy and hides behind Noé." },
           say: [["K", "Nous, on est nouveaux ! On habite au deuxième depuis samedi. Elle, c'est ma sœur Jade."]],
           choices: [
             { fr: "Bonjour Jade ! Tu as quel âge ?", tr: "Merhaba Jade! Kaç yaşındasın?", en: "Hi Jade! How old are you?", ok: true, go: "d" },
             { fr: "Bonjour Jade ! Bienvenue dans l'immeuble !", tr: "Merhaba Jade! Apartmana hoş geldin!", en: "Hi Jade! Welcome to the building!", ok: true, go: "d" },
             { fr: "Bonjour Jade ! Tu es quel âge ?", tr: "Merhaba Jade! Kaç yaşsın?", en: "Hi Jade! How old you are?", ok: false,
               fb: { fr: "Le piège classique 😉 ! En français, l'âge, on l'« a » : « tu as quel âge ? ».", tr: "Klasik tuzak 😉! Fransızcada yaş « sahip olunan » bir şeydir: « tu as quel âge ? ».", en: "The classic trap 😉! In French, you « have » an age: « tu as quel âge ? »." } }
           ] },
      d: { say: [["K", "J'ai 6 ans. Noé, il a 8 ans. Et toi, tu as quel âge ?"]],
           choices: [
             { fr: "Je suis 30 ans.", tr: "Ben 30 yaşım.", en: "I am 30 years.", ok: false,
               fb: { fr: "Même Jade, 6 ans, sait le dire 😄 : « j'ai 30 ans » (avec « avoir »).", tr: "6 yaşındaki Jade bile biliyor 😄: « j'ai 30 ans » (« avoir » ile).", en: "Even 6-year-old Jade knows this 😄: « j'ai 30 ans » (with « avoir »)." } },
             { fr: "Six ans !", tr: "Altı yaşındayım!", en: "Six!", ok: false,
               fb: { fr: "Six ans, c'est l'âge de Jade 😄 ! Elle demande votre âge : « j'ai 30 ans ».", tr: "Altı yaş Jade'in yaşı 😄! Sizin yaşınızı soruyor: « j'ai 30 ans ».", en: "Six is Jade's age 😄! She's asking yours: « j'ai 30 ans »." } },
             { fr: "J'ai 30 ans.", tr: "30 yaşındayım.", en: "I'm 30.", ok: true, go: "e" }
           ] },
      e: { say: [["K", "Trente ? C'est beaucoup ! Tu joues au foot avec nous ?"]],
           choices: [
             { fr: "D'accord, mais cinq minutes !", tr: "Tamam, ama beş dakika!", en: "OK, but just five minutes!", ok: true, go: "f" },
             { fr: "Pas maintenant, j'ai des courses. Peut-être demain ?", tr: "Şimdi olmaz, alışveriş poşetlerim var. Belki yarın?", en: "Not now, I have shopping. Maybe tomorrow?", ok: true, go: "g" },
             { fr: "Oui, je joue le foot.", tr: "Evet, futbol oynuyorum.", en: "Yes, I play the football.", ok: false,
               fb: { fr: "Pour un sport, on dit « jouer au » ⚽ : « je joue au foot ». Alors, vous jouez ?", tr: "Spor için « jouer au » denir ⚽: « je joue au foot ». E, oynuyor musunuz?", en: "For a sport, French says « jouer au » ⚽: « je joue au foot ». So, are you playing?" } }
           ] },
      f: { scene: { fr: "Vous jouez avec eux. Noé tire très fort… le ballon roule sous une voiture.", tr: "Onlarla oynuyorsunuz. Noé çok sert vuruyor… top bir arabanın altına yuvarlanıyor.", en: "You play with them. Noé kicks really hard… the ball rolls under a car." },
           say: [["K", "Oh non ! Le ballon est sous la voiture !"]],
           choices: [
             { fr: "C'est ta faute, Noé !", tr: "Senin suçun, Noé!", en: "It's your fault, Noé!", ok: false,
               fb: { fr: "Le pauvre, il est déjà triste 🥺 ! Proposez plutôt : « attends, je vais le chercher ».", tr: "Zavallı, zaten üzgün 🥺! Bunun yerine şunu önerin: « attends, je vais le chercher ».", en: "Poor thing, he's already sad 🥺! Offer instead: « attends, je vais le chercher »." } },
             { fr: "Je vais le chercher sur la voiture.", tr: "Arabanın üstünden alacağım.", en: "I'll get it from on top of the car.", ok: false,
               fb: { fr: "Attention : « sur » = au-dessus, « sous » = en dessous 🚗. Le ballon est sous la voiture !", tr: "Dikkat: « sur » = üstünde, « sous » = altında 🚗. Top arabanın altında!", en: "Careful: « sur » = on top, « sous » = underneath 🚗. The ball is under the car!" } },
             { fr: "Attends, je vais le chercher.", tr: "Bekle, ben alırım.", en: "Wait, I'll get it.", ok: true, go: "g" }
           ] },
      g: { scene: { fr: "Une femme sort de l'immeuble avec un sac de courses.", tr: "Elinde alışveriş poşetiyle bir kadın apartmandan çıkıyor.", en: "A woman comes out of the building with a shopping bag." },
           say: [["F", "Noé, Jade ! Ah, bonjour madame ! Je suis Claire, leur maman. Ils ne vous embêtent pas ?"]],
           choices: [
             { fr: "Pas du tout ! Ils sont adorables.", tr: "Hiç de değil! Çok tatlılar.", en: "Not at all! They're adorable.", ok: true, go: "h" },
             { fr: "Oui !", tr: "Evet!", en: "Yes!", ok: false,
               fb: { fr: "Attention, « oui » ici veut dire « oui, ils m'embêtent » 😬 ! Pour dire que tout va bien : « non, pas du tout ! ».", tr: "Dikkat, burada « oui » « evet, beni rahatsız ediyorlar » demek 😬! Her şeyin yolunda olduğunu söylemek için: « non, pas du tout ! ».", en: "Careful, « oui » here means « yes, they're bothering me » 😬! To say all is fine: « non, pas du tout ! »." } },
             { fr: "Bonjour Claire ! Non, non, ils sont très gentils.", tr: "Merhaba Claire! Yok, yok, çok iyiler.", en: "Hello Claire! No, no, they're very sweet.", ok: true, go: "h" }
           ] },
      h: { say: [["F", "Vous habitez ici depuis longtemps ?"]],
           choices: [
             { fr: "Oui, depuis longtemps : depuis lundi.", tr: "Evet, uzun zamandır: pazartesiden beri.", en: "Yes, for a long time: since Monday.", ok: false,
               fb: { fr: "Depuis lundi, ce n'est pas « longtemps » 😄 ! Dites la vérité : « depuis un an ».", tr: "Pazartesiden beri « uzun zaman » değil 😄! Doğrusunu söyleyin: « depuis un an ».", en: "Since Monday isn't « a long time » 😄! Tell the truth: « depuis un an »." } },
             { fr: "Depuis un an. Je suis turque, je vis ici avec mon mari.", tr: "Bir yıldır. Türküm, burada eşimle yaşıyorum.", en: "For a year. I'm Turkish, I live here with my husband.", ok: true, go: "i" },
             { fr: "Il y a un an.", tr: "Bir yıl önce.", en: "A year ago.", ok: false,
               fb: { fr: "Presque ! « Il y a » = un moment dans le passé. Pour une durée, on dit « depuis » : « depuis un an ».", tr: "Az kaldı! « Il y a » = geçmişte bir an. Süre için « depuis » denir: « depuis un an ».", en: "Almost! « Il y a » = a moment in the past. For a duration, use « depuis »: « depuis un an »." } }
           ] },
      i: { say: [["F", "Super ! Alors, on est voisines. Vous voulez venir prendre un café chez nous dimanche ?"]],
           choices: [
             { fr: "Avec plaisir ! À quelle heure ?", tr: "Memnuniyetle! Saat kaçta?", en: "With pleasure! What time?", ok: true, go: "fin" },
             { fr: "Oui, merci beaucoup ! C'est très gentil.", tr: "Evet, çok teşekkürler! Çok naziksiniz.", en: "Yes, thank you very much! That's very kind.", ok: true, go: "fin" },
             { fr: "Oui, je viens dimanche dernier.", tr: "Evet, geçen pazar geliyorum.", en: "Yes, I'm coming last Sunday.", ok: false,
               fb: { fr: "« Dimanche dernier », c'est déjà passé ⏪ ! Pour ce dimanche, dites « avec plaisir ! » ou « dimanche, c'est parfait ».", tr: "« Dimanche dernier » çoktan geçti ⏪! Bu pazar için « avec plaisir ! » ya da « dimanche, c'est parfait » deyin.", en: "« Dimanche dernier » is already over ⏪! For this Sunday, say « avec plaisir ! » or « dimanche, c'est parfait »." } }
           ] },
      fin: { end: "win", say: [["F", "Vers 16 h, au deuxième étage, porte de gauche. À dimanche !"], ["K", "À dimanche !"]],
             scene: { fr: "Un ballon, deux enfants, une nouvelle voisine : vous avez fait connaissance en français. Bravo ! ⚽🎉", tr: "Bir top, iki çocuk, yeni bir komşu: Fransızca tanıştınız. Bravo! ⚽🎉", en: "A ball, two kids, a new neighbour: you got to know them in French. Well done! ⚽🎉" } }
    } },

  /* ───────────── 39. Un petit accrochage ───────────── */
  { id: "av-constat", level: "A2", emoji: "🚗",
    t: { fr: "Un petit accrochage", tr: "Küçük bir kaza", en: "A minor collision" },
    goal: { fr: "Vous êtes passagère dans la voiture d'une collègue : après un petit accident, aidez-la à remplir le constat amiable.", tr: "Bir iş arkadaşınızın arabasında yolcusunuz: küçük bir kazadan sonra kaza tespit tutanağını doldurmasına yardım edin.", en: "You're a passenger in a colleague's car: after a minor accident, help her fill in the accident report form." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous rentrez du travail dans la voiture de Nadia, une collègue de la salle. Au feu rouge, boum ! Une voiture vous rentre dedans par derrière.", tr: "Spor salonundan bir iş arkadaşınız olan Nadia'nın arabasıyla işten dönüyorsunuz. Kırmızı ışıkta, güm! Bir araba arkadan size çarpıyor.", en: "You're coming home from work in Nadia's car, a colleague from the gym. At the red light, bang! A car hits you from behind." },
           say: [["F", "Ça va ? Tu n'as rien ?"]],
           choices: [
             { fr: "Oui, j'ai tout !", tr: "Evet, her şeyim var!", en: "Yes, I have everything!", ok: false,
               fb: { fr: "Vous avez tout… même le sens de l'humour 😄 ! « Tu n'as rien ? » = « tu n'es pas blessée ? ». Répondez « ça va, je n'ai rien ».", tr: "Her şeyiniz var… mizah anlayışınız bile 😄! « Tu n'as rien ? » = « yaralanmadın mı? ». « ça va, je n'ai rien » diye cevap verin.", en: "You have everything… even a sense of humour 😄! « Tu n'as rien ? » = « you're not hurt? ». Answer « ça va, je n'ai rien »." } },
             { fr: "Ça va, je n'ai rien. Et toi ?", tr: "İyiyim, bir şeyim yok. Ya sen?", en: "I'm OK, I'm not hurt. And you?", ok: true, go: "b" },
             { fr: "Je ne suis rien.", tr: "Ben hiçbir şey değilim.", en: "I am nothing.", ok: false,
               fb: { fr: "Oh non, vous êtes quelqu'un de très important 🥺 ! On dit « je n'ai rien » (avec « avoir ») pour dire qu'on n'est pas blessé.", tr: "Aman, siz çok önemli birisiniz 🥺! Yaralanmadığınızı söylemek için « je n'ai rien » (« avoir » ile) denir.", en: "Oh no, you're someone very important 🥺! You say « je n'ai rien » (with « avoir ») to mean you're not hurt." } }
           ] },
      b: { scene: { fr: "Nadia respire. Un homme sort de l'autre voiture, l'air très gêné.", tr: "Nadia derin bir nefes alıyor. Diğer arabadan çok mahcup görünen bir adam iniyor.", en: "Nadia breathes out. A man gets out of the other car, looking very embarrassed." },
           say: [["F", "Moi aussi, ça va. J'ai juste eu très peur."], ["M", "Je suis vraiment désolé ! Je regardais mon GPS… Personne n'est blessé ?"]],
           choices: [
             { fr: "Personne ? Mais nous sommes deux personnes !", tr: "Kimse mi? Ama biz iki kişiyiz!", en: "Nobody? But there are two people here!", ok: false,
               fb: { fr: "Piège ! Avec « ne », « personne » veut dire « aucune personne », pas « une personne » 😉. Répondez « non, personne n'est blessé ».", tr: "Tuzak! « ne » ile « personne » « hiç kimse » demek, « bir kişi » değil 😉. « non, personne n'est blessé » diye cevap verin.", en: "Trap! With « ne », « personne » means « nobody », not « a person » 😉. Answer « non, personne n'est blessé »." } },
             { fr: "Non, personne n'est blessé, heureusement.", tr: "Hayır, neyse ki kimse yaralanmadı.", en: "No, nobody's hurt, fortunately.", ok: true, go: "c" },
             { fr: "Votre GPS est blessé ?", tr: "GPS'iniz mi yaralandı?", en: "Is your GPS hurt?", ok: false,
               fb: { fr: "Le GPS va très bien, merci 📱😄 ! Il parle de vous deux. Répondez « non, personne n'est blessé ».", tr: "GPS gayet iyi, teşekkürler 📱😄! Sizden bahsediyor. « non, personne n'est blessé » diye cevap verin.", en: "The GPS is fine, thanks 📱😄! He means the two of you. Answer « non, personne n'est blessé »." } }
           ] },
      c: { say: [["M", "Bon. On fait un constat amiable ? J'en ai un dans la boîte à gants."], ["F", "Je n'ai jamais fait de constat… Tu sais comment ça marche ?"]],
           choices: [
             { fr: "Un peu. On remplit le papier ensemble, puis vous signez tous les deux.", tr: "Biraz. Kâğıdı birlikte dolduruyoruz, sonra ikiniz de imzalıyorsunuz.", en: "A bit. We fill in the form together, then you both sign.", ok: true, go: "d" },
             { fr: "Pas vraiment. On pourrait appeler ton assurance pour demander ?", tr: "Pek değil. Sigortanı arayıp sorabiliriz, ne dersin?", en: "Not really. We could call your insurance to ask?", ok: true, go: "c2" },
             { fr: "Un constat ? Non, on appelle la police tout de suite !", tr: "Tutanak mı? Hayır, hemen polisi arıyoruz!", en: "A report? No, we're calling the police right now!", ok: false,
               fb: { fr: "Pas de panique 🚓 ! Sans blessé et entre gens calmes, en France, le constat amiable suffit. Proposez de le remplir ensemble.", tr: "Panik yok 🚓! Fransa'da yaralı yoksa ve herkes sakinse, kaza tespit tutanağı yeterli. Birlikte doldurmayı önerin.", en: "Don't panic 🚓! In France, with no one hurt and everyone calm, the accident report form is enough. Offer to fill it in together." } }
           ] },
      c2: { scene: { fr: "Nadia appelle son assurance et met le haut-parleur.", tr: "Nadia sigortasını arıyor ve hoparlörü açıyor.", en: "Nadia calls her insurance and puts it on speaker." },
           say: [["F2", "S'il n'y a pas de blessé, remplissez le constat avec l'autre conducteur et envoyez-le-nous sous 5 jours."]],
           choices: [
             { fr: "Sous 5 jours ? Sous la voiture ?", tr: "5 günün altında mı? Arabanın altında mı?", en: "Under 5 days? Under the car?", ok: false,
               fb: { fr: "Rien à voir avec la voiture 😄 ! « Sous 5 jours » = dans les 5 jours, avant la fin du 5e jour. Remerciez et posez une question utile.", tr: "Arabayla hiç ilgisi yok 😄! « Sous 5 jours » = 5 gün içinde. Teşekkür edin ve işe yarar bir soru sorun.", en: "Nothing to do with the car 😄! « Sous 5 jours » = within 5 days. Say thanks and ask a useful question." } },
             { fr: "D'accord, merci. Et on peut aussi prendre des photos des voitures ?", tr: "Tamam, teşekkürler. Arabaların fotoğrafını da çekebilir miyiz?", en: "OK, thanks. And can we take photos of the cars too?", ok: true, go: "d" }
           ] },
      d: { scene: { fr: "Vous posez le constat sur le capot. Nadia est la voiture A, le monsieur la voiture B.", tr: "Tutanağı kaputun üstüne koyuyorsunuz. Nadia A aracı, adam B aracı.", en: "You put the form on the bonnet. Nadia is car A, the man is car B." },
           say: [["M", "Il faut d'abord la date et l'heure. Il était quelle heure, à peu près ?"]],
           choices: [
             { fr: "Il a été 18 h 15.", tr: "Saat 18.15 oldu.", en: "It has been 18:15.", ok: false,
               fb: { fr: "Pour l'heure dans le passé, on utilise l'imparfait 🕕 : « il était 18 h 15 ».", tr: "Geçmişteki saat için imparfait kullanılır 🕕: « il était 18 h 15 ».", en: "For the time in the past, use the imparfait 🕕: « il était 18 h 15 »." } },
             { fr: "Je suis à l'heure, merci.", tr: "Ben dakiğim, teşekkürler.", en: "I'm on time, thanks.", ok: false,
               fb: { fr: "Bravo pour la ponctualité ⏰😄 ! Mais il demande l'heure de l'accident : « il était environ 18 h 15 ».", tr: "Dakiklik için tebrikler ⏰😄! Ama kazanın saatini soruyor: « il était environ 18 h 15 ».", en: "Well done for being punctual ⏰😄! But he's asking the time of the accident: « il était environ 18 h 15 »." } },
             { fr: "Il était environ 18 h 15.", tr: "Saat yaklaşık 18.15'ti.", en: "It was about 6:15 pm.", ok: true, go: "e" }
           ] },
      e: { say: [["M", "Et c'était où exactement ? Je ne connais pas bien le quartier."]],
           choices: [
             { fr: "On était au feu rouge, au coin de la rue Victor-Hugo et de l'avenue Jean-Jaurès.", tr: "Kırmızı ışıktaydık, Victor-Hugo Sokağı ile Jean-Jaurès Caddesi'nin köşesinde.", en: "We were at the red light, on the corner of Rue Victor-Hugo and Avenue Jean-Jaurès.", ok: true, go: "f" },
             { fr: "On était rouges au feu.", tr: "Işıkta kırmızıydık.", en: "We were red at the light.", ok: false,
               fb: { fr: "Vous étiez peut-être rouges de peur 😳😄, mais c'est le feu qui était rouge ! Dites « on était au feu rouge, au coin de… ».", tr: "Belki korkudan kıpkırmızıydınız 😳😄 ama kırmızı olan ışıktı! « on était au feu rouge, au coin de… » deyin.", en: "Maybe you were red with fright 😳😄, but it was the light that was red! Say « on était au feu rouge, au coin de… »." } },
             { fr: "C'était ici. Ici, ici !", tr: "Buradaydı. Burada, burada!", en: "It was here. Here, here!", ok: false,
               fb: { fr: "Sur un papier, « ici » ne suffit pas 📝 ! Donnez le nom des rues : « au coin de la rue… et de l'avenue… ».", tr: "Kâğıtta « ici » yetmez 📝! Sokak adlarını verin: « au coin de la rue… et de l'avenue… ».", en: "On a form, « ici » isn't enough 📝! Give the street names: « au coin de la rue… et de l'avenue… »." } }
           ] },
      f: { say: [["F", "Pour les cases, qu'est-ce que je coche ? Moi, j'étais arrêtée au feu."]],
           choices: [
             { fr: "Tu étais arrêtée par la police ?", tr: "Polis tarafından mı tutuklandın?", en: "You were arrested by the police?", ok: false,
               fb: { fr: "Mais non, Nadia n'est pas une bandite 🚔😄 ! Ici, « arrêtée » = sa voiture ne bougeait pas. Aidez-la avec la case « à l'arrêt ».", tr: "Yok canım, Nadia suçlu değil 🚔😄! Burada « arrêtée » = arabası hareket etmiyordu. « à l'arrêt » kutusunda ona yardım edin.", en: "Of course not, Nadia isn't a criminal 🚔😄! Here, « arrêtée » = her car wasn't moving. Help her with the « à l'arrêt » box." } },
             { fr: "Coche la case « à l'arrêt ». C'est la case numéro 1.", tr: "« à l'arrêt » (duruyordu) kutusunu işaretle. 1 numaralı kutu.", en: "Tick the « stationary » box. It's box number 1.", ok: true, go: "g" },
             { fr: "Coche toutes les cases, c'est plus simple !", tr: "Bütün kutuları işaretle, daha kolay!", en: "Tick all the boxes, it's easier!", ok: false,
               fb: { fr: "Plus simple… mais l'assurance ne va rien comprendre 😅 ! On coche seulement ce qui est vrai : « à l'arrêt ».", tr: "Daha kolay… ama sigorta hiçbir şey anlamaz 😅! Sadece doğru olan işaretlenir: « à l'arrêt ».", en: "Easier… but the insurance won't understand a thing 😅! You only tick what's true: « à l'arrêt »." } }
           ] },
      g: { say: [["M", "Moi, je coche « heurtait à l'arrière ». C'est honnête. Qui fait le croquis ?"]],
           choices: [
             { fr: "Un croque-monsieur ? Avec plaisir, j'ai faim !", tr: "Kroke mösyö mü? Memnuniyetle, açım!", en: "A croque-monsieur? Gladly, I'm hungry!", ok: false,
               fb: { fr: "Bon appétit… mais non 🥪😄 ! « Un croquis » = un petit dessin de l'accident. Proposez de le faire.", tr: "Afiyet olsun… ama hayır 🥪😄! « Un croquis » = kazanın küçük bir çizimi. Çizmeyi önerin.", en: "Enjoy… but no 🥪😄! « Un croquis » = a little drawing of the accident. Offer to do it." } },
             { fr: "Je vais le faire : la voiture A ici, au feu, et la voiture B juste derrière.", tr: "Ben yaparım: A aracı burada, ışıkta, B aracı hemen arkasında.", en: "I'll do it: car A here, at the light, and car B right behind.", ok: true, go: "h" },
             { fr: "Je dessine mal, mais je vais essayer !", tr: "Kötü çizerim ama deneyeceğim!", en: "I'm bad at drawing, but I'll try!", ok: true, go: "h" }
           ] },
      h: { say: [["M", "Parfait, c'est très clair. Maintenant, on signe tous les deux, et chacun garde un exemplaire."]],
           choices: [
             { fr: "Nadia, signe vite, sans relire !", tr: "Nadia, okumadan hemen imzala!", en: "Nadia, sign quickly, without reading it again!", ok: false,
               fb: { fr: "Jamais sans relire ✍️ ! Après une signature, on ne peut plus rien changer. Proposez de relire ensemble.", tr: "Okumadan asla ✍️! İmzadan sonra hiçbir şey değiştirilemez. Birlikte tekrar okumayı önerin.", en: "Never without reading it ✍️! Once it's signed, nothing can be changed. Suggest reading it together." } },
             { fr: "Attendez, on relit tout ensemble avant de signer ?", tr: "Bekleyin, imzalamadan önce hepsini birlikte okuyalım mı?", en: "Wait, shall we read it all together before signing?", ok: true, go: "i" },
             { fr: "Je signe aussi, moi ?", tr: "Ben de mi imzalıyorum?", en: "Do I sign too?", ok: false,
               fb: { fr: "Non, seuls les deux conducteurs signent 🚗🚗. Vous, vous pouvez aider à relire avant la signature.", tr: "Hayır, sadece iki sürücü imzalar 🚗🚗. Siz imzadan önce okumaya yardım edebilirsiniz.", en: "No, only the two drivers sign 🚗🚗. You can help read it over before they sign." } }
           ] },
      i: { scene: { fr: "Tout est juste. Nadia et le monsieur signent. Il repart en s'excusant encore.", tr: "Her şey doğru. Nadia ve adam imzalıyor. Adam tekrar özür dileyerek gidiyor.", en: "Everything's correct. Nadia and the man sign. He leaves, apologising again." },
           say: [["F", "Merci pour ton aide ! Sans toi, j'aurais paniqué. Je te dépose chez toi ?"]],
           choices: [
             { fr: "Avec plaisir ! Mais roule doucement, hein !", tr: "Memnuniyetle! Ama yavaş sür, tamam mı!", en: "Gladly! But drive slowly, OK!", ok: true, go: "fin" },
             { fr: "Merci, c'est gentil. N'oublie pas d'envoyer le constat à ton assurance !", tr: "Teşekkürler, çok naziksin. Tutanağı sigortana göndermeyi unutma!", en: "Thanks, that's kind. Don't forget to send the form to your insurance!", ok: true, go: "fin" },
             { fr: "De rien, j'ai paniqué aussi beaucoup.", tr: "Rica ederim, ben de çok paniğe kapıldım.", en: "You're welcome, I panicked also a lot.", ok: false,
               fb: { fr: "L'ordre des mots 😉 : au passé composé, « beaucoup » va entre « ai » et le participe : « moi aussi, j'ai beaucoup paniqué ». Et elle vous propose de vous ramener !", tr: "Kelime sırası 😉: passé composé'de « beaucoup », « ai » ile ortaç arasına girer: « moi aussi, j'ai beaucoup paniqué ». Üstelik sizi eve bırakmayı teklif ediyor!", en: "Word order 😉: in the passé composé, « beaucoup » goes between « ai » and the participle: « moi aussi, j'ai beaucoup paniqué ». And she's offering you a lift!" } }
           ] },
      fin: { end: "win", say: [["F", "Promis ! Et demain, je t'offre un café."]],
             scene: { fr: "Constat rempli, collègue rassurée : vous avez géré comme une pro ! 🚗🎉", tr: "Tutanak dolduruldu, iş arkadaşınız rahatladı: bir profesyonel gibi hallettiniz! 🚗🎉", en: "Form filled in, colleague reassured: you handled it like a pro! 🚗🎉" } }
    } },

  /* ───────────── 40. Une blessure en plein match ───────────── */
  { id: "av-tribune", level: "A2", emoji: "🤾‍♀️",
    t: { fr: "Une blessure en plein match", tr: "Maçın ortasında sakatlık", en: "An injury mid-match" },
    goal: { fr: "Vous regardez un match de handball avec un ami : une joueuse se blesse. Expliquez ce que vous avez vu et aidez le soigneur.", tr: "Bir arkadaşınızla hentbol maçı izliyorsunuz: bir oyuncu sakatlanıyor. Ne gördüğünüzü anlatın ve sağlıkçıya yardım edin.", en: "You're watching a handball match with a friend: a player gets injured. Explain what you saw and help the team's medic." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Samedi soir, vous êtes dans les tribunes avec Karim, un ami. Son club joue un match important.", tr: "Cumartesi akşamı, arkadaşınız Karim'le tribündesiniz. Onun kulübü önemli bir maç oynuyor.", en: "Saturday evening, you're in the stands with your friend Karim. His club is playing an important match." },
           say: [["M", "Alors, tu as déjà vu un match de handball en France ?"]],
           choices: [
             { fr: "Non, c'est mon premier match ici ! L'ambiance est géniale.", tr: "Hayır, burada ilk maçım! Atmosfer harika.", en: "No, it's my first match here! The atmosphere is great.", ok: true, go: "b" },
             { fr: "J'ai beaucoup vu de matchs en Turquie.", tr: "Türkiye'de çok maç gördüm.", en: "I have a lot seen matches in Turkey.", ok: false,
               fb: { fr: "Presque ! Avec un nom, « beaucoup de » reste ensemble : « j'ai vu beaucoup de matchs ». Mais ici, il parle de la France !", tr: "Az kaldı! İsimle birlikte « beaucoup de » ayrılmaz: « j'ai vu beaucoup de matchs ». Ama burada Fransa'yı soruyor!", en: "Almost! With a noun, « beaucoup de » stays together: « j'ai vu beaucoup de matchs ». But here he's asking about France!" } },
             { fr: "Oui, je vais voir un match hier.", tr: "Evet, dün bir maç izlemeye gideceğim.", en: "Yes, I'm going to see a match yesterday.", ok: false,
               fb: { fr: "« Je vais voir » = futur, « hier » = passé 🌀 ! Et puis… c'est votre premier match en France, non ? « Non, c'est mon premier match ici ! »", tr: "« Je vais voir » = gelecek, « hier » = geçmiş 🌀! Hem… Fransa'daki ilk maçınız, değil mi? « Non, c'est mon premier match ici ! »", en: "« Je vais voir » = future, « hier » = past 🌀! And anyway… it's your first match in France, isn't it? « Non, c'est mon premier match ici ! »" } }
           ] },
      b: { say: [["M", "Regarde le numéro 7, c'est ma cousine Léna. Elle a déjà marqué trois buts !"]],
           choices: [
             { fr: "Elle a marché trois buts ?", tr: "Üç gol mü yürüdü?", en: "She walked three goals?", ok: false,
               fb: { fr: "Elle court, elle saute, mais elle ne « marche » pas les buts 😄 ! On dit « marquer un but ». Complimentez-la : « elle joue très bien ! ».", tr: "Koşuyor, zıplıyor ama golleri « yürümüyor » 😄! « marquer un but » (gol atmak) denir. Ona iltifat edin: « elle joue très bien ! ».", en: "She runs, she jumps, but she doesn't « walk » goals 😄! It's « marquer un but ». Compliment her: « elle joue très bien ! »." } },
             { fr: "Elle joue très bien ! Elle est à quel poste ?", tr: "Çok iyi oynuyor! Hangi mevkide oynuyor?", en: "She plays really well! What position does she play?", ok: true, go: "c" },
             { fr: "Bravo, tu as marqué trois buts !", tr: "Bravo, üç gol attın!", en: "Well done, you scored three goals!", ok: false,
               fb: { fr: "Karim est assis à côté de vous avec ses chips 🍿😄 ! C'est Léna qui a marqué : « elle joue très bien ! ».", tr: "Karim cipsiyle yanınızda oturuyor 🍿😄! Golleri atan Léna: « elle joue très bien ! ».", en: "Karim is sitting next to you with his crisps 🍿😄! It's Léna who scored: « elle joue très bien ! »." } }
           ] },
      c: { scene: { fr: "Léna saute pour tirer, retombe mal et crie. Elle se tient le genou. L'arbitre siffle.", tr: "Léna şut atmak için zıplıyor, kötü düşüyor ve bağırıyor. Dizini tutuyor. Hakem düdük çalıyor.", en: "Léna jumps to shoot, lands badly and screams. She's holding her knee. The referee blows the whistle." },
           say: [["M", "Oh non ! Léna est par terre ! Qu'est-ce qui s'est passé ? Je n'ai pas vu !"]],
           choices: [
             { fr: "Elle a retombé sur son genou.", tr: "Dizinin üstüne düştü.", en: "She has landed on her knee.", ok: false,
               fb: { fr: "Petit piège : « retomber », comme « tomber », se conjugue avec « être » : « elle est retombée ». Expliquez ce que vous avez vu.", tr: "Küçük tuzak: « retomber », tıpkı « tomber » gibi « être » ile çekimlenir: « elle est retombée ». Ne gördüğünüzü anlatın.", en: "Little trap: « retomber », like « tomber », takes « être »: « elle est retombée ». Explain what you saw." } },
             { fr: "Elle a sauté et elle est mal retombée sur la jambe gauche. Son genou a tourné.", tr: "Zıpladı ve sol bacağının üstüne kötü düştü. Dizi döndü.", en: "She jumped and landed badly on her left leg. Her knee twisted.", ok: true, go: "d" },
             { fr: "Rien, elle se repose un peu.", tr: "Bir şey yok, biraz dinleniyor.", en: "Nothing, she's just having a rest.", ok: false,
               fb: { fr: "En plein match, par terre, en criant ? Ce n'est pas une sieste 😅 ! Décrivez : « elle est mal retombée, son genou a tourné ».", tr: "Maçın ortasında, yerde, bağırarak mı? Bu öğle uykusu değil 😅! Anlatın: « elle est mal retombée, son genou a tourné ».", en: "Mid-match, on the floor, screaming? That's not a nap 😅! Describe it: « elle est mal retombée, son genou a tourné »." } }
           ] },
      d: { say: [["M", "Le soigneur arrive, mais il est tout seul… Toi, tu étais kiné dans le handball, non ? Tu veux descendre ?"]],
           choices: [
             { fr: "Oui, je descends au bord du terrain et je propose mon aide.", tr: "Evet, saha kenarına iniyorum ve yardım teklif ediyorum.", en: "Yes, I'll go down to the side of the court and offer my help.", ok: true, go: "e" },
             { fr: "Je ne veux pas déranger. Je reste ici, mais je regarde bien.", tr: "Rahatsız etmek istemem. Burada kalıyorum ama dikkatle izliyorum.", en: "I don't want to get in the way. I'll stay here, but I'm watching closely.", ok: true, go: "d2" },
             { fr: "Je cours sur le terrain, vite !", tr: "Sahaya koşuyorum, hemen!", en: "I'm running onto the court, quick!", ok: false,
               fb: { fr: "Doucement, sportive 😄 ! On n'entre pas sur le terrain sans permission. Descendez au bord du terrain et proposez votre aide.", tr: "Yavaş ol, sporcu 😄! İzinsiz sahaya girilmez. Saha kenarına inin ve yardım teklif edin.", en: "Easy, athlete 😄! You don't go onto the court without permission. Go down to the side and offer help." } }
           ] },
      d2: { scene: { fr: "Le soigneur lève la tête vers les tribunes.", tr: "Sağlıkçı başını tribünlere doğru kaldırıyor.", en: "The medic looks up at the stands." },
           say: [["M2", "Quelqu'un a bien vu l'action ? Le genou a tourné comment ?"]],
           choices: [
             { fr: "Moi ! Le genou est parti vers l'intérieur quand elle est retombée.", tr: "Ben! Yere düştüğünde dizi içeri doğru gitti.", en: "Me! Her knee went inwards when she landed.", ok: true, go: "e" },
             { fr: "Je ne sais pas, j'étais aux toilettes.", tr: "Bilmiyorum, tuvaletteydim.", en: "I don't know, I was in the toilets.", ok: false,
               fb: { fr: "Mais non, vous avez tout vu 👀 ! Levez la main : « moi ! le genou est parti vers l'intérieur ».", tr: "Yok canım, her şeyi gördünüz 👀! Elinizi kaldırın: « moi ! le genou est parti vers l'intérieur ».", en: "No, you saw everything 👀! Raise your hand: « moi ! le genou est parti vers l'intérieur »." } }
           ] },
      e: { scene: { fr: "Vous êtes au bord du terrain. Le soigneur est à genoux à côté de Léna.", tr: "Saha kenarındasınız. Sağlıkçı Léna'nın yanında diz çökmüş.", en: "You're at the side of the court. The medic is kneeling next to Léna." },
           say: [["M2", "Merci d'être venue. Vous êtes de la famille ?"]],
           choices: [
             { fr: "Je suis kiné ici, laissez-moi faire !", tr: "Ben burada fizyoterapistim, bırakın ben yapayım!", en: "I'm a physio here, let me handle it!", ok: false,
               fb: { fr: "Restez honnête : votre diplôme n'est pas encore reconnu en France 🙏. Et c'est lui qui décide. Expliquez votre expérience et proposez votre aide.", tr: "Dürüst olun: diplomanız henüz Fransa'da tanınmıyor 🙏. Üstelik karar veren o. Deneyiminizi anlatın ve yardım teklif edin.", en: "Be honest: your diploma isn't recognised in France yet 🙏. And he's the one in charge. Explain your experience and offer help." } },
             { fr: "Non, je suis une amie de son cousin. J'étais kiné du sport en Turquie. Je peux vous aider ?", tr: "Hayır, kuzeninin arkadaşıyım. Türkiye'de spor fizyoterapistiydim. Size yardım edebilir miyim?", en: "No, I'm a friend of her cousin. I was a sports physio in Turkey. Can I help you?", ok: true, go: "f" },
             { fr: "Oui, je suis sa famille turque.", tr: "Evet, onun Türk ailesiyim.", en: "Yes, I'm her Turkish family.", ok: false,
               fb: { fr: "Une famille turque surprise 😄 ? Dites la vérité : « je suis une amie de son cousin » et proposez votre aide.", tr: "Sürpriz bir Türk ailesi mi 😄? Doğruyu söyleyin: « je suis une amie de son cousin » ve yardım teklif edin.", en: "A surprise Turkish family 😄? Tell the truth: « je suis une amie de son cousin » and offer help." } }
           ] },
      f: { say: [["M2", "Ah, une collègue, super ! Vous pouvez lui tenir la jambe pendant que je prépare la glace ?"]],
           choices: [
             { fr: "Bien sûr. Léna, je vais tenir ta jambe doucement, d'accord ?", tr: "Tabii ki. Léna, bacağını yavaşça tutacağım, tamam mı?", en: "Of course. Léna, I'm going to hold your leg gently, OK?", ok: true, go: "g" },
             { fr: "Bien sûr. Je vais tirer fort sur sa jambe pour remettre le genou en place.", tr: "Tabii ki. Dizini yerine oturtmak için bacağını sertçe çekeceğim.", en: "Of course. I'll pull hard on her leg to put the knee back in place.", ok: false,
               fb: { fr: "Surtout pas 😬 ! On ne tire jamais sur une articulation blessée. On tient la jambe doucement, sans bouger.", tr: "Asla 😬! Yaralı bir eklem asla çekilmez. Bacak kıpırdatmadan, yavaşça tutulur.", en: "Absolutely not 😬! You never pull on an injured joint. You hold the leg gently, without moving it." } },
             { fr: "Bien sûr. Je tiens la glace et vous, vous tenez la jambe ?", tr: "Tabii ki. Buzu ben tutayım, bacağı siz mi tutarsınız?", en: "Of course. I'll hold the ice and you hold the leg?", ok: false,
               fb: { fr: "C'est l'inverse 🔄 ! Il vous demande de tenir la jambe pendant qu'il prépare la glace. Rassurez Léna en tenant sa jambe.", tr: "Tam tersi 🔄! O buzu hazırlarken bacağı tutmanızı istiyor. Bacağını tutarak Léna'yı sakinleştirin.", en: "It's the other way round 🔄! He's asking you to hold the leg while he prepares the ice. Reassure Léna and hold her leg." } }
           ] },
      g: { say: [["F2", "J'ai trop mal… J'ai entendu un « crac ». C'est grave ?"]],
           choices: [
             { fr: "Oui, c'est très grave. Tu ne joueras plus jamais.", tr: "Evet, çok ciddi. Bir daha asla oynayamayacaksın.", en: "Yes, it's very serious. You'll never play again.", ok: false,
               fb: { fr: "Aïe, quelle panique 😱 ! Personne ne sait encore. Restez calme et rassurante : « je ne sais pas encore, respire doucement ».", tr: "Ay, ne panik 😱! Henüz kimse bilmiyor. Sakin ve güven verici olun: « je ne sais pas encore, respire doucement ».", en: "Ouch, what panic 😱! Nobody knows yet. Stay calm and reassuring: « je ne sais pas encore, respire doucement »." } },
             { fr: "C'est rien ! Tu vas rejouer dans 5 minutes.", tr: "Bir şey yok! 5 dakika sonra tekrar oynayacaksın.", en: "It's nothing! You'll be back on in 5 minutes.", ok: false,
               fb: { fr: "Ne promettez pas ce que vous ne savez pas 🙏 ! Avec un « crac », il faut un examen. Dites : « je ne sais pas encore, respire doucement, on est là ».", tr: "Bilmediğiniz şeyi vaat etmeyin 🙏! « Crac » sesi varsa muayene gerekir. Şunu deyin: « je ne sais pas encore, respire doucement, on est là ».", en: "Don't promise what you don't know 🙏! With a « crack », she needs a check-up. Say: « je ne sais pas encore, respire doucement, on est là »." } },
             { fr: "Je ne sais pas encore. Respire doucement, on est là.", tr: "Henüz bilmiyorum. Yavaşça nefes al, buradayız.", en: "I don't know yet. Breathe slowly, we're here.", ok: true, go: "h" }
           ] },
      h: { say: [["M2", "Il faudra une radio, peut-être une IRM. Ses parents ne sont pas là… Quelqu'un peut l'accompagner aux urgences ?"]],
           choices: [
             { fr: "Son cousin Karim est dans les tribunes. Je vais le chercher.", tr: "Kuzeni Karim tribünde. Gidip onu getiriyorum.", en: "Her cousin Karim is in the stands. I'll go and get him.", ok: true, go: "i" },
             { fr: "Moi, je peux l'accompagner, avec son cousin Karim.", tr: "Ben ona eşlik edebilirim, kuzeni Karim'le birlikte.", en: "I can go with her, with her cousin Karim.", ok: true, go: "i" },
             { fr: "Elle peut conduire, non ?", tr: "Kendisi araba kullanabilir, değil mi?", en: "She can drive, can't she?", ok: false,
               fb: { fr: "Avec ce genou ? Impossible 🚗❌ ! Proposez une solution : « son cousin Karim est là, je vais le chercher ».", tr: "Bu dizle mi? İmkânsız 🚗❌! Bir çözüm önerin: « son cousin Karim est là, je vais le chercher ».", en: "With that knee? Impossible 🚗❌! Suggest a solution: « son cousin Karim est là, je vais le chercher »." } }
           ] },
      i: { scene: { fr: "Karim arrive en courant. On porte Léna sur une civière et tout le public applaudit.", tr: "Karim koşarak geliyor. Léna sedyeyle taşınıyor ve bütün seyirciler alkışlıyor.", en: "Karim comes running. Léna is carried off on a stretcher and the whole crowd applauds." },
           say: [["M", "Merci pour tout ! Tu as été super calme. Tu viens avec nous à l'hôpital ?"]],
           choices: [
             { fr: "Oui, bien sûr. Je prends mon manteau et j'arrive.", tr: "Evet, tabii ki. Montumu alıp geliyorum.", en: "Yes, of course. I'll grab my coat and I'm coming.", ok: true, go: "fin" },
             { fr: "Oui, je suis venue avec vous à l'hôpital.", tr: "Evet, sizinle hastaneye geldim.", en: "Yes, I came with you to the hospital.", ok: false,
               fb: { fr: "Vous n'y êtes pas encore allés ⏩ ! Pour maintenant, dites : « oui, j'arrive » ou « je viens avec vous ».", tr: "Henüz oraya gitmediniz ⏩! Şimdi için « oui, j'arrive » ya da « je viens avec vous » deyin.", en: "You haven't gone there yet ⏩! For right now, say « oui, j'arrive » or « je viens avec vous »." } },
             { fr: "Bien sûr, et je vais appeler ses parents dans la voiture, si tu veux.", tr: "Tabii ki, istersen arabada ailesini ararım.", en: "Of course, and I'll call her parents in the car, if you like.", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["F2", "Merci beaucoup… Tu viendras voir mon prochain match, quand je serai guérie ?"]],
             scene: { fr: "Vous avez aidé avec votre cœur, votre expérience… et votre français ! 🤾‍♀️🎉", tr: "Kalbinizle, deneyiminizle… ve Fransızcanızla yardım ettiniz! 🤾‍♀️🎉", en: "You helped with your heart, your experience… and your French! 🤾‍♀️🎉" } }
    } },

  /* ───────────── 41. Une bouilloire en panne ───────────── */
  { id: "av-bouilloire", level: "A2", emoji: "🧾",
    t: { fr: "Une bouilloire en panne", tr: "Bozuk bir su ısıtıcısı", en: "A broken kettle" },
    goal: { fr: "Rapportez au magasin une bouilloire qui ne marche plus et obtenez un échange ou un remboursement.", tr: "Artık çalışmayan bir su ısıtıcısını mağazaya geri götürün ve değişim ya da para iadesi alın.", en: "Take a kettle that no longer works back to the shop and get an exchange or a refund." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous êtes au service client d'un magasin d'électroménager, avec votre bouilloire dans un sac.", tr: "Bir beyaz eşya mağazasının müşteri hizmetlerindesiniz, su ısıtıcınız bir poşette.", en: "You're at the customer service desk of a home appliance store, with your kettle in a bag." },
           say: [["F", "Bonjour madame, je peux vous aider ?"]],
           choices: [
             { fr: "Bonjour, j'achète cette bouilloire la semaine dernière.", tr: "Merhaba, bu su ısıtıcısını geçen hafta alıyorum.", en: "Hello, I buy this kettle last week.", ok: false,
               fb: { fr: "« La semaine dernière » = passé ⏪. Utilisez le passé composé : « j'ai acheté cette bouilloire la semaine dernière ».", tr: "« La semaine dernière » = geçmiş ⏪. Passé composé kullanın: « j'ai acheté cette bouilloire la semaine dernière ».", en: "« La semaine dernière » = past ⏪. Use the passé composé: « j'ai acheté cette bouilloire la semaine dernière »." } },
             { fr: "Bonjour, ma bouilloire est morte.", tr: "Merhaba, su ısıtıcım öldü.", en: "Hello, my kettle has died.", ok: false,
               fb: { fr: "Toutes nos condoléances 🪦😄 ! Pour un appareil, on dit plutôt « elle ne marche plus » ou « elle est en panne ».", tr: "Başınız sağ olsun 🪦😄! Bir cihaz için daha çok « elle ne marche plus » ya da « elle est en panne » denir.", en: "Our condolences 🪦😄! For an appliance, people say « elle ne marche plus » or « elle est en panne »." } },
             { fr: "Bonjour, j'ai acheté cette bouilloire la semaine dernière et elle ne marche plus.", tr: "Merhaba, bu su ısıtıcısını geçen hafta aldım ve artık çalışmıyor.", en: "Hello, I bought this kettle last week and it doesn't work any more.", ok: true, go: "b" }
           ] },
      b: { say: [["F", "Ah, je suis désolée. Qu'est-ce qui s'est passé exactement ?"]],
           choices: [
             { fr: "Hier matin, j'ai voulu faire du thé, mais elle ne s'est pas allumée.", tr: "Dün sabah çay yapmak istedim ama çalışmadı.", en: "Yesterday morning I wanted to make tea, but it didn't switch on.", ok: true, go: "c" },
             { fr: "Elle a fait un peu de fumée, puis elle s'est éteinte.", tr: "Biraz duman çıkardı, sonra kapandı.", en: "It gave off a bit of smoke, then it switched off.", ok: true, go: "c" },
             { fr: "Elle a bu toute l'eau.", tr: "Bütün suyu içti.", en: "It drank all the water.", ok: false,
               fb: { fr: "Une bouilloire qui a soif 💧😄 ? Expliquez simplement le problème : « elle ne s'est pas allumée ».", tr: "Susamış bir su ısıtıcısı mı 💧😄? Sorunu basitçe anlatın: « elle ne s'est pas allumée ».", en: "A thirsty kettle 💧😄? Just explain the problem: « elle ne s'est pas allumée »." } }
           ] },
      c: { say: [["F", "D'accord. Vous avez gardé le ticket de caisse ?"]],
           choices: [
             { fr: "Oui, le voilà.", tr: "Evet, buyurun.", en: "Yes, here it is.", ok: true, go: "d" },
             { fr: "Non, je l'ai perdu… Mais j'ai payé par carte. Ça peut aider ?", tr: "Hayır, kaybettim… Ama kartla ödedim. İşe yarar mı?", en: "No, I've lost it… But I paid by card. Can that help?", ok: true, go: "c2" },
             { fr: "Oui, j'ai un ticket de métro.", tr: "Evet, metro biletim var.", en: "Yes, I have a metro ticket.", ok: false,
               fb: { fr: "Il vous emmène loin, mais pas jusqu'au remboursement 🚇😄 ! « Le ticket de caisse » = la preuve d'achat du magasin.", tr: "Sizi uzağa götürür ama para iadesine kadar değil 🚇😄! « Le ticket de caisse » = mağazanın satın alma fişi.", en: "It'll take you far, but not to a refund 🚇😄! « Le ticket de caisse » = the shop's receipt." } }
           ] },
      c2: { say: [["F", "Oui, je peux retrouver l'achat avec votre carte bancaire. Vous pouvez la mettre dans le terminal ?"]],
           choices: [
             { fr: "Bien sûr, voilà. Je dois taper mon code ?", tr: "Tabii, buyurun. Şifremi girmem gerekiyor mu?", en: "Of course, here. Do I need to type my PIN?", ok: true, go: "d" },
             { fr: "Je vous dis mon code secret ? C'est 1234.", tr: "Şifremi size söyleyeyim mi? 1234.", en: "Shall I tell you my PIN? It's 1234.", ok: false,
               fb: { fr: "Stop 🤐 ! On ne dit jamais son code à personne, même à une vendeuse très gentille. Vous le tapez vous-même, en secret.", tr: "Dur 🤐! Şifre asla kimseye söylenmez, çok nazik bir satıcıya bile. Kendiniz, gizlice girersiniz.", en: "Stop 🤐! Never tell anyone your PIN, not even a very nice shop assistant. You type it yourself, in secret." } }
           ] },
      d: { say: [["F", "C'est bon, je vois l'achat : 29,90 €. Elle est encore sous garantie. Vous préférez un échange ou un remboursement ?"]],
           choices: [
             { fr: "Je voudrais un échange, s'il vous plaît. La même, mais qui marche !", tr: "Değişim istiyorum, lütfen. Aynısından, ama çalışan bir tane!", en: "I'd like an exchange, please. The same one, but one that works!", ok: true, go: "e" },
             { fr: "Je préférerais être remboursée, s'il vous plaît.", tr: "Paramın iade edilmesini tercih ederim, lütfen.", en: "I'd rather get a refund, please.", ok: true, go: "e2" },
             { fr: "Les deux, c'est possible ?", tr: "İkisi birden, mümkün mü?", en: "Both, is that possible?", ok: false,
               fb: { fr: "Bien essayé 😏 ! Mais c'est l'un ou l'autre : « un échange » ou « un remboursement ».", tr: "İyi denemeydi 😏! Ama ya biri ya öbürü: « un échange » ya da « un remboursement ».", en: "Nice try 😏! But it's one or the other: « un échange » or « un remboursement »." } }
           ] },
      e: { say: [["F", "Désolée, ce modèle n'est plus en stock. Vous voulez voir un autre modèle ?"]],
           choices: [
             { fr: "Oui, je peux voir les autres modèles ?", tr: "Evet, diğer modellere bakabilir miyim?", en: "Yes, can I see the other models?", ok: true, go: "f" },
             { fr: "Dans ce cas, je préfère être remboursée.", tr: "O zaman paramın iadesini tercih ederim.", en: "In that case, I'd rather get a refund.", ok: true, go: "e2" },
             { fr: "Pas de problème, j'attends ici qu'il revienne en stock.", tr: "Sorun değil, stoğa gelene kadar burada beklerim.", en: "No problem, I'll wait here until it's back in stock.", ok: false,
               fb: { fr: "Ça peut prendre des semaines… prévoyez un sac de couchage 😴😄 ! Choisissez plutôt un autre modèle ou un remboursement.", tr: "Haftalar sürebilir… uyku tulumu getirin 😴😄! Bunun yerine başka bir model ya da para iadesi seçin.", en: "That could take weeks… bring a sleeping bag 😴😄! Choose another model or a refund instead." } }
           ] },
      f: { say: [["F", "Celle-ci est en inox, elle coûte 34,90 €. Vous payez seulement la différence : 5 €."]],
           choices: [
             { fr: "Elle coûte moins cher, non ?", tr: "Daha ucuz, değil mi?", en: "It's cheaper, isn't it?", ok: false,
               fb: { fr: "34,90 € > 29,90 € : elle est plus chère 📈 ! Si ça vous va, dites « ça me va, je paie la différence ».", tr: "34,90 € > 29,90 €: daha pahalı 📈! Size uyarsa « ça me va, je paie la différence » deyin.", en: "34.90 € > 29.90 €: it's more expensive 📈! If that's fine, say « ça me va, je paie la différence »." } },
             { fr: "Ça me va. Je paie la différence par carte.", tr: "Bana uyar. Farkı kartla ödüyorum.", en: "That's fine with me. I'll pay the difference by card.", ok: true, go: "g" },
             { fr: "Combien, la différence ?", tr: "Fark ne kadar?", en: "How much is the difference?", ok: false,
               fb: { fr: "Elle vient de le dire : 5 € 👂😉 ! Écoutez bien, puis répondez « ça me va ».", tr: "Az önce söyledi: 5 € 👂😉! İyi dinleyin, sonra « ça me va » diye cevap verin.", en: "She just said it: 5 € 👂😉! Listen carefully, then answer « ça me va »." } }
           ] },
      g: { say: [["F", "Parfait. Voilà votre nouvelle bouilloire et votre ticket. Gardez-le bien, cette fois !"]],
           choices: [
             { fr: "Promis ! Je le mets tout de suite dans mon portefeuille.", tr: "Söz! Hemen cüzdanıma koyuyorum.", en: "Promise! I'm putting it in my wallet right away.", ok: true, go: "h" },
             { fr: "Je vais le garder dans la bouilloire !", tr: "Onu su ısıtıcısının içinde saklayacağım!", en: "I'll keep it in the kettle!", ok: false,
               fb: { fr: "Il va finir en tisane 🍵😄 ! Rangez-le dans un endroit sûr : « je le mets dans mon portefeuille ».", tr: "Bitki çayına dönüşür 🍵😄! Güvenli bir yere koyun: « je le mets dans mon portefeuille ».", en: "It'll end up as herbal tea 🍵😄! Keep it somewhere safe: « je le mets dans mon portefeuille »." } }
           ] },
      e2: { say: [["F", "Très bien. Je vous rembourse 29,90 € sur votre carte. L'argent arrive dans 3 à 5 jours."]],
           choices: [
             { fr: "Très bien, merci. Je garde ce ticket de remboursement ?", tr: "Tamam, teşekkürler. Bu iade fişini saklıyor muyum?", en: "Fine, thanks. Do I keep this refund receipt?", ok: true, go: "h" },
             { fr: "Vous ne pouvez pas me donner l'argent en espèces ?", tr: "Parayı nakit veremez misiniz?", en: "Can't you give me the money in cash?", ok: false,
               fb: { fr: "En général, le magasin rembourse comme vous avez payé : par carte 💳. Acceptez, et demandez si vous gardez le ticket.", tr: "Genelde mağaza, ödediğiniz şekilde iade eder: kartla 💳. Kabul edin ve fişi saklayıp saklamayacağınızı sorun.", en: "Usually the shop refunds the way you paid: by card 💳. Accept, and ask whether you keep the receipt." } },
             { fr: "3 à 5 jours ? Alors je reviens vendredi chercher l'argent.", tr: "3 ila 5 gün mü? O zaman cuma günü parayı almaya geri gelirim.", en: "3 to 5 days? Then I'll come back on Friday for the money.", ok: false,
               fb: { fr: "Pas besoin de revenir 😊 ! L'argent arrive tout seul sur votre compte. Dites simplement « très bien, merci ».", tr: "Geri gelmenize gerek yok 😊! Para kendiliğinden hesabınıza geçer. Sadece « très bien, merci » deyin.", en: "No need to come back 😊! The money arrives in your account by itself. Just say « très bien, merci »." } }
           ] },
      h: { say: [["F", "Oui, gardez-le. Et une dernière chose : vous avez notre carte de fidélité ? Elle est gratuite."]],
           choices: [
             { fr: "Non, je n'en ai pas, mais je veux bien. C'est rapide ?", tr: "Hayır, yok ama isterim. Çabuk mu oluyor?", en: "No, I don't have one, but I'd like one. Is it quick?", ok: true, go: "fin" },
             { fr: "Non merci, ça ira. Bonne journée !", tr: "Hayır teşekkürler, gerek yok. İyi günler!", en: "No thanks, I'm fine. Have a nice day!", ok: true, go: "fin" },
             { fr: "Non, je ne suis pas fidèle.", tr: "Hayır, ben sadık değilim.", en: "No, I'm not faithful.", ok: false,
               fb: { fr: "Oh là là, votre mari ne doit pas entendre ça 😳😄 ! Ici, « fidélité » = la carte des clients réguliers. Dites « non, je n'en ai pas ».", tr: "Aman, eşiniz bunu duymasın 😳😄! Burada « fidélité » = düzenli müşteri kartı. « non, je n'en ai pas » deyin.", en: "Oh dear, don't let your husband hear that 😳😄! Here, « fidélité » = the regular customers' card. Say « non, je n'en ai pas »." } }
           ] },
      fin: { end: "win", say: [["F", "Très bien ! Merci, madame, et bonne journée !"]],
             scene: { fr: "Problème réglé, poliment et en français ! Vous savez maintenant rapporter un produit en panne. 🧾🎉", tr: "Sorun çözüldü, kibarca ve Fransızca! Artık bozuk bir ürünü nasıl iade edeceğinizi biliyorsunuz. 🧾🎉", en: "Problem solved, politely and in French! Now you know how to return a faulty product. 🧾🎉" } }
    } }
);
