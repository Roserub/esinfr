/* DELF A1/A2 thematic vocabulary ("Annexe A — lexique thématique"), as flashcard decks.
   Same line format as decks.js: "français|Türkçe|English|optional note". Card id = deckId + ":" + French text.
   Words already present in decks.js, decks-master.js or decks-more.js are left out. */
(function () {
  const D = (id, level, en, tr, fr, lines) => ({
    id, level, name: { en, tr, fr },
    cards: lines.trim().split("\n").map(l => {
      const [f, t, e, n] = l.split("|").map(s => (s || "").trim());
      return { id: id + ":" + f, fr: f, tr: t, en: e, note: n || "" };
    })
  });

  window.DECKS.push(
    D("delf-numbers", "A1", "DELF words: numbers", "DELF kelimeleri: sayılar", "Mots du DELF : les nombres", `
zéro|sıfır|zero (0)
dix-sept|on yedi|seventeen (17)
dix-huit|on sekiz|eighteen (18)
dix-neuf|on dokuz|nineteen (19)
vingt et un|yirmi bir|twenty-one (21)|« et » only in 21, 31, 41, 51, 61 and 71 — never in 81 or 91.
vingt-deux|yirmi iki|twenty-two (22)
trente et un|otuz bir|thirty-one (31)
soixante et onze|yetmiş bir|seventy-one (71)|60 + 11, with « et ».
soixante-douze|yetmiş iki|seventy-two (72)|60 + 12. When you hear « soixante… », wait for the end: it may be 60–79.
soixante-dix-sept|yetmiş yedi|seventy-seven (77)|60 + 17
soixante-dix-huit|yetmiş sekiz|seventy-eight (78)|60 + 18
quatre-vingt-un|seksen bir|eighty-one (81)|4 × 20 + 1: no « et », no -s.
quatre-vingt-trois|seksen üç|eighty-three (83)|quatre-vingts takes -s only when nothing follows.
quatre-vingt-six|seksen altı|eighty-six (86)
quatre-vingt-onze|doksan bir|ninety-one (91)|4 × 20 + 11
quatre-vingt-quinze|doksan beş|ninety-five (95)|4 × 20 + 15
quatre-vingt-dix-neuf|doksan dokuz|ninety-nine (99)|4 × 20 + 19
cent un|yüz bir|a hundred and one (101)
cent vingt|yüz yirmi|a hundred and twenty (120)
deux cents|iki yüz|two hundred (200)|cent takes -s only when nothing follows: deux cents, but deux cent dix.
deux cent cinquante|iki yüz elli|two hundred and fifty (250)
trois cents|üç yüz|three hundred (300)
neuf cent quatre-vingt-dix-neuf|dokuz yüz doksan dokuz|nine hundred and ninety-nine (999)
trois mille|üç bin|three thousand (3,000)|mille never takes -s.
mille cinq cents|bin beş yüz|one thousand five hundred (1,500)|Thousands are separated by a space: 1 500 €.
deux mille vingt-six|iki bin yirmi altı|two thousand and twenty-six (2026)
mille neuf cent quatre-vingt-quinze|bin dokuz yüz doksan beş|nineteen ninety-five (1995)
premier / première (1er / 1re)|birinci|first|Only the 1st of the month uses it: le 1er mai, but le 2 mai.
deuxième (2e)|ikinci|second
troisième (3e)|üçüncü|third|au 3e étage = on the 3rd floor
quatrième|dördüncü|fourth
cinquième|beşinci|fifth|Note the u: cinq → cinquième.
neuvième|dokuzuncu|ninth|f → v: neuf → neuvième.
dixième|onuncu|tenth
vingtième|yirminci|twentieth
centième|yüzüncü|hundredth
septante / nonante|yetmiş / doksan (Belçika, İsviçre)|seventy / ninety (Belgium, Switzerland)|You may hear them near Lille; in France and in the exam: soixante-dix, quatre-vingt-dix.
deux euros cinquante|iki avro elli sent (2,50 €)|two euros fifty (€2.50)|Decimals are written with a comma: 2,50 €.
zéro six, douze, trente-quatre…|06 12 34… (telefon numarası ikişer ikişer okunur)|06 12 34… (phone numbers are read in pairs)
six ans / dix ans|altı yaş / on yaş|six years / ten years|Before a vowel: « siz », « diz »; before a consonant: « si livres ».
neuf heures|saat dokuz|nine o'clock|neuf ans, neuf heures: the f sounds like v.
`),
    D("delf-calendar", "A1", "DELF words: calendar & clock", "DELF kelimeleri: takvim ve saat", "Mots du DELF : la date et l'heure", `
le printemps — au printemps|ilkbahar — ilkbaharda|spring — in spring|au printemps, but en été, en automne, en hiver.
l'été (m.) — en été|yaz — yazın|summer — in summer
l'automne (m.) — en automne|sonbahar — sonbaharda|autumn — in autumn
l'hiver (m.) — en hiver|kış — kışın|winter — in winter
le jour|gün|day
la semaine|hafta|week
le week-end|hafta sonu|weekend
le mois|ay|month
l'an (m.)|yıl (sayıyla)|year (with a number)|trois ans, j'ai trente ans
l'année (f.)|yıl (süre)|year (as a period)|toute l'année, bonne année !
la date|tarih|date
le jour férié|resmî tatil günü|public holiday
le lundi|pazartesileri|on Mondays (every Monday)|lundi = this Monday (once); le lundi = every Monday. Je travaille le lundi.
en janvier / au mois de janvier|ocakta|in January|Never « à janvier ». Days and months take no capital letter.
On est le combien aujourd'hui ?|Bugün ayın kaçı?|What's the date today?
Quelle est la date aujourd'hui ?|Bugünün tarihi ne?|What is today's date?
Nous sommes le jeudi 12 mars.|Bugün 12 Mart Perşembe.|It's Thursday 12 March.|le + day + month (+ year): the « le » is required.
le 1er (premier) mai|1 Mayıs|the first of May|Only the 1st takes an ordinal: le 2 mai, le 21 juin.
Je suis né / née le 4 juin 1995.|4 Haziran 1995'te doğdum.|I was born on 4 June 1995.|née if you are a woman, né if you are a man.
Il est huit heures.|Saat sekiz.|It's eight o'clock.
Il est une heure.|Saat bir.|It's one o'clock.|une heure (singular); deux heures (plural, with -s).
À quelle heure… ?|Saat kaçta…?|At what time…?
à 9 h|saat 9'da|at 9 o'clock|Written 9 h, 9h or 9:00.
vers 9 h|saat 9 sularında|around 9 o'clock
de 9 h à 17 h|9'dan 17'ye kadar|from 9 am to 5 pm
à partir de 9 h|saat 9'dan itibaren|from 9 o'clock on
jusqu'à 17 h|saat 17'ye kadar|until 5 pm
huit heures et quart|sekizi çeyrek geçiyor|quarter past eight|Everyday clock. Official time: huit heures quinze.
huit heures et demie|sekiz buçuk|half past eight|Official time: huit heures trente.
neuf heures moins le quart|dokuza çeyrek var|quarter to nine|Official time: huit heures quarante-cinq.
neuf heures moins dix|dokuza on var|ten to nine|Official time: huit heures cinquante.
midi|öğlen saat 12|noon, midday
midi et demi|öğlen on iki buçuk|half past twelve (12.30 pm)|midi and minuit are masculine → demi; heure is feminine → et demie.
minuit|gece yarısı|midnight
quatorze heures trente|on dört otuz|fourteen thirty (2.30 pm)|Official 24-hour time: stations, airports, shops, appointments, the exam.
dix-sept heures quarante-cinq|on yedi kırk beş|seventeen forty-five (5.45 pm)|Never « et quart / et demie » with the 24-hour clock.
vingt heures dix|yirmi on|twenty ten (8.10 pm)
du matin / de l'après-midi / du soir|sabah / öğleden sonra / akşam|in the morning / in the afternoon / in the evening|Added to the 12-hour clock: huit heures du soir.
`),
    D("delf-identity", "A1", "DELF words: identity & forms", "DELF kelimeleri: kimlik ve formlar", "Mots du DELF : l'identité et les formulaires", `
le nom (de famille)|soyadı|surname, family name|On a form, « Nom » = surname, not first name.
le prénom|ad|first name
le nom de naissance|doğumdaki soyadı (kızlık soyadı)|birth name, maiden name
la date de naissance|doğum tarihi|date of birth
le lieu de naissance|doğum yeri|place of birth
né / née le … à …|… tarihinde …'de doğmuş|born on … in …
l'âge (m.)|yaş|age
la nationalité|uyruk, vatandaşlık|nationality
turc / turque|Türk|Turkish|un ami turc, une amie turque. No capital letter for the adjective.
l'adresse (f.)|adres|address|Only one d in French.
le numéro (de la rue)|kapı numarası|house number|25, rue des Lilas: the number comes BEFORE the street.
le code postal|posta kodu|postcode|59100 Roubaix: the postcode comes BEFORE the town.
la ville|şehir|town, city
le pays|ülke|country
le numéro de téléphone|telefon numarası|phone number
l'adresse e-mail (f.)|e-posta adresi|email address
le courriel / le mail|e-posta|email
la situation de famille|medeni durum|marital status
célibataire|bekâr|single
marié / mariée|evli|married
pacsé / pacsée|PACS yapmış (resmî birliktelik)|in a civil partnership (PACS)
divorcé / divorcée|boşanmış|divorced
veuf / veuve|dul (erkek / kadın)|widower / widow
en couple|bir ilişkisi var, birlikte yaşıyor|in a relationship
le sexe : masculin / féminin|cinsiyet: erkek / kadın|sex: male / female
Madame (Mme) / Monsieur (M.)|Hanımefendi / Beyefendi (hitap)|Mrs / Mr
la profession|meslek|occupation
la langue maternelle|ana dil|mother tongue
cocher une case|bir kutucuğu işaretlemek|to tick a box
en majuscules|büyük harflerle|in capital letters|On forms the surname is usually in capitals: DEMIR.
épeler|harf harf söylemek|to spell
s'appeler|adı … olmak|to be called|Je m'appelle Elif. Passé composé with être: je me suis appelé(e).
Fait à Lille, le 3 mars 2026|3 Mart 2026, Lille (imzadan önce)|Done in Lille on 3 March 2026|Written just before the signature.
`),
    D("delf-family", "A1", "DELF words: family", "DELF kelimeleri: aile", "Mots du DELF : la famille", `
la famille|aile|family
les parents (m.)|anne-baba; akrabalar|parents; relatives
le père / la mère|baba / anne|father / mother
le mari / la femme|koca / karı (eş)|husband / wife|ma femme = my wife; une femme = a woman.
l'époux (m.) / l'épouse (f.)|eş (resmî dil)|spouse (formal)
le compagnon / la compagne|hayat arkadaşı (evli olmayan eş)|partner (not married)
le fils|oğul|son|Pronounced « fis ».
la fille|kız; kız evlat|daughter; girl
l'enfant (m./f.)|çocuk|child
le frère / la sœur|erkek kardeş / kız kardeş|brother / sister
le grand frère / la grande sœur|ağabey / abla|older brother / older sister|No separate word for ağabey / abla: mon grand frère = ağabeyim.
le petit frère / la petite sœur|küçük erkek / kız kardeş|younger brother / younger sister
le grand-père / la grand-mère|dede / anneanne, babaanne|grandfather / grandmother|ma grand-mère paternelle = babaannem
les grands-parents (m.)|büyükanne ve büyükbaba|grandparents
le petit-fils / la petite-fille|erkek torun / kız torun|grandson / granddaughter
les petits-enfants (m.)|torunlar|grandchildren
l'oncle (m.)|amca, dayı; enişte|uncle|mon oncle maternel = dayım
la tante|hala, teyze; yenge|aunt
le neveu / la nièce|erkek yeğen / kız yeğen|nephew / niece
le beau-père|kayınpeder; üvey baba|father-in-law; stepfather
la belle-mère|kayınvalide; üvey anne|mother-in-law; stepmother
le beau-frère|kayınbirader, enişte, bacanak|brother-in-law
la belle-sœur|görümce, baldız, yenge, elti|sister-in-law
le bébé|bebek|baby
les jumeaux / les jumelles|ikizler (erkek / kız)|twins (boys / girls)
fils unique / fille unique|tek çocuk (erkek / kız)|only child (son / daughter)
aîné / aînée|en büyük (kardeş)|eldest
le petit ami / la petite amie|erkek arkadaş / kız arkadaş (sevgili)|boyfriend / girlfriend
l'ami (m.) / l'amie (f.)|arkadaş, dost|friend
`),
    D("delf-health", "A1", "DELF words: body & health", "DELF kelimeleri: vücut ve sağlık", "Mots du DELF : le corps et la santé", `
les cheveux (m.)|saç|hair|Always plural in French: mes cheveux sont longs.
le visage|yüz|face
l'œil (m.) / les yeux|göz / gözler|eye / eyes
l'oreille (f.)|kulak|ear
le nez|burun|nose
la bouche|ağız|mouth
la dent|diş|tooth
la gorge|boğaz|throat
avoir mal à la tête|başı ağrımak|to have a headache|à + le = au, à + les = aux: mal au dos, mal aux pieds, but mal à la tête, mal à l'oreille.
avoir mal au ventre / au dos|karnı / sırtı ağrımak|to have a stomach ache / backache
avoir mal aux dents (f.)|dişleri ağrımak|to have toothache
avoir de la fièvre|ateşi olmak|to have a temperature
être malade|hasta olmak|to be ill
le rhume|soğuk algınlığı, nezle|cold
tousser / la toux|öksürmek / öksürük|to cough / a cough
se sentir bien / mal|kendini iyi / kötü hissetmek|to feel well / unwell
fatigué / fatiguée|yorgun|tired
se casser la jambe|bacağını kırmak|to break one's leg|French says « la jambe », not « sa jambe »: je me suis cassé la jambe.
être enceinte|hamile olmak|to be pregnant
guérir|iyileşmek|to get better, to heal
Bon rétablissement !|Geçmiş olsun! (Acil şifalar!)|Get well soon!
le médecin (généraliste)|doktor (pratisyen hekim)|doctor (GP)
le cabinet médical|muayenehane|doctor's surgery
la consultation|muayene|consultation, appointment with a doctor
la pharmacie de garde|nöbetçi eczane|duty pharmacy (open at night, on Sundays)
l'hôpital (m.)|hastane|hospital
le SAMU (le 15)|acil sağlık yardımı: 15|emergency medical service (dial 15)
les pompiers (le 18)|itfaiye: 18|fire brigade (dial 18)
la Sécurité sociale (la Sécu)|genel sağlık sigortası, sosyal güvenlik|French social security
`),
    D("delf-housing", "A1", "DELF words: housing", "DELF kelimeleri: konut", "Mots du DELF : le logement", `
le logement|konut, ev|housing, accommodation
l'immeuble (m.)|apartman, bina|block of flats, building
le studio|stüdyo daire (tek odalı)|studio flat
un T2 / un deux-pièces|1+1 daire (salon + 1 yatak odası)|one-bedroom flat|The living room counts as a pièce; kitchen and bathroom don't.
un T3 / un trois-pièces|2+1 daire (salon + 2 yatak odası)|two-bedroom flat|T3 = the Turkish 2+1.
l'étage (m.)|kat|floor, storey
le rez-de-chaussée|zemin kat, giriş katı|ground floor
au premier étage|birinci katta|on the first floor|Floors are counted as in Turkey: rez-de-chaussée = zemin kat.
l'escalier (m.)|merdiven|stairs
la pièce|oda (genel olarak)|room
le salon / le séjour|salon, oturma odası|living room
les toilettes (f.) / les WC (m.)|tuvalet|toilet
l'entrée (f.)|giriş, antre|entrance hall|At the restaurant, l'entrée = the starter.
le jardin|bahçe|garden
la cave|bodrum katındaki depo, kiler|cellar
la porte / la fenêtre|kapı / pencere|door / window
le mur|duvar|wall
la clé|anahtar|key
le meuble|mobilya (bir parça)|piece of furniture|les meubles = furniture
meublé / meublée|eşyalı|furnished
le lit|yatak|bed
l'armoire (f.)|gardırop, elbise dolabı|wardrobe
la table / la chaise|masa / sandalye|table / chair
le réfrigérateur (le frigo)|buzdolabı|fridge
la machine à laver|çamaşır makinesi|washing machine
le chauffage|ısıtma, kalorifer|heating
louer|kiralamak; kiraya vermek|to rent; to rent out
l'agence immobilière (f.)|emlakçı|estate agency
déménager / le déménagement|taşınmak / taşınma|to move house / a move
calme / bruyant / lumineux|sakin / gürültülü / aydınlık|quiet / noisy / bright
`),
    D("delf-city", "A1", "DELF words: town & directions", "DELF kelimeleri: şehir ve yol tarifi", "Mots du DELF : la ville et les directions", `
le village|köy|village
le quartier|mahalle, semt|neighbourhood, district
le centre-ville|şehir merkezi|town centre
la rue|sokak, cadde|street
l'avenue (f.)|cadde, bulvar|avenue
la place|meydan|square|Also « seat » or « room, space » in other contexts.
le carrefour|kavşak|crossroads
le rond-point|göbek (döner kavşak)|roundabout
le feu (rouge)|trafik ışığı|traffic light
le passage piéton|yaya geçidi|pedestrian crossing
le trottoir|kaldırım|pavement
le pont|köprü|bridge
le parc|park|park
l'église (f.)|kilise|church
la mosquée|cami|mosque
la bibliothèque / la médiathèque|kütüphane / medya kütüphanesi|library / media library
la piscine|yüzme havuzu|swimming pool
le commissariat (de police)|karakol|police station
le bâtiment|bina|building
le plan (de la ville)|şehir planı, harita|town map
Où est… ? / Où se trouve… ?|… nerede?|Where is…?
Pour aller à…, s'il vous plaît ?|…'e nasıl gidebilirim, lütfen?|How do I get to…, please?
aller tout droit|dümdüz gitmek|to go straight on
tourner à gauche|sola dönmek|to turn left
tourner à droite|sağa dönmek|to turn right
prendre la première rue à droite|sağdaki ilk sokağa girmek|to take the first street on the right
continuer jusqu'à…|…'e kadar devam etmek|to carry on as far as…
traverser (la rue, la place)|karşıya geçmek|to cross (the street, the square)
au bout de la rue|sokağın sonunda|at the end of the street
au coin de la rue|sokağın köşesinde|on the street corner
en face de|karşısında|opposite|The place word comes first, unlike Turkish: en face de la gare = garın karşısında.
à côté de|yanında|next to|de + le = du, de + les = des: à côté du parc, en face des magasins.
près de|yakınında|near
loin de|uzağında|far from
entre … et …|… ile … arasında|between … and …
devant / derrière|önünde / arkasında|in front of / behind
sur / sous|üstünde / altında|on / under
dans|içinde|in, inside
à gauche de / à droite de|solunda / sağında|to the left of / to the right of
au milieu de|ortasında|in the middle of
au nord / au sud|kuzeyde / güneyde|in the north / in the south
à l'est / à l'ouest|doğuda / batıda|in the east / in the west
à 200 mètres|200 metre ötede|200 metres away
à cinq minutes à pied|yürüyerek beş dakika|five minutes' walk away
C'est loin ?|Uzak mı?|Is it far?
Non, c'est tout près.|Hayır, çok yakın.|No, it's very close.
`),
    D("delf-transport", "A1", "DELF words: transport", "DELF kelimeleri: ulaşım", "Mots du DELF : les transports", `
le car|şehirlerarası otobüs|coach|car on its own (no article) = because.
le train|tren|train
le TGV / le TER|hızlı tren / bölgesel tren|high-speed train / regional train
l'avion (m.)|uçak|plane
le bateau|gemi, tekne|boat, ship
la voiture|araba|car
le taxi|taksi|taxi
le vélo|bisiklet|bike
la moto|motosiklet|motorbike
la trottinette (électrique)|(elektrikli) scooter|(electric) scooter
en bus, en train, en voiture|otobüsle, trenle, arabayla|by bus, by train, by car|« en » for vehicles you get inside: en bus, en avion.
à pied, à vélo, à moto|yürüyerek, bisikletle, motosikletle|on foot, by bike, by motorbike|« à » for things you sit on, and on foot.
prendre le bus|otobüse binmek (otobüsü kullanmak)|to take the bus|Je prends le métro pour aller au travail.
l'aéroport (m.)|havalimanı|airport
l'arrêt (de bus) (m.)|(otobüs) durağı|(bus) stop
la voie|hat, peron numarası|track|voie 3 = the train leaves from track 3.
la ligne|hat (metro, otobüs)|line (metro, bus)
le ticket|bilet (otobüs, metro, tramvay)|ticket (bus, metro, tram)|le ticket for local transport; le billet for train, plane, concert.
l'aller simple (m.)|tek yön bilet|single ticket
valider son ticket|biletini makineye okutmak|to validate your ticket
le distributeur (automatique)|bilet otomatı|ticket machine
le départ / l'arrivée (f.)|kalkış / varış|departure / arrival
l'horaire (m.)|saat, sefer saati|timetable, schedule
à l'heure|zamanında|on time
en retard / en avance|geç, rötarlı / erken|late, delayed / early
annulé / annulée|iptal edilmiş|cancelled
changer de ligne|aktarma yapmak|to change (lines)
monter dans (le bus)|(otobüse) binmek|to get on (the bus)
descendre (du bus)|(otobüsten) inmek|to get off (the bus)
le contrôleur / la contrôleuse|kontrolör|ticket inspector
l'amende (f.)|para cezası|fine
conduire|(araba) sürmek|to drive
se garer / le parking|park etmek / otopark|to park / car park
`),
    D("delf-shopping", "A1", "DELF words: shopping & food", "DELF kelimeleri: alışveriş ve yiyecekler", "Mots du DELF : les courses et les aliments", `
faire les courses|(market) alışverişi yapmak|to do the shopping
l'épicerie (f.)|bakkal|grocer's
la pâtisserie|pastane|cake shop
la boucherie (halal)|(helal) kasap|(halal) butcher's
la poissonnerie|balıkçı|fishmonger's
le magasin|mağaza, dükkân|shop
le caissier / la caissière|kasiyer|cashier
le sac|çanta, poşet|bag
le prix|fiyat|price
Ça coûte combien ?|Kaça? Fiyatı ne kadar?|How much does it cost?
cher / chère|pahalı|expensive
pas cher / bon marché|ucuz|cheap|bon marché never changes: des fruits bon marché.
payer en espèces|nakit ödemek|to pay cash
payer par carte|kartla ödemek|to pay by card
la date limite de consommation|son kullanma tarihi|use-by date|Often written DLC on packaging.
un demi-kilo de… / une livre de…|yarım kilo…|half a kilo of…|une livre = 500 g
200 grammes de…|200 gram…|200 grams of…
un litre de…|bir litre…|a litre of…
une boîte de…|bir kutu…; bir konserve…|a box of…; a tin of…
un pot de…|bir kavanoz…|a jar of…, a pot of…
un morceau de…|bir parça…|a piece of…
une douzaine d'œufs|bir düzine yumurta|a dozen eggs
l'œuf (m.) / les œufs|yumurta / yumurtalar|egg / eggs|The f is heard in « un œuf » but silent in « des œufs ».
le jambon / le jambon de dinde|jambon / hindi jambonu|ham / turkey ham|Le jambon on its own is pork.
la carotte|havuç|carrot
le concombre|salatalık|cucumber
la salade|marul; salata|lettuce; salad
les haricots verts (m.)|taze fasulye|green beans
la banane|muz|banana
la cerise|kiraz|cherry
l'huile (d'olive) (f.)|yağ (zeytinyağı)|oil (olive oil)
l'eau (minérale / gazeuse) (f.)|su (maden suyu / gazlı su)|water (mineral / sparkling)
le jus d'orange|portakal suyu|orange juice
le café|kahve|coffee
le vin / la bière|şarap / bira|wine / beer
le chocolat|çikolata|chocolate
la confiture|reçel|jam
Je voudrais du pain et de la confiture.|Biraz ekmek ve reçel istiyorum.|I'd like some bread and jam.|du / de la / de l' / des = some (an unspecified amount).
`),
    D("delf-restaurant", "A1", "DELF words: at the restaurant", "DELF kelimeleri: restoranda", "Mots du DELF : au restaurant", `
le café / le bar|kafe / bar|café / bar
la brasserie|büyük kafe-lokanta|brasserie (large café-restaurant)
la carte|yemek listesi (bütün yemekler)|the menu (list of all dishes)|Vous avez la carte, s'il vous plaît ?
le menu / la formule|sabit fiyatlı menü|set menu|False friend: le menu = a fixed-price set (starter + main + dessert), not the list of dishes.
le plat du jour|günün yemeği|dish of the day
le plat (principal)|ana yemek|main course
le dessert|tatlı|dessert
la boisson|içecek|drink
le serveur / la serveuse|garson (erkek / kadın)|waiter / waitress
l'assiette (f.)|tabak|plate
le verre|bardak|glass
la tasse|fincan|cup
la fourchette|çatal|fork
le couteau|bıçak|knife
la cuillère|kaşık|spoon
la serviette|peçete; havlu|napkin; towel
une carafe d'eau|bir sürahi su (ücretsiz musluk suyu)|a jug of tap water (free)
le pourboire|bahşiş|tip
réserver une table|masa ayırtmak|to book a table
Une table pour deux, s'il vous plaît.|İki kişilik bir masa, lütfen.|A table for two, please.
Je voudrais… / Je vais prendre…|… istiyorum. / … alacağım.|I'd like… / I'll have…
Qu'est-ce que vous me conseillez ?|Ne tavsiye edersiniz?|What do you recommend?
saignant / à point / bien cuit|az pişmiş / orta / iyi pişmiş|rare / medium / well done
végétarien / végétarienne|vejetaryen|vegetarian
sans porc / sans alcool|domuz etsiz / alkolsüz|pork-free / alcohol-free
délicieux / délicieuse|çok lezzetli|delicious
Le service est compris.|Servis ücreti dahil.|Service is included.
`),
    D("delf-clothes", "A1", "DELF words: clothes & colours", "DELF kelimeleri: giysiler ve renkler", "Mots du DELF : les vêtements et les couleurs", `
les vêtements (m.)|giysiler, kıyafetler|clothes
le jean|kot pantolon|jeans|Singular in French: un jean.
la jupe|etek|skirt
la robe|elbise|dress
la chemise|gömlek|shirt
le tee-shirt|tişört|T-shirt
le pull|kazak|jumper, sweater
la veste|ceket|jacket
le manteau|palto, kaban|coat
le blouson|mont|short jacket, bomber jacket
l'imperméable (m.)|yağmurluk|raincoat
les chaussures (f.)|ayakkabılar|shoes
les baskets (f.)|spor ayakkabı|trainers
les bottes (f.)|çizme, bot|boots
les chaussettes (f.)|çoraplar|socks
le chapeau|şapka|hat
la casquette|kasket, şapka (siperli)|cap
l'écharpe (f.)|atkı|scarf (warm)
les gants (m.)|eldivenler|gloves
le sac à main|el çantası|handbag
la ceinture|kemer|belt
les lunettes (f.)|gözlük|glasses
la taille|beden; boy|size; height
la pointure|ayakkabı numarası|shoe size
Quelle taille faites-vous ?|Kaç beden giyiyorsunuz?|What size are you?
Je fais du 38. / Je fais du M.|38 beden giyiyorum. / M giyiyorum.|I'm a size 38. / I'm a medium.
Je chausse du 39.|39 numara giyiyorum.|I take a size 39 shoe.
la cabine d'essayage|deneme kabini|fitting room
C'est trop grand / trop petit.|Çok büyük / çok küçük.|It's too big / too small.
Ça me va bien.|Bana yakışıyor, üstüme tam oldu.|It suits me, it fits well.
court / long|kısa / uzun|short / long
large / serré|bol / dar|loose / tight|False friend: large = loose, wide (not « big »).
en coton / en laine / en cuir|pamuklu / yünlü / deri|cotton / wool / leather
échanger / rembourser|değiştirmek / parayı iade etmek|to exchange / to refund
blanc / blanche|beyaz|white
noir / noire|siyah|black
rouge|kırmızı|red
bleu / bleue|mavi|blue
vert / verte|yeşil|green|Colours agree with the noun: un pull vert, une jupe verte, des pulls verts.
jaune|sarı|yellow
gris / grise|gri|grey
rose|pembe|pink
violet / violette|mor|purple
beige|bej|beige
marron|kahverengi|brown|Never changes: des chaussures marron.
orange|turuncu|orange (colour)|Never changes: des sacs orange.
bleu clair / bleu foncé|açık mavi / koyu mavi|light blue / dark blue|Compound colours never change: des yeux bleu clair.
une robe rouge|kırmızı bir elbise|a red dress|The colour comes AFTER the noun.
`),
    D("delf-work", "A2", "DELF words: work", "DELF kelimeleri: iş hayatı", "Mots du DELF : le travail", `
le travail|iş; çalışma|work; job
le métier / la profession|meslek|trade, occupation
l'emploi (m.) / le poste|iş, istihdam / pozisyon|job, employment / position
l'entreprise (f.) / la société|şirket|company
l'usine (f.)|fabrika|factory
le / la collègue|iş arkadaşı|colleague
le patron / la patronne|patron|boss
le salaire|maaş|salary, wages
le contrat (CDI / CDD)|sözleşme (süresiz / süreli)|contract (permanent / fixed-term)
le stage / le / la stagiaire|staj / stajyer|internship / intern
à temps plein / à temps partiel|tam zamanlı / yarı zamanlı|full-time / part-time
les horaires (m.)|çalışma saatleri|working hours
les congés (m.)|izin|leave, time off
la réunion|toplantı|meeting
embaucher|işe almak|to hire
chercher du travail|iş aramak|to look for work
être au chômage|işsiz olmak|to be unemployed
la retraite / à la retraite|emeklilik / emekli|retirement / retired
Je suis infirmière.|Hemşireyim.|I'm a nurse.|No article after être + job: « Je suis une infirmière » is wrong. But: C'est une infirmière.
le médecin / la médecin|doktor|doctor
l'infirmier (m.) / l'infirmière (f.)|hemşire|nurse|-er → -ère
le professeur / la professeure (le / la prof)|öğretmen|teacher
l'étudiant (m.) / l'étudiante (f.)|üniversite öğrencisi|(university) student
l'élève (m./f.)|öğrenci (okulda)|pupil
le vendeur / la vendeuse|satış elemanı|shop assistant|-eur → -euse
le cuisinier / la cuisinière|aşçı|cook|la cuisinière is also the cooker (stove).
le boulanger / la boulangère|fırıncı|baker
le coiffeur / la coiffeuse|kuaför|hairdresser
le chauffeur / la chauffeuse|şoför|driver
le policier / la policière|polis|police officer
l'avocat (m.) / l'avocate (f.)|avukat|lawyer|un avocat is also an avocado!
l'ingénieur (m.) / l'ingénieure (f.)|mühendis|engineer
l'informaticien (m.) / l'informaticienne (f.)|bilişimci|IT specialist|-ien → -ienne
le / la secrétaire|sekreter|secretary|Nouns in -e don't change: un / une secrétaire.
le / la comptable|muhasebeci|accountant
l'agent (m.) / l'agente (f.) d'entretien|temizlik görevlisi|cleaner
l'aide-soignant (m.) / l'aide-soignante (f.)|hasta bakıcı|care assistant
l'assistant maternel (m.) / l'assistante maternelle (f.)|çocuk bakıcısı|childminder
le facteur / la factrice|postacı|postman / postwoman|-teur → -trice
le directeur / la directrice|müdür|director, head|-teur → -trice
l'ouvrier (m.) / l'ouvrière (f.)|işçi|(factory) worker
l'agriculteur (m.) / l'agricultrice (f.)|çiftçi|farmer
le traducteur / la traductrice|çevirmen|translator
le / la journaliste|gazeteci|journalist
le / la fonctionnaire|devlet memuru|civil servant
l'homme au foyer (m.) / la femme au foyer|ev erkeği / ev hanımı|stay-at-home father / housewife
`),
    D("delf-leisure", "A1", "DELF words: free time & sport", "DELF kelimeleri: boş zaman ve spor", "Mots du DELF : les loisirs et le sport", `
les loisirs (m.)|boş zaman etkinlikleri, hobiler|leisure activities, hobbies
le temps libre|boş zaman|free time
faire du vélo|bisiklete binmek|to cycle|faire de + activity: faire du vélo, de la natation, de l'escalade.
faire de la natation / nager|yüzmek|to swim
faire de la course à pied / courir|koşmak|to run, to go running
faire du yoga / de la danse|yoga / dans yapmak|to do yoga / to dance
faire de la randonnée|doğa yürüyüşü yapmak|to go hiking
faire de l'escalade|tırmanış yapmak|to go climbing
jouer au football / au tennis|futbol / tenis oynamak|to play football / tennis|jouer à + game or sport: au foot, à la pétanque, aux échecs.
jouer aux cartes|kâğıt oynamak|to play cards
jouer aux échecs|satranç oynamak|to play chess
jouer du piano / de la guitare|piyano / gitar çalmak|to play the piano / the guitar|jouer de + instrument.
la musique|müzik|music
le film / la série|film / dizi|film / series
regarder la télévision (la télé)|televizyon izlemek|to watch television
aller au cinéma / au théâtre|sinemaya / tiyatroya gitmek|to go to the cinema / the theatre
l'exposition (f.)|sergi|exhibition
la bande dessinée (la BD)|çizgi roman|comic book
la photo|fotoğraf|photo
la peinture / dessiner|resim / çizmek|painting / to draw
cuisiner / la cuisine|yemek yapmak / yemek pişirme|to cook / cooking
le jardinage|bahçe işleri|gardening
se promener / la promenade|gezinmek / gezinti|to go for a walk / a walk
voyager / le voyage|seyahat etmek / seyahat|to travel / a trip
sortir avec des amis|arkadaşlarla dışarı çıkmak|to go out with friends
la fête|parti; bayram|party; celebration
l'anniversaire (m.)|doğum günü; yıl dönümü|birthday; anniversary
le jeu vidéo|video oyunu|video game
l'association (f.)|dernek|association, club
le / la bénévole|gönüllü|volunteer
s'inscrire (à un club)|(bir kulübe) kaydolmak|to sign up (for a club)
`),
    D("delf-weather", "A1", "DELF words: weather", "DELF kelimeleri: hava durumu", "Mots du DELF : la météo", `
la météo|hava durumu (tahmini)|weather forecast
Quel temps fait-il ?|Hava nasıl?|What's the weather like?
Il fait mauvais.|Hava kötü.|The weather is bad.
Il fait chaud / froid.|Hava sıcak / soğuk.|It's hot / cold.|For the weather say « il fait ». « C'est froid » describes a thing: le café est froid.
Il fait doux.|Hava ılık.|It's mild.
Il fait 20 degrés.|Hava 20 derece.|It's 20 degrees.
Il fait moins deux.|Hava eksi iki derece.|It's minus two (−2 °C).
Il y a du soleil.|Güneşli.|It's sunny.
Il y a du vent.|Rüzgârlı.|It's windy.
Il y a des nuages.|Bulutlu.|It's cloudy.
Il y a du brouillard.|Sisli.|It's foggy.
Il pleut. / la pluie|Yağmur yağıyor. / yağmur|It's raining. / rain
Il neige. / la neige|Kar yağıyor. / kar|It's snowing. / snow
Il gèle.|Don var (buz tutuyor).|It's freezing.
l'orage (m.)|fırtına (gök gürültülü)|thunderstorm
la tempête|şiddetli fırtına|storm, gale
l'averse (f.)|sağanak|shower (of rain)
le ciel nuageux / ensoleillé|bulutlu / güneşli gökyüzü|cloudy / sunny sky
la température|sıcaklık|temperature
la chaleur / la canicule|sıcak / sıcak hava dalgası|heat / heatwave
humide / sec|nemli / kuru|humid, damp / dry
le parapluie|şemsiye|umbrella
Demain, il va pleuvoir.|Yarın yağmur yağacak.|It's going to rain tomorrow.|Also: Demain, il pleuvra.
Hier, il a plu.|Dün yağmur yağdı.|It rained yesterday.|plu = past participle of pleuvoir.
Il faisait froid.|Hava soğuktu.|It was cold.|Imparfait for describing past weather.
`),
    D("delf-school", "A1", "DELF words: school & studies", "DELF kelimeleri: okul ve eğitim", "Mots du DELF : l'école et la formation", `
l'école maternelle (f.)|anaokulu (3-6 yaş)|nursery school (ages 3–6)
l'école primaire (f.)|ilkokul (6-11 yaş)|primary school (ages 6–11)
l'université (f.) / la fac|üniversite|university / uni
la classe / la salle de classe|sınıf / derslik|class / classroom
le cours de français|Fransızca kursu, Fransızca dersi|French class
la leçon|ders (bir konu)|lesson (one topic)
les devoirs (m.)|ödev|homework
l'examen (m.)|sınav|exam
passer un examen|sınava girmek|to sit an exam|False friend: it does NOT mean « to pass ». Je passe le DELF A2 en mai.
réussir un examen|sınavı geçmek, başarmak|to pass an exam
échouer à un examen / rater|sınavda başarısız olmak / kalmak|to fail an exam
la note|not|mark, grade
le niveau (débutant)|seviye (başlangıç)|level (beginner)
apprendre / étudier|öğrenmek / okumak, çalışmak|to learn / to study
réviser|tekrar etmek (sınava çalışmak)|to revise
l'inscription (f.) / s'inscrire|kayıt / kaydolmak|registration / to register
le cahier|defter|exercise book
le stylo / le crayon|tükenmez kalem / kurşun kalem|pen / pencil
la gomme|silgi|rubber, eraser
le dictionnaire|sözlük|dictionary
la feuille|kâğıt (yaprak)|sheet of paper
le tableau|tahta; tablo|board; painting
la cantine|okul yemekhanesi|school canteen
la rentrée (scolaire)|okulların açılışı (eylül başı)|back to school (early September)
les vacances scolaires (f.)|okul tatili|school holidays
`),
    D("delf-services", "A2", "DELF words: post, bank & admin", "DELF kelimeleri: postane, banka ve resmî işler", "Mots du DELF : la poste, la banque et l'administration", `
la poste / le bureau de poste|postane|post office
la lettre|mektup|letter
l'accusé de réception (m.)|alındı belgesi|acknowledgement of receipt
le timbre|pul|stamp
l'enveloppe (f.)|zarf|envelope
le compte (bancaire)|(banka) hesabı|(bank) account
ouvrir un compte|hesap açmak|to open an account
la carte bancaire|banka kartı|bank card
le code (secret)|şifre|PIN
le distributeur (de billets)|ATM, bankamatik|cash machine
retirer de l'argent|para çekmek|to withdraw money
le chèque|çek|cheque
le conseiller / la conseillère|müşteri temsilcisi|(bank) adviser
les frais (m.)|masraflar, ücretler|fees, charges
le / la maire|belediye başkanı|mayor
l'état civil (m.)|nüfus işleri|registry office (births, marriages, deaths)
l'inscription à l'école (f.)|okul kaydı|school enrolment
la demande / le renouvellement|başvuru / yenileme|application / renewal
la photo d'identité|vesikalık fotoğraf|passport photo
la copie / la photocopie|kopya / fotokopi|copy / photocopy
le timbre fiscal|harç pulu|tax stamp
prendre rendez-vous en ligne|internetten randevu almak|to book an appointment online
la CAF|aile yardımları kurumu|family benefits office (CAF)
la CPAM / l'Assurance maladie (f.)|sağlık sigortası kurumu|state health insurance office
l'assurance (f.)|sigorta|insurance
l'électricité (f.) / le gaz|elektrik / doğal gaz|electricity / gas
les horaires d'ouverture (m.)|açılış saatleri|opening hours
ouvert / fermé|açık / kapalı|open / closed
téléphoner (à)|telefon etmek|to phone, to call|téléphoner à quelqu'un: Je téléphone à la banque.
faire la queue|sırada beklemek, kuyruğa girmek|to queue
le service client|müşteri hizmetleri|customer service
la réclamation|şikâyet (resmî)|(formal) complaint
`),
    D("delf-feelings", "A2", "DELF words: feelings & opinions", "DELF kelimeleri: duygular ve görüşler", "Mots du DELF : les sentiments et les opinions", `
content / contente|memnun|pleased, happy
heureux / heureuse|mutlu|happy
triste|üzgün|sad
en colère|kızgın, öfkeli|angry
inquiet / inquiète|endişeli|worried
stressé / stressée|stresli|stressed
surpris / surprise|şaşırmış|surprised
déçu / déçue|hayal kırıklığına uğramış|disappointed|False friend: not « deceived ».
fier / fière (de)|(…ile) gururlu|proud (of)
ravi / ravie|çok memnun|delighted
amoureux / amoureuse|âşık|in love
avoir peur (de)|(…den) korkmak|to be afraid (of)
avoir honte (de)|(…den) utanmak|to be ashamed (of)
s'ennuyer|sıkılmak|to be bored
avoir hâte de…|… için sabırsızlanmak|to look forward to…, can't wait to…
J'espère que…|Umarım…|I hope that…
J'aime / J'adore…|… seviyorum / bayılıyorum|I like / I love…
Je n'aime pas / Je déteste…|… sevmiyorum / nefret ediyorum|I don't like / I hate…
Je préfère…|… tercih ederim|I prefer…
préférer|tercih etmek|to prefer|é → è: je préfère, but nous préférons.
Ça me plaît.|Hoşuma gidiyor.|I like it.
Je pense que… / Je trouve que…|Bence… / Bana göre…|I think that… / I find that…
À mon avis,…|Bana kalırsa,…|In my opinion,…
Je suis d'accord (avec vous).|(Size) katılıyorum.|I agree (with you).
Je ne suis pas d'accord.|Katılmıyorum.|I disagree.
C'est génial ! / C'est super !|Harika!|It's great!
C'est intéressant.|İlginç.|It's interesting.
C'est ennuyeux.|Sıkıcı.|It's boring.
C'est agréable.|Hoş, keyifli.|It's pleasant.
C'est nul.|Berbat. (günlük dil)|It's rubbish.|Informal.
Quel dommage ! / C'est dommage.|Ne yazık!|What a pity!
Ça m'est égal.|Benim için fark etmez.|I don't mind.
Ça dépend.|Duruma göre değişir.|It depends.
`),
    D("delf-connectors", "A2", "DELF words: linking words", "DELF kelimeleri: bağlaçlar", "Mots du DELF : les mots de liaison", `
d'abord|önce, ilk olarak|first|D'abord, j'ai pris un café.
après|sonra|afterwards|Après, on a mangé.
finalement|sonunda, nihayet|in the end|Finalement, il a accepté.
D'abord… Ensuite… Puis… Enfin…|Önce… Sonra… Ardından… En sonunda…|First… Then… Next… Finally…|The order for telling a story in the A2 writing and speaking.
et|ve|and|du pain et du fromage
ou|veya, ya da|or|du thé ou du café ? — ou (or) has no accent; où = where.
mais|ama, fakat|but|C'est cher, mais c'est bon.
parce que|çünkü|because|+ a sentence; parce qu' before a vowel: parce qu'il pleut.
comme|-dığı için (cümle başında)|as, since (at the start of a sentence)|Comme il pleut, je reste ici.
alors|o zaman; bu yüzden|so, then|Tu es fatiguée ? Alors, repose-toi !
par contre|buna karşılık, ama|on the other hand|Le studio est petit. Par contre, il est calme.
aussi|de, da; ayrıca|too, also|Moi aussi, j'aime le thé.
en plus|üstelik, ayrıca|what's more|En plus, il fait beau !
surtout|özellikle|especially|J'aime surtout le poisson.
quand|-dığında, -ınca|when|Quand je suis arrivée, il pleuvait.
si|eğer|if|S'il fait beau, on sortira. si → s' only before il / ils: s'il, but si elle.
pendant que|-iken|while|Il dort pendant que je travaille.
`),
    D("delf-time", "A2", "DELF words: time expressions", "DELF kelimeleri: zaman ifadeleri", "Mots du DELF : les marqueurs de temps", `
avant-hier|evvelsi gün|the day before yesterday
après-demain|öbür gün|the day after tomorrow
ce matin|bu sabah|this morning
cet après-midi|bu öğleden sonra|this afternoon
ce soir|bu akşam|this evening, tonight
cette nuit|bu gece; dün gece|tonight; last night
la semaine dernière|geçen hafta|last week
le mois dernier / l'année dernière|geçen ay / geçen yıl|last month / last year
le week-end prochain|gelecek hafta sonu|next weekend
il y a deux jours|iki gün önce|two days ago|il y a + time = ago, with a past tense: Je suis arrivée en France il y a deux ans.
dans trois jours|üç gün sonra (bugünden itibaren)|in three days' time|dans + time = in (future): Le train part dans dix minutes.
depuis 2023 / depuis deux ans|2023'ten beri / iki yıldır|since 2023 / for two years|With the PRESENT tense, as in Turkish: J'habite à Lille depuis deux ans.
pendant deux heures|iki saat boyunca|for two hours|A finished period: J'ai travaillé pendant cinq ans à Izmir.
en 2024 / en deux heures|2024'te / iki saatte (sürede)|in 2024 / in two hours (time taken)
maintenant|şimdi|now
en ce moment|şu anda, bu aralar|at the moment
tout de suite|hemen|right away
bientôt|yakında|soon
déjà|zaten, çoktan; daha önce|already; ever
pas encore|henüz değil|not yet
encore|yine, tekrar; hâlâ|again; still
toujours|her zaman; hâlâ|always; still
souvent|sık sık|often
parfois / quelquefois|bazen|sometimes
de temps en temps|ara sıra|from time to time
rarement|nadiren|rarely
ne… jamais|asla, hiç|never|Je ne bois jamais de café.
tous les jours / tous les soirs|her gün / her akşam|every day / every evening
une fois par semaine|haftada bir kez|once a week
tôt / tard|erken / geç|early / late
avant / après|önce / sonra|before / after
autrefois|eskiden|in the past, formerly
un jour|bir gün|one day
la veille / le lendemain|bir gün önce / ertesi gün|the day before / the next day
`)
  );
})();
