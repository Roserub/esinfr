/* Flashcard decks. Each card: "français|Türkçe|English|optional note".
   Card id = deckId + ":" + French text (stable even if the order changes). */
(function () {
  const D = (id, level, en, tr, fr, lines) => ({
    id, level, name: { en, tr, fr },
    cards: lines.trim().split("\n").map(l => {
      const [f, t, e, n] = l.split("|").map(s => (s || "").trim());
      return { id: id + ":" + f, fr: f, tr: t, en: e, note: n || "" };
    })
  });

  window.DECKS = [
    D("loan", "A0", "Words you already know (from Turkish)", "Zaten bildiğin kelimeler (Türkçeden)", "Les mots que tu connais déjà (du turc)", `
l'ascenseur|asansör|lift, elevator
l'autobus / le bus|otobüs|bus
le coiffeur|kuaför|hairdresser
le chauffeur|şoför|driver
le pantalon|pantolon|trousers
la cravate|kravat|tie
le garage|garaj|garage
les bagages|bagaj|luggage|In Turkish, bagaj is also the car boot (le coffre).
le bureau|büro|office; desk
le guichet|gişe|ticket window, counter
le cousin / la cousine|kuzen / kuzin|cousin
le rendez-vous|randevu|appointment
le restaurant|restoran|restaurant
le menu|menü|menu
les toilettes|tuvalet|toilet|Careful: la toilette (singular) = washing/grooming.
la saison|sezon|season
la télévision|televizyon|television
la radio|radyo|radio
le cinéma|sinema|cinema
la plage|plaj|beach
le pyjama|pijama|pyjamas
le maillot (de bain)|mayo|swimsuit|Faux ami: in sport, le maillot = the jersey (forma).
la blouse|bluz|blouse; lab coat|A kiné or nurse wears une blouse blanche!
la cheminée|şömine|fireplace
l'abat-jour|abajur|lampshade
le décor|dekor|decor, set
l'avantage|avantaj|advantage
l'exercice|egzersiz|exercise
l'entraîneur|antrenör|coach
l'entraînement|antrenman|training
la condition (physique)|kondisyon|fitness
la performance|performans|performance
le massage|masaj|massage
la thérapie|terapi|therapy
la physiothérapie|fizyoterapi|physiotherapy|In France people mostly say la kinésithérapie (le/la kiné).
la rééducation|rehabilitasyon|rehabilitation|French uses rééducation much more than réhabilitation.
l'ambulance|ambulans|ambulance
le docteur|doktor|doctor|Also: le médecin.
la clinique|klinik|clinic, private hospital
le sirop|şurup|syrup
la pommade|pomat|ointment
le bandage|bandaj|bandage
la compresse|kompres|compress
le syndrome|sendrom|syndrome
le réflexe|refleks|reflex
la migraine|migren|migraine
la grippe|grip|flu
l'allergie|alerji|allergy
le régime|rejim|diet; regime
la vitamine|vitamin|vitamin
la protéine|protein|protein
la calorie|kalori|calorie
la bicyclette|bisiklet|bicycle|Everyday word: le vélo.
le camion|kamyon|truck
la camionnette|kamyonet|van
le frein|fren|brake
la direction|direksiyon|steering; direction
la vitesse|vites|speed; gear
le phare|far|headlight; lighthouse
le retard|rötar|delay|être en retard = to be late.
la couchette|kuşet|sleeping berth
le wagon|vagon|carriage
le quai / le perron|peron|platform|Train platform in French = le quai; le perron = front steps of a building.
la station|istasyon|station (metro); stop|Train station = la gare.
le billet|bilet|ticket
le passeport|pasaport|passport
le visa|vize|visa
le dossier|dosya|file, application file
la formalité|formalite|formality
la carte de visite|kartvizit|business card
le geste|jest|gesture
la chance|şans|luck, chance
la surprise|sürpriz|surprise
le projet|proje|project
le programme|program|programme
le problème|problem|problem
le système|sistem|system
la méthode|metot|method
la théorie|teori|theory
la pratique|pratik|practice; practical|Faux ami: Turkish pratik = practical/easy; French pratique = practical or practice.
le message|mesaj|message
le maquillage|makyaj|make-up
le parfum|parfüm|perfume
la charcuterie|şarküteri|cold cuts; deli
la crème|krem|cream
la crêpe|krep|crêpe
le croissant|kruvasan|croissant
le champagne|şampanya|champagne
le boulevard|bulvar|boulevard
l'appartement|apartman|flat, apartment|Faux ami: Turkish apartman = the building (French: l'immeuble).
le balcon|balkon|balcony
le salon|salon|living room
le couloir / le corridor|koridor|corridor
le canapé|kanepe|sofa|Also a small appetiser, like in Turkish.
le lavabo|lavabo|washbasin
la douche|duş|shower
la crèche|kreş|nursery
le lycée|lise|high school
le collège|kolej|middle school|Faux ami: Turkish kolej = private school; French collège = ages 11–15.
l'université|üniversite|university
la faculté (la fac)|fakülte|faculty; university (informal)
le diplôme|diploma|diploma, degree
le professeur|profesör|teacher; professor|Faux ami: in France un prof is any teacher, even in primary school.
l'assistant(e)|asistan|assistant
la conférence|konferans|lecture, conference
l'institut|enstitü|institute
le laboratoire|laboratuvar|laboratory
la culture|kültür|culture
le musée|müze|museum
le concert|konser|concert
le roman|roman|novel
le jury|jüri|jury, exam board
la tribune|tribün|stand (stadium)
le match|maç|match
le club|kulüp|club
le champion|şampiyon|champion
la ligue|lig|league|Ligue des champions = Champions League.
la revanche|rövanş|return match; revenge
la tactique|taktik|tactics
la technique|teknik|technique
la raquette|raket|racket
la piste|pist|track; ski run
le marathon|maraton|marathon
la gymnastique|jimnastik|gymnastics
l'athlétisme|atletizm|athletics
le patinage|patinaj|skating
l'équipe|ekip|team|A handball team = une équipe.
l'équipement|ekipman|equipment
le garçon|garson|boy|Faux ami! garçon = boy. Waiter = le serveur.
le pardessus|pardösü|overcoat
le surmenage|sürmenaj|overwork, burnout|Today French also says le burn-out.
le moral|moral|morale, mood|J'ai le moral = I'm in good spirits.
sympathique (sympa)|sempatik|nice, friendly
comique|komik|funny
l'étiquette|etiket|label
merci|mersi|thank you
pardon|pardon|sorry, excuse me
bravo|bravo|well done
chic|şık|chic, elegant
le luxe|lüks|luxury
le costume|kostüm|suit; costume
le tailleur|tayyör|women's suit; tailor
le cachet|kaşe|fee; stamp; tablet|In medicine un cachet = a tablet/pill.
l'agenda|ajanda|diary, planner
l'agence|ajans|agency
l'affiche|afiş|poster
la brochure|broşür|brochure
le coupon|kupon|coupon
le certificat|sertifika|certificate
le cours|kurs|class, course|Turkish kurs = French cours; but also un cours = a lesson.
la nuance|nüans|nuance
le détail|detay|detail
la réservation|rezervasyon|booking
la réception|resepsiyon|reception
la valise|valiz|suitcase
la cabine|kabin|cabin; booth
la garantie|garanti|warranty, guarantee
le crédit|kredi|credit, loan
le consul / le consulat|konsolos / konsolosluk|consul / consulate
la gendarmerie|jandarma|gendarmerie
la police|polis|police
la plaque|plaka|number plate; plate
le trafic|trafik|traffic|Road traffic is usually la circulation.
le tramway|tramvay|tram
le métro|metro|underground
le téléphérique|teleferik|cable car
l'asphalte|asfalt|asphalt
le kiosque|köşk|kiosk; newsstand|Fun: French borrowed this one FROM Turkish!
`),

    D("survival", "A0", "Survival phrases", "Temel ifadeler", "Les phrases de survie", `
Bonjour|Günaydın / İyi günler|Hello, good morning|Say it when you enter any shop. Very important in France.
Bonsoir|İyi akşamlar|Good evening
Salut|Selam|Hi (informal)
Au revoir|Hoşça kal / Görüşürüz|Goodbye
Bonne journée|İyi günler (vedalaşırken)|Have a nice day
Merci beaucoup|Çok teşekkürler|Thank you very much
De rien|Bir şey değil|You're welcome
S'il vous plaît|Lütfen (resmî)|Please (formal)
S'il te plaît|Lütfen (samimi)|Please (informal)
Excusez-moi|Affedersiniz|Excuse me
Pardon|Pardon|Sorry
Oui / Non|Evet / Hayır|Yes / No
D'accord|Tamam|OK
Je m'appelle Esin|Benim adım Esin|My name is Esin
Je suis turque|Türküm (kadın)|I'm Turkish (woman)|Masculine: turc.
J'habite en France|Fransa'da yaşıyorum|I live in France
Enchanté(e)|Memnun oldum|Nice to meet you
Comment ça va ?|Nasılsın?|How are you?
Ça va bien, et toi ?|İyiyim, ya sen?|I'm fine, and you?
Je ne comprends pas|Anlamıyorum|I don't understand
Vous pouvez répéter, s'il vous plaît ?|Tekrar edebilir misiniz lütfen?|Could you repeat, please?
Plus lentement, s'il vous plaît|Daha yavaş lütfen|More slowly, please
Je parle un peu français|Biraz Fransızca konuşuyorum|I speak a little French
Vous parlez anglais ?|İngilizce konuşuyor musunuz?|Do you speak English?
Comment dit-on … en français ?|Fransızcada … nasıl denir?|How do you say … in French?
Qu'est-ce que ça veut dire ?|Bu ne demek?|What does that mean?
Où sont les toilettes ?|Tuvalet nerede?|Where are the toilets?
Combien ça coûte ?|Bu ne kadar?|How much is it?
Je voudrais…|… istiyorum (kibar)|I would like…
L'addition, s'il vous plaît|Hesap lütfen|The bill, please
Je cherche…|… arıyorum|I'm looking for…
C'est où ?|Nerede?|Where is it?
À gauche / à droite / tout droit|Sola / sağa / dümdüz|Left / right / straight on
J'ai besoin d'aide|Yardıma ihtiyacım var|I need help
Je suis fatiguée|Yorgunum|I'm tired
J'ai faim / J'ai soif|Acıktım / Susadım|I'm hungry / thirsty
Je ne sais pas|Bilmiyorum|I don't know
Pas de problème|Sorun değil|No problem
À demain !|Yarın görüşürüz!|See you tomorrow!
Bon courage !|Kolay gelsin!|Good luck! Hang in there!|The perfect equivalent of "Kolay gelsin".
`),

    D("numbers", "A0", "Numbers, days, time", "Sayılar, günler, saat", "Nombres, jours, heure", `
un, deux, trois|bir, iki, üç|one, two, three
quatre, cinq, six|dört, beş, altı|four, five, six
sept, huit, neuf, dix|yedi, sekiz, dokuz, on|seven, eight, nine, ten
onze, douze, treize|on bir, on iki, on üç|11, 12, 13
quatorze, quinze, seize|on dört, on beş, on altı|14, 15, 16
vingt|yirmi|twenty
trente, quarante, cinquante|otuz, kırk, elli|30, 40, 50
soixante|altmış|sixty
soixante-dix|yetmiş|seventy|Literally "sixty-ten".
quatre-vingts|seksen|eighty|Literally "four twenties".
quatre-vingt-dix|doksan|ninety|"Four twenties ten" — everybody finds it funny.
cent|yüz|hundred
mille|bin|thousand
lundi|pazartesi|Monday
mardi|salı|Tuesday
mercredi|çarşamba|Wednesday
jeudi|perşembe|Thursday
vendredi|cuma|Friday
samedi|cumartesi|Saturday
dimanche|pazar|Sunday
janvier, février, mars|ocak, şubat, mart|January, February, March
avril, mai, juin|nisan, mayıs, haziran|April, May, June
juillet, août, septembre|temmuz, ağustos, eylül|July, August, September
octobre, novembre, décembre|ekim, kasım, aralık|October, November, December
Quelle heure est-il ?|Saat kaç?|What time is it?
Il est dix heures et demie|Saat on buçuk|It's half past ten
à quatorze heures|saat on dörtte|at 2 pm|France uses the 24-hour clock in schedules.
aujourd'hui / demain / hier|bugün / yarın / dün|today / tomorrow / yesterday
le matin / l'après-midi / le soir|sabah / öğleden sonra / akşam|morning / afternoon / evening
la semaine prochaine|gelecek hafta|next week
`),

    D("daily", "A1", "Daily life", "Günlük yaşam", "La vie quotidienne", `
la boulangerie|fırın|bakery
une baguette, s'il vous plaît|bir baget lütfen|a baguette, please
le supermarché|süpermarket|supermarket
les courses|alışveriş (market)|groceries|faire les courses = to do the shopping.
la caisse|kasa|checkout
Vous avez un sac ?|Poşetiniz var mı?|Do you have a bag?
Je paie par carte|Kartla ödüyorum|I'll pay by card
le reçu / le ticket|fiş|receipt
le marché|pazar|market
le pain, le fromage, le lait|ekmek, peynir, süt|bread, cheese, milk
les légumes / les fruits|sebzeler / meyveler|vegetables / fruit
la viande / le poulet / le poisson|et / tavuk / balık|meat / chicken / fish
sans porc|domuz etsiz|without pork
la gare|tren istasyonu|train station
l'arrêt de bus|otobüs durağı|bus stop
un aller-retour|gidiş-dönüş|return ticket
le quai|peron|platform
composter / valider son billet|bileti onaylatmak|to validate your ticket
la maison / l'appartement|ev / daire|house / flat
la cuisine|mutfak|kitchen
la chambre|yatak odası|bedroom
la salle de bains|banyo|bathroom
le loyer|kira|rent
le voisin / la voisine|komşu|neighbour
le colis|kargo, paket|parcel
la boîte aux lettres|posta kutusu|letterbox
la pharmacie|eczane|pharmacy
la mairie|belediye|town hall
la banque|banka|bank
le compte bancaire|banka hesabı|bank account
le portable|cep telefonu|mobile phone
le forfait|tarife, paket|phone plan
le wifi / le mot de passe|wifi / şifre|wifi / password
Il fait beau / Il pleut|Hava güzel / Yağmur yağıyor|It's nice / It's raining
Il fait froid / chaud|Hava soğuk / sıcak|It's cold / hot
On se voit quand ?|Ne zaman görüşüyoruz?|When shall we meet?
Ça te dit ?|Ne dersin? / İster misin?|Do you fancy it?
Je suis en retard, désolée|Geç kaldım, kusura bakma|I'm late, sorry
`),

    D("healthbasic", "A2", "Health basics", "Temel sağlık", "La santé : les bases", `
J'ai mal à la tête|Başım ağrıyor|I have a headache
J'ai mal au dos|Sırtım ağrıyor|My back hurts
J'ai mal au ventre|Karnım ağrıyor|I have a stomach ache
J'ai de la fièvre|Ateşim var|I have a fever
Je tousse|Öksürüyorum|I'm coughing
J'ai le nez qui coule|Burnum akıyor|I have a runny nose
Je suis enrhumée|Nezleyim|I have a cold
J'ai des nausées|Midem bulanıyor|I feel sick
Je suis allergique à…|… alerjim var|I'm allergic to…
le médecin généraliste|pratisyen hekim / aile hekimi|GP|In France you declare a médecin traitant.
prendre rendez-vous|randevu almak|to make an appointment
l'ordonnance|reçete|prescription
le médicament|ilaç|medicine
un comprimé|tablet|tablet
deux fois par jour|günde iki kez|twice a day
la carte Vitale|carte Vitale (sağlık kartı)|health insurance card
la mutuelle|tamamlayıcı sağlık sigortası|top-up health insurance
les urgences|acil servis|A&E, emergency room
le 15 (SAMU) / le 112|112|emergency numbers|15 = medical emergency, 112 works everywhere in Europe.
Depuis quand ?|Ne zamandan beri?|Since when?
Depuis trois jours|Üç günden beri|For three days
Où avez-vous mal ?|Neresi ağrıyor?|Where does it hurt?
Ça fait mal quand…|… yapınca ağrıyor|It hurts when…
le pharmacien / la pharmacienne|eczacı|pharmacist
l'arrêt maladie|sağlık raporu, istirahat|sick leave
la prise de sang|kan tahlili|blood test
la radio|röntgen|X-ray
l'IRM|MR|MRI
l'échographie|ultrason|ultrasound
le dentiste|diş hekimi|dentist
`),

    D("body", "A2", "The human body", "İnsan vücudu", "Le corps humain", `
la tête|baş|head
le cou|boyun|neck
l'épaule|omuz|shoulder
le bras|kol|arm
le coude|dirsek|elbow
le poignet|el bileği|wrist
la main|el|hand
le doigt|parmak|finger
le pouce|başparmak|thumb
la poitrine|göğüs|chest
le ventre|karın|belly
le dos|sırt|back
les lombaires|bel (bel omurları)|lower back
la hanche|kalça|hip
la fesse|kalça (popo)|buttock
la cuisse|uyluk|thigh
le genou|diz|knee
la jambe|bacak|leg
le mollet|baldır|calf
la cheville|ayak bileği|ankle
le pied|ayak|foot
le talon|topuk|heel
l'orteil|ayak parmağı|toe
le cœur|kalp|heart
les poumons|akciğerler|lungs
l'estomac|mide|stomach
le foie|karaciğer|liver
les reins|böbrekler|kidneys|Also: avoir mal aux reins = lower back pain (colloquial).
le cerveau|beyin|brain
le muscle|kas|muscle
l'os (les os)|kemik|bone
l'articulation|eklem|joint
le tendon|tendon|tendon
le ligament|bağ|ligament
le nerf|sinir|nerve
la colonne vertébrale|omurga|spine
la peau|deri, cilt|skin
le sang|kan|blood
`),

    D("physio", "B1", "Physio & sports medicine", "Fizyoterapi ve spor hekimliği", "Kinésithérapie et médecine du sport", `
le / la kinésithérapeute (kiné)|fizyoterapist|physiotherapist
la kinésithérapie|fizyoterapi|physiotherapy
la séance|seans|session
le bilan (kinésithérapique)|değerlendirme|assessment
l'anamnèse|anamnez|patient history
la rééducation|rehabilitasyon|rehabilitation
la réathlétisation|spora dönüş antrenmanı|return-to-sport conditioning
le retour au jeu|oyuna dönüş|return to play
la blessure|sakatlık, yaralanma|injury
se blesser|sakatlanmak|to get injured
l'entorse (de la cheville)|burkulma (ayak bileği)|sprain (ankle)
la luxation|çıkık|dislocation
la fracture|kırık|fracture
la tendinite / la tendinopathie|tendinit / tendinopati|tendinitis / tendinopathy
la déchirure musculaire|kas yırtığı|muscle tear
l'élongation|kas gerilmesi|muscle strain
la contracture|kas spazmı, kasılma|muscle knot / spasm
la courbature|kas ağrısı (antrenman sonrası)|muscle soreness (DOMS)
la rupture du ligament croisé antérieur (LCA)|ön çapraz bağ kopması|ACL rupture
le ménisque|menisküs|meniscus
la coiffe des rotateurs|rotator manşet|rotator cuff
la lombalgie|bel ağrısı|low back pain
la cervicalgie|boyun ağrısı|neck pain
la sciatique|siyatik|sciatica
la hernie discale|bel fıtığı|herniated disc
l'œdème|ödem|swelling, oedema
l'inflammation|iltihap, enflamasyon|inflammation
la douleur|ağrı|pain
l'amplitude articulaire|eklem hareket açıklığı|range of motion
la flexion / l'extension|fleksiyon / ekstansiyon|flexion / extension
l'abduction / l'adduction|abdüksiyon / addüksiyon|abduction / adduction
la rotation interne / externe|iç / dış rotasyon|internal / external rotation
l'étirement|germe (esneme)|stretch
le renforcement musculaire|kas güçlendirme|strengthening
la proprioception|propriosepsiyon|proprioception
le gainage|core egzersizi (plank)|core training
la mobilisation|mobilizasyon|mobilisation
le massage / le massage transverse profond|masaj / derin transvers masaj|massage / deep transverse friction
la cryothérapie (la glace)|kriyoterapi (buz)|cryotherapy (ice)
l'électrothérapie|elektroterapi|electrotherapy
la balnéothérapie|hidroterapi|aquatic therapy
le strapping / le taping|bantlama|taping
l'attelle|atel|splint, brace
les béquilles|koltuk değnekleri|crutches
la prescription médicale|doktor reçetesi|medical prescription|In France kiné sessions are usually prescribed by a doctor.
Allongez-vous sur le dos|Sırt üstü uzanın|Lie on your back
Allongez-vous sur le ventre|Yüzüstü uzanın|Lie on your stomach
Pliez le genou|Dizinizi bükün|Bend your knee
Tendez la jambe|Bacağınızı düzleştirin|Straighten your leg
Levez le bras|Kolunuzu kaldırın|Raise your arm
Détendez-vous|Gevşeyin|Relax
Est-ce que ça vous fait mal ?|Bu canınızı acıtıyor mu?|Does this hurt?
Sur une échelle de 0 à 10, votre douleur ?|0'dan 10'a kadar ağrınız ne kadar?|On a scale of 0 to 10, your pain?
On va faire dix répétitions|On tekrar yapacağız|We'll do ten reps
Encore une série|Bir set daha|One more set
Respirez normalement|Normal nefes alın|Breathe normally
`),

    D("sport", "B1", "Sport & handball", "Spor ve hentbol", "Le sport et le handball", `
le handball (le hand)|hentbol|handball
le gardien / la gardienne de but|kaleci|goalkeeper
l'ailier / l'ailière|kanat oyuncusu|winger
le pivot|pivot|pivot
l'arrière|geri oyuncu|back
le demi-centre|oyun kurucu|centre back
marquer un but|gol atmak|to score a goal
le tir|şut|shot
la passe|pas|pass
le dribble|top sürme|dribble
l'exclusion (de deux minutes)|iki dakika uzaklaştırma|two-minute suspension
le jet de sept mètres|yedi metre atışı|seven-metre throw
la mi-temps|devre arası|half-time
la défense / l'attaque|savunma / hücum|defence / attack
le terrain|saha|court, pitch
le gymnase|spor salonu|sports hall
l'échauffement|ısınma|warm-up
la récupération|toparlanma|recovery
l'endurance|dayanıklılık|endurance
la vitesse|sürat|speed
la force|kuvvet|strength
la souplesse|esneklik|flexibility
la préparation physique|kondisyon hazırlığı|strength & conditioning
le préparateur physique|kondisyoner|S&C coach
le staff médical|sağlık ekibi|medical staff
l'arbitre|hakem|referee
le championnat|şampiyona, lig|championship, league
la saison|sezon|season
gagner / perdre / faire match nul|kazanmak / kaybetmek / berabere kalmak|win / lose / draw
le supporter|taraftar|supporter
la licence (sportive)|lisans (sporcu)|sport club membership/licence
s'inscrire dans un club|bir kulübe kaydolmak|to join a club
faire du sport|spor yapmak|to do sport
la salle de sport|spor salonu (fitness)|gym
la musculation|ağırlık antrenmanı|weight training
`),

    D("admin", "B1", "Admin & paperwork", "Resmî işler ve evrak", "L'administration et les papiers", `
le titre de séjour|oturma izni|residence permit
la préfecture|valilik (göçmen işleri)|prefecture
le justificatif de domicile|ikametgâh belgesi|proof of address
la pièce d'identité|kimlik belgesi|ID document
l'acte de naissance|doğum belgesi|birth certificate
la traduction assermentée|yeminli tercüme|certified translation
le formulaire|form|form
remplir un formulaire|form doldurmak|to fill in a form
la signature / signer|imza / imzalamak|signature / to sign
la date limite|son tarih|deadline
le rendez-vous en ligne|çevrimiçi randevu|online appointment
la convocation|çağrı mektubu|official summons/invitation
le récépissé|alındı belgesi|receipt (proof of application)
une photocopie|fotokopi|photocopy
le numéro de sécurité sociale|sosyal güvenlik numarası|social security number
la caisse d'assurance maladie (CPAM)|sağlık sigortası kurumu|health insurance office
l'attestation|belge, yazı|certificate, official letter
le RIB|IBAN belgesi|bank details slip
le virement|havale|bank transfer
le prélèvement|otomatik ödeme|direct debit
la facture|fatura|bill, invoice
les impôts|vergiler|taxes
la déclaration de revenus|gelir beyannamesi|tax return
le permis de conduire|ehliyet|driving licence
l'échange de permis|ehliyet değişimi|licence exchange
la lettre recommandée|iadeli taahhütlü mektup|registered letter
le dossier est complet / incomplet|dosya tam / eksik|the file is complete / incomplete
Pièces à fournir|Gerekli belgeler|Documents required
Je voudrais prendre rendez-vous|Randevu almak istiyorum|I'd like to make an appointment
Pouvez-vous m'envoyer la liste des documents ?|Belge listesini bana gönderebilir misiniz?|Could you send me the list of documents?
`),

    D("academic", "B2", "Academic French & connectors", "Akademik Fransızca ve bağlaçlar", "Le français universitaire et les connecteurs", `
tout d'abord|her şeyden önce|first of all
ensuite / puis|sonra|then
enfin|son olarak|finally
d'une part… d'autre part|bir yandan… öte yandan|on the one hand… on the other
en effet|nitekim, gerçekten de|indeed
cependant / pourtant|ancak / yine de|however / yet
en revanche|buna karşılık|on the other hand (contrast)
néanmoins|bununla birlikte|nevertheless
alors que / tandis que|oysa / iken|whereas
bien que (+ subjonctif)|… -e rağmen|although
c'est pourquoi|bu yüzden|that's why
par conséquent|sonuç olarak|consequently
donc|dolayısıyla|so, therefore
grâce à / à cause de|sayesinde / yüzünden|thanks to / because of
afin de / pour que|… için / … sın diye|in order to / so that
par exemple / notamment|örneğin / özellikle|for example / notably
en ce qui concerne|… ile ilgili olarak|regarding
il convient de|… gerekir, uygun olur|it is appropriate to
en conclusion / pour conclure|sonuç olarak|in conclusion
selon l'auteur|yazara göre|according to the author
l'hypothèse|hipotez|hypothesis
l'étude / l'échantillon|çalışma / örneklem|study / sample
les résultats montrent que|sonuçlar … gösteriyor|results show that
la revue de littérature|literatür taraması|literature review
le mémoire|tez (yüksek lisans/lisans)|dissertation
la soutenance|tez savunması|thesis defence
le cours magistral (CM)|amfi dersi|lecture
les travaux dirigés (TD)|uygulama dersi|tutorial
le partiel|ara sınav / dönem sınavı|exam (mid/end of term)
la licence / le master|lisans / yüksek lisans|bachelor's / master's
l'équivalence|denklik|equivalence
la validation des acquis (VAE/VAP)|önceki öğrenmelerin tanınması|recognition of prior learning
la physiologie de l'effort|egzersiz fizyolojisi|exercise physiology
la biomécanique|biyomekanik|biomechanics
l'activité physique adaptée (APA)|uyarlanmış fiziksel aktivite|adapted physical activity
`),

    D("calm", "A1", "Feelings & self-care", "Duygular ve kendine iyi bakmak", "Les émotions et prendre soin de soi", `
Je suis stressée|Stresliyim|I'm stressed
Je suis fière de moi|Kendimle gurur duyuyorum|I'm proud of myself
J'ai besoin d'une pause|Bir molaya ihtiyacım var|I need a break
Doucement|Yavaş yavaş|Gently, slowly
Petit à petit|Azar azar|Little by little|Petit à petit, l'oiseau fait son nid.
Ce n'est pas grave|Önemli değil|It doesn't matter
Je fais de mon mieux|Elimden geleni yapıyorum|I'm doing my best
J'ai le droit de me tromper|Hata yapma hakkım var|I'm allowed to make mistakes
Je me sens bien|Kendimi iyi hissediyorum|I feel good
Je me sens seule|Kendimi yalnız hissediyorum|I feel lonely
Ça me manque|Onu özlüyorum|I miss it
la famille me manque|Ailemi özlüyorum|I miss my family
Je suis contente|Mutluyum, memnunum|I'm happy
J'ai réussi !|Başardım!|I did it!
On y va !|Hadi gidelim!|Let's go!
Respire|Nefes al|Breathe
`)
  ];
})();
