/* DELF A2 — production orale (entretien dirigé, monologue suivi, exercice en interaction), sujets 11–20 */
(window.DELF = window.DELF || []).push(
  /* ---------- Sujet 11 ---------- */
  { id: "a2-s11-po1", level: "A2", sujet: 11, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Ma ville d'origine",
    consigne: "Entretien dirigé (1 minute 30 environ). Vous vous présentez et vous répondez aux questions de l'examinateur sur votre vie, vos activités, votre passé et vos projets.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1,5 dakika). Kendinizi tanıtın ve sınav görevlisinin hayatınız, etkinlikleriniz, geçmişiniz ve planlarınız hakkındaki sorularını cevaplayın.",
      en: "Guided interview (about 1.5 minutes). Introduce yourself and answer the examiner's questions about your life, activities, past and plans."
    },
    prompts: [
      { q: "Bonjour. Pouvez-vous vous présenter ?", m: "Bonjour, je m'appelle Esin. Je suis turque et j'habite en France depuis quelques mois." },
      { q: "D'où venez-vous exactement ?", m: "Je viens d'une ville au bord de la mer, dans l'ouest de la Turquie." },
      { q: "Comment est votre ville ?", m: "C'est une ville assez grande et très animée. Il y a un port et beaucoup de cafés." },
      { q: "Qu'est-ce que vous faisiez le week-end là-bas ?", m: "Je me promenais au bord de la mer et je jouais au volley sur la plage avec mes amis." },
      { q: "Qu'est-ce qui vous manque de votre ville ?", m: "La mer et le soleil me manquent. Et aussi le petit-déjeuner du dimanche avec ma famille." },
      { q: "Quelle est la différence avec votre ville en France ?", m: "Ici, c'est plus calme et il pleut plus souvent ! Mais les transports sont très pratiques." },
      { q: "Vous allez retourner dans votre ville bientôt ?", m: "Oui, je vais y retourner cet été pour voir ma famille." }
    ] },
  { id: "a2-s11-po2", level: "A2", sujet: 11, sec: "po", ex: 2, pts: 8, kind: "monologue",
    title: "Ma saison préférée",
    consigne: "Monologue suivi (2 minutes environ). Vous parlez seul(e) du sujet suivant. Ensuite, l'examinateur peut vous poser quelques questions. Parlez de votre saison préférée.",
    help: {
      tr: "Kesintisiz konuşma (yaklaşık 2 dakika). Aşağıdaki konu hakkında tek başınıza konuşun. Sonra sınav görevlisi size birkaç soru sorabilir. En sevdiğiniz mevsimi anlatın.",
      en: "Monologue (about 2 minutes). Speak on your own about the topic below. Then the examiner may ask you a few questions. Talk about your favourite season."
    },
    topic: "Parlez de votre saison préférée.",
    hints: [
      "Quelle saison ?",
      "Le temps qu'il fait",
      "Vos activités pendant cette saison",
      "Un souvenir de cette saison",
      "Pourquoi vous l'aimez ?"
    ],
    must: [
      { c: "Dire quelle saison", kw: ["printemps", "été", "ete", "automne", "hiver", "saison"] },
      { c: "Décrire le temps", kw: ["il fait", "soleil", "pluie", "il pleut", "chaud", "froid", "doux", "neige", "fleurs"] },
      { c: "Parler de vos activités", kw: ["je fais", "je vais", "je cours", "je me promène", "je me promene", "je peux", "du vélo", "du velo", "dehors"] },
      { c: "Raconter un souvenir au passé", kw: ["l'année dernière", "l'annee derniere", "je suis allée", "je suis allee", "je suis allé", "je suis alle", "nous avons", "on a", "c'était", "c'etait", "j'ai"] },
      { c: "Expliquer pourquoi", kw: ["parce que", "j'adore", "j'aime", "pour moi", "préférée", "preferee"] }
    ],
    model: "Ma saison préférée, c'est le printemps. Au printemps, il fait doux : il ne fait pas trop chaud et pas trop froid. Les jours sont plus longs et il y a des fleurs partout dans les parcs. J'adore cette saison parce que je peux faire du sport dehors. Je cours le matin et, le week-end, je fais du vélo. L'année dernière, au mois d'avril, je suis allée à la campagne avec des amis. Nous avons fait un pique-nique sous les arbres et nous avons marché pendant trois heures. C'était une journée parfaite ! En hiver, au contraire, je suis souvent fatiguée parce qu'il fait nuit très tôt. Pour moi, le printemps, c'est la saison de l'énergie." },
  { id: "a2-s11-po3", level: "A2", sujet: 11, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Trop de bruit chez le voisin",
    consigne: "Exercice en interaction (3 minutes environ). Votre voisin fait beaucoup de bruit le soir et vous dormez mal. Vous frappez à sa porte. Vous expliquez le problème poliment et vous cherchez une solution ensemble. L'examinateur joue le rôle du voisin.",
    help: {
      tr: "Etkileşimli alıştırma (yaklaşık 3 dakika). Komşunuz akşamları çok gürültü yapıyor ve iyi uyuyamıyorsunuz. Kapısını çalıyorsunuz. Sorunu kibarca anlatıp birlikte bir çözüm arıyorsunuz. Sınav görevlisi komşuyu oynuyor.",
      en: "Interaction (about 3 minutes). Your neighbour makes a lot of noise in the evening and you sleep badly. You knock on his door. You politely explain the problem and look for a solution together. The examiner plays the neighbour."
    },
    scenario: "Depuis une semaine, votre voisin du dessus écoute de la musique très fort après 23 heures. Vous commencez le travail à 7 heures.",
    you: "Vous êtes la voisine / le voisin du dessous.",
    them: "L'examinateur est votre voisin(e) du dessus (vous vous vouvoyez).",
    must: [
      { c: "Saluer et vous présenter", kw: ["bonjour", "bonsoir", "excusez-moi", "voisine", "voisin", "j'habite", "en dessous", "au-dessous"] },
      { c: "Expliquer le problème", kw: ["bruit", "musique", "fort", "le soir", "la nuit", "dormir", "je dors", "23 heures"] },
      { c: "Proposer une solution", kw: ["est-ce que vous pourriez", "pourriez-vous", "vous pourriez", "moins fort", "baisser", "casque", "après 22", "apres 22"] },
      { c: "Rester poli(e) et conclure", kw: ["merci", "c'est gentil", "pas de problème", "pas de probleme", "bonne soirée", "bonne soiree", "au revoir"] }
    ],
    model: [
      ["E", "Bonsoir ! Oui ?"],
      ["C", "Bonsoir monsieur. Excusez-moi de vous déranger. Je suis votre voisine, j'habite juste en dessous."],
      ["E", "Ah, enchanté ! Il y a un problème ?"],
      ["C", "Oui, un petit problème. Depuis une semaine, j'entends de la musique très forte le soir, après 23 heures."],
      ["E", "Oh, vraiment ? Je suis désolé, je ne savais pas qu'on l'entendait chez vous."],
      ["C", "Ce n'est pas grave, mais je commence le travail à 7 heures et je dors mal."],
      ["E", "Je comprends. Qu'est-ce que vous proposez ?"],
      ["C", "Est-ce que vous pourriez mettre la musique moins fort après 22 heures ? Ou peut-être utiliser un casque ?"],
      ["E", "Oui, bien sûr. Mais samedi, je fais une petite fête pour mon anniversaire…"],
      ["C", "Pas de problème pour samedi, c'est le week-end ! Merci de me prévenir."],
      ["E", "Et si c'est encore trop fort, vous pouvez frapper à ma porte."],
      ["C", "D'accord, c'est très gentil. Merci beaucoup et bonne soirée !"],
      ["E", "Bonne soirée à vous aussi !"]
    ] },

  /* ---------- Sujet 12 ---------- */
  { id: "a2-s12-po1", level: "A2", sujet: 12, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Les transports",
    consigne: "Entretien dirigé (1 minute 30 environ). Vous vous présentez et vous répondez aux questions de l'examinateur sur votre vie, vos activités, votre passé et vos projets.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1,5 dakika). Kendinizi tanıtın ve sınav görevlisinin hayatınız, etkinlikleriniz, geçmişiniz ve planlarınız hakkındaki sorularını cevaplayın.",
      en: "Guided interview (about 1.5 minutes). Introduce yourself and answer the examiner's questions about your life, activities, past and plans."
    },
    prompts: [
      { q: "Bonjour. Comment est-ce que vous êtes venue ici aujourd'hui ?", m: "Bonjour, je m'appelle Esin. Je suis venue en tramway. C'est rapide, il y a un arrêt près de chez moi." },
      { q: "Quel moyen de transport utilisez-vous tous les jours ?", m: "Je prends le bus pour aller au cours de français, et le week-end, je fais du vélo." },
      { q: "Vous avez une voiture ?", m: "Non, pas en France. Dans mon pays, j'avais une petite voiture, mais ici je n'en ai pas besoin." },
      { q: "Combien de temps mettez-vous pour aller au travail ou au cours ?", m: "Je mets environ vingt-cinq minutes." },
      { q: "Qu'est-ce que vous pensez des transports dans votre ville ?", m: "Ils sont pratiques et pas trop chers. Mais le soir, il n'y a pas beaucoup de bus." },
      { q: "Vous avez déjà eu un problème dans les transports ?", m: "Oui, un jour, il y avait une grève et j'ai marché quarante minutes !" },
      { q: "Quel voyage aimeriez-vous faire en train en France ?", m: "J'aimerais aller à Marseille en TGV pour voir la mer." }
    ] },
  { id: "a2-s12-po2", level: "A2", sujet: 12, sec: "po", ex: 2, pts: 8, kind: "monologue",
    title: "Ma journée, avant et maintenant",
    consigne: "Monologue suivi (2 minutes environ). Vous parlez seul(e) du sujet suivant. Ensuite, l'examinateur peut vous poser quelques questions. Comparez votre journée avant, dans votre pays, et maintenant, en France.",
    help: {
      tr: "Kesintisiz konuşma (yaklaşık 2 dakika). Aşağıdaki konu hakkında tek başınıza konuşun. Sonra sınav görevlisi size birkaç soru sorabilir. Ülkenizdeki eski gününüzü ve Fransa'daki şimdiki gününüzü karşılaştırın.",
      en: "Monologue (about 2 minutes). Speak on your own about the topic below. Then the examiner may ask you a few questions. Compare your day before, in your country, and now, in France."
    },
    topic: "Comparez votre journée avant, dans votre pays, et maintenant, en France.",
    hints: [
      "Le matin : avant et maintenant",
      "Le travail ou les études",
      "Les repas",
      "Le soir et le week-end",
      "Ce qui a changé pour vous"
    ],
    must: [
      { c: "Parler d'avant (imparfait)", kw: ["avant", "je me levais", "j'allais", "je prenais", "je travaillais", "je rentrais", "je dînais", "je dinais", "je faisais", "je mangeais"] },
      { c: "Parler de maintenant (présent)", kw: ["maintenant", "aujourd'hui", "je me lève", "je me leve", "je vais", "je mange", "je dîne", "je dine", "en france"] },
      { c: "Comparer", kw: ["plus", "moins", "différent", "different", "différente", "differente", "par contre", "mais", "comme"] },
      { c: "Donner votre avis", kw: ["je préfère", "je prefere", "j'aime", "me manque", "parce que", "difficile", "plus calme", "content", "contente"] }
    ],
    model: "Avant, en Turquie, je me levais à 6 heures et demie. Je prenais un grand petit-déjeuner avec du fromage, des olives et du thé. Ensuite, j'allais au travail en voiture et je rentrais vers 19 heures. Le soir, je dînais souvent chez mes parents. Maintenant, en France, ma journée est différente. Je me lève un peu plus tard, à 7 heures, et je mange seulement une tartine avec un café. Le matin, je vais au cours de français en bus, et l'après-midi, je cherche du travail ou je fais du sport. Le soir, je dîne plus tôt et j'appelle ma famille. Ma vie est plus calme, mais ma famille me manque. Par contre, j'aime bien mon nouveau rythme." },
  { id: "a2-s12-po3", level: "A2", sujet: 12, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Un sac oublié dans le bus",
    consigne: "Exercice en interaction (3 minutes environ). Vous avez oublié votre sac dans le bus. Vous allez au service des objets trouvés de la compagnie de bus. Vous expliquez ce qui s'est passé, vous décrivez votre sac et vous laissez vos coordonnées. L'examinateur joue le rôle de l'employé(e).",
    help: {
      tr: "Etkileşimli alıştırma (yaklaşık 3 dakika). Çantanızı otobüste unuttunuz. Otobüs şirketinin kayıp eşya bürosuna gidiyorsunuz. Ne olduğunu anlatıyor, çantanızı tarif ediyor ve iletişim bilgilerinizi bırakıyorsunuz. Sınav görevlisi görevliyi oynuyor.",
      en: "Interaction (about 3 minutes). You left your bag on the bus. You go to the bus company's lost property office. You explain what happened, describe your bag and leave your contact details. The examiner plays the employee."
    },
    scenario: "Hier soir, vous avez oublié votre sac à dos noir dans le bus de la ligne 12. Dans le sac, il y a vos clés, un livre et une veste de sport.",
    you: "Vous êtes la voyageuse / le voyageur.",
    them: "L'examinateur est l'employé(e) du service des objets trouvés.",
    must: [
      { c: "Expliquer ce qui s'est passé", kw: ["perdu", "oublié", "oublie", "laissé", "laisse", "hier", "dans le bus", "ligne"] },
      { c: "Décrire le sac", kw: ["noir", "sac à dos", "sac a dos", "grand", "petit", "poche", "couleur"] },
      { c: "Dire ce qu'il y a dedans", kw: ["dedans", "il y a", "clés", "cles", "livre", "veste"] },
      { c: "Laisser vos coordonnées", kw: ["numéro", "numero", "téléphone", "telephone", "je m'appelle", "nom", "fiche", "m'appeler"] }
    ],
    model: [
      ["E", "Bonjour, je vous écoute."],
      ["C", "Bonjour monsieur. J'ai perdu mon sac hier soir. Je l'ai oublié dans le bus de la ligne 12."],
      ["E", "À quelle heure est-ce que vous avez pris le bus ?"],
      ["C", "Vers 18 heures. Je suis descendue à la gare et j'ai laissé mon sac sous le siège."],
      ["E", "Comment est votre sac ?"],
      ["C", "C'est un sac à dos noir, assez grand, avec une petite poche rouge devant."],
      ["E", "Qu'est-ce qu'il y a dedans ?"],
      ["C", "Il y a mes clés, un livre en français et une veste de sport grise."],
      ["E", "Attendez, je regarde… Non, désolé, nous n'avons pas de sac comme ça aujourd'hui."],
      ["C", "Oh non… Qu'est-ce que je peux faire ?"],
      ["E", "Vous pouvez remplir cette fiche. Si on le trouve, on vous appelle."],
      ["C", "D'accord. Je m'appelle Esin, et j'écris mon numéro de téléphone sur la fiche."],
      ["E", "Merci. Souvent, les objets arrivent un ou deux jours après."],
      ["C", "Très bien, merci beaucoup pour votre aide. Au revoir !"]
    ] },

  /* ---------- Sujet 13 ---------- */
  { id: "a2-s13-po1", level: "A2", sujet: 13, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Faire les courses",
    consigne: "Entretien dirigé (1 minute 30 environ). Vous vous présentez et vous répondez aux questions de l'examinateur sur votre vie, vos activités, votre passé et vos projets.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1,5 dakika). Kendinizi tanıtın ve sınav görevlisinin hayatınız, etkinlikleriniz, geçmişiniz ve planlarınız hakkındaki sorularını cevaplayın.",
      en: "Guided interview (about 1.5 minutes). Introduce yourself and answer the examiner's questions about your life, activities, past and plans."
    },
    prompts: [
      { q: "Où est-ce que vous faites vos courses ?", m: "Je fais mes courses au supermarché près de chez moi, et le samedi, je vais au marché." },
      { q: "Vous faites les courses souvent ?", m: "Deux fois par semaine, en général." },
      { q: "Qu'est-ce que vous achetez toujours ?", m: "J'achète toujours des fruits, des légumes, des yaourts et du pain." },
      { q: "Vous préférez les petits magasins ou les grandes surfaces ? Pourquoi ?", m: "Je préfère le marché, parce que les produits sont frais et les vendeurs sont sympathiques." },
      { q: "Vous avez déjà acheté quelque chose sur Internet ?", m: "Oui, la semaine dernière, j'ai commandé des chaussures de course." },
      { q: "Qu'est-ce qui est différent par rapport à votre pays ?", m: "Chez moi, les magasins ferment plus tard. Ici, le dimanche, beaucoup de magasins sont fermés." },
      { q: "Qu'est-ce que vous allez acheter ce week-end ?", m: "Je vais acheter des légumes pour faire une grande soupe." }
    ] },
  { id: "a2-s13-po2", level: "A2", sujet: 13, sec: "po", ex: 2, pts: 8, kind: "monologue",
    title: "Un plat typique de chez moi",
    consigne: "Monologue suivi (2 minutes environ). Vous parlez seul(e) du sujet suivant. Ensuite, l'examinateur peut vous poser quelques questions. Parlez d'un plat typique de votre pays ou de votre région.",
    help: {
      tr: "Kesintisiz konuşma (yaklaşık 2 dakika). Aşağıdaki konu hakkında tek başınıza konuşun. Sonra sınav görevlisi size birkaç soru sorabilir. Ülkenizin ya da bölgenizin tipik bir yemeğini anlatın.",
      en: "Monologue (about 2 minutes). Speak on your own about the topic below. Then the examiner may ask you a few questions. Talk about a typical dish from your country or region."
    },
    topic: "Parlez d'un plat typique de votre pays ou de votre région.",
    hints: [
      "Le nom du plat",
      "Les ingrédients",
      "Comment on le prépare",
      "Quand on le mange, avec qui",
      "Un souvenir lié à ce plat"
    ],
    must: [
      { c: "Nommer et présenter le plat", kw: ["s'appelle", "c'est un plat", "ce sont", "plat", "typique", "spécialité", "specialite"] },
      { c: "Donner les ingrédients", kw: ["avec", "riz", "viande", "légumes", "legumes", "tomates", "oignons", "ingrédients", "ingredients", "farine"] },
      { c: "Dire quand et avec qui on le mange", kw: ["on le mange", "on les mange", "pendant", "fêtes", "fetes", "fête", "fete", "famille", "dimanche"] },
      { c: "Raconter un souvenir / donner votre avis", kw: ["quand j'étais", "quand j'etais", "grand-mère", "grand-mere", "c'était", "c'etait", "délicieux", "delicieux", "j'adore", "parce que"] }
    ],
    model: "Je vais parler d'un plat typique de mon pays : les sarma. Ce sont des feuilles de vigne farcies avec du riz, des oignons, des tomates et de la menthe. On les mange froides, avec un peu de citron, et parfois avec du yaourt. Pour les préparer, il faut beaucoup de temps : on roule chaque feuille à la main, une par une. Chez nous, on mange les sarma pendant les fêtes et les grands repas de famille. Quand j'étais petite, je préparais ce plat avec ma grand-mère, dans sa cuisine. Elle roulait les feuilles très vite et moi, j'étais très lente ! Nous parlions et nous riions beaucoup. Pour moi, c'est un plat délicieux et plein de souvenirs. Un jour, je voudrais le préparer pour mes amis français." },
  { id: "a2-s13-po3", level: "A2", sujet: 13, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "S'inscrire à un cours de cuisine",
    consigne: "Exercice en interaction (3 minutes environ). Vous téléphonez à un atelier de cuisine pour vous inscrire à un cours. Vous posez des questions (jours, horaires, prix, programme) et vous choisissez un cours. L'examinateur joue le rôle de l'employé(e) de l'atelier.",
    help: {
      tr: "Etkileşimli alıştırma (yaklaşık 3 dakika). Bir kursa kaydolmak için bir yemek atölyesini arıyorsunuz. Sorular soruyor (günler, saatler, fiyat, program) ve bir kurs seçiyorsunuz. Sınav görevlisi atölye çalışanını oynuyor.",
      en: "Interaction (about 3 minutes). You phone a cooking workshop to sign up for a class. You ask questions (days, times, price, programme) and choose a class. The examiner plays the workshop employee."
    },
    scenario: "Vous voulez apprendre à cuisiner des plats français. Vous êtes libre le mardi soir et le samedi matin. Votre budget : 40 € maximum par cours.",
    you: "Vous êtes la cliente / le client.",
    them: "L'examinateur est l'employé(e) de l'atelier de cuisine.",
    must: [
      { c: "Dire ce que vous voulez", kw: ["m'inscrire", "inscrire", "cours", "apprendre", "cuisine française", "cuisine francaise", "je voudrais"] },
      { c: "Demander les jours, les horaires et le programme", kw: ["quel jour", "quels jours", "à quelle heure", "a quelle heure", "horaires", "qu'est-ce qu'on prépare", "qu'est-ce qu'on prepare", "programme"] },
      { c: "Demander le prix", kw: ["combien", "prix", "coûte", "coute", "euros", "tarif", "cher"] },
      { c: "Choisir et réserver", kw: ["je prends", "je choisis", "réserver", "reserver", "inscrivez", "s'il vous plaît", "s'il vous plait", "d'accord"] }
    ],
    model: [
      ["E", "Atelier « Les Petits Chefs », bonjour !"],
      ["C", "Bonjour madame. Je voudrais m'inscrire à un cours. Je voudrais apprendre à faire des plats français."],
      ["E", "Très bien. Vous êtes débutante ?"],
      ["C", "Oui, je cuisine un peu, mais je ne connais pas bien la cuisine française. Quels jours avez-vous des cours ?"],
      ["E", "Nous avons des cours le mardi soir, de 19 h à 21 h, et le samedi matin, de 10 h à 13 h."],
      ["C", "Et qu'est-ce qu'on prépare pendant les cours ?"],
      ["E", "Le mardi, ce sont des plats simples, par exemple une quiche. Le samedi, on fait un repas complet : entrée, plat et dessert."],
      ["C", "Ça a l'air super ! Combien coûte un cours ?"],
      ["E", "Le cours du mardi coûte 35 euros, et celui du samedi 55 euros."],
      ["C", "Le samedi, c'est un peu cher pour moi. Je prends le cours du mardi soir."],
      ["E", "Parfait. Il reste des places mardi prochain. Je vous inscris ?"],
      ["C", "Oui, s'il vous plaît. Est-ce que je dois apporter quelque chose ?"],
      ["E", "Non, on vous donne tout, même le tablier !"],
      ["C", "Super, merci beaucoup. À mardi, au revoir !"]
    ] },

  /* ---------- Sujet 14 ---------- */
  { id: "a2-s14-po1", level: "A2", sujet: 14, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "La nature et le plein air",
    consigne: "Entretien dirigé (1 minute 30 environ). Vous vous présentez et vous répondez aux questions de l'examinateur sur votre vie, vos activités, votre passé et vos projets.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1,5 dakika). Kendinizi tanıtın ve sınav görevlisinin hayatınız, etkinlikleriniz, geçmişiniz ve planlarınız hakkındaki sorularını cevaplayın.",
      en: "Guided interview (about 1.5 minutes). Introduce yourself and answer the examiner's questions about your life, activities, past and plans."
    },
    prompts: [
      { q: "Vous aimez passer du temps dans la nature ?", m: "Oui, j'adore ça. Dans la nature, je me sens calme." },
      { q: "Qu'est-ce que vous préférez : la mer ou la montagne ?", m: "Je préfère la mer, mais j'aime aussi marcher en montagne." },
      { q: "Il y a un parc près de chez vous ?", m: "Oui, il y a un grand parc à dix minutes. J'y vais pour courir le dimanche matin." },
      { q: "Vous avez déjà fait du camping ?", m: "Oui, une fois, avec des amis. Il a plu toute la nuit, mais c'était drôle !" },
      { q: "Quand vous étiez enfant, vous alliez souvent à la campagne ?", m: "Oui, nous allions chez mes grands-parents. Ils avaient un jardin avec des arbres fruitiers." },
      { q: "Qu'est-ce que vous faites pour protéger la nature ?", m: "Je trie mes déchets et je prends le vélo ou le bus." },
      { q: "Où aimeriez-vous faire une randonnée en France ?", m: "J'aimerais faire une randonnée dans les Alpes, l'été prochain." }
    ] },
  { id: "a2-s14-po2", level: "A2", sujet: 14, sec: "po", ex: 2, pts: 8, kind: "monologue",
    title: "Un livre que j'ai aimé",
    consigne: "Monologue suivi (2 minutes environ). Vous parlez seul(e) du sujet suivant. Ensuite, l'examinateur peut vous poser quelques questions. Parlez d'un livre que vous avez aimé.",
    help: {
      tr: "Kesintisiz konuşma (yaklaşık 2 dakika). Aşağıdaki konu hakkında tek başınıza konuşun. Sonra sınav görevlisi size birkaç soru sorabilir. Sevdiğiniz bir kitabı anlatın.",
      en: "Monologue (about 2 minutes). Speak on your own about the topic below. Then the examiner may ask you a few questions. Talk about a book you liked."
    },
    topic: "Parlez d'un livre que vous avez aimé.",
    hints: [
      "Le titre, l'auteur, le genre",
      "Quand et où vous l'avez lu",
      "L'histoire en quelques phrases",
      "Le personnage principal",
      "Pourquoi vous l'avez aimé"
    ],
    must: [
      { c: "Présenter le livre", kw: ["livre", "roman", "titre", "s'appelle", "auteur", "écrit", "ecrit", "de "] },
      { c: "Dire quand vous l'avez lu", kw: ["je l'ai lu", "je l'ai relu", "lu", "quand j'avais", "il y a", "l'année dernière", "l'annee derniere"] },
      { c: "Raconter l'histoire", kw: ["c'est l'histoire", "histoire", "il rencontre", "personnage", "raconte", "parle de"] },
      { c: "Donner votre avis", kw: ["parce que", "j'ai aimé", "j'ai aime", "j'ai adoré", "j'ai adore", "beau", "je le conseille", "pour moi"] }
    ],
    model: "Je vais parler d'un livre que j'ai beaucoup aimé : « Le Petit Prince », d'Antoine de Saint-Exupéry. Je l'ai lu la première fois quand j'avais douze ans, en turc. L'année dernière, je l'ai relu en français, avec un dictionnaire ! C'est l'histoire d'un pilote. Son avion tombe en panne dans le désert et là, il rencontre un petit garçon. Il vient d'une toute petite planète. Il raconte ses voyages et ses rencontres avec des adultes un peu bizarres. J'ai aimé ce livre parce qu'il est simple, mais très profond. Il parle de l'amitié et de ce qui est important dans la vie. Pour moi, c'est un livre pour les enfants et pour les adultes. Je le conseille aux personnes qui apprennent le français, parce que les phrases sont courtes." },
  { id: "a2-s14-po3", level: "A2", sujet: 14, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Échanger un jour de travail",
    consigne: "Exercice en interaction (3 minutes environ). Vous avez un problème avec vos horaires de travail. Vous demandez à un(e) collègue de changer de jour avec vous. Vous expliquez la situation et vous trouvez une solution ensemble. L'examinateur joue le rôle de votre collègue.",
    help: {
      tr: "Etkileşimli alıştırma (yaklaşık 3 dakika). İş saatlerinizle ilgili bir sorununuz var. Bir iş arkadaşınızdan sizinle gün değiştirmesini istiyorsunuz. Durumu anlatıp birlikte bir çözüm buluyorsunuz. Sınav görevlisi iş arkadaşınızı oynuyor.",
      en: "Interaction (about 3 minutes). You have a problem with your work schedule. You ask a colleague to swap days with you. You explain the situation and find a solution together. The examiner plays your colleague."
    },
    scenario: "Vous travaillez samedi de 8 h à 14 h. Samedi, votre meilleure amie arrive à l'aéroport à 11 h et vous voulez aller la chercher. Vous pouvez travailler dimanche à la place.",
    you: "Vous êtes vous-même.",
    them: "L'examinateur est votre collègue Théo (vous vous tutoyez).",
    must: [
      { c: "Expliquer le problème", kw: ["samedi", "je travaille", "problème", "probleme", "aéroport", "aeroport", "mon amie", "je ne peux pas"] },
      { c: "Demander l'échange", kw: ["est-ce que tu peux", "tu pourrais", "tu peux", "échanger", "echanger", "changer", "à ma place", "a ma place", "service"] },
      { c: "Proposer une solution", kw: ["je peux", "dimanche", "à ta place", "a ta place", "ça te va", "ca te va", "si tu veux", "je te propose"] },
      { c: "Remercier", kw: ["merci", "c'est gentil", "sympa", "je te dois", "super"] }
    ],
    model: [
      ["E", "Salut Esin ! Ça va ?"],
      ["C", "Salut Théo, ça va, merci. Dis, j'ai un petit service à te demander."],
      ["E", "Oui, bien sûr. Qu'est-ce qui se passe ?"],
      ["C", "Samedi, je travaille de 8 h à 14 h, mais ma meilleure amie arrive à l'aéroport à 11 h. Je voudrais aller la chercher."],
      ["E", "Ah, je comprends ! Tu veux changer de jour ?"],
      ["C", "Oui. Est-ce que tu pourrais travailler samedi à ma place ?"],
      ["E", "Samedi, c'est possible. Mais moi, je travaille dimanche matin, et j'ai un repas de famille…"],
      ["C", "Pas de problème : je peux travailler dimanche à ta place. Ça te va ?"],
      ["E", "C'est parfait ! On prévient la responsable ?"],
      ["C", "Oui, je vais lui envoyer un message aujourd'hui pour lui expliquer."],
      ["E", "Super. Et passe un bon week-end avec ton amie !"],
      ["C", "Merci beaucoup, Théo, c'est vraiment sympa. Je te dois un café !"],
      ["E", "Avec plaisir ! À demain."],
      ["C", "À demain !"]
    ] },

  /* ---------- Sujet 15 ---------- */
  { id: "a2-s15-po1", level: "A2", sujet: 15, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "La famille",
    consigne: "Entretien dirigé (1 minute 30 environ). Vous vous présentez et vous répondez aux questions de l'examinateur sur votre vie, vos activités, votre passé et vos projets.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1,5 dakika). Kendinizi tanıtın ve sınav görevlisinin hayatınız, etkinlikleriniz, geçmişiniz ve planlarınız hakkındaki sorularını cevaplayın.",
      en: "Guided interview (about 1.5 minutes). Introduce yourself and answer the examiner's questions about your life, activities, past and plans."
    },
    prompts: [
      { q: "Vous avez une grande famille ?", m: "Oui, assez grande. J'ai un frère, une sœur et beaucoup de cousins." },
      { q: "Vous habitez près de votre famille ?", m: "Non, ma famille habite dans mon pays. Je les appelle souvent en vidéo." },
      { q: "Qui est la personne la plus proche de vous dans votre famille ?", m: "C'est ma sœur. Nous parlons de tout." },
      { q: "Qu'est-ce que vous faisiez en famille quand vous étiez petite ?", m: "Le dimanche, nous faisions un pique-nique au bord de la mer." },
      { q: "Quand avez-vous vu votre famille la dernière fois ?", m: "Je l'ai vue il y a trois mois, juste avant mon départ pour la France." },
      { q: "Quelqu'un de votre famille va venir vous voir en France ?", m: "Oui, mes parents vont venir cet hiver. Je vais leur montrer ma nouvelle ville." },
      { q: "À votre avis, c'est important de vivre près de sa famille ?", m: "C'est important, mais ce n'est pas toujours possible. Avec Internet, c'est plus facile." }
    ] },
  { id: "a2-s15-po2", level: "A2", sujet: 15, sec: "po", ex: 2, pts: 8, kind: "monologue",
    title: "Un objet important pour moi",
    consigne: "Monologue suivi (2 minutes environ). Vous parlez seul(e) du sujet suivant. Ensuite, l'examinateur peut vous poser quelques questions. Parlez d'un objet qui est important pour vous.",
    help: {
      tr: "Kesintisiz konuşma (yaklaşık 2 dakika). Aşağıdaki konu hakkında tek başınıza konuşun. Sonra sınav görevlisi size birkaç soru sorabilir. Sizin için önemli olan bir eşyayı anlatın.",
      en: "Monologue (about 2 minutes). Speak on your own about the topic below. Then the examiner may ask you a few questions. Talk about an object that is important to you."
    },
    topic: "Parlez d'un objet qui est important pour vous.",
    hints: [
      "Quel objet ? Décrivez-le.",
      "Qui vous l'a donné, ou où vous l'avez acheté",
      "Depuis quand vous l'avez",
      "Quand vous l'utilisez",
      "Pourquoi il est important"
    ],
    must: [
      { c: "Décrire l'objet", kw: ["c'est un", "c'est une", "elle est", "il est", "petit", "petite", "bleu", "bleue", "noir", "objet"] },
      { c: "Dire d'où il vient (au passé)", kw: ["m'a offert", "m'a offerte", "m'a donné", "m'a donne", "j'ai acheté", "j'ai achete", "j'ai reçu", "j'ai recu", "cadeau", "il y a"] },
      { c: "Dire quand vous l'utilisez", kw: ["je le porte", "je la porte", "je l'utilise", "tous les jours", "quand je", "toujours", "depuis"] },
      { c: "Expliquer pourquoi il est important", kw: ["parce que", "important", "importante", "souvenir", "me rappelle", "porte-bonheur", "pour moi"] }
    ],
    model: "L'objet le plus important pour moi, c'est une petite montre de sport. Elle est bleue et noire, assez simple. C'est mon père qui me l'a offerte, il y a cinq ans, pour ma première course de 10 kilomètres. Avant la course, j'avais très peur et il m'a dit : « Écoute ton corps et va doucement. » J'ai fini la course et j'étais très fière. Depuis, je porte cette montre presque tous les jours. Je l'utilise quand je cours ou quand je fais du vélo : elle compte mes kilomètres. Quand je l'ai mise dans ma valise pour la France, j'ai pensé à ma famille. Cette montre est importante parce qu'elle me rappelle mon père et ses conseils. Pour moi, c'est un vrai porte-bonheur." },
  { id: "a2-s15-po3", level: "A2", sujet: 15, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Choisir un cadeau ensemble",
    consigne: "Exercice en interaction (3 minutes environ). Vous discutez avec un(e) ami(e) pour choisir un cadeau d'anniversaire pour une amie commune. Vous faites des propositions, vous donnez votre avis et vous décidez ensemble. L'examinateur joue le rôle de votre ami(e).",
    help: {
      tr: "Etkileşimli alıştırma (yaklaşık 3 dakika). Ortak bir arkadaşınıza doğum günü hediyesi seçmek için bir arkadaşınızla konuşuyorsunuz. Öneriler yapıyor, fikrinizi söylüyor ve birlikte karar veriyorsunuz. Sınav görevlisi arkadaşınızı oynuyor.",
      en: "Interaction (about 3 minutes). You talk with a friend to choose a birthday present for a friend you both know. You make suggestions, give your opinion and decide together. The examiner plays your friend."
    },
    scenario: "Votre amie Léa fête son anniversaire samedi. Elle aime la cuisine, les plantes et les voyages. Vous voulez acheter un cadeau à deux, pour 50 € maximum.",
    you: "Vous êtes vous-même.",
    them: "L'examinateur est votre ami Hugo (vous vous tutoyez).",
    must: [
      { c: "Proposer des idées", kw: ["on pourrait", "je propose", "et si", "pourquoi pas", "on achète", "on achete", "tu veux", "idée", "idee"] },
      { c: "Donner votre avis", kw: ["je pense", "à mon avis", "a mon avis", "je trouve", "tu as raison", "bonne idée", "bonne idee", "je préfère", "je prefere"] },
      { c: "Parler du prix", kw: ["euros", "prix", "combien", "cher", "chacun", "ça fait", "ca fait", "budget"] },
      { c: "Décider et fixer un rendez-vous", kw: ["d'accord", "on prend", "on se retrouve", "rendez-vous", "ça te va", "ca te va", "demain", "à demain", "a demain"] }
    ],
    model: [
      ["E", "Alors, qu'est-ce qu'on offre à Léa pour son anniversaire ?"],
      ["C", "Elle aime beaucoup la cuisine. On pourrait lui acheter un livre de recettes ?"],
      ["E", "Bof… Elle a déjà beaucoup de livres de cuisine."],
      ["C", "Tu as raison. Et une belle plante pour son balcon ? Elle adore les plantes."],
      ["E", "Oui, c'est une bonne idée, mais une plante, ça ne coûte pas très cher. On a 50 euros."],
      ["C", "Alors, on peut ajouter autre chose. Elle va en Italie cet été… Pourquoi pas un petit guide de Rome ?"],
      ["E", "Ah, super idée ! La plante et le guide, ça fait combien ?"],
      ["C", "Je pense environ 25 euros pour la plante et 20 euros pour le guide. Ça fait 45 euros."],
      ["E", "Parfait, ça fait moins de 25 euros chacun."],
      ["C", "Oui ! On va acheter les cadeaux ensemble demain ? Il y a un fleuriste et une librairie dans la même rue."],
      ["E", "D'accord. On se retrouve à quelle heure ?"],
      ["C", "À 17 heures, devant la librairie. Ça te va ?"],
      ["E", "Ça marche. À demain !"],
      ["C", "À demain, salut !"]
    ] },

  /* ---------- Sujet 16 ---------- */
  { id: "a2-s16-po1", level: "A2", sujet: 16, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Les langues",
    consigne: "Entretien dirigé (1 minute 30 environ). Vous vous présentez et vous répondez aux questions de l'examinateur sur votre vie, vos activités, votre passé et vos projets.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1,5 dakika). Kendinizi tanıtın ve sınav görevlisinin hayatınız, etkinlikleriniz, geçmişiniz ve planlarınız hakkındaki sorularını cevaplayın.",
      en: "Guided interview (about 1.5 minutes). Introduce yourself and answer the examiner's questions about your life, activities, past and plans."
    },
    prompts: [
      { q: "Quelles langues parlez-vous ?", m: "Je parle turc, anglais et un peu français." },
      { q: "Où avez-vous appris l'anglais ?", m: "Je l'ai appris à l'école, puis j'ai regardé beaucoup de séries en anglais." },
      { q: "Qu'est-ce qui est difficile pour vous en français ?", m: "La prononciation, surtout le « u » et le « r ». Et les nombres comme quatre-vingt-dix-sept !" },
      { q: "Vous avez déjà eu un problème à cause de la langue ?", m: "Oui, une fois, au restaurant, j'ai commandé un plat sans comprendre le nom. C'était du canard !" },
      { q: "Dans quelle langue est-ce que vous parlez avec vos amis ici ?", m: "Avec mes amis français, je parle français. Quand c'est trop difficile, nous parlons anglais." },
      { q: "Dans quelle langue est-ce que vous rêvez ?", m: "Je rêve en turc, mais maintenant, parfois, je rêve un peu en français !" },
      { q: "Quelle autre langue voudriez-vous apprendre ?", m: "Je voudrais apprendre l'espagnol, parce que j'aimerais voyager en Amérique du Sud." }
    ] },
  { id: "a2-s16-po2", level: "A2", sujet: 16, sec: "po", ex: 2, pts: 8, kind: "monologue",
    title: "Un événement sportif",
    consigne: "Monologue suivi (2 minutes environ). Vous parlez seul(e) du sujet suivant. Ensuite, l'examinateur peut vous poser quelques questions. Parlez d'un événement sportif que vous avez vu ou vécu.",
    help: {
      tr: "Kesintisiz konuşma (yaklaşık 2 dakika). Aşağıdaki konu hakkında tek başınıza konuşun. Sonra sınav görevlisi size birkaç soru sorabilir. İzlediğiniz ya da yaşadığınız bir spor etkinliğini anlatın.",
      en: "Monologue (about 2 minutes). Speak on your own about the topic below. Then the examiner may ask you a few questions. Talk about a sports event you watched or took part in."
    },
    topic: "Parlez d'un événement sportif que vous avez vu ou vécu.",
    hints: [
      "Quel événement ? Où et quand ?",
      "Avec qui étiez-vous ?",
      "Ce qui s'est passé",
      "L'ambiance",
      "Ce que vous avez ressenti"
    ],
    must: [
      { c: "Dire quoi, où et quand", kw: ["match", "course", "compétition", "competition", "finale", "salle", "stade", "il y a", "l'année dernière", "l'annee derniere"] },
      { c: "Dire avec qui", kw: ["avec", "amies", "amis", "frère", "frere", "famille", "seule", "seul"] },
      { c: "Raconter au passé", kw: ["j'ai vu", "nous avons", "on a", "il y avait", "c'était", "c'etait", "ont gagné", "ont gagne", "perdait", "je suis allée", "je suis allee"] },
      { c: "Parler de l'ambiance et des émotions", kw: ["ambiance", "j'étais", "j'etais", "contente", "content", "fière", "fiere", "incroyable", "magnifique", "j'ai pleuré", "j'ai pleure"] }
    ],
    model: "Je vais parler d'un match de volley que j'ai vu il y a deux ans. C'était la finale d'une grande compétition de volley féminin. J'y suis allée avec mon frère et deux amies. La salle était pleine : il y avait plus de dix mille personnes ! Tout le monde chantait et criait. Au début, notre équipe perdait et nous étions un peu tristes. Mais ensuite, les joueuses ont fait un très beau match et elles ont gagné le dernier set. À la fin, tout le monde dansait dans la salle. J'étais tellement contente que j'ai pleuré ! L'ambiance était incroyable. Pour moi, c'était un moment magnifique, parce que le sport réunit les gens. J'aimerais beaucoup voir un grand match en France aussi." },
  { id: "a2-s16-po3", level: "A2", sujet: 16, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Ouvrir un compte en banque",
    consigne: "Exercice en interaction (3 minutes environ). Vous allez dans une banque pour ouvrir un compte. Vous expliquez votre situation, vous posez des questions sur la carte bancaire et les frais, et vous prenez rendez-vous si c'est nécessaire. L'examinateur joue le rôle du conseiller / de la conseillère.",
    help: {
      tr: "Etkileşimli alıştırma (yaklaşık 3 dakika). Hesap açmak için bir bankaya gidiyorsunuz. Durumunuzu anlatıyor, banka kartı ve ücretler hakkında sorular soruyor, gerekirse randevu alıyorsunuz. Sınav görevlisi banka danışmanını oynuyor.",
      en: "Interaction (about 3 minutes). You go to a bank to open an account. You explain your situation, ask about the bank card and fees, and make an appointment if needed. The examiner plays the bank adviser."
    },
    scenario: "Vous venez d'arriver en France. Vous avez un nouveau travail et votre employeur vous demande un compte bancaire français. Vous avez votre passeport et votre contrat de travail.",
    you: "Vous êtes la cliente / le client.",
    them: "L'examinateur est le conseiller / la conseillère de la banque.",
    must: [
      { c: "Expliquer votre demande", kw: ["ouvrir un compte", "compte", "je viens d'arriver", "nouveau travail", "salaire", "je voudrais"] },
      { c: "Parler des documents", kw: ["passeport", "contrat", "justificatif", "attestation", "papiers", "documents", "facture"] },
      { c: "Poser des questions (carte, frais)", kw: ["combien", "frais", "coûte", "coute", "carte", "par mois", "est-ce que je peux", "est-ce que"] },
      { c: "Prendre rendez-vous et conclure", kw: ["rendez-vous", "jeudi", "d'accord", "parfait", "merci", "au revoir"] }
    ],
    model: [
      ["E", "Bonjour madame, qu'est-ce que je peux faire pour vous ?"],
      ["C", "Bonjour. Je voudrais ouvrir un compte, s'il vous plaît. Je viens d'arriver en France et j'ai un nouveau travail."],
      ["E", "Très bien. Vous avez des documents avec vous ?"],
      ["C", "Oui, j'ai mon passeport et mon contrat de travail. Il faut d'autres papiers ?"],
      ["E", "Il faut aussi un justificatif de domicile : une facture d'électricité, par exemple."],
      ["C", "Ah, je n'ai pas encore de facture. J'ai une attestation de mon propriétaire. Ça va ?"],
      ["E", "Oui, avec une copie de sa pièce d'identité, c'est bon."],
      ["C", "D'accord. Et pour la carte bancaire, combien ça coûte ?"],
      ["E", "Notre compte simple coûte 3 euros par mois, avec une carte et l'application sur le téléphone."],
      ["C", "Est-ce que je peux utiliser ma carte quand je voyage dans mon pays ?"],
      ["E", "Oui, mais il y a des frais à l'étranger. Pour finir l'ouverture du compte, je vous propose un rendez-vous jeudi à 10 heures."],
      ["C", "Jeudi à 10 heures, c'est parfait. Je viens avec tous les documents."],
      ["E", "Très bien. À jeudi, madame."],
      ["C", "Merci beaucoup. Au revoir !"]
    ] },

  /* ---------- Sujet 17 ---------- */
  { id: "a2-s17-po1", level: "A2", sujet: 17, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Chez moi au quotidien",
    consigne: "Entretien dirigé (1 minute 30 environ). Vous vous présentez et vous répondez aux questions de l'examinateur sur votre vie, vos activités, votre passé et vos projets.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1,5 dakika). Kendinizi tanıtın ve sınav görevlisinin hayatınız, etkinlikleriniz, geçmişiniz ve planlarınız hakkındaki sorularını cevaplayın.",
      en: "Guided interview (about 1.5 minutes). Introduce yourself and answer the examiner's questions about your life, activities, past and plans."
    },
    prompts: [
      { q: "Vous habitez dans une maison ou dans un appartement ?", m: "J'habite dans un petit appartement, au troisième étage." },
      { q: "Comment avez-vous trouvé votre logement ?", m: "Je l'ai trouvé sur Internet. J'ai visité quatre appartements avant de choisir." },
      { q: "Quelle est votre pièce préférée ? Pourquoi ?", m: "C'est le salon, parce qu'il est très lumineux. J'y lis et j'y fais du yoga." },
      { q: "Qui fait le ménage chez vous ?", m: "C'est moi ! Je fais le ménage le samedi matin, avec de la musique." },
      { q: "Comment était votre logement dans votre pays ?", m: "C'était un appartement plus grand, avec un balcon. Je pouvais voir la mer." },
      { q: "Qu'est-ce que vous voudriez changer chez vous ?", m: "Je voudrais acheter un canapé plus confortable et quelques plantes." },
      { q: "Vous invitez souvent des amis chez vous ?", m: "Pas encore souvent, mais samedi prochain, je vais inviter deux amies à dîner." }
    ] },
  { id: "a2-s17-po2", level: "A2", sujet: 17, sec: "po", ex: 2, pts: 8, kind: "monologue",
    title: "Un café que j'aime",
    consigne: "Monologue suivi (2 minutes environ). Vous parlez seul(e) du sujet suivant. Ensuite, l'examinateur peut vous poser quelques questions. Parlez d'un restaurant ou d'un café que vous aimez.",
    help: {
      tr: "Kesintisiz konuşma (yaklaşık 2 dakika). Aşağıdaki konu hakkında tek başınıza konuşun. Sonra sınav görevlisi size birkaç soru sorabilir. Sevdiğiniz bir restoranı ya da kafeyi anlatın.",
      en: "Monologue (about 2 minutes). Speak on your own about the topic below. Then the examiner may ask you a few questions. Talk about a restaurant or café you like."
    },
    topic: "Parlez d'un restaurant ou d'un café que vous aimez.",
    hints: [
      "Où il se trouve",
      "Comment il est (décor, ambiance)",
      "Ce qu'on y mange ou boit, les prix",
      "Avec qui vous y allez",
      "Votre première visite"
    ],
    must: [
      { c: "Dire où il se trouve", kw: ["se trouve", "près de", "pres de", "rue", "quartier", "en face", "centre", "dans"] },
      { c: "Le décrire", kw: ["petit", "grand", "joli", "calme", "ambiance", "décor", "decor", "terrasse", "plantes"] },
      { c: "Dire ce qu'on y mange ou boit", kw: ["je prends", "je commande", "café", "cafe", "croissant", "brunch", "plat", "menu", "euros"] },
      { c: "Raconter la première visite", kw: ["la première fois", "la premiere fois", "j'y suis allée", "j'y suis allee", "j'y suis allé", "j'y suis alle", "c'était", "c'etait", "elle m'a"] }
    ],
    model: "J'aime beaucoup un petit café près de chez moi. Il se trouve dans une rue calme, en face d'un parc. Il n'est pas très grand, mais il est joli : il y a des plantes partout et des vieilles photos sur les murs. Quand il fait beau, on peut s'asseoir en terrasse. Le matin, je prends un café et un croissant, et le dimanche, ils servent un brunch délicieux pour 15 euros. La première fois, j'y suis allée un jour de pluie, juste pour me protéger. La serveuse était très gentille : elle m'a parlé lentement et elle m'a aidée avec le menu. Depuis, j'y vais souvent, seule pour étudier ou avec des amis le week-end. J'aime ce café parce que je me sens chez moi." },
  { id: "a2-s17-po3", level: "A2", sujet: 17, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Le chauffage en panne",
    consigne: "Exercice en interaction (3 minutes environ). Vous téléphonez à l'agence immobilière qui s'occupe de votre appartement. Vous expliquez le problème, vous demandez une réparation rapide et vous fixez un rendez-vous avec le technicien. L'examinateur joue le rôle de l'employé(e) de l'agence.",
    help: {
      tr: "Etkileşimli alıştırma (yaklaşık 3 dakika). Dairenizle ilgilenen emlak ajansını arıyorsunuz. Sorunu anlatıyor, hızlı bir onarım istiyor ve teknisyenle bir randevu belirliyorsunuz. Sınav görevlisi ajans çalışanını oynuyor.",
      en: "Interaction (about 3 minutes). You phone the estate agency that manages your flat. You explain the problem, ask for a quick repair and set an appointment with the technician. The examiner plays the agency employee."
    },
    scenario: "C'est l'hiver. Depuis deux jours, le chauffage de votre appartement ne marche plus. Il fait 15 degrés dans le salon. Vous travaillez tous les jours jusqu'à 17 h.",
    you: "Vous êtes la / le locataire.",
    them: "L'examinateur est l'employé(e) de l'agence immobilière.",
    must: [
      { c: "Vous présenter", kw: ["je m'appelle", "locataire", "j'habite", "appartement", "votre agence"] },
      { c: "Expliquer le problème", kw: ["chauffage", "ne marche plus", "ne marche pas", "ne fonctionne", "froid", "panne", "degrés", "degres", "depuis"] },
      { c: "Demander une réparation rapide", kw: ["réparer", "reparer", "réparation", "reparation", "technicien", "vite", "plus tôt", "plus tot", "urgent", "rapidement"] },
      { c: "Fixer un rendez-vous", kw: ["rendez-vous", "demain", "après 17", "apres 17", "jusqu'à 17", "jusqu'a 17", "ça me va", "ca me va", "parfait", "heures"] }
    ],
    model: [
      ["E", "Agence du Centre, bonjour !"],
      ["C", "Bonjour monsieur. Je m'appelle Esin. Je suis locataire d'un appartement de votre agence, rue des Lilas."],
      ["E", "Bonjour madame. Qu'est-ce qui se passe ?"],
      ["C", "Le chauffage ne marche plus depuis deux jours. Il fait seulement 15 degrés dans le salon."],
      ["E", "Ah, c'est embêtant. Vous avez essayé d'éteindre et de rallumer la chaudière ?"],
      ["C", "Oui, j'ai essayé hier soir et ce matin, mais ça ne marche toujours pas."],
      ["E", "D'accord. Je vais envoyer un technicien. Il peut passer jeudi matin."],
      ["C", "Jeudi, c'est dans trois jours… Il fait vraiment froid. C'est possible plus tôt ?"],
      ["E", "Je regarde… Il a une place demain, à 15 heures."],
      ["C", "Demain, je travaille jusqu'à 17 heures. Il peut venir après 17 heures ?"],
      ["E", "Oui, à 17 h 30. Ça vous va ?"],
      ["C", "Oui, parfait. Et en attendant, qu'est-ce que je peux faire ?"],
      ["E", "Nous pouvons vous prêter un petit radiateur électrique. Vous pouvez passer le chercher à l'agence ce soir."],
      ["C", "Très bien, je passe vers 18 heures. Merci beaucoup, au revoir !"]
    ] },

  /* ---------- Sujet 18 ---------- */
  { id: "a2-s18-po1", level: "A2", sujet: 18, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Les animaux",
    consigne: "Entretien dirigé (1 minute 30 environ). Vous vous présentez et vous répondez aux questions de l'examinateur sur votre vie, vos activités, votre passé et vos projets.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1,5 dakika). Kendinizi tanıtın ve sınav görevlisinin hayatınız, etkinlikleriniz, geçmişiniz ve planlarınız hakkındaki sorularını cevaplayın.",
      en: "Guided interview (about 1.5 minutes). Introduce yourself and answer the examiner's questions about your life, activities, past and plans."
    },
    prompts: [
      { q: "Vous aimez les animaux ?", m: "Oui, beaucoup, surtout les chiens et les chats." },
      { q: "Vous avez un animal ?", m: "Non, pas en ce moment. Mon appartement est trop petit." },
      { q: "Quand vous étiez enfant, vous aviez un animal ?", m: "Oui, nous avions un chat blanc. Il dormait toujours sur mon lit." },
      { q: "Dans votre pays, il y a beaucoup d'animaux dans les rues ?", m: "Oui, il y a beaucoup de chats et de chiens dans les rues. Les gens leur donnent à manger." },
      { q: "Vous êtes déjà allée dans une ferme ?", m: "Oui, l'année dernière, je suis allée dans une ferme avec des amis. J'ai donné à manger aux chèvres !" },
      { q: "Quel animal aimeriez-vous avoir plus tard ?", m: "J'aimerais avoir un chien, pour courir avec lui le matin." },
      { q: "À votre avis, c'est difficile d'avoir un animal en ville ?", m: "Un peu, oui. Il faut du temps et de la place, et un chien doit sortir plusieurs fois par jour." }
    ] },
  { id: "a2-s18-po2", level: "A2", sujet: 18, sec: "po", ex: 2, pts: 8, kind: "monologue",
    title: "Mon moment préféré de la journée",
    consigne: "Monologue suivi (2 minutes environ). Vous parlez seul(e) du sujet suivant. Ensuite, l'examinateur peut vous poser quelques questions. Parlez de votre moment préféré de la journée.",
    help: {
      tr: "Kesintisiz konuşma (yaklaşık 2 dakika). Aşağıdaki konu hakkında tek başınıza konuşun. Sonra sınav görevlisi size birkaç soru sorabilir. Günün en sevdiğiniz anını anlatın.",
      en: "Monologue (about 2 minutes). Speak on your own about the topic below. Then the examiner may ask you a few questions. Talk about your favourite moment of the day."
    },
    topic: "Parlez de votre moment préféré de la journée.",
    hints: [
      "Quel moment ?",
      "Ce que vous faites",
      "Où et avec qui",
      "Avant, c'était le même moment ?",
      "Pourquoi c'est important pour vous"
    ],
    must: [
      { c: "Dire quel moment", kw: ["le matin", "le soir", "le midi", "l'après-midi", "l'apres-midi", "moment", "heures"] },
      { c: "Dire ce que vous faites (présent)", kw: ["je fais", "je prends", "je bois", "je lis", "j'écoute", "j'ecoute", "je me lève", "je me leve", "je me promène", "je me promene"] },
      { c: "Comparer avec avant (imparfait)", kw: ["avant", "quand j'étais", "quand j'etais", "je préférais", "je preferais", "je détestais", "je detestais", "je me levais", "maintenant"] },
      { c: "Expliquer pourquoi", kw: ["parce que", "calme", "important", "pour moi", "je me sens", "me détendre", "me detendre"] }
    ],
    model: "Mon moment préféré de la journée, c'est le matin, très tôt, avant 7 heures. Je me lève, j'ouvre la fenêtre et je bois un grand verre d'eau. Ensuite, je fais dix minutes d'étirements dans le salon, puis je prends mon thé tranquillement, près de la fenêtre. Je ne regarde pas mon téléphone : j'écoute les oiseaux ou une chanson calme. Avant, quand j'étais étudiante, je détestais le matin ! Je me levais toujours en retard et je courais pour prendre le bus. Je préférais le soir, parce que je sortais avec mes amis. Maintenant, c'est différent. Ce moment du matin est important pour moi, parce que je me prépare pour la journée. Je me sens calme et plus forte." },
  { id: "a2-s18-po3", level: "A2", sujet: 18, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Chez le médecin",
    consigne: "Exercice en interaction (3 minutes environ). Vous êtes chez le médecin. Vous expliquez votre problème, vous répondez à ses questions et vous demandez des conseils pour continuer le sport. L'examinateur joue le rôle du médecin.",
    help: {
      tr: "Etkileşimli alıştırma (yaklaşık 3 dakika). Doktordasınız. Sorununuzu anlatıyor, sorularına cevap veriyor ve spora devam etmek için tavsiye istiyorsunuz. Sınav görevlisi doktoru oynuyor.",
      en: "Interaction (about 3 minutes). You are at the doctor's. You explain your problem, answer the doctor's questions and ask for advice so you can keep doing sport. The examiner plays the doctor."
    },
    scenario: "Depuis une semaine, vous avez mal au genou droit. La douleur a commencé après une course de 10 km. Vous courez trois fois par semaine.",
    you: "Vous êtes la patiente / le patient.",
    them: "L'examinateur est le médecin (vous vous vouvoyez).",
    must: [
      { c: "Dire où vous avez mal", kw: ["j'ai mal", "mal au genou", "genou", "douleur", "ça fait mal", "ca fait mal", "me faire mal"] },
      { c: "Dire depuis quand et comment c'est arrivé", kw: ["depuis", "une semaine", "après", "apres", "course", "j'ai couru", "kilomètres", "kilometres"] },
      { c: "Répondre aux questions du médecin", kw: ["trois fois", "je cours", "escaliers", "glace", "médicament", "medicament", "le matin"] },
      { c: "Demander des conseils", kw: ["est-ce que je peux", "je peux", "combien de temps", "qu'est-ce que je dois", "conseil", "continuer", "reprendre"] }
    ],
    model: [
      ["E", "Bonjour madame. Asseyez-vous. Qu'est-ce qui ne va pas ?"],
      ["C", "Bonjour docteur. J'ai mal au genou droit depuis une semaine."],
      ["E", "Comment est-ce que la douleur a commencé ?"],
      ["C", "Dimanche dernier, j'ai couru 10 kilomètres. Après la course, mon genou a commencé à me faire mal."],
      ["E", "Vous faites du sport souvent ?"],
      ["C", "Oui, je cours trois fois par semaine, en général 5 ou 6 kilomètres."],
      ["E", "Je vois. Ça vous fait mal quand vous marchez ?"],
      ["C", "Un peu, surtout quand je descends les escaliers. Le matin, c'est plus difficile."],
      ["E", "Vous avez pris des médicaments ?"],
      ["C", "Non, j'ai seulement mis de la glace le soir."],
      ["E", "Bien. Je pense que c'est une petite inflammation. Il faut vous reposer."],
      ["C", "Est-ce que je peux continuer à courir ? Le sport est très important pour moi."],
      ["E", "Pas pendant deux semaines. Mais vous pouvez nager ou faire du vélo doucement."],
      ["C", "D'accord, je vais aller à la piscine. Merci beaucoup, docteur. Au revoir !"]
    ] },

  /* ---------- Sujet 19 ---------- */
  { id: "a2-s19-po1", level: "A2", sujet: 19, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Musique et sorties",
    consigne: "Entretien dirigé (1 minute 30 environ). Vous vous présentez et vous répondez aux questions de l'examinateur sur votre vie, vos activités, votre passé et vos projets.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1,5 dakika). Kendinizi tanıtın ve sınav görevlisinin hayatınız, etkinlikleriniz, geçmişiniz ve planlarınız hakkındaki sorularını cevaplayın.",
      en: "Guided interview (about 1.5 minutes). Introduce yourself and answer the examiner's questions about your life, activities, past and plans."
    },
    prompts: [
      { q: "Quel genre de musique écoutez-vous ?", m: "J'écoute de la pop et de la musique turque. Pour courir, j'écoute de la musique rapide !" },
      { q: "Vous jouez d'un instrument ?", m: "Non, mais quand j'étais petite, j'ai pris des cours de piano pendant deux ans." },
      { q: "Vous êtes déjà allée à un concert en France ?", m: "Oui, le mois dernier, je suis allée à un concert gratuit dans un parc. C'était super." },
      { q: "Vous connaissez des chanteurs ou des chanteuses en français ?", m: "Je connais Édith Piaf et Stromae. J'écoute leurs chansons pour apprendre des mots." },
      { q: "Le samedi soir, qu'est-ce que vous aimez faire ?", m: "J'aime dîner avec des amis ou, de temps en temps, aller danser." },
      { q: "Qu'est-ce que vous faisiez le soir dans votre pays ?", m: "Je sortais souvent avec mes amis. Nous allions au cinéma ou nous jouions aux cartes dans un café." },
      { q: "Quelle sortie avez-vous envie de faire bientôt ?", m: "J'ai envie d'aller voir un spectacle de danse. Je vais regarder le programme du théâtre." }
    ] },
  { id: "a2-s19-po2", level: "A2", sujet: 19, sec: "po", ex: 2, pts: 8, kind: "monologue",
    title: "Le métier de mes rêves d'enfant",
    consigne: "Monologue suivi (2 minutes environ). Vous parlez seul(e) du sujet suivant. Ensuite, l'examinateur peut vous poser quelques questions. Quand vous étiez enfant, quel métier vouliez-vous faire ? Parlez-en.",
    help: {
      tr: "Kesintisiz konuşma (yaklaşık 2 dakika). Aşağıdaki konu hakkında tek başınıza konuşun. Sonra sınav görevlisi size birkaç soru sorabilir. Çocukken hangi mesleği yapmak istiyordunuz? Anlatın.",
      en: "Monologue (about 2 minutes). Speak on your own about the topic below. Then the examiner may ask you a few questions. When you were a child, what job did you want to do? Talk about it."
    },
    topic: "Quand vous étiez enfant, quel métier vouliez-vous faire ? Parlez-en.",
    hints: [
      "Le métier et votre âge",
      "Pourquoi ce métier vous plaisait",
      "Vos jeux d'enfant autour de ce métier",
      "Ce qui a changé ensuite",
      "Votre métier ou vos projets aujourd'hui"
    ],
    must: [
      { c: "Dire quel métier vous vouliez faire", kw: ["je voulais", "je voulais être", "je voulais etre", "devenir", "métier", "metier", "vétérinaire", "veterinaire"] },
      { c: "Expliquer à l'imparfait", kw: ["parce que", "j'aimais", "j'adorais", "je trouvais", "c'était", "c'etait", "je jouais", "j'avais"] },
      { c: "Dire ce qui a changé", kw: ["ensuite", "après", "apres", "plus tard", "j'ai découvert", "j'ai decouvert", "j'ai compris", "j'ai choisi", "j'ai commencé", "j'ai commence"] },
      { c: "Parler d'aujourd'hui et de vos projets", kw: ["aujourd'hui", "maintenant", "je voudrais", "projet", "je vais", "en france"] }
    ],
    model: "Quand j'étais petite, je voulais être vétérinaire. J'avais sept ou huit ans et j'adorais les animaux. Je trouvais les vétérinaires très gentils, parce qu'ils soignaient notre chat. À la maison, je jouais au docteur avec mes peluches : je leur mettais des pansements et je leur donnais des médicaments imaginaires ! Ensuite, au collège, j'ai découvert le sport. J'ai commencé le volley et j'ai compris une chose : je voulais toujours soigner, mais soigner des personnes, et surtout des sportifs. C'est pour ça que j'ai choisi la kinésithérapie. Aujourd'hui, je n'ai pas oublié mon rêve d'enfant : je soigne toujours, mais des humains ! Maintenant, mon projet, c'est de travailler dans ce domaine en France." },
  { id: "a2-s19-po3", level: "A2", sujet: 19, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Changer un billet de train",
    consigne: "Exercice en interaction (3 minutes environ). Vous êtes au guichet de la gare. Vous voulez changer la date de votre billet de train. Vous expliquez la situation, vous choisissez un nouveau train et vous demandez le prix. L'examinateur joue le rôle de l'employé(e) de la gare.",
    help: {
      tr: "Etkileşimli alıştırma (yaklaşık 3 dakika). Garın gişesindesiniz. Tren biletinizin tarihini değiştirmek istiyorsunuz. Durumu anlatıyor, yeni bir tren seçiyor ve fiyatı soruyorsunuz. Sınav görevlisi gar çalışanını oynuyor.",
      en: "Interaction (about 3 minutes). You are at the station ticket office. You want to change the date of your train ticket. You explain the situation, choose a new train and ask about the price. The examiner plays the station employee."
    },
    scenario: "Vous avez un billet Paris–Bordeaux pour vendredi à 18 h 04 (45 €). Votre réunion de travail finit plus tard que prévu. Vous voulez partir samedi matin, avant 11 h.",
    you: "Vous êtes la voyageuse / le voyageur.",
    them: "L'examinateur est l'employé(e) du guichet.",
    must: [
      { c: "Expliquer votre demande", kw: ["changer", "échanger", "echanger", "modifier", "billet", "vendredi", "je ne peux pas"] },
      { c: "Choisir un nouveau train", kw: ["samedi", "matin", "avant 11", "je prends", "à quelle heure", "a quelle heure", "celui de"] },
      { c: "Demander le prix", kw: ["combien", "prix", "coûte", "coute", "supplément", "supplement", "payer", "euros"] },
      { c: "Conclure poliment", kw: ["merci", "au revoir", "bonne journée", "bonne journee", "voilà", "voila", "s'il vous plaît", "s'il vous plait"] }
    ],
    model: [
      ["E", "Bonjour madame, je vous écoute."],
      ["C", "Bonjour. J'ai un billet pour Bordeaux vendredi à 18 h 04, mais je ne peux pas partir ce jour-là. Je voudrais changer mon billet."],
      ["E", "Pas de problème. Vous voulez partir quand ?"],
      ["C", "Samedi matin, avant 11 heures si possible."],
      ["E", "Il y a un train à 7 h 52 et un autre à 10 h 34."],
      ["C", "7 h 52, c'est un peu tôt. Je prends celui de 10 h 34. Il arrive à quelle heure ?"],
      ["E", "Il arrive à Bordeaux à 12 h 41."],
      ["C", "Très bien. Est-ce qu'il y a un supplément à payer ?"],
      ["E", "Oui, le nouveau billet coûte 52 euros. Vous payez donc 7 euros de plus."],
      ["C", "D'accord. Je peux payer par carte ?"],
      ["E", "Bien sûr. Vous voulez une place côté fenêtre ou côté couloir ?"],
      ["C", "Côté fenêtre, s'il vous plaît. Voilà ma carte."],
      ["E", "Voici votre nouveau billet. Bon voyage, madame !"],
      ["C", "Merci beaucoup. Bonne journée !"]
    ] },

  /* ---------- Sujet 20 ---------- */
  { id: "a2-s20-po1", level: "A2", sujet: 20, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Les vêtements et le style",
    consigne: "Entretien dirigé (1 minute 30 environ). Vous vous présentez et vous répondez aux questions de l'examinateur sur votre vie, vos activités, votre passé et vos projets.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1,5 dakika). Kendinizi tanıtın ve sınav görevlisinin hayatınız, etkinlikleriniz, geçmişiniz ve planlarınız hakkındaki sorularını cevaplayın.",
      en: "Guided interview (about 1.5 minutes). Introduce yourself and answer the examiner's questions about your life, activities, past and plans."
    },
    prompts: [
      { q: "Quels vêtements portez-vous en général ?", m: "En général, je porte un jean, un pull et des baskets. J'aime être à l'aise." },
      { q: "Vous aimez faire les magasins ?", m: "Pas beaucoup. Je préfère acheter peu de vêtements, mais de bonne qualité." },
      { q: "Quel est votre vêtement préféré ?", m: "C'est une veste en jean. Je l'ai depuis longtemps et je la porte avec tout." },
      { q: "Qu'est-ce que vous portiez pour aller à l'école ?", m: "Je portais un uniforme bleu et blanc, comme tous les élèves." },
      { q: "Qu'est-ce que vous avez acheté pour l'hiver en France ?", m: "J'ai acheté un manteau chaud et un bonnet, parce qu'il fait plus froid et plus humide ici." },
      { q: "Vous achetez des vêtements d'occasion ?", m: "Oui, parfois, dans les friperies. C'est moins cher et c'est bien pour la planète." },
      { q: "Qu'est-ce que vous allez mettre pour votre prochaine fête ?", m: "Je vais mettre une robe verte et des chaussures noires." }
    ] },
  { id: "a2-s20-po2", level: "A2", sujet: 20, sec: "po", ex: 2, pts: 8, kind: "monologue",
    title: "Une activité pour me détendre",
    consigne: "Monologue suivi (2 minutes environ). Vous parlez seul(e) du sujet suivant. Ensuite, l'examinateur peut vous poser quelques questions. Parlez d'une activité qui vous aide à vous détendre.",
    help: {
      tr: "Kesintisiz konuşma (yaklaşık 2 dakika). Aşağıdaki konu hakkında tek başınıza konuşun. Sonra sınav görevlisi size birkaç soru sorabilir. Rahatlamanıza yardımcı olan bir etkinliği anlatın.",
      en: "Monologue (about 2 minutes). Speak on your own about the topic below. Then the examiner may ask you a few questions. Talk about an activity that helps you relax."
    },
    topic: "Parlez d'une activité qui vous aide à vous détendre.",
    hints: [
      "Quelle activité ?",
      "Quand et où vous la faites",
      "Comment vous l'avez découverte",
      "Ce que vous ressentez",
      "Un conseil pour les personnes stressées"
    ],
    must: [
      { c: "Présenter l'activité", kw: ["je nage", "je fais", "j'aime", "activité", "activite", "piscine", "yoga", "je marche", "je dessine"] },
      { c: "Dire quand et où", kw: ["le soir", "le matin", "le week-end", "fois par semaine", "tous les", "dimanche", "mardi", "quartier"] },
      { c: "Raconter comment vous l'avez découverte", kw: ["j'ai découvert", "j'ai decouvert", "j'ai commencé", "j'ai commence", "il y a", "m'a dit", "au début", "au debut", "c'était", "c'etait"] },
      { c: "Dire ce que vous ressentez et donner un conseil", kw: ["calme", "je me sens", "légère", "legere", "détendue", "detendue", "stress", "conseil", "trouvez", "il faut"] }
    ],
    model: "Pour me détendre, je nage. Je vais à la piscine de mon quartier deux fois par semaine, le mardi soir et le dimanche matin. Je nage lentement, pendant quarante minutes, sans regarder ma montre. J'ai découvert cette activité il y a trois ans. À cette époque, j'avais beaucoup de stress au travail et je dormais mal. Une collègue m'a dit : « Viens nager avec moi ! » Au début, c'était difficile, mais après deux semaines, je dormais beaucoup mieux. Dans l'eau, je n'entends pas mon téléphone et je ne pense à rien. Quand je sors de la piscine, je me sens calme et légère. Mon conseil pour les personnes stressées : trouvez une activité simple et faites-la régulièrement, même vingt minutes. Ça change la vie !" },
  { id: "a2-s20-po3", level: "A2", sujet: 20, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Acheter des meubles d'occasion",
    consigne: "Exercice en interaction (3 minutes environ). Vous allez chez une personne qui vend une table et des chaises d'occasion. Vous posez des questions sur les meubles, vous discutez le prix et vous organisez le transport. L'examinateur joue le rôle du vendeur / de la vendeuse.",
    help: {
      tr: "Etkileşimli alıştırma (yaklaşık 3 dakika). İkinci el bir masa ve sandalyeler satan birinin evine gidiyorsunuz. Mobilyalar hakkında sorular soruyor, fiyat için pazarlık yapıyor ve taşımayı ayarlıyorsunuz. Sınav görevlisi satıcıyı oynuyor.",
      en: "Interaction (about 3 minutes). You go to the home of someone selling a second-hand table and chairs. You ask about the furniture, negotiate the price and arrange transport. The examiner plays the seller."
    },
    scenario: "Vous avez vu sur Internet une petite table et deux chaises à vendre : 80 €. Votre budget : 70 € maximum. Vous n'avez pas de voiture.",
    you: "Vous êtes l'acheteuse / l'acheteur.",
    them: "L'examinateur est la personne qui vend les meubles (vous vous vouvoyez).",
    must: [
      { c: "Poser des questions sur les meubles", kw: ["depuis combien de temps", "état", "etat", "solide", "solides", "abîmé", "abime", "je peux la regarder", "confortables"] },
      { c: "Discuter le prix", kw: ["prix", "euros", "cher", "je vous propose", "moins cher", "faire un prix", "70", "60"] },
      { c: "Organiser le transport", kw: ["voiture", "transport", "apporter", "livrer", "venir chercher", "camionnette", "samedi", "adresse"] },
      { c: "Conclure l'achat", kw: ["d'accord", "je les prends", "je la prends", "merci", "à samedi", "a samedi", "au revoir"] }
    ],
    model: [
      ["E", "Bonjour ! Vous venez pour la table ?"],
      ["C", "Bonjour madame. Oui, j'ai vu votre annonce sur Internet. Je peux la regarder ?"],
      ["E", "Bien sûr, elle est là, avec les deux chaises."],
      ["C", "Elle est jolie. Vous l'avez depuis combien de temps ?"],
      ["E", "Depuis quatre ans. Elle est en bon état, il y a seulement une petite marque ici."],
      ["C", "Oui, je vois. Et les chaises, elles sont solides ?"],
      ["E", "Oui, très solides. Vous pouvez vous asseoir pour essayer."],
      ["C", "Elles sont confortables. Mais 80 euros, c'est un peu cher pour moi. Je vous propose 60 euros."],
      ["E", "60, c'est un peu juste… Je peux faire 70 euros."],
      ["C", "D'accord pour 70 euros. Mais j'ai un problème : je n'ai pas de voiture."],
      ["E", "Mon fils a une camionnette. Il peut vous les apporter samedi matin, si vous voulez."],
      ["C", "Ce serait super ! J'habite à dix minutes d'ici. Je vous écris mon adresse."],
      ["E", "Parfait. Vous payez maintenant ou samedi ?"],
      ["C", "Je vous donne les 70 euros maintenant. Voilà. Merci beaucoup, madame, et à samedi !"]
    ] }
);
