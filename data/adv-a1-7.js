/* Aventures A1 — 31 to 35: pizza par téléphone, colis au point relais, caisse automatique, chez le coiffeur, inscription à la médiathèque */
(window.ADVENTURES = window.ADVENTURES || []).push(

  /* ───────────── 31. Une pizza par téléphone ───────────── */
  { id: "av-pizza-telephone", level: "A1", emoji: "🍕",
    t: { fr: "Une pizza par téléphone", tr: "Telefonla pizza", en: "A pizza by phone" },
    goal: { fr: "Commandez une pizza par téléphone, puis choisissez la livraison ou la vente à emporter.", tr: "Telefonla bir pizza sipariş edin, sonra eve teslimat ya da gel-al seçin.", en: "Order a pizza by phone, then choose delivery or takeaway." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Il est 19 h 30. Vous avez faim et le frigo est vide. Vous appelez la pizzeria du quartier.", tr: "Saat 19.30. Açsınız ve buzdolabı boş. Mahalledeki pizzacıyı arıyorsunuz.", en: "It's 7:30 pm. You're hungry and the fridge is empty. You call the local pizzeria." },
           say: [["M", "Pizzeria Bella Napoli, bonsoir !"]],
           choices: [
             { fr: "Allô ? Qui est-ce ?", tr: "Alo? Kim o?", en: "Hello? Who is this?", ok: false,
               fb: { fr: "C'est vous qui appelez 😄 ! Il a dit son nom. Dites plutôt « Bonsoir ! Je voudrais commander une pizza ».", tr: "Arayan sizsiniz 😄! O adını söyledi bile. Bunun yerine « Bonsoir ! Je voudrais commander une pizza » deyin.", en: "You're the one calling 😄! He already said the name. Say « Bonsoir ! Je voudrais commander une pizza » instead." } },
             { fr: "Bonsoir ! Je voudrais commander une pizza, s'il vous plaît.", tr: "İyi akşamlar! Bir pizza sipariş etmek istiyorum, lütfen.", en: "Good evening! I'd like to order a pizza, please.", ok: true, go: "b" },
             { fr: "Bonsoir ! Je suis une pizza.", tr: "İyi akşamlar! Ben bir pizzayım.", en: "Good evening! I am a pizza.", ok: false,
               fb: { fr: "Une pizza qui téléphone, c'est original 🍕😄 ! On dit « je voudrais une pizza ».", tr: "Telefon eden bir pizza, ilginç 🍕😄! « Je voudrais une pizza » denir.", en: "A pizza making phone calls, how original 🍕😄! You say « je voudrais une pizza »." } }
           ] },
      b: { say: [["M", "Avec plaisir ! Quelle pizza voulez-vous ?"]],
           choices: [
             { fr: "J'ai très faim !", tr: "Çok açım!", en: "I'm very hungry!", ok: false,
               fb: { fr: "On vous croit 😄 ! Mais il demande le nom de la pizza. Par exemple : « Une margherita, s'il vous plaît ».", tr: "Size inanıyoruz 😄! Ama pizzanın adını soruyor. Örneğin: « Une margherita, s'il vous plaît ».", en: "We believe you 😄! But he's asking which pizza. For example: « Une margherita, s'il vous plaît »." } },
             { fr: "Une margherita avec très beaucoup de fromage.", tr: "Çok çok peynirli bir margherita.", en: "A margherita with very much lots of cheese.", ok: false,
               fb: { fr: "Bonne idée, le fromage 🧀 ! Mais « très beaucoup » n'existe pas. On dit « beaucoup de fromage ».", tr: "Peynir iyi fikir 🧀! Ama « très beaucoup » diye bir şey yok. « Beaucoup de fromage » denir.", en: "Cheese is a great idea 🧀! But « très beaucoup » doesn't exist. You say « beaucoup de fromage »." } },
             { fr: "Une margherita, s'il vous plaît.", tr: "Bir margherita, lütfen.", en: "A margherita, please.", ok: true, go: "c" }
           ] },
      c: { say: [["M", "Une margherita. Petite, moyenne ou grande ?"]],
           choices: [
             { fr: "Une grande, s'il vous plaît.", tr: "Büyük boy, lütfen.", en: "A large one, please.", ok: true, go: "d" },
             { fr: "Un grand, s'il vous plaît.", tr: "Büyük bir tane, lütfen.", en: "A large one, please. (masculine)", ok: false,
               fb: { fr: "Presque ! « Pizza » est féminin en français. On dit « une grande ».", tr: "Az kaldı! Fransızcada « pizza » dişil. « Une grande » denir.", en: "Almost! « Pizza » is feminine in French. You say « une grande »." } },
             { fr: "Une grande, elle a 30 ans.", tr: "Büyük, o 30 yaşında.", en: "A big one, she's 30 years old.", ok: false,
               fb: { fr: "Une pizza de 30 ans ? Pas très fraîche 😄 ! Dites simplement « une grande, s'il vous plaît ».", tr: "30 yaşında bir pizza mı? Pek taze değil 😄! Sadece « une grande, s'il vous plaît » deyin.", en: "A 30-year-old pizza? Not very fresh 😄! Just say « une grande, s'il vous plaît »." } }
           ] },
      d: { say: [["M", "Très bien. Et avec ça ? Une boisson, un dessert ?"]],
           choices: [
             { fr: "Oui, une tiramisu, s'il vous plaît.", tr: "Evet, bir tiramisu, lütfen.", en: "Yes, a tiramisu, please. (feminine)", ok: false,
               fb: { fr: "Miam ! Mais on dit « un tiramisu » : il est masculin 🍰.", tr: "Nefis! Ama « un tiramisu » denir: eril bir kelime 🍰.", en: "Yum! But you say « un tiramisu »: it's masculine 🍰." } },
             { fr: "Oui, une bouteille d'eau, s'il vous plaît.", tr: "Evet, bir şişe su, lütfen.", en: "Yes, a bottle of water, please.", ok: true, go: "e" },
             { fr: "Non merci, c'est tout.", tr: "Hayır teşekkürler, bu kadar.", en: "No thanks, that's all.", ok: true, go: "e" }
           ] },
      e: { say: [["M", "D'accord. C'est en livraison ou à emporter ?"]],
           choices: [
             { fr: "En livraison, s'il vous plaît.", tr: "Eve teslim, lütfen.", en: "Delivery, please.", ok: true, go: "f" },
             { fr: "À emporter. Je viens la chercher.", tr: "Gel-al. Gelip alacağım.", en: "Takeaway. I'll come and get it.", ok: true, go: "f2" },
             { fr: "Je porte la pizza sur ma tête.", tr: "Pizzayı başımda taşıyorum.", en: "I carry the pizza on my head.", ok: false,
               fb: { fr: "Joli numéro de cirque 🎪😄 ! Répondez « en livraison » (il vient chez vous) ou « à emporter » (vous allez la chercher).", tr: "Güzel bir sirk numarası 🎪😄! « En livraison » (size getirir) ya da « à emporter » (siz gidip alırsınız) deyin.", en: "Nice circus act 🎪😄! Answer « en livraison » (he brings it) or « à emporter » (you go and get it)." } }
           ] },
      f: { say: [["M", "Pas de problème. Quelle est votre adresse ?"]],
           choices: [
             { fr: "J'habite dans 12 rue des Lilas.", tr: "Lilas Sokağı'nda 12'de oturuyorum.", en: "I live in 12 rue des Lilas.", ok: false,
               fb: { fr: "Presque ! Avec un numéro, on dit « au » : « j'habite au 12, rue des Lilas ».", tr: "Az kaldı! Numarayla « au » denir: « j'habite au 12, rue des Lilas ».", en: "Almost! With a number, you say « au »: « j'habite au 12, rue des Lilas »." } },
             { fr: "12, rue des Lilas, au troisième étage.", tr: "Lilas Sokağı 12, üçüncü kat.", en: "12 rue des Lilas, third floor.", ok: true, go: "g" }
           ] },
      g: { say: [["M", "C'est noté. Et votre numéro de téléphone, s'il vous plaît ?"]],
           choices: [
             { fr: "Je n'ai pas de téléphone.", tr: "Telefonum yok.", en: "I don't have a phone.", ok: false,
               fb: { fr: "Mais… vous parlez dans un téléphone 📱😄 ! Donnez votre numéro : « c'est le 06… ».", tr: "Ama… şu an bir telefonla konuşuyorsunuz 📱😄! Numaranızı verin: « c'est le 06… ».", en: "But… you're talking on a phone 📱😄! Give your number: « c'est le 06… »." } },
             { fr: "C'est le 06 00 00 00 12.", tr: "06 00 00 00 12.", en: "It's 06 00 00 00 12.", ok: true, go: "h" },
             { fr: "J'ai le 06 00 00 00 12 ans.", tr: "06 00 00 00 12 yaşındayım.", en: "I am 06 00 00 00 12 years old.", ok: false,
               fb: { fr: "Wow, quel âge 😄 ! Pour un numéro, on dit simplement « c'est le 06 00 00 00 12 ».", tr: "Vay, ne yaş 😄! Numara için sadece « c'est le 06 00 00 00 12 » denir.", en: "Wow, what an age 😄! For a number, just say « c'est le 06 00 00 00 12 »." } }
           ] },
      h: { say: [["M", "Merci. Ça fait 14,50 €. Livraison dans 30 minutes. Vous payez comment ?"]],
           choices: [
             { fr: "Par carte, s'il vous plaît.", tr: "Kartla, lütfen.", en: "By card, please.", ok: true, go: "fin" },
             { fr: "En espèces. J'ai un billet de 20 €.", tr: "Nakit. 20 avroluk bir banknotum var.", en: "In cash. I have a 20-euro note.", ok: true, go: "fin" },
             { fr: "Combien de minutes ça coûte ?", tr: "Kaç dakika tutuyor?", en: "How many minutes does it cost?", ok: false,
               fb: { fr: "Un petit mélange 😄 ! Le prix, c'est 14,50 €, et la livraison, 30 minutes. Dites « par carte » ou « en espèces ».", tr: "Biraz karıştı 😄! Fiyat 14,50 €, teslimat 30 dakika. « Par carte » ya da « en espèces » deyin.", en: "A little mix-up 😄! The price is 14.50 €, and delivery takes 30 minutes. Say « par carte » or « en espèces »." } }
           ] },
      f2: { say: [["M", "Très bien. Vous venez à quelle heure ?"]],
           choices: [
             { fr: "Je viens dans 20 heures.", tr: "20 saat sonra geliyorum.", en: "I'm coming in 20 hours.", ok: false,
               fb: { fr: "Dans 20 heures ? La pizza va être froide demain 😄 ! Dites « vers 20 h » (à 8 heures du soir).", tr: "20 saat sonra mı? Pizza yarına soğur 😄! « Vers 20 h » (akşam 8 civarı) deyin.", en: "In 20 hours? The pizza will be cold tomorrow 😄! Say « vers 20 h » (around 8 pm)." } },
             { fr: "Vers 20 h, ça va ?", tr: "Saat 20.00 civarı, olur mu?", en: "Around 8 pm, is that OK?", ok: true, go: "g2" }
           ] },
      g2: { say: [["M", "Oui, parfait. Ça fait 14,50 €, vous payez sur place. À tout à l'heure !"]],
           choices: [
             { fr: "Bonne nuit, monsieur !", tr: "İyi geceler, beyefendi!", en: "Good night, sir!", ok: false,
               fb: { fr: "Il est 19 h 30 et il travaille encore 😴😄 ! On dit « bonne soirée » ou « à tout à l'heure ».", tr: "Saat 19.30 ve adam hâlâ çalışıyor 😴😄! « Bonne soirée » ya da « à tout à l'heure » denir.", en: "It's 7:30 pm and he's still working 😴😄! You say « bonne soirée » or « à tout à l'heure »." } },
             { fr: "Merci ! À tout à l'heure !", tr: "Teşekkürler! Birazdan görüşürüz!", en: "Thank you! See you soon!", ok: true, go: "fin2" },
             { fr: "Merci ! À demain !", tr: "Teşekkürler! Yarın görüşürüz!", en: "Thank you! See you tomorrow!", ok: false,
               fb: { fr: "Demain ? Mais vous avez faim ce soir 😄 ! Vous venez à 20 h : dites « à tout à l'heure ».", tr: "Yarın mı? Ama bu akşam açsınız 😄! Saat 20.00'de geliyorsunuz: « à tout à l'heure » deyin.", en: "Tomorrow? But you're hungry tonight 😄! You're coming at 8 pm: say « à tout à l'heure »." } }
           ] },
      fin: { end: "win", say: [["M2", "Bonsoir madame ! Votre pizza, bien chaude !"]],
             scene: { fr: "30 minutes plus tard, on sonne. La pizza est là, et elle sent très bon. Commande par téléphone en français : réussie ! 🍕🎉", tr: "30 dakika sonra kapı çalıyor. Pizza geldi ve mis gibi kokuyor. Telefonla Fransızca sipariş: başarılı! 🍕🎉", en: "30 minutes later, the doorbell rings. The pizza is here, and it smells great. Ordering by phone in French: done! 🍕🎉" } },
      fin2: { end: "win", say: [["M", "Ah, la margherita ! Voilà, madame. Bon appétit !"]],
             scene: { fr: "À 20 h, vous récupérez votre pizza toute chaude. Commande par téléphone en français : réussie ! 🍕🎉", tr: "Saat 20.00'de sıcacık pizzanızı alıyorsunuz. Telefonla Fransızca sipariş: başarılı! 🍕🎉", en: "At 8 pm, you pick up your piping hot pizza. Ordering by phone in French: done! 🍕🎉" } }
    } },

  /* ───────────── 32. Le colis au point relais ───────────── */
  { id: "av-point-relais", level: "A1", emoji: "📦",
    t: { fr: "Le colis au point relais", tr: "Teslimat noktasındaki koli", en: "The parcel at the pick-up point" },
    goal: { fr: "Le livreur passe quand vous n'êtes pas là : trouvez le point relais et récupérez votre colis.", tr: "Kurye siz evde yokken geliyor: teslimat noktasını bulun ve kolinizi alın.", en: "The courier comes while you're out: find the pick-up point and collect your parcel." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Il est 19 h. Vous rentrez du travail. Dans l'escalier, vous voyez votre voisine, une dame âgée très gentille.", tr: "Saat 19.00. İşten dönüyorsunuz. Merdivende yaşlı ve çok nazik komşunuzu görüyorsunuz.", en: "It's 7 pm. You're coming home from work. On the stairs, you see your neighbour, a very kind elderly lady." },
           say: [["F", "Bonsoir ! Il y a un papier pour vous dans la boîte aux lettres. Un livreur, cet après-midi, je crois."]],
           choices: [
             { fr: "Salut ! Merci, c'est cool !", tr: "Selam! Sağ ol, süper!", en: "Hi! Thanks, cool!", ok: false,
               fb: { fr: "Un peu trop familier pour une voisine âgée 😊. Dites « bonsoir, madame » et « merci beaucoup ».", tr: "Yaşlı bir komşu için biraz fazla samimi 😊. « Bonsoir, madame » ve « merci beaucoup » deyin.", en: "A bit too casual for an elderly neighbour 😊. Say « bonsoir, madame » and « merci beaucoup »." } },
             { fr: "Ah bon ? Merci beaucoup, madame !", tr: "Öyle mi? Çok teşekkürler, hanımefendi!", en: "Really? Thank you very much, madam!", ok: true, go: "b" },
             { fr: "Merci beaucoup, monsieur !", tr: "Çok teşekkürler, beyefendi!", en: "Thank you very much, sir!", ok: false,
               fb: { fr: "Oups, c'est une dame 😄 ! On dit « merci, madame ».", tr: "Eyvah, o bir hanımefendi 😄! « Merci, madame » denir.", en: "Oops, she's a lady 😄! You say « merci, madame »." } }
           ] },
      b: { scene: { fr: "Vous ouvrez la boîte aux lettres. Il y a un avis de passage, avec beaucoup de mots.", tr: "Posta kutusunu açıyorsunuz. İçinde bir « teslim edilemedi » bildirimi var, bir sürü kelimeyle.", en: "You open the letterbox. There's a missed-delivery notice, with lots of words." },
           say: [["F", "Vous avez besoin d'aide pour lire le papier ?"]],
           choices: [
             { fr: "Oui, s'il vous plaît. Je ne comprends pas tout.", tr: "Evet, lütfen. Her şeyi anlamıyorum.", en: "Yes, please. I don't understand everything.", ok: true, go: "c" },
             { fr: "Non merci, ça va. Je comprends.", tr: "Hayır teşekkürler, sorun yok. Anlıyorum.", en: "No thanks, it's fine. I understand.", ok: true, go: "c2" },
             { fr: "Oui, je suis besoin d'aide.", tr: "Evet, ben yardım ihtiyacıyım.", en: "Yes, I am need of help.", ok: false,
               fb: { fr: "Petit piège ! On dit « j'ai besoin d'aide », avec « avoir ». Mais vous pouvez dire simplement « oui, s'il vous plaît ».", tr: "Küçük bir tuzak! « Avoir » ile « j'ai besoin d'aide » denir. Ama sadece « oui, s'il vous plaît » da diyebilirsiniz.", en: "Little trap! You say « j'ai besoin d'aide », with « avoir ». But you can simply say « oui, s'il vous plaît »." } }
           ] },
      c: { say: [["F", "Alors… Votre colis est au point relais, au tabac de la place. Vous pouvez y aller demain, après 10 h."]],
           choices: [
             { fr: "Demain à 10 h du soir ?", tr: "Yarın akşam 10'da mı?", en: "Tomorrow at 10 in the evening?", ok: false,
               fb: { fr: "Non, 10 h, c'est le matin 🌞. Le soir, on dit 22 h. Demandez plutôt où est le tabac !", tr: "Hayır, 10 h sabah demek 🌞. Akşam için 22 h denir. Bunun yerine tütüncünün nerede olduğunu sorun!", en: "No, 10 h is the morning 🌞. In the evening it's 22 h. Ask where the tabac is instead!" } },
             { fr: "D'accord. Le tabac, c'est loin d'ici ?", tr: "Tamam. Tütüncü buraya uzak mı?", en: "OK. Is the tabac far from here?", ok: true, go: "d" },
             { fr: "Merci ! Je connais le tabac, c'est sur la place.", tr: "Teşekkürler! Tütüncüyü biliyorum, meydanda.", en: "Thanks! I know the tabac, it's on the square.", ok: true, go: "e" }
           ] },
      c2: { scene: { fr: "Vous lisez : « Votre colis est disponible au point relais : Tabac de la Place. Demain, après 10 h. »", tr: "Okuyorsunuz: « Koliniz teslimat noktasında hazır: Meydan Tütüncüsü. Yarın, saat 10'dan sonra. »", en: "You read: « Your parcel is available at the pick-up point: Tabac de la Place. Tomorrow, after 10 am. »" },
           say: [["F", "Très bien ! Et vous savez où est le tabac ?"]],
           choices: [
             { fr: "Oui, je sais le tabac.", tr: "Evet, tütüncüyü biliyorum. (yanlış fiil)", en: "Yes, I know the tabac. (wrong verb)", ok: false,
               fb: { fr: "Presque ! Pour un lieu ou une personne, on dit « connaître » : « je connais le tabac ».", tr: "Az kaldı! Bir yer ya da kişi için « connaître » kullanılır: « je connais le tabac ».", en: "Almost! For a place or a person, use « connaître »: « je connais le tabac »." } },
             { fr: "Euh… non. C'est où ?", tr: "Şey… hayır. Nerede?", en: "Er… no. Where is it?", ok: true, go: "d" },
             { fr: "Oui, je connais. C'est sur la place.", tr: "Evet, biliyorum. Meydanda.", en: "Yes, I know it. It's on the square.", ok: true, go: "e" }
           ] },
      d: { say: [["F", "C'est tout près ! Vous allez tout droit, puis vous tournez à gauche. C'est à côté de la boulangerie."]],
           choices: [
             { fr: "Tout droit, puis à droite. Merci !", tr: "Dümdüz, sonra sağa. Teşekkürler!", en: "Straight on, then right. Thanks!", ok: false,
               fb: { fr: "Attention, elle dit « à gauche » ⬅️ ! « Droite » ➡️ et « tout droit » ⬆️, ce n'est pas pareil.", tr: "Dikkat, « à gauche » (sola) diyor ⬅️! « Droite » ➡️ ile « tout droit » ⬆️ aynı şey değil.", en: "Careful, she says « à gauche » (left) ⬅️! « Droite » ➡️ and « tout droit » ⬆️ are not the same." } },
             { fr: "Tout droit, puis à gauche. Merci beaucoup, madame !", tr: "Dümdüz, sonra sola. Çok teşekkürler, hanımefendi!", en: "Straight on, then left. Thank you very much, madam!", ok: true, go: "e" }
           ] },
      e: { scene: { fr: "Le lendemain, 10 h 15. Vous entrez au tabac de la place, avec l'avis de passage.", tr: "Ertesi gün, saat 10.15. Bildirimle birlikte meydandaki tütüncüye giriyorsunuz.", en: "The next day, 10:15 am. You walk into the tabac on the square, with the notice." },
           say: [["M", "Bonjour madame ! Qu'est-ce que je vous donne ?"]],
           choices: [
             { fr: "Bonjour ! Je viens chercher un colis, s'il vous plaît.", tr: "Merhaba! Bir koli almaya geldim, lütfen.", en: "Hello! I've come to pick up a parcel, please.", ok: true, go: "f" },
             { fr: "Bonjour ! Je voudrais acheter un colis.", tr: "Merhaba! Bir koli satın almak istiyorum.", en: "Hello! I'd like to buy a parcel.", ok: false,
               fb: { fr: "Le colis est déjà à vous, pas besoin de payer 😄 ! On dit « je viens chercher un colis ».", tr: "Koli zaten sizin, ödemeye gerek yok 😄! « Je viens chercher un colis » denir.", en: "The parcel is already yours, no need to pay 😄! You say « je viens chercher un colis »." } },
             { fr: "Bonjour ! Un paquet, s'il vous plaît.", tr: "Merhaba! Bir paket, lütfen.", en: "Hello! A pack, please.", ok: false,
               fb: { fr: "Au tabac, « un paquet », c'est souvent des cigarettes 🚬😅 ! Pour la livraison, on dit « un colis ».", tr: "Tütüncüde « un paquet » genelde sigara demek 🚬😅! Kargo için « un colis » denir.", en: "At a tabac, « un paquet » usually means cigarettes 🚬😅! For a delivery, you say « un colis »." } }
           ] },
      f: { say: [["M", "Bien sûr. Vous avez le papier et une pièce d'identité ?"]],
           choices: [
             { fr: "Oui, voilà l'avis de passage et ma carte de séjour.", tr: "Evet, işte bildirim ve oturma kartım.", en: "Yes, here's the notice and my residence permit.", ok: true, go: "g" },
             { fr: "Oui, j'ai une pièce de 2 €.", tr: "Evet, 2 avroluk bir bozuk param var.", en: "Yes, I have a 2-euro coin.", ok: false,
               fb: { fr: "Ce n'est pas la même pièce 😄 ! Une « pièce d'identité », c'est une carte avec votre photo : passeport, carte de séjour…", tr: "Aynı « pièce » değil 😄! « Pièce d'identité » fotoğraflı bir kimlik demek: pasaport, oturma kartı…", en: "Not the same « pièce » 😄! A « pièce d'identité » is an ID with your photo: passport, residence permit…" } },
             { fr: "Voilà le papier. Et voilà mon passeport.", tr: "İşte kâğıt. İşte de pasaportum.", en: "Here's the paper. And here's my passport.", ok: true, go: "g" }
           ] },
      g: { scene: { fr: "Il revient avec une grande boîte en carton.", tr: "Büyük bir karton kutuyla geri geliyor.", en: "He comes back with a big cardboard box." },
           say: [["M", "Voilà ! Il est gros, votre colis ! Ça va aller ?"]],
           choices: [
             { fr: "Oui, ça va. Il n'est pas lourd.", tr: "Evet, sorun yok. Ağır değil.", en: "Yes, it's fine. It's not heavy.", ok: true, go: "h" },
             { fr: "Oh là là, il est lourd ! Vous avez un sac ?", tr: "Aman, ağırmış! Bir poşetiniz var mı?", en: "Oh dear, it's heavy! Do you have a bag?", ok: true, go: "h2" },
             { fr: "Oui, je suis très lourde.", tr: "Evet, ben çok ağırım.", en: "Yes, I'm very heavy.", ok: false,
               fb: { fr: "Mais non, c'est le colis qui est lourd 😄 ! Dites « il est lourd » ou « il n'est pas lourd ».", tr: "Yok canım, ağır olan koli 😄! « Il est lourd » ya da « il n'est pas lourd » deyin.", en: "No, no, it's the parcel that's heavy 😄! Say « il est lourd » or « il n'est pas lourd »." } }
           ] },
      h2: { say: [["M", "Je n'ai pas de sac, désolé. Mais voilà une ficelle, pour faire une poignée !"]],
           choices: [
             { fr: "Super ! Vous êtes très gentille.", tr: "Süper! Çok naziksiniz. (dişil)", en: "Great! You're very kind. (feminine)", ok: false,
               fb: { fr: "C'est un monsieur 😊 ! Au masculin, on dit « vous êtes très gentil ».", tr: "Karşınızdaki bir beyefendi 😊! Eril olarak « vous êtes très gentil » denir.", en: "He's a man 😊! In the masculine, you say « vous êtes très gentil »." } },
             { fr: "Super ! C'est très gentil, merci beaucoup.", tr: "Süper! Çok naziksiniz, çok teşekkürler.", en: "Great! That's very kind, thank you very much.", ok: true, go: "h" }
           ] },
      h: { say: [["M", "Dernière chose : vous signez ici, s'il vous plaît."]],
           choices: [
             { fr: "Merci, au revoir !", tr: "Teşekkürler, hoşça kalın!", en: "Thanks, goodbye!", ok: false,
               fb: { fr: "Attendez, il faut signer d'abord ✍️ ! Dites « bien sûr, je signe ici ? ».", tr: "Durun, önce imzalamanız lazım ✍️! « Bien sûr, je signe ici ? » deyin.", en: "Wait, you need to sign first ✍️! Say « bien sûr, je signe ici ? »." } },
             { fr: "Bien sûr. Je signe ici ?", tr: "Tabii. Buraya mı imzalıyorum?", en: "Of course. Do I sign here?", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["M", "Oui, parfait. Bonne journée, madame !"]],
             scene: { fr: "Vous rentrez avec votre colis sous le bras. Avis de passage, point relais, signature : tout en français ! 📦🎉", tr: "Koliniz kolunuzun altında eve dönüyorsunuz. Bildirim, teslimat noktası, imza: hepsi Fransızca! 📦🎉", en: "You head home with your parcel under your arm. Notice, pick-up point, signature: all in French! 📦🎉" } }
    } },

  /* ───────────── 33. La caisse automatique ───────────── */
  { id: "av-caisse-auto", level: "A1", emoji: "🛒",
    t: { fr: "La caisse automatique", tr: "Self-servis kasa", en: "The self-service checkout" },
    goal: { fr: "Payez vos courses à la caisse automatique et demandez de l'aide quand la machine a un problème.", tr: "Alışverişinizi self-servis kasada ödeyin ve makine sorun çıkarınca yardım isteyin.", en: "Pay for your shopping at the self-service checkout and ask for help when the machine plays up." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Au supermarché, il y a une longue queue aux caisses normales. Une employée vous fait signe.", tr: "Süpermarkette normal kasalarda uzun bir kuyruk var. Bir çalışan size işaret ediyor.", en: "At the supermarket, there's a long queue at the normal tills. A staff member waves at you." },
           say: [["F", "Bonjour madame ! Les caisses automatiques sont libres. Vous avez moins de 10 articles ?"]],
           choices: [
             { fr: "Oui, j'ai moins de 10 ans.", tr: "Evet, 10 yaşından küçüğüm.", en: "Yes, I'm under 10 years old.", ok: false,
               fb: { fr: "Vous êtes très grande pour 9 ans 😄 ! Elle parle des articles dans votre panier : « j'ai 6 articles ».", tr: "9 yaşına göre epey uzunsunuz 😄! Sepetinizdeki ürünlerden bahsediyor: « j'ai 6 articles ».", en: "You're very tall for 9 😄! She means the items in your basket: « j'ai 6 articles »." } },
             { fr: "Oui, j'ai juste 6 articles.", tr: "Evet, sadece 6 ürünüm var.", en: "Yes, I only have 6 items.", ok: true, go: "b" },
             { fr: "Oui, je suis 6 articles.", tr: "Evet, ben 6 ürünüm.", en: "Yes, I am 6 items.", ok: false,
               fb: { fr: "Vous n'êtes pas des yaourts 😄 ! On dit « j'ai 6 articles », avec « avoir ».", tr: "Siz yoğurt değilsiniz 😄! « Avoir » ile « j'ai 6 articles » denir.", en: "You're not yoghurts 😄! You say « j'ai 6 articles », with « avoir »." } }
           ] },
      b: { scene: { fr: "Vous scannez le lait et le pain : bip, bip ! Puis les bananes… Pas de code-barres ! La machine attend.", tr: "Sütü ve ekmeği okutuyorsunuz: bip, bip! Sonra muzlar… Barkod yok! Makine bekliyor.", en: "You scan the milk and the bread: beep, beep! Then the bananas… No barcode! The machine is waiting." },
           say: [["N", "Veuillez scanner votre article."]],
           choices: [
             { fr: "Hé, toi ! Aide-moi !", tr: "Hey, sen! Yardım et bana!", en: "Hey, you! Help me!", ok: false,
               fb: { fr: "Trop direct avec une employée 😬. Avec « vous » et « s'il vous plaît », c'est parfait : « vous pouvez m'aider ? ».", tr: "Bir çalışana karşı fazla direkt 😬. « Vous » ve « s'il vous plaît » ile mükemmel olur: « vous pouvez m'aider ? ».", en: "Too blunt with a staff member 😬. With « vous » and « s'il vous plaît » it's perfect: « vous pouvez m'aider ? »." } },
             { fr: "Au secours ! Police !", tr: "İmdat! Polis!", en: "Help! Police!", ok: false,
               fb: { fr: "Pas de panique, ce sont juste des bananes 🍌😄 ! Dites « excusez-moi, vous pouvez m'aider ? ».", tr: "Panik yok, sadece muz 🍌😄! « Excusez-moi, vous pouvez m'aider ? » deyin.", en: "Don't panic, they're just bananas 🍌😄! Say « excusez-moi, vous pouvez m'aider ? »." } },
             { fr: "Excusez-moi, madame ! Vous pouvez m'aider, s'il vous plaît ?", tr: "Affedersiniz hanımefendi! Bana yardım edebilir misiniz, lütfen?", en: "Excuse me, madam! Can you help me, please?", ok: true, go: "c" }
           ] },
      c: { say: [["F", "Oui, bien sûr. Quel est le problème ?"]],
           choices: [
             { fr: "Les bananes n'ont pas de code-barres.", tr: "Muzların barkodu yok.", en: "The bananas don't have a barcode.", ok: true, go: "d" },
             { fr: "Le problème est jaune.", tr: "Sorun sarı.", en: "The problem is yellow.", ok: false,
               fb: { fr: "C'est poétique 🍌😄, mais pas très clair ! Dites « les bananes n'ont pas de code-barres ».", tr: "Şiirsel 🍌😄 ama pek açık değil! « Les bananes n'ont pas de code-barres » deyin.", en: "Poetic 🍌😄, but not very clear! Say « les bananes n'ont pas de code-barres »." } }
           ] },
      d: { say: [["F", "Pas de problème. Vous appuyez sur « Fruits et légumes », puis sur la photo des bananes. Et vous les posez sur la balance."]],
           choices: [
             { fr: "Ah, d'accord ! Je fais ça.", tr: "Ha, tamam! Öyle yapıyorum.", en: "Ah, OK! I'll do that.", ok: true, go: "e" },
             { fr: "Vous pouvez me montrer, s'il vous plaît ?", tr: "Bana gösterebilir misiniz, lütfen?", en: "Can you show me, please?", ok: true, go: "d2" },
             { fr: "Je pose la balance sur les bananes ?", tr: "Teraziyi muzların üstüne mi koyuyorum?", en: "Do I put the scales on the bananas?", ok: false,
               fb: { fr: "Dans l'autre sens 😄 ! Les bananes vont sur la balance : « je pose les bananes sur la balance ».", tr: "Tam tersi 😄! Muzlar terazinin üstüne konur: « je pose les bananes sur la balance ».", en: "The other way round 😄! The bananas go on the scales: « je pose les bananes sur la balance »." } }
           ] },
      d2: { scene: { fr: "Elle appuie sur l'écran avec vous : « Fruits et légumes », puis « Bananes ».", tr: "Sizinle birlikte ekrana dokunuyor: « Meyve ve sebze », sonra « Muz ».", en: "She taps the screen with you: « Fruit and vegetables », then « Bananas »." },
           say: [["F", "Regardez : ici, puis là. Et voilà, c'est facile !"]],
           choices: [
             { fr: "Merci, c'est facile, en fait !", tr: "Teşekkürler, aslında kolaymış!", en: "Thanks, it's easy, actually!", ok: true, go: "e" },
             { fr: "Merci, je suis facile !", tr: "Teşekkürler, ben kolayım!", en: "Thanks, I'm easy!", ok: false,
               fb: { fr: "Hmm, ce n'est pas le bon sens 😅 ! C'est la machine qui est facile : « c'est facile ».", tr: "Hmm, doğru anlam bu değil 😅! Kolay olan makine: « c'est facile ».", en: "Hmm, that doesn't mean what you want 😅! It's the machine that's easy: « c'est facile »." } }
           ] },
      e: { scene: { fr: "Les bananes sont dans le panier virtuel. Mais soudain, la machine fait « bip bip » et l'écran devient rouge.", tr: "Muzlar sanal sepette. Ama birden makine « bip bip » yapıyor ve ekran kırmızıya dönüyor.", en: "The bananas are in the virtual basket. But suddenly, the machine goes « beep beep » and the screen turns red." },
           say: [["N", "Article inattendu dans la zone d'ensachage."]],
           choices: [
             { fr: "Je ne suis pas inattendue !", tr: "Ben beklenmedik değilim!", en: "I'm not unexpected!", ok: false,
               fb: { fr: "Elle ne parle pas de vous 😄 ! Appelez l'employée : « Madame, la machine dit “article inattendu”… C'est quoi ? ».", tr: "Sizden bahsetmiyor 😄! Çalışanı çağırın: « Madame, la machine dit “article inattendu”… C'est quoi ? ».", en: "It's not talking about you 😄! Call the staff member: « Madame, la machine dit “article inattendu”… C'est quoi ? »." } },
             { fr: "Madame, la machine dit « article inattendu »… C'est quoi ?", tr: "Hanımefendi, makine « beklenmedik ürün » diyor… Bu ne demek?", en: "Madam, the machine says « unexpected item »… What's that?", ok: true, go: "f" }
           ] },
      f: { say: [["F", "Ah, c'est à cause de ce sac, là. C'est votre sac ?"]],
           choices: [
             { fr: "Oui, c'est mon sac à main. Pardon !", tr: "Evet, benim el çantam. Pardon!", en: "Yes, it's my handbag. Sorry!", ok: true, go: "g" },
             { fr: "Oui, c'est son sac.", tr: "Evet, onun çantası.", en: "Yes, it's his/her bag.", ok: false,
               fb: { fr: "« Son sac », c'est le sac d'une autre personne 🤔. Pour vous, on dit « mon sac ».", tr: "« Son sac » başka birinin çantası demek 🤔. Sizinki için « mon sac » denir.", en: "« Son sac » is someone else's bag 🤔. For yours, you say « mon sac »." } },
             { fr: "Non, c'est votre sac.", tr: "Hayır, sizin çantanız.", en: "No, it's your bag.", ok: false,
               fb: { fr: "Elle n'a pas de sac rose avec des fleurs 😄 ! C'est le vôtre : « oui, c'est mon sac ».", tr: "Onun çiçekli pembe bir çantası yok 😄! Sizinki: « oui, c'est mon sac ».", en: "She doesn't have a pink bag with flowers 😄! It's yours: « oui, c'est mon sac »." } }
           ] },
      g: { scene: { fr: "Elle enlève le sac, tape un code, et l'écran redevient bleu.", tr: "Çantayı kaldırıyor, bir kod giriyor ve ekran yeniden mavi oluyor.", en: "She moves the bag, types a code, and the screen turns blue again." },
           say: [["F", "Voilà, c'est réglé. Vous avez une carte de fidélité ?"]],
           choices: [
             { fr: "Non, je n'ai pas une carte.", tr: "Hayır, bir kartım yok. (yanlış yapı)", en: "No, I don't have a card. (wrong structure)", ok: false,
               fb: { fr: "Presque ! Après « ne… pas », « un / une » devient « de » : « je n'ai pas de carte ».", tr: "Az kaldı! « Ne… pas »dan sonra « un / une », « de » olur: « je n'ai pas de carte ».", en: "Almost! After « ne… pas », « un / une » becomes « de »: « je n'ai pas de carte »." } },
             { fr: "Non, je n'ai pas de carte.", tr: "Hayır, kartım yok.", en: "No, I don't have a card.", ok: true, go: "h" },
             { fr: "Oui, voilà ma carte.", tr: "Evet, işte kartım.", en: "Yes, here's my card.", ok: true, go: "h" }
           ] },
      h: { say: [["N", "Total : 9,80 €. Choisissez votre moyen de paiement."], ["F", "Vous payez par carte ou en espèces ?"]],
           choices: [
             { fr: "Par carte, sans contact.", tr: "Kartla, temassız.", en: "By card, contactless.", ok: true, go: "i" },
             { fr: "En espèces. Je mets les pièces ici ?", tr: "Nakit. Bozuk paraları buraya mı koyuyorum?", en: "In cash. Do I put the coins here?", ok: true, go: "i" },
             { fr: "Je paie avec mes bananes ?", tr: "Muzlarımla mı ödüyorum?", en: "Do I pay with my bananas?", ok: false,
               fb: { fr: "Joli troc 🍌😄, mais la machine préfère les euros ! Dites « par carte » ou « en espèces ».", tr: "Güzel takas 🍌😄 ama makine avroyu tercih ediyor! « Par carte » ya da « en espèces » deyin.", en: "Nice barter 🍌😄, but the machine prefers euros! Say « par carte » or « en espèces »." } }
           ] },
      i: { say: [["F", "Parfait ! N'oubliez pas votre ticket. Bonne journée !"]],
           choices: [
             { fr: "De rien ! Bonne journée !", tr: "Rica ederim! İyi günler!", en: "You're welcome! Have a nice day!", ok: false,
               fb: { fr: "« De rien », c'est la réponse à « merci ». Ici, c'est vous qui dites merci : « merci pour votre aide ! ».", tr: "« De rien », « merci »ye verilen cevaptır. Burada teşekkür eden sizsiniz: « merci pour votre aide ! ».", en: "« De rien » is the answer to « merci ». Here, you're the one saying thanks: « merci pour votre aide ! »." } },
             { fr: "Merci beaucoup pour votre aide ! Bonne journée !", tr: "Yardımınız için çok teşekkürler! İyi günler!", en: "Thank you so much for your help! Have a nice day!", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["N", "Merci de votre visite. À bientôt !"]],
             scene: { fr: "Vous sortez avec vos courses et votre ticket. La machine n'a pas gagné : bravo ! 🛒🎉", tr: "Alışverişiniz ve fişinizle çıkıyorsunuz. Makine kazanamadı: bravo! 🛒🎉", en: "You leave with your shopping and your receipt. The machine didn't win: well done! 🛒🎉" } }
    } },

  /* ───────────── 34. Chez le coiffeur ───────────── */
  { id: "av-coiffeur", level: "A1", emoji: "💇‍♀️",
    t: { fr: "Chez le coiffeur", tr: "Kuaförde", en: "At the hairdresser's" },
    goal: { fr: "Expliquez à la coiffeuse ce que vous voulez, discutez un peu, puis payez.", tr: "Kuaföre ne istediğinizi anlatın, biraz sohbet edin, sonra ödeyin.", en: "Explain to the hairdresser what you want, chat a little, then pay." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous entrez dans un petit salon de coiffure. Ça sent le shampoing à la vanille.", tr: "Küçük bir kuaför salonuna giriyorsunuz. Vanilyalı şampuan kokuyor.", en: "You walk into a small hair salon. It smells of vanilla shampoo." },
           say: [["F", "Bonjour madame ! Vous avez rendez-vous ?"]],
           choices: [
             { fr: "Oui, à 15 h.", tr: "Evet, saat 15.00'te.", en: "Yes, at 3 pm.", ok: true, go: "b" },
             { fr: "Non. Vous avez de la place maintenant ?", tr: "Hayır. Şimdi yeriniz var mı?", en: "No. Do you have a free slot now?", ok: true, go: "a2" },
             { fr: "Non, je suis mariée !", tr: "Hayır, ben evliyim!", en: "No, I'm married!", ok: false,
               fb: { fr: "Ici, « rendez-vous » = une heure réservée, pas un rendez-vous amoureux 😄💕. Répondez « oui, à 15 h » ou « non ».", tr: "Burada « rendez-vous » = ayrılmış bir saat, romantik buluşma değil 😄💕. « Oui, à 15 h » ya da « non » deyin.", en: "Here, « rendez-vous » = a booked time, not a romantic date 😄💕. Answer « oui, à 15 h » or « non »." } }
           ] },
      a2: { say: [["F", "Vous avez de la chance ! Dans 10 minutes, ça va ?"]],
           choices: [
             { fr: "Dans 10 minutes ? Non, maintenant !", tr: "10 dakika sonra mı? Hayır, şimdi!", en: "In 10 minutes? No, now!", ok: false,
               fb: { fr: "Un peu sec 😬 ! 10 minutes, c'est court. Dites « oui, parfait, j'attends ».", tr: "Biraz sert 😬! 10 dakika kısa bir süre. « Oui, parfait, j'attends » deyin.", en: "A bit abrupt 😬! 10 minutes is short. Say « oui, parfait, j'attends »." } },
             { fr: "Oui, parfait, j'attends.", tr: "Evet, mükemmel, bekliyorum.", en: "Yes, perfect, I'll wait.", ok: true, go: "b" }
           ] },
      b: { scene: { fr: "Vous êtes assise devant le grand miroir.", tr: "Büyük aynanın karşısında oturuyorsunuz.", en: "You're sitting in front of the big mirror." },
           say: [["F", "Installez-vous. Alors, qu'est-ce qu'on fait aujourd'hui ?"]],
           choices: [
             { fr: "Je voudrais couper les chevaux.", tr: "Atları kesmek istiyorum.", en: "I'd like to cut the horses.", ok: false,
               fb: { fr: "Les chevaux 🐴 ? Pauvres bêtes 😄 ! On dit « les cheveux » (sans « a »).", tr: "Atlar mı 🐴? Zavallı hayvanlar 😄! « Les cheveux » denir (« a » olmadan).", en: "The horses 🐴? Poor things 😄! You say « les cheveux » (no « a »)." } },
             { fr: "Je voudrais couper un peu les cheveux, s'il vous plaît.", tr: "Saçlarımı biraz kestirmek istiyorum, lütfen.", en: "I'd like a little cut, please.", ok: true, go: "c" },
             { fr: "Je voudrais couper un cheveu.", tr: "Bir tel saç kestirmek istiyorum.", en: "I'd like to cut one hair.", ok: false,
               fb: { fr: "Un seul cheveu ? Ça va être rapide 😄 ! Pour toute la tête, on dit « les cheveux », au pluriel.", tr: "Tek bir tel mi? Çabuk biter 😄! Bütün saç için çoğul « les cheveux » denir.", en: "Just one hair? That'll be quick 😄! For your whole head, you say « les cheveux », plural." } }
           ] },
      c: { say: [["F", "Je coupe combien ? Comme ça ?"]], scene: { fr: "Elle montre 10 centimètres avec ses doigts. C'est beaucoup !", tr: "Parmaklarıyla 10 santimetre gösteriyor. Bu çok!", en: "She shows 10 centimetres with her fingers. That's a lot!" },
           choices: [
             { fr: "Non, moins ! Juste 3 centimètres, s'il vous plaît.", tr: "Hayır, daha az! Sadece 3 santimetre, lütfen.", en: "No, less! Just 3 centimetres, please.", ok: true, go: "d" },
             { fr: "Oui, comme ça ! Je veux du changement.", tr: "Evet, böyle! Değişiklik istiyorum.", en: "Yes, like that! I want a change.", ok: true, go: "d2" },
             { fr: "Non, plus moins.", tr: "Hayır, daha daha az.", en: "No, more less.", ok: false,
               fb: { fr: "« Plus moins » n'existe pas 🙂. On dit simplement « moins » ou « un peu moins ».", tr: "« Plus moins » diye bir şey yok 🙂. Sadece « moins » ya da « un peu moins » denir.", en: "« Plus moins » doesn't exist 🙂. You just say « moins » or « un peu moins »." } }
           ] },
      d: { say: [["F", "D'accord, 3 centimètres. On fait un shampoing avant ?"]],
           choices: [
             { fr: "Oui, avec l'eau très froid.", tr: "Evet, çok soğuk suyla. (yanlış cinsiyet)", en: "Yes, with very cold water. (wrong gender)", ok: false,
               fb: { fr: "Brr 🥶 ! Et attention : « l'eau » est féminin, donc « l'eau froide ». Dites simplement « oui, volontiers ».", tr: "Brr 🥶! Dikkat: « l'eau » dişil, yani « l'eau froide ». Sadece « oui, volontiers » deyin.", en: "Brr 🥶! And careful: « l'eau » is feminine, so « l'eau froide ». Just say « oui, volontiers »." } },
             { fr: "Oui, volontiers.", tr: "Evet, memnuniyetle.", en: "Yes, gladly.", ok: true, go: "e" }
           ] },
      d2: { say: [["F", "Super ! Alors, une coupe au carré ? Ça va être très joli."]],
           choices: [
             { fr: "Une coupe ? Non merci, je ne bois pas d'alcool.", tr: "Kadeh mi? Hayır teşekkürler, alkol içmiyorum.", en: "A glass? No thanks, I don't drink alcohol.", ok: false,
               fb: { fr: "Ah, « une coupe de champagne » 🥂😄 ! Mais ici, « une coupe », c'est la coiffure. Dites « d'accord, j'ai confiance ! ».", tr: "Ha, « une coupe de champagne » 🥂😄! Ama burada « une coupe » saç kesimi demek. « D'accord, j'ai confiance ! » deyin.", en: "Ah, « une coupe de champagne » 🥂😄! But here « une coupe » is a haircut. Say « d'accord, j'ai confiance ! »." } },
             { fr: "D'accord, j'ai confiance !", tr: "Tamam, size güveniyorum!", en: "OK, I trust you!", ok: true, go: "e" }
           ] },
      e: { scene: { fr: "La tête au-dessus du lavabo, vous sentez l'eau sur vos cheveux.", tr: "Başınız lavabonun üstünde, suyu saçlarınızda hissediyorsunuz.", en: "With your head over the basin, you feel the water on your hair." },
           say: [["F", "L'eau est bonne ? Pas trop chaude ?"]],
           choices: [
             { fr: "Elle est parfaite, merci.", tr: "Mükemmel, teşekkürler.", en: "It's perfect, thanks.", ok: true, go: "f" },
             { fr: "Un peu chaude. Un peu moins chaude, s'il vous plaît.", tr: "Biraz sıcak. Biraz daha ılık, lütfen.", en: "A bit hot. A bit cooler, please.", ok: true, go: "f" },
             { fr: "Je suis chaude !", tr: "Ben sıcağım! (yanlış anlam)", en: "I'm hot! (wrong meaning)", ok: false,
               fb: { fr: "Oups, en français, ça a un autre sens 😳😄 ! Pour l'eau, dites « elle est un peu chaude ». Pour vous : « j'ai chaud ».", tr: "Eyvah, Fransızcada bunun başka bir anlamı var 😳😄! Su için « elle est un peu chaude » deyin. Kendiniz için: « j'ai chaud ».", en: "Oops, in French that means something else 😳😄! For the water, say « elle est un peu chaude ». For yourself: « j'ai chaud »." } }
           ] },
      f: { scene: { fr: "Les ciseaux font clic, clic. La coiffeuse aime bien discuter.", tr: "Makas şık, şık ediyor. Kuaför sohbet etmeyi seviyor.", en: "The scissors go snip, snip. The hairdresser likes to chat." },
           say: [["F", "Vous avez un joli petit accent ! Vous venez d'où ?"]],
           choices: [
             { fr: "Je viens de Turquie, d'Istanbul.", tr: "Türkiye'den geliyorum, İstanbul'dan.", en: "I'm from Turkey, from Istanbul.", ok: true, go: "g" },
             { fr: "Je viens de la Turquie.", tr: "Türkiye'den geliyorum. (yanlış yapı)", en: "I come from the Turkey.", ok: false,
               fb: { fr: "Presque ! Avec un pays féminin, on dit « de » tout court : « je viens de Turquie ».", tr: "Az kaldı! Dişil bir ülkeyle sadece « de » denir: « je viens de Turquie ».", en: "Almost! With a feminine country, just say « de »: « je viens de Turquie »." } },
             { fr: "J'ai turque.", tr: "Türküm var.", en: "I have Turkish.", ok: false,
               fb: { fr: "Hmm, ça ne veut rien dire 🙂. On dit « je suis turque » ou « je viens de Turquie ».", tr: "Hmm, bu bir anlam taşımıyor 🙂. « Je suis turque » ya da « je viens de Turquie » denir.", en: "Hmm, that doesn't mean anything 🙂. You say « je suis turque » or « je viens de Turquie »." } }
           ] },
      g: { say: [["F", "Istanbul ! C'est magnifique ! Et vous aimez la France ?"]],
           choices: [
             { fr: "Oui, j'aime beaucoup de France.", tr: "Evet, Fransa'dan çok seviyorum. (yanlış yapı)", en: "Yes, I like a lot of France.", ok: false,
               fb: { fr: "Petit piège ! Après « aimer », on garde « la » : « j'aime beaucoup la France ».", tr: "Küçük bir tuzak! « Aimer »den sonra « la » kalır: « j'aime beaucoup la France ».", en: "Little trap! After « aimer », keep « la »: « j'aime beaucoup la France »." } },
             { fr: "Oui, beaucoup ! Mais le français, c'est difficile.", tr: "Evet, çok! Ama Fransızca zor.", en: "Yes, a lot! But French is hard.", ok: true, go: "h" }
           ] },
      h: { scene: { fr: "Elle sèche vos cheveux, puis vous montre l'arrière avec un petit miroir.", tr: "Saçlarınızı kurutuyor, sonra küçük bir aynayla arkasını gösteriyor.", en: "She dries your hair, then shows you the back with a small mirror." },
           say: [["F", "Et voilà ! Ça vous plaît ?"]],
           choices: [
             { fr: "Oui, je me plais beaucoup !", tr: "Evet, kendimi çok beğeniyorum!", en: "Yes, I like myself a lot!", ok: false,
               fb: { fr: "C'est bien d'avoir confiance 😄 ! Mais on parle de la coupe : « oui, ça me plaît beaucoup ! ».", tr: "Kendine güvenmek güzel 😄! Ama konu saç kesimi: « oui, ça me plaît beaucoup ! ».", en: "Self-confidence is great 😄! But we're talking about the haircut: « oui, ça me plaît beaucoup ! »." } },
             { fr: "Oui, j'adore ! C'est très joli.", tr: "Evet, bayıldım! Çok güzel.", en: "Yes, I love it! It's very nice.", ok: true, go: "i" }
           ] },
      i: { say: [["F", "Merci ! Ça fait 32 €, s'il vous plaît."]],
           choices: [
             { fr: "Voilà. Merci beaucoup, et bonne fin de journée !", tr: "Buyurun. Çok teşekkürler, iyi günler!", en: "Here you are. Thank you so much, and have a nice rest of the day!", ok: true, go: "fin" },
             { fr: "Ça fait 32 ans ?", tr: "32 yıl mı ediyor?", en: "That's 32 years?", ok: false,
               fb: { fr: "Non, 32 euros 💶😄 ! Donnez l'argent et dites « voilà, merci beaucoup ».", tr: "Hayır, 32 avro 💶😄! Parayı verin ve « voilà, merci beaucoup » deyin.", en: "No, 32 euros 💶😄! Hand over the money and say « voilà, merci beaucoup »." } }
           ] },
      fin: { end: "win", say: [["F", "Merci à vous ! À bientôt, madame !"]],
             scene: { fr: "Vous sortez avec une coupe toute neuve. Et vous avez discuté en français pendant une heure ! 💇‍♀️🎉", tr: "Yepyeni bir saç kesimiyle çıkıyorsunuz. Üstelik bir saat boyunca Fransızca sohbet ettiniz! 💇‍♀️🎉", en: "You leave with a brand-new haircut. And you chatted in French for an hour! 💇‍♀️🎉" } }
    } },

  /* ───────────── 35. S'inscrire à la médiathèque ───────────── */
  { id: "av-mediatheque", level: "A1", emoji: "📚",
    t: { fr: "S'inscrire à la médiathèque", tr: "Kütüphaneye üye olmak", en: "Joining the library" },
    goal: { fr: "Inscrivez-vous à la médiathèque, trouvez des livres en français facile et empruntez-les.", tr: "Kütüphaneye üye olun, kolay Fransızca kitaplar bulun ve ödünç alın.", en: "Sign up at the library, find some easy French books and borrow them." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Samedi après-midi. Vous entrez à la médiathèque de la ville. C'est grand et calme.", tr: "Cumartesi öğleden sonra. Şehrin kütüphanesine giriyorsunuz. Büyük ve sakin bir yer.", en: "Saturday afternoon. You walk into the town library. It's big and quiet." },
           say: [["F", "Bonjour ! Je peux vous aider ?"]],
           choices: [
             { fr: "Bonjour ! Je voudrais acheter un livre.", tr: "Merhaba! Bir kitap satın almak istiyorum.", en: "Hello! I'd like to buy a book.", ok: false,
               fb: { fr: "Ici, on n'achète pas, on emprunte 📚 ! D'abord, il faut s'inscrire : « je voudrais m'inscrire ».", tr: "Burada satın alınmaz, ödünç alınır 📚! Önce üye olmak gerek: « je voudrais m'inscrire ».", en: "Here you don't buy, you borrow 📚! First, you need to sign up: « je voudrais m'inscrire »." } },
             { fr: "Bonjour ! Je voudrais m'inscrire, s'il vous plaît.", tr: "Merhaba! Üye olmak istiyorum, lütfen.", en: "Hello! I'd like to sign up, please.", ok: true, go: "b" },
             { fr: "Chut !", tr: "Şşş!", en: "Shh!", ok: false,
               fb: { fr: "C'est elle qui travaille ici 🤫😄 ! À l'accueil, on peut parler doucement. Dites « je voudrais m'inscrire ».", tr: "Burada çalışan o 🤫😄! Danışmada yavaşça konuşabilirsiniz. « Je voudrais m'inscrire » deyin.", en: "She's the one who works here 🤫😄! At the desk you can speak softly. Say « je voudrais m'inscrire »." } }
           ] },
      b: { say: [["F", "Avec plaisir. Vous habitez dans la ville ?"]],
           choices: [
             { fr: "Oui, je habite ici, rue Victor-Hugo.", tr: "Evet, burada oturuyorum, Victor-Hugo Sokağı'nda. (yanlış yazım)", en: "Yes, I live here, rue Victor-Hugo. (no elision)", ok: false,
               fb: { fr: "Presque ! Devant une voyelle ou un « h » muet, « je » devient « j' » : « j'habite ».", tr: "Az kaldı! Ünlü harf ya da okunmayan « h » önünde « je », « j' » olur: « j'habite ».", en: "Almost! Before a vowel or a silent « h », « je » becomes « j' »: « j'habite »." } },
             { fr: "Oui, j'habite ici, rue Victor-Hugo.", tr: "Evet, burada oturuyorum, Victor-Hugo Sokağı'nda.", en: "Yes, I live here, on rue Victor-Hugo.", ok: true, go: "c" }
           ] },
      c: { say: [["F", "Très bien. Il me faut une pièce d'identité et un justificatif de domicile."]],
           choices: [
             { fr: "Voilà ma carte de séjour et une facture d'électricité.", tr: "İşte oturma kartım ve bir elektrik faturası.", en: "Here's my residence permit and an electricity bill.", ok: true, go: "d" },
             { fr: "Un justificatif de domicile ? C'est quoi ?", tr: "İkamet belgesi mi? O ne?", en: "Proof of address? What's that?", ok: true, go: "c2" },
             { fr: "Voilà ma carte bancaire.", tr: "İşte banka kartım.", en: "Here's my bank card.", ok: false,
               fb: { fr: "Gardez-la, l'inscription est gratuite 😄 ! Elle demande une pièce d'identité, avec votre photo.", tr: "Kartınızı saklayın, üyelik ücretsiz 😄! Fotoğraflı bir kimlik istiyor.", en: "Keep it, signing up is free 😄! She's asking for an ID with your photo." } }
           ] },
      c2: { say: [["F", "C'est un papier avec votre nom et votre adresse. Une facture, par exemple."]],
           choices: [
             { fr: "Ah, d'accord ! J'ai une facture d'électricité. Voilà, et ma carte de séjour.", tr: "Ha, tamam! Bir elektrik faturam var. Buyurun, oturma kartım da burada.", en: "Ah, OK! I have an electricity bill. Here you are, and my residence permit.", ok: true, go: "d" },
             { fr: "Ah, d'accord ! J'ai une facture de pizza.", tr: "Ha, tamam! Bir pizza fişim var.", en: "Ah, OK! I have a pizza receipt.", ok: false,
               fb: { fr: "Bien essayé 🍕😄 ! Mais il faut une facture avec votre adresse : électricité, internet, loyer…", tr: "İyi denemeydi 🍕😄! Ama adresinizin yazdığı bir fatura gerekiyor: elektrik, internet, kira…", en: "Nice try 🍕😄! But you need a bill with your address: electricity, internet, rent…" } }
           ] },
      d: { say: [["F", "Parfait. Pour les livres, c'est gratuit. Pour les films, c'est 10 € par an. Vous voulez quoi ?"]],
           choices: [
             { fr: "Juste les livres, s'il vous plaît.", tr: "Sadece kitaplar, lütfen.", en: "Just the books, please.", ok: true, go: "e" },
             { fr: "Les livres et les films, s'il vous plaît. Je paie par carte.", tr: "Kitaplar ve filmler, lütfen. Kartla ödüyorum.", en: "The books and the films, please. I'll pay by card.", ok: true, go: "e" },
             { fr: "Gratuit ? Alors je prends 100 livres !", tr: "Ücretsiz mi? O zaman 100 kitap alıyorum!", en: "Free? Then I'll take 100 books!", ok: false,
               fb: { fr: "Quelle motivation 😄 ! Mais il y a une limite. Répondez d'abord : « juste les livres » ou « les livres et les films ».", tr: "Ne motivasyon ama 😄! Ama bir sınır var. Önce cevap verin: « juste les livres » ya da « les livres et les films ».", en: "What motivation 😄! But there's a limit. Answer first: « juste les livres » or « les livres et les films »." } }
           ] },
      e: { scene: { fr: "Elle vous donne une petite carte bleue avec un code-barres.", tr: "Size barkodlu, küçük mavi bir kart veriyor.", en: "She gives you a little blue card with a barcode." },
           say: [["F", "Voici votre carte. Vous pouvez emprunter 10 documents pendant 3 semaines."]],
           choices: [
             { fr: "Merci ! Je rends les livres dans 3 ans.", tr: "Teşekkürler! Kitapları 3 yıl sonra getiririm.", en: "Thanks! I'll bring the books back in 3 years.", ok: false,
               fb: { fr: "3 ans ? La bibliothécaire va pleurer 😢😄 ! C'est 3 semaines. Demandez plutôt où sont les livres.", tr: "3 yıl mı? Kütüphaneci ağlar 😢😄! Süre 3 hafta. Bunun yerine kitapların nerede olduğunu sorun.", en: "3 years? The librarian will cry 😢😄! It's 3 weeks. Ask where the books are instead." } },
             { fr: "Super ! Où sont les livres en français facile ?", tr: "Süper! Kolay Fransızca kitaplar nerede?", en: "Great! Where are the easy French books?", ok: true, go: "f" }
           ] },
      f: { say: [["F", "Au premier étage, à gauche de l'escalier. Il y a aussi des livres audio."]],
           choices: [
             { fr: "Des livres audio ? Génial, merci !", tr: "Sesli kitaplar mı? Harika, teşekkürler!", en: "Audiobooks? Brilliant, thanks!", ok: true, go: "g" },
             { fr: "Au premier étage ? C'est en bas ?", tr: "Birinci katta mı? Aşağıda mı?", en: "On the first floor? Is it downstairs?", ok: false,
               fb: { fr: "Non, le premier étage, c'est en haut ⬆️ ! En bas, c'est le rez-de-chaussée. Montez l'escalier !", tr: "Hayır, birinci kat yukarıda ⬆️! Aşağısı zemin kat (rez-de-chaussée). Merdivenden çıkın!", en: "No, the first floor is upstairs ⬆️! Downstairs is the ground floor (rez-de-chaussée). Go up the stairs!" } }
           ] },
      g: { scene: { fr: "Au premier étage, un petit garçon de 8 ans tourne en rond, un peu perdu.", tr: "Birinci katta 8 yaşında küçük bir oğlan biraz kaybolmuş gibi dönüp duruyor.", en: "On the first floor, a little boy of 8 is walking in circles, a bit lost." },
           say: [["K", "Pardon madame… Tu sais où sont les BD ?"]],
           choices: [
             { fr: "Vous cherchez les BD, monsieur ?", tr: "Çizgi romanları mı arıyorsunuz, beyefendi?", en: "Are you looking for the comics, sir?", ok: false,
               fb: { fr: "C'est mignon, mais il a 8 ans 😄 ! Avec un enfant, on dit « tu » : « regarde, c'est là-bas ! ».", tr: "Tatlı ama o 8 yaşında 😄! Çocukla « tu » kullanılır: « regarde, c'est là-bas ! ».", en: "Cute, but he's 8 😄! With a child, use « tu »: « regarde, c'est là-bas ! »." } },
             { fr: "Oui ! Regarde, c'est écrit « BD », là-bas.", tr: "Evet! Bak, orada « BD » yazıyor.", en: "Yes! Look, it says « BD » over there.", ok: true, go: "h" },
             { fr: "Je ne sais pas. On demande à la dame en bas ?", tr: "Bilmiyorum. Aşağıdaki hanıma soralım mı?", en: "I don't know. Shall we ask the lady downstairs?", ok: true, go: "h" }
           ] },
      h: { scene: { fr: "Le garçon part content. Vous choisissez deux livres faciles et un livre audio, puis vous allez à la borne de prêt.", tr: "Çocuk mutlu bir şekilde gidiyor. İki kolay kitap ve bir sesli kitap seçiyorsunuz, sonra ödünç alma makinesine gidiyorsunuz.", en: "The boy leaves happy. You choose two easy books and an audiobook, then go to the self-service loan machine." },
           say: [["M", "Bonjour ! Vous avez trois documents ? Posez-les ici, avec votre carte."]],
           choices: [
             { fr: "Je les emprunte pour toujours ?", tr: "Onları sonsuza kadar mı ödünç alıyorum?", en: "Do I borrow them forever?", ok: false,
               fb: { fr: "Ce serait bien 😄, mais non : c'est 3 semaines. Posez les livres et demandez « comme ça ? ».", tr: "Güzel olurdu 😄 ama hayır: süre 3 hafta. Kitapları koyun ve « comme ça ? » diye sorun.", en: "That would be nice 😄, but no: it's 3 weeks. Put the books down and ask « comme ça ? »." } },
             { fr: "Comme ça ? C'est bon ?", tr: "Böyle mi? Oldu mu?", en: "Like this? Is that right?", ok: true, go: "i" }
           ] },
      i: { say: [["M", "Oui, c'est bon ! Retour le 26 novembre. Bonne lecture !"]],
           choices: [
             { fr: "Le 26 novembre, c'est noté. Merci, bonne journée !", tr: "26 Kasım, not ettim. Teşekkürler, iyi günler!", en: "26 November, noted. Thanks, have a nice day!", ok: true, go: "fin" },
             { fr: "De rien, au revoir !", tr: "Rica ederim, hoşça kalın!", en: "You're welcome, goodbye!", ok: false,
               fb: { fr: "« De rien », c'est pour répondre à « merci ». Ici, dites « merci, bonne journée ! ».", tr: "« De rien », « merci »ye cevap olarak söylenir. Burada « merci, bonne journée ! » deyin.", en: "« De rien » is the reply to « merci ». Here, say « merci, bonne journée ! »." } }
           ] },
      fin: { end: "win", say: [["M", "Bonne journée, madame ! À bientôt."]],
             scene: { fr: "Vous rentrez avec trois livres dans votre sac et une carte de médiathèque toute neuve. Bonne lecture ! 📚🎉", tr: "Çantanızda üç kitap ve yepyeni bir kütüphane kartıyla eve dönüyorsunuz. Keyifli okumalar! 📚🎉", en: "You head home with three books in your bag and a brand-new library card. Happy reading! 📚🎉" } }
    } }
);
