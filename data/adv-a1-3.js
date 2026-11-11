/* Aventures A1 — 11 to 15: piscine, vélo, cinéma, taxi, accueil de la salle de sport */
(window.ADVENTURES = window.ADVENTURES || []).push(

  /* ───────────── 11. Piscine ───────────── */
  { id: "av-piscine", level: "A1", emoji: "🏊",
    t: { fr: "Première fois à la piscine", tr: "Havuzda ilk kez", en: "First time at the pool" },
    goal: { fr: "Achetez une entrée, trouvez les vestiaires et choisissez votre ligne d'eau.", tr: "Bir giriş bileti alın, soyunma odalarını bulun ve yüzme kulvarınızı seçin.", en: "Buy a ticket, find the changing rooms and choose your swimming lane." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Il est 9 h. Vous arrivez à la piscine municipale avec votre sac. Une femme est à la caisse.", tr: "Saat 9. Çantanızla belediye havuzuna geliyorsunuz. Kasada bir kadın var.", en: "It's 9 a.m. You arrive at the public pool with your bag. A woman is at the till." },
           say: [["F", "Bonjour madame ! C'est pour une entrée ?"]],
           choices: [
             { fr: "Bonjour ! Oui, une piscine adulte, s'il vous plaît.", tr: "Merhaba! Evet, bir yetişkin havuzu, lütfen.", en: "Hello! Yes, an adult swimming pool, please.", ok: false,
               fb: { fr: "Vous voulez acheter toute la piscine ? 😄 On demande « une entrée », c'est-à-dire un ticket.", tr: "Bütün havuzu mu satın almak istiyorsunuz? 😄 « Une entrée », yani bir giriş bileti istenir.", en: "Do you want to buy the whole pool? 😄 You ask for « une entrée », meaning one ticket." } },
             { fr: "Bonjour ! Oui, une entrée adulte, s'il vous plaît.", tr: "Merhaba! Evet, bir yetişkin girişi, lütfen.", en: "Hello! Yes, one adult entry, please.", ok: true, go: "b" },
             { fr: "Bonjour ! Oui, je suis une entrée.", tr: "Merhaba! Evet, ben bir girişim.", en: "Hello! Yes, I am an entry.", ok: false,
               fb: { fr: "Vous n'êtes pas un ticket 🎟️😄 ! Dites « oui, une entrée, s'il vous plaît ».", tr: "Siz bir bilet değilsiniz 🎟️😄! « Oui, une entrée, s'il vous plaît » deyin.", en: "You're not a ticket 🎟️😄! Say « oui, une entrée, s'il vous plaît »." } }
           ] },
      b: { say: [["F", "Une entrée, c'est 4,50 €. Ou il y a la carte de 10 entrées à 40 €."]],
           choices: [
             { fr: "Une entrée, s'il vous plaît. C'est ma première fois.", tr: "Bir giriş, lütfen. İlk kez geliyorum.", en: "One entry, please. It's my first time.", ok: true, go: "c" },
             { fr: "Comment ça coûte, la carte de 10 entrées, s'il vous plaît ?", tr: "10 girişlik kart nasıl tutuyor, lütfen?", en: "How does the 10-entry card cost, please?", ok: false,
               fb: { fr: "« Comment » = how. Pour le prix, c'est « combien ». Mais elle a déjà dit les prix 😉 : choisissez une entrée ou la carte.", tr: "« Comment » = nasıl. Fiyat için « combien » denir. Ama kadın fiyatları zaten söyledi 😉: bir giriş ya da kart seçin.", en: "« Comment » = how. For the price it's « combien ». But she already gave the prices 😉: pick one entry or the card." } },
             { fr: "La carte de 10 entrées, s'il vous plaît. Je vais venir souvent !", tr: "10 girişlik kart, lütfen. Sık sık geleceğim!", en: "The 10-entry card, please. I'm going to come often!", ok: true, go: "c2" }
           ] },
      c: { say: [["F", "Très bien. Vous payez comment ?"]],
           choices: [
             { fr: "Oui, merci, c'est parfait.", tr: "Evet, teşekkürler, mükemmel.", en: "Yes, thanks, that's perfect.", ok: false,
               fb: { fr: "« Comment ? » demande la manière : par carte ou en espèces ? « Oui » ne marche pas ici 😉.", tr: "« Comment ? » yöntemi soruyor: kartla mı, nakit mi? Burada « oui » olmaz 😉.", en: "« Comment ? » asks how: by card or in cash? « Oui » doesn't work here 😉." } },
             { fr: "Par carte, s'il vous plaît.", tr: "Kartla, lütfen.", en: "By card, please.", ok: true, go: "d" },
             { fr: "En espèces. Voilà 5 €.", tr: "Nakit. Buyurun 5 €.", en: "In cash. Here's 5 €.", ok: true, go: "d" }
           ] },
      c2: { say: [["F", "Super ! C'est 40 €. Voilà votre carte. Vous pouvez écrire votre nom ici ?"]],
           choices: [
             { fr: "Oui, bien sûr. Vous avez un stylo ?", tr: "Evet, tabii. Kaleminiz var mı?", en: "Yes, of course. Do you have a pen?", ok: true, go: "d" },
             { fr: "Oui, je m'appelle ici, sur la carte.", tr: "Evet, adım burada, kartın üstünde.", en: "Yes, my name is here, on the card.", ok: false,
               fb: { fr: "Votre nom n'est pas « ici » 😄 ! Elle demande d'écrire votre nom sur la carte. Dites « oui, bien sûr ».", tr: "Adınız « ici » (burası) değil 😄! Kadın adınızı karta yazmanızı istiyor. « Oui, bien sûr » deyin.", en: "Your name isn't « ici » 😄! She's asking you to write your name on the card. Say « oui, bien sûr »." } },
             { fr: "Non, je n'ai pas de nom. Désolée !", tr: "Hayır, adım yok. Üzgünüm!", en: "No, I don't have a name. Sorry!", ok: false,
               fb: { fr: "Tout le monde a un nom, même les poissons rouges 🐟😄 ! Dites « oui, bien sûr ».", tr: "Herkesin bir adı var, japon balıklarının bile 🐟😄! « Oui, bien sûr » deyin.", en: "Everybody has a name, even goldfish 🐟😄! Say « oui, bien sûr »." } }
           ] },
      d: { say: [["F", "Attention, le bonnet de bain est obligatoire. Vous avez un bonnet ?"]],
           choices: [
             { fr: "Non, merci, je n'ai pas froid.", tr: "Hayır, teşekkürler, üşümüyorum.", en: "No, thanks, I'm not cold.", ok: false,
               fb: { fr: "Le bonnet de bain, ce n'est pas pour le froid, c'est pour l'hygiène 🧢 ! En France, il est souvent obligatoire.", tr: "Bone soğuk için değil, hijyen için 🧢! Fransa'da genellikle zorunludur.", en: "The swim cap isn't for the cold, it's for hygiene 🧢! In France it's often compulsory." } },
             { fr: "Oui, j'ai un chapeau pour le soleil.", tr: "Evet, güneş için bir şapkam var.", en: "Yes, I have a hat for the sun.", ok: false,
               fb: { fr: "Un chapeau, c'est pour le soleil à la plage 👒😄. Pour nager, c'est un « bonnet de bain ».", tr: "Şapka plajda güneş içindir 👒😄. Yüzmek için « bonnet de bain » (bone) gerekir.", en: "A hat is for the sun at the beach 👒😄. For swimming it's a « bonnet de bain » (swim cap)." } },
             { fr: "Ah non ! Vous vendez des bonnets ?", tr: "Ah, yok! Bone satıyor musunuz?", en: "Oh no! Do you sell caps?", ok: true, go: "e" }
           ] },
      e: { say: [["F", "Oui, c'est 3 €. Bleu ou rouge ?"]],
           choices: [
             { fr: "Rouge, s'il vous plaît.", tr: "Kırmızı, lütfen.", en: "Red, please.", ok: true, go: "f" },
             { fr: "Vert, s'il vous plaît.", tr: "Yeşil, lütfen.", en: "Green, please.", ok: false,
               fb: { fr: "Joli choix, mais elle a seulement du bleu ou du rouge 💙❤️. Écoutez bien la question !", tr: "Güzel seçim ama sadece mavi ya da kırmızı var 💙❤️. Soruyu iyi dinleyin!", en: "Nice choice, but she only has blue or red 💙❤️. Listen carefully to the question!" } },
             { fr: "Bleu, s'il vous plaît.", tr: "Mavi, lütfen.", en: "Blue, please.", ok: true, go: "f" }
           ] },
      f: { scene: { fr: "Vous entrez. Il y a deux couloirs et vous ne savez pas où aller. Un maître-nageur passe.", tr: "İçeri giriyorsunuz. İki koridor var ve nereye gideceğinizi bilmiyorsunuz. Bir cankurtaran geçiyor.", en: "You go in. There are two corridors and you don't know where to go. A lifeguard walks by." },
           say: [["M", "Bonjour ! Je peux vous aider ?"]],
           choices: [
             { fr: "Oui, merci ! Tu peux m'aider ? Je cherche les vestiaires.", tr: "Evet, teşekkürler! Bana yardım edebilir misin? Soyunma odalarını arıyorum.", en: "Yes, thanks! Can you help me? I'm looking for the changing rooms.", ok: false,
               fb: { fr: "Il est sympa, mais c'est un inconnu : on dit « vous ». Par exemple : « Oui, s'il vous plaît. Où sont les vestiaires ? »", tr: "Sevimli biri ama tanımadığınız biri: « vous » denir. Örneğin: « Oui, s'il vous plaît. Où sont les vestiaires ? »", en: "He's friendly, but he's a stranger: use « vous ». For example: « Oui, s'il vous plaît. Où sont les vestiaires ? »" } },
             { fr: "Oui, s'il vous plaît. Où sont les vestiaires ?", tr: "Evet, lütfen. Soyunma odaları nerede?", en: "Yes, please. Where are the changing rooms?", ok: true, go: "g" },
             { fr: "Oui, je cherche la piscine des vêtements.", tr: "Evet, kıyafetlerin havuzunu arıyorum.", en: "Yes, I'm looking for the pool of clothes.", ok: false,
               fb: { fr: "Une piscine pleine de vêtements ? 👕🏊 Drôle d'idée ! L'endroit pour se changer, c'est « les vestiaires ».", tr: "Kıyafetlerle dolu bir havuz mu? 👕🏊 Tuhaf fikir! Üstünüzü değiştirdiğiniz yer « les vestiaires »dir.", en: "A pool full of clothes? 👕🏊 Funny idea! The place to get changed is « les vestiaires »." } }
           ] },
      g: { say: [["M", "C'est à droite. Et après, il faut prendre une douche avant d'aller dans l'eau."]],
           choices: [
             { fr: "Non merci, je vais nager, c'est la même chose !", tr: "Hayır teşekkürler, yüzeceğim, aynı şey!", en: "No thanks, I'm going to swim, it's the same thing!", ok: false,
               fb: { fr: "Bien essayé 😄 ! Mais en France, la douche avant la piscine est obligatoire 🚿.", tr: "İyi denemeydi 😄! Ama Fransa'da havuzdan önce duş zorunlu 🚿.", en: "Nice try 😄! But in France, a shower before the pool is compulsory 🚿." } },
             { fr: "D'accord, je prends un bain.", tr: "Tamam, banyo yapıyorum.", en: "OK, I'm taking a bath.", ok: false,
               fb: { fr: "Un bain, c'est dans la baignoire, à la maison 🛁. Ici, c'est « une douche » !", tr: "« Bain » evde küvette yapılır 🛁. Burada « une douche » (duş)!", en: "A bath is in the bathtub, at home 🛁. Here it's « une douche » (a shower)!" } },
             { fr: "D'accord, je prends une douche. Merci !", tr: "Tamam, duş alıyorum. Teşekkürler!", en: "OK, I'll take a shower. Thanks!", ok: true, go: "h" }
           ] },
      h: { scene: { fr: "Vous êtes au bord du bassin. Il y a trois lignes d'eau.", tr: "Havuzun kenarındasınız. Üç kulvar var.", en: "You're at the edge of the pool. There are three lanes." },
           say: [["M", "Il y a trois lignes : lente, moyenne et rapide. Vous nagez bien ?"]],
           choices: [
             { fr: "Je nage un peu. Je vais dans la ligne lente.", tr: "Biraz yüzüyorum. Yavaş kulvara gidiyorum.", en: "I swim a little. I'll go in the slow lane.", ok: true, go: "i" },
             { fr: "Je ne sais pas nager. Je vais dans la ligne rapide !", tr: "Yüzme bilmiyorum. Hızlı kulvara gidiyorum!", en: "I can't swim. I'm going in the fast lane!", ok: false,
               fb: { fr: "Courageux, mais dangereux 😅 ! Si vous nagez peu, choisissez la ligne lente.", tr: "Cesurca ama tehlikeli 😅! Az yüzüyorsanız yavaş kulvarı seçin.", en: "Brave, but dangerous 😅! If you don't swim much, choose the slow lane." } },
             { fr: "Oui, je nage bien ! Je vais dans la ligne rapide.", tr: "Evet, iyi yüzerim! Hızlı kulvara gidiyorum.", en: "Yes, I swim well! I'll go in the fast lane.", ok: true, go: "j" }
           ] },
      i: { scene: { fr: "Dans la ligne lente, une dame âgée nage à côté de vous. Elle sourit.", tr: "Yavaş kulvarda yaşlı bir kadın yanınızda yüzüyor. Gülümsüyor.", en: "In the slow lane, an older lady is swimming next to you. She smiles." },
           say: [["F2", "Bonjour ! C'est votre première fois ici ?"]],
           choices: [
             { fr: "Oui, je suis première ! L'eau est bonne !", tr: "Evet, birinciyim! Su güzel!", en: "Yes, I came first! The water's nice!", ok: false,
               fb: { fr: "« Je suis première » = vous gagnez la course 🥇😄. Dites « oui, c'est ma première fois ».", tr: "« Je suis première » = yarışı kazandım demek 🥇😄. « Oui, c'est ma première fois » deyin.", en: "« Je suis première » = you won the race 🥇😄. Say « oui, c'est ma première fois »." } },
             { fr: "Oui, c'est ma première fois. L'eau est bonne !", tr: "Evet, ilk kez geliyorum. Su çok güzel!", en: "Yes, it's my first time. The water's lovely!", ok: true, go: "fin" },
             { fr: "Oui, j'ai première fois. L'eau est bonne !", tr: "Evet, ilk kezim var. Su güzel!", en: "Yes, I have first time. The water's nice!", ok: false,
               fb: { fr: "Presque ! Avec « fois », on dit « c'est ma première fois ».", tr: "Neredeyse! « Fois » ile « c'est ma première fois » denir.", en: "Almost! With « fois », say « c'est ma première fois »." } }
           ] },
      j: { scene: { fr: "Dans la ligne rapide, un nageur arrive derrière vous. Il est très rapide !", tr: "Hızlı kulvarda arkanızdan bir yüzücü geliyor. Çok hızlı!", en: "In the fast lane, a swimmer comes up behind you. He's very fast!" },
           say: [["M2", "Pardon madame, je peux passer ?"]],
           choices: [
             { fr: "Oui, je passe un examen.", tr: "Evet, sınava giriyorum.", en: "Yes, I'm taking an exam.", ok: false,
               fb: { fr: "Ici, « passer » = aller devant vous, pas passer un examen 📝😄. Dites « oui, bien sûr, passez ! ».", tr: "Burada « passer » = önünüze geçmek, sınava girmek değil 📝😄. « Oui, bien sûr, passez ! » deyin.", en: "Here « passer » means to go past you, not to take an exam 📝😄. Say « oui, bien sûr, passez ! »." } },
             { fr: "Non, c'est ma ligne !", tr: "Hayır, bu benim kulvarım!", en: "No, it's my lane!", ok: false,
               fb: { fr: "Oh là là, pas très gentil 😅 ! La ligne est pour tout le monde. Dites « oui, bien sûr, passez ! ».", tr: "Aman, pek nazik değil 😅! Kulvar herkesin. « Oui, bien sûr, passez ! » deyin.", en: "Oh dear, not very nice 😅! The lane is for everyone. Say « oui, bien sûr, passez ! »." } },
             { fr: "Oui, bien sûr, passez !", tr: "Evet, tabii, geçin!", en: "Yes, of course, go ahead!", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["M", "Bonne baignade, madame !"]],
             scene: { fr: "Vous nagez tranquillement. Bravo, votre première séance à la piscine est un succès ! 🏊‍♀️🎉", tr: "Sakin sakin yüzüyorsunuz. Bravo, havuzdaki ilk seansınız başarılı geçti! 🏊‍♀️🎉", en: "You swim calmly. Well done, your first time at the pool is a success! 🏊‍♀️🎉" } }
    } },

  /* ───────────── 12. Louer un vélo ───────────── */
  { id: "av-location-velo", level: "A1", emoji: "🚲",
    t: { fr: "Louer un vélo", tr: "Bisiklet kiralamak", en: "Renting a bike" },
    goal: { fr: "Louez un vélo pour la journée et demandez le chemin du lac.", tr: "Günlüğüne bir bisiklet kiralayın ve göle giden yolu sorun.", en: "Rent a bike for the day and ask the way to the lake." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Il fait beau. Il est 10 h. Vous entrez dans un magasin de location de vélos.", tr: "Hava güzel. Saat 10. Bir bisiklet kiralama dükkânına giriyorsunuz.", en: "The weather's nice. It's 10 a.m. You walk into a bike rental shop." },
           say: [["M", "Bonjour madame ! Je peux vous aider ?"]],
           choices: [
             { fr: "Bonjour ! Je voudrais voler un vélo, s'il vous plaît.", tr: "Merhaba! Bir bisiklet çalmak istiyorum, lütfen.", en: "Hello! I'd like to steal a bike, please.", ok: false,
               fb: { fr: "Aïe ! « Voler » = prendre sans payer 🚨😄. Le bon mot, c'est « louer ».", tr: "Eyvah! « Voler » = parasını ödemeden almak, yani çalmak 🚨😄. Doğru kelime « louer » (kiralamak).", en: "Ouch! « Voler » = to steal 🚨😄. The right word is « louer » (to rent)." } },
             { fr: "Bonjour ! Je voudrais louer un vélo, s'il vous plaît.", tr: "Merhaba! Bir bisiklet kiralamak istiyorum, lütfen.", en: "Hello! I'd like to rent a bike, please.", ok: true, go: "b" },
             { fr: "Bonjour ! Je voudrais acheter un vélo pour une journée.", tr: "Merhaba! Bir günlüğüne bir bisiklet satın almak istiyorum.", en: "Hello! I'd like to buy a bike for one day.", ok: false,
               fb: { fr: "Acheter pour une journée ? C'est cher 😄 ! Pour un jour, on dit « louer un vélo ».", tr: "Bir günlüğüne satın almak mı? Pahalı olur 😄! Bir gün için « louer un vélo » (bisiklet kiralamak) denir.", en: "Buy it for one day? That's expensive 😄! For one day, say « louer un vélo » (rent a bike)." } }
           ] },
      b: { say: [["M", "Pour une heure, une demi-journée ou une journée ?"]],
           choices: [
             { fr: "Pour midi, s'il vous plaît.", tr: "Öğlen için, lütfen.", en: "For noon, please.", ok: false,
               fb: { fr: "Il demande combien de temps ⏱️. Dites « pour une journée » ou « pour une demi-journée ».", tr: "Ne kadar süre olduğunu soruyor ⏱️. « Pour une journée » ya da « pour une demi-journée » deyin.", en: "He's asking how long ⏱️. Say « pour une journée » or « pour une demi-journée »." } },
             { fr: "Pour une journée, s'il vous plaît.", tr: "Bir günlüğüne, lütfen.", en: "For a day, please.", ok: true, go: "c" },
             { fr: "Pour une journée, s'il te plaît.", tr: "Bir günlüğüne, lütfen.", en: "For a day, please.", ok: false,
               fb: { fr: "Bonne réponse, mauvais ton : avec un vendeur, on dit « s'il vous plaît » 😉.", tr: "Cevap doğru, hitap yanlış: satıcıya « s'il vous plaît » denir 😉.", en: "Right answer, wrong tone: with a shop assistant, say « s'il vous plaît » 😉." } }
           ] },
      c: { say: [["M", "Un vélo classique ou un vélo électrique ? Le classique, c'est 15 € la journée. L'électrique, c'est 25 €."]],
           choices: [
             { fr: "Un vélo électrique. Je suis un peu fatiguée aujourd'hui !", tr: "Elektrikli bisiklet. Bugün biraz yorgunum!", en: "An electric bike. I'm a bit tired today!", ok: true, go: "d1" },
             { fr: "Un vélo classique, c'est 25 €, non ?", tr: "Normal bisiklet 25 €, değil mi?", en: "A regular bike is 25 €, isn't it?", ok: false,
               fb: { fr: "Écoutez bien les prix : le classique, c'est 15 €, l'électrique, 25 € 💶.", tr: "Fiyatları iyi dinleyin: normal 15 €, elektrikli 25 € 💶.", en: "Listen to the prices: regular is 15 €, electric is 25 € 💶." } },
             { fr: "Un vélo classique, s'il vous plaît. J'aime faire du sport !", tr: "Normal bir bisiklet, lütfen. Spor yapmayı severim!", en: "A regular bike, please. I like exercise!", ok: true, go: "d2" }
           ] },
      d1: { say: [["M", "Voilà. La batterie est pleine. Ici, il y a trois niveaux d'aide : 1, 2 ou 3."]],
           choices: [
             { fr: "Merci ! Le 3, c'est le plus fort ?", tr: "Teşekkürler! 3 en güçlüsü mü?", en: "Thanks! Is 3 the strongest?", ok: true, go: "e" },
             { fr: "Merci ! Je mets de l'essence où ?", tr: "Teşekkürler! Benzini nereye koyuyorum?", en: "Thanks! Where do I put the petrol?", ok: false,
               fb: { fr: "Pas d'essence, c'est électrique ⚡😄 ! Vous pouvez demander : « le 3, c'est le plus fort ? »", tr: "Benzin yok, elektrikli ⚡😄! Şunu sorabilirsiniz: « le 3, c'est le plus fort ? »", en: "No petrol, it's electric ⚡😄! You could ask: « le 3, c'est le plus fort ? »" } },
             { fr: "Merci ! La batterie est vide ?", tr: "Teşekkürler! Batarya boş mu?", en: "Thanks! Is the battery empty?", ok: false,
               fb: { fr: "Il a dit « pleine » : c'est le contraire de « vide » 🔋. Demandez plutôt : « le 3, c'est le plus fort ? »", tr: "« Pleine » (dolu) dedi: « vide »nin (boş) tersi 🔋. Bunun yerine sorun: « le 3, c'est le plus fort ? »", en: "He said « pleine » (full): the opposite of « vide » (empty) 🔋. Ask instead: « le 3, c'est le plus fort ? »" } }
           ] },
      d2: { say: [["M", "Très bien. Vous voulez un vélo avec un panier ?"]],
           choices: [
             { fr: "Oui, avec un pain, s'il vous plaît.", tr: "Evet, bir ekmekle, lütfen.", en: "Yes, with a bread, please.", ok: false,
               fb: { fr: "Un pain sur le vélo ? 🥖😄 Un « panier », c'est un petit sac devant le vélo.", tr: "Bisikletin üstünde ekmek mi? 🥖😄 « Panier », bisikletin önündeki küçük sepettir.", en: "A loaf of bread on the bike? 🥖😄 A « panier » is the little basket at the front." } },
             { fr: "Non, avec deux roues.", tr: "Hayır, iki tekerlekli.", en: "No, with two wheels.", ok: false,
               fb: { fr: "Tous les vélos ont deux roues 😄 ! Il demande pour le panier : oui ou non ?", tr: "Bütün bisikletlerin iki tekerleği var 😄! Sepeti soruyor: evet mi, hayır mı?", en: "All bikes have two wheels 😄! He's asking about the basket: yes or no?" } },
             { fr: "Oui, avec un panier, pour mon sac.", tr: "Evet, sepetli olsun, çantam için.", en: "Yes, with a basket, for my bag.", ok: true, go: "e" }
           ] },
      e: { say: [["M", "Et vous voulez un casque ? C'est gratuit."]],
           choices: [
             { fr: "Oui, merci. C'est plus sûr !", tr: "Evet, teşekkürler. Daha güvenli!", en: "Yes, thanks. It's safer!", ok: true, go: "f" },
             { fr: "Non merci, j'ai une tête très solide !", tr: "Hayır teşekkürler, kafam çok sağlamdır!", en: "No thanks, I have a very hard head!", ok: false,
               fb: { fr: "Haha 😄 ! Mais le casque protège la tête, et il est gratuit. Dites « oui, merci » !", tr: "Haha 😄! Ama kask kafayı korur ve ücretsiz. « Oui, merci » deyin!", en: "Haha 😄! But a helmet protects your head, and it's free. Say « oui, merci »!" } },
             { fr: "Oui, un casque pour écouter de la musique ?", tr: "Evet, müzik dinlemek için bir kulaklık mı?", en: "Yes, headphones to listen to music?", ok: false,
               fb: { fr: "Bonne remarque : « casque » = aussi des écouteurs 🎧. Mais ici, c'est le casque de vélo 🚲. Dites « oui, merci » !", tr: "İyi yakaladınız: « casque » kulaklık da demek 🎧. Ama burada bisiklet kaskı 🚲. « Oui, merci » deyin!", en: "Good point: « casque » also means headphones 🎧. But here it's a bike helmet 🚲. Say « oui, merci »!" } }
           ] },
      f: { say: [["M", "Pour la caution, j'ai besoin d'une pièce d'identité, s'il vous plaît."]],
           choices: [
             { fr: "Je n'ai pas d'identité.", tr: "Benim kimliğim yok.", en: "I don't have an identity.", ok: false,
               fb: { fr: "Vous existez, promis 😄 ! Montrez un document : « voilà mon passeport » ou « voilà mon titre de séjour ».", tr: "Varsınız, söz veriyoruz 😄! Bir belge gösterin: « voilà mon passeport » ya da « voilà mon titre de séjour ».", en: "You do exist, promise 😄! Show a document: « voilà mon passeport » or « voilà mon titre de séjour »." } },
             { fr: "Voilà mon passeport.", tr: "Buyurun pasaportum.", en: "Here's my passport.", ok: true, go: "g" },
             { fr: "Voilà mon titre de séjour.", tr: "Buyurun oturma iznim.", en: "Here's my residence permit.", ok: true, go: "g" }
           ] },
      g: { say: [["M", "Merci, c'est bon. Vous allez où ?"]],
           choices: [
             { fr: "Je vais bien, merci !", tr: "İyiyim, teşekkürler!", en: "I'm fine, thanks!", ok: false,
               fb: { fr: "Il ne demande pas « ça va ? » mais « où ? » 📍. Par exemple : « je vais au lac ».", tr: "« Ça va ? » diye sormuyor, « où ? » (nereye) diye soruyor 📍. Örneğin: « je vais au lac ».", en: "He's not asking « ça va ? » but « où ? » (where) 📍. For example: « je vais au lac »." } },
             { fr: "Je vais à le lac. C'est loin ?", tr: "Göle gidiyorum. Uzak mı?", en: "I'm going to the lake. Is it far?", ok: false,
               fb: { fr: "Petit piège : « à + le » devient « au ». On dit « je vais au lac » 😉.", tr: "Küçük bir tuzak: « à + le » « au » olur. « Je vais au lac » denir 😉.", en: "Little trap: « à + le » becomes « au ». Say « je vais au lac » 😉." } },
             { fr: "Je vais au lac. C'est loin ?", tr: "Göle gidiyorum. Uzak mı?", en: "I'm going to the lake. Is it far?", ok: true, go: "h" }
           ] },
      h: { say: [["M", "Non, c'est à 5 kilomètres. Vous prenez la piste cyclable, à droite, le long de la rivière."]],
           choices: [
             { fr: "Je prends la piscine cyclable, à droite. Merci beaucoup !", tr: "Sağdaki bisiklet havuzunu alıyorum. Çok teşekkürler!", en: "I'll take the cycle pool, on the right. Thank you very much!", ok: false,
               fb: { fr: "Nager à vélo ? 🏊🚲😄 C'est la « piste cyclable » : la route pour les vélos.", tr: "Bisikletle yüzmek mi? 🏊🚲😄 « Piste cyclable »: bisiklet yolu.", en: "Swimming on a bike? 🏊🚲😄 It's the « piste cyclable »: the bike lane." } },
             { fr: "À droite, le long de la rivière. Merci beaucoup !", tr: "Sağda, nehir boyunca. Çok teşekkürler!", en: "On the right, along the river. Thank you very much!", ok: true, go: "i" },
             { fr: "À gauche, après la rivière ? D'accord, merci !", tr: "Solda, nehirden sonra mı? Tamam, teşekkürler!", en: "Left, after the river? OK, thanks!", ok: false,
               fb: { fr: "Attention, il a dit « à droite » et « le long de la rivière » ➡️. Répétez pour être sûre !", tr: "Dikkat, « à droite » (sağda) ve « le long de la rivière » (nehir boyunca) dedi ➡️. Emin olmak için tekrar edin!", en: "Careful, he said « à droite » (right) and « le long de la rivière » (along the river) ➡️. Repeat it to be sure!" } }
           ] },
      i: { say: [["M", "Vous rendez le vélo avant 19 h, d'accord ? Bonne balade !"]],
           choices: [
             { fr: "D'accord, avant 19 h. Merci, bonne journée !", tr: "Tamam, 19'dan önce. Teşekkürler, iyi günler!", en: "OK, before 7 p.m. Thanks, have a nice day!", ok: true, go: "fin" },
             { fr: "D'accord, après 19 h. Merci, bonne journée !", tr: "Tamam, 19'dan sonra. Teşekkürler, iyi günler!", en: "OK, after 7 p.m. Thanks, have a nice day!", ok: false,
               fb: { fr: "« Avant » = before, « après » = after ⏰. Il faut rendre le vélo avant 19 h !", tr: "« Avant » = önce, « après » = sonra ⏰. Bisikleti 19'dan önce geri vermelisiniz!", en: "« Avant » = before, « après » = after ⏰. You must bring the bike back before 7 p.m.!" } },
             { fr: "Merci, bonne nuit !", tr: "Teşekkürler, iyi geceler!", en: "Thanks, good night!", ok: false,
               fb: { fr: "Il est 10 h du matin ☀️ ! On dit « bonne journée ».", tr: "Saat sabah 10 ☀️! « Bonne journée » denir.", en: "It's 10 a.m. ☀️! Say « bonne journée »." } }
           ] },
      fin: { end: "win", say: [["M", "Bonne journée, madame !"]],
             scene: { fr: "Vous roulez le long de la rivière, le vent dans les cheveux. Bravo, le lac vous attend ! 🚲🎉", tr: "Saçlarınızda rüzgârla nehir boyunca pedal çeviriyorsunuz. Bravo, göl sizi bekliyor! 🚲🎉", en: "You ride along the river, wind in your hair. Well done, the lake is waiting for you! 🚲🎉" } }
    } },

  /* ───────────── 13. Cinéma ───────────── */
  { id: "av-cinema", level: "A1", emoji: "🎬",
    t: { fr: "Une soirée au cinéma", tr: "Sinemada bir akşam", en: "An evening at the cinema" },
    goal: { fr: "Achetez un billet, choisissez une place, prenez du pop-corn et trouvez votre siège.", tr: "Bir bilet alın, bir yer seçin, patlamış mısır alın ve koltuğunuzu bulun.", en: "Buy a ticket, choose a seat, get some popcorn and find your seat." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Il est 19 h 45. Vous êtes au cinéma, devant la caisse.", tr: "Saat 19.45. Sinemada, gişenin önündesiniz.", en: "It's 7:45 p.m. You're at the cinema, at the ticket desk." },
           say: [["F", "Bonsoir madame ! C'est pour quel film ?"]],
           choices: [
             { fr: "Bonsoir ! Pour un film, s'il vous plaît. Un bon film !", tr: "İyi akşamlar! Bir film için, lütfen. İyi bir film!", en: "Good evening! For a film, please. A good film!", ok: false,
               fb: { fr: "Il y a huit films ici 😄 ! Dites le titre : « pour Un été à Marseille, s'il vous plaît ».", tr: "Burada sekiz film var 😄! Adını söyleyin: « pour Un été à Marseille, s'il vous plaît ».", en: "There are eight films here 😄! Say the title: « pour Un été à Marseille, s'il vous plaît »." } },
             { fr: "Bonsoir ! Pour le pop-corn, s'il vous plaît.", tr: "İyi akşamlar! Patlamış mısır için, lütfen.", en: "Good evening! For the popcorn, please.", ok: false,
               fb: { fr: "Le pop-corn, c'est après 🍿😄 ! D'abord le billet : dites le titre du film.", tr: "Patlamış mısır sonra 🍿😄! Önce bilet: filmin adını söyleyin.", en: "Popcorn comes later 🍿😄! First the ticket: say the film's title." } },
             { fr: "Bonsoir ! Pour « Un été à Marseille », s'il vous plaît.", tr: "İyi akşamlar! « Un été à Marseille » için, lütfen.", en: "Good evening! For « Un été à Marseille », please.", ok: true, go: "b" }
           ] },
      b: { say: [["F", "Il y a la séance de 20 h en VF, en français. Et la séance de 20 h 30 en VOST : en anglais, avec des sous-titres."]],
           choices: [
             { fr: "La séance de 20 h 30 en VOST, s'il vous plaît. Les sous-titres m'aident !", tr: "20.30'daki altyazılı seans, lütfen. Altyazılar bana yardımcı oluyor!", en: "The 8:30 showing with subtitles, please. Subtitles help me!", ok: true, go: "c1" },
             { fr: "La séance de 20 h en VF, s'il vous plaît. Je veux écouter le français !", tr: "20.00'deki Fransızca seans, lütfen. Fransızca dinlemek istiyorum!", en: "The 8 p.m. showing in French, please. I want to listen to French!", ok: true, go: "c2" },
             { fr: "La séance de 20 h en VOST, s'il vous plaît.", tr: "20.00'deki altyazılı seans, lütfen.", en: "The 8 p.m. showing with subtitles, please.", ok: false,
               fb: { fr: "Attention à l'heure : à 20 h, c'est en VF. La VOST, c'est à 20 h 30 ⏰.", tr: "Saate dikkat: 20.00'de Fransızca dublaj. Altyazılı seans 20.30'da ⏰.", en: "Watch the time: at 8 p.m. it's dubbed in French. The subtitled one is at 8:30 ⏰." } }
           ] },
      c1: { say: [["F", "Très bien. Le film est en anglais, ça va pour vous ?"]],
           choices: [
             { fr: "Oui, parfait, je parle anglaise !", tr: "Evet, mükemmel, İngiliz kadını konuşuyorum!", en: "Yes, perfect, I speak Englishwoman!", ok: false,
               fb: { fr: "« Une Anglaise », c'est une femme d'Angleterre 🇬🇧. La langue, c'est « l'anglais » : « je parle anglais ».", tr: "« Une Anglaise » İngiltereli bir kadındır 🇬🇧. Dilin adı « l'anglais »: « je parle anglais ».", en: "« Une Anglaise » is a woman from England 🇬🇧. The language is « l'anglais »: « je parle anglais »." } },
             { fr: "Oui, parfait, je parle anglais !", tr: "Evet, mükemmel, İngilizce konuşuyorum!", en: "Yes, perfect, I speak English!", ok: true, go: "d" },
             { fr: "Les sous-titres ? Ils sont sous la table ?", tr: "Altyazılar mı? Masanın altında mı?", en: "The subtitles? Are they under the table?", ok: false,
               fb: { fr: "Haha 😄 ! Les sous-titres, c'est le texte en bas de l'écran. Répondez simplement : « oui, parfait ».", tr: "Haha 😄! Altyazı, ekranın altındaki yazıdır. Basitçe « oui, parfait » deyin.", en: "Haha 😄! Subtitles are the text at the bottom of the screen. Just answer: « oui, parfait »." } }
           ] },
      c2: { say: [["F", "Vous avez moins de 26 ans ? Il y a un tarif réduit."]],
           choices: [
             { fr: "Non, je suis plus de 26 ans. Dommage !", tr: "Hayır, ben 26'dan fazlayım. Ne yazık!", en: "No, I am more than 26. Too bad!", ok: false,
               fb: { fr: "Piège classique ! L'âge, on l'« a » : « j'ai plus de 26 ans » 🎂.", tr: "Klasik tuzak! Fransızcada yaşa « sahip olunur »: « j'ai plus de 26 ans » 🎂.", en: "Classic trap! In French you « have » your age: « j'ai plus de 26 ans » 🎂." } },
             { fr: "Non, j'ai plus de 26 ans. Dommage !", tr: "Hayır, 26 yaşından büyüğüm. Ne yazık!", en: "No, I'm over 26. Too bad!", ok: true, go: "d" },
             { fr: "Oui, j'ai 26 ans.", tr: "Evet, 26 yaşındayım.", en: "Yes, I'm 26.", ok: false,
               fb: { fr: "26 ans, ce n'est pas « moins de 26 ans » 😉. Moins de 26 = 25 ans ou moins.", tr: "26 yaş, « 26 yaşından küçük » değil 😉. 26'dan küçük = 25 ya da daha az.", en: "26 isn't « under 26 » 😉. Under 26 = 25 or younger." } }
           ] },
      d: { say: [["F", "Alors c'est 11,50 €. Vous voulez choisir votre place ?"]],
           choices: [
             { fr: "Oui, au milieu, s'il vous plaît.", tr: "Evet, ortada, lütfen.", en: "Yes, in the middle, please.", ok: true, go: "e" },
             { fr: "Oui, sur l'écran, s'il vous plaît.", tr: "Evet, perdenin üstünde, lütfen.", en: "Yes, on the screen, please.", ok: false,
               fb: { fr: "Sur l'écran ? Vous voulez être dans le film 🎥😄 ? Choisissez « au milieu » ou « au fond ».", tr: "Perdenin üstünde mi? Filmde mi oynamak istiyorsunuz 🎥😄? « Au milieu » (ortada) ya da « au fond » (arkada) seçin.", en: "On the screen? Do you want to be in the film 🎥😄? Choose « au milieu » or « au fond »." } },
             { fr: "Oui, au fond, s'il vous plaît.", tr: "Evet, arkada, lütfen.", en: "Yes, at the back, please.", ok: true, go: "e" }
           ] },
      e: { say: [["F", "Voilà votre billet. Salle 4, place F12."]],
           choices: [
             { fr: "Merci ! Salle 14, place F2, c'est ça ?", tr: "Teşekkürler! 14 numaralı salon, F2 koltuğu, değil mi?", en: "Thanks! Screen 14, seat F2, right?", ok: false,
               fb: { fr: "Presque, mais les chiffres sont mélangés 😄 : c'est salle 4, place F12.", tr: "Neredeyse, ama rakamlar karıştı 😄: 4 numaralı salon, F12 koltuğu.", en: "Almost, but the numbers are mixed up 😄: it's screen 4, seat F12." } },
             { fr: "Merci ! La salle 4, c'est où ?", tr: "Teşekkürler! 4 numaralı salon nerede?", en: "Thanks! Where's screen 4?", ok: true, go: "f" },
             { fr: "Merci ! La salle de bains 4, c'est où ?", tr: "Teşekkürler! 4 numaralı banyo nerede?", en: "Thanks! Where's bathroom 4?", ok: false,
               fb: { fr: "La salle de bains, c'est à la maison 🛁😄. Au cinéma, on dit juste « la salle ».", tr: "Banyo evde olur 🛁😄. Sinemada sadece « la salle » (salon) denir.", en: "The bathroom is at home 🛁😄. At the cinema, it's just « la salle »." } }
           ] },
      f: { scene: { fr: "Devant la salle 4, il y a un petit stand. Un jeune homme vend du pop-corn.", tr: "4 numaralı salonun önünde küçük bir stant var. Genç bir adam patlamış mısır satıyor.", en: "In front of screen 4 there's a little stand. A young man is selling popcorn." },
           say: [["M", "Bonsoir ! Pop-corn sucré ou salé ?"]],
           choices: [
             { fr: "Salé, s'il vous plaît. Un petit.", tr: "Tuzlu, lütfen. Küçük boy.", en: "Salted, please. A small one.", ok: true, go: "g" },
             { fr: "Je suis sucrée, merci.", tr: "Ben şekerliyim, teşekkürler.", en: "I am sweet, thanks.", ok: false,
               fb: { fr: "Vous êtes sûrement très douce 😄, mais ici on parle du pop-corn : « sucré, s'il vous plaît ».", tr: "Eminiz çok tatlısınız 😄 ama burada patlamış mısırdan bahsediliyor: « sucré, s'il vous plaît ».", en: "You're surely very sweet 😄, but this is about the popcorn: « sucré, s'il vous plaît »." } },
             { fr: "Sucré, s'il vous plaît. Un grand !", tr: "Şekerli, lütfen. Büyük boy!", en: "Sweet, please. A large one!", ok: true, go: "g" }
           ] },
      g: { say: [["M", "Et avec ça, une boisson ? De l'eau, un soda ?"]],
           choices: [
             { fr: "Oui, une eau de toilette, s'il vous plaît.", tr: "Evet, bir parfüm, lütfen.", en: "Yes, a bottle of eau de toilette, please.", ok: false,
               fb: { fr: "« Eau de toilette » = un parfum 🌸😄 ! Pour boire : « une bouteille d'eau ».", tr: "« Eau de toilette » = parfüm 🌸😄! İçmek için: « une bouteille d'eau ».", en: "« Eau de toilette » is a perfume 🌸😄! To drink: « une bouteille d'eau »." } },
             { fr: "Non merci, je n'ai pas soif.", tr: "Hayır teşekkürler, susamadım.", en: "No thanks, I'm not thirsty.", ok: true, go: "h" },
             { fr: "Une bouteille d'eau, s'il vous plaît.", tr: "Bir şişe su, lütfen.", en: "A bottle of water, please.", ok: true, go: "h" }
           ] },
      h: { scene: { fr: "Vous entrez dans la salle 4. Mais un monsieur est assis à la place F12 !", tr: "4 numaralı salona giriyorsunuz. Ama F12 koltuğunda bir bey oturuyor!", en: "You go into screen 4. But a man is sitting in seat F12!" },
           say: [["M2", "Euh… oui ?"]],
           choices: [
             { fr: "Excusez-moi, monsieur, je crois que c'est ta place : F12.", tr: "Affedersiniz beyefendi, sanırım bu senin yerin: F12.", en: "Excuse me, sir, I think it's your seat: F12.", ok: false,
               fb: { fr: "« Excusez-moi, monsieur » avec « vous », puis « ta » avec « tu » ? En plus, c'est VOTRE place 😉. On reste avec « vous » : « je crois que c'est ma place ».", tr: "« Excusez-moi, monsieur » « vous » ile, sonra « ta » « tu » ile mi? Üstelik bu SİZİN yeriniz 😉. « Vous » ile devam edin: « je crois que c'est ma place ».", en: "« Excusez-moi, monsieur » with « vous », then « ta » with « tu »? And it's YOUR seat 😉. Stay with « vous »: « je crois que c'est ma place »." } },
             { fr: "Excusez-moi, monsieur, je crois que c'est ma place : F12.", tr: "Affedersiniz beyefendi, sanırım burası benim yerim: F12.", en: "Excuse me, sir, I think that's my seat: F12.", ok: true, go: "i" },
             { fr: "Monsieur, c'est ma place : F12 ! Partez !", tr: "Beyefendi, burası benim yerim: F12! Kalkın!", en: "Sir, that's my seat: F12! Go away!", ok: false,
               fb: { fr: "Un peu trop direct 😅 ! Avec « excusez-moi » et « je crois que », c'est plus gentil.", tr: "Biraz fazla sert 😅! « Excusez-moi » ve « je crois que » ile daha nazik olur.", en: "A bit too blunt 😅! With « excusez-moi » and « je crois que », it's kinder." } }
           ] },
      i: { say: [["M2", "Oh, pardon ! Moi, c'est F13. Désolé !"]],
           choices: [
             { fr: "Oui, c'est un gros problème !", tr: "Evet, bu büyük bir sorun!", en: "Yes, it's a big problem!", ok: false,
               fb: { fr: "Il est désolé, il change de place 😊. Soyez gentille : « pas de problème ».", tr: "Özür diliyor, yerini değiştiriyor 😊. Nazik olun: « pas de problème ».", en: "He's sorry and he's moving 😊. Be kind: « pas de problème »." } },
             { fr: "De rien, bon appétit !", tr: "Rica ederim, afiyet olsun!", en: "You're welcome, enjoy your meal!", ok: false,
               fb: { fr: "Il a du pop-corn, mais ce n'est pas un repas 😄. Au cinéma, on dit « bon film » !", tr: "Patlamış mısırı var ama bu bir yemek değil 😄. Sinemada « bon film » denir!", en: "He has popcorn, but it's not a meal 😄. At the cinema, say « bon film »!" } },
             { fr: "Pas de problème. Bon film !", tr: "Sorun değil. İyi seyirler!", en: "No problem. Enjoy the film!", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["M2", "Merci, bon film à vous aussi !"]],
             scene: { fr: "La lumière s'éteint, le film commence. Bravo, vous avez tout fait en français ! 🍿🎉", tr: "Işıklar sönüyor, film başlıyor. Bravo, her şeyi Fransızca yaptınız! 🍿🎉", en: "The lights go down, the film begins. Well done, you did it all in French! 🍿🎉" } }
    } },

  /* ───────────── 14. Taxi ───────────── */
  { id: "av-taxi", level: "A1", emoji: "🚕",
    t: { fr: "Un taxi pour la gare", tr: "İstasyona bir taksi", en: "A taxi to the station" },
    goal: { fr: "Prenez un taxi pour aller à la gare, parlez avec le chauffeur et payez.", tr: "İstasyona gitmek için bir taksiye binin, şoförle konuşun ve ödeyin.", en: "Take a taxi to the station, chat with the driver and pay." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Il est 7 h 30. Il pleut. Vous avez une valise. Un taxi s'arrête devant vous.", tr: "Saat 7.30. Yağmur yağıyor. Bir bavulunuz var. Önünüzde bir taksi duruyor.", en: "It's 7:30 a.m. It's raining. You have a suitcase. A taxi stops in front of you." },
           say: [["M", "Bonjour madame ! Vous allez où ?"]],
           choices: [
             { fr: "Bonjour ! Je vais bien, merci.", tr: "Merhaba! İyiyim, teşekkürler.", en: "Hello! I'm fine, thanks.", ok: false,
               fb: { fr: "Il demande « où ? » (la destination), pas « ça va ? » 😄. Dites « à la gare, s'il vous plaît ».", tr: "« Où ? » (nereye) diye soruyor, « ça va ? » değil 😄. « À la gare, s'il vous plaît » deyin.", en: "He's asking « où ? » (where to), not « ça va ? » 😄. Say « à la gare, s'il vous plaît »." } },
             { fr: "Bonjour ! Au gare, s'il vous plaît.", tr: "Merhaba! İstasyona, lütfen.", en: "Hello! To the station, please.", ok: false,
               fb: { fr: "Presque ! « Gare » est féminin : « la gare », donc « à la gare » 🚉.", tr: "Neredeyse! « Gare » dişil: « la gare », yani « à la gare » 🚉.", en: "Almost! « Gare » is feminine: « la gare », so « à la gare » 🚉." } },
             { fr: "Bonjour ! À la gare, s'il vous plaît.", tr: "Merhaba! İstasyona, lütfen.", en: "Hello! To the station, please.", ok: true, go: "b" }
           ] },
      b: { say: [["M", "Votre train est à quelle heure ?"]],
           choices: [
             { fr: "À 8 h 15. C'est possible ?", tr: "8.15'te. Yetişir miyiz?", en: "At 8:15. Is that possible?", ok: true, go: "c" },
             { fr: "Il est 8 h 15, je pense.", tr: "Saat 8.15, sanırım.", en: "It's 8:15, I think.", ok: false,
               fb: { fr: "« Il est 8 h 15 » = l'heure maintenant ⌚. Pour le train : « à 8 h 15 ».", tr: "« Il est 8 h 15 » = şu anki saat ⌚. Tren için: « à 8 h 15 ».", en: "« Il est 8 h 15 » = the time now ⌚. For the train: « à 8 h 15 »." } },
             { fr: "Mon train est bleu et blanc.", tr: "Trenim mavi beyaz.", en: "My train is blue and white.", ok: false,
               fb: { fr: "Joli train 🚆😄, mais il demande l'heure ! Dites « à 8 h 15 ».", tr: "Güzel tren 🚆😄 ama saati soruyor! « À 8 h 15 » deyin.", en: "Lovely train 🚆😄, but he's asking the time! Say « à 8 h 15 »." } }
           ] },
      c: { say: [["M", "Pas de problème. Je mets votre valise dans le coffre ?"]],
           choices: [
             { fr: "Oui, merci, dans le coffre-fort !", tr: "Evet, teşekkürler, kasaya!", en: "Yes, thanks, in the safe!", ok: false,
               fb: { fr: "Un coffre-fort, c'est pour l'argent 💰😄. Le coffre de la voiture, c'est juste « le coffre ». Dites « oui, merci ».", tr: "« Coffre-fort » para kasasıdır 💰😄. Arabanın bagajı sadece « le coffre ». « Oui, merci » deyin.", en: "A « coffre-fort » is a safe for money 💰😄. A car boot is just « le coffre ». Say « oui, merci »." } },
             { fr: "Oui, merci, c'est gentil !", tr: "Evet, teşekkürler, çok naziksiniz!", en: "Yes, thanks, that's kind!", ok: true, go: "d" },
             { fr: "Non merci, elle est petite. Je la garde avec moi.", tr: "Hayır teşekkürler, küçük. Yanımda tutuyorum.", en: "No thanks, it's small. I'll keep it with me.", ok: true, go: "d" }
           ] },
      d: { scene: { fr: "Vous êtes dans le taxi. La pluie tombe fort.", tr: "Taksidesiniz. Yağmur şiddetli yağıyor.", en: "You're in the taxi. The rain is pouring." },
           say: [["M", "Il fait un temps horrible ce matin, non ?"]],
           choices: [
             { fr: "Oui, il est pluie beaucoup ! J'ai un peu froid.", tr: "Evet, o çok yağmur! Biraz üşüyorum.", en: "Yes, it is rain a lot! I'm a bit cold.", ok: false,
               fb: { fr: "Pour la météo, il y a un verbe : « il pleut » 🌧️.", tr: "Hava durumu için bir fiil var: « il pleut » (yağmur yağıyor) 🌧️.", en: "For the weather there's a verb: « il pleut » (it's raining) 🌧️." } },
             { fr: "Oui, il fait chaud et beau ! J'ai un peu chaud.", tr: "Evet, hava sıcak ve güzel! Biraz sıcakladım.", en: "Yes, it's hot and sunny! I'm a bit warm.", ok: false,
               fb: { fr: "Regardez par la fenêtre 😄🌧️ ! Il pleut. Dites « oui, il pleut beaucoup ».", tr: "Pencereden bakın 😄🌧️! Yağmur yağıyor. « Oui, il pleut beaucoup » deyin.", en: "Look out of the window 😄🌧️! It's raining. Say « oui, il pleut beaucoup »." } },
             { fr: "Oui, il pleut beaucoup ! J'ai un peu froid.", tr: "Evet, çok yağmur yağıyor! Biraz üşüyorum.", en: "Yes, it's raining a lot! I'm a bit cold.", ok: true, go: "e" }
           ] },
      e: { say: [["M", "On prend l'autoroute ou on passe par le centre-ville ? L'autoroute, c'est plus rapide, mais c'est plus cher."]],
           choices: [
             { fr: "L'autoroute, s'il vous plaît. Je suis pressée !", tr: "Otoyol, lütfen. Acelem var!", en: "The motorway, please. I'm in a hurry!", ok: true, go: "f1" },
             { fr: "L'autoroute, s'il vous plaît, c'est moins cher, non ?", tr: "Otoyol, lütfen, daha ucuz, değil mi?", en: "The motorway, please, it's cheaper, isn't it?", ok: false,
               fb: { fr: "Il a dit « plus cher » 💶. Plus rapide, mais plus cher. Choisissez !", tr: "« Plus cher » (daha pahalı) dedi 💶. Daha hızlı ama daha pahalı. Seçin!", en: "He said « plus cher » (more expensive) 💶. Faster, but dearer. Your choice!" } },
             { fr: "Le centre-ville, s'il vous plaît. J'ai le temps.", tr: "Şehir merkezi, lütfen. Vaktim var.", en: "Through the town centre, please. I have time.", ok: true, go: "f2" }
           ] },
      f1: { scene: { fr: "Sur l'autoroute, tout va vite.", tr: "Otoyolda her şey hızlı ilerliyor.", en: "On the motorway, everything moves fast." },
           say: [["M", "On arrive dans 10 minutes. Vous partez en vacances ?"]],
           choices: [
             { fr: "Oui, je pars en vacance à Paris.", tr: "Evet, Paris'e tatile gidiyorum.", en: "Yes, I'm going on holiday to Paris.", ok: false,
               fb: { fr: "Petit détail : « vacances » est toujours au pluriel 🏖️. On dit « je pars en vacances ».", tr: "Küçük bir ayrıntı: « vacances » hep çoğuldur 🏖️. « Je pars en vacances » denir.", en: "Small detail: « vacances » is always plural 🏖️. Say « je pars en vacances »." } },
             { fr: "Oui, je vais voir une amie à Paris.", tr: "Evet, Paris'te bir arkadaşımı görmeye gidiyorum.", en: "Yes, I'm going to see a friend in Paris.", ok: true, go: "g" },
             { fr: "Non, je pars en voiture, avec vous.", tr: "Hayır, arabayla gidiyorum, sizinle.", en: "No, I'm going by car, with you.", ok: false,
               fb: { fr: "En voiture ? Mais vous allez à la gare 🚆😄 ! Répondez à la question : « oui, je vais voir une amie ».", tr: "Arabayla mı? Ama istasyona gidiyorsunuz 🚆😄! Soruya cevap verin: « oui, je vais voir une amie ».", en: "By car? But you're going to the station 🚆😄! Answer the question: « oui, je vais voir une amie »." } }
           ] },
      f2: { scene: { fr: "Dans le centre-ville, les voitures ne bougent plus.", tr: "Şehir merkezinde arabalar hiç ilerlemiyor.", en: "In the town centre, the cars aren't moving." },
           say: [["M", "Oh là là, il y a un bouchon !"]],
           choices: [
             { fr: "Un bouchon ? Mais je n'ai pas de vin !", tr: "Mantar tıpa mı? Ama şarabım yok ki!", en: "A cork? But I don't have any wine!", ok: false,
               fb: { fr: "Haha 🍷😄 ! « Bouchon » = aussi beaucoup de voitures qui n'avancent pas 🚗🚗🚗. C'est un embouteillage !", tr: "Haha 🍷😄! « Bouchon » aynı zamanda ilerlemeyen bir sürü araba demek 🚗🚗🚗. Yani trafik sıkışıklığı!", en: "Haha 🍷😄! « Bouchon » also means lots of cars not moving 🚗🚗🚗. A traffic jam!" } },
             { fr: "Ce n'est pas grave. On a le temps ?", tr: "Önemli değil. Vaktimiz var mı?", en: "It doesn't matter. Do we have time?", ok: true, go: "g" },
             { fr: "Pas de problème, le taxi peut voler ?", tr: "Sorun değil, taksi uçabiliyor mu?", en: "No problem, can the taxi fly?", ok: false,
               fb: { fr: "Ce serait super ✈️😄, mais non ! Restez calme : « ce n'est pas grave ».", tr: "Süper olurdu ✈️😄 ama hayır! Sakin kalın: « ce n'est pas grave ».", en: "That would be great ✈️😄, but no! Stay calm: « ce n'est pas grave »." } }
           ] },
      g: { scene: { fr: "Le taxi s'arrête devant la gare. Il est 8 h.", tr: "Taksi istasyonun önünde duruyor. Saat 8.", en: "The taxi stops in front of the station. It's 8 a.m." },
           say: [["M", "Voilà, la gare ! Ça fait 24 €."]],
           choices: [
             { fr: "Ça fait mal ?", tr: "Acıtıyor mu?", en: "Does it hurt?", ok: false,
               fb: { fr: "Ici, « ça fait » = ça coûte 💶, pas la douleur 😄. Demandez plutôt : « je peux payer par carte ? »", tr: "Burada « ça fait » = tutuyor 💶, acıyla ilgisi yok 😄. Bunun yerine sorun: « je peux payer par carte ? »", en: "Here « ça fait » = it costs 💶, nothing to do with pain 😄. Ask instead: « je peux payer par carte ? »" } },
             { fr: "Je peux payer par carte ?", tr: "Kartla ödeyebilir miyim?", en: "Can I pay by card?", ok: true, go: "h" },
             { fr: "Je peux payer par chèque de 24 kilos ?", tr: "24 kiloluk bir çekle ödeyebilir miyim?", en: "Can I pay with a 24-kilo cheque?", ok: false,
               fb: { fr: "24 kilos ? C'est lourd 😄 ! Ce sont des euros. Demandez : « je peux payer par carte ? »", tr: "24 kilo mu? Ağır 😄! Bunlar euro. Sorun: « je peux payer par carte ? »", en: "24 kilos? That's heavy 😄! They're euros. Ask: « je peux payer par carte ? »" } }
           ] },
      h: { say: [["M", "Oui, bien sûr. Voilà la machine. Vous voulez un reçu ?"]],
           choices: [
             { fr: "Oui, un reçu, s'il vous plaît.", tr: "Evet, bir fiş, lütfen.", en: "Yes, a receipt, please.", ok: true, go: "i" },
             { fr: "Non merci, je veux une recette.", tr: "Hayır teşekkürler, bir yemek tarifi istiyorum.", en: "No thanks, I want a recipe.", ok: false,
               fb: { fr: "Une recette, c'est pour cuisiner 🍰😄. Le papier pour le prix, c'est « un reçu ».", tr: "« Recette » yemek tarifidir 🍰😄. Ödeme kâğıdı « un reçu » (fiş) olur.", en: "« Une recette » is for cooking 🍰😄. The payment slip is « un reçu »." } },
             { fr: "Non merci, ça va.", tr: "Hayır teşekkürler, gerek yok.", en: "No thanks, that's fine.", ok: true, go: "i" }
           ] },
      i: { say: [["M", "Merci ! Bon voyage, madame !"]],
           choices: [
             { fr: "Merci, vous aussi, bon voyage !", tr: "Teşekkürler, size de iyi yolculuklar!", en: "Thanks, you too, have a good trip!", ok: false,
               fb: { fr: "Lui, il reste dans son taxi 🚕😄. Dites plutôt « merci, bonne journée ! ».", tr: "O taksisinde kalıyor 🚕😄. Bunun yerine « merci, bonne journée ! » deyin.", en: "He's staying in his taxi 🚕😄. Say « merci, bonne journée ! » instead." } },
             { fr: "Merci, bonne journée !", tr: "Teşekkürler, iyi günler!", en: "Thanks, have a good day!", ok: true, go: "fin" },
             { fr: "De rien, monsieur !", tr: "Rica ederim, beyefendi!", en: "You're welcome, sir!", ok: false,
               fb: { fr: "« De rien » répond à « merci ». Ici, c'est à vous de dire « merci, bonne journée » 😉.", tr: "« De rien », « merci »ye verilen cevaptır. Burada « merci, bonne journée » deme sırası sizde 😉.", en: "« De rien » answers « merci ». Here it's your turn to say « merci, bonne journée » 😉." } }
           ] },
      fin: { end: "win", say: [["N", "Le train de 8 h 15 part voie 3."]],
             scene: { fr: "Vous êtes à l'heure ! Bravo, vous avez pris le taxi comme une vraie Française 🚕🎉", tr: "Tam zamanında geldiniz! Bravo, taksiye gerçek bir Fransız gibi bindiniz 🚕🎉", en: "You're on time! Well done, you took a taxi like a real French woman 🚕🎉" } }
    } },

  /* ───────────── 15. À l'accueil de la salle de sport ───────────── */
  { id: "av-accueil-salle", level: "A1", emoji: "🏋️",
    t: { fr: "Un nouveau membre à l'accueil", tr: "Resepsiyonda yeni bir üye", en: "A new member at the front desk" },
    goal: { fr: "Vous travaillez à l'accueil d'une salle de sport. Accueillez un nouveau membre et répondez à ses questions.", tr: "Bir spor salonunun resepsiyonunda çalışıyorsunuz. Yeni bir üyeyi karşılayın ve sorularını yanıtlayın.", en: "You work at a gym's front desk. Welcome a new member and answer his questions." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous êtes derrière le comptoir de l'accueil. Un jeune homme arrive avec un grand sac de sport.", tr: "Resepsiyon tezgâhının arkasındasınız. Büyük bir spor çantasıyla genç bir adam geliyor.", en: "You're behind the front desk. A young man arrives with a big sports bag." },
           say: [["M", "Bonjour ! C'est mon premier jour ici. Je m'appelle Hugo."]],
           choices: [
             { fr: "Salut mec ! Bienvenue ! Tu as ta carte de membre ?", tr: "Selam dostum! Hoş geldin! Üyelik kartın var mı?", en: "Hey mate! Welcome! Have you got your membership card?", ok: false,
               fb: { fr: "« Bienvenue », c'est parfait… mais « salut mec » et « tu », c'est trop familier pour le travail 😅 ! Avec un client, on dit « vous ».", tr: "« Bienvenue » mükemmel… ama « salut mec » ve « tu » iş için fazla samimi 😅! Müşteriyle « vous » denir.", en: "« Bienvenue » is perfect… but « salut mec » and « tu » are too casual for work 😅! With a customer, you say « vous »." } },
             { fr: "Bonjour, bienvenue ! Vous avez votre carte de membre ?", tr: "Merhaba, hoş geldiniz! Üyelik kartınız var mı?", en: "Hello, welcome! Do you have your membership card?", ok: true, go: "b" },
             { fr: "Bonjour Hugo ! Au revoir et bonne journée !", tr: "Merhaba Hugo! Hoşça kalın, iyi günler!", en: "Hello Hugo! Goodbye and have a nice day!", ok: false,
               fb: { fr: "Il vient d'arriver, ne partez pas si vite 😄 ! Dites « bienvenue ! ».", tr: "Daha yeni geldi, bu kadar çabuk vedalaşmayın 😄! « Bienvenue ! » deyin.", en: "He just arrived, don't say goodbye so fast 😄! Say « bienvenue ! »." } }
           ] },
      b: { say: [["M", "Euh… non. Je suis inscrit sur internet, mais je n'ai pas de carte."]],
           choices: [
             { fr: "Pas de problème. Quel est votre prénom ?", tr: "Sorun değil. Adınız ne?", en: "No problem. What's your first name?", ok: false,
               fb: { fr: "Il a déjà dit son prénom : Hugo 😉. Demandez son nom de famille !", tr: "Adını zaten söyledi: Hugo 😉. Soyadını sorun!", en: "He already said his first name: Hugo 😉. Ask for his surname!" } },
             { fr: "Pas de problème. Comment vous êtes ?", tr: "Sorun değil. Nasıl birisiniz?", en: "No problem. What are you like?", ok: false,
               fb: { fr: "« Comment vous êtes ? » = vous êtes grand, petit, sympa ? 😄 Demandez : « quel est votre nom de famille ? »", tr: "« Comment vous êtes ? » = uzun mu, kısa mı, sevimli mi? 😄 Şunu sorun: « quel est votre nom de famille ? »", en: "« Comment vous êtes ? » = are you tall, short, nice? 😄 Ask: « quel est votre nom de famille ? »" } },
             { fr: "Pas de problème. Quel est votre nom de famille ?", tr: "Sorun değil. Soyadınız ne?", en: "No problem. What's your surname?", ok: true, go: "c" }
           ] },
      c: { say: [["M", "Bernardeau. Hugo Bernardeau."]],
           choices: [
             { fr: "Vous pouvez épeler, s'il vous plaît ?", tr: "Harf harf söyler misiniz, lütfen?", en: "Can you spell it, please?", ok: true, go: "d" },
             { fr: "Vous pouvez répéter plus vite ?", tr: "Daha hızlı tekrar edebilir misiniz?", en: "Can you repeat it faster?", ok: false,
               fb: { fr: "Plus vite ? Ce sera encore plus difficile 😄 ! Demandez « plus lentement » ou « vous pouvez épeler ? ».", tr: "Daha hızlı mı? Daha da zor olur 😄! « Plus lentement » ya da « vous pouvez épeler ? » deyin.", en: "Faster? That'll be even harder 😄! Ask « plus lentement » or « vous pouvez épeler ? »." } },
             { fr: "Bernard… quoi ? C'est trop long !", tr: "Bernard… ne? Çok uzun!", en: "Bernard… what? That's too long!", ok: false,
               fb: { fr: "C'est vrai, c'est long 😅, mais restez polie ! Demandez : « vous pouvez épeler, s'il vous plaît ? »", tr: "Doğru, uzun 😅 ama kibar kalın! Sorun: « vous pouvez épeler, s'il vous plaît ? »", en: "True, it's long 😅, but stay polite! Ask: « vous pouvez épeler, s'il vous plaît ? »" } }
           ] },
      d: { scene: { fr: "Il épelle. Vous cherchez sur l'ordinateur… Voilà, il est là !", tr: "Harf harf söylüyor. Bilgisayarda arıyorsunuz… İşte, orada!", en: "He spells it. You search on the computer… There he is!" },
           say: [["M", "B-E-R-N-A-R-D-E-A-U."]],
           choices: [
             { fr: "Voilà, j'ai trouvé vous ! Voici votre carte.", tr: "İşte, buldum sizi! Kartınız burada.", en: "There, I found you! Here's your card.", ok: false,
               fb: { fr: "En français, le pronom va avant le verbe (ici, avant « ai ») : « je vous ai trouvé » 😉.", tr: "Fransızcada zamir fiilden önce gelir (burada « ai »den önce): « je vous ai trouvé » 😉.", en: "In French, the pronoun goes before the verb (here, before « ai »): « je vous ai trouvé » 😉." } },
             { fr: "Voilà, je vous ai perdu ! Voici votre carte.", tr: "İşte, sizi kaybettim! Kartınız burada.", en: "There, I've lost you! Here's your card.", ok: false,
               fb: { fr: "Oh non, ne le perdez pas 😄 ! Le contraire de « perdre », c'est « trouver » : « je vous ai trouvé ».", tr: "Aman, onu kaybetmeyin 😄! « Perdre »nin tersi « trouver »: « je vous ai trouvé ».", en: "Oh no, don't lose him 😄! The opposite of « perdre » is « trouver »: « je vous ai trouvé »." } },
             { fr: "Voilà, je vous ai trouvé ! Voici votre carte.", tr: "İşte, sizi buldum! Buyurun kartınız.", en: "There, I've found you! Here's your card.", ok: true, go: "e" }
           ] },
      e: { say: [["M", "Merci ! Et je fais quoi avec la carte ?"]],
           choices: [
             { fr: "Vous passez la carte ici, à l'entrée, chaque fois.", tr: "Kartı her seferinde burada, girişte okutuyorsunuz.", en: "You swipe the card here, at the entrance, every time.", ok: true, go: "f" },
             { fr: "Vous la jetez à la poubelle, chaque fois.", tr: "Her seferinde onu çöpe atıyorsunuz.", en: "You throw it in the bin, every time.", ok: false,
               fb: { fr: "Oh non, il a besoin de sa carte 😄 ! On la « passe » à l'entrée.", tr: "Yok artık, kartına ihtiyacı var 😄! Girişte okutulur (« passer »).", en: "Oh no, he needs his card 😄! You « passer » (swipe) it at the entrance." } },
             { fr: "Vous passez un examen avec la carte.", tr: "Kartla bir sınava giriyorsunuz.", en: "You take an exam with the card.", ok: false,
               fb: { fr: "Pas d'examen à la salle de sport 😄 ! « Passer la carte » = la mettre devant la machine, à l'entrée.", tr: "Spor salonunda sınav yok 😄! « Passer la carte » = kartı girişteki makineye okutmak.", en: "No exams at the gym 😄! « Passer la carte » = hold it to the machine at the entrance." } }
           ] },
      f: { say: [["M", "D'accord. Et les vestiaires, c'est où ?"]],
           choices: [
             { fr: "Je ne sais pas, je suis nouvelle aussi !", tr: "Bilmiyorum, ben de yeniyim!", en: "I don't know, I'm new too!", ok: false,
               fb: { fr: "Mais si, vous savez, vous travaillez ici 😉 ! Par exemple : « au fond, à gauche ».", tr: "Biliyorsunuz, burada çalışıyorsunuz 😉! Örneğin: « au fond, à gauche ».", en: "Yes you do, you work here 😉! For example: « au fond, à gauche »." } },
             { fr: "Les vestiaires sont au fond, à gauche, après les machines.", tr: "Soyunma odaları en arkada, solda, makinelerden sonra.", en: "The changing rooms are at the back, on the left, after the machines.", ok: true, go: "g" },
             { fr: "Les vestiaires sont sur le tapis de course.", tr: "Soyunma odaları koşu bandının üstünde.", en: "The changing rooms are on the treadmill.", ok: false,
               fb: { fr: "Se changer en courant ? Difficile 🏃😄 ! Donnez un lieu : « au fond, à gauche ».", tr: "Koşarken üstünü değiştirmek mi? Zor 🏃😄! Bir yer söyleyin: « au fond, à gauche ».", en: "Getting changed while running? Tricky 🏃😄! Give a place: « au fond, à gauche »." } }
           ] },
      g: { say: [["M", "Super. Et la salle est ouverte quand ?"]],
           choices: [
             { fr: "Oui, elle est ouverte, du lundi au vendredi.", tr: "Evet, açık, pazartesiden cumaya.", en: "Yes, it's open, Monday to Friday.", ok: false,
               fb: { fr: "« Quand ? » = à quelle heure 🕖. Les jours, c'est bien, mais donnez aussi les horaires : « de 7 h à 22 h ».", tr: "« Quand ? » = saat kaçta 🕖. Günler iyi ama saatleri de verin: « de 7 h à 22 h ».", en: "« Quand ? » = at what time 🕖. The days are good, but give the hours too: « de 7 h à 22 h »." } },
             { fr: "Du lundi au vendredi, de 7 h à 22 h.", tr: "Pazartesiden cumaya, 7'den 22'ye.", en: "Monday to Friday, from 7 a.m. to 10 p.m.", ok: true, go: "h" },
             { fr: "Elle est ouverte… quand vous voulez !", tr: "Açık… ne zaman isterseniz!", en: "It's open… whenever you like!", ok: false,
               fb: { fr: "Ce serait génial, mais la nuit, c'est fermé 🌙😄. Donnez les horaires.", tr: "Harika olurdu ama gece kapalı 🌙😄. Saatleri söyleyin.", en: "That would be great, but it's closed at night 🌙😄. Give the hours." } }
           ] },
      h: { say: [["M", "Il y a des cours collectifs ? Je voudrais essayer quelque chose."]],
           choices: [
             { fr: "Oui ! Il y a un cours de yoga ce soir à 18 h 30. C'est calme.", tr: "Evet! Bu akşam 18.30'da yoga dersi var. Sakin bir ders.", en: "Yes! There's a yoga class tonight at 6:30. It's calm.", ok: true, go: "i1" },
             { fr: "Oui ! Il y a des cours de français le samedi.", tr: "Evet! Cumartesi günleri Fransızca dersleri var.", en: "Yes! There are French classes on Saturdays.", ok: false,
               fb: { fr: "Bonne idée pour vous 😄, mais ici c'est une salle de sport ! Proposez un cours de sport.", tr: "Sizin için güzel bir fikir 😄 ama burası spor salonu! Bir spor dersi önerin.", en: "Good idea for you 😄, but this is a gym! Suggest a sports class." } },
             { fr: "Oui ! Il y a un cours de boxe demain à 19 h. C'est très sportif !", tr: "Evet! Yarın saat 19'da boks dersi var. Çok sportif bir ders!", en: "Yes! There's a boxing class tomorrow at 7 p.m. It's very intense!", ok: true, go: "i2" }
           ] },
      i1: { say: [["M", "Le yoga ? Je ne suis pas très souple…"]],
           choices: [
             { fr: "Ce n'est pas grave ! Le cours est pour les débutants.", tr: "Önemli değil! Ders yeni başlayanlar için.", en: "That's OK! The class is for beginners.", ok: true, go: "j" },
             { fr: "Ah, alors restez à la maison, c'est mieux !", tr: "Ah, o zaman evde kalın, daha iyi!", en: "Oh, then stay at home, it's better!", ok: false,
               fb: { fr: "Pas très encourageant 😅 ! Rassurez-le : « ce n'est pas grave, c'est pour les débutants ».", tr: "Pek cesaret verici değil 😅! İçini rahatlatın: « ce n'est pas grave, c'est pour les débutants ».", en: "Not very encouraging 😅! Reassure him: « ce n'est pas grave, c'est pour les débutants »." } },
             { fr: "Ce n'est pas grave ! Le prof est très gentil.", tr: "Önemli değil! Hoca çok nazik.", en: "That's OK! The teacher is very nice.", ok: true, go: "j" }
           ] },
      i2: { say: [["M", "La boxe ! Je dois réserver ?"]],
           choices: [
             { fr: "Oui, vous réservez une table sur l'application.", tr: "Evet, uygulamadan bir masa ayırtıyorsunuz.", en: "Yes, you book a table on the app.", ok: false,
               fb: { fr: "Une table ? Ce n'est pas un restaurant 🍽️😄 ! Il réserve une place sur l'application.", tr: "Masa mı? Burası restoran değil 🍽️😄! Uygulamadan bir yer ayırtıyor.", en: "A table? It's not a restaurant 🍽️😄! He books a spot on the app." } },
             { fr: "Oui, vous réservez sur l'application. C'est gratuit.", tr: "Evet, uygulamadan rezervasyon yapıyorsunuz. Ücretsiz.", en: "Yes, you book on the app. It's free.", ok: true, go: "j" },
             { fr: "Non, vous devez réserver sur l'application.", tr: "Hayır, uygulamadan rezervasyon yapmalısınız.", en: "No, you must book on the app.", ok: false,
               fb: { fr: "« Non » puis « vous devez réserver » ? Ça se contredit 😄. Dites « oui, vous réservez sur l'application ».", tr: "Önce « non » sonra « vous devez réserver » mi? Çelişiyor 😄. « Oui, vous réservez sur l'application » deyin.", en: "« Non » and then « you have to book »? That's contradictory 😄. Say « oui, vous réservez sur l'application »." } }
           ] },
      j: { say: [["M", "Merci beaucoup ! Vous êtes très gentille."]],
           choices: [
             { fr: "Avec plaisir ! Bon appétit !", tr: "Rica ederim! Afiyet olsun!", en: "My pleasure! Enjoy your meal!", ok: false,
               fb: { fr: "Il va faire du sport, pas manger 😄. On dit « bonne séance ! ».", tr: "Spor yapacak, yemek yemeyecek 😄. « Bonne séance ! » (iyi antrenmanlar) denir.", en: "He's going to work out, not eat 😄. Say « bonne séance ! »." } },
             { fr: "Avec plaisir ! Bonne séance !", tr: "Rica ederim! İyi antrenmanlar!", en: "My pleasure! Have a good workout!", ok: true, go: "fin" },
             { fr: "Oui, je sais ! Bonne séance !", tr: "Evet, biliyorum! İyi antrenmanlar!", en: "Yes, I know! Have a good session!", ok: false,
               fb: { fr: "C'est vrai 😄, mais un peu modeste, c'est mieux ! Dites « avec plaisir ! ».", tr: "Doğru 😄 ama biraz alçakgönüllülük daha iyi! « Avec plaisir ! » deyin.", en: "True 😄, but a little modesty is better! Say « avec plaisir ! »." } }
           ] },
      fin: { end: "win", say: [["M", "À bientôt !"]],
             scene: { fr: "Hugo part vers les vestiaires avec un grand sourire. Bravo, vous êtes la reine de l'accueil ! 🏋️🎉", tr: "Hugo kocaman bir gülümsemeyle soyunma odalarına gidiyor. Bravo, resepsiyonun kraliçesi sizsiniz! 🏋️🎉", en: "Hugo heads to the changing rooms with a big smile. Well done, you're the queen of the front desk! 🏋️🎉" } }
    } }
);
