/* Graded readings, A1 set 10 (body, health and sport): a bad cold and the pharmacist, a child's swimming lesson, sleeping well, table tennis on Wednesday evenings and a sprained ankle at the gym.
   Same format as data/readings.js: { id, level, t:{fr,tr,en}, text, gloss: [fr, tr, en][], qs: [{ q, o, a }] }. */
(function () {
  const G = s => s.trim().split("\n").map(l => l.split("|").map(x => x.trim()));
  const Q = (q, o, a) => ({ q, o, a });
  const R = (id, level, fr, tr, en, text, gloss, qs) => ({ id, level, t: { fr, tr, en }, text: text.trim(), gloss: G(gloss), qs });

  window.READINGS = window.READINGS || [];
  window.READINGS.push(
    R("r10-gros-rhume", "A1", "Un gros rhume", "Kötü bir nezle", "A bad cold", `
Nathalie a 38 ans. Elle est professeure de mathématiques dans un collège à Lille. Ce lundi matin, elle ne va pas bien. Elle a mal à la gorge, elle a le nez qui coule et elle tousse beaucoup. Elle n'a presque plus de voix.

Avant le travail, elle va à la pharmacie de son quartier. Le pharmacien, monsieur Garnier, est très gentil. Il lui pose des questions : « Vous avez de la fièvre ? Vous avez mal à la tête ? » Nathalie répond : « Non, pas de fièvre. Juste la gorge et le nez. »

Monsieur Garnier lui donne des pastilles pour la gorge et un sirop contre la toux. Il explique : « Prenez une pastille toutes les trois heures, et le sirop matin et soir. Buvez beaucoup d'eau et reposez-vous. Si vous avez de la fièvre pendant plus de trois jours, allez chez le médecin. » Nathalie paie neuf euros.

Au collège, Nathalie ne peut pas parler fort. Alors, elle écrit tout au tableau. Aujourd'hui, ses élèves sont très calmes et très gentils. Une élève lui dit : « Madame, c'est le meilleur cours de l'année ! »

Le soir, Nathalie boit un grand thé au miel et au citron. Elle se couche à 21 heures. Elle espère retrouver sa voix demain... Mais ses élèves, eux, espèrent une autre journée en silence !`, `
avoir mal à la gorge|boğazı ağrımak|to have a sore throat
avoir le nez qui coule|burnu akmak|to have a runny nose
tousser|öksürmek|to cough
la voix|ses|voice
le pharmacien / la pharmacienne|eczacı|pharmacist
la fièvre|ateş|fever, temperature
une pastille|pastil|lozenge
le sirop|şurup|syrup
la toux|öksürük|cough
se reposer|dinlenmek|to rest
le miel|bal|honey`, [
      Q("Quel est le métier de Nathalie ?", ["Pharmacienne", "Médecin dans un hôpital de Lille", "Professeure de mathématiques"], 2),
      Q("Est-ce que Nathalie a de la fièvre ?", ["Oui, beaucoup", "Non", "Un peu, le soir"], 1),
      Q("Qu'est-ce que le pharmacien lui donne ?", ["Des pastilles et un sirop", "Une crème et des vitamines", "Des lunettes et un bonnet"], 0),
      Q("Quand faut-il aller chez le médecin ?", ["Tout de suite, dès le premier jour de rhume", "Si la fièvre dure plus de trois jours", "Après une semaine sans voix"], 1),
      Q("Comment Nathalie fait-elle son cours ?", ["Elle parle très fort", "Elle montre un film", "Elle écrit tout au tableau"], 2),
      Q("Que boit Nathalie le soir ?", ["Un café", "Un thé au miel et au citron", "Un jus d'orange", "Un grand chocolat chaud avec de la crème"], 1)
    ]),

    R("r10-lecon-natation", "A1", "La leçon de natation de Tom", "Tom'un yüzme dersi", "Tom's swimming lesson", `
Tom a six ans. Il ne sait pas encore nager. Alors, tous les mercredis après-midi, il va à la piscine avec son papa, Julien. Il prend des leçons de natation avec un petit groupe de huit enfants.

Avant la leçon, Tom met son maillot de bain, son bonnet et ses lunettes de piscine. Il prend une douche avec son papa. Julien ne va pas dans l'eau : il regarde la leçon derrière une grande vitre, avec les autres parents.

La maître-nageuse s'appelle Inès. Elle est jeune, patiente et très drôle. Au début, les enfants jouent dans le petit bain. Ils mettent la tête sous l'eau et ils font des bulles. Ensuite, ils apprennent à flotter sur le dos avec une planche ou des frites en mousse.

Aujourd'hui, Tom a un peu peur. Inès lui dit : « Regarde-moi, Tom. Tu respires, tu restes calme et tu bouges les jambes. » Et... Tom nage trois mètres tout seul ! Derrière la vitre, Julien applaudit très fort.

Après la leçon, Tom a très faim. Il mange son goûter dans la voiture. Il est fatigué, mais très fier. Ce soir, il va téléphoner à sa grand-mère. Il va lui dire : « Mamie, je suis un poisson ! »`, `
nager|yüzmek|to swim
le maillot de bain|mayo|swimsuit
le bonnet (de bain)|bone|swimming cap
les lunettes de piscine (f.)|yüzücü gözlüğü|swimming goggles
la vitre|cam|glass, window pane
la maître-nageuse / le maître-nageur|yüzme hocası|swimming instructor, lifeguard
le petit bain|sığ havuz|shallow end
flotter|su üstünde durmak|to float
une planche|yüzme tahtası|kickboard
avoir peur|korkmak|to be scared
fier / fière|gururlu|proud
le goûter|ikindi atıştırmalığı|afternoon snack`, [
      Q("Quel âge a Tom ?", ["Quatre ans", "Six ans", "Huit ans"], 1),
      Q("Où est Julien pendant la leçon ?", ["Dans l'eau avec Tom", "Au café", "Derrière une vitre"], 2),
      Q("Qui est Inès ?", ["La maître-nageuse", "La maman de Tom", "Une autre élève"], 0),
      Q("Que font les enfants au début ?", ["Ils plongent dans le grand bain", "Ils jouent dans le petit bain", "Ils font une course", "Ils mangent leur goûter"], 1),
      Q("Combien de mètres Tom nage-t-il tout seul ?", ["Dix mètres", "Un mètre", "Trois mètres"], 2),
      Q("À qui Tom va-t-il téléphoner ce soir ?", ["À sa grand-mère", "À Inès", "À son copain"], 0)
    ]),

    R("r10-bien-dormir", "A1", "Bien dormir", "İyi uyumak", "Sleeping well", `
Camille a 24 ans. Elle est vendeuse dans un magasin de vêtements à Bordeaux. Depuis un mois, elle dort mal. Le soir, elle se couche à minuit, mais elle ne dort pas. Le matin, elle est très fatiguée et elle bâille toute la journée au travail.

Un jour, elle parle de son problème à sa collègue, Amandine. Amandine lui pose des questions : « Tu bois du café l'après-midi ? Tu regardes ton téléphone au lit ? » Camille rit : « Oui et oui ! Je bois un café à cinq heures, et je regarde des vidéos jusqu'à une heure du matin. »

Amandine lui donne des conseils simples. Pas de café après midi. Pas de téléphone dans la chambre. Un dîner léger, pas trop tard. Et un peu de sport dans la journée, par exemple trente minutes de marche. Elle ajoute : « Couche-toi et lève-toi toujours à la même heure, même le week-end. »

Camille essaie. Elle achète un petit réveil pour remplacer son téléphone. Le soir, elle lit un livre au lit et elle boit une tisane. Après trois pages, ses yeux se ferment tout seuls !

Maintenant, Camille dort huit heures par nuit. Elle a plus d'énergie et elle est de bonne humeur. Il y a juste un petit problème : le dimanche matin, elle se réveille à sept heures... sans réveil !`, `
dormir mal|kötü uyumak|to sleep badly
se coucher|yatmak|to go to bed
fatigué / fatiguée|yorgun|tired
bâiller|esnemek|to yawn
un conseil|tavsiye|piece of advice
léger / légère|hafif|light
se lever|kalkmak|to get up
un réveil|çalar saat|alarm clock
une tisane|bitki çayı|herbal tea
se réveiller|uyanmak|to wake up
être de bonne humeur|keyfi yerinde olmak|to be in a good mood`, [
      Q("Quel est le problème de Camille ?", ["Elle a mal au dos", "Elle dort mal", "Elle n'a pas de travail"], 1),
      Q("À quelle heure Camille boit-elle un café ?", ["À cinq heures de l'après-midi", "À midi", "À huit heures du matin, avant le travail"], 0),
      Q("Selon Amandine, où ne faut-il pas avoir son téléphone ?", ["Dans la cuisine", "Au travail", "Dans la chambre"], 2),
      Q("Qu'est-ce que Camille achète ?", ["Un nouveau lit", "Un petit réveil", "Un nouveau téléphone portable"], 1),
      Q("Que fait Camille le soir maintenant ?", ["Elle regarde des séries sur son téléphone", "Elle va au restaurant", "Elle travaille tard", "Elle lit et boit une tisane"], 3),
      Q("Combien d'heures Camille dort-elle maintenant ?", ["Huit heures", "Six heures", "Dix heures"], 0)
    ]),

    R("r10-ping-pong", "A1", "Le ping-pong du mercredi soir", "Çarşamba akşamı masa tenisi", "Wednesday evening table tennis", `
Yasmine a 16 ans. Elle est lycéenne à Rennes. Elle aime le sport, mais pas les sports d'équipe. Cette année, elle s'inscrit dans un club de tennis de table, près de chez elle. L'entraînement est le mercredi soir, de 18 heures à 20 heures.

Dans le club, il y a des joueurs de tous les âges : des enfants, des étudiants, des parents et des retraités. Pour jouer, on a besoin d'une raquette, d'une balle et de chaussures de sport. Le club prête des raquettes aux débutants.

Le premier soir, l'entraîneur, Malik, met Yasmine avec Gérard. Gérard a 78 ans, des cheveux blancs et un grand sourire. Yasmine pense : « Super, c'est facile ! » Mais Gérard joue au ping-pong depuis cinquante ans. Il gagne le match 11 à 2 !

Yasmine rit. Gérard est un très bon professeur. Il lui montre comment tenir la raquette et comment servir. « Regarde toujours la balle et plie un peu les genoux », dit-il.

Maintenant, Yasmine et Gérard jouent ensemble chaque mercredi. Elle fait des progrès : aujourd'hui, elle marque cinq points contre lui. Son objectif pour juin ? Gagner un match contre Gérard. Lui, il répond en riant : « Pas avant mes cent ans ! »`, `
s'inscrire|kaydolmak|to sign up
le tennis de table|masa tenisi|table tennis
l'entraînement (m.)|antrenman|training session
un retraité / une retraitée|emekli|retired person
la raquette|raket|bat, racket
prêter|ödünç vermek|to lend
un débutant / une débutante|yeni başlayan|beginner
l'entraîneur / l'entraîneuse|antrenör|coach
gagner|kazanmak|to win
servir|servis atmak|to serve
plier les genoux|dizleri bükmek|to bend your knees
marquer un point|sayı almak|to score a point`, [
      Q("Quand est l'entraînement ?", ["Le mercredi soir", "Le samedi matin", "Le lundi, à l'heure du déjeuner"], 0),
      Q("Qu'est-ce que le club prête aux débutants ?", ["Des chaussures", "Des raquettes", "Des maillots"], 1),
      Q("Quel âge a Gérard ?", ["68 ans", "87 ans", "78 ans"], 2),
      Q("Quel est le score du premier match ?", ["11 à 2 pour Yasmine", "11 à 2 pour Gérard", "11 à 9 pour Gérard"], 1),
      Q("Quel conseil Gérard donne-t-il ?", ["Jouer très fort", "Parler beaucoup pendant le match", "Regarder toujours la balle", "Fermer les yeux"], 2),
      Q("Quel est l'objectif de Yasmine pour juin ?", ["Gagner un match contre Gérard", "Devenir entraîneuse des enfants du club", "Changer de club"], 0)
    ]),

    R("r10-entorse-step", "A1", "Une entorse au cours de step", "Step dersinde burkulma", "A sprain in step class", `
Je m'appelle Esin. Je suis turque et je travaille à l'accueil d'une salle de sport, en France. Mardi soir, il y a un cours de step. Tout à coup, j'entends un cri. Une cliente, Chloé, est par terre. Elle a mal à la cheville.

Je vais vite la voir. Je suis kiné, mais en France, mon diplôme n'est pas encore reconnu. Je connais bien les entorses. Je regarde sa cheville : elle est un peu gonflée, mais Chloé peut bouger les orteils. Je lui dis : « Ne vous inquiétez pas. On va mettre de la glace. »

Sophie, ma responsable, apporte un sac de glace et une chaise. Chloé s'assoit et elle met sa jambe en hauteur, sur la chaise. Je mets la glace sur sa cheville, dans une serviette, pendant vingt minutes. J'explique : « Ce soir, du repos, de la glace et la jambe en haut. Demain, si vous avez encore très mal, allez chez le médecin. »

Le mari de Chloé arrive en voiture. Chloé me dit merci. Elle sourit : « Le step, c'est fini pour moi... cette semaine ! »

Vendredi, Chloé revient à la salle avec une boîte de chocolats. Sa cheville va mieux : c'est une petite entorse. Sophie me dit : « Esin, tu es la meilleure ! » Je suis très contente. Le français, c'est difficile, mais j'adore aider les gens.`, `
tout à coup|aniden|suddenly
un cri|çığlık|scream, cry
par terre|yerde|on the floor
la cheville|ayak bileği|ankle
une entorse|burkulma|sprain
gonflé / gonflée|şişmiş|swollen
s'inquiéter|endişelenmek|to worry
la glace|buz|ice
en hauteur|yukarıda|raised up
une serviette|havlu|towel
le repos|dinlenme|rest
le / la responsable|müdür, sorumlu|manager`, [
      Q("Où travaille Esin ?", ["Dans un hôpital", "À l'accueil d'une salle de sport", "Dans un cabinet de kiné en centre-ville"], 1),
      Q("Pendant quel cours Chloé a-t-elle mal ?", ["Le cours de yoga", "Le cours de natation", "Le cours de step"], 2),
      Q("Qu'est-ce qu'Esin met sur la cheville ?", ["De la glace dans une serviette", "Une crème chauffante et un bandage", "Un pansement"], 0),
      Q("Pendant combien de temps met-elle la glace ?", ["Cinq minutes", "Vingt minutes", "Une heure"], 1),
      Q("Que fait Chloé vendredi ?", ["Elle reprend le step", "Elle va à l'hôpital", "Elle apporte des chocolats", "Elle téléphone à Sophie"], 2)
    ])
  );
})();
