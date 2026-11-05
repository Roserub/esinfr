/* A1/A2 decks (v6): arts & culture, furniture, signs & city services, money, holidays & packing,
   polite requests, comparisons, stress at work, sports rules, coach's commands,
   pronominal verbs, numbers in daily life. */
(function () {
  const D = (id, level, en, tr, fr, lines) => ({
    id, level, name: { en, tr, fr },
    cards: lines.trim().split("\n").map(l => {
      const [f, t, e, n] = l.split("|").map(s => (s || "").trim());
      return { id: id + ":" + f, fr: f, tr: t, en: e, note: n || "" };
    })
  });

  window.DECKS.push(
    D("a1-culture", "A1", "Arts & culture", "Sanat ve kültür", "L'art et la culture", `
l'exposition (f.)|sergi|the exhibition|Short: « l'expo ».
l'œuvre d'art (f.)|sanat eseri|the work of art
la peinture|resim; boya|painting; paint
le peintre|ressam|the painter
la sculpture|heykel|the sculpture
la pièce de théâtre|tiyatro oyunu|the play
l'acteur (m.)|erkek oyuncu|the actor|f. l'actrice
la scène|sahne|the stage; the scene
le spectacle|gösteri|the show
la chanson|şarkı|the song
le chanteur|erkek şarkıcı|the singer|f. la chanteuse
le groupe|grup|the band; the group
le musicien|müzisyen|the musician|f. la musicienne
la guitare|gitar|the guitar
le piano|piyano|the piano
la batterie|davul seti|the drums|Also: the battery.
le violon|keman|the violin
jouer du violon|keman çalmak|to play the violin|jouer de + instrument (de + le = du), jouer à + sport
l'opéra (m.)|opera|the opera
le ballet|bale|the ballet
le roman|roman|the novel
l'écrivain (m.)|yazar|the writer
la bande dessinée|çizgi roman|the comic book|Short: « la BD ».
le festival|festival|the festival
l'entrée gratuite (f.)|ücretsiz giriş|free admission
l'audioguide (m.)|sesli rehber|the audio guide
le chef-d'œuvre|başyapıt|the masterpiece
applaudir|alkışlamak|to clap, applaud
C'est mon chanteur préféré.|O benim en sevdiğim şarkıcı.|He's my favourite singer.
J'adore ce tableau.|Bu tabloya bayılıyorum.|I love this painting.
On va au concert ce soir ?|Bu akşam konsere gidelim mi?|Shall we go to the concert tonight?
Le musée est gratuit le premier dimanche du mois.|Müze her ayın ilk pazarı ücretsiz.|The museum is free on the first Sunday of the month.
Tu joues d'un instrument ?|Bir enstrüman çalıyor musun?|Do you play an instrument?
Le spectacle commence à 20 h.|Gösteri saat 20'de başlıyor.|The show starts at 8 pm.`),

    D("a1-furniture", "A1", "Furniture & household objects", "Mobilya ve ev eşyaları", "Les meubles et les objets de la maison", `
le meuble|mobilya parçası|the piece of furniture|les meubles = furniture
le canapé|kanepe|the sofa
le fauteuil|koltuk|the armchair
la table basse|sehpa|the coffee table
l'armoire (f.)|gardırop|the wardrobe
la commode|şifonyer|the chest of drawers
le tiroir|çekmece|the drawer
l'étagère (f.)|raf|the shelf
la bibliothèque|kitaplık; kütüphane|the bookcase; the library
le bureau|çalışma masası; ofis|the desk; the office
la lampe|lamba|the lamp
le tapis|halı|the rug, carpet
le rideau|perde|the curtain|Plural: les rideaux.
le miroir|ayna|the mirror
le coussin|kırlent|the cushion
l'oreiller (m.)|yastık|the pillow
la couverture|battaniye|the blanket
le drap|çarşaf|the sheet
la couette|yorgan|the duvet
le réveil|çalar saat|the alarm clock
la poubelle|çöp kutusu|the bin
le cadre|çerçeve|the frame
la plante verte|saksı bitkisi|the houseplant
la prise|priz|the socket
l'interrupteur (m.)|elektrik düğmesi|the light switch
l'ampoule (f.)|ampul|the light bulb
le placard|gömme dolap|the cupboard
le porte-manteau|portmanto|the coat rack
la table de nuit|komodin|the bedside table
Le canapé est très confortable.|Kanepe çok rahat.|The sofa is very comfortable.
J'ai acheté une lampe d'occasion.|İkinci el bir lamba aldım.|I bought a second-hand lamp.
Le livre est sur l'étagère.|Kitap rafta.|The book is on the shelf.
Où est-ce que je mets ce carton ?|Bu koliyi nereye koyayım?|Where do I put this box?
L'appartement est meublé ?|Daire eşyalı mı?|Is the flat furnished?|meublé = furnished, vide = unfurnished`),

    D("a1-signs", "A1", "Signs & city services", "Tabelalar ve şehir hizmetleri", "Les panneaux et les services en ville", `
Entrée|Giriş|Entrance|On doors and signs.
Sortie|Çıkış|Exit
Sortie de secours|Acil çıkış|Emergency exit
Poussez|İtiniz|Push
Tirez|Çekiniz|Pull
Ouvert|Açık|Open
Fermé|Kapalı|Closed
Interdit de fumer|Sigara içmek yasaktır|No smoking
Défense d'entrer|Girmek yasaktır|No entry|Also « Entrée interdite ».
Interdit aux chiens|Köpek giremez|No dogs allowed
Privé|Özel|Private
Hors service|Hizmet dışı|Out of order
En travaux|Tadilatta|Works in progress
Attention|Dikkat|Caution
Sol glissant|Kaygan zemin|Slippery floor
Peinture fraîche|Yeni boyandı|Wet paint
Stationnement interdit|Park etmek yasaktır|No parking
Accueil|Danışma|Reception
Caisse|Kasa|Checkout, till
Renseignements|Bilgi|Information
Horaires d'ouverture|Açılış saatleri|Opening hours
Sonnez|Zili çalın|Ring the bell
Ne pas déranger|Rahatsız etmeyin|Do not disturb
Complet|Dolu|Full, no vacancies
RDC|Zemin kat|Ground floor|= rez-de-chaussée; lift button 0.
le commissariat|karakol|the police station
la caserne des pompiers|itfaiye istasyonu|the fire station
l'office de tourisme (m.)|turizm danışma bürosu|the tourist office
les toilettes publiques (f.)|umumi tuvalet|public toilets
la fontaine à eau|su çeşmesi|the drinking fountain
le panneau|tabela|the sign
C'est fermé le lundi.|Pazartesi kapalı.|It's closed on Mondays.
Il faut tirer, pas pousser !|Çekmek lazım, itmek değil!|You have to pull, not push!
L'ascenseur est en panne.|Asansör bozuk.|The lift is out of order.`),

    D("a1-money", "A1", "Money & paying", "Para ve ödeme", "L'argent et le paiement", `
l'argent (m.)|para|money|Also: silver.
la monnaie|bozuk para; para üstü|change; currency
le centime|sent|the cent
le billet de 20 euros|20 avroluk banknot|the 20-euro note
la pièce de 2 euros|2 avroluk madeni para|the 2-euro coin
la carte bancaire|banka kartı|the bank card|Short: « la CB ».
le code secret|şifre (PIN)|the PIN
payer par carte|kartla ödemek|to pay by card
payer en liquide|nakit ödemek|to pay in cash|Formal: « en espèces ».
le paiement sans contact|temassız ödeme|contactless payment
le distributeur de billets|ATM|the cash machine
faire l'appoint|tam para vermek|to give the exact amount|Sign: « Merci de faire l'appoint ».
prêter de l'argent|borç para vermek|to lend money
emprunter|borç almak|to borrow
bon marché|ucuz|cheap|Invariable.
la réduction|indirim|the discount
rendre la monnaie|para üstü vermek|to give change
le porte-monnaie|bozuk para cüzdanı|the purse, coin purse
le portefeuille|cüzdan|the wallet
dépenser|harcamak|to spend (money)
économiser|para biriktirmek|to save (money)
coûter cher|pahalı olmak|to be expensive|Ça coûte cher.
Vous payez comment ?|Nasıl ödüyorsunuz?|How are you paying?
Je vous dois combien ?|Size borcum ne kadar?|How much do I owe you?
Il me manque 20 centimes.|20 sentim eksik.|I'm 20 cents short.
Ça fait 12,50 €.|12,50 € ediyor.|That's €12.50.|Say: douze euros cinquante.
Je peux payer par carte ?|Kartla ödeyebilir miyim?|Can I pay by card?
Vous avez la monnaie sur 50 euros ?|50 avronun bozuğu var mı?|Do you have change for 50 euros?
Gardez la monnaie.|Üstü kalsın.|Keep the change.
Vous voulez le ticket ?|Fişi ister misiniz?|Do you want the receipt?
Tapez votre code.|Şifrenizi girin.|Enter your PIN.
Je n'ai pas de monnaie.|Bozuk param yok.|I don't have any change.
On partage l'addition ?|Hesabı bölüşelim mi?|Shall we split the bill?
La carte ne passe pas.|Kart geçmiyor.|The card isn't going through.`),

    D("a1-packing", "A1", "Holidays & packing", "Tatil ve bavul hazırlama", "Les vacances et la valise", `
la valise|bavul|the suitcase
faire sa valise|bavul hazırlamak|to pack (one's suitcase)
le sac à dos|sırt çantası|the backpack
le bagage à main|el bagajı|the hand luggage
le billet d'avion|uçak bileti|the plane ticket
la crème solaire|güneş kremi|the sun cream
les lunettes de soleil (f.)|güneş gözlüğü|sunglasses
la serviette de plage|plaj havlusu|the beach towel
le chapeau|şapka|the hat|Plural: les chapeaux.
la trousse de toilette|tuvalet çantası|the toiletry bag
la brosse à dents|diş fırçası|the toothbrush
le dentifrice|diş macunu|the toothpaste
le chargeur|şarj aleti|the charger
l'adaptateur (m.)|adaptör|the plug adapter
la tente|çadır|the tent
le sac de couchage|uyku tulumu|the sleeping bag
l'appareil photo (m.)|fotoğraf makinesi|the camera
le plan de la ville|şehir haritası|the town map
la carte postale|kartpostal|the postcard
le souvenir|hediyelik eşya; anı|the souvenir; the memory
partir en vacances|tatile çıkmak|to go on holiday
la location de vacances|tatil için kiralık ev|the holiday rental
à la mer|deniz kenarında|at the seaside
à la montagne|dağda|in the mountains
à la campagne|kırsalda|in the countryside
le camping|kamp alanı; kamp|the campsite; camping
se baigner|denize girmek; yüzmek|to have a swim, bathe
bronzer|bronzlaşmak|to get a tan
N'oublie pas ton passeport !|Pasaportunu unutma!|Don't forget your passport!
Ma valise est trop lourde.|Bavulum çok ağır.|My suitcase is too heavy.
On part quand ?|Ne zaman yola çıkıyoruz?|When are we leaving?
Je pars une semaine en Turquie.|Bir haftalığına Türkiye'ye gidiyorum.|I'm going to Turkey for a week.
Bonnes vacances !|İyi tatiller!|Have a good holiday!`),

    D("a2-polite", "A2", "Polite requests & softeners", "Kibar ricalar ve yumuşatıcı ifadeler", "Demander poliment", `
Est-ce que vous pourriez m'aider ?|Bana yardım edebilir misiniz?|Could you help me?|Conditionnel = more polite.
Pourriez-vous parler un peu plus lentement ?|Biraz daha yavaş konuşabilir misiniz?|Could you speak a bit more slowly?
Ça vous dérange si j'ouvre la fenêtre ?|Pencereyi açsam sizi rahatsız eder mi?|Do you mind if I open the window?
Ça ne vous dérange pas ?|Sizi rahatsız etmiyor mu?|You don't mind?
Pas du tout, allez-y.|Hiç değil, buyurun.|Not at all, go ahead.
Je voudrais savoir si…|…mi diye öğrenmek istiyorum|I'd like to know if…
J'aimerais réserver pour deux personnes.|İki kişilik rezervasyon yapmak istiyorum.|I'd like to book for two people.
Vous auriez un moment ?|Bir dakikanız var mı?|Would you have a moment?
Vous auriez un stylo, par hasard ?|Acaba kaleminiz var mı?|Would you happen to have a pen?
Excusez-moi de vous déranger.|Rahatsız ettiğim için kusura bakmayın.|Sorry to bother you.
Je peux vous demander un service ?|Sizden bir ricam olabilir mi?|Can I ask you a favour?
Si ce n'est pas trop demander…|Çok şey istemiş olmazsam…|If it's not too much to ask…
Ce serait possible de changer l'heure ?|Saati değiştirmek mümkün olur mu?|Would it be possible to change the time?
Je me demandais si vous étiez libre jeudi.|Perşembe müsait misiniz diye merak ediyordum.|I was wondering if you were free on Thursday.|Imparfait softens the request.
Ça vous irait, demain à 10 h ?|Yarın saat 10 size uyar mı?|Would tomorrow at 10 suit you?
Je veux bien, merci.|Memnuniyetle, teşekkürler.|Yes please, thanks.|Polite yes to an offer.
Volontiers !|Seve seve!|Gladly!
Je suis désolé(e), mais ce n'est pas possible.|Üzgünüm ama mümkün değil.|I'm sorry, but it's not possible.
Malheureusement, je ne peux pas.|Maalesef yapamam.|Unfortunately, I can't.
Je préférerais mardi, si possible.|Mümkünse salıyı tercih ederim.|I'd prefer Tuesday, if possible.
Tu pourrais me passer le sel ?|Tuzu uzatır mısın?|Could you pass me the salt?
Tu peux baisser un peu la musique ?|Müziği biraz kısabilir misin?|Can you turn the music down a bit?
C'est très gentil de votre part.|Çok naziksiniz.|That's very kind of you.
Désolé(e) de vous interrompre.|Sözünüzü kestiğim için özür dilerim.|Sorry to interrupt you.
Il faudrait peut-être appeler avant.|Belki önceden aramak gerekir.|Maybe we should call first.|Soft suggestion.
Est-ce qu'il serait possible d'avoir un reçu ?|Bir makbuz alabilir miyim acaba?|Would it be possible to get a receipt?
Vous permettez ?|İzin verir misiniz?|May I?|E.g. before taking a chair.
Je vous dérange ?|Rahatsız ediyor muyum?|Am I disturbing you?
Ça ne vous ennuie pas d'attendre un peu ?|Biraz beklemeniz sorun olur mu?|Would you mind waiting a little?
N'hésitez pas à me demander.|Bana sormaktan çekinmeyin.|Don't hesitate to ask me.
Sans vouloir vous déranger…|Sizi rahatsız etmek istemem ama…|I don't want to bother you, but…
Un petit café, ça vous dit ?|Bir kahveye ne dersiniz?|Fancy a little coffee?|petit = friendly softener`),

    D("a2-compare", "A2", "Comparatives & superlatives", "Karşılaştırma ve üstünlük", "Comparer : plus, moins, aussi", `
plus … que|…-den daha …|more … than|Il est plus grand que moi.
moins … que|…-den daha az …|less … than
aussi … que|… kadar …|as … as
autant de … que|… kadar çok (isimle)|as much/many … as|With nouns.
plus de … que|…-den daha çok (isimle)|more (noun) than
meilleur(e)|daha iyi (sıfat)|better (adjective)|Never « plus bon ».
mieux|daha iyi (zarf)|better (adverb)|Never « plus bien ».
le meilleur, la meilleure|en iyi (sıfat)|the best (adjective)
le mieux|en iyisi (zarf)|the best (adverb)|C'est elle qui chante le mieux.
pire|daha kötü|worse
le plus …|en …|the most …
le moins …|en az …|the least …
de plus en plus|gittikçe daha çok|more and more
de moins en moins|gittikçe daha az|less and less
le même … que|… ile aynı|the same … as
pareil|aynı|the same|C'est pareil. (informal)
différent de|…-den farklı|different from
Elle court plus vite que moi.|O benden daha hızlı koşuyor.|She runs faster than me.
Le train est moins cher que l'avion.|Tren uçaktan daha ucuz.|The train is cheaper than the plane.
Mon frère est aussi grand que mon père.|Erkek kardeşim babam kadar uzun.|My brother is as tall as my father.
Ce gâteau est meilleur que l'autre.|Bu pasta öbüründen daha güzel.|This cake is better than the other one.
Je parle mieux français qu'avant.|Eskisinden daha iyi Fransızca konuşuyorum.|I speak French better than before.
C'est le meilleur restaurant du quartier.|Mahallenin en iyi restoranı.|It's the best restaurant in the area.|Superlative + de: du quartier.
C'est la plus belle ville de France.|Fransa'nın en güzel şehri.|It's the most beautiful city in France.
C'est le joueur le plus rapide de l'équipe.|Takımın en hızlı oyuncusu.|He's the fastest player on the team.
C'est l'exercice le moins difficile.|En az zor egzersiz bu.|It's the least difficult exercise.
Il y a plus de monde le samedi.|Cumartesi daha kalabalık.|There are more people on Saturdays.
J'ai autant de travail que toi.|Senin kadar işim var.|I have as much work as you.
Il fait de plus en plus froid.|Hava gittikçe soğuyor.|It's getting colder and colder.
Je dors de mieux en mieux.|Gittikçe daha iyi uyuyorum.|I'm sleeping better and better.
C'est pire qu'hier.|Dünden daha kötü.|It's worse than yesterday.
le plus souvent possible|olabildiğince sık|as often as possible
Plus je m'entraîne, plus je progresse.|Ne kadar çok antrenman yaparsam o kadar ilerliyorum.|The more I train, the more I improve.`),

    D("a2-work-stress", "A2", "Emotions at work & stress", "İşte duygular ve stres yönetimi", "Les émotions au travail et le stress", `
être débordé(e)|işe boğulmuş olmak|to be swamped
la charge de travail|iş yükü|the workload
la pression|baskı|pressure
être sous pression|baskı altında olmak|to be under pressure
le délai|süre; son tarih|the deadline; the time allowed
le conflit|çatışma|the conflict
s'énerver|sinirlenmek|to get annoyed
être épuisé(e)|tükenmiş olmak|to be exhausted
le burn-out|tükenmişlik sendromu|burnout|Also « l'épuisement professionnel ».
l'arrêt maladie (m.)|hastalık izni|sick leave
la pause déjeuner|öğle arası|the lunch break
déconnecter|işten kopmak; kafayı dağıtmak|to switch off, unplug
dire non|hayır demek|to say no
demander de l'aide|yardım istemek|to ask for help
être fier de soi|kendiyle gurur duymak|to be proud of oneself|f. fière
se sentir utile|kendini faydalı hissetmek|to feel useful
être motivé(e)|motive olmak|to be motivated
la reconnaissance|takdir|recognition, appreciation
l'ambiance au travail (f.)|iş ortamı|the atmosphere at work
le télétravail|uzaktan çalışma|working from home
les heures supplémentaires (f.)|fazla mesai|overtime|Short: « les heures sup ».
Je suis débordé(e) cette semaine.|Bu hafta başımı kaşıyacak vaktim yok.|I'm swamped this week.
Je suis à bout.|Dayanacak gücüm kalmadı.|I'm at the end of my tether.|Synonyme: Je n'en peux plus.
J'ai besoin de souffler.|Biraz nefes almaya ihtiyacım var.|I need a breather.
Mon chef me met la pression.|Müdürüm bana baskı yapıyor.|My boss is putting pressure on me.
Je peux en parler à mon responsable ?|Bunu yöneticimle konuşabilir miyim?|Can I talk to my manager about it?
On peut en parler calmement ?|Bunu sakince konuşabilir miyiz?|Can we talk about it calmly?
Une chose à la fois.|Her seferinde bir şey.|One thing at a time.
Ce n'est pas grave, ça arrive.|Önemli değil, olur böyle şeyler.|It's no big deal, it happens.
Je me suis senti(e) mal à l'aise.|Kendimi rahatsız hissettim.|I felt uncomfortable.
Bravo, tu as bien géré !|Bravo, iyi idare ettin!|Well done, you handled it well!
Je prends dix minutes pour marcher.|Yürümek için on dakika ayırıyorum.|I'm taking ten minutes to walk.
Le soir, je coupe mon téléphone pro.|Akşamları iş telefonumu kapatıyorum.|In the evening, I switch off my work phone.
Il y a une bonne ambiance dans l'équipe.|Ekipte iyi bir hava var.|There's a good atmosphere in the team.`),

    D("a2-sports-rules", "A2", "Sports equipment & rules", "Spor malzemeleri ve kurallar", "Le matériel et les règles du sport", `
la balle|küçük top|the ball (small)|Tennis, ping-pong. le ballon = big ball.
le filet|file|the net
la raquette|raket|the racket
le maillot|forma|the jersey, shirt
le protège-tibias|tekmelik|the shin guard|Plural unchanged.
le sifflet|düdük|the whistle
la règle|kural|the rule
la faute|faul|the foul
le carton jaune|sarı kart|the yellow card
le carton rouge|kırmızı kart|the red card
le hors-jeu|ofsayt|offside
le temps mort|mola (time-out)|the time-out
la prolongation|uzatma|extra time
le match nul|beraberlik|the draw
marquer un but|gol atmak|to score a goal
siffler|düdük çalmak|to blow the whistle
l'exclusion de deux minutes (f.)|iki dakikalık uzaklaştırma|the two-minute suspension|Handball rule.
le jet de sept mètres|yedi metre atışı|the seven-metre throw|Handball penalty.
le remplaçant|yedek oyuncu|the substitute|f. la remplaçante
la ligne de touche|taç çizgisi|the touchline, sideline
la zone|alan (hentbolda kale alanı)|the area; the goal area (handball)
le chronomètre|kronometre|the stopwatch
le classement|sıralama|the league table, ranking
la coupe|kupa|the cup
la médaille|madalya|the medal
le banc de touche|yedek kulübesi|the bench
tricher|hile yapmak|to cheat
L'arbitre a sifflé une faute.|Hakem faul çaldı.|The referee blew for a foul.
Il a pris un carton jaune.|Sarı kart gördü.|He got a yellow card.
C'est hors-jeu !|Ofsayt!|That's offside!
Le score est de 2 à 1.|Skor 2-1.|The score is 2-1.
L'entraîneur demande un temps mort.|Antrenör mola istiyor.|The coach calls a time-out.
Ce n'est pas autorisé.|Buna izin verilmiyor.|That's not allowed.
On joue en deux mi-temps de trente minutes.|Otuzar dakikalık iki devre oynanıyor.|We play two halves of thirty minutes.`),

    D("a2-gym-coach", "A2", "The coach's commands", "Antrenörün komutları", "Les consignes du coach", `
Échauffez-vous !|Isının!|Warm up!
Gainez !|Gövdenizi sıkın!|Brace your core!|le gainage = core work
Serrez les abdos.|Karın kaslarınızı sıkın.|Tighten your abs.
Inspirez par le nez.|Burnunuzdan nefes alın.|Breathe in through your nose.
Expirez par la bouche.|Ağzınızdan nefes verin.|Breathe out through your mouth.
Pliez les jambes.|Bacaklarınızı bükün.|Bend your legs.
Tendez les bras.|Kollarınızı uzatın.|Straighten your arms.
Gardez le dos droit.|Sırtınızı dik tutun.|Keep your back straight.
Rentrez le ventre.|Karnınızı içeri çekin.|Pull your stomach in.
Descendez lentement.|Yavaşça inin.|Go down slowly.
Remontez.|Tekrar yukarı çıkın.|Come back up.
Tenez la position.|Pozisyonu koruyun.|Hold the position.
Encore cinq secondes !|Beş saniye daha!|Five more seconds!
Allez, on ne lâche rien !|Hadi, pes etmek yok!|Come on, don't give up!|Spoken: « on lâche rien ».
Les pieds écartés largeur d'épaules.|Ayaklar omuz genişliğinde açık.|Feet shoulder-width apart.
Les genoux ne dépassent pas les pieds.|Dizler ayak uçlarını geçmesin.|Knees don't go past your toes.
Regardez devant vous.|Önünüze bakın.|Look straight ahead.
Changez de côté.|Taraf değiştirin.|Switch sides.
Récupérez trente secondes.|Otuz saniye dinlenin.|Rest for thirty seconds.
Buvez un peu d'eau.|Biraz su için.|Drink a little water.
On passe à l'exercice suivant.|Bir sonraki egzersize geçiyoruz.|Let's move on to the next exercise.
Dernière série !|Son set!|Last set!
Tout le monde en place !|Herkes yerine!|Everyone in position!
Sautez !|Zıplayın!|Jump!
Courez sur place.|Yerinizde koşun.|Run on the spot.
Étirez-vous doucement.|Yavaşça esneyin.|Stretch gently.
le squat|squat (çömelme)|the squat
la pompe|şınav|the push-up
la fente|lunge (öne hamle)|the lunge
la planche|plank|the plank
le retour au calme|soğuma|the cool-down
Bien joué, bonne séance !|Aferin, iyi antrenmanlar!|Well done, good session!`),

    D("a2-pronominal", "A2", "Frequent pronominal verbs", "Sık kullanılan dönüşlü fiiller", "Les verbes pronominaux fréquents", `
se souvenir de|hatırlamak|to remember|Je me souviens de toi.
se rappeler|hatırlamak|to remember|Je me rappelle cette journée. (no « de »)
s'occuper de|ilgilenmek; bakmak|to take care of, deal with
se tromper|yanılmak; hata yapmak|to make a mistake, be wrong
se taire|susmak|to be quiet|Tais-toi ! = Be quiet!
se moquer de|alay etmek|to make fun of
s'inquiéter|endişelenmek|to worry
se plaindre|şikâyet etmek|to complain
s'ennuyer|sıkılmak|to be bored
se servir de|kullanmak|to use|Je me sers de mon téléphone.
se perdre|kaybolmak|to get lost
se rendre compte de|farkına varmak|to realise
se faire du souci|kaygılanmak|to worry|Je me fais du souci pour lui.
s'inscrire|kaydolmak|to sign up, enrol
s'installer|yerleşmek|to settle in
s'habituer à|alışmak|to get used to
s'entendre avec|biriyle iyi anlaşmak|to get on with
se disputer|tartışmak; kavga etmek|to argue
se marier|evlenmek|to get married
se rencontrer|tanışmak; karşılaşmak|to meet
se retrouver|buluşmak|to meet up
se débrouiller|başının çaresine bakmak|to manage, cope|Je me débrouille en français.
se mettre à|…-e başlamak|to start (doing)|Il se met à pleuvoir.
s'arrêter|durmak|to stop
se passer|olmak; geçmek|to happen; to go (well/badly)
s'intéresser à|…-e ilgi duymak|to be interested in
Ne t'inquiète pas !|Merak etme!|Don't worry!
Dépêche-toi !|Acele et!|Hurry up!
Je me suis trompé(e) de bus.|Yanlış otobüse bindim.|I took the wrong bus.|se tromper de = get the wrong …
On se retrouve devant la gare ?|İstasyonun önünde buluşalım mı?|Shall we meet in front of the station?
Je m'habitue à la vie en France.|Fransa'daki hayata alışıyorum.|I'm getting used to life in France.
Tu te souviens de son prénom ?|Onun adını hatırlıyor musun?|Do you remember his/her first name?
Ça s'est bien passé ?|İyi geçti mi?|Did it go well?|Pronominal verbs take être in the passé composé.
Je m'entends bien avec mes collègues.|İş arkadaşlarımla iyi anlaşıyorum.|I get on well with my colleagues.`),

    D("a2-numbers-life", "A2", "Numbers in daily life", "Günlük hayatta sayılar", "Les nombres au quotidien", `
Quelle est la date aujourd'hui ?|Bugün ayın kaçı?|What's the date today?
On est le 3 mars.|Bugün 3 Mart.|It's 3 March.|le + number for dates.
le premier mai|1 Mayıs|the first of May|Only « premier » is ordinal in dates.
Je suis né(e) le 12 avril 1996.|12 Nisan 1996'da doğdum.|I was born on 12 April 1996.|Say: mille neuf cent quatre-vingt-seize.
en 2026|2026'da|in 2026|Years take « en »: en deux mille vingt-six.
C'est le 06 12 34 56 78.|Numaram 06 12 34 56 78.|It's 06 12 34 56 78.|Said in pairs: zéro six, douze, trente-quatre…
J'habite au 25, rue Victor-Hugo.|Victor-Hugo Sokağı 25 numarada oturuyorum.|I live at 25 Victor-Hugo Street.
le code de la porte|kapı şifresi|the door code|Also « le digicode ».
Ça coûte 3,50 €.|3,50 € tutuyor.|It costs €3.50.|Say: trois euros cinquante.
la moitié|yarısı|half|la moitié du gâteau
un quart|çeyrek|a quarter
un tiers|üçte bir|a third
le double|iki katı|double, twice as much
une douzaine d'œufs|bir düzine yumurta|a dozen eggs
une dizaine|on kadar|about ten
une vingtaine de personnes|yirmi kadar kişi|about twenty people
des centaines|yüzlerce|hundreds
des milliers|binlerce|thousands
une livre de cerises|yarım kilo kiraz|a pound of cherries|une livre = 500 g
cinquante pour cent|yüzde elli|fifty per cent|Written 50 %.
Je mesure 1,65 m.|Boyum 1,65.|I'm 1.65 m tall.|Say: un mètre soixante-cinq.
Je pèse 60 kilos.|60 kilo geliyorum.|I weigh 60 kilos.
Le train part à 18 h 30.|Tren 18.30'da kalkıyor.|The train leaves at 6:30 pm.|Say: dix-huit heures trente.
Vous êtes combien ?|Kaç kişisiniz?|How many of you are there?
Nous sommes quatre.|Dört kişiyiz.|There are four of us.
deux fois par semaine|haftada iki kez|twice a week
la première fois|ilk kez|the first time
le dernier jour|son gün|the last day
Il reste trois places.|Üç yer kaldı.|There are three places left.
Faites le 15 en cas d'urgence.|Acil durumda 15'i arayın.|Dial 15 in an emergency.|15 = SAMU, 18 = pompiers, 112 = Europe.
C'est au troisième étage.|Üçüncü katta.|It's on the third floor.|French 1st floor = UK 1st floor.
Il y a environ mille habitants.|Yaklaşık bin kişi yaşıyor.|There are about a thousand inhabitants.`)
  );
})();
