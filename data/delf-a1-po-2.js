/* DELF A1 — production orale (entretien dirigé, échange d'informations, dialogue simulé), sujets 11–20 */
(window.DELF = window.DELF || []).push(
  { id: "a1-s11-po1", level: "A1", sujet: 11, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Ma nouvelle vie en France",
    consigne: "Entretien dirigé (1 minute environ). Vous saluez l'examinateur et vous répondez à ses questions sur vous, votre famille, vos goûts et vos activités.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1 dakika). Sınav görevlisini selamlayın ve sizin, aileniz, zevkleriniz ve etkinlikleriniz hakkındaki sorularına cevap verin.",
      en: "Guided interview (about 1 minute). Greet the examiner and answer the questions about yourself, your family, your tastes and your activities."
    },
    prompts: [
      { q: "Bonjour. Quel est votre prénom ?", m: "Bonjour ! Je m'appelle Esin." },
      { q: "Vous habitez en France depuis combien de temps ?", m: "J'habite en France depuis trois mois." },
      { q: "Vous habitez dans quelle ville ?", m: "J'habite dans une petite ville. C'est calme et joli." },
      { q: "Vous aimez la vie en France ?", m: "Oui, j'aime bien. Les gens sont gentils." },
      { q: "Qu'est-ce que vous aimez en France ?", m: "J'aime le pain, les marchés et les petites rues." },
      { q: "Qu'est-ce qui est difficile pour vous ?", m: "La langue est difficile. Je parle encore lentement." },
      { q: "Vous allez à des cours de français ?", m: "Oui, je vais à un cours deux fois par semaine." },
      { q: "Vous rentrez dans votre pays pour les vacances ?", m: "Oui, je vais rentrer en Turquie cet été." }
    ] },
  { id: "a1-s11-po2", level: "A1", sujet: 11, sec: "po", ex: 2, pts: 8, kind: "echange",
    title: "Le logement",
    consigne: "Échange d'informations (2 minutes environ). Vous tirez des cartes. Avec chaque mot, vous posez une question à l'examinateur sur sa vie.",
    help: {
      tr: "Bilgi alışverişi (yaklaşık 2 dakika). Kart çekiyorsunuz. Her kelimeyle sınav görevlisine hayatı hakkında bir soru sorun.",
      en: "Information exchange (about 2 minutes). You draw cards. With each word, ask the examiner a question about his or her life."
    },
    cards: ["Appartement ?", "Étage ?", "Balcon ?", "Voisins ?", "Jardin ?", "Chambre ?", "Déménager ?"],
    prompts: [
      { q: "Appartement ?", m: "Vous habitez dans un grand appartement ?" },
      { q: "Étage ?", m: "Votre appartement est à quel étage ?" },
      { q: "Balcon ?", m: "Est-ce que vous avez un balcon ?" },
      { q: "Voisins ?", m: "Vos voisins sont sympathiques ?" },
      { q: "Jardin ?", m: "Vous avez un jardin ?" },
      { q: "Chambre ?", m: "Il y a combien de chambres chez vous ?" },
      { q: "Déménager ?", m: "Vous voulez déménager cette année ?" }
    ] },
  { id: "a1-s11-po3", level: "A1", sujet: 11, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "À la papeterie",
    consigne: "Dialogue simulé (2 minutes environ). Vous êtes dans une papeterie. Vous achetez des fournitures pour votre cours de français. Vous demandez le prix et vous payez. L'examinateur joue le rôle du vendeur.",
    help: {
      tr: "Canlandırma diyalog (yaklaşık 2 dakika). Bir kırtasiyedesiniz. Fransızca kursunuz için kırtasiye malzemeleri alıyorsunuz. Fiyatı sorup ödeme yapıyorsunuz. Sınav görevlisi satıcıyı oynuyor.",
      en: "Role-play (about 2 minutes). You are in a stationery shop. You buy supplies for your French class. You ask the price and pay. The examiner plays the shop assistant."
    },
    scenario: "Lundi, vous commencez un nouveau cours de français. Vous avez besoin d'un cahier, de stylos et d'un petit dictionnaire.",
    you: "Vous êtes le client / la cliente.",
    them: "L'examinateur est le vendeur / la vendeuse de la papeterie.",
    items: [
      { n: "un grand cahier", p: "2,50 €", e: "📓" },
      { n: "un stylo bleu", p: "1,20 €", e: "🖊️" },
      { n: "un crayon à papier", p: "0,80 €", e: "✏️" },
      { n: "une gomme", p: "1,00 €", e: "🧽" },
      { n: "un classeur", p: "4,50 €", e: "📁" },
      { n: "un dictionnaire de poche", p: "8,90 €", e: "📕" },
      { n: "une trousse", p: "6,00 €", e: "👝" }
    ],
    must: [
      { c: "Saluer", kw: ["bonjour", "bonsoir", "salut", "madame", "monsieur"] },
      { c: "Demander des fournitures", kw: ["je voudrais", "je veux", "je prends", "je vais prendre", "vous avez", "avez-vous", "est-ce que vous avez", "s'il vous plaît", "s'il vous plait", "donnez-moi", "je cherche", "cahier", "stylo", "crayon", "gomme", "classeur", "dictionnaire", "trousse"] },
      { c: "Demander le prix", kw: ["combien", "ça fait", "ca fait", "ça coûte", "ca coute", "c'est combien", "prix", "coûte", "coute", "coûtent", "en tout"] },
      { c: "Payer", kw: ["voilà", "voila", "voici", "carte", "espèces", "especes", "payer", "je paie", "je paye", "monnaie", "euros", "billet de"] },
      { c: "Remercier et prendre congé", kw: ["au revoir", "merci", "bonne journée", "bonne journee", "bonne soirée", "bonne soiree", "à bientôt", "a bientot"] }
    ],
    model: [
      ["E", "Bonjour madame, je peux vous aider ?"],
      ["C", "Bonjour. Oui, je voudrais un cahier, s'il vous plaît."],
      ["E", "Un petit ou un grand cahier ?"],
      ["C", "Un grand cahier. Et deux stylos bleus, s'il vous plaît."],
      ["E", "Voilà. Autre chose ?"],
      ["C", "Oui. Vous avez des dictionnaires ?"],
      ["E", "Oui, ce petit dictionnaire est très bien. Il coûte 8,90 €."],
      ["C", "D'accord, je le prends. Ça fait combien en tout ?"],
      ["E", "Alors… ça fait 13,80 €."],
      ["C", "Je peux payer par carte ?"],
      ["E", "Bien sûr. Voilà votre ticket. Bon courage pour votre cours !"],
      ["C", "Merci beaucoup. Au revoir !"]
    ] },

  { id: "a1-s12-po1", level: "A1", sujet: 12, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Les repas",
    consigne: "Entretien dirigé (1 minute environ). Vous saluez l'examinateur et vous répondez à ses questions sur vous, votre famille, vos goûts et vos activités.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1 dakika). Sınav görevlisini selamlayın ve sizin, aileniz, zevkleriniz ve etkinlikleriniz hakkındaki sorularına cevap verin.",
      en: "Guided interview (about 1 minute). Greet the examiner and answer the questions about yourself, your family, your tastes and your activities."
    },
    prompts: [
      { q: "Bonjour, asseyez-vous. Quel est votre nom ?", m: "Merci. Bonjour, je m'appelle Esin." },
      { q: "Vous prenez un petit-déjeuner le matin ?", m: "Oui, je mange du pain, du fromage, des olives et je bois du thé." },
      { q: "Où est-ce que vous déjeunez ?", m: "Je déjeune au travail, avec mes collègues." },
      { q: "Vous mangez à quelle heure le soir ?", m: "Je dîne vers 19 h 30." },
      { q: "Qui fait la cuisine chez vous ?", m: "C'est moi. J'aime bien faire la cuisine." },
      { q: "Quel plat de votre pays est-ce que vous aimez ?", m: "J'aime beaucoup les mantı. Ce sont des petites pâtes à la viande." },
      { q: "Vous buvez du thé ou du café ?", m: "Je bois beaucoup de thé, le matin et l'après-midi." },
      { q: "Vous aimez les desserts ?", m: "Oui, j'adore les gâteaux au chocolat." }
    ] },
  { id: "a1-s12-po2", level: "A1", sujet: 12, sec: "po", ex: 2, pts: 8, kind: "echange",
    title: "Le sport",
    consigne: "Échange d'informations (2 minutes environ). Vous tirez des cartes. Avec chaque mot, vous posez une question à l'examinateur sur sa vie.",
    help: {
      tr: "Bilgi alışverişi (yaklaşık 2 dakika). Kart çekiyorsunuz. Her kelimeyle sınav görevlisine hayatı hakkında bir soru sorun.",
      en: "Information exchange (about 2 minutes). You draw cards. With each word, ask the examiner a question about his or her life."
    },
    cards: ["Club ?", "Course à pied ?", "Match ?", "Natation ?", "Ski ?", "Équipe ?", "Salle de sport ?"],
    prompts: [
      { q: "Club ?", m: "Vous êtes dans un club de sport ?" },
      { q: "Course à pied ?", m: "Vous faites de la course à pied ?" },
      { q: "Match ?", m: "Vous allez voir des matchs au stade ?" },
      { q: "Natation ?", m: "Vous savez nager ?" },
      { q: "Ski ?", m: "Vous faites du ski en hiver ?" },
      { q: "Équipe ?", m: "Quelle est votre équipe de football préférée ?" },
      { q: "Salle de sport ?", m: "Vous allez à la salle de sport le soir ?" }
    ] },
  { id: "a1-s12-po3", level: "A1", sujet: 12, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "À la fromagerie",
    consigne: "Dialogue simulé (2 minutes environ). Vous êtes dans une fromagerie. Vous achetez des fromages pour un dîner. Vous demandez un conseil, vous demandez le prix et vous payez. L'examinateur joue le rôle du fromager.",
    help: {
      tr: "Canlandırma diyalog (yaklaşık 2 dakika). Bir peynircidesiniz. Bir akşam yemeği için peynir alıyorsunuz. Tavsiye istiyor, fiyatı soruyor ve ödüyorsunuz. Sınav görevlisi peynirciyi oynuyor.",
      en: "Role-play (about 2 minutes). You are in a cheese shop. You buy cheese for a dinner. You ask for advice, ask the price and pay. The examiner plays the cheese seller."
    },
    scenario: "Ce soir, vous dînez chez des amis français. Vous voulez apporter des fromages.",
    you: "Vous êtes le client / la cliente.",
    them: "L'examinateur est le fromager / la fromagère.",
    items: [
      { n: "un camembert", p: "4,50 €", e: "🧀" },
      { n: "200 g de comté", p: "5,60 €", e: "🧀" },
      { n: "un fromage de chèvre", p: "3,20 €", e: "🐐" },
      { n: "250 g de brie", p: "4,00 €", e: "🧀" },
      { n: "un pot de confiture de figues", p: "4,80 €", e: "🍯" },
      { n: "une bouteille de jus de raisin", p: "3,50 €", e: "🍇" }
    ],
    must: [
      { c: "Saluer", kw: ["bonjour", "bonsoir", "salut", "madame", "monsieur"] },
      { c: "Demander des fromages ou un conseil", kw: ["je voudrais", "je veux", "je prends", "je vais prendre", "vous avez", "avez-vous", "est-ce que vous avez", "s'il vous plaît", "s'il vous plait", "donnez-moi", "je cherche", "goûter", "gouter", "conseil", "fromage", "camembert", "comté", "comte", "chèvre", "chevre", "brie", "grammes"] },
      { c: "Demander le prix", kw: ["combien", "ça fait", "ca fait", "ça coûte", "ca coute", "c'est combien", "prix", "coûte", "coute", "coûtent", "en tout"] },
      { c: "Payer", kw: ["voilà", "voila", "voici", "carte", "espèces", "especes", "payer", "je paie", "je paye", "monnaie", "euros", "billet de"] },
      { c: "Prendre congé", kw: ["au revoir", "merci", "bonne journée", "bonne journee", "bonne soirée", "bonne soiree", "à bientôt", "a bientot"] }
    ],
    model: [
      ["E", "Bonjour madame, qu'est-ce que je vous sers ?"],
      ["C", "Bonjour monsieur. Ce soir, je dîne chez des amis. Je voudrais trois fromages, s'il vous plaît."],
      ["E", "Très bien. Je vous propose un camembert, du comté et un fromage de chèvre."],
      ["C", "D'accord. Le comté, c'est combien ?"],
      ["E", "200 grammes, ça fait 5,60 €."],
      ["C", "Parfait, 200 grammes de comté. Je peux goûter le chèvre ?"],
      ["E", "Bien sûr, voilà."],
      ["C", "Il est très bon ! Je prends aussi le chèvre et un camembert."],
      ["E", "Autre chose ?"],
      ["C", "Non, merci, c'est tout. Ça fait combien ?"],
      ["E", "Ça fait 13,30 €."],
      ["C", "Voilà 15 euros."],
      ["E", "Je vous rends 1,70 €. Bonne soirée, madame !"],
      ["C", "Merci, bonne soirée. Au revoir !"]
    ] },

  { id: "a1-s13-po1", level: "A1", sujet: 13, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Mes vacances",
    consigne: "Entretien dirigé (1 minute environ). Vous saluez l'examinateur et vous répondez à ses questions sur vous, votre famille, vos goûts et vos activités.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1 dakika). Sınav görevlisini selamlayın ve sizin, aileniz, zevkleriniz ve etkinlikleriniz hakkındaki sorularına cevap verin.",
      en: "Guided interview (about 1 minute). Greet the examiner and answer the questions about yourself, your family, your tastes and your activities."
    },
    prompts: [
      { q: "Bonjour ! Vous vous présentez, s'il vous plaît ?", m: "Bonjour ! Je m'appelle Esin. Je suis turque." },
      { q: "Vous aimez les vacances à la mer ?", m: "Oui, j'adore la mer. J'aime nager et marcher sur la plage." },
      { q: "Vous partez en vacances quand ?", m: "En général, je pars en août." },
      { q: "Avec qui est-ce que vous partez ?", m: "Je pars avec des amis ou avec ma famille." },
      { q: "Vous préférez l'hôtel ou le camping ?", m: "Je préfère l'hôtel. C'est plus confortable." },
      { q: "Qu'est-ce que vous faites en vacances ?", m: "Je visite des villes, je mange au restaurant et je me repose." },
      { q: "Vous connaissez des régions de France ?", m: "Je connais un peu la Provence. C'est très beau." },
      { q: "Où est-ce que vous allez partir l'été prochain ?", m: "Je vais aller en Bretagne, au bord de la mer." }
    ] },
  { id: "a1-s13-po2", level: "A1", sujet: 13, sec: "po", ex: 2, pts: 8, kind: "echange",
    title: "Les animaux",
    consigne: "Échange d'informations (2 minutes environ). Vous tirez des cartes. Avec chaque mot, vous posez une question à l'examinateur sur sa vie.",
    help: {
      tr: "Bilgi alışverişi (yaklaşık 2 dakika). Kart çekiyorsunuz. Her kelimeyle sınav görevlisine hayatı hakkında bir soru sorun.",
      en: "Information exchange (about 2 minutes). You draw cards. With each word, ask the examiner a question about his or her life."
    },
    cards: ["Chien ?", "Chat ?", "Oiseaux ?", "Zoo ?", "Poissons ?", "Cheval ?", "Animal préféré ?"],
    prompts: [
      { q: "Chien ?", m: "Est-ce que vous avez un chien ?" },
      { q: "Chat ?", m: "Vous aimez les chats ?" },
      { q: "Oiseaux ?", m: "Vous aimez regarder les oiseaux ?" },
      { q: "Zoo ?", m: "Vous allez souvent au zoo ?" },
      { q: "Poissons ?", m: "Vous avez des poissons rouges ?" },
      { q: "Cheval ?", m: "Vous faites du cheval ?" },
      { q: "Animal préféré ?", m: "Quel est votre animal préféré ?" }
    ] },
  { id: "a1-s13-po3", level: "A1", sujet: 13, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Au snack de la piscine",
    consigne: "Dialogue simulé (2 minutes environ). Vous êtes au snack de la piscine. Vous commandez à manger et à boire pour vous et une amie. Vous demandez le prix et vous payez. L'examinateur joue le rôle du serveur.",
    help: {
      tr: "Canlandırma diyalog (yaklaşık 2 dakika). Yüzme havuzunun büfesindesiniz. Kendiniz ve bir arkadaşınız için yiyecek ve içecek sipariş ediyorsunuz. Fiyatı sorup ödeme yapıyorsunuz. Sınav görevlisi satıcıyı oynuyor.",
      en: "Role-play (about 2 minutes). You are at the swimming pool snack bar. You order food and drinks for you and a friend. You ask the price and pay. The examiner plays the server."
    },
    scenario: "Vous nagez une heure avec une amie. Après, vous avez faim et soif. Vous allez au snack de la piscine.",
    you: "Vous êtes le client / la cliente.",
    them: "L'examinateur est le serveur / la serveuse du snack.",
    items: [
      { n: "un sandwich au thon", p: "4,50 €", e: "🥪" },
      { n: "une salade de pâtes", p: "5,00 €", e: "🥗" },
      { n: "une part de pizza", p: "3,50 €", e: "🍕" },
      { n: "une bouteille d'eau", p: "1,50 €", e: "💧" },
      { n: "un jus d'orange", p: "2,50 €", e: "🧃" },
      { n: "une glace à la vanille", p: "2,00 €", e: "🍦" }
    ],
    must: [
      { c: "Saluer", kw: ["bonjour", "bonsoir", "salut", "madame", "monsieur"] },
      { c: "Commander à manger et à boire", kw: ["je voudrais", "je veux", "je prends", "je vais prendre", "vous avez", "avez-vous", "est-ce que vous avez", "s'il vous plaît", "s'il vous plait", "donnez-moi", "sandwich", "salade", "pizza", "eau", "jus", "glace"] },
      { c: "Demander le prix", kw: ["combien", "ça fait", "ca fait", "ça coûte", "ca coute", "c'est combien", "prix", "coûte", "coute", "coûtent", "en tout"] },
      { c: "Payer", kw: ["voilà", "voila", "voici", "carte", "espèces", "especes", "payer", "je paie", "je paye", "monnaie", "euros", "billet de"] },
      { c: "Prendre congé", kw: ["au revoir", "merci", "bonne journée", "bonne journee", "bonne soirée", "bonne soiree", "à bientôt", "a bientot"] }
    ],
    model: [
      ["E", "Bonjour ! Qu'est-ce que vous voulez ?"],
      ["C", "Bonjour monsieur. Je voudrais deux sandwichs au thon, s'il vous plaît."],
      ["E", "Désolé, il reste un seul sandwich au thon."],
      ["C", "Ah, d'accord. Alors un sandwich au thon et une part de pizza."],
      ["E", "Très bien. Et pour boire ?"],
      ["C", "Deux bouteilles d'eau, s'il vous plaît. Elles sont fraîches ?"],
      ["E", "Oui, très fraîches ! C'est tout ?"],
      ["C", "Oui, c'est tout. C'est combien ?"],
      ["E", "Ça fait 11 euros."],
      ["C", "Voilà. Je paie par carte."],
      ["E", "Merci. Voilà votre ticket. Bon appétit !"],
      ["C", "Merci, bonne journée !"]
    ] },

  { id: "a1-s14-po1", level: "A1", sujet: 14, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Se déplacer",
    consigne: "Entretien dirigé (1 minute environ). Vous saluez l'examinateur et vous répondez à ses questions sur vous, votre famille, vos goûts et vos activités.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1 dakika). Sınav görevlisini selamlayın ve sizin, aileniz, zevkleriniz ve etkinlikleriniz hakkındaki sorularına cevap verin.",
      en: "Guided interview (about 1 minute). Greet the examiner and answer the questions about yourself, your family, your tastes and your activities."
    },
    prompts: [
      { q: "Bonjour ! Je m'appelle Paul. Et vous ?", m: "Bonjour Paul. Moi, je m'appelle Esin." },
      { q: "Comment est-ce que vous vous déplacez en ville ?", m: "Je prends le bus ou je marche." },
      { q: "C'est loin, votre travail ?", m: "Non, c'est à 20 minutes en bus." },
      { q: "Vous avez le permis de conduire ?", m: "Oui, j'ai le permis, mais je n'ai pas de voiture en France." },
      { q: "Vous aimez faire du vélo ?", m: "Oui, j'aime faire du vélo le week-end." },
      { q: "Un ticket de bus coûte combien dans votre ville ?", m: "Un ticket coûte 1,70 €." },
      { q: "Vous prenez souvent le train ?", m: "Oui, je prends le train pour visiter d'autres villes." },
      { q: "Vous préférez le train ou l'avion ?", m: "Je préfère le train. C'est plus calme." }
    ] },
  { id: "a1-s14-po2", level: "A1", sujet: 14, sec: "po", ex: 2, pts: 8, kind: "echange",
    title: "Les fêtes",
    consigne: "Échange d'informations (2 minutes environ). Vous tirez des cartes. Avec chaque mot, vous posez une question à l'examinateur sur sa vie.",
    help: {
      tr: "Bilgi alışverişi (yaklaşık 2 dakika). Kart çekiyorsunuz. Her kelimeyle sınav görevlisine hayatı hakkında bir soru sorun.",
      en: "Information exchange (about 2 minutes). You draw cards. With each word, ask the examiner a question about his or her life."
    },
    cards: ["Fête préférée ?", "Cadeau ?", "Nouvel An ?", "Invités ?", "Gâteau ?", "Déguisement ?", "Fête des mères ?"],
    prompts: [
      { q: "Fête préférée ?", m: "Quelle est votre fête préférée ?" },
      { q: "Cadeau ?", m: "Qu'est-ce que vous offrez comme cadeau à vos amis ?" },
      { q: "Nouvel An ?", m: "Qu'est-ce que vous faites pour le Nouvel An ?" },
      { q: "Invités ?", m: "Vous aimez avoir des invités chez vous ?" },
      { q: "Gâteau ?", m: "Vous faites des gâteaux pour les fêtes ?" },
      { q: "Déguisement ?", m: "Vous aimez les fêtes déguisées ?" },
      { q: "Fête des mères ?", m: "Vous fêtez la fête des mères ?" }
    ] },
  { id: "a1-s14-po3", level: "A1", sujet: 14, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "À la poissonnerie",
    consigne: "Dialogue simulé (2 minutes environ). Vous êtes à la poissonnerie. Vous achetez du poisson pour un dîner. Vous posez des questions, vous demandez le prix et vous payez. L'examinateur joue le rôle du poissonnier.",
    help: {
      tr: "Canlandırma diyalog (yaklaşık 2 dakika). Bir balıkçıdasınız. Bir akşam yemeği için balık alıyorsunuz. Soru soruyor, fiyatı öğreniyor ve ödüyorsunuz. Sınav görevlisi balıkçıyı oynuyor.",
      en: "Role-play (about 2 minutes). You are at the fishmonger's. You buy fish for a dinner. You ask questions, ask the price and pay. The examiner plays the fishmonger."
    },
    scenario: "Vendredi soir, vous préparez un dîner pour quatre personnes. Vous voulez cuisiner du poisson.",
    you: "Vous êtes le client / la cliente.",
    them: "L'examinateur est le poissonnier / la poissonnière.",
    items: [
      { n: "une dorade", p: "8,00 €", e: "🐟" },
      { n: "une truite", p: "6,00 €", e: "🐟" },
      { n: "un filet de saumon (200 g)", p: "5,50 €", e: "🍣" },
      { n: "un kilo de moules", p: "6,00 €", e: "🦪" },
      { n: "une douzaine de crevettes", p: "7,00 €", e: "🦐" },
      { n: "un citron", p: "0,50 €", e: "🍋" }
    ],
    must: [
      { c: "Saluer", kw: ["bonjour", "bonsoir", "salut", "madame", "monsieur"] },
      { c: "Demander du poisson", kw: ["je voudrais", "je veux", "je prends", "je vais prendre", "vous avez", "avez-vous", "est-ce que vous avez", "s'il vous plaît", "s'il vous plait", "donnez-moi", "je cherche", "poisson", "dorade", "truite", "saumon", "moules", "crevettes", "citron", "personnes"] },
      { c: "Demander le prix", kw: ["combien", "ça fait", "ca fait", "ça coûte", "ca coute", "c'est combien", "prix", "coûte", "coute", "coûtent", "en tout"] },
      { c: "Payer", kw: ["voilà", "voila", "voici", "carte", "espèces", "especes", "payer", "je paie", "je paye", "monnaie", "euros", "billet de"] },
      { c: "Prendre congé", kw: ["au revoir", "merci", "bonne journée", "bonne journee", "bonne soirée", "bonne soiree", "à bientôt", "a bientot"] }
    ],
    model: [
      ["E", "Bonjour madame, vous désirez ?"],
      ["C", "Bonjour. Je voudrais du poisson pour le dîner. Nous sommes quatre."],
      ["E", "J'ai de très belles dorades aujourd'hui."],
      ["C", "Elles coûtent combien ?"],
      ["E", "8 euros la dorade. Une dorade, c'est bien pour deux personnes."],
      ["C", "Alors je prends deux dorades, s'il vous plaît. Vous pouvez nettoyer les poissons ?"],
      ["E", "Bien sûr. Et avec ceci ?"],
      ["C", "Deux citrons aussi. Ça fait combien ?"],
      ["E", "Ça fait 17 euros."],
      ["C", "Voilà, je paie par carte."],
      ["E", "Merci. Voilà votre poisson. Bon appétit et bonne soirée !"],
      ["C", "Merci, au revoir !"]
    ] },

  { id: "a1-s15-po1", level: "A1", sujet: 15, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Mon pays",
    consigne: "Entretien dirigé (1 minute environ). Vous saluez l'examinateur et vous répondez à ses questions sur vous, votre famille, vos goûts et vos activités.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1 dakika). Sınav görevlisini selamlayın ve sizin, aileniz, zevkleriniz ve etkinlikleriniz hakkındaki sorularına cevap verin.",
      en: "Guided interview (about 1 minute). Greet the examiner and answer the questions about yourself, your family, your tastes and your activities."
    },
    prompts: [
      { q: "Bonjour madame, comment allez-vous ?", m: "Bonjour ! Je vais bien, merci. Et vous ?" },
      { q: "Très bien, merci. Vous vous appelez… ?", m: "Je m'appelle Esin." },
      { q: "Vous êtes de quel pays ?", m: "Je viens de Turquie. Je suis turque." },
      { q: "C'est comment, votre pays ?", m: "C'est un grand pays. Il y a la mer et les montagnes." },
      { q: "Quelle ville de votre pays est-ce que vous aimez ?", m: "J'aime beaucoup Istanbul. C'est une très belle ville." },
      { q: "Il fait chaud en Turquie ?", m: "En été, il fait très chaud. En hiver, il fait froid dans les montagnes." },
      { q: "Qu'est-ce qu'on mange en Turquie ?", m: "On mange des kebabs, des légumes, du riz et des pâtisseries." },
      { q: "Qu'est-ce que vous aimez faire là-bas ?", m: "J'aime boire du thé avec ma famille et marcher au bord de la mer." }
    ] },
  { id: "a1-s15-po2", level: "A1", sujet: 15, sec: "po", ex: 2, pts: 8, kind: "echange",
    title: "L'école et les études",
    consigne: "Échange d'informations (2 minutes environ). Vous tirez des cartes. Avec chaque mot, vous posez une question à l'examinateur sur sa vie.",
    help: {
      tr: "Bilgi alışverişi (yaklaşık 2 dakika). Kart çekiyorsunuz. Her kelimeyle sınav görevlisine hayatı hakkında bir soru sorun.",
      en: "Information exchange (about 2 minutes). You draw cards. With each word, ask the examiner a question about his or her life."
    },
    cards: ["École ?", "Professeur ?", "Matière préférée ?", "Université ?", "Examen ?", "Cours du soir ?", "Langue étrangère ?"],
    prompts: [
      { q: "École ?", m: "Il y a une école près de chez vous ?" },
      { q: "Professeur ?", m: "Vous êtes professeur ?" },
      { q: "Matière préférée ?", m: "Quelle est votre matière préférée ?" },
      { q: "Université ?", m: "Vous étudiez à l'université ?" },
      { q: "Examen ?", m: "Vous avez des examens cette année ?" },
      { q: "Cours du soir ?", m: "Vous prenez des cours le soir ?" },
      { q: "Langue étrangère ?", m: "Vous apprenez une langue étrangère ?" }
    ] },
  { id: "a1-s15-po3", level: "A1", sujet: 15, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "À la boutique de souvenirs",
    consigne: "Dialogue simulé (2 minutes environ). Vous êtes dans une boutique de souvenirs. Vous achetez des cadeaux. Vous demandez le prix et vous payez. L'examinateur joue le rôle du vendeur.",
    help: {
      tr: "Canlandırma diyalog (yaklaşık 2 dakika). Bir hediyelik eşya dükkânındasınız. Hediyeler alıyorsunuz. Fiyatı sorup ödeme yapıyorsunuz. Sınav görevlisi satıcıyı oynuyor.",
      en: "Role-play (about 2 minutes). You are in a souvenir shop. You buy presents. You ask the price and pay. The examiner plays the shop assistant."
    },
    scenario: "Vous visitez le Mont-Saint-Michel. Vous voulez acheter des petits cadeaux pour votre famille et pour une amie.",
    you: "Vous êtes le client / la cliente.",
    them: "L'examinateur est le vendeur / la vendeuse de la boutique.",
    items: [
      { n: "une carte postale", p: "1,00 €", e: "📮" },
      { n: "un porte-clés", p: "4,50 €", e: "🔑" },
      { n: "un magnet", p: "3,50 €", e: "🧲" },
      { n: "une tasse", p: "8,00 €", e: "☕" },
      { n: "une boîte de biscuits", p: "6,50 €", e: "🍪" },
      { n: "un tee-shirt", p: "15,00 €", e: "👕" }
    ],
    must: [
      { c: "Saluer", kw: ["bonjour", "bonsoir", "salut", "madame", "monsieur"] },
      { c: "Demander des cadeaux", kw: ["je voudrais", "je veux", "je prends", "je vais prendre", "vous avez", "avez-vous", "est-ce que vous avez", "s'il vous plaît", "s'il vous plait", "donnez-moi", "je cherche", "cadeau", "carte postale", "porte-clés", "porte-cles", "magnet", "tasse", "biscuits", "tee-shirt"] },
      { c: "Demander le prix", kw: ["combien", "ça fait", "ca fait", "ça coûte", "ca coute", "c'est combien", "prix", "coûte", "coute", "coûtent", "en tout"] },
      { c: "Payer", kw: ["voilà", "voila", "voici", "carte bancaire", "par carte", "espèces", "especes", "payer", "je paie", "je paye", "monnaie", "euros", "billet de"] },
      { c: "Prendre congé", kw: ["au revoir", "merci", "bonne journée", "bonne journee", "bonne soirée", "bonne soiree", "à bientôt", "a bientot"] }
    ],
    model: [
      ["E", "Bonjour ! Je peux vous aider ?"],
      ["C", "Bonjour madame. Oui, je cherche des cadeaux pour ma famille."],
      ["E", "Nous avons des tasses, des magnets, des biscuits…"],
      ["C", "Elle coûte combien, cette tasse ?"],
      ["E", "8 euros."],
      ["C", "Elle est jolie. Je prends deux tasses. Vous avez aussi des porte-clés ?"],
      ["E", "Oui, ils sont là. Ils coûtent 4,50 €."],
      ["C", "Je prends un porte-clés pour une amie, et trois cartes postales."],
      ["E", "Très bien. C'est tout ?"],
      ["C", "Oui, c'est tout. Ça fait combien en tout ?"],
      ["E", "Ça fait 23,50 €."],
      ["C", "Voilà 25 euros."],
      ["E", "Je vous rends 1,50 €. Merci et bonne visite !"],
      ["C", "Merci, au revoir !"]
    ] },

  { id: "a1-s16-po1", level: "A1", sujet: 16, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "La nature et le plein air",
    consigne: "Entretien dirigé (1 minute environ). Vous saluez l'examinateur et vous répondez à ses questions sur vous, votre famille, vos goûts et vos activités.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1 dakika). Sınav görevlisini selamlayın ve sizin, aileniz, zevkleriniz ve etkinlikleriniz hakkındaki sorularına cevap verin.",
      en: "Guided interview (about 1 minute). Greet the examiner and answer the questions about yourself, your family, your tastes and your activities."
    },
    prompts: [
      { q: "Bonjour ! Je suis l'examinatrice. Et vous, vous êtes… ?", m: "Bonjour madame. Je suis Esin." },
      { q: "Vous préférez la ville ou la campagne ?", m: "Je préfère la campagne. C'est calme." },
      { q: "Vous allez souvent dans un parc ?", m: "Oui, je vais au parc deux fois par semaine." },
      { q: "Vous aimez la montagne ?", m: "Oui, j'aime marcher en montagne en été." },
      { q: "Vous faites du sport dehors ?", m: "Oui, je cours dans le parc le matin." },
      { q: "Vous avez des plantes chez vous ?", m: "Oui, j'ai deux petites plantes dans le salon." },
      { q: "Quel temps est-ce que vous aimez ?", m: "J'aime quand il fait beau, mais pas trop chaud." },
      { q: "Vous aimez faire des pique-niques ?", m: "Oui, j'aime pique-niquer avec des amis le dimanche." }
    ] },
  { id: "a1-s16-po2", level: "A1", sujet: 16, sec: "po", ex: 2, pts: 8, kind: "echange",
    title: "Les vêtements",
    consigne: "Échange d'informations (2 minutes environ). Vous tirez des cartes. Avec chaque mot, vous posez une question à l'examinateur sur sa vie.",
    help: {
      tr: "Bilgi alışverişi (yaklaşık 2 dakika). Kart çekiyorsunuz. Her kelimeyle sınav görevlisine hayatı hakkında bir soru sorun.",
      en: "Information exchange (about 2 minutes). You draw cards. With each word, ask the examiner a question about his or her life."
    },
    cards: ["Chaussures ?", "Manteau ?", "Lunettes ?", "Soldes ?", "Montre ?", "Jean ?", "Style ?"],
    prompts: [
      { q: "Chaussures ?", m: "Vous avez combien de paires de chaussures ?" },
      { q: "Manteau ?", m: "Votre manteau est de quelle couleur ?" },
      { q: "Lunettes ?", m: "Vous portez des lunettes ?" },
      { q: "Soldes ?", m: "Vous faites les soldes ?" },
      { q: "Montre ?", m: "Est-ce que vous avez une montre ?" },
      { q: "Jean ?", m: "Vous portez souvent un jean ?" },
      { q: "Style ?", m: "Vous préférez les vêtements de sport ou les vêtements chics ?" }
    ] },
  { id: "a1-s16-po3", level: "A1", sujet: 16, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Au magasin de téléphonie",
    consigne: "Dialogue simulé (2 minutes environ). Vous êtes dans un magasin de téléphonie. Vous cherchez des accessoires pour votre téléphone. Vous expliquez votre besoin, vous demandez le prix et vous payez. L'examinateur joue le rôle du vendeur.",
    help: {
      tr: "Canlandırma diyalog (yaklaşık 2 dakika). Bir telefon mağazasındasınız. Telefonunuz için aksesuar arıyorsunuz. Neye ihtiyacınız olduğunu açıklıyor, fiyatı soruyor ve ödüyorsunuz. Sınav görevlisi satıcıyı oynuyor.",
      en: "Role-play (about 2 minutes). You are in a phone shop. You look for accessories for your phone. You explain what you need, ask the price and pay. The examiner plays the shop assistant."
    },
    scenario: "Le câble de votre téléphone ne marche plus et l'écran est fragile. Vous allez dans un magasin de téléphonie près de chez vous.",
    you: "Vous êtes le client / la cliente.",
    them: "L'examinateur est le vendeur / la vendeuse.",
    items: [
      { n: "un chargeur", p: "19,90 €", e: "🔌" },
      { n: "un câble USB", p: "9,90 €", e: "🔗" },
      { n: "une protection d'écran", p: "12,00 €", e: "📱" },
      { n: "une coque", p: "15,00 €", e: "📲" },
      { n: "des écouteurs", p: "25,00 €", e: "🎧" },
      { n: "une batterie externe", p: "29,00 €", e: "🔋" }
    ],
    must: [
      { c: "Saluer", kw: ["bonjour", "bonsoir", "salut", "madame", "monsieur"] },
      { c: "Expliquer son besoin et demander un accessoire", kw: ["je voudrais", "je veux", "je prends", "je vais prendre", "vous avez", "avez-vous", "est-ce que vous avez", "s'il vous plaît", "s'il vous plait", "je cherche", "ne marche pas", "ne marche plus", "chargeur", "câble", "cable", "écran", "ecran", "coque", "écouteurs", "ecouteurs", "batterie"] },
      { c: "Demander le prix", kw: ["combien", "ça fait", "ca fait", "ça coûte", "ca coute", "c'est combien", "prix", "coûte", "coute", "coûtent", "en tout", "cher"] },
      { c: "Payer", kw: ["voilà", "voila", "voici", "par carte", "carte bancaire", "espèces", "especes", "payer", "je paie", "je paye", "monnaie", "euros", "billet de"] },
      { c: "Prendre congé", kw: ["au revoir", "merci", "bonne journée", "bonne journee", "bonne soirée", "bonne soiree", "à bientôt", "a bientot"] }
    ],
    model: [
      ["E", "Bonjour, je peux vous aider ?"],
      ["C", "Bonjour monsieur. Oui, mon câble ne marche plus. Je cherche un chargeur, s'il vous plaît."],
      ["E", "Vous avez quel téléphone ?"],
      ["C", "Celui-ci. Voilà."],
      ["E", "D'accord. Ce chargeur coûte 19,90 €."],
      ["C", "C'est un peu cher. Vous avez un câble seulement ?"],
      ["E", "Oui, le câble coûte 9,90 €."],
      ["C", "Bon, je prends le câble. Et je voudrais aussi une protection d'écran."],
      ["E", "Très bien. Je mets la protection sur votre téléphone ?"],
      ["C", "Oui, merci, c'est gentil ! Ça fait combien en tout ?"],
      ["E", "Ça fait 21,90 €. Vous payez comment ?"],
      ["C", "Par carte, s'il vous plaît."],
      ["E", "Merci. Bonne journée !"],
      ["C", "Merci, au revoir !"]
    ] },

  { id: "a1-s17-po1", level: "A1", sujet: 17, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Les achats",
    consigne: "Entretien dirigé (1 minute environ). Vous saluez l'examinateur et vous répondez à ses questions sur vous, votre famille, vos goûts et vos activités.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1 dakika). Sınav görevlisini selamlayın ve sizin, aileniz, zevkleriniz ve etkinlikleriniz hakkındaki sorularına cevap verin.",
      en: "Guided interview (about 1 minute). Greet the examiner and answer the questions about yourself, your family, your tastes and your activities."
    },
    prompts: [
      { q: "Bonjour, entrez ! Comment est-ce que vous vous appelez ?", m: "Bonjour, merci. Je m'appelle Esin." },
      { q: "Où est-ce que vous faites les courses ?", m: "Je fais les courses au supermarché, près de chez moi." },
      { q: "Vous faites les courses quel jour ?", m: "Le samedi matin, en général." },
      { q: "Il y a des magasins près de chez vous ?", m: "Oui, il y a une boulangerie, une pharmacie et un petit supermarché." },
      { q: "Vous aimez faire les magasins ?", m: "Oui, j'aime regarder les vêtements et les chaussures." },
      { q: "Vous achetez des choses sur internet ?", m: "Oui, quelquefois. J'achète des livres et des vêtements." },
      { q: "Vous préférez payer par carte ou en espèces ?", m: "Je préfère payer par carte. C'est pratique." },
      { q: "Qu'est-ce que vous achetez pour un anniversaire ?", m: "J'achète souvent des fleurs ou un livre." }
    ] },
  { id: "a1-s17-po2", level: "A1", sujet: 17, sec: "po", ex: 2, pts: 8, kind: "echange",
    title: "Cuisine et recettes",
    consigne: "Échange d'informations (2 minutes environ). Vous tirez des cartes. Avec chaque mot, vous posez une question à l'examinateur sur sa vie.",
    help: {
      tr: "Bilgi alışverişi (yaklaşık 2 dakika). Kart çekiyorsunuz. Her kelimeyle sınav görevlisine hayatı hakkında bir soru sorun.",
      en: "Information exchange (about 2 minutes). You draw cards. With each word, ask the examiner a question about his or her life."
    },
    cards: ["Recette ?", "Dessert ?", "Épices ?", "Thé ?", "Pâtes ?", "Fromage ?", "Chocolat ?"],
    prompts: [
      { q: "Recette ?", m: "Vous avez une recette préférée ?" },
      { q: "Dessert ?", m: "Quel dessert est-ce que vous aimez ?" },
      { q: "Épices ?", m: "Vous mettez des épices dans vos plats ?" },
      { q: "Thé ?", m: "Vous buvez du thé l'après-midi ?" },
      { q: "Pâtes ?", m: "Vous mangez souvent des pâtes ?" },
      { q: "Fromage ?", m: "Quel fromage français est-ce que vous préférez ?" },
      { q: "Chocolat ?", m: "Vous aimez le chocolat noir ?" }
    ] },
  { id: "a1-s17-po3", level: "A1", sujet: 17, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "À la crêperie",
    consigne: "Dialogue simulé (2 minutes environ). Vous êtes dans une crêperie. Vous commandez un plat, une boisson et un dessert. Vous demandez l'addition et vous payez. L'examinateur joue le rôle du serveur.",
    help: {
      tr: "Canlandırma diyalog (yaklaşık 2 dakika). Bir krepçidesiniz. Bir yemek, bir içecek ve bir tatlı sipariş ediyorsunuz. Hesabı isteyip ödüyorsunuz. Sınav görevlisi garsonu oynuyor.",
      en: "Role-play (about 2 minutes). You are in a crêpe restaurant. You order a main dish, a drink and a dessert. You ask for the bill and pay. The examiner plays the waiter."
    },
    scenario: "À midi, vous déjeunez dans une crêperie avec un collègue.",
    you: "Vous êtes le client / la cliente.",
    them: "L'examinateur est le serveur / la serveuse.",
    items: [
      { n: "une galette complète (jambon, œuf, fromage)", p: "9,50 €", e: "🍳" },
      { n: "une galette aux champignons", p: "8,50 €", e: "🍄" },
      { n: "une crêpe au sucre", p: "3,50 €", e: "🥞" },
      { n: "une crêpe au chocolat", p: "4,50 €", e: "🍫" },
      { n: "un jus de pomme", p: "3,00 €", e: "🍏" },
      { n: "une carafe d'eau", p: "gratuite", e: "💧" }
    ],
    must: [
      { c: "Saluer", kw: ["bonjour", "bonsoir", "salut", "madame", "monsieur"] },
      { c: "Commander un plat et une boisson", kw: ["je voudrais", "je veux", "je prends", "je vais prendre", "pour moi", "s'il vous plaît", "s'il vous plait", "galette", "crêpe", "crepe", "jus", "eau", "carafe", "dessert"] },
      { c: "Demander l'addition ou le prix", kw: ["l'addition", "addition", "combien", "ça fait", "ca fait", "c'est combien", "prix", "en tout"] },
      { c: "Payer", kw: ["voilà", "voila", "voici", "par carte", "carte bancaire", "espèces", "especes", "payer", "je paie", "je paye", "monnaie", "euros", "billet de"] },
      { c: "Remercier et prendre congé", kw: ["au revoir", "merci", "bonne journée", "bonne journee", "bonne soirée", "bonne soiree", "à bientôt", "a bientot", "c'était très bon", "c'etait tres bon"] }
    ],
    model: [
      ["E", "Bonjour ! Vous êtes combien ?"],
      ["C", "Bonjour. Nous sommes deux."],
      ["E", "Voilà votre table. Vous avez choisi ?"],
      ["C", "Oui. Pour moi, une galette aux champignons, s'il vous plaît. Mon collègue prend une galette complète."],
      ["E", "Très bien. Et comme boisson ?"],
      ["C", "Deux jus de pomme et une carafe d'eau, s'il vous plaît."],
      ["E", "Voilà vos galettes. Bon appétit !"],
      ["C", "Merci !"],
      ["E", "Vous voulez un dessert ?"],
      ["C", "Oui, une crêpe au chocolat. Et l'addition, s'il vous plaît."],
      ["E", "Voilà. Ça fait 28,50 €."],
      ["C", "Je paie par carte. C'était très bon !"],
      ["E", "Merci beaucoup. Bonne fin de journée !"],
      ["C", "Merci, au revoir !"]
    ] },

  { id: "a1-s18-po1", level: "A1", sujet: 18, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Études et formation",
    consigne: "Entretien dirigé (1 minute environ). Vous saluez l'examinateur et vous répondez à ses questions sur vous, votre famille, vos goûts et vos activités.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1 dakika). Sınav görevlisini selamlayın ve sizin, aileniz, zevkleriniz ve etkinlikleriniz hakkındaki sorularına cevap verin.",
      en: "Guided interview (about 1 minute). Greet the examiner and answer the questions about yourself, your family, your tastes and your activities."
    },
    prompts: [
      { q: "Bonjour. Vous pouvez épeler votre prénom ?", m: "Bonjour. Je m'appelle Esin : E, S, I, N." },
      { q: "Vous êtes étudiante ?", m: "Non, je ne suis pas étudiante. Je travaille." },
      { q: "Vous avez un diplôme ?", m: "Oui, j'ai un diplôme de kinésithérapeute." },
      { q: "Vous aimez apprendre ?", m: "Oui, j'aime beaucoup apprendre de nouvelles choses." },
      { q: "Vous étudiez le français combien d'heures par semaine ?", m: "J'étudie le français cinq heures par semaine." },
      { q: "Comment est-ce que vous apprenez le français ?", m: "Je vais en cours, j'écoute la radio et je regarde des séries." },
      { q: "Qu'est-ce qui est facile pour vous en français ?", m: "Les nombres et les couleurs, c'est facile." },
      { q: "Vous voulez faire une formation en France ?", m: "Oui, je voudrais faire une formation pour travailler ici." }
    ] },
  { id: "a1-s18-po2", level: "A1", sujet: 18, sec: "po", ex: 2, pts: 8, kind: "echange",
    title: "Les sorties",
    consigne: "Échange d'informations (2 minutes environ). Vous tirez des cartes. Avec chaque mot, vous posez une question à l'examinateur sur sa vie.",
    help: {
      tr: "Bilgi alışverişi (yaklaşık 2 dakika). Kart çekiyorsunuz. Her kelimeyle sınav görevlisine hayatı hakkında bir soru sorun.",
      en: "Information exchange (about 2 minutes). You draw cards. With each word, ask the examiner a question about his or her life."
    },
    cards: ["Théâtre ?", "Pique-nique ?", "Plage ?", "Promenade ?", "Exposition ?", "Vendredi soir ?", "Bowling ?"],
    prompts: [
      { q: "Théâtre ?", m: "Vous allez souvent au théâtre ?" },
      { q: "Pique-nique ?", m: "Vous aimez faire des pique-niques ?" },
      { q: "Plage ?", m: "Il y a une plage près de chez vous ?" },
      { q: "Promenade ?", m: "Vous faites une promenade le dimanche ?" },
      { q: "Exposition ?", m: "Vous allez voir une exposition ce mois-ci ?" },
      { q: "Vendredi soir ?", m: "Qu'est-ce que vous faites le vendredi soir ?" },
      { q: "Bowling ?", m: "Vous jouez au bowling ?" }
    ] },
  { id: "a1-s18-po3", level: "A1", sujet: 18, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Chez le glacier",
    consigne: "Dialogue simulé (2 minutes environ). Vous êtes chez un glacier. Vous achetez des glaces pour trois personnes : vous choisissez les parfums, vous demandez le prix et vous payez. L'examinateur joue le rôle du glacier.",
    help: {
      tr: "Canlandırma diyalog (yaklaşık 2 dakika). Bir dondurmacıdasınız. Üç kişi için dondurma alıyorsunuz: çeşitleri seçiyor, fiyatı soruyor ve ödüyorsunuz. Sınav görevlisi dondurmacıyı oynuyor.",
      en: "Role-play (about 2 minutes). You are at an ice-cream shop. You buy ice creams for three people: you choose the flavours, ask the price and pay. The examiner plays the ice-cream seller."
    },
    scenario: "Il fait très chaud. Vous vous promenez en ville avec une amie et sa petite fille. Vous offrez des glaces.",
    you: "Vous êtes le client / la cliente.",
    them: "L'examinateur est le glacier / la glacière.",
    items: [
      { n: "une glace 1 boule", p: "2,50 €", e: "🍦" },
      { n: "une glace 2 boules", p: "4,50 €", e: "🍨" },
      { n: "une glace 3 boules", p: "6,00 €", e: "🍨" },
      { n: "de la chantilly", p: "0,80 €", e: "☁️" },
      { n: "un milk-shake", p: "5,00 €", e: "🥤" },
      { n: "une bouteille d'eau", p: "1,50 €", e: "💧" }
    ],
    must: [
      { c: "Saluer", kw: ["bonjour", "bonsoir", "salut", "madame", "monsieur"] },
      { c: "Demander des glaces et choisir les parfums", kw: ["je voudrais", "je veux", "je prends", "je vais prendre", "vous avez", "avez-vous", "quels parfums", "parfum", "s'il vous plaît", "s'il vous plait", "boule", "glace", "cornet", "pot", "vanille", "chocolat", "fraise", "citron", "pistache", "chantilly"] },
      { c: "Demander le prix", kw: ["combien", "ça fait", "ca fait", "ça coûte", "ca coute", "c'est combien", "prix", "coûte", "coute", "coûtent", "en tout"] },
      { c: "Payer", kw: ["voilà", "voila", "voici", "par carte", "carte bancaire", "espèces", "especes", "payer", "je paie", "je paye", "monnaie", "euros", "billet de"] },
      { c: "Prendre congé", kw: ["au revoir", "merci", "bonne journée", "bonne journee", "bonne soirée", "bonne soiree", "à bientôt", "a bientot"] }
    ],
    model: [
      ["E", "Bonjour ! Qu'est-ce que je vous sers ?"],
      ["C", "Bonjour. Je voudrais trois glaces, s'il vous plaît. Quels parfums avez-vous ?"],
      ["E", "Vanille, chocolat, fraise, citron et pistache."],
      ["C", "Pour moi, deux boules : pistache et citron."],
      ["E", "En cornet ou en pot ?"],
      ["C", "En cornet. Pour mon amie, une boule au chocolat."],
      ["E", "Et pour la petite fille ?"],
      ["C", "Une boule à la fraise, avec de la chantilly, s'il vous plaît."],
      ["E", "Voilà vos trois glaces !"],
      ["C", "Merci. Ça fait combien ?"],
      ["E", "Ça fait 10,30 €."],
      ["C", "Voilà 20 euros."],
      ["E", "Je vous rends 9,70 €. Bonne journée !"],
      ["C", "Merci, au revoir !"]
    ] },

  { id: "a1-s19-po1", level: "A1", sujet: 19, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Téléphone et internet",
    consigne: "Entretien dirigé (1 minute environ). Vous saluez l'examinateur et vous répondez à ses questions sur vous, votre famille, vos goûts et vos activités.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1 dakika). Sınav görevlisini selamlayın ve sizin, aileniz, zevkleriniz ve etkinlikleriniz hakkındaki sorularına cevap verin.",
      en: "Guided interview (about 1 minute). Greet the examiner and answer the questions about yourself, your family, your tastes and your activities."
    },
    prompts: [
      { q: "Bonjour. On commence ? Votre prénom, c'est… ?", m: "Bonjour. Oui, mon prénom, c'est Esin." },
      { q: "Vous avez un téléphone portable ?", m: "Oui, bien sûr. Il est toujours dans mon sac." },
      { q: "Vous utilisez votre téléphone pour quoi ?", m: "J'appelle ma famille, j'envoie des messages et je prends des photos." },
      { q: "Vous avez un ordinateur ?", m: "Oui, j'ai un ordinateur portable." },
      { q: "Vous regardez des vidéos sur internet ?", m: "Oui, je regarde des vidéos de cuisine et de sport." },
      { q: "Vous aimez les réseaux sociaux ?", m: "Un peu. Je regarde les photos de mes amis." },
      { q: "Vous écrivez des e-mails en français ?", m: "Oui, quelquefois. J'écris des e-mails courts." },
      { q: "Vous utilisez une application pour apprendre le français ?", m: "Oui, tous les jours, pendant dix minutes." }
    ] },
  { id: "a1-s19-po2", level: "A1", sujet: 19, sec: "po", ex: 2, pts: 8, kind: "echange",
    title: "Les tâches de la maison",
    consigne: "Échange d'informations (2 minutes environ). Vous tirez des cartes. Avec chaque mot, vous posez une question à l'examinateur sur sa vie.",
    help: {
      tr: "Bilgi alışverişi (yaklaşık 2 dakika). Kart çekiyorsunuz. Her kelimeyle sınav görevlisine hayatı hakkında bir soru sorun.",
      en: "Information exchange (about 2 minutes). You draw cards. With each word, ask the examiner a question about his or her life."
    },
    cards: ["Ménage ?", "Vaisselle ?", "Lessive ?", "Repassage ?", "Courses ?", "Poubelles ?", "Aspirateur ?"],
    prompts: [
      { q: "Ménage ?", m: "Qui fait le ménage chez vous ?" },
      { q: "Vaisselle ?", m: "Vous avez un lave-vaisselle ?" },
      { q: "Lessive ?", m: "Vous faites la lessive quel jour ?" },
      { q: "Repassage ?", m: "Vous aimez repasser vos vêtements ?" },
      { q: "Courses ?", m: "Qui fait les courses chez vous ?" },
      { q: "Poubelles ?", m: "Qui sort les poubelles chez vous ?" },
      { q: "Aspirateur ?", m: "Vous passez l'aspirateur souvent ?" }
    ] },
  { id: "a1-s19-po3", level: "A1", sujet: 19, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "Au magasin de bricolage",
    consigne: "Dialogue simulé (2 minutes environ). Vous êtes dans un magasin de bricolage. Vous cherchez des choses pour votre appartement. Vous demandez de l'aide, vous demandez le prix et vous payez. L'examinateur joue le rôle du vendeur.",
    help: {
      tr: "Canlandırma diyalog (yaklaşık 2 dakika). Bir yapı marketindesiniz. Daireniz için bazı şeyler arıyorsunuz. Yardım istiyor, fiyatı soruyor ve ödüyorsunuz. Sınav görevlisi satıcıyı oynuyor.",
      en: "Role-play (about 2 minutes). You are in a DIY shop. You look for things for your flat. You ask for help, ask the price and pay. The examiner plays the shop assistant."
    },
    scenario: "Vous habitez dans un nouvel appartement. La lampe du salon ne marche pas et vous voulez accrocher des photos au mur.",
    you: "Vous êtes le client / la cliente.",
    them: "L'examinateur est le vendeur / la vendeuse.",
    items: [
      { n: "une ampoule", p: "3,90 €", e: "💡" },
      { n: "un marteau", p: "12,00 €", e: "🔨" },
      { n: "une boîte de clous", p: "2,50 €", e: "📌" },
      { n: "un tournevis", p: "6,50 €", e: "🪛" },
      { n: "une rallonge électrique", p: "9,00 €", e: "🔌" },
      { n: "une plante verte", p: "15,00 €", e: "🪴" }
    ],
    must: [
      { c: "Saluer", kw: ["bonjour", "bonsoir", "salut", "madame", "monsieur"] },
      { c: "Demander de l'aide et des articles", kw: ["je voudrais", "je veux", "je prends", "je vais prendre", "vous avez", "avez-vous", "est-ce que vous avez", "s'il vous plaît", "s'il vous plait", "je cherche", "où", "ou sont", "qu'est-ce qu'il faut", "ampoule", "marteau", "clous", "tournevis", "rallonge", "lampe"] },
      { c: "Demander le prix", kw: ["combien", "ça fait", "ca fait", "ça coûte", "ca coute", "c'est combien", "prix", "coûte", "coute", "coûtent", "en tout"] },
      { c: "Payer", kw: ["voilà", "voila", "voici", "par carte", "carte bancaire", "espèces", "especes", "payer", "je paie", "je paye", "caisse", "monnaie", "euros"] },
      { c: "Remercier et prendre congé", kw: ["au revoir", "merci", "bonne journée", "bonne journee", "bonne soirée", "bonne soiree", "à bientôt", "a bientot"] }
    ],
    model: [
      ["E", "Bonjour madame, je peux vous aider ?"],
      ["C", "Bonjour. Oui, je cherche des ampoules, s'il vous plaît."],
      ["E", "Elles sont ici. C'est pour quelle lampe ?"],
      ["C", "Pour la lampe du salon. Voilà la vieille ampoule."],
      ["E", "Alors c'est celle-ci. Elle coûte 3,90 €."],
      ["C", "Je prends deux ampoules. Je voudrais aussi accrocher des photos. Qu'est-ce qu'il faut ?"],
      ["E", "Un marteau et des clous."],
      ["C", "Le marteau coûte combien ?"],
      ["E", "12 euros. Et la boîte de clous, 2,50 €."],
      ["C", "D'accord, je prends les deux. Ça fait combien en tout ?"],
      ["E", "Ça fait 22,30 €."],
      ["C", "Je peux payer ici, par carte ?"],
      ["E", "Non, vous payez à la caisse, à l'entrée du magasin."],
      ["C", "D'accord. Merci beaucoup, au revoir !"]
    ] },

  { id: "a1-s20-po1", level: "A1", sujet: 20, sec: "po", ex: 1, pts: 8, kind: "entretien",
    title: "Mes projets",
    consigne: "Entretien dirigé (1 minute environ). Vous saluez l'examinateur et vous répondez à ses questions sur vous, votre famille, vos goûts et vos activités.",
    help: {
      tr: "Yönlendirilmiş görüşme (yaklaşık 1 dakika). Sınav görevlisini selamlayın ve sizin, aileniz, zevkleriniz ve etkinlikleriniz hakkındaki sorularına cevap verin.",
      en: "Guided interview (about 1 minute). Greet the examiner and answer the questions about yourself, your family, your tastes and your activities."
    },
    prompts: [
      { q: "Bonjour, bienvenue ! Présentez-vous, s'il vous plaît.", m: "Bonjour ! Je m'appelle Esin. Je suis turque et j'habite en France." },
      { q: "Qu'est-ce que vous allez faire ce soir ?", m: "Ce soir, je vais faire la cuisine et regarder un film." },
      { q: "Et après l'examen, qu'est-ce que vous allez faire ?", m: "Je vais boire un café avec une amie." },
      { q: "Vous avez un projet pour le week-end ?", m: "Oui, je vais visiter un musée avec des amis." },
      { q: "Vous allez rester en France ?", m: "Oui, je vais rester en France. J'aime bien ma nouvelle vie." },
      { q: "Vous voulez travailler en France ?", m: "Oui, je veux travailler comme kinésithérapeute." },
      { q: "Vous allez continuer le français ?", m: "Oui, bien sûr ! Je vais passer le DELF A2." },
      { q: "Vous voulez apprendre une nouvelle chose ?", m: "Oui, je voudrais apprendre à jouer de la guitare." }
    ] },
  { id: "a1-s20-po2", level: "A1", sujet: 20, sec: "po", ex: 2, pts: 8, kind: "echange",
    title: "La musique",
    consigne: "Échange d'informations (2 minutes environ). Vous tirez des cartes. Avec chaque mot, vous posez une question à l'examinateur sur sa vie.",
    help: {
      tr: "Bilgi alışverişi (yaklaşık 2 dakika). Kart çekiyorsunuz. Her kelimeyle sınav görevlisine hayatı hakkında bir soru sorun.",
      en: "Information exchange (about 2 minutes). You draw cards. With each word, ask the examiner a question about his or her life."
    },
    cards: ["Chanteur ?", "Instrument ?", "Radio ?", "Chanson ?", "Festival ?", "Piano ?", "Écouteurs ?"],
    prompts: [
      { q: "Chanteur ?", m: "Quel est votre chanteur préféré ?" },
      { q: "Instrument ?", m: "Vous jouez d'un instrument ?" },
      { q: "Radio ?", m: "Vous écoutez la radio le matin ?" },
      { q: "Chanson ?", m: "Quelle est votre chanson préférée ?" },
      { q: "Festival ?", m: "Vous allez à des festivals en été ?" },
      { q: "Piano ?", m: "Vous savez jouer du piano ?" },
      { q: "Écouteurs ?", m: "Vous écoutez de la musique avec des écouteurs ?" }
    ] },
  { id: "a1-s20-po3", level: "A1", sujet: 20, sec: "po", ex: 3, pts: 9, kind: "dialogue",
    title: "À l'épicerie du quartier",
    consigne: "Dialogue simulé (2 minutes environ). Vous êtes dans une petite épicerie, le soir. Vous cherchez des produits pour le dîner. Vous demandez où ils sont, vous demandez le prix et vous payez. L'examinateur joue le rôle de l'épicier.",
    help: {
      tr: "Canlandırma diyalog (yaklaşık 2 dakika). Akşam küçük bir mahalle bakkalındasınız. Akşam yemeği için ürünler arıyorsunuz. Ürünlerin nerede olduğunu soruyor, fiyatı öğreniyor ve ödüyorsunuz. Sınav görevlisi bakkalı oynuyor.",
      en: "Role-play (about 2 minutes). You are in a small grocery shop in the evening. You look for products for dinner. You ask where they are, ask the price and pay. The examiner plays the grocer."
    },
    scenario: "Il est 20 h 30. Des amis viennent dîner chez vous et vous n'avez pas assez de pâtes. Le supermarché est fermé : vous allez à l'épicerie du quartier.",
    you: "Vous êtes le client / la cliente.",
    them: "L'examinateur est l'épicier / l'épicière.",
    items: [
      { n: "un paquet de pâtes", p: "1,60 €", e: "🍝" },
      { n: "un pot de sauce tomate", p: "2,40 €", e: "🍅" },
      { n: "un paquet de biscuits", p: "2,20 €", e: "🍪" },
      { n: "un litre de lait", p: "1,30 €", e: "🥛" },
      { n: "une boîte de six œufs", p: "2,90 €", e: "🥚" },
      { n: "une bouteille de jus d'orange", p: "2,70 €", e: "🧃" }
    ],
    must: [
      { c: "Saluer", kw: ["bonjour", "bonsoir", "salut", "madame", "monsieur"] },
      { c: "Demander des produits et où ils sont", kw: ["je voudrais", "je veux", "je prends", "je vais prendre", "vous avez", "avez-vous", "est-ce que vous avez", "s'il vous plaît", "s'il vous plait", "je cherche", "où sont", "ou sont", "où est", "ou est", "pâtes", "pates", "sauce", "biscuits", "lait", "œufs", "oeufs", "jus"] },
      { c: "Demander le prix", kw: ["combien", "ça fait", "ca fait", "ça coûte", "ca coute", "c'est combien", "prix", "coûte", "coute", "coûtent", "en tout"] },
      { c: "Payer", kw: ["voilà", "voila", "voici", "par carte", "carte bancaire", "espèces", "especes", "payer", "je paie", "je paye", "monnaie", "euros", "billet de"] },
      { c: "Prendre congé", kw: ["au revoir", "merci", "bonne journée", "bonne journee", "bonne soirée", "bonne soiree", "à bientôt", "a bientot"] }
    ],
    model: [
      ["E", "Bonsoir madame !"],
      ["C", "Bonsoir monsieur. Vous avez des pâtes, s'il vous plaît ?"],
      ["E", "Oui, elles sont au fond du magasin, à gauche."],
      ["C", "Merci. Je prends deux paquets de pâtes. Et vous avez de la sauce tomate ?"],
      ["E", "Oui, à côté des pâtes."],
      ["C", "Parfait. Un pot de sauce tomate et un paquet de biscuits pour le dessert."],
      ["E", "C'est tout ?"],
      ["C", "Oui, c'est tout. Ça fait combien ?"],
      ["E", "Alors… ça fait 7,80 €."],
      ["C", "Voilà 10 euros."],
      ["E", "Je vous rends 2,20 €. Bonne soirée !"],
      ["C", "Merci, bonne soirée. Au revoir !"]
    ] }
);
