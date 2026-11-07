/* A1/A2 decks (v8): the hotel, expressions with "avoir", useful little words, birthdays & parties,
   the weather forecast, familiar everyday expressions, sports competitions, the doctor's appointment. */
(function () {
  const D = (id, level, en, tr, fr, lines) => ({
    id, level, name: { en, tr, fr },
    cards: lines.trim().split("\n").map(l => {
      const [f, t, e, n] = l.split("|").map(s => (s || "").trim());
      return { id: id + ":" + f, fr: f, tr: t, en: e, note: n || "" };
    })
  });

  window.DECKS.push(
    D("a1-hotel", "A1", "At the hotel", "Otelde", "À l'hôtel", `
l'hôtel (m.)|otel|the hotel|The h is silent: « l'hôtel ».
la réception|resepsiyon|the reception
le réceptionniste|erkek resepsiyonist|the receptionist|f. la réceptionniste
la chambre|oda|the room
la chambre simple|tek kişilik oda|the single room
la chambre double|çift kişilik oda|the double room
le lit double|çift kişilik yatak|the double bed
les lits jumeaux (m.)|iki ayrı tek yatak|twin beds
la clé|anahtar|the key
la carte magnétique|kartlı anahtar|the key card
la nuit|gece|the night|deux nuits = two nights (hotel stay)
la réservation|rezervasyon|the booking
réserver|rezervasyon yapmak|to book
le petit-déjeuner compris|kahvaltı dahil|breakfast included
la salle de bains|banyo|the bathroom
la serviette|havlu|the towel
le savon|sabun|the soap
l'oreiller (m.)|yastık|the pillow
la couverture|battaniye|the blanket
la climatisation|klima|the air conditioning|Short: « la clim ».
le wifi|wifi|wifi|In French: « le wifi » (say "wee-fee").
l'ascenseur (m.)|asansör|the lift, the elevator
l'étage (m.)|kat|the floor
arriver|varmak, gelmek|to arrive
partir|ayrılmak, gitmek|to leave
Bonjour, j'ai une réservation au nom de Yılmaz.|Merhaba, Yılmaz adına bir rezervasyonum var.|Hello, I have a booking under the name Yılmaz.
Vous avez une chambre pour ce soir ?|Bu akşam için boş odanız var mı?|Do you have a room for tonight?
C'est combien la nuit ?|Gecesi ne kadar?|How much is it per night?
Le petit-déjeuner est à quelle heure ?|Kahvaltı saat kaçta?|What time is breakfast?
Quel est le code du wifi ?|Wifi şifresi ne?|What's the wifi password?
La chambre est au deuxième étage.|Oda ikinci katta.|The room is on the second floor.
Il n'y a pas de serviettes dans ma chambre.|Odamda havlu yok.|There are no towels in my room.
La douche ne marche pas.|Duş çalışmıyor.|The shower doesn't work.|marcher = to work (for machines)
Je peux laisser ma valise ici ?|Valizimi burada bırakabilir miyim?|Can I leave my suitcase here?`),

    D("a1-avoir", "A1", "Expressions with « avoir »", "« Avoir » ile kalıplar", "Les expressions avec « avoir »", `
avoir faim|acıkmak, aç olmak|to be hungry|French says "to have hunger": j'ai faim, never « je suis faim ».
avoir soif|susamak|to be thirsty
avoir chaud|sıcaklamak|to be hot|For a person. For the weather: « il fait chaud ».
avoir froid|üşümek|to be cold
avoir peur|korkmak|to be afraid|avoir peur de + noun: j'ai peur des chiens.
avoir sommeil|uykusu gelmek|to be sleepy
avoir mal|bir yeri ağrımak|to hurt|avoir mal à la tête, au dos, aux pieds
avoir raison|haklı olmak|to be right
avoir tort|haksız olmak|to be wrong
avoir besoin de|ihtiyacı olmak|to need|j'ai besoin d'aide
avoir envie de|canı istemek|to feel like|j'ai envie d'un café
avoir le temps|vakti olmak|to have time
avoir de la chance|şanslı olmak|to be lucky
avoir l'air|gibi görünmek|to look, to seem|Il a l'air fatigué.
avoir … ans|… yaşında olmak|to be … years old|J'ai trente ans. Never « je suis trente ».
avoir rendez-vous|randevusu olmak|to have an appointment
avoir cours|dersi olmak|to have a class
avoir de la fièvre|ateşi olmak|to have a temperature
avoir hâte|sabırsızlanmak, iple çekmek|to look forward, can't wait
avoir honte|utanmak|to be ashamed
J'ai très faim !|Çok acıktım!|I'm very hungry!
Tu as soif ? Il y a de l'eau.|Susadın mı? Su var.|Are you thirsty? There's water.
J'ai froid, je prends ma veste.|Üşüyorum, ceketimi alıyorum.|I'm cold, I'm taking my jacket.
Elle a peur de parler français.|Fransızca konuşmaktan korkuyor.|She's afraid of speaking French.|avoir peur de + infinitive
Tu as raison !|Haklısın!|You're right!
J'ai besoin d'une pause.|Bir molaya ihtiyacım var.|I need a break.
J'ai envie de dormir.|Canım uyumak istiyor.|I feel like sleeping.
Je n'ai pas le temps aujourd'hui.|Bugün vaktim yok.|I don't have time today.|Fixed expression: « pas le temps » keeps « le ».
J'ai mal aux jambes après la course.|Koşudan sonra bacaklarım ağrıyor.|My legs hurt after the run.
Vous avez de la chance !|Şanslısınız!|You're lucky!
Il a l'air content.|Mutlu görünüyor.|He looks happy.
J'ai hâte d'être en vacances !|Tatile çıkmayı iple çekiyorum!|I can't wait to be on holiday!`),

    D("a1-little-words", "A1", "Useful little words", "Küçük ama faydalı kelimeler", "Les petits mots utiles", `
aussi|de, da; ayrıca|also, too|Moi aussi ! = Me too!
très|çok|very|très + adjective: très bon
trop|fazla, çok fazla|too, too much|C'est trop cher.
assez|yeterince; oldukça|enough; quite|assez de temps = enough time
beaucoup|çok|a lot, much|beaucoup de + noun, no article: beaucoup de gens
un peu|biraz|a little|un peu de sucre
vraiment|gerçekten|really
bien|iyi|well|Tu parles bien !
mal|kötü|badly|Je dors mal.
ici|burada, buraya|here
là|orada; burada|there; here|Spoken French often uses « là » for "here": Je suis là !
là-bas|şurada, orada|over there
avec|ile, birlikte|with
sans|-sız, -siz; olmadan|without|un café sans sucre
pour|için|for|C'est pour toi.
chez|-in evinde, -e|at someone's place|chez moi, chez le médecin
mais|ama|but
ou|veya|or|Without accent. « où » with accent = where.
donc|yani, bu yüzden|so, therefore
alors|o zaman; peki|so, then|Very common to start a sentence: Alors…
parce que|çünkü|because|parce qu' before a vowel: parce qu'il pleut
peut-être|belki|maybe
surtout|özellikle|especially, above all
ensemble|birlikte|together
seulement|sadece|only
presque|neredeyse|almost
tout|her şey|everything|Tout va bien.
rien|hiçbir şey|nothing|Je ne comprends rien.
quelque chose|bir şey|something
quelqu'un|biri, birisi|someone
personne|hiç kimse|nobody|Il n'y a personne. (but « une personne » = a person)
partout|her yerde|everywhere
voilà|işte|here it is, there you go
d'accord|tamam|OK, agreed|Short: « d'acc ».`),

    D("a1-party", "A1", "Birthdays & parties", "Doğum günleri ve kutlamalar", "L'anniversaire et la fête", `
l'anniversaire (m.)|doğum günü|the birthday|Also: anniversary.
la fête|parti; bayram|the party; the celebration
le gâteau|pasta, kek|the cake|pl. les gâteaux
la bougie|mum|the candle
le cadeau|hediye|the present|pl. les cadeaux
la carte d'anniversaire|doğum günü kartı|the birthday card
l'invité (m.)|davetli, misafir|the guest|f. l'invitée
l'invitation (f.)|davet|the invitation
inviter|davet etmek|to invite
fêter|kutlamak|to celebrate
souffler les bougies|mumları üflemek|to blow out the candles
offrir|hediye etmek|to give (a present)|J'offre un livre à Marie.
ouvrir un cadeau|hediye açmak|to open a present
la surprise|sürpriz|the surprise
le ballon|balon; top|the balloon; the ball
la musique|müzik|the music
danser|dans etmek|to dance
chanter|şarkı söylemek|to sing
les boissons (f.)|içecekler|the drinks
le jus de fruits|meyve suyu|the fruit juice
le champagne|şampanya|the champagne
trinquer|kadeh tokuşturmak|to clink glasses
Joyeux anniversaire !|İyi ki doğdun!|Happy birthday!|Also: « Bon anniversaire ! »
Santé !|Şerefe!|Cheers!|Also « À la tienne ! » (tu) / « À la vôtre ! » (vous)
C'est quand, ton anniversaire ?|Doğum günün ne zaman?|When is your birthday?
Mon anniversaire, c'est le 12 mai.|Doğum günüm 12 Mayıs'ta.|My birthday is on 12 May.|No "th": le 12 mai. But « le 1er mai » (premier).
Tu as quel âge maintenant ?|Şimdi kaç yaşındasın?|How old are you now?
Tu viens à ma fête samedi ?|Cumartesi partime geliyor musun?|Are you coming to my party on Saturday?
C'est pour toi !|Bu senin için!|This is for you!
Merci, c'est très gentil !|Teşekkürler, çok naziksin!|Thank you, that's very kind!
J'apporte quelque chose ?|Bir şey getireyim mi?|Shall I bring something?|In France guests often bring a dessert or a drink.
On fait une fête surprise pour Lucas.|Lucas için sürpriz parti yapıyoruz.|We're having a surprise party for Lucas.
Le gâteau est délicieux !|Pasta çok lezzetli!|The cake is delicious!`),

    D("a2-forecast", "A2", "The weather forecast", "Hava durumu tahmini", "La météo et les prévisions", `
les prévisions météo (f.)|hava tahmini|the weather forecast|Short: « la météo ».
le bulletin météo|hava durumu bülteni|the weather report
prévoir|öngörmek, tahmin etmek|to forecast|La météo prévoit de la pluie.
une éclaircie|bulutların arasından güneşin açması|a sunny spell|Very typical in French forecasts.
un temps couvert|kapalı hava|overcast weather
le ciel se couvre|gökyüzü kapanıyor|the sky is clouding over
le ciel se dégage|gökyüzü açılıyor|the sky is clearing
une averse|sağanak|a shower
une giboulée|kısa süreli dolu/yağmur sağanağı|a sudden spring shower|« les giboulées de mars »
la grêle|dolu|hail
le verglas|buzlanma (yolda)|black ice
une rafale de vent|ani rüzgâr, bora|a gust of wind
la vague de chaleur|sıcak hava dalgası|the heatwave
la vague de froid|soğuk hava dalgası|the cold snap
la vigilance orange|turuncu uyarı|orange weather alert|Météo-France: vert, jaune, orange, rouge.
les températures en hausse (f.)|yükselen sıcaklıklar|rising temperatures
les températures en baisse (f.)|düşen sıcaklıklar|falling temperatures
la température ressentie|hissedilen sıcaklık|the "feels like" temperature
le minimum / le maximum|en düşük / en yüksek sıcaklık|the low / the high
au nord / au sud|kuzeyde / güneyde|in the north / in the south
dans l'après-midi|öğleden sonra|in the afternoon
en fin de journée|günün sonunda|at the end of the day
se rafraîchir|serinlemek|to get cooler|Le temps se rafraîchit.
se réchauffer|ısınmak|to get warmer
Il va faire beau tout le week-end.|Bütün hafta sonu hava güzel olacak.|It's going to be nice all weekend.
Il pleuvra demain sur toute la région.|Yarın bütün bölgeye yağmur yağacak.|It will rain tomorrow across the whole region.|pleuvra = futur simple of pleuvoir
On annonce des orages pour ce soir.|Bu akşam için fırtına bekleniyor.|Storms are expected tonight.|on annonce = they're forecasting
Il fera jusqu'à 35 degrés.|Sıcaklık 35 dereceye kadar çıkacak.|It will be up to 35 degrees.
Ça va se lever dans la matinée.|Sabah saatlerinde açılacak.|It will clear up during the morning.
Prends ton parapluie, on ne sait jamais.|Şemsiyeni al, belli olmaz.|Take your umbrella, you never know.
Il a fait un temps magnifique hier.|Dün hava harikaydı.|The weather was wonderful yesterday.
Avec ce vent, on ne court pas au bord de la mer.|Bu rüzgârda deniz kenarında koşulmaz.|With this wind, we're not running by the sea.
Quel temps fera-t-il samedi ?|Cumartesi hava nasıl olacak?|What will the weather be like on Saturday?`),

    D("a2-familiar", "A2", "Familiar everyday expressions", "Gündelik samimi ifadeler", "Les expressions familières du quotidien", `
T'inquiète !|Merak etme!|Don't worry!|Familiar for « Ne t'inquiète pas ».
Pas de souci !|Sorun değil!|No problem!
Laisse tomber.|Boş ver.|Forget it.
C'est pas la peine.|Gerek yok.|There's no need.|Spoken French often drops « ne »: « Ce n'est pas la peine ».
Ça m'est égal.|Benim için fark etmez.|I don't mind.
Bof.|Eh, idare eder.|Meh.|Shows no enthusiasm.
C'est nickel !|Tertemiz! / Mükemmel!|It's spotless! / Perfect!
C'est galère.|Çok zahmetli, dert.|It's a pain.|une galère = a hassle
Ça craint.|Hiç iyi değil, berbat.|That sucks.|Informal, not rude.
Je suis crevé(e).|Çok yorgunum, bittim.|I'm exhausted.
J'ai un coup de barre.|Birden yorgunluk çöktü.|I'm suddenly really tired.|Typical after lunch!
Je suis à la bourre.|Geç kaldım, acelem var.|I'm running late.
C'est le bazar !|Ortalık darmadağın!|What a mess!
un truc|şey, zımbırtı|a thing|When you don't know the word: « le truc pour ouvrir… ».
Ça te dit ?|İster misin? Canın çeker mi?|Do you fancy it?|Ça te dit, un ciné ?
C'est parti !|Haydi başlıyoruz!|Here we go!
Ça tombe bien.|Tam zamanında oldu.|That's good timing.
Ça tombe mal.|Kötü denk geldi.|That's bad timing.
N'importe quoi !|Saçmalık!|Nonsense!
Tu m'étonnes !|Hiç şaşırmadım! / Aynen!|No wonder! / You bet!|Ironic: it means "I'm not surprised".
Je n'en reviens pas !|İnanamıyorum!|I can't believe it!
Ça se voit.|Belli oluyor.|It shows.
C'est du gâteau.|Çocuk oyuncağı.|It's a piece of cake.
Ça caille !|Hava buz gibi!|It's freezing!|Very familiar.
Il fait un froid de canard.|Kemik donduran bir soğuk var.|It's bitterly cold.
J'ai une faim de loup.|Kurt gibi acıktım.|I'm starving.
dormir comme un loir|deliksiz uyumak|to sleep like a log|un loir = a dormouse
boire un coup|bir şeyler içmek|to have a drink|On va boire un coup après le travail ?
avoir le trac|sahne korkusu yaşamak, heyecanlanmak|to have stage fright, nerves|J'ai le trac avant l'examen.
On se fait un resto ?|Bir restorana gidelim mi?|Shall we go to a restaurant?|« se faire » + activity = to treat yourself to
Ça marche pour moi.|Bana uyar.|That works for me.
C'est pas mon truc.|Bana göre değil.|It's not my thing.`),

    D("a2-competition", "A2", "Sports competitions", "Spor müsabakaları", "La compétition sportive", `
la compétition|müsabaka, yarışma|the competition
le tournoi|turnuva|the tournament
la finale|final|the final
la demi-finale|yarı final|the semi-final
le quart de finale|çeyrek final|the quarter-final|pl. les quarts de finale
la phase de poules|grup aşaması|the group stage
l'adversaire (m./f.)|rakip|the opponent
l'équipe adverse (f.)|rakip takım|the opposing team
le capitaine|kaptan|the captain|f. la capitaine
le vainqueur|kazanan, galip|the winner
le perdant|kaybeden|the loser|f. la perdante
le podium|kürsü|the podium
le titre|unvan, şampiyonluk|the title
le record|rekor|the record
battre un record|rekor kırmak|to break a record|battre = to beat
se qualifier|elemeleri geçmek|to qualify
être éliminé(e)|elenmek|to be knocked out
remporter|kazanmak, almak|to win (a title, a match)|Elles ont remporté le tournoi.
battre une équipe|bir takımı yenmek|to beat a team
mener|önde olmak|to lead|On mène 15 à 12.
égaliser|beraberliği sağlamak|to equalise
l'avantage (m.)|avantaj|the advantage
le match à domicile|iç saha maçı|the home match
le match à l'extérieur|deplasman maçı|the away match
les tirs au but (m.)|penaltı atışları|the penalty shoot-out|Football.
le public|seyirciler|the crowd, the audience
encourager|tezahürat yapmak, desteklemek|to cheer on
Allez les Bleus !|Haydi Fransa!|Come on, France!|« les Bleus » = French national teams.
On a gagné 28 à 25 !|28-25 kazandık!|We won 28 to 25!
Ils ont perdu de deux points.|İki sayı farkla kaybettiler.|They lost by two points.
Elle est arrivée deuxième.|İkinci oldu.|She came second.
On est en finale !|Finaldeyiz!|We're in the final!
Le match est retransmis à la télé ce soir.|Maç bu akşam televizyonda yayınlanacak.|The match is broadcast on TV tonight.
Quel match ! Le suspense jusqu'à la fin !|Ne maçtı! Sonuna kadar heyecan!|What a match! Suspense right to the end!`),

    D("a2-doctor-visit", "A2", "Booking & seeing the doctor", "Doktordan randevu ve muayene", "Le rendez-vous chez le médecin", `
le médecin traitant|aile hekimi|the registered GP|Declare one to be better reimbursed.
le secrétariat médical|tıbbi sekreterlik|the medical reception
le cabinet|muayenehane|the practice, the surgery
le créneau|uygun saat aralığı|the time slot
la disponibilité|müsaitlik|the availability
annuler un rendez-vous|randevuyu iptal etmek|to cancel an appointment
décaler un rendez-vous|randevuyu ertelemek|to move an appointment|Also: « reporter ».
la salle d'attente|bekleme salonu|the waiting room
la consultation|muayene|the consultation|In France you often pay about 30 euros, then get reimbursed.
la téléconsultation|online muayene|the video consultation
ausculter|steteskopla dinlemek|to listen to (heart, lungs)
prendre la tension|tansiyon ölçmek|to take the blood pressure
le poids|kilo, ağırlık|the weight
le renouvellement d'ordonnance|reçete yenileme|the repeat prescription
le certificat médical|sağlık raporu|the medical certificate|Often needed to join a sports club.
le spécialiste|uzman doktor|the specialist
la feuille de soins|sağlık harcama formu|the treatment form (for reimbursement)
le tiers payant|doktora peşin ödeme yapmama sistemi|direct billing (no upfront payment)
être remboursé(e)|parası geri ödenmek|to be reimbursed
Je voudrais prendre rendez-vous avec le docteur Martin.|Doktor Martin'den randevu almak istiyorum.|I'd like to make an appointment with Dr Martin.
Vous avez un créneau cette semaine ?|Bu hafta boş bir saatiniz var mı?|Do you have a slot this week?
C'est pour un premier rendez-vous.|İlk randevu için.|It's for a first appointment.
J'ai pris rendez-vous sur Doctolib.|Doctolib'den randevu aldım.|I booked on Doctolib.|Doctolib = the main French booking app.
Je suis en retard de dix minutes, désolée.|On dakika gecikeceğim, özür dilerim.|I'm ten minutes late, sorry.
Qu'est-ce qui vous amène ?|Sizi buraya ne getirdi?|What brings you here?|The doctor's first question.
Ça a commencé il y a une semaine.|Bir hafta önce başladı.|It started a week ago.
Déshabillez-vous, s'il vous plaît.|Soyunun, lütfen.|Please get undressed.|Often just the top: « le haut ».
Allongez-vous sur la table.|Masaya uzanın.|Lie down on the table.
Respirez fort. Toussez.|Derin nefes alın. Öksürün.|Breathe deeply. Cough.
Vous prenez des médicaments ?|İlaç kullanıyor musunuz?|Are you taking any medication?
J'ai besoin d'un certificat pour le club de sport.|Spor kulübü için rapora ihtiyacım var.|I need a certificate for the sports club.
Est-ce que c'est grave, docteur ?|Ciddi bir şey mi, doktor?|Is it serious, doctor?
Revenez me voir si ça ne va pas mieux.|Düzelmezse tekrar gelin.|Come back if it doesn't get better.`)
  );
})();
