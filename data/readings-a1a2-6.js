/* Graded readings, A2 set 6: knee rehab, sports nutrition, exercise on prescription, swimming, Paris 2024, first job, a letter to Turkey, recycling, driving licence and village life.
   Same format as data/readings.js: { id, level, t:{fr,tr,en}, text, gloss: [fr, tr, en][], qs: [{ q, o, a }] }. */
(function () {
  const G = s => s.trim().split("\n").map(l => l.split("|").map(x => x.trim()));
  const Q = (q, o, a) => ({ q, o, a });
  const R = (id, level, fr, tr, en, text, gloss, qs) => ({ id, level, t: { fr, tr, en }, text: text.trim(), gloss: G(gloss), qs });

  window.READINGS = window.READINGS || [];
  window.READINGS.push(
    R("r-genou-reeducation", "A2", "Un genou blessé et la rééducation", "Sakatlanan bir diz ve rehabilitasyon", "An injured knee and rehab", `
Inès a 24 ans et elle joue au handball depuis l'âge de dix ans. En mars dernier, pendant un match important, elle a couru vers le but, puis elle a tourné très vite. À ce moment-là, elle a entendu un petit « crac » dans son genou gauche et elle est tombée.

Le médecin du club est venu tout de suite. Inès avait très mal et son genou a gonflé. Quelques jours plus tard, elle a passé une IRM. Le résultat n'était pas bon : elle avait une rupture du ligament croisé antérieur. C'est une blessure fréquente chez les handballeuses.

En avril, un chirurgien l'a opérée. Après l'opération, Inès a commencé la rééducation avec un kiné, Marc. Au début, les exercices étaient très simples : plier la jambe, contracter le muscle de la cuisse, marcher avec des béquilles. « J'étais triste et je trouvais ça très long », raconte-t-elle.

Petit à petit, les exercices sont devenus plus difficiles. Elle a fait du vélo d'appartement, de la musculation et des exercices d'équilibre sur un pied. Au quatrième mois, elle a recommencé à courir doucement. Marc lui répétait toujours : « Patience ! Ton genou a besoin de temps. »

Aujourd'hui, neuf mois après sa blessure, Inès s'entraîne de nouveau avec son équipe. Elle a encore un peu peur, mais elle est confiante. Le mois prochain, elle jouera son premier match. Et elle continuera ses exercices de prévention, deux fois par semaine.`, `
le genou|diz|knee
une IRM|MR (manyetik rezonans)|MRI scan
une rupture|kopma, yırtık|tear, rupture
le ligament croisé antérieur|ön çapraz bağ|anterior cruciate ligament
opérer|ameliyat etmek|to operate on
la rééducation|rehabilitasyon, fizik tedavi|rehabilitation
plier|bükmek|to bend
la cuisse|uyluk|thigh
la musculation|ağırlık çalışması|weight training
la prévention|önleme, koruma|prevention`, [
      Q("Depuis quand Inès joue-t-elle au handball ?", ["Depuis l'âge de dix ans", "Depuis l'année dernière", "Depuis l'âge de vingt ans"], 0),
      Q("Quel examen Inès a-t-elle passé ?", ["Une prise de sang", "Une radio du pied", "Une IRM du genou"], 2),
      Q("Comment étaient les premiers exercices ?", ["Très difficiles", "Très simples", "Très rapides"], 1),
      Q("Quand Inès a-t-elle recommencé à courir ?", ["Au deuxième mois", "Au quatrième mois", "Au neuvième mois"], 1),
      Q("Qu'est-ce qu'Inès va faire le mois prochain ?", ["Jouer son premier match", "Arrêter le handball", "Passer une autre IRM"], 0)
    ]),

    R("r-alimentation-sportif", "A2", "L'alimentation du sportif", "Sporcunun beslenmesi", "Eating like an athlete", `
Yanis a 28 ans et il fait du triathlon : de la natation, du vélo et de la course à pied. Il s'entraîne presque tous les jours. L'année dernière, il était souvent fatigué et il avait des crampes. Alors, il a pris rendez-vous avec une diététicienne du sport, Claire.

Claire lui a posé beaucoup de questions. Yanis ne prenait pas de petit-déjeuner, il mangeait un sandwich rapide à midi et il buvait très peu d'eau. Le soir, il avait très faim et il mangeait beaucoup trop. « Ce n'est pas idéal pour un sportif ! » a dit Claire en souriant.

Elle lui a expliqué trois règles simples. D'abord, il faut manger des glucides, comme les pâtes, le riz ou le pain complet : ils donnent de l'énergie. Ensuite, les protéines sont importantes pour les muscles : on les trouve dans la viande, le poisson, les œufs ou les lentilles. Enfin, il faut boire de l'eau régulièrement, avant, pendant et après l'effort.

Maintenant, Yanis prend un vrai petit-déjeuner : des flocons d'avoine, une banane et un yaourt. Après l'entraînement, il mange une collation, par exemple une poignée d'amandes et un fruit. Et il a toujours une gourde dans son sac.

Trois mois plus tard, Yanis se sent beaucoup mieux. Il n'a plus de crampes et il récupère plus vite après ses séances. En juin, il participera à son premier grand triathlon. « Bien manger, c'est aussi une partie de l'entraînement ! » dit-il.`, `
les crampes (f.)|kramplar|cramps
les glucides (m.)|karbonhidratlar|carbohydrates
le pain complet|tam buğday ekmeği|wholemeal bread
les protéines (f.)|proteinler|proteins
l'effort (m.)|efor, egzersiz|effort, exercise
les flocons d'avoine (m.)|yulaf ezmesi|porridge oats
une collation|ara öğün|snack
une poignée|bir avuç|a handful
une gourde|matara, su şişesi|water bottle
récupérer|toparlanmak|to recover`, [
      Q("Quels sports Yanis pratique-t-il ?", ["Le judo, la boxe et la danse", "La nage, le vélo et la course", "Le ski, le golf et le tennis"], 1),
      Q("Quel problème Yanis avait-il l'année dernière ?", ["Il dormait mal", "Il avait mal au dos", "Il avait des crampes"], 2),
      Q("Selon Claire, à quoi servent les protéines ?", ["Elles aident les muscles", "Elles donnent du sucre", "Elles aident à dormir"], 0),
      Q("Qu'est-ce que Yanis mange après l'entraînement ?", ["Un sandwich au jambon", "Un gros plat de pâtes", "Des amandes et un fruit"], 2),
      Q("Qu'est-ce que Yanis fera en juin ?", ["Il arrêtera le vélo", "Il fera un triathlon", "Il verra un médecin"], 1)
    ]),

    R("r-sport-ordonnance", "A2", "Le sport sur ordonnance", "Reçeteli spor", "Exercise on prescription", `
En France, depuis 2017, un médecin peut prescrire du sport, comme il prescrit des médicaments. On appelle ça le « sport sur ordonnance ». Les médecins parlent plutôt d'« activité physique adaptée » : c'est une activité choisie pour la santé et les capacités de chaque patient.

Au début, ce programme était pour les personnes qui ont une maladie de longue durée, par exemple le diabète, une maladie du cœur ou un cancer. Depuis 2022, il concerne aussi d'autres patients, par exemple des personnes en surpoids ou avec de l'hypertension.

Monique, 62 ans, a du diabète. L'année dernière, son médecin lui a donné une ordonnance pour de l'activité physique. Au début, elle n'était pas contente : « Moi, je n'ai jamais aimé le sport ! » Mais elle est quand même allée à une séance de marche nordique dans un parc, avec un éducateur sportif et un petit groupe.

Aujourd'hui, Monique marche deux fois par semaine avec le groupe. Elle a perdu quatre kilos, elle dort mieux et son diabète va mieux. Elle a aussi rencontré de nouvelles amies. « Après la séance, on boit souvent un café ensemble », raconte-t-elle.

Attention : en général, la Sécurité sociale ne rembourse pas ces séances. Mais certaines mutuelles et certaines villes aident à les payer. Les spécialistes sont d'accord : bouger un peu chaque jour, c'est bon pour le corps et pour le moral.`, `
prescrire|reçete etmek|to prescribe
une ordonnance|reçete|prescription
adapté(e)|uyarlanmış, uygun|adapted
une maladie de longue durée|uzun süreli hastalık|long-term illness
le surpoids|fazla kilo|being overweight
l'hypertension (f.)|yüksek tansiyon|high blood pressure
la marche nordique|Nordic yürüyüş (batonlu yürüyüş)|Nordic walking
un éducateur sportif|spor eğitmeni|sports instructor
rembourser|(masrafı) geri ödemek|to reimburse
le moral|moral, ruh hâli|morale, mood`, [
      Q("Depuis quand le sport sur ordonnance existe-t-il ?", ["Depuis 2017", "Depuis 2007", "Depuis 2002"], 0),
      Q("Quelle maladie Monique a-t-elle ?", ["Un cancer", "De l'asthme", "Du diabète"], 2),
      Q("Au début, qu'est-ce que Monique pensait ?", ["Elle voulait courir un marathon", "Elle n'aimait pas le sport", "Elle avait peur des parcs"], 1),
      Q("Quelle activité Monique pratique-t-elle ?", ["L'aquagym en piscine", "La marche nordique", "Le yoga sur chaise"], 1),
      Q("Qui aide parfois à payer les séances ?", ["Le médecin traitant", "Les pharmacies", "Certaines mutuelles"], 2)
    ]),

    R("r-nager-30-ans", "A2", "Apprendre à nager à 30 ans", "30 yaşında yüzmeyi öğrenmek", "Learning to swim at 30", `
Quand Karima était petite, elle habitait loin de la mer et il n'y avait pas de piscine dans sa ville. Elle n'a jamais appris à nager. Pendant longtemps, ce n'était pas un problème. Mais l'été dernier, pendant les vacances en Bretagne, elle est restée seule sur la plage pendant que ses amis nageaient. Elle était triste et un peu honteuse.

En septembre, à 30 ans, Karima s'est inscrite à un cours pour adultes à la piscine municipale. Le premier jour, elle avait très peur. Dans le groupe, il y avait six personnes, toutes débutantes. Le maître-nageur, Thomas, était très calme et patient. « Ici, personne ne se moque de personne », a-t-il dit.

Pendant les premières séances, Karima n'a pas vraiment nagé. Elle a appris à mettre la tête sous l'eau, à souffler dans l'eau et à flotter sur le dos. C'était difficile, parce qu'elle avait peur de couler. Thomas lui a donné une planche et des conseils pour respirer calmement.

Après trois mois, elle a nagé sa première longueur de piscine, vingt-cinq mètres, sans s'arrêter. Tout le groupe a applaudi ! Ce soir-là, elle a appelé sa mère pour lui raconter. Sa mère était très émue.

Maintenant, Karima va à la piscine deux fois par semaine. Elle apprend la brasse et le crawl. L'été prochain, elle retournera en Bretagne et, cette fois, elle nagera dans la mer avec ses amis. « Il n'y a pas d'âge pour apprendre », dit-elle.`, `
honteux / honteuse|utanmış|ashamed
s'inscrire|kaydolmak|to sign up
débutant(e)|yeni başlayan|beginner
le maître-nageur|yüzme hocası, cankurtaran|swimming instructor, lifeguard
flotter|suyun üstünde kalmak|to float
couler|batmak|to sink
une planche|yüzme tahtası|kickboard
une longueur|havuz boyu|length (of a pool)
ému(e)|duygulanmış|moved, touched
la brasse|kurbağalama|breaststroke`, [
      Q("Pourquoi Karima n'a-t-elle pas appris à nager ?", ["Ses parents ne voulaient pas", "Elle était souvent malade", "Il n'y avait pas de piscine"], 2),
      Q("Comment était le maître-nageur ?", ["Calme et patient", "Sévère et pressé", "Jeune et timide"], 0),
      Q("Qu'est-ce que Karima a appris pendant les premières séances ?", ["À plonger du plongeoir", "À nager vite le crawl", "À flotter sur le dos"], 2),
      Q("Quelle distance Karima a-t-elle nagé après trois mois ?", ["Cinquante mètres", "Vingt-cinq mètres", "Cent mètres"], 1),
      Q("Qu'est-ce que Karima fera l'été prochain ?", ["Elle nagera dans la mer", "Elle deviendra maître-nageuse", "Elle arrêtera la piscine"], 0)
    ]),

    R("r-jo-paris-2024", "A2", "Les Jeux olympiques de Paris 2024", "Paris 2024 Olimpiyat Oyunları", "The Paris 2024 Olympic Games", `
Du 26 juillet au 11 août 2024, Paris a accueilli les Jeux olympiques d'été. C'était la troisième fois : la ville avait déjà organisé les Jeux en 1900 et en 1924, exactement cent ans plus tôt. Ensuite, du 28 août au 8 septembre, il y a eu les Jeux paralympiques.

La cérémonie d'ouverture a été très originale. Pour la première fois, elle n'a pas eu lieu dans un stade, mais sur la Seine. Les athlètes ont défilé sur des bateaux, sous la pluie ! À la fin, la vasque olympique s'est allumée. Elle était accrochée sous un grand ballon, et chaque soir, elle s'élevait dans le ciel, au-dessus du jardin des Tuileries.

Beaucoup d'épreuves ont eu lieu devant des monuments célèbres. Le beach-volley s'est joué au pied de la tour Eiffel, l'escrime au Grand Palais et l'équitation dans les jardins du château de Versailles. Le surf, lui, s'est passé très loin de Paris : à Tahiti, en Polynésie française !

Les Français ont gagné beaucoup de médailles. Le nageur Léon Marchand est devenu la star des Jeux : il a gagné quatre médailles d'or individuelles. Le judoka Teddy Riner a aussi gagné l'or, encore une fois. Partout dans le pays, les gens regardaient les épreuves à la télévision ou sur des écrans géants.

Camille, une étudiante de 22 ans, était bénévole pendant les Jeux. Elle accueillait les spectateurs près d'un stade et elle les aidait à trouver leur place. « Je marchais toute la journée, mais l'ambiance était incroyable. Je n'oublierai jamais cet été ! » dit-elle.`, `
la cérémonie d'ouverture|açılış töreni|opening ceremony
défiler|geçit töreninde yürümek|to parade
la vasque olympique|olimpiyat kazanı|Olympic cauldron
s'élever|yükselmek|to rise
une épreuve|yarışma, müsabaka|event (in sport)
l'escrime (f.)|eskrim|fencing
l'équitation (f.)|binicilik|horse riding
la médaille d'or|altın madalya|gold medal
le / la bénévole|gönüllü|volunteer
un écran géant|dev ekran|big screen`, [
      Q("Combien de fois Paris a-t-il organisé les Jeux d'été ?", ["Deux fois", "Trois fois", "Quatre fois"], 1),
      Q("Où a eu lieu la cérémonie d'ouverture ?", ["Sur la Seine", "Au Stade de France", "À Versailles"], 0),
      Q("Où s'est passée l'épreuve de surf ?", ["En Bretagne", "À Biarritz", "À Tahiti"], 2),
      Q("Combien de médailles d'or individuelles Léon Marchand a-t-il gagnées ?", ["Deux", "Trois", "Quatre"], 2),
      Q("Que faisait Camille pendant les Jeux ?", ["Elle vendait des glaces", "Elle filmait les athlètes", "Elle accueillait le public"], 2)
    ]),

    R("r-premier-jour-travail", "A2", "Mon premier jour de travail", "İşteki ilk günüm", "My first day at work", `
Je m'appelle Lucas, j'ai 23 ans. Lundi dernier, j'ai commencé mon premier vrai travail : je suis vendeur dans un grand magasin de sport, au rayon course à pied. La veille, j'étais très nerveux. Je n'ai pas bien dormi et je me suis réveillé à cinq heures du matin !

Je suis arrivé au magasin à 8 h 45, un quart d'heure en avance. Ma responsable, Sandrine, m'a accueilli avec un grand sourire. Elle m'a présenté à toute l'équipe et elle m'a fait visiter le magasin : les rayons, la réserve, la salle de pause et les vestiaires. Ensuite, elle m'a donné mon badge et un tee-shirt bleu avec le nom du magasin.

Le matin, j'ai travaillé avec Malik, un collègue très sympa. Il m'a montré comment ranger les chaussures et comment utiliser la caisse. Il connaissait tous les produits par cœur. Moi, je posais beaucoup de questions et je prenais des notes dans un petit carnet.

L'après-midi, j'ai conseillé mon premier client, un monsieur qui voulait courir un semi-marathon. Je lui ai demandé combien de fois il courait par semaine, puis je lui ai proposé trois paires de chaussures. Il a essayé les trois et il a acheté la deuxième. J'étais tellement content !

À 18 h, j'étais fatigué, mais heureux. Sandrine m'a dit : « Bravo, Lucas, c'était une très bonne première journée. » Demain, je tiendrai la caisse tout seul. J'ai encore un peu peur, mais je suis sûr que ça ira.`, `
le vendeur / la vendeuse|satış elemanı|sales assistant
le rayon|reyon, bölüm|department, section
la veille|bir önceki gün|the day before
le / la responsable|sorumlu, müdür|manager
la réserve|depo|stockroom
les vestiaires (m.)|soyunma odası|changing rooms
la caisse|kasa|till, checkout
par cœur|ezbere|by heart
un carnet|küçük defter|notebook
conseiller|tavsiye vermek, yönlendirmek|to advise`, [
      Q("Où Lucas travaille-t-il ?", ["Dans un salon de coiffure", "Dans un magasin de sport", "Dans une agence de voyage"], 1),
      Q("À quelle heure Lucas est-il arrivé ?", ["À 8 h 45", "À 9 h 15", "À 8 h 30"], 0),
      Q("Qu'est-ce que Malik lui a montré ?", ["Comment utiliser la caisse", "Comment nettoyer la réserve", "Comment parler aux enfants"], 0),
      Q("Quelle paire le client a-t-il achetée ?", ["La première", "La deuxième", "La troisième"], 1),
      Q("Que fera Lucas demain ?", ["Il prendra un jour de congé", "Il ira dans un autre magasin", "Il tiendra la caisse seul"], 2)
    ]),

    R("r-lettre-grand-mere", "A2", "Une lettre à ma grand-mère en Turquie", "Türkiye'deki büyükanneme bir mektup", "A letter to my grandmother in Turkey", `
Chère grand-mère, comment vas-tu ? J'espère que ton genou te fait moins mal. Pardon, je ne t'ai pas écrit depuis longtemps, mais j'avais beaucoup d'examens à l'université. Aujourd'hui, mon professeur de français nous a demandé d'écrire une vraie lettre. Alors, je t'écris en français, et maman va te la traduire !

Je suis à Toulouse depuis un an maintenant. Au début, c'était difficile. Je ne comprenais pas bien les gens, il pleuvait souvent et ta cuisine me manquait beaucoup. Le soir, je mangeais des pâtes tout seul dans ma petite chambre et je pensais à tes böreks.

Mais maintenant, ça va beaucoup mieux. J'ai des amis à l'université : Julie, Paul et Amadou. Le mois dernier, je les ai invités chez moi et j'ai préparé des feuilles de vigne farcies avec ta recette. Ils ont adoré ! Amadou m'a même demandé la recette. Tu vois, ta cuisine est célèbre en France maintenant.

Je fais aussi du sport : le samedi matin, je cours le long de la Garonne avec Paul. Toulouse est une belle ville, avec beaucoup de bâtiments en briques roses. C'est pour ça qu'on l'appelle « la Ville rose ». Je t'envoie une photo avec cette lettre.

En juillet, je viendrai à Izmir pour les vacances. Je resterai trois semaines avec toi. On boira du thé dans ton jardin et tu me raconteras des histoires, comme quand j'étais petit. Tu me manques beaucoup. Je t'embrasse très fort. Ton petit-fils, Deniz.`, `
traduire|çevirmek|to translate
depuis longtemps|uzun zamandır|for a long time
manquer à quelqu'un|özlenmek (« tu me manques » = seni özlüyorum)|to be missed (« tu me manques » = I miss you)
une recette|yemek tarifi|recipe
les feuilles de vigne farcies (f.)|yaprak sarması|stuffed vine leaves
le long de|boyunca|along
une brique|tuğla|brick
raconter|anlatmak|to tell
je t'embrasse|seni öpüyorum (mektup sonu)|love, hugs (end of a letter)
le petit-fils|erkek torun|grandson`, [
      Q("Pourquoi Deniz écrit-il en français ?", ["Sa grand-mère parle français", "Son professeur l'a demandé", "Il a oublié le turc"], 1),
      Q("Qu'est-ce qui manquait à Deniz au début ?", ["Les plats de sa grand-mère", "Les amis de son lycée", "Les chats de son quartier"], 0),
      Q("Qu'est-ce que Deniz a préparé pour ses amis ?", ["Des pâtes à la tomate fraîche", "Une soupe de lentilles rouges", "Des feuilles de vigne farcies"], 2),
      Q("Pourquoi appelle-t-on Toulouse « la Ville rose » ?", ["À cause de ses fleurs", "À cause de ses briques", "À cause de son équipe"], 1),
      Q("Combien de temps Deniz restera-t-il à Izmir ?", ["Trois semaines", "Deux mois", "Une semaine"], 0)
    ]),

    R("r-tri-dechets", "A2", "Le tri des déchets en France", "Fransa'da çöplerin ayrıştırılması", "Sorting rubbish in France", `
Quand Ana est arrivée du Portugal, il y a six mois, elle a trouvé deux poubelles dans la cuisine de son nouvel appartement : une jaune et une grise. Elle ne savait pas quoi mettre dedans. Heureusement, sa voisine Martine lui a tout expliqué.

« Dans notre ville, on met les emballages dans la poubelle jaune : les bouteilles en plastique, les boîtes de conserve, les cartons et les papiers. Ce n'est pas nécessaire de les laver, il faut seulement bien les vider », a dit Martine. Ana a pris une photo de la liste sur la porte du local à poubelles, pour ne pas oublier.

Pour le verre, c'est différent. Les bouteilles et les pots en verre ne vont pas dans la poubelle jaune : il faut les apporter dans un grand conteneur, dans la rue. Les autres déchets, comme les mouchoirs en papier ou les couches, vont dans la poubelle grise, avec les ordures ménagères.

Depuis 2024, les villes doivent aussi aider les habitants à trier les déchets alimentaires : les épluchures de légumes, les restes de repas, le marc de café… Martine a un composteur dans le jardin de l'immeuble. Avec le compost, elle cultive des tomates et des fleurs. Ana trouve que c'est une super idée.

Maintenant, Ana trie tous ses déchets sans problème. Elle a même acheté un sac en tissu pour faire ses courses, et elle achète moins de produits emballés. « Trier, c'est bien, mais produire moins de déchets, c'est encore mieux ! » dit-elle.`, `
le tri|ayrıştırma|sorting
les déchets (m.)|atıklar, çöpler|waste, rubbish
la poubelle|çöp kutusu|bin
un emballage|ambalaj|packaging
le verre|cam|glass
un conteneur|konteyner|container, bottle bank
les ordures ménagères (f.)|evsel çöp|household rubbish
les épluchures (f.)|sebze ve meyve kabukları|peelings
le marc de café|kahve telvesi|coffee grounds
un composteur|kompost kutusu|compost bin`, [
      Q("Qui a expliqué le tri à Ana ?", ["Sa voisine", "Sa collègue", "Son propriétaire"], 0),
      Q("Qu'est-ce qu'on met dans la poubelle jaune ?", ["Les restes de repas", "Les emballages", "Les bouteilles en verre"], 1),
      Q("Où faut-il apporter le verre ?", ["Dans un conteneur de rue", "À la pharmacie du quartier", "Dans la poubelle jaune"], 0),
      Q("Que fait Martine avec le compost ?", ["Elle le donne à la mairie", "Elle cultive des tomates", "Elle le jette à la poubelle"], 1),
      Q("Selon Ana, qu'est-ce qui est encore mieux que trier ?", ["Acheter plus de poubelles", "Laver tous les emballages", "Produire moins de déchets"], 2)
    ]),

    R("r-permis-conduire", "A2", "Le permis de conduire en France", "Fransa'da ehliyet almak", "Getting a driving licence in France", `
En France, pour conduire une voiture, il faut le permis B. Depuis 2024, on peut le passer à partir de 17 ans. Mais beaucoup de jeunes le passent plus tard, parce que c'est long et assez cher. Pour se préparer, la plupart des gens s'inscrivent dans une auto-école.

D'abord, il y a l'examen du code de la route. C'est un test de 40 questions sur les panneaux, les priorités et la sécurité. Pour réussir, il faut au moins 35 bonnes réponses. Ensuite, il faut prendre des leçons de conduite avec un moniteur : au minimum 20 heures.

Clément a 19 ans. Il habite dans un village sans bus. Il a eu son code du premier coup, en mars. Mais l'examen de conduite était plus difficile. La première fois, il était très stressé et il a oublié de s'arrêter à un stop. Deux jours plus tard, il a reçu le résultat : il avait échoué.

Il a pris cinq heures de leçons en plus et il a repassé l'examen en juin. Cette fois, il était plus calme. Il a bien regardé dans ses rétroviseurs, il a respecté les limitations de vitesse et il a réussi son créneau. Deux jours après, bonne nouvelle : il avait réussi !

Maintenant, Clément est un « jeune conducteur ». Pendant trois ans, il doit mettre un « A » rouge à l'arrière de sa voiture. Au début, son permis a seulement 6 points, au lieu de 12. S'il conduit prudemment, il aura tous ses points après trois ans.`, `
le permis de conduire|ehliyet, sürücü belgesi|driving licence
une auto-école|sürücü kursu|driving school
le code de la route|trafik kuralları (teorik sınav)|highway code (theory test)
un panneau|trafik levhası|road sign
un moniteur / une monitrice|direksiyon hocası|driving instructor
échouer|başarısız olmak, kalmak|to fail
un rétroviseur|dikiz aynası|mirror
la limitation de vitesse|hız sınırı|speed limit
un créneau|paralel park|parallel parking
prudemment|dikkatli bir şekilde|carefully`, [
      Q("À partir de quel âge peut-on passer le permis B aujourd'hui ?", ["16 ans", "18 ans", "17 ans"], 2),
      Q("Combien de bonnes réponses faut-il au code ?", ["Au moins 35", "Au moins 30", "Au moins 40"], 0),
      Q("Pourquoi Clément a-t-il échoué la première fois ?", ["Il a oublié un stop", "Il roulait trop vite", "Il est arrivé en retard"], 0),
      Q("Quand Clément a-t-il réussi son permis ?", ["En mars", "En septembre", "En juin"], 2),
      Q("Combien de points a un jeune conducteur au début ?", ["12 points", "6 points", "3 points"], 1)
    ]),

    R("r-petit-village", "A2", "La vie dans un petit village", "Küçük bir köyde hayat", "Life in a small village", `
Il y a deux ans, Sophie et Antoine habitaient à Paris, dans un petit appartement au cinquième étage. Ils travaillaient beaucoup, ils prenaient le métro tous les jours et ils étaient souvent stressés. Un jour, ils ont décidé de changer de vie : ils sont partis habiter dans un village de 400 habitants, en Auvergne.

Le village est très calme. Il y a une église, une mairie, une petite école et un bar-épicerie, où on trouve du pain, du lait et le journal. Pour aller au supermarché ou chez le médecin, il faut prendre la voiture et rouler vingt minutes.

Au début, ce n'était pas facile. Sophie ne connaissait personne et elle trouvait les soirées très longues. Mais les habitants ont été très accueillants. Leur voisin, Gérard, leur a apporté des œufs de ses poules et il leur a appris à faire un potager. Maintenant, Sophie et Antoine cultivent leurs propres légumes.

Antoine travaille à la maison, sur son ordinateur, trois jours par semaine. Sophie était déjà professeure des écoles à Paris. Maintenant, elle travaille dans l'école du village : elle a seulement quatorze élèves, de trois à dix ans ! Le week-end, ils font des randonnées dans la forêt et le soir, ils regardent les étoiles.

Bien sûr, il y a aussi des inconvénients : internet est lent et, l'hiver, il fait froid et il neige parfois beaucoup. Mais Sophie et Antoine ne regrettent rien. « Ici, on a le temps de vivre. On ne retournera pas à Paris ! » disent-ils en souriant.`, `
un habitant / une habitante|sakin, yaşayan kişi|inhabitant, resident
une épicerie|bakkal|grocery shop
accueillant(e)|misafirperver, sıcak|welcoming
une poule|tavuk|hen
un potager|sebze bahçesi|vegetable garden
cultiver|yetiştirmek|to grow
le professeur des écoles|ilkokul öğretmeni|primary school teacher
un / une élève|öğrenci|pupil
un inconvénient|dezavantaj|drawback
regretter|pişman olmak|to regret`, [
      Q("Combien d'habitants y a-t-il dans le village ?", ["40", "4 000", "400"], 2),
      Q("Où trouve-t-on du pain dans le village ?", ["Au bar-épicerie", "À la boulangerie", "Au supermarché"], 0),
      Q("Qu'est-ce que Gérard leur a appris ?", ["À faire du fromage", "À faire un potager", "À conduire un tracteur"], 1),
      Q("Combien d'élèves Sophie a-t-elle ?", ["Quatorze", "Quarante", "Quatre"], 0),
      Q("Quel est un inconvénient du village ?", ["Il y a trop de bruit", "Les voisins sont froids", "Internet est lent"], 2)
    ])
  );
})();
