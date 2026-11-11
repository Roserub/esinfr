/* Aventures A1 — 26 to 30: carte SIM, le bon bus, un gâteau pour Sophie, une plante pour le balcon, une nouvelle amie au parc */
(window.ADVENTURES = window.ADVENTURES || []).push(

  /* ───────────── 26. Une carte SIM française ───────────── */
  { id: "av-carte-sim", level: "A1", emoji: "📱",
    t: { fr: "Une carte SIM française", tr: "Fransız SIM kartı", en: "A French SIM card" },
    goal: { fr: "Achetez une carte SIM avec un forfait, puis payez le premier mois.", tr: "Tarifeli bir SIM kart alın, sonra ilk ayı ödeyin.", en: "Buy a SIM card with a phone plan, then pay for the first month." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous entrez dans une boutique de téléphones. Un vendeur sourit.", tr: "Bir telefon mağazasına giriyorsunuz. Bir satıcı gülümsüyor.", en: "You walk into a phone shop. A salesman smiles." },
           say: [["M", "Bonjour madame ! Je peux vous aider ?"]],
           choices: [
             { fr: "Bonjour ! Je voudrais une carte postale, s'il vous plaît.", tr: "Merhaba! Bir kartpostal istiyorum, lütfen.", en: "Hello! I'd like a postcard, please.", ok: false,
               fb: { fr: "Une carte postale ? Il faut aller au tabac-presse 😄📮 ! Ici, on dit « une carte SIM ».", tr: "Kartpostal mı? Onun için tütüncüye gitmek lazım 😄📮! Burada « une carte SIM » denir.", en: "A postcard? That's the newsagent's 😄📮! Here you say « une carte SIM »." } },
             { fr: "Bonjour ! Je voudrais une carte SIM, s'il vous plaît.", tr: "Merhaba! Bir SIM kart istiyorum, lütfen.", en: "Hello! I'd like a SIM card, please.", ok: true, go: "b" },
             { fr: "Bonjour ! Je suis une carte SIM.", tr: "Merhaba! Ben bir SIM kartım.", en: "Hello! I am a SIM card.", ok: false,
               fb: { fr: "Vous êtes toute petite, alors 😄 ! On dit « je voudrais une carte SIM ».", tr: "O zaman minicik olmalısınız 😄! « Je voudrais une carte SIM » denir.", en: "Then you must be tiny 😄! You say « je voudrais une carte SIM »." } }
           ] },
      b: { say: [["M", "Bien sûr ! Vous voulez beaucoup d'internet ou un petit forfait pas cher ?"]],
           choices: [
             { fr: "Beaucoup d'internet, s'il vous plaît. J'aime les vidéos !", tr: "Bol internet, lütfen. Videoları seviyorum!", en: "Lots of internet, please. I love videos!", ok: true, go: "c1" },
             { fr: "Un petit forfait pas cher, s'il vous plaît.", tr: "Küçük ve ucuz bir tarife, lütfen.", en: "A small, cheap plan, please.", ok: true, go: "c2" },
             { fr: "Je voudrais beaucoup de cher, s'il vous plaît. J'aime les vidéos !", tr: "Çok pahalı istiyorum, lütfen. Videoları severim!", en: "I'd like a lot of expensive, please. I love videos!", ok: false,
               fb: { fr: "Le vendeur va être très content 💸😄 ! Choisissez : « beaucoup d'internet » ou « un petit forfait pas cher ».", tr: "Satıcı buna çok sevinir 💸😄! Seçin: « beaucoup d'internet » ya da « un petit forfait pas cher ».", en: "The salesman will be delighted 💸😄! Choose: « beaucoup d'internet » or « un petit forfait pas cher »." } }
           ] },
      c1: { say: [["M", "Alors, je vous propose ce forfait : 100 Go pour 15 € par mois."]],
           choices: [
             { fr: "C'est parfait, je le prends.", tr: "Mükemmel, onu alıyorum.", en: "That's perfect, I'll take it.", ok: true, go: "d" },
             { fr: "Je prends lui.", tr: "Onu alıyorum.", en: "I take him.", ok: false,
               fb: { fr: "Presque ! En français, le petit mot va avant le verbe : « je le prends ».", tr: "Az kaldı! Fransızcada küçük zamir fiilden önce gelir: « je le prends ».", en: "Almost! In French the little pronoun goes before the verb: « je le prends »." } },
             { fr: "Super ! 15 € par an, c'est vraiment pas cher !", tr: "Süper! Yılda 15 €, gerçekten hiç pahalı değil!", en: "Great! 15 € a year, that's really cheap!", ok: false,
               fb: { fr: "Ce serait génial 😄, mais il a dit « par mois », pas « par an ». Dites « je le prends ».", tr: "Harika olurdu 😄 ama « par mois » (aylık) dedi, « par an » (yıllık) değil. « Je le prends » deyin.", en: "That would be great 😄, but he said « par mois » (a month), not « par an » (a year). Say « je le prends »." } }
           ] },
      c2: { say: [["M", "Celui-ci est très bien : 10 Go pour 5 € par mois."]],
           choices: [
             { fr: "Très bien. Et je peux appeler la Turquie avec ?", tr: "Çok iyi. Peki bununla Türkiye'yi arayabilir miyim?", en: "Very good. And can I call Turkey with it?", ok: true, go: "c3" },
             { fr: "Très bien. Et je peux appeler la Turquie avec vous ?", tr: "Çok iyi. Peki sizinle birlikte Türkiye'yi arayabilir miyim?", en: "Very good. And can I call Turkey with you?", ok: false,
               fb: { fr: "Il est gentil, mais il ne va pas venir dans l'appel 😄📞 ! Dites « avec ce forfait » ou juste « avec ».", tr: "Kibar biri ama aramaya katılmayacak 😄📞! « Avec ce forfait » ya da sadece « avec » deyin.", en: "He's nice, but he won't join the call 😄📞! Say « avec ce forfait » or just « avec »." } }
           ] },
      c3: { say: [["M", "Oui, avec une option à 2 € par mois. Vous la voulez ?"]],
           choices: [
             { fr: "Oui, je prends l'option aussi. Merci !", tr: "Evet, seçeneği de alıyorum. Teşekkürler!", en: "Yes, I'll take the option too. Thanks!", ok: true, go: "d" },
             { fr: "Oui, je veux la Turquie aussi. Merci !", tr: "Evet, Türkiye'yi de istiyorum. Teşekkürler!", en: "Yes, I want Turkey too. Thanks!", ok: false,
               fb: { fr: "Tout le pays ? C'est un gros forfait 🇹🇷😄 ! Dites « je prends l'option ».", tr: "Bütün ülkeyi mi? Bu dev bir tarife 🇹🇷😄! « Je prends l'option » deyin.", en: "The whole country? That's a big plan 🇹🇷😄! Say « je prends l'option »." } }
           ] },
      d: { say: [["M", "Très bien. J'ai besoin d'une pièce d'identité, s'il vous plaît."]],
           choices: [
             { fr: "Ma pièce ? J'habite dans un appartement de trois pièces.", tr: "Odam mı? Üç odalı bir dairede oturuyorum.", en: "My room? I live in a three-room flat.", ok: false,
               fb: { fr: "Joli appartement 🏠😄 ! Mais « une pièce d'identité », c'est un passeport ou une carte de séjour.", tr: "Güzel daire 🏠😄! Ama « une pièce d'identité » kimlik belgesi demek: pasaport ya da oturma izni.", en: "Nice flat 🏠😄! But « une pièce d'identité » is an ID document: a passport or a residence permit." } },
             { fr: "J'ai besoin de vous aussi.", tr: "Benim de size ihtiyacım var.", en: "I need you too.", ok: false,
               fb: { fr: "C'est mignon 😄, mais il demande un document. Dites « voilà mon passeport ».", tr: "Çok tatlı 😄 ama bir belge istiyor. « Voilà mon passeport » deyin.", en: "That's sweet 😄, but he wants a document. Say « voilà mon passeport »." } },
             { fr: "Oui, voilà mon passeport.", tr: "Tabii, işte pasaportum.", en: "Sure, here's my passport.", ok: true, go: "e" }
           ] },
      e: { say: [["M", "Merci. Et vous avez une adresse en France ?"]],
           choices: [
             { fr: "Oui, j'habite 12 rue des Lilas.", tr: "Evet, Lilas Sokağı 12 numarada oturuyorum.", en: "Yes, I live at 12 rue des Lilas.", ok: true, go: "f" },
             { fr: "Non, je suis mariée.", tr: "Hayır, evliyim.", en: "No, I'm married.", ok: false,
               fb: { fr: "Félicitations 💍😄 ! Mais il demande votre adresse : « j'habite 12 rue des Lilas ».", tr: "Tebrikler 💍😄! Ama adresinizi soruyor: « j'habite 12 rue des Lilas ».", en: "Congratulations 💍😄! But he's asking for your address: « j'habite 12 rue des Lilas »." } },
             { fr: "Oui, bien sûr, j'habite à la France maintenant.", tr: "Evet, tabii, artık Fransa'ya oturuyorum.", en: "Yes, of course, I live at the France now.", ok: false,
               fb: { fr: "On dit « en France » 🇫🇷. Et ici, il veut l'adresse exacte : le numéro et la rue.", tr: "« En France » denir 🇫🇷. Ayrıca burada tam adresi istiyor: numara ve sokak.", en: "You say « en France » 🇫🇷. And here he wants the exact address: number and street." } }
           ] },
      f: { say: [["M", "Parfait. Je mets la carte dans votre téléphone ?"]],
           choices: [
             { fr: "Oui, s'il vous plaît, c'est gentil.", tr: "Evet, lütfen, çok naziksiniz.", en: "Yes, please, that's kind.", ok: true, go: "g" },
             { fr: "Non merci, je peux le faire.", tr: "Hayır teşekkürler, ben yapabilirim.", en: "No thanks, I can do it.", ok: true, go: "g2" },
             { fr: "Oui, merci, mettez-moi dans le téléphone.", tr: "Evet, teşekkürler, beni telefona koyun.", en: "Yes, thanks, put me in the phone.", ok: false,
               fb: { fr: "Vous dans le téléphone ? Comme un selfie géant 🤳😄 ! Dites « oui, s'il vous plaît ».", tr: "Siz mi telefonun içine? Dev bir selfie gibi 🤳😄! « Oui, s'il vous plaît » deyin.", en: "You inside the phone? Like a giant selfie 🤳😄! Say « oui, s'il vous plaît »." } }
           ] },
      g: { scene: { fr: "Il met la carte. Le téléphone s'éteint, puis il redémarre.", tr: "Kartı takıyor. Telefon kapanıyor, sonra yeniden açılıyor.", en: "He puts the card in. The phone switches off, then restarts." },
           say: [["M", "Voilà ! Vous avez du réseau ?"]],
           choices: [
             { fr: "Oui, oui, je suis du réseau maintenant !", tr: "Evet, evet, artık şebekedenim!", en: "Yes, yes, I'm from the network now!", ok: false,
               fb: { fr: "Vous êtes une antenne, maintenant 📡😄 ? On dit « oui, j'ai du réseau ».", tr: "Artık anten mi oldunuz 📡😄? « Oui, j'ai du réseau » denir.", en: "Are you an antenna now 📡😄? You say « oui, j'ai du réseau »." } },
             { fr: "Oui, j'ai du réseau. Super !", tr: "Evet, telefonum çekiyor. Süper!", en: "Yes, I've got signal. Great!", ok: true, go: "h" }
           ] },
      g2: { scene: { fr: "Vous ouvrez le petit tiroir. La carte est minuscule… mais ça rentre !", tr: "Küçük yuvayı açıyorsunuz. Kart minicik… ama giriyor!", en: "You open the little tray. The card is tiny… but it fits!" },
           say: [["M", "Bravo ! Alors, ça marche ?"]],
           choices: [
             { fr: "Oui, ça marche ! Merci.", tr: "Evet, çalışıyor! Teşekkürler.", en: "Yes, it works! Thanks.", ok: true, go: "h" },
             { fr: "Oui, je marche très bien ! Merci.", tr: "Evet, çok iyi yürüyorum! Teşekkürler.", en: "Yes, I walk very well! Thanks.", ok: false,
               fb: { fr: "Vous marchez ? Mais vous êtes debout devant lui 🚶‍♀️😄 ! « Ça marche » = ça fonctionne. Dites « oui, ça marche ! ».", tr: "Yürüyor musunuz? Ama onun önünde ayakta duruyorsunuz 🚶‍♀️😄! « Ça marche » = çalışıyor. « Oui, ça marche ! » deyin.", en: "You're walking? But you're standing right in front of him 🚶‍♀️😄! « Ça marche » = it works. Say « oui, ça marche ! »." } }
           ] },
      h: { say: [["M", "Très bien. Vous payez le premier mois maintenant. Par carte ?"]],
           choices: [
             { fr: "Oui, par carte SIM.", tr: "Evet, SIM kartla.", en: "Yes, by SIM card.", ok: false,
               fb: { fr: "La carte SIM ne paie pas encore 😄💳 ! Ici, c'est la carte bancaire : « oui, par carte ».", tr: "SIM kart henüz ödeme yapmıyor 😄💳! Burada banka kartı söz konusu: « oui, par carte ».", en: "The SIM card can't pay yet 😄💳! Here it's your bank card: « oui, par carte »." } },
             { fr: "Non, je paie par carte.", tr: "Hayır, kartla ödüyorum.", en: "No, I'm paying by card.", ok: false,
               fb: { fr: "Il a dit « par carte ? », alors c'est « oui » 😉. Dites « oui, par carte ».", tr: "« Kartla mı? » dedi, yani cevap « evet » 😉. « Oui, par carte » deyin.", en: "He said « by card? », so it's « yes » 😉. Say « oui, par carte »." } },
             { fr: "Oui, par carte.", tr: "Evet, kartla.", en: "Yes, by card.", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["M", "C'est payé ! Bienvenue chez nous, madame. Bonne journée !"]],
             scene: { fr: "Vous avez un numéro français ! Premier message : « Coucou, c'est moi ! » 📱🎉", tr: "Artık Fransız numaranız var! İlk mesaj: « Coucou, c'est moi ! » 📱🎉", en: "You have a French number! First message: « Coucou, c'est moi ! » 📱🎉" } }
    } },

  /* ───────────── 27. Le bon bus ───────────── */
  { id: "av-bon-bus", level: "A1", emoji: "🚌",
    t: { fr: "Le bon bus", tr: "Doğru otobüs", en: "The right bus" },
    goal: { fr: "Trouvez le bon bus pour aller au centre sportif, puis descendez au bon arrêt.", tr: "Spor merkezine gitmek için doğru otobüsü bulun, sonra doğru durakta inin.", en: "Find the right bus to the sports centre, then get off at the right stop." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous êtes à un arrêt de bus. Il y a trois lignes. Une dame âgée attend à côté de vous.", tr: "Bir otobüs durağındasınız. Üç hat var. Yanınızda yaşlı bir hanım bekliyor.", en: "You're at a bus stop. There are three lines. An elderly lady is waiting next to you." },
           choices: [
             { fr: "Salut ! C'est où, le bus ?", tr: "Selam! Otobüs nerede?", en: "Hi! Where's the bus?", ok: false,
               fb: { fr: "« Salut », c'est pour les amis 😉. Avec une dame que vous ne connaissez pas : « excusez-moi, madame ».", tr: "« Salut » arkadaşlar içindir 😉. Tanımadığınız bir hanıma: « excusez-moi, madame ».", en: "« Salut » is for friends 😉. With a lady you don't know: « excusez-moi, madame »." } },
             { fr: "Pardon, madame, vous êtes le bus 12 ? Vous allez au centre sportif ?", tr: "Pardon hanımefendi, siz 12 numaralı otobüs müsünüz? Spor merkezine mi gidiyorsunuz?", en: "Excuse me, madam, are you the number 12 bus? Are you going to the sports centre?", ok: false,
               fb: { fr: "La dame n'est pas un bus 🚌😄 ! Demandez « le bus pour le centre sportif, c'est ici ? ».", tr: "Hanımefendi otobüs değil 🚌😄! « Le bus pour le centre sportif, c'est ici ? » diye sorun.", en: "The lady isn't a bus 🚌😄! Ask « le bus pour le centre sportif, c'est ici ? »." } },
             { fr: "Excusez-moi, madame. Le bus pour le centre sportif, c'est ici ?", tr: "Affedersiniz hanımefendi. Spor merkezine giden otobüs burada mı?", en: "Excuse me, madam. Is the bus to the sports centre here?", ok: true, go: "b" }
           ] },
      b: { say: [["F", "Oui ! Prenez le 12, direction Gare. Attention, pas le 12 direction Hôpital !"]],
           choices: [
             { fr: "Le 12 direction Gare. Merci beaucoup, madame !", tr: "Gar yönündeki 12. Çok teşekkürler, hanımefendi!", en: "The 12 towards the station. Thank you very much, madam!", ok: true, go: "c" },
             { fr: "Merci ! Et il passe à quelle heure ?", tr: "Teşekkürler! Peki saat kaçta geçiyor?", en: "Thanks! And what time does it come?", ok: true, go: "b2" },
             { fr: "D'accord, le 12 direction Hôpital. Merci beaucoup !", tr: "Tamam, Hastane yönündeki 12. Çok teşekkürler!", en: "OK, the 12 towards Hôpital. Thank you very much!", ok: false,
               fb: { fr: "Oh non, c'est le contraire 🙈 ! Elle a dit « direction Gare ». Pas l'hôpital, vous n'êtes pas malade 😄.", tr: "Ah hayır, tam tersi 🙈! « Direction Gare » dedi. Hastane değil, hasta değilsiniz ki 😄.", en: "Oh no, it's the opposite 🙈! She said « direction Gare ». Not the hospital, you're not ill 😄." } }
           ] },
      b2: { say: [["F", "Toutes les 10 minutes. Regardez, le prochain est à 14 h 20."]],
           choices: [
             { fr: "Dans 10 ans ? Oh là là ! Merci, madame.", tr: "10 yıl sonra mı? Aman! Teşekkürler hanımefendi.", en: "In 10 years? Oh dear! Thank you, madam.", ok: false,
               fb: { fr: "Heureusement, non 😅 ! Elle a dit « toutes les 10 minutes ». Remerciez-la gentiment.", tr: "Neyse ki hayır 😅! « Toutes les 10 minutes » (her 10 dakikada bir) dedi. Ona nazikçe teşekkür edin.", en: "Luckily not 😅! She said « toutes les 10 minutes » (every 10 minutes). Thank her nicely." } },
             { fr: "Merci, madame, c'est très gentil.", tr: "Teşekkürler hanımefendi, çok naziksiniz.", en: "Thank you, madam, that's very kind.", ok: true, go: "c" }
           ] },
      c: { scene: { fr: "Un bus 12 arrive. Sur l'écran, vous lisez : « 12 – Hôpital ».", tr: "Bir 12 numaralı otobüs geliyor. Ekranda « 12 – Hôpital » yazıyor.", en: "A number 12 bus arrives. On the screen you read: « 12 – Hôpital »." },
           choices: [
             { fr: "Hôpital ? Ce n'est pas le bon. J'attends.", tr: "Hastane mi? Doğru otobüs değil. Bekliyorum.", en: "Hospital? It's not the right one. I'll wait.", ok: true, go: "d" },
             { fr: "C'est le 12 ! Super, je monte vite !", tr: "Bu 12! Süper, hemen biniyorum!", en: "It's the 12! Great, I'll hop on quickly!", ok: false, go: "c_err",
               fb: { fr: "Attention, regardez l'écran : c'est direction Hôpital… 🙈", tr: "Dikkat, ekrana bakın: Hastane yönü… 🙈", en: "Careful, look at the screen: it's going to the hospital… 🙈" } }
           ] },
      c_err: { say: [["M", "Bonjour ! Attention, madame, ce bus va à l'hôpital. Vous allez où ?"]],
           choices: [
             { fr: "Je vais bien, merci ! Et vous, monsieur ?", tr: "İyiyim, teşekkürler! Ya siz beyefendi?", en: "I'm fine, thanks! And you, sir?", ok: false,
               fb: { fr: "Tant mieux 😄 ! Mais « vous allez où ? » = quelle destination. « Comment allez-vous ? » = ça va ?", tr: "Ne güzel 😄! Ama « vous allez où ? » = nereye gidiyorsunuz. « Comment allez-vous ? » = nasılsınız.", en: "Good 😄! But « vous allez où ? » = where are you going. « Comment allez-vous ? » = how are you." } },
             { fr: "Au centre sportif. Oh pardon, je descends !", tr: "Spor merkezine. Ah pardon, iniyorum!", en: "To the sports centre. Oh sorry, I'm getting off!", ok: true, go: "d" }
           ] },
      d: { scene: { fr: "3 minutes plus tard, un autre bus arrive : « 12 – Gare ». C'est le bon ! Vous montez.", tr: "3 dakika sonra başka bir otobüs geliyor: « 12 – Gare ». Doğru otobüs bu! Biniyorsunuz.", en: "3 minutes later another bus arrives: « 12 – Gare ». That's the one! You get on." },
           say: [["M", "Bonjour, madame !"]],
           choices: [
             { fr: "Bonjour ! Un ticket, s'il vous plaît.", tr: "Merhaba! Bir bilet, lütfen.", en: "Hello! One ticket, please.", ok: true, go: "e" },
             { fr: "Bonjour ! J'ai déjà un ticket.", tr: "Merhaba! Biletim zaten var.", en: "Hello! I already have a ticket.", ok: true, go: "e2" },
             { fr: "Bonsoir, monsieur ! Un ticket, s'il vous plaît.", tr: "İyi akşamlar beyefendi! Bir bilet, lütfen.", en: "Good evening, sir! A ticket, please.", ok: false,
               fb: { fr: "Il est 14 h 20, le soleil brille ☀️😄 ! L'après-midi, on dit encore « bonjour ».", tr: "Saat 14.20, güneş parlıyor ☀️😄! Öğleden sonra hâlâ « bonjour » denir.", en: "It's 2:20 pm, the sun is shining ☀️😄! In the afternoon you still say « bonjour »." } }
           ] },
      e: { say: [["M", "2 €, s'il vous plaît."]],
           choices: [
             { fr: "Voilà 2 €.", tr: "Buyurun, 2 €.", en: "Here's 2 €.", ok: true, go: "f" },
             { fr: "Voilà 2 centimes.", tr: "Buyurun, 2 sent.", en: "Here's 2 cents.", ok: false,
               fb: { fr: "C'est un tout petit peu court 🪙😄 ! Il faut « 2 euros ».", tr: "Biraz eksik kaldı 🪙😄! « 2 euros » gerekiyor.", en: "That's a tiny bit short 🪙😄! You need « 2 euros »." } }
           ] },
      e2: { say: [["M", "Très bien. Validez votre ticket dans la machine, là."]],
           choices: [
             { fr: "Pardon, je n'ai pas de machine.", tr: "Pardon, makinem yok.", en: "Sorry, I don't have a machine.", ok: false,
               fb: { fr: "Pas besoin, elle est dans le bus 😄 ! Il montre la petite machine jaune. Dites « d'accord, merci ».", tr: "Gerek yok, makine otobüste 😄! Küçük sarı makineyi gösteriyor. « D'accord, merci » deyin.", en: "No need, it's in the bus 😄! He's pointing at the little yellow machine. Say « d'accord, merci »." } },
             { fr: "D'accord, merci. Bip ! C'est bon ?", tr: "Tamam, teşekkürler. Bip! Oldu mu?", en: "OK, thanks. Beep! Is that OK?", ok: true, go: "f" }
           ] },
      f: { say: [["M", "C'est bon ! Allez vous asseoir, madame."]],
           choices: [
             { fr: "Vous me dites quand c'est le centre sportif, s'il vous plaît ?", tr: "Spor merkezine gelince bana söyler misiniz, lütfen?", en: "Will you tell me when we get to the sports centre, please?", ok: true, go: "g" },
             { fr: "Tu peux me dire quand c'est le centre sportif, s'il te plaît ?", tr: "Spor merkezine gelince bana söyleyebilir misin, lütfen?", en: "Can you tell me when it's the sports centre, please?", ok: false,
               fb: { fr: "« Tu » avec un chauffeur, c'est trop familier 😉. Dites « vous me dites quand… ? ».", tr: "Şoföre « tu » demek fazla samimi 😉. « Vous me dites quand… ? » deyin.", en: "« Tu » with a driver is too familiar 😉. Say « vous me dites quand… ? »." } },
             { fr: "Merci ! Je m'assois sur vous, s'il vous plaît ?", tr: "Teşekkürler! Üstünüze oturabilir miyim, lütfen?", en: "Thanks! Can I sit on you, please?", ok: false,
               fb: { fr: "Surtout pas, il conduit 😂🚌 ! Demandez plutôt « vous pouvez me dire quand c'est le centre sportif ? ».", tr: "Asla, araba kullanıyor 😂🚌! Bunun yerine « vous pouvez me dire quand c'est le centre sportif ? » diye sorun.", en: "Definitely not, he's driving 😂🚌! Ask « vous pouvez me dire quand c'est le centre sportif ? » instead." } }
           ] },
      g: { say: [["M", "Pas de problème. C'est dans 5 arrêts. Je vous dis."]],
           choices: [
             { fr: "Merci beaucoup, monsieur !", tr: "Çok teşekkürler, beyefendi!", en: "Thank you very much, sir!", ok: true, go: "h" },
             { fr: "Merci ! Dans 5 heures ? C'est loin !", tr: "Teşekkürler! 5 saat sonra mı? Uzakmış!", en: "Thanks! In 5 hours? That's far!", ok: false,
               fb: { fr: "Pas 5 heures, 5 arrêts 🚏😄 ! Environ 10 minutes. Dites simplement « merci beaucoup ».", tr: "5 saat değil, 5 durak 🚏😄! Yaklaşık 10 dakika. Sadece « merci beaucoup » deyin.", en: "Not 5 hours, 5 stops 🚏😄! About 10 minutes. Just say « merci beaucoup »." } }
           ] },
      h: { scene: { fr: "Vous vous asseyez. Un petit garçon regarde votre gros sac de sport.", tr: "Oturuyorsunuz. Küçük bir çocuk büyük spor çantanıza bakıyor.", en: "You sit down. A little boy is looking at your big sports bag." },
           say: [["K", "Madame, tu vas faire du sport ?"]],
           choices: [
             { fr: "Oui, je vais faire le sport.", tr: "Evet, spor yapmaya gidiyorum.", en: "Yes, I'm going to do the sport.", ok: false,
               fb: { fr: "Presque ! On dit « faire du sport », comme « faire du vélo » 🚴‍♀️.", tr: "Az kaldı! « Faire du sport » denir, tıpkı « faire du vélo » gibi 🚴‍♀️.", en: "Almost! You say « faire du sport », like « faire du vélo » 🚴‍♀️." } },
             { fr: "Oui, je vais au centre sportif. Et toi ?", tr: "Evet, spor merkezine gidiyorum. Ya sen?", en: "Yes, I'm going to the sports centre. And you?", ok: true, go: "i" },
             { fr: "Oui, je vais à le centre sportif. Et toi ?", tr: "Evet, spor merkezine gidiyorum. Ya sen?", en: "Yes, I'm going to the the sports centre. And you?", ok: false,
               fb: { fr: "« À + le » devient « au » : « je vais au centre sportif » 😉.", tr: "« À + le » birleşip « au » olur: « je vais au centre sportif » 😉.", en: "« À + le » becomes « au »: « je vais au centre sportif » 😉." } }
           ] },
      i: { say: [["K", "Moi, je vais à la piscine avec mamie !"], ["M", "Madame ! Le centre sportif, c'est ici !"]],
           choices: [
             { fr: "Merci, monsieur ! Bonne nuit et à demain !", tr: "Teşekkürler beyefendi! İyi geceler, yarın görüşürüz!", en: "Thank you, sir! Good night and see you tomorrow!", ok: false,
               fb: { fr: "Il n'est pas encore l'heure de dormir 😴😄 ! L'après-midi : « bonne journée ».", tr: "Daha uyku saati değil 😴😄! Öğleden sonra: « bonne journée ».", en: "It's not bedtime yet 😴😄! In the afternoon: « bonne journée »." } },
             { fr: "Merci ! Bonne journée, et bonne piscine !", tr: "Teşekkürler! İyi günler, havuz keyifli geçsin!", en: "Thanks! Have a good day, and enjoy the pool!", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["K", "Au revoir, madame !"]],
             scene: { fr: "Vous descendez juste devant le centre sportif. Le bon bus, le bon arrêt : bravo ! 🚌🎉", tr: "Tam spor merkezinin önünde iniyorsunuz. Doğru otobüs, doğru durak: bravo! 🚌🎉", en: "You get off right outside the sports centre. Right bus, right stop: well done! 🚌🎉" } }
    } },

  /* ───────────── 28. Un gâteau pour Sophie ───────────── */
  { id: "av-gateau-sophie", level: "A1", emoji: "🎂",
    t: { fr: "Un gâteau pour Sophie", tr: "Sophie için bir pasta", en: "A cake for Sophie" },
    goal: { fr: "Commandez un gâteau d'anniversaire pour Sophie, votre responsable à la salle de sport.", tr: "Spor salonundaki müdürünüz Sophie için bir doğum günü pastası sipariş edin.", en: "Order a birthday cake for Sophie, your manager at the gym." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Samedi, c'est l'anniversaire de Sophie. Vous entrez dans une pâtisserie. Tout est beau !", tr: "Cumartesi Sophie'nin doğum günü. Bir pastaneye giriyorsunuz. Her şey çok güzel!", en: "Saturday is Sophie's birthday. You walk into a cake shop. Everything looks beautiful!" },
           say: [["F", "Bonjour madame ! Qu'est-ce qu'il vous faut ?"]],
           choices: [
             { fr: "Bonjour ! Je voudrais commander un anniversaire.", tr: "Merhaba! Bir doğum günü sipariş etmek istiyorum.", en: "Hello! I'd like to order a birthday.", ok: false,
               fb: { fr: "Une fête entière ? Elle fait seulement les gâteaux 😄🎉 ! Dites « un gâteau d'anniversaire ».", tr: "Koca bir parti mi? O sadece pasta yapıyor 😄🎉! « Un gâteau d'anniversaire » deyin.", en: "A whole party? She only makes cakes 😄🎉! Say « un gâteau d'anniversaire »." } },
             { fr: "Bonjour ! Je voudrais commander un gâteau d'anniversaire.", tr: "Merhaba! Bir doğum günü pastası sipariş etmek istiyorum.", en: "Hello! I'd like to order a birthday cake.", ok: true, go: "b" },
             { fr: "Bonjour ! C'est mon anniversaire, alors donnez-moi un gâteau.", tr: "Merhaba! Benim doğum günüm, o yüzden bana bir pasta verin.", en: "Hello! It's my birthday, so give me a cake.", ok: false,
               fb: { fr: "Ce n'est pas votre anniversaire, c'est celui de Sophie 😉. Et « donnez-moi », c'est un peu sec : « je voudrais… ».", tr: "Sizin doğum gününüz değil, Sophie'nin 😉. Ayrıca « donnez-moi » biraz sert: « je voudrais… » deyin.", en: "It's not your birthday, it's Sophie's 😉. And « donnez-moi » is a bit blunt: « je voudrais… »." } }
           ] },
      b: { say: [["F", "Avec plaisir ! C'est pour combien de personnes ?"]],
           choices: [
             { fr: "Pour 10 ans, s'il vous plaît.", tr: "10 yıl için, lütfen.", en: "For 10 years, please.", ok: false,
               fb: { fr: "Sophie n'a pas 10 ans 😄 ! Elle demande le nombre de personnes : « pour 10 personnes ».", tr: "Sophie 10 yaşında değil 😄! Kişi sayısını soruyor: « pour 10 personnes ».", en: "Sophie isn't 10 😄! She's asking how many people: « pour 10 personnes »." } },
             { fr: "Pour ma responsable. Elle s'appelle Sophie.", tr: "Müdürüm için. Adı Sophie.", en: "For my manager. Her name is Sophie.", ok: false,
               fb: { fr: "C'est gentil pour Sophie 💛, mais la question, c'est « combien de personnes ? ». Par exemple : « pour 10 personnes ».", tr: "Sophie için çok hoş 💛 ama soru « kaç kişi? ». Örneğin: « pour 10 personnes ».", en: "Lovely for Sophie 💛, but the question is « how many people? ». For example: « pour 10 personnes »." } },
             { fr: "Pour 10 personnes, s'il vous plaît.", tr: "10 kişilik, lütfen.", en: "For 10 people, please.", ok: true, go: "c" }
           ] },
      c: { say: [["F", "Très bien. Vous le voulez au chocolat, aux fraises ou au citron ?"]],
           choices: [
             { fr: "Au chocolat ! Sophie adore le chocolat.", tr: "Çikolatalı! Sophie çikolatayı çok sever.", en: "Chocolate! Sophie loves chocolate.", ok: true, go: "d1" },
             { fr: "Aux fraises, s'il vous plaît. C'est plus léger.", tr: "Çilekli, lütfen. Daha hafif.", en: "Strawberry, please. It's lighter.", ok: true, go: "d2" },
             { fr: "À le chocolat, s'il vous plaît. Sophie adore ça.", tr: "Çikolata-ya, lütfen. Sophie buna bayılır.", en: "To the chocolate, please. Sophie loves it.", ok: false,
               fb: { fr: "« À + le » = « au » : on dit « au chocolat », comme « un café au lait » ☕.", tr: "« À + le » = « au »: « au chocolat » denir, tıpkı « un café au lait » gibi ☕.", en: "« À + le » = « au »: you say « au chocolat », like « un café au lait » ☕." } }
           ] },
      d1: { say: [["F", "Excellent choix ! Avec de la crème ou sans crème ?"]],
           choices: [
             { fr: "Avec de la crème solaire, s'il vous plaît.", tr: "Güneş kremiyle, lütfen.", en: "With sun cream, please.", ok: false,
               fb: { fr: "Pour la plage, oui 🏖️😄 ! Pour un gâteau, c'est juste « avec de la crème ».", tr: "Plaj için evet 🏖️😄! Pasta için sadece « avec de la crème » denir.", en: "For the beach, yes 🏖️😄! For a cake it's just « avec de la crème »." } },
             { fr: "Sans crème, s'il vous plaît.", tr: "Kremasız, lütfen.", en: "Without cream, please.", ok: true, go: "e" },
             { fr: "Avec un peu de crème, s'il vous plaît.", tr: "Biraz kremalı, lütfen.", en: "With a little cream, please.", ok: true, go: "e" }
           ] },
      d2: { say: [["F", "Les fraises sont très bonnes en ce moment ! Je mets aussi de la chantilly ?"]],
           choices: [
             { fr: "Oui, avec plaisir !", tr: "Evet, memnuniyetle!", en: "Yes, with pleasure!", ok: true, go: "e" },
             { fr: "Oui, une chantilly beaucoup.", tr: "Evet, bir krem şanti çok.", en: "Yes, a whipped cream lots.", ok: false,
               fb: { fr: "Le mot « beaucoup » va avant : « beaucoup de chantilly » 🍓. Ou simplement « oui, avec plaisir ».", tr: "« Beaucoup » önce gelir: « beaucoup de chantilly » 🍓. Ya da sadece « oui, avec plaisir ».", en: "« Beaucoup » goes first: « beaucoup de chantilly » 🍓. Or simply « oui, avec plaisir »." } }
           ] },
      e: { say: [["F", "Et j'écris quelque chose sur le gâteau ?"]],
           choices: [
             { fr: "Oui, j'écris avec mon stylo, pas de problème.", tr: "Evet, kendi kalemimle yazıyorum, sorun değil.", en: "Yes, I'll write with my pen, no problem.", ok: false,
               fb: { fr: "Un stylo sur un gâteau ? Pas très bon 😄🖊️ ! Elle demande le message. Par exemple : « Joyeux anniversaire, Sophie ! ».", tr: "Pastanın üstüne kalem mi? Pek lezzetli değil 😄🖊️! Mesajı soruyor. Örneğin: « Joyeux anniversaire, Sophie ! ».", en: "A pen on a cake? Not very tasty 😄🖊️! She's asking for the message. For example: « Joyeux anniversaire, Sophie ! »." } },
             { fr: "Oui : « Bonne année, Sophie ! »", tr: "Evet: « Mutlu yıllar, Sophie! »", en: "Yes: « Happy New Year, Sophie! »", ok: false,
               fb: { fr: "« Bonne année », c'est pour le 1er janvier 🎆 ! Pour un anniversaire : « Joyeux anniversaire ! ».", tr: "« Bonne année » 1 Ocak içindir 🎆! Doğum günü için: « Joyeux anniversaire ! ».", en: "« Bonne année » is for 1 January 🎆! For a birthday: « Joyeux anniversaire ! »." } },
             { fr: "Oui : « Joyeux anniversaire, Sophie ! »", tr: "Evet: « İyi ki doğdun, Sophie! »", en: "Yes: « Happy birthday, Sophie! »", ok: true, go: "f" }
           ] },
      f: { say: [["F", "C'est noté. C'est pour quel jour ?"]],
           choices: [
             { fr: "Pour samedi, s'il vous plaît.", tr: "Cumartesi için, lütfen.", en: "For Saturday, please.", ok: true, go: "g" },
             { fr: "C'est pour ses 35 ans, merci.", tr: "35 yaşı için, teşekkürler.", en: "It's for her 35th birthday, thanks.", ok: false,
               fb: { fr: "Elle demande le jour, pas l'âge 🤫😄 ! Et l'âge de Sophie, c'est un secret. Dites « pour samedi ».", tr: "Yaşı değil, günü soruyor 🤫😄! Hem Sophie'nin yaşı bir sır. « Pour samedi » deyin.", en: "She's asking the day, not the age 🤫😄! And Sophie's age is a secret. Say « pour samedi »." } }
           ] },
      g: { say: [["F", "Samedi, d'accord. Vous venez le chercher à quelle heure ? Nous ouvrons à 8 h."]],
           choices: [
             { fr: "Je viens le chercher à la pâtisserie.", tr: "Onu pastaneden almaya geliyorum.", en: "I'm coming to pick it up at the cake shop.", ok: false,
               fb: { fr: "Oui, bien sûr 😄 ! Mais elle demande l'heure. Par exemple : « à 10 h ».", tr: "Evet, tabii ki 😄! Ama saati soruyor. Örneğin: « à 10 h ».", en: "Yes, of course 😄! But she's asking the time. For example: « à 10 h »." } },
             { fr: "À 10 h, c'est possible ?", tr: "Saat 10'da, mümkün mü?", en: "At 10, is that possible?", ok: true, go: "h" },
             { fr: "À 10 h du soir.", tr: "Akşam 10'da.", en: "At 10 pm.", ok: false,
               fb: { fr: "À 22 h, la pâtissière dort 😴🎂 ! Choisissez une heure le matin, par exemple « à 10 h ».", tr: "Saat 22'de pastacı uyuyor 😴🎂! Sabah bir saat seçin, örneğin « à 10 h ».", en: "At 10 pm the baker is asleep 😴🎂! Pick a morning time, for example « à 10 h »." } }
           ] },
      h: { say: [["F", "Oui, parfait. Il fait 32 €. Vous payez maintenant ou samedi ?"]],
           choices: [
             { fr: "Oui, il fait très beau aujourd'hui !", tr: "Evet, bugün hava çok güzel!", en: "Yes, the weather's lovely today!", ok: false,
               fb: { fr: "Ici, « il fait 32 € » = il coûte 32 €. Ce n'est pas la météo ☀️😄 ! Dites quand vous payez.", tr: "Burada « il fait 32 € » = 32 € tutuyor. Hava durumu değil ☀️😄! Ne zaman ödeyeceğinizi söyleyin.", en: "Here « il fait 32 € » = it costs 32 €. It's not the weather ☀️😄! Say when you'll pay." } },
             { fr: "Maintenant, par carte.", tr: "Şimdi, kartla.", en: "Now, by card.", ok: true, go: "i1" },
             { fr: "Samedi, c'est possible ?", tr: "Cumartesi, mümkün mü?", en: "Saturday, is that possible?", ok: true, go: "i2" }
           ] },
      i1: { say: [["F", "C'est payé ! Voici votre ticket. Gardez-le pour samedi."]],
           choices: [
             { fr: "Merci ! À samedi !", tr: "Teşekkürler! Cumartesi görüşürüz!", en: "Thank you! See you Saturday!", ok: true, go: "fin" },
             { fr: "Merci beaucoup ! À hier !", tr: "Çok teşekkürler! Dün görüşürüz!", en: "Thanks a lot! See you yesterday!", ok: false,
               fb: { fr: "« À hier » ? Il faut une machine à remonter le temps ⏰😄 ! Dites « à samedi ».", tr: "« Dün görüşürüz » mü? Zaman makinesi lazım ⏰😄! « À samedi » deyin.", en: "« See you yesterday »? You'd need a time machine ⏰😄! Say « à samedi »." } }
           ] },
      i2: { say: [["F", "Bien sûr. Vous me laissez votre numéro de téléphone ?"]],
           choices: [
             { fr: "Oui : j'ai 30 ans, c'est le 06.", tr: "Evet: 30 yaşındayım, 06 ile başlıyor.", en: "Yes: I'm 30, it starts with 06.", ok: false,
               fb: { fr: "Elle veut votre numéro, pas votre âge 📞😄 ! Dites « c'est le 06… ».", tr: "Yaşınızı değil, numaranızı istiyor 📞😄! « C'est le 06… » deyin.", en: "She wants your number, not your age 📞😄! Say « c'est le 06… »." } },
             { fr: "Oui, c'est le 06 00 00 00 41.", tr: "Evet, 06 00 00 00 41.", en: "Yes, it's 06 00 00 00 41.", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["F", "Parfait ! Votre gâteau sera prêt samedi. Sophie a de la chance !"]],
             scene: { fr: "Samedi, Sophie va avoir une belle surprise. Et vous avez tout commandé en français ! 🎂🎉", tr: "Cumartesi Sophie'yi güzel bir sürpriz bekliyor. Ve her şeyi Fransızca sipariş ettiniz! 🎂🎉", en: "On Saturday Sophie is in for a lovely surprise. And you ordered everything in French! 🎂🎉" } }
    } },

  /* ───────────── 29. Une plante pour le balcon ───────────── */
  { id: "av-jardinerie", level: "A1", emoji: "🪴",
    t: { fr: "Une plante pour le balcon", tr: "Balkon için bir bitki", en: "A plant for the balcony" },
    goal: { fr: "Achetez une plante, un pot et de la terre à la jardinerie, et demandez comment l'arroser.", tr: "Bahçe merkezinden bir bitki, bir saksı ve toprak alın; nasıl sulanacağını sorun.", en: "Buy a plant, a pot and some soil at the garden centre, and ask how to water it." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous êtes dans une jardinerie. Il y a des fleurs partout. Un vendeur arrive.", tr: "Bir bahçe merkezindesiniz. Her yerde çiçek var. Bir satıcı geliyor.", en: "You're in a garden centre. There are flowers everywhere. A salesman comes over." },
           say: [["M", "Bonjour madame ! Vous cherchez quelque chose ?"]],
           choices: [
             { fr: "Oui, je cherche mon balcon. Il est où, ici ?", tr: "Evet, balkonumu arıyorum. Burada nerede?", en: "Yes, I'm looking for my balcony. Where is it here?", ok: false,
               fb: { fr: "Votre balcon est chez vous, pas ici 😄 ! Dites « je cherche une plante pour mon balcon ».", tr: "Balkonunuz evinizde, burada değil 😄! « Je cherche une plante pour mon balcon » deyin.", en: "Your balcony is at home, not here 😄! Say « je cherche une plante pour mon balcon »." } },
             { fr: "Non, je cherche quelque chose.", tr: "Hayır, bir şey arıyorum.", en: "No, I'm looking for something.", ok: false,
               fb: { fr: "« Non » et « je cherche » ensemble ? Il est perdu 🤔😄 ! Dites « oui, je cherche une plante ».", tr: "« Hayır » ve « arıyorum » bir arada mı? Kafası karıştı 🤔😄! « Oui, je cherche une plante » deyin.", en: "« No » and « I'm looking » together? He's lost 🤔😄! Say « oui, je cherche une plante »." } },
             { fr: "Oui, je cherche une plante pour mon balcon.", tr: "Evet, balkonum için bir bitki arıyorum.", en: "Yes, I'm looking for a plant for my balcony.", ok: true, go: "b" }
           ] },
      b: { say: [["M", "Avec plaisir ! Votre balcon est au soleil ou à l'ombre ?"]],
           choices: [
             { fr: "Au soleil, toute la journée.", tr: "Güneşte, bütün gün.", en: "In the sun, all day.", ok: true, go: "c1" },
             { fr: "À l'ombre. Il n'y a pas beaucoup de soleil.", tr: "Gölgede. Pek güneş almıyor.", en: "In the shade. There isn't much sun.", ok: true, go: "c2" },
             { fr: "Il est au troisième étage, à côté de la cuisine.", tr: "Üçüncü katta, mutfağın yanında.", en: "It's on the third floor, next to the kitchen.", ok: false,
               fb: { fr: "Bonne info pour le livreur 😄 ! Mais il demande : soleil ou ombre ? Les plantes, ça compte !", tr: "Kurye için iyi bilgi 😄! Ama güneş mi gölge mi diye soruyor. Bitkiler için önemli!", en: "Good info for the delivery man 😄! But he's asking: sun or shade? It matters for plants!" } }
           ] },
      c1: { say: [["M", "Alors, je vous conseille une lavande. Elle adore le soleil et elle sent très bon !"]],
           choices: [
             { fr: "Moi aussi, je sens très bon ! C'est mon parfum.", tr: "Ben de çok güzel kokuyorum! Parfümüm sayesinde.", en: "I smell lovely too! It's my perfume.", ok: false,
               fb: { fr: "Sûrement 😄🌸 ! Mais parlez de la plante : « oh oui, elle sent très bon ! ».", tr: "Eminim öyledir 😄🌸! Ama bitkiden bahsedin: « oh oui, elle sent très bon ! ».", en: "Surely 😄🌸! But talk about the plant: « oh oui, elle sent très bon ! »." } },
             { fr: "Oh oui, elle sent très bon ! Je la prends.", tr: "Ah evet, çok güzel kokuyor! Onu alıyorum.", en: "Oh yes, it smells lovely! I'll take it.", ok: true, go: "d" }
           ] },
      c2: { say: [["M", "Alors, une fougère. Elle n'aime pas trop le soleil, et elle est très facile."]],
           choices: [
             { fr: "Très bien, je prends la fougère.", tr: "Çok iyi, eğreltiotunu alıyorum.", en: "Very good, I'll take the fern.", ok: true, go: "d" },
             { fr: "Elle est facile ? Elle parle français ?", tr: "Kolay mı? Fransızca konuşuyor mu?", en: "It's easy? Does it speak French?", ok: false,
               fb: { fr: "Hélas, non 😄🌿 ! « Facile », ici, veut dire qu'elle ne demande pas beaucoup de travail. Dites « je la prends ».", tr: "Ne yazık ki hayır 😄🌿! Buradaki « facile », bakımı az demek. « Je la prends » deyin.", en: "Sadly not 😄🌿! « Facile » here means it's low-maintenance. Say « je la prends »." } }
           ] },
      d: { say: [["M", "Très bon choix. Vous avez un pot ?"]],
           choices: [
             { fr: "Non, je n'ai pas un pot.", tr: "Hayır, bir saksım yok.", en: "No, I don't have a pot.", ok: false,
               fb: { fr: "Petit piège classique : après « ne… pas », « un » devient « de » : « je n'ai pas de pot ».", tr: "Klasik küçük tuzak: « ne… pas »dan sonra « un », « de » olur: « je n'ai pas de pot ».", en: "Classic little trap: after « ne… pas », « un » becomes « de »: « je n'ai pas de pot »." } },
             { fr: "Oui, j'ai un pot de confiture.", tr: "Evet, bir kavanoz reçelim var.", en: "Yes, I have a jar of jam.", ok: false,
               fb: { fr: "Délicieux, mais un peu petit pour une plante 🍓😄 ! Dites « non, je n'ai pas de pot ».", tr: "Lezzetli ama bir bitki için biraz küçük 🍓😄! « Non, je n'ai pas de pot » deyin.", en: "Delicious, but a bit small for a plant 🍓😄! Say « non, je n'ai pas de pot »." } },
             { fr: "Non, je n'ai pas de pot.", tr: "Hayır, saksım yok.", en: "No, I don't have a pot.", ok: true, go: "e" }
           ] },
      e: { say: [["M", "Nous avons des grands, des moyens et des petits pots."]],
           choices: [
             { fr: "Un moyen, s'il vous plaît. Mon balcon est petit.", tr: "Orta boy, lütfen. Balkonum küçük.", en: "A medium one, please. My balcony is small.", ok: true, go: "f" },
             { fr: "Un moyen, s'il vous plaît. Mon balcon est petite.", tr: "Orta boy, lütfen. Balkonum küçük.", en: "A medium one, please. My balcony is small.", ok: false,
               fb: { fr: "Presque ! « Balcon » est masculin : « mon balcon est petit » 😉.", tr: "Az kaldı! « Balcon » erkek cinsiyetlidir: « mon balcon est petit » 😉.", en: "Almost! « Balcon » is masculine: « mon balcon est petit » 😉." } }
           ] },
      f: { say: [["M", "Et il faut de la terre. Un sac de 10 litres, ça va ?"]],
           choices: [
             { fr: "Oui, un sac de 10 litres, ça va. Merci.", tr: "Evet, 10 litrelik bir torba yeter. Teşekkürler.", en: "Yes, a 10-litre bag is fine. Thanks.", ok: true, go: "g" },
             { fr: "Oui, un sac de 10 kilomètres, merci.", tr: "Evet, 10 kilometrelik bir torba, teşekkürler.", en: "Yes, a 10-kilometre bag, thanks.", ok: false,
               fb: { fr: "10 kilomètres de terre ? C'est un très, très grand balcon 😄 ! Il a dit « 10 litres ».", tr: "10 kilometre toprak mı? Bu çok ama çok büyük bir balkon 😄! « 10 litres » dedi.", en: "10 kilometres of soil? That's a very, very big balcony 😄! He said « 10 litres »." } }
           ] },
      g: { say: [["M", "Tout ça, c'est lourd ! Vous êtes en voiture ?"]],
           choices: [
             { fr: "Non, je suis à pied. Vous livrez à domicile ?", tr: "Hayır, yayayım. Eve teslimat yapıyor musunuz?", en: "No, I'm on foot. Do you deliver?", ok: true, go: "h1" },
             { fr: "Oui, ma voiture est sur le parking.", tr: "Evet, arabam otoparkta.", en: "Yes, my car is in the car park.", ok: true, go: "h2" },
             { fr: "Non, je suis en pied. Vous livrez à domicile ?", tr: "Hayır, ayaklayım. Eve teslimat yapıyor musunuz?", en: "No, I'm in foot. Do you deliver?", ok: false,
               fb: { fr: "On dit « en voiture », « en bus »… mais « à pied » 🚶‍♀️ ! Et à vélo, c'est « à vélo ».", tr: "« En voiture », « en bus » denir… ama « à pied » 🚶‍♀️! Bisikletle de « à vélo ».", en: "You say « en voiture », « en bus »… but « à pied » 🚶‍♀️! And by bike: « à vélo »." } }
           ] },
      h1: { say: [["M", "Oui ! Nous livrons demain matin, pour 5 €."]],
           choices: [
             { fr: "D'accord, demain. Vous livrez à moi ?", tr: "Tamam, yarın. Bana mı teslim ediyorsunuz?", en: "OK, tomorrow. You deliver to me?", ok: false,
               fb: { fr: "On dit « chez moi » pour la maison 🏠. Mais il a déjà dit oui ! Dites « d'accord, demain, c'est parfait ».", tr: "Ev için « chez moi » denir 🏠. Ama zaten evet dedi! « D'accord, demain, c'est parfait » deyin.", en: "For your home you say « chez moi » 🏠. But he already said yes! Say « d'accord, demain, c'est parfait »." } },
             { fr: "D'accord, demain, c'est parfait.", tr: "Tamam, yarın harika.", en: "OK, tomorrow is perfect.", ok: true, go: "i" }
           ] },
      h2: { say: [["M", "Parfait. Je vous aide à porter le sac jusqu'à la voiture."]],
           choices: [
             { fr: "Merci, vous êtes très lourd !", tr: "Teşekkürler, siz çok ağırsınız!", en: "Thanks, you're very heavy!", ok: false,
               fb: { fr: "Aïe, pauvre vendeur 😅 ! C'est le sac qui est lourd. Dites « merci, c'est très gentil ».", tr: "Eyvah, zavallı satıcı 😅! Ağır olan torba. « Merci, c'est très gentil » deyin.", en: "Ouch, poor salesman 😅! It's the bag that's heavy. Say « merci, c'est très gentil »." } },
             { fr: "Merci, c'est très gentil !", tr: "Teşekkürler, çok naziksiniz!", en: "Thank you, that's very kind!", ok: true, go: "i" }
           ] },
      i: { say: [["M", "Alors : la plante, le pot et la terre, ça fait 28 €."]],
           choices: [
             { fr: "Voilà. Et je dois arroser souvent ?", tr: "Buyurun. Peki sık sık sulamam gerekiyor mu?", en: "Here you go. And do I need to water it often?", ok: true, go: "j" },
             { fr: "Ça fait mal ? Où ça ? Je ne comprends pas.", tr: "Acıtıyor mu? Neresi? Anlamıyorum.", en: "Does it hurt? Where? I don't understand.", ok: false,
               fb: { fr: "Seulement au porte-monnaie 😄💶 ! « Ça fait 28 € » = le prix est 28 €. Payez et posez votre question.", tr: "Sadece cüzdanı 😄💶! « Ça fait 28 € » = fiyatı 28 €. Ödeyin ve sorunuzu sorun.", en: "Only your wallet 😄💶! « Ça fait 28 € » = the price is 28 €. Pay and ask your question." } }
           ] },
      j: { say: [["M", "Deux fois par semaine, c'est assez. Pas tous les jours, hein !"]],
           choices: [
             { fr: "D'accord, deux fois par jour. C'est noté, merci !", tr: "Tamam, günde iki kez. Not ettim, teşekkürler!", en: "OK, twice a day. Got it, thanks!", ok: false,
               fb: { fr: "Oh non, la pauvre plante va nager 🌊🪴 ! Il a dit « deux fois par semaine ».", tr: "Ah hayır, zavallı bitki yüzecek 🌊🪴! « Deux fois par semaine » (haftada iki kez) dedi.", en: "Oh no, the poor plant will be swimming 🌊🪴! He said « deux fois par semaine » (twice a week)." } },
             { fr: "Deux fois par semaine. C'est noté, merci !", tr: "Haftada iki kez. Not ettim, teşekkürler!", en: "Twice a week. Got it, thanks!", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["M", "Avec plaisir. Bonne journée, et bon jardinage !"]],
             scene: { fr: "Votre balcon va être tout vert. Et vous avez tout compris en français ! 🪴🎉", tr: "Balkonunuz yemyeşil olacak. Ve her şeyi Fransızca anladınız! 🪴🎉", en: "Your balcony is going to be all green. And you understood everything in French! 🪴🎉" } }
    } },

  /* ───────────── 30. Une nouvelle amie au parc ───────────── */
  { id: "av-amie-parc", level: "A1", emoji: "🏃‍♀️",
    t: { fr: "Une nouvelle amie au parc", tr: "Parkta yeni bir arkadaş", en: "A new friend in the park" },
    goal: { fr: "Faites connaissance avec une coureuse au parc et prenez rendez-vous pour courir ensemble.", tr: "Parkta koşan bir kadınla tanışın ve birlikte koşmak için buluşma ayarlayın.", en: "Get to know a runner in the park and arrange to run together." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Samedi matin. Vous courez au parc, comme toujours. Vous vous arrêtez à la fontaine. Une femme arrive aussi.", tr: "Cumartesi sabahı. Her zamanki gibi parkta koşuyorsunuz. Çeşmede duruyorsunuz. Bir kadın da geliyor.", en: "Saturday morning. You're running in the park, as always. You stop at the fountain. A woman arrives too." },
           say: [["F", "Pardon, vous attendez pour la fontaine ?"]],
           choices: [
             { fr: "Oui, j'attends le bus.", tr: "Evet, otobüs bekliyorum.", en: "Yes, I'm waiting for the bus.", ok: false,
               fb: { fr: "Un bus dans le parc ? Rare 🚌😄 ! Elle veut boire. Dites « non, non, allez-y ! ».", tr: "Parkta otobüs mü? Pek görülmez 🚌😄! Su içmek istiyor. « Non, non, allez-y ! » deyin.", en: "A bus in the park? Unusual 🚌😄! She wants a drink. Say « non, non, allez-y ! »." } },
             { fr: "Allez ! Allez ! Allez !", tr: "Hadi! Hadi! Hadi!", en: "Go! Go! Go!", ok: false,
               fb: { fr: "On dirait un match de handball 📣😄 ! Pour laisser passer quelqu'un : « allez-y », une seule fois.", tr: "Hentbol maçı gibi oldu 📣😄! Birine yol vermek için: bir kez « allez-y ».", en: "Sounds like a handball match 📣😄! To let someone go first: « allez-y », just once." } },
             { fr: "Non, non, allez-y !", tr: "Yok, yok, buyurun!", en: "No, no, go ahead!", ok: true, go: "b" }
           ] },
      b: { say: [["F", "Merci ! Il fait chaud ce matin, hein ?"]],
           choices: [
             { fr: "Oui, il est chaud ! J'ai très soif.", tr: "Evet, o sıcak! Çok susadım.", en: "Yes, he is hot! I'm very thirsty.", ok: false,
               fb: { fr: "Qui est chaud ? 😄 Pour la météo, on dit « il fait chaud ». Et pour vous : « j'ai chaud ».", tr: "Kim sıcak? 😄 Hava için « il fait chaud » denir. Kendiniz için: « j'ai chaud ».", en: "Who's hot? 😄 For the weather you say « il fait chaud ». And for yourself: « j'ai chaud »." } },
             { fr: "Oui, il fait chaud ! J'ai très soif.", tr: "Evet, hava sıcak! Çok susadım.", en: "Yes, it's hot! I'm really thirsty.", ok: true, go: "c" }
           ] },
      c: { say: [["F", "Vous courez souvent ici ? Je vous vois tous les samedis !"]],
           choices: [
             { fr: "Oui, je fais courir ici tous les samedis matin.", tr: "Evet, her cumartesi sabahı burada koşturuyorum.", en: "Yes, I make run here every Saturday morning.", ok: false,
               fb: { fr: "« Faire courir », c'est faire courir quelqu'un d'autre 😄. Dites simplement « je cours ».", tr: "« Faire courir » başkasını koşturmak demek 😄. Sadece « je cours » deyin.", en: "« Faire courir » means making someone else run 😄. Just say « je cours »." } },
             { fr: "Oui, je suis courir ici.", tr: "Evet, ben burada koşmak.", en: "Yes, I am run here.", ok: false,
               fb: { fr: "Pas de « je suis » avant un verbe ! On dit « je cours » 🏃‍♀️.", tr: "Fiilden önce « je suis » yok! « Je cours » denir 🏃‍♀️.", en: "No « je suis » before a verb! You say « je cours » 🏃‍♀️." } },
             { fr: "Oui, je cours ici tous les samedis matin.", tr: "Evet, her cumartesi sabahı burada koşuyorum.", en: "Yes, I run here every Saturday morning.", ok: true, go: "d" }
           ] },
      d: { say: [["F", "Moi, c'est Claire. Vous n'êtes pas d'ici, non ? Vous avez un joli accent."]],
           choices: [
             { fr: "Enchantée, Claire ! Je suis turque.", tr: "Memnun oldum Claire! Türküm.", en: "Nice to meet you, Claire! I'm Turkish.", ok: true, go: "e" },
             { fr: "Enchantée ! Je suis Turquie.", tr: "Memnun oldum! Ben Türkiye'yim.", en: "Nice to meet you! I am Turkey.", ok: false,
               fb: { fr: "Tout un pays, c'est beaucoup pour une personne 🇹🇷😄 ! La nationalité : « je suis turque ». Le pays : « je viens de Turquie ».", tr: "Bütün bir ülke, bir kişi için fazla 🇹🇷😄! Milliyet: « je suis turque ». Ülke: « je viens de Turquie ».", en: "A whole country is a lot for one person 🇹🇷😄! Nationality: « je suis turque ». Country: « je viens de Turquie »." } },
             { fr: "Enchantée, Claire ! Je suis en Turquie depuis un an.", tr: "Memnun oldum Claire! Bir yıldır Türkiye'deyim.", en: "Nice to meet you, Claire! I've been in Turkey for a year.", ok: false,
               fb: { fr: "Non, vous êtes au parc, en France 😄 ! Dites « je suis turque » ou « je viens de Turquie ».", tr: "Hayır, parktasınız, Fransa'da 😄! « Je suis turque » ya da « je viens de Turquie » deyin.", en: "No, you're in the park, in France 😄! Say « je suis turque » or « je viens de Turquie »." } }
           ] },
      e: { say: [["F", "Super ! Dis, on peut se tutoyer ?"]],
           choices: [
             { fr: "Oui, bien sûr ! Avec plaisir.", tr: "Evet, tabii ki! Memnuniyetle.", en: "Yes, of course! Gladly.", ok: true, go: "f" },
             { fr: "Oui, bien sûr ! Vous êtes très gentille.", tr: "Evet, tabii ki! Çok naziksiniz.", en: "Yes, of course! You're very kind.", ok: false,
               fb: { fr: "Oups, vous dites oui… avec « vous » 😄 ! Maintenant, c'est « tu » : « tu es très gentille ».", tr: "Hop, evet diyorsunuz… ama « vous » ile 😄! Artık « tu »: « tu es très gentille ».", en: "Oops, you say yes… with « vous » 😄! Now it's « tu »: « tu es très gentille »." } }
           ] },
      f: { say: [["F", "Et tu fais quoi dans la vie ?"]],
           choices: [
             { fr: "Je travaille à l'accueil d'une salle de sport.", tr: "Bir spor salonunun resepsiyonunda çalışıyorum.", en: "I work at the front desk of a gym.", ok: true, go: "g1" },
             { fr: "Je suis kiné, mais en France, je travaille dans une salle de sport.", tr: "Fizyoterapistim ama Fransa'da bir spor salonunda çalışıyorum.", en: "I'm a physio, but in France I work in a gym.", ok: true, go: "g2" },
             { fr: "Je fais la vie, et je travaille beaucoup.", tr: "Hayatı yapıyorum ve çok çalışıyorum.", en: "I do life, and I work a lot.", ok: false,
               fb: { fr: "Très philosophique 😄 ! « Tu fais quoi dans la vie ? » = quel est ton travail ?", tr: "Çok felsefi 😄! « Tu fais quoi dans la vie ? » = ne iş yapıyorsun?", en: "Very philosophical 😄! « Tu fais quoi dans la vie ? » = what's your job?" } }
           ] },
      g1: { say: [["F", "Ah, c'est pour ça que tu cours si bien ! Tu aimes ton travail ?"]],
           choices: [
             { fr: "Oui, j'aime beaucoup. Les gens sont sympas.", tr: "Evet, çok seviyorum. İnsanlar cana yakın.", en: "Yes, I really like it. The people are nice.", ok: true, go: "h" },
             { fr: "Oui, je suis très travail. Les gens sont sympas.", tr: "Evet, ben çok işim. İnsanlar çok iyi.", en: "Yes, I'm very work. People are nice.", ok: false,
               fb: { fr: "Hmm, ça ne veut rien dire 😅. Dites « oui, j'aime beaucoup mon travail ».", tr: "Hmm, bunun bir anlamı yok 😅. « Oui, j'aime beaucoup mon travail » deyin.", en: "Hmm, that doesn't mean anything 😅. Say « oui, j'aime beaucoup mon travail »." } }
           ] },
      g2: { say: [["F", "Kiné ? Génial ! Moi, j'ai souvent mal au genou quand je cours…"]],
           choices: [
             { fr: "Vous devez bien vous échauffer avant de courir.", tr: "Koşmadan önce iyice ısınmalısınız.", en: "You must warm up well before running.", ok: false,
               fb: { fr: "Bon conseil de kiné 👍, mais vous êtes passées au « tu » ! Dites « tu dois bien t'échauffer ».", tr: "İyi bir fizyoterapist tavsiyesi 👍 ama artık « tu » kullanıyorsunuz! « Tu dois bien t'échauffer » deyin.", en: "Good physio advice 👍, but you've switched to « tu »! Say « tu dois bien t'échauffer »." } },
             { fr: "Tu dois bien t'échauffer avant de courir.", tr: "Koşmadan önce iyice ısınmalısın.", en: "You should warm up well before running.", ok: true, go: "h" }
           ] },
      h: { say: [["F", "Merci ! Dis, tu veux courir avec moi samedi prochain ?"]],
           choices: [
             { fr: "Oui, je veux bien courir avec moi samedi !", tr: "Evet, cumartesi kendimle koşmak isterim!", en: "Yes, I'd love to run with me on Saturday!", ok: false,
               fb: { fr: "Avec vous-même ? Un peu seule, non 😄 ? Dites « avec toi ».", tr: "Kendinizle mi? Biraz yalnız olmaz mı 😄? « Avec toi » deyin.", en: "With yourself? A bit lonely, no 😄? Say « avec toi »." } },
             { fr: "Oui, avec plaisir ! À quelle heure ?", tr: "Evet, memnuniyetle! Saat kaçta?", en: "Yes, I'd love to! What time?", ok: true, go: "i" }
           ] },
      i: { say: [["F", "À 9 h, devant la fontaine ? Après, on peut prendre un café."]],
           choices: [
             { fr: "Super ! 9 h devant la fontaine, et un café après.", tr: "Süper! Saat 9'da çeşmenin önünde, sonra da bir kahve.", en: "Great! 9 o'clock in front of the fountain, and a coffee after.", ok: true, go: "j" },
             { fr: "Super ! À 9 h dans la fontaine, et un café après !", tr: "Süper! Saat 9'da çeşmenin içinde, sonra da kahve!", en: "Great! At 9 in the fountain, and a coffee after!", ok: false,
               fb: { fr: "Dans la fontaine ? Ça rafraîchit, mais c'est mouillé 💦😄 ! On dit « devant la fontaine ».", tr: "Çeşmenin içinde mi? Serinletir ama ıslatır 💦😄! « Devant la fontaine » (çeşmenin önünde) denir.", en: "In the fountain? Refreshing, but wet 💦😄! You say « devant la fontaine » (in front of the fountain)." } }
           ] },
      j: { say: [["F", "Tu me donnes ton numéro ? Comme ça, je t'envoie un message."]],
           choices: [
             { fr: "Oui, bien sûr, je te donne mon nombre.", tr: "Evet, tabii, sana sayımı veriyorum.", en: "Yes, sure, I'll give you my number.", ok: false,
               fb: { fr: "Piège de l'anglais « number » 😉 ! Pour le téléphone, c'est « numéro ». « Nombre », c'est pour compter.", tr: "İngilizce « number » tuzağı 😉! Telefon için « numéro » denir. « Nombre » saymak içindir.", en: "The English « number » trap 😉! For a phone it's « numéro ». « Nombre » is for counting." } },
             { fr: "Oui, c'est le 06 00 00 00 27.", tr: "Evet, 06 00 00 00 27.", en: "Yes, it's 06 00 00 00 27.", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["F", "C'est noté ! À samedi, alors. Bonne course !"]],
             scene: { fr: "Vous repartez en courant, avec le sourire. Une nouvelle amie, et tout en français ! 🏃‍♀️🎉", tr: "Gülümseyerek koşmaya devam ediyorsunuz. Yeni bir arkadaş, hem de tamamen Fransızca! 🏃‍♀️🎉", en: "You set off running again, smiling. A new friend, and all in French! 🏃‍♀️🎉" } }
    } }
);
