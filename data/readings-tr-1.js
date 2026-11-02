/* Turkish and English translations of the readings (paragraphs, questions, options), shown by the "show translation" button. */
(function () {
  const T = window.READING_TR = window.READING_TR || {};
  Object.assign(T, {
    "r-cafe": {
      tr: [
        "Esin garın yakınındaki küçük bir kafeye giriyor. Saat sabahın sekizi. Garsona « Bonjour! » (Merhaba!) diyor.",
        "« Merhaba hanımefendi. Ne istersiniz? » diye soruyor garson. Esin cevap veriyor: « Bir sütlü kahve ve bir kruvasan istiyorum, lütfen. »",
        "Sütlü kahve üç euro, kruvasan bir euro yirmi sent. Esin kartla ödüyor. Pencerenin yanına oturuyor ve sokaktaki insanlara bakıyor. Mutlu: Fransızca konuştu!"
      ],
      en: [
        "Esin walks into a small café near the station. It is eight o'clock in the morning. She says « Bonjour! » (Hello!) to the waiter.",
        "« Hello, madam. What would you like? » asks the waiter. Esin answers: « I would like a café crème and a croissant, please. »",
        "The café crème costs three euros and the croissant costs one euro twenty. Esin pays by card. She sits down by the window and watches the people in the street. She is happy: she spoke French!"
      ],
      q: [
        { tr: "Kafe nerede?", en: "Where is the café?", o: [["Garın yakınında", "Near the station"], ["Üniversitenin yakınında", "Near the university"], ["Bir otelde", "In a hotel"]] },
        { tr: "Esin ne sipariş ediyor?", en: "What does Esin order?", o: [["Bir çay ve bir pasta", "A tea and a cake"], ["Bir sütlü kahve ve bir kruvasan", "A café crème and a croissant"], ["Bir portakal suyu", "An orange juice"]] },
        { tr: "Kruvasan kaç para?", en: "How much does the croissant cost?", o: [["3 €", "€3"], ["1,20 €", "€1.20"], ["2,10 €", "€2.10"]] },
        { tr: "Esin nasıl ödüyor?", en: "How does Esin pay?", o: [["Nakit", "In cash"], ["Kartla", "By card"], ["Çekle", "By cheque"]] }
      ]
    },
    "r-marche": {
      tr: [
        "Cumartesi günleri belediye meydanında bir pazar kuruluyor. Esin pazarı çok seviyor: meyveler taze ve insanlar sevimli.",
        "Bugün bir kilo domates, elma ve peynir alıyor. Peynirci çok nazik. « Bu peyniri tadın, hanımefendi! » diyor. Esin tadıyor: çok lezzetli.",
        "Pazarda zeytin ve baharat da var. Esin Türkiye'yi düşünüyor ve gülümsüyor. Kahvaltı için siyah zeytin alıyor."
      ],
      en: [
        "On Saturdays, there is a market on the town hall square. Esin really likes the market: the fruit is fresh and the people are friendly.",
        "Today she buys a kilo of tomatoes, some apples and some cheese. The cheese seller is very kind. He says: « Taste this cheese, madam! » Esin tastes it: it's delicious.",
        "At the market there are also olives and spices. Esin thinks of Turkey and smiles. She buys black olives for breakfast."
      ],
      q: [
        { tr: "Pazar ne zaman?", en: "When is the market?", o: [["Pazar günleri", "On Sundays"], ["Cumartesi günleri", "On Saturdays"], ["Her gün", "Every day"]] },
        { tr: "Satıcı ne öneriyor?", en: "What does the seller offer?", o: [["Peyniri tatmayı", "To taste the cheese"], ["Bir kahve", "A coffee"], ["Çiçek", "Flowers"]] },
        { tr: "Esin neden gülümsüyor?", en: "Why does Esin smile?", o: [["Türkiye'yi düşünüyor", "She is thinking of Turkey"], ["Peynir pahalı", "The cheese is expensive"], ["Yağmur yağıyor", "It is raining"]] }
      ]
    },
    "r-appart": {
      tr: [
        "Üçüncü kattaki bir dairede oturuyorum. Asansör var ama sık sık merdiveni kullanıyorum: sağlığa iyi geliyor!",
        "Daire çok büyük değil. Bir yatak odası, bir salon, küçük bir mutfak ve bir banyo var. Salonda mavi bir kanepe, bir masa ve bir sürü bitki var.",
        "En sevdiğim oda mutfak. Sabahları çay demliyorum ve pencereden dışarı bakıyorum. Akşamları Türk yemekleri pişiriyorum ve arkadaşlarla yiyorum."
      ],
      en: [
        "I live in a flat on the third floor. There is a lift, but I often take the stairs: it's good for your health!",
        "The flat is not very big. There is a bedroom, a living room, a small kitchen and a bathroom. In the living room there is a blue sofa, a table and lots of plants.",
        "My favourite room is the kitchen. In the morning, I make tea and look out of the window. In the evening, I cook Turkish dishes and eat with friends."
      ],
      q: [
        { tr: "Daire kaçıncı katta?", en: "Which floor is the flat on?", o: [["Birinci katta", "On the first"], ["İkinci katta", "On the second"], ["Üçüncü katta", "On the third"]] },
        { tr: "Neden merdiveni kullanıyor?", en: "Why does she take the stairs?", o: [["Asansör bozuk", "The lift is broken"], ["Sağlığa iyi geliyor", "It's good for your health"], ["Korkuyor", "She is scared"]] },
        { tr: "En sevdiği oda hangisi?", en: "What is her favourite room?", o: [["Yatak odası", "The bedroom"], ["Mutfak", "The kitchen"], ["Salon", "The living room"]] }
      ]
    },
    "r-semaine": {
      tr: [
        "Pazartesi ve çarşamba günleri saat ondan öğlene kadar Fransızca dersim var. Salı günleri yüzme havuzuna gidiyorum. Perşembe günleri alışveriş yapıyorum ve evi topluyorum.",
        "Cuma akşamları altyazılı bir Fransız filmi izliyorum. Cumartesi günleri arkadaşlarımla görüşüyorum. Pazar günleri dinleniyorum: kitap okuyorum, uyuyorum ve Türkiye'deki ailemi arıyorum.",
        "Haftam oldukça sakin. Her gün biraz, yavaş yavaş öğreniyorum."
      ],
      en: [
        "On Mondays and Wednesdays, I have a French class from ten o'clock to noon. On Tuesdays, I go to the swimming pool. On Thursdays, I do the shopping and tidy the house.",
        "On Friday evenings, I watch a French film with subtitles. On Saturdays, I see friends. On Sundays, I rest: I read, I sleep and I call my family in Turkey.",
        "My week is fairly calm. I learn a little every day, slowly."
      ],
      q: [
        { tr: "Fransızca dersi ne zaman?", en: "When is the French class?", o: [["Pazartesi ve çarşamba", "On Mondays and Wednesdays"], ["Salı ve perşembe", "On Tuesdays and Thursdays"], ["Cumartesi", "On Saturdays"]] },
        { tr: "Pazar günleri ne yapıyor?", en: "What does she do on Sundays?", o: [["Yüzme havuzuna gidiyor", "She goes to the swimming pool"], ["Dinleniyor", "She rests"], ["Çalışıyor", "She works"]] },
        { tr: "Cuma günkü film…", en: "The Friday film is…", o: [["altyazısız", "without subtitles"], ["altyazılı", "with subtitles"], ["Türkçe", "in Turkish"]] }
      ]
    },
    "r-medecin": {
      tr: [
        "Üç gündür Esin'in boğazı ağrıyor ve çok öksürüyor. İnternetten bir pratisyen hekimden randevu alıyor.",
        "Doktor onu muayene ediyor. « Ateşiniz var mı? » — « Biraz, dün akşam: 38,2. » Doktor boğazına bakıyor ve ciğerlerini dinliyor. « Ciddi bir şey değil, viral bir anjin (boğaz enfeksiyonu). Antibiyotiğe gerek yok. Bol su için, dinlenin ve ağrınız olursa parasetamol alın. »",
        "Ona bir reçete ve iki günlük bir iş göremezlik raporu veriyor. Esin muayene ücretini Vitale kartıyla ödüyor: Sağlık Sigortası (Assurance maladie) ücretin büyük bir kısmını geri ödüyor."
      ],
      en: [
        "For three days, Esin has had a sore throat and she has been coughing a lot. She books an appointment online with a general practitioner.",
        "The doctor examines her. « Do you have a fever? » — « A little, last night: 38.2. » The doctor looks at her throat and listens to her lungs. « It's nothing serious, it's viral tonsillitis. No need for antibiotics. Drink lots of water, rest, and take paracetamol if you are in pain. »",
        "He gives her a prescription and a two-day sick note. Esin pays for the consultation with her Carte Vitale: the national health insurance (Assurance maladie) reimburses a large part of the price."
      ],
      q: [
        { tr: "Esin ne zamandan beri hasta?", en: "How long has Esin been ill?", o: [["Bir haftadır", "A week"], ["Üç gündür", "Three days"], ["Bir aydır", "A month"]] },
        { tr: "Doktor ne diyor?", en: "What does the doctor say?", o: [["Antibiyotik gerekiyor", "Antibiotics are needed"], ["Ciddi bir şey değil", "It's nothing serious"], ["Hastaneye gitmek gerekiyor", "She needs to go to hospital"]] },
        { tr: "Ona ne veriyor?", en: "What does he give her?", o: [["Bir reçete ve bir iş göremezlik raporu", "A prescription and a sick note"], ["Bir aşı", "A vaccine"], ["Bir röntgen", "An X-ray"]] },
        { tr: "Ücretin bir kısmını kim geri ödüyor?", en: "Who reimburses part of the price?", o: [["Belediye", "The town hall"], ["Sağlık Sigortası", "The national health insurance"], ["Eczacı", "The pharmacist"]] }
      ]
    },
    "r-handball": {
      tr: [
        "Cumartesi akşamı Esin bir arkadaşıyla hentbol maçı izlemeye gitti. Birinci lig maçıydı ve salon doluydu.",
        "Başta ev sahibi takım çok top kaybetti ve devre arasında üç gol gerideydi. Ama ikinci yarıda kaleci inanılmaz kurtarışlar yaptı ve kanat oyuncuları muhteşem goller attı. Sonunda ev sahibi takım iki gol farkla kazandı.",
        "Maç sırasında bir oyuncu bileğinden sakatlandı. Esin takımın fizyoterapistini izledi: buz koydu ve bant (strapping) yaptı. Kendi kendine şöyle dedi: « Bir gün o ben olacağım. »"
      ],
      en: [
        "On Saturday evening, Esin went to watch a handball match with a friend. It was a first-division match and the arena was full.",
        "At the start, the home team lost the ball a lot and, at half-time, they were three goals behind. But in the second half, the goalkeeper made incredible saves and the wingers scored magnificent goals. In the end, the home team won by two goals.",
        "During the match, a player injured his ankle. Esin watched the team's physio: he applied ice and a strapping. She said to herself: « One day, that will be me. »"
      ],
      q: [
        { tr: "Devre arasında ev sahibi takım…", en: "At half-time, the home team…", o: [["kazanıyordu", "was winning"], ["üç gol geride kaybediyordu", "was losing by three goals"], ["berabere idi", "was level"]] },
        { tr: "İkinci yarıda kim çok iyiydi?", en: "Who was very good in the second half?", o: [["Kaleci", "The goalkeeper"], ["Hakem", "The referee"], ["Antrenör", "The coach"]] },
        { tr: "Fizyoterapist ne yaptı?", en: "What did the physio do?", o: [["Masaj", "A massage"], ["Buz ve bant", "Ice and a strapping"], ["İğne", "An injection"]] },
        { tr: "Sonunda Esin ne düşünüyor?", en: "What does Esin think at the end?", o: [["Oynamak istediğini", "That she wants to play"], ["Bir gün bir takımın fizyoterapisti olacağını", "That one day she will be a team's physio"], ["Maçın sıkıcı olduğunu", "That the match was boring"]] }
      ]
    },
    "r-prefecture": {
      tr: [
        "Oturma iznini yenilemek için Esin'in önce başvurusunu internetten yapması gerekiyor. Bütün belgeleri hazırlıyor: pasaport, üç aydan yeni ikametgâh belgesi, vesikalık fotoğraflar ve sağlık sigortası belgesi.",
        "Birkaç hafta sonra bir randevu için çağrı mektubu alıyor. Her belgenin bir fotokopisiyle erken geliyor. Danışmada bir memur dosyasını kontrol ediyor. « Pasaportunuzun bir sayfası eksik », diyor. Neyse ki Esin'in yanında aslı var.",
        "Randevudan sonra ona bir alındı belgesi (récépissé) veriyorlar. Bu belge başvurusunun işlemde olduğunu kanıtlıyor. Esin rahat bir nefes alıyor: bir aşama daha tamamlandı."
      ],
      en: [
        "To renew her residence permit, Esin must first apply online. She prepares all the documents: passport, proof of address less than three months old, ID photos and a health insurance certificate.",
        "A few weeks later, she receives a notice for an appointment. She arrives early, with a copy of each document. At the reception desk, an officer checks her file. « One page of your passport is missing », he says. Luckily, Esin has the original with her.",
        "After the appointment, they give her a receipt (récépissé). This document proves that her application is being processed. Esin breathes a sigh of relief: one more step is done."
      ],
      q: [
        { tr: "Başvuru nasıl başlıyor?", en: "How does the application start?", o: [["Telefonla", "By phone"], ["İnternetten", "Online"], ["Postayla", "By post"]] },
        { tr: "İkametgâh belgesi … olmalı.", en: "The proof of address must be…", o: [["üç aydan yeni", "less than three months old"], ["bir yıldan yeni", "less than a year old"], ["altı aydan eski", "more than six months old"]] },
        { tr: "Randevudaki sorun ne?", en: "What is the problem at the appointment?", o: [["Geç kalıyor", "She is late"], ["Pasaportun bir sayfası eksik", "A page of the passport is missing"], ["Fotoğrafı yok", "She has no photos"]] },
        { tr: "Alındı belgesi ne işe yarar?", en: "What is the receipt for?", o: [["Her yere seyahat etmeye", "To travel everywhere"], ["Başvurunun işlemde olduğunu kanıtlamaya", "To prove the application is being processed"], ["Daha az vergi ödemeye", "To pay less tax"]] }
      ]
    },
    "r-recette": {
      tr: [
        "Bu akşam Esin Fransız komşuları için kırmızı mercimek çorbası yapıyor. Onlar mercimek çorbasını bilmiyorlar!",
        "Önce bir soğanı ve bir havucu küçük parçalar halinde doğruyor. Sonra onları biraz zeytinyağında kavuruyor. Bir kaşık domates salçası, ardından mercimeği ve bir buçuk litre suyu ekliyor. Yirmi beş dakika pişmeye bırakıyor.",
        "Sonunda çorbayı blenderdan geçiriyor ve kimyon, pul biber ve biraz limon ekliyor. Komşular bayılıyor. « Bize tarifini verir misin? » diye soruyorlar. Esin tarifi sözlük kullanmadan Fransızca yazıyor."
      ],
      en: [
        "This evening, Esin is making a red lentil soup for her French neighbours. They don't know mercimek çorbası!",
        "First, she cuts an onion and a carrot into small pieces. Then she fries them gently in a little olive oil. She adds a spoonful of tomato paste, then the lentils and a litre and a half of water. She lets it cook for twenty-five minutes.",
        "At the end, she blends the soup and adds cumin, chili and a little lemon. The neighbours love it. « Will you give us the recipe? » they ask. Esin writes it in French, without a dictionary."
      ],
      q: [
        { tr: "Kimin için yemek yapıyor?", en: "Who is she cooking for?", o: [["Komşuları için", "For her neighbours"], ["Ailesi için", "For her family"], ["Bir restoran için", "For a restaurant"]] },
        { tr: "Çorba ne kadar pişiyor?", en: "How long does the soup cook?", o: [["On dakika", "Ten minutes"], ["Yirmi beş dakika", "Twenty-five minutes"], ["Bir saat", "One hour"]] },
        { tr: "Sonunda ne ekliyor?", en: "What does she add at the end?", o: [["Şeker", "Sugar"], ["Kimyon, pul biber ve limon", "Cumin, chili and lemon"], ["Krema", "Cream"]] }
      ]
    },
    "r-seance": {
      tr: [
        "24 yaşındaki Thomas, üç hafta önce hentbol oynarken bileğini burktu. Doktoru ona on seans fizyoterapi yazdı.",
        "Seansın başında fizyoterapist ona birkaç soru soruyor: « Bu hafta ağrınız nasıl, 0'dan 10'a kadar? Bilek akşamları hâlâ şişiyor mu? » Thomas ağrının 3'te olduğunu ve şişliğin çok azaldığını söylüyor.",
        "Sonra egzersizlere geçiyorlar. Thomas önce eklem hareket açıklığı üzerinde çalışıyor, sonra bir lastik bantla bileğin etrafındaki kasları güçlendiriyor. Son olarak dengesiz bir platform üzerinde, önce gözler açık sonra kapalı, propriosepsiyon egzersizleri yapıyor. « Yeni bir burkulmayı önlemek için en önemlisi bu », diye açıklıyor fizyoterapist.",
        "Ayrılmadan önce ona evde her gün yapması için üç egzersiz veriyor. « Bunları ciddi şekilde yaparsanız, iki hafta sonra antrenmanlara dönebileceksiniz. »"
      ],
      en: [
        "Thomas, 24, sprained his ankle playing handball three weeks ago. His doctor prescribed him ten physiotherapy sessions.",
        "At the start of the session, the physio asks him a few questions: « How is the pain this week, from 0 to 10? Does the ankle still swell in the evening? » Thomas answers that the pain is at 3 and that the swelling has gone down a lot.",
        "Then they move on to the exercises. Thomas first works on range of motion, then on strengthening the muscles around the ankle with a resistance band. To finish, he does proprioception exercises on a wobble board, eyes open and then closed. « This is the most important thing to avoid another sprain », the physio explains.",
        "Before he leaves, she gives him three exercises to do at home every day. « If you do them seriously, you'll be able to go back to training in two weeks. »"
      ],
      q: [
        { tr: "Thomas fizyoterapiste neden geliyor?", en: "Why does Thomas come to the physio?", o: [["Bilek burkulması için", "For a sprained ankle"], ["Sırt ağrısı için", "For back pain"], ["Kol kırığı için", "For a broken arm"]] },
        { tr: "Şişlik nasıl?", en: "How is the swelling?", o: [["Arttı", "It has increased"], ["Çok azaldı", "It has gone down a lot"], ["Değişmedi", "It hasn't changed"]] },
        { tr: "Fizyoterapiste göre tekrarlamayı önlemek için en önemli egzersiz hangisi?", en: "According to the physio, which exercise is most important to avoid a recurrence?", o: [["Esneme", "Stretching"], ["Propriosepsiyon", "Proprioception"], ["Koşu", "Running"]] },
        { tr: "Antrenmanlara ne zaman dönebilecek?", en: "When will he be able to go back to training?", o: [["Yarın", "Tomorrow"], ["İki hafta sonra", "In two weeks"], ["Altı ay sonra", "In six months"]] }
      ]
    },
    "r-entretien": {
      tr: [
        "Esin bir rehabilitasyon merkezinde asistanlık pozisyonuna başvurdu. Bir iş görüşmesine çağrıldı.",
        "Müdire başlıyor: « Bana geçmişinizden bahsedin. » Esin Türkiye'de fizyoterapi mezunu olduğunu, birkaç yıl üst düzey hentbol takımlarıyla çalıştığını ve diplomasını Fransa'da tanıttırmakta olduğunu anlatıyor.",
        "« Neden bizimle çalışmak istiyorsunuz? » Esin spor yaralanmalarını iyi bildiğini, ekip çalışmasını sevdiğini ve profesyonel bir ortamda Fransızcasını geliştirmek istediğini söylüyor.",
        "Sonunda müdire soruyor: « Sorularınız var mı? » Esin iki soru hazırlamış: günlerin düzeni ve eğitim olanakları hakkında. Müdire gülümsüyor: « Sizi gelecek hafta arayacağız. »"
      ],
      en: [
        "Esin applied for an assistant position in a rehabilitation centre. She was invited to an interview.",
        "The director begins: « Tell me about your background. » Esin explains that she has a degree in physiotherapy from Turkey, that she worked for several years with top-level handball teams and that she is in the process of having her degree recognised in France.",
        "« Why do you want to work with us? » Esin answers that she knows sports injuries well, that she likes teamwork and that she wants to improve her French in a professional environment.",
        "At the end, the director asks: « Do you have any questions? » Esin has prepared two: about how the days are organised and about training opportunities. The director smiles: « We will call you back next week. »"
      ],
      q: [
        { tr: "Esin hangi pozisyona başvuruyor?", en: "Which position is Esin applying for?", o: [["Bir rehabilitasyon merkezinde asistan", "Assistant in a rehabilitation centre"], ["Beden eğitimi öğretmeni", "PE teacher"], ["Hemşire", "Nurse"]] },
        { tr: "Şu anda ne yapmakta?", en: "What is she in the process of doing?", o: [["Araba kullanmayı öğrenmek", "Learning to drive"], ["Diplomasını tanıttırmak", "Getting her degree recognised"], ["Daire aramak", "Looking for a flat"]] },
        { tr: "Kaç soru hazırladı?", en: "How many questions did she prepare?", o: [["Hiç", "None"], ["İki", "Two"], ["Beş", "Five"]] },
        { tr: "Müdirenin son cevabı ne?", en: "What is the director's final answer?", o: [["Pazartesi başlıyorsunuz", "You start on Monday"], ["Sizi gelecek hafta arayacağız", "We will call you back next week"], ["Pozisyon artık boş değil", "The position is no longer available"]] }
      ]
    },
    "r-staps": {
      tr: [
        "STAPS, « Beden ve Spor Etkinlikleri Bilimleri ve Teknikleri » anlamına gelir. Birçok Fransız üniversitesinin sunduğu üç yıllık bir lisans programıdır.",
        "Birinci yılda öğrenciler çok çeşitli dersler alır: anatomi, fizyoloji, psikoloji, spor sosyolojisi, spor tarihi… Ayrıca her hafta birkaç spor yaparlar. Teorik dersler (amfi dersleri) yüzlerce öğrencinin önünde amfide, uygulamalı dersler ise küçük gruplar halinde yapılır.",
        "İkinci ya da üçüncü yıldan itibaren öğrenciler bir uzmanlık alanı seçer, örneğin « sportif antrenman », « uyarlanmış beden etkinliği ve sağlık » ya da « eğitim ve motor beceri ».",
        "STAPS'a girmek için Parcoursup platformundan geçmek gerekir. Yabancı adayların çoğu zaman B2 düzeyinde Fransızca bildiklerini kanıtlamaları gerekir. Dosya çok önemlidir: notlar, motivasyon, spor deneyimi."
      ],
      en: [
        "STAPS stands for « Sciences and Techniques of Physical and Sports Activities ». It is a three-year bachelor's degree offered by many French universities.",
        "In the first year, students take a wide variety of courses: anatomy, physiology, psychology, sociology of sport, history of sport… They also practise several sports every week. Lectures take place in a lecture hall, in front of hundreds of students, and tutorials in small groups.",
        "From the second or third year, students choose a specialisation, for example « sports coaching », « adapted physical activity and health » or « education and motor skills ».",
        "To get into STAPS, you have to go through the Parcoursup platform. Foreign applicants often have to prove a B2 level of French. The application file counts a lot: grades, motivation, sports experience."
      ],
      q: [
        { tr: "STAPS lisansı kaç yıl sürer?", en: "How many years does the STAPS degree last?", o: [["İki", "Two"], ["Üç", "Three"], ["Beş", "Five"]] },
        { tr: "Teorik dersler nerede yapılır?", en: "Where do the lectures take place?", o: [["Amfide", "In a lecture hall"], ["Spor salonunda", "In the gym"], ["Sadece çevrimiçi", "Online only"]] },
        { tr: "Hangi platformdan geçmek gerekir?", en: "Which platform do you have to go through?", o: [["Doctolib", "Doctolib"], ["Parcoursup", "Parcoursup"], ["France Travail", "France Travail"]] },
        { tr: "Yabancılardan çoğu zaman hangi Fransızca düzeyi istenir?", en: "What level of French is often required of foreigners?", o: [["A2", "A2"], ["B2", "B2"], ["C2", "C2"]] }
      ]
    },
    "r-sommeil": {
      tr: [
        "Antrenmandan ve beslenmeden sık sık söz edilir ama uyku bazen unutulur. Oysa bir sporcu için iyi uyumak çok önemlidir.",
        "Derin uyku sırasında vücut kasları onarır ve toparlanmaya yararlı hormonlar üretir. Beyin ise gün içinde öğrenilen teknik hareketleri hafızaya alır. Birçok araştırma, yedi saatten az uyuyan sporcuların daha sık sakatlandığını gösteriyor.",
        "Uzmanlar her gün aynı saatte yatmayı, uyumadan bir saat önce ekranlardan uzak durmayı ve odayı serin ve karanlık tutmayı tavsiye ediyor. Yirmi dakikalık kısa bir şekerleme de, özellikle iki antrenmanlı günlerde, yardımcı olabilir.",
        "İyi uyumak tembellik değildir: antrenmanın bir parçasıdır."
      ],
      en: [
        "People often talk about training and nutrition, but sometimes forget sleep. Yet, for an athlete, sleeping well is essential.",
        "During deep sleep, the body repairs the muscles and produces hormones that help recovery. The brain, for its part, memorises the technical movements learned during the day. Several studies show that athletes who sleep less than seven hours get injured more often.",
        "Specialists advise going to bed at a fixed time, avoiding screens an hour before sleeping and keeping the bedroom cool and dark. A short twenty-minute nap can also help, especially on days with two training sessions.",
        "Sleeping well isn't laziness: it is part of training."
      ],
      q: [
        { tr: "Derin uyku sırasında vücut ne yapar?", en: "What does the body do during deep sleep?", o: [["Kasları onarır", "It repairs the muscles"], ["Sadece şeker yakar", "It only burns sugar"], ["Özel bir şey yapmaz", "Nothing special"]] },
        { tr: "Yedi saatten az uyuyan sporcular…", en: "Athletes who sleep less than seven hours…", o: [["daha hızlı koşar", "run faster"], ["daha sık sakatlanır", "get injured more often"], ["daha az yer", "eat less"]] },
        { tr: "Hangi tavsiye metinde YOK?", en: "Which piece of advice is NOT in the text?", o: [["Akşam ekranlardan uzak durmak", "Avoid screens in the evening"], ["Uyumadan önce kahve içmek", "Drink a coffee before sleeping"], ["Odayı serin tutmak", "Keep the bedroom cool"]] }
      ]
    },
    "r-lca": {
      tr: [
        "Ön çapraz bağ (ÖÇB) yırtığı, özellikle hentbol, futbol ya da basketbol gibi pivot (dönüş) sporlarında sporcuların en çok korktuğu yaralanmalardan biridir. Uzun süre rekonstrüksiyon ameliyatı tek ciddi seçenek gibi görüldü.",
        "Bugün tartışma daha nüanslı. Bazı araştırmalar, az spor yapan ya da pivotsuz aktiviteler yapan hastalarda iyi yürütülen bir rehabilitasyonun ameliyatınkine benzer sonuçlar verebildiğini göstermiştir. Buna karşılık, yüksek düzeyde bir pivot sporuna dönmek isteyen bir sporcu için rekonstrüksiyon genellikle önerilmeye devam ediyor, çünkü yön değiştirmeler sırasında dizin « boşalma » riski vardır.",
        "Her durumda rehabilitasyon merkezi bir rol oynar. Müsabakalara dönüşten önce çoğu zaman dokuz ila on iki ay sürer ve oyuna dönüş basit bir tarihe değil, kuvvet, sıçrama ve güvene dair nesnel testlere dayanmalıdır. Güçlendirme, sıçrama sonrası iniş çalışması ve propriosepsiyonu birleştiren önleme programlarının, genç kadın oyuncularda yırtık riskini belirgin şekilde azalttığı da belirtiliyor."
      ],
      en: [
        "A rupture of the anterior cruciate ligament (ACL) is one of the injuries athletes fear most, especially in pivoting sports such as handball, football or basketball. For a long time, reconstruction surgery seemed to be the only serious option.",
        "Today, the debate is more nuanced. Some studies have shown that, in patients who are not very sporty or who do activities without pivoting, well-conducted rehabilitation could give results comparable to those of surgery. On the other hand, for an athlete who wants to return to a pivoting sport at a high level, reconstruction is still generally recommended, because the knee is likely to « give way » during changes of direction.",
        "In all cases, rehabilitation plays a central role. It often lasts nine to twelve months before a return to competition, and return to play should be based on objective tests of strength, jumping and confidence rather than on a simple date. Prevention programmes, which combine strengthening, jump-landing work and proprioception, would also reportedly greatly reduce the risk of rupture in young female players."
      ],
      q: [
        { tr: "Metne göre kimler için tek başına rehabilitasyon yeterli olabilir?", en: "According to the text, for whom can rehabilitation alone be enough?", o: [["Pivot sporlarındaki üst düzey sporcular için", "For top-level athletes in pivoting sports"], ["Az spor yapan ya da pivotsuz aktivite yapan hastalar için", "For patients who are not very sporty or don't pivot"], ["Hiç kimse için", "For no one"]] },
        { tr: "Pivot sporu yapanlara ameliyat neden önerilir?", en: "Why is surgery recommended for pivoting athletes?", o: [["Çünkü diz boşalma riski taşır", "Because the knee may give way"], ["Çünkü daha ucuzdur", "Because it is cheaper"], ["Çünkü rehabilitasyon yasaktır", "Because rehabilitation is forbidden"]] },
        { tr: "Oyuna dönüş neye dayanmalı?", en: "What should return to play be based on?", o: [["Sabit bir tarihe", "On a fixed date"], ["Nesnel testlere", "On objective tests"], ["Sadece antrenörün görüşüne", "On the coach's opinion only"]] },
        { tr: "« réduiraient » (azaltırmış) şart kipi yazarın … gösterir.", en: "The conditional « réduiraient » (would reduce) shows that the author…", o: [["kesinlikle emin olduğunu", "is absolutely certain"], ["bir bilgiyi temkinle aktardığını", "is reporting information cautiously"], ["geçmişten bahsettiğini", "is talking about the past"]] }
      ]
    },
    "r-ecrans": {
      tr: [
        "Birkaç yıldır bu soru kamuoyu tartışmasında düzenli olarak gündeme geliyor: okulda cep telefonları yasaklanmalı mı? Fransa'da ortaokulda (collège) derslerde ve teneffüslerde kullanımları zaten yasak ve birçok okul tam bir « dijital mola » uygulamasını deniyor.",
        "Yasağı savunanlar güçlü argümanlar ileri sürüyor. Ekranlar dikkati bozuyor, zorbalığı kolaylaştırıyor ve öğrenciler arasındaki etkileşimi azaltıyormuş. Bazı öğretmenler, telefonlar dolaplarda kaldığından beri teneffüslerin yeniden daha hareketli hale geldiğini gözlemliyor.",
        "Karşı çıkanlar ise telefonun aynı zamanda bir araç olduğunu hatırlatıyor: sözlük, hesap makinesi, bir proje için fotoğraf makinesi. Onlara göre yasaklamak yeterli değil; gençlere ekranları bilinçli şekilde kullanmayı öğretmek gerekir.",
        "Aslında iki taraf bir noktada hemfikir: mesele nesnenin kendisi değil, ona hayatımızda bıraktığımız yer."
      ],
      en: [
        "For several years, the question has come up regularly in public debate: should mobile phones be banned at school? In France, their use is already banned in collège (middle school) during lessons and breaks, and several schools are trying out a total « digital break ».",
        "Supporters of the ban put forward strong arguments. Screens are said to harm concentration, encourage bullying and reduce interaction between pupils. Some teachers notice that breaks have become livelier again since phones have stayed in the lockers.",
        "Their opponents, for their part, point out that the phone is also a tool: a dictionary, a calculator, a camera for a project. According to them, banning is not enough; young people should rather be taught to use screens in a thoughtful way.",
        "Basically, the two sides agree on one point: the issue is not the object itself, but the place we give it in our lives."
      ],
      q: [
        { tr: "Fransa'da ortaokulda telefon…", en: "In France, in collège, the phone is…", o: [["her yerde serbest", "allowed everywhere"], ["derslerde ve teneffüslerde zaten yasak", "already banned during lessons and breaks"], ["zorunlu", "compulsory"]] },
        { tr: "Hangi argüman karşı çıkanlara ait?", en: "Which argument belongs to the opponents?", o: [["Telefon zorbalığı kolaylaştırır", "The phone encourages bullying"], ["Telefon aynı zamanda bir araçtır", "The phone is also a tool"], ["Teneffüsler daha hareketli", "Breaks are livelier"]] },
        { tr: "İki taraf hangi konuda hemfikir?", en: "What do the two sides agree on?", o: [["Her şeyi yasaklamak gerekir", "Everything should be banned"], ["Mesele ekranların hayatımızdaki yeri", "The issue is the place of screens in our lives"], ["Telefon gereksizdir", "The phone is useless"]] }
      ]
    },
    "r-amphi": {
      tr: [
        "Saat sekiz. Vardığımda amfi neredeyse dolmuş. Üç yüz öğrenci, her yerde açık bilgisayarlar ve fizyoloji hocası mikrofonu alınca birden kesilen bir uğultu.",
        "Hızlı konuşuyor, çok hızlı. Kelimeleri anlıyorum ama her zaman cümlelerin tamamını değil. Her şeyi not almaya çalışıyorum, sonra bir arkadaşımın tavsiyesini hatırlıyorum: « Her şeyi kopyalama. Ana fikirleri, anahtar kelimeleri not al ve sonra tamamlamak için yer bırak. » Bu yüzden yöntemimi değiştiriyorum: oklar, kısaltmalar, altı çizili başlıklar.",
        "Arada yanımda oturan Lyonlu bir öğrenci notlarımızı karşılaştırmayı öneriyor. Onda benim çizdiğim iki şema eksik; bende de onun not aldığı tarihler eksik. Numaralarımızı değişiyoruz. Akşam notlarımı yeniden okurken temel şeyleri anladığımı fark ediyorum. İlk gün mükemmel değildi ama beklediğimden çok daha az korkutucuydu."
      ],
      en: [
        "Eight o'clock. The lecture hall is already almost full when I arrive. Three hundred students, laptops open everywhere, a background noise that stops dead when the physiology professor takes the microphone.",
        "She speaks fast, very fast. I understand the words, but not always the whole sentences. I try to write everything down, then I remember a friend's advice: « Don't copy everything. Write down the main ideas, the keywords, and leave space to complete it afterwards. » So I change method: arrows, abbreviations, underlined headings.",
        "At the break, the student next to me, from Lyon, suggests comparing our notes. She is missing two diagrams that I drew; I am missing some dates that she wrote down. We exchange numbers. In the evening, rereading my notes, I realise that I understood the main points. The first day wasn't perfect, but it was much less frightening than expected."
      ],
      q: [
        { tr: "Anlatıcı hangi zorlukla karşılaşıyor?", en: "What difficulty does the narrator face?", o: [["Hoca çok hızlı konuşuyor", "The professor speaks too fast"], ["Bilgisayarı yok", "She has no laptop"], ["Amfi boş", "The lecture hall is empty"]] },
        { tr: "Arkadaşının tavsiyesi ne?", en: "What is her friend's advice?", o: [["Her şeyi kelimesi kelimesine kopyalamak", "Copy everything word for word"], ["Ana fikirleri ve anahtar kelimeleri not almak", "Write down the main ideas and keywords"], ["Dersi kaydetmek", "Record the lecture"]] },
        { tr: "Arada ne oluyor?", en: "What happens at the break?", o: [["Eve dönüyor", "She goes home"], ["Notlarını yanındaki öğrenciyle karşılaştırıyor", "She compares her notes with the student next to her"], ["Hocayla konuşuyor", "She talks to the professor"]] },
        { tr: "Gününü nasıl değerlendiriyor?", en: "How does she judge her day?", o: [["Felaket", "A disaster"], ["Beklediğinden az korkutucu", "Less frightening than expected"], ["Mükemmel", "Perfect"]] }
      ]
    },
    "r-sedentarite": {
      tr: [
        "Fiziksel hareketsizliğin dünyada ölümün başlıca risk etkenlerinden biri olduğu artık kanıtlanmıştır. Ama ayrı ve uzun süre küçümsenmiş bir olgu araştırmacıların giderek daha fazla dikkatini çekiyor: sedanterlik, yani uyanıkken, minimum enerji harcayarak oturarak ya da uzanarak geçirilen süre.",
        "Bu ayrım yalnızca anlamsal bir incelik değildir. Gerçekten de, haftada yüz elli dakika orta düzeyde aktivite önerisini karşılamak anlamında « aktif » olup aynı zamanda günde dokuz ya da on saat bir ekranın önünde hareketsiz kalmak mümkündür. Oysa bazı çalışmalar, uzun süre oturmanın zararlı etkilerinin günlük bir spor seansıyla ancak kısmen telafi edildiğini öne sürüyor.",
        "Bu nedenle yalnızca « spor yapmayı » değil, hareketsizliği düzenli olarak bölmeyi hedefleyen stratejilere ilgi artıyor: her yarım saatte bir kalkmak, aktif ulaşımı tercih etmek, oturma ve ayakta durma pozisyonları arasında geçiş yapmaya olanak tanıyan çalışma alanları düzenlemek. Dolayısıyla uyarlanmış beden etkinliği uzmanları için de fizyoterapistler için de mesele iki yönlüdür: hareket reçete etmek, elbette, ama aynı zamanda hastaların günlerinin düzenini baştan düşünmelerine yardımcı olmak."
      ],
      en: [
        "It is now established that physical inactivity is among the main risk factors for death worldwide. But a distinct and long underestimated phenomenon is attracting more and more attention from researchers: sedentary behaviour, that is, time spent sitting or lying down while awake, with minimal energy expenditure.",
        "The distinction is not just a semantic refinement. Indeed, one can be « active », in the sense of meeting the recommendation of one hundred and fifty minutes of moderate activity per week, while still remaining sedentary for nine or ten hours a day in front of a screen. Yet several studies suggest that the harmful effects of prolonged sitting are only partly offset by a daily sports session.",
        "Hence the growing interest in strategies that aim not only to « do sport », but to regularly break up sedentary time: getting up every half hour, favouring active travel, setting up workstations that allow alternating between sitting and standing. For adapted physical activity professionals as well as for physiotherapists, the challenge is therefore twofold: prescribing movement, certainly, but also helping patients rethink the very organisation of their days."
      ],
      q: [
        { tr: "Metne göre sedanterlik … anlamına gelir.", en: "According to the text, sedentary behaviour means…", o: [["spor eksikliği", "a lack of sport"], ["uyanıkken oturarak ya da uzanarak geçirilen süre", "time spent sitting or lying down while awake"], ["uyku", "sleep"]] },
        { tr: "Aynı anda hem aktif hem sedanter olunabilir mi?", en: "Can you be active and sedentary at the same time?", o: [["Hayır, bu çelişkili", "No, it's contradictory"], ["Evet, yazara göre", "Yes, according to the author"], ["Metin bunu söylemiyor", "The text doesn't say"]] },
        { tr: "Hangi strateji öneriliyor?", en: "Which strategy is suggested?", o: [["Sadece hafta sonları daha çok spor yapmak", "Doing more sport at weekends only"], ["Oturma süresini düzenli olarak bölmek", "Regularly breaking up sitting time"], ["Daha çok uyumak", "Sleeping more"]] },
        { tr: "« Mesele dolayısıyla iki yönlüdür » ifadesi uzmanların … gerektiği anlamına gelir.", en: "« The challenge is therefore twofold » means that professionals must…", o: [["hareket reçete etmeleri VE günlerin düzenini yeniden düşünmeleri", "prescribe movement AND rethink the organisation of days"], ["spor ve dinlenme arasında seçim yapmaları", "choose between sport and rest"], ["iki kat fazla çalışmaları", "work twice as much"]] }
      ]
    },
    "r-langue": {
      tr: [
        "Belli bir yaştan sonra yabancı dil öğrenmek için çok geç olduğu sık sık söylenir. Hem bu kadar yaygın hem de bu kadar cesaret kırıcı olan bu fikir nüanslandırılmayı hak ediyor.",
        "Elbette bir dile erken yaşta maruz kalan çocuklar aksanı daha kolay edinir. Ama yetişkinlerin kolayca unutulan avantajları vardır: daha iyi bir analiz yeteneği, bilinçli öğrenme stratejileri ve özellikle zaten bildikleri dillere dayanabilme imkânı. Örneğin İngilizceye hâkim Türkçe konuşan bir kadın, « asansör »den « randevu »ya yüzlerce Fransızca kelimeyi hemen tanıyacaktır.",
        "Dil edinimi üzerine yapılan araştırmalar ayrıca yaşla hiçbir ilgisi olmayan etkenlerin altını çizer: maruz kalma miktarı, düzenlilik, etkileşimlerin kalitesi ve belki daha da önemlisi dille kurulan duygusal ilişki. Özellikle kaygı, konuşmaya başlamayı ve dolayısıyla ilerlemeyi frenler.",
        "Başka bir deyişle, soru « çok mu yaşlıyım? » olmaktan çok « öğrenmemi nasıl düzenli, zengin ve huzurlu kılarım? » sorusudur. İki yıl boyunca günde yarım saat, pek çok açıdan, ardından uzun bir sessizlik gelen yoğun bir kurstan daha değerlidir."
      ],
      en: [
        "People often say that after a certain age it is too late to learn a foreign language. This idea, as widespread as it is discouraging, deserves to be nuanced.",
        "Of course, children exposed to a language early pick up the accent more easily. But adults have assets that people readily forget: a better capacity for analysis, conscious learning strategies and, above all, the possibility of drawing on the languages they already know. A Turkish speaker who has mastered English, for example, will immediately recognise hundreds of French words, from « asansör » to « randevu ».",
        "Research on language acquisition also stresses factors that have nothing to do with age: the amount of exposure, regularity, the quality of interactions and, perhaps even more, one's emotional relationship to the language. Anxiety, in particular, holds back speaking and, as a knock-on effect, progress.",
        "In other words, the question is not so much « am I too old? » as « how can I make my learning regular, rich and calm? ». Half an hour a day for two years is, in many ways, worth more than an intensive course followed by a long silence."
      ],
      q: [
        { tr: "Metne göre çocukların avantajı ne?", en: "What advantage do children have according to the text?", o: [["Dilbilgisini daha hızlı öğrenirler", "They learn grammar faster"], ["Aksanı daha kolay edinirler", "They pick up the accent more easily"], ["Hiçbir avantajları yok", "They have no advantage"]] },
        { tr: "Yetişkinlerin hangi avantajından söz ediliyor?", en: "Which adult asset is mentioned?", o: [["Zaten bildikleri dillere dayanmak", "Drawing on languages they already know"], ["Daha fazla boş zamana sahip olmak", "Having more free time"], ["Asla kaygılı olmamak", "Never being anxious"]] },
        { tr: "Hangi etken konuşmaya başlamayı frenler?", en: "Which factor holds back speaking?", o: [["Düzenlilik", "Regularity"], ["Kaygı", "Anxiety"], ["Maruz kalma", "Exposure"]] },
        { tr: "Yazarın vardığı sonuç…", en: "The author's conclusion is that…", o: [["yoğun bir kurs daha iyidir", "an intensive course is better"], ["huzurlu düzenlilik yaştan daha önemlidir", "calm regularity matters more than age"], ["30 yaşından sonra çok geçtir", "it's too late after 30"]] }
      ]
    },
    "r-handicap": {
      tr: [
        "Uzun süre spor politikalarının kenarında kalmış olan uyarlanmış spor (sport adapté) — zihinsel ya da psikososyal engeli olan kişilere yönelik — giderek daha görünür hale geliyor. Büyük uluslararası etkinlikler buna katkıda bulundu ama asıl ilerleme özellikle sahada, kulüplerde ve tıbbi-sosyal kurumlarda yaşanıyor.",
        "Faydaları fiziksel kondisyonun çok ötesine geçiyor. Sporcular burada ham performanstan çok ilerlemenin değer gördüğü bir ortam buluyor; bu da özgüveni güçlendiriyor ve sosyal bağları destekliyor. Aileler için bir yakınlarının bir müsabakaya katıldığını, bir forma giydiğini, bir takıma ait olduğunu görmek çoğu zaman bir dönüm noktası oluyor.",
        "Yine de arzın buna ayak uydurması gerekiyor. Eğitimli antrenör eksikliği, tesislere erişim güçlüğü ve ulaşım maliyeti hâlâ önemli engeller. İşte burada STAPS mezunlarının, özellikle « uyarlanmış beden etkinliği ve sağlık » bölümünden olanların, oynayacağı bir rol var: erişilebilir seanslar tasarlamak, sağlık ekipleriyle birlikte çalışmak ve sıradan kulüpleri kapılarını açmaya ikna etmek."
      ],
      en: [
        "Long confined to the margins of sports policy, adapted sport — intended for people with intellectual or psychological disabilities — is gaining visibility. Major international events have contributed to this, but it is above all on the ground, in clubs and in health and social care facilities, that its real progress is happening.",
        "The benefits go far beyond physical fitness. Participants find a setting where progress is valued over raw performance, which builds self-esteem and encourages social ties. For families, seeing a loved one take part in a competition, wear a team shirt, belong to a team, is often a turning point.",
        "Still, the supply has to keep up. The lack of trained instructors, difficult access to facilities and the cost of transport remain major obstacles. This is where STAPS graduates, and especially those from the « adapted physical activity and health » track, have a role to play: designing accessible sessions, working with care teams and convincing ordinary clubs to open their doors."
      ],
      q: [
        { tr: "Uyarlanmış sporun ilerlemesi özellikle nerede yaşanıyor?", en: "Where is the progress of adapted sport mainly happening?", o: [["Büyük etkinliklerde", "In major events"], ["Sahada, kulüplerde ve kurumlarda", "On the ground, in clubs and facilities"], ["Televizyonda", "On television"]] },
        { tr: "Hangi fayda öne çıkarılıyor?", en: "Which benefit is highlighted?", o: [["Para kazanmak", "Earning money"], ["Özgüven ve sosyal bağlar", "Self-esteem and social ties"], ["Ün", "Fame"]] },
        { tr: "« Yine de arzın buna ayak uydurması gerekiyor » ifadesi … başlatır.", en: "« Still, the supply has to keep up » introduces…", o: [["engelleri", "obstacles"], ["olumlu bir sonucu", "a positive conclusion"], ["bir başarı örneğini", "an example of success"]] },
        { tr: "STAPS APA mezunlarının rolü ne?", en: "What role for STAPS APA graduates?", o: [["Erişilebilir seanslar tasarlamak ve kulüpleri ikna etmek", "Design accessible sessions and convince clubs"], ["Stadyum inşa etmek", "Build stadiums"], ["Olimpiyat Oyunları düzenlemek", "Organise the Olympic Games"]] }
      ]
    }
  });
})();
