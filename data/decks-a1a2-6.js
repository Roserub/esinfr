/* A1 decks (v9): the park & nature, toys & children's games, supermarket aisles,
   tools & DIY basics, the car, looking after a pet. */
(function () {
  const D = (id, level, en, tr, fr, lines) => ({
    id, level, name: { en, tr, fr },
    cards: lines.trim().split("\n").map(l => {
      const [f, t, e, n] = l.split("|").map(s => (s || "").trim());
      return { id: id + ":" + f, fr: f, tr: t, en: e, note: n || "" };
    })
  });

  window.DECKS.push(
    D("a1-park", "A1", "The park & nature", "Park ve doğa", "Le parc et la nature", `
le parc|park|the park
le jardin public|halk bahçesi|the public garden|In Paris, many parks are called « jardins ».
l'arbre (m.)|ağaç|the tree
la feuille|yaprak|the leaf|Also: a sheet of paper.
la fleur|çiçek|the flower
l'herbe (f.)|çimen, ot|the grass|h is silent: « l'herbe ».
la pelouse|çimenlik|the lawn|« Pelouse interdite » = keep off the grass.
le banc|bank|the bench
l'allée (f.)|yürüyüş yolu|the path, the alley
le lac|göl|the lake
l'étang (m.)|gölet|the pond
la fontaine|çeşme, fıskiye|the fountain
le pont|köprü|the bridge
l'oiseau (m.)|kuş|the bird|Plural: les oiseaux.
le pigeon|güvercin|the pigeon
le canard|ördek|the duck
l'écureuil (m.)|sincap|the squirrel|Tricky sound: « é-cu-reuil ».
l'aire de jeux (f.)|çocuk oyun alanı|the playground
le kiosque|büfe; çardak|the kiosk; the bandstand
le pique-nique|piknik|the picnic|faire un pique-nique
la nature|doğa|nature
le soleil|güneş|the sun
l'ombre (f.)|gölge|the shade; the shadow|à l'ombre = in the shade
le ciel|gökyüzü|the sky|Plural: les cieux (rare).
l'air frais (m.)|temiz hava|fresh air
se promener|gezinmek, yürüyüş yapmak|to go for a walk|Je me promène, tu te promènes.
s'asseoir sur un banc|bankta oturmak|to sit on a bench
nourrir les canards|ördekleri beslemek|to feed the ducks
Il fait beau, on va au parc ?|Hava güzel, parka gidelim mi?|The weather's nice, shall we go to the park?
On s'assoit à l'ombre ?|Gölgeye oturalım mı?|Shall we sit in the shade?
Le parc ferme à 20 h.|Park saat 20'de kapanıyor.|The park closes at 8 pm.|Many French parks close at night.
Regarde, un écureuil !|Bak, bir sincap!|Look, a squirrel!
Les chiens doivent être tenus en laisse.|Köpekler tasmalı olmalı.|Dogs must be kept on a lead.|A common park sign.
J'adore l'odeur des fleurs.|Çiçeklerin kokusuna bayılıyorum.|I love the smell of the flowers.`),

    D("a1-toys", "A1", "Toys & children's games", "Oyuncaklar ve çocuk oyunları", "Les jouets et les jeux d'enfants", `
le jouet|oyuncak|the toy|Plural: les jouets.
le jeu|oyun|the game|Plural: les jeux (-x).
la poupée|oyuncak bebek|the doll
la peluche|pelüş oyuncak|the soft toy
le nounours|oyuncak ayı|the teddy bear|Child word.
le ballon|top|the ball (big)|For a small ball: la balle.
la balle|küçük top|the ball (small)|tennis, ping-pong…
le vélo|bisiklet|the bike
la trottinette|scooter, trotinet|the scooter
les cubes (m.)|oyuncak küpler|the building blocks
le puzzle|yapboz|the jigsaw puzzle|Say: « peuzl ».
le jeu de société|kutu oyunu|the board game
le jeu de cartes|kart oyunu|the card game
le dé|zar|the die, the dice|Plural: les dés.
les crayons de couleur (m.)|boya kalemleri|the coloured pencils
le dessin|resim, çizim|the drawing
la pâte à modeler|oyun hamuru|the modelling clay
la corde à sauter|atlama ipi|the skipping rope
le toboggan|kaydırak|the slide
la balançoire|salıncak|the swing
le bac à sable|kum havuzu|the sandpit
le cerf-volant|uçurtma|the kite|The f is silent in « cerf ».
cache-cache|saklambaç|hide-and-seek|jouer à cache-cache
le chat (jeu)|ebelemece|tag, tig|« C'est toi le chat ! » = You're it!
jouer à|… oynamak (oyun)|to play (a game)|jouer à la poupée, jouer au ballon
gagner|kazanmak|to win
perdre|kaybetmek|to lose
partager|paylaşmak|to share
C'est mon tour !|Sıra bende!|It's my turn!
À toi de jouer !|Sıra sende!|Your turn!
Tu veux jouer avec moi ?|Benimle oynamak ister misin?|Do you want to play with me?
On range les jouets, s'il te plaît.|Oyuncakları toplayalım lütfen.|Let's tidy up the toys, please.
Attention, ne cours pas !|Dikkat, koşma!|Careful, don't run!
Bravo, tu as gagné !|Bravo, kazandın!|Well done, you won!`),

    D("a1-supermarket", "A1", "Supermarket aisles", "Süpermarket reyonları", "Les rayons du supermarché", `
le supermarché|süpermarket|the supermarket
l'hypermarché (m.)|hipermarket|the hypermarket|Very big, often outside town.
le rayon|reyon|the aisle, the section
le rayon fruits et légumes|meyve sebze reyonu|the fruit and veg section
le rayon boucherie|kasap reyonu|the meat counter
le rayon frais|soğuk ürünler reyonu|the chilled section|yogurts, cheese, butter…
les produits laitiers (m.)|süt ürünleri|dairy products
les surgelés (m.)|dondurulmuş ürünler|frozen food
l'épicerie salée (f.)|tuzlu ürünler reyonu|the savoury groceries aisle|pasta, rice, tins…
l'épicerie sucrée (f.)|tatlı ürünler reyonu|the sweet groceries aisle|biscuits, jam, chocolate…
les boissons (f.)|içecekler|drinks
les conserves (f.)|konserveler|tinned food
le rayon hygiène|kişisel bakım reyonu|the toiletries aisle
les produits ménagers (m.)|temizlik ürünleri|cleaning products
le chariot|alışveriş arabası|the trolley|Often needs a 1 € coin or a token.
le panier|sepet|the basket
le jeton|jeton|the token
l'étiquette (f.)|etiket|the label, the price tag
la promotion|indirim, kampanya|the special offer|Short: « la promo ».
la date limite|son kullanma tarihi|the use-by date
la caisse|kasa|the checkout
la caisse automatique|self-servis kasa|the self-checkout
la carte de fidélité|müşteri kartı, sadakat kartı|the loyalty card
le ticket de caisse|fiş|the receipt
le sac réutilisable|tekrar kullanılabilir poşet|the reusable bag|Single-use plastic bags are banned at checkouts: bring your own!
peser|tartmak|to weigh|Je pèse, nous pesons.
Où est le rayon des boissons ?|İçecek reyonu nerede?|Where is the drinks aisle?
C'est au fond du magasin.|Mağazanın en arkasında.|It's at the back of the shop.
Vous avez la carte du magasin ?|Mağaza kartınız var mı?|Do you have the store card?
Je n'ai pas de jeton pour le chariot.|Alışveriş arabası için jetonum yok.|I don't have a token for the trolley.
Il faut peser les fruits ?|Meyveleri tartmak gerekiyor mu?|Do I need to weigh the fruit?|In some shops you weigh fruit yourself.
Deux paquets achetés, un offert !|İki paket alana bir paket bedava!|Buy two packs, get one free!
Vous voulez le ticket ?|Fişi ister misiniz?|Would you like the receipt?`),

    D("a1-diy", "A1", "Tools & DIY basics", "Aletler ve basit tamir işleri", "Les outils et le bricolage", `
le bricolage|kendin yap işleri, tamir|DIY|faire du bricolage
bricoler|ufak tamir işleri yapmak|to do DIY
l'outil (m.)|alet|the tool|The l is silent: « ou-ti ».
la boîte à outils|alet çantası|the toolbox
le marteau|çekiç|the hammer
le clou|çivi|the nail|Plural: les clous.
le tournevis|tornavida|the screwdriver|The s is pronounced.
la vis|vida|the screw|The s is pronounced: « viss ».
la perceuse|matkap|the drill
la scie|testere|the saw
la pince|pense|the pliers
la clé|anahtar (alet)|the spanner|Also: the key.
le mètre|şerit metre|the tape measure
la colle|yapıştırıcı|the glue
le scotch|bant|the sticky tape|Brand name used for all tape.
les ciseaux (m.)|makas|the scissors|Always plural.
l'échelle (f.)|merdiven (taşınabilir)|the ladder|Stairs = l'escalier.
l'ampoule (f.)|ampul|the light bulb|Also: a blister!
la prise|priz|the socket, the plug
la peinture|boya|the paint
le pinceau|fırça|the paintbrush|Plural: les pinceaux.
le magasin de bricolage|nalbur, yapı market|the DIY store
réparer|tamir etmek|to repair, to fix
monter un meuble|mobilya kurmak|to put furniture together
accrocher un tableau|tablo asmak|to hang a picture
changer une ampoule|ampul değiştirmek|to change a light bulb
percer un trou|delik açmak|to drill a hole
visser / dévisser|vidalamak / vidayı sökmek|to screw / to unscrew
Tu as un tournevis ?|Tornavidan var mı?|Do you have a screwdriver?
C'est cassé.|Bozuk. / Kırık.|It's broken.
Ça ne marche pas.|Çalışmıyor.|It doesn't work.
Tu peux m'aider à monter l'armoire ?|Dolabı kurmama yardım eder misin?|Can you help me put the wardrobe together?
Attention à tes doigts !|Parmaklarına dikkat et!|Watch your fingers!
Je ne suis pas très bricoleuse.|Tamir işlerinde pek iyi değilim.|I'm not very good at DIY.|m. bricoleur, f. bricoleuse`),

    D("a1-car", "A1", "The car", "Araba", "La voiture", `
la voiture|araba|the car|Informal: « la bagnole ».
le conducteur|sürücü|the driver|f. la conductrice
le passager|yolcu|the passenger|f. la passagère
conduire|araba sürmek|to drive|Je conduis, nous conduisons.
le permis de conduire|ehliyet|the driving licence|Short: « le permis ».
l'auto-école (f.)|sürücü kursu|the driving school
le volant|direksiyon|the steering wheel
le siège|koltuk|the seat
la ceinture de sécurité|emniyet kemeri|the seat belt
le frein|fren|the brake
freiner|fren yapmak|to brake
le moteur|motor|the engine
le pneu|lastik|the tyre|Plural: les pneus.
la roue|tekerlek|the wheel
le coffre|bagaj|the boot (trunk)
la portière|araba kapısı|the car door
le rétroviseur|dikiz aynası|the rear-view mirror
les phares (m.)|farlar|the headlights
le clignotant|sinyal|the indicator|mettre le clignotant
l'essence (f.)|benzin|petrol|Also « le sans-plomb ».
le gazole|dizel, motorin|diesel|Also written « le gasoil ».
la station-service|benzin istasyonu|the petrol station
faire le plein|depoyu doldurmak|to fill up the tank
le garage|tamirhane; garaj|the garage (repair or parking)
la panne|arıza|the breakdown|être en panne = to have broken down
la batterie|akü|the car battery
l'autoroute (f.)|otoyol|the motorway|Often with a toll: le péage.
le péage|gişe, otoyol ücreti|the toll
se garer|park etmek|to park|Je me gare.
Attache ta ceinture !|Kemerini tak!|Fasten your seat belt!
Je peux mettre mon sac dans le coffre ?|Çantamı bagaja koyabilir miyim?|Can I put my bag in the boot?
Ma voiture est en panne.|Arabam arızalandı.|My car has broken down.
Tu as ton permis ?|Ehliyetin var mı?|Do you have your licence?
Je passe le permis en juin.|Haziranda ehliyet sınavına giriyorum.|I'm taking my driving test in June.|passer le permis = take the test (not « pass »!).`),

    D("a1-pet-care", "A1", "Looking after a pet", "Evcil hayvan bakımı", "S'occuper d'un animal", `
s'occuper de|ilgilenmek, bakmak|to look after|Je m'occupe du chat.
adopter|sahiplenmek|to adopt
le refuge|hayvan barınağı|the animal shelter
nourrir|beslemek|to feed|Je nourris, nous nourrissons.
la nourriture pour chats|kedi maması|cat food
les croquettes (f.)|kuru mama|dry pet food, kibble
la pâtée|yaş mama|wet pet food
la gamelle|mama kabı|the pet bowl
le bol d'eau|su kabı|the water bowl
la laisse|tasma kayışı|the lead, the leash
le collier|tasma|the collar|Also: a necklace.
la niche|köpek kulübesi|the kennel
le panier|hayvan yatağı; sepet|the pet bed; the basket
la litière|kedi kumu|the cat litter
la cage|kafes|the cage
l'aquarium (m.)|akvaryum|the aquarium|Say: « a-kwa-ri-om ».
le jouet pour chien|köpek oyuncağı|the dog toy
promener le chien|köpeği gezdirmek|to walk the dog
brosser|fırçalamak, taramak|to brush
laver|yıkamak|to wash
caresser|okşamak, sevmek|to stroke, to pet
le poil|tüy (hayvan)|the fur, the hair|Il perd ses poils = he's shedding.
la patte|pati, bacak (hayvan)|the paw, the leg
la queue|kuyruk|the tail|Also: a queue of people!
le vaccin|aşı|the vaccine
la puce|pire|the flea|Also: a microchip.
aboyer|havlamak|to bark
miauler|miyavlamak|to meow
Il a faim, tu lui donnes à manger ?|Acıkmış, ona yemek verir misin?|He's hungry, can you feed him?
Je peux le caresser ?|Onu sevebilir miyim?|Can I stroke him?
Il est gentil, il ne mord pas.|Uysaldır, ısırmaz.|He's friendly, he doesn't bite.
Tu peux garder mon chat ce week-end ?|Bu hafta sonu kedime bakabilir misin?|Can you look after my cat this weekend?|garder = to look after (for a while).
On a rendez-vous chez le vétérinaire.|Veterinerde randevumuz var.|We have an appointment at the vet's.
Il faut changer la litière tous les jours.|Kedi kumunu her gün değiştirmek gerekiyor.|You have to change the litter every day.`)
  );
})();
