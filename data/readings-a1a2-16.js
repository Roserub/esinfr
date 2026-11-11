/* Graded readings, A2 set 16: personal stories of immigrants and learners in France — an Argentinian nanny who passed the DELF A2, a cook from Gaziantep who opened a restaurant in Grenoble, a Syrian student in STAPS, a Ukrainian grandmother at a conversation workshop and Esin's blog post after one year in France.
   Same format as data/readings.js: { id, level, t:{fr,tr,en}, text, gloss: [fr, tr, en][], qs: [{ q, o, a }] }. */
(function () {
  const G = s => s.trim().split("\n").map(l => l.split("|").map(x => x.trim()));
  const Q = (q, o, a) => ({ q, o, a });
  const R = (id, level, fr, tr, en, text, gloss, qs) => ({ id, level, t: { fr, tr, en }, text: text.trim(), gloss: G(gloss), qs });

  window.READINGS = window.READINGS || [];
  window.READINGS.push(
    R("r16-lucia-delf", "A2", "Lucía a réussi son DELF A2", "Lucía DELF A2'yi geçti", "Lucía passed her DELF A2", `
Lucía a 29 ans. Elle vient de Córdoba, en Argentine. Il y a deux ans, elle est arrivée à Bordeaux avec un petit sac et un grand rêve : vivre en France et parler français comme une vraie Bordelaise. Aujourd'hui, elle travaille comme nounou : elle garde deux enfants, Jules et Margot, après l'école.

Au début, Lucía comprenait très peu de choses. Elle confondait « poisson » et « poison », et un jour, à la boulangerie, elle a demandé « un pain au chocolat avec du fromage ». La boulangère a ri, mais gentiment. « J'avais honte, mais j'ai continué à parler », raconte Lucía.

L'année dernière, elle a décidé de passer le DELF A2. Pendant six mois, elle a suivi un cours deux soirs par semaine à l'Alliance française. Le week-end, elle écoutait des podcasts en faisant le ménage. Et Jules, sept ans, était son professeur le plus sévère : « Non, Lucía, on ne dit pas "le" table, on dit "la" table ! »

Le jour de l'examen, Lucía était très stressée. Elle n'a presque pas dormi la nuit avant. La compréhension orale a été difficile, parce que les enregistrements allaient vite. Mais à l'oral, elle a parlé de son travail avec les enfants et elle a même fait sourire l'examinatrice.

Trois semaines plus tard, elle a reçu ses résultats par e-mail : 71 sur 100 ! Elle a crié si fort que les voisins ont frappé à la porte. Le soir, Jules et Margot lui ont dessiné un diplôme avec des étoiles. Maintenant, Lucía prépare le DELF B1. « Je fais encore des fautes, dit-elle, mais je n'ai plus peur de parler. »`, `
une nounou|çocuk bakıcısı|nanny
garder des enfants|çocuklara bakmak|to look after children
confondre|karıştırmak|to mix up
avoir honte|utanmak|to be ashamed, embarrassed
passer un examen|sınava girmek|to take an exam
réussir un examen|sınavı geçmek|to pass an exam
sévère|sert, katı|strict
un enregistrement|kayıt (ses)|recording
l'examinatrice (f.)|sınav görevlisi (kadın)|examiner (woman)
frapper à la porte|kapıyı çalmak|to knock on the door`, [
      Q("Quel est le métier de Lucía en France ?", ["Elle est boulangère", "Elle est nounou", "Elle est professeure d'espagnol"], 1),
      Q("Qu'est-ce que Lucía a demandé un jour à la boulangerie ?", ["Un pain au chocolat avec du fromage", "Une baguette bien cuite", "Un gâteau pour un anniversaire"], 0),
      Q("Comment Jules aide-t-il Lucía ?", ["Il lui prête ses livres", "Il écoute des podcasts avec elle", "Il corrige ses fautes de français"], 2),
      Q("Quelle partie de l'examen a été difficile pour Lucía ?", ["L'oral", "La compréhension orale", "La production écrite", "La grammaire"], 1),
      Q("Comment Lucía a-t-elle eu ses résultats ?", ["Par téléphone", "Par la poste", "À l'Alliance française", "Par e-mail"], 3),
      Q("Quel est son prochain objectif ?", ["Préparer le DELF B1", "Retourner en Argentine", "Ouvrir une crèche"], 0)
    ]),

    R("r16-restaurant-mehmet", "A2", "Le petit restaurant de Mehmet", "Mehmet'in küçük restoranı", "Mehmet's little restaurant", `
Mehmet a 46 ans. Il a grandi à Gaziantep, une ville du sud de la Turquie très célèbre pour sa cuisine. Quand il était enfant, il passait des heures dans la cuisine de sa mère. Elle préparait des lahmacuns, des kebabs et, bien sûr, des baklavas à la pistache.

Il est arrivé en France il y a douze ans, avec sa femme et ses deux fils. Il a d'abord travaillé dans les cuisines d'un grand hôtel de Grenoble. Il faisait la plonge, puis il a coupé des légumes, et après quelques années, il est devenu cuisinier. Le soir, il suivait des cours de français à la mairie. « Dans une cuisine, on apprend vite les mots importants : "chaud devant !", "attention, ça brûle !" », dit-il en riant.

Pendant longtemps, Mehmet a gardé une idée dans sa tête : ouvrir son propre restaurant. Ce n'était pas facile. Il a dû écrire un projet, aller à la banque, comprendre beaucoup de papiers administratifs. Une association qui aide les créateurs d'entreprise l'a beaucoup aidé. « Ma conseillère, Valérie, m'a expliqué chaque document avec patience », raconte-t-il.

Il y a deux ans, il a enfin ouvert « Le Petit Antep », un restaurant de vingt-cinq places près du marché. Sa femme s'occupe de l'accueil et des desserts. Le midi, il y a beaucoup d'étudiants et d'employés des bureaux du quartier. Le plat le plus populaire ? Le lahmacun, que les clients appellent souvent « la pizza turque ».

Aujourd'hui, Mehmet est fier, mais il travaille beaucoup : il se lève à six heures et il ferme le restaurant vers vingt-trois heures. Le lundi, il se repose. L'année prochaine, il va proposer des cours de cuisine turque le samedi matin. « Je veux partager la cuisine de ma mère avec les Grenoblois », dit-il.`, `
grandir|büyümek|to grow up
célèbre|ünlü|famous
faire la plonge|bulaşık yıkamak (restoranda)|to wash dishes (in a restaurant)
un cuisinier|aşçı|cook
« chaud devant ! »|« dikkat, sıcak geliyor! »|« hot stuff coming through! »
brûler|yakmak|to burn
son propre restaurant|kendi restoranı|one's own restaurant
un créateur d'entreprise|girişimci, şirket kuran kişi|business founder
une conseillère|danışman (kadın)|adviser (woman)
s'occuper de|ilgilenmek|to take care of
fier, fière|gururlu|proud`, [
      Q("Pour quoi la ville de Gaziantep est-elle célèbre ?", ["Pour sa plage", "Pour sa cuisine", "Pour son université"], 1),
      Q("Quel a été le premier travail de Mehmet à Grenoble ?", ["Serveur dans un café", "Vendeur au marché", "Plongeur dans un hôtel"], 2),
      Q("Qui a aidé Mehmet avec les papiers ?", ["Une conseillère d'une association", "Son fils aîné", "Un client du restaurant"], 0),
      Q("Que fait la femme de Mehmet au restaurant ?", ["Elle fait la comptabilité", "Elle prépare les kebabs", "Elle s'occupe de l'accueil et des desserts", "Elle livre les repas"], 2),
      Q("Quel jour Mehmet se repose-t-il ?", ["Le dimanche", "Le lundi", "Le samedi", "Le mercredi"], 1),
      Q("Qu'est-ce que Mehmet va faire l'année prochaine ?", ["Ouvrir un deuxième restaurant", "Retourner à Gaziantep", "Proposer des cours de cuisine"], 2)
    ]),

    R("r16-omar-staps", "A2", "Omar, étudiant en STAPS", "Omar, STAPS öğrencisi", "Omar, a STAPS student", `
Omar a 22 ans. Il est né à Alep, en Syrie. Quand il avait seize ans, sa famille a quitté le pays à cause de la guerre. Après un an au Liban, ils sont arrivés à Montpellier. Omar ne parlait pas un mot de français, mais il avait une passion : le basket.

Au lycée, il était dans une classe spéciale pour les élèves étrangers. Il apprenait le français le matin et il suivait les autres cours l'après-midi. Le mercredi, il jouait au basket dans un club du quartier. « Sur le terrain, je n'avais pas besoin de parler. Mes coéquipiers sont devenus mes premiers amis français, et ils m'ont appris beaucoup de mots… pas toujours polis ! » raconte-t-il en souriant.

Après le bac, Omar a choisi la licence STAPS. Il veut devenir éducateur sportif, peut-être pour travailler avec des jeunes en difficulté. La première année a été dure. Les cours d'anatomie et de physiologie étaient pleins de mots compliqués. Il enregistrait les cours sur son téléphone et il les réécoutait le soir dans le tram.

Heureusement, il n'était pas seul. Une étudiante de sa promo, Camille, lui prêtait ses notes. En échange, Omar l'aidait à améliorer son tir au basket. Ils ont aussi créé un petit groupe de révision à la bibliothèque universitaire, avec trois autres étudiants. Avant les examens, ils se retrouvaient tous les jeudis.

Aujourd'hui, Omar est en deuxième année et il a validé tous ses partiels. Le samedi, il entraîne une équipe de basket de garçons de dix ans. « Quand un petit nouveau arrive et ne parle pas bien français, je pense à moi, il y a cinq ans. Je lui dis : patience, le ballon parle pour toi ! »`, `
à cause de|yüzünden|because of
la guerre|savaş|war
un coéquipier|takım arkadaşı|teammate
poli, polie|kibar|polite
un éducateur sportif|spor eğitmeni|sports instructor
dur, dure|zor|hard
enregistrer|kaydetmek|to record
la promo (promotion)|sınıf, dönem (aynı yıl öğrencileri)|year group, class
en échange|karşılığında|in exchange
le tir|şut, atış|shot
valider ses partiels|dönem sınavlarını geçmek|to pass one's semester exams
entraîner|antrenörlük yapmak|to coach`, [
      Q("Où la famille d'Omar a-t-elle vécu avant la France ?", ["Au Liban", "En Turquie", "En Jordanie"], 0),
      Q("Comment Omar a-t-il trouvé ses premiers amis français ?", ["À la bibliothèque", "Dans son club de basket", "Dans le tram"], 1),
      Q("Quel métier Omar veut-il faire ?", ["Kinésithérapeute", "Professeur de biologie", "Éducateur sportif"], 2),
      Q("Que faisait Omar pour comprendre les cours difficiles ?", ["Il les réécoutait le soir", "Il prenait des cours particuliers", "Il lisait des livres en arabe", "Il ne venait pas en cours"], 0),
      Q("Comment Omar remercie-t-il Camille ?", ["Il lui fait à manger", "Il l'aide au basket", "Il lui prête son téléphone"], 1),
      Q("Que fait Omar le samedi ?", ["Il travaille au tram", "Il révise avec Camille", "Il joue un match en Syrie", "Il entraîne des enfants"], 3)
    ]),

    R("r16-halyna-atelier", "A2", "Halyna et l'atelier de conversation", "Halyna ve sohbet atölyesi", "Halyna and the conversation workshop", `
Halyna a 68 ans. Elle vient de Kharkiv, en Ukraine, où elle a été professeure de mathématiques pendant quarante ans. Il y a trois ans, elle est venue à Rouen pour vivre près de sa fille, Olena, et de ses deux petits-enfants. Au début, elle restait souvent à la maison. Elle ne comprenait pas la télévision, et elle n'osait pas parler aux voisins.

Un jour, Olena a vu une affiche à la médiathèque : « Atelier de conversation en français, le vendredi de 14 h à 16 h, gratuit, tous niveaux ». Halyna n'avait pas très envie d'y aller. « À mon âge, apprendre une nouvelle langue ? C'est trop tard ! » pensait-elle. Mais sa fille a insisté, et Halyna a fini par accepter.

Le premier vendredi, il y avait une dizaine de personnes autour d'une grande table : une Afghane, un Péruvien, deux Chinoises, un Marocain… L'animatrice, Monique, est une bénévole de soixante-quinze ans, ancienne institutrice. Elle a apporté du thé, des biscuits et un jeu de cartes avec des questions simples : « Quel est votre plat préféré ? », « Racontez un souvenir d'enfance. »

Halyna a parlé de son jardin à Kharkiv, de ses tomates et de ses cerises. Elle a fait beaucoup de fautes, mais personne ne s'est moqué d'elle. Au contraire, tout le monde l'a écoutée avec attention. Ce jour-là, en rentrant, elle a dit à sa fille : « Je reviendrai la semaine prochaine. »

Aujourd'hui, Halyna ne rate jamais un vendredi. Elle comprend mieux les informations à la radio et elle discute avec la boulangère. Monique et elle sont devenues amies : elles vont ensemble au marché le dimanche. Et quand ses petits-enfants font leurs devoirs de maths, c'est Halyna qui explique… en français !`, `
une affiche|afiş|poster
oser|cesaret etmek|to dare
avoir envie de|istemek, canı çekmek|to feel like
insister|ısrar etmek|to insist
finir par|sonunda (bir şey) yapmak|to end up (doing)
une animatrice|etkinlik yöneticisi (kadın)|workshop leader (woman)
un / une bénévole|gönüllü|volunteer
une institutrice|ilkokul öğretmeni (kadın)|primary school teacher (woman)
un souvenir d'enfance|çocukluk anısı|childhood memory
se moquer de|alay etmek|to make fun of
rater|kaçırmak|to miss`, [
      Q("Quel était le métier de Halyna en Ukraine ?", ["Institutrice", "Professeure de mathématiques", "Boulangère", "Jardinière"], 1),
      Q("Pourquoi Halyna est-elle venue à Rouen ?", ["Pour vivre près de sa fille", "Pour travailler à la médiathèque", "Pour faire des études"], 0),
      Q("Au début, que pensait Halyna de l'atelier ?", ["Que c'était trop cher", "Que c'était trop loin", "Qu'elle était trop âgée pour apprendre"], 2),
      Q("Qui est Monique ?", ["La voisine de Halyna", "Une bénévole, ancienne institutrice", "La professeure d'Olena", "Une bibliothécaire ukrainienne"], 1),
      Q("De quoi Halyna a-t-elle parlé le premier jour ?", ["De son jardin à Kharkiv", "De ses années d'école", "De son voyage en France"], 0),
      Q("Que fait Halyna avec Monique le dimanche ?", ["Elles cuisinent des cerises", "Elles écoutent la radio", "Elles vont au marché"], 2)
    ]),

    R("r16-blog-esin-un-an", "A2", "Blog d'Esin : un an en France", "Esin'in blogu: Fransa'da bir yıl", "Esin's blog: one year in France", `
Bonjour à tous ! Je m'appelle Esin Yılmaz, j'ai 30 ans et je suis née à Istanbul. Aujourd'hui, c'est un jour spécial : il y a exactement un an, mon mari et moi, nous sommes arrivés en France avec quatre valises et beaucoup de questions. Alors, pour fêter ça, j'écris mon premier article de blog… en français !

Les premières semaines, tout était nouveau et un peu stressant. Nous avons cherché un appartement, ouvert un compte en banque, rempli des dizaines de formulaires. Je me souviens de mon premier rendez-vous à la banque : je comprenais un mot sur trois et je souriais tout le temps. Le conseiller a sûrement pensé que j'étais très heureuse d'ouvrir un compte !

En Turquie, j'étais kinésithérapeute, surtout avec des joueurs de handball. Ici, mon diplôme n'est pas encore reconnu, donc je ne peux pas travailler comme kiné pour le moment. Ça a été difficile à accepter. Mais j'ai trouvé un travail à l'accueil d'une salle de sport. Ma responsable, Sophie, est très gentille : on se dit « tu », et elle me corrige toujours avec le sourire. Grâce aux clients, j'apprends chaque jour des mots nouveaux.

Ce que j'aime le plus ici ? Le samedi matin, je cours au parc près de chez nous. Il y a des joggeurs, des familles, des personnes âgées qui font de la gymnastique. Maintenant, certains me disent « bonjour » et « bon courage ! ». Mon mari apprend le français aussi : le soir, nous révisons ensemble, et nous rions beaucoup de nos fautes.

Mes projets pour l'année prochaine ? D'abord, améliorer mon français. Ensuite, m'inscrire en STAPS, et plus tard, faire les études de kiné en France. Le chemin est long, mais je ne suis pas pressée. Si vous venez d'arriver en France, voici mon conseil : parlez, même avec des fautes. Les Français sont souvent plus patients qu'on ne le pense. À bientôt pour un nouvel article !`, `
fêter|kutlamak|to celebrate
un article de blog|blog yazısı|blog post
ouvrir un compte en banque|banka hesabı açmak|to open a bank account
remplir un formulaire|form doldurmak|to fill in a form
se souvenir de|hatırlamak|to remember
reconnu, reconnue|tanınmış, denkliği olan|recognised
accepter|kabullenmek|to accept
grâce à|sayesinde|thanks to
« bon courage ! »|« kolay gelsin! »|« keep it up! », « good luck! »
s'inscrire|kaydolmak|to enrol, to sign up
pressé, pressée|aceleci, acelesi olan|in a hurry`, [
      Q("Pourquoi ce jour est-il spécial pour Esin ?", ["C'est son anniversaire", "Elle est en France depuis un an", "Elle commence un nouveau travail"], 1),
      Q("Pourquoi Esin souriait-elle tout le temps à la banque ?", ["Elle était très heureuse", "Le conseiller était drôle", "Elle ne comprenait pas tout"], 2),
      Q("Pourquoi Esin ne travaille-t-elle pas comme kiné en France ?", ["Son diplôme n'est pas encore reconnu", "Elle n'aime plus ce métier", "Il n'y a pas de travail", "Elle préfère le handball"], 0),
      Q("Qui est Sophie ?", ["Une voisine", "La professeure de français d'Esin", "Une joggeuse du parc", "La responsable de la salle de sport"], 3),
      Q("Que fait Esin avec son mari le soir ?", ["Ils regardent des séries turques", "Ils révisent le français", "Ils courent au parc"], 1),
      Q("Quel conseil Esin donne-t-elle aux nouveaux arrivants ?", ["Parler, même avec des fautes", "Attendre de parler parfaitement", "Toujours parler anglais"], 0)
    ])
  );
})();
