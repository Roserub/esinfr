/* Data for the Practice tab: verbs (conjugation), nouns (gender), minimal pairs (sounds). */
(function () {
  /* V(infinitive, tr, en, "present je…ils", future stem, past participle, aux, level)
     Imparfait = nous-stem of the present (except être). Futur = stem + ai/as/a/ons/ez/ont. */
  const V = (inf, tr, en, pres, fut, pp, aux, level) => ({ inf, tr, en, pres: pres.split(" "), fut, pp, aux: aux || "avoir", level: level || "A1" });
  const er = (inf, tr, en, aux, level) => {
    const st = inf.slice(0, -2);
    return V(inf, tr, en, [st + "e", st + "es", st + "e", st + "ons", st + "ez", st + "ent"].join(" "), inf, st + "é", aux, level);
  };
  window.VERBS = [
    V("être", "olmak", "to be", "suis es est sommes êtes sont", "ser", "été", "avoir", "A0"),
    V("avoir", "sahip olmak", "to have", "ai as a avons avez ont", "aur", "eu", "avoir", "A0"),
    V("aller", "gitmek", "to go", "vais vas va allons allez vont", "ir", "allé", "être", "A1"),
    V("faire", "yapmak", "to do, to make", "fais fais fait faisons faites font", "fer", "fait", "avoir", "A1"),
    er("parler", "konuşmak", "to speak"),
    er("habiter", "oturmak, yaşamak", "to live (somewhere)"),
    er("aimer", "sevmek", "to like, to love"),
    er("travailler", "çalışmak", "to work"),
    er("regarder", "bakmak, izlemek", "to watch"),
    er("écouter", "dinlemek", "to listen"),
    er("étudier", "okumak, ders çalışmak", "to study"),
    er("arriver", "varmak", "to arrive", "être"),
    er("rester", "kalmak", "to stay", "être"),
    er("entrer", "girmek", "to enter", "être", "A2"),
    er("tomber", "düşmek", "to fall", "être", "A2"),
    V("manger", "yemek", "to eat", "mange manges mange mangeons mangez mangent", "manger", "mangé", "avoir", "A1"),
    V("commencer", "başlamak", "to start", "commence commences commence commençons commencez commencent", "commencer", "commencé", "avoir", "A2"),
    V("acheter", "satın almak", "to buy", "achète achètes achète achetons achetez achètent", "achèter", "acheté", "avoir", "A1"),
    V("appeler", "aramak, çağırmak", "to call", "appelle appelles appelle appelons appelez appellent", "appeller", "appelé", "avoir", "A2"),
    V("venir", "gelmek", "to come", "viens viens vient venons venez viennent", "viendr", "venu", "être", "A1"),
    V("pouvoir", "-ebilmek", "can, to be able to", "peux peux peut pouvons pouvez peuvent", "pourr", "pu", "avoir", "A1"),
    V("vouloir", "istemek", "to want", "veux veux veut voulons voulez veulent", "voudr", "voulu", "avoir", "A1"),
    V("devoir", "-meli, zorunda olmak", "must, to have to", "dois dois doit devons devez doivent", "devr", "dû", "avoir", "A2"),
    V("savoir", "bilmek", "to know (a fact)", "sais sais sait savons savez savent", "saur", "su", "avoir", "A2"),
    V("prendre", "almak", "to take", "prends prends prend prenons prenez prennent", "prendr", "pris", "avoir", "A1"),
    V("comprendre", "anlamak", "to understand", "comprends comprends comprend comprenons comprenez comprennent", "comprendr", "compris", "avoir", "A1"),
    V("mettre", "koymak, giymek", "to put, to put on", "mets mets met mettons mettez mettent", "mettr", "mis", "avoir", "A2"),
    V("voir", "görmek", "to see", "vois vois voit voyons voyez voient", "verr", "vu", "avoir", "A1"),
    V("dire", "söylemek", "to say", "dis dis dit disons dites disent", "dir", "dit", "avoir", "A2"),
    V("partir", "ayrılmak, gitmek", "to leave", "pars pars part partons partez partent", "partir", "parti", "être", "A1"),
    V("sortir", "çıkmak", "to go out", "sors sors sort sortons sortez sortent", "sortir", "sorti", "être", "A2"),
    V("dormir", "uyumak", "to sleep", "dors dors dort dormons dormez dorment", "dormir", "dormi", "avoir", "A2"),
    V("finir", "bitirmek", "to finish", "finis finis finit finissons finissez finissent", "finir", "fini", "avoir", "A1"),
    V("choisir", "seçmek", "to choose", "choisis choisis choisit choisissons choisissez choisissent", "choisir", "choisi", "avoir", "A2"),
    V("attendre", "beklemek", "to wait", "attends attends attend attendons attendez attendent", "attendr", "attendu", "avoir", "A2"),
    V("répondre", "cevap vermek", "to answer", "réponds réponds répond répondons répondez répondent", "répondr", "répondu", "avoir", "A2"),
    V("lire", "okumak", "to read", "lis lis lit lisons lisez lisent", "lir", "lu", "avoir", "A2"),
    V("écrire", "yazmak", "to write", "écris écris écrit écrivons écrivez écrivent", "écrir", "écrit", "avoir", "A2"),
    V("boire", "içmek", "to drink", "bois bois boit buvons buvez boivent", "boir", "bu", "avoir", "A2"),
    V("connaître", "tanımak, bilmek", "to know (a person, a place)", "connais connais connaît connaissons connaissez connaissent", "connaîtr", "connu", "avoir", "B1"),
    V("recevoir", "almak (bir şey gelince)", "to receive", "reçois reçois reçoit recevons recevez reçoivent", "recevr", "reçu", "avoir", "B1")
  ];

  /* Nouns for the le/la game: "word|m or f|tr|en" */
  window.NOUNS = `
maison|f|ev|house
voiture|f|araba|car
table|f|masa|table
chaise|f|sandalye|chair
porte|f|kapı|door
fenêtre|f|pencere|window
nation|f|ulus|nation
télévision|f|televizyon|television
santé|f|sağlık|health
université|f|üniversite|university
liberté|f|özgürlük|freedom
cuisine|f|mutfak|kitchen
chance|f|şans|luck
différence|f|fark|difference
culture|f|kültür|culture
nature|f|doğa|nature
habitude|f|alışkanlık|habit
journée|f|gün|day
idée|f|fikir|idea
pharmacie|f|eczane|pharmacy
boulangerie|f|fırın|bakery
serviette|f|havlu, peçete|towel, napkin
douleur|f|ağrı|pain
épaule|f|omuz|shoulder
jambe|f|bacak|leg
main|f|el|hand
tête|f|baş|head
eau|f|su|water
page|f|sayfa|page
plage|f|plaj|beach
image|f|resim|image
peau|f|cilt|skin
gare|f|tren garı|station
semaine|f|hafta|week
ville|f|şehir|town, city
mer|f|deniz|sea
fin|f|son|end
fois|f|kez|time (once, twice)
clé|f|anahtar|key
séance|f|seans|session
blessure|f|sakatlık|injury
famille|f|aile|family
équipe|f|takım|team
moment|m|an|moment
gouvernement|m|hükümet|government
appartement|m|daire|flat
médicament|m|ilaç|medicine
garage|m|garaj|garage
voyage|m|yolculuk|trip
fromage|m|peynir|cheese
bateau|m|gemi|boat
bureau|m|büro, masa|office, desk
gâteau|m|pasta|cake
tourisme|m|turizm|tourism
miroir|m|ayna|mirror
couloir|m|koridor|corridor
journal|m|gazete|newspaper
hôpital|m|hastane|hospital
genou|m|diz|knee
dos|m|sırt|back
bras|m|kol|arm
pied|m|ayak|foot
cœur|m|kalp|heart
pain|m|ekmek|bread
livre|m|kitap|book
train|m|tren|train
jour|m|gün|day
matin|m|sabah|morning
soir|m|akşam|evening
pays|m|ülke|country
travail|m|iş|work
problème|m|sorun|problem
système|m|sistem|system
musée|m|müze|museum
lycée|m|lise|high school
téléphone|m|telefon|phone
café|m|kahve, kafe|coffee, café
match|m|maç|match
sport|m|spor|sport
muscle|m|kas|muscle
rendez-vous|m|randevu|appointment
dossier|m|dosya|file
loyer|m|kira|rent
`.trim().split("\n").map(l => { const [w, g, tr, en] = l.split("|"); return { w, g, tr, en }; });

  /* Gender hints by ending (checked in order; first match wins). */
  window.GENDER_RULES = [
    { end: ["tion", "sion"], g: "f", en: "-tion / -sion → feminine", tr: "-tion / -sion → dişil" },
    { end: ["té"], g: "f", en: "-té → feminine", tr: "-té → dişil" },
    { end: ["ette"], g: "f", en: "-ette → feminine", tr: "-ette → dişil" },
    { end: ["ance", "ence"], g: "f", en: "-ance / -ence → feminine", tr: "-ance / -ence → dişil" },
    { end: ["ure", "ude"], g: "f", en: "-ure / -ude → feminine", tr: "-ure / -ude → dişil" },
    { end: ["ée"], g: "f", en: "-ée → feminine (but le lycée, le musée)", tr: "-ée → dişil (ama le lycée, le musée)" },
    { end: ["ie"], g: "f", en: "-ie → feminine", tr: "-ie → dişil" },
    { end: ["ment"], g: "m", en: "-ment → masculine", tr: "-ment → eril" },
    { end: ["age"], g: "m", en: "-age → masculine (but la page, la plage, l'image)", tr: "-age → eril (ama la page, la plage, l'image)" },
    { end: ["eau"], g: "m", en: "-eau → masculine (but l'eau, la peau)", tr: "-eau → eril (ama l'eau, la peau)" },
    { end: ["isme"], g: "m", en: "-isme → masculine", tr: "-isme → eril" },
    { end: ["oir"], g: "m", en: "-oir → masculine", tr: "-oir → eril" },
    { end: ["al"], g: "m", en: "-al → masculine", tr: "-al → eril" },
    { end: ["e"], g: "f", en: "Ending in -e: often feminine, but many exceptions (le problème, le musée…)", tr: "-e ile biten: çoğu dişil, ama çok istisna var (le problème, le musée…)" },
    { end: [""], g: "m", en: "Ending in a consonant or another vowel: often masculine", tr: "Ünsüz veya başka ünlüyle biten: çoğu eril" }
  ];

  /* Minimal pairs: sounds that are new or tricky for a Turkish speaker. */
  window.PAIRS = [
    { w: ["vin", "vent", "vont"], en: "the 3 nasal vowels", tr: "3 genizden ünlü" },
    { w: ["blanc", "blond"], en: "an / on", tr: "an / on" },
    { w: ["lent", "long"], en: "an / on", tr: "an / on" },
    { w: ["pain", "pont"], en: "in / on", tr: "in / on" },
    { w: ["tu", "tout"], en: "u (ü) / ou (u)", tr: "u (ü) / ou (u)" },
    { w: ["rue", "roue"], en: "u (ü) / ou (u)", tr: "u (ü) / ou (u)" },
    { w: ["vu", "vous"], en: "u (ü) / ou (u)", tr: "u (ü) / ou (u)" },
    { w: ["dessus", "dessous"], en: "u (ü) / ou (u)", tr: "u (ü) / ou (u)" },
    { w: ["bu", "bout"], en: "u (ü) / ou (u)", tr: "u (ü) / ou (u)" },
    { w: ["deux", "des"], en: "eu (ö) / é (e)", tr: "eu (ö) / é (e)" },
    { w: ["le", "les"], en: "e (ö) / es (e) — singular or plural?", tr: "e (ö) / es (e) — tekil mi çoğul mu?" },
    { w: ["je", "j'ai"], en: "e (ö) / ai (e)", tr: "e (ö) / ai (e)" },
    { w: ["jeune", "jaune"], en: "eu (ö) / au (o)", tr: "eu (ö) / au (o)" },
    { w: ["peur", "père"], en: "eu (ö) / è (e)", tr: "eu (ö) / è (e)" },
    { w: ["cheveux", "chevaux"], en: "eu (ö) / au (o)", tr: "eu (ö) / au (o)" },
    { w: ["poisson", "poison"], en: "ss (s) / s (z)", tr: "ss (s) / s (z)" },
    { w: ["ils sont", "ils ont"], en: "s / liaison z — are or have?", tr: "s / bağlama z — olmak mı sahip olmak mı?" },
    { w: ["bon", "bonne"], en: "nasal or not", tr: "genizden mi değil mi" },
    { w: ["un", "une"], en: "nasal or not", tr: "genizden mi değil mi" },
    { w: ["fin", "fine"], en: "nasal or not", tr: "genizden mi değil mi" },
    { w: ["chou", "joue"], en: "ch (ş) / j", tr: "ch (ş) / j" },
    { w: ["roue", "loup"], en: "French r / l", tr: "Fransız r'si / l" }
  ];
})();
