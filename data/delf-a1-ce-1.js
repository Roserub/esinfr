/* DELF A1 — reading (compréhension des écrits), papers 1–5 */
(window.DELF = window.DELF || []).push(

  /* ───────── Sujet 1 ───────── */
  { id: "a1-s01-ce1", level: "A1", sujet: 1, sec: "ce", ex: 1, pts: 6,
    title: "Invitation d'anniversaire",
    consigne: "Vous recevez ce courriel d'une amie. Lisez le document, puis répondez aux questions.",
    help: { tr: "Bir arkadaşınızdan bu e-postayı alıyorsunuz. Belgeyi okuyun, sonra soruları cevaplayın.", en: "You receive this e-mail from a friend. Read the document, then answer the questions." },
    doc: { type: "email", from: "Claire", to: "Esin", subject: "Mon anniversaire !",
      body: "Salut Esin,\n\nSamedi 14 juin, j'ai 30 ans ! Je fais une petite fête chez moi, au 12 rue des Lilas, à 19 h 30. Il y a mes amis du travail et ma sœur Julie.\n\nOn va manger des pizzas et danser dans le jardin. Tu peux apporter une boisson ou un dessert, comme tu veux. Pas de cadeau, s'il te plaît !\n\nPrends le bus 5, arrêt « Mairie ». Réponds-moi avant jeudi.\n\nBises,\nClaire" },
    questions: [
      { q: "Claire vous invite pour…", o: ["💍 son mariage", "🎂 son anniversaire", "🏠 sa nouvelle maison"], a: 1, x: "Claire écrit : « Mon anniversaire ! » et « j'ai 30 ans »." },
      { q: "La fête commence à quelle heure ?", o: ["17 h 30", "20 h 30", "19 h 30"], a: 2, x: "« Je fais une petite fête chez moi […] à 19 h 30. »" },
      { q: "Qu'est-ce que vous pouvez apporter ?", o: ["🍰 un dessert", "🎁 un cadeau", "🍕 une pizza"], a: 0, x: "« Tu peux apporter une boisson ou un dessert » et « Pas de cadeau »." },
      { q: "Pour aller chez Claire, vous prenez…", o: ["🚇 le métro", "🚌 le bus", "🚲 le vélo"], a: 1, x: "« Prends le bus 5, arrêt « Mairie ». »" },
      { q: "Vous devez répondre à Claire avant samedi.", o: ["Vrai", "Faux"], a: 1, x: "Claire écrit : « Réponds-moi avant jeudi. »" }
    ] },

  { id: "a1-s01-ce2", level: "A1", sujet: 1, sec: "ce", ex: 2, pts: 6,
    title: "Horaires de la médiathèque",
    consigne: "Vous voyez cette affiche à l'entrée de la médiathèque. Lisez-la, puis répondez aux questions.",
    help: { tr: "Kütüphanenin girişinde bu afişi görüyorsunuz. Okuyun, sonra soruları cevaplayın.", en: "You see this poster at the entrance of the library. Read it, then answer the questions." },
    doc: { type: "affiche", title: "Médiathèque Victor-Hugo",
      body: "Horaires d'ouverture\n\nMardi et jeudi : 14 h – 19 h\nMercredi et samedi : 10 h – 18 h\nVendredi : 10 h – 12 h\nFermé le dimanche et le lundi.\n\nL'inscription est gratuite. Apportez une pièce d'identité et un justificatif de domicile.\nVous pouvez emprunter 5 livres et 2 DVD pour 3 semaines.\n\nNouveau : atelier de conversation en français le samedi à 11 h !" },
    questions: [
      { q: "La médiathèque est fermée…", o: ["le lundi", "le mardi", "le samedi"], a: 0, x: "« Fermé le dimanche et le lundi. »" },
      { q: "Le mercredi, la médiathèque ouvre à…", o: ["14 h", "10 h", "12 h"], a: 1, x: "« Mercredi et samedi : 10 h – 18 h »." },
      { q: "L'inscription coûte…", o: ["5 €", "2 €", "0 € : c'est gratuit"], a: 2, x: "« L'inscription est gratuite. »" },
      { q: "Vous pouvez emprunter combien de livres ?", o: ["2", "3", "5"], a: 2, x: "« Vous pouvez emprunter 5 livres et 2 DVD »." },
      { q: "L'atelier de conversation est le samedi matin.", o: ["Vrai", "Faux"], a: 0, x: "« atelier de conversation en français le samedi à 11 h »." },
      { q: "Pour vous inscrire, vous apportez…", o: ["📷 une photo", "🪪 une pièce d'identité", "💶 de l'argent"], a: 1, x: "« Apportez une pièce d'identité et un justificatif de domicile. »" }
    ] },

  { id: "a1-s01-ce3", level: "A1", sujet: 1, sec: "ce", ex: 3, pts: 6,
    title: "Horaires de la ligne 3",
    consigne: "Vous lisez les horaires de bus à l'arrêt. Lisez le document, puis répondez aux questions.",
    help: { tr: "Durakta otobüs saatlerini okuyorsunuz. Belgeyi okuyun, sonra soruları cevaplayın.", en: "You read the bus timetable at the stop. Read the document, then answer the questions." },
    doc: { type: "horaires", title: "Ligne 3 : Gare – Hôpital",
      body: "Du lundi au samedi. Le dimanche : pas de bus.\nTicket : 1,60 € (2 € dans le bus).",
      rows: [["Arrêt", "Bus 1", "Bus 2", "Bus 3"], ["Gare", "7 h 10", "8 h 10", "12 h 40"], ["Place du Marché", "7 h 18", "8 h 18", "12 h 48"], ["Lycée Pasteur", "7 h 25", "8 h 25", "12 h 55"], ["Piscine", "7 h 31", "8 h 31", "13 h 01"], ["Hôpital", "7 h 40", "8 h 40", "13 h 10"]] },
    questions: [
      { q: "Vous êtes à la gare. Vous voulez arriver à l'hôpital à 8 h 40. Vous prenez le bus de…", o: ["7 h 10", "8 h 10", "12 h 40"], a: 1, x: "Le bus 2 part de la gare à 8 h 10 et arrive à l'hôpital à 8 h 40." },
      { q: "De la gare à l'hôpital, le bus roule pendant…", o: ["20 minutes", "40 minutes", "30 minutes"], a: 2, x: "Gare 7 h 10 → Hôpital 7 h 40 : 30 minutes." },
      { q: "Le dimanche…", o: ["il y a 3 bus", "le bus est gratuit", "il n'y a pas de bus"], a: 2, x: "« Le dimanche : pas de bus. »" },
      { q: "Vous achetez votre ticket dans le bus. Il coûte…", o: ["2 €", "1,60 €", "1 €"], a: 0, x: "« Ticket : 1,60 € (2 € dans le bus). »" },
      { q: "Le bus 1 passe à la piscine à 7 h 31.", o: ["Vrai", "Faux"], a: 0, x: "Dans le tableau : Piscine, Bus 1, « 7 h 31 »." }
    ] },

  { id: "a1-s01-ce4", level: "A1", sujet: 1, sec: "ce", ex: 4, pts: 7,
    title: "Appartement à louer",
    consigne: "Vous cherchez un logement. Vous lisez cette annonce. Répondez aux questions.",
    help: { tr: "Bir ev arıyorsunuz. Bu ilanı okuyorsunuz. Soruları cevaplayın.", en: "You are looking for a home. You read this ad. Answer the questions." },
    doc: { type: "annonce", title: "À louer : appartement",
      body: "À louer à Villeurbanne, près du métro : appartement de 45 m², au 3e étage avec ascenseur.\n\nUne cuisine, un salon, une chambre et une salle de bains. Petit balcon. Pas de jardin.\n\nLoyer : 650 € par mois + 50 € de charges.\nLibre le 1er septembre. Animaux interdits.\n\nVisites le samedi matin. Appelez Mme Bernard au 06 12 34 56 78 (après 18 h)." },
    questions: [
      { q: "L'appartement a combien de chambres ?", o: ["1", "2", "3"], a: 0, x: "« Une cuisine, un salon, une chambre et une salle de bains. »" },
      { q: "Chaque mois, avec les charges, vous payez…", o: ["650 €", "700 €", "600 €"], a: 1, x: "« Loyer : 650 € par mois + 50 € de charges » : 650 + 50 = 700 €." },
      { q: "Il y a un jardin.", o: ["Vrai", "Faux"], a: 1, x: "« Petit balcon. Pas de jardin. »" },
      { q: "L'appartement est près du métro.", o: ["Vrai", "Faux"], a: 0, x: "« À louer à Villeurbanne, près du métro »." },
      { q: "Vous téléphonez à Mme Bernard…", o: ["le matin", "après 18 h", "à midi"], a: 1, x: "« Appelez Mme Bernard […] (après 18 h). »" },
      { q: "L'appartement est libre…", o: ["en juillet", "en août", "en septembre"], a: 2, x: "« Libre le 1er septembre. »" }
    ] },

  /* ───────── Sujet 2 ───────── */
  { id: "a1-s02-ce1", level: "A1", sujet: 2, sec: "ce", ex: 1, pts: 6,
    title: "Carte postale de Bretagne",
    consigne: "Vous recevez cette carte postale d'un ami. Lisez-la, puis répondez aux questions.",
    help: { tr: "Bir arkadaşınızdan bu kartpostalı alıyorsunuz. Okuyun, sonra soruları cevaplayın.", en: "You receive this postcard from a friend. Read it, then answer the questions." },
    doc: { type: "carte", from: "Lucas", to: "Esin",
      body: "Coucou Esin !\n\nJe suis en vacances à Saint-Malo, en Bretagne, avec ma femme et mes deux enfants. On est dans un petit camping près de la mer. Il fait beau, mais le vent est froid !\n\nLe matin, les enfants vont à la plage. L'après-midi, on fait du vélo. Ce soir, on va manger des crêpes au restaurant.\n\nJe rentre à Lyon dimanche prochain. On prend un café lundi ?\n\nÀ bientôt,\nLucas" },
    questions: [
      { q: "Lucas est en vacances…", o: ["⛰️ à la montagne", "🌊 à la mer", "🏙️ dans une grande ville"], a: 1, x: "« On est dans un petit camping près de la mer. »" },
      { q: "Lucas et sa famille dorment…", o: ["🏨 à l'hôtel", "🏠 chez des amis", "⛺ au camping"], a: 2, x: "« On est dans un petit camping »." },
      { q: "Il pleut à Saint-Malo.", o: ["Vrai", "Faux"], a: 1, x: "Lucas écrit : « Il fait beau, mais le vent est froid ! »" },
      { q: "L'après-midi, la famille…", o: ["🚲 fait du vélo", "🏊 va à la piscine", "🛍️ fait les magasins"], a: 0, x: "« L'après-midi, on fait du vélo. »" },
      { q: "Ce soir, ils vont manger…", o: ["🍕 une pizza", "🐟 du poisson", "🥞 des crêpes"], a: 2, x: "« Ce soir, on va manger des crêpes au restaurant. »" },
      { q: "Lucas vous propose de…", o: ["téléphoner ce soir", "prendre un café lundi", "aller à la plage dimanche"], a: 1, x: "« On prend un café lundi ? »" }
    ] },

  { id: "a1-s02-ce2", level: "A1", sujet: 2, sec: "ce", ex: 2, pts: 6,
    title: "Règlement de la piscine",
    consigne: "Vous allez à la piscine. Vous lisez ce règlement à l'entrée. Répondez aux questions.",
    help: { tr: "Yüzme havuzuna gidiyorsunuz. Girişteki bu kuralları okuyorsunuz. Soruları cevaplayın.", en: "You go to the swimming pool. You read these rules at the entrance. Answer the questions." },
    doc: { type: "affiche", title: "Piscine municipale – Règlement",
      body: "Bienvenue à la piscine !\n\n• Le bonnet de bain est obligatoire.\n• Le short de bain est interdit : maillot de bain seulement.\n• Prenez une douche avant d'aller dans l'eau.\n• Il est interdit de manger au bord du bassin.\n• Les enfants de moins de 10 ans viennent avec un adulte.\n\nEntrée : 3,50 € (adulte), 2 € (enfant).\nLa caisse ferme 30 minutes avant la piscine." },
    questions: [
      { q: "Dans la piscine, il faut porter…", o: ["un tee-shirt", "un bonnet de bain", "un short de bain"], a: 1, x: "« Le bonnet de bain est obligatoire. » et « Le short de bain est interdit »." },
      { q: "Avant d'aller dans l'eau, vous devez…", o: ["🍎 manger", "📱 téléphoner", "🚿 prendre une douche"], a: 2, x: "« Prenez une douche avant d'aller dans l'eau. »" },
      { q: "Vous pouvez manger au bord du bassin.", o: ["Vrai", "Faux"], a: 1, x: "« Il est interdit de manger au bord du bassin. »" },
      { q: "Votre fils a 8 ans. Il peut venir…", o: ["avec un adulte", "seul", "avec un ami de 12 ans"], a: 0, x: "« Les enfants de moins de 10 ans viennent avec un adulte. »" },
      { q: "Vous venez avec votre fille de 8 ans. Vous payez en tout…", o: ["3,50 €", "7 €", "5,50 €"], a: 2, x: "« 3,50 € (adulte), 2 € (enfant) » : 3,50 + 2 = 5,50 €." }
    ] },

  { id: "a1-s02-ce3", level: "A1", sujet: 2, sec: "ce", ex: 3, pts: 6,
    title: "Menu de la cantine",
    consigne: "Votre fils mange à la cantine. Vous lisez le menu de la semaine. Répondez aux questions.",
    help: { tr: "Oğlunuz okul yemekhanesinde yemek yiyor. Haftanın menüsünü okuyorsunuz. Soruları cevaplayın.", en: "Your son eats at the school canteen. You read the menu of the week. Answer the questions." },
    doc: { type: "menu", title: "Restaurant scolaire – École Jean-Moulin",
      body: "Menu de la semaine du 6 au 10 octobre.\nLe mercredi, pas de cantine.\nPain et fruits bio tous les jours.",
      rows: [["Jour", "Entrée", "Plat", "Dessert"], ["Lundi", "Salade de tomates", "Poulet et riz", "Yaourt"], ["Mardi", "Soupe de légumes", "Poisson et pommes de terre", "Pomme"], ["Jeudi", "Carottes râpées", "Pâtes à la bolognaise", "Fromage"], ["Vendredi", "Melon", "Omelette et haricots verts", "Gâteau au chocolat"]] },
    questions: [
      { q: "Votre fils n'aime pas le poisson. Quel jour il n'aime pas le plat ?", o: ["lundi", "mardi", "jeudi"], a: 1, x: "Mardi : « Poisson et pommes de terre »." },
      { q: "Le vendredi, le dessert est…", o: ["🍎 une pomme", "🧀 du fromage", "🍫 un gâteau au chocolat"], a: 2, x: "Vendredi, dessert : « Gâteau au chocolat »." },
      { q: "Les enfants mangent à la cantine le mercredi.", o: ["Vrai", "Faux"], a: 1, x: "« Le mercredi, pas de cantine. »" },
      { q: "Quel jour il y a de la soupe ?", o: ["mardi", "lundi", "vendredi"], a: 0, x: "Mardi, entrée : « Soupe de légumes »." },
      { q: "Le jeudi, le plat, c'est…", o: ["🍗 du poulet", "🍝 des pâtes", "🍳 une omelette"], a: 1, x: "Jeudi : « Pâtes à la bolognaise »." }
    ] },

  { id: "a1-s02-ce4", level: "A1", sujet: 2, sec: "ce", ex: 4, pts: 7,
    title: "Chat perdu",
    consigne: "Vous lisez cette annonce dans le hall de votre immeuble. Répondez aux questions.",
    help: { tr: "Apartmanınızın girişinde bu ilanı okuyorsunuz. Soruları cevaplayın.", en: "You read this notice in the hall of your building. Answer the questions." },
    doc: { type: "annonce", title: "Chat perdu !",
      body: "Notre chat Pacha est perdu depuis mardi 3 mai, près du parc Monceau.\n\nIl est gros et noir, avec les pattes blanches. Il a 5 ans. Il a un collier rouge. Il est gentil, mais il a peur des chiens.\n\nVous voyez Pacha ? Ne le touchez pas, s'il vous plaît. Appelez Sophie au 07 98 76 54 32 ou envoyez un SMS.\n\nRécompense : 50 €. Merci beaucoup !" },
    questions: [
      { q: "Le chat est…", o: ["🟠 roux", "⚫ noir et blanc", "⚪ tout blanc"], a: 1, x: "« Il est gros et noir, avec les pattes blanches. »" },
      { q: "Le chat a un collier…", o: ["bleu", "noir", "rouge"], a: 2, x: "« Il a un collier rouge. »" },
      { q: "Le chat est perdu depuis…", o: ["dimanche", "jeudi", "mardi"], a: 2, x: "« perdu depuis mardi 3 mai »." },
      { q: "Vous voyez le chat. Vous devez…", o: ["appeler Sophie", "attraper le chat", "aller chez le vétérinaire"], a: 0, x: "« Ne le touchez pas, s'il vous plaît. Appelez Sophie »." },
      { q: "Le chat a peur des chiens.", o: ["Vrai", "Faux"], a: 0, x: "« Il est gentil, mais il a peur des chiens. »" },
      { q: "Sophie donne une récompense de…", o: ["10 €", "50 €", "100 €"], a: 1, x: "« Récompense : 50 €. »" }
    ] },

  /* ───────── Sujet 3 ───────── */
  { id: "a1-s03-ce1", level: "A1", sujet: 3, sec: "ce", ex: 1, pts: 6,
    title: "Un service pour la voisine",
    consigne: "Vous recevez ce SMS de votre voisine. Lisez le message, puis répondez aux questions.",
    help: { tr: "Komşunuzdan bu SMS'i alıyorsunuz. Mesajı okuyun, sonra soruları cevaplayın.", en: "You receive this text message from your neighbour. Read it, then answer the questions." },
    doc: { type: "sms", from: "Mme Garcia (voisine)", to: "Esin",
      body: "Bonjour Esin, c'est Mme Garcia, votre voisine du 2e étage. Je pars chez ma fille à Marseille demain matin, pour 4 jours.\n\nVous pouvez arroser mes plantes mercredi et samedi, s'il vous plaît ? La clé est chez la gardienne.\n\nLe facteur va aussi apporter un colis jeudi : vous pouvez le prendre ?\n\nJe rentre dimanche soir. Merci mille fois ! 😊" },
    questions: [
      { q: "Mme Garcia part chez…", o: ["son fils", "sa sœur", "sa fille"], a: 2, x: "« Je pars chez ma fille à Marseille »." },
      { q: "Elle part pour combien de jours ?", o: ["2 jours", "4 jours", "7 jours"], a: 1, x: "« demain matin, pour 4 jours »." },
      { q: "Vous allez arroser les plantes…", o: ["mercredi et samedi", "jeudi et dimanche", "tous les jours"], a: 0, x: "« Vous pouvez arroser mes plantes mercredi et samedi »." },
      { q: "La clé est…", o: ["🚪 sous le tapis", "👩 chez la gardienne", "📬 dans la boîte aux lettres"], a: 1, x: "« La clé est chez la gardienne. »" },
      { q: "Le facteur apporte un colis jeudi.", o: ["Vrai", "Faux"], a: 0, x: "« Le facteur va aussi apporter un colis jeudi »." },
      { q: "Mme Garcia rentre…", o: ["samedi matin", "lundi", "dimanche soir"], a: 2, x: "« Je rentre dimanche soir. »" }
    ] },

  { id: "a1-s03-ce2", level: "A1", sujet: 3, sec: "ce", ex: 2, pts: 6,
    title: "Le vide-grenier du quartier",
    consigne: "Vous voyez cette affiche dans votre quartier. Lisez-la, puis répondez aux questions.",
    help: { tr: "Mahallenizde bu afişi görüyorsunuz. Okuyun, sonra soruları cevaplayın.", en: "You see this poster in your neighbourhood. Read it, then answer the questions." },
    doc: { type: "affiche", title: "Grand vide-grenier du quartier Saint-Paul",
      body: "Dimanche 21 mai, de 8 h à 17 h\nPlace de l'Église\n\nVêtements, jouets, livres, vaisselle, petits meubles…\n\nVous voulez vendre ? Inscription à la mairie avant le 15 mai. Prix : 10 € pour 2 mètres.\n\nEntrée gratuite pour les visiteurs.\nBoissons et crêpes sur place.\nS'il pleut, le vide-grenier est dans la salle des sports." },
    questions: [
      { q: "Le vide-grenier est…", o: ["samedi 21 mai", "dimanche 15 mai", "dimanche 21 mai"], a: 2, x: "« Dimanche 21 mai, de 8 h à 17 h »." },
      { q: "Pour vendre, vous vous inscrivez…", o: ["⛪ à l'église", "🏛️ à la mairie", "🏟️ à la salle des sports"], a: 1, x: "« Inscription à la mairie avant le 15 mai. »" },
      { q: "Pour visiter le vide-grenier, vous payez…", o: ["rien", "2 €", "10 €"], a: 0, x: "« Entrée gratuite pour les visiteurs. »" },
      { q: "On peut manger sur place.", o: ["Vrai", "Faux"], a: 0, x: "« Boissons et crêpes sur place. »" },
      { q: "S'il pleut, le vide-grenier…", o: ["est annulé", "est dans la salle des sports", "est le dimanche suivant"], a: 1, x: "« S'il pleut, le vide-grenier est dans la salle des sports. »" }
    ] },

  { id: "a1-s03-ce3", level: "A1", sujet: 3, sec: "ce", ex: 3, pts: 6,
    title: "Trains pour Grenoble",
    consigne: "Vous allez à Grenoble en train. Vous lisez les horaires. Répondez aux questions.",
    help: { tr: "Trenle Grenoble'a gidiyorsunuz. Tren saatlerini okuyorsunuz. Soruları cevaplayın.", en: "You are going to Grenoble by train. You read the timetable. Answer the questions." },
    doc: { type: "horaires", title: "Trains Lyon Part-Dieu → Grenoble",
      body: "Prix du billet : 22 € (tarif normal), 11 € (moins de 26 ans).\n* Ce train ne circule pas le dimanche.",
      rows: [["Train", "Départ Lyon", "Arrivée Grenoble", "Voie"], ["TER 1", "6 h 45", "8 h 10", "B"], ["TER 2 *", "9 h 15", "10 h 40", "D"], ["TER 3", "12 h 30", "13 h 55", "B"], ["TER 4", "17 h 50", "19 h 15", "F"]] },
    questions: [
      { q: "Vous voulez arriver à Grenoble avant 9 h. Vous prenez le train de…", o: ["9 h 15", "6 h 45", "12 h 30"], a: 1, x: "Le TER 1 part à 6 h 45 et arrive à Grenoble à 8 h 10." },
      { q: "Le voyage dure…", o: ["1 h 25", "1 h 45", "2 h"], a: 0, x: "Départ 6 h 45, arrivée 8 h 10 : 1 h 25." },
      { q: "Le train de 17 h 50 part de la voie…", o: ["B", "D", "F"], a: 2, x: "TER 4 : départ 17 h 50, voie « F »." },
      { q: "Le dimanche, il y a un train à 9 h 15.", o: ["Vrai", "Faux"], a: 1, x: "Le train de 9 h 15 a une * : « Ce train ne circule pas le dimanche. »" },
      { q: "Vous avez 35 ans. Votre billet coûte…", o: ["11 €", "33 €", "22 €"], a: 2, x: "« 22 € (tarif normal), 11 € (moins de 26 ans) »." }
    ] },

  { id: "a1-s03-ce4", level: "A1", sujet: 3, sec: "ce", ex: 4, pts: 7,
    title: "Cours de cuisine du monde",
    consigne: "Vous lisez cette annonce sur internet. Répondez aux questions.",
    help: { tr: "İnternette bu ilanı okuyorsunuz. Soruları cevaplayın.", en: "You read this ad on the internet. Answer the questions." },
    doc: { type: "annonce", title: "L'Atelier de Nadia – Cuisine du monde",
      body: "Vous aimez cuisiner ? Venez à l'Atelier de Nadia !\n\nChaque samedi, de 10 h à 13 h, on prépare un plat d'un pays différent : le couscous du Maroc, les pâtes d'Italie, le curry d'Inde…\n\nÀ 12 h 30, on mange ensemble les plats du cours.\n\nPrix : 35 € le cours. Groupes de 8 personnes maximum.\nApportez un tablier !\n\nAdresse : 4, rue Victor-Hugo, Nantes.\nRéservation sur le site : atelier-nadia.fr" },
    questions: [
      { q: "Le cours a lieu…", o: ["le dimanche matin", "le samedi matin", "le samedi soir"], a: 1, x: "« Chaque samedi, de 10 h à 13 h »." },
      { q: "Dans ce cours, on prépare…", o: ["des plats de différents pays", "seulement des plats français", "seulement des gâteaux"], a: 0, x: "« on prépare un plat d'un pays différent : […] Maroc, […] Italie, […] Inde »." },
      { q: "Le cours coûte…", o: ["8 €", "13 €", "35 €"], a: 2, x: "« Prix : 35 € le cours. »" },
      { q: "Vous devez apporter…", o: ["🔪 un couteau", "🥕 des légumes", "un tablier"], a: 2, x: "« Apportez un tablier ! »" },
      { q: "Il y a 15 personnes dans le groupe.", o: ["Vrai", "Faux"], a: 1, x: "« Groupes de 8 personnes maximum. »" },
      { q: "Pour réserver, vous…", o: ["📞 téléphonez", "💻 allez sur le site", "✉️ envoyez une lettre"], a: 1, x: "« Réservation sur le site : atelier-nadia.fr »." }
    ] },

  /* ───────── Sujet 4 ───────── */
  { id: "a1-s04-ce1", level: "A1", sujet: 4, sec: "ce", ex: 1, pts: 6,
    title: "Message d'un collègue",
    consigne: "Vous recevez ce courriel d'un collègue. Lisez le document, puis répondez aux questions.",
    help: { tr: "Bir iş arkadaşınızdan bu e-postayı alıyorsunuz. Belgeyi okuyun, sonra soruları cevaplayın.", en: "You receive this e-mail from a colleague. Read the document, then answer the questions." },
    doc: { type: "email", from: "Thomas Petit", to: "Esin", subject: "Réunion de lundi",
      body: "Bonjour Esin,\n\nLa réunion d'équipe de lundi change de jour. Elle est maintenant mardi 9 avril à 14 h, dans la salle 204, au 2e étage.\n\nOn va parler des vacances d'été et du nouveau planning. Apporte ton agenda, s'il te plaît.\n\nAprès la réunion, il y a un petit goûter pour l'anniversaire de Marie. Je vais acheter un gâteau. Tu participes ? C'est 5 € par personne.\n\nBonne journée,\nThomas" },
    questions: [
      { q: "La réunion est…", o: ["lundi à 14 h", "mardi à 9 h", "mardi à 14 h"], a: 2, x: "« Elle est maintenant mardi 9 avril à 14 h »." },
      { q: "La réunion est dans…", o: ["le bureau de Thomas", "la salle 204", "la cafétéria"], a: 1, x: "« dans la salle 204, au 2e étage »." },
      { q: "On va parler…", o: ["🏖️ des vacances", "💶 des salaires", "🖥️ des ordinateurs"], a: 0, x: "« On va parler des vacances d'été et du nouveau planning. »" },
      { q: "Vous devez apporter…", o: ["🎂 un gâteau", "📒 votre agenda", "🎁 un cadeau"], a: 1, x: "« Apporte ton agenda, s'il te plaît. » C'est Thomas qui achète le gâteau." },
      { q: "Après la réunion, on fête l'anniversaire de Thomas.", o: ["Vrai", "Faux"], a: 1, x: "« un petit goûter pour l'anniversaire de Marie »." },
      { q: "Pour le gâteau, vous donnez…", o: ["2 €", "9 €", "5 €"], a: 2, x: "« C'est 5 € par personne. »" }
    ] },

  { id: "a1-s04-ce2", level: "A1", sujet: 4, sec: "ce", ex: 2, pts: 6,
    title: "Au cabinet médical",
    consigne: "Vous lisez cette information sur la porte du cabinet médical. Répondez aux questions.",
    help: { tr: "Doktor muayenehanesinin kapısında bu bilgiyi okuyorsunuz. Soruları cevaplayın.", en: "You read this notice on the door of the doctor's office. Answer the questions." },
    doc: { type: "notice", title: "Cabinet médical – Dr Martin et Dr Leroy",
      body: "Consultations sur rendez-vous uniquement.\nDu lundi au vendredi : 8 h 30 – 12 h et 14 h – 19 h.\nSamedi : 9 h – 12 h.\n\nPrenez rendez-vous par téléphone au 04 72 00 11 22 ou sur internet.\n\nN'oubliez pas votre carte Vitale.\nVous avez plus de 15 minutes de retard ? Le médecin ne peut pas vous recevoir.\n\nLe soir et le dimanche, en cas d'urgence, appelez le 15." },
    questions: [
      { q: "Pour voir le médecin, il faut…", o: ["venir sans rendez-vous", "prendre rendez-vous", "envoyer une lettre"], a: 1, x: "« Consultations sur rendez-vous uniquement. »" },
      { q: "Le samedi, le cabinet est ouvert…", o: ["l'après-midi", "toute la journée", "le matin"], a: 2, x: "« Samedi : 9 h – 12 h. »" },
      { q: "Vous devez apporter…", o: ["💳 votre carte Vitale", "📄 votre passeport", "💊 vos médicaments"], a: 0, x: "« N'oubliez pas votre carte Vitale. »" },
      { q: "Vous avez 20 minutes de retard : le médecin peut vous recevoir.", o: ["Vrai", "Faux"], a: 1, x: "« Vous avez plus de 15 minutes de retard ? Le médecin ne peut pas vous recevoir. »" },
      { q: "Le dimanche, en cas d'urgence, vous appelez…", o: ["le 04 72 00 11 22", "le 15", "le 18"], a: 1, x: "« Le soir et le dimanche, en cas d'urgence, appelez le 15. »" }
    ] },

  { id: "a1-s04-ce3", level: "A1", sujet: 4, sec: "ce", ex: 3, pts: 6,
    title: "Menu du restaurant",
    consigne: "Vous déjeunez au restaurant. Vous lisez le menu. Répondez aux questions.",
    help: { tr: "Restoranda öğle yemeği yiyorsunuz. Menüyü okuyorsunuz. Soruları cevaplayın.", en: "You have lunch at a restaurant. You read the menu. Answer the questions." },
    doc: { type: "menu", title: "Le Petit Bouchon – Menu du midi",
      body: "Entrée + plat : 14 € · Plat + dessert : 13 € · Menu complet : 18 €\nOuvert du lundi au vendredi, de 12 h à 14 h 30.",
      rows: [["", "Plat", "Prix"], ["Entrée", "Salade de chèvre chaud", "6 €"], ["Entrée", "Soupe à l'oignon", "5 €"], ["Plat", "Steak-frites", "12 €"], ["Plat", "Saumon et riz", "13 €"], ["Plat végétarien", "Lasagnes aux légumes", "11 €"], ["Dessert", "Tarte aux pommes", "5 €"], ["Dessert", "Mousse au chocolat", "5 €"]] },
    questions: [
      { q: "Vous ne mangez pas de viande et pas de poisson. Vous choisissez…", o: ["le steak-frites", "le saumon et riz", "les lasagnes aux légumes"], a: 2, x: "« Plat végétarien : Lasagnes aux légumes »." },
      { q: "Le plat le plus cher, c'est…", o: ["le steak-frites", "le saumon et riz", "les lasagnes"], a: 1, x: "« Saumon et riz : 13 € »." },
      { q: "Le menu complet (entrée + plat + dessert) coûte…", o: ["18 €", "13 €", "14 €"], a: 0, x: "« Menu complet : 18 € »." },
      { q: "Le restaurant est ouvert le samedi midi.", o: ["Vrai", "Faux"], a: 1, x: "« Ouvert du lundi au vendredi »." },
      { q: "Comme dessert, il y a…", o: ["🍦 une glace", "🍎 une tarte aux pommes", "🍓 des fraises"], a: 1, x: "« Dessert : Tarte aux pommes » et « Mousse au chocolat »." }
    ] },

  { id: "a1-s04-ce4", level: "A1", sujet: 4, sec: "ce", ex: 4, pts: 7,
    title: "La fête de la ville",
    consigne: "Vous lisez cet article dans le journal de votre ville. Répondez aux questions.",
    help: { tr: "Şehrinizin gazetesinde bu makaleyi okuyorsunuz. Soruları cevaplayın.", en: "You read this article in your town's newspaper. Answer the questions." },
    doc: { type: "article", title: "La fête de la ville revient !",
      body: "Le week-end du 28 et 29 juin, c'est la fête de la ville à Montreuil ! Cette année, le thème, c'est « les pays du monde ».\n\nSamedi, il y a un grand marché avec des plats de 20 pays, dans le parc. Le soir, à 21 h, il y a un concert gratuit sur la place de la Mairie. Dimanche matin, les enfants font une course dans les rues.\n\nLes rues du centre sont fermées aux voitures pendant les deux jours. Prenez le métro !" },
    questions: [
      { q: "La fête de la ville est…", o: ["en mai", "en juin", "en juillet"], a: 1, x: "« Le week-end du 28 et 29 juin »." },
      { q: "Le thème de la fête, c'est…", o: ["🎨 l'art", "⚽ le sport", "🌍 les pays du monde"], a: 2, x: "« le thème, c'est « les pays du monde » »." },
      { q: "Le marché est…", o: ["dans le parc", "sur la place de la Mairie", "à la gare"], a: 0, x: "« un grand marché avec des plats de 20 pays, dans le parc »." },
      { q: "Le concert est…", o: ["à 5 €", "gratuit", "à 21 €"], a: 1, x: "« il y a un concert gratuit »." },
      { q: "Dimanche matin…", o: ["il y a un concert", "il y a un marché", "les enfants font une course"], a: 2, x: "« Dimanche matin, les enfants font une course dans les rues. »" },
      { q: "On peut aller au centre-ville en voiture.", o: ["Vrai", "Faux"], a: 1, x: "« Les rues du centre sont fermées aux voitures »." }
    ] },

  /* ───────── Sujet 5 ───────── */
  { id: "a1-s05-ce1", level: "A1", sujet: 5, sec: "ce", ex: 1, pts: 6,
    title: "Un pique-nique au parc",
    consigne: "Vous recevez ce courriel d'une amie. Lisez le document, puis répondez aux questions.",
    help: { tr: "Bir arkadaşınızdan bu e-postayı alıyorsunuz. Belgeyi okuyun, sonra soruları cevaplayın.", en: "You receive this e-mail from a friend. Read the document, then answer the questions." },
    doc: { type: "email", from: "Amina", to: "Esin", subject: "Pique-nique dimanche ?",
      body: "Coucou Esin,\n\nTu es libre dimanche ? Avec Karim et les enfants, on va faire un pique-nique au parc de la Tête d'Or. Rendez-vous à 12 h devant la grande porte du parc.\n\nJ'apporte les sandwichs et des jus de fruits. Toi, tu peux faire ta salade turque ? Elle est délicieuse ! 😋\n\nAprès le repas, on va faire du bateau sur le lac. N'oublie pas ta casquette : il va faire chaud.\n\nS'il pleut, on va au musée.\n\nBisous,\nAmina" },
    questions: [
      { q: "Le pique-nique est…", o: ["samedi", "dimanche", "lundi"], a: 1, x: "« Tu es libre dimanche ? […] on va faire un pique-nique »." },
      { q: "Le rendez-vous est…", o: ["devant la porte du parc", "au bord du lac", "devant le musée"], a: 0, x: "« Rendez-vous à 12 h devant la grande porte du parc. »" },
      { q: "Amina vous demande d'apporter…", o: ["🥪 des sandwichs", "🧃 des jus de fruits", "🥗 une salade"], a: 2, x: "« tu peux faire ta salade turque ? » Amina apporte les sandwichs et les jus." },
      { q: "Après le repas, ils vont…", o: ["🚲 faire du vélo", "🚣 faire du bateau", "⚽ jouer au foot"], a: 1, x: "« Après le repas, on va faire du bateau sur le lac. »" },
      { q: "Il va faire froid dimanche.", o: ["Vrai", "Faux"], a: 1, x: "« N'oublie pas ta casquette : il va faire chaud. »" },
      { q: "S'il pleut, ils vont…", o: ["au cinéma", "chez Amina", "au musée"], a: 2, x: "« S'il pleut, on va au musée. »" }
    ] },

  { id: "a1-s05-ce2", level: "A1", sujet: 5, sec: "ce", ex: 2, pts: 6,
    title: "Pharmacies de garde",
    consigne: "Vous lisez cette affiche sur la porte de la pharmacie. Répondez aux questions.",
    help: { tr: "Eczanenin kapısında bu afişi okuyorsunuz. Soruları cevaplayın.", en: "You read this poster on the pharmacy door. Answer the questions." },
    doc: { type: "affiche", title: "Pharmacie du Centre",
      body: "Ouverte du lundi au samedi, de 9 h à 19 h 30.\nFermée le dimanche, sauf quand elle est de garde.\n\nPharmacies de garde le dimanche, ce mois-ci :\n• Dimanche 5 : Pharmacie de la Gare, 3 avenue Foch\n• Dimanche 12 : Pharmacie du Parc, 18 rue Pasteur\n• Dimanche 19 : Pharmacie du Centre (ici !)\n• Dimanche 26 : Pharmacie Moderne, 7 place Bellecour\n\nLa nuit, sonnez à la porte et montrez votre ordonnance." },
    questions: [
      { q: "La Pharmacie du Centre ferme à…", o: ["19 h", "20 h", "19 h 30"], a: 2, x: "« de 9 h à 19 h 30 »." },
      { q: "Dimanche 12, vous allez à…", o: ["la Pharmacie du Parc", "la Pharmacie de la Gare", "la Pharmacie Moderne"], a: 0, x: "« Dimanche 12 : Pharmacie du Parc, 18 rue Pasteur »." },
      { q: "La Pharmacie du Centre est de garde…", o: ["dimanche 5", "dimanche 19", "dimanche 26"], a: 1, x: "« Dimanche 19 : Pharmacie du Centre (ici !) »." },
      { q: "La Pharmacie Moderne est…", o: ["avenue Foch", "rue Pasteur", "place Bellecour"], a: 2, x: "« Pharmacie Moderne, 7 place Bellecour »." },
      { q: "La nuit, vous montrez votre ordonnance.", o: ["Vrai", "Faux"], a: 0, x: "« La nuit, sonnez à la porte et montrez votre ordonnance. »" }
    ] },

  { id: "a1-s05-ce3", level: "A1", sujet: 5, sec: "ce", ex: 3, pts: 6,
    title: "Programme du cinéma",
    consigne: "Vous voulez aller au cinéma. Vous lisez le programme. Répondez aux questions.",
    help: { tr: "Sinemaya gitmek istiyorsunuz. Programı okuyorsunuz. Soruları cevaplayın.", en: "You want to go to the cinema. You read the programme. Answer the questions." },
    doc: { type: "programme", title: "Cinéma Le Rex – Programme de la semaine",
      body: "Tarif normal : 9 €. Tarif réduit (étudiants, moins de 14 ans) : 6 €.\nLe lundi : 5 € pour tous !\nVO = version originale avec sous-titres en français.",
      rows: [["Film", "Genre", "Durée", "Séances"], ["Le Roi des neiges", "Dessin animé", "1 h 25", "14 h · 16 h"], ["Paris, mon amour", "Comédie", "1 h 50", "18 h 15 · 20 h 45"], ["La Nuit noire (VO)", "Film policier", "2 h 05", "21 h"], ["Les Montagnes", "Documentaire", "1 h 30", "18 h"]] },
    questions: [
      { q: "Vous allez au cinéma avec vos enfants l'après-midi. Vous regardez…", o: ["La Nuit noire", "Le Roi des neiges", "Les Montagnes"], a: 1, x: "« Le Roi des neiges » : dessin animé, à 14 h et à 16 h." },
      { q: "Le film le plus long, c'est…", o: ["Paris, mon amour", "Les Montagnes", "La Nuit noire"], a: 2, x: "« La Nuit noire » dure « 2 h 05 »." },
      { q: "« Paris, mon amour », c'est…", o: ["🕵️ un film policier", "🏔️ un documentaire", "😂 une comédie"], a: 2, x: "« Paris, mon amour : Comédie »." },
      { q: "Le lundi, une place coûte…", o: ["5 €", "6 €", "9 €"], a: 0, x: "« Le lundi : 5 € pour tous ! »" },
      { q: "« La Nuit noire » a des sous-titres en français.", o: ["Vrai", "Faux"], a: 0, x: "« La Nuit noire (VO) » et « VO = version originale avec sous-titres en français »." }
    ] },

  { id: "a1-s05-ce4", level: "A1", sujet: 5, sec: "ce", ex: 4, pts: 7,
    title: "Promotions au supermarché",
    consigne: "Vous lisez cette publicité dans votre boîte aux lettres. Répondez aux questions.",
    help: { tr: "Posta kutunuzda bu reklamı okuyorsunuz. Soruları cevaplayın.", en: "You read this advertisement from your letterbox. Answer the questions." },
    doc: { type: "annonce", title: "Marché Plus – Les promos de la semaine",
      body: "Du mercredi 3 au samedi 6 avril seulement !\n\n🍓 Fraises d'Espagne : 2,50 € la barquette\n🧀 Fromage râpé : 2 paquets achetés = le 3e gratuit\n☕ Café : – 30 %\n🍞 Pain de mie : 1,20 €\n\nNouveau : livraison gratuite à la maison à partir de 60 € d'achats.\n\nLe magasin est ouvert du lundi au samedi de 8 h 30 à 20 h, et le dimanche de 9 h à 12 h 30." },
    questions: [
      { q: "Les promotions finissent…", o: ["mercredi", "samedi", "dimanche"], a: 1, x: "« Du mercredi 3 au samedi 6 avril seulement ! »" },
      { q: "Les fraises coûtent…", o: ["1,20 €", "2 €", "2,50 €"], a: 2, x: "« Fraises d'Espagne : 2,50 € la barquette »." },
      { q: "Vous prenez 3 paquets de fromage râpé. Vous payez…", o: ["1 paquet", "2 paquets", "3 paquets"], a: 1, x: "« 2 paquets achetés = le 3e gratuit »." },
      { q: "Le café est moins cher.", o: ["Vrai", "Faux"], a: 0, x: "« Café : – 30 % »." },
      { q: "La livraison est gratuite à partir de 40 € d'achats.", o: ["Vrai", "Faux"], a: 1, x: "« livraison gratuite […] à partir de 60 € d'achats »." },
      { q: "Le dimanche, le magasin est ouvert…", o: ["l'après-midi", "le matin", "toute la journée"], a: 1, x: "« le dimanche de 9 h à 12 h 30 »." }
    ] }
);
