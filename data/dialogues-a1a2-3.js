/* More real-life dialogues (A1), played line by line with French audio.
   Lines: "A|français|Türkçe|English" or "B|…". In role-play, the learner says the "me" side. */
(function () {
  const L = s => s.trim().split("\n").map(l => { const [who, fr, tr, en] = l.split("|").map(x => x.trim()); return { who, fr, tr, en }; });
  const D = (id, level, fr, tr, en, roles, me, lines) => ({ id, level, t: { fr, tr, en }, roles, me, lines: L(lines) });

  window.DIALOGUES = window.DIALOGUES || [];
  window.DIALOGUES.push(
    D("d-accueil-salle", "A1", "À l'accueil de la salle de sport", "Spor salonunun resepsiyonunda", "At the gym front desk", { A: "Hugo", B: "Esin" }, "B", `
B|Bonjour ! Bienvenue à la salle. Je peux vous aider ?|Merhaba! Salonumuza hoş geldiniz. Yardımcı olabilir miyim?|Hello! Welcome to the gym. Can I help you?
A|Bonjour. C'est mon premier jour. Je m'appelle Hugo Martin.|Merhaba. Bugün ilk günüm. Adım Hugo Martin.|Hello. It's my first day. My name is Hugo Martin.
B|Ah, bienvenue, Hugo ! Vous avez votre carte de membre ?|Ah, hoş geldiniz Hugo! Üyelik kartınız var mı?|Ah, welcome, Hugo! Do you have your membership card?
A|Non, pas encore.|Hayır, henüz yok.|No, not yet.
B|Pas de problème. Voilà votre carte. Vous passez la carte ici, à l'entrée.|Sorun değil. İşte kartınız. Kartı burada, girişte okutuyorsunuz.|No problem. Here's your card. You scan it here, at the entrance.
A|D'accord. Où sont les vestiaires ?|Tamam. Soyunma odaları nerede?|OK. Where are the changing rooms?
B|Les vestiaires sont à droite, au fond du couloir. Vous avez un cadenas ?|Soyunma odaları sağda, koridorun sonunda. Asma kilidiniz var mı?|The changing rooms are on the right, at the end of the corridor. Do you have a padlock?
A|Non. Je dois acheter un cadenas ?|Hayır. Asma kilit almam mı gerekiyor?|No. Do I have to buy a padlock?
B|Oui, il coûte 5 euros ici. Et la serviette est obligatoire sur les machines.|Evet, burada 5 euro. Ayrıca makinelerde havlu zorunlu.|Yes, it's 5 euros here. And a towel is compulsory on the machines.
A|J'ai une serviette dans mon sac. La salle est ouverte quand ?|Çantamda havlu var. Salon ne zaman açık?|I have a towel in my bag. When is the gym open?
B|Tous les jours, de 7 h à 22 h. Le dimanche, de 9 h à 18 h.|Her gün saat 7'den 22'ye kadar. Pazar günleri 9'dan 18'e kadar.|Every day, from 7 am to 10 pm. On Sundays, from 9 am to 6 pm.
A|Super. Et il y a des cours collectifs ?|Süper. Grup dersleri de var mı?|Great. And are there group classes?
B|Oui ! Yoga le lundi, cardio le mercredi et pilates le vendredi. Le planning est sur le mur.|Evet! Pazartesi yoga, çarşamba kardiyo, cuma pilates. Program duvarda asılı.|Yes! Yoga on Mondays, cardio on Wednesdays and Pilates on Fridays. The timetable is on the wall.
A|Merci beaucoup, vous êtes très gentille.|Çok teşekkürler, çok naziksiniz.|Thank you very much, you're very kind.
B|Avec plaisir ! Bonne séance, Hugo !|Rica ederim! İyi antrenmanlar Hugo!|My pleasure! Have a good workout, Hugo!`),

    D("d-baskets", "A1", "Acheter des baskets", "Spor ayakkabısı almak", "Buying trainers", { A: "Vendeur", B: "Esin" }, "B", `
A|Bonjour madame. Vous cherchez quelque chose ?|Merhaba hanımefendi. Bir şey mi arıyorsunuz?|Hello, madam. Are you looking for something?
B|Bonjour. Je cherche des baskets pour courir.|Merhaba. Koşu için spor ayakkabısı arıyorum.|Hello. I'm looking for running shoes.
A|Vous courez sur la route ou dans la nature ?|Yolda mı koşuyorsunuz, doğada mı?|Do you run on the road or on trails?
B|Sur la route, dans le parc. Trois fois par semaine.|Yolda, parkta. Haftada üç kez.|On the road, in the park. Three times a week.
A|Alors, ces baskets sont très bien. Elles sont légères et confortables.|O zaman bu ayakkabılar çok iyi. Hem hafif hem rahat.|Then these ones are very good. They're light and comfortable.
B|Elles sont jolies ! Vous avez la pointure 38 ?|Çok güzeller! 38 numaranız var mı?|They're nice! Do you have a size 38?
A|Oui, en bleu et en noir.|Evet, mavi ve siyah var.|Yes, in blue and in black.
B|En bleu, s'il vous plaît. Je peux essayer ?|Mavi, lütfen. Deneyebilir miyim?|Blue, please. Can I try them on?
A|Bien sûr. Asseyez-vous ici. Voilà la pointure 38.|Tabii. Buraya oturun. İşte 38 numara.|Of course. Sit down here. Here's a size 38.
B|Hmm… Elles sont un peu petites. Vous avez la pointure 39 ?|Hmm… Biraz küçükler. 39 numara var mı?|Hmm… They're a bit small. Do you have a size 39?
A|Oui, voilà. Ça va mieux ?|Evet, buyurun. Daha iyi mi?|Yes, here you are. Is that better?
B|Oui, c'est parfait ! Elles coûtent combien ?|Evet, mükemmel! Fiyatı ne kadar?|Yes, they're perfect! How much are they?
A|89 euros. Mais cette semaine, il y a 20 % de réduction.|89 euro. Ama bu hafta yüzde 20 indirim var.|89 euros. But this week there's 20% off.
B|Super ! Je les prends.|Süper! Alıyorum.|Great! I'll take them.
A|Très bien. Vous payez à la caisse, là-bas. Bonne course !|Çok iyi. Şuradaki kasada ödüyorsunuz. İyi koşular!|Very good. You pay at the till over there. Happy running!`),

    D("d-fruits-legumes", "A1", "Au marché : fruits et légumes", "Pazarda: meyve ve sebze", "At the market: fruit and vegetables", { A: "Marchand", B: "Esin" }, "B", `
A|Bonjour madame ! Qu'est-ce que je vous sers ?|Merhaba hanımefendi! Size ne vereyim?|Hello, madam! What can I get you?
B|Bonjour. Je voudrais un kilo de tomates, s'il vous plaît.|Merhaba. Bir kilo domates istiyorum, lütfen.|Hello. I'd like a kilo of tomatoes, please.
A|Voilà. Et avec ça ?|Buyurun. Başka bir şey?|Here you are. Anything else?
B|Les courgettes, c'est combien ?|Kabaklar kaç para?|How much are the courgettes?
A|2,50 € le kilo. Elles sont très bonnes, elles viennent de la région.|Kilosu 2,50 €. Çok güzeller, bu yöreden geliyorlar.|2.50 € a kilo. They're very good, they're local.
B|Alors, trois courgettes, s'il vous plaît. Et des pommes.|O zaman üç kabak lütfen. Bir de elma.|Then three courgettes, please. And some apples.
A|Combien de pommes ?|Kaç tane elma?|How many apples?
B|Six pommes. Et vous avez des abricots ?|Altı elma. Kayısınız var mı?|Six apples. And do you have apricots?
A|Non, désolé, ce n'est pas la saison. Mais j'ai des clémentines.|Hayır, üzgünüm, mevsimi değil. Ama mandalinam var.|No, sorry, they're not in season. But I have clementines.
B|D'accord, un kilo de clémentines. Elles sont sucrées ?|Tamam, bir kilo mandalina. Tatlılar mı?|OK, a kilo of clementines. Are they sweet?
A|Très sucrées ! Tenez, goûtez !|Çok tatlı! Buyurun, bir tadın!|Very sweet! Here, have a taste!
B|Mmm, c'est délicieux ! Ça fait combien ?|Mmm, çok lezzetli! Ne kadar tuttu?|Mmm, it's delicious! How much is that?
A|Alors… 3 € les tomates, 2 € les courgettes, 2,40 € les pommes et 3 € les clémentines. Ça fait 10,40 €.|Bakalım… domatesler 3 €, kabaklar 2 €, elmalar 2,40 €, mandalinalar 3 €. Toplam 10,40 €.|Let's see… 3 € for the tomatoes, 2 € for the courgettes, 2.40 € for the apples and 3 € for the clementines. That's 10.40 €.
B|Voilà 20 euros.|Buyurun, 20 euro.|Here's 20 euros.
A|Et voilà 9,60 €. Merci, bonne journée !|Buyurun, para üstünüz 9,60 €. Teşekkürler, iyi günler!|And here's 9.60 € change. Thanks, have a nice day!`),

    D("d-cafe-voisine", "A1", "Un café chez une voisine", "Bir komşuda kahve", "A coffee at a neighbour's", { A: "Martine", B: "Esin" }, "B", `
A|Esin ! Bonjour ! Vous voulez prendre un café avec moi ?|Esin! Merhaba! Benimle bir kahve içmek ister misiniz?|Esin! Hello! Would you like to have a coffee with me?
B|Avec plaisir, Martine ! J'ai une heure.|Memnuniyetle Martine! Bir saatim var.|With pleasure, Martine! I have an hour.
A|Entrez, entrez. Vous prenez un café ou un thé ?|Girin, girin. Kahve mi alırsınız, çay mı?|Come in, come in. Will you have coffee or tea?
B|Un thé, s'il vous plaît. En Turquie, on boit beaucoup de thé.|Çay, lütfen. Türkiye'de çok çay içeriz.|Tea, please. In Turkey, we drink a lot of tea.
A|Ah oui ? Avec du sucre ?|Öyle mi? Şekerli mi?|Really? With sugar?
B|Non, sans sucre, merci. Votre appartement est très joli !|Hayır, şekersiz, teşekkürler. Daireniz çok güzel!|No, without sugar, thanks. Your flat is very nice!
A|Merci. J'habite ici depuis trente ans. Et vous, ça va, le travail ?|Teşekkürler. Otuz yıldır burada oturuyorum. Siz nasılsınız, iş nasıl gidiyor?|Thanks. I've lived here for thirty years. And you, how's work?
B|Oui, ça va. Je travaille à l'accueil d'une salle de sport. J'aime bien.|İyi gidiyor. Bir spor salonunun resepsiyonunda çalışıyorum. Hoşuma gidiyor.|Fine, thanks. I work at the front desk of a gym. I like it.
A|Une salle de sport ! Moi, je fais de l'aquagym le mardi.|Spor salonu! Ben salı günleri su jimnastiği yapıyorum.|A gym! I do aqua aerobics on Tuesdays.
B|C'est super ! C'est très bon pour le dos et les genoux.|Süper! Sırt ve dizler için çok iyi.|That's great! It's very good for your back and knees.
A|Vous parlez bien français, vous savez !|Biliyor musunuz, Fransızcanız çok iyi!|You speak good French, you know!
B|Merci, c'est gentil. J'apprends un peu tous les jours.|Teşekkürler, çok naziksiniz. Her gün biraz öğreniyorum.|Thanks, that's kind. I learn a little every day.
A|Tenez, un petit gâteau maison.|Buyurun, ev yapımı küçük bir kek.|Here, a little homemade cake.
B|Merci ! La prochaine fois, je vous invite chez moi. Je vais faire un thé turc !|Teşekkürler! Bir dahaki sefere ben sizi davet ediyorum. Türk çayı demleyeceğim!|Thanks! Next time, I'll invite you to my place. I'm going to make Turkish tea!
A|Avec plaisir !|Memnuniyetle!|With pleasure!`),

    D("d-resto-table", "A1", "Réserver une table au restaurant", "Restoranda masa ayırtmak", "Booking a table at a restaurant", { A: "Restaurant", B: "Esin" }, "B", `
A|Restaurant Le Jardin, bonjour !|Le Jardin Restoranı, merhaba!|Le Jardin restaurant, hello!
B|Bonjour. Je voudrais réserver une table, s'il vous plaît.|Merhaba. Bir masa ayırtmak istiyorum, lütfen.|Hello. I'd like to book a table, please.
A|Oui, pour quel jour ?|Tabii, hangi gün için?|Yes, for which day?
B|Pour samedi soir.|Cumartesi akşamı için.|For Saturday evening.
A|Pour combien de personnes ?|Kaç kişilik?|For how many people?
B|Pour quatre personnes : mon mari, deux amis et moi.|Dört kişilik: eşim, iki arkadaş ve ben.|For four people: my husband, two friends and me.
A|À quelle heure ?|Saat kaçta?|At what time?
B|À 20 h, c'est possible ?|Saat 20.00'de olur mu?|At 8 pm, is that possible?
A|Désolé, à 20 h, c'est complet. J'ai une table à 19 h 30 ou à 21 h.|Üzgünüm, 20.00 dolu. 19.30'da ya da 21.00'de bir masam var.|Sorry, 8 pm is full. I have a table at 7:30 or at 9.
B|19 h 30, c'est parfait. Il y a une terrasse ?|19.30 mükemmel. Teras var mı?|7:30 is perfect. Is there a terrace?
A|Oui, mais le soir, il fait froid ! Je vous mets à l'intérieur ?|Evet, ama akşamları hava soğuk! Sizi içeriye mi yazayım?|Yes, but it's cold in the evening! Shall I put you inside?
B|Oui, à l'intérieur, merci. Vous avez des plats végétariens ?|Evet, içeride, teşekkürler. Vejetaryen yemekleriniz var mı?|Yes, inside, thanks. Do you have vegetarian dishes?
A|Oui, il y a deux plats végétariens sur la carte. C'est à quel nom ?|Evet, menüde iki vejetaryen yemek var. Kimin adına?|Yes, there are two vegetarian dishes on the menu. What name is it under?
B|Yılmaz. Y-I-L-M-A-Z.|Yılmaz. Y-I-L-M-A-Z.|Yılmaz. Y-I-L-M-A-Z.
A|Très bien, madame Yılmaz. Samedi, 19 h 30, quatre personnes. À samedi !|Çok güzel Yılmaz Hanım. Cumartesi, 19.30, dört kişi. Cumartesi görüşmek üzere!|Very good, Mrs Yılmaz. Saturday, 7:30, four people. See you on Saturday!
B|Merci, au revoir !|Teşekkürler, hoşça kalın!|Thank you, goodbye!`),

    D("d-cinema", "A1", "Au cinéma", "Sinemada", "At the cinema", { A: "Caissière", B: "Esin" }, "B", `
A|Bonsoir madame.|İyi akşamlar hanımefendi.|Good evening, madam.
B|Bonsoir. Deux places pour le film de 20 h 15, s'il vous plaît.|İyi akşamlar. 20.15 filmi için iki bilet, lütfen.|Good evening. Two tickets for the 8:15 film, please.
A|Quel film ? Il y a trois films à 20 h 15.|Hangi film? 20.15'te üç film var.|Which film? There are three films at 8:15.
B|Ah, pardon ! La comédie, « Les Vacances de Léa ».|Ah, pardon! Komedi filmi, "Les Vacances de Léa".|Oh, sorry! The comedy, "Les Vacances de Léa".
A|D'accord. Vous avez une carte de réduction ?|Tamam. İndirim kartınız var mı?|OK. Do you have a discount card?
B|Non. C'est combien, la place ?|Hayır. Bilet ne kadar?|No. How much is a ticket?
A|11,50 € la place. Ça fait 23 €.|Bileti 11,50 €. Toplam 23 €.|11.50 € a ticket. That's 23 €.
B|D'accord. Le film dure combien de temps ?|Tamam. Film ne kadar sürüyor?|OK. How long is the film?
A|1 h 45. Il finit vers 22 h 20, avec les publicités.|1 saat 45 dakika. Reklamlarla birlikte 22.20 civarı bitiyor.|An hour and 45 minutes. It finishes around 10:20, with the adverts.
B|Il y a des sous-titres en anglais ? Mon mari parle un peu français.|İngilizce altyazı var mı? Eşim biraz Fransızca konuşuyor.|Are there English subtitles? My husband speaks a little French.
A|Non, désolée, seulement en français. Mais c'est une comédie, c'est facile !|Hayır, üzgünüm, sadece Fransızca. Ama komedi, anlaması kolay!|No, sorry, only in French. But it's a comedy, it's easy!
B|Pas de problème. On aime bien rire !|Sorun değil. Gülmeyi severiz!|No problem. We like a good laugh!
A|C'est la salle 4, au premier étage. Le pop-corn est à droite.|Salon 4, birinci katta. Patlamış mısır sağda.|It's screen 4, on the first floor. The popcorn is on the right.
B|Merci ! Un petit pop-corn, c'est combien ?|Teşekkürler! Küçük patlamış mısır ne kadar?|Thanks! How much is a small popcorn?
A|4 €. Bon film !|4 €. İyi seyirler!|4 €. Enjoy the film!`),

    D("d-location-velo", "A1", "Louer un vélo", "Bisiklet kiralamak", "Renting a bike", { A: "Loueur", B: "Esin" }, "B", `
A|Bonjour ! Vous voulez louer un vélo ?|Merhaba! Bisiklet mi kiralamak istiyorsunuz?|Hello! Do you want to rent a bike?
B|Oui, pour la journée. C'est combien ?|Evet, bir günlüğüne. Ne kadar?|Yes, for the day. How much is it?
A|15 € la journée, ou 4 € l'heure.|Günlüğü 15 €, saatliği 4 €.|15 € a day, or 4 € an hour.
B|La journée, s'il vous plaît. Je vais faire le tour du lac.|Günlük, lütfen. Gölün etrafında tur atacağım.|The day, please. I'm going to ride around the lake.
A|Très bien. Vous voulez un vélo normal ou un vélo électrique ?|Çok iyi. Normal bisiklet mi istersiniz, elektrikli mi?|Very good. Do you want a normal bike or an electric bike?
B|Un vélo normal. Je veux faire du sport !|Normal bisiklet. Spor yapmak istiyorum!|A normal bike. I want to get some exercise!
A|Vous mesurez combien ?|Boyunuz kaç?|How tall are you?
B|Je mesure 1,65 m.|Boyum 1,65.|I'm 1.65 m.
A|Alors, ce vélo est pour vous. Vous voulez un casque ?|O zaman bu bisiklet tam size göre. Kask ister misiniz?|Then this bike is just right for you. Would you like a helmet?
B|Oui, bien sûr. C'est important pour la tête !|Evet, tabii. Kafa için önemli!|Yes, of course. It's important for your head!
A|Le casque est gratuit. Il y a aussi un antivol. J'ai besoin d'une pièce d'identité, s'il vous plaît.|Kask ücretsiz. Bir de kilit var. Kimlik belgenizi rica edeyim.|The helmet is free. There's a lock too. I need some ID, please.
B|Voilà mon titre de séjour.|Buyurun, oturma iznim.|Here's my residence permit.
A|Merci. Vous rendez le vélo avant 19 h, d'accord ?|Teşekkürler. Bisikleti saat 19'dan önce geri getiriyorsunuz, tamam mı?|Thanks. You bring the bike back before 7 pm, OK?
B|D'accord. Il y a une piste cyclable autour du lac ?|Tamam. Gölün etrafında bisiklet yolu var mı?|OK. Is there a cycle path around the lake?
A|Oui, elle fait 12 kilomètres. C'est très joli. Bonne balade !|Evet, 12 kilometre. Çok güzel bir yol. İyi gezintiler!|Yes, it's 12 kilometres long. It's very pretty. Enjoy your ride!`),

    D("d-natation", "A1", "S'inscrire au cours de natation", "Yüzme kursuna yazılmak", "Signing up for swimming lessons", { A: "Hôtesse", B: "Esin" }, "B", `
B|Bonjour. Je voudrais m'inscrire au cours de natation pour adultes.|Merhaba. Yetişkinler için yüzme kursuna yazılmak istiyorum.|Hello. I'd like to sign up for the adult swimming lessons.
A|Bonjour. Vous savez nager ?|Merhaba. Yüzme biliyor musunuz?|Hello. Can you swim?
B|Un peu. Je nage la brasse, mais pas le crawl.|Biraz. Kurbağalama yüzebiliyorum ama serbest stil yüzemiyorum.|A little. I can do breaststroke, but not front crawl.
A|Alors, le cours « niveau 2 » est pour vous. Il y a un cours le mardi à 19 h et le samedi à 10 h.|O zaman "2. seviye" kursu size göre. Salı 19.00'da ve cumartesi 10.00'da ders var.|Then the "level 2" class is for you. There's a class on Tuesdays at 7 pm and on Saturdays at 10 am.
B|Le mardi, je travaille jusqu'à 19 h. Le samedi, c'est parfait.|Salı günleri 19.00'a kadar çalışıyorum. Cumartesi mükemmel.|On Tuesdays I work until 7 pm. Saturday is perfect.
A|Le cours dure 45 minutes. C'est 120 € pour dix cours.|Ders 45 dakika sürüyor. On ders 120 €.|The class lasts 45 minutes. It's 120 € for ten classes.
B|D'accord. Qu'est-ce que je dois apporter ?|Tamam. Yanımda ne getirmem gerekiyor?|OK. What do I need to bring?
A|Un maillot de bain, un bonnet de bain et une serviette. Le bonnet est obligatoire.|Mayo, bone ve havlu. Bone zorunlu.|A swimsuit, a swimming cap and a towel. The cap is compulsory.
B|Et des lunettes de natation ?|Yüzücü gözlüğü de gerekli mi?|And swimming goggles?
A|Ce n'est pas obligatoire, mais c'est mieux pour le crawl.|Zorunlu değil, ama serbest stil için daha iyi.|They're not compulsory, but they're better for front crawl.
B|D'accord. Le premier cours, c'est quand ?|Tamam. İlk ders ne zaman?|OK. When is the first class?
A|Samedi prochain. Vous remplissez cette fiche, s'il vous plaît ?|Gelecek cumartesi. Bu formu doldurur musunuz, lütfen?|Next Saturday. Could you fill in this form, please?
B|Bien sûr. Je suis un peu stressée, mais contente !|Tabii. Biraz heyecanlıyım ama mutluyum!|Of course. I'm a bit nervous, but happy!
A|Ne vous inquiétez pas, le maître-nageur est très patient.|Endişelenmeyin, yüzme hocası çok sabırlıdır.|Don't worry, the swimming instructor is very patient.`),

    D("d-fleuriste", "A1", "Chez le fleuriste", "Çiçekçide", "At the florist's", { A: "Fleuriste", B: "Esin" }, "B", `
A|Bonjour madame ! Je peux vous aider ?|Merhaba hanımefendi! Yardımcı olabilir miyim?|Hello, madam! Can I help you?
B|Bonjour. Je voudrais un bouquet pour une amie. C'est son anniversaire.|Merhaba. Bir arkadaşım için buket istiyorum. Bugün doğum günü.|Hello. I'd like a bouquet for a friend. It's her birthday.
A|Elle aime quelles couleurs ?|Hangi renkleri seviyor?|What colours does she like?
B|Elle aime le jaune et l'orange.|Sarıyı ve turuncuyu seviyor.|She likes yellow and orange.
A|J'ai de jolies roses jaunes et des gerberas orange.|Güzel sarı güllerim ve turuncu gerberalarım var.|I have some lovely yellow roses and orange gerberas.
B|Oh, c'est très joli ! C'est combien ?|Ah, çok güzel! Ne kadar?|Oh, that's very pretty! How much is it?
A|Un petit bouquet, c'est 20 €. Un grand bouquet, c'est 35 €.|Küçük buket 20 €, büyük buket 35 €.|A small bouquet is 20 €. A big bouquet is 35 €.
B|Un petit bouquet, s'il vous plaît, avec des roses et des gerberas.|Küçük bir buket lütfen, gül ve gerberalı.|A small bouquet, please, with roses and gerberas.
A|Vous voulez une petite carte ?|Küçük bir kart ister misiniz?|Would you like a little card?
B|Oui, merci. J'écris : « Joyeux anniversaire, Julie ! »|Evet, teşekkürler. Şunu yazıyorum: "Doğum günün kutlu olsun Julie!"|Yes, thanks. I'll write: "Happy birthday, Julie!"
A|C'est pour aujourd'hui ?|Bugün için mi?|Is it for today?
B|Oui, je vais chez elle ce soir. Les fleurs restent belles combien de temps ?|Evet, bu akşam ona gidiyorum. Çiçekler ne kadar süre güzel kalır?|Yes, I'm going to her place tonight. How long do the flowers stay nice?
A|Une semaine, avec de l'eau fraîche tous les deux jours.|İki günde bir suyunu değiştirirseniz bir hafta.|A week, with fresh water every two days.
B|Parfait. Je paie par carte.|Mükemmel. Kartla ödüyorum.|Perfect. I'll pay by card.
A|Voilà votre bouquet. Bonne soirée !|İşte buketiniz. İyi akşamlar!|Here's your bouquet. Have a nice evening!`),

    D("d-courses-tel", "A1", "Au téléphone : la liste de courses", "Telefonda: alışveriş listesi", "On the phone: the shopping list", { A: "Mari", B: "Esin" }, "B", `
A|Allô, Esin ? Je suis au supermarché. Qu'est-ce qu'on achète ?|Alo, Esin? Süpermarketteyim. Ne alıyoruz?|Hello, Esin? I'm at the supermarket. What are we buying?
B|Ah, super ! Alors, du lait, des œufs et du pain.|Ah, süper! O zaman süt, yumurta ve ekmek.|Oh, great! So, milk, eggs and bread.
A|Combien d'œufs ?|Kaç yumurta?|How many eggs?
B|Une boîte de douze. Je vais faire une omelette ce soir.|On ikilik bir kutu. Bu akşam omlet yapacağım.|A box of twelve. I'm going to make an omelette tonight.
A|D'accord. Et des fruits ?|Tamam. Meyve alayım mı?|OK. And fruit?
B|Oui, des bananes. C'est bien pour le sport.|Evet, muz. Spor için iyi.|Yes, bananas. They're good for sport.
A|Il y a des yaourts dans le frigo ?|Buzdolabında yoğurt var mı?|Are there any yogurts in the fridge?
B|Non, il n'y a plus de yaourt. Prends deux pots de yaourt nature.|Hayır, yoğurt kalmadı. İki kap sade yoğurt al.|No, there's no yogurt left. Get two pots of plain yogurt.
A|Et du fromage ?|Peynir?|And cheese?
B|Oui, de la feta, pour le petit-déjeuner.|Evet, kahvaltı için beyaz peynir.|Yes, some feta, for breakfast.
A|C'est tout ?|Bu kadar mı?|Is that all?
B|Ah non ! Du thé ! Il n'y a plus de thé.|Ah, hayır! Çay! Çay kalmadı.|Oh no! Tea! We're out of tea.
A|Le thé, c'est très important ! Je prends deux paquets.|Çay çok önemli! İki paket alıyorum.|Tea is very important! I'll get two packets.
B|Merci, mon chéri. Tu rentres à quelle heure ?|Teşekkürler canım. Saat kaçta eve geliyorsun?|Thanks, darling. What time are you coming home?
A|Vers 19 h. À tout à l'heure !|19.00 gibi. Birazdan görüşürüz!|Around 7. See you soon!
B|À tout à l'heure. Bisous !|Görüşürüz. Öptüm!|See you soon. Love you!`)
  );
})();
