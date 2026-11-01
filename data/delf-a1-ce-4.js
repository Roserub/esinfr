/* DELF A1 — reading (compréhension des écrits), papers 16–20 */
(window.DELF = window.DELF || []).push(

  /* ───────── Sujet 16 ───────── */
  { id: "a1-s16-ce1", level: "A1", sujet: 16, sec: "ce", ex: 1, pts: 6,
    title: "La visite d'un cousin",
    consigne: "Vous recevez ce courriel de votre cousin. Lisez le document, puis répondez aux questions.",
    help: { tr: "Kuzeninizden bu e-postayı alıyorsunuz. Belgeyi okuyun, sonra soruları cevaplayın.", en: "You receive this e-mail from your cousin. Read the document, then answer the questions." },
    doc: { type: "email", from: "Deniz", to: "Esin", subject: "J'arrive en France !",
      body: "Coucou Esin,\n\nBonne nouvelle : je viens te voir en France ! J'arrive le vendredi 12 avril à l'aéroport de Lyon, à 16 h 45. Je reste chez toi quatre nuits, jusqu'au mardi 16 avril.\n\nTu peux venir me chercher à l'aéroport ? Si tu travailles, je prends la navette, ce n'est pas un problème.\n\nJe veux visiter la vieille ville et manger dans un bouchon lyonnais. Et toi, tu veux quoi d'Istanbul ? Des loukoums ou du thé ?\n\nÀ très bientôt,\nDeniz" },
    questions: [
      { q: "Deniz vient en France…", o: ["✈️ en avion", "🚆 en train", "🚌 en bus"], a: 0, x: "« J'arrive […] à l'aéroport de Lyon »." },
      { q: "Deniz reste chez vous…", o: ["une semaine", "deux nuits", "quatre nuits"], a: 2, x: "« Je reste chez toi quatre nuits »." },
      { q: "Si vous travaillez, Deniz…", o: ["prend un taxi", "prend la navette", "attend à l'aéroport"], a: 1, x: "« Si tu travailles, je prends la navette »." },
      { q: "Deniz veut visiter la vieille ville.", o: ["Vrai", "Faux"], a: 0, x: "« Je veux visiter la vieille ville »." },
      { q: "Deniz arrive à Lyon…", o: ["le mardi 16 avril", "le vendredi 12 avril", "le samedi 13 avril"], a: 1, x: "« J'arrive le vendredi 12 avril »." },
      { q: "Deniz propose de vous apporter…", o: ["🧀 du fromage", "🌸 des fleurs", "🍬 des loukoums ou du thé"], a: 2, x: "« tu veux quoi d'Istanbul ? Des loukoums ou du thé ? »" }
    ] },

  { id: "a1-s16-ce2", level: "A1", sujet: 16, sec: "ce", ex: 2, pts: 6,
    title: "Bienvenue au camping",
    consigne: "Vous arrivez au camping. Vous lisez cette affiche à l'accueil. Répondez aux questions.",
    help: { tr: "Kamp alanına geliyorsunuz. Resepsiyonda bu afişi okuyorsunuz. Soruları cevaplayın.", en: "You arrive at the campsite. You read this poster at reception. Answer the questions." },
    doc: { type: "affiche", title: "Camping Les Pins ★★★",
      body: "Bienvenue au camping Les Pins !\n\nL'accueil est ouvert de 8 h à 20 h. Le pain frais est à l'accueil le matin, de 8 h à 10 h : commandez la veille !\n\nLa piscine est ouverte de 10 h à 19 h. Le short de bain est interdit : le maillot de bain est obligatoire.\n\nLe soir, silence à partir de 22 h 30.\n\nDans le camping, les voitures roulent doucement : 10 km/h maximum.\n\nLa machine à laver est à côté des douches : 4 € le lavage.\n\nBon séjour !" },
    questions: [
      { q: "Vous voulez du pain frais. Vous allez à l'accueil…", o: ["le soir", "le matin", "à midi"], a: 1, x: "« Le pain frais est à l'accueil le matin, de 8 h à 10 h »." },
      { q: "La piscine ferme à…", o: ["19 h", "20 h", "22 h 30"], a: 0, x: "« La piscine est ouverte de 10 h à 19 h. »" },
      { q: "À la piscine, le short de bain est autorisé.", o: ["Vrai", "Faux"], a: 1, x: "« Le short de bain est interdit : le maillot de bain est obligatoire. »" },
      { q: "Après 22 h 30, il faut…", o: ["aller à la piscine", "rouler doucement", "faire silence"], a: 2, x: "« Le soir, silence à partir de 22 h 30. »" },
      { q: "Dans le camping, les voitures roulent à…", o: ["30 km/h", "10 km/h maximum", "20 km/h"], a: 1, x: "« les voitures roulent doucement : 10 km/h maximum »." },
      { q: "La machine à laver est…", o: ["à côté des douches", "à l'accueil", "près de la piscine"], a: 0, x: "« La machine à laver est à côté des douches »." }
    ] },

  { id: "a1-s16-ce3", level: "A1", sujet: 16, sec: "ce", ex: 3, pts: 6,
    title: "Le menu du restaurant turc",
    consigne: "Vous déjeunez dans un restaurant turc. Vous lisez le menu. Répondez aux questions.",
    help: { tr: "Bir Türk restoranında öğle yemeği yiyorsunuz. Menüyü okuyorsunuz. Soruları cevaplayın.", en: "You have lunch in a Turkish restaurant. You read the menu. Answer the questions." },
    doc: { type: "menu", title: "Restaurant Kapadokya",
      body: "Menu du midi : entrée + plat + boisson = 14,50 €\nDu lundi au vendredi, de 12 h à 14 h 30.\nPlats à emporter : – 10 %.",
      rows: [["", "Plat", "Prix"], ["Entrée", "Soupe de lentilles", "5 €"], ["Entrée", "Salade de berger (tomates, concombre, oignon)", "5,50 €"], ["Plat", "Adana kebab avec riz", "13 €"], ["Plat", "Pide au fromage (végétarien)", "11 €"], ["Plat", "Poisson grillé et légumes", "15 €"], ["Dessert", "Baklava (3 pièces)", "4,50 €"], ["Dessert", "Riz au lait", "3,50 €"], ["Boisson", "Ayran", "2,50 €"], ["Boisson", "Thé turc", "2 €"]] },
    questions: [
      { q: "Le menu du midi coûte…", o: ["13 €", "14,50 €", "15 €"], a: 1, x: "« Menu du midi : entrée + plat + boisson = 14,50 € »." },
      { q: "Vous ne mangez pas de viande ni de poisson. Vous choisissez…", o: ["l'Adana kebab", "le poisson grillé", "la pide au fromage"], a: 2, x: "« Pide au fromage (végétarien) »." },
      { q: "Le plat le plus cher, c'est…", o: ["le poisson grillé", "l'Adana kebab", "la pide au fromage"], a: 0, x: "« Poisson grillé et légumes : 15 € »." },
      { q: "On peut prendre le menu du midi le samedi.", o: ["Vrai", "Faux"], a: 1, x: "« Du lundi au vendredi, de 12 h à 14 h 30. »" },
      { q: "Le riz au lait coûte…", o: ["2 €", "3,50 €", "4,50 €"], a: 1, x: "« Riz au lait : 3,50 € »." },
      { q: "Vous voulez un thé. Vous payez…", o: ["2 €", "2,50 €", "5 €"], a: 0, x: "« Thé turc : 2 € »." }
    ] },

  { id: "a1-s16-ce4", level: "A1", sujet: 16, sec: "ce", ex: 4, pts: 7,
    title: "Un vélo d'occasion",
    consigne: "Vous cherchez un vélo pas cher. Vous lisez cette annonce. Répondez aux questions.",
    help: { tr: "Ucuz bir bisiklet arıyorsunuz. Bu ilanı okuyorsunuz. Soruları cevaplayın.", en: "You are looking for a cheap bike. You read this ad. Answer the questions." },
    doc: { type: "annonce", title: "À vendre : vélo de ville",
      body: "Je vends mon vélo de ville bleu, taille adulte. Il a 3 ans et il est en très bon état. Les freins et les pneus sont neufs.\n\nAvec le vélo : un panier, une lumière et un antivol.\n\nPrix : 150 €. Le casque est en plus : 20 €.\n\nJe pars au Canada le 30 juin, alors je vends vite !\n\nVous pouvez venir voir le vélo le samedi ou le dimanche, à Villeurbanne, près du métro Flachet.\n\nTéléphone : 06 45 12 78 90 (Karim). Pas de SMS, merci." },
    questions: [
      { q: "Le vélo a…", o: ["1 an", "3 ans", "6 ans"], a: 1, x: "« Il a 3 ans et il est en très bon état. »" },
      { q: "Les pneus du vélo sont neufs.", o: ["Vrai", "Faux"], a: 0, x: "« Les freins et les pneus sont neufs. »" },
      { q: "Avec le vélo, il y a…", o: ["un casque gratuit", "un siège pour enfant", "un panier, une lumière et un antivol"], a: 2, x: "« Avec le vélo : un panier, une lumière et un antivol. »" },
      { q: "Le vélo et le casque coûtent…", o: ["150 €", "170 €", "20 €"], a: 1, x: "« Prix : 150 €. Le casque est en plus : 20 € » : 150 + 20 = 170 €." },
      { q: "Karim vend son vélo parce qu'il…", o: ["part au Canada", "achète une voiture", "n'aime pas le vélo"], a: 0, x: "« Je pars au Canada le 30 juin, alors je vends vite ! »" },
      { q: "Pour acheter le vélo, vous…", o: ["📱 envoyez un SMS", "📧 écrivez un e-mail", "📞 téléphonez à Karim"], a: 2, x: "« Téléphone : 06 45 12 78 90 (Karim). Pas de SMS, merci. »" }
    ] },

  /* ───────── Sujet 17 ───────── */
  { id: "a1-s17-ce1", level: "A1", sujet: 17, sec: "ce", ex: 1, pts: 6,
    title: "Carte postale de la mer",
    consigne: "Vous recevez cette carte postale d'une amie. Lisez-la, puis répondez aux questions.",
    help: { tr: "Bir arkadaşınızdan bu kartpostalı alıyorsunuz. Okuyun, sonra soruları cevaplayın.", en: "You receive this postcard from a friend. Read it, then answer the questions." },
    doc: { type: "carte", from: "Camille", to: "Esin",
      body: "Chère Esin,\n\nJe t'écris de Biarritz, au bord de la mer ! Je suis ici avec ma sœur jusqu'à dimanche.\n\nIl fait beau et chaud, mais l'eau est froide : 18 °C ! Le matin, on prend un cours de surf. C'est difficile, je tombe tout le temps ! L'après-midi, on se repose sur la plage et on lit.\n\nLe soir, on mange du poisson au port. Demain, on va visiter un petit village basque.\n\nJe pense à toi. Bises,\nCamille" },
    questions: [
      { q: "Camille est en vacances avec…", o: ["sa mère", "sa sœur", "une amie"], a: 1, x: "« Je suis ici avec ma sœur »." },
      { q: "L'eau de la mer est…", o: ["🥶 froide", "🔥 très chaude", "😊 à 25 °C"], a: 0, x: "« l'eau est froide : 18 °C ! »" },
      { q: "Le matin, Camille…", o: ["lit sur la plage", "visite un village", "fait du surf"], a: 2, x: "« Le matin, on prend un cours de surf. »" },
      { q: "Camille surfe très bien.", o: ["Vrai", "Faux"], a: 1, x: "« C'est difficile, je tombe tout le temps ! »" },
      { q: "Le soir, elles mangent…", o: ["🍕 une pizza", "🐟 du poisson", "🥗 une salade"], a: 1, x: "« Le soir, on mange du poisson au port. »" },
      { q: "Demain, elles vont…", o: ["visiter un village basque", "rentrer à la maison", "nager à la piscine"], a: 0, x: "« Demain, on va visiter un petit village basque. »" }
    ] },

  { id: "a1-s17-ce2", level: "A1", sujet: 17, sec: "ce", ex: 2, pts: 6,
    title: "L'école de danse",
    consigne: "Vous voyez cette affiche dans votre rue. Lisez-la, puis répondez aux questions.",
    help: { tr: "Sokağınızda bu afişi görüyorsunuz. Okuyun, sonra soruları cevaplayın.", en: "You see this poster in your street. Read it, then answer the questions." },
    doc: { type: "affiche", title: "École de danse Pas à Pas – Nouvelle saison",
      body: "Danse pour tous, de 6 à 77 ans !\n\nSalsa (adultes) : lundi, 19 h – 20 h 30\nHip-hop (8–14 ans) : mercredi, 15 h – 16 h\nDanse orientale (adultes) : jeudi, 18 h 30 – 19 h 30\nDanse classique (6–10 ans) : samedi, 10 h – 11 h\n\nCours d'essai gratuit pendant la semaine du 8 septembre.\nPrix : 25 € par mois. Couples : 40 € par mois.\n\nPas besoin de partenaire pour la salsa !\n\n12, rue des Lilas – 04 78 22 10 35" },
    questions: [
      { q: "Le cours de salsa est…", o: ["le lundi soir", "le jeudi soir", "le samedi matin"], a: 0, x: "« Salsa (adultes) : lundi, 19 h – 20 h 30 »." },
      { q: "Votre fils a 11 ans. Il peut faire…", o: ["de la salsa", "de la danse classique", "du hip-hop"], a: 2, x: "« Hip-hop (8–14 ans) ». La danse classique, c'est pour les 6–10 ans." },
      { q: "Le cours de danse orientale dure…", o: ["30 minutes", "1 heure", "1 h 30"], a: 1, x: "« Danse orientale (adultes) : jeudi, 18 h 30 – 19 h 30 » : 1 heure." },
      { q: "Pour un couple, le prix est de…", o: ["25 € par mois", "50 € par mois", "40 € par mois"], a: 2, x: "« Couples : 40 € par mois. »" },
      { q: "Pour la salsa, il faut venir avec un partenaire.", o: ["Vrai", "Faux"], a: 1, x: "« Pas besoin de partenaire pour la salsa ! »" },
      { q: "Pendant la semaine du 8 septembre, le cours d'essai…", o: ["est gratuit", "coûte 25 €", "est seulement pour les enfants"], a: 0, x: "« Cours d'essai gratuit pendant la semaine du 8 septembre. »" }
    ] },

  { id: "a1-s17-ce3", level: "A1", sujet: 17, sec: "ce", ex: 3, pts: 6,
    title: "Le marché de Noël",
    consigne: "Vous lisez le programme du marché de Noël. Répondez aux questions.",
    help: { tr: "Noel pazarının programını okuyorsunuz. Soruları cevaplayın.", en: "You read the programme of the Christmas market. Answer the questions." },
    doc: { type: "programme", title: "Marché de Noël – Place de la Cathédrale – du 28 novembre au 24 décembre",
      body: "Ouvert tous les jours de 11 h à 21 h. Le vendredi et le samedi : jusqu'à 22 h.\nEntrée libre.",
      rows: [["Jour", "Animation", "Heure"], ["Mercredi", "Atelier biscuits de Noël (enfants)", "15 h"], ["Vendredi", "Concert de chorale", "19 h"], ["Samedi", "Promenade à poney", "14 h – 17 h"], ["Dimanche", "Arrivée du Père Noël", "16 h"], ["Tous les jours", "Patinoire (5 € avec les patins)", "11 h – 20 h"]] },
    questions: [
      { q: "Le samedi, le marché ferme à…", o: ["21 h", "22 h", "20 h"], a: 1, x: "« Le vendredi et le samedi : jusqu'à 22 h. »" },
      { q: "Le Père Noël arrive…", o: ["le dimanche à 16 h", "le mercredi à 15 h", "le samedi à 14 h"], a: 0, x: "« Dimanche : Arrivée du Père Noël, 16 h »." },
      { q: "Votre fille veut faire des biscuits. Vous venez…", o: ["le vendredi", "le dimanche", "le mercredi"], a: 2, x: "« Mercredi : Atelier biscuits de Noël (enfants), 15 h »." },
      { q: "Pour entrer dans le marché, il faut payer.", o: ["Vrai", "Faux"], a: 1, x: "« Entrée libre. »" },
      { q: "Le concert de chorale est…", o: ["le samedi", "le dimanche", "le vendredi"], a: 2, x: "« Vendredi : Concert de chorale, 19 h »." },
      { q: "La patinoire coûte…", o: ["5 € avec les patins", "11 €", "rien, c'est gratuit"], a: 0, x: "« Patinoire (5 € avec les patins) »." }
    ] },

  { id: "a1-s17-ce4", level: "A1", sujet: 17, sec: "ce", ex: 4, pts: 7,
    title: "Le carnaval de la ville",
    consigne: "Vous lisez cet article dans le journal de votre ville. Répondez aux questions.",
    help: { tr: "Şehrinizin gazetesinde bu makaleyi okuyorsunuz. Soruları cevaplayın.", en: "You read this article in your town's newspaper. Answer the questions." },
    doc: { type: "article", title: "Le carnaval arrive samedi !",
      body: "Samedi 1er mars, c'est le carnaval de Saint-Étienne ! Le grand défilé part de la gare à 14 h. Il va traverser le centre-ville et arriver place Jean-Jaurès à 17 h.\n\nCette année, le thème, c'est « les animaux ». Enfants et adultes, mettez un costume !\n\nIl y a 15 chars et 4 groupes de musique. À 17 h 30, on brûle Monsieur Carnaval, un grand personnage en papier.\n\nAttention : le bus ne passe pas dans le centre-ville de 13 h à 19 h. Prenez le tram !" },
    questions: [
      { q: "Le défilé part…", o: ["de la gare", "de la place Jean-Jaurès", "de la mairie"], a: 0, x: "« Le grand défilé part de la gare à 14 h. »" },
      { q: "Le thème du carnaval, c'est…", o: ["🦸 les super-héros", "🌸 les fleurs", "🦁 les animaux"], a: 2, x: "« le thème, c'est « les animaux » »." },
      { q: "Le défilé arrive place Jean-Jaurès à…", o: ["14 h", "17 h", "17 h 30"], a: 1, x: "« arriver place Jean-Jaurès à 17 h »." },
      { q: "Il y a 4 groupes de musique.", o: ["Vrai", "Faux"], a: 0, x: "« Il y a 15 chars et 4 groupes de musique. »" },
      { q: "À 17 h 30, on…", o: ["prend le tram", "brûle Monsieur Carnaval", "met un costume"], a: 1, x: "« À 17 h 30, on brûle Monsieur Carnaval »." },
      { q: "Samedi après-midi, pour aller dans le centre-ville, vous prenez…", o: ["🚌 le bus", "🚗 la voiture", "🚋 le tram"], a: 2, x: "« le bus ne passe pas dans le centre-ville de 13 h à 19 h. Prenez le tram ! »" }
    ] },

  /* ───────── Sujet 18 ───────── */
  { id: "a1-s18-ce1", level: "A1", sujet: 18, sec: "ce", ex: 1, pts: 6,
    title: "Un cours de cuisine",
    consigne: "Vous recevez ce SMS d'un collègue. Lisez le message, puis répondez aux questions.",
    help: { tr: "Bir iş arkadaşınızdan bu SMS'i alıyorsunuz. Mesajı okuyun, sonra soruları cevaplayın.", en: "You receive this text message from a colleague. Read it, then answer the questions." },
    doc: { type: "sms", from: "Thomas", to: "Esin",
      body: "Salut Esin ! C'est Thomas, du bureau. Jeudi soir, je fais un cours de cuisine italienne avec ma femme. On va préparer des pâtes fraîches et un tiramisu. Il reste une place : tu veux venir ? 😊\n\nLe cours est à 18 h 30, à l'atelier « Les Bons Petits Plats », rue Victor-Hugo. Il coûte 35 €, et après, on mange tout ensemble !\n\nPense à prendre un tablier. Réponds-moi avant demain midi, s'il te plaît.\nThomas" },
    questions: [
      { q: "Thomas est…", o: ["votre voisin", "votre collègue", "votre cousin"], a: 1, x: "« C'est Thomas, du bureau. »" },
      { q: "Le cours de cuisine est…", o: ["jeudi soir", "jeudi midi", "demain midi"], a: 0, x: "« Jeudi soir, je fais un cours de cuisine italienne »." },
      { q: "Au cours, on va préparer…", o: ["🍕 une pizza", "🥗 une salade", "🍝 des pâtes et un tiramisu"], a: 2, x: "« On va préparer des pâtes fraîches et un tiramisu. »" },
      { q: "Le cours coûte…", o: ["30 €", "35 €", "53 €"], a: 1, x: "« Il coûte 35 € »." },
      { q: "Après le cours, on mange ensemble.", o: ["Vrai", "Faux"], a: 0, x: "« après, on mange tout ensemble ! »" },
      { q: "Vous devez apporter…", o: ["des pâtes", "un dessert", "un tablier"], a: 2, x: "« Pense à prendre un tablier. »" }
    ] },

  { id: "a1-s18-ce2", level: "A1", sujet: 18, sec: "ce", ex: 2, pts: 6,
    title: "Une rue fermée",
    consigne: "Vous lisez cette information de la mairie dans votre boîte aux lettres. Répondez aux questions.",
    help: { tr: "Posta kutunuzda belediyeden gelen bu duyuruyu okuyorsunuz. Soruları cevaplayın.", en: "You read this notice from the town hall in your letterbox. Answer the questions." },
    doc: { type: "notice", title: "Mairie de Villefranche – Information travaux",
      body: "Madame, Monsieur,\n\nLa rue de la République est fermée pendant deux semaines, du lundi 3 au vendredi 14 novembre, pour des travaux (eau et gaz).\n\nLes voitures ne peuvent pas passer. Les piétons peuvent passer sur le trottoir de droite.\n\nLe bus 12 ne s'arrête pas à l'arrêt « République ». Utilisez l'arrêt « Marché », rue Pasteur.\n\nLe marché du samedi reste ouvert.\n\nUne question ? Appelez le 04 74 60 00 00.\nMerci de votre compréhension.\nLa mairie" },
    questions: [
      { q: "La rue est fermée pendant…", o: ["3 jours", "2 semaines", "1 mois"], a: 1, x: "« La rue de la République est fermée pendant deux semaines »." },
      { q: "Les voitures peuvent passer dans la rue.", o: ["Vrai", "Faux"], a: 1, x: "« Les voitures ne peuvent pas passer. »" },
      { q: "Les piétons passent…", o: ["sur le trottoir de droite", "sur le trottoir de gauche", "sur la route"], a: 0, x: "« Les piétons peuvent passer sur le trottoir de droite. »" },
      { q: "Pour prendre le bus 12, vous allez à l'arrêt…", o: ["République", "Mairie", "Marché"], a: 2, x: "« Utilisez l'arrêt « Marché », rue Pasteur. »" },
      { q: "Le marché du samedi…", o: ["reste ouvert", "est fermé", "change de place"], a: 0, x: "« Le marché du samedi reste ouvert. »" },
      { q: "Il y a des travaux pour…", o: ["l'eau et le gaz", "le tram", "un nouveau parking"], a: 0, x: "« pour des travaux (eau et gaz) »." }
    ] },

  { id: "a1-s18-ce3", level: "A1", sujet: 18, sec: "ce", ex: 3, pts: 6,
    title: "Les horaires du muséum",
    consigne: "Vous voulez visiter le muséum avec votre famille. Vous lisez les horaires. Répondez aux questions.",
    help: { tr: "Ailenizle doğa tarihi müzesini gezmek istiyorsunuz. Saatleri okuyorsunuz. Soruları cevaplayın.", en: "You want to visit the natural history museum with your family. You read the opening hours. Answer the questions." },
    doc: { type: "horaires", title: "Muséum des Sciences – Horaires d'ouverture",
      body: "Dernière entrée : 1 heure avant la fermeture.\nAdulte : 9 € – Moins de 26 ans : gratuit.\nAtelier « Le corps humain » pour les enfants : mercredi à 14 h (5 €).",
      rows: [["Jour", "Horaires"], ["Lundi", "Fermé"], ["Mardi, mercredi, vendredi", "10 h – 18 h"], ["Jeudi", "10 h – 21 h"], ["Samedi et dimanche", "10 h – 19 h"]] },
    questions: [
      { q: "Le muséum est fermé…", o: ["le lundi", "le jeudi", "le dimanche"], a: 0, x: "« Lundi : Fermé »." },
      { q: "Le jeudi, le muséum ferme à…", o: ["18 h", "19 h", "21 h"], a: 2, x: "« Jeudi : 10 h – 21 h »." },
      { q: "Le samedi, la dernière entrée est à…", o: ["19 h", "18 h", "17 h"], a: 1, x: "Samedi : « 10 h – 19 h » et « Dernière entrée : 1 heure avant la fermeture » : 18 h." },
      { q: "Vous avez 30 ans. Vous payez…", o: ["0 €", "5 €", "9 €"], a: 2, x: "« Adulte : 9 € »." },
      { q: "L'atelier pour les enfants est le mercredi.", o: ["Vrai", "Faux"], a: 0, x: "« Atelier « Le corps humain » pour les enfants : mercredi à 14 h »." },
      { q: "Votre fils a 12 ans. L'entrée est…", o: ["à 5 €", "gratuite", "à 9 €"], a: 1, x: "« Moins de 26 ans : gratuit »." }
    ] },

  { id: "a1-s18-ce4", level: "A1", sujet: 18, sec: "ce", ex: 4, pts: 7,
    title: "Une randonnée avec le club",
    consigne: "Vous êtes inscrit(e) dans un club de sport. Vous lisez la lettre du club. Répondez aux questions.",
    help: { tr: "Bir spor kulübüne kayıtlısınız. Kulübün bültenini okuyorsunuz. Soruları cevaplayın.", en: "You are a member of a sports club. You read the club newsletter. Answer the questions." },
    doc: { type: "article", title: "La lettre du club Sport Nature – Randonnée du mois",
      body: "Bonjour à tous !\n\nDimanche 12 octobre, le club organise une randonnée dans le Vercors. Le parcours fait 14 km, avec 600 mètres de montée. Niveau : moyen.\n\nRendez-vous à 7 h 30 sur le parking du stade. On part en voiture : pensez au covoiturage !\n\nPrenez de bonnes chaussures, un pique-nique, 2 litres d'eau et un vêtement de pluie.\n\nOn rentre vers 18 h. La randonnée est gratuite pour les membres du club, 5 € pour les autres.\n\nInscription avant jeudi auprès de Sophie." },
    questions: [
      { q: "La randonnée fait…", o: ["6 km", "14 km", "12 km"], a: 1, x: "« Le parcours fait 14 km »." },
      { q: "Le rendez-vous est…", o: ["sur le parking du stade", "dans le Vercors", "chez Sophie"], a: 0, x: "« Rendez-vous à 7 h 30 sur le parking du stade. »" },
      { q: "Pour le déjeuner, vous apportez…", o: ["de l'argent pour le restaurant", "un vêtement de pluie", "un pique-nique"], a: 2, x: "« Prenez […] un pique-nique »." },
      { q: "Le retour est vers…", o: ["18 h", "7 h 30", "12 h"], a: 0, x: "« On rentre vers 18 h. »" },
      { q: "Votre amie n'est pas membre du club. Elle paie…", o: ["0 €", "5 €", "12 €"], a: 1, x: "« gratuite pour les membres du club, 5 € pour les autres »." },
      { q: "Il faut s'inscrire avant jeudi.", o: ["Vrai", "Faux"], a: 0, x: "« Inscription avant jeudi auprès de Sophie. »" }
    ] },

  /* ───────── Sujet 19 ───────── */
  { id: "a1-s19-ce1", level: "A1", sujet: 19, sec: "ce", ex: 1, pts: 6,
    title: "Une fête dans un nouvel appartement",
    consigne: "Vous recevez ce courriel d'une amie. Lisez le document, puis répondez aux questions.",
    help: { tr: "Bir arkadaşınızdan bu e-postayı alıyorsunuz. Belgeyi okuyun, sonra soruları cevaplayın.", en: "You receive this e-mail from a friend. Read the document, then answer the questions." },
    doc: { type: "email", from: "Léa", to: "Esin", subject: "Ma crémaillère",
      body: "Bonjour Esin,\n\nJ'habite dans mon nouvel appartement depuis un mois et je fais une petite fête : la crémaillère ! C'est samedi 22 novembre, à partir de 19 h.\n\nL'adresse : 8, place Carnot, 2e étage, porte à gauche. Le code de la porte, c'est 4521B.\n\nJe prépare des salades et des gâteaux. Tu peux apporter quelque chose à boire ? Ton mari et tes enfants sont aussi invités, bien sûr !\n\nDis-moi avant mercredi si tu viens.\n\nBisous,\nLéa" },
    questions: [
      { q: "Léa fait une fête pour…", o: ["son anniversaire", "son nouvel appartement", "son nouveau travail"], a: 1, x: "« J'habite dans mon nouvel appartement depuis un mois et je fais une petite fête »." },
      { q: "La fête commence…", o: ["samedi à 19 h", "mercredi à 19 h", "samedi à 22 h"], a: 0, x: "« C'est samedi 22 novembre, à partir de 19 h. »" },
      { q: "Léa habite…", o: ["au 4e étage", "au rez-de-chaussée", "au 2e étage"], a: 2, x: "« 8, place Carnot, 2e étage »." },
      { q: "Léa vous demande d'apporter…", o: ["🥗 une salade", "🧃 quelque chose à boire", "🎂 un gâteau"], a: 1, x: "« Tu peux apporter quelque chose à boire ? »" },
      { q: "Votre famille peut venir aussi.", o: ["Vrai", "Faux"], a: 0, x: "« Ton mari et tes enfants sont aussi invités »." },
      { q: "Vous répondez à Léa avant…", o: ["samedi", "dimanche", "mercredi"], a: 2, x: "« Dis-moi avant mercredi si tu viens. »" }
    ] },

  { id: "a1-s19-ce2", level: "A1", sujet: 19, sec: "ce", ex: 2, pts: 6,
    title: "Les règles du parc",
    consigne: "Vous lisez ce panneau à l'entrée d'un parc. Répondez aux questions.",
    help: { tr: "Bir parkın girişinde bu tabelayı okuyorsunuz. Soruları cevaplayın.", en: "You read this sign at the entrance of a park. Answer the questions." },
    doc: { type: "affiche", title: "Jardin public Montplaisir – Règles du parc",
      body: "Le parc est ouvert tous les jours :\nde 7 h à 21 h en été (avril – septembre),\nde 8 h à 18 h en hiver (octobre – mars).\n\nLes chiens sont acceptés, mais toujours en laisse. Ils sont interdits dans l'aire de jeux.\n\nLes vélos sont autorisés seulement sur les grandes allées. Le pique-nique est autorisé sur la pelouse, mais le barbecue est interdit.\n\nToilettes gratuites à côté du kiosque.\n\nMerci de garder le parc propre !" },
    questions: [
      { q: "En janvier, le parc ferme à…", o: ["18 h", "21 h", "20 h"], a: 0, x: "« de 8 h à 18 h en hiver (octobre – mars) »." },
      { q: "Avec votre chien, vous pouvez aller dans l'aire de jeux.", o: ["Vrai", "Faux"], a: 1, x: "« Ils sont interdits dans l'aire de jeux. »" },
      { q: "Les vélos peuvent rouler…", o: ["sur la pelouse", "partout", "sur les grandes allées"], a: 2, x: "« Les vélos sont autorisés seulement sur les grandes allées. »" },
      { q: "Sur la pelouse, vous pouvez…", o: ["faire un barbecue", "faire un pique-nique", "faire du vélo"], a: 1, x: "« Le pique-nique est autorisé sur la pelouse, mais le barbecue est interdit. »" },
      { q: "Les toilettes sont…", o: ["à côté du kiosque", "à l'entrée du parc", "dans l'aire de jeux"], a: 0, x: "« Toilettes gratuites à côté du kiosque. »" },
      { q: "En juillet, le parc ouvre à…", o: ["7 h", "8 h", "6 h"], a: 0, x: "« de 7 h à 21 h en été (avril – septembre) »." }
    ] },

  { id: "a1-s19-ce3", level: "A1", sujet: 19, sec: "ce", ex: 3, pts: 6,
    title: "Les prix du coiffeur",
    consigne: "Vous voulez aller chez le coiffeur. Vous lisez les prix du salon. Répondez aux questions.",
    help: { tr: "Kuaföre gitmek istiyorsunuz. Salonun fiyat listesini okuyorsunuz. Soruları cevaplayın.", en: "You want to go to the hairdresser. You read the salon's price list. Answer the questions." },
    doc: { type: "affiche", title: "Salon Coiff'Style – Nos prix",
      body: "Ouvert du mardi au samedi, de 9 h à 19 h. Avec ou sans rendez-vous.\nÉtudiants : – 20 % le mercredi.",
      rows: [["", "Femme", "Homme", "Enfant (– 12 ans)"], ["Coupe", "32 €", "20 €", "14 €"], ["Shampoing + coupe + brushing", "45 €", "25 €", "—"], ["Coloration", "50 €", "35 €", "—"], ["Barbe", "—", "12 €", "—"]] },
    questions: [
      { q: "Le salon est fermé…", o: ["le samedi", "le lundi", "le mercredi"], a: 1, x: "« Ouvert du mardi au samedi » : le lundi, c'est fermé." },
      { q: "Une coupe pour un homme coûte…", o: ["20 €", "32 €", "25 €"], a: 0, x: "« Coupe : […] Homme 20 € »." },
      { q: "Votre fils a 8 ans. Sa coupe coûte…", o: ["20 €", "25 €", "14 €"], a: 2, x: "« Coupe : […] Enfant (– 12 ans) 14 € »." },
      { q: "Il faut toujours prendre rendez-vous.", o: ["Vrai", "Faux"], a: 1, x: "« Avec ou sans rendez-vous. »" },
      { q: "Pour une coloration, une femme paie…", o: ["35 €", "45 €", "50 €"], a: 2, x: "« Coloration : Femme 50 € »." },
      { q: "Les étudiants ont une réduction…", o: ["le mardi", "le mercredi", "le samedi"], a: 1, x: "« Étudiants : – 20 % le mercredi. »" }
    ] },

  { id: "a1-s19-ce4", level: "A1", sujet: 19, sec: "ce", ex: 4, pts: 7,
    title: "Cherche partenaire de tennis",
    consigne: "Vous lisez cette annonce sur un site Internet. Répondez aux questions.",
    help: { tr: "Bir internet sitesinde bu ilanı okuyorsunuz. Soruları cevaplayın.", en: "You read this ad on a website. Answer the questions." },
    doc: { type: "annonce", title: "Cherche partenaire de tennis",
      body: "Bonjour ! Je m'appelle Marc, j'ai 34 ans. J'habite à Grenoble depuis un mois et je cherche un ou une partenaire pour jouer au tennis. Je joue depuis cinq ans : je ne suis pas débutant, mais je ne suis pas un champion !\n\nJe suis libre le mardi soir après 19 h et le dimanche matin. Je joue au club du parc Paul-Mistral. Pour vous, le court est gratuit : je suis membre du club.\n\nAprès le match, on peut boire un verre et parler français ou anglais.\n\nÉcrivez-moi : marc.tennis@mail.fr" },
    questions: [
      { q: "Marc cherche quelqu'un pour…", o: ["🎾 jouer au tennis", "🏃 courir", "🗣️ apprendre l'anglais"], a: 0, x: "« je cherche un ou une partenaire pour jouer au tennis »." },
      { q: "Marc joue au tennis…", o: ["depuis un mois", "depuis cinq ans", "depuis 34 ans"], a: 1, x: "« Je joue depuis cinq ans »." },
      { q: "Marc est libre…", o: ["le mardi matin", "le dimanche soir", "le mardi soir et le dimanche matin"], a: 2, x: "« Je suis libre le mardi soir après 19 h et le dimanche matin. »" },
      { q: "Vous devez payer le court de tennis.", o: ["Vrai", "Faux"], a: 1, x: "« Pour vous, le court est gratuit »." },
      { q: "Après le match, Marc propose de…", o: ["boire un verre", "manger au restaurant", "jouer encore"], a: 0, x: "« Après le match, on peut boire un verre »." },
      { q: "Pour contacter Marc, vous…", o: ["📞 téléphonez", "🏟️ allez au club", "📧 écrivez un e-mail"], a: 2, x: "« Écrivez-moi : marc.tennis@mail.fr »." }
    ] },

  /* ───────── Sujet 20 ───────── */
  { id: "a1-s20-ce1", level: "A1", sujet: 20, sec: "ce", ex: 1, pts: 6,
    title: "Courir le dimanche",
    consigne: "Vous recevez ce SMS d'une amie. Lisez le message, puis répondez aux questions.",
    help: { tr: "Bir arkadaşınızdan bu SMS'i alıyorsunuz. Mesajı okuyun, sonra soruları cevaplayın.", en: "You receive this text message from a friend. Read it, then answer the questions." },
    doc: { type: "sms", from: "Yasmine", to: "Esin",
      body: "Coucou Esin ! Tu veux venir courir avec moi dimanche matin ? 🏃‍♀️ Je cours tous les dimanches autour du lac, 6 km. Je ne cours pas vite, ne t'inquiète pas !\n\nRendez-vous à 9 h devant l'entrée du parc, à côté de la boulangerie. S'il pleut, on va à la piscine.\n\nAprès, on prend le petit-déjeuner chez moi : j'achète des croissants ! Prends une bouteille d'eau et une veste.\nBisous, Yasmine" },
    questions: [
      { q: "Yasmine vous propose de…", o: ["🏊 nager", "🏃 courir", "🚴 faire du vélo"], a: 1, x: "« Tu veux venir courir avec moi dimanche matin ? »" },
      { q: "Yasmine court…", o: ["9 km", "10 km", "6 km"], a: 2, x: "« Je cours tous les dimanches autour du lac, 6 km. »" },
      { q: "Le rendez-vous est…", o: ["devant l'entrée du parc", "à la piscine", "chez Yasmine"], a: 0, x: "« Rendez-vous à 9 h devant l'entrée du parc »." },
      { q: "S'il pleut, vous allez…", o: ["à la boulangerie", "au café", "à la piscine"], a: 2, x: "« S'il pleut, on va à la piscine. »" },
      { q: "Yasmine court très vite.", o: ["Vrai", "Faux"], a: 1, x: "« Je ne cours pas vite, ne t'inquiète pas ! »" },
      { q: "Après, vous mangez…", o: ["🥐 des croissants", "🍕 une pizza", "🥗 une salade"], a: 0, x: "« on prend le petit-déjeuner chez moi : j'achète des croissants ! »" }
    ] },

  { id: "a1-s20-ce2", level: "A1", sujet: 20, sec: "ce", ex: 2, pts: 6,
    title: "La rentrée des classes",
    consigne: "Votre enfant entre à l'école. Vous lisez ce mot de la directrice. Répondez aux questions.",
    help: { tr: "Çocuğunuz okula başlıyor. Okul müdiresinin bu notunu okuyorsunuz. Soruları cevaplayın.", en: "Your child is starting school. You read this note from the head teacher. Answer the questions." },
    doc: { type: "notice", title: "École élémentaire Jules-Ferry – La rentrée",
      body: "Chers parents,\n\nLa rentrée est le lundi 1er septembre, à 8 h 30. Le premier jour, les parents peuvent entrer dans la cour avec les enfants.\n\nHoraires de l'école : 8 h 30 – 11 h 30 et 13 h 30 – 16 h 30. Pas d'école le mercredi.\n\nLa cantine commence le mardi 2 septembre. Inscription à la mairie.\n\nLe premier jour, votre enfant apporte un cartable, une trousse et une boîte de mouchoirs.\n\nRéunion parents-enseignants : jeudi 11 septembre à 18 h.\n\nLa directrice, Mme Benali" },
    questions: [
      { q: "La rentrée est…", o: ["le lundi 1er septembre", "le mardi 2 septembre", "le jeudi 11 septembre"], a: 0, x: "« La rentrée est le lundi 1er septembre, à 8 h 30. »" },
      { q: "Le premier jour, les parents peuvent entrer dans la cour.", o: ["Vrai", "Faux"], a: 0, x: "« Le premier jour, les parents peuvent entrer dans la cour avec les enfants. »" },
      { q: "L'après-midi, l'école finit à…", o: ["11 h 30", "13 h 30", "16 h 30"], a: 2, x: "« 13 h 30 – 16 h 30 »." },
      { q: "Il n'y a pas d'école…", o: ["le lundi", "le mercredi", "le jeudi"], a: 1, x: "« Pas d'école le mercredi. »" },
      { q: "Pour la cantine, vous inscrivez votre enfant…", o: ["à l'école", "à la mairie", "à la réunion"], a: 1, x: "« La cantine commence le mardi 2 septembre. Inscription à la mairie. »" },
      { q: "Le premier jour, votre enfant apporte…", o: ["un pique-nique", "un livre et un cahier", "un cartable, une trousse et des mouchoirs"], a: 2, x: "« votre enfant apporte un cartable, une trousse et une boîte de mouchoirs »." }
    ] },

  { id: "a1-s20-ce3", level: "A1", sujet: 20, sec: "ce", ex: 3, pts: 6,
    title: "Chez le kinésithérapeute",
    consigne: "Votre médecin vous donne des séances de kinésithérapie. Vous lisez les horaires du cabinet. Répondez aux questions.",
    help: { tr: "Doktorunuz size fizyoterapi seansları yazıyor. Kliniğin çalışma saatlerini okuyorsunuz. Soruları cevaplayın.", en: "Your doctor prescribes physiotherapy sessions. You read the practice's opening hours. Answer the questions." },
    doc: { type: "horaires", title: "Cabinet de kinésithérapie du Parc – Horaires",
      body: "Sur rendez-vous uniquement : 04 72 33 18 90 ou sur Internet.\nApportez votre ordonnance et votre carte Vitale.\nAttention : avec plus de 15 minutes de retard, la séance est annulée.",
      rows: [["Jour", "Matin", "Après-midi"], ["Lundi", "8 h – 12 h", "14 h – 19 h"], ["Mardi", "8 h – 12 h", "14 h – 19 h"], ["Mercredi", "8 h – 12 h", "Fermé"], ["Jeudi", "Fermé", "14 h – 20 h"], ["Vendredi", "8 h – 12 h", "14 h – 18 h"], ["Samedi", "9 h – 12 h", "Fermé"]] },
    questions: [
      { q: "Le cabinet est fermé…", o: ["le mercredi après-midi", "le lundi matin", "le vendredi après-midi"], a: 0, x: "« Mercredi : 8 h – 12 h, Fermé » l'après-midi." },
      { q: "Le jeudi, le cabinet ferme à…", o: ["18 h", "19 h", "20 h"], a: 2, x: "« Jeudi : Fermé, 14 h – 20 h »." },
      { q: "Le samedi, on peut aller au cabinet…", o: ["le matin", "l'après-midi", "toute la journée"], a: 0, x: "« Samedi : 9 h – 12 h, Fermé » l'après-midi." },
      { q: "On peut venir sans rendez-vous.", o: ["Vrai", "Faux"], a: 1, x: "« Sur rendez-vous uniquement »." },
      { q: "Vous devez apporter…", o: ["une photo", "votre ordonnance et votre carte Vitale", "un certificat médical"], a: 1, x: "« Apportez votre ordonnance et votre carte Vitale. »" },
      { q: "Vous arrivez avec 20 minutes de retard. La séance…", o: ["commence plus tard", "dure 15 minutes", "est annulée"], a: 2, x: "« avec plus de 15 minutes de retard, la séance est annulée »." }
    ] },

  { id: "a1-s20-ce4", level: "A1", sujet: 20, sec: "ce", ex: 4, pts: 7,
    title: "Une nouvelle salle d'escalade",
    consigne: "Vous lisez cet article dans le journal du quartier. Répondez aux questions.",
    help: { tr: "Mahalle gazetesinde bu makaleyi okuyorsunuz. Soruları cevaplayın.", en: "You read this article in the neighbourhood newspaper. Answer the questions." },
    doc: { type: "article", title: "Une nouvelle salle d'escalade dans le quartier",
      body: "Depuis lundi, le quartier a une nouvelle salle d'escalade : « Grimpe & Co ». Elle est grande : 1 200 m², avec des murs de 4 à 15 mètres.\n\nLa salle est ouverte tous les jours, de 10 h à 23 h. Une entrée coûte 15 €, la location des chaussures 4 €.\n\nVous êtes débutant ? Le samedi matin, il y a un cours d'initiation pour les adultes. Pour les enfants, le cours est le mercredi.\n\nIl y a aussi un café et une salle de yoga.\n\nInscriptions sur grimpeandco.fr." },
    questions: [
      { q: "« Grimpe & Co », c'est…", o: ["une salle d'escalade", "un café", "un magasin de chaussures"], a: 0, x: "« le quartier a une nouvelle salle d'escalade : « Grimpe & Co » »." },
      { q: "La salle ferme à…", o: ["10 h", "15 h", "23 h"], a: 2, x: "« ouverte tous les jours, de 10 h à 23 h »." },
      { q: "Une entrée avec la location des chaussures coûte…", o: ["15 €", "19 €", "4 €"], a: 1, x: "« Une entrée coûte 15 €, la location des chaussures 4 € » : 15 + 4 = 19 €." },
      { q: "Le cours pour les adultes débutants est…", o: ["le mercredi", "le samedi matin", "tous les jours"], a: 1, x: "« Le samedi matin, il y a un cours d'initiation pour les adultes. »" },
      { q: "Dans la salle, il y a aussi un café.", o: ["Vrai", "Faux"], a: 0, x: "« Il y a aussi un café et une salle de yoga. »" },
      { q: "La salle est ouverte…", o: ["du lundi au vendredi", "seulement le week-end", "tous les jours"], a: 2, x: "« La salle est ouverte tous les jours, de 10 h à 23 h. »" }
    ] }
);
