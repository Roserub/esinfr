/* A1/A2 decks (v5): animals, kitchen & cooking, hobbies, describing people, French class,
   near future, imparfait, y & en, injuries & A&E, housework, environment, online shopping. */
(function () {
  const D = (id, level, en, tr, fr, lines) => ({
    id, level, name: { en, tr, fr },
    cards: lines.trim().split("\n").map(l => {
      const [f, t, e, n] = l.split("|").map(s => (s || "").trim());
      return { id: id + ":" + f, fr: f, tr: t, en: e, note: n || "" };
    })
  });

  window.DECKS.push(
    D("a1-animals", "A1", "Animals", "Hayvanlar", "Les animaux", `
le chien|köpek|the dog
le chat|kedi|the cat
le chaton|yavru kedi|the kitten
le chiot|yavru köpek|the puppy
l'oiseau (m.)|kuş|the bird|Plural: les oiseaux.
le poisson|balık|the fish
le poisson rouge|japon balığı|the goldfish
le lapin|tavşan|the rabbit
la souris|fare|the mouse|Also the computer mouse.
le cheval|at|the horse|Plural: les chevaux.
la vache|inek|the cow
le cochon|domuz|the pig
le mouton|koyun|the sheep
la chèvre|keçi|the goat
la poule|tavuk|the hen|le poulet = chicken (meat)
le canard|ördek|the duck
l'âne (m.)|eşek|the donkey
le lion|aslan|the lion
le tigre|kaplan|the tiger
l'ours (m.)|ayı|the bear
le loup|kurt|the wolf
le renard|tilki|the fox
le singe|maymun|the monkey
l'éléphant (m.)|fil|the elephant
la girafe|zürafa|the giraffe
le serpent|yılan|the snake
la tortue|kaplumbağa|the tortoise, turtle
l'abeille (f.)|arı|the bee
l'araignée (f.)|örümcek|the spider
le moustique|sivrisinek|the mosquito
le dauphin|yunus|the dolphin
l'animal de compagnie (m.)|evcil hayvan|the pet|Plural: les animaux de compagnie.
le vétérinaire|veteriner|the vet|Short: « le véto ».
Tu as un animal ?|Evcil hayvanın var mı?|Do you have a pet?
J'ai un chat qui s'appelle Milo.|Milo adında bir kedim var.|I have a cat called Milo.
J'ai peur des chiens.|Köpeklerden korkarım.|I'm scared of dogs.
Je promène le chien.|Köpeği gezdiriyorum.|I'm walking the dog.
Il est trop mignon !|Çok tatlı!|He's so cute!|trop = very (informal)
Le chat dort sur le canapé.|Kedi kanepede uyuyor.|The cat is sleeping on the sofa.`),

    D("a1-kitchen", "A1", "Kitchen & cooking verbs", "Mutfak ve yemek yapma fiilleri", "La cuisine : ustensiles et verbes", `
la cuisine|mutfak; yemek yapma|the kitchen; cooking
faire la cuisine|yemek yapmak|to cook
la casserole|tencere|the saucepan
la poêle|tava|the frying pan
le four|fırın|the oven
le micro-ondes|mikrodalga fırın|the microwave
la plaque de cuisson|ocak|the hob, stovetop
le frigo|buzdolabı|the fridge|Formal: le réfrigérateur.
le congélateur|dondurucu|the freezer
le couteau|bıçak|the knife
la planche à découper|kesme tahtası|the chopping board
le saladier|salata kasesi|the salad bowl
l'évier (m.)|eviye|the kitchen sink
la recette|tarif|the recipe
les ingrédients (m.)|malzemeler|the ingredients
couper|kesmek|to cut
éplucher|soymak|to peel
laver les légumes|sebzeleri yıkamak|to wash the vegetables
mélanger|karıştırmak|to mix, stir
faire cuire|pişirmek|to cook (something)|Faire cuire les pâtes 10 minutes.
faire bouillir l'eau|suyu kaynatmak|to boil the water
faire chauffer|ısıtmak|to heat up
griller|ızgara yapmak, kızartmak|to grill, toast
ajouter le sel|tuzu eklemek|to add the salt
verser|dökmek|to pour
goûter|tadına bakmak|to taste|Also: le goûter = afternoon snack.
mettre au four|fırına koymak|to put in the oven
mettre la table|sofrayı kurmak|to set the table
C'est prêt !|Hazır!|It's ready!
À table !|Sofraya!|Food's ready! Come and eat!
Ça sent bon !|Güzel kokuyor!|That smells good!
Tu peux m'aider à cuisiner ?|Yemek yapmama yardım edebilir misin?|Can you help me cook?
Attention, c'est chaud !|Dikkat, sıcak!|Careful, it's hot!`),

    D("a1-hobbies", "A1", "Hobbies & free time verbs", "Hobiler ve boş zaman fiilleri", "Les loisirs et le temps libre", `
le loisir|hobi, boş zaman etkinliği|the hobby, leisure activity
lire un livre|kitap okumak|to read a book
écouter de la musique|müzik dinlemek|to listen to music
jouer de la guitare|gitar çalmak|to play the guitar|jouer DE + instrument
jouer du piano|piyano çalmak|to play the piano|de + le = du
jouer aux échecs|satranç oynamak|to play chess|jouer À + game
jouer aux jeux vidéo|video oyunu oynamak|to play video games
chanter|şarkı söylemek|to sing
danser|dans etmek|to dance
dessiner|resim çizmek|to draw
peindre|resim yapmak, boyamak|to paint
faire de la photo|fotoğrafçılıkla uğraşmak|to do photography
faire du jardinage|bahçeyle uğraşmak|to do gardening
faire du tricot|örgü örmek|to knit
faire de la poterie|çömlekçilik yapmak|to do pottery
faire du théâtre|tiyatro yapmak|to do drama|faire DE + activity
aller au musée|müzeye gitmek|to go to the museum
aller à un concert|konsere gitmek|to go to a concert
regarder une série|dizi izlemek|to watch a series
boire un verre avec des amis|arkadaşlarla bir şeyler içmek|to have a drink with friends
faire des puzzles|yapboz yapmak|to do jigsaw puzzles
faire de la couture|dikiş dikmek|to sew
jouer dans un groupe|bir grupta çalmak|to play in a band
Qu'est-ce que tu fais le week-end ?|Hafta sonu ne yapıyorsun?|What do you do at the weekend?
Qu'est-ce que tu aimes faire ?|Ne yapmayı seversin?|What do you like doing?
J'adore lire.|Okumaya bayılırım.|I love reading.
Je n'aime pas trop danser.|Dans etmeyi pek sevmem.|I don't really like dancing.
Je fais du yoga deux fois par semaine.|Haftada iki kez yoga yapıyorum.|I do yoga twice a week.
Mon passe-temps préféré, c'est la cuisine.|En sevdiğim hobi yemek yapmak.|My favourite pastime is cooking.`),

    D("a1-people", "A1", "Describing people", "İnsanları tarif etmek", "Décrire une personne", `
grand / grande|uzun boylu|tall
petit / petite|kısa boylu|short (height)
fort / forte|iri yapılı|big, well-built|A polite way to say heavy.
jeune|genç|young
âgé / âgée|yaşlı|elderly|More polite than « vieux ».
blond / blonde|sarışın|blond
brun / brune|esmer, koyu saçlı|dark-haired
roux / rousse|kızıl saçlı|red-haired
les cheveux longs (m.)|uzun saç|long hair
les cheveux courts (m.)|kısa saç|short hair
les cheveux frisés (m.)|kıvırcık saç|curly hair
les yeux bleus (m.)|mavi gözler|blue eyes
les yeux marron (m.)|kahverengi gözler|brown eyes|marron never changes.
la barbe|sakal|the beard
la moustache|bıyık|the moustache
porter des lunettes|gözlük takmak|to wear glasses
beau / belle|yakışıklı / güzel|handsome / beautiful
sympa|cana yakın, hoş|nice, friendly|Short for sympathique; same for m. and f.
gentil / gentille|nazik, iyi kalpli|kind
drôle|komik|funny
timide|utangaç|shy
bavard / bavarde|geveze, konuşkan|chatty
calme|sakin|calm
sportif / sportive|sporcu, sportif|sporty
travailleur / travailleuse|çalışkan|hard-working
paresseux / paresseuse|tembel|lazy
curieux / curieuse|meraklı|curious
généreux / généreuse|cömert|generous
sérieux / sérieuse|ciddi|serious
Il est comment ?|Nasıl biri?|What's he like?
Elle a les cheveux bruns et les yeux verts.|Koyu renk saçları ve yeşil gözleri var.|She has dark hair and green eyes.|avoir les cheveux…: with avoir!
Il mesure 1,80 m.|Boyu 1,80.|He's 1.80 m tall.
Elle a l'air sympa.|Cana yakın birine benziyor.|She seems nice.
Il ressemble à son père.|Babasına benziyor.|He looks like his father.`),

    D("a1-class", "A1", "In French class", "Fransızca dersinde", "En cours de français", `
Pardon, vous pouvez répéter la question ?|Pardon, soruyu tekrar edebilir misiniz?|Sorry, could you repeat the question?
Vous pouvez parler plus lentement ?|Daha yavaş konuşabilir misiniz?|Could you speak more slowly?
Comment on dit « kitap » en français ?|"Kitap" Fransızcada nasıl denir?|How do you say "kitap" in French?
Que veut dire « bientôt » ?|"Bientôt" ne demek?|What does "bientôt" mean?
Comment ça s'écrit ?|Nasıl yazılıyor?|How is that spelt?
Vous pouvez épeler ?|Harf harf söyler misiniz?|Can you spell it?
J'ai une question.|Bir sorum var.|I have a question.
C'est à quelle page ?|Hangi sayfada?|Which page is it on?
J'ai oublié mon cahier.|Defterimi unuttum.|I forgot my exercise book.
Excusez-moi, je suis en retard.|Affedersiniz, geç kaldım.|Sorry, I'm late.
C'est masculin ou féminin ?|Eril mi, dişil mi?|Is it masculine or feminine?
On se tutoie ?|Senli benli konuşalım mı?|Shall we use « tu »?
le cahier|defter|the exercise book
le stylo|tükenmez kalem|the pen
le crayon|kurşun kalem|the pencil
la trousse|kalem kutusu|the pencil case
le surligneur|fosforlu kalem|the highlighter
la feuille|kağıt (yaprak)|the sheet of paper
le, la prof|öğretmen|the teacher|Short for le professeur, la professeure.
l'exercice (m.)|alıştırma|the exercise
les devoirs (m.)|ödev|the homework
la faute|hata|the mistake
le mot|kelime|the word
la phrase|cümle|the sentence
Ouvrez votre livre page 12.|Kitabınızı 12. sayfada açın.|Open your book at page 12.
Écoutez et répétez.|Dinleyin ve tekrar edin.|Listen and repeat.
Lisez le texte.|Metni okuyun.|Read the text.
Complétez les phrases.|Cümleleri tamamlayın.|Complete the sentences.
Cochez la bonne réponse.|Doğru cevabı işaretleyin.|Tick the right answer.
Travaillez à deux.|İkişerli çalışın.|Work in pairs.
Soulignez les verbes.|Fiillerin altını çizin.|Underline the verbs.
Vrai ou faux ?|Doğru mu, yanlış mı?|True or false?
C'est correct ?|Doğru mu?|Is that right?
Ce n'est pas grave, on apprend !|Önemli değil, öğreniyoruz!|It doesn't matter, we're learning!`),

    D("a1-near-future", "A1", "Near future & plans", "Yakın gelecek ve planlar", "Le futur proche et les projets", `
Je vais manger.|Yemek yiyeceğim.|I'm going to eat.|aller + infinitive
Tu vas venir ?|Gelecek misin?|Are you going to come?
Il va pleuvoir.|Yağmur yağacak.|It's going to rain.
Nous allons partir en vacances.|Tatile gideceğiz.|We're going to go on holiday.
Vous allez rester combien de temps ?|Ne kadar kalacaksınız?|How long are you going to stay?
Ils vont arriver à 20 h.|Saat 20'de gelecekler.|They're going to arrive at 8 pm.
Je ne vais pas sortir ce soir.|Bu akşam dışarı çıkmayacağım.|I'm not going to go out tonight.|ne… pas goes around « aller ».
Qu'est-ce que tu vas faire demain ?|Yarın ne yapacaksın?|What are you going to do tomorrow?
Je vais faire les courses.|Alışveriş yapacağım.|I'm going to do the shopping.
Je vais me reposer.|Dinleneceğim.|I'm going to rest.|me goes before the infinitive.
Elle va commencer un nouveau travail.|Yeni bir işe başlayacak.|She's going to start a new job.
On va voir.|Göreceğiz.|We'll see.
On va voir un film ce soir ?|Bu akşam film izleyelim mi?|Shall we watch a film tonight?
Je vais t'appeler demain.|Yarın seni arayacağım.|I'll call you tomorrow.
Je vais m'inscrire à la salle de sport.|Spor salonuna kaydolacağım.|I'm going to join the gym.
Je vais apprendre à nager.|Yüzmeyi öğreneceğim.|I'm going to learn to swim.
Ça va être super !|Harika olacak!|It's going to be great!
Tu es libre samedi ?|Cumartesi boş musun?|Are you free on Saturday?
J'ai un projet pour l'été.|Yaz için bir planım var.|I have a plan for the summer.
demain matin|yarın sabah|tomorrow morning
demain soir|yarın akşam|tomorrow evening
ce week-end|bu hafta sonu|this weekend
samedi prochain|gelecek cumartesi|next Saturday
dans deux jours|iki gün sonra|in two days
dans une heure|bir saat sonra|in an hour
tout à l'heure|birazdan|in a little while|Also « a little while ago ».
bientôt|yakında|soon
plus tard|daha sonra|later
le projet|plan, proje|the plan, project
d'abord… ensuite…|önce… sonra…|first… then…`),

    D("a2-imparfait", "A2", "Common imparfait forms", "Sık kullanılan imparfait biçimleri", "L'imparfait au quotidien", `
il y avait|vardı|there was, there were
il faisait beau|hava güzeldi|the weather was nice
il pleuvait|yağmur yağıyordu|it was raining
il faisait froid|hava soğuktu|it was cold
j'étais fatigué(e)|yorgundum|I was tired
j'avais faim|açtım|I was hungry
j'avais dix ans|on yaşındaydım|I was ten years old
je voulais|istiyordum|I wanted
je pouvais|-ebiliyordum|I could, I was able to
je savais|biliyordum|I knew
je devais partir|gitmem gerekiyordu|I was supposed to leave
je pensais que…|… diye düşünüyordum|I thought that…
je croyais que…|… sanıyordum|I believed that…
on allait à la mer|denize giderdik|we used to go to the seaside|on = nous in speech
nous habitions à Istanbul|İstanbul'da otururduk|we lived in Istanbul
je jouais au handball|hentbol oynardım|I used to play handball
je faisais du sport tous les jours|her gün spor yapardım|I did sport every day
elle travaillait|çalışıyordu, çalışırdı|she was working, she used to work
ils mangeaient|yiyorlardı|they were eating
Vous étiez où ?|Neredeydiniz?|Where were you?
Tu dormais ?|Uyuyor muydun?|Were you sleeping?
Il y avait du monde.|Kalabalıktı.|It was crowded.
Quand j'étais petite…|Ben küçükken…|When I was little… (woman speaking)
Avant, je fumais.|Eskiden sigara içerdim.|I used to smoke.
D'habitude, on mangeait à midi.|Genelde öğlen yerdik.|We usually ate at noon.
Je lisais quand tu as appelé.|Sen aradığında okuyordum.|I was reading when you called.|Imparfait = background; passé composé = event.
C'était comment ?|Nasıldı?|How was it?
C'était super !|Harikaydı!|It was great!
Ce n'était pas facile.|Kolay değildi.|It wasn't easy.
Il était une fois…|Bir varmış, bir yokmuş…|Once upon a time…
Mon grand-père était boulanger.|Dedem fırıncıydı.|My grandfather was a baker.
Je ne savais pas !|Bilmiyordum!|I didn't know!`),

    D("a2-y-en", "A2", "Y and en in set phrases", "Kalıp ifadelerde y ve en", "Y et en dans les expressions", `
J'y vais.|Gidiyorum.|I'm going (there). I'm off.|y = there (a place already mentioned)
On y va ?|Gidelim mi?|Shall we go?
Allons-y !|Haydi gidelim!|Let's go!
Vas-y !|Hadi! Haydi!|Go on! Go for it!
J'y pense.|Onu düşünüyorum.|I'm thinking about it.|penser à quelque chose → y
N'y pense plus.|Artık onu düşünme.|Don't think about it any more.
J'y suis allée hier.|Dün oraya gittim.|I went there yesterday. (woman speaking)
Tu y vas comment ?|Oraya nasıl gidiyorsun?|How do you get there?
Je n'y arrive pas.|Beceremiyorum.|I can't manage it.|arriver à faire quelque chose
Ça y est !|Tamam, oldu!|That's it! Done!
Je m'y habitue.|Alışıyorum.|I'm getting used to it.|s'habituer à → y
Je n'y crois pas !|İnanamıyorum!|I can't believe it!
Je n'y peux rien.|Elimden bir şey gelmez.|There's nothing I can do about it.
J'en ai un.|Bir tane var.|I have one (of them).|en = of it, of them
J'en ai deux.|İki tane var.|I have two (of them).
Je n'en ai pas.|Hiç yok.|I don't have any.
J'en veux un peu.|Biraz istiyorum.|I'd like a bit (of it).
Tu en veux ?|İster misin?|Do you want some?
Combien en voulez-vous ?|Kaç tane istiyorsunuz?|How many do you want?
Il en reste ?|Kaldı mı?|Is there any left?
Il n'en reste plus.|Hiç kalmadı.|There's none left.
J'en ai marre !|Bıktım!|I'm fed up!|Informal.
J'en ai besoin.|Ona ihtiyacım var.|I need it.|avoir besoin de → en
On en parle demain ?|Bunu yarın konuşalım mı?|Shall we talk about it tomorrow?|parler de → en
Qu'est-ce que tu en penses ?|Bu konuda ne düşünüyorsun?|What do you think about it?
Je m'en vais.|Ben gidiyorum.|I'm leaving.|s'en aller = to leave
Je m'en occupe.|Ben hallederim.|I'll take care of it.
Je n'en peux plus.|Artık dayanamıyorum.|I can't take it any more.
J'en reviens pas !|Hâlâ inanamıyorum!|I can't get over it!|Spoken: « ne » dropped.
Je m'en souviens.|Hatırlıyorum.|I remember it.|se souvenir de → en`),

    D("a2-injuries", "A2", "Injuries, first aid & A&E", "Yaralanmalar, ilk yardım ve acil servis", "Blessures, premiers secours et urgences", `
se blesser|yaralanmak|to get hurt
se couper le doigt|parmağını kesmek|to cut one's finger
se brûler|yanmak, elini yakmak|to burn oneself
la brûlure|yanık|the burn
se cogner la tête|başını çarpmak|to bang one's head
la bosse|şişlik (kafada)|the bump, lump
le bleu|morluk|the bruise|Also: un hématome.
saigner|kanamak|to bleed
la plaie|açık yara|the wound
le pansement|yara bandı, pansuman|the plaster, dressing
le désinfectant|dezenfektan|the disinfectant
la compresse|gazlı bez|the gauze pad, compress
la bande|sargı bezi|the bandage
la poche de glace|buz torbası|the ice pack
la trousse de secours|ilk yardım çantası|the first-aid kit
les premiers secours (m.)|ilk yardım|first aid
la PLS|yan yatış (koma) pozisyonu|the recovery position|Position latérale de sécurité.
appeler le 15|15'i (SAMU) aramak|to call 15 (ambulance)|15 = SAMU, 18 = pompiers, 112 = Europe.
les pompiers (m.)|itfaiye|the fire brigade|In France they also give first aid.
les secours (m.)|kurtarma ekipleri|the emergency services
la salle d'attente|bekleme salonu|the waiting room
le brancard|sedye|the stretcher
l'infirmier d'accueil (m.)|triyaj hemşiresi|the triage nurse|f.: l'infirmière d'accueil.
le plâtre|alçı|the plaster cast
les points de suture (m.)|dikiş|the stitches
les béquilles (f.)|koltuk değnekleri|the crutches
l'attelle (f.)|atel|the splint, brace
Il est tombé dans l'escalier.|Merdivenlerden düştü.|He fell down the stairs.
Je me suis coupée avec un couteau.|Bıçakla elimi kestim.|I cut myself with a knife. (woman speaking)
Ça saigne beaucoup.|Çok kanıyor.|It's bleeding a lot.
Ne bougez pas, les secours arrivent.|Kıpırdamayın, yardım geliyor.|Don't move, help is coming.
Il est conscient ?|Bilinci yerinde mi?|Is he conscious?
Il faut attendre combien de temps ?|Ne kadar beklemek gerekiyor?|How long do we have to wait?
On va vous faire une radio.|Size röntgen çekeceğiz.|We're going to X-ray you.
Ce n'est pas cassé, c'est juste une entorse.|Kırık değil, sadece burkulma.|It's not broken, just a sprain.`),

    D("a2-chores", "A2", "Housework & chores", "Ev işleri", "Les tâches ménagères", `
les tâches ménagères (f.)|ev işleri|household chores
faire le ménage|temizlik yapmak|to do the cleaning
passer l'aspirateur|elektrik süpürgesi çekmek|to vacuum, hoover
l'aspirateur (m.)|elektrik süpürgesi|the vacuum cleaner
passer la serpillière|paspas yapmak|to mop the floor
balayer|süpürmek|to sweep
le balai|süpürge|the broom
faire la poussière|toz almak|to dust
faire la lessive|çamaşır yıkamak|to do the laundry
étendre le linge|çamaşır asmak|to hang out the washing
le linge sale|kirli çamaşır|the dirty laundry
plier les vêtements|kıyafetleri katlamak|to fold the clothes
repasser|ütülemek|to iron
le fer à repasser|ütü|the iron
le lave-vaisselle|bulaşık makinesi|the dishwasher
vider le lave-vaisselle|bulaşık makinesini boşaltmak|to empty the dishwasher
faire la vaisselle|bulaşık yıkamak|to do the dishes
faire le lit|yatağı toplamak|to make the bed
ranger sa chambre|odasını toplamak|to tidy one's room
sortir la poubelle|çöpü çıkarmak|to take out the bin
nettoyer la salle de bain|banyoyu temizlemek|to clean the bathroom
laver les vitres|camları silmek|to clean the windows
arroser les plantes|çiçekleri sulamak|to water the plants
l'éponge (f.)|sünger|the sponge
le produit ménager|temizlik ürünü|the cleaning product
le chiffon|bez|the cloth
C'est ton tour !|Sıra sende!|It's your turn!
On partage les tâches.|İşleri paylaşıyoruz.|We share the chores.
J'ai horreur de repasser.|Ütü yapmaktan nefret ederim.|I hate ironing.
C'est le bazar ici !|Burası darmadağın!|It's a mess in here!|Informal.
La maison est propre.|Ev temiz.|The house is clean.
J'ai fait le ménage ce matin.|Bu sabah temizlik yaptım.|I did the cleaning this morning.`),

    D("a2-environment", "A2", "Environment & recycling", "Çevre ve geri dönüşüm", "L'environnement et le recyclage", `
l'environnement (m.)|çevre|the environment
la planète|gezegen|the planet
la pollution|kirlilik|pollution
le climat|iklim|the climate
le réchauffement climatique|küresel ısınma|global warming
recycler|geri dönüştürmek|to recycle
le recyclage|geri dönüşüm|recycling
trier les déchets|çöpleri ayırmak|to sort the waste
les déchets (m.)|atıklar, çöp|waste, rubbish
la poubelle jaune|sarı çöp kutusu (geri dönüşüm)|the yellow bin (recycling)|In many French towns: packaging, cans, paper.
le verre|cam|glass
le carton|karton|cardboard
le plastique|plastik|plastic
l'emballage (m.)|ambalaj|the packaging
le compost|kompost|compost
jeter|atmak|to throw away
gaspiller|israf etmek|to waste
le gaspillage alimentaire|gıda israfı|food waste
économiser l'eau|su tasarrufu yapmak|to save water
éteindre la lumière|ışığı kapatmak|to switch off the light
l'énergie (f.)|enerji|energy
prendre les transports en commun|toplu taşıma kullanmak|to use public transport
la gourde|matara|the reusable water bottle
le sac réutilisable|tekrar kullanılabilir çanta|the reusable bag
de saison|mevsiminde|in season|des fruits de saison
local / locale|yerel|local
bio|organik|organic|des légumes bio
protéger la nature|doğayı korumak|to protect nature
la déchetterie|atık toplama merkezi|the recycling centre, tip
On jette le verre où ?|Camı nereye atıyoruz?|Where do we throw the glass?
Il ne faut pas gaspiller.|İsraf etmemek lazım.|We mustn't waste.
Je viens au travail à vélo.|İşe bisikletle geliyorum.|I come to work by bike.
C'est bon pour la planète.|Gezegen için iyi.|It's good for the planet.`),

    D("a2-online-shopping", "A2", "Online shopping & delivery", "İnternetten alışveriş ve teslimat", "Achats en ligne et livraison", `
acheter en ligne|internetten satın almak|to buy online
le site|web sitesi|the website
commander|sipariş vermek|to order
la commande|sipariş|the order
le panier|sepet|the basket, cart
ajouter au panier|sepete eklemek|to add to basket
le compte client|müşteri hesabı|the customer account
payer par carte|kartla ödemek|to pay by card
le paiement sécurisé|güvenli ödeme|secure payment
le code promo|indirim kodu|the discount code
les frais de port (m.)|kargo ücreti|shipping costs
la livraison gratuite|ücretsiz teslimat|free delivery
livrer|teslim etmek|to deliver
le livreur, la livreuse|kurye|the delivery person
le colis|koli, paket|the parcel
le point relais|teslimat noktası|the pick-up point|Often a small shop near you.
le suivi de commande|sipariş takibi|order tracking
le numéro de suivi|takip numarası|the tracking number
l'adresse de livraison (f.)|teslimat adresi|the delivery address
l'avis de passage (m.)|kuryenin bıraktığı bilgi notu|the "sorry we missed you" card|Left when you're not home.
retourner un article|bir ürünü iade etmek|to return an item
le remboursement|para iadesi|the refund
le service client|müşteri hizmetleri|customer service
en rupture de stock|stokta yok|out of stock
l'avis client (m.)|müşteri yorumu|the customer review
Ma commande n'est pas arrivée.|Siparişim gelmedi.|My order hasn't arrived.
Le colis est arrivé abîmé.|Paket hasarlı geldi.|The parcel arrived damaged.
Je voudrais me faire rembourser.|Paramı geri almak istiyorum.|I'd like a refund.
La livraison prend combien de jours ?|Teslimat kaç gün sürüyor?|How many days does delivery take?
J'ai reçu un SMS du livreur.|Kuryeden SMS aldım.|I got a text from the delivery driver.
Je ne suis pas là, vous pouvez le laisser chez la voisine ?|Evde değilim, komşuya bırakabilir misiniz?|I'm not in, can you leave it with the neighbour?`)
  );
})();
