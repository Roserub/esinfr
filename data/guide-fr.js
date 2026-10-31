/* French version of every guide page (v3). Sets g.fr on each section of window.GUIDE,
   plus French labels for the grammar order (path) and the "spot the mistake" explanations. */
(function () {
  const T = (head, rows) => `<table class="tbl"><tr>${head.map(h => `<th>${h}</th>`).join("")}</tr>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</table>`;
  const KEY = ["Graphie", "Exemple", "Repère turc"];

  window.GRAMMAR_ORDER_FR = {
    A1: "être / avoir · articles · genre et pluriel · présent des verbes en -er · négation · questions · aller, faire, venir, pouvoir, vouloir · possessifs · prépositions de lieu · nombres, heure, dates · futur proche · c'est / il est",
    A2: "passé composé (avoir / être + accord) · imparfait · passé composé ou imparfait · pronoms compléments (le, la, lui, leur) · y / en · comparatif et superlatif · verbes pronominaux · futur simple · impératif · qui / que / où",
    B1: "conditionnel · subjonctif présent (il faut que, je veux que…) · plus-que-parfait · si + temps · dont · voix passive · gérondif (en + -ant) · discours rapporté · connecteurs (donc, pourtant, cependant)",
    B2: "subjonctif après les conjonctions (bien que, pour que…) · concordance des temps · propositions participiales · connecteurs nuancés · registres soutenu et familier",
    C1: "passé simple (à reconnaître dans les livres) · subjonctif passé · nominalisation (réduire → la réduction) · concession et opposition (quoique, certes… mais) · inversion et mise en relief (c'est… que) · registre universitaire : prudence et tournures impersonnelles"
  };

  /* French explanations for the 25 classic mistakes (same order as window.MISTAKES). */
  const WHY_FR = [
    "l'article est obligatoire", "le pronom sujet est obligatoire", "S-V-O, pas S-O-V", "les lettres se lisent à la française",
    "le -ent des verbes ne se prononce pas", "voyelle nasale : on n'entend pas le n", "accord de l'adjectif", "le possessif s'accorde avec le nom",
    "l'âge se dit avec avoir", "avoir froid, faim, soif, peur", "« var » = il y a", "en + pays, à + ville", "la plupart des adjectifs se placent après",
    "les verbes de mouvement prennent être", "au féminin quand on parle de soi", "accord avec être", "négation : un/du → de",
    "beaucoup de + nom", "pas de « très » devant beaucoup", "personne remplace pas", "pas de particule interrogative",
    "« -mek lazım » = il faut", "politesse = vous (comme « siz »)", "pour + infinitif", "liaison"
  ];
  (window.MISTAKES || []).forEach((m, i) => { if (WHY_FR[i]) m[4] = WHY_FR[i]; });

  const FR = {};

  FR.start = `<p><b>N'essaie pas de tout utiliser.</b> Avec ces 12 ressources (toutes gratuites ou avec une bonne offre gratuite), tu peux atteindre le B1. Tout le reste de la bibliothèque est un complément.</p>
<ol>
<li><b>Language Transfer</b> : cours audio, tu construis des phrases dès la première minute (semaines 1 à 4).</li>
<li><b>Français interactif + Tex's French Grammar</b> : ton manuel universitaire gratuit.</li>
<li><b>TV5MONDE</b> (appli + site) : des exercices sur de vrais extraits télé.</li>
<li><b>RFI</b> : « Les voisins du 12 bis », puis le « Journal en français facile ».</li>
<li><b>Duolingo</b> : 10 à 15 minutes par jour pour l'habitude.</li>
<li><b>Les cartes</b> : Anki, ou l'onglet Cartes de ce site (gratuit sur iPhone aussi).</li>
<li><b>Alice Ayel + Super Easy French</b> : des vidéos YouTube que tu comprends dès le premier jour.</li>
<li><b>Global Storybooks</b> : les mêmes histoires en français ET en turc, avec l'audio.</li>
<li><b>Le Point du FLE</b> : un exercice pour chaque point de grammaire.</li>
<li><b>WordReference + Glosbe</b> : dictionnaires français–anglais et français–turc.</li>
<li><b>Bon Patron + LangCorrect</b> : tes textes, corrigés.</li>
<li><b>Tandem ou HelloTalk</b> + un groupe de conversation gratuit près de chez toi.</li>
</ol>
<p><b>Le filet de sécurité en turc :</b> quand une explication en anglais ne passe pas, regarde le même point en turc avec Aykut Yavuz.<br>
<b>Le plus grand levier gratuit :</b> si tu y as droit, le contrat d'intégration républicaine (CIR) de l'OFII comprend une formation de français gratuite jusqu'au niveau A2.</p>`;

  FR.method = `<p><b>Tu n'as pas besoin d'aller vite. Tu as besoin d'être régulière.</b> 20 minutes calmes par jour valent mieux que 3 heures stressées le dimanche.</p>
<ul>
<li><b>Écoute beaucoup, comprends un peu plus chaque semaine.</b> Le cerveau apprend avec ce qu'il comprend <i>presque</i>. C'est normal de ne comprendre que 50 % au début.</li>
<li><b>Mélange le sérieux et le facile.</b> Un bon jour, fais une étape du parcours. Un jour de fatigue, une chanson sur LyricsTraining ou un épisode de série, ça compte aussi.</li>
<li><b>Les erreurs sont la méthode.</b> Les Français aussi font des fautes en français. Chaque erreur dite à voix haute est un pas en avant.</li>
<li><b>Ton métier est ton raccourci.</b> Tu connais déjà l'anatomie, les blessures et le sport. Les apprendre en français, c'est réapprendre des étiquettes, pas des connaissances.</li>
<li><b>Sois réaliste.</b> Le B1 demande environ 350 à 400 heures, le B2 environ 600. C'est un à deux ans à un rythme doux, et vivre en France accélère beaucoup les choses.</li>
<li><b>Fais du turc un allié.</b> Quand la grammaire est confuse, regarde une explication en turc. Puis reviens au français.</li>
</ul>`;

  FR.roadmap = `<p><b>Heures guidées cumulées</b> (estimations de l'Alliance Française ; une turcophone peut viser le haut de la fourchette, l'anglais B2 et la vie en France aident) :</p>
${T(["A1", "A2", "B1", "B2", "C1", "C2"], [["60–100 h", "160–200 h", "360–400 h", "560–650 h", "810–950 h", "1 060–1 200 h"]])}
<p>« Heures » = étude active : cours, exercices, conversation, écoute attentive. La télé en fond ne compte qu'en partie. Utilise le calculateur ci-dessous avec ton propre rythme.</p>
<h3>Phase 0 : semaines 1–2, les sons et la survie (~15–20 h)</h3>
<p>Lire le français à voix haute avec les bons sons ; saluer, se présenter, les nombres de 0 à 100, les 40 phrases de survie. Avec : le guide de prononciation + prononcer.net · Language Transfer pistes 1–10 · Les voisins du 12 bis 1–4 · Alice Ayel · Duolingo 10 min/jour · les cartes.</p>
<h3>Phase 1 : A1, mois 1 à 2/3</h3>
<p>Parler de soi, de sa famille, de sa journée, des courses, de l'heure et des dates ; poser des questions simples. <b>Colonne vertébrale :</b> Français interactif ch. 1–4 (+ Tex's) OU TV5MONDE A1. <b>Chaque jour :</b> finir Language Transfer · cartes (500 premiers mots) · Duolingo/Busuu. <b>Écouter :</b> Les voisins du 12 bis · Coffee Break · Alice Ayel · Super Easy French · Extr@. <b>Lire :</b> Global Storybooks niveaux 1–2 avec la version turque à côté. <b>Parler :</b> un échange tandem par semaine. <b>Vérifier :</b> un sujet d'exemple du DELF A1.</p>
<h3>Phase 2 : A2, mois 3 à 5</h3>
<p>Le passé et les projets, la santé, le logement, les démarches ; un e-mail court. <b>Colonne vertébrale :</b> Français interactif ch. 5–9 / TV5MONDE A2. <b>Écouter :</b> Journal en français facile AVEC la transcription · Podcast Français Facile · Duolingo Podcast · Oli. <b>Lire :</b> 1jour1actu · Storybooks 3–5. <b>Écrire :</b> un journal de 100 mots 3 fois par semaine → Bon Patron → LangCorrect → réécrire. <b>Parler :</b> un groupe chaque semaine + tandem. <b>Vérifier :</b> entraînement DELF A2 / TCF IRN (A2 = première carte pluriannuelle).</p>
<h3>Phase 3 : B1, mois 5 à 10</h3>
<p>Raconter, donner son avis, se débrouiller seule dans la plupart des situations. <b>Colonne vertébrale :</b> TV5MONDE B1 + Français interactif ch. 10–14 + exercices. <b>Écouter :</b> les archives d'innerFrench · Easy French Podcast · One Thing in a French Day · un feuilleton quotidien avec sous-titres français. <b>Lire :</b> la Bibliothèque numérique TV5MONDE · Le Petit Nicolas. <b>Vérifier :</b> DELF B1 (n'expire jamais ; niveau de la carte de 10 ans).</p>
<h3>Phase 4 : B2, mois 10 à 16</h3>
<p>Argumenter, suivre l'actualité et les films, le français universitaire et professionnel. L'université attend un B2 en pratique ; DFP Santé B2 pour les métiers de la santé. Podcasts pour natifs, HugoDécrypte, séries avec puis sans sous-titres, textes de ton domaine, essais au format du DELF B2. <b>Vérifier :</b> DELF B2 (dispense du test de langue à l'université).</p>
<h3>Phase 5 : C1 (deuxième année et après)</h3>
<p>Nuance, rapidité, vocabulaire spécialisé. DALF C1 / DFP Santé C1. Uniquement des médias pour natifs.</p>
<p class="muted small">Le Foreign Service Institute américain classe le français parmi les langues les plus faciles pour les anglophones : environ 30 semaines à temps plein (~690 heures de cours + travail personnel) pour un niveau professionnel.</p>`;

  FR.routines = `<h3>Le minimum quotidien (30–45 min, pour garder le fil les mauvais jours)</h3>
<p>10 min de cartes · 10–15 min d'appli · 15–20 min de ton cours principal (une leçon).</p>
<h3>L'idéal quotidien les premiers mois (60–90 min)</h3>
<p>+ 20 min d'écoute (podcast / YouTube pour apprenants) · + 5 min d'exercice de prononciation.</p>
<h3>Chaque semaine</h3>
<p>1 à 2 séances de conversation · 1 épisode de série · 1 texte corrigé · 1 relecture de ton carnet d'erreurs et des 25 erreurs classiques.</p>
<h3>Chaque mois</h3>
<p>Un test d'entraînement (sujet du DELF) pour voir tes progrès. Note tes heures (la page Progrès le fait pour toi).</p>
<h3>L'immersion à la maison</h3>
<ul><li>Des post-it sur les objets AVEC l'article, une couleur par genre : la porte, le frigo, la fenêtre.</li>
<li>Raconte ce que tu fais, à voix haute : « Je prépare le café. J'ouvre la fenêtre. Je cherche mes clés. »</li>
<li>La liste de courses et la liste de choses à faire en français.</li>
<li>La radio française ou un podcast en cuisinant ou en marchant (bon pour le rythme ; ne remplace pas l'étude active).</li>
<li>Dès l'A2 : téléphone et applis en français. Dès le B1 : réseaux sociaux en français.</li>
<li>Les courses et démarches en français : boulangerie, pharmacie, poste. Ce sont les meilleures leçons de la vraie vie, et elles sont gratuites.</li></ul>
<h3>Vivre avec un francophone (conseils pour vous deux)</h3>
<ul><li>Un « moment français » chaque jour (petit-déjeuner, dîner ou promenade) : seulement en français, 15 à 30 minutes.</li>
<li>Le natif : des phrases courtes, plus lentement, répéter ou reformuler avant de passer à l'anglais.</li>
<li>Corriger en <b>reformulant</b> : redire la phrase correctement et continuer, sans s'arrêter à chaque erreur.</li>
<li>Choisir un signal (« Pause, en anglais ? ») pour quand c'est trop. La frustration tue la motivation.</li>
<li>Faire de vraies tâches ensemble : l'apprenante parle, le natif est le filet de sécurité (appels, magasins, l'accueil du médecin…).</li>
<li>Dès l'A2 : regarder la même série ensemble, audio français + sous-titres français.</li></ul>
<h3>Ce qui fait vraiment réussir</h3>
<ul><li>Des séances courtes chaque jour valent mieux que de longues séances chaque semaine.</li><li>Un seul cours principal, fini. Pas dix cours commencés.</li>
<li>Parler tôt, mal et souvent. Les erreurs sont la matière avec laquelle on apprend.</li><li>L'écoute est la base : on ne peut pas dire ce qu'on n'a jamais entendu.</li></ul>`;

  FR.budget = `<h3>0 € par mois : tout ce qu'il faut pour atteindre le B1 est gratuit</h3>
<p>Cours principal : Français interactif ou TV5MONDE · pour commencer à parler : Language Transfer · chaque jour : Duolingo (gratuit) + cartes · écoute : RFI, podcasts, YouTube · lecture : Global Storybooks, 1jour1actu, Bibliothèque numérique TV5MONDE · écriture : Bon Patron + LangCorrect · oral : offres gratuites de Tandem / HelloTalk + groupes locaux gratuits · formation CIR de l'OFII si tu y as droit · carte de bibliothèque (gratuite ou pas chère selon la ville).</p>
<h3>~10 € par mois</h3>
<p>Le plan à 0 € + des lectures graduées d'occasion ou un manuel avec corrigés, OU une petite option payante (par ex. Readlang ~6 $/mois), OU mettre de côté pour le prochain examen.</p>
<h3>~40 € par mois</h3>
<p>Le plan à 0 € + 2 à 4 séances par mois avec un tuteur en ligne pas cher (italki / Preply, ~5–15 $ de l'heure). Dès l'A2, c'est le meilleur usage de ton argent : parler et être corrigée.</p>
<h3>Budget examens (exemples 2026, fixés par chaque centre)</h3>
${T(["Examen", "Prix"], [["DELF A2", "~130 €"], ["DELF B1", "~140–160 €"], ["DELF B2", "~140–200 €"], ["TCF IRN", "~174–200 €"], ["TEF IRN", "~180 €"], ["Examen civique", "~60–80 €"]])}
<h3>Ne paie pas pour</h3>
<ul><li>Les offres « à vie » ou les abonnements annuels le premier mois : teste d'abord la version gratuite.</li>
<li>Plusieurs applis payantes en même temps (elles se recoupent).</li>
<li>Une école de langue que le plan gratuit + un tuteur pas cher pourraient remplacer (un cours intensif à l'université coûte environ 6,50 € de l'heure).</li></ul>`;

  FR.easyhard = `<h3>Ton avance</h3>
<ul><li><b>Les sons :</b> le turc a déjà les voyelles contre lesquelles les autres apprenants se battent pendant des mois : ü = u français (tu), ö = eu (deux), u = ou (vous).</li>
<li><b>Le vocabulaire :</b> le turc a emprunté environ 5 000 mots au français ; ton anglais B2 ajoute des milliers de mots transparents (nation, important, possible…).</li>
<li><b>Une clé de prononciation gratuite :</b> l'orthographe turque d'un emprunt montre comment sonne le français : şoför = chauffeur · kuaför = coiffeur · asansör = ascenseur · kruvasan = croissant · ruj = rouge.</li>
<li><b>tu / vous</b> fonctionne comme <b>sen / siz</b>, et vous sert aussi au pluriel.</li>
<li><b>Les verbes changent selon la personne</b>, comme en turc : geliyorum / geliyorsun → je viens / tu viens.</li>
<li><b>Le rythme :</b> le français accentue la FIN de chaque groupe de mots ; le turc accentue surtout la fin du mot.</li>
<li><b>Les pronoms compléments se placent AVANT le verbe</b>, comme en turc : Onu görüyorum → Je le vois.</li>
<li><b>Ton anglais B2</b> t'ouvre les meilleurs cours gratuits du monde.</li></ul>
<h3>Tes principaux défis (prévois plus de répétition)</h3>
<ul><li><b>Le genre :</b> chaque nom est masculin ou féminin → apprends toujours un nom AVEC son article.</li>
<li><b>Des articles partout :</b> le / la / l' / les, un / une / des, du / de la.</li>
<li><b>L'écrit ≠ l'oral :</b> beaucoup de lettres muettes et de groupes de lettres (eau, ou, oi, ch, gn).</li>
<li><b>Les voyelles nasales</b> et le <b>r</b> français.</li>
<li><b>L'ordre des mots</b> S-V-O : le verbe arrive tôt.</li>
<li><b>Des prépositions au lieu des suffixes :</b> -de/-e/-den deviennent à, en, dans, de, chez…</li>
<li><b>Les relatives APRÈS le nom</b> avec qui / que / où / dont.</li>
<li><b>L'accord</b> des adjectifs et de certains participes passés.</li>
<li><b>Deux auxiliaires</b> (avoir / être) et le passé composé face à l'imparfait.</li></ul>`;

  FR.pron = `<p><b>Règle d'or :</b> lis le français avec les règles du français. En turc, 1 lettre = 1 son ; en français, des groupes de lettres font un seul son et beaucoup de lettres finales sont muettes. Les repères utilisent les lettres turques ; « ~ » = voyelle nasale. Touche 🔊 dans les exercices pour entendre chaque son.</p>
<h3>Les voyelles</h3>${T(KEY, [
    ["<b>u</b>", "tu, rue", "ü : « tü », « rü »"],
    ["<b>ou</b>", "vous, rouge", "u : « vu », « ruj »"],
    ["<b>eu, œu</b> (fermé)", "deux, bleu", "ö : « dö », « blö »"],
    ["<b>eu, œu</b> (ouvert)", "peur, sœur", "ö, un peu plus ouvert"],
    ["<b>e</b> (non accentué)", "le, je, petit", "ö bref : « lö », « jö », souvent avalé : « p'ti »"],
    ["<b>é</b>", "été, café", "e fermé : « ete », « kafe »"],
    ["<b>è, ê, ai, ei</b>", "mère, fête, lait, neige", "e ouvert"],
    ["<b>i, î, y</b>", "ici, île, stylo", "i (le français n'a PAS de ı)"],
    ["<b>o, ô, au, eau</b>", "dos, hôtel, auto, beau", "o"],
    ["<b>oi</b>", "moi, trois", "« ua » : « mua », « trua »"],
    ["<b>oy</b>", "voyage", "« uay » : « vuayaj »"],
    ["<b>ui</b>", "huit, nuit", "« üi » : « üit », « nüi »"]
  ])}
<h3>Les voyelles nasales (la vraie nouveauté : à pratiquer chaque jour la première semaine)</h3>
<p>L'air passe par le nez ; le n ou le m lui-même ne se prononce PAS.</p>${T(KEY, [
    ["<b>an, am, en, em</b>", "enfant, temps", "a~ : « a~fa~ », « ta~ »"],
    ["<b>on, om</b>", "bon, nom", "o~ : « bo~ », « no~ »"],
    ["<b>in, im, ain, ein</b>", "vin, pain", "e~ : « ve~ », « pe~ »"],
    ["<b>un, um</b>", "un, parfum", "e~ (certains disent ö~)"]
  ])}
<p><b>Pas de nasale quand une voyelle suit le n ou le m :</b> un « e~ » / une « ün » · bon « bo~ » / bonne « bon » · fin « fe~ » / fine « fin ». Beaucoup de paires masculin/féminin fonctionnent comme ça !</p>
<h3>Les consonnes</h3>${T(KEY, [
    ["<b>ch</b>", "chat, chose", "ş : « şa », « şoz »"],
    ["<b>j</b>", "je, jour", "j : « jö », « jur » (comme garaj, plaj)"],
    ["<b>g</b> + e/i/y", "gens, girafe, garage", "j : « ja~ », « jiraf »"],
    ["<b>g</b> + a/o/u", "gare, goût", "g"],
    ["<b>gu</b> + e/i", "guide, guerre", "g : le u est muet"],
    ["<b>gn</b>", "montagne", "« ny » : « mo~tany »"],
    ["<b>c</b> + e/i/y", "ce, ici, cycle", "s : ⚠️ le c français n'est JAMAIS le c turc (dj)"],
    ["<b>c</b> + a/o/u", "café, comme", "k"],
    ["<b>ç</b>", "ça, garçon", "s : ⚠️ le ç français = s, PAS le ç turc"],
    ["<b>qu</b>", "qui, quatre", "k : « ki », « katr »"],
    ["<b>s</b> entre deux voyelles", "maison, rose", "z : « mezo~ », « roz »"],
    ["<b>ss</b>", "poisson", "s : « puaso~ » (poison « puazo~ » = zehir !)"],
    ["<b>th / ph</b>", "thé, photo", "t / f"],
    ["<b>h</b>", "homme, hôtel", "MUET : « om », « otel »"],
    ["<b>r</b>", "rouge, Paris", "r du fond de la gorge (un léger gargarisme), pas le r roulé turc"],
    ["<b>ill</b> (après voyelle)", "fille, travail", "y : « fiy », « travay » (mais ville, mille, tranquille = « il »)"],
    ["<b>ti</b> + voyelle", "nation, patient", "s : « nasyo~ », « pasya~ »"],
    ["<b>x</b>", "taxi / six / deux", "« ks » / « s » / muet : ça dépend"]
  ])}
<h3>Les lettres muettes (le gros morceau)</h3>
<ul><li>Les consonnes finales sont en général muettes : petit, grand, vous, nous, trop, beaucoup, nez, prix. Souvent prononcées : c, r, f, l (« CaReFuL ») : lac, mer, neuf, sel, mais pas les infinitifs en -er : parler = « parlé ».</li>
<li>Le e final est muet (sauf le, je, ce) : table = « tabl ». Il fait entendre la consonne d'avant : petit « pöti » / petite « pötit ».</li>
<li>La terminaison verbale <b>-ent</b> (ils/elles) est MUETTE : ils parlent = « il parl ».</li>
<li>Le -s / -es du pluriel est muet : les chats = « le şa ». Le pluriel s'entend dans l'article.</li></ul>
<h3>La liaison</h3>
<p>les amis = « le-zami » · vous avez = « vu-zave » · ils ont = « il-zo~ » (onların var) / ils sont = « il-so~ » (onlar…dır) : la liaison change le sens !</p>
<h3>Les accents</h3>
<p>Sur le e, ils changent le son (é fermé, è/ê ouvert) ; ç = s ; sur les autres lettres, ils distinguent des mots : a (il a) / à (vers) · ou (ya da) / où (nerede).</p>
<h3>Le piège des nombres</h3>
<p>70 = soixante-dix (60+10) · 80 = quatre-vingts (4×20) · 90 = quatre-vingt-dix. En Belgique et en Suisse : septante, nonante (huitante dans une partie de la Suisse).</p>`;

  const GORDER_FR = T(["Niveau", "La grammaire, dans l'ordre où tu en as besoin"], Object.entries(window.GRAMMAR_ORDER_FR).map(([k, v]) => [`<b>${k}</b>`, v]));

  FR.grammar = `<h3>1) L'ordre des mots</h3><p>Ben bir elma yiyorum. → Je mange une pomme. (S-V-O)<br>kırmızı bir araba → une voiture rouge (la plupart des adjectifs APRÈS le nom). Avant : beau, joli, bon, mauvais, petit, grand, jeune, vieux, nouveau, premier : une petite maison.</p>
<h3>2) Les articles (la grande nouveauté)</h3><p>bir → un / une ; au pluriel = des. Le turc n'a pas d'article défini → le / la / l' / les.<br>
Un indice venu du turc : l'accusatif marque souvent un complément DÉFINI : Kitabı okudum → J'ai lu <b>le</b> livre · Kitap okudum → J'ai lu <b>un</b> livre.<br>
Pour une quantité non comptable = du / de la / de l' : Ekmek aldım → J'ai acheté <b>du</b> pain. Pour une vérité générale : Kahve severim → J'aime <b>le</b> café.<br>
Après une négation, un/une/du/de la/des → <b>de</b> : Je n'ai pas <b>de</b> pain.</p>
<h3>3) Le genre : apprends chaque nom avec un/une ou le/la</h3><p>En général <b>féminin</b> : -tion/-sion, -té, -ette, -ance/-ence, -ure, -ude, -ée (mais le lycée, le musée), -ie.<br>En général <b>masculin</b> : -ment, -age (mais la page, la plage, l'image), -eau (mais l'eau, la peau), -isme, -oir, -al.</p>
<h3>4) Le pronom sujet est obligatoire</h3><p>Geliyorum → <b>Je</b> viens. je, tu, il/elle/on, nous, vous, ils/elles. « on » = les gens, et à l'oral = « nous » : On y va ? = Gidelim mi?</p>
<h3>5) Les suffixes de cas → des prépositions</h3>
${T(["Turc", "Français"], [
    ["Okul<b>a</b> gidiyorum.", "Je vais <b>à</b> l'école. (à+le = au, à+les = aux)"],
    ["Doktor<b>a</b> gidiyorum.", "Je vais <b>chez</b> le médecin."],
    ["Ev<b>de</b>yim. · çanta<b>da</b>", "Je suis <b>à</b> la maison. · <b>dans</b> le sac"],
    ["İstanbul'<b>dan</b> geliyorum.", "Je viens <b>d'</b>Istanbul. (de+le = du)"],
    ["arkadaşım<b>la</b>", "<b>avec</b> mon ami"],
    ["Ayşe'<b>nin</b> kitabı · evin kapısı", "le livre <b>d'</b>Ayşe · la porte <b>de</b> la maison (ordre inversé !)"],
    ["Türkiye'de / Fransa'ya", "<b>en</b> Turquie / <b>en</b> France · <b>à</b> Paris · <b>au</b> Portugal · <b>aux</b> États-Unis"]
  ])}
<h3>6) Var / yok, être, avoir</h3><p>Masada su var → <b>Il y a</b> de l'eau sur la table. · Bir kedim var → <b>J'ai</b> un chat. · Öğrenciyim → <b>Je suis</b> étudiante.<br><b>avoir</b>, et non être, pour l'âge, la faim, la soif, le froid, le chaud, la peur, le besoin : 30 yaşındayım → J'ai 30 ans · Acıktım → J'ai faim · Üşüyorum → J'ai froid.</p>
<h3>7) La négation</h3><p>Gelmiyorum → Je <b>ne</b> viens <b>pas</b> (à l'oral, le ne disparaît). ne… jamais · ne… plus · ne… rien · ne… personne.</p>
<h3>8) Les questions (pas de « mi »)</h3><p>Geliyor musun? → Tu viens ? (voix qui monte) / Est-ce que tu viens ? / Viens-tu ?<br>kim = qui · ne = que/quoi · nerede = où · ne zaman = quand · nasıl = comment · neden = pourquoi · kaç = combien · hangi = quel/quelle</p>
<h3>9) Les temps : équivalents turcs approximatifs</h3>
${T(["Turc", "Français", "Exemple"], [
    ["-iyor / -ir", "présent", "je mange (yiyorum / yerim)"],
    ["-di", "passé composé", "j'ai mangé (yedim)"],
    ["-iyordu / -irdi (habitude)", "imparfait", "je mangeais (yiyordum)"],
    ["-ecek", "futur proche / futur simple", "je vais manger / je mangerai"],
    ["-irdi / -se", "conditionnel", "Vaktim olsa gelirdim → Si j'avais le temps, je viendrais."],
    ["-miş", "pas de temps équivalent : apparemment, il paraît que, il serait parti", "(gitmiş)"],
    ["-meli", "devoir / il faut", "Gitmeliyim → Je dois partir."],
    ["-ebil", "pouvoir", "Gelebilirim → Je peux venir."],
    ["-mek istiyorum", "vouloir (plus poli : je voudrais)", "Gitmek istiyorum → Je veux partir."],
    ["-mesini istiyorum", "subjonctif", "Gelmeni istiyorum → Je veux que tu viennes."]
  ])}
<p>Passé composé avec <b>être</b> pour les verbes de mouvement ou de changement d'état (aller, venir, partir, arriver, entrer, sortir, monter, descendre, naître, mourir, rester, tomber…) et tous les verbes pronominaux ; le participe s'accorde : elle est allée.</p>
<h3>10) Les relatives (participe turc → qui / que / où / dont)</h3>
${T(["Turc", "Français"], [
    ["gelen adam", "l'homme <b>qui</b> vient"],
    ["okuduğum kitap", "le livre <b>que</b> je lis"],
    ["yaşadığım şehir", "la ville <b>où</b> j'habite"],
    ["bahsettiğim film", "le film <b>dont</b> je parle"]
  ])}
<h3>11) Les possessifs s'accordent avec la CHOSE possédée</h3><p>annem / babam → <b>ma</b> mère / <b>mon</b> père · annesi → <b>sa</b> mère (de lui OU d'elle) · kocası → <b>son</b> mari. Devant une voyelle : mon amie, son école.</p>
<h3>12) Les pronoms compléments avant le verbe (comme en turc)</h3><p>Onu görüyorum → Je <b>le</b> vois · Ona veriyorum → Je <b>lui</b> donne · Onu ona veriyorum → Je le lui donne · Onu görmek istiyorum → Je veux le voir · Oraya gidiyorum → J'<b>y</b> vais · Ondan istiyorum → J'<b>en</b> veux.</p>
<h3>La grammaire dans l'ordre où tu en as besoin</h3>${GORDER_FR}`;

  FR.loanwords = `<p>Le turc a emprunté environ <b>5 000 mots</b> au français : le dictionnaire de la TDK comptait 4 977 mots d'origine française en 2005, soit environ 72 % de tous ses mots d'origine occidentale (Vural &amp; Böler 2008). Feuillette le paquet « Les mots que tu connais déjà » : 140 d'entre eux, avec l'audio.</p>
<h3>Les mots français cachés dans le turc (* = le sens a changé, voir les faux amis)</h3>
${T(["Thème", "Turc → français"], [
    ["Transports et ville", "otobüs (autobus), otomobil, taksi, metro, kamyon (camion), bisiklet (bicyclette), şoför (chauffeur), garaj, bulvar (boulevard), asansör (ascenseur), apartman* (appartement)"],
    ["Vêtements et beauté", "pantolon, kravat, manto (manteau), palto (paletot), bere (béret), fular (foulard), eşarp* (écharpe), bluz*, mayo* (maillot), sütyen* (soutien-gorge), kostüm, ruj (rouge), parfüm, kuaför"],
    ["La maison", "kanepe (canapé), abajur (abat-jour), şömine (cheminée), lavabo, duş (douche), tuvalet*, parke (parquet), deterjan, ekran (écran), televizyon, şarj (charge), pil (pile)"],
    ["Cuisine et café", "restoran, menü, adisyon (addition), kruvasan, jambon, mayonez, krem, püre (purée), konserve"],
    ["Les gens et le quotidien", "mersi, pardon, randevu, sürpriz, kuzen / kuzin, ekip (équipe), direktör, dosya (dossier), abone (abonné), rötar (retard), avantaj, şans, prestij"],
    ["École et culture", "lise (lycée), üniversite, fakülte, enstitü, kültür, müzik, aktör / aktris, dekor, jüri, vitrin, kartpostal"],
    ["Les idées", "problem, sistem, program, ekonomi, demokrasi, teknik, kategori, referans, enerji, prensip"],
    ["Santé et corps", "klinik, ambulans, pansuman (pansement), masaj, egzersiz, terapi, refleks, tendon, anatomi, sendrom, kronik, migren, romatizma, protez (prothèse), ortopedi"]
  ])}
<p><b>Méthode :</b> un nouveau mot français → « Est-ce qu'il existe en turc ? » → dis-le à la turque → corrige les voyelles et enlève les lettres muettes. Souvent juste à 80 % du premier coup.</p>
<h3>Astuces pour deviner le mot français</h3>
<ul><li>Le <b>-syon</b> turc = le <b>-tion</b> français : televizyon → télévision, rehabilitasyon → réhabilitation.</li>
<li>Le <b>ş</b> turc correspond souvent au <b>ch</b> français : şans → chance, şömine → cheminée, şampiyon → champion.</li>
<li>Le <b>j</b> turc = le <b>j/g</b> français (même son !) : masaj → massage, garaj → garage.</li></ul>
<h3>Correspondances anglais → français (des milliers de mots gratuits)</h3>
${T(["Anglais", "Français", "Exemples"], [
    ["-tion", "-tion", "nation, information, situation (prononcé « -syo~ »)"],
    ["-ty", "-té", "university → université, quality → qualité"],
    ["-ous", "-eux / -euse", "famous → fameux, delicious → délicieux"],
    ["-ic, -ical", "-ique", "music → musique, physical → physique"],
    ["-ly", "-ment", "rapidly → rapidement, exactly → exactement"],
    ["-or", "-eur", "actor → acteur, doctor → docteur, colour → couleur"],
    ["-ive", "-if / -ive", "active → actif, positive → positif"],
    ["-ize", "-iser", "organize → organiser, realize → réaliser"],
    ["-ist, -ism", "-iste, -isme", "tourist → touriste, optimism → optimisme"],
    ["-ance, -ence", "-ance, -ence", "chance, patience, différence"],
    ["s disparu → ^", "", "forest → forêt, hospital → hôpital, feast → fête"],
    ["s- → é- / es-", "", "student → étudiant, school → école, space → espace"]
  ])}`;

  FR.falsefriends = `<h3>Turc → français : même origine, sens différent</h3>
${T(["Turc", "Le sosie français", "Dis plutôt"], [
    ["garson = serveur", "garçon = enfant, jeune homme", "serveur / serveuse"],
    ["apartman = l'IMMEUBLE", "appartement = un logement", "immeuble"],
    ["kolej = école (privée)", "collège = école publique de 11 à 15 ans", "—"],
    ["bluz = chemisier", "blouse = vêtement de travail, blouse de labo", "chemisier"],
    ["eşarp = foulard", "écharpe = écharpe d'hiver (aussi pour un bras)", "foulard"],
    ["deplasman = match à l'extérieur", "déplacement = trajet, voyage", "match à l'extérieur"],
    ["metres = maîtresse (amante)", "maîtresse = AVANT TOUT une institutrice", "—"],
    ["mayo = maillot de bain", "maillot = maillot de sport", "maillot de bain"],
    ["peron = quai", "perron = escalier devant un bâtiment", "quai"],
    ["eşofman = survêtement", "échauffement = la mise en route avant l'effort", "survêtement"],
    ["fermuar = fermeture éclair", "fermoir = attache d'un bijou ou d'un sac", "fermeture éclair"],
    ["küvet = baignoire", "cuvette = bassine, cuvette des toilettes", "baignoire"],
    ["abiye = robe de soirée", "habillé = élégant", "robe de soirée"],
    ["karne = bulletin scolaire", "carnet = petit cahier, carnet de tickets", "bulletin (scolaire)"],
    ["buji = bougie d'allumage", "bougie = surtout une BOUGIE pour éclairer", "—"],
    ["jaluzi = store vénitien", "jalousie = surtout le sentiment", "store vénitien"],
    ["sütyen = soutien-gorge", "soutien = aide, appui", "soutien-gorge"],
    ["tuvalet = toilettes", "la toilette = se laver / une tenue", "les toilettes (WC)"],
    ["pasta (de l'italien) = gâteau", "pâtes = pâtes alimentaires", "gâteau"],
    ["jilet (Gillette) = lame de rasoir", "gilet = cardigan, veste sans manches", "lame de rasoir"],
    ["otogar (fabriqué en Turquie)", "n'existe pas", "gare routière"],
    ["bonfile (fabriqué en Turquie)", "n'existe pas", "filet de bœuf"],
    ["panjur (fabriqué en Turquie)", "n'existe pas", "volet"]
  ])}
<h3>Quand le turc guide mieux que l'anglais</h3>
<p>aktüel = <b>actuel</b> (l'anglais « actual » ≠ actuel) · ajanda = <b>agenda</b> (l'anglais « agenda » = ordre du jour) · sempatik = <b>sympathique / sympa</b> · kuzen, randevu, rötar, adisyon → même sens qu'en français.</p>
<h3>Anglais → français : les pièges classiques</h3>
${T(["Français", "veut dire", "attention"], [
    ["actuellement", "en ce moment (currently)", "actually = en fait"],
    ["éventuellement", "peut-être (possibly)", "eventually = finalement"],
    ["librairie", "magasin de livres (bookshop)", "library = bibliothèque"],
    ["assister à", "être présent à (to attend)", "to assist = aider"],
    ["attendre", "to wait", "to attend = assister à"],
    ["rester", "to stay", "to rest = se reposer"],
    ["sensible", "sensitive", "sensible = raisonnable"],
    ["location", "rental", "location = endroit, lieu"],
    ["journée", "day", "journey = voyage, trajet"],
    ["coin", "corner", "coin = pièce de monnaie"],
    ["monnaie", "change, currency", "money = argent"],
    ["car", "parce que (because)", "car = voiture"],
    ["blesser", "to injure", "to bless = bénir"],
    ["préservatif", "condom", "preservative = conservateur"],
    ["raisin", "grape", "raisin = raisin sec"],
    ["pain", "bread", "pain = douleur"],
    ["chair", "flesh", "chair = chaise"],
    ["sale", "dirty", "sale = soldes"],
    ["stage", "internship, course", "stage = scène"],
    ["formation", "training", "training course = une formation"],
    ["habit", "garment", "habit = habitude"],
    ["entrée", "starter (menu)", "entree (US) = plat principal"],
    ["déception", "disappointment", "deception = tromperie"],
    ["demander", "to ask", "to demand = exiger"],
    ["lecture", "reading", "lecture = cours magistral"],
    ["collège", "middle school", "college = université"],
    ["excité", "surexcité (peut être sexuel !)", "I'm excited = J'ai hâte !"]
  ])}
<p>Ils sont tous dans le paquet de cartes « Faux amis ».</p>`;

  FR.mistakes = `<p>Relis cette liste chaque mois, et teste-toi avec l'exercice « Trouve l'erreur ».</p>${T(["✗ faux", "✓ juste", "pourquoi"], (window.MISTAKES || []).map(m => [m[0], m[1], m[4] || m[2]]))}`;

  FR.survival = `<p>Les 40 phrases du premier jour sont dans le paquet « Phrases de survie », avec l'audio. (e) = ajoute -e quand c'est une femme qui parle : enchanté → enchantée, perdu → perdue.</p>
<h3>Les numéros d'urgence en France</h3>
${T(["Numéro", "Pour"], [["<b>112</b>", "Numéro d'urgence européen (fonctionne partout)"], ["<b>15</b>", "Urgence médicale (SAMU)"], ["<b>17</b>", "Police"], ["<b>18</b>", "Pompiers"], ["<b>114</b>", "Par SMS, si tu ne peux pas parler ou entendre"]])}
<p>Phrases clés : « Au secours ! » · « Appelez un médecin / une ambulance ! » · « Je suis malade. J'ai mal ici. » · « Je suis perdue. »</p>`;

  FR.listening = `<h3>Comment utiliser un podcast (à tous les niveaux)</h3>
<ol><li>Écoute une fois sans le texte.</li><li>Réécoute avec la transcription ; cherche 5 à 10 mots.</li><li>Fais du « shadowing » pendant 1 à 2 minutes (répète juste après la personne, avec le même rythme).</li><li>Réécoute le lendemain en marchant ou en cuisinant.</li></ol>
<p>Un épisode écouté 4 fois &gt; 4 épisodes écoutés une fois.</p>
<h3>Réglages YouTube</h3>
<p>Sous-titres en français (dès le B1, les sous-titres automatiques suffisent), vitesse 0,75× au début, touches « , » / « . » pour avancer image par image sur ordinateur. La meilleure chaîne pour natifs est celle qui parle de TES centres d'intérêt : cherche « anatomie », « kiné », « résumé match handball », « recette facile », « yoga débutant »…</p>
<h3>L'échelle de visionnage</h3>
${T(["Niveau", "Quoi regarder"], [
    ["A1–A2", "Extr@, Easy French, des dessins animés en français, un film que tu connais par cœur en turc ou en anglais, maintenant en français"],
    ["A2–B1", "Un feuilleton quotidien avec sous-titres français (Un si grand soleil, Plus belle la vie) + des sketchs courts (Scènes de ménages, Caméra Café)"],
    ["B1–B2", "Des séries françaises avec sous-titres français : Lupin, Dix pour cent, HPI, En thérapie, Le Bureau des légendes, Fais pas ci fais pas ça"],
    ["B2–C1", "Films et séries sans sous-titres ; talk-shows ; stand-up"]
  ])}
<p><b>Méthode :</b> le même épisode deux fois (sous-titres français, puis sans) vaut mieux que deux épisodes différents.</p>
<h3>La musique</h3>
<p>Commence par des chansons que tu connais peut-être de Turquie : <b>Indila</b> : « Dernière danse », « Tourner dans le vide » · <b>Stromae</b> : « Alors on danse », « Papaoutai », « Formidable » · <b>Zaz</b> : « Je veux », « Les passants ». Ensuite, une diction claire : Édith Piaf, Joe Dassin, Charles Aznavour, Christophe Maé, Kendji Girac, Louane, Vianney, Angèle, Clara Luciani, Grand Corps Malade (slam, B1+).</p>
<p><b>Une chanson par semaine :</b> lis les paroles, cherche les mots, chante avec (= entraînement de prononciation gratuit), puis fais-la sur LyricsTraining.</p>`;

  FR.readwrite = `<h3>Deux façons de lire</h3>
<p><b>La lecture extensive</b> : des textes faciles, en quantité, pour le plaisir ; tu dois connaître 95 % des mots. <b>La lecture intensive</b> : un texte court analysé mot à mot. Fais les deux, surtout l'extensive. Dès le B1 : un livre que tu as déjà lu en turc, maintenant en français ; tu connais l'histoire, donc tu suis le français.</p>
<h3>La méthode pour écrire</h3>
${T(["Niveau", "Quoi faire"], [
    ["A1", "Recopier des textes courts à la main ; des dictées (aussi dans l'onglet Pratique) ; 5 phrases par jour sur ta journée."],
    ["A2", "Un journal de 100 mots 3 fois par semaine → Bon Patron → LangCorrect → RÉÉCRIRE la version corrigée."],
    ["B1+", "Des e-mails, des textes d'opinion courts (format DELF), des résumés de podcasts écoutés."]
  ])}
<p><b>Tiens toujours un carnet d'erreurs</b> avec tes 20 fautes récurrentes et relis-le avant d'écrire : il y en a un dans l'onglet Pratique.</p>
<p>Avec un assistant IA : demande « liste mes erreurs et explique-les, ne réécris pas mon texte ». Réécrire ne t'apprend rien.</p>
<h3>Dictionnaires ou traducteurs</h3>
<p>Les traducteurs pour COMPRENDRE, les dictionnaires pour APPRENDRE (exemples, genre, registre). Ne colle jamais ton propre français dans un traducteur pour le « corriger » avant de l'avoir écrit toi-même : tu sautes l'apprentissage. Dès l'A2–B1, passe aux dictionnaires unilingues (Le Robert, Wiktionnaire) : tu commences à penser en français.</p>
<h3>Petits réglages utiles</h3>
<ul><li>Taper les accents : sur un téléphone, appui long sur la lettre (e → é è ê ë, c → ç, a → à â). Sur un Mac : maintiens la touche, ou ajoute le clavier français.</li>
<li>Dès l'A2 : téléphone et applis en français. Dès l'A1 : suis quelques comptes français sur des sujets que tu aimes.</li>
<li>Active par défaut les sous-titres automatiques en français sur YouTube.</li></ul>`;

  FR.speaking = `<p><b>Gratuit :</b> Tandem, HelloTalk, ConversationExchange, les soirées Polyglot Club, Meetup « échange linguistique » / « café des langues », les ateliers gratuits (AVF, centres sociaux, bibliothèques), et les jeux de rôle vocaux avec une IA (pharmacie, banque, médecin, entretien d'embauche ; demande les corrections à la fin).</p>
<p><b>Payant mais pas cher</b> (le meilleur rapport qualité-prix quand tu es prête) : italki ou Preply, un tuteur pas cher pour la conversation ; un professeur de FLE diplômé pour préparer un examen.</p>
<h3>Des scripts à répéter (A1–A2)</h3>
<p>Te présenter en 1 minute · ta routine quotidienne · commander dans un café · demander ton chemin.</p>
<p class="ex"><b>Rendez-vous par téléphone</b> : « Bonjour, je voudrais prendre rendez-vous, s'il vous plaît. » « Je suis disponible lundi ou mardi matin. » « Mon nom est …, ça s'écrit … » « Merci beaucoup, au revoir. »</p>
<p>Écris-le, dis-le 10 fois, puis passe le vrai appel. Tu peux t'entraîner avec l'exercice d'oral de l'onglet Pratique.</p>`;

  FR.email = `<p>L'écrit formel français a des formules fixes. Recopie-les, change le milieu.</p>
<p><b>Pour commencer</b></p>
<ul><li><i>Madame, Monsieur,</i> (personne inconnue)</li><li><i>Bonjour Madame Martin,</i> (e-mail, nom connu)</li></ul>
<p><b>Phrases utiles</b></p>
<ul>
<li><i>Je me permets de vous contacter au sujet de…</i> : pour introduire le sujet.</li>
<li><i>Je souhaiterais obtenir des informations sur…</i> : pour demander une information.</li>
<li><i>Pourriez-vous m'indiquer les documents nécessaires ?</i> : pour demander la liste des pièces.</li>
<li><i>Vous trouverez ci-joint…</i> : pour annoncer une pièce jointe.</li>
<li><i>Je reste à votre disposition pour tout renseignement complémentaire.</i> : pour conclure poliment.</li>
</ul>
<p><b>Pour finir</b></p>
<ul>
<li>E-mail : <i>Bien cordialement,</i> / <i>Cordialement,</i></li>
<li>Lettre : <i>Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.</i></li>
</ul>
<p class="ex"><b>Exemple</b> : Bonjour Madame, Je me permets de vous contacter au sujet de l'inscription en licence STAPS pour la rentrée prochaine. Je suis diplômée en kinésithérapie à l'étranger. Pourriez-vous m'indiquer la procédure et les documents nécessaires ? Je vous remercie par avance. Bien cordialement, Esin</p>
<p><b>Plan d'un essai (DELF B2 / université) :</b> introduction (thème + problématique + annonce du plan) → partie 1 (argument + exemple) → partie 2 (contre-argument ou second argument + exemple) → conclusion (réponse + ouverture). Utilise le paquet des connecteurs.</p>`;

  FR.exams = `${T(["Examen", "Pour quoi faire", "Validité", "Prix (2026)"], [
    ["DELF A1–B2", "Diplôme ; titres de séjour ; le DELF B2 dispense du test de langue à l'université", "À vie", "~130–200 €"],
    ["DALF C1/C2", "Diplôme avancé", "À vie", "~180–220 €"],
    ["TCF IRN / TEF IRN", "Titres de séjour et nationalité ; 4 compétences, le même jour", "2 ans", "~174–200 €"],
    ["TCF tout public (+ expression écrite)", "Admission à l'université (DAP)", "2 ans", "variable"],
    ["DFP Santé B1, B2/C1", "Français professionnel pour kinés, infirmiers, médecins ; accepté pour la carte de 10 ans et la nationalité", "À vie", "variable"]
  ])}
<p><b>Stratégie :</b> le TCF et le TEF expirent après 2 ans → passe-les peu avant d'en avoir besoin. Le DELF et le DALF n'expirent jamais → collectionne-les comme des étapes (A2 → B1 → B2). Vérifie toujours quel test exact l'institution demande AVANT de payer.</p>
<p><b>Préparation gratuite :</b> les sujets d'exemple officiels du DELF (audio + grilles de correction) sur la page de chaque niveau · les sujets complets de delfdalf.ch · les exemples de tâches du TEF IRN · la simulation TCF de TV5MONDE · les entraînements RFI · l'annuaire du Point du FLE · Podcast Français Facile DELF A1/A2 · les sujets d'exemple du DFP Santé. Où passer les examens : universités, Alliances Françaises, centres agréés (recherche Carif-Oref).</p>`;

  FR.official = `<p class="note">État des règles au 30 octobre 2026. Elles changent : vérifie toujours sur service-public.gouv.fr avant toute demande. Ceci est une information, pas un conseil juridique.</p>
<h3>Titres de séjour et nationalité (premières demandes depuis le 1er janvier 2026)</h3>
${T(["Étape", "Niveau demandé"], [["Première carte de séjour pluriannuelle", "A2 (oral + écrit) + examen civique"], ["Première carte de résident de 10 ans", "B1 + examen civique"], ["Naturalisation", "B2 (oral + écrit)"]])}
<p>Justificatifs acceptés : TCF IRN ou TEF IRN (de moins de 2 ans), ou un diplôme qui n'expire jamais (DELF / DALF, DELF Pro, DFP, DCL, DUEF) ou un diplôme scolaire français. Les diplômes étrangers ne sont pas acceptés. Depuis 2026, une attestation d'assiduité de l'OFII ne suffit plus à prouver le niveau.</p>
<h3>L'examen civique</h3>
<p>40 questions à choix multiple en français (28 de connaissances + 12 mises en situation), 45 minutes, réussite à 32/40, ~60–80 €, n'expire jamais, on peut le repasser. Préparation gratuite : les fiches thématiques officielles (formation-civique.interieur.gouv.fr), Ensemble en France. <b>Astuce :</b> c'est un test de lecture déguisé ; le français A2–B1 que tu apprends EST la préparation.</p>
<h3>Université : première année de licence (ressortissante hors UE vivant en France)</h3>
<ul><li>Procédure : la <b>DAP</b> (« dossier vert »), 3 choix d'universités, à déposer avant le <b>15 décembre</b> pour la rentrée de septembre suivante.</li>
<li>Test de langue : TCF tout public + expression écrite obligatoire, fin janvier / début février. Chaque université décide ; le B2 est l'attente habituelle. <b>Dispense avec le DELF B2 ou le DALF</b> (justificatif avant le 15 décembre).</li>
<li>« Études en France » (Campus France) ne concerne que les candidats qui vivent dans l'un des 75 pays de la liste.</li>
<li><b>Calendrier en partant de zéro :</b> en commençant au niveau A0 à l'automne, la première fenêtre réaliste est la campagne qui suit, environ 15 mois plus tard (B2 ≈ 560–650 h ≈ 10–12 h par semaine pendant 14 mois).</li></ul>
<h3>Kinésithérapie (masseur-kinésithérapeute)</h3>
<p>L'Ordre indique que les diplômes de kinésithérapie hors UE ne sont pas reconnus en tant que tels. Le parcours : une dispense partielle de formation dans un institut de formation (IFMK), dans un petit quota (jusqu'à 2 % des places), après une épreuve écrite (dont du français), un entretien en français et une épreuve pratique ; puis terminer la formation restante (au moins 60 ECTS), obtenir le diplôme d'État (DE) et s'inscrire à l'Ordre. Aucun niveau CECRL n'est fixé, mais la sélection et la formation se font en français : <b>vise le B2 ou plus</b> (par ex. DFP Santé B2).</p>`;

  FR.courses = `<h3>1) OFII : contrat d'intégration républicaine (CIR) · gratuit, financé par l'État · objectif A2</h3>
<p>Pour les ressortissants hors UE qui s'installent durablement avec un premier titre de séjour, y compris la plupart des titres « vie privée et familiale » (par ex. conjoints ou partenaires de Français) et les salariés ; pas les étudiants ni les visiteurs. Un test à l'OFII ; en dessous de l'A2 → formation gratuite (jusqu'à 600 h ; en présentiel pour les personnes peu à l'aise à l'écrit, sinon souvent un an sur une plateforme en ligne), obligatoire une fois acceptée ; plus 4 journées de formation civique. <b>Si tu y as droit, c'est la plus grande ressource gratuite qui existe : accepte tout ce qu'on te propose.</b></p>
<h3>2) Pour trouver un cours</h3>
<p>Refugies.info (ouvert à TOUS les étrangers) · BonjourBonjour · Carif-Oref DIAN · Réseau Alpha (Île-de-France uniquement).</p>
<h3>3) Les associations (bénévoles, gratuit ou petite cotisation : la meilleure pratique de conversation)</h3>
<p>AVF (245 associations locales d'accueil des nouveaux arrivants) · centres sociaux (demande les « ateliers sociolinguistiques (ASL) » ou « Français pour tous ») · La Cimade (34 villes) · Croix-Rouge · Secours populaire / Secours catholique (renseigne-toi sur place).</p>
<h3>4) La mairie et la médiathèque</h3>
<p>Mairie / CCAS : demande les « cours de français pour adultes » et les « ateliers de conversation ». Médiathèque : manuels de FLE, lectures graduées, BD, DVD sous-titrés. Demande : « Avez-vous des ressources pour apprendre le français ? »</p>
<h3>5) Des financements pour les cours ou les examens</h3>
<p>France Travail (si tu es inscrite comme demandeuse d'emploi : demande à ton conseiller) · le CPF si tu travailles en France (par ex. le TEF IRN ; participation forfaitaire d'environ 150 € par utilisation).</p>
<h3>6) Pour comparer : le payant</h3>
<p>Français intensif à l'université ≈ 6,50 € de l'heure (1 560 € le semestre) · Alliance Française. Le plan gratuit + un tuteur en ligne pas cher couvre l'essentiel de ce qu'ils proposent.</p>`;

  FR.fos = `<h3>La santé</h3>
<p>Préparation gratuite au DFP Santé · le français sur objectif spécifique du Point du FLE (vocabulaire médical, « La piqûre du français » du CCDMD) · les actualités santé et sciences de RFI de l'A1 au B2 · les entraînements DFP Santé de RFI. Ton avance grâce au turc : klinik, masaj, egzersiz, refleks, tendon, anatomi, ortopedi, protez, romatizma, migren, sendrom… sont tous des mots français. Le glossaire de la kiné est dans le paquet « Kiné et médecine du sport ».</p>
<p>Les institutions clés : <b>IFMK</b> (institut de formation en masso-kinésithérapie) · <b>DE</b> (diplôme d'État) · <b>Ordre des masseurs-kinésithérapeutes</b>.</p>
<h3>L'université</h3>
<p>Mooc2Move (~24 h de français pour les études) · RFI « Étudier en France » (C1–C2). Les mots du premier jour : le cours magistral (CM) · les travaux dirigés (TD) · le partiel · la licence / le master · la prise de notes · la dissertation · la synthèse.</p>
<h3>Le travail</h3>
<p>RFI « Travailler en français » · le MOOC débutant de l'AFPA. Les mots de la recherche d'emploi : le CV · la lettre de motivation · l'entretien d'embauche · le CDI / le CDD · la période d'essai · la fiche de paie · les congés payés · le / la responsable, tous dans le paquet « Travail ».</p>`;

  FR.glossary = `<p>Utilise ces mots pour chercher en français.</p>${T(["Terme", "Sens"], [
    ["CECRL / CEFR", "Cadre européen commun de référence : A1–A2 élémentaire, B1–B2 indépendant, C1–C2 expérimenté"],
    ["FLE", "Français langue étrangère : LE mot-clé de recherche : « FLE A1 exercices articles »"],
    ["FLS", "Français langue seconde (pour les personnes qui vivent dans un pays francophone)"],
    ["FOS / FOU", "Français sur objectif spécifique (santé, affaires) / sur objectif universitaire"],
    ["Méthode", "Une collection de manuels (Alter Ego+, Édito, Cosmopolite, Inspire, Défi…)"],
    ["Cahier d'activités", "Le cahier d'exercices qui accompagne un manuel"],
    ["Corrigés", "Les réponses : « avec corrigés » est indispensable quand on apprend seule"],
    ["CO / CE / PO / PE", "Compréhension orale / écrite, production orale / écrite : les 4 compétences des examens"],
    ["DELF / DALF", "Diplômes officiels (A1–B2 / C1–C2)"],
    ["TCF / TEF", "Tests officiels qui donnent un niveau par compétence"],
    ["IRN", "Intégration, résidence, nationalité : versions du TCF/TEF pour les démarches administratives"],
    ["OFII / CIR", "Office français de l'immigration et de l'intégration / contrat d'intégration républicaine"],
    ["ASL", "Atelier sociolinguistique : atelier de français pratique pour la vie quotidienne"],
    ["Médiathèque", "Bibliothèque publique"]
  ])}`;

  FR.sources = `<p>Le catalogue a été constitué le 30 octobre 2026 par recherche sur le web, et un robot revérifie chaque lien tous les lundis. Certains sites bloquent les vérifications automatiques (TV5MONDE, RFI, France Éducation International, france.tv, arte.tv, Lumni, Radio France). <b>Si un lien ne marche pas, cherche le nom de la ressource</b> : en général, elle a simplement déménagé.</p>
<h3>Arrêtées ou modifiées : ne perds pas de temps à les chercher</h3>
<ul><li>Annenberg Learner a fermé en 2026 : French in Action ne survit qu'en copies d'archive.</li>
<li>Le podcast innerFrench s'est arrêté en septembre 2026 (les archives restent en ligne).</li>
<li>Duolingo French Podcast : plus de nouveaux épisodes depuis 2024 (archives en ligne).</li>
<li>Le Journal des enfants (France) a fermé en 2024 → 1jour1actu ou le JDE belge.</li>
<li>Le flux gratuit du podcast « Talk in French » s'est arrêté en 2015.</li>
<li>phonetique.free.fr (qui demande Flash) ne fonctionne plus.</li>
<li>« 7 jours sur la planète » de TV5MONDE s'appelle maintenant « Regards sur l'actualité » ; l'appli s'appelle « TV5MONDE EDU: Learn ».</li>
<li>Le site d'apprentissage de RFI est passé de savoirs.rfi.fr à francaisfacile.rfi.fr.</li>
<li>Language Transfer ne propose le français qu'en « Introduction ».</li>
<li>Memrise a retiré de l'appli les cours créés par les utilisateurs (2024).</li></ul>
<h3>Sources linguistiques</h3>
<ul><li>Les emprunts français en turc : Vural &amp; Böler (2008), TAED 36.</li><li>Les erreurs d'article et de genre des apprenants turcophones : Eren (2015), Synergies Turquie 8.</li><li>Les prépositions françaises face aux suffixes de cas turcs : Demiral &amp; Kaya (2016).</li><li>L'anglais (première langue étrangère) et l'apprentissage du français : Bür &amp; Aycan (2013).</li><li>Faux amis : TDK (turc) et Larousse (français). Heures d'étude : Alliance Française et le Foreign Service Institute américain.</li></ul>`;

  (window.GUIDE || []).forEach(g => { if (FR[g.id]) g.fr = FR[g.id]; });
})();
