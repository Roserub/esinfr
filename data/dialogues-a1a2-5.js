/* More real-life dialogues (A1), played line by line with French audio.
   Lines: "A|français|Türkçe|English" or "B|…". In role-play, the learner says the "me" side. */
(function () {
  const L = s => s.trim().split("\n").map(l => { const [who, fr, tr, en] = l.split("|").map(x => x.trim()); return { who, fr, tr, en }; });
  const D = (id, level, fr, tr, en, roles, me, lines) => ({ id, level, t: { fr, tr, en }, roles, me, lines: L(lines) });

  window.DIALOGUES = window.DIALOGUES || [];
  window.DIALOGUES.push(
    D("d-gare-quai", "A1", "À la gare : l'heure et le quai", "Garda: saat ve peron", "At the station: the time and the platform", { A: "Agent SNCF", B: "Esin" }, "B", `
B|Bonjour monsieur. Excusez-moi, je vais à Lyon.|Merhaba beyefendi. Affedersiniz, Lyon'a gidiyorum.|Hello, sir. Excuse me, I'm going to Lyon.
A|Bonjour madame. Vous avez votre billet ?|Merhaba hanımefendi. Biletiniz var mı?|Hello, madam. Do you have your ticket?
B|Oui, sur mon téléphone. Voilà. Le train part à quelle heure ?|Evet, telefonumda. Buyurun. Tren saat kaçta kalkıyor?|Yes, on my phone. Here. What time does the train leave?
A|Votre train part à 10 h 15.|Treniniz saat 10.15'te kalkıyor.|Your train leaves at 10:15.
B|Il est quelle heure maintenant ?|Şu an saat kaç?|What time is it now?
A|Il est 9 h 50. Vous avez le temps !|Saat 9.50. Vaktiniz var!|It's 9:50. You have time!
B|Ouf ! Et le train part de quel quai ?|Oh be! Peki tren hangi perondan kalkıyor?|Phew! And which platform does the train leave from?
A|Le quai n'est pas encore affiché. Regardez le grand écran, là-bas.|Peron henüz ekranda yazmıyor. Şuradaki büyük ekrana bakın.|The platform isn't shown yet. Look at the big screen over there.
B|D'accord. Le quai est affiché quand ?|Tamam. Peron ne zaman yazılıyor?|OK. When is the platform shown?
A|En général, vingt minutes avant le départ. Donc vers 9 h 55.|Genelde kalkıştan yirmi dakika önce. Yani 9.55 gibi.|Usually twenty minutes before departure. So around 9:55.
B|Merci. Je suis dans la voiture 7. C'est au début du train ?|Teşekkürler. 7 numaralı vagondayım. Trenin başında mı?|Thanks. I'm in coach 7. Is it at the front of the train?
A|Non, c'est au milieu. Il y a un plan sur le quai.|Hayır, ortada. Peronda bir plan var.|No, it's in the middle. There's a plan on the platform.
B|Parfait. Il y a un café ici ?|Mükemmel. Burada kafe var mı?|Perfect. Is there a café here?
A|Oui, à gauche, à côté des toilettes.|Evet, solda, tuvaletlerin yanında.|Yes, on the left, next to the toilets.
B|Merci beaucoup, monsieur. Bonne journée !|Çok teşekkürler beyefendi. İyi günler!|Thank you very much, sir. Have a nice day!
A|Bon voyage, madame !|İyi yolculuklar hanımefendi!|Have a good trip, madam!`),

    D("d-puces", "A1", "Au marché aux puces", "Bit pazarında", "At the flea market", { A: "Vendeur", B: "Esin" }, "B", `
B|Bonjour ! Elle est jolie, cette lampe. C'est combien ?|Merhaba! Bu lamba çok güzel. Kaç para?|Hello! This lamp is pretty. How much is it?
A|Bonjour madame. Elle est à 25 euros.|Merhaba hanımefendi. 25 euro.|Hello, madam. It's 25 euros.
B|25 euros ? C'est un peu cher.|25 euro mu? Biraz pahalı.|25 euros? That's a bit expensive.
A|Elle est vieille, mais elle marche très bien.|Eski ama çok iyi çalışıyor.|It's old, but it works very well.
B|Je peux regarder ?|Bakabilir miyim?|Can I have a look?
A|Bien sûr. Regardez, la lumière est belle.|Tabii. Bakın, ışığı çok güzel.|Of course. Look, the light is nice.
B|Oui, c'est vrai. Vous faites un prix ? 15 euros ?|Evet, doğru. İndirim yapar mısınız? 15 euro?|Yes, that's true. Can you give me a better price? 15 euros?
A|15 euros, non… 20 euros, d'accord ?|15 euro olmaz… 20 euro, tamam mı?|15 euros, no… 20 euros, OK?
B|Hmm… Et avec ces deux tasses, c'est combien ?|Hmm… Bu iki fincanla beraber ne kadar?|Hmm… And with these two cups, how much is it?
A|La lampe et les deux tasses : 22 euros.|Lamba ve iki fincan: 22 euro.|The lamp and the two cups: 22 euros.
B|D'accord, je prends ! Je peux payer par carte ?|Tamam, alıyorum! Kartla ödeyebilir miyim?|OK, I'll take them! Can I pay by card?
A|Ah non, désolé. Seulement en espèces.|Ah hayır, kusura bakmayın. Sadece nakit.|Ah no, sorry. Cash only.
B|Pas de problème. Voilà 22 euros.|Sorun değil. Buyurun, 22 euro.|No problem. Here's 22 euros.
A|Merci. Attention, les tasses sont fragiles. Je les emballe dans du papier.|Teşekkürler. Dikkat, fincanlar kırılabilir. Kâğıda sarıyorum.|Thank you. Careful, the cups are fragile. I'll wrap them in paper.
B|Merci beaucoup. Bonne journée !|Çok teşekkürler. İyi günler!|Thank you very much. Have a nice day!`),

    D("d-piscine-vestiaire", "A1", "À la piscine : le vestiaire et le bonnet", "Havuzda: soyunma odası ve bone", "At the pool: the changing room and the swim cap", { A: "Maître-nageur", B: "Esin" }, "B", `
B|Bonjour ! C'est ma première fois ici. Où sont les vestiaires ?|Merhaba! Buraya ilk kez geliyorum. Soyunma odaları nerede?|Hello! It's my first time here. Where are the changing rooms?
A|Bonjour ! Les vestiaires sont là, à droite. Vous prenez une cabine.|Merhaba! Soyunma odaları şurada, sağda. Bir kabine giriyorsunuz.|Hello! The changing rooms are there, on the right. You use a cubicle.
B|Et mes affaires ? Je les mets où ?|Peki eşyalarım? Onları nereye koyuyorum?|And my things? Where do I put them?
A|Dans un casier. Il faut une pièce de 1 euro.|Bir dolaba. 1 euroluk bozuk para gerekiyor.|In a locker. You need a 1-euro coin.
B|J'ai une pièce, c'est bon. Et la clé ?|Bozuk param var, tamam. Peki anahtar?|I have a coin, that's fine. And the key?
A|Vous mettez la clé au poignet. Vous avez un bonnet de bain ?|Anahtarı bileğinize takıyorsunuz. Boneniz var mı?|You put the key on your wrist. Do you have a swim cap?
B|Non. Le bonnet est obligatoire ?|Hayır. Bone zorunlu mu?|No. Is the cap compulsory?
A|Oui, le bonnet est obligatoire. On vend des bonnets à l'accueil, 3 euros.|Evet, bone zorunlu. Resepsiyonda bone satılıyor, 3 euro.|Yes, the cap is compulsory. They sell caps at reception, 3 euros.
B|D'accord, je vais acheter un bonnet. Et après ?|Tamam, bir bone alacağım. Sonra?|OK, I'm going to buy a cap. And then?
A|Après, vous prenez une douche. La douche aussi est obligatoire.|Sonra duş alıyorsunuz. Duş da zorunlu.|Then you take a shower. The shower is compulsory too.
B|Pas de problème. Le grand bassin, c'est par où ?|Sorun değil. Büyük havuz ne tarafta?|No problem. Which way is the big pool?
A|Tout droit, après les douches. Il y a un couloir pour nager vite et un couloir pour nager doucement.|Dümdüz, duşlardan sonra. Hızlı yüzmek için bir kulvar, yavaş yüzmek için bir kulvar var.|Straight ahead, after the showers. There's a lane for swimming fast and a lane for swimming slowly.
B|Alors, je vais nager doucement !|O zaman ben yavaş yüzeceğim!|Then I'm going to swim slowly!
A|Très bien. Bonne baignade !|Çok iyi. İyi yüzmeler!|Very good. Enjoy your swim!`),

    D("d-fastfood", "A1", "Commander au fast-food", "Fast food restoranında sipariş vermek", "Ordering at a fast-food restaurant", { A: "Employé", B: "Esin" }, "B", `
A|Bonjour ! Sur place ou à emporter ?|Merhaba! Burada mı, paket mi?|Hello! Eat in or take away?
B|Bonjour. Sur place, s'il vous plaît.|Merhaba. Burada, lütfen.|Hello. Eat in, please.
A|Qu'est-ce que vous voulez ?|Ne istersiniz?|What would you like?
B|Je voudrais un menu poulet, s'il vous plaît.|Bir tavuk menü istiyorum, lütfen.|I'd like a chicken meal, please.
A|Avec des frites ou une salade ?|Patates kızartmasıyla mı, salatayla mı?|With fries or a salad?
B|Avec une salade. Je fais attention !|Salatayla. Dikkat ediyorum!|With a salad. I'm being careful!
A|Et comme boisson ?|İçecek olarak ne alırsınız?|And to drink?
B|Une eau, s'il vous plaît. Pas de soda.|Bir su, lütfen. Gazlı içecek olmasın.|A water, please. No fizzy drink.
A|D'accord. Une sauce avec le poulet ?|Tamam. Tavuğun yanında sos ister misiniz?|OK. A sauce with the chicken?
B|Oui, une sauce au fromage. Et… un petit dessert. Une glace à la vanille.|Evet, peynir sosu. Bir de… küçük bir tatlı. Vanilyalı dondurma.|Yes, a cheese sauce. And… a little dessert. A vanilla ice cream.
A|Ha ha, très bien ! Ça fait 11,40 €.|Ha ha, çok iyi! 11,40 € tutuyor.|Ha ha, very good! That's 11.40 €.
B|Voilà ma carte.|Buyurun kartım.|Here's my card.
A|Merci. Vous avez le numéro 52. Regardez l'écran.|Teşekkürler. Numaranız 52. Ekrana bakın.|Thanks. You're number 52. Watch the screen.
B|Merci. Je prends des serviettes, là ?|Teşekkürler. Peçeteleri şuradan mı alıyorum?|Thanks. Do I take napkins from there?
A|Oui, à côté des pailles. Bon appétit !|Evet, pipetlerin yanında. Afiyet olsun!|Yes, next to the straws. Enjoy your meal!`),

    D("d-courir-collegue", "A1", "Inviter une collègue à courir", "Bir iş arkadaşını koşmaya davet etmek", "Inviting a colleague to go running", { A: "Camille", B: "Esin" }, "B", `
B|Camille, tu aimes courir ?|Camille, koşmayı sever misin?|Camille, do you like running?
A|Oui, j'aime bien. Mais je ne cours pas souvent. Pourquoi ?|Evet, severim. Ama sık koşmuyorum. Neden?|Yes, I quite like it. But I don't run often. Why?
B|Je cours au parc le samedi matin. Tu veux venir avec moi ?|Cumartesi sabahları parkta koşuyorum. Benimle gelmek ister misin?|I run in the park on Saturday mornings. Do you want to come with me?
A|Oh, avec plaisir ! Mais tu cours vite ?|Ah, memnuniyetle! Ama hızlı mı koşuyorsun?|Oh, I'd love to! But do you run fast?
B|Non, pas du tout ! Je cours doucement. On peut parler en courant.|Hayır, hiç değil! Yavaş koşuyorum. Koşarken konuşabiliriz.|No, not at all! I run slowly. We can talk while running.
A|Super. C'est à quelle heure ?|Süper. Saat kaçta?|Great. What time?
B|À 9 h. Ce n'est pas trop tôt ?|Saat 9'da. Çok erken değil mi?|At 9. Isn't that too early?
A|Non, 9 h, c'est parfait. On se retrouve où ?|Hayır, 9 mükemmel. Nerede buluşuyoruz?|No, 9 is perfect. Where shall we meet?
B|Devant l'entrée du parc, à côté de la fontaine.|Parkın girişinin önünde, çeşmenin yanında.|In front of the park entrance, next to the fountain.
A|D'accord. On court combien de temps ?|Tamam. Ne kadar koşuyoruz?|OK. How long do we run for?
B|Trente minutes. Et après, on fait des étirements ensemble.|Otuz dakika. Sonra birlikte esneme hareketleri yapıyoruz.|Thirty minutes. And afterwards, we do some stretching together.
A|Des étirements avec une kiné ! J'ai de la chance.|Bir fizyoterapistle esneme! Şanslıyım.|Stretching with a physio! I'm lucky.
B|Ha ha ! Prends une bouteille d'eau, et de bonnes baskets.|Ha ha! Yanına bir şişe su al, iyi spor ayakkabıları da giy.|Ha ha! Bring a bottle of water, and good trainers.
A|Promis. À samedi, Esin !|Söz. Cumartesi görüşürüz Esin!|I promise. See you Saturday, Esin!
B|À samedi ! Bonne soirée !|Cumartesi görüşürüz! İyi akşamlar!|See you Saturday! Have a good evening!`),

    D("d-proprietaire", "A1", "Au téléphone avec le propriétaire", "Ev sahibiyle telefonda", "On the phone with the landlord", { A: "M. Bernard", B: "Esin" }, "B", `
A|Allô ?|Alo?|Hello?
B|Allô, bonjour monsieur Bernard. C'est Esin Yılmaz, votre locataire.|Alo, merhaba Bernard Bey. Ben Esin Yılmaz, kiracınız.|Hello, good morning Mr Bernard. It's Esin Yılmaz, your tenant.
A|Ah, bonjour madame Yılmaz. Ça va ?|Ah, merhaba Yılmaz Hanım. Nasılsınız?|Ah, hello Mrs Yılmaz. How are you?
B|Ça va, merci. Mais j'ai un petit problème dans l'appartement.|İyiyim, teşekkürler. Ama dairede küçük bir sorunum var.|I'm fine, thanks. But I have a small problem in the flat.
A|Ah bon ? Quel problème ?|Öyle mi? Ne sorunu?|Oh really? What problem?
B|Le radiateur de la chambre ne marche pas. Il est froid.|Yatak odasındaki kalorifer çalışmıyor. Soğuk.|The radiator in the bedroom doesn't work. It's cold.
A|Et les autres radiateurs ?|Peki diğer kaloriferler?|And the other radiators?
B|Les autres marchent bien. Seulement le radiateur de la chambre.|Diğerleri iyi çalışıyor. Sadece yatak odasındaki.|The others work fine. Only the bedroom radiator.
A|D'accord. Je vais appeler un chauffagiste. Vous êtes chez vous quand ?|Tamam. Bir kalorifer tamircisi arayacağım. Ne zaman evdesiniz?|OK. I'm going to call a heating engineer. When are you at home?
B|Je travaille la journée. Je suis chez moi après 18 h.|Gündüz çalışıyorum. 18.00'den sonra evdeyim.|I work during the day. I'm home after 6 pm.
A|Et le samedi matin ?|Peki cumartesi sabahı?|And Saturday morning?
B|Oui, le samedi matin, je suis là.|Evet, cumartesi sabahı evdeyim.|Yes, on Saturday morning, I'm in.
A|Parfait. Je vous envoie un message avec l'heure.|Mükemmel. Size saati mesajla gönderiyorum.|Perfect. I'll send you a message with the time.
B|Merci beaucoup, monsieur Bernard.|Çok teşekkürler Bernard Bey.|Thank you very much, Mr Bernard.
A|Je vous en prie. Bonne journée, madame Yılmaz.|Rica ederim. İyi günler Yılmaz Hanım.|You're welcome. Have a nice day, Mrs Yılmaz.`),

    D("d-cordonnier", "A1", "Chez le cordonnier", "Ayakkabı tamircisinde", "At the cobbler's", { A: "Cordonnier", B: "Esin" }, "B", `
A|Bonjour madame !|Merhaba hanımefendi!|Hello, madam!
B|Bonjour monsieur. J'ai un problème avec mes bottes.|Merhaba beyefendi. Botlarımla ilgili bir sorunum var.|Hello, sir. I have a problem with my boots.
A|Montrez-moi. Qu'est-ce qu'il y a ?|Gösterin bakayım. Neyi var?|Show me. What's wrong?
B|Le talon est cassé. Regardez.|Topuğu kırık. Bakın.|The heel is broken. Look.
A|Ah oui. Je peux changer le talon, pas de problème.|Ah evet. Topuğu değiştirebilirim, sorun değil.|Ah yes. I can change the heel, no problem.
B|Super ! Et la fermeture éclair aussi, elle ne marche pas bien.|Süper! Fermuar da iyi çalışmıyor.|Great! And the zip too, it doesn't work well.
A|Je regarde… Oui, je peux réparer la fermeture aussi.|Bakıyorum… Evet, fermuarı da tamir edebilirim.|Let me look… Yes, I can repair the zip too.
B|C'est combien ?|Ne kadar tutar?|How much is it?
A|Le talon, 15 euros. La fermeture, 20 euros. Donc 35 euros.|Topuk 15 euro. Fermuar 20 euro. Yani 35 euro.|The heel, 15 euros. The zip, 20 euros. So 35 euros.
B|D'accord. C'est prêt quand ?|Tamam. Ne zaman hazır olur?|OK. When will it be ready?
A|Jeudi, après 14 h.|Perşembe, saat 14.00'ten sonra.|Thursday, after 2 pm.
B|Jeudi, c'est parfait. Je paie maintenant ?|Perşembe mükemmel. Şimdi mi ödüyorum?|Thursday is perfect. Do I pay now?
A|Non, vous payez jeudi. Voilà votre ticket. Votre nom, s'il vous plaît ?|Hayır, perşembe ödüyorsunuz. İşte fişiniz. Adınız, lütfen?|No, you pay on Thursday. Here's your ticket. Your name, please?
B|Yılmaz. Y-I-L-M-A-Z.|Yılmaz. Y-I-L-M-A-Z.|Yılmaz. Y-I-L-M-A-Z.
A|Merci, madame Yılmaz. À jeudi !|Teşekkürler Yılmaz Hanım. Perşembe görüşürüz!|Thank you, Mrs Yılmaz. See you on Thursday!`),

    D("d-musee", "A1", "Au guichet du musée", "Müzenin gişesinde", "At the museum ticket desk", { A: "Agent d'accueil", B: "Esin" }, "B", `
A|Bonjour madame. Je vous écoute.|Merhaba hanımefendi. Sizi dinliyorum.|Hello, madam. How can I help?
B|Bonjour. Deux billets, s'il vous plaît. Pour mon mari et moi.|Merhaba. İki bilet, lütfen. Eşim ve benim için.|Hello. Two tickets, please. For my husband and me.
A|Deux billets adultes, ça fait 24 euros.|İki yetişkin bileti, 24 euro tutuyor.|Two adult tickets, that's 24 euros.
B|Il y a un tarif réduit ?|İndirimli bilet var mı?|Is there a reduced rate?
A|Oui, pour les étudiants et les moins de 26 ans. Vous êtes étudiante ?|Evet, öğrenciler ve 26 yaş altı için. Öğrenci misiniz?|Yes, for students and under-26s. Are you a student?
B|Non, pas encore ! Alors, plein tarif.|Hayır, henüz değil! O zaman tam bilet.|No, not yet! Full price, then.
A|D'accord. Vous voulez un audioguide ? Il est en plusieurs langues.|Tamam. Sesli rehber ister misiniz? Birkaç dilde var.|OK. Would you like an audio guide? It's in several languages.
B|Il y a le turc ?|Türkçe var mı?|Is there Turkish?
A|Non, désolée. Il y a le français, l'anglais, l'espagnol et l'allemand.|Hayır, kusura bakmayın. Fransızca, İngilizce, İspanyolca ve Almanca var.|No, sorry. There's French, English, Spanish and German.
B|Alors, un audioguide en anglais et un en français. C'est combien ?|O zaman bir İngilizce, bir Fransızca sesli rehber. Kaç para?|Then one audio guide in English and one in French. How much is it?
A|3 euros chacun. Donc 30 euros en tout.|Tanesi 3 euro. Yani toplam 30 euro.|3 euros each. So 30 euros in total.
B|Voilà. Le musée ferme à quelle heure ?|Buyurun. Müze saat kaçta kapanıyor?|Here you are. What time does the museum close?
A|À 18 h. Et le café est au deuxième étage.|18.00'de. Kafe de ikinci katta.|At 6 pm. And the café is on the second floor.
B|Merci beaucoup ! On peut prendre des photos ?|Çok teşekkürler! Fotoğraf çekebilir miyiz?|Thank you very much! Can we take photos?
A|Oui, mais sans flash. Bonne visite !|Evet, ama flaşsız. İyi gezmeler!|Yes, but without flash. Enjoy your visit!`),

    D("d-mari-voisine", "A1", "Présenter son mari à une voisine", "Eşini bir komşuyla tanıştırmak", "Introducing your husband to a neighbour", { A: "Mme Leroy", B: "Esin" }, "B", `
A|Bonsoir, Esin ! Vous rentrez des courses ?|İyi akşamlar Esin! Alışverişten mi dönüyorsunuz?|Good evening, Esin! Are you coming back from the shops?
B|Bonsoir, madame Leroy ! Oui. Je vous présente mon mari.|İyi akşamlar Leroy Hanım! Evet. Sizi eşimle tanıştırayım.|Good evening, Mrs Leroy! Yes. Let me introduce my husband.
A|Enchantée, monsieur ! Je suis la voisine du troisième étage.|Memnun oldum beyefendi! Üçüncü kattaki komşunuzum.|Pleased to meet you, sir! I'm the neighbour from the third floor.
B|Il parle un peu français, mais il est timide !|Biraz Fransızca konuşuyor ama utangaç!|He speaks a little French, but he's shy!
A|Ce n'est pas grave. Moi, je ne parle pas turc !|Önemli değil. Ben de Türkçe bilmiyorum!|That doesn't matter. I don't speak Turkish!
B|Ha ha ! Nous apprenons le français, petit à petit.|Ha ha! Fransızcayı yavaş yavaş öğreniyoruz.|Ha ha! We're learning French, little by little.
A|Et vous aimez la France ?|Fransa'yı seviyor musunuz?|And do you like France?
B|Oui, beaucoup. Mais l'hiver est long !|Evet, çok. Ama kış uzun!|Yes, a lot. But the winter is long!
A|Ha ha, c'est vrai. Et vous travaillez où ?|Ha ha, doğru. Peki nerede çalışıyorsunuz?|Ha ha, that's true. And where do you work?
B|Moi, je travaille à l'accueil d'une salle de sport.|Ben bir spor salonunun resepsiyonunda çalışıyorum.|I work at the front desk of a gym.
A|Ah, c'est bien ! Vous êtes sportive, alors.|Ah, ne güzel! Demek sporcusunuz.|Ah, that's good! So you're sporty.
B|Oui, j'adore le sport. Et vous, madame Leroy, vous habitez ici depuis longtemps ?|Evet, sporu çok severim. Ya siz Leroy Hanım, uzun zamandır mı burada oturuyorsunuz?|Yes, I love sport. And you, Mrs Leroy, have you lived here a long time?
A|Depuis vingt ans ! Si vous avez une question, frappez à ma porte.|Yirmi yıldır! Bir sorunuz olursa kapımı çalın.|For twenty years! If you have a question, knock on my door.
B|C'est très gentil. Merci beaucoup !|Çok naziksiniz. Çok teşekkürler!|That's very kind. Thank you very much!
A|Avec plaisir. Bonne soirée à vous deux !|Rica ederim. İkinize de iyi akşamlar!|My pleasure. Have a good evening, both of you!`),

    D("d-carte-sim", "A1", "À la boutique de téléphone : une carte SIM", "Telefon mağazasında: SIM kart", "At the phone shop: a SIM card", { A: "Vendeur", B: "Esin" }, "B", `
A|Bonjour madame. Je peux vous aider ?|Merhaba hanımefendi. Yardımcı olabilir miyim?|Hello, madam. Can I help you?
B|Bonjour. Je voudrais une nouvelle carte SIM, s'il vous plaît.|Merhaba. Yeni bir SIM kart istiyorum, lütfen.|Hello. I'd like a new SIM card, please.
A|Vous avez déjà un forfait chez nous ?|Bizde zaten bir tarifeniz var mı?|Do you already have a plan with us?
B|Non. Mon forfait est trop cher. Je cherche un forfait moins cher.|Hayır. Tarifem çok pahalı. Daha ucuz bir tarife arıyorum.|No. My plan is too expensive. I'm looking for a cheaper plan.
A|Nous avons un forfait à 10 euros par mois, avec 100 gigas.|Ayda 10 euroya, 100 gigabaytlık bir tarifemiz var.|We have a plan for 10 euros a month, with 100 gigs.
B|Et les appels vers la Turquie ?|Peki Türkiye'ye aramalar?|And calls to Turkey?
A|Pour la Turquie, il y a une option à 5 euros par mois.|Türkiye için ayda 5 euroluk bir seçenek var.|For Turkey, there's an option for 5 euros a month.
B|Hmm, j'appelle ma famille avec des applis. Pas besoin de l'option.|Hmm, ailemi uygulamalarla arıyorum. Seçeneğe gerek yok.|Hmm, I call my family with apps. No need for the option.
A|D'accord. Vous gardez votre numéro ?|Tamam. Numaranızı koruyor musunuz?|OK. Are you keeping your number?
B|Oui, je voudrais garder mon numéro. C'est possible ?|Evet, numaramı korumak istiyorum. Mümkün mü?|Yes, I'd like to keep my number. Is it possible?
A|Oui, bien sûr. Il faut une pièce d'identité, un RIB et votre code RIO. Vous l'obtenez en appelant le 3179.|Evet, tabii. Kimlik belgesi, banka hesap bilgileri (RIB) ve RIO kodunuz (numara taşıma kodu) gerekiyor. Onu 3179'u arayarak alırsınız.|Yes, of course. We need an ID, your bank details (RIB) and your RIO code (number transfer code). You get it by calling 3179.
B|Voilà mon passeport, mon RIB et mon code RIO.|Buyurun pasaportum, RIB'im ve RIO kodum.|Here's my passport, my RIB and my RIO code.
A|Merci. Voilà votre carte SIM. Le nouveau forfait marche dans deux ou trois jours.|Teşekkürler. İşte SIM kartınız. Yeni tarife iki üç gün içinde çalışır.|Thank you. Here's your SIM card. The new plan will work in two or three days.
B|Et je mets la carte quand ?|Kartı ne zaman takıyorum?|And when do I put the card in?
A|Quand vous recevez un SMS. Attendez le message.|Bir SMS aldığınızda. Mesajı bekleyin.|When you get a text. Wait for the message.
B|Parfait. Merci pour votre aide !|Mükemmel. Yardımınız için teşekkürler!|Perfect. Thanks for your help!`)
  );
})();
