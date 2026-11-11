/* More real-life dialogues (A1): everyday services, played line by line with French audio.
   Lines: "A|français|Türkçe|English" or "B|…". In role-play, the learner says the "me" side. */
(function () {
  const L = s => s.trim().split("\n").map(l => { const [who, fr, tr, en] = l.split("|").map(x => x.trim()); return { who, fr, tr, en }; });
  const D = (id, level, fr, tr, en, roles, me, lines) => ({ id, level, t: { fr, tr, en }, roles, me, lines: L(lines) });

  window.DIALOGUES = window.DIALOGUES || [];
  window.DIALOGUES.push(
    D("d9-pressing", "A1", "Au pressing : un costume et une robe", "Kuru temizlemecide: bir takım elbise ve bir elbise", "At the dry cleaner's: a suit and a dress", { A: "Employée", B: "Esin" }, "B", `
A|Bonjour madame ! Je peux vous aider ?|Merhaba hanımefendi! Yardımcı olabilir miyim?|Hello, madam! Can I help you?
B|Bonjour ! Je voudrais faire nettoyer un costume. C'est le costume de mon mari.|Merhaba! Bir takım elbiseyi temizletmek istiyorum. Eşimin takım elbisesi.|Hello! I'd like to have a suit cleaned. It's my husband's suit.
A|Très bien. La veste et le pantalon ?|Çok iyi. Ceket ve pantolon mu?|Very good. The jacket and the trousers?
B|Oui, les deux. Et il y a une petite tache ici, sur la manche. C'est du café.|Evet, ikisi de. Bir de burada, kolda küçük bir leke var. Kahve lekesi.|Yes, both. And there's a small stain here, on the sleeve. It's coffee.
A|Pas de problème, le café, ça part bien. Vous avez autre chose ?|Sorun değil, kahve lekesi kolay çıkar. Başka bir şeyiniz var mı?|No problem, coffee comes out easily. Do you have anything else?
B|Oui, cette robe. Elle est fragile, elle est en soie.|Evet, bu elbise. Hassas, ipekten.|Yes, this dress. It's delicate, it's silk.
A|D'accord, on fait très attention avec la soie. Alors, un costume et une robe : ça fait vingt-huit euros.|Tamam, ipeğe çok dikkat ederiz. O zaman bir takım elbise ve bir elbise: yirmi sekiz avro ediyor.|OK, we're very careful with silk. So, one suit and one dress: that's twenty-eight euros.
B|C'est prêt quand ?|Ne zaman hazır olur?|When will it be ready?
A|Jeudi, après quinze heures. Vous payez maintenant ou jeudi, comme vous voulez.|Perşembe, saat on beşten sonra. Şimdi ya da perşembe ödeyebilirsiniz, nasıl isterseniz.|Thursday, after 3 p.m. You can pay now or on Thursday, as you like.
B|Je paie jeudi, merci. Mon mari va à un mariage samedi, alors c'est parfait !|Perşembe öderim, teşekkürler. Eşim cumartesi bir düğüne gidiyor, tam zamanında!|I'll pay on Thursday, thanks. My husband is going to a wedding on Saturday, so that's perfect!
A|Votre nom, s'il vous plaît ?|Adınız lütfen?|Your name, please?
B|Yılmaz. Y-I-L-M-A-Z.|Yılmaz. Y-I-L-M-A-Z.|Yılmaz. Y-I-L-M-A-Z.
A|Voilà votre ticket. Gardez-le bien, il faut le ticket jeudi.|Buyurun fişiniz. İyi saklayın, perşembe günü fiş gerekli.|Here's your ticket. Keep it safe, you need the ticket on Thursday.
B|D'accord, je le mets dans mon portefeuille. Merci, bonne journée !|Tamam, cüzdanıma koyuyorum. Teşekkürler, iyi günler!|OK, I'm putting it in my wallet. Thanks, have a nice day!
A|Bonne journée, madame, à jeudi !|İyi günler hanımefendi, perşembe görüşürüz!|Have a nice day, madam, see you Thursday!`),

    D("d9-boucherie", "A1", "À la boucherie : un poulet pour le dimanche", "Kasapta: pazar için bir tavuk", "At the butcher's: a chicken for Sunday", { A: "Boucher", B: "Nadia" }, "B", `
A|Bonjour madame ! Qu'est-ce que je vous sers ?|Merhaba hanımefendi! Size ne vereyim?|Hello, madam! What can I get you?
B|Bonjour monsieur. Je voudrais un poulet, s'il vous plaît. Pour six personnes.|Merhaba beyefendi. Bir tavuk istiyorum lütfen. Altı kişilik.|Hello, sir. I'd like a chicken, please. For six people.
A|Pour six, il faut un gros poulet. Celui-là fait deux kilos. Ça va ?|Altı kişi için büyük bir tavuk lazım. Şu iki kilo geliyor. Olur mu?|For six, you need a big chicken. That one is two kilos. Is that OK?
B|Oui, parfait. C'est pour dimanche midi, avec mes parents et ma sœur.|Evet, mükemmel. Pazar öğlesi için, annemle babam ve kız kardeşimle.|Yes, perfect. It's for Sunday lunch, with my parents and my sister.
A|Très bien. Vous voulez autre chose ?|Çok iyi. Başka bir şey ister misiniz?|Very good. Would you like anything else?
B|Oui, du bœuf haché. Quatre cents grammes, s'il vous plaît.|Evet, kıyma. Dört yüz gram lütfen.|Yes, minced beef. Four hundred grams, please.
A|Quatre cents grammes… Voilà, quatre cent vingt. Un peu plus, ça va ?|Dört yüz gram… Buyurun, dört yüz yirmi. Biraz fazla, olur mu?|Four hundred grams… There you go, four hundred and twenty. A bit more, is that OK?
B|Oui, pas de problème. C'est pour faire des boulettes avec mes enfants.|Evet, sorun değil. Çocuklarımla köfte yapmak için.|Yes, no problem. It's for making meatballs with my kids.
A|Ah, très bonne idée ! Les enfants adorent ça. Et avec ceci ?|Ah, çok güzel fikir! Çocuklar buna bayılır. Başka?|Ah, very good idea! Kids love that. Anything else?
B|C'est tout, merci. Ça fait combien ?|Bu kadar, teşekkürler. Ne kadar tutuyor?|That's all, thanks. How much is it?
A|Alors, le poulet, dix-huit euros, et le bœuf, six euros cinquante. Ça fait vingt-quatre euros cinquante.|Şöyle: tavuk on sekiz avro, kıyma altı elli. Toplam yirmi dört avro elli.|So, the chicken, eighteen euros, and the beef, six fifty. That's twenty-four fifty.
B|Je peux payer par carte ?|Kartla ödeyebilir miyim?|Can I pay by card?
A|Bien sûr. Vous pouvez mettre votre carte… Voilà, c'est bon. Le ticket ?|Tabii. Kartınızı takabilirsiniz… Tamam, oldu. Fiş ister misiniz?|Of course. You can insert your card… There, it's done. Do you want the receipt?
B|Non merci. Bonne journée, monsieur !|Hayır, teşekkürler. İyi günler beyefendi!|No, thanks. Have a nice day, sir!
A|Merci, madame. Bon dimanche en famille !|Teşekkürler hanımefendi. Ailenizle iyi pazarlar!|Thank you, madam. Enjoy your Sunday with the family!`),

    D("d9-double-cle", "A1", "Faire un double de clé", "Yedek anahtar yaptırmak", "Getting a spare key cut", { A: "Serrurier", B: "Esin" }, "B", `
B|Bonjour monsieur. Vous faites des doubles de clés ?|Merhaba beyefendi. Yedek anahtar yapıyor musunuz?|Hello, sir. Do you cut spare keys?
A|Bonjour ! Oui, bien sûr. Vous avez la clé avec vous ?|Merhaba! Evet, tabii. Anahtar yanınızda mı?|Hello! Yes, of course. Do you have the key with you?
B|Oui, voilà. C'est la clé de mon appartement. Je voudrais deux doubles, s'il vous plaît.|Evet, buyurun. Dairemin anahtarı. İki yedek istiyorum lütfen.|Yes, here it is. It's the key to my flat. I'd like two copies, please.
A|Deux doubles… Un pour vous et un pour votre mari ?|İki yedek… Biri size, biri eşinize mi?|Two copies… One for you and one for your husband?
B|Non, mon mari a déjà une clé. Un pour ma voisine, en cas de problème, et un pour moi, dans mon sac de sport.|Hayır, eşimin zaten bir anahtarı var. Biri komşuma, bir sorun olursa diye, biri de bana, spor çantamda dursun.|No, my husband already has a key. One for my neighbour, in case of a problem, and one for me, in my gym bag.
A|C'est une bonne idée. Bon, c'est une clé simple, ça va aller vite.|İyi fikir. Peki, bu basit bir anahtar, çabuk olur.|That's a good idea. Right, it's a simple key, it'll be quick.
B|Ça coûte combien ?|Ne kadar tutuyor?|How much does it cost?
A|Cinq euros la clé. Donc dix euros pour les deux.|Anahtarı beş avro. Yani ikisi on avro.|Five euros per key. So ten euros for both.
B|D'accord. Je dois revenir plus tard ?|Tamam. Daha sonra tekrar mı gelmeliyim?|OK. Do I have to come back later?
A|Non, non. Cinq minutes, et c'est fini. Vous pouvez attendre ici.|Yok, yok. Beş dakika, bitiyor. Burada bekleyebilirsiniz.|No, no. Five minutes, and it's done. You can wait here.
B|Super, merci.|Süper, teşekkürler.|Great, thanks.
A|Voilà vos deux clés, et votre clé originale. Essayez-les à la maison, s'il vous plaît. Si ça ne marche pas, revenez, je les refais.|Buyurun iki anahtarınız ve orijinal anahtarınız. Lütfen evde deneyin. Olmazsa tekrar gelin, yeniden yaparım.|Here are your two keys, and your original key. Please try them at home. If they don't work, come back and I'll redo them.
B|C'est gentil. Je paie par carte ou en espèces ?|Çok naziksiniz. Kartla mı ödeyeyim, nakit mi?|That's kind. Do I pay by card or in cash?
A|Comme vous voulez. Les deux, c'est possible.|Nasıl isterseniz. İkisi de olur.|As you like. Both are possible.
B|En espèces, alors. Voilà dix euros. Merci beaucoup, au revoir !|Nakit o zaman. Buyurun on avro. Çok teşekkürler, hoşça kalın!|In cash, then. Here's ten euros. Thank you very much, goodbye!`),

    D("d9-retouche", "A1", "Chez la couturière : raccourcir un pantalon", "Terzide: pantolon kısaltmak", "At the seamstress's: shortening trousers", { A: "Couturière", B: "Thomas" }, "B", `
A|Bonjour monsieur, je vous écoute.|Merhaba beyefendi, sizi dinliyorum.|Hello, sir, how can I help?
B|Bonjour madame. J'ai un nouveau pantalon, mais il est trop long. Vous pouvez le raccourcir ?|Merhaba hanımefendi. Yeni bir pantolonum var ama çok uzun. Kısaltabilir misiniz?|Hello, madam. I have new trousers, but they're too long. Can you shorten them?
A|Oui, bien sûr. Vous pouvez l'essayer ? La cabine est là, à droite.|Evet, tabii. Deneyebilir misiniz? Kabin şurada, sağda.|Yes, of course. Can you try them on? The changing room is there, on the right.
B|D'accord, une minute.|Tamam, bir dakika.|OK, one minute.
A|Alors… Oui, c'est trop long, de trois centimètres environ. Vous portez des chaussures de ville avec ce pantalon ?|Şimdi… Evet, yaklaşık üç santim uzun. Bu pantolonla klasik ayakkabı mı giyiyorsunuz?|So… Yes, it's too long, by about three centimetres. Do you wear smart shoes with these trousers?
B|Oui, c'est pour le travail. Je commence un nouveau travail lundi.|Evet, iş için. Pazartesi yeni bir işe başlıyorum.|Yes, it's for work. I'm starting a new job on Monday.
A|Félicitations ! Je mets des épingles… Ne bougez pas, s'il vous plaît.|Tebrikler! İğne takıyorum… Lütfen kıpırdamayın.|Congratulations! I'm putting in some pins… Please don't move.
B|Je ne bouge pas, promis !|Kıpırdamıyorum, söz!|I'm not moving, I promise!
A|Voilà, c'est bon. Regardez dans le miroir. Ça vous va comme ça ?|Tamam, oldu. Aynaya bakın. Böyle iyi mi?|There, that's it. Look in the mirror. Is it OK like this?
B|Oui, c'est très bien. C'est prêt quand ?|Evet, çok iyi. Ne zaman hazır olur?|Yes, it's very good. When will it be ready?
A|Samedi matin. C'est possible pour vous ?|Cumartesi sabahı. Size uyar mı?|Saturday morning. Does that work for you?
B|Oui, samedi, c'est parfait. Ça coûte combien ?|Evet, cumartesi mükemmel. Ne kadar tutuyor?|Yes, Saturday is perfect. How much does it cost?
A|Douze euros. Vous payez samedi.|On iki avro. Cumartesi ödersiniz.|Twelve euros. You pay on Saturday.
B|Très bien. Merci madame, à samedi !|Çok iyi. Teşekkürler hanımefendi, cumartesi görüşürüz!|Very good. Thank you, madam, see you Saturday!
A|À samedi, et bon courage pour lundi !|Cumartesi görüşürüz, pazartesi için de bol şans!|See you Saturday, and good luck for Monday!`),

    D("d9-photo-identite", "A1", "Chez le photographe : des photos d'identité", "Fotoğrafçıda: vesikalık fotoğraf", "At the photographer's: ID photos", { A: "Photographe", B: "Esin" }, "B", `
B|Bonjour ! Je voudrais des photos d'identité, s'il vous plaît.|Merhaba! Vesikalık fotoğraf istiyorum lütfen.|Hello! I'd like some ID photos, please.
A|Bonjour madame. C'est pour quel document ?|Merhaba hanımefendi. Hangi belge için?|Hello, madam. Which document is it for?
B|C'est pour un dossier à l'université. Il faut deux photos.|Üniversitede bir dosya için. İki fotoğraf gerekiyor.|It's for a file at the university. Two photos are needed.
A|Pas de problème. Il y a six photos sur la planche. Ça fait douze euros.|Sorun değil. Bir tabakada altı fotoğraf var. On iki avro ediyor.|No problem. There are six photos on the sheet. That's twelve euros.
B|D'accord. Je m'assois ici ?|Tamam. Buraya mı oturuyorum?|OK. Do I sit here?
A|Oui, sur le tabouret. Mettez vos cheveux derrière les oreilles, s'il vous plaît.|Evet, tabureye. Lütfen saçlarınızı kulaklarınızın arkasına alın.|Yes, on the stool. Please put your hair behind your ears.
B|Comme ça ?|Böyle mi?|Like this?
A|Oui, très bien. Regardez l'appareil. Et… on ne sourit pas, madame !|Evet, çok iyi. Makineye bakın. Ve… gülümsemiyoruz hanımefendi!|Yes, very good. Look at the camera. And… no smiling, madam!
B|Oh pardon ! En Turquie aussi, c'est comme ça, mais c'est difficile pour moi !|Ah, pardon! Türkiye'de de öyle ama benim için zor!|Oh sorry! It's the same in Turkey, but it's hard for me!
A|Je comprends. Pensez à quelque chose de très sérieux… les impôts, par exemple.|Anlıyorum. Çok ciddi bir şey düşünün… vergiler mesela.|I understand. Think of something very serious… taxes, for example.
B|Ah, oui, ça marche !|Ah, evet, bu işe yarıyor!|Ah, yes, that works!
A|Parfait, c'est fini. Regardez l'écran. Ça vous plaît ?|Mükemmel, bitti. Ekrana bakın. Beğendiniz mi?|Perfect, it's done. Look at the screen. Do you like it?
B|Oui, ça va. J'ai l'air un peu triste, mais c'est normal !|Evet, idare eder. Biraz üzgün görünüyorum ama normal!|Yes, it's fine. I look a bit sad, but that's normal!
A|C'est toujours comme ça sur les photos d'identité ! Vos photos sont prêtes dans deux minutes.|Vesikalık fotoğraflarda hep böyledir! Fotoğraflarınız iki dakikada hazır.|It's always like that in ID photos! Your photos will be ready in two minutes.
B|Merci beaucoup. Je paie par carte, s'il vous plaît.|Çok teşekkürler. Kartla ödüyorum lütfen.|Thank you very much. I'll pay by card, please.`),

    D("d9-point-relais", "A1", "Au point relais : retirer un colis", "Teslimat noktasında: kargo almak", "At the parcel pick-up point: collecting a parcel", { A: "Commerçante", B: "Hugo" }, "B", `
B|Bonjour madame. Je viens chercher un colis.|Merhaba hanımefendi. Bir kargo almaya geldim.|Hello, madam. I've come to pick up a parcel.
A|Bonjour ! Vous avez le code ou le numéro du colis ?|Merhaba! Kodunuz ya da kargo numaranız var mı?|Hello! Do you have the code or the parcel number?
B|Oui, j'ai un code sur mon téléphone. Attendez… Voilà.|Evet, telefonumda bir kod var. Bekleyin… Buyurun.|Yes, I have a code on my phone. Wait… Here it is.
A|Merci. Et une pièce d'identité, s'il vous plaît.|Teşekkürler. Bir de kimlik lütfen.|Thanks. And some ID, please.
B|Ma carte d'étudiant, ça va ?|Öğrenci kartım olur mu?|Is my student card OK?
A|Non, désolée, il faut une carte d'identité, un passeport ou un permis de conduire.|Hayır, üzgünüm, kimlik kartı, pasaport ya da ehliyet gerekiyor.|No, sorry, you need an ID card, a passport or a driving licence.
B|Ah… Attendez, j'ai mon permis dans mon portefeuille. Le voilà !|Ah… Bekleyin, cüzdanımda ehliyetim var. İşte!|Ah… Wait, I have my licence in my wallet. Here it is!
A|Parfait. Hugo Lambert… Je cherche votre colis, une seconde.|Mükemmel. Hugo Lambert… Kargonuzu arıyorum, bir saniye.|Perfect. Hugo Lambert… I'm looking for your parcel, one second.
B|Il est assez grand, je pense. C'est une chaise de bureau.|Bence oldukça büyük. Bir çalışma sandalyesi.|It's quite big, I think. It's an office chair.
A|Ah oui, je le vois ! Il est très grand… et lourd. Vous êtes à pied ?|Ah evet, görüyorum! Çok büyük… ve ağır. Yaya mısınız?|Ah yes, I can see it! It's very big… and heavy. Are you on foot?
B|Oui, mais j'habite à côté, dans la rue derrière.|Evet ama hemen yakında, arka sokakta oturuyorum.|Yes, but I live nearby, in the street behind.
A|Bon courage ! Vous signez ici, s'il vous plaît.|Kolay gelsin! Lütfen buraya imza atın.|Good luck! Please sign here.
B|Voilà. Merci beaucoup, madame.|Buyurun. Çok teşekkürler hanımefendi.|There you go. Thank you very much, madam.
A|De rien. Et faites attention à votre dos !|Rica ederim. Belinize de dikkat edin!|You're welcome. And be careful with your back!
B|Promis ! Bonne journée !|Söz! İyi günler!|I promise! Have a nice day!`)
  );
})();
