/* Aventures A2 — 16 to 20: ostéopathe, réserver un gîte, France Travail, panne de voiture, raclette chez les voisins */
(window.ADVENTURES = window.ADVENTURES || []).push(

  /* ───────────── 16. Chez l'ostéopathe ───────────── */
  { id: "av-osteo", level: "A2", emoji: "🦴",
    t: { fr: "Un torticolis chez l'ostéo", tr: "Osteopatta boyun tutulması", en: "A stiff neck at the osteopath's" },
    goal: { fr: "Expliquez votre douleur au cou, suivez les consignes de l'ostéopathe et demandez une facture.", tr: "Boyun ağrınızı anlatın, osteopatın talimatlarını izleyin ve bir fatura isteyin.", en: "Explain your neck pain, follow the osteopath's instructions and ask for an invoice." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Hier matin, vous vous êtes réveillée avec le cou bloqué. Aujourd'hui, vous êtes chez un ostéopathe.", tr: "Dün sabah boynunuz tutulmuş olarak uyandınız. Bugün bir osteopattasınız.", en: "Yesterday morning you woke up with a stiff neck. Today you're at an osteopath's." },
           say: [["M", "Bonjour madame, installez-vous. Qu'est-ce qui vous arrive ?"]],
           choices: [
             { fr: "Je suis mal au cou depuis hier matin. Je ne peux pas tourner la tête.", tr: "Dün sabahtan beri boynum kötüyüm. Başımı çeviremiyorum.", en: "I am bad at the neck since yesterday morning. I can't turn my head.", ok: false,
               fb: { fr: "Pour la douleur, on utilise « avoir » : « j'ai mal au cou » 😉.", tr: "Ağrı için « avoir » kullanılır: « j'ai mal au cou » 😉.", en: "For pain, use « avoir »: « j'ai mal au cou » 😉." } },
             { fr: "Depuis hier matin, j'ai mal au cou. Je ne peux pas tourner la tête.", tr: "Dün sabahtan beri boynum ağrıyor. Başımı çeviremiyorum.", en: "Since yesterday morning my neck has hurt. I can't turn my head.", ok: true, go: "b" },
             { fr: "Il m'arrive un bus tous les matins, devant la maison, à 8 h.", tr: "Her sabah 8'de evin önüne bana bir otobüs geliyor.", en: "A bus arrives for me every morning, outside the house, at 8.", ok: false,
               fb: { fr: "Haha 🚌 ! « Qu'est-ce qui vous arrive ? » = quel est votre problème ? Parlez de votre douleur.", tr: "Haha 🚌! « Qu'est-ce qui vous arrive ? » = sorununuz ne? Ağrınızdan bahsedin.", en: "Haha 🚌! « Qu'est-ce qui vous arrive ? » = what's the problem? Talk about your pain." } }
           ] },
      b: { say: [["M", "D'accord. Vous avez fait un mouvement brusque, ou c'est arrivé pendant la nuit ?"]],
           choices: [
             { fr: "Je crois que j'ai mal dormi. Mon oreiller est trop haut.", tr: "Sanırım kötü uyudum. Yastığım çok yüksek.", en: "I think I slept badly. My pillow is too high.", ok: true, go: "c" },
             { fr: "J'ai dormi mal, je crois. Mon oreiller est trop haut.", tr: "Kötü uyudum sanırım. Yastığım çok yüksek.", en: "I slept badly, I think. My pillow is too high.", ok: false,
               fb: { fr: "Presque ! Au passé composé, les petits adverbes vont avant le participe : « j'ai mal dormi » 😴.", tr: "Az kaldı! Passé composé'de kısa zarflar ortaçtan önce gelir: « j'ai mal dormi » 😴.", en: "Almost! In the passé composé, short adverbs go before the participle: « j'ai mal dormi » 😴." } },
             { fr: "Avant-hier, j'ai porté une valise très lourde dans l'escalier.", tr: "Önceki gün merdivende çok ağır bir valiz taşıdım.", en: "The day before yesterday I carried a very heavy suitcase up the stairs.", ok: true, go: "c" }
           ] },
      c: { say: [["M", "Je vois. Vous avez déjà consulté un ostéopathe ?"]],
           choices: [
             { fr: "Non, jamais. Comment ça se passe ?", tr: "Hayır, hiç. Nasıl oluyor?", en: "No, never. How does it work?", ok: true, go: "d" },
             { fr: "Non, je n'ai jamais pas consulté. Mais j'ai étudié la kiné en Turquie.", tr: "Hayır, hiç değil danışmadım. Ama Türkiye'de fizyoterapi okudum.", en: "No, I have never not consulted. But I studied physio in Turkey.", ok: false,
               fb: { fr: "Une négation de trop 😄 ! « Jamais » remplace « pas » : « je n'ai jamais consulté ».", tr: "Bir olumsuzluk fazla 😄! « Jamais », « pas »nın yerini alır: « je n'ai jamais consulté ».", en: "One negation too many 😄! « Jamais » replaces « pas »: « je n'ai jamais consulté »." } },
             { fr: "Non, c'est la première fois. Mais j'ai étudié la kinésithérapie en Turquie.", tr: "Hayır, ilk kez. Ama Türkiye'de fizyoterapi okudum.", en: "No, it's the first time. But I studied physiotherapy in Turkey.", ok: true, go: "d2" }
           ] },
      d: { say: [["M", "Je vais vous poser quelques questions, puis je vais examiner votre cou et votre dos. Ce n'est pas douloureux, ne vous inquiétez pas."]],
           choices: [
             { fr: "Douloureux ? Alors je préfère partir !", tr: "Acılı mı? O zaman gitmeyi tercih ederim!", en: "Painful? Then I'd rather leave!", ok: false,
               fb: { fr: "Écoutez bien : il a dit « ce n'est PAS douloureux » 😄. Vous pouvez rester !", tr: "İyi dinleyin: « ce n'est PAS douloureux » (acıtmaz) dedi 😄. Kalabilirsiniz!", en: "Listen carefully: he said « ce n'est PAS douloureux » 😄. You can stay!" } },
             { fr: "D'accord, je suis prête.", tr: "Tamam, hazırım.", en: "OK, I'm ready.", ok: true, go: "e" }
           ] },
      d2: { say: [["M", "Ah, une collègue ! Vous travaillez comme kiné en France ?"]],
           choices: [
             { fr: "Pas encore. Mon diplôme n'est pas reconnu ici, je travaille dans une salle de sport.", tr: "Henüz değil. Diplomam burada tanınmıyor, bir spor salonunda çalışıyorum.", en: "Not yet. My diploma isn't recognised here, I work at a gym.", ok: true, go: "e" },
             { fr: "Non, je travaillerai comme kiné l'année dernière. Mon diplôme n'est pas reconnu.", tr: "Hayır, geçen yıl fizyoterapist olarak çalışacağım. Diplomam tanınmıyor.", en: "No, I will work as a physio last year. My diploma isn't recognised.", ok: false,
               fb: { fr: "Futur + « l'année dernière », ça ne va pas ensemble ⏳😄. Parlez du présent : « pas encore, je travaille à l'accueil… ».", tr: "Gelecek zaman + « l'année dernière » birbirine uymaz ⏳😄. Şimdiden bahsedin: « pas encore, je travaille à l'accueil… ».", en: "Future + « l'année dernière » don't go together ⏳😄. Talk about now: « pas encore, je travaille à l'accueil… »." } }
           ] },
      e: { say: [["M", "Vous avez d'autres symptômes ? Des fourmis dans les bras, des maux de tête ?"]],
           choices: [
             { fr: "Non, je n'ai pas d'animaux chez moi.", tr: "Hayır, evde hayvanım yok.", en: "No, I don't have any pets at home.", ok: false,
               fb: { fr: "🐜😄 « Avoir des fourmis dans les bras » = sentir des picotements. Ce ne sont pas de vraies fourmis !", tr: "🐜😄 « Avoir des fourmis dans les bras » = kollarda karıncalanma hissetmek. Gerçek karınca değil!", en: "🐜😄 « Avoir des fourmis dans les bras » = pins and needles. Not real ants!" } },
             { fr: "Non, pas de fourmis, et pas de mal de tête.", tr: "Hayır, karıncalanma yok, baş ağrısı da yok.", en: "No, no pins and needles and no headache.", ok: true, go: "f" },
             { fr: "Un peu mal à la tête le soir, mais c'est léger.", tr: "Akşamları biraz başım ağrıyor ama hafif.", en: "A slight headache in the evening, but it's mild.", ok: true, go: "f" }
           ] },
      f: { scene: { fr: "Il vous demande de vous allonger. Il bouge doucement votre tête.", tr: "Uzanmanızı istiyor. Başınızı yavaşça hareket ettiriyor.", en: "He asks you to lie down. He gently moves your head." },
           say: [["M", "Dites-moi si ça vous fait mal."]],
           choices: [
             { fr: "Là, ça tire un peu, mais ça va.", tr: "Orası biraz geriliyor ama idare eder.", en: "There it pulls a bit, but it's OK.", ok: true, go: "g" },
             { fr: "Aïe ! Vous êtes un boucher !", tr: "Ay! Siz bir kasapsınız!", en: "Ouch! You're a butcher!", ok: false,
               fb: { fr: "Un peu fort 😅 ! Dites simplement ce que vous sentez : « là, ça fait mal » ou « ça tire un peu ».", tr: "Biraz ağır oldu 😅! Sadece ne hissettiğinizi söyleyin: « là, ça fait mal » ya da « ça tire un peu ».", en: "A bit harsh 😅! Just say what you feel: « là, ça fait mal » or « ça tire un peu »." } },
             { fr: "Là, j'ai mal de cou.", tr: "Orada boyun ağrım var.", en: "There, I have pain of neck.", ok: false,
               fb: { fr: "Presque ! On dit « mal à » : à + le = au, donc « là, j'ai mal au cou » 😉.", tr: "Az kaldı! « Mal à » denir: à + le = au, yani « là, j'ai mal au cou » 😉.", en: "Almost! It's « mal à »: à + le = au, so « là, j'ai mal au cou » 😉." } }
           ] },
      g: { say: [["M", "Voilà, c'est fini. Vous pouvez vous asseoir doucement. Comment vous sentez-vous ?"]],
           choices: [
             { fr: "Je me sens plus bien.", tr: "Daha iyi hissediyorum.", en: "I feel more good.", ok: false,
               fb: { fr: "« Plus bien » n'existe pas 😉. On dit « mieux » : « je me sens mieux ».", tr: "« Plus bien » diye bir şey yok 😉. « Mieux » denir: « je me sens mieux ».", en: "« Plus bien » doesn't exist 😉. Say « mieux »: « je me sens mieux »." } },
             { fr: "Beaucoup mieux ! Je peux tourner la tête.", tr: "Çok daha iyi! Başımı çevirebiliyorum.", en: "Much better! I can turn my head.", ok: true, go: "h" },
             { fr: "Un peu mieux, mais j'ai encore un peu mal.", tr: "Biraz daha iyi ama hâlâ biraz ağrıyor.", en: "A bit better, but it still hurts a little.", ok: true, go: "h" }
           ] },
      h: { say: [["M", "Bien. Ce soir, mettez du chaud sur le cou et prenez un oreiller plus bas. Si la douleur continue après une semaine, consultez votre médecin."]],
           choices: [
             { fr: "D'accord, je vais acheter un oreiller plus haut. Et j'irai chez le médecin.", tr: "Tamam, daha yüksek bir yastık alacağım. Bir de doktora gideceğim.", en: "OK, I'll buy a higher pillow. And I'll go to the doctor.", ok: false,
               fb: { fr: "Écoutez bien : il a dit un oreiller « plus bas », pas « plus haut » 😄 !", tr: "İyi dinleyin: « plus haut » değil, « plus bas » (daha alçak) bir yastık dedi 😄!", en: "Listen carefully: he said a « plus bas » (lower) pillow, not « plus haut » 😄!" } },
             { fr: "D'accord. Et si ça ne passe pas, j'irai chez mon médecin.", tr: "Tamam. Geçmezse doktoruma gideceğim.", en: "OK. And if it doesn't go away, I'll see my doctor.", ok: true, go: "i" },
             { fr: "D'accord, je vais mettre de la glace dans mon lit.", tr: "Tamam, yatağıma buz koyacağım.", en: "OK, I'll put ice in my bed.", ok: false,
               fb: { fr: "Brrr 🥶😄 ! Il a dit « du chaud sur le cou », pas de la glace dans le lit.", tr: "Brrr 🥶😄! « Boynunuza sıcak » dedi, yatağa buz değil.", en: "Brrr 🥶😄! He said « heat on your neck », not ice in your bed." } }
           ] },
      i: { say: [["M", "La séance coûte 60 €. Vous savez, certaines mutuelles remboursent l'ostéopathie."]],
           choices: [
             { fr: "Ah bon ? Vous pourriez me donner une facture, s'il vous plaît ?", tr: "Öyle mi? Bana bir fatura verebilir misiniz, lütfen?", en: "Really? Could you give me an invoice, please?", ok: true, go: "fin" },
             { fr: "La Sécurité sociale rembourse tout, non ? Merci, monsieur.", tr: "Sosyal Güvenlik her şeyi karşılıyor, değil mi? Teşekkürler beyefendi.", en: "The national health system covers everything, doesn't it? Thank you, sir.", ok: false,
               fb: { fr: "Malheureusement non 😅 : la Sécu ne rembourse pas l'ostéopathie. Seule la mutuelle peut aider. Demandez une facture !", tr: "Maalesef hayır 😅: Sécu osteopatiyi karşılamıyor. Sadece tamamlayıcı sigorta (mutuelle) yardımcı olabilir. Fatura isteyin!", en: "Unfortunately not 😅: the Sécu doesn't cover osteopathy. Only your top-up insurance can help. Ask for an invoice!" } },
             { fr: "Ah bon ? Je vous donne une facture, s'il vous plaît ?", tr: "Öyle mi? Size bir fatura vereyim mi, lütfen?", en: "Really? Shall I give you an invoice, please?", ok: false,
               fb: { fr: "Vous inversez les rôles 😄 ! C'est lui qui donne la facture : « vous pourriez me donner une facture ? ».", tr: "Rolleri karıştırdınız 😄! Faturayı veren o: « vous pourriez me donner une facture ? ».", en: "You've swapped roles 😄! He gives the invoice: « vous pourriez me donner une facture ? »." } }
           ] },
      fin: { end: "win", say: [["M", "Bien sûr. Voilà. Prenez soin de votre cou, et bonne journée !"]],
             scene: { fr: "Vous sortez en tournant la tête à droite, à gauche… Ça va mieux ! Et vous avez tout expliqué en français. Bravo ! 🎉", tr: "Başınızı sağa sola çevirerek çıkıyorsunuz… Daha iyi! Ve her şeyi Fransızca anlattınız. Bravo! 🎉", en: "You walk out turning your head left and right… Much better! And you explained everything in French. Well done! 🎉" } }
    } },

  /* ───────────── 17. Réserver un gîte ───────────── */
  { id: "av-gite", level: "A2", emoji: "🏡",
    t: { fr: "Réserver un gîte", tr: "Bir kır evi ayırtmak", en: "Booking a country cottage" },
    goal: { fr: "Téléphonez à la propriétaire et réservez un gîte pour un week-end à la campagne avec votre mari.", tr: "Ev sahibini arayın ve eşinizle kırsalda bir hafta sonu için bir kır evi ayırtın.", en: "Call the owner and book a cottage for a weekend in the countryside with your husband." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous avez trouvé un joli gîte sur internet. Vous appelez la propriétaire.", tr: "İnternette güzel bir kır evi buldunuz. Ev sahibini arıyorsunuz.", en: "You've found a lovely cottage online. You call the owner." },
           say: [["F", "Gîte des Tilleuls, bonjour !"]],
           choices: [
             { fr: "Allô, bonjour, c'est qui ? Je voudrais réserver le gîte pour un week-end.", tr: "Alo, merhaba, kim bu? Bir hafta sonu için pansiyonu ayırtmak istiyorum.", en: "Hello, who's this? I'd like to book the cottage for a weekend.", ok: false,
               fb: { fr: "Elle vient de le dire 😄 ! Et c'est un peu sec. Commencez par « bonjour madame, je vous appelle pour… ».", tr: "Az önce söyledi 😄! Ve biraz kaba. « Bonjour madame, je vous appelle pour… » diye başlayın.", en: "She just said it 😄! And it's a bit curt. Start with « bonjour madame, je vous appelle pour… »." } },
             { fr: "Bonjour madame, je vous appelle pour réserver le gîte pour un week-end.", tr: "Merhaba hanımefendi, bir hafta sonu için kır evini ayırtmak üzere arıyorum.", en: "Hello, I'm calling to book the cottage for a weekend.", ok: true, go: "b" },
             { fr: "Bonjour madame, je vous appelle pour louer un tilleul pour un week-end.", tr: "Merhaba hanımefendi, bir hafta sonu için ıhlamur ağacı kiralamak için arıyorum.", en: "Hello, madam, I'm calling to rent a lime tree for a weekend.", ok: false,
               fb: { fr: "Un tilleul, c'est un arbre 🌳😄 ! C'est juste le nom du gîte. Dites « je voudrais réserver le gîte ».", tr: "Ihlamur bir ağaçtır 🌳😄! Sadece kır evinin adı. « Je voudrais réserver le gîte » deyin.", en: "A « tilleul » is a tree 🌳😄! It's just the cottage's name. Say « je voudrais réserver le gîte »." } }
           ] },
      b: { say: [["F", "Avec plaisir ! Pour quelles dates ?"]],
           choices: [
             { fr: "Depuis le vendredi 12 mai jusqu'au dimanche 14, si c'est possible.", tr: "Mümkünse 12 Mayıs cumadan beri 14 pazara kadar.", en: "Since Friday 12 May until Sunday 14, if possible.", ok: false,
               fb: { fr: "« Depuis » est pour une action qui a commencé dans le passé ⏳. Pour des dates, on dit « du 12 au 14 mai ».", tr: "« Depuis » geçmişte başlamış bir eylem içindir ⏳. Tarihler için « du 12 au 14 mai » denir.", en: "« Depuis » is for something that started in the past ⏳. For dates, say « du 12 au 14 mai »." } },
             { fr: "Du vendredi 12 au dimanche 14 mai, si c'est possible.", tr: "Mümkünse 12 Mayıs Cuma'dan 14 Mayıs Pazar'a kadar.", en: "From Friday 12 to Sunday 14 May, if possible.", ok: true, go: "c" }
           ] },
      c: { say: [["F", "Ah, je suis désolée, ce week-end-là, c'est complet. Mais le week-end suivant est libre, du 19 au 21."]],
           choices: [
             { fr: "Complet ? Il y a beaucoup de nourriture, alors ? Le week-end du 19, d'accord.", tr: "Dolu mu? Çok yemek mi var yani? 19'u hafta sonu, tamam.", en: "Full? Lots of food, then? The weekend of the 19th, OK.", ok: false,
               fb: { fr: "Pas de buffet ici 😄 ! « C'est complet » = il n'y a plus de place. Répondez à sa proposition.", tr: "Burada açık büfe yok 😄! « C'est complet » = yer kalmadı. Teklifine cevap verin.", en: "No buffet here 😄! « C'est complet » = fully booked. Answer her suggestion." } },
             { fr: "Pas de problème, le week-end du 19 nous conviendrait très bien.", tr: "Sorun değil, 19'undaki hafta sonu bize çok uyar.", en: "No problem, the weekend of the 19th would suit us very well.", ok: true, go: "d" },
             { fr: "Dommage… Mais d'accord, on prendra le week-end suivant.", tr: "Yazık… Ama tamam, bir sonraki hafta sonunu alırız.", en: "Shame… But OK, we'll take the following weekend.", ok: true, go: "d" }
           ] },
      d: { say: [["F", "Parfait. Vous serez combien de personnes ?"]],
           choices: [
             { fr: "Nous serons deux adultes, mon mari et moi.", tr: "İki yetişkin olacağız, eşim ve ben.", en: "There will be two adults, my husband and me.", ok: true, go: "e" },
             { fr: "Nous serons deux. Est-ce qu'il y a un grand lit ?", tr: "İki kişi olacağız. Büyük yatak var mı?", en: "There will be two of us. Is there a double bed?", ok: true, go: "e2" },
             { fr: "Nous sommes deux ans, mon mari et moi.", tr: "Biz iki yaşındayız, kocam ve ben.", en: "We are two years old, my husband and me.", ok: false,
               fb: { fr: "Deux bébés en vacances ? 👶👶😄 Dites « nous serons deux » (au futur, pour le séjour).", tr: "Tatilde iki bebek mi? 👶👶😄 « Nous serons deux » deyin (konaklama için gelecek zaman).", en: "Two babies on holiday? 👶👶😄 Say « nous serons deux » (future, for the stay)." } }
           ] },
      e: { say: [["F", "Très bien. Le gîte a une cuisine, un jardin et une cheminée. Vous avez des questions ?"]],
           choices: [
             { fr: "Oui : est-ce que les draps et les serviettes sont fournis ?", tr: "Evet: çarşaf ve havlular veriliyor mu?", en: "Yes: are sheets and towels provided?", ok: true, go: "f" },
             { fr: "La cheminée, c'est pour les fumeurs ? Et les draps sont fournis ?", tr: "Şömine sigara içenler için mi? Çarşaflar veriliyor mu?", en: "Is the fireplace for smokers? And are sheets provided?", ok: false,
               fb: { fr: "Haha 🔥😄 ! La cheminée, c'est pour faire du feu et avoir chaud. Posez plutôt une question pratique, sur les draps par exemple.", tr: "Haha 🔥😄! Şömine ateş yakıp ısınmak içindir. Bunun yerine pratik bir soru sorun, örneğin çarşaflar hakkında.", en: "Haha 🔥😄! A fireplace is for making a fire and keeping warm. Ask something practical instead, like about sheets." } }
           ] },
      e2: { say: [["F", "Oui, il y a un grand lit dans la chambre, et le jardin est très calme."]],
           choices: [
             { fr: "Super ! Et est-ce qu'il y a un grand lit dans la chambre ?", tr: "Süper! Peki odada büyük bir yatak var mı?", en: "Great! And is there a double bed in the bedroom?", ok: false,
               fb: { fr: "Elle vient de répondre « oui » 😄 ! Posez une autre question, par exemple sur les draps.", tr: "Az önce « evet » dedi 😄! Başka bir soru sorun, örneğin çarşaflar hakkında.", en: "She just said « yes » 😄! Ask something else, for example about the sheets." } },
             { fr: "Super ! Et les draps et les serviettes sont fournis ?", tr: "Süper! Peki çarşaf ve havlular veriliyor mu?", en: "Great! And are sheets and towels provided?", ok: true, go: "f" }
           ] },
      f: { say: [["F", "Les draps, oui. Les serviettes, non, il faut les apporter. Le prix, c'est 90 € la nuit, donc 180 € pour les deux nuits."]],
           choices: [
             { fr: "180 € la nuit ? C'est trop cher pour nous ! Vous pourriez faire un prix ?", tr: "Gecesi 180 € mu? Bizim için çok pahalı! İndirim yapabilir misiniz?", en: "€180 a night? It's too expensive for us! Could you lower the price?", ok: false,
               fb: { fr: "Écoutez bien : c'est 90 € la nuit, 180 € pour deux nuits 🧮. Ouf !", tr: "İyi dinleyin: gecesi 90 €, iki gece 180 € 🧮. Oh be!", en: "Listen carefully: 90 € a night, 180 € for two nights 🧮. Phew!" } },
             { fr: "D'accord, ça me va. J'apporterai les serviettes.", tr: "Tamam, uygun. Havluları ben getiririm.", en: "OK, that's fine. I'll bring the towels.", ok: true, go: "g" },
             { fr: "C'est un peu cher pour nous… Vous pourriez faire un petit prix ?", tr: "Bizim için biraz pahalı… Biraz indirim yapabilir misiniz?", en: "It's a bit expensive for us… Could you give us a better price?", ok: true, go: "f2" }
           ] },
      f2: { say: [["F", "Hmm… Je peux vous faire 170 €. Et je vous offre un pot de confiture maison !"]],
           choices: [
             { fr: "C'est très gentil, merci beaucoup !", tr: "Çok naziksiniz, çok teşekkürler!", en: "That's very kind, thank you very much!", ok: true, go: "g" },
             { fr: "Merci, mais je préfère la confiture du supermarché.", tr: "Teşekkürler ama süpermarket reçelini tercih ederim.", en: "Thanks, but I prefer supermarket jam.", ok: false,
               fb: { fr: "Aïe, elle va être vexée 😅 ! Un cadeau, on l'accepte avec un sourire : « c'est très gentil ! ».", tr: "Ay, alınacak 😅! Hediye gülümseyerek kabul edilir: « c'est très gentil ! ».", en: "Ouch, she'll be offended 😅! You accept a gift with a smile: « c'est très gentil ! »." } }
           ] },
      g: { say: [["F", "Pour confirmer, je vous demande un acompte de 50 € par virement. Je vous envoie mes coordonnées bancaires par e-mail ?"]],
           choices: [
             { fr: "Un acompte ? Mais je n'ai pas de compte Instagram, s'il vous plaît !", tr: "Kapora mı? Ama Instagram hesabım yok, lütfen!", en: "A deposit? But I don't have an Instagram account, please!", ok: false,
               fb: { fr: "😄 Un « acompte », c'est une partie du prix qu'on paie avant. Rien à voir avec les réseaux sociaux !", tr: "😄 « Acompte », önceden ödenen fiyatın bir kısmı, yani kapora. Sosyal medyayla ilgisi yok!", en: "😄 An « acompte » is part of the price paid in advance, a deposit. Nothing to do with social media!" } },
             { fr: "Oui, s'il vous plaît. Je vais vous épeler mon adresse e-mail.", tr: "Evet, lütfen. E-posta adresimi size harf harf söyleyeceğim.", en: "Yes, please. I'll spell my email address for you.", ok: true, go: "h" },
             { fr: "Oui, s'il vous plaît. Je vous enverrai vos coordonnées bancaires.", tr: "Evet, lütfen. Size banka bilgilerinizi göndereceğim.", en: "Yes, please. I'll send you your bank details.", ok: false,
               fb: { fr: "Elle connaît déjà ses coordonnées 😄 ! C'est elle qui envoie. Donnez-lui votre adresse e-mail.", tr: "Kendi bilgilerini zaten biliyor 😄! Gönderen o. Ona e-posta adresinizi verin.", en: "She already knows her own details 😄! She's the one sending. Give her your email address." } }
           ] },
      h: { scene: { fr: "Vous épelez votre adresse. Elle note tout.", tr: "Adresinizi harf harf söylüyorsunuz. Her şeyi not ediyor.", en: "You spell out your address. She writes it all down." },
           say: [["F", "C'est noté. Et vers quelle heure pensez-vous arriver le vendredi ?"]],
           choices: [
             { fr: "Nous sommes arrivés vers 18 h, s'il n'y a pas trop de circulation.", tr: "Trafik çok yoksa saat 18 civarı vardık.", en: "We arrived around 6 p.m., if there isn't too much traffic.", ok: false,
               fb: { fr: "Vous êtes déjà là ? 😄 C'est pour le vendredi 19 : utilisez le futur, « nous arriverons vers 18 h ».", tr: "Zaten orada mısınız? 😄 Bu, 19'u cuma için: gelecek zaman kullanın, « nous arriverons vers 18 h ».", en: "Are you already there? 😄 It's for Friday the 19th: use the future, « nous arriverons vers 18 h »." } },
             { fr: "Nous arriverons vers 18 h, s'il n'y a pas trop de circulation.", tr: "Trafik çok yoğun olmazsa saat 18 civarında varırız.", en: "We'll arrive around 6 p.m., if the traffic isn't too bad.", ok: true, go: "i" }
           ] },
      i: { say: [["F", "Parfait, je vous attendrai avec les clés. Bonne journée, madame !"]],
           choices: [
             { fr: "Merci beaucoup, bonne nuit, madame ! À bientôt !", tr: "Çok teşekkürler, iyi geceler hanımefendi! Görüşmek üzere!", en: "Thank you very much, good night, madam! See you soon!", ok: false,
               fb: { fr: "C'est la journée, pas l'heure de dormir 😴😄. Dites « merci, bonne journée à vous aussi ! ».", tr: "Gündüz vakti, uyku saati değil 😴😄. « Merci, bonne journée à vous aussi ! » deyin.", en: "It's daytime, not bedtime 😴😄. Say « merci, bonne journée à vous aussi ! »." } },
             { fr: "Merci beaucoup, bonne journée à vous aussi ! À bientôt !", tr: "Çok teşekkürler, size de iyi günler! Görüşmek üzere!", en: "Thank you very much, have a nice day too! See you soon!", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["F", "À bientôt, et bon voyage !"]],
             scene: { fr: "Le gîte est réservé ! Bientôt un week-end au calme, avec le jardin et la cheminée. Bravo ! 🏡🎉", tr: "Kır evi ayrıldı! Yakında bahçe ve şömineyle sakin bir hafta sonu. Bravo! 🏡🎉", en: "The cottage is booked! Soon a quiet weekend with the garden and the fireplace. Well done! 🏡🎉" } }
    } },

  /* ───────────── 18. France Travail ───────────── */
  { id: "av-france-travail", level: "A2", emoji: "💼",
    t: { fr: "Rendez-vous à France Travail", tr: "France Travail'de randevu", en: "Appointment at France Travail" },
    goal: { fr: "Présentez votre parcours et votre projet à la conseillère, et inscrivez-vous à un atelier.", tr: "Danışmana geçmişinizi ve planınızı anlatın ve bir atölyeye kaydolun.", en: "Present your background and plans to the adviser, and sign up for a workshop." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous avez rendez-vous à France Travail à 10 h. Vous arrivez à l'accueil.", tr: "Saat 10'da France Travail'de (iş ve işçi bulma kurumu) randevunuz var. Danışmaya geliyorsunuz.", en: "You have an appointment at France Travail (the job centre) at 10 a.m. You arrive at reception." },
           say: [["M", "Bonjour madame. Vous avez rendez-vous ?"]],
           choices: [
             { fr: "Bonjour, oui, j'ai rendez-vous à 10 h avec Mme Morel.", tr: "Merhaba, evet, saat 10'da Bayan Morel ile randevum var.", en: "Hello, yes, I have an appointment at 10 with Mrs Morel.", ok: true, go: "b" },
             { fr: "Bonjour, oui, j'ai un rendez-vous galant à 10 h avec Mme Morel.", tr: "Merhaba, evet, saat 10'da Bayan Morel ile romantik bir buluşmam var.", en: "Hello, yes, I have a romantic date at 10 with Mrs Morel.", ok: false,
               fb: { fr: "Un rendez-vous galant, c'est avec un amoureux 💘😄 ! Ici, c'est un rendez-vous avec une conseillère.", tr: "« Rendez-vous galant » sevgiliyle buluşmadır 💘😄! Burada bir danışmanla randevu söz konusu.", en: "A « rendez-vous galant » is a romantic date 💘😄! Here it's an appointment with an adviser." } },
             { fr: "Bonjour, oui, je suis à 10 h avec Mme Morel.", tr: "Merhaba, evet, ben Bayan Morel ile saat 10'um.", en: "Hello, yes, I am 10 o'clock with Mrs Morel.", ok: false,
               fb: { fr: "Vous n'êtes pas une heure ⏰😄 ! Dites « j'ai rendez-vous à 10 h ».", tr: "Siz bir saat değilsiniz ⏰😄! « J'ai rendez-vous à 10 h » deyin.", en: "You're not a time ⏰😄! Say « j'ai rendez-vous à 10 h »." } }
           ] },
      b: { say: [["M", "Très bien. Vous avez une pièce d'identité, s'il vous plaît ?"]],
           choices: [
             { fr: "Oui, j'ai une pièce de 2 euros.", tr: "Evet, 2 euroluk bir madeni param var.", en: "Yes, I have a 2-euro coin.", ok: false,
               fb: { fr: "😄 Une « pièce d'identité », c'est un document : passeport, carte de séjour… pas de la monnaie !", tr: "😄 « Pièce d'identité » bir belgedir: pasaport, oturma kartı… bozuk para değil!", en: "😄 A « pièce d'identité » is an ID document: passport, residence permit… not a coin!" } },
             { fr: "Oui, voici mon titre de séjour.", tr: "Evet, işte oturma iznim.", en: "Yes, here's my residence permit.", ok: true, go: "c" },
             { fr: "Oui, voilà mon passeport.", tr: "Evet, buyurun pasaportum.", en: "Yes, here's my passport.", ok: true, go: "c" }
           ] },
      c: { scene: { fr: "Mme Morel vient vous chercher. Vous vous asseyez dans son bureau.", tr: "Bayan Morel sizi almaya geliyor. Ofisine geçip oturuyorsunuz.", en: "Mrs Morel comes to get you. You sit down in her office." },
           say: [["F", "Bonjour madame. Alors, parlez-moi un peu de votre parcours."]],
           choices: [
             { fr: "Mon parcours ? Je cours 5 km le matin, avant d'aller au travail.", tr: "Parkurum mu? Sabahları işe gitmeden önce 5 km koşuyorum.", en: "My route? I run 5 km in the morning, before going to work.", ok: false,
               fb: { fr: "Bravo pour le sport 🏃‍♀️😄 ! Mais ici, « parcours » = vos études et votre expérience.", tr: "Spor için bravo 🏃‍♀️😄! Ama burada « parcours » = eğitiminiz ve deneyiminiz.", en: "Well done on the running 🏃‍♀️😄! But here « parcours » = your studies and experience." } },
             { fr: "J'ai étudié la kiné en Turquie et j'ai travaillé avec une équipe de handball.", tr: "Türkiye'de fizyoterapi okudum ve bir hentbol takımıyla çalıştım.", en: "I studied physio in Turkey and worked with a handball team.", ok: true, go: "d" },
             { fr: "J'ai faisé des études de kiné en Turquie, avec une équipe de handball.", tr: "Türkiye'de fizyoterapi eğitimi yaptım, bir hentbol takımıyla.", en: "I doed physio studies in Turkey, with a handball team.", ok: false,
               fb: { fr: "Bonne idée, mais le participe de « faire » est irrégulier : « j'ai fait des études » 😉.", tr: "İyi fikir ama « faire »in ortacı düzensiz: « j'ai fait des études » 😉.", en: "Good idea, but the participle of « faire » is irregular: « j'ai fait des études » 😉." } }
           ] },
      d: { say: [["F", "C'est très intéressant ! Et en France, votre diplôme est reconnu ?"]],
           choices: [
             { fr: "Oui, il me reconnaît, il me dit bonjour. Je travaille dans une salle de sport.", tr: "Evet, beni tanıyor, bana merhaba diyor. Bir spor salonunda çalışıyorum.", en: "Yes, it recognises me, it says hello. I work at a gym.", ok: false,
               fb: { fr: "Un diplôme poli 😄 ! « Reconnu » = accepté officiellement en France. Répondez « non, pas encore ».", tr: "Kibar bir diploma 😄! « Reconnu » = Fransa'da resmî olarak kabul edilmiş. « Non, pas encore » diye cevap verin.", en: "A polite diploma 😄! « Reconnu » = officially accepted in France. Answer « non, pas encore »." } },
             { fr: "Non, pas encore. Alors je travaille à l'accueil d'une salle de sport.", tr: "Hayır, henüz değil. O yüzden bir spor salonunun resepsiyonunda çalışıyorum.", en: "No, not yet. So I work at the front desk of a gym.", ok: true, go: "e" }
           ] },
      e: { say: [["F", "D'accord. Et quel est votre projet professionnel ?"]],
           choices: [
             { fr: "J'aimerais reprendre des études : d'abord STAPS, puis kiné.", tr: "Tekrar okumak istiyorum: önce STAPS, sonra fizyoterapi.", en: "I'd like to go back to studying: first STAPS, then physio.", ok: true, go: "f" },
             { fr: "Mon projet ? Les vacances, et après, je verrai !", tr: "Projem mi? Tatil, sonrasına bakarız!", en: "My project? Holidays, and then we'll see!", ok: false,
               fb: { fr: "On en rêve tous 🏖️😄 ! Mais elle parle de votre avenir professionnel : études, métier…", tr: "Hepimiz bunu hayal ediyoruz 🏖️😄! Ama mesleki geleceğinizden bahsediyor: eğitim, meslek…", en: "We all dream of it 🏖️😄! But she means your career plans: studies, job…" } },
             { fr: "D'abord, j'aimerais améliorer mon français. Après, je voudrais reprendre des études.", tr: "Önce Fransızcamı geliştirmek istiyorum. Sonra tekrar okumak istiyorum.", en: "First, I'd like to improve my French. Then I'd like to go back to studying.", ok: true, go: "f2" }
           ] },
      f: { say: [["F", "C'est un beau projet. Pour l'université, il faut un bon niveau de français. Vous prenez des cours ?"]],
           choices: [
             { fr: "Oui, je prends des courses deux fois par semaine, avec une application.", tr: "Evet, haftada iki kez alışveriş alıyorum, bir uygulamayla.", en: "Yes, I take shopping twice a week, with an app.", ok: false,
               fb: { fr: "Attention : « les courses » = acheter à manger 🛒 ! Pour apprendre, ce sont « des cours ».", tr: "Dikkat: « les courses » = yiyecek alışverişi 🛒! Öğrenmek için « des cours » denir.", en: "Careful: « les courses » = grocery shopping 🛒! For learning, it's « des cours »." } },
             { fr: "Oui, deux fois par semaine. Et j'apprends aussi avec une application.", tr: "Evet, haftada iki kez. Ayrıca bir uygulamayla da öğreniyorum.", en: "Yes, twice a week. And I also learn with an app.", ok: true, go: "g" }
           ] },
      f2: { say: [["F", "Excellente idée. Nous proposons des ateliers de français pour le travail. Ça vous intéresserait ?"]],
           choices: [
             { fr: "Oui, je suis très intéressante !", tr: "Evet, ben çok ilginç biriyim!", en: "Yes, I'm very interesting!", ok: false,
               fb: { fr: "C'est sûrement vrai 😄 ! Mais « intéressante » = qui intéresse les autres. Ici, dites « je suis très intéressée ».", tr: "Muhtemelen doğru 😄! Ama « intéressante » = başkalarının ilgisini çeken. Burada « je suis très intéressée » deyin.", en: "Probably true 😄! But « intéressante » = interesting to others. Here say « je suis très intéressée »." } },
             { fr: "Oui, beaucoup ! C'est gratuit ?", tr: "Evet, çok! Ücretsiz mi?", en: "Yes, very much! Is it free?", ok: true, go: "g" }
           ] },
      g: { say: [["F", "Nos ateliers sont gratuits. Je vais aussi vous inscrire à un atelier CV. Vous avez un CV en français ?"]],
           choices: [
             { fr: "J'en ai un, mais je pense qu'il y a des fautes.", tr: "Bir tane var ama sanırım hatalar var.", en: "I have one, but I think there are some mistakes.", ok: true, go: "h" },
             { fr: "Oui, mon CV fait 15 pages !", tr: "Evet, CV'm 15 sayfa!", en: "Yes, my CV is 15 pages long!", ok: false,
               fb: { fr: "15 pages ? La conseillère va avoir besoin d'un café ☕😄. En France, un CV fait une page, deux maximum.", tr: "15 sayfa mı? Danışmanın bir kahveye ihtiyacı olacak ☕😄. Fransa'da CV bir sayfa, en fazla iki sayfa olur.", en: "15 pages? The adviser will need a coffee ☕😄. In France a CV is one page, two at most." } },
             { fr: "Pas encore. J'ai seulement un CV en anglais.", tr: "Henüz yok. Sadece İngilizce bir CV'm var.", en: "Not yet. I only have a CV in English.", ok: true, go: "h" }
           ] },
      h: { say: [["F", "Ce n'est pas grave, l'atelier est fait pour ça. Il a lieu le mardi 15 à 14 h. Ça vous convient ?"]],
           choices: [
             { fr: "Le mardi, je travaille le matin, donc 14 h, c'est parfait.", tr: "Salı günleri sabah çalışıyorum, yani saat 14 mükemmel.", en: "On Tuesdays I work in the morning, so 2 p.m. is perfect.", ok: true, go: "i" },
             { fr: "14 h ? C'est 4 h de l'après-midi, non ?", tr: "Saat 14 mü? Öğleden sonra 4, değil mi?", en: "14:00? That's 4 in the afternoon, right?", ok: false,
               fb: { fr: "Petit calcul 🧮 : 14 h = 2 h de l'après-midi. Vérifiez votre emploi du temps et répondez !", tr: "Küçük bir hesap 🧮: saat 14 = öğleden sonra 2. Programınıza bakıp cevap verin!", en: "Quick maths 🧮: 14:00 = 2 p.m. Check your schedule and answer!" } },
             { fr: "Ce jour-là, je travaille. Est-ce qu'il y a une autre date ?", tr: "O gün çalışıyorum. Başka bir tarih var mı?", en: "I'm working that day. Is there another date?", ok: true, go: "h2" }
           ] },
      h2: { say: [["F", "Oui, il y a aussi le jeudi 17 à 9 h 30."]],
           choices: [
             { fr: "Le jeudi 17 à 9 h 30, c'est parfait. Je note !", tr: "17'si perşembe saat 9.30, mükemmel. Not alıyorum!", en: "Thursday 17th at 9:30 is perfect. I'll write it down!", ok: true, go: "i" },
             { fr: "Jeudi, c'est le jour après dimanche ? D'accord, je note !", tr: "Perşembe, pazardan sonraki gün mü? Tamam, not alıyorum!", en: "Is Thursday the day after Sunday? OK, I'll write it down!", ok: false,
               fb: { fr: "Non, après dimanche, c'est lundi 😉. Lundi, mardi, mercredi, jeudi ! Acceptez la date.", tr: "Hayır, pazardan sonra pazartesi gelir 😉. Pazartesi, salı, çarşamba, perşembe! Tarihi kabul edin.", en: "No, after Sunday comes Monday 😉. Lundi, mardi, mercredi, jeudi! Accept the date." } }
           ] },
      i: { say: [["F", "Très bien. Vous recevrez la convocation dans votre espace en ligne. Vous avez d'autres questions ?"]],
           choices: [
             { fr: "Vous avez un travail pour moi, là, maintenant ?", tr: "Benim için bir işiniz var mı, şimdi, hemen?", en: "Do you have a job for me, right here, right now?", ok: false,
               fb: { fr: "On comprend l'envie 😄 ! Mais une étape à la fois : l'atelier d'abord. Remerciez la conseillère.", tr: "İsteğinizi anlıyoruz 😄! Ama adım adım: önce atölye. Danışmana teşekkür edin.", en: "We get it 😄! But one step at a time: the workshop first. Thank the adviser." } },
             { fr: "Non, c'est très clair. Merci beaucoup pour votre aide !", tr: "Hayır, her şey çok açık. Yardımınız için çok teşekkürler!", en: "No, it's all very clear. Thank you very much for your help!", ok: true, go: "fin" },
             { fr: "Non merci, je n'ai pas d'espace en ligne. Au revoir !", tr: "Hayır teşekkürler, çevrimiçi alanım yok. Hoşça kalın!", en: "No thanks, I don't have an online space. Goodbye!", ok: false,
               fb: { fr: "L'« espace en ligne », c'est votre compte sur le site 💻. Vous l'avez déjà ! Dites merci et au revoir.", tr: "« Espace en ligne », sitedeki hesabınız 💻. Zaten var! Teşekkür edip vedalaşın.", en: "The « espace en ligne » is your account on the website 💻. You already have one! Say thanks and goodbye." } }
           ] },
      fin: { end: "win", say: [["F", "Avec plaisir. Bon courage pour votre projet, madame !"]],
             scene: { fr: "Vous sortez avec un plan clair et un atelier dans l'agenda. Un petit pas, mais un vrai pas ! Bravo ! 💼🎉", tr: "Net bir planla ve ajandanızda bir atölyeyle çıkıyorsunuz. Küçük ama gerçek bir adım! Bravo! 💼🎉", en: "You leave with a clear plan and a workshop in your diary. A small step, but a real one! Well done! 💼🎉" } }
    } },

  /* ───────────── 19. Une panne sur la route ───────────── */
  { id: "av-panne-voiture", level: "A2", emoji: "🚗",
    t: { fr: "Une panne sur la route", tr: "Yolda arıza", en: "A breakdown on the road" },
    goal: { fr: "Appelez l'assistance, expliquez où vous êtes et ce qui s'est passé, puis parlez avec le dépanneur.", tr: "Yol yardımını arayın, nerede olduğunuzu ve ne olduğunu anlatın, sonra çekici şoförüyle konuşun.", en: "Call roadside assistance, explain where you are and what happened, then talk to the mechanic." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous êtes sur une petite route de campagne. Tout à coup, la voiture fait un bruit bizarre et s'arrête. Vous appelez l'assistance.", tr: "Küçük bir köy yolundasınız. Birden araba garip bir ses çıkarıyor ve duruyor. Yol yardımını arıyorsunuz.", en: "You're on a small country road. Suddenly the car makes a strange noise and stops. You call roadside assistance." },
           say: [["F", "Assistance Auto, bonjour. Je vous écoute."]],
           choices: [
             { fr: "Bonjour, ma voiture est tombée malade sur la route.", tr: "Merhaba, arabam yolda hastalandı.", en: "Hello, my car fell ill on the road.", ok: false,
               fb: { fr: "Pauvre voiture 🚗🤒😄 ! Pour une voiture, on dit « elle est tombée en panne ».", tr: "Zavallı araba 🚗🤒😄! Araba için « elle est tombée en panne » (arızalandı) denir.", en: "Poor car 🚗🤒😄! For a car, say « elle est tombée en panne »." } },
             { fr: "Bonjour, ma voiture est tombée en panne sur la route.", tr: "Merhaba, arabam yolda arızalandı.", en: "Hello, my car has broken down on the road.", ok: true, go: "b" },
             { fr: "Bonjour, ma voiture a cassé sur la route, elle ne roule plus.", tr: "Merhaba, arabam yolda kırdı, artık gitmiyor.", en: "Hello, my car has broke on the road, it won't go any more.", ok: false,
               fb: { fr: "Elle a cassé quoi ? 😄 On dit « ma voiture est tombée en panne » ou « elle ne démarre plus ».", tr: "Neyi kırdı? 😄 « Ma voiture est tombée en panne » ya da « elle ne démarre plus » denir.", en: "Broke what? 😄 Say « ma voiture est tombée en panne » or « elle ne démarre plus »." } }
           ] },
      b: { say: [["F", "D'accord. D'abord, vous êtes en sécurité ? Vous avez mis votre gilet jaune ?"]],
           choices: [
             { fr: "Oui, je suis sur le bas-côté, avec le gilet et le triangle.", tr: "Evet, yol kenarındayım, yelek ve üçgen yanımda.", en: "Yes, I'm on the verge, with my vest and the warning triangle.", ok: true, go: "c" },
             { fr: "Oui, j'ai mis le gilet et le triangle dans le coffre.", tr: "Evet, yeleği ve üçgeni bagaja koydum.", en: "Yes, I've put the vest and the triangle in the boot.", ok: false,
               fb: { fr: "Dans le coffre, il ne vous protège pas 🦺😄 ! Le gilet jaune, on le porte sur soi.", tr: "Bagajda sizi korumaz 🦺😄! Sarı yelek üstünüze giyilir.", en: "In the boot it doesn't protect you 🦺😄! You wear the yellow vest." } },
             { fr: "Pas encore… Attendez, je le mets tout de suite !", tr: "Henüz değil… Bekleyin, hemen giyiyorum!", en: "Not yet… Wait, I'm putting it on right now!", ok: true, go: "c" }
           ] },
      c: { say: [["F", "Très bien. Où est-ce que vous vous trouvez exactement ?"]],
           choices: [
             { fr: "Je me trouve très bien, merci.", tr: "Kendimi çok iyi buluyorum, teşekkürler.", en: "I find myself very well, thanks.", ok: false,
               fb: { fr: "Content que le moral soit bon 😄 ! Mais « se trouver » = être quelque part. Elle veut savoir où vous êtes.", tr: "Moralinizin iyi olmasına sevindik 😄! Ama « se trouver » = bir yerde olmak. Nerede olduğunuzu soruyor.", en: "Glad you're in good spirits 😄! But « se trouver » = to be somewhere. She wants to know where you are." } },
             { fr: "Sur la D12, entre Saint-Rémy et Lagnes. Je viens de passer un petit pont.", tr: "D12'de, Saint-Rémy ile Lagnes arasında. Küçük bir köprüyü yeni geçtim.", en: "On the D12, between Saint-Rémy and Lagnes. I've just passed a little bridge.", ok: true, go: "d" },
             { fr: "Je ne sais pas exactement… Je peux vous envoyer ma position par SMS ?", tr: "Tam bilmiyorum… Konumumu size SMS ile gönderebilir miyim?", en: "I don't know exactly… Can I send you my location by text?", ok: true, go: "c2" }
           ] },
      c2: { say: [["F", "Oui, bien sûr. Je vous envoie un lien, cliquez dessus et acceptez la localisation."]],
           choices: [
             { fr: "Voilà, je l'ai envoyée. Vous la recevez ?", tr: "İşte, gönderdim. Size geliyor mu?", en: "There, I've sent it. Are you getting it?", ok: true, go: "d" },
             { fr: "Voilà, je l'ai envoyée à ma mère. Vous la recevez ?", tr: "İşte, anneme gönderdim. Size ulaştı mı?", en: "There, I sent it to my mum. Are you getting it?", ok: false,
               fb: { fr: "Votre maman va être surprise 😄 ! Cliquez sur le lien de l'assistance : c'est elle qui doit recevoir votre position.", tr: "Anneniz şaşıracak 😄! Yol yardımının linkine tıklayın: konumunuzu onların alması gerekiyor.", en: "Your mum will be surprised 😄! Click the assistance link: they're the ones who need your location." } }
           ] },
      d: { say: [["F", "Parfait, je vous localise. Qu'est-ce qui s'est passé ?"]],
           choices: [
             { fr: "La voiture était fatiguée, alors elle a dormi.", tr: "Araba yorgundu, o yüzden uyudu.", en: "The car was tired, so it went to sleep.", ok: false,
               fb: { fr: "Une sieste au bord de la route 😴🚗 ? Décrivez plutôt : « j'ai entendu un bruit, puis le moteur s'est arrêté ».", tr: "Yol kenarında şekerleme mi 😴🚗? Bunun yerine anlatın: « j'ai entendu un bruit, puis le moteur s'est arrêté ».", en: "A nap by the roadside 😴🚗? Describe it instead: « j'ai entendu un bruit, puis le moteur s'est arrêté »." } },
             { fr: "J'ai entendu un bruit bizarre, puis le moteur a arrêté.", tr: "Garip bir ses duydum, sonra motor durdurdu.", en: "I heard a strange noise, then the engine stopped.", ok: false,
               fb: { fr: "Presque ! « S'arrêter » est pronominal, donc avec « être » : « le moteur s'est arrêté » 😉.", tr: "Az kaldı! « S'arrêter » dönüşlü bir fiil, yani « être » ile: « le moteur s'est arrêté » 😉.", en: "Almost! « S'arrêter » is reflexive, so it takes « être »: « le moteur s'est arrêté » 😉." } },
             { fr: "J'ai entendu un bruit bizarre, puis le moteur s'est arrêté.", tr: "Garip bir ses duydum, sonra motor durdu.", en: "I heard a strange noise, then the engine stopped.", ok: true, go: "e" }
           ] },
      e: { say: [["F", "Est-ce qu'il y a un voyant allumé sur le tableau de bord ?"]],
           choices: [
             { fr: "Oui, un voyant rouge avec une petite batterie.", tr: "Evet, küçük bir akü resmi olan kırmızı bir ışık.", en: "Yes, a red light with a little battery on it.", ok: true, go: "f" },
             { fr: "Oui, il y a un voyant : il lit l'avenir !", tr: "Evet, bir falcı var: geleceği okuyor!", en: "Yes, there's a fortune teller: he reads the future!", ok: false,
               fb: { fr: "Haha 🔮 ! « Un voyant » peut être une personne qui lit l'avenir… mais dans une voiture, c'est une petite lumière d'alerte.", tr: "Haha 🔮! « Voyant » falcı da olabilir… ama arabada küçük bir uyarı ışığıdır.", en: "Haha 🔮! « Un voyant » can be a fortune teller… but in a car it's a little warning light." } },
             { fr: "Je ne sais pas, je ne vois rien de spécial.", tr: "Bilmiyorum, özel bir şey görmüyorum.", en: "I don't know, I can't see anything special.", ok: true, go: "f" }
           ] },
      f: { say: [["F", "D'accord. Je vous envoie une dépanneuse. Elle arrivera dans 45 minutes environ."]],
           choices: [
             { fr: "D'accord, j'attendrai en sécurité, loin de la route.", tr: "Tamam, güvenli bir yerde, yoldan uzakta bekleyeceğim.", en: "OK, I'll wait somewhere safe, away from the road.", ok: true, go: "g" },
             { fr: "Merci, j'attendrai dans la voiture, au milieu de la route.", tr: "Teşekkürler, yolun ortasında, arabada bekleyeceğim.", en: "Thanks, I'll wait in the car, in the middle of the road.", ok: false,
               fb: { fr: "Trop dangereux 😬 ! On attend en sécurité, loin de la route.", tr: "Çok tehlikeli 😬! Güvenli bir yerde, yoldan uzakta beklenir.", en: "Too dangerous 😬! Wait somewhere safe, away from the road." } },
             { fr: "45 minutes ? C'est long… Il n'y a pas plus rapide ?", tr: "45 dakika mı? Uzun… Daha hızlısı yok mu?", en: "45 minutes? That's long… Is there nothing faster?", ok: true, go: "f2" }
           ] },
      f2: { say: [["F", "Désolée, c'est dimanche, il y a peu de dépanneurs. Mais je peux rester en ligne avec vous, si vous voulez."]],
           choices: [
             { fr: "C'est gentil, merci, mais ça va aller. J'attendrai en sécurité.", tr: "Çok naziksiniz, teşekkürler ama idare ederim. Güvenli bir yerde bekleyeceğim.", en: "That's kind, thanks, but I'll be fine. I'll wait somewhere safe.", ok: true, go: "g" },
             { fr: "Merci, mais je vais pousser la voiture jusqu'au garage.", tr: "Teşekkürler ama arabayı garaja kadar iteceğim.", en: "Thanks, but I'll push the car to the garage.", ok: false,
               fb: { fr: "Bon entraînement musculaire 💪😄, mais le garage est à 20 km ! Attendez la dépanneuse en sécurité.", tr: "İyi bir kas antrenmanı 💪😄, ama garaj 20 km uzakta! Çekiciyi güvenli bir yerde bekleyin.", en: "Great strength training 💪😄, but the garage is 20 km away! Wait for the tow truck somewhere safe." } }
           ] },
      g: { scene: { fr: "45 minutes plus tard, une dépanneuse s'arrête. Un homme descend.", tr: "45 dakika sonra bir çekici duruyor. Bir adam iniyor.", en: "45 minutes later a tow truck pulls up. A man gets out." },
           say: [["M", "Bonjour madame ! C'est vous, la panne ?"]],
           choices: [
             { fr: "Oui, je suis la panne ! Merci d'être venu.", tr: "Evet, arıza benim! Geldiğiniz için teşekkürler.", en: "Yes, I'm the breakdown! Thanks for coming.", ok: false,
               fb: { fr: "Ce n'est pas vous qui êtes en panne 😄, c'est la voiture ! Dites « oui, c'est ma voiture ».", tr: "Arızalı olan siz değilsiniz 😄, araba! « Oui, c'est ma voiture » deyin.", en: "You're not the one broken down 😄, it's the car! Say « oui, c'est ma voiture »." } },
             { fr: "Oui, c'est ma voiture ! Merci d'être venu.", tr: "Evet, benim arabam! Geldiğiniz için teşekkürler.", en: "Yes, it's my car! Thanks for coming.", ok: true, go: "h" }
           ] },
      h: { scene: { fr: "Il ouvre le capot et regarde le moteur.", tr: "Kaputu açıp motora bakıyor.", en: "He opens the bonnet and looks at the engine." },
           say: [["M", "C'est la batterie. Je peux la recharger ici, ou remorquer la voiture au garage."]],
           choices: [
             { fr: "La batterie ? Mais je ne joue pas de musique !", tr: "Bateri mi? Ama ben müzik çalmıyorum!", en: "The drums? But I don't play music!", ok: false,
               fb: { fr: "🥁😄 « La batterie » = l'instrument de musique, mais aussi la batterie de la voiture. Choisissez une solution !", tr: "🥁😄 « La batterie » = bateri (müzik aleti), ama aynı zamanda araba aküsü. Bir çözüm seçin!", en: "🥁😄 « La batterie » = drums, but also the car battery. Choose a solution!" } },
             { fr: "Si vous pouvez la recharger ici, ce serait parfait.", tr: "Burada şarj edebilirseniz, mükemmel olur.", en: "If you can recharge it here, that would be perfect.", ok: true, go: "i" },
             { fr: "Je préfère aller au garage, pour tout vérifier.", tr: "Her şeyi kontrol ettirmek için garaja gitmeyi tercih ederim.", en: "I'd rather go to the garage, to have everything checked.", ok: true, go: "i" }
           ] },
      i: { say: [["M", "Pas de problème. Mais attention : votre batterie est vieille. Changez-la bientôt !"]],
           choices: [
             { fr: "Promis, je l'ai changée la semaine prochaine. Merci beaucoup !", tr: "Söz, gelecek hafta değiştirdim. Çok teşekkürler!", en: "Promise, I changed it next week. Thank you very much!", ok: false,
               fb: { fr: "Passé + « la semaine prochaine » ? Il faut une machine à remonter le temps ⏳😄. Dites « je la changerai la semaine prochaine ».", tr: "Geçmiş zaman + « la semaine prochaine » mı? Zaman makinesi lazım ⏳😄. « Je la changerai la semaine prochaine » deyin.", en: "Past tense + « la semaine prochaine »? You'd need a time machine ⏳😄. Say « je la changerai la semaine prochaine »." } },
             { fr: "Promis, je la changerai très vite. Merci beaucoup !", tr: "Söz, en kısa zamanda değiştireceğim. Çok teşekkürler!", en: "I promise, I'll change it very soon. Thank you so much!", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["M", "De rien, madame. Bonne fin de journée, et prudence !"]],
             scene: { fr: "Ouf, tout est réglé ! Vous avez géré une panne en français, sans paniquer. Bravo ! 🚗🎉", tr: "Oh be, her şey halloldu! Panik yapmadan Fransızca bir arızayı hallettiniz. Bravo! 🚗🎉", en: "Phew, all sorted! You handled a breakdown in French without panicking. Well done! 🚗🎉" } }
    } },

  /* ───────────── 20. Raclette chez les voisins ───────────── */
  { id: "av-raclette", level: "A2", emoji: "🧀",
    t: { fr: "Une raclette chez les voisins", tr: "Komşularda raclette", en: "Raclette at the neighbours'" },
    goal: { fr: "Passez une bonne soirée raclette chez vos voisins Sophie et Marc.", tr: "Komşularınız Sophie ve Marc'ta güzel bir raclette akşamı geçirin.", en: "Have a nice raclette evening at your neighbours Sophie and Marc's." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Samedi, 19 h 30. Vous sonnez chez vos voisins, Sophie et Marc. Ça sent le fromage fondu !", tr: "Cumartesi, saat 19.30. Komşularınız Sophie ve Marc'ın kapısını çalıyorsunuz. Erimiş peynir kokuyor!", en: "Saturday, 7:30 p.m. You ring your neighbours Sophie and Marc's doorbell. It smells of melted cheese!" },
           say: [["F", "Bonsoir ! Entrez, entrez ! Donnez-moi votre manteau."]],
           choices: [
             { fr: "Bonsoir ! Merci. Tenez, j'ai apporté des loukoums de Turquie.", tr: "İyi akşamlar! Teşekkürler. Buyurun, Türkiye'den lokum getirdim.", en: "Good evening! Thanks. Here, I've brought some Turkish delight.", ok: true, go: "b" },
             { fr: "Bonsoir ! Merci. Désolée, j'ai apporté rien.", tr: "İyi akşamlar! Teşekkürler. Üzgünüm, hiçbir şey getirdim.", en: "Good evening! Thanks. Sorry, I brought nothing.", ok: false,
               fb: { fr: "Attention à la négation : « je n'ai rien apporté ». Mais un petit cadeau, c'est encore mieux 🎁😉 !", tr: "Olumsuzluğa dikkat: « je n'ai rien apporté ». Ama küçük bir hediye daha da iyi 🎁😉!", en: "Watch the negation: « je n'ai rien apporté ». But a little gift is even better 🎁😉!" } },
             { fr: "Bonsoir ! Merci. J'enlève mes chaussures ?", tr: "İyi akşamlar! Teşekkürler. Ayakkabılarımı çıkarayım mı?", en: "Good evening! Thanks. Shall I take my shoes off?", ok: true, go: "a2" }
           ] },
      a2: { say: [["F", "Comme vous voulez ! En France, beaucoup de gens gardent leurs chaussures. Mais j'ai des chaussons, si vous préférez."]],
           choices: [
             { fr: "Des chaussons ? Aux pommes ? Merci beaucoup !", tr: "Chausson mu? Elmalı mı? Çok teşekkürler!", en: "Slippers? Apple turnovers? Thank you very much!", ok: false,
               fb: { fr: "Haha 🍏😄 ! Le chausson aux pommes est une pâtisserie, mais ici, ce sont des pantoufles. Répondez à Sophie !", tr: "Haha 🍏😄! « Chausson aux pommes » bir hamur tatlısı ama burada terlik demek. Sophie'ye cevap verin!", en: "Haha 🍏😄! A « chausson aux pommes » is a pastry, but here it means slippers. Answer Sophie!" } },
             { fr: "Oh, des chaussons, super ! Merci beaucoup.", tr: "Ah, terlik, süper! Çok teşekkürler.", en: "Oh, slippers, great! Thanks a lot.", ok: true, go: "b" },
             { fr: "Merci, alors je garde mes chaussures.", tr: "Teşekkürler, o zaman ayakkabılarımı çıkarmıyorum.", en: "Thanks, I'll keep my shoes on then.", ok: true, go: "b" }
           ] },
      b: { say: [["M", "Bienvenue ! Dis, on se tutoie ? On est voisins, après tout !"]],
           choices: [
             { fr: "Oui, avec plaisir ! Merci pour l'invitation, vous êtes très gentil.", tr: "Evet, memnuniyetle! Davetiniz için teşekkürler, çok naziksiniz.", en: "Yes, with pleasure! Thanks for the invitation, you're very kind.", ok: false,
               fb: { fr: "Vous avez dit oui au « tu »… puis vous dites « vous » 😄 ! Essayez : « tu es très gentil ».", tr: "« Tu »ya evet dediniz… sonra « vous » dediniz 😄! Deneyin: « tu es très gentil ».", en: "You said yes to « tu »… then used « vous » 😄! Try: « tu es très gentil »." } },
             { fr: "Oui, avec plaisir ! Merci pour l'invitation, c'est très gentil.", tr: "Evet, memnuniyetle! Davet için teşekkürler, çok naziksiniz.", en: "Yes, gladly! Thanks for the invitation, it's very kind.", ok: true, go: "c" }
           ] },
      c: { say: [["F", "Tu connais la raclette ?"]],
           choices: [
             { fr: "J'en ai entendu parler, mais je n'en ai jamais mangé.", tr: "Duydum ama hiç yemedim.", en: "I've heard of it, but I've never eaten it.", ok: true, go: "d" },
             { fr: "Oui, c'est un sport de montagne, non ?", tr: "Evet, bir dağ sporu, değil mi?", en: "Yes, it's a mountain sport, isn't it?", ok: false,
               fb: { fr: "Presque 😄 : la raclette vient de la montagne, mais c'est un plat avec du fromage fondu, pas un sport !", tr: "Az kaldı 😄: raclette dağlardan gelir ama bir spor değil, erimiş peynirli bir yemektir!", en: "Close 😄: raclette comes from the mountains, but it's a melted-cheese dish, not a sport!" } },
             { fr: "Oui, j'en ai mangé une fois, à la montagne. J'ai adoré !", tr: "Evet, bir kez dağda yedim. Bayıldım!", en: "Yes, I had it once in the mountains. I loved it!", ok: true, go: "d2" }
           ] },
      d: { say: [["F", "C'est simple : tu mets le fromage dans le petit poêlon, sous l'appareil. Quand il est fondu, tu le verses sur les pommes de terre."]],
           choices: [
             { fr: "D'accord ! Donc je mets mon fromage ici et j'attends ?", tr: "Tamam! Yani peynirimi buraya koyup bekliyorum, öyle mi?", en: "OK! So I put my cheese here and wait?", ok: true, go: "e" },
             { fr: "D'accord ! Donc je fais fondre les pommes de terre ici ?", tr: "Tamam! Yani patatesleri burada eritiyorum?", en: "OK! So I melt the potatoes here?", ok: false,
               fb: { fr: "Des pommes de terre fondues ? Ce serait un miracle 🥔✨😄 ! C'est le fromage qui fond.", tr: "Erimiş patates mi? Mucize olurdu 🥔✨😄! Eriyen peynir.", en: "Melted potatoes? That'd be a miracle 🥔✨😄! It's the cheese that melts." } }
           ] },
      d2: { say: [["M", "Ah, une connaisseuse ! Alors, sers-toi !"]],
           choices: [
             { fr: "Merci ! Servez-vous aussi, Marc !", tr: "Teşekkürler! Siz de alın Marc!", en: "Thanks! Help yourself too, Marc!", ok: false,
               fb: { fr: "On se tutoie maintenant 😉 ! Dites « sers-toi aussi, Marc ! ».", tr: "Artık « tu » diyoruz 😉! « Sers-toi aussi, Marc ! » deyin.", en: "You're on « tu » terms now 😉! Say « sers-toi aussi, Marc ! »." } },
             { fr: "Merci ! Je commence avec le fromage nature.", tr: "Teşekkürler! Sade peynirle başlıyorum.", en: "Thanks! I'll start with the plain cheese.", ok: true, go: "e" }
           ] },
      e: { say: [["M", "Tu veux de la charcuterie avec ton fromage ?"]],
           choices: [
             { fr: "Non merci, je ne mange pas de charcuterie. Les cornichons, oui !", tr: "Hayır teşekkürler, şarküteri yemem. Turşu, evet!", en: "No thanks, I don't eat cured meats. Gherkins, yes!", ok: true, go: "f" },
             { fr: "Oui, je veux toute la charcuterie ! Et les cornichons aussi !", tr: "Evet, bütün şarküteriyi istiyorum! Turşuları da!", en: "Yes, I want all the cured meats! And the gherkins too!", ok: false,
               fb: { fr: "Il faut en laisser pour les autres 😄 ! Dites plutôt « un peu, s'il te plaît ».", tr: "Başkalarına da bırakmak lazım 😄! Bunun yerine « un peu, s'il te plaît » deyin.", en: "Leave some for the others 😄! Say « un peu, s'il te plaît » instead." } },
             { fr: "Juste un peu, s'il te plaît.", tr: "Sadece biraz, lütfen.", en: "Just a little, please.", ok: true, go: "f" }
           ] },
      f: { say: [["F", "Alors, c'est comment ?"]],
           choices: [
             { fr: "C'est bon goût ! J'adore le fromage fondu.", tr: "Bu iyi tat! Erimiş peynire bayılırım.", en: "It's good taste! I love melted cheese.", ok: false,
               fb: { fr: "Presque ! On dit « c'est bon » ou « ça a bon goût » 😋.", tr: "Az kaldı! « C'est bon » ya da « ça a bon goût » denir 😋.", en: "Almost! Say « c'est bon » or « ça a bon goût » 😋." } },
             { fr: "C'est délicieux ! J'adore le fromage fondu.", tr: "Çok lezzetli! Erimiş peynire bayılırım.", en: "It's delicious! I love melted cheese.", ok: true, go: "g" },
             { fr: "C'est comment ? C'est du fromage.", tr: "Nasıl mı? Peynir.", en: "What's it like? It's cheese.", ok: false,
               fb: { fr: "Bien vu 🧀😄 ! Mais elle demande votre avis. Dites « c'est délicieux ! ».", tr: "Doğru tespit 🧀😄! Ama fikrinizi soruyor. « C'est délicieux ! » deyin.", en: "Well spotted 🧀😄! But she wants your opinion. Say « c'est délicieux ! »." } }
           ] },
      g: { say: [["M", "Encore un peu ? Il reste plein de fromage !"]],
           choices: [
             { fr: "Non merci, je suis pleine. C'était vraiment très bon !", tr: "Hayır teşekkürler, ben gebeyim. Gerçekten çok güzeldi!", en: "No thanks, I'm pregnant. It was really good!", ok: false,
               fb: { fr: "Attention 😳 ! « Je suis pleine » se dit pour un animal qui attend des petits. Dites « je n'ai plus faim » ou « j'ai trop mangé ».", tr: "Dikkat 😳! « Je suis pleine » yavru bekleyen bir hayvan için söylenir. « Je n'ai plus faim » ya da « j'ai trop mangé » deyin.", en: "Careful 😳! « Je suis pleine » is said of an animal expecting babies. Say « je n'ai plus faim » or « j'ai trop mangé »." } },
             { fr: "Non merci, je n'ai plus faim. C'était vraiment très bon !", tr: "Hayır teşekkürler, artık aç değilim. Gerçekten çok güzeldi!", en: "No thanks, I'm not hungry any more. It was really good!", ok: true, go: "h" },
             { fr: "Allez, juste une dernière, alors !", tr: "Peki, o zaman son bir tane!", en: "Go on then, just one last one!", ok: true, go: "h" }
           ] },
      h: { say: [["F", "Et chez toi, en Turquie, qu'est-ce qu'on mange en hiver ?"]],
           choices: [
             { fr: "En Turquie, on mange en hiver, et aussi en été !", tr: "Türkiye'de kışın yemek yeriz, yazın da!", en: "In Turkey, we eat in winter, and in summer too!", ok: false,
               fb: { fr: "Heureusement 😄 ! Mais elle demande quoi. Donnez un plat : la soupe de lentilles, par exemple.", tr: "Neyse ki 😄! Ama ne yendiğini soruyor. Bir yemek söyleyin: örneğin mercimek çorbası.", en: "Thank goodness 😄! But she's asking what. Name a dish: lentil soup, for example." } },
             { fr: "Souvent de la soupe de lentilles. Je vous en ferai une !", tr: "Çoğunlukla mercimek çorbası. Size bir tane yaparım!", en: "Often lentil soup. I'll make you some!", ok: true, go: "i" }
           ] },
      i: { say: [["M", "Avec plaisir ! Tu reviens quand tu veux. Un petit café avant de partir ?"]],
           choices: [
             { fr: "Volontiers ! Et merci pour cette super soirée.", tr: "Memnuniyetle! Ve bu harika akşam için teşekkürler.", en: "I'd love one! And thanks for this great evening.", ok: true, go: "fin" },
             { fr: "Volontiers ! Merci, et tu reviens aussi quand tu veux !", tr: "Memnuniyetle! Teşekkürler, sen de istediğin zaman geri gel!", en: "Gladly! Thanks, and you come back whenever you like too!", ok: false,
               fb: { fr: "Il est déjà chez lui 😄 ! Dites plutôt « tu es le bienvenu chez moi aussi » ou répondez pour le café.", tr: "O zaten evinde 😄! Bunun yerine « tu es le bienvenu chez moi aussi » deyin ya da kahveye cevap verin.", en: "He's already at home 😄! Say « tu es le bienvenu chez moi aussi » instead, or answer about the coffee." } },
             { fr: "Non merci, sinon je ne vais pas dormir ! Mais merci pour cette super soirée.", tr: "Hayır teşekkürler, yoksa uyuyamam! Ama bu harika akşam için teşekkürler.", en: "No thanks, or I won't sleep! But thanks for this great evening.", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["F", "Merci à toi ! Bonne nuit, et à bientôt dans l'escalier !"]],
             scene: { fr: "Vous rentrez chez vous, le ventre plein et le cœur content. Vous avez de nouveaux amis… et du vocabulaire en plus ! 🧀🎉", tr: "Karnınız tok, gönlünüz hoş eve dönüyorsunuz. Yeni arkadaşlarınız… ve fazladan kelimeleriniz var! 🧀🎉", en: "You head home with a full belly and a happy heart. You've made new friends… and learned new words! 🧀🎉" } }
    } }
);
