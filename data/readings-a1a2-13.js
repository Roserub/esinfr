/* Graded readings, A1 set 13 (people and small stories): a grandmother and her first smartphone, a lost dog found, a bus driver's day, the new boy at school and twin sisters who are very different.
   Same format as data/readings.js: { id, level, t:{fr,tr,en}, text, gloss: [fr, tr, en][], qs: [{ q, o, a }] }. */
(function () {
  const G = s => s.trim().split("\n").map(l => l.split("|").map(x => x.trim()));
  const Q = (q, o, a) => ({ q, o, a });
  const R = (id, level, fr, tr, en, text, gloss, qs) => ({ id, level, t: { fr, tr, en }, text: text.trim(), gloss: G(gloss), qs });

  window.READINGS = window.READINGS || [];
  window.READINGS.push(
    R("r13-mamie-smartphone", "A1", "Mamie et son smartphone", "Büyükanne ve akıllı telefonu", "Grandma and her smartphone", `
Jeanne a 78 ans. Elle habite seule dans un petit appartement à Rennes. Elle aime lire, faire des mots croisés et parler avec ses voisines. Pour Noël, sa petite-fille Clara lui offre un cadeau surprise : un smartphone !

Au début, Jeanne n'est pas contente. « Je n'ai pas besoin de ça ! Mon vieux téléphone marche très bien. » L'écran est petit, les icônes sont bizarres et elle a peur de faire une bêtise.

Alors, Clara vient chez sa grand-mère tous les mercredis après-midi. Elle est très patiente. Elle écrit les étapes dans un carnet, en grosses lettres : allumer le téléphone, appeler, envoyer un message, prendre une photo. Jeanne pose beaucoup de questions et elle note tout.

Après un mois, Jeanne fait des progrès. Elle envoie des messages à Clara, avec beaucoup d'émojis. Parfois, elle se trompe : un jour, elle envoie un cœur et une pizza à son médecin ! Tout le monde rit, même le médecin.

Aujourd'hui, Jeanne adore son smartphone. Elle fait des appels vidéo avec son fils, qui habite au Canada, et elle prend des photos de ses fleurs. Le mercredi, maintenant, c'est elle qui explique les applis à ses voisines. « Ce n'est pas difficile, dit-elle. Il faut juste être patiente ! »`, `
la petite-fille|kız torun|granddaughter
offrir|hediye etmek|to give (as a present)
un écran|ekran|screen
faire une bêtise|bir saçmalık yapmak, bir şeyi bozmak|to do something silly
patient(e)|sabırlı|patient
une étape|adım, aşama|step
un carnet|defter|notebook
allumer|açmak (cihaz)|to switch on
faire des progrès|ilerleme kaydetmek|to make progress
se tromper|yanılmak, hata yapmak|to make a mistake
un appel vidéo|görüntülü arama|video call`, [
      Q("Quel âge a Jeanne ?", ["68 ans", "78 ans", "87 ans"], 1),
      Q("Qui offre le smartphone à Jeanne ?", ["Son fils", "Sa voisine", "Sa petite-fille Clara"], 2),
      Q("Quand Clara vient-elle chez sa grand-mère ?", ["Le mercredi après-midi", "Le dimanche matin", "Tous les soirs"], 0),
      Q("À qui Jeanne envoie-t-elle un cœur et une pizza par erreur ?", ["À Clara", "À son médecin", "À son fils", "À une voisine"], 1),
      Q("Où habite le fils de Jeanne ?", ["À Rennes", "En Belgique", "Au Canada"], 2),
      Q("Que fait Jeanne le mercredi, maintenant ?", ["Elle aide ses voisines", "Elle joue aux cartes au club", "Elle va chez le médecin avec Clara"], 0)
    ]),

    R("r13-chien-perdu", "A1", "Où est Biscotte ?", "Biscotte nerede?", "Where is Biscotte?", `
La famille Moreau habite dans une maison près de Tours, avec sa chienne Biscotte. Biscotte est petite, marron et blanche. Elle a cinq ans et elle adore courir dans le jardin. Les enfants, Léo et Manon, l'aiment beaucoup.

Un samedi matin, le portail du jardin est ouvert. Biscotte n'est plus là ! Toute la famille la cherche dans la rue, au parc et près de l'école. Manon pleure. Léo appelle : « Biscotte ! Biscotte ! » Mais il n'y a pas de réponse.

Le père, Julien, a une idée. Il fait une affiche avec une photo de Biscotte et son numéro de téléphone. Les enfants mettent les affiches dans le quartier, à la boulangerie et à la pharmacie. La mère, Sandrine, écrit aussi un message sur le groupe Facebook du village.

Le soir, le téléphone sonne. C'est Madame Petit, une dame de 80 ans. Elle habite à deux kilomètres. « Votre chienne est chez moi ! Elle est dans ma cuisine et elle mange les croquettes de mon chat ! » Le chat, lui, n'est pas content du tout.

Toute la famille va chez Madame Petit en voiture. Biscotte saute dans les bras de Manon. Le lendemain, pour dire merci, les enfants apportent un gâteau à Madame Petit. Et Julien répare le portail tout de suite !`, `
une chienne|dişi köpek|female dog
marron|kahverengi|brown
le portail|bahçe kapısı|gate
chercher|aramak|to look for
pleurer|ağlamak|to cry
une affiche|afiş, ilan|poster
le quartier|mahalle|neighbourhood
sonner|çalmak (telefon, zil)|to ring
les croquettes (f.)|kuru mama|dry pet food
sauter|zıplamak, atlamak|to jump
le lendemain|ertesi gün|the next day
réparer|tamir etmek|to repair`, [
      Q("De quelle couleur est Biscotte ?", ["Noire", "Marron et blanche", "Grise et blanche"], 1),
      Q("Pourquoi Biscotte n'est-elle plus dans le jardin ?", ["Le portail est ouvert", "Elle a peur du chat", "Les enfants sont à l'école"], 0),
      Q("Où les enfants mettent-ils les affiches ?", ["À la gare et à la poste", "À l'école et au stade", "À la boulangerie et à la pharmacie"], 2),
      Q("Que fait Biscotte chez Madame Petit ?", ["Elle dort dans le jardin", "Elle joue avec des enfants", "Elle regarde la télé", "Elle mange les croquettes du chat"], 3),
      Q("Qu'est-ce que les enfants apportent à Madame Petit ?", ["Des fleurs", "Un gâteau", "Une photo de Biscotte"], 1),
      Q("Que fait Julien à la fin ?", ["Il répare le portail", "Il achète un chat", "Il appelle la police"], 0)
    ]),

    R("r13-chauffeur-bus", "A1", "Malik, chauffeur de bus", "Otobüs şoförü Malik", "Malik, bus driver", `
Malik a 45 ans. Il est chauffeur de bus à Montpellier depuis quinze ans. Il conduit le bus numéro 7. Son travail commence très tôt : il se lève à 4 h 30 et il arrive au dépôt à 5 h 15.

À 5 h 45, Malik part pour son premier tour. Le matin, il y a beaucoup de monde dans le bus : des travailleurs, des étudiants et des enfants qui vont à l'école. Malik dit bonjour à tout le monde. Il connaît bien ses passagers.

Il y a Madame Leroy, qui va au marché tous les jeudis avec son petit chariot. Il y a aussi Théo, un lycéen toujours en retard. Malik l'attend souvent quelques secondes. « Merci, Malik ! » crie Théo, tout rouge.

Le travail n'est pas toujours facile. Il y a des bouchons, des travaux et parfois des passagers pas très polis. Mais Malik reste calme. À midi, il mange un sandwich au dépôt avec ses collègues. Ils parlent de foot et de leurs enfants.

À 13 h 30, la journée de Malik est finie. Il rentre chez lui et il fait une petite sieste. Le soir, il joue avec ses deux filles. Malik aime son métier. « Dans mon bus, je vois toute la ville, dit-il. Chaque jour est différent ! »`, `
un chauffeur de bus|otobüs şoförü|bus driver
conduire|(araç) sürmek|to drive
le dépôt|otobüs garajı|bus depot
un tour|sefer, tur|round, trip
un passager, une passagère|yolcu|passenger
un chariot (de courses)|alışveriş arabası|shopping trolley
un lycéen, une lycéenne|lise öğrencisi|secondary school pupil
en retard|geç kalmış|late
attendre|beklemek|to wait
les bouchons (m.)|trafik sıkışıklığı|traffic jams
poli(e)|kibar|polite
une sieste|öğle uykusu, şekerleme|nap
le métier|meslek|job, trade`, [
      Q("Depuis combien de temps Malik est-il chauffeur de bus ?", ["Cinq ans", "Quinze ans", "Vingt-cinq ans"], 1),
      Q("À quelle heure Malik se lève-t-il ?", ["À 4 h 30", "À 5 h 15", "À 6 h"], 0),
      Q("Qui va au marché tous les jeudis ?", ["Théo", "La femme de Malik", "Madame Leroy"], 2),
      Q("Pourquoi Malik attend-il Théo ?", ["Théo est malade", "Théo est souvent en retard", "Théo n'a pas de ticket"], 1),
      Q("Où Malik mange-t-il à midi ?", ["Au restaurant", "Dans son bus", "Chez lui", "Au dépôt avec ses collègues"], 3),
      Q("Qu'est-ce que Malik aime dans son métier ?", ["Chaque jour est différent", "Il travaille le soir", "Il a un grand bureau"], 0)
    ]),

    R("r13-nouveau-ecole", "A1", "Le nouveau de la classe", "Sınıfın yeni öğrencisi", "The new boy in class", `
Yanis a 9 ans. Il habite à Strasbourg avec sa mère et sa petite sœur. La famille vient d'arriver de Marseille, parce que sa mère a un nouveau travail. Aujourd'hui, lundi, c'est le premier jour de Yanis dans sa nouvelle école.

Yanis a un peu peur. Il ne connaît personne. Dans la classe, la maîtresse, Madame Roux, est très gentille. Elle dit : « Voici Yanis. Il vient de Marseille. Bienvenue, Yanis ! » Tous les enfants le regardent. Yanis devient tout rouge.

À la récréation, Yanis est seul dans un coin de la cour. Il regarde les autres enfants. Certains jouent au foot, d'autres jouent à chat. Il est un peu triste. Il pense à ses copains de Marseille.

Tout à coup, un ballon arrive à ses pieds. Un garçon avec des lunettes crie : « Hé, tu joues avec nous ? Il nous manque un joueur ! » Yanis sourit. Il adore le foot ! Il court, il fait une passe… et il marque un but ! Les garçons applaudissent.

Le garçon aux lunettes s'appelle Arthur. À la cantine, Yanis et Arthur mangent ensemble. Ils parlent de foot, de jeux vidéo et de leurs animaux. Le soir, Yanis dit à sa mère : « Maman, j'ai un nouveau copain ! » Sa mère est très contente.`, `
la maîtresse|(ilkokulda) kadın öğretmen|primary school teacher (f.)
connaître|tanımak|to know (a person)
ne… personne|hiç kimse|nobody
la récréation|teneffüs|break, playtime
la cour|okul bahçesi|playground
jouer à chat|kovalamaca oynamak|to play tag
un copain, une copine|arkadaş|friend, mate
tout à coup|birdenbire|suddenly
il nous manque…|bir … eksiğimiz var|we're missing…
marquer un but|gol atmak|to score a goal
applaudir|alkışlamak|to clap
la cantine|okul yemekhanesi|school canteen`, [
      Q("Pourquoi la famille de Yanis habite-t-elle maintenant à Strasbourg ?", ["Pour la nouvelle école", "Pour le nouveau travail de sa mère", "Pour être près de sa grand-mère"], 1),
      Q("Comment est Madame Roux ?", ["Très gentille", "Très sévère", "Un peu fatiguée"], 0),
      Q("Que fait Yanis au début de la récréation ?", ["Il joue à chat", "Il mange son goûter", "Il est seul dans un coin"], 2),
      Q("Qu'est-ce qu'Arthur demande à Yanis ?", ["S'il vient de Marseille", "S'il veut jouer au foot", "S'il a un chien"], 1),
      Q("Que fait Yanis pendant le match ?", ["Il tombe", "Il regarde", "Il est l'arbitre", "Il marque un but"], 3),
      Q("Avec qui Yanis mange-t-il à la cantine ?", ["Avec Arthur", "Avec sa sœur", "Avec la maîtresse"], 0)
    ]),

    R("r13-soeurs-jumelles", "A1", "Deux sœurs jumelles", "İkiz iki kız kardeş", "Twin sisters", `
Camille et Chloé ont 24 ans. Elles sont jumelles. Elles ont les mêmes yeux verts, les mêmes cheveux bruns et la même voix. Au téléphone, même leur mère se trompe parfois !

Mais elles ont des caractères très différents. Camille est calme et organisée. Elle est infirmière à l'hôpital de Bordeaux. Elle se lève tôt, elle fait du yoga et elle range toujours son appartement. Chloé, elle, est très bavarde et un peu désordonnée. Elle est cuisinière dans un restaurant et elle adore faire la fête.

Le week-end, Camille aime lire un livre dans un café tranquille ou faire une promenade à la campagne. Chloé préfère sortir avec ses amis, aller à des concerts et danser jusqu'à trois heures du matin. Ensuite, elle dort jusqu'à midi !

Parfois, elles se disputent. Camille dit : « Tu es toujours en retard ! » Chloé répond : « Et toi, tu es trop sérieuse ! » Mais elles se réconcilient vite. Elles s'appellent tous les jours et elles mangent ensemble chaque dimanche soir.

Cette année, pour leur anniversaire, elles font une fête ensemble. Camille fait la liste des invités et Chloé prépare le repas. « Nous sommes différentes, mais nous sommes une super équipe ! » disent-elles en même temps. Et elles rient.`, `
des jumelles (f.)|ikiz kızlar|twin girls
la voix|ses|voice
le caractère|karakter, mizaç|personality
organisé(e)|düzenli|organised
une infirmière|hemşire|nurse
ranger|toplamak, derleyip toparlamak|to tidy up
bavard(e)|geveze, konuşkan|chatty
désordonné(e)|dağınık|messy, untidy
une cuisinière|aşçı (kadın)|cook (woman)
faire la fête|eğlenmek, parti yapmak|to party
se disputer|tartışmak, kavga etmek|to argue
se réconcilier|barışmak|to make up
les invités (m.)|davetliler, misafirler|guests`, [
      Q("Quel âge ont Camille et Chloé ?", ["24 ans", "20 ans", "34 ans"], 0),
      Q("Quel est le métier de Camille ?", ["Cuisinière", "Professeure", "Infirmière"], 2),
      Q("Comment est Chloé ?", ["Calme et organisée", "Bavarde et un peu désordonnée", "Timide et sérieuse"], 1),
      Q("Jusqu'à quelle heure Chloé dort-elle après une soirée ?", ["Jusqu'à 8 heures", "Jusqu'à 10 heures", "Jusqu'à midi"], 2),
      Q("Quand les deux sœurs mangent-elles ensemble ?", ["Chaque dimanche soir", "Chaque samedi midi", "Tous les matins"], 0),
      Q("Qui prépare le repas de la fête ?", ["Camille", "Leur mère", "Chloé", "Les invités"], 2)
    ])
  );
})();
