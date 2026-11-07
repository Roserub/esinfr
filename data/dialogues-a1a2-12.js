/* More real-life dialogues (A2): social life, leisure and small problems, played line by line with French audio.
   Lines: "A|français|Türkçe|English" or "B|…". In role-play, the learner says the "me" side. */
(function () {
  const L = s => s.trim().split("\n").map(l => { const [who, fr, tr, en] = l.split("|").map(x => x.trim()); return { who, fr, tr, en }; });
  const D = (id, level, fr, tr, en, roles, me, lines) => ({ id, level, t: { fr, tr, en }, roles, me, lines: L(lines) });

  window.DIALOGUES = window.DIALOGUES || [];
  window.DIALOGUES.push(
    D("d12-pique-nique", "A2", "Organiser un pique-nique au parc", "Parkta piknik organize etmek", "Planning a picnic in the park", { A: "Julie", B: "Esin" }, "B", `
A|Salut Esin ! Il va faire beau dimanche. Ça te dit, un pique-nique au parc ?|Selam Esin! Pazar günü hava güzel olacak. Parkta piknik yapmaya ne dersin?|Hi, Esin! The weather's going to be nice on Sunday. Do you fancy a picnic in the park?
B|Oh oui, super idée ! Mon mari sera là aussi. On se retrouve à quelle heure ?|Ah evet, harika fikir! Kocam da gelecek. Saat kaçta buluşuyoruz?|Oh yes, great idea! My husband will be there too. What time shall we meet?
A|Vers midi, près du grand lac ? Il y a des arbres, on aura de l'ombre.|Öğlen gibi, büyük gölün yanında mı? Orada ağaçlar var, gölgede oluruz.|Around noon, near the big lake? There are trees, so we'll have some shade.
B|Parfait. Le samedi matin, je cours dans ce parc, je connais bien l'endroit. Qui vient avec nous ?|Mükemmel. Cumartesi sabahları o parkta koşuyorum, orayı iyi biliyorum. Bizimle kim geliyor?|Perfect. On Saturday mornings I run in that park, so I know the place well. Who's coming with us?
A|Thomas et Léa, et peut-être mon frère. Alors, on sera six. Qu'est-ce qu'on apporte ?|Thomas ve Léa, belki de erkek kardeşim. Yani altı kişi olacağız. Ne getiriyoruz?|Thomas and Léa, and maybe my brother. So there'll be six of us. What shall we bring?
B|Je peux faire des böreks, c'est une spécialité turque. C'est comme un feuilleté au fromage.|Börek yapabilirim, Türk spesiyalitesi. Peynirli bir milföy gibi.|I can make börek, it's a Turkish speciality. It's like a cheese pastry.
A|Miam ! Moi, j'apporte une salade de pâtes et une quiche. Et pour les boissons ?|Nefis! Ben makarna salatası ve kiş getiriyorum. İçecekler ne olacak?|Yum! I'll bring a pasta salad and a quiche. And what about drinks?
B|On achète de l'eau et des jus de fruits. Et Thomas peut prendre le dessert, il adore la pâtisserie.|Su ve meyve suyu alırız. Tatlıyı da Thomas getirebilir, pasta yapmaya bayılıyor.|We'll buy water and fruit juice. And Thomas can bring dessert, he loves baking.
A|Bonne idée. N'oublie pas une couverture, l'herbe est souvent un peu humide.|İyi fikir. Bir örtü getirmeyi unutma, çimler genelde biraz nemli oluyor.|Good idea. Don't forget a blanket, the grass is often a bit damp.
B|D'accord. Et j'apporte aussi un ballon. Après le repas, on pourra jouer un peu.|Tamam. Bir de top getiriyorum. Yemekten sonra biraz oynayabiliriz.|OK. And I'll bring a ball too. After the meal we can play a bit.
A|Attention, ce n'est pas un match de handball ! On va digérer d'abord.|Dikkat, hentbol maçı değil bu! Önce sindireceğiz.|Careful, it's not a handball match! We'll digest first.
B|Promis, je serai gentille. Et s'il pleut, on fait quoi ?|Söz, uslu olacağım. Peki yağmur yağarsa ne yapıyoruz?|Promise, I'll be nice. And if it rains, what do we do?
A|S'il pleut, on mange chez moi. J'ai un grand salon.|Yağmur yağarsa bende yeriz. Geniş bir salonum var.|If it rains, we'll eat at my place. I've got a big living room.
B|Génial. Je t'envoie un message samedi soir pour confirmer.|Harika. Cumartesi akşamı onaylamak için sana mesaj atarım.|Brilliant. I'll send you a message on Saturday evening to confirm.
A|Ça marche. À dimanche, et prépare beaucoup de börek !|Tamamdır. Pazar görüşürüz, bol börek hazırla!|Sounds good. See you Sunday, and make lots of börek!`),

    D("d12-the-turc", "A2", "Inviter sa voisine pour un thé turc", "Komşuyu Türk çayına davet etmek", "Inviting your neighbour for Turkish tea", { A: "Madame Girard", B: "Esin" }, "B", `
B|Bonjour madame Girard ! Vous avez cinq minutes ? Je voudrais vous inviter à prendre le thé chez moi.|Merhaba Girard Hanım! Beş dakikanız var mı? Sizi evime çaya davet etmek istiyorum.|Hello, Mrs Girard! Have you got five minutes? I'd like to invite you round for tea.
A|Oh, c'est très gentil, Esin ! Avec plaisir. Quand ça ?|Ah, çok naziksiniz Esin! Memnuniyetle. Ne zaman?|Oh, that's very kind, Esin! With pleasure. When?
B|Samedi après-midi, vers seize heures ? Ça vous va ?|Cumartesi öğleden sonra, saat dört gibi? Size uyar mı?|Saturday afternoon, around four? Does that suit you?
A|Samedi, c'est parfait. Je dois apporter quelque chose ?|Cumartesi mükemmel. Bir şey getirmem gerekiyor mu?|Saturday is perfect. Should I bring something?
B|Non, non, rien du tout. Je vais vous faire goûter le vrai thé turc.|Hayır, hayır, hiçbir şey. Size gerçek Türk çayını tattıracağım.|No, no, nothing at all. I'm going to let you taste real Turkish tea.
A|Le thé turc ? Il est différent du thé anglais ?|Türk çayı mı? İngiliz çayından farklı mı?|Turkish tea? Is it different from English tea?
B|Oui ! On le prépare avec deux théières, une sur l'autre. Et on le boit dans des petits verres, sans lait.|Evet! İki demlikle, biri diğerinin üstünde hazırlanıyor. Ve küçük ince belli bardaklarda, sütsüz içiliyor.|Yes! We make it with two teapots, one on top of the other. And we drink it from little glasses, without milk.
A|Dans des verres ? Ce n'est pas trop chaud pour les doigts ?|Bardakta mı? Parmaklar için çok sıcak olmuyor mu?|From glasses? Isn't it too hot for your fingers?
B|Un peu, au début ! On tient le verre en haut, comme ça. Vous allez voir, c'est facile.|Başta biraz! Bardağı üstünden tutuyoruz, böyle. Göreceksiniz, kolay.|A little, at first! You hold the glass at the top, like this. You'll see, it's easy.
A|Et vous en buvez beaucoup, en Turquie ?|Türkiye'de çok mu içiyorsunuz?|And do you drink a lot of it in Turkey?
B|Oh oui, toute la journée ! Au travail, chez des amis, au marché… Mon mari en boit au moins six verres par jour.|Ah evet, bütün gün! İşte, arkadaşlarda, pazarda… Kocam günde en az altı bardak içiyor.|Oh yes, all day long! At work, at friends' houses, at the market… My husband drinks at least six glasses a day.
A|Six verres ! Moi, après deux tasses, je ne dors plus.|Altı bardak! Ben iki fincandan sonra uyuyamıyorum.|Six glasses! After two cups, I can't sleep any more.
B|Ne vous inquiétez pas, je peux le faire léger. Et je vais préparer des petits gâteaux aussi.|Merak etmeyin, açık demleyebilirim. Bir de kurabiye hazırlayacağım.|Don't worry, I can make it weak. And I'll make some little biscuits too.
A|Vous allez me gâter ! Alors moi, j'apporterai des fleurs de mon jardin. J'insiste.|Beni şımartacaksınız! O zaman ben de bahçemden çiçek getireceğim. Israr ediyorum.|You're going to spoil me! Then I'll bring flowers from my garden. I insist.
B|D'accord, merci beaucoup. C'est au deuxième étage, porte de gauche.|Tamam, çok teşekkürler. İkinci katta, soldaki kapı.|OK, thank you very much. It's on the second floor, the door on the left.
A|Très bien. À samedi, Esin. Je suis contente, je n'ai jamais bu de thé turc !|Çok güzel. Cumartesi görüşürüz Esin. Çok sevindim, hiç Türk çayı içmedim!|Very good. See you Saturday, Esin. I'm so pleased, I've never had Turkish tea!`),

    D("d12-train-rate", "A2", "J'ai raté mon train : changer son billet", "Trenimi kaçırdım: bileti değiştirmek", "I missed my train: changing a ticket", { A: "Agent SNCF", B: "Karim" }, "B", `
A|Bonjour monsieur. Je peux vous aider ?|Merhaba beyefendi. Yardımcı olabilir miyim?|Hello, sir. Can I help you?
B|Bonjour. J'ai un gros problème : j'ai raté mon train pour Lyon. Il est parti il y a dix minutes.|Merhaba. Büyük bir sorunum var: Lyon trenimi kaçırdım. On dakika önce kalktı.|Hello. I've got a big problem: I missed my train to Lyon. It left ten minutes ago.
A|Ah, désolé. Qu'est-ce qui s'est passé ?|Ah, üzgünüm. Ne oldu?|Oh, sorry. What happened?
B|Mon bus est resté bloqué dans les embouteillages. Il y avait un accident sur la route.|Otobüsüm trafikte sıkışıp kaldı. Yolda bir kaza vardı.|My bus got stuck in traffic. There was an accident on the road.
A|Je comprends. Vous avez votre billet, s'il vous plaît ?|Anlıyorum. Biletiniz yanınızda mı lütfen?|I understand. Do you have your ticket, please?
B|Oui, le voici. Sur mon téléphone.|Evet, işte. Telefonumda.|Yes, here it is. On my phone.
A|Alors… c'est un billet échangeable. Vous avez de la chance : vous pouvez le changer sans frais.|Şöyle… bu değiştirilebilir bir bilet. Şanslısınız: ücretsiz değiştirebilirsiniz.|Let's see… it's an exchangeable ticket. You're lucky: you can change it free of charge.
B|Ouf, quel soulagement ! Le prochain train part à quelle heure ?|Oh, ne rahatladım! Bir sonraki tren saat kaçta kalkıyor?|Phew, what a relief! What time does the next train leave?
A|Il y a un train à 15 h 12, mais il est presque complet. Il reste seulement des places en première classe.|15.12'de bir tren var ama neredeyse dolu. Sadece birinci sınıfta yer kaldı.|There's a train at 3:12 p.m., but it's almost full. There are only first-class seats left.
B|Ah… Et c'est plus cher, je suppose ?|Ah… Ve daha pahalı, sanırım?|Oh… And it's more expensive, I suppose?
A|Oui, il faut payer vingt-cinq euros de différence. Sinon, il y a un train à 16 h 40, en seconde, sans supplément.|Evet, yirmi beş euro fark ödemeniz gerekiyor. Yoksa 16.40'ta ikinci sınıf bir tren var, ek ücretsiz.|Yes, you have to pay a twenty-five euro difference. Otherwise, there's a train at 4:40 p.m., in second class, with no extra charge.
B|Je vais prendre celui de 16 h 40. Ma sœur peut m'attendre un peu.|16.40'takini alayım. Kız kardeşim biraz bekleyebilir.|I'll take the 4:40 one. My sister can wait for me a bit.
A|Très bien. Voilà, c'est fait. Voiture 7, place 54. Votre nouveau billet est dans l'application.|Çok güzel. İşte, tamam. Vagon 7, koltuk 54. Yeni biletiniz uygulamada.|Very good. There, it's done. Coach 7, seat 54. Your new ticket is in the app.
B|Merci beaucoup. Le train part de quel quai ?|Çok teşekkürler. Tren hangi perondan kalkıyor?|Thank you very much. Which platform does the train leave from?
A|Le quai est affiché vingt minutes avant le départ, sur le grand écran là-bas.|Peron, kalkıştan yirmi dakika önce şuradaki büyük ekranda gösterilir.|The platform is displayed twenty minutes before departure, on the big screen over there.
B|Parfait. Cette fois, je vais attendre ici, à côté de l'écran !|Harika. Bu sefer burada, ekranın yanında bekleyeceğim!|Perfect. This time I'm going to wait right here, next to the screen!
A|Bonne idée. Bon voyage, monsieur !|İyi fikir. İyi yolculuklar beyefendi!|Good idea. Have a good trip, sir!`),

    D("d12-sav-bouilloire", "A2", "Au service après-vente : une bouilloire en panne", "Satış sonrası hizmette: bozuk bir su ısıtıcısı", "At the after-sales desk: a broken kettle", { A: "Vendeur", B: "Nathalie" }, "B", `
A|Bonjour madame. C'est pour un retour ?|Merhaba hanımefendi. İade için mi?|Hello, madam. Is it for a return?
B|Bonjour. Oui, j'ai acheté cette bouilloire ici il y a deux semaines, et elle ne marche plus.|Merhaba. Evet, bu su ısıtıcısını iki hafta önce buradan aldım ve artık çalışmıyor.|Hello. Yes, I bought this kettle here two weeks ago, and it doesn't work any more.
A|Ah, je suis désolé. Quel est le problème exactement ?|Ah, üzgünüm. Sorun tam olarak ne?|Oh, I'm sorry. What exactly is the problem?
B|Au début, tout allait bien. Mais hier matin, la lumière s'est allumée, et l'eau n'a pas chauffé.|Başta her şey yolundaydı. Ama dün sabah ışığı yandı ve su ısınmadı.|At first everything was fine. But yesterday morning the light came on, and the water didn't heat up.
A|Vous avez essayé avec une autre prise ?|Başka bir prizle denediniz mi?|Have you tried another socket?
B|Oui, j'ai essayé trois prises différentes. Même mon voisin l'a testée chez lui. Rien.|Evet, üç farklı priz denedim. Komşum bile kendi evinde denedi. Hiçbir şey.|Yes, I tried three different sockets. Even my neighbour tested it at his place. Nothing.
A|D'accord. Vous avez le ticket de caisse ?|Tamam. Kasa fişiniz var mı?|OK. Do you have the receipt?
B|Le voici. Et j'ai aussi la boîte, avec la notice.|İşte. Kutusu da var, kullanım kılavuzuyla birlikte.|Here it is. And I've also got the box, with the instructions.
A|Parfait. La bouilloire est encore sous garantie. Vous préférez un échange ou un remboursement ?|Mükemmel. Su ısıtıcısı hâlâ garantili. Değişim mi yoksa para iadesi mi tercih edersiniz?|Perfect. The kettle is still under warranty. Would you prefer an exchange or a refund?
B|Hmm… Est-ce que vous avez un autre modèle ? Je ne veux pas avoir le même problème dans deux semaines.|Hmm… Başka bir modeliniz var mı? İki hafta sonra aynı sorunu yaşamak istemiyorum.|Hmm… Do you have another model? I don't want the same problem in two weeks.
A|Je vous comprends. Nous avons celle-ci, en inox. Elle est un peu plus chère : cinq euros de plus.|Sizi anlıyorum. Şu paslanmaz çelik olanı var. Biraz daha pahalı: beş euro fazla.|I understand. We have this one, in stainless steel. It's a bit more expensive: five euros more.
B|Elle a l'air plus solide. Et elle est garantie combien de temps ?|Daha sağlam görünüyor. Garantisi ne kadar?|It looks sturdier. And how long is the warranty?
A|Deux ans, comme l'autre. Et la marque est très fiable, nous n'avons presque jamais de retours.|İki yıl, diğeri gibi. Marka da çok güvenilir, neredeyse hiç iade almıyoruz.|Two years, like the other one. And the brand is very reliable, we almost never get returns.
B|D'accord, je prends celle-là. Je paie la différence par carte.|Tamam, onu alıyorum. Farkı kartla ödüyorum.|OK, I'll take that one. I'll pay the difference by card.
A|Très bien. Voilà votre nouveau ticket. Gardez-le bien, surtout !|Çok güzel. İşte yeni fişiniz. Sakın kaybetmeyin!|Very good. Here's your new receipt. Make sure you keep it!
B|Promis. Merci pour votre aide. Ce soir, je vais enfin boire mon thé !|Söz. Yardımınız için teşekkürler. Bu akşam nihayet çayımı içeceğim!|Promise. Thanks for your help. Tonight I'll finally drink my tea!`),

    D("d12-soiree-ratee", "A2", "Raconter un dîner raté à un ami", "Bir arkadaşa kötü geçen bir akşam yemeğini anlatmak", "Telling a friend about a dinner that went wrong", { A: "Lucas", B: "Inès" }, "B", `
A|Salut Inès ! Alors, ton dîner avec les parents de Hugo, samedi ? Raconte !|Selam Inès! Ee, cumartesi Hugo'nun ailesiyle yemeğin nasıldı? Anlat!|Hi, Inès! So, your dinner with Hugo's parents on Saturday? Tell me!
B|Oh là là… Tu as dix minutes ? Parce que c'était une catastrophe.|Of of… On dakikan var mı? Çünkü tam bir felaketti.|Oh dear… Have you got ten minutes? Because it was a disaster.
A|Ah bon ? Qu'est-ce qui s'est passé ?|Öyle mi? Ne oldu?|Really? What happened?
B|D'abord, j'ai voulu faire un poulet rôti. J'ai mis le four trop fort et le poulet a brûlé.|Önce fırında tavuk yapmak istedim. Fırını çok yüksek açtım ve tavuk yandı.|First, I wanted to make a roast chicken. I put the oven on too high and the chicken burnt.
A|Aïe ! Et qu'est-ce que tu as fait ?|Eyvah! Peki ne yaptın?|Ouch! And what did you do?
B|Hugo est allé acheter des pizzas en vitesse. Mais pendant ce temps, ses parents sont arrivés… en avance !|Hugo hemen pizza almaya gitti. Ama o sırada ailesi geldi… erkenden!|Hugo rushed out to buy pizzas. But meanwhile, his parents arrived… early!
A|Non ! Tu étais toute seule avec eux ?|Yok artık! Onlarla yalnız mıydın?|No way! You were all alone with them?
B|Oui, et l'appartement sentait la fumée. J'ai ouvert toutes les fenêtres. Il faisait froid, sa mère a gardé son manteau.|Evet, ve daire duman kokuyordu. Bütün pencereleri açtım. Hava soğuktu, annesi paltosunu çıkarmadı.|Yes, and the flat smelt of smoke. I opened all the windows. It was cold, his mother kept her coat on.
A|Oh là là, la pauvre ! Et son père, il était comment ?|Vah vah, zavallı kadın! Babası nasıldı peki?|Oh dear, poor woman! And his father, what was he like?
B|Lui, il a ri. Il m'a dit : « Ne vous inquiétez pas, moi aussi, j'ai déjà brûlé un poulet ! »|O güldü. Bana dedi ki: « Merak etmeyin, ben de bir keresinde tavuk yaktım! »|He laughed. He said to me: "Don't worry, I've burnt a chicken before too!"
A|Ah, il a l'air sympa. Et les pizzas, elles étaient bonnes ?|Ah, iyi birine benziyor. Pizzalar güzel miydi?|Ah, he sounds nice. And the pizzas, were they good?
B|Très bonnes ! Finalement, on a mangé dans le salon, on a joué aux cartes et on a beaucoup parlé.|Çok güzeldi! Sonunda salonda yedik, kâğıt oynadık ve çok sohbet ettik.|Very good! In the end we ate in the living room, played cards and talked a lot.
A|Alors ce n'était pas une catastrophe, en fait !|O zaman aslında felaket değilmiş!|So it wasn't a disaster, actually!
B|Non, tu as raison. À la fin, sa mère m'a même invitée chez elle le mois prochain.|Hayır, haklısın. Sonunda annesi beni gelecek ay evine bile davet etti.|No, you're right. At the end, his mother even invited me to her place next month.
A|Tu vois ! Et cette fois, c'est elle qui cuisine.|Gördün mü! Bu sefer de yemeği o yapıyor.|You see! And this time, she's the one cooking.
B|Exactement. Et moi, j'apporte le dessert… acheté à la boulangerie !|Aynen. Ben de tatlıyı getiriyorum… fırından alınmış olarak!|Exactly. And I'll bring dessert… bought at the bakery!`),

    D("d12-cles-oubliees", "A2", "J'ai oublié mes clés !", "Anahtarlarımı unuttum!", "I've forgotten my keys!", { A: "Thomas (le voisin)", B: "Esin" }, "B", `
A|Bonsoir Esin ! Ça va ? Vous avez l'air inquiète.|İyi akşamlar Esin! İyi misiniz? Endişeli görünüyorsunuz.|Good evening, Esin! Are you OK? You look worried.
B|Bonsoir Thomas. Pas vraiment… J'ai claqué la porte, et mes clés sont restées à l'intérieur.|İyi akşamlar Thomas. Pek değil… Kapıyı çarptım ve anahtarlarım içeride kaldı.|Good evening, Thomas. Not really… I slammed the door, and my keys are still inside.
A|Oh non ! Ça m'est arrivé l'année dernière, je connais ce sentiment.|Olamaz! Geçen yıl benim de başıma geldi, o duyguyu bilirim.|Oh no! It happened to me last year, I know that feeling.
B|En plus, mon téléphone est aussi dans l'appartement. Je suis sortie juste pour descendre la poubelle.|Üstelik telefonum da dairede. Sadece çöpü atmak için çıkmıştım.|On top of that, my phone is in the flat too. I only went out to take the rubbish out.
A|Votre mari n'a pas de double ?|Kocanızda yedek anahtar yok mu?|Doesn't your husband have a spare set?
B|Si, mais il travaille ce soir. Il rentre vers vingt-deux heures. Je peux utiliser votre téléphone pour l'appeler ?|Var ama bu akşam çalışıyor. Saat on gibi dönüyor. Onu aramak için telefonunuzu kullanabilir miyim?|Yes, but he's working tonight. He gets back around ten. Can I use your phone to call him?
A|Bien sûr, tenez. Vous connaissez son numéro par cœur ?|Tabii, buyurun. Numarasını ezbere biliyor musunuz?|Of course, here you are. Do you know his number by heart?
B|Heureusement, oui ! … Allô, chéri ? C'est moi. Je suis enfermée dehors. Tu peux rentrer plus tôt ?|Neyse ki evet! … Alo, canım? Benim. Dışarıda kaldım. Daha erken dönebilir misin?|Luckily, yes! … Hello, darling? It's me. I'm locked out. Can you come home earlier?
A|Alors, qu'est-ce qu'il a dit ?|Ee, ne dedi?|So, what did he say?
B|Il finit à vingt heures trente, et il arrive tout de suite après. Donc dans une heure, à peu près.|Sekiz buçukta bitiriyor, hemen ardından geliyor. Yani aşağı yukarı bir saat sonra.|He finishes at half past eight, and he's coming straight after. So in about an hour.
A|Une heure, c'est long dans l'escalier ! Entrez chez moi, je vous fais un café.|Merdivende bir saat çok uzun! Bize buyurun, size kahve yapayım.|An hour is a long time on the stairs! Come into my place, I'll make you a coffee.
B|C'est vraiment gentil, merci. Je ne vous dérange pas ?|Gerçekten çok naziksiniz, teşekkürler. Rahatsız etmiyorum ya?|That's really kind, thank you. I'm not disturbing you?
A|Pas du tout. Et vous savez, un serrurier le soir, ça coûte très cher. Votre mari, c'est mieux !|Hiç de değil. Hem biliyor musunuz, akşam çilingir çok pahalıya patlar. Kocanız daha iyi!|Not at all. And you know, a locksmith in the evening is very expensive. Your husband is better!
B|C'est vrai ! La prochaine fois, je vous laisse un double de mes clés, si vous êtes d'accord.|Doğru! Bir dahaki sefere, kabul ederseniz size anahtarlarımın bir yedeğini bırakırım.|That's true! Next time, I'll leave you a spare set of my keys, if that's OK with you.
A|Bonne idée. Et moi, je vous donne le mien. Entre voisins, il faut s'entraider !|İyi fikir. Ben de size benimkini veririm. Komşular birbirine yardım etmeli!|Good idea. And I'll give you mine. Neighbours have to help each other!
B|Merci, Thomas. Et pour vous remercier, un de ces jours, je vous prépare un vrai thé turc !|Teşekkürler Thomas. Size teşekkür etmek için bu günlerde gerçek bir Türk çayı hazırlayacağım!|Thank you, Thomas. And to thank you, I'll make you a real Turkish tea one of these days!`)
  );
})();
