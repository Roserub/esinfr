/* Real-life dialogues written for this site, played line by line with French audio.
   Lines: "A|français|Türkçe|English" or "B|…". In role-play, the learner says the "me" side. */
(function () {
  const L = s => s.trim().split("\n").map(l => { const [who, fr, tr, en] = l.split("|").map(x => x.trim()); return { who, fr, tr, en }; });
  const D = (id, level, fr, tr, en, roles, me, lines) => ({ id, level, t: { fr, tr, en }, roles, me, lines: L(lines) });

  window.DIALOGUES = [
    D("d-boulangerie", "A1", "À la boulangerie", "Fırında", "At the bakery", { A: "Boulangère", B: "Esin" }, "B", `
A|Bonjour madame !|Merhaba hanımefendi!|Hello, madam!
B|Bonjour ! Une baguette, s'il vous plaît.|Merhaba! Bir baget, lütfen.|Hello! A baguette, please.
A|Bien cuite ou pas trop cuite ?|İyi pişmiş mi, az pişmiş mi?|Well baked or not too baked?
B|Pas trop cuite, s'il vous plaît. Et deux croissants.|Az pişmiş, lütfen. Bir de iki kruvasan.|Not too baked, please. And two croissants.
A|Avec ceci ?|Başka bir şey?|Anything else?
B|C'est tout, merci. C'est combien ?|Bu kadar, teşekkürler. Ne kadar?|That's all, thanks. How much is it?
A|Trois euros dix.|Üç euro on.|Three euros ten.
B|Je peux payer par carte ?|Kartla ödeyebilir miyim?|Can I pay by card?
A|Bien sûr. Voilà votre ticket. Bonne journée !|Tabii. Fişiniz. İyi günler!|Of course. Here's your receipt. Have a nice day!
B|Merci, vous aussi. Au revoir !|Teşekkürler, size de. Hoşça kalın!|Thanks, you too. Goodbye!`),

    D("d-presentation", "A1", "Se présenter à une voisine", "Bir komşuyla tanışmak", "Meeting a neighbour", { A: "Claire", B: "Esin" }, "B", `
A|Bonjour ! Vous êtes la nouvelle voisine ?|Merhaba! Yeni komşu siz misiniz?|Hello! Are you the new neighbour?
B|Oui, bonjour ! Je m'appelle Esin. J'habite au deuxième étage.|Evet, merhaba! Adım Esin. İkinci katta oturuyorum.|Yes, hello! My name is Esin. I live on the second floor.
A|Enchantée, moi c'est Claire. Vous venez d'où ?|Memnun oldum, ben Claire. Nerelisiniz?|Nice to meet you, I'm Claire. Where are you from?
B|Je viens de Turquie. J'apprends le français.|Türkiye'den geliyorum. Fransızca öğreniyorum.|I'm from Turkey. I'm learning French.
A|Vous parlez déjà bien ! Vous travaillez ici ?|Şimdiden iyi konuşuyorsunuz! Burada mı çalışıyorsunuz?|You already speak well! Do you work here?
B|Pas encore. Je suis kinésithérapeute, mais mon diplôme est turc.|Henüz değil. Fizyoterapistim ama diplomam Türk.|Not yet. I'm a physiotherapist, but my degree is Turkish.
A|Ah, c'est super ! Si vous avez besoin de quelque chose, je suis au premier.|Ah, harika! Bir şeye ihtiyacınız olursa ben birinci kattayım.|Oh, great! If you need anything, I'm on the first floor.
B|Merci beaucoup, c'est très gentil !|Çok teşekkürler, çok naziksiniz!|Thank you very much, that's very kind!`),

    D("d-pharmacie", "A2", "À la pharmacie", "Eczanede", "At the pharmacy", { A: "Pharmacien", B: "Esin" }, "B", `
A|Bonjour, je peux vous aider ?|Merhaba, yardımcı olabilir miyim?|Hello, can I help you?
B|Bonjour. J'ai mal à la tête et un peu de fièvre depuis hier.|Merhaba. Dünden beri başım ağrıyor ve biraz ateşim var.|Hello. I've had a headache and a bit of fever since yesterday.
A|Vous avez d'autres symptômes ? Mal à la gorge, toux ?|Başka belirtiniz var mı? Boğaz ağrısı, öksürük?|Any other symptoms? Sore throat, cough?
B|Non, seulement la tête. Et je suis très fatiguée.|Hayır, sadece baş. Bir de çok yorgunum.|No, just my head. And I'm very tired.
A|Vous êtes allergique à un médicament ?|Herhangi bir ilaca alerjiniz var mı?|Are you allergic to any medicine?
B|Non, pas à ma connaissance.|Hayır, bildiğim kadarıyla yok.|No, not that I know of.
A|Je vous conseille du paracétamol : un comprimé toutes les six heures, pas plus de trois par jour.|Parasetamol öneririm: altı saatte bir tablet, günde üçten fazla değil.|I recommend paracetamol: one tablet every six hours, no more than three a day.
B|D'accord. Et si ça ne passe pas ?|Tamam. Geçmezse ne yapayım?|OK. And if it doesn't go away?
A|Si la fièvre dure plus de trois jours, consultez un médecin.|Ateş üç günden fazla sürerse doktora gidin.|If the fever lasts more than three days, see a doctor.
B|Merci beaucoup. Je vous dois combien ?|Çok teşekkürler. Borcum ne kadar?|Thank you very much. How much do I owe you?`),

    D("d-rdv", "A2", "Prendre rendez-vous par téléphone", "Telefonla randevu almak", "Booking an appointment by phone", { A: "Secrétaire", B: "Esin" }, "B", `
A|Cabinet médical du docteur Martin, bonjour.|Doktor Martin muayenehanesi, merhaba.|Dr Martin's practice, hello.
B|Bonjour madame. Je voudrais prendre rendez-vous avec le docteur Martin, s'il vous plaît.|Merhaba hanımefendi. Doktor Martin'den randevu almak istiyorum, lütfen.|Hello, madam. I'd like to make an appointment with Dr Martin, please.
A|C'est pour une première consultation ?|İlk muayene mi?|Is it for a first appointment?
B|Oui. J'aimerais aussi le choisir comme médecin traitant.|Evet. Onu aile hekimim olarak da seçmek istiyorum.|Yes. I'd also like to choose him as my GP.
A|Très bien. J'ai un créneau jeudi à 14 h 30 ou vendredi à 9 h.|Çok iyi. Perşembe 14.30'da veya cuma 9'da boş yer var.|Very good. I have a slot on Thursday at 2.30 pm or Friday at 9 am.
B|Jeudi à 14 h 30, c'est parfait.|Perşembe 14.30 mükemmel.|Thursday at 2.30 is perfect.
A|C'est à quel nom ?|Kimin adına?|What name is it under?
B|Esin, E-S-I-N. Vous voulez que j'épelle mon nom de famille ?|Esin, E-S-I-N. Soyadımı heceleyeyim mi?|Esin, E-S-I-N. Do you want me to spell my surname?
A|Oui, s'il vous plaît. Et n'oubliez pas votre carte Vitale.|Evet, lütfen. Carte Vitale'inizi unutmayın.|Yes, please. And don't forget your Carte Vitale.
B|D'accord, merci. À jeudi !|Tamam, teşekkürler. Perşembe görüşürüz!|OK, thank you. See you on Thursday!`),

    D("d-banque", "A2", "Ouvrir un compte en banque", "Banka hesabı açmak", "Opening a bank account", { A: "Conseiller", B: "Esin" }, "B", `
A|Bonjour, asseyez-vous. Qu'est-ce que je peux faire pour vous ?|Merhaba, oturun. Sizin için ne yapabilirim?|Hello, have a seat. What can I do for you?
B|Je voudrais ouvrir un compte courant.|Vadesiz hesap açmak istiyorum.|I'd like to open a current account.
A|Très bien. Vous avez une pièce d'identité et un justificatif de domicile ?|Çok iyi. Kimliğiniz ve ikametgâh belgeniz var mı?|Very good. Do you have ID and proof of address?
B|Oui, voici mon titre de séjour et une facture d'électricité.|Evet, işte oturma iznim ve bir elektrik faturası.|Yes, here's my residence permit and an electricity bill.
A|Parfait. Vous voulez une carte bancaire classique ?|Mükemmel. Klasik bir banka kartı ister misiniz?|Perfect. Would you like a standard bank card?
B|Oui. Il y a des frais tous les mois ?|Evet. Her ay ücret var mı?|Yes. Are there monthly fees?
A|Deux euros par mois pour la carte. Le reste est gratuit.|Kart için ayda iki euro. Gerisi ücretsiz.|Two euros a month for the card. The rest is free.
B|D'accord. Je pourrai avoir mon RIB aujourd'hui ?|Tamam. RIB'imi bugün alabilir miyim?|OK. Can I get my bank details slip today?
A|Oui, je vous l'imprime tout de suite. Vous recevrez la carte dans une semaine.|Evet, hemen yazdırıyorum. Kartınız bir haftada gelir.|Yes, I'll print it right away. You'll get the card within a week.`),

    D("d-etatdeslieux", "B1", "L'état des lieux d'entrée", "Eve giriş tespiti", "The move-in inspection", { A: "Propriétaire", B: "Esin" }, "B", `
A|Bon, on commence par le salon. Comme vous voyez, les murs ont été repeints.|Pekâlâ, salondan başlıyoruz. Gördüğünüz gibi duvarlar yeniden boyandı.|Right, we'll start with the living room. As you can see, the walls have been repainted.
B|Oui, c'est très propre. Mais il y a une petite tache au plafond, là.|Evet, çok temiz. Ama tavanda, şurada küçük bir leke var.|Yes, it's very clean. But there's a small stain on the ceiling, there.
A|Ah oui, c'est une ancienne fuite. C'est réparé, mais on peut le noter.|Ah evet, eski bir sızıntı. Tamir edildi ama not edebiliriz.|Oh yes, it's an old leak. It's been fixed, but we can write it down.
B|Je préfère, oui. Et dans la cuisine, la plaque de cuisson fonctionne bien ?|Tercih ederim, evet. Mutfakta ocak düzgün çalışıyor mu?|I'd rather, yes. And in the kitchen, does the hob work well?
A|Oui, tout fonctionne. Le four est neuf.|Evet, her şey çalışıyor. Fırın yeni.|Yes, everything works. The oven is new.
B|Je vois une rayure sur le plan de travail. On peut l'ajouter aussi ?|Tezgâhta bir çizik görüyorum. Onu da ekleyebilir miyiz?|I can see a scratch on the worktop. Can we add it too?
A|Bien sûr. Vous avez raison, c'est pour éviter les problèmes à votre départ.|Tabii. Haklısınız, ayrılırken sorun çıkmasın diye.|Of course. You're right, it's to avoid problems when you leave.
B|Exactement. Et pour la caution, elle sera rendue dans quel délai ?|Aynen. Depozito ne kadar sürede iade edilecek?|Exactly. And the deposit, how long until it's returned?
A|Dans un mois si l'état des lieux de sortie est conforme, deux mois sinon.|Çıkış tespiti uygunsa bir ayda, değilse iki ayda.|Within one month if the move-out inspection matches, two months otherwise.
B|Très bien. Je signe ici ?|Çok iyi. Buraya mı imza atıyorum?|Very good. Do I sign here?`),

    D("d-kine", "B1", "En séance : vous êtes la kiné", "Seansta: fizyoterapist sizsiniz", "In session: you are the physio", { A: "Patient", B: "Esin (kiné)" }, "B", `
B|Bonjour monsieur, installez-vous. Comment allez-vous depuis la dernière séance ?|Merhaba beyefendi, yerleşin. Son seanstan beri nasılsınız?|Hello sir, make yourself comfortable. How have you been since the last session?
A|Mieux, mais j'ai encore mal en montant les escaliers.|Daha iyi ama merdiven çıkarken hâlâ ağrım var.|Better, but it still hurts going up the stairs.
B|D'accord. De 0 à 10, vous avez mal à combien ?|Tamam. 0'dan 10'a ağrınız kaç?|OK. From 0 to 10, how much does it hurt?
A|Je dirais 4. Le matin, le genou est un peu raide.|4 derim. Sabahları diz biraz tutuk oluyor.|I'd say 4. In the morning the knee is a bit stiff.
B|Allongez-vous sur le dos, s'il vous plaît. Je vais vérifier la flexion.|Sırt üstü uzanın, lütfen. Fleksiyonu kontrol edeceğim.|Lie on your back, please. I'm going to check the flexion.
A|Comme ça ?|Böyle mi?|Like this?
B|Parfait. Pliez doucement le genou… Dites-moi si ça fait mal.|Mükemmel. Dizinizi yavaşça bükün… Acırsa söyleyin.|Perfect. Bend your knee slowly… Tell me if it hurts.
A|Là, ça tire un peu.|Şurada biraz çekiyor.|There, it pulls a bit.
B|C'est normal. Vous avez gagné dix degrés depuis la semaine dernière, c'est très bien.|Normal. Geçen haftadan beri on derece kazandınız, çok iyi.|That's normal. You've gained ten degrees since last week, that's very good.
A|Super ! Je dois continuer les exercices à la maison ?|Harika! Evde egzersizlere devam etmeli miyim?|Great! Should I keep doing the exercises at home?
B|Oui, deux fois par jour. Et on ajoute un exercice de renforcement aujourd'hui.|Evet, günde iki kez. Bugün bir de güçlendirme egzersizi ekliyoruz.|Yes, twice a day. And we're adding a strengthening exercise today.`),

    D("d-entrainement", "B1", "Avant l'entraînement de handball", "Hentbol antrenmanından önce", "Before handball training", { A: "Entraîneur", B: "Esin" }, "B", `
A|Esin, tu peux t'occuper de l'échauffement aujourd'hui ?|Esin, bugün ısınmayı sen yönetebilir misin?|Esin, can you take care of the warm-up today?
B|Oui, bien sûr. On commence par dix minutes de course légère.|Evet, tabii. On dakika hafif koşuyla başlıyoruz.|Yes, of course. We'll start with ten minutes of light running.
A|Ensuite ?|Sonra?|Then?
B|Des gammes athlétiques, puis de la mobilité des épaules et des hanches.|Atletik drill'ler, sonra omuz ve kalça mobilitesi.|Running drills, then shoulder and hip mobility.
A|N'oublie pas la prévention des genoux, on a eu deux blessures ce mois-ci.|Diz önleme çalışmasını unutma, bu ay iki sakatlık yaşadık.|Don't forget knee injury prevention, we've had two injuries this month.
B|Justement, je vais ajouter des réceptions de saut et du travail d'équilibre.|Tam da bu yüzden sıçrama inişleri ve denge çalışması ekleyeceğim.|Exactly, I'm going to add jump landings and balance work.
A|Parfait. Et Lucas se plaint encore de son épaule.|Mükemmel. Lucas hâlâ omzundan şikâyet ediyor.|Perfect. And Lucas is still complaining about his shoulder.
B|Je vais le voir à part. S'il a mal au tir, il vaut mieux qu'il évite les tirs aujourd'hui.|Onu ayrıca göreceğim. Şut atarken ağrısı varsa bugün şut atmaması daha iyi.|I'll see him separately. If it hurts when he shoots, he'd better avoid shooting today.`),

    D("d-scolarite", "B2", "Au service de la scolarité", "Öğrenci işlerinde", "At the student office", { A: "Agente", B: "Esin" }, "B", `
A|Bonjour, c'est pour quoi ?|Merhaba, ne için gelmiştiniz?|Hello, what is it about?
B|Bonjour. Je suis admise en licence STAPS et je voudrais finaliser mon inscription administrative.|Merhaba. STAPS lisansına kabul edildim ve kayıt işlemlerimi tamamlamak istiyorum.|Hello. I've been admitted to the STAPS degree and I'd like to finalise my enrolment.
A|Vous avez payé la CVEC ?|CVEC'yi ödediniz mi?|Have you paid the CVEC (student life fee)?
B|Oui, voici l'attestation. En revanche, je ne sais pas si je dois fournir la traduction de mon diplôme.|Evet, belgesi burada. Ama diplomamın çevirisini vermem gerekiyor mu bilmiyorum.|Yes, here's the certificate. However, I don't know if I need to provide the translation of my diploma.
A|Pour un diplôme étranger, il faut une traduction par un traducteur assermenté.|Yabancı diploma için yeminli tercüman çevirisi gerekiyor.|For a foreign diploma, you need a translation by a sworn translator.
B|D'accord. Et est-ce que je peux demander une validation d'acquis pour certains cours ? J'ai déjà un diplôme en physiothérapie.|Tamam. Bazı dersler için muafiyet isteyebilir miyim? Zaten fizyoterapi diplomam var.|OK. And can I apply to have some courses validated? I already have a degree in physiotherapy.
A|C'est possible. Il faut faire une demande auprès du responsable pédagogique, avec vos relevés de notes et les programmes des cours.|Mümkün. Not dökümünüz ve ders içerikleriyle birlikte eğitim sorumlusuna başvurmanız gerekiyor.|It's possible. You need to apply to the head of the programme, with your transcripts and course syllabi.
B|Il y a une date limite ?|Bir son tarih var mı?|Is there a deadline?
A|Avant la fin septembre, en général. Je vous conseille de lui écrire dès aujourd'hui.|Genelde eylül sonundan önce. Bugünden yazmanızı öneririm.|Before the end of September, usually. I'd advise you to write to them today.
B|Merci, c'est très clair. Je m'en occupe tout de suite.|Teşekkürler, çok açık. Hemen ilgileniyorum.|Thank you, that's very clear. I'll deal with it right away.`),

    D("d-entretien", "B2", "L'entretien : les questions difficiles", "Mülakat: zor sorular", "The interview: tricky questions", { A: "Recruteur", B: "Esin" }, "B", `
A|Votre diplôme n'est pas encore reconnu en France. Comment comptez-vous gérer cette situation ?|Diplomanız henüz Fransa'da tanınmıyor. Bu durumu nasıl yönetmeyi düşünüyorsunuz?|Your degree isn't recognised in France yet. How do you plan to handle that?
B|J'ai déjà déposé un dossier de demande d'autorisation d'exercice. En attendant, je peux occuper un poste d'assistante et mettre mon expérience au service de l'équipe.|Çalışma izni başvuru dosyamı verdim bile. Bu arada asistan olarak çalışabilir ve deneyimimi ekibin hizmetine sunabilirim.|I've already filed an application for authorisation to practise. In the meantime, I can work as an assistant and put my experience at the team's service.
A|Quel est votre principal point faible ?|En büyük zayıf yönünüz nedir?|What's your main weakness?
B|Mon français professionnel n'est pas encore parfait, surtout à l'écrit. C'est pourquoi je suis des cours et je relis systématiquement mes comptes rendus.|Mesleki Fransızcam henüz mükemmel değil, özellikle yazıda. Bu yüzden ders alıyorum ve raporlarımı her zaman tekrar okuyorum.|My professional French isn't perfect yet, especially in writing. That's why I take classes and always proofread my reports.
A|Racontez-moi une situation difficile avec un sportif.|Bir sporcuyla yaşadığınız zor bir durumu anlatın.|Tell me about a difficult situation with an athlete.
B|Une joueuse voulait reprendre la compétition trop tôt après une entorse. J'ai pris le temps de lui expliquer les tests, et nous avons fixé ensemble des objectifs. Elle a repris deux semaines plus tard, sans récidive.|Bir oyuncu burkulmadan sonra müsabakaya çok erken dönmek istiyordu. Testleri ona açıklamaya zaman ayırdım ve hedefleri birlikte belirledik. İki hafta sonra döndü, tekrar sakatlanmadı.|A player wanted to return to competition too soon after a sprain. I took the time to explain the tests, and we set goals together. She returned two weeks later, with no recurrence.
A|Très bien. Quelles sont vos prétentions salariales ?|Çok iyi. Maaş beklentiniz nedir?|Very good. What are your salary expectations?
B|Je me base sur la grille de la convention collective pour ce poste, mais je suis ouverte à la discussion.|Bu pozisyon için toplu sözleşme skalasını esas alıyorum ama görüşmeye açığım.|I'm going by the collective agreement scale for this position, but I'm open to discussion.`)
  ];
})();
