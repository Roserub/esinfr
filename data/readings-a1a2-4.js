/* Graded readings, A2 set 4: injuries, running, food, stress, health system, mountains, games, moving and volunteering.
   Same format as data/readings.js: { id, level, t:{fr,tr,en}, text, gloss: [fr, tr, en][], qs: [{ q, o, a }] }. */
(function () {
  const G = s => s.trim().split("\n").map(l => l.split("|").map(x => x.trim()));
  const Q = (q, o, a) => ({ q, o, a });
  const R = (id, level, fr, tr, en, text, gloss, qs) => ({ id, level, t: { fr, tr, en }, text: text.trim(), gloss: G(gloss), qs });

  window.READINGS = window.READINGS || [];
  window.READINGS.push(
    R("r-entorse-cheville", "A2", "Une entorse à la cheville", "Ayak bileği burkulması", "A sprained ankle", `
Samedi dernier, Hugo a joué au football avec ses amis au stade de son quartier. Il faisait beau et tout le monde était de bonne humeur. Après vingt minutes, Hugo a sauté pour prendre le ballon, mais il est mal retombé sur le pied droit.

Tout de suite, il a eu très mal. Sa cheville était rouge et elle a gonflé très vite. Il ne pouvait plus marcher. Son ami Karim l'a aidé à s'asseoir et il a mis de la glace sur la cheville.

Le soir, Hugo est allé aux urgences. Le médecin a examiné son pied et il a fait une radio. Heureusement, il n'y avait pas de fracture : c'était une entorse. Le médecin lui a donné une attelle, des béquilles et des médicaments contre la douleur.

Pendant une semaine, Hugo est resté à la maison. Il a gardé la jambe en hauteur et il a mis de la glace trois fois par jour. Ensuite, il a commencé des séances chez une kinésithérapeute. Elle lui a montré des exercices d'équilibre pour renforcer sa cheville.

Aujourd'hui, un mois plus tard, Hugo marche normalement. Il va bientôt rejouer au football. Mais cette fois, il va toujours faire un bon échauffement avant le match !`, `
une entorse|burkulma|sprain
la cheville|ayak bileği|ankle
retomber|(zıpladıktan sonra) yere inmek|to land (after a jump)
gonfler|şişmek|to swell
les urgences (f.)|acil servis|A&E, emergency room
une radio|röntgen|X-ray
une fracture|kırık|fracture
une attelle|atel|splint, brace
les béquilles (f.)|koltuk değnekleri|crutches
l'échauffement (m.)|ısınma|warm-up`, [
      Q("Avec qui Hugo a-t-il joué au football ?", ["Avec ses collègues", "Avec ses amis", "Avec son frère"], 1),
      Q("Qu'est-ce que Karim a mis sur la cheville ?", ["De la glace", "Une crème", "Un bandage"], 0),
      Q("Qu'est-ce que le médecin a trouvé ?", ["Une fracture du pied", "Une entorse simple", "Un problème au genou"], 1),
      Q("Qui Hugo a-t-il vu après une semaine ?", ["Un chirurgien du sport", "Un pharmacien", "Une kinésithérapeute"], 2),
      Q("Qu'est-ce que Hugo va faire avant chaque match ?", ["Manger un plat de pâtes", "Boire un grand café", "Faire un bon échauffement"], 2)
    ]),

    R("r-marathon-paris", "A2", "Le marathon de Paris", "Paris Maratonu", "The Paris Marathon", `
Chaque année, au mois d'avril, des milliers de personnes courent le marathon de Paris. C'est une course de 42,195 kilomètres. Le départ est sur les Champs-Élysées et l'arrivée est avenue Foch, près de l'Arc de Triomphe.

Les coureurs passent devant des monuments célèbres : la place de la Concorde, la Bastille, la tour Eiffel… Ils traversent aussi deux grands parcs, le bois de Vincennes et le bois de Boulogne. Le long du parcours, le public applaudit et des musiciens jouent pour donner de l'énergie aux coureurs.

Cette année, Amélie, 35 ans, a couru son premier marathon. Elle s'est entraînée pendant quatre mois : elle courait trois ou quatre fois par semaine, et le dimanche, elle faisait une longue sortie de deux heures. Souvent, elle courait le matin, avant le travail. Elle a aussi fait attention à son alimentation et à son sommeil.

Le jour de la course, elle était très stressée. Au kilomètre 30, elle avait mal aux jambes et elle voulait arrêter. Mais sa famille l'attendait avec une pancarte : « Allez, Amélie ! » Alors, elle a continué.

Elle a fini la course en 4 heures et 25 minutes. À l'arrivée, elle a reçu une médaille. « J'étais épuisée, mais tellement fière ! », dit-elle. L'année prochaine, elle voudrait recommencer.`, `
la course|koşu, yarış|race
le coureur / la coureuse|koşucu|runner
le départ|başlangıç noktası|start
l'arrivée (f.)|bitiş noktası|finish
le parcours|parkur, güzergâh|route, course
applaudir|alkışlamak|to applaud
s'entraîner|antrenman yapmak|to train
une pancarte|pankart|sign, placard
épuisé(e)|bitkin|exhausted
fier / fière|gururlu|proud`, [
      Q("Quelle est la distance d'un marathon ?", ["42,195 kilomètres", "24,195 kilomètres", "21,1 kilomètres"], 0),
      Q("Où est l'arrivée du marathon de Paris ?", ["Place de la Bastille", "Avenue Foch", "Au bois de Vincennes"], 1),
      Q("Pendant combien de temps Amélie s'est-elle entraînée ?", ["Deux mois", "Un an", "Quatre mois"], 2),
      Q("Pourquoi Amélie a-t-elle continué au kilomètre 30 ?", ["Elle a bu un café", "Sa famille l'encourageait", "Un ami courait avec elle"], 1),
      Q("Comment était Amélie à l'arrivée ?", ["Épuisée et fière", "Malade et triste", "Fâchée et déçue"], 0)
    ]),

    R("r-cantine-gouter", "A2", "La cantine et le goûter", "Okul yemekhanesi ve ikindi atıştırmalığı", "School lunch and afternoon snack", `
En France, beaucoup d'enfants mangent à la cantine le midi. Le repas est complet : une entrée, un plat avec des légumes, un produit laitier, comme un yaourt ou un morceau de fromage, et un dessert, souvent un fruit. Les menus sont préparés avec une diététicienne.

Léa, huit ans, aime bien la cantine. « Le lundi, on mange souvent du poisson, et le jeudi, il y a un repas végétarien. Je n'aime pas les épinards, mais je goûte toujours ! », raconte-t-elle.

À 16 h 30, après l'école, c'est l'heure du goûter. C'est un petit repas très important pour les enfants français. Chez Léa, le goûter, c'est souvent une tartine de pain avec du beurre et du chocolat, un fruit et un verre de lait.

Le soir, la famille dîne vers 19 h 30, tous ensemble. Les parents de Léa essaient de ne pas manger devant la télévision. On parle de la journée et on prend le temps de manger. Le dîner est souvent plus léger que le déjeuner : une soupe, une omelette ou des pâtes avec une salade.

Pour les Français, bien manger, ce n'est pas seulement manger des légumes. C'est aussi manger à heures fixes, ne pas grignoter entre les repas et partager un moment agréable à table.`, `
la cantine|okul yemekhanesi|school canteen
le goûter|ikindi atıştırmalığı|afternoon snack
l'entrée (f.)|ilk yemek, başlangıç|starter
un produit laitier|süt ürünü|dairy product
la diététicienne|diyetisyen|dietitian
goûter (verbe)|tadına bakmak|to taste
la tartine|üstüne bir şey sürülmüş ekmek dilimi|slice of bread with a spread
à heures fixes|belli saatlerde|at set times
grignoter|atıştırmak|to snack, to nibble`, [
      Q("Qu'est-ce qu'il y a souvent comme dessert à la cantine ?", ["Un gâteau", "Une glace", "Un fruit"], 2),
      Q("Quel jour y a-t-il un repas végétarien ?", ["Le jeudi", "Le lundi", "Le vendredi"], 0),
      Q("Que fait Léa avec les épinards ?", ["Elle les mange tous", "Elle les goûte", "Elle les donne à une amie"], 1),
      Q("À quelle heure est le goûter ?", ["À 12 h", "À 16 h 30", "À 19 h 30"], 1),
      Q("Pour les Français, bien manger, c'est aussi…", ["manger devant la télé", "grignoter toute la journée", "manger à heures fixes"], 2)
    ]),

    R("r-respirer-stress", "A2", "Respirer pour moins stresser", "Daha az stres için nefes almak", "Breathing to feel less stressed", `
Malik a 22 ans et il est étudiant en informatique à Toulouse. Le mois dernier, il avait beaucoup d'examens. Il dormait mal, il avait mal au ventre et il oubliait tout. Il était très stressé.

Un jour, il en a parlé à l'infirmière de l'université. Elle l'a écouté et elle lui a appris un exercice simple : la respiration « 4-6 ». On inspire par le nez pendant quatre secondes, puis on expire lentement par la bouche pendant six secondes. On répète l'exercice pendant cinq minutes.

Au début, Malik trouvait ça un peu bizarre. Mais il a essayé chaque matin et chaque soir. Après quelques jours, il se sentait plus calme. Son cœur battait moins vite et il s'endormait plus facilement.

L'infirmière lui a donné d'autres conseils : marcher un peu tous les jours, boire moins de café, faire des pauses pendant les révisions et parler à ses amis. Elle lui a aussi conseillé de ne pas regarder son téléphone au lit.

Aujourd'hui, les examens sont finis et Malik a réussi. Mais il continue à faire son exercice de respiration. « Le stress, ça arrive à tout le monde. Maintenant, je sais comment le gérer », dit-il en souriant.`, `
stressé(e)|stresli|stressed
avoir mal au ventre|karnı ağrımak|to have a stomach ache
l'infirmière (f.)|hemşire|nurse
inspirer|nefes almak|to breathe in
expirer|nefes vermek|to breathe out
lentement|yavaşça|slowly
s'endormir|uykuya dalmak|to fall asleep
les révisions (f.)|sınava hazırlık, tekrar|revision
gérer|yönetmek, başa çıkmak|to manage`, [
      Q("Qu'est-ce que Malik étudie ?", ["L'informatique", "La médecine", "Le sport"], 0),
      Q("Pendant combien de secondes expire-t-on dans l'exercice ?", ["Quatre secondes", "Cinq secondes", "Six secondes"], 2),
      Q("Au début, comment Malik trouvait-il l'exercice ?", ["Très facile", "Un peu bizarre", "Très ennuyeux"], 1),
      Q("Quel conseil l'infirmière a-t-elle donné ?", ["Boire beaucoup plus de café", "Travailler sans pause", "Marcher un peu chaque jour"], 2),
      Q("Qu'est-ce que Malik fait encore aujourd'hui ?", ["Il prend des somnifères le soir", "Il fait l'exercice de respiration", "Il va voir l'infirmière chaque jour"], 1)
    ]),

    R("r-infirmiere-turque", "A2", "Une infirmière turque en France", "Fransa'da Türk bir hemşire", "A Turkish nurse in France", `
Zeynep a 34 ans. Elle vient d'Izmir, en Turquie. Là-bas, elle a été infirmière pendant dix ans dans un grand hôpital. Il y a trois ans, elle est arrivée en France avec son mari, qui avait un nouveau travail à Strasbourg.

Au début, c'était difficile. Elle ne parlait pas bien français et son diplôme turc n'était pas reconnu en France. Pendant un an, elle a travaillé comme aide à domicile chez des personnes âgées. « J'aidais une dame de 90 ans. Elle me corrigeait quand je faisais des fautes de français ! », raconte-t-elle en riant.

Le soir, elle suivait des cours de français. Elle regardait aussi des séries françaises avec les sous-titres. Petit à petit, elle a fait des progrès. Ensuite, elle a préparé un dossier pour faire reconnaître son diplôme et elle a fait un stage dans une clinique.

Depuis six mois, Zeynep travaille comme infirmière dans un service de cardiologie. Elle adore son équipe. Parfois, elle traduit pour des patients turcs qui ne parlent pas français, et ils sont très contents.

« Mon conseil ? Soyez patients avec vous-mêmes. Apprendre une langue et recommencer dans un nouveau pays, ça prend du temps. Mais c'est possible ! »`, `
l'infirmière (f.)|hemşire|nurse
reconnu(e)|tanınan, denkliği olan|recognised
l'aide à domicile|evde bakım elemanı|home carer
une personne âgée|yaşlı kişi|elderly person
une faute|hata|mistake
les sous-titres (m.)|altyazı|subtitles
petit à petit|yavaş yavaş|little by little
le stage|staj|placement, internship
le service|(hastanede) servis, bölüm|hospital department
traduire|çevirmek|to translate`, [
      Q("Combien de temps Zeynep a-t-elle travaillé à Izmir ?", ["Trois ans", "Dix ans", "Six mois"], 1),
      Q("Pourquoi est-elle venue en France ?", ["Pour le travail de son mari", "Pour faire des études de médecine", "Pour rendre visite à sa famille"], 0),
      Q("Qui corrigeait le français de Zeynep ?", ["Son mari, le soir", "Une dame âgée", "Une collègue de la clinique"], 1),
      Q("Comment Zeynep a-t-elle fait des progrès en français ?", ["Avec des cours et des séries", "Avec des livres de cuisine", "Avec des chansons turques"], 0),
      Q("Où travaille Zeynep aujourd'hui ?", ["Dans une pharmacie du centre", "Chez des personnes âgées", "Dans un service de cardiologie"], 2)
    ]),

    R("r-medecin-traitant", "A2", "Le médecin traitant et la mutuelle", "Aile hekimi ve tamamlayıcı sigorta", "The regular doctor and top-up insurance", `
Quand Ana est arrivée en France, elle ne comprenait pas bien le système de santé. Sa collègue Sandrine lui a tout expliqué autour d'un café. Ana est portugaise et elle travaille dans une agence de voyages à Bordeaux.

« D'abord, tu dois choisir un médecin traitant. C'est ton médecin habituel, en général un généraliste près de chez toi. Tu remplis un formulaire avec lui, et il l'envoie à l'Assurance maladie. Si tu n'as pas de médecin traitant, tu es moins bien remboursée. »

« Quand tu vas chez le médecin, tu donnes ta carte Vitale. Une consultation coûte 30 €. La Sécurité sociale rembourse une grande partie, mais pas tout. C'est pour ça qu'on a une mutuelle. »

« Une mutuelle, c'est une assurance complémentaire. Tu paies un peu chaque mois, et elle rembourse le reste : chez le médecin, à la pharmacie, chez le dentiste ou pour des lunettes. Souvent, l'entreprise propose une mutuelle à ses salariés. »

Le lendemain, Ana a demandé une mutuelle au service du personnel. Puis elle a pris rendez-vous avec une généraliste de son quartier. Maintenant, elle a un médecin traitant et elle se sent plus tranquille. Elle a aussi gardé tous les papiers dans une pochette, pour ne rien perdre.`, `
le système de santé|sağlık sistemi|health system
le médecin traitant|aile hekimi (kayıtlı doktor)|regular doctor, registered GP
le / la généraliste|pratisyen hekim|general practitioner
rembourser|geri ödemek|to reimburse
l'Assurance maladie|Fransız devlet sağlık sigortası|French national health insurance
la consultation|muayene|consultation
la mutuelle|tamamlayıcı sağlık sigortası|top-up health insurance
le salarié / la salariée|maaşlı çalışan|employee
le service du personnel|personel bölümü, insan kaynakları|HR department
tranquille|içi rahat|at ease, relaxed`, [
      Q("Qui explique le système de santé à Ana ?", ["Sa collègue", "Sa voisine", "Son médecin"], 0),
      Q("Qu'est-ce qu'un médecin traitant ?", ["Son médecin habituel", "Un médecin de l'hôpital", "Un médecin pour le sport"], 0),
      Q("Combien coûte une consultation chez le généraliste ?", ["20 €", "25 €", "30 €"], 2),
      Q("À quoi sert une mutuelle ?", ["À payer le loyer", "À rembourser le reste", "À trouver un médecin"], 1),
      Q("Qu'est-ce qu'Ana a fait le lendemain ?", ["Elle a acheté des lunettes", "Elle est allée à la pharmacie", "Elle a demandé une mutuelle"], 2)
    ]),

    R("r-randonnee-alpes", "A2", "Une randonnée dans les Alpes", "Alpler'de bir doğa yürüyüşü", "A hike in the Alps", `
En juillet, Thomas et sa copine Mei ont passé une semaine à Chamonix, au pied du mont Blanc. Ils aiment beaucoup la montagne et la marche. Ils dormaient dans un petit hôtel avec une vue sur les glaciers.

Le mercredi, ils ont fait une grande randonnée jusqu'au lac Blanc. Ils sont partis à 7 heures du matin, parce qu'en été, il fait vite chaud. Dans leur sac à dos, il y avait de l'eau, des sandwichs, des fruits secs, de la crème solaire, un pull et un vêtement de pluie.

La montée était difficile. Le chemin était raide et il y avait beaucoup de pierres. Ils ont marché lentement et ils ont fait des pauses pour boire. En route, ils ont vu des marmottes et des bouquetins !

Après trois heures de marche, ils sont arrivés au lac. La vue sur le mont Blanc était magnifique. Ils ont pique-niqué au bord de l'eau et ils ont pris beaucoup de photos.

L'après-midi, le ciel est devenu gris et on entendait le tonnerre au loin. Ils sont descendus rapidement. Le soir, ils avaient mal aux jambes, mais ils étaient très heureux. « On revient l'année prochaine ! », a dit Mei.`, `
la randonnée|doğa yürüyüşü|hike
le sac à dos|sırt çantası|backpack
la crème solaire|güneş kremi|sun cream
la montée|tırmanış, yokuş|climb, ascent
raide|dik|steep
la pierre|taş|stone
la marmotte|dağ sıçanı|marmot
le bouquetin|dağ keçisi|ibex
pique-niquer|piknik yapmak|to have a picnic
le tonnerre|gök gürültüsü|thunder`, [
      Q("Où Thomas et Mei ont-ils passé une semaine ?", ["À Chamonix", "À Grenoble", "À Annecy"], 0),
      Q("Pourquoi sont-ils partis tôt le matin ?", ["Le lac ferme à midi", "Ils avaient un train", "Il fait vite chaud"], 2),
      Q("Qu'est-ce qu'ils ont vu en route ?", ["Des ours bruns", "Des marmottes", "Des chevaux sauvages"], 1),
      Q("Combien de temps ont-ils marché pour arriver au lac ?", ["Une heure", "Trois heures", "Six heures"], 1),
      Q("Pourquoi sont-ils descendus rapidement ?", ["Le temps changeait", "Mei était malade", "Ils étaient en retard"], 0)
    ]),

    R("r-soiree-jeux", "A2", "Une soirée jeux de société", "Kutu oyunları gecesi", "A board game evening", `
Chaque premier vendredi du mois, Julien organise une soirée jeux chez lui. Il invite des amis, des collègues et parfois des voisins. Chacun apporte quelque chose à boire ou à manger. Julien a plus de cinquante jeux dans son salon !

Vendredi dernier, ils étaient huit autour de la table. D'abord, ils ont joué au Dobble, un petit jeu de cartes très rapide : il faut trouver le même dessin sur deux cartes. Tout le monde criait et riait !

Ensuite, ils ont joué au Scrabble en français. Ce n'était pas facile pour Aylin, une amie turque qui apprend le français. Mais les autres l'ont aidée, et elle a trouvé un mot qui rapportait beaucoup de points : « kiwi » ! Elle était très fière.

Vers minuit, ils ont fini avec un jeu d'enquête. Les joueurs devaient travailler en équipe pour trouver un coupable. Ils ont beaucoup discuté, mais ils n'ont pas trouvé la solution.

Pour Aylin, ces soirées sont parfaites pour apprendre le français. « On parle, on rigole, et j'apprends des mots sans faire d'efforts. Et puis, quand on joue, on oublie le stress ! » Le mois prochain, elle va apporter un jeu turc : le tavla !`, `
le jeu de société|kutu oyunu|board game
chacun / chacune|her biri, herkes|each one, everyone
apporter|getirmek|to bring
le dessin|resim, çizim|drawing, picture
crier|bağırmak|to shout
rapporter des points|puan kazandırmak|to score points
l'enquête (f.)|soruşturma, dedektiflik|investigation
le coupable|suçlu|culprit
rigoler|gülmek, eğlenmek (günlük dil)|to laugh, to have fun (informal)`, [
      Q("Quand Julien organise-t-il ses soirées jeux ?", ["Tous les samedis soir", "Le premier vendredi du mois", "Le dernier dimanche du mois"], 1),
      Q("Combien de personnes étaient autour de la table ?", ["Huit", "Six", "Dix"], 0),
      Q("Quel mot Aylin a-t-elle trouvé au Scrabble ?", ["Pomme", "Chat", "Kiwi"], 2),
      Q("Est-ce qu'ils ont trouvé le coupable ?", ["Oui, en dix minutes", "Oui, grâce à Aylin", "Non, pas cette fois"], 2),
      Q("Pour Aylin, ces soirées sont parfaites pour…", ["apprendre le français", "dormir tôt", "gagner de l'argent"], 0)
    ]),

    R("r-demenagement", "A2", "Le jour du déménagement", "Taşınma günü", "Moving day", `
Samedi dernier, Clara a déménagé. Elle quittait son petit studio pour un appartement de deux pièces, plus grand et plus lumineux, à l'autre bout de la ville.

Pendant deux semaines, elle a préparé des cartons. Elle a écrit sur chaque carton le nom de la pièce : « cuisine », « salle de bains », « chambre ». Elle a aussi donné des vêtements et des livres à une association, parce qu'elle avait trop de choses. À la fin, il n'y avait plus de place pour s'asseoir !

Le jour J, cinq amis sont venus l'aider. Ils ont loué une camionnette. Le problème : le nouvel appartement est au quatrième étage, sans ascenseur ! Ils ont porté le canapé, le frigo et les cartons dans l'escalier. À midi, tout le monde était fatigué et avait faim.

Clara a commandé des pizzas pour remercier ses amis. Ils ont mangé par terre, au milieu des cartons, et ils ont beaucoup ri.

Le soir, Clara était seule dans son nouvel appartement. Elle n'avait pas encore de rideaux et elle ne trouvait pas sa brosse à dents. Mais elle était contente. Le lendemain, elle a laissé un petit mot dans le hall pour ses nouveaux voisins : « Désolée pour le bruit de samedi ! »`, `
déménager|taşınmak|to move (house)
le studio|stüdyo daire|studio flat
lumineux / lumineuse|aydınlık|bright
le carton|karton kutu, koli|cardboard box
le jour J|büyük gün|the big day
louer|kiralamak|to rent, to hire
la camionnette|kamyonet|van
l'ascenseur (m.)|asansör|lift, elevator
porter|taşımak|to carry
le rideau|perde|curtain`, [
      Q("Pourquoi Clara a-t-elle déménagé ?", ["Pour un logement plus grand", "Pour habiter avec une amie", "Pour être près de son travail"], 0),
      Q("Qu'est-ce qu'elle a écrit sur les cartons ?", ["Son adresse", "Le prix des objets", "Le nom de la pièce"], 2),
      Q("Quel était le problème du nouvel appartement ?", ["Il était trop petit", "Il n'avait pas d'ascenseur", "Il n'avait pas de cuisine"], 1),
      Q("Qu'est-ce qu'ils ont mangé à midi ?", ["Des sandwichs", "Des pizzas", "Une salade"], 1),
      Q("Qu'est-ce que Clara ne trouvait pas le soir ?", ["Ses clés de voiture", "Son téléphone portable", "Sa brosse à dents"], 2)
    ]),

    R("r-restos-coeur", "A2", "Un hiver aux Restos du cœur", "Restos du Cœur'de bir kış", "A winter at the Restos du Cœur", `
Les Restos du cœur sont une association française créée en 1985 par l'humoriste Coluche. Elle aide les personnes qui n'ont pas assez d'argent pour bien manger. Aujourd'hui, plus de 70 000 bénévoles travaillent dans toute la France.

Bernard, 67 ans, est à la retraite. Avant, il était professeur de mathématiques. Depuis trois ans, il est bénévole dans un centre des Restos à Nantes. Il y va deux matinées par semaine, le mardi et le vendredi. L'hiver, il y a beaucoup de travail.

Le matin, il arrive à 8 h 30. Avec les autres bénévoles, il range les produits qui arrivent : des pâtes, du riz, des conserves, du lait, des légumes. Ensuite, les familles arrivent et Bernard les accueille. Il prépare les paniers et il discute avec les gens. À midi, il est fatigué, mais il rentre chez lui le cœur léger.

« Je ne donne pas seulement de la nourriture. Je donne aussi un sourire et un peu de temps. Certaines personnes sont seules, elles ont besoin de parler », explique-t-il.

Chaque année, les Restos du cœur organisent aussi une grande collecte dans les supermarchés. Si vous voulez aider, vous pouvez donner des produits ou devenir bénévole, même seulement quelques heures par mois.`, `
l'association (f.)|dernek, yardım kuruluşu|association, charity
l'humoriste|komedyen|comedian
le / la bénévole|gönüllü|volunteer
à la retraite|emekli|retired
ranger|yerleştirmek, düzenlemek|to put away, to tidy
les conserves (f.)|konserveler|tinned food
accueillir|karşılamak|to welcome
le panier|sepet|basket
la collecte|bağış toplama kampanyası|collection drive`, [
      Q("Qui a créé les Restos du cœur ?", ["Un humoriste", "Un chanteur", "Un cuisinier"], 0),
      Q("Quand Bernard va-t-il aux Restos ?", ["Le lundi et le jeudi", "Le samedi et le dimanche", "Le mardi et le vendredi"], 2),
      Q("Que fait Bernard quand les familles arrivent ?", ["Il fait la cuisine", "Il les accueille", "Il range la salle"], 1),
      Q("Selon Bernard, il donne aussi…", ["de l'argent et des vêtements", "des cours de cuisine", "un sourire et un peu de temps"], 2),
      Q("Comment peut-on aider les Restos du cœur ?", ["Donner des produits", "Acheter une carte", "Payer un abonnement"], 0)
    ])
  );
})();
