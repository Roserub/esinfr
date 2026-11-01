/* More real-life dialogues (A1–A2), same format as data/dialogues.js.
   Lines: "A|français|Türkçe|English" or "B|…". In role-play, the learner says the "me" side. */
(function () {
  const L = s => s.trim().split("\n").map(l => { const [who, fr, tr, en] = l.split("|").map(x => x.trim()); return { who, fr, tr, en }; });
  const D = (id, level, fr, tr, en, roles, me, lines) => ({ id, level, t: { fr, tr, en }, roles, me, lines: L(lines) });

  window.DIALOGUES = window.DIALOGUES || [];
  window.DIALOGUES.push(
    D("d-bus", "A1", "À l'arrêt de bus", "Otobüs durağında", "At the bus stop", { A: "Passant", B: "Esin" }, "B", `
B|Excusez-moi, monsieur. Le bus 12 s'arrête ici ?|Affedersiniz beyefendi. 12 numaralı otobüs burada duruyor mu?|Excuse me, sir. Does the number 12 bus stop here?
A|Oui, c'est le bon arrêt. Vous allez où ?|Evet, doğru durak. Nereye gidiyorsunuz?|Yes, it's the right stop. Where are you going?
B|Je vais à la gare. C'est loin ?|Gara gidiyorum. Uzak mı?|I'm going to the train station. Is it far?
A|Non, c'est à six arrêts. Environ 15 minutes.|Hayır, altı durak. Yaklaşık 15 dakika.|No, it's six stops. About 15 minutes.
B|Le prochain bus passe à quelle heure ?|Bir sonraki otobüs saat kaçta geçiyor?|What time is the next bus?
A|Regardez l'écran : dans 4 minutes. Il y a un bus toutes les 10 minutes.|Ekrana bakın: 4 dakika sonra. Her 10 dakikada bir otobüs var.|Look at the screen: in 4 minutes. There's a bus every 10 minutes.
B|Je peux acheter un ticket dans le bus ?|Otobüste bilet alabilir miyim?|Can I buy a ticket on the bus?
A|Oui, au chauffeur, mais c'est plus cher : 2,50 €. Avec l'application, c'est 1,80 €.|Evet, şoförden, ama daha pahalı: 2,50 €. Uygulamayla 1,80 €.|Yes, from the driver, but it's more expensive: €2.50. With the app, it's €1.80.
B|Ah, je vais télécharger l'application, alors.|Ah, o zaman uygulamayı indireyim.|Oh, I'll download the app, then.
A|Bonne idée. Et n'oubliez pas de valider votre ticket !|İyi fikir. Biletinizi okutmayı da unutmayın!|Good idea. And don't forget to validate your ticket!
B|D'accord. Je descends à « Gare SNCF », c'est ça ?|Tamam. "Gare SNCF" durağında iniyorum, değil mi?|OK. I get off at "Gare SNCF", right?
A|C'est ça. Tenez, voilà votre bus !|Evet, öyle. Bakın, otobüsünüz geldi!|That's right. Look, here's your bus!
B|Merci beaucoup, bonne journée !|Çok teşekkürler, iyi günler!|Thank you very much, have a nice day!`),

    D("d-poste", "A1", "À la poste", "Postanede", "At the post office", { A: "Guichetière", B: "Esin" }, "B", `
A|Bonjour, c'est à vous !|Merhaba, sıra sizde!|Hello, you're next!
B|Bonjour. Je voudrais envoyer ce colis en Turquie, s'il vous plaît.|Merhaba. Bu paketi Türkiye'ye göndermek istiyorum, lütfen.|Hello. I'd like to send this parcel to Turkey, please.
A|Très bien. Je le pèse… 2 kilos. Qu'est-ce qu'il y a dedans ?|Çok iyi. Tartıyorum… 2 kilo. İçinde ne var?|Very good. Let me weigh it… 2 kilos. What's inside?
B|Des livres et un pull pour ma mère. C'est un cadeau.|Kitaplar ve annem için bir kazak. Hediye.|Books and a jumper for my mother. It's a present.
A|D'accord. Pour la douane, vous devez remplir ce formulaire.|Tamam. Gümrük için bu formu doldurmanız gerekiyor.|OK. For customs, you need to fill in this form.
B|Pas de problème. Il va arriver quand ?|Sorun değil. Ne zaman varır?|No problem. When will it arrive?
A|Dans 6 à 8 jours. Ça fait 38 euros.|6 ila 8 gün içinde. 38 euro tutuyor.|In 6 to 8 days. That's 38 euros.
B|Oh, c'est cher ! Il y a moins cher ?|Ah, pahalıymış! Daha ucuzu var mı?|Oh, that's expensive! Is there anything cheaper?
A|Non, désolée, pour la Turquie, c'est le seul tarif. Mais il y a un numéro de suivi.|Hayır, maalesef Türkiye için tek tarife bu. Ama bir takip numarası var.|No, sorry, for Turkey it's the only rate. But there's a tracking number.
B|D'accord, je le prends. Je vais suivre le colis sur Internet.|Tamam, öyle olsun. Paketi internetten takip edeceğim.|OK, I'll take it. I'm going to track the parcel online.
A|Voilà votre reçu. Le numéro est ici, en haut.|İşte makbuzunuz. Numara burada, üstte.|Here's your receipt. The number is here, at the top.
B|Merci beaucoup. Au revoir !|Çok teşekkürler. Hoşça kalın!|Thank you very much. Goodbye!`),

    D("d-coiffeur", "A1", "Chez le coiffeur", "Kuaförde", "At the hairdresser's", { A: "Coiffeuse", B: "Esin" }, "B", `
A|Bonjour ! Vous avez rendez-vous ?|Merhaba! Randevunuz var mı?|Hello! Do you have an appointment?
B|Oui, à 11 h. Je m'appelle Esin.|Evet, saat 11'de. Adım Esin.|Yes, at 11. My name is Esin.
A|Ah oui, très bien. Installez-vous ici. Qu'est-ce qu'on fait aujourd'hui ?|Ah evet, çok iyi. Şuraya oturun. Bugün ne yapıyoruz?|Oh yes, very good. Have a seat here. What are we doing today?
B|Je voudrais une coupe, mais pas trop courte.|Saç kesimi istiyorum ama çok kısa olmasın.|I'd like a cut, but not too short.
A|D'accord. Je coupe combien ? 5 centimètres ?|Tamam. Ne kadar keseyim? 5 santim mi?|OK. How much shall I cut? 5 centimetres?
B|Non, 3 centimètres, c'est bien. Je fais du sport, alors je les attache souvent.|Hayır, 3 santim yeterli. Spor yapıyorum, o yüzden saçımı sık sık topluyorum.|No, 3 centimetres is fine. I do sport, so I often tie my hair up.
A|Je comprends. On fait un shampoing avant ?|Anlıyorum. Önce saçınızı yıkayalım mı?|I see. Shall we wash your hair first?
B|Oui, s'il vous plaît. Mais pas de brushing, je n'ai pas le temps.|Evet, lütfen. Ama fön istemiyorum, vaktim yok.|Yes, please. But no blow-dry, I don't have time.
A|Pas de problème. L'eau n'est pas trop chaude ?|Sorun değil. Su çok sıcak değil, değil mi?|No problem. The water isn't too hot?
B|Non, c'est parfait.|Hayır, gayet iyi.|No, it's perfect.
A|Voilà ! Regardez dans le miroir. Ça vous plaît ?|İşte! Aynaya bakın. Beğendiniz mi?|There you go! Look in the mirror. Do you like it?
B|Oui, j'adore ! C'est combien ?|Evet, bayıldım! Ne kadar?|Yes, I love it! How much is it?
A|Shampoing et coupe : 35 euros.|Yıkama ve kesim: 35 euro.|Wash and cut: 35 euros.`),

    D("d-fromagerie", "A1", "À la fromagerie", "Peynircide", "At the cheese shop", { A: "Fromager", B: "Esin" }, "B", `
A|Bonjour madame, qu'est-ce que je vous sers ?|Merhaba hanımefendi, size ne vereyim?|Hello madam, what can I get you?
B|Bonjour. Je ne connais pas bien les fromages français. Vous pouvez m'aider ?|Merhaba. Fransız peynirlerini pek bilmiyorum. Bana yardım edebilir misiniz?|Hello. I don't know French cheeses very well. Can you help me?
A|Avec plaisir ! Vous aimez les fromages forts ou doux ?|Memnuniyetle! Sert lezzetli peynirleri mi, hafif olanları mı seversiniz?|With pleasure! Do you like strong or mild cheeses?
B|Plutôt doux. Chez moi, on mange beaucoup de fromage blanc, comme la feta.|Daha çok hafif. Bizde çok beyaz peynir yenir, feta gibi.|Mild, rather. At home we eat a lot of white cheese, like feta.
A|Alors goûtez ce comté. Il a 12 mois, il est doux et un peu sucré.|O zaman bu comté'yi tadın. 12 aylık, hafif ve biraz tatlımsı.|Then try this Comté. It's 12 months old, mild and a little sweet.
B|Mmm, il est très bon ! J'en prends un morceau.|Mmm, çok güzel! Bir parça alayım.|Mmm, it's very good! I'll take a piece.
A|Un morceau de 200 grammes, ça va ?|200 gramlık bir parça olur mu?|A 200-gram piece, is that OK?
B|Parfait. Et vous avez aussi du fromage de chèvre ?|Mükemmel. Keçi peyniriniz de var mı?|Perfect. And do you have goat's cheese too?
A|Oui, voilà un petit crottin. Il est frais, parfait pour une salade.|Evet, işte küçük bir crottin. Taze, salata için ideal.|Yes, here's a little crottin. It's fresh, perfect for a salad.
B|Super, je prends aussi un crottin. Ça fait combien ?|Süper, bir crottin de alayım. Hepsi ne kadar?|Great, I'll take a crottin too. How much is that?
A|Le comté, 5,60 €, et le crottin, 2,90 €. Ça fait 8,50 €.|Comté 5,60 €, crottin 2,90 €. Toplam 8,50 €.|The Comté is €5.60 and the crottin €2.90. That's €8.50.
B|Voilà 10 euros.|Buyrun, 10 euro.|Here's 10 euros.
A|Et 1,50 € de monnaie. Bonne dégustation !|1,50 € de para üstünüz. Afiyet olsun!|And €1.50 change. Enjoy!`),

    D("d-hotel", "A1", "À la réception de l'hôtel", "Otel resepsiyonunda", "At the hotel reception", { A: "Réceptionniste", B: "Esin" }, "B", `
A|Bonsoir madame, bienvenue à l'hôtel du Parc.|İyi akşamlar hanımefendi, Parc Oteli'ne hoş geldiniz.|Good evening, madam, welcome to the Hôtel du Parc.
B|Bonsoir. J'ai une réservation pour deux nuits, au nom d'Esin.|İyi akşamlar. Esin adına iki gecelik rezervasyonum var.|Good evening. I have a booking for two nights, under the name Esin.
A|Oui, une chambre simple avec douche. Je peux voir une pièce d'identité ?|Evet, duşlu tek kişilik oda. Kimliğinizi görebilir miyim?|Yes, a single room with a shower. May I see some ID?
B|Voilà mon passeport.|Buyrun, pasaportum.|Here's my passport.
A|Merci. Vous êtes dans la chambre 204, au deuxième étage. Voici votre clé.|Teşekkürler. İkinci kattaki 204 numaralı odadasınız. İşte anahtarınız.|Thank you. You're in room 204, on the second floor. Here's your key.
B|Merci. Le petit-déjeuner est à quelle heure ?|Teşekkürler. Kahvaltı saat kaçta?|Thank you. What time is breakfast?
A|De 7 h à 10 h, dans la salle du rez-de-chaussée. C'est 12 euros.|7'den 10'a kadar, zemin kattaki salonda. 12 euro.|From 7 to 10, in the room on the ground floor. It's 12 euros.
B|D'accord. Et il y a le wifi ?|Tamam. Wifi var mı?|OK. And is there wifi?
A|Oui, c'est gratuit. Le mot de passe est sur la carte, avec la clé.|Evet, ücretsiz. Şifre, anahtarın yanındaki kartta yazıyor.|Yes, it's free. The password is on the card, with the key.
B|Parfait. Je dois partir à quelle heure, le dernier jour ?|Mükemmel. Son gün saat kaçta çıkmam gerekiyor?|Perfect. What time do I have to leave on the last day?
A|Avant 11 h. Après, vous pouvez laisser vos bagages ici, si vous voulez.|11'den önce. İsterseniz sonra bavullarınızı burada bırakabilirsiniz.|Before 11. You can leave your luggage here afterwards, if you like.
B|Super, merci beaucoup. Bonne soirée !|Süper, çok teşekkürler. İyi akşamlar!|Great, thank you very much. Have a nice evening!`),

    D("d-dentiste", "A2", "Chez le dentiste", "Dişçide", "At the dentist's", { A: "Dentiste", B: "Esin" }, "B", `
A|Bonjour, asseyez-vous. Qu'est-ce qui vous amène ?|Merhaba, buyurun oturun. Şikâyetiniz nedir?|Hello, have a seat. What brings you here?
B|J'ai mal à une dent depuis trois jours, en bas à droite.|Üç gündür sağ alttaki bir dişim ağrıyor.|I've had toothache for three days, bottom right.
A|C'est une douleur continue, ou seulement quand vous mangez ?|Sürekli bir ağrı mı, yoksa sadece yemek yerken mi?|Is the pain constant, or only when you eat?
B|Surtout quand je bois quelque chose de froid. Hier soir, je n'ai pas pu dormir.|Özellikle soğuk bir şey içtiğimde. Dün gece uyuyamadım.|Mostly when I drink something cold. Last night I couldn't sleep.
A|Je vais regarder. Ouvrez grand la bouche… Ah, je vois. Vous avez une carie.|Bir bakayım. Ağzınızı iyice açın… Ah, görüyorum. Çürük var.|Let me look. Open wide… Ah, I see. You have a cavity.
B|C'est grave ? Je vais avoir besoin d'une dévitalisation ?|Ciddi mi? Kanal tedavisi gerekecek mi?|Is it serious? Will I need a root canal?
A|Non, rassurez-vous, elle n'est pas très profonde. Je peux la soigner aujourd'hui.|Hayır, merak etmeyin, çok derin değil. Bugün tedavi edebilirim.|No, don't worry, it isn't very deep. I can treat it today.
B|D'accord. Vous pourriez me faire une anesthésie ? J'ai un peu peur.|Tamam. Uyuşturabilir misiniz? Biraz korkuyorum.|OK. Could you numb it? I'm a bit scared.
A|Bien sûr. Vous ne sentirez rien. Ça prendra environ 20 minutes.|Tabii. Hiçbir şey hissetmeyeceksiniz. Yaklaşık 20 dakika sürecek.|Of course. You won't feel a thing. It'll take about 20 minutes.
B|Et c'est remboursé par la Sécurité sociale ?|Peki bunu Sosyal Güvenlik karşılıyor mu?|And is it covered by the national health insurance?
A|Oui, en grande partie. Votre mutuelle paiera le reste.|Evet, büyük kısmını. Kalanını tamamlayıcı sigortanız öder.|Yes, most of it. Your top-up insurance will pay the rest.
B|Parfait. Je pourrai manger normalement après ?|Mükemmel. Sonra normal yemek yiyebilecek miyim?|Perfect. Will I be able to eat normally afterwards?
A|Oui, mais attendez 2 heures, le temps que l'anesthésie passe.|Evet, ama uyuşukluk geçsin diye 2 saat bekleyin.|Yes, but wait 2 hours, until the anaesthetic wears off.
B|C'est noté. Bon, allons-y !|Not ettim. Peki, başlayalım!|Noted. Right, let's go!`),

    D("d-plombier", "A2", "Appeler un plombier", "Tesisatçı çağırmak", "Calling a plumber", { A: "Plombier", B: "Esin" }, "B", `
A|Allô, plomberie Durand, bonjour.|Alo, Durand Tesisat, merhaba.|Hello, Durand Plumbing.
B|Bonjour monsieur. J'ai une fuite d'eau sous l'évier de la cuisine.|Merhaba beyefendi. Mutfak lavabosunun altında su sızıntısı var.|Hello, sir. I have a water leak under the kitchen sink.
A|C'est une grosse fuite ? Vous avez coupé l'eau ?|Büyük bir sızıntı mı? Suyu kapattınız mı?|Is it a big leak? Have you turned off the water?
B|Oui, j'ai fermé le robinet principal tout de suite. Ce matin, il y avait de l'eau partout par terre.|Evet, ana vanayı hemen kapattım. Bu sabah yerler su içindeydi.|Yes, I turned off the main valve straight away. This morning there was water all over the floor.
A|Vous avez bien fait. C'est le tuyau qui est cassé, ou c'est le joint ?|İyi yapmışsınız. Boru mu kırık, yoksa conta mı?|You did the right thing. Is the pipe broken, or is it the seal?
B|Je ne sais pas, je ne suis pas très bricoleuse ! Vous pourriez passer aujourd'hui ?|Bilmiyorum, tamir işlerinden pek anlamam! Bugün gelebilir misiniz?|I don't know, I'm not very handy! Could you come by today?
A|Je suis sur un chantier ce matin, mais je pourrais venir vers 15 h.|Bu sabah başka bir iştayım ama saat 15 civarı gelebilirim.|I'm on a job this morning, but I could come around 3 pm.
B|Très bien. Combien coûte le déplacement ?|Çok iyi. Gelme ücreti ne kadar?|Very good. How much is the call-out fee?
A|Le déplacement, c'est 45 euros, plus la réparation. Je vous ferai un devis sur place.|Gelme ücreti 45 euro, artı tamir. Yerinde size fiyat teklifi veririm.|The call-out is 45 euros, plus the repair. I'll give you a quote on site.
B|D'accord. J'habite au 8, rue des Lilas, au troisième étage, porte de gauche.|Tamam. Rue des Lilas 8 numarada, üçüncü katta, soldaki dairede oturuyorum.|OK. I live at 8 rue des Lilas, third floor, the door on the left.
A|C'est noté. Il y a un code pour entrer ?|Not ettim. Girmek için bir kod var mı?|Got it. Is there a door code?
B|Oui, c'est le 4512B. Je vous attendrai à partir de 14 h 30.|Evet, 4512B. 14.30'dan itibaren sizi bekleyeceğim.|Yes, it's 4512B. I'll be waiting for you from 2.30 pm.
A|Parfait, à tout à l'heure, madame.|Mükemmel, birazdan görüşürüz hanımefendi.|Perfect, see you later, madam.`),

    D("d-essai", "A2", "Un cours d'essai au club de sport", "Spor kulübünde deneme antrenmanı", "A trial session at the sports club", { A: "Entraîneur", B: "Esin" }, "B", `
B|Bonsoir ! Je m'appelle Esin. Je vous ai envoyé un mail pour un cours d'essai.|İyi akşamlar! Adım Esin. Deneme antrenmanı için size e-posta göndermiştim.|Good evening! My name is Esin. I sent you an email about a trial session.
A|Ah oui, bienvenue ! Vous avez déjà joué au handball ?|Ah evet, hoş geldiniz! Daha önce hentbol oynadınız mı?|Oh yes, welcome! Have you played handball before?
B|Oui, j'ai joué pendant dix ans en Turquie. J'étais ailière gauche.|Evet, Türkiye'de on yıl oynadım. Sol kanat oynuyordum.|Yes, I played for ten years in Turkey. I was a left winger.
A|Super ! Et pourquoi vous avez arrêté ?|Süper! Peki neden bıraktınız?|Great! And why did you stop?
B|Je n'ai pas vraiment arrêté, mais je suis arrivée en France il y a deux mois. Je ne connaissais personne ici.|Aslında bırakmadım ama iki ay önce Fransa'ya geldim. Burada kimseyi tanımıyordum.|I didn't really stop, but I arrived in France two months ago. I didn't know anyone here.
A|Je comprends. Ce soir, on va faire un échauffement, des exercices de passes et un petit match.|Anlıyorum. Bu akşam ısınma, pas çalışmaları ve küçük bir maç yapacağız.|I understand. Tonight we're going to do a warm-up, passing drills and a short match.
B|Parfait. Je pourrais aussi aider pour l'échauffement, si vous voulez. Je suis kiné.|Mükemmel. İsterseniz ısınmaya da yardım edebilirim. Fizyoterapistim.|Perfect. I could also help with the warm-up, if you like. I'm a physio.
A|Ah, ce serait génial ! Les filles se blessent souvent aux chevilles.|Ah, harika olur! Kızlar sık sık ayak bileklerini sakatlıyor.|Oh, that would be great! The girls often injure their ankles.
B|Et après l'essai, comment ça se passe pour l'inscription ?|Denemeden sonra kayıt nasıl oluyor?|And after the trial, how does signing up work?
A|Il faudra un certificat médical et la cotisation : 180 euros pour l'année.|Sağlık raporu ve aidat gerekecek: yıllık 180 euro.|You'll need a medical certificate and the membership fee: 180 euros for the year.
B|D'accord. Les entraînements ont lieu quand ?|Tamam. Antrenmanlar ne zaman?|OK. When are the training sessions?
A|Le mardi et le jeudi, de 19 h 30 à 21 h. Allez, venez, je vais vous présenter l'équipe !|Salı ve perşembe, 19.30'dan 21'e kadar. Hadi gelin, sizi takımla tanıştırayım!|Tuesdays and Thursdays, from 7.30 to 9 pm. Come on, I'll introduce you to the team!`),

    D("d-echange", "A2", "Échanger un article en magasin", "Mağazada ürün değiştirmek", "Exchanging an item in a shop", { A: "Vendeuse", B: "Esin" }, "B", `
B|Bonjour. J'ai acheté ce pantalon la semaine dernière, mais il est trop petit.|Merhaba. Bu pantolonu geçen hafta aldım ama bana küçük geldi.|Hello. I bought these trousers last week, but they're too small.
A|Bonjour. Vous avez gardé le ticket de caisse ?|Merhaba. Fişi sakladınız mı?|Hello. Did you keep the receipt?
B|Oui, le voici. Je ne l'ai pas porté, l'étiquette est encore dessus.|Evet, işte burada. Hiç giymedim, etiketi hâlâ üstünde.|Yes, here it is. I haven't worn them, the tag is still on.
A|Très bien. Vous voulez l'échanger ou être remboursée ?|Çok iyi. Değiştirmek mi istersiniz, yoksa para iadesi mi?|Very good. Would you like to exchange them or get a refund?
B|Je préférerais l'échanger contre une taille au-dessus, en 40.|Bir beden büyüğüyle, 40 bedenle değiştirmeyi tercih ederim.|I'd rather exchange them for a size up, a 40.
A|Je vais vérifier… Désolée, il n'y a plus de 40 en bleu. Il reste du noir.|Bir bakayım… Kusura bakmayın, mavinin 40 bedeni kalmamış. Siyahı var.|Let me check… Sorry, there are no more 40s in blue. There's still black.
B|Hmm, je voulais vraiment le bleu. Vous allez en recevoir bientôt ?|Hmm, aslında maviyi istiyordum. Yakında yenisi gelecek mi?|Hmm, I really wanted the blue. Will you be getting more soon?
A|Normalement, jeudi. Je pourrais vous en mettre un de côté.|Normalde perşembe. Sizin için bir tane ayırabilirim.|Normally on Thursday. I could put a pair aside for you.
B|Ce serait parfait. Je passerai jeudi après-midi pour l'essayer.|Mükemmel olur. Perşembe öğleden sonra uğrayıp denerim.|That would be perfect. I'll come by on Thursday afternoon to try them on.
A|D'accord. Laissez-moi votre numéro, je vous enverrai un SMS quand il arrivera.|Tamam. Numaranızı bırakın, geldiğinde size mesaj atarım.|OK. Leave me your number, I'll text you when they arrive.
B|Voilà : 06 12 34 56 78. Et si la taille ne va toujours pas ?|Buyrun: 06 12 34 56 78. Peki beden yine olmazsa?|Here: 06 12 34 56 78. And if the size still doesn't fit?
A|Pas de souci, vous aurez un avoir ou un remboursement. Vous avez 30 jours.|Sorun değil, hediye çeki ya da para iadesi alırsınız. 30 gününüz var.|No worries, you'll get a credit note or a refund. You have 30 days.
B|Merci beaucoup, vous êtes très gentille. À jeudi !|Çok teşekkürler, çok naziksiniz. Perşembe görüşürüz!|Thank you so much, you're very kind. See you on Thursday!`),

    D("d-weekend", "A2", "Raconter son week-end à une collègue", "Bir iş arkadaşına hafta sonunu anlatmak", "Telling a colleague about your weekend", { A: "Julie", B: "Esin" }, "B", `
A|Salut Esin ! Tu as passé un bon week-end ?|Selam Esin! Hafta sonun iyi geçti mi?|Hi Esin! Did you have a good weekend?
B|Oui, super ! Samedi, je suis allée au marché avec ma voisine, Claire.|Evet, süperdi! Cumartesi komşum Claire'le pazara gittim.|Yes, great! On Saturday I went to the market with my neighbour, Claire.
A|Ah, sympa ! Vous avez acheté quoi ?|Ah, ne güzel! Ne aldınız?|Oh, nice! What did you buy?
B|Des légumes, du fromage et des fleurs pour mon appartement. Il faisait beau, c'était très agréable.|Sebze, peynir ve dairem için çiçek. Hava güzeldi, çok hoştu.|Vegetables, cheese and flowers for my flat. The weather was nice, it was really pleasant.
A|Et dimanche, tu t'es reposée ?|Peki pazar günü dinlendin mi?|And on Sunday, did you rest?
B|Pas vraiment ! Le matin, j'ai joué un match de handball avec mon nouveau club.|Pek sayılmaz! Sabah yeni kulübümle bir hentbol maçı oynadım.|Not really! In the morning I played a handball match with my new club.
A|Génial ! Vous avez gagné ?|Harika! Kazandınız mı?|Brilliant! Did you win?
B|Oui, 28 à 24 ! J'ai marqué cinq buts. J'étais un peu stressée au début, mais après, ça allait.|Evet, 28-24! Beş gol attım. Başta biraz gergindim ama sonra iyiydi.|Yes, 28–24! I scored five goals. I was a bit stressed at first, but then it was fine.
A|Bravo ! Et l'après-midi ?|Bravo! Ya öğleden sonra?|Well done! And in the afternoon?
B|J'étais fatiguée, alors je suis restée chez moi. J'ai appelé ma famille et j'ai regardé un film français.|Yorgundum, o yüzden evde kaldım. Ailemi aradım ve bir Fransız filmi izledim.|I was tired, so I stayed at home. I called my family and watched a French film.
A|Avec des sous-titres ?|Altyazılı mı?|With subtitles?
B|Oui, en français ! J'ai presque tout compris. Et toi, tu as fait quoi ?|Evet, Fransızca altyazıyla! Neredeyse her şeyi anladım. Peki sen ne yaptın?|Yes, in French! I understood almost everything. And you, what did you do?
A|Moi, je suis partie à la mer avec mes enfants. On y retournera cet été !|Ben çocuklarımla denize gittim. Bu yaz yine gideceğiz!|I went to the seaside with my kids. We'll go back there this summer!`)
  );
})();
