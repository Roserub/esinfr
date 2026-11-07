/* More real-life dialogues (A2), played line by line with French audio.
   Lines: "A|français|Türkçe|English" or "B|…". In role-play, the learner says the "me" side. */
(function () {
  const L = s => s.trim().split("\n").map(l => { const [who, fr, tr, en] = l.split("|").map(x => x.trim()); return { who, fr, tr, en }; });
  const D = (id, level, fr, tr, en, roles, me, lines) => ({ id, level, t: { fr, tr, en }, roles, me, lines: L(lines) });

  window.DIALOGUES = window.DIALOGUES || [];
  window.DIALOGUES.push(
    D("d-echauffement", "A2", "Expliquer un échauffement à un client", "Bir üyeye ısınmayı anlatmak", "Explaining a warm-up to a member", { A: "Monsieur Leroy", B: "Esin" }, "B", `
A|Bonjour Esin. Le coach n'est pas là ce matin ? Je voulais lui demander un conseil.|Merhaba Esin. Antrenör bu sabah yok mu? Ona bir şey danışmak istiyordum.|Hello, Esin. Isn't the coach here this morning? I wanted to ask him for some advice.
B|Non, il arrive à midi. Je peux peut-être vous aider ?|Hayır, öğlen geliyor. Belki ben yardımcı olabilirim?|No, he's arriving at noon. Maybe I can help you?
A|La dernière fois, j'ai couru sur le tapis sans m'échauffer, et j'ai eu des courbatures pendant trois jours.|Geçen sefer ısınmadan koşu bandında koştum ve üç gün kas ağrısı çektim.|Last time I ran on the treadmill without warming up, and I had aching muscles for three days.
B|Ah, l'échauffement, c'est très important ! Je ne suis pas coach ici, mais j'ai étudié la kinésithérapie en Turquie. Je peux vous montrer un échauffement simple.|Ah, ısınma çok önemli! Burada antrenör değilim ama Türkiye'de fizyoterapi okudum. Size basit bir ısınma gösterebilirim.|Ah, warming up is very important! I'm not a coach here, but I studied physiotherapy in Turkey. I can show you a simple warm-up.
A|Avec plaisir ! Je commence par quoi ?|Memnuniyetle! Neyle başlıyorum?|With pleasure! What do I start with?
B|D'abord, marchez vite sur le tapis pendant cinq minutes. Ensuite, accélérez un peu.|Önce koşu bandında beş dakika hızlı yürüyün. Sonra biraz hızlanın.|First, walk fast on the treadmill for five minutes. Then speed up a little.
A|D'accord. Et après ?|Tamam. Sonra?|OK. And then?
B|Après, faites des cercles avec les chevilles, puis avec les genoux et les épaules. Dix fois de chaque côté.|Sonra ayak bileklerinizle, ardından dizleriniz ve omuzlarınızla daireler çizin. Her iki yöne onar kez.|After that, make circles with your ankles, then with your knees and shoulders. Ten times each way.
A|Comme ça ?|Böyle mi?|Like this?
B|Oui, c'est parfait. Doucement, sans forcer. Ensuite, vous pouvez faire des montées de genoux et des talons-fesses, trente secondes chacun.|Evet, mükemmel. Yavaşça, zorlamadan. Sonra diz çekme ve topuk-kalça hareketlerini otuzar saniye yapabilirsiniz.|Yes, that's perfect. Gently, without forcing. Then you can do high knees and butt kicks, thirty seconds each.
A|Et les étirements, je les fais avant ?|Peki esneme hareketlerini önce mi yapıyorum?|And the stretches, do I do them before?
B|Les longs étirements, plutôt après la course, quand les muscles sont chauds.|Uzun esnemeleri daha çok koşudan sonra, kaslar ısınmışken yapın.|The long stretches, rather after the run, when your muscles are warm.
A|Merci, c'est très clair ! Vous expliquez bien.|Teşekkürler, çok açık! İyi anlatıyorsunuz.|Thanks, that's very clear! You explain well.
B|Avec plaisir. Mais si vous avez mal pendant la course, arrêtez-vous et parlez-en à un médecin ou à un kiné.|Rica ederim. Ama koşarken ağrınız olursa durun ve bir doktora ya da fizyoterapiste danışın.|My pleasure. But if you feel pain while running, stop and talk to a doctor or a physio about it.
A|Promis. Et je demanderai aussi au coach un petit programme. Bonne journée, Esin !|Söz. Antrenörden de küçük bir program isteyeceğim. İyi günler Esin!|Promise. And I'll also ask the coach for a little programme. Have a nice day, Esin!`),

    D("d-dermato-soleil", "A2", "Chez le dermatologue : un coup de soleil", "Dermatologda: güneş yanığı", "At the dermatologist's: sunburn", { A: "Dermatologue", B: "Esin" }, "B", `
A|Bonjour madame Yılmaz. Je vous écoute. Qu'est-ce qui vous amène ?|Merhaba Yılmaz Hanım. Sizi dinliyorum. Hangi şikâyetle geldiniz?|Hello, Mrs Yılmaz. I'm listening. What brings you here?
B|Bonjour docteur. J'ai pris un gros coup de soleil ce week-end, sur les épaules et sur le dos.|Merhaba doktor. Bu hafta sonu omuzlarımda ve sırtımda ciddi bir güneş yanığı oldu.|Hello, doctor. I got a bad sunburn this weekend, on my shoulders and my back.
A|Vous étiez à la plage ?|Plajda mıydınız?|Were you at the beach?
B|Oui. Il faisait très beau, et je me suis endormie au soleil. Je n'avais pas mis de crème…|Evet. Hava çok güzeldi ve güneşte uyuyakaldım. Krem sürmemiştim…|Yes. The weather was lovely, and I fell asleep in the sun. I hadn't put on any sunscreen…
A|Ça arrive ! Je vais regarder. Ça vous fait mal quand je touche ici ?|Olur öyle şeyler! Bir bakayım. Buraya dokunduğumda acıyor mu?|It happens! I'll have a look. Does it hurt when I touch here?
B|Oui, un peu. Et ça me gratte beaucoup. J'ai aussi quelques petites cloques.|Evet, biraz. Ve çok kaşınıyor. Birkaç küçük su toplaması da var.|Yes, a little. And it's very itchy. I also have a few small blisters.
A|C'est une brûlure superficielle, avec quelques cloques. Ce n'est pas grave, mais il faut faire attention.|Yüzeysel bir yanık, birkaç su toplamasıyla. Ciddi değil ama dikkat etmek gerekiyor.|It's a superficial burn, with a few blisters. It's not serious, but you need to be careful.
B|Qu'est-ce que je dois faire ?|Ne yapmalıyım?|What should I do?
A|Ne percez pas les cloques. Prenez des douches tièdes, pas chaudes, et mettez cette crème apaisante deux fois par jour.|Su toplamalarını patlatmayın. Sıcak değil ılık duş alın ve bu yatıştırıcı kremi günde iki kez sürün.|Don't burst the blisters. Take lukewarm showers, not hot ones, and put on this soothing cream twice a day.
B|D'accord. Et je peux aller courir ? Je cours le samedi matin.|Tamam. Koşuya gidebilir miyim? Cumartesi sabahları koşuyorum.|OK. And can I go running? I run on Saturday mornings.
A|Attendez quelques jours. Le frottement du tee-shirt et la transpiration vont irriter la peau. Et buvez beaucoup d'eau.|Birkaç gün bekleyin. Tişörtün sürtünmesi ve ter cildi tahriş eder. Bir de bol su için.|Wait a few days. The rubbing of your T-shirt and the sweat will irritate the skin. And drink plenty of water.
B|Je comprends. La prochaine fois, je mettrai de la crème solaire.|Anlıyorum. Bir dahaki sefere güneş kremi süreceğim.|I understand. Next time, I'll put on sunscreen.
A|Oui, indice 50, et toutes les deux heures. Et évitez le soleil entre midi et 16 heures.|Evet, 50 faktör ve iki saatte bir. Bir de öğlen ile saat 16 arasında güneşten kaçının.|Yes, factor 50, and every two hours. And avoid the sun between noon and 4 pm.
B|Merci beaucoup, docteur. Je retiens la leçon !|Çok teşekkürler doktor. Dersimi aldım!|Thank you very much, doctor. Lesson learned!`),

    D("d-turquie-collegue", "A2", "Parler de la Turquie à une collègue", "Bir iş arkadaşına Türkiye'yi anlatmak", "Telling a colleague about Turkey", { A: "Léa", B: "Esin" }, "B", `
A|Esin, l'été prochain, je pars en vacances en Turquie ! Tu peux me donner des conseils ?|Esin, gelecek yaz Türkiye'ye tatile gidiyorum! Bana tavsiye verebilir misin?|Esin, next summer I'm going on holiday to Turkey! Can you give me some tips?
B|Super ! Avec plaisir. Tu vas où ?|Süper! Memnuniyetle. Nereye gidiyorsun?|Great! With pleasure. Where are you going?
A|D'abord à Istanbul, puis sur la côte. Qu'est-ce qu'il faut absolument manger ?|Önce İstanbul'a, sonra sahile. Mutlaka ne yemek lazım?|First Istanbul, then the coast. What do I absolutely have to eat?
B|Oh, il y a tellement de choses ! Le matin, il faut essayer un vrai petit-déjeuner turc, avec du fromage, des olives, des tomates et des œufs.|Ah, o kadar çok şey var ki! Sabah gerçek bir Türk kahvaltısı denemelisin: peynir, zeytin, domates ve yumurtayla.|Oh, there are so many things! In the morning, you have to try a real Turkish breakfast, with cheese, olives, tomatoes and eggs.
A|Ça a l'air délicieux. Et le midi ?|Kulağa çok lezzetli geliyor. Ya öğlen?|That sounds delicious. And for lunch?
B|Goûte la soupe de lentilles, les börek et les mantı. Ce sont des petits raviolis avec du yaourt et de l'ail.|Mercimek çorbasını, böreği ve mantıyı tat. Mantı, yoğurt ve sarımsaklı küçük hamur bohçaları.|Try the lentil soup, börek and mantı. They're little ravioli with yoghurt and garlic.
A|Du yaourt avec des raviolis ? C'est original ! Et les fêtes en Turquie, c'est comment ?|Hamur bohçasıyla yoğurt mu? İlginçmiş! Peki Türkiye'de bayramlar nasıl?|Yoghurt with ravioli? That's unusual! And what are celebrations like in Turkey?
B|La fête la plus importante pour les enfants, c'est le Şeker Bayramı, la « fête du sucre ».|Çocuklar için en önemli bayram Şeker Bayramı.|The most important celebration for children is Şeker Bayramı, the "sugar feast".
A|Pourquoi « du sucre » ?|Neden « şeker »?|Why "sugar"?
B|Parce qu'on mange beaucoup de bonbons et de baklava ! On rend visite à la famille, et les enfants embrassent la main des grands-parents.|Çünkü bol bol şeker ve baklava yiyoruz! Aileyi ziyaret ediyoruz ve çocuklar büyükanne ve büyükbabalarının elini öpüyor.|Because we eat lots of sweets and baklava! We visit family, and children kiss their grandparents' hands.
A|C'est mignon ! Et ça, c'est quand ?|Ne tatlı! Peki o ne zaman?|That's sweet! And when is it?
B|Ça change chaque année, parce que ça suit le calendrier lunaire. Regarde sur internet avant de partir.|Her yıl değişiyor çünkü ay takvimine göre. Gitmeden önce internetten bak.|It changes every year, because it follows the lunar calendar. Check online before you leave.
A|D'accord. Merci, Esin, tu es une super guide !|Tamam. Teşekkürler Esin, harika bir rehbersin!|OK. Thanks, Esin, you're a great guide!
B|Ha ha ! Envoie-moi des photos. Et rapporte-moi des simit d'Istanbul !|Ha ha! Bana fotoğraf gönder. Bir de İstanbul'dan simit getir!|Ha ha! Send me photos. And bring me back some simit from Istanbul!`),

    D("d-demande-conge", "A2", "Demander un congé à sa responsable", "Müdiresinden izin istemek", "Asking your manager for time off", { A: "Sophie", B: "Esin" }, "B", `
B|Sophie, tu as cinq minutes ? Je voudrais te parler de mes congés.|Sophie, beş dakikan var mı? İzinlerim hakkında seninle konuşmak istiyorum.|Sophie, do you have five minutes? I'd like to talk to you about my time off.
A|Bien sûr, Esin. Assieds-toi. Je t'écoute.|Tabii Esin. Otur. Seni dinliyorum.|Of course, Esin. Sit down. I'm listening.
B|J'aimerais rentrer en Turquie pour voir ma famille. Est-ce que je pourrais prendre deux semaines en avril ?|Ailemi görmek için Türkiye'ye gitmek istiyorum. Nisanda iki hafta izin alabilir miyim?|I'd like to go back to Turkey to see my family. Could I take two weeks in April?
A|En avril… Quelles dates exactement ?|Nisanda… Tam olarak hangi tarihler?|In April… Which dates exactly?
B|Du 6 au 19 avril, si c'est possible.|Mümkünse 6-19 Nisan arası.|From the 6th to the 19th of April, if possible.
A|Hmm, il y a déjà Karim en congé la première semaine. Je ne peux pas laisser l'accueil avec une seule personne.|Hmm, ilk hafta Karim zaten izinde. Resepsiyonu tek kişiyle bırakamam.|Hmm, Karim is already off the first week. I can't leave the front desk with only one person.
B|Je comprends. Et si je partais une semaine plus tard, du 13 au 26 avril ?|Anlıyorum. Peki bir hafta sonra, 13-26 Nisan arası gitsem?|I understand. And what if I left a week later, from the 13th to the 26th of April?
A|Là, ça devrait aller. Tu as assez de jours de congés ?|O zaman olur gibi. Yeterli izin günün var mı?|That should be fine. Do you have enough days of leave?
B|Oui, j'ai vérifié sur ma fiche de paie. Il me reste quinze jours.|Evet, maaş bordromdan kontrol ettim. On beş günüm kaldı.|Yes, I checked on my payslip. I have fifteen days left.
A|Parfait. Tu peux m'envoyer ta demande par e-mail ? Comme ça, je la valide officiellement.|Mükemmel. Talebini bana e-postayla gönderebilir misin? Böylece resmi olarak onaylarım.|Perfect. Can you send me your request by email? That way I can approve it officially.
B|Oui, je te l'envoie aujourd'hui. Et je prépare des notes pour la personne qui me remplacera.|Evet, bugün gönderiyorum. Yerime bakacak kişi için de notlar hazırlayacağım.|Yes, I'll send it today. And I'll prepare notes for the person who will replace me.
A|C'est très professionnel, merci. Tu n'es pas rentrée en Turquie depuis longtemps, non ?|Çok profesyonelce, teşekkürler. Uzun zamandır gitmiyorsun, değil mi?|That's very professional, thank you. You haven't been back for a long time, have you?
B|Non, je ne suis pas rentrée depuis un an. Ma famille me manque beaucoup.|Hayır, bir yıldır gitmedim. Ailemi çok özledim.|No, I haven't been back for a year. I miss my family a lot.
A|Alors profite bien ! Tu le mérites.|O zaman tadını çıkar! Bunu hak ediyorsun.|Then enjoy it! You deserve it.
B|Merci beaucoup, Sophie !|Çok teşekkürler Sophie!|Thank you very much, Sophie!`),

    D("d-entretien-assistante", "A2", "Entretien pour un poste d'assistante dans un club de sport", "Bir spor kulübünde asistanlık mülakatı", "Interview for an assistant job at a sports club", { A: "Directeur du club", B: "Esin" }, "B", `
A|Bonjour madame Yılmaz, merci d'être venue. Présentez-vous en quelques mots.|Merhaba Yılmaz Hanım, geldiğiniz için teşekkürler. Birkaç cümleyle kendinizi tanıtın.|Hello, Mrs Yılmaz, thank you for coming. Introduce yourself in a few words.
B|Bonjour. Je m'appelle Esin Yılmaz, j'ai 30 ans et je suis turque. J'habite en France depuis un an.|Merhaba. Adım Esin Yılmaz, 30 yaşındayım ve Türküm. Bir yıldır Fransa'da yaşıyorum.|Hello. My name is Esin Yılmaz, I'm 30 and I'm Turkish. I've been living in France for a year.
A|Qu'est-ce que vous avez fait comme études ?|Ne okudunuz?|What did you study?
B|J'ai un diplôme de kinésithérapeute en Turquie. Là-bas, j'ai travaillé avec une équipe de handball.|Türkiye'de fizyoterapi diplomam var. Orada bir hentbol takımıyla çalıştım.|I have a physiotherapy degree from Turkey. There, I worked with a handball team.
A|C'est intéressant. Vous pouvez travailler comme kiné en France ?|İlginç. Fransa'da fizyoterapist olarak çalışabilir misiniz?|That's interesting. Can you work as a physio in France?
B|Pas encore. Mon diplôme n'est pas reconnu en France. Pour l'instant, je travaille à l'accueil d'une salle de sport.|Henüz değil. Diplomam Fransa'da tanınmıyor. Şimdilik bir spor salonunun resepsiyonunda çalışıyorum.|Not yet. My degree isn't recognised in France. For now, I work at the front desk of a gym.
A|D'accord. Et pourquoi est-ce que ce poste d'assistante vous intéresse ?|Anladım. Peki bu asistanlık pozisyonu neden ilginizi çekiyor?|I see. And why does this assistant job interest you?
B|Parce que j'adore le sport et j'aimerais être plus près des entraîneurs et des joueurs. Je connais bien le monde des clubs de sport.|Çünkü sporu çok seviyorum ve antrenörlere ve oyunculara daha yakın olmak istiyorum. Spor kulüplerinin dünyasını iyi tanıyorum.|Because I love sport and I'd like to be closer to the coaches and players. I know the world of sports clubs well.
A|Le poste, c'est surtout de l'organisation : les plannings, les inscriptions, les déplacements de l'équipe. Ça vous convient ?|Pozisyon daha çok organizasyon: programlar, kayıtlar, takımın yolculukları. Size uyar mı?|The job is mostly organisation: schedules, registrations, the team's trips. Does that suit you?
B|Oui, tout à fait. À l'accueil, je gère déjà les inscriptions et les plannings des cours.|Evet, kesinlikle. Resepsiyonda zaten kayıtları ve ders programlarını yönetiyorum.|Yes, absolutely. At the front desk, I already handle registrations and class schedules.
A|Et votre français ? Il faut parler avec les parents et les joueurs.|Peki Fransızcanız? Velilerle ve oyuncularla konuşmak gerekiyor.|And your French? You have to talk to parents and players.
B|J'apprends tous les jours. Je fais encore des erreurs, mais je comprends bien et je parle aussi très bien anglais.|Her gün öğreniyorum. Hâlâ hata yapıyorum ama iyi anlıyorum, ayrıca çok iyi İngilizce konuşuyorum.|I learn every day. I still make mistakes, but I understand well, and I also speak English very well.
A|Très bien. Vous avez des questions ?|Çok iyi. Sorularınız var mı?|Very good. Do you have any questions?
B|Oui : quels seraient les horaires de travail ?|Evet: çalışma saatleri ne olurdu?|Yes: what would the working hours be?
A|Surtout le mercredi et le samedi, les jours de match. Nous vous répondrons la semaine prochaine.|Daha çok çarşamba ve cumartesi, maç günleri. Size gelecek hafta dönüş yapacağız.|Mostly Wednesdays and Saturdays, match days. We'll get back to you next week.
B|Merci beaucoup pour votre temps. Au revoir, monsieur.|Zaman ayırdığınız için çok teşekkürler. Hoşça kalın beyefendi.|Thank you very much for your time. Goodbye, sir.`),

    D("d-plainte-resto", "A2", "Se plaindre poliment au restaurant", "Restoranda kibarca şikâyet etmek", "Complaining politely at a restaurant", { A: "Serveur", B: "Esin" }, "B", `
A|Tout se passe bien, madame ?|Her şey yolunda mı hanımefendi?|Is everything all right, madam?
B|Excusez-moi, il y a un petit problème. J'avais commandé le poisson, mais on m'a apporté le poulet.|Affedersiniz, küçük bir sorun var. Balık sipariş etmiştim ama bana tavuk getirildi.|Excuse me, there's a small problem. I had ordered the fish, but I was brought the chicken.
A|Oh, je suis vraiment désolé ! Je vérifie… Oui, vous avez raison. C'est une erreur de la cuisine.|Ah, gerçekten çok özür dilerim! Kontrol ediyorum… Evet, haklısınız. Mutfağın hatası.|Oh, I'm really sorry! Let me check… Yes, you're right. The kitchen made a mistake.
B|Ce n'est pas grave, mais je préférerais vraiment le poisson.|Önemli değil ama gerçekten balığı tercih ederim.|It's not a big deal, but I'd really prefer the fish.
A|Bien sûr. Je demande tout de suite à la cuisine de le préparer. Il faut compter dix minutes.|Tabii. Hemen mutfağa hazırlatıyorum. On dakika kadar sürer.|Of course. I'll ask the kitchen to make it right away. It'll take about ten minutes.
B|D'accord, merci. Et mon amie a un autre souci : ses frites sont froides.|Tamam, teşekkürler. Arkadaşımın da başka bir sorunu var: patates kızartması soğuk.|OK, thank you. And my friend has another problem: her chips are cold.
A|Ah… Je suis désolé, ce soir, il y a beaucoup de monde. Je vous apporte des frites chaudes.|Ah… Özür dilerim, bu akşam çok kalabalık. Size sıcak patates getiriyorum.|Ah… I'm sorry, it's very busy tonight. I'll bring you hot chips.
B|Merci, c'est gentil. Je comprends, ce n'est pas facile quand il y a du monde.|Teşekkürler, çok naziksiniz. Anlıyorum, kalabalıkken kolay değil.|Thank you, that's kind. I understand, it's not easy when it's busy.
A|Voilà votre poisson, madame, et les frites. Encore toutes nos excuses.|Balığınız buyurun hanımefendi, patatesler de. Tekrar özür dileriz.|Here's your fish, madam, and the chips. Our apologies again.
B|Merci. Il a l'air très bon !|Teşekkürler. Çok güzel görünüyor!|Thank you. It looks very good!
A|Pour nous excuser, nous vous offrons le dessert. Vous voulez voir la carte ?|Özür olarak tatlıyı bizden ikram ediyoruz. Menüyü görmek ister misiniz?|To apologise, dessert is on us. Would you like to see the menu?
B|Oh, c'est très gentil ! Ce n'était pas nécessaire.|Ah, çok naziksiniz! Gerek yoktu.|Oh, that's very kind! That wasn't necessary.
A|Si, si, j'insiste. Nous avons une très bonne mousse au chocolat.|Yok yok, ısrar ediyorum. Çok güzel bir çikolatalı musumuz var.|No, really, I insist. We have a very good chocolate mousse.
B|Alors deux mousses au chocolat, s'il vous plaît. Merci pour votre gentillesse !|O zaman iki çikolatalı mus lütfen. Nezaketiniz için teşekkürler!|Then two chocolate mousses, please. Thank you for your kindness!`),

    D("d-agence-immo", "A2", "À l'agence immobilière", "Emlak ofisinde", "At the estate agency", { A: "Agent immobilier", B: "Esin" }, "B", `
A|Bonjour madame, asseyez-vous. Qu'est-ce que vous cherchez ?|Merhaba hanımefendi, oturun. Ne arıyorsunuz?|Hello, madam, have a seat. What are you looking for?
B|Bonjour. Mon mari et moi, nous cherchons un appartement à louer, un peu plus grand.|Merhaba. Kocam ve ben kiralık, biraz daha büyük bir daire arıyoruz.|Hello. My husband and I are looking for a slightly bigger flat to rent.
A|Très bien. Combien de pièces voulez-vous ?|Çok iyi. Kaç odalı istiyorsunuz?|Very good. How many rooms would you like?
B|Un trois-pièces, si possible : un salon et deux chambres. Nous aimerions une chambre pour les amis et la famille.|Mümkünse üç odalı: bir salon ve iki yatak odası. Arkadaşlar ve aile için bir oda istiyoruz.|A three-room flat, if possible: a living room and two bedrooms. We'd like a room for friends and family.
A|Et quel est votre budget ?|Bütçeniz ne kadar?|And what's your budget?
B|Pas plus de 950 euros par mois, charges comprises.|Aidat dahil ayda en fazla 950 euro.|No more than 950 euros a month, service charges included.
A|D'accord. J'ai un appartement de 62 mètres carrés, au deuxième étage avec ascenseur, à 920 euros charges comprises.|Tamam. Asansörlü, ikinci katta, 62 metrekare bir dairem var, aidat dahil 920 euro.|OK. I have a 62-square-metre flat, on the second floor with a lift, at 920 euros including charges.
B|Ça a l'air bien ! Il est près des transports ?|Kulağa iyi geliyor! Ulaşıma yakın mı?|That sounds good! Is it near public transport?
A|Oui, le tram est à cinq minutes à pied. Et il y a un balcon.|Evet, tramvay yürüyerek beş dakika. Bir de balkonu var.|Yes, the tram is a five-minute walk away. And there's a balcony.
B|Super. Quels documents faut-il pour le dossier ?|Süper. Dosya için hangi belgeler gerekiyor?|Great. What documents are needed for the application?
A|Une pièce d'identité, vos trois dernières fiches de paie, votre contrat de travail et un garant.|Bir kimlik belgesi, son üç maaş bordronuz, iş sözleşmeniz ve bir kefil.|An ID document, your last three payslips, your employment contract and a guarantor.
B|Un garant ? Nous n'avons pas de famille en France.|Kefil mi? Fransa'da ailemiz yok.|A guarantor? We don't have any family in France.
A|Ce n'est pas un problème. Vous pouvez peut-être demander la garantie Visale. C'est gratuit : Action Logement se porte garant pour vous. Regardez sur le site si vous y avez droit.|Sorun değil. Belki Visale güvencesine başvurabilirsiniz. Ücretsiz: Action Logement size kefil oluyor. Hakkınız olup olmadığına sitesinden bakın.|That's not a problem. You may be able to apply for the Visale guarantee. It's free: Action Logement acts as your guarantor. Check on the website whether you're eligible.
B|Ah, je ne connaissais pas ! Est-ce qu'on pourrait visiter l'appartement cette semaine ?|Ah, bilmiyordum! Daireyi bu hafta görebilir miyiz?|Ah, I didn't know that! Could we visit the flat this week?
A|Bien sûr. Jeudi à 18 h, ça vous va ?|Tabii. Perşembe saat 18'de uygun mu?|Of course. Thursday at 6 pm, does that suit you?
B|Parfait, nous serons là. Merci beaucoup !|Mükemmel, orada olacağız. Çok teşekkürler!|Perfect, we'll be there. Thank you very much!`),

    D("d-ecole-langue", "A2", "Appeler une école de langue", "Bir dil okulunu aramak", "Calling a language school", { A: "Secrétaire", B: "Esin" }, "B", `
A|École Langue et Culture, bonjour !|Langue et Culture Okulu, merhaba!|Langue et Culture school, hello!
B|Bonjour madame. Je voudrais m'inscrire à un cours de français. Je suis turque et j'habite en France depuis un an.|Merhaba hanımefendi. Bir Fransızca kursuna yazılmak istiyorum. Türküm ve bir yıldır Fransa'da yaşıyorum.|Hello, madam. I'd like to sign up for a French course. I'm Turkish and I've been living in France for a year.
A|Très bien. Vous avez déjà suivi des cours ?|Çok iyi. Daha önce kursa gittiniz mi?|Very good. Have you taken classes before?
B|Oui, j'ai fait un cours débutant. Maintenant, je pense que j'ai le niveau A1, peut-être un peu plus.|Evet, başlangıç kursuna gittim. Şimdi A1 seviyesinde olduğumu düşünüyorum, belki biraz daha fazla.|Yes, I did a beginners' course. Now I think I have an A1 level, maybe a bit more.
A|Pour être sûrs, nous faisons un test de niveau. Il y a une partie écrite en ligne et un petit entretien oral.|Emin olmak için seviye tespit sınavı yapıyoruz. İnternetten yazılı bir bölüm ve kısa bir sözlü görüşme var.|To be sure, we do a placement test. There's a written part online and a short oral interview.
B|D'accord. L'entretien oral, ça dure combien de temps ?|Tamam. Sözlü görüşme ne kadar sürüyor?|OK. How long does the oral interview last?
A|Environ quinze minutes. Ne stressez pas, c'est juste une conversation !|Yaklaşık on beş dakika. Strese girmeyin, sadece bir sohbet!|About fifteen minutes. Don't stress, it's just a conversation!
B|Ouf ! Et quels sont les horaires des cours ?|Oh be! Peki derslerin saatleri ne?|Phew! And what are the class times?
A|Nous avons des cours le matin, de 9 h à 12 h, et des cours du soir, le lundi et le jeudi de 18 h 30 à 20 h 30.|Sabah 9'dan 12'ye dersimiz var, bir de akşam dersleri, pazartesi ve perşembe 18.30'dan 20.30'a.|We have morning classes, from 9 to 12, and evening classes, on Mondays and Thursdays from 6:30 to 8:30 pm.
B|Les cours du soir m'intéressent. Je travaille dans la journée. Il y a combien d'élèves par groupe ?|Akşam dersleri ilgimi çekiyor. Gündüz çalışıyorum. Bir grupta kaç öğrenci var?|The evening classes interest me. I work during the day. How many students are there per group?
A|Douze au maximum. Et à la fin, vous pourrez aussi préparer le DELF A2, si vous voulez.|En fazla on iki. Sonunda isterseniz DELF A2'ye de hazırlanabilirsiniz.|Twelve at most. And at the end, you can also prepare for the DELF A2, if you like.
B|Ce serait parfait ! Comment je fais pour le test ?|Mükemmel olur! Sınav için ne yapmam gerekiyor?|That would be perfect! What do I do for the test?
A|Je vous envoie le lien par e-mail. Vous pouvez me donner votre adresse ?|Bağlantıyı size e-postayla gönderiyorum. Adresinizi verebilir misiniz?|I'll send you the link by email. Can you give me your address?
B|Oui, c'est esin point yilmaz arobase exemple point fr. Yilmaz sans accent.|Evet, esin nokta yilmaz et exemple nokta fr. Yilmaz, ı yerine normal i ile.|Yes, it's esin dot yilmaz at exemple dot fr. Yilmaz without an accent.
A|C'est noté. Vous recevrez le lien aujourd'hui. Bonne chance pour le test !|Not aldım. Bağlantıyı bugün alacaksınız. Sınavda bol şans!|Got it. You'll receive the link today. Good luck with the test!`),

    D("d-semi-marathon", "A2", "S'inscrire à un semi-marathon", "Yarı maratona kaydolmak", "Signing up for a half marathon", { A: "Organisatrice", B: "Esin" }, "B", `
A|Association Courir Ensemble, bonjour !|Courir Ensemble Derneği, merhaba!|Courir Ensemble running association, hello!
B|Bonjour. J'ai vu l'affiche du semi-marathon de mars. Je voudrais avoir quelques informations, s'il vous plaît.|Merhaba. Marttaki yarı maratonun afişini gördüm. Biraz bilgi almak istiyorum lütfen.|Hello. I saw the poster for the half marathon in March. I'd like some information, please.
A|Bien sûr. C'est 21 kilomètres. Vous avez déjà couru cette distance ?|Tabii. 21 kilometre. Bu mesafeyi daha önce koştunuz mu?|Of course. It's 21 kilometres. Have you run that distance before?
B|Non, jamais. Je cours le samedi matin, environ dix kilomètres. Vous pensez que c'est possible ?|Hayır, hiç. Cumartesi sabahları koşuyorum, yaklaşık on kilometre. Sizce mümkün mü?|No, never. I run on Saturday mornings, about ten kilometres. Do you think it's possible?
A|Oui, vous avez quatre mois pour vous préparer. Il faudra courir trois fois par semaine et augmenter petit à petit.|Evet, hazırlanmak için dört ayınız var. Haftada üç kez koşup yavaş yavaş artırmanız gerekecek.|Yes, you have four months to prepare. You'll need to run three times a week and build up little by little.
B|D'accord. L'inscription coûte combien ?|Tamam. Kayıt ne kadar?|OK. How much does registration cost?
A|28 euros jusqu'au 31 janvier, puis 35 euros. Vous recevrez un tee-shirt et une médaille à l'arrivée.|31 Ocak'a kadar 28 euro, sonra 35 euro. Bir tişört ve varışta bir madalya alacaksınız.|28 euros until the 31st of January, then 35 euros. You'll get a T-shirt, and a medal at the finish.
B|Super ! Il faut un certificat médical ?|Süper! Sağlık raporu gerekiyor mu?|Great! Do I need a medical certificate?
A|Si vous n'avez pas de licence d'athlétisme, vous devez faire le Parcours Prévention Santé sur internet. C'est gratuit et ça ne prend pas très longtemps.|Atletizm lisansınız yoksa internetten « Parcours Prévention Santé »yi yapmanız gerekiyor. Ücretsiz ve çok uzun sürmüyor.|If you don't have an athletics licence, you have to do the "Parcours Prévention Santé" (health prevention course) online. It's free and it doesn't take very long.
B|Qu'est-ce que c'est exactement ?|Tam olarak nedir o?|What is it exactly?
A|Ce sont des petites vidéos et des questions sur la santé et les risques de la course. À la fin, vous recevez une attestation.|Sağlık ve koşunun riskleri hakkında kısa videolar ve sorular. Sonunda bir belge alıyorsunuz.|They're short videos and questions about health and the risks of running. At the end, you get a certificate.
B|Très bien. Et le jour de la course, je récupère mon dossard où ?|Çok iyi. Peki yarış günü göğüs numaramı nereden alıyorum?|Very good. And on race day, where do I collect my bib?
A|La veille, au gymnase, ou le matin même jusqu'à 8 h 30. Le départ est à 9 h 30.|Bir gün önce spor salonunda ya da aynı sabah 8.30'a kadar. Yarış saat 9.30'da başlıyor.|The day before, at the sports hall, or on the morning itself until 8:30. The start is at 9:30.
B|Parfait. Je m'inscris ce soir sur votre site ! Merci beaucoup.|Mükemmel. Bu akşam sitenizden kaydoluyorum! Çok teşekkürler.|Perfect. I'll sign up on your website tonight! Thank you very much.
A|Avec plaisir. Bon entraînement, madame !|Rica ederim. İyi antrenmanlar hanımefendi!|My pleasure. Enjoy your training, madam!`),

    D("d-choix-film", "A2", "Quel film on regarde ?", "Hangi filmi izliyoruz?", "Which film are we watching?", { A: "Camille", B: "Esin" }, "B", `
A|Alors, ce soir, on regarde quoi ? J'ai envie d'un film d'horreur !|Eee, bu akşam ne izliyoruz? Canım korku filmi istiyor!|So, what are we watching tonight? I feel like a horror film!
B|Oh non, pas un film d'horreur ! La dernière fois, je n'ai pas dormi de la nuit.|Ah hayır, korku filmi olmaz! Geçen sefer bütün gece uyuyamadım.|Oh no, not a horror film! Last time I didn't sleep all night.
A|Ha ha, c'est vrai, tu as crié pendant tout le film ! Bon, alors, qu'est-ce que tu proposes ?|Ha ha, doğru, bütün film boyunca çığlık attın! Peki, sen ne öneriyorsun?|Ha ha, true, you screamed through the whole film! OK, so what do you suggest?
B|Une comédie romantique ? J'aimerais bien rire un peu après ma semaine.|Romantik komedi? Bu haftadan sonra biraz gülmek isterim.|A romantic comedy? I'd quite like to laugh a bit after my week.
A|Encore ? On a déjà regardé une comédie romantique la semaine dernière. C'est toujours la même histoire !|Yine mi? Geçen hafta zaten romantik komedi izledik. Hep aynı hikâye!|Again? We already watched a romantic comedy last week. It's always the same story!
B|Peut-être, mais au moins, ça finit bien ! Et un film d'action ?|Belki, ama en azından sonu iyi bitiyor! Peki aksiyon filmi?|Maybe, but at least it ends well! What about an action film?
A|Bof, il y a trop d'explosions et pas assez d'histoire.|Pek değil, çok fazla patlama var ama hikâye yetersiz.|Meh, there are too many explosions and not enough story.
B|Tu es difficile, ce soir ! Bon, et un documentaire ? J'ai vu qu'il y avait un documentaire sur les Jeux olympiques.|Bu akşam çok seçicisin! Peki belgesel? Olimpiyat Oyunları hakkında bir belgesel olduğunu gördüm.|You're picky tonight! OK, what about a documentary? I saw there was a documentary about the Olympic Games.
A|Toi et le sport ! Je savais que tu allais dire ça.|Sen ve spor! Bunu söyleyeceğini biliyordum.|You and sport! I knew you were going to say that.
B|Je propose un compromis : un film policier. Il y a du suspense, mais ce n'est pas trop effrayant.|Bir orta yol öneriyorum: bir polisiye film. Gerilim var ama çok korkutucu değil.|I suggest a compromise: a detective film. There's suspense, but it's not too scary.
A|Hmm… Pas mal comme idée. Il y a un nouveau film policier français sur la plateforme.|Hmm… Fena fikir değil. Platformda yeni bir Fransız polisiye filmi var.|Hmm… Not a bad idea. There's a new French detective film on the platform.
B|Parfait ! Un film en français, c'est un bon exercice pour moi.|Mükemmel! Fransızca bir film benim için iyi bir alıştırma.|Perfect! A film in French is good practice for me.
A|On met les sous-titres en français, d'accord ? C'est bien pour toi.|Fransızca altyazı açalım, tamam mı? Senin için iyi olur.|We'll put on French subtitles, OK? It's good for you.
B|D'accord. Mais c'est moi qui choisis le film la semaine prochaine !|Tamam. Ama gelecek hafta filmi ben seçiyorum!|OK. But I'm choosing the film next week!
A|Marché conclu ! Je vais chercher le pop-corn.|Anlaştık! Patlamış mısırı getiriyorum.|Deal! I'll go and get the popcorn.`)
  );
})();
