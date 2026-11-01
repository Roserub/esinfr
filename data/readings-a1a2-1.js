/* Extra graded readings, A1–A2 (set 1): leisure, sport, festivals and daily life in France.
   Same format as data/readings.js; appended to window.READINGS. */
(function () {
  const G = s => s.trim().split("\n").map(l => l.split("|").map(x => x.trim()));
  const Q = (q, o, a) => ({ q, o, a });
  const R = (id, level, fr, tr, en, text, gloss, qs) => ({ id, level, t: { fr, tr, en }, text: text.trim(), gloss: G(gloss), qs });

  window.READINGS = window.READINGS || [];
  window.READINGS.push(
    R("r-plage", "A1", "Une journée à la plage", "Plajda bir gün", "A day at the beach", `
C'est samedi et il fait très chaud. Chloé et son frère Hugo habitent à Marseille. Aujourd'hui, ils vont aller à la plage avec deux amies.

Dans le sac, Chloé met une serviette, de la crème solaire, des lunettes de soleil et une grande bouteille d'eau. Hugo prend un ballon et des sandwichs.

À la plage, il y a beaucoup de monde. L'eau est bleue et un peu froide, mais Chloé nage pendant une demi-heure. Hugo joue au volley avec les amies. À midi, ils mangent sur le sable.

L'après-midi, le soleil est très fort. Chloé met encore de la crème et elle dort sous un parasol. Le soir, ils vont manger une glace sur le port. Demain, ils vont rester à la maison : ils sont fatigués !`, `
la serviette|havlu|towel
la crème solaire|güneş kremi|sun cream
les lunettes de soleil|güneş gözlüğü|sunglasses
nager|yüzmek|to swim
le sable|kum|sand
le parasol|plaj şemsiyesi|beach umbrella
le port|liman|harbour
fatigué(e)|yorgun|tired`, [
      Q("Où habitent Chloé et Hugo ?", ["À Nice", "À Marseille", "À Bordeaux"], 1),
      Q("Qu'est-ce qu'Hugo prend ?", ["Un livre", "Une serviette", "Un ballon et des sandwichs"], 2),
      Q("Comment est l'eau ?", ["Bleue et un peu froide", "Verte et chaude", "Grise et sale"], 0),
      Q("Où vont-ils le soir ?", ["Au cinéma", "Sur le port, pour manger une glace", "Au restaurant"], 1),
      Q("Qu'est-ce qu'ils vont faire demain ?", ["Retourner à la plage", "Aller à Paris", "Rester à la maison"], 2)
    ]),

    R("r-velo", "A1", "Le vélo en ville", "Şehirde bisiklet", "Cycling in town", `
Malik a vingt-deux ans. Il est étudiant à Strasbourg. Il n'a pas de voiture : il va à l'université à vélo. C'est rapide, pas cher et bon pour la santé.

À Strasbourg, il y a beaucoup de pistes cyclables. Malik roule sur la piste, pas sur le trottoir. Il porte un casque et, le soir, il allume ses lumières. Il s'arrête toujours au feu rouge.

Son amie Julie n'a pas de vélo. Elle loue un vélo en libre-service : elle paie avec son téléphone, elle roule, et après, elle laisse le vélo dans une station.

Ce week-end, Malik et Julie vont faire une balade à vélo le long du canal. Ils vont pique-niquer au bord de l'eau.`, `
la piste cyclable|bisiklet yolu|cycle lane
le trottoir|kaldırım|pavement
le casque|kask|helmet
allumer|yakmak, açmak|to switch on
le feu rouge|kırmızı ışık|red light
le vélo en libre-service|paylaşımlı bisiklet|bike-share
la balade|gezinti|ride, outing
au bord de l'eau|su kenarında|by the water`, [
      Q("Comment Malik va-t-il à l'université ?", ["En bus", "À vélo", "À pied"], 1),
      Q("Où roule Malik ?", ["Sur le trottoir", "Au milieu des voitures", "Sur la piste cyclable"], 2),
      Q("Comment Julie paie-t-elle le vélo ?", ["Avec son téléphone", "En espèces", "Elle ne paie pas"], 0),
      Q("Qu'est-ce qu'ils vont faire ce week-end ?", ["Un match de foot", "Des courses en ville", "Une balade le long du canal"], 2)
    ]),

    R("r-voisin-paul", "A1", "Mon voisin Paul", "Komşum Paul", "My neighbour Paul", `
J'ai un voisin très sympathique. Il s'appelle Paul et il a soixante-douze ans. Il habite au rez-de-chaussée de mon immeuble, avec son chien Filou.

Paul ne travaille pas : il est à la retraite. Le matin, il promène Filou dans le quartier. L'après-midi, il lit le journal et il fait des mots croisés. Il aime aussi le jardinage : devant l'immeuble, il a des tomates et des fleurs.

Avec moi, Paul parle lentement. Il corrige mes fautes de français, mais toujours avec un sourire. Quand je pars en week-end, il arrose mes plantes.

Samedi, je vais préparer des börek pour Paul. Il va venir boire le thé chez moi. Il dit toujours : « Le thé turc, c'est très fort ! »`, `
le rez-de-chaussée|zemin kat|ground floor
l'immeuble (m.)|apartman binası|block of flats
être à la retraite|emekli olmak|to be retired
promener le chien|köpeği gezdirmek|to walk the dog
les mots croisés|bulmaca|crossword
corriger|düzeltmek|to correct
la faute|hata|mistake
arroser|sulamak|to water`, [
      Q("Quel âge a Paul ?", ["62 ans", "72 ans", "82 ans"], 1),
      Q("Comment s'appelle son chien ?", ["Filou", "Médor", "Rex"], 0),
      Q("Qu'est-ce que Paul fait quand Esin part en week-end ?", ["Il fait ses courses", "Il arrose ses plantes", "Il garde sa voiture"], 1),
      Q("Qu'est-ce qu'Esin va préparer samedi ?", ["Une pizza", "Une soupe", "Des börek"], 2)
    ]),

    R("r-fete-musique", "A1", "La fête de la musique", "Müzik Bayramı", "The Fête de la Musique", `
Le 21 juin, c'est la fête de la musique en France. C'est le début de l'été et les jours sont très longs. La fête existe depuis 1982. Ce soir-là, les concerts sont gratuits et il y a de la musique partout : dans les rues, dans les parcs, dans les bars et sur les places.

Cette année, Inès va sortir à Toulouse avec ses amis Yanis et Camille. Ils vont écouter un groupe de rock près du Capitole, puis un orchestre de jazz dans un petit jardin. Camille joue de la guitare : elle va chanter avec des amis devant un café.

Il y a beaucoup de monde et il fait chaud. Les gens dansent, chantent et rient. À minuit, Inès est fatiguée, mais très contente. Elle dit : « Vivement l'année prochaine ! »`, `
gratuit(e)|ücretsiz|free (no cost)
partout|her yerde|everywhere
sortir|dışarı çıkmak, eğlenmeye gitmek|to go out
le groupe|müzik grubu|band
jouer de la guitare|gitar çalmak|to play the guitar
chanter|şarkı söylemek|to sing
danser|dans etmek|to dance
vivement… !|… için sabırsızlanıyorum!|I can't wait for…!`, [
      Q("Quelle est la date de la fête de la musique ?", ["Le 14 juillet", "Le 1er mai", "Le 21 juin"], 2),
      Q("Les concerts sont…", ["chers", "gratuits", "seulement à la radio"], 1),
      Q("Dans quelle ville est Inès ?", ["À Toulouse", "À Lille", "À Nantes"], 0),
      Q("Qui va chanter devant un café ?", ["Yanis", "Camille", "Inès"], 1)
    ]),

    R("r-parc", "A1", "Au parc le dimanche", "Pazar günü parkta", "At the park on Sunday", `
Le dimanche, Nadia va au parc des Buttes-Chaumont, à Paris, avec ses enfants, Adam et Lina. Adam a six ans et Lina a neuf ans.

Dans le parc, il y a des arbres, un lac et de grandes pelouses. Les enfants courent, jouent au ballon et regardent les canards. Nadia s'assoit sur un banc et elle lit un livre. Parfois, elle fait aussi un petit footing autour du lac.

À midi, ils font un pique-nique sur l'herbe : du pain, du fromage, des tomates et des fruits. Après, Lina fait du roller et Adam fait de la balançoire.

Vers cinq heures, il commence à faire froid. La famille rentre à la maison. Dimanche prochain, ils vont inviter leur grand-mère au parc.`, `
l'arbre (m.)|ağaç|tree
le lac|göl|lake
la pelouse|çimenlik|lawn
le canard|ördek|duck
le banc|bank (oturak)|bench
l'herbe (f.)|çimen, ot|grass
la balançoire|salıncak|swing
rentrer|eve dönmek|to go home`, [
      Q("Quel âge a Lina ?", ["Six ans", "Neuf ans", "Douze ans"], 1),
      Q("Que fait Nadia sur le banc ?", ["Elle dort", "Elle téléphone", "Elle lit un livre"], 2),
      Q("Qu'est-ce qu'ils font à midi ?", ["Un pique-nique sur l'herbe", "Une pizza au restaurant", "Des crêpes à la maison"], 0),
      Q("Qui vont-ils inviter dimanche prochain ?", ["Leur voisin", "Leur grand-mère", "Un professeur"], 1)
    ]),

    R("r-sport-prefere", "A1", "Mon sport préféré", "En sevdiğim spor", "My favourite sport", `
Je m'appelle Léa, j'ai seize ans et j'habite à Nantes. Mon sport préféré, c'est le handball. Je joue dans un club depuis l'âge de huit ans.

Je suis gardienne de but. C'est un poste difficile : le ballon va très vite ! Mais j'adore arrêter les tirs.

Je m'entraîne deux fois par semaine, le mardi et le jeudi, de dix-huit heures à vingt heures. Le samedi, nous avons un match. Avant le match, je fais toujours un bon échauffement pour éviter les blessures.

Dans mon équipe, nous sommes quatorze filles et l'ambiance est super. Notre entraîneur s'appelle Marc. Il est exigeant, mais gentil.

Cet été, je vais aller à un stage de handball à la montagne. Je vais m'entraîner tous les jours !`, `
le gardien / la gardienne de but|kaleci|goalkeeper
arrêter un tir|şut kurtarmak|to save a shot
s'entraîner|antrenman yapmak|to train
l'échauffement (m.)|ısınma|warm-up
la blessure|sakatlık|injury
l'entraîneur (m.)|antrenör|coach
exigeant(e)|talepkâr, titiz|demanding
le stage|kamp, kurs|training camp`, [
      Q("À quel poste joue Léa ?", ["Ailière", "Gardienne de but", "Arbitre"], 1),
      Q("Quand sont les entraînements ?", ["Le lundi et le mercredi", "Le samedi", "Le mardi et le jeudi"], 2),
      Q("Pourquoi fait-elle un échauffement ?", ["Pour éviter les blessures", "Pour gagner de l'argent", "Pour faire plaisir à ses parents"], 0),
      Q("Comment est l'entraîneur ?", ["Toujours absent", "Très méchant", "Exigeant, mais gentil"], 2),
      Q("Qu'est-ce que Léa va faire cet été ?", ["Un voyage en Turquie", "Un stage de handball à la montagne", "Un travail dans un café"], 1)
    ]),

    R("r-tour-france", "A2", "Le Tour de France", "Fransa Bisiklet Turu", "The Tour de France", `
Le Tour de France est la course cycliste la plus célèbre du monde. Il existe depuis 1903 et il a lieu chaque année en juillet, pendant environ trois semaines. Les coureurs font à peu près 3 500 kilomètres en vingt et une étapes, dans les plaines, les Alpes et les Pyrénées. Le premier du classement général porte le maillot jaune ; le meilleur grimpeur porte un maillot blanc à pois rouges.

L'été dernier, Noé, onze ans, est allé voir une étape de montagne dans les Pyrénées avec son grand-père Antoine. Ils sont partis très tôt, parce que la route était fermée aux voitures. Ils ont marché une heure pour trouver une bonne place au bord de la route.

D'abord, ils ont vu passer la caravane publicitaire : des voitures décorées qui lançaient des casquettes, des bonbons et des porte-clés. Noé a attrapé une casquette ! Puis, presque deux heures plus tard, les coureurs sont arrivés. Ils montaient vite, malgré la pente. Les gens criaient : « Allez, allez ! » En quelques minutes, tout était fini.

« L'année prochaine, on ira dans les Alpes », a promis Antoine.`, `
la course|yarış|race
le coureur|yarışçı (bisikletçi)|rider
l'étape (f.)|etap|stage
le maillot jaune|sarı mayo (lider formas)|yellow jersey
le grimpeur|tırmanıcı|climber
la caravane publicitaire|reklam konvoyu|promotional caravan
attraper|yakalamak|to catch
la pente|yokuş, eğim|slope`, [
      Q("Depuis quand existe le Tour de France ?", ["1950", "1789", "1903"], 2),
      Q("Que porte le premier du classement général ?", ["Le maillot vert", "Le maillot jaune", "Le maillot à pois"], 1),
      Q("Pourquoi Noé et Antoine sont-ils partis très tôt ?", ["Il faisait trop chaud", "La route était fermée aux voitures", "Noé avait école"], 1),
      Q("Qu'est-ce que Noé a attrapé ?", ["Un ballon", "Un vélo", "Une casquette"], 2),
      Q("Où vont-ils aller l'année prochaine ?", ["Dans les Alpes", "En Bretagne", "À Paris"], 0)
    ]),

    R("r-premier-hiver", "A2", "Mon premier hiver en France", "Fransa'daki ilk kışım", "My first winter in France", `
Avant d'arriver en France, je pensais que l'hiver serait facile. À Izmir, où j'ai grandi, l'hiver est doux. Mais à Lille, c'était très différent !

En novembre, il a plu presque tous les jours. Le ciel était gris et, en décembre, il faisait nuit vers dix-sept heures. Au début, j'étais un peu triste et toujours fatiguée. Une collègue m'a conseillé de marcher à midi, à la lumière du jour, et de faire du sport. J'ai recommencé à courir deux fois par semaine, et ça m'a beaucoup aidée.

J'ai aussi découvert des choses très agréables. En décembre, j'ai visité le marché de Noël et je suis montée dans la grande roue, sur la Grand-Place. J'ai bu mon premier vin chaud. En janvier, mes collègues ont acheté une galette des rois : j'ai trouvé la fève et j'ai porté la couronne ! Le 2 février, pour la Chandeleur, mes voisins m'ont invitée à manger des crêpes.

Il a neigé une seule fois, et la neige est restée deux jours. Maintenant, je sais qu'il faut un bon manteau, des chaussettes chaudes et beaucoup de patience. L'hiver prochain, je serai prête !`, `
doux / douce|ılıman, yumuşak|mild
il fait nuit|hava karanlık|it's dark
conseiller|tavsiye etmek|to advise
la grande roue|dönme dolap|big wheel
le vin chaud|sıcak şarap|mulled wine
la galette des rois|Krallar pastası (Ocak)|kings' cake
la fève|pastanın içindeki küçük figür|charm hidden in the cake
le manteau|palto, mont|coat`, [
      Q("Où Esin a-t-elle grandi ?", ["À Istanbul", "À Izmir", "À Ankara"], 1),
      Q("En décembre, à Lille, il faisait nuit vers…", ["17 h", "15 h", "20 h"], 0),
      Q("Qu'est-ce qui l'a aidée quand elle était triste ?", ["Dormir beaucoup", "Regarder la télévision", "Marcher à midi et courir"], 2),
      Q("Qu'est-ce qu'elle a trouvé dans la galette des rois ?", ["Une pièce", "La fève", "Une bague"], 1),
      Q("Qu'est-ce qu'on mange à la Chandeleur ?", ["Des crêpes", "De la raclette", "Du chocolat"], 0)
    ]),

    R("r-lyon", "A2", "Une semaine à Lyon", "Lyon'da bir hafta", "A week in Lyon", `
Le mois dernier, Aïcha a passé une semaine à Lyon chez sa cousine Manon. C'était sa première visite dans la troisième ville de France.

Le premier jour, elles se sont promenées dans le Vieux-Lyon, un quartier ancien classé au patrimoine mondial de l'UNESCO. Manon lui a montré les traboules, des passages qui traversent les immeubles. On raconte qu'autrefois, les ouvriers de la soie les utilisaient pour transporter leurs tissus à l'abri de la pluie.

Le lendemain, elles ont pris le funiculaire pour monter à la basilique de Fourvière. D'en haut, la vue était magnifique : on voyait toute la ville, les deux fleuves, le Rhône et la Saône, et même les Alpes au loin.

Lyon est aussi une capitale de la gastronomie. Un soir, elles ont dîné dans un bouchon, un petit restaurant typique. Aïcha a goûté une salade lyonnaise et une quenelle. C'était un peu lourd, mais délicieux !

Le samedi, il faisait beau, alors elles ont fait du vélo au parc de la Tête d'Or. Avant de partir, Aïcha a promis : « Je reviendrai en décembre pour la Fête des Lumières ! »`, `
le patrimoine mondial|dünya mirası|world heritage
la traboule|binaların içinden geçen geçit|covered passageway
la soie|ipek|silk
à l'abri de|… den korunarak|sheltered from
le funiculaire|füniküler|funicular railway
le fleuve|nehir (denize dökülen)|river
le bouchon|geleneksel Lyon lokantası|traditional Lyon restaurant
lourd(e)|ağır (yemek)|heavy, rich`, [
      Q("Chez qui Aïcha a-t-elle passé la semaine ?", ["Chez une amie", "Chez sa cousine Manon", "À l'hôtel"], 1),
      Q("Qu'est-ce qu'une traboule ?", ["Un plat typique", "Une église", "Un passage qui traverse les immeubles"], 2),
      Q("Comment sont-elles montées à Fourvière ?", ["En funiculaire", "À pied", "En taxi"], 0),
      Q("Comment s'appellent les deux fleuves de Lyon ?", ["La Seine et la Loire", "Le Rhône et la Saône", "La Garonne et le Rhin"], 1),
      Q("Quand Aïcha veut-elle revenir ?", ["En décembre", "En juillet", "À Pâques"], 0)
    ]),

    R("r-14-juillet", "A2", "Le 14 juillet", "14 Temmuz", "Bastille Day", `
Le 14 juillet est la fête nationale française. Ce jour-là, on se souvient de la prise de la Bastille, une prison de Paris, le 14 juillet 1789, au début de la Révolution française. C'est un jour férié : la plupart des gens ne travaillent pas.

Cette année, Thomas et sa copine Elif ont passé le 14 juillet à Paris. La veille au soir, ils sont allés au bal des pompiers : dans beaucoup de casernes, les pompiers organisent une grande fête avec de la musique. Ils ont dansé jusqu'à deux heures du matin !

Le 14 au matin, ils ont regardé le défilé militaire à la télévision, chez les parents de Thomas. Des soldats ont marché sur les Champs-Élysées et des avions ont dessiné dans le ciel les couleurs du drapeau : bleu, blanc, rouge. Elif a trouvé ça impressionnant.

L'après-midi, ils ont pique-niqué au Champ-de-Mars avec des amis. Il y avait déjà beaucoup de monde, parce que tout le monde voulait une bonne place pour le soir. À vingt-trois heures, après un grand concert gratuit, le feu d'artifice a commencé au-dessus de la tour Eiffel. Elif a pris des dizaines de photos pour sa famille en Turquie.`, `
la fête nationale|ulusal bayram|national day
la prise de la Bastille|Bastille'in alınması|storming of the Bastille
le jour férié|resmi tatil|public holiday
la veille|bir önceki gün|the day before
la caserne de pompiers|itfaiye istasyonu|fire station
le défilé|geçit töreni|parade
le drapeau|bayrak|flag
le feu d'artifice|havai fişek gösterisi|fireworks`, [
      Q("Que s'est-il passé le 14 juillet 1789 ?", ["La construction de la tour Eiffel", "La prise de la Bastille", "La fin d'une guerre"], 1),
      Q("Qui organise les bals du 13 juillet ?", ["Les pompiers", "Les écoles", "Les restaurants"], 0),
      Q("Comment ont-ils vu le défilé militaire ?", ["Sur les Champs-Élysées", "Sur leur téléphone, dans le métro", "À la télévision, chez les parents de Thomas"], 2),
      Q("Pourquoi y avait-il beaucoup de monde au Champ-de-Mars ?", ["Il y avait un match", "Les gens voulaient une bonne place pour le soir", "Il y avait un marché"], 1),
      Q("Où était le feu d'artifice ?", ["Au-dessus de la tour Eiffel", "Sur la Seine, à Rouen", "Au-dessus de la Bastille"], 0)
    ]),

    R("r-fromage", "A2", "Les Français et le fromage", "Fransızlar ve peynir", "The French and cheese", `
On dit souvent qu'il existe plus de mille fromages en France. Il y en a au lait de vache, de chèvre ou de brebis, des doux et des très forts. En moyenne, chaque Français en mange plus de vingt-cinq kilos par an !

Deniz, une étudiante turque, est arrivée à Grenoble en septembre. En Turquie, elle mangeait surtout du beyaz peynir au petit-déjeuner. Au début, en France, elle trouvait l'odeur de certains fromages trop forte.

Un samedi, elle est entrée dans une fromagerie. Le fromager, monsieur Girard, lui a fait goûter trois fromages. D'abord un comté, du Jura, au lait de vache : il avait un goût doux, un peu sucré. Ensuite un roquefort, au lait de brebis, qui vieillit dans des caves naturelles du sud de la France. Deniz l'a trouvé trop salé. Enfin, un camembert de Normandie, crémeux et parfumé. C'était son préféré.

Monsieur Girard lui a aussi expliqué une habitude française : pendant un repas, on sert le fromage après le plat principal et avant le dessert, avec du pain. « Et on ne coupe jamais la pointe du brie ! » a-t-il ajouté en riant.

Deniz est repartie avec un morceau de comté. Le soir, elle l'a mangé avec du pain et… des olives noires. Un mélange franco-turc parfait !`, `
le lait de vache / de chèvre / de brebis|inek / keçi / koyun sütü|cow's / goat's / sheep's milk
la fromagerie|peynirci dükkânı|cheese shop
faire goûter|tattırmak|to let someone taste
vieillir|olgunlaşmak, yıllanmak|to age, to mature
la cave|mahzen, mağara|cellar, cave
salé(e)|tuzlu|salty
crémeux / crémeuse|kremamsı|creamy
la pointe|uç|tip`, [
      Q("Combien de fromages existe-t-il en France, selon le texte ?", ["Environ cent", "Plus de mille", "Exactement 365"], 1),
      Q("Le roquefort est fait avec du lait de…", ["vache", "chèvre", "brebis"], 2),
      Q("Quel fromage Deniz a-t-elle préféré ?", ["Le camembert", "Le comté", "Le roquefort"], 0),
      Q("Quand mange-t-on le fromage pendant un repas ?", ["Avant l'entrée", "Avec le café", "Après le plat principal et avant le dessert"], 2),
      Q("Avec quoi Deniz a-t-elle mangé le comté le soir ?", ["Avec du miel", "Avec du pain et des olives", "Avec de la confiture"], 1)
    ]),

    R("r-diner-turc", "A2", "Un dîner turc pour des amis français", "Fransız arkadaşlar için Türk akşam yemeği", "A Turkish dinner for French friends", `
Samedi dernier, j'ai invité quatre amis français à dîner chez moi : Claire, Mathieu, Sofiane et Lucie. C'était la première fois que je cuisinais turc pour des Français, et j'étais un peu stressée.

J'ai commencé le matin. J'ai préparé des mezzés : du cacık avec du yaourt, du concombre et de l'ail, des feuilles de vigne farcies et de l'ezme, une salade de tomates un peu piquante. Ensuite, j'ai fait des börek au fromage et aux épinards. Pour le plat principal, j'ai choisi des köfte avec du riz pilaf. Pour le dessert, j'ai acheté du baklava dans une pâtisserie turque du quartier : je n'avais pas le temps de le faire !

Mes amis sont arrivés à vingt heures, avec des fleurs. Ils ont tout goûté. Mathieu a adoré le cacık : il pensait que c'était une sauce, mais en Turquie, on le mange aussi comme une soupe froide. Lucie, qui est végétarienne, a mangé beaucoup de börek.

À la fin, j'ai servi du thé dans de petits verres en forme de tulipe. Claire a demandé pourquoi on ne met pas de lait. Nous avons parlé jusqu'à minuit, en français et un peu en anglais.

Le mois prochain, ce sera leur tour : ils vont me faire une raclette !`, `
inviter|davet etmek|to invite
le concombre|salatalık|cucumber
l'ail (m.)|sarımsak|garlic
les feuilles de vigne farcies|yaprak sarma|stuffed vine leaves
piquant(e)|acı (biberli)|spicy
les épinards (m.)|ıspanak|spinach
le plat principal|ana yemek|main course
végétarien(ne)|vejetaryen|vegetarian`, [
      Q("Combien d'amis Esin a-t-elle invités ?", ["Deux", "Quatre", "Six"], 1),
      Q("Qu'est-ce qu'Esin n'a pas fait elle-même ?", ["Les börek", "Le cacık", "Le baklava"], 2),
      Q("Qu'est-ce que Mathieu pensait du cacık ?", ["Que c'était une sauce", "Que c'était un dessert", "Que c'était trop piquant"], 0),
      Q("Pourquoi Lucie a-t-elle mangé beaucoup de börek ?", ["Elle n'aime pas le riz", "Elle est végétarienne", "Elle arrivait du sport"], 1),
      Q("Qu'est-ce que ses amis vont préparer le mois prochain ?", ["Un couscous", "Une pizza", "Une raclette"], 2)
    ])
  );
})();
