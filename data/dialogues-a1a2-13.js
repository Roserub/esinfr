/* More real-life dialogues (A1): meeting people and home life. Played line by line with French audio.
   Lines: "A|français|Türkçe|English" or "B|…". In role-play, the learner says the "me" side. */
(function () {
  const L = s => s.trim().split("\n").map(l => { const [who, fr, tr, en] = l.split("|").map(x => x.trim()); return { who, fr, tr, en }; });
  const D = (id, level, fr, tr, en, roles, me, lines) => ({ id, level, t: { fr, tr, en }, roles, me, lines: L(lines) });

  window.DIALOGUES = window.DIALOGUES || [];
  window.DIALOGUES.push(
    D("d13-plantes", "A1", "Demander à une voisine d'arroser les plantes", "Komşudan çiçekleri sulamasını istemek", "Asking a neighbour to water the plants", { A: "Madame Garnier", B: "Esin" }, "B", `
B|Bonjour madame Garnier ! Excusez-moi, vous avez une minute ?|Merhaba Garnier Hanım! Affedersiniz, bir dakikanız var mı?|Hello, Mrs Garnier! Excuse me, do you have a minute?
A|Bonjour Esin ! Oui, bien sûr. Qu'est-ce qu'il y a ?|Merhaba Esin! Evet, tabii. Ne oldu?|Hello, Esin! Yes, of course. What is it?
B|Mon mari et moi, nous partons une semaine en vacances, du samedi au samedi.|Eşimle ben bir haftalığına tatile gidiyoruz, cumartesiden cumartesiye.|My husband and I are going on holiday for a week, from Saturday to Saturday.
A|Ah, super ! Vous allez où ?|Ah, harika! Nereye gidiyorsunuz?|Oh, great! Where are you going?
B|À la mer, en Bretagne. Mais j'ai un petit problème : mes plantes !|Denize, Bretanya'ya. Ama küçük bir sorunum var: çiçeklerim!|To the seaside, in Brittany. But I have a little problem: my plants!
A|Ah, je comprends. Vous voulez de l'aide ?|Ah, anlıyorum. Yardım ister misiniz?|Ah, I understand. Would you like some help?
B|Oui. Est-ce que vous pouvez arroser mes plantes, s'il vous plaît ? Seulement deux fois.|Evet. Çiçeklerimi sulayabilir misiniz, lütfen? Sadece iki kez.|Yes. Could you water my plants, please? Only twice.
A|Avec plaisir ! Il y a beaucoup de plantes ?|Memnuniyetle! Çok çiçek var mı?|With pleasure! Are there a lot of plants?
B|Il y a cinq plantes dans le salon et trois pieds de tomates sur le balcon.|Salonda beş saksı çiçek, balkonda da üç domates fidesi var.|There are five plants in the living room and three tomato plants on the balcony.
A|Des tomates ! Elles ont besoin de beaucoup d'eau ?|Domates mi! Çok su istiyorlar mı?|Tomatoes! Do they need a lot of water?
B|Oui, un litre chacune, le mardi et le vendredi. Pour le cactus, rien du tout !|Evet, her birine bir litre, salı ve cuma günleri. Kaktüse ise hiç su vermeyin!|Yes, one litre each, on Tuesday and Friday. For the cactus, nothing at all!
A|Le cactus, c'est facile, alors ! Et pour les clés ?|Kaktüs kolaymış o zaman! Peki anahtarlar?|The cactus is easy, then! And what about the keys?
B|Je vous donne un double vendredi soir, d'accord ?|Cuma akşamı size yedek anahtar veriyorum, olur mu?|I'll give you a spare key on Friday evening, OK?
A|Parfait. Et si vous voulez, mangez les tomates ! Je ne dirai rien !|Harika. İsterseniz domatesleri yiyin! Kimseye söylemem!|Perfect. And if you like, eat the tomatoes! I won't tell anyone!
B|Ha ha, avec plaisir ! Merci beaucoup, madame Garnier. Je vous rapporte un petit cadeau de Bretagne.|Ha ha, memnuniyetle! Çok teşekkürler Garnier Hanım. Size Bretanya'dan küçük bir hediye getiririm.|Ha ha, with pleasure! Thank you so much, Mrs Garnier. I'll bring you back a little present from Brittany.
A|Des gâteaux bretons, alors ! Bonnes vacances, Esin !|O zaman Breton kurabiyeleri! İyi tatiller Esin!|Breton biscuits, then! Have a good holiday, Esin!`),

    D("d13-cafe-langues", "A1", "Première soirée au café-langues", "Dil kafesinde ilk akşam", "First evening at a language café", { A: "Julien", B: "Esin" }, "B", `
A|Bonsoir ! C'est ta première fois au café-langues ?|İyi akşamlar! Dil kafesine ilk gelişin mi?|Good evening! Is it your first time at the language café?
B|Bonsoir ! Oui, c'est ma première fois. Je suis un peu stressée.|İyi akşamlar! Evet, ilk kez geliyorum. Biraz gerginim.|Good evening! Yes, it's my first time. I'm a bit nervous.
A|Pas de stress, ici tout le monde fait des fautes ! Moi, c'est Julien. Et toi ?|Stres yok, burada herkes hata yapıyor! Ben Julien. Ya sen?|No stress, everyone makes mistakes here! I'm Julien. And you?
B|Je m'appelle Esin. Je suis turque, d'Istanbul.|Adım Esin. Türküm, İstanbul'danım.|My name is Esin. I'm Turkish, from Istanbul.
A|Enchanté, Esin ! Tu es en France depuis combien de temps ?|Memnun oldum Esin! Ne zamandır Fransa'dasın?|Nice to meet you, Esin! How long have you been in France?
B|Depuis un an. J'habite ici avec mon mari.|Bir yıldır. Burada eşimle yaşıyorum.|For a year. I live here with my husband.
A|Ton français est déjà très bien ! Tu travailles ?|Fransızcan şimdiden çok iyi! Çalışıyor musun?|Your French is already very good! Do you work?
B|Merci ! Oui, je travaille à l'accueil d'une salle de sport. Et toi ?|Teşekkürler! Evet, bir spor salonunun resepsiyonunda çalışıyorum. Ya sen?|Thanks! Yes, I work at the front desk of a gym. And you?
A|Je suis professeur de musique. Et j'apprends le turc ! Je connais déjà un mot : « çay », le thé !|Müzik öğretmeniyim. Ve Türkçe öğreniyorum! Bir kelime biliyorum bile: « çay »!|I'm a music teacher. And I'm learning Turkish! I already know one word: « çay », tea!
B|Bravo ! Ton accent est très bon. Pourquoi tu apprends le turc ?|Bravo! Aksanın çok iyi. Neden Türkçe öğreniyorsun?|Well done! Your accent is very good. Why are you learning Turkish?
A|Parce que je vais à Istanbul en mai. Tu peux me donner des conseils ?|Çünkü mayısta İstanbul'a gidiyorum. Bana tavsiye verebilir misin?|Because I'm going to Istanbul in May. Can you give me some tips?
B|Oui, bien sûr ! Alors, on fait comme ça : quinze minutes en français, quinze minutes en turc ?|Evet, tabii! O zaman şöyle yapalım: on beş dakika Fransızca, on beş dakika Türkçe?|Yes, of course! So, let's do it like this: fifteen minutes in French, fifteen minutes in Turkish?
A|Super idée ! Tu veux boire quelque chose d'abord ?|Süper fikir! Önce bir şey içmek ister misin?|Great idea! Do you want something to drink first?
B|Oui, un thé, s'il te plaît. Mais attention : en Turquie, on boit beaucoup de thé !|Evet, bir çay lütfen. Ama dikkat: Türkiye'de çok çay içeriz!|Yes, a tea, please. But be careful: in Turkey, we drink a lot of tea!
A|Alors, je commande tout de suite deux thés. Çay, c'est ça ?|O zaman hemen iki çay sipariş ediyorum. Çay, değil mi?|Then I'll order two teas right away. Çay, is that right?
B|Parfait, Julien ! Tu es un très bon élève.|Mükemmel Julien! Çok iyi bir öğrencisin.|Perfect, Julien! You're a very good student.`),

    D("d13-chemin-mediatheque", "A1", "Demander le chemin de la médiathèque", "Kütüphanenin yolunu sormak", "Asking the way to the media library", { A: "Esin", B: "Un passant" }, "A", `
A|Excusez-moi, monsieur. Je cherche la médiathèque, s'il vous plaît.|Affedersiniz beyefendi. Kütüphaneyi arıyorum, lütfen.|Excuse me, sir. I'm looking for the media library, please.
B|La médiathèque ? Elle est près de la mairie. Ce n'est pas loin.|Kütüphane mi? Belediyenin yanında. Uzak değil.|The media library? It's near the town hall. It's not far.
A|Il faut combien de temps à pied ?|Yürüyerek ne kadar sürer?|How long does it take on foot?
B|Dix minutes, à peu près. Vous allez tout droit dans cette rue.|Aşağı yukarı on dakika. Bu caddeden dümdüz gidiyorsunuz.|About ten minutes. You go straight down this street.
A|Tout droit… d'accord.|Dümdüz… tamam.|Straight on… OK.
B|Au feu, vous tournez à gauche. Ensuite, vous passez devant une boulangerie.|Işıklardan sola dönüyorsunuz. Sonra bir fırının önünden geçiyorsunuz.|At the traffic lights, you turn left. Then you go past a bakery.
A|Pardon, vous pouvez répéter plus lentement, s'il vous plaît ?|Pardon, daha yavaş tekrar edebilir misiniz, lütfen?|Sorry, can you repeat more slowly, please?
B|Bien sûr. Tout droit. Au feu, à gauche. Après la boulangerie, la deuxième rue à droite.|Tabii. Dümdüz. Işıklarda sola. Fırından sonra ikinci sokaktan sağa.|Of course. Straight on. At the lights, left. After the bakery, the second street on the right.
A|La deuxième rue à droite. Et après ?|İkinci sokaktan sağa. Sonra?|The second street on the right. And then?
B|Après, vous voyez une grande place avec une fontaine. La médiathèque est en face de la fontaine.|Sonra çeşmeli büyük bir meydan görüyorsunuz. Kütüphane çeşmenin karşısında.|Then you see a big square with a fountain. The media library is opposite the fountain.
A|Super, merci ! Vous savez si elle est ouverte le samedi ?|Süper, teşekkürler! Cumartesi açık mı, biliyor musunuz?|Great, thanks! Do you know if it's open on Saturdays?
B|Oui, le samedi, elle ouvre à dix heures. Mon fils y va tous les samedis pour les bandes dessinées.|Evet, cumartesi saat onda açılıyor. Oğlum her cumartesi çizgi romanlar için oraya gidiyor.|Yes, on Saturdays it opens at ten. My son goes there every Saturday for the comics.
A|Moi, je cherche des livres faciles en français. Pour apprendre !|Ben Fransızca kolay kitaplar arıyorum. Öğrenmek için!|I'm looking for easy books in French. To learn!
B|Bonne idée ! Les bandes dessinées, c'est très bien aussi pour apprendre.|İyi fikir! Çizgi romanlar da öğrenmek için çok iyi.|Good idea! Comics are very good for learning too.
A|Ah oui ? Alors je regarde aussi les BD. Merci beaucoup, monsieur !|Öyle mi? O zaman çizgi romanlara da bakarım. Çok teşekkürler beyefendi!|Really? Then I'll look at the comics too. Thank you very much, sir!
B|Je vous en prie. Bonne lecture !|Rica ederim. Keyifli okumalar!|You're welcome. Enjoy your reading!`),

    D("d13-colocation", "A1", "Premier jour en colocation", "Ev arkadaşıyla ilk gün", "First day in a flatshare", { A: "Chloé", B: "Lucas" }, "B", `
A|Salut Lucas ! Bienvenue dans l'appartement ! Ça va, le déménagement ?|Selam Lucas! Daireye hoş geldin! Taşınma nasıl gidiyor?|Hi, Lucas! Welcome to the flat! How's the move going?
B|Salut Chloé ! Ça va, merci. J'ai seulement trois cartons et mon vélo.|Selam Chloé! İyi, teşekkürler. Sadece üç kolim ve bisikletim var.|Hi, Chloé! Fine, thanks. I only have three boxes and my bike.
A|Super. Je te fais la visite ? Ici, c'est la cuisine.|Süper. Sana evi gezdireyim mi? Burası mutfak.|Great. Shall I show you around? This is the kitchen.
B|Elle est grande ! Et le frigo, comment on fait ?|Büyükmüş! Peki buzdolabını nasıl kullanıyoruz?|It's big! And the fridge, how do we do it?
A|En haut, c'est à moi. En bas, c'est à toi. Et le lait, on partage.|Üst raflar benim. Alt raflar senin. Sütü de paylaşıyoruz.|The top is mine. The bottom is yours. And the milk, we share.
B|D'accord. Et pour la salle de bains ? On a une seule salle de bains, non ?|Tamam. Peki banyo? Tek bir banyomuz var, değil mi?|OK. And the bathroom? We only have one bathroom, right?
A|Oui. Le matin, je prends ma douche à sept heures. Toi, tu te lèves à quelle heure ?|Evet. Sabahları saat yedide duş alıyorum. Sen kaçta kalkıyorsun?|Yes. In the morning, I have my shower at seven. What time do you get up?
B|Moi, à huit heures. Pas de problème, alors !|Ben saat sekizde. O zaman sorun yok!|Me, at eight. No problem, then!
A|Parfait. Pour le ménage, on fait un planning ? Une semaine toi, une semaine moi.|Mükemmel. Temizlik için bir plan yapalım mı? Bir hafta sen, bir hafta ben.|Perfect. For the cleaning, shall we make a schedule? One week you, one week me.
B|Oui, c'est juste. Et les poubelles ?|Evet, bu adil. Peki çöpler?|Yes, that's fair. And the bins?
A|La poubelle jaune, c'est pour le recyclage. On la sort le mercredi soir.|Sarı çöp kutusu geri dönüşüm için. Çarşamba akşamları dışarı çıkarıyoruz.|The yellow bin is for recycling. We put it out on Wednesday evening.
B|Noté. Est-ce que je peux inviter des amis, parfois ?|Not aldım. Bazen arkadaşlarımı davet edebilir miyim?|Got it. Can I invite friends sometimes?
A|Bien sûr ! Mais pas de fête le lundi soir. Le mardi, je commence à huit heures.|Tabii ki! Ama pazartesi akşamı parti yok. Salı günü saat sekizde işe başlıyorum.|Of course! But no party on Monday evening. On Tuesday, I start at eight.
B|Promis. Et le vendredi soir ? Je fais des crêpes pour fêter mon arrivée !|Söz. Peki cuma akşamı? Gelişimi kutlamak için krep yapıyorum!|I promise. And Friday evening? I'm making crêpes to celebrate my arrival!
A|Des crêpes ? Lucas, tu es le colocataire parfait !|Krep mi? Lucas, sen mükemmel bir ev arkadaşısın!|Crêpes? Lucas, you're the perfect flatmate!`),

    D("d13-tri-voisin", "A1", "Expliquer le tri des déchets à un nouveau voisin", "Yeni bir komşuya çöp ayrıştırmayı anlatmak", "Explaining waste sorting to a new neighbour", { A: "Monsieur Diallo", B: "Madame Roux" }, "B", `
A|Bonjour madame. Excusez-moi, je suis nouveau dans l'immeuble. Je m'appelle Ibrahim Diallo.|Merhaba hanımefendi. Affedersiniz, apartmanda yeniyim. Adım Ibrahim Diallo.|Hello, madam. Excuse me, I'm new in the building. My name is Ibrahim Diallo.
B|Bonjour monsieur Diallo ! Bienvenue ! Moi, c'est Hélène Roux, j'habite au deuxième étage.|Merhaba Diallo Bey! Hoş geldiniz! Ben Hélène Roux, ikinci katta oturuyorum.|Hello, Mr Diallo! Welcome! I'm Hélène Roux, I live on the second floor.
A|Enchanté. Moi, j'habite au troisième. J'ai une question : où sont les poubelles ?|Memnun oldum. Ben üçüncü katta oturuyorum. Bir sorum var: çöp kutuları nerede?|Nice to meet you. I live on the third floor. I have a question: where are the bins?
B|Elles sont dans la cour, derrière la porte verte. Venez, je vous montre.|Avluda, yeşil kapının arkasında. Gelin, size göstereyim.|They're in the courtyard, behind the green door. Come, I'll show you.
A|Merci, c'est gentil. Oh, il y a beaucoup de poubelles !|Teşekkürler, çok naziksiniz. Aa, çok çöp kutusu var!|Thanks, that's kind. Oh, there are a lot of bins!
B|Oui, ici on trie. La poubelle jaune, c'est pour les emballages, le papier et le carton.|Evet, burada ayrıştırıyoruz. Sarı kutu ambalajlar, kâğıt ve karton için.|Yes, here we sort. The yellow bin is for packaging, paper and cardboard.
A|Et les bouteilles en verre ?|Peki cam şişeler?|And glass bottles?
B|Le verre, non. Il y a un conteneur pour le verre au coin de la rue.|Cam olmaz. Sokağın köşesinde cam için bir konteyner var.|Not glass. There's a container for glass at the corner of the street.
A|D'accord. Et la poubelle grise ?|Tamam. Ya gri kutu?|OK. And the grey bin?
B|La grise, c'est pour le reste : les restes de repas, les mouchoirs…|Gri olan geri kalanlar için: yemek artıkları, mendiller…|The grey one is for everything else: leftover food, tissues…
A|Et les cartons de mon déménagement ? J'en ai vingt !|Peki taşınmamdan kalan kolilerim? Yirmi tane var!|And the boxes from my move? I have twenty!
B|Vingt ! Alors, il faut les plier. Ou mieux, allez à la déchetterie.|Yirmi mi! O zaman katlamanız gerekiyor. Ya da daha iyisi, atık toplama merkezine gidin.|Twenty! Then you need to fold them. Or better, go to the recycling centre.
A|D'accord. Et on sort les poubelles quel jour ?|Tamam. Çöpleri hangi gün çıkarıyoruz?|OK. And which day do we put the bins out?
B|Ici, c'est le gardien qui sort les poubelles. Il s'appelle Marcel. Il est très gentil.|Burada çöpleri kapıcı çıkarıyor. Adı Marcel. Çok iyi biridir.|Here, it's the caretaker who puts the bins out. His name is Marcel. He's very nice.
A|Parfait. Merci beaucoup, madame Roux. Vous êtes ma première amie dans l'immeuble !|Mükemmel. Çok teşekkürler Roux Hanım. Apartmandaki ilk arkadaşımsınız!|Perfect. Thank you very much, Mrs Roux. You're my first friend in the building!
B|Avec plaisir ! Et si vous avez besoin d'un tournevis ou de sel, sonnez chez moi.|Memnuniyetle! Tornavidaya ya da tuza ihtiyacınız olursa kapımı çalın.|With pleasure! And if you need a screwdriver or some salt, ring my bell.`),

    D("d13-diner-amis", "A1", "À table chez des amis", "Arkadaşlarda akşam yemeğinde", "Dinner at friends' place", { A: "Claire", B: "Esin" }, "B", `
A|Entrez, entrez ! Bonsoir Esin ! Donne-moi ton manteau.|Girin, girin! İyi akşamlar Esin! Montunu bana ver.|Come in, come in! Good evening, Esin! Give me your coat.
B|Bonsoir Claire ! Merci pour l'invitation. Tiens, c'est pour toi : des baklavas.|İyi akşamlar Claire! Davet için teşekkürler. Al, bu senin için: baklava.|Good evening, Claire! Thanks for the invitation. Here, this is for you: some baklava.
A|Oh, merci ! J'adore les baklavas ! Ton mari n'est pas là ?|Aa, teşekkürler! Baklavaya bayılırım! Eşin yok mu?|Oh, thank you! I love baklava! Isn't your husband here?
B|Non, il est désolé, il est malade. Il a un gros rhume.|Hayır, çok üzgün, hasta. Ağır bir nezle geçiriyor.|No, he's sorry, he's ill. He has a bad cold.
A|Oh, le pauvre ! Bon, à table ! Ce soir, j'ai fait un bœuf bourguignon.|Vah, zavallı! Neyse, sofraya! Bu akşam bœuf bourguignon yaptım.|Oh, poor thing! Right, dinner's ready! Tonight, I've made a beef bourguignon.
B|Mmm, ça sent très bon ! Qu'est-ce que c'est exactement ?|Mmm, çok güzel kokuyor! Tam olarak ne bu?|Mmm, it smells very good! What is it exactly?
A|C'est du bœuf avec du vin rouge, des carottes et des champignons. Ça cuit pendant trois heures.|Kırmızı şarapla, havuç ve mantarla pişmiş sığır eti. Üç saat pişiyor.|It's beef with red wine, carrots and mushrooms. It cooks for three hours.
B|Trois heures ! Bravo. C'est délicieux, vraiment.|Üç saat mi! Bravo. Gerçekten çok lezzetli.|Three hours! Well done. It's really delicious.
A|Merci ! Tu veux encore un peu de pain ? Et de l'eau ou du vin ?|Teşekkürler! Biraz daha ekmek ister misin? Su mu, şarap mı?|Thanks! Would you like a bit more bread? And water or wine?
B|De l'eau, s'il te plaît. Et oui, encore un peu de pain, merci.|Su lütfen. Ve evet, biraz daha ekmek, teşekkürler.|Water, please. And yes, a bit more bread, thanks.
A|Tu reprends un peu de bœuf ?|Biraz daha et alır mısın?|Will you have a bit more beef?
B|Non merci, c'est très bon, mais j'ai bien mangé. Je garde de la place pour le dessert !|Hayır teşekkürler, çok güzel ama doydum. Tatlıya yer bırakıyorum!|No thanks, it's very good, but I've eaten well. I'm saving room for dessert!
A|Bonne idée ! Après, il y a le fromage, et puis le dessert.|İyi fikir! Sonra peynir var, ardından da tatlı.|Good idea! After this, there's cheese, and then dessert.
B|Le fromage avant le dessert ? En Turquie, on ne fait pas comme ça !|Tatlıdan önce peynir mi? Türkiye'de böyle yapmayız!|Cheese before dessert? In Turkey, we don't do it like that!
A|En France, si ! Le dîner, c'est long. Et pour le dessert, on mange tes baklavas !|Fransa'da öyle yaparız! Akşam yemeği uzun sürer. Tatlı olarak da senin baklavalarını yiyoruz!|In France, we do! Dinner takes a long time. And for dessert, we'll eat your baklava!
B|Parfait ! Un dîner franco-turc, alors !|Mükemmel! O zaman Fransız-Türk karışımı bir akşam yemeği!|Perfect! A Franco-Turkish dinner, then!`)
  );
})();
