/* Graded readings, A1 set 3: the gym front desk, running, swimming, a picnic, a cat, crêpes, a birthday, yoga, phones and the weather.
   Same format as data/readings.js: { id, level, t:{fr,tr,en}, text, gloss: [fr, tr, en][], qs: [{ q, o, a }] }. */
(function () {
  const G = s => s.trim().split("\n").map(l => l.split("|").map(x => x.trim()));
  const Q = (q, o, a) => ({ q, o, a });
  const R = (id, level, fr, tr, en, text, gloss, qs) => ({ id, level, t: { fr, tr, en }, text: text.trim(), gloss: G(gloss), qs });

  window.READINGS = window.READINGS || [];
  window.READINGS.push(
    R("r-accueil-salle", "A1", "Une journée à l'accueil", "Resepsiyonda bir gün", "A day at the front desk", `
Esin travaille à l'accueil d'une salle de sport. Elle commence à 7 heures. Elle ouvre la porte, elle allume l'ordinateur et elle prépare un café.

À 7 h 30, les premiers clients arrivent. Ils disent « Bonjour Esin ! » et ils montrent leur carte. Esin sourit et répond : « Bonjour, bonne séance ! »

Le matin, le téléphone sonne souvent. Les gens posent des questions : « Quels sont les horaires ? », « Combien coûte l'abonnement ? » Esin répond lentement. Son français n'est pas parfait, mais les clients sont gentils.

À midi, Esin mange une salade avec Karim, le coach. Il parle des exercices et des muscles. Esin adore ça : elle a un diplôme turc de kiné.

L'après-midi, elle range les serviettes et elle inscrit deux nouveaux clients. À 15 heures, elle rentre à la maison. Elle est fatiguée, mais contente.`, `
l'accueil (m.)|resepsiyon, danışma|front desk, reception
allumer|açmak (cihaz)|to switch on
le client / la cliente|müşteri|customer
la séance|seans, antrenman|session, workout
sonner|çalmak (telefon)|to ring
les horaires (m.)|çalışma saatleri|opening hours
l'abonnement (m.)|üyelik, abonelik|membership
ranger|toplamak, yerine koymak|to tidy, to put away
la serviette|havlu|towel`, [
      Q("À quelle heure Esin commence-t-elle ?", ["À 6 heures", "À 7 heures", "À 8 heures"], 1),
      Q("Que disent les clients le matin ?", ["« Bonjour Esin ! »", "« Au revoir ! »", "« Merci beaucoup ! »"], 0),
      Q("Au téléphone, les gens posent des questions…", ["sur la météo et le train", "sur les cours de français", "sur les horaires et les prix"], 2),
      Q("Avec qui Esin mange-t-elle à midi ?", ["Avec son mari", "Avec Karim, le coach", "Avec une cliente"], 1),
      Q("Comment est Esin à 15 heures ?", ["Fatiguée mais contente", "Triste et en colère", "Malade et stressée"], 0)
    ]),

    R("r-courir-parc", "A1", "Je cours au parc", "Parkta koşuyorum", "I run in the park", `
Je m'appelle Thomas. J'ai 35 ans et je suis professeur. Trois fois par semaine, je cours au parc, avant le travail.

Je me lève à 6 h 30. Je bois un grand verre d'eau, je mets mes baskets et je pars. Le parc est à cinq minutes de chez moi. Le matin, il est calme et l'air est frais.

Je cours pendant quarante minutes, environ six kilomètres. Je ne cours pas vite : je préfère courir doucement et bien respirer. Quand il pleut, je cours quand même ! J'aime le bruit de la pluie.

Après, je fais des étirements près du lac. Je regarde les canards. Ensuite, je rentre, je prends une douche et je mange du pain avec du fromage blanc et une banane.

Courir, c'est mon moment à moi. Je commence la journée de bonne humeur.`, `
courir|koşmak|to run
trois fois par semaine|haftada üç kez|three times a week
les baskets (f.)|spor ayakkabısı|trainers, sneakers
frais / fraîche|serin|cool, fresh
doucement|yavaşça, yavaş yavaş|slowly, gently
quand même|yine de|anyway, all the same
les étirements (m.)|esneme hareketleri|stretches
le canard|ördek|duck
de bonne humeur|keyifli, neşeli|in a good mood`, [
      Q("Quel est le métier de Thomas ?", ["Médecin", "Coach sportif", "Professeur"], 2),
      Q("Quand Thomas court-il ?", ["Le matin, avant le travail", "Le soir, après le travail", "Le dimanche, avec sa femme"], 0),
      Q("Combien de temps court-il ?", ["Vingt minutes", "Quarante minutes", "Une heure et demie"], 1),
      Q("Que fait Thomas quand il pleut ?", ["Il reste au lit", "Il va à la salle de sport", "Il court quand même"], 2),
      Q("Qu'est-ce qu'il fait près du lac ?", ["Il nage dans le lac", "Il fait des étirements", "Il mange un sandwich"], 1)
    ]),

    R("r-piscine-municipale", "A1", "À la piscine municipale", "Belediye yüzme havuzunda", "At the public swimming pool", `
Léa a 28 ans. Elle travaille dans un bureau et elle a souvent mal au dos. Son médecin dit : « La natation, c'est très bien pour le dos ! » Alors, le mercredi soir, Léa va à la piscine municipale.

L'entrée coûte 3,50 €. Ce n'est pas cher. Dans le vestiaire, Léa met son maillot de bain, son bonnet et ses lunettes de natation. En France, le bonnet est obligatoire dans beaucoup de piscines. Avant d'entrer dans l'eau, elle prend une douche.

Dans la piscine, il y a des lignes d'eau pour les nageurs lents et des lignes pour les nageurs rapides. Léa nage dans une ligne lente. Elle fait vingt longueurs : dix en brasse et dix en crawl.

Après la piscine, Léa est détendue. Elle n'a plus mal au dos et elle dort très bien.`, `
la natation|yüzme (spor)|swimming
avoir mal au dos|sırtı ağrımak|to have backache
le vestiaire|soyunma odası|changing room
le maillot de bain|mayo|swimsuit
le bonnet|bone|swimming cap
obligatoire|zorunlu|compulsory
la ligne d'eau|kulvar|lane
la longueur|havuz boyu|length (of the pool)
la brasse|kurbağalama|breaststroke`, [
      Q("Pourquoi Léa va-t-elle à la piscine ?", ["Pour son dos", "Pour voir ses amis", "Pour apprendre à plonger"], 0),
      Q("Combien coûte l'entrée ?", ["2,50 €", "5 €", "3,50 €"], 2),
      Q("Qu'est-ce qui est obligatoire dans beaucoup de piscines ?", ["Les lunettes", "Le bonnet", "Les palmes"], 1),
      Q("Combien de longueurs fait Léa ?", ["Vingt", "Dix", "Trente"], 0),
      Q("Comment est Léa après la piscine ?", ["Fatiguée", "Stressée", "Détendue"], 2)
    ]),

    R("r-pique-nique", "A1", "Un pique-nique entre amis", "Arkadaşlarla piknik", "A picnic with friends", `
Samedi, il fait beau. Hugo envoie un message à ses amis : « Pique-nique au parc à midi ? Chacun apporte quelque chose ! » Tout le monde répond oui.

Hugo apporte une grande couverture et des boissons : de l'eau, du jus de pomme et de la limonade. Sarah prépare une salade de pâtes. Mehdi achète deux baguettes, du fromage et des tomates. Clara fait un gâteau au chocolat.

Les amis s'installent sous un grand arbre. Ils mangent, ils parlent et ils rient. Après le repas, ils jouent au frisbee et aux cartes.

À 17 heures, le ciel devient gris. Oh non, il pleut ! Les amis rangent tout très vite et ils courent au café d'en face. Ils finissent l'après-midi avec un chocolat chaud. Hugo dit : « Le prochain pique-nique, c'est dans mon salon ! »`, `
le pique-nique|piknik|picnic
chacun|herkes, her biri|everyone, each person
apporter|getirmek|to bring
la couverture|battaniye, örtü|blanket
s'installer|yerleşmek, oturmak|to settle down
l'arbre (m.)|ağaç|tree
rire|gülmek|to laugh
le ciel|gökyüzü|sky
d'en face|karşıdaki|opposite, across the street`, [
      Q("Qui organise le pique-nique ?", ["Sarah", "Hugo", "Clara"], 1),
      Q("Qu'est-ce que Clara apporte ?", ["Une salade de pâtes", "Des boissons", "Un gâteau au chocolat"], 2),
      Q("Où s'installent les amis ?", ["Sous un grand arbre", "Près de la rivière", "Dans un café"], 0),
      Q("Que se passe-t-il à 17 heures ?", ["Il fait très chaud", "Il pleut", "Le parc ferme"], 1),
      Q("Où vont les amis après ?", ["Au café d'en face", "Chez les parents d'Hugo", "Au cinéma du quartier"], 0)
    ]),

    R("r-chat-milo", "A1", "Mon chat Milo", "Kedim Milo", "My cat Milo", `
Bonjour ! Je m'appelle Anaïs et j'habite à Toulouse avec mon chat, Milo. Il a quatre ans. Il est gris et blanc, avec de grands yeux verts.

Milo est très paresseux. Il dort environ seize heures par jour ! Il aime dormir sur le canapé, au soleil, ou sur mon ordinateur quand je travaille. C'est drôle, mais ce n'est pas pratique.

Le matin, à 6 heures, Milo a faim. Il miaule devant ma porte. Je me lève et je lui donne des croquettes. Le soir, il mange un peu de pâtée. Il adore aussi jouer avec une petite balle rouge.

Milo n'aime pas l'eau et il déteste le vétérinaire. Mais il est très câlin. Quand je suis triste, il vient sur mes genoux et il ronronne. C'est mon meilleur ami !`, `
paresseux / paresseuse|tembel|lazy
le canapé|kanepe|sofa
miauler|miyavlamak|to meow
les croquettes (f.)|kuru mama|dry pet food
la pâtée|yaş mama|wet pet food
le vétérinaire|veteriner|vet
câlin / câline|sevgi dolu, sokulgan|cuddly
les genoux (m.)|dizler, kucak|knees, lap
ronronner|mırlamak|to purr`, [
      Q("De quelle couleur est Milo ?", ["Noir et roux", "Tout blanc", "Gris et blanc"], 2),
      Q("Combien d'heures Milo dort-il par jour ?", ["Environ huit heures", "Environ seize heures", "Environ vingt heures"], 1),
      Q("Que fait Milo à 6 heures du matin ?", ["Il miaule devant la porte", "Il dort sur le canapé", "Il joue avec sa balle"], 0),
      Q("Qu'est-ce que Milo déteste ?", ["Les croquettes", "Le soleil", "Le vétérinaire"], 2),
      Q("Que fait Milo quand Anaïs est triste ?", ["Il part dans le jardin", "Il vient sur ses genoux", "Il mange sa pâtée"], 1)
    ]),

    R("r-crepes-mamie", "A1", "Les crêpes de Mamie", "Büyükannenin krepleri", "Grandma's crêpes", `
Le dimanche, Lucas, huit ans, fait des crêpes avec sa grand-mère. En France, on mange des crêpes au goûter ou au dessert. Et le 2 février, c'est la Chandeleur : la fête des crêpes !

Pour faire environ quinze crêpes, il faut : 250 grammes de farine, trois œufs, un demi-litre de lait, une pincée de sel et un peu de beurre.

D'abord, Lucas met la farine dans un grand saladier. Il ajoute les œufs et il mélange. Ensuite, il verse le lait petit à petit. La pâte doit être lisse, sans grumeaux. Elle repose une heure.

Mamie fait chauffer la poêle avec un peu de beurre. Elle verse une louche de pâte. Après une minute, Lucas fait sauter la crêpe… et elle tombe par terre ! Ils rient. La deuxième crêpe est parfaite. Lucas la mange avec du sucre et du citron. Miam !`, `
le goûter|ikindi atıştırmalığı|afternoon snack
la farine|un|flour
une pincée|bir tutam|a pinch
le saladier|büyük kase|large bowl
mélanger|karıştırmak|to mix
verser|dökmek|to pour
la pâte|hamur|batter, dough
la poêle|tava|frying pan
faire sauter|havaya atıp çevirmek|to flip (by tossing)`, [
      Q("Avec qui Lucas fait-il des crêpes ?", ["Avec sa grand-mère", "Avec son grand-père", "Avec sa petite sœur"], 0),
      Q("Qu'est-ce que la Chandeleur ?", ["Une fête de Noël", "La fête des crêpes", "Un gâteau au citron"], 1),
      Q("Combien d'œufs faut-il ?", ["Un œuf", "Deux œufs", "Trois œufs"], 2),
      Q("Combien de temps la pâte repose-t-elle ?", ["Une heure", "Dix minutes", "Une nuit"], 0),
      Q("Que se passe-t-il avec la première crêpe ?", ["Elle brûle", "Elle est parfaite", "Elle tombe par terre"], 2)
    ]),

    R("r-invitation-anniversaire", "A1", "Une invitation d'anniversaire", "Bir doğum günü daveti", "A birthday invitation", `
Salut Marco !

Le samedi 14 juin, c'est mon anniversaire : j'ai 30 ans ! Pour fêter ça, je fais une petite fête chez moi, au 12 rue des Lilas, à partir de 19 heures. Le code de la porte, c'est 4521B. J'habite au troisième étage.

S'il fait beau, nous allons manger sur la terrasse. Je prépare des pizzas et une grande salade. Tu peux apporter une boisson ou un dessert, si tu veux. Mais pas de cadeau, s'il te plaît ! Ta présence, c'est le plus beau cadeau.

Il y a aussi un petit thème : tout le monde porte quelque chose de jaune. C'est ma couleur préférée !

Tu peux me répondre avant le 10 juin ? Je dois savoir combien de personnes viennent.

À bientôt, j'espère !
Bises,
Chloé`, `
l'anniversaire (m.)|doğum günü|birthday
fêter|kutlamak|to celebrate
à partir de|-den itibaren|from
l'étage (m.)|kat|floor
apporter|getirmek|to bring
le cadeau|hediye|present, gift
porter|giymek, takmak|to wear
jaune|sarı|yellow
bises|öpücükler (samimi kapanış)|love, kisses (end of a message)`, [
      Q("Quel âge a Chloé le 14 juin ?", ["25 ans", "30 ans", "40 ans"], 1),
      Q("À quelle heure commence la fête ?", ["À 19 heures", "À 20 heures", "À 21 heures"], 0),
      Q("Qu'est-ce que Chloé ne veut pas ?", ["Des boissons", "Des desserts", "Des cadeaux"], 2),
      Q("Quelle couleur faut-il porter ?", ["Du rouge", "Du jaune", "Du bleu"], 1),
      Q("Marco doit répondre avant…", ["le 14 juin", "le 1er juin", "le 10 juin"], 2)
    ]),

    R("r-cours-yoga", "A1", "Le cours de yoga", "Yoga dersi", "The yoga class", `
Nathalie a 52 ans. Elle travaille beaucoup et elle est souvent stressée. Son amie Isabelle lui dit : « Viens au cours de yoga avec moi ! »

Le cours est le jeudi soir, de 18 h 30 à 19 h 30, dans une petite salle près de la mairie. Le premier cours est gratuit. Nathalie apporte un tapis, une bouteille d'eau et un pull.

Le professeur s'appelle Ravi. Il parle doucement. D'abord, on respire : on inspire par le nez et on expire lentement. Ensuite, on fait des postures, par exemple « le chien tête en bas » et « l'arbre ». Nathalie n'est pas très souple et elle perd l'équilibre. Ce n'est pas grave ! Ravi dit : « Ici, pas de compétition. »

À la fin, tout le monde est allongé sur le dos, les yeux fermés, pendant cinq minutes. Nathalie est très calme. Ce soir, elle va bien dormir. Elle va revenir la semaine prochaine.`, `
gratuit / gratuite|ücretsiz|free (of charge)
le tapis|mat|mat
respirer|nefes almak|to breathe
inspirer / expirer|nefes almak / nefes vermek|to breathe in / to breathe out
la posture|duruş, poz|pose, posture
souple|esnek|flexible
perdre l'équilibre|dengesini kaybetmek|to lose your balance
ce n'est pas grave|önemli değil|it doesn't matter
allongé / allongée|uzanmış|lying down`, [
      Q("Pourquoi Nathalie va-t-elle au cours de yoga ?", ["Elle veut perdre du poids", "Elle a mal au genou", "Elle est souvent stressée"], 2),
      Q("Combien coûte le premier cours ?", ["Il coûte 5 €", "Il est gratuit", "Il coûte 10 €"], 1),
      Q("Comment parle Ravi ?", ["Doucement", "Très fort", "Très vite"], 0),
      Q("Quel est le problème de Nathalie ?", ["Elle arrive en retard", "Elle perd l'équilibre", "Elle oublie son tapis"], 1),
      Q("Qu'est-ce que Nathalie va faire la semaine prochaine ?", ["Revenir au cours", "Arrêter le yoga", "Aller à la piscine"], 0)
    ]),

    R("r-telephone-applis", "A1", "Mon téléphone et mes applis", "Telefonum ve uygulamalarım", "My phone and my apps", `
Je m'appelle Kenji. Je suis japonais et je fais mes études à Bordeaux. Mon téléphone est très important pour moi. Je le regarde peut-être cent fois par jour !

Le matin, mon réveil sonne sur mon téléphone. Je regarde la météo et je lis les messages de ma famille au Japon. Avec le décalage horaire, ils écrivent pendant ma nuit.

Pour aller à l'université, j'utilise l'appli du tram. J'achète mon ticket sur mon téléphone. Pour apprendre le français, j'ai une appli avec des petits jeux. Je fais dix minutes tous les jours, dans le tram.

Le soir, j'appelle mes parents en vidéo. Je regarde aussi des séries et j'écoute de la musique. Mais à 22 heures, j'active le mode « Ne pas déranger » et je pose mon téléphone dans la cuisine. Pour bien dormir, pas d'écran au lit !`, `
le réveil|çalar saat|alarm clock
le décalage horaire|saat farkı|time difference
l'appli (f.)|uygulama|app
utiliser|kullanmak|to use
tous les jours|her gün|every day
appeler en vidéo|görüntülü aramak|to video call
ne pas déranger|rahatsız etmeyin|do not disturb
poser|koymak, bırakmak|to put down
l'écran (m.)|ekran|screen`, [
      Q("Où Kenji fait-il ses études ?", ["À Bordeaux", "À Tokyo", "À Marseille"], 0),
      Q("Pourquoi sa famille écrit-elle pendant sa nuit ?", ["Ils travaillent la nuit", "Ils ne dorment pas", "C'est le décalage horaire"], 2),
      Q("Quand Kenji utilise-t-il son appli de français ?", ["Au lit", "Dans le tram", "Au restaurant"], 1),
      Q("Qui Kenji appelle-t-il le soir ?", ["Ses amis français", "Son professeur", "Ses parents"], 2),
      Q("Où met-il son téléphone à 22 heures ?", ["Sous son oreiller", "Dans la cuisine", "Dans son sac"], 1)
    ]),

    R("r-meteo-semaine", "A1", "La météo de la semaine", "Haftanın hava durumu", "The weather this week", `
Bonjour à tous ! Voici la météo de la semaine pour la région de Lille.

Lundi et mardi, il va pleuvoir toute la journée. Il va faire frais : 12 degrés seulement. N'oubliez pas votre parapluie ! Mercredi, il va y avoir beaucoup de vent sur la côte, mais il ne va pas pleuvoir.

Jeudi, le soleil revient enfin ! Le matin, il va y avoir un peu de brouillard, mais l'après-midi, le ciel va être bleu. Les températures montent : 18 degrés.

Vendredi et samedi, il va faire beau et chaud, jusqu'à 23 degrés. C'est parfait pour une promenade ou un pique-nique. Dimanche, attention : il va y avoir des orages le soir.

Bonne semaine à tous, et à demain !`, `
la météo|hava durumu|weather forecast
pleuvoir|yağmur yağmak|to rain
il fait frais|hava serin|it's cool
le parapluie|şemsiye|umbrella
le vent|rüzgâr|wind
la côte|sahil, kıyı|coast
le brouillard|sis|fog
monter|yükselmek, çıkmak|to go up, to rise
l'orage (m.)|gök gürültülü fırtına|thunderstorm`, [
      Q("Quel temps va-t-il faire lundi ?", ["Il va faire beau", "Il va pleuvoir", "Il va neiger"], 1),
      Q("Qu'est-ce qu'il faut prendre lundi ?", ["Un parapluie", "Des lunettes de soleil", "Un maillot de bain"], 0),
      Q("Quand le soleil revient-il ?", ["Mardi", "Mercredi", "Jeudi"], 2),
      Q("Quelle température va-t-il faire vendredi et samedi ?", ["Jusqu'à 23 degrés", "Jusqu'à 12 degrés", "Jusqu'à 30 degrés"], 0),
      Q("Qu'est-ce qu'il va y avoir dimanche soir ?", ["De la neige", "Des orages", "Du brouillard"], 1)
    ])
  );
})();
