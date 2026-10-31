/* French descriptions (and notes) for every resource, so the French interface is complete (v3).
   One line per resource: id|description ##NOTE note (the note part is optional). */
(function () {
  const FR = `
tv5|Le meilleur cours gratuit : des milliers d'exercices sur de vrais extraits télé, classés par niveau du CECRL. Commence ici chaque semaine. ##NOTE Appli : « TV5MONDE EDU: Learn » (mode hors ligne). Cours A1, et cours A2 et B1 ajoutés en 2026.
rfi-ff|Le site d'apprentissage de RFI : l'actualité en français facile, des séries audio et des exercices avec transcriptions.
fi-texas|Un cours universitaire complet de première année, gratuit, avec des vidéos de vrais francophones, des listes de vocabulaire et la grammaire (Tex's French Grammar). ##NOTE Nouvelle édition : utexas.pressbooks.pub/francais-interactif. Environ 1 chapitre toutes les 1 à 2 semaines.
tex|Des explications de grammaire claires racontées par des dialogues drôles, chacune avec des exercices autocorrigés.
lawless|Une immense référence gratuite pour la grammaire, le vocabulaire, la prononciation et les faux amis, avec des quiz. Parfait quand une règle n'est pas claire.
pointdufle|Un énorme index d'exercices gratuits en ligne classés par thème (grammaire, vocabulaire, phonétique). Utilise-le comme un menu. ##NOTE Plus de 8 200 exercices, avec une rubrique « A0 grands débutants ».
50lang|100 leçons gratuites de phrases avec l'audio, disponibles du turc vers le français. ##NOTE Aussi sur 50languages.com et en appli Android ; des MP3 à écouter dans le bus.
anki|Les cartes à répétition espacée classiques. Gratuit sur Mac, Android et le web (l'appli iPhone est payante ; utilise plutôt l'onglet Cartes de ce site).
easyfrench|Des interviews dans la rue en France, sous-titrées en français et en anglais. Le vrai français de tous les jours.
pierre|Des centaines de leçons de grammaire et de vocabulaire expliquées en français simple.
hugodecrypte|L'actualité du jour expliquée aux jeunes Français. Rapide mais très clair.
pff|De courts dialogues du quotidien avec transcriptions complètes et exercices, classés par niveau.
innerfrench-pod|Le podcast intermédiaire le plus apprécié : sujets intéressants, voix claire, transcriptions. ##NOTE L'émission s'est arrêtée en septembre 2026 après 200 épisodes ; les archives restent en ligne, soit une année d'écoute de niveau B1.
jeff|10 minutes d'actualité internationale lue lentement, avec la transcription. Chaque jour. ##NOTE Commence en A2 avec le texte ; au B1, essaie sans. La meilleure habitude d'écoute gratuite.
lyricstraining|Retrouve les mots manquants dans des chansons françaises. Apprendre en chantant : parfait les jours de petite énergie.
tv5plus|Des films et séries francophones en streaming gratuit, souvent avec sous-titres français. ##NOTE Gratuit avec publicité, sans carte bancaire. Depuis juillet 2025, le catalogue est aussi sur france.tv.
francetv|Le replay gratuit de la télévision publique (séries, documentaires, infos). Fonctionne en France.
1jour1actu|L'actualité du jour écrite pour les enfants. Phrases courtes, vrais sujets.
wordref|Le meilleur dictionnaire français↔anglais, avec des forums pour les expressions difficiles.
glosbe|Dictionnaire français–turc avec des phrases d'exemple.
robert|Des définitions modernes et claires, avec des exemples.
conjugueur|Tous les verbes conjugués à tous les temps, plus des exercices.
bonpatron|Un correcteur de grammaire conçu pour les apprenants de français.
fei-delf|La page officielle du DELF avec des sujets d'exemple gratuits et l'audio, de l'A1 au B2. ##NOTE Diplôme valable à vie. Sujets d'exemple gratuits avec audio sur la page de chaque niveau. ~130 € (A1/A2), ~140–200 € (B1/B2).
langtransfer|Environ 40 pistes audio où un professeur te fait CONSTRUIRE des phrases dès la première minute. Le moyen le plus rapide de commencer à parler : semaines 1 à 4, à côté de ton cours principal. ##NOTE Appli gratuite (fonctionne hors ligne) sur iPhone et Android. Le français n'existe qu'en « Introduction ».
voisins12bis|Une sitcom audio bilingue français/anglais (13 épisodes). La toute première écoute idéale. ##NOTE Si le lien a changé, cherche le titre sur francaisfacile.rfi.fr.
tv5-app|Le cours TV5MONDE en appli : cours A1 (A2 et B1 ajoutés en 2026), test de niveau, mode hors ligne, entraînement au TCF.
prononcer|Un cours de prononciation pour débutants : alphabet, sons, paires minimales, voyelles nasales, avec des MP3.
fi-phon|Le tableau des sons du français (API) avec l'audio ; la liaison et l'élision expliquées en anglais.
aliceayel|Des histoires en « input compréhensible » que tu comprends dès le premier jour sans traduction (le sens passe par les dessins). Parfait pour partir de zéro.
coffeebreak-yt|Les versions vidéo des leçons de Coffee Break French.
supereasy|Des interviews dans la rue faites pour les débutants, sous-titrées en français et en anglais.
extra|Une sitcom comique de 13 épisodes pour apprenants, dans l'esprit de Friends, en français très simple. ##NOTE Vidéos non officielles qui peuvent disparaître : regarde-les tant qu'elles sont là. Épisode 1 : youtube.com/watch?v=nftpRbl7r7w
usgs|Un feuilleton quotidien : un court épisode chaque jour de la semaine, les mêmes personnages, le même vocabulaire ; idéal pour écouter chaque jour avec sous-titres français.
globalstory|40 histoires illustrées pour enfants en 5 niveaux AVEC L'AUDIO, et les mêmes histoires existent en turc : la lecture en parallèle parfaite dès le premier jour. ##NOTE Versions turques : storybookscanada.ca/stories/tr/
tv5biblio|Plus de 600 livres d'auteurs francophones à lire en ligne ou à télécharger (ePub/PDF), certains avec l'audio.
langcorrect|Publie un court texte de journal ; des natifs le corrigent ligne par ligne. En échange, tu corriges du turc ou de l'anglais.
tdk|Pour chaque emprunt, il donne le mot français d'origine (« Fransızca garçon »…) : l'outil parfait pour repérer les mots transparents et les faux amis.
aykut|Environ 700 vidéos en turc, des playlists par niveau + DELF/DALF ; le professeur a grandi en France. Ton filet de sécurité en turc. ##NOTE Articles gratuits avec un parcours sur yavuzaykut.com (les livres sont payants).
asbu|Un manuel universitaire complet de niveau A1 (2024) avec l'audio par QR code et les corrigés, introduction en turc.
derkunt|PDF/ePub gratuit : les mots français que le turc utilise déjà. Du vocabulaire instantané.
delfdalfch|Des sujets complets d'entraînement au DELF/DALF de l'A1 au C2 (vérifie que le format correspond à l'examen actuel).
dfp-sante|Le diplôme de français professionnel pour les kinés, infirmiers et médecins (B1, B2/C1) ; valable à vie.
civique|Les fiches thématiques et listes de questions officielles du ministère de l'Intérieur.
sp-dap|Pour une ressortissante hors UE qui vit en France : la DAP « dossier vert », 3 choix, à déposer avant le 15 décembre ; TCF + épreuve écrite fin janvier/début février (dispense avec le DELF B2).
sp-cir|Une formation de français gratuite financée par l'État jusqu'à l'A2 (jusqu'à 600 h) + 4 journées civiques, pour beaucoup de premiers titres de séjour. Si tu y as droit, accepte tout.
refugiesinfo|Cherche des cours par ville et par niveau ; ouvert à TOUS les étrangers (pas seulement aux réfugiés).
dfp-prep|Des sujets d'exemple B1 et B2/C1 avec l'audio et les corrigés + des tutoriels en ligne. Conçu pour les professionnels de santé comme toi.
pointdufle-fos|Vocabulaire médical, français infirmier (« La piqûre du français » du CCDMD), français du travail et français universitaire.
irbms|La bibliothèque d'articles clairs d'un institut de médecine du sport : blessures, entraînement, nutrition et retour au sport. Une lecture professionnelle parfaite.
shortedition|Des milliers de nouvelles et de poèmes gratuits, classés par temps de lecture (1, 3, 5 minutes). Parfait pour une petite lecture chaque jour.
audiolingua|Des centaines de courts enregistrements (moins de 2 minutes) de vrais francophones, classés par niveau, âge et thème.
duolingo|Cinq minutes ludiques par jour. Bien pour l'habitude et les bases ; à combiner avec de la vraie écoute. ##NOTE Un cours depuis le turc existe (pratique au début) ; le cours depuis l'anglais est le plus complet : change quand tu te sens à l'aise.
coffeebreak|Un professeur et une apprenante autour d'un café : des leçons structurées en anglais, épisodes gratuits.
langreactor|Une extension de navigateur (Mac/Chrome) : double sous-titrage sur YouTube/Netflix avec traduction immédiate en turc ou en anglais.
tandem|Échange linguistique : tu aides quelqu'un en turc ou en anglais, il t'aide en français.
hellotalk|Discute avec des Français qui apprennent le turc ; ils corrigent tes messages.
easyfrench-pod|Deux Françaises parlent de la vie quotidienne en France, chaque semaine.
readlang|Clique sur n'importe quel mot d'une page web pour avoir sa traduction ; il crée tes cartes automatiquement.
openlearn|Des cours universitaires courts et gratuits (par ex. Beginners' French) avec l'audio, de l'Open University britannique. ##NOTE « Get ready for beginners' French » : environ 24 h sur 8 semaines + un badge gratuit.
ielang|Un tutoriel pour débutants, sympathique, une page par thème avec l'audio, créé par un professeur de langues.
bonjourdefrance|Un magazine en ligne gratuit avec des exercices, des tests et des jeux pour tous les niveaux.
ffcom|Des milliers d'exercices de grammaire et de vocabulaire avec correction immédiate, écrits par des enseignants.
ccdmd|Des exercices avancés de grammaire, d'orthographe et de rédaction pour les étudiants (du Québec, en français standard).
funmooc|Des MOOC universitaires gratuits en français : « Vivre en France » (A1–B1), et plus tard des cours de sciences, de santé et de sport.
loecsen|Des phrases de survie avec l'audio et des images ; fonctionne depuis le turc.
innerfrench-yt|Hugo parle lentement et clairement de sujets intéressants, entièrement en français. Le pont parfait vers le B2.
alexa|Des leçons pour débutants chaleureuses et très claires, expliquées en anglais.
frenchpod101|Des vidéos gratuites : vocabulaire par thème, écoute, prononciation.
vincent|De longues leçons calmes (souvent 1 heure) sur le vocabulaire et les verbes. Bien en écoute de fond.
elisa|Des leçons courtes et joyeuses sur le français du quotidien et les expressions.
cuf|Géraldine explique le vrai français parlé et les codes culturels français. Très utile pour comprendre les gens autour de toi.
fauth-yt|Les vidéos calmes de Johan sur le français parlé et la confiance en soi. Motivant, français plutôt lent.
1j1q|Des dessins animés d'une minute et demie qui répondent aux questions des enfants sur le monde. Facile, court, à revoir.
karambolage|De courtes vidéos charmantes sur les objets, les mots et les habitudes du quotidien en France.
cpsorcier|L'émission de science culte. Les épisodes sur les muscles, le cœur, les os et le sport sont parfaits pour ton domaine.
ietaitunefois|Le dessin animé classique sur le corps humain (diffusé en Turquie sous le nom « Bir Zamanlar Hayat »). Le vocabulaire du corps avec plaisir.
majormouv|Un kiné français qui explique la douleur, la posture, les blessures et l'entraînement. Ton métier, en français.
anat3d|Des vidéos universitaires d'anatomie en français (Lyon 1). Muscles, articulations, nerfs : exactement le vocabulaire de l'école de kiné.
dirtybio|Des vidéos de biologie drôles et rapides. Un français plus difficile, très bien à partir du B2.
sciet|Des explications scientifiques claires par un physicien. Du français universitaire avec une voix sympathique.
brut|De courtes infos et portraits sous-titrés. Les sous-titres français aident beaucoup.
konbini|Des interviews détendues de célébrités françaises. Un français parlé naturel.
notabene|Des histoires de l'Histoire racontées avec passion. Une bonne écoute de niveau C1.
linguisticae|Des vidéos drôles sur la langue française elle-même, pour les apprenants avancés.
monsieurphi|La philosophie expliquée clairement. Le vocabulaire du raisonnement, niveau C1/C2.
yt-tr|Des leçons de français expliquées en turc par des professeurs turcs. À utiliser quand un point de grammaire est plus simple dans ta langue.
yt-tr-gram|Les temps expliqués en turc : passé composé, imparfait, subjonctif…
duopod|Des histoires vraies et émouvantes racontées en français facile, avec une narration en anglais. ##NOTE Plus de nouveaux épisodes depuis 2024, mais toutes les archives sont en ligne : toujours excellent.
motsactu|3 minutes pour apprendre un mot ou une expression de l'actualité.
oli|Des histoires du soir pour enfants racontées par des artistes français. Doux et apaisant.
odyssees|Des aventures historiques pour enfants, magnifiquement réalisées.
methodesci|Une heure de science avec des chercheurs. Le meilleur de l'écoute universitaire.
piedssurterre|De vraies personnes racontent leur histoire. Un français naturel et plein d'émotion.
affsens|Des récits captivants d'événements célèbres. Une narration formidable.
transfert|Des gens ordinaires racontent une histoire incroyable de leur vie.
radiofrance|Des milliers de podcasts gratuits de France Inter, France Culture, franceinfo.
radiogarden|Fais tourner le globe et écoute en direct la radio de n'importe quelle ville francophone. Un joli français de fond.
litaudio|Des milliers de livres audio gratuits lus par des bénévoles : contes, romans, poèmes.
audiocite|Des livres audio gratuits ; commence par les contes courts.
arte|Des documentaires et des films de grande qualité, beaucoup avec sous-titres français.
lumni|La vidéothèque scolaire gratuite de la France : biologie, EPS, histoire… du primaire au lycée. Un français scolaire facile.
allocine|Critiques et bandes-annonces de films ; choisis un film à regarder et lis les commentaires.
jde|L'actualité pour les 9–14 ans. Bon entraînement de lecture facile. ##NOTE Le « Journal des enfants » français a fermé en 2024 ; celui-ci est le journal belge.
vikidia|La Wikipédia des enfants : des articles en français simple sur tous les sujets (essaie « muscle », « handball »).
franceinfo|Le site d'information public gratuit, avec de courtes vidéos. Lis un article par jour.
20min|Un quotidien gratuit avec des articles courts.
theconv|Des chercheurs écrivent pour le grand public : sciences du sport, santé, éducation. La lecture universitaire idéale.
lingua|De courts textes gradués avec des questions de compréhension.
wikisource|La littérature française classique gratuite : commence par les fables de La Fontaine ou les nouvelles de Maupassant.
gutenberg|Des livres numériques gratuits en français pour ton iPad.
ebooksgratuits|Des classiques en livres numériques gratuits et bien mis en page (EPUB pour Apple Books).
gallica|La collection numérique de la Bibliothèque nationale : livres, presse, cartes.
marmiton|Des recettes en français : lis la recette, puis cuisine-la. Du vocabulaire qui a du goût.
vikisozluk|Le Wiktionnaire turc : beaucoup de mots français expliqués en turc.
wiktionnaire|Un dictionnaire français avec la prononciation (API + audio) et des traductions en turc.
larousse|Un dictionnaire unilingue : l'étape après les dictionnaires bilingues.
cnrtl|Un dictionnaire universitaire avec synonymes, antonymes et étymologie.
reverso-conj|Des tableaux de conjugaison rapides, parfaits sur téléphone. ##NOTE Tape N'IMPORTE quelle forme (même « nous nous sommes levés ») et il retrouve le verbe.
forvo|Entends n'importe quel mot prononcé par des natifs.
youglish|Tape un mot et entends-le dans des centaines de vidéos YouTube.
tatoeba|Des centaines de milliers de phrases d'exemple, beaucoup avec traduction turque et audio.
gtranslate|Pointe l'appareil photo de ton téléphone vers une lettre ou un panneau pour une traduction immédiate en turc.
scribens|Un correcteur de français gratuit qui explique chaque erreur.
academie|Les subtilités du français correct, expliquées par l'Académie française.
oqlf|Des réponses à tous les doutes de grammaire et d'orthographe, très bien organisées.
convex|Trouve un partenaire francophone près de chez toi pour converser en vrai.
journaly|Écris un petit texte de journal en français ; des natifs le corrigent. ##NOTE Activité en 2026 non confirmée : préfère LangCorrect.
rfrench|Une grande communauté sympathique pour poser n'importe quelle question sur le français.
meetup|Des soirées d'échange linguistique dans des bars et des cafés près de chez toi, en général gratuites.
jeveuxaider|La plateforme officielle du bénévolat : aider dans un club de sport ou une association est la meilleure pratique orale gratuite.
welcomefr|Le guide officiel des nouveaux arrivants, en anglais : s'installer, étudier, travailler.
servicepublic|Le guide officiel de toutes les démarches administratives. Un français difficile au début : lis-le avec DeepL à côté.
ofii|L'Office français de l'immigration et de l'intégration. Les nouveaux arrivants qui signent le contrat d'intégration (CIR) peuvent avoir des cours de français gratuits (jusqu'à 600 h). ##NOTE Voir la fiche CIR : formation gratuite jusqu'à l'A2 si tu y as droit.
anef|La plateforme en ligne des titres de séjour. Apprends son vocabulaire avant d'en avoir besoin.
ameli|Le site de l'Assurance maladie + des articles santé très clairs (ameli santé) en français simple.
caf|Les allocations familiales et les aides au logement. Du français administratif typique.
francetravail|L'agence pour l'emploi : des offres à lire, le vocabulaire du CV et de la lettre de motivation.
doctolib|Prends rendez-vous chez le médecin ou le kiné en ligne. Lis les pages des praticiens : du vrai français médical.
sncf|Trains et cars. Acheter un billet est une jolie petite mission en français.
laposte|Les services de La Poste : colis, lettres, recommandé.
leboncoin|Les petites annonces d'occasion : de vrais textes courts, et une raison d'écrire des messages en français.
meteo|La météo : une habitude de lecture de 30 secondes par jour.
vivreenfrance|Les MOOC de l'Alliance Française (A1, A2, B1) sur la vie quotidienne en France : logement, santé, travail, démarches. ##NOTE A1 (~50 h), A2 (~70 h), B1 (~90 h). Les anciennes pages ont déménagé : cherche « Vivre en France » dans le catalogue FUN-MOOC et choisis une session ouverte.
mediatheque|Les bibliothèques publiques sont gratuites ou très bon marché, ont des livres de FLE, des films et souvent des ateliers de conversation gratuits. ##NOTE Demande à l'accueil : « Avez-vous des ressources pour apprendre le français ? »
msd-fr|Une encyclopédie médicale gratuite. Lis le même article en anglais et en français pour apprendre vite le vocabulaire médical.
passeportsante|Des articles santé en français accessible : maladies, anatomie, sport.
larousse-med|Une encyclopédie médicale : des définitions précises des termes d'anatomie et de pathologie.
allodocteurs|Une émission et des articles santé : des médecins qui parlent clairement au grand public.
inserm|L'institut national de la recherche médicale : des pages scientifiques claires sur le corps et les maladies.
has|Les recommandations officielles de bonne pratique, dont celles de kinésithérapie. Du français professionnel.
spf|Les informations et campagnes de santé publique.
ordremk|L'ordre professionnel des kinés : comment la profession fonctionne en France, et les règles pour les diplômes obtenus à l'étranger. ##NOTE Les diplômes de kiné hors UE ne sont pas reconnus en tant que tels : dispense partielle dans un IFMK (petit quota) après des épreuves en français, puis le DE.
sfphysio|La société scientifique de kinésithérapie : la pratique fondée sur les preuves, en français.
uness|L'université numérique française pour les études de santé et de sport ; certaines ressources sont ouvertes.
ffhb|L'actualité du handball français et la recherche de clubs. Ton sport : une motivation facile pour lire.
insep|L'Institut national du sport : des articles sur la haute performance et les sciences du sport.
sportsgouv|La politique sportive officielle, les programmes sport-santé, les diplômes d'entraîneur.
onisep-staps|L'information officielle sur les études de STAPS et les métiers du sport.
campusfrance|L'agence officielle pour étudier en France : formations, exigences de langue, vie étudiante. ##NOTE Tu vis déjà en France ? L'admission en première année passe par la DAP (voir Service-Public R1278).
parcoursup|La plateforme d'admission en première année d'université (dont STAPS).
enic|Délivre des « attestations de comparabilité » pour les diplômes étrangers : utile pour ton diplôme de kiné.
persee|Les archives gratuites des revues universitaires françaises.
hal|Des articles de recherche et des thèses françaises en accès libre : cherche « kinésithérapie » ou « STAPS ».
openedition|Des livres et revues de sciences humaines et sociales en accès libre.
erudit|Des revues universitaires francophones, beaucoup en accès libre.
scholar|Cherche dans la littérature scientifique ; filtre sur les résultats en français.
mercipro|Des vidéos de deux minutes qui expliquent des mots et des expressions difficiles.
fei-dalf|La page officielle du DALF C1/C2 et ses sujets d'exemple. Beaucoup d'universités demandent le C1.
fei-tcf|Le TCF (tout public, DAP pour l'université, IRN/ANF pour le séjour) avec des tests d'exemple. ##NOTE Avec son épreuve écrite obligatoire, le TCF est le test de langue pour l'admission à l'université. Valable 2 ans.
tv5-delf|Des activités gratuites d'entraînement au DELF dans les vrais formats d'examen.
rfi-delf|De l'entraînement à l'écoute au format DELF/DALF à partir de l'actualité de RFI.
7jours|Des reportages d'actualité chaque semaine avec des exercices en trois niveaux. Une excellente préparation au DELF B1/B2.
rfi-series|D'autres séries audio pour débutants et des exercices par niveau avec transcriptions sur le site d'apprentissage de RFI.
openlearn-hub|10 courtes unités universitaires (5 à 20 h chacune) : Getting started 1–3, voyage, projets de vacances…
ensemble|Des vidéos sur la vie civique et quotidienne en France + des quiz A2/B1, en accès permanent, financées par le ministère de l'Intérieur. Très bien pour l'examen civique.
coursera-a1|Environ 9 h en 6 modules. Gratuit à suivre ; le certificat est payant. Facultatif.
edx-montreal|6 semaines de bases à l'oral et à l'écrit (accès libre gratuit, contexte québécois).
mauril|Apprendre avec des extraits de télé et d'infos canadiennes (français du Québec). Peut ne fonctionner que depuis le Canada : teste-le.
tolearnfrench|Plus de 8 000 exercices, des tests de niveau et une leçon gratuite chaque semaine par e-mail.
columbia|Des exercices à choix multiple qui expliquent chaque réponse.
bescherelle|L'appli de conjugaison officielle du célèbre ouvrage de référence (gratuite, avec publicité).
anki-decks|Cherche « French 5000 » ou « French frequency » et choisis un paquet AVEC l'audio et de bons avis.
languageguide|Pointe une image, entends le mot : maison, cuisine, corps, vêtements… Parfait pour les 500 premiers mots.
pointdufle-phon|Un portail de tableaux API, de paires minimales et d'exercices de liaison venus de tout le web.
phonetiqueca|Environ 58 exercices « lequel as-tu entendu ? » : vent / vin, ils sont / ils ont… (voix québécoises).
flenet|Des guides d'articulation, des exercices audio et des dictées autocorrigées (site ancien, toujours utile).
littletalk|Plus de 580 épisodes courts et lents ; actif en 2026. Cherche le titre dans n'importe quelle appli de podcasts.
chosesasavoir|De courts épisodes quotidiens sur la science, l'histoire et la santé : la marque de podcasts la plus téléchargée de France.
heuredumonde|L'actualité du jour expliquée par des journalistes du Monde.
grandreportage|Des reportages de terrain d'environ 19 minutes, partout dans le monde.
baladeurs|Des récits de plein air et d'aventure.
metadechoc|Les croyances, la science et l'esprit critique.
kiffetarace|Les questions raciales et la société en France : rapide et argotique (C1).
cheminsphilo|La philosophie, lentement et clairement, pour les auditeurs avancés.
fci|Des histoires visuelles très simples, sur le même principe qu'Alice Ayel.
fia|Le légendaire cours vidéo en immersion (52 × 30 min). ##NOTE Son site officiel (learner.org) a fermé en 2026 ; ceci est une copie d'archive.
pieceoffrench|Des vlogs de la vie quotidienne conçus pour la compréhension.
hugo-gf|Des explications et des interviews plus longues par HugoDécrypte.
tv5info|L'actualité internationale avec beaucoup d'accents francophones.
rfi-yt|Les vidéos de Radio France Internationale.
axolot|Des histoires étranges et surprenantes.
fastgood|Cuisine : les images portent le sens ; bien à partir du B1.
cyprien|Humour et argot, pour le C1.
tf1plus|Le replay de la télé privée avec publicité ; le feuilleton quotidien « Plus belle la vie, encore plus belle ».
m6plus|Des séries de sketchs courts comme « Scènes de ménages » (couples, 2 à 4 minutes) : très bien pour le B1.
ina|Des décennies de vie française en courts extraits télé et radio.
parolesclips|Des exercices construits sur des clips de musique française.
spotify-fr|Les offres gratuites de Spotify/Deezer (avec publicité) : « chanson française », « variété française », « apprendre le français avec des chansons ».
storyweaver|Des milliers d'albums illustrés libres dans plus de 380 langues (filtre sur le français).
bibebook|Des livres numériques gratuits du domaine public.
polyglot|Un site d'échange + des soirées d'échange linguistique chaque semaine dans des bars de nombreuses villes françaises.
larousse-en|Un dictionnaire bilingue + unilingue + conjugaison.
collins|Un dictionnaire français–anglais fiable.
linguee|Les mots dans de vraies phrases traduites (par DeepL).
turkcesozluk|Recherche directe turc ↔ français.
fransizcasozluk|Dictionnaire français–turc et traduction de textes.
lexilogos|Un répertoire de dictionnaires français–turc (Lingea, Reverso, Glosbe, Eurodict, Saraç).
yandex|Un bon traducteur turc ↔ français.
enwikt|Signale les mots turcs « empruntés au français », par exemple peron.
lens|Pointe ton téléphone vers un panneau, un formulaire, une lettre, une étiquette : traduction immédiate.
kolayfr|Des phrases et dialogues du quotidien, lents, à écouter et répéter.
detaylariyla|La série de grammaire A1–A2 « Fransızca Öğreniyorum » avec un PDF.
askla|De longues vidéos d'exercices de grammaire et de vocabulaire A1–A2.
fransizcadersler|Des explications de grammaire claires (par ex. le passé composé avec avoir / être).
uplearner-yt|La série pour débutants « Fransızca Öğreniyorum » (fait la promotion d'un cours payant).
fransizca-a1a2|Des leçons A1–A2 et de l'entraînement au DELF en turc.
meb-aol|Les manuels de lycée de l'État turc, de l'A1.1 au B2.1, en PDF gratuits (sans l'audio).
lingohut|125 courtes leçons de vocabulaire et de phrases avec l'audio, sans inscription.
deepl-ext|Traduis n'importe quel texte sélectionné dans le navigateur.
toucan|Remplace quelques mots des sites anglais que tu lis par leur traduction française : du vocabulaire sans effort.
delf-b1-manual|Le guide officiel : format, durée, notation.
tef-irn|Le test pour le séjour et la nationalité (90 min, valable 2 ans, ~180 €, finançable par le CPF). Exemples de tâches et tutoriels gratuits. ##NOTE Portail de préparation gratuit : lefrancaisdesaffaires.fr › TEF IRN › préparation
tcf-irn|Le test conçu pour les titres de séjour et la nationalité : 4 compétences, ~1 h 35, le même jour ; résultat valable 2 ans (~174–200 €).
tv5-tcf|Un entraînement gratuit au TCF dans le vrai format.
pointdufle-eval|Un répertoire d'entraînements pour chaque examen de français.
carif|La recherche officielle des cours de français et des centres d'examen du TCF IRN / TEF IRN.
sp-cards|Les règles officielles : A2 pour la première carte pluriannuelle, B1 pour la carte de 10 ans (premières demandes depuis 2026).
sp-natur|La naturalisation demande le B2 (oral + écrit).
sp-civic|40 questions en français, 45 min, réussite à 32/40, ~60–80 € ; une réussite n'expire jamais.
civique-pdf|Les questions de connaissances de la naturalisation dans un seul PDF.
dap-notice|La notice officielle de la campagne d'admission en première année 2027–28.
campus-eef|Uniquement pour les candidats qui vivent dans l'un des 75 pays de la liste et postulent depuis ce pays (sinon : la DAP).
bonjourbonjour|Pour trouver un cours (site + appli) ; beaucoup de cours gratuits ou à tarif réduit.
reseaualpha|Un excellent outil pour trouver un cours, mais seulement en Île-de-France.
avf|245 associations locales qui accueillent les nouveaux arrivants ; beaucoup proposent des groupes de conversation en français.
centressociaux|Plus de 1 250 centres de quartier : demande les « ateliers sociolinguistiques (ASL) » ou « Français pour tous ».
cimade|Des ateliers bénévoles d'expression orale dans 34 villes.
croixrouge|Des cours de français ouverts à tous, quelle que soit la situation (trouve ton unité locale).
sp-cpf|Si tu travailles en France, le CPF peut financer des cours de français ou le TEF IRN (participation forfaitaire d'environ 150 € par utilisation).
rfi-sante|L'actualité santé et sciences avec des exercices, de l'A1 au B2.
rfi-dfp|Tâche de niveau B1 : conseiller un patient sur un traitement.
mooc2move|Environ 24 h de français pour les études universitaires (les dates de session varient).
rfi-etudier|De l'écoute avancée sur les études en France.
rfi-travailler|Le français du monde du travail, avec des exercices.
afpa|Le français du travail pour débutants (vérifie qu'une session est ouverte).
handnews|L'actualité du handball français : clubs, équipes de France, transferts. Ton sport préféré comme lecture quotidienne.
lnh|La ligue masculine de handball : résultats, interviews et vidéos de matchs commentés en français.
fnek|La fédération nationale des étudiants en kinésithérapie : le fonctionnement des IFMK, les études, la vie étudiante. Utile pour comprendre le parcours français.
ffmkr|Le principal syndicat des kinés en France : actualité de la profession, règles d'exercice et tarifs.
sante-gouv|Le site officiel du ministère de la Santé. Cherche « autorisation d'exercice masseur-kinésithérapeute » pour la procédure des diplômes étrangers. ##NOTE Les règles changent : vérifie toujours la date de la page.
vae|Le service officiel pour faire reconnaître ton expérience professionnelle par un diplôme français (validation des acquis de l'expérience).
etudiantgouv|Tout sur la vie étudiante en France : bourses, logement, santé, jobs, étudiants internationaux.
messervices|Demande une bourse du CROUS ou un logement étudiant.
physiopedia|Le wiki de la kinésithérapie, en anglais. Cherche une pathologie en anglais, puis trouve les termes français dans le paquet Kiné ou dans un article français.
vidal|La référence française des médicaments, avec des pages santé faciles pour les patients. Du vrai vocabulaire médical.
santefr|L'information officielle de santé publique : trouver un médecin ou une pharmacie, vaccins, prévention, en français simple.
mangerbouger|Le site national de la nutrition et de l'activité physique : recettes, conseils, textes simples. Pratique pour le français du sport-santé.
cochrane-fr|La médecine fondée sur les preuves en français : des résumés simples de revues systématiques.
tibo|Le plus grand youtubeur fitness de France : entraînement, défis, français très parlé. Une écoute amusante pour une sportive.
yt-kine|Des kinés français qui expliquent des exercices de rééducation : genou, dos, épaule. Écoute comment ils donnent les consignes aux patients.
espritsorcier|Jamy (de C'est pas sorcier) explique clairement la science et la santé, avec des schémas. Très bien pour l'écoute B1–B2.
bnr|De beaux livres numériques gratuits de classiques français (EPUB/PDF), parfaits pour les liseuses et l'iPad.
librivox|Des livres audio gratuits du domaine public lus par des bénévoles. Filtre Language: French et lis en même temps le livre numérique.
wikipedia|Astuce : lis l'article français sur un sujet que tu connais bien (handball, kinésithérapie, Istanbul). Ce que tu sais déjà rend la lecture facile.
wikimini|Une encyclopédie écrite par et pour les enfants : des articles courts et simples sur tous les sujets.
dicoado|Un dictionnaire écrit pour les adolescents : définitions et exemples en français simple. Le premier dictionnaire unilingue idéal.
futura|L'actualité des sciences et de la santé en français accessible, avec un grand glossaire. Un bon pont vers les textes universitaires.
cnrs|Le Centre national de la recherche scientifique explique ses recherches : de la lecture de niveau universitaire pour le C1.
babelio|Des critiques de livres français par des lecteurs : trouve ton prochain roman et écris de courtes critiques pour t'entraîner.
ouestfrance|Le plus grand quotidien de France, en grande partie gratuit : actualité nationale et locale, ville par ville.
slate|Des articles longs, des analyses et des tribunes : un vocabulaire riche et de l'argumentation pour le C1–C2.
dessouscartes|La géopolitique expliquée avec des cartes en 12 minutes. Un français clair et structuré : un modèle pour les exposés.
geopolitix|Des vidéos de géopolitique grand public : un français rapide mais très clair.
docseven|Des tops 10 amusants sur l'histoire et les curiosités. Un français parlé vivant.
merciprof|Des vidéos de deux minutes sur les expressions françaises, les pièges d'orthographe et l'origine des mots. Parfait pour les nuances du C1.
poissonfecond|Des réponses aux questions de science avec humour (le corps, les animaux, la santé).
arteradio|Des podcasts documentaires et des récits primés : de vraies voix, de vraies vies.
binge|Un réseau de podcasts français populaire sur la société, le travail, les relations et la culture.
louie|Des podcasts réfléchis ; « Émotions » explore un sentiment par épisode (stress, honte, joie…). Calme et très humain.
nouvellesecoutes|Un studio de podcasts indépendant : conversations, culture et société.
franceculture|Des milliers d'heures de science, d'histoire, de philosophie et de santé : l'amphithéâtre C1–C2 dans ta poche.
franceinter|La grande radio publique française : infos, humour, interviews, podcasts sur tous les sujets.
polarfle|Apprends le français en résolvant une enquête policière : des chapitres avec l'audio, des exercices et des points de grammaire.
conjuguemos|Des exercices chronométrés de conjugaison et de vocabulaire par temps. Un bon complément après l'exercice de conjugaison d'ici.
cordial|Un correcteur de grammaire et d'orthographe gratuit en ligne. Utilise-le avec Bon Patron pour avoir un deuxième avis.
crisco|Le dictionnaire des synonymes de l'université de Caen : trouve un meilleur mot pour tes rédactions.
usito|Un dictionnaire français moderne et gratuit (du Québec) avec des définitions claires et des remarques d'usage.
tureng|Le site de dictionnaire turc populaire existe aussi en français ↔ turc, avec beaucoup d'expressions.
impots|L'impôt sur le revenu : crée ton espace particulier et fais ta première déclaration (même sans revenus, elle est souvent nécessaire).
ants|Le site officiel des permis de conduire (y compris l'échange d'un permis étranger), des cartes d'identité et des papiers du véhicule.
mesdroits|Un simulateur gratuit qui montre les aides sociales auxquelles tu as peut-être droit.
anil|Une information gratuite et neutre sur la location : bail, dépôt de garantie, réparations, litiges. Les ADIL locales répondent aux questions.
mesquestions|Le guide en langage simple de la Banque de France sur la banque, le budget, le crédit et la fraude.
defenseur|Une aide gratuite si tu subis une discrimination ou un problème avec un service public.
gisti|Une association experte du droit des étrangers en France : des guides pratiques sur les titres de séjour et les démarches.
kwiziq|Des quiz adaptatifs qui trouvent tes points faibles en grammaire et te donnent une courte leçon pour chacun. L'offre gratuite suffit au quotidien. ##NOTE Gratuit : 10 quiz par mois, assez pour un bilan mensuel.
lingolia|Des tableaux de grammaire bien rangés et des exemples, avec des exercices gratuits pour chaque temps et chaque structure.
busuu|Des leçons structurées ; l'offre gratuite permet d'écrire de courts textes corrigés par des natifs.
memrise|Du vocabulaire avec de courtes vidéos de vraies personnes qui disent les mots. ##NOTE Les anciens paquets de la communauté ont déménagé sur community-courses.memrise.com.
drops|De jolis jeux de vocabulaire visuels de 5 minutes. Parfait un jour de fatigue.
clozemaster|Des textes à trous sur des milliers de vraies phrases. Très bien après l'A2 pour enrichir son vocabulaire en contexte.
lingq|Lis et écoute de vrais contenus et enregistre les mots inconnus d'un seul geste. ##NOTE L'offre gratuite est minuscule (20 mots enregistrés) : considère-la comme un essai. Readlang est l'équivalent moins cher.
quizlet|Des millions de séries de cartes de français partagées (cherche aussi « Fransızca »).
fauth-pod|Un podcast calme sur les expressions du quotidien et l'apprentissage sans stress.
lemonde|Le journal de référence en France ; certains articles sont gratuits.
vdn|L'actualité régionale du nord de la France : événements, transports, vie locale.
reverso|Vois n'importe quel mot dans de vraies phrases avec la traduction turque.
deepl|Un très bon traducteur FR↔TR/EN. Utilise-le pour vérifier, pas pour remplacer ta réflexion.
languagetool|Vérifie ton orthographe et ta grammaire pendant que tu tapes (aussi en extension Mac/Safari).
voltaire|L'entraînement à l'orthographe et à la grammaire utilisé par les universités françaises.
speechling|Enregistre-toi ; un vrai coach te renvoie un retour sur ta prononciation (offre gratuite).
kineactu|L'actualité des kinés en France. Le vocabulaire professionnel en contexte.
lequipe|Le quotidien du sport. Les comptes rendus de match répètent beaucoup le même vocabulaire.
revuestaps|La revue universitaire française des sciences du sport ; les anciens articles sont souvent gratuits.
prepmyfuture|De l'entraînement en ligne au TCF/DELF ; quelques tests gratuits pour connaître ton niveau.
mondly|Des leçons courtes enseignées depuis ta propre langue (le turc aussi) avec un chatbot. 1 leçon gratuite par jour.
frenchpod101-site|Une immense bibliothèque de courtes leçons audio/vidéo avec transcriptions ; souvent de grosses réductions.
ikonet|Des illustrations légendées par thème (dont le corps humain).
fonetix|Un cours de prononciation et d'écoute créé par des professeurs de FLE ; cours d'introduction gratuit.
lfbp|De courts dialogues expliqués en anglais ; les guides PDF sont la partie payante.
onething|De petites tranches de vie quotidienne à Paris, plus de 2 300 épisodes.
dailyfrenchpod|Plus de 2 600 courtes leçons construites sur l'actualité ; l'audio est gratuit, les guides PDF sont payants.
beelinguapp|Des histoires côte à côte dans deux langues (turc | français) avec l'audio de natifs.
reverso-corr|Un correcteur d'orthographe et de grammaire.
mylangex|Un annuaire de partenaires par ville.
ai-voice|Joue la scène à la pharmacie, à la banque, chez le médecin, en entretien d'embauche : à toute heure, sans timidité. Demande les corrections à la fin.
reverso-dict|Des milliers de phrases d'exemple en contexte.
reverso-frtr|Un dictionnaire français–turc direct.
culturetheque|La bibliothèque numérique de l'Institut français : « Français facile » A1–B2, listes de lecture pour le DELF, livres audio. Demande un compte.
orthodidacte|L'orthographe et la grammaire pour bien écrire en français, avec un test de niveau et des articles gratuits.
textbooks|Les collections utilisées dans les écoles de langue en France. Emprunte-les à la médiathèque et prends le « cahier d'activités » avec les « corrigés ».
grammaire-prog|Le livre de grammaire classique pour travailler seule, avec les corrigés. Cherche-le à la bibliothèque ou d'occasion.
lff|Des lectures graduées avec l'audio (~7,50 €, ePub ~5,50 €). Souvent au rayon FLE de la bibliothèque.
lcle|Des lectures graduées avec l'audio à télécharger. Pas chères d'occasion.
petitnicolas|BD et nouvelles illustrées : un premier « vrai » livre classique. Emprunte-les à la médiathèque.
mosalingua|Une appli payante avec un essai gratuit. Seulement si tu veux vraiment une appli de plus.
babbel|Un cours solide de dialogues et de grammaire, sans offre gratuite (~107–215 $ par an, souvent en promotion). Seulement si tu veux UNE appli payante.
nisf|L'actualité ralentie chaque semaine + de la grammaire en 3 niveaux (essai gratuit de 7 jours). Le journal gratuit de RFI fait presque la même chose.
netflix|Si tu l'as déjà : audio en français, sous-titres en français, plus Language Reactor.
italki|Des tuteurs à partir de ~5 $ de l'heure, des professeurs diplômés à partir de ~15 $, des cours d'essai pas chers. Dès l'A2, le meilleur usage de ton argent.
preply|~10–40 $ de l'heure ; cours d'essai 5–20 $ ; changement de tuteur gratuit.
uplearner|~279 € pour 2 ans de cours en direct, enseignés en turc. Seulement si tu veux un cours payant structuré.
boenstitu|~1 499 TL, 45 unités vidéo, enseignées en turc.
ifturquie|Des cours en présentiel à Ankara, Istanbul et Izmir ; centre d'examen DELF/DALF en Turquie.
ulorraine|Pour comparer : 1 560 € le semestre (240 h) ≈ 6,50 € de l'heure.
alliancefr|Des cours payants à Paris et dans beaucoup de villes. Le plan gratuit + un tuteur pas cher couvre l'essentiel de ce qu'ils proposent.
frantastique|Une leçon drôle chaque jour par e-mail (10 minutes), personnalisée selon tes erreurs. Essai gratuit, puis payant.
`;
  const byId = Object.fromEntries((window.RESOURCES || []).map(r => [r.id, r]));
  for (const line of FR.trim().split("\n")) {
    const i = line.indexOf("|"), id = line.slice(0, i), [d, note] = line.slice(i + 1).split(" ##NOTE ");
    const r = byId[id]; if (!r) continue;
    r.d.fr = d.trim();
    if (note && r.note) r.note.fr = note.trim();
  }
})();
