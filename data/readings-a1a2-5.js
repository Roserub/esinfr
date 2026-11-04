/* Graded readings, A1 set 5: a car boot sale, a neighbourhood, a baker's day, vegetable soup, a community garden, a snow day, a new gym, a dance class, a football match on TV and a farm.
   Same format as data/readings.js: { id, level, t:{fr,tr,en}, text, gloss: [fr, tr, en][], qs: [{ q, o, a }] }. */
(function () {
  const G = s => s.trim().split("\n").map(l => l.split("|").map(x => x.trim()));
  const Q = (q, o, a) => ({ q, o, a });
  const R = (id, level, fr, tr, en, text, gloss, qs) => ({ id, level, t: { fr, tr, en }, text: text.trim(), gloss: G(gloss), qs });

  window.READINGS = window.READINGS || [];
  window.READINGS.push(
    R("r-vide-grenier", "A1", "Le vide-grenier", "Bit pazarı", "The car boot sale", `
Dimanche, il y a un vide-grenier dans ma rue. Je m'appelle Claire et je vais vendre de vieilles choses : des livres, des vêtements et une lampe. Je vais me lever à 6 heures, parce que le vide-grenier commence à 7 heures !

Ce soir, je prépare mes cartons avec mon fils, Hugo. Il a dix ans. Il va vendre ses vieux jouets et ses bandes dessinées. Il est très content : il veut acheter un ballon de foot avec l'argent.

Les prix sont bas. Un livre coûte 1 €, un pull coûte 3 € et la lampe coûte 5 €. Les gens aiment négocier les prix. C'est normal, c'est le jeu !

Il y a aussi des voisins avec des gâteaux et du café. L'ambiance est toujours sympa. On parle, on rit et on regarde les tables des autres.

À la fin de la journée, je vais avoir moins de choses à la maison et un peu d'argent. Et Hugo va peut-être acheter des jouets… chez les voisins !`, `
le vide-grenier|bit pazarı, ikinci el pazarı|car boot sale, yard sale
vendre|satmak|to sell
vieux / vieille|eski|old
le carton|karton kutu|cardboard box
le jouet|oyuncak|toy
la bande dessinée (la BD)|çizgi roman|comic book
coûter|(fiyatı) tutmak|to cost
négocier|pazarlık yapmak|to haggle
l'ambiance (f.)|ortam, hava|atmosphere`, [
      Q("Quel jour est le vide-grenier ?", ["Dimanche", "Samedi", "Mercredi"], 0),
      Q("Qu'est-ce que Hugo va vendre ?", ["Des livres et une lampe", "Des pulls et des vestes", "Ses jouets et ses BD"], 2),
      Q("Combien coûte la lampe ?", ["1 €", "5 €", "3 €"], 1),
      Q("Qu'est-ce que Hugo veut acheter ?", ["Un ballon de foot", "Un vélo rouge", "Un jeu vidéo"], 0),
      Q("Qu'est-ce que les gens aiment faire ?", ["Arriver très tard", "Vendre leur voiture", "Négocier les prix"], 2)
    ]),

    R("r-mon-quartier", "A1", "Mon quartier", "Mahallem", "My neighbourhood", `
Je m'appelle Malik. J'habite dans le quartier Saint-Cyprien, à Toulouse. C'est un quartier vivant, avec beaucoup de petits magasins et de cafés. J'aime bien mon quartier.

En bas de chez moi, il y a une boulangerie. Chaque matin, j'achète une baguette et je dis bonjour à Madame Roux, la boulangère. À côté, il y a une pharmacie et un petit supermarché. Le supermarché ferme à 22 heures : c'est pratique !

Le mardi et le samedi, il y a un marché sur la place. J'achète des fruits, des légumes et des fleurs. Près de la place, il y a aussi une bibliothèque et un jardin public avec des jeux pour les enfants.

Pour aller au travail, je prends le métro. La station est à deux minutes à pied. Le centre-ville est juste de l'autre côté du fleuve, la Garonne.

Il y a un petit problème : le quartier est un peu bruyant le soir. Mais ce n'est pas grave. Ce week-end, je vais inviter mes amis et je vais leur montrer mon quartier.`, `
le quartier|mahalle, semt|neighbourhood
vivant / vivante|canlı, hareketli|lively
en bas de chez moi|evimin altında|downstairs from my flat
à côté|yanında, bitişikte|next door
fermer|kapanmak, kapatmak|to close
la place|meydan|square
à pied|yürüyerek|on foot
le fleuve|nehir|river
bruyant / bruyante|gürültülü|noisy`, [
      Q("Dans quelle ville habite Malik ?", ["À Lyon", "À Toulouse", "À Marseille"], 1),
      Q("Qui est Madame Roux ?", ["La boulangère", "La pharmacienne", "La professeure"], 0),
      Q("Quand y a-t-il un marché ?", ["Le lundi et le jeudi", "Le mercredi et le vendredi", "Le mardi et le samedi"], 2),
      Q("Comment Malik va-t-il au travail ?", ["En bus", "En métro", "À vélo"], 1),
      Q("Quel est le problème du quartier ?", ["Il est bruyant le soir", "Il n'a pas de magasins", "Il est loin du métro"], 0)
    ]),

    R("r-journee-boulanger", "A1", "La journée d'un boulanger", "Bir fırıncının günü", "A baker's day", `
Bernard est boulanger à Dijon. Sa journée ne ressemble pas à notre journée : il se lève à 3 heures du matin ! Quand il commence le travail, la ville dort.

À 3 h 30, il est dans sa boulangerie. Il prépare la pâte avec de la farine, de l'eau, du sel et de la levure. Ensuite, il fait les baguettes, les croissants et les pains au chocolat. Le four est très chaud.

À 7 heures, sa femme, Nadia, ouvre le magasin. Les premiers clients arrivent. Ils achètent une baguette pour le petit-déjeuner ou des croissants pour le bureau. Une baguette coûte 1,20 €.

Bernard travaille jusqu'à 13 heures. Après le déjeuner, il fait une sieste de deux heures. Le soir, il se couche à 21 heures. Le lundi, la boulangerie est fermée : c'est son jour de repos.

Bernard aime son métier. « C'est fatigant, dit-il, mais l'odeur du pain chaud le matin, c'est magique ! » Cette semaine, il va essayer une nouvelle recette : un pain aux noix.`, `
le boulanger / la boulangère|fırıncı|baker
la pâte|hamur|dough
la farine|un|flour
la levure|maya|yeast
le four|fırın|oven
la sieste|öğle uykusu, şekerleme|nap
le jour de repos|izin günü|day off
l'odeur (f.)|koku|smell
la noix|ceviz|walnut`, [
      Q("À quelle heure Bernard se lève-t-il ?", ["À 6 heures", "À 5 heures", "À 3 heures"], 2),
      Q("Qui ouvre le magasin à 7 heures ?", ["Son fils Léo", "Sa femme Nadia", "Son ami Paul"], 1),
      Q("Que fait Bernard après le déjeuner ?", ["Il fait une sieste", "Il fait du sport", "Il fait les courses"], 0),
      Q("Quel jour la boulangerie est-elle fermée ?", ["Le samedi", "Le dimanche", "Le lundi"], 2),
      Q("Quelle nouvelle recette va-t-il essayer ?", ["Un gâteau au chocolat", "Un pain aux noix", "Une tarte aux pommes"], 1)
    ]),

    R("r-soupe-legumes", "A1", "Ma soupe de légumes", "Sebze çorbam", "My vegetable soup", `
Je m'appelle Robert et j'ai 70 ans. En hiver, je fais souvent une soupe de légumes. C'est simple, pas cher et très bon pour la santé. Aujourd'hui, je vais vous donner ma recette.

Pour quatre personnes, il faut trois carottes, deux pommes de terre, un poireau, un oignon et un litre d'eau. Il faut aussi un peu de sel, du poivre et un morceau de beurre.

D'abord, je lave et j'épluche les légumes. Ensuite, je coupe tout en petits morceaux. Je mets le beurre dans une grande casserole et je fais cuire l'oignon pendant cinq minutes.

Après, j'ajoute les autres légumes et l'eau. Je laisse cuire trente minutes. À la fin, je mixe la soupe et j'ajoute le sel et le poivre. Voilà, c'est prêt !

Ce soir, ma petite-fille Inès va venir dîner. Elle adore ma soupe avec un peu de fromage râpé et du pain grillé. Bon appétit !`, `
la soupe|çorba|soup
la pomme de terre|patates|potato
le poireau|pırasa|leek
éplucher|soymak|to peel
la casserole|tencere|saucepan
faire cuire|pişirmek|to cook
ajouter|eklemek|to add
mixer|blenderdan geçirmek|to blend
râpé / râpée|rendelenmiş|grated`, [
      Q("Quand Robert fait-il souvent cette soupe ?", ["En hiver", "En été", "Au printemps"], 0),
      Q("Combien de carottes faut-il ?", ["Deux", "Trois", "Quatre"], 1),
      Q("Que fait Robert d'abord ?", ["Il mixe la soupe", "Il fait cuire l'oignon", "Il lave les légumes"], 2),
      Q("Combien de temps la soupe cuit-elle ?", ["Dix minutes", "Trente minutes", "Une heure"], 1),
      Q("Qui va venir dîner ce soir ?", ["Sa petite-fille", "Son voisin", "Son médecin"], 0)
    ]),

    R("r-jardin-partage", "A1", "Le jardin partagé", "Ortak bahçe", "The community garden", `
Dans mon immeuble, à Nantes, il y a un jardin partagé. C'est un petit jardin pour tous les habitants. Chaque famille a un petit carré de terre, et tout le monde s'occupe des fleurs ensemble.

Je m'appelle Fatou. Mon carré est à côté du carré de Monsieur Le Gall, un vieux monsieur très gentil. Il connaît tout sur les plantes ! Il m'aide beaucoup, parce que je suis débutante.

Cette année, je cultive des tomates, des salades et des herbes : du basilic et de la menthe. Le samedi matin, je vais au jardin avec mes enfants. On arrose les plantes et on enlève les mauvaises herbes. Les enfants adorent chercher les escargots !

Au mois de juin, nous allons faire une grande fête au jardin. Chaque voisin va apporter un plat. Moi, je vais préparer une salade avec mes tomates et ma menthe.

Le jardin, c'est bon pour le moral. On est dehors, on parle avec les voisins et on mange des légumes frais.`, `
le jardin partagé|ortak bahçe|community garden
l'habitant (m.)|sakin, orada oturan kişi|resident
le carré de terre|küçük toprak parseli|small plot of land
s'occuper de|ilgilenmek, bakmak|to take care of
débutant / débutante|acemi, yeni başlayan|beginner
cultiver|yetiştirmek|to grow
arroser|sulamak|to water
les mauvaises herbes (f.)|yabani otlar|weeds
l'escargot (m.)|salyangoz|snail`, [
      Q("Dans quelle ville habite Fatou ?", ["À Rennes", "À Bordeaux", "À Nantes"], 2),
      Q("Qui est Monsieur Le Gall ?", ["Un voisin expert en plantes", "Le directeur de l'immeuble", "Un professeur de musique"], 0),
      Q("Qu'est-ce que Fatou cultive ?", ["Des pommes et des poires", "Des tomates et des salades", "Des carottes et des oignons"], 1),
      Q("Qu'est-ce que les enfants adorent faire ?", ["Manger les tomates", "Courir dans la rue", "Chercher les escargots"], 2),
      Q("Que va préparer Fatou pour la fête ?", ["Un gâteau au chocolat", "Une salade de tomates", "Une soupe de légumes"], 1)
    ]),

    R("r-journee-neige", "A1", "Une journée de neige", "Karlı bir gün", "A snow day", `
Ce matin, à Strasbourg, Lucas ouvre la fenêtre et il crie : « Maman, il neige ! » Tout est blanc : les rues, les voitures et les arbres. Il fait moins deux degrés.

À la radio, on annonce : « Aujourd'hui, les écoles sont fermées à cause de la neige. » Lucas a neuf ans. Il saute de joie ! Pas d'école aujourd'hui !

Sa maman, Anne, travaille à la maison aujourd'hui. Elle ne va pas prendre la voiture : c'est trop dangereux. Lucas met son manteau, son bonnet, ses gants et ses bottes. Il va jouer dehors avec Zoé, la petite voisine.

Les deux enfants font un grand bonhomme de neige dans le jardin. Il a une carotte pour le nez et une vieille écharpe rouge. Après, ils font une bataille de boules de neige.

À midi, Lucas rentre. Il a froid aux mains et il a le nez rouge. Anne prépare un chocolat chaud. Cet après-midi, ils vont regarder un film sous une couverture. Quelle belle journée !`, `
neiger|kar yağmak|to snow
crier|bağırmak|to shout
à cause de|… yüzünden|because of
sauter de joie|sevinçten havaya zıplamak|to jump for joy
les gants (m.)|eldiven|gloves
les bottes (f.)|çizme|boots
le bonhomme de neige|kardan adam|snowman
la bataille de boules de neige|kartopu savaşı|snowball fight
la couverture|battaniye|blanket`, [
      Q("Quelle température fait-il ?", ["Plus cinq degrés", "Moins deux degrés", "Moins dix degrés"], 1),
      Q("Pourquoi Lucas saute-t-il de joie ?", ["Il va à la montagne", "C'est son anniversaire", "Les écoles sont fermées"], 2),
      Q("Pourquoi Anne ne va-t-elle pas prendre la voiture ?", ["C'est trop dangereux", "La voiture est en panne", "Elle n'a pas d'essence"], 0),
      Q("Qu'est-ce que le bonhomme de neige a pour le nez ?", ["Une carotte", "Une pomme", "Un bouton"], 0),
      Q("Qu'est-ce qu'Anne prépare à midi ?", ["Une soupe chaude", "Un thé au citron", "Un chocolat chaud"], 2)
    ]),

    R("r-nouvelle-salle", "A1", "La nouvelle salle de sport", "Yeni spor salonu", "The new gym", `
Une nouvelle salle de sport va ouvrir dans mon quartier, rue Victor-Hugo ! Il y a une grande affiche devant la boulangerie. L'ouverture, c'est lundi prochain, à 6 heures du matin.

La salle est grande et moderne. Il y a des machines pour la musculation, des vélos, des tapis de course et une salle pour les cours collectifs : yoga, pilates, zumba et boxe. Il y a aussi des vestiaires avec des douches.

La salle est ouverte tous les jours, de 6 heures à 23 heures. L'abonnement coûte 29 € par mois. Pour l'ouverture, le premier mois est gratuit !

Je m'appelle Julien et je ne suis pas très sportif. Je travaille devant un ordinateur toute la journée et j'ai souvent mal au dos. Alors, je vais essayer. Lundi soir, je vais aller à la salle avec mon collègue Bastien.

Nous allons commencer doucement : vingt minutes de vélo et un peu de musculation. Et peut-être un cours de zumba… On va bien rigoler !`, `
ouvrir|açmak, açılmak|to open
l'affiche (f.)|afiş|poster
l'ouverture (f.)|açılış|opening
la musculation|ağırlık antrenmanı|weight training
le tapis de course|koşu bandı|treadmill
les cours collectifs (m.)|grup dersleri|group classes
le vestiaire|soyunma odası|changing room
gratuit / gratuite|ücretsiz|free
rigoler|gülmek, eğlenmek|to have a laugh`, [
      Q("Où est l'affiche ?", ["Devant la boulangerie", "Dans le métro", "Sur son téléphone"], 0),
      Q("Combien coûte l'abonnement ?", ["19 € par mois", "29 € par mois", "39 € par mois"], 1),
      Q("Quels sont les horaires de la salle ?", ["De 8 heures à 20 heures", "De 7 heures à 22 heures", "De 6 heures à 23 heures"], 2),
      Q("Pourquoi Julien a-t-il souvent mal au dos ?", ["Il travaille sur ordinateur", "Il porte des sacs lourds", "Il dort sur un vieux lit"], 0),
      Q("Avec qui va-t-il aller à la salle ?", ["Avec sa sœur", "Avec son collègue", "Avec son voisin"], 1)
    ]),

    R("r-cours-danse", "A1", "Le cours de danse", "Dans dersi", "The dance class", `
Le jeudi soir, Camille et son mari Antoine vont à un cours de danse. Ils apprennent la salsa ! Le cours est dans une petite salle, près de la mairie. Il commence à 20 heures et il dure une heure.

Leur professeure s'appelle Rosa. Elle est cubaine et elle danse très bien. Elle est patiente et toujours souriante. Elle dit souvent : « Ce n'est pas grave ! On recommence. »

Au début du cours, tout le monde fait un petit échauffement. Ensuite, Rosa montre les pas : un, deux, trois… cinq, six, sept. Les couples répètent avec la musique. Antoine n'est pas très doué : il marche souvent sur les pieds de Camille ! Mais ils rient beaucoup.

Dans le groupe, il y a dix couples. Il y a des jeunes et des moins jeunes. Après le cours, les danseurs boivent souvent un verre ensemble au café d'à côté.

Dans un mois, l'école de danse va organiser une grande soirée. Camille et Antoine vont danser devant leurs amis. Ils sont un peu stressés, mais très motivés !`, `
apprendre|öğrenmek|to learn
durer|sürmek|to last
patient / patiente|sabırlı|patient
souriant / souriante|güler yüzlü|cheerful, smiling
l'échauffement (m.)|ısınma|warm-up
le pas|adım|step
répéter|tekrarlamak, prova yapmak|to repeat, to practise
doué / douée|yetenekli|gifted, good at something
boire un verre|bir şeyler içmek|to have a drink`, [
      Q("Quand est le cours de danse ?", ["Le mardi matin", "Le samedi après-midi", "Le jeudi soir"], 2),
      Q("Qui est Rosa ?", ["La professeure", "Une amie de Camille", "La sœur d'Antoine"], 0),
      Q("Qu'est-ce qu'Antoine fait souvent ?", ["Il quitte le cours avant la fin", "Il marche sur les pieds de Camille", "Il arrive au cours en retard"], 1),
      Q("Combien de couples y a-t-il dans le groupe ?", ["Cinq", "Dix", "Quinze"], 1),
      Q("Que font les danseurs après le cours ?", ["Ils boivent un verre", "Ils vont au cinéma", "Ils dînent chez Rosa"], 0)
    ]),

    R("r-match-tele", "A1", "Un match de foot à la télé", "Televizyonda bir futbol maçı", "A football match on TV", `
Ce soir, il y a un grand match à la télé : la France joue contre l'Espagne. Le match commence à 21 heures. Mehdi adore le foot. Il invite ses amis chez lui pour regarder le match ensemble.

Cet après-midi, il fait les courses. Il achète des chips, des boissons et des pizzas. Sa sœur Yasmine va venir aussi. Elle ne regarde pas souvent le foot, mais elle aime l'ambiance.

À 20 h 30, les amis arrivent. Ils portent le maillot bleu de l'équipe de France. Tout le monde s'installe sur le canapé, devant la télé. Mehdi est très nerveux.

À la 30e minute, la France marque un but ! Tout le monde crie et saute. Mais à la 70e minute, l'Espagne marque aussi. Un partout. Le match est très difficile.

Il reste deux minutes. Un jeune joueur français tire… et c'est le but ! La France gagne deux à un. Ce soir, Mehdi ne va pas dormir tout de suite : il est trop content !`, `
jouer contre|… karşı oynamak|to play against
les boissons (f.)|içecekler|drinks
l'ambiance (f.)|ortam, hava|atmosphere
le maillot|forma|shirt, jersey
l'équipe (f.)|takım|team
s'installer|yerleşmek, oturmak|to settle down, to sit down
marquer un but|gol atmak|to score a goal
un partout|bire bir, berabere|one all
gagner|kazanmak|to win`, [
      Q("Contre quelle équipe joue la France ?", ["L'Italie", "L'Espagne", "L'Allemagne"], 1),
      Q("À quelle heure commence le match ?", ["À 20 heures", "À 20 h 30", "À 21 heures"], 2),
      Q("Qu'est-ce que Mehdi achète ?", ["Des chips et des pizzas", "Des fleurs et un gâteau", "Du pain et du fromage"], 0),
      Q("Quand l'Espagne marque-t-elle ?", ["À la 10e minute", "À la 30e minute", "À la 70e minute"], 2),
      Q("Quel est le résultat du match ?", ["Match nul, un partout", "La France gagne deux à un", "L'Espagne gagne deux à zéro"], 1)
    ]),

    R("r-ferme", "A1", "Une semaine à la ferme", "Çiftlikte bir hafta", "A week on the farm", `
Pendant les vacances de printemps, Emma, sept ans, va passer une semaine chez ses grands-parents. Ils ont une ferme en Normandie, à la campagne. Emma habite à Paris : pour elle, c'est l'aventure !

À la ferme, il y a des vaches, des poules, des cochons, deux chevaux et un vieux chien, Filou. Le matin, Emma se lève tôt avec son grand-père et ils donnent à manger aux animaux.

Emma adore les poules. Chaque matin, elle cherche les œufs dans le poulailler. Avec les œufs, sa grand-mère fait une omelette ou un gâteau. Le lait vient des vaches de la ferme : il est très bon !

L'après-midi, Emma se promène dans les champs avec Filou. Elle ramasse des fleurs. Parfois, son grand-père l'emmène sur le tracteur. Elle trouve ça génial.

Le soir, Emma est très fatiguée. Elle téléphone à ses parents et elle raconte sa journée. « Demain, je vais monter sur un cheval ! » dit-elle. Elle va dormir tôt pour être en forme.`, `
la ferme|çiftlik|farm
la campagne|kırsal bölge, kır|countryside
la vache|inek|cow
la poule|tavuk|hen
donner à manger|yem vermek, beslemek|to feed
l'œuf (m.)|yumurta|egg
le poulailler|kümes|henhouse
le champ|tarla|field
ramasser|toplamak|to pick, to gather`, [
      Q("Où est la ferme des grands-parents ?", ["En Normandie", "En Bretagne", "En Provence"], 0),
      Q("Comment s'appelle le chien ?", ["Milo", "Filou", "Rex"], 1),
      Q("Qu'est-ce qu'Emma cherche chaque matin ?", ["Le chat dans la grange", "Le lait pour le café", "Les œufs des poules"], 2),
      Q("Avec qui Emma se promène-t-elle l'après-midi ?", ["Avec le chien", "Avec sa mamie", "Avec une amie"], 0),
      Q("Qu'est-ce qu'Emma va faire demain ?", ["Rentrer à la maison", "Faire un grand gâteau", "Monter sur un cheval"], 2)
    ])
  );
})();
