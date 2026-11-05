/* More real-life dialogues (A1), played line by line with French audio.
   Lines: "A|français|Türkçe|English" or "B|…". In role-play, the learner says the "me" side. */
(function () {
  const L = s => s.trim().split("\n").map(l => { const [who, fr, tr, en] = l.split("|").map(x => x.trim()); return { who, fr, tr, en }; });
  const D = (id, level, fr, tr, en, roles, me, lines) => ({ id, level, t: { fr, tr, en }, roles, me, lines: L(lines) });

  window.DIALOGUES = window.DIALOGUES || [];
  window.DIALOGUES.push(
    D("d-tabac-timbres", "A1", "Au tabac : des timbres et un journal", "Tütüncüde: pul ve gazete", "At the tobacconist's: stamps and a newspaper", { A: "Buraliste", B: "Esin" }, "B", `
B|Bonjour monsieur ! Vous vendez des timbres ?|Merhaba beyefendi! Pul satıyor musunuz?|Hello, sir! Do you sell stamps?
A|Bonjour madame. Oui, bien sûr. Pour la France ?|Merhaba hanımefendi. Evet, tabii. Fransa için mi?|Hello, madam. Yes, of course. For France?
B|Non, pour la Turquie. C'est une carte postale.|Hayır, Türkiye için. Bir kartpostal.|No, for Turkey. It's a postcard.
A|D'accord. Pour l'international, c'est un timbre spécial. Vous en voulez combien ?|Tamam. Yurt dışı için özel bir pul gerekiyor. Kaç tane istiyorsunuz?|OK. For abroad, it's a special stamp. How many do you want?
B|Deux, s'il vous plaît. J'ai deux cartes postales.|İki tane lütfen. İki kartpostalım var.|Two, please. I have two postcards.
A|Voilà deux timbres. Autre chose ?|Buyurun, iki pul. Başka bir şey?|Here are two stamps. Anything else?
B|Oui, je voudrais un journal. Vous avez un journal facile ? J'apprends le français.|Evet, bir gazete istiyorum. Kolay bir gazeteniz var mı? Fransızca öğreniyorum.|Yes, I'd like a newspaper. Do you have an easy newspaper? I'm learning French.
A|Ah ! Prenez le journal de la région. Les articles sont courts.|Ah! Bölge gazetesini alın. Yazılar kısa.|Ah! Take the regional paper. The articles are short.
B|Très bien, je prends ce journal. C'est combien en tout ?|Çok iyi, bu gazeteyi alıyorum. Hepsi ne kadar?|Great, I'll take this paper. How much is it altogether?
A|Les deux timbres et le journal… ça fait 6,70 €.|İki pul ve gazete… 6,70 € ediyor.|The two stamps and the paper… that's €6.70.
B|Voilà. Et la boîte aux lettres, elle est où ?|Buyurun. Peki posta kutusu nerede?|Here you go. And where is the postbox?
A|Juste devant le tabac, à droite. Elle est jaune.|Tütüncünün hemen önünde, sağda. Sarı renkte.|Right in front of the shop, on the right. It's yellow.
B|Parfait. Merci beaucoup, monsieur !|Mükemmel. Çok teşekkürler beyefendi!|Perfect. Thank you very much, sir!
A|Je vous en prie. Bonne lecture !|Rica ederim. İyi okumalar!|You're welcome. Enjoy your reading!`),

    D("d-recharge-transport", "A1", "Recharger sa carte de transport", "Ulaşım kartını doldurmak", "Topping up your travel card", { A: "Agent", B: "Esin" }, "B", `
B|Bonjour madame. Je voudrais recharger ma carte, s'il vous plaît.|Merhaba hanımefendi. Kartımı doldurmak istiyorum lütfen.|Hello, madam. I'd like to top up my card, please.
A|Bonjour. Vous voulez des tickets ou un abonnement ?|Merhaba. Bilet mi istiyorsunuz, abonman mı?|Hello. Do you want tickets or a pass?
B|Je ne sais pas. Je prends le bus tous les jours pour aller au travail.|Bilmiyorum. İşe gitmek için her gün otobüse biniyorum.|I don't know. I take the bus every day to go to work.
A|Alors, l'abonnement mensuel, c'est mieux. C'est pour un mois.|O zaman aylık abonman daha iyi. Bir ay geçerli.|Then the monthly pass is better. It's for one month.
B|C'est combien ?|Ne kadar?|How much is it?
A|C'est 45 € par mois. Et le bus, le tram, c'est illimité.|Aylık 45 €. Otobüs ve tramvay sınırsız.|It's €45 a month. And the bus and tram are unlimited.
B|Super ! Et mon employeur paie une partie, non ?|Süper! İşverenim de bir kısmını ödüyor, değil mi?|Great! And my employer pays part of it, right?
A|Oui, au moins la moitié. Demandez une facture pour votre employeur.|Evet, en az yarısını. İşvereniniz için fatura isteyin.|Yes, at least half. Ask for a receipt for your employer.
B|D'accord. Je voudrais une facture, s'il vous plaît.|Tamam. Fatura istiyorum lütfen.|OK. I'd like a receipt, please.
A|Pas de problème. Donnez-moi votre carte… Merci. Vous payez par carte bancaire ?|Sorun değil. Kartınızı verin… Teşekkürler. Banka kartıyla mı ödüyorsunuz?|No problem. Give me your card… Thank you. Are you paying by bank card?
B|Oui. Voilà.|Evet. Buyurun.|Yes. Here you are.
A|C'est bon. Votre abonnement commence aujourd'hui. Voici votre carte et la facture.|Tamam. Abonmanınız bugün başlıyor. Kartınız ve faturanız burada.|All done. Your pass starts today. Here's your card and the receipt.
B|Merci ! Je dois valider dans le bus ?|Teşekkürler! Otobüste kartı okutmam gerekiyor mu?|Thanks! Do I have to tap in on the bus?
A|Oui, à chaque fois. Passez la carte devant la machine.|Evet, her seferinde. Kartı makineye yaklaştırın.|Yes, every time. Hold the card in front of the machine.
B|D'accord. Merci beaucoup, bonne journée !|Tamam. Çok teşekkürler, iyi günler!|OK. Thank you very much, have a nice day!`),

    D("d-the-bar", "A1", "Commander un thé au bar", "Barda çay sipariş etmek", "Ordering a tea at the bar", { A: "Serveur", B: "Esin" }, "B", `
A|Bonjour madame ! Qu'est-ce que je vous sers ?|Merhaba hanımefendi! Ne alırsınız?|Hello, madam! What can I get you?
B|Bonjour ! Un thé, s'il vous plaît.|Merhaba! Bir çay lütfen.|Hello! A tea, please.
A|Thé noir, thé vert ou infusion ?|Siyah çay, yeşil çay ya da bitki çayı?|Black tea, green tea or herbal tea?
B|Un thé noir, s'il vous plaît. Avec un peu de lait froid à côté.|Siyah çay lütfen. Yanında biraz soğuk süt olsun.|A black tea, please. With a little cold milk on the side.
A|Bien sûr. Du sucre ?|Tabii. Şeker?|Of course. Sugar?
B|Non merci, sans sucre. En Turquie, on boit beaucoup de thé, mais dans un petit verre !|Hayır teşekkürler, şekersiz. Türkiye'de çok çay içeriz ama küçük bardakta!|No thanks, no sugar. In Turkey we drink a lot of tea, but in a small glass!
A|Ah oui ? Ici, c'est une grande tasse. Vous le buvez au bar ou en terrasse ?|Öyle mi? Burada büyük bir fincan. Barda mı içeceksiniz, terasta mı?|Really? Here it's a big cup. Will you drink it at the bar or on the terrace?
B|Au bar. Il fait froid dehors !|Barda. Dışarısı soğuk!|At the bar. It's cold outside!
A|C'est vrai. Voilà votre thé. Attention, c'est très chaud.|Doğru. Çayınız buyurun. Dikkat, çok sıcak.|True. Here's your tea. Careful, it's very hot.
B|Merci. Vous avez aussi des croissants ?|Teşekkürler. Kruvasanınız da var mı?|Thank you. Do you have croissants too?
A|Désolé, il n'y a plus de croissants. Mais il reste un pain au chocolat.|Kusura bakmayın, kruvasan kalmadı. Ama bir tane çikolatalı çörek kaldı.|Sorry, there are no croissants left. But there's one pain au chocolat left.
B|Parfait, je le prends ! Ça fait combien ?|Mükemmel, onu alıyorum! Ne kadar tutuyor?|Perfect, I'll take it! How much is that?
A|Le thé et le pain au chocolat, 4,10 €.|Çay ve çikolatalı çörek, 4,10 €.|The tea and the pain au chocolat, €4.10.
B|Voilà 5 euros. Gardez la monnaie.|Buyurun 5 euro. Üstü kalsın.|Here's 5 euros. Keep the change.
A|Merci beaucoup ! Bonne journée, madame.|Çok teşekkürler! İyi günler hanımefendi.|Thank you very much! Have a nice day, madam.`),

    D("d-gardien", "A1", "Dire bonjour au gardien de l'immeuble", "Apartman görevlisine merhaba demek", "Saying hello to the building caretaker", { A: "Monsieur Dias", B: "Esin" }, "B", `
A|Bonjour madame ! Je suis le nouveau gardien de l'immeuble. Je m'appelle Michel Dias.|Merhaba hanımefendi! Ben apartmanın yeni görevlisiyim. Adım Michel Dias.|Hello, madam! I'm the new caretaker of the building. My name is Michel Dias.
B|Bonjour, enchantée ! Je m'appelle Esin. J'habite ici.|Merhaba, memnun oldum! Benim adım Esin. Burada oturuyorum.|Hello, nice to meet you! My name is Esin. I live here.
A|Mon bureau est ici, au rez-de-chaussée. Si vous avez des questions, vous pouvez venir me voir.|Ofisim burada, zemin katta. Sorularınız olursa bana gelebilirsiniz.|My office is here, on the ground floor. If you have any questions, you can come and see me.
B|Merci ! Vous êtes là tous les jours ?|Teşekkürler! Her gün burada mısınız?|Thanks! Are you here every day?
A|Du lundi au vendredi, de 8 h à 12 h et de 14 h à 18 h.|Pazartesiden cumaya, 8'den 12'ye ve 14'ten 18'e kadar.|Monday to Friday, from 8 to 12 and from 2 to 6.
B|D'accord. J'ai une question : les bouteilles en verre, je les mets où ?|Tamam. Bir sorum var: cam şişeleri nereye koyuyorum?|OK. I have a question: where do I put glass bottles?
A|Le verre, c'est dans le conteneur, dans la rue, à côté de la boulangerie.|Cam, sokaktaki konteynere, fırının yanına.|Glass goes in the container in the street, next to the bakery.
B|Et la poubelle jaune, dans la cour, c'est pour quoi ?|Peki avludaki sarı çöp kutusu ne için?|And the yellow bin in the courtyard, what's it for?
A|Pour le plastique, le carton et le papier.|Plastik, karton ve kâğıt için.|For plastic, cardboard and paper.
B|Merci. J'attends un colis cette semaine. Vous pouvez le prendre ?|Teşekkürler. Bu hafta bir kargo bekliyorum. Siz teslim alabilir misiniz?|Thanks. I'm expecting a parcel this week. Can you take it?
A|Oui, bien sûr. Je le garde dans mon bureau.|Evet, tabii. Ofisimde saklarım.|Yes, of course. I'll keep it in my office.
B|C'est très gentil. Merci beaucoup !|Çok naziksiniz. Çok teşekkürler!|That's very kind. Thank you very much!
A|De rien. Bienvenue dans l'immeuble, madame !|Bir şey değil. Apartmana hoş geldiniz hanımefendi!|You're welcome. Welcome to the building, madam!`),

    D("d-marche-noel", "A1", "Au marché de Noël", "Noel pazarında", "At the Christmas market", { A: "Vendeuse", B: "Esin" }, "B", `
B|Bonsoir ! C'est très joli ici, avec toutes les lumières !|İyi akşamlar! Bütün ışıklarla burası çok güzel!|Good evening! It's very pretty here, with all the lights!
A|Bonsoir madame ! Oui, c'est la magie de Noël. Vous voulez goûter ?|İyi akşamlar hanımefendi! Evet, Noel'in büyüsü. Tadına bakmak ister misiniz?|Good evening, madam! Yes, it's the magic of Christmas. Would you like a taste?
B|Qu'est-ce que c'est ?|Bu ne?|What is it?
A|C'est du pain d'épices. Avec du miel et de la cannelle.|Zencefilli kek. Bal ve tarçınlı.|It's gingerbread. With honey and cinnamon.
B|Oui, merci… Mmm, c'est délicieux ! Ça ressemble à un gâteau turc.|Evet, teşekkürler… Hmm, çok lezzetli! Bir Türk kekine benziyor.|Yes, thank you… Mmm, it's delicious! It's like a Turkish cake.
A|Ah, vous êtes turque ? Bienvenue ! C'est votre premier marché de Noël ?|Ah, Türk müsünüz? Hoş geldiniz! Bu ilk Noel pazarınız mı?|Ah, you're Turkish? Welcome! Is this your first Christmas market?
B|Oui, c'est la première fois. Je voudrais un pain d'épices, s'il vous plaît.|Evet, ilk kez geliyorum. Bir zencefilli kek istiyorum lütfen.|Yes, it's the first time. I'd like a gingerbread, please.
A|Un petit ou un grand ?|Küçük mü, büyük mü?|A small one or a big one?
B|Un grand. C'est pour mon mari et moi.|Büyük. Kocam ve benim için.|A big one. It's for my husband and me.
A|Très bien. C'est 8 €. Et nous avons aussi des bougies. Elles sentent l'orange.|Çok iyi. 8 €. Mumlarımız da var. Portakal kokuyorlar.|Very good. It's €8. And we also have candles. They smell of orange.
B|Oh, elles sentent bon ! Une bougie, c'est combien ?|Ah, çok güzel kokuyorlar! Bir mum ne kadar?|Oh, they smell nice! How much is one candle?
A|6 €. Le pain d'épices et la bougie, ça fait 14 €.|6 €. Zencefilli kek ve mum, 14 € ediyor.|€6. The gingerbread and the candle, that's €14.
B|Je prends les deux. Où est-ce qu'on peut boire un chocolat chaud ?|İkisini de alıyorum. Nerede sıcak çikolata içebiliriz?|I'll take both. Where can you get a hot chocolate?
A|Là-bas, à côté du grand sapin. Joyeux Noël, madame !|Şurada, büyük çam ağacının yanında. Mutlu Noeller hanımefendi!|Over there, next to the big Christmas tree. Merry Christmas, madam!
B|Merci, joyeux Noël à vous aussi !|Teşekkürler, size de mutlu Noeller!|Thank you, merry Christmas to you too!`),

    D("d-yoga-tel", "A1", "Réserver un cours de yoga par téléphone", "Telefonla yoga dersi ayırtmak", "Booking a yoga class by phone", { A: "Professeure", B: "Esin" }, "B", `
A|Studio Zen, bonjour !|Studio Zen, merhaba!|Studio Zen, hello!
B|Bonjour madame. Je voudrais réserver un cours de yoga, s'il vous plaît.|Merhaba hanımefendi. Bir yoga dersi ayırtmak istiyorum lütfen.|Hello, madam. I'd like to book a yoga class, please.
A|Avec plaisir. C'est votre premier cours ?|Memnuniyetle. İlk dersiniz mi?|With pleasure. Is it your first class?
B|Oui. Je suis débutante en yoga.|Evet. Yogada yeniyim.|Yes. I'm a beginner at yoga.
A|Alors, je vous conseille le cours débutant. Il y a un cours le mardi à 19 h et le dimanche à 10 h.|O zaman başlangıç dersini öneririm. Salı saat 19'da ve pazar saat 10'da ders var.|Then I recommend the beginners' class. There's a class on Tuesday at 7 pm and on Sunday at 10 am.
B|Le mardi soir, je travaille. Le dimanche, c'est parfait.|Salı akşamları çalışıyorum. Pazar mükemmel.|On Tuesday evenings I work. Sunday is perfect.
A|Très bien. Le cours dure une heure. C'est à quel nom ?|Çok iyi. Ders bir saat sürüyor. Hangi isme?|Very good. The class lasts an hour. What name is it under?
B|Esin Yılmaz. E-S-I-N.|Esin Yılmaz. E-S-I-N.|Esin Yılmaz. E-S-I-N.
A|Merci. Le premier cours est gratuit. Ensuite, c'est 15 € le cours.|Teşekkürler. İlk ders ücretsiz. Sonrası ders başı 15 €.|Thank you. The first class is free. After that, it's €15 a class.
B|Super ! Je dois apporter un tapis ?|Süper! Mat getirmem gerekiyor mu?|Great! Do I need to bring a mat?
A|Non, nous avons des tapis. Apportez une bouteille d'eau et des vêtements confortables.|Hayır, matlarımız var. Bir şişe su ve rahat kıyafetler getirin.|No, we have mats. Bring a bottle of water and comfortable clothes.
B|D'accord. J'arrive à quelle heure ?|Tamam. Saat kaçta geleyim?|OK. What time should I arrive?
A|Dix minutes avant, à 9 h 50, s'il vous plaît.|On dakika önce, saat 9.50'de lütfen.|Ten minutes before, at 9:50, please.
B|Parfait. Merci beaucoup, à dimanche !|Mükemmel. Çok teşekkürler, pazar görüşmek üzere!|Perfect. Thank you very much, see you on Sunday!
A|À dimanche, madame. Bonne journée !|Pazar görüşürüz hanımefendi. İyi günler!|See you on Sunday, madam. Have a nice day!`),

    D("d-cadeau-mari", "A1", "Acheter un cadeau pour son mari", "Kocasına hediye almak", "Buying a present for your husband", { A: "Vendeur", B: "Esin" }, "B", `
A|Bonjour madame. Je peux vous aider ?|Merhaba hanımefendi. Yardımcı olabilir miyim?|Hello, madam. Can I help you?
B|Bonjour. Oui, je cherche un cadeau pour mon mari. C'est pour Noël.|Merhaba. Evet, kocama bir hediye arıyorum. Noel için.|Hello. Yes, I'm looking for a present for my husband. It's for Christmas.
A|Ah, très bien ! Vous avez une idée ?|Ah, çok güzel! Bir fikriniz var mı?|Ah, lovely! Do you have an idea?
B|Une écharpe, peut-être. L'hiver arrive !|Belki bir atkı. Kış geliyor!|A scarf, maybe. Winter is coming!
A|Nous avons de belles écharpes en laine. Ici, regardez.|Güzel yün atkılarımız var. İşte, bakın.|We have lovely wool scarves. Here, have a look.
B|Elles sont douces ! Vous avez quelles couleurs ?|Çok yumuşaklar! Hangi renkleriniz var?|They're soft! What colours do you have?
A|Bleu marine, gris, vert et rouge.|Lacivert, gri, yeşil ve kırmızı.|Navy blue, grey, green and red.
B|Le bleu marine, c'est classique. C'est bien.|Lacivert klasik. Bu iyi.|Navy blue is classic. That's good.
A|Bon choix. Elle est à 35 €.|İyi seçim. 35 €.|Good choice. It's €35.
B|D'accord. Et si la couleur ne va pas, je peux l'échanger ?|Tamam. Renk olmazsa değiştirebilir miyim?|OK. And if the colour isn't right, can I exchange it?
A|Oui, vous avez trente jours. Gardez bien le ticket.|Evet, otuz gününüz var. Fişi iyi saklayın.|Yes, you have thirty days. Keep the receipt safe.
B|Parfait. Vous pouvez faire un paquet cadeau ?|Mükemmel. Hediye paketi yapabilir misiniz?|Perfect. Can you gift-wrap it?
A|Bien sûr, c'est gratuit. Avec un ruban bleu ?|Tabii, ücretsiz. Mavi kurdeleyle mi?|Of course, it's free. With a blue ribbon?
B|Oui, merci ! Il va être content.|Evet, teşekkürler! Çok sevinecek.|Yes, thank you! He's going to be happy.
A|J'en suis sûr. Joyeux Noël à vous deux !|Eminim. İkinize de mutlu Noeller!|I'm sure he will. Merry Christmas to you both!`),

    D("d-parc-banc", "A1", "Au parc : je peux m'asseoir ?", "Parkta: oturabilir miyim?", "In the park: may I sit down?", { A: "Madame Roux", B: "Esin" }, "B", `
B|Excusez-moi, madame. Je peux m'asseoir ici ?|Affedersiniz hanımefendi. Buraya oturabilir miyim?|Excuse me, madam. May I sit here?
A|Bien sûr, asseyez-vous ! Il y a de la place.|Tabii, oturun! Yer var.|Of course, sit down! There's room.
B|Merci. Je suis un peu fatiguée. Je viens de courir.|Teşekkürler. Biraz yorgunum. Koşudan yeni geldim.|Thanks. I'm a bit tired. I've just been running.
A|Ah, bravo ! Vous courez souvent ?|Ah, bravo! Sık koşar mısınız?|Ah, well done! Do you run often?
B|Oui, le samedi matin, ici, dans ce parc. J'adore ce parc.|Evet, cumartesi sabahları, burada, bu parkta. Bu parka bayılıyorum.|Yes, on Saturday mornings, here, in this park. I love this park.
A|Moi aussi. Je viens tous les jours avec mon chien. Il s'appelle Biscuit.|Ben de. Her gün köpeğimle geliyorum. Adı Biscuit.|Me too. I come every day with my dog. His name is Biscuit.
B|Il est mignon ! Je peux le caresser ?|Çok tatlı! Onu sevebilir miyim?|He's cute! Can I stroke him?
A|Oui, il est très gentil. Il adore les gens.|Evet, çok uysal. İnsanlara bayılıyor.|Yes, he's very friendly. He loves people.
B|Bonjour, Biscuit ! Oh, il est doux.|Merhaba Biscuit! Ah, ne kadar yumuşak.|Hello, Biscuit! Oh, he's soft.
A|Vous avez un accent. Vous venez d'où ?|Bir aksanınız var. Nerelisiniz?|You have an accent. Where are you from?
B|Je suis turque. J'habite en France depuis un an.|Türküm. Bir yıldır Fransa'da yaşıyorum.|I'm Turkish. I've been living in France for a year.
A|Vous parlez bien français !|Fransızcanız iyi!|You speak French well!
B|Merci, c'est gentil. J'apprends tous les jours.|Teşekkürler, çok naziksiniz. Her gün öğreniyorum.|Thank you, that's kind. I learn every day.
A|Alors à samedi prochain, peut-être !|O zaman belki gelecek cumartesi görüşürüz!|Then see you next Saturday, maybe!
B|Avec plaisir ! Au revoir, madame. Au revoir, Biscuit !|Memnuniyetle! Hoşça kalın hanımefendi. Hoşça kal Biscuit!|With pleasure! Goodbye, madam. Goodbye, Biscuit!`),

    D("d-caisse-auto", "A1", "À la caisse automatique", "Self servis kasada", "At the self-checkout", { A: "Employé", B: "Esin" }, "B", `
B|Excusez-moi, monsieur. Vous pouvez m'aider ? La machine ne marche pas.|Affedersiniz beyefendi. Bana yardım edebilir misiniz? Makine çalışmıyor.|Excuse me, sir. Can you help me? The machine isn't working.
A|Bien sûr, madame. Qu'est-ce qui se passe ?|Tabii hanımefendi. Ne oldu?|Of course, madam. What's happening?
B|Je passe les pommes, mais il n'y a pas de prix.|Elmaları okutuyorum ama fiyat çıkmıyor.|I scan the apples, but there's no price.
A|Ah, les fruits, il faut les peser. Mettez les pommes ici, sur la balance.|Ah, meyveleri tartmak gerekiyor. Elmaları buraya, teraziye koyun.|Ah, fruit has to be weighed. Put the apples here, on the scales.
B|D'accord. Et après ?|Tamam. Sonra?|OK. And then?
A|Touchez « Fruits et légumes » sur l'écran, puis « Pommes ».|Ekranda « Meyve ve sebze »ye, sonra « Elma »ya dokunun.|Touch "Fruit and vegetables" on the screen, then "Apples".
B|Voilà ! Le prix est là. Merci !|İşte! Fiyat çıktı. Teşekkürler!|There! The price is there. Thanks!
A|De rien. Vous avez un sac ?|Bir şey değil. Poşetiniz var mı?|You're welcome. Do you have a bag?
B|Oui, j'ai mon sac. Je le mets où ?|Evet, çantam var. Nereye koyayım?|Yes, I have my bag. Where do I put it?
A|À gauche, ici. Après le scan, mettez chaque article dans le sac.|Burada, solda. Okuttuktan sonra her ürünü çantaya koyun.|On the left, here. After scanning, put each item in the bag.
B|Oh, la machine dit « Attendez un employé ». Pourquoi ?|Ah, makine « Bir görevli bekleyin » diyor. Neden?|Oh, the machine says "Wait for a staff member". Why?
A|Ce n'est pas grave. Ça arrive souvent. Je tape mon code… Voilà, c'est bon.|Önemli değil. Sık oluyor. Kodumu giriyorum… İşte, tamam.|It's nothing serious. It happens often. I type my code… There, it's fine.
B|Merci. Je peux payer avec mon téléphone ?|Teşekkürler. Telefonumla ödeyebilir miyim?|Thanks. Can I pay with my phone?
A|Oui, touchez « Payer », puis approchez votre téléphone du lecteur.|Evet, « Öde »ye dokunun, sonra telefonunuzu okuyucuya yaklaştırın.|Yes, touch "Pay", then hold your phone near the reader.
B|Ça marche ! Merci pour votre patience, monsieur.|Oldu! Sabrınız için teşekkürler beyefendi.|It worked! Thank you for your patience, sir.`),

    D("d-creperie", "A1", "À la crêperie", "Krepçide", "At the crêperie", { A: "Serveuse", B: "Esin" }, "B", `
A|Bonsoir ! Vous avez choisi ?|İyi akşamlar! Seçtiniz mi?|Good evening! Have you chosen?
B|Bonsoir. Pas encore. Quelle est la différence entre une galette et une crêpe ?|İyi akşamlar. Henüz değil. Galette ile krep arasındaki fark ne?|Good evening. Not yet. What's the difference between a galette and a crêpe?
A|La galette, c'est salé, avec de la farine de sarrasin. La crêpe, c'est sucré.|Galette tuzlu, karabuğday unuyla yapılıyor. Krep tatlı.|The galette is savoury, made with buckwheat flour. The crêpe is sweet.
B|Ah, d'accord ! Alors, une galette d'abord. Qu'est-ce que vous conseillez ?|Ah, tamam! O zaman önce bir galette. Ne önerirsiniz?|Ah, OK! Then a galette first. What do you recommend?
A|La complète : jambon, fromage et œuf. C'est la plus populaire.|« Complète »: jambon, peynir ve yumurta. En sevileni o.|The "complète": ham, cheese and egg. It's the most popular.
B|Hmm… Il y a une galette sans viande ?|Hmm… Etsiz bir galette var mı?|Hmm… Is there a galette without meat?
A|Oui, la galette aux champignons, avec du fromage et des épinards.|Evet, mantarlı galette, peynir ve ıspanakla.|Yes, the mushroom galette, with cheese and spinach.
B|Parfait, je prends ça. Et comme boisson, de l'eau, s'il vous plaît.|Mükemmel, onu alıyorum. İçecek olarak da su lütfen.|Perfect, I'll have that. And to drink, water, please.
A|Une carafe d'eau ? C'est gratuit.|Bir sürahi su mu? Ücretsiz.|A jug of water? It's free.
B|Oui, très bien. Merci.|Evet, çok iyi. Teşekkürler.|Yes, very good. Thank you.
A|Voilà votre galette. Bon appétit !|Galetteniz buyurun. Afiyet olsun!|Here's your galette. Enjoy your meal!
B|Merci ! C'était délicieux. Je voudrais une crêpe au chocolat, maintenant.|Teşekkürler! Çok lezzetliydi. Şimdi de çikolatalı bir krep istiyorum.|Thanks! It was delicious. Now I'd like a chocolate crêpe.
A|Avec de la chantilly ?|Krem şantiyle mi?|With whipped cream?
B|Oh oui, avec de la chantilly ! Et l'addition, s'il vous plaît.|Ah evet, krem şantiyle! Ve hesap lütfen.|Oh yes, with whipped cream! And the bill, please.
A|Bien sûr. Je vous apporte tout ça.|Tabii. Hepsini getiriyorum.|Of course. I'll bring you all that.`)
  );
})();
