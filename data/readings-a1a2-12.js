/* Graded readings, A2 set 12: applying for a student job, a STAPS lecture on muscles, the student card, a sick note (arrêt de travail) and muscle soreness after a first gym session.
   Same format as data/readings.js: { id, level, t:{fr,tr,en}, text, gloss: [fr, tr, en][], qs: [{ q, o, a }] }. */
(function () {
  const G = s => s.trim().split("\n").map(l => l.split("|").map(x => x.trim()));
  const Q = (q, o, a) => ({ q, o, a });
  const R = (id, level, fr, tr, en, text, gloss, qs) => ({ id, level, t: { fr, tr, en }, text: text.trim(), gloss: G(gloss), qs });

  window.READINGS = window.READINGS || [];
  window.READINGS.push(
    R("r12-job-etudiant", "A2", "Postuler pour un job étudiant", "Öğrenci işine başvurmak", "Applying for a student job", `
Inès a 20 ans. Elle est en deuxième année de biologie à l'université de Toulouse. Elle habite dans une petite chambre près du campus. Ses parents l'aident un peu, mais ce n'est pas assez pour payer le loyer, les courses et les sorties. En septembre, elle a donc décidé de chercher un job étudiant de dix ou douze heures par semaine.

D'abord, elle a regardé les annonces sur la plateforme du Crous et sur des sites d'emploi. Elle a trouvé beaucoup d'offres : garde d'enfants après l'école, cours particuliers, vendeuse le samedi… Elle voulait un travail qui ne la gêne pas pour ses cours. Elle a choisi trois annonces, dont une dans un magasin de sport près de chez elle.

Ensuite, elle a préparé son CV. Son amie Camille lui a donné de bons conseils : une seule page, une présentation claire, et pas de fautes d'orthographe ! En France, on n'est pas obligé de mettre une photo. Inès a aussi écrit une courte lettre de motivation. Elle a expliqué qu'elle aime le contact avec les clients et qu'elle joue au volley depuis dix ans.

Une semaine plus tard, le responsable du magasin l'a appelée pour un entretien. Inès était stressée, mais elle a bien répondu aux questions. Elle a parlé de son expérience de bénévole au club de volley. Le lendemain, elle a reçu une bonne nouvelle : elle a le poste ! Elle travaille le samedi et le mercredi après-midi, avec un contrat à durée déterminée.

Son ami Amir, un étudiant marocain, cherche aussi un job. Il a appris que les étudiants étrangers ont le droit de travailler en France, mais pas plus de 964 heures par an. « C'est assez pour moi ! » dit-il en riant. Inès, elle, a déjà fait ses calculs : avec son premier salaire, elle va s'acheter de nouvelles chaussures de volley… avec la réduction du personnel, bien sûr !`, `
un job étudiant|öğrenci işi, yarı zamanlı iş|student job
le loyer|kira|rent
une annonce|ilan|advert, job ad
la garde d'enfants|çocuk bakımı|childcare
des cours particuliers|özel ders|private tutoring
gêner|engel olmak, rahatsız etmek|to get in the way of
une faute d'orthographe|yazım hatası|spelling mistake
une lettre de motivation|ön yazı, niyet mektubu|cover letter
un entretien|iş görüşmesi, mülakat|interview
un contrat à durée déterminée (CDD)|belirli süreli sözleşme|fixed-term contract
avoir le droit de|… hakkı olmak|to be allowed to
la réduction du personnel|personel indirimi|staff discount`, [
      Q("Pourquoi Inès cherche-t-elle un job ?", ["Pour voyager en été", "Pour payer ses dépenses", "Parce qu'elle s'ennuie", "Pour quitter l'université"], 1),
      Q("Combien d'heures par semaine veut-elle travailler ?", ["Dix ou douze heures", "Trente-cinq heures, comme un temps plein", "Deux heures", "Vingt heures"], 0),
      Q("Selon Camille, comment doit être le CV ?", ["Long, avec une grande photo en couleur", "Écrit à la main", "D'une seule page, sans fautes"], 2),
      Q("De quelle expérience Inès a-t-elle parlé pendant l'entretien ?", ["Un stage à l'hôpital", "Un job d'été dans un café de Toulouse", "Le bénévolat au club de volley"], 2),
      Q("Quand Inès travaille-t-elle ?", ["Le samedi et le mercredi après-midi", "Tous les soirs", "Seulement le dimanche"], 0),
      Q("Qu'est-ce qu'Amir a appris ?", ["Les étudiants étrangers ne peuvent pas travailler", "Les étudiants étrangers peuvent travailler 964 heures par an maximum", "Il faut avoir la nationalité française pour avoir un job étudiant"], 1)
    ]),

    R("r12-cours-muscles", "A2", "Un cours sur les muscles en STAPS", "STAPS'ta kaslar üzerine bir ders", "A lecture on muscles in sports science", `
Lucas a 19 ans et il est en première année de licence STAPS à Montpellier. Le mardi matin, à 8 h, il a cours d'anatomie dans un grand amphithéâtre. Ce n'est pas facile de se lever tôt, mais Lucas adore ce cours, parce que la professeure, Mme Bernard, explique tout avec des exemples tirés du sport.

Mardi dernier, le thème du cours était les muscles. Mme Bernard a commencé par une question : « Combien de muscles avons-nous dans le corps ? » Les étudiants ont proposé des chiffres au hasard : cinquante, mille, dix mille… La bonne réponse : plus de six cents ! Le plus grand est le grand fessier, et le plus petit se trouve dans l'oreille.

Ensuite, elle a présenté les trois types de muscles. Les muscles squelettiques sont attachés aux os par des tendons : ils nous permettent de bouger, et nous les contrôlons. Les muscles lisses se trouvent dans les organes, par exemple dans l'estomac : ils travaillent sans notre volonté. Enfin, il y a le muscle cardiaque, le cœur, qui ne s'arrête jamais.

Puis Mme Bernard a expliqué une idée importante : les muscles travaillent souvent par paires. Quand on plie le bras, le biceps se contracte et le triceps se relâche. Quand on tend le bras, c'est le contraire. Pour la jambe, c'est la même chose : le quadriceps, devant la cuisse, tend le genou, et les ischio-jambiers, derrière la cuisse, le plient.

À la fin du cours, elle a demandé à tout l'amphi de se lever et de faire trois squats. « Vous sentez vos quadriceps ? » Tout le monde a ri. Lucas a pris beaucoup de notes, parce que l'examen aura lieu en décembre. Ce soir, il va réviser avec ses amis… et peut-être faire quelques squats pendant les pauses !`, `
un amphithéâtre (un amphi)|amfi, büyük derslik|lecture hall
tiré de|… den alınmış|taken from
au hasard|rastgele|at random
le grand fessier|büyük kalça kası|gluteus maximus
un os|kemik|bone
un tendon|tendon, kiriş|tendon
lisse|düz|smooth
sans notre volonté|irademiz dışında|without our will, involuntarily
se contracter|kasılmak|to contract
se relâcher|gevşemek|to relax
plier / tendre|bükmek / germek, uzatmak|to bend / to straighten
la cuisse|uyluk|thigh
les ischio-jambiers (m.)|arka uyluk kasları, hamstringler|hamstrings`, [
      Q("Pourquoi Lucas aime-t-il le cours d'anatomie ?", ["Parce qu'il commence tard", "Parce que la professeure utilise des exemples sportifs", "Parce qu'il n'y a pas d'examen", "Parce qu'il est très court"], 1),
      Q("Combien de muscles avons-nous environ ?", ["Cinquante", "Mille", "Dix mille", "Plus de six cents"], 3),
      Q("Où se trouvent les muscles lisses ?", ["Dans les organes", "Dans les bras", "Autour des os du pied"], 0),
      Q("Que fait le triceps quand on plie le bras ?", ["Il se contracte très fort", "Il se relâche", "Il se casse"], 1),
      Q("Où se trouvent les ischio-jambiers ?", ["Devant la cuisse", "Dans le dos", "Derrière la cuisse"], 2),
      Q("Qu'est-ce que les étudiants ont fait à la fin du cours ?", ["Une course dans le couloir", "Un petit examen", "Trois squats"], 2)
    ]),

    R("r12-carte-etudiante", "A2", "La carte étudiante, un petit trésor", "Öğrenci kartı, küçük bir hazine", "The student card, a little treasure", `
Chloé a 18 ans. Elle vient d'un petit village en Bretagne et, depuis septembre, elle étudie l'histoire à Lille. Pour s'inscrire à l'université, elle a dû faire plusieurs démarches en ligne. Avant l'inscription, elle a payé la CVEC, une contribution obligatoire pour la vie étudiante. Ensuite, elle a envoyé ses documents et une photo d'identité.

Le jour de la rentrée, elle a reçu sa carte étudiante. Au début, elle pensait que c'était juste une carte avec son nom et sa photo. Mais une étudiante de deuxième année, Manon, lui a expliqué : « Cette carte, c'est un petit trésor ! Ne la perds pas ! »

En effet, la carte sert à beaucoup de choses. Avec elle, Chloé peut emprunter des livres à la bibliothèque universitaire et imprimer ses cours. Elle peut aussi entrer dans certains bâtiments le soir. Et surtout, elle peut payer ses repas au restaurant universitaire avec Izly, le système de paiement du Crous. Là-bas, on mange un repas complet pour quelques euros seulement.

La carte donne aussi des réductions. Au cinéma, Chloé paie moins cher. Dans les musées nationaux, l'entrée est même gratuite pour les jeunes de moins de 26 ans qui habitent dans l'Union européenne. Le week-end dernier, elle a visité deux musées et elle n'a rien payé ! Certaines salles de sport et certains théâtres font aussi des prix pour les étudiants.

Mais en novembre, une catastrophe est arrivée : Chloé ne trouvait plus sa carte. Elle a cherché partout, dans son sac, dans sa chambre, dans ses poches. Elle ne pouvait plus manger au restaurant universitaire ! Trois jours plus tard, elle a ouvert un livre de la bibliothèque… et la carte était dedans. Elle l'avait utilisée comme marque-page ! Depuis, Chloé utilise un vrai marque-page.`, `
une démarche|işlem, prosedür|step, formality
s'inscrire|kaydolmak|to enrol, to register
obligatoire|zorunlu|compulsory
une photo d'identité|vesikalık fotoğraf|passport photo
la rentrée|okulların açılışı, dönem başı|start of the academic year
emprunter|ödünç almak|to borrow
la bibliothèque universitaire (BU)|üniversite kütüphanesi|university library
le restaurant universitaire (RU)|üniversite yemekhanesi|university canteen
une réduction|indirim|discount
gratuit, gratuite|ücretsiz|free
une poche|cep|pocket
un marque-page|kitap ayracı|bookmark`, [
      Q("Qu'est-ce que Chloé a payé avant l'inscription ?", ["Le loyer de sa chambre", "La CVEC", "Un abonnement de cinéma"], 1),
      Q("Qui a dit que la carte est « un petit trésor » ?", ["Manon", "Le directeur de l'université", "La mère de Chloé"], 0),
      Q("Comment Chloé paie-t-elle au restaurant universitaire ?", ["En espèces", "Avec un chèque", "Avec Izly", "Avec sa carte de transport"], 2),
      Q("Pour qui l'entrée des musées nationaux est-elle gratuite ?", ["Pour tous les étudiants du monde", "Pour les moins de 26 ans qui habitent dans l'UE", "Seulement pour les enfants", "Pour les professeurs"], 1),
      Q("Combien de temps Chloé est-elle restée sans sa carte ?", ["Un mois", "Une semaine", "Une journée", "Trois jours"], 3),
      Q("Où était la carte ?", ["Dans un livre de la bibliothèque", "Dans sa poche", "Au restaurant universitaire"], 0)
    ]),

    R("r12-arret-travail", "A2", "Un arrêt de travail", "İş göremezlik raporu", "A sick note", `
Malik a 28 ans. Il est serveur dans une brasserie à Bordeaux. Il aime son travail : l'ambiance est sympa et les clients sont souvent drôles. Mais le métier est fatigant. Malik porte des plateaux lourds toute la journée et il fait beaucoup de gestes répétitifs avec le bras droit.

Depuis quelques semaines, il avait mal au poignet droit. Au début, c'était seulement le soir. Puis la douleur est devenue plus forte : un jour, il n'arrivait plus à porter une simple tasse de café. Son patron lui a conseillé d'aller voir un médecin.

Le lendemain, Malik est allé chez son médecin traitant. Elle l'a examiné et lui a dit : « C'est une tendinite. Il faut mettre votre poignet au repos. » Elle lui a donné un arrêt de travail d'une semaine. Elle lui a aussi conseillé de mettre de la glace plusieurs fois par jour. Si la douleur continue, il fera des séances de kiné.

Malik n'avait jamais eu d'arrêt de travail en France. Il ne savait pas quoi faire avec les papiers. Son médecin lui a expliqué : il faut envoyer l'arrêt dans les 48 heures. Elle a déjà envoyé une partie en ligne à l'Assurance maladie. Malik, lui, doit seulement donner le dernier volet à son employeur. Ensuite, la Sécurité sociale va lui verser des indemnités journalières, mais seulement à partir du quatrième jour : les trois premiers jours ne sont pas payés par la Sécurité sociale. On appelle ça le délai de carence.

Pendant son arrêt, Malik a le droit de sortir, mais en général il doit être chez lui entre 9 h et 11 h et entre 14 h et 16 h, parce qu'il peut y avoir un contrôle. Il en profite pour se reposer, regarder des séries et apprendre à faire des choses avec la main gauche. Il a essayé d'écrire un message à sa sœur de la main gauche… Elle lui a répondu : « Tu as bu ou quoi ? »`, `
un serveur, une serveuse|garson|waiter, waitress
un plateau|tepsi|tray
un geste répétitif|tekrarlayan hareket|repetitive movement
le poignet|bilek (el bileği)|wrist
le médecin traitant|aile hekimi|GP, regular doctor
une tendinite|tendinit, tendon iltihabı|tendinitis
un arrêt de travail|iş göremezlik raporu, hastalık izni|sick note, sick leave
dans les 48 heures|48 saat içinde|within 48 hours
un volet|(belgenin) nüsha, bölüm|part (of a form)
l'employeur (m.)|işveren|employer
les indemnités journalières (f.)|günlük ödenek (hastalık parası)|daily sickness benefit
le délai de carence|bekleme süresi (ödenmeyen ilk günler)|waiting period (unpaid days)`, [
      Q("Pourquoi le métier de Malik est-il fatigant ?", ["Il travaille la nuit seulement", "Il porte des plateaux lourds", "Il conduit beaucoup", "Il parle au téléphone toute la journée"], 1),
      Q("Quel est le problème de Malik ?", ["Une entorse à la cheville", "Une tendinite au poignet", "Un mal de dos", "Une grippe"], 1),
      Q("Combien de temps dure son arrêt de travail ?", ["Une semaine", "Un mois", "Trois jours", "Deux semaines"], 0),
      Q("Dans quel délai faut-il envoyer l'arrêt de travail ?", ["Une semaine", "Un mois", "48 heures"], 2),
      Q("À partir de quel jour la Sécurité sociale verse-t-elle les indemnités ?", ["Le premier jour", "Le quatrième jour", "Le dixième jour"], 1),
      Q("Pourquoi la sœur de Malik a-t-elle répondu « Tu as bu ou quoi ? » ?", ["Il était dans un bar", "Il a écrit de la main gauche et son message était bizarre", "Il a oublié son anniversaire"], 1)
    ]),

    R("r12-courbatures", "A2", "Les courbatures, c'est normal ?", "Kas ağrıları normal mi?", "Is muscle soreness normal?", `
Esin travaille à l'accueil d'une salle de sport. Lundi, un nouvel abonné, Bastien, est venu pour sa première séance. Il a 45 ans et il n'avait pas fait de sport depuis vingt ans. Il était très motivé : il a fait des squats, des fentes, du vélo et même un cours de body pump. En partant, il a dit à Esin : « Je suis en pleine forme ! À mercredi ! »

Mais mercredi, Bastien est arrivé en marchant très lentement. Il descendait les escaliers comme un robot. « J'ai mal partout, surtout aux cuisses ! Je suis malade ? » a-t-il demandé. Esin a souri. En Turquie, elle était kinésithérapeute dans un club de handball, alors elle connaît bien ce problème. « Non, ce sont des courbatures. C'est très fréquent après une première séance. »

Elle lui a expliqué que les courbatures arrivent en général un ou deux jours après l'effort. Elles viennent de petites lésions dans les fibres des muscles, surtout quand on fait un exercice nouveau ou quand on descend, par exemple dans une descente en course à pied. « Beaucoup de gens pensent que c'est à cause de l'acide lactique, mais ce n'est pas vrai », a-t-elle ajouté. En général, la douleur disparaît toute seule en trois à sept jours.

Ensuite, elle lui a donné quelques conseils. Il ne faut pas rester sur le canapé : une activité douce, comme la marche ou le vélo sans résistance, aide les muscles. Il faut aussi bien dormir et boire assez d'eau. Et la prochaine fois, il faut commencer plus doucement et augmenter petit à petit. Mais attention : si la douleur est très forte, si le muscle est gonflé ou si l'urine devient très foncée, il faut voir un médecin rapidement.

Sophie, la responsable de la salle, a entendu la conversation. « Esin, tu devrais écrire une affiche pour les nouveaux abonnés ! » Bastien, lui, a suivi les conseils. Le samedi suivant, il est revenu sans douleur, avec un grand sourire. « Aujourd'hui, je fais la moitié du programme ! » a-t-il promis.`, `
un abonné, une abonnée|abone, üye|member, subscriber
une séance|seans, antrenman|session
une fente|lunge (öne hamle egzersizi)|lunge
en pleine forme|çok formda, enerjik|in great shape
les courbatures (f.)|kas ağrısı (antrenman sonrası)|muscle soreness, aches
fréquent, fréquente|sık görülen|common
une lésion|hasar, lezyon|injury, lesion
une fibre|lif|fibre
une descente|iniş, yokuş aşağı|downhill
disparaître|kaybolmak, geçmek|to disappear
gonflé, gonflée|şişmiş|swollen
foncé, foncée|koyu|dark`, [
      Q("Depuis combien de temps Bastien n'avait-il pas fait de sport ?", ["Deux ans", "Vingt ans", "Six mois", "Dix ans"], 1),
      Q("Comment Bastien descendait-il les escaliers mercredi ?", ["En courant, deux marches à la fois", "En sautant", "Comme un robot"], 2),
      Q("Quand les courbatures arrivent-elles en général ?", ["Pendant l'exercice, dès les premières minutes", "Une semaine après", "Un ou deux jours après l'effort"], 2),
      Q("Selon Esin, d'où viennent les courbatures ?", ["De petites lésions dans les fibres des muscles", "De l'acide lactique qui reste dans les muscles après l'effort", "D'un manque de sucre", "Du froid"], 0),
      Q("Quel conseil Esin donne-t-elle ?", ["Rester sur le canapé toute la semaine", "Faire une activité douce", "Refaire le même programme tout de suite"], 1),
      Q("Quand faut-il voir un médecin ?", ["Quand on a un peu mal aux cuisses le lendemain d'une séance", "Quand le muscle est gonflé ou l'urine très foncée", "Quand on a faim après le sport"], 1)
    ])
  );
})();
