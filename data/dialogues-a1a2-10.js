/* More real-life dialogues (A1): health and sport, often at Esin's gym front desk. Played line by line with French audio.
   Lines: "A|français|Türkçe|English" or "B|…". In role-play, the learner says the "me" side. */
(function () {
  const L = s => s.trim().split("\n").map(l => { const [who, fr, tr, en] = l.split("|").map(x => x.trim()); return { who, fr, tr, en }; });
  const D = (id, level, fr, tr, en, roles, me, lines) => ({ id, level, t: { fr, tr, en }, roles, me, lines: L(lines) });

  window.DIALOGUES = window.DIALOGUES || [];
  window.DIALOGUES.push(
    D("d10-carte-oubliee", "A1", "À l'accueil : j'ai oublié ma carte", "Resepsiyonda: Kartımı unuttum", "At the front desk: I forgot my card", { A: "Karim", B: "Esin" }, "B", `
A|Bonjour Esin ! Oh non… J'ai oublié ma carte de membre à la maison.|Merhaba Esin! Ah hayır… Üyelik kartımı evde unuttum.|Hello, Esin! Oh no… I left my membership card at home.
B|Bonjour Karim ! Ce n'est pas grave. Vous avez une pièce d'identité ?|Merhaba Karim! Önemli değil. Kimliğiniz yanınızda mı?|Hello, Karim! It doesn't matter. Do you have some ID?
A|Oui, j'ai mon permis de conduire. Voilà.|Evet, ehliyetim var. Buyurun.|Yes, I have my driving licence. Here you are.
B|Merci. Vous vous appelez Karim Benali, c'est ça ?|Teşekkürler. Adınız Karim Benali, değil mi?|Thanks. Your name is Karim Benali, is that right?
A|Oui, c'est ça.|Evet, doğru.|Yes, that's right.
B|Parfait, je vous trouve dans l'ordinateur. Votre abonnement est valable jusqu'en juin.|Harika, sizi bilgisayarda buluyorum. Aboneliğiniz hazirana kadar geçerli.|Perfect, I can find you on the computer. Your membership is valid until June.
A|Super. Mais comment j'entre sans ma carte ?|Süper. Ama kartım olmadan nasıl giriyorum?|Great. But how do I get in without my card?
B|J'ouvre la porte pour vous. Voilà, c'est ouvert !|Kapıyı sizin için açıyorum. İşte, açıldı!|I'll open the door for you. There you go, it's open!
A|Merci beaucoup. Je suis vraiment désolé.|Çok teşekkürler. Gerçekten özür dilerim.|Thank you very much. I'm really sorry.
B|Pas de souci ! Ça arrive à tout le monde. Moi, j'oublie souvent mes clés.|Dert etmeyin! Herkesin başına gelir. Ben de anahtarlarımı sık sık unuturum.|No worries! It happens to everyone. I often forget my keys.
A|Ha ha ! Et demain, si j'oublie encore ma carte ?|Ha ha! Peki yarın kartımı yine unutursam?|Ha ha! And tomorrow, if I forget my card again?
B|Vous pouvez aussi télécharger l'application de la salle. La carte est dans le téléphone.|Salonun uygulamasını da indirebilirsiniz. Kart telefonunuzda olur.|You can also download the gym's app. The card is in your phone.
A|Ah, c'est pratique ! Je la télécharge ce soir.|Ah, çok pratik! Bu akşam indiririm.|Ah, that's handy! I'll download it tonight.
B|Très bonne idée. Bonne séance, Karim !|Çok iyi fikir. İyi antrenmanlar Karim!|Very good idea. Have a good workout, Karim!`),

    D("d10-squash", "A1", "Réserver un terrain de squash", "Squash kortu ayırtmak", "Booking a squash court", { A: "Madame Petit", B: "Esin" }, "B", `
A|Bonjour. Je voudrais réserver un court de squash, s'il vous plaît.|Merhaba. Bir squash kortu ayırtmak istiyorum, lütfen.|Hello. I'd like to book a squash court, please.
B|Bonjour madame. Bien sûr. C'est pour quel jour ?|Merhaba hanımefendi. Tabii. Hangi gün için?|Hello, madam. Of course. Which day is it for?
A|Pour jeudi soir, vers 19 heures.|Perşembe akşamı için, saat 19 civarı.|For Thursday evening, around 7 p.m.
B|Je regarde… Désolée, jeudi à 19 heures, c'est complet. Il y a de la place à 20 heures.|Bakıyorum… Üzgünüm, perşembe saat 19 dolu. Saat 20'de yer var.|Let me look… Sorry, Thursday at 7 p.m. is full. There's space at 8 p.m.
A|20 heures, c'est un peu tard… Et vendredi à 19 heures ?|Saat 20 biraz geç… Peki cuma saat 19?|8 p.m. is a bit late… And Friday at 7 p.m.?
B|Vendredi à 19 heures, c'est libre. Vous jouez combien de temps ?|Cuma saat 19 boş. Ne kadar süre oynuyorsunuz?|Friday at 7 p.m. is free. How long are you playing for?
A|Une heure. Je joue avec mon frère.|Bir saat. Kardeşimle oynuyorum.|One hour. I'm playing with my brother.
B|D'accord. C'est 12 euros l'heure pour le court. Votre frère est membre aussi ?|Tamam. Kortun saatlik ücreti 12 euro. Kardeşiniz de üye mi?|OK. The court is 12 euros an hour. Is your brother a member too?
A|Non, il n'est pas membre. C'est un problème ?|Hayır, üye değil. Bu bir sorun mu?|No, he isn't a member. Is that a problem?
B|Non, pas du tout. Il paie 5 euros en plus, c'est tout.|Hayır, hiç değil. 5 euro fazladan ödüyor, o kadar.|No, not at all. He pays 5 euros extra, that's all.
A|Très bien. Et les raquettes ? Nous n'avons pas de raquettes.|Çok iyi. Peki raketler? Bizim raketimiz yok.|Very good. And the rackets? We don't have rackets.
B|Vous pouvez louer des raquettes ici, 2 euros chacune. Les balles sont gratuites.|Burada raket kiralayabilirsiniz, tanesi 2 euro. Toplar ücretsiz.|You can rent rackets here, 2 euros each. The balls are free.
A|Parfait ! Alors, vendredi à 19 heures, avec deux raquettes.|Harika! O zaman cuma saat 19, iki raketle.|Perfect! So, Friday at 7 p.m., with two rackets.
B|C'est noté. Le court numéro 2, au premier étage. Bon match, madame !|Kaydettim. 2 numaralı kort, birinci katta. İyi maçlar hanımefendi!|It's booked. Court number 2, on the first floor. Have a good match, madam!
A|Merci ! Mon frère ne gagne jamais, mais il est très motivé !|Teşekkürler! Kardeşim hiç kazanmaz ama çok hevesli!|Thanks! My brother never wins, but he's very motivated!`),

    D("d10-bouteille-eau", "A1", "Acheter une bouteille d'eau à l'accueil", "Resepsiyondan bir şişe su almak", "Buying a bottle of water at the front desk", { A: "Léo", B: "Esin" }, "B", `
A|Bonjour ! Vous vendez de l'eau ici ?|Merhaba! Burada su satıyor musunuz?|Hello! Do you sell water here?
B|Bonjour ! Oui, bien sûr. Une petite ou une grande bouteille ?|Merhaba! Evet, tabii. Küçük şişe mi, büyük şişe mi?|Hello! Yes, of course. A small or a large bottle?
A|Une grande, s'il vous plaît. J'ai très soif !|Büyük olsun, lütfen. Çok susadım!|A large one, please. I'm very thirsty!
B|Vous avez fait du sport ?|Spor mu yaptınız?|Have you been doing some sport?
A|Oui, le cours de cardio. Le coach est très dur… et moi, je suis très fatigué.|Evet, kardiyo dersi. Antrenör çok sert… ben de çok yorgunum.|Yes, the cardio class. The coach is very tough… and I'm very tired.
B|Ha ha, c'est normal ! Il faut boire beaucoup. Voilà votre bouteille.|Ha ha, normal! Bol su içmek lazım. İşte şişeniz.|Ha ha, that's normal! You need to drink a lot. Here's your bottle.
A|Merci. C'est combien ?|Teşekkürler. Ne kadar?|Thanks. How much is it?
B|C'est 1 euro 50.|1 euro 50.|It's 1 euro 50.
A|Je peux payer par carte ?|Kartla ödeyebilir miyim?|Can I pay by card?
B|Oui, sans problème. Posez la carte ici, sur la machine.|Evet, sorun değil. Kartınızı buraya, cihaza yaklaştırın.|Yes, no problem. Hold your card here, on the machine.
A|C'est bon ?|Tamam mı?|Is that OK?
B|Oui, c'est payé. Vous savez, il y a aussi une fontaine à eau gratuite, à côté des vestiaires.|Evet, ödendi. Biliyor musunuz, soyunma odalarının yanında ücretsiz bir su sebili de var.|Yes, it's paid. You know, there's also a free water fountain next to the changing rooms.
A|Ah bon ? Je ne savais pas !|Öyle mi? Bilmiyordum!|Really? I didn't know!
B|Oui. La prochaine fois, apportez une gourde. C'est gratuit et c'est bon pour la planète.|Evet. Bir dahaki sefere matara getirin. Hem ücretsiz hem de gezegen için iyi.|Yes. Next time, bring a reusable bottle. It's free and it's good for the planet.
A|Bonne idée ! Merci, et à mercredi !|İyi fikir! Teşekkürler, çarşambaya görüşürüz!|Good idea! Thanks, and see you on Wednesday!
B|À mercredi ! Courage pour le cours !|Çarşambaya görüşürüz! Derste kolay gelsin!|See you on Wednesday! Good luck with the class!`),

    D("d10-objets-trouves", "A1", "Les objets trouvés : une veste oubliée", "Kayıp eşyalar: Unutulan bir ceket", "Lost property: a forgotten jacket", { A: "Monsieur Moreau", B: "Esin" }, "B", `
A|Bonjour madame. Hier soir, j'ai oublié ma veste ici, je crois.|Merhaba hanımefendi. Sanırım dün akşam ceketimi burada unuttum.|Hello, madam. I think I left my jacket here last night.
B|Bonjour monsieur. Nous avons une boîte pour les objets trouvés. Votre veste est comment ?|Merhaba beyefendi. Kayıp eşyalar için bir kutumuz var. Ceketiniz nasıl bir şey?|Hello, sir. We have a box for lost property. What does your jacket look like?
A|C'est une veste de sport bleue, avec une capuche.|Mavi, kapüşonlu bir spor ceketi.|It's a blue sports jacket, with a hood.
B|Je regarde… Il y a une veste bleue, mais elle est petite. C'est une veste d'enfant.|Bakıyorum… Mavi bir ceket var ama küçük. Çocuk ceketi.|Let me look… There's a blue jacket, but it's small. It's a child's jacket.
A|Ah non, ce n'est pas la mienne. Moi, je fais du XL !|Ah hayır, o benim değil. Ben XL giyiyorum!|Ah no, that isn't mine. I wear XL!
B|D'accord. Il y a aussi une veste bleu foncé, taille XL. Il y a un logo blanc devant.|Tamam. Bir de lacivert, XL beden bir ceket var. Önünde beyaz bir logo var.|OK. There's also a dark blue jacket, size XL. There's a white logo on the front.
A|Oui ! C'est ma veste ! Il y a mes clés dans la poche ?|Evet! Bu benim ceketim! Cebinde anahtarlarım var mı?|Yes! That's my jacket! Are my keys in the pocket?
B|Attendez, je regarde… Oui, il y a des clés avec un petit ballon de rugby.|Bekleyin, bakıyorum… Evet, üzerinde küçük bir rugby topu olan anahtarlar var.|Wait, let me look… Yes, there are some keys with a little rugby ball.
A|Ouf ! Ce sont mes clés. Je cherche partout depuis ce matin !|Oh be! Bunlar benim anahtarlarım. Sabahtan beri her yerde arıyorum!|Phew! Those are my keys. I've been looking everywhere since this morning!
B|Vous pouvez me dire votre nom ? J'écris dans le cahier.|Adınızı söyler misiniz? Deftere yazıyorum.|Can you tell me your name? I'm writing it in the book.
A|Bien sûr. Moreau, Thomas Moreau.|Tabii. Moreau, Thomas Moreau.|Of course. Moreau, Thomas Moreau.
B|Merci. Voilà votre veste et vos clés, monsieur Moreau.|Teşekkürler. İşte ceketiniz ve anahtarlarınız, Moreau Bey.|Thank you. Here are your jacket and your keys, Mr Moreau.
A|Merci mille fois ! Vous êtes super.|Bin kere teşekkürler! Harikasınız.|Thank you so much! You're great.
B|Avec plaisir. Et ce soir, n'oubliez pas votre veste !|Rica ederim. Bu akşam da ceketinizi unutmayın!|My pleasure. And tonight, don't forget your jacket!`),

    D("d10-pharmacie-tete", "A1", "À la pharmacie : un mal de tête", "Eczanede: Baş ağrısı", "At the chemist's: a headache", { A: "Pharmacienne", B: "Esin" }, "B", `
A|Bonjour madame. Je peux vous aider ?|Merhaba hanımefendi. Yardımcı olabilir miyim?|Hello, madam. Can I help you?
B|Bonjour. Je voudrais quelque chose pour le mal de tête, s'il vous plaît.|Merhaba. Baş ağrısı için bir şey istiyorum, lütfen.|Hello. I'd like something for a headache, please.
A|C'est pour vous ?|Sizin için mi?|Is it for you?
B|Non, c'est pour mon mari. Il a mal à la tête depuis hier soir.|Hayır, eşim için. Dün akşamdan beri başı ağrıyor.|No, it's for my husband. He's had a headache since last night.
A|Il a de la fièvre ?|Ateşi var mı?|Does he have a temperature?
B|Non, pas de fièvre. Mais il est fatigué. Il travaille beaucoup sur l'ordinateur.|Hayır, ateşi yok. Ama yorgun. Bilgisayarda çok çalışıyor.|No, no temperature. But he's tired. He works a lot on the computer.
A|D'accord. Il prend d'autres médicaments ?|Tamam. Başka ilaç kullanıyor mu?|OK. Is he taking any other medicine?
B|Non, rien.|Hayır, hiçbir şey.|No, nothing.
A|Alors, je vous conseille du paracétamol. Un comprimé, trois fois par jour maximum.|O zaman size parasetamol öneririm. Bir tablet, günde en fazla üç kez.|Then I recommend paracetamol. One tablet, three times a day at most.
B|Un comprimé, trois fois par jour. Avec de l'eau ?|Bir tablet, günde üç kez. Suyla mı?|One tablet, three times a day. With water?
A|Oui, avec un grand verre d'eau. Et il doit aussi faire des pauses loin de l'écran.|Evet, büyük bir bardak suyla. Bir de ekrandan uzak molalar vermesi gerekiyor.|Yes, with a big glass of water. And he should also take breaks away from the screen.
B|Je vais lui dire ! Et s'il a encore mal dans trois jours ?|Ona söyleyeceğim! Peki üç gün sonra hâlâ ağrısı olursa?|I'll tell him! And if it still hurts in three days?
A|Alors, il doit aller chez le médecin. C'est important.|O zaman doktora gitmesi gerekiyor. Bu önemli.|Then he must see a doctor. That's important.
B|D'accord. C'est combien, la boîte ?|Tamam. Kutusu ne kadar?|OK. How much is the box?
A|C'est 2 euros 18. Vous voulez un sac ?|2 euro 18. Poşet ister misiniz?|It's 2 euros 18. Would you like a bag?
B|Non merci, j'ai mon sac. Bonne journée !|Hayır teşekkürler, çantam var. İyi günler!|No thanks, I have my bag. Have a nice day!`),

    D("d10-judo-enfant", "A1", "Inscrire un enfant au cours de judo", "Bir çocuğu judo dersine kaydettirmek", "Signing a child up for judo", { A: "Madame Diallo", B: "Esin" }, "B", `
A|Bonjour. Il y a un cours de judo pour les enfants ici ?|Merhaba. Burada çocuklar için judo dersi var mı?|Hello. Is there a judo class for children here?
B|Bonjour madame. Oui, il y a un cours le mercredi après-midi. Votre enfant a quel âge ?|Merhaba hanımefendi. Evet, çarşamba öğleden sonra bir ders var. Çocuğunuz kaç yaşında?|Hello, madam. Yes, there's a class on Wednesday afternoons. How old is your child?
A|Mon fils a huit ans. Il s'appelle Moussa.|Oğlum sekiz yaşında. Adı Moussa.|My son is eight. His name is Moussa.
B|Très bien. Le cours des 6-9 ans, c'est de 14 heures à 15 heures.|Çok iyi. 6-9 yaş dersi saat 14'ten 15'e kadar.|Very good. The class for 6 to 9-year-olds is from 2 to 3 p.m.
A|Parfait, il n'a pas école le mercredi après-midi. Il faut un kimono ?|Harika, çarşamba öğleden sonra okulu yok. Kimono gerekiyor mu?|Perfect, he doesn't have school on Wednesday afternoons. Does he need a judo suit?
B|Oui, il faut un kimono. Mais pour le premier cours, un jogging et un tee-shirt, c'est suffisant.|Evet, kimono gerekiyor. Ama ilk ders için eşofman ve tişört yeterli.|Yes, he needs a judo suit. But for the first class, jogging bottoms and a T-shirt are enough.
A|Ah, il y a un cours d'essai ?|Ah, deneme dersi mi var?|Ah, is there a trial class?
B|Oui, le premier cours est gratuit. Il peut venir mercredi prochain.|Evet, ilk ders ücretsiz. Önümüzdeki çarşamba gelebilir.|Yes, the first class is free. He can come next Wednesday.
A|Super ! Et après, c'est combien ?|Süper! Peki sonra ne kadar?|Great! And after that, how much is it?
B|C'est 150 euros pour l'année. Et il faut aussi un certificat médical ou un questionnaire de santé.|Yıllığı 150 euro. Ayrıca sağlık raporu ya da sağlık anketi de gerekiyor.|It's 150 euros for the year. And you also need a medical certificate or a health questionnaire.
A|D'accord. Il est en bonne santé, mais il est un peu timide.|Tamam. Sağlığı iyi ama biraz utangaç.|OK. He's healthy, but he's a bit shy.
B|Ne vous inquiétez pas. Le professeur est très gentil, et les enfants adorent ce cours.|Merak etmeyin. Hoca çok nazik ve çocuklar bu dersi çok seviyor.|Don't worry. The teacher is very kind, and the children love this class.
A|Merci. Je remplis la fiche maintenant ?|Teşekkürler. Formu şimdi mi dolduruyorum?|Thank you. Shall I fill in the form now?
B|Oui, voilà la fiche. Votre nom, le nom de Moussa, et un numéro de téléphone, s'il vous plaît.|Evet, işte form. Adınız, Moussa'nın adı ve bir telefon numarası, lütfen.|Yes, here's the form. Your name, Moussa's name and a phone number, please.
A|Voilà. À mercredi, alors !|Buyurun. O zaman çarşambaya görüşürüz!|Here you are. See you on Wednesday, then!
B|À mercredi ! Moussa va être un petit champion !|Çarşambaya görüşürüz! Moussa küçük bir şampiyon olacak!|See you on Wednesday! Moussa is going to be a little champion!`)
  );
})();
