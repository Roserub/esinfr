/* Graded readings, A1 set 7: a bike ride along the canal, an evening French class, the letterbox, the media library, the fridge, Nordic walking, New Year's Eve, a rainy day, the tram and a balcony garden.
   Same format as data/readings.js: { id, level, t:{fr,tr,en}, text, gloss: [fr, tr, en][], qs: [{ q, o, a }] }. */
(function () {
  const G = s => s.trim().split("\n").map(l => l.split("|").map(x => x.trim()));
  const Q = (q, o, a) => ({ q, o, a });
  const R = (id, level, fr, tr, en, text, gloss, qs) => ({ id, level, t: { fr, tr, en }, text: text.trim(), gloss: G(gloss), qs });

  window.READINGS = window.READINGS || [];
  window.READINGS.push(
    R("r-velo-canal", "A1", "Un dimanche à vélo au bord du canal", "Kanal kıyısında bisikletle bir pazar", "A Sunday cycling along the canal", `
Le dimanche, Thomas et sa femme Julie font du vélo. Ils habitent à Toulouse, près du canal du Midi. Ce dimanche, il fait beau et il ne fait pas trop chaud. C'est parfait pour une balade !

Ils partent à 9 heures. Dans leur sac, ils mettent de l'eau, des fruits et deux sandwichs. Le chemin au bord du canal est plat et calme. Il n'y a pas de voitures, seulement des vélos, des coureurs et des familles.

Sur le canal, il y a des bateaux. Ils avancent très lentement. Les gens sur les bateaux disent bonjour avec la main. Sous les grands arbres, il y a de l'ombre : c'est agréable.

À midi, Thomas et Julie s'arrêtent près d'une écluse. Ils mangent leurs sandwichs sur l'herbe et ils regardent passer un bateau. Julie prend des photos.

L'après-midi, ils rentrent tranquillement. Ils font 40 kilomètres en tout ! Thomas a un peu mal aux jambes, mais il est content. « Dimanche prochain, on va aller encore plus loin ! » dit Julie.`, `
le canal|kanal|canal
la balade|gezinti|ride, outing
partir|yola çıkmak|to set off, to leave
le chemin|yol, patika|path
plat / plate|düz|flat
le bateau|tekne|boat
lentement|yavaşça|slowly
l'ombre (f.)|gölge|shade
l'écluse (f.)|kanal kilidi (gemi geçiş havuzu)|(canal) lock`, [
      Q("Où habitent Thomas et Julie ?", ["À Bordeaux", "À Toulouse", "À Nantes"], 1),
      Q("Qu'est-ce qu'il y a dans leur sac ?", ["De l'eau, des fruits, des sandwichs", "Un pull, une carte, un livre", "Du café, des gâteaux, une pomme"], 0),
      Q("Comment avancent les bateaux ?", ["Très vite", "Assez vite", "Très lentement"], 2),
      Q("Où s'arrêtent-ils à midi ?", ["Dans un restaurant", "Près d'une écluse", "Chez des amis"], 1),
      Q("Combien de kilomètres font-ils ?", ["14 kilomètres", "60 kilomètres", "40 kilomètres"], 2)
    ]),

    R("r-cours-soir", "A1", "Le cours de français du soir", "Akşam Fransızca kursu", "The evening French class", `
Ana est brésilienne. Elle a 27 ans et elle habite à Lille avec son mari. La journée, elle travaille dans un hôtel. Le mardi et le jeudi soir, elle va au cours de français.

Le cours commence à 18 h 30 et finit à 20 heures. Il a lieu dans une école, près de la mairie. Il coûte 30 € par an : ce n'est pas cher ! Dans la classe, il y a douze élèves. Ils viennent du Maroc, d'Ukraine, de Chine, d'Espagne…

Le professeur s'appelle Mathieu. Il est patient et très drôle. Il parle lentement et il écrit beaucoup au tableau. Les élèves lisent des textes, écoutent des dialogues et jouent de petites scènes : au marché, à la poste, chez le médecin.

Ana adore la pause. Les élèves boivent un thé et ils parlent ensemble… en français, bien sûr ! C'est difficile, mais tout le monde rit et tout le monde s'aide.

Ce soir, Ana a un peu peur : elle va présenter son pays devant la classe. Elle va montrer des photos de Rio et parler de la musique brésilienne.`, `
le cours du soir|akşam kursu|evening class
l'élève (m./f.)|öğrenci|student, pupil
finir|bitmek, bitirmek|to finish
avoir lieu|yapılmak, gerçekleşmek|to take place
patient / patiente|sabırlı|patient
drôle|komik, eğlenceli|funny
le tableau|tahta|board
la pause|ara, mola|break
avoir peur|korkmak|to be scared`, [
      Q("Où travaille Ana ?", ["Dans une école", "Dans un hôpital", "Dans un hôtel"], 2),
      Q("Combien d'élèves y a-t-il dans la classe ?", ["Douze", "Vingt", "Huit"], 0),
      Q("Comment est le professeur ?", ["Sévère et sérieux", "Patient et drôle", "Jeune et timide"], 1),
      Q("Que font les élèves pendant la pause ?", ["Ils font un examen", "Ils regardent un film", "Ils boivent un thé"], 2),
      Q("Qu'est-ce qu'Ana va présenter ce soir ?", ["Son pays", "Sa famille", "Son travail"], 0)
    ]),

    R("r-boite-lettres", "A1", "Ma boîte aux lettres", "Posta kutum", "My letterbox", `
Je m'appelle Karim. J'habite au troisième étage d'un immeuble. En bas, dans l'entrée, il y a les boîtes aux lettres. Ma boîte est petite et grise, avec mon nom dessus. Je l'ouvre tous les soirs, quand je rentre du travail.

Dans ma boîte, il y a souvent des publicités : des pizzas, des supermarchés, des magasins de meubles. Je ne lis pas ces papiers. Je les mets tout de suite dans la poubelle jaune, pour le recyclage.

Il y a aussi des factures : l'électricité, internet, le téléphone. Je n'aime pas les factures ! Mais aujourd'hui, beaucoup de factures arrivent par e-mail. Alors, j'ai moins de papier.

Parfois, il y a une bonne surprise. Aujourd'hui, par exemple, il y a une carte postale de ma sœur. Elle est en vacances au Portugal. Sur la photo, il y a la mer et un joli village blanc.

Il y a aussi un petit papier jaune de La Poste : un colis pour moi ! Le facteur passe le matin, et moi, je travaille. Demain, je vais aller chercher mon colis au bureau de poste.`, `
la boîte aux lettres|posta kutusu|letterbox, mailbox
l'immeuble (m.)|apartman binası|block of flats
l'entrée (f.)|giriş|entrance hall
la publicité|reklam broşürü|advert, flyer
la poubelle|çöp kutusu|bin
la facture|fatura|bill
le colis|koli, paket|parcel
le facteur|postacı|postman
aller chercher|gidip almak|to go and get, to collect`, [
      Q("À quel étage habite Karim ?", ["Au premier étage", "Au troisième étage", "Au cinquième étage"], 1),
      Q("Que fait Karim avec les publicités ?", ["Il les lit le soir", "Il les donne à sa sœur", "Il les met à la poubelle"], 2),
      Q("Comment arrivent beaucoup de factures aujourd'hui ?", ["Par e-mail", "Par le facteur", "Par téléphone"], 0),
      Q("D'où vient la carte postale ?", ["D'Espagne", "D'Italie", "Du Portugal"], 2),
      Q("Pourquoi Karim n'a-t-il pas son colis ?", ["Il travaille le matin", "Il est en vacances", "Il habite trop loin"], 0)
    ]),

    R("r-mediatheque", "A1", "Un après-midi à la médiathèque", "Kütüphanede bir öğleden sonra", "An afternoon at the media library", `
Le mercredi après-midi, beaucoup d'enfants en France n'ont pas école. Alors, Sophie va à la médiathèque avec sa fille, Léa. Léa a sept ans. La médiathèque est grande et moderne, avec de grandes fenêtres.

Il n'y a pas seulement des livres. Il y a aussi des films, des CD de musique, des jeux vidéo et des journaux. Il y a des ordinateurs pour aller sur internet. Et c'est gratuit pour les habitants de la ville !

À 15 heures, il y a « l'heure du conte » pour les enfants. Une bibliothécaire lit des histoires. Les enfants s'assoient sur des coussins et ils écoutent. Léa adore ce moment.

Pendant ce temps, Sophie lit un magazine de cuisine dans un fauteuil. C'est calme. Les gens parlent doucement. Sophie aime beaucoup cette petite pause.

Avant de partir, Léa choisit trois livres : un livre sur les dinosaures, une BD et une histoire de princesse. Sophie emprunte un film. Elles vont tout rendre dans trois semaines. Ce soir, elles vont lire ensemble dans le lit de Léa.`, `
la médiathèque|medya kütüphanesi, kütüphane|media library
gratuit / gratuite|ücretsiz|free
l'habitant (m.)|(bir yerde) oturan kişi, sakin|resident
le conte|masal|tale, story
la bibliothécaire|kütüphaneci|librarian
le coussin|minder|cushion
le fauteuil|koltuk|armchair
emprunter|ödünç almak|to borrow
rendre|geri vermek, iade etmek|to give back, to return`, [
      Q("Quel jour Sophie va-t-elle à la médiathèque ?", ["Le samedi", "Le mercredi", "Le lundi"], 1),
      Q("Combien coûte la médiathèque pour les habitants ?", ["C'est gratuit", "10 € par an", "5 € par mois"], 0),
      Q("Que fait la bibliothécaire à 15 heures ?", ["Elle range les livres", "Elle lit des histoires", "Elle ferme la salle"], 1),
      Q("Que fait Sophie pendant l'heure du conte ?", ["Elle lit un magazine", "Elle va sur internet", "Elle regarde un film"], 0),
      Q("Combien de livres Léa choisit-elle ?", ["Un", "Cinq", "Trois"], 2)
    ]),

    R("r-mon-frigo", "A1", "Dans mon frigo", "Buzdolabımda", "In my fridge", `
Je m'appelle Lucas. Je suis étudiant et j'habite seul dans un petit studio. Mon frigo est petit aussi ! Ce soir, j'ouvre la porte et je regarde : qu'est-ce que je vais manger ?

En haut, il y a du fromage : un morceau de comté et un camembert. Il y a aussi trois yaourts nature et un pot de confiture. Dans la porte, il y a une bouteille de lait, du beurre et six œufs.

En bas, dans le bac à légumes, il y a deux tomates, une salade et des carottes. Mais la salade n'est pas très belle… Il n'y a pas de viande et pas de poisson. Je ne mange pas beaucoup de viande, c'est cher.

Bon, j'ai une idée : je vais faire une omelette au fromage avec une salade de tomates. C'est simple, rapide et bon. Comme dessert, je vais prendre un yaourt avec de la confiture.

Demain, je vais faire les courses au supermarché. Sur ma liste, il y a du lait, des pommes, du pain, du riz et du poulet. Et peut-être un peu de chocolat !`, `
le frigo|buzdolabı|fridge
seul / seule|yalnız|alone
le morceau|parça|piece
le yaourt nature|sade yoğurt|plain yoghurt
la confiture|reçel|jam
le beurre|tereyağı|butter
le bac à légumes|sebzelik|vegetable drawer
la viande|et|meat
faire les courses|alışveriş yapmak|to do the shopping`, [
      Q("Où habite Lucas ?", ["Chez ses parents", "Dans un petit studio", "Dans une grande maison"], 1),
      Q("Combien d'œufs y a-t-il dans le frigo ?", ["Trois", "Six", "Deux"], 1),
      Q("Pourquoi Lucas ne mange-t-il pas beaucoup de viande ?", ["Il n'aime pas ça", "Il est malade", "C'est cher"], 2),
      Q("Qu'est-ce que Lucas va préparer ce soir ?", ["Une soupe de carottes", "Une omelette au fromage", "Des pâtes au poulet"], 1),
      Q("Qu'est-ce qu'il y a sur la liste de courses ?", ["Du lait et du riz", "Du poisson et du vin", "Du café et du sucre"], 0)
    ]),

    R("r-marche-nordique", "A1", "La marche nordique", "Nordic yürüyüş", "Nordic walking", `
Monique a 62 ans. Elle est à la retraite et elle habite à Annecy. Elle n'aime pas courir, mais elle aime bouger. Alors, chaque jeudi matin, elle fait de la marche nordique avec un club.

La marche nordique, c'est une marche rapide avec deux bâtons. Avec les bâtons, on travaille les bras, les épaules et le dos, pas seulement les jambes. C'est un sport complet et doux pour les genoux.

Le groupe a rendez-vous à 9 heures au bord du lac. D'abord, Pierre, le moniteur, fait un échauffement de dix minutes. Ensuite, le groupe marche pendant une heure et demie. À la fin, tout le monde fait des étirements.

Dans le groupe, il y a douze personnes. Elles marchent et elles parlent en même temps. Monique adore ce moment : elle respire bien, elle voit le lac et les montagnes, et elle a de nouvelles amies.

La semaine prochaine, le club va faire une sortie spéciale à la montagne. Monique va acheter de nouvelles chaussures. Elle est un peu fatiguée après la marche, mais elle dort très bien la nuit !`, `
être à la retraite|emekli olmak|to be retired
bouger|hareket etmek|to move, to be active
le bâton|yürüyüş batonu|pole
l'épaule (f.)|omuz|shoulder
doux / douce|yumuşak, nazik|gentle
le moniteur|eğitmen|instructor
l'échauffement (m.)|ısınma|warm-up
les étirements (m.)|esneme hareketleri|stretches
respirer|nefes almak|to breathe`, [
      Q("Où habite Monique ?", ["À Annecy", "À Grenoble", "À Chamonix"], 0),
      Q("Quand Monique fait-elle de la marche nordique ?", ["Le dimanche après-midi", "Le samedi soir", "Le jeudi matin"], 2),
      Q("Avec quoi marche-t-on en marche nordique ?", ["Avec un sac à dos", "Avec deux bâtons", "Avec un chien"], 1),
      Q("Qui est Pierre ?", ["Le mari de Monique", "Le moniteur du club", "Le fils de Monique"], 1),
      Q("Que fait le groupe à la fin ?", ["Des étirements", "Un pique-nique", "Une course"], 0)
    ]),

    R("r-nouvel-an", "A1", "Le Nouvel An", "Yılbaşı", "New Year's Eve", `
Ce soir, c'est le 31 décembre. En France, on appelle cette soirée « le réveillon du Nouvel An » ou « la Saint-Sylvestre ». Inès va fêter le Nouvel An chez son amie Camille, avec huit amis.

Chaque personne apporte quelque chose. Inès apporte une bouteille de champagne et des petits fours. Camille prépare un grand plat de saumon et un gâteau au chocolat comme dessert.

Après le dîner, les amis dansent et jouent à des jeux. Juste avant minuit, tout le monde regarde la télévision. Ensemble, ils comptent : « Dix, neuf, huit… trois, deux, un… Bonne année ! »

À minuit, les amis se font la bise. Ils disent « Bonne année, bonne santé ! ». Dans la rue, il y a beaucoup de bruit : les gens crient et les voitures klaxonnent.

Inès a aussi une petite tradition : elle écrit ses bonnes résolutions sur un papier. Cette année, elle va faire du sport deux fois par semaine et elle va apprendre l'espagnol. Et elle va moins regarder son téléphone… peut-être !`, `
le réveillon|yılbaşı (ya da Noel) gecesi yemeği|New Year's Eve (or Christmas Eve) dinner
fêter|kutlamak|to celebrate
apporter|getirmek|to bring
les petits fours (m.)|küçük atıştırmalıklar|bite-sized party snacks
le saumon|somon|salmon
minuit|gece yarısı|midnight
compter|saymak|to count
faire la bise|yanaktan öpmek|to kiss on the cheek
la bonne résolution|yeni yıl kararı|New Year's resolution`, [
      Q("Chez qui Inès fête-t-elle le Nouvel An ?", ["Chez sa tante Sophie", "Chez son amie Camille", "Chez son voisin Marc"], 1),
      Q("Qu'est-ce qu'Inès apporte ?", ["Du champagne et des petits fours", "Du saumon et une salade verte", "Un gâteau et un bouquet de fleurs"], 0),
      Q("Que font les amis juste avant minuit ?", ["Ils sortent dans la rue", "Ils mangent le dessert", "Ils comptent ensemble"], 2),
      Q("Qu'est-ce qu'on dit à minuit ?", ["« Bon anniversaire ! »", "« Joyeux Noël ! »", "« Bonne année ! »"], 2),
      Q("Qu'est-ce qu'Inès va faire cette année ?", ["Apprendre l'espagnol", "Partir en Espagne", "Changer de travail"], 0)
    ]),

    R("r-journee-pluie", "A1", "Une journée de pluie", "Yağmurlu bir gün", "A rainy day", `
Aujourd'hui, c'est samedi et il pleut à Brest. Il pleut beaucoup ! Le ciel est gris et il y a du vent. Nadia et ses deux enfants, Yanis et Sara, restent à la maison. Le parc, ce n'est pas possible aujourd'hui.

Le matin, les enfants sont un peu tristes. Alors Nadia a une idée : elle va faire un gâteau au yaourt avec eux. Yanis met les œufs, Sara met le sucre et la farine. La cuisine sent bon !

L'après-midi, ils jouent aux cartes et ils font un grand puzzle sur la table du salon. Ensuite, ils construisent une cabane avec des chaises et des couvertures. Les enfants adorent ça.

Vers 17 heures, la pluie est moins forte. Les enfants mettent leurs bottes et leurs imperméables. Ils sortent dix minutes dans la rue et ils sautent dans les flaques d'eau. Ils rient beaucoup !

Le soir, tout le monde regarde un film sous une couverture, avec un chocolat chaud. « La pluie, c'est bien aussi ! » dit Sara. Demain, la météo annonce du soleil : ils vont aller à la plage.`, `
il pleut (pleuvoir)|yağmur yağıyor|it's raining
le ciel|gökyüzü|sky
triste|üzgün|sad
la farine|un|flour
la cabane|kulübe|den, hut
la couverture|battaniye|blanket
les bottes (f.)|çizme|boots
l'imperméable (m.)|yağmurluk|raincoat
la flaque d'eau|su birikintisi|puddle`, [
      Q("Dans quelle ville habite Nadia ?", ["À Rennes", "À Nantes", "À Brest"], 2),
      Q("Qu'est-ce qu'ils préparent le matin ?", ["Un gâteau au yaourt", "Une tarte aux pommes", "Une soupe de légumes"], 0),
      Q("Avec quoi construisent-ils une cabane ?", ["Avec des cartons et du scotch", "Avec des chaises et des couvertures", "Avec des planches et des clous"], 1),
      Q("Que font les enfants dehors ?", ["Ils font du vélo", "Ils sautent dans les flaques", "Ils jouent au foot"], 1),
      Q("Où vont-ils aller demain ?", ["À la plage", "Au cinéma", "Chez Mamie"], 0)
    ]),

    R("r-tram", "A1", "Le tram de ma ville", "Şehrimin tramvayı", "My city's tram", `
Fatou habite à Bordeaux. Elle n'a pas de voiture. Pour aller au travail, elle prend le tram. À Bordeaux, il y a quatre lignes de tram : A, B, C et D. Fatou prend la ligne B tous les matins.

L'arrêt de tram est à cinq minutes de chez elle. Fatou a un abonnement. Avant de monter, elle passe sa carte devant une petite machine : bip ! C'est simple et rapide.

Le tram est moderne, propre et silencieux. Le matin, il y a beaucoup de monde. Fatou reste souvent debout. Elle écoute de la musique ou elle regarde la ville par la fenêtre : les quais, le fleuve, les vieux bâtiments.

Le trajet dure vingt minutes. Il y a un tram toutes les cinq minutes, alors Fatou n'attend jamais longtemps. Elle descend à l'arrêt « Victoire ». Sa librairie est juste en face.

Le week-end, Fatou prend aussi le tram pour aller au cinéma ou voir ses amis. Pour elle, le tram, c'est rapide, écologique et pratique. Samedi, elle va prendre la ligne A avec sa sœur pour aller au marché.`, `
la ligne|hat|line
l'arrêt (m.)|durak|stop
l'abonnement (m.)|abonman, aylık kart|travel pass, season ticket
monter|binmek|to get on
propre|temiz|clean
debout|ayakta|standing
le trajet|yolculuk|journey
descendre|inmek|to get off
en face|karşıda|opposite`, [
      Q("Comment Fatou va-t-elle au travail ?", ["En voiture", "En tram", "À vélo"], 1),
      Q("Combien de lignes de tram y a-t-il à Bordeaux ?", ["Quatre", "Deux", "Six"], 0),
      Q("Que fait Fatou dans le tram le matin ?", ["Elle lit un livre", "Elle dort un peu", "Elle écoute de la musique"], 2),
      Q("Combien de temps dure le trajet ?", ["Cinq minutes", "Vingt minutes", "Une heure"], 1),
      Q("Où travaille Fatou ?", ["Dans une pharmacie", "Dans une banque", "Dans une librairie"], 2)
    ]),

    R("r-balcon", "A1", "Mon balcon et mes plantes", "Balkonum ve bitkilerim", "My balcony and my plants", `
Je m'appelle Yasmine et j'habite dans un appartement à Marseille. Je n'ai pas de jardin, mais j'ai un petit balcon. Il est au soleil l'après-midi. C'est mon endroit préféré !

Sur mon balcon, il y a beaucoup de plantes. Il y a des fleurs rouges et roses, un petit citronnier et des herbes aromatiques : du basilic, de la menthe et du thym. J'utilise les herbes pour cuisiner. Avec la menthe, je fais du thé.

En été, il fait très chaud à Marseille. Alors, j'arrose mes plantes tous les soirs, quand le soleil est moins fort. Le matin, je bois mon café sur le balcon, au milieu de mes fleurs. C'est calme et ça sent bon.

Mes plantes ont besoin de moi, mais elles me font du bien aussi. Quand je suis stressée, je m'occupe d'elles et je me sens mieux. Cette année, je vais aussi essayer de faire pousser des tomates.

Le mois prochain, je vais partir en vacances pendant deux semaines. Ma voisine, Madame Costa, va arroser mes plantes. Pour lui dire merci, je vais lui donner un pot de basilic !`, `
le balcon|balkon|balcony
l'endroit (m.)|yer|place, spot
le citronnier|limon ağacı|lemon tree
les herbes aromatiques (f.)|aromatik otlar|herbs
la menthe|nane|mint
arroser|sulamak|to water
avoir besoin de|-e ihtiyacı olmak|to need
s'occuper de|ilgilenmek, bakmak|to look after
le pot|saksı|pot`, [
      Q("Où habite Yasmine ?", ["À Nice", "À Marseille", "À Montpellier"], 1),
      Q("Que fait Yasmine avec la menthe ?", ["Du thé", "Une salade", "Un gâteau"], 0),
      Q("Quand Yasmine arrose-t-elle ses plantes en été ?", ["Le matin très tôt", "À midi", "Tous les soirs"], 2),
      Q("Que fait Yasmine quand elle est stressée ?", ["Elle va courir au parc", "Elle téléphone à sa mère", "Elle s'occupe de ses plantes"], 2),
      Q("Qui va arroser les plantes pendant les vacances ?", ["Sa voisine", "Sa sœur", "Son ami"], 0)
    ])
  );
})();
