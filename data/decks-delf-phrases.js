/* DELF A1–A2 ready-made phrases (writing and speaking), by use.
   Each card: "français|Türkçe|English|optional note". Phrases already in other decks are left out. */
(function () {
  const D = (id, level, en, tr, fr, lines) => ({
    id, level, name: { en, tr, fr },
    cards: lines.trim().split("\n").map(l => {
      const [f, t, e, n] = l.split("|").map(s => (s || "").trim());
      return { id: id + ":" + f, fr: f, tr: t, en: e, note: n || "" };
    })
  });

  window.DECKS.push(
    D("delf-ph-write-open", "A1", "DELF writing: opening and closing a message", "DELF yazılı: mesaja başlamak ve bitirmek", "DELF écrit : ouvrir et fermer un message", `
Salut Léa !|Selam Léa!|Hi Léa!|Friend (tu). Never to an office or a company.
Coucou Léa !|Selam Léa! (çok samimi)|Hi Léa! (very casual)|Close friends and family only.
Cher Thomas,|Sevgili Thomas,|Dear Thomas,|Man: Cher. Comma, then a new line.
Chère Julie,|Sevgili Julie,|Dear Julie,|Woman: Chère.
Chers amis,|Sevgili dostlar,|Dear friends,
Comment vas-tu ?|Nasılsın?|How are you?|tu. With vous: Comment allez-vous ?
J'espère que tu vas bien.|Umarım iyisindir.|I hope you're well.|With vous: J'espère que vous allez bien.
Merci pour ton message !|Mesajın için teşekkürler!|Thanks for your message!|Good first line when you answer a message.
À samedi !|Cumartesi görüşürüz!|See you on Saturday!|À + day: À demain ! À lundi !
Bises|Öpüyorum|Love (lit. kisses)|Friendly sign-off, not romantic. Never in a formal message.
Grosses bises|Kocaman öpücükler|Lots of love|Friends and family only.
Je t'embrasse|Seni öpüyorum|Love (lit. I kiss you)|Warm sign-off to a friend; not romantic.
Amitiés|Sevgiler, dostlukla|Best wishes|Friendly, a little less intimate than Bises.
Réponds-moi vite !|Bana çabuk cevap ver!|Write back soon!|tu. Keep tu or vous from start to end.
Madame, Monsieur,|Sayın Yetkili,|Dear Sir or Madam,|Formal: you don't know who will read it.
Madame,|Sayın Hanımefendi,|Dear Madam,|Formal: never « Chère Madame ».
Monsieur,|Sayın Beyefendi,|Dear Sir,|Formal.
Bonjour Madame Martin,|Merhaba Martin Hanım,|Hello Mrs Martin,|E-mail, a little less formal than « Madame, ».
Je vous écris pour vous demander des informations sur…|… hakkında bilgi istemek için size yazıyorum.|I'm writing to ask you for information about…|Formal first sentence: say why you are writing.
Cordialement,|Saygılarımla,|Kind regards,|The usual formal e-mail sign-off. Never to a friend.
Bien cordialement,|Saygılarımla,|Best regards,|A little warmer than Cordialement.
Je vous remercie par avance.|Şimdiden teşekkür ederim.|Thank you in advance.|Formal, just before the sign-off.
Dans l'attente de votre réponse,|Cevabınızı bekler,|Looking forward to your reply,|Formal, just before the sign-off.
Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.|Saygılarımı sunarım.|Yours faithfully.|Very formal letter ending. Sign with first name + SURNAME.
`),

    D("delf-ph-write-invite", "A1", "DELF writing: inviting, accepting, refusing", "DELF yazılı: davet etmek, kabul etmek, reddetmek", "DELF écrit : inviter, accepter, refuser", `
Je fais une fête chez moi samedi soir.|Cumartesi akşamı evde parti veriyorum.|I'm having a party at my place on Saturday evening.
Tu veux venir ?|Gelmek ister misin?|Do you want to come?
Je t'invite à mon anniversaire, le 12 mai à 19 h.|Seni 12 Mayıs'ta saat 19'daki doğum günüme davet ediyorum.|I'm inviting you to my birthday on 12 May at 7 pm.|Give the date and time: the task usually asks for them.
Ça te dit d'aller au cinéma dimanche ?|Pazar günü sinemaya gitmeye ne dersin?|Do you fancy going to the cinema on Sunday?|Casual (tu).
On se retrouve à 18 h devant la gare.|Saat 18'de garın önünde buluşalım.|Let's meet at 6 pm in front of the station.|Say where and when you meet.
Tu peux me répondre avant jeudi ?|Perşembeden önce bana cevap verebilir misin?|Can you answer me before Thursday?
Nous avons le plaisir de vous inviter à notre fête de quartier.|Sizi mahalle şenliğimize davet etmekten mutluluk duyarız.|We are pleased to invite you to our neighbourhood party.|A2, formal (vous).
On peut se voir mercredi ?|Çarşamba görüşebilir miyiz?|Can we meet on Wednesday?
Si tu veux, on peut aller au marché ensemble.|İstersen pazara birlikte gidebiliriz.|If you like, we can go to the market together.
Je te propose de venir chez moi.|Bana gelmeni öneriyorum.|Why don't you come to my place?|proposer de + infinitive.
Tu veux que je t'aide ?|Sana yardım etmemi ister misin?|Do you want me to help you?
Et si on allait à la mer ?|Denize gitsek mi?|How about going to the seaside?|A2: Et si + imparfait = a suggestion.
Merci pour ton invitation !|Davetin için teşekkürler!|Thanks for your invitation!|Start every answer to an invitation with this.
Avec plaisir !|Memnuniyetle!|With pleasure!
Bonne idée !|İyi fikir!|Good idea!
Je viens avec plaisir.|Seve seve geliyorum.|I'd love to come.
C'est d'accord pour samedi.|Cumartesi için tamam.|Saturday is fine.
J'apporte un dessert ?|Bir tatlı getireyim mi?|Shall I bring a dessert?
J'accepte volontiers votre invitation.|Davetinizi memnuniyetle kabul ediyorum.|I gladly accept your invitation.|A2, formal (vous).
Merci beaucoup, mais je ne peux pas venir.|Çok teşekkürler ama gelemiyorum.|Thanks a lot, but I can't come.|Polite refusal: thanks + regret + reason + new idea.
Je suis désolée, je ne suis pas libre ce jour-là.|Üzgünüm, o gün müsait değilim.|I'm sorry, I'm not free that day.|Man: désolé.
Malheureusement, je travaille samedi.|Maalesef cumartesi çalışıyorum.|Unfortunately, I'm working on Saturday.|Always give a reason.
C'est dommage ! Une autre fois, peut-être ?|Ne yazık! Belki başka bir zaman?|What a pity! Another time, maybe?
Pourquoi pas le week-end prochain ?|Gelecek hafta sonuna ne dersin?|Why not next weekend?|Suggest another date.
Je ne peux pas venir samedi soir : ma mère arrive d'Istanbul.|Cumartesi akşamı gelemiyorum: annem İstanbul'dan geliyor.|I can't come on Saturday evening: my mother is arriving from Istanbul.|A2: refusal + reason in one sentence.
Est-ce qu'on peut fêter ton anniversaire la semaine prochaine ?|Doğum gününü gelecek hafta kutlayabilir miyiz?|Can we celebrate your birthday next week?|New date after a refusal.
Dis-moi quel jour tu préfères.|Hangi günü tercih ettiğini söyle.|Tell me which day you prefer.|Asks for an answer: good just before the sign-off.
Passe une très bonne soirée samedi !|Cumartesi çok güzel bir akşam geçir!|Have a really nice evening on Saturday!|tu imperative: -er verbs lose the -s (Passe).
`),

    D("delf-ph-write-past", "A2", "DELF writing: telling a past event, describing", "DELF yazılı: geçmişi anlatmak, tarif etmek", "DELF écrit : raconter au passé, décrire", `
Le week-end dernier, je suis allée à Bruges avec des amies.|Geçen hafta sonu arkadaşlarımla Brugge'ye gittim.|Last weekend I went to Bruges with some friends.|Passé composé for events. Man: je suis allé.
Nous sommes parties à 8 heures et nous sommes arrivées à 10 heures.|Saat 8'de yola çıktık ve 10'da vardık.|We left at 8 and arrived at 10.|être verbs agree: parties, arrivées (a group of women).
Il faisait beau et il y avait beaucoup de monde.|Hava güzeldi ve çok kalabalıktı.|The weather was nice and it was very crowded.|Imparfait for the setting and the weather.
Nous avons visité le centre et nous avons mangé des gaufres.|Şehir merkezini gezdik ve waffle yedik.|We visited the centre and ate waffles.|avoir + past participle for actions.
C'était génial !|Harikaydı!|It was great!|Imparfait for feelings and opinions.
J'ai passé une très bonne journée.|Çok güzel bir gün geçirdim.|I had a really good day.
Le soir, je suis rentrée fatiguée mais contente.|Akşam eve yorgun ama mutlu döndüm.|In the evening I came home tired but happy.|Man: rentré fatigué mais content.
Je suis en vacances à Biarritz avec ma sœur.|Kız kardeşimle Biarritz'de tatildeyim.|I'm on holiday in Biarritz with my sister.|A1 postcard: where + who with. à + city.
Il fait beau et chaud !|Hava güzel ve sıcak!|The weather is nice and hot!|Weather: il fait…
Le matin, nous allons à la plage.|Sabahları plaja gidiyoruz.|In the mornings we go to the beach.|le matin = every morning.
Je rentre à Lille samedi.|Cumartesi Lille'e dönüyorum.|I'm going back to Lille on Saturday.|Present tense for a planned near future.
C'est une petite ville calme.|Küçük, sakin bir şehir.|It's a small, quiet town.
C'est une jolie ville au bord de la mer.|Deniz kenarında güzel bir şehir.|It's a pretty town by the sea.|Short adjectives (jolie, petite, grande) go before the noun.
Il y a un grand parc et beaucoup de restaurants.|Büyük bir park ve bir sürü restoran var.|There's a big park and lots of restaurants.
Mon appartement est petit mais lumineux.|Dairem küçük ama aydınlık.|My flat is small but bright.
Elle est grande, elle a les cheveux bruns et les yeux verts.|Uzun boylu; kahverengi saçları ve yeşil gözleri var.|She's tall, with brown hair and green eyes.|avoir les cheveux…, avoir les yeux…
Il est sympa et très drôle.|Sevimli ve çok komik biri.|He's nice and very funny.
L'hôtel se trouve près de la plage.|Otel plajın yakınında.|The hotel is near the beach.|se trouver = to be located.
`),

    D("delf-ph-write-thanks", "A2", "DELF writing: thanking, apologising, asking, congratulating", "DELF yazılı: teşekkür etmek, özür dilemek, bilgi istemek, tebrik etmek", "DELF écrit : remercier, s'excuser, demander, féliciter", `
Merci beaucoup pour le cadeau !|Hediye için çok teşekkürler!|Thank you very much for the present!|merci pour + noun.
Merci de m'avoir aidée !|Bana yardım ettiğin için teşekkürler!|Thanks for helping me!|merci de + infinitive. Man writing: aidé.
Je te remercie pour ton aide.|Yardımın için teşekkür ederim.|Thank you for your help.
C'est très gentil de ta part.|Çok naziksin.|That's very kind of you.|With vous: de votre part.
Je vous remercie pour votre accueil.|Misafirperverliğiniz için teşekkür ederim.|Thank you for your hospitality.|Formal (vous).
Excuse-moi / Excusez-moi pour mon retard.|Geciktiğim için özür dilerim.|Sorry I'm late.|tu / vous.
Je suis vraiment désolée.|Gerçekten çok üzgünüm.|I'm really sorry.|Man: désolé.
Je n'ai pas pu venir hier parce que j'étais malade.|Dün gelemedim çünkü hastaydım.|I couldn't come yesterday because I was ill.|Apology + reason.
J'ai eu un problème : mon bus est tombé en panne.|Bir sorun yaşadım: otobüsüm arızalandı.|I had a problem: my bus broke down.
Je vous prie de m'excuser.|Özür dilerim. (resmî)|Please accept my apologies.|Formal (vous).
Je voudrais des informations sur vos cours de natation.|Yüzme kurslarınız hakkında bilgi almak istiyorum.|I'd like some information about your swimming lessons.
Quels sont les horaires d'ouverture ?|Açılış saatleri nedir?|What are the opening hours?
Combien coûte l'inscription ?|Kayıt ücreti ne kadar?|How much does registration cost?
Est-ce qu'il faut réserver ?|Rezervasyon yapmak gerekiyor mu?|Do I need to book?
Pourriez-vous me dire quels documents je dois apporter ?|Hangi belgeleri getirmem gerektiğini söyleyebilir misiniz?|Could you tell me which documents I need to bring?|Very polite (conditional).
Je voudrais savoir si le parking est gratuit.|Otoparkın ücretsiz olup olmadığını öğrenmek istiyorum.|I'd like to know whether the car park is free.|Indirect question with si.
Félicitations !|Tebrikler!|Congratulations!
Félicitations pour ton nouveau travail !|Yeni işin için tebrikler!|Congratulations on your new job!
Joyeux anniversaire !|Doğum günün kutlu olsun!|Happy birthday!|Also: Bon anniversaire !
Je suis très contente pour toi.|Senin adına çok sevindim.|I'm very happy for you.|Man: content.
Bonne chance pour ton examen !|Sınavında bol şans!|Good luck with your exam!
Joyeux Noël et bonne année !|Mutlu Noeller ve mutlu yıllar!|Merry Christmas and Happy New Year!
Toutes mes félicitations pour votre mariage !|Evliliğiniz için en içten tebriklerimi sunarım!|Warmest congratulations on your wedding!|Formal (vous).
`),

    D("delf-ph-speak-intro", "A1", "DELF speaking: introducing yourself to the examiner", "DELF sözlü: sınav görevlisine kendini tanıtmak", "DELF oral : se présenter à l'examinateur", `
Bonjour Madame. / Bonjour Monsieur.|İyi günler.|Hello (Madam / Sir).|To the examiner: never « Salut ». Use vous all the way through.
Je peux m'asseoir ?|Oturabilir miyim?|May I sit down?
Oui, je suis prête.|Evet, hazırım.|Yes, I'm ready.|Man: prêt.
Excusez-moi, je suis un peu stressée.|Kusura bakmayın, biraz heyecanlıyım.|Sorry, I'm a bit nervous.|Man: stressé.
Merci beaucoup, Madame. Au revoir et bonne journée !|Çok teşekkür ederim. Hoşça kalın, iyi günler!|Thank you very much. Goodbye and have a nice day!|When you leave the exam room.
Mon prénom, c'est Elif : E-L-I-F.|Adım Elif: E-L-I-F.|My first name is Elif: E-L-I-F.|Model answer: put in your own name and spell it letter by letter.
J'ai trente-deux ans.|Otuz iki yaşındayım.|I'm thirty-two.|Example: say your own age. Age with avoir: never « je suis 32 ans ».
Je viens d'Izmir, en Turquie.|Türkiye'den, İzmir'den geliyorum.|I'm from Izmir, in Turkey.|de + city, en Turquie.
J'habite à Roubaix, près de Lille, depuis deux ans.|İki yıldır Lille yakınlarında, Roubaix'de oturuyorum.|I've been living in Roubaix, near Lille, for two years.|Present + depuis = still true now.
Je suis mariée.|Evliyim.|I'm married.|Man: marié. Single: célibataire.
J'ai un fils de cinq ans.|Beş yaşında bir oğlum var.|I have a five-year-old son.
Je n'ai pas d'enfant.|Çocuğum yok.|I don't have any children.|After pas: de, not un / des.
En Turquie, j'étais kinésithérapeute.|Türkiye'de fizyoterapisttim.|In Turkey, I was a physiotherapist.|No article before a job.
Maintenant, je cherche du travail.|Şimdi iş arıyorum.|Now I'm looking for work.
Je parle turc, anglais et un peu français.|Türkçe, İngilizce ve biraz Fransızca konuşuyorum.|I speak Turkish, English and a little French.|Languages take no capital letter.
J'apprends le français depuis un an, pour mon travail.|Bir yıldır iş için Fransızca öğreniyorum.|I've been learning French for a year, for my work.
Le week-end, j'aime me promener et cuisiner.|Hafta sonları gezmeyi ve yemek yapmayı severim.|At weekends I like going for walks and cooking.|aimer + infinitive.
Je suis arrivée en France en 2024.|2024'te Fransa'ya geldim.|I arrived in France in 2024.|A2. Man: arrivé.
Avant, j'habitais à Izmir.|Önceden İzmir'de oturuyordum.|Before that, I lived in Izmir.|A2: imparfait for a past situation.
Excusez-moi, je n'ai pas compris.|Affedersiniz, anlamadım.|Sorry, I didn't understand.|Asking again costs no points; silence does.
Pourriez-vous parler plus lentement, s'il vous plaît ?|Daha yavaş konuşabilir misiniz, lütfen?|Could you speak more slowly, please?
Qu'est-ce que ça veut dire, « tarif réduit » ?|« Tarif réduit » ne demek?|What does "tarif réduit" mean?|Repeat the word you didn't understand.
Vous voulez dire que le magasin est fermé le lundi ?|Mağazanın pazartesi kapalı olduğunu mu söylemek istiyorsunuz?|You mean the shop is closed on Mondays?|A2: check that you understood.
Euh… / Alors… / Bon…|Iıı… / Şey… / Peki…|Um… / So… / Well…|Fillers while you think, instead of Turkish « şey », « yani ».
Voyons… / Attendez…|Bakalım… / Bir saniye…|Let's see… / Wait…
C'est une bonne question !|Güzel bir soru!|That's a good question!|Buys you a few seconds.
Comment dire… ?|Nasıl desem…?|How can I put it…?
Je ne connais pas le mot, mais c'est un objet pour ouvrir les bouteilles.|Kelimeyi bilmiyorum ama şişeleri açmak için kullanılan bir şey.|I don't know the word, but it's a thing for opening bottles.|Missing word? Describe it: c'est un objet pour + infinitive.
Je ne sais pas exactement, mais je pense que…|Tam olarak bilmiyorum ama bence…|I don't know exactly, but I think…
`),

    D("delf-ph-speak-questions", "A1", "DELF speaking: asking questions (information exchange)", "DELF sözlü: soru sormak (bilgi alışverişi)", "DELF oral : poser des questions (échange d'informations)", `
Vous avez des enfants ?|Çocuklarınız var mı?|Do you have children?|Intonation only: the voice goes up at the end. Everyday.
Est-ce que vous avez des enfants ?|Çocuklarınız var mı?|Do you have children?|Est-ce que: always correct, the safest way.
Avez-vous des enfants ?|Çocuklarınız var mı?|Do you have children?|Inversion: more formal.
Vous habitez où ?|Nerede oturuyorsunuz?|Where do you live?|Everyday.
Où est-ce que vous habitez ?|Nerede oturuyorsunuz?|Where do you live?|Question word + est-ce que: safe.
Où habitez-vous ?|Nerede oturuyorsunuz?|Where do you live?|Inversion: more formal.
Habite-t-il à Lille ?|Lille'de mi oturuyor?|Does he live in Lille?|Verb ending in a vowel + il / elle: add -t-.
A-t-elle un chien ?|Köpeği var mı?|Does she have a dog?|Same -t- rule.
Qui ?|Kim?|Who?|Qui est-ce ?
Qu'est-ce que… ?|Ne?|What…?|Qu'est-ce que vous faites le week-end ?
Quoi ?|Ne?|What?|Casual, at the end: Vous faites quoi ?
Où ?|Nerede? Nereye?|Where?
D'où ?|Nereden?|Where from?|D'où venez-vous ?
Quand ?|Ne zaman?|When?
À quelle heure ?|Saat kaçta?|At what time?
Comment ?|Nasıl?|How?
Combien ?|Kaç? Ne kadar?|How much? How many?
Combien de… ?|Kaç tane…? Ne kadar…?|How many…? How much…?|Combien de frères et sœurs avez-vous ?
Pourquoi ?|Neden?|Why?|The answer starts with parce que…
Quel… ? / Quelle… ?|Hangi…? Ne…?|Which…? What…?|Agrees with the noun: quel sport, quelle couleur; plural quels / quelles.
Est-ce que vous faites du sport ?|Spor yapıyor musunuz?|Do you do any sport?|A1 part 2, card « Sport ? ».
Quel sport est-ce que vous aimez ?|Hangi sporu seviyorsunuz?|Which sport do you like?
Vous allez à la salle de sport combien de fois par semaine ?|Spor salonuna haftada kaç kez gidiyorsunuz?|How many times a week do you go to the gym?
`),

    D("delf-ph-speak-shop", "A1", "DELF speaking: shopping, ordering, booking (role-play)", "DELF sözlü: alışveriş, sipariş, rezervasyon (canlandırma)", "DELF oral : acheter, commander, réserver (jeu de rôle)", `
Bonjour, je voudrais un kilo de tomates, s'il vous plaît.|Merhaba, bir kilo domates istiyorum, lütfen.|Hello, I'd like a kilo of tomatoes, please.|Always « je voudrais »: « je veux » sounds rude.
Vous avez ce pull en taille M ?|Bu kazağın M bedeni var mı?|Do you have this jumper in size M?
Je peux l'essayer ?|Deneyebilir miyim?|Can I try it on?
C'est un peu cher.|Biraz pahalı.|It's a bit expensive.
Vous n'avez pas moins cher ?|Daha ucuzu yok mu?|Don't you have anything cheaper?
Je le prends.|Onu alıyorum.|I'll take it.|le for a masculine thing (le pull).
Je la prends.|Onu alıyorum.|I'll take it.|la for a feminine thing (la robe).
Voilà vingt euros.|Buyurun, yirmi euro.|Here's twenty euros.
C'est tout, merci.|Bu kadar, teşekkürler.|That's all, thanks.
Je voudrais un aller-retour pour Paris, s'il vous plaît.|Paris'e bir gidiş-dönüş bilet istiyorum, lütfen.|I'd like a return ticket to Paris, please.|One way: un aller simple.
Je voudrais réserver une table pour quatre personnes, samedi à 20 h.|Cumartesi saat 20'ye dört kişilik bir masa ayırtmak istiyorum.|I'd like to book a table for four on Saturday at 8 pm.
Je voudrais réserver une chambre double du 3 au 5 mai.|3-5 Mayıs arası için çift kişilik bir oda ayırtmak istiyorum.|I'd like to book a double room from 3 to 5 May.|du… au… = from… to…
Le petit-déjeuner est compris ?|Kahvaltı dahil mi?|Is breakfast included?
C'est à quel nom ?|Kimin adına?|What name is it under?|You'll hear this when you book.
Au nom de Demir.|Demir adına.|Under the name Demir.|Give your surname.
`),

    D("delf-ph-speak-opinion", "A2", "DELF speaking: giving your opinion, structuring a monologue", "DELF sözlü: görüş bildirmek, monoloğu düzenlemek", "DELF oral : donner son avis, structurer un monologue", `
Je pense que c'est une bonne idée.|Bence bu iyi bir fikir.|I think it's a good idea.
Je trouve que le film est un peu long.|Bence film biraz uzun.|I find the film a bit long.|trouver que = to give an opinion.
À mon avis, le train est plus pratique.|Bana kalırsa tren daha pratik.|In my opinion, the train is more practical.
J'ai beaucoup aimé ce restaurant parce que les plats sont délicieux.|Bu restoranı çok beğendim çünkü yemekleri çok lezzetli.|I really liked this restaurant because the dishes are delicious.|Opinion + parce que + reason.
Ce que je préfère, c'est la vieille ville.|En çok sevdiğim yer eski şehir.|What I like best is the old town.
Le seul problème, c'est le prix.|Tek sorun fiyatı.|The only problem is the price.
Je te conseille ce musée !|Bu müzeyi sana tavsiye ederim!|I recommend this museum!|With vous: Je vous conseille…
J'aime / J'adore / Je n'aime pas / Je déteste le café.|Kahveyi seviyorum / bayılıyorum / sevmiyorum / nefret ediyorum.|I like / love / don't like / hate coffee.|+ le, la, les: J'aime le fromage, never « du fromage ».
J'aime beaucoup cuisiner.|Yemek yapmayı çok severim.|I really like cooking.
Je préfère le thé au café.|Çayı kahveye tercih ederim.|I prefer tea to coffee.|préférer A à B.
Mon plat préféré, c'est le poulet aux légumes.|En sevdiğim yemek sebzeli tavuk.|My favourite dish is chicken with vegetables.
Ce que j'aime le plus, c'est la mer.|En çok sevdiğim şey deniz.|What I love most is the sea.
Moi aussi.|Ben de.|Me too.|Reply to a positive sentence.
Moi non plus.|Ben de (değil).|Me neither.|Reply to a negative: Je n'aime pas le froid. – Moi non plus.
Moi, si !|Ben ise evet!|I do!|Disagree with a negative sentence.
Moi, non.|Ben ise hayır.|I don't.|Disagree with a positive sentence.
Je vais vous parler de mon quartier.|Size mahallemden bahsedeceğim.|I'm going to talk to you about my neighbourhood.|Monologue plan: topic, 2–3 ideas + examples, short conclusion (about 2 minutes).
D'abord, il y a beaucoup de commerces.|Önce, bir sürü dükkân var.|First, there are lots of shops.|First idea.
Premièrement,…|Birincisi,…|Firstly,…|Same as D'abord.
Ensuite, c'est pratique, parce que le métro est à cinq minutes.|Sonra, pratik, çünkü metro beş dakika uzaklıkta.|Next, it's convenient, because the metro is five minutes away.|Second idea + reason.
En plus,…|Üstelik,…|What's more,…|Adds an idea.
Par contre, il n'y a pas de cinéma.|Buna karşılık sinema yok.|On the other hand, there's no cinema.|Contrast. pas de + noun.
Par exemple, samedi dernier, j'ai vu un film avec une amie.|Örneğin geçen cumartesi bir arkadaşımla film izledim.|For example, last Saturday I saw a film with a friend.|A real example makes the idea concrete.
Enfin, mes voisins sont très gentils.|Son olarak, komşularım çok nazik.|Finally, my neighbours are very kind.|Last idea.
Pour finir,…|Son olarak,…|To finish,…|Announces the end.
Voilà, c'est tout.|İşte, bu kadar.|There you go, that's all.|Ends the monologue clearly.
Voilà, j'aime beaucoup mon quartier.|İşte, mahallemi çok seviyorum.|So, I really like my neighbourhood.|Short conclusion: your overall opinion.
`),

    D("delf-ph-speak-roleplay", "A2", "DELF speaking: interacting politely (role-play)", "DELF sözlü: kibarca etkileşim (canlandırma)", "DELF oral : interagir poliment (jeu de rôle)", `
On pourrait aller au marché samedi ?|Cumartesi pazara gitsek mi?|Shall we go to the market on Saturday?|Conditional = a soft suggestion.
Je vous propose de venir à 10 h.|Saat 10'da gelmenizi öneririm.|I suggest you come at 10.
Qu'est-ce que tu penses de ce cadeau ?|Bu hediye hakkında ne düşünüyorsun?|What do you think of this present?|Examiner plays a friend: tu. A seller or a receptionist: vous.
Ça me va.|Bana uyar.|That suits me.
Parfait !|Mükemmel!|Perfect!
Je suis désolée, ce n'est pas possible.|Üzgünüm, mümkün değil.|I'm sorry, it's not possible.|Man: désolé.
Samedi, ça ne m'arrange pas.|Cumartesi bana uymuyor.|Saturday doesn't suit me.
Non merci, c'est gentil.|Hayır teşekkürler, naziksiniz.|No thanks, that's kind of you.
C'est un peu cher pour moi.|Benim için biraz pahalı.|It's a bit expensive for me.|Start of a negotiation.
Vous pouvez me faire une réduction ?|İndirim yapabilir misiniz?|Can you give me a discount?
Et si on partageait les frais ?|Masrafları paylaşsak?|What if we shared the costs?|Et si + imparfait.
D'accord, mais alors on part plus tôt.|Tamam ama o zaman erken çıkalım.|OK, but then we leave earlier.|Compromise: accept + a condition.
On peut trouver une solution ?|Bir çözüm bulabilir miyiz?|Can we find a solution?
Excusez-moi, j'ai un problème avec ce téléphone.|Affedersiniz, bu telefonla ilgili bir sorunum var.|Excuse me, I have a problem with this phone.|Polite complaint: start calmly.
Je l'ai acheté ici samedi et il ne marche pas.|Onu cumartesi buradan aldım ve çalışmıyor.|I bought it here on Saturday and it doesn't work.
Je voudrais l'échanger ou être remboursée.|Değiştirmek ya da paramı geri almak istiyorum.|I'd like to exchange it or get a refund.|Man: remboursé.
Ce n'est pas normal, j'ai attendu une heure !|Bu normal değil, bir saat bekledim!|This isn't right, I waited an hour!
Je voudrais parler au responsable, s'il vous plaît.|Sorumluyla konuşmak istiyorum, lütfen.|I'd like to speak to the manager, please.
`)
  );
})();
