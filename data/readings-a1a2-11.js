/* Graded readings, A2 set 11 (France, culture and travel): a weekend in Marseille, the history of the croissant, a game of pétanque in Provence, the European Heritage Days and a day at Mont-Saint-Michel.
   Same format as data/readings.js: { id, level, t:{fr,tr,en}, text, gloss: [fr, tr, en][], qs: [{ q, o, a }] }. */
(function () {
  const G = s => s.trim().split("\n").map(l => l.split("|").map(x => x.trim()));
  const Q = (q, o, a) => ({ q, o, a });
  const R = (id, level, fr, tr, en, text, gloss, qs) => ({ id, level, t: { fr, tr, en }, text: text.trim(), gloss: G(gloss), qs });

  window.READINGS = window.READINGS || [];
  window.READINGS.push(
    R("r11-week-end-marseille", "A2", "Un week-end à Marseille", "Marsilya'da bir hafta sonu", "A weekend in Marseille", `
Camille et Thomas habitent à Lille. En mai, pour l'anniversaire de Camille, Thomas lui a fait une surprise : deux billets de TGV pour Marseille. Le vendredi soir, après cinq heures de train, ils sont arrivés à la gare Saint-Charles. Il faisait encore chaud et le ciel était tout rose.

Le samedi matin, ils sont allés au Vieux-Port. Des pêcheurs vendaient leurs poissons directement sur le quai. Ensuite, ils ont pris le petit train touristique pour monter à Notre-Dame-de-la-Garde, la grande basilique sur la colline. Les Marseillais l'appellent « la Bonne Mère ». D'en haut, la vue sur la ville et sur la mer était magnifique.

À midi, ils ont mangé dans le quartier du Panier, le plus vieux quartier de Marseille, avec ses petites rues colorées. L'après-midi, ils ont visité le Mucem, un musée moderne au bord de l'eau. Le soir, Thomas voulait absolument goûter la bouillabaisse, la soupe de poisson typique de la ville. C'était délicieux… mais assez cher ! « Bon, demain, on mange un sandwich », a dit Thomas en riant.

Le dimanche, ils ont pris le bateau pour aller dans les calanques. Ce sont des petites baies entre des rochers blancs, avec une eau très claire, presque turquoise. Camille s'est baignée, mais l'eau était encore froide. Thomas, lui, est resté sur un rocher et il a pris des photos. Ils ont aussi beaucoup aimé l'accent des Marseillais : chantant et très sympathique.

Le dimanche soir, dans le train du retour, Camille était fatiguée mais très heureuse. « C'était mon plus bel anniversaire ! » a-t-elle dit. Ils ont déjà décidé de revenir l'été prochain, pour rester une semaine entière et pour manger une autre bouillabaisse. Mais cette fois, ils vont économiser avant de partir !`, `
le Vieux-Port|Eski Liman|the Old Port
un pêcheur|balıkçı|fisherman
le quai|rıhtım|quay
une colline|tepe|hill
la vue|manzara|view
un quartier|semt, mahalle|neighbourhood, district
goûter|tadına bakmak|to taste
une calanque|kalanka (kayalıklar arasında dar koy)|calanque (rocky inlet)
un rocher|kaya|rock
se baigner|denize girmek, yüzmek|to go for a swim
l'accent (m.)|aksan, şive|accent
économiser|para biriktirmek|to save money`, [
      Q("Pourquoi Camille et Thomas sont-ils allés à Marseille ?", ["Pour le travail de Thomas", "Pour l'anniversaire de Camille", "Pour voir la famille de Camille"], 1),
      Q("Comment les Marseillais appellent-ils Notre-Dame-de-la-Garde ?", ["La Bonne Mère", "La Grande Colline", "Le Vieux-Port", "La Belle Vue"], 0),
      Q("Qu'est-ce que le Panier ?", ["Un musée moderne", "Un restaurant de poisson", "Le plus vieux quartier de la ville"], 2),
      Q("Qu'est-ce que Thomas pense de la bouillabaisse ?", ["C'est délicieux mais cher", "C'est trop salé", "C'est moins bon qu'à Lille"], 0),
      Q("Qu'a fait Thomas dans les calanques ?", ["Il s'est baigné", "Il a pris des photos", "Il a fait de la plongée"], 1),
      Q("Que vont-ils faire l'été prochain ?", ["Partir en Bretagne", "Rester chez eux", "Revenir une semaine à Marseille"], 2)
    ]),

    R("r11-histoire-croissant", "A2", "L'histoire du croissant", "Kruvasanın tarihi", "The history of the croissant", `
Pour beaucoup de gens dans le monde, le croissant est le symbole de la France. On l'imagine avec un café crème, à la terrasse d'un café parisien. Pourtant, son histoire ne commence pas en France, mais en Autriche, à Vienne !

Une vieille légende raconte qu'en 1683, l'armée ottomane attaquait Vienne. Une nuit, des boulangers qui travaillaient très tôt ont entendu des bruits sous la terre et ils ont prévenu les soldats. Après la victoire, pour fêter ça, les boulangers ont préparé un petit pain en forme de croissant de lune, un symbole des Ottomans. Est-ce que c'est vrai ? Les historiens ne le pensent pas, mais l'histoire est jolie !

Ce qui est sûr, c'est qu'à Vienne, on mangeait déjà un petit pain en forme de croissant, le « kipferl ». Vers 1838, un Autrichien, August Zang, a ouvert une boulangerie viennoise à Paris. Ses pains et ses gâteaux ont eu beaucoup de succès. C'est pour ça qu'aujourd'hui encore, en France, on appelle les croissants, les pains au chocolat et les brioches des « viennoiseries ».

Mais le croissant de Zang n'était pas encore le croissant d'aujourd'hui. Au début du XXe siècle, des boulangers français ont commencé à le faire avec une pâte levée feuilletée et beaucoup de beurre. C'est cette pâte qui donne au croissant ses fines couches et son goût si particulier. Pour faire de bons croissants, il faut du temps : le boulanger plie et replie la pâte plusieurs fois.

Aujourd'hui, les Français mangent des croissants surtout le week-end, au petit déjeuner. Petit conseil pour la boulangerie : souvent, le croissant au beurre est droit, et le croissant « ordinaire », fait avec de la margarine, est courbé. Et vous, est-ce que vous le trempez dans votre café ? Beaucoup de Français le font… même si ce n'est pas très élégant ! Alors, la prochaine fois que vous mangerez un croissant, pensez à Vienne… et un peu à Istanbul !`, `
une légende|efsane|legend
l'armée (f.)|ordu|army
prévenir|haber vermek, uyarmak|to warn
le croissant de lune|hilal|crescent moon
la victoire|zafer|victory
un historien, une historienne|tarihçi|historian
une viennoiserie|kruvasan türü tereyağlı hamur işi|Viennese-style pastry
la pâte levée feuilletée|mayalı kat kat hamur|laminated yeast dough
une couche|kat|layer
plier|katlamak|to fold
tremper|batırmak, bandırmak|to dip
droit / courbé|düz / kıvrık|straight / curved`, [
      Q("Dans quelle ville commence l'histoire du croissant ?", ["À Paris", "À Vienne", "À Istanbul"], 1),
      Q("Selon la légende, qui a prévenu les soldats ?", ["Des boulangers", "Des enfants", "Des historiens", "Des paysans"], 0),
      Q("Qui était August Zang ?", ["Un soldat ottoman", "Un historien français spécialiste de Vienne", "Un boulanger autrichien à Paris"], 2),
      Q("Qu'est-ce qui donne au croissant ses fines couches ?", ["Le sucre glace mis sur le dessus", "La pâte levée feuilletée", "Le lait chaud"], 1),
      Q("Souvent, comment est le croissant au beurre ?", ["Courbé", "Rond", "Droit"], 2),
      Q("Quand les Français mangent-ils surtout des croissants ?", ["Le week-end, au petit déjeuner", "Le soir, au dîner, avec du fromage", "À midi, avec une salade"], 0)
    ]),

    R("r11-petanque-provence", "A2", "Une partie de pétanque en Provence", "Provence'ta bir pétanque oyunu", "A game of pétanque in Provence", `
Cet été, Lucas, 24 ans, a passé deux semaines chez son grand-père Marcel, dans un petit village de Provence. Chaque jour, vers 18 heures, quand il faisait moins chaud, Marcel prenait ses boules et allait sur la place du village, sous les platanes. Là, il retrouvait ses amis pour jouer à la pétanque.

Le premier soir, Lucas a seulement regardé. Les règles semblaient simples. Un joueur lance d'abord une petite boule en bois, le « cochonnet ». Ensuite, les deux équipes lancent leurs boules en métal. Le but est de mettre ses boules le plus près possible du cochonnet. L'équipe qui arrive la première à 13 points gagne la partie.

Le deuxième soir, Marcel lui a prêté des boules. « Tu as deux façons de jouer, a-t-il expliqué. Tu peux pointer : tu lances doucement pour t'approcher du cochonnet. Ou tu peux tirer : tu lances fort pour faire partir la boule de l'adversaire. » Lucas a essayé de tirer… et sa boule a fini sous la voiture du boulanger ! Tout le monde a bien ri.

Pendant la partie, Lucas a aussi appris l'histoire du jeu. La pétanque est née en 1907 à La Ciotat, près de Marseille. Un homme, Jules Lenoir, aimait beaucoup le jeu provençal, où il fallait courir avant de lancer. Mais il avait des rhumatismes et il ne pouvait plus courir. Alors, ses amis ont décidé de jouer sans bouger, les pieds fixes dans un petit cercle : « pieds tanqués », en provençal. Le nom « pétanque » vient de là.

À la fin des vacances, Lucas avait fait des progrès. Le dernier soir, il a même gagné une partie avec son grand-père contre deux voisins. Marcel était très fier. Avant le départ de Lucas, il lui a offert ses vieilles boules. « Comme ça, tu pourras jouer à Paris… mais attention aux voitures ! » a-t-il dit avec un clin d'œil.`, `
une boule|top (pétanque topu)|boule, ball
un platane|çınar ağacı|plane tree
une règle|kural|rule
lancer|atmak, fırlatmak|to throw
le cochonnet|küçük tahta hedef topu|jack (small target ball)
une équipe|takım|team
le but|amaç|aim, goal
prêter|ödünç vermek|to lend
pointer|topu hedefe yaklaştırmak|to roll close (to the jack)
tirer|vurarak uzaklaştırmak|to shoot (knock a ball away)
l'adversaire (m./f.)|rakip|opponent
un clin d'œil|göz kırpma|wink`, [
      Q("Où Marcel joue-t-il à la pétanque ?", ["Dans son jardin", "Sur la place du village", "Sur la plage"], 1),
      Q("Qu'est-ce que le cochonnet ?", ["Une petite boule en bois", "Une grande boule en métal", "Le nom d'une équipe", "Le chien de Marcel"], 0),
      Q("Combien de points faut-il pour gagner une partie ?", ["10 points", "21 points", "13 points"], 2),
      Q("Où est allée la boule de Lucas quand il a tiré ?", ["Dans la fontaine", "Sous la voiture du boulanger", "Sur le toit de l'église"], 1),
      Q("Pourquoi Jules Lenoir ne pouvait-il plus courir ?", ["Il avait des rhumatismes", "Il n'aimait pas le sport", "Il s'était cassé la jambe"], 0),
      Q("Qu'est-ce que Marcel a offert à Lucas ?", ["Un livre sur la Provence", "Une photo du village", "Ses vieilles boules"], 2)
    ]),

    R("r11-journees-patrimoine", "A2", "Les Journées du patrimoine", "Kültürel Miras Günleri", "The Heritage Days", `
En septembre, Sophie, la responsable de ma salle de sport, m'a parlé des Journées du patrimoine. « C'est le troisième week-end de septembre, m'a-t-elle expliqué. Beaucoup de monuments et de bâtiments sont ouverts au public, et souvent, c'est gratuit ! Tu vas adorer. » Le soir même, mon mari et moi, nous avons regardé le programme sur Internet. Il y avait plus de cent visites dans notre ville !

Les Journées du patrimoine existent en France depuis 1984. Aujourd'hui, elles sont organisées dans toute l'Europe. Pendant deux jours, on peut entrer dans des endroits normalement fermés : des mairies, des châteaux, des théâtres, des usines… À Paris, on peut même visiter le palais de l'Élysée, la maison du président de la République ! Mais attention, il y a souvent de longues files d'attente.

Le samedi matin, nous avons commencé par la mairie. Un guide nous a montré la salle des mariages, avec ses grands tableaux et ses lustres dorés. Il parlait vite, mais j'ai presque tout compris. Mon mari, lui, a posé une question en français au guide. J'étais très fière de lui ! Ensuite, nous avons visité un vieil hôpital du XVIIe siècle. Moi qui suis kiné de formation, j'ai trouvé la vieille pharmacie passionnante, avec ses centaines de pots en céramique.

Le dimanche, il pleuvait, alors nous avons choisi des visites à l'intérieur. Nous sommes allés dans un vieux théâtre. Nous sommes montés sur la scène et nous avons vu les coulisses. Un acteur nous a raconté des anecdotes amusantes : une fois, pendant un spectacle, le rideau est tombé sur la tête d'un musicien ! Heureusement, il n'a pas été blessé.

Ce week-end m'a beaucoup plu. J'ai découvert des lieux magnifiques, j'ai appris des mots nouveaux et je me suis sentie un peu plus chez moi dans cette ville. Et tout ça sans dépenser un euro ! L'année prochaine, nous allons recommencer, mais cette fois, nous allons nous lever plus tôt pour éviter les files d'attente.`, `
le patrimoine|kültürel miras|heritage
un monument|anıt, tarihi yapı|monument
gratuit, gratuite|ücretsiz|free (of charge)
la mairie|belediye binası|town hall
une file d'attente|kuyruk, sıra|queue
un lustre|avize|chandelier
doré, dorée|yaldızlı, altın renkli|gilded, golden
passionnant, passionnante|çok ilginç, büyüleyici|fascinating
la scène|sahne|stage
les coulisses (f. pl.)|kulis|backstage
le rideau|perde|curtain
dépenser|harcamak|to spend`, [
      Q("Qui a parlé des Journées du patrimoine à Esin ?", ["Son mari", "Sophie", "Un guide"], 1),
      Q("Quand ont lieu les Journées du patrimoine ?", ["Le premier week-end de mai", "Le 14 juillet, pour la fête nationale", "Le troisième week-end de septembre"], 2),
      Q("Qu'est-ce qu'on peut visiter à Paris pendant ces journées ?", ["Le palais de l'Élysée", "La maison de Sophie", "Un hôpital moderne"], 0),
      Q("Pourquoi Esin était-elle fière de son mari ?", ["Il a trouvé la mairie tout seul, sans GPS", "Il a posé une question en français", "Il a pris de belles photos"], 1),
      Q("Selon l'acteur, qu'est-ce qui est arrivé un jour au théâtre ?", ["Un acteur a oublié son texte au milieu de la pièce", "Il n'y avait pas de public", "Le rideau est tombé sur un musicien", "La lumière s'est éteinte"], 2),
      Q("Que vont faire Esin et son mari l'année prochaine ?", ["Se lever plus tôt", "Visiter seulement des châteaux", "Partir à Paris"], 0)
    ]),

    R("r11-mont-saint-michel", "A2", "Une journée au Mont-Saint-Michel", "Mont-Saint-Michel'de bir gün", "A day at Mont-Saint-Michel", `
Pendant les vacances de la Toussaint, Bernard et Josiane, deux retraités de Tours, ont emmené leur petite-fille Zoé, 12 ans, au Mont-Saint-Michel, en Normandie. Zoé avait vu des photos sur Internet et elle rêvait de voir « le château sur la mer ». « Ce n'est pas un château, c'est une abbaye ! » lui a expliqué son grand-père.

Ils ont laissé la voiture dans un grand parking, à deux kilomètres et demi du Mont. Ensuite, ils ont pris une navette gratuite. Quand Zoé a vu le Mont apparaître dans le brouillard du matin, elle a crié : « On dirait un dessin animé ! » Aujourd'hui, environ trois millions de touristes viennent ici chaque année, mais seulement une trentaine de personnes habitent sur le Mont.

Ils sont entrés par la Grande Rue, une petite rue très étroite, pleine de boutiques de souvenirs et de restaurants. Puis ils ont monté les escaliers jusqu'à l'abbaye. Il y avait beaucoup de marches ! Josiane a dû s'arrêter plusieurs fois pour se reposer, mais en haut, la vue sur la baie était extraordinaire. Le guide leur a raconté que les premiers moines sont arrivés ici il y a plus de mille ans.

L'après-midi, ils ont fait une balade à pied dans la baie, avec un guide. Zoé a marché pieds nus dans le sable mouillé. Le guide a expliqué que, dans la baie, les marées sont parmi les plus fortes d'Europe. « Quand la mer monte, elle arrive très vite. Il ne faut jamais marcher ici seul, sans guide. Et il y a aussi des sables mouvants ! » Zoé l'a écouté très attentivement.

Pour finir la journée, Bernard voulait goûter la célèbre omelette du Mont. Mais quand il a vu le prix sur la carte, il a changé d'avis. « Je ferai une omelette à la maison, elle sera aussi bonne ! » a-t-il dit. Finalement, ils ont mangé des crêpes. Dans la voiture, Zoé s'est endormie tout de suite, la tête pleine de belles images.`, `
un retraité, une retraitée|emekli|retired person
une abbaye|manastır|abbey
une navette|servis aracı|shuttle bus
le brouillard|sis|fog
étroit, étroite|dar|narrow
une marche|basamak|step
la baie|koy|bay
un moine|keşiş|monk
pieds nus|yalınayak|barefoot
mouillé, mouillée|ıslak|wet
la marée|gelgit|tide
les sables mouvants (m. pl.)|bataklık kumu|quicksand`, [
      Q("Qui est Zoé ?", ["La fille de Bernard", "La petite-fille de Bernard et Josiane", "Une guide du Mont"], 1),
      Q("Comment sont-ils allés du parking au Mont ?", ["En navette", "À vélo", "En bateau"], 0),
      Q("Combien de personnes habitent sur le Mont ?", ["Trois millions", "Environ mille", "Une trentaine"], 2),
      Q("Pourquoi Josiane s'est-elle arrêtée plusieurs fois ?", ["Pour se reposer", "Pour acheter des souvenirs", "Pour téléphoner"], 0),
      Q("Selon le guide, pourquoi ne faut-il pas marcher seul dans la baie ?", ["C'est interdit aux enfants", "La mer monte très vite", "Le sable est trop chaud"], 1),
      Q("Qu'est-ce qu'ils ont mangé finalement ?", ["Une omelette", "Des crêpes", "Une bouillabaisse", "Des moules-frites"], 1)
    ])
  );
})();
