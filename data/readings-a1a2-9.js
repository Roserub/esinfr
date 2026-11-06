/* Graded readings, A1 set 9: everyday home and neighbourhood life — a noisy neighbour and his guitar, laundry day and the lost sock, a power cut in the building, a small seventh birthday party and a new grocery shop in the street.
   Same format as data/readings.js: { id, level, t:{fr,tr,en}, text, gloss: [fr, tr, en][], qs: [{ q, o, a }] }. */
(function () {
  const G = s => s.trim().split("\n").map(l => l.split("|").map(x => x.trim()));
  const Q = (q, o, a) => ({ q, o, a });
  const R = (id, level, fr, tr, en, text, gloss, qs) => ({ id, level, t: { fr, tr, en }, text: text.trim(), gloss: G(gloss), qs });

  window.READINGS = window.READINGS || [];
  window.READINGS.push(
    R("r9-voisin-guitare", "A1", "Le voisin et sa guitare", "Komşu ve gitarı", "The neighbour and his guitar", `
Claire a 45 ans. Elle est infirmière à l'hôpital et elle habite au troisième étage d'un immeuble à Lyon. Elle commence le travail très tôt, à six heures du matin. Alors le soir, elle se couche à neuf heures et demie.

Depuis un mois, il y a un nouveau voisin au quatrième étage. Il s'appelle Théo et il a vingt ans. Il est étudiant en musique. Le soir, il joue de la guitare électrique… jusqu'à minuit ! Claire ne dort pas bien. Le matin, elle est très fatiguée.

Un dimanche, Claire prend une boîte de chocolats et elle monte au quatrième. Elle frappe à la porte. Théo ouvre, un peu surpris. Claire sourit et dit : « Bonjour, je suis votre voisine du dessous. Vous jouez très bien, mais le soir, j'entends tout ! » Théo est désolé. Il ne sait pas qu'on entend la musique en bas.

Ensemble, ils trouvent une solution. Théo joue l'après-midi et le soir jusqu'à vingt et une heures, pas après. Après, il met un casque. Et Claire donne son numéro à Théo : en cas de problème, ils s'envoient un message.

Maintenant, Claire dort bien. Et samedi prochain, pour la fête de l'immeuble, Théo va jouer de la guitare dans la cour… avec l'accord de tous les voisins !`, `
l'étage (m.)|kat|floor, storey
se coucher|yatmak|to go to bed
frapper à la porte|kapıyı çalmak|to knock on the door
surpris / surprise|şaşırmış|surprised
la voisine du dessous|alt kat komşusu|downstairs neighbour
désolé / désolée|üzgün, mahcup|sorry
entendre|duymak|to hear
un casque|kulaklık|headphones
la cour|avlu|courtyard
l'accord (m.)|onay, izin|agreement`, [
      Q("Quel est le métier de Claire ?", ["Professeure", "Infirmière", "Boulangère"], 1),
      Q("Pourquoi Claire est-elle fatiguée le matin ?", ["Théo joue de la guitare tard le soir", "Elle travaille la nuit", "Son chat la réveille plusieurs fois par nuit"], 0),
      Q("Qu'est-ce que Claire apporte chez Théo ?", ["Un gâteau", "Des fleurs", "Une boîte de chocolats"], 2),
      Q("Maintenant, jusqu'à quelle heure Théo joue-t-il sans casque ?", ["20 h", "22 h", "Minuit", "21 h"], 3),
      Q("Où Théo va-t-il jouer samedi prochain ?", ["Dans la cour de l'immeuble", "Dans un bar du centre-ville de Lyon", "À l'hôpital"], 0)
    ]),

    R("r9-chaussette-perdue", "A1", "Où est la chaussette bleue ?", "Mavi çorap nerede?", "Where is the blue sock?", `
Le samedi matin, chez Sébastien, c'est le jour de la lessive. Sébastien a vingt-huit ans et il habite seul dans un petit appartement à Lille. Pendant la semaine, il n'a pas le temps : il travaille dans un magasin de vélos.

D'abord, il trie le linge : le blanc d'un côté, les couleurs de l'autre. Ensuite, il met le linge dans la machine à laver avec un peu de lessive. Il choisit le programme à quarante degrés. La machine tourne pendant une heure et demie. Pendant ce temps, Sébastien boit un café et il écoute la radio.

Après, il étend le linge sur un séchoir, près de la fenêtre. Il n'a pas de sèche-linge. Il compte ses chaussettes : il y a onze chaussettes ! Une chaussette bleue est toute seule. Où est l'autre ? Pas dans la machine, pas sous le lit, pas dans le panier à linge…

C'est un grand mystère. Sa grand-mère dit toujours : « La machine à laver mange les chaussettes ! » Sébastien rit, mais il garde la chaussette bleue dans un tiroir. Dans ce tiroir, il y a déjà sept chaussettes toutes seules !

Le dimanche, le linge est sec. Sébastien le plie et il le range dans l'armoire. Et la chaussette bleue ? Un mois plus tard, il trouve sa sœur jumelle… dans la housse de sa couette !`, `
la lessive|çamaşır yıkama; çamaşır deterjanı|laundry; washing powder
trier|ayırmak|to sort
le linge|çamaşır|laundry, washing
la machine à laver|çamaşır makinesi|washing machine
étendre le linge|çamaşır asmak|to hang out the washing
un séchoir|çamaşır kurutmalığı|clothes airer
un sèche-linge|kurutma makinesi|tumble dryer
le panier à linge|kirli sepeti|laundry basket
un tiroir|çekmece|drawer
plier|katlamak|to fold
ranger|yerleştirmek, toplamak|to put away
la housse de couette|nevresim|duvet cover`, [
      Q("Quand Sébastien fait-il la lessive ?", ["Le dimanche soir", "Le samedi matin", "Le mercredi"], 1),
      Q("Quel programme choisit-il ?", ["60 degrés", "30 degrés", "40 degrés"], 2),
      Q("Où le linge sèche-t-il ?", ["Sur un séchoir près de la fenêtre", "Dans un sèche-linge", "Sur le balcon"], 0),
      Q("Combien de chaussettes toutes seules y a-t-il déjà dans le tiroir ?", ["Trois", "Onze", "Une", "Sept"], 3),
      Q("Où Sébastien trouve-t-il l'autre chaussette bleue ?", ["Sous le lit, derrière une valise", "Dans la housse de couette", "Dans la machine à laver"], 1)
    ]),

    R("r9-panne-electricite", "A1", "Le soir de la panne d'électricité", "Elektrik kesintisi akşamı", "The evening of the power cut", `
Mardi soir, il est huit heures. Chez la famille Moreau, au deuxième étage, on prépare le dîner. Tout à coup, plus de lumière ! La télévision s'arrête, le four aussi. C'est une panne d'électricité dans tout l'immeuble.

Monsieur Moreau cherche une lampe de poche. Elle est dans un tiroir de la cuisine… mais elle ne marche pas : il n'y a pas de piles ! Les enfants, Jules et Manon, ont un peu peur dans le noir. Madame Moreau allume des bougies sur la table.

On frappe à la porte. C'est Madame Benali, la voisine d'en face, avec une lampe. « Tout va bien ? J'ai des piles, si vous voulez ! » Dans l'escalier, d'autres voisins arrivent avec leurs téléphones allumés. Tout le monde parle et rit.

Le gratin n'est pas cuit, alors les Moreau invitent Madame Benali. Ils mangent du pain, du fromage et une salade, à la lumière des bougies. Jules et Manon racontent des histoires qui font peur. Madame Benali, elle, chante une chanson de son village, en Algérie.

À dix heures, la lumière revient. Les enfants sont déçus : « Déjà ? » Ce soir-là, les Moreau découvrent deux choses : leur voisine est très gentille… et une panne, c'est parfois une belle soirée !`, `
une panne d'électricité|elektrik kesintisi|power cut
tout à coup|birdenbire|suddenly
le four|fırın|oven
une lampe de poche|el feneri|torch
une pile|pil|battery
avoir peur|korkmak|to be scared
le noir|karanlık|the dark
allumer|yakmak, açmak|to light, to switch on
une bougie|mum|candle
la voisine d'en face|karşı komşu|neighbour across the landing
cuit / cuite|pişmiş|cooked
déçu / déçue|hayal kırıklığına uğramış|disappointed`, [
      Q("Quel soir y a-t-il une panne ?", ["Lundi soir", "Mardi soir", "Samedi soir"], 1),
      Q("Pourquoi la lampe de poche ne marche-t-elle pas ?", ["Il n'y a pas de piles", "Elle est cassée", "Elle est mouillée"], 0),
      Q("Qui frappe à la porte ?", ["Le gardien", "Un pompier", "La voisine d'en face", "Le grand-père"], 2),
      Q("Qu'est-ce qu'ils mangent ?", ["Du pain, du fromage et une salade", "Le gratin", "Une pizza livrée par le restaurant du coin"], 0),
      Q("Comment sont les enfants quand la lumière revient ?", ["Contents", "Déçus", "Malades"], 1)
    ]),

    R("r9-sept-ans-lina", "A1", "Les sept ans de Lina", "Lina'nın yedinci yaş günü", "Lina's seventh birthday", `
Samedi, Lina a sept ans. Pour son anniversaire, ses parents organisent une petite fête dans leur appartement, à Bordeaux. Lina invite cinq amis de l'école : Noah, Chloé, Adam, Jade et Louis.

Le matin, Lina aide son papa à décorer le salon. Ils accrochent des ballons rouges et jaunes et une guirlande « Joyeux anniversaire ». La maman de Lina prépare un gâteau au chocolat. Lina met des bonbons dans des petits sacs pour ses amis.

À quatorze heures, on sonne : ce sont les invités ! Les enfants jouent à cache-cache et ils dansent. Après, ils font une chasse au trésor dans l'appartement. Le trésor est sous le lit de Lina : c'est une boîte de crayons de couleur pour chaque enfant.

À seize heures, c'est le moment du gâteau. Papa éteint la lumière et tout le monde chante « Joyeux anniversaire ». Lina souffle ses sept bougies d'un coup. Bravo ! Elle ouvre ses cadeaux : un livre, un puzzle et… un petit vélo, de la part de sa grand-mère.

Le soir, l'appartement est en désordre : il y a des miettes et des confettis partout. Les parents sont fatigués, mais Lina est très heureuse. Avant de dormir, elle demande : « Maman, c'est quand, mes huit ans ? »`, `
organiser|düzenlemek|to organise
décorer|süslemek|to decorate
accrocher|asmak|to hang up
un ballon|balon|balloon
une guirlande|süs zinciri, afiş|garland, banner
sonner|zili çalmak|to ring the bell
un invité / une invitée|davetli|guest
jouer à cache-cache|saklambaç oynamak|to play hide-and-seek
une chasse au trésor|hazine avı|treasure hunt
souffler les bougies|mumları üflemek|to blow out the candles
en désordre|dağınık|messy
une miette|kırıntı|crumb`, [
      Q("Combien d'amis Lina invite-t-elle ?", ["Trois", "Sept", "Cinq"], 2),
      Q("Quel gâteau prépare la maman de Lina ?", ["Un gâteau au chocolat", "Une tarte aux pommes et à la cannelle", "Un gâteau à la fraise"], 0),
      Q("Où est le trésor ?", ["Dans un placard de la cuisine", "Sous le lit de Lina", "Derrière le canapé", "Sur le balcon"], 1),
      Q("Qui offre le vélo à Lina ?", ["Son papa et sa maman", "Noah", "Sa grand-mère"], 2),
      Q("Comment est l'appartement le soir ?", ["Très propre", "En désordre", "Tout noir"], 1)
    ]),

    R("r9-nouvelle-epicerie", "A1", "Une nouvelle épicerie dans ma rue", "Sokağımda yeni bir bakkal", "A new grocery shop in my street", `
Dans ma rue, il y a un nouveau magasin : une petite épicerie. Elle est ouverte depuis lundi, entre la pharmacie et le coiffeur. Elle s'appelle « Chez Fatou ». Je m'appelle Esin, je suis turque et j'habite dans cette rue avec mon mari.

Mercredi, après le travail, j'entre dans l'épicerie. Le magasin est petit, mais il y a beaucoup de choses : des fruits, des légumes, du riz, des épices, du thé et des produits de plusieurs pays. Ça sent bon la cannelle et le café.

La patronne s'appelle Fatou. Elle est sénégalaise et elle habite en France depuis quinze ans. Elle est très souriante. Elle me demande : « Vous êtes d'où ? » Je réponds : « De Turquie, d'Istanbul. » Alors elle me montre une étagère… avec du piment turc, le pul biber ! Je suis très contente.

J'achète du piment, des tomates et des citrons. Fatou me donne aussi une petite bouteille de bissap, une boisson du Sénégal à la fleur d'hibiscus. « C'est un cadeau, pour votre première visite ! » dit-elle.

L'épicerie est ouverte tous les jours, de huit heures à vingt et une heures, sauf le dimanche après-midi. C'est pratique ! Samedi, je vais revenir avec mon mari. Et je vais apporter à Fatou une boîte de loukoums turcs !`, `
une épicerie|bakkal, küçük market|grocery shop
être ouvert / ouverte|açık olmak|to be open
le coiffeur|kuaför|hairdresser's
une épice|baharat|spice
sentir bon|güzel kokmak|to smell good
la cannelle|tarçın|cinnamon
la patronne|dükkân sahibi (kadın)|owner, boss (woman)
souriant / souriante|güler yüzlü|smiley, cheerful
une étagère|raf|shelf
le piment|acı biber|chilli
une boisson|içecek|drink
sauf|hariç|except`, [
      Q("Où est l'épicerie ?", ["Entre la pharmacie et le coiffeur", "À côté de la boulangerie", "En face de la gare, à côté de la poste"], 0),
      Q("Quelle est la nationalité de Fatou ?", ["Turque", "Marocaine", "Française", "Sénégalaise"], 3),
      Q("Qu'est-ce que Fatou montre à Esin ?", ["Du thé vert de Chine", "Du piment turc", "Du riz"], 1),
      Q("Qu'est-ce que le bissap ?", ["Un gâteau au chocolat du Sénégal", "Une épice", "Une boisson à l'hibiscus"], 2),
      Q("Quand l'épicerie est-elle fermée ?", ["Le lundi matin", "Le dimanche après-midi", "Le samedi, toute la journée"], 1)
    ])
  );
})();
