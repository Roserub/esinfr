/* Graded readings, A2 set 8: running shoes and blisters, back pain at the office, a regional handball tournament, walking, a footballer turned physio, giving blood, intergenerational house-sharing, student life, the night train and an internship at a sports club.
   Same format as data/readings.js: { id, level, t:{fr,tr,en}, text, gloss: [fr, tr, en][], qs: [{ q, o, a }] }. */
(function () {
  const G = s => s.trim().split("\n").map(l => l.split("|").map(x => x.trim()));
  const Q = (q, o, a) => ({ q, o, a });
  const R = (id, level, fr, tr, en, text, gloss, qs) => ({ id, level, t: { fr, tr, en }, text: text.trim(), gloss: G(gloss), qs });

  window.READINGS = window.READINGS || [];
  window.READINGS.push(
    R("r-chaussures-ampoules", "A2", "Des ampoules et de bonnes chaussures", "Su toplamaları ve iyi ayakkabılar", "Blisters and good shoes", `
Léa a 35 ans et elle travaille dans une banque. Au printemps dernier, elle a décidé de commencer la course à pied avec une collègue. Elle n'avait pas de chaussures de sport, alors elle a couru avec ses vieilles baskets en toile, les baskets qu'elle portait en ville.

Après deux semaines, Léa avait très mal aux pieds. Elle avait des ampoules aux talons et sous les orteils. Un matin, elle a même eu du mal à marcher jusqu'à l'arrêt de bus. « Je pensais que la course, c'était simple : on met des baskets et on court ! » dit-elle en riant.

Sa collègue lui a conseillé d'aller dans un magasin spécialisé. Là, un vendeur, Hugo, l'a regardée courir quelques minutes sur un tapis de course. Il lui a expliqué qu'il faut choisir des chaussures adaptées à son pied, et souvent prendre une demi-pointure de plus, parce que le pied gonfle un peu pendant l'effort.

Hugo lui a aussi donné d'autres conseils. Il faut porter des chaussettes de sport sans coutures. Il ne faut pas faire une longue course avec des chaussures neuves. Et quand on a une ampoule, il vaut mieux la protéger avec un pansement spécial. « Surtout, ne la percez pas ! » a-t-il ajouté.

Aujourd'hui, Léa court trois fois par semaine et elle n'a plus d'ampoules. En octobre, elle fera sa première course de dix kilomètres avec sa collègue. Et ses vieilles baskets en toile ? Elle ne les a pas jetées : elle les garde pour travailler dans son jardin !`, `
une ampoule|su toplaması (ayakta)|blister
le talon|topuk|heel
l'orteil (m.)|ayak parmağı|toe
un magasin spécialisé|uzman spor mağazası|specialist shop
un tapis de course|koşu bandı|treadmill
la pointure|ayakkabı numarası|shoe size
gonfler|şişmek|to swell
une couture|dikiş|seam
un pansement|yara bandı|plaster, dressing
percer|delmek, patlatmak|to pierce, to pop`, [
      Q("Avec quelles chaussures Léa a-t-elle commencé à courir ?", ["De vieilles baskets de ville", "Des chaussures de montagne", "Des chaussures de course neuves"], 0),
      Q("Où Léa avait-elle des ampoules ?", ["Aux genoux et aux mains", "Aux talons et aux orteils", "Au dos et aux épaules"], 1),
      Q("Selon Hugo, pourquoi prendre une demi-pointure de plus ?", ["Parce que c'est moins cher", "Parce que c'est plus joli", "Parce que le pied gonfle"], 2),
      Q("Quelles chaussettes Hugo conseille-t-il ?", ["En laine épaisse", "Sans coutures", "En coton blanc"], 1),
      Q("Qu'est-ce que Léa fera en octobre ?", ["Un marathon à Paris", "Un stage de yoga", "Une course de 10 km"], 2)
    ]),

    R("r-dos-bureau", "A2", "Le mal de dos au bureau", "Ofiste sırt ağrısı", "Back pain at the office", `
Karim a 41 ans. Il est comptable dans une petite entreprise à Nantes. Il passe environ huit heures par jour devant son ordinateur. Depuis l'hiver dernier, il avait souvent mal en bas du dos et à la nuque, surtout le soir après le travail.

Au début, il n'a rien fait. Il pensait que la douleur allait partir toute seule. Mais un matin de février, il a eu tellement mal qu'il ne pouvait plus mettre ses chaussettes. Il est allé chez son médecin, qui l'a examiné et lui a prescrit des séances de kinésithérapie.

La kiné, Nadia, lui a posé des questions sur son travail. Karim lui a montré une photo de son bureau : l'écran était trop bas, sa chaise n'était pas bien réglée et il travaillait souvent avec son ordinateur portable sur les genoux. « Je comprends pourquoi vous avez mal ! » a dit Nadia.

Elle lui a appris des exercices simples : des étirements pour le dos et la nuque, et des exercices pour renforcer les muscles du ventre. Elle lui a aussi donné des conseils : mettre le haut de l'écran à la hauteur des yeux, garder les pieds à plat sur le sol et se lever toutes les heures pour marcher un peu.

Aujourd'hui, Karim va beaucoup mieux. Il fait ses exercices chaque matin et il va au travail à vélo. Il a même expliqué les conseils de Nadia à ses collègues. « La semaine prochaine, nous commencerons une pause étirements, tous ensemble, à 11 h ! » dit-il fièrement.`, `
un / une comptable|muhasebeci|accountant
en bas du dos|belin alt kısmı, bel|lower back
la nuque|ense|back of the neck
tellement… que|o kadar … ki|so … that
régler|ayarlamak|to adjust
un ordinateur portable|dizüstü bilgisayar|laptop
un étirement|esneme hareketi|stretch
renforcer|güçlendirmek|to strengthen
à la hauteur des yeux|göz hizasında|at eye level
à plat|düz, yere basarak|flat`, [
      Q("Quel est le métier de Karim ?", ["Il est kiné", "Il est comptable", "Il est vendeur"], 1),
      Q("Pourquoi Karim est-il allé chez le médecin ?", ["Il avait mal à la tête", "Il avait de la fièvre", "Il avait très mal au dos"], 2),
      Q("Quel problème y avait-il à son bureau ?", ["L'écran était trop bas", "La fenêtre était cassée", "La lampe était trop forte"], 0),
      Q("Selon Nadia, que faut-il faire toutes les heures ?", ["Boire un café", "Se lever et marcher", "Changer de chaise"], 1),
      Q("Qu'est-ce que Karim et ses collègues vont faire ?", ["Une pause étirements", "Un repas au restaurant", "Une course à vélo"], 0)
    ]),

    R("r-tournoi-handball", "A2", "Un tournoi de handball régional", "Bölgesel bir hentbol turnuvası", "A regional handball tournament", `
Le week-end dernier, le club de handball de Saint-Aubin a organisé un tournoi pour les équipes de filles de moins de 15 ans. Huit équipes de la région sont venues. Les matchs ont eu lieu dans le grand gymnase de la ville, le samedi et le dimanche.

Chloé, 14 ans, est gardienne de but dans l'équipe de Saint-Aubin. « J'étais très stressée le samedi matin. Il y avait beaucoup de monde dans les tribunes, et mes parents étaient là aussi », raconte-t-elle. Pour ce tournoi, chaque match durait deux fois quinze minutes.

Le samedi, Saint-Aubin a gagné ses trois matchs. Le dimanche matin, en demi-finale, le match était très serré. À la dernière minute, le score était de 18 à 17 pour Saint-Aubin, et l'autre équipe a eu un jet de sept mètres. Chloé a arrêté le ballon ! Toute l'équipe a couru vers elle pour la féliciter.

La finale a eu lieu à 16 h contre une équipe de la ville voisine. Cette fois, les adversaires étaient plus fortes et Saint-Aubin a perdu 21 à 15. Les filles étaient un peu déçues, mais leur entraîneur, Malik, leur a dit : « Vous avez fait un tournoi magnifique. Je suis fier de vous. »

Après la remise des médailles, tout le monde a partagé un goûter préparé par les parents : des crêpes, des gâteaux et des jus de fruits. Les bénévoles du club ont rangé le gymnase jusqu'à 20 h. L'année prochaine, le club organisera de nouveau le tournoi, et Chloé espère bien prendre sa revanche !`, `
un tournoi|turnuva|tournament
moins de 15 ans|15 yaş altı|under-15
le gymnase|kapalı spor salonu|sports hall
la gardienne de but|kaleci (kız)|goalkeeper
les tribunes (f.)|tribünler|stands
serré(e)|çekişmeli|close, tight
un jet de sept mètres|yedi metre atışı (hentbolda penaltı)|seven-metre throw
féliciter|tebrik etmek|to congratulate
déçu(e)|hayal kırıklığına uğramış|disappointed
prendre sa revanche|rövanşı almak|to get one's revenge`, [
      Q("Combien d'équipes sont venues au tournoi ?", ["Six", "Huit", "Dix"], 1),
      Q("Quel est le poste de Chloé ?", ["Ailière gauche", "Arbitre du match", "Gardienne de but"], 2),
      Q("Qu'est-ce que Chloé a fait en demi-finale ?", ["Elle a arrêté un jet de 7 m", "Elle a marqué trois buts", "Elle s'est blessée au bras"], 0),
      Q("Comment s'est terminée la finale ?", ["Saint-Aubin a gagné", "Le match a été annulé", "Saint-Aubin a perdu"], 2),
      Q("Qui a préparé le goûter ?", ["Les parents", "L'entraîneur", "Les joueuses"], 0)
    ]),

    R("r-bienfaits-marche", "A2", "Les bienfaits de la marche", "Yürüyüşün faydaları", "The benefits of walking", `
Hélène a 55 ans et elle est secrétaire dans une école. Il y a un an, elle ne faisait presque pas de sport. Elle prenait la voiture pour tout, même pour aller à la boulangerie, à cinq minutes de chez elle. Le soir, elle se sentait souvent fatiguée et elle dormait mal.

Un jour, sa fille lui a offert une montre qui compte les pas. Le premier soir, Hélène a regardé l'écran : elle avait fait seulement 2 500 pas dans la journée ! « J'étais très surprise. Je pensais que je marchais beaucoup plus », raconte-t-elle.

Alors, elle a changé quelques habitudes. Maintenant, elle va à l'école à pied, elle prend l'escalier au lieu de l'ascenseur et, le dimanche, elle se promène en forêt avec une amie. On entend souvent parler de 10 000 pas par jour. Mais pour Hélène, le plus important, c'est de marcher un peu plus chaque semaine.

La marche est une activité simple et gratuite. Elle est bonne pour le cœur, pour les os et pour le moral. L'Organisation mondiale de la santé conseille aux adultes au moins 150 minutes d'activité physique modérée par semaine : une marche rapide de 30 minutes, cinq jours par semaine, c'est déjà très bien !

Après un an, Hélène se sent plus en forme. Elle dort mieux et elle a moins mal aux genoux. L'été prochain, elle partira une semaine avec son amie pour marcher sur un sentier au bord de la mer, en Bretagne. « Il faut seulement une bonne paire de chaussures et un peu de motivation », dit-elle.`, `
les bienfaits (m.)|faydalar, yararlar|benefits
compter|saymak|to count
un pas|adım|step
surpris(e)|şaşırmış|surprised
une habitude|alışkanlık|habit
au lieu de|yerine|instead of
l'ascenseur (m.)|asansör|lift, elevator
les os (m.)|kemikler|bones
modéré(e)|orta düzeyde, ılımlı|moderate
un sentier|patika|path, trail`, [
      Q("Comment Hélène allait-elle à la boulangerie avant ?", ["Toujours à pied", "En voiture", "Avec son vélo"], 1),
      Q("Qui lui a offert la montre ?", ["Sa fille", "Son mari", "Une collègue"], 0),
      Q("Combien de pas a-t-elle faits le premier jour ?", ["10 000", "5 000", "2 500"], 2),
      Q("Que conseille l'OMS aux adultes ?", ["Dix minutes par jour", "150 minutes par semaine", "Une heure chaque mois"], 1),
      Q("Où Hélène marchera-t-elle l'été prochain ?", ["En Bretagne", "Dans les Alpes", "En Corse"], 0)
    ]),

    R("r-footballeuse-kine", "A2", "De footballeuse à kiné", "Futbolculuktan fizyoterapistliğe", "From footballer to physio", `
Sandrine a 38 ans. Quand elle était jeune, elle jouait au football dans un club près de Bordeaux. Elle s'entraînait quatre fois par semaine et, le week-end, elle jouait des matchs dans toute la région. Le football, c'était toute sa vie.

À 22 ans, elle s'est blessée gravement à la cheville pendant un match. Elle a fait huit mois de rééducation avec une kinésithérapeute, Martine. « Martine m'a beaucoup aidée, pas seulement pour ma cheville, mais aussi pour le moral », se souvient Sandrine.

Pendant ces longs mois, Sandrine a découvert un métier. Elle posait beaucoup de questions à Martine sur les muscles, les exercices et le corps humain. Un jour, elle a pris une décision : elle allait devenir kiné. Elle a repris ses études et, quelques années plus tard, elle a obtenu son diplôme.

Aujourd'hui, Sandrine a son propre cabinet. Elle soigne beaucoup de sportifs : des footballeurs, des coureurs, des handballeuses. Elle comprend bien ses patients, parce qu'elle a vécu la même chose. « Quand une joueuse me dit qu'elle a peur de ne jamais rejouer, je sais ce qu'elle ressent », explique-t-elle.

Sandrine n'a pas oublié le football. Le mercredi après-midi, elle entraîne une équipe de filles de dix ans. Et l'année prochaine, elle s'occupera aussi des joueuses de son ancien club : elle sera la kiné de l'équipe. « La boucle est bouclée ! » dit-elle en riant.`, `
se blesser|sakatlanmak|to get injured
gravement|ciddi şekilde|seriously
la cheville|ayak bileği|ankle
se souvenir|hatırlamak|to remember
découvrir|keşfetmek|to discover
reprendre ses études|eğitimine geri dönmek|to go back to studying
obtenir|elde etmek, almak|to get, to obtain
son propre cabinet|kendi muayenehanesi|her own practice
soigner|tedavi etmek|to treat
la boucle est bouclée|başladığı yere döndü|it has come full circle`, [
      Q("Où Sandrine jouait-elle au football ?", ["Près de Bordeaux", "Près de Lille", "Près de Marseille"], 0),
      Q("Quelle blessure a-t-elle eue à 22 ans ?", ["Au genou", "À l'épaule", "À la cheville"], 2),
      Q("Qui l'a aidée pendant sa rééducation ?", ["Son entraîneur", "Une kiné, Martine", "Sa grande sœur"], 1),
      Q("Pourquoi Sandrine comprend-elle bien ses patients ?", ["Elle lit beaucoup de livres", "Elle a beaucoup d'enfants", "Elle a vécu la même chose"], 2),
      Q("Que fait Sandrine le mercredi après-midi ?", ["Elle joue un match de foot", "Elle entraîne des filles", "Elle nage à la piscine"], 1)
    ]),

    R("r-don-du-sang", "A2", "Donner son sang", "Kan bağışlamak", "Giving blood", `
Thomas a 26 ans. En mai dernier, il a vu une affiche près de son travail : « Don du sang, mardi, de 14 h à 19 h, à la salle des fêtes ». Il n'avait jamais donné son sang. Il avait un peu peur des aiguilles, mais il a décidé d'essayer.

En France, c'est l'Établissement français du sang, l'EFS, qui organise les collectes. Pour donner son sang, il faut avoir entre 18 et 70 ans et peser au moins 50 kilos. Le don est bénévole : on ne reçoit pas d'argent. Il est aussi anonyme.

Le mardi, Thomas a mangé normalement à midi, parce qu'il ne faut pas venir à jeun. À la salle des fêtes, il a montré sa carte d'identité et il a rempli un questionnaire. Ensuite, il a eu un petit entretien avec un médecin, qui lui a posé des questions sur sa santé et sur ses voyages.

Le prélèvement a duré environ dix minutes. Une infirmière très gentille lui a parlé pendant tout ce temps, et Thomas n'a presque rien senti. Après, il est resté vingt minutes dans un espace de repos, avec une collation : un jus d'orange, des biscuits et un petit sandwich. Au total, il est resté environ une heure.

Thomas était très fier. « C'est une heure de mon temps, et ça peut sauver des vies ! » dit-il. En France, un homme peut donner son sang six fois par an, et une femme quatre fois. Thomas a déjà noté la prochaine collecte dans son agenda : il reviendra en septembre, avec deux collègues.`, `
le don du sang|kan bağışı|blood donation
une aiguille|iğne|needle
une collecte|kan bağışı kampanyası|blood drive
peser|… kilo gelmek, tartmak|to weigh
bénévole|gönüllü, karşılıksız|voluntary, unpaid
anonyme|isimsiz|anonymous
à jeun|aç karnına|on an empty stomach
un entretien|görüşme|interview, consultation
le prélèvement|kan alma|(blood) collection
sauver|kurtarmak|to save`, [
      Q("Où avait lieu la collecte ?", ["À l'hôpital de la ville", "À la salle des fêtes", "Dans une pharmacie"], 1),
      Q("Quel âge minimum faut-il avoir pour donner son sang ?", ["16 ans", "21 ans", "18 ans"], 2),
      Q("Qu'est-ce que Thomas a fait avant le prélèvement ?", ["Il a vu un médecin", "Il a fait du sport", "Il a dormi une heure"], 0),
      Q("Combien de temps le prélèvement a-t-il duré ?", ["Une heure", "Dix minutes", "Vingt minutes"], 1),
      Q("Combien de fois par an une femme peut-elle donner son sang ?", ["Quatre fois", "Six fois", "Deux fois"], 0)
    ]),

    R("r-coloc-intergenerationnelle", "A2", "La colocation intergénérationnelle", "Kuşaklar arası ev paylaşımı", "Intergenerational house-sharing", `
Lucas a 20 ans et il étudie en STAPS à Rennes. L'année dernière, il cherchait un logement, mais les studios étaient trop chers pour lui. Un jour, une amie lui a parlé d'une association qui met en contact des étudiants et des personnes âgées.

C'est comme ça qu'il a rencontré Jeanne, 79 ans. Jeanne est veuve et elle habite seule dans une grande maison avec un jardin. Ses enfants vivent loin, à Marseille et à Montréal. « Le soir, la maison était trop calme. Je voulais un peu de compagnie », explique-t-elle.

Maintenant, Lucas a une chambre chez Jeanne. Il paie un petit loyer, beaucoup moins cher qu'un studio. En échange, il rentre presque tous les soirs avant 20 h et il aide Jeanne pour de petites choses : il porte les courses, il sort les poubelles et il lui explique comment utiliser son nouveau téléphone.

Au début, ce n'était pas toujours facile. Jeanne n'aimait pas la musique de Lucas, et Lucas ne comprenait pas pourquoi elle dînait à 19 h ! Mais ils ont parlé et ils ont trouvé des solutions. Maintenant, ils dînent souvent ensemble le mardi et le jeudi. Jeanne lui a même appris à faire de vraies galettes bretonnes.

« Jeanne est un peu comme une grand-mère pour moi », dit Lucas. L'année prochaine, il partira six mois en stage à l'étranger, mais ensuite, il reviendra habiter chez Jeanne. Et Jeanne ? Elle a déjà dit à l'association : « Pendant son absence, je prendrai une autre étudiante ! »`, `
un logement|kalacak yer, konut|accommodation
mettre en contact|bağlantı kurmak, tanıştırmak|to put in touch
une personne âgée|yaşlı kişi|elderly person
veuf, veuve|dul|widower, widow
la compagnie|arkadaşlık, eşlik|company
le loyer|kira|rent
en échange|karşılığında|in return
sortir les poubelles|çöpleri çıkarmak|to take out the bins
une solution|çözüm|solution
à l'étranger|yurt dışında|abroad`, [
      Q("Pourquoi Lucas n'a-t-il pas pris un studio ?", ["C'était trop loin", "C'était trop cher", "C'était trop petit"], 1),
      Q("Où vivent les enfants de Jeanne ?", ["À Rennes et à Toulouse", "À Lille et à Strasbourg", "À Marseille et à Montréal"], 2),
      Q("Qu'est-ce que Lucas fait en échange ?", ["Il fait tout le ménage", "Il rend de petits services", "Il paie toutes les factures"], 1),
      Q("Quel problème avaient-ils au début ?", ["La musique de Lucas", "Le chat de Jeanne", "Le bruit des voisins"], 0),
      Q("Qu'est-ce que Lucas fera l'année prochaine ?", ["Il achètera un studio", "Il arrêtera ses études", "Il partira en stage"], 2)
    ]),

    R("r-vie-etudiante", "A2", "Ma vie d'étudiante à la fac", "Üniversitede öğrenci hayatım", "My student life at uni", `
Elena est italienne. Elle a 21 ans et, cette année, elle étudie la biologie à l'université de Toulouse avec le programme Erasmus. Elle est arrivée en septembre. Au début, tout était nouveau : la ville, la langue, les cours et même les horaires des repas !

À midi, Elena mange presque toujours au restaurant universitaire, que les étudiants appellent le « resto U ». C'est le CROUS qui le gère. Pour quelques euros, on a un repas complet : une entrée, un plat et un dessert. « Ce n'est pas la cuisine de ma mère, mais c'est bon et pas cher », dit-elle en riant.

L'après-midi, quand elle n'a pas cours, elle va à la bibliothèque universitaire, la « BU ». Elle aime y travailler parce que c'est calme et qu'il y a beaucoup de livres. Le premier mois, elle ne comprenait pas tout pendant les cours magistraux, alors une étudiante française, Manon, lui a prêté ses notes.

Elena et Manon sont vite devenues amies. Le jeudi soir, elles vont ensemble au cours de sport de l'université : Elena a choisi le volley-ball. Elle a aussi rejoint un groupe de conversation : elle aide des Français à parler italien et, eux, ils l'aident à parler français.

En juin, Elena passera ses examens, puis elle rentrera en Italie. Elle est un peu triste de partir. « J'ai appris beaucoup de choses ici, pas seulement en biologie. » Elle a déjà un projet : revenir à Toulouse pour faire un master. Et Manon ira lui rendre visite à Rome en juillet.`, `
la fac (= l'université)|üniversite (gündelik dil)|uni
le programme Erasmus|Erasmus programı|Erasmus programme
gérer|yönetmek, işletmek|to run, to manage
un repas complet|tam öğün|full meal
une entrée|başlangıç yemeği|starter
avoir cours|dersi olmak|to have class
un cours magistral|amfi dersi|lecture
prêter|ödünç vermek|to lend
rejoindre|katılmak|to join
rendre visite à quelqu'un|birini ziyaret etmek|to visit someone`, [
      Q("Qu'est-ce qu'Elena étudie ?", ["La médecine", "La biologie", "L'histoire"], 1),
      Q("Qui gère le resto U ?", ["Le CROUS", "La mairie", "Les profs"], 0),
      Q("Pourquoi Elena aime-t-elle travailler à la BU ?", ["Elle est ouverte la nuit", "On peut y manger", "C'est calme"], 2),
      Q("Quel sport Elena pratique-t-elle ?", ["Le basket", "Le volley-ball", "La natation"], 1),
      Q("Où Manon ira-t-elle en juillet ?", ["À Rome", "À Toulouse", "À Milan"], 0)
    ]),

    R("r-train-de-nuit", "A2", "Le train de nuit", "Gece treni", "The night train", `
En février dernier, Aurélie et son frère Paul sont partis faire du ski dans les Alpes, à Briançon. Ils n'ont pris ni l'avion ni la voiture : ils ont choisi le train de nuit. « Je voulais essayer depuis longtemps. Et c'est mieux pour la planète », explique Aurélie.

Le train est parti le soir de la gare d'Austerlitz, à Paris. Aurélie et Paul avaient réservé deux couchettes dans un compartiment de six places. Ils ont partagé le compartiment avec une famille : des parents et leurs deux enfants, qui allaient aussi à la montagne.

Avant de dormir, ils ont mangé leurs sandwichs et ils ont joué aux cartes avec les enfants. Ensuite, le contrôleur est passé pour vérifier les billets. Vers 23 h, tout le monde a éteint la lumière et s'est couché.

Paul a très bien dormi, mais Aurélie un peu moins : le train faisait du bruit et la couchette était étroite. Le matin, elle a ouvert le rideau et elle a vu les montagnes sous la neige. « C'était magique. J'ai tout de suite oublié ma petite nuit ! » raconte-t-elle.

Ils sont arrivés le matin et ils étaient sur les pistes avant midi. Pour Aurélie, le grand avantage du train de nuit, c'est qu'on gagne du temps : on voyage pendant qu'on dort. L'année prochaine, ils reprendront le train de nuit, mais cette fois, Aurélie apportera un masque pour les yeux !`, `
un train de nuit|gece treni|night train
la planète|gezegen, dünya|the planet
une couchette|kuşet, yatak|couchette, berth
un compartiment|kompartıman|compartment
partager|paylaşmak|to share
le contrôleur|kondüktör|ticket inspector
éteindre|kapatmak (ışık)|to switch off
étroit(e)|dar|narrow
les pistes (f.)|kayak pistleri|ski slopes`, [
      Q("Pourquoi Aurélie a-t-elle choisi le train de nuit ?", ["C'était beaucoup moins cher", "C'est bien pour la planète", "Son frère a peur de l'avion"], 1),
      Q("De quelle gare le train est-il parti ?", ["Gare de Lyon", "Gare Montparnasse", "Gare d'Austerlitz"], 2),
      Q("Avec qui ont-ils partagé le compartiment ?", ["Une famille", "Des étudiants", "Des skieurs suisses"], 0),
      Q("Pourquoi Aurélie a-t-elle mal dormi ?", ["Elle avait faim", "Le train faisait du bruit", "Les enfants pleuraient"], 1),
      Q("Qu'est-ce qu'Aurélie apportera la prochaine fois ?", ["Un oreiller", "Un livre", "Un masque"], 2)
    ]),

    R("r-stage-club-athle", "A2", "Un stage dans un club de sport", "Bir spor kulübünde staj", "An internship at a sports club", `
Mathis a 19 ans et il est en deuxième année de STAPS à Clermont-Ferrand. Cette année, il a dû faire un stage de six semaines. Il a choisi un club d'athlétisme de sa ville, parce qu'il faisait de la course de haies quand il était au lycée.

Le premier jour, le responsable du club, Bruno, lui a présenté les entraîneurs et les différents groupes : les enfants, les adolescents, les adultes et les seniors. « Ici, tu vas observer, poser des questions et, petit à petit, tu prépareras des séances », lui a dit Bruno.

Pendant les deux premières semaines, Mathis a surtout observé. Il prenait des notes sur les échauffements, les exercices et la façon de parler aux sportifs. Il a été surpris : avec les enfants de huit ans, il fallait beaucoup de jeux, parce qu'ils n'écoutaient pas longtemps !

À la troisième semaine, Mathis a préparé sa première séance pour le groupe des seniors. Il était très stressé, mais tout s'est bien passé. Les seniors ont fait de la marche rapide, des exercices d'équilibre et des étirements. À la fin, une dame de 75 ans lui a dit : « Merci, jeune homme, c'était parfait ! »

Pour valider son stage, Mathis écrira un rapport et il le présentera à l'université en mai. Il sait maintenant ce qu'il veut faire plus tard : travailler dans le sport-santé avec des personnes âgées. Et le club lui a déjà proposé un petit travail le samedi matin pour l'année prochaine.`, `
un stage|staj|internship
l'athlétisme (m.)|atletizm|athletics
la course de haies|engelli koşu|hurdles
le / la responsable|sorumlu, yönetici|manager, person in charge
observer|gözlemlemek|to observe
un échauffement|ısınma|warm-up
la façon de|… şekli, biçimi|the way of
l'équilibre (m.)|denge|balance
valider|onaylatmak, geçmek|to validate, to pass
un rapport|rapor|report`, [
      Q("Combien de temps dure le stage de Mathis ?", ["Six semaines", "Six mois", "Deux semaines"], 0),
      Q("Qu'est-ce que Mathis a fait les deux premières semaines ?", ["Il a entraîné les enfants", "Il a surtout observé", "Il a nettoyé le stade"], 1),
      Q("Pourquoi fallait-il beaucoup de jeux avec les enfants ?", ["Ils étaient trop fatigués", "Ils préféraient courir seuls", "Ils n'écoutaient pas longtemps"], 2),
      Q("Pour quel groupe a-t-il préparé sa première séance ?", ["Les seniors", "Les adolescents", "Les enfants"], 0),
      Q("Que fera Mathis en mai ?", ["Il partira en vacances", "Il courra un marathon", "Il présentera un rapport"], 2)
    ])
  );
})();
