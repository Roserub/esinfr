/* Aventures A2 — train, médecin, téléphone perdu, entretien, anniversaire surprise */
(window.ADVENTURES = window.ADVENTURES || []).push(

  /* ---------- 1. Train annulé ---------- */
  { id: "av-train", level: "A2", emoji: "🚆",
    t: { fr: "Train annulé !", tr: "Tren iptal!", en: "Train cancelled!" },
    goal: { fr: "Votre train est annulé : comprenez l'annonce, allez au guichet et trouvez une solution.", tr: "Treniniz iptal oldu: anonsu anlayın, gişeye gidin ve bir çözüm bulun.", en: "Your train is cancelled: understand the announcement, go to the counter and find a solution." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous êtes à la gare. Vous attendez le TGV de 14 h 12 pour Lyon. Une annonce commence.", tr: "Gardasınız. Lyon'a giden 14.12 hızlı trenini bekliyorsunuz. Bir anons başlıyor.", en: "You're at the station, waiting for the 14:12 TGV to Lyon. An announcement starts." },
           say: [["N", "Mesdames et messieurs, en raison d'un mouvement de grève, le TGV de 14 h 12 à destination de Lyon est supprimé. Merci de vous présenter au guichet."]],
           choices: [
             { fr: "Pardon madame, le train pour Lyon est en retard ou il est annulé ?", tr: "Affedersiniz hanımefendi, Lyon treni rötarlı mı, yoksa iptal mi oldu?", en: "Excuse me, madam, is the Lyon train late or cancelled?", ok: true, go: "b" },
             { fr: "Pardon, « supprimé », ça veut dire que le train est plus rapide ?", tr: "Pardon, « supprimé » trenin daha hızlı olduğu anlamına mı geliyor?", en: "Sorry, does « supprimé » mean the train is faster?", ok: false,
               fb: { fr: "Hélas non 😅 ! « Supprimé » = annulé. Le train ne viendra pas du tout. Demandez plutôt confirmation à votre voisine.", tr: "Ne yazık ki hayır 😅! « Supprimé » = iptal. Tren hiç gelmeyecek. Yanınızdaki kadına teyit ettirin.", en: "Sadly not 😅! « Supprimé » = cancelled. The train won't come at all. Ask your neighbour to confirm." } },
             { fr: "Excusez-moi, le train pour Lyon a parti ?", tr: "Affedersiniz, Lyon treni gitti mi?", en: "Excuse me, has the Lyon train left?", ok: false,
               fb: { fr: "Presque ! « Partir » se conjugue avec être : « le train est parti ». Mais écoutez bien : il n'est pas parti, il est supprimé.", tr: "Az kaldı! « Partir » être ile çekimlenir: « le train est parti ». Ama dikkat: tren gitmedi, iptal edildi.", en: "Almost! « Partir » takes être: « le train est parti ». But listen: it hasn't left, it's cancelled." } }
           ] },
      b: { say: [["F", "Il est annulé, malheureusement. Il y a une grève aujourd'hui. Il faut aller au guichet, là-bas, à gauche."]],
           choices: [
             { fr: "Ah non ! Merci beaucoup, madame, j'y vais tout de suite.", tr: "Olamaz! Çok teşekkürler hanımefendi, hemen gidiyorum.", en: "Oh no! Thank you very much, madam, I'll go right away.", ok: true, go: "c" },
             { fr: "Merci ! Je ne connais pas où est le guichet.", tr: "Teşekkürler! Gişenin nerede olduğunu bilmiyorum.", en: "Thanks! I don't know where the counter is.", ok: false,
               fb: { fr: "Avec « où », on utilise savoir : « je ne sais pas où est le guichet ». Et bonne nouvelle : elle vient de vous le dire, à gauche 😉.", tr: "« Où » ile savoir kullanılır: « je ne sais pas où est le guichet ». Üstelik iyi haber: az önce söyledi, solda 😉.", en: "With « où » you use savoir: « je ne sais pas où est le guichet ». Good news: she just told you, on the left 😉." } },
             { fr: "Merci, je suis allée au guichet demain.", tr: "Teşekkürler, yarın gişeye gittim.", en: "Thanks, I went to the counter tomorrow.", ok: false,
               fb: { fr: "Petit voyage dans le temps 😄 ! Pour maintenant, dites « j'y vais » ; pour plus tard, « j'irai ».", tr: "Küçük bir zaman yolculuğu 😄! Şimdi için « j'y vais », sonrası için « j'irai » deyin.", en: "A little time travel 😄! For now, say « j'y vais »; for later, « j'irai »." } }
           ] },
      c: { scene: { fr: "Après 10 minutes de queue, c'est votre tour.", tr: "10 dakika sıra bekledikten sonra sıra size geliyor.", en: "After a 10-minute queue, it's your turn." },
           say: [["M", "Bonjour madame, je vous écoute."]],
           choices: [
             { fr: "Bonjour monsieur. Mon train de 14 h 12 pour Lyon est annulé. Qu'est-ce que je peux faire ?", tr: "Merhaba beyefendi. Lyon'a giden 14.12 trenim iptal oldu. Ne yapabilirim?", en: "Hello, sir. My 14:12 train to Lyon is cancelled. What can I do?", ok: true, go: "d" },
             { fr: "Bonsoir monsieur. Mon train pour Lyon est annulé.", tr: "İyi akşamlar beyefendi. Lyon trenim iptal oldu.", en: "Good evening, sir. My train to Lyon is cancelled.", ok: false,
               fb: { fr: "Il est 14 h : c'est encore « bonjour » ☀️. « Bonsoir », c'est à partir de 18 h environ.", tr: "Saat 14: hâlâ « bonjour » ☀️. « Bonsoir » yaklaşık 18'den sonra kullanılır.", en: "It's 2 p.m.: still « bonjour » ☀️. « Bonsoir » starts around 6 p.m." } },
             { fr: "Salut ! Le train de Lyon, il est cassé ou quoi ?", tr: "Selam! Lyon treni bozuldu mu ne?", en: "Hi! The Lyon train, is it broken or what?", ok: false,
               fb: { fr: "Un peu trop familier avec un agent 😅. « Bonjour monsieur » et une phrase complète, et il sera tout de suite plus aimable.", tr: "Bir görevliyle biraz fazla samimi 😅. « Bonjour monsieur » ve tam bir cümle; hemen daha nazik olacaktır.", en: "A bit too casual with an agent 😅. « Bonjour monsieur » and a full sentence, and he'll be much friendlier." } }
           ] },
      d: { say: [["M", "Oui, à cause de la grève. Je peux vous proposer le train de 16 h 40, ou vous pouvez être remboursée. Qu'est-ce que vous préférez ?"]],
           choices: [
             { fr: "Je préférerais prendre le train de 16 h 40, s'il vous plaît.", tr: "16.40 trenine binmeyi tercih ederim, lütfen.", en: "I'd rather take the 16:40 train, please.", ok: true, go: "e1" },
             { fr: "Je voudrais être remboursée, s'il vous plaît. Je prendrai le bus.", tr: "Paramın iadesini istiyorum, lütfen. Otobüse bineceğim.", en: "I'd like a refund, please. I'll take the bus.", ok: true, go: "e2" },
             { fr: "Je préfère le train de 14 h 12, s'il vous plaît.", tr: "14.12 trenini tercih ediyorum, lütfen.", en: "I'd prefer the 14:12 train, please.", ok: false,
               fb: { fr: "C'est justement celui qui est annulé 😄 ! Choisissez entre le train de 16 h 40 et le remboursement.", tr: "İptal olan tam da o tren 😄! 16.40 treni ile para iadesi arasında seçin.", en: "That's exactly the one that's cancelled 😄! Choose between the 16:40 train and a refund." } }
           ] },
      e1: { say: [["M", "Très bien. Il ne reste plus de places en seconde classe, mais je peux vous mettre en première, sans supplément. Ça vous va ?"]],
           choices: [
             { fr: "Oui, parfait ! C'est très gentil, merci.", tr: "Evet, mükemmel! Çok naziksiniz, teşekkürler.", en: "Yes, perfect! That's very kind, thank you.", ok: true, go: "f1" },
             { fr: "Oui, d'accord. Mais comment ça coûte ?", tr: "Evet, tamam. Ama nasıl tutuyor?", en: "Yes, OK. But how does it cost?", ok: false,
               fb: { fr: "Pour le prix, c'est « combien ça coûte ? ». Et bonne nouvelle : « sans supplément » veut dire que vous ne payez rien de plus 🎉.", tr: "Fiyat için « combien ça coûte ? » denir. Üstelik iyi haber: « sans supplément » hiç ek ücret ödemeyeceğiniz anlamına gelir 🎉.", en: "For the price, it's « combien ça coûte ? ». And good news: « sans supplément » means you pay nothing extra 🎉." } },
             { fr: "La première classe ? Mais je n'ai pas assez d'argent !", tr: "Birinci sınıf mı? Ama yeterli param yok!", en: "First class? But I don't have enough money!", ok: false,
               fb: { fr: "Pas de panique : « sans supplément » = gratuit, 0 € en plus ! Vous pouvez dire oui avec le sourire 😊.", tr: "Panik yok: « sans supplément » = ücretsiz, 0 € fazladan! Gülümseyerek evet diyebilirsiniz 😊.", en: "Don't panic: « sans supplément » = free, €0 extra! You can say yes with a smile 😊." } }
           ] },
      f1: { say: [["M", "Voilà votre nouveau billet. Le train partira de la voie B. Bon voyage, madame !"]],
           choices: [
             { fr: "Merci beaucoup, monsieur. Bonne journée !", tr: "Çok teşekkürler beyefendi. İyi günler!", en: "Thank you very much, sir. Have a good day!", ok: true, go: "g" },
             { fr: "La voie B ? Je dois marcher sur les rails ?", tr: "B yolu mu? Rayların üstünde mi yürümem gerekiyor?", en: "Track B? Do I have to walk on the rails?", ok: false,
               fb: { fr: "Surtout pas 😄 ! La « voie », c'est le quai où le train arrive. Il suffit de suivre les panneaux.", tr: "Asla 😄! « Voie », trenin geldiği perondur. Tabelaları takip etmeniz yeterli.", en: "Definitely not 😄! The « voie » is the platform where the train comes in. Just follow the signs." } },
             { fr: "Merci, vous êtes très gentille !", tr: "Teşekkürler, çok naziksiniz!", en: "Thanks, you're very kind!", ok: false,
               fb: { fr: "Joli réflexe ! Mais c'est un homme : « vous êtes très gentil » (sans -le).", tr: "Güzel refleks! Ama karşınızdaki bir erkek: « vous êtes très gentil » (-le olmadan).", en: "Nice instinct! But he's a man: « vous êtes très gentil » (no -le)." } }
           ] },
      e2: { say: [["M", "D'accord. Vous avez acheté votre billet comment ? Sur internet ou ici ?"]],
           choices: [
             { fr: "Je l'ai acheté sur l'application, il y a deux semaines.", tr: "İki hafta önce uygulamadan aldım.", en: "I bought it on the app two weeks ago.", ok: true, go: "f2" },
             { fr: "Je suis acheté sur internet depuis deux semaines.", tr: "İki haftadır internetten satın alınmışım.", en: "I am bought on the internet for two weeks.", ok: false,
               fb: { fr: "Deux pièges en une phrase 😄 ! « Acheter » prend avoir : « j'ai acheté ». Et pour un moment passé : « il y a deux semaines », pas « depuis ».", tr: "Bir cümlede iki tuzak 😄! « Acheter » avoir alır: « j'ai acheté ». Geçmişteki bir an için « il y a deux semaines » denir, « depuis » değil.", en: "Two traps in one sentence 😄! « Acheter » takes avoir: « j'ai acheté ». For a moment in the past: « il y a deux semaines », not « depuis »." } },
             { fr: "Je l'achète sur internet demain.", tr: "Yarın internetten alıyorum.", en: "I'm buying it online tomorrow.", ok: false,
               fb: { fr: "Vous l'avez déjà acheté, puisque vous êtes à la gare ! Au passé : « je l'ai acheté ».", tr: "Zaten almışsınız, çünkü gardasınız! Geçmiş zamanda: « je l'ai acheté ».", en: "You already bought it, since you're at the station! In the past: « je l'ai acheté »." } }
           ] },
      f2: { say: [["M", "Alors le remboursement est automatique, sur votre carte bancaire, dans 7 jours environ. Je peux faire autre chose pour vous ?"]],
           choices: [
             { fr: "Non, c'est tout. Merci beaucoup, bonne journée !", tr: "Hayır, bu kadar. Çok teşekkürler, iyi günler!", en: "No, that's all. Thank you very much, have a nice day!", ok: true, go: "g" },
             { fr: "Dans 7 jours ? Non, je veux mon argent maintenant !", tr: "7 gün mü? Hayır, paramı şimdi istiyorum!", en: "In 7 days? No, I want my money now!", ok: false,
               fb: { fr: "On comprend la frustration 😅, mais l'agent n'y peut rien. Un « merci, bonne journée » marchera beaucoup mieux.", tr: "Sinirinizi anlıyoruz 😅 ama görevlinin elinden bir şey gelmez. « Merci, bonne journée » çok daha iyi işe yarar.", en: "We get the frustration 😅, but the agent can't change it. A « merci, bonne journée » will work much better." } },
             { fr: "Non, c'est tout. Merci, bonne nuit !", tr: "Hayır, bu kadar. Teşekkürler, iyi geceler!", en: "No, that's all. Thanks, good night!", ok: false,
               fb: { fr: "Il est 14 h, il ne va pas encore se coucher 😴 ! « Bonne nuit », c'est juste avant de dormir. Ici : « bonne journée ».", tr: "Saat 14, daha yatmayacak 😴! « Bonne nuit » uyumadan hemen önce söylenir. Burada: « bonne journée ».", en: "It's 2 p.m., he's not going to bed yet 😴! « Bonne nuit » is just before sleeping. Here: « bonne journée »." } }
           ] },
      g: { scene: { fr: "Vous appelez votre amie Léa, qui vous attend à Lyon.", tr: "Lyon'da sizi bekleyen arkadaşınız Léa'yı arıyorsunuz.", en: "You call your friend Léa, who's waiting for you in Lyon." },
           say: [["F", "Allô ? Alors, tu es dans le train ?"]],
           choices: [
             { fr: "Non ! Mon train a été annulé à cause d'une grève. J'arriverai plus tard.", tr: "Hayır! Trenim grev yüzünden iptal edildi. Daha geç varacağım.", en: "No! My train was cancelled because of a strike. I'll arrive later.", ok: true, go: "h" },
             { fr: "Non, mon train est annulé. Je suis arrivée demain.", tr: "Hayır, trenim iptal. Yarın vardım.", en: "No, my train is cancelled. I arrived tomorrow.", ok: false,
               fb: { fr: "Pour demain ou plus tard, on utilise le futur : « j'arriverai plus tard ». Le passé composé, c'est pour hier 😉.", tr: "Yarın ya da daha sonrası için gelecek zaman kullanılır: « j'arriverai plus tard ». Passé composé dün içindir 😉.", en: "For tomorrow or later, use the future: « j'arriverai plus tard ». The passé composé is for yesterday 😉." } },
             { fr: "Oui, oui, je suis dans le train !", tr: "Evet evet, trendeyim!", en: "Yes, yes, I'm on the train!", ok: false,
               fb: { fr: "Hmm, on entend les annonces de la gare derrière vous 😄. Dites-lui la vérité, elle va comprendre !", tr: "Hmm, arkanızdan gar anonsları duyuluyor 😄. Ona gerçeği söyleyin, anlayacaktır!", en: "Hmm, we can hear the station announcements behind you 😄. Tell her the truth, she'll understand!" } }
           ] },
      h: { say: [["F", "Oh non, la pauvre ! Bon, ce n'est pas grave. Je viendrai te chercher. Tu m'envoies l'heure d'arrivée ?"]],
           choices: [
             { fr: "Oui, je t'envoie un SMS tout de suite. Merci, tu es un ange !", tr: "Evet, hemen sana mesaj atıyorum. Teşekkürler, sen bir meleksin!", en: "Yes, I'll text you right away. Thanks, you're an angel!", ok: true, go: "fin" },
             { fr: "Oui, je vous envoie un SMS, madame.", tr: "Evet, size bir mesaj gönderiyorum hanımefendi.", en: "Yes, I'll send you a text, madam.", ok: false,
               fb: { fr: "« Madame » ? Léa va rire 😄 ! C'est votre amie : « je t'envoie un SMS ».", tr: "« Madame » mı? Léa gülecek 😄! O sizin arkadaşınız: « je t'envoie un SMS ».", en: "« Madame »? Léa will laugh 😄! She's your friend: « je t'envoie un SMS »." } },
             { fr: "D'accord ! Tu me cherches à la gare, alors ?", tr: "Tamam! O zaman beni garda arıyorsun?", en: "OK! So you're looking for me at the station?", ok: false,
               fb: { fr: "« Tu me cherches » = tu essaies de me trouver (ou… tu me provoques 😄). Pour « pick me up » : « tu viens me chercher ».", tr: "« Tu me cherches » = beni bulmaya çalışıyorsun (ya da… bana sataşıyorsun 😄). « Beni almaya gelmek » için: « tu viens me chercher ».", en: "« Tu me cherches » = you're trying to find me (or… picking a fight 😄). For « pick me up »: « tu viens me chercher »." } }
           ] },
      fin: { end: "win", say: [["F", "Super. À ce soir, ma belle ! Je t'attends avec un bon chocolat chaud."]],
             scene: { fr: "Bravo ! Grève, guichet, nouvelle solution : vous avez tout géré en français. 🎉", tr: "Bravo! Grev, gişe, yeni çözüm: hepsini Fransızca hallettiniz. 🎉", en: "Well done! Strike, counter, new plan: you handled it all in French. 🎉" } }
    } },

  /* ---------- 2. Chez le médecin ---------- */
  { id: "av-medecin", level: "A2", emoji: "🩺",
    t: { fr: "Chez le médecin", tr: "Doktorda", en: "At the doctor's" },
    goal: { fr: "Expliquez au médecin comment vous vous êtes tordu la cheville et repartez avec une ordonnance.", tr: "Doktora bileğinizi nasıl burktuğunuzu anlatın ve bir reçeteyle çıkın.", en: "Explain to the doctor how you twisted your ankle and leave with a prescription." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous arrivez au cabinet médical en boitant. La secrétaire vous accueille.", tr: "Topallayarak muayenehaneye geliyorsunuz. Sekreter sizi karşılıyor.", en: "You limp into the medical practice. The receptionist greets you." },
           say: [["F", "Bonjour madame. Vous avez rendez-vous ?"]],
           choices: [
             { fr: "Bonjour. Oui, j'ai rendez-vous à 10 h 30 avec le docteur Martin.", tr: "Merhaba. Evet, Doktor Martin'le saat 10.30'da randevum var.", en: "Hello. Yes, I have an appointment at 10:30 with Dr Martin.", ok: true, go: "b" },
             { fr: "Bonjour. Oui, je suis rendez-vous à 10 h 30.", tr: "Merhaba. Evet, ben 10.30 randevusuyum.", en: "Hello. Yes, I am appointment at 10:30.", ok: false,
               fb: { fr: "Un rendez-vous, on l'a : « j'ai rendez-vous ». Avec « je suis », vous devenez le rendez-vous 😄.", tr: "Randevuya sahip olunur: « j'ai rendez-vous ». « Je suis » derseniz randevunun kendisi olursunuz 😄.", en: "You have an appointment: « j'ai rendez-vous ». With « je suis », you become the appointment 😄." } },
             { fr: "Oui, j'ai un rendez-vous amoureux avec le docteur.", tr: "Evet, doktorla romantik bir buluşmam var.", en: "Yes, I have a date with the doctor.", ok: false,
               fb: { fr: "Oups 😳 ! Un « rendez-vous amoureux », c'est un date. Chez le médecin, on dit simplement « j'ai rendez-vous ».", tr: "Eyvah 😳! « Rendez-vous amoureux » romantik buluşma demek. Doktorda sadece « j'ai rendez-vous » denir.", en: "Oops 😳! A « rendez-vous amoureux » is a date. At the doctor's, just say « j'ai rendez-vous »." } }
           ] },
      b: { scene: { fr: "Le médecin vous fait entrer dans son bureau.", tr: "Doktor sizi odasına alıyor.", en: "The doctor shows you into his office." },
           say: [["M", "Bonjour madame, asseyez-vous. Qu'est-ce qui vous arrive ?"]],
           choices: [
             { fr: "Je me suis tordu la cheville hier soir, à l'entraînement de handball.", tr: "Dün akşam hentbol antrenmanında bileğimi burktum.", en: "I twisted my ankle last night at handball practice.", ok: true, go: "c" },
             { fr: "J'ai tombé à l'entraînement de handball hier soir.", tr: "Dün akşam hentbol antrenmanında düştüm.", en: "I fell at handball practice last night.", ok: false,
               fb: { fr: "« Tomber » se conjugue avec être : « je suis tombée » (avec un -e, vous êtes une femme). Courage, ça arrive à tout le monde !", tr: "« Tomber » être ile çekimlenir: « je suis tombée » (kadın olduğunuz için -e ile). Geçmiş olsun, herkesin başına gelir!", en: "« Tomber » takes être: « je suis tombée » (with -e, as you're a woman). Don't worry, it happens to everyone!" } },
             { fr: "Je suis mal à la cheville.", tr: "Bileğim ağrıyor.", en: "I am pain in the ankle.", ok: false,
               fb: { fr: "En français, la douleur, on l'a : « j'ai mal à la cheville ». « Je suis mal » ne veut rien dire ici.", tr: "Fransızcada ağrıya sahip olunur: « j'ai mal à la cheville ». « Je suis mal » burada anlamsız.", en: "In French you have pain: « j'ai mal à la cheville ». « Je suis mal » doesn't work here." } }
           ] },
      c: { say: [["M", "Ah, le handball ! Racontez-moi. Comment est-ce que c'est arrivé ?"]],
           choices: [
             { fr: "J'ai sauté pour tirer, et je suis mal retombée sur le pied d'une joueuse.", tr: "Şut atmak için zıpladım ve bir oyuncunun ayağının üstüne kötü düştüm.", en: "I jumped to shoot and landed badly on another player's foot.", ok: true, go: "d" },
             { fr: "J'ai sauté pour tirer, et j'ai mal retombé.", tr: "Şut için zıpladım ve kötü düştüm.", en: "I jumped to shoot and landed badly.", ok: false,
               fb: { fr: "« Sauter » prend avoir, d'accord, mais « retomber » prend être, comme « tomber » : « je suis mal retombée ».", tr: "« Sauter » avoir alır, doğru; ama « retomber » da « tomber » gibi être alır: « je suis mal retombée ».", en: "« Sauter » takes avoir, yes, but « retomber » takes être like « tomber »: « je suis mal retombée »." } },
             { fr: "Je joue au handball depuis 10 ans et je suis très forte.", tr: "10 yıldır hentbol oynuyorum ve çok iyiyim.", en: "I've played handball for 10 years and I'm very good.", ok: false,
               fb: { fr: "Bravo, et la phrase est parfaite 💪 ! Mais il demande comment l'accident est arrivé : racontez le saut.", tr: "Bravo, cümle de kusursuz 💪! Ama kazanın nasıl olduğunu soruyor: zıplamayı anlatın.", en: "Bravo, and the sentence is perfect 💪! But he's asking how the accident happened: tell him about the jump." } }
           ] },
      d: { say: [["M", "Je vois. Vous avez eu mal tout de suite ? Et la cheville a gonflé ?"]],
           choices: [
             { fr: "Oui, j'ai eu très mal, et elle a gonflé pendant la nuit.", tr: "Evet, çok ağrıdı ve gece boyunca şişti.", en: "Yes, it hurt a lot, and it swelled up during the night.", ok: true, go: "e" },
             { fr: "Oui, alors j'ai pris un bain très chaud pour la soigner.", tr: "Evet, ben de iyileşsin diye çok sıcak bir banyo yaptım.", en: "Yes, so I took a very hot bath to treat it.", ok: false,
               fb: { fr: "La kiné en vous sait que ce n'est pas l'idée du siècle 😄 : sur une entorse, c'est de la glace, pas de la chaleur ! Décrivez plutôt la douleur.", tr: "İçinizdeki fizyoterapist bunun pek parlak fikir olmadığını biliyor 😄: burkulmaya sıcak değil, buz konur! Ağrıyı anlatın.", en: "The physio in you knows that's not the best idea 😄: a sprain needs ice, not heat! Describe the pain instead." } },
             { fr: "Oui, j'avais très mal pendant une seconde, et elle gonflait.", tr: "Evet, bir saniye boyunca çok ağrıyordu ve şişiyordu.", en: "Yes, it was hurting a lot for one second, and it was swelling.", ok: false,
               fb: { fr: "Pour un événement précis et terminé, on prend le passé composé : « j'ai eu très mal », « elle a gonflé ». L'imparfait, c'est pour décrire une situation.", tr: "Belirli ve bitmiş bir olay için passé composé: « j'ai eu très mal », « elle a gonflé ». İmparfait bir durumu betimlemek içindir.", en: "For a specific, finished event, use the passé composé: « j'ai eu très mal », « elle a gonflé ». The imparfait describes a situation." } }
           ] },
      e: { scene: { fr: "Le médecin examine votre cheville.", tr: "Doktor bileğinizi muayene ediyor.", en: "The doctor examines your ankle." },
           say: [["M", "Je vais regarder. Ça vous fait mal quand j'appuie ici ?"]],
           choices: [
             { fr: "Aïe ! Oui, ça me fait mal juste là.", tr: "Ay! Evet, tam orası acıyor.", en: "Ouch! Yes, it hurts right there.", ok: true, go: "f" },
             { fr: "Aïe ! Oui, tu peux appuyer moins fort ?", tr: "Ay! Evet, daha hafif bastırabilir misin?", en: "Ouch! Yes, can you press more gently?", ok: false,
               fb: { fr: "Même quand ça fait mal, on vouvoie le médecin 😉 : « vous pourriez appuyer moins fort ? ».", tr: "Acısa bile doktora « vous » denir 😉: « vous pourriez appuyer moins fort ? ».", en: "Even when it hurts, use « vous » with the doctor 😉: « vous pourriez appuyer moins fort ? »." } },
             { fr: "Oui, ça me fait du bien !", tr: "Evet, iyi geliyor!", en: "Yes, it feels good!", ok: false,
               fb: { fr: "« Ça me fait du bien » = ça fait plaisir, comme un massage 😄. Si ça fait mal : « ça me fait mal ».", tr: "« Ça me fait du bien » = iyi geliyor, masaj gibi 😄. Acıyorsa: « ça me fait mal ».", en: "« Ça me fait du bien » = it feels nice, like a massage 😄. If it hurts: « ça me fait mal »." } }
           ] },
      f: { say: [["M", "Bon, rien de cassé. C'est une entorse légère. Vous savez ce qu'il faut faire, dans ce cas ?"]],
           choices: [
             { fr: "Oui, je suis kinésithérapeute : de la glace, du repos et la jambe en hauteur.", tr: "Evet, ben fizyoterapistim: buz, dinlenme ve bacağı yukarıda tutmak.", en: "Yes, I'm a physiotherapist: ice, rest and keeping the leg up.", ok: true, go: "g1" },
             { fr: "Non, pas vraiment. Qu'est-ce que je dois faire ?", tr: "Hayır, pek değil. Ne yapmam gerekiyor?", en: "No, not really. What should I do?", ok: true, go: "g2" },
             { fr: "Oui, je connais ce qu'il faut faire.", tr: "Evet, ne yapmak gerektiğini biliyorum.", en: "Yes, I know what to do.", ok: false,
               fb: { fr: "Devant « ce que / ce qu'il faut », on utilise savoir : « je sais ce qu'il faut faire ». Connaître, c'est pour une personne ou un lieu.", tr: "« Ce que / ce qu'il faut » önünde savoir kullanılır: « je sais ce qu'il faut faire ». Connaître bir kişi ya da yer içindir.", en: "Before « ce que / ce qu'il faut », use savoir: « je sais ce qu'il faut faire ». Connaître is for a person or a place." } }
           ] },
      g1: { say: [["M", "Une collègue ! Alors vous n'avez pas besoin de mon cours. Je vous prescris quand même quelques séances de kiné. Vous les ferez où ?"]],
           choices: [
             { fr: "Je les ferai dans un cabinet près de chez moi.", tr: "Evimin yakınındaki bir klinikte yapacağım.", en: "I'll do them at a practice near my home.", ok: true, go: "h" },
             { fr: "Je les ferai toute seule, sur moi-même. C'est gratuit !", tr: "Kendi kendime yapacağım. Bedava!", en: "I'll do them myself, on myself. It's free!", ok: false,
               fb: { fr: "Très économique 😄 ! Mais un collègue vous suivra mieux. Dites plutôt « dans un cabinet près de chez moi ».", tr: "Çok ekonomik 😄! Ama bir meslektaş sizi daha iyi takip eder. « Dans un cabinet près de chez moi » deyin.", en: "Very economical 😄! But a colleague will follow you better. Say « dans un cabinet près de chez moi »." } },
             { fr: "Je les ai faites hier.", tr: "Onları dün yaptım.", en: "I did them yesterday.", ok: false,
               fb: { fr: "Il vient juste de les prescrire, c'est pour l'avenir : « je les ferai… » (futur).", tr: "Seansları daha yeni yazdı, gelecek için: « je les ferai… » (gelecek zaman).", en: "He's only just prescribed them, it's for the future: « je les ferai… » (future)." } }
           ] },
      g2: { say: [["M", "De la glace 3 fois par jour, du repos, et la jambe en hauteur le soir. Et surtout, pas de sport pour le moment."]],
           choices: [
             { fr: "D'accord. Je dois aussi prendre des médicaments ?", tr: "Tamam. İlaç da almam gerekiyor mu?", en: "OK. Do I also need to take medication?", ok: true, go: "h" },
             { fr: "Pas de sport ? Mais j'ai un match samedi, je jouerai quand même !", tr: "Spor yok mu? Ama cumartesi maçım var, yine de oynayacağım!", en: "No sport? But I have a match on Saturday, I'll play anyway!", ok: false,
               fb: { fr: "On adore la motivation 🤾‍♀️, mais votre cheville dit non ! Posez plutôt une question sur le traitement.", tr: "Bu azme bayılıyoruz 🤾‍♀️ ama bileğiniz hayır diyor! Tedaviyle ilgili bir soru sorun.", en: "We love the motivation 🤾‍♀️, but your ankle says no! Ask about the treatment instead." } },
             { fr: "D'accord, je mettrai de la glace dans mon café.", tr: "Tamam, kahveme buz koyacağım.", en: "OK, I'll put ice in my coffee.", ok: false,
               fb: { fr: "Un café glacé, pourquoi pas 😄, mais la glace, c'est pour la cheville ! Demandez s'il faut des médicaments.", tr: "Buzlu kahve, neden olmasın 😄 ama buz bilek için! İlaç gerekip gerekmediğini sorun.", en: "An iced coffee, why not 😄, but the ice is for your ankle! Ask if you need medication." } }
           ] },
      h: { say: [["M", "Voici votre ordonnance : un anti-inflammatoire, une attelle et des séances de kiné. Pas de handball pendant 3 semaines ! Vous avez besoin d'un arrêt de travail ?"]],
           choices: [
             { fr: "Oui, je voudrais bien, s'il vous plaît. Je travaille debout toute la journée.", tr: "Evet, lütfen, isterim. Bütün gün ayakta çalışıyorum.", en: "Yes, I'd like one, please. I work standing all day.", ok: true, go: "i" },
             { fr: "Non merci, mais pourriez-vous me faire un certificat pour mon club ?", tr: "Hayır teşekkürler, ama kulübüm için bir rapor yazabilir misiniz?", en: "No thanks, but could you write me a certificate for my club?", ok: true, go: "i" },
             { fr: "Oui, je voudrais arrêter de travailler pour toujours.", tr: "Evet, sonsuza kadar çalışmayı bırakmak istiyorum.", en: "Yes, I'd like to stop working forever.", ok: false,
               fb: { fr: "Ce serait le rêve 😄 ! Mais un « arrêt de travail », c'est seulement quelques jours de repos payés.", tr: "Hayal gibi olurdu 😄! Ama « arrêt de travail » sadece birkaç günlük ücretli istirahattir.", en: "That would be the dream 😄! But an « arrêt de travail » is just a few days of paid sick leave." } }
           ] },
      i: { say: [["M", "Voilà, c'est fait. Ça fait 30 euros. Vous avez votre carte Vitale ?"]],
           choices: [
             { fr: "Oui, la voilà. Merci beaucoup, docteur !", tr: "Evet, buyurun. Çok teşekkürler doktor bey!", en: "Yes, here it is. Thank you very much, doctor!", ok: true, go: "fin" },
             { fr: "Non, je ne l'ai pas encore reçue. Je peux payer par carte bancaire ?", tr: "Hayır, henüz elime geçmedi. Banka kartıyla ödeyebilir miyim?", en: "No, I haven't received it yet. Can I pay by bank card?", ok: true, go: "fin" },
             { fr: "Oui, je suis la carte Vitale.", tr: "Evet, ben Vitale kartıyım.", en: "Yes, I am the Vitale card.", ok: false,
               fb: { fr: "Vous n'êtes pas une carte 😄 ! Dites « oui, je l'ai » ou « oui, la voilà ».", tr: "Siz bir kart değilsiniz 😄! « Oui, je l'ai » ya da « oui, la voilà » deyin.", en: "You're not a card 😄! Say « oui, je l'ai » or « oui, la voilà »." } }
           ] },
      fin: { end: "win", say: [["M", "Bon rétablissement, madame. Et doucement avec le handball !"]],
             scene: { fr: "Bravo ! Vous avez tout expliqué au médecin. Direction la pharmacie avec votre ordonnance. 🩹", tr: "Bravo! Doktora her şeyi anlattınız. Şimdi reçetenizle eczaneye. 🩹", en: "Well done! You explained everything to the doctor. Off to the pharmacy with your prescription. 🩹" } }
    } },

  /* ---------- 3. Téléphone perdu ---------- */
  { id: "av-perdu", level: "A2", emoji: "📱",
    t: { fr: "Téléphone perdu dans le bus", tr: "Otobüste kaybolan telefon", en: "Phone lost on the bus" },
    goal: { fr: "Appelez le service des objets trouvés, décrivez votre téléphone et allez le récupérer.", tr: "Kayıp eşya bürosunu arayın, telefonunuzu tarif edin ve gidip geri alın.", en: "Call the lost-and-found, describe your phone and go and pick it up." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous rentrez chez vous et vous cherchez votre téléphone dans votre sac. Rien ! Votre colocataire Chloé vous regarde.", tr: "Eve dönüyorsunuz ve çantanızda telefonunuzu arıyorsunuz. Yok! Ev arkadaşınız Chloé size bakıyor.", en: "You get home and look for your phone in your bag. Nothing! Your flatmate Chloé looks at you." },
           say: [["F2", "Qu'est-ce qui se passe ? Tu as l'air paniquée !"]],
           choices: [
             { fr: "J'ai perdu mon téléphone ! Je crois que je l'ai oublié dans le bus.", tr: "Telefonumu kaybettim! Sanırım otobüste unuttum.", en: "I've lost my phone! I think I left it on the bus.", ok: true, go: "b" },
             { fr: "Je suis perdue mon téléphone !", tr: "Ben telefonumu kayboldum!", en: "I am lost my phone!", ok: false,
               fb: { fr: "« Je suis perdue » = vous ne savez plus où vous êtes… mais vous êtes chez vous 😄 ! Pour un objet : « j'ai perdu mon téléphone ».", tr: "« Je suis perdue » = nerede olduğunuzu bilmiyorsunuz… ama evdesiniz 😄! Bir eşya için: « j'ai perdu mon téléphone ».", en: "« Je suis perdue » = you don't know where you are… but you're at home 😄! For an object: « j'ai perdu mon téléphone »." } },
             { fr: "Je ne trouve pas mon téléphone depuis il y a une heure.", tr: "Bir saat öncedir telefonumu bulamıyorum.", en: "I can't find my phone since one hour ago.", ok: false,
               fb: { fr: "On choisit l'un ou l'autre : « depuis une heure » (ça dure encore) ou « il y a une heure » (un moment passé). Pas les deux 😉.", tr: "Birini seçmek gerekir: « depuis une heure » (hâlâ sürüyor) ya da « il y a une heure » (geçmişte bir an). İkisi birden olmaz 😉.", en: "Pick one: « depuis une heure » (still going on) or « il y a une heure » (a moment in the past). Not both 😉." } }
           ] },
      b: { say: [["F2", "Oh non ! Appelle les objets trouvés du réseau de bus. Tiens, prends mon téléphone."]],
           choices: [
             { fr: "Merci, tu me sauves la vie !", tr: "Teşekkürler, hayatımı kurtarıyorsun!", en: "Thanks, you're a lifesaver!", ok: true, go: "c" },
             { fr: "Merci, vous êtes très gentille, madame.", tr: "Teşekkürler, çok naziksiniz hanımefendi.", en: "Thank you, you're very kind, madam.", ok: false,
               fb: { fr: "Chloé partage votre cuisine, pas besoin de « madame » 😄 ! Avec une coloc, on dit « tu » : « merci, tu es gentille ».", tr: "Chloé mutfağınızı paylaşıyor, « madame »a gerek yok 😄! Ev arkadaşıyla « tu » denir: « merci, tu es gentille ».", en: "Chloé shares your kitchen, no need for « madame » 😄! With a flatmate, use « tu »: « merci, tu es gentille »." } },
             { fr: "Merci, j'ai appelé les objets trouvés demain.", tr: "Teşekkürler, kayıp eşyayı yarın aradım.", en: "Thanks, I called the lost-and-found tomorrow.", ok: false,
               fb: { fr: "Le passé et demain, ça ne va pas ensemble 😄. Et puis c'est urgent : « je les appelle tout de suite ! ».", tr: "Geçmiş zaman ile yarın birlikte olmaz 😄. Hem acil: « je les appelle tout de suite ! ».", en: "Past tense and tomorrow don't go together 😄. Besides, it's urgent: « je les appelle tout de suite ! »." } }
           ] },
      c: { scene: { fr: "Vous appelez. Un répondeur automatique parle. Vous répétez à voix haute pour Chloé.", tr: "Arıyorsunuz. Otomatik bir sesli yanıt konuşuyor. Chloé için yüksek sesle tekrarlıyorsunuz.", en: "You call. An automated menu answers. You repeat it out loud for Chloé." },
           say: [["N", "Bienvenue au service clients. Pour les horaires, tapez 1. Pour les objets trouvés, tapez 2. Pour parler à un conseiller, tapez 3."]],
           choices: [
             { fr: "Je tape 2, pour les objets trouvés.", tr: "Kayıp eşya için 2'ye basıyorum.", en: "I'm pressing 2, for lost property.", ok: true, go: "d" },
             { fr: "Je tape 3, je préfère parler à quelqu'un.", tr: "3'e basıyorum, biriyle konuşmayı tercih ederim.", en: "I'm pressing 3, I'd rather talk to someone.", ok: true, go: "c2" },
             { fr: "Je tape 1, pour les horaires.", tr: "Saatler için 1'e basıyorum.", en: "I'm pressing 1, for the timetables.", ok: false,
               fb: { fr: "Les « horaires », ce sont les heures des bus. Pour votre téléphone, ce sont les « objets trouvés » : le 2 😉.", tr: "« Horaires » otobüs saatleri demek. Telefonunuz için « objets trouvés »: 2 😉.", en: "« Horaires » are the bus times. For your phone, you need « objets trouvés »: number 2 😉." } }
           ] },
      c2: { say: [["M", "Service clients, bonjour. Un téléphone perdu ? Ne quittez pas, je vous passe le service des objets trouvés."]],
           choices: [
             { fr: "D'accord, merci beaucoup. J'attends.", tr: "Tamam, çok teşekkürler. Bekliyorum.", en: "OK, thank you very much. I'll hold.", ok: true, go: "d" },
             { fr: "D'accord, je quitte. Au revoir !", tr: "Tamam, kapatıyorum. Hoşça kalın!", en: "OK, I'm hanging up. Goodbye!", ok: false,
               fb: { fr: "Attention, « ne quittez pas » = ne raccrochez pas, restez en ligne ☎️ ! Dites « merci, j'attends ».", tr: "Dikkat, « ne quittez pas » = kapatmayın, hatta kalın ☎️! « Merci, j'attends » deyin.", en: "Careful, « ne quittez pas » = don't hang up, stay on the line ☎️! Say « merci, j'attends »." } }
           ] },
      d: { say: [["F", "Objets trouvés, bonjour. Je vous écoute."]],
           choices: [
             { fr: "Bonjour madame. J'ai oublié mon téléphone dans le bus 12, ce matin vers 9 h.", tr: "Merhaba hanımefendi. Bu sabah saat 9 civarı telefonumu 12 numaralı otobüste unuttum.", en: "Hello, madam. I left my phone on bus 12 this morning around 9.", ok: true, go: "e" },
             { fr: "Bonjour madame. J'ai trouvé mon téléphone dans le bus.", tr: "Merhaba hanımefendi. Telefonumu otobüste buldum.", en: "Hello, madam. I found my phone on the bus.", ok: false,
               fb: { fr: "Si vous l'avez trouvé, problème réglé 😄 ! Vous l'avez « oublié » ou « perdu ».", tr: "Bulduysanız sorun çözüldü 😄! Onu « oublié » (unuttunuz) ya da « perdu » (kaybettiniz).", en: "If you found it, problem solved 😄! You « oublié » (left) or « perdu » (lost) it." } },
             { fr: "Allô ? C'est qui ?", tr: "Alo? Kim o?", en: "Hello? Who's this?", ok: false,
               fb: { fr: "Elle vient de se présenter : « objets trouvés » 😉. Dites bonjour et expliquez votre problème.", tr: "Kendini az önce tanıttı: « objets trouvés » 😉. Merhaba deyip sorununuzu anlatın.", en: "She just introduced herself: « objets trouvés » 😉. Say hello and explain your problem." } }
           ] },
      e: { say: [["F", "D'accord. Vous pouvez me le décrire ?"]],
           choices: [
             { fr: "Oui, c'est un téléphone noir, avec une coque rose et un autocollant de handball.", tr: "Evet, siyah bir telefon, pembe kılıflı ve üstünde hentbol çıkartması var.", en: "Yes, it's a black phone with a pink case and a handball sticker.", ok: true, go: "f" },
             { fr: "Oui, il est noir et il est deux ans.", tr: "Evet, siyah ve iki yaşında.", en: "Yes, it's black and it is two years.", ok: false,
               fb: { fr: "L'âge, même pour un téléphone, c'est avec avoir : « il a deux ans ». Mais parlez plutôt de la couleur et de la coque 📱.", tr: "Yaş, telefon için bile avoir ile söylenir: « il a deux ans ». Ama rengini ve kılıfını anlatmanız daha iyi 📱.", en: "Age, even for a phone, uses avoir: « il a deux ans ». But better describe the colour and the case 📱." } },
             { fr: "Oui : il est perdu.", tr: "Evet: kayıp.", en: "Yes: it's lost.", ok: false,
               fb: { fr: "C'est vrai 😄, mais ça ne l'aide pas beaucoup ! Donnez la couleur, la coque, un détail spécial.", tr: "Doğru 😄 ama ona pek yardımı olmuyor! Rengini, kılıfını, özel bir ayrıntıyı söyleyin.", en: "True 😄, but that doesn't help her much! Give the colour, the case, a special detail." } }
           ] },
      f: { say: [["F", "Une coque rose… Attendez, je regarde. Il y a quoi comme fond d'écran ?"]],
           choices: [
             { fr: "C'est une photo de mon équipe de handball.", tr: "Hentbol takımımın bir fotoğrafı.", en: "It's a photo of my handball team.", ok: true, go: "g" },
             { fr: "Le fond ? Il est tombé au fond du bus ?", tr: "Dip mi? Otobüsün dibine mi düştü?", en: "The bottom? Did it fall to the back of the bus?", ok: false,
               fb: { fr: "Joli malentendu 😄 ! Le « fond d'écran », c'est l'image sur votre écran (wallpaper). Décrivez la photo.", tr: "Güzel bir yanlış anlama 😄! « Fond d'écran » ekranınızdaki resim (duvar kağıdı). Fotoğrafı anlatın.", en: "Lovely mix-up 😄! The « fond d'écran » is the picture on your screen (wallpaper). Describe the photo." } },
             { fr: "C'est une photo de ma mère quand elle a été petite.", tr: "Annemin küçükken bir fotoğrafı.", en: "It's a photo of my mum when she was little.", ok: false,
               fb: { fr: "Pour décrire une époque passée, on utilise l'imparfait : « quand elle était petite ». Bon, la dame cherche… elle ne voit pas cette photo-là !", tr: "Geçmişteki bir dönemi anlatmak için imparfait kullanılır: « quand elle était petite ». Görevli bakıyor… bu fotoğrafı göremiyor!", en: "To describe a past period, use the imparfait: « quand elle était petite ». The lady is looking… she can't see that photo!" } }
           ] },
      g: { say: [["F", "Bonne nouvelle ! Le chauffeur l'a rapporté ce midi. Vous pouvez venir le chercher à notre agence, place de la Gare."]],
           choices: [
             { fr: "Super, merci ! Quels sont vos horaires d'ouverture ?", tr: "Süper, teşekkürler! Çalışma saatleriniz nedir?", en: "Great, thanks! What are your opening hours?", ok: true, go: "h" },
             { fr: "Génial ! Vous pourriez me l'apporter chez moi ?", tr: "Harika! Bana eve getirebilir misiniz?", en: "Brilliant! Could you bring it to my home?", ok: false, go: "g2",
               fb: { fr: "La phrase est très polie 👍… mais les objets trouvés ne font pas la livraison ! Écoutez sa réponse.", tr: "Cümle çok kibar 👍… ama kayıp eşya bürosu eve teslimat yapmıyor! Cevabını dinleyin.", en: "Very polite sentence 👍… but lost property doesn't deliver! Listen to her answer." } },
             { fr: "Génial ! Je viens le chercher il y a une heure.", tr: "Harika! Bir saat önce almaya geliyorum.", en: "Brilliant! I'm coming to get it an hour ago.", ok: false,
               fb: { fr: "« Il y a une heure » = dans le passé. Pour le futur : « dans une heure ». Demandez d'abord les horaires 😉.", tr: "« Il y a une heure » = geçmişte. Gelecek için: « dans une heure ». Önce saatleri sorun 😉.", en: "« Il y a une heure » = in the past. For the future: « dans une heure ». Ask about the hours first 😉." } }
           ] },
      g2: { say: [["F", "Ah non, désolée madame, on ne livre pas ! Il faut passer à l'agence."]],
           choices: [
             { fr: "Pas de problème, je viendrai. Vous êtes ouverts à quelle heure ?", tr: "Sorun değil, geleceğim. Saat kaçta açıksınız?", en: "No problem, I'll come. What time are you open?", ok: true, go: "h" },
             { fr: "Alors vous pouvez le garder, je ne viendrai pas.", tr: "O zaman sizde kalsın, gelmeyeceğim.", en: "Then you can keep it, I won't come.", ok: false,
               fb: { fr: "Votre téléphone va être triste 😢 ! Demandez plutôt les horaires de l'agence.", tr: "Telefonunuz üzülecek 😢! Bunun yerine büronun saatlerini sorun.", en: "Your phone will be sad 😢! Ask for the office hours instead." } }
           ] },
      h: { say: [["F", "Nous sommes ouverts de 9 h à 17 h 30, du lundi au samedi. N'oubliez pas une pièce d'identité."]],
           choices: [
             { fr: "Parfait, je passerai demain matin avec mon passeport.", tr: "Mükemmel, yarın sabah pasaportumla uğrarım.", en: "Perfect, I'll come by tomorrow morning with my passport.", ok: true, go: "i" },
             { fr: "Parfait, je passerai dimanche.", tr: "Mükemmel, pazar günü uğrarım.", en: "Perfect, I'll come by on Sunday.", ok: false,
               fb: { fr: "Dimanche, porte fermée 🚪 ! Elle a dit « du lundi au samedi ». Choisissez un autre jour.", tr: "Pazar günü kapı kapalı 🚪! « Pazartesiden cumartesiye » dedi. Başka bir gün seçin.", en: "On Sunday, the door's closed 🚪! She said « Monday to Saturday ». Pick another day." } },
             { fr: "D'accord, j'oublierai ma pièce d'identité.", tr: "Tamam, kimliğimi unutacağım.", en: "OK, I'll forget my ID.", ok: false,
               fb: { fr: "Elle a dit « n'oubliez pas » = pensez à la prendre 😄. Dites « je viendrai avec mon passeport ».", tr: "« N'oubliez pas » dedi = getirmeyi unutmayın 😄. « Je viendrai avec mon passeport » deyin.", en: "She said « n'oubliez pas » = remember to bring it 😄. Say « je viendrai avec mon passeport »." } }
           ] },
      i: { scene: { fr: "Le lendemain matin, vous arrivez à l'agence, place de la Gare.", tr: "Ertesi sabah Gar Meydanı'ndaki büroya varıyorsunuz.", en: "The next morning, you arrive at the office on Station Square." },
           say: [["M", "Bonjour madame, c'est pour quoi ?"]],
           choices: [
             { fr: "Bonjour, je viens chercher mon téléphone. J'ai appelé hier.", tr: "Merhaba, telefonumu almaya geldim. Dün aradım.", en: "Hello, I've come to collect my phone. I called yesterday.", ok: true, go: "j" },
             { fr: "Bonjour, j'ai venu chercher mon téléphone.", tr: "Merhaba, telefonumu almaya geldim.", en: "Hello, I have come to get my phone.", ok: false,
               fb: { fr: "« Venir » prend être : « je suis venue » (avec -e). Ou plus simple : « je viens chercher mon téléphone ».", tr: "« Venir » être alır: « je suis venue » (-e ile). Ya da daha basit: « je viens chercher mon téléphone ».", en: "« Venir » takes être: « je suis venue » (with -e). Or simpler: « je viens chercher mon téléphone »." } },
             { fr: "Bonsoir, je viens chercher mon téléphone.", tr: "İyi akşamlar, telefonumu almaya geldim.", en: "Good evening, I've come to get my phone.", ok: false,
               fb: { fr: "Il est 9 h du matin ☀️ : on dit « bonjour ». « Bonsoir », c'est pour le soir.", tr: "Saat sabah 9 ☀️: « bonjour » denir. « Bonsoir » akşam içindir.", en: "It's 9 a.m. ☀️: say « bonjour ». « Bonsoir » is for the evening." } }
           ] },
      j: { scene: { fr: "Il vérifie votre passeport et vous montre un téléphone noir avec une coque rose.", tr: "Pasaportunuzu kontrol ediyor ve size pembe kılıflı siyah bir telefon gösteriyor.", en: "He checks your passport and shows you a black phone with a pink case." },
           say: [["M", "C'est bien celui-ci ?"]],
           choices: [
             { fr: "Oui, c'est le mien ! Merci mille fois, monsieur !", tr: "Evet, bu benimki! Çok çok teşekkürler beyefendi!", en: "Yes, it's mine! Thank you so much, sir!", ok: true, go: "fin" },
             { fr: "Oui, c'est le sien !", tr: "Evet, bu onunki!", en: "Yes, it's his!", ok: false,
               fb: { fr: "« Le sien » = à quelqu'un d'autre. Pour vous : « c'est le mien » 😊.", tr: "« Le sien » = başka birinin. Sizin için: « c'est le mien » 😊.", en: "« Le sien » = someone else's. For you: « c'est le mien » 😊." } },
             { fr: "Oui ! Je t'aime !", tr: "Evet! Seni seviyorum!", en: "Yes! I love you!", ok: false,
               fb: { fr: "Le pauvre monsieur va rougir 😄 ! Pour remercier un inconnu : « merci mille fois, monsieur ».", tr: "Zavallı adam kızaracak 😄! Bir yabancıya teşekkür için: « merci mille fois, monsieur ».", en: "The poor man will blush 😄! To thank a stranger: « merci mille fois, monsieur »." } }
           ] },
      fin: { end: "win", say: [["M", "Avec plaisir, madame. Et faites attention à lui, maintenant !"]],
             scene: { fr: "Bravo ! Téléphone retrouvé, et tout ça en français. Chloé va vous attendre avec un gâteau. 📱💕", tr: "Bravo! Telefon bulundu, hem de Fransızca. Chloé sizi bir pastayla bekleyecek. 📱💕", en: "Well done! Phone found, and all in French. Chloé will be waiting with a cake. 📱💕" } }
    } },

  /* ---------- 4. Entretien d'embauche ---------- */
  { id: "av-job", level: "A2", emoji: "🧑‍🏫",
    t: { fr: "Entretien pour un job d'été", tr: "Yaz işi için mülakat", en: "Summer job interview" },
    goal: { fr: "Passez un entretien pour devenir animatrice sportive dans une colonie de vacances.", tr: "Bir yaz kampında spor animatörü olmak için mülakata girin.", en: "Do an interview to become a sports leader at a summer camp." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous entrez dans le bureau de la directrice du centre de vacances. Vous êtes un peu stressée, c'est normal.", tr: "Tatil merkezinin müdiresinin odasına giriyorsunuz. Biraz gerginsiniz, bu çok normal.", en: "You walk into the holiday centre director's office. You're a bit nervous, that's normal." },
           say: [["F", "Bonjour ! Vous venez pour l'entretien ? Asseyez-vous, je vous en prie."]],
           choices: [
             { fr: "Bonjour madame, oui. Merci de me recevoir.", tr: "Merhaba hanımefendi, evet. Beni kabul ettiğiniz için teşekkürler.", en: "Hello, madam, yes. Thank you for seeing me.", ok: true, go: "b" },
             { fr: "Salut ! Oui, c'est moi, la nouvelle animatrice !", tr: "Selam! Evet, benim, yeni animatör!", en: "Hi! Yes, it's me, the new leader!", ok: false,
               fb: { fr: "On adore la confiance 😄, mais « salut » est trop familier, et vous n'êtes pas encore engagée ! Commencez par « bonjour madame ».", tr: "Bu özgüvene bayıldık 😄 ama « salut » fazla samimi, hem henüz işe alınmadınız! « Bonjour madame » ile başlayın.", en: "Love the confidence 😄, but « salut » is too casual, and you're not hired yet! Start with « bonjour madame »." } },
             { fr: "Bonjour, oui, j'ai venu pour l'entretien.", tr: "Merhaba, evet, mülakat için geldim.", en: "Hello, yes, I have come for the interview.", ok: false,
               fb: { fr: "« Venir » se conjugue avec être : « je suis venue pour l'entretien ». Respirez, tout va bien 🌿.", tr: "« Venir » être ile çekimlenir: « je suis venue pour l'entretien ». Derin bir nefes alın, her şey yolunda 🌿.", en: "« Venir » takes être: « je suis venue pour l'entretien ». Breathe, all is well 🌿." } }
           ] },
      b: { say: [["F", "Alors, présentez-vous en quelques mots."]],
           choices: [
             { fr: "Je suis turque, j'habite en France depuis deux mois, et je suis kinésithérapeute.", tr: "Türküm, iki aydır Fransa'da yaşıyorum ve fizyoterapistim.", en: "I'm Turkish, I've been living in France for two months, and I'm a physiotherapist.", ok: true, go: "c" },
             { fr: "Je suis turque et j'habite en France il y a deux mois.", tr: "Türküm ve iki ay önce Fransa'da yaşıyorum.", en: "I'm Turkish and I live in France two months ago.", ok: false,
               fb: { fr: "Vous y habitez encore, donc ça continue : « depuis deux mois ». « Il y a » sert pour une action finie : « je suis arrivée il y a deux mois ».", tr: "Hâlâ orada yaşıyorsunuz, yani devam ediyor: « depuis deux mois ». « Il y a » bitmiş bir eylem içindir: « je suis arrivée il y a deux mois ».", en: "You still live there, so it's ongoing: « depuis deux mois ». « Il y a » is for a finished action: « je suis arrivée il y a deux mois »." } },
             { fr: "Je suis 24 ans et je suis turque.", tr: "24 yaşındayım ve Türküm.", en: "I am 24 and I'm Turkish.", ok: false,
               fb: { fr: "Le grand classique 😊 : l'âge, on l'a ! « J'ai 24 ans ». Et ajoutez votre métier, c'est votre atout.", tr: "Klasik tuzak 😊: yaş avoir ile söylenir! « J'ai 24 ans ». Mesleğinizi de ekleyin, o sizin kozunuz.", en: "The great classic 😊: you « have » your age! « J'ai 24 ans ». And mention your job, it's your strength." } }
           ] },
      c: { say: [["F", "Kinésithérapeute, c'est intéressant ! Et vous avez de l'expérience avec les enfants ?"]],
           choices: [
             { fr: "Oui, j'ai entraîné une équipe de handball de jeunes pendant 3 ans, en Turquie.", tr: "Evet, Türkiye'de 3 yıl boyunca bir genç hentbol takımını çalıştırdım.", en: "Yes, I coached a youth handball team for 3 years in Turkey.", ok: true, go: "d" },
             { fr: "Oui, j'ai été une enfant.", tr: "Evet, ben de çocuktum.", en: "Yes, I was a child.", ok: false,
               fb: { fr: "C'est vrai, comme tout le monde 😄 ! Mais elle demande si vous avez travaillé avec des enfants.", tr: "Doğru, herkes gibi 😄! Ama çocuklarla çalışıp çalışmadığınızı soruyor.", en: "True, like everyone 😄! But she's asking whether you've worked with children." } },
             { fr: "Oui, je connais entraîner les enfants.", tr: "Evet, çocukları çalıştırmayı biliyorum.", en: "Yes, I know how to coach children.", ok: false,
               fb: { fr: "Devant un verbe, c'est savoir : « je sais entraîner les enfants ». Connaître va avec un nom : « je connais le handball ».", tr: "Fiilden önce savoir gelir: « je sais entraîner les enfants ». Connaître isimle kullanılır: « je connais le handball ».", en: "Before a verb, use savoir: « je sais entraîner les enfants ». Connaître goes with a noun: « je connais le handball »." } }
           ] },
      d: { say: [["F", "Très bien. Et qu'est-ce que vous faisiez avec eux, exactement ?"]],
           choices: [
             { fr: "Je préparais les entraînements et j'organisais des matchs le week-end.", tr: "Antrenmanları hazırlıyordum ve hafta sonları maçlar düzenliyordum.", en: "I used to plan the training sessions and organise matches at weekends.", ok: true, go: "e" },
             { fr: "Chaque semaine, j'ai préparé les entraînements.", tr: "Her hafta antrenmanları hazırladım.", en: "Every week, I prepared the training.", ok: false,
               fb: { fr: "Pour une habitude (« chaque semaine »), on utilise l'imparfait : « je préparais les entraînements ».", tr: "Bir alışkanlık için (« chaque semaine ») imparfait kullanılır: « je préparais les entraînements ».", en: "For a habit (« chaque semaine »), use the imparfait: « je préparais les entraînements »." } },
             { fr: "Je faisais la sieste pendant qu'ils couraient.", tr: "Onlar koşarken ben şekerleme yapıyordum.", en: "I took naps while they ran.", ok: false,
               fb: { fr: "Très honnête, et l'imparfait est parfait 😄 ! Mais en entretien, parlez plutôt de ce que vous organisiez.", tr: "Çok dürüst, imparfait de kusursuz 😄! Ama mülakatta neler düzenlediğinizden bahsedin.", en: "Very honest, and the imparfait is perfect 😄! But in an interview, talk about what you organised." } }
           ] },
      e: { say: [["F", "Et pourquoi est-ce que vous voulez travailler dans notre colonie ?"]],
           choices: [
             { fr: "J'adore le sport et les enfants, et je voudrais améliorer mon français.", tr: "Sporu ve çocukları çok seviyorum, ayrıca Fransızcamı geliştirmek istiyorum.", en: "I love sport and children, and I'd like to improve my French.", ok: true, go: "f" },
             { fr: "Pour l'argent et les vacances gratuites à la mer.", tr: "Para ve bedava deniz tatili için.", en: "For the money and the free holiday by the sea.", ok: false,
               fb: { fr: "Sincère 😄, mais parlez plutôt de votre motivation : le sport, les enfants, le français…", tr: "Samimi 😄 ama motivasyonunuzdan bahsedin: spor, çocuklar, Fransızca…", en: "Honest 😄, but talk about your motivation: sport, children, French…" } },
             { fr: "Parce que je voudrais prendre votre place de directrice.", tr: "Çünkü müdirelik koltuğunuzu almak istiyorum.", en: "Because I'd like to take your job as director.", ok: false,
               fb: { fr: "Quelle ambition 😄 ! Mais commençons par animatrice. Parlez de ce que vous aimez dans ce travail.", tr: "Ne hırs 😄! Ama önce animatörlükle başlayalım. Bu işte neyi sevdiğinizi anlatın.", en: "What ambition 😄! But let's start with sports leader. Say what you like about this job." } }
           ] },
      f: { say: [["F", "Le séjour dure 3 semaines, en juillet. Vous êtes disponible ?"]],
           choices: [
             { fr: "Oui, je suis disponible tout le mois de juillet.", tr: "Evet, bütün temmuz ayı boyunca müsaitim.", en: "Yes, I'm available all of July.", ok: true, go: "g1" },
             { fr: "Je serais disponible à partir du 5 juillet. J'ai un examen de français avant.", tr: "5 Temmuz'dan itibaren müsait olurum. Öncesinde bir Fransızca sınavım var.", en: "I'd be available from 5 July. I have a French exam before that.", ok: true, go: "g2" },
             { fr: "Oui, je suis disponible depuis juillet.", tr: "Evet, temmuzdan beri müsaitim.", en: "Yes, I'm available since July.", ok: false,
               fb: { fr: "« Depuis » regarde vers le passé. Pour le futur, on dit « à partir de juillet » ou « en juillet ».", tr: "« Depuis » geçmişe bakar. Gelecek için « à partir de juillet » ya da « en juillet » denir.", en: "« Depuis » looks back to the past. For the future, say « à partir de juillet » or « en juillet »." } }
           ] },
      g1: { say: [["F", "Parfait ! Alors vous pourriez venir aussi à la réunion de préparation, le 30 juin ?"]],
           choices: [
             { fr: "Oui, bien sûr, je viendrai avec plaisir.", tr: "Evet, tabii ki, memnuniyetle gelirim.", en: "Yes, of course, I'll be happy to come.", ok: true, go: "h" },
             { fr: "Oui, je suis venue le 30 juin.", tr: "Evet, 30 Haziran'da geldim.", en: "Yes, I came on 30 June.", ok: false,
               fb: { fr: "La réunion n'a pas encore eu lieu ! Au futur : « je viendrai ».", tr: "Toplantı henüz yapılmadı! Gelecek zamanda: « je viendrai ».", en: "The meeting hasn't happened yet! In the future: « je viendrai »." } },
             { fr: "Oui, je viendrai, mais je ne serai pas là.", tr: "Evet, geleceğim ama orada olmayacağım.", en: "Yes, I'll come, but I won't be there.", ok: false,
               fb: { fr: "Un petit mystère 😄 ! Venir et ne pas être là, c'est difficile. Choisissez : « je viendrai avec plaisir ».", tr: "Küçük bir gizem 😄! Hem gelip hem orada olmamak zor. Seçin: « je viendrai avec plaisir ».", en: "A little mystery 😄! Coming and not being there is tricky. Choose: « je viendrai avec plaisir »." } }
           ] },
      g2: { say: [["F", "Le 5 ? Aucun problème, les enfants arrivent le 7. Et bonne chance pour votre examen !"]],
           choices: [
             { fr: "Merci, c'est gentil ! Je travaille beaucoup pour le réussir.", tr: "Teşekkürler, çok naziksiniz! Onu geçmek için çok çalışıyorum.", en: "Thank you, that's kind! I'm working hard to pass it.", ok: true, go: "h" },
             { fr: "Merci ! Je vais le gagner !", tr: "Teşekkürler! Onu kazanacağım!", en: "Thanks! I'm going to win it!", ok: false,
               fb: { fr: "On gagne un match de handball 🏆, mais on « réussit » un examen : « je vais le réussir ».", tr: "Hentbol maçı kazanılır 🏆 ama sınav « réussir » edilir: « je vais le réussir ».", en: "You win a handball match 🏆, but you « réussir » (pass) an exam: « je vais le réussir »." } },
             { fr: "Merci, je l'ai déjà réussi demain.", tr: "Teşekkürler, yarın zaten geçtim.", en: "Thanks, I already passed it tomorrow.", ok: false,
               fb: { fr: "Vous voyez l'avenir 🔮 ? Pour un examen futur : « je le passerai bientôt » ou « j'espère le réussir ».", tr: "Geleceği mi görüyorsunuz 🔮? Gelecekteki bir sınav için: « je le passerai bientôt » ya da « j'espère le réussir ».", en: "Can you see the future 🔮? For an upcoming exam: « je le passerai bientôt » or « j'espère le réussir »." } }
           ] },
      h: { say: [["F", "Une question importante : vous avez le BAFA ? C'est le diplôme des animateurs, en France."]],
           choices: [
             { fr: "Non, pas encore. Mais je connais bien les premiers secours, grâce à mon métier.", tr: "Hayır, henüz değil. Ama mesleğim sayesinde ilk yardımı iyi biliyorum.", en: "No, not yet. But I know first aid well, thanks to my job.", ok: true, go: "i" },
             { fr: "Oui, oui, bien sûr, je l'ai !", tr: "Evet evet, tabii ki var!", en: "Yes, yes, of course I have it!", ok: false,
               fb: { fr: "Vous ne saviez pas ce que c'était il y a 10 secondes 😄 ! Mieux vaut être honnête et parler de vos atouts.", tr: "10 saniye önce ne olduğunu bilmiyordunuz 😄! Dürüst olup güçlü yönlerinizden bahsetmek daha iyi.", en: "You didn't know what it was 10 seconds ago 😄! Better to be honest and mention your strengths." } },
             { fr: "Non, mais je sais bien les premiers secours.", tr: "Hayır, ama ilk yardımı iyi biliyorum.", en: "No, but I know first aid well.", ok: false,
               fb: { fr: "Bonne idée ! Mais devant un nom, on dit connaître : « je connais bien les premiers secours ».", tr: "İyi fikir! Ama isimden önce connaître denir: « je connais bien les premiers secours ».", en: "Good idea! But before a noun, use connaître: « je connais bien les premiers secours »." } }
           ] },
      i: { say: [["F", "Les premiers secours, c'est très utile chez nous ! Le BAFA, vous pourrez le passer plus tard. Vous avez des questions ?"]],
           choices: [
             { fr: "Oui : est-ce que je serais logée sur place ? Et quel serait le salaire ?", tr: "Evet: kampta konaklayacak mıyım? Maaş ne kadar olur?", en: "Yes: would I be housed on site? And what would the pay be?", ok: true, go: "j" },
             { fr: "Non, aucune question. Au revoir !", tr: "Hayır, hiç sorum yok. Hoşça kalın!", en: "No, no questions. Goodbye!", ok: false,
               fb: { fr: "Partir si vite 😅 ? En entretien, poser une question montre votre intérêt. Demandez le logement ou le salaire.", tr: "Bu kadar hızlı gitmek mi 😅? Mülakatta soru sormak ilginizi gösterir. Konaklamayı ya da maaşı sorun.", en: "Leaving so fast 😅? In an interview, asking a question shows interest. Ask about housing or pay." } },
             { fr: "Oui : vous êtes mariée ?", tr: "Evet: evli misiniz?", en: "Yes: are you married?", ok: false,
               fb: { fr: "Un peu trop personnel 😳 ! Posez une question sur le travail : le logement, le salaire, les horaires…", tr: "Biraz fazla kişisel 😳! İşle ilgili bir soru sorun: konaklama, maaş, çalışma saatleri…", en: "A bit too personal 😳! Ask about the job: housing, pay, hours…" } }
           ] },
      j: { say: [["F", "Oui, vous seriez logée et nourrie, et le salaire est de 45 euros par jour. Je vous rappellerai la semaine prochaine."]],
           choices: [
             { fr: "Merci beaucoup pour cet entretien. J'attends votre appel avec impatience !", tr: "Bu görüşme için çok teşekkürler. Aramanızı sabırsızlıkla bekliyorum!", en: "Thank you very much for this interview. I look forward to your call!", ok: true, go: "fin" },
             { fr: "D'accord, à la semaine dernière !", tr: "Tamam, geçen haftaya kadar!", en: "OK, see you last week!", ok: false,
               fb: { fr: "« Dernière » = passée 😄. Elle rappellera la semaine « prochaine ». Terminez par un grand merci.", tr: "« Dernière » = geçen 😄. Sizi « prochaine » (gelecek) hafta arayacak. Kocaman bir teşekkürle bitirin.", en: "« Dernière » = last 😄. She'll call « la semaine prochaine » (next week). Finish with a big thank you." } },
             { fr: "Super, merci ! Bisous, à plus !", tr: "Süper, teşekkürler! Öptüm, görüşürüz!", en: "Great, thanks! Kisses, see ya!", ok: false,
               fb: { fr: "« Bisous », c'est pour les amis 😘. Avec une future cheffe : « merci beaucoup pour cet entretien ».", tr: "« Bisous » arkadaşlar içindir 😘. Gelecekteki patronunuza: « merci beaucoup pour cet entretien ».", en: "« Bisous » is for friends 😘. With a future boss: « merci beaucoup pour cet entretien »." } }
           ] },
      fin: { end: "win", say: [["F", "Merci à vous. Entre nous, votre profil est parfait pour nos petits sportifs !"]],
             scene: { fr: "Bravo ! Expérience, motivation, disponibilités : vous avez fait un très bel entretien en français. 🤾‍♀️☀️", tr: "Bravo! Deneyim, motivasyon, müsaitlik: Fransızca harika bir mülakat geçirdiniz. 🤾‍♀️☀️", en: "Well done! Experience, motivation, availability: you gave a great interview in French. 🤾‍♀️☀️" } }
    } },

  /* ---------- 5. Anniversaire surprise ---------- */
  { id: "av-anniv", level: "A2", emoji: "🎂",
    t: { fr: "Un anniversaire surprise", tr: "Sürpriz doğum günü", en: "A surprise birthday" },
    goal: { fr: "Organisez avec votre amie Inès une fête surprise pour Thomas : date, lieu, cadeau et invitations.", tr: "Arkadaşınız Inès ile Thomas için sürpriz bir parti düzenleyin: tarih, yer, hediye ve davetler.", en: "Plan a surprise party for Thomas with your friend Inès: date, place, gift and invitations." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous prenez un café avec votre amie Inès.", tr: "Arkadaşınız Inès ile kahve içiyorsunuz.", en: "You're having coffee with your friend Inès." },
           say: [["F2", "Tu sais que Thomas aura 25 ans le 14 ? Et si on lui faisait une fête surprise ?"]],
           choices: [
             { fr: "Oh oui, excellente idée ! Mais il ne doit rien savoir.", tr: "Ah evet, harika fikir! Ama hiçbir şey bilmemeli.", en: "Oh yes, great idea! But he mustn't know anything.", ok: true, go: "b" },
             { fr: "Oui ! Je connais qu'il adore les surprises.", tr: "Evet! Sürprizlere bayıldığını biliyorum.", en: "Yes! I know he loves surprises.", ok: false,
               fb: { fr: "Devant « que », c'est savoir : « je sais qu'il adore les surprises ». Connaître, c'est pour Thomas lui-même : « je connais Thomas ».", tr: "« Que » önünde savoir kullanılır: « je sais qu'il adore les surprises ». Connaître Thomas'nın kendisi için: « je connais Thomas ».", en: "Before « que », use savoir: « je sais qu'il adore les surprises ». Connaître is for Thomas himself: « je connais Thomas »." } },
             { fr: "Oui, bonne idée ! Vous avez déjà une date ?", tr: "Evet, iyi fikir! Bir tarihiniz var mı?", en: "Yes, good idea! Do you already have a date?", ok: false,
               fb: { fr: "« Vous » avec votre amie ? Inès va croire que vous êtes fâchées 😄 ! Entre amies : « tu as déjà une date ? ».", tr: "Arkadaşınıza « vous » mu? Inès küs olduğunuzu sanacak 😄! Arkadaşlar arasında: « tu as déjà une date ? ».", en: "« Vous » with your friend? Inès will think you've fallen out 😄! Between friends: « tu as déjà une date ? »." } }
           ] },
      b: { say: [["F2", "Le 14, c'est un mardi. On la fait quel jour, la fête ?"]],
           choices: [
             { fr: "Plutôt le samedi 18. Tout le monde sera libre.", tr: "Daha iyisi 18'i cumartesi. Herkes boş olur.", en: "Saturday the 18th instead. Everyone will be free.", ok: true, go: "c" },
             { fr: "On l'a faite samedi dernier !", tr: "Geçen cumartesi yaptık!", en: "We had it last Saturday!", ok: false,
               fb: { fr: "Une fête dans le passé… vous l'avez ratée 😄 ? On parle du futur : « on la fera samedi prochain ».", tr: "Geçmişte bir parti… kaçırdınız mı 😄? Gelecekten bahsediyoruz: « on la fera samedi prochain ».", en: "A party in the past… did you miss it 😄? We're talking about the future: « on la fera samedi prochain »." } },
             { fr: "Le mardi 14, à 7 h du matin, avant le travail ?", tr: "14'ü salı, sabah 7'de, işten önce?", en: "Tuesday the 14th at 7 a.m., before work?", ok: false,
               fb: { fr: "Une fête avec des croissants et des yeux fatigués 😴 ? Choisissez plutôt un week-end !", tr: "Kruvasanlı ve uykulu gözlü bir parti mi 😴? Bir hafta sonu seçin!", en: "A party with croissants and sleepy eyes 😴? Pick a weekend instead!" } }
           ] },
      c: { say: [["F2", "D'accord pour samedi. Mais où ? Chez moi, c'est trop petit."]],
           choices: [
             { fr: "On pourrait la faire chez moi, j'ai un grand salon.", tr: "Bende yapabiliriz, büyük bir salonum var.", en: "We could have it at my place, I've got a big living room.", ok: true, go: "d1" },
             { fr: "Et si on réservait une salle dans un bar ?", tr: "Peki bir barda salon ayırtsak?", en: "What if we booked a room in a bar?", ok: true, go: "d2" },
             { fr: "On pourrait la faire chez Thomas !", tr: "Thomas'nın evinde yapabiliriz!", en: "We could have it at Thomas's place!", ok: false,
               fb: { fr: "Chez Thomas… pour une surprise, c'est un peu compliqué 😄 ! Il va ouvrir la porte et voir tout le monde dans sa cuisine.", tr: "Thomas'da mı… sürpriz için biraz zor 😄! Kapıyı açınca herkesi mutfağında görecek.", en: "At Thomas's… a bit tricky for a surprise 😄! He'll open the door and find everyone in his kitchen." } }
           ] },
      d1: { say: [["F2", "Chez toi ? Génial ! Mais tes voisins ne vont pas se plaindre du bruit ?"]],
           choices: [
             { fr: "Je vais les prévenir, et on arrêtera la musique à minuit.", tr: "Onlara haber vereceğim, müziği de gece yarısı kapatırız.", en: "I'll warn them, and we'll turn the music off at midnight.", ok: true, go: "e" },
             { fr: "Mes voisins ? Je les ai invités depuis demain.", tr: "Komşularım mı? Onları yarından beri davet ettim.", en: "My neighbours? I've invited them since tomorrow.", ok: false,
               fb: { fr: "« Depuis demain », ça n'existe pas 😄. Pour le futur : « je les inviterai demain ». Bonne idée, d'ailleurs !", tr: "« Depuis demain » diye bir şey yok 😄. Gelecek için: « je les inviterai demain ». Bu arada iyi fikir!", en: "« Depuis demain » doesn't exist 😄. For the future: « je les inviterai demain ». Nice idea, by the way!" } },
             { fr: "Non, je ne sais pas mes voisins, alors ça va.", tr: "Hayır, komşularımı tanımıyorum, o yüzden sorun yok.", en: "No, I don't know my neighbours, so it's fine.", ok: false,
               fb: { fr: "Pour des personnes, c'est connaître : « je ne connais pas mes voisins ». Et c'est justement le moment de les rencontrer 😉 !", tr: "Kişiler için connaître kullanılır: « je ne connais pas mes voisins ». Hem onlarla tanışmanın tam zamanı 😉!", en: "For people, use connaître: « je ne connais pas mes voisins ». And it's the perfect moment to meet them 😉!" } }
           ] },
      d2: { say: [["F2", "Bonne idée ! Je connais un bar sympa, Le Comptoir. Tu peux les appeler pour réserver ?"]],
           choices: [
             { fr: "Oui, je les appellerai demain pour réserver pour 20 personnes.", tr: "Evet, yarın arayıp 20 kişilik rezervasyon yaparım.", en: "Yes, I'll call them tomorrow to book for 20 people.", ok: true, go: "e" },
             { fr: "Oui, je sais ce bar, il est super.", tr: "Evet, o barı biliyorum, süper.", en: "Yes, I know that bar, it's great.", ok: false,
               fb: { fr: "Un lieu, on le connaît : « je connais ce bar ». Savoir, c'est pour une information : « je sais où il est ».", tr: "Bir yeri connaître ile biliriz: « je connais ce bar ». Savoir bir bilgi içindir: « je sais où il est ».", en: "A place: « je connais ce bar ». Savoir is for a piece of information: « je sais où il est »." } },
             { fr: "Oui, j'ai réservé le bar pour 20 personnes l'année prochaine.", tr: "Evet, barı gelecek yıl için 20 kişilik ayırttım.", en: "Yes, I booked the bar for 20 people next year.", ok: false,
               fb: { fr: "Thomas aura 26 ans, alors 😄 ! La fête, c'est samedi : « je les appellerai demain ».", tr: "O zaman Thomas 26 yaşında olacak 😄! Parti cumartesi: « je les appellerai demain ».", en: "Thomas will be 26 by then 😄! The party is on Saturday: « je les appellerai demain »." } }
           ] },
      e: { say: [["F2", "Parfait ! Et pour le cadeau, tu as une idée ?"]],
           choices: [
             { fr: "Il a cassé son appareil photo le mois dernier. On pourrait lui en offrir un nouveau !", tr: "Geçen ay fotoğraf makinesini kırdı. Ona yenisini alabiliriz!", en: "He broke his camera last month. We could give him a new one!", ok: true, go: "f" },
             { fr: "On pourrait le donner un livre.", tr: "Ona bir kitap verebiliriz.", en: "We could give him a book.", ok: false,
               fb: { fr: "On donne quelque chose À quelqu'un, donc « lui » : « on pourrait lui donner un livre ». Mais vous avez peut-être une meilleure idée 🎁 ?", tr: "Bir şey BİRİNE verilir, bu yüzden « lui »: « on pourrait lui donner un livre ». Ama belki daha iyi bir fikriniz vardır 🎁?", en: "You give something TO someone, so « lui »: « on pourrait lui donner un livre ». But maybe you have a better idea 🎁?" } },
             { fr: "Un ballon de handball, comme ça il jouera avec moi !", tr: "Bir hentbol topu, böylece benimle oynar!", en: "A handball, so he'll play with me!", ok: false,
               fb: { fr: "Inès rit : « Thomas ? Le sport, il déteste ! » 😄 Pensez plutôt à ce qu'il aime, ou à ce qu'il a cassé…", tr: "Inès gülüyor: « Thomas mı? Spordan nefret eder! » 😄 Onun sevdiği ya da kırdığı bir şeyi düşünün…", en: "Inès laughs: « Thomas? He hates sport! » 😄 Think of what he likes, or what he broke…" } }
           ] },
      f: { say: [["F2", "Super idée ! Mais c'est cher… environ 300 euros."]],
           choices: [
             { fr: "On pourrait demander 15 euros à chaque invité. À 20, ça fait 300 !", tr: "Her davetliden 15 euro isteyebiliriz. 20 kişiyle 300 eder!", en: "We could ask each guest for 15 euros. With 20 people, that's 300!", ok: true, go: "g" },
             { fr: "Pas de problème, je paie tout ! Je suis millionnaire.", tr: "Sorun değil, hepsini ben öderim! Milyonerim.", en: "No problem, I'll pay for everything! I'm a millionaire.", ok: false,
               fb: { fr: "Inès : « Depuis quand ? » 😄 Proposez plutôt que chaque invité participe un peu.", tr: "Inès: « Ne zamandan beri? » 😄 Her davetlinin biraz katkı yapmasını önerin.", en: "Inès: « Since when? » 😄 Suggest that each guest chips in a little." } },
             { fr: "C'est cher ? Alors on lui offre une photo de l'appareil.", tr: "Pahalı mı? O zaman ona makinenin bir fotoğrafını verelim.", en: "Expensive? Then let's give him a photo of the camera.", ok: false,
               fb: { fr: "Très créatif… mais il sera un peu déçu 😄. Et si on partageait le prix entre les invités ?", tr: "Çok yaratıcı… ama biraz hayal kırıklığına uğrar 😄. Ya fiyatı davetliler arasında paylaşsak?", en: "Very creative… but he'll be a bit disappointed 😄. What about sharing the cost between guests?" } }
           ] },
      g: { say: [["F2", "Bonne idée, une cagnotte ! Et pour les invitations ? On crée un groupe sur WhatsApp ?"]],
           choices: [
             { fr: "Oui, mais attention : surtout, on n'ajoute pas Thomas !", tr: "Evet, ama dikkat: sakın Thomas'yı eklemeyelim!", en: "Yes, but careful: whatever we do, we don't add Thomas!", ok: true, go: "h" },
             { fr: "Oui, et on ajoute Thomas, comme ça il saura la date.", tr: "Evet, Thomas'yı da ekleyelim, böylece tarihi bilir.", en: "Yes, and we add Thomas, so he'll know the date.", ok: false,
               fb: { fr: "Et adieu la surprise 🙈 ! Dans ce groupe, tout le monde sauf Thomas.", tr: "Elveda sürpriz 🙈! Bu grupta Thomas hariç herkes olacak.", en: "And goodbye surprise 🙈! Everyone in the group except Thomas." } },
             { fr: "Oui, je l'ai créé depuis dix minutes.", tr: "Evet, on dakikadan beri oluşturdum.", en: "Yes, I created it since ten minutes.", ok: false,
               fb: { fr: "Créer, c'est une action finie : « je l'ai créé il y a dix minutes ». « Depuis » va avec ce qui continue : « le groupe existe depuis dix minutes ».", tr: "Oluşturmak bitmiş bir eylem: « je l'ai créé il y a dix minutes ». « Depuis » süren şeylerle kullanılır: « le groupe existe depuis dix minutes ».", en: "Creating is a finished action: « je l'ai créé il y a dix minutes ». « Depuis » goes with what continues: « le groupe existe depuis dix minutes »." } }
           ] },
      h: { say: [["F2", "Évidemment ! Mais comment on l'amène à la fête sans qu'il devine ?"]],
           choices: [
             { fr: "Tu lui proposeras d'aller au cinéma samedi soir, et tu l'amèneras à la fête à 21 h.", tr: "Ona cumartesi akşamı sinemaya gitmeyi teklif edersin, sonra onu saat 21'de partiye getirirsin.", en: "You'll suggest going to the cinema on Saturday night, and you'll bring him to the party at 9 p.m.", ok: true, go: "i" },
             { fr: "On lui dit tout, c'est plus simple.", tr: "Ona her şeyi söyleriz, daha kolay.", en: "We tell him everything, it's simpler.", ok: false,
               fb: { fr: "Plus simple, oui… mais plus de surprise 😄 ! Trouvez une petite excuse pour l'amener.", tr: "Daha kolay, evet… ama sürpriz kalmaz 😄! Onu getirmek için küçük bir bahane bulun.", en: "Simpler, yes… but no more surprise 😄! Find a little excuse to bring him." } },
             { fr: "Je lui dirai : « Thomas, ce n'est pas une fête surprise, promis ! »", tr: "Ona diyeceğim ki: « Thomas, bu sürpriz parti değil, söz! »", en: "I'll tell him: « Thomas, it's not a surprise party, I promise! »", ok: false,
               fb: { fr: "Là, il va tout de suite comprendre 😂 ! Proposez plutôt une sortie normale, comme un cinéma.", tr: "Böyle derseniz hemen anlar 😂! Bunun yerine sinema gibi sıradan bir çıkış önerin.", en: "Then he'll guess right away 😂! Suggest a normal outing instead, like the cinema." } }
           ] },
      i: { say: [["F2", "Ça marche ! Et toi, tu t'occupes du gâteau ?"]],
           choices: [
             { fr: "Oui ! Je ferai un gâteau au chocolat, c'est son préféré.", tr: "Evet! Çikolatalı pasta yapacağım, en sevdiği o.", en: "Yes! I'll make a chocolate cake, it's his favourite.", ok: true, go: "fin" },
             { fr: "Oui… mais je ne sais pas cuisiner. Je l'achèterai à la pâtisserie !", tr: "Evet… ama yemek yapmayı bilmiyorum. Pastaneden alırım!", en: "Yes… but I can't cook. I'll buy it at the patisserie!", ok: true, go: "fin" },
             { fr: "Oui ! Je ferai un gâteau au chocolat, c'est sa préférée.", tr: "Evet! Çikolatalı pasta yapacağım, en sevdiği o.", en: "Yes! I'll make a chocolate cake, it's his favourite.", ok: false,
               fb: { fr: "Presque parfait ! « Gâteau » est masculin, donc « c'est son préféré ». (« Son » ou « sa » dépend du mot, pas de Thomas.)", tr: "Neredeyse kusursuz! « Gâteau » eril, bu yüzden « c'est son préféré ». (« Son » ya da « sa » Thomas'ya değil, kelimeye bağlı.)", en: "Almost perfect! « Gâteau » is masculine, so « c'est son préféré ». (« Son » or « sa » depends on the word, not on Thomas.)" } }
           ] },
      fin: { end: "win", scene: { fr: "Samedi, 21 h. Les lumières s'allument : « SURPRISE ! » Thomas n'en croit pas ses yeux. Bravo, mission réussie ! 🎉", tr: "Cumartesi, saat 21. Işıklar yanıyor: « SÜRPRİZ! » Thomas gözlerine inanamıyor. Bravo, görev başarıldı! 🎉", en: "Saturday, 9 p.m. The lights come on: « SURPRISE! » Thomas can't believe his eyes. Well done, mission accomplished! 🎉" },
             say: [["M", "Vous êtes folles ! Merci, c'est le plus bel anniversaire de ma vie !"]] }
    } }
);
