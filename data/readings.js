/* Graded readings written for this site (A1 → C1), set in everyday life, health, sport and studies.
   Each: { id, level, t:{fr,tr,en}, text (paragraphs separated by a blank line), gloss: [fr, tr, en][], qs: [{ q, o:[options], a: index }] }.
   Questions are in simple French; the first option is NOT always the right one. */
(function () {
  const G = s => s.trim().split("\n").map(l => l.split("|").map(x => x.trim()));
  const Q = (q, o, a) => ({ q, o, a });
  const R = (id, level, fr, tr, en, text, gloss, qs) => ({ id, level, t: { fr, tr, en }, text: text.trim(), gloss: G(gloss), qs });

  window.READINGS = [
    R("r-cafe", "A1", "Au café", "Kafede", "At the café", `
Esin entre dans un petit café près de la gare. Il est huit heures du matin. Elle dit « Bonjour ! » au serveur.

« Bonjour madame. Qu'est-ce que vous voulez ? » demande le serveur. Esin répond : « Je voudrais un café crème et un croissant, s'il vous plaît. »

Le café crème coûte trois euros et le croissant coûte un euro vingt. Esin paie par carte. Elle s'assoit près de la fenêtre et elle regarde les gens dans la rue. Elle est contente : elle a parlé français !`, `
le serveur|garson|waiter
je voudrais|… istiyorum (kibar)|I would like
coûter|… tutmak, fiyatı olmak|to cost
payer par carte|kartla ödemek|to pay by card
s'asseoir|oturmak|to sit down
la fenêtre|pencere|window`, [
      Q("Où est le café ?", ["Près de la gare", "Près de l'université", "Dans un hôtel"], 0),
      Q("Qu'est-ce qu'Esin commande ?", ["Un thé et un gâteau", "Un café crème et un croissant", "Un jus d'orange"], 1),
      Q("Combien coûte le croissant ?", ["3 €", "1,20 €", "2,10 €"], 1),
      Q("Comment est-ce qu'Esin paie ?", ["En espèces", "Par carte", "Par chèque"], 1)
    ]),

    R("r-marche", "A1", "Le marché du samedi", "Cumartesi pazarı", "The Saturday market", `
Le samedi, il y a un marché sur la place de la mairie. Esin aime beaucoup le marché : les fruits sont frais et les gens sont sympathiques.

Aujourd'hui, elle achète un kilo de tomates, des pommes et du fromage. Le vendeur de fromage est très gentil. Il dit : « Goûtez ce fromage, madame ! » Esin goûte : c'est délicieux.

Au marché, il y a aussi des olives et des épices. Esin pense à la Turquie et elle sourit. Elle achète des olives noires pour le petit-déjeuner.`, `
la place|meydan|square
frais / fraîche|taze|fresh
le vendeur|satıcı|seller
goûter|tadına bakmak|to taste
les épices|baharatlar|spices
sourire|gülümsemek|to smile`, [
      Q("Quand est le marché ?", ["Le dimanche", "Le samedi", "Tous les jours"], 1),
      Q("Qu'est-ce que le vendeur propose ?", ["De goûter le fromage", "Un café", "Des fleurs"], 0),
      Q("Pourquoi Esin sourit ?", ["Elle pense à la Turquie", "Le fromage est cher", "Il pleut"], 0)
    ]),

    R("r-appart", "A1", "Mon appartement", "Dairem", "My flat", `
J'habite dans un appartement au troisième étage. Il y a un ascenseur, mais je prends souvent l'escalier : c'est bon pour la santé !

L'appartement n'est pas très grand. Il y a une chambre, un salon, une petite cuisine et une salle de bains. Dans le salon, il y a un canapé bleu, une table et beaucoup de plantes.

Ma pièce préférée, c'est la cuisine. Le matin, je prépare le thé et je regarde par la fenêtre. Le soir, je cuisine des plats turcs et je mange avec des amis.`, `
l'étage (m.)|kat|floor, storey
l'ascenseur (m.)|asansör|lift
l'escalier (m.)|merdiven|stairs
le salon|salon, oturma odası|living room
le canapé|kanepe|sofa
la pièce|oda|room`, [
      Q("À quel étage est l'appartement ?", ["Au premier", "Au deuxième", "Au troisième"], 2),
      Q("Pourquoi elle prend l'escalier ?", ["L'ascenseur est cassé", "C'est bon pour la santé", "Elle a peur"], 1),
      Q("Quelle est sa pièce préférée ?", ["La chambre", "La cuisine", "Le salon"], 1)
    ]),

    R("r-semaine", "A1", "Ma semaine", "Haftam", "My week", `
Le lundi et le mercredi, j'ai un cours de français de dix heures à midi. Le mardi, je vais à la piscine. Le jeudi, je fais les courses et je range la maison.

Le vendredi soir, je regarde un film français avec des sous-titres. Le samedi, je vois des amis. Le dimanche, je me repose : je lis, je dors et j'appelle ma famille en Turquie.

Ma semaine est assez calme. J'apprends un peu chaque jour, doucement.`, `
la piscine|yüzme havuzu|swimming pool
faire les courses|alışveriş yapmak|to do the shopping
ranger|toplamak, düzenlemek|to tidy up
les sous-titres|altyazı|subtitles
se reposer|dinlenmek|to rest
doucement|yavaş yavaş|gently, slowly`, [
      Q("Quand est le cours de français ?", ["Le lundi et le mercredi", "Le mardi et le jeudi", "Le samedi"], 0),
      Q("Qu'est-ce qu'elle fait le dimanche ?", ["Elle va à la piscine", "Elle se repose", "Elle travaille"], 1),
      Q("Le film du vendredi est…", ["sans sous-titres", "avec des sous-titres", "en turc"], 1)
    ]),

    R("r-medecin", "A2", "Chez le médecin", "Doktorda", "At the doctor's", `
Depuis trois jours, Esin a mal à la gorge et elle tousse beaucoup. Elle prend rendez-vous sur Internet avec un médecin généraliste.

Le médecin l'examine. « Vous avez de la fièvre ? » — « Un peu, hier soir : 38,2. » Le médecin regarde sa gorge et écoute ses poumons. « Ce n'est pas grave, c'est une angine virale. Pas besoin d'antibiotiques. Buvez beaucoup d'eau, reposez-vous, et prenez du paracétamol si vous avez mal. »

Il lui donne une ordonnance et un arrêt de travail de deux jours. Esin paie la consultation avec sa carte Vitale : l'Assurance maladie rembourse une grande partie du prix.`, `
avoir mal à la gorge|boğazı ağrımak|to have a sore throat
tousser|öksürmek|to cough
le médecin généraliste|pratisyen hekim|GP
la fièvre|ateş|fever
les poumons|akciğerler|lungs
l'ordonnance (f.)|reçete|prescription
l'arrêt de travail (m.)|iş göremez raporu|sick note
rembourser|geri ödemek|to reimburse`, [
      Q("Depuis quand Esin est malade ?", ["Une semaine", "Trois jours", "Un mois"], 1),
      Q("Qu'est-ce que le médecin dit ?", ["Il faut des antibiotiques", "Ce n'est pas grave", "Il faut aller à l'hôpital"], 1),
      Q("Qu'est-ce qu'il lui donne ?", ["Une ordonnance et un arrêt de travail", "Un vaccin", "Une radio"], 0),
      Q("Qui rembourse une partie du prix ?", ["La mairie", "L'Assurance maladie", "Le pharmacien"], 1)
    ]),

    R("r-handball", "A2", "Le match de handball", "Hentbol maçı", "The handball match", `
Samedi soir, Esin est allée voir un match de handball avec une amie. C'était un match de première division et la salle était pleine.

Au début, l'équipe locale a perdu beaucoup de ballons et, à la mi-temps, elle avait trois buts de retard. Mais en deuxième période, le gardien a fait des arrêts incroyables et les ailiers ont marqué des buts magnifiques. À la fin, l'équipe locale a gagné de deux buts.

Pendant le match, un joueur s'est blessé à la cheville. Esin a regardé le kiné de l'équipe : il a posé de la glace et un strapping. Elle s'est dit : « Un jour, ce sera moi. »`, `
la salle|spor salonu|arena, hall
la mi-temps|devre arası|half-time
le but|gol|goal
le gardien|kaleci|goalkeeper
l'arrêt (m.)|kurtarış|save
l'ailier (m.)|kanat oyuncusu|winger
se blesser|sakatlanmak|to get injured
la cheville|ayak bileği|ankle`, [
      Q("À la mi-temps, l'équipe locale…", ["gagnait", "perdait de trois buts", "était à égalité"], 1),
      Q("Qui a été très bon en deuxième période ?", ["Le gardien", "L'arbitre", "L'entraîneur"], 0),
      Q("Qu'est-ce que le kiné a fait ?", ["Un massage", "De la glace et un strapping", "Une piqûre"], 1),
      Q("Que pense Esin à la fin ?", ["Qu'elle veut jouer", "Qu'un jour elle sera kiné d'une équipe", "Que le match était ennuyeux"], 1)
    ]),

    R("r-prefecture", "A2", "Un rendez-vous à la préfecture", "Valilikte bir randevu", "An appointment at the préfecture", `
Pour renouveler son titre de séjour, Esin doit d'abord faire sa demande en ligne. Elle prépare tous les documents : passeport, justificatif de domicile de moins de trois mois, photos d'identité et attestation d'assurance maladie.

Quelques semaines plus tard, elle reçoit une convocation pour un rendez-vous. Elle arrive en avance, avec une copie de chaque document. À l'accueil, un agent vérifie son dossier. « Il manque une page de votre passeport », dit-il. Heureusement, Esin a l'original avec elle.

Après le rendez-vous, on lui donne un récépissé. Ce document prouve que sa demande est en cours. Esin respire : une étape de plus est terminée.`, `
renouveler|yenilemek|to renew
le titre de séjour|oturma izni|residence permit
le justificatif de domicile|ikametgâh belgesi|proof of address
la convocation|çağrı yazısı|official appointment letter
en avance|erken|early
il manque…|… eksik|… is missing
le récépissé|alındı belgesi|receipt (proof of application)
en cours|devam eden, işlemde|in progress`, [
      Q("Comment commence la demande ?", ["Par téléphone", "En ligne", "Par la poste"], 1),
      Q("Le justificatif de domicile doit avoir…", ["moins de trois mois", "moins d'un an", "plus de six mois"], 0),
      Q("Quel est le problème au rendez-vous ?", ["Elle est en retard", "Il manque une page du passeport", "Elle n'a pas de photos"], 1),
      Q("À quoi sert le récépissé ?", ["À voyager partout", "À prouver que la demande est en cours", "À payer moins d'impôts"], 1)
    ]),

    R("r-recette", "A2", "La recette des lentilles", "Mercimek çorbası tarifi", "The lentil soup recipe", `
Ce soir, Esin prépare une soupe de lentilles corail pour ses voisins français. Ils ne connaissent pas la mercimek çorbası !

D'abord, elle coupe un oignon et une carotte en petits morceaux. Ensuite, elle les fait revenir dans un peu d'huile d'olive. Elle ajoute une cuillère de concentré de tomate, puis les lentilles et un litre et demi d'eau. Elle laisse cuire vingt-cinq minutes.

À la fin, elle mixe la soupe et ajoute du cumin, du piment et un peu de citron. Les voisins adorent. « Tu nous donnes la recette ? » demandent-ils. Esin l'écrit en français, sans dictionnaire.`, `
les lentilles corail|kırmızı mercimek|red lentils
le voisin / la voisine|komşu|neighbour
couper|kesmek, doğramak|to cut
faire revenir|kavurmak|to sauté
ajouter|eklemek|to add
cuire|pişirmek|to cook
le piment|pul biber|chilli`, [
      Q("Pour qui elle cuisine ?", ["Pour ses voisins", "Pour sa famille", "Pour un restaurant"], 0),
      Q("Combien de temps la soupe cuit ?", ["Dix minutes", "Vingt-cinq minutes", "Une heure"], 1),
      Q("Qu'est-ce qu'elle ajoute à la fin ?", ["Du sucre", "Du cumin, du piment et du citron", "De la crème"], 1)
    ]),

    R("r-seance", "B1", "Une séance de rééducation", "Bir rehabilitasyon seansı", "A rehab session", `
Thomas, 24 ans, s'est fait une entorse de la cheville en jouant au handball il y a trois semaines. Son médecin lui a prescrit dix séances de kinésithérapie.

Au début de la séance, la kiné lui pose quelques questions : « Comment va la douleur cette semaine, de 0 à 10 ? Est-ce que la cheville gonfle encore le soir ? » Thomas répond que la douleur est à 3 et que le gonflement a beaucoup diminué.

Ensuite, ils passent aux exercices. Thomas travaille d'abord l'amplitude articulaire, puis le renforcement des muscles autour de la cheville avec un élastique. Pour finir, il fait des exercices de proprioception sur un plateau instable, les yeux ouverts puis fermés. « C'est le plus important pour éviter une nouvelle entorse », explique la kiné.

Avant de partir, elle lui donne trois exercices à faire chez lui tous les jours. « Si vous les faites sérieusement, vous pourrez reprendre l'entraînement dans deux semaines. »`, `
l'entorse (f.)|burkulma|sprain
prescrire|reçete etmek|to prescribe
gonfler / le gonflement|şişmek / şişlik|to swell / swelling
diminuer|azalmak|to decrease
l'amplitude articulaire|eklem hareket açıklığı|range of motion
le renforcement|güçlendirme|strengthening
le plateau instable|denge tahtası|wobble board
reprendre l'entraînement|antrenmana dönmek|to return to training`, [
      Q("Pourquoi Thomas vient chez la kiné ?", ["Pour une entorse de la cheville", "Pour un mal de dos", "Pour une fracture du bras"], 0),
      Q("Comment va le gonflement ?", ["Il a augmenté", "Il a beaucoup diminué", "Il n'a pas changé"], 1),
      Q("Selon la kiné, quel exercice est le plus important pour éviter une récidive ?", ["Les étirements", "La proprioception", "La course"], 1),
      Q("Quand pourra-t-il reprendre l'entraînement ?", ["Demain", "Dans deux semaines", "Dans six mois"], 1)
    ]),

    R("r-entretien", "B1", "L'entretien d'embauche", "İş görüşmesi", "The job interview", `
Esin a postulé pour un poste d'assistante dans un centre de rééducation. Elle a été convoquée à un entretien.

La directrice commence : « Parlez-moi de votre parcours. » Esin explique qu'elle est diplômée en physiothérapie en Turquie, qu'elle a travaillé plusieurs années avec des équipes de handball de haut niveau et qu'elle est en train de faire reconnaître son diplôme en France.

« Pourquoi voulez-vous travailler chez nous ? » Esin répond qu'elle connaît bien les blessures sportives, qu'elle aime le travail en équipe et qu'elle veut progresser en français dans un environnement professionnel.

À la fin, la directrice demande : « Avez-vous des questions ? » Esin en a préparé deux : sur l'organisation des journées et sur les possibilités de formation. La directrice sourit : « Nous vous rappellerons la semaine prochaine. »`, `
postuler|başvurmak|to apply
le poste|pozisyon|job, position
être convoqué(e)|çağrılmak|to be invited (officially)
le parcours|kariyer yolu, geçmiş|background, path
diplômé(e) en…|… mezunu|graduated in…
faire reconnaître son diplôme|diplomasını tanıtmak|to get one's degree recognised
la formation|eğitim|training`, [
      Q("Pour quel poste Esin postule ?", ["Assistante dans un centre de rééducation", "Professeure de sport", "Infirmière"], 0),
      Q("Qu'est-ce qu'elle est en train de faire ?", ["Apprendre à conduire", "Faire reconnaître son diplôme", "Chercher un appartement"], 1),
      Q("Combien de questions a-t-elle préparées ?", ["Aucune", "Deux", "Cinq"], 1),
      Q("Quelle est la réponse finale de la directrice ?", ["Vous commencez lundi", "Nous vous rappellerons la semaine prochaine", "Le poste n'est plus libre"], 1)
    ]),

    R("r-staps", "B1", "Qu'est-ce que la licence STAPS ?", "STAPS lisansı nedir?", "What is the STAPS degree?", `
STAPS veut dire « Sciences et techniques des activités physiques et sportives ». C'est une licence de trois ans proposée par de nombreuses universités françaises.

En première année, les étudiants suivent des cours très variés : anatomie, physiologie, psychologie, sociologie du sport, histoire du sport… Ils pratiquent aussi plusieurs sports chaque semaine. Les cours magistraux ont lieu en amphithéâtre, devant des centaines d'étudiants, et les travaux dirigés en petits groupes.

À partir de la deuxième ou troisième année, les étudiants choisissent une spécialité, par exemple « entraînement sportif », « activité physique adaptée et santé » ou « éducation et motricité ».

Pour entrer en STAPS, il faut passer par la plateforme Parcoursup. Les candidats étrangers doivent souvent prouver un niveau de français B2. Le dossier compte beaucoup : notes, motivation, expérience sportive.`, `
la licence|lisans (3 yıl)|bachelor's degree
proposer|sunmak|to offer
le cours magistral|amfi dersi|lecture
les travaux dirigés (TD)|uygulama dersi|seminar, tutorial
la spécialité|uzmanlık alanı|specialisation
l'activité physique adaptée|uyarlanmış fiziksel aktivite|adapted physical activity
le dossier|başvuru dosyası|application file`, [
      Q("Combien d'années dure la licence STAPS ?", ["Deux", "Trois", "Cinq"], 1),
      Q("Où ont lieu les cours magistraux ?", ["En amphithéâtre", "Au gymnase", "En ligne seulement"], 0),
      Q("Par quelle plateforme faut-il passer ?", ["Doctolib", "Parcoursup", "France Travail"], 1),
      Q("Quel niveau de français est souvent demandé aux étrangers ?", ["A2", "B2", "C2"], 1)
    ]),

    R("r-sommeil", "B1", "Le sommeil des sportifs", "Sporcuların uykusu", "Athletes' sleep", `
On parle souvent d'entraînement et d'alimentation, mais on oublie parfois le sommeil. Pourtant, pour un sportif, bien dormir est essentiel.

Pendant le sommeil profond, le corps répare les muscles et produit des hormones utiles à la récupération. Le cerveau, lui, mémorise les gestes techniques appris pendant la journée. Plusieurs études montrent que les athlètes qui dorment moins de sept heures se blessent plus souvent.

Les spécialistes conseillent de se coucher à heure fixe, d'éviter les écrans une heure avant de dormir et de garder une chambre fraîche et sombre. Une courte sieste de vingt minutes peut aussi aider, surtout lors des journées avec deux entraînements.

Bien dormir, ce n'est pas de la paresse : c'est une partie de l'entraînement.`, `
le sommeil profond|derin uyku|deep sleep
réparer|onarmak|to repair
la récupération|toparlanma|recovery
le cerveau|beyin|brain
le geste technique|teknik hareket|technical movement
à heure fixe|sabit saatte|at a set time
la sieste|şekerleme, öğle uykusu|nap
la paresse|tembellik|laziness`, [
      Q("Que fait le corps pendant le sommeil profond ?", ["Il répare les muscles", "Il brûle seulement du sucre", "Rien de spécial"], 0),
      Q("Les athlètes qui dorment moins de sept heures…", ["courent plus vite", "se blessent plus souvent", "mangent moins"], 1),
      Q("Quel conseil n'est PAS dans le texte ?", ["Éviter les écrans le soir", "Boire un café avant de dormir", "Garder la chambre fraîche"], 1)
    ]),

    R("r-lca", "B2", "La rupture du ligament croisé : opérer ou non ?", "Ön çapraz bağ kopması: ameliyat mı, değil mi?", "ACL rupture: surgery or not?", `
La rupture du ligament croisé antérieur (LCA) est l'une des blessures les plus redoutées des sportifs, notamment dans les sports de pivot comme le handball, le football ou le basket. Pendant longtemps, la chirurgie de reconstruction a semblé être la seule option sérieuse.

Aujourd'hui, le débat est plus nuancé. Certaines études ont montré que, chez des patients peu sportifs ou pratiquant des activités sans pivot, une rééducation bien conduite pouvait donner des résultats comparables à ceux de l'opération. En revanche, pour un athlète qui souhaite reprendre un sport de pivot à haut niveau, la reconstruction reste généralement recommandée, car le genou risque de « lâcher » lors des changements de direction.

Dans tous les cas, la rééducation joue un rôle central. Elle dure souvent de neuf à douze mois avant un retour à la compétition, et le retour au jeu devrait s'appuyer sur des tests objectifs de force, de saut et de confiance plutôt que sur une simple date. Les programmes de prévention, qui associent renforcement, travail de réception de saut et proprioception, réduiraient d'ailleurs nettement le risque de rupture chez les jeunes joueuses.`, `
redouté(e)|korkulan|dreaded
le sport de pivot|pivot sporu (ani dönüşlü)|pivoting sport
nuancé(e)|nüanslı|nuanced
une rééducation bien conduite|iyi yürütülmüş rehabilitasyon|well-managed rehab
lâcher|boşalmak, çözülmek (diz)|to give way
s'appuyer sur|… dayanmak|to be based on
la réception de saut|sıçrama sonrası iniş|jump landing
nettement|belirgin şekilde|markedly`, [
      Q("Selon le texte, pour qui la rééducation seule peut suffire ?", ["Pour les athlètes de haut niveau en sport de pivot", "Pour des patients peu sportifs ou sans pivot", "Pour personne"], 1),
      Q("Pourquoi l'opération est recommandée aux sportifs de pivot ?", ["Parce que le genou risque de lâcher", "Parce qu'elle est moins chère", "Parce que la rééducation est interdite"], 0),
      Q("Sur quoi devrait s'appuyer le retour au jeu ?", ["Sur une date fixe", "Sur des tests objectifs", "Sur l'avis de l'entraîneur seulement"], 1),
      Q("Le conditionnel « réduiraient » montre que l'auteur…", ["est absolument certain", "rapporte une information avec prudence", "parle du passé"], 1)
    ]),

    R("r-ecrans", "B2", "Faut-il interdire les téléphones à l'école ?", "Okulda telefon yasaklanmalı mı?", "Should phones be banned at school?", `
Depuis plusieurs années, la question revient régulièrement dans le débat public : faut-il interdire les téléphones portables à l'école ? En France, leur usage est déjà interdit au collège pendant les cours et les récréations, et plusieurs établissements expérimentent une « pause numérique » totale.

Les partisans de l'interdiction avancent des arguments solides. Les écrans nuiraient à la concentration, favoriseraient le harcèlement et réduiraient les interactions entre élèves. Certains enseignants constatent que les récréations sont redevenues plus animées depuis que les téléphones restent dans les casiers.

Leurs opposants, eux, rappellent que le téléphone est aussi un outil : dictionnaire, calculatrice, appareil photo pour un projet. Selon eux, interdire ne suffit pas ; il faudrait plutôt apprendre aux jeunes à utiliser les écrans de manière raisonnée.

Au fond, les deux camps s'accordent sur un point : l'enjeu n'est pas l'objet lui-même, mais la place qu'on lui laisse dans nos vies.`, `
revenir dans le débat|tekrar gündeme gelmek|to come back into debate
l'établissement (m.)|okul, kurum|school, institution
le partisan|taraftar|supporter
nuire à|zarar vermek|to harm
le harcèlement|zorbalık, taciz|bullying, harassment
le casier|dolap (kilitli)|locker
de manière raisonnée|bilinçli şekilde|thoughtfully
l'enjeu (m.)|asıl mesele|what is at stake`, [
      Q("En France, au collège, le téléphone est…", ["autorisé partout", "déjà interdit pendant les cours et les récréations", "obligatoire"], 1),
      Q("Quel argument est celui des opposants ?", ["Le téléphone favorise le harcèlement", "Le téléphone est aussi un outil", "Les récréations sont plus animées"], 1),
      Q("Sur quoi les deux camps sont-ils d'accord ?", ["Il faut tout interdire", "L'enjeu est la place des écrans dans nos vies", "Le téléphone est inutile"], 1)
    ]),

    R("r-amphi", "B2", "Premier jour en amphi", "Amfide ilk gün", "First day in the lecture hall", `
Huit heures. L'amphithéâtre est déjà presque plein quand j'arrive. Trois cents étudiants, des ordinateurs ouverts partout, un bruit de fond qui s'arrête net quand la professeure de physiologie prend le micro.

Elle parle vite, très vite. Je comprends les mots, mais pas toujours les phrases entières. J'essaie de tout noter, puis je me souviens du conseil d'une amie : « Ne recopie pas tout. Note les idées principales, les mots-clés, et laisse de la place pour compléter après. » Alors je change de méthode : des flèches, des abréviations, des titres soulignés.

À la pause, ma voisine, une étudiante de Lyon, me propose de comparer nos notes. Il lui manque deux schémas que j'ai dessinés ; il me manque des dates qu'elle a notées. On échange nos numéros. Le soir, en relisant mes notes, je me rends compte que j'ai compris l'essentiel. Le premier jour n'était pas parfait, mais il était beaucoup moins effrayant que prévu.`, `
s'arrêter net|aniden durmak|to stop dead
le bruit de fond|arka plan gürültüsü|background noise
recopier|kopyalamak, aynen yazmak|to copy out
le mot-clé|anahtar kelime|keyword
la flèche|ok işareti|arrow
le schéma|şema|diagram
se rendre compte|fark etmek|to realise
effrayant(e)|korkutucu|frightening`, [
      Q("Quelle difficulté la narratrice rencontre-t-elle ?", ["La professeure parle trop vite", "Elle n'a pas d'ordinateur", "L'amphi est vide"], 0),
      Q("Quel est le conseil de son amie ?", ["Tout recopier mot à mot", "Noter les idées principales et les mots-clés", "Enregistrer le cours"], 1),
      Q("Que se passe-t-il à la pause ?", ["Elle rentre chez elle", "Elle compare ses notes avec sa voisine", "Elle parle à la professeure"], 1),
      Q("Comment juge-t-elle sa journée ?", ["Catastrophique", "Moins effrayante que prévu", "Parfaite"], 1)
    ]),

    R("r-sedentarite", "C1", "La sédentarité, un fléau silencieux", "Hareketsizlik: sessiz bir bela", "Sedentary living, a silent scourge", `
Il est désormais établi que l'inactivité physique figure parmi les principaux facteurs de risque de mortalité dans le monde. Mais un phénomène distinct, et longtemps sous-estimé, retient de plus en plus l'attention des chercheurs : la sédentarité, c'est-à-dire le temps passé assis ou allongé en état d'éveil, avec une dépense énergétique minimale.

La distinction n'est pas qu'un raffinement sémantique. On peut en effet être « actif », au sens où l'on atteint les recommandations de cent cinquante minutes d'activité modérée par semaine, tout en restant sédentaire neuf ou dix heures par jour devant un écran. Or plusieurs travaux suggèrent que les effets délétères d'une position assise prolongée ne seraient que partiellement compensés par une séance de sport quotidienne.

D'où l'intérêt croissant pour des stratégies qui ne visent pas seulement à « faire du sport », mais à rompre régulièrement la sédentarité : se lever toutes les demi-heures, privilégier les déplacements actifs, aménager des postes de travail permettant d'alterner positions assise et debout. Pour les professionnels de l'activité physique adaptée comme pour les kinésithérapeutes, l'enjeu est donc double : prescrire du mouvement, certes, mais aussi aider les patients à repenser l'organisation même de leurs journées.`, `
désormais|artık, bundan böyle|now, from now on
sous-estimé(e)|hafife alınmış|underestimated
en état d'éveil|uyanık hâlde|while awake
un raffinement sémantique|anlamsal bir incelik|a semantic nicety
délétère|zararlı|harmful
rompre|kırmak, bölmek|to break (up)
aménager|düzenlemek|to arrange, to fit out
certes|elbette, kuşkusuz|admittedly`, [
      Q("Selon le texte, la sédentarité désigne…", ["le manque de sport", "le temps passé assis ou allongé éveillé", "le sommeil"], 1),
      Q("Peut-on être actif et sédentaire à la fois ?", ["Non, c'est contradictoire", "Oui, selon l'auteur", "Le texte ne le dit pas"], 1),
      Q("Quelle stratégie est proposée ?", ["Faire plus de sport le week-end seulement", "Rompre régulièrement le temps assis", "Dormir davantage"], 1),
      Q("« L'enjeu est donc double » signifie que les professionnels doivent…", ["prescrire du mouvement ET repenser l'organisation des journées", "choisir entre sport et repos", "travailler deux fois plus"], 0)
    ]),

    R("r-langue", "C1", "Apprendre une langue à l'âge adulte", "Yetişkinlikte dil öğrenmek", "Learning a language as an adult", `
On entend souvent dire qu'après un certain âge, il serait trop tard pour apprendre une langue étrangère. Cette idée, aussi répandue que décourageante, mérite d'être nuancée.

Certes, les enfants exposés tôt à une langue en acquièrent plus facilement l'accent. Mais les adultes disposent d'atouts que l'on oublie volontiers : une meilleure capacité d'analyse, des stratégies d'apprentissage conscientes et, surtout, la possibilité de s'appuyer sur les langues qu'ils connaissent déjà. Une locutrice du turc qui maîtrise l'anglais, par exemple, reconnaîtra d'emblée des centaines de mots français, de « asansör » à « randevu ».

Les recherches sur l'acquisition des langues insistent par ailleurs sur des facteurs qui n'ont rien à voir avec l'âge : la quantité d'exposition, la régularité, la qualité des interactions et, peut-être plus encore, le rapport émotionnel à la langue. L'anxiété, en particulier, freine la prise de parole et, par ricochet, les progrès.

Autrement dit, la question n'est pas tant « suis-je trop âgée ? » que « comment rendre mon apprentissage régulier, riche et serein ? ». Une demi-heure par jour pendant deux ans vaut, à bien des égards, mieux qu'un stage intensif suivi d'un long silence.`, `
répandu(e)|yaygın|widespread
nuancer|nüanslandırmak|to qualify, to nuance
l'atout (m.)|avantaj, koz|asset
d'emblée|hemen, ilk anda|straight away
par ricochet|dolaylı olarak|indirectly, as a knock-on effect
serein(e)|huzurlu, sakin|serene, calm
à bien des égards|birçok açıdan|in many respects`, [
      Q("Quel avantage les enfants ont-ils selon le texte ?", ["Ils apprennent plus vite la grammaire", "Ils acquièrent plus facilement l'accent", "Ils n'ont aucun avantage"], 1),
      Q("Quel atout des adultes est cité ?", ["S'appuyer sur les langues déjà connues", "Avoir plus de temps libre", "Ne jamais être anxieux"], 0),
      Q("Quel facteur freine la prise de parole ?", ["La régularité", "L'anxiété", "L'exposition"], 1),
      Q("La conclusion de l'auteur est que…", ["un stage intensif vaut mieux", "la régularité sereine compte plus que l'âge", "il est trop tard après 30 ans"], 1)
    ]),

    R("r-handicap", "C1", "Le sport adapté, un levier d'inclusion", "Uyarlanmış spor: bir kapsayıcılık aracı", "Adapted sport, a lever for inclusion", `
Longtemps cantonné à la marge des politiques sportives, le sport adapté — destiné aux personnes en situation de handicap mental ou psychique — gagne en visibilité. Les grands événements internationaux y ont contribué, mais c'est surtout sur le terrain, dans les clubs et les établissements médico-sociaux, que se joue sa véritable progression.

Les bénéfices dépassent largement la condition physique. Les pratiquants y trouvent un cadre où l'on valorise les progrès plutôt que la performance brute, ce qui renforce l'estime de soi et favorise les liens sociaux. Pour les familles, voir un proche s'engager dans une compétition, porter un maillot, appartenir à une équipe, constitue souvent un tournant.

Encore faut-il que l'offre suive. Le manque d'éducateurs formés, la difficulté d'accès aux équipements et le coût des transports restent des obstacles majeurs. C'est là que les diplômés en STAPS, et notamment de la mention « activité physique adaptée et santé », ont un rôle à jouer : concevoir des séances accessibles, travailler avec les équipes soignantes et convaincre les clubs ordinaires d'ouvrir leurs portes.`, `
cantonné(e) à|… ile sınırlı kalmış|confined to
la marge|kenar, marj|the margins
se jouer|belirlenmek, gerçekleşmek|to be decided, to happen
la performance brute|salt performans|raw performance
l'estime de soi|özsaygı|self-esteem
un tournant|dönüm noktası|turning point
encore faut-il que…|yine de … gerekir|it still requires that…
concevoir|tasarlamak|to design`, [
      Q("Où se joue surtout la progression du sport adapté ?", ["Dans les grands événements", "Sur le terrain, dans les clubs et établissements", "À la télévision"], 1),
      Q("Quel bénéfice est mis en avant ?", ["Gagner de l'argent", "L'estime de soi et les liens sociaux", "La célébrité"], 1),
      Q("« Encore faut-il que l'offre suive » introduit…", ["des obstacles", "une conclusion positive", "un exemple de réussite"], 0),
      Q("Quel rôle pour les diplômés STAPS APA ?", ["Concevoir des séances accessibles et convaincre les clubs", "Construire des stades", "Organiser les Jeux olympiques"], 0)
    ])
  ];
})();
