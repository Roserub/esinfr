/* Turkish and English translations of the readings (paragraphs, questions, options), shown by the "show translation" button. */
(function () {
  const T = window.READING_TR = window.READING_TR || {};
  Object.assign(T, {
    "r-plage": {
      tr: [
        "Bugün cumartesi ve hava çok sıcak. Chloé ve kardeşi Hugo Marsilya'da oturuyor. Bugün iki kız arkadaşlarıyla plaja gidecekler.",
        "Chloé çantaya bir havlu, güneş kremi, güneş gözlüğü ve büyük bir şişe su koyuyor. Hugo bir top ve sandviçler alıyor.",
        "Plajda çok kalabalık var. Su mavi ve biraz soğuk ama Chloé yarım saat yüzüyor. Hugo kızlarla voleybol oynuyor. Öğlen kumun üstünde yemek yiyorlar.",
        "Öğleden sonra güneş çok güçlü. Chloé yine krem sürüyor ve bir şemsiyenin altında uyuyor. Akşam limanda dondurma yemeye gidiyorlar. Yarın evde kalacaklar: yorgunlar!"
      ],
      en: [
        "It's Saturday and it's very hot. Chloé and her brother Hugo live in Marseille. Today they are going to go to the beach with two friends.",
        "In the bag, Chloé puts a towel, sun cream, sunglasses and a big bottle of water. Hugo takes a ball and some sandwiches.",
        "At the beach, there are lots of people. The water is blue and a little cold, but Chloé swims for half an hour. Hugo plays volleyball with the girls. At noon, they eat on the sand.",
        "In the afternoon, the sun is very strong. Chloé puts on more cream and sleeps under a beach umbrella. In the evening, they go and eat an ice cream at the harbour. Tomorrow, they are going to stay at home: they are tired!"
      ],
      q: [
        { tr: "Chloé ve Hugo nerede oturuyor?", en: "Where do Chloé and Hugo live?", o: [["Nice'te", "In Nice"], ["Marsilya'da", "In Marseille"], ["Bordeaux'da", "In Bordeaux"]] },
        { tr: "Hugo ne alıyor?", en: "What does Hugo take?", o: [["Bir kitap", "A book"], ["Bir havlu", "A towel"], ["Bir top ve sandviçler", "A ball and some sandwiches"]] },
        { tr: "Su nasıl?", en: "What is the water like?", o: [["Mavi ve biraz soğuk", "Blue and a little cold"], ["Yeşil ve sıcak", "Green and warm"], ["Gri ve kirli", "Grey and dirty"]] },
        { tr: "Akşam nereye gidiyorlar?", en: "Where do they go in the evening?", o: [["Sinemaya", "To the cinema"], ["Limana, dondurma yemeye", "To the harbour, to eat an ice cream"], ["Restorana", "To a restaurant"]] },
        { tr: "Yarın ne yapacaklar?", en: "What are they going to do tomorrow?", o: [["Plaja geri dönmek", "Go back to the beach"], ["Paris'e gitmek", "Go to Paris"], ["Evde kalmak", "Stay at home"]] }
      ]
    },
    "r-velo": {
      tr: [
        "Malik yirmi iki yaşında. Strazburg'da öğrenci. Arabası yok: üniversiteye bisikletle gidiyor. Hızlı, ucuz ve sağlığa iyi geliyor.",
        "Strazburg'da çok sayıda bisiklet yolu var. Malik kaldırımda değil, bisiklet yolunda gidiyor. Kask takıyor ve akşamları ışıklarını yakıyor. Kırmızı ışıkta her zaman duruyor.",
        "Arkadaşı Julie'nin bisikleti yok. Paylaşımlı bir bisiklet kiralıyor: telefonuyla ödüyor, sürüyor ve sonra bisikleti bir istasyona bırakıyor.",
        "Bu hafta sonu Malik ve Julie kanal boyunca bisikletle gezmeye gidecekler. Su kenarında piknik yapacaklar."
      ],
      en: [
        "Malik is twenty-two. He is a student in Strasbourg. He doesn't have a car: he goes to university by bike. It's fast, cheap and good for your health.",
        "In Strasbourg there are lots of cycle lanes. Malik rides in the cycle lane, not on the pavement. He wears a helmet and, in the evening, he switches on his lights. He always stops at red lights.",
        "His friend Julie doesn't have a bike. She rents a self-service bike: she pays with her phone, she rides, and afterwards she leaves the bike at a station.",
        "This weekend, Malik and Julie are going to go for a bike ride along the canal. They are going to have a picnic by the water."
      ],
      q: [
        { tr: "Malik üniversiteye nasıl gidiyor?", en: "How does Malik go to university?", o: [["Otobüsle", "By bus"], ["Bisikletle", "By bike"], ["Yürüyerek", "On foot"]] },
        { tr: "Malik nerede sürüyor?", en: "Where does Malik ride?", o: [["Kaldırımda", "On the pavement"], ["Arabaların arasında", "In the middle of the cars"], ["Bisiklet yolunda", "In the cycle lane"]] },
        { tr: "Julie bisiklet için nasıl ödüyor?", en: "How does Julie pay for the bike?", o: [["Telefonuyla", "With her phone"], ["Nakit", "In cash"], ["Ödemiyor", "She doesn't pay"]] },
        { tr: "Bu hafta sonu ne yapacaklar?", en: "What are they going to do this weekend?", o: [["Bir futbol maçı", "A football match"], ["Şehirde alışveriş", "Shopping in town"], ["Kanal boyunca bir gezinti", "A ride along the canal"]] }
      ]
    },
    "r-voisin-paul": {
      tr: [
        "Çok sevimli bir komşum var. Adı Paul ve yetmiş iki yaşında. Binamın zemin katında köpeği Filou ile birlikte oturuyor.",
        "Paul çalışmıyor: emekli. Sabahları Filou'yu mahallede gezdiriyor. Öğleden sonraları gazete okuyor ve bulmaca çözüyor. Bahçe işlerini de seviyor: binanın önünde domatesleri ve çiçekleri var.",
        "Paul benimle yavaş konuşuyor. Fransızca hatalarımı düzeltiyor ama her zaman gülümseyerek. Hafta sonu bir yere gittiğimde bitkilerimi suluyor.",
        "Cumartesi Paul için börek yapacağım. Bana çay içmeye gelecek. Hep şöyle der: « Türk çayı çok sert! »"
      ],
      en: [
        "I have a very nice neighbour. His name is Paul and he is seventy-two. He lives on the ground floor of my building, with his dog Filou.",
        "Paul doesn't work: he is retired. In the morning, he walks Filou around the neighbourhood. In the afternoon, he reads the newspaper and does crosswords. He also likes gardening: in front of the building, he has tomatoes and flowers.",
        "With me, Paul speaks slowly. He corrects my French mistakes, but always with a smile. When I go away for the weekend, he waters my plants.",
        "On Saturday, I am going to make börek for Paul. He is going to come to my place for tea. He always says: « Turkish tea is very strong! »"
      ],
      q: [
        { tr: "Paul kaç yaşında?", en: "How old is Paul?", o: [["62 yaşında", "62"], ["72 yaşında", "72"], ["82 yaşında", "82"]] },
        { tr: "Köpeğinin adı ne?", en: "What is his dog called?", o: [["Filou", "Filou"], ["Médor", "Médor"], ["Rex", "Rex"]] },
        { tr: "Esin hafta sonu gittiğinde Paul ne yapıyor?", en: "What does Paul do when Esin goes away for the weekend?", o: [["Alışverişini yapıyor", "He does her shopping"], ["Bitkilerini suluyor", "He waters her plants"], ["Arabasına bakıyor", "He looks after her car"]] },
        { tr: "Esin cumartesi ne hazırlayacak?", en: "What is Esin going to make on Saturday?", o: [["Pizza", "A pizza"], ["Çorba", "A soup"], ["Börek", "Börek"]] }
      ]
    },
    "r-fete-musique": {
      tr: [
        "21 Haziran, Fransa'da müzik bayramıdır (Fête de la musique). Yazın başlangıcıdır ve günler çok uzundur. Bayram 1982'den beri var. O akşam konserler ücretsizdir ve her yerde müzik vardır: sokaklarda, parklarda, barlarda ve meydanlarda.",
        "Bu yıl Inès, arkadaşları Yanis ve Camille ile Toulouse'da dışarı çıkacak. Capitole'ün yakınında bir rock grubunu, sonra küçük bir bahçede bir caz orkestrasını dinleyecekler. Camille gitar çalıyor: bir kafenin önünde arkadaşlarıyla şarkı söyleyecek.",
        "Çok kalabalık ve hava sıcak. İnsanlar dans ediyor, şarkı söylüyor ve gülüyor. Gece yarısı Inès yorgun ama çok mutlu. « Haydi, seneye görüşürüz! (Gelecek yıl bir an önce gelsin!) » diyor."
      ],
      en: [
        "21 June is the Fête de la musique (music festival) in France. It's the start of summer and the days are very long. The festival has existed since 1982. That evening, the concerts are free and there is music everywhere: in the streets, in the parks, in the bars and on the squares.",
        "This year, Inès is going to go out in Toulouse with her friends Yanis and Camille. They are going to listen to a rock band near the Capitole, then a jazz band in a small garden. Camille plays the guitar: she is going to sing with friends in front of a café.",
        "There are lots of people and it's hot. People dance, sing and laugh. At midnight, Inès is tired, but very happy. She says: « I can't wait for next year! »"
      ],
      q: [
        { tr: "Müzik bayramının tarihi ne?", en: "What is the date of the Fête de la musique?", o: [["14 Temmuz", "14 July"], ["1 Mayıs", "1 May"], ["21 Haziran", "21 June"]] },
        { tr: "Konserler…", en: "The concerts are…", o: [["pahalı", "expensive"], ["ücretsiz", "free"], ["sadece radyoda", "only on the radio"]] },
        { tr: "Inès hangi şehirde?", en: "Which city is Inès in?", o: [["Toulouse'da", "In Toulouse"], ["Lille'de", "In Lille"], ["Nantes'ta", "In Nantes"]] },
        { tr: "Kafenin önünde kim şarkı söyleyecek?", en: "Who is going to sing in front of a café?", o: [["Yanis", "Yanis"], ["Camille", "Camille"], ["Inès", "Inès"]] }
      ]
    },
    "r-parc": {
      tr: [
        "Pazar günleri Nadia, çocukları Adam ve Lina ile Paris'teki Buttes-Chaumont parkına gidiyor. Adam altı yaşında, Lina dokuz yaşında.",
        "Parkta ağaçlar, bir göl ve büyük çimenlikler var. Çocuklar koşuyor, top oynuyor ve ördeklere bakıyor. Nadia bir banka oturuyor ve kitap okuyor. Bazen gölün etrafında kısa bir koşu da yapıyor.",
        "Öğlen çimenlerin üstünde piknik yapıyorlar: ekmek, peynir, domates ve meyve. Sonra Lina paten kayıyor, Adam da salıncakta sallanıyor.",
        "Saat beşe doğru hava soğumaya başlıyor. Aile eve dönüyor. Gelecek pazar büyükannelerini parka davet edecekler."
      ],
      en: [
        "On Sundays, Nadia goes to the Buttes-Chaumont park in Paris with her children, Adam and Lina. Adam is six and Lina is nine.",
        "In the park there are trees, a lake and big lawns. The children run, play ball and look at the ducks. Nadia sits on a bench and reads a book. Sometimes she also goes for a little jog around the lake.",
        "At noon, they have a picnic on the grass: bread, cheese, tomatoes and fruit. Afterwards, Lina goes rollerblading and Adam goes on the swings.",
        "Around five o'clock, it starts to get cold. The family goes home. Next Sunday, they are going to invite their grandmother to the park."
      ],
      q: [
        { tr: "Lina kaç yaşında?", en: "How old is Lina?", o: [["Altı yaşında", "Six"], ["Dokuz yaşında", "Nine"], ["On iki yaşında", "Twelve"]] },
        { tr: "Nadia bankta ne yapıyor?", en: "What does Nadia do on the bench?", o: [["Uyuyor", "She sleeps"], ["Telefonla konuşuyor", "She makes a phone call"], ["Kitap okuyor", "She reads a book"]] },
        { tr: "Öğlen ne yapıyorlar?", en: "What do they do at noon?", o: [["Çimenlerde piknik", "A picnic on the grass"], ["Restoranda pizza", "A pizza at a restaurant"], ["Evde krep", "Crêpes at home"]] },
        { tr: "Gelecek pazar kimi davet edecekler?", en: "Who are they going to invite next Sunday?", o: [["Komşularını", "Their neighbour"], ["Büyükannelerini", "Their grandmother"], ["Bir öğretmeni", "A teacher"]] }
      ]
    },
    "r-sport-prefere": {
      tr: [
        "Benim adım Léa, on altı yaşındayım ve Nantes'ta oturuyorum. En sevdiğim spor hentbol. Sekiz yaşımdan beri bir kulüpte oynuyorum.",
        "Kaleciyim. Zor bir mevki: top çok hızlı gidiyor! Ama şutları kurtarmaya bayılıyorum.",
        "Haftada iki kez, salı ve perşembe günleri, saat on sekizden yirmiye kadar antrenman yapıyorum. Cumartesi günleri maçımız var. Maçtan önce sakatlanmamak için her zaman iyi bir ısınma yapıyorum.",
        "Takımımızda on dört kızız ve ortam harika. Antrenörümüzün adı Marc. Talepkâr ama nazik.",
        "Bu yaz dağda bir hentbol kampına gideceğim. Her gün antrenman yapacağım!"
      ],
      en: [
        "My name is Léa, I'm sixteen and I live in Nantes. My favourite sport is handball. I have been playing in a club since I was eight.",
        "I'm a goalkeeper. It's a difficult position: the ball goes very fast! But I love stopping shots.",
        "I train twice a week, on Tuesdays and Thursdays, from six to eight in the evening. On Saturdays, we have a match. Before the match, I always do a good warm-up to avoid injuries.",
        "In my team there are fourteen of us girls and the atmosphere is great. Our coach is called Marc. He is demanding, but kind.",
        "This summer, I am going to go to a handball camp in the mountains. I'm going to train every day!"
      ],
      q: [
        { tr: "Léa hangi mevkide oynuyor?", en: "What position does Léa play?", o: [["Kanat", "Winger"], ["Kaleci", "Goalkeeper"], ["Hakem", "Referee"]] },
        { tr: "Antrenmanlar ne zaman?", en: "When are the training sessions?", o: [["Pazartesi ve çarşamba", "On Mondays and Wednesdays"], ["Cumartesi", "On Saturdays"], ["Salı ve perşembe", "On Tuesdays and Thursdays"]] },
        { tr: "Neden ısınma yapıyor?", en: "Why does she warm up?", o: [["Sakatlanmamak için", "To avoid injuries"], ["Para kazanmak için", "To earn money"], ["Ailesini memnun etmek için", "To please her parents"]] },
        { tr: "Antrenör nasıl biri?", en: "What is the coach like?", o: [["Hep yok", "Always absent"], ["Çok kötü", "Very mean"], ["Talepkâr ama nazik", "Demanding, but kind"]] },
        { tr: "Léa bu yaz ne yapacak?", en: "What is Léa going to do this summer?", o: [["Türkiye'ye bir yolculuk", "A trip to Turkey"], ["Dağda bir hentbol kampı", "A handball camp in the mountains"], ["Bir kafede iş", "A job in a café"]] }
      ]
    },
    "r-tour-france": {
      tr: [
        "Fransa Bisiklet Turu (Tour de France) dünyanın en ünlü bisiklet yarışıdır. 1903'ten beri vardır ve her yıl temmuz ayında yaklaşık üç hafta boyunca yapılır. Bisikletçiler ovalarda, Alpler'de ve Pireneler'de yirmi bir etapta aşağı yukarı 3 500 kilometre yol yapar. Genel klasmanın birincisi sarı mayoyu giyer; en iyi tırmanıcı kırmızı puanlı beyaz bir mayo giyer.",
        "Geçen yaz on bir yaşındaki Noé, dedesi Antoine ile Pireneler'de bir dağ etabını izlemeye gitti. Çok erken yola çıktılar, çünkü yol arabalara kapalıydı. Yol kenarında iyi bir yer bulmak için bir saat yürüdüler.",
        "Önce reklam kervanının geçişini gördüler: şapka, şeker ve anahtarlık atan süslü arabalar. Noé bir şapka yakaladı! Sonra, neredeyse iki saat sonra, bisikletçiler geldi. Yokuşa rağmen hızla tırmanıyorlardı. İnsanlar « Haydi, haydi! » diye bağırıyordu. Birkaç dakika içinde her şey bitmişti.",
        "« Seneye Alpler'e gideriz », diye söz verdi Antoine."
      ],
      en: [
        "The Tour de France is the most famous cycling race in the world. It has existed since 1903 and takes place every year in July, for about three weeks. The riders cover roughly 3,500 kilometres in twenty-one stages, across the plains, the Alps and the Pyrenees. The leader of the general classification wears the yellow jersey; the best climber wears a white jersey with red polka dots.",
        "Last summer, eleven-year-old Noé went to watch a mountain stage in the Pyrenees with his grandfather Antoine. They left very early, because the road was closed to cars. They walked for an hour to find a good spot by the roadside.",
        "First, they watched the publicity caravan go by: decorated vehicles throwing caps, sweets and key rings. Noé caught a cap! Then, almost two hours later, the riders arrived. They were climbing fast, despite the slope. People were shouting: « Allez, allez! » (Go, go!) In a few minutes, it was all over.",
        "« Next year, we'll go to the Alps », Antoine promised."
      ],
      q: [
        { tr: "Fransa Bisiklet Turu ne zamandan beri var?", en: "Since when has the Tour de France existed?", o: [["1950", "1950"], ["1789", "1789"], ["1903", "1903"]] },
        { tr: "Genel klasmanın birincisi ne giyer?", en: "What does the leader of the general classification wear?", o: [["Yeşil mayo", "The green jersey"], ["Sarı mayo", "The yellow jersey"], ["Puanlı mayo", "The polka-dot jersey"]] },
        { tr: "Noé ve Antoine neden çok erken çıktılar?", en: "Why did Noé and Antoine leave very early?", o: [["Hava çok sıcaktı", "It was too hot"], ["Yol arabalara kapalıydı", "The road was closed to cars"], ["Noé'nin okulu vardı", "Noé had school"]] },
        { tr: "Noé ne yakaladı?", en: "What did Noé catch?", o: [["Bir top", "A ball"], ["Bir bisiklet", "A bike"], ["Bir şapka", "A cap"]] },
        { tr: "Seneye nereye gidecekler?", en: "Where are they going to go next year?", o: [["Alpler'e", "To the Alps"], ["Bretanya'ya", "To Brittany"], ["Paris'e", "To Paris"]] }
      ]
    },
    "r-premier-hiver": {
      tr: [
        "Fransa'ya gelmeden önce kışın kolay olacağını düşünüyordum. Büyüdüğüm İzmir'de kış ılıktır. Ama Lille'de çok farklıydı!",
        "Kasımda neredeyse her gün yağmur yağdı. Gökyüzü griydi ve aralıkta saat on yedi civarında hava kararıyordu. Başta biraz üzgündüm ve hep yorgundum. Bir iş arkadaşım öğlen gün ışığında yürümemi ve spor yapmamı tavsiye etti. Haftada iki kez yeniden koşmaya başladım ve bu bana çok yardımcı oldu.",
        "Çok hoş şeyler de keşfettim. Aralıkta Noel pazarını gezdim ve Grand-Place'taki dönme dolaba bindim. İlk sıcak şarabımı içtim. Ocakta iş arkadaşlarım bir « galette des rois » (Krallar pastası) aldılar: içindeki fève'i (küçük figürü) ben buldum ve tacı ben taktım! 2 Şubat'ta, Chandeleur için, komşularım beni krep yemeye davet ettiler.",
        "Sadece bir kez kar yağdı ve kar iki gün kaldı. Artık iyi bir paltoya, sıcak çoraplara ve bolca sabra ihtiyaç olduğunu biliyorum. Gelecek kış hazır olacağım!"
      ],
      en: [
        "Before coming to France, I thought winter would be easy. In Izmir, where I grew up, winter is mild. But in Lille, it was very different!",
        "In November, it rained almost every day. The sky was grey and, in December, it got dark around five p.m. At first, I was a bit sad and always tired. A colleague advised me to walk at lunchtime, in daylight, and to do sport. I started running again twice a week, and it helped me a lot.",
        "I also discovered some very pleasant things. In December, I visited the Christmas market and went up the big wheel on the Grand-Place. I drank my first mulled wine. In January, my colleagues bought a galette des rois (kings' cake): I found the fève (the little charm) and I wore the crown! On 2 February, for Chandeleur (Candlemas), my neighbours invited me to eat crêpes.",
        "It snowed only once, and the snow stayed for two days. Now I know you need a good coat, warm socks and lots of patience. Next winter, I'll be ready!"
      ],
      q: [
        { tr: "Esin nerede büyüdü?", en: "Where did Esin grow up?", o: [["İstanbul'da", "In Istanbul"], ["İzmir'de", "In Izmir"], ["Ankara'da", "In Ankara"]] },
        { tr: "Aralıkta Lille'de hava saat kaç civarında kararıyordu?", en: "In December, in Lille, it got dark around…", o: [["17.00", "5 p.m."], ["15.00", "3 p.m."], ["20.00", "8 p.m."]] },
        { tr: "Üzgünken ona ne yardımcı oldu?", en: "What helped her when she was sad?", o: [["Çok uyumak", "Sleeping a lot"], ["Televizyon izlemek", "Watching television"], ["Öğlen yürümek ve koşmak", "Walking at lunchtime and running"]] },
        { tr: "Krallar pastasında ne buldu?", en: "What did she find in the galette des rois?", o: [["Bir madeni para", "A coin"], ["Fève'i (küçük figürü)", "The fève (the little charm)"], ["Bir yüzük", "A ring"]] },
        { tr: "Chandeleur'de ne yenir?", en: "What do people eat at Chandeleur?", o: [["Krep", "Crêpes"], ["Raclette", "Raclette"], ["Çikolata", "Chocolate"]] }
      ]
    },
    "r-lyon": {
      tr: [
        "Geçen ay Aïcha, kuzeni Manon'un evinde Lyon'da bir hafta geçirdi. Fransa'nın üçüncü büyük şehrine ilk ziyaretiydi.",
        "İlk gün UNESCO Dünya Mirası listesindeki eski bir semt olan Vieux-Lyon'da gezindiler. Manon ona traboule'ları, yani binaların içinden geçen geçitleri gösterdi. Anlatıldığına göre eskiden ipek işçileri kumaşlarını yağmurdan korunarak taşımak için bunları kullanırmış.",
        "Ertesi gün Fourvière bazilikasına çıkmak için fünikülere bindiler. Yukarıdan manzara muhteşemdi: bütün şehir, iki nehir, Rhône ve Saône, hatta uzakta Alpler bile görünüyordu.",
        "Lyon aynı zamanda bir gastronomi başkentidir. Bir akşam, tipik küçük bir restoran olan bir « bouchon »da akşam yemeği yediler. Aïcha bir Lyon salatası ve bir quenelle tattı. Biraz ağırdı ama çok lezzetliydi!",
        "Cumartesi hava güzeldi, bu yüzden Tête d'Or parkında bisiklete bindiler. Ayrılmadan önce Aïcha söz verdi: « Aralıkta Işıklar Bayramı (Fête des Lumières) için geri geleceğim! »"
      ],
      en: [
        "Last month, Aïcha spent a week in Lyon at her cousin Manon's place. It was her first visit to the third-largest city in France.",
        "On the first day, they strolled around Vieux-Lyon, an old district listed as a UNESCO World Heritage site. Manon showed her the traboules, passageways that go through the buildings. It is said that in the past, the silk workers used them to carry their fabrics sheltered from the rain.",
        "The next day, they took the funicular up to the Fourvière basilica. From the top, the view was magnificent: you could see the whole city, the two rivers, the Rhône and the Saône, and even the Alps in the distance.",
        "Lyon is also a capital of gastronomy. One evening, they had dinner in a bouchon, a small traditional restaurant. Aïcha tasted a Lyonnaise salad and a quenelle. It was a bit heavy, but delicious!",
        "On Saturday, the weather was nice, so they went cycling in the Tête d'Or park. Before leaving, Aïcha promised: « I'll come back in December for the Fête des Lumières (Festival of Lights)! »"
      ],
      q: [
        { tr: "Aïcha haftayı kimin yanında geçirdi?", en: "Who did Aïcha spend the week with?", o: [["Bir arkadaşının yanında", "At a friend's"], ["Kuzeni Manon'un yanında", "At her cousin Manon's"], ["Otelde", "In a hotel"]] },
        { tr: "Traboule nedir?", en: "What is a traboule?", o: [["Tipik bir yemek", "A traditional dish"], ["Bir kilise", "A church"], ["Binaların içinden geçen bir geçit", "A passageway through buildings"]] },
        { tr: "Fourvière'e nasıl çıktılar?", en: "How did they go up to Fourvière?", o: [["Fünikülerle", "By funicular"], ["Yürüyerek", "On foot"], ["Taksiyle", "By taxi"]] },
        { tr: "Lyon'un iki nehrinin adı ne?", en: "What are Lyon's two rivers called?", o: [["Sen ve Loire", "The Seine and the Loire"], ["Rhône ve Saône", "The Rhône and the Saône"], ["Garonne ve Ren", "The Garonne and the Rhine"]] },
        { tr: "Aïcha ne zaman geri gelmek istiyor?", en: "When does Aïcha want to come back?", o: [["Aralıkta", "In December"], ["Temmuzda", "In July"], ["Paskalya'da", "At Easter"]] }
      ]
    },
    "r-14-juillet": {
      tr: [
        "14 Temmuz Fransa'nın ulusal bayramıdır. O gün, Fransız Devrimi'nin başında, 14 Temmuz 1789'da Paris'teki bir hapishane olan Bastille'in alınışı anılır. Resmî tatildir: insanların çoğu çalışmaz.",
        "Bu yıl Thomas ve kız arkadaşı Elif 14 Temmuz'u Paris'te geçirdiler. Bir önceki akşam itfaiyecilerin balosuna gittiler: birçok itfaiye merkezinde itfaiyeciler müzikli büyük bir eğlence düzenler. Sabahın ikisine kadar dans ettiler!",
        "14'ü sabahı Thomas'ın ailesinin evinde askerî geçit törenini televizyondan izlediler. Askerler Champs-Élysées'de yürüdü ve uçaklar gökyüzüne bayrağın renklerini çizdi: mavi, beyaz, kırmızı. Elif bunu etkileyici buldu.",
        "Öğleden sonra arkadaşlarıyla Champ-de-Mars'ta piknik yaptılar. Zaten çok kalabalıktı, çünkü herkes akşam için iyi bir yer istiyordu. Saat yirmi üçte, büyük ve ücretsiz bir konserin ardından Eyfel Kulesi'nin üzerinde havai fişek gösterisi başladı. Elif Türkiye'deki ailesi için onlarca fotoğraf çekti."
      ],
      en: [
        "14 July is the French national holiday. On that day, people remember the storming of the Bastille, a prison in Paris, on 14 July 1789, at the start of the French Revolution. It's a public holiday: most people don't work.",
        "This year, Thomas and his girlfriend Elif spent 14 July in Paris. The evening before, they went to the firefighters' ball: in many fire stations, the firefighters organise a big party with music. They danced until two in the morning!",
        "On the morning of the 14th, they watched the military parade on television, at Thomas's parents' place. Soldiers marched on the Champs-Élysées and planes drew the colours of the flag in the sky: blue, white, red. Elif found it impressive.",
        "In the afternoon, they had a picnic on the Champ-de-Mars with friends. There were already lots of people, because everyone wanted a good spot for the evening. At eleven p.m., after a big free concert, the fireworks started above the Eiffel Tower. Elif took dozens of photos for her family in Turkey."
      ],
      q: [
        { tr: "14 Temmuz 1789'da ne oldu?", en: "What happened on 14 July 1789?", o: [["Eyfel Kulesi'nin yapımı", "The building of the Eiffel Tower"], ["Bastille'in alınışı", "The storming of the Bastille"], ["Bir savaşın sonu", "The end of a war"]] },
        { tr: "13 Temmuz balolarını kim düzenliyor?", en: "Who organises the balls on 13 July?", o: [["İtfaiyeciler", "The firefighters"], ["Okullar", "Schools"], ["Restoranlar", "Restaurants"]] },
        { tr: "Askerî geçit törenini nasıl izlediler?", en: "How did they watch the military parade?", o: [["Champs-Élysées'de", "On the Champs-Élysées"], ["Metroda telefonlarından", "On their phones, in the metro"], ["Thomas'ın ailesinin evinde televizyondan", "On television, at Thomas's parents' place"]] },
        { tr: "Champ-de-Mars'ta neden çok kalabalık vardı?", en: "Why were there lots of people on the Champ-de-Mars?", o: [["Bir maç vardı", "There was a match"], ["İnsanlar akşam için iyi bir yer istiyordu", "People wanted a good spot for the evening"], ["Bir pazar vardı", "There was a market"]] },
        { tr: "Havai fişek gösterisi neredeydi?", en: "Where were the fireworks?", o: [["Eyfel Kulesi'nin üzerinde", "Above the Eiffel Tower"], ["Rouen'da, Sen nehri üzerinde", "On the Seine, in Rouen"], ["Bastille'in üzerinde", "Above the Bastille"]] }
      ]
    },
    "r-fromage": {
      tr: [
        "Fransa'da binden fazla peynir olduğu sık sık söylenir. İnek, keçi ya da koyun sütünden yapılanlar, yumuşak tatlılar ve çok sert kokulular vardır. Ortalama olarak her Fransız yılda yirmi beş kilodan fazla peynir yiyor!",
        "Türk öğrenci Deniz eylülde Grenoble'a geldi. Türkiye'de kahvaltıda daha çok beyaz peynir yerdi. Başta Fransa'da bazı peynirlerin kokusunu çok ağır buluyordu.",
        "Bir cumartesi bir peynirciye girdi. Peynirci Mösyö Girard ona üç peynir tattırdı. Önce Jura'dan, inek sütünden bir comté: tadı yumuşak, biraz tatlıydı. Sonra koyun sütünden, güney Fransa'daki doğal mağaralarda olgunlaşan bir roquefort. Deniz onu fazla tuzlu buldu. Son olarak Normandiya'dan kremamsı ve kokulu bir camembert. En sevdiği oydu.",
        "Mösyö Girard ona bir Fransız alışkanlığını da açıkladı: yemekte peynir ana yemekten sonra ve tatlıdan önce, ekmekle servis edilir. « Ve brie'nin ucu asla kesilmez! » diye gülerek ekledi.",
        "Deniz bir parça comté ile ayrıldı. Akşam onu ekmek ve… siyah zeytinle yedi. Mükemmel bir Fransız-Türk karışımı!"
      ],
      en: [
        "People often say there are more than a thousand cheeses in France. There are cow's, goat's or sheep's milk cheeses, mild ones and very strong ones. On average, each French person eats more than twenty-five kilos of it a year!",
        "Deniz, a Turkish student, arrived in Grenoble in September. In Turkey, she mostly ate beyaz peynir (white cheese) for breakfast. At first, in France, she found the smell of some cheeses too strong.",
        "One Saturday, she went into a cheese shop. The cheesemonger, Mr Girard, let her taste three cheeses. First a comté, from the Jura, made from cow's milk: it had a mild, slightly sweet taste. Then a roquefort, made from sheep's milk, which ages in natural caves in the south of France. Deniz found it too salty. Finally, a camembert from Normandy, creamy and fragrant. It was her favourite.",
        "Mr Girard also explained a French habit to her: during a meal, cheese is served after the main course and before dessert, with bread. « And you never cut off the tip of the brie! » he added, laughing.",
        "Deniz left with a piece of comté. In the evening, she ate it with bread and… black olives. A perfect French-Turkish mix!"
      ],
      q: [
        { tr: "Metne göre Fransa'da kaç peynir var?", en: "According to the text, how many cheeses are there in France?", o: [["Yaklaşık yüz", "About a hundred"], ["Binden fazla", "More than a thousand"], ["Tam 365", "Exactly 365"]] },
        { tr: "Roquefort … sütünden yapılır.", en: "Roquefort is made with … milk.", o: [["inek", "cow's"], ["keçi", "goat's"], ["koyun", "sheep's"]] },
        { tr: "Deniz en çok hangi peyniri sevdi?", en: "Which cheese did Deniz like best?", o: [["Camembert", "The camembert"], ["Comté", "The comté"], ["Roquefort", "The roquefort"]] },
        { tr: "Yemekte peynir ne zaman yenir?", en: "When is cheese eaten during a meal?", o: [["Başlangıçtan önce", "Before the starter"], ["Kahveyle birlikte", "With the coffee"], ["Ana yemekten sonra ve tatlıdan önce", "After the main course and before dessert"]] },
        { tr: "Deniz akşam comté'yi neyle yedi?", en: "What did Deniz eat the comté with in the evening?", o: [["Balla", "With honey"], ["Ekmek ve zeytinle", "With bread and olives"], ["Reçelle", "With jam"]] }
      ]
    },
    "r-diner-turc": {
      tr: [
        "Geçen cumartesi dört Fransız arkadaşımı evime akşam yemeğine davet ettim: Claire, Mathieu, Sofiane ve Lucie. Fransızlar için ilk kez Türk yemeği yapıyordum ve biraz stresliydim.",
        "Sabahtan başladım. Mezeler hazırladım: yoğurt, salatalık ve sarımsakla cacık, yaprak sarması ve biraz acı bir domates salatası olan ezme. Sonra peynirli ve ıspanaklı börek yaptım. Ana yemek için köfte ve pilav seçtim. Tatlı için mahalledeki bir Türk pastanesinden baklava aldım: yapmaya vaktim yoktu!",
        "Arkadaşlarım saat yirmide çiçeklerle geldiler. Her şeyi tattılar. Mathieu cacığa bayıldı: onun bir sos olduğunu sanıyordu ama Türkiye'de soğuk çorba gibi de yenir. Vejetaryen olan Lucie bol bol börek yedi.",
        "Sonunda lale biçimli küçük bardaklarda çay servis ettim. Claire neden süt konmadığını sordu. Gece yarısına kadar Fransızca ve biraz da İngilizce konuştuk.",
        "Gelecek ay sıra onlarda: bana raclette yapacaklar!"
      ],
      en: [
        "Last Saturday, I invited four French friends to dinner at my place: Claire, Mathieu, Sofiane and Lucie. It was the first time I was cooking Turkish food for French people, and I was a bit stressed.",
        "I started in the morning. I made mezes: cacık with yoghurt, cucumber and garlic, stuffed vine leaves and ezme, a slightly spicy tomato salad. Then I made börek with cheese and spinach. For the main course, I chose köfte with rice pilaf. For dessert, I bought baklava from a Turkish pastry shop in the neighbourhood: I didn't have time to make it!",
        "My friends arrived at eight p.m., with flowers. They tasted everything. Mathieu loved the cacık: he thought it was a sauce, but in Turkey it is also eaten as a cold soup. Lucie, who is vegetarian, ate a lot of börek.",
        "At the end, I served tea in small tulip-shaped glasses. Claire asked why we don't put milk in it. We talked until midnight, in French and a bit in English.",
        "Next month, it will be their turn: they are going to make me a raclette!"
      ],
      q: [
        { tr: "Esin kaç arkadaşını davet etti?", en: "How many friends did Esin invite?", o: [["İki", "Two"], ["Dört", "Four"], ["Altı", "Six"]] },
        { tr: "Esin neyi kendisi yapmadı?", en: "What did Esin not make herself?", o: [["Börekleri", "The börek"], ["Cacığı", "The cacık"], ["Baklavayı", "The baklava"]] },
        { tr: "Mathieu cacık hakkında ne düşünüyordu?", en: "What did Mathieu think the cacık was?", o: [["Bir sos olduğunu", "That it was a sauce"], ["Bir tatlı olduğunu", "That it was a dessert"], ["Çok acı olduğunu", "That it was too spicy"]] },
        { tr: "Lucie neden çok börek yedi?", en: "Why did Lucie eat a lot of börek?", o: [["Pilavı sevmiyor", "She doesn't like rice"], ["Vejetaryen", "She is vegetarian"], ["Spordan geliyordu", "She had just come from sport"]] },
        { tr: "Arkadaşları gelecek ay ne hazırlayacak?", en: "What are her friends going to make next month?", o: [["Kuskus", "A couscous"], ["Pizza", "A pizza"], ["Raclette", "A raclette"]] }
      ]
    }
  });
})();
