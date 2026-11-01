/* Graded readings, A1–A2 set 2: daily life in France, seasons, health, handball and volunteering.
   Same format as data/readings.js: { id, level, t:{fr,tr,en}, text, gloss: [fr, tr, en][], qs: [{ q, o, a }] }. */
(function () {
  const G = s => s.trim().split("\n").map(l => l.split("|").map(x => x.trim()));
  const Q = (q, o, a) => ({ q, o, a });
  const R = (id, level, fr, tr, en, text, gloss, qs) => ({ id, level, t: { fr, tr, en }, text: text.trim(), gloss: G(gloss), qs });

  window.READINGS = window.READINGS || [];
  window.READINGS.push(
    R("r-rentree-septembre", "A1", "La rentrée", "Okulların açılışı", "Back to school", `
En France, la rentrée, c'est au début du mois de septembre. Les enfants retournent à l'école après deux mois de vacances.

Nadia a deux enfants : Yanis, six ans, et Inès, onze ans. Yanis entre au CP. Il va apprendre à lire et à écrire. Inès entre au collège, en sixième. Elle est un peu stressée, mais elle est aussi contente.

Ce soir, Nadia regarde la liste des fournitures : des cahiers, des stylos, une trousse, une règle et des crayons de couleur. Demain, elle va faire les courses au supermarché avec les enfants.

Pour les adultes aussi, c'est la rentrée : on recommence le travail, le sport, les cours de langue. Septembre, c'est un nouveau départ.`, `
la rentrée|okulların / işlerin yeniden başlaması|back to school / back to work
retourner|geri dönmek|to go back
le CP|ilkokul 1. sınıf|first year of primary school
le collège|ortaokul|secondary school (11–15)
les fournitures (f.)|kırtasiye malzemeleri|school supplies
la trousse|kalem kutusu|pencil case
la règle|cetvel|ruler
un nouveau départ|yeni bir başlangıç|a fresh start`, [
      Q("Quand est la rentrée en France ?", ["Au début du mois de juillet", "Au début du mois de septembre", "À la fin du mois d'octobre"], 1),
      Q("Qu'est-ce que Yanis va apprendre au CP ?", ["À nager", "À conduire", "À lire et à écrire"], 2),
      Q("Comment est Inès ?", ["Un peu stressée mais contente", "Très triste", "Malade"], 0),
      Q("Qu'est-ce que Nadia va faire demain ?", ["Aller à la plage", "Acheter les fournitures avec les enfants", "Travailler au collège"], 1),
      Q("Pour les adultes, septembre c'est…", ["les vacances", "un nouveau départ", "la fin de l'année"], 1)
    ]),

    R("r-carte-nice", "A1", "Une carte postale de Nice", "Nice'ten bir kartpostal", "A postcard from Nice", `
Chère Esin,

Je suis à Nice pour une semaine avec ma sœur. Il fait beau et chaud : 26 degrés en octobre ! La mer est bleue et très belle.

Le matin, nous marchons sur la Promenade des Anglais, au bord de la mer. L'après-midi, nous visitons le Vieux-Nice. Les rues sont petites et les maisons sont jaunes et orange. Hier, nous avons mangé de la socca : c'est une galette de farine de pois chiches, une spécialité de Nice. C'est très bon !

Demain, nous allons monter sur la colline du Château pour voir toute la ville. Samedi, nous rentrons à Lyon.

Je t'embrasse,
Camille`, `
cher / chère|sevgili (mektupta)|dear
il fait beau|hava güzel|the weather is nice
au bord de la mer|deniz kenarında|by the sea
la rue|sokak|street
la galette|yassı çörek / krep|flat cake, pancake
la farine de pois chiches|nohut unu|chickpea flour
la colline|tepe|hill
je t'embrasse|sevgiler, öpüyorum|love (end of a letter)`, [
      Q("Avec qui Camille est à Nice ?", ["Avec sa mère", "Avec sa sœur", "Avec Esin"], 1),
      Q("Quel temps fait-il à Nice ?", ["Il pleut", "Il fait froid", "Il fait beau et chaud"], 2),
      Q("Qu'est-ce que la socca ?", ["Une galette de farine de pois chiches", "Un gâteau au chocolat", "Une boisson"], 0),
      Q("Qu'est-ce qu'elles vont faire demain ?", ["Nager dans la mer", "Monter sur la colline du Château", "Rentrer à Lyon"], 1),
      Q("Où habite Camille ?", ["À Nice", "À Paris", "À Lyon"], 2)
    ]),

    R("r-marche-noel", "A1", "Le marché de Noël", "Noel pazarı", "The Christmas market", `
En décembre, beaucoup de villes françaises ont un marché de Noël. Le plus célèbre est à Strasbourg, en Alsace. C'est aussi un des plus anciens de France.

Ce week-end, Esin va à Strasbourg en train avec son amie Julie. Sur le marché, il y a des petits chalets en bois. On vend des décorations, des bougies, des jouets et des choses à manger. Il fait froid, alors les deux amies achètent un vin chaud et un chocolat chaud. Elles mangent aussi du pain d'épices et des bredele, des petits biscuits alsaciens.

Le soir, la ville est magnifique avec les lumières. Il y a un très grand sapin sur la place Kléber. Esin prend beaucoup de photos pour sa famille.`, `
le marché de Noël|Noel pazarı|Christmas market
célèbre|ünlü|famous
le chalet en bois|ahşap kulübe|wooden hut
la bougie|mum|candle
le jouet|oyuncak|toy
le vin chaud|sıcak şarap|mulled wine
le pain d'épices|baharatlı kek / zencefilli ekmek|gingerbread
le sapin|çam ağacı (Noel ağacı)|fir tree, Christmas tree`, [
      Q("Où est le marché de Noël le plus célèbre ?", ["À Marseille", "À Strasbourg", "À Bordeaux"], 1),
      Q("Comment Esin va à Strasbourg ?", ["En train", "En avion", "En voiture"], 0),
      Q("Qu'est-ce que les bredele ?", ["Des bougies", "Des jouets", "Des petits biscuits"], 2),
      Q("Où est le grand sapin ?", ["Devant la gare", "Sur la place Kléber", "Dans un chalet"], 1)
    ]),

    R("r-saisons-france", "A1", "Les saisons en France", "Fransa'da mevsimler", "The seasons in France", `
En France, il y a quatre saisons : le printemps, l'été, l'automne et l'hiver.

Au printemps, de mars à juin, il fait doux et il pleut souvent. Les arbres sont en fleurs. En été, il fait chaud, surtout dans le sud. Beaucoup de Français vont à la mer ou à la montagne.

En automne, les feuilles des arbres sont rouges et jaunes. Il y a du vent et de la pluie. Fin octobre, on change l'heure : on dort une heure de plus !

En hiver, il fait froid. Dans le nord et dans l'est, il gèle souvent. Il neige dans les Alpes et dans les Pyrénées, et les gens font du ski.

Hugo, un ami d'Esin, adore l'hiver. Esin, elle, préfère le printemps.`, `
la saison|mevsim|season
il fait doux|hava ılık|it's mild
pleuvoir / la pluie|yağmur yağmak / yağmur|to rain / rain
la feuille|yaprak|leaf
le vent|rüzgâr|wind
changer l'heure|saati değiştirmek|to change the clocks
il gèle|don var, buz tutuyor|it's freezing
il neige|kar yağıyor|it's snowing`, [
      Q("Combien de saisons il y a en France ?", ["Deux", "Trois", "Quatre"], 2),
      Q("Comment est le temps au printemps ?", ["Doux, avec de la pluie", "Très froid avec de la neige", "Très chaud et sec"], 0),
      Q("Qu'est-ce qui se passe fin octobre ?", ["On change l'heure", "Les enfants vont à l'école", "Il neige à Nice"], 0),
      Q("Où est-ce qu'on fait du ski ?", ["En Bretagne", "Dans les Alpes et les Pyrénées", "À Paris"], 1),
      Q("Quelle saison Esin préfère ?", ["L'hiver", "L'été", "Le printemps"], 2)
    ]),

    R("r-message-lina", "A1", "Un message de Lina", "Lina'dan bir mesaj", "A message from Lina", `
Salut Esin ! Ça va ?

Samedi, c'est mon anniversaire ! Je vais avoir trente ans. J'organise une petite fête chez moi, à partir de 19 heures. Je vais préparer un couscous et mon frère Karim va apporter un gâteau. Il y a aussi des amis de mon club de yoga. Tu vas voir, ils sont très sympas.

Mon adresse : 12 rue des Lilas, troisième étage, porte à gauche. Le code de l'immeuble, c'est 4521B. Il y a un bus, le 7, juste devant chez moi.

Tu peux apporter une boisson si tu veux, mais pas de cadeau, s'il te plaît !

Tu viens ? Réponds-moi avant jeudi.

Bisous,
Lina`, `
salut|selam|hi
l'anniversaire (m.)|doğum günü|birthday
la fête|parti, kutlama|party
à partir de|… -den itibaren|from
apporter|getirmek|to bring
l'immeuble (m.)|apartman binası|building
le code|giriş şifresi|door code
bisous|öpücükler (samimi kapanış)|kisses, love`, [
      Q("Pourquoi Lina fait une fête ?", ["Pour son anniversaire", "Pour son nouveau travail", "Pour Noël"], 0),
      Q("Quel âge va avoir Lina ?", ["Vingt ans", "Vingt-cinq ans", "Trente ans"], 2),
      Q("Qui va apporter le gâteau ?", ["Esin", "Karim, le frère de Lina", "Les amis du yoga"], 1),
      Q("Qu'est-ce que Lina ne veut pas ?", ["De boisson", "De cadeau", "De musique"], 1),
      Q("Quand Esin doit répondre ?", ["Avant jeudi", "Samedi soir", "Dimanche"], 0)
    ]),

    R("r-petit-dejeuner-fr", "A1", "Le petit-déjeuner", "Kahvaltı", "Breakfast", `
En Turquie, Esin mange un grand petit-déjeuner : du fromage, des olives, des tomates, des concombres, des œufs et du thé. En France, c'est très différent.

Le matin, Paul, son colocataire, mange des tartines : du pain avec du beurre et de la confiture. Il boit un grand café dans un bol. Il trempe parfois sa tartine dans le café ! Les enfants boivent souvent un chocolat chaud et mangent des céréales.

Le croissant, c'est plutôt pour le week-end. Le dimanche matin, Paul va à la boulangerie et il achète des croissants et des pains au chocolat.

Aujourd'hui, Esin prépare un petit-déjeuner turc pour Paul. Il goûte le menemen et il dit : « C'est génial ! Demain, on recommence ? »`, `
le petit-déjeuner|kahvaltı|breakfast
le colocataire|ev arkadaşı|flatmate
la tartine|üzerine bir şey sürülmüş ekmek dilimi|slice of bread with spread
la confiture|reçel|jam
le bol|kâse|bowl
tremper|batırmak|to dip
la boulangerie|fırın|bakery
le pain au chocolat|çikolatalı kruvasan|chocolate pastry`, [
      Q("Qu'est-ce que Paul mange le matin ?", ["Des œufs et des olives", "Des tartines avec du beurre et de la confiture", "Une soupe"], 1),
      Q("Dans quoi il boit son café ?", ["Dans un verre", "Dans une tasse turque", "Dans un bol"], 2),
      Q("Quand est-ce qu'on mange plutôt des croissants ?", ["Le week-end", "Le lundi", "Le soir"], 0),
      Q("Qu'est-ce que Paul pense du menemen ?", ["Il n'aime pas", "C'est trop épicé", "C'est génial"], 2)
    ]),

    R("r-trouve-appart", "A2", "Comment j'ai trouvé mon appartement", "Dairemi nasıl buldum", "How I found my flat", `
Quand je suis arrivée à Bordeaux en août, j'habitais chez une amie. Je cherchais un studio, mais ce n'était pas facile. Tous les jours, je regardais les annonces sur Internet et j'envoyais des messages aux propriétaires. Souvent, personne ne répondait.

Le problème, c'était le dossier. Les propriétaires demandaient des fiches de paie, un avis d'imposition et un garant. Je n'avais pas de garant en France. Une conseillère de mon université m'a parlé de Visale, une garantie gratuite pour les jeunes. J'ai fait la demande en ligne et, deux jours plus tard, j'avais mon certificat.

En septembre, j'ai visité un petit studio de 22 m² près du tram. Il était lumineux et pas trop cher. J'ai donné mon dossier complet tout de suite, et la propriétaire m'a appelée le soir même : c'était oui !

Nous avons fait l'état des lieux ensemble et j'ai payé un dépôt de garantie d'un mois de loyer. Maintenant, je vais demander l'aide au logement à la CAF. Le conseil que je donnerai aux nouveaux arrivants : préparez votre dossier avant les visites !`, `
l'annonce (f.)|ilan|advert, listing
le/la propriétaire|ev sahibi|landlord / landlady
la fiche de paie|maaş bordrosu|payslip
le garant|kefil|guarantor
lumineux / lumineuse|aydınlık|bright
l'état des lieux (m.)|giriş/çıkış durum tespiti|inventory check
le dépôt de garantie|depozito|security deposit
le loyer|kira|rent`, [
      Q("Où habitait la narratrice en août ?", ["Dans un hôtel", "Chez une amie", "Dans une résidence universitaire"], 1),
      Q("Quel était son problème principal ?", ["Elle n'avait pas de garant", "Elle ne parlait pas français", "Elle n'avait pas d'argent"], 0),
      Q("Qu'est-ce que Visale ?", ["Une agence immobilière", "Un site d'annonces", "Une garantie gratuite pour les jeunes"], 2),
      Q("Combien de temps la propriétaire a-t-elle mis pour répondre ?", ["Une semaine", "Le soir même", "Un mois"], 1),
      Q("Quel est son conseil ?", ["Préparer son dossier avant les visites", "Chercher seulement en été", "Ne pas faire l'état des lieux"], 0)
    ]),

    R("r-journee-cabinet", "A2", "Une journée au cabinet de kiné", "Fizyoterapi muayenehanesinde bir gün", "A day at the physio practice", `
Lundi dernier, Esin a passé une journée d'observation dans un cabinet de kinésithérapie, à Nantes. Le cabinet était petit : trois kinés, une salle d'attente et une grande salle avec des tapis, des ballons et des haltères.

Mathieu, le kiné qui l'accueillait, commençait à huit heures. Le premier patient était un monsieur de soixante-dix ans. Il avait une prothèse du genou depuis un mois et il marchait encore avec une canne. Ensuite, il y a eu une jeune femme avec un mal de dos et un adolescent qui s'était fait une entorse au football.

Chaque séance durait environ trente minutes. Au début, Mathieu posait des questions et vérifiait la douleur. Puis il faisait un massage ou des mobilisations, et il montrait des exercices. À la fin, le patient donnait sa carte Vitale.

À midi, ils ont mangé un sandwich et Mathieu a répondu aux messages sur Doctolib. L'après-midi a été chargé : neuf patients !

Le soir, Esin était fatiguée mais heureuse. Elle a pensé : « Quand mon diplôme sera reconnu, je travaillerai dans un cabinet comme celui-là. »`, `
le cabinet|muayenehane|practice, clinic
la salle d'attente|bekleme salonu|waiting room
l'haltère (m.)|dambıl|dumbbell
accueillir|karşılamak, ağırlamak|to welcome, to host
la prothèse du genou|diz protezi|knee replacement
la canne|baston|walking stick
la séance|seans|session
chargé(e)|yoğun|busy`, [
      Q("Combien de kinés travaillent au cabinet ?", ["Un", "Deux", "Trois"], 2),
      Q("Quel était le problème du premier patient ?", ["Une prothèse du genou", "Une entorse", "Un mal de tête"], 0),
      Q("Combien de temps durait une séance ?", ["Dix minutes", "Environ trente minutes", "Deux heures"], 1),
      Q("Qu'est-ce que Mathieu a fait à midi ?", ["Il est rentré chez lui", "Il a joué au handball", "Il a répondu aux messages sur Doctolib"], 2),
      Q("Comment était Esin le soir ?", ["Fatiguée mais heureuse", "Triste et déçue", "En colère"], 0)
    ]),

    R("r-handball-france", "A2", "Le handball en France", "Fransa'da hentbol", "Handball in France", `
En France, le handball est un sport très populaire. Beaucoup d'enfants le découvrent à l'école, pendant les cours d'EPS, et la Fédération française de handball compte plusieurs centaines de milliers de licenciés.

Pourquoi ce succès ? D'abord grâce aux résultats des équipes nationales. L'équipe de France masculine, qu'on appelle « les Experts », a gagné trois fois les Jeux olympiques : en 2008, en 2012 et à Tokyo en 2021. Elle a aussi été six fois championne du monde. L'équipe féminine a été championne olympique à Tokyo, elle aussi, et plusieurs fois championne du monde et d'Europe.

Le championnat masculin de première division s'appelle la Starligue. Des clubs comme Paris, Montpellier ou Nantes jouent aussi en Ligue des champions. Chez les femmes, des clubs comme Metz ou Brest ont souvent joué les premiers rôles en Europe.

Aïcha, vingt-deux ans, a commencé le handball à dix ans dans un petit club de Normandie. « Au début, je venais pour mes copines. Après, j'ai adoré l'ambiance et l'esprit d'équipe. » Aujourd'hui, elle joue toujours et elle entraînera les moins de 13 ans la saison prochaine.`, `
populaire|popüler, sevilen|popular
l'EPS (f.)|beden eğitimi dersi|PE (physical education)
le/la licencié(e)|lisanslı sporcu|registered player
grâce à|sayesinde|thanks to
le championnat|lig, şampiyona|league, championship
jouer les premiers rôles|zirvede yer almak|to be among the top contenders
l'ambiance (f.)|atmosfer|atmosphere
entraîner|çalıştırmak (antrenör olarak)|to coach`, [
      Q("Où beaucoup d'enfants découvrent-ils le handball ?", ["À la télévision", "À l'école, en EPS", "En vacances"], 1),
      Q("Comment appelle-t-on l'équipe de France masculine ?", ["Les Experts", "Les Champions", "Les Bleus du hand"], 0),
      Q("Combien de fois les hommes ont-ils gagné les Jeux olympiques ?", ["Une fois", "Deux fois", "Trois fois"], 2),
      Q("Comment s'appelle le championnat masculin de première division ?", ["La Ligue 1", "La Starligue", "Le Top 14"], 1),
      Q("Qu'est-ce qu'Aïcha va faire la saison prochaine ?", ["Arrêter le handball", "Jouer en Ligue des champions", "Entraîner les moins de 13 ans"], 2)
    ]),

    R("r-carte-vitale", "A2", "La carte Vitale, comment ça marche ?", "Carte Vitale nasıl çalışır?", "How does the carte Vitale work?", `
La carte Vitale est une petite carte verte avec une puce. Elle montre que vous êtes inscrit à l'Assurance maladie, la partie de la Sécurité sociale qui rembourse les soins.

Quand Esin est arrivée en France, elle n'avait pas encore de carte. Elle a d'abord fait une demande d'inscription auprès de l'Assurance maladie avec son passeport, son titre de séjour et un justificatif de domicile. Quelques semaines plus tard, elle a reçu son numéro de sécurité sociale. Ensuite, elle a créé son compte sur le site ameli.fr et elle a commandé sa carte avec une photo.

Comment ça marche ? Chez le médecin, le kiné ou à la pharmacie, vous donnez votre carte. Le professionnel envoie les informations directement à l'Assurance maladie. Vous êtes remboursé en quelques jours sur votre compte bancaire. Sans carte, vous recevez une feuille de soins en papier et le remboursement prend plus de temps.

Attention : l'Assurance maladie ne rembourse pas tout. Pour le reste, beaucoup de gens ont une mutuelle. Esin a aussi choisi un médecin traitant : c'est obligatoire pour être bien remboursée.

Son conseil : « Gardez toujours votre carte Vitale dans votre portefeuille ! »`, `
la puce|çip|chip
être inscrit(e)|kayıtlı olmak|to be registered
les soins (m.)|tedavi, sağlık hizmetleri|healthcare, treatment
le numéro de sécurité sociale|sosyal güvenlik numarası|social security number
la feuille de soins|tedavi belgesi (geri ödeme formu)|claim form
la mutuelle|tamamlayıcı sağlık sigortası|top-up health insurance
le médecin traitant|aile hekimi (kayıtlı)|registered GP
le portefeuille|cüzdan|wallet`, [
      Q("De quelle couleur est la carte Vitale ?", ["Bleue", "Rouge", "Verte"], 2),
      Q("Qu'est-ce qu'Esin a reçu avant sa carte ?", ["Son numéro de sécurité sociale", "Une mutuelle", "Une ordonnance"], 0),
      Q("Sur quel site a-t-elle créé son compte ?", ["doctolib.fr", "ameli.fr", "caf.fr"], 1),
      Q("Que se passe-t-il sans carte Vitale ?", ["On ne peut pas voir de médecin", "On reçoit une feuille de soins en papier", "Les soins sont gratuits"], 1),
      Q("Pourquoi beaucoup de gens ont une mutuelle ?", ["Pour avoir une carte Vitale", "Pour payer moins d'impôts", "Parce que l'Assurance maladie ne rembourse pas tout"], 2)
    ]),

    R("r-vacances-ete", "A2", "Les vacances d'été des Français", "Fransızların yaz tatili", "French summer holidays", `
En France, les salariés ont cinq semaines de congés payés par an, et beaucoup prennent deux ou trois semaines en été. Les vacances scolaires d'été durent environ deux mois, de début juillet à début septembre.

On dit qu'il y a deux types de vacanciers : les « juilletistes », qui partent en juillet, et les « aoûtiens », qui partent en août. Autour du 15 août, il y a souvent d'énormes bouchons sur les autoroutes. Avant de partir, beaucoup de gens consultent Bison Futé, un service qui donne des prévisions de circulation.

Où vont les Français ? La plupart restent en France : à la mer, sur la côte atlantique ou en Méditerranée, à la montagne ou à la campagne, chez la famille. Le camping est très populaire, surtout chez les familles.

L'été dernier, Chloé et ses parents ont loué un mobil-home en Bretagne. « Il pleuvait un peu, mais on a fait du vélo, on a mangé des crêpes et on s'est baignés tous les jours. » L'année prochaine, ils partiront en juillet, dans les Pyrénées, pour faire de la randonnée. « Pas en août, cette fois : trop de monde ! »`, `
le/la salarié(e)|maaşlı çalışan|employee
les congés payés|ücretli izin|paid leave
le bouchon|trafik sıkışıklığı|traffic jam
l'autoroute (f.)|otoyol|motorway
la prévision|tahmin|forecast
louer|kiralamak|to rent
se baigner|denize/suya girmek|to go swimming
la randonnée|doğa yürüyüşü|hike`, [
      Q("Combien de semaines de congés payés ont les salariés en France ?", ["Trois", "Cinq", "Huit"], 1),
      Q("Comment appelle-t-on les gens qui partent en août ?", ["Les aoûtiens", "Les juilletistes", "Les estivants d'hiver"], 0),
      Q("À quoi sert Bison Futé ?", ["À réserver un camping", "À acheter des billets de train", "À donner des prévisions de circulation"], 2),
      Q("Qu'est-ce que Chloé a fait en Bretagne ?", ["Du ski", "Du vélo et des baignades", "De la randonnée en montagne"], 1),
      Q("Pourquoi ne veulent-ils pas partir en août l'année prochaine ?", ["Il fait trop froid", "C'est trop cher", "Il y a trop de monde"], 2)
    ]),

    R("r-benevole-club", "A2", "Bénévole dans un club de sport", "Bir spor kulübünde gönüllü", "Volunteering at a sports club", `
En France, presque tous les clubs de sport amateurs sont des associations. Ils fonctionnent grâce aux bénévoles : des personnes qui donnent leur temps sans être payées.

En septembre, Esin est allée au forum des associations de sa ville. Il y avait des stands pour la danse, le judo, la musique… et le handball. Elle a parlé avec Sophie, la présidente du club. « On cherche toujours des bénévoles ! » a dit Sophie.

Maintenant, Esin aide le club deux fois par semaine. Le mercredi après-midi, elle participe à l'entraînement des enfants avec Romain, l'entraîneur. Elle prépare l'échauffement et elle montre des étirements. Le samedi, elle tient parfois la table de marque pendant les matchs ou elle vend des boissons et des crêpes à la buvette.

Au début, elle était timide et elle ne comprenait pas toutes les blagues des parents. Mais petit à petit, elle a fait des progrès en français et elle s'est fait des amis.

La saison prochaine, le club lui proposera peut-être de passer un diplôme d'entraîneur. « Le bénévolat, c'est la meilleure école de français ! » dit-elle.`, `
le/la bénévole|gönüllü|volunteer
l'association (f.)|dernek|non-profit association
le forum des associations|dernekler fuarı|clubs and societies fair
l'échauffement (m.)|ısınma|warm-up
l'étirement (m.)|esneme|stretch
la table de marque|skor masası|scorer's table
la buvette|büfe|refreshment stand
la blague|şaka|joke`, [
      Q("Qu'est-ce qu'un bénévole ?", ["Un joueur professionnel", "Une personne qui donne son temps sans être payée", "Un arbitre"], 1),
      Q("Où Esin a-t-elle rencontré Sophie ?", ["Au forum des associations", "À la buvette", "Pendant un match"], 0),
      Q("Que fait Esin le mercredi après-midi ?", ["Elle vend des crêpes", "Elle joue un match", "Elle aide à l'entraînement des enfants"], 2),
      Q("Au début, comment était Esin ?", ["Très à l'aise", "Timide", "Fâchée"], 1),
      Q("Selon Esin, le bénévolat c'est…", ["trop fatigant", "la meilleure école de français", "seulement pour les retraités"], 1)
    ])
  );
})();
