/* Aventures A2 — 11 to 15: kiné, urgences, inscription STAPS, colis perdu, course solidaire */
(window.ADVENTURES = window.ADVENTURES || []).push(

  /* ───────────── 11. Chez le kiné ───────────── */
  { id: "av-kine", level: "A2", emoji: "💆",
    t: { fr: "Mal au dos chez le kiné", tr: "Fizyoterapistte bel ağrısı", en: "Back pain at the physio's" },
    goal: { fr: "Expliquez votre mal de dos au kiné, répondez à ses questions et prenez le prochain rendez-vous.", tr: "Fizyoterapiste bel ağrınızı anlatın, sorularını yanıtlayın ve bir sonraki randevuyu alın.", en: "Explain your back pain to the physio, answer his questions and book the next appointment." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Pour une fois, c'est vous la patiente ! Vous entrez dans le cabinet avec l'ordonnance du médecin.", tr: "Bu sefer hasta olan sizsiniz! Doktorun reçetesiyle muayenehaneye giriyorsunuz.", en: "For once, you're the patient! You walk into the practice with the doctor's prescription." },
           say: [["M", "Bonjour madame, entrez ! Qu'est-ce qui vous amène ?"]],
           choices: [
             { fr: "Bonjour ! Le bus m'a amenée. Voici l'ordonnance du médecin.", tr: "Merhaba! Beni otobüs getirdi. Doktorun reçetesi burada.", en: "Hello! The bus brought me. Here's the doctor's prescription.", ok: false,
               fb: { fr: "Haha 🚌😄 ! « Qu'est-ce qui vous amène ? » = pourquoi vous venez. Parlez de votre problème de santé.", tr: "Haha 🚌😄! « Qu'est-ce qui vous amène ? » = neden geldiniz. Sağlık sorununuzdan bahsedin.", en: "Haha 🚌😄! « Qu'est-ce qui vous amène ? » = why have you come. Talk about your health problem." } },
             { fr: "Bonjour ! J'ai mal à la dos depuis deux semaines. Voici l'ordonnance.", tr: "Merhaba! İki haftadır sırtım ağrıyor. Reçete burada.", en: "Hello! My back has hurt for two weeks. Here's the prescription.", ok: false,
               fb: { fr: "« Dos » est masculin : « le dos », donc « j'ai mal au dos » 😉.", tr: "« Dos » eril: « le dos », yani « j'ai mal au dos » 😉.", en: "« Dos » is masculine: « le dos », so « j'ai mal au dos » 😉." } },
             { fr: "Bonjour ! J'ai mal au dos depuis deux semaines. Voici l'ordonnance.", tr: "Merhaba! İki haftadır sırtım ağrıyor. Reçete burada.", en: "Hello! My back has hurt for two weeks. Here's the prescription.", ok: true, go: "b" }
           ] },
      b: { say: [["M", "Merci. Et comment c'est arrivé, à votre avis ?"]],
           choices: [
             { fr: "J'ai porté des courses très lourdes et j'ai senti une douleur.", tr: "Çok ağır alışveriş torbaları taşıdım ve bir ağrı hissettim.", en: "I carried some very heavy shopping and felt a pain.", ok: true, go: "c" },
             { fr: "Je portais des courses très lourdes et j'ai sentu une douleur dans le dos.", tr: "Çok ağır alışveriş torbaları taşıyordum ve sırtımda bir ağrı hissettim.", en: "I was carrying very heavy shopping and I feeled a pain in my back.", ok: false,
               fb: { fr: "Très bon début ! Mais le participe de « sentir », c'est « senti » : « j'ai senti une douleur ».", tr: "Çok iyi bir başlangıç! Ama « sentir »in ortacı « senti »: « j'ai senti une douleur ».", en: "Great start! But the past participle of « sentir » is « senti »: « j'ai senti une douleur »." } },
             { fr: "Je ne sais pas exactement. Je passe beaucoup de temps debout au travail.", tr: "Tam olarak bilmiyorum. İşte çok uzun süre ayakta duruyorum.", en: "I don't really know. I spend a lot of time standing at work.", ok: true, go: "c" }
           ] },
      c: { say: [["M", "D'accord. La douleur, elle est où exactement ? Vous pouvez me montrer ?"]],
           choices: [
             { fr: "Elle est à la maison.", tr: "Evde.", en: "It's at home.", ok: false,
               fb: { fr: "Votre douleur est restée à la maison ? Quelle chance 😄 ! Montrez sur votre corps : « ici, en bas du dos ».", tr: "Ağrınız evde mi kaldı? Ne şans 😄! Vücudunuzda gösterin: « ici, en bas du dos ».", en: "Your pain stayed at home? Lucky you 😄! Show him on your body: « ici, en bas du dos »." } },
             { fr: "Ici, en bas du dos, à droit.", tr: "Burada, belin alt kısmında, hukukta.", en: "Here, in my lower back, in law.", ok: false,
               fb: { fr: "« Le droit », c'est la loi ⚖️😄. Pour le côté, on dit « à droite ».", tr: "« Le droit » hukuk demek ⚖️😄. Yön için « à droite » (sağda) denir.", en: "« Le droit » means law ⚖️😄. For the side, say « à droite »." } },
             { fr: "Ici, en bas du dos, à droite.", tr: "Burada, belin alt kısmında, sağda.", en: "Here, in my lower back, on the right.", ok: true, go: "d" }
           ] },
      d: { say: [["M", "Sur une échelle de 0 à 10, vous avez mal à combien ?"]],
           choices: [
             { fr: "Environ 6. Le matin, c'est pire.", tr: "Yaklaşık 6. Sabahları daha kötü.", en: "About 6. It's worse in the morning.", ok: true, go: "e" },
             { fr: "J'ai mal à 10 heures.", tr: "Saat 10'da ağrım oluyor.", en: "I'm in pain at 10 o'clock.", ok: false,
               fb: { fr: "Il ne demande pas l'heure ⏰, mais la force de la douleur, de 0 à 10. Par exemple : « environ 6 ».", tr: "Saati sormuyor ⏰, ağrının şiddetini soruyor, 0'dan 10'a. Örneğin: « environ 6 ».", en: "He's not asking the time ⏰ but how strong the pain is, from 0 to 10. For example: « environ 6 »." } },
             { fr: "Je n'ai pas d'échelle chez moi.", tr: "Evimde merdiven yok.", en: "I don't have a ladder at home.", ok: false,
               fb: { fr: "Haha 🪜😄 ! Ici, « une échelle », c'est une note de 0 à 10. Donnez un chiffre !", tr: "Haha 🪜😄! Burada « échelle » 0'dan 10'a bir ölçek. Bir rakam söyleyin!", en: "Haha 🪜😄! Here, « une échelle » is a scale from 0 to 10. Give a number!" } }
           ] },
      e: { say: [["M", "Est-ce que vous faites du sport ?"]],
           choices: [
             { fr: "Oui, je fais du sport depuis demain, je courais beaucoup avant.", tr: "Evet, yarından beri spor yapıyorum, eskiden çok koşardım.", en: "Yes, I've done sport since tomorrow, I used to run a lot.", ok: false,
               fb: { fr: "« Depuis demain », c'est impossible 😄 ! « Depuis » regarde le passé : « depuis un an », « depuis longtemps ».", tr: "« Yarından beri » olmaz 😄! « Depuis » geçmişe bakar: « depuis un an », « depuis longtemps ».", en: "« Since tomorrow » is impossible 😄! « Depuis » looks back: « depuis un an », « depuis longtemps »." } },
             { fr: "Oui, je courais beaucoup, mais j'ai arrêté à cause de la douleur.", tr: "Evet, çok koşuyordum ama ağrı yüzünden bıraktım.", en: "Yes, I used to run a lot, but I stopped because of the pain.", ok: true, go: "f1" },
             { fr: "Oui, je joue au handball, mais j'ai arrêté à cause du genou.", tr: "Evet, hentbol oynuyorum ama dizim yüzünden bıraktım.", en: "Yes, I play handball, but I stopped because of my knee.", ok: true, go: "f2" }
           ] },
      f1: { say: [["M", "On va vous aider à reprendre la course doucement. D'habitude, vous courez combien de kilomètres ?"]],
           choices: [
             { fr: "D'habitude, je cours 5 ou 6 kilos.", tr: "Genelde 5 ya da 6 kilo koşarım.", en: "Usually I run 5 or 6 kilos.", ok: false,
               fb: { fr: "Les kilos, c'est pour le poids ⚖️😄. Pour la distance, ce sont des kilomètres !", tr: "Kilo ağırlık içindir ⚖️😄. Mesafe için kilometre!", en: "Kilos are for weight ⚖️😄. For distance, it's kilometres!" } },
             { fr: "D'habitude, je courrai 5 kilomètres.", tr: "Genelde 5 kilometre koşacağım.", en: "Usually I will run 5 kilometres.", ok: false,
               fb: { fr: "« Je courrai » est au futur. Pour une habitude, on utilise le présent : « je cours » 😉.", tr: "« Je courrai » gelecek zaman. Alışkanlık için şimdiki zaman kullanılır: « je cours » 😉.", en: "« Je courrai » is future tense. For a habit, use the present: « je cours » 😉." } },
             { fr: "D'habitude, je cours 5 ou 6 kilomètres.", tr: "Genelde 5 ya da 6 kilometre koşarım.", en: "Usually I run 5 or 6 kilometres.", ok: true, go: "g" }
           ] },
      f2: { say: [["M", "Le handball, c'est un sport génial. Vous aimeriez reprendre bientôt ?"]],
           choices: [
             { fr: "Oui, j'aimerais bien reprendre le mois prochain.", tr: "Evet, gelecek ay yeniden başlamak isterim.", en: "Yes, I'd love to start again next month.", ok: true, go: "g" },
             { fr: "Oui, j'aimerais bien. Je reprendrais hier, si possible !", tr: "Evet, çok isterim. Mümkünse dün başlardım!", en: "Yes, I'd love to. I would restart yesterday, if possible!", ok: false,
               fb: { fr: "Hier, c'est trop tard 😄 ! Parlez du futur : « le mois prochain ».", tr: "Dün çok geç 😄! Gelecekten bahsedin: « le mois prochain ».", en: "Yesterday is too late 😄! Talk about the future: « le mois prochain »." } },
             { fr: "Non, le handball, c'est pour les enfants.", tr: "Hayır, hentbol çocuklar için.", en: "No, handball is for children.", ok: false,
               fb: { fr: "Vraiment ? Les équipes de France ne sont pas d'accord 🤾😄 ! Dites ce que vous aimeriez faire.", tr: "Gerçekten mi? Fransa millî takımları buna katılmıyor 🤾😄! Ne yapmak istediğinizi söyleyin.", en: "Really? France's national teams wouldn't agree 🤾😄! Say what you'd like to do." } }
           ] },
      g: { scene: { fr: "Vous allez sur la table de massage.", tr: "Masaj masasına geçiyorsunuz.", en: "You get onto the treatment table." },
           say: [["M", "Allongez-vous sur le ventre, s'il vous plaît. Je vais appuyer un peu. Dites-moi si ça fait mal."]],
           choices: [
             { fr: "Je me suis allongée sur le dos, c'est bien ?", tr: "Sırtüstü uzandım, iyi mi?", en: "I've lain down on my back, is that OK?", ok: false,
               fb: { fr: "Il a dit « sur le ventre » : face contre la table 😉. Sinon, il ne peut pas voir votre dos !", tr: "« Sur le ventre » dedi: yüzüstü 😉. Yoksa sırtınızı göremez!", en: "He said « sur le ventre »: face down 😉. Otherwise he can't see your back!" } },
             { fr: "Aïe ! Là, oui, ça fait mal.", tr: "Ay! Orası, evet, acıyor.", en: "Ouch! There, yes, that hurts.", ok: true, go: "h" },
             { fr: "Ça va, ça ne fait pas mal.", tr: "İyi, acımıyor.", en: "That's fine, it doesn't hurt.", ok: true, go: "h" }
           ] },
      h: { say: [["M", "Je vais vous donner des exercices à faire à la maison. Vous pourrez les faire tous les jours ?"]],
           choices: [
             { fr: "Oui, je leur ferai tous les matins.", tr: "Evet, onlara her sabah yapacağım.", en: "Yes, I'll do to them every morning.", ok: false,
               fb: { fr: "« Faire les exercices » : pas de « à », donc le pronom est « les » : « je les ferai » 😉.", tr: "« Faire les exercices »: « à » yok, bu yüzden zamir « les »: « je les ferai » 😉.", en: "« Faire les exercices » has no « à », so the pronoun is « les »: « je les ferai » 😉." } },
             { fr: "Non, pas besoin, je suis kiné aussi, vous savez !", tr: "Hayır, gerek yok, ben de fizyoterapistim, biliyorsunuz!", en: "No, no need, I'm a physio too, you know!", ok: false,
               fb: { fr: "Même les kinés ont besoin d'un kiné 😄 ! Promettez de faire vos exercices.", tr: "Fizyoterapistlerin bile bir fizyoterapiste ihtiyacı var 😄! Egzersizlerinizi yapacağınıza söz verin.", en: "Even physios need a physio 😄! Promise to do your exercises." } },
             { fr: "Oui, je les ferai tous les matins, promis !", tr: "Evet, onları her sabah yapacağım, söz!", en: "Yes, I'll do them every morning, promise!", ok: true, go: "i" }
           ] },
      i: { say: [["M", "Parfait. On se revoit jeudi à 17 h ?"]],
           choices: [
             { fr: "Jeudi, je travaille. Est-ce que vendredi serait possible ?", tr: "Perşembe çalışıyorum. Cuma mümkün olur mu?", en: "I work on Thursday. Would Friday be possible?", ok: true, go: "j" },
             { fr: "Jeudi, je travaillerai pas possible. Vendredi ?", tr: "Perşembe, çalışacağım mümkün değil. Cuma?", en: "Thursday, I will work not possible. Friday?", ok: false,
               fb: { fr: "On comprend l'idée 😊, mais faites deux phrases : « Jeudi, je travaille. Vendredi, ce serait possible ? »", tr: "Ne demek istediğiniz anlaşılıyor 😊 ama iki cümle kurun: « Jeudi, je travaille. Vendredi, ce serait possible ? »", en: "We get the idea 😊, but make two sentences: « Jeudi, je travaille. Vendredi, ce serait possible ? »" } },
             { fr: "Jeudi à 17 h, c'est parfait.", tr: "Perşembe 17'de, mükemmel.", en: "Thursday at 5 p.m. is perfect.", ok: true, go: "j" }
           ] },
      j: { say: [["M", "C'est noté. La prochaine fois, apportez une grande serviette, s'il vous plaît."]],
           choices: [
             { fr: "D'accord, j'apporterai une serviette en papier. Bonne soirée !", tr: "Tamam, bir kâğıt peçete getireceğim. İyi akşamlar!", en: "OK, I'll bring a paper napkin. Have a good evening!", ok: false,
               fb: { fr: "Une serviette en papier ? Un peu petit pour la table 😄 ! Il parle d'une serviette de bain.", tr: "Kâğıt peçete mi? Masa için biraz küçük 😄! Banyo havlusundan bahsediyor.", en: "A paper napkin? A bit small for the table 😄! He means a bath towel." } },
             { fr: "D'accord, j'apporterai une serviette. Merci et bonne soirée !", tr: "Tamam, bir havlu getireceğim. Teşekkürler, iyi akşamlar!", en: "OK, I'll bring a towel. Thank you and have a nice evening!", ok: true, go: "fin" },
             { fr: "D'accord, une grande serviette. Merci, à la semaine dernière !", tr: "Tamam, büyük bir havlu. Teşekkürler, geçen hafta görüşürüz!", en: "OK, a big towel. Thanks, see you last week!", ok: false,
               fb: { fr: "Le rendez-vous est dans le futur 😉 : « à bientôt » ou « à la prochaine fois ».", tr: "Randevu gelecekte 😉: « à bientôt » ya da « à la prochaine fois ».", en: "The appointment is in the future 😉: « à bientôt » or « à la prochaine fois »." } }
           ] },
      fin: { end: "win", say: [["M", "Bonne soirée ! Et prenez soin de votre dos !"]],
             scene: { fr: "Vous sortez du cabinet, le dos déjà un peu mieux. Bravo, vous avez tout expliqué en français ! 💆‍♀️🎉", tr: "Muayenehaneden çıkıyorsunuz, beliniz şimdiden biraz daha iyi. Bravo, her şeyi Fransızca anlattınız! 💆‍♀️🎉", en: "You leave the practice, your back already a bit better. Well done, you explained everything in French! 💆‍♀️🎉" } }
    } },

  /* ───────────── 12. Aux urgences ───────────── */
  { id: "av-urgences", level: "A2", emoji: "🚑",
    t: { fr: "Une chute en courant", tr: "Koşarken bir düşüş", en: "A fall while running" },
    goal: { fr: "Aux urgences, racontez votre chute, décrivez la douleur et comprenez les conseils du médecin.", tr: "Acil serviste düşüşünüzü anlatın, ağrınızı tarif edin ve doktorun tavsiyelerini anlayın.", en: "At A&E, tell them about your fall, describe the pain and understand the doctor's advice." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Ce matin, vous êtes tombée en courant au parc. Votre cheville est gonflée. Une amie vous a conduite aux urgences.", tr: "Bu sabah parkta koşarken düştünüz. Bileğiniz şişmiş. Bir arkadaşınız sizi acile getirdi.", en: "This morning you fell while running in the park. Your ankle is swollen. A friend drove you to A&E." },
           say: [["F", "Bonjour madame. Qu'est-ce qui vous est arrivé ?"]],
           choices: [
             { fr: "J'ai tombé en courant dans le parc. Je me suis fait mal à la cheville.", tr: "Parkta koşarken düştüm. Bileğimi incittim.", en: "I have fell while running in the park. I hurt my ankle.", ok: false,
               fb: { fr: "« Tomber » se conjugue avec « être » : « je suis tombée » 😉.", tr: "« Tomber » fiili « être » ile çekimlenir: « je suis tombée » 😉.", en: "« Tomber » takes « être »: « je suis tombée » 😉." } },
             { fr: "Je suis tombée en courant dans le parc. Je me suis fait mal à la cheville.", tr: "Parkta koşarken düştüm. Bileğimi incittim.", en: "I fell while running in the park. I hurt my ankle.", ok: true, go: "b" },
             { fr: "Je suis tombée amoureuse en courant dans le parc. J'ai mal au cœur.", tr: "Parkta koşarken âşık oldum. Kalbim ağrıyor.", en: "I fell in love while running in the park. My heart hurts.", ok: false,
               fb: { fr: "Romantique 💘😄, mais ici on soigne les chevilles, pas les cœurs ! Dites « je suis tombée en courant ».", tr: "Romantik 💘😄 ama burada kalpler değil bilekler tedavi ediliyor! « Je suis tombée en courant » deyin.", en: "Romantic 💘😄, but here they treat ankles, not hearts! Say « je suis tombée en courant »." } }
           ] },
      b: { say: [["F", "D'accord. Vous avez votre carte Vitale et une pièce d'identité ?"]],
           choices: [
             { fr: "Oui, les voilà.", tr: "Evet, buyurun.", en: "Yes, here they are.", ok: true, go: "c" },
             { fr: "J'ai ma pièce d'identité, mais j'ai oublié ma carte Vitale à la maison.", tr: "Kimliğim yanımda ama sağlık kartımı evde unuttum.", en: "I have my ID, but I left my Carte Vitale at home.", ok: true, go: "c" },
             { fr: "J'ai seulement ma carte de fidélité du supermarché, désolée.", tr: "Sadece süpermarketin sadakat kartı var, üzgünüm.", en: "I only have my supermarket loyalty card, sorry.", ok: false,
               fb: { fr: "Elle ne donne pas de points pour les radios 😄 ! Montrez votre carte Vitale ou votre pièce d'identité.", tr: "Röntgen için puan vermiyorlar 😄! Sağlık kartınızı ya da kimliğinizi gösterin.", en: "It doesn't earn points for X-rays 😄! Show your Carte Vitale or your ID." } }
           ] },
      c: { scene: { fr: "Quarante minutes plus tard, une infirmière vous appelle.", tr: "Kırk dakika sonra bir hemşire sizi çağırıyor.", en: "Forty minutes later, a nurse calls you." },
           say: [["F2", "Madame ? Venez avec moi. Vous pouvez marcher ?"]],
           choices: [
             { fr: "Un peu, mais j'ai très mal quand je pose le pied.", tr: "Biraz, ama ayağımı bastığımda çok acıyor.", en: "A little, but it really hurts when I put my foot down.", ok: true, go: "d" },
             { fr: "Je pourrai marcher hier, mais j'ai très mal.", tr: "Dün yürüyebileceğim ama çok ağrıyor.", en: "I'll be able to walk yesterday, but it hurts a lot.", ok: false,
               fb: { fr: "Futur + hier, ça ne va pas ensemble 😄. Parlez de maintenant : « un peu, mais j'ai très mal ».", tr: "Gelecek zaman + dün bir arada olmaz 😄. Şimdiden bahsedin: « un peu, mais j'ai très mal ».", en: "Future + yesterday don't go together 😄. Talk about now: « un peu, mais j'ai très mal »." } },
             { fr: "Non, je ne peux pas poser le pied par terre.", tr: "Hayır, ayağımı yere basamıyorum.", en: "No, I can't put my foot on the ground.", ok: true, go: "c2" }
           ] },
      c2: { say: [["F2", "Je vais chercher un fauteuil roulant. Ne bougez pas !"]],
           choices: [
             { fr: "D'accord, merci ! Je vais courir avec vous !", tr: "Tamam, teşekkürler! Sizinle koşacağım!", en: "OK, thanks! I'll run with you!", ok: false,
               fb: { fr: "Courir ? C'est comme ça que tout a commencé 😄 ! Restez assise et dites merci.", tr: "Koşmak mı? Her şey böyle başladı 😄! Oturun ve teşekkür edin.", en: "Running? That's how it all started 😄! Stay seated and say thank you." } },
             { fr: "D'accord, merci beaucoup, c'est très gentil.", tr: "Tamam, çok teşekkürler, çok naziksiniz.", en: "OK, thank you very much, that's very kind.", ok: true, go: "d" },
             { fr: "D'accord, merci, je vais chercher un fauteuil au salon.", tr: "Tamam, teşekkürler, salondan bir koltuk getireceğim.", en: "OK, thanks, I'll go and get an armchair from the lounge.", ok: false,
               fb: { fr: "Un « fauteuil roulant », c'est une chaise avec des roues ♿. C'est l'infirmière qui va le chercher !", tr: "« Fauteuil roulant » tekerlekli sandalyedir ♿. Onu hemşire getirecek!", en: "A « fauteuil roulant » is a wheelchair ♿. The nurse is fetching it!" } }
           ] },
      d: { say: [["F2", "Ça s'est passé quand ?"]],
           choices: [
             { fr: "Dans deux heures.", tr: "İki saat sonra.", en: "In two hours.", ok: false,
               fb: { fr: "« Dans deux heures » = dans le futur 🔮😄. Pour le passé, on dit « il y a deux heures ».", tr: "« Dans deux heures » = gelecekte 🔮😄. Geçmiş için « il y a deux heures » (iki saat önce) denir.", en: "« Dans deux heures » = in the future 🔮😄. For the past, say « il y a deux heures » (two hours ago)." } },
             { fr: "Il y a deux heures, vers 9 h.", tr: "İki saat önce, saat 9 civarında.", en: "Two hours ago, around 9 a.m.", ok: true, go: "e" },
             { fr: "En voiture, avec mon amie.", tr: "Arabayla, arkadaşımla.", en: "By car, with my friend.", ok: false,
               fb: { fr: "« Quand ? » = à quel moment ⏰. Répondez avec une heure : « il y a deux heures ».", tr: "« Quand ? » = ne zaman ⏰. Bir saatle cevap verin: « il y a deux heures ».", en: "« Quand ? » = when ⏰. Answer with a time: « il y a deux heures »." } }
           ] },
      e: { say: [["F2", "Et comment vous êtes tombée ?"]],
           choices: [
             { fr: "Je suis tombée parce que c'était lundi, et je me suis tordu la cheville.", tr: "Pazartesi olduğu için düştüm ve bileğimi burktum.", en: "I fell because it was Monday, and I twisted my ankle.", ok: false,
               fb: { fr: "Le lundi est difficile pour tout le monde 😄, mais expliquez ce qui s'est passé avec votre pied.", tr: "Pazartesi herkes için zor 😄 ama ayağınıza ne olduğunu anlatın.", en: "Mondays are hard for everyone 😄, but explain what happened to your foot." } },
             { fr: "J'ai trébuché sur une racine d'arbre et je me suis tordu la cheville.", tr: "Bir ağaç köküne takıldım ve bileğimi burktum.", en: "I tripped over a tree root and I twisted my ankle.", ok: true, go: "f" },
             { fr: "J'ai trébuché sur une racine et je me suis tordue de rire.", tr: "Bir köke takıldım ve gülmekten kırıldım.", en: "I tripped over a root and I doubled up laughing.", ok: false,
               fb: { fr: "« Se tordre de rire » = rire très fort 😂. Pour le pied, c'est « je me suis tordu la cheville ».", tr: "« Se tordre de rire » = gülmekten kırılmak 😂. Ayak için « je me suis tordu la cheville » denir.", en: "« Se tordre de rire » = to double up laughing 😂. For the foot, it's « je me suis tordu la cheville »." } }
           ] },
      f: { scene: { fr: "Un médecin arrive et regarde votre cheville.", tr: "Bir doktor geliyor ve bileğinize bakıyor.", en: "A doctor comes and looks at your ankle." },
           say: [["M", "Bonjour, je suis le docteur Petit. Vous avez entendu un bruit, un « crac », quand vous êtes tombée ?"]],
           choices: [
             { fr: "Oui, j'ai écouté un petit « crac ». J'ai eu très peur !", tr: "Evet, küçük bir « crac » dinledim. Çok korktum!", en: "Yes, I listened to a little « crack ». I was very scared!", ok: false,
               fb: { fr: "On « écoute » la musique exprès 🎧. Un bruit qui arrive tout seul, on l'« entend » : « j'ai entendu un crac ».", tr: "Müzik bilerek « écouter » edilir (dinlenir) 🎧. Kendiliğinden gelen bir ses « entendre » edilir (duyulur): « j'ai entendu un crac ».", en: "You « écouter » (listen to) music on purpose 🎧. A noise that just happens, you « entendre » (hear): « j'ai entendu un crac »." } },
             { fr: "Non, je n'ai rien entendu, mais la cheville a gonflé tout de suite.", tr: "Hayır, hiçbir şey duymadım ama bilek hemen şişti.", en: "No, I didn't hear anything, but the ankle swelled up straight away.", ok: true, go: "g" },
             { fr: "Oui, j'ai entendu un petit « crac ». J'ai eu très peur !", tr: "Evet, küçük bir « çat » sesi duydum. Çok korktum!", en: "Yes, I heard a little « crack ». I was really scared!", ok: true, go: "g" }
           ] },
      g: { say: [["M", "On va faire une radio pour vérifier que ce n'est pas cassé."]],
           choices: [
             { fr: "D'accord. Ça va prendre combien de temps ?", tr: "Tamam. Ne kadar sürecek?", en: "OK. How long will it take?", ok: true, go: "h" },
             { fr: "Une radio ? Je préfère écouter de la musique.", tr: "Radyo mu? Müzik dinlemeyi tercih ederim.", en: "A radio? I'd rather listen to music.", ok: false,
               fb: { fr: "À l'hôpital, « une radio » = une radiographie, une photo des os 🦴📻. Dites simplement « d'accord ».", tr: "Hastanede « une radio » = röntgen, kemiklerin fotoğrafı 🦴📻. Sadece « d'accord » deyin.", en: "At the hospital, « une radio » = an X-ray, a photo of your bones 🦴📻. Just say « d'accord »." } },
             { fr: "D'accord. Ça va prendre comment de temps ?", tr: "Tamam. Nasıl zaman alacak?", en: "OK. How much time will it take?", ok: false,
               fb: { fr: "Pour une quantité, c'est « combien » : « combien de temps ? » ⏱️.", tr: "Miktar için « combien » kullanılır: « combien de temps ? » ⏱️.", en: "For an amount, use « combien »: « combien de temps ? » ⏱️." } }
           ] },
      h: { scene: { fr: "Une heure plus tard, le médecin revient avec la radio.", tr: "Bir saat sonra doktor röntgenle geri geliyor.", en: "An hour later, the doctor comes back with the X-ray." },
           say: [["M", "Bonne nouvelle : ce n'est pas cassé. C'est une entorse."]],
           choices: [
             { fr: "Oh non, c'est cassé !", tr: "Ah hayır, kırık!", en: "Oh no, it's broken!", ok: false,
               fb: { fr: "Écoutez bien : « ce n'est pas cassé » ✅. C'est une bonne nouvelle !", tr: "İyi dinleyin: « ce n'est pas cassé » (kırık değil) ✅. Bu iyi bir haber!", en: "Listen carefully: « ce n'est pas cassé » (it's not broken) ✅. It's good news!" } },
             { fr: "Ouf ! Alors je peux courir demain ?", tr: "Oh be! O zaman yarın koşabilir miyim?", en: "Phew! So can I run tomorrow?", ok: false,
               fb: { fr: "Patience, championne 😉 ! Avec une entorse, pas de course demain. Demandez d'abord ce que vous devez faire.", tr: "Sabır, şampiyon 😉! Burkulmayla yarın koşu yok. Önce ne yapmanız gerektiğini sorun.", en: "Patience, champ 😉! With a sprain, no running tomorrow. First ask what you should do." } },
             { fr: "Ouf ! Qu'est-ce que je dois faire ?", tr: "Oh be! Ne yapmam gerekiyor?", en: "Phew! What should I do?", ok: true, go: "i" }
           ] },
      i: { say: [["M", "Vous mettrez de la glace trois fois par jour et vous éviterez de marcher pendant une semaine. Je vous prescris des béquilles."]],
           choices: [
             { fr: "D'accord, je marcherai beaucoup cette semaine, avec les béquilles.", tr: "Tamam, bu hafta koltuk değnekleriyle çok yürüyeceğim.", en: "OK, I'll walk a lot this week, with the crutches.", ok: false,
               fb: { fr: "C'est le contraire 😄 ! « Éviter de marcher » = ne pas marcher beaucoup. Reposez-vous !", tr: "Tam tersi 😄! « Éviter de marcher » = fazla yürümemek. Dinlenin!", en: "It's the opposite 😄! « Éviter de marcher » = don't walk much. Rest!" } },
             { fr: "D'accord : glace, repos et béquilles. Je pourrai courir quand ?", tr: "Tamam: buz, dinlenme ve koltuk değnekleri. Ne zaman koşabilirim?", en: "OK: ice, rest and crutches. When can I run?", ok: true, go: "j" },
             { fr: "D'accord : de la glace dans un verre, trois fois par jour.", tr: "Tamam: bardağa buz, günde üç kez.", en: "OK: ice in a glass, three times a day.", ok: false,
               fb: { fr: "La glace, c'est sur la cheville, pas dans le verre 🧊😄 !", tr: "Buz bileğe konur, bardağa değil 🧊😄!", en: "The ice goes on your ankle, not in your glass 🧊😄!" } }
           ] },
      j: { say: [["M", "Dans trois ou quatre semaines, doucement. Et pourquoi pas avec quelques séances de kiné ?"]],
           choices: [
             { fr: "Bonne idée ! Merci beaucoup, docteur.", tr: "İyi fikir! Çok teşekkürler, doktor bey.", en: "Good idea! Thank you very much, doctor.", ok: true, go: "fin" },
             { fr: "Je connais bien la rééducation : j'étais kiné en Turquie ! Merci, docteur.", tr: "Rehabilitasyonu iyi bilirim: Türkiye'de fizyoterapisttim! Teşekkürler, doktor bey.", en: "I know rehab well: I was a physio in Turkey! Thank you, doctor.", ok: true, go: "fin" },
             { fr: "Merci, docteur ! Bonne idée ! À demain pour le marathon !", tr: "Teşekkürler doktor! Güzel fikir! Yarın maratonda görüşürüz!", en: "Thanks, doctor! Good idea! See you tomorrow at the marathon!", ok: false,
               fb: { fr: "Un marathon demain ? Votre cheville dit non 😄🩼 ! Dites simplement merci.", tr: "Yarın maraton mu? Bileğiniz hayır diyor 😄🩼! Sadece teşekkür edin.", en: "A marathon tomorrow? Your ankle says no 😄🩼! Just say thank you." } }
           ] },
      fin: { end: "win", say: [["M", "Avec plaisir. Bon rétablissement, madame !"]],
             scene: { fr: "Vous repartez avec vos béquilles et votre amie. Bravo, vous avez géré les urgences en français ! 🩼🎉", tr: "Koltuk değnekleriniz ve arkadaşınızla çıkıyorsunuz. Bravo, acil servisi Fransızca hallettiniz! 🩼🎉", en: "You leave with your crutches and your friend. Well done, you handled A&E in French! 🩼🎉" } }
    } },

  /* ───────────── 13. Inscription en STAPS ───────────── */
  { id: "av-staps", level: "A2", emoji: "🎓",
    t: { fr: "S'inscrire en STAPS", tr: "STAPS'a kaydolmak", en: "Enrolling in sports science" },
    goal: { fr: "Au service de la scolarité, renseignez-vous sur l'inscription en licence STAPS et sur les documents à fournir.", tr: "Öğrenci işlerinde STAPS lisans kaydı ve gereken belgeler hakkında bilgi alın.", en: "At the student office, find out how to enrol in a STAPS degree and which documents you need." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous êtes à l'université, au service de la scolarité. Une employée vous fait signe.", tr: "Üniversitedesiniz, öğrenci işlerinde. Bir görevli size işaret ediyor.", en: "You're at the university, at the student office. A member of staff waves you over." },
           say: [["F", "Bonjour madame, je vous écoute."]],
           choices: [
             { fr: "Bonjour ! Je voudrais un permis de STAPS, s'il vous plaît.", tr: "Merhaba! Bir STAPS ehliyeti istiyorum, lütfen.", en: "Hello! I'd like a STAPS driving licence, please.", ok: false,
               fb: { fr: "Un permis, c'est pour conduire 🚗😄. À l'université, le diplôme de trois ans s'appelle « la licence ».", tr: "« Permis » araba kullanmak içindir 🚗😄. Üniversitede üç yıllık diploma « la licence » (lisans) olarak adlandırılır.", en: "A « permis » is for driving 🚗😄. At university, the three-year degree is called « la licence »." } },
             { fr: "Bonjour ! Je voudrais des renseignements sur la licence STAPS, s'il vous plaît.", tr: "Merhaba! STAPS lisansı hakkında bilgi almak istiyorum, lütfen.", en: "Hello! I'd like some information about the STAPS degree, please.", ok: true, go: "b" },
             { fr: "Bonjour ! Je me suis inscrite en licence STAPS demain, s'il vous plaît.", tr: "Merhaba! Yarın STAPS lisansına kaydoldum, lütfen.", en: "Hello! I enrolled in the STAPS degree tomorrow, please.", ok: false,
               fb: { fr: "Passé composé + demain ? Le temps se mélange 😄. Demandez plutôt « des renseignements sur l'inscription ».", tr: "Geçmiş zaman + yarın mı? Zamanlar karıştı 😄. Bunun yerine « des renseignements sur l'inscription » isteyin.", en: "Past tense + tomorrow? Time travel 😄. Ask for « des renseignements sur l'inscription » instead." } }
           ] },
      b: { say: [["F", "Bien sûr. Vous êtes en terminale, ou vous avez déjà un diplôme ?"]],
           choices: [
             { fr: "Je suis terminée. J'ai fini mes études en Turquie.", tr: "Ben bittim. Türkiye'de okulumu bitirdim.", en: "I'm finished. I finished my studies in Turkey.", ok: false,
               fb: { fr: "Oh non, vous n'êtes pas « terminée », vous commencez une nouvelle aventure 😄 ! Parlez de votre diplôme.", tr: "Yok canım, « bitmiş » değilsiniz, yeni bir maceraya başlıyorsunuz 😄! Diplomanızdan bahsedin.", en: "Oh no, you're not « finished », you're starting a new adventure 😄! Talk about your diploma." } },
             { fr: "J'ai obtenu un diplôme de kiné en Turquie l'année prochaine.", tr: "Gelecek yıl Türkiye'de fizyoterapi diploması aldım.", en: "I got a physio degree in Turkey next year.", ok: false,
               fb: { fr: "Un diplôme déjà obtenu, c'est dans le passé : enlevez « l'année prochaine » 😉.", tr: "Zaten alınmış bir diploma geçmişte kalır: « l'année prochaine »ı çıkarın 😉.", en: "A degree you've already got is in the past: drop « l'année prochaine » 😉." } },
             { fr: "J'ai déjà un diplôme de kinésithérapie. Je l'ai obtenu en Turquie.", tr: "Zaten fizyoterapi diplomam var. Türkiye'de aldım.", en: "I already have a physiotherapy degree. I got it in Turkey.", ok: true, go: "c" }
           ] },
      c: { say: [["F", "Ah, intéressant ! Et votre diplôme n'est pas reconnu en France, c'est ça ?"]],
           choices: [
             { fr: "Exactement. C'est pour ça que je voudrais reprendre des études ici.", tr: "Aynen öyle. Bu yüzden burada yeniden okumak istiyorum.", en: "Exactly. That's why I'd like to go back to studying here.", ok: true, go: "d" },
             { fr: "Exactement, il ne me reconnaît pas dans la rue.", tr: "Aynen, sokakta beni tanımıyor.", en: "Exactly, it doesn't recognise me in the street.", ok: false,
               fb: { fr: "Un diplôme qui vous ignore dans la rue 😄 ! Ici, « reconnu » = accepté officiellement. Expliquez votre projet.", tr: "Sokakta sizi görmezden gelen bir diploma 😄! Burada « reconnu » = resmî olarak kabul edilmiş. Planınızı anlatın.", en: "A diploma that snubs you in the street 😄! Here « reconnu » = officially accepted. Explain your plan." } },
             { fr: "Exactement. C'est pour ça que je voudrais reprendre des études hier.", tr: "Aynen. Bu yüzden dün yeniden okumak isterdim.", en: "Exactly. That's why I'd like to go back to studying yesterday.", ok: false,
               fb: { fr: "Presque parfait ! Mais « hier » ne va pas avec un projet 😉. Dites « ici » ou « l'année prochaine ».", tr: "Neredeyse mükemmel! Ama « hier » (dün) bir planla uyuşmaz 😉. « Ici » ya da « l'année prochaine » deyin.", en: "Almost perfect! But « hier » (yesterday) doesn't fit a plan 😉. Say « ici » or « l'année prochaine »." } }
           ] },
      d: { say: [["F", "Avec un diplôme étranger, vous devez déposer un dossier. Vous voulez entrer en première année, ou demander une équivalence pour aller directement en deuxième année ?"]],
           choices: [
             { fr: "En première année. Ce sera plus simple pour moi avec le français.", tr: "Birinci sınıfa. Fransızca açısından benim için daha kolay olur.", en: "First year. It'll be easier for me with the French.", ok: true, go: "e1" },
             { fr: "Je voudrais entrer en dernière année, directement demain, si c'est possible.", tr: "Mümkünse doğrudan yarın son sınıfa girmek istiyorum.", en: "I'd like to go straight into the final year tomorrow, if possible.", ok: false,
               fb: { fr: "Quelle motivation 😄 ! Mais choisissez entre les deux options : première année ou équivalence.", tr: "Ne motivasyon 😄! Ama iki seçenekten birini seçin: birinci sınıf ya da denklik.", en: "What motivation 😄! But choose one of the two options: first year or equivalence." } },
             { fr: "Je voudrais demander une équivalence, si c'est possible.", tr: "Mümkünse denklik başvurusu yapmak istiyorum.", en: "I'd like to apply for an equivalence, if possible.", ok: true, go: "e2" }
           ] },
      e1: { say: [["F", "D'accord. Il vous faudra un certificat de niveau de français. Vous avez déjà passé un examen ?"]],
           choices: [
             { fr: "Oui, j'ai passé devant l'examen. Je prépare le DELF.", tr: "Evet, sınavın önünden geçtim. DELF'e hazırlanıyorum.", en: "Yes, I walked past the exam. I'm preparing for the DELF.", ok: false,
               fb: { fr: "« Passer devant » = marcher à côté 🚶😄. « Passer un examen » = le faire. Et si ce n'est pas encore fait, dites-le !", tr: "« Passer devant » = önünden geçmek 🚶😄. « Passer un examen » = sınava girmek. Henüz girmediyseniz söyleyin!", en: "« Passer devant » = walk past 🚶😄. « Passer un examen » = sit an exam. And if you haven't yet, say so!" } },
             { fr: "Pas encore, mais je prépare le DELF. Je le passerai hier.", tr: "Henüz değil ama DELF'e hazırlanıyorum. Dün gireceğim.", en: "Not yet, but I'm preparing for the DELF. I'll take it yesterday.", ok: false,
               fb: { fr: "Futur + hier ? Impossible 😄. Dites « je le passerai bientôt ».", tr: "Gelecek zaman + dün mü? İmkânsız 😄. « Je le passerai bientôt » deyin.", en: "Future + yesterday? Impossible 😄. Say « je le passerai bientôt »." } },
             { fr: "Pas encore, mais je prépare le DELF. Je le passerai bientôt.", tr: "Henüz değil ama DELF'e hazırlanıyorum. Yakında gireceğim.", en: "Not yet, but I'm preparing for the DELF. I'll take it soon.", ok: true, go: "f" }
           ] },
      e2: { say: [["F", "Une commission étudiera votre dossier. Il faudra vos relevés de notes, traduits en français."]],
           choices: [
             { fr: "D'accord, je les traduirai avec une application sur mon téléphone.", tr: "Tamam, onları telefonumdaki bir uygulamayla çevireceğim.", en: "OK, I'll translate them with an app on my phone.", ok: false,
               fb: { fr: "Pour un dossier officiel, il faut souvent un traducteur assermenté, pas une appli 📱😉. Demandez où les faire traduire.", tr: "Resmî bir dosya için genellikle yeminli tercüman gerekir, uygulama değil 📱😉. Nerede çevirtebileceğinizi sorun.", en: "For an official file you usually need a sworn translator, not an app 📱😉. Ask where to get them translated." } },
             { fr: "D'accord. Où est-ce que je peux les faire traduire ?", tr: "Tamam. Onları nerede çevirtebilirim?", en: "OK. Where can I get them translated?", ok: true, go: "f" },
             { fr: "Pas de problème, ils sont déjà en turc !", tr: "Sorun değil, zaten Türkçeler!", en: "No problem, they're already in Turkish!", ok: false,
               fb: { fr: "La commission ne lit peut-être pas le turc 😄🇹🇷 ! Il faut une traduction en français.", tr: "Komisyon Türkçe okumuyor olabilir 😄🇹🇷! Fransızca çeviri gerekiyor.", en: "The committee may not read Turkish 😄🇹🇷! You need a French translation." } }
           ] },
      f: { say: [["F", "Attention : chez nous, la date limite pour déposer le dossier, c'est le 15 février."]],
           choices: [
             { fr: "Le 15 février ? Alors j'ai le temps jusqu'en mars !", tr: "15 Şubat mı? O zaman marta kadar vaktim var!", en: "15 February? Then I have until March!", ok: false,
               fb: { fr: "Non, non 😅 ! « Date limite » = le dernier jour. Après le 15 février, c'est trop tard.", tr: "Hayır, hayır 😅! « Date limite » = son gün. 15 Şubat'tan sonra çok geç.", en: "No, no 😅! « Date limite » = the last day. After 15 February it's too late." } },
             { fr: "Le 15 février, c'est noté. Je peux l'envoyer en ligne ?", tr: "15 Şubat, not ettim. İnternetten gönderebilir miyim?", en: "15 February, noted. Can I send it online?", ok: true, go: "g" },
             { fr: "D'accord, je le déposerai devant la porte le 16.", tr: "Tamam, 16'sında kapının önüne bırakırım.", en: "OK, I'll leave it outside the door on the 16th.", ok: false,
               fb: { fr: "Le 16, c'est un jour trop tard 📅😄 ! Notez bien : avant le 15 février.", tr: "16'sı bir gün geç 📅😄! İyi not edin: 15 Şubat'tan önce.", en: "The 16th is one day too late 📅😄! Note it down: by 15 February." } }
           ] },
      g: { say: [["F", "Oui, tout se fait sur le site de l'université."]],
           choices: [
             { fr: "Parfait. Le site, c'est au deuxième étage ?", tr: "Mükemmel. Site ikinci katta mı?", en: "Perfect. Is the site on the second floor?", ok: false,
               fb: { fr: "Ici, « le site » = le site internet 💻😄, pas un bâtiment !", tr: "Burada « le site » = internet sitesi 💻😄, bir bina değil!", en: "Here « le site » = the website 💻😄, not a building!" } },
             { fr: "Parfait. Est-ce qu'il y a des cours le soir ? Je travaille dans une salle de sport.", tr: "Mükemmel. Akşam dersleri var mı? Bir spor salonunda çalışıyorum.", en: "Perfect. Are there evening classes? I work in a gym.", ok: true, go: "h" },
             { fr: "Parfait. Est-ce qu'il y a des cours le soir ? Je travaille dans une salle de bains.", tr: "Mükemmel. Akşam dersleri var mı? Bir banyoda çalışıyorum.", en: "Perfect. Are there evening classes? I work in a bathroom.", ok: false,
               fb: { fr: "Dans une salle de bains ? Ça doit être humide 🛁😄 ! Vous travaillez dans une « salle de sport ».", tr: "Banyoda mı? Epey nemli olmalı 🛁😄! Siz bir « salle de sport »ta (spor salonu) çalışıyorsunuz.", en: "In a bathroom? Must be damp 🛁😄! You work in a « salle de sport » (gym)." } }
           ] },
      h: { say: [["F", "Non, les cours sont en journée. Mais il existe un statut spécial pour les étudiants salariés."]],
           choices: [
             { fr: "Ah, c'est intéressant ! Vous pourriez m'expliquer ?", tr: "Ah, ilginç! Bana açıklayabilir misiniz?", en: "Oh, that's interesting! Could you explain it to me?", ok: true, go: "i" },
             { fr: "Ah, moi aussi, je suis salée ! Vous pourriez m'expliquer ?", tr: "Ah, ben de tuzluyum! Açıklayabilir misiniz?", en: "Oh, I'm salty too! Could you explain?", ok: false,
               fb: { fr: "« Salée » = avec du sel 🧂😄. Une personne qui a un travail est « salariée ». Demandez-lui d'expliquer !", tr: "« Salée » = tuzlu 🧂😄. İşi olan kişi « salariée »dir (maaşlı çalışan). Açıklamasını isteyin!", en: "« Salée » = salty 🧂😄. Someone with a job is « salariée ». Ask her to explain!" } },
             { fr: "Ah, tant pis, alors j'arrête tout, c'est trop compliqué.", tr: "Ah, olsun, o zaman her şeyi bırakıyorum, çok karışık.", en: "Oh well, then I'll give up everything, it's too complicated.", ok: false,
               fb: { fr: "Non, ne lâchez pas 💪 ! Il y a une solution : demandez-lui d'expliquer ce statut.", tr: "Hayır, pes etmeyin 💪! Bir çözüm var: bu statüyü açıklamasını isteyin.", en: "No, don't give up 💪! There's a solution: ask her to explain this status." } }
           ] },
      i: { say: [["F", "Avec ce statut, vous pourriez avoir des aménagements, par exemple pour les examens. Je vous donne une brochure."]],
           choices: [
             { fr: "Merci, vous m'avez beaucoup aidée. Au revoir, monsieur !", tr: "Teşekkürler, bana çok yardımcı oldunuz. Hoşça kalın, beyefendi!", en: "Thank you, you've been a great help. Goodbye, sir!", ok: false,
               fb: { fr: "Très gentil, mais c'est une femme 😄 : « au revoir, madame » !", tr: "Çok kibar ama karşınızdaki bir kadın 😄: « au revoir, madame »!", en: "Very kind, but she's a woman 😄: « au revoir, madame »!" } },
             { fr: "Merci beaucoup, vous m'avez beaucoup aidée. Bonne journée !", tr: "Çok teşekkürler, bana çok yardımcı oldunuz. İyi günler!", en: "Thank you so much, you've been a great help. Have a nice day!", ok: true, go: "fin" },
             { fr: "Merci, je lirai la brochure la semaine dernière.", tr: "Teşekkürler, broşürü geçen hafta okuyacağım.", en: "Thanks, I'll read the brochure last week.", ok: false,
               fb: { fr: "Futur + « la semaine dernière » ? Retour vers le futur 😄 ! Dites « ce soir » ou « ce week-end ».", tr: "Gelecek zaman + « geçen hafta » mı? Geleceğe dönüş 😄! « Ce soir » ya da « ce week-end » deyin.", en: "Future + « last week »? Back to the future 😄! Say « ce soir » or « ce week-end »." } }
           ] },
      fin: { end: "win", say: [["F", "Avec plaisir. Bon courage pour votre dossier !"]],
             scene: { fr: "Vous sortez avec la brochure et un plan clair. Bravo, le projet STAPS avance ! 🎓🎉", tr: "Broşür ve net bir planla çıkıyorsunuz. Bravo, STAPS projesi ilerliyor! 🎓🎉", en: "You leave with the brochure and a clear plan. Well done, the STAPS project is moving forward! 🎓🎉" } }
    } },

  /* ───────────── 14. Le colis perdu ───────────── */
  { id: "av-colis", level: "A2", emoji: "📦",
    t: { fr: "Le colis perdu", tr: "Kayıp kargo", en: "The lost parcel" },
    goal: { fr: "Appelez le service client, expliquez que votre colis n'est pas arrivé et obtenez une solution.", tr: "Müşteri hizmetlerini arayın, kargonuzun gelmediğini anlatın ve bir çözüm alın.", en: "Call customer service, explain that your parcel never arrived and get a solution." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous avez commandé des chaussures de course il y a dix jours. L'application dit « livré », mais vous n'avez rien reçu. Vous appelez le service client.", tr: "On gün önce koşu ayakkabısı sipariş ettiniz. Uygulama « teslim edildi » diyor ama hiçbir şey almadınız. Müşteri hizmetlerini arıyorsunuz.", en: "You ordered running shoes ten days ago. The app says « delivered », but you received nothing. You call customer service." },
           say: [["N", "Bienvenue au service client. Pour un problème de livraison, dites « livraison »."]],
           choices: [
             { fr: "Bonjour, comment allez-vous ?", tr: "Merhaba, nasılsınız?", en: "Hello, how are you?", ok: false,
               fb: { fr: "Très poli, mais c'est un robot 🤖😄. Il attend un seul mot : « livraison ».", tr: "Çok kibar ama bu bir robot 🤖😄. Tek bir kelime bekliyor: « livraison ».", en: "Very polite, but it's a robot 🤖😄. It's waiting for one word: « livraison »." } },
             { fr: "Livraison.", tr: "Teslimat.", en: "Delivery.", ok: true, go: "b" },
             { fr: "Libération !", tr: "Kurtuluş!", en: "Liberation!", ok: false,
               fb: { fr: "Le robot ne comprend pas la révolution 😄. Articulez bien : « li-vrai-son ».", tr: "Robot devrimden anlamıyor 😄. Net söyleyin: « li-vrai-son ».", en: "The robot doesn't do revolutions 😄. Say it clearly: « li-vrai-son »." } }
           ] },
      b: { say: [["F", "Bonjour, Clara à l'appareil. Qu'est-ce que je peux faire pour vous ?"]],
           choices: [
             { fr: "Bonjour, j'ai commandé des chaussures dans dix jours, mais je ne les ai pas reçues.", tr: "Merhaba, on gün sonra ayakkabı sipariş ettim ama gelmedi.", en: "Hello, I ordered shoes in ten days, but I haven't received them.", ok: false,
               fb: { fr: "« Dans dix jours » = dans le futur. Pour le passé, c'est « il y a dix jours » 😉.", tr: "« Dans dix jours » = gelecekte. Geçmiş için « il y a dix jours » (on gün önce) denir 😉.", en: "« Dans dix jours » = in the future. For the past, it's « il y a dix jours » (ten days ago) 😉." } },
             { fr: "Bonjour, j'ai commandé des chaussures il y a dix jours, mais je ne les ai pas reçus.", tr: "Merhaba, on gün önce ayakkabı sipariş ettim ama onları almadım.", en: "Hello, I ordered shoes ten days ago, but I haven't received them.", ok: false,
               fb: { fr: "Très bien ! Petit détail : « les chaussures » est féminin, donc « je ne les ai pas reçues » ✍️.", tr: "Çok iyi! Küçük bir ayrıntı: « les chaussures » dişil, bu yüzden « je ne les ai pas reçues » ✍️.", en: "Very good! Small detail: « les chaussures » is feminine, so « je ne les ai pas reçues » ✍️." } },
             { fr: "Bonjour, j'ai commandé des chaussures il y a dix jours, mais je ne les ai pas reçues.", tr: "Merhaba, on gün önce ayakkabı sipariş ettim ama elime ulaşmadı.", en: "Hello, I ordered shoes ten days ago, but I haven't received them.", ok: true, go: "c" }
           ] },
      c: { say: [["F", "Je suis désolée. Vous avez votre numéro de commande ?"]],
           choices: [
             { fr: "Oui, c'est le 482715.", tr: "Evet, 482715.", en: "Yes, it's 482715.", ok: true, go: "d" },
             { fr: "Je ne l'ai pas. Vous pourriez chercher avec mon e-mail ?", tr: "Elimde yok. E-postamla arayabilir misiniz?", en: "I don't have it. Could you search with my email?", ok: true, go: "c2" },
             { fr: "Oui, c'est le 18 h 30, je crois.", tr: "Evet, 18.30, sanırım.", en: "Yes, it's the 6:30 p.m., I think.", ok: false,
               fb: { fr: "18 h 30, c'est une heure ⏰, pas un numéro de commande 😄. Lisez le numéro dans l'e-mail de confirmation.", tr: "18.30 bir saat ⏰, sipariş numarası değil 😄. Numarayı onay e-postasından okuyun.", en: "6:30 p.m. is a time ⏰, not an order number 😄. Read the number in the confirmation email." } }
           ] },
      c2: { say: [["F", "Bien sûr. Quelle est votre adresse e-mail ?"]],
           choices: [
             { fr: "C'est coureuse.heureuse à exemple point fr.", tr: "coureuse.heureuse « à » exemple nokta fr.", en: "It's coureuse.heureuse « at » exemple dot fr.", ok: false,
               fb: { fr: "Le signe @ se dit « arobase » en français 😉 : « coureuse.heureuse arobase exemple point fr ».", tr: "@ işareti Fransızcada « arobase » diye okunur 😉: « coureuse.heureuse arobase exemple point fr ».", en: "The @ sign is « arobase » in French 😉: « coureuse.heureuse arobase exemple point fr »." } },
             { fr: "C'est coureuse.heureuse arobase exemple point fr.", tr: "coureuse.heureuse et işareti exemple nokta fr.", en: "It's coureuse.heureuse at exemple dot fr.", ok: true, go: "d" },
             { fr: "C'est au 8, rue des Lilas, au deuxième étage.", tr: "Lilas sokağı 8 numara, ikinci kat.", en: "It's 8 rue des Lilas, second floor.", ok: false,
               fb: { fr: "Ça, c'est votre adresse postale 🏠. Elle demande l'adresse e-mail 📧 !", tr: "Bu posta adresiniz 🏠. E-posta adresinizi soruyor 📧!", en: "That's your postal address 🏠. She's asking for your email address 📧!" } }
           ] },
      d: { say: [["F", "Merci. Je vois que le colis a été livré mardi, à 14 h."]],
           choices: [
             { fr: "C'est impossible : mardi, j'étais au travail, il n'y avait personne.", tr: "İmkânsız: salı günü işteydim, evde kimse yoktu.", en: "That's impossible: on Tuesday I was at work, nobody was home.", ok: true, go: "e" },
             { fr: "Ah, d'accord, il a été livré mardi. Merci, au revoir !", tr: "Ah, tamam, salı günü teslim edilmiş. Teşekkürler, hoşça kalın!", en: "Oh, OK, it was delivered on Tuesday. Thanks, goodbye!", ok: false,
               fb: { fr: "Attendez, vous n'avez toujours pas vos chaussures 👟😄 ! Expliquez que vous n'étiez pas là.", tr: "Durun, ayakkabılarınız hâlâ yok 👟😄! Evde olmadığınızı açıklayın.", en: "Wait, you still don't have your shoes 👟😄! Explain that you weren't there." } },
             { fr: "C'est impossible : mardi, j'ai été fatiguée et il n'y a eu personne.", tr: "İmkânsız: salı yorgun oldum ve kimse olmadı.", en: "That's impossible: on Tuesday I have been tired and nobody has been.", ok: false,
               fb: { fr: "Pour décrire une situation dans le passé, on utilise l'imparfait : « j'étais au travail », « il n'y avait personne ».", tr: "Geçmişteki bir durumu anlatmak için imparfait kullanılır: « j'étais au travail », « il n'y avait personne ».", en: "To describe a situation in the past, use the imparfait: « j'étais au travail », « il n'y avait personne »." } }
           ] },
      e: { say: [["F", "Le livreur a peut-être laissé le colis chez un voisin ou chez le gardien. Vous avez vérifié ?"]],
           choices: [
             { fr: "Non, je n'aime pas mes voisins.", tr: "Hayır, komşularımı sevmiyorum.", en: "No, I don't like my neighbours.", ok: false,
               fb: { fr: "Peut-être, mais ils ont peut-être vos chaussures 😄 ! Dites ce que vous avez vérifié.", tr: "Olabilir ama ayakkabılarınız onlarda olabilir 😄! Neyi kontrol ettiğinizi söyleyin.", en: "Maybe, but they might have your shoes 😄! Say what you checked." } },
             { fr: "Oui, j'ai demandé à mes voisins et à la gardienne, mais ils ne lui ont pas vu.", tr: "Evet, komşularıma ve kapıcıya sordum ama ona görmemişler.", en: "Yes, I asked my neighbours and the caretaker, but they haven't seen to it.", ok: false,
               fb: { fr: "« Voir le colis » : pas de « à », donc le pronom est « le » → « ils ne l'ont pas vu » 😉.", tr: "« Voir le colis »: « à » yok, bu yüzden zamir « le » → « ils ne l'ont pas vu » 😉.", en: "« Voir le colis » has no « à », so the pronoun is « le » → « ils ne l'ont pas vu » 😉." } },
             { fr: "Oui, j'ai demandé à mes voisins et à la gardienne, mais ils ne l'ont pas vu.", tr: "Evet, komşularıma ve kapıcıya sordum ama görmemişler.", en: "Yes, I asked my neighbours and the caretaker, but they haven't seen it.", ok: true, go: "f" }
           ] },
      f: { say: [["F", "Je suis vraiment désolée. Je peux vous proposer deux solutions : un remboursement ou un nouvel envoi."]],
           choices: [
             { fr: "Je préférerais un nouvel envoi. J'ai besoin des chaussures !", tr: "Yeniden gönderimi tercih ederim. Ayakkabılara ihtiyacım var!", en: "I'd prefer a new delivery. I need the shoes!", ok: true, go: "g1" },
             { fr: "Je voudrais les deux, s'il vous plaît : le remboursement et un nouvel envoi !", tr: "İkisini de istiyorum, lütfen: iade ve yeni gönderim!", en: "I'd like both, please: the refund and a new delivery!", ok: false,
               fb: { fr: "Bien essayé 😄 ! Mais il faut choisir : le remboursement ou un nouvel envoi.", tr: "İyi deneme 😄! Ama seçmeniz gerekiyor: para iadesi ya da yeniden gönderim.", en: "Nice try 😄! But you have to choose: a refund or a new delivery." } },
             { fr: "Je voudrais être remboursée, s'il vous plaît.", tr: "Paramın iade edilmesini istiyorum, lütfen.", en: "I'd like a refund, please.", ok: true, go: "g2" }
           ] },
      g1: { say: [["F", "Parfait. Les chaussures arriveront jeudi. Vous voulez une livraison à domicile ou en point relais ?"]],
           choices: [
             { fr: "En point relais, ce sera plus sûr.", tr: "Teslim noktasına, daha güvenli olur.", en: "To a pick-up point, that'll be safer.", ok: true, go: "h" },
             { fr: "Au point de relaxation, s'il vous plaît.", tr: "Rahatlama noktasına, lütfen.", en: "To the relaxation point, please.", ok: false,
               fb: { fr: "Un point de relaxation ? Ça donne envie 🧘😄, mais on dit « point relais » : un magasin qui garde les colis.", tr: "Rahatlama noktası mı? Kulağa hoş geliyor 🧘😄 ama « point relais » denir: kargoları tutan bir dükkân.", en: "A relaxation point? Sounds tempting 🧘😄, but it's « point relais »: a shop that holds parcels." } },
             { fr: "Je voudrais une livraison jeudi dernier.", tr: "Geçen perşembe teslimat istiyorum.", en: "I'd like delivery last Thursday.", ok: false,
               fb: { fr: "Jeudi dernier, c'est passé 😄 ! Choisissez le lieu : à domicile ou en point relais.", tr: "Geçen perşembe geçti 😄! Yeri seçin: eve ya da teslim noktasına.", en: "Last Thursday is gone 😄! Choose the place: home or pick-up point." } }
           ] },
      g2: { say: [["F", "D'accord. Vous serez remboursée sous 5 jours, sur votre carte bancaire."]],
           choices: [
             { fr: "Sous 5 jours ? Je dois mettre ma carte sous le lit ?", tr: "5 gün « altında » mı? Kartımı yatağın altına mı koymalıyım?", en: "Under 5 days? Should I put my card under the bed?", ok: false,
               fb: { fr: "Haha 🛏️😄 ! « Sous 5 jours » = dans les 5 prochains jours. Demandez plutôt une confirmation.", tr: "Haha 🛏️😄! « Sous 5 jours » = önümüzdeki 5 gün içinde. Bunun yerine bir onay isteyin.", en: "Haha 🛏️😄! « Sous 5 jours » = within the next 5 days. Ask for a confirmation instead." } },
             { fr: "Très bien. Vous pourriez m'envoyer une confirmation par e-mail ?", tr: "Çok iyi. Bana e-postayla bir onay gönderebilir misiniz?", en: "Very good. Could you send me a confirmation by email?", ok: true, go: "h" },
             { fr: "Très bien. Est-ce que vous pourriez m'envoyer les chaussures aussi ?", tr: "Çok iyi. Ayakkabıları da gönderebilir misiniz?", en: "Very good. Could you send me the shoes too?", ok: false,
               fb: { fr: "Remboursée ET les chaussures ? Bien essayé 😄 ! Vous avez choisi le remboursement.", tr: "Hem para iadesi HEM ayakkabılar mı? İyi denemeydi 😄! Para iadesini seçtiniz.", en: "A refund AND the shoes? Nice try 😄! You chose the refund." } }
           ] },
      h: { say: [["F", "C'est noté. Vous allez recevoir un e-mail de confirmation. Je peux faire autre chose pour vous ?"]],
           choices: [
             { fr: "Non, c'est tous. Merci !", tr: "Hayır, hepsi bu. Teşekkürler!", en: "No, that's « all ». Thanks!", ok: false,
               fb: { fr: "L'expression fixe, c'est « c'est tout » (sans « s ») 😉.", tr: "Kalıp ifade « c'est tout » (« s » olmadan) 😉.", en: "The set phrase is « c'est tout » (no « s ») 😉." } },
             { fr: "Oui, vous pourriez courir la course pour moi ?", tr: "Evet, yarışı benim yerime koşabilir misiniz?", en: "Yes, could you run the race for me?", ok: false,
               fb: { fr: "Clara est gentille, mais pas à ce point 😄🏃 ! Dites « non, c'est tout, merci ».", tr: "Clara nazik ama o kadar da değil 😄🏃! « Non, c'est tout, merci » deyin.", en: "Clara is nice, but not that nice 😄🏃! Say « non, c'est tout, merci »." } },
             { fr: "Non, c'est tout. Merci beaucoup pour votre aide !", tr: "Hayır, hepsi bu. Yardımınız için çok teşekkürler!", en: "No, that's all. Thank you very much for your help!", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["F", "Je vous en prie. Bonne journée, madame !"]],
             scene: { fr: "Problème réglé ! Bravo, vous avez fait une réclamation au téléphone en français 📞🎉", tr: "Sorun çözüldü! Bravo, telefonda Fransızca şikâyette bulundunuz 📞🎉", en: "Problem solved! Well done, you made a complaint by phone in French 📞🎉" } }
    } },

  /* ───────────── 15. Course solidaire ───────────── */
  { id: "av-course-solidaire", level: "A2", emoji: "🏃‍♀️",
    t: { fr: "Une course solidaire", tr: "Bir yardım koşusu", en: "A charity run" },
    goal: { fr: "Récupérez votre dossard pour la course solidaire de 10 km, aidez les autres coureurs et franchissez la ligne d'arrivée.", tr: "10 km'lik yardım koşusu için göğüs numaranızı alın, diğer koşuculara yardım edin ve bitiş çizgisini geçin.", en: "Collect your bib for the 10 km charity run, help other runners and cross the finish line." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Samedi matin, 8 h 30. Il y a beaucoup de monde sur la place. La course est organisée pour une association contre le cancer.", tr: "Cumartesi sabahı, saat 8.30. Meydanda çok kalabalık var. Koşu, kanserle mücadele eden bir dernek için düzenleniyor.", en: "Saturday morning, 8:30. The square is packed. The run is organised for a cancer charity." },
           say: [["F", "Bonjour ! Vous venez pour la course de 10 km ou pour la marche ?"]],
           choices: [
             { fr: "Pour la course ! Je me suis inscrite en ligne la semaine dernière.", tr: "Koşu için! Geçen hafta internetten kaydoldum.", en: "For the run! I signed up online last week.", ok: true, go: "b1" },
             { fr: "Je viens pour faire les courses, je me suis inscrite en ligne.", tr: "Alışveriş yapmaya geliyorum, internetten kaydoldum.", en: "I'm here to do the shopping, I registered online.", ok: false,
               fb: { fr: "« Faire les courses » = aller au supermarché 🛒😄. Ici, c'est « la course » : on court !", tr: "« Faire les courses » = markete gitmek 🛒😄. Burada « la course »: koşuluyor!", en: "« Faire les courses » = going grocery shopping 🛒😄. Here it's « la course »: running!" } },
             { fr: "Pour la course, mais je ne suis pas inscrite. C'est possible ?", tr: "Koşu için ama kayıtlı değilim. Mümkün mü?", en: "For the race, but I'm not registered. Is it possible?", ok: true, go: "b2" }
           ] },
      b1: { say: [["F", "Super ! Vous avez reçu un e-mail de confirmation ?"]],
           choices: [
             { fr: "Oui, je l'ai reçu demain, sur mon téléphone.", tr: "Evet, yarın telefonuma geldi.", en: "Yes, I received it tomorrow, on my phone.", ok: false,
               fb: { fr: "Passé composé + demain ? Ça ne marche pas 😄. Dites « oui, le voilà ».", tr: "Geçmiş zaman + yarın mı? Olmuyor 😄. « Oui, le voilà » deyin.", en: "Past tense + tomorrow? Doesn't work 😄. Say « oui, le voilà »." } },
             { fr: "Oui, le voilà, sur mon téléphone.", tr: "Evet, işte telefonumda.", en: "Yes, here it is, on my phone.", ok: true, go: "c" },
             { fr: "Oui, je l'ai reçue hier, sur mon téléphone.", tr: "Evet, dün telefonuma geldi.", en: "Yes, I received it yesterday, on my phone.", ok: false,
               fb: { fr: "Presque ! « Un e-mail » est masculin, donc « je l'ai reçu », sans « e » ✉️.", tr: "Neredeyse! « Un e-mail » eril, bu yüzden « je l'ai reçu », « e » olmadan ✉️.", en: "Almost! « Un e-mail » is masculine, so « je l'ai reçu », no « e » ✉️." } }
           ] },
      b2: { say: [["F", "Oui, il reste des places. C'est 15 €, et tout l'argent va à l'association."]],
           choices: [
             { fr: "15 € pour courir ? Dans le parc, c'est gratuit ! Je peux payer par carte ?", tr: "Koşmak için 15 € mu? Parkta bedava! Kartla ödeyebilir miyim?", en: "€15 to run? In the park it's free! Can I pay by card?", ok: false,
               fb: { fr: "C'est vrai 😄, mais ici l'argent aide l'association ! Dites « avec plaisir, c'est pour une bonne cause ».", tr: "Doğru 😄 ama burada para derneğe yardım ediyor! « Avec plaisir, c'est pour une bonne cause » deyin.", en: "True 😄, but here the money helps the charity! Say « avec plaisir, c'est pour une bonne cause »." } },
             { fr: "Avec plaisir, c'est pour une bonne chose ! Je peux payer par carte ?", tr: "Memnuniyetle, iyi bir şey için! Kartla ödeyebilir miyim?", en: "With pleasure, it's for a good thing! Can I pay by card?", ok: false,
               fb: { fr: "On comprend, mais l'expression fixe, c'est « pour une bonne cause » 💛.", tr: "Anlaşılıyor ama kalıp ifade « pour une bonne cause » (iyi bir amaç için) 💛.", en: "We get it, but the set phrase is « pour une bonne cause » (for a good cause) 💛." } },
             { fr: "Avec plaisir, c'est pour une bonne cause ! Je peux payer par carte ?", tr: "Memnuniyetle, iyi bir amaç için! Kartla ödeyebilir miyim?", en: "Gladly, it's for a good cause! Can I pay by card?", ok: true, go: "c" }
           ] },
      c: { say: [["F", "Voilà votre dossard, numéro 247. Vous le mettez devant, sur votre t-shirt."]],
           choices: [
             { fr: "D'accord. Vous avez des épingles, s'il vous plaît ?", tr: "Tamam. Çengelli iğneniz var mı, lütfen?", en: "OK. Do you have any safety pins, please?", ok: true, go: "d" },
             { fr: "D'accord, merci, je le mets derrière, sur mon dos.", tr: "Tamam, teşekkürler, arkaya, sırtıma takıyorum.", en: "OK, thanks, I'll put it on the back, on my back.", ok: false,
               fb: { fr: "Elle a dit « devant » 😉. Sinon, les photographes ne verront pas votre numéro !", tr: "« Devant » (önde) dedi 😉. Yoksa fotoğrafçılar numaranızı göremez!", en: "She said « devant » (at the front) 😉. Otherwise the photographers won't see your number!" } },
             { fr: "Numéro 742, c'est noté ! Merci beaucoup.", tr: "742 numara, not ettim! Çok teşekkürler.", en: "Number 742, got it! Thank you very much.", ok: false,
               fb: { fr: "Les chiffres sont à l'envers 😄 : c'est 247, deux cent quarante-sept.", tr: "Rakamlar ters 😄: 247, iki yüz kırk yedi.", en: "The digits are backwards 😄: it's 247, two hundred and forty-seven." } }
           ] },
      d: { scene: { fr: "Dans la zone d'échauffement, un homme fait des étirements un peu bizarres. Il vous voit avec votre dossard.", tr: "Isınma alanında bir adam biraz tuhaf esneme hareketleri yapıyor. Sizi göğüs numaranızla görüyor.", en: "In the warm-up area, a man is doing some rather odd stretches. He sees you with your bib." },
           say: [["M", "Excusez-moi, vous avez l'air de vous y connaître. Comment on s'échauffe avant une course ?"]],
           choices: [
             { fr: "Je suis kiné de formation. Commencez par courir très vite pendant 10 minutes !", tr: "Eğitimim fizyoterapist. 10 dakika çok hızlı koşarak başlayın!", en: "I trained as a physio. Start by running very fast for 10 minutes!", ok: false,
               fb: { fr: "Une kiné ne dirait jamais ça 😄 ! L'échauffement, c'est doucement d'abord.", tr: "Bir fizyoterapist bunu asla söylemez 😄! Isınma önce yavaş yapılır.", en: "A physio would never say that 😄! A warm-up starts gently." } },
             { fr: "Je suis kiné de formation. Commencez par trottiner doucement pendant 10 minutes.", tr: "Fizyoterapistim (eğitimim bu). 10 dakika boyunca yavaşça hafif tempolu koşarak başlayın.", en: "I'm a trained physio. Start by jogging gently for 10 minutes.", ok: true, go: "e" },
             { fr: "Je suis kiné de formation. Vous vous échaufferez après la course, 10 minutes.", tr: "Eğitimim fizyoterapist. Isınmayı yarıştan sonra yaparsınız, 10 dakika.", en: "I trained as a physio. You'll warm up after the race, 10 minutes.", ok: false,
               fb: { fr: "Après la course, il est un peu tard 😄 ! L'échauffement, c'est avant.", tr: "Koşudan sonra biraz geç 😄! Isınma önceden yapılır.", en: "After the race is a bit late 😄! The warm-up comes before." } }
           ] },
      e: { say: [["N", "Le départ sera donné dans cinq minutes ! Les coureurs sont priés de se placer derrière la ligne."], ["M", "Merci pour le conseil ! On y va ?"]],
           choices: [
             { fr: "Oui, allons-y ! Le départ est dans cinq minutes.", tr: "Evet, hadi gidelim! Başlangıç beş dakika sonra.", en: "Yes, let's go! The start is in five minutes.", ok: true, go: "f" },
             { fr: "Oui, allons-y ! Le départ était il y a cinq minutes.", tr: "Evet, hadi gidelim! Başlangıç beş dakika önceydi.", en: "Yes, let's go! The start was five minutes ago.", ok: false,
               fb: { fr: "Pas de panique 😅 : « dans cinq minutes » = dans le futur. Vous avez le temps !", tr: "Panik yok 😅: « dans cinq minutes » = beş dakika sonra. Vaktiniz var!", en: "Don't panic 😅: « dans cinq minutes » = five minutes from now. You have time!" } },
             { fr: "Oui, mais on se place devant la ligne.", tr: "Evet ama çizginin önüne geçiyoruz.", en: "Yes, but let's stand in front of the line.", ok: false,
               fb: { fr: "Pas de triche 😄 ! On se place « derrière » la ligne de départ.", tr: "Hile yok 😄! Başlangıç çizgisinin « derrière » (arkasında) durulur.", en: "No cheating 😄! You stand « derrière » (behind) the start line." } }
           ] },
      f: { scene: { fr: "Kilomètre 6. Une femme ralentit à côté de vous. Elle a du mal à respirer.", tr: "6. kilometre. Yanınızda bir kadın yavaşlıyor. Nefes almakta zorlanıyor.", en: "Kilometre 6. A woman slows down next to you. She's struggling to breathe." },
           say: [["F2", "Je n'en peux plus… J'ai un point de côté."]],
           choices: [
             { fr: "Courage ! Respirez lentement, on va courir ensemble jusqu'à l'arrivée.", tr: "Dayanın! Yavaş nefes alın, bitişe kadar birlikte koşacağız.", en: "Hang in there! Breathe slowly, we'll run together to the finish.", ok: true, go: "g1" },
             { fr: "Courage ! Un point de côté ? Mettez-le à côté de la virgule !", tr: "Cesaret! Yan ağrısı mı? Onu virgülün yanına koyun!", en: "Come on! A stitch? Put it next to the comma!", ok: false,
               fb: { fr: "Haha, la ponctuation ✍️😄 ! « Un point de côté » = une douleur sur le côté du ventre. Encouragez-la !", tr: "Haha, noktalama işaretleri ✍️😄! « Point de côté » = karnın yanına giren sancı. Ona cesaret verin!", en: "Haha, punctuation ✍️😄! « Un point de côté » = a stitch in your side. Encourage her!" } },
             { fr: "Marchez un peu, ce n'est pas grave. Vous allez y arriver !", tr: "Biraz yürüyün, önemli değil. Başaracaksınız!", en: "Walk for a bit, it doesn't matter. You'll make it!", ok: true, go: "g2" }
           ] },
      g1: { scene: { fr: "Vous courez ensemble. Elle respire mieux.", tr: "Birlikte koşuyorsunuz. Daha iyi nefes alıyor.", en: "You run together. She's breathing better." },
           say: [["F2", "Merci, vous êtes très gentille ! Vous courez souvent ?"]],
           choices: [
             { fr: "Avant, j'ai couru trois fois par semaine. Maintenant, j'essaie de reprendre.", tr: "Eskiden haftada üç kez koştum. Şimdi yeniden başlamaya çalışıyorum.", en: "Before, I ran three times a week. Now I'm trying to get back into it.", ok: false,
               fb: { fr: "Pour une habitude dans le passé, on utilise l'imparfait : « avant, je courais trois fois par semaine » 😉.", tr: "Geçmişteki bir alışkanlık için imparfait kullanılır: « avant, je courais trois fois par semaine » 😉.", en: "For a past habit, use the imparfait: « avant, je courais trois fois par semaine » 😉." } },
             { fr: "Avant, je courais trois fois par semaine. Maintenant, j'essaie de reprendre.", tr: "Eskiden haftada üç kez koşardım. Şimdi yeniden başlamaya çalışıyorum.", en: "I used to run three times a week. Now I'm trying to get back into it.", ok: true, go: "h" },
             { fr: "Oui, je cours souvent… après le bus ! Maintenant, j'essaie de reprendre.", tr: "Evet, sık koşarım… otobüsün arkasından! Şimdi yeniden başlamaya çalışıyorum.", en: "Yes, I often run… after the bus! Now I'm trying to get back into it.", ok: false,
               fb: { fr: "Haha, ça compte un peu 🚌😄 ! Mais parlez de vos vraies habitudes de course.", tr: "Haha, o da biraz sayılır 🚌😄! Ama gerçek koşu alışkanlıklarınızdan bahsedin.", en: "Haha, that sort of counts 🚌😄! But talk about your real running habits." } }
           ] },
      g2: { scene: { fr: "Elle marche un peu. Vous continuez. Sur le bord de la route, un petit garçon tape dans ses mains.", tr: "Kadın biraz yürüyor. Siz devam ediyorsunuz. Yol kenarında küçük bir çocuk el çırpıyor.", en: "She walks for a bit. You keep going. At the roadside, a little boy is clapping." },
           say: [["K", "Allez, madame ! Vous êtes la meilleure !"]],
           choices: [
             { fr: "Merci, vous êtes gentil, monsieur !", tr: "Teşekkürler, çok naziksiniz, beyefendi!", en: "Thank you, you're very kind, sir!", ok: false,
               fb: { fr: "« Monsieur », pour un enfant de six ans ? 😄 Avec un enfant, on dit « tu » : « merci, tu es gentil ! ».", tr: "Altı yaşındaki bir çocuğa « monsieur » mu? 😄 Çocuklara « tu » denir: « merci, tu es gentil ! ».", en: "« Monsieur » for a six-year-old? 😄 With a child, use « tu »: « merci, tu es gentil ! »." } },
             { fr: "Merci, tu es gentil !", tr: "Teşekkürler, çok tatlısın!", en: "Thanks, you're sweet!", ok: true, go: "h" },
             { fr: "Merci, je suis la meilleure, je sais !", tr: "Teşekkürler, en iyisi benim, biliyorum!", en: "Thanks, I'm the best, I know!", ok: false,
               fb: { fr: "Un peu de modestie, championne 😄 ! Remerciez-le simplement : « merci, tu es gentil ! ».", tr: "Biraz alçakgönüllülük, şampiyon 😄! Ona sadece teşekkür edin: « merci, tu es gentil ! ».", en: "A little modesty, champ 😄! Just thank him: « merci, tu es gentil ! »." } }
           ] },
      h: { scene: { fr: "La ligne d'arrivée ! Un bénévole vous met une médaille autour du cou.", tr: "Bitiş çizgisi! Bir gönüllü boynunuza madalya takıyor.", en: "The finish line! A volunteer puts a medal around your neck." },
           say: [["M2", "Bravo ! Vous avez fait 58 minutes !"]],
           choices: [
             { fr: "Merci ! Je suis finie, mais contente !", tr: "Teşekkürler! Bittim ama mutluyum!", en: "Thanks! I'm done for, but happy!", ok: false,
               fb: { fr: "Piège classique ! « Je suis finie » = c'est la fin de ma vie 😱😄. Dites « je suis épuisée » ou « j'ai fini » !", tr: "Klasik tuzak! « Je suis finie » = hayatım bitti gibi bir anlam 😱😄. « Je suis épuisée » (bitkinim) ya da « j'ai fini » (bitirdim) deyin!", en: "Classic trap! « Je suis finie » sounds like your life is over 😱😄. Say « je suis épuisée » or « j'ai fini »!" } },
             { fr: "Merci ! J'ai fait 58 heures ? Je suis contente !", tr: "Teşekkürler! 58 saat mi yaptım? Çok mutluyum!", en: "Thanks! I did 58 hours? I'm happy!", ok: false,
               fb: { fr: "58 heures, ce serait une très longue course 😄 ! Il a dit 58 minutes.", tr: "58 saat çok uzun bir koşu olurdu 😄! 58 dakika dedi.", en: "58 hours would be a very long run 😄! He said 58 minutes." } },
             { fr: "Merci ! Je suis épuisée, mais tellement contente !", tr: "Teşekkürler! Bitkinim ama çok mutluyum!", en: "Thanks! I'm exhausted, but so happy!", ok: true, go: "i" }
           ] },
      i: { say: [["M2", "Il y a des boissons et des fruits là-bas. Vous reviendrez l'année prochaine ?"]],
           choices: [
             { fr: "Oui, bien sûr ! Et je viendrai avec des amis.", tr: "Evet, tabii ki! Hem de arkadaşlarımla geleceğim.", en: "Yes, of course! And I'll bring some friends.", ok: true, go: "fin" },
             { fr: "Oui, bien sûr ! Je reviendrai l'année dernière.", tr: "Evet, tabii ki! Geçen yıl tekrar geleceğim.", en: "Yes, of course! I'll come back last year.", ok: false,
               fb: { fr: "Futur + l'année dernière ? Il faudrait une machine à remonter le temps 😄. Dites « l'année prochaine ».", tr: "Gelecek zaman + geçen yıl mı? Zaman makinesi gerekir 😄. « L'année prochaine » deyin.", en: "Future + last year? You'd need a time machine 😄. Say « l'année prochaine »." } },
             { fr: "Non, jamais ! C'était horrible !", tr: "Hayır, asla! Berbattı!", en: "No, never! It was horrible!", ok: false,
               fb: { fr: "Vraiment ? Avec ce grand sourire et cette médaille ? 😄🏅 Dites plutôt « oui, bien sûr ! ».", tr: "Gerçekten mi? Bu kocaman gülümseme ve bu madalyayla mı? 😄🏅 Bunun yerine « oui, bien sûr ! » deyin.", en: "Really? With that big smile and that medal? 😄🏅 Say « oui, bien sûr ! » instead." } }
           ] },
      fin: { end: "win", say: [["M2", "Génial ! Merci pour l'association, et à l'année prochaine !"]],
             scene: { fr: "Vous mangez une orange, la médaille autour du cou. Bravo, 10 km pour une bonne cause, et tout en français ! 🏅🎉", tr: "Boynunuzda madalyayla bir portakal yiyorsunuz. Bravo, iyi bir amaç için 10 km, hem de tamamen Fransızca! 🏅🎉", en: "You eat an orange, medal round your neck. Well done: 10 km for a good cause, all in French! 🏅🎉" } }
    } }
);
