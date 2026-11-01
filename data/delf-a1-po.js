/* DELF A1 — production orale (entretien dirigé, échange d'informations, dialogue simulé), sujets 1–10 */
(window.DELF = window.DELF || []).push(
  { id: "a1-s01-po1", level: "A1", sujet: 1, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Se présenter",
    consigne: "Entretien dirigé (1 minute environ). Vous saluez l'examinateur et vous répondez à ses questions sur vous, votre famille, vos goûts et vos activités.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1 dakika). Sınav görevlisini selamlayın ve sizin, aileniz, zevkleriniz ve etkinlikleriniz hakkındaki sorularına cevap verin.",
      en: "Guided interview (about 1 minute). Greet the examiner and answer the questions about yourself, your family, your tastes and your activities."
    },
    prompts: [
      { q: "Bonjour ! Comment vous appelez-vous ?", m: "Bonjour ! Je m'appelle Esin." },
      { q: "Comment ça s'écrit ?", m: "E, S, I, N. Esin." },
      { q: "Vous êtes de quelle nationalité ?", m: "Je suis turque." },
      { q: "Où est-ce que vous habitez ?", m: "J'habite en France, dans une petite ville." },
      { q: "Quel est votre métier ?", m: "Je suis kinésithérapeute." },
      { q: "Vous parlez quelles langues ?", m: "Je parle turc, un peu anglais et un peu français." },
      { q: "Qu'est-ce que vous aimez faire le week-end ?", m: "J'aime jouer au handball et me promener." },
      { q: "Pourquoi est-ce que vous apprenez le français ?", m: "J'habite en France et je veux parler avec les gens." }
    ] },
  { id: "a1-s01-po2", level: "A1", sujet: 1, sec: "po", ex: 2, pts: 8, kind: "echange",
    title: "Questions du quotidien",
    consigne: "Échange d'informations (2 minutes environ). Vous tirez des cartes. Avec chaque mot, vous posez une question à l'examinateur sur sa vie.",
    help: {
      tr: "Bilgi alışverişi (yaklaşık 2 dakika). Kart çekiyorsunuz. Her kelimeyle sınav görevlisine hayatı hakkında bir soru sorun.",
      en: "Information exchange (about 2 minutes). You draw cards. With each word, ask the examiner a question about his or her life."
    },
    cards: ["Petit-déjeuner ?", "Animaux ?", "Couleur ?", "Téléphone ?", "Musique ?", "Voiture ?", "Anniversaire ?"],
    prompts: [
      { q: "Petit-déjeuner ?", m: "Qu'est-ce que vous mangez au petit-déjeuner ?" },
      { q: "Animaux ?", m: "Est-ce que vous avez un animal ?" },
      { q: "Couleur ?", m: "Quelle est votre couleur préférée ?" },
      { q: "Téléphone ?", m: "Quel est votre numéro de téléphone ?" },
      { q: "Musique ?", m: "Vous aimez quelle musique ?" },
      { q: "Voiture ?", m: "Est-ce que vous avez une voiture ?" },
      { q: "Anniversaire ?", m: "Quelle est la date de votre anniversaire ?" }
    ] },
  { id: "a1-s01-po3", level: "A1", sujet: 1, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "À la boulangerie",
    consigne: "Dialogue simulé (2 minutes environ). Vous êtes dans une boulangerie. Vous achetez du pain et des viennoiseries pour le petit-déjeuner. Vous demandez le prix et vous payez. L'examinateur joue le rôle du boulanger.",
    help: {
      tr: "Canlandırma diyalog (yaklaşık 2 dakika). Bir fırındasınız. Kahvaltı için ekmek ve hamur işi alıyorsunuz. Fiyatı sorup ödeme yapıyorsunuz. Sınav görevlisi fırıncıyı oynuyor.",
      en: "Role-play (about 2 minutes). You are in a bakery. You buy bread and pastries for breakfast. You ask the price and pay. The examiner plays the baker."
    },
    scenario: "Dimanche matin, vous invitez deux amis pour le petit-déjeuner. Vous allez à la boulangerie du quartier.",
    you: "Vous êtes le client / la cliente.",
    them: "L'examinateur est le boulanger / la boulangère.",
    items: [
      { n: "une baguette", p: "1,20 €", e: "🥖" },
      { n: "un pain aux céréales", p: "2,80 €", e: "🍞" },
      { n: "un croissant", p: "1,10 €", e: "🥐" },
      { n: "un pain au chocolat", p: "1,30 €", e: "🍫" },
      { n: "un éclair au café", p: "2,50 €", e: "🍰" },
      { n: "une tarte aux pommes", p: "12,00 €", e: "🥧" }
    ],
    must: [
      { c: "Saluer le boulanger", kw: ["bonjour", "bonsoir", "salut", "madame", "monsieur"] },
      {
        c: "Demander des produits",
        kw: [
          "je voudrais",
          "je veux",
          "je prends",
          "je vais prendre",
          "vous avez",
          "avez-vous",
          "est-ce que vous avez",
          "s'il vous plaît",
          "s'il vous plait",
          "donnez-moi",
          "je cherche",
          "baguette",
          "croissant",
          "pain",
          "éclair",
          "eclair",
          "tarte"
        ]
      },
      {
        c: "Demander le prix",
        kw: [
          "combien",
          "ça fait",
          "ca fait",
          "ça coûte",
          "ca coute",
          "c'est combien",
          "prix",
          "coûte",
          "coute",
          "coûtent",
          "en tout"
        ]
      },
      {
        c: "Payer",
        kw: [
          "voilà",
          "voila",
          "voici",
          "carte",
          "espèces",
          "especes",
          "payer",
          "je paie",
          "je paye",
          "monnaie",
          "euros",
          "billet de"
        ]
      },
      {
        c: "Remercier et prendre congé",
        kw: ["au revoir", "merci", "bonne journée", "bonne journee", "bonne soirée", "bonne soiree", "à bientôt", "a bientot"]
      }
    ],
    model: [
      ["E", "Bonjour madame, qu'est-ce que vous désirez ?"],
      ["C", "Bonjour ! Je voudrais une baguette, s'il vous plaît."],
      ["E", "Voilà. Et avec ceci ?"],
      ["C", "Je voudrais aussi trois croissants et trois pains au chocolat."],
      ["E", "Très bien. C'est tout ?"],
      ["C", "Non, je prends aussi un éclair au café. Ça fait combien ?"],
      ["E", "Alors… ça fait 10,90 €."],
      ["C", "Voilà 20 euros."],
      ["E", "Merci. Je vous rends 9,10 €."],
      ["C", "Merci beaucoup. Au revoir, bonne journée !"],
      ["E", "Au revoir madame, bon dimanche !"]
    ] },
  { id: "a1-s02-po1", level: "A1", sujet: 2, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Ma famille et ma maison",
    consigne: "Entretien dirigé (1 minute environ). Vous saluez l'examinateur et vous répondez à ses questions sur vous, votre famille, vos goûts et vos activités.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1 dakika). Sınav görevlisini selamlayın ve sizin, aileniz, zevkleriniz ve etkinlikleriniz hakkındaki sorularına cevap verin.",
      en: "Guided interview (about 1 minute). Greet the examiner and answer the questions about yourself, your family, your tastes and your activities."
    },
    prompts: [
      { q: "Bonjour. Vous vous appelez comment ?", m: "Bonjour. Je m'appelle Esin." },
      { q: "Quel âge avez-vous ?", m: "J'ai 30 ans." },
      { q: "Vous avez des frères et sœurs ?", m: "Oui, j'ai un frère et une sœur." },
      { q: "Où habite votre famille ?", m: "Ma famille habite en Turquie." },
      { q: "Vous téléphonez souvent à votre famille ?", m: "Oui, je téléphone à ma mère tous les dimanches." },
      { q: "Vous habitez dans une maison ou dans un appartement ?", m: "J'habite dans un appartement. Il est petit mais joli." },
      { q: "Il y a combien de pièces ?", m: "Il y a trois pièces : un salon, une chambre et une cuisine." },
      { q: "Qu'est-ce que vous faites avec votre famille en vacances ?", m: "On mange ensemble et on va à la plage." }
    ] },
  { id: "a1-s02-po2", level: "A1", sujet: 2, sec: "po", ex: 2, pts: 8, kind: "echange",
    title: "Manger et boire",
    consigne: "Échange d'informations (2 minutes environ). Vous tirez des cartes. Avec chaque mot, vous posez une question à l'examinateur sur sa vie.",
    help: {
      tr: "Bilgi alışverişi (yaklaşık 2 dakika). Kart çekiyorsunuz. Her kelimeyle sınav görevlisine hayatı hakkında bir soru sorun.",
      en: "Information exchange (about 2 minutes). You draw cards. With each word, ask the examiner a question about his or her life."
    },
    cards: ["Fruits ?", "Restaurant ?", "Café ?", "Cuisine ?", "Plat préféré ?", "Dîner ?", "Marché ?"],
    prompts: [
      { q: "Fruits ?", m: "Quels fruits est-ce que vous aimez ?" },
      { q: "Restaurant ?", m: "Vous allez souvent au restaurant ?" },
      { q: "Café ?", m: "Vous buvez du café le matin ?" },
      { q: "Cuisine ?", m: "Est-ce que vous aimez faire la cuisine ?" },
      { q: "Plat préféré ?", m: "Quel est votre plat préféré ?" },
      { q: "Dîner ?", m: "À quelle heure est-ce que vous dînez ?" },
      { q: "Marché ?", m: "Vous allez au marché le samedi ?" }
    ] },
  { id: "a1-s02-po3", level: "A1", sujet: 2, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Au marché",
    consigne: "Dialogue simulé (2 minutes environ). Vous êtes au marché. Vous achetez des fruits et des légumes. Vous demandez le prix et vous payez. L'examinateur joue le rôle du marchand.",
    help: {
      tr: "Canlandırma diyalog (yaklaşık 2 dakika). Pazardasınız. Meyve ve sebze alıyorsunuz. Fiyatı sorup ödeme yapıyorsunuz. Sınav görevlisi satıcıyı oynuyor.",
      en: "Role-play (about 2 minutes). You are at the market. You buy fruit and vegetables. You ask the price and pay. The examiner plays the stallholder."
    },
    scenario: "Samedi matin, vous faites les courses au marché pour préparer une salade et un dessert.",
    you: "Vous êtes le client / la cliente.",
    them: "L'examinateur est le marchand / la marchande de fruits et légumes.",
    items: [
      { n: "un kilo de tomates", p: "2,50 €", e: "🍅" },
      { n: "un kilo de pommes", p: "2,20 €", e: "🍎" },
      { n: "une salade", p: "1,00 €", e: "🥬" },
      { n: "un melon", p: "3,00 €", e: "🍈" },
      { n: "500 g de fraises", p: "4,00 €", e: "🍓" },
      { n: "un kilo de pommes de terre", p: "1,80 €", e: "🥔" }
    ],
    must: [
      { c: "Saluer", kw: ["bonjour", "bonsoir", "salut", "madame", "monsieur"] },
      {
        c: "Demander des fruits et des légumes",
        kw: [
          "je voudrais",
          "je veux",
          "je prends",
          "je vais prendre",
          "vous avez",
          "avez-vous",
          "est-ce que vous avez",
          "s'il vous plaît",
          "s'il vous plait",
          "donnez-moi",
          "je cherche",
          "kilo",
          "tomates",
          "pommes",
          "salade",
          "melon",
          "fraises",
          "grammes"
        ]
      },
      {
        c: "Demander le prix",
        kw: [
          "combien",
          "ça fait",
          "ca fait",
          "ça coûte",
          "ca coute",
          "c'est combien",
          "prix",
          "coûte",
          "coute",
          "coûtent",
          "en tout"
        ]
      },
      {
        c: "Payer",
        kw: [
          "voilà",
          "voila",
          "voici",
          "carte",
          "espèces",
          "especes",
          "payer",
          "je paie",
          "je paye",
          "monnaie",
          "euros",
          "billet de"
        ]
      },
      {
        c: "Prendre congé",
        kw: ["au revoir", "merci", "bonne journée", "bonne journee", "bonne soirée", "bonne soiree", "à bientôt", "a bientot"]
      }
    ],
    model: [
      ["E", "Bonjour madame ! Qu'est-ce que je vous sers ?"],
      ["C", "Bonjour monsieur. Je voudrais un kilo de tomates, s'il vous plaît."],
      ["E", "Voilà un kilo de tomates. Et avec ça ?"],
      ["C", "Une salade et un melon. Elles sont combien, les fraises ?"],
      ["E", "4 euros les 500 grammes. Elles sont très bonnes !"],
      ["C", "D'accord, je prends 500 grammes de fraises."],
      ["E", "Très bien. Autre chose ?"],
      ["C", "Non, c'est tout. Ça fait combien ?"],
      ["E", "Ça fait 10,50 €."],
      ["C", "Je peux payer par carte ?"],
      ["E", "Non, désolé, seulement en espèces."],
      ["C", "Pas de problème. Voilà 11 euros."],
      ["E", "Merci, voilà 50 centimes. Bonne journée !"],
      ["C", "Merci, au revoir !"]
    ] },
  { id: "a1-s03-po1", level: "A1", sujet: 3, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Mon travail",
    consigne: "Entretien dirigé (1 minute environ). Vous saluez l'examinateur et vous répondez à ses questions sur vous, votre famille, vos goûts et vos activités.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1 dakika). Sınav görevlisini selamlayın ve sizin, aileniz, zevkleriniz ve etkinlikleriniz hakkındaki sorularına cevap verin.",
      en: "Guided interview (about 1 minute). Greet the examiner and answer the questions about yourself, your family, your tastes and your activities."
    },
    prompts: [
      { q: "Bonjour madame. Votre nom, s'il vous plaît ?", m: "Bonjour. Je m'appelle Esin." },
      { q: "Vous venez d'où ?", m: "Je viens de Turquie." },
      { q: "Qu'est-ce que vous faites dans la vie ?", m: "Je suis kinésithérapeute." },
      { q: "Où est-ce que vous travaillez ?", m: "Je travaille dans un cabinet, en ville." },
      { q: "Vous commencez à quelle heure ?", m: "Je commence à 8 heures et je finis à 18 heures." },
      { q: "Comment est-ce que vous allez au travail ?", m: "Je vais au travail en bus." },
      { q: "Vous aimez votre travail ? Pourquoi ?", m: "Oui, j'aime beaucoup mon travail. J'aime aider les gens." },
      { q: "Vos collègues sont sympathiques ?", m: "Oui, mes collègues sont très sympas." }
    ] },
  { id: "a1-s03-po2", level: "A1", sujet: 3, sec: "po", ex: 2, pts: 8, kind: "echange",
    title: "Les loisirs",
    consigne: "Échange d'informations (2 minutes environ). Vous tirez des cartes. Avec chaque mot, vous posez une question à l'examinateur sur sa vie.",
    help: {
      tr: "Bilgi alışverişi (yaklaşık 2 dakika). Kart çekiyorsunuz. Her kelimeyle sınav görevlisine hayatı hakkında bir soru sorun.",
      en: "Information exchange (about 2 minutes). You draw cards. With each word, ask the examiner a question about his or her life."
    },
    cards: ["Cinéma ?", "Livre ?", "Télévision ?", "Musée ?", "Danse ?", "Jeux vidéo ?", "Concert ?"],
    prompts: [
      { q: "Cinéma ?", m: "Vous allez souvent au cinéma ?" },
      { q: "Livre ?", m: "Quel livre est-ce que vous aimez ?" },
      { q: "Télévision ?", m: "Vous regardez la télévision le soir ?" },
      { q: "Musée ?", m: "Est-ce que vous aimez les musées ?" },
      { q: "Danse ?", m: "Vous aimez danser ?" },
      { q: "Jeux vidéo ?", m: "Vous jouez aux jeux vidéo ?" },
      { q: "Concert ?", m: "Vous allez à un concert ce mois-ci ?" }
    ] },
  { id: "a1-s03-po3", level: "A1", sujet: 3, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Au magasin de vêtements",
    consigne: "Dialogue simulé (2 minutes environ). Vous êtes dans un magasin de vêtements. Vous cherchez un vêtement : vous parlez de la taille et de la couleur, vous demandez le prix et vous payez. L'examinateur joue le rôle du vendeur.",
    help: {
      tr: "Canlandırma diyalog (yaklaşık 2 dakika). Bir giyim mağazasındasınız. Bir giysi arıyorsunuz: beden ve rengi konuşuyor, fiyatı soruyor ve ödüyorsunuz. Sınav görevlisi satıcıyı oynuyor.",
      en: "Role-play (about 2 minutes). You are in a clothes shop. You look for an item: you talk about size and colour, ask the price and pay. The examiner plays the shop assistant."
    },
    scenario: "Il fait beau. Vous voulez acheter un vêtement pour l'été et un petit cadeau.",
    you: "Vous êtes le client / la cliente.",
    them: "L'examinateur est le vendeur / la vendeuse.",
    items: [
      { n: "un tee-shirt", p: "15 €", e: "👕" },
      { n: "un jean", p: "39 €", e: "👖" },
      { n: "une robe", p: "45 €", e: "👗" },
      { n: "un manteau", p: "79 €", e: "🧥" },
      { n: "une écharpe", p: "12 €", e: "🧣" },
      { n: "des chaussettes", p: "6 €", e: "🧦" },
      { n: "une casquette", p: "18 €", e: "🧢" }
    ],
    must: [
      { c: "Saluer", kw: ["bonjour", "bonsoir", "salut", "madame", "monsieur"] },
      {
        c: "Demander un vêtement (taille, couleur)",
        kw: [
          "je voudrais",
          "je veux",
          "je prends",
          "je vais prendre",
          "vous avez",
          "avez-vous",
          "est-ce que vous avez",
          "s'il vous plaît",
          "s'il vous plait",
          "donnez-moi",
          "je cherche",
          "taille",
          "couleur",
          "essayer",
          "cabine",
          "bleu",
          "rouge",
          "noir",
          "blanc",
          "je fais du"
        ]
      },
      {
        c: "Demander le prix",
        kw: [
          "combien",
          "ça fait",
          "ca fait",
          "ça coûte",
          "ca coute",
          "c'est combien",
          "prix",
          "coûte",
          "coute",
          "coûtent",
          "en tout"
        ]
      },
      {
        c: "Payer",
        kw: [
          "voilà",
          "voila",
          "voici",
          "carte",
          "espèces",
          "especes",
          "payer",
          "je paie",
          "je paye",
          "monnaie",
          "euros",
          "billet de"
        ]
      },
      {
        c: "Prendre congé",
        kw: ["au revoir", "merci", "bonne journée", "bonne journee", "bonne soirée", "bonne soiree", "à bientôt", "a bientot"]
      }
    ],
    model: [
      ["E", "Bonjour madame, je peux vous aider ?"],
      ["C", "Bonjour. Oui, je cherche un tee-shirt, s'il vous plaît."],
      ["E", "Quelle taille faites-vous ?"],
      ["C", "Je fais du M. Vous avez un tee-shirt bleu ?"],
      ["E", "Oui, voilà, en bleu et en M."],
      ["C", "Je peux essayer ?"],
      ["E", "Bien sûr, la cabine est là-bas."],
      ["C", "Il est parfait. Il coûte combien ?"],
      ["E", "15 euros."],
      ["C", "Je prends aussi cette écharpe rouge. Ça fait combien en tout ?"],
      ["E", "Ça fait 27 euros. Vous payez comment ?"],
      ["C", "Par carte, s'il vous plaît."],
      ["E", "Merci. Voilà votre sac. Bonne journée !"],
      ["C", "Merci, au revoir !"]
    ] },
  { id: "a1-s04-po1", level: "A1", sujet: 4, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Le sport et moi",
    consigne: "Entretien dirigé (1 minute environ). Vous saluez l'examinateur et vous répondez à ses questions sur vous, votre famille, vos goûts et vos activités.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1 dakika). Sınav görevlisini selamlayın ve sizin, aileniz, zevkleriniz ve etkinlikleriniz hakkındaki sorularına cevap verin.",
      en: "Guided interview (about 1 minute). Greet the examiner and answer the questions about yourself, your family, your tastes and your activities."
    },
    prompts: [
      { q: "Bonjour ! Comment vous appelez-vous ?", m: "Bonjour, je m'appelle Esin." },
      { q: "Vous faites du sport ?", m: "Oui, je joue au handball." },
      { q: "Vous jouez où et quand ?", m: "Je joue dans un club, le mardi et le jeudi soir." },
      { q: "Vous regardez le sport à la télévision ?", m: "Oui, je regarde les matchs de handball et de football." },
      { q: "Quelle est votre équipe préférée ?", m: "Mon équipe préférée, c'est l'équipe de France de handball." },
      { q: "Vous allez à la piscine ?", m: "Non, je ne nage pas très bien." },
      { q: "Vous aimez la nature ?", m: "Oui, j'aime marcher dans la forêt." },
      { q: "Qu'est-ce que vous faites le dimanche ?", m: "Le dimanche, je me repose et je fais la cuisine." }
    ] },
  { id: "a1-s04-po2", level: "A1", sujet: 4, sec: "po", ex: 2, pts: 8, kind: "echange",
    title: "En ville",
    consigne: "Échange d'informations (2 minutes environ). Vous tirez des cartes. Avec chaque mot, vous posez une question à l'examinateur sur sa vie.",
    help: {
      tr: "Bilgi alışverişi (yaklaşık 2 dakika). Kart çekiyorsunuz. Her kelimeyle sınav görevlisine hayatı hakkında bir soru sorun.",
      en: "Information exchange (about 2 minutes). You draw cards. With each word, ask the examiner a question about his or her life."
    },
    cards: ["Bus ?", "Vélo ?", "Quartier ?", "Parc ?", "Boulangerie ?", "Métro ?", "Bibliothèque ?"],
    prompts: [
      { q: "Bus ?", m: "Vous prenez le bus pour aller en ville ?" },
      { q: "Vélo ?", m: "Est-ce que vous avez un vélo ?" },
      { q: "Quartier ?", m: "Vous habitez dans quel quartier ?" },
      { q: "Parc ?", m: "Il y a un parc près de chez vous ?" },
      { q: "Boulangerie ?", m: "Quelle est votre boulangerie préférée ?" },
      { q: "Métro ?", m: "Vous prenez le métro tous les jours ?" },
      { q: "Bibliothèque ?", m: "Vous allez à la bibliothèque ?" }
    ] },
  { id: "a1-s04-po3", level: "A1", sujet: 4, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "À la terrasse d'un café",
    consigne: "Dialogue simulé (2 minutes environ). Vous êtes au café avec une amie. Vous commandez des boissons et quelque chose à manger, puis vous demandez l'addition et vous payez. L'examinateur joue le rôle du serveur.",
    help: {
      tr: "Canlandırma diyalog (yaklaşık 2 dakika). Bir arkadaşınızla kafedesiniz. İçecek ve yiyecek bir şey sipariş ediyor, sonra hesabı isteyip ödüyorsunuz. Sınav görevlisi garsonu oynuyor.",
      en: "Role-play (about 2 minutes). You are in a café with a friend. You order drinks and something to eat, then ask for the bill and pay. The examiner plays the waiter."
    },
    scenario: "Après votre entraînement de handball, vous allez au café avec une amie de l'équipe.",
    you: "Vous êtes la cliente / le client.",
    them: "L'examinateur est le serveur / la serveuse.",
    items: [
      { n: "un café", p: "1,80 €", e: "☕" },
      { n: "un thé", p: "2,50 €", e: "🍵" },
      { n: "un chocolat chaud", p: "3,20 €", e: "🥛" },
      { n: "un jus d'orange", p: "3,50 €", e: "🍊" },
      { n: "une eau minérale", p: "2,00 €", e: "💧" },
      { n: "un croque-monsieur", p: "6,50 €", e: "🥪" },
      { n: "une crêpe au sucre", p: "4,00 €", e: "🥞" }
    ],
    must: [
      { c: "Saluer", kw: ["bonjour", "bonsoir", "salut", "madame", "monsieur"] },
      {
        c: "Commander à boire et à manger",
        kw: [
          "je voudrais",
          "je veux",
          "je prends",
          "je vais prendre",
          "vous avez",
          "avez-vous",
          "est-ce que vous avez",
          "s'il vous plaît",
          "s'il vous plait",
          "donnez-moi",
          "je cherche",
          "un café",
          "un thé",
          "jus",
          "crêpe",
          "crepe",
          "croque",
          "eau",
          "chocolat",
          "pour moi"
        ]
      },
      {
        c: "Demander l'addition",
        kw: [
          "combien",
          "ça fait",
          "ca fait",
          "ça coûte",
          "ca coute",
          "c'est combien",
          "prix",
          "coûte",
          "coute",
          "coûtent",
          "en tout",
          "l'addition",
          "addition"
        ]
      },
      {
        c: "Payer",
        kw: [
          "voilà",
          "voila",
          "voici",
          "carte",
          "espèces",
          "especes",
          "payer",
          "je paie",
          "je paye",
          "monnaie",
          "euros",
          "billet de",
          "gardez"
        ]
      },
      {
        c: "Prendre congé",
        kw: ["au revoir", "merci", "bonne journée", "bonne journee", "bonne soirée", "bonne soiree", "à bientôt", "a bientot"]
      }
    ],
    model: [
      ["E", "Bonjour mesdames ! Qu'est-ce que vous prenez ?"],
      ["C", "Bonjour ! Un jus d'orange et un thé, s'il vous plaît."],
      ["E", "Et pour manger ?"],
      ["C", "Qu'est-ce que vous avez ?"],
      ["E", "Nous avons des croque-monsieur et des crêpes."],
      ["C", "Alors, deux crêpes au sucre, s'il vous plaît."],
      ["E", "Très bien. … Voilà, mesdames. Bon appétit !"],
      ["C", "Merci. L'addition, s'il vous plaît. C'est combien ?"],
      ["E", "Ça fait 14 euros."],
      ["C", "Voilà 15 euros. Gardez la monnaie !"],
      ["E", "Merci beaucoup, bonne soirée !"],
      ["C", "Merci, au revoir !"]
    ] },
  { id: "a1-s05-po1", level: "A1", sujet: 5, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Ma journée",
    consigne: "Entretien dirigé (1 minute environ). Vous saluez l'examinateur et vous répondez à ses questions sur vous, votre famille, vos goûts et vos activités.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1 dakika). Sınav görevlisini selamlayın ve sizin, aileniz, zevkleriniz ve etkinlikleriniz hakkındaki sorularına cevap verin.",
      en: "Guided interview (about 1 minute). Greet the examiner and answer the questions about yourself, your family, your tastes and your activities."
    },
    prompts: [
      { q: "Bonjour, vous pouvez vous présenter ?", m: "Bonjour, je m'appelle Esin. Je suis turque et j'habite en France." },
      { q: "À quelle heure est-ce que vous vous levez ?", m: "Je me lève à 7 heures." },
      { q: "Qu'est-ce que vous faites le matin ?", m: "Je prends une douche, je bois un thé et je pars au travail." },
      { q: "Où est-ce que vous déjeunez ?", m: "Je déjeune au travail avec mes collègues." },
      { q: "Qu'est-ce que vous faites après le travail ?", m: "Je fais les courses ou je vais à l'entraînement de handball." },
      { q: "À quelle heure est-ce que vous dînez ?", m: "Je dîne vers 20 heures." },
      { q: "Qu'est-ce que vous faites le soir ?", m: "Je regarde une série ou je lis un peu." },
      { q: "Vous vous couchez tard ?", m: "Non, je me couche à 23 heures." }
    ] },
  { id: "a1-s05-po2", level: "A1", sujet: 5, sec: "po", ex: 2, pts: 8, kind: "echange",
    title: "Faire les courses",
    consigne: "Échange d'informations (2 minutes environ). Vous tirez des cartes. Avec chaque mot, vous posez une question à l'examinateur sur sa vie.",
    help: {
      tr: "Bilgi alışverişi (yaklaşık 2 dakika). Kart çekiyorsunuz. Her kelimeyle sınav görevlisine hayatı hakkında bir soru sorun.",
      en: "Information exchange (about 2 minutes). You draw cards. With each word, ask the examiner a question about his or her life."
    },
    cards: ["Supermarché ?", "Pain ?", "Liste ?", "Prix ?", "Internet ?", "Viande ?", "Sac ?"],
    prompts: [
      { q: "Supermarché ?", m: "Vous allez au supermarché quel jour ?" },
      { q: "Pain ?", m: "Vous achetez du pain tous les jours ?" },
      { q: "Liste ?", m: "Vous faites une liste de courses ?" },
      { q: "Prix ?", m: "Vous trouvez les prix chers en France ?" },
      { q: "Internet ?", m: "Vous achetez des vêtements sur Internet ?" },
      { q: "Viande ?", m: "Vous mangez de la viande ?" },
      { q: "Sac ?", m: "Vous prenez un sac pour faire les courses ?" }
    ] },
  { id: "a1-s05-po3", level: "A1", sujet: 5, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Un billet de train",
    consigne: "Dialogue simulé (2 minutes environ). Vous êtes au guichet de la gare. Vous achetez un billet de train pour le week-end. Vous demandez l'heure, le prix et le quai, puis vous payez. L'examinateur joue le rôle de l'employé de la gare.",
    help: {
      tr: "Canlandırma diyalog (yaklaşık 2 dakika). Garın gişesindesiniz. Hafta sonu için tren bileti alıyorsunuz. Saati, fiyatı ve peronu sorup ödeme yapıyorsunuz. Sınav görevlisi gar görevlisini oynuyor.",
      en: "Role-play (about 2 minutes). You are at the station ticket office. You buy a train ticket for the weekend. You ask the time, the price and the platform, then pay. The examiner plays the station employee."
    },
    scenario: "Vous voulez passer le week-end à Lyon. Vous partez samedi matin et vous revenez dimanche soir.",
    you: "Vous êtes le voyageur / la voyageuse.",
    them: "L'examinateur est l'employé(e) du guichet.",
    items: [
      { n: "un aller simple Paris–Lyon, 2e classe", p: "39 €", e: "🚆" },
      { n: "un aller-retour Paris–Lyon, 2e classe", p: "72 €", e: "🔁" },
      { n: "un aller simple Paris–Lyon, 1re classe", p: "55 €", e: "💺" },
      { n: "un aller simple Paris–Lille, 2e classe", p: "28 €", e: "🚄" },
      { n: "une place pour un vélo", p: "10 €", e: "🚲" }
    ],
    must: [
      { c: "Saluer", kw: ["bonjour", "bonsoir", "salut", "madame", "monsieur"] },
      {
        c: "Demander un billet (destination, jour)",
        kw: [
          "je voudrais",
          "je veux",
          "je prends",
          "je vais prendre",
          "vous avez",
          "avez-vous",
          "est-ce que vous avez",
          "s'il vous plaît",
          "s'il vous plait",
          "donnez-moi",
          "je cherche",
          "billet",
          "aller simple",
          "aller-retour",
          "aller retour",
          "pour lyon",
          "samedi",
          "dimanche",
          "classe"
        ]
      },
      { c: "Demander l'heure ou le quai", kw: ["à quelle heure", "a quelle heure", "heure", "quai", "part", "train"] },
      {
        c: "Demander le prix et payer",
        kw: [
          "combien",
          "ça fait",
          "ca fait",
          "ça coûte",
          "ca coute",
          "c'est combien",
          "prix",
          "coûte",
          "coute",
          "coûtent",
          "en tout",
          "voilà",
          "voila",
          "voici",
          "carte",
          "espèces",
          "especes",
          "payer",
          "je paie",
          "je paye",
          "monnaie",
          "euros",
          "billet de"
        ]
      },
      {
        c: "Prendre congé",
        kw: ["au revoir", "merci", "bonne journée", "bonne journee", "bonne soirée", "bonne soiree", "à bientôt", "a bientot"]
      }
    ],
    model: [
      ["E", "Bonjour madame, je vous écoute."],
      ["C", "Bonjour monsieur. Je voudrais un billet pour Lyon, s'il vous plaît."],
      ["E", "Un aller simple ou un aller-retour ?"],
      ["C", "Un aller-retour. Je pars samedi matin et je reviens dimanche soir."],
      ["E", "Il y a un train samedi à 8 h 15. Ça va ?"],
      ["C", "Oui, très bien. En deuxième classe, s'il vous plaît. C'est combien ?"],
      ["E", "72 euros."],
      ["C", "D'accord. Le train part de quel quai ?"],
      ["E", "Du quai B. Vous payez comment ?"],
      ["C", "Par carte. Voilà."],
      ["E", "Merci. Voilà vos billets. Bon voyage !"],
      ["C", "Merci, au revoir !"]
    ] },
  { id: "a1-s06-po1", level: "A1", sujet: 6, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Mes goûts",
    consigne: "Entretien dirigé (1 minute environ). Vous saluez l'examinateur et vous répondez à ses questions sur vous, votre famille, vos goûts et vos activités.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1 dakika). Sınav görevlisini selamlayın ve sizin, aileniz, zevkleriniz ve etkinlikleriniz hakkındaki sorularına cevap verin.",
      en: "Guided interview (about 1 minute). Greet the examiner and answer the questions about yourself, your family, your tastes and your activities."
    },
    prompts: [
      { q: "Bonjour ! Vous vous appelez comment ?", m: "Bonjour, je m'appelle Esin." },
      { q: "Qu'est-ce que vous aimez manger ?", m: "J'aime les légumes, le riz et le poisson." },
      { q: "Vous aimez la cuisine française ?", m: "Oui, j'aime bien le fromage et les crêpes." },
      { q: "Quelle musique est-ce que vous aimez ?", m: "J'aime la musique turque et la pop." },
      { q: "Quelle est votre saison préférée ? Pourquoi ?", m: "J'adore l'été parce qu'il fait chaud." },
      { q: "Qu'est-ce que vous n'aimez pas ?", m: "Je n'aime pas la pluie et le froid." },
      { q: "Vous aimez les animaux ?", m: "Oui, j'aime les chats. Je n'aime pas beaucoup les chiens." },
      { q: "Vous aimez lire ?", m: "Oui, je lis des romans en turc." }
    ] },
  { id: "a1-s06-po2", level: "A1", sujet: 6, sec: "po", ex: 2, pts: 8, kind: "echange",
    title: "Vacances et voyages",
    consigne: "Échange d'informations (2 minutes environ). Vous tirez des cartes. Avec chaque mot, vous posez une question à l'examinateur sur sa vie.",
    help: {
      tr: "Bilgi alışverişi (yaklaşık 2 dakika). Kart çekiyorsunuz. Her kelimeyle sınav görevlisine hayatı hakkında bir soru sorun.",
      en: "Information exchange (about 2 minutes). You draw cards. With each word, ask the examiner a question about his or her life."
    },
    cards: ["Vacances ?", "Mer ou montagne ?", "Avion ?", "Hôtel ?", "Pays ?", "Valise ?", "Été ?"],
    prompts: [
      { q: "Vacances ?", m: "Où est-ce que vous allez en vacances ?" },
      { q: "Mer ou montagne ?", m: "Vous préférez la mer ou la montagne ?" },
      { q: "Avion ?", m: "Vous aimez prendre l'avion ?" },
      { q: "Hôtel ?", m: "Vous dormez à l'hôtel en vacances ?" },
      { q: "Pays ?", m: "Quel pays est-ce que vous voulez visiter ?" },
      { q: "Valise ?", m: "Qu'est-ce qu'il y a dans votre valise ?" },
      { q: "Été ?", m: "Qu'est-ce que vous faites cet été ?" }
    ] },
  { id: "a1-s06-po3", level: "A1", sujet: 6, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Au cinéma",
    consigne: "Dialogue simulé (2 minutes environ). Vous êtes à la caisse d'un cinéma. Vous achetez des places pour vous et vos amis et quelque chose à manger. Vous demandez le prix et vous payez. L'examinateur joue le rôle de l'employé du cinéma.",
    help: {
      tr: "Canlandırma diyalog (yaklaşık 2 dakika). Bir sinemanın gişesindesiniz. Kendiniz ve arkadaşlarınız için bilet ve yiyecek bir şey alıyorsunuz. Fiyatı sorup ödeme yapıyorsunuz. Sınav görevlisi sinema çalışanını oynuyor.",
      en: "Role-play (about 2 minutes). You are at a cinema ticket desk. You buy tickets for you and your friends and something to eat. You ask the price and pay. The examiner plays the cinema employee."
    },
    scenario: "Samedi soir, vous allez au cinéma avec un ami et son fils de 8 ans.",
    you: "Vous êtes la cliente / le client.",
    them: "L'examinateur est l'employé(e) du cinéma.",
    items: [
      { n: "une place plein tarif", p: "11,50 €", e: "🎬" },
      { n: "une place étudiant", p: "8 €", e: "🎓" },
      { n: "une place enfant", p: "6 €", e: "🧒" },
      { n: "un grand pop-corn", p: "6,50 €", e: "🍿" },
      { n: "une boisson", p: "3,50 €", e: "🥤" },
      { n: "des lunettes 3D", p: "2 €", e: "👓" }
    ],
    must: [
      { c: "Saluer", kw: ["bonjour", "bonsoir", "salut", "madame", "monsieur"] },
      {
        c: "Demander des places (film, heure, nombre)",
        kw: [
          "je voudrais",
          "je veux",
          "je prends",
          "je vais prendre",
          "vous avez",
          "avez-vous",
          "est-ce que vous avez",
          "s'il vous plaît",
          "s'il vous plait",
          "donnez-moi",
          "je cherche",
          "place",
          "places",
          "film",
          "séance",
          "seance",
          "adultes",
          "enfant",
          "heures"
        ]
      },
      {
        c: "Demander le prix",
        kw: [
          "combien",
          "ça fait",
          "ca fait",
          "ça coûte",
          "ca coute",
          "c'est combien",
          "prix",
          "coûte",
          "coute",
          "coûtent",
          "en tout"
        ]
      },
      {
        c: "Payer",
        kw: [
          "voilà",
          "voila",
          "voici",
          "carte",
          "espèces",
          "especes",
          "payer",
          "je paie",
          "je paye",
          "monnaie",
          "euros",
          "billet de"
        ]
      },
      {
        c: "Prendre congé",
        kw: [
          "au revoir",
          "merci",
          "bonne journée",
          "bonne journee",
          "bonne soirée",
          "bonne soiree",
          "à bientôt",
          "a bientot",
          "bon film"
        ]
      }
    ],
    model: [
      ["E", "Bonsoir ! C'est pour quel film ?"],
      ["C", "Bonsoir. Trois places pour le film de 20 heures, s'il vous plaît."],
      ["E", "Il y a des enfants ou des étudiants ?"],
      ["C", "Oui, un enfant de 8 ans. Et deux adultes."],
      ["E", "Alors, deux places plein tarif et une place enfant."],
      ["C", "Ça fait combien ?"],
      ["E", "29 euros."],
      ["C", "Je voudrais aussi un grand pop-corn, s'il vous plaît."],
      ["E", "Très bien. Ça fait 35,50 € en tout."],
      ["C", "Voilà ma carte. C'est quelle salle ?"],
      ["E", "Salle 4, à gauche. Bon film !"],
      ["C", "Merci, bonne soirée !"]
    ] },
  { id: "a1-s07-po1", level: "A1", sujet: 7, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Mon logement, mon quartier",
    consigne: "Entretien dirigé (1 minute environ). Vous saluez l'examinateur et vous répondez à ses questions sur vous, votre famille, vos goûts et vos activités.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1 dakika). Sınav görevlisini selamlayın ve sizin, aileniz, zevkleriniz ve etkinlikleriniz hakkındaki sorularına cevap verin.",
      en: "Guided interview (about 1 minute). Greet the examiner and answer the questions about yourself, your family, your tastes and your activities."
    },
    prompts: [
      { q: "Bonjour madame. Comment vous appelez-vous ?", m: "Bonjour. Je m'appelle Esin." },
      { q: "Vous habitez où ?", m: "J'habite dans le centre-ville, près de la gare." },
      { q: "Vous habitez seule ?", m: "Non, j'habite avec une amie." },
      { q: "Comment est votre appartement ?", m: "Il est petit et clair. Il y a un balcon." },
      { q: "Vous habitez à quel étage ?", m: "J'habite au deuxième étage. Il n'y a pas d'ascenseur." },
      { q: "Qu'est-ce qu'il y a dans votre quartier ?", m: "Il y a une boulangerie, une pharmacie et un parc." },
      { q: "Vous aimez votre quartier ?", m: "Oui, il est calme et les voisins sont gentils." },
      { q: "Quelle est votre pièce préférée ?", m: "C'est le salon. Je lis sur le canapé." }
    ] },
  { id: "a1-s07-po2", level: "A1", sujet: 7, sec: "po", ex: 2, pts: 8, kind: "echange",
    title: "Le travail",
    consigne: "Échange d'informations (2 minutes environ). Vous tirez des cartes. Avec chaque mot, vous posez une question à l'examinateur sur sa vie.",
    help: {
      tr: "Bilgi alışverişi (yaklaşık 2 dakika). Kart çekiyorsunuz. Her kelimeyle sınav görevlisine hayatı hakkında bir soru sorun.",
      en: "Information exchange (about 2 minutes). You draw cards. With each word, ask the examiner a question about his or her life."
    },
    cards: ["Métier ?", "Bureau ?", "Horaires ?", "Collègues ?", "Déjeuner ?", "Ordinateur ?", "Samedi ?"],
    prompts: [
      { q: "Métier ?", m: "Quel est votre métier ?" },
      { q: "Bureau ?", m: "Où est votre bureau ?" },
      { q: "Horaires ?", m: "Vous travaillez de quelle heure à quelle heure ?" },
      { q: "Collègues ?", m: "Vous avez combien de collègues ?" },
      { q: "Déjeuner ?", m: "Où est-ce que vous déjeunez le midi ?" },
      { q: "Ordinateur ?", m: "Vous travaillez sur un ordinateur ?" },
      { q: "Samedi ?", m: "Vous travaillez le samedi ?" }
    ] },
  { id: "a1-s07-po3", level: "A1", sujet: 7, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "À la pharmacie",
    consigne: "Dialogue simulé (2 minutes environ). Vous êtes malade. Vous allez à la pharmacie. Vous expliquez votre problème, vous achetez des médicaments, vous demandez le prix et vous payez. L'examinateur joue le rôle du pharmacien.",
    help: {
      tr: "Canlandırma diyalog (yaklaşık 2 dakika). Hastasınız. Eczaneye gidiyorsunuz. Sorununuzu anlatıyor, ilaç alıyor, fiyatı soruyor ve ödüyorsunuz. Sınav görevlisi eczacıyı oynuyor.",
      en: "Role-play (about 2 minutes). You are ill. You go to the pharmacy. You explain your problem, buy medicine, ask the price and pay. The examiner plays the pharmacist."
    },
    scenario: "Depuis deux jours, vous avez mal à la gorge et vous toussez.",
    you: "Vous êtes la cliente / le client.",
    them: "L'examinateur est le pharmacien / la pharmacienne.",
    items: [
      { n: "une boîte de paracétamol", p: "2,20 €", e: "💊" },
      { n: "un sirop pour la toux", p: "6,90 €", e: "🥄" },
      { n: "des pastilles pour la gorge", p: "4,50 €", e: "🍬" },
      { n: "des pansements", p: "3,80 €", e: "🩹" },
      { n: "un thermomètre", p: "9,90 €", e: "🌡️" },
      { n: "une crème solaire", p: "12 €", e: "🧴" }
    ],
    must: [
      { c: "Saluer", kw: ["bonjour", "bonsoir", "salut", "madame", "monsieur"] },
      {
        c: "Expliquer le problème",
        kw: ["j'ai mal", "mal à la gorge", "mal", "gorge", "je tousse", "tousse", "fièvre", "fievre", "malade", "tête", "tete"]
      },
      {
        c: "Demander des médicaments",
        kw: [
          "je voudrais",
          "je veux",
          "je prends",
          "je vais prendre",
          "vous avez",
          "avez-vous",
          "est-ce que vous avez",
          "s'il vous plaît",
          "s'il vous plait",
          "donnez-moi",
          "je cherche",
          "sirop",
          "pastilles",
          "paracétamol",
          "paracetamol",
          "médicament",
          "medicament"
        ]
      },
      {
        c: "Demander le prix et payer",
        kw: [
          "combien",
          "ça fait",
          "ca fait",
          "ça coûte",
          "ca coute",
          "c'est combien",
          "prix",
          "coûte",
          "coute",
          "coûtent",
          "en tout",
          "voilà",
          "voila",
          "voici",
          "carte",
          "espèces",
          "especes",
          "payer",
          "je paie",
          "je paye",
          "monnaie",
          "euros",
          "billet de"
        ]
      },
      {
        c: "Remercier et prendre congé",
        kw: ["au revoir", "merci", "bonne journée", "bonne journee", "bonne soirée", "bonne soiree", "à bientôt", "a bientot"]
      }
    ],
    model: [
      ["E", "Bonjour madame, je peux vous aider ?"],
      ["C", "Bonjour. J'ai mal à la gorge et je tousse."],
      ["E", "Vous avez de la fièvre ?"],
      ["C", "Non, je n'ai pas de fièvre."],
      ["E", "Je vous conseille ce sirop et ces pastilles."],
      ["C", "D'accord. Je voudrais aussi une boîte de paracétamol. Ça fait combien ?"],
      ["E", "Ça fait 13,60 €."],
      ["C", "Je prends le sirop combien de fois par jour ?"],
      ["E", "Trois fois par jour, après les repas."],
      ["C", "Merci. Voilà ma carte bancaire."],
      ["E", "Merci. Bon rétablissement, madame !"],
      ["C", "Merci, au revoir !"]
    ] },
  { id: "a1-s08-po1", level: "A1", sujet: 8, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Les langues et le français",
    consigne: "Entretien dirigé (1 minute environ). Vous saluez l'examinateur et vous répondez à ses questions sur vous, votre famille, vos goûts et vos activités.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1 dakika). Sınav görevlisini selamlayın ve sizin, aileniz, zevkleriniz ve etkinlikleriniz hakkındaki sorularına cevap verin.",
      en: "Guided interview (about 1 minute). Greet the examiner and answer the questions about yourself, your family, your tastes and your activities."
    },
    prompts: [
      { q: "Bonjour, comment vous appelez-vous ?", m: "Bonjour, je m'appelle Esin." },
      { q: "Quelle est votre langue maternelle ?", m: "Ma langue maternelle, c'est le turc." },
      { q: "Vous parlez anglais ?", m: "Oui, je parle un peu anglais." },
      { q: "Vous habitez en France depuis quand ?", m: "J'habite en France depuis un an." },
      { q: "Où est-ce que vous apprenez le français ?", m: "J'apprends le français sur Internet et avec une application." },
      { q: "C'est difficile, le français ?", m: "Oui, c'est difficile, mais j'aime bien. La prononciation est difficile." },
      { q: "Vous parlez français au travail ?", m: "Oui, je parle français avec mes patients." },
      { q: "Quel mot français est-ce que vous aimez ?", m: "J'aime le mot « bonjour ». Il est joli !" }
    ] },
  { id: "a1-s08-po2", level: "A1", sujet: 8, sec: "po", ex: 2, pts: 8, kind: "echange",
    title: "La famille",
    consigne: "Échange d'informations (2 minutes environ). Vous tirez des cartes. Avec chaque mot, vous posez une question à l'examinateur sur sa vie.",
    help: {
      tr: "Bilgi alışverişi (yaklaşık 2 dakika). Kart çekiyorsunuz. Her kelimeyle sınav görevlisine hayatı hakkında bir soru sorun.",
      en: "Information exchange (about 2 minutes). You draw cards. With each word, ask the examiner a question about his or her life."
    },
    cards: ["Frères ?", "Enfants ?", "Parents ?", "Grands-parents ?", "Noël ?", "Cousins ?", "Photo ?"],
    prompts: [
      { q: "Frères ?", m: "Vous avez des frères et sœurs ?" },
      { q: "Enfants ?", m: "Vous avez des enfants ?" },
      { q: "Parents ?", m: "Où habitent vos parents ?" },
      { q: "Grands-parents ?", m: "Vous voyez souvent vos grands-parents ?" },
      { q: "Noël ?", m: "Vous fêtez Noël en famille ?" },
      { q: "Cousins ?", m: "Vous avez combien de cousins ?" },
      { q: "Photo ?", m: "Vous avez une photo de votre famille ?" }
    ] },
  { id: "a1-s08-po3", level: "A1", sujet: 8, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Au magasin de sport",
    consigne: "Dialogue simulé (2 minutes environ). Vous êtes dans un magasin de sport. Vous achetez des affaires pour commencer le handball. Vous demandez la taille, le prix et vous payez. L'examinateur joue le rôle du vendeur.",
    help: {
      tr: "Canlandırma diyalog (yaklaşık 2 dakika). Bir spor mağazasındasınız. Hentbola başlamak için malzeme alıyorsunuz. Bedeni ve fiyatı sorup ödeme yapıyorsunuz. Sınav görevlisi satıcıyı oynuyor.",
      en: "Role-play (about 2 minutes). You are in a sports shop. You buy things to start handball. You ask about size and price, then pay. The examiner plays the shop assistant."
    },
    scenario: "Vous commencez le handball dans un club. Vous avez besoin de matériel.",
    you: "Vous êtes la cliente / le client.",
    them: "L'examinateur est le vendeur / la vendeuse.",
    items: [
      { n: "un ballon de handball", p: "25 €", e: "🤾" },
      { n: "des chaussures de sport", p: "69 €", e: "👟" },
      { n: "une gourde", p: "8 €", e: "💧" },
      { n: "un short", p: "15 €", e: "🩳" },
      { n: "un sac de sport", p: "30 €", e: "🎒" },
      { n: "des genouillères", p: "18 €", e: "🦵" }
    ],
    must: [
      { c: "Saluer", kw: ["bonjour", "bonsoir", "salut", "madame", "monsieur"] },
      {
        c: "Demander des articles (taille, pointure)",
        kw: [
          "je voudrais",
          "je veux",
          "je prends",
          "je vais prendre",
          "vous avez",
          "avez-vous",
          "est-ce que vous avez",
          "s'il vous plaît",
          "s'il vous plait",
          "donnez-moi",
          "je cherche",
          "ballon",
          "chaussures",
          "gourde",
          "short",
          "sac",
          "taille",
          "je fais du",
          "pointure"
        ]
      },
      {
        c: "Demander le prix",
        kw: [
          "combien",
          "ça fait",
          "ca fait",
          "ça coûte",
          "ca coute",
          "c'est combien",
          "prix",
          "coûte",
          "coute",
          "coûtent",
          "en tout"
        ]
      },
      {
        c: "Payer",
        kw: [
          "voilà",
          "voila",
          "voici",
          "carte",
          "espèces",
          "especes",
          "payer",
          "je paie",
          "je paye",
          "monnaie",
          "euros",
          "billet de"
        ]
      },
      {
        c: "Prendre congé",
        kw: ["au revoir", "merci", "bonne journée", "bonne journee", "bonne soirée", "bonne soiree", "à bientôt", "a bientot"]
      }
    ],
    model: [
      ["E", "Bonjour ! Vous cherchez quelque chose ?"],
      ["C", "Bonjour. Oui, je voudrais un ballon de handball, s'il vous plaît."],
      ["E", "Voilà. C'est la taille 2, pour les femmes."],
      ["C", "Parfait. Il coûte combien ?"],
      ["E", "25 euros."],
      ["C", "Je cherche aussi des chaussures de sport. Je fais du 39."],
      ["E", "Voilà, ces chaussures sont très bien pour le handball. Elles coûtent 69 euros."],
      ["C", "Elles sont un peu chères, mais elles sont belles. D'accord, je prends les chaussures."],
      ["E", "Autre chose ?"],
      ["C", "Une gourde, s'il vous plaît. Ça fait combien en tout ?"],
      ["E", "Ça fait 102 euros."],
      ["C", "Je paie par carte. Voilà."],
      ["E", "Merci, et bon match !"],
      ["C", "Merci, au revoir !"]
    ] },
  { id: "a1-s09-po1", level: "A1", sujet: 9, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Mon week-end",
    consigne: "Entretien dirigé (1 minute environ). Vous saluez l'examinateur et vous répondez à ses questions sur vous, votre famille, vos goûts et vos activités.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1 dakika). Sınav görevlisini selamlayın ve sizin, aileniz, zevkleriniz ve etkinlikleriniz hakkındaki sorularına cevap verin.",
      en: "Guided interview (about 1 minute). Greet the examiner and answer the questions about yourself, your family, your tastes and your activities."
    },
    prompts: [
      { q: "Bonjour. Comment vous appelez-vous ? Vous êtes de quelle nationalité ?", m: "Bonjour. Je m'appelle Esin, je suis turque." },
      { q: "Vous vous levez tard le week-end ?", m: "Oui, je me lève à 9 heures." },
      { q: "Qu'est-ce que vous faites le samedi matin ?", m: "Le samedi matin, je fais le ménage et les courses." },
      { q: "Vous sortez le samedi soir ?", m: "Oui, je vais au restaurant ou chez des amis." },
      { q: "Qu'est-ce que vous faites le dimanche ?", m: "Le dimanche, je joue au handball ou je me promène au parc." },
      { q: "Vous préférez rester à la maison ou sortir ?", m: "Je préfère sortir. J'aime voir mes amis." },
      { q: "Qu'est-ce que vous allez faire ce week-end ?", m: "Ce week-end, je vais aller au marché et je vais regarder un match." }
    ] },
  { id: "a1-s09-po2", level: "A1", sujet: 9, sec: "po", ex: 2, pts: 8, kind: "echange",
    title: "Le temps et les saisons",
    consigne: "Échange d'informations (2 minutes environ). Vous tirez des cartes. Avec chaque mot, vous posez une question à l'examinateur sur sa vie.",
    help: {
      tr: "Bilgi alışverişi (yaklaşık 2 dakika). Kart çekiyorsunuz. Her kelimeyle sınav görevlisine hayatı hakkında bir soru sorun.",
      en: "Information exchange (about 2 minutes). You draw cards. With each word, ask the examiner a question about his or her life."
    },
    cards: ["Météo ?", "Pluie ?", "Neige ?", "Hiver ?", "Parapluie ?", "Saison ?", "Soleil ?"],
    prompts: [
      { q: "Météo ?", m: "Quel temps fait-il aujourd'hui chez vous ?" },
      { q: "Pluie ?", m: "Vous aimez la pluie ?" },
      { q: "Neige ?", m: "Il neige dans votre ville ?" },
      { q: "Hiver ?", m: "Qu'est-ce que vous faites en hiver ?" },
      { q: "Parapluie ?", m: "Vous avez un parapluie ?" },
      { q: "Saison ?", m: "Quelle est votre saison préférée ?" },
      { q: "Soleil ?", m: "Vous aimez le soleil ?" }
    ] },
  { id: "a1-s09-po3", level: "A1", sujet: 9, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Chez le fleuriste",
    consigne: "Dialogue simulé (2 minutes environ). Vous êtes chez le fleuriste. Vous achetez des fleurs pour offrir. Vous choisissez, vous demandez le prix et vous payez. L'examinateur joue le rôle du fleuriste.",
    help: {
      tr: "Canlandırma diyalog (yaklaşık 2 dakika). Çiçekçidesiniz. Hediye etmek için çiçek alıyorsunuz. Seçiyor, fiyatı soruyor ve ödüyorsunuz. Sınav görevlisi çiçekçiyi oynuyor.",
      en: "Role-play (about 2 minutes). You are at the florist's. You buy flowers as a present. You choose, ask the price and pay. The examiner plays the florist."
    },
    scenario: "C'est l'anniversaire de votre voisine. Vous voulez lui offrir des fleurs.",
    you: "Vous êtes la cliente / le client.",
    them: "L'examinateur est le fleuriste / la fleuriste.",
    items: [
      { n: "une rose rouge", p: "3 €", e: "🌹" },
      { n: "un bouquet de tulipes", p: "15 €", e: "🌷" },
      { n: "un bouquet de tournesols", p: "18 €", e: "🌻" },
      { n: "une plante verte", p: "22 €", e: "🪴" },
      { n: "une orchidée", p: "25 €", e: "🌸" },
      { n: "une petite carte", p: "2,50 €", e: "💌" }
    ],
    must: [
      { c: "Saluer", kw: ["bonjour", "bonsoir", "salut", "madame", "monsieur"] },
      {
        c: "Dire pour qui et choisir des fleurs",
        kw: [
          "je voudrais",
          "je veux",
          "je prends",
          "je vais prendre",
          "vous avez",
          "avez-vous",
          "est-ce que vous avez",
          "s'il vous plaît",
          "s'il vous plait",
          "donnez-moi",
          "je cherche",
          "fleurs",
          "bouquet",
          "tulipes",
          "roses",
          "rose",
          "anniversaire",
          "pour ma voisine",
          "couleur",
          "jaune"
        ]
      },
      {
        c: "Demander le prix",
        kw: [
          "combien",
          "ça fait",
          "ca fait",
          "ça coûte",
          "ca coute",
          "c'est combien",
          "prix",
          "coûte",
          "coute",
          "coûtent",
          "en tout"
        ]
      },
      {
        c: "Payer",
        kw: [
          "voilà",
          "voila",
          "voici",
          "carte",
          "espèces",
          "especes",
          "payer",
          "je paie",
          "je paye",
          "monnaie",
          "euros",
          "billet de"
        ]
      },
      {
        c: "Prendre congé",
        kw: ["au revoir", "merci", "bonne journée", "bonne journee", "bonne soirée", "bonne soiree", "à bientôt", "a bientot"]
      }
    ],
    model: [
      ["E", "Bonjour madame, je peux vous aider ?"],
      ["C", "Bonjour. Je voudrais des fleurs pour l'anniversaire de ma voisine."],
      ["E", "Elle aime quelles couleurs ?"],
      ["C", "Elle aime le jaune. Vous avez des tulipes jaunes ?"],
      ["E", "Oui, voilà un joli bouquet de tulipes jaunes."],
      ["C", "Il est très joli ! C'est combien ?"],
      ["E", "15 euros."],
      ["C", "D'accord, je prends ce bouquet. Et je voudrais aussi une petite carte."],
      ["E", "Voilà. Ça fait 17,50 €."],
      ["C", "Voilà 20 euros."],
      ["E", "Je vous rends 2,50 €. Merci et bonne journée !"],
      ["C", "Merci, au revoir !"]
    ] },
  { id: "a1-s10-po1", level: "A1", sujet: 10, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Les amis et les fêtes",
    consigne: "Entretien dirigé (1 minute environ). Vous saluez l'examinateur et vous répondez à ses questions sur vous, votre famille, vos goûts et vos activités.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1 dakika). Sınav görevlisini selamlayın ve sizin, aileniz, zevkleriniz ve etkinlikleriniz hakkındaki sorularına cevap verin.",
      en: "Guided interview (about 1 minute). Greet the examiner and answer the questions about yourself, your family, your tastes and your activities."
    },
    prompts: [
      { q: "Bonjour ! Vous pouvez dire votre prénom ?", m: "Bonjour ! Mon prénom, c'est Esin." },
      { q: "Vous avez des amis en France ?", m: "Oui, j'ai quelques amis. Ils sont français et turcs." },
      { q: "Qu'est-ce que vous faites avec vos amis ?", m: "Nous jouons au handball et nous allons au café." },
      { q: "Quand est votre anniversaire ?", m: "Mon anniversaire, c'est le 12 mai." },
      { q: "Qu'est-ce que vous faites pour votre anniversaire ?", m: "J'invite mes amis et je prépare un gâteau." },
      { q: "Quelle est une fête importante dans votre pays ?", m: "En Turquie, il y a le Bayram. On mange des bonbons et on visite la famille." },
      { q: "Vous aimez danser ?", m: "Oui, j'adore danser dans les fêtes." },
      { q: "Vous invitez des amis chez vous ?", m: "Oui, le samedi soir, je fais un dîner turc pour mes amis." }
    ] },
  { id: "a1-s10-po2", level: "A1", sujet: 10, sec: "po", ex: 2, pts: 8, kind: "echange",
    title: "La santé et le corps",
    consigne: "Échange d'informations (2 minutes environ). Vous tirez des cartes. Avec chaque mot, vous posez une question à l'examinateur sur sa vie.",
    help: {
      tr: "Bilgi alışverişi (yaklaşık 2 dakika). Kart çekiyorsunuz. Her kelimeyle sınav görevlisine hayatı hakkında bir soru sorun.",
      en: "Information exchange (about 2 minutes). You draw cards. With each word, ask the examiner a question about his or her life."
    },
    cards: ["Sport ?", "Médecin ?", "Dormir ?", "Eau ?", "Marcher ?", "Légumes ?", "Fatigué ?"],
    prompts: [
      { q: "Sport ?", m: "Quel sport est-ce que vous faites ?" },
      { q: "Médecin ?", m: "Vous allez souvent chez le médecin ?" },
      { q: "Dormir ?", m: "Vous dormez combien d'heures par nuit ?" },
      { q: "Eau ?", m: "Vous buvez beaucoup d'eau ?" },
      { q: "Marcher ?", m: "Vous marchez beaucoup ?" },
      { q: "Légumes ?", m: "Vous mangez des légumes tous les jours ?" },
      { q: "Fatigué ?", m: "Vous êtes fatigué le soir ?" }
    ] },
  { id: "a1-s10-po3", level: "A1", sujet: 10, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "À l'office de tourisme",
    consigne: "Dialogue simulé (2 minutes environ). Vous visitez une ville. Vous allez à l'office de tourisme. Vous demandez un plan et des informations, vous achetez des billets, vous demandez le prix et vous payez. L'examinateur joue le rôle de l'employé.",
    help: {
      tr: "Canlandırma diyalog (yaklaşık 2 dakika). Bir şehri geziyorsunuz. Turizm ofisine gidiyorsunuz. Harita ve bilgi istiyor, bilet alıyor, fiyatı soruyor ve ödüyorsunuz. Sınav görevlisi çalışanı oynuyor.",
      en: "Role-play (about 2 minutes). You are visiting a town. You go to the tourist office. You ask for a map and information, buy tickets, ask the price and pay. The examiner plays the employee."
    },
    scenario: "Vous passez le week-end dans une jolie ville de France avec une amie.",
    you: "Vous êtes la touriste / le touriste.",
    them: "L'examinateur est l'employé(e) de l'office de tourisme.",
    items: [
      { n: "un plan de la ville", p: "gratuit", e: "🗺️" },
      { n: "une visite guidée", p: "9 €", e: "🚶" },
      { n: "un ticket pour le musée", p: "7 €", e: "🏛️" },
      { n: "un billet pour le bateau-promenade", p: "12 €", e: "⛴️" },
      { n: "un pass bus 1 jour", p: "5 €", e: "🚌" },
      { n: "une carte postale", p: "1,50 €", e: "📮" }
    ],
    must: [
      { c: "Saluer", kw: ["bonjour", "bonsoir", "salut", "madame", "monsieur"] },
      {
        c: "Demander un plan ou des informations",
        kw: [
          "plan",
          "informations",
          "information",
          "visiter",
          "qu'est-ce qu'il y a",
          "horaires",
          "musée",
          "musee",
          "à quelle heure",
          "a quelle heure"
        ]
      },
      {
        c: "Acheter des billets",
        kw: [
          "je voudrais",
          "je veux",
          "je prends",
          "je vais prendre",
          "vous avez",
          "avez-vous",
          "est-ce que vous avez",
          "s'il vous plaît",
          "s'il vous plait",
          "donnez-moi",
          "je cherche",
          "billet",
          "billets",
          "ticket",
          "tickets",
          "visite"
        ]
      },
      {
        c: "Demander le prix et payer",
        kw: [
          "combien",
          "ça fait",
          "ca fait",
          "ça coûte",
          "ca coute",
          "c'est combien",
          "prix",
          "coûte",
          "coute",
          "coûtent",
          "en tout",
          "voilà",
          "voila",
          "voici",
          "carte",
          "espèces",
          "especes",
          "payer",
          "je paie",
          "je paye",
          "monnaie",
          "euros",
          "billet de"
        ]
      },
      {
        c: "Prendre congé",
        kw: ["au revoir", "merci", "bonne journée", "bonne journee", "bonne soirée", "bonne soiree", "à bientôt", "a bientot"]
      }
    ],
    model: [
      ["E", "Bonjour ! Bienvenue à l'office de tourisme."],
      ["C", "Bonjour. Je voudrais un plan de la ville, s'il vous plaît."],
      ["E", "Voilà, il est gratuit."],
      ["C", "Merci. Qu'est-ce qu'il y a à visiter ?"],
      ["E", "Il y a le musée, le château et une promenade en bateau."],
      ["C", "La promenade en bateau, c'est combien ?"],
      ["E", "12 euros. Il y a un bateau à 14 heures."],
      ["C", "Je voudrais deux billets pour le bateau et deux tickets pour le musée, s'il vous plaît."],
      ["E", "Très bien. Ça fait 38 euros."],
      ["C", "Voilà 40 euros."],
      ["E", "Voilà 2 euros. Bonne visite !"],
      ["C", "Merci, au revoir !"]
    ] }
);
