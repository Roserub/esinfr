/* DELF A2 — production orale (entretien dirigé, monologue suivi, exercice en interaction), sujets 1–10 */
(window.DELF = window.DELF || []).push(
  { id: "a2-s01-po1", level: "A2", sujet: 1, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Mes études",
    consigne: "Entretien dirigé (1 minute 30 environ). Vous vous présentez et vous répondez aux questions de l'examinateur sur votre vie, vos activités, votre passé et vos projets.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1,5 dakika). Kendinizi tanıtın ve sınav görevlisinin hayatınız, etkinlikleriniz, geçmişiniz ve planlarınız hakkındaki sorularını cevaplayın.",
      en: "Guided interview (about 1.5 minutes). Introduce yourself and answer the examiner's questions about your life, activities, past and plans."
    },
    prompts: [
      { q: "Bonjour. Pouvez-vous vous présenter ?", m: "Bonjour, je m'appelle Esin. Je suis turque et j'habite en France depuis deux ans." },
      { q: "Qu'est-ce que vous avez étudié ?", m: "J'ai étudié la kinésithérapie à l'université, en Turquie." },
      { q: "Combien de temps ont duré vos études ?", m: "Mes études ont duré quatre ans." },
      { q: "Est-ce que vous avez aimé l'université ?", m: "Oui, beaucoup. Les cours pratiques étaient très intéressants." },
      { q: "Quelle matière est-ce que vous préfériez à l'école ?", m: "Je préférais le sport et la biologie." },
      {
        q: "Vous avez eu un professeur important pour vous ?",
        m: "Oui, mon professeur de sport. Il était très patient et il m'a donné envie de faire ce métier."
      },
      { q: "Vous voulez suivre une formation en France ?", m: "Oui, je voudrais faire une formation pour travailler avec des sportifs." }
    ] },
  { id: "a2-s01-po2", level: "A2", sujet: 1, sec: "po", ex: 2, pts: 8, kind: "monologue",
    title: "Mes meilleures vacances",
    consigne: "Monologue suivi (2 minutes environ). Vous parlez seul(e) du sujet suivant. Ensuite, l'examinateur peut vous poser quelques questions. Parlez de vos meilleures vacances.",
    help: {
      tr: "Kesintisiz konuşma (yaklaşık 2 dakika). Aşağıdaki konu hakkında tek başınıza konuşun. Sonra sınav görevlisi size birkaç soru sorabilir. En güzel tatilinizi anlatın.",
      en: "Monologue (about 2 minutes). Speak on your own about the topic below. Then the examiner may ask you a few questions. Talk about your best holiday."
    },
    topic: "Parlez de vos meilleures vacances.",
    hints: [
      "Où et quand ?",
      "Avec qui ?",
      "Qu'est-ce que vous avez fait ?",
      "Le temps, le logement, la nourriture",
      "Pourquoi c'était bien ?"
    ],
    must: [
      {
        c: "Dire où et quand",
        kw: ["il y a", "l'année dernière", "l'été", "en grèce", "à la mer", "pays", "île", "ile", "ans", "mois"]
      },
      { c: "Dire avec qui", kw: ["avec", "amie", "ami", "amis", "famille", "seule", "seul", "sœur", "soeur", "frère", "frere"] },
      {
        c: "Raconter les activités au passé",
        kw: [
          "j'ai",
          "je suis allée",
          "je suis allé",
          "nous avons",
          "on a",
          "nous sommes",
          "c'était",
          "c'etait",
          "il y avait",
          "j'étais",
          "j'etais",
          "visité",
          "visite",
          "nagé",
          "mangé",
          "fait",
          "vu",
          "nous visitions",
          "nous nagions"
        ]
      },
      {
        c: "Donner son avis",
        kw: [
          "c'était",
          "c'etait",
          "génial",
          "genial",
          "super",
          "magnifique",
          "j'ai adoré",
          "j'ai adore",
          "parce que",
          "beau",
          "inoubliable"
        ]
      }
    ],
    model: "Mes meilleures vacances, c'était il y a trois ans, en Grèce, sur une petite île. Je suis partie avec deux amies pendant dix jours. Nous avons loué une petite maison près de la mer. Le matin, nous nagions et l'après-midi, nous visitions les villages. Un jour, nous avons fait une promenade en bateau et nous avons vu des dauphins ! Le soir, nous mangions du poisson au restaurant du port. Il faisait chaud et le ciel était toujours bleu. C'était génial, parce que c'était calme et les gens étaient très gentils. J'ai adoré ces vacances et je voudrais retourner là-bas un jour." },
  { id: "a2-s01-po3", level: "A2", sujet: 1, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Rapporter un produit en panne",
    consigne: "Exercice en interaction (3 minutes environ). Vous avez acheté un sèche-cheveux la semaine dernière. Il ne marche plus. Vous retournez au magasin. Vous expliquez le problème et vous demandez un échange ou un remboursement. L'examinateur joue le rôle du vendeur.",
    help: {
      tr: "Etkileşimli alıştırma (yaklaşık 3 dakika). Geçen hafta bir saç kurutma makinesi aldınız. Artık çalışmıyor. Mağazaya geri dönüyorsunuz. Sorunu anlatıp değişim ya da para iadesi istiyorsunuz. Sınav görevlisi satıcıyı oynuyor.",
      en: "Interaction (about 3 minutes). Last week you bought a hairdryer. It doesn't work any more. You go back to the shop, explain the problem and ask for an exchange or a refund. The examiner plays the shop assistant."
    },
    scenario: "Votre sèche-cheveux neuf (35 €) s'est arrêté après une semaine. Vous avez le ticket de caisse.",
    you: "Vous êtes la cliente / le client.",
    them: "L'examinateur est le vendeur / la vendeuse du magasin.",
    must: [
      {
        c: "Saluer et expliquer le problème",
        kw: [
          "ne marche pas",
          "ne marche plus",
          "ne fonctionne pas",
          "ne fonctionne plus",
          "cassé",
          "casse",
          "problème",
          "probleme",
          "en panne",
          "s'est arrêté",
          "s'est arrete"
        ]
      },
      {
        c: "Dire quand vous l'avez acheté (preuve)",
        kw: ["acheté", "achete", "la semaine dernière", "la semaine derniere", "il y a", "ticket", "reçu", "recu", "facture"]
      },
      {
        c: "Demander un échange ou un remboursement",
        kw: [
          "échanger",
          "echanger",
          "échange",
          "echange",
          "rembourser",
          "remboursement",
          "remboursée",
          "remboursee",
          "un autre",
          "nouveau"
        ]
      },
      { c: "Remercier et conclure", kw: ["merci", "je vous remercie", "au revoir", "bonne journée", "bonne journee"] }
    ],
    model: [
      ["E", "Bonjour madame, je peux vous aider ?"],
      ["C", "Bonjour. J'ai acheté ce sèche-cheveux ici la semaine dernière, mais il ne marche plus."],
      ["E", "Ah bon ? Qu'est-ce qui s'est passé ?"],
      ["C", "Hier matin, je l'ai allumé et il s'est arrêté après deux minutes. Maintenant, il ne s'allume plus."],
      ["E", "Vous avez le ticket de caisse ?"],
      ["C", "Oui, le voilà. Je l'ai payé 35 euros."],
      ["E", "Merci. Vous voulez un autre sèche-cheveux ou un remboursement ?"],
      ["C", "Je préfère être remboursée, s'il vous plaît. Je ne veux pas le même modèle."],
      ["E", "Je peux vous donner un bon d'achat pour le magasin."],
      ["C", "Non, je voudrais vraiment un remboursement sur ma carte. C'est possible ?"],
      ["E", "D'accord, le produit est défectueux, alors je vous rembourse. Votre carte, s'il vous plaît."],
      ["C", "Voilà. Merci beaucoup pour votre aide."],
      ["E", "Je vous en prie. Bonne journée, madame."],
      ["C", "Merci, à vous aussi. Au revoir !"]
    ] },
  { id: "a2-s02-po1", level: "A2", sujet: 2, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Mon métier",
    consigne: "Entretien dirigé (1 minute 30 environ). Vous vous présentez et vous répondez aux questions de l'examinateur sur votre vie, vos activités, votre passé et vos projets.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1,5 dakika). Kendinizi tanıtın ve sınav görevlisinin hayatınız, etkinlikleriniz, geçmişiniz ve planlarınız hakkındaki sorularını cevaplayın.",
      en: "Guided interview (about 1.5 minutes). Introduce yourself and answer the examiner's questions about your life, activities, past and plans."
    },
    prompts: [
      {
        q: "Qu'est-ce que vous faites comme travail ?",
        m: "Je suis kinésithérapeute. Je soigne des personnes qui ont mal au dos ou aux jambes."
      },
      { q: "Depuis combien de temps est-ce que vous faites ce métier ?", m: "Je fais ce métier depuis six ans." },
      { q: "Comment avez-vous trouvé votre travail en France ?", m: "J'ai envoyé mon CV à plusieurs cabinets et j'ai passé un entretien." },
      { q: "Comment se passe une journée de travail typique ?", m: "Je commence à 8 h 30. Je vois huit ou dix patients par jour." },
      { q: "Qu'est-ce qui est difficile dans votre métier ?", m: "C'est fatigant et il faut bien expliquer les exercices aux patients." },
      { q: "Quel était votre premier travail ?", m: "C'était dans un hôpital, en Turquie. J'avais 23 ans et j'étais un peu stressée." },
      { q: "Quels sont vos projets professionnels ?", m: "Je voudrais travailler avec un club de sport ou ouvrir mon propre cabinet." }
    ] },
  { id: "a2-s02-po2", level: "A2", sujet: 2, sec: "po", ex: 2, pts: 8, kind: "monologue",
    title: "Mon quartier",
    consigne: "Monologue suivi (2 minutes environ). Vous parlez seul(e) du sujet suivant. Ensuite, l'examinateur peut vous poser quelques questions. Parlez de votre quartier.",
    help: {
      tr: "Kesintisiz konuşma (yaklaşık 2 dakika). Aşağıdaki konu hakkında tek başınıza konuşun. Sonra sınav görevlisi size birkaç soru sorabilir. Mahallenizi anlatın.",
      en: "Monologue (about 2 minutes). Speak on your own about the topic below. Then the examiner may ask you a few questions. Talk about your neighbourhood."
    },
    topic: "Parlez de votre quartier.",
    hints: [
      "Où se trouve-t-il ?",
      "Les commerces et les services",
      "Les voisins, les habitants",
      "Ce que vous aimez / ce que vous n'aimez pas",
      "Comment il était avant / ce qui a changé"
    ],
    must: [
      {
        c: "Décrire le quartier",
        kw: ["il y a", "quartier", "rue", "commerces", "boulangerie", "parc", "marché", "marche", "calme", "bruyant", "centre"]
      },
      { c: "Parler de vos habitudes", kw: ["je vais", "souvent", "tous les", "le samedi", "le dimanche", "j'aime aller", "d'habitude"] },
      {
        c: "Donner son avis",
        kw: ["j'aime", "je n'aime pas", "j'adore", "pratique", "agréable", "agreable", "parce que", "je me sens"]
      },
      {
        c: "Parler du passé ou d'un changement",
        kw: [
          "avant",
          "quand je suis arrivée",
          "quand je suis arrive",
          "il y avait",
          "a changé",
          "a change",
          "l'année dernière",
          "l'annee derniere",
          "était",
          "etait"
        ]
      }
    ],
    model: "J'habite dans un quartier assez calme, près du centre-ville. Il y a une boulangerie, une pharmacie, un petit supermarché et un grand parc. Le samedi matin, il y a un marché et j'adore y aller pour acheter des fruits et des légumes. Mes voisins sont sympathiques : la dame du premier étage m'a beaucoup aidée quand je suis arrivée. Avant, il n'y avait pas de piste cyclable, mais l'année dernière, la mairie en a construit une. Alors maintenant, je vais au travail à vélo. Ce que je n'aime pas, c'est le bruit le vendredi soir, à cause des bars. Mais en général, je me sens bien ici : c'est un quartier pratique et agréable." },
  { id: "a2-s02-po3", level: "A2", sujet: 2, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Réserver une chambre d'hôtel",
    consigne: "Exercice en interaction (3 minutes environ). Vous voulez passer un week-end à Annecy. Vous téléphonez à un hôtel pour réserver une chambre. Vous demandez des informations (prix, petit-déjeuner, parking) et vous réservez. L'examinateur joue le rôle du réceptionniste.",
    help: {
      tr: "Etkileşimli alıştırma (yaklaşık 3 dakika). Annecy'de bir hafta sonu geçirmek istiyorsunuz. Oda ayırtmak için bir oteli arıyorsunuz. Bilgi (fiyat, kahvaltı, otopark) isteyip rezervasyon yapıyorsunuz. Sınav görevlisi resepsiyon görevlisini oynuyor.",
      en: "Interaction (about 3 minutes). You want to spend a weekend in Annecy. You phone a hotel to book a room. You ask for information (price, breakfast, parking) and book. The examiner plays the receptionist."
    },
    scenario: "Vous partez deux nuits en voiture avec une amie, du vendredi au dimanche.",
    you: "Vous êtes la cliente / le client au téléphone.",
    them: "L'examinateur est le / la réceptionniste de l'hôtel.",
    must: [
      { c: "Saluer et dire ce que vous voulez", kw: ["réserver", "reserver", "réservation", "reservation", "chambre", "je voudrais"] },
      {
        c: "Donner les dates et le nombre de personnes",
        kw: ["juin", "nuit", "nuits", "personnes", "pour deux", "vendredi", "samedi", "dimanche", "week-end"]
      },
      {
        c: "Demander des informations",
        kw: ["prix", "combien", "petit-déjeuner", "petit-dejeuner", "parking", "wifi", "compris", "est-ce que"]
      },
      {
        c: "Confirmer et donner son nom",
        kw: ["au nom", "nom", "confirmer", "confirmation", "je la prends", "je vais prendre", "d'accord", "merci", "au revoir"]
      }
    ],
    model: [
      ["E", "Hôtel du Lac, bonjour !"],
      ["C", "Bonjour monsieur. Je voudrais réserver une chambre pour deux personnes, s'il vous plaît."],
      ["E", "Oui, pour quelles dates ?"],
      ["C", "Du vendredi 14 au dimanche 16 juin, donc deux nuits."],
      ["E", "J'ai une chambre avec vue sur le lac à 95 euros la nuit, ou une chambre côté rue à 75 euros."],
      ["C", "Je vais prendre la chambre avec vue sur le lac. Est-ce que le petit-déjeuner est compris ?"],
      ["E", "Non, il coûte 12 euros par personne."],
      ["C", "D'accord. Et est-ce qu'il y a un parking ? Nous allons venir en voiture."],
      ["E", "Oui, le parking est gratuit pour nos clients."],
      ["C", "Parfait. Nous allons arriver vers 21 heures. C'est possible ?"],
      ["E", "Pas de problème, la réception est ouverte jusqu'à 23 heures. C'est à quel nom ?"],
      ["C", "Au nom d'Esin, E-S-I-N. Vous pouvez m'envoyer une confirmation par e-mail ?"],
      ["E", "Bien sûr. Votre réservation est confirmée. Au revoir, madame !"],
      ["C", "Merci beaucoup, au revoir !"]
    ] },
  { id: "a2-s03-po1", level: "A2", sujet: 3, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Mes dernières vacances",
    consigne: "Entretien dirigé (1 minute 30 environ). Vous vous présentez et vous répondez aux questions de l'examinateur sur votre vie, vos activités, votre passé et vos projets.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1,5 dakika). Kendinizi tanıtın ve sınav görevlisinin hayatınız, etkinlikleriniz, geçmişiniz ve planlarınız hakkındaki sorularını cevaplayın.",
      en: "Guided interview (about 1.5 minutes). Introduce yourself and answer the examiner's questions about your life, activities, past and plans."
    },
    prompts: [
      { q: "Où est-ce que vous êtes allée pendant vos dernières vacances ?", m: "Je suis allée en Bretagne avec des amis." },
      { q: "Vous êtes partie combien de temps ?", m: "Nous sommes partis une semaine, au mois d'août." },
      { q: "Comment avez-vous voyagé ?", m: "Nous avons pris le train jusqu'à Rennes, puis nous avons loué une voiture." },
      { q: "Qu'est-ce que vous avez visité ?", m: "Nous avons visité Saint-Malo et nous avons marché au bord de la mer." },
      { q: "Quel temps a-t-il fait ?", m: "Il a fait beau, mais il y avait beaucoup de vent." },
      {
        q: "Quand vous étiez enfant, où est-ce que vous partiez en vacances ?",
        m: "Je partais chez mes grands-parents, au bord de la mer, en Turquie."
      },
      { q: "Où est-ce que vous voulez partir l'année prochaine ?", m: "J'aimerais visiter l'Italie, surtout Rome." }
    ] },
  { id: "a2-s03-po2", level: "A2", sujet: 3, sec: "po", ex: 2, pts: 8, kind: "monologue",
    title: "Une personne que j'admire",
    consigne: "Monologue suivi (2 minutes environ). Vous parlez seul(e) du sujet suivant. Ensuite, l'examinateur peut vous poser quelques questions. Parlez d'une personne que vous admirez.",
    help: {
      tr: "Kesintisiz konuşma (yaklaşık 2 dakika). Aşağıdaki konu hakkında tek başınıza konuşun. Sonra sınav görevlisi size birkaç soru sorabilir. Hayran olduğunuz bir kişiyi anlatın.",
      en: "Monologue (about 2 minutes). Speak on your own about the topic below. Then the examiner may ask you a few questions. Talk about a person you admire."
    },
    topic: "Parlez d'une personne que vous admirez.",
    hints: [
      "Qui est cette personne ?",
      "Comment est-elle (physique, caractère) ?",
      "Comment l'avez-vous connue ?",
      "Un souvenir avec elle",
      "Pourquoi vous l'admirez"
    ],
    must: [
      {
        c: "Présenter la personne",
        kw: ["la personne", "j'admire", "elle s'appelle", "il s'appelle", "s'appelle", "c'est ma", "c'est mon"]
      },
      {
        c: "La décrire",
        kw: [
          "elle est",
          "il est",
          "gentille",
          "gentil",
          "courageuse",
          "courageux",
          "patiente",
          "patient",
          "drôle",
          "drole",
          "cheveux",
          "yeux",
          "grande",
          "petite"
        ]
      },
      {
        c: "Raconter un souvenir",
        kw: [
          "j'ai",
          "je suis allée",
          "je suis allé",
          "nous avons",
          "on a",
          "nous sommes",
          "c'était",
          "c'etait",
          "il y avait",
          "j'étais",
          "j'etais",
          "quand j'avais",
          "un jour",
          "elle m'a",
          "il m'a",
          "souvenir"
        ]
      },
      { c: "Expliquer pourquoi", kw: ["parce que", "j'admire", "admire", "exemple", "pour moi", "grâce à", "grace a"] }
    ],
    model: "La personne que j'admire, c'est mon ancienne entraîneuse de handball, en Turquie. Elle s'appelle Zeynep. Elle est petite, elle a les cheveux courts et elle sourit toujours. Elle est très patiente et courageuse. Je l'ai connue quand j'avais quatorze ans. À cette époque, j'étais timide et je ne parlais pas beaucoup. Elle m'a appris à jouer en équipe et à avoir confiance en moi. Un jour, nous avons perdu un match important et j'ai pleuré. Elle m'a dit : « Ce n'est pas grave, on apprend toujours quelque chose. » Je l'admire parce qu'elle aide les jeunes filles à faire du sport. Pour moi, c'est un exemple." },
  { id: "a2-s03-po3", level: "A2", sujet: 3, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Organiser une sortie",
    consigne: "Exercice en interaction (3 minutes environ). Vous téléphonez à un(e) ami(e) français(e) pour sortir ensemble samedi. Vous proposez une activité, vous discutez et vous choisissez ensemble l'heure et le lieu du rendez-vous. L'examinateur joue le rôle de votre ami(e).",
    help: {
      tr: "Etkileşimli alıştırma (yaklaşık 3 dakika). Cumartesi birlikte dışarı çıkmak için Fransız bir arkadaşınızı arıyorsunuz. Bir etkinlik öneriyor, konuşuyor ve buluşma saatini ve yerini birlikte seçiyorsunuz. Sınav görevlisi arkadaşınızı oynuyor.",
      en: "Interaction (about 3 minutes). You phone a French friend to go out together on Saturday. You suggest an activity, discuss it and choose the time and meeting place together. The examiner plays your friend."
    },
    scenario: "Il y a un match de handball samedi soir au palais des sports. Votre ami(e) travaille samedi après-midi.",
    you: "Vous êtes vous-même.",
    them: "L'examinateur est votre ami(e) Camille (vous vous tutoyez).",
    must: [
      {
        c: "Proposer une activité",
        kw: ["ça te dit", "ca te dit", "tu veux", "on pourrait", "si on", "je propose", "on va", "tu es libre"]
      },
      {
        c: "Réagir aux propositions",
        kw: [
          "d'accord",
          "bonne idée",
          "bonne idee",
          "je préfère",
          "je prefere",
          "pourquoi pas",
          "plutôt",
          "plutot",
          "je ne peux pas",
          "pas de problème",
          "pas de probleme"
        ]
      },
      {
        c: "Fixer l'heure et le lieu",
        kw: [
          "heure",
          "heures",
          "rendez-vous",
          "devant",
          "on se retrouve",
          "à côté",
          "a cote",
          "à quelle heure",
          "a quelle heure"
        ]
      },
      {
        c: "Conclure",
        kw: ["à samedi", "a samedi", "à bientôt", "a bientot", "salut", "bisous", "bonne soirée", "bonne soiree", "super"]
      }
    ],
    model: [
      ["E", "Allô ?"],
      ["C", "Salut Camille, c'est Esin ! Tu vas bien ?"],
      ["E", "Oui, très bien, et toi ?"],
      ["C", "Ça va ! Dis, tu es libre samedi ? Ça te dit d'aller voir un match de handball ?"],
      ["E", "Samedi après-midi, je ne peux pas, je travaille. Le match est à quelle heure ?"],
      ["C", "Il commence à 20 h 30, au palais des sports."],
      ["E", "D'accord ! Et avant, on pourrait dîner ensemble ?"],
      ["C", "Bonne idée ! Il y a une pizzeria à côté. On se retrouve à 19 heures ?"],
      ["E", "19 heures, c'est un peu tôt pour moi. Plutôt 19 h 15 ?"],
      ["C", "Pas de problème. Ce soir, j'achète les billets sur Internet. Ils coûtent 12 euros."],
      ["E", "Super, merci ! On se retrouve où ?"],
      ["C", "Devant la pizzeria, à 19 h 15."],
      ["E", "Parfait. À samedi alors !"],
      ["C", "À samedi, bonne soirée !"]
    ] },
  { id: "a2-s04-po1", level: "A2", sujet: 4, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Mes projets",
    consigne: "Entretien dirigé (1 minute 30 environ). Vous vous présentez et vous répondez aux questions de l'examinateur sur votre vie, vos activités, votre passé et vos projets.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1,5 dakika). Kendinizi tanıtın ve sınav görevlisinin hayatınız, etkinlikleriniz, geçmişiniz ve planlarınız hakkındaki sorularını cevaplayın.",
      en: "Guided interview (about 1.5 minutes). Introduce yourself and answer the examiner's questions about your life, activities, past and plans."
    },
    prompts: [
      { q: "Qu'est-ce que vous allez faire après cet examen ?", m: "Je vais continuer à apprendre le français et je vais préparer le DELF B1." },
      { q: "Pourquoi est-ce que vous passez le DELF ?", m: "J'en ai besoin pour mon travail et pour ma vie en France." },
      { q: "Est-ce que vous voulez rester en France ?", m: "Oui, je voudrais rester en France. J'aime la vie ici." },
      { q: "Qu'est-ce que vous ferez l'été prochain ?", m: "L'été prochain, je rentrerai en Turquie pour voir ma famille." },
      { q: "Vous avez un projet sportif ?", m: "Oui, je voudrais jouer en compétition avec mon équipe de handball." },
      { q: "Où est-ce que vous aimeriez habiter dans dix ans ?", m: "J'aimerais habiter dans une maison près de la mer, avec un jardin." },
      { q: "Qu'est-ce que vous avez déjà fait pour vos projets ?", m: "J'ai suivi des cours de français et j'ai rencontré des kinés français." }
    ] },
  { id: "a2-s04-po2", level: "A2", sujet: 4, sec: "po", ex: 2, pts: 8, kind: "monologue",
    title: "Mon sport préféré",
    consigne: "Monologue suivi (2 minutes environ). Vous parlez seul(e) du sujet suivant. Ensuite, l'examinateur peut vous poser quelques questions. Parlez de votre sport préféré.",
    help: {
      tr: "Kesintisiz konuşma (yaklaşık 2 dakika). Aşağıdaki konu hakkında tek başınıza konuşun. Sonra sınav görevlisi size birkaç soru sorabilir. En sevdiğiniz sporu anlatın.",
      en: "Monologue (about 2 minutes). Speak on your own about the topic below. Then the examiner may ask you a few questions. Talk about your favourite sport."
    },
    topic: "Parlez de votre sport préféré.",
    hints: [
      "Quel sport ? Depuis quand ?",
      "Où, avec qui, combien de fois par semaine ?",
      "Les règles ou le matériel",
      "Un bon souvenir (un match, une compétition)",
      "Pourquoi vous l'aimez"
    ],
    must: [
      {
        c: "Présenter le sport",
        kw: [
          "handball",
          "football",
          "natation",
          "tennis",
          "sport",
          "je joue",
          "je fais",
          "préféré",
          "prefere",
          "j'ai commencé",
          "j'ai commence"
        ]
      },
      {
        c: "Dire où, quand, avec qui",
        kw: [
          "fois par semaine",
          "club",
          "gymnase",
          "entraînement",
          "entrainement",
          "le mardi",
          "le jeudi",
          "équipe",
          "equipe",
          "avec"
        ]
      },
      {
        c: "Raconter un souvenir",
        kw: [
          "j'ai",
          "je suis allée",
          "je suis allé",
          "nous avons",
          "on a",
          "nous sommes",
          "c'était",
          "c'etait",
          "il y avait",
          "j'étais",
          "j'etais",
          "gagné",
          "gagne",
          "perdu",
          "match",
          "tournoi",
          "quand j'avais"
        ]
      },
      { c: "Dire pourquoi vous l'aimez", kw: ["j'aime", "j'adore", "parce que", "grâce à", "grace a", "génial", "genial"] }
    ],
    model: "Mon sport préféré, c'est le handball. J'ai commencé quand j'avais douze ans, à l'école, en Turquie. Maintenant, je joue dans un club en France, deux fois par semaine, le mardi et le jeudi soir, dans un gymnase près de chez moi. C'est un sport d'équipe : il y a sept joueurs dans chaque équipe et on joue avec les mains. Il faut courir vite et bien communiquer. Mon meilleur souvenir, c'est un tournoi au lycée : nous avons gagné la finale à la dernière minute et toute l'équipe a crié de joie ! J'adore le handball parce que c'est rapide et parce que j'ai rencontré beaucoup d'amis grâce à ce sport." },
  { id: "a2-s04-po3", level: "A2", sujet: 4, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "S'inscrire à un club de sport",
    consigne: "Exercice en interaction (3 minutes environ). Vous voulez vous inscrire dans un club d'escalade. Vous allez à l'accueil du club. Vous demandez des informations (horaires, prix, matériel, documents) et vous vous inscrivez. L'examinateur joue le rôle de l'employé du club.",
    help: {
      tr: "Etkileşimli alıştırma (yaklaşık 3 dakika). Bir tırmanış kulübüne kaydolmak istiyorsunuz. Kulübün danışmasına gidiyorsunuz. Bilgi (saatler, fiyat, malzeme, belgeler) isteyip kaydolursunuz. Sınav görevlisi kulüp çalışanını oynuyor.",
      en: "Interaction (about 3 minutes). You want to join a climbing club. You go to the club's reception. You ask for information (times, price, equipment, documents) and sign up. The examiner plays the club employee."
    },
    scenario: "Vous êtes débutant(e) en escalade. Vous êtes libre le mercredi soir et le samedi.",
    you: "Vous êtes la personne qui veut s'inscrire.",
    them: "L'examinateur est l'employé(e) du club.",
    must: [
      {
        c: "Dire ce que vous voulez",
        kw: [
          "inscrire",
          "m'inscrire",
          "inscription",
          "escalade",
          "je voudrais",
          "débutante",
          "debutante",
          "débutant",
          "debutant"
        ]
      },
      {
        c: "Demander les horaires et les cours",
        kw: ["horaires", "à quelle heure", "a quelle heure", "quand", "jours", "cours", "mercredi", "samedi"]
      },
      {
        c: "Demander le prix et le matériel",
        kw: ["prix", "combien", "coûte", "coute", "tarif", "matériel", "materiel", "chaussures", "louer", "acheter"]
      },
      { c: "Demander les documents", kw: ["documents", "certificat", "médical", "medical", "formulaire", "photo", "papiers", "apporter"] }
    ],
    model: [
      ["E", "Bonjour, bienvenue au club ! Je peux vous renseigner ?"],
      ["C", "Bonjour. Je voudrais m'inscrire, s'il vous plaît. Je suis débutante."],
      ["E", "Très bien. Pour les débutants, il y a des cours le mercredi soir et le samedi matin."],
      ["C", "Le mercredi soir, ça m'intéresse. Les cours sont à quelle heure ?"],
      ["E", "De 19 heures à 20 h 30."],
      ["C", "Et combien coûte l'inscription ?"],
      ["E", "220 euros pour l'année, ou 25 euros par mois."],
      ["C", "Est-ce qu'il faut acheter du matériel ?"],
      ["E", "Non, pour commencer, le club vous prête les chaussures et le matériel."],
      ["C", "Super. Quels documents est-ce que je dois apporter ?"],
      ["E", "Un certificat médical, une photo et ce formulaire rempli."],
      ["C", "D'accord. Est-ce que je peux faire un cours d'essai avant de payer ?"],
      ["E", "Oui, le premier cours est gratuit. Venez mercredi !"],
      ["C", "Parfait, merci beaucoup. À mercredi !"]
    ] },
  { id: "a2-s05-po1", level: "A2", sujet: 5, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Ma vie en France",
    consigne: "Entretien dirigé (1 minute 30 environ). Vous vous présentez et vous répondez aux questions de l'examinateur sur votre vie, vos activités, votre passé et vos projets.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1,5 dakika). Kendinizi tanıtın ve sınav görevlisinin hayatınız, etkinlikleriniz, geçmişiniz ve planlarınız hakkındaki sorularını cevaplayın.",
      en: "Guided interview (about 1.5 minutes). Introduce yourself and answer the examiner's questions about your life, activities, past and plans."
    },
    prompts: [
      { q: "Depuis quand est-ce que vous habitez en France ?", m: "J'habite en France depuis deux ans." },
      { q: "Pourquoi est-ce que vous êtes venue en France ?", m: "Je suis venue pour le travail et parce que j'aimais la culture française." },
      { q: "Qu'est-ce qui a été difficile au début ?", m: "La langue et les papiers administratifs ! C'était compliqué." },
      { q: "Qu'est-ce qui vous plaît en France ?", m: "J'aime les marchés, le pain et les petits villages." },
      { q: "Qu'est-ce qui vous manque de la Turquie ?", m: "Ma famille me manque, et aussi la cuisine de ma mère." },
      { q: "Vous avez des amis français ? Comment les avez-vous rencontrés ?", m: "Oui, je les ai rencontrés au club de handball." },
      {
        q: "Comment était votre vie en Turquie ?",
        m: "J'habitais dans une grande ville. Je travaillais beaucoup et je sortais souvent avec mes amis."
      }
    ] },
  { id: "a2-s05-po2", level: "A2", sujet: 5, sec: "po", ex: 2, pts: 8, kind: "monologue",
    title: "Un week-end typique",
    consigne: "Monologue suivi (2 minutes environ). Vous parlez seul(e) du sujet suivant. Ensuite, l'examinateur peut vous poser quelques questions. Parlez d'un week-end typique pour vous.",
    help: {
      tr: "Kesintisiz konuşma (yaklaşık 2 dakika). Aşağıdaki konu hakkında tek başınıza konuşun. Sonra sınav görevlisi size birkaç soru sorabilir. Sizin için tipik bir hafta sonunu anlatın.",
      en: "Monologue (about 2 minutes). Speak on your own about the topic below. Then the examiner may ask you a few questions. Talk about a typical weekend for you."
    },
    topic: "Parlez d'un week-end typique pour vous.",
    hints: [
      "Le samedi : matin, après-midi, soir",
      "Le dimanche",
      "Les personnes que vous voyez",
      "Le week-end dernier : qu'est-ce que vous avez fait ?",
      "Ce que vous préférez"
    ],
    must: [
      {
        c: "Dire vos habitudes",
        kw: ["en général", "d'habitude", "souvent", "le samedi", "le dimanche", "je fais", "je vais", "je me lève", "je me leve"]
      },
      { c: "Organiser dans le temps", kw: ["matin", "après-midi", "apres-midi", "soir", "ensuite", "puis", "heures"] },
      {
        c: "Raconter le week-end dernier",
        kw: [
          "le week-end dernier",
          "samedi dernier",
          "dimanche dernier",
          "j'ai",
          "je suis allée",
          "je suis allé",
          "nous avons",
          "on a",
          "nous sommes",
          "c'était",
          "c'etait",
          "il y avait",
          "j'étais",
          "j'etais"
        ]
      },
      {
        c: "Donner son avis",
        kw: ["j'aime", "je préfère", "je prefere", "j'adore", "parce que", "reposant", "agréable", "agreable"]
      }
    ],
    model: "En général, le samedi matin, je me lève vers neuf heures et je prends un long petit-déjeuner. Ensuite, je fais les courses au marché. L'après-midi, je fais le ménage ou je vais en ville avec une amie. Le samedi soir, d'habitude, j'ai un match de handball ou je dîne chez des amis. Le dimanche, je me repose : je lis, je téléphone à ma famille en Turquie et je cuisine pour la semaine. Le week-end dernier, c'était un peu différent. Il faisait très beau, alors nous avons fait un pique-nique au bord du lac avec mon équipe. Nous avons joué au volley et nous avons beaucoup ri. J'aime les week-ends parce que j'ai enfin le temps de voir les gens que j'aime." },
  { id: "a2-s05-po3", level: "A2", sujet: 5, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Demander un service au voisin",
    consigne: "Exercice en interaction (3 minutes environ). Vous partez une semaine en vacances. Vous allez chez votre voisin(e) pour lui demander d'arroser vos plantes et de prendre votre courrier. Vous expliquez ce qu'il faut faire et vous le / la remerciez. L'examinateur joue le rôle du voisin / de la voisine.",
    help: {
      tr: "Etkileşimli alıştırma (yaklaşık 3 dakika). Bir haftalığına tatile gidiyorsunuz. Komşunuza gidip çiçeklerinizi sulamasını ve postanızı almasını rica ediyorsunuz. Ne yapılması gerektiğini anlatıp teşekkür ediyorsunuz. Sınav görevlisi komşuyu oynuyor.",
      en: "Interaction (about 3 minutes). You are going on holiday for a week. You ask your neighbour to water your plants and collect your mail. You explain what to do and thank them. The examiner plays the neighbour."
    },
    scenario: "Vous partez en Turquie du 3 au 10 août. Vous connaissez bien votre voisin, M. Martin.",
    you: "Vous êtes vous-même.",
    them: "L'examinateur est votre voisin, M. Martin (vous vous vouvoyez).",
    must: [
      { c: "Saluer et s'excuser de déranger", kw: ["bonjour", "excusez-moi", "pardon", "déranger", "deranger", "monsieur", "madame"] },
      {
        c: "Demander le service",
        kw: [
          "est-ce que vous pourriez",
          "pourriez-vous",
          "vous pourriez",
          "vous pouvez",
          "service",
          "aider",
          "arroser",
          "courrier"
        ]
      },
      {
        c: "Expliquer (dates, clés, consignes)",
        kw: [
          "clés",
          "cles",
          "clé",
          "cle",
          "plantes",
          "boîte aux lettres",
          "boite aux lettres",
          "août",
          "aout",
          "semaine",
          "fois par semaine",
          "numéro",
          "numero"
        ]
      },
      {
        c: "Remercier",
        kw: ["merci", "je vous remercie", "gentil", "gentille", "rapporter", "cadeau", "à bientôt", "a bientot"]
      }
    ],
    model: [
      ["E", "Oh, bonjour ! Ça va ?"],
      [
        "C",
        "Bonjour monsieur Martin. Excusez-moi de vous déranger. Est-ce que vous pourriez me rendre un petit service ?"
      ],
      ["E", "Oui, bien sûr. Qu'est-ce qui se passe ?"],
      ["C", "Je pars en vacances en Turquie du 3 au 10 août. Est-ce que vous pourriez arroser mes plantes ?"],
      ["E", "Pas de problème. Il faut les arroser tous les jours ?"],
      ["C", "Non, deux fois par semaine, ça suffit. Je vais vous donner mes clés."],
      ["E", "D'accord. Et pour le courrier ?"],
      [
        "C",
        "Si possible, vous pouvez prendre mon courrier dans la boîte aux lettres ? La petite clé est pour la boîte."
      ],
      ["E", "Bien sûr. Je mets le courrier sur votre table ?"],
      ["C", "Oui, c'est parfait. Voici aussi mon numéro de téléphone, si vous avez un problème."],
      ["E", "Très bien. Partez tranquille !"],
      ["C", "Merci beaucoup, vous êtes très gentil. Je vais vous rapporter des loukoums de Turquie !"],
      ["E", "Oh, c'est gentil ! Bonnes vacances !"],
      ["C", "Merci, à bientôt !"]
    ] },
  { id: "a2-s06-po1", level: "A2", sujet: 6, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Mon enfance",
    consigne: "Entretien dirigé (1 minute 30 environ). Vous vous présentez et vous répondez aux questions de l'examinateur sur votre vie, vos activités, votre passé et vos projets.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1,5 dakika). Kendinizi tanıtın ve sınav görevlisinin hayatınız, etkinlikleriniz, geçmişiniz ve planlarınız hakkındaki sorularını cevaplayın.",
      en: "Guided interview (about 1.5 minutes). Introduce yourself and answer the examiner's questions about your life, activities, past and plans."
    },
    prompts: [
      { q: "Où est-ce que vous avez grandi ?", m: "J'ai grandi en Turquie, dans une ville au bord de la mer." },
      { q: "Comment était votre maison quand vous étiez petite ?", m: "C'était un appartement avec un grand balcon. On voyait la mer." },
      { q: "Qu'est-ce que vous faisiez après l'école ?", m: "Je jouais dehors avec mes amis ou je faisais mes devoirs." },
      { q: "Vous faisiez déjà du sport quand vous étiez enfant ?", m: "Oui, je faisais du handball à l'école et je nageais l'été." },
      { q: "Quel est votre meilleur souvenir d'enfance ?", m: "Les repas chez ma grand-mère le dimanche. Elle cuisinait très bien." },
      { q: "Vous vouliez faire quel métier quand vous étiez petite ?", m: "Je voulais être médecin ou joueuse de handball." },
      {
        q: "Est-ce que votre vie a beaucoup changé depuis ?",
        m: "Oui ! Maintenant, j'habite dans un autre pays et je parle une nouvelle langue."
      }
    ] },
  { id: "a2-s06-po2", level: "A2", sujet: 6, sec: "po", ex: 2, pts: 8, kind: "monologue",
    title: "Une fête de mon pays",
    consigne: "Monologue suivi (2 minutes environ). Vous parlez seul(e) du sujet suivant. Ensuite, l'examinateur peut vous poser quelques questions. Parlez d'une fête importante dans votre pays.",
    help: {
      tr: "Kesintisiz konuşma (yaklaşık 2 dakika). Aşağıdaki konu hakkında tek başınıza konuşun. Sonra sınav görevlisi size birkaç soru sorabilir. Ülkenizdeki önemli bir bayramı anlatın.",
      en: "Monologue (about 2 minutes). Speak on your own about the topic below. Then the examiner may ask you a few questions. Talk about an important celebration in your country."
    },
    topic: "Parlez d'une fête importante dans votre pays.",
    hints: [
      "Quelle fête ? Quand ?",
      "Les préparations",
      "Ce qu'on mange, ce qu'on fait",
      "Un souvenir de cette fête",
      "Une fête française que vous connaissez"
    ],
    must: [
      { c: "Présenter la fête", kw: ["fête", "fete", "bayram", "nouvel an", "ramadan", "jours", "mois", "elle dure", "c'est"] },
      {
        c: "Décrire les traditions",
        kw: [
          "on mange",
          "on prépare",
          "on prepare",
          "on visite",
          "on rend visite",
          "on offre",
          "cadeaux",
          "famille",
          "bonbons",
          "baklava",
          "baklavas"
        ]
      },
      {
        c: "Raconter un souvenir",
        kw: [
          "j'ai",
          "je suis allée",
          "je suis allé",
          "nous avons",
          "on a",
          "nous sommes",
          "c'était",
          "c'etait",
          "il y avait",
          "j'étais",
          "j'etais",
          "quand j'étais",
          "quand j'etais",
          "j'adorais",
          "j'allais",
          "souvenir"
        ]
      },
      { c: "Comparer ou donner son avis", kw: ["en france", "noël", "noel", "j'aime", "j'adore", "parce que", "important", "comme"] }
    ],
    model: "En Turquie, une fête très importante, c'est le Şeker Bayramı, la fête du sucre. Elle arrive à la fin du ramadan et elle dure trois jours. Avant la fête, on nettoie la maison et on achète des vêtements neufs. Le matin, les enfants embrassent la main des grands-parents et ils reçoivent des bonbons ou un peu d'argent. On rend visite à toute la famille et on mange beaucoup de baklavas ! Quand j'étais petite, j'adorais cette fête parce que j'allais de maison en maison avec mes cousins. L'année dernière, je n'étais pas en Turquie, alors j'ai appelé ma famille en vidéo. En France, j'aime bien Noël : c'est un peu la même ambiance familiale." },
  { id: "a2-s06-po3", level: "A2", sujet: 6, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Changer un rendez-vous médical",
    consigne: "Exercice en interaction (3 minutes environ). Vous avez rendez-vous chez le médecin jeudi, mais vous ne pouvez pas y aller. Vous téléphonez au cabinet médical. Vous expliquez pourquoi et vous choisissez un autre rendez-vous. L'examinateur joue le rôle de la secrétaire.",
    help: {
      tr: "Etkileşimli alıştırma (yaklaşık 3 dakika). Perşembe günü doktor randevunuz var ama gidemiyorsunuz. Muayenehaneyi arıyorsunuz. Nedenini açıklayıp başka bir randevu seçiyorsunuz. Sınav görevlisi sekreteri oynuyor.",
      en: "Interaction (about 3 minutes). You have a doctor's appointment on Thursday but cannot go. You phone the surgery, explain why and choose another appointment. The examiner plays the secretary."
    },
    scenario: "Votre rendez-vous est jeudi à 10 heures, pour une douleur à l'épaule. Jeudi, vous avez une formation pour votre travail.",
    you: "Vous êtes la patiente / le patient.",
    them: "L'examinateur est la secrétaire / le secrétaire du cabinet médical.",
    must: [
      { c: "Se présenter", kw: ["bonjour", "je m'appelle", "c'est", "au nom de", "madame", "monsieur"] },
      {
        c: "Expliquer le problème",
        kw: ["rendez-vous", "jeudi", "je ne peux pas", "empêchement", "empechement", "parce que", "formation", "travail"]
      },
      {
        c: "Choisir une autre date",
        kw: [
          "changer",
          "déplacer",
          "deplacer",
          "autre",
          "lundi",
          "mardi",
          "mercredi",
          "vendredi",
          "possible",
          "plutôt",
          "plutot",
          "heures",
          "ça me va",
          "ca me va",
          "c'est parfait"
        ]
      },
      {
        c: "Confirmer et remercier",
        kw: ["d'accord", "parfait", "merci", "au revoir", "à lundi", "a lundi", "bonne journée", "bonne journee"]
      }
    ],
    model: [
      ["E", "Cabinet du docteur Lefèvre, bonjour."],
      ["C", "Bonjour madame. Je m'appelle Esin. J'ai un rendez-vous avec le docteur jeudi à 10 heures."],
      ["E", "Oui, je vois. Qu'est-ce que je peux faire pour vous ?"],
      [
        "C",
        "Je ne peux pas venir jeudi, parce que j'ai une formation pour mon travail. Est-ce que je peux changer mon rendez-vous ?"
      ],
      ["E", "Bien sûr. Vendredi matin à 9 h 30, ça vous va ?"],
      ["C", "Non, désolée, le vendredi matin, je travaille. Vous avez quelque chose en fin d'après-midi ?"],
      ["E", "Alors, lundi prochain à 18 heures ?"],
      ["C", "Lundi à 18 heures, c'est parfait."],
      ["E", "C'est toujours pour votre douleur à l'épaule ?"],
      ["C", "Oui, j'ai encore mal depuis mon dernier match. Je dois apporter quelque chose ?"],
      ["E", "Votre carte Vitale et vos radios, si vous en avez."],
      ["C", "D'accord, je vais les apporter. Merci beaucoup."],
      ["E", "Je vous en prie. À lundi, madame."],
      ["C", "Au revoir, bonne journée !"]
    ] },
  { id: "a2-s07-po1", level: "A2", sujet: 7, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Les médias et les écrans",
    consigne: "Entretien dirigé (1 minute 30 environ). Vous vous présentez et vous répondez aux questions de l'examinateur sur votre vie, vos activités, votre passé et vos projets.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1,5 dakika). Kendinizi tanıtın ve sınav görevlisinin hayatınız, etkinlikleriniz, geçmişiniz ve planlarınız hakkındaki sorularını cevaplayın.",
      en: "Guided interview (about 1.5 minutes). Introduce yourself and answer the examiner's questions about your life, activities, past and plans."
    },
    prompts: [
      { q: "Est-ce que vous regardez souvent la télévision ?", m: "Pas souvent. Je préfère regarder des séries sur mon ordinateur." },
      {
        q: "Quelle série avez-vous regardée récemment ?",
        m: "J'ai regardé une série policière française. C'était un peu difficile, mais intéressant."
      },
      { q: "Vous écoutez la radio ?", m: "Oui, j'écoute la radio française dans la voiture pour progresser." },
      { q: "Comment est-ce que vous vous informez ?", m: "Je lis les informations sur mon téléphone, en turc et en français." },
      { q: "Vous utilisez beaucoup votre téléphone ?", m: "Oui, trop ! J'envoie beaucoup de messages à ma famille." },
      {
        q: "Quand vous étiez adolescente, vous aviez un téléphone portable ?",
        m: "Oui, j'ai eu mon premier téléphone à quinze ans. Il était très simple."
      },
      {
        q: "Est-ce que vous pouvez vivre une semaine sans Internet ?",
        m: "En vacances, à la montagne, oui. Mais pour le travail, c'est impossible !"
      }
    ] },
  { id: "a2-s07-po2", level: "A2", sujet: 7, sec: "po", ex: 2, pts: 8, kind: "monologue",
    title: "Mon premier jour en France",
    consigne: "Monologue suivi (2 minutes environ). Vous parlez seul(e) du sujet suivant. Ensuite, l'examinateur peut vous poser quelques questions. Parlez de votre premier jour en France.",
    help: {
      tr: "Kesintisiz konuşma (yaklaşık 2 dakika). Aşağıdaki konu hakkında tek başınıza konuşun. Sonra sınav görevlisi size birkaç soru sorabilir. Fransa'daki ilk gününüzü anlatın.",
      en: "Monologue (about 2 minutes). Speak on your own about the topic below. Then the examiner may ask you a few questions. Talk about your first day in France."
    },
    topic: "Parlez de votre premier jour en France.",
    hints: [
      "Quand et où êtes-vous arrivé(e) ?",
      "Le voyage",
      "Vos premières impressions",
      "Une difficulté ou une surprise",
      "Ce que vous pensez aujourd'hui"
    ],
    must: [
      {
        c: "Dire quand et où",
        kw: [
          "je suis arrivée",
          "je suis arrive",
          "arrivée",
          "il y a",
          "aéroport",
          "aeroport",
          "gare",
          "septembre",
          "matin",
          "en france"
        ]
      },
      {
        c: "Décrire vos impressions",
        kw: [
          "j'étais",
          "j'etais",
          "il faisait",
          "il pleuvait",
          "fatiguée",
          "fatiguee",
          "contente",
          "stressée",
          "stressee",
          "impression",
          "c'était",
          "c'etait"
        ]
      },
      {
        c: "Raconter un événement ou une difficulté",
        kw: [
          "je n'ai rien compris",
          "je n'ai pas compris",
          "j'ai pris",
          "j'ai voulu",
          "je suis allée",
          "problème",
          "probleme",
          "difficile",
          "surprise",
          "elle m'a",
          "il m'a"
        ]
      },
      { c: "Parler d'aujourd'hui", kw: ["aujourd'hui", "maintenant", "je pense", "je me sens", "j'aime"] }
    ],
    model: "Je suis arrivée en France il y a deux ans, un matin de septembre, à l'aéroport de Paris. J'étais très fatiguée, mais aussi très contente. Il pleuvait et il faisait un peu froid. J'ai pris un taxi pour aller à mon hôtel. Le chauffeur parlait vite et je n'ai rien compris ! L'après-midi, je suis allée dans une boulangerie. Je voulais acheter une baguette, mais j'étais tellement stressée que j'ai dit « merci » au lieu de « bonjour ». La boulangère a souri et elle m'a aidée. Le soir, j'ai mangé un croissant dans ma chambre et j'ai appelé ma mère. Aujourd'hui, quand je pense à ce jour, je ris. Maintenant, je me sens bien ici et je parle beaucoup mieux." },
  { id: "a2-s07-po3", level: "A2", sujet: 7, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Louer un vélo",
    consigne: "Exercice en interaction (3 minutes environ). Vous êtes en vacances au bord de la mer. Vous voulez louer un vélo pour la journée. Vous demandez des informations (prix, horaires, casque, balade conseillée) et vous louez un vélo. L'examinateur joue le rôle du loueur.",
    help: {
      tr: "Etkileşimli alıştırma (yaklaşık 3 dakika). Deniz kenarında tatildesiniz. Bir günlüğüne bisiklet kiralamak istiyorsunuz. Bilgi (fiyat, saatler, kask, önerilen gezi) isteyip bisiklet kiralıyorsunuz. Sınav görevlisi kiralama görevlisini oynuyor.",
      en: "Interaction (about 3 minutes). You are on holiday by the sea. You want to rent a bike for the day. You ask for information (price, times, helmet, a recommended ride) and rent a bike. The examiner plays the rental agent."
    },
    scenario: "Il fait beau. Vous voulez faire une balade à vélo le long de la mer.",
    you: "Vous êtes la cliente / le client.",
    them: "L'examinateur est le loueur / la loueuse de vélos.",
    must: [
      { c: "Dire ce que vous voulez", kw: ["louer", "location", "vélo", "velo", "pour la journée", "pour la journee", "je voudrais"] },
      {
        c: "Demander le prix et les conditions",
        kw: [
          "prix",
          "combien",
          "coûte",
          "coute",
          "caution",
          "pièce d'identité",
          "piece d'identite",
          "casque",
          "cadenas",
          "compris",
          "électrique",
          "electrique"
        ]
      },
      {
        c: "Demander les horaires",
        kw: ["à quelle heure", "a quelle heure", "rapporter", "jusqu'à", "jusqu'a", "ferme", "heures", "ce soir"]
      },
      {
        c: "Demander un conseil de balade",
        kw: ["balade", "itinéraire", "itineraire", "piste", "conseiller", "conseil", "où aller", "ou aller", "plan"]
      }
    ],
    model: [
      ["E", "Bonjour ! Vous voulez louer un vélo ?"],
      ["C", "Bonjour. Oui, je voudrais louer un vélo pour la journée, s'il vous plaît."],
      ["E", "Un vélo classique ou un vélo électrique ?"],
      ["C", "Quelle est la différence de prix ?"],
      ["E", "Le vélo classique coûte 15 euros la journée, et le vélo électrique, 28 euros."],
      ["C", "Je vais prendre un vélo classique, j'aime faire du sport ! Est-ce que le casque est compris ?"],
      ["E", "Oui, le casque et le cadenas sont compris. Mais il faut laisser une pièce d'identité."],
      ["C", "D'accord, voici ma carte de séjour. Je dois rapporter le vélo à quelle heure ?"],
      ["E", "Avant 19 heures. Le magasin ferme à 19 heures."],
      ["C", "Vous pouvez me conseiller une jolie balade ?"],
      ["E", "Prenez la piste cyclable le long de la mer jusqu'au phare. C'est à 20 kilomètres."],
      ["C", "Super, merci ! Et s'il y a un problème avec le vélo ?"],
      ["E", "Appelez-nous, le numéro est sur ce plan. Bonne balade !"],
      ["C", "Merci beaucoup, à ce soir !"]
    ] },
  { id: "a2-s08-po1", level: "A2", sujet: 8, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Loisirs et culture",
    consigne: "Entretien dirigé (1 minute 30 environ). Vous vous présentez et vous répondez aux questions de l'examinateur sur votre vie, vos activités, votre passé et vos projets.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1,5 dakika). Kendinizi tanıtın ve sınav görevlisinin hayatınız, etkinlikleriniz, geçmişiniz ve planlarınız hakkındaki sorularını cevaplayın.",
      en: "Guided interview (about 1.5 minutes). Introduce yourself and answer the examiner's questions about your life, activities, past and plans."
    },
    prompts: [
      { q: "Qu'est-ce que vous faites pendant votre temps libre ?", m: "Je joue au handball, je lis et je vais parfois au cinéma." },
      { q: "Quel est le dernier livre que vous avez lu ?", m: "J'ai lu un roman turc sur une famille d'Istanbul. Il était très beau." },
      { q: "Vous êtes déjà allée à un concert en France ?", m: "Oui, je suis allée à un concert de jazz en plein air l'été dernier." },
      { q: "Vous visitez des musées ?", m: "Oui, parfois. Le mois dernier, j'ai visité un musée d'art moderne." },
      { q: "Quand vous étiez jeune, vous aviez une activité artistique ?", m: "Oui, je jouais de la guitare, mais j'ai arrêté." },
      {
        q: "Vous préférez les sorties culturelles ou sportives ?",
        m: "Je préfère les sorties sportives, mais j'aime aussi découvrir la culture française."
      },
      { q: "Quelle activité est-ce que vous voulez essayer ?", m: "Je voudrais essayer le théâtre, pour parler mieux français !" }
    ] },
  { id: "a2-s08-po2", level: "A2", sujet: 8, sec: "po", ex: 2, pts: 8, kind: "monologue",
    title: "Un film que j'ai aimé",
    consigne: "Monologue suivi (2 minutes environ). Vous parlez seul(e) du sujet suivant. Ensuite, l'examinateur peut vous poser quelques questions. Parlez d'un film que vous avez aimé.",
    help: {
      tr: "Kesintisiz konuşma (yaklaşık 2 dakika). Aşağıdaki konu hakkında tek başınıza konuşun. Sonra sınav görevlisi size birkaç soru sorabilir. Sevdiğiniz bir filmi anlatın.",
      en: "Monologue (about 2 minutes). Speak on your own about the topic below. Then the examiner may ask you a few questions. Talk about a film you liked."
    },
    topic: "Parlez d'un film que vous avez aimé.",
    hints: [
      "Le titre, le genre, le pays",
      "L'histoire en quelques phrases",
      "Les personnages",
      "Où, quand et avec qui vous l'avez vu",
      "Pourquoi vous l'avez aimé"
    ],
    must: [
      {
        c: "Présenter le film",
        kw: ["film", "s'appelle", "c'est", "comédie", "comedie", "drame", "français", "francais", "acteur", "actrice"]
      },
      {
        c: "Raconter l'histoire",
        kw: [
          "c'est l'histoire",
          "histoire",
          "raconte",
          "un homme",
          "une femme",
          "il rencontre",
          "elle rencontre",
          "au début",
          "au debut"
        ]
      },
      {
        c: "Dire quand et avec qui",
        kw: [
          "je l'ai vu",
          "j'ai vu",
          "au cinéma",
          "au cinema",
          "à la télévision",
          "a la television",
          "avec",
          "il y a",
          "l'année dernière",
          "l'annee derniere"
        ]
      },
      {
        c: "Donner son avis",
        kw: [
          "j'ai aimé",
          "j'ai aime",
          "j'ai adoré",
          "j'ai adore",
          "parce que",
          "drôle",
          "drole",
          "émouvant",
          "emouvant",
          "triste",
          "je le conseille",
          "beau"
        ]
      }
    ],
    model: "Un film que j'ai beaucoup aimé, c'est Intouchables. C'est une comédie française. C'est l'histoire de Philippe, un homme riche qui ne peut plus marcher après un accident. Il cherche une personne pour l'aider tous les jours. Il choisit Driss, un jeune homme qui n'a pas de travail. Au début, ils sont très différents, mais ils deviennent de grands amis. Je l'ai vu à la télévision il y a trois ans, avec des collègues kinés, en version originale avec des sous-titres. J'ai beaucoup ri, mais j'ai aussi été émue. J'ai adoré ce film parce qu'il parle d'amitié et de handicap avec beaucoup d'humour. Je le conseille à tout le monde !" },
  { id: "a2-s08-po3", level: "A2", sujet: 8, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Préparer une fête d'anniversaire",
    consigne: "Exercice en interaction (3 minutes environ). Avec un(e) ami(e), vous organisez une fête surprise pour l'anniversaire d'un autre ami. Vous discutez de la date, du lieu, des invités, de la nourriture et du cadeau. L'examinateur joue le rôle de votre ami(e).",
    help: {
      tr: "Etkileşimli alıştırma (yaklaşık 3 dakika). Bir arkadaşınızla başka bir arkadaşınız için sürpriz doğum günü partisi düzenliyorsunuz. Tarih, yer, davetliler, yiyecek ve hediye hakkında konuşuyorsunuz. Sınav görevlisi arkadaşınızı oynuyor.",
      en: "Interaction (about 3 minutes). With a friend, you organise a surprise birthday party for another friend. You discuss the date, place, guests, food and present. The examiner plays your friend."
    },
    scenario: "Votre ami Lucas a bientôt 30 ans. Il adore la musique. Votre appartement a un grand salon.",
    you: "Vous êtes vous-même.",
    them: "L'examinateur est votre ami(e) (vous vous tutoyez).",
    must: [
      { c: "Proposer des idées", kw: ["et si on", "si on", "on pourrait", "je propose", "tu veux", "idée", "idee", "surprise"] },
      { c: "Choisir le lieu et la date", kw: ["chez moi", "chez toi", "samedi", "le soir", "date", "salle", "restaurant", "mars"] },
      {
        c: "Parler des invités et de la nourriture",
        kw: [
          "inviter",
          "invite",
          "invités",
          "invites",
          "personnes",
          "gâteau",
          "gateau",
          "boissons",
          "apporter",
          "préparer",
          "preparer"
        ]
      },
      {
        c: "Organiser le cadeau",
        kw: ["cadeau", "offrir", "acheter", "chacun", "chaque personne", "euros", "je m'occupe", "tu t'occupes"]
      }
    ],
    model: [
      ["E", "Salut Esin ! Tu sais, c'est bientôt l'anniversaire de Lucas."],
      ["C", "Oui, le 20 mars ! Et si on organisait une fête surprise ?"],
      ["E", "Super idée ! Mais où ? Mon appartement est trop petit."],
      ["C", "On pourrait la faire chez moi. J'ai un grand salon et un balcon."],
      ["E", "Parfait. Et quel jour ?"],
      ["C", "Le samedi 22 mars, le soir. Lucas ne travaille pas le samedi."],
      ["E", "D'accord. On invite qui ?"],
      ["C", "Ses collègues, l'équipe de handball et sa sœur. Ça fait environ vingt personnes."],
      ["E", "Pour manger, on peut demander à chacun d'apporter quelque chose."],
      ["C", "Bonne idée ! Moi, je vais préparer un gâteau au chocolat et des börek."],
      ["E", "Et pour le cadeau ?"],
      [
        "C",
        "Il adore la musique. On pourrait lui offrir une enceinte. Si chaque personne donne 10 euros, c'est possible."
      ],
      ["E", "Génial ! Je m'occupe des invitations et toi, du gâteau."],
      ["C", "Ça marche. Surtout, ne dis rien à Lucas !"]
    ] },
  { id: "a2-s09-po1", level: "A2", sujet: 9, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Santé et habitudes",
    consigne: "Entretien dirigé (1 minute 30 environ). Vous vous présentez et vous répondez aux questions de l'examinateur sur votre vie, vos activités, votre passé et vos projets.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1,5 dakika). Kendinizi tanıtın ve sınav görevlisinin hayatınız, etkinlikleriniz, geçmişiniz ve planlarınız hakkındaki sorularını cevaplayın.",
      en: "Guided interview (about 1.5 minutes). Introduce yourself and answer the examiner's questions about your life, activities, past and plans."
    },
    prompts: [
      {
        q: "Qu'est-ce que vous faites pour rester en bonne santé ?",
        m: "Je fais du sport trois fois par semaine et je mange beaucoup de légumes."
      },
      { q: "Est-ce que vous avez déjà eu une blessure ?", m: "Oui, je me suis fait mal au genou pendant un match, il y a deux ans." },
      { q: "Comment est-ce que vous vous êtes soignée ?", m: "J'ai fait de la rééducation pendant deux mois. Maintenant, ça va !" },
      { q: "Vous mangez comment, en général ?", m: "Je mange équilibré, mais j'adore les desserts !" },
      {
        q: "Est-ce que vos habitudes ont changé depuis votre arrivée en France ?",
        m: "Oui, je dîne plus tôt et je mange plus de fromage qu'avant !"
      },
      { q: "Vous dormez bien ?", m: "En général, oui. Je dors sept heures par nuit." },
      { q: "Quel conseil est-ce que vous donnez à vos patients ?", m: "Je leur dis de bouger tous les jours, de marcher et de bien dormir." }
    ] },
  { id: "a2-s09-po2", level: "A2", sujet: 9, sec: "po", ex: 2, pts: 8, kind: "monologue",
    title: "Mon logement idéal",
    consigne: "Monologue suivi (2 minutes environ). Vous parlez seul(e) du sujet suivant. Ensuite, l'examinateur peut vous poser quelques questions. Parlez de votre logement idéal.",
    help: {
      tr: "Kesintisiz konuşma (yaklaşık 2 dakika). Aşağıdaki konu hakkında tek başınıza konuşun. Sonra sınav görevlisi size birkaç soru sorabilir. Hayalinizdeki evi anlatın.",
      en: "Monologue (about 2 minutes). Speak on your own about the topic below. Then the examiner may ask you a few questions. Talk about your ideal home."
    },
    topic: "Parlez de votre logement idéal.",
    hints: [
      "Où ? (en ville, à la campagne, au bord de la mer)",
      "Maison ou appartement ? Combien de pièces ?",
      "Les pièces importantes pour vous",
      "Comparez avec votre logement actuel ou passé",
      "Pourquoi ce logement ?"
    ],
    must: [
      {
        c: "Dire où",
        kw: ["au bord de la mer", "à la campagne", "a la campagne", "en ville", "près de", "pres de", "montagne", "quartier"]
      },
      {
        c: "Décrire le logement",
        kw: [
          "maison",
          "appartement",
          "pièces",
          "pieces",
          "chambres",
          "jardin",
          "balcon",
          "terrasse",
          "cuisine",
          "salon",
          "grande",
          "grand"
        ]
      },
      {
        c: "Comparer avec aujourd'hui ou avant",
        kw: ["aujourd'hui", "maintenant", "actuellement", "avant", "quand j'étais", "quand j'etais", "plus", "moins"]
      },
      {
        c: "Expliquer votre rêve",
        kw: ["je voudrais", "j'aimerais", "idéal", "ideal", "parce que", "rêve", "reve", "le plus important"]
      }
    ],
    model: "Mon logement idéal, c'est une maison au bord de la mer, près d'une petite ville. Dans cette maison, il y a trois chambres : une pour moi, une pour les invités et une pour faire du yoga. Il y a aussi une grande cuisine ouverte sur le salon, parce que j'adore cuisiner pour mes amis. Le plus important pour moi, c'est un jardin avec des arbres et une terrasse pour manger dehors en été. Aujourd'hui, j'habite dans un petit appartement en ville, au troisième étage, sans balcon. Quand j'étais enfant, notre appartement en Turquie avait un grand balcon et on voyait la mer. C'est peut-être pour ça que je rêve de la mer ! J'aimerais avoir cette maison dans dix ans." },
  { id: "a2-s09-po3", level: "A2", sujet: 9, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Un problème au restaurant",
    consigne: "Exercice en interaction (3 minutes environ). Vous êtes au restaurant. Votre plat arrive froid et ce n'est pas le plat que vous avez commandé. Vous appelez le serveur, vous expliquez le problème poliment et vous trouvez une solution ensemble. L'examinateur joue le rôle du serveur.",
    help: {
      tr: "Etkileşimli alıştırma (yaklaşık 3 dakika). Restorandasınız. Yemeğiniz soğuk geliyor ve sipariş ettiğiniz yemek değil. Garsonu çağırıyor, sorunu kibarca anlatıyor ve birlikte bir çözüm buluyorsunuz. Sınav görevlisi garsonu oynuyor.",
      en: "Interaction (about 3 minutes). You are in a restaurant. Your dish arrives cold and it is not what you ordered. You call the waiter, explain the problem politely and find a solution together. The examiner plays the waiter."
    },
    scenario: "Vous dînez avec une amie. Vous avez commandé un poisson avec des légumes. Vous avez attendu 40 minutes.",
    you: "Vous êtes la cliente / le client.",
    them: "L'examinateur est le serveur / la serveuse.",
    must: [
      { c: "Appeler poliment", kw: ["excusez-moi", "s'il vous plaît", "s'il vous plait", "pardon", "monsieur", "madame"] },
      {
        c: "Expliquer le problème",
        kw: [
          "froid",
          "commandé",
          "commande",
          "erreur",
          "problème",
          "probleme",
          "pas ce que",
          "j'ai demandé",
          "j'ai demande",
          "attendu",
          "minutes"
        ]
      },
      {
        c: "Demander une solution",
        kw: [
          "changer",
          "autre",
          "réchauffer",
          "rechauffer",
          "remplacer",
          "apporter",
          "rembourser",
          "réduction",
          "reduction",
          "tout de suite"
        ]
      },
      { c: "Accepter et conclure", kw: ["d'accord", "merci", "c'est gentil", "pas grave", "l'addition", "très bien", "tres bien"] }
    ],
    model: [
      ["C", "Excusez-moi, monsieur, s'il vous plaît !"],
      ["E", "Oui, madame ? Tout va bien ?"],
      ["C", "Pas vraiment. J'ai commandé un poisson avec des légumes, mais vous m'avez apporté un steak-frites."],
      ["E", "Oh, je suis désolé ! C'est une erreur de la cuisine."],
      ["C", "Et en plus, le plat est froid. Nous avons attendu quarante minutes."],
      ["E", "Excusez-nous, madame, il y a beaucoup de monde ce soir. Je vous apporte tout de suite le poisson ?"],
      ["C", "Oui, s'il vous plaît. Mais mon amie a déjà fini son plat… Ça va être long ?"],
      ["E", "Dix minutes maximum, c'est promis."],
      ["C", "D'accord, je vais attendre."],
      ["E", "Pour nous excuser, le dessert est offert."],
      ["C", "C'est gentil, merci. Alors nous allons prendre deux mousses au chocolat."],
      ["E", "Très bien. Encore pardon, madame."],
      ["C", "Ce n'est pas grave. Merci pour votre aide."]
    ] },
  { id: "a2-s10-po1", level: "A2", sujet: 10, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Amis et cuisine",
    consigne: "Entretien dirigé (1 minute 30 environ). Vous vous présentez et vous répondez aux questions de l'examinateur sur votre vie, vos activités, votre passé et vos projets.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1,5 dakika). Kendinizi tanıtın ve sınav görevlisinin hayatınız, etkinlikleriniz, geçmişiniz ve planlarınız hakkındaki sorularını cevaplayın.",
      en: "Guided interview (about 1.5 minutes). Introduce yourself and answer the examiner's questions about your life, activities, past and plans."
    },
    prompts: [
      { q: "Comment avez-vous rencontré votre meilleure amie ?", m: "Je l'ai rencontrée à l'université. Nous étions dans la même classe." },
      {
        q: "Qu'est-ce que vous faites quand vous voyez vos amis ?",
        m: "Nous allons au restaurant, nous faisons du sport ou nous parlons pendant des heures !"
      },
      { q: "Vous aimez cuisiner ?", m: "Oui, beaucoup. Je cuisine surtout des plats turcs." },
      {
        q: "Quel plat de votre pays est-ce que vous préparez souvent ?",
        m: "Je prépare souvent une soupe de lentilles. C'est simple et très bon."
      },
      {
        q: "Quel plat français avez-vous goûté pour la première fois en France ?",
        m: "J'ai goûté la raclette l'hiver dernier. C'était délicieux, mais très lourd !"
      },
      { q: "Qui cuisinait chez vous quand vous étiez enfant ?", m: "Ma mère et ma grand-mère. Je les regardais et j'apprenais." },
      { q: "Qu'est-ce que vous allez cuisiner pour vos prochains invités ?", m: "Je vais faire des mantı, des petits raviolis turcs." }
    ] },
  { id: "a2-s10-po2", level: "A2", sujet: 10, sec: "po", ex: 2, pts: 8, kind: "monologue",
    title: "Comment j'apprends le français",
    consigne: "Monologue suivi (2 minutes environ). Vous parlez seul(e) du sujet suivant. Ensuite, l'examinateur peut vous poser quelques questions. Parlez de votre façon d'apprendre le français.",
    help: {
      tr: "Kesintisiz konuşma (yaklaşık 2 dakika). Aşağıdaki konu hakkında tek başınıza konuşun. Sonra sınav görevlisi size birkaç soru sorabilir. Fransızcayı nasıl öğrendiğinizi anlatın.",
      en: "Monologue (about 2 minutes). Speak on your own about the topic below. Then the examiner may ask you a few questions. Talk about how you learn French."
    },
    topic: "Parlez de votre façon d'apprendre le français.",
    hints: [
      "Depuis quand et pourquoi ?",
      "Comment ? (cours, application, livres, séries…)",
      "Ce qui est facile / difficile",
      "Un progrès ou un moment drôle",
      "Vos objectifs"
    ],
    must: [
      { c: "Dire depuis quand et pourquoi", kw: ["depuis", "il y a", "j'ai commencé", "j'ai commence", "parce que", "travail", "je voulais"] },
      {
        c: "Expliquer vos méthodes",
        kw: [
          "cours",
          "application",
          "séries",
          "series",
          "films",
          "radio",
          "livres",
          "podcast",
          "cartes",
          "vocabulaire",
          "je révise",
          "je revise",
          "j'écoute",
          "j'ecoute",
          "je regarde"
        ]
      },
      {
        c: "Parler des difficultés et des progrès",
        kw: ["difficile", "facile", "prononciation", "grammaire", "verbes", "progrès", "progres", "erreurs"]
      },
      {
        c: "Dire vos objectifs",
        kw: [
          "je voudrais",
          "je vais",
          "j'aimerais",
          "objectif",
          "examen",
          "delf",
          "b1",
          "l'année prochaine",
          "l'annee prochaine"
        ]
      }
    ],
    model: "J'apprends le français depuis deux ans. J'ai commencé en Turquie, avec une application sur mon téléphone, parce que je voulais travailler en France. Aujourd'hui, j'apprends de plusieurs façons. Chaque jour, je révise du vocabulaire avec des cartes pendant quinze minutes. J'écoute aussi la radio française dans la voiture et je regarde des séries avec des sous-titres. Le plus difficile pour moi, c'est la prononciation et les verbes au passé. Mais j'ai fait des progrès : le mois dernier, j'ai parlé au téléphone avec la banque sans aide, et j'étais très fière ! Mes patients m'aident beaucoup aussi : ils corrigent mes erreurs avec gentillesse. Mon objectif, c'est d'avoir le DELF A2, puis le B1 l'année prochaine." },
  { id: "a2-s10-po3", level: "A2", sujet: 10, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Acheter un abonnement de train",
    consigne: "Exercice en interaction (3 minutes environ). Vous prenez le train tous les jours pour aller travailler dans une autre ville. Vous allez au guichet de la gare pour acheter un abonnement. Vous demandez des informations, vous comparez les prix et vous choisissez. L'examinateur joue le rôle de l'agent de la gare.",
    help: {
      tr: "Etkileşimli alıştırma (yaklaşık 3 dakika). Başka bir şehirde çalışmak için her gün trene biniyorsunuz. Abonman almak için gardaki gişeye gidiyorsunuz. Bilgi istiyor, fiyatları karşılaştırıyor ve seçiyorsunuz. Sınav görevlisi gar görevlisini oynuyor.",
      en: "Interaction (about 3 minutes). You take the train every day to work in another town. You go to the station ticket office to buy a season ticket. You ask for information, compare prices and choose. The examiner plays the station agent."
    },
    scenario: "Vous habitez à Lille et vous travaillez à Arras, du lundi au vendredi.",
    you: "Vous êtes la voyageuse / le voyageur.",
    them: "L'examinateur est l'agent(e) du guichet.",
    must: [
      { c: "Dire ce que vous voulez", kw: ["abonnement", "carte", "réduction", "reduction", "mensuel", "moins cher", "je voudrais"] },
      {
        c: "Expliquer votre trajet",
        kw: ["entre", "tous les jours", "du lundi au vendredi", "par semaine", "travail", "aller-retour", "lille", "arras"]
      },
      {
        c: "Comparer les prix",
        kw: ["combien", "prix", "coûte", "coute", "moins cher", "différence", "difference", "tarif", "par mois", "billet"]
      },
      {
        c: "Choisir et payer",
        kw: ["je prends", "je vais le prendre", "je choisis", "photo", "payer", "je paie", "carte bancaire", "d'accord", "merci"]
      }
    ],
    model: [
      ["E", "Bonjour madame, je vous écoute."],
      [
        "C",
        "Bonjour. Je prends le train tous les jours entre Lille et Arras pour aller au travail. Je voudrais un abonnement, s'il vous plaît."
      ],
      ["E", "Vous avez moins de 27 ans ? Il y a des réductions pour les jeunes."],
      ["C", "Non, j'ai plus de 27 ans."],
      ["E", "Alors je vous conseille l'abonnement mensuel. Vous voyagez tous les jours ?"],
      ["C", "Du lundi au vendredi. Mais quelquefois, je travaille à la maison le mercredi."],
      ["E", "L'abonnement mensuel coûte 98 euros. Vous pouvez prendre tous les trains entre les deux villes."],
      ["C", "Et un billet aller-retour normal, c'est combien ?"],
      ["E", "16 euros."],
      ["C", "Alors l'abonnement est beaucoup moins cher. Je vais le prendre. Il commence quand ?"],
      ["E", "Aujourd'hui, si vous voulez. Il me faut une photo d'identité."],
      ["C", "La voilà. Est-ce que mon employeur peut payer une partie ?"],
      ["E", "Oui, en France, l'employeur rembourse la moitié de l'abonnement. Je vous donne une facture."],
      ["C", "Parfait. Je paie par carte bancaire. Merci beaucoup !"]
    ] }
);
