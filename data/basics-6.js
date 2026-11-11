/* Basics, part 6: transport and tickets, cooking in the kitchen, instructions in a sports class, small talk and polite formulas. Loads right after data/basics-5.js. */
(function () {
  // item line: "fr|tr|en" or "fr|tr|en|say" or "fr|tr|en|say|ex". say = what the French voice reads (default: fr, leave empty to keep default). ex = optional short French example (word or phrase) also read aloud.
  const I = s => s.trim().split("\n").map(l => { const [fr, tr, en, say, ex] = l.split("|").map(x => x.trim()); return { fr, tr, en, say: say || "", ex: ex || "" }; });
  const G = (fr, tr, en, items, tip) => ({ t: { fr, tr, en }, items: I(items), tip: tip || null });
  window.BASICS = window.BASICS || [];
  window.BASICS.push(

    /* ───────────── 45. Transport and tickets ───────────── */
    { id: "transport", emoji: "🚆", kind: "words", t: { fr: "Les transports et les billets", tr: "Toplu taşıma ve biletler", en: "Transport & tickets" },
      intro: {
        fr: "Bus, tram, métro, train… En France, on prend souvent les transports en commun. Avec ces mots, vous pouvez acheter un billet, trouver le bon quai et comprendre les annonces, même quand le train a du retard (ça arrive !).",
        tr: "Otobüs, tramvay, metro, tren… Fransa'da toplu taşıma çok kullanılır. Bu kelimelerle bilet alabilir, doğru peronu bulabilir ve anonsları anlayabilirsiniz; tren geciktiğinde bile (ki olur!). Grev günlerinde de paniğe gerek yok: herkes aynı durumda.",
        en: "Bus, tram, metro, train… In France, people use public transport a lot. With these words you can buy a ticket, find the right platform and understand the announcements, even when the train is late (it happens!)."
      },
      groups: [
        G("Les billets et les cartes", "Biletler ve kartlar", "Tickets and passes", `
un billet|bilet (tren)|a ticket (train)||Un billet pour Lyon, s'il vous plaît.
un ticket à l'unité|tek kullanımlık bilet|a single ticket (bus, metro)||Un ticket à l'unité coûte deux euros.
un aller simple|tek yön bilet|a one-way ticket||Un aller simple pour Paris.
un aller-retour|gidiş-dönüş bilet|a return ticket||Un aller-retour pour Marseille.
un carnet de dix tickets|on biletlik paket|a pack of ten tickets||Un carnet, c'est moins cher.
un abonnement mensuel|aylık abonman|a monthly pass||J'ai un abonnement mensuel.
la carte de transport|ulaşım kartı|the travel card||Je recharge ma carte de transport.
le tarif réduit|indirimli tarife|the reduced fare||Il y a un tarif réduit pour les étudiants ?
le guichet|gişe|the ticket office||Le guichet ouvre à six heures.
la borne automatique|bilet otomatı|the ticket machine||La borne automatique est en panne.`, {
          fr: "« Billet » pour le train, « ticket » pour le bus et le métro (mais beaucoup de gens mélangent, pas de panique). Étudiant ? Demandez toujours le tarif réduit : on économise vite !",
          tr: "Tren için genelde 'billet', otobüs ve metro için 'ticket' denir (ama Fransızlar da karıştırır, dert etmeyin). Türkiye'deki İstanbulkart gibi, Fransa'daki şehirlerin de kendi ulaşım kartı var. Öğrenciyseniz mutlaka 'tarif réduit' (indirimli tarife) sorun!",
          en: "« Billet » is for trains, « ticket » for buses and the metro (though many people mix them up). Student? Always ask for the reduced fare: the savings add up fast!"
        }),
        G("À la gare et dans le métro", "Garda ve metroda", "At the station and in the metro", `
la voie|peron (hat numarası)|the track, platform number||Le train part voie quatre.
le départ|kalkış|departure||Départ à neuf heures.
l'arrivée|varış|arrival||Arrivée à midi.
le panneau d'affichage|bilgi panosu|the departure board||Regarde le panneau d'affichage !
la ligne|hat|the line||Je prends la ligne 2.
la direction|yön (son durağın adı)|the direction (end of the line)||Prenez la ligne 1, direction La Défense.
la correspondance|aktarma|the connection, change||Il y a une correspondance à Châtelet.
le terminus|son durak|the last stop||Terminus, tout le monde descend !
la voiture|vagon (trende)|the carriage (on a train)||Ma place est dans la voiture 12.
côté fenêtre / côté couloir|cam kenarı / koridor tarafı|window seat / aisle seat|côté fenêtre, côté couloir|Une place côté fenêtre, s'il vous plaît.`, {
          fr: "Dans le métro, on ne suit pas le nord ou le sud : on suit la « direction », c'est-à-dire le nom du dernier arrêt de la ligne. Et dans le train, « la voiture », ce n'est pas une auto : c'est le wagon !",
          tr: "Metroda yönü kuzey-güney diye değil, hattın son durağının adıyla bulursunuz: 'direction La Défense'. İstanbul'da 'Hacıosman yönü' demek gibi. Trende 'la voiture' araba değil, vagon demektir; biletinizde 'voiture 12' yazıyorsa 12 numaralı vagona binin.",
          en: "In the metro you don't follow north or south: you follow the « direction », the name of the last stop on the line. On a train, « la voiture » isn't a car: it's the carriage!"
        }),
        G("Les verbes du trajet", "Yolculuk fiilleri", "Travel verbs", `
prendre le bus|otobüse binmek, otobüsle gitmek|to take the bus||Je prends le bus tous les matins.
monter dans le train|trene binmek|to get on the train||Je monte dans le train.
descendre du bus|otobüsten inmek|to get off the bus||Je descends au prochain arrêt.
changer de ligne|hat değiştirmek|to change lines||Il faut changer de ligne à République.
valider son ticket|biletini okutmak|to validate your ticket||Validez votre ticket en montant.
rater le bus|otobüsü kaçırmak|to miss the bus||Zut, j'ai raté le bus !
attendre le prochain|bir sonrakini beklemek|to wait for the next one||J'attends le prochain.
réserver une place|yer ayırtmak|to book a seat||Je réserve une place sur internet.
arriver à l'heure|zamanında varmak|to arrive on time||J'espère arriver à l'heure.`, {
          fr: "On « monte » dans un bus ou un train et on en « descend ». En France, on valide son ticket à chaque voyage : sans validation, le ticket ne compte pas, même si vous l'avez payé !",
          tr: "Fransızcada araca 'binilmez', araca 'çıkılır': monter dans le bus; inerken de 'descendre' (aşağı inmek) kullanılır. Bileti almak yetmez, her binişte 'valider' (makineye okutmak) gerekir. Okutulmamış bilet, kontrolde bilet yok sayılır!",
          en: "You « monte » (go up) into a bus or train and « descend » (go down) from it. In France you validate your ticket on every trip: an unvalidated ticket doesn't count, even if you paid for it!"
        }),
        G("Problèmes et annonces", "Sorunlar ve anonslar", "Problems and announcements", `
en retard|gecikmeli, geç|late, delayed||Le bus est en retard.
annulé|iptal edildi|cancelled||Le train de huit heures est annulé.
complet|dolu|full||Désolé, le train est complet.
la grève|grev|the strike||Demain, il y a une grève des transports.
un incident technique|teknik arıza|a technical problem||Suite à un incident technique, le trafic est interrompu.
le contrôleur / la contrôleuse|kondüktör, bilet kontrolörü|the ticket inspector|le contrôleur, la contrôleuse|Le contrôleur vérifie les billets.
une amende|para cezası|a fine||Sans ticket, c'est une amende !
Attention à la fermeture des portes.|Kapılar kapanıyor, dikkat edin.|Mind the closing doors.
Le prochain bus passe dans 10 minutes.|Bir sonraki otobüs 10 dakika sonra geliyor.|The next bus comes in 10 minutes.|Le prochain bus passe dans dix minutes.`, {
          fr: "Les annonces vont vite, mais cherchez trois mots-clés : « retard », « annulé », « voie ». Si vous ne comprenez rien, demandez à quelqu'un : « Pardon, qu'est-ce qu'ils ont dit ? » Les Français aussi se le demandent !",
          tr: "Anonslar hızlıdır ama üç anahtar kelimeye odaklanın: 'retard' (gecikme), 'annulé' (iptal), 'voie' (peron). Hiçbir şey anlamadıysanız yanınızdakine sorun: 'Pardon, qu'est-ce qu'ils ont dit ?' (Pardon, ne dediler?). Merak etmeyin, Fransızlar da birbirine bunu sorar!",
          en: "Announcements are fast, so listen for three key words: « retard », « annulé », « voie ». If you catch nothing, ask someone: « Pardon, qu'est-ce qu'ils ont dit ? » French people ask each other that too!"
        }),
        G("Questions utiles", "İşe yarar sorular", "Useful questions", `
Un aller-retour pour Lyon, s'il vous plaît.|Lyon'a gidiş-dönüş bir bilet, lütfen.|A return ticket to Lyon, please.
À quelle heure part le prochain train ?|Bir sonraki tren saat kaçta kalkıyor?|What time does the next train leave?
C'est quelle voie pour Bordeaux ?|Bordeaux treni hangi perondan kalkıyor?|Which platform for Bordeaux?
Ce bus va à la gare ?|Bu otobüs gara gidiyor mu?|Does this bus go to the station?
C'est direct ?|Aktarmasız mı?|Is it direct?
Il faut changer ?|Aktarma yapmak gerekiyor mu?|Do I have to change?
C'est quel arrêt pour la piscine ?|Havuz için hangi durakta inmeliyim?|Which stop for the swimming pool?
Où est-ce que j'achète un ticket ?|Bileti nereden alabilirim?|Where can I buy a ticket?
Cette place est libre ?|Bu koltuk boş mu?|Is this seat free?`, {
          fr: "Pas besoin de phrases compliquées : « Ce bus va à la gare ? » avec une intonation qui monte, c'est parfait. Dans le bus, vous pouvez aussi demander au chauffeur de vous prévenir : « Vous pouvez me dire quand descendre ? »",
          tr: "Karmaşık cümlelere gerek yok: 'Ce bus va à la gare ?' cümlesini sonunda sesinizi yükselterek söylemek yeterli. Otobüste şoföre 'Vous pouvez me dire quand descendre ?' (Ne zaman ineceğimi söyler misiniz?) diye de sorabilirsiniz; çoğu şoför seve seve yardım eder.",
          en: "No need for complicated sentences: « Ce bus va à la gare ? » with rising intonation is perfect. On the bus you can also ask the driver: « Vous pouvez me dire quand descendre ? » (Can you tell me when to get off?)"
        })
      ] },

    /* ───────────── 46. Cooking ───────────── */
    { id: "cooking", emoji: "🍳", kind: "words", t: { fr: "En cuisine : préparer un repas", tr: "Mutfakta: yemek hazırlamak", en: "In the kitchen: cooking a meal" },
      intro: {
        fr: "Lire une recette, cuisiner avec des amis, aider à la maison… Voici les ustensiles, les verbes et les quantités de la cuisine. Bonne nouvelle : une recette, c'est du français très simple et très concret. Et à la fin, on mange !",
        tr: "Tarif okumak, arkadaşlarla yemek yapmak, evde yardım etmek… İşte mutfak gereçleri, mutfak fiilleri ve ölçüler. İyi haber: yemek tarifleri çok basit ve somut bir Fransızcayla yazılır. Üstelik sonunda yemek var!",
        en: "Reading a recipe, cooking with friends, helping at home… Here are the kitchen tools, verbs and quantities. Good news: a recipe is very simple, concrete French. And at the end, you get to eat!"
      },
      groups: [
        G("Les ustensiles", "Mutfak gereçleri", "Kitchen tools", `
une casserole|tencere|a saucepan||Mets de l'eau dans la casserole.
une poêle|tava|a frying pan||Fais chauffer la poêle.
un couteau|bıçak|a knife||Attention, le couteau coupe bien !
une planche à découper|kesme tahtası|a chopping board||Prends la planche à découper.
un saladier|salata kâsesi, büyük kâse|a large bowl||Mélange tout dans un saladier.
une cuillère en bois|tahta kaşık|a wooden spoon||Tourne avec une cuillère en bois.
le four|fırın|the oven||Le gâteau est dans le four.
les plaques|ocak|the hob, stove top||Les plaques sont encore chaudes.
le micro-ondes|mikrodalga fırın|the microwave||Je réchauffe la soupe au micro-ondes.
le frigo|buzdolabı|the fridge||Il n'y a plus rien dans le frigo !`, {
          fr: "« Une poêle » se prononce comme « poil » [pwal] : c'est bizarre, mais c'est comme ça ! On dit « le frigo » dans la vie de tous les jours, et « le réfrigérateur » dans les magasins.",
          tr: "'Une poêle' (tava) kelimesi 'pual' gibi tek hecede okunur, yazılışına aldanmayın! Günlük hayatta buzdolabına 'le frigo' denir; 'le réfrigérateur' daha resmidir, mağazada duyarsınız. 'Une casserole' tencere demektir, Türkçedeki güveç anlamındaki 'kaserol' değil.",
          en: "« Une poêle » is pronounced like « poil » [pwal]: strange, but true! In everyday life people say « le frigo »; « le réfrigérateur » is what shops say."
        }),
        G("Préparer", "Hazırlamak", "Preparing", `
laver|yıkamak|to wash||Lave les légumes.
éplucher|soymak|to peel||J'épluche les pommes de terre.
couper|kesmek, doğramak|to cut||Coupe l'oignon en petits morceaux.
râper|rendelemek|to grate||Je râpe le fromage.
mélanger|karıştırmak|to mix, stir||Mélange bien !
battre les œufs|yumurtaları çırpmak|to beat the eggs||Bats les œufs avec le sucre.
ajouter|eklemek|to add||Ajoute un peu de sel.
verser|dökmek|to pour||Verse le lait doucement.
peser|tartmak|to weigh||Je pèse la farine.
goûter|tadına bakmak|to taste||Goûte la sauce !`, {
          fr: "Dans une recette écrite, les verbes sont souvent à l'infinitif (« Éplucher les carottes. ») ou à l'impératif avec vous (« Épluchez les carottes. »). Entre amis, on dit plutôt « Épluche les carottes ! »",
          tr: "Yazılı tariflerde fiiller genelde mastar halindedir ('Éplucher les carottes.' = Havuçları soymalı) ya da 'vous' ile emir kipindedir ('Épluchez…'). Arkadaşlar arasında mutfakta 'Épluche les carottes !' (Havuçları soy!) denir. Türkçedeki 'soyun, doğrayın, ekleyin' tarif diline çok benzer.",
          en: "In written recipes, verbs are often in the infinitive (« Éplucher les carottes. ») or the vous imperative (« Épluchez… »). Among friends in the kitchen: « Épluche les carottes ! »"
        }),
        G("Faire cuire", "Pişirmek", "Cooking with heat", `
faire cuire|pişirmek|to cook||Fais cuire les pâtes dix minutes.
faire bouillir l'eau|suyu kaynatmak|to boil the water||Je fais bouillir l'eau pour le thé.
faire revenir|hafifçe kavurmak|to brown, sauté||Fais revenir l'oignon dans l'huile.
faire frire|kızartmak|to deep-fry||Je fais frire les pommes de terre.
griller|ızgara yapmak, kızartmak|to grill, toast||Je grille le pain.
préchauffer le four|fırını önceden ısıtmak|to preheat the oven||Préchauffer le four à 180 degrés.
réchauffer|ısıtmak (hazır yemeği)|to reheat||Je réchauffe les restes.
à feu doux|kısık ateşte|on a low heat||Laisser cuire à feu doux.
à feu vif|yüksek ateşte|on a high heat||Saisir la viande à feu vif.
C'est cuit ?|Pişti mi?|Is it cooked?`, {
          fr: "« Faire cuire » est la formule magique : faire cuire le riz, la viande, les légumes… Pour la température du four, on dit « thermostat 6 » ou « 180 degrés ».",
          tr: "'Faire cuire' sihirli formüldür: faire cuire le riz (pilavı pişirmek), la viande (eti)… 'Faire revenir' Türk mutfağındaki 'soğanı kavurmak' için birebir; menemen yaparken kullanabilirsiniz! Fırın sıcaklığı 'thermostat 6' ya da '180 degrés' diye yazılır.",
          en: "« Faire cuire » is the magic formula: faire cuire le riz, la viande, les légumes… Oven temperature is written « thermostat 6 » or « 180 degrés »."
        }),
        G("Les quantités", "Ölçüler", "Quantities", `
une cuillère à soupe|bir yemek kaşığı|a tablespoon||Une cuillère à soupe d'huile.
une cuillère à café|bir çay kaşığı|a teaspoon||Une cuillère à café de sucre.
une pincée de sel|bir tutam tuz|a pinch of salt||Ajoute une pincée de sel.
un verre de lait|bir su bardağı süt|a glass of milk||Verse un verre de lait.
200 grammes de farine|200 gram un|200 grams of flour|deux cents grammes de farine
un demi-litre|yarım litre|half a litre||Un demi-litre d'eau.
une gousse d'ail|bir diş sarımsak|a clove of garlic||Coupe une gousse d'ail.
une tranche|bir dilim|a slice||Une tranche de pain, s'il te plaît.
un morceau|bir parça|a piece||Un petit morceau de gâteau ?
un peu de|biraz|a little||Un peu de poivre.`, {
          fr: "Après une quantité, on utilise « de » (ou « d' ») : un verre de lait, une gousse d'ail, un peu de sel. Pas de « du » ni de « la » !",
          tr: "Miktar bildiren kelimeden sonra hep 'de' (ünlüden önce 'd'') gelir: un verre de lait, une gousse d'ail, un peu de sel. 'Du' ya da 'de la' kullanılmaz. Dikkat: Fransız 'cuillère à café' (kahve kaşığı) bizim çay kaşığımızla aynı boydadır.",
          en: "After a quantity, use « de » (or « d' »): un verre de lait, une gousse d'ail, un peu de sel. Never « du » or « de la » here!"
        }),
        G("À table !", "Sofraya!", "Dinner's ready!", `
la recette|yemek tarifi|the recipe||Tu me donnes la recette ?
Ça sent bon !|Ne güzel kokuyor!|That smells good!
C'est trop salé.|Çok tuzlu olmuş.|It's too salty.
C'est un peu fade.|Biraz tatsız olmuş.|It's a bit bland.
C'est épicé ?|Acı mı?|Is it spicy?
C'est prêt !|Hazır!|It's ready!
À table !|Sofraya!|Dinner's ready! (come to the table)
Tu peux mettre la table ?|Sofrayı kurar mısın?|Can you set the table?
Tu me passes le sel ?|Tuzu uzatır mısın?|Can you pass me the salt?
Je fais la vaisselle.|Bulaşıkları ben yıkarım.|I'll do the dishes.`, {
          fr: "« À table ! », c'est le cri de toutes les familles françaises quand le repas est prêt. Et après le repas, proposer « Je fais la vaisselle » fait toujours très plaisir !",
          tr: "'À table !' Fransız ailelerde yemek hazır olunca söylenen klasik çağrıdır, tıpkı bizdeki 'Sofraya!' gibi. Misafirliğe gittiğinizde yemekten sonra 'Je fais la vaisselle' (Bulaşıkları ben yıkarım) demek her zaman çok hoş karşılanır. Tarif sormak da büyük iltifattır: 'Tu me donnes la recette ?'",
          en: "« À table ! » is what every French family calls out when the meal is ready. And after dinner, offering « Je fais la vaisselle » always goes down well!"
        })
      ] },

    /* ───────────── 47. Instructions in a sports class ───────────── */
    { id: "workout", emoji: "🤸", kind: "words", t: { fr: "En cours de sport : les consignes", tr: "Spor dersinde: komutlar", en: "In a workout class: instructions" },
      intro: {
        fr: "« Pliez les genoux ! Inspirez ! Encore cinq ! » Dans un cours collectif, chez le kiné ou à la salle, le coach donne beaucoup de consignes, et vite. Voici les plus fréquentes, pour suivre le cours… et pour les donner vous-même un jour !",
        tr: "'Dizlerinizi bükün! Nefes alın! Beş tane daha!' Grup derslerinde, fizyoterapistte ya da spor salonunda eğitmen çok sayıda komutu hızlıca verir. İşte en sık duyulanlar: dersi takip etmek için… ve bir gün bunları siz de vermek için! Bu kelimeler fizyoterapi eğitimi için de çok işinize yarayacak.",
        en: "« Bend your knees! Breathe in! Five more! » In a group class, at the physio or at the gym, the coach gives lots of instructions, fast. Here are the most common ones, so you can follow the class… and give them yourself one day!"
      },
      groups: [
        G("Les positions", "Pozisyonlar", "Positions", `
debout|ayakta|standing||Mettez-vous debout.
assis / assise|oturmuş, oturur halde|sitting|assis, assise|Restez assis.
allongé sur le dos|sırt üstü yatmış|lying on your back||Allongez-vous sur le dos.
sur le ventre|yüzüstü|on your stomach||Maintenant, sur le ventre.
à genoux|dizlerin üzerinde|kneeling||Mettez-vous à genoux.
à quatre pattes|dört ayak üstünde, emekleme pozisyonunda|on all fours||Position à quatre pattes.
les pieds écartés|ayaklar açık|feet apart||Les pieds écartés, largeur des épaules.
les pieds joints|ayaklar bitişik|feet together||Les pieds joints, s'il vous plaît.
les bras tendus|kollar gergin|arms straight||Les bras tendus devant vous.
le dos droit|sırt dik|back straight||Gardez le dos droit !`, {
          fr: "« Assis » et « allongé » s'accordent : un homme est assis, une femme est assise. Mais à l'oral, le coach dit souvent juste « Assis ! » à tout le groupe, et tout le monde comprend.",
          tr: "'Assis' ve 'allongé' cinsiyete göre değişir: erkek için 'assis', kadın için 'assise', çoğul için 'assis/assises'. Ama derste eğitmen genelde herkese kısaca 'Assis !' der. 'À quatre pattes' kelimesi kelimesine 'dört pati üstünde' demektir; bizim 'emekleme pozisyonu' dediğimiz şey.",
          en: "« Assis » and « allongé » agree: a man is assis, a woman is assise. But in class the coach often just calls « Assis ! » to everyone."
        }),
        G("Bouger", "Hareket etmek", "Moving", `
Levez les bras.|Kollarınızı kaldırın.|Raise your arms.
Baissez les bras.|Kollarınızı indirin.|Lower your arms.
Pliez les genoux.|Dizlerinizi bükün.|Bend your knees.
Tendez la jambe.|Bacağınızı uzatın.|Straighten your leg.
Tournez la tête à droite.|Başınızı sağa çevirin.|Turn your head to the right.
Penchez-vous en avant.|Öne eğilin.|Lean forward.
Sautez !|Zıplayın!|Jump!
Marchez sur place.|Olduğunuz yerde yürüyün.|March on the spot.
Changez de côté.|Taraf değiştirin.|Switch sides.
Ramenez les pieds.|Ayaklarınızı geri getirin.|Bring your feet back in.`, {
          fr: "Le coach parle au groupe avec « vous » : « Levez », « Pliez ». En cours particulier ou avec Sophie à la salle, on entend plutôt « tu » : « Lève les bras ! », « Plie les genoux ! »",
          tr: "Eğitmen gruba 'vous' ile konuşur: 'Levez, Pliez' (Kaldırın, bükün). Özel derste ya da samimi ortamda 'tu' ile söylenir: 'Lève les bras !' (Kollarını kaldır!). Esin salonda müdürü Sophie ile 'tu' kullanıyor; antrenmanda Sophie de ona 'Plie les genoux !' der.",
          en: "The coach speaks to the group with « vous »: « Levez », « Pliez ». In a one-to-one session you'll hear « tu »: « Lève les bras ! », « Plie les genoux ! »"
        }),
        G("Respirer et compter", "Nefes ve sayma", "Breathing and counting", `
Inspirez.|Nefes alın.|Breathe in.
Expirez.|Nefes verin.|Breathe out.
Respirez normalement.|Normal nefes alın.|Breathe normally.
Tenez la position.|Pozisyonda kalın.|Hold the position.
Relâchez.|Gevşeyin.|Relax, release.
une série de dix|onluk bir set|a set of ten||Faites trois séries de dix.
une répétition|tekrar|a repetition, rep||Encore deux répétitions !
Encore cinq secondes !|Beş saniye daha!|Five more seconds!
On fait une pause.|Mola veriyoruz.|Let's take a break.
On recommence.|Baştan başlıyoruz.|Let's start again.`, {
          fr: "En France, on dit souvent « une série de dix » et pas « un set ». Le coach compte souvent à l'envers : « Cinq, quatre, trois, deux, un… et on relâche ! » Bonne occasion de réviser les nombres !",
          tr: "Fransa'da 'set' yerine genelde 'une série' (seri) denir: 'trois séries de dix' (10 tekrarlık 3 set). Eğitmen çoğu zaman geriye doğru sayar: 'Cinq, quatre, trois, deux, un… et on relâche !' Sayıları tekrar etmek için harika bir fırsat; nefes nefese olsanız bile!",
          en: "In France people usually say « une série » rather than « un set »: « trois séries de dix ». Coaches often count down: « Cinq, quatre, trois, deux, un… et on relâche ! »"
        }),
        G("Encourager", "Cesaret vermek", "Encouraging", `
Allez !|Hadi!|Come on!
Courage !|Dayan!, Haydi, gayret!|Hang in there!
Encore un effort !|Biraz daha gayret!|One more push!
C'est presque fini !|Neredeyse bitti!|Almost done!
Tu peux le faire !|Yapabilirsin!|You can do it!
Ne lâche rien !|Pes etme!|Don't give up!
Super, continue !|Süper, devam et!|Great, keep going!
Bien joué !|Aferin!, İyi iş!|Well done!
Bravo à tous !|Herkesi tebrik ederim!|Well done, everyone!`, {
          fr: "« Courage ! » ne veut pas dire qu'il y a un danger : c'est juste « tiens bon ». Les Français le disent aussi au travail ou avant un examen. Esin, qui a été kiné d'une équipe de handball, connaît bien ces cris !",
          tr: "'Courage !' tehlike olduğu anlamına gelmez; 'dayan, gayret' demektir. Fransızlar bunu işte, sınav öncesinde, hatta zor bir pazartesi sabahı da söyler. Bizdeki 'kolay gelsin'e yakın bir sıcaklığı vardır. Hentbol takımlarında çalışmış biri olarak bu tezahüratları sahada çok duymuşsunuzdur!",
          en: "« Courage ! » doesn't mean danger: it just means 'hang in there'. The French also say it at work or before an exam."
        }),
        G("Sécurité et sensations", "Güvenlik ve hisler", "Safety and how it feels", `
Ça tire.|Geriliyor, çekiyor.|I can feel it pulling (stretch).
J'ai une crampe.|Kramp girdi.|I've got a cramp.
Je suis essoufflé.|Nefes nefese kaldım.|I'm out of breath.
Je transpire.|Terliyorum.|I'm sweating.
J'ai des courbatures.|Kaslarım ağrıyor (antrenman sonrası).|I've got sore muscles.
Arrêtez si vous avez mal.|Ağrınız olursa durun.|Stop if it hurts.
Ne bloquez pas la respiration.|Nefesinizi tutmayın.|Don't hold your breath.
Allez-y doucement.|Yavaş yavaş, nazikçe yapın.|Take it easy.
Buvez un peu d'eau.|Biraz su için.|Drink a little water.`, {
          fr: "« Ça tire » pendant un étirement, c'est normal. Mais « J'ai mal » (une vraie douleur), on s'arrête ! « Les courbatures », ce sont les douleurs musculaires du lendemain : la preuve que vous avez travaillé.",
          tr: "Esneme sırasında 'Ça tire' (geriliyor) hissi normaldir; ama 'J'ai mal' (gerçek ağrı) varsa durulur! 'Les courbatures', antrenmandan sonraki gün hissedilen kas ağrısıdır; bir fizyoterapist olarak çok iyi bildiğiniz bir şey. Kadınlar 'je suis essoufflée' der, telaffuz aynıdır.",
          en: "« Ça tire » during a stretch is normal. But « J'ai mal » (real pain) means stop! « Les courbatures » are next-day muscle aches: proof you worked hard."
        })
      ] },

    /* ───────────── 48. Small talk ───────────── */
    { id: "smalltalk", emoji: "💬", kind: "words", t: { fr: "Petites conversations et politesse", tr: "Sohbet ve nezaket kalıpları", en: "Small talk & polite phrases" },
      intro: {
        fr: "Avec un voisin, un collègue, un client à l'accueil : quelques phrases suffisent pour créer un lien. Pas besoin de parler beaucoup, il faut surtout réagir, sourire et connaître les bonnes formules. C'est comme ça qu'on se fait des amis !",
        tr: "Komşuyla, iş arkadaşıyla, resepsiyondaki bir müşteriyle: birkaç cümle bağ kurmak için yeterli. Çok konuşmaya gerek yok; asıl önemli olan tepki vermek, gülümsemek ve doğru kalıpları bilmek. Arkadaşlıklar böyle başlar!",
        en: "With a neighbour, a colleague, a client at the front desk: a few phrases are enough to make a connection. You don't need to talk a lot; mostly you react, smile and know the right phrases. That's how friendships start!"
      },
      groups: [
        G("Commencer la conversation", "Sohbeti başlatmak", "Starting a conversation", `
Quoi de neuf ?|Ne var ne yok?|What's new?
Tu as passé un bon week-end ?|Hafta sonun iyi geçti mi?|Did you have a good weekend?
Vous êtes d'ici ?|Buralı mısınız?|Are you from around here?
Vous habitez dans le quartier ?|Bu mahallede mi oturuyorsunuz?|Do you live in the area?
Vous venez souvent ici ?|Buraya sık gelir misiniz?|Do you come here often?
Quel temps, aujourd'hui !|Bugün ne hava ama!|What weather today!
Quelle journée !|Ne gün ama!|What a day!
Alors, ça se passe bien ?|Eee, her şey yolunda mı?|So, is it going well?`, {
          fr: "La météo est le sujet préféré des Français pour commencer une conversation : « Quel temps, aujourd'hui ! » marche toujours, avec le soleil comme avec la pluie. Et le lundi, la question classique, c'est : « Tu as passé un bon week-end ? »",
          tr: "Hava durumu, Fransızların sohbet açmak için en sevdiği konudur: 'Quel temps, aujourd'hui !' güneşte de yağmurda da işe yarar. Pazartesi sabahının klasik sorusu da 'Tu as passé un bon week-end ?' (Hafta sonun iyi geçti mi?). Kısa bir cevap ve 'Et toi ?' yeterli.",
          en: "Weather is the French favourite for starting a chat: « Quel temps, aujourd'hui ! » works in sun or rain. On Mondays, the classic question is « Tu as passé un bon week-end ? »"
        }),
        G("Réagir", "Tepki vermek", "Reacting", `
Ah bon ?|Öyle mi?|Really? Oh?
C'est vrai ?|Gerçekten mi?|Is that true?
Ah oui, je vois.|Hı hı, anlıyorum.|Oh yes, I see.
Pas possible !|Olamaz!, Yok artık!|No way!
Ça alors !|Hayret bir şey!|Well I never!
Moi aussi.|Ben de.|Me too.
Moi non plus.|Ben de (…-mıyorum).|Me neither.
Tant mieux !|Ne iyi!, Buna sevindim!|Good! So much the better!
Tant pis.|Olsun, boş ver.|Never mind, too bad.
Dommage !|Yazık!|What a shame!`, {
          fr: "« Moi aussi » répond à une phrase positive (J'aime le café. – Moi aussi.) et « Moi non plus » à une phrase négative (Je n'aime pas le froid. – Moi non plus.). Un petit « Ah bon ? » montre que vous écoutez : très utile quand on ne sait pas quoi dire !",
          tr: "'Moi aussi' olumlu cümleye cevaptır (J'aime le café. – Moi aussi. = Ben de seviyorum). Olumsuz cümleye ise 'Moi non plus' denir (Je n'aime pas le froid. – Moi non plus. = Ben de sevmiyorum). Türkçede ikisi de 'ben de' olduğu için bu sık yapılan bir hatadır. Ne diyeceğinizi bilmediğinizde küçük bir 'Ah bon ?' dinlediğinizi gösterir!",
          en: "« Moi aussi » answers a positive sentence (J'aime le café. – Moi aussi.), « Moi non plus » a negative one (Je n'aime pas le froid. – Moi non plus.). A little « Ah bon ? » shows you're listening."
        }),
        G("Les formules de politesse", "Nezaket kalıpları", "Polite phrases", `
Après vous.|Önce siz buyurun.|After you.
Excusez-moi de vous déranger.|Rahatsız ettiğim için kusura bakmayın.|Sorry to bother you.
C'est très gentil.|Çok naziksiniz.|That's very kind.
Je vous remercie.|Teşekkür ederim.|Thank you (formal).
Volontiers.|Memnuniyetle.|Gladly, I'd love to.
Pas de souci.|Sorun değil.|No problem.
Ce n'est rien.|Bir şey değil.|It's nothing.
Bon courage !|Kolay gelsin!|Good luck! Hang in there!
Bonne continuation !|İyi devam!, Başarılar!|All the best (keep it up)!
Bonne fin de journée !|Günün geri kalanı iyi geçsin!|Have a good rest of the day!`, {
          fr: "« Bon courage ! » est parfait pour quelqu'un qui travaille ou qui a un examen. À l'accueil de la salle, après 17 heures, on dit souvent « Bonne fin de journée ! » ou « Bonne soirée ! » aux clients.",
          tr: "'Bon courage !' çalışan ya da sınavı olan birine söylenir; Türkçedeki 'Kolay gelsin!'in en yakın karşılığıdır. Spor salonunun resepsiyonunda öğleden sonra müşterilere 'Bonne fin de journée !' (Günün geri kalanı iyi geçsin), akşam ise 'Bonne soirée !' denir.",
          en: "« Bon courage ! » suits anyone working or facing an exam (like Turkish 'Kolay gelsin'). At a gym front desk in the late afternoon, staff often say « Bonne fin de journée ! » or « Bonne soirée ! »."
        }),
        G("Parler un peu de soi", "Biraz kendinden bahsetmek", "Talking a little about yourself", `
Qu'est-ce que vous faites dans la vie ?|Ne iş yapıyorsunuz?|What do you do for a living?
Je travaille à l'accueil d'une salle de sport.|Bir spor salonunun resepsiyonunda çalışıyorum.|I work at the front desk of a gym.
Ça fait un an que je suis en France.|Bir yıldır Fransa'dayım.|I've been in France for a year.
Ça vous plaît, la France ?|Fransa'yı sevdiniz mi?|Do you like France?
Le français, c'est difficile, mais j'apprends !|Fransızca zor ama öğreniyorum!|French is hard, but I'm learning!
Je cours au parc le samedi matin.|Cumartesi sabahları parkta koşuyorum.|I run in the park on Saturday mornings.
Qu'est-ce que tu fais ce week-end ?|Bu hafta sonu ne yapıyorsun?|What are you doing this weekend?
Vous partez en vacances cet été ?|Bu yaz tatile gidiyor musunuz?|Are you going on holiday this summer?`, {
          fr: "Pas besoin de raconter toute votre vie : une phrase sur vous, puis une question à l'autre (« Et vous ? »). Dire « J'apprends le français » rend les gens patients et gentils : ils parlent plus lentement !",
          tr: "Tüm hayatınızı anlatmanıza gerek yok: kendinizle ilgili bir cümle, sonra karşınızdakine bir soru ('Et vous ?'). 'J'apprends le français' (Fransızca öğreniyorum) demek insanları sabırlı ve nazik yapar; genelde daha yavaş konuşmaya başlarlar!",
          en: "No need to tell your life story: one sentence about you, then a question back (« Et vous ? »). Saying « J'apprends le français » makes people patient and kind: they slow down!"
        }),
        G("Terminer poliment", "Kibarca bitirmek", "Ending politely", `
Bon, je dois y aller.|Neyse, gitmem lazım.|Well, I have to go.
Je vous laisse.|Sizi daha fazla tutmayayım.|I'll let you go.
J'ai été ravie de discuter avec vous.|Sizinle sohbet etmek çok güzeldi.|It was lovely chatting with you.
On se revoit bientôt ?|Yakında yine görüşelim mi?|Shall we meet again soon?
À la prochaine !|Bir dahaki sefere!|Until next time!
À tout à l'heure !|Birazdan görüşürüz!|See you later (today)!
Passez une bonne soirée !|İyi akşamlar geçirin!|Have a nice evening!
Prenez soin de vous.|Kendinize iyi bakın.|Take care of yourself.`, {
          fr: "« Je vous laisse » est une façon très française et très polie de terminer : on ne part pas, on « laisse » l'autre tranquille ! Un homme dit « J'ai été ravi », une femme « J'ai été ravie » (même son).",
          tr: "'Je vous laisse' (sizi bırakayım) çok Fransız ve çok kibar bir bitiriş şeklidir: gittiğinizi değil, karşınızdakini daha fazla meşgul etmek istemediğinizi söylersiniz. Erkekler 'J'ai été ravi', kadınlar 'J'ai été ravie' der; okunuşu aynıdır.",
          en: "« Je vous laisse » is a very French, very polite way to wrap up: you're not leaving, you're 'letting the other person go'. A man says « J'ai été ravi », a woman « J'ai été ravie » (same sound)."
        })
      ] }
  );
})();
