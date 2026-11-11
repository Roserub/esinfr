/* A1 decks (v7): bathroom & hygiene, breakfast at home, the street & traffic,
   the weekend, at the bakery, at the pharmacy. */
(function () {
  const D = (id, level, en, tr, fr, lines) => ({
    id, level, name: { en, tr, fr },
    cards: lines.trim().split("\n").map(l => {
      const [f, t, e, n] = l.split("|").map(s => (s || "").trim());
      return { id: id + ":" + f, fr: f, tr: t, en: e, note: n || "" };
    })
  });

  window.DECKS.push(
    D("a1-hygiene", "A1", "Bathroom & hygiene", "Banyo ve kişisel bakım", "La salle de bains et l'hygiène", `
la salle de bains|banyo|the bathroom|The toilet is often in a separate room: « les toilettes » (f. pl.).
les toilettes (f. pl.)|tuvalet|the toilet(s)|Always plural. Also « les WC ».
la douche|duş|the shower
la baignoire|küvet|the bathtub
le lavabo|lavabo|the washbasin|A friend from Turkish! Le lavabo, m.
le miroir|ayna|the mirror
le robinet|musluk|the tap
l'eau chaude (f.)|sıcak su|hot water|Tap tip: C = chaude, F = froide.
le savon|sabun|the soap
le gel douche|duş jeli|the shower gel
le shampoing|şampuan|the shampoo|Pronounced « shampouin ».
la serviette|havlu|the towel|Also: a napkin or a briefcase.
la brosse à dents|diş fırçası|the toothbrush
le dentifrice|diş macunu|the toothpaste
le peigne|tarak|the comb
la brosse à cheveux|saç fırçası|the hairbrush
le sèche-cheveux|saç kurutma makinesi|the hairdryer|Plural doesn't change: des sèche-cheveux.
le rasoir|tıraş makinesi; jilet|the razor
le déodorant|deodorant|the deodorant
la crème|krem|the cream
le papier toilette|tuvalet kâğıdı|toilet paper
le mouchoir|mendil|the tissue, handkerchief
se laver|yıkanmak|to wash (oneself)|Je me lave.
se doucher|duş almak|to shower|Also: prendre une douche.
se brosser les dents|dişlerini fırçalamak|to brush one's teeth|No « mes »: je me brosse LES dents.
se coiffer|saçını taramak|to do one's hair
se raser|tıraş olmak|to shave
se laver les mains|ellerini yıkamak|to wash one's hands
se maquiller|makyaj yapmak|to put on make-up
propre|temiz|clean
sale|kirli|dirty
Je prends une douche le matin.|Sabahları duş alıyorum.|I have a shower in the morning.
Il n'y a plus d'eau chaude !|Sıcak su kalmadı!|There's no more hot water!|Classic after someone's very long shower!
Tu as une serviette, s'il te plaît ?|Bir havlun var mı, lütfen?|Do you have a towel, please?
Les toilettes sont occupées.|Tuvalet dolu.|The toilet is occupied.
Lavez-vous les mains.|Ellerinizi yıkayın.|Wash your hands.|Sign you see in every gym and restaurant.`),

    D("a1-breakfast", "A1", "Breakfast at home", "Evde kahvaltı", "Le petit-déjeuner à la maison", `
le petit-déjeuner|kahvaltı|breakfast|Verb: prendre le petit-déjeuner. Short: « le petit-déj ».
le café|kahve|coffee
le café au lait|sütlü kahve|white coffee
le thé|çay|tea|Tip: French tea is often a tea bag. Ask for « un thé noir ».
le chocolat chaud|sıcak çikolata|hot chocolate
le jus d'orange|portakal suyu|orange juice
le lait|süt|milk
le sucre|şeker|sugar
le pain|ekmek|bread
la tartine|tereyağlı/reçelli ekmek dilimi|slice of bread with butter or jam|A very French breakfast habit.
le beurre|tereyağı|butter
la confiture|reçel|jam
le miel|bal|honey
les céréales (f.)|mısır gevreği; tahıl gevreği|cereal
le yaourt|yoğurt|yoghurt|French yaourt is often sweet: say « nature » for plain.
le fromage|peynir|cheese|French people rarely eat cheese at breakfast.
l'œuf (m.)|yumurta|the egg|Plural « des œufs »: the f is silent!
l'œuf à la coque (m.)|rafadan yumurta|soft-boiled egg
les œufs brouillés (m.)|çırpılmış yumurta|scrambled eggs
le fruit|meyve|the fruit
la banane|muz|the banana
la pomme|elma|the apple
le bol|kase|the bowl|Many French people drink coffee in a bowl.
la tasse|fincan|the cup
la cuillère|kaşık|the spoon
le couteau|bıçak|the knife
la cafetière|kahve makinesi|the coffee maker
le grille-pain|ekmek kızartma makinesi|the toaster
le pain grillé|kızarmış ekmek|toast
sucré|tatlı; şekerli|sweet
salé|tuzlu|salty, savoury|A Turkish breakfast is « salé », a French one is « sucré ».
Tu veux un café ?|Kahve ister misin?|Do you want a coffee?
Je prends mon petit-déjeuner à 7 heures.|Kahvaltımı saat 7'de yapıyorum.|I have breakfast at 7.
Le café est prêt !|Kahve hazır!|The coffee is ready!
Je n'ai pas faim le matin.|Sabahları acıkmıyorum.|I'm not hungry in the morning.
Le petit-déjeuner turc, c'est un vrai repas !|Türk kahvaltısı başlı başına bir öğün!|A Turkish breakfast is a real meal!`),

    D("a1-street", "A1", "The street & traffic", "Sokak ve trafik", "La rue et la circulation", `
la rue|sokak|the street
l'avenue (f.)|cadde|the avenue
le boulevard|bulvar|the boulevard
le trottoir|kaldırım|the pavement, sidewalk
le passage piéton|yaya geçidi|the pedestrian crossing
le feu (rouge)|trafik ışığı (kırmızı)|the (red) traffic light|Plural: les feux.
le feu vert|yeşil ışık|green light
le carrefour|kavşak|the crossroads
le rond-point|göbek; dönel kavşak|the roundabout
le coin de la rue|sokağın köşesi|the street corner
le piéton|yaya|the pedestrian
la voiture|araba|the car
le vélo|bisiklet|the bike
la trottinette|scooter; trotinet|the (kick) scooter|Électrique or not: very common in French cities.
la moto|motosiklet|the motorbike
le camion|kamyon|the lorry, truck
la piste cyclable|bisiklet yolu|the cycle lane
la circulation|trafik|traffic
l'embouteillage (m.)|trafik sıkışıklığı|the traffic jam|Also: un bouchon.
le parking|otopark|the car park
la place de parking|park yeri|the parking space
le panneau|tabela|the sign
la police|polis|the police
traverser|karşıya geçmek|to cross
tourner à gauche|sola dönmek|to turn left
tourner à droite|sağa dönmek|to turn right
aller tout droit|dümdüz gitmek|to go straight on
s'arrêter|durmak|to stop
attendre|beklemek|to wait
dangereux|tehlikeli|dangerous|f. dangereuse
Attention aux voitures !|Arabalara dikkat!|Watch out for the cars!
On traverse au feu vert.|Yeşil ışıkta karşıya geçilir.|We cross at the green light.
Il y a beaucoup de circulation ce matin.|Bu sabah trafik çok yoğun.|There's a lot of traffic this morning.
Je suis dans les bouchons.|Trafikte sıkıştım.|I'm stuck in traffic.|Perfect excuse when you're late.
La salle de sport est au coin de la rue.|Spor salonu sokağın köşesinde.|The gym is on the street corner.`),

    D("a1-weekend", "A1", "The weekend", "Hafta sonu", "Le week-end", `
le week-end|hafta sonu|the weekend|Masculine: le week-end.
le samedi|cumartesi günleri|on Saturdays|« le samedi » = every Saturday; « samedi » = this Saturday.
le dimanche|pazar günleri|on Sundays
samedi matin|cumartesi sabahı|Saturday morning
dimanche soir|pazar akşamı|Sunday evening
se reposer|dinlenmek|to rest
dormir tard|geç saate kadar uyumak|to sleep in
faire la grasse matinée|sabah geç kalkmak|to have a lie-in|Literally: to do the fat morning!
faire les courses|market alışverişi yapmak|to do the shopping
faire le ménage|ev temizliği yapmak|to do the housework
faire du sport|spor yapmak|to do sport
courir au parc|parkta koşmak|to run in the park
se promener|yürüyüşe çıkmak|to go for a walk
faire du vélo|bisiklet sürmek|to go cycling
aller au marché|pazara gitmek|to go to the market
aller au cinéma|sinemaya gitmek|to go to the cinema
regarder une série|dizi izlemek|to watch a series
lire un livre|kitap okumak|to read a book
inviter des amis|arkadaş davet etmek|to invite friends
le repas de famille|aile yemeği|the family meal|Sunday lunch in France can last 3 hours!
le brunch|brunch|brunch
le pique-nique|piknik|the picnic
sortir|dışarı çıkmak|to go out
rester à la maison|evde kalmak|to stay at home
le temps libre|boş zaman|free time
Bon week-end !|İyi hafta sonları!|Have a good weekend!|Said on Friday. Answer: « Merci, toi aussi ! »
Tu fais quoi ce week-end ?|Bu hafta sonu ne yapıyorsun?|What are you doing this weekend?
Je ne fais rien de spécial.|Özel bir şey yapmıyorum.|I'm not doing anything special.
Samedi, je cours au parc.|Cumartesi parkta koşuyorum.|On Saturday, I run in the park.
Le dimanche, beaucoup de magasins sont fermés.|Pazar günleri birçok mağaza kapalı.|On Sundays, many shops are closed.|A big surprise for people from Istanbul!
Tu as passé un bon week-end ?|Hafta sonun iyi geçti mi?|Did you have a good weekend?|Monday question at work.
C'était super, merci !|Harikaydı, teşekkürler!|It was great, thanks!
Vivement le week-end !|Hafta sonu bir an önce gelsin!|Can't wait for the weekend!`),

    D("a1-bakery", "A1", "At the bakery", "Fırında", "À la boulangerie", `
la boulangerie|fırın; ekmekçi|the bakery
le boulanger|fırıncı|the baker|f. la boulangère
la pâtisserie|pastane; pasta|the cake shop; pastry
la baguette|baget|the baguette
la tradition|geleneksel baget|the traditional baguette|Short for « baguette de tradition »: crispier, a bit more expensive.
le pain complet|tam buğday ekmeği|wholemeal bread
le pain aux céréales|tahıllı ekmek|multigrain bread
le croissant|kruvasan|the croissant
le pain au chocolat|çikolatalı kruvasan|the chocolate croissant|In the south-west: « une chocolatine ».
le pain aux raisins|üzümlü çörek|the raisin swirl
la brioche|brioş|the brioche
le chausson aux pommes|elmalı milföy|the apple turnover
la viennoiserie|kahvaltılık hamur işi|pastries (croissants etc.)
le gâteau|pasta; kek|the cake|Plural: les gâteaux.
la tarte aux fraises|çilekli tart|the strawberry tart
l'éclair au chocolat (m.)|çikolatalı ekler|the chocolate éclair
le sandwich|sandviç|the sandwich
la quiche|kiş|the quiche
bien cuit|iyi pişmiş|well baked|For a darker, crispier baguette.
pas trop cuit|az pişmiş|not too baked
chaud|sıcak|warm, hot
frais|taze|fresh|f. fraîche
la monnaie|bozuk para|the change
le sac|poşet; çanta|the bag
Bonjour ! Une baguette, s'il vous plaît.|Merhaba! Bir baget, lütfen.|Hello! A baguette, please.|Always start with « Bonjour » in a shop: very important in France.
Une tradition bien cuite, s'il vous plaît.|İyi pişmiş bir geleneksel baget, lütfen.|A well-baked traditional baguette, please.
Je voudrais deux croissants.|İki kruvasan istiyorum.|I'd like two croissants.
Et avec ceci ?|Başka bir şey ister misiniz?|Anything else?|Classic question from the baker.
Ce sera tout, merci.|Bu kadar, teşekkürler.|That's all, thanks.
Ça fait combien ?|Ne kadar tuttu?|How much is it?
Ça fait 3,20 €.|3,20 € tutuyor.|That's €3.20.|Say: trois euros vingt.
Je peux payer par carte ?|Kartla ödeyebilir miyim?|Can I pay by card?
Bonne journée !|İyi günler!|Have a nice day!|Answer: « Merci, vous aussi ! »`),

    D("a1-pharmacy", "A1", "At the pharmacy", "Eczanede", "À la pharmacie", `
la pharmacie|eczane|the pharmacy|Look for the green cross.
le pharmacien|eczacı|the pharmacist|f. la pharmacienne
la pharmacie de garde|nöbetçi eczane|the duty pharmacy|Open at night and on Sundays.
l'ordonnance (f.)|reçete|the prescription
le médicament|ilaç|the medicine
la boîte|kutu|the box
le comprimé|tablet|the tablet
le sirop|şurup|the syrup
la pommade|merhem|the ointment
le pansement|yara bandı|the plaster, bandage
le thermomètre|termometre|the thermometer
le gel hydroalcoolique|el dezenfektanı|hand sanitiser
la crème solaire|güneş kremi|sunscreen
la carte Vitale|sağlık sigortası kartı (Carte Vitale)|French health insurance card|Give it with the prescription.
la mutuelle|tamamlayıcı sağlık sigortası|top-up health insurance
le rhume|nezle; soğuk algınlığı|a cold
la fièvre|ateş|fever
la toux|öksürük|cough
le mal de gorge|boğaz ağrısı|sore throat
le mal de tête|baş ağrısı|headache
le mal de dos|sırt ağrısı, bel ağrısı|backache
l'allergie (f.)|alerji|the allergy
J'ai mal à la gorge.|Boğazım ağrıyor.|I have a sore throat.|avoir mal à + body part
J'ai de la fièvre.|Ateşim var.|I have a fever.
Je tousse beaucoup.|Çok öksürüyorum.|I'm coughing a lot.
Je suis enrhumé.|Nezle oldum.|I have a cold.|A woman says: enrhumée.
Vous avez quelque chose contre le mal de tête ?|Baş ağrısı için bir şeyiniz var mı?|Do you have something for a headache?
C'est sans ordonnance ?|Reçetesiz alınabiliyor mu?|Is it without a prescription?
Je suis allergique à la pénicilline.|Penisiline alerjim var.|I'm allergic to penicillin.
Deux comprimés par jour.|Günde iki tablet.|Two tablets a day.
Prenez-le après le repas.|Yemekten sonra alın.|Take it after the meal.
Pendant combien de jours ?|Kaç gün boyunca?|For how many days?
Vous avez votre carte Vitale ?|Carte Vitale'iniz var mı?|Do you have your Carte Vitale?
Soignez-vous bien !|Kendinize iyi bakın!|Take good care of yourself!|What the pharmacist says at the end.`)
  );
})();
