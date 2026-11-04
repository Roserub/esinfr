/* A1/A2 decks (v4): gym front desk, running, swimming pool, daily routine, questions, opposites,
   where things are, passé composé, physio-patient talk, healthy eating, phone & apps, small talk. */
(function () {
  const D = (id, level, en, tr, fr, lines) => ({
    id, level, name: { en, tr, fr },
    cards: lines.trim().split("\n").map(l => {
      const [f, t, e, n] = l.split("|").map(s => (s || "").trim());
      return { id: id + ":" + f, fr: f, tr: t, en: e, note: n || "" };
    })
  });

  window.DECKS.push(
    D("a1-gym-desk", "A1", "Gym front desk", "Spor salonu resepsiyonu", "À l'accueil de la salle de sport", `
la salle de sport|spor salonu|the gym|On dit aussi « la salle de gym ».
l'accueil (m.)|resepsiyon, karşılama|the front desk, reception
l'abonnement (m.)|üyelik, abonelik|the membership, subscription
l'abonnement mensuel (m.)|aylık üyelik|the monthly membership
l'abonnement annuel (m.)|yıllık üyelik|the yearly membership
le badge|giriş kartı|the access card, badge
le vestiaire|soyunma odası|the changing room
le casier|dolap|the locker
le cadenas|asma kilit|the padlock
le sac de sport|spor çantası|the gym bag
le sauna|sauna|the sauna
le cours collectif|grup dersi|the group class
le planning des cours|ders programı|the class timetable
le coach|antrenör, koç|the coach, personal trainer|On dit aussi « l'entraîneur (m.) ».
la salle de cours|ders salonu|the studio, classroom
la séance d'essai|deneme seansı|the trial session
le tapis de course|koşu bandı|the treadmill|tapis = halı; tapis de course = koşu bandı
le vélo d'appartement|kondisyon bisikleti|the exercise bike
les haltères (m.)|dambıllar|the dumbbells|Masculine: un haltère.
la musculation|ağırlık antrenmanı, fitness|weight training|Short: « la muscu ».
le cardio|kardiyo|cardio
le tapis de sol|egzersiz matı, yoga matı|the exercise mat
Vous êtes ouverts le dimanche ?|Pazar günü açık mısınız?|Are you open on Sundays?
la carte d'identité|kimlik kartı|the ID card
le certificat médical|sağlık raporu|the medical certificate
le tarif étudiant|öğrenci fiyatı|the student rate
je voudrais m'inscrire|kayıt olmak istiyorum|I'd like to sign up
Vous avez votre badge ?|Giriş kartınız var mı?|Do you have your access card?
Le cours commence à 18 h 30.|Ders 18.30'da başlıyor.|The class starts at 6:30 pm.
Les vestiaires sont au fond à gauche.|Soyunma odaları sonda, solda.|The changing rooms are at the back on the left.
Bonne séance !|İyi antrenmanlar!|Have a good workout!
Le cours est complet.|Ders dolu.|The class is full.`),

    D("a1-running", "A1", "Running & outdoor sport", "Koşu ve açık hava sporu", "La course et le sport en plein air", `
le semi-marathon|yarı maraton|the half marathon|21,1 km
la course à pied|koşu|running
le footing|hafif koşu, jogging|jogging|Faux anglicisme: in English « jogging ».
le jogging|eşofman / jogging|tracksuit / jogging|Le jogging = also the tracksuit trousers!
le trail|patika koşusu|trail running
la marche|yürüyüş|walking
la randonnée|doğa yürüyüşü|the hike|Short: « la rando ».
la côte|yokuş|the hill, slope|Also « la côte » = the coast!
le casque|kask|the helmet
le bord de la rivière|nehir kenarı|the riverside
la forêt|orman|the forest
le chemin|yol, patika|the path
la piste cyclable|bisiklet yolu|the cycle lane
les chaussures de course (f.)|koşu ayakkabıları|running shoes
le short|şort|the shorts|Singular in French: un short.
la gourde|matara|the water bottle
la montre|saat (kol saati)|the watch
le kilomètre|kilometre|the kilometre|5 km = cinq kilomètres
le parcours|parkur, güzergâh|the route, course
le rythme|tempo|the pace|courir à son rythme
lentement|yavaşça|slowly
vite|hızlı|fast
s'échauffer|ısınmak|to warm up|je m'échauffe
s'étirer|esnemek|to stretch|je m'étire
l'étirement (m.)|esneme|the stretch
être essoufflé|nefes nefese olmak|to be out of breath
transpirer|terlemek|to sweat
le dossard|göğüs numarası|the race bib
la ligne d'arrivée|bitiş çizgisi|the finish line
Je cours trois fois par semaine.|Haftada üç kez koşuyorum.|I run three times a week.
On fait une balade ?|Yürüyüşe çıkalım mı?|Shall we go for a walk?
Il fait beau, on va courir au parc.|Hava güzel, parkta koşmaya gidiyoruz.|The weather is nice, we're going running in the park.`),

    D("a1-pool", "A1", "At the swimming pool", "Yüzme havuzunda", "À la piscine", `
la piscine|yüzme havuzu|the swimming pool
nager|yüzmek|to swim|nous nageons
la natation|yüzme (spor)|swimming (the sport)
le maillot de bain|mayo|the swimsuit
le bonnet de bain|bone|the swim cap|Obligatoire dans la plupart des piscines françaises !
les lunettes de natation (f.)|yüzücü gözlüğü|the goggles
le bassin|havuz (bölümü)|the pool (basin)
le petit bain|sığ kısım|the shallow end
le grand bain|derin kısım|the deep end
la ligne d'eau|kulvar|the swimming lane
la longueur|havuz boyu|the length|faire dix longueurs
le maître-nageur|cankurtaran, yüzme hocası|the lifeguard, swimming instructor
la cabine|kabin|the changing cubicle
le pédiluve|ayak havuzu|the footbath
les tongs (f.)|parmak arası terlik|the flip-flops
le plongeoir|tramplen|the diving board
plonger|dalmak|to dive
la brasse|kurbağalama|breaststroke
le crawl|serbest stil|front crawl|Prononcer « krol ».
le dos crawlé|sırtüstü|backstroke
le papillon|kelebek|butterfly
la planche|yüzme tahtası|the kickboard
le jeton|jeton|the token, coin
le ticket d'entrée|giriş bileti|the entry ticket
la carte de dix entrées|10 girişlik kart|the 10-entry card
l'eau est froide|su soğuk|the water is cold
Je ne sais pas nager.|Yüzme bilmiyorum.|I can't swim.
Le bonnet est obligatoire.|Bone zorunlu.|A swim cap is compulsory.
Interdit de courir.|Koşmak yasak.|No running.
La piscine ferme à 20 h.|Havuz saat 20'de kapanıyor.|The pool closes at 8 pm.`),

    D("a1-routine", "A1", "Daily routine & reflexive verbs", "Günlük rutin ve dönüşlü fiiller", "La routine et les verbes pronominaux", `
se réveiller|uyanmak|to wake up|je me réveille
se lever|kalkmak|to get up|je me lève
se doucher|duş almak|to shower|je me douche
se laver|yıkanmak|to wash (oneself)|je me lave les mains
se brosser les dents|dişlerini fırçalamak|to brush one's teeth|je me brosse les dents
se coiffer|saçını taramak|to do one's hair
se maquiller|makyaj yapmak|to put on make-up
se raser|tıraş olmak|to shave
s'habiller|giyinmek|to get dressed|je m'habille
se dépêcher|acele etmek|to hurry|Dépêche-toi !
se préparer|hazırlanmak|to get ready
se reposer|dinlenmek|to rest|False friend: rester = to stay.
se promener|gezinmek, yürüyüş yapmak|to go for a walk|je me promène
s'amuser|eğlenmek|to have fun
se détendre|rahatlamak|to relax
se coucher|yatmak|to go to bed|je me couche
s'endormir|uykuya dalmak|to fall asleep
s'appeler|adı … olmak|to be called|je m'appelle
prendre le petit-déjeuner|kahvaltı yapmak|to have breakfast
déjeuner|öğle yemeği yemek|to have lunch
dîner|akşam yemeği yemek|to have dinner
partir au travail|işe gitmek|to leave for work
rentrer à la maison|eve dönmek|to go back home
faire la sieste|şekerleme yapmak|to take a nap
le matin|sabah|the morning
l'après-midi (m.)|öğleden sonra|the afternoon
le soir|akşam|the evening
d'abord|önce|first
ensuite|sonra|then|Synonyme: puis.
enfin|en sonunda|finally
Je me lève à 7 heures.|Saat 7'de kalkıyorum.|I get up at 7.
Tu te couches tard ?|Geç mi yatıyorsun?|Do you go to bed late?
On se voit ce soir ?|Bu akşam görüşelim mi?|Shall we see each other tonight?`),

    D("a1-questions", "A1", "Question words & questions", "Soru kelimeleri ve sorular", "Les mots interrogatifs et les questions", `
Avec qui ?|Kiminle?|With whom?
De quoi tu parles ?|Neden bahsediyorsun?|What are you talking about?
que ?|ne?|what?|Qu'est-ce que tu fais ?
qu'est-ce que…?|ne…?|what…?|Qu'est-ce que c'est ?
où ?|nerede? nereye?|where?|ou (no accent) = or
Tu viens d'où ?|Nerelisin?|Where are you from?|Spoken French: question word at the end.
quand ?|ne zaman?|when?
Comment on dit « kalem » en français ?|Fransızcada « kalem » nasıl denir?|How do you say « pen » in French?
pourquoi ?|neden?|why?|Answer: parce que…
combien ?|kaç? ne kadar?|how much? how many?
Combien de temps ?|Ne kadar süre?|How long?
quel ? / quelle ?|hangi?|which? what?|quel (m.), quelle (f.), quels, quelles
Tu commences à quelle heure ?|Saat kaçta başlıyorsun?|What time do you start?
est-ce que…?|…mı? (soru)|yes/no question marker|Like Turkish « mi ».
Qu'est-ce que tu prends ?|Ne alıyorsun?|What are you having?|At the café: Tu prends quoi ?
Qu'est-ce que c'est ?|Bu ne?|What is it?
Qui est-ce ?|Bu kim?|Who is it?
Comment tu t'appelles ?|Adın ne?|What's your name?
Tu es d'accord ?|Katılıyor musun?|Do you agree?
Quel âge as-tu ?|Kaç yaşındasın?|How old are you?|French uses avoir: j'ai 30 ans.
Tu habites où ?|Nerede oturuyorsun?|Where do you live?
Où est-ce que tu travailles ?|Nerede çalışıyorsun?|Where do you work?
C'est quel jour aujourd'hui ?|Bugün günlerden ne?|What day is it today?
Lequel ? / Laquelle ?|Hangisi?|Which one?|lequel (m.), laquelle (f.)
Tu fais quoi ce week-end ?|Bu hafta sonu ne yapıyorsun?|What are you doing this weekend?
Pourquoi tu apprends le français ?|Neden Fransızca öğreniyorsun?|Why are you learning French?
Tu as des frères et sœurs ?|Kardeşlerin var mı?|Do you have brothers and sisters?
Tu viens avec nous ?|Bizimle geliyor musun?|Are you coming with us?
Pour qui ?|Kimin için?|For whom?
Ça s'écrit comment ?|Nasıl yazılıyor?|How do you spell it?
Ça veut dire quoi ?|Ne demek?|What does it mean?
Qu'est-ce qui se passe ?|Ne oluyor?|What's happening?`),

    D("a1-opposites", "A1", "Opposites & adjectives", "Zıt anlamlılar ve sıfatlar", "Les contraires et les adjectifs", `
grand / petit|büyük, uzun / küçük, kısa|big, tall / small|f.: grande / petite
gros / mince|şişman / ince|fat / slim|f.: grosse / mince
long / court|uzun / kısa|long / short|f.: longue / courte
haut / bas|yüksek / alçak|high / low|f.: haute / basse
lourd / léger|ağır / hafif|heavy / light|f.: lourde / légère
chaud / froid|sıcak / soğuk|hot / cold|f.: chaude / froide
neuf / vieux|yeni / eski|new / old|f.: neuve / vieille
jeune / vieux|genç / yaşlı|young / old|vieil devant voyelle: un vieil ami
nouveau / ancien|yeni / eski, önceki|new / former|f.: nouvelle / ancienne
beau / laid|güzel / çirkin|beautiful / ugly|f.: belle / laide
bon / mauvais|iyi / kötü|good / bad|f.: bonne / mauvaise
facile / difficile|kolay / zor|easy / difficult
cher / bon marché|pahalı / ucuz|expensive / cheap|bon marché never changes.
rapide / lent|hızlı / yavaş|fast / slow|f.: rapide / lente
fort / faible|güçlü / zayıf|strong / weak|f.: forte / faible
plein / vide|dolu / boş|full / empty|f.: pleine / vide
propre / sale|temiz / kirli|clean / dirty|propre also = own: ma propre voiture
ouvert / fermé|açık / kapalı|open / closed|f.: ouverte / fermée
riche / pauvre|zengin / fakir|rich / poor
calme / bruyant|sakin / gürültülü|calm / noisy
heureux / triste|mutlu / üzgün|happy / sad|f.: heureuse / triste
fatigué / en forme|yorgun / formda, dinç|tired / fit, in good shape
gentil / méchant|nazik / kötü kalpli|kind / mean|f.: gentille / méchante
sympa / désagréable|cana yakın / hoş olmayan|nice / unpleasant|sympa = sympathique (≠ sympathetic)
content / fâché|memnun / kızgın|pleased / angry
occupé / libre|meşgul / boş, serbest|busy / free
tôt / tard|erken / geç|early / late
près / loin|yakın / uzak|near / far|près de la gare
clair / foncé|açık / koyu (renk)|light / dark (colour)|bleu clair, bleu foncé
facultatif / obligatoire|isteğe bağlı / zorunlu|optional / compulsory
mouillé / sec|ıslak / kuru|wet / dry|f.: mouillée / sèche
dur / mou|sert / yumuşak|hard / soft|f.: dure / molle`),

    D("a1-where", "A1", "Where things are", "Nesneler nerede?", "Où sont les choses ?", `
sur|üstünde|on|sur la table
sous|altında|under|sous le lit
à travers|içinden|through|à travers le parc
devant|önünde|in front of
derrière|arkasında|behind
entre|arasında|between|entre la banque et la poste
le long de|boyunca|along|le long de la rivière
en face de|karşısında|opposite
près de|yakınında|near
juste à côté|hemen yanında|right next door
au-dessus de|üstünde, yukarısında|above
au-dessous de|altında, aşağısında|below
à gauche (de)|solda, solunda|on the left (of)
à droite (de)|sağda, sağında|on the right (of)|droite ≠ tout droit (straight on)
tout droit|dümdüz|straight on
au bout de la rue|sokağın sonunda|at the end of the street
au fond (de)|en dipte, sonunda|at the back (of)
au coin de|köşesinde|at the corner of
autour de|etrafında|around
contre|-e dayalı, karşı|against
ici|burada|here
là-bas|orada|over there
en haut|yukarıda|upstairs, at the top
en bas|aşağıda|downstairs, at the bottom
à l'intérieur|içeride|inside
à l'extérieur|dışarıda|outside
au premier étage|birinci katta|on the first floor|French 1er étage = UK first floor, US second floor.
au rez-de-chaussée|zemin katta|on the ground floor
Où est mon téléphone ?|Telefonum nerede?|Where is my phone?
Il est sur la table.|Masanın üstünde.|It's on the table.
Les clés sont dans mon sac.|Anahtarlar çantamda.|The keys are in my bag.
La pharmacie est en face de la gare.|Eczane garın karşısında.|The pharmacy is opposite the station.
Le chat dort sous le lit.|Kedi yatağın altında uyuyor.|The cat is sleeping under the bed.`),

    D("a2-passe-compose", "A2", "Common passé composé forms", "Sık kullanılan geçmiş zaman (passé composé)", "Le passé composé courant", `
j'ai mangé|yedim|I ate|avoir + participe passé
j'ai bu|içtim|I drank|boire → bu
j'ai fait|yaptım|I did, I made|faire → fait
j'ai pris|aldım|I took|prendre → pris
j'ai vu|gördüm|I saw|voir → vu
j'ai eu|sahip oldum, aldım|I had|avoir → eu (pron. « ü »)
j'ai été|oldum, bulundum|I was, I have been|être → été
j'ai dormi|uyudum|I slept
j'ai travaillé|çalıştım|I worked
j'ai acheté|satın aldım|I bought
j'ai lu|okudum|I read|lire → lu
j'ai écrit|yazdım|I wrote
j'ai dit|söyledim|I said
j'ai mis|koydum, giydim|I put, I put on
j'ai compris|anladım|I understood
j'ai pu|yapabildim|I could, I was able to
j'ai dû|zorunda kaldım|I had to
j'ai voulu|istedim|I wanted
j'ai attendu|bekledim|I waited
j'ai appris|öğrendim|I learned
je suis allé(e)|gittim|I went|être + participe: add -e if feminine (Esin: je suis allée).
je suis venu(e)|geldim|I came
je suis arrivé(e)|vardım|I arrived
je suis parti(e)|ayrıldım, gittim|I left
je suis sorti(e)|dışarı çıktım|I went out
je suis rentré(e)|eve döndüm|I came back home
je suis resté(e)|kaldım|I stayed
je suis né(e)|doğdum|I was born|Je suis née à Istanbul.
je suis tombé(e)|düştüm|I fell
je me suis levé(e)|kalktım|I got up|Reflexive verbs always take être.
je me suis reposé(e)|dinlendim|I rested
nous sommes allés|gittik|we went|-s for plural: elles sont allées
je n'ai pas compris|anlamadım|I didn't understand|ne… pas around the auxiliary.
Tu as bien dormi ?|İyi uyudun mu?|Did you sleep well?
Elle est partie hier.|Dün gitti.|She left yesterday.
Qu'est-ce que tu as fait ce week-end ?|Bu hafta sonu ne yaptın?|What did you do this weekend?`),

    D("a2-physio-talk", "A2", "Simple physio-patient talk", "Basit fizyoterapist-hasta konuşması", "Parler avec un patient chez le kiné", `
Où avez-vous mal ?|Neresi ağrıyor?|Where does it hurt?
Depuis quand ?|Ne zamandan beri?|Since when?|Depuis + présent: J'ai mal depuis lundi.
Ça fait mal quand je fais ça ?|Bunu yaptığımda acıyor mu?|Does it hurt when I do this?
Sur une échelle de 0 à 10…|0'dan 10'a kadar bir ölçekte…|On a scale from 0 to 10…
C'est une douleur forte ou légère ?|Ağrı şiddetli mi hafif mi?|Is the pain strong or mild?
Qu'est-ce qui s'est passé ?|Ne oldu?|What happened?
Je suis tombé(e) pendant le match.|Maçta düştüm.|I fell during the match.
Je me suis tordu la cheville.|Bileğimi burktum.|I twisted my ankle.
J'ai mal au genou.|Dizim ağrıyor.|My knee hurts.|à + le = au: au dos, au genou
J'ai mal à l'épaule.|Omzum ağrıyor.|My shoulder hurts.
Allongez-vous sur le dos.|Sırtüstü uzanın.|Lie down on your back.
Allongez-vous sur le ventre.|Yüzüstü uzanın.|Lie down on your front.
Asseyez-vous ici.|Buraya oturun.|Sit down here.
Levez-vous doucement.|Yavaşça kalkın.|Stand up slowly.
Pliez le genou.|Dizinizi bükün.|Bend your knee.
Tendez la jambe.|Bacağınızı uzatın.|Straighten your leg.
Levez le bras.|Kolunuzu kaldırın.|Raise your arm.
Tournez la tête à droite.|Başınızı sağa çevirin.|Turn your head to the right.
Respirez profondément.|Derin nefes alın.|Breathe deeply.
Détendez-vous.|Rahatlayın.|Relax.
Poussez contre ma main.|Elime karşı itin.|Push against my hand.
Encore une fois.|Bir kez daha.|Once more.
Dix répétitions, trois séries.|On tekrar, üç set.|Ten reps, three sets.
C'est bien, continuez !|Çok iyi, devam edin!|Good, keep going!
Dites-moi si ça fait mal.|Acırsa söyleyin.|Tell me if it hurts.
le gonflement|şişlik|the swelling
la glace|buz|ice|Mettez de la glace 15 minutes.
l'ordonnance (f.)|reçete|the prescription
la séance de kiné|fizik tedavi seansı|the physio session|kiné = kinésithérapeute
les exercices à la maison (m.)|ev egzersizleri|home exercises
On se revoit jeudi.|Perşembe görüşürüz.|See you again on Thursday.
Ça va mieux qu'avant ?|Eskisinden daha iyi mi?|Is it better than before?`),

    D("a2-nutrition", "A2", "Nutrition & healthy eating", "Beslenme ve sağlıklı yemek", "La nutrition et l'alimentation saine", `
l'alimentation (f.)|beslenme|diet, food (in general)
manger équilibré|dengeli beslenmek|to eat a balanced diet
un repas équilibré|dengeli bir öğün|a balanced meal
les protéines (f.)|proteinler|proteins
les glucides (m.)|karbonhidratlar|carbohydrates
les lipides (m.)|yağlar (lipitler)|fats|Also « les matières grasses ».
les fibres (f.)|lifler|fibre
les vitamines (f.)|vitaminler|vitamins
les légumes secs (m.)|kuru baklagiller|pulses|lentilles, pois chiches, haricots
les céréales complètes (f.)|tam tahıllar|wholegrains
le pain complet|tam buğday ekmeği|wholemeal bread
les produits laitiers (m.)|süt ürünleri|dairy products
le sucre|şeker|sugar
le sel|tuz|salt
les plats préparés (m.)|hazır yemekler|ready meals
le grignotage|atıştırma|snacking|grignoter = atıştırmak
la collation|ara öğün|the snack (planned)
s'hydrater|su içmek, sıvı almak|to stay hydrated
boire de l'eau|su içmek|to drink water|Au moins 1,5 litre par jour.
les fruits de saison (m.)|mevsim meyveleri|seasonal fruit
fait maison|ev yapımı|homemade
bio|organik|organic|bio = biologique
allégé|light, az yağlı|low-fat, light
sans gluten|glutensiz|gluten-free
végétarien / végétarienne|vejetaryen|vegetarian
avoir faim|aç olmak|to be hungry|avoir, not être!
avoir soif|susamış olmak|to be thirsty
être rassasié(e)|doymuş olmak|to be full
la portion|porsiyon|the portion
cinq fruits et légumes par jour|günde beş meyve ve sebze|five fruit and vegetables a day|A famous French health slogan.
Il faut éviter les boissons sucrées.|Şekerli içeceklerden kaçınmak gerekir.|You should avoid sugary drinks.
Je mange moins de viande.|Daha az et yiyorum.|I eat less meat.
Après le sport, je prends une collation.|Spordan sonra bir ara öğün yiyorum.|After sport I have a snack.`),

    D("a2-phone-apps", "A2", "Phone, internet & apps", "Telefon, internet ve uygulamalar", "Le téléphone, Internet et les applis", `
le portable|cep telefonu|the mobile phone|Also « le smartphone ».
le chargeur|şarj aleti|the charger
la batterie|batarya, pil|the battery|Je n'ai plus de batterie.
recharger|şarj etmek|to charge
l'appli (f.)|uygulama|the app|l'application
télécharger|indirmek|to download
installer|yüklemek, kurmak|to install
mettre à jour|güncellemek|to update|la mise à jour = the update
le mot de passe|şifre|the password
l'identifiant (m.)|kullanıcı adı|the username, login
se connecter|giriş yapmak, bağlanmak|to log in, to connect
se déconnecter|çıkış yapmak|to log out
le réseau|şebeke, ağ|the network, signal|Il n'y a pas de réseau.
le wifi|wifi|wifi|Prononcer « wifi » à la française: « ui-fi ».
le forfait|hat paketi|the phone plan
les données mobiles (f.)|mobil veri|mobile data
le texto|kısa mesaj|the text message|Also « le SMS ».
envoyer un message|mesaj göndermek|to send a message
le courriel|e-posta|the email|Also « le mail », « l'e-mail ».
la pièce jointe|ek (dosya)|the attachment
le lien|bağlantı, link|the link
le site|web sitesi|the website
l'écran (m.)|ekran|the screen
la photo|fotoğraf|the photo
appeler|aramak|to call|j'appelle (double l)
rappeler|geri aramak|to call back
raccrocher|telefonu kapatmak|to hang up
le répondeur|telesekreter|the voicemail
laisser un message|mesaj bırakmak|to leave a message
Ça ne marche pas.|Çalışmıyor.|It doesn't work.
Je t'envoie le lien.|Sana linki gönderiyorum.|I'll send you the link.
Tu as le code wifi ?|Wifi şifresi sende var mı?|Do you have the wifi password?
Ça a coupé.|Hat kesildi.|We got cut off.
J'ai oublié mon mot de passe.|Şifremi unuttum.|I forgot my password.`),

    D("a2-smalltalk", "A2", "Small talk & reactions", "Sohbet ve tepkiler", "Petites conversations et réactions", `
Ah bon ?|Öyle mi?|Really?|Surprise, very common.
C'est vrai ?|Gerçekten mi?|Is that true?
Sans blague !|Şaka yapma!|No kidding!
Tant mieux !|Ne iyi!|Good! So much the better!
Tant pis.|Boş ver, olsun.|Never mind. Too bad.
Quelle chance !|Ne şans!|How lucky!
Dommage !|Ne yazık!|What a pity!
C'est génial !|Harika!|That's great!
Pas mal !|Fena değil!|Not bad!
Ça alors !|Hayret!|Well, I never!
Bravo !|Bravo!|Well done!
Félicitations !|Tebrikler!|Congratulations!
Oh là là !|Aman Allahım! Vay!|Oh dear! Wow!
Je comprends.|Anlıyorum.|I understand.
Tu as raison.|Haklısın.|You're right.|avoir raison: with avoir!
Moi aussi.|Ben de.|Me too.
Moi non plus.|Ben de. (olumsuz cümleye cevap)|Me neither.
Ça dépend.|Duruma bağlı.|It depends.
Je ne sais pas trop.|Pek bilmiyorum.|I'm not too sure.
Peut-être.|Belki.|Maybe.
Bien sûr !|Tabii ki!|Of course!
Ça marche !|Olur! Anlaştık!|OK, deal!
Quoi de neuf ?|Ne var ne yok?|What's new?
Pas grand-chose.|Pek bir şey yok.|Not much.
Il fait beau aujourd'hui, hein ?|Bugün hava güzel, değil mi?|Nice weather today, isn't it?|hein = değil mi (informal)
Tu as passé un bon week-end ?|Hafta sonun iyi geçti mi?|Did you have a good weekend?
Ça fait longtemps !|Uzun zaman oldu!|Long time no see!
Ça me fait plaisir.|Beni mutlu ediyor.|I'm happy about it, my pleasure.
Ce n'est pas grave.|Önemli değil.|It doesn't matter.
J'espère que ça va mieux.|Umarım daha iyidir.|I hope it's better.
Bonne continuation !|Kolay gelsin, devamı güzel olsun!|All the best (with what you're doing)!
À la prochaine !|Bir dahaki sefere!|See you next time!`)
  );
})();
