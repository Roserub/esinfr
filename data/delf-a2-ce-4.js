/* DELF A2 — reading (compréhension des écrits), papers 16–20 */
(window.DELF = window.DELF || []).push(

  /* ===================== SUJET 16 ===================== */
  { id: "a2-s16-ce1", level: "A2", sujet: 16, sec: "ce", ex: 1, pts: 6,
    title: "Missions de bénévolat",
    consigne: "Vos amis veulent faire du bénévolat. Lisez ces annonces d'associations et répondez aux questions.",
    help: { tr: "Arkadaşlarınız gönüllü çalışmak istiyor. Derneklerin bu ilanlarını okuyun ve soruları cevaplayın.", en: "Your friends want to do some volunteering. Read these ads from associations and answer the questions." },
    doc: { type: "annonce", title: "Devenez bénévole !",
      body: "A. Épicerie solidaire du quartier Saint-Paul\nAidez-nous à trier et à ranger les produits pour les familles. Le mardi ou le jeudi, de 9 h à 12 h. Pas d'expérience demandée : on vous explique tout.\n\nB. Lire Ensemble\nVenez lire des histoires aux enfants malades, à l'hôpital, le mercredi après-midi. Vous parlez une autre langue ? Les enfants qui ne parlent pas bien français ont besoin de vous !\n\nC. Sport Pour Tous\nNous cherchons des bénévoles pour accompagner des personnes handicapées pendant des activités sportives (marche, natation), le samedi matin. Formation de 2 jours offerte.\n\nD. Festival Les Nuits d'Été\nTrois soirs en juillet : accueil du public et vente de boissons. En échange, une place gratuite pour les concerts. Bénévoles à partir de 18 ans." },
    questions: [
      { q: "Hakan a fait des études de sport. Il veut aider des personnes en situation de handicap le week-end. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 2, x: "Annonce C : « accompagner des personnes handicapées pendant des activités sportives », « le samedi matin »." },
      { q: "Julie travaille toute la journée. Elle est libre le soir en été et elle adore la musique. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 3, x: "Annonce D : « Trois soirs en juillet », « une place gratuite pour les concerts »." },
      { q: "Yasmine parle arabe et français. Elle est libre le mercredi et elle aime les enfants. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 1, x: "Annonce B : « lire des histoires aux enfants », « le mercredi après-midi », « Vous parlez une autre langue ? »." },
      { q: "Gérard est retraité. Il est libre le matin en semaine et il n'a jamais été bénévole. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 0, x: "Annonce A : « Le mardi ou le jeudi, de 9 h à 12 h », « Pas d'expérience demandée »." },
      { q: "Un lycéen de 16 ans peut être bénévole au festival.", o: ["Vrai", "Faux"], a: 1, x: "L'annonce D dit : « Bénévoles à partir de 18 ans »." }
    ] },

  { id: "a2-s16-ce2", level: "A2", sujet: 16, sec: "ce", ex: 2, pts: 6,
    title: "Un vol annulé",
    consigne: "Vous avez réservé un billet d'avion pour une amie. Elle reçoit ce courriel de la compagnie aérienne et vous demande de l'aider. Lisez-le et répondez aux questions.",
    help: { tr: "Bir arkadaşınız için uçak bileti aldınız. Arkadaşınız havayolu şirketinden bu e-postayı alıyor ve sizden yardım istiyor. Okuyun ve soruları cevaplayın.", en: "You booked a plane ticket for a friend. She receives this e-mail from the airline and asks for your help. Read it and answer the questions." },
    doc: { type: "email", from: "Air Horizon – Service clients", to: "Mme Zeynep Arslan", subject: "Vol AH 512 Paris – Istanbul du 14 mars : annulation",
      body: "Madame,\n\nNous sommes désolés de vous informer que votre vol AH 512 Paris – Istanbul du vendredi 14 mars, prévu à 10 h 20, est annulé à cause d'une grève du personnel de l'aéroport.\n\nNous vous proposons deux solutions :\n– partir le même jour sur le vol de 18 h 45 (il reste des places) ;\n– ou partir le samedi 15 mars à 7 h 10. Dans ce cas, nous vous offrons une nuit d'hôtel près de l'aéroport et le dîner.\n\nVous pouvez aussi annuler votre voyage. Le prix de votre billet (289 €) vous sera alors remboursé en totalité, sous 7 jours.\n\nMerci de nous donner votre réponse avant le mercredi 12 mars, sur notre site, rubrique « Mes réservations ». Sans réponse de votre part, nous vous placerons automatiquement sur le vol de 18 h 45.\n\nVotre valise reste comprise dans le prix du billet.\n\nNous vous prions de nous excuser pour ce problème.\n\nLe service clients" },
    questions: [
      { q: "Le vol est annulé à cause…", o: ["du mauvais temps.", "d'un problème avec l'avion.", "d'une grève."], a: 2, x: "« est annulé à cause d'une grève du personnel de l'aéroport »." },
      { q: "Si Mme Arslan part le samedi, la compagnie lui offre…", o: ["une nuit d'hôtel et le dîner.", "le remboursement de son billet.", "une deuxième valise."], a: 0, x: "« partir le samedi 15 mars […] nous vous offrons une nuit d'hôtel près de l'aéroport et le dîner »." },
      { q: "Si elle annule son voyage, on lui rembourse seulement une partie du billet.", o: ["Vrai", "Faux"], a: 1, x: "« Le prix de votre billet (289 €) vous sera alors remboursé en totalité »." },
      { q: "Elle doit donner sa réponse avant le…", o: ["14 mars.", "12 mars.", "15 mars."], a: 1, x: "« Merci de nous donner votre réponse avant le mercredi 12 mars »." },
      { q: "Si elle ne répond pas, elle…", o: ["est remboursée.", "part le samedi matin.", "part le vendredi à 18 h 45."], a: 2, x: "« Sans réponse de votre part, nous vous placerons automatiquement sur le vol de 18 h 45 »." },
      { q: "Pour répondre, elle doit…", o: ["aller sur le site de la compagnie.", "téléphoner au service clients.", "aller à l'aéroport."], a: 0, x: "« sur notre site, rubrique « Mes réservations » »." }
    ] },

  { id: "a2-s16-ce3", level: "A2", sujet: 16, sec: "ce", ex: 3, pts: 6,
    title: "Règles de l'espace de coworking",
    consigne: "Vous louez une place dans un espace de travail partagé. Le premier jour, on vous donne ce document. Lisez-le et répondez aux questions.",
    help: { tr: "Ortak bir çalışma alanında yer kiralıyorsunuz. İlk gün size bu belgeyi veriyorlar. Okuyun ve soruları cevaplayın.", en: "You rent a desk in a coworking space. On the first day, you are given this document. Read it and answer the questions." },
    doc: { type: "notice", title: "La Ruche – Espace de travail partagé : mode d'emploi",
      body: "Bienvenue à La Ruche ! L'espace est ouvert du lundi au vendredi, de 8 h à 20 h. Avec l'abonnement mensuel, vous pouvez aussi venir le samedi, de 9 h à 13 h.\n\nPlaces : dans la grande salle, les bureaux ne sont pas réservés. Prenez une place libre. Le soir, rangez vos affaires dans votre casier : les objets laissés sur les bureaux sont mis à l'accueil.\n\nCalme : la grande salle est un espace calme. Pour téléphoner, allez dans les petites cabines vertes. Les salles de réunion (4 à 10 personnes) se réservent à l'accueil ou sur l'application, au moins 24 heures avant.\n\nCuisine : le café et le thé sont offerts. Vous pouvez utiliser le micro-ondes et le frigo, mais lavez votre tasse et reprenez votre nourriture le vendredi soir : le frigo est vidé chaque week-end.\n\nInternet : le code wifi change chaque mois. Vous le trouverez sur le tableau à côté de l'entrée.\n\nImprimante : 10 pages gratuites par jour, puis 0,10 € la page.\n\nUn problème ? Parlez-en à Mathilde, à l'accueil." },
    questions: [
      { q: "Avec l'abonnement mensuel, le samedi, on peut venir…", o: ["de 8 h à 20 h.", "de 9 h à 13 h.", "toute la journée."], a: 1, x: "« vous pouvez aussi venir le samedi, de 9 h à 13 h »." },
      { q: "Pour passer un appel téléphonique, on va…", o: ["dans la grande salle.", "à l'accueil.", "dans une cabine verte."], a: 2, x: "« Pour téléphoner, allez dans les petites cabines vertes »." },
      { q: "On peut réserver une salle de réunion le jour même.", o: ["Vrai", "Faux"], a: 1, x: "Les salles se réservent « au moins 24 heures avant »." },
      { q: "Le café…", o: ["est gratuit.", "coûte 0,10 €.", "est vendu à l'accueil."], a: 0, x: "« le café et le thé sont offerts »." },
      { q: "Le frigo est vidé…", o: ["chaque soir.", "chaque week-end.", "chaque mois."], a: 1, x: "« le frigo est vidé chaque week-end »." },
      { q: "On trouve le code wifi…", o: ["chez Mathilde.", "dans l'application.", "sur le tableau près de l'entrée."], a: 2, x: "« Vous le trouverez sur le tableau à côté de l'entrée »." }
    ] },

  { id: "a2-s16-ce4", level: "A2", sujet: 16, sec: "ce", ex: 4, pts: 7,
    title: "Le handball pour la santé",
    consigne: "Vous lisez cet article dans le journal de votre ville. Répondez aux questions.",
    help: { tr: "Şehrinizin gazetesinde bu makaleyi okuyorsunuz. Soruları cevaplayın.", en: "You read this article in your local newspaper. Answer the questions." },
    doc: { type: "article", title: "À Villeneuve, le club de handball lance le « hand-santé »",
      body: "Depuis septembre, le club de handball de Villeneuve propose une nouvelle activité : le hand-santé. Ici, pas de compétition et pas de match le week-end. Les séances ont lieu le mardi et le jeudi, de 10 h à 11 h 30, au gymnase Jean-Bouin.\n\nL'idée vient de Karim Belkacem, entraîneur au club depuis quinze ans. « Beaucoup de parents des jeunes joueurs me disaient : j'aimerais bouger, mais le handball, c'est trop dur pour moi. Alors j'ai cherché une solution. »\n\nLe hand-santé se joue avec un ballon plus mou et plus léger. Les contacts entre joueurs sont interdits et on ne court pas : on marche vite. Chaque séance commence par 20 minutes d'échauffement avec une kinésithérapeute, Laure Martin.\n\nAujourd'hui, le groupe compte 24 personnes, de 45 à 78 ans. Certaines ont eu des problèmes de dos ou de cœur. « Avant, je ne faisais jamais de sport. Maintenant, je dors mieux et j'ai moins mal aux genoux », raconte Monique, 67 ans.\n\nLa première séance est gratuite : il suffit d'apporter des baskets et une bouteille d'eau. Ensuite, la licence coûte 90 € pour l'année, avec un certificat médical." },
    questions: [
      { q: "Les séances de hand-santé ont lieu…", o: ["le week-end.", "le mardi et le jeudi matin.", "le mardi et le jeudi soir."], a: 1, x: "« le mardi et le jeudi, de 10 h à 11 h 30 »." },
      { q: "Karim a créé le hand-santé parce que…", o: ["des parents voulaient faire du sport.", "le club n'avait plus de joueurs.", "les jeunes joueurs étaient fatigués."], a: 0, x: "Les parents lui disaient : « j'aimerais bouger, mais le handball, c'est trop dur pour moi »." },
      { q: "Au hand-santé…", o: ["on court beaucoup.", "on a des contacts avec les autres joueurs.", "on marche vite."], a: 2, x: "« on ne court pas : on marche vite »." },
      { q: "L'échauffement se fait avec…", o: ["une kinésithérapeute.", "Karim Belkacem.", "un médecin."], a: 0, x: "« 20 minutes d'échauffement avec une kinésithérapeute, Laure Martin »." },
      { q: "Grâce au hand-santé, Monique a moins mal aux genoux.", o: ["Vrai", "Faux"], a: 0, x: "« je dors mieux et j'ai moins mal aux genoux »." },
      { q: "Pour la première séance, il faut…", o: ["payer 90 €.", "apporter des baskets et de l'eau.", "avoir déjà joué au handball."], a: 1, x: "« La première séance est gratuite : il suffit d'apporter des baskets et une bouteille d'eau »." }
    ] },

  /* ===================== SUJET 17 ===================== */
  { id: "a2-s17-ce1", level: "A2", sujet: 17, sec: "ce", ex: 1, pts: 6,
    title: "Trouver une baby-sitter",
    consigne: "Des familles de votre immeuble cherchent quelqu'un pour garder leurs enfants. Lisez ces annonces et répondez aux questions.",
    help: { tr: "Apartmanınızdaki aileler çocuklarına bakacak birini arıyor. Bu ilanları okuyun ve soruları cevaplayın.", en: "Families in your building are looking for someone to look after their children. Read these ads and answer the questions." },
    doc: { type: "annonce", title: "Garde d'enfants – Ils proposent leurs services",
      body: "A. Camille, 20 ans, étudiante infirmière\nJe garde les bébés à partir de 3 mois. Disponible le soir après 19 h et la nuit. 12 € de l'heure.\n\nB. Lucas, 24 ans, animateur sportif\nSorties au parc, jeux de ballon, vélo : avec moi, les enfants bougent ! Le mercredi et le samedi après-midi. Enfants de 6 à 12 ans.\n\nC. Aylin, 22 ans, étudiante en lettres\nJe parle turc, anglais et français. Je vais chercher les enfants à l'école à 16 h 30 et je les aide à faire leurs devoirs. Du lundi au vendredi.\n\nD. Mme Roux, 58 ans, ancienne assistante maternelle\nJe peux garder vos enfants pendant les vacances scolaires, toute la journée, chez vous ou chez moi. J'ai une voiture pour les sorties." },
    questions: [
      { q: "Hélène et Marc vont au théâtre samedi soir. Leur fille a 8 mois. Quelle annonce leur correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 0, x: "Annonce A : « Je garde les bébés à partir de 3 mois », « le soir après 19 h »." },
      { q: "Sarah et Malik travaillent tous les deux pendant les vacances de février. Ils cherchent quelqu'un pour toute la journée. Quelle annonce leur correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 3, x: "Annonce D : « pendant les vacances scolaires, toute la journée »." },
      { q: "Le fils de Mme Leroy a 9 ans. Il passe ses mercredis devant les jeux vidéo et il ne bouge pas assez. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 1, x: "Annonce B : « avec moi, les enfants bougent ! », « Le mercredi », « Enfants de 6 à 12 ans »." },
      { q: "Les enfants de M. Demir finissent l'école à 16 h 30. Ils parlent turc à la maison et ils ont besoin d'aide pour les devoirs. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 2, x: "Annonce C : « Je parle turc », « chercher les enfants à l'école à 16 h 30 », « je les aide à faire leurs devoirs »." },
      { q: "Camille peut garder un enfant la nuit.", o: ["Vrai", "Faux"], a: 0, x: "Annonce A : « Disponible le soir après 19 h et la nuit »." }
    ] },

  { id: "a2-s17-ce2", level: "A2", sujet: 17, sec: "ce", ex: 2, pts: 6,
    title: "Un sac retrouvé",
    consigne: "Vous avez perdu votre sac dans les transports. Vous recevez ce courriel. Lisez-le et répondez aux questions.",
    help: { tr: "Toplu taşımada çantanızı kaybettiniz. Bu e-postayı alıyorsunuz. Okuyun ve soruları cevaplayın.", en: "You lost your bag on public transport. You receive this e-mail. Read it and answer the questions." },
    doc: { type: "email", from: "Réseau Tramis (bus et tram) – Objets trouvés", to: "M. Emre Yılmaz", subject: "Votre déclaration de perte n° 4471",
      body: "Monsieur,\n\nLe lundi 6 octobre, vous avez déclaré la perte d'un sac à dos noir dans le tram de la ligne 2. Bonne nouvelle : un sac qui correspond à votre description a été trouvé le soir même par un conducteur, au terminus Gare Sud.\n\nDans le sac, il y avait un ordinateur portable, un livre de français et une veste bleue. Malheureusement, nous n'avons pas trouvé de portefeuille.\n\nVous pouvez venir chercher votre sac à notre bureau des objets trouvés, 3, place de la République, du mardi au samedi, de 9 h à 12 h 30. Le bureau est fermé l'après-midi.\n\nN'oubliez pas d'apporter une pièce d'identité et ce courriel. Si vous ne pouvez pas venir, une autre personne peut venir à votre place avec une lettre signée de vous et une copie de votre pièce d'identité.\n\nAttention : nous gardons les objets trouvés pendant un mois. Après, ils sont donnés à une association.\n\nCordialement,\nLe service des objets trouvés" },
    questions: [
      { q: "M. Yılmaz a perdu son sac…", o: ["dans le bus.", "dans le tram.", "à la gare."], a: 1, x: "« vous avez déclaré la perte d'un sac à dos noir dans le tram de la ligne 2 »." },
      { q: "Le sac a été trouvé par…", o: ["un conducteur.", "un employé du bureau.", "une association."], a: 0, x: "« a été trouvé le soir même par un conducteur »." },
      { q: "Dans le sac, on n'a pas trouvé…", o: ["l'ordinateur.", "le livre de français.", "le portefeuille."], a: 2, x: "« nous n'avons pas trouvé de portefeuille »." },
      { q: "M. Yılmaz peut aller chercher son sac le mardi à 15 h.", o: ["Vrai", "Faux"], a: 1, x: "Le bureau est ouvert « de 9 h à 12 h 30 » : « Le bureau est fermé l'après-midi »." },
      { q: "Pour récupérer son sac, M. Yılmaz doit apporter…", o: ["une photo du sac.", "une lettre signée.", "une pièce d'identité et le courriel."], a: 2, x: "« N'oubliez pas d'apporter une pièce d'identité et ce courriel »." },
      { q: "Si personne ne vient chercher un objet pendant un mois…", o: ["il est envoyé chez son propriétaire.", "il est donné à une association.", "il reste au terminus."], a: 1, x: "« nous gardons les objets trouvés pendant un mois. Après, ils sont donnés à une association »." }
    ] },

  { id: "a2-s17-ce3", level: "A2", sujet: 17, sec: "ce", ex: 3, pts: 6,
    title: "Au centre aquatique",
    consigne: "Vous voulez aller nager. Vous lisez ces informations à l'entrée du centre aquatique. Répondez aux questions.",
    help: { tr: "Yüzmeye gitmek istiyorsunuz. Yüzme merkezinin girişinde bu bilgileri okuyorsunuz. Soruları cevaplayın.", en: "You want to go swimming. You read this information at the entrance of the swimming centre. Answer the questions." },
    doc: { type: "notice", title: "Centre aquatique des Dunes – Informations pratiques",
      body: "Horaires : du lundi au vendredi, de 12 h à 14 h et de 17 h à 21 h ; le samedi et le dimanche, de 9 h à 18 h. L'entrée n'est plus possible 45 minutes avant la fermeture.\n\nTarifs : adulte 4,50 € ; enfant (4 à 16 ans) 3 € ; gratuit pour les moins de 4 ans. La carte de 10 entrées coûte 38 €.\n\nHygiène : la douche avec du savon est obligatoire avant d'entrer dans l'eau. Le bonnet de bain est obligatoire pour tout le monde. Vous avez oublié le vôtre ? Vous pouvez en acheter un à l'accueil (2 €).\n\nBassins : le grand bassin (25 m) est réservé aux nageurs. Le petit bassin, avec une eau à 30 °C, est pour les familles et les enfants. Les enfants de moins de 10 ans doivent être accompagnés par un adulte en maillot de bain.\n\nCasiers : ils fonctionnent avec une pièce de 1 €. La pièce est rendue quand vous ouvrez le casier.\n\nLe mardi soir, de 19 h à 21 h, le grand bassin est réservé à l'aquagym (sur inscription)." },
    questions: [
      { q: "Le samedi, on peut entrer jusqu'à…", o: ["17 h 15.", "18 h.", "21 h."], a: 0, x: "Le centre ferme à 18 h et « L'entrée n'est plus possible 45 minutes avant la fermeture » : 17 h 15." },
      { q: "Pour un enfant de 3 ans, l'entrée…", o: ["coûte 3 €.", "coûte 4,50 €.", "est gratuite."], a: 2, x: "« gratuit pour les moins de 4 ans »." },
      { q: "Les enfants aussi doivent porter un bonnet de bain.", o: ["Vrai", "Faux"], a: 0, x: "« Le bonnet de bain est obligatoire pour tout le monde »." },
      { q: "Le petit bassin est surtout pour…", o: ["les nageurs.", "les familles et les enfants.", "l'aquagym."], a: 1, x: "« Le petit bassin […] est pour les familles et les enfants »." },
      { q: "Pour utiliser un casier, il faut…", o: ["une pièce de 1 €, qu'on récupère ensuite.", "payer 2 € à l'accueil.", "avoir la carte de 10 entrées."], a: 0, x: "« ils fonctionnent avec une pièce de 1 €. La pièce est rendue quand vous ouvrez le casier »." },
      { q: "Le mardi à 20 h, dans le grand bassin, on peut…", o: ["nager librement.", "faire de l'aquagym.", "jouer avec son enfant."], a: 1, x: "« Le mardi soir, de 19 h à 21 h, le grand bassin est réservé à l'aquagym »." }
    ] },

  { id: "a2-s17-ce4", level: "A2", sujet: 17, sec: "ce", ex: 4, pts: 7,
    title: "Un café pour tout réparer",
    consigne: "Vous lisez cet article dans le journal de votre quartier. Répondez aux questions.",
    help: { tr: "Mahallenizin gazetesinde bu makaleyi okuyorsunuz. Soruları cevaplayın.", en: "You read this article in your neighbourhood newspaper. Answer the questions." },
    doc: { type: "article", title: "Au Repair Café de Saint-Michel, on ne jette plus, on répare !",
      body: "Chaque premier samedi du mois, de 14 h à 18 h, la salle des fêtes du quartier Saint-Michel devient un grand atelier. Les habitants viennent avec un grille-pain qui ne marche plus, une lampe cassée ou un pantalon troué. Des bénévoles les aident à les réparer, gratuitement.\n\nLe Repair Café a été créé il y a deux ans par Jacques Morel, un ancien électricien de 66 ans. « Quand j'étais petit, mon père réparait tout à la maison. Aujourd'hui, on achète, on jette et on rachète. Je trouvais ça triste. »\n\nAttention, ici, les bénévoles ne réparent pas à votre place : ils vous montrent comment faire. « Le but, c'est d'apprendre », explique Fatou, couturière bénévole. Le mois dernier, elle a appris à un jeune homme à recoudre un bouton.\n\nL'année dernière, plus de 400 objets ont été réparés. Les appareils électriques sont les plus nombreux, devant les vêtements et les vélos.\n\nL'entrée est libre, mais on peut laisser un petit don pour acheter des outils. Pendant l'attente, le café et les gâteaux sont offerts. Le Repair Café cherche de nouveaux bénévoles, surtout des personnes qui savent réparer les ordinateurs." },
    questions: [
      { q: "Le Repair Café a lieu…", o: ["tous les samedis.", "le premier samedi du mois.", "le dimanche matin."], a: 1, x: "« Chaque premier samedi du mois, de 14 h à 18 h »." },
      { q: "Jacques Morel a créé le Repair Café parce qu'…", o: ["il trouvait triste de tout jeter.", "son père le lui a demandé.", "il voulait vendre des outils."], a: 0, x: "« on achète, on jette et on rachète. Je trouvais ça triste »." },
      { q: "Au Repair Café, les bénévoles…", o: ["réparent les objets à la place des habitants.", "vendent des objets d'occasion.", "montrent aux habitants comment réparer."], a: 2, x: "« les bénévoles ne réparent pas à votre place : ils vous montrent comment faire »." },
      { q: "Le mois dernier, Fatou a réparé un ordinateur.", o: ["Vrai", "Faux"], a: 1, x: "Fatou est couturière : « elle a appris à un jeune homme à recoudre un bouton »." },
      { q: "Les objets les plus souvent réparés sont…", o: ["les vêtements.", "les vélos.", "les appareils électriques."], a: 2, x: "« Les appareils électriques sont les plus nombreux, devant les vêtements et les vélos »." },
      { q: "Le Repair Café cherche surtout des bénévoles qui savent réparer…", o: ["les ordinateurs.", "les vélos.", "les vêtements."], a: 0, x: "« surtout des personnes qui savent réparer les ordinateurs »." }
    ] },

  /* ===================== SUJET 18 ===================== */
  { id: "a2-s18-ce1", level: "A2", sujet: 18, sec: "ce", ex: 1, pts: 6,
    title: "Cours de danse en ville",
    consigne: "Plusieurs personnes que vous connaissez veulent apprendre à danser. Lisez ces annonces et répondez aux questions.",
    help: { tr: "Tanıdığınız birkaç kişi dans öğrenmek istiyor. Bu ilanları okuyun ve soruları cevaplayın.", en: "Several people you know want to learn to dance. Read these ads and answer the questions." },
    doc: { type: "annonce", title: "Envie de danser ?",
      body: "A. Studio Salsa Cubana\nSalsa en couple, le mardi et le jeudi à 20 h 30. Vous venez seul ? Pas de problème : on change de partenaire à chaque danse ! Premier cours offert.\n\nB. École Pointes et Plié\nDanse classique pour les enfants de 4 à 10 ans, le mercredi matin. Grand spectacle de fin d'année en juin.\n\nC. Zumba Énergie\nUne heure de danse et de fitness sur des musiques latines. Le lundi, de 12 h 30 à 13 h 30, près des bureaux de la zone d'activités. Douches sur place.\n\nD. Association Kaléidoscope – Danses du monde\nDanses africaines, orientales et traditionnelles, le samedi après-midi. Rythme doux : cours ouverts aux seniors et aux personnes qui ont mal au dos." },
    questions: [
      { q: "Nicole, 70 ans, a des problèmes de dos. Elle aimerait découvrir des danses de plusieurs pays. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 3, x: "Annonce D : « Danses du monde », « ouverts aux seniors et aux personnes qui ont mal au dos »." },
      { q: "Omar vient d'arriver en ville. Il n'a pas de partenaire, mais il veut danser à deux, le soir. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 0, x: "Annonce A : « Salsa en couple […] à 20 h 30 », « Vous venez seul ? Pas de problème »." },
      { q: "Élodie travaille dans un bureau. Elle veut faire du sport pendant sa pause de midi. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 2, x: "Annonce C : « de 12 h 30 à 13 h 30, près des bureaux », « danse et fitness »." },
      { q: "Inès voudrait inscrire sa fille de 6 ans à un cours de danse. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 1, x: "Annonce B : « pour les enfants de 4 à 10 ans »." },
      { q: "Au Studio Salsa Cubana, le premier cours est gratuit.", o: ["Vrai", "Faux"], a: 0, x: "Annonce A : « Premier cours offert »." }
    ] },

  { id: "a2-s18-ce2", level: "A2", sujet: 18, sec: "ce", ex: 2, pts: 6,
    title: "Nouvelle vie à Bordeaux",
    consigne: "Vous recevez ce courriel d'une amie. Lisez-le et répondez aux questions.",
    help: { tr: "Bir arkadaşınızdan bu e-postayı alıyorsunuz. Okuyun ve soruları cevaplayın.", en: "You receive this e-mail from a friend. Read it and answer the questions." },
    doc: { type: "email", from: "Clara", to: "Esin", subject: "Enfin installée à Bordeaux !",
      body: "Salut Esin,\n\nÇa y est, j'ai déménagé ! Depuis le 1er juin, j'habite à Bordeaux. Le déménagement a été un peu difficile : il a plu toute la journée et le camion est arrivé avec deux heures de retard. Heureusement, mes cousins sont venus m'aider à porter les cartons.\n\nMon nouvel appartement est plus petit que l'ancien, mais il est très lumineux et il a un balcon. Il est au 4e étage, sans ascenseur : c'est bon pour les jambes ! Il se trouve à dix minutes à pied de la gare.\n\nJe commence mon nouveau travail à l'hôpital lundi prochain. Je suis un peu stressée, mais contente. Pour le moment, je ne connais personne ici, alors je me suis inscrite à un club de randonnée pour me faire des amis.\n\nEst-ce que tu veux venir me voir en juillet ? Il y a un canapé-lit dans le salon. On pourrait aller à la plage, à une heure d'ici.\n\nAh, et j'ai un nouveau numéro de téléphone : 07 62 18 44 30.\n\nGros bisous,\nClara" },
    questions: [
      { q: "Le jour du déménagement…", o: ["il faisait très beau.", "le camion est arrivé en retard.", "Clara était toute seule."], a: 1, x: "« le camion est arrivé avec deux heures de retard »." },
      { q: "Le nouvel appartement de Clara…", o: ["est plus grand que l'ancien.", "a un ascenseur.", "a un balcon."], a: 2, x: "« il est très lumineux et il a un balcon »." },
      { q: "L'appartement est près de la gare.", o: ["Vrai", "Faux"], a: 0, x: "« Il se trouve à dix minutes à pied de la gare »." },
      { q: "Clara va travailler…", o: ["dans un hôpital.", "dans une gare.", "dans un club de randonnée."], a: 0, x: "« Je commence mon nouveau travail à l'hôpital lundi prochain »." },
      { q: "Clara s'est inscrite au club de randonnée pour…", o: ["faire du sport avec ses cousins.", "se faire des amis.", "aller à la plage."], a: 1, x: "« je ne connais personne ici, alors je me suis inscrite à un club de randonnée pour me faire des amis »." },
      { q: "Clara propose à Esin de…", o: ["l'aider à porter les cartons.", "lui téléphoner lundi.", "venir la voir en juillet."], a: 2, x: "« Est-ce que tu veux venir me voir en juillet ? »" }
    ] },

  { id: "a2-s18-ce3", level: "A2", sujet: 18, sec: "ce", ex: 3, pts: 6,
    title: "Rembourser un billet de train",
    consigne: "Vous avez acheté un billet de train, mais vos projets ont changé. Vous lisez ces conditions sur le site de la compagnie. Répondez aux questions.",
    help: { tr: "Bir tren bileti aldınız ama planlarınız değişti. Şirketin sitesinde bu koşulları okuyorsunuz. Soruları cevaplayın.", en: "You bought a train ticket, but your plans have changed. You read these conditions on the company's website. Answer the questions." },
    doc: { type: "notice", title: "Trains Régio – Échanges et remboursements",
      body: "Votre projet de voyage a changé ? Voici nos règles.\n\nBillets « Loisir » : l'échange et le remboursement sont gratuits jusqu'à 3 jours avant le départ. Ensuite, et jusqu'au départ, nous gardons 15 € par billet.\n\nBillets « Petit Prix » : ces billets ne sont ni échangeables ni remboursables.\n\nAbonnés « Travail » : vous avez oublié votre carte d'abonnement ? Vous devez acheter un billet. Il vous sera remboursé si vous montrez votre carte au guichet dans les 7 jours.\n\nComment faire ? Sur notre site ou sur notre application, rubrique « Mes voyages », ou au guichet de la gare. Attention : les billets achetés au guichet ne peuvent pas être remboursés sur internet.\n\nVotre train a du retard ? À partir de 30 minutes de retard, vous recevez un bon d'achat de 25 % du prix du billet. À partir de 2 heures, ce bon passe à 50 %. Faites votre demande en ligne dans les 60 jours.\n\nLe remboursement arrive sur votre compte bancaire en 5 à 10 jours." },
    questions: [
      { q: "Vous avez un billet « Loisir » pour le 20 mai. Vous l'annulez le 10 mai. Vous payez…", o: ["0 €.", "15 €.", "le prix du billet."], a: 0, x: "« le remboursement [est] gratuit jusqu'à 3 jours avant le départ »." },
      { q: "Les billets « Petit Prix »…", o: ["sont remboursés à 50 %.", "peuvent être échangés gratuitement.", "ne sont pas remboursables."], a: 2, x: "« ces billets ne sont ni échangeables ni remboursables »." },
      { q: "Un billet acheté au guichet peut être remboursé sur le site.", o: ["Vrai", "Faux"], a: 1, x: "« les billets achetés au guichet ne peuvent pas être remboursés sur internet »." },
      { q: "Un abonné a oublié sa carte. Pour être remboursé, il doit montrer sa carte…", o: ["au contrôleur, dans le train.", "au guichet, dans les 7 jours.", "sur l'application."], a: 1, x: "« si vous montrez votre carte au guichet dans les 7 jours »." },
      { q: "Votre train arrive avec 45 minutes de retard. Vous recevez un bon de…", o: ["25 % du prix du billet.", "50 % du prix du billet.", "15 €."], a: 0, x: "« À partir de 30 minutes de retard, vous recevez un bon d'achat de 25 % »." },
      { q: "L'argent remboursé arrive sur votre compte…", o: ["le jour même.", "en 5 à 10 jours.", "dans les 60 jours."], a: 1, x: "« Le remboursement arrive sur votre compte bancaire en 5 à 10 jours »." }
    ] },

  { id: "a2-s18-ce4", level: "A2", sujet: 18, sec: "ce", ex: 4, pts: 7,
    title: "Un week-end au salon du livre",
    consigne: "Vous lisez cet article dans un journal régional. Répondez aux questions.",
    help: { tr: "Bölgesel bir gazetede bu makaleyi okuyorsunuz. Soruları cevaplayın.", en: "You read this article in a regional newspaper. Answer the questions." },
    doc: { type: "article", title: "Quimper : record de visiteurs au salon du livre",
      body: "Le week-end dernier, le 12e salon du livre de Quimper a accueilli 15 000 visiteurs, 3 000 de plus que l'année dernière. Pendant deux jours, 120 auteurs ont rencontré leurs lecteurs sous un grand chapiteau, sur la place de la mairie.\n\nCette année, le thème était « Les voyages ». Beaucoup de visiteurs sont venus écouter Leïla Haddad, une écrivaine qui a traversé l'Asie à vélo. Elle a signé des livres pendant plus de trois heures !\n\nLes enfants n'ont pas été oubliés : un espace leur était réservé, avec des lectures de contes et des ateliers de dessin. « Mon fils n'aime pas lire, mais ici, il a choisi trois bandes dessinées tout seul ! », raconte Sophie, une maman.\n\nNouveauté de cette année : un marché de livres d'occasion, de 1 à 3 €. « C'est une bonne idée, parce que les livres neufs coûtent cher », explique un étudiant.\n\nLe seul problème : il n'y avait pas assez de places de parking. L'an prochain, les organisateurs vont proposer une navette gratuite depuis la gare. Rendez-vous en avril pour la 13e édition !" },
    questions: [
      { q: "Cette année, le salon a accueilli…", o: ["12 000 visiteurs.", "15 000 visiteurs.", "3 000 visiteurs."], a: 1, x: "« le 12e salon du livre de Quimper a accueilli 15 000 visiteurs »." },
      { q: "Le thème du salon était…", o: ["les voyages.", "la bande dessinée.", "les contes."], a: 0, x: "« Cette année, le thème était « Les voyages » »." },
      { q: "Leïla Haddad…", o: ["a fait des dessins avec les enfants.", "organise le salon.", "a traversé l'Asie à vélo."], a: 2, x: "« une écrivaine qui a traversé l'Asie à vélo »." },
      { q: "Au salon, le fils de Sophie a choisi des livres tout seul.", o: ["Vrai", "Faux"], a: 0, x: "« il a choisi trois bandes dessinées tout seul ! »" },
      { q: "Au marché de livres d'occasion, les livres coûtent…", o: ["de 1 à 3 €.", "plus de 10 €.", "le même prix que les livres neufs."], a: 0, x: "« un marché de livres d'occasion, de 1 à 3 € »." },
      { q: "L'année prochaine, pour venir au salon, il y aura…", o: ["un grand parking.", "des vélos gratuits.", "une navette depuis la gare."], a: 2, x: "« les organisateurs vont proposer une navette gratuite depuis la gare »." }
    ] },

  /* ===================== SUJET 19 ===================== */
  { id: "a2-s19-ce1", level: "A2", sujet: 19, sec: "ce", ex: 1, pts: 6,
    title: "Choisir un cours de yoga",
    consigne: "Plusieurs personnes veulent faire du yoga. Lisez ces publicités et répondez aux questions.",
    help: { tr: "Birkaç kişi yoga yapmak istiyor. Bu reklamları okuyun ve soruları cevaplayın.", en: "Several people want to do yoga. Read these ads and answer the questions." },
    doc: { type: "annonce", title: "Où faire du yoga ?",
      body: "A. Centre Harmonie – Yoga doux\nCours pour les femmes enceintes, le mardi à 10 h. Exercices de respiration pour bien préparer la naissance du bébé.\n\nB. Yoga au bureau\nUn professeur vient dans votre entreprise, pendant la pause du déjeuner. Séances de 45 minutes, sans tapis, en vêtements de travail. Tarifs pour les groupes.\n\nC. Zen à la maison – Yoga en ligne\nPlus de 200 vidéos pour pratiquer chez vous, quand vous voulez, de jour comme de nuit. 9,90 € par mois. Premier mois gratuit.\n\nD. Maison des seniors – Yoga sur chaise\nPour les personnes qui ne peuvent pas s'asseoir par terre ou qui marchent difficilement. Le jeudi à 15 h. 3 € la séance." },
    questions: [
      { q: "Antoine travaille la nuit et ses horaires changent chaque semaine. Il veut faire du yoga chez lui. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 2, x: "Annonce C : « pratiquer chez vous, quand vous voulez, de jour comme de nuit »." },
      { q: "Marie attend son premier bébé pour le mois de mars. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 0, x: "Annonce A : « Cours pour les femmes enceintes »." },
      { q: "Le directeur d'une petite entreprise veut proposer une activité de détente à ses employés, à midi. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 1, x: "Annonce B : « Un professeur vient dans votre entreprise, pendant la pause du déjeuner »." },
      { q: "M. Petit, 82 ans, ne peut plus s'asseoir par terre à cause de ses genoux. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 3, x: "Annonce D : « Yoga sur chaise », « Pour les personnes qui ne peuvent pas s'asseoir par terre »." },
      { q: "On peut essayer le yoga en ligne sans payer.", o: ["Vrai", "Faux"], a: 0, x: "Annonce C : « Premier mois gratuit »." }
    ] },

  { id: "a2-s19-ce2", level: "A2", sujet: 19, sec: "ce", ex: 2, pts: 6,
    title: "Une surprise pour Mélanie",
    consigne: "Vous recevez ce courriel d'un ami. Lisez-le et répondez aux questions.",
    help: { tr: "Bir arkadaşınızdan bu e-postayı alıyorsunuz. Okuyun ve soruları cevaplayın.", en: "You receive this e-mail from a friend. Read it and answer the questions." },
    doc: { type: "email", from: "Thomas", to: "Les amis de Mélanie", subject: "Les 40 ans de Mélanie – chut, c'est une surprise !",
      body: "Bonjour à tous,\n\nComme vous le savez, Mélanie va avoir 40 ans le 22 novembre. Avec son mari, Paul, nous avons décidé de lui préparer une surprise. Attention : elle ne doit rien savoir !\n\nVoici le programme. Le samedi 23 novembre, Paul va emmener Mélanie au cinéma l'après-midi. Pendant ce temps, nous allons préparer la salle au-dessus du restaurant Le Petit Port. Rendez-vous là-bas à 18 h 30, s'il vous plaît, pas plus tard : Mélanie et Paul arriveront à 19 h.\n\nPour le cadeau, nous avons pensé à un week-end dans un hôtel avec spa, parce qu'elle dit toujours qu'elle est fatiguée. Le cadeau coûte 300 €. Vous pouvez me donner votre participation en liquide ou par virement avant le 15 novembre.\n\nNous avons aussi besoin de photos de Mélanie, de son enfance jusqu'à aujourd'hui, pour faire un petit film. Envoyez-les à Paul (pas à Mélanie !).\n\nRépondez-moi avant dimanche pour me dire si vous venez.\n\nÀ bientôt,\nThomas" },
    questions: [
      { q: "Thomas écrit pour…", o: ["inviter ses amis à son anniversaire.", "organiser une fête surprise pour Mélanie.", "annoncer le mariage de Mélanie et Paul."], a: 1, x: "« nous avons décidé de lui préparer une surprise »." },
      { q: "Le samedi après-midi, Mélanie va…", o: ["au restaurant.", "au spa.", "au cinéma."], a: 2, x: "« Paul va emmener Mélanie au cinéma l'après-midi »." },
      { q: "Les invités doivent arriver au restaurant à…", o: ["18 h 30.", "19 h.", "la fin du film, avec Mélanie."], a: 0, x: "« Rendez-vous là-bas à 18 h 30, s'il vous plaît, pas plus tard »." },
      { q: "Ils ont choisi un week-end avec spa parce que Mélanie…", o: ["adore le cinéma.", "aime beaucoup voyager.", "dit toujours qu'elle est fatiguée."], a: 2, x: "« parce qu'elle dit toujours qu'elle est fatiguée »." },
      { q: "Il faut donner l'argent pour le cadeau…", o: ["à Paul.", "avant le 15 novembre.", "le jour de la fête."], a: 1, x: "« Vous pouvez me donner votre participation […] avant le 15 novembre »." },
      { q: "Les invités doivent envoyer des photos à Mélanie.", o: ["Vrai", "Faux"], a: 1, x: "« Envoyez-les à Paul (pas à Mélanie !) »." }
    ] },

  { id: "a2-s19-ce3", level: "A2", sujet: 19, sec: "ce", ex: 3, pts: 6,
    title: "Retirer un colis",
    consigne: "Vous avez commandé un article sur internet. Vous recevez ces instructions pour retirer votre colis. Lisez-les et répondez aux questions.",
    help: { tr: "İnternetten bir ürün sipariş ettiniz. Paketinizi almak için bu talimatları alıyorsunuz. Okuyun ve soruları cevaplayın.", en: "You ordered something online. You receive these instructions for collecting your parcel. Read them and answer the questions." },
    doc: { type: "notice", title: "BoxRelais – Comment retirer votre colis",
      body: "Votre colis est arrivé dans la consigne automatique BoxRelais de la gare routière. Voici comment le récupérer.\n\n1. Vous avez reçu un SMS avec un code à 6 chiffres. Gardez-le : sans ce code, vous ne pouvez pas ouvrir le casier.\n2. Sur l'écran, appuyez sur « Retirer un colis » et tapez votre code.\n3. Une porte s'ouvre. Prenez votre colis et fermez bien la porte.\n\nLa consigne est accessible tous les jours, 24 h sur 24, mais la gare routière est fermée de 1 h à 5 h du matin.\n\nVous avez 5 jours pour retirer votre colis. Après ce délai, il est renvoyé au vendeur et vous serez remboursé sous 15 jours.\n\nVous ne pouvez pas venir ? Envoyez le SMS avec le code à un ami : il peut retirer le colis pour vous. Aucune pièce d'identité n'est demandée.\n\nAttention : les colis de plus de 20 kg ne peuvent pas être livrés dans une consigne.\n\nUn problème ? L'écran ne marche pas ? Appelez le 09 70 12 34 56, du lundi au samedi, de 8 h à 20 h." },
    questions: [
      { q: "Pour ouvrir le casier, il faut…", o: ["une pièce d'identité.", "le code reçu par SMS.", "une carte bancaire."], a: 1, x: "« sans ce code, vous ne pouvez pas ouvrir le casier »." },
      { q: "On peut retirer son colis…", o: ["à 3 h du matin.", "seulement du lundi au samedi.", "un dimanche à 22 h."], a: 2, x: "« tous les jours, 24 h sur 24, mais la gare routière est fermée de 1 h à 5 h du matin »." },
      { q: "Si on ne retire pas son colis dans les 5 jours…", o: ["il est renvoyé au vendeur.", "il est livré à la maison.", "on doit payer une amende."], a: 0, x: "« Après ce délai, il est renvoyé au vendeur »." },
      { q: "Un ami peut retirer votre colis s'il a votre code.", o: ["Vrai", "Faux"], a: 0, x: "« Envoyez le SMS avec le code à un ami : il peut retirer le colis pour vous »." },
      { q: "Un colis de 25 kg…", o: ["peut être livré dans la consigne.", "ne peut pas être livré dans la consigne.", "doit être retiré en 15 jours."], a: 1, x: "« les colis de plus de 20 kg ne peuvent pas être livrés dans une consigne »." },
      { q: "En cas de problème, on peut téléphoner…", o: ["24 h sur 24.", "tous les jours, de 5 h à 1 h.", "du lundi au samedi, de 8 h à 20 h."], a: 2, x: "« Appelez le 09 70 12 34 56, du lundi au samedi, de 8 h à 20 h »." }
    ] },

  { id: "a2-s19-ce4", level: "A2", sujet: 19, sec: "ce", ex: 4, pts: 7,
    title: "Une ferme sur un toit",
    consigne: "Vous lisez cet article sur un site d'informations. Répondez aux questions.",
    help: { tr: "Bir haber sitesinde bu makaleyi okuyorsunuz. Soruları cevaplayın.", en: "You read this article on a news website. Answer the questions." },
    doc: { type: "article", title: "Lille : des poules et des légumes sur le toit d'un parking",
      body: "À Lille, sur le toit d'un ancien parking du centre-ville, il y a maintenant une ferme ! Elle a ouvert au printemps dernier, après un an de travaux. Sur 2 000 m², on trouve des légumes, des herbes aromatiques, des fraises, dix poules et quatre ruches.\n\nLe projet est né de l'idée de trois amis, Thomas, Inès et Bruno. « Nous habitions en ville et nous voulions manger des légumes frais, cultivés près de chez nous », explique Inès, ancienne professeure de biologie.\n\nLa ferme emploie six personnes qui cherchaient du travail depuis longtemps. Pendant deux ans, elles apprennent le métier de maraîcher.\n\nLes légumes ne voyagent pas : ils sont vendus sur place, le mercredi et le samedi matin, ou livrés à vélo dans les restaurants du quartier. Les œufs, eux, partent très vite : « À 10 h, il n'y en a plus ! », rit Bruno.\n\nLa ferme accueille aussi les écoles. Les enfants découvrent comment poussent les tomates et ils goûtent le miel des abeilles. Pour les adultes, des ateliers de jardinage sont proposés un dimanche par mois (10 €).\n\nProchaine étape : une deuxième ferme, sur le toit d'un hôpital." },
    questions: [
      { q: "La ferme se trouve…", o: ["sur le toit d'un parking.", "dans un parc.", "sur le toit d'un hôpital."], a: 0, x: "« sur le toit d'un ancien parking du centre-ville, il y a maintenant une ferme »." },
      { q: "Les trois amis ont créé la ferme pour…", o: ["manger des légumes frais, cultivés près de chez eux.", "vendre du miel aux écoles.", "ouvrir un restaurant."], a: 0, x: "« nous voulions manger des légumes frais, cultivés près de chez nous »." },
      { q: "Les six employés de la ferme…", o: ["sont d'anciens professeurs.", "apprennent le métier de maraîcher.", "vendent leurs légumes au supermarché."], a: 1, x: "« Pendant deux ans, elles apprennent le métier de maraîcher »." },
      { q: "Les légumes de la ferme sont vendus dans les supermarchés de la région.", o: ["Vrai", "Faux"], a: 1, x: "« Les légumes ne voyagent pas : ils sont vendus sur place […] ou livrés à vélo dans les restaurants du quartier »." },
      { q: "Le samedi à 11 h, il est difficile d'acheter…", o: ["des fraises.", "des tomates.", "des œufs."], a: 2, x: "« Les œufs, eux, partent très vite : « À 10 h, il n'y en a plus ! » »." },
      { q: "Les ateliers de jardinage pour adultes ont lieu…", o: ["un dimanche par mois.", "le mercredi matin.", "tous les samedis."], a: 0, x: "« des ateliers de jardinage sont proposés un dimanche par mois »." }
    ] },

  /* ===================== SUJET 20 ===================== */
  { id: "a2-s20-ce1", level: "A2", sujet: 20, sec: "ce", ex: 1, pts: 6,
    title: "Un gîte pour le week-end",
    consigne: "Vos amis veulent louer une maison pour un week-end d'hiver. Lisez ces annonces et répondez aux questions.",
    help: { tr: "Arkadaşlarınız bir kış hafta sonu için ev kiralamak istiyor. Bu ilanları okuyun ve soruları cevaplayın.", en: "Your friends want to rent a house for a winter weekend. Read these ads and answer the questions." },
    doc: { type: "annonce", title: "Gîtes et chalets – Spécial week-ends",
      body: "A. Gîte du Moulin (Jura)\nPour 12 personnes. Grande salle pour les fêtes et les repas de famille. Location le week-end, du vendredi 17 h au dimanche 18 h. 650 €.\n\nB. Chalet Les Myrtilles (Alpes)\nPour 4 personnes, à 200 m des pistes de ski. Location de skis au village. Animaux non acceptés. 480 € le week-end.\n\nC. Maison du Pêcheur (Bretagne)\nPour 6 personnes, au bord d'un lac. Vélos et barque à disposition. Jardin fermé : votre chien est le bienvenu.\n\nD. Appartement Cœur de Ville (Colmar)\nPour 2 personnes, en plein centre, à 5 minutes à pied de la gare. Idéal pour visiter les marchés de Noël sans voiture." },
    questions: [
      { q: "Léa et Hugo adorent le ski. Ils partent avec un couple d'amis. Quelle annonce leur correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 1, x: "Annonce B : « Pour 4 personnes, à 200 m des pistes de ski »." },
      { q: "Naïma et son mari n'ont pas de voiture. En décembre, ils veulent voir des marchés de Noël. Quelle annonce leur correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 3, x: "Annonce D : « Pour 2 personnes », « à 5 minutes à pied de la gare », « marchés de Noël sans voiture »." },
      { q: "La famille Morel fête les 80 ans du grand-père. Ils seront 12 à table. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 0, x: "Annonce A : « Pour 12 personnes. Grande salle pour les fêtes et les repas de famille »." },
      { q: "Kemal part avec sa femme, leurs deux enfants et leur chien. Ils aiment la nature et l'eau. Quelle annonce leur correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 2, x: "Annonce C : « au bord d'un lac », « votre chien est le bienvenu »." },
      { q: "On peut venir au chalet Les Myrtilles avec son chat.", o: ["Vrai", "Faux"], a: 1, x: "Annonce B : « Animaux non acceptés »." }
    ] },

  { id: "a2-s20-ce2", level: "A2", sujet: 20, sec: "ce", ex: 2, pts: 6,
    title: "Une amie arrive d'Istanbul",
    consigne: "Vous habitez à Paris. Vous recevez ce courriel d'une amie. Lisez-le et répondez aux questions.",
    help: { tr: "Paris'te yaşıyorsunuz. Bir arkadaşınızdan bu e-postayı alıyorsunuz. Okuyun ve soruları cevaplayın.", en: "You live in Paris. You receive this e-mail from a friend. Read it and answer the questions." },
    doc: { type: "email", from: "Selin", to: "Esin", subject: "J'arrive le 8 avril !",
      body: "Chère Esin,\n\nGrande nouvelle : j'ai enfin trouvé un billet pas cher et je viens te voir à Paris ! J'arrive le samedi 8 avril à l'aéroport d'Orly à 14 h 15. Tu n'as pas besoin de venir me chercher : je prendrai le tram puis le métro. Je serai chez toi vers 16 h.\n\nJe reste une semaine. Je sais que tu travailles du lundi au vendredi, alors pendant la journée, je visiterai la ville toute seule. J'ai très envie de voir le musée d'Orsay et de me promener au bord de la Seine. Le soir, on pourrait dîner ensemble et tu me montreras ton quartier.\n\nPour le dimanche, j'ai une idée : on pourrait aller voir les jardins de Monet à Giverny ? On m'a dit que c'est magnifique au printemps.\n\nQu'est-ce que je peux t'apporter de Turquie ? Du thé, des loukoums, des épices ? Ta mère m'a déjà donné un paquet pour toi.\n\nUne dernière question : est-ce qu'il fait froid à Paris en avril ? Je ne sais pas quels vêtements prendre.\n\nJe t'embrasse très fort,\nSelin" },
    questions: [
      { q: "Selin arrive à Paris…", o: ["en train.", "en avion.", "en bus."], a: 1, x: "« J'arrive le samedi 8 avril à l'aéroport d'Orly »." },
      { q: "Selin sera chez Esin vers…", o: ["14 h 15.", "15 h.", "16 h."], a: 2, x: "« Je serai chez toi vers 16 h »." },
      { q: "Esin doit aller chercher Selin à l'aéroport.", o: ["Vrai", "Faux"], a: 1, x: "« Tu n'as pas besoin de venir me chercher : je prendrai le tram puis le métro »." },
      { q: "En semaine, pendant la journée, Selin va…", o: ["visiter Paris seule.", "travailler avec Esin.", "rester chez Esin."], a: 0, x: "« pendant la journée, je visiterai la ville toute seule »." },
      { q: "Pour le dimanche, Selin propose d'aller…", o: ["au musée d'Orsay.", "à Giverny.", "au bord de la Seine."], a: 1, x: "« on pourrait aller voir les jardins de Monet à Giverny ? »" },
      { q: "Selin demande à Esin…", o: ["l'adresse de sa mère.", "de lui acheter des loukoums.", "quel temps il fait à Paris en avril."], a: 2, x: "« est-ce qu'il fait froid à Paris en avril ? »" }
    ] },

  { id: "a2-s20-ce3", level: "A2", sujet: 20, sec: "ce", ex: 3, pts: 6,
    title: "Chez le kinésithérapeute",
    consigne: "Votre médecin vous a prescrit des séances de kinésithérapie. Vous lisez ce document dans la salle d'attente du cabinet. Répondez aux questions.",
    help: { tr: "Doktorunuz size fizyoterapi seansları yazdı. Muayenehanenin bekleme salonunda bu belgeyi okuyorsunuz. Soruları cevaplayın.", en: "Your doctor has prescribed physiotherapy sessions. You read this document in the practice's waiting room. Answer the questions." },
    doc: { type: "notice", title: "Cabinet de kinésithérapie des Tilleuls – Informations aux patients",
      body: "Rendez-vous : prenez rendez-vous par téléphone ou sur notre site internet. Pour votre première séance, apportez votre ordonnance, votre carte Vitale et, si vous en avez, vos radios.\n\nAnnulation : si vous ne pouvez pas venir, prévenez-nous au moins 24 heures avant. Une séance qui n'est pas annulée à temps devra être payée.\n\nRetards : les séances durent 30 minutes. Si vous arrivez en retard, la séance se terminera quand même à l'heure prévue.\n\nTenue : apportez une grande serviette et une tenue de sport confortable (short ou jogging, tee-shirt). Des vestiaires sont à votre disposition.\n\nSalle de rééducation : elle est équipée de vélos et de tapis de course. Vous pouvez l'utiliser seul(e) seulement si votre kinésithérapeute est d'accord.\n\nVisites à domicile : elles sont possibles pour les personnes qui ne peuvent pas se déplacer, sur ordonnance du médecin.\n\nParking : deux places sont réservées aux patients devant le cabinet. Le cabinet est accessible en fauteuil roulant." },
    questions: [
      { q: "Pour la première séance, il faut apporter…", o: ["une photo d'identité.", "l'ordonnance et la carte Vitale.", "un certificat de travail."], a: 1, x: "« Pour votre première séance, apportez votre ordonnance, votre carte Vitale »." },
      { q: "Un patient annule sa séance 2 heures avant. Il…", o: ["doit payer la séance.", "ne paie rien.", "peut venir le lendemain sans rendez-vous."], a: 0, x: "Il faut prévenir « au moins 24 heures avant. Une séance qui n'est pas annulée à temps devra être payée »." },
      { q: "Vous avez rendez-vous à 10 h. Vous arrivez à 10 h 10. Votre séance finit à…", o: ["10 h 30.", "10 h 40.", "11 h."], a: 0, x: "« les séances durent 30 minutes […] la séance se terminera quand même à l'heure prévue » : 10 h 30." },
      { q: "Il faut apporter une serviette.", o: ["Vrai", "Faux"], a: 0, x: "« apportez une grande serviette et une tenue de sport confortable »." },
      { q: "On peut utiliser seul la salle de rééducation…", o: ["tous les jours.", "après la première séance.", "si le kinésithérapeute est d'accord."], a: 2, x: "« Vous pouvez l'utiliser seul(e) seulement si votre kinésithérapeute est d'accord »." },
      { q: "Le kinésithérapeute peut venir à la maison…", o: ["pour tous les patients.", "pour les personnes qui ne peuvent pas se déplacer.", "seulement le week-end."], a: 1, x: "« Visites à domicile : elles sont possibles pour les personnes qui ne peuvent pas se déplacer »." }
    ] },

  { id: "a2-s20-ce4", level: "A2", sujet: 20, sec: "ce", ex: 4, pts: 7,
    title: "Une nuit au musée",
    consigne: "Vous lisez cet article dans un journal gratuit. Répondez aux questions.",
    help: { tr: "Ücretsiz bir gazetede bu makaleyi okuyorsunuz. Soruları cevaplayın.", en: "You read this article in a free newspaper. Answer the questions." },
    doc: { type: "article", title: "Rouen : le musée ouvert toute la nuit, et gratuit !",
      body: "Samedi dernier, pour la Nuit européenne des musées, le musée des Beaux-Arts de Rouen est resté ouvert jusqu'à minuit. L'entrée était gratuite pour tout le monde, et plus de 6 000 personnes sont venues, deux fois plus qu'un dimanche normal.\n\nCette année, le musée avait préparé un programme spécial. Dans les salles de peinture, des musiciens jouaient du violon. Des élèves d'un collège de la ville présentaient leurs tableaux préférés aux visiteurs. « J'étais un peu timide au début, mais les gens étaient très gentils avec moi », raconte Yanis, 13 ans.\n\nLa nouveauté qui a eu le plus de succès : la visite avec une lampe de poche. Dans le noir, les visiteurs découvraient les sculptures d'une autre façon. Il fallait s'inscrire, et les 200 places sont parties en une heure.\n\nBeaucoup de visiteurs venaient pour la première fois. « D'habitude, je trouve que les musées, c'est ennuyeux et cher. Ce soir, je me suis bien amusée », dit Amandine, 29 ans.\n\nLe directeur est content : « Nous voulons accueillir un nouveau public. » Bonne nouvelle : le musée sera maintenant gratuit le premier vendredi soir de chaque mois." },
    questions: [
      { q: "Samedi dernier, le musée a fermé…", o: ["à 18 h.", "le dimanche matin.", "à minuit."], a: 2, x: "« le musée des Beaux-Arts de Rouen est resté ouvert jusqu'à minuit »." },
      { q: "Ce soir-là, il y a eu…", o: ["deux fois plus de visiteurs qu'un dimanche normal.", "seulement 200 visiteurs.", "moins de visiteurs que d'habitude."], a: 0, x: "« plus de 6 000 personnes sont venues, deux fois plus qu'un dimanche normal »." },
      { q: "Yanis…", o: ["jouait du violon.", "a présenté des tableaux aux visiteurs.", "était le guide de la visite dans le noir."], a: 1, x: "« Des élèves d'un collège […] présentaient leurs tableaux préférés aux visiteurs » ; Yanis a 13 ans." },
      { q: "Pour la visite avec une lampe de poche…", o: ["il fallait s'inscrire.", "il fallait payer.", "il restait beaucoup de places."], a: 0, x: "« Il fallait s'inscrire, et les 200 places sont parties en une heure »." },
      { q: "D'habitude, Amandine trouve les musées ennuyeux.", o: ["Vrai", "Faux"], a: 0, x: "« D'habitude, je trouve que les musées, c'est ennuyeux et cher »." },
      { q: "Maintenant, le musée sera gratuit…", o: ["tous les samedis.", "tous les dimanches.", "le premier vendredi soir du mois."], a: 2, x: "« le musée sera maintenant gratuit le premier vendredi soir de chaque mois »." }
    ] }
);
