/* Graded readings, A1 set 15 (short practical texts): the new group-class timetable at the gym, a note from a flatmate on the fridge, a bakery closed for holidays, a poster for a park clean-up day and a note from the teacher about a school trip.
   Same format as data/readings.js: { id, level, t:{fr,tr,en}, text, gloss: [fr, tr, en][], qs: [{ q, o, a }] }. */
(function () {
  const G = s => s.trim().split("\n").map(l => l.split("|").map(x => x.trim()));
  const Q = (q, o, a) => ({ q, o, a });
  const R = (id, level, fr, tr, en, text, gloss, qs) => ({ id, level, t: { fr, tr, en }, text: text.trim(), gloss: G(gloss), qs });

  window.READINGS = window.READINGS || [];
  window.READINGS.push(
    R("r15-planning-cours", "A1", "Le nouveau planning des cours", "Derslerin yeni programı", "The new class timetable", `
Lundi matin, à la salle de sport, Sophie met une nouvelle affiche à l'accueil : « Nouveau planning des cours collectifs, à partir du 1er décembre ». Esin travaille à l'accueil. Toute la journée, les clients posent des questions sur cette affiche.

Monsieur Garnier a 62 ans. Il vient trois fois par semaine. Il demande : « Et mon cours de pilates du mardi ? » Esin regarde le planning. « Le pilates est toujours le mardi, mais maintenant c'est à 10 heures, pas à 9 heures. » Monsieur Garnier est content : « Parfait, je peux dormir un peu plus ! »

Ensuite, Inès, une étudiante, arrive. Elle adore la zumba. Mauvaise nouvelle : le cours de zumba du jeudi soir n'existe plus. Mais il y a un nouveau cours le samedi, à 11 heures. « Bon, d'accord, je danse le samedi ! » dit Inès.

Il y a aussi deux nouveaux cours. Le mercredi à 18 h 30, c'est un cours de « dos en forme » : des exercices doux pour le dos. Le vendredi à 7 heures, c'est un cours de cardio de trente minutes, avant le travail. Pour tous les cours, il faut réserver sur l'application de la salle. Il y a quinze places par cours.

Le soir, Sophie demande à Esin : « Alors, les clients aiment le nouveau planning ? » Esin sourit : « Oui, mais le cours du vendredi à 7 heures… personne n'a encore réservé ! »`, `
un planning|program, çizelge|timetable, schedule
un cours collectif|grup dersi|group class
l'accueil (m.)|resepsiyon, danışma|front desk, reception
à partir de|-den itibaren|from, starting on
toujours|hâlâ; her zaman|still; always
une mauvaise nouvelle|kötü haber|bad news
exister|var olmak|to exist
doux, douce|yumuşak, hafif|gentle, soft
réserver|rezervasyon yapmak, yer ayırtmak|to book
une place|yer, kontenjan|place, spot
personne ne…|hiç kimse|nobody`, [
      Q("Le nouveau planning commence quand ?", ["Le 1er novembre", "Le 1er décembre", "Lundi prochain"], 1),
      Q("À quelle heure est le cours de pilates maintenant ?", ["À 9 heures", "À 11 heures", "À 10 heures", "À 18 h 30"], 2),
      Q("Quel jour Inès peut-elle faire de la zumba maintenant ?", ["Le samedi", "Le jeudi", "Le mercredi"], 0),
      Q("Le cours « dos en forme », c'est quoi ?", ["Un cours de boxe", "Des exercices doux pour le dos", "Un cours de natation"], 1),
      Q("Comment réserve-t-on un cours ?", ["À l'accueil, avec Esin", "Par téléphone", "Par e-mail", "Sur l'application de la salle"], 3),
      Q("Quel est le problème du cours du vendredi à 7 heures ?", ["Il est trop cher", "Personne n'a encore réservé", "Il n'y a pas de professeur"], 1)
    ]),

    R("r15-mot-frigo", "A1", "Un mot sur le frigo", "Buzdolabındaki not", "A note on the fridge", `
Chloé et Mehdi sont colocataires. Ils partagent un appartement à Lyon, près de la gare. Chloé est infirmière et elle travaille souvent la nuit. Mehdi est étudiant en informatique. Ils ne se voient pas beaucoup, alors ils laissent des mots sur le frigo.

Ce matin, Mehdi trouve ce mot : « Salut Mehdi ! Je rentre du travail à 8 heures et je vais dormir jusqu'à 15 heures. S'il te plaît, pas de musique ce matin ! Merci ! »

Il y a aussi une petite liste : « 1. Il n'y a plus de lait et plus de pain. Tu peux faire les courses ? Je te rembourse ce soir. 2. Le propriétaire passe jeudi à 10 heures pour réparer le chauffage. Tu es là ? 3. C'est ton tour de sortir les poubelles, mardi soir ! »

À la fin du mot, Chloé écrit : « PS : Merci pour la soupe d'hier soir, elle était délicieuse ! Bisous, Chloé ». Et elle dessine un petit soleil.

Mehdi sourit. Il prend un stylo et il répond en bas du mot : « Pas de problème pour les courses. Jeudi, j'ai cours, désolé ! Tu peux ouvrir au propriétaire ? Bonne nuit… enfin, bonne journée ! » Puis il met ses écouteurs et il prépare son café, en silence.`, `
un / une colocataire|ev arkadaşı|flatmate
partager|paylaşmak|to share
un infirmier, une infirmière|hemşire|nurse
un mot|kısa not; kelime|note; word
faire les courses|alışveriş yapmak (market)|to do the shopping
rembourser|parayı geri ödemek|to pay back
le / la propriétaire|ev sahibi|landlord, landlady
réparer|tamir etmek|to repair
le chauffage|kalorifer, ısıtma|heating
sortir les poubelles|çöpleri çıkarmak|to take the bins out
des écouteurs (m.)|kulaklık|earphones`, [
      Q("Où habitent Chloé et Mehdi ?", ["À Lyon, près de la gare", "À Paris, près de l'hôpital", "À Lyon, près de l'université"], 0),
      Q("Pourquoi Chloé veut-elle du silence ce matin ?", ["Elle est malade", "Elle travaille à la maison", "Elle dort après sa nuit de travail"], 2),
      Q("Qu'est-ce qu'il faut acheter ?", ["Du café et du sucre", "Du lait et du pain", "Des fruits et de l'eau", "De la soupe"], 1),
      Q("Pourquoi le propriétaire vient-il jeudi ?", ["Pour réparer le chauffage", "Pour demander le loyer", "Pour visiter l'appartement"], 0),
      Q("Qui sort les poubelles mardi soir ?", ["Chloé", "Le propriétaire", "Mehdi"], 2),
      Q("Que fait Mehdi après sa réponse ?", ["Il va dormir", "Il met ses écouteurs et prépare son café", "Il appelle Chloé"], 1)
    ]),

    R("r15-boulangerie-conges", "A1", "Fermé pour congés", "Tatil nedeniyle kapalı", "Closed for holidays", `
Tous les matins, Gérard, 70 ans, achète sa baguette à la boulangerie Roux, au coin de sa rue. Mais lundi matin, la porte est fermée. Les lumières sont éteintes. Sur la porte, il y a une petite affiche.

Gérard met ses lunettes et il lit : « Chers clients, la boulangerie est fermée pour congés du lundi 4 au dimanche 17 août. Réouverture le lundi 18 août, à 7 heures. Pendant notre absence, vous pouvez acheter votre pain à la boulangerie Martin, 8 place de la Mairie. Bonnes vacances à tous ! Monsieur et Madame Roux. »

Gérard n'est pas content. « Deux semaines sans mes croissants ! » La boulangerie Martin est loin : elle est de l'autre côté du quartier, à quinze minutes à pied. Et Gérard a mal au genou.

Sa voisine, Fatou, arrive avec son vélo. Elle lit l'affiche aussi. « Ne vous inquiétez pas, Gérard. Je vais à la boulangerie Martin tous les matins avant le travail. Je peux vous rapporter une baguette ! » Gérard est très touché. « Merci, Fatou ! Alors, je vous offre le café, tous les jours ! »

Deux semaines plus tard, la boulangerie Roux ouvre à nouveau. Gérard est heureux de retrouver ses croissants. Mais il garde une nouvelle habitude : le café du matin avec Fatou.`, `
au coin de|-in köşesinde|on the corner of
éteint(e)|kapalı, sönük (ışık)|switched off
des lunettes (f.)|gözlük|glasses
fermé pour congés|tatil nedeniyle kapalı|closed for holidays
la réouverture|yeniden açılış|reopening
pendant notre absence|yokluğumuz süresince|while we are away
la mairie|belediye binası|town hall
à pied|yürüyerek|on foot
s'inquiéter|endişelenmek|to worry
rapporter|getirmek (birine)|to bring back
touché(e)|duygulanmış|touched, moved
une habitude|alışkanlık|habit`, [
      Q("Qu'est-ce que Gérard trouve sur la porte de la boulangerie ?", ["Une petite affiche", "Un sac de pain", "Une lettre pour lui"], 0),
      Q("Quand la boulangerie Roux ouvre-t-elle à nouveau ?", ["Le dimanche 17 août", "Le lundi 4 août", "Le lundi 18 août"], 2),
      Q("Où est la boulangerie Martin ?", ["Au coin de la rue", "Place de la Mairie", "À côté de la gare", "Près de l'école"], 1),
      Q("Pourquoi c'est difficile pour Gérard d'aller à la boulangerie Martin ?", ["Il n'a pas de voiture et il pleut", "Il travaille le matin", "Elle est loin et il a mal au genou"], 2),
      Q("Comment Fatou aide-t-elle Gérard ?", ["Elle lui rapporte une baguette", "Elle lui prête son vélo", "Elle fait du pain chez elle"], 0),
      Q("Quelle nouvelle habitude Gérard garde-t-il ?", ["Il mange des croissants le soir", "Il boit le café du matin avec Fatou", "Il fait du vélo"], 1)
    ]),

    R("r15-nettoyage-parc", "A1", "On nettoie le parc !", "Parkı temizliyoruz!", "Let's clean the park!", `
Dans le hall de mon immeuble, à Nantes, il y a une nouvelle affiche verte. En haut, en grosses lettres : « On nettoie le parc des Tilleuls ! » Je m'appelle Antoine, j'ai 45 ans et je lis l'affiche avec ma fille Zoé, qui a dix ans.

L'affiche explique tout : « Rendez-vous le samedi 12 avril, à 9 h 30, devant l'entrée du parc, rue des Lilas. Le matin, nous ramassons les papiers, les bouteilles et les canettes. Nous donnons des gants et des sacs. Venez avec des vêtements confortables et de bonnes chaussures ! »

Il y a aussi des informations pour l'après-midi : « À midi, pique-nique géant pour tout le monde. Apportez un plat ou un dessert à partager. L'après-midi, nous plantons des fleurs près de l'aire de jeux. C'est gratuit ! Organisé par l'association des habitants du quartier. »

En bas de l'affiche, il y a une adresse e-mail pour s'inscrire : parc.tilleuls@exemple.fr. Zoé est très enthousiaste : « Papa, on y va ! Je veux planter des fleurs ! » Moi, je ne suis pas sûr. Le samedi matin, j'aime dormir…

Finalement, j'écris un e-mail le soir même. Nous sommes inscrits ! Zoé va préparer un gâteau au chocolat pour le pique-nique. Et moi ? Je vais mettre mon réveil à 8 heures. Pour un parc propre, ça vaut la peine !`, `
le hall|bina girişi, lobi|entrance hall
un immeuble|apartman binası|block of flats
nettoyer|temizlemek|to clean
un rendez-vous|buluşma (yeri, saati)|meeting point, appointment
ramasser|toplamak (yerden)|to pick up
une canette|teneke kutu (içecek)|can (drink)
des gants (m.)|eldiven|gloves
un plat|yemek, tabak|dish
l'aire de jeux (f.)|çocuk oyun alanı|playground
gratuit(e)|ücretsiz|free (of charge)
s'inscrire|kaydolmak|to sign up
ça vaut la peine|buna değer|it's worth it`, [
      Q("Où Antoine voit-il l'affiche ?", ["À la boulangerie", "Dans le hall de son immeuble", "À l'école de Zoé"], 1),
      Q("À quelle heure est le rendez-vous ?", ["À 8 heures", "À midi", "À 9 h 30"], 2),
      Q("Qu'est-ce que l'association donne aux participants ?", ["Des gants et des sacs", "Des fleurs et des plantes", "Des chaussures", "Un pique-nique"], 0),
      Q("Que fait-on l'après-midi ?", ["On joue au foot", "On ramasse les bouteilles", "On plante des fleurs"], 2),
      Q("Comment s'inscrit-on ?", ["Par e-mail", "Par téléphone", "À la mairie"], 0),
      Q("Qu'est-ce que Zoé va préparer ?", ["Des sandwichs", "Une salade", "Un gâteau au chocolat"], 2)
    ]),

    R("r15-mot-maitresse", "A1", "Le mot de la maîtresse", "Öğretmenin notu", "A note from the teacher", `
Mardi soir, Karine regarde le cahier de liaison de son fils, Noé. Noé a sept ans et il est en CE1. Dans le cahier, il y a un mot de sa maîtresse, Madame Lefèvre.

« Chers parents, le jeudi 15 mai, la classe va visiter une ferme pédagogique, à Saint-Aubin. Départ en car à 8 h 45 devant l'école. Retour à 16 h 30. Les enfants vont voir les animaux : des vaches, des chèvres, des poules et des lapins. Ils vont aussi faire du fromage ! »

« Votre enfant doit apporter : un pique-nique, une bouteille d'eau, une casquette et des bottes ou de vieilles chaussures. Merci de ne pas mettre de bonbons dans le sac. La sortie coûte 5 euros. Merci de signer l'autorisation et de la rendre avant le vendredi 9 mai. Nous cherchons aussi deux parents pour accompagner la classe. »

Noé est très excité. « Maman, je vais voir de vraies vaches ! Et je veux une chèvre à la maison ! » Karine rit : « Une chèvre dans notre appartement ? Non, mon chéri ! »

Karine signe l'autorisation et elle met 5 euros dans une enveloppe. Le 15 mai, elle ne travaille pas, alors elle écrit aussi dans le cahier : « Je peux accompagner la classe. » Noé saute de joie. Le soir, il cherche ses vieilles bottes jaunes dans le placard.`, `
le cahier de liaison|okul-veli iletişim defteri|home-school notebook
le CE1|ilkokul 2. sınıf (7 yaş)|year 3 (age 7)
la maîtresse|ilkokul öğretmeni (kadın)|primary teacher (female)
une ferme pédagogique|eğitim çiftliği|educational farm
un car|otobüs (şehirlerarası, gezi)|coach
une chèvre|keçi|goat
une poule|tavuk|hen
une casquette|kep, şapka|cap
des bottes (f.)|çizme|boots
une autorisation|izin belgesi|permission slip
accompagner|eşlik etmek|to accompany
sauter de joie|sevinçten zıplamak|to jump for joy`, [
      Q("Quel âge a Noé ?", ["Six ans", "Sept ans", "Huit ans"], 1),
      Q("Où va la classe le 15 mai ?", ["Au zoo", "À la piscine", "Dans une ferme pédagogique", "Au musée"], 2),
      Q("Qu'est-ce que les enfants ne doivent pas mettre dans le sac ?", ["Des bonbons", "Une bouteille d'eau", "Une casquette"], 0),
      Q("Combien coûte la sortie ?", ["Gratuit", "15 euros", "5 euros"], 2),
      Q("Quand faut-il rendre l'autorisation ?", ["Avant le vendredi 9 mai", "Le jour de la sortie", "Avant le jeudi 15 mai"], 0),
      Q("Pourquoi Karine peut-elle accompagner la classe ?", ["Elle est professeure", "Elle ne travaille pas ce jour-là", "Elle a une voiture"], 1)
    ])
  );
})();
