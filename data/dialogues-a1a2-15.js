/* More real-life dialogues (A1/A2): DELF-style everyday role-plays. Played line by line with French audio.
   Lines: "A|français|Türkçe|English" or "B|…". In role-play, the learner says the "me" side. */
(function () {
  const L = s => s.trim().split("\n").map(l => { const [who, fr, tr, en] = l.split("|").map(x => x.trim()); return { who, fr, tr, en }; });
  const D = (id, level, fr, tr, en, roles, me, lines) => ({ id, level, t: { fr, tr, en }, roles, me, lines: L(lines) });

  window.DIALOGUES = window.DIALOGUES || [];
  window.DIALOGUES.push(
    D("d15-borne-billet", "A1", "Acheter un billet à la borne avec de l'aide", "Yardım alarak otomattan bilet almak", "Buying a ticket at the machine with some help", { A: "Agent SNCF", B: "Voyageuse" }, "B", `
B|Excusez-moi, monsieur. Vous pouvez m'aider, s'il vous plaît ? Je ne comprends pas la machine.|Affedersiniz beyefendi. Bana yardım edebilir misiniz lütfen? Makineyi anlamıyorum.|Excuse me, sir. Can you help me, please? I don't understand the machine.
A|Oui, bien sûr. Vous allez où ?|Evet, tabii. Nereye gidiyorsunuz?|Yes, of course. Where are you going?
B|À Lyon, aujourd'hui.|Lyon'a, bugün.|To Lyon, today.
A|D'accord. Touchez l'écran ici : « Acheter un billet ». Ensuite, écrivez « Lyon ».|Tamam. Ekrana buradan dokunun: « Bilet satın al ». Sonra « Lyon » yazın.|OK. Touch the screen here: "Buy a ticket". Then type "Lyon".
B|Voilà. Et maintenant ?|İşte. Peki şimdi?|There. And now?
A|Vous voulez un aller simple ou un aller-retour ?|Tek yön mü istiyorsunuz, gidiş-dönüş mü?|Do you want a single or a return?
B|Un aller simple, s'il vous plaît. Je rentre demain en voiture avec une amie.|Tek yön lütfen. Yarın bir arkadaşımla arabayla dönüyorum.|A single, please. I'm coming back tomorrow by car with a friend.
A|Très bien. Il y a un train à 14 h 10 et un train à 15 h 45. Vous préférez lequel ?|Çok iyi. Saat 14.10'da bir tren var, 15.45'te de bir tren var. Hangisini tercih edersiniz?|Very good. There's a train at 2:10 pm and a train at 3:45 pm. Which one do you prefer?
B|Le train de 14 h 10. C'est combien ?|14.10 trenini. Ne kadar?|The 2:10 train. How much is it?
A|Trente-deux euros, en deuxième classe. Vous avez une carte de réduction ?|İkinci sınıfta otuz iki euro. İndirim kartınız var mı?|Thirty-two euros, in second class. Do you have a discount card?
B|Non, je n'ai pas de carte. Je peux payer par carte bancaire ?|Hayır, kartım yok. Banka kartıyla ödeyebilir miyim?|No, I don't have a card. Can I pay by bank card?
A|Oui, mettez votre carte ici et tapez votre code.|Evet, kartınızı buraya takın ve şifrenizi girin.|Yes, put your card in here and type your PIN.
B|C'est bon ! Le billet sort. Le train part de quel quai ?|Tamam! Bilet çıkıyor. Tren hangi perondan kalkıyor?|Done! The ticket is coming out. Which platform does the train leave from?
A|Regardez le grand panneau. Le quai est affiché vingt minutes avant le départ.|Büyük panoya bakın. Peron, kalkıştan yirmi dakika önce gösteriliyor.|Look at the big board. The platform is shown twenty minutes before departure.
B|Merci beaucoup, monsieur. Vous êtes très gentil !|Çok teşekkürler beyefendi. Çok naziksiniz!|Thank you very much, sir. You're very kind!
A|Je vous en prie. Bon voyage, madame !|Rica ederim. İyi yolculuklar hanımefendi!|You're welcome. Have a good trip, madam!`),

    D("d15-carte-fidelite", "A1", "Demander une carte de fidélité au magasin", "Mağazada sadakat kartı istemek", "Asking for a loyalty card at a shop", { A: "Caissière", B: "Esin" }, "B", `
A|Bonjour madame ! Vous avez trouvé tout ce que vous cherchez ?|Merhaba hanımefendi! Aradığınız her şeyi buldunuz mu?|Hello, madam! Did you find everything you were looking for?
B|Oui, merci. J'ai une question : il y a une carte de fidélité dans votre magasin ?|Evet, teşekkürler. Bir sorum var: mağazanızda sadakat kartı var mı?|Yes, thank you. I have a question: is there a loyalty card in your shop?
A|Oui, il y a une carte. Elle est gratuite.|Evet, bir kart var. Ücretsiz.|Yes, there is a card. It's free.
B|Ah, super ! Et elle donne quoi, exactement ?|Ah, süper! Peki tam olarak ne sağlıyor?|Oh, great! And what does it give you, exactly?
A|Avec la carte, vous avez des points. Avec cent points, vous avez cinq euros de réduction.|Kartla puan kazanıyorsunuz. Yüz puanla beş euro indirim alıyorsunuz.|With the card, you get points. With a hundred points, you get five euros off.
B|C'est bien. Je viens ici chaque semaine. Qu'est-ce que je dois faire ?|Güzel. Buraya her hafta geliyorum. Ne yapmam gerekiyor?|That's good. I come here every week. What do I have to do?
A|C'est très simple. Je vais juste vous demander votre nom et votre adresse e-mail.|Çok basit. Sadece adınızı ve e-posta adresinizi soracağım.|It's very simple. I'm just going to ask for your name and your email address.
B|Je m'appelle Esin Yılmaz. Esin, E-S-I-N.|Adım Esin Yılmaz. Esin, E-S-I-N.|My name is Esin Yılmaz. Esin, E-S-I-N.
A|Et votre nom de famille, vous pouvez l'épeler, s'il vous plaît ?|Soyadınızı da harf harf söyleyebilir misiniz lütfen?|And your surname, can you spell it, please?
B|Oui : Y-I-L-M-A-Z. Mon adresse e-mail, c'est esin.yilmaz@exemple.fr.|Evet: Y-I-L-M-A-Z. E-posta adresim esin.yilmaz@exemple.fr.|Yes: Y-I-L-M-A-Z. My email address is esin.yilmaz@exemple.fr.
A|Parfait. Voilà votre carte. Et aujourd'hui, vous avez déjà vingt points !|Mükemmel. İşte kartınız. Bugün şimdiden yirmi puanınız var!|Perfect. Here's your card. And today you already have twenty points!
B|Génial ! Il y a aussi des promotions pour les clients avec la carte ?|Harika! Kartı olan müşterilere özel indirimler de var mı?|Great! Are there also special offers for customers with the card?
A|Oui, chaque mardi. Vous recevez les offres par e-mail.|Evet, her salı. Fırsatlar size e-postayla geliyor.|Yes, every Tuesday. You get the offers by email.
B|Très bien, merci beaucoup. Bonne journée !|Çok iyi, çok teşekkürler. İyi günler!|Very good, thank you very much. Have a nice day!
A|Merci à vous, madame. Bonne journée et à mardi, peut-être !|Biz teşekkür ederiz hanımefendi. İyi günler, belki salı görüşürüz!|Thank you, madam. Have a nice day, and see you on Tuesday, maybe!`),

    D("d15-heure-reunion", "A1", "Demander l'heure de la réunion à un collègue", "Bir iş arkadaşına toplantının saatini sormak", "Asking a colleague what time the meeting is", { A: "Karim", B: "Esin" }, "B", `
B|Salut Karim ! Tu as deux minutes ?|Selam Karim! İki dakikan var mı?|Hi, Karim! Have you got two minutes?
A|Salut Esin ! Oui, bien sûr. Ça va ?|Selam Esin! Evet, tabii. Nasılsın?|Hi, Esin! Yes, of course. How are you?
B|Ça va, merci. Dis, la réunion avec Sophie, c'est à quelle heure ?|İyiyim, teşekkürler. Baksana, Sophie'yle toplantı saat kaçta?|I'm fine, thanks. Say, the meeting with Sophie, what time is it?
A|C'est à quinze heures, je crois.|Saat on beşte galiba.|It's at three o'clock, I think.
B|Aujourd'hui ? Je pensais que c'était demain !|Bugün mü? Ben yarın sanıyordum!|Today? I thought it was tomorrow!
A|Attends, je regarde le message de Sophie… Non, pardon, c'est demain, jeudi, à quinze heures.|Dur, Sophie'nin mesajına bakıyorum… Hayır, pardon, yarın, perşembe, saat on beşte.|Wait, I'm looking at Sophie's message… No, sorry, it's tomorrow, Thursday, at three o'clock.
B|Ouf ! Et c'est où ? Dans le bureau de Sophie ?|Oh be! Peki nerede? Sophie'nin ofisinde mi?|Phew! And where is it? In Sophie's office?
A|Non, le bureau est trop petit. C'est dans la salle de yoga, au premier étage.|Hayır, ofis çok küçük. Birinci kattaki yoga salonunda.|No, the office is too small. It's in the yoga room, on the first floor.
B|D'accord. Ça dure combien de temps ?|Tamam. Ne kadar sürüyor?|OK. How long does it last?
A|Une heure, normalement. Sophie veut parler des nouveaux horaires.|Normalde bir saat. Sophie yeni çalışma saatlerinden bahsetmek istiyor.|An hour, normally. Sophie wants to talk about the new opening hours.
B|Mais demain, je travaille à l'accueil jusqu'à quinze heures. C'est un problème ?|Ama yarın saat on beşe kadar resepsiyonda çalışıyorum. Sorun olur mu?|But tomorrow I'm working at the front desk until three. Is that a problem?
A|Non, Léa arrive à quinze heures. Elle te remplace.|Hayır, Léa on beşte geliyor. Senin yerine o bakacak.|No, Léa arrives at three. She's taking over from you.
B|Parfait. Je dois apporter quelque chose ?|Mükemmel. Bir şey getirmem gerekiyor mu?|Perfect. Do I need to bring anything?
A|Un stylo et ton planning. Et des gâteaux, si tu veux !|Bir kalem ve çalışma programını. İstersen biraz da kek!|A pen and your schedule. And some cakes, if you like!
B|Ha ha ! D'accord, j'apporte des gâteaux turcs. Merci, Karim !|Ha ha! Tamam, Türk tatlısı getiriyorum. Teşekkürler Karim!|Ha ha! OK, I'll bring some Turkish pastries. Thanks, Karim!
A|Super ! À demain, alors.|Süper! O zaman yarın görüşürüz.|Great! See you tomorrow, then.`),

    D("d15-en-retard", "A1", "Appeler pour dire qu'on est en retard", "Geç kalacağını söylemek için aramak", "Calling to say you'll be late", { A: "Sophie", B: "Esin" }, "B", `
A|Allô ?|Alo?|Hello?
B|Allô, Sophie ? C'est Esin. Excuse-moi, je suis désolée…|Alo, Sophie? Ben Esin. Kusura bakma, çok üzgünüm…|Hello, Sophie? It's Esin. Sorry, I'm really sorry…
A|Bonjour Esin ! Qu'est-ce qui se passe ?|Merhaba Esin! Ne oluyor?|Hello, Esin! What's going on?
B|Je vais être en retard ce matin. Mon bus est en panne.|Bu sabah geç kalacağım. Otobüsüm arızalandı.|I'm going to be late this morning. My bus has broken down.
A|Oh non ! Tu es où, maintenant ?|Olamaz! Şu an neredesin?|Oh no! Where are you now?
B|Je suis à l'arrêt « Victor Hugo ». On attend un autre bus.|« Victor Hugo » durağındayım. Başka bir otobüs bekliyoruz.|I'm at the "Victor Hugo" stop. We're waiting for another bus.
A|D'accord. Tu arrives à quelle heure, à peu près ?|Tamam. Aşağı yukarı saat kaçta gelirsin?|OK. Roughly what time will you get here?
B|Vers neuf heures et quart, je pense. Pas avant.|Dokuzu çeyrek geçe gibi sanırım. Daha önce değil.|Around a quarter past nine, I think. Not before.
A|Bon, ce n'est pas grave. Thomas est là, il peut ouvrir l'accueil.|Neyse, önemli değil. Thomas burada, resepsiyonu o açabilir.|Well, it doesn't matter. Thomas is here, he can open the front desk.
B|Merci, c'est gentil. Je peux rester un peu plus tard ce soir, si tu veux.|Teşekkürler, çok naziksin. İstersen bu akşam biraz daha geç kalabilirim.|Thanks, that's kind. I can stay a bit later this evening, if you like.
A|Oui, pourquoi pas. Un quart d'heure, ça va.|Evet, neden olmasın. Bir çeyrek saat yeter.|Yes, why not. A quarter of an hour is fine.
B|D'accord. Oh, le bus arrive ! Je monte.|Tamam. Ah, otobüs geliyor! Biniyorum.|OK. Oh, the bus is coming! I'm getting on.
A|Super. Ne cours pas, hein ! Le sport, c'est le samedi matin, au parc !|Süper. Koşma ama! Spor cumartesi sabahı, parkta!|Great. Don't run, OK? Sport is on Saturday mornings, in the park!
B|Ha ha, promis ! À tout à l'heure, Sophie.|Ha ha, söz! Birazdan görüşürüz Sophie.|Ha ha, promise! See you in a bit, Sophie.
A|À tout à l'heure, Esin.|Birazdan görüşürüz Esin.|See you in a bit, Esin.`),

    D("d15-plan-weekend", "A2", "Se mettre d'accord sur le programme du week-end", "Hafta sonu planında anlaşmak", "Agreeing on a weekend plan with a friend", { A: "Camille", B: "Esin" }, "B", `
A|Salut Esin ! Alors, ce week-end, on fait quelque chose ensemble ? J'ai une idée : une randonnée en forêt samedi matin !|Selam Esin! Eee, bu hafta sonu birlikte bir şey yapıyor muyuz? Bir fikrim var: cumartesi sabahı ormanda yürüyüş!|Hi, Esin! So, shall we do something together this weekend? I have an idea: a hike in the forest on Saturday morning!
B|Bonne idée, mais samedi matin, je cours toujours au parc. C'est sacré pour moi !|İyi fikir ama cumartesi sabahları hep parkta koşuyorum. Bu benim için kutsal!|Good idea, but on Saturday mornings I always run in the park. It's sacred to me!
A|Ah oui, c'est vrai. Et samedi après-midi, alors ?|Ah evet, doğru. O zaman cumartesi öğleden sonra?|Oh yes, that's true. What about Saturday afternoon, then?
B|Samedi après-midi, je ne peux pas. Mon mari et moi, on a promis d'aider des amis à déménager.|Cumartesi öğleden sonra olmaz. Eşimle ben, taşınmalarında bazı arkadaşlara yardım edeceğimize söz verdik.|Saturday afternoon I can't. My husband and I promised to help some friends move house.
A|Mince ! Et dimanche ? La météo a dit qu'il allait faire beau.|Hay aksi! Peki pazar? Hava durumu güzel olacağını söyledi.|Oh no! And Sunday? The forecast said it was going to be nice.
B|Dimanche, c'est possible. Mais après le déménagement, je vais être fatiguée. Une longue randonnée, ça me fait un peu peur…|Pazar olabilir. Ama taşınmadan sonra yorgun olacağım. Uzun bir yürüyüş beni biraz korkutuyor…|Sunday is possible. But after the move, I'm going to be tired. A long hike scares me a bit…
A|On peut faire une petite balade, alors. Deux heures maximum, autour du lac.|O zaman küçük bir yürüyüş yapabiliriz. En fazla iki saat, gölün etrafında.|We can do a short walk, then. Two hours maximum, around the lake.
B|Ça, c'est parfait ! Et après, on pourrait pique-niquer au bord du lac ?|İşte bu mükemmel! Sonra da gölün kenarında piknik yapabilir miyiz?|Now that's perfect! And afterwards, could we have a picnic by the lake?
A|Oui ! J'apporte une salade et du fromage. Tu t'occupes de quoi ?|Evet! Ben salata ve peynir getiriyorum. Sen neyi üstlenirsin?|Yes! I'll bring a salad and some cheese. What will you take care of?
B|Je fais des börek, comme la dernière fois. Tu as adoré !|Geçen seferki gibi börek yapıyorum. Bayılmıştın!|I'll make some börek, like last time. You loved them!
A|Oh oui, j'en ai mangé quatre ! On part à quelle heure ?|Ah evet, dört tane yemiştim! Saat kaçta çıkıyoruz?|Oh yes, I ate four of them! What time shall we leave?
B|Pas trop tôt, s'il te plaît ! Dix heures, ça te va ?|Çok erken olmasın lütfen! Saat on uyar mı?|Not too early, please! Is ten o'clock OK for you?
A|Dix heures, d'accord. Je passe te chercher en voiture.|Saat on, tamam. Arabayla seni almaya gelirim.|Ten o'clock, OK. I'll come and pick you up in the car.
B|Super. Et s'il pleut, on fait quoi ?|Süper. Peki yağmur yağarsa ne yapıyoruz?|Great. And if it rains, what do we do?
A|S'il pleut, on mange tes börek chez moi devant un film !|Yağmur yağarsa senin böreklerini bende film izlerken yeriz!|If it rains, we'll eat your börek at my place in front of a film!
B|Marché conclu ! À dimanche, Camille.|Anlaştık! Pazar görüşürüz Camille.|Deal! See you on Sunday, Camille.`),

    D("d15-piqures-moustique", "A2", "À la pharmacie : des piqûres de moustique", "Eczanede: sivrisinek ısırıkları", "At the pharmacy: mosquito bites", { A: "Pharmacienne", B: "Julien" }, "B", `
A|Bonjour monsieur, je peux vous aider ?|Merhaba beyefendi, yardımcı olabilir miyim?|Hello, sir, can I help you?
B|Bonjour madame. Je voudrais une crème pour les piqûres de moustique. Regardez mes jambes !|Merhaba hanımefendi. Sivrisinek ısırıkları için bir krem istiyorum. Bacaklarıma bakın!|Hello, madam. I'd like a cream for mosquito bites. Look at my legs!
A|Oh là là ! Vous en avez beaucoup. Ça s'est passé quand ?|Aman aman! Çok fazla var. Ne zaman oldu?|Oh dear! You've got a lot of them. When did it happen?
B|Hier soir. On a dîné dans le jardin chez des amis, au bord de la rivière. J'ai été piqué au moins vingt fois.|Dün akşam. Nehrin kenarında, arkadaşlarımızın bahçesinde akşam yemeği yedik. En az yirmi kez ısırıldım.|Last night. We had dinner in the garden at some friends' house, by the river. I got bitten at least twenty times.
A|Ça vous gratte beaucoup ?|Çok kaşınıyor mu?|Are they very itchy?
B|Oui, énormément ! Cette nuit, je n'ai presque pas dormi.|Evet, inanılmaz! Bu gece neredeyse hiç uyumadım.|Yes, terribly! Last night I hardly slept.
A|Est-ce que vous avez de la fièvre, ou une piqûre très rouge et très gonflée ?|Ateşiniz var mı, ya da çok kızarık ve çok şişmiş bir ısırık?|Do you have a temperature, or a bite that's very red and very swollen?
B|Non, pas de fièvre. Elles sont rouges, mais petites.|Hayır, ateşim yok. Kızarıklar ama küçükler.|No, no temperature. They're red, but small.
A|Bon, ce n'est pas grave. Je vous conseille cette crème apaisante. Vous la mettez trois fois par jour.|Peki, ciddi değil. Size bu yatıştırıcı kremi öneririm. Günde üç kez sürersiniz.|Well, it's not serious. I recommend this soothing cream. You put it on three times a day.
B|Elle marche vite ?|Çabuk etki ediyor mu?|Does it work fast?
A|Oui, en quelques minutes, ça gratte moins. Et surtout, ne vous grattez pas, sinon ça peut s'infecter.|Evet, birkaç dakika içinde kaşıntı azalır. Ve en önemlisi kaşımayın, yoksa iltihaplanabilir.|Yes, within a few minutes it itches less. And above all, don't scratch, or it can get infected.
B|C'est difficile, mais je vais essayer ! Vous avez aussi quelque chose pour ne pas être piqué ?|Zor ama deneyeceğim! Isırılmamak için de bir şeyiniz var mı?|That's hard, but I'll try! Do you also have something to avoid getting bitten?
A|Oui, ce spray anti-moustiques. Vous le mettez sur la peau avant de sortir le soir.|Evet, bu sivrisinek kovucu sprey. Akşam dışarı çıkmadan önce cildinize sıkarsınız.|Yes, this mosquito repellent spray. You put it on your skin before going out in the evening.
B|Parfait, je prends les deux. Ça fait combien ?|Mükemmel, ikisini de alıyorum. Ne kadar tutuyor?|Perfect, I'll take both. How much is that?
A|Ça fait quatorze euros cinquante. Et si les piqûres ne vont pas mieux dans trois jours, allez voir votre médecin.|On dört euro elli. Isırıklar üç gün içinde iyileşmezse doktorunuza gidin.|That's fourteen euros fifty. And if the bites aren't better in three days, go and see your doctor.
B|D'accord. Merci beaucoup pour vos conseils !|Tamam. Tavsiyeleriniz için çok teşekkürler!|OK. Thank you very much for your advice!
A|Je vous en prie. Bonne soirée… et attention aux moustiques !|Rica ederim. İyi akşamlar… ve sivrisineklere dikkat!|You're welcome. Have a nice evening… and watch out for mosquitoes!`),

    D("d15-colis-voisin", "A2", "Demander à un voisin de réceptionner un colis", "Bir komşudan kargo paketini teslim almasını istemek", "Asking a neighbour to take in a parcel", { A: "Monsieur Perrin", B: "Esin" }, "B", `
B|Bonsoir monsieur Perrin ! Excusez-moi de vous déranger.|İyi akşamlar Perrin Bey! Rahatsız ettiğim için kusura bakmayın.|Good evening, Mr Perrin! Sorry to bother you.
A|Bonsoir Esin. Vous ne me dérangez pas du tout. Qu'est-ce que je peux faire pour vous ?|İyi akşamlar Esin. Hiç rahatsız etmiyorsunuz. Sizin için ne yapabilirim?|Good evening, Esin. You're not bothering me at all. What can I do for you?
B|J'ai commandé un tapis de yoga sur Internet, et il va être livré demain. Mais demain, je travaille toute la journée.|İnternetten bir yoga matı sipariş ettim, yarın teslim edilecek. Ama yarın bütün gün çalışıyorum.|I ordered a yoga mat online, and it's going to be delivered tomorrow. But tomorrow I'm working all day.
A|Et votre mari ?|Peki eşiniz?|And your husband?
B|Il a cours de français le matin, et l'après-midi, il a un rendez-vous. Vous serez chez vous, demain ?|Sabah Fransızca dersi var, öğleden sonra da bir randevusu var. Yarın evde olacak mısınız?|He has his French class in the morning, and in the afternoon he has an appointment. Will you be at home tomorrow?
A|Oui, je suis à la retraite, je suis presque toujours là. Le livreur passe à quelle heure ?|Evet, emekliyim, neredeyse hep evdeyim. Kurye saat kaçta geliyor?|Yes, I'm retired, I'm almost always here. What time is the delivery man coming?
B|Entre dix heures et midi, d'après le message. Je peux lui dire de sonner chez vous ?|Mesaja göre saat on ile öğlen arasında. Kuryeye sizin zilinizi çalmasını söyleyebilir miyim?|Between ten and noon, according to the message. Can I tell him to ring your bell?
A|Bien sûr. Je suis au deuxième étage, porte gauche. Mon nom est sur l'interphone.|Tabii ki. İkinci kattayım, sol kapı. Adım diyafonda yazıyor.|Of course. I'm on the second floor, door on the left. My name is on the intercom.
B|Merci beaucoup ! Le colis n'est pas très lourd, mais il est un peu grand.|Çok teşekkürler! Paket çok ağır değil ama biraz büyük.|Thank you very much! The parcel isn't very heavy, but it's a bit big.
A|Pas de problème, j'ai de la place dans l'entrée. Le mois dernier, j'ai gardé une télévision pour la jeune fille du troisième !|Sorun değil, girişte yerim var. Geçen ay üçüncü kattaki genç kız için bir televizyonu bile teslim aldım!|No problem, I have room in the hall. Last month I kept a television for the young woman on the third floor!
B|Ha ha, alors un tapis de yoga, ce sera facile ! Je viendrai le chercher vers dix-neuf heures, ça vous va ?|Ha ha, o zaman bir yoga matı kolay olur! Akşam yedi gibi almaya gelirim, size uyar mı?|Ha ha, so a yoga mat will be easy! I'll come and get it at around seven pm, is that OK for you?
A|Oui, mais pas après vingt heures : je regarde toujours les informations.|Evet, ama saat sekizden sonra olmasın: her zaman haberleri izlerim.|Yes, but not after eight: I always watch the news.
B|C'est noté. Je vous envoie un SMS quand le colis est livré ? Ah non, c'est vous qui allez le savoir avant moi !|Not ettim. Paket teslim edilince size mesaj atayım mı? Ah yok, siz benden önce öğreneceksiniz!|Noted. Shall I text you when the parcel is delivered? Oh no, you'll know before me!
A|Exactement ! Je vous enverrai un message, moi.|Aynen! Size ben mesaj atarım.|Exactly! I'll send you a message myself.
B|Merci encore, monsieur Perrin. Vous êtes vraiment un voisin en or.|Tekrar teşekkürler Perrin Bey. Gerçekten altın gibi bir komşusunuz.|Thanks again, Mr Perrin. You really are a wonderful neighbour.
A|Avec plaisir, Esin. Bonne soirée !|Memnuniyetle Esin. İyi akşamlar!|My pleasure, Esin. Have a nice evening!`),

    D("d15-sport-enfant", "A2", "Quel sport choisir pour son enfant ?", "Çocuk için hangi spor seçilmeli?", "Which sport to choose for your child?", { A: "Nadia", B: "Esin" }, "A", `
A|Bonjour Esin ! Je peux vous demander un conseil ? Sophie m'a dit que vous étiez kiné du sport en Turquie.|Merhaba Esin! Size bir şey danışabilir miyim? Sophie bana Türkiye'de spor fizyoterapisti olduğunuzu söyledi.|Hello, Esin! Can I ask you for some advice? Sophie told me you were a sports physio in Turkey.
B|Bonjour Nadia ! Oui, c'est vrai, j'ai travaillé avec une équipe de handball. Je vous écoute.|Merhaba Nadia! Evet, doğru, bir hentbol takımıyla çalıştım. Sizi dinliyorum.|Hello, Nadia! Yes, that's true, I worked with a handball team. I'm listening.
A|Mon fils Adam a huit ans, et il veut faire un sport à la rentrée. Mais il ne sait pas lequel.|Oğlum Adam sekiz yaşında ve okullar açılınca bir spor yapmak istiyor. Ama hangisi olduğunu bilmiyor.|My son Adam is eight, and he wants to do a sport when school starts again. But he doesn't know which one.
B|Qu'est-ce qu'il aime faire, en général ? Il est plutôt calme ou très énergique ?|Genelde neler yapmayı seviyor? Daha çok sakin mi, yoksa çok enerjik mi?|What does he like doing, in general? Is he rather calm or very energetic?
A|Très énergique ! Il court partout. L'année dernière, il a essayé le judo, mais il s'est ennuyé.|Çok enerjik! Her yerde koşuyor. Geçen yıl judoyu denedi ama sıkıldı.|Very energetic! He runs everywhere. Last year he tried judo, but he got bored.
B|Il préfère peut-être un sport d'équipe. Il aime jouer au ballon avec ses copains ?|Belki bir takım sporunu tercih eder. Arkadaşlarıyla top oynamayı seviyor mu?|Maybe he'd prefer a team sport. Does he like playing ball with his friends?
A|Oui, il adore ça ! Il hésite entre le foot et le basket.|Evet, bayılıyor! Futbol ile basketbol arasında kararsız.|Yes, he loves it! He can't decide between football and basketball.
B|Et le handball ? Je ne suis pas objective, bien sûr ! Mais c'est très complet : on court, on saute, on lance.|Peki hentbol? Tabii ki tarafsız değilim! Ama çok kapsamlı bir spor: koşuyorsun, zıplıyorsun, atıyorsun.|And handball? I'm not objective, of course! But it's very complete: you run, you jump, you throw.
A|Ha ha ! Je n'y avais pas pensé. Il y a un club près de chez nous ?|Ha ha! Hiç aklıma gelmemişti. Bize yakın bir kulüp var mı?|Ha ha! I hadn't thought of that. Is there a club near us?
B|Oui, au gymnase Jean-Moulin. Ils ont un groupe pour les sept-neuf ans, le mercredi après-midi.|Evet, Jean-Moulin spor salonunda. Yedi-dokuz yaş için çarşamba öğleden sonraları bir grupları var.|Yes, at the Jean-Moulin sports hall. They have a group for seven-to-nine-year-olds on Wednesday afternoons.
A|Le mercredi, c'est pratique, il n'a pas école l'après-midi. C'est cher ?|Çarşamba pratik, öğleden sonra okulu yok. Pahalı mı?|Wednesday is handy, he doesn't have school in the afternoon. Is it expensive?
B|Je ne sais pas exactement, mais en général, un club coûte entre cent et deux cents euros par an.|Tam bilmiyorum ama genelde bir kulüp yılda yüz ile iki yüz euro arası tutuyor.|I don't know exactly, but in general a club costs between one and two hundred euros a year.
A|D'accord. Et il faut un certificat médical ?|Tamam. Sağlık raporu gerekiyor mu?|OK. And does he need a medical certificate?
B|Pour les enfants, souvent un simple questionnaire de santé suffit. Demandez au club, ils vous diront.|Çocuklar için genelde basit bir sağlık anketi yeterli. Kulübe sorun, size söylerler.|For children, a simple health questionnaire is often enough. Ask the club, they'll tell you.
A|Super. Je pense qu'on va aller à un entraînement d'essai mercredi prochain.|Süper. Sanırım önümüzdeki çarşamba bir deneme antrenmanına gideceğiz.|Great. I think we'll go to a trial session next Wednesday.
B|Excellente idée ! Comme ça, Adam va choisir lui-même. C'est le plus important : il doit s'amuser.|Harika fikir! Böylece Adam kendisi seçecek. En önemlisi bu: eğlenmesi gerekiyor.|Excellent idea! That way, Adam will choose for himself. That's the most important thing: he has to have fun.
A|Merci beaucoup, Esin. Je vous dirai s'il devient champion de handball !|Çok teşekkürler Esin. Hentbol şampiyonu olursa size haber veririm!|Thank you very much, Esin. I'll let you know if he becomes a handball champion!`)
  );
})();
