/* More real-life dialogues (A2), played line by line with French audio.
   Lines: "A|français|Türkçe|English" or "B|…". In role-play, the learner says the "me" side. */
(function () {
  const L = s => s.trim().split("\n").map(l => { const [who, fr, tr, en] = l.split("|").map(x => x.trim()); return { who, fr, tr, en }; });
  const D = (id, level, fr, tr, en, roles, me, lines) => ({ id, level, t: { fr, tr, en }, roles, me, lines: L(lines) });

  window.DIALOGUES = window.DIALOGUES || [];
  window.DIALOGUES.push(
    D("d-kine-dos", "A2", "Chez le kiné : un mal de dos", "Fizyoterapistte: bel ağrısı", "At the physio: back pain", { A: "Kiné", B: "Esin" }, "B", `
A|Bonjour, madame Yılmaz. Qu'est-ce qui vous amène ?|Merhaba Yılmaz Hanım. Sizi buraya ne getirdi?|Hello, Mrs Yılmaz. What brings you here?
B|J'ai mal au bas du dos depuis dix jours. Mon médecin m'a prescrit dix séances.|On gündür belimin alt kısmı ağrıyor. Doktorum on seans yazdı.|I've had pain in my lower back for ten days. My doctor prescribed ten sessions.
A|D'accord. Comment est-ce que c'est arrivé ?|Peki. Nasıl oldu?|OK. How did it happen?
B|Au travail, j'ai porté des cartons très lourds. Le lendemain, je ne pouvais plus me pencher.|İşte çok ağır koliler taşıdım. Ertesi gün artık öne eğilemiyordum.|At work I carried some very heavy boxes. The next day I couldn't bend forward any more.
A|La douleur descend dans la jambe ?|Ağrı bacağınıza iniyor mu?|Does the pain go down into your leg?
B|Non, elle reste dans le dos. Et elle est moins forte qu'avant.|Hayır, belde kalıyor. Ayrıca eskisinden daha hafif.|No, it stays in my back. And it's not as strong as before.
A|C'est une bonne nouvelle. Vous faites du sport ?|Bu iyi bir haber. Spor yapıyor musunuz?|That's good news. Do you do any sport?
B|Avant, je courais trois fois par semaine. Mais depuis dix jours, je ne fais plus rien.|Eskiden haftada üç kez koşuyordum. Ama on gündür hiçbir şey yapmıyorum.|I used to run three times a week. But for ten days now I haven't done anything.
A|Il ne faut pas rester immobile. Le mouvement, c'est le meilleur médicament !|Hareketsiz kalmamak lazım. Hareket en iyi ilaçtır!|You mustn't stay still. Movement is the best medicine!
B|Je sais ! En fait, j'étais kiné en Turquie. Mais quand c'est mon dos, j'oublie tout !|Biliyorum! Aslında Türkiye'de fizyoterapisttim. Ama konu kendi belim olunca her şeyi unutuyorum!|I know! Actually, I was a physio in Turkey. But when it's my own back, I forget everything!
A|Ha ha, c'est souvent comme ça ! Alors, on va commencer par quelques exercices doux.|Ha ha, genelde böyle olur! O zaman birkaç hafif egzersizle başlayacağız.|Ha ha, it's often like that! So, we'll start with a few gentle exercises.
B|D'accord. Quand est-ce que je pourrai recommencer à courir ?|Tamam. Ne zaman yeniden koşmaya başlayabileceğim?|OK. When will I be able to start running again?
A|Si tout va bien, dans deux semaines. Mais d'abord, vous marcherez trente minutes par jour.|Her şey yolunda giderse iki hafta sonra. Ama önce her gün otuz dakika yürüyeceksiniz.|If all goes well, in two weeks. But first, you'll walk thirty minutes a day.
B|Très bien. Et au travail, comment est-ce que je dois porter les cartons ?|Çok iyi. Peki işte kolileri nasıl taşımalıyım?|Very good. And at work, how should I carry the boxes?
A|Pliez les genoux, gardez le dos droit et portez le carton près du corps. Et demandez de l'aide !|Dizlerinizi bükün, sırtınızı dik tutun ve koliyi vücudunuza yakın taşıyın. Bir de yardım isteyin!|Bend your knees, keep your back straight and carry the box close to your body. And ask for help!`),

    D("d-urgences", "A2", "Aux urgences : une entorse", "Acil serviste: burkulma", "At A&E: a sprained ankle", { A: "Médecin", B: "Esin" }, "B", `
A|Bonjour, madame. Je suis le docteur Lambert. Qu'est-ce qui s'est passé ?|Merhaba hanımefendi. Ben Doktor Lambert. Ne oldu?|Hello, madam. I'm Doctor Lambert. What happened?
B|Je suis tombée dans l'escalier ce matin. Je me suis tordu la cheville gauche.|Bu sabah merdivende düştüm. Sol ayak bileğimi burktum.|I fell on the stairs this morning. I twisted my left ankle.
A|Vous avez entendu un « crac » ?|"Krak" diye bir ses duydunuz mu?|Did you hear a "crack"?
B|Non, mais j'ai eu très mal tout de suite. Et maintenant, ma cheville est gonflée.|Hayır, ama hemen çok canım yandı. Şimdi de bileğim şişti.|No, but it hurt a lot straight away. And now my ankle is swollen.
A|Je vais regarder. Ça vous fait mal ici ? Et là ?|Bir bakayım. Burası acıyor mu? Ya şurası?|Let me have a look. Does it hurt here? And there?
B|Aïe ! Oui, là, sur le côté extérieur.|Ay! Evet, şurası, dış tarafı.|Ouch! Yes, there, on the outer side.
A|On va faire une radio pour vérifier qu'il n'y a pas de fracture.|Kırık olmadığından emin olmak için röntgen çekeceğiz.|We'll do an X-ray to check there's no fracture.
B|D'accord. Et si ce n'est pas cassé ?|Tamam. Peki kırık yoksa?|OK. And if it isn't broken?
A|Alors, c'est sûrement une entorse… Voilà la radio. Bonne nouvelle : ce n'est pas cassé. C'est une entorse légère.|O zaman büyük ihtimalle burkulmadır… İşte röntgen. İyi haber: kırık yok. Hafif bir burkulma.|Then it's probably a sprain… Here's the X-ray. Good news: it isn't broken. It's a mild sprain.
B|Ouf ! Je suis soulagée. Qu'est-ce que je dois faire ?|Oh be! İçim rahatladı. Ne yapmam gerekiyor?|Phew! I'm relieved. What should I do?
A|Mettez de la glace trois fois par jour et gardez le pied surélevé. Je vous donne aussi une attelle.|Günde üç kez buz koyun ve ayağınızı yüksekte tutun. Size bir de atel veriyorum.|Put ice on it three times a day and keep your foot up. I'm also giving you an ankle brace.
B|Je pourrai aller travailler demain ? Je suis debout toute la journée.|Yarın işe gidebilecek miyim? Bütün gün ayaktayım.|Will I be able to go to work tomorrow? I'm on my feet all day.
A|Non, je vous fais un arrêt de travail de cinq jours. Et prenez du paracétamol si vous avez mal.|Hayır, size beş günlük rapor yazıyorum. Ağrınız olursa parasetamol alın.|No, I'm giving you a five-day sick note. And take paracetamol if it hurts.
B|Merci, docteur. Et après, je pourrai faire de la rééducation chez un kiné ?|Teşekkürler doktor. Sonra bir fizyoterapistte rehabilitasyon yapabilir miyim?|Thank you, doctor. And afterwards, could I do some rehab with a physio?
A|Oui, c'est une très bonne idée. Je vous fais une ordonnance pour dix séances.|Evet, çok iyi bir fikir. Size on seanslık bir reçete yazıyorum.|Yes, that's a very good idea. I'll write you a prescription for ten sessions.`),

    D("d-staps", "A2", "Se renseigner sur la licence STAPS", "STAPS lisans programı hakkında bilgi almak", "Asking about a sports science degree", { A: "Secrétaire", B: "Esin" }, "B", `
B|Bonjour. Je voudrais des informations sur la licence STAPS, s'il vous plaît.|Merhaba. STAPS lisans programı hakkında bilgi almak istiyorum, lütfen.|Hello. I'd like some information about the STAPS (sports science) degree, please.
A|Bien sûr. Vous avez déjà un diplôme ?|Tabii. Daha önce aldığınız bir diploma var mı?|Of course. Do you already have a degree?
B|Oui, j'ai un diplôme de kinésithérapeute de Turquie, mais il n'est pas reconnu en France.|Evet, Türkiye'den fizyoterapi diplomam var ama Fransa'da tanınmıyor.|Yes, I have a physiotherapy degree from Turkey, but it isn't recognised in France.
A|Je comprends. Vous pourriez peut-être entrer directement en deuxième année. Une commission étudiera votre dossier.|Anlıyorum. Belki doğrudan ikinci sınıfa girebilirsiniz. Bir komisyon dosyanızı inceleyecek.|I see. You might be able to go straight into the second year. A committee will look at your application.
B|Ce serait génial ! Qu'est-ce que je dois mettre dans le dossier ?|Harika olur! Dosyaya ne koymam gerekiyor?|That would be great! What do I need to put in the application?
A|Votre diplôme traduit, vos relevés de notes, un CV et une lettre de motivation.|Tercüme edilmiş diplomanız, not dökümleriniz, bir özgeçmiş ve bir niyet mektubu.|Your translated degree, your transcripts, a CV and a cover letter.
B|Et pour le français ? J'apprends depuis un an, mais mon niveau n'est pas encore très bon.|Fransızca için ne gerekiyor? Bir yıldır öğreniyorum ama seviyem henüz pek iyi değil.|And what about French? I've been learning for a year, but my level isn't very good yet.
A|En général, on demande un niveau B2, par exemple avec le DELF B2.|Genelde B2 seviyesi isteniyor, örneğin DELF B2 ile.|In general, they ask for a B2 level, for example with the DELF B2.
B|B2… Ça va me demander du travail ! Il faut envoyer le dossier quand ?|B2… Bu epey çalışma gerektirecek! Dosyayı ne zaman göndermek gerekiyor?|B2… That's going to take some work! When do I have to send the application?
A|Pour la rentrée de septembre, il faut l'envoyer en hiver ou au printemps. Ça dépend des universités : les dates exactes sont sur leur site.|Eylül dönemi için kışın ya da ilkbaharda göndermek gerekiyor. Üniversiteye göre değişiyor: kesin tarihler sitelerinde yazıyor.|For the September start, you have to send it in the winter or spring. It depends on the university: the exact dates are on their website.
B|Alors je vais préparer le DELF B2 cette année et je m'inscrirai l'année prochaine.|O zaman bu yıl DELF B2'ye hazırlanacağım ve gelecek yıl kaydolacağım.|Then I'll prepare for the DELF B2 this year and I'll enrol next year.
A|C'est un bon plan. Vous savez, en STAPS, il y a des cours théoriques et beaucoup de pratique sportive.|İyi bir plan. Bilirsiniz, STAPS'ta teorik dersler ve bolca spor pratiği var.|That's a good plan. You know, in STAPS there are theory classes and lots of practical sport.
B|Parfait, j'adore le sport ! Il y a aussi des cours d'anatomie ?|Mükemmel, sporu çok severim! Anatomi dersi de var mı?|Perfect, I love sport! Are there anatomy classes too?
A|Oui, en première et en deuxième année. Pour vous, ce sera facile !|Evet, birinci ve ikinci sınıfta. Sizin için kolay olacak!|Yes, in the first and second year. It'll be easy for you!
B|J'espère ! Merci beaucoup pour toutes ces informations.|Umarım! Bütün bu bilgiler için çok teşekkürler.|I hope so! Thank you very much for all this information.`),

    D("d-certificat", "A2", "Un certificat médical pour le sport", "Spor için sağlık raporu", "A medical certificate for sport", { A: "Médecin", B: "Esin" }, "B", `
A|Bonjour, madame Yılmaz. Asseyez-vous. Qu'est-ce que je peux faire pour vous ?|Merhaba Yılmaz Hanım. Oturun lütfen. Sizin için ne yapabilirim?|Hello, Mrs Yılmaz. Have a seat. What can I do for you?
B|Bonjour, docteur. Je voudrais m'inscrire dans un club de course à pied, et ils demandent un certificat médical.|Merhaba doktor. Bir koşu kulübüne yazılmak istiyorum, sağlık raporu istiyorlar.|Hello, doctor. I'd like to join a running club, and they're asking for a medical certificate.
A|Très bien. Vous voulez faire des compétitions ?|Çok güzel. Yarışlara katılmak istiyor musunuz?|Very good. Do you want to take part in races?
B|Oui, j'aimerais courir un semi-marathon au printemps.|Evet, baharda bir yarı maraton koşmak istiyorum.|Yes, I'd like to run a half marathon in the spring.
A|D'accord. Vous avez déjà eu des problèmes de cœur ou des douleurs dans la poitrine ?|Peki. Daha önce kalp sorunu ya da göğüs ağrısı yaşadınız mı?|OK. Have you ever had heart problems or chest pain?
B|Non, jamais. Et dans ma famille non plus, à ma connaissance.|Hayır, hiç. Bildiğim kadarıyla ailemde de yok.|No, never. And nobody in my family either, as far as I know.
A|Bien. Je vais prendre votre tension et écouter votre cœur. Respirez profondément…|Güzel. Tansiyonunuzu ölçüp kalbinizi dinleyeceğim. Derin nefes alın…|Good. I'm going to take your blood pressure and listen to your heart. Breathe deeply…
B|Alors, tout va bien ?|Eee, her şey yolunda mı?|So, is everything OK?
A|Oui, votre tension est parfaite et votre cœur est calme. On voit que vous êtes sportive !|Evet, tansiyonunuz mükemmel, kalbiniz de sakin. Sportif olduğunuz belli!|Yes, your blood pressure is perfect and your heart rate is calm. You can tell you're sporty!
B|Merci ! Le certificat sera valable combien de temps ?|Teşekkürler! Rapor ne kadar süre geçerli olacak?|Thanks! How long will the certificate be valid for?
A|En général, les clubs l'acceptent pendant un an. Mais vérifiez avec votre club.|Genelde kulüpler bir yıl boyunca kabul ediyor. Ama kulübünüze sorun.|In general, clubs accept it for a year. But check with your club.
B|D'accord. Et la consultation, c'est combien ?|Tamam. Muayene ücreti ne kadar?|OK. And how much is the appointment?
A|30 €. Attention : quand on vient seulement pour un certificat de sport, la Sécurité sociale ne rembourse pas.|30 €. Dikkat: Sadece spor raporu için gelindiğinde Sosyal Güvenlik ödeme yapmıyor.|30 €. Be careful: when you come only for a sports certificate, the national health insurance doesn't reimburse it.
B|Ah bon ? Je ne savais pas. Ce n'est pas grave, c'est pour la bonne cause !|Öyle mi? Bilmiyordum. Önemli değil, iyi bir amaç için!|Really? I didn't know. Never mind, it's for a good cause!
A|Voilà votre certificat. Bonne course, et n'oubliez pas de bien vous échauffer !|Buyurun raporunuz. İyi koşular, iyice ısınmayı da unutmayın!|Here's your certificate. Good luck with the race, and don't forget to warm up properly!`),

    D("d-vacances", "A2", "Raconter ses vacances", "Tatilini anlatmak", "Talking about your holidays", { A: "Camille", B: "Esin" }, "B", `
A|Salut Esin ! Ça y est, je suis rentrée de vacances !|Selam Esin! İşte, tatilden döndüm!|Hi Esin! That's it, I'm back from my holidays!
B|Salut Camille ! Alors, c'était comment, la Corse ?|Selam Camille! Eee, Korsika nasıldı?|Hi Camille! So, how was Corsica?
A|C'était magnifique ! On a fait de la randonnée pendant dix jours.|Muhteşemdi! On gün boyunca doğa yürüyüşü yaptık.|It was wonderful! We went hiking for ten days.
B|Dix jours ! Vous avez dormi où ?|On gün mü! Nerede kaldınız?|Ten days! Where did you sleep?
A|Dans des refuges, en montagne. Il n'y avait pas de douche chaude, mais la vue était incroyable.|Dağdaki sığınak evlerinde. Sıcak duş yoktu ama manzara inanılmazdı.|In mountain huts. There was no hot shower, but the view was amazing.
B|Ça devait être fatigant ! Tu n'as pas eu mal aux jambes ?|Yorucu olmalı! Bacakların ağrımadı mı?|That must have been tiring! Didn't your legs hurt?
A|Si ! Le troisième jour, j'avais des courbatures partout. Mais après, ça allait mieux.|Ağrıdı tabii! Üçüncü gün her yerim tutulmuştu. Ama sonra daha iyiydi.|Yes, they did! On the third day I was aching all over. But after that it was better.
B|C'est normal, le corps s'habitue. Il faisait beau ?|Normal, vücut alışıyor. Hava güzel miydi?|That's normal, your body gets used to it. Was the weather nice?
A|Oui, il faisait chaud la journée et frais le soir. Et on s'est baignés dans un lac de montagne !|Evet, gündüz sıcak, akşam serindi. Bir de dağ gölünde yüzdük!|Yes, it was hot during the day and cool in the evening. And we swam in a mountain lake!
B|Dans un lac de montagne ? L'eau devait être glacée !|Dağ gölünde mi? Su buz gibi olmalı!|In a mountain lake? The water must have been freezing!
A|Oui, elle était très froide, mais c'était génial ! Et toi, tu pars en vacances bientôt ?|Evet, çok soğuktu ama harikaydı! Ya sen, yakında tatile çıkıyor musun?|Yes, it was very cold, but it was great! And you, are you going on holiday soon?
B|Pas tout de suite. L'été prochain, mon mari et moi, nous irons en Turquie.|Hemen değil. Gelecek yaz eşimle Türkiye'ye gideceğiz.|Not right away. Next summer, my husband and I will go to Turkey.
A|Super ! Tu me montreras tes photos ?|Süper! Fotoğraflarını bana gösterir misin?|Great! Will you show me your photos?
B|Bien sûr ! Mais d'abord, montre-moi tes photos de Corse !|Tabii! Ama önce sen bana Korsika fotoğraflarını göster!|Of course! But first, show me your photos of Corsica!
A|Avec plaisir. Regarde, ça, c'est le lever du soleil au sommet…|Memnuniyetle. Bak, bu zirvede gün doğumu…|With pleasure. Look, this is the sunrise at the summit…`),

    D("d-bruit-voisin", "A2", "Parler poliment du bruit à un voisin", "Komşuyla gürültü hakkında kibarca konuşmak", "Politely talking to a neighbour about noise", { A: "Lucas", B: "Esin" }, "B", `
A|Oui ? Bonsoir !|Evet? İyi akşamlar!|Yes? Good evening!
B|Bonsoir. Excusez-moi de vous déranger. Je suis votre voisine du dessous, Esin.|İyi akşamlar. Rahatsız ettiğim için kusura bakmayın. Alt kattaki komşunuz Esin'im.|Good evening. Sorry to bother you. I'm your downstairs neighbour, Esin.
A|Ah, enchanté. Il y a un problème ?|Ah, memnun oldum. Bir sorun mu var?|Oh, nice to meet you. Is there a problem?
B|Eh bien… depuis une semaine, il y a beaucoup de bruit le soir, vers minuit.|Şey… bir haftadır akşamları, gece yarısına doğru çok gürültü oluyor.|Well… for a week now, there's been a lot of noise in the evening, around midnight.
A|Oh, je suis désolé ! C'est la musique ?|Ah, çok özür dilerim! Müzik mi?|Oh, I'm so sorry! Is it the music?
B|Oui, la musique, et aussi des bruits de pas. Je me lève à 6 h pour aller travailler, alors c'est difficile pour moi.|Evet, müzik, bir de ayak sesleri. İşe gitmek için saat 6'da kalkıyorum, o yüzden benim için zor oluyor.|Yes, the music, and footsteps too. I get up at 6 to go to work, so it's hard for me.
A|Je ne savais pas qu'on entendait autant. J'ai un nouveau colocataire, il fait du sport le soir dans sa chambre.|Bu kadar duyulduğunu bilmiyordum. Yeni bir ev arkadaşım var, akşamları odasında spor yapıyor.|I didn't know you could hear so much. I have a new flatmate, he exercises in his room in the evening.
B|Ah, je comprends mieux ! Il saute à la corde ?|Ah, şimdi anladım! İp mi atlıyor?|Ah, that explains it! Does he skip rope?
A|Oui, exactement ! Je vais lui parler. Il pourrait faire son sport plus tôt.|Evet, aynen! Onunla konuşacağım. Sporunu daha erken yapabilir.|Yes, exactly! I'll talk to him. He could do his exercise earlier.
B|Ce serait très gentil. Et peut-être mettre un tapis ? Ça réduit beaucoup le bruit.|Çok nazik olur. Belki yere bir de mat serebilir? Gürültüyü çok azaltıyor.|That would be very kind. And maybe put down a mat? It really reduces the noise.
A|Bonne idée. Et pour la musique, on baissera le son après 22 h, promis.|İyi fikir. Müziğin sesini de saat 22'den sonra kısacağız, söz.|Good idea. And as for the music, we'll turn it down after 10 pm, I promise.
B|Merci beaucoup. Vous savez, je travaille dans une salle de sport. S'il veut, il peut venir s'entraîner là-bas !|Çok teşekkürler. Biliyor musunuz, bir spor salonunda çalışıyorum. İsterse orada antrenman yapabilir!|Thank you very much. You know, I work at a gym. If he wants, he can come and train there!
A|Ha ha, je vais lui dire ! Merci d'être venue me parler directement.|Ha ha, ona söylerim! Gelip benimle doğrudan konuştuğunuz için teşekkürler.|Ha ha, I'll tell him! Thanks for coming to talk to me directly.
B|Je vous en prie. Bonne soirée !|Rica ederim. İyi akşamlar!|You're welcome. Have a good evening!`),

    D("d-assurance-maladie", "A2", "Appeler l'Assurance maladie", "Sağlık sigortasını aramak", "Calling the health insurance office", { A: "Conseillère", B: "Esin" }, "B", `
A|Assurance maladie, bonjour. Je m'appelle Nadia. Je peux avoir votre nom et votre numéro de sécurité sociale ?|Sağlık Sigortası, merhaba. Adım Nadia. Adınızı ve sosyal güvenlik numaranızı alabilir miyim?|Health insurance, hello. My name is Nadia. Can I have your name and your social security number?
B|Bonjour. Esin Yılmaz. Le numéro est sur ma carte Vitale, une seconde… Voilà, je vous le lis.|Merhaba. Esin Yılmaz. Numara Vitale kartımda yazıyor, bir saniye… Tamam, okuyorum.|Hello. Esin Yılmaz. The number is on my carte Vitale, one second… Right, I'll read it out to you.
A|Merci, j'ai votre dossier. Que puis-je faire pour vous ?|Teşekkürler, dosyanız önümde. Size nasıl yardımcı olabilirim?|Thank you, I have your file. What can I do for you?
B|Je suis allée chez le médecin il y a un mois, mais je n'ai pas encore été remboursée.|Bir ay önce doktora gittim ama hâlâ ödemem yapılmadı.|I went to the doctor a month ago, but I haven't been reimbursed yet.
A|Vous avez présenté votre carte Vitale chez le médecin ?|Doktorda Vitale kartınızı gösterdiniz mi?|Did you show your carte Vitale at the doctor's?
B|Non, je l'avais oubliée à la maison. Le médecin m'a donné une feuille de soins.|Hayır, evde unutmuştum. Doktor bana bir tedavi formu verdi.|No, I'd left it at home. The doctor gave me a paper claim form.
A|D'accord. Vous avez envoyé la feuille de soins par courrier ?|Peki. Tedavi formunu postayla gönderdiniz mi?|OK. Did you send the claim form by post?
B|Oui, il y a trois semaines.|Evet, üç hafta önce.|Yes, three weeks ago.
A|Je regarde… Oui, nous l'avons reçue. Mais il manque votre signature.|Bakıyorum… Evet, elimize ulaşmış. Ama imzanız eksik.|Let me look… Yes, we've received it. But your signature is missing.
B|Oh non ! J'ai oublié de signer ?|Ah, olamaz! İmzalamayı mı unuttum?|Oh no! I forgot to sign it?
A|Oui, ça arrive souvent, ne vous inquiétez pas. Nous allons vous la renvoyer. Vous la signerez et vous nous la retournerez.|Evet, sık olur, merak etmeyin. Formu size geri göndereceğiz. İmzalayıp bize geri yollarsınız.|Yes, it happens a lot, don't worry. We'll send it back to you. You'll sign it and return it to us.
B|D'accord. Et après, le remboursement prendra combien de temps ?|Tamam. Sonra geri ödeme ne kadar sürer?|OK. And then, how long will the reimbursement take?
A|Environ deux semaines. Vous pouvez suivre vos remboursements sur votre compte ameli.|Yaklaşık iki hafta. Geri ödemelerinizi ameli hesabınızdan takip edebilirsiniz.|About two weeks. You can follow your reimbursements on your ameli account.
B|Je n'ai pas encore de compte ameli. C'est facile à créer ?|Henüz ameli hesabım yok. Açması kolay mı?|I don't have an ameli account yet. Is it easy to set up?
A|Oui, ça se fait sur le site ameli.fr ou sur l'application. C'est assez simple.|Evet, ameli.fr sitesinden ya da uygulamadan açılıyor. Oldukça basit.|Yes, you do it on the ameli.fr website or in the app. It's quite simple.
B|Très bien, je le ferai ce soir. Merci pour votre aide !|Çok iyi, bu akşam yaparım. Yardımınız için teşekkürler!|Great, I'll do it tonight. Thanks for your help!`),

    D("d-match-foot", "A2", "Organiser un match de foot", "Futbol maçı organize etmek", "Organising a football match", { A: "Karim", B: "Esin" }, "B", `
A|Salut Esin ! Tu as vu mon message sur le groupe ?|Selam Esin! Gruptaki mesajımı gördün mü?|Hi Esin! Did you see my message in the group chat?
B|Oui ! Un match de foot dimanche, c'est une super idée. On sera combien ?|Evet! Pazar günü futbol maçı, süper fikir. Kaç kişi olacağız?|Yes! A football match on Sunday is a great idea. How many of us will there be?
A|Pour l'instant, on est neuf. Il nous faudrait dix joueurs, pour faire cinq contre cinq.|Şimdilik dokuz kişiyiz. Beşe beş oynamak için on oyuncu lazım.|For now there are nine of us. We'd need ten players to play five-a-side.
B|Je peux demander à une collègue de la salle de sport. Elle joue très bien.|Spor salonundan bir iş arkadaşıma sorabilirim. Çok iyi oynuyor.|I can ask a colleague from the gym. She plays really well.
A|Génial ! Et pour le terrain, tu as une idée ?|Harika! Saha için bir fikrin var mı?|Brilliant! And do you have an idea for the pitch?
B|Il y a un terrain synthétique près de la salle. Je vais appeler pour réserver.|Salonun yakınında suni çim bir saha var. Rezervasyon için arayacağım.|There's an artificial pitch near the gym. I'll call to book it.
A|Parfait. On pourrait jouer à 10 h ? L'après-midi, il va pleuvoir.|Mükemmel. Saat 10'da oynayabilir miyiz? Öğleden sonra yağmur yağacakmış.|Perfect. Could we play at 10? It's going to rain in the afternoon.
B|D'accord pour 10 h. Le terrain coûte 60 € l'heure, donc ça fera 6 € par personne.|10 olur. Sahanın saati 60 €, yani kişi başı 6 € tutacak.|10 is fine. The pitch costs 60 € an hour, so that'll be 6 € each.
A|Pas de problème. Qui apporte le ballon ?|Sorun değil. Topu kim getiriyor?|No problem. Who's bringing the ball?
B|Moi, j'ai un ballon. Et toi, tu pourrais apporter des chasubles ?|Bende top var. Sen de yelek getirebilir misin?|I've got a ball. And could you bring some bibs?
A|Oui, j'en ai dix à la maison. Et après le match, on ira boire un verre ?|Evet, evde on tane var. Maçtan sonra bir şeyler içmeye gider miyiz?|Yes, I've got ten at home. And after the match, shall we go for a drink?
B|Bonne idée ! Mais avant le match, on fera dix minutes d'échauffement. Je ne veux pas de blessés !|İyi fikir! Ama maçtan önce on dakika ısınma yapacağız. Sakatlanan olsun istemiyorum!|Good idea! But before the match, we'll do a ten-minute warm-up. I don't want anyone getting injured!
A|Ha ha, d'accord, coach Esin ! J'écris tout ça sur le groupe.|Ha ha, tamam koç Esin! Hepsini gruba yazıyorum.|Ha ha, OK, coach Esin! I'll put all that in the group chat.
B|Super. À dimanche, et n'oublie pas tes chaussures de foot !|Süper. Pazar görüşürüz, kramponlarını unutma!|Great. See you Sunday, and don't forget your football boots!`),

    D("d-laverie", "A2", "À la laverie", "Çamaşırhanede", "At the launderette", { A: "Monsieur", B: "Esin" }, "B", `
B|Excusez-moi, monsieur. C'est la première fois que je viens ici. Vous pourriez m'aider ?|Affedersiniz beyefendi. Buraya ilk kez geliyorum. Bana yardım edebilir misiniz?|Excuse me, sir. It's my first time here. Could you help me?
A|Bien sûr ! Votre machine à laver est en panne ?|Tabii! Çamaşır makineniz mi bozuldu?|Of course! Has your washing machine broken down?
B|Oui, elle est tombée en panne hier. Et le réparateur ne viendra que la semaine prochaine.|Evet, dün bozuldu. Tamirci de ancak gelecek hafta gelecek.|Yes, it broke down yesterday. And the repairman won't come until next week.
A|Ah, c'est embêtant. Alors, d'abord, vous choisissez une machine libre. Celle-ci, par exemple.|Ah, can sıkıcı. Önce boş bir makine seçiyorsunuz. Mesela şu.|Oh, that's annoying. So, first you choose a free machine. This one, for example.
B|D'accord. Je peux mettre combien de linge ?|Tamam. Ne kadar çamaşır koyabilirim?|OK. How much washing can I put in?
A|Celle-ci, c'est 8 kilos. Votre sac rentre sans problème.|Bu 8 kiloluk. Torbanız rahatça sığar.|This one takes 8 kilos. Your bag will fit with no problem.
B|Et la lessive ? Je n'en ai pas apporté.|Deterjan ne olacak? Yanımda getirmedim.|And the detergent? I didn't bring any.
A|Pas de souci, ici, la lessive est automatique. Elle est comprise dans le prix.|Dert etmeyin, burada deterjan otomatik. Fiyata dahil.|No worries, the detergent is automatic here. It's included in the price.
B|Super. Je paie où ?|Süper. Nerede ödüyorum?|Great. Where do I pay?
A|À la borne, là-bas. Vous tapez le numéro de la machine, et vous payez par carte ou en pièces.|Şuradaki ödeme makinesinde. Makinenin numarasını tuşlayıp kartla ya da bozuk parayla ödüyorsunuz.|At the pay station over there. You key in the machine number and pay by card or with coins.
B|C'est combien ?|Ne kadar?|How much is it?
A|5 € pour le lavage. Et le séchoir, c'est 1 € les dix minutes.|Yıkama 5 €. Kurutma makinesi de on dakikası 1 €.|5 € for the wash. And the dryer is 1 € for ten minutes.
B|Mes vêtements de sport, je peux les mettre au séchoir ?|Spor kıyafetlerimi kurutma makinesine koyabilir miyim?|Can I put my sportswear in the dryer?
A|Je ne vous le conseille pas, ça abîme les tissus techniques. Faites-les plutôt sécher à la maison.|Tavsiye etmem, teknik kumaşlara zarar veriyor. Onları evde kurutmanız daha iyi.|I wouldn't recommend it, it damages technical fabrics. Better to dry them at home.
B|Vous avez raison. Merci beaucoup, vous m'avez beaucoup aidée !|Haklısınız. Çok teşekkürler, bana çok yardımcı oldunuz!|You're right. Thank you so much, you've been a great help!
A|De rien ! Le lavage dure 40 minutes. Il y a un café juste à côté.|Bir şey değil! Yıkama 40 dakika sürüyor. Hemen yanda bir kafe var.|Not at all! The wash takes 40 minutes. There's a café right next door.`),

    D("d-panne-internet", "A2", "Signaler une panne d'internet", "İnternet arızası bildirmek", "Reporting an internet outage", { A: "Service client", B: "Esin" }, "B", `
A|Service client, bonjour. Je m'appelle Julien. Que puis-je faire pour vous ?|Müşteri hizmetleri, merhaba. Adım Julien. Size nasıl yardımcı olabilirim?|Customer service, hello. My name is Julien. How can I help you?
B|Bonjour. Je n'ai plus internet depuis hier soir.|Merhaba. Dün akşamdan beri internetim yok.|Hello. I haven't had internet since last night.
A|Je suis désolé. Je peux avoir votre numéro client ?|Üzgünüm. Müşteri numaranızı alabilir miyim?|I'm sorry. Can I have your customer number?
B|Oui, c'est le 45 72 18 03.|Evet, 45 72 18 03.|Yes, it's 45 72 18 03.
A|Merci, madame Yılmaz. Est-ce que les voyants de votre box sont allumés ?|Teşekkürler Yılmaz Hanım. Modeminizin ışıkları yanıyor mu?|Thank you, Mrs Yılmaz. Are the lights on your router on?
B|Il y a une lumière rouge qui clignote.|Yanıp sönen kırmızı bir ışık var.|There's a red light flashing.
A|D'accord. Vous avez déjà essayé de redémarrer la box ?|Peki. Modemi yeniden başlatmayı denediniz mi?|OK. Have you already tried restarting the router?
B|Oui, deux fois. J'ai débranché la box, j'ai attendu une minute et je l'ai rebranchée. Mais ça ne marche toujours pas.|Evet, iki kez. Modemin fişini çektim, bir dakika bekledim ve tekrar taktım. Ama hâlâ çalışmıyor.|Yes, twice. I unplugged the router, waited a minute and plugged it back in. But it still doesn't work.
A|Je fais un test à distance… Ah, il y a une panne dans votre quartier. Nos techniciens sont déjà en train de la réparer.|Uzaktan bir test yapıyorum… Ah, mahallenizde bir arıza var. Teknisyenlerimiz şu anda onarıyor.|I'm running a remote test… Ah, there's an outage in your area. Our technicians are already fixing it.
B|Ah, d'accord. Ce sera réparé quand ?|Ah, anladım. Ne zaman düzelir?|Ah, I see. When will it be fixed?
A|Normalement, demain avant midi. Je suis vraiment désolé pour la gêne.|Normalde yarın öğleden önce. Verdiğimiz rahatsızlık için gerçekten özür dilerim.|Normally, tomorrow before noon. I'm really sorry for the inconvenience.
B|C'est embêtant, j'utilise internet tous les soirs pour apprendre le français. Je pourrais avoir une réduction sur ma facture ?|Can sıkıcı, her akşam Fransızca öğrenmek için interneti kullanıyorum. Faturamda indirim alabilir miyim?|It's annoying, I use the internet every evening to learn French. Could I have a discount on my bill?
A|Oui, bien sûr. Je vous fais un geste commercial de 10 € sur votre prochaine facture.|Tabii. Bir sonraki faturanızdan 10 euroluk indirim yapıyorum.|Yes, of course. I'll give you a 10 € goodwill credit on your next bill.
B|Merci, c'est gentil. Et si demain, ça ne marche toujours pas ?|Teşekkürler, naziksiniz. Ya yarın hâlâ çalışmazsa?|Thanks, that's kind. And if it still doesn't work tomorrow?
A|Rappelez-nous, et nous enverrons un technicien chez vous.|Bizi tekrar arayın, evinize bir teknisyen göndeririz.|Call us back, and we'll send a technician to your home.
B|Parfait. Merci et bonne journée !|Mükemmel. Teşekkürler, iyi günler!|Perfect. Thanks, and have a nice day!`)
  );
})();
