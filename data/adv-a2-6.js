/* Aventures A2 — 26 to 30: coureur blessé au parc, contrôle dans le tram, problème avec la CAF, bénévole au triathlon, dîner chez les beaux-parents d'une amie */
(window.ADVENTURES = window.ADVENTURES || []).push(

  /* ───────────── 26. Un coureur blessé au parc ───────────── */
  { id: "av-coureur-blesse", level: "A2", emoji: "🩹",
    t: { fr: "Un coureur blessé au parc", tr: "Parkta yaralanan bir koşucu", en: "An injured runner in the park" },
    goal: { fr: "Aidez un coureur qui s'est fait mal, appelez le 15 et restez avec lui jusqu'à l'arrivée des secours.", tr: "Canı yanan bir koşucuya yardım edin, 15'i arayın ve yardım gelene kadar yanında kalın.", en: "Help a runner who has hurt himself, call 15 and stay with him until help arrives." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Samedi matin, vous courez au parc. Devant vous, un homme tombe et se tient la cheville.", tr: "Cumartesi sabahı parkta koşuyorsunuz. Önünüzde bir adam düşüyor ve ayak bileğini tutuyor.", en: "Saturday morning, you're running in the park. In front of you, a man falls and grabs his ankle." },
           say: [["M", "Aïe, aïe, aïe… ma cheville !"]],
           choices: [
             { fr: "Bon courage, monsieur !", tr: "Kolay gelsin, beyefendi!", en: "Good luck, sir!", ok: false,
               fb: { fr: "Il ne fait pas un marathon, il est par terre 😅 ! Arrêtez-vous et proposez votre aide : « ça va, monsieur ? ».", tr: "Maraton koşmuyor, yerde yatıyor 😅! Durun ve yardım teklif edin: « ça va, monsieur ? ».", en: "He's not running a marathon, he's on the ground 😅! Stop and offer help: « ça va, monsieur ? »." } },
             { fr: "Oh là là, monsieur, vous êtes tombé amoureux ?", tr: "Aman beyefendi, âşık mı oldunuz?", en: "Oh my, sir, did you fall in love?", ok: false,
               fb: { fr: "« Tomber amoureux », c'est plus romantique 💘😄 ! Ici, il est juste tombé. Demandez : « ça va ? je peux vous aider ? ».", tr: "« Tomber amoureux » çok daha romantik 💘😄! Burada adam sadece düştü. Sorun: « ça va ? je peux vous aider ? ».", en: "« Tomber amoureux » is much more romantic 💘😄! Here he just fell. Ask: « ça va ? je peux vous aider ? »." } },
             { fr: "Ça va, monsieur ? Je peux vous aider ?", tr: "İyi misiniz beyefendi? Yardım edebilir miyim?", en: "Are you OK, sir? Can I help you?", ok: true, go: "b" }
           ] },
      b: { say: [["M", "Je me suis tordu la cheville sur une racine… Ça fait vraiment mal."]],
           choices: [
             { fr: "Allez, levez-vous et courez, ça va passer tout seul !", tr: "Hadi, kalkın ve koşun, kendiliğinden geçer!", en: "Come on, get up and run, it'll go away on its own!", ok: false,
               fb: { fr: "Ouh là, vous n'êtes pas son coach de handball 😄 ! Une cheville blessée, on ne la force pas. Dites-lui de ne pas bouger.", tr: "Aman, onun hentbol antrenörü değilsiniz 😄! Yaralı bir bileği zorlamayız. Ona kıpırdamamasını söyleyin.", en: "Whoa, you're not his handball coach 😄! You don't force an injured ankle. Tell him not to move." } },
             { fr: "Ne bougez pas. Je suis kiné, je peux regarder ?", tr: "Kıpırdamayın. Fizyoterapistim, bakabilir miyim?", en: "Don't move. I'm a physio, can I take a look?", ok: true, go: "c" },
             { fr: "Vous avez tordu votre chaussette ?", tr: "Çorabınızı mı burktunuz?", en: "Did you twist your sock?", ok: false,
               fb: { fr: "Une chaussette tordue, ça ne fait pas mal 🧦😄 ! Il a dit « la cheville ». Rassurez-le : « ne bougez pas, je peux regarder ? ».", tr: "Burkulmuş bir çorap acıtmaz 🧦😄! « La cheville » (ayak bileği) dedi. Onu sakinleştirin: « ne bougez pas, je peux regarder ? ».", en: "A twisted sock doesn't hurt 🧦😄! He said « la cheville » (ankle). Reassure him: « ne bougez pas, je peux regarder ? »." } }
           ] },
      c: { say: [["M", "Ah, une kiné, quelle chance ! Oui, regardez, s'il vous plaît."]],
           choices: [
             { fr: "Vous êtes mal où, exactement ?", tr: "Tam olarak neresi kötü durumda?", en: "Where are you unwell, exactly?", ok: false,
               fb: { fr: "Petit piège ! Pour la douleur, on dit « avoir mal » : « vous avez mal où ? » ou « où avez-vous mal ? ».", tr: "Küçük bir tuzak! Ağrı için « avoir mal » denir: « vous avez mal où ? » ya da « où avez-vous mal ? ».", en: "Little trap! For pain, French uses « avoir mal »: « vous avez mal où ? » or « où avez-vous mal ? »." } },
             { fr: "Vous pouvez bouger le pied ? Doucement.", tr: "Ayağınızı oynatabilir misiniz? Yavaşça.", en: "Can you move your foot? Gently.", ok: true, go: "d" },
             { fr: "Je vais tirer très fort sur votre pied, d'accord ?", tr: "Ayağınızı çok sert çekeceğim, tamam mı?", en: "I'm going to pull really hard on your foot, OK?", ok: false,
               fb: { fr: "Il est déjà tout pâle 😬 ! On commence toujours doucement : « vous pouvez bouger le pied ? doucement ».", tr: "Zaten bembeyaz olmuş 😬! Her zaman yavaştan başlanır: « vous pouvez bouger le pied ? doucement ».", en: "He's already white as a sheet 😬! Always start gently: « vous pouvez bouger le pied ? doucement »." } }
           ] },
      d: { scene: { fr: "La cheville est très gonflée. L'homme est pâle.", tr: "Ayak bileği çok şişmiş. Adamın yüzü solgun.", en: "The ankle is very swollen. The man looks pale." },
           say: [["M", "Un peu… mais ça gonfle beaucoup. Et j'ai la tête qui tourne."]],
           choices: [
             { fr: "Restez assis, j'appelle le 15 tout de suite.", tr: "Oturun, hemen 15'i arıyorum.", en: "Stay seated, I'm calling 15 right away.", ok: true, go: "f" },
             { fr: "Restez assis. Je demande des glaçons au kiosque, juste là, et j'appelle le 15.", tr: "Oturun. Hemen şuradaki büfeden buz isteyip 15'i arıyorum.", en: "Stay seated. I'll ask for some ice at the kiosk just there, and call 15.", ok: true, go: "e" },
             { fr: "Désolée, j'ai un rendez-vous. Restez assis, quelqu'un va venir. Au revoir !", tr: "Üzgünüm, randevum var. Oturun, biri gelir. Hoşça kalın!", en: "Sorry, I have an appointment. Stay seated, someone will come. Goodbye!", ok: false,
               fb: { fr: "Il a la tête qui tourne, on ne le laisse pas seul 🥺 ! Restez avec lui et appelez le 15 (ou le 112).", tr: "Başı dönüyor, onu yalnız bırakmayız 🥺! Yanında kalın ve 15'i (ya da 112'yi) arayın.", en: "He feels dizzy, you don't leave him alone 🥺! Stay with him and call 15 (or 112)." } }
           ] },
      e: { scene: { fr: "Le kiosque est à deux pas : vous voyez toujours l'homme. La vendeuse vous sourit.", tr: "Büfe iki adım ötede: adamı hâlâ görebiliyorsunuz. Satıcı kadın size gülümsüyor.", en: "The kiosk is a few steps away: you can still see the man. The woman selling there smiles at you." },
           say: [["F", "Bonjour ! Qu'est-ce qu'il vous faut ?"]],
           choices: [
             { fr: "Vous auriez des glaçons ? C'est pour un blessé.", tr: "Buz küpünüz var mı acaba? Yaralı biri için.", en: "Would you have any ice cubes? It's for an injured man.", ok: true, go: "e2" },
             { fr: "Une glace à la vanille, s'il vous plaît ! C'est urgent !", tr: "Bir vanilyalı dondurma, lütfen! Acil!", en: "A vanilla ice cream, please! It's urgent!", ok: false,
               fb: { fr: "Délicieux, mais pas pour une cheville 🍦😄 ! « Une glace » = un dessert. Pour soigner, demandez « des glaçons ».", tr: "Lezzetli ama bilek için değil 🍦😄! « Une glace » = dondurma. Tedavi için « des glaçons » (buz küpleri) isteyin.", en: "Delicious, but not for an ankle 🍦😄! « Une glace » = ice cream. To treat it, ask for « des glaçons » (ice cubes)." } }
           ] },
      e2: { say: [["F", "Oh, le pauvre ! Tenez, voilà un sac de glaçons. Vous avez appelé les secours ?"]],
           choices: [
             { fr: "Merci beaucoup ! Pas encore, je vais appeler le 15 maintenant.", tr: "Çok teşekkürler! Henüz değil, şimdi 15'i arayacağım.", en: "Thanks a lot! Not yet, I'm going to call 15 now.", ok: true, go: "f" },
             { fr: "Merci beaucoup ! Non, les secours, c'est trop cher en France.", tr: "Çok teşekkürler! Hayır, Fransa'da acil yardım çok pahalı.", en: "Thank you very much! No, emergency services are too expensive in France.", ok: false,
               fb: { fr: "Bonne nouvelle : appeler le 15 ou le 112, c'est gratuit 📞 ! Dites « je vais appeler le 15 maintenant ».", tr: "İyi haber: 15'i ya da 112'yi aramak ücretsiz 📞! « Je vais appeler le 15 maintenant » deyin.", en: "Good news: calling 15 or 112 is free 📞! Say « je vais appeler le 15 maintenant »." } }
           ] },
      f: { scene: { fr: "Vous restez à côté de l'homme, bien assis, et vous appelez le 15.", tr: "Adamın yanında kalıyorsunuz, o da oturuyor; 15'i arıyorsunuz.", en: "You stay next to the man, who stays seated, and call 15." },
           say: [["F2", "SAMU, j'écoute. Quelle est votre urgence ?"]],
           choices: [
             { fr: "Bonjour, ça va bien, et vous ? Je suis au parc avec un homme qui est tombé.", tr: "Merhaba, iyiyim, ya siz? Düşen bir adamla parktayım.", en: "Hello, I'm fine, and you? I'm at the park with a man who fell.", ok: false,
               fb: { fr: "Très polie, mais au 15, on va droit au but 🚑 ! Dites ce qui s'est passé : « un homme est tombé… ».", tr: "Çok kibar, ama 15'te doğrudan konuya girilir 🚑! Ne olduğunu söyleyin: « un homme est tombé… ».", en: "Very polite, but on 15 you get straight to the point 🚑! Say what happened: « un homme est tombé… »." } },
             { fr: "Il y a un problème. Il a très mal et il a la tête qui tourne.", tr: "Bir sorun var. Çok ağrısı var ve başı dönüyor.", en: "There's a problem. He's in a lot of pain and he feels dizzy.", ok: false,
               fb: { fr: "Un peu trop mystérieux 🕵️‍♀️😄 ! Expliquez qui, quoi, où : « un homme est tombé en courant au parc… ».", tr: "Biraz fazla gizemli 🕵️‍♀️😄! Kim, ne, nerede açıklayın: « un homme est tombé en courant au parc… ».", en: "A bit too mysterious 🕵️‍♀️😄! Explain who, what, where: « un homme est tombé en courant au parc… »." } },
             { fr: "Un homme est tombé en courant au parc. Il a très mal à la cheville et il a la tête qui tourne.", tr: "Parkta bir adam koşarken düştü. Bileği çok ağrıyor ve başı dönüyor.", en: "A man fell while running in the park. His ankle really hurts and he feels dizzy.", ok: true, go: "g" }
           ] },
      g: { say: [["F2", "D'accord. Où êtes-vous exactement ?"]],
           choices: [
             { fr: "Dans le parc municipal, près de l'entrée principale, à côté du kiosque.", tr: "Belediye parkında, ana girişin yakınında, büfenin yanında.", en: "In the town park, near the main entrance, next to the kiosk.", ok: true, go: "h" },
             { fr: "Je suis en France, dans une ville, près d'un parc.", tr: "Fransa'dayım, bir şehirde, bir parkın yakınında.", en: "I'm in France, in a town, near a park.", ok: false,
               fb: { fr: "C'est un bon début, mais la France est un peu grande 🗺️😄 ! Donnez un repère : le parc, l'entrée, le kiosque…", tr: "İyi bir başlangıç ama Fransa biraz büyük 🗺️😄! Bir işaret verin: park, giriş, büfe…", en: "Good start, but France is a bit big 🗺️😄! Give a landmark: the park, the entrance, the kiosk…" } }
           ] },
      h: { say: [["F2", "Très bien. Il est conscient ? Il respire normalement ?"]],
           choices: [
             { fr: "Oui, il parle avec moi et il respire normalement.", tr: "Evet, benimle konuşuyor ve normal nefes alıyor.", en: "Yes, he's talking to me and breathing normally.", ok: true, go: "i" },
             { fr: "Oui, il est très conscient qu'il a mal, le pauvre !", tr: "Evet, canının yandığının çok farkında, zavallı!", en: "Yes, he's very aware that it hurts, poor thing!", ok: false,
               fb: { fr: "Ha ha, ça, c'est sûr 😄 ! Mais « conscient » = il est réveillé, il répond. Dites « il parle avec moi et il respire normalement ».", tr: "Ha ha, orası kesin 😄! Ama « conscient » = uyanık, cevap veriyor demek. « Il parle avec moi et il respire normalement » deyin.", en: "Ha ha, that's for sure 😄! But « conscient » = awake, responding. Say « il parle avec moi et il respire normalement »." } },
             { fr: "Il respire comme un poisson.", tr: "Balık gibi nefes alıyor.", en: "He's breathing like a fish.", ok: false,
               fb: { fr: "Hors de l'eau, ce serait inquiétant 🐟😅 ! Soyez simple et précise : « il respire normalement ».", tr: "Sudan çıkmış bir balık gibiyse endişe verici 🐟😅! Basit ve net olun: « il respire normalement ».", en: "Out of water, that would be worrying 🐟😅! Keep it simple and precise: « il respire normalement »." } }
           ] },
      i: { say: [["F2", "Parfait. Restez avec lui et ne lui donnez rien à manger ni à boire. Une équipe arrive dans 15 minutes."]],
           choices: [
             { fr: "Quinze heures ? C'est très long ! Merci, madame.", tr: "On beş saat mi? Çok uzun! Teşekkürler hanımefendi.", en: "Fifteen hours? That's very long! Thank you, madam.", ok: false,
               fb: { fr: "Pas d'inquiétude, c'est 15 MINUTES ⏱️😄 ! Répondez « d'accord, je reste avec lui ».", tr: "Merak etmeyin, 15 DAKİKA ⏱️😄! « D'accord, je reste avec lui » diye cevap verin.", en: "Don't worry, it's 15 MINUTES ⏱️😄! Answer « d'accord, je reste avec lui »." } },
             { fr: "D'accord, je lui donne un sandwich pour patienter.", tr: "Tamam, beklerken ona bir sandviç veriyorum.", en: "OK, I'll give him a sandwich while he waits.", ok: false,
               fb: { fr: "Gentil, mais elle a dit « rien à manger ni à boire » 🥪🚫. Dites simplement « d'accord, je reste avec lui ».", tr: "Nazik ama « yiyecek ya da içecek hiçbir şey vermeyin » dedi 🥪🚫. Sadece « d'accord, je reste avec lui » deyin.", en: "Kind, but she said « nothing to eat or drink » 🥪🚫. Just say « d'accord, je reste avec lui »." } },
             { fr: "D'accord, je reste avec lui. Merci, madame !", tr: "Tamam, yanında kalıyorum. Teşekkürler, hanımefendi!", en: "OK, I'll stay with him. Thank you, madam!", ok: true, go: "j" }
           ] },
      j: { scene: { fr: "Vous attendez ensemble sur un banc. L'homme va un peu mieux.", tr: "Bir bankta birlikte bekliyorsunuz. Adam biraz daha iyi.", en: "You wait together on a bench. The man is feeling a little better." },
           say: [["M", "Merci beaucoup, madame. Je m'appelle Thomas. Sans vous, je ne sais pas ce que j'aurais fait !"]],
           choices: [
             { fr: "De rien, c'est normal ! Moi aussi, je cours ici tous les samedis.", tr: "Rica ederim, bu çok normal! Ben de her cumartesi burada koşuyorum.", en: "You're welcome, it's only natural! I run here every Saturday too.", ok: true, go: "fin" },
             { fr: "Avec plaisir ! Vous voulez que j'appelle quelqu'un de votre famille ?", tr: "Ne demek! Ailenizden birini aramamı ister misiniz?", en: "My pleasure! Would you like me to call someone in your family?", ok: true, go: "fin" },
             { fr: "Oui, je sais. Ça fait 50 euros.", tr: "Evet, biliyorum. 50 euro tutuyor.", en: "Yes, I know. That'll be 50 euros.", ok: false,
               fb: { fr: "Ha ha, la kiné du parc n'est pas payante 😄💶 ! Répondez simplement « de rien, c'est normal ! ».", tr: "Ha ha, parktaki fizyoterapist ücretsiz 😄💶! Sadece « de rien, c'est normal ! » deyin.", en: "Ha ha, the park physio is free of charge 😄💶! Just answer « de rien, c'est normal ! »." } }
           ] },
      fin: { end: "win", say: [["M2", "Bonjour ! C'est vous qui avez appelé ? Vous êtes restée avec lui et vos explications étaient très claires. Bravo, madame !"]],
             scene: { fr: "Les secours emmènent Thomas. Vous avez gardé votre calme et tout expliqué en français. Bravo ! 🚑🎉", tr: "Yardım ekibi Thomas'ı götürüyor. Sakinliğinizi korudunuz ve her şeyi Fransızca anlattınız. Bravo! 🚑🎉", en: "The paramedics take Thomas away. You stayed calm and explained everything in French. Well done! 🚑🎉" } }
    } },

  /* ───────────── 27. Contrôle dans le tram ───────────── */
  { id: "av-controle-tram", level: "A2", emoji: "🚋",
    t: { fr: "Contrôle dans le tram", tr: "Tramvayda bilet kontrolü", en: "Ticket check on the tram" },
    goal: { fr: "Vous avez oublié de valider votre ticket : expliquez-vous poliment au contrôleur et trouvez une solution.", tr: "Biletinizi okutmayı unuttunuz: kontrolöre durumu kibarca açıklayın ve bir çözüm bulun.", en: "You forgot to validate your ticket: explain yourself politely to the inspector and find a solution." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous êtes dans le tram, assise près de la fenêtre. Deux contrôleurs montent.", tr: "Tramvaydasınız, pencere kenarında oturuyorsunuz. İki kontrolör biniyor.", en: "You're on the tram, sitting by the window. Two inspectors get on." },
           say: [["M", "Bonjour, contrôle des titres de transport. Votre ticket, s'il vous plaît, madame."]],
           choices: [
             { fr: "Non merci, je n'achète rien.", tr: "Hayır teşekkürler, bir şey almıyorum.", en: "No thanks, I'm not buying anything.", ok: false,
               fb: { fr: "Il ne vend rien, il CONTRÔLE 😄 ! Montrez votre ticket : « oui, bien sûr, voilà ».", tr: "Bir şey satmıyor, KONTROL ediyor 😄! Biletinizi gösterin: « oui, bien sûr, voilà ».", en: "He's not selling anything, he's CHECKING 😄! Show your ticket: « oui, bien sûr, voilà »." } },
             { fr: "Je n'ai pas de titre, je suis juste madame.", tr: "Unvanım yok, sadece hanımefendiyim.", en: "I don't have a title, I'm just « madame ».", ok: false,
               fb: { fr: "Pas besoin d'être docteure ou princesse 👑😄 ! Ici, « titre de transport » = ticket. Montrez-le : « voilà ».", tr: "Doktor ya da prenses olmanıza gerek yok 👑😄! Burada « titre de transport » = bilet. Gösterin: « voilà ».", en: "No need to be a doctor or a princess 👑😄! Here « titre de transport » = ticket. Show it: « voilà »." } },
             { fr: "Oui, bien sûr, voilà.", tr: "Evet, tabii, buyurun.", en: "Yes, of course, here you are.", ok: true, go: "b" }
           ] },
      b: { say: [["M", "Hmm… Madame, votre ticket n'est pas validé."]],
           choices: [
             { fr: "Si, il est valide, regardez, je l'ai acheté ce matin, il est tout neuf !", tr: "Hayır, geçerli, bakın, bu sabah aldım, yepyeni!", en: "Yes it is valid, look, I bought it this morning, it's brand new!", ok: false,
               fb: { fr: "Justement, tout neuf = jamais utilisé 😅. « Validé » = passé dans la machine. Expliquez : « j'ai oublié de le valider, pardon ».", tr: "İşte sorun da bu, yepyeni = hiç kullanılmamış 😅. « Validé » = makineden geçirilmiş. Açıklayın: « j'ai oublié de le valider, pardon ».", en: "Exactly, brand new = never used 😅. « Validé » = put through the machine. Explain: « j'ai oublié de le valider, pardon »." } },
             { fr: "C'est normal, je le garde pour demain.", tr: "Normal, yarın için saklıyorum.", en: "That's normal, I'm keeping it for tomorrow.", ok: false,
               fb: { fr: "Malin, mais vous voyagez aujourd'hui 😄🎫 ! Dans le tram, on valide à chaque montée. Dites plutôt « j'ai oublié de le valider ».", tr: "Akıllıca ama bugün yolculuk ediyorsunuz 😄🎫! Tramvayda her binişte bilet okutulur. Bunun yerine « j'ai oublié de le valider » deyin.", en: "Clever, but you're travelling today 😄🎫! On the tram you validate every time you get on. Say « j'ai oublié de le valider » instead." } },
             { fr: "Ah bon ? Oh non, je l'ai acheté ce matin, mais j'ai oublié de le valider. Pardon !", tr: "Öyle mi? Eyvah, bu sabah aldım ama okutmayı unuttum. Pardon!", en: "Really? Oh no, I bought it this morning but forgot to validate it. Sorry!", ok: true, go: "c" }
           ] },
      c: { say: [["M", "Vous savez, sans validation, normalement, c'est une amende."]],
           choices: [
             { fr: "Une amende ? Non merci, je suis allergique aux amandes !", tr: "Badem mi? Hayır teşekkürler, bademe alerjim var!", en: "An almond? No thanks, I'm allergic to almonds!", ok: false,
               fb: { fr: "Ha ha, « une amande » 🌰 se mange, « une amende » 💶 se paie ! Excusez-vous plutôt : « je suis désolée, je ne savais pas ».", tr: "Ha ha, « une amande » 🌰 yenir, « une amende » 💶 (para cezası) ödenir! Bunun yerine özür dileyin: « je suis désolée, je ne savais pas ».", en: "Ha ha, « une amande » 🌰 is eaten, « une amende » 💶 (a fine) is paid! Apologise instead: « je suis désolée, je ne savais pas »." } },
             { fr: "Vous êtes méchant ! Je suis en France depuis un an seulement.", tr: "Çok kötüsünüz! Sadece bir yıldır Fransa'dayım.", en: "You're mean! I've only been in France for a year.", ok: false,
               fb: { fr: "Il fait juste son travail 😬. Restez calme et polie, ça marche beaucoup mieux : « je suis désolée, je ne savais pas ».", tr: "Sadece işini yapıyor 😬. Sakin ve kibar kalın, çok daha iyi sonuç verir: « je suis désolée, je ne savais pas ».", en: "He's just doing his job 😬. Stay calm and polite, it works much better: « je suis désolée, je ne savais pas »." } },
             { fr: "Je suis vraiment désolée, je ne savais pas. Je suis en France depuis un an seulement.", tr: "Gerçekten çok üzgünüm, bilmiyordum. Sadece bir yıldır Fransa'dayım.", en: "I'm really sorry, I didn't know. I've only been in France for a year.", ok: true, go: "d" }
           ] },
      d: { say: [["M", "C'est la première fois ? Vous avez une pièce d'identité, s'il vous plaît ?"]],
           choices: [
             { fr: "Oui, c'est la première fois. Voici mon titre de séjour.", tr: "Evet, ilk kez oluyor. Buyurun, oturma iznim.", en: "Yes, it's the first time. Here's my residence permit.", ok: true, go: "e" },
             { fr: "Je n'ai pas de pièces, désolée, seulement des billets de 20 €.", tr: "Bozuk param yok, üzgünüm, sadece 20 €'luk banknotlar var.", en: "I don't have any coins, sorry, only 20 € notes.", ok: false,
               fb: { fr: "Il ne veut pas votre monnaie 😄 ! « Une pièce d'identité » = une carte d'identité, un passeport ou un titre de séjour.", tr: "Bozuk paranızı istemiyor 😄! « Une pièce d'identité » = kimlik kartı, pasaport ya da oturma izni.", en: "He doesn't want your change 😄! « Une pièce d'identité » = an ID card, a passport or a residence permit." } }
           ] },
      e: { say: [["M", "Bon… pour cette fois, je ne vous mets pas d'amende. Mais validez votre ticket maintenant, la machine est juste là."]],
           choices: [
             { fr: "Merci, monsieur, c'est gentil. Je le validerai demain matin.", tr: "Teşekkürler beyefendi, çok naziksiniz. Yarın sabah okuturum.", en: "Thank you, sir, that's kind. I'll validate it tomorrow morning.", ok: false,
               fb: { fr: "Il vient d'être très gentil… et il vous regarde encore 👀😅 ! Répondez « merci, je le valide tout de suite ».", tr: "Az önce çok nazik davrandı… ve hâlâ size bakıyor 👀😅! « Merci, je le valide tout de suite » diye cevap verin.", en: "He's just been very kind… and he's still watching you 👀😅! Answer « merci, je le valide tout de suite »." } },
             { fr: "Merci beaucoup ! Je le valide tout de suite.", tr: "Çok teşekkürler! Hemen okutuyorum.", en: "Thank you so much! I'll validate it right away.", ok: true, go: "f" }
           ] },
      f: { scene: { fr: "Bip ! La machine affiche « ticket validé ». Le deuxième contrôleur, plus jeune, vous sourit.", tr: "Bip! Makinede « bilet okundu » yazıyor. Daha genç olan ikinci kontrolör size gülümsüyor.", en: "Beep! The machine shows « ticket validated ». The second, younger inspector smiles at you." },
           say: [["M2", "Voilà, c'est bon ! Vous avez une question ?"]],
           choices: [
             { fr: "Oui : est-ce qu'il existe un abonnement moins cher que les tickets ?", tr: "Evet: biletlerden daha ucuz bir abonman var mı?", en: "Yes: is there a pass that's cheaper than tickets?", ok: true, go: "g" },
             { fr: "Oui : je vais à la gare. C'est bien le bon tram ?", tr: "Evet: istasyona gidiyorum. Doğru tramvay bu mu?", en: "Yes: I'm going to the station. Is this the right tram?", ok: true, go: "g2" },
             { fr: "Oui : vous êtes célibataire ? Et c'est bien le bon tram ?", tr: "Evet: bekâr mısınız? Bir de doğru tramvay mı?", en: "Yes: are you single? And is this the right tram?", ok: false,
               fb: { fr: "Hé ! Vous êtes mariée, et lui, il travaille 😳😄. Posez plutôt une question sur le tram ou les tickets.", tr: "Hey! Siz evlisiniz, o da çalışıyor 😳😄. Bunun yerine tramvay ya da biletler hakkında bir soru sorun.", en: "Hey! You're married, and he's working 😳😄. Ask a question about the tram or tickets instead." } }
           ] },
      g: { say: [["M2", "Oui ! Il y a l'abonnement mensuel. Vous pouvez le prendre en agence ou sur l'application."]],
           choices: [
             { fr: "C'est combien par mois ?", tr: "Ayda ne kadar?", en: "How much is it per month?", ok: true, go: "h" },
             { fr: "C'est comment par mois ?", tr: "Ayda nasıl?", en: "How is it per month?", ok: false,
               fb: { fr: "Classique : « comment » = de quelle manière, « combien » = le prix 💶. Demandez « c'est combien par mois ? ».", tr: "Klasik hata: « comment » = nasıl, « combien » = ne kadar (fiyat) 💶. « C'est combien par mois ? » diye sorun.", en: "Classic mix-up: « comment » = how, « combien » = how much 💶. Ask « c'est combien par mois ? »." } }
           ] },
      h: { say: [["M2", "Pour les moins de 26 ans, c'est moins cher. Sinon, c'est environ 40 € par mois."]],
           choices: [
             { fr: "Je suis 30 ans, alors c'est 40 €.", tr: "Ben 30 yaşım, o zaman 40 €.", en: "I am 30 years, so it's 40 €.", ok: false,
               fb: { fr: "Le piège préféré des Turcs et des Anglais 😄 ! En français, on « a » son âge : « j'ai 30 ans ».", tr: "Türklerin ve İngilizlerin en sevdiği tuzak 😄! Fransızcada yaşa « sahip olunur »: « j'ai 30 ans ».", en: "The favourite trap for Turkish and English speakers 😄! In French you « have » your age: « j'ai 30 ans »." } },
             { fr: "J'ai 30 ans, donc c'est 40 €.", tr: "30 yaşındayım, yani 40 €.", en: "I'm 30, so it's 40 €.", ok: true, go: "i" }
           ] },
      g2: { say: [["M2", "Oui, la gare, c'est dans 4 arrêts. Mais attention : il y a des travaux, il faut changer de tram à « République »."]],
           choices: [
             { fr: "D'accord, je change à République. Merci pour l'info !", tr: "Tamam, République'te aktarma yapıyorum. Bilgi için teşekkürler!", en: "OK, I'll change at République. Thanks for the info!", ok: true, go: "i" },
             { fr: "Je dois changer de vêtements à République ? Pourquoi ?", tr: "République'te kıyafet mi değiştirmem gerekiyor? Neden?", en: "I have to change clothes at République? Why?", ok: false,
               fb: { fr: "Pas besoin de tenue spéciale 👗😄 ! « Changer de tram » = prendre un autre tram. Dites « d'accord, je change à République ».", tr: "Özel kıyafete gerek yok 👗😄! « Changer de tram » = başka bir tramvaya binmek. « D'accord, je change à République » deyin.", en: "No special outfit needed 👗😄! « Changer de tram » = take another tram. Say « d'accord, je change à République »." } }
           ] },
      i: { say: [["M", "Bonne journée, madame. Et n'oubliez pas : on valide toujours, même pour un seul arrêt !"]],
           choices: [
             { fr: "Promis ! Bonne journée à vous aussi.", tr: "Söz! Size de iyi günler.", en: "Promise! Have a good day too.", ok: true, go: "fin" },
             { fr: "Promis, je ne prendrai plus jamais le tram !", tr: "Söz, bir daha asla tramvaya binmeyeceğim!", en: "I promise I'll never take the tram again!", ok: false,
               fb: { fr: "Pas si dramatique 😄🚋 ! Le tram reste votre ami. Dites juste « promis ! bonne journée à vous aussi ».", tr: "O kadar da dramatik değil 😄🚋! Tramvay hâlâ dostunuz. Sadece « promis ! bonne journée à vous aussi » deyin.", en: "No need for drama 😄🚋! The tram is still your friend. Just say « promis ! bonne journée à vous aussi »." } }
           ] },
      fin: { end: "win", scene: { fr: "Les contrôleurs descendent. Pas d'amende, et vous savez maintenant comment ça marche. Ouf ! 🚋🎉", tr: "Kontrolörler iniyor. Ceza yok ve artık sistemin nasıl işlediğini biliyorsunuz. Oh be! 🚋🎉", en: "The inspectors get off. No fine, and now you know how it works. Phew! 🚋🎉" } }
    } },

  /* ───────────── 28. Un problème avec la CAF ───────────── */
  { id: "av-aide-caf", level: "A2", emoji: "🏠",
    t: { fr: "Un problème avec la CAF", tr: "CAF ile bir sorun", en: "A problem with the CAF" },
    goal: { fr: "À la CAF, expliquez que votre aide au logement n'arrive plus et découvrez quel document manque.", tr: "CAF'ta konut yardımınızın artık yatmadığını açıklayın ve hangi belgenin eksik olduğunu öğrenin.", en: "At the CAF, explain that your housing benefit has stopped and find out which document is missing." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous entrez à l'accueil de la CAF, une lettre à la main. Une employée vous regarde.", tr: "Elinizde bir mektupla CAF'ın danışmasına giriyorsunuz. Bir görevli size bakıyor.", en: "You walk into the CAF reception, a letter in your hand. A staff member looks at you." },
           say: [["F", "Bonjour madame. Vous avez rendez-vous ?"]],
           choices: [
             { fr: "Oui, à 14 h, avec une conseillère.", tr: "Evet, saat 14.00'te, bir danışmanla.", en: "Yes, at 2 p.m., with an adviser.", ok: true, go: "b" },
             { fr: "Non, je suis venue en bus.", tr: "Hayır, otobüsle geldim.", en: "No, I came by bus.", ok: false,
               fb: { fr: "Bon à savoir, mais elle demande si vous avez un RENDEZ-VOUS 📅😄. Dites « oui, j'ai rendez-vous à 14 h ».", tr: "Bilmek güzel ama RANDEVUNUZ olup olmadığını soruyor 📅😄. « Oui, j'ai rendez-vous à 14 h » deyin.", en: "Good to know, but she's asking if you have an APPOINTMENT 📅😄. Say « oui, j'ai rendez-vous à 14 h »." } },
             { fr: "Oui, j'ai un rendez-vous amoureux ce soir.", tr: "Evet, bu akşam romantik bir buluşmam var.", en: "Yes, I have a date tonight.", ok: false,
               fb: { fr: "À la CAF ? Pas très romantique 💘😄 ! Dites simplement « j'ai rendez-vous à 14 h avec une conseillère ».", tr: "CAF'ta mı? Pek romantik değil 💘😄! Sadece « j'ai rendez-vous à 14 h avec une conseillère » deyin.", en: "At the CAF? Not very romantic 💘😄! Just say « j'ai rendez-vous à 14 h avec une conseillère »." } }
           ] },
      b: { scene: { fr: "La conseillère, Mme Benali, vous fait entrer dans un petit bureau.", tr: "Danışman Bayan Benali sizi küçük bir ofise alıyor.", en: "The adviser, Mrs Benali, shows you into a small office." },
           say: [["F2", "Asseyez-vous, madame. Qu'est-ce qui se passe ?"]],
           choices: [
             { fr: "Je voudrais une maison gratuite, s'il vous plaît.", tr: "Bedava bir ev istiyorum, lütfen.", en: "I'd like a free house, please.", ok: false,
               fb: { fr: "Ce serait le rêve 🏡😄 ! Mais expliquez votre vrai problème : « je ne reçois plus mon aide au logement ».", tr: "Bu bir rüya olurdu 🏡😄! Ama asıl sorununuzu açıklayın: « je ne reçois plus mon aide au logement ».", en: "That would be a dream 🏡😄! But explain your real problem: « je ne reçois plus mon aide au logement »." } },
             { fr: "Il y a deux mois, je ne reçois plus mon aide.", tr: "İki ay önce yardımımı artık almıyorum.", en: "Two months ago I don't receive my benefit anymore.", ok: false,
               fb: { fr: "Presque ! Pour une situation qui continue, on dit « DEPUIS deux mois » (pas « il y a »).", tr: "Neredeyse! Devam eden bir durum için « DEPUIS deux mois » denir (« il y a » değil).", en: "Almost! For a situation that's still going on, say « DEPUIS deux mois » (not « il y a »)." } },
             { fr: "Depuis deux mois, je ne reçois plus mon aide au logement.", tr: "İki aydır konut yardımımı alamıyorum.", en: "For two months I haven't been receiving my housing benefit.", ok: true, go: "c" }
           ] },
      c: { say: [["F2", "Je regarde votre dossier. Vous avez votre numéro d'allocataire ?"]],
           choices: [
             { fr: "Oui, il est sur cette lettre. Tenez.", tr: "Evet, bu mektupta yazıyor. Buyurun.", en: "Yes, it's on this letter. Here you go.", ok: true, go: "d" },
             { fr: "Oui, mon numéro, c'est le 06 00 00 00 12.", tr: "Evet, numaram 06 00 00 00 12.", en: "Yes, my number is 06 00 00 00 12.", ok: false,
               fb: { fr: "Ça, c'est votre téléphone 📱😄 ! Le numéro d'allocataire est sur les lettres de la CAF. Dites « oui, il est sur cette lettre ».", tr: "Bu telefon numaranız 📱😄! Yardım alan numarası CAF mektuplarında yazar. « Oui, il est sur cette lettre » deyin.", en: "That's your phone number 📱😄! Your claimant number is on CAF letters. Say « oui, il est sur cette lettre »." } }
           ] },
      d: { say: [["F2", "Ah, je vois. Il manque un document : l'attestation de loyer pour cette année. On vous a envoyé un courrier en septembre."]],
           choices: [
             { fr: "Un coureur ? Non, aucun coureur n'est venu chez moi.", tr: "Bir koşucu mu? Hayır, evime hiçbir koşucu gelmedi.", en: "A runner? No, no runner came to my place.", ok: false,
               fb: { fr: "Vous pensez trop au sport 🏃‍♀️😄 ! « Un courrier » = une lettre. Dites « non, je n'ai rien reçu ».", tr: "Spora çok kafa yoruyorsunuz 🏃‍♀️😄! « Un courrier » = mektup. « Non, je n'ai rien reçu » deyin.", en: "You're thinking about sport too much 🏃‍♀️😄! « Un courrier » = a letter. Say « non, je n'ai rien reçu »." } },
             { fr: "Ah non, je n'ai rien reçu. La lettre s'est peut-être perdue.", tr: "Yok, hiçbir şey almadım. Mektup belki kaybolmuştur.", en: "Oh no, I didn't receive anything. Maybe the letter got lost.", ok: true, go: "e" },
             { fr: "Euh… je crois que je l'ai reçu, mais je n'ai pas compris.", tr: "Şey… sanırım almıştım ama anlamadım.", en: "Um… I think I got it, but I didn't understand it.", ok: true, go: "e" }
           ] },
      e: { say: [["F2", "Pas de problème, ça arrive souvent ! Votre propriétaire doit remplir l'attestation. Ensuite, vous pouvez la déposer en ligne ou nous l'apporter ici."]],
           choices: [
             { fr: "Je préfère la déposer en ligne, c'est plus rapide.", tr: "İnternetten yüklemeyi tercih ederim, daha hızlı.", en: "I'd rather upload it online, it's quicker.", ok: true, go: "f1" },
             { fr: "Je préfère vous l'apporter ici, en papier.", tr: "Size buraya kâğıt olarak getirmeyi tercih ederim.", en: "I'd rather bring it here, on paper.", ok: true, go: "f2" },
             { fr: "Je peux la remplir moi-même et signer à la place du propriétaire ?", tr: "Kendim doldurup ev sahibinin yerine imzalayabilir miyim?", en: "Can I fill it in myself and sign for the landlord?", ok: false,
               fb: { fr: "Surtout pas, c'est interdit 🙅‍♀️ ! Seul le propriétaire signe. Choisissez : en ligne ou en papier ?", tr: "Asla, bu yasak 🙅‍♀️! Sadece ev sahibi imzalar. Seçin: internetten mi, kâğıtla mı?", en: "Definitely not, that's forbidden 🙅‍♀️! Only the landlord signs. Choose: online or on paper?" } }
           ] },
      f1: { say: [["F2", "D'accord. Vous avez un compte sur le site de la CAF ? Vous connaissez votre mot de passe ?"]],
           choices: [
             { fr: "Oui, bien sûr, mon mot de passe, c'est « Istanbul123 » !", tr: "Evet, tabii, şifrem « Istanbul123 »!", en: "Yes, of course, my password is « Istanbul123 »!", ok: false,
               fb: { fr: "Chut 🤫 ! On ne dit jamais son mot de passe, même à la CAF. Dites « oui » ou « je l'ai oublié ».", tr: "Şşş 🤫! Şifre asla söylenmez, CAF'a bile. « Oui » ya da « je l'ai oublié » deyin.", en: "Shh 🤫! Never tell anyone your password, not even the CAF. Say « oui » or « je l'ai oublié »." } },
             { fr: "J'ai un compte, mais j'ai oublié mon mot de passe…", tr: "Hesabım var ama şifremi unuttum…", en: "I have an account, but I've forgotten my password…", ok: true, go: "g1" }
           ] },
      g1: { say: [["F2", "Pas de souci. Cliquez sur « mot de passe oublié » et suivez les étapes pour en créer un nouveau. Il faut votre numéro d'allocataire."]],
           choices: [
             { fr: "D'accord, je vais cliquer sur « mot de passe oublié » ce soir. Merci !", tr: "Tamam, bu akşam « şifremi unuttum »a tıklayacağım. Teşekkürler!", en: "OK, I'll click on « forgotten password » tonight. Thanks!", ok: true, go: "h" },
             { fr: "D'accord, je vais oublier mon mot de passe ce soir. Merci !", tr: "Tamam, bu akşam şifremi unutacağım. Teşekkürler!", en: "OK, I'm going to forget my password tonight. Thanks!", ok: false,
               fb: { fr: "C'est déjà fait 😄 ! Vous voulez dire « je vais cliquer sur “mot de passe oublié” ce soir ».", tr: "Zaten unuttunuz 😄! Demek istediğiniz « je vais cliquer sur “mot de passe oublié” ce soir ».", en: "You already have 😄! You mean « je vais cliquer sur “mot de passe oublié” ce soir »." } }
           ] },
      f2: { say: [["F2", "Très bien. Vous pourrez la mettre dans la boîte aux lettres à l'entrée, sans rendez-vous."]],
           choices: [
             { fr: "Dans la boîte de nuit ? Je ne sors pas le soir, moi !", tr: "Gece kulübüne mi? Ben akşamları dışarı çıkmam!", en: "In the nightclub? I don't go out at night!", ok: false,
               fb: { fr: "La CAF ne fait pas la fête 🪩😄 ! « La boîte aux lettres » = pour le courrier. Demandez plutôt un détail utile.", tr: "CAF parti yapmıyor 🪩😄! « La boîte aux lettres » = posta kutusu. Bunun yerine faydalı bir ayrıntı sorun.", en: "The CAF doesn't party 🪩😄! « La boîte aux lettres » = letterbox. Ask a useful detail instead." } },
             { fr: "Parfait. J'écris mon numéro d'allocataire dessus ?", tr: "Harika. Üzerine yardım alan numaramı yazayım mı?", en: "Perfect. Should I write my claimant number on it?", ok: true, go: "h" }
           ] },
      h: { say: [["F2", "Oui, c'est une bonne idée. Ensuite, on recalcule vos droits, et vous recevrez les deux mois en retard."]],
           choices: [
             { fr: "Super ! Je vais recevoir l'argent des deux mois ?", tr: "Süper! İki ayın parasını alacak mıyım?", en: "Great! I'll get the money for both months?", ok: true, go: "i" },
             { fr: "En retard ? Mais non, je suis toujours à l'heure, moi !", tr: "Geç mi? Yok canım, ben hep zamanında gelirim!", en: "Late? No way, I'm always on time!", ok: false,
               fb: { fr: "Ce n'est pas vous qui êtes en retard 😄 ! « Les deux mois en retard » = l'argent pas encore payé. Demandez « je vais recevoir l'argent des deux mois ? ».", tr: "Geç kalan siz değilsiniz 😄! « Les deux mois en retard » = henüz ödenmemiş para. « Je vais recevoir l'argent des deux mois ? » diye sorun.", en: "You're not the one who's late 😄! « Les deux mois en retard » = the money not yet paid. Ask « je vais recevoir l'argent des deux mois ? »." } }
           ] },
      i: { say: [["F2", "Oui, normalement, en une seule fois, quand le dossier sera traité. Vous avez une autre question ?"]],
           choices: [
             { fr: "Non, c'est tout. Merci, vous m'avez bien aidée !", tr: "Hayır, bu kadar. Teşekkürler, bana çok yardımcı oldunuz!", en: "No, that's all. Thank you, you've really helped me!", ok: true, go: "fin" },
             { fr: "Non, rien. Allez, bisous, et à la semaine prochaine !", tr: "Hayır, bir şey yok. Hadi, öptüm, haftaya görüşürüz!", en: "No, nothing. Right, kisses, see you next week!", ok: false,
               fb: { fr: "Elle est sympa, mais « bisous », c'est pour les amis 😘😄. Avec une conseillère : « merci beaucoup, vous m'avez bien aidée ! ».", tr: "Cana yakın biri ama « bisous » arkadaşlar içindir 😘😄. Bir danışmanla: « merci beaucoup, vous m'avez bien aidée ! ».", en: "She's nice, but « bisous » is for friends 😘😄. With an adviser: « merci beaucoup, vous m'avez bien aidée ! »." } }
           ] },
      fin: { end: "win", say: [["F2", "Avec plaisir, madame. Bonne fin de journée !"]],
             scene: { fr: "Vous sortez de la CAF soulagée : le problème est presque réglé, et tout s'est passé en français ! 🏠🎉", tr: "CAF'tan rahatlamış olarak çıkıyorsunuz: sorun neredeyse çözüldü ve her şey Fransızca geçti! 🏠🎉", en: "You leave the CAF relieved: the problem is almost solved, and it all happened in French! 🏠🎉" } }
    } },

  /* ───────────── 29. Bénévole au triathlon ───────────── */
  { id: "av-benevole-triathlon", level: "A2", emoji: "🏅",
    t: { fr: "Bénévole au triathlon", tr: "Triatlonda gönüllü", en: "Volunteering at a triathlon" },
    goal: { fr: "Passez une journée comme bénévole au triathlon de la ville : aidez à l'organisation et encouragez les sportifs.", tr: "Şehrin triatlonunda gönüllü olarak bir gün geçirin: organizasyona yardım edin ve sporcuları destekleyin.", en: "Spend a day volunteering at the town triathlon: help with the organisation and cheer the athletes on." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Il est 7 h du matin. Devant la tente des bénévoles, un homme avec un gilet orange vous accueille.", tr: "Sabah saat 7. Gönüllü çadırının önünde turuncu yelekli bir adam sizi karşılıyor.", en: "It's 7 a.m. In front of the volunteers' tent, a man in an orange vest welcomes you." },
           say: [["M", "Salut ! Moi, c'est Julien, je suis le responsable des bénévoles. Ici, tout le monde se tutoie ! Tu es là pour la journée ?"]],
           choices: [
             { fr: "Bonjour monsieur, êtes-vous le directeur ?", tr: "Merhaba beyefendi, müdür siz misiniz?", en: "Hello sir, are you the director?", ok: false,
               fb: { fr: "Il vient de dire « tout le monde se tutoie » 😄 ! Entre bénévoles, on est détendu : « salut ! oui, je suis là pour la journée ».", tr: "Az önce « herkes birbirine sen diye hitap ediyor » dedi 😄! Gönüllüler arasında rahat olunur: « salut ! oui, je suis là pour la journée ».", en: "He just said « everyone uses tu » 😄! Volunteers are relaxed together: « salut ! oui, je suis là pour la journée »." } },
             { fr: "Oui, mais je suis bénévole, alors combien tu me payes ?", tr: "Evet ama gönüllüyüm, o zaman bana ne kadar ödüyorsun?", en: "Yes, but I'm a volunteer, so how much are you paying me?", ok: false,
               fb: { fr: "Bénévole = sans salaire 😄 ! Mais il y a souvent un t-shirt et un bon repas. Répondez « oui, je suis là pour toute la journée ».", tr: "Gönüllü = maaşsız 😄! Ama genelde bir tişört ve güzel bir yemek olur. « Oui, je suis là pour toute la journée » diye cevap verin.", en: "Volunteer = unpaid 😄! But there's often a T-shirt and a good meal. Answer « oui, je suis là pour toute la journée »." } },
             { fr: "Salut Julien ! Oui, je suis là pour toute la journée.", tr: "Selam Julien! Evet, bütün gün buradayım.", en: "Hi Julien! Yes, I'm here for the whole day.", ok: true, go: "b" }
           ] },
      b: { say: [["M", "Génial ! Ce matin, tu préfères aider au ravitaillement ou à l'accueil des athlètes ?"]],
           choices: [
             { fr: "Le ravitaillement, j'adore l'ambiance au bord de la course !", tr: "İkmal noktası, yarış kenarındaki havaya bayılırım!", en: "The refreshment station, I love the atmosphere by the course!", ok: true, go: "c1" },
             { fr: "L'accueil, comme ça je vais parler français avec plein de gens !", tr: "Karşılama, böylece bir sürü insanla Fransızca konuşurum!", en: "The welcome desk, that way I'll speak French with lots of people!", ok: true, go: "c2" },
             { fr: "Je préfère dormir, il est trop tôt.", tr: "Uyumayı tercih ederim, saat çok erken.", en: "I'd rather sleep, it's too early.", ok: false,
               fb: { fr: "On vous comprend, 7 h du matin 😴😄 ! Mais vous êtes venue pour aider. Choisissez le ravitaillement ou l'accueil.", tr: "Sizi anlıyoruz, sabahın yedisi 😴😄! Ama yardım etmeye geldiniz. İkmal noktasını ya da karşılamayı seçin.", en: "We get it, 7 a.m. 😴😄! But you came to help. Choose the refreshment station or the welcome desk." } }
           ] },
      c1: { say: [["M", "OK ! Mets ce t-shirt jaune. Tu vas couper des oranges et des bananes, et remplir des verres d'eau."]],
           choices: [
             { fr: "D'accord, je coupe les fruits. Combien de verres ?", tr: "Tamam, meyveleri kesiyorum. Kaç bardak?", en: "OK, I'll cut the fruit. How many cups?", ok: true, go: "d" },
             { fr: "D'accord ! Je mange les bananes tout de suite, j'ai faim !", tr: "Tamam! Muzları hemen yiyorum, açım!", en: "OK! I'll eat the bananas right away, I'm hungry!", ok: false,
               fb: { fr: "Les bananes sont pour les athlètes 🍌😄 ! Vous devez les COUPER. Dites « d'accord, je coupe les fruits ».", tr: "Muzlar sporcular için 🍌😄! Onları KESMENİZ gerekiyor. « D'accord, je coupe les fruits » deyin.", en: "The bananas are for the athletes 🍌😄! You have to CUT them. Say « d'accord, je coupe les fruits »." } }
           ] },
      c2: { scene: { fr: "Vous êtes derrière une table avec des enveloppes. Une sportive arrive.", tr: "Zarfların olduğu bir masanın arkasındasınız. Bir sporcu kadın geliyor.", en: "You're behind a table full of envelopes. A woman athlete comes up." },
           say: [["F2", "Bonjour ! Je viens chercher mon dossard. Je m'appelle Claire Martin."]],
           choices: [
             { fr: "Bonjour Claire Martin, enchantée, je m'appelle bénévole.", tr: "Merhaba Claire Martin, memnun oldum, benim adım gönüllü.", en: "Hello Claire Martin, nice to meet you, my name is volunteer.", ok: false,
               fb: { fr: "« Bénévole » n'est pas un prénom 😄 ! Cherchez son enveloppe et donnez-lui son numéro : « voilà, numéro 248 ».", tr: "« Bénévole » bir isim değil 😄! Zarfını bulun ve numarasını verin: « voilà, numéro 248 ».", en: "« Bénévole » isn't a first name 😄! Find her envelope and give her her number: « voilà, numéro 248 »." } },
             { fr: "Martin… Voilà, c'est le numéro 248. Bonne course !", tr: "Martin… İşte, 248 numara. İyi yarışlar!", en: "Martin… Here you go, it's number 248. Have a good race!", ok: true, go: "d" }
           ] },
      d: { say: [["M", "La course commence ! Tout le monde au ravitaillement du kilomètre 5. Tu peux porter ce carton de bouteilles ?"]],
           choices: [
             { fr: "Oui, pas de problème, je suis costaude !", tr: "Evet, sorun değil, güçlüyüm!", en: "Yes, no problem, I'm strong!", ok: true, go: "e" },
             { fr: "Oui, pas de problème, je le porte sur mon tête !", tr: "Evet, sorun değil, başımın üstünde taşırım!", en: "Yes, no problem, I'll carry it on my head!", ok: false,
               fb: { fr: "Impressionnant 😄, mais attention au genre : « la tête », donc « sur MA tête ». Et dans les bras, c'est plus facile !", tr: "Etkileyici 😄, ama cinsiyete dikkat: « la tête », yani « sur MA tête ». Hem kollarda taşımak daha kolay!", en: "Impressive 😄, but watch the gender: « la tête », so « sur MA tête ». And it's easier in your arms!" } },
             { fr: "Oui, je peux le porter… mais pas tout le camion !", tr: "Evet, onu taşıyabilirim… ama bütün kamyonu değil!", en: "Yes, I can carry it… but not the whole lorry!", ok: true, go: "e" }
           ] },
      e: { scene: { fr: "Les premiers coureurs arrivent, tout rouges, au ravitaillement.", tr: "İlk koşucular kıpkırmızı bir hâlde ikmal noktasına geliyor.", en: "The first runners reach the refreshment station, bright red." },
           say: [["M2", "De l'eau, s'il te plaît, vite !"]],
           choices: [
             { fr: "Tiens, voilà ! Allez, courage !", tr: "Al, buyur! Hadi, dayan!", en: "Here you go! Come on, keep going!", ok: true, go: "f" },
             { fr: "Plate ou gazeuse ? C'est 2 € le verre, monsieur.", tr: "Sade mi, maden suyu mu? Bardağı 2 €, beyefendi.", en: "Still or sparkling? It's 2 € a cup, sir.", ok: false,
               fb: { fr: "Ce n'est pas un restaurant 😄 ! Au ravitaillement, l'eau est gratuite et rapide. Tendez le verre : « tiens, voilà ! courage ! ».", tr: "Burası restoran değil 😄! İkmal noktasında su ücretsiz ve hızlıdır. Bardağı uzatın: « tiens, voilà ! courage ! ».", en: "It's not a restaurant 😄! At the refreshment station, water is free and fast. Hold out the cup: « tiens, voilà ! courage ! »." } }
           ] },
      f: { scene: { fr: "Un petit garçon de 6 ans s'approche de la table avec sa maman.", tr: "6 yaşında küçük bir oğlan annesiyle birlikte masaya yaklaşıyor.", en: "A little 6-year-old boy comes up to the table with his mum." },
           say: [["K", "Madame, madame ! Je peux aider à donner les verres ?"]],
           choices: [
             { fr: "Oui, mais vous devez faire très attention avec les verres, monsieur.", tr: "Evet ama bardaklara çok dikkat etmelisiniz, beyefendi.", en: "Yes, but you must be very careful with the cups, sir.", ok: false,
               fb: { fr: "Il a 6 ans, pas 60 😄 ! Avec un enfant, on dit « tu » : « bien sûr ! tiens les verres comme ça ».", tr: "6 yaşında, 60 değil 😄! Çocuklara « tu » denir: « bien sûr ! tiens les verres comme ça ».", en: "He's 6, not 60 😄! With a child you use « tu »: « bien sûr ! tiens les verres comme ça »." } },
             { fr: "Non, tu es trop petit, va jouer.", tr: "Hayır, çok küçüksün, git oyna.", en: "No, you're too small, go and play.", ok: false,
               fb: { fr: "Oh, il est tout triste 🥺 ! Les enfants adorent aider. Dites « bien sûr ! tiens les verres comme ça ».", tr: "Ah, çok üzüldü 🥺! Çocuklar yardım etmeye bayılır. « Bien sûr ! tiens les verres comme ça » deyin.", en: "Oh, he looks so sad 🥺! Kids love to help. Say « bien sûr ! tiens les verres comme ça »." } },
             { fr: "Bien sûr ! Tiens les verres comme ça, le bras bien tendu.", tr: "Tabii ki! Bardakları böyle tut, kolunu iyice uzat.", en: "Of course! Hold the cups like this, with your arm out straight.", ok: true, go: "g" }
           ] },
      g: { scene: { fr: "Un coureur d'une soixantaine d'années s'arrête et se tient la jambe.", tr: "Altmışlı yaşlarda bir koşucu duruyor ve bacağını tutuyor.", en: "A runner in his sixties stops and grabs his leg." },
           say: [["M2", "Aïe ! J'ai une crampe au mollet !"]],
           choices: [
             { fr: "Une crêpe ? Désolée, on n'a que des bananes.", tr: "Krep mi? Üzgünüm, sadece muzumuz var.", en: "A crêpe? Sorry, we only have bananas.", ok: false,
               fb: { fr: "« Une crêpe » 🥞 ≠ « une crampe » (le muscle qui se bloque) 😄. Aidez-le : « asseyez-vous, je vais étirer votre mollet ».", tr: "« Une crêpe » 🥞 ≠ « une crampe » (kas krampı) 😄. Ona yardım edin: « asseyez-vous, je vais étirer votre mollet ».", en: "« Une crêpe » 🥞 ≠ « une crampe » (a cramp) 😄. Help him: « asseyez-vous, je vais étirer votre mollet »." } },
             { fr: "Asseyez-vous. Tendez la jambe, je vais vous aider à étirer le mollet.", tr: "Oturun. Bacağınızı uzatın, baldırınızı esnetmenize yardım edeceğim.", en: "Sit down. Straighten your leg, I'll help you stretch your calf.", ok: true, go: "h" },
             { fr: "C'est normal, tendez la jambe et continuez à courir !", tr: "Normal, bacağınızı uzatın ve koşmaya devam edin!", en: "That's normal, stretch your leg and keep running!", ok: false,
               fb: { fr: "Aïe, ça va empirer 😬 ! Vous connaissez le geste : asseyez-le et étirez doucement le mollet.", tr: "Ah, daha da kötüleşir 😬! Ne yapılacağını biliyorsunuz: onu oturtun ve baldırını yavaşça esnetin.", en: "Ouch, that'll make it worse 😬! You know what to do: sit him down and gently stretch the calf." } }
           ] },
      h: { say: [["M2", "Ah… ça va beaucoup mieux, merci ! Vous êtes médecin ?"]],
           choices: [
             { fr: "Non, j'étais kiné en Turquie !", tr: "Hayır, Türkiye'de fizyoterapisttim!", en: "No, I was a physio in Turkey!", ok: true, go: "i" },
             { fr: "Oui, je suis médecin à l'hôpital.", tr: "Evet, hastanede doktorum.", en: "Yes, I'm a doctor at the hospital.", ok: false,
               fb: { fr: "Pas tout à fait 😉 ! Vous étiez kiné en Turquie. Dites la vérité : « non, j'étais kiné en Turquie ».", tr: "Tam olarak değil 😉! Türkiye'de fizyoterapisttiniz. Doğruyu söyleyin: « non, j'étais kiné en Turquie ».", en: "Not quite 😉! You were a physio in Turkey. Tell the truth: « non, j'étais kiné en Turquie »." } }
           ] },
      i: { scene: { fr: "En fin d'après-midi, la course est finie. Tous les bénévoles se retrouvent sous la tente.", tr: "Öğleden sonranın sonunda yarış bitiyor. Bütün gönüllüler çadırda buluşuyor.", en: "In the late afternoon the race is over. All the volunteers meet up in the tent." },
           say: [["M", "Bravo à tous ! Tu restes manger avec nous ? Il reste plein de pâtes !"]],
           choices: [
             { fr: "Avec plaisir, je suis très faim après cette journée !", tr: "Memnuniyetle, bu günden sonra çok açım!", en: "With pleasure, I am very hungry after today!", ok: false,
               fb: { fr: "Presque ! En français, on « a » faim (comme on « a » 30 ans) : « j'ai très faim ! ».", tr: "Neredeyse! Fransızcada açlığa « sahip olunur » (30 yaş gibi): « j'ai très faim ! ».", en: "Almost! In French you « have » hunger (like you « have » 30 years): « j'ai très faim ! »." } },
             { fr: "Avec plaisir, j'ai très faim après cette journée !", tr: "Memnuniyetle, bu günden sonra çok acıktım!", en: "I'd love to, I'm starving after today!", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["M", "Merci pour ton aide aujourd'hui. Tu reviens l'année prochaine, hein ?"]],
             scene: { fr: "Vous mangez des pâtes en riant avec les autres bénévoles. Quelle belle journée de sport… et de français ! 🏅🎉", tr: "Diğer gönüllülerle gülerek makarna yiyorsunuz. Ne güzel bir spor… ve Fransızca günü! 🏅🎉", en: "You eat pasta and laugh with the other volunteers. What a great day of sport… and French! 🏅🎉" } }
    } },

  /* ───────────── 30. Dîner chez les beaux-parents d'une amie ───────────── */
  { id: "av-belle-famille", level: "A2", emoji: "🍷",
    t: { fr: "Dîner chez les beaux-parents de Léa", tr: "Léa'nın eşinin ailesinde akşam yemeği", en: "Dinner at Léa's in-laws" },
    goal: { fr: "Votre amie Léa vous invite à dîner chez les parents de son mari : soyez polie et passez une bonne soirée.", tr: "Arkadaşınız Léa sizi kocasının ailesine akşam yemeğine davet ediyor: kibar olun ve güzel bir akşam geçirin.", en: "Your friend Léa invites you to dinner at her husband's parents' house: be polite and have a nice evening." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Il est 19 h 30. Vous sonnez à la porte d'une jolie maison. Une dame d'environ 60 ans ouvre.", tr: "Saat 19.30. Güzel bir evin zilini çalıyorsunuz. 60 yaşlarında bir kadın kapıyı açıyor.", en: "It's 7:30 p.m. You ring the bell of a pretty house. A woman of about 60 opens the door." },
           say: [["F", "Bonsoir ! Entrez, entrez ! Vous êtes l'amie de Léa ? Moi, c'est Monique."]],
           choices: [
             { fr: "Salut ! Ouais, c'est moi.", tr: "Selam! He, benim.", en: "Hi! Yeah, that's me.", ok: false,
               fb: { fr: "Un peu trop décontractée pour une première rencontre 😄. Avec les parents, on reste polie : « bonsoir madame, enchantée ».", tr: "İlk tanışma için biraz fazla rahat 😄. Ebeveynlerle kibar kalınır: « bonsoir madame, enchantée ».", en: "A bit too casual for a first meeting 😄. With the parents, stay polite: « bonsoir madame, enchantée »." } },
             { fr: "Bonjour, je suis enchantée de vous rencontrer, madame.", tr: "Merhaba, sizinle tanıştığıma çok memnun oldum, hanımefendi.", en: "Hello, I'm delighted to meet you, madam.", ok: false,
               fb: { fr: "Très poli, mais il est 19 h 30 : le soir, on dit « bonsoir » 🌙. Essayez encore !", tr: "Çok kibar, ama saat 19.30: akşamları « bonsoir » denir 🌙. Tekrar deneyin!", en: "Very polite, but it's 7:30 p.m.: in the evening you say « bonsoir » 🌙. Try again!" } },
             { fr: "Bonsoir madame, enchantée ! Ces fleurs sont pour vous.", tr: "İyi akşamlar hanımefendi, memnun oldum! Bu çiçekler sizin için.", en: "Good evening, lovely to meet you! These flowers are for you.", ok: true, go: "b" }
           ] },
      b: { say: [["F", "Oh, merci, elles sont magnifiques ! On se fait la bise ?"]],
           choices: [
             { fr: "Avec plaisir ! Ici, c'est deux bises ?", tr: "Memnuniyetle! Burada iki öpücük mü?", en: "With pleasure! Is it two kisses here?", ok: true, go: "c" },
             { fr: "La bise ? Oui, il fait un peu froid dehors.", tr: "Rüzgâr mı? Evet, dışarısı biraz soğuk.", en: "The north wind? Yes, it's a bit cold outside.", ok: false,
               fb: { fr: "Bien vu, « la bise » est aussi un vent froid 🌬️😄 ! Mais ici, c'est le bisou sur les joues. Dites « avec plaisir ! ».", tr: "İyi yakaladınız, « la bise » aynı zamanda soğuk bir rüzgâr 🌬️😄! Ama burada yanaktan öpmek demek. « Avec plaisir ! » deyin.", en: "Good catch, « la bise » is also a cold wind 🌬️😄! But here it's the kiss on the cheeks. Say « avec plaisir ! »." } },
             { fr: "Euh… je préfère serrer la main, si ça ne vous dérange pas.", tr: "Şey… sakıncası yoksa el sıkışmayı tercih ederim.", en: "Um… I'd rather shake hands, if you don't mind.", ok: true, go: "c" }
           ] },
      c: { scene: { fr: "Dans le salon, Léa et son mari sont déjà là. Le père, Gérard, se lève.", tr: "Salonda Léa ve kocası çoktan gelmiş. Baba Gérard ayağa kalkıyor.", en: "In the living room, Léa and her husband are already there. The father, Gérard, stands up." },
           say: [["M", "Bienvenue ! Asseyez-vous. Vous prenez un apéritif ? Un petit kir, ou un jus de fruits ?"]],
           choices: [
             { fr: "Un kir, volontiers ! Je n'en ai jamais goûté.", tr: "Bir kir, memnuniyetle! Hiç tatmadım.", en: "A kir, gladly! I've never tried one.", ok: true, go: "d1" },
             { fr: "Un jus de fruits, s'il vous plaît. Je ne bois pas d'alcool.", tr: "Bir meyve suyu, lütfen. Alkol içmiyorum.", en: "A fruit juice, please. I don't drink alcohol.", ok: true, go: "d2" },
             { fr: "Je prends tout, s'il vous plaît, j'ai très soif !", tr: "Hepsini alıyorum, lütfen, çok susadım!", en: "I'll have everything, please, I'm very thirsty!", ok: false,
               fb: { fr: "Un kir ET un jus ? La soirée commence fort 😄🥂 ! Choisissez une boisson : « un kir, volontiers » ou « un jus de fruits ».", tr: "Hem kir HEM meyve suyu mu? Akşam hızlı başlıyor 😄🥂! Bir içecek seçin: « un kir, volontiers » ya da « un jus de fruits ».", en: "A kir AND a juice? The evening's off to a strong start 😄🥂! Choose one drink: « un kir, volontiers » or « un jus de fruits »." } }
           ] },
      d1: { say: [["M", "C'est du vin blanc avec un peu de crème de cassis. À votre santé !"]],
           choices: [
             { fr: "À la vôtre ! Mmm, c'est bon, et un peu sucré.", tr: "Sizin de! Mmm, güzelmiş, biraz da tatlı.", en: "Cheers! Mmm, it's good, and a bit sweet.", ok: true, go: "e" },
             { fr: "Merci, je suis en très bonne santé, moi aussi !", tr: "Teşekkürler, benim de sağlığım çok iyi!", en: "Thanks, I'm in very good health too!", ok: false,
               fb: { fr: "Tant mieux 😄 ! Mais « à votre santé » est un toast, comme « şerefe ». On répond « à la vôtre ! » ou « santé ! ».", tr: "Ne güzel 😄! Ama « à votre santé » bir kadeh kaldırma sözü, « şerefe » gibi. « À la vôtre ! » ya da « santé ! » diye cevap verilir.", en: "Glad to hear it 😄! But « à votre santé » is a toast, like « cheers ». You answer « à la vôtre ! » or « santé ! »." } }
           ] },
      d2: { say: [["M", "Bien sûr ! Orange ou pomme ? … Voilà pour vous. À votre santé !"]],
           choices: [
             { fr: "À la vôtre ! Merci beaucoup.", tr: "Sizin de! Çok teşekkürler.", en: "Cheers! Thank you very much.", ok: true, go: "e" },
             { fr: "Merci, ma santé va bien, et la vôtre ?", tr: "Teşekkürler, sağlığım iyi, sizinki nasıl?", en: "Thanks, my health is fine, and yours?", ok: false,
               fb: { fr: "Ce n'est pas une consultation 😄 ! « À votre santé » = « şerefe ». Levez votre verre et dites « à la vôtre ! ».", tr: "Bu bir muayene değil 😄! « À votre santé » = « şerefe ». Bardağınızı kaldırın ve « à la vôtre ! » deyin.", en: "It's not a medical check-up 😄! « À votre santé » = « cheers ». Raise your glass and say « à la vôtre ! »." } }
           ] },
      e: { scene: { fr: "Tout le monde passe à table. Ça sent très bon.", tr: "Herkes masaya geçiyor. Çok güzel kokuyor.", en: "Everyone sits down at the table. It smells wonderful." },
           say: [["F", "Ce soir, j'ai fait un bœuf bourguignon. Vous mangez de la viande, j'espère ?"]],
           choices: [
             { fr: "Oui, j'adore ça ! Ça sent vraiment bon.", tr: "Evet, bayılırım! Gerçekten çok güzel kokuyor.", en: "Yes, I love it! It smells really good.", ok: true, go: "f" },
             { fr: "Oui, je mange la viande tous les jours, moi.", tr: "Evet, ben eti her gün yerim.", en: "Yes, I eat the meat every day, me.", ok: false,
               fb: { fr: "Petit piège d'article : on mange « DE LA viande » (une quantité). Mais le plus simple : « oui, j'adore ça ! ».", tr: "Küçük bir tanımlık tuzağı: « DE LA viande » yenir (bir miktar). Ama en basiti: « oui, j'adore ça ! ».", en: "Little article trap: you eat « DE LA viande » (some meat). But the simplest is: « oui, j'adore ça ! »." } }
           ] },
      f: { say: [["M", "Léa nous a dit que vous êtes turque. Vous êtes en France depuis longtemps ?"]],
           choices: [
             { fr: "Je suis en France il y a un an.", tr: "Bir yıl önce Fransa'dayım.", en: "I am in France a year ago.", ok: false,
               fb: { fr: "Presque ! Pour une durée qui continue, on dit « depuis » : « je suis en France depuis un an ».", tr: "Neredeyse! Devam eden bir süre için « depuis » denir: « je suis en France depuis un an ».", en: "Almost! For a period that's still going on, use « depuis »: « je suis en France depuis un an »." } },
             { fr: "Depuis un an. Avant, j'habitais à Istanbul.", tr: "Bir yıldır. Önceden İstanbul'da yaşıyordum.", en: "For a year. Before that, I lived in Istanbul.", ok: true, go: "g" },
             { fr: "Je suis en France pour un an, avec mon mari.", tr: "Eşimle birlikte bir yıllığına Fransa'dayım.", en: "I'm in France for one year, with my husband.", ok: false,
               fb: { fr: "« Pour un an » = vous partez dans un an ✈️ ! Vous voulez dire « depuis un an » (vous êtes là depuis douze mois).", tr: "« Pour un an » = bir yıl sonra gidiyorsunuz demek ✈️! « Depuis un an » demek istiyorsunuz (on iki aydır buradasınız).", en: "« Pour un an » = you're leaving in a year ✈️! You mean « depuis un an » (you've been here for twelve months)." } }
           ] },
      g: { say: [["F", "Et qu'est-ce que vous faites dans la vie ?"]],
           choices: [
             { fr: "Je fais la vie, et je voudrais reprendre des études de kiné.", tr: "Hayatı yapıyorum ve fizyoterapi okumaya geri dönmek istiyorum.", en: "I do life, and I'd like to go back to studying physio.", ok: false,
               fb: { fr: "Très philosophe 😄 ! « Qu'est-ce que vous faites dans la vie ? » = quel est votre métier. Parlez de votre travail.", tr: "Çok felsefi 😄! « Qu'est-ce que vous faites dans la vie ? » = mesleğiniz ne. İşinizden bahsedin.", en: "Very philosophical 😄! « Qu'est-ce que vous faites dans la vie ? » = what's your job. Talk about your work." } },
             { fr: "Je travaille dans une salle de sport, et je voudrais reprendre des études de kiné.", tr: "Bir spor salonunda çalışıyorum ve fizyoterapi okumaya geri dönmek istiyorum.", en: "I work at a gym, and I'd like to go back to studying physio.", ok: true, go: "h" },
             { fr: "Je suis kiné dans un grand hôpital à Paris.", tr: "Paris'te büyük bir hastanede fizyoterapistim.", en: "I'm a physio in a big hospital in Paris.", ok: false,
               fb: { fr: "Un beau rêve, mais pas encore la réalité 😉. Votre diplôme n'est pas encore reconnu. Parlez de la salle de sport et de votre projet.", tr: "Güzel bir hayal ama henüz gerçek değil 😉. Diplomanız henüz tanınmadı. Spor salonundan ve planınızdan bahsedin.", en: "A lovely dream, but not reality yet 😉. Your diploma isn't recognised yet. Talk about the gym and your plan." } }
           ] },
      h: { say: [["F", "Quel beau projet ! Encore un peu de bœuf ? Après, il y a du fromage et une tarte aux pommes !"]],
           choices: [
             { fr: "Non merci, c'était délicieux, mais je garde de la place pour le dessert !", tr: "Hayır teşekkürler, çok lezzetliydi ama tatlıya yer bırakıyorum!", en: "No thanks, it was delicious, but I'm saving room for dessert!", ok: true, go: "i" },
             { fr: "Avec plaisir, juste un tout petit peu !", tr: "Memnuniyetle, sadece azıcık!", en: "With pleasure, just a tiny bit!", ok: true, go: "i" },
             { fr: "Non merci, je suis pleine, mais c'était délicieux !", tr: "Hayır teşekkürler, ben gebeyim, ama çok lezzetliydi!", en: "No thanks, I'm pregnant, but it was delicious!", ok: false,
               fb: { fr: "Attention 😳 ! « Je suis pleine » se dit… d'une vache qui attend un petit 🐄. Dites « non merci, c'était délicieux, j'ai bien mangé ».", tr: "Dikkat 😳! « Je suis pleine » … yavru bekleyen bir inek için söylenir 🐄. « Non merci, c'était délicieux, j'ai bien mangé » deyin.", en: "Careful 😳! « Je suis pleine » is said… of a cow expecting a calf 🐄. Say « non merci, c'était délicieux, j'ai bien mangé »." } }
           ] },
      i: { scene: { fr: "Il est minuit. Après le fromage, la tarte et un café, vous vous levez pour partir.", tr: "Saat gece yarısı. Peynir, turta ve kahveden sonra gitmek için kalkıyorsunuz.", en: "It's midnight. After the cheese, the tart and a coffee, you get up to leave." },
           say: [["M", "Merci d'être venue ! Revenez quand vous voulez."]],
           choices: [
             { fr: "Merci, c'était pas mal. La prochaine fois, je vous invite chez moi.", tr: "Teşekkürler, fena değildi. Bir dahaki sefere sizi evime davet ederim.", en: "Thanks, it wasn't bad. Next time, I'll invite you to my place.", ok: false,
               fb: { fr: "Aïe, « pas mal » sonne un peu froid après un si long dîner 😅 ! Soyez généreuse : « merci pour cette excellente soirée ! ».", tr: "Ah, « pas mal » bu kadar uzun bir yemekten sonra biraz soğuk kaçıyor 😅! Cömert olun: « merci pour cette excellente soirée ! ».", en: "Ouch, « pas mal » sounds a bit cold after such a long dinner 😅! Be generous: « merci pour cette excellente soirée ! »." } },
             { fr: "Merci pour cette excellente soirée ! La prochaine fois, repas turc chez moi !", tr: "Bu harika akşam için teşekkürler! Bir dahaki sefere bende Türk yemeği!", en: "Thanks for a wonderful evening! Next time, Turkish dinner at my place!", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["F", "Oh, avec plaisir ! On adore la cuisine turque. Bonne nuit, et à bientôt !"]],
             scene: { fr: "Léa vous fait un clin d'œil : « Ils t'adorent ! » Une belle soirée à la française… et bientôt à la turque ! 🍷🎉", tr: "Léa size göz kırpıyor: « Sana bayıldılar! » Fransız usulü güzel bir akşam… ve yakında Türk usulü! 🍷🎉", en: "Léa winks at you: « They love you! » A lovely French-style evening… and soon a Turkish-style one! 🍷🎉" } }
    } }

);
