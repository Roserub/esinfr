/* More decks (v3): the most useful verbs, food & shopping, sports science / STAPS, everyday idioms. */
(function () {
  const D = (id, level, en, tr, fr, lines) => ({
    id, level, name: { en, tr, fr },
    cards: lines.trim().split("\n").map(l => {
      const [f, t, e, n] = l.split("|").map(s => (s || "").trim());
      return { id: id + ":" + f, fr: f, tr: t, en: e, note: n || "" };
    })
  });

  window.DECKS.push(
    D("verbs", "A1", "80 most useful verbs", "En kullanışlı 80 fiil", "Les 80 verbes les plus utiles", `
être|olmak|to be|je suis, tu es, il est…
avoir|sahip olmak|to have|j'ai, tu as, il a…
faire|yapmak|to do, to make
aller|gitmek|to go|je vais, tu vas, il va…
dire|söylemek|to say
pouvoir|-ebilmek|can, to be able to
vouloir|istemek|to want|je voudrais = I'd like (polite)
savoir|bilmek (bilgi)|to know (a fact)
voir|görmek|to see
venir|gelmek|to come
devoir|zorunda olmak, -meli|must, to have to
prendre|almak|to take
donner|vermek|to give
parler|konuşmak|to speak
trouver|bulmak|to find
mettre|koymak, giymek|to put, to put on
penser|düşünmek|to think
passer|geçmek, uğramak|to pass, to spend (time)
comprendre|anlamak|to understand
croire|inanmak, sanmak|to believe
demander|sormak, istemek|to ask
attendre|beklemek|to wait|attendre ≠ to attend
connaître|tanımak|to know (a person, a place)
aimer|sevmek|to like, to love
rester|kalmak|to stay|rester ≠ to rest
tenir|tutmak|to hold
partir|ayrılmak, gitmek|to leave
arriver|varmak, olmak|to arrive, to happen
entendre|duymak|to hear
écouter|dinlemek|to listen
regarder|bakmak, izlemek|to look at, to watch
chercher|aramak|to look for
sortir|çıkmak|to go out
entrer|girmek|to enter
rentrer|eve dönmek|to go home
commencer|başlamak|to begin
finir|bitirmek|to finish
appeler|aramak, çağırmak|to call|s'appeler = to be called
répondre|cevap vermek|to answer
écrire|yazmak|to write
lire|okumak|to read
apprendre|öğrenmek|to learn
travailler|çalışmak|to work
habiter|oturmak (bir yerde)|to live (somewhere)
manger|yemek|to eat
boire|içmek|to drink
dormir|uyumak|to sleep
acheter|satın almak|to buy
payer|ödemek|to pay
vendre|satmak|to sell
ouvrir|açmak|to open
fermer|kapatmak|to close
porter|taşımak, giymek|to carry, to wear
montrer|göstermek|to show
expliquer|açıklamak|to explain
essayer|denemek|to try
aider|yardım etmek|to help
utiliser|kullanmak|to use
oublier|unutmak|to forget
se souvenir de|hatırlamak|to remember
changer|değiştirmek|to change
choisir|seçmek|to choose
perdre|kaybetmek|to lose
gagner|kazanmak|to win, to earn
jouer|oynamak|to play
courir|koşmak|to run
marcher|yürümek|to walk
tomber|düşmek|to fall
se lever|kalkmak|to get up
se coucher|yatmak|to go to bed
se sentir|hissetmek|to feel|Je me sens bien.
avoir besoin de|ihtiyacı olmak|to need
avoir envie de|canı istemek|to feel like
falloir (il faut)|gerekmek|to be necessary|Il faut partir = Gitmek lazım.
réussir|başarmak|to succeed
préparer|hazırlamak|to prepare
envoyer|göndermek|to send
recevoir|almak (gelen)|to receive
vivre|yaşamak|to live
mourir|ölmek|to die`),

    D("food", "A1", "Food & shopping", "Yemek ve alışveriş", "La nourriture et les courses", `
le pain|ekmek|bread
la baguette|baget|baguette
le fromage|peynir|cheese
le beurre|tereyağı|butter
le lait|süt|milk
les œufs|yumurtalar|eggs
la viande|et|meat
le poulet|tavuk|chicken
le bœuf|sığır eti|beef
l'agneau (m.)|kuzu eti|lamb
le porc|domuz eti|pork|Check labels: « porc », « lardons », « gélatine de porc ».
le poisson|balık|fish
le riz|pirinç|rice
les pâtes|makarna|pasta
les lentilles|mercimek|lentils
les pois chiches|nohut|chickpeas
la pomme de terre|patates|potato
la tomate|domates|tomato
l'oignon (m.)|soğan|onion
l'ail (m.)|sarımsak|garlic
le poivron|biber|pepper (vegetable)
la courgette|kabak|courgette
l'aubergine (f.)|patlıcan|aubergine
la pomme|elma|apple
la poire|armut|pear
l'orange (f.)|portakal|orange
la fraise|çilek|strawberry
le citron|limon|lemon
l'huile d'olive (f.)|zeytinyağı|olive oil
le sel / le poivre|tuz / karabiber|salt / pepper
le sucre|şeker|sugar
la farine|un|flour
le yaourt|yoğurt|yoghurt
l'eau gazeuse / plate|maden suyu / sade su|sparkling / still water
le thé|çay|tea
un kilo de…|bir kilo …|a kilo of…
une bouteille de…|bir şişe …|a bottle of…
un paquet de…|bir paket …|a packet of…
une tranche de…|bir dilim …|a slice of…
le rayon|reyon|aisle, department
la caisse|kasa|checkout
le panier / le chariot|sepet / alışveriş arabası|basket / trolley
les soldes|indirim dönemi|sales
en promotion|indirimde|on special offer
bio|organik|organic
le prix au kilo|kilo fiyatı|price per kilo
Je voudrais une tranche de plus.|Bir dilim daha istiyorum.|I'd like one more slice.
Vous avez un sac ?|Poşetiniz var mı?|Do you have a bag?
C'est en promotion ?|İndirimde mi?|Is it on offer?
Ça fait combien ?|Hepsi ne kadar?|How much is that altogether?`),

    D("sportsci", "B1", "Sports science & STAPS", "Spor bilimleri ve STAPS", "Sciences du sport et STAPS", `
l'échauffement (m.)|ısınma|warm-up
la récupération|toparlanma|recovery
la fréquence cardiaque|kalp atım hızı|heart rate
la VO2max|VO2max (maksimal oksijen tüketimi)|VO2 max
le seuil anaérobie|anaerobik eşik|anaerobic threshold
l'endurance (f.)|dayanıklılık|endurance
la vitesse|hız|speed
la force maximale|maksimal kuvvet|maximal strength
la puissance|güç|power
la souplesse|esneklik|flexibility
la coordination|koordinasyon|coordination
la périodisation|periyotlama|periodisation
la charge d'entraînement|antrenman yükü|training load
la surcharge progressive|kademeli aşırı yükleme|progressive overload
le surentraînement|aşırı antrenman|overtraining
la séance|antrenman seansı|session
la série / la répétition|set / tekrar|set / rep
le temps de repos|dinlenme süresi|rest time
le fractionné|interval antrenmanı|interval training
le gainage|core çalışması|core training
la pliométrie|pliometri|plyometrics
la préparation physique|kondisyon hazırlığı|strength & conditioning
le préparateur physique|kondisyoner|S&C coach
la physiologie de l'effort|egzersiz fizyolojisi|exercise physiology
la biomécanique|biyomekanik|biomechanics
l'acide lactique|laktik asit|lactic acid
la contraction excentrique|eksantrik kasılma|eccentric contraction
la contraction concentrique|konsantrik kasılma|concentric contraction
la prévention des blessures|sakatlık önleme|injury prevention
le retour au jeu|oyuna dönüş|return to play
la motricité|motor beceri|motor skills
l'activité physique adaptée (APA)|uyarlanmış fiziksel aktivite|adapted physical activity
l'éducation physique et sportive (EPS)|beden eğitimi|physical education (school)
l'entraîneur / l'entraîneuse|antrenör|coach
le staff médical|sağlık ekibi|medical staff
la compétition|müsabaka|competition
le championnat|şampiyona, lig|league, championship
le dopage|doping|doping
la nutrition sportive|sporcu beslenmesi|sports nutrition
l'hydratation (f.)|sıvı alımı|hydration`),

    D("idioms", "B2", "Everyday idioms", "Günlük deyimler", "Les expressions de tous les jours", `
avoir le cafard|morali bozuk olmak|to feel down
poser un lapin à quelqu'un|birini ekmek|to stand someone up
coûter les yeux de la tête|çok pahalı olmak|to cost an arm and a leg
avoir la flemme|üşenmek|to not be bothered
c'est la fin des haricots|her şey bitti|it's the end of the world
il pleut des cordes|bardaktan boşanırcasına yağıyor|it's pouring
avoir un coup de foudre|ilk görüşte âşık olmak|love at first sight
casser les pieds à quelqu'un|birinin başının etini yemek|to annoy someone
tomber dans les pommes|bayılmak|to faint
avoir la pêche|enerjik olmak|to be full of beans
ce n'est pas ma tasse de thé|bana göre değil|not my cup of tea
mettre son grain de sel|lafa karışmak|to put in one's two cents
avoir un poil dans la main|çok tembel olmak|to be very lazy
se creuser la tête|kafa yormak|to rack one's brains
prendre son pied|çok keyif almak|to have a great time
ça me dit quelque chose|bir yerden tanıdık geliyor|it rings a bell
en avoir marre|bıkmak|to be fed up
avoir du pain sur la planche|yapacak çok işi olmak|to have a lot on one's plate
appeler un chat un chat|lafı dolandırmadan söylemek|to call a spade a spade
mettre les pieds dans le plat|pot kırmak|to put one's foot in it
avoir le moral dans les chaussettes|morali yerlerde olmak|to feel really low
faire la grasse matinée|geç saate kadar uyumak|to sleep in
être dans la lune|dalgın olmak|to have one's head in the clouds
donner sa langue au chat|pes etmek (tahminde)|to give up guessing
les doigts dans le nez|çok kolay|easily, hands down
raconter des salades|palavra atmak|to tell tall stories
avoir la tête dans le guidon|işe gömülmek|to be snowed under
faire d'une pierre deux coups|bir taşla iki kuş vurmak|to kill two birds with one stone|Same image as in Turkish!
quand les poules auront des dents|balık kavağa çıkınca|when pigs fly
il ne faut pas vendre la peau de l'ours avant de l'avoir tué|dereyi görmeden paçaları sıvama|don't count your chickens|
petit à petit, l'oiseau fait son nid|damlaya damlaya göl olur|little by little the bird builds its nest
mieux vaut tard que jamais|geç olsun güç olmasın|better late than never
qui ne tente rien n'a rien|denemeyen kazanamaz|nothing ventured, nothing gained
l'habit ne fait pas le moine|görünüşe aldanma|don't judge a book by its cover
chacun son goût|zevkler ve renkler tartışılmaz|each to their own
ça roule !|tamamdır!|all good!
ça vaut le coup|değer|it's worth it
j'ai hâte !|sabırsızlanıyorum!|I can't wait!
bon courage !|kolay gelsin!|good luck, hang in there!
on verra bien|bakarız, göreceğiz|we'll see`)
  );
})();
