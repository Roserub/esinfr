/* More real-life dialogues (A2), played line by line with French audio.
   Lines: "A|français|Türkçe|English" or "B|…". In role-play, the learner says the "me" side. */
(function () {
  const L = s => s.trim().split("\n").map(l => { const [who, fr, tr, en] = l.split("|").map(x => x.trim()); return { who, fr, tr, en }; });
  const D = (id, level, fr, tr, en, roles, me, lines) => ({ id, level, t: { fr, tr, en }, roles, me, lines: L(lines) });

  window.DIALOGUES = window.DIALOGUES || [];
  window.DIALOGUES.push(
    D("d-osteo", "A2", "Chez l'ostéopathe", "Osteopatta", "At the osteopath's", { A: "Ostéopathe", B: "Esin" }, "B", `
A|Bonjour, madame Yılmaz. Asseyez-vous. Qu'est-ce qui ne va pas ?|Merhaba Yılmaz Hanım. Oturun. Neyiniz var?|Hello, Mrs Yılmaz. Have a seat. What's the problem?
B|J'ai mal au cou et à l'épaule droite depuis une semaine.|Bir haftadır boynum ve sağ omzum ağrıyor.|I've had pain in my neck and right shoulder for a week.
A|Vous avez fait un mouvement particulier ? Une chute ?|Özel bir hareket mi yaptınız? Düştünüz mü?|Did you make a particular movement? A fall?
B|Non, rien de spécial. Mais je travaille à l'accueil, je suis assise devant un écran toute la journée.|Hayır, özel bir şey yok. Ama resepsiyonda çalışıyorum, bütün gün bir ekranın önünde oturuyorum.|No, nothing special. But I work at a front desk, I sit in front of a screen all day.
A|Je vois. Et vous dormez bien ?|Anlıyorum. İyi uyuyor musunuz?|I see. And do you sleep well?
B|Pas vraiment. Je suis un peu stressée en ce moment.|Pek sayılmaz. Şu sıralar biraz stresliyim.|Not really. I'm a bit stressed at the moment.
A|Le stress joue souvent un rôle. Vous pouvez tourner la tête à gauche, doucement ?|Stresin sık sık etkisi oluyor. Başınızı yavaşça sola çevirebilir misiniz?|Stress often plays a part. Can you turn your head to the left, gently?
B|Oui… Aïe, à droite, c'est plus difficile.|Evet… Ay, sağa doğru daha zor.|Yes… Ouch, to the right it's harder.
A|D'accord. Vos muscles sont très tendus. Allongez-vous sur le dos, je vais travailler sur la nuque.|Tamam. Kaslarınız çok gergin. Sırtüstü uzanın, ensenize çalışacağım.|OK. Your muscles are very tense. Lie down on your back, I'm going to work on your neck.
B|Vous savez, j'étais kiné en Turquie. Je connais un peu ces techniques !|Biliyor musunuz, Türkiye'de fizyoterapisttim. Bu teknikleri biraz biliyorum!|You know, I was a physio in Turkey. I know these techniques a little!
A|Ah, une collègue ! Alors vous savez qu'il faut bouger et faire des pauses.|Ah, bir meslektaş! O zaman hareket etmek ve mola vermek gerektiğini biliyorsunuz.|Ah, a colleague! Then you know you need to move and take breaks.
B|Oui… mais pour les autres, c'est plus facile !|Evet… ama başkaları için daha kolay!|Yes… but it's easier for other people!
A|Ha ha, c'est toujours comme ça. Voilà, c'est fini. Comment vous vous sentez ?|Ha ha, hep böyledir. İşte, bitti. Nasıl hissediyorsunuz?|Ha ha, it's always like that. There, it's finished. How do you feel?
B|Beaucoup mieux, merci. La séance est remboursée ?|Çok daha iyi, teşekkürler. Seans geri ödeniyor mu?|Much better, thanks. Is the session reimbursed?
A|Pas par la Sécurité sociale, mais certaines mutuelles remboursent. Je vous donne une facture.|Sosyal Güvenlik ödemiyor, ama bazı tamamlayıcı sigortalar ödüyor. Size bir fatura veriyorum.|Not by Social Security, but some top-up insurers reimburse it. I'll give you an invoice.
B|Merci beaucoup. Et je vais faire des pauses, promis !|Çok teşekkürler. Mola da vereceğim, söz!|Thank you very much. And I'll take breaks, I promise!`),

    D("d-france-travail", "A2", "Expliquer son parcours à France Travail", "France Travail'de geçmişini anlatmak", "Explaining your background at France Travail", { A: "Conseillère", B: "Esin" }, "B", `
A|Bonjour, madame Yılmaz. Alors, parlez-moi un peu de votre parcours.|Merhaba Yılmaz Hanım. Bana biraz geçmişinizden bahsedin.|Hello, Mrs Yılmaz. So, tell me a little about your background.
B|Bonjour. J'ai fait des études de kinésithérapie en Turquie, à Istanbul.|Merhaba. Türkiye'de, İstanbul'da fizyoterapi okudum.|Hello. I studied physiotherapy in Turkey, in Istanbul.
A|Très bien. Et vous avez travaillé comme kiné ?|Çok iyi. Fizyoterapist olarak çalıştınız mı?|Very good. And did you work as a physio?
B|Oui, j'ai travaillé avec une équipe de handball. Je soignais les blessures des joueuses et des joueurs.|Evet, bir hentbol takımıyla çalıştım. Oyuncuların sakatlıklarını tedavi ediyordum.|Yes, I worked with a handball team. I treated the players' injuries.
A|C'est une belle expérience ! Et depuis votre arrivée en France ?|Çok güzel bir deneyim! Peki Fransa'ya geldiğinizden beri?|That's great experience! And since you arrived in France?
B|Je suis arrivée il y a un an. Maintenant, je travaille à l'accueil d'une salle de sport.|Bir yıl önce geldim. Şu an bir spor salonunun resepsiyonunda çalışıyorum.|I arrived a year ago. Now I work at the front desk of a gym.
A|Votre diplôme de kiné est reconnu en France ?|Fizyoterapi diplomanız Fransa'da tanınıyor mu?|Is your physio diploma recognised in France?
B|Non, pas encore. Pour l'instant, je ne peux pas travailler comme kiné ici.|Hayır, henüz değil. Şimdilik burada fizyoterapist olarak çalışamıyorum.|No, not yet. For now, I can't work as a physio here.
A|Je comprends. Quel est votre projet ?|Anlıyorum. Planınız ne?|I understand. What's your plan?
B|Je voudrais d'abord faire une licence STAPS, puis des études de kiné en France.|Önce bir STAPS lisansı, sonra Fransa'da fizyoterapi eğitimi yapmak istiyorum.|I'd like to do a STAPS degree first, then physio studies in France.
A|C'est un projet clair. Comment est votre français ?|Net bir plan. Fransızcanız nasıl?|That's a clear plan. How is your French?
B|Il progresse, mais j'ai encore besoin de cours, surtout pour l'écrit.|İlerliyor ama hâlâ derse ihtiyacım var, özellikle yazılı anlatım için.|It's improving, but I still need lessons, especially for writing.
A|Il existe des formations de français. Je vais vous envoyer une liste par e-mail.|Fransızca kursları var. Size e-postayla bir liste göndereceğim.|There are French courses. I'll send you a list by email.
B|Merci, c'est très gentil. Vous pourriez aussi m'aider avec mon CV ?|Teşekkürler, çok naziksiniz. CV'm konusunda da yardımcı olabilir misiniz?|Thanks, that's very kind. Could you also help me with my CV?
A|Bien sûr. Il y a un atelier CV jeudi prochain. Je vous inscris ?|Tabii. Gelecek perşembe bir CV atölyesi var. Sizi kaydedeyim mi?|Of course. There's a CV workshop next Thursday. Shall I sign you up?
B|Oui, avec plaisir. Merci pour vos conseils !|Evet, memnuniyetle. Tavsiyeleriniz için teşekkürler!|Yes, gladly. Thank you for your advice!`),

    D("d-equivalence", "A2", "Demander l'équivalence de son diplôme", "Diplomanın denkliğini sormak", "Asking about recognition of your diploma", { A: "Conseillère", B: "Esin" }, "B", `
B|Bonjour. J'ai un diplôme de kiné turc. Je voudrais savoir s'il peut être reconnu en France.|Merhaba. Türk fizyoterapi diplomam var. Fransa'da tanınıp tanınamayacağını öğrenmek istiyorum.|Hello. I have a Turkish physio diploma. I'd like to know if it can be recognised in France.
A|Bonjour. Pour les professions de santé, c'est spécial. Avec un diplôme de kiné obtenu hors de l'Union européenne, on ne peut pas avoir directement une autorisation d'exercice. Mais vous pouvez demander à entrer dans une école de kiné avec des dispenses.|Merhaba. Sağlık mesleklerinde durum farklı. Avrupa Birliği dışında alınmış bir fizyoterapi diplomasıyla doğrudan meslek icra izni alınamıyor. Ama muafiyetlerle bir fizyoterapi okuluna girmek için başvurabilirsiniz.|Hello. Health professions are a special case. With a physio diploma from outside the European Union, you can't get an authorisation to practise directly. But you can apply to enter a physio school with exemptions.
B|D'accord. Qu'est-ce que je dois envoyer ?|Tamam. Ne göndermem gerekiyor?|OK. What do I have to send?
A|Votre diplôme, le programme de vos études et vos notes. Tout doit être traduit en français.|Diplomanızı, ders programınızı ve notlarınızı. Hepsinin Fransızcaya çevrilmesi gerekiyor.|Your diploma, your course programme and your grades. Everything must be translated into French.
B|Je peux faire la traduction moi-même ?|Çeviriyi kendim yapabilir miyim?|Can I do the translation myself?
A|Non, il faut un traducteur assermenté. C'est un traducteur officiel.|Hayır, yeminli bir tercüman gerekiyor. Yani resmî bir tercüman.|No, you need a sworn translator. That's an official translator.
B|Je comprends. Et après, qui étudie mon dossier ?|Anlıyorum. Sonra dosyamı kim inceliyor?|I see. And then, who examines my file?
A|L'école. Elle compare votre formation avec la formation française.|Okul. Eğitiminizi Fransız eğitimiyle karşılaştırıyor.|The school. It compares your training with the French training.
B|Et si ma formation est différente ?|Peki eğitimim farklıysa?|And if my training is different?
A|Alors, vous devez suivre plus de cours et faire des stages avant le diplôme français.|O zaman Fransız diplomasından önce daha fazla ders almanız ve staj yapmanız gerekiyor.|Then you have to take more classes and do placements before getting the French diploma.
B|Ça prend combien de temps, à peu près ?|Yaklaşık ne kadar sürüyor?|Roughly how long does it take?
A|Ça dépend, mais souvent plusieurs mois. Il faut être patiente.|Duruma göre değişir ama genelde birkaç ay. Sabırlı olmak lazım.|It depends, but often several months. You have to be patient.
B|C'est long ! C'est pour ça que je pense aussi à faire une licence STAPS.|Uzunmuş! Bu yüzden bir STAPS lisansı yapmayı da düşünüyorum.|That's long! That's why I'm also thinking about doing a STAPS degree.
A|C'est une bonne idée de préparer les deux en même temps. Je vous imprime la liste des documents ?|İkisine aynı anda hazırlanmak iyi bir fikir. Size belge listesini yazdırayım mı?|It's a good idea to prepare both at the same time. Shall I print the list of documents for you?
B|Oui, s'il vous plaît. Merci beaucoup pour votre aide.|Evet, lütfen. Yardımınız için çok teşekkürler.|Yes, please. Thank you very much for your help.`),

    D("d-gite", "A2", "Réserver un gîte pour le week-end", "Hafta sonu için bir kır evi ayırtmak", "Booking a holiday cottage for the weekend", { A: "Propriétaire", B: "Esin" }, "B", `
A|Allô, gîte des Tilleuls, bonjour !|Alo, Tilleuls kır evi, merhaba!|Hello, Les Tilleuls cottage, good morning!
B|Bonjour madame. J'ai vu votre gîte sur internet. Il est libre le week-end du 15 ?|Merhaba hanımefendi. Kır evinizi internette gördüm. Ayın 15'indeki hafta sonu boş mu?|Hello, madam. I saw your cottage online. Is it free the weekend of the 15th?
A|Je regarde… Oui, du vendredi au dimanche, c'est libre. Vous seriez combien ?|Bakıyorum… Evet, cumadan pazara boş. Kaç kişi olursunuz?|Let me check… Yes, Friday to Sunday, it's free. How many of you would there be?
B|Deux personnes, mon mari et moi.|İki kişi, eşim ve ben.|Two people, my husband and me.
A|Très bien. C'est 90 euros la nuit, donc 180 euros pour deux nuits.|Çok iyi. Gecesi 90 euro, yani iki gece için 180 euro.|Very good. It's 90 euros a night, so 180 euros for two nights.
B|Le petit-déjeuner est compris ?|Kahvaltı dahil mi?|Is breakfast included?
A|Non, mais il y a une cuisine équipée. Et la boulangerie du village est à cinq minutes à pied.|Hayır, ama donanımlı bir mutfak var. Köyün fırını da yürüyerek beş dakika.|No, but there's a fully equipped kitchen. And the village bakery is a five-minute walk away.
B|Parfait. Les draps et les serviettes sont fournis ?|Mükemmel. Çarşaf ve havlu veriliyor mu?|Perfect. Are sheets and towels provided?
A|Oui, tout est fourni. Vous arriveriez à quelle heure, vendredi ?|Evet, her şey veriliyor. Cuma günü saat kaçta gelirsiniz?|Yes, everything is provided. What time would you arrive on Friday?
B|Vers 19 h, je pense. Ce n'est pas trop tard ?|19.00 gibi diye düşünüyorum. Çok geç olmaz mı?|Around 7 pm, I think. That's not too late, is it?
A|Non, pas de problème. Je vous laisserai la clé dans une boîte à clés.|Hayır, sorun değil. Anahtarı size bir anahtar kutusunda bırakırım.|No, no problem. I'll leave the key in a key box for you.
B|Super. Il y a des chemins de randonnée autour du gîte ?|Süper. Kır evinin çevresinde yürüyüş yolları var mı?|Great. Are there hiking trails around the cottage?
A|Oui, beaucoup ! Et une rivière à deux kilomètres. Il faudrait payer un acompte de 50 euros pour réserver.|Evet, çok! İki kilometre ötede bir de nehir var. Ayırtmak için 50 euro kapora ödemeniz gerekir.|Yes, lots! And a river two kilometres away. You'd need to pay a 50-euro deposit to book.
B|D'accord. Je peux payer par virement ?|Tamam. Havaleyle ödeyebilir miyim?|OK. Can I pay by bank transfer?
A|Oui. Je vous envoie mes coordonnées bancaires par e-mail. Votre nom, s'il vous plaît ?|Evet. Banka bilgilerimi size e-postayla gönderiyorum. Adınız, lütfen?|Yes. I'll send you my bank details by email. Your name, please?
B|Esin Yılmaz. Merci beaucoup, madame, à bientôt !|Esin Yılmaz. Çok teşekkürler hanımefendi, görüşmek üzere!|Esin Yılmaz. Thank you very much, madam, see you soon!`),

    D("d-recit-handball", "A2", "Raconter un match de handball", "Bir hentbol maçını anlatmak", "Telling someone about a handball match", { A: "Julien", B: "Esin" }, "B", `
A|Salut Esin ! Tu as passé un bon week-end ?|Selam Esin! Hafta sonun iyi geçti mi?|Hi Esin! Did you have a good weekend?
B|Excellent ! Samedi soir, je suis allée voir un match de handball.|Harika! Cumartesi akşamı bir hentbol maçına gittim.|Excellent! On Saturday evening, I went to see a handball match.
A|Ah oui ? C'était quel match ?|Öyle mi? Hangi maçtı?|Oh really? Which match was it?
B|L'équipe féminine de la ville contre une équipe du sud. La salle était pleine !|Şehrin kadın takımı, güneyden bir takıma karşı. Salon tıklım tıklımdı!|The town's women's team against a team from the south. The hall was full!
A|Et alors, qui a gagné ?|Eee, kim kazandı?|So, who won?
B|Nos joueuses ! 29 à 27. Mais à la mi-temps, elles perdaient de quatre buts.|Bizim oyuncular! 29'a 27. Ama devre arasında dört gol gerideydiler.|Our players! 29 to 27. But at half-time, they were four goals behind.
A|Ouah, quel retour ! Qu'est-ce qui s'est passé en deuxième mi-temps ?|Vay, ne geri dönüş! İkinci yarıda ne oldu?|Wow, what a comeback! What happened in the second half?
B|La gardienne a fait des arrêts incroyables. Et l'ailière gauche a marqué six buts.|Kaleci inanılmaz kurtarışlar yaptı. Sol kanat da altı gol attı.|The goalkeeper made incredible saves. And the left winger scored six goals.
A|Tu connais bien le handball, toi !|Sen hentbolu iyi biliyorsun!|You know handball well!
B|Oui, en Turquie, j'étais kiné dans une équipe de handball. Ça me manque un peu.|Evet, Türkiye'de bir hentbol takımında fizyoterapisttim. Biraz özlüyorum.|Yes, in Turkey, I was a physio for a handball team. I miss it a bit.
A|Je comprends. Il y a eu des blessées pendant le match ?|Anlıyorum. Maçta sakatlanan oldu mu?|I understand. Were there any injuries during the match?
B|Une joueuse est tombée sur le genou. J'ai eu peur, mais elle a rejoué dix minutes après.|Bir oyuncu dizinin üstüne düştü. Korktum ama on dakika sonra oyuna geri döndü.|A player fell on her knee. I was scared, but she played again ten minutes later.
A|Tant mieux ! La prochaine fois, je viens avec toi.|Neyse ki! Bir dahaki sefere seninle geliyorum.|Good! Next time, I'm coming with you.
B|Avec plaisir ! Le prochain match à domicile, c'est dans deux semaines.|Memnuniyetle! Bir sonraki iç saha maçı iki hafta sonra.|Gladly! The next home match is in two weeks.
A|Note-le-moi, je ne veux pas le rater !|Bana bir yere yaz, kaçırmak istemiyorum!|Write it down for me, I don't want to miss it!`),

    D("d-livre-retard", "A2", "Rendre un livre en retard", "Geciken bir kitabı iade etmek", "Returning a late library book", { A: "Bibliothécaire", B: "Esin" }, "B", `
B|Bonjour. Je viens rendre ce livre. Je suis désolée, il est en retard.|Merhaba. Bu kitabı iade etmeye geldim. Kusura bakmayın, gecikti.|Hello. I've come to return this book. I'm sorry, it's late.
A|Bonjour. Ce n'est pas grave. Je regarde… Vous deviez le rendre il y a deux semaines.|Merhaba. Önemli değil. Bakıyorum… İki hafta önce iade etmeniz gerekiyordu.|Hello. It doesn't matter. Let me check… You were supposed to return it two weeks ago.
B|Oui, je sais. J'ai oublié, et après, j'étais malade.|Evet, biliyorum. Unuttum, sonra da hastaydım.|Yes, I know. I forgot, and then I was ill.
A|J'espère que ça va mieux maintenant !|Umarım şimdi daha iyisinizdir!|I hope you're better now!
B|Oui, merci. Je dois payer une amende ?|Evet, teşekkürler. Ceza ödemem gerekiyor mu?|Yes, thanks. Do I have to pay a fine?
A|Non, ici, il n'y a pas d'amende. Mais votre carte était bloquée pendant le retard.|Hayır, burada ceza yok. Ama gecikme süresince kartınız bloke edilmişti.|No, there are no fines here. But your card was blocked while it was late.
B|Ah, c'est pour ça que je n'ai pas pu réserver un autre livre en ligne !|Ah, demek bu yüzden internetten başka bir kitap ayırtamadım!|Ah, that's why I couldn't reserve another book online!
A|Exactement. Mais maintenant, c'est débloqué.|Aynen öyle. Ama şimdi blokaj kalktı.|Exactly. But now it's unblocked.
B|Super. Est-ce que je peux emprunter ce livre de cuisine française ?|Süper. Bu Fransız mutfağı kitabını ödünç alabilir miyim?|Great. Can I borrow this French cookbook?
A|Bien sûr. Vous l'avez pour trois semaines.|Tabii. Üç hafta sizde kalabilir.|Of course. You can have it for three weeks.
B|Et si j'ai besoin de plus de temps ?|Peki daha fazla zamana ihtiyacım olursa?|And if I need more time?
A|Vous pouvez prolonger une fois, sur le site ou au téléphone.|Bir kez uzatabilirsiniz, internet sitesinden ya da telefonla.|You can renew it once, on the website or by phone.
B|Parfait. Cette fois, je vais mettre un rappel sur mon téléphone !|Mükemmel. Bu sefer telefonuma hatırlatıcı koyacağım!|Perfect. This time, I'm going to set a reminder on my phone!
A|Bonne idée ! Vous recevez aussi un e-mail trois jours avant la date.|İyi fikir! Tarihten üç gün önce bir e-posta da alıyorsunuz.|Good idea! You also get an email three days before the date.
B|Ah, je ne savais pas. Merci beaucoup, bonne journée !|Ah, bilmiyordum. Çok teşekkürler, iyi günler!|Ah, I didn't know. Thank you very much, have a nice day!`),

    D("d-reunion-equipe", "A2", "Une réunion d'équipe à la salle de sport", "Spor salonunda ekip toplantısı", "A team meeting at the gym", { A: "Sophie (responsable)", B: "Esin" }, "B", `
A|Bonjour à tous. Merci d'être venus. On commence avec l'accueil. Esin, comment ça s'est passé ce mois-ci ?|Herkese merhaba. Geldiğiniz için teşekkürler. Resepsiyonla başlayalım. Esin, bu ay nasıl geçti?|Hello everyone. Thanks for coming. Let's start with the front desk. Esin, how did this month go?
B|Plutôt bien. Nous avons eu trente nouveaux membres, surtout des étudiants.|Oldukça iyi. Otuz yeni üyemiz oldu, çoğu öğrenci.|Quite well. We had thirty new members, mostly students.
A|C'est génial ! Il y a eu des problèmes ?|Harika! Sorun oldu mu?|That's great! Were there any problems?
B|Oui, quelques-uns. Plusieurs membres se sont plaints des vestiaires. Les sèche-cheveux ne marchaient pas.|Evet, birkaç tane. Birkaç üye soyunma odalarından şikâyet etti. Saç kurutma makineleri çalışmıyordu.|Yes, a few. Several members complained about the changing rooms. The hairdryers weren't working.
A|Ah oui, je sais. Le technicien viendra lundi.|Ah evet, biliyorum. Teknisyen pazartesi gelecek.|Ah yes, I know. The technician will come on Monday.
B|Très bien. Et le soir, entre 18 h et 20 h, il y a souvent trop de monde.|Çok iyi. Bir de akşamları 18.00 ile 20.00 arası genelde çok kalabalık oluyor.|Very good. And in the evening, between 6 and 8 pm, it's often too crowded.
A|C'est vrai. Tu as une idée ?|Doğru. Bir fikrin var mı?|That's true. Do you have an idea?
B|On pourrait proposer des cours le midi ou tôt le matin. Certains membres me l'ont demandé.|Öğle saatinde ya da sabah erken dersler önerebiliriz. Bazı üyeler bunu benden istedi.|We could offer classes at lunchtime or early in the morning. Some members asked me for it.
A|Bonne idée. Je vais en parler aux coachs. Autre chose ?|İyi fikir. Antrenörlerle konuşacağım. Başka bir şey var mı?|Good idea. I'll talk to the coaches about it. Anything else?
B|Oui. Beaucoup de débutants ne s'échauffent pas et ne s'étirent pas après la séance.|Evet. Pek çok yeni başlayan ısınmıyor, antrenmandan sonra da esneme yapmıyor.|Yes. Lots of beginners don't warm up and don't stretch after their workout.
A|Tu veux dire qu'il faudrait les informer ?|Onları bilgilendirmek mi gerekir demek istiyorsun?|You mean we should inform them?
B|Oui. Je pourrais préparer une petite affiche avec des étirements simples.|Evet. Basit esneme hareketleriyle küçük bir afiş hazırlayabilirim.|Yes. I could prepare a little poster with simple stretches.
A|Avec ton expérience de kiné, c'est parfait. Tu peux me la montrer vendredi ?|Fizyoterapi deneyiminle mükemmel olur. Cuma bana gösterebilir misin?|With your physio experience, that's perfect. Can you show it to me on Friday?
B|Pas de problème, je la ferai cette semaine.|Sorun değil, bu hafta yaparım.|No problem, I'll do it this week.
A|Merci, Esin. Bon, on passe au planning des vacances.|Teşekkürler Esin. Peki, tatil planına geçelim.|Thanks, Esin. Right, let's move on to the holiday schedule.`),

    D("d-client-genou", "A2", "Un client qui a mal au genou", "Dizi ağrıyan bir müşteri", "A customer with a sore knee", { A: "Client", B: "Esin" }, "B", `
A|Excusez-moi, madame. J'ai mal au genou depuis ma séance d'hier.|Affedersiniz hanımefendi. Dünkü antrenmanımdan beri dizim ağrıyor.|Excuse me, madam. My knee has been hurting since my workout yesterday.
B|Oh, je suis désolée. Qu'est-ce que vous avez fait hier ?|Ah, çok üzüldüm. Dün ne yaptınız?|Oh, I'm sorry. What did you do yesterday?
A|Beaucoup de squats, et j'ai couru sur le tapis. Ce matin, mon genou était un peu gonflé.|Bir sürü squat yaptım, koşu bandında da koştum. Bu sabah dizim biraz şişmişti.|Lots of squats, and I ran on the treadmill. This morning, my knee was a bit swollen.
B|Vous êtes tombé ou vous avez senti une forte douleur pendant l'exercice ?|Düştünüz mü ya da egzersiz sırasında şiddetli bir ağrı hissettiniz mi?|Did you fall or feel a sharp pain during the exercise?
A|Non, je ne suis pas tombé. La douleur est venue le soir.|Hayır, düşmedim. Ağrı akşam başladı.|No, I didn't fall. The pain came in the evening.
B|D'accord. Je dois être honnête : j'étais kiné en Turquie, mais ici, je ne peux pas soigner les patients.|Tamam. Dürüst olmalıyım: Türkiye'de fizyoterapisttim ama burada hasta tedavi edemiyorum.|OK. I have to be honest: I was a physio in Turkey, but here I can't treat patients.
A|Ah bon ? Mais vous pouvez me donner un conseil ?|Öyle mi? Ama bir tavsiye verebilir misiniz?|Oh really? But can you give me some advice?
B|Un conseil simple, oui : aujourd'hui, ne faites pas d'exercices pour les jambes.|Basit bir tavsiye, evet: bugün bacak egzersizi yapmayın.|Some simple advice, yes: today, don't do any leg exercises.
A|Même pas un peu de vélo ?|Biraz bisiklet bile mi?|Not even a bit of cycling?
B|Non, il vaut mieux vous reposer. Si votre genou est encore gonflé demain, allez voir un médecin.|Hayır, dinlenmeniz daha iyi olur. Diziniz yarın hâlâ şişse bir doktora gidin.|No, it's better to rest. If your knee is still swollen tomorrow, go and see a doctor.
A|Un médecin ? C'est grave, vous pensez ?|Doktor mu? Ciddi mi sizce?|A doctor? Do you think it's serious?
B|Je ne sais pas, et c'est pour ça qu'il faut un examen. Le médecin pourra vous envoyer chez un kiné si c'est nécessaire.|Bilmiyorum, işte bu yüzden muayene gerekiyor. Gerekirse doktor sizi bir fizyoterapiste yönlendirebilir.|I don't know, and that's why you need an examination. The doctor can send you to a physio if necessary.
A|D'accord. Je ne voulais pas exagérer, mais vous avez raison.|Tamam. Abartmak istemiyordum ama haklısınız.|OK. I didn't want to make a fuss, but you're right.
B|C'est normal de demander. Et après, demandez à un de nos coachs d'adapter votre programme.|Sormak çok normal. Sonra da antrenörlerimizden birinden programınızı uyarlamasını isteyin.|It's normal to ask. And afterwards, ask one of our coaches to adapt your programme.
A|Merci beaucoup, madame. Vous êtes très gentille.|Çok teşekkürler hanımefendi. Çok naziksiniz.|Thank you very much, madam. You're very kind.
B|Je vous en prie. Prenez soin de vous !|Rica ederim. Kendinize iyi bakın!|You're welcome. Take care of yourself!`),

    D("d-annuler-rdv", "A2", "Appeler pour annuler un rendez-vous", "Bir randevuyu iptal etmek için aramak", "Calling to cancel an appointment", { A: "Secrétaire", B: "Esin" }, "B", `
A|Cabinet du docteur Petit, bonjour.|Doktor Petit'nin muayenehanesi, merhaba.|Dr Petit's practice, good morning.
B|Bonjour madame. J'ai un rendez-vous demain à 10 h 30, mais je ne pourrai pas venir.|Merhaba hanımefendi. Yarın saat 10.30'da randevum var ama gelemeyeceğim.|Hello, madam. I have an appointment tomorrow at 10:30, but I won't be able to come.
A|D'accord. C'est à quel nom ?|Tamam. Kimin adına?|OK. What name is it under?
B|Yılmaz, Esin Yılmaz.|Yılmaz, Esin Yılmaz.|Yılmaz, Esin Yılmaz.
A|Oui, je vous vois. Vous voulez annuler ou déplacer le rendez-vous ?|Evet, görüyorum. Randevuyu iptal mi etmek istiyorsunuz, ertelemek mi?|Yes, I can see you. Do you want to cancel or move the appointment?
B|Je préférerais le déplacer. Ma responsable m'a demandé de travailler demain matin.|Ertelemeyi tercih ederim. Müdürüm yarın sabah çalışmamı istedi.|I'd rather move it. My manager asked me to work tomorrow morning.
A|Je comprends. Merci d'avoir appelé, beaucoup de patients oublient de prévenir.|Anlıyorum. Aradığınız için teşekkürler, birçok hasta haber vermeyi unutuyor.|I understand. Thanks for calling, lots of patients forget to let us know.
B|C'est normal. Vous avez un créneau la semaine prochaine ?|Bu çok normal. Gelecek hafta boş bir saatiniz var mı?|That's only normal. Do you have a slot next week?
A|Mardi à 9 h, ou jeudi à 17 h 15.|Salı saat 9.00 ya da perşembe saat 17.15.|Tuesday at 9, or Thursday at 5:15 pm.
B|Mardi, je travaille le matin. Jeudi à 17 h 15, ça me va très bien.|Salı sabahı çalışıyorum. Perşembe 17.15 bana çok uyar.|On Tuesday I work in the morning. Thursday at 5:15 suits me very well.
A|C'est noté : jeudi 17 h 15. Vous recevrez un SMS de confirmation.|Not ettim: perşembe 17.15. Bir onay SMS'i alacaksınız.|Noted: Thursday at 5:15. You'll get a confirmation text.
B|Parfait. Je dois apporter quelque chose ?|Mükemmel. Bir şey getirmem gerekiyor mu?|Perfect. Do I need to bring anything?
A|Votre carte Vitale et vos anciens résultats, si vous en avez.|Carte Vitale'iniz ve varsa eski sonuçlarınız.|Your Carte Vitale and your old results, if you have any.
B|D'accord. Merci beaucoup, et excusez-moi pour le changement.|Tamam. Çok teşekkürler, değişiklik için de kusura bakmayın.|OK. Thank you very much, and sorry for the change.
A|Ce n'est rien. Bonne journée, madame Yılmaz.|Önemli değil. İyi günler Yılmaz Hanım.|It's nothing. Have a nice day, Mrs Yılmaz.`),

    D("d-veterinaire", "A2", "Chez le vétérinaire avec le chat d'une amie", "Bir arkadaşın kedisiyle veterinerde", "At the vet's with a friend's cat", { A: "Vétérinaire", B: "Esin" }, "B", `
A|Bonjour madame. Alors, qui est ce beau chat ?|Merhaba hanımefendi. Bu güzel kedi kim bakalım?|Hello, madam. So, who's this handsome cat?
B|Bonjour. C'est Caramel. Ce n'est pas mon chat, c'est le chat de mon amie Inès. Elle est en vacances.|Merhaba. Bu Caramel. Benim kedim değil, arkadaşım Inès'in kedisi. O tatilde.|Hello. This is Caramel. He's not my cat, he's my friend Inès's cat. She's on holiday.
A|Je vois. Qu'est-ce qui ne va pas ?|Anlıyorum. Neyi var?|I see. What's wrong?
B|Depuis deux jours, il ne mange presque rien. Et hier soir, il a vomi.|İki gündür neredeyse hiçbir şey yemiyor. Dün akşam da kustu.|For two days, he's been eating almost nothing. And last night, he was sick.
A|Il boit de l'eau normalement ?|Normal şekilde su içiyor mu?|Is he drinking water normally?
B|Oui, il boit. Mais il dort beaucoup et il se cache sous le lit.|Evet, içiyor. Ama çok uyuyor ve yatağın altına saklanıyor.|Yes, he's drinking. But he sleeps a lot and he hides under the bed.
A|Il est chez vous depuis quand ?|Ne zamandan beri sizde?|Since when has he been at your place?
B|Depuis samedi. Inès l'a amené chez moi avant de partir.|Cumartesiden beri. Inès gitmeden önce onu bana getirdi.|Since Saturday. Inès brought him to my place before she left.
A|D'accord. Je vais l'examiner. Tenez-le doucement, s'il vous plaît.|Tamam. Onu muayene edeceğim. Lütfen nazikçe tutun.|OK. I'm going to examine him. Hold him gently, please.
B|Oui. Il n'aime pas beaucoup ça, le pauvre !|Tamam. Pek hoşuna gitmiyor, zavallı!|Yes. He doesn't like it much, poor thing!
A|Son ventre est souple, il n'a pas de fièvre. Je pense que c'est le stress. Les chats n'aiment pas changer de maison.|Karnı yumuşak, ateşi yok. Bence stres. Kediler ev değiştirmeyi sevmez.|His tummy is soft, he doesn't have a temperature. I think it's stress. Cats don't like changing homes.
B|Ah, je comprends. Qu'est-ce que je peux faire ?|Ah, anlıyorum. Ne yapabilirim?|Ah, I understand. What can I do?
A|Laissez-le tranquille, donnez-lui sa nourriture habituelle et un endroit calme. S'il ne mange toujours pas dans deux jours, revenez.|Onu rahat bırakın, alışık olduğu mamayı ve sakin bir yer verin. İki gün içinde hâlâ yemezse tekrar gelin.|Leave him in peace, give him his usual food and a quiet place. If he still isn't eating in two days, come back.
B|D'accord. Je vais envoyer un message à Inès pour la rassurer.|Tamam. Inès'e onu rahatlatmak için bir mesaj göndereceğim.|OK. I'm going to send Inès a message to reassure her.
A|Bonne idée. Ça fait 45 euros pour la consultation.|İyi fikir. Muayene 45 euro tutuyor.|Good idea. That's 45 euros for the consultation.
B|Voilà. Merci beaucoup, docteur. Allez, Caramel, on rentre !|Buyurun. Çok teşekkürler doktor. Hadi Caramel, eve dönüyoruz!|Here you are. Thank you very much, doctor. Come on, Caramel, let's go home!`)
  );
})();
