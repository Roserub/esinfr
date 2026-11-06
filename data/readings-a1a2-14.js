/* Graded readings, A2 set 14: sport and society in France — a football club for refugees, pétanque on the village square, village rugby in the South-West, Wednesday school sport (UNSS) and a 70-year-old runner.
   Same format as data/readings.js: { id, level, t:{fr,tr,en}, text, gloss: [fr, tr, en][], qs: [{ q, o, a }] }. */
(function () {
  const G = s => s.trim().split("\n").map(l => l.split("|").map(x => x.trim()));
  const Q = (q, o, a) => ({ q, o, a });
  const R = (id, level, fr, tr, en, text, gloss, qs) => ({ id, level, t: { fr, tr, en }, text: text.trim(), gloss: G(gloss), qs });

  window.READINGS = window.READINGS || [];
  window.READINGS.push(
    R("r14-foot-refugies", "A2", "Un club de foot pour les réfugiés", "Mülteciler için bir futbol kulübü", "A football club for refugees", `
Tous les mardis et jeudis soir, sur un petit terrain de Montreuil, près de Paris, une trentaine de jeunes hommes jouent au football. Ils viennent d'Afghanistan, du Soudan, d'Érythrée ou de Guinée. Ils sont arrivés en France il y a quelques mois ou quelques années. Ils ne parlent pas tous la même langue, mais sur le terrain, tout le monde comprend le ballon !

L'association s'appelle « Ballon pour tous ». Julien, un éducateur sportif, l'a créée il y a six ans. « Au début, nous étions cinq ou six, avec un vieux ballon et des sacs à dos pour faire les buts », raconte-t-il en souriant. Aujourd'hui, le club a des maillots, des chaussures données par les habitants du quartier et une petite équipe de bénévoles.

Pour Abdoul, 19 ans, le club a tout changé. Quand il est arrivé à Paris, il ne connaissait personne et il passait ses journées seul. « Ici, j'ai trouvé des amis. Après le match, on parle français ensemble, on rigole. C'est comme une deuxième famille. » Il a fait des progrès en français très vite, parce que sur le terrain, il faut parler : « Passe ! », « À gauche ! », « Bien joué ! ».

Le club ne fait pas seulement du sport. Après l'entraînement du jeudi, des bénévoles donnent des cours de français dans une salle prêtée par la mairie. Ils aident aussi les joueurs dans leurs démarches : trouver un médecin, ouvrir un compte en banque, chercher une formation. Margaux, une étudiante bénévole, explique : « Le foot, c'est la porte d'entrée. Ensuite, on construit la confiance. »

L'année dernière, l'équipe a participé pour la première fois à un tournoi avec d'autres clubs du département. Elle a perdu en demi-finale, mais personne n'était triste. « On a gagné quelque chose de plus important : des gens du quartier sont venus nous encourager », dit Abdoul. Son rêve ? Devenir éducateur sportif, comme Julien.`, `
un réfugié|mülteci|refugee
un terrain|saha|pitch
un but|kale|goal
un maillot|forma|jersey, shirt
un bénévole|gönüllü|volunteer
rigoler (fam.)|gülmek, eğlenmek|to laugh, to have a laugh
l'entraînement (m.)|antrenman|training
prêter|ödünç vermek|to lend
les démarches (f.)|resmi işlemler|paperwork, formalities
une formation|meslek eğitimi, kurs|training course
la confiance|güven|trust
encourager|desteklemek, tezahürat yapmak|to cheer on`, [
      Q("D'où viennent les joueurs ?", ["Tous de Paris", "De pays différents", "Tous de Guinée"], 1),
      Q("Au début, qu'est-ce qu'on utilisait pour faire les buts ?", ["Des sacs à dos", "Des chaises", "Des bouteilles d'eau"], 0),
      Q("Pourquoi Abdoul a-t-il fait vite des progrès en français ?", ["Il regarde beaucoup la télé", "Il lit des journaux sportifs", "Il a un professeur particulier", "Sur le terrain, il faut parler"], 3),
      Q("Que se passe-t-il après l'entraînement du jeudi ?", ["Un repas au restaurant", "Un match à la télé", "Des cours de français"], 2),
      Q("Comment s'est passé le tournoi ?", ["L'équipe a gagné", "L'équipe a perdu en demi-finale", "L'équipe n'a pas joué"], 1),
      Q("Quel est le rêve d'Abdoul ?", ["Devenir éducateur sportif", "Jouer dans une grande équipe", "Ouvrir un restaurant"], 0)
    ]),

    R("r14-petanque-village", "A2", "La pétanque sur la place du village", "Köy meydanında petank", "Pétanque on the village square", `
Dans un petit village de Provence, chaque après-midi, vers cinq heures, quand il fait moins chaud, la place se remplit. Sous les platanes, des hommes et des femmes de tous les âges jouent à la pétanque. On entend le bruit des boules, des rires… et parfois des disputes !

Le principe est simple. D'abord, on lance une petite boule en bois : le cochonnet. Ensuite, chaque équipe essaie de lancer ses boules en métal le plus près possible du cochonnet. On lance les pieds dans un petit cercle, sans bouger. La première équipe qui arrive à treize points gagne la partie.

Marcel, 78 ans, joue sur cette place depuis plus de cinquante ans. Il aime raconter l'histoire du jeu : « La pétanque est née au début du XXe siècle, à La Ciotat, près de Marseille. Un joueur avait mal aux jambes et il ne pouvait plus courir avant de lancer. Alors, on a décidé de jouer les pieds immobiles. Le nom vient du provençal et veut dire "pieds ancrés". »

Aujourd'hui, la pétanque n'est plus seulement un jeu de retraités. Cet été, Inès, 16 ans, a joué tous les jours avec son grand-père pendant les vacances. « Au début, je trouvais ça un peu ringard. Mais en fait, c'est difficile ! Il faut beaucoup de précision et de concentration. » Il existe d'ailleurs des clubs, des compétitions et même des championnats du monde.

Pour Marcel, le plus important n'est pas de gagner. « La pétanque, c'est du lien social. Ici, le médecin joue avec le boulanger, les jeunes avec les vieux, les touristes avec les habitants. » Puis il ajoute avec un clin d'œil : « Mais attention : si tu perds 13 à 0, tu dois embrasser Fanny ! » Fanny, c'est l'image d'une dame qui montre ses fesses. Il faut lui faire un bisou devant tout le monde. Alors, sur la place, personne ne veut perdre 13 à 0 !`, `
un platane|çınar ağacı|plane tree
une boule|(metal) top, bilye|boule, ball
le cochonnet|hedef olan küçük tahta top|jack
lancer|atmak|to throw
une partie|oyun, parti|game, match
ancré|sabitlenmiş, demirlenmiş|anchored
un retraité|emekli|pensioner, retiree
ringard (fam.)|demode, eski kafalı|uncool, old-fashioned
la précision|isabet, kesinlik|accuracy, precision
le lien social|sosyal bağ|social bond
un clin d'œil|göz kırpma|wink
les fesses (f.)|kalça, popo|bottom, buttocks`, [
      Q("À quelle heure les gens jouent-ils sur la place ?", ["Vers cinq heures du matin", "À midi", "Vers dix-sept heures"], 2),
      Q("Qu'est-ce que le cochonnet ?", ["Un petit chien", "Une petite boule en bois", "Un cercle par terre"], 1),
      Q("Combien de points faut-il pour gagner une partie ?", ["Dix", "Quinze", "Vingt", "Treize"], 3),
      Q("Où est née la pétanque ?", ["À La Ciotat", "À Lyon", "À Paris"], 0),
      Q("Qu'est-ce qu'Inès pensait de la pétanque au début ?", ["Que c'était dangereux", "Que c'était un peu ringard", "Que c'était trop cher"], 1),
      Q("Que doit faire une équipe qui perd 13 à 0 ?", ["Payer un café à tout le monde", "Rentrer à la maison", "Embrasser Fanny"], 2)
    ]),

    R("r14-rugby-village", "A2", "Le rugby, cœur du village", "Rugby, köyün kalbi", "Rugby, the heart of the village", `
Dans le Sud-Ouest de la France, le rugby est bien plus qu'un sport. Dans beaucoup de petits villages, le club de rugby est le cœur de la vie locale. Le dimanche après-midi, on va au stade en famille pour voir le match. Et tout le monde connaît les joueurs : ce sont le facteur, le fils de la boulangère ou le mécanicien du garage.

Lucas, 24 ans, joue dans l'équipe de son village, dans le Gers. La semaine, il est électricien, et il s'entraîne deux soirs par semaine avec le club. « Je joue ici depuis l'âge de six ans. J'ai commencé à l'école de rugby, comme mon père et mon grand-père. Chez nous, le rugby, c'est une histoire de famille. »

Au rugby, le respect est très important. Les joueurs n'ont pas le droit de contester les décisions de l'arbitre : seul le capitaine peut lui parler. « On peut se plaquer très fort pendant quatre-vingts minutes, mais à la fin, on se serre la main », explique Lucas.

Après le match, il y a une tradition célèbre : la « troisième mi-temps ». Les deux équipes, les supporters et les bénévoles se retrouvent au club-house pour manger et boire ensemble. On chante, on raconte le match, on rit beaucoup. « Parfois, la troisième mi-temps dure plus longtemps que le match ! » dit Lucas en riant.

Mais la vie des petits clubs n'est pas toujours facile. Beaucoup de jeunes partent étudier ou travailler dans les grandes villes, comme Toulouse ou Bordeaux. Il faut aussi trouver des bénévoles et de l'argent pour le bus et les maillots. Depuis quelques années, le club de Lucas a une équipe féminine, et ça marche très bien. « Les filles ont apporté une nouvelle énergie au club. Maintenant, le dimanche, on a deux matchs à regarder ! »`, `
le cœur|kalp, merkez|heart
le facteur|postacı|postman
s'entraîner|antrenman yapmak|to train
l'arbitre (m.)|hakem|referee
contester|itiraz etmek|to dispute, to argue with
plaquer|(rugbide) rakibi yere düşürmek|to tackle
se serrer la main|tokalaşmak|to shake hands
la mi-temps|devre|half (of a match)
un supporter|taraftar|fan, supporter
le club-house|kulüp lokali|clubhouse
une équipe féminine|kadın takımı|women's team`, [
      Q("Qui sont les joueurs du club du village ?", ["Des joueurs professionnels", "Des gens du village", "Des étudiants de Toulouse"], 1),
      Q("Quel est le métier de Lucas ?", ["Facteur", "Mécanicien", "Électricien"], 2),
      Q("Qui a le droit de parler à l'arbitre ?", ["Seulement le capitaine", "Tous les joueurs", "Les supporters"], 0),
      Q("Qu'est-ce que la « troisième mi-temps » ?", ["Un troisième match", "Une pause pendant le match", "Un entraînement le lundi", "Un moment festif après le match"], 3),
      Q("Pourquoi la vie des petits clubs est-elle difficile ?", ["Beaucoup de jeunes partent en ville", "Il n'y a pas de stade", "Les matchs sont interdits le dimanche"], 0),
      Q("Quelle est la nouveauté du club de Lucas ?", ["Un nouveau stade", "Une équipe féminine", "Un entraîneur anglais"], 1)
    ]),

    R("r14-as-college", "A2", "Le mercredi à l'AS du collège", "Ortaokulun spor kulübünde çarşamba", "Wednesdays at the school sports club", `
En France, beaucoup de collégiens n'ont pas cours le mercredi après-midi. Certains restent à la maison, d'autres vont au centre de loisirs. Nour, 12 ans, elle, reste au collège : le mercredi, c'est le jour de l'association sportive, l'« AS ».

Presque tous les collèges et les lycées ont une association sportive. Elle fait partie de l'UNSS, une grande fédération de sport scolaire. Ce sont les professeurs d'EPS (éducation physique et sportive) qui encadrent les élèves. L'inscription ne coûte pas cher, et on peut choisir entre plusieurs sports : basket, handball, escalade, danse… Ça dépend du collège.

Nour a choisi le badminton. « Au début, je voulais juste être avec ma copine Jade. Maintenant, j'adore ça ! » Avec son équipe, elle participe à des compétitions contre d'autres collèges de la ville. L'année dernière, elles sont allées jusqu'au championnat départemental. Elles ont pris le car très tôt le matin, avec des sandwichs et beaucoup de stress.

À l'AS, Nour apprend aussi à arbitrer : c'est le programme des « jeunes officiels ». « La première fois, j'avais peur de me tromper. Un garçon n'était pas d'accord avec moi et il a crié. Mais M. Garnier, notre prof, m'a dit : "Tu as bien vu, garde ta décision." Ça m'a donné confiance. »

Pour M. Garnier, l'AS est très importante. « Certains élèves ne font pas de sport en dehors de l'école, parce qu'un club coûte cher ou parce que les parents n'ont pas le temps de les accompagner. Ici, tout le monde peut essayer. Et des élèves qui ne se parlent pas en classe deviennent coéquipiers. » Nour, elle, a déjà un nouveau projet : l'année prochaine, elle veut essayer l'escalade.`, `
un collégien|ortaokul öğrencisi|secondary school pupil
le centre de loisirs|çocuklar için etkinlik merkezi|holiday and after-school club
l'EPS (f.)|beden eğitimi|PE (physical education)
encadrer|yönetmek, sorumluluğunu almak|to supervise, to coach
l'inscription (f.)|kayıt|registration, enrolment
une copine|kız arkadaş (arkadaşlık)|friend (female), mate
le car|(şehirlerarası) otobüs|coach
arbitrer|hakemlik yapmak|to referee
se tromper|yanılmak, hata yapmak|to make a mistake
un coéquipier|takım arkadaşı|teammate
l'escalade (f.)|tırmanış|climbing`, [
      Q("Quand Nour va-t-elle à l'AS ?", ["Le samedi matin", "Le mercredi après-midi", "Le lundi soir"], 1),
      Q("Qui encadre les élèves à l'AS ?", ["Les parents", "Des joueurs professionnels", "Les professeurs d'EPS"], 2),
      Q("Pourquoi Nour a-t-elle choisi le badminton au début ?", ["Pour être avec sa copine", "Parce que c'est gratuit", "Parce que son père y joue"], 0),
      Q("Qu'est-ce que Nour apprend aussi à l'AS ?", ["À cuisiner", "À conduire", "À arbitrer"], 2),
      Q("Selon M. Garnier, pourquoi l'AS est-elle importante ?", ["Les notes sont meilleures", "Le collège gagne de l'argent", "Les profs ont moins de travail", "Tout le monde peut essayer"], 3),
      Q("Que veut faire Nour l'année prochaine ?", ["Essayer l'escalade", "Arrêter le sport", "Changer de collège"], 0)
    ]),

    R("r14-courir-70-ans", "A2", "Courir à 70 ans", "70 yaşında koşmak", "Running at 70", `
Tous les dimanches matin, à huit heures, Gisèle met ses chaussures de course et part courir le long de la Vilaine, la rivière qui traverse Rennes. Gisèle a 70 ans. Elle était institutrice et elle est à la retraite depuis treize ans. Elle court trois fois par semaine… et elle a déjà terminé quatre marathons !

Pourtant, Gisèle n'a pas toujours été sportive. « À l'école, j'étais toujours la dernière en sport ! » raconte-t-elle en riant. Elle a commencé à courir à 57 ans, juste après sa retraite. Son médecin lui avait conseillé de bouger plus, parce qu'elle avait un peu trop de tension. Au début, elle ne pouvait pas courir plus de cinq minutes sans s'arrêter.

Petit à petit, elle a progressé. Elle s'est inscrite dans un club de course à pied de son quartier. « Le club, c'est très important. Quand il pleut et que je n'ai pas envie, je pense aux copains qui m'attendent. » À 62 ans, elle a couru son premier marathon. « J'ai pleuré à l'arrivée. Mes petits-enfants m'attendaient avec une pancarte : "Allez Mamie !" »

Aujourd'hui, Gisèle fait attention à son corps. Elle s'échauffe toujours avant de courir et elle fait des étirements après. Deux fois par semaine, elle fait aussi du renforcement musculaire, parce que c'est important pour les os et l'équilibre quand on vieillit. Et elle écoute son corps : « Si j'ai mal quelque part, je ne cours pas. Je vais voir mon kiné. »

Dans les courses, les jeunes coureurs la regardent souvent avec admiration, et certains lui demandent son secret. Elle répond toujours la même chose : « Il n'y a pas de secret. Il faut commencer doucement, être régulier et prendre du plaisir. Et surtout, il n'est jamais trop tard ! » Son prochain objectif ? Un trail de vingt kilomètres en Bretagne, avec sa petite-fille.`, `
une institutrice|ilkokul öğretmeni (kadın)|primary school teacher (female)
la retraite|emeklilik|retirement
la tension|tansiyon|blood pressure
s'inscrire|kaydolmak|to sign up
une pancarte|pankart|sign, placard
s'échauffer|ısınmak|to warm up
les étirements (m.)|esneme hareketleri|stretches
le renforcement musculaire|kas güçlendirme|strength training
l'équilibre (m.)|denge|balance
vieillir|yaşlanmak|to get older
être régulier|düzenli olmak|to be consistent
un trail|arazi koşusu|trail race`, [
      Q("Quel était le métier de Gisèle ?", ["Infirmière", "Institutrice", "Kiné"], 1),
      Q("Pourquoi Gisèle a-t-elle commencé à courir ?", ["Pour accompagner sa fille", "Pour gagner une médaille", "Sur le conseil de son médecin"], 2),
      Q("Pourquoi le club est-il important pour elle ?", ["Les copains l'attendent", "Le club est gratuit", "Le club est à côté de chez elle"], 0),
      Q("Qu'est-ce qui était écrit sur la pancarte ?", ["Bravo Gisèle !", "Tu es la meilleure !", "Encore un kilomètre !", "Allez Mamie !"], 3),
      Q("Que fait Gisèle quand elle a mal quelque part ?", ["Elle court plus vite", "Elle court quand même", "Elle ne court pas"], 2),
      Q("Quel est son prochain objectif ?", ["Un trail en Bretagne", "Un marathon à New York", "Une course de vélo"], 0)
    ])
  );
})();
