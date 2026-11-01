/* DELF A1 — reading (compréhension des écrits), papers 11–15 */
(window.DELF = window.DELF || []).push(

  /* ───────── Sujet 11 ───────── */
  { id: "a1-s11-ce1", level: "A1", sujet: 11, sec: "ce", ex: 1, pts: 6,
    title: "Nouvelles de Bordeaux",
    consigne: "Vous recevez ce courriel d'une amie. Lisez le document, puis répondez aux questions.",
    help: { tr: "Bir arkadaşınızdan bu e-postayı alıyorsunuz. Belgeyi okuyun, sonra soruları cevaplayın.", en: "You receive this e-mail from a friend. Read the document, then answer the questions." },
    doc: { type: "email", from: "Mathilde", to: "Esin", subject: "Ma nouvelle vie à Bordeaux",
      body: "Salut Esin,\n\nÇa y est, j'habite à Bordeaux depuis deux semaines ! Mon appartement est petit, mais il est près du fleuve, la Garonne. Je vais au travail à vélo : 15 minutes seulement.\n\nMes collègues sont sympas. Le soir, je cours au bord de l'eau avec Paul, un voisin. Il fait plus chaud qu'à Lille, c'est super !\n\nTu viens me voir en octobre ? J'ai un canapé-lit pour toi. En train, Paris-Bordeaux, c'est 2 heures.\n\nGros bisous,\nMathilde" },
    questions: [
      { q: "Mathilde habite à Bordeaux depuis…", o: ["deux semaines", "deux mois", "deux ans"], a: 0, x: "« j'habite à Bordeaux depuis deux semaines ! »" },
      { q: "Mathilde va au travail…", o: ["🚌 en bus", "🚗 en voiture", "🚲 à vélo"], a: 2, x: "« Je vais au travail à vélo : 15 minutes seulement. »" },
      { q: "Le soir, Mathilde…", o: ["🏃 court au bord de l'eau", "🏊 va à la piscine", "🍽️ dîne avec ses collègues"], a: 0, x: "« Le soir, je cours au bord de l'eau avec Paul »." },
      { q: "L'appartement de Mathilde est grand.", o: ["Vrai", "Faux"], a: 1, x: "Mathilde écrit : « Mon appartement est petit »." },
      { q: "Mathilde vous invite…", o: ["en octobre", "en août", "en décembre"], a: 0, x: "« Tu viens me voir en octobre ? »" },
      { q: "Chez Mathilde, vous allez dormir…", o: ["🛋️ sur un canapé-lit", "🏨 à l'hôtel", "🏠 chez Paul"], a: 0, x: "« J'ai un canapé-lit pour toi. »" }
    ] },

  { id: "a1-s11-ce2", level: "A1", sujet: 11, sec: "ce", ex: 2, pts: 6,
    title: "Horaires de la boulangerie",
    consigne: "Vous voyez cette affiche sur la porte de la boulangerie. Lisez-la, puis répondez aux questions.",
    help: { tr: "Fırının kapısında bu afişi görüyorsunuz. Okuyun, sonra soruları cevaplayın.", en: "You see this poster on the bakery door. Read it, then answer the questions." },
    doc: { type: "affiche", title: "Boulangerie-Pâtisserie « Au Bon Croissant »",
      body: "Horaires d'ouverture\n\nDu mardi au vendredi : 7 h – 13 h 30 et 15 h 30 – 19 h 30\nSamedi : 7 h – 19 h 30 (sans pause)\nDimanche : 7 h – 13 h\nFermé le lundi.\n\nVacances d'été : fermé du 4 au 25 août.\n\nGâteaux d'anniversaire sur commande, 48 heures avant.\nLe pain de la veille : 50 % moins cher !\nCarte bancaire à partir de 2 €." },
    questions: [
      { q: "La boulangerie est fermée…", o: ["le lundi", "le samedi", "le dimanche"], a: 0, x: "« Fermé le lundi. »" },
      { q: "Le mardi, à 14 h, la boulangerie est…", o: ["ouverte jusqu'à 19 h 30", "fermée", "ouverte sans pause"], a: 1, x: "Du mardi au vendredi : « 7 h – 13 h 30 et 15 h 30 – 19 h 30 ». À 14 h, c'est fermé." },
      { q: "Le dimanche après-midi, la boulangerie est ouverte.", o: ["Vrai", "Faux"], a: 1, x: "« Dimanche : 7 h – 13 h » : seulement le matin." },
      { q: "Pour un gâteau d'anniversaire, vous commandez…", o: ["le jour même", "une semaine avant", "48 heures avant"], a: 2, x: "« Gâteaux d'anniversaire sur commande, 48 heures avant. »" },
      { q: "Le pain d'hier coûte moins cher.", o: ["Vrai", "Faux"], a: 0, x: "« Le pain de la veille : 50 % moins cher ! »" },
      { q: "En août, la boulangerie est fermée…", o: ["tout le mois", "du 25 au 31", "du 4 au 25"], a: 2, x: "« Vacances d'été : fermé du 4 au 25 août. »" }
    ] },

  { id: "a1-s11-ce3", level: "A1", sujet: 11, sec: "ce", ex: 3, pts: 6,
    title: "Journée portes ouvertes sportive",
    consigne: "Vous voulez faire du sport. Vous lisez ce programme. Répondez aux questions.",
    help: { tr: "Spor yapmak istiyorsunuz. Bu programı okuyorsunuz. Soruları cevaplayın.", en: "You want to do some sport. You read this programme. Answer the questions." },
    doc: { type: "programme", title: "Complexe sportif Jean-Bouin – Journée portes ouvertes",
      body: "Samedi 13 septembre, de 10 h à 18 h. Entrée gratuite.\nVenez essayer nos sports ! Apportez des baskets et une bouteille d'eau.\nInscription au club ce jour-là : 20 % de réduction.",
      rows: [["Heure", "Activité", "Lieu"], ["10 h", "Yoga pour débutants", "Salle 1"], ["11 h", "Basket (8–12 ans)", "Gymnase"], ["14 h", "Natation adultes", "Piscine"], ["15 h 30", "Boxe", "Salle 2"], ["17 h", "Course à pied (5 km)", "Stade"]] },
    questions: [
      { q: "La journée portes ouvertes est…", o: ["dimanche 13 septembre", "samedi 13 septembre", "samedi 18 septembre"], a: 1, x: "« Samedi 13 septembre, de 10 h à 18 h. »" },
      { q: "Vous voulez nager. Vous allez…", o: ["à la piscine à 14 h", "au gymnase à 11 h", "au stade à 17 h"], a: 0, x: "« 14 h – Natation adultes – Piscine »." },
      { q: "Le cours de boxe est…", o: ["dans la salle 1", "dans la salle 2", "au gymnase"], a: 1, x: "« 15 h 30 – Boxe – Salle 2 »." },
      { q: "Le yoga commence à…", o: ["11 h", "15 h 30", "10 h"], a: 2, x: "« 10 h – Yoga pour débutants – Salle 1 »." },
      { q: "L'entrée coûte 20 €.", o: ["Vrai", "Faux"], a: 1, x: "« Entrée gratuite. » Les 20 %, c'est la réduction pour l'inscription." },
      { q: "Ce jour-là, l'inscription au club est moins chère.", o: ["Vrai", "Faux"], a: 0, x: "« Inscription au club ce jour-là : 20 % de réduction. »" }
    ] },

  { id: "a1-s11-ce4", level: "A1", sujet: 11, sec: "ce", ex: 4, pts: 7,
    title: "Chambre à louer",
    consigne: "Vous cherchez une chambre. Vous lisez cette annonce sur internet. Répondez aux questions.",
    help: { tr: "Bir oda arıyorsunuz. İnternette bu ilanı okuyorsunuz. Soruları cevaplayın.", en: "You are looking for a room. You read this ad on the internet. Answer the questions." },
    doc: { type: "annonce", title: "Chambre à louer chez l'habitant",
      body: "Je loue une chambre meublée de 12 m² dans ma maison, à Talence, à 10 minutes du tram.\n\nDans la chambre, il y a un lit, un bureau et une armoire. La cuisine et la salle de bains sont à partager avec moi et mon chat.\n\nLoyer : 420 € par mois, tout compris (eau, électricité, internet).\nPour une personne seule, non-fumeur. Libre le 1er octobre.\n\nVisite possible le mercredi soir ou le dimanche.\nÉcrivez-moi : anne.morel@mail.fr\nAnne, 58 ans" },
    questions: [
      { q: "Dans la chambre, il y a…", o: ["une cuisine et un lit", "un lit, un bureau et une armoire", "une salle de bains et un bureau"], a: 1, x: "« Dans la chambre, il y a un lit, un bureau et une armoire. »" },
      { q: "Internet est compris dans le loyer.", o: ["Vrai", "Faux"], a: 0, x: "« Loyer : 420 € par mois, tout compris (eau, électricité, internet). »" },
      { q: "Anne habite avec…", o: ["🐕 un chien", "👧 sa fille", "🐈 un chat"], a: 2, x: "« à partager avec moi et mon chat »." },
      { q: "La maison est près…", o: ["du tram", "du métro", "de la gare"], a: 0, x: "« à Talence, à 10 minutes du tram »." },
      { q: "Deux amis peuvent louer la chambre ensemble.", o: ["Vrai", "Faux"], a: 1, x: "« Pour une personne seule »." },
      { q: "Vous pouvez visiter la chambre…", o: ["le lundi soir", "le mercredi soir", "le samedi"], a: 1, x: "« Visite possible le mercredi soir ou le dimanche. »" }
    ] },

  /* ───────── Sujet 12 ───────── */
  { id: "a1-s12-ce1", level: "A1", sujet: 12, sec: "ce", ex: 1, pts: 6,
    title: "Carte postale de Biarritz",
    consigne: "Vous recevez cette carte postale d'un ami. Lisez-la, puis répondez aux questions.",
    help: { tr: "Bir arkadaşınızdan bu kartpostalı alıyorsunuz. Okuyun, sonra soruları cevaplayın.", en: "You receive this postcard from a friend. Read it, then answer the questions." },
    doc: { type: "carte", from: "Hugo", to: "Esin",
      body: "Salut Esin !\n\nJe suis à Biarritz pour un stage de surf d'une semaine. C'est génial ! On a cours tous les matins, de 9 h à 11 h. Le prof s'appelle Julien, il est très patient.\n\nL'eau est froide, alors je porte une combinaison. L'après-midi, je dors un peu et je visite la ville. J'ai mal aux bras, mais je suis content !\n\nJe rentre vendredi en train. Samedi, on va à la salle de sport ensemble ?\n\nBises,\nHugo" },
    questions: [
      { q: "Hugo fait un stage de…", o: ["⛵ voile", "🏄 surf", "🤿 plongée"], a: 1, x: "« Je suis à Biarritz pour un stage de surf d'une semaine. »" },
      { q: "Les cours de surf sont…", o: ["le matin", "l'après-midi", "le soir"], a: 0, x: "« On a cours tous les matins, de 9 h à 11 h. »" },
      { q: "Le professeur s'appelle Julien.", o: ["Vrai", "Faux"], a: 0, x: "« Le prof s'appelle Julien, il est très patient. »" },
      { q: "Hugo porte une combinaison parce que…", o: ["il a mal aux bras", "il fait chaud", "l'eau est froide"], a: 2, x: "« L'eau est froide, alors je porte une combinaison. »" },
      { q: "L'après-midi, Hugo…", o: ["🏄 fait du surf", "🏙️ visite la ville", "🏋️ va à la salle de sport"], a: 1, x: "« L'après-midi, je dors un peu et je visite la ville. »" },
      { q: "Hugo rentre…", o: ["samedi en train", "vendredi en bus", "vendredi en train"], a: 2, x: "« Je rentre vendredi en train. »" }
    ] },

  { id: "a1-s12-ce2", level: "A1", sujet: 12, sec: "ce", ex: 2, pts: 6,
    title: "À la laverie",
    consigne: "Votre machine à laver est en panne. Vous allez à la laverie et vous lisez ce mode d'emploi. Répondez aux questions.",
    help: { tr: "Çamaşır makineniz bozuk. Çamaşırhaneye gidiyorsunuz ve bu kullanım talimatını okuyorsunuz. Soruları cevaplayın.", en: "Your washing machine is broken. You go to the laundromat and read these instructions. Answer the questions." },
    doc: { type: "notice", title: "Laverie Lav'Express – Mode d'emploi",
      body: "Ouvert tous les jours, de 7 h à 22 h.\n\n1. Mettez votre linge dans la machine (8 kg maximum).\n2. Choisissez la température : 30 °C, 40 °C ou 60 °C.\n3. Payez à la caisse automatique : pièces ou carte bancaire.\n\nLavage : 5 €. Séchage : 1 € pour 10 minutes.\nLa lessive est comprise dans le prix.\n\nNe laissez pas votre linge dans la machine après la fin, s'il vous plaît.\nUn problème ? Appelez le 05 56 12 34 56." },
    questions: [
      { q: "La laverie ferme à…", o: ["7 h", "22 h", "19 h"], a: 1, x: "« Ouvert tous les jours, de 7 h à 22 h. »" },
      { q: "Dans une machine, vous mettez au maximum…", o: ["5 kg", "10 kg", "8 kg"], a: 2, x: "« Mettez votre linge dans la machine (8 kg maximum). »" },
      { q: "Vous devez apporter votre lessive.", o: ["Vrai", "Faux"], a: 1, x: "« La lessive est comprise dans le prix. »" },
      { q: "Vous lavez votre linge et vous le séchez 20 minutes. Vous payez…", o: ["7 €", "6 €", "5 €"], a: 0, x: "« Lavage : 5 €. Séchage : 1 € pour 10 minutes » : 5 + 2 = 7 €." },
      { q: "Vous pouvez payer avec une carte bancaire.", o: ["Vrai", "Faux"], a: 0, x: "« Payez à la caisse automatique : pièces ou carte bancaire. »" }
    ] },

  { id: "a1-s12-ce3", level: "A1", sujet: 12, sec: "ce", ex: 3, pts: 6,
    title: "Les jours des poubelles",
    consigne: "Vous habitez dans une nouvelle ville. Vous lisez ce document de la mairie. Répondez aux questions.",
    help: { tr: "Yeni bir şehirde yaşıyorsunuz. Belediyenin bu belgesini okuyorsunuz. Soruları cevaplayın.", en: "You live in a new town. You read this document from the town hall. Answer the questions." },
    doc: { type: "horaires", title: "Mairie de Pessac – Ramassage des poubelles",
      body: "Sortez vos poubelles la veille au soir, après 19 h.\nLe verre (bouteilles, pots) : dans les conteneurs de la rue, pas dans les poubelles.\nLes jours fériés, pas de ramassage.",
      rows: [["Poubelle", "Quoi ?", "Jour"], ["Grise", "Déchets de la cuisine, sacs", "Lundi et jeudi"], ["Jaune", "Papier, carton, plastique", "Mercredi"], ["Verte", "Herbe, feuilles, fleurs", "Samedi (d'avril à octobre)"]] },
    questions: [
      { q: "Vous avez une boîte en carton. Vous la mettez dans la poubelle…", o: ["jaune", "grise", "verte"], a: 0, x: "Poubelle jaune : « Papier, carton, plastique »." },
      { q: "La poubelle grise passe…", o: ["le mercredi", "le samedi", "le lundi et le jeudi"], a: 2, x: "Poubelle grise : « Lundi et jeudi »." },
      { q: "Vous sortez la poubelle jaune…", o: ["mercredi soir", "mardi soir, après 19 h", "lundi matin"], a: 1, x: "La poubelle jaune passe le mercredi. « Sortez vos poubelles la veille au soir, après 19 h » : mardi soir." },
      { q: "Les bouteilles en verre vont dans la poubelle jaune.", o: ["Vrai", "Faux"], a: 1, x: "« Le verre (bouteilles, pots) : dans les conteneurs de la rue, pas dans les poubelles. »" },
      { q: "Les jours fériés, les poubelles ne passent pas.", o: ["Vrai", "Faux"], a: 0, x: "« Les jours fériés, pas de ramassage. »" }
    ] },

  { id: "a1-s12-ce4", level: "A1", sujet: 12, sec: "ce", ex: 4, pts: 7,
    title: "La recette des crêpes",
    consigne: "Vous lisez cette recette dans un magazine. Répondez aux questions.",
    help: { tr: "Bir dergide bu tarifi okuyorsunuz. Soruları cevaplayın.", en: "You read this recipe in a magazine. Answer the questions." },
    doc: { type: "recette", title: "Les crêpes de Mamie Jeanne",
      body: "Pour 12 crêpes. Préparation : 10 minutes. Repos : 1 heure.\n\nIl faut : 250 g de farine, 4 œufs, un demi-litre de lait, 1 pincée de sel, 2 cuillères de sucre et 50 g de beurre fondu.\n\nMettez la farine dans un grand bol. Ajoutez les œufs, puis le lait petit à petit. Mélangez bien. Ajoutez le sel, le sucre et le beurre. Laissez reposer la pâte une heure.\n\nFaites cuire les crêpes dans une poêle chaude, une minute de chaque côté. Mangez-les avec du sucre, de la confiture ou du chocolat !" },
    questions: [
      { q: "Avec cette recette, vous faites…", o: ["4 crêpes", "12 crêpes", "10 crêpes"], a: 1, x: "« Pour 12 crêpes. »" },
      { q: "Pour la pâte, il faut combien d'œufs ?", o: ["4", "2", "1"], a: 0, x: "« Il faut : 250 g de farine, 4 œufs […] »." },
      { q: "Dans le grand bol, vous mettez d'abord…", o: ["🥛 le lait", "🥚 les œufs", "🌾 la farine"], a: 2, x: "« Mettez la farine dans un grand bol. Ajoutez les œufs, puis le lait »." },
      { q: "La pâte repose…", o: ["une heure", "10 minutes", "une minute"], a: 0, x: "« Laissez reposer la pâte une heure. »" },
      { q: "Vous faites cuire chaque côté de la crêpe une minute.", o: ["Vrai", "Faux"], a: 0, x: "« une minute de chaque côté »." },
      { q: "On peut manger les crêpes avec…", o: ["du fromage", "de la confiture", "du sel"], a: 1, x: "« Mangez-les avec du sucre, de la confiture ou du chocolat ! »" }
    ] },

  /* ───────── Sujet 13 ───────── */
  { id: "a1-s13-ce1", level: "A1", sujet: 13, sec: "ce", ex: 1, pts: 6,
    title: "Courir dimanche matin",
    consigne: "Vous recevez ce SMS d'une amie. Lisez le message, puis répondez aux questions.",
    help: { tr: "Bir arkadaşınızdan bu SMS'i alıyorsunuz. Mesajı okuyun, sonra soruları cevaplayın.", en: "You receive this text message from a friend. Read it, then answer the questions." },
    doc: { type: "sms", from: "Yasmine", to: "Esin",
      body: "Coucou Esin ! Tu es libre dimanche matin ? Avec Théo et Léa, on va courir autour du lac du parc de la Tête d'Or. On fait 6 km, doucement, pas de compétition 😉\n\nRendez-vous à 9 h 30 devant l'entrée principale du parc. Après, on prend un petit-déjeuner au café du parc.\n\nPrends un k-way : il va peut-être pleuvoir. Si tu viens, réponds-moi avant samedi midi. Bisous !" },
    questions: [
      { q: "Yasmine vous propose de…", o: ["🚲 faire du vélo", "🏃 courir", "🏊 nager"], a: 1, x: "« on va courir autour du lac »." },
      { q: "Le rendez-vous est à…", o: ["9 h 30", "6 h", "12 h"], a: 0, x: "« Rendez-vous à 9 h 30 devant l'entrée principale du parc. »" },
      { q: "Ils vont faire…", o: ["3 km", "9 km", "6 km"], a: 2, x: "« On fait 6 km, doucement »." },
      { q: "Le rendez-vous est devant…", o: ["le café", "l'entrée du parc", "le lac"], a: 1, x: "« devant l'entrée principale du parc »." },
      { q: "Après la course, ils vont…", o: ["prendre un petit-déjeuner", "faire une compétition", "rentrer à la maison"], a: 0, x: "« Après, on prend un petit-déjeuner au café du parc. »" },
      { q: "Vous devez répondre avant samedi midi.", o: ["Vrai", "Faux"], a: 0, x: "« Si tu viens, réponds-moi avant samedi midi. »" }
    ] },

  { id: "a1-s13-ce2", level: "A1", sujet: 13, sec: "ce", ex: 2, pts: 6,
    title: "Règles de la bibliothèque",
    consigne: "Vous êtes à la bibliothèque. Vous lisez ces règles sur le mur. Répondez aux questions.",
    help: { tr: "Kütüphanedesiniz. Duvardaki bu kuralları okuyorsunuz. Soruları cevaplayın.", en: "You are at the library. You read these rules on the wall. Answer the questions." },
    doc: { type: "affiche", title: "Bibliothèque municipale – Bienvenue !",
      body: "• Parlez doucement : les gens lisent et travaillent.\n• Téléphone : pas d'appels dans les salles, seulement dans le hall.\n• Les boissons sont interdites, mais les bouteilles d'eau sont acceptées.\n• Rendez vos livres dans 3 semaines. Un retard ? Pas d'amende, mais pas de nouveaux livres pendant une semaine.\n• Le wifi est gratuit : demandez le code à l'accueil.\n• Les enfants de moins de 8 ans restent avec un adulte." },
    questions: [
      { q: "Vous voulez téléphoner. Vous allez…", o: ["dans le hall", "à l'accueil", "dans la salle de lecture"], a: 0, x: "« Téléphone : pas d'appels dans les salles, seulement dans le hall. »" },
      { q: "Dans la bibliothèque, vous pouvez boire…", o: ["☕ un café", "💧 de l'eau", "🧃 un jus de fruits"], a: 1, x: "« Les boissons sont interdites, mais les bouteilles d'eau sont acceptées. »" },
      { q: "Vous rendez vos livres après…", o: ["1 semaine", "8 jours", "3 semaines"], a: 2, x: "« Rendez vos livres dans 3 semaines. »" },
      { q: "Vous rendez un livre en retard : vous payez une amende.", o: ["Vrai", "Faux"], a: 1, x: "« Un retard ? Pas d'amende, mais pas de nouveaux livres pendant une semaine. »" },
      { q: "Pour avoir le code du wifi, vous demandez…", o: ["dans le hall", "à un adulte", "à l'accueil"], a: 2, x: "« Le wifi est gratuit : demandez le code à l'accueil. »" }
    ] },

  { id: "a1-s13-ce3", level: "A1", sujet: 13, sec: "ce", ex: 3, pts: 6,
    title: "La semaine du sport-santé",
    consigne: "Vous lisez ce programme dans le journal de la ville. Répondez aux questions.",
    help: { tr: "Şehrin gazetesinde bu programı okuyorsunuz. Soruları cevaplayın.", en: "You read this programme in the town newspaper. Answer the questions." },
    doc: { type: "programme", title: "Mairie de Villeneuve – Semaine du sport-santé",
      body: "Du lundi 6 au samedi 11 octobre. Activités gratuites pour les adultes.\nInscription à l'accueil de la mairie ou au 04 72 00 11 22.\nPensez à une tenue de sport !",
      rows: [["Jour", "Heure", "Activité", "Lieu"], ["Lundi", "18 h", "Atelier « Mal au dos ? » avec une kinésithérapeute", "Mairie, salle 2"], ["Mercredi", "10 h", "Marche nordique (6 km)", "Parc des Sports"], ["Jeudi", "12 h 30", "Gym douce", "Gymnase Colette"], ["Samedi", "9 h", "Vélo en famille (15 km)", "Place de la Mairie"]] },
    questions: [
      { q: "Vous avez mal au dos. Vous allez à l'atelier…", o: ["lundi à 18 h", "mercredi à 10 h", "jeudi à 12 h 30"], a: 0, x: "« Lundi – 18 h – Atelier « Mal au dos ? » avec une kinésithérapeute »." },
      { q: "La marche nordique est…", o: ["au gymnase Colette", "au parc des Sports", "place de la Mairie"], a: 1, x: "« Mercredi – 10 h – Marche nordique (6 km) – Parc des Sports »." },
      { q: "Le vélo en famille fait…", o: ["6 km", "12 km", "15 km"], a: 2, x: "« Samedi – 9 h – Vélo en famille (15 km) »." },
      { q: "Les activités sont payantes.", o: ["Vrai", "Faux"], a: 1, x: "« Activités gratuites pour les adultes. »" },
      { q: "Pour vous inscrire, vous pouvez téléphoner.", o: ["Vrai", "Faux"], a: 0, x: "« Inscription à l'accueil de la mairie ou au 04 72 00 11 22. »" },
      { q: "La gym douce est à l'heure du…", o: ["dîner", "déjeuner", "petit-déjeuner"], a: 1, x: "« Jeudi – 12 h 30 – Gym douce » : 12 h 30, c'est l'heure du déjeuner." }
    ] },

  { id: "a1-s13-ce4", level: "A1", sujet: 13, sec: "ce", ex: 4, pts: 7,
    title: "La fête des voisins",
    consigne: "Vous lisez cet article dans le journal du quartier. Répondez aux questions.",
    help: { tr: "Mahalle gazetesinde bu makaleyi okuyorsunuz. Soruları cevaplayın.", en: "You read this article in the neighbourhood newspaper. Answer the questions." },
    doc: { type: "article", title: "Une grande table dans la rue Paul-Bert",
      body: "Vendredi 30 mai, c'est la fête des voisins ! Rue Paul-Bert, les habitants préparent une table de 50 mètres au milieu de la rue.\n\nLa fête commence à 19 h. Chaque voisin apporte un plat, une salade ou un dessert. La boulangerie offre le pain. Il y a de la musique avec le groupe de l'école et des jeux pour les enfants.\n\nLa rue est fermée aux voitures de 17 h à minuit. « C'est un bon moment pour se rencontrer », explique Martine, 72 ans, l'organisatrice." },
    questions: [
      { q: "La fête des voisins est…", o: ["vendredi 30 mai", "samedi 30 mai", "vendredi 17 mai"], a: 0, x: "« Vendredi 30 mai, c'est la fête des voisins ! »" },
      { q: "La fête commence à…", o: ["17 h", "minuit", "19 h"], a: 2, x: "« La fête commence à 19 h. »" },
      { q: "Chaque voisin apporte…", o: ["🥖 le pain", "🥗 un plat ou un dessert", "🎵 la musique"], a: 1, x: "« Chaque voisin apporte un plat, une salade ou un dessert. La boulangerie offre le pain. »" },
      { q: "Les voitures peuvent passer dans la rue pendant la fête.", o: ["Vrai", "Faux"], a: 1, x: "« La rue est fermée aux voitures de 17 h à minuit. »" },
      { q: "Martine est…", o: ["la boulangère", "une musicienne", "l'organisatrice"], a: 2, x: "« explique Martine, 72 ans, l'organisatrice »." },
      { q: "La table fait…", o: ["19 mètres", "50 mètres", "72 mètres"], a: 1, x: "« les habitants préparent une table de 50 mètres »." }
    ] },

  /* ───────── Sujet 14 ───────── */
  { id: "a1-s14-ce1", level: "A1", sujet: 14, sec: "ce", ex: 1, pts: 6,
    title: "Un échange de langues",
    consigne: "Vous recevez ce courriel d'une personne qui veut faire un échange de langues avec vous. Lisez-le, puis répondez aux questions.",
    help: { tr: "Sizinle dil değişimi yapmak isteyen birinden bu e-postayı alıyorsunuz. Okuyun, sonra soruları cevaplayın.", en: "You receive this e-mail from someone who wants to do a language exchange with you. Read it, then answer the questions." },
    doc: { type: "email", from: "Camille", to: "Esin", subject: "Échange français-turc",
      body: "Bonjour Esin,\n\nJe m'appelle Camille, j'ai 27 ans et je suis infirmière à l'hôpital. J'ai vu ton annonce à la maison des associations. Je vais en Turquie cet été et je veux apprendre le turc !\n\nJe te propose un échange : une heure en français, une heure en turc. On peut se voir le mardi soir, après mon travail, vers 18 h 30, au café « Le Flore », en face de la gare.\n\nTu es d'accord ? Voici mon numéro : 06 45 78 12 90.\n\nÀ bientôt,\nCamille" },
    questions: [
      { q: "Camille travaille…", o: ["☕ dans un café", "🏥 à l'hôpital", "🚉 à la gare"], a: 1, x: "« je suis infirmière à l'hôpital »." },
      { q: "Camille veut apprendre…", o: ["le français", "l'anglais", "le turc"], a: 2, x: "« je veux apprendre le turc ! »" },
      { q: "Cet été, Camille va…", o: ["en Turquie", "en Angleterre", "à la mer"], a: 0, x: "« Je vais en Turquie cet été »." },
      { q: "Vous allez parler français pendant…", o: ["30 minutes", "deux heures", "une heure"], a: 2, x: "« une heure en français, une heure en turc »." },
      { q: "Camille propose de se voir le mardi soir.", o: ["Vrai", "Faux"], a: 0, x: "« On peut se voir le mardi soir, après mon travail »." },
      { q: "Le café est à côté de l'hôpital.", o: ["Vrai", "Faux"], a: 1, x: "Le café « Le Flore » est « en face de la gare »." }
    ] },

  { id: "a1-s14-ce2", level: "A1", sujet: 14, sec: "ce", ex: 2, pts: 6,
    title: "Donner son sang",
    consigne: "Vous voyez cette affiche à la mairie. Lisez-la, puis répondez aux questions.",
    help: { tr: "Belediyede bu afişi görüyorsunuz. Okuyun, sonra soruları cevaplayın.", en: "You see this poster at the town hall. Read it, then answer the questions." },
    doc: { type: "affiche", title: "Don de sang – Salle des fêtes",
      body: "Jeudi 20 novembre, de 15 h à 19 h 30\nSalle des fêtes, 2 place Jean-Jaurès\n\nVous avez entre 18 et 70 ans ? Vous pesez plus de 50 kg ? Vous pouvez donner votre sang !\n\n• Mangez et buvez bien avant de venir.\n• Apportez une pièce d'identité.\n• Le don dure 10 minutes. Avec le questionnaire et la pause, comptez une heure.\n\nAprès le don, une collation est offerte : boissons, gâteaux, sandwichs.\nDonner son sang, ça sauve des vies !" },
    questions: [
      { q: "Le don de sang est…", o: ["vendredi après-midi", "jeudi matin", "jeudi après-midi"], a: 2, x: "« Jeudi 20 novembre, de 15 h à 19 h 30 »." },
      { q: "Pour donner votre sang, vous devez avoir…", o: ["moins de 18 ans", "entre 18 et 70 ans", "plus de 70 ans"], a: 1, x: "« Vous avez entre 18 et 70 ans ? […] Vous pouvez donner votre sang ! »" },
      { q: "Avant de venir, il faut…", o: ["bien manger et boire", "ne pas boire", "faire une pause"], a: 0, x: "« Mangez et buvez bien avant de venir. »" },
      { q: "Vous apportez…", o: ["📷 une photo", "🥪 un sandwich", "🪪 une pièce d'identité"], a: 2, x: "« Apportez une pièce d'identité. » Les sandwichs sont offerts après le don." },
      { q: "En tout, vous restez environ une heure.", o: ["Vrai", "Faux"], a: 0, x: "« Avec le questionnaire et la pause, comptez une heure. »" }
    ] },

  { id: "a1-s14-ce3", level: "A1", sujet: 14, sec: "ce", ex: 3, pts: 6,
    title: "Bateaux pour Belle-Île",
    consigne: "Vous êtes en vacances à Quiberon. Vous voulez aller à Belle-Île. Vous lisez les horaires des bateaux. Répondez aux questions.",
    help: { tr: "Quiberon'da tatildesiniz. Belle-Île'e gitmek istiyorsunuz. Feribot saatlerini okuyorsunuz. Soruları cevaplayın.", en: "You are on holiday in Quiberon. You want to go to Belle-Île. You read the boat timetable. Answer the questions." },
    doc: { type: "horaires", title: "Quiberon ↔ Belle-Île-en-Mer : horaires des bateaux",
      body: "Horaires du 1er au 30 juin. Traversée : 45 minutes.\nAller-retour : 36 € (adulte), 22 € (enfant de 4 à 17 ans), gratuit pour les moins de 4 ans. Vélo : 18 €.\nArrivez 20 minutes avant le départ.",
      rows: [["Départ Quiberon", "Arrivée Belle-Île", "Départ Belle-Île", "Arrivée Quiberon"], ["8 h 00", "8 h 45", "10 h 30", "11 h 15"], ["11 h 45", "12 h 30", "16 h 15", "17 h 00"], ["17 h 30", "18 h 15", "19 h 30", "20 h 15"]] },
    questions: [
      { q: "Le bateau part de Quiberon à 11 h 45. Il arrive à Belle-Île à…", o: ["11 h 15", "12 h 30", "12 h 45"], a: 1, x: "Départ Quiberon « 11 h 45 », arrivée Belle-Île « 12 h 30 »." },
      { q: "Vous êtes à Belle-Île. Vous voulez être à Quiberon avant midi. Vous prenez le bateau de…", o: ["16 h 15", "19 h 30", "10 h 30"], a: 2, x: "Départ Belle-Île « 10 h 30 », arrivée Quiberon « 11 h 15 »." },
      { q: "Pour un adulte, l'aller-retour coûte…", o: ["36 €", "22 €", "18 €"], a: 0, x: "« Aller-retour : 36 € (adulte) »." },
      { q: "Vous êtes adulte et vous prenez votre vélo. Vous payez en tout…", o: ["36 €", "54 €", "18 €"], a: 1, x: "« 36 € (adulte) » + « Vélo : 18 € » = 54 €." },
      { q: "Votre fils a 2 ans. Son billet coûte 22 €.", o: ["Vrai", "Faux"], a: 1, x: "« gratuit pour les moins de 4 ans »." },
      { q: "Vous devez arriver 20 minutes avant le départ.", o: ["Vrai", "Faux"], a: 0, x: "« Arrivez 20 minutes avant le départ. »" }
    ] },

  { id: "a1-s14-ce4", level: "A1", sujet: 14, sec: "ce", ex: 4, pts: 7,
    title: "Vélo à vendre",
    consigne: "Vous cherchez un vélo. Vous lisez cette annonce sur internet. Répondez aux questions.",
    help: { tr: "Bir bisiklet arıyorsunuz. İnternette bu ilanı okuyorsunuz. Soruları cevaplayın.", en: "You are looking for a bike. You read this ad on the internet. Answer the questions." },
    doc: { type: "annonce", title: "À vendre : vélo de ville",
      body: "Je vends mon vélo de ville, couleur bleue, taille M (pour une personne de 1,60 m à 1,80 m). Il a 3 ans et il est en très bon état.\n\nAvec le vélo : un panier, des lumières et un antivol. Pas de casque.\n\nPrix : 120 € (prix neuf : 300 €). Paiement en espèces seulement.\n\nJe vends parce que je pars vivre au Canada en décembre.\nVous pouvez l'essayer le soir, après 18 h, devant le 8 rue Gambetta.\nSMS au 07 61 23 45 89 – Thomas" },
    questions: [
      { q: "Le vélo est…", o: ["🔵 bleu", "⚫ noir", "🔴 rouge"], a: 0, x: "« Je vends mon vélo de ville, couleur bleue »." },
      { q: "Le vélo a…", o: ["3 ans", "1 an", "8 ans"], a: 0, x: "« Il a 3 ans et il est en très bon état. »" },
      { q: "Avec le vélo, il y a un casque.", o: ["Vrai", "Faux"], a: 1, x: "« Avec le vélo : un panier, des lumières et un antivol. Pas de casque. »" },
      { q: "Thomas vend le vélo…", o: ["300 €", "180 €", "120 €"], a: 2, x: "« Prix : 120 € (prix neuf : 300 €). »" },
      { q: "Vous payez…", o: ["par carte bancaire", "par chèque", "en espèces"], a: 2, x: "« Paiement en espèces seulement. »" },
      { q: "Pour essayer le vélo, vous allez…", o: ["rue Gambetta, le soir", "chez Thomas, le matin", "dans un magasin de vélos"], a: 0, x: "« Vous pouvez l'essayer le soir, après 18 h, devant le 8 rue Gambetta. »" }
    ] },

  /* ───────── Sujet 15 ───────── */
  { id: "a1-s15-ce1", level: "A1", sujet: 15, sec: "ce", ex: 1, pts: 6,
    title: "Une soirée jeux",
    consigne: "Vous recevez ce courriel d'une amie. Lisez le document, puis répondez aux questions.",
    help: { tr: "Bir arkadaşınızdan bu e-postayı alıyorsunuz. Belgeyi okuyun, sonra soruları cevaplayın.", en: "You receive this e-mail from a friend. Read the document, then answer the questions." },
    doc: { type: "email", from: "Inès", to: "Esin", subject: "Soirée jeux samedi !",
      body: "Salut Esin,\n\nSamedi soir, je fais une soirée jeux de société chez moi, avec Karim, Sophie et mon frère Malik. On commence à 20 h. Tu viens ?\n\nJ'habite au 5 rue Voltaire, 4e étage, porte à gauche. Attention, l'ascenseur est en panne !\n\nJe prépare des lasagnes. Tu peux apporter des chips ou des boissons, mais pas d'alcool : Malik a 16 ans.\n\nTu as un jeu de ton pays ? Prends-le ! On veut apprendre.\n\nRéponds-moi par SMS.\nInès" },
    questions: [
      { q: "La soirée commence à…", o: ["16 h", "20 h", "19 h"], a: 1, x: "« On commence à 20 h. »" },
      { q: "Inès habite au…", o: ["4e étage", "5e étage", "1er étage"], a: 0, x: "« J'habite au 5 rue Voltaire, 4e étage ». Le 5, c'est le numéro de la rue." },
      { q: "Vous pouvez prendre l'ascenseur.", o: ["Vrai", "Faux"], a: 1, x: "« Attention, l'ascenseur est en panne ! »" },
      { q: "Inès prépare…", o: ["🥗 une salade", "🍕 des pizzas", "🍝 des lasagnes"], a: 2, x: "« Je prépare des lasagnes. »" },
      { q: "Vous pouvez apporter…", o: ["🍷 du vin", "🥤 des boissons sans alcool", "🍝 des lasagnes"], a: 1, x: "« Tu peux apporter des chips ou des boissons, mais pas d'alcool »." },
      { q: "Inès vous demande aussi…", o: ["un jeu de votre pays", "un gâteau", "une réponse par e-mail"], a: 0, x: "« Tu as un jeu de ton pays ? Prends-le ! » et « Réponds-moi par SMS. »" }
    ] },

  { id: "a1-s15-ce2", level: "A1", sujet: 15, sec: "ce", ex: 2, pts: 6,
    title: "Un semi-marathon en ville",
    consigne: "Vous voyez cette affiche dans votre rue. Lisez-la, puis répondez aux questions.",
    help: { tr: "Sokağınızda bu afişi görüyorsunuz. Okuyun, sonra soruları cevaplayın.", en: "You see this poster in your street. Read it, then answer the questions." },
    doc: { type: "affiche", title: "Semi-marathon de Nantes – Information aux habitants",
      body: "Dimanche 12 avril, le semi-marathon passe dans votre quartier.\n\nDe 7 h à 13 h, les rues Crébillon et de Strasbourg sont fermées aux voitures.\nLe stationnement est interdit du samedi 20 h au dimanche 14 h.\nLes bus 11 et 23 ne passent pas le matin. Prenez le tramway : il fonctionne normalement.\n\nVous voulez aider ? La ville cherche des bénévoles pour donner de l'eau aux coureurs. Inscription sur nantes-course.fr\n\nMerci de votre compréhension !" },
    questions: [
      { q: "Le semi-marathon est…", o: ["samedi 12 avril", "dimanche 12 avril", "dimanche 20 avril"], a: 1, x: "« Dimanche 12 avril, le semi-marathon passe dans votre quartier. »" },
      { q: "Les rues sont fermées aux voitures…", o: ["de 7 h à 13 h", "de 13 h à 20 h", "toute la journée"], a: 0, x: "« De 7 h à 13 h, les rues Crébillon et de Strasbourg sont fermées aux voitures. »" },
      { q: "Samedi à 22 h, vous pouvez laisser votre voiture dans la rue.", o: ["Vrai", "Faux"], a: 1, x: "« Le stationnement est interdit du samedi 20 h au dimanche 14 h. »" },
      { q: "Dimanche matin, pour aller en ville, vous prenez…", o: ["🚌 le bus 11", "🚌 le bus 23", "🚊 le tramway"], a: 2, x: "« Les bus 11 et 23 ne passent pas le matin. Prenez le tramway »." },
      { q: "Les bénévoles vont…", o: ["fermer les rues", "donner de l'eau aux coureurs", "conduire les bus"], a: 1, x: "« La ville cherche des bénévoles pour donner de l'eau aux coureurs. »" }
    ] },

  { id: "a1-s15-ce3", level: "A1", sujet: 15, sec: "ce", ex: 3, pts: 6,
    title: "Les cours de la salle de sport",
    consigne: "Vous êtes inscrit(e) dans une salle de sport. Vous lisez le planning des cours. Répondez aux questions.",
    help: { tr: "Bir spor salonuna kayıtlısınız. Derslerin programını okuyorsunuz. Soruları cevaplayın.", en: "You are a member of a gym. You read the class schedule. Answer the questions." },
    doc: { type: "horaires", title: "Salle Form'Action – Planning des cours collectifs",
      body: "Les cours sont compris dans l'abonnement.\nRéservez votre place sur l'application, 24 h avant. Maximum 15 personnes par cours.\nServiette obligatoire.",
      rows: [["Jour", "Heure", "Cours", "Coach"], ["Lundi", "12 h 15", "Pilates", "Nora"], ["Lundi", "19 h", "Zumba", "Léo"], ["Mercredi", "18 h 30", "Cross-training", "Léo"], ["Vendredi", "7 h", "Stretching", "Nora"], ["Samedi", "10 h", "Vélo en salle", "Sami"]] },
    questions: [
      { q: "Le cours de zumba est…", o: ["lundi à 12 h 15", "mercredi à 18 h 30", "lundi à 19 h"], a: 2, x: "« Lundi – 19 h – Zumba – Léo »." },
      { q: "Le vendredi à 7 h, le cours est…", o: ["du stretching", "du pilates", "du vélo en salle"], a: 0, x: "« Vendredi – 7 h – Stretching – Nora »." },
      { q: "Léo fait le cours de cross-training.", o: ["Vrai", "Faux"], a: 0, x: "« Mercredi – 18 h 30 – Cross-training – Léo »." },
      { q: "Vous réservez votre place…", o: ["à l'accueil, le jour du cours", "sur l'application, 24 h avant", "par téléphone, une semaine avant"], a: 1, x: "« Réservez votre place sur l'application, 24 h avant. »" },
      { q: "Dans un cours, il y a au maximum…", o: ["24 personnes", "10 personnes", "15 personnes"], a: 2, x: "« Maximum 15 personnes par cours. »" },
      { q: "Les cours coûtent 15 € en plus de l'abonnement.", o: ["Vrai", "Faux"], a: 1, x: "« Les cours sont compris dans l'abonnement. »" }
    ] },

  { id: "a1-s15-ce4", level: "A1", sujet: 15, sec: "ce", ex: 4, pts: 7,
    title: "Du sport gratuit au parc",
    consigne: "Vous lisez cet article sur le site internet de votre ville. Répondez aux questions.",
    help: { tr: "Şehrinizin internet sitesinde bu makaleyi okuyorsunuz. Soruları cevaplayın.", en: "You read this article on your town's website. Answer the questions." },
    doc: { type: "article", title: "Un espace de sport au parc de la Roseraie",
      body: "Depuis le 1er mars, il y a un nouvel espace de sport au parc de la Roseraie, à côté de l'aire de jeux.\n\nIl y a 8 appareils pour faire du sport en plein air : pour les bras, les jambes et le dos. C'est gratuit et c'est ouvert tous les jours, de 8 h à 21 h.\n\nLe mardi et le jeudi, à 18 h, un coach de la ville donne des conseils. Les appareils sont pour les personnes de plus de 14 ans.\n\n« Je viens ici le matin, avant le travail. C'est super ! », explique Rachid, 35 ans." },
    questions: [
      { q: "L'espace de sport est…", o: ["dans le gymnase", "à côté de l'aire de jeux", "devant la mairie"], a: 1, x: "« un nouvel espace de sport au parc de la Roseraie, à côté de l'aire de jeux »." },
      { q: "Il y a combien d'appareils ?", o: ["14", "21", "8"], a: 2, x: "« Il y a 8 appareils pour faire du sport en plein air »." },
      { q: "Pour utiliser les appareils, il faut payer.", o: ["Vrai", "Faux"], a: 1, x: "« C'est gratuit et c'est ouvert tous les jours »." },
      { q: "Le coach est là…", o: ["le mardi et le jeudi", "tous les jours", "le samedi"], a: 0, x: "« Le mardi et le jeudi, à 18 h, un coach de la ville donne des conseils. »" },
      { q: "Rachid fait du sport…", o: ["le soir, après le travail", "le matin, avant le travail", "le week-end"], a: 1, x: "« Je viens ici le matin, avant le travail. »" },
      { q: "Votre fils a 16 ans. Il peut utiliser les appareils.", o: ["Vrai", "Faux"], a: 0, x: "« Les appareils sont pour les personnes de plus de 14 ans. » 16 ans, c'est plus de 14 ans." }
    ] }
);
