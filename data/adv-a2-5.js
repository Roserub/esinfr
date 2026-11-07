/* Aventures A2 — 21 to 25: portes ouvertes STAPS, touriste perdu, machine à laver en panne, tournoi de handball pour enfants, frais à la banque */
(window.ADVENTURES = window.ADVENTURES || []).push(

  /* ───────────── 21. Portes ouvertes à la fac ───────────── */
  { id: "av-portes-ouvertes", level: "A2", emoji: "🎓",
    t: { fr: "Portes ouvertes à la fac", tr: "Üniversitede açık kapı günü", en: "University open day" },
    goal: { fr: "Visitez la licence STAPS pendant la journée portes ouvertes et posez vos questions.", tr: "Açık kapı gününde STAPS lisans programını gezin ve sorularınızı sorun.", en: "Visit the sports science degree on open day and ask your questions." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Samedi matin, il y a beaucoup de monde à l'université. Un étudiant vous accueille à l'entrée.", tr: "Cumartesi sabahı üniversitede çok kalabalık var. Girişte bir öğrenci sizi karşılıyor.", en: "Saturday morning, the university is packed. A student greets you at the entrance." },
           say: [["M", "Bonjour et bienvenue aux portes ouvertes ! Vous cherchez quelle filière ?"]],
           choices: [
             { fr: "Je cherche la porte ouverte.", tr: "Açık kapıyı arıyorum.", en: "I'm looking for the open door.", ok: false,
               fb: { fr: "Toutes les portes sont ouvertes aujourd'hui 🚪😄 ! « Une filière » = un domaine d'études. Dites « je m'intéresse à la licence STAPS ».", tr: "Bugün bütün kapılar açık 🚪😄! « Une filière » = bir öğrenim alanı. « Je m'intéresse à la licence STAPS » deyin.", en: "All the doors are open today 🚪😄! « Une filière » = a field of study. Say « je m'intéresse à la licence STAPS »." } },
             { fr: "Bonjour ! Je m'intéresse à la licence STAPS.", tr: "Merhaba! STAPS lisansıyla ilgileniyorum.", en: "Hello! I'm interested in the sports science degree.", ok: true, go: "b" },
             { fr: "Je cherche une file d'attente.", tr: "Bir bekleme kuyruğu arıyorum.", en: "I'm looking for a queue.", ok: false,
               fb: { fr: "Il y a déjà assez de queues en France 😄 ! « Filière » ≠ « file ». Parlez de vos études : « je m'intéresse à la licence STAPS ».", tr: "Fransa'da zaten yeterince kuyruk var 😄! « Filière » ≠ « file ». Öğreniminizden bahsedin: « je m'intéresse à la licence STAPS ».", en: "France has enough queues already 😄! « Filière » ≠ « file ». Talk about your studies: « je m'intéresse à la licence STAPS »." } }
           ] },
      b: { say: [["M", "Super ! Il y a une présentation de la licence à 10 h dans l'amphi B, ou une visite du gymnase tout de suite. Qu'est-ce que vous préférez ?"]],
           choices: [
             { fr: "Je voudrais d'abord assister à la présentation.", tr: "Önce sunuma katılmak istiyorum.", en: "I'd like to attend the presentation first.", ok: true, go: "c1" },
             { fr: "Je voudrais assister la présentation.", tr: "Sunuma yardım etmek istiyorum.", en: "I'd like to assist the presentation.", ok: false,
               fb: { fr: "Sans « à », « assister quelqu'un » = l'aider 😄. Vous voulez y être : « assister À la présentation ».", tr: "« à » olmadan « assister quelqu'un » = birine yardım etmek 😄. Orada olmak istiyorsunuz: « assister À la présentation ».", en: "Without « à », « assister quelqu'un » = to help someone 😄. You want to be there: « assister À la présentation »." } },
             { fr: "J'aimerais bien visiter le gymnase maintenant.", tr: "Spor salonunu şimdi gezmek isterim.", en: "I'd love to visit the gym now.", ok: true, go: "c2" }
           ] },
      c1: { scene: { fr: "Dans l'amphi, un professeur présente la première année.", tr: "Amfide bir hoca birinci sınıfı tanıtıyor.", en: "In the lecture hall, a lecturer presents the first year." },
           say: [["M2", "En première année, vous aurez de l'anatomie, de la physiologie, de la psychologie du sport… et environ 8 heures de pratique sportive par semaine."]],
           choices: [
             { fr: "Huit heures par jour ? Je vais être fatiguée !", tr: "Günde sekiz saat mi? Yorulacağım!", en: "Eight hours a day? I'll be exhausted!", ok: false,
               fb: { fr: "Rassurez-vous, c'est par SEMAINE 😅 ! Écoutez bien : « 8 heures par semaine, c'est super ! ».", tr: "Merak etmeyin, HAFTADA 😅! İyi dinleyin: « 8 heures par semaine, c'est super ! ».", en: "Don't worry, it's per WEEK 😅! Listen carefully: « 8 heures par semaine, c'est super ! »." } },
             { fr: "Huit heures par semaine, c'est super ! J'adore la pratique.", tr: "Haftada sekiz saat, harika! Uygulamaya bayılırım.", en: "Eight hours a week, great! I love the practical side.", ok: true, go: "d" },
             { fr: "Huit semaines par heure ?", tr: "Saatte sekiz hafta mı?", en: "Eight weeks per hour?", ok: false,
               fb: { fr: "Ce serait un drôle d'emploi du temps ⏳😄 ! C'est « 8 heures par semaine ».", tr: "Tuhaf bir ders programı olurdu ⏳😄! « 8 heures par semaine ».", en: "That would be a strange timetable ⏳😄! It's « 8 heures par semaine » (8 hours a week)." } }
           ] },
      c2: { scene: { fr: "Une étudiante vous montre le grand gymnase. Des étudiants jouent au handball.", tr: "Bir kız öğrenci size büyük spor salonunu gösteriyor. Öğrenciler hentbol oynuyor.", en: "A student shows you the big sports hall. Some students are playing handball." },
           say: [["F2", "Ici, on a les cours pratiques : handball, natation, athlétisme… Et vous, vous faites du sport ?"]],
           choices: [
             { fr: "Oui, je fais du sport à la télé.", tr: "Evet, televizyonda spor yapıyorum.", en: "Yes, I do sport on TV.", ok: false,
               fb: { fr: "Faire du sport sur le canapé ? 📺😄 Ça, c'est « regarder le sport ». Parlez de votre vrai sport : « je cours le samedi matin ».", tr: "Kanepede spor mu? 📺😄 Ona « regarder le sport » denir. Gerçek sporunuzdan bahsedin: « je cours le samedi matin ».", en: "Sport on the sofa? 📺😄 That's « regarder le sport ». Talk about your real sport: « je cours le samedi matin »." } },
             { fr: "Oui, je cours le samedi matin. Et j'ai travaillé avec une équipe de handball en Turquie !", tr: "Evet, cumartesi sabahları koşuyorum. Bir de Türkiye'de bir hentbol takımıyla çalıştım!", en: "Yes, I run on Saturday mornings. And I worked with a handball team in Turkey!", ok: true, go: "d" }
           ] },
      d: { scene: { fr: "Ensuite, vous rencontrez Madame Leroy, la responsable de la licence.", tr: "Sonra lisans programının sorumlusu Madame Leroy ile tanışıyorsunuz.", en: "Next, you meet Madame Leroy, who runs the degree." },
           say: [["F", "Bonjour madame ! Vous avez un projet professionnel ?"]],
           choices: [
             { fr: "Oui, je suis kiné en France.", tr: "Evet, Fransa'da fizyoterapistim.", en: "Yes, I'm a physio in France.", ok: false,
               fb: { fr: "Pas encore 😉 ! Votre diplôme turc n'est pas reconnu en France. Dites « j'étais kiné en Turquie et je voudrais devenir kiné en France ».", tr: "Henüz değil 😉! Türk diplomanız Fransa'da tanınmıyor. « J'étais kiné en Turquie et je voudrais devenir kiné en France » deyin.", en: "Not yet 😉! Your Turkish diploma isn't recognised in France. Say « j'étais kiné en Turquie et je voudrais devenir kiné en France »." } },
             { fr: "Oui, j'étais kiné en Turquie, et je voudrais devenir kiné en France.", tr: "Evet, Türkiye'de fizyoterapisttim ve Fransa'da fizyoterapist olmak istiyorum.", en: "Yes, I was a physio in Turkey, and I'd like to become one in France.", ok: true, go: "e" },
             { fr: "Oui, mon projet, c'est manger à la cantine.", tr: "Evet, projem kantinde yemek yemek.", en: "Yes, my plan is to eat in the canteen.", ok: false,
               fb: { fr: "Un bon projet pour midi 🍽️😄, mais elle parle de votre futur métier. Parlez de la kinésithérapie !", tr: "Öğle için güzel bir plan 🍽️😄, ama gelecekteki mesleğinizi soruyor. Fizyoterapiden bahsedin!", en: "A fine plan for lunchtime 🍽️😄, but she means your future job. Talk about physiotherapy!" } }
           ] },
      e: { say: [["F", "C'est un beau projet ! Pour candidater, regardez bien le calendrier sur le site de l'université. Pour les candidats étrangers, il faut aussi justifier d'un niveau de français."]],
           choices: [
             { fr: "Il faut combien de français ?", tr: "Ne kadar Fransızca gerekiyor?", en: "How much French is needed?", ok: false,
               fb: { fr: "Le français ne se vend pas au kilo 😄 ! On demande « quel niveau de français faut-il ? ».", tr: "Fransızca kiloyla satılmıyor 😄! « Quel niveau de français faut-il ? » diye sorulur.", en: "French isn't sold by the kilo 😄! You ask « quel niveau de français faut-il ? »." } },
             { fr: "Quel niveau de français faut-il ?", tr: "Hangi seviyede Fransızca gerekiyor?", en: "What level of French is required?", ok: true, go: "f" },
             { fr: "Je parle parfaitement français, je suis A1.", tr: "Mükemmel Fransızca konuşuyorum, A1 seviyesindeyim.", en: "I speak perfect French, I'm A1.", ok: false,
               fb: { fr: "« Parfaitement » et « A1 » dans la même phrase 😄 ? Soyez honnête et curieuse : « quel niveau de français faut-il ? ».", tr: "Aynı cümlede « mükemmel » ve « A1 » 😄? Dürüst ve meraklı olun: « quel niveau de français faut-il ? ».", en: "« Perfectly » and « A1 » in the same sentence 😄? Be honest and curious: « quel niveau de français faut-il ? »." } }
           ] },
      f: { say: [["F", "Souvent, on demande le niveau B2. Mais vous avez le temps de progresser !"]],
           choices: [
             { fr: "D'accord. Je vais travailler pour avoir le B2.", tr: "Tamam. B2'yi almak için çalışacağım.", en: "OK. I'll work to get B2.", ok: true, go: "g" },
             { fr: "B2 ? C'est quel bâtiment ?", tr: "B2 mi? Hangi bina?", en: "B2? Which building is that?", ok: false,
               fb: { fr: "Ce n'est pas l'amphi B, deuxième étage 😄🏫 ! Le B2 est un niveau de langue. Dites « je vais travailler pour avoir le B2 ».", tr: "B amfisi, ikinci kat değil 😄🏫! B2 bir dil seviyesi. « Je vais travailler pour avoir le B2 » deyin.", en: "It's not lecture hall B, second floor 😄🏫! B2 is a language level. Say « je vais travailler pour avoir le B2 »." } },
             { fr: "Je prendrai des cours de français cette année, alors.", tr: "O zaman bu yıl Fransızca dersleri alacağım.", en: "Then I'll take French classes this year.", ok: true, go: "g" }
           ] },
      g: { say: [["F", "Très bien ! Avant de partir, vous voulez voir notre labo de physiologie ?"]],
           choices: [
             { fr: "Oui, je voudrais bien voir le lavabo.", tr: "Evet, lavaboyu görmek isterim.", en: "Yes, I'd love to see the sink.", ok: false,
               fb: { fr: "Le lavabo, c'est pour se laver les mains 🚰😄 ! Le « labo » = le laboratoire. Dites « avec plaisir, ça m'intéresse beaucoup ».", tr: "Lavabo el yıkamak içindir 🚰😄! « Labo » = laboratuvar. « Avec plaisir, ça m'intéresse beaucoup » deyin.", en: "A « lavabo » is a washbasin 🚰😄! « Labo » = laboratory. Say « avec plaisir, ça m'intéresse beaucoup »." } },
             { fr: "Avec plaisir, ça m'intéresse beaucoup !", tr: "Memnuniyetle, çok ilgimi çekiyor!", en: "I'd love to, I'm very interested!", ok: true, go: "h" }
           ] },
      h: { scene: { fr: "Dans le labo, il y a un tapis de course avec beaucoup de câbles et un masque.", tr: "Laboratuvarda çok sayıda kablosu ve bir maskesi olan bir koşu bandı var.", en: "In the lab there's a treadmill with lots of cables and a mask." },
           say: [["F", "Ici, on mesure la VO2 max des sportifs sur ce tapis de course. Vous voulez essayer deux minutes ?"]],
           choices: [
             { fr: "Pourquoi pas ! Mais doucement, s'il vous plaît.", tr: "Neden olmasın! Ama yavaş, lütfen.", en: "Why not! But gently, please.", ok: true, go: "i" },
             { fr: "Non merci, je suis en jupe aujourd'hui !", tr: "Hayır teşekkürler, bugün etek giydim!", en: "No thanks, I'm wearing a skirt today!", ok: true, go: "i" },
             { fr: "Oui, j'aimerais un tapis comme ça pour mon salon.", tr: "Evet, salonum için böyle bir halı isterim.", en: "Yes, I'd like a rug like that for my living room.", ok: false,
               fb: { fr: "Un tapis avec des câbles dans le salon, original 😄 ! Ici, c'est un tapis de COURSE. Répondez « pourquoi pas ! » ou « non merci ».", tr: "Salonda kablolu bir halı, ilginç 😄! Burada bu bir KOŞU bandı. « Pourquoi pas ! » ya da « non merci » deyin.", en: "A rug with cables in the living room, original 😄! Here it's a treadmill (« tapis de course »). Answer « pourquoi pas ! » or « non merci »." } }
           ] },
      i: { say: [["F", "Merci de votre visite ! Vous avez encore des questions ?"]],
           choices: [
             { fr: "Non, c'était très clair. Merci beaucoup pour vos conseils !", tr: "Hayır, her şey çok açıktı. Tavsiyeleriniz için çok teşekkürler!", en: "No, it was very clear. Thank you so much for your advice!", ok: true, go: "fin" },
             { fr: "Non, c'est bon. Salut, ma belle !", tr: "Hayır, tamam. Görüşürüz güzelim!", en: "No, all good. Bye, sweetie!", ok: false,
               fb: { fr: "Beaucoup trop familier avec la responsable 😳😄 ! Restez polie : « merci beaucoup pour vos conseils ! ».", tr: "Program sorumlusuna karşı fazla samimi 😳😄! Kibar kalın: « merci beaucoup pour vos conseils ! ».", en: "Far too familiar with the head of the degree 😳😄! Stay polite: « merci beaucoup pour vos conseils ! »." } }
           ] },
      fin: { end: "win", say: [["F", "Au revoir, madame, et bon courage pour votre projet !"]],
             scene: { fr: "Vous repartez avec une brochure et beaucoup de motivation. Un pas de plus vers vos études en France ! 🎓🎉", tr: "Bir broşür ve bolca motivasyonla ayrılıyorsunuz. Fransa'daki öğreniminize bir adım daha! 🎓🎉", en: "You leave with a brochure and plenty of motivation. One more step towards studying in France! 🎓🎉" } }
    } },

  /* ───────────── 22. Un touriste perdu ───────────── */
  { id: "av-touriste-perdu", level: "A2", emoji: "🗺️",
    t: { fr: "Un touriste perdu", tr: "Kaybolmuş bir turist", en: "A lost tourist" },
    goal: { fr: "Aidez un touriste qui parle un peu français à trouver le musée.", tr: "Biraz Fransızca konuşan bir turistin müzeyi bulmasına yardım edin.", en: "Help a tourist who speaks a little French find the museum." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Il est 16 h 20. Dans la rue, un homme avec un grand sac à dos regarde son plan, l'air perdu.", tr: "Saat 16.20. Sokakta büyük sırt çantalı bir adam şaşkın bir hâlde haritasına bakıyor.", en: "It's 4:20 p.m. In the street, a man with a big rucksack is studying his map, looking lost." },
           say: [["M", "Excusez-moi, madame… Vous parlez anglais ? Je suis un peu perdu."]],
           choices: [
             { fr: "Oui, bien sûr ! Mais on peut essayer en français, si vous voulez !", tr: "Evet, tabii! Ama isterseniz Fransızca deneyebiliriz!", en: "Yes, of course! But we can try in French if you like!", ok: true, go: "b" },
             { fr: "Je ne suis pas perdue, je suis turque.", tr: "Ben kaybolmadım, Türk'üm.", en: "I'm not lost, I'm Turkish.", ok: false,
               fb: { fr: "C'est LUI qui est perdu, pas vous 😄 ! Répondez à sa question : « oui, bien sûr… ».", tr: "Kaybolan O, siz değil 😄! Sorusuna cevap verin: « oui, bien sûr… ».", en: "HE's the one who's lost, not you 😄! Answer his question: « oui, bien sûr… »." } },
             { fr: "Non, je n'ai pas le temps.", tr: "Hayır, vaktim yok.", en: "No, I don't have time.", ok: false,
               fb: { fr: "Oh, il a l'air si perdu 🥺 ! Vous aussi, un jour, vous étiez nouvelle ici. Aidez-le : « oui, bien sûr… ».", tr: "Ah, o kadar kaybolmuş görünüyor ki 🥺! Bir zamanlar siz de burada yeniydiniz. Ona yardım edin: « oui, bien sûr… ».", en: "Oh, he looks so lost 🥺! You were new here once, too. Help him: « oui, bien sûr… »." } }
           ] },
      b: { say: [["M", "Oh oui, en français, je veux pratiquer ! J'ai pris le mauvais bus, je crois. Je cherche le musée des Beaux-Arts."]],
           choices: [
             { fr: "Vous cherchez les beaux arbres ?", tr: "Güzel ağaçları mı arıyorsunuz?", en: "You're looking for the beautiful trees?", ok: false,
               fb: { fr: "Des arbres ? Il cherche un musée, pas une forêt 🌳😄 ! Dites « ah, le musée ! Ce n'est pas loin ».", tr: "Ağaç mı? Orman değil, müze arıyor 🌳😄! « Ah, le musée ! Ce n'est pas loin » deyin.", en: "Trees? He's looking for a museum, not a forest 🌳😄! Say « ah, le musée ! Ce n'est pas loin »." } },
             { fr: "Ah, le musée ! Ce n'est pas loin, à dix minutes à pied.", tr: "Ah, müze! Uzak değil, yürüyerek on dakika.", en: "Ah, the museum! It's not far, ten minutes on foot.", ok: true, go: "c" },
             { fr: "Vous avez pris le bus ? Bravo !", tr: "Otobüse mi bindiniz? Bravo!", en: "You took the bus? Well done!", ok: false,
               fb: { fr: "Le MAUVAIS bus, donc pas vraiment bravo 😅🚌. Parlez du musée : « ce n'est pas loin ».", tr: "YANLIŞ otobüs, yani pek bravo sayılmaz 😅🚌. Müzeden bahsedin: « ce n'est pas loin ».", en: "The WRONG bus, so not exactly well done 😅🚌. Talk about the museum: « ce n'est pas loin »." } }
           ] },
      c: { say: [["M", "Dix minutes, super ! Vous pourriez m'expliquer le chemin ?"]],
           choices: [
             { fr: "Bien sûr. Allez tout droit, puis prenez la deuxième rue à gauche.", tr: "Tabii. Dümdüz gidin, sonra soldan ikinci sokağa sapın.", en: "Of course. Go straight on, then take the second street on the left.", ok: true, go: "d1" },
             { fr: "Je vais dans la même direction. Je peux vous accompagner !", tr: "Ben de aynı yöne gidiyorum. Size eşlik edebilirim!", en: "I'm going the same way. I can walk you there!", ok: true, go: "d2" },
             { fr: "Bien sûr. Tournez tout droit à gauche.", tr: "Tabii. Dümdüz sola dönün.", en: "Of course. Turn straight left.", ok: false,
               fb: { fr: "Tout droit ET à gauche en même temps ? Il va tourner en rond 🌀😄. D'abord « allez tout droit », puis « prenez la deuxième à gauche ».", tr: "Aynı anda hem düz hem sol mu? Kendi etrafında döner 🌀😄. Önce « allez tout droit », sonra « prenez la deuxième à gauche ».", en: "Straight AND left at the same time? He'll go round in circles 🌀😄. First « allez tout droit », then « prenez la deuxième à gauche »." } }
           ] },
      d1: { say: [["M", "Tout droit, puis la deuxième à gauche… Et après ?"]],
           choices: [
             { fr: "Après, vous traverserez la fontaine.", tr: "Sonra çeşmenin içinden geçeceksiniz.", en: "After that, you'll cross through the fountain.", ok: false,
               fb: { fr: "Il va être tout mouillé 💦😄 ! On traverse la PLACE, et le musée est en face de la fontaine.", tr: "Sırılsıklam olacak 💦😄! MEYDAN geçilir ve müze çeşmenin karşısındadır.", en: "He'll get soaked 💦😄! You cross the SQUARE, and the museum is opposite the fountain." } },
             { fr: "Après, vous traverserez la place. Le musée sera en face de la fontaine.", tr: "Sonra meydanı geçeceksiniz. Müze çeşmenin karşısında olacak.", en: "Then you'll cross the square. The museum will be opposite the fountain.", ok: true, go: "e1" },
             { fr: "Après, vous serez encore plus perdu.", tr: "Sonra daha da çok kaybolacaksınız.", en: "Then you'll be even more lost.", ok: false,
               fb: { fr: "Ce n'est pas très rassurant 😅 ! Donnez la fin du chemin : « vous traverserez la place… ».", tr: "Pek güven verici değil 😅! Yolun sonunu söyleyin: « vous traverserez la place… ».", en: "Not very reassuring 😅! Give him the end of the route: « vous traverserez la place… »." } }
           ] },
      e1: { say: [["M", "Alors, je répète : tout droit, la deuxième à droite, et la place. C'est ça ?"]],
           choices: [
             { fr: "Oui, c'est ça !", tr: "Evet, aynen öyle!", en: "Yes, that's right!", ok: false,
               fb: { fr: "Attention, il a dit « à DROITE » ! Il va finir à la gare 😄. Corrigez : « non, la deuxième à gauche ! ».", tr: "Dikkat, « SAĞA » dedi! Garda bitecek 😄. Düzeltin: « non, la deuxième à gauche ! ».", en: "Careful, he said « RIGHT »! He'll end up at the station 😄. Correct him: « non, la deuxième à gauche ! »." } },
             { fr: "Presque ! Pas à droite : la deuxième à gauche.", tr: "Neredeyse! Sağa değil: soldan ikinci.", en: "Almost! Not right: the second on the left.", ok: true, go: "f" }
           ] },
      d2: { scene: { fr: "Vous marchez ensemble. Il parle lentement, mais il fait beaucoup d'efforts.", tr: "Birlikte yürüyorsunuz. Yavaş konuşuyor ama çok çaba gösteriyor.", en: "You walk together. He speaks slowly, but he's trying really hard." },
           say: [["M", "C'est très gentil ! Vous habitez en France depuis longtemps ?"]],
           choices: [
             { fr: "J'habite en France il y a un an.", tr: "Bir yıl önce Fransa'da oturuyorum.", en: "I live in France one year ago.", ok: false,
               fb: { fr: "Piège classique (« since » en anglais 😉) ! Pour une action qui continue, on dit « depuis » : « j'habite en France depuis un an ».", tr: "Klasik tuzak (İngilizcedeki « since » 😉)! Devam eden bir şey için « depuis » denir: « j'habite en France depuis un an ».", en: "Classic trap (« since » in English 😉)! For something still going on, use « depuis »: « j'habite en France depuis un an »." } },
             { fr: "Depuis un an seulement. Je suis turque.", tr: "Sadece bir yıldır. Türk'üm.", en: "Only for a year. I'm Turkish.", ok: true, go: "e2" }
           ] },
      e2: { say: [["M", "Seulement un an ? Votre français est très bon ! Vous l'avez appris où ?"]],
           choices: [
             { fr: "Merci ! Je l'ai appris ici, et je prends encore des cours.", tr: "Teşekkürler! Burada öğrendim ve hâlâ ders alıyorum.", en: "Thanks! I learned it here, and I'm still taking classes.", ok: true, go: "f" },
             { fr: "Oui, mon français est très bon.", tr: "Evet, Fransızcam çok iyi.", en: "Yes, my French is very good.", ok: false,
               fb: { fr: "C'est vrai 😄, mais on répond à un compliment par « merci ! ». Et il demande OÙ vous l'avez appris.", tr: "Doğru 😄, ama iltifata « merci ! » ile cevap verilir. Ayrıca onu NEREDE öğrendiğinizi soruyor.", en: "True 😄, but you answer a compliment with « merci ! ». And he's asking WHERE you learned it." } },
             { fr: "Je l'ai appris à la boulangerie, avec les croissants !", tr: "Fırında, kruvasanlarla öğrendim!", en: "I learned it at the bakery, with the croissants!", ok: true, go: "f" }
           ] },
      f: { scene: { fr: "Il est 16 h 30. Vous regardez sur votre téléphone : le musée ferme à 18 h.", tr: "Saat 16.30. Telefonunuza bakıyorsunuz: müze saat 18'de kapanıyor.", en: "It's 4:30 p.m. You check your phone: the museum closes at 6 p.m." },
           say: [["M", "Une dernière question : vous savez à quelle heure il ferme, le musée ?"]],
           choices: [
             { fr: "Il ferme à 18 h. Vous avez une heure et demie.", tr: "Saat 18'de kapanıyor. Bir buçuk saatiniz var.", en: "It closes at 6. You have an hour and a half.", ok: true, go: "g" },
             { fr: "Il ferme à 18 h. Vous avez trente minutes.", tr: "Saat 18'de kapanıyor. Otuz dakikanız var.", en: "It closes at 6. You have thirty minutes.", ok: false,
               fb: { fr: "De 16 h 30 à 18 h, c'est une heure et demie 🧮. Pas de panique pour lui 😄 !", tr: "16.30'dan 18'e bir buçuk saat var 🧮. Onun için panik yok 😄!", en: "From 4:30 to 6 is an hour and a half 🧮. No need to panic him 😄!" } },
             { fr: "Il est fermé à 18 h depuis hier.", tr: "Dünden beri saat 18'de kapalı.", en: "It's been closed at 6 since yesterday.", ok: false,
               fb: { fr: "Un peu compliqué 😅 ! Restez simple : « il ferme à 18 h ».", tr: "Biraz karışık 😅! Basit tutun: « il ferme à 18 h ».", en: "A bit tangled 😅! Keep it simple: « il ferme à 18 h »." } }
           ] },
      g: { say: [["M", "Parfait ! Et après le musée, vous connaissez un bon restaurant près d'ici ?"]],
           choices: [
             { fr: "Je vous conseille de manger.", tr: "Size yemek yemenizi tavsiye ederim.", en: "I advise you to eat.", ok: false,
               fb: { fr: "Merci du conseil, docteur 😄 ! Donnez un nom ou un lieu : « il y a une petite crêperie près du musée ».", tr: "Tavsiye için teşekkürler doktor 😄! Bir isim ya da yer verin: « il y a une petite crêperie près du musée ».", en: "Thanks for the advice, doctor 😄! Give a name or a place: « il y a une petite crêperie près du musée »." } },
             { fr: "Il y a une petite crêperie près du musée. Elle est délicieuse !", tr: "Müzenin yakınında küçük bir krepçi var. Çok lezzetli!", en: "There's a little crêperie near the museum. It's delicious!", ok: true, go: "h" },
             { fr: "Je vous conseillerais le restaurant turc de la place, il est excellent.", tr: "Size meydandaki Türk restoranını öneririm, harika.", en: "I'd recommend the Turkish restaurant on the square, it's excellent.", ok: true, go: "h" }
           ] },
      h: { say: [["M", "Merci beaucoup, vous m'avez sauvé ! Comment je peux vous remercier ?"]],
           choices: [
             { fr: "Ce n'est rien, avec plaisir ! Bonne visite !", tr: "Bir şey değil, memnuniyetle! İyi gezmeler!", en: "It's nothing, my pleasure! Enjoy your visit!", ok: true, go: "fin" },
             { fr: "Vous me devez 20 €.", tr: "Bana 20 € borçlusunuz.", en: "You owe me 20 €.", ok: false,
               fb: { fr: "Guide touristique payant ? 💶😄 On aide gratuitement : « ce n'est rien, avec plaisir ! ».", tr: "Ücretli turist rehberi mi? 💶😄 Yardım bedavadır: « ce n'est rien, avec plaisir ! ».", en: "A paid tour guide? 💶😄 You help for free: « ce n'est rien, avec plaisir ! »." } },
             { fr: "Envoyez-moi une carte postale de votre pays !", tr: "Bana ülkenizden bir kartpostal gönderin!", en: "Send me a postcard from your country!", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["M", "Merci, madame ! Bonne fin de journée !"]],
             scene: { fr: "Le touriste vous fait un grand sourire et un petit signe de la main. Vous avez guidé quelqu'un en français : bravo ! 🗺️🎉", tr: "Turist size kocaman gülümsüyor ve el sallıyor. Birine Fransızca yol gösterdiniz: bravo! 🗺️🎉", en: "The tourist gives you a big smile and a little wave. You guided someone in French: well done! 🗺️🎉" } }
    } },

  /* ───────────── 23. La machine à laver en panne ───────────── */
  { id: "av-machine-laver", level: "A2", emoji: "🧺",
    t: { fr: "La machine à laver en panne", tr: "Bozulan çamaşır makinesi", en: "The broken washing machine" },
    goal: { fr: "Appelez votre propriétaire, expliquez le problème de la machine à laver et trouvez une solution.", tr: "Ev sahibinizi arayın, çamaşır makinesinin sorununu anlatın ve bir çözüm bulun.", en: "Call your landlord, explain the problem with the washing machine and find a solution." },
    start: "a",
    nodes: {
      a: { scene: { fr: "La machine à laver de l'appartement (elle est au propriétaire) s'est arrêtée au milieu d'un lavage. Vous appelez Monsieur Garnier.", tr: "Dairedeki çamaşır makinesi (ev sahibine ait) yıkamanın ortasında durdu. Monsieur Garnier'yi arıyorsunuz.", en: "The flat's washing machine (it belongs to the landlord) stopped in the middle of a wash. You call Monsieur Garnier." },
           say: [["M", "Allô, oui ?"]],
           choices: [
             { fr: "Allô ? C'est qui ?", tr: "Alo? Kim o?", en: "Hello? Who's this?", ok: false,
               fb: { fr: "C'est vous qui appelez 😄📞 ! Présentez-vous d'abord : « bonjour monsieur Garnier, c'est votre locataire ».", tr: "Arayan sizsiniz 😄📞! Önce kendinizi tanıtın: « bonjour monsieur Garnier, c'est votre locataire ».", en: "You're the one calling 😄📞! Introduce yourself first: « bonjour monsieur Garnier, c'est votre locataire »." } },
             { fr: "Bonjour monsieur Garnier, c'est votre locataire du troisième étage.", tr: "Merhaba Monsieur Garnier, üçüncü kattaki kiracınızım.", en: "Hello Monsieur Garnier, it's your tenant on the third floor.", ok: true, go: "b" },
             { fr: "Bonjour, c'est votre propriétaire.", tr: "Merhaba, ben ev sahibinizim.", en: "Hello, it's your landlord.", ok: false,
               fb: { fr: "Vous avez acheté l'immeuble ? 🏢😄 C'est LUI le propriétaire ; vous, vous êtes la locataire.", tr: "Binayı mı satın aldınız? 🏢😄 Ev sahibi O; siz kiracısınız.", en: "Did you buy the building? 🏢😄 HE's the landlord; you're the tenant." } }
           ] },
      b: { say: [["M", "Ah, bonjour madame ! Qu'est-ce qui se passe ?"]],
           choices: [
             { fr: "La machine à laver ne marche plus depuis hier soir.", tr: "Çamaşır makinesi dün akşamdan beri çalışmıyor.", en: "The washing machine hasn't worked since last night.", ok: true, go: "c" },
             { fr: "La machine à laver est partie.", tr: "Çamaşır makinesi gitti.", en: "The washing machine has left.", ok: false,
               fb: { fr: "Elle est partie en vacances ? 🧳😄 On dit « elle ne marche plus » ou « elle est en panne ».", tr: "Tatile mi gitti? 🧳😄 « Elle ne marche plus » ya da « elle est en panne » denir.", en: "Has it gone on holiday? 🧳😄 You say « elle ne marche plus » or « elle est en panne »." } },
             { fr: "La machine à laver ne marche plus il y a hier.", tr: "Çamaşır makinesi dünden önce çalışmıyor.", en: "The washing machine doesn't work ago yesterday.", ok: false,
               fb: { fr: "Le problème continue, alors on dit « depuis » : « elle ne marche plus depuis hier » 😉.", tr: "Sorun devam ediyor, o yüzden « depuis » denir: « elle ne marche plus depuis hier » 😉.", en: "The problem is ongoing, so use « depuis »: « elle ne marche plus depuis hier » 😉." } }
           ] },
      c: { say: [["M", "Ah bon ? Qu'est-ce qu'elle fait, exactement ?"]],
           choices: [
             { fr: "Elle a lavé mes vêtements.", tr: "Kıyafetlerimi yıkadı.", en: "It washed my clothes.", ok: false,
               fb: { fr: "Mais… c'est son travail 😄🧺 ! Expliquez le problème : « elle s'arrête au milieu du programme ».", tr: "Ama… bu onun işi 😄🧺! Sorunu açıklayın: « elle s'arrête au milieu du programme ».", en: "But… that's its job 😄🧺! Explain the problem: « elle s'arrête au milieu du programme »." } },
             { fr: "Elle s'arrête au milieu du programme, et l'eau reste dedans.", tr: "Programın ortasında duruyor ve su içinde kalıyor.", en: "It stops in the middle of the cycle, and the water stays inside.", ok: true, go: "d" },
             { fr: "Elle fait la tête.", tr: "Surat asıyor.", en: "It's sulking.", ok: false,
               fb: { fr: "Une machine qui boude, c'est drôle 😤😄 ! Mais il faut des détails : « elle s'arrête et l'eau reste dedans ».", tr: "Küsen bir makine, komik 😤😄! Ama ayrıntı lazım: « elle s'arrête et l'eau reste dedans ».", en: "A sulking machine, funny 😤😄! But he needs details: « elle s'arrête et l'eau reste dedans »." } }
           ] },
      d: { say: [["M", "D'accord. Il y a un message sur l'écran de la machine ?"]],
           choices: [
             { fr: "Je n'ai pas de télé.", tr: "Televizyonum yok.", en: "I don't have a TV.", ok: false,
               fb: { fr: "Il parle du petit écran de la MACHINE 😄📺. Regardez-le et lisez : « oui, il y a écrit E21 ».", tr: "MAKİNENİN küçük ekranından bahsediyor 😄📺. Bakın ve okuyun: « oui, il y a écrit E21 ».", en: "He means the MACHINE's little screen 😄📺. Look and read: « oui, il y a écrit E21 »." } },
             { fr: "Oui, il y a écrit « E21 ».", tr: "Evet, « E21 » yazıyor.", en: "Yes, it says « E21 ».", ok: true, go: "e" }
           ] },
      e: { say: [["M", "E21… C'est souvent le filtre. Vous pourriez vérifier le filtre, en bas de la machine ?"]],
           choices: [
             { fr: "D'accord, je vais regarder tout de suite. Ne quittez pas !", tr: "Tamam, hemen bakıyorum. Hattan ayrılmayın!", en: "OK, I'll look right away. Hold on!", ok: true, go: "f1" },
             { fr: "Je préfère attendre un réparateur, je ne suis pas très bricoleuse.", tr: "Bir tamirci beklemeyi tercih ederim, pek el becerim yok.", en: "I'd rather wait for a repairman, I'm not very handy.", ok: true, go: "f2" },
             { fr: "Je vais filtrer du café ?", tr: "Kahve mi süzeceğim?", en: "Shall I filter some coffee?", ok: false,
               fb: { fr: "Bonne idée pour le moral ☕😄, mais il parle du filtre de la machine. Dites « je vais regarder » ou « je préfère attendre un réparateur ».", tr: "Moral için iyi fikir ☕😄, ama makinenin filtresinden bahsediyor. « Je vais regarder » ya da « je préfère attendre un réparateur » deyin.", en: "Good for morale ☕😄, but he means the machine's filter. Say « je vais regarder » or « je préfère attendre un réparateur »." } }
           ] },
      f1: { scene: { fr: "Vous ouvrez la petite porte en bas. L'eau coule dans une bassine… et vous trouvez une chaussette dans le filtre !", tr: "Alttaki küçük kapağı açıyorsunuz. Su bir leğene akıyor… ve filtrede bir çorap buluyorsunuz!", en: "You open the little door at the bottom. Water runs into a basin… and you find a sock in the filter!" },
           say: [["M", "Alors ? Vous avez trouvé quelque chose ?"]],
           choices: [
             { fr: "Oui ! Il y avait une chaussette dans le filtre !", tr: "Evet! Filtrede bir çorap varmış!", en: "Yes! There was a sock in the filter!", ok: true, go: "g1" },
             { fr: "Oui ! Il y avait une chaussure dans le filtre !", tr: "Evet! Filtrede bir ayakkabı varmış!", en: "Yes! There was a shoe in the filter!", ok: false,
               fb: { fr: "Une chaussure dans le filtre ? Énorme 👟😄 ! Une chaussette 🧦 ≠ une chaussure 👟.", tr: "Filtrede ayakkabı mı? Devasa 👟😄! Une chaussette 🧦 ≠ une chaussure 👟.", en: "A shoe in the filter? Huge 👟😄! « Chaussette » 🧦 ≠ « chaussure » 👟." } }
           ] },
      g1: { say: [["M", "Ha ha, classique ! Lancez un programme court pour vérifier."]],
           choices: [
             { fr: "Je lance la chaussette ?", tr: "Çorabı mı fırlatayım?", en: "Shall I throw the sock?", ok: false,
               fb: { fr: "Pas la chaussette 🧦😄 ! « Lancer un programme » = démarrer la machine. Essayez, puis dites « ça marche ! ».", tr: "Çorabı değil 🧦😄! « Lancer un programme » = makineyi çalıştırmak. Deneyin, sonra « ça marche ! » deyin.", en: "Not the sock 🧦😄! « Lancer un programme » = start the machine. Try it, then say « ça marche ! »." } },
             { fr: "Attendez… Ça marche ! Merci beaucoup, monsieur.", tr: "Bekleyin… Çalışıyor! Çok teşekkürler, beyefendi.", en: "Wait… It works! Thank you so much.", ok: true, go: "h" }
           ] },
      f2: { say: [["M", "Pas de problème. Je peux envoyer un réparateur jeudi matin. Vous serez là ?"]],
           choices: [
             { fr: "Le matin, je travaille, mais je serai là à partir de 14 h.", tr: "Sabahları çalışıyorum ama saat 14'ten itibaren evde olacağım.", en: "I work in the mornings, but I'll be in from 2 p.m.", ok: true, go: "g2" },
             { fr: "Oui, je serai là hier.", tr: "Evet, dün orada olacağım.", en: "Yes, I'll be there yesterday.", ok: false,
               fb: { fr: "Une machine à remonter le temps 🕰️😄 ? « Hier » est passé. Parlez de jeudi : « je serai là à partir de 14 h ».", tr: "Zaman makinesi mi 🕰️😄? « Dün » geçti. Perşembeden bahsedin: « je serai là à partir de 14 h ».", en: "A time machine 🕰️😄? « Hier » is past. Talk about Thursday: « je serai là à partir de 14 h »." } }
           ] },
      g2: { say: [["M", "D'accord, il passera jeudi après-midi. Et bien sûr, c'est moi qui paie la réparation."]],
           choices: [
             { fr: "Merci, c'est très gentil.", tr: "Teşekkürler, çok naziksiniz.", en: "Thank you, that's very kind.", ok: true, go: "h" },
             { fr: "Merci. Alors je vous rembourse la moitié ?", tr: "Teşekkürler. O zaman yarısını size geri ödeyeyim mi?", en: "Thanks. So I'll pay you back half?", ok: false,
               fb: { fr: "Il a dit que c'est LUI qui paie 💶😉. La machine est à lui. Dites simplement « merci, c'est très gentil ».", tr: "Ödeyenin KENDİSİ olduğunu söyledi 💶😉. Makine onun. Sadece « merci, c'est très gentil » deyin.", en: "He said HE's paying 💶😉. It's his machine. Just say « merci, c'est très gentil »." } }
           ] },
      h: { say: [["M", "Avec plaisir. Et à part ça, tout va bien dans l'appartement ?"]],
           choices: [
             { fr: "Oui, je vais bien, et vous ?", tr: "Evet, iyiyim, ya siz?", en: "Yes, I'm fine, and you?", ok: false,
               fb: { fr: "Il demande pour l'APPARTEMENT, pas pour vous 😄🏠. Dites « oui, tout va bien, merci ».", tr: "DAİREYİ soruyor, sizi değil 😄🏠. « Oui, tout va bien, merci » deyin.", en: "He's asking about the FLAT, not you 😄🏠. Say « oui, tout va bien, merci »." } },
             { fr: "Oui, tout va bien, merci.", tr: "Evet, her şey yolunda, teşekkürler.", en: "Yes, everything's fine, thanks.", ok: true, go: "i" },
             { fr: "Le radiateur de la chambre fait un peu de bruit, mais ce n'est pas urgent.", tr: "Yatak odasındaki kalorifer biraz ses yapıyor ama acil değil.", en: "The bedroom radiator is a bit noisy, but it's not urgent.", ok: true, go: "i" }
           ] },
      i: { say: [["M", "Très bien, n'hésitez pas à m'appeler si besoin. Bonne soirée, madame !"]],
           choices: [
             { fr: "Salut, bisous !", tr: "Hoşça kal, öptüm!", en: "Bye, kisses!", ok: false,
               fb: { fr: "Des bisous au propriétaire ? 😳😄 Trop familier ! Dites « merci, bonne soirée à vous aussi ».", tr: "Ev sahibine öpücük mü? 😳😄 Fazla samimi! « Merci, bonne soirée à vous aussi » deyin.", en: "Kisses for your landlord? 😳😄 Too familiar! Say « merci, bonne soirée à vous aussi »." } },
             { fr: "Merci, bonne soirée à vous aussi !", tr: "Teşekkürler, size de iyi akşamlar!", en: "Thank you, good evening to you too!", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["M", "Au revoir, madame !"]],
             scene: { fr: "Vous raccrochez. Une panne, un propriétaire, un coup de téléphone… et tout en français ! 🧺🎉", tr: "Telefonu kapatıyorsunuz. Bir arıza, bir ev sahibi, bir telefon görüşmesi… ve hepsi Fransızca! 🧺🎉", en: "You hang up. A breakdown, a landlord, a phone call… and all in French! 🧺🎉" } }
    } },

  /* ───────────── 24. Un tournoi de handball pour enfants ───────────── */
  { id: "av-tournoi-enfants", level: "A2", emoji: "🤾",
    t: { fr: "Un tournoi de handball pour enfants", tr: "Çocuklar için bir hentbol turnuvası", en: "A children's handball tournament" },
    goal: { fr: "Aidez comme bénévole au tournoi de handball des moins de 11 ans.", tr: "11 yaş altı hentbol turnuvasında gönüllü olarak yardım edin.", en: "Help out as a volunteer at the under-11 handball tournament." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Dimanche, 9 h. Le gymnase du club est plein d'enfants et de parents. L'entraîneur vient vers vous.", tr: "Pazar, saat 9. Kulübün spor salonu çocuklar ve velilerle dolu. Antrenör size doğru geliyor.", en: "Sunday, 9 a.m. The club's sports hall is full of children and parents. The coach comes over to you." },
           say: [["M", "Salut ! Tu es la nouvelle bénévole ? Moi, c'est Karim. Ici, au club, tout le monde se tutoie !"]],
           choices: [
             { fr: "Enchantée ! Vous êtes l'entraîneur ?", tr: "Memnun oldum! Antrenör siz misiniz?", en: "Nice to meet you! Are you the coach? (formal)", ok: false,
               fb: { fr: "Il vient de dire « on se tutoie » 😉. Essayez : « oui, c'est moi ! Je suis là pour aider ».", tr: "Az önce « on se tutoie » dedi 😉. Deneyin: « oui, c'est moi ! Je suis là pour aider ».", en: "He just said « on se tutoie » (we use « tu ») 😉. Try: « oui, c'est moi ! Je suis là pour aider »." } },
             { fr: "Oui, c'est moi ! Enchantée, Karim. Je suis là pour aider.", tr: "Evet, benim! Memnun oldum Karim. Yardım etmek için buradayım.", en: "Yes, that's me! Nice to meet you, Karim. I'm here to help.", ok: true, go: "b" },
             { fr: "Oui, je suis la nouvelle bénévole depuis aujourd'hui matin.", tr: "Evet, bugün sabahtan beri yeni gönüllüyüm.", en: "Yes, I've been the new volunteer since today morning.", ok: false,
               fb: { fr: "On dit « ce matin », pas « aujourd'hui matin » 😉. Restez simple : « oui, c'est moi ! ».", tr: "« Aujourd'hui matin » değil, « ce matin » denir 😉. Basit tutun: « oui, c'est moi ! ».", en: "It's « ce matin », not « aujourd'hui matin » 😉. Keep it simple: « oui, c'est moi ! »." } }
           ] },
      b: { say: [["M", "Génial ! Il y a huit équipes aujourd'hui. Tu préfères tenir la table de marque ou t'occuper de la buvette ?"]],
           choices: [
             { fr: "Je veux bien tenir la table de marque.", tr: "Skor masasında durmak isterim.", en: "I'm happy to do the scorer's table.", ok: true, go: "c1" },
             { fr: "Je préfère m'occuper de la buvette.", tr: "Büfeyle ilgilenmeyi tercih ederim.", en: "I'd rather look after the snack bar.", ok: true, go: "c2" },
             { fr: "Je préfère tenir les enfants.", tr: "Çocukları tutmayı tercih ederim.", en: "I'd rather hold the children.", ok: false,
               fb: { fr: "Tenir 80 enfants, bon courage 😄🤾 ! Choisissez : « la table de marque » ou « la buvette ».", tr: "80 çocuğu tutmak, kolay gelsin 😄🤾! Seçin: « la table de marque » ya da « la buvette ».", en: "Holding 80 kids, good luck 😄🤾! Choose: « la table de marque » or « la buvette »." } }
           ] },
      c1: { say: [["M", "Parfait. À la table de marque, tu notes les buts et tu gères le chrono. Un match dure deux fois dix minutes."]],
           choices: [
             { fr: "Deux fois dix heures ? C'est long !", tr: "İki kere on saat mi? Çok uzun!", en: "Twice ten hours? That's long!", ok: false,
               fb: { fr: "Les enfants dormiraient sur le terrain 😴😄 ! Ce sont des MINUTES. Posez une question utile, par exemple sur la pause.", tr: "Çocuklar sahada uyurdu 😴😄! DAKİKA bunlar. Faydalı bir soru sorun, örneğin ara hakkında.", en: "The kids would fall asleep on the court 😴😄! It's MINUTES. Ask something useful, for example about the break." } },
             { fr: "D'accord. Et la pause entre les deux mi-temps dure combien de temps ?", tr: "Tamam. Peki iki devre arasındaki ara ne kadar sürüyor?", en: "OK. And how long is the break between the two halves?", ok: true, go: "d1" }
           ] },
      d1: { scene: { fr: "Karim : « Cinq minutes ! » Le match commence. Au tableau : Lions 5, Requins 4. Un petit joueur court vers la table.", tr: "Karim: « Beş dakika! » Maç başlıyor. Skor tabelasında: Aslanlar 5, Köpekbalıkları 4. Küçük bir oyuncu masaya koşuyor.", en: "Karim: « Five minutes! » The match starts. On the scoreboard: Lions 5, Sharks 4. A little player runs up to the table." },
           say: [["K", "On a marqué ! C'est combien, le score ?"]],
           choices: [
             { fr: "Les Lions ont 5 buts, et les Requins en ont 4 !", tr: "Aslanların 5 golü var, Köpekbalıklarının 4!", en: "The Lions have 5 goals, and the Sharks have 4!", ok: true, go: "e" },
             { fr: "Vous avez marqué, monsieur ? Bravo !", tr: "Gol mü attınız beyefendi? Bravo!", en: "You scored, sir? Well done!", ok: false,
               fb: { fr: "« Monsieur » a huit ans 😄 ! Avec un enfant, on dit « tu ». Et il veut le score : « les Lions ont 5 buts… ».", tr: "« Beyefendi » sekiz yaşında 😄! Çocukla « tu » denir. Ve skoru istiyor: « les Lions ont 5 buts… ».", en: "« Monsieur » is eight 😄! With a child, use « tu ». And he wants the score: « les Lions ont 5 buts… »." } },
             { fr: "Cinq buts pour les Requins, ils ont gagné l'année dernière.", tr: "Köpekbalıklarına beş gol, geçen yıl kazandılar.", en: "Five goals for the Sharks, they won last year.", ok: false,
               fb: { fr: "Oups, ce sont les Lions qui ont 5 buts 🦁 ! Lisez bien le tableau : « les Lions ont 5 buts, les Requins en ont 4 ».", tr: "Eyvah, 5 golü olan Aslanlar 🦁! Tabloyu iyi okuyun: « les Lions ont 5 buts, les Requins en ont 4 ».", en: "Oops, it's the Lions who have 5 goals 🦁! Read the board carefully: « les Lions ont 5 buts, les Requins en ont 4 »." } }
           ] },
      c2: { scene: { fr: "À la buvette, la bénévole Sophie vous explique : une crêpe, c'est 1 €, une boisson, 1,50 €. Une petite fille arrive.", tr: "Büfede gönüllü Sophie size anlatıyor: bir krep 1 €, bir içecek 1,50 €. Küçük bir kız geliyor.", en: "At the snack bar, the volunteer Sophie explains: a crêpe is 1 €, a drink 1.50 €. A little girl comes up." },
           say: [["K", "Bonjour ! Je voudrais une crêpe et un jus de pomme, s'il te plaît !"]],
           choices: [
             { fr: "Voilà ! Ça fait 2,50 €.", tr: "Buyur! 2,50 € ediyor.", en: "Here you go! That's 2.50 €.", ok: true, go: "d2" },
             { fr: "Voilà ! Ça fait 3 €.", tr: "Buyur! 3 € ediyor.", en: "Here you go! That's 3 €.", ok: false,
               fb: { fr: "1 € + 1,50 € = 2,50 € 🧮. Pas de bénéfice caché à la buvette 😄 !", tr: "1 € + 1,50 € = 2,50 € 🧮. Büfede gizli kâr yok 😄!", en: "1 € + 1.50 € = 2.50 € 🧮. No hidden profits at the snack bar 😄!" } }
           ] },
      d2: { say: [["K", "Oh non… j'ai seulement 2 €."]],
           choices: [
             { fr: "Ce n'est pas grave : prends la crêpe et un verre d'eau, c'est gratuit. Ça fait 1 €.", tr: "Önemli değil: krebi ve bir bardak su al, su bedava. 1 € ediyor.", en: "No problem: take the crêpe and a glass of water, it's free. That's 1 €.", ok: true, go: "e" },
             { fr: "Alors, prends juste le jus : ça fait 1,50 €.", tr: "O zaman sadece meyve suyunu al: 1,50 € ediyor.", en: "Then just take the juice: that's 1.50 €.", ok: true, go: "e" },
             { fr: "Désolée, vous n'avez pas assez d'argent, madame.", tr: "Üzgünüm hanımefendi, yeterli paranız yok.", en: "Sorry, madam, you don't have enough money.", ok: false,
               fb: { fr: "Elle a sept ans, pas soixante-dix 😄 ! Avec un enfant, « tu ». Et trouvez une solution : « prends la crêpe… ».", tr: "Yedi yaşında, yetmiş değil 😄! Çocukla « tu ». Ve bir çözüm bulun: « prends la crêpe… ».", en: "She's seven, not seventy 😄! With a child, « tu ». And find a solution: « prends la crêpe… »." } }
           ] },
      e: { scene: { fr: "En fin de matinée, un garçon est assis seul sur un banc. Il pleure.", tr: "Sabahın sonunda bir oğlan bankta tek başına oturuyor. Ağlıyor.", en: "Late in the morning, a boy is sitting alone on a bench. He's crying." },
           say: [["K", "On a perdu tous nos matchs…"]],
           choices: [
             { fr: "Bravo, vous avez perdu !", tr: "Bravo, kaybettiniz!", en: "Well done, you lost!", ok: false,
               fb: { fr: "Aïe, ce n'est pas le bon mot 😅 ! Consolez-le, avec « tu » : « ce n'est pas grave, tu as très bien joué ».", tr: "Ah, doğru kelime değil 😅! « tu » ile teselli edin: « ce n'est pas grave, tu as très bien joué ».", en: "Ouch, wrong word 😅! Comfort him, using « tu »: « ce n'est pas grave, tu as très bien joué »." } },
             { fr: "Ce n'est pas grave, tu as très bien joué ! Et tu vas progresser.", tr: "Önemli değil, çok iyi oynadın! Ve gelişeceksin.", en: "It doesn't matter, you played really well! And you'll get better.", ok: true, go: "f" },
             { fr: "Vous avez perdu ? C'est la vie, monsieur.", tr: "Kaybettiniz mi? Hayat bu, beyefendi.", en: "You lost? That's life, sir.", ok: false,
               fb: { fr: "Un peu froid pour un enfant qui pleure 🥺. Utilisez « tu » et soyez douce : « tu as très bien joué ! ».", tr: "Ağlayan bir çocuk için biraz soğuk 🥺. « tu » kullanın ve yumuşak olun: « tu as très bien joué ! ».", en: "A bit cold for a crying child 🥺. Use « tu » and be gentle: « tu as très bien joué ! »." } }
           ] },
      f: { say: [["K", "Merci… Et toi, tu joues au handball ?"]],
           choices: [
             { fr: "Oui ! Et j'ai aussi travaillé avec une équipe de handball en Turquie, comme kiné !", tr: "Evet! Ayrıca Türkiye'de bir hentbol takımıyla fizyoterapist olarak çalıştım!", en: "Yes! And I also worked with a handball team in Turkey, as a physio!", ok: true, go: "g" },
             { fr: "Non, je joue le handball.", tr: "Hayır, hentbolu çalıyorum.", en: "No, I play handball. (wrong preposition)", ok: false,
               fb: { fr: "« Non » puis « je joue » ? 🤔 Et pour un sport, on dit « jouer AU handball » (« jouer DE » = un instrument 🎸).", tr: "Önce « non » sonra « je joue » mu? 🤔 Ayrıca spor için « jouer AU handball » denir (« jouer DE » = bir enstrüman 🎸).", en: "« No » and then « I play »? 🤔 And for a sport it's « jouer AU handball » (« jouer DE » = an instrument 🎸)." } }
           ] },
      g: { scene: { fr: "Le garçon sourit enfin. C'est l'heure de la remise des médailles.", tr: "Oğlan sonunda gülümsüyor. Madalya töreni zamanı.", en: "The boy finally smiles. It's time for the medal ceremony." },
           say: [["M", "Tu peux appeler toutes les équipes au micro, s'il te plaît ?"]],
           choices: [
             { fr: "« Toutes les équipes, viens au centre du terrain ! »", tr: "« Bütün takımlar, sahanın ortasına gel! »", en: "« All teams, come (singular) to the centre of the court! »", ok: false,
               fb: { fr: "Pour beaucoup de personnes, on utilise « vous » : « venez » 📣😉.", tr: "Çok kişi için « vous » kullanılır: « venez » 📣😉.", en: "For lots of people, use « vous »: « venez » 📣😉." } },
             { fr: "Bien sûr ! « Toutes les équipes, venez au centre du terrain, s'il vous plaît ! »", tr: "Tabii! « Bütün takımlar, lütfen sahanın ortasına gelin! »", en: "Of course! « All teams, please come to the centre of the court! »", ok: true, go: "h" }
           ] },
      h: { say: [["M", "Merci pour ton aide aujourd'hui ! Tu reviendras pour le prochain tournoi, en mars ?"]],
           choices: [
             { fr: "Avec plaisir, je serai là !", tr: "Memnuniyetle, orada olacağım!", en: "With pleasure, I'll be there!", ok: true, go: "fin" },
             { fr: "Je ne sais pas encore, mais j'aimerais bien.", tr: "Henüz bilmiyorum ama çok isterim.", en: "I don't know yet, but I'd love to.", ok: true, go: "fin" },
             { fr: "Oui, je suis revenue en mars.", tr: "Evet, martta geri döndüm.", en: "Yes, I came back in March.", ok: false,
               fb: { fr: "Mars, c'est dans le futur 🔮 ! On utilise le futur : « je serai là » ou « je reviendrai ».", tr: "Mart gelecekte 🔮! Gelecek zaman kullanılır: « je serai là » ya da « je reviendrai ».", en: "March is in the future 🔮! Use the future tense: « je serai là » or « je reviendrai »." } }
           ] },
      fin: { end: "win", say: [["M", "Super ! Merci encore, et à bientôt au club !"]],
             scene: { fr: "Les enfants repartent avec leurs médailles. Une belle journée de bénévolat… et en français ! 🤾🏅🎉", tr: "Çocuklar madalyalarıyla ayrılıyor. Güzel bir gönüllülük günü… hem de Fransızca! 🤾🏅🎉", en: "The children head home with their medals. A great day of volunteering… in French! 🤾🏅🎉" } }
    } },

  /* ───────────── 25. Des frais à la banque ───────────── */
  { id: "av-frais-banque", level: "A2", emoji: "🏦",
    t: { fr: "Des frais à la banque", tr: "Bankada masraflar", en: "Bank charges" },
    goal: { fr: "Contestez poliment des frais de carte sur votre compte et demandez un remboursement.", tr: "Hesabınızdaki kart ücretine kibarca itiraz edin ve iade isteyin.", en: "Politely dispute a card fee on your account and ask for a refund." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Sur votre relevé, vous voyez « Frais de carte : 45 € ». Mais à l'ouverture du compte, on vous a dit : la carte est gratuite la première année. Vous allez à l'agence.", tr: "Hesap özetinizde « Kart ücreti: 45 € » görüyorsunuz. Ama hesabı açarken kartın ilk yıl ücretsiz olduğu söylenmişti. Şubeye gidiyorsunuz.", en: "On your statement you see « Card fee: 45 € ». But when you opened the account, you were told the card is free for the first year. You go to the branch." },
           say: [["F", "Bonjour madame, je peux vous aider ?"]],
           choices: [
             { fr: "Bonjour, je voudrais faire une réclame.", tr: "Merhaba, bir reklam yapmak istiyorum.", en: "Hello, I'd like to make an advert.", ok: false,
               fb: { fr: "« Une réclame » = une vieille publicité 📺😄 ! Pour un problème, on fait « une réclamation ».", tr: "« Une réclame » = eski usul reklam 📺😄! Bir sorun için « une réclamation » yapılır.", en: "« Une réclame » = an old-fashioned advert 📺😄! For a problem, you make « une réclamation »." } },
             { fr: "Bonjour, je voudrais faire une réclamation au sujet de mon compte.", tr: "Merhaba, hesabımla ilgili bir şikâyette bulunmak istiyorum.", en: "Hello, I'd like to make a complaint about my account.", ok: true, go: "b" },
             { fr: "Bonjour, votre banque m'a volé 45 € !", tr: "Merhaba, bankanız 45 €'mu çaldı!", en: "Hello, your bank stole 45 € from me!", ok: false,
               fb: { fr: "On comprend la colère 😤, mais restez polie, c'est plus efficace : « je voudrais faire une réclamation ».", tr: "Öfkenizi anlıyoruz 😤, ama kibar kalın, daha etkili olur: « je voudrais faire une réclamation ».", en: "We get the anger 😤, but stay polite, it works better: « je voudrais faire une réclamation »." } }
           ] },
      b: { say: [["F", "Bien sûr. Vous avez rendez-vous avec votre conseiller ?"]],
           choices: [
             { fr: "Non, je n'ai pas de rendez-vous. Est-ce que je peux attendre ?", tr: "Hayır, randevum yok. Bekleyebilir miyim?", en: "No, I don't have an appointment. Can I wait?", ok: true, go: "c1" },
             { fr: "Oui, j'ai rendez-vous à 14 h avec Monsieur Bernard.", tr: "Evet, saat 14'te Monsieur Bernard ile randevum var.", en: "Yes, I have an appointment at 2 p.m. with Monsieur Bernard.", ok: true, go: "c2" },
             { fr: "Non, je n'ai pas de conseil.", tr: "Hayır, tavsiyem yok.", en: "No, I don't have any advice.", ok: false,
               fb: { fr: "Elle ne demande pas un conseil, mais un rendez-vous 📅😉. Répondez « oui, j'ai rendez-vous… » ou « non, je n'ai pas de rendez-vous ».", tr: "Tavsiye değil, randevu soruyor 📅😉. « Oui, j'ai rendez-vous… » ya da « non, je n'ai pas de rendez-vous » deyin.", en: "She's asking about an appointment, not advice 📅😉. Answer « oui, j'ai rendez-vous… » or « non, je n'ai pas de rendez-vous »." } }
           ] },
      c1: { say: [["F", "Monsieur Bernard sera libre dans dix minutes. Vous pouvez patienter ici."]],
           choices: [
             { fr: "Patienter ? Mais je ne suis pas malade !", tr: "Hasta gibi beklemek mi? Ama hasta değilim!", en: "Be a patient? But I'm not ill!", ok: false,
               fb: { fr: "« Patienter » = attendre, pas être une patiente à l'hôpital 🏥😄. Dites « très bien, je vais patienter, merci ».", tr: "« Patienter » = beklemek, hastanede hasta olmak değil 🏥😄. « Très bien, je vais patienter, merci » deyin.", en: "« Patienter » = to wait, not to be a hospital patient 🏥😄. Say « très bien, je vais patienter, merci »." } },
             { fr: "Très bien, je vais patienter. Merci.", tr: "Çok iyi, bekleyeceğim. Teşekkürler.", en: "Very well, I'll wait. Thank you.", ok: true, go: "d" }
           ] },
      c2: { say: [["F", "Ah oui, je vous vois sur son agenda. Il arrive tout de suite."]],
           choices: [
             { fr: "Vous me voyez ? Où ça ?", tr: "Beni görüyor musunuz? Nerede?", en: "You can see me? Where?", ok: false,
               fb: { fr: "Elle vous voit dans l'agenda, pas par la fenêtre 😄📅 ! Dites simplement « merci beaucoup ».", tr: "Sizi pencereden değil, ajandada görüyor 😄📅! Sadece « merci beaucoup » deyin.", en: "She sees you in the diary, not through the window 😄📅! Just say « merci beaucoup »." } },
             { fr: "Merci beaucoup.", tr: "Çok teşekkürler.", en: "Thank you very much.", ok: true, go: "d" }
           ] },
      d: { scene: { fr: "Monsieur Bernard vous fait entrer dans son bureau.", tr: "Monsieur Bernard sizi ofisine alıyor.", en: "Monsieur Bernard shows you into his office." },
           say: [["M", "Bonjour madame, asseyez-vous. Qu'est-ce qui se passe ?"]],
           choices: [
             { fr: "Sur mon relevé, j'ai vu 45 € de frais de carte. Pourtant, on m'a dit que la carte était gratuite la première année.", tr: "Hesap özetimde 45 € kart ücreti gördüm. Oysa kartın ilk yıl ücretsiz olduğu söylenmişti.", en: "On my statement I saw a 45 € card fee. But I was told the card was free for the first year.", ok: true, go: "e" },
             { fr: "J'ai vu 45 € de frais, alors je voudrais 45 € de cadeaux.", tr: "45 € masraf gördüm, o yüzden 45 €'luk hediye istiyorum.", en: "I saw 45 € of fees, so I'd like 45 € of presents.", ok: false,
               fb: { fr: "Ce serait bien 🎁😄, mais expliquez d'abord le problème : « on m'a dit que la carte était gratuite la première année ».", tr: "Güzel olurdu 🎁😄, ama önce sorunu anlatın: « on m'a dit que la carte était gratuite la première année ».", en: "That would be nice 🎁😄, but explain the problem first: « on m'a dit que la carte était gratuite la première année »." } },
             { fr: "Je suis assise, merci. Ça va, et vous ?", tr: "Oturdum, teşekkürler. İyiyim, ya siz?", en: "I'm sitting, thanks. I'm fine, and you?", ok: false,
               fb: { fr: "« Qu'est-ce qui se passe ? » = quel est le problème ? 😉 Parlez des 45 € de frais.", tr: "« Qu'est-ce qui se passe ? » = sorun ne? 😉 45 €'luk masraftan bahsedin.", en: "« Qu'est-ce qui se passe ? » = what's the problem? 😉 Talk about the 45 € fee." } }
           ] },
      e: { say: [["M", "Je regarde… Vous avez ouvert votre compte quand ?"]],
           choices: [
             { fr: "Je l'ai ouvert depuis huit mois.", tr: "Onu sekiz aydır açtım.", en: "I opened it since eight months.", ok: false,
               fb: { fr: "Avec un passé composé, on dit « il y a » : « je l'ai ouvert il y a huit mois » 😉.", tr: "Passé composé ile « il y a » denir: « je l'ai ouvert il y a huit mois » 😉.", en: "With the passé composé, use « il y a »: « je l'ai ouvert il y a huit mois » 😉." } },
             { fr: "Je l'ai ouvert en mars, il y a huit mois.", tr: "Martta açtım, sekiz ay önce.", en: "I opened it in March, eight months ago.", ok: true, go: "f" },
             { fr: "Je l'ouvre en mars.", tr: "Martta açıyorum.", en: "I open it in March.", ok: false,
               fb: { fr: "C'est une action passée, donc passé composé : « je l'ai ouvert en mars » ⏪.", tr: "Bu geçmişte olmuş bir şey, yani passé composé: « je l'ai ouvert en mars » ⏪.", en: "It's a past action, so passé composé: « je l'ai ouvert en mars » ⏪." } }
           ] },
      f: { say: [["M", "Vous avez raison, c'est une erreur. Je suis désolé. Je vais vous rembourser les 45 €."]],
           choices: [
             { fr: "Ce n'est pas grave, gardez les 45 €.", tr: "Önemli değil, 45 € sizde kalsın.", en: "Never mind, keep the 45 €.", ok: false,
               fb: { fr: "Trop généreuse 💸😄 ! C'est VOTRE argent. Dites plutôt « merci beaucoup, quand est-ce que l'argent sera sur mon compte ? ».", tr: "Fazla cömert 💸😄! Bu SİZİN paranız. Bunun yerine « merci beaucoup, quand est-ce que l'argent sera sur mon compte ? » deyin.", en: "Too generous 💸😄! It's YOUR money. Say instead « merci beaucoup, quand est-ce que l'argent sera sur mon compte ? »." } },
             { fr: "Merci beaucoup. Quand est-ce que l'argent sera sur mon compte ?", tr: "Çok teşekkürler. Para hesabıma ne zaman geçecek?", en: "Thank you very much. When will the money be in my account?", ok: true, go: "g" },
             { fr: "Merci, je vous rembourse aussi.", tr: "Teşekkürler, ben de size geri ödüyorum.", en: "Thanks, I'll pay you back too.", ok: false,
               fb: { fr: "Personne ne doit rien à la banque ici 😄 ! C'est LUI qui rembourse. Demandez « quand est-ce que l'argent sera sur mon compte ? ».", tr: "Burada kimsenin bankaya borcu yok 😄! Geri ödeyen O. « Quand est-ce que l'argent sera sur mon compte ? » diye sorun.", en: "Nobody owes the bank anything here 😄! HE's refunding you. Ask « quand est-ce que l'argent sera sur mon compte ? »." } }
           ] },
      g: { say: [["M", "Dans trois jours ouvrés, au maximum. Vous voulez une confirmation par écrit ?"]],
           choices: [
             { fr: "Oui, pourriez-vous m'envoyer un e-mail, s'il vous plaît ?", tr: "Evet, bana bir e-posta gönderebilir misiniz, lütfen?", en: "Yes, could you send me an email, please?", ok: true, go: "h" },
             { fr: "Non merci, je vous fais confiance.", tr: "Hayır teşekkürler, size güveniyorum.", en: "No thanks, I trust you.", ok: true, go: "h" },
             { fr: "Oui, écrivez-moi une carte postale.", tr: "Evet, bana bir kartpostal yazın.", en: "Yes, write me a postcard.", ok: false,
               fb: { fr: "Une carte postale de la banque, avec une jolie plage 🏖️😄 ? Demandez plutôt « un e-mail ».", tr: "Bankadan güzel bir plaj fotoğraflı kartpostal mı 🏖️😄? Bunun yerine « un e-mail » isteyin.", en: "A postcard from the bank, with a lovely beach 🏖️😄? Ask for « un e-mail » instead." } }
           ] },
      h: { say: [["M", "C'est noté. Autre chose ? Vous avez d'autres frais sur votre compte ?"]],
           choices: [
             { fr: "Oui, il fait frais aujourd'hui !", tr: "Evet, bugün hava serin!", en: "Yes, it's chilly today!", ok: false,
               fb: { fr: "Ici, « frais » = l'argent que la banque prend 💶, pas la météo 🌬️😄. Répondez « non, c'est tout, merci ».", tr: "Burada « frais » = bankanın aldığı para 💶, hava durumu değil 🌬️😄. « Non, c'est tout, merci » deyin.", en: "Here « frais » = money the bank takes 💶, not the weather 🌬️😄. Answer « non, c'est tout, merci »." } },
             { fr: "Non, c'est tout. Merci beaucoup pour votre aide !", tr: "Hayır, hepsi bu. Yardımınız için çok teşekkürler!", en: "No, that's all. Thank you so much for your help!", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["M", "Je vous en prie. Bonne journée, madame !"]],
             scene: { fr: "Vous sortez de la banque avec le sourire : 45 € vont revenir sur votre compte. Réclamation réussie, en français ! 🏦🎉", tr: "Bankadan gülümseyerek çıkıyorsunuz: 45 € hesabınıza geri dönecek. Fransızca şikâyet başarılı! 🏦🎉", en: "You leave the bank smiling: 45 € is coming back to your account. Complaint sorted, in French! 🏦🎉" } }
    } }
);
