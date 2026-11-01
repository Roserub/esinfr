/* DELF A2 — reading (compréhension des écrits), papers 1–5 */
(window.DELF = window.DELF || []).push(

  /* ===================== SUJET 1 ===================== */
  { id: "a2-s01-ce1", level: "A2", sujet: 1, sec: "ce", ex: 1, pts: 6,
    title: "Locations de vacances",
    consigne: "Vos amis cherchent une location pour les vacances d'été. Lisez ces annonces et répondez aux questions.",
    help: { tr: "Arkadaşlarınız yaz tatili için kiralık bir yer arıyor. İlanları okuyun ve soruları cevaplayın.", en: "Your friends are looking for a summer holiday rental. Read the ads and answer the questions." },
    doc: { type: "annonce", title: "Locations de vacances – été",
      body: "A. Bretagne, près de Quimper\nMaison de pêcheur à 200 mètres de la plage, 2 chambres, petit jardin. Animaux acceptés. 650 € la semaine. Libre en juillet.\n\nB. Alpes, Annecy\nStudio au 3e étage avec ascenseur, vue sur le lac, pour 2 personnes. Vélos à disposition pour faire le tour du lac. 420 € la semaine. Pas d'animaux.\n\nC. Provence, Avignon\nGrand appartement en centre-ville, 4 chambres, idéal pour les familles nombreuses. Climatisation. 900 € la semaine. À 5 minutes du festival de théâtre.\n\nD. Pays basque, Biarritz\nChambre chez l'habitant, petit-déjeuner compris. Le propriétaire est moniteur et propose des cours de surf. 60 € la nuit, minimum 3 nuits." },
    questions: [
      { q: "Marc et Léa partent avec leur chien et veulent être tout près de la mer. Quelle annonce leur correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 0, x: "Annonce A : « à 200 mètres de la plage » et « Animaux acceptés »." },
      { q: "Sophie part avec son mari et leurs quatre enfants. Ils adorent le théâtre. Quelle annonce leur correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 2, x: "Annonce C : « 4 chambres, idéal pour les familles nombreuses » et « À 5 minutes du festival de théâtre »." },
      { q: "Karim voyage seul pour un long week-end et veut apprendre un sport nautique. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 3, x: "Annonce D : « propose des cours de surf », « minimum 3 nuits »." },
      { q: "Un couple sans voiture veut faire du vélo au bord d'un lac. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 1, x: "Annonce B : « vue sur le lac » et « Vélos à disposition »." },
      { q: "Dans l'annonce B, on peut venir avec un chat.", o: ["Vrai", "Faux"], a: 1, x: "L'annonce B dit : « Pas d'animaux »." }
    ] },

  { id: "a2-s01-ce2", level: "A2", sujet: 1, sec: "ce", ex: 2, pts: 6,
    title: "Nouvelles d'une amie",
    consigne: "Vous recevez ce courriel d'une amie. Lisez-le et répondez aux questions.",
    help: { tr: "Bir arkadaşınızdan bu e-postayı alıyorsunuz. Okuyun ve soruları cevaplayın.", en: "You receive this e-mail from a friend. Read it and answer the questions." },
    doc: { type: "email", from: "Camille", to: "Esin", subject: "Des nouvelles de Lyon !",
      body: "Salut Esin,\n\nÇa fait longtemps ! Comme tu sais, j'ai quitté Paris en septembre pour m'installer à Lyon. Au début, c'était difficile : je ne connaissais personne et il pleuvait tout le temps. Mais maintenant, je suis très contente. Mon appartement est plus petit que l'ancien, mais il est plus lumineux et il a un balcon.\n\nJe travaille dans une librairie près de la place Bellecour. Mes collègues sont très sympas et le samedi midi, on va souvent manger ensemble au marché. Je vais au travail à vélo : c'est plus rapide que le métro !\n\nPendant les vacances de février, tu pourras venir me voir ? Il y a une chambre pour toi. On visitera la vieille ville et je te ferai goûter les spécialités lyonnaises.\n\nÉcris-moi vite !\nBises,\nCamille" },
    questions: [
      { q: "Camille habite à Lyon depuis…", o: ["septembre.", "février.", "deux ans."], a: 0, x: "« j'ai quitté Paris en septembre pour m'installer à Lyon »." },
      { q: "Au début, à Lyon, Camille…", o: ["était très heureuse.", "se sentait seule.", "avait beaucoup d'amis."], a: 1, x: "« Au début, c'était difficile : je ne connaissais personne »." },
      { q: "Son nouvel appartement est…", o: ["plus grand que l'ancien.", "plus lumineux que l'ancien.", "sans balcon."], a: 1, x: "« il est plus lumineux et il a un balcon »." },
      { q: "Camille va au travail…", o: ["en métro.", "à pied.", "à vélo."], a: 2, x: "« Je vais au travail à vélo »." },
      { q: "Camille travaille au marché.", o: ["Vrai", "Faux"], a: 1, x: "« Je travaille dans une librairie ». Elle mange au marché le samedi." },
      { q: "Camille propose à Esin de…", o: ["venir chez elle en février.", "partir en vacances à Paris.", "chercher un travail à Lyon."], a: 0, x: "« Pendant les vacances de février, tu pourras venir me voir ? »" }
    ] },

  { id: "a2-s01-ce3", level: "A2", sujet: 1, sec: "ce", ex: 3, pts: 6,
    title: "Règlement de la médiathèque",
    consigne: "Vous voulez vous inscrire à la médiathèque de votre ville. Vous lisez ce règlement. Répondez aux questions.",
    help: { tr: "Şehrinizin kütüphanesine üye olmak istiyorsunuz. Bu yönetmeliği okuyorsunuz. Soruları cevaplayın.", en: "You want to join your town's media library. You read these rules. Answer the questions." },
    doc: { type: "notice", title: "Médiathèque Jules-Verne – Règlement des prêts",
      body: "Inscription\nL'inscription est gratuite pour les habitants de la ville et pour les moins de 18 ans. Les autres personnes paient 15 € par an. Apportez une pièce d'identité et un justificatif de domicile.\n\nPrêts\nAvec votre carte, vous pouvez emprunter 10 documents en même temps : livres, magazines, CD et DVD. Les livres et les CD sont prêtés pour 3 semaines, les DVD pour 1 semaine seulement.\n\nProlongation\nVous pouvez prolonger vos prêts une fois, sur notre site internet ou à l'accueil, sauf si un autre lecteur a réservé le document.\n\nRetards\nEn cas de retard, vous recevrez un courriel. Après 2 semaines de retard, votre carte sera bloquée et vous ne pourrez plus emprunter.\n\nAttention : les magazines du mois se lisent uniquement sur place." },
    questions: [
      { q: "Une adulte qui habite dans la ville paie son inscription…", o: ["0 €.", "10 €.", "15 €."], a: 0, x: "« L'inscription est gratuite pour les habitants de la ville »." },
      { q: "Pour s'inscrire, il faut apporter…", o: ["une photo.", "un justificatif de domicile.", "une carte bancaire."], a: 1, x: "« Apportez une pièce d'identité et un justificatif de domicile »." },
      { q: "On peut garder un DVD…", o: ["1 semaine.", "2 semaines.", "3 semaines."], a: 0, x: "« les DVD pour 1 semaine seulement »." },
      { q: "On peut toujours prolonger un livre.", o: ["Vrai", "Faux"], a: 1, x: "On peut prolonger « sauf si un autre lecteur a réservé le document »." },
      { q: "Après 2 semaines de retard…", o: ["on paie une amende.", "on reçoit un premier courriel.", "on ne peut plus emprunter."], a: 2, x: "« votre carte sera bloquée et vous ne pourrez plus emprunter »." },
      { q: "On peut emprunter le magazine du mois.", o: ["Vrai", "Faux"], a: 1, x: "« les magazines du mois se lisent uniquement sur place »." }
    ] },

  { id: "a2-s01-ce4", level: "A2", sujet: 1, sec: "ce", ex: 4, pts: 7,
    title: "Une journée sans voiture",
    consigne: "Vous lisez cet article dans le journal de votre ville. Répondez aux questions.",
    help: { tr: "Şehrinizin gazetesinde bu makaleyi okuyorsunuz. Soruları cevaplayın.", en: "You read this article in your town's newspaper. Answer the questions." },
    doc: { type: "article", title: "Villeneuve : une première journée sans voiture",
      body: "Dimanche dernier, la ville de Villeneuve a organisé sa première journée sans voiture. De 9 h à 19 h, les voitures ne pouvaient pas entrer dans le centre-ville. Seuls les bus, les vélos et les piétons pouvaient circuler.\n\nLes habitants ont été nombreux à profiter de ce dimanche calme. Dans la rue principale, les enfants ont joué au ballon et des musiciens ont donné des petits concerts. Les cafés ont installé des tables au milieu de la rue. « D'habitude, il y a beaucoup de bruit. Aujourd'hui, on entend les oiseaux ! », explique Martine, 67 ans.\n\nMais tout le monde n'était pas content. Certains automobilistes ont dû laisser leur voiture loin de chez eux. « J'ai marché 20 minutes avec mes courses », raconte Paul, un habitant du centre.\n\nLe maire est satisfait : à partir de l'année prochaine, il veut organiser une journée sans voiture chaque premier dimanche du mois. Les bus seront gratuits ces jours-là." },
    questions: [
      { q: "Pendant cette journée, on pouvait circuler dans le centre…", o: ["en voiture.", "en bus.", "en moto."], a: 1, x: "« Seuls les bus, les vélos et les piétons pouvaient circuler »." },
      { q: "Dans la rue principale…", o: ["il y a eu un marché.", "des enfants ont joué au ballon.", "il y a eu une course à vélo."], a: 1, x: "« les enfants ont joué au ballon »." },
      { q: "Martine a surtout aimé…", o: ["le calme.", "les magasins ouverts.", "les bus gratuits."], a: 0, x: "« D'habitude, il y a beaucoup de bruit. Aujourd'hui, on entend les oiseaux ! »" },
      { q: "Tous les habitants étaient contents.", o: ["Vrai", "Faux"], a: 1, x: "« Mais tout le monde n'était pas content »." },
      { q: "Paul n'était pas content parce qu'il…", o: ["a perdu sa voiture.", "a marché longtemps avec ses courses.", "n'a pas trouvé de bus."], a: 1, x: "« J'ai marché 20 minutes avec mes courses »." },
      { q: "L'année prochaine, la journée sans voiture aura lieu…", o: ["une fois par an.", "chaque dimanche.", "une fois par mois."], a: 2, x: "« chaque premier dimanche du mois »." }
    ] },

  /* ===================== SUJET 2 ===================== */
  { id: "a2-s02-ce1", level: "A2", sujet: 2, sec: "ce", ex: 1, pts: 6,
    title: "Clubs de sport",
    consigne: "Vos voisins cherchent une activité sportive. Lisez ces annonces et répondez aux questions.",
    help: { tr: "Komşularınız bir spor aktivitesi arıyor. İlanları okuyun ve soruları cevaplayın.", en: "Your neighbours are looking for a sports activity. Read the ads and answer the questions." },
    doc: { type: "annonce", title: "Faites du sport cette année !",
      body: "A. Club de handball Les Aigles\nÉquipes enfants (8–12 ans) le mercredi après-midi, équipes adultes le mardi et le jeudi à 20 h. Premier entraînement gratuit. 120 € l'année.\n\nB. Piscine municipale\nCours de natation pour adultes débutants le samedi matin. Aquagym pour les seniors le lundi et le mercredi à 10 h. 8 € la séance ou 70 € les 10 séances.\n\nC. Salle d'escalade Vertical\nOuverte tous les jours de 12 h à 23 h. Cours pour débutants le vendredi soir. Location de chaussures sur place. À partir de 14 ans.\n\nD. Association Rando Plus\nRandonnées en forêt chaque dimanche, de 15 à 20 km. Bonne forme physique nécessaire. Cotisation : 30 € par an." },
    questions: [
      { q: "Nadia aime la nature et veut marcher le week-end. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 3, x: "Annonce D : « Randonnées en forêt chaque dimanche »." },
      { q: "Thomas a 10 ans et veut faire un sport d'équipe. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 0, x: "Annonce A : handball, « Équipes enfants (8–12 ans) »." },
      { q: "Julien finit son travail à 21 h et veut grimper. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 2, x: "Annonce C : escalade, « Ouverte tous les jours de 12 h à 23 h »." },
      { q: "Mme Robert a 72 ans et veut faire du sport dans l'eau le matin, en semaine. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 1, x: "Annonce B : « Aquagym pour les seniors le lundi et le mercredi à 10 h »." },
      { q: "Au club Les Aigles, on peut essayer le handball gratuitement.", o: ["Vrai", "Faux"], a: 0, x: "« Premier entraînement gratuit »." }
    ] },

  { id: "a2-s02-ce2", level: "A2", sujet: 2, sec: "ce", ex: 2, pts: 6,
    title: "Confirmation de l'hôtel",
    consigne: "Vous avez réservé une chambre d'hôtel. Vous recevez ce courriel. Lisez-le et répondez aux questions.",
    help: { tr: "Bir otel odası rezerve ettiniz. Bu e-postayı alıyorsunuz. Okuyun ve soruları cevaplayın.", en: "You booked a hotel room. You receive this e-mail. Read it and answer the questions." },
    doc: { type: "email", from: "Hôtel du Port", to: "Mme Aylin Demir", subject: "Confirmation de votre réservation n° 4521",
      body: "Madame Demir,\n\nNous vous remercions pour votre réservation à l'Hôtel du Port, à La Rochelle. Voici le détail de votre séjour :\n– arrivée : vendredi 14 mai, à partir de 15 h ;\n– départ : dimanche 16 mai, avant 11 h ;\n– une chambre double avec vue sur la mer ;\n– petit-déjeuner compris, servi de 7 h à 10 h.\n\nLe prix total est de 236 €. Vous avez déjà payé 50 € ; vous paierez le reste à votre arrivée.\n\nL'hôtel n'a pas de parking, mais vous pouvez garer votre voiture au parking Saint-Jean, à 300 mètres. Avec votre réservation, vous avez une réduction de 20 % sur ce parking.\n\nSi vous voulez annuler, merci de nous prévenir au moins 48 heures avant votre arrivée. Sinon, les 50 € ne seront pas remboursés.\n\nÀ bientôt à La Rochelle !\nL'équipe de l'Hôtel du Port" },
    questions: [
      { q: "Mme Demir va rester à l'hôtel…", o: ["une nuit.", "deux nuits.", "trois nuits."], a: 1, x: "Arrivée « vendredi 14 mai », départ « dimanche 16 mai » : deux nuits." },
      { q: "Elle peut arriver à l'hôtel…", o: ["dès 11 h.", "à partir de 15 h.", "seulement le soir."], a: 1, x: "« arrivée : vendredi 14 mai, à partir de 15 h »." },
      { q: "Le petit-déjeuner n'est pas compris dans le prix.", o: ["Vrai", "Faux"], a: 1, x: "« petit-déjeuner compris »." },
      { q: "Combien doit-elle payer à son arrivée ?", o: ["50 €", "186 €", "236 €"], a: 1, x: "« Le prix total est de 236 €. Vous avez déjà payé 50 € » : 236 – 50 = 186 €." },
      { q: "Pour sa voiture, Mme Demir…", o: ["peut utiliser le parking de l'hôtel.", "paie moins cher au parking Saint-Jean.", "doit la laisser à la gare."], a: 1, x: "« vous avez une réduction de 20 % sur ce parking »." },
      { q: "Si elle annule la veille de son arrivée…", o: ["elle perd 50 €.", "elle ne paie rien.", "elle paie 236 €."], a: 0, x: "Il faut prévenir 48 heures avant. « Sinon, les 50 € ne seront pas remboursés »." }
    ] },

  { id: "a2-s02-ce3", level: "A2", sujet: 2, sec: "ce", ex: 3, pts: 6,
    title: "Règles de la résidence",
    consigne: "Vous venez d'emménager. Vous lisez ce document dans le hall de votre immeuble. Répondez aux questions.",
    help: { tr: "Yeni taşındınız. Bu belgeyi apartmanınızın girişinde okuyorsunuz. Soruları cevaplayın.", en: "You have just moved in. You read this notice in the entrance hall of your building. Answer the questions." },
    doc: { type: "notice", title: "Résidence Les Tilleuls – Règles de vie",
      body: "Bienvenue dans la résidence ! Pour bien vivre ensemble, merci de respecter ces règles.\n\nBruit : après 22 h, parlez doucement dans les escaliers et baissez la musique. Les travaux (perceuse, marteau) sont autorisés du lundi au samedi, de 9 h à 19 h. Ils sont interdits le dimanche.\n\nPoubelles : elles se trouvent dans le local du rez-de-chaussée. Les poubelles jaunes sont pour le papier et le plastique, les vertes pour le verre. Les gros objets (meubles, frigo) ne doivent pas rester dans le local : appelez la mairie, qui viendra les chercher gratuitement.\n\nVélos et poussettes : rangez-les dans la cave, pas dans le hall.\n\nAnimaux : les chiens doivent être tenus en laisse dans le jardin.\n\nUn problème (fuite d'eau, ascenseur en panne) ? Contactez le gardien, M. Lopez, au 06 12 34 56 78, du lundi au vendredi. Le week-end, appelez le numéro d'urgence affiché dans le hall." },
    questions: [
      { q: "On peut faire des travaux…", o: ["le dimanche matin.", "le samedi à 10 h.", "le mardi à 21 h."], a: 1, x: "« du lundi au samedi, de 9 h à 19 h »." },
      { q: "On jette les bouteilles en verre dans…", o: ["la poubelle jaune.", "la poubelle verte.", "la cave."], a: 1, x: "« les vertes pour le verre »." },
      { q: "Pour se débarrasser d'un vieux canapé, il faut…", o: ["le laisser dans le local.", "appeler la mairie.", "le mettre dans le jardin."], a: 1, x: "« Les gros objets (meubles, frigo) […] appelez la mairie »." },
      { q: "On peut laisser son vélo dans le hall.", o: ["Vrai", "Faux"], a: 1, x: "« rangez-les dans la cave, pas dans le hall »." },
      { q: "Le samedi, si l'ascenseur est en panne, on…", o: ["appelle M. Lopez.", "appelle le numéro d'urgence du hall.", "attend le lundi."], a: 1, x: "« Le week-end, appelez le numéro d'urgence affiché dans le hall »." }
    ] },

  { id: "a2-s02-ce4", level: "A2", sujet: 2, sec: "ce", ex: 4, pts: 7,
    title: "Les Français et le sommeil",
    consigne: "Vous lisez cet article dans un magazine santé. Répondez aux questions.",
    help: { tr: "Bir sağlık dergisinde bu makaleyi okuyorsunuz. Soruları cevaplayın.", en: "You read this article in a health magazine. Answer the questions." },
    doc: { type: "article", title: "Les Français dorment de moins en moins",
      body: "Selon une étude publiée cette semaine, les Français dorment en moyenne 6 h 40 par nuit. Il y a cinquante ans, ils dormaient presque une heure et demie de plus. Pourtant, les médecins conseillent aux adultes de dormir entre 7 et 9 heures.\n\nPourquoi dort-on moins ? Pour les chercheurs, la première raison est l'utilisation des écrans le soir. Un tiers des personnes interrogées regardent leur téléphone dans leur lit pendant plus de 30 minutes. La lumière des écrans empêche le cerveau de se préparer au sommeil. Le stress au travail et les longs trajets sont aussi des causes importantes.\n\nLes jeunes de 18 à 25 ans sont les plus touchés : ils se couchent plus tard que leurs parents, mais ils se lèvent à la même heure pour aller en cours ou au travail.\n\nLes médecins donnent quelques conseils simples : se coucher et se lever à heure fixe, éviter le café après 16 h et laisser le téléphone dans une autre pièce. Une courte sieste de 20 minutes l'après-midi est aussi une bonne idée." },
    questions: [
      { q: "Aujourd'hui, les Français dorment…", o: ["plus qu'avant.", "moins qu'avant.", "autant qu'avant."], a: 1, x: "« Il y a cinquante ans, ils dormaient presque une heure et demie de plus »." },
      { q: "Selon les médecins, un adulte doit dormir…", o: ["moins de 7 heures.", "entre 7 et 9 heures.", "plus de 9 heures."], a: 1, x: "« les médecins conseillent aux adultes de dormir entre 7 et 9 heures »." },
      { q: "Selon les chercheurs, la raison principale est…", o: ["le stress.", "les écrans.", "les transports."], a: 1, x: "« la première raison est l'utilisation des écrans le soir »." },
      { q: "Les jeunes se lèvent plus tard que leurs parents.", o: ["Vrai", "Faux"], a: 1, x: "« ils se lèvent à la même heure »." },
      { q: "Un des conseils des médecins est de…", o: ["boire un café le soir.", "garder le téléphone près du lit.", "se coucher toujours à la même heure."], a: 2, x: "« se coucher et se lever à heure fixe »." },
      { q: "La sieste conseillée dure…", o: ["20 minutes.", "1 heure.", "2 heures."], a: 0, x: "« Une courte sieste de 20 minutes »." }
    ] },

  /* ===================== SUJET 3 ===================== */
  { id: "a2-s03-ce1", level: "A2", sujet: 3, sec: "ce", ex: 1, pts: 6,
    title: "Cours du soir",
    consigne: "Vos collègues veulent suivre un cours du soir. Lisez ces annonces et répondez aux questions.",
    help: { tr: "İş arkadaşlarınız bir akşam kursuna katılmak istiyor. İlanları okuyun ve soruları cevaplayın.", en: "Your colleagues want to take an evening class. Read the ads and answer the questions." },
    doc: { type: "annonce", title: "Maison des associations – Cours du soir",
      body: "A. Atelier cuisine du monde\nChaque mardi de 19 h à 21 h 30. Cette année : cuisine marocaine, japonaise et mexicaine. À la fin, on mange ensemble ce qu'on a préparé ! 25 € le cours.\n\nB. Photo pour débutants\nLe jeudi de 18 h 30 à 20 h. Apprenez à utiliser votre appareil photo ou votre téléphone. Sorties photo en ville le samedi. 180 € le trimestre.\n\nC. Conversation anglaise\nPetits groupes de 6 personnes, le lundi ou le mercredi à 19 h. Professeur venu de Londres. Test de niveau gratuit avant l'inscription.\n\nD. Couture facile\nLe vendredi de 18 h à 20 h. Apprenez à réparer vos vêtements et à fabriquer un sac. Les machines à coudre sont prêtées. 8 places seulement." },
    questions: [
      { q: "Hugo doit parler une langue étrangère avec des clients. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 2, x: "Annonce C : « Conversation anglaise »." },
      { q: "Inès veut apprendre à préparer des plats d'autres pays. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 0, x: "Annonce A : « cuisine marocaine, japonaise et mexicaine »." },
      { q: "Lucas veut réparer ses pantalons, mais il n'a pas de machine. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 3, x: "Annonce D : « Apprenez à réparer vos vêtements » et « Les machines à coudre sont prêtées »." },
      { q: "Emma veut faire de belles photos de vacances avec son portable. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 1, x: "Annonce B : « Apprenez à utiliser votre appareil photo ou votre téléphone »." },
      { q: "Pour le cours d'anglais, le test de niveau est payant.", o: ["Vrai", "Faux"], a: 1, x: "« Test de niveau gratuit avant l'inscription »." }
    ] },

  { id: "a2-s03-ce2", level: "A2", sujet: 3, sec: "ce", ex: 2, pts: 6,
    title: "Réponse à une réclamation",
    consigne: "Vous avez écrit à un magasin en ligne pour vous plaindre. Vous recevez cette réponse. Lisez-la et répondez aux questions.",
    help: { tr: "Şikâyet etmek için bir internet mağazasına yazdınız. Bu cevabı alıyorsunuz. Okuyun ve soruları cevaplayın.", en: "You wrote to an online shop to complain. You receive this reply. Read it and answer the questions." },
    doc: { type: "email", from: "Service clients – MaisonPlus", to: "M. Kemal Arslan", subject: "Votre réclamation – commande n° 78302",
      body: "Monsieur Arslan,\n\nNous avons bien reçu votre message du 3 mars et nous sommes désolés pour ce problème. Vous avez commandé une lampe de bureau bleue le 20 février, mais vous avez reçu une lampe verte, et le colis est arrivé avec une semaine de retard.\n\nNous vous proposons deux solutions :\n– vous gardez la lampe verte et nous vous remboursons 15 € ;\n– ou vous nous renvoyez la lampe verte et nous vous envoyons une lampe bleue.\n\nPour le retour, vous n'avez rien à payer : imprimez l'étiquette jointe à ce courriel et déposez le colis dans un bureau de poste avant le 31 mars. La nouvelle lampe arrivera environ 5 jours après.\n\nPour le retard, nous vous offrons aussi un bon de réduction de 10 % pour votre prochaine commande.\n\nMerci de répondre à ce message pour nous dire quelle solution vous choisissez.\n\nCordialement,\nSarah Blanc, service clients" },
    questions: [
      { q: "Quel était le problème ?", o: ["La lampe était cassée.", "La couleur n'était pas la bonne.", "La lampe n'est jamais arrivée."], a: 1, x: "« vous avez commandé une lampe de bureau bleue […] mais vous avez reçu une lampe verte »." },
      { q: "Le colis est arrivé à l'heure.", o: ["Vrai", "Faux"], a: 1, x: "« le colis est arrivé avec une semaine de retard »." },
      { q: "S'il garde la lampe verte, M. Arslan…", o: ["reçoit 15 €.", "reçoit une deuxième lampe.", "doit payer 15 €."], a: 0, x: "« vous gardez la lampe verte et nous vous remboursons 15 € »." },
      { q: "Le renvoi de la lampe…", o: ["coûte 10 €.", "est gratuit.", "doit se faire en magasin."], a: 1, x: "« Pour le retour, vous n'avez rien à payer »." },
      { q: "Il doit déposer le colis à la poste…", o: ["avant le 3 mars.", "avant le 20 février.", "avant le 31 mars."], a: 2, x: "« déposez le colis dans un bureau de poste avant le 31 mars »." },
      { q: "Le bon de réduction de 10 % est valable…", o: ["pour la prochaine commande.", "seulement pour la lampe bleue.", "seulement en magasin."], a: 0, x: "« un bon de réduction de 10 % pour votre prochaine commande »." }
    ] },

  { id: "a2-s03-ce3", level: "A2", sujet: 3, sec: "ce", ex: 3, pts: 6,
    title: "Sécurité à la salle de sport",
    consigne: "Vous êtes inscrit(e) dans une salle de sport. Vous lisez ce document à l'entrée. Répondez aux questions.",
    help: { tr: "Bir spor salonuna kayıtlısınız. Bu belgeyi girişte okuyorsunuz. Soruları cevaplayın.", en: "You are a member of a gym. You read this notice at the entrance. Answer the questions." },
    doc: { type: "notice", title: "Salle Énergie – Consignes de sécurité",
      body: "Pour votre sécurité et celle des autres, merci de lire ces consignes.\n\n1. Avant votre première séance, prenez rendez-vous avec un coach. Il vous montrera comment utiliser les machines. Ce rendez-vous est gratuit.\n2. Portez toujours des chaussures de sport propres. Il est interdit de s'entraîner pieds nus ou en sandales.\n3. Apportez une serviette et posez-la sur les bancs et les machines.\n4. Après chaque exercice, rangez les poids et nettoyez la machine avec le spray mis à disposition.\n5. Ne soulevez pas de poids lourds seul : demandez de l'aide à un coach.\n6. Buvez régulièrement. Des fontaines d'eau se trouvent à côté des vestiaires.\n7. Si vous avez mal ou si vous vous sentez mal, arrêtez tout de suite et prévenez l'accueil.\n\nLes jeunes de moins de 16 ans ne peuvent pas entrer dans la salle. Les casiers ferment avec un cadenas : apportez le vôtre." },
    questions: [
      { q: "Le rendez-vous avec un coach avant la première séance…", o: ["coûte 10 €.", "est gratuit.", "a lieu après un mois."], a: 1, x: "« Ce rendez-vous est gratuit »." },
      { q: "On peut faire du sport en sandales.", o: ["Vrai", "Faux"], a: 1, x: "« Il est interdit de s'entraîner pieds nus ou en sandales »." },
      { q: "Après un exercice, il faut…", o: ["nettoyer la machine.", "changer de serviette.", "aller aux vestiaires."], a: 0, x: "« nettoyez la machine avec le spray mis à disposition »." },
      { q: "Pour soulever des poids lourds, on…", o: ["attend la fin de la journée.", "demande l'aide d'un coach.", "met des gants."], a: 1, x: "« Ne soulevez pas de poids lourds seul : demandez de l'aide à un coach »." },
      { q: "Une adolescente de 14 ans…", o: ["peut venir avec ses parents.", "ne peut pas entrer.", "doit d'abord voir un coach."], a: 1, x: "« Les jeunes de moins de 16 ans ne peuvent pas entrer dans la salle »." },
      { q: "Pour utiliser un casier, il faut…", o: ["demander une clé à l'accueil.", "apporter son cadenas.", "payer 2 €."], a: 1, x: "« Les casiers ferment avec un cadenas : apportez le vôtre »." }
    ] },

  { id: "a2-s03-ce4", level: "A2", sujet: 3, sec: "ce", ex: 4, pts: 7,
    title: "Une jeune cheffe à Tours",
    consigne: "Vous lisez cet article dans un journal régional. Répondez aux questions.",
    help: { tr: "Bölgesel bir gazetede bu makaleyi okuyorsunuz. Soruları cevaplayın.", en: "You read this article in a regional newspaper. Answer the questions." },
    doc: { type: "article", title: "À 24 ans, Léa ouvre son restaurant",
      body: "Léa Moreau a seulement 24 ans, mais elle vient d'ouvrir son propre restaurant, « Le Petit Potager », dans le centre de Tours. Depuis l'ouverture en janvier, les clients sont nombreux et il faut souvent réserver une semaine à l'avance.\n\nLéa a toujours aimé cuisiner. Quand elle était petite, elle passait ses mercredis dans la cuisine de sa grand-mère. Après le lycée, elle a fait une école de cuisine à Lyon, puis elle a travaillé trois ans dans un grand restaurant à Paris. « C'était passionnant, mais très fatigant. Je travaillais douze heures par jour », raconte-t-elle.\n\nDans son restaurant, Léa cuisine uniquement des produits de saison qui viennent de fermes situées à moins de 50 kilomètres. Le menu change chaque semaine. À midi, un menu complet coûte 19 €.\n\nLe restaurant est fermé le dimanche et le lundi. « Je veux avoir du temps pour ma famille », explique la jeune cheffe. Son prochain projet ? Proposer des cours de cuisine pour les enfants le samedi matin." },
    questions: [
      { q: "Le restaurant de Léa se trouve à…", o: ["Lyon.", "Paris.", "Tours."], a: 2, x: "« dans le centre de Tours »." },
      { q: "Quand elle était enfant, Léa cuisinait…", o: ["avec sa grand-mère.", "à l'école.", "avec sa mère."], a: 0, x: "« elle passait ses mercredis dans la cuisine de sa grand-mère »." },
      { q: "À Paris, Léa avait des journées de travail courtes.", o: ["Vrai", "Faux"], a: 1, x: "« Je travaillais douze heures par jour »." },
      { q: "Les produits du restaurant…", o: ["viennent de l'étranger.", "viennent de fermes proches.", "sont achetés au supermarché."], a: 1, x: "« des fermes situées à moins de 50 kilomètres »." },
      { q: "Le menu du restaurant…", o: ["change chaque semaine.", "est le même toute l'année.", "coûte 19 € le soir."], a: 0, x: "« Le menu change chaque semaine »." },
      { q: "Le prochain projet de Léa, c'est…", o: ["d'ouvrir un deuxième restaurant.", "de donner des cours aux enfants.", "d'ouvrir le dimanche."], a: 1, x: "« Proposer des cours de cuisine pour les enfants le samedi matin »." }
    ] },

  /* ===================== SUJET 4 ===================== */
  { id: "a2-s04-ce1", level: "A2", sujet: 4, sec: "ce", ex: 1, pts: 6,
    title: "Petits boulots",
    consigne: "Vos amis cherchent un petit travail. Lisez ces offres d'emploi et répondez aux questions.",
    help: { tr: "Arkadaşlarınız küçük bir iş arıyor. Bu iş ilanlarını okuyun ve soruları cevaplayın.", en: "Your friends are looking for a small job. Read these job offers and answer the questions." },
    doc: { type: "annonce", title: "Offres d'emploi – Panneau de la mairie",
      body: "A. Famille cherche baby-sitter pour 2 enfants (3 et 6 ans), le mardi et le jeudi de 16 h 30 à 19 h. Aller chercher les enfants à l'école et préparer le goûter. Expérience demandée. 12 € de l'heure.\n\nB. Boulangerie Dupain cherche vendeur ou vendeuse pour le week-end, de 7 h à 13 h. Pas besoin d'expérience : formation sur place.\n\nC. Monsieur âgé cherche une personne pour faire ses courses en voiture et l'accompagner en promenade, 2 matins par semaine. Permis de conduire obligatoire.\n\nD. Agence de soutien scolaire cherche étudiant(e) pour donner des cours de maths à des collégiens, le soir, de 18 h à 20 h. Niveau bac + 2 minimum." },
    questions: [
      { q: "Selin est en 3e année d'économie à l'université. Elle est libre le soir. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 3, x: "Annonce D : « étudiant(e) », « le soir », « Niveau bac + 2 minimum »." },
      { q: "Yasmine a souvent gardé ses neveux. Elle est libre l'après-midi en semaine. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 0, x: "Annonce A : « baby-sitter », « le mardi et le jeudi de 16 h 30 à 19 h », « Expérience demandée »." },
      { q: "Paul n'a jamais travaillé. Il est libre le samedi et le dimanche matin. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 1, x: "Annonce B : « pour le week-end, de 7 h à 13 h » et « Pas besoin d'expérience »." },
      { q: "Ahmed a son permis et une voiture. Il aime aider les personnes âgées. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 2, x: "Annonce C : « Monsieur âgé » et « Permis de conduire obligatoire »." },
      { q: "La famille de l'annonce A cherche quelqu'un pour le week-end.", o: ["Vrai", "Faux"], a: 1, x: "Elle cherche quelqu'un « le mardi et le jeudi »." }
    ] },

  { id: "a2-s04-ce2", level: "A2", sujet: 4, sec: "ce", ex: 2, pts: 6,
    title: "Invitation à un mariage",
    consigne: "Vous recevez cette lettre de deux amis. Lisez-la et répondez aux questions.",
    help: { tr: "İki arkadaşınızdan bu mektubu alıyorsunuz. Okuyun ve soruları cevaplayın.", en: "You receive this letter from two friends. Read it and answer the questions." },
    doc: { type: "lettre", from: "Julie et Mehmet", to: "Esin",
      body: "Chère Esin,\n\nNous avons une grande nouvelle : nous allons nous marier ! Nous serions très heureux de t'avoir avec nous pour ce jour important.\n\nLa cérémonie aura lieu le samedi 12 juin à 15 h, à la mairie de Montpellier. Ensuite, nous ferons la fête au domaine des Oliviers, à 20 minutes de la ville. Il y aura un dîner, puis on dansera toute la nuit ! Le dimanche, nous organisons un brunch au bord de la piscine pour ceux qui veulent rester.\n\nSi tu n'as pas de voiture, ne t'inquiète pas : un bus partira de la mairie à 17 h 30 pour aller au domaine. Il ramènera les invités en ville à 2 h du matin.\n\nPour les cadeaux, nous avons ouvert une liste dans une agence de voyages, car nous voulons partir en Grèce cet été.\n\nMerci de nous répondre avant le 1er mai pour nous dire si tu viens et si tu manges de la viande.\n\nNous t'embrassons,\nJulie et Mehmet" },
    questions: [
      { q: "La cérémonie de mariage a lieu…", o: ["à la mairie.", "au domaine des Oliviers.", "dans une église."], a: 0, x: "« La cérémonie aura lieu […] à la mairie de Montpellier »." },
      { q: "Le dîner a lieu…", o: ["dans le centre de Montpellier.", "au domaine des Oliviers.", "au bord de la mer."], a: 1, x: "« nous ferons la fête au domaine des Oliviers […] Il y aura un dîner »." },
      { q: "Le dimanche, il y a un brunch au bord de la piscine.", o: ["Vrai", "Faux"], a: 0, x: "« Le dimanche, nous organisons un brunch au bord de la piscine »." },
      { q: "Le bus part de la mairie à…", o: ["15 h.", "17 h 30.", "2 h du matin."], a: 1, x: "« un bus partira de la mairie à 17 h 30 »." },
      { q: "Comme cadeau, Julie et Mehmet préfèrent…", o: ["de la vaisselle.", "une participation à leur voyage.", "des livres."], a: 1, x: "« nous avons ouvert une liste dans une agence de voyages »." },
      { q: "Esin doit répondre…", o: ["avant le 1er mai.", "avant le 12 juin.", "le jour du mariage."], a: 0, x: "« Merci de nous répondre avant le 1er mai »." }
    ] },

  { id: "a2-s04-ce3", level: "A2", sujet: 4, sec: "ce", ex: 3, pts: 6,
    title: "Louer un vélo en libre-service",
    consigne: "Vous voulez utiliser les vélos en libre-service de votre ville. Vous lisez ces instructions sur la station. Répondez aux questions.",
    help: { tr: "Şehrinizdeki paylaşımlı bisikletleri kullanmak istiyorsunuz. İstasyondaki bu talimatları okuyorsunuz. Soruları cevaplayın.", en: "You want to use your town's bike-sharing service. You read these instructions at the station. Answer the questions." },
    doc: { type: "notice", title: "VéloCité – Comment louer un vélo ?",
      body: "VéloCité, ce sont 1 200 vélos dans 90 stations, 24 h sur 24 et 7 jours sur 7.\n\nPour louer un vélo :\n1. Sur l'écran de la station, choisissez « Location courte » ou passez votre carte d'abonné.\n2. Payez avec votre carte bancaire. Une caution de 150 € est bloquée pendant la location, mais elle n'est pas prise sur votre compte.\n3. Choisissez le numéro de votre vélo. Vous avez 1 minute pour le sortir de la borne.\n4. Vérifiez les freins et les pneus avant de partir. Un problème ? Remettez le vélo et appuyez sur le bouton rouge de la borne.\n\nPrix :\n– les 30 premières minutes sont gratuites ;\n– ensuite, 1 € par demi-heure ;\n– abonnement annuel : 35 €.\n\nPour rendre le vélo, poussez-le dans une borne libre de n'importe quelle station. Attendez le bip et la lumière verte. Si la station est pleine, l'écran vous donne 15 minutes gratuites en plus pour aller à une autre station." },
    questions: [
      { q: "On peut louer un vélo…", o: ["seulement la journée.", "à toute heure, tous les jours.", "du lundi au vendredi."], a: 1, x: "« 24 h sur 24 et 7 jours sur 7 »." },
      { q: "La caution de 150 €…", o: ["est payée à la fin.", "n'est pas prise sur le compte.", "est remboursée après un mois."], a: 1, x: "« elle n'est pas prise sur votre compte »." },
      { q: "Si les freins ne marchent pas, il faut remettre le vélo et appuyer sur le bouton rouge.", o: ["Vrai", "Faux"], a: 0, x: "« Un problème ? Remettez le vélo et appuyez sur le bouton rouge de la borne »." },
      { q: "Une location d'une heure coûte…", o: ["0 €.", "1 €.", "2 €."], a: 1, x: "« les 30 premières minutes sont gratuites ; ensuite, 1 € par demi-heure » : 1 €." },
      { q: "On rend le vélo…", o: ["à la station de départ.", "dans n'importe quelle station.", "à l'agence VéloCité."], a: 1, x: "« poussez-le dans une borne libre de n'importe quelle station »." },
      { q: "Si la station est pleine…", o: ["on a 15 minutes gratuites en plus.", "on doit payer 1 €.", "on laisse le vélo à côté."], a: 0, x: "« l'écran vous donne 15 minutes gratuites en plus »." }
    ] },

  { id: "a2-s04-ce4", level: "A2", sujet: 4, sec: "ce", ex: 4, pts: 7,
    title: "Un bénévole au club de foot",
    consigne: "Vous lisez cet article dans le journal de votre quartier. Répondez aux questions.",
    help: { tr: "Mahallenizin gazetesinde bu makaleyi okuyorsunuz. Soruları cevaplayın.", en: "You read this article in your neighbourhood newspaper. Answer the questions." },
    doc: { type: "article", title: "Karim, bénévole depuis 20 ans",
      body: "Tous les samedis matin, depuis vingt ans, Karim Benali arrive le premier au stade de Saint-Martin. Il ouvre les vestiaires, prépare les ballons et accueille les enfants. Karim n'est pas payé : il est bénévole au club de football de la ville.\n\nTout a commencé en 2006. « Mon fils jouait au club et l'entraîneur cherchait quelqu'un pour l'aider. J'ai dit oui pour un an… et je suis encore là ! », raconte-t-il en riant. Aujourd'hui, son fils a 28 ans et il joue dans une autre ville, mais Karim continue d'entraîner les 8-10 ans.\n\nPendant la semaine, Karim travaille comme électricien. Le mercredi soir, il organise aussi les matchs et prépare les voyages en minibus pour les tournois.\n\nLe club compte 250 joueurs et 30 bénévoles. Mais il en faudrait plus. « Les parents sont souvent trop occupés. Pourtant, une heure par semaine, c'est déjà beaucoup pour nous ! », explique le président du club.\n\nLe mois dernier, la mairie a remis une médaille à Karim pour le remercier." },
    questions: [
      { q: "Au club de football, Karim est…", o: ["entraîneur payé.", "bénévole.", "président."], a: 1, x: "« Karim n'est pas payé : il est bénévole »." },
      { q: "Karim a commencé parce que…", o: ["son fils jouait au club.", "il cherchait un travail.", "il était joueur professionnel."], a: 0, x: "« Mon fils jouait au club et l'entraîneur cherchait quelqu'un pour l'aider »." },
      { q: "Le fils de Karim joue toujours dans ce club.", o: ["Vrai", "Faux"], a: 1, x: "« il joue dans une autre ville »." },
      { q: "Le métier de Karim est…", o: ["électricien.", "chauffeur de minibus.", "professeur de sport."], a: 0, x: "« Pendant la semaine, Karim travaille comme électricien »." },
      { q: "Selon le président, le club…", o: ["a assez de bénévoles.", "a besoin de plus de bénévoles.", "va bientôt fermer."], a: 1, x: "« Mais il en faudrait plus »." },
      { q: "La mairie a offert à Karim…", o: ["un minibus.", "une médaille.", "de l'argent."], a: 1, x: "« la mairie a remis une médaille à Karim »." }
    ] },

  /* ===================== SUJET 5 ===================== */
  { id: "a2-s05-ce1", level: "A2", sujet: 5, sec: "ce", ex: 1, pts: 6,
    title: "Meubles d'occasion",
    consigne: "Vos amis viennent d'emménager et cherchent des meubles d'occasion. Lisez ces annonces et répondez aux questions.",
    help: { tr: "Arkadaşlarınız yeni taşındı ve ikinci el mobilya arıyor. İlanları okuyun ve soruları cevaplayın.", en: "Your friends have just moved in and are looking for second-hand furniture. Read the ads and answer the questions." },
    doc: { type: "annonce", title: "Petites annonces – Maison",
      body: "A. Vends canapé 3 places, gris, très bon état, acheté il y a 2 ans. 150 €. À venir chercher au 4e étage sans ascenseur. Tél. 06 45 21 88 10.\n\nB. Donne table en bois et 4 chaises, un peu abîmées. Gratuit ! À prendre ce week-end seulement, quartier de la gare.\n\nC. Vends lit d'enfant avec matelas, blanc, utilisé 1 an. 80 €. Livraison possible à domicile pour 10 € de plus.\n\nD. Vends bureau + chaise de bureau, idéal pour étudiant. 60 € les deux, ou 45 € le bureau seul. Prix à discuter si vous achetez avant vendredi." },
    questions: [
      { q: "Anna n'a pas beaucoup d'argent. Elle veut une table pour manger avec ses amis. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 1, x: "Annonce B : « table en bois et 4 chaises », « Gratuit ! »." },
      { q: "Marco cherche un meuble pour s'asseoir à trois dans son salon. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 0, x: "Annonce A : « canapé 3 places »." },
      { q: "Clara a une fille de 4 ans. Elle n'a pas de voiture. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 2, x: "Annonce C : « lit d'enfant » et « Livraison possible à domicile »." },
      { q: "Tom commence l'université et veut travailler chez lui. Quelle annonce lui correspond ?", o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 3, x: "Annonce D : « bureau + chaise de bureau, idéal pour étudiant »." },
      { q: "Dans l'annonce D, on peut acheter le bureau sans la chaise.", o: ["Vrai", "Faux"], a: 0, x: "« ou 45 € le bureau seul »." }
    ] },

  { id: "a2-s05-ce2", level: "A2", sujet: 5, sec: "ce", ex: 2, pts: 6,
    title: "Pot de départ d'un collègue",
    consigne: "Vous recevez ce courriel au travail. Lisez-le et répondez aux questions.",
    help: { tr: "İş yerinde bu e-postayı alıyorsunuz. Okuyun ve soruları cevaplayın.", en: "You receive this e-mail at work. Read it and answer the questions." },
    doc: { type: "email", from: "Nathalie Roux", to: "Toute l'équipe", subject: "Pot de départ de Bernard – surprise !",
      body: "Bonjour à tous,\n\nComme vous le savez, notre collègue Bernard va prendre sa retraite à la fin du mois, après 32 ans dans l'entreprise. Il a commencé ici comme magasinier en 1994, et il est devenu chef du service logistique il y a dix ans.\n\nPour lui dire au revoir, nous organisons un pot de départ le jeudi 27 juin à 17 h 30, dans la salle de réunion du 2e étage. Attention : Bernard ne sait rien, c'est une surprise ! Ne lui dites rien, s'il vous plaît.\n\nNous voulons lui offrir un vélo électrique, car il a envie de faire le tour de la Bretagne. Si vous voulez participer, vous pouvez donner de l'argent à Pauline, à l'accueil, avant le 20 juin.\n\nPour le buffet, chacun peut apporter quelque chose : un gâteau, une salade, des jus de fruits… Inscrivez-vous sur la liste affichée dans la cuisine pour savoir qui apporte quoi.\n\nMerci et à jeudi !\nNathalie" },
    questions: [
      { q: "Bernard quitte l'entreprise parce qu'il…", o: ["change de travail.", "prend sa retraite.", "déménage en Bretagne."], a: 1, x: "« Bernard va prendre sa retraite à la fin du mois »." },
      { q: "Aujourd'hui, Bernard est…", o: ["magasinier.", "chef de service.", "à l'accueil."], a: 1, x: "« il est devenu chef du service logistique il y a dix ans »." },
      { q: "Bernard sait qu'on organise une fête pour lui.", o: ["Vrai", "Faux"], a: 1, x: "« Bernard ne sait rien, c'est une surprise ! »" },
      { q: "Les collègues veulent offrir à Bernard…", o: ["un voyage en Bretagne.", "un vélo électrique.", "une montre."], a: 1, x: "« Nous voulons lui offrir un vélo électrique »." },
      { q: "Pour participer au cadeau, on donne de l'argent…", o: ["à Nathalie.", "à Pauline.", "à Bernard."], a: 1, x: "« vous pouvez donner de l'argent à Pauline, à l'accueil »." },
      { q: "Pour le buffet, il faut…", o: ["payer 10 €.", "écrire son nom sur une liste.", "commander chez un traiteur."], a: 1, x: "« Inscrivez-vous sur la liste affichée dans la cuisine »." }
    ] },

  { id: "a2-s05-ce3", level: "A2", sujet: 5, sec: "ce", ex: 3, pts: 6,
    title: "Visiter le musée",
    consigne: "Vous voulez visiter un musée. Vous lisez ces informations sur son site internet. Répondez aux questions.",
    help: { tr: "Bir müzeyi ziyaret etmek istiyorsunuz. Bu bilgileri müzenin internet sitesinde okuyorsunuz. Soruları cevaplayın.", en: "You want to visit a museum. You read this information on its website. Answer the questions." },
    doc: { type: "notice", title: "Musée des Beaux-Arts – Préparer votre visite",
      body: "Horaires : le musée est ouvert tous les jours sauf le mardi, de 10 h à 18 h. Le jeudi, il ferme à 21 h. La dernière entrée a lieu 45 minutes avant la fermeture.\n\nTarifs : 9 € ; 5 € pour les étudiants et les plus de 65 ans. Gratuit pour les moins de 18 ans, et pour tout le monde le premier dimanche du mois.\n\nPendant la visite :\n– laissez les sacs à dos et les grands sacs au vestiaire (gratuit) ;\n– les photos sont autorisées, mais sans flash ;\n– il est interdit de toucher les œuvres, de manger et de boire dans les salles ;\n– mettez votre téléphone en mode silencieux.\n\nVisites guidées : tous les samedis à 15 h (1 h 30), 3 € en plus du billet. Réservation à l'accueil.\n\nUn audioguide en 8 langues (dont le turc et l'arabe) est disponible pour 4 €.\n\nLe café du musée, au rez-de-chaussée, vous accueille de 11 h à 17 h." },
    questions: [
      { q: "Le musée est fermé…", o: ["le lundi.", "le mardi.", "le dimanche."], a: 1, x: "« ouvert tous les jours sauf le mardi »." },
      { q: "Le jeudi, on peut entrer jusqu'à…", o: ["17 h 15.", "20 h 15.", "21 h."], a: 1, x: "Le jeudi, il ferme à 21 h, et « la dernière entrée a lieu 45 minutes avant la fermeture »." },
      { q: "Un étudiant de 22 ans paie son billet…", o: ["0 €.", "5 €.", "9 €."], a: 1, x: "« 5 € pour les étudiants »." },
      { q: "On peut prendre des photos avec un flash.", o: ["Vrai", "Faux"], a: 1, x: "« les photos sont autorisées, mais sans flash »." },
      { q: "Un adulte qui fait la visite guidée paie en tout…", o: ["3 €.", "9 €.", "12 €."], a: 2, x: "Billet 9 € + « 3 € en plus du billet » = 12 €." },
      { q: "Il existe un audioguide en turc.", o: ["Vrai", "Faux"], a: 0, x: "« Un audioguide en 8 langues (dont le turc et l'arabe) »." }
    ] },

  { id: "a2-s05-ce4", level: "A2", sujet: 5, sec: "ce", ex: 4, pts: 7,
    title: "Un jardin dans la cité",
    consigne: "Vous lisez cet article sur le site de votre ville. Répondez aux questions.",
    help: { tr: "Şehrinizin internet sitesinde bu makaleyi okuyorsunuz. Soruları cevaplayın.", en: "You read this article on your town's website. Answer the questions." },
    doc: { type: "article", title: "Un jardin partagé au pied des immeubles",
      body: "Il y a deux ans, il y avait seulement un parking abandonné entre les immeubles du quartier des Lilas. Aujourd'hui, on y trouve des tomates, des salades, des fraises et des fleurs. C'est le nouveau jardin partagé du quartier.\n\nL'idée vient de Fatima, une habitante de 45 ans. « J'ai grandi à la campagne, au Maroc. Le jardin me manquait beaucoup », explique-t-elle. Elle a parlé de son projet aux voisins et à la mairie. La mairie a donné le terrain et l'eau ; les habitants ont construit les bacs eux-mêmes.\n\nAujourd'hui, 40 familles participent. Chaque famille a un petit morceau de jardin, mais beaucoup de travaux se font ensemble. Le samedi matin, des jardiniers expérimentés donnent des conseils aux débutants.\n\nLe jardin a aussi changé la vie du quartier. « Avant, on ne se parlait pas. Maintenant, on se connaît tous ! », raconte Jean, 78 ans. En septembre, les habitants organisent une grande fête de la récolte, ouverte à tous.\n\nPour participer, il faut habiter le quartier et payer 10 € par an." },
    questions: [
      { q: "Avant le jardin, il y avait…", o: ["un parc.", "un parking.", "une école."], a: 1, x: "« il y avait seulement un parking abandonné »." },
      { q: "Fatima a eu cette idée parce que…", o: ["le jardin lui manquait.", "elle voulait vendre des légumes.", "la mairie lui a demandé."], a: 0, x: "« Le jardin me manquait beaucoup »." },
      { q: "Ce sont les habitants qui ont construit les bacs.", o: ["Vrai", "Faux"], a: 0, x: "« les habitants ont construit les bacs eux-mêmes »." },
      { q: "Le samedi matin…", o: ["il y a un marché.", "les débutants reçoivent des conseils.", "le jardin est fermé."], a: 1, x: "« des jardiniers expérimentés donnent des conseils aux débutants »." },
      { q: "Selon Jean, grâce au jardin…", o: ["les voisins se connaissent.", "le quartier est plus propre.", "il mange mieux."], a: 0, x: "« Maintenant, on se connaît tous ! »" },
      { q: "Pour participer, il faut…", o: ["avoir déjà un jardin.", "habiter le quartier.", "avoir plus de 40 ans."], a: 1, x: "« il faut habiter le quartier et payer 10 € par an »." }
    ] }
);
