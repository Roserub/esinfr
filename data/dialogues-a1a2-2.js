/* More real-life dialogues (A1–A2), played line by line with French audio.
   Lines: "A|français|Türkçe|English" or "B|…". In role-play, the learner says the "me" side. */
(function () {
  const L = s => s.trim().split("\n").map(l => { const [who, fr, tr, en] = l.split("|").map(x => x.trim()); return { who, fr, tr, en }; });
  const D = (id, level, fr, tr, en, roles, me, lines) => ({ id, level, t: { fr, tr, en }, roles, me, lines: L(lines) });

  window.DIALOGUES = window.DIALOGUES || [];
  window.DIALOGUES.push(
    D("d-billet", "A1", "Acheter un billet de train au guichet", "Gişeden tren bileti almak", "Buying a train ticket at the counter", { A: "Guichetier", B: "Esin" }, "B", `
A|Bonjour madame, je vous écoute.|Merhaba hanımefendi, buyurun.|Hello, madam, how can I help?
B|Bonjour. Je voudrais un billet pour Lyon, s'il vous plaît.|Merhaba. Lyon için bir bilet istiyorum, lütfen.|Hello. I'd like a ticket to Lyon, please.
A|Pour aujourd'hui ?|Bugün için mi?|For today?
B|Non, pour samedi matin.|Hayır, cumartesi sabahı için.|No, for Saturday morning.
A|Il y a un train à 8 h 12 et un train à 10 h 45.|8.12'de bir tren var, bir de 10.45'te.|There's a train at 8:12 and one at 10:45.
B|Le train de 10 h 45, s'il vous plaît. C'est direct ?|10.45 treni, lütfen. Aktarmasız mı?|The 10:45 train, please. Is it direct?
A|Oui, il arrive à Lyon à 12 h 30. Aller simple ou aller-retour ?|Evet, Lyon'a 12.30'da varıyor. Tek yön mü, gidiş-dönüş mü?|Yes, it arrives in Lyon at 12:30. Single or return?
B|Aller-retour. Je rentre dimanche soir.|Gidiş-dönüş. Pazar akşamı dönüyorum.|Return. I'm coming back on Sunday evening.
A|Dimanche, il y a un train à 18 h 20. Ça vous va ?|Pazar günü 18.20'de bir tren var. Size uyar mı?|On Sunday there's a train at 6:20 pm. Does that suit you?
B|Oui, très bien. Il y a une réduction pour les jeunes ?|Evet, çok iyi. Gençler için indirim var mı?|Yes, very good. Is there a discount for young people?
A|Oui, avec la carte Avantage Jeune. Sinon, c'est 68 euros aller-retour.|Evet, Avantage Jeune kartıyla. Yoksa gidiş-dönüş 68 euro.|Yes, with the Avantage Jeune card. Otherwise it's 68 euros return.
B|Je n'ai pas la carte. Je paie 68 euros par carte bancaire. Le train part de quelle voie ?|Kartım yok. 68 euroyu banka kartıyla ödüyorum. Tren hangi perondan kalkıyor?|I don't have the card. I'll pay the 68 euros by bank card. Which platform does the train leave from?
A|La voie est affichée 20 minutes avant le départ. Bon voyage !|Peron, kalkıştan 20 dakika önce ekranda gösterilir. İyi yolculuklar!|The platform is shown 20 minutes before departure. Have a good trip!`),

    D("d-supermarche", "A1", "Au supermarché : où est… ?", "Süpermarkette: … nerede?", "At the supermarket: where is…?", { A: "Employé", B: "Esin" }, "B", `
B|Excusez-moi, monsieur. Où est le riz, s'il vous plaît ?|Affedersiniz beyefendi. Pirinç nerede, lütfen?|Excuse me, sir. Where's the rice, please?
A|Le riz ? Allée 5, à côté des pâtes.|Pirinç mi? 5. reyon, makarnaların yanında.|Rice? Aisle 5, next to the pasta.
B|Merci. Et vous avez du bulgur ?|Teşekkürler. Bulgurunuz var mı?|Thanks. And do you have bulgur?
A|Oui, il est au rayon « produits du monde », au fond du magasin.|Evet, "dünya ürünleri" reyonunda, mağazanın en arkasında.|Yes, it's in the "world foods" section, at the back of the shop.
B|Super ! Et les yaourts nature, ils sont où ?|Süper! Sade yoğurtlar nerede peki?|Great! And where are the plain yogurts?
A|Au rayon frais, à gauche, après les fromages.|Soğuk reyonda, solda, peynirlerden sonra.|In the chilled section, on the left, after the cheeses.
B|Je cherche un grand pot. Vous avez des pots de 1 kilo ?|Büyük bir kap arıyorum. 1 kiloluk kabınız var mı?|I'm looking for a big pot. Do you have 1-kilo pots?
A|Non, désolé. Il y a seulement des packs de 4 ou des pots de 500 grammes.|Hayır, üzgünüm. Sadece 4'lü paketler ya da 500 gramlık kaplar var.|No, sorry. There are only packs of 4 or 500-gram pots.
B|Ce n'est pas grave. Je prends deux pots de 500 grammes.|Önemli değil. İki tane 500 gramlık alırım.|No problem. I'll take two 500-gram pots.
A|Vous cherchez autre chose ?|Başka bir şey arıyor musunuz?|Are you looking for anything else?
B|Oui, les sacs, ils sont où ? Je n'ai pas de sac.|Evet, poşetler nerede? Poşetim yok.|Yes, where are the bags? I don't have a bag.
A|À la caisse. Ils coûtent 20 centimes.|Kasada. Tanesi 20 sent.|At the checkout. They cost 20 cents.
B|Merci beaucoup pour votre aide !|Yardımınız için çok teşekkürler!|Thank you very much for your help!
A|Je vous en prie. Bonne journée !|Rica ederim. İyi günler!|You're welcome. Have a nice day!`),

    D("d-famille", "A1", "Parler de sa famille avec une collègue", "Bir iş arkadaşıyla aileden bahsetmek", "Talking about your family with a colleague", { A: "Sophie", B: "Esin" }, "B", `
A|Esin, c'est qui sur la photo ?|Esin, fotoğraftaki kim?|Esin, who's in the photo?
B|C'est ma famille, à Izmir. Là, c'est mon père et ma mère.|Bu benim ailem, İzmir'de. Şurada babam ve annem.|That's my family, in Izmir. There, that's my dad and my mum.
A|Ils ont l'air jeunes ! Et la fille à côté ?|Genç görünüyorlar! Ya yanlarındaki kız?|They look young! And the girl next to them?
B|C'est ma sœur, Elif. Elle a 19 ans. Elle est étudiante.|Bu kız kardeşim Elif. 19 yaşında. Öğrenci.|That's my sister, Elif. She's 19. She's a student.
A|Elle étudie quoi ?|Ne okuyor?|What does she study?
B|L'architecture. Et voici mon petit frère, Can. Il a 12 ans.|Mimarlık. Bu da küçük erkek kardeşim Can. 12 yaşında.|Architecture. And this is my little brother, Can. He's 12.
A|Il est mignon ! Il joue au handball, comme toi ?|Çok tatlı! O da senin gibi hentbol oynuyor mu?|He's cute! Does he play handball, like you?
B|Non, lui, il préfère le foot. Et toi, tu as des frères et sœurs ?|Hayır, o futbolu tercih ediyor. Ya senin kardeşlerin var mı?|No, he prefers football. And you, do you have brothers and sisters?
A|J'ai un frère. Il habite à Bordeaux avec sa femme et leurs deux enfants.|Bir erkek kardeşim var. Karısı ve iki çocuklarıyla Bordeaux'da oturuyor.|I have a brother. He lives in Bordeaux with his wife and their two children.
B|Alors tu es tata !|O zaman halasın!|So you're an auntie!
A|Oui, et j'adore ça ! Ta famille te manque ?|Evet, ve buna bayılıyorum! Aileni özlüyor musun?|Yes, and I love it! Do you miss your family?
B|Oui, beaucoup. Mais je vais les appeler ce soir en visio.|Evet, çok. Ama bu akşam onları görüntülü arayacağım.|Yes, a lot. But I'm going to video call them tonight.`),

    D("d-pizza", "A1", "Commander une pizza au téléphone", "Telefonla pizza sipariş etmek", "Ordering a pizza by phone", { A: "Pizzeria", B: "Esin" }, "B", `
A|Pizzeria Bella Napoli, bonsoir !|Pizzeria Bella Napoli, iyi akşamlar!|Bella Napoli pizzeria, good evening!
B|Bonsoir. Je voudrais commander une pizza, s'il vous plaît.|İyi akşamlar. Bir pizza sipariş etmek istiyorum, lütfen.|Good evening. I'd like to order a pizza, please.
A|C'est à emporter ou en livraison ?|Gel-al mı, eve teslim mi?|Is it for collection or delivery?
B|En livraison, s'il vous plaît.|Eve teslim, lütfen.|Delivery, please.
A|Très bien. Qu'est-ce que vous prenez ?|Çok iyi. Ne alıyorsunuz?|Very good. What would you like?
B|Une margherita, taille moyenne, avec des champignons en plus.|Bir margarita, orta boy, ekstra mantarlı.|A margherita, medium size, with extra mushrooms.
A|Une margherita moyenne avec champignons. Et avec ça ?|Orta boy mantarlı margarita. Yanına başka?|A medium margherita with mushrooms. Anything else?
B|Une bouteille d'eau gazeuse. C'est combien en tout ?|Bir şişe maden suyu. Toplam ne kadar?|A bottle of sparkling water. How much is it altogether?
A|Ça fait 14 euros 50. C'est à quelle adresse ?|14 euro 50 tutuyor. Adres neresi?|That's 14 euros 50. What's the address?
B|12, rue Victor-Hugo, au troisième étage. Le code de la porte, c'est 4721.|Victor-Hugo Sokağı 12, üçüncü kat. Kapı şifresi 4721.|12 rue Victor-Hugo, third floor. The door code is 4721.
A|Parfait. Vous allez être livrée dans 30 minutes environ.|Mükemmel. Yaklaşık 30 dakika içinde teslim edilecek.|Perfect. It'll be delivered in about 30 minutes.
B|Super. Je peux payer en espèces ?|Süper. Nakit ödeyebilir miyim?|Great. Can I pay in cash?
A|Oui, bien sûr. Le livreur a de la monnaie. Bonne soirée !|Evet, tabii. Kuryenin bozuk parası var. İyi akşamlar!|Yes, of course. The delivery driver has change. Have a nice evening!`),

    D("d-sortie", "A1", "Organiser une sortie avec une amie", "Bir arkadaşla dışarı çıkmayı planlamak", "Planning an outing with a friend", { A: "Julie", B: "Esin" }, "B", `
A|Salut Esin ! Tu fais quoi samedi ?|Selam Esin! Cumartesi ne yapıyorsun?|Hi Esin! What are you doing on Saturday?
B|Salut ! Rien de spécial. Pourquoi ?|Selam! Özel bir şey yok. Neden?|Hi! Nothing special. Why?
A|Il y a un concert gratuit au parc. Tu veux venir ?|Parkta ücretsiz bir konser var. Gelmek ister misin?|There's a free concert in the park. Do you want to come?
B|Oui, avec plaisir ! C'est à quelle heure ?|Evet, memnuniyetle! Saat kaçta?|Yes, I'd love to! What time is it?
A|Ça commence à 20 h. On mange ensemble avant ?|20'de başlıyor. Önce birlikte yemek yiyelim mi?|It starts at 8 pm. Shall we eat together before?
B|Bonne idée ! Tu connais un bon restaurant ?|İyi fikir! İyi bir restoran biliyor musun?|Good idea! Do you know a good restaurant?
A|Oui, il y a un petit restaurant libanais près du parc. Ce n'est pas cher.|Evet, parkın yakınında küçük bir Lübnan restoranı var. Pahalı değil.|Yes, there's a little Lebanese restaurant near the park. It's not expensive.
B|Parfait, j'adore la cuisine libanaise. On se retrouve où ?|Mükemmel, Lübnan mutfağına bayılırım. Nerede buluşuyoruz?|Perfect, I love Lebanese food. Where shall we meet?
A|Devant la station de métro, à 18 h 30 ?|Metro istasyonunun önünde, 18.30'da?|In front of the metro station, at 6:30?
B|D'accord. Je vais demander à Léa aussi, elle va adorer.|Tamam. Léa'ya da soracağım, bayılacak.|OK. I'm going to ask Léa too, she'll love it.
A|Super, plus on est de fous, plus on rit !|Süper, ne kadar kalabalık o kadar eğlenceli!|Great, the more the merrier!
B|Et s'il pleut ?|Ya yağmur yağarsa?|And if it rains?
A|Alors on va au cinéma ! Je t'envoie un message samedi matin.|O zaman sinemaya gideriz! Cumartesi sabahı sana mesaj atarım.|Then we'll go to the cinema! I'll text you on Saturday morning.
B|Génial. À samedi !|Harika. Cumartesi görüşürüz!|Great. See you on Saturday!`),

    D("d-mairie", "A2", "À la mairie", "Belediyede", "At the town hall", { A: "Agent d'accueil", B: "Esin" }, "B", `
A|Bonjour madame. Vous avez pris un ticket ?|Merhaba hanımefendi. Sıra numarası aldınız mı?|Hello, madam. Did you take a ticket?
B|Oui, le numéro 42. Je voudrais faire légaliser ma signature, s'il vous plaît. C'est pour un document turc.|Evet, 42 numara. İmzamı onaylatmak istiyorum, lütfen. Türk bir belge için.|Yes, number 42. I'd like to have my signature certified, please. It's for a Turkish document.
A|Très bien. Vous avez apporté une pièce d'identité ?|Çok iyi. Kimlik belgesi getirdiniz mi?|Very good. Did you bring some ID?
B|Oui, voici mon titre de séjour. Et le document, je l'ai déjà signé hier soir.|Evet, işte oturma iznim. Belgeyi de dün akşam imzaladım bile.|Yes, here's my residence permit. And I already signed the document last night.
A|Ah, c'est dommage : vous devez signer devant moi. Vous auriez un autre exemplaire ?|Ah, yazık: önümde imzalamanız gerekiyor. Başka bir nüshanız var mı acaba?|Ah, that's a shame: you have to sign in front of me. Would you have another copy?
B|Je l'ai sur mon téléphone. Je pourrais l'imprimer quelque part ?|Telefonumda var. Bir yerde yazdırabilir miyim?|I've got it on my phone. Could I print it somewhere?
A|À la médiathèque, juste en face. C'est 10 centimes la page.|Hemen karşıdaki kütüphanede. Sayfası 10 sent.|At the library, just opposite. It's 10 cents a page.
B|Parfait. Et la légalisation, c'est payant ?|Mükemmel. İmza onayı ücretli mi peki?|Perfect. And is there a fee for the certification?
A|Non, c'est gratuit. Mais attention, nous fermons à 17 h aujourd'hui.|Hayır, ücretsiz. Ama dikkat, bugün 17'de kapatıyoruz.|No, it's free. But be careful, we close at 5 pm today.
B|Je reviendrai dans 15 minutes. Je devrai reprendre un ticket ?|15 dakikaya dönerim. Yeniden numara almam gerekecek mi?|I'll be back in 15 minutes. Will I have to take a new ticket?
A|Non, venez directement à mon guichet.|Hayır, doğrudan benim gişeme gelin.|No, come straight to my desk.
B|Merci ! Une dernière question : j'ai emménagé le mois dernier. Je dois déclarer mon arrivée à la mairie ?|Teşekkürler! Son bir soru: geçen ay taşındım. Geldiğimi belediyeye bildirmem gerekiyor mu?|Thanks! One last question: I moved here last month. Do I have to register my arrival at the town hall?
A|Ce n'est pas obligatoire en France. Mais vous pouvez vous inscrire à la lettre d'information de la ville.|Fransa'da zorunlu değil. Ama şehrin e-bültenine kaydolabilirsiniz.|It's not compulsory in France. But you can sign up for the town's newsletter.
B|Ah, très bien. À tout de suite, alors !|Ah, çok iyi. O zaman birazdan görüşürüz!|Oh, great. See you in a minute, then!`),

    D("d-malade", "A2", "Rendre visite à une amie malade", "Hasta bir arkadaşı ziyaret etmek", "Visiting a sick friend", { A: "Inès", B: "Esin" }, "B", `
B|Coucou Inès ! Je t'ai apporté de la soupe et des clémentines.|Selam İnès! Sana çorba ve mandalina getirdim.|Hi Inès! I've brought you some soup and clementines.
A|Oh, c'est adorable, merci ! Entre, mais ne t'approche pas trop, je suis contagieuse.|Ah, çok tatlısın, teşekkürler! Gir, ama fazla yaklaşma, bulaşıcıyım.|Oh, that's so sweet, thanks! Come in, but don't come too close, I'm contagious.
B|Qu'est-ce que tu as eu, exactement ?|Tam olarak neyin vardı?|What did you have, exactly?
A|La grippe. Lundi, j'avais 39 de fièvre et je ne pouvais pas me lever.|Grip. Pazartesi 39 derece ateşim vardı ve kalkamıyordum.|The flu. On Monday I had a temperature of 39 and I couldn't get up.
B|Ma pauvre ! Tu es allée chez le médecin ?|Zavallı kızım! Doktora gittin mi?|You poor thing! Did you go to the doctor?
A|Oui, mardi. Il m'a donné un arrêt de travail jusqu'à vendredi.|Evet, salı günü. Cumaya kadar rapor verdi.|Yes, on Tuesday. He signed me off work until Friday.
B|Et aujourd'hui, ça va mieux ?|Bugün daha iyi misin?|And today, are you feeling better?
A|Un peu. La fièvre est partie, mais je tousse encore et je suis épuisée.|Biraz. Ateş düştü ama hâlâ öksürüyorum ve bitkinim.|A bit. The fever's gone, but I'm still coughing and I'm exhausted.
B|Tu bois assez ? Il faut boire beaucoup d'eau et dormir.|Yeterince sıvı alıyor musun? Bol su içip uyuman lazım.|Are you drinking enough? You need to drink lots of water and sleep.
A|Oui, oui, docteur ! Tu parles comme ma mère.|Evet, evet, doktor hanım! Annem gibi konuşuyorsun.|Yes, yes, doctor! You sound like my mum.
B|C'est le métier qui parle ! Je peux faire des courses pour toi demain, si tu veux.|Meslek konuşuyor! İstersen yarın senin için alışveriş yapabilirim.|That's my job talking! I can do some shopping for you tomorrow, if you like.
A|Ce serait super. J'ai besoin de pain et de mouchoirs.|Süper olur. Ekmeğe ve mendile ihtiyacım var.|That would be great. I need bread and tissues.
B|Pas de problème. Je passerai vers 18 h. Repose-toi bien !|Sorun değil. 18 gibi uğrarım. İyice dinlen!|No problem. I'll drop by around 6 pm. Get plenty of rest!
A|Merci, Esin. Tu es une vraie amie.|Teşekkürler Esin. Gerçek bir dostsun.|Thanks, Esin. You're a true friend.`),

    D("d-bibliotheque", "A2", "S'inscrire à la bibliothèque", "Kütüphaneye üye olmak", "Joining the library", { A: "Bibliothécaire", B: "Esin" }, "B", `
B|Bonjour. Je voudrais m'inscrire à la bibliothèque, s'il vous plaît.|Merhaba. Kütüphaneye üye olmak istiyorum, lütfen.|Hello. I'd like to join the library, please.
A|Bien sûr. Vous habitez dans la commune ?|Tabii. Bu belediye sınırları içinde mi oturuyorsunuz?|Of course. Do you live in the town?
B|Oui, depuis deux mois. J'ai apporté un justificatif de domicile.|Evet, iki aydır. İkametgâh belgesi getirdim.|Yes, for two months. I've brought proof of address.
A|Parfait. L'inscription est gratuite pour les habitants. Vous pourrez emprunter 10 documents pendant 3 semaines.|Mükemmel. Üyelik burada oturanlar için ücretsiz. 3 haftalığına 10 materyal ödünç alabileceksiniz.|Perfect. Membership is free for residents. You'll be able to borrow 10 items for 3 weeks.
B|Super. Est-ce que vous avez des livres pour apprendre le français ?|Süper. Fransızca öğrenmek için kitaplarınız var mı?|Great. Do you have books for learning French?
A|Oui, au premier étage, il y a un espace « Français langue étrangère », avec des romans en français facile.|Evet, birinci katta "Yabancı dil olarak Fransızca" bölümü var, kolay Fransızcayla yazılmış romanlarla birlikte.|Yes, on the first floor there's a "French as a foreign language" area, with novels in easy French.
B|C'est exactement ce que je cherchais ! Et vous avez des livres en turc ?|Tam da aradığım şey! Türkçe kitaplarınız da var mı?|That's exactly what I was looking for! And do you have books in Turkish?
A|Quelques-uns, oui. Et si un livre n'est pas là, vous pouvez le réserver en ligne.|Birkaç tane, evet. Bir kitap burada yoksa internetten ayırtabilirsiniz.|A few, yes. And if a book isn't here, you can reserve it online.
B|D'accord. Je pourrais aussi utiliser les ordinateurs ?|Tamam. Bilgisayarları da kullanabilir miyim?|OK. Could I use the computers too?
A|Oui, avec votre carte, vous avez droit à 2 heures par jour. Le wifi est gratuit aussi.|Evet, kartınızla günde 2 saat hakkınız var. Wifi de ücretsiz.|Yes, with your card you get 2 hours a day. The wifi is free too.
B|Génial. À Izmir, j'allais souvent à la bibliothèque pour réviser mes examens.|Harika. İzmir'de sınavlarıma çalışmak için sık sık kütüphaneye giderdim.|Brilliant. In Izmir I often went to the library to study for my exams.
A|Alors vous allez vous sentir chez vous ici ! Remplissez juste ce formulaire, et voilà votre carte.|O zaman burada kendinizi evinizde hissedeceksiniz! Sadece bu formu doldurun, işte kartınız.|Then you'll feel at home here! Just fill in this form, and here's your card.
B|Merci beaucoup. Vous êtes ouverts le dimanche ?|Çok teşekkürler. Pazar günleri açık mısınız?|Thank you very much. Are you open on Sundays?
A|Oui, de 14 h à 18 h. Bonne lecture !|Evet, 14'ten 18'e kadar. İyi okumalar!|Yes, from 2 to 6 pm. Happy reading!`),

    D("d-covoit", "A2", "Un trajet en covoiturage", "Araç paylaşımıyla bir yolculuk", "A carpool ride", { A: "Thomas", B: "Esin" }, "B", `
A|Bonjour ! Vous êtes Esin ? Je suis Thomas, pour le covoiturage.|Merhaba! Esin siz misiniz? Ben Thomas, araç paylaşımı için.|Hello! Are you Esin? I'm Thomas, for the carpool.
B|Oui, bonjour ! Désolée pour le retard, mon bus était bloqué dans les embouteillages.|Evet, merhaba! Geciktiğim için kusura bakmayın, otobüsüm trafiğe takıldı.|Yes, hello! Sorry I'm late, my bus was stuck in traffic.
A|Pas de souci, on a le temps. Vous pouvez mettre votre sac dans le coffre.|Sorun değil, vaktimiz var. Çantanızı bagaja koyabilirsiniz.|No worries, we have time. You can put your bag in the boot.
B|Merci. On arrivera à Nantes vers quelle heure ?|Teşekkürler. Nantes'a saat kaç gibi varırız?|Thanks. What time will we get to Nantes?
A|Normalement vers 16 h. On fera une pause à mi-chemin.|Normalde 16 gibi. Yolun yarısında mola vereceğiz.|Normally around 4 pm. We'll stop for a break halfway.
B|Très bien. Je vous paie maintenant ? C'était 18 euros sur le site.|Çok iyi. Şimdi mi ödeyeyim? Sitede 18 euroydu.|Very good. Shall I pay you now? It was 18 euros on the site.
A|Non, vous avez déjà payé en ligne. Vous allez à Nantes pour le travail ?|Hayır, internetten ödediniz zaten. Nantes'a iş için mi gidiyorsunuz?|No, you've already paid online. Are you going to Nantes for work?
B|Non, pour un tournoi de handball. Je jouais en Turquie, et maintenant je joue dans un club ici.|Hayır, bir hentbol turnuvası için. Türkiye'de oynuyordum, şimdi de burada bir kulüpte oynuyorum.|No, for a handball tournament. I used to play in Turkey, and now I play for a club here.
A|C'est génial ! Ça vous dérange si je mets un peu de musique ?|Harika! Biraz müzik açsam rahatsız olur musunuz?|That's brilliant! Do you mind if I put some music on?
B|Pas du tout. Par contre, je pourrais ouvrir un peu la fenêtre ? J'ai un peu mal au cœur en voiture.|Hiç olmaz. Ama camı biraz açabilir miyim? Arabada midem biraz bulanıyor.|Not at all. But could I open the window a bit? I get a little carsick.
A|Bien sûr. Si vous voulez, vous pouvez aussi vous asseoir devant.|Tabii. İsterseniz öne de oturabilirsiniz.|Of course. If you like, you can sit in the front too.
B|Ce serait gentil, merci. Cette nuit, j'ai mal dormi, alors je suis un peu fatiguée.|Çok nazik olur, teşekkürler. Dün gece kötü uyudum, o yüzden biraz yorgunum.|That would be kind, thanks. I slept badly last night, so I'm a bit tired.
A|Pas de problème. Vous pourrez dormir un peu, je vous réveillerai à la pause !|Sorun değil. Biraz uyuyabilirsiniz, molada sizi uyandırırım!|No problem. You can have a nap, I'll wake you up at the break!
B|Merci, c'est très sympa. On y va ?|Teşekkürler, çok iyisiniz. Gidelim mi?|Thanks, that's really nice. Shall we go?`),

    D("d-opticien", "A2", "Chez l'opticien", "Gözlükçüde", "At the optician's", { A: "Opticienne", B: "Esin" }, "B", `
A|Bonjour madame, qu'est-ce que je peux faire pour vous ?|Merhaba hanımefendi, sizin için ne yapabilirim?|Hello, madam, what can I do for you?
B|Bonjour. J'ai cassé mes lunettes ce week-end : elles sont tombées et quelqu'un a marché dessus.|Merhaba. Bu hafta sonu gözlüğümü kırdım: düştü ve biri üstüne bastı.|Hello. I broke my glasses this weekend: they fell and someone stepped on them.
A|Oh là là ! Vous les avez apportées ?|Eyvah! Yanınızda getirdiniz mi?|Oh dear! Have you brought them?
B|Oui, les voilà. La monture est cassée, mais les verres sont intacts, je crois.|Evet, işte. Çerçeve kırık ama camlar sağlam sanırım.|Yes, here they are. The frame is broken, but the lenses are intact, I think.
A|Je regarde… Non, il y a une rayure sur le verre droit. Vous avez une ordonnance récente ?|Bakayım… Hayır, sağ camda bir çizik var. Yeni bir reçeteniz var mı?|Let me see… No, there's a scratch on the right lens. Do you have a recent prescription?
B|J'ai une ordonnance turque de l'année dernière. Elle est valable ici ?|Geçen yıldan kalma Türk bir reçetem var. Burada geçerli mi?|I have a Turkish prescription from last year. Is it valid here?
A|Je peux faire un contrôle de la vue ici, c'est gratuit. Ça prendra 10 minutes.|Burada göz kontrolü yapabilirim, ücretsiz. 10 dakika sürer.|I can do an eye test here, it's free. It'll take 10 minutes.
B|D'accord. Et pour la monture, vous auriez quelque chose de solide ? Je fais beaucoup de sport.|Tamam. Çerçeve için sağlam bir şeyiniz var mı acaba? Çok spor yapıyorum.|OK. And for the frame, would you have something sturdy? I do a lot of sport.
A|Oui, ces montures en plastique souple sont très résistantes. Elles sont à 89 euros.|Evet, bu esnek plastik çerçeveler çok dayanıklı. Fiyatı 89 euro.|Yes, these flexible plastic frames are very durable. They're 89 euros.
B|Elles sont jolies. C'est remboursé par la Sécurité sociale ?|Güzelmiş. Sosyal Güvenlik bunu karşılıyor mu?|They're nice. Is it reimbursed by social security?
A|Très peu. Mais si vous avez une mutuelle, elle remboursera une grande partie.|Çok az. Ama tamamlayıcı sağlık sigortanız varsa büyük kısmını o karşılar.|Very little. But if you have top-up health insurance, it'll cover a large part.
B|J'ai une mutuelle depuis le mois dernier. Les lunettes seront prêtes quand ?|Geçen aydan beri tamamlayıcı sigortam var. Gözlük ne zaman hazır olur?|I've had top-up insurance since last month. When will the glasses be ready?
A|Dans une semaine environ. Je vous enverrai un SMS.|Yaklaşık bir hafta içinde. Size SMS atacağım.|In about a week. I'll send you a text.
B|Parfait. En attendant, je porterai mes lentilles. On fait le contrôle maintenant ?|Mükemmel. Bu arada lenslerimi takarım. Kontrolü şimdi yapalım mı?|Perfect. In the meantime I'll wear my contact lenses. Shall we do the test now?`)
  );
})();
