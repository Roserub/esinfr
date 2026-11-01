/* DELF A1 — reading (compréhension des écrits), papers 6–10 */
(window.DELF = window.DELF || []).push(

  /* ───────── Sujet 6 ───────── */
  { id: "a1-s06-ce1", level: "A1", sujet: 6, sec: "ce", ex: 1, pts: 6,
    title: "Carte postale de la montagne",
    consigne: "Vous recevez cette carte postale d'une amie. Lisez-la, puis répondez aux questions.",
    help: { tr: "Bir arkadaşınızdan bu kartpostalı alıyorsunuz. Okuyun, sonra soruları cevaplayın.", en: "You receive this postcard from a friend. Read it, then answer the questions." },
    doc: { type: "carte", from: "Nathalie", to: "Esin",
      body: "Chère Esin,\n\nBonjour des Alpes ! Je suis à Chamonix pour une semaine avec mon mari. Il y a beaucoup de neige et il fait très froid : – 8 °C ce matin !\n\nLe matin, je prends un cours de ski. C'est difficile, mais j'adore ! L'après-midi, je reste à l'hôtel et je lis. Mon mari, lui, fait du ski toute la journée.\n\nLe soir, on mange de la fondue au fromage. C'est délicieux !\n\nOn rentre samedi. Je t'apporte du fromage de Savoie.\n\nGros bisous,\nNathalie" },
    questions: [
      { q: "Nathalie est en vacances…", o: ["🏖️ à la mer", "⛷️ à la montagne", "🌳 à la campagne"], a: 1, x: "« Bonjour des Alpes ! » et « je prends un cours de ski »." },
      { q: "Elle reste à Chamonix…", o: ["un week-end", "un mois", "une semaine"], a: 2, x: "« Je suis à Chamonix pour une semaine »." },
      { q: "Le matin, Nathalie…", o: ["prend un cours de ski", "lit à l'hôtel", "fait les magasins"], a: 0, x: "« Le matin, je prends un cours de ski. »" },
      { q: "Il fait chaud à Chamonix.", o: ["Vrai", "Faux"], a: 1, x: "« il fait très froid : – 8 °C ce matin ! »" },
      { q: "Le soir, ils mangent…", o: ["🍕 une pizza", "🫕 de la fondue", "🥞 des crêpes"], a: 1, x: "« Le soir, on mange de la fondue au fromage. »" },
      { q: "Nathalie va vous apporter…", o: ["du chocolat", "une carte", "du fromage"], a: 2, x: "« Je t'apporte du fromage de Savoie. »" }
    ] },

  { id: "a1-s06-ce2", level: "A1", sujet: 6, sec: "ce", ex: 2, pts: 6,
    title: "Inscriptions au club de handball",
    consigne: "Vous voyez cette affiche au gymnase. Lisez-la, puis répondez aux questions.",
    help: { tr: "Spor salonunda bu afişi görüyorsunuz. Okuyun, sonra soruları cevaplayın.", en: "You see this poster at the sports hall. Read it, then answer the questions." },
    doc: { type: "affiche", title: "Handball Club de Villeurbanne – Inscriptions",
      body: "Venez jouer au handball avec nous !\n\nEnfants (7–12 ans) : mercredi, 14 h – 15 h 30\nAdolescents (13–17 ans) : mardi et vendredi, 18 h – 19 h 30\nAdultes : jeudi, 20 h – 22 h (équipe femmes et équipe hommes)\n\nPrix : 120 € par an (enfants), 160 € par an (adultes).\nLe premier entraînement est gratuit !\n\nInscriptions au gymnase Jean-Jaurès, samedi 6 septembre, de 10 h à 17 h.\nApportez un certificat médical et une photo." },
    questions: [
      { q: "Votre fille a 9 ans. Elle joue…", o: ["le mardi", "le mercredi", "le jeudi"], a: 1, x: "« Enfants (7–12 ans) : mercredi, 14 h – 15 h 30 »." },
      { q: "Les adultes jouent…", o: ["le vendredi soir", "le samedi matin", "le jeudi soir"], a: 2, x: "« Adultes : jeudi, 20 h – 22 h »." },
      { q: "Pour un adulte, le prix est de…", o: ["160 € par an", "120 € par an", "160 € par mois"], a: 0, x: "« 160 € par an (adultes) »." },
      { q: "Le premier entraînement coûte 10 €.", o: ["Vrai", "Faux"], a: 1, x: "« Le premier entraînement est gratuit ! »" },
      { q: "Pour l'inscription, il faut apporter…", o: ["⚽ un ballon", "📄 un certificat médical et une photo", "🎓 une carte d'étudiant"], a: 1, x: "« Apportez un certificat médical et une photo. »" },
      { q: "Les inscriptions sont…", o: ["au gymnase", "à la mairie", "à l'école"], a: 0, x: "« Inscriptions au gymnase Jean-Jaurès »." }
    ] },

  { id: "a1-s06-ce3", level: "A1", sujet: 6, sec: "ce", ex: 3, pts: 6,
    title: "Activités de la maison de quartier",
    consigne: "Vous lisez le programme de la maison de quartier. Répondez aux questions.",
    help: { tr: "Mahalle evinin (semt merkezinin) programını okuyorsunuz. Soruları cevaplayın.", en: "You read the programme of the community centre. Answer the questions." },
    doc: { type: "programme", title: "Maison de quartier des Pentes – Activités de la semaine",
      body: "Toutes les activités sont gratuites pour les habitants du quartier.\nInscription à l'accueil.",
      rows: [["Jour", "Activité", "Heure", "Salle"], ["Lundi", "Couture", "14 h – 16 h", "Salle 1"], ["Mardi", "Atelier de français (débutants)", "9 h 30 – 11 h 30", "Salle 2"], ["Mercredi", "Jeux pour enfants", "15 h – 17 h", "Salle 3"], ["Jeudi", "Informatique", "10 h – 12 h", "Salle 2"], ["Vendredi", "Café des parents", "8 h 45 – 10 h", "Cafétéria"], ["Samedi", "Jardinage", "10 h – 12 h", "Jardin"]] },
    questions: [
      { q: "Vous voulez apprendre à utiliser un ordinateur. Vous venez…", o: ["le mardi", "le jeudi", "le samedi"], a: 1, x: "Jeudi : « Informatique, 10 h – 12 h »." },
      { q: "L'atelier de français est…", o: ["le lundi après-midi", "le vendredi matin", "le mardi matin"], a: 2, x: "Mardi : « Atelier de français (débutants), 9 h 30 – 11 h 30 »." },
      { q: "Le jardinage, c'est…", o: ["🌱 le samedi", "🌱 le vendredi", "🌱 le dimanche"], a: 0, x: "Samedi : « Jardinage, 10 h – 12 h »." },
      { q: "Les activités coûtent 5 €.", o: ["Vrai", "Faux"], a: 1, x: "« Toutes les activités sont gratuites pour les habitants du quartier. »" },
      { q: "Le café des parents est…", o: ["dans la salle 3", "à la cafétéria", "dans le jardin"], a: 1, x: "Vendredi : « Café des parents […] Cafétéria »." }
    ] },

  { id: "a1-s06-ce4", level: "A1", sujet: 6, sec: "ce", ex: 4, pts: 7,
    title: "Cherche baby-sitter",
    consigne: "Vous cherchez un petit travail. Vous lisez cette annonce. Répondez aux questions.",
    help: { tr: "Küçük bir iş arıyorsunuz. Bu ilanı okuyorsunuz. Soruları cevaplayın.", en: "You are looking for a small job. You read this ad. Answer the questions." },
    doc: { type: "annonce", title: "Cherche baby-sitter",
      body: "Famille avec deux enfants (Léo, 4 ans, et Inès, 7 ans) cherche une baby-sitter sérieuse.\n\nLundi, mardi et jeudi, de 16 h 30 à 19 h : aller chercher les enfants à l'école, donner le goûter, aider Inès pour les devoirs et jouer.\n\nNous habitons à 5 minutes de l'école, près du métro Croix-Rousse.\n\n12 € de l'heure. Expérience avec les enfants obligatoire. Vous parlez anglais ? C'est un plus !\n\nContact par e-mail : famille.durand@mail.fr" },
    questions: [
      { q: "La famille a…", o: ["un enfant", "deux enfants", "trois enfants"], a: 1, x: "« Famille avec deux enfants (Léo, 4 ans, et Inès, 7 ans) »." },
      { q: "La baby-sitter travaille…", o: ["3 jours par semaine", "5 jours par semaine", "le week-end"], a: 0, x: "« Lundi, mardi et jeudi » : 3 jours." },
      { q: "La baby-sitter doit…", o: ["faire le ménage", "préparer le dîner", "aider Inès pour les devoirs"], a: 2, x: "« aider Inès pour les devoirs et jouer »." },
      { q: "Le salaire est de…", o: ["16 € de l'heure", "12 € de l'heure", "19 € par jour"], a: 1, x: "« 12 € de l'heure. »" },
      { q: "Il faut avoir de l'expérience avec les enfants.", o: ["Vrai", "Faux"], a: 0, x: "« Expérience avec les enfants obligatoire. »" },
      { q: "Pour répondre, vous…", o: ["📞 téléphonez", "🏫 allez à l'école", "📧 écrivez un e-mail"], a: 2, x: "« Contact par e-mail : famille.durand@mail.fr »." }
    ] },

  /* ───────── Sujet 7 ───────── */
  { id: "a1-s07-ce1", level: "A1", sujet: 7, sec: "ce", ex: 1, pts: 6,
    title: "Une amie en retard",
    consigne: "Vous recevez ce SMS d'une amie. Lisez le message, puis répondez aux questions.",
    help: { tr: "Bir arkadaşınızdan bu SMS'i alıyorsunuz. Mesajı okuyun, sonra soruları cevaplayın.", en: "You receive this text message from a friend. Read it, then answer the questions." },
    doc: { type: "sms", from: "Sarah", to: "Esin",
      body: "Salut Esin ! Désolée, je suis en retard : mon train a 20 minutes de retard 😩. J'arrive à la gare vers 15 h 20.\n\nOn ne se retrouve pas devant le cinéma à 15 h : on se retrouve au café « Le Balto », en face de la gare. Tu peux m'attendre là-bas ? Commande un thé pour moi, s'il te plaît.\n\nAprès, on va faire les magasins ensemble. À tout de suite !\nSarah" },
    questions: [
      { q: "Sarah est en retard à cause…", o: ["🚌 du bus", "🚆 du train", "🚗 de sa voiture"], a: 1, x: "« mon train a 20 minutes de retard »." },
      { q: "Sarah arrive à la gare vers…", o: ["15 h", "15 h 40", "15 h 20"], a: 2, x: "« J'arrive à la gare vers 15 h 20. »" },
      { q: "Le nouveau rendez-vous est…", o: ["au café en face de la gare", "devant le cinéma", "dans un magasin"], a: 0, x: "« on se retrouve au café « Le Balto », en face de la gare »." },
      { q: "Sarah veut boire…", o: ["☕ un café", "🧃 un jus d'orange", "🍵 un thé"], a: 2, x: "« Commande un thé pour moi, s'il te plaît. »" },
      { q: "Après, elles vont faire les magasins.", o: ["Vrai", "Faux"], a: 0, x: "« Après, on va faire les magasins ensemble. »" }
    ] },

  { id: "a1-s07-ce2", level: "A1", sujet: 7, sec: "ce", ex: 2, pts: 6,
    title: "Visiter le musée",
    consigne: "Vous lisez cette affiche à l'entrée du musée. Répondez aux questions.",
    help: { tr: "Müzenin girişinde bu afişi okuyorsunuz. Soruları cevaplayın.", en: "You read this poster at the museum entrance. Answer the questions." },
    doc: { type: "affiche", title: "Musée des Beaux-Arts",
      body: "Ouvert tous les jours sauf le mardi, de 10 h à 18 h.\nLe vendredi : ouvert jusqu'à 21 h.\n\nTarifs :\nAdulte : 12 €\nÉtudiant : 7 €\nMoins de 18 ans : gratuit\nPremier dimanche du mois : gratuit pour tous !\n\nVisite guidée en français le samedi à 15 h (+ 3 €).\nPhotos sans flash autorisées.\nSacs à dos interdits : vestiaire gratuit à l'entrée." },
    questions: [
      { q: "Le musée est fermé…", o: ["le lundi", "le dimanche", "le mardi"], a: 2, x: "« Ouvert tous les jours sauf le mardi »." },
      { q: "Le vendredi, le musée ferme à…", o: ["18 h", "21 h", "20 h"], a: 1, x: "« Le vendredi : ouvert jusqu'à 21 h. »" },
      { q: "Votre fils a 15 ans. Il paie…", o: ["0 €", "7 €", "12 €"], a: 0, x: "« Moins de 18 ans : gratuit »." },
      { q: "On peut prendre des photos avec le flash.", o: ["Vrai", "Faux"], a: 1, x: "« Photos sans flash autorisées. »" },
      { q: "Vous avez un sac à dos. Vous le laissez…", o: ["à la caisse", "au vestiaire", "dans la voiture"], a: 1, x: "« Sacs à dos interdits : vestiaire gratuit à l'entrée. »" },
      { q: "La visite guidée est…", o: ["le dimanche à 10 h", "le vendredi à 21 h", "le samedi à 15 h"], a: 2, x: "« Visite guidée en français le samedi à 15 h »." }
    ] },

  { id: "a1-s07-ce3", level: "A1", sujet: 7, sec: "ce", ex: 3, pts: 6,
    title: "Programme de la fête de la musique",
    consigne: "Vous lisez le programme de la fête de la musique. Répondez aux questions.",
    help: { tr: "Müzik bayramının programını okuyorsunuz. Soruları cevaplayın.", en: "You read the programme of the music festival. Answer the questions." },
    doc: { type: "programme", title: "Fête de la musique – Samedi 21 juin – Place des Terreaux",
      body: "Tous les concerts sont gratuits.\nFood trucks à partir de 18 h.",
      rows: [["Heure", "Groupe", "Musique"], ["17 h", "Les Petits Chanteurs", "Chorale d'enfants"], ["18 h 30", "Duo Mistral", "Chanson française"], ["20 h", "Anatolia", "Musique turque"], ["21 h 30", "Rock Express", "Rock"], ["23 h", "DJ Lola", "Musique électronique"]] },
    questions: [
      { q: "Le groupe Anatolia joue à…", o: ["18 h 30", "20 h", "21 h 30"], a: 1, x: "« 20 h : Anatolia, Musique turque »." },
      { q: "À 17 h, on écoute…", o: ["🎸 du rock", "🎧 un DJ", "👧 une chorale d'enfants"], a: 2, x: "« 17 h : Les Petits Chanteurs, Chorale d'enfants »." },
      { q: "Vous aimez le rock. Vous venez à…", o: ["21 h 30", "20 h", "23 h"], a: 0, x: "« 21 h 30 : Rock Express, Rock »." },
      { q: "Il faut payer pour les concerts.", o: ["Vrai", "Faux"], a: 1, x: "« Tous les concerts sont gratuits. »" },
      { q: "On peut acheter à manger à partir de…", o: ["17 h", "18 h", "20 h"], a: 1, x: "« Food trucks à partir de 18 h. »" }
    ] },

  { id: "a1-s07-ce4", level: "A1", sujet: 7, sec: "ce", ex: 4, pts: 7,
    title: "La météo de demain",
    consigne: "Vous lisez la météo dans le journal. Répondez aux questions.",
    help: { tr: "Gazetede hava durumunu okuyorsunuz. Soruları cevaplayın.", en: "You read the weather forecast in the newspaper. Answer the questions." },
    doc: { type: "article", title: "La météo de demain – Jeudi 14 mars",
      body: "Demain matin, il va pleuvoir dans le nord de la France, à Lille et à Paris. Prenez votre parapluie !\n\nDans l'ouest, en Bretagne, il va y avoir beaucoup de vent.\n\nDans le sud, à Marseille et à Nice, il va faire beau et chaud : 19 °C l'après-midi.\n\nDans les Alpes, il va neiger la nuit.\n\nL'après-midi, à Paris, le soleil revient, avec 12 °C." },
    questions: [
      { q: "Demain matin, à Lille…", o: ["☀️ il fait beau", "🌧️ il pleut", "❄️ il neige"], a: 1, x: "« Demain matin, il va pleuvoir dans le nord de la France, à Lille et à Paris. »" },
      { q: "En Bretagne, il y a…", o: ["❄️ de la neige", "☀️ du soleil", "💨 du vent"], a: 2, x: "« en Bretagne, il va y avoir beaucoup de vent »." },
      { q: "À Nice, l'après-midi, il fait…", o: ["19 °C", "12 °C", "8 °C"], a: 0, x: "« à Marseille et à Nice, il va faire beau et chaud : 19 °C l'après-midi »." },
      { q: "Il va neiger dans les Alpes la nuit.", o: ["Vrai", "Faux"], a: 0, x: "« Dans les Alpes, il va neiger la nuit. »" },
      { q: "L'après-midi, à Paris…", o: ["il pleut encore", "il y a du soleil", "il neige"], a: 1, x: "« L'après-midi, à Paris, le soleil revient »." },
      { q: "Pour aller à Paris demain matin, vous prenez…", o: ["☂️ un parapluie", "🕶️ des lunettes de soleil", "🧤 des gants de ski"], a: 0, x: "« il va pleuvoir […] à Paris. Prenez votre parapluie ! »" }
    ] },

  /* ───────── Sujet 8 ───────── */
  { id: "a1-s08-ce1", level: "A1", sujet: 8, sec: "ce", ex: 1, pts: 6,
    title: "Aider un ami à déménager",
    consigne: "Vous recevez ce courriel d'un ami. Lisez le document, puis répondez aux questions.",
    help: { tr: "Bir arkadaşınızdan bu e-postayı alıyorsunuz. Belgeyi okuyun, sonra soruları cevaplayın.", en: "You receive this e-mail from a friend. Read the document, then answer the questions." },
    doc: { type: "email", from: "Julien", to: "Esin", subject: "Mon déménagement",
      body: "Bonjour Esin,\n\nÇa y est, j'ai un nouvel appartement ! Il est plus grand, avec deux chambres et une terrasse. Je déménage samedi 18 octobre.\n\nTu peux venir m'aider avec ton mari ? On commence à 9 h chez moi, 25 rue Garibaldi. Mon frère vient avec un camion. Il faut porter les cartons et les meubles. Il n'y a pas d'ascenseur… et j'habite au 4e étage ! 😅\n\nÀ midi, j'offre des pizzas à tout le monde.\n\nRéponds-moi vite,\nJulien" },
    questions: [
      { q: "Le nouvel appartement de Julien a…", o: ["une chambre et un jardin", "deux chambres et une terrasse", "trois chambres"], a: 1, x: "« avec deux chambres et une terrasse »." },
      { q: "Le déménagement commence…", o: ["samedi soir", "dimanche matin", "samedi matin"], a: 2, x: "« Je déménage samedi 18 octobre. […] On commence à 9 h »." },
      { q: "Qui vient avec un camion ?", o: ["le frère de Julien", "le mari d'Esin", "un voisin"], a: 0, x: "« Mon frère vient avec un camion. »" },
      { q: "Il y a un ascenseur chez Julien.", o: ["Vrai", "Faux"], a: 1, x: "« Il n'y a pas d'ascenseur »." },
      { q: "Julien habite…", o: ["au 2e étage", "au 4e étage", "au rez-de-chaussée"], a: 1, x: "« j'habite au 4e étage ! »" },
      { q: "À midi, Julien offre…", o: ["🥪 des sandwichs", "🍝 des pâtes", "🍕 des pizzas"], a: 2, x: "« À midi, j'offre des pizzas à tout le monde. »" }
    ] },

  { id: "a1-s08-ce2", level: "A1", sujet: 8, sec: "ce", ex: 2, pts: 6,
    title: "Information dans l'immeuble",
    consigne: "Vous lisez cette information dans le hall de votre immeuble. Répondez aux questions.",
    help: { tr: "Apartmanınızın girişinde bu duyuruyu okuyorsunuz. Soruları cevaplayın.", en: "You read this notice in the hall of your building. Answer the questions." },
    doc: { type: "notice", title: "Information aux habitants – Résidence Les Tilleuls",
      body: "Chers habitants,\n\nIl y a des travaux : l'ascenseur ne marche pas du lundi 10 au mercredi 12 février.\n\nAttention : mardi 11 février, de 9 h à 13 h, il n'y a pas d'eau chaude dans l'immeuble.\n\nRappel : les poubelles jaunes (papier et plastique) sortent le jeudi soir. Les vélos sont interdits dans le hall : utilisez le local à vélos, au sous-sol.\n\nMerci !\nLe gardien, M. Lopez" },
    questions: [
      { q: "L'ascenseur ne marche pas pendant…", o: ["1 jour", "3 jours", "une semaine"], a: 1, x: "« du lundi 10 au mercredi 12 février » : lundi, mardi, mercredi." },
      { q: "Mardi matin, il n'y a pas…", o: ["💡 d'électricité", "📶 d'internet", "🚿 d'eau chaude"], a: 2, x: "« mardi 11 février, de 9 h à 13 h, il n'y a pas d'eau chaude »." },
      { q: "La poubelle jaune, c'est pour…", o: ["le papier et le plastique", "le verre", "les restes de repas"], a: 0, x: "« les poubelles jaunes (papier et plastique) »." },
      { q: "Vous pouvez laisser votre vélo dans le hall.", o: ["Vrai", "Faux"], a: 1, x: "« Les vélos sont interdits dans le hall »." },
      { q: "Le local à vélos est…", o: ["au sous-sol", "dans la cour", "au 1er étage"], a: 0, x: "« utilisez le local à vélos, au sous-sol »." },
      { q: "Ce message est écrit par…", o: ["le maire", "le gardien", "un voisin"], a: 1, x: "« Le gardien, M. Lopez »." }
    ] },

  { id: "a1-s08-ce3", level: "A1", sujet: 8, sec: "ce", ex: 3, pts: 6,
    title: "Cours de français pour adultes",
    consigne: "Vous voulez apprendre le français. Vous lisez les horaires des cours. Répondez aux questions.",
    help: { tr: "Fransızca öğrenmek istiyorsunuz. Ders saatlerini okuyorsunuz. Soruları cevaplayın.", en: "You want to learn French. You read the class timetable. Answer the questions." },
    doc: { type: "horaires", title: "Association Bonjour France – Cours de français",
      body: "Inscription : 30 € pour l'année. Le livre est offert.\nTest de niveau : mardi 2 septembre à 10 h.\nGarderie gratuite pour les enfants pendant les cours du matin.",
      rows: [["Niveau", "Jours", "Horaires"], ["A1 (débutant)", "lundi et jeudi", "9 h – 11 h"], ["A1 (débutant)", "mardi", "18 h 30 – 20 h 30"], ["A2", "mardi et vendredi", "9 h – 11 h"], ["B1", "mercredi", "19 h – 21 h"]] },
    questions: [
      { q: "Vous êtes débutante et vous travaillez le matin. Vous choisissez le cours…", o: ["du lundi et du jeudi", "du mardi soir", "du mercredi soir"], a: 1, x: "A1 (débutant) : « mardi, 18 h 30 – 20 h 30 ». C'est le soir." },
      { q: "Le cours A2 est…", o: ["le lundi", "le mercredi", "le mardi et le vendredi"], a: 2, x: "« A2 : mardi et vendredi, 9 h – 11 h »." },
      { q: "L'inscription coûte…", o: ["30 € par an", "30 € par mois", "0 €"], a: 0, x: "« Inscription : 30 € pour l'année. »" },
      { q: "Le livre est gratuit.", o: ["Vrai", "Faux"], a: 0, x: "« Le livre est offert. »" },
      { q: "Pendant les cours du matin, les enfants…", o: ["restent à la maison", "vont à la garderie", "vont au cours avec leurs parents"], a: 1, x: "« Garderie gratuite pour les enfants pendant les cours du matin. »" }
    ] },

  { id: "a1-s08-ce4", level: "A1", sujet: 8, sec: "ce", ex: 4, pts: 7,
    title: "Location de vélos",
    consigne: "Vous lisez cette publicité à la gare. Répondez aux questions.",
    help: { tr: "Garda bu reklamı okuyorsunuz. Soruları cevaplayın.", en: "You read this advertisement at the station. Answer the questions." },
    doc: { type: "annonce", title: "Vélo'Ville – Location de vélos",
      body: "Visitez la ville à vélo !\n\nVélo classique : 3 € l'heure, 12 € la journée.\nVélo électrique : 5 € l'heure, 20 € la journée.\nSiège pour enfant : gratuit.\nCasque : 2 € la journée.\n\nOuvert tous les jours de 9 h à 19 h, d'avril à octobre.\nAgence : 2, place de la Gare.\n\nPour louer un vélo, montrez une pièce d'identité." },
    questions: [
      { q: "Un vélo électrique pour une journée coûte…", o: ["12 €", "20 €", "5 €"], a: 1, x: "« Vélo électrique : 5 € l'heure, 20 € la journée. »" },
      { q: "Vous louez un vélo classique pendant 2 heures. Vous payez…", o: ["3 €", "12 €", "6 €"], a: 2, x: "« Vélo classique : 3 € l'heure » : 2 × 3 = 6 €." },
      { q: "Le siège pour enfant est…", o: ["gratuit", "à 2 €", "à 3 €"], a: 0, x: "« Siège pour enfant : gratuit. »" },
      { q: "L'agence est ouverte en décembre.", o: ["Vrai", "Faux"], a: 1, x: "« Ouvert […] d'avril à octobre. »" },
      { q: "Pour louer un vélo, vous montrez…", o: ["💳 une carte bancaire", "🪪 une pièce d'identité", "🎫 un ticket de bus"], a: 1, x: "« Pour louer un vélo, montrez une pièce d'identité. »" },
      { q: "L'agence est…", o: ["place de la Mairie", "rue de la Gare", "place de la Gare"], a: 2, x: "« Agence : 2, place de la Gare. »" }
    ] },

  /* ───────── Sujet 9 ───────── */
  { id: "a1-s09-ce1", level: "A1", sujet: 9, sec: "ce", ex: 1, pts: 6,
    title: "Carte postale d'Istanbul",
    consigne: "Vous recevez cette carte postale d'une collègue. Lisez-la, puis répondez aux questions.",
    help: { tr: "Bir iş arkadaşınızdan bu kartpostalı alıyorsunuz. Okuyun, sonra soruları cevaplayın.", en: "You receive this postcard from a colleague. Read it, then answer the questions." },
    doc: { type: "carte", from: "Élodie", to: "Esin",
      body: "Chère Esin,\n\nMerci pour tes conseils : Istanbul, c'est magnifique ! Je suis ici avec mon amie Laure pour 5 jours.\n\nAujourd'hui, on visite Sainte-Sophie et le Grand Bazar. Demain, on va prendre le bateau sur le Bosphore. Je mange des simits tous les matins et je bois beaucoup de thé ! 🍵\n\nLe problème : je ne parle pas turc. Tu peux m'apprendre quelques mots ?\n\nÀ mardi, au bureau !\nÉlodie" },
    questions: [
      { q: "Élodie est à Istanbul…", o: ["avec son mari", "seule", "avec une amie"], a: 2, x: "« Je suis ici avec mon amie Laure »." },
      { q: "Elle reste à Istanbul…", o: ["5 jours", "3 jours", "une semaine"], a: 0, x: "« pour 5 jours »." },
      { q: "Demain, Élodie va…", o: ["✈️ prendre l'avion", "⛴️ prendre le bateau", "🛍️ visiter le Grand Bazar"], a: 1, x: "« Demain, on va prendre le bateau sur le Bosphore. » Le Grand Bazar, c'est aujourd'hui." },
      { q: "Le matin, Élodie mange…", o: ["des crêpes", "du fromage", "des simits"], a: 2, x: "« Je mange des simits tous les matins »." },
      { q: "Élodie parle bien turc.", o: ["Vrai", "Faux"], a: 1, x: "« je ne parle pas turc »." },
      { q: "Élodie et Esin vont se voir…", o: ["mardi, au bureau", "samedi, au café", "lundi, à la gare"], a: 0, x: "« À mardi, au bureau ! »" }
    ] },

  { id: "a1-s09-ce2", level: "A1", sujet: 9, sec: "ce", ex: 2, pts: 6,
    title: "Yoga au parc",
    consigne: "Vous voyez cette affiche dans le parc. Lisez-la, puis répondez aux questions.",
    help: { tr: "Parkta bu afişi görüyorsunuz. Okuyun, sonra soruları cevaplayın.", en: "You see this poster in the park. Read it, then answer the questions." },
    doc: { type: "affiche", title: "Yoga au parc – Tout l'été !",
      body: "Cours de yoga en plein air, pour tous les niveaux.\n\nQuand ? Tous les dimanches de juillet et d'août, de 9 h à 10 h.\nOù ? Parc de la Feyssine, près du lac.\nPrix : 5 € le cours, ou 30 € pour 8 cours.\n\nApportez votre tapis et une bouteille d'eau.\nPas besoin de réserver : venez 10 minutes avant le début.\nS'il pleut, il n'y a pas de cours." },
    questions: [
      { q: "Les cours de yoga sont…", o: ["le samedi", "le dimanche", "le mercredi"], a: 1, x: "« Tous les dimanches de juillet et d'août »." },
      { q: "Le cours commence à…", o: ["9 h", "10 h", "8 h"], a: 0, x: "« de 9 h à 10 h »." },
      { q: "Vous devez apporter…", o: ["👟 des chaussures de sport", "⚽ un ballon", "🧘 un tapis et de l'eau"], a: 2, x: "« Apportez votre tapis et une bouteille d'eau. »" },
      { q: "8 cours coûtent…", o: ["40 €", "30 €", "5 €"], a: 1, x: "« 30 € pour 8 cours »." },
      { q: "Il faut réserver avant de venir.", o: ["Vrai", "Faux"], a: 1, x: "« Pas besoin de réserver »." },
      { q: "Le cours est…", o: ["près du lac", "dans un gymnase", "à la mairie"], a: 0, x: "« Parc de la Feyssine, près du lac. »" }
    ] },

  { id: "a1-s09-ce3", level: "A1", sujet: 9, sec: "ce", ex: 3, pts: 6,
    title: "Horaires de la mairie",
    consigne: "Vous allez à la mairie. Vous lisez les horaires des services. Répondez aux questions.",
    help: { tr: "Belediyeye gidiyorsunuz. Birimlerin çalışma saatlerini okuyorsunuz. Soruları cevaplayın.", en: "You are going to the town hall. You read the opening hours of the services. Answer the questions." },
    doc: { type: "horaires", title: "Mairie du 3e arrondissement – Horaires",
      body: "Passeports et cartes d'identité : seulement sur rendez-vous.\nLa mairie est fermée le dimanche.",
      rows: [["Service", "Lundi – vendredi", "Samedi"], ["Accueil", "8 h 30 – 17 h", "9 h – 12 h"], ["État civil (mariages, naissances)", "8 h 30 – 16 h 30", "9 h – 12 h"], ["Passeports et cartes d'identité", "9 h – 12 h", "fermé"], ["Inscriptions à l'école", "13 h 30 – 17 h", "fermé"]] },
    questions: [
      { q: "Le samedi, l'accueil est ouvert…", o: ["l'après-midi", "le matin", "toute la journée"], a: 1, x: "Accueil, samedi : « 9 h – 12 h »." },
      { q: "Pour un passeport, il faut…", o: ["prendre rendez-vous", "venir le samedi", "venir l'après-midi"], a: 0, x: "« Passeports et cartes d'identité : seulement sur rendez-vous. »" },
      { q: "Vous voulez inscrire votre fils à l'école. Vous venez…", o: ["mardi à 10 h", "samedi à 11 h", "jeudi à 15 h"], a: 2, x: "Inscriptions à l'école : « 13 h 30 – 17 h » du lundi au vendredi, « fermé » le samedi." },
      { q: "La mairie est ouverte le dimanche.", o: ["Vrai", "Faux"], a: 1, x: "« La mairie est fermée le dimanche. »" },
      { q: "Du lundi au vendredi, l'état civil ferme à…", o: ["16 h 30", "17 h", "12 h"], a: 0, x: "État civil : « 8 h 30 – 16 h 30 »." }
    ] },

  { id: "a1-s09-ce4", level: "A1", sujet: 9, sec: "ce", ex: 4, pts: 7,
    title: "Un nouveau marché",
    consigne: "Vous lisez cet article dans le journal du quartier. Répondez aux questions.",
    help: { tr: "Mahalle gazetesinde bu makaleyi okuyorsunuz. Soruları cevaplayın.", en: "You read this article in the neighbourhood newspaper. Answer the questions." },
    doc: { type: "article", title: "Un nouveau marché dans le quartier",
      body: "Bonne nouvelle pour les habitants du quartier Saint-Michel : à partir du 4 mai, il y a un nouveau marché, place Carnot !\n\nIl a lieu tous les mercredis, de 15 h à 20 h. Les 20 vendeurs sont des producteurs de la région : ils vendent des fruits, des légumes, du fromage, du miel et des fleurs.\n\nC'est parfait pour faire les courses après le travail ! Attention : pas de sacs en plastique, apportez votre panier." },
    questions: [
      { q: "Le marché est…", o: ["place Saint-Michel", "place Carnot", "dans le parc"], a: 1, x: "« il y a un nouveau marché, place Carnot ! »" },
      { q: "Le marché a lieu…", o: ["le samedi matin", "tous les jours", "le mercredi après-midi"], a: 2, x: "« tous les mercredis, de 15 h à 20 h »." },
      { q: "Il y a combien de vendeurs ?", o: ["20", "15", "4"], a: 0, x: "« Les 20 vendeurs sont des producteurs de la région »." },
      { q: "Au marché, on peut acheter…", o: ["🐟 du poisson", "🍯 du miel", "🍞 du pain"], a: 1, x: "« ils vendent des fruits, des légumes, du fromage, du miel et des fleurs »." },
      { q: "Le marché commence en mai.", o: ["Vrai", "Faux"], a: 0, x: "« à partir du 4 mai, il y a un nouveau marché »." },
      { q: "Au marché, on vous donne des sacs en plastique.", o: ["Vrai", "Faux"], a: 1, x: "« pas de sacs en plastique, apportez votre panier »." }
    ] },

  /* ───────── Sujet 10 ───────── */
  { id: "a1-s10-ce1", level: "A1", sujet: 10, sec: "ce", ex: 1, pts: 6,
    title: "Chercher un enfant à l'école",
    consigne: "Vous recevez ce SMS de la maman d'un ami de votre fils. Lisez le message, puis répondez aux questions.",
    help: { tr: "Oğlunuzun bir arkadaşının annesinden bu SMS'i alıyorsunuz. Mesajı okuyun, sonra soruları cevaplayın.", en: "You receive this text message from the mother of your son's friend. Read it, then answer the questions." },
    doc: { type: "sms", from: "Fatma", to: "Esin",
      body: "Bonjour Esin, c'est Fatma, la maman de Deniz. Je suis chez le médecin avec mon bébé : il a de la fièvre 🤒.\n\nTu peux aller chercher Deniz à l'école avec ton fils, à 16 h 30 ? Je téléphone à la maîtresse. Deniz peut prendre le goûter chez toi ?\n\nJe passe le chercher vers 18 h 30. Il a son vélo à l'école : il peut le laisser là-bas.\n\nMerci beaucoup !!" },
    questions: [
      { q: "En ce moment, Fatma est…", o: ["au travail", "chez le médecin", "à l'école"], a: 1, x: "« Je suis chez le médecin avec mon bébé »." },
      { q: "Qui est malade ?", o: ["le bébé de Fatma", "Deniz", "Fatma"], a: 0, x: "« mon bébé : il a de la fièvre »." },
      { q: "Vous allez chercher Deniz à…", o: ["16 h", "18 h 30", "16 h 30"], a: 2, x: "« Tu peux aller chercher Deniz à l'école […] à 16 h 30 ? »" },
      { q: "Fatma va chercher Deniz chez vous vers 18 h 30.", o: ["Vrai", "Faux"], a: 0, x: "« Je passe le chercher vers 18 h 30. »" },
      { q: "Le vélo de Deniz…", o: ["va chez vous", "reste à l'école", "est chez le médecin"], a: 1, x: "« Il a son vélo à l'école : il peut le laisser là-bas. »" }
    ] },

  { id: "a1-s10-ce2", level: "A1", sujet: 10, sec: "ce", ex: 2, pts: 6,
    title: "Les soldes au magasin",
    consigne: "Vous voyez cette affiche dans la vitrine d'un magasin. Lisez-la, puis répondez aux questions.",
    help: { tr: "Bir mağazanın vitrininde bu afişi görüyorsunuz. Okuyun, sonra soruları cevaplayın.", en: "You see this poster in a shop window. Read it, then answer the questions." },
    doc: { type: "affiche", title: "SOLDES chez Mode & Vous !",
      body: "Du mercredi 8 janvier au mardi 4 février\n\nJusqu'à – 50 % sur les vêtements pour femmes, hommes et enfants !\nManteaux : – 40 %\nChaussures : – 30 %\nT-shirts : 2 achetés = 1 offert\n\nLe premier jour, le magasin ouvre à 8 h.\n\nLes articles soldés ne sont pas remboursés. Vous pouvez les échanger pendant 15 jours avec le ticket de caisse." },
    questions: [
      { q: "Les soldes commencent…", o: ["le 4 février", "le 8 janvier", "le 15 janvier"], a: 1, x: "« Du mercredi 8 janvier au mardi 4 février »." },
      { q: "Sur les manteaux, la réduction est de…", o: ["🧥 – 40 %", "🧥 – 30 %", "🧥 – 50 %"], a: 0, x: "« Manteaux : – 40 % »." },
      { q: "Vous prenez 3 t-shirts. Vous payez…", o: ["1 t-shirt", "3 t-shirts", "2 t-shirts"], a: 2, x: "« T-shirts : 2 achetés = 1 offert »." },
      { q: "Le premier jour, le magasin ouvre à 8 h.", o: ["Vrai", "Faux"], a: 0, x: "« Le premier jour, le magasin ouvre à 8 h. »" },
      { q: "Avec le ticket de caisse, vous pouvez…", o: ["être remboursé", "avoir un cadeau", "échanger l'article"], a: 2, x: "« Vous pouvez les échanger pendant 15 jours avec le ticket de caisse. »" }
    ] },

  { id: "a1-s10-ce3", level: "A1", sujet: 10, sec: "ce", ex: 3, pts: 6,
    title: "Une journée à Annecy",
    consigne: "Votre association organise une sortie. Vous lisez le programme. Répondez aux questions.",
    help: { tr: "Derneğiniz bir gezi düzenliyor. Programı okuyorsunuz. Soruları cevaplayın.", en: "Your association is organising a day trip. You read the programme. Answer the questions." },
    doc: { type: "programme", title: "Sortie à Annecy – Samedi 17 mai",
      body: "Prix : 25 € (car + visite du château). Le repas de midi n'est pas compris : apportez un pique-nique.\nInscription avant le 10 mai, auprès de Martine.",
      rows: [["Heure", "Programme"], ["7 h 30", "Rendez-vous devant la mairie, départ en car"], ["9 h 30", "Arrivée à Annecy, promenade dans la vieille ville"], ["11 h", "Visite du château"], ["12 h 30", "Pique-nique au bord du lac"], ["14 h 30", "Promenade en bateau sur le lac (pas obligatoire : 15 €)"], ["17 h 30", "Départ d'Annecy"], ["19 h 30", "Retour devant la mairie"]] },
    questions: [
      { q: "Le rendez-vous de départ est à…", o: ["7 h 30", "9 h 30", "19 h 30"], a: 0, x: "« 7 h 30 : Rendez-vous devant la mairie, départ en car »." },
      { q: "On voyage en…", o: ["🚆 train", "🚌 car", "🚗 voiture"], a: 1, x: "« départ en car »." },
      { q: "À midi…", o: ["on visite le château", "on mange au restaurant", "on mange un pique-nique"], a: 2, x: "« 12 h 30 : Pique-nique au bord du lac »." },
      { q: "Vous voulez aussi faire la promenade en bateau. Vous payez en tout…", o: ["25 €", "40 €", "15 €"], a: 1, x: "« Prix : 25 € » + bateau « 15 € » = 40 €." },
      { q: "On peut s'inscrire jusqu'au 17 mai.", o: ["Vrai", "Faux"], a: 1, x: "« Inscription avant le 10 mai »." }
    ] },

  { id: "a1-s10-ce4", level: "A1", sujet: 10, sec: "ce", ex: 4, pts: 7,
    title: "La recette de la semaine",
    consigne: "Vous lisez cet article dans un magazine. Répondez aux questions.",
    help: { tr: "Bir dergide bu makaleyi okuyorsunuz. Soruları cevaplayın.", en: "You read this article in a magazine. Answer the questions." },
    doc: { type: "article", title: "La recette de la semaine : la soupe de lentilles",
      body: "Une soupe facile, pas chère et délicieuse ! Pour 4 personnes. Préparation : 10 minutes. Cuisson : 25 minutes.\n\nIl faut : 200 g de lentilles corail, 1 oignon, 2 carottes, 1 litre d'eau, du sel, du cumin et un citron.\n\nCoupez l'oignon et les carottes. Mettez tout dans une casserole avec l'eau. Faites cuire 25 minutes, puis mixez.\n\nServez avec un peu de jus de citron et du pain." },
    questions: [
      { q: "Cette soupe est pour…", o: ["2 personnes", "4 personnes", "6 personnes"], a: 1, x: "« Pour 4 personnes. »" },
      { q: "La cuisson dure…", o: ["10 minutes", "35 minutes", "25 minutes"], a: 2, x: "« Cuisson : 25 minutes. »" },
      { q: "Dans la soupe, il y a…", o: ["🥕 des carottes", "🥔 des pommes de terre", "🍅 des tomates"], a: 0, x: "« 1 oignon, 2 carottes »." },
      { q: "Il faut 1 litre de lait.", o: ["Vrai", "Faux"], a: 1, x: "« 1 litre d'eau »." },
      { q: "Cette soupe coûte cher.", o: ["Vrai", "Faux"], a: 1, x: "« Une soupe facile, pas chère et délicieuse ! »" },
      { q: "On sert la soupe avec…", o: ["🧀 du fromage", "🍋 du citron et du pain", "🍚 du riz"], a: 1, x: "« Servez avec un peu de jus de citron et du pain. »" }
    ] }
);
