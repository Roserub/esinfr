/* Aventures A1 — 1 to 5: café, métro, chemin, marché, handball */
(window.ADVENTURES = window.ADVENTURES || []).push(

  /* ───────────── 1. Café ───────────── */
  { id: "av-cafe", level: "A1", emoji: "☕",
    t: { fr: "Un café en terrasse", tr: "Terasta bir kahve", en: "A coffee on the terrace" },
    goal: { fr: "Commandez une boisson et une viennoiserie, puis payez.", tr: "Bir içecek ve bir hamur işi sipariş edin, sonra ödeyin.", en: "Order a drink and a pastry, then pay." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Il est 10 h du matin. Vous arrivez devant un petit café. Un serveur sourit.", tr: "Saat sabah 10. Küçük bir kafenin önüne geliyorsunuz. Bir garson gülümsüyor.", en: "It's 10 a.m. You arrive at a little café. A waiter smiles." },
           say: [["M", "Bonjour madame ! Vous êtes seule ?"]],
           choices: [
             { fr: "Bonjour ! Oui, une table pour une personne, s'il vous plaît.", tr: "Merhaba! Evet, bir kişilik bir masa, lütfen.", en: "Hello! Yes, a table for one, please.", ok: true, go: "b" },
             { fr: "Bonjour ! Non, je suis turque.", tr: "Merhaba! Hayır, Türk'üm.", en: "Hello! No, I'm Turkish.", ok: false,
               fb: { fr: "« Seule » = sans autre personne. Il demande combien vous êtes, pas votre nationalité 😄. Dites « oui, une table pour une personne ».", tr: "« Seule » = yalnız. Garson kaç kişi olduğunuzu soruyor, milliyetinizi değil 😄. « Oui, une table pour une personne » deyin.", en: "« Seule » = alone. He's asking how many of you there are, not your nationality 😄. Say « oui, une table pour une personne »." } },
             { fr: "Bonsoir ! Oui, une table, s'il vous plaît.", tr: "İyi akşamlar! Evet, bir masa, lütfen.", en: "Good evening! Yes, a table, please.", ok: false,
               fb: { fr: "Presque parfait ! Mais il est 10 h du matin : on dit « bonjour ». « Bonsoir », c'est après 18 h environ.", tr: "Neredeyse mükemmel! Ama saat sabah 10: « bonjour » denir. « Bonsoir » akşam 18 civarından sonra.", en: "Almost perfect! But it's 10 a.m., so it's « bonjour ». « Bonsoir » is for after about 6 p.m." } }
           ] },
      b: { say: [["M", "Très bien. En terrasse ou à l'intérieur ?"]],
           choices: [
             { fr: "En terrasse, s'il vous plaît. Il fait beau !", tr: "Terasta, lütfen. Hava çok güzel!", en: "On the terrace, please. The weather's lovely!", ok: true, go: "c" },
             { fr: "À l'intérieur, s'il vous plaît. J'ai un peu froid.", tr: "İçeride, lütfen. Biraz üşüyorum.", en: "Inside, please. I'm a bit cold.", ok: true, go: "c" },
             { fr: "À l'intérieur, s'il vous plaît. Je suis froide.", tr: "İçeride, lütfen. Ben soğuk biriyim.", en: "Inside, please. I'm a cold person.", ok: false,
               fb: { fr: "« Je suis froide » = vous êtes une personne pas sympa 🥶. Pour la température, on dit « j'ai froid ».", tr: "« Je suis froide » = soğuk, mesafeli bir insanım 🥶. Üşüdüğünüzü söylemek için « j'ai froid » denir.", en: "« Je suis froide » = you're an unfriendly person 🥶. For temperature, say « j'ai froid »." } }
           ] },
      c: { scene: { fr: "Vous êtes assise. Le serveur revient avec un petit carnet.", tr: "Oturdunuz. Garson elinde küçük bir defterle geri geliyor.", en: "You're seated. The waiter comes back with a little notepad." },
           say: [["M", "Qu'est-ce que je vous sers ?"]],
           choices: [
             { fr: "Je voudrais un café crème, s'il vous plaît.", tr: "Sütlü bir kahve istiyorum, lütfen.", en: "I'd like a white coffee, please.", ok: true, go: "d" },
             { fr: "Je suis un café crème.", tr: "Ben bir sütlü kahveyim.", en: "I am a white coffee.", ok: false,
               fb: { fr: "Oups ! Vous êtes une tasse maintenant ☕😄. On dit « je voudrais un café crème ».", tr: "Eyvah! Artık bir fincansınız ☕😄. « Je voudrais un café crème » denir.", en: "Oops! You're now a cup ☕😄. Say « je voudrais un café crème »." } },
             { fr: "Un café crème, s'il te plaît.", tr: "Bir sütlü kahve, lütfen (senli).", en: "A white coffee, please (informal).", ok: false,
               fb: { fr: "Bon choix, mais le serveur n'est pas votre ami d'enfance ! Avec lui, on dit « s'il vous plaît ».", tr: "İyi seçim ama garson çocukluk arkadaşınız değil! Ona « s'il vous plaît » denir.", en: "Good choice, but the waiter isn't your childhood friend! With him, say « s'il vous plaît »." } }
           ] },
      d: { say: [["M", "Un café crème. Et avec ça ? Un croissant ? Un pain au chocolat ?"]],
           choices: [
             { fr: "Oui, un croissant, s'il vous plaît.", tr: "Evet, bir kruvasan, lütfen.", en: "Yes, a croissant, please.", ok: true, go: "e" },
             { fr: "Un pain au chocolat, s'il vous plaît.", tr: "Bir çikolatalı kruvasan, lütfen.", en: "A pain au chocolat, please.", ok: true, go: "e" },
             { fr: "Un croissant de chocolat, s'il vous plaît.", tr: "Çikolatadan bir kruvasan, lütfen.", en: "A croissant of chocolate, please.", ok: false,
               fb: { fr: "Bonne idée, mauvais nom ! En France, c'est un « pain au chocolat » (ou une « chocolatine » dans le Sud-Ouest 😉).", tr: "Fikir güzel, isim yanlış! Fransa'da buna « pain au chocolat » denir (Güneybatı'da « chocolatine » 😉).", en: "Good idea, wrong name! In France it's a « pain au chocolat » (or a « chocolatine » in the South-West 😉)." } }
           ] },
      e: { scene: { fr: "Le serveur pose la tasse et l'assiette sur la table.", tr: "Garson fincanı ve tabağı masaya koyuyor.", en: "The waiter puts the cup and the plate on the table." },
           say: [["M", "Voilà pour vous, madame. Bon appétit !"]],
           choices: [
             { fr: "Merci beaucoup !", tr: "Çok teşekkürler!", en: "Thank you very much!", ok: true, go: "f" },
             { fr: "Merci, vous aussi !", tr: "Teşekkürler, size de!", en: "Thanks, you too!", ok: false,
               fb: { fr: "Haha, les Français font aussi cette erreur ! Mais le serveur travaille, il ne mange pas 😄. Un simple « merci » suffit.", tr: "Haha, Fransızlar da bu hatayı yapar! Ama garson çalışıyor, yemek yemiyor 😄. Sadece « merci » yeterli.", en: "Haha, French people make this mistake too! But the waiter is working, not eating 😄. A simple « merci » is enough." } },
             { fr: "De rien !", tr: "Rica ederim!", en: "You're welcome!", ok: false,
               fb: { fr: "« De rien », c'est la réponse à « merci ». Ici, c'est vous qui dites « merci » !", tr: "« De rien », « merci »ye verilen cevaptır. Burada « merci » diyen siz olmalısınız!", en: "« De rien » is the answer to « merci ». Here, you're the one who says « merci »!" } }
           ] },
      f: { scene: { fr: "À la table d'à côté, un petit garçon vous regarde manger.", tr: "Yan masada küçük bir çocuk sizin yemenizi izliyor.", en: "At the next table, a little boy watches you eat." },
           say: [["K", "Madame ! C'est bon ?"]],
           choices: [
             { fr: "Oui, c'est très bon !", tr: "Evet, çok güzel!", en: "Yes, it's very good!", ok: true, go: "g" },
             { fr: "Oui, je suis très bonne !", tr: "Evet, ben çok iyiyim (lezzetliyim)!", en: "Yes, I am very tasty!", ok: false,
               fb: { fr: "Le croissant est bon, pas vous 😄 ! Pour la nourriture, on dit « c'est bon ».", tr: "Lezzetli olan kruvasan, siz değilsiniz 😄! Yemek için « c'est bon » denir.", en: "The croissant is tasty, not you 😄! For food, say « c'est bon »." } },
             { fr: "Oui, il fait bon !", tr: "Evet, hava güzel!", en: "Yes, the weather's nice!", ok: false,
               fb: { fr: "« Il fait bon », c'est pour la météo ☀️. Pour le croissant : « c'est bon » !", tr: "« Il fait bon » hava için kullanılır ☀️. Kruvasan için: « c'est bon »!", en: "« Il fait bon » is about the weather ☀️. For the croissant: « c'est bon »!" } }
           ] },
      g: { scene: { fr: "C'est fini. Le serveur passe près de vous.", tr: "Bitirdiniz. Garson yanınızdan geçiyor.", en: "You've finished. The waiter walks past you." },
           say: [["M", "Ça va, madame ? Vous voulez autre chose ?"]],
           choices: [
             { fr: "Non merci. L'addition, s'il vous plaît.", tr: "Hayır, teşekkürler. Hesap, lütfen.", en: "No thanks. The bill, please.", ok: true, go: "h" },
             { fr: "Non merci. L'addiction, s'il vous plaît.", tr: "Hayır, teşekkürler. Bağımlılık, lütfen.", en: "No thanks. The addiction, please.", ok: false,
               fb: { fr: "Attention, piège anglais ! « Addiction » = dépendance 😅. La note au café, c'est « l'addition ».", tr: "Dikkat, İngilizce tuzağı! « Addiction » = bağımlılık 😅. Kafede hesap « l'addition »dır.", en: "Careful, English trap! « Addiction » means dependency 😅. The bill is « l'addition »." } },
             { fr: "Non merci. Combien je suis ?", tr: "Hayır, teşekkürler. Ben ne kadarım?", en: "No thanks. How much am I?", ok: false,
               fb: { fr: "Vous n'êtes pas à vendre 😄 ! On dit « c'est combien ? » ou « l'addition, s'il vous plaît ».", tr: "Siz satılık değilsiniz 😄! « C'est combien ? » ya da « l'addition, s'il vous plaît » denir.", en: "You're not for sale 😄! Say « c'est combien ? » or « l'addition, s'il vous plaît »." } }
           ] },
      h: { say: [["M", "Alors, ça fait 4,70 €. Vous payez comment ?"]],
           choices: [
             { fr: "Par carte, s'il vous plaît.", tr: "Kartla, lütfen.", en: "By card, please.", ok: true, go: "i" },
             { fr: "En espèces. Voilà 5 €.", tr: "Nakit. Buyurun, 5 euro.", en: "In cash. Here's 5 euros.", ok: true, go: "j" },
             { fr: "Avec carte, s'il vous plaît.", tr: "Kart ile, lütfen.", en: "With card, please.", ok: false,
               fb: { fr: "Presque ! En français, on paie « par carte » (et « en espèces » pour l'argent liquide).", tr: "Neredeyse! Fransızcada « par carte » ile ödenir (nakit için « en espèces »).", en: "Almost! In French you pay « par carte » (and « en espèces » for cash)." } }
           ] },
      i: { scene: { fr: "Vous posez la carte sur le terminal. Bip !", tr: "Kartınızı cihaza yaklaştırıyorsunuz. Bip!", en: "You tap your card on the terminal. Beep!" },
           say: [["M", "C'est bon, c'est passé. Merci, et bonne journée, madame !"]],
           choices: [
             { fr: "Merci, vous aussi ! Au revoir !", tr: "Teşekkürler, size de! Hoşça kalın!", en: "Thanks, you too! Goodbye!", ok: true, go: "fin" },
             { fr: "Merci, bonne nuit !", tr: "Teşekkürler, iyi geceler!", en: "Thanks, good night!", ok: false,
               fb: { fr: "Il est 10 h du matin : il va encore travailler toute la journée 😄. Dites « bonne journée » ou « vous aussi ».", tr: "Saat sabah 10: garson daha bütün gün çalışacak 😄. « Bonne journée » ya da « vous aussi » deyin.", en: "It's 10 a.m.: he still has a whole day of work 😄. Say « bonne journée » or « vous aussi »." } },
             { fr: "De rien, au revoir !", tr: "Rica ederim, hoşça kalın!", en: "You're welcome, goodbye!", ok: false,
               fb: { fr: "Il vous dit « merci », alors « de rien » marche… mais c'est vous la cliente ! Plus naturel : « merci, vous aussi ».", tr: "Size « merci » diyor, yani « de rien » olur… ama müşteri sizsiniz! Daha doğal: « merci, vous aussi ».", en: "He says « merci », so « de rien » sort of works… but you're the customer! More natural: « merci, vous aussi »." } }
           ] },
      j: { say: [["M", "Merci. Et voilà votre monnaie : 0,30 €. Bonne journée, madame !"]],
           choices: [
             { fr: "Merci, bonne journée à vous aussi !", tr: "Teşekkürler, size de iyi günler!", en: "Thanks, have a nice day too!", ok: true, go: "fin" },
             { fr: "Gardez la monnaie, merci ! Bonne journée !", tr: "Üstü kalsın, teşekkürler! İyi günler!", en: "Keep the change, thanks! Have a nice day!", ok: true, go: "fin" },
             { fr: "Bonsoir, monsieur !", tr: "İyi akşamlar, beyefendi!", en: "Good evening, sir!", ok: false,
               fb: { fr: "« Bonsoir » est une salutation du soir, et il est 10 h ! Pour partir le matin : « bonne journée » ou « au revoir ».", tr: "« Bonsoir » akşam selamıdır, saat ise 10! Sabah ayrılırken: « bonne journée » ya da « au revoir ».", en: "« Bonsoir » is an evening greeting, and it's 10 a.m.! When leaving in the morning: « bonne journée » or « au revoir »." } }
           ] },
      fin: { end: "win", say: [["M", "Merci, madame. À bientôt !"]],
             scene: { fr: "Bravo ! Vous avez commandé et payé en français. Le serveur va se souvenir de vous ☕🎉", tr: "Bravo! Fransızca sipariş verdiniz ve ödediniz. Garson sizi hatırlayacak ☕🎉", en: "Well done! You ordered and paid in French. The waiter will remember you ☕🎉" } }
    } },

  /* ───────────── 2. Métro ───────────── */
  { id: "av-metro", level: "A1", emoji: "🚇",
    t: { fr: "Un ticket de métro", tr: "Bir metro bileti", en: "A metro ticket" },
    goal: { fr: "Achetez un ticket au guichet et trouvez la bonne ligne pour aller à Bellevue.", tr: "Gişeden bir bilet alın ve Bellevue'ye gitmek için doğru hattı bulun.", en: "Buy a ticket at the counter and find the right line to Bellevue." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous êtes dans la station de métro. La machine ne marche pas, alors vous allez au guichet.", tr: "Metro istasyonundasınız. Bilet makinesi çalışmıyor, siz de gişeye gidiyorsunuz.", en: "You're in the metro station. The machine doesn't work, so you go to the counter." },
           say: [["F", "Bonjour madame, je peux vous aider ?"]],
           choices: [
             { fr: "Bonjour, je voudrais un ticket, s'il vous plaît.", tr: "Merhaba, bir bilet istiyorum, lütfen.", en: "Hello, I'd like a ticket, please.", ok: true, go: "b" },
             { fr: "Bonjour, je voudrais un billet d'avion, s'il vous plaît.", tr: "Merhaba, bir uçak bileti istiyorum, lütfen.", en: "Hello, I'd like a plane ticket, please.", ok: false,
               fb: { fr: "Le métro ne va pas en Turquie, malheureusement ✈️😄. Pour le métro, on dit « un ticket ».", tr: "Ne yazık ki metro Türkiye'ye gitmiyor ✈️😄. Metro için « un ticket » denir.", en: "Sadly, the metro doesn't go to Turkey ✈️😄. For the metro, say « un ticket »." } },
             { fr: "Bonjour, je peux vous aider ?", tr: "Merhaba, size yardımcı olabilir miyim?", en: "Hello, can I help you?", ok: false,
               fb: { fr: "C'est gentil, mais c'est elle qui travaille ici 😊. Dites ce que vous voulez : « je voudrais un ticket ».", tr: "Çok naziksiniz ama burada çalışan o 😊. Ne istediğinizi söyleyin: « je voudrais un ticket ».", en: "That's kind, but she's the one working here 😊. Say what you want: « je voudrais un ticket »." } }
           ] },
      b: { say: [["F", "Un ticket simple ou un carnet de 10 tickets ?"]],
           choices: [
             { fr: "Un ticket simple, s'il vous plaît.", tr: "Tek bir bilet, lütfen.", en: "A single ticket, please.", ok: true, go: "c" },
             { fr: "Un carnet, s'il vous plaît. Je vais prendre le métro tous les jours.", tr: "Onluk paket, lütfen. Her gün metroya bineceğim.", en: "A book of ten, please. I'm going to take the metro every day.", ok: true, go: "c2" },
             { fr: "Un ticket compliqué, s'il vous plaît.", tr: "Karmaşık bir bilet, lütfen.", en: "A complicated ticket, please.", ok: false,
               fb: { fr: "Haha ! Ici, « simple » veut dire « pour un seul voyage ». Pas de ticket compliqué, heureusement 😄.", tr: "Haha! Burada « simple » « tek yolculuk için » demek. Neyse ki karmaşık bilet yok 😄.", en: "Haha! Here « simple » means « for one trip ». No complicated tickets, luckily 😄." } }
           ] },
      c: { say: [["F", "Ça fait 1,90 €, s'il vous plaît."]],
           choices: [
             { fr: "Voilà 2 €.", tr: "Buyurun, 2 euro.", en: "Here's 2 euros.", ok: true, go: "d" },
             { fr: "Je peux payer par carte ?", tr: "Kartla ödeyebilir miyim?", en: "Can I pay by card?", ok: true, go: "d" },
             { fr: "Comment ?", tr: "Nasıl?", en: "How?", ok: false,
               fb: { fr: "« Comment ? » = elle va répéter, mais le prix est clair : 1,90 €. Attention : « combien » = le prix, « comment » = la manière.", tr: "« Comment ? » derseniz tekrar eder ama fiyat belli: 1,90 €. Dikkat: « combien » = ne kadar, « comment » = nasıl.", en: "« Comment ? » makes her repeat, but the price is clear: €1.90. Careful: « combien » = how much, « comment » = how." } }
           ] },
      c2: { say: [["F", "Le carnet, c'est 16 €. Vous avez moins de 26 ans ? Il y a un tarif jeune."]],
           choices: [
             { fr: "Oui, j'ai 24 ans.", tr: "Evet, 24 yaşındayım.", en: "Yes, I'm 24.", ok: true, go: "d" },
             { fr: "Oui, je suis 24 ans.", tr: "Evet, ben 24 yaşım.", en: "Yes, I am 24 years.", ok: false,
               fb: { fr: "Le piège classique ! En français, on « a » son âge : « j'ai 24 ans ». (Ce n'est pas comme « I am » 😉)", tr: "Klasik tuzak! Fransızcada yaş « sahip olunur »: « j'ai 24 ans ». (İngilizcedeki « I am » gibi değil 😉)", en: "The classic trap! In French you « have » your age: « j'ai 24 ans ». (Not like « I am » 😉)" } },
             { fr: "Non, j'ai 16 €.", tr: "Hayır, 16 eurom var.", en: "No, I have 16 euros.", ok: false,
               fb: { fr: "Elle parle de votre âge, pas de votre argent 💶😄. Dites « oui, j'ai … ans ».", tr: "Paranızı değil, yaşınızı soruyor 💶😄. « Oui, j'ai … ans » deyin.", en: "She's asking your age, not your money 💶😄. Say « oui, j'ai … ans »." } }
           ] },
      d: { scene: { fr: "Vous avez votre ticket. Maintenant, vous voulez aller à l'arrêt Bellevue.", tr: "Biletiniz elinizde. Şimdi Bellevue durağına gitmek istiyorsunuz.", en: "You have your ticket. Now you want to go to the Bellevue stop." },
           say: [["F", "Voilà, madame ! Vous avez besoin d'autre chose ?"]],
           choices: [
             { fr: "Oui. Pour aller à Bellevue, c'est quelle ligne, s'il vous plaît ?", tr: "Evet. Bellevue'ye gitmek için hangi hat, lütfen?", en: "Yes. To go to Bellevue, which line is it, please?", ok: true, go: "e" },
             { fr: "Oui. Bellevue, c'est beau ?", tr: "Evet. Bellevue güzel mi?", en: "Yes. Is Bellevue pretty?", ok: false,
               fb: { fr: "Peut-être, avec un nom comme ça 😄 ! Mais vous voulez la ligne : « c'est quelle ligne pour Bellevue ? »", tr: "Böyle bir isimle belki güzeldir 😄! Ama siz hattı öğrenmek istiyorsunuz: « c'est quelle ligne pour Bellevue ? »", en: "Maybe, with a name like that 😄! But you want the line: « c'est quelle ligne pour Bellevue ? »" } },
             { fr: "Oui. Je vais au Bellevue à pied.", tr: "Evet. Bellevue'ye yürüyerek gidiyorum.", en: "Yes. I'm walking to Bellevue.", ok: false,
               fb: { fr: "À pied ? Mais vous avez un ticket de métro ! 🚶‍♀️ Et pour une ville ou un arrêt, on dit « à Bellevue ». Demandez la ligne.", tr: "Yürüyerek mi? Ama metro biletiniz var! 🚶‍♀️ Ayrıca durak için « à Bellevue » denir. Hattı sorun.", en: "On foot? But you have a metro ticket! 🚶‍♀️ Also, for a stop we say « à Bellevue ». Ask for the line." } }
           ] },
      e: { say: [["F", "Prenez la ligne 2, direction Château. C'est 4 arrêts."]],
           choices: [
             { fr: "Ligne 2, direction Château. Merci beaucoup !", tr: "2 numaralı hat, Château yönü. Çok teşekkürler!", en: "Line 2, towards Château. Thank you very much!", ok: true, go: "f" },
             { fr: "Pardon, vous pouvez répéter plus lentement, s'il vous plaît ?", tr: "Pardon, daha yavaş tekrar edebilir misiniz, lütfen?", en: "Sorry, can you repeat more slowly, please?", ok: true, go: "e2" },
             { fr: "Ligne 4, direction 2. Merci !", tr: "4 numaralı hat, 2 yönü. Teşekkürler!", en: "Line 4, towards 2. Thanks!", ok: false,
               fb: { fr: "Les chiffres dansent un peu 😅 ! C'est la ligne 2, direction Château, et 4 arrêts.", tr: "Rakamlar biraz karıştı 😅! 2 numaralı hat, Château yönü ve 4 durak.", en: "The numbers got mixed up 😅! It's line 2, towards Château, and 4 stops." } }
           ] },
      e2: { say: [["F", "Pas de problème. La ligne… 2. Direction… Château. 4 arrêts."]],
           choices: [
             { fr: "Merci, c'est très gentil !", tr: "Teşekkürler, çok naziksiniz!", en: "Thank you, that's very kind!", ok: true, go: "f" },
             { fr: "Merci, tu es très gentille !", tr: "Teşekkürler, çok naziksin!", en: "Thanks, you're very kind! (informal)", ok: false,
               fb: { fr: "Elle est gentille, oui, mais c'est une inconnue : on dit « vous » ou « c'est très gentil ».", tr: "Evet, nazik biri ama tanımadığınız biri: « vous » ya da « c'est très gentil » denir.", en: "She's kind, yes, but she's a stranger: say « vous » or « c'est très gentil »." } }
           ] },
      f: { scene: { fr: "Vous mettez le ticket dans la machine. Rien ! La porte ne s'ouvre pas. Un monsieur derrière vous parle.", tr: "Bileti makineye koyuyorsunuz. Hiçbir şey olmuyor! Kapı açılmıyor. Arkanızdaki bir bey konuşuyor.", en: "You put the ticket in the machine. Nothing! The gate won't open. A man behind you speaks." },
           say: [["M", "Madame, il faut mettre le ticket dans l'autre sens !"]],
           choices: [
             { fr: "Ah, merci monsieur ! Je suis nouvelle ici.", tr: "Ah, teşekkürler beyefendi! Burada yeniyim.", en: "Oh, thank you, sir! I'm new here.", ok: true, go: "g" },
             { fr: "Non ! C'est mon ticket !", tr: "Hayır! Bu benim biletim!", en: "No! It's my ticket!", ok: false,
               fb: { fr: "Pas de panique, il ne veut pas votre ticket 😄 ! Il vous aide : dites « merci, monsieur ».", tr: "Panik yok, biletinizi istemiyor 😄! Size yardım ediyor: « merci, monsieur » deyin.", en: "Don't panic, he doesn't want your ticket 😄! He's helping you: say « merci, monsieur »." } },
             { fr: "Merci, madame !", tr: "Teşekkürler, hanımefendi!", en: "Thank you, madam!", ok: false,
               fb: { fr: "Bonne idée de dire merci ! Mais c'est un homme : « merci, monsieur ».", tr: "Teşekkür etmek güzel! Ama o bir erkek: « merci, monsieur ».", en: "Good idea to say thanks! But he's a man: « merci, monsieur »." } }
           ] },
      g: { scene: { fr: "Vous êtes sur le quai. Le panneau dit : « Direction Château ». Une dame arrive en courant.", tr: "Peronda bulunuyorsunuz. Tabelada « Château yönü » yazıyor. Bir kadın koşarak geliyor.", en: "You're on the platform. The sign says « Towards Château ». A woman runs up." },
           say: [["N", "Le métro direction Château arrive dans 2 minutes."], ["F2", "Excusez-moi, c'est bien la direction Université, ici ?"]],
           choices: [
             { fr: "Non, ici, c'est la direction Château.", tr: "Hayır, burası Château yönü.", en: "No, this is the direction for Château.", ok: true, go: "h" },
             { fr: "Oui, je suis Université.", tr: "Evet, ben Üniversiteyim.", en: "Yes, I am University.", ok: false,
               fb: { fr: "Vous êtes une personne, pas une station 😄. Et le panneau dit « Château » : répondez « non, ici c'est la direction Château ».", tr: "Siz bir insansınız, istasyon değil 😄. Tabelada da « Château » yazıyor: « non, ici c'est la direction Château » deyin.", en: "You're a person, not a station 😄. And the sign says « Château »: answer « non, ici c'est la direction Château »." } },
             { fr: "Je ne sais pas, je suis touriste.", tr: "Bilmiyorum, turistim.", en: "I don't know, I'm a tourist.", ok: false,
               fb: { fr: "Mais si, vous savez ! Le panneau dit « Château ». Vous pouvez l'aider 💪.", tr: "Ama biliyorsunuz! Tabelada « Château » yazıyor. Ona yardım edebilirsiniz 💪.", en: "But you do know! The sign says « Château ». You can help her 💪." } }
           ] },
      h: { scene: { fr: "Vous êtes dans le métro. Il y a beaucoup de monde. Un homme est derrière vous, près de la porte.", tr: "Metrodasınız. Çok kalabalık. Kapının yanında, arkanızda bir adam var.", en: "You're on the metro. It's very crowded. A man is behind you, near the door." },
           say: [["M2", "Pardon, vous descendez à la prochaine ?"]],
           choices: [
             { fr: "Non, mais je vous laisse passer.", tr: "Hayır, ama size yol vereyim.", en: "No, but I'll let you through.", ok: true, go: "i" },
             { fr: "Non, je descends dans 3 arrêts. Passez, monsieur.", tr: "Hayır, 3 durak sonra iniyorum. Buyurun geçin, beyefendi.", en: "No, I get off in 3 stops. Go ahead, sir.", ok: true, go: "i" },
             { fr: "Non, je monte.", tr: "Hayır, biniyorum.", en: "No, I'm getting on.", ok: false,
               fb: { fr: "Vous êtes déjà dans le métro 😄 ! Il veut sortir : laissez-le passer.", tr: "Zaten metrodasınız 😄! O inmek istiyor: ona yol verin.", en: "You're already on the metro 😄! He wants to get off: let him through." } }
           ] },
      i: { say: [["N", "Prochain arrêt : Bellevue."]],
           scene: { fr: "C'est votre arrêt ! Mais trois personnes sont devant la porte.", tr: "Bu sizin durağınız! Ama kapının önünde üç kişi var.", en: "It's your stop! But three people are standing in front of the door." },
           choices: [
             { fr: "Pardon, je descends !", tr: "Pardon, iniyorum!", en: "Excuse me, I'm getting off!", ok: true, go: "fin" },
             { fr: "Pardon, je monte !", tr: "Pardon, biniyorum!", en: "Excuse me, I'm getting on!", ok: false,
               fb: { fr: "Monter = entrer, descendre = sortir. Pour sortir du métro : « pardon, je descends ! »", tr: "Monter = binmek, descendre = inmek. Metrodan inmek için: « pardon, je descends ! »", en: "Monter = get on, descendre = get off. To get out: « pardon, je descends ! »" } },
             { fr: "Bon appétit !", tr: "Afiyet olsun!", en: "Enjoy your meal!", ok: false,
               fb: { fr: "Personne ne mange ici 😄 ! Pour passer, on dit « pardon » ou « excusez-moi ».", tr: "Burada kimse yemek yemiyor 😄! Geçmek için « pardon » ya da « excusez-moi » denir.", en: "Nobody's eating here 😄! To get through, say « pardon » or « excusez-moi »." } }
           ] },
      fin: { end: "win", say: [["N", "Bellevue."]],
             scene: { fr: "Les portes s'ouvrent, vous êtes à Bellevue. Bravo, le métro n'a plus de secret pour vous ! 🚇🎉", tr: "Kapılar açılıyor, Bellevue'desiniz. Bravo, metronun artık sizin için sırrı kalmadı! 🚇🎉", en: "The doors open, you're at Bellevue. Well done, the metro holds no more secrets for you! 🚇🎉" } }
    } },

  /* ───────────── 3. Chemin ───────────── */
  { id: "av-chemin", level: "A1", emoji: "🗺️",
    t: { fr: "Où est la mairie ?", tr: "Belediye nerede?", en: "Where's the town hall?" },
    goal: { fr: "Demandez votre chemin et arrivez à la mairie pour votre rendez-vous de 10 h.", tr: "Yol sorun ve saat 10'daki randevunuz için belediyeye ulaşın.", en: "Ask for directions and get to the town hall for your 10 a.m. appointment." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous avez rendez-vous à la mairie à 10 h. Oh non : votre téléphone n'a plus de batterie ! 🪫 Une dame passe.", tr: "Saat 10'da belediyede randevunuz var. Eyvah: telefonunuzun şarjı bitti! 🪫 Bir kadın geçiyor.", en: "You have an appointment at the town hall at 10. Oh no: your phone's battery is dead! 🪫 A woman walks by." },
           choices: [
             { fr: "Excusez-moi, madame. Je cherche la mairie, s'il vous plaît.", tr: "Affedersiniz hanımefendi. Belediyeyi arıyorum, lütfen.", en: "Excuse me, madam. I'm looking for the town hall, please.", ok: true, go: "b" },
             { fr: "Excusez-moi, madame. Où est la mer, s'il vous plaît ?", tr: "Affedersiniz hanımefendi. Deniz nerede, lütfen?", en: "Excuse me, madam. Where is the sea, please?", ok: false,
               fb: { fr: "La mer 🌊 ou la mairie 🏛️ ? Les deux sons sont proches ! Aujourd'hui, c'est « la mai-rie », pas la plage 😄.", tr: "La mer 🌊 mi, la mairie 🏛️ mi? İki ses birbirine çok yakın! Bugün « la mai-rie », plaj değil 😄.", en: "La mer 🌊 or la mairie 🏛️? They sound close! Today it's « la mai-rie », not the beach 😄." } },
             { fr: "Hé, toi ! Elle est où, la mairie ?", tr: "Hey, sen! Belediye nerede?", en: "Hey, you! Where's the town hall?", ok: false,
               fb: { fr: "Un peu brusque avec une inconnue 😅. Commencez par « excusez-moi, madame » et dites « vous ».", tr: "Tanımadığınız biri için biraz sert 😅. « Excusez-moi, madame » diye başlayın ve « vous » kullanın.", en: "A bit abrupt with a stranger 😅. Start with « excusez-moi, madame » and use « vous »." } }
           ] },
      b: { say: [["F", "La mairie ? Ce n'est pas loin ! Allez tout droit, puis tournez à gauche à la boulangerie."]],
           choices: [
             { fr: "Tout droit, puis à gauche à la boulangerie. Merci !", tr: "Dümdüz, sonra fırından sola. Teşekkürler!", en: "Straight on, then left at the bakery. Thanks!", ok: true, go: "c" },
             { fr: "Pardon, c'est à droite ou à gauche ?", tr: "Pardon, sağda mı solda mı?", en: "Sorry, is it right or left?", ok: true, go: "b2" },
             { fr: "Tout droit, puis à droite. Merci !", tr: "Dümdüz, sonra sağa. Teşekkürler!", en: "Straight on, then right. Thanks!", ok: false,
               fb: { fr: "Attention : « tout droit » = devant vous, mais « à droite » = ➡️. Elle a dit « à gauche » ⬅️.", tr: "Dikkat: « tout droit » = dümdüz, ama « à droite » = sağa ➡️. Kadın « à gauche » ⬅️ dedi.", en: "Careful: « tout droit » = straight ahead, but « à droite » = right ➡️. She said « à gauche » ⬅️." } }
           ] },
      b2: { say: [["F", "À gauche ! Comme ça. 👈"]],
           choices: [
             { fr: "D'accord, à gauche. Merci beaucoup, madame !", tr: "Tamam, sola. Çok teşekkürler, hanımefendi!", en: "OK, left. Thank you very much, madam!", ok: true, go: "c" },
             { fr: "Ah, tout droit à gauche ?", tr: "Ah, dümdüz sola mı?", en: "Oh, straight left?", ok: false,
               fb: { fr: "« Tout droit » et « à gauche » en même temps, c'est difficile 😄 ! D'abord tout droit, puis à gauche.", tr: "Aynı anda hem « tout droit » hem « à gauche » zor 😄! Önce dümdüz, sonra sola.", en: "« Tout droit » and « à gauche » at the same time is tricky 😄! First straight on, then left." } }
           ] },
      c: { scene: { fr: "Vous arrivez à la boulangerie. Mmm… une odeur de croissants chauds ! 🥐", tr: "Fırına geldiniz. Mmm… sıcak kruvasan kokusu! 🥐", en: "You reach the bakery. Mmm… the smell of warm croissants! 🥐" },
           choices: [
             { fr: "Non, pas maintenant. Je tourne à gauche.", tr: "Hayır, şimdi değil. Sola dönüyorum.", en: "No, not now. I'm turning left.", ok: true, go: "d" },
             { fr: "J'entre dans la boulangerie… juste une minute !", tr: "Fırına giriyorum… sadece bir dakika!", en: "I'm going into the bakery… just one minute!", ok: true, go: "c2" },
             { fr: "Je tourne à droite.", tr: "Sağa dönüyorum.", en: "I'm turning right.", ok: false,
               fb: { fr: "Oups, l'odeur des croissants vous fait tourner la tête 😄 ! La dame a dit « à gauche ».", tr: "Eyvah, kruvasan kokusu başınızı döndürdü 😄! Kadın « à gauche » dedi.", en: "Oops, the croissant smell is making your head spin 😄! The lady said « à gauche »." } }
           ] },
      c2: { say: [["F2", "Bonjour madame ! Qu'est-ce que vous voulez ?"]],
           choices: [
             { fr: "Un croissant, s'il vous plaît. Et la mairie, c'est par où ?", tr: "Bir kruvasan, lütfen. Bir de belediye ne tarafta?", en: "A croissant, please. And which way is the town hall?", ok: true, go: "d" },
             { fr: "Je voudrais la mairie, s'il vous plaît.", tr: "Belediyeyi istiyorum, lütfen.", en: "I'd like the town hall, please.", ok: false,
               fb: { fr: "Elle vend du pain, pas la mairie 😄 ! Commandez d'abord, puis demandez « la mairie, c'est par où ? ».", tr: "Ekmek satıyor, belediye değil 😄! Önce sipariş verin, sonra « la mairie, c'est par où ? » diye sorun.", en: "She sells bread, not the town hall 😄! Order first, then ask « la mairie, c'est par où ? »." } },
             { fr: "Je suis un croissant, s'il vous plaît.", tr: "Ben bir kruvasanım, lütfen.", en: "I am a croissant, please.", ok: false,
               fb: { fr: "Vous êtes très mignonne, mais pas un croissant 🥐😄. On dit « un croissant, s'il vous plaît ».", tr: "Çok tatlısınız ama kruvasan değilsiniz 🥐😄. « Un croissant, s'il vous plaît » denir.", en: "You're very sweet, but not a croissant 🥐😄. Say « un croissant, s'il vous plaît »." } }
           ] },
      d: { scene: { fr: "Vous êtes à un carrefour avec trois rues. Hmm… Un monsieur promène son chien.", tr: "Üç sokaklı bir kavşaktasınız. Hmm… Bir bey köpeğini gezdiriyor.", en: "You're at a crossroads with three streets. Hmm… A man is walking his dog." },
           choices: [
             { fr: "Pardon, monsieur. La mairie, c'est par où, s'il vous plaît ?", tr: "Pardon, beyefendi. Belediye ne tarafta, lütfen?", en: "Excuse me, sir. Which way is the town hall, please?", ok: true, go: "e" },
             { fr: "Pardon, monsieur. Vous êtes la mairie ?", tr: "Pardon, beyefendi. Siz belediye misiniz?", en: "Excuse me, sir. Are you the town hall?", ok: false,
               fb: { fr: "Il est grand, mais ce n'est pas un bâtiment 😄. Demandez « la mairie, c'est par où ? ».", tr: "Uzun boylu ama bir bina değil 😄. « La mairie, c'est par où ? » diye sorun.", en: "He's tall, but he's not a building 😄. Ask « la mairie, c'est par où ? »." } },
             { fr: "Bonjour, le chien ! La mairie, c'est par où ?", tr: "Merhaba köpekçik! Belediye ne tarafta?", en: "Hello, doggy! Which way is the town hall?", ok: false,
               fb: { fr: "Le chien est très mignon, mais il ne parle pas français… pas beaucoup 🐶. Demandez au monsieur !", tr: "Köpek çok tatlı ama Fransızca bilmiyor… pek bilmiyor 🐶. Beye sorun!", en: "The dog is very cute, but it doesn't speak French… not much 🐶. Ask the man!" } }
           ] },
      e: { say: [["M", "C'est à 5 minutes. Prenez la deuxième rue à droite. La mairie est en face du parc."]],
           choices: [
             { fr: "La deuxième rue à droite, en face du parc. C'est ça ?", tr: "İkinci sokaktan sağa, parkın karşısında. Doğru mu?", en: "The second street on the right, opposite the park. Is that right?", ok: true, go: "f" },
             { fr: "La deuxième rue à gauche, à côté du parc. C'est ça ?", tr: "İkinci sokaktan sola, parkın yanında. Doğru mu?", en: "The second street on the left, next to the park. Is that right?", ok: false,
               fb: { fr: "Presque ! Il a dit « à droite » ➡️ et « en face du » parc (de l'autre côté), pas « à côté ».", tr: "Neredeyse! « À droite » ➡️ dedi, ve parkın « en face du » (karşısında), « à côté » (yanında) değil.", en: "Almost! He said « à droite » ➡️ and « en face du » park (opposite), not « à côté » (next to)." } },
             { fr: "C'est à 5 heures ?", tr: "5 saat mi?", en: "It's 5 hours away?", ok: false,
               fb: { fr: "Pas de panique, 5 minutes seulement 😅 ! Vous allez être à l'heure.", tr: "Panik yok, sadece 5 dakika 😅! Zamanında varacaksınız.", en: "Don't panic, just 5 minutes 😅! You're going to be on time." } }
           ] },
      f: { say: [["M", "Oui, c'est ça ! Vous n'êtes pas d'ici ?"]],
           choices: [
             { fr: "Non, je suis turque. J'habite ici depuis 2 semaines.", tr: "Hayır, Türk'üm. 2 haftadır burada yaşıyorum.", en: "No, I'm Turkish. I've been living here for 2 weeks.", ok: true, go: "g" },
             { fr: "Non, je viens de Turquie.", tr: "Hayır, Türkiye'den geliyorum.", en: "No, I come from Turkey.", ok: true, go: "g" },
             { fr: "Non, je suis Turquie.", tr: "Hayır, ben Türkiye'yim.", en: "No, I am Turkey.", ok: false,
               fb: { fr: "Vous êtes un pays entier 🇹🇷😄 ? On dit « je suis turque » ou « je viens de Turquie ».", tr: "Koca bir ülke misiniz 🇹🇷😄? « Je suis turque » ya da « je viens de Turquie » denir.", en: "You're a whole country 🇹🇷😄? Say « je suis turque » or « je viens de Turquie »." } }
           ] },
      g: { say: [["M", "Bienvenue ! Bon courage avec le français. Vous parlez déjà bien !"]],
           choices: [
             { fr: "Merci, vous êtes très gentil !", tr: "Teşekkürler, çok naziksiniz!", en: "Thank you, you're very kind!", ok: true, go: "h" },
             { fr: "Merci, tu es très gentil !", tr: "Teşekkürler, çok naziksin!", en: "Thanks, you're very kind! (informal)", ok: false,
               fb: { fr: "Il est gentil, mais vous ne le connaissez pas encore : on dit « vous êtes très gentil ».", tr: "Nazik biri ama onu henüz tanımıyorsunuz: « vous êtes très gentil » denir.", en: "He's kind, but you don't know him yet: say « vous êtes très gentil »." } },
             { fr: "De rien, monsieur !", tr: "Rica ederim, beyefendi!", en: "You're welcome, sir!", ok: false,
               fb: { fr: "C'est lui qui vous fait un compliment : répondez « merci » 😊.", tr: "Size iltifat eden o: « merci » diye cevap verin 😊.", en: "He's the one paying you a compliment: answer « merci » 😊." } }
           ] },
      h: { scene: { fr: "Vous voyez le parc. En face, il y a un grand bâtiment avec un drapeau bleu, blanc, rouge. Un petit garçon joue au ballon.", tr: "Parkı görüyorsunuz. Karşısında mavi-beyaz-kırmızı bayraklı büyük bir bina var. Küçük bir çocuk top oynuyor.", en: "You see the park. Opposite, there's a big building with a blue, white and red flag. A little boy is playing with a ball." },
           say: [["K", "Madame, tu cherches quoi ?"]],
           choices: [
             { fr: "Je cherche la mairie. C'est le bâtiment avec le drapeau ?", tr: "Belediyeyi arıyorum. Bayraklı bina mı?", en: "I'm looking for the town hall. Is it the building with the flag?", ok: true, go: "i" },
             { fr: "Je cherche ton ballon.", tr: "Senin topunu arıyorum.", en: "I'm looking for your ball.", ok: false,
               fb: { fr: "Le ballon est dans ses mains 😄 ! Vous cherchez « la mairie ».", tr: "Top onun elinde 😄! Siz « la mairie »yi arıyorsunuz.", en: "The ball is in his hands 😄! You're looking for « la mairie »." } },
             { fr: "Je cherche la mer.", tr: "Denizi arıyorum.", en: "I'm looking for the sea.", ok: false,
               fb: { fr: "Encore la mer 🌊😄 ! Dites bien « la mai-rie ».", tr: "Yine deniz 🌊😄! « La mai-rie » diye net söyleyin.", en: "The sea again 🌊😄! Say it clearly: « la mai-rie »." } }
           ] },
      i: { say: [["K", "Oui ! C'est là, en face ! Au revoir, madame !"], ["F", "Bonjour madame, bienvenue à la mairie. Vous avez rendez-vous ?"]],
           scene: { fr: "Vous entrez dans la mairie. Une dame vous accueille. Il est 9 h 58.", tr: "Belediyeye giriyorsunuz. Bir kadın sizi karşılıyor. Saat 9.58.", en: "You walk into the town hall. A woman greets you. It's 9:58." },
           choices: [
             { fr: "Oui, j'ai rendez-vous à 10 h.", tr: "Evet, saat 10'da randevum var.", en: "Yes, I have an appointment at 10.", ok: true, go: "fin" },
             { fr: "Oui, je suis rendez-vous à 10 h.", tr: "Evet, ben saat 10'da randevuyum.", en: "Yes, I am appointment at 10.", ok: false,
               fb: { fr: "Vous n'êtes pas un rendez-vous, vous « avez » un rendez-vous 😉 : « j'ai rendez-vous à 10 h ».", tr: "Siz randevu değilsiniz, bir randevunuz « var » 😉: « j'ai rendez-vous à 10 h ».", en: "You aren't an appointment, you « have » one 😉: « j'ai rendez-vous à 10 h »." } },
             { fr: "Oui, j'ai rendez-vous à 10 ans.", tr: "Evet, 10 yaşında randevum var.", en: "Yes, I have an appointment at 10 years old.", ok: false,
               fb: { fr: "À 10 ans, c'est un peu tard 😄 ! Pour l'heure : « à 10 heures ».", tr: "10 yaşında biraz geç olur 😄! Saat için: « à 10 heures ».", en: "At 10 years old is a bit late 😄! For the time: « à 10 heures »." } }
           ] },
      fin: { end: "win", say: [["F", "Parfait, vous êtes à l'heure ! Asseyez-vous, s'il vous plaît."]],
             scene: { fr: "Bravo ! Sans téléphone, avec seulement votre français, vous avez trouvé la mairie à l'heure ! 🗺️🎉", tr: "Bravo! Telefonsuz, sadece Fransızcanızla belediyeyi zamanında buldunuz! 🗺️🎉", en: "Well done! No phone, just your French, and you found the town hall on time! 🗺️🎉" } }
    } },

  /* ───────────── 4. Marché ───────────── */
  { id: "av-marche", level: "A1", emoji: "🍅",
    t: { fr: "Au marché", tr: "Pazarda", en: "At the market" },
    goal: { fr: "Achetez des fruits et des légumes au marché, et payez.", tr: "Pazardan meyve ve sebze alın ve ödeyin.", en: "Buy fruit and vegetables at the market, and pay." },
    start: "a",
    nodes: {
      a: { scene: { fr: "C'est samedi matin, jour de marché. Un marchand crie très fort.", tr: "Cumartesi sabahı, pazar günü. Bir satıcı çok yüksek sesle bağırıyor.", en: "It's Saturday morning, market day. A stallholder is shouting very loudly." },
           say: [["M", "Bonjour, bonjour ! Elles sont belles, mes tomates ! Qu'est-ce qu'il vous faut, madame ?"]],
           choices: [
             { fr: "Bonjour ! Je voudrais des tomates, s'il vous plaît.", tr: "Merhaba! Domates istiyorum, lütfen.", en: "Hello! I'd like some tomatoes, please.", ok: true, go: "b" },
             { fr: "Bonjour ! Elles sont à combien, les tomates ?", tr: "Merhaba! Domatesler kaç para?", en: "Hello! How much are the tomatoes?", ok: true, go: "b" },
             { fr: "Bonjour ! Comment sont les tomates ?", tr: "Merhaba! Domatesler nasıl?", en: "Hello! How are the tomatoes?", ok: false,
               fb: { fr: "Il va dire « magnifiques ! » 😄. Mais pour le prix, c'est « combien », pas « comment » (= nasıl).", tr: "« Harika! » diyecektir 😄. Ama fiyat için « combien » denir, « comment » (= nasıl) değil.", en: "He'll say « magnificent! » 😄. But for the price it's « combien », not « comment » (= how)." } }
           ] },
      b: { say: [["M", "Elles sont à 3 € le kilo. Je vous mets combien ?"]],
           choices: [
             { fr: "Un kilo, s'il vous plaît.", tr: "Bir kilo, lütfen.", en: "A kilo, please.", ok: true, go: "c" },
             { fr: "Un demi-kilo, s'il vous plaît.", tr: "Yarım kilo, lütfen.", en: "Half a kilo, please.", ok: true, go: "c" },
             { fr: "Un kilomètre, s'il vous plaît.", tr: "Bir kilometre, lütfen.", en: "A kilometre, please.", ok: false,
               fb: { fr: "Un kilomètre de tomates 🍅🍅🍅… c'est beaucoup 😄 ! Pour le poids : « un kilo ».", tr: "Bir kilometre domates 🍅🍅🍅… bu çok fazla 😄! Ağırlık için: « un kilo ».", en: "A kilometre of tomatoes 🍅🍅🍅… that's a lot 😄! For weight: « un kilo »." } }
           ] },
      c: { scene: { fr: "Il met les tomates dans un sac en papier.", tr: "Domatesleri kâğıt bir poşete koyuyor.", en: "He puts the tomatoes in a paper bag." },
           say: [["M", "Voilà ! Et avec ceci ?"]],
           choices: [
             { fr: "Je voudrais aussi des fraises. Elles sont à combien ?", tr: "Biraz da çilek istiyorum. Kaç para?", en: "I'd also like some strawberries. How much are they?", ok: true, go: "d" },
             { fr: "Je voudrais aussi des pommes de terre, s'il vous plaît.", tr: "Biraz da patates istiyorum, lütfen.", en: "I'd also like some potatoes, please.", ok: true, go: "d2" },
             { fr: "Je voudrais aussi des pommes de la terre.", tr: "Biraz da topraktan elma istiyorum.", en: "I'd also like some apples of the earth.", ok: false,
               fb: { fr: "Presque ! Le mot est « pommes de terre », sans « la » 🥔. (Littéralement : les pommes de la terre 😉)", tr: "Neredeyse! Kelime « pommes de terre », « la » olmadan 🥔. (Kelimesi kelimesine: toprağın elmaları 😉)", en: "Almost! The word is « pommes de terre », without « la » 🥔. (Literally: earth apples 😉)" } }
           ] },
      d: { say: [["M", "Les fraises, 4 € la barquette. Goûtez, madame, goûtez !"]],
           scene: { fr: "Il vous donne une fraise. Elle est très sucrée !", tr: "Size bir çilek veriyor. Çok tatlı!", en: "He gives you a strawberry. It's very sweet!" },
           choices: [
             { fr: "Mmm, elles sont délicieuses ! Une barquette, s'il vous plaît.", tr: "Mmm, çok lezzetliler! Bir kutu, lütfen.", en: "Mmm, they're delicious! One punnet, please.", ok: true, go: "e" },
             { fr: "C'est très bon ! Deux barquettes, s'il vous plaît.", tr: "Çok güzel! İki kutu, lütfen.", en: "It's very good! Two punnets, please.", ok: true, go: "e" },
             { fr: "Non merci, je suis pleine.", tr: "Hayır teşekkürler, doydum.", en: "No thanks, I'm full.", ok: false,
               fb: { fr: "Oups ! « Je suis pleine » se dit… pour une vache qui attend un bébé 🐄😄. Dites « non merci, ça va » ou « je n'ai plus faim ».", tr: "Eyvah! « Je suis pleine »… yavru bekleyen bir inek için söylenir 🐄😄. « Non merci, ça va » ya da « je n'ai plus faim » deyin.", en: "Oops! « Je suis pleine » is said… about a cow expecting a calf 🐄😄. Say « non merci, ça va » or « je n'ai plus faim »." } }
           ] },
      d2: { say: [["M", "Les pommes de terre, c'est 2 € le kilo. C'est pour faire des frites ?"]],
           choices: [
             { fr: "Oui, pour des frites ! Deux kilos, s'il vous plaît.", tr: "Evet, kızartma için! İki kilo, lütfen.", en: "Yes, for chips! Two kilos, please.", ok: true, go: "e" },
             { fr: "Non, pour une soupe. Un kilo, s'il vous plaît.", tr: "Hayır, çorba için. Bir kilo, lütfen.", en: "No, for a soup. One kilo, please.", ok: true, go: "e" },
             { fr: "Oui, je suis frite !", tr: "Evet, ben kızartmayım!", en: "Yes, I am fried!", ok: false,
               fb: { fr: "« Je suis frite » = vous êtes une frite 🍟😄. Dites « oui, pour des frites ! »", tr: "« Je suis frite » = ben bir patates kızartmasıyım 🍟😄. « Oui, pour des frites ! » deyin.", en: "« Je suis frite » = you're a chip 🍟😄. Say « oui, pour des frites ! »" } }
           ] },
      e: { say: [["M", "Et avec ça, madame ? Des oignons ? Des poivrons ?"]],
           choices: [
             { fr: "Non merci, c'est tout.", tr: "Hayır teşekkürler, bu kadar.", en: "No thanks, that's all.", ok: true, go: "f" },
             { fr: "Oui, trois oignons, s'il vous plaît. Et c'est tout.", tr: "Evet, üç soğan, lütfen. Bu kadar.", en: "Yes, three onions, please. And that's all.", ok: true, go: "f" },
             { fr: "Non merci, je suis finie.", tr: "Hayır teşekkürler, ben bittim.", en: "No thanks, I'm finished.", ok: false,
               fb: { fr: "« Je suis finie » = c'est la fin de votre vie 😱😄 ! On dit « c'est tout » ou « j'ai fini ».", tr: "« Je suis finie » = hayatım bitti demek 😱😄! « C'est tout » ya da « j'ai fini » denir.", en: "« Je suis finie » = your life is over 😱😄! Say « c'est tout » or « j'ai fini »." } }
           ] },
      f: { say: [["M", "Alors… ça fait 9,50 €, s'il vous plaît."]],
           choices: [
             { fr: "Voilà 10 €.", tr: "Buyurun, 10 euro.", en: "Here's 10 euros.", ok: true, go: "g" },
             { fr: "Pardon, c'est combien ? Vous pouvez répéter ?", tr: "Pardon, ne kadar? Tekrar edebilir misiniz?", en: "Sorry, how much? Can you repeat?", ok: true, go: "f2" },
             { fr: "Neuf cents euros ?!", tr: "Dokuz yüz euro mu?!", en: "Nine hundred euros?!", ok: false,
               fb: { fr: "Respirez 😅 ! 9,50 € = « neuf euros cinquante », pas « neuf cents ». Les tomates ne sont pas en or !", tr: "Derin bir nefes 😅! 9,50 € = « neuf euros cinquante », « neuf cents » değil. Domatesler altından değil!", en: "Breathe 😅! €9.50 = « neuf euros cinquante », not « neuf cents ». The tomatoes aren't made of gold!" } }
           ] },
      f2: { say: [["M", "Neuf euros… cinquante. 9,50 €."]],
           choices: [
             { fr: "Ah, 9,50 €. Voilà 10 €.", tr: "Ah, 9,50 €. Buyurun, 10 euro.", en: "Ah, €9.50. Here's 10 euros.", ok: true, go: "g" },
             { fr: "Ah, 19,50 €. Voilà 20 €.", tr: "Ah, 19,50 €. Buyurun, 20 euro.", en: "Ah, €19.50. Here's 20 euros.", ok: false,
               fb: { fr: "Généreuse ! Mais c'est « neuf » (9), pas « dix-neuf » (19) 😉.", tr: "Ne cömertsiniz! Ama « neuf » (9), « dix-neuf » (19) değil 😉.", en: "How generous! But it's « neuf » (9), not « dix-neuf » (19) 😉." } }
           ] },
      g: { say: [["M", "Merci ! Je vous rends 50 centimes. Vous voulez un sac ?"]],
           choices: [
             { fr: "Non merci, j'ai un sac.", tr: "Hayır teşekkürler, çantam var.", en: "No thanks, I have a bag.", ok: true, go: "h" },
             { fr: "Oui, s'il vous plaît.", tr: "Evet, lütfen.", en: "Yes, please.", ok: true, go: "h" },
             { fr: "Oui, je voudrais un sac à main.", tr: "Evet, bir el çantası istiyorum.", en: "Yes, I'd like a handbag.", ok: false,
               fb: { fr: "Un sac à main 👜 au marché de légumes ? 😄 Il propose un simple « sac ». Dites « oui, s'il vous plaît ».", tr: "Sebze pazarında el çantası 👜 mı? 😄 Basit bir « sac » (poşet) öneriyor. « Oui, s'il vous plaît » deyin.", en: "A handbag 👜 at the veg market? 😄 He's offering a plain « sac ». Say « oui, s'il vous plaît »." } }
           ] },
      h: { say: [["M", "Tenez, et un petit bouquet de persil. C'est cadeau !"]],
           choices: [
             { fr: "Oh, merci, c'est très gentil !", tr: "Aa, teşekkürler, çok naziksiniz!", en: "Oh, thank you, that's very kind!", ok: true, go: "i" },
             { fr: "C'est combien, le cadeau ?", tr: "Hediye ne kadar?", en: "How much is the gift?", ok: false,
               fb: { fr: "« C'est cadeau » = c'est gratuit, 0 € 🎁. Dites simplement « merci, c'est très gentil ! »", tr: "« C'est cadeau » = bedava, 0 € 🎁. Sadece « merci, c'est très gentil ! » deyin.", en: "« C'est cadeau » = it's free, €0 🎁. Just say « merci, c'est très gentil ! »" } },
             { fr: "De rien, monsieur !", tr: "Rica ederim, beyefendi!", en: "You're welcome, sir!", ok: false,
               fb: { fr: "C'est lui qui vous donne un cadeau : c'est vous qui dites « merci » 😊.", tr: "Size hediye veren o: « merci » diyen siz olmalısınız 😊.", en: "He's giving you a gift, so you're the one who says « merci » 😊." } }
           ] },
      i: { say: [["M", "Avec plaisir ! À samedi prochain, madame !"]],
           choices: [
             { fr: "À samedi ! Bonne journée !", tr: "Cumartesi görüşürüz! İyi günler!", en: "See you Saturday! Have a nice day!", ok: true, go: "fin" },
             { fr: "Bonne année !", tr: "Mutlu yıllar!", en: "Happy New Year!", ok: false,
               fb: { fr: "Gentil, mais on dit « bonne année » seulement en janvier 🎆😄. Ici : « à samedi, bonne journée ! »", tr: "Nazik ama « bonne année » sadece ocak ayında söylenir 🎆😄. Burada: « à samedi, bonne journée ! »", en: "Sweet, but « bonne année » is only for January 🎆😄. Here: « à samedi, bonne journée ! »" } },
             { fr: "À hier !", tr: "Dün görüşürüz!", en: "See you yesterday!", ok: false,
               fb: { fr: "Vous voyagez dans le temps ? ⏳😄 Il a dit « à samedi prochain » : répondez « à samedi ! »", tr: "Zamanda mı yolculuk ediyorsunuz? ⏳😄 « À samedi prochain » dedi: « à samedi ! » diye cevap verin.", en: "Are you time-travelling? ⏳😄 He said « à samedi prochain »: answer « à samedi ! »" } }
           ] },
      fin: { end: "win", say: [["M", "Au revoir, madame !"]],
             scene: { fr: "Bravo ! Votre sac est plein de bonnes choses… et vous avez un ami au marché 🍅🎉", tr: "Bravo! Çantanız güzel şeylerle dolu… ve pazarda bir arkadaşınız var 🍅🎉", en: "Well done! Your bag is full of good things… and you have a friend at the market 🍅🎉" } }
    } },

  /* ───────────── 5. Handball ───────────── */
  { id: "av-handball", level: "A1", emoji: "🤾",
    t: { fr: "Au club de handball", tr: "Hentbol kulübünde", en: "At the handball club" },
    goal: { fr: "Présentez-vous au club et demandez les horaires des entraînements et le prix.", tr: "Kulüpte kendinizi tanıtın, antrenman saatlerini ve fiyatı sorun.", en: "Introduce yourself at the club and ask about training times and the price." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous entrez dans un gymnase. Boum, boum : les ballons ! Une femme avec un sifflet arrive.", tr: "Bir spor salonuna giriyorsunuz. Güm, güm: toplar! Düdüklü bir kadın geliyor.", en: "You walk into a gym. Boom, boom: the balls! A woman with a whistle comes over." },
           say: [["F", "Bonjour ! Je peux vous aider ?"]],
           choices: [
             { fr: "Bonjour ! Je voudrais jouer au handball dans votre club.", tr: "Merhaba! Kulübünüzde hentbol oynamak istiyorum.", en: "Hello! I'd like to play handball at your club.", ok: true, go: "b" },
             { fr: "Bonjour ! Je voudrais jouer du handball.", tr: "Merhaba! Hentbol çalmak istiyorum.", en: "Hello! I'd like to play the handball (like an instrument).", ok: false,
               fb: { fr: "Le handball n'est pas une guitare 🎸😄 ! Sport = « jouer au », instrument = « jouer du ».", tr: "Hentbol gitar değil 🎸😄! Spor için « jouer au », enstrüman için « jouer du ».", en: "Handball isn't a guitar 🎸😄! Sport = « jouer au », instrument = « jouer du »." } },
             { fr: "Bonjour ! Je suis handball.", tr: "Merhaba! Ben hentbolum.", en: "Hello! I am handball.", ok: false,
               fb: { fr: "Vous aimez beaucoup le handball, mais vous n'êtes pas un ballon 😄. Dites « je voudrais jouer au handball ».", tr: "Hentbolu çok seviyorsunuz ama top değilsiniz 😄. « Je voudrais jouer au handball » deyin.", en: "You love handball, but you're not a ball 😄. Say « je voudrais jouer au handball »." } }
           ] },
      b: { say: [["F", "Super ! Vous jouez depuis longtemps ?"]],
           choices: [
             { fr: "Oui, je joue depuis 10 ans, en Turquie.", tr: "Evet, 10 yıldır oynuyorum, Türkiye'de.", en: "Yes, I've been playing for 10 years, in Turkey.", ok: true, go: "c" },
             { fr: "Oui, je joue pendant 10 ans.", tr: "Evet, 10 yıl boyunca oynuyorum.", en: "Yes, I play during 10 years.", ok: false,
               fb: { fr: "Piège anglais (« for 10 years ») ! Pour une action qui continue : « je joue depuis 10 ans ».", tr: "İngilizce tuzağı (« for 10 years »)! Devam eden bir şey için: « je joue depuis 10 ans ».", en: "English trap (« for 10 years »)! For something still going on: « je joue depuis 10 ans »." } },
             { fr: "Oui, j'ai 10 ans.", tr: "Evet, 10 yaşındayım.", en: "Yes, I'm 10 years old.", ok: false,
               fb: { fr: "Ça, c'est votre âge… Vous êtes un peu grande pour l'équipe des enfants 😄 ! Dites « je joue depuis 10 ans ».", tr: "Bu yaşınız olur… Çocuk takımı için biraz büyüksünüz 😄! « Je joue depuis 10 ans » deyin.", en: "That's your age… You're a bit big for the kids' team 😄! Say « je joue depuis 10 ans »." } }
           ] },
      c: { say: [["F", "Génial ! Et vous jouez à quel poste ?"]],
           choices: [
             { fr: "Je suis ailière gauche.", tr: "Sol kanadım.", en: "I'm a left winger.", ok: true, go: "d" },
             { fr: "Je suis gardienne de but.", tr: "Kaleciyim.", en: "I'm a goalkeeper.", ok: true, go: "d2" },
             { fr: "Je travaille à la poste.", tr: "Postanede çalışıyorum.", en: "I work at the post office.", ok: false,
               fb: { fr: "« La poste » = PTT 📮😄 ! Ici, « poste » = votre place dans l'équipe : ailière, gardienne…", tr: "« La poste » = PTT 📮😄! Burada « poste » = takımdaki yeriniz: kanat, kaleci…", en: "« La poste » = the post office 📮😄! Here « poste » = your position on the team: winger, goalkeeper…" } }
           ] },
      d: { say: [["F", "Parfait, on cherche une ailière ! Vous êtes rapide ?"]],
           choices: [
             { fr: "Oui, je cours très vite !", tr: "Evet, çok hızlı koşarım!", en: "Yes, I run very fast!", ok: true, go: "e" },
             { fr: "Oui, je suis vite.", tr: "Evet, ben hızlıca.", en: "Yes, I am quickly.", ok: false,
               fb: { fr: "Petit piège : « vite » va avec un verbe (« je cours vite »), « rapide » avec « être » (« je suis rapide »).", tr: "Küçük bir tuzak: « vite » fiille kullanılır (« je cours vite »), « rapide » ise « être » ile (« je suis rapide »).", en: "Little trap: « vite » goes with a verb (« je cours vite »), « rapide » with « être » (« je suis rapide »)." } },
             { fr: "Oui, je suis rapide comme une tortue.", tr: "Evet, kaplumbağa kadar hızlıyım.", en: "Yes, I'm as fast as a tortoise.", ok: false,
               fb: { fr: "Haha, la tortue 🐢 n'est pas très rapide ! Soyez fière : « je cours très vite ! »", tr: "Haha, kaplumbağa 🐢 pek hızlı değildir! Kendinizle gurur duyun: « je cours très vite ! »", en: "Haha, a tortoise 🐢 isn't very fast! Be proud: « je cours très vite ! »" } }
           ] },
      d2: { say: [["F", "Une gardienne ! Super ! Notre gardienne a mal au genou en ce moment."]],
           choices: [
             { fr: "Oh ! Je suis kinésithérapeute. Je peux regarder son genou.", tr: "Aa! Fizyoterapistim. Dizine bakabilirim.", en: "Oh! I'm a physiotherapist. I can look at her knee.", ok: true, go: "e" },
             { fr: "Oh ! Je suis kinésithérapie.", tr: "Aa! Ben fizyoterapiyim.", en: "Oh! I am physiotherapy.", ok: false,
               fb: { fr: "Presque ! La « kinésithérapie », c'est le métier ; la personne, c'est « kinésithérapeute » (ou « kiné »).", tr: "Neredeyse! « Kinésithérapie » meslek/alan; kişi ise « kinésithérapeute » (ya da kısaca « kiné »).", en: "Almost! « Kinésithérapie » is the field; the person is a « kinésithérapeute » (or « kiné »)." } },
             { fr: "Oh ! Elle a mal à la genou ?", tr: "Aa! Dizi mi ağrıyor?", en: "Oh! Her knee hurts?", ok: false,
               fb: { fr: "« Genou » est masculin : le genou → « au genou ». Et dites-lui que vous êtes kiné, c'est utile ici 😉 !", tr: "« Genou » eril: le genou → « au genou ». Bir de kiné olduğunuzu söyleyin, burada çok işe yarar 😉!", en: "« Genou » is masculine: le genou → « au genou ». And tell her you're a physio, it's useful here 😉!" } }
           ] },
      e: { say: [["F", "Génial ! Moi, c'est Sophie, l'entraîneuse. Vous habitez ici depuis quand ?"]],
           choices: [
             { fr: "Enchantée, Sophie ! J'habite ici depuis 2 semaines.", tr: "Memnun oldum Sophie! 2 haftadır burada yaşıyorum.", en: "Nice to meet you, Sophie! I've been living here for 2 weeks.", ok: true, go: "f" },
             { fr: "Enchantée ! J'habite ici pour 2 semaines.", tr: "Memnun oldum! 2 haftalığına burada yaşıyorum.", en: "Nice to meet you! I'm living here for 2 weeks (then leaving).", ok: false,
               fb: { fr: "« Pour 2 semaines » = vous partez dans 2 semaines 😮 ! Sophie va être triste. Dites « depuis 2 semaines ».", tr: "« Pour 2 semaines » = 2 hafta sonra gidiyorum demek 😮! Sophie üzülecek. « Depuis 2 semaines » deyin.", en: "« Pour 2 semaines » = you're leaving in 2 weeks 😮! Sophie will be sad. Say « depuis 2 semaines »." } },
             { fr: "Enchantée ! Je suis habite ici depuis 2 semaines.", tr: "Memnun oldum! Ben yaşıyorum burada 2 haftadır.", en: "Nice to meet you! I am live here for 2 weeks.", ok: false,
               fb: { fr: "Un verbe suffit ! Pas « je suis habite », mais « j'habite ».", tr: "Tek fiil yeterli! « Je suis habite » değil, « j'habite ».", en: "One verb is enough! Not « je suis habite », just « j'habite »." } }
           ] },
      f: { say: [["F", "Bienvenue en France, alors ! Vous avez des questions ?"]],
           choices: [
             { fr: "Oui ! Les entraînements, c'est quand ?", tr: "Evet! Antrenmanlar ne zaman?", en: "Yes! When is training?", ok: true, go: "g" },
             { fr: "Oui ! Le train, c'est quand ?", tr: "Evet! Tren ne zaman?", en: "Yes! When is the train?", ok: false,
               fb: { fr: "Ici, pas de train 🚆😄 ! Le mot est « entraînement » (= antrenman).", tr: "Burada tren yok 🚆😄! Kelime « entraînement » (= antrenman).", en: "No trains here 🚆😄! The word is « entraînement » (= training)." } },
             { fr: "Non, merci !", tr: "Hayır, teşekkürler!", en: "No, thanks!", ok: false,
               fb: { fr: "Attendez, votre mission ! Demandez les horaires : « les entraînements, c'est quand ? »", tr: "Durun, göreviniz! Saatleri sorun: « les entraînements, c'est quand ? »", en: "Wait, your mission! Ask about the times: « les entraînements, c'est quand ? »" } }
           ] },
      g: { say: [["F", "Le mardi et le jeudi, de 19 h à 21 h. Et le match, c'est le samedi."]],
           choices: [
             { fr: "Le mardi et le jeudi à 19 h. Parfait !", tr: "Salı ve perşembe saat 19'da. Harika!", en: "Tuesday and Thursday at 7 p.m. Perfect!", ok: true, go: "h" },
             { fr: "Et le samedi, c'est le match ? Super !", tr: "Cumartesi de maç mı var? Süper!", en: "And Saturday is the match? Great!", ok: true, go: "h" },
             { fr: "Le lundi et le jeudi à 9 h ?", tr: "Pazartesi ve perşembe saat 9'da mı?", en: "Monday and Thursday at 9 a.m.?", ok: false,
               fb: { fr: "Presque ! C'est mardi (pas lundi), à 19 h (7 h du soir). À 9 h du matin, le gymnase dort 😴.", tr: "Neredeyse! Salı (pazartesi değil), saat 19'da (akşam 7). Sabah 9'da spor salonu uyuyor 😴.", en: "Almost! It's Tuesday (not Monday), at 19:00 (7 p.m.). At 9 a.m. the gym is asleep 😴." } }
           ] },
      h: { say: [["F", "Autre chose ?"]],
           choices: [
             { fr: "Oui. L'inscription, c'est combien ?", tr: "Evet. Kayıt ne kadar?", en: "Yes. How much is the membership?", ok: true, go: "i" },
             { fr: "Oui. Comment coûte l'inscription ?", tr: "Evet. Kayıt nasıl tutuyor?", en: "Yes. How does the membership cost?", ok: false,
               fb: { fr: "Le grand classique ! Pour le prix : « combien », pas « comment ». « L'inscription, c'est combien ? »", tr: "Büyük klasik! Fiyat için « combien », « comment » değil. « L'inscription, c'est combien ? »", en: "The great classic! For the price it's « combien », not « comment ». « L'inscription, c'est combien ? »" } },
             { fr: "Oui. Vous avez quel âge ?", tr: "Evet. Kaç yaşındasınız?", en: "Yes. How old are you?", ok: false,
               fb: { fr: "Question un peu trop personnelle pour un premier jour 😄 ! Demandez le prix : « c'est combien ? »", tr: "İlk gün için biraz fazla kişisel bir soru 😄! Fiyatı sorun: « c'est combien ? »", en: "A bit too personal for a first day 😄! Ask the price: « c'est combien ? »" } }
           ] },
      i: { say: [["F", "C'est 180 € pour l'année. Le maillot est compris !"]],
           choices: [
             { fr: "180 € pour l'année, avec le maillot. D'accord !", tr: "Yıllığı 180 €, forma dahil. Tamam!", en: "180 euros for the year, with the jersey. OK!", ok: true, go: "j" },
             { fr: "Je peux payer en trois fois ?", tr: "Üç taksitte ödeyebilir miyim?", en: "Can I pay in three instalments?", ok: true, go: "j" },
             { fr: "180 € par jour ?!", tr: "Günlüğü 180 € mu?!", en: "180 euros a day?!", ok: false,
               fb: { fr: "Heureusement, non 😅 ! « Pour l'année » = pour 12 mois.", tr: "Neyse ki hayır 😅! « Pour l'année » = 12 ay için.", en: "Luckily, no 😅! « Pour l'année » = for 12 months." } }
           ] },
      j: { say: [["F", "Pas de problème ! Alors, vous venez mardi ?"]],
           choices: [
             { fr: "Oui, je vais venir mardi ! À mardi !", tr: "Evet, salı geleceğim! Salı görüşürüz!", en: "Yes, I'm going to come on Tuesday! See you Tuesday!", ok: true, go: "fin" },
             { fr: "Oui, je viens mardi. À mardi, Sophie !", tr: "Evet, salı geliyorum. Salı görüşürüz Sophie!", en: "Yes, I'm coming on Tuesday. See you Tuesday, Sophie!", ok: true, go: "fin" },
             { fr: "Oui, je suis venue mardi.", tr: "Evet, salı geldim.", en: "Yes, I came on Tuesday.", ok: false,
               fb: { fr: "Ça, c'est le passé ! Pour mardi prochain : « je vais venir mardi » ou « je viens mardi ».", tr: "Bu geçmiş zaman! Önümüzdeki salı için: « je vais venir mardi » ya da « je viens mardi ».", en: "That's the past! For next Tuesday: « je vais venir mardi » or « je viens mardi »." } }
           ] },
      fin: { end: "win", say: [["F", "Super ! À mardi, et n'oubliez pas vos baskets !"]],
             scene: { fr: "Bravo ! Vous avez un nouveau club… et peut-être de nouvelles amies 🤾‍♀️🎉", tr: "Bravo! Yeni bir kulübünüz var… ve belki de yeni arkadaşlarınız 🤾‍♀️🎉", en: "Well done! You have a new club… and maybe some new friends 🤾‍♀️🎉" } }
    } }
);
