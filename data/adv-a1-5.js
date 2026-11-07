/* Aventures A1 — 21 to 25: crêperie, cadeau pour son mari, tabac-presse, cours de yoga d'essai, le chien de la voisine */
(window.ADVENTURES = window.ADVENTURES || []).push(

  /* ───────────── 21. À la crêperie ───────────── */
  { id: "av-creperie", level: "A1", emoji: "🥞",
    t: { fr: "À la crêperie", tr: "Krepçide", en: "At the crêperie" },
    goal: { fr: "Déjeunez avec une amie à la crêperie : commandez, mangez, puis payez.", tr: "Bir arkadaşınızla krepçide öğle yemeği yiyin: sipariş verin, yiyin, sonra ödeyin.", en: "Have lunch with a friend at the crêperie: order, eat, then pay." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Midi. Vous entrez dans une petite crêperie avec une amie. Ça sent le beurre !", tr: "Öğlen. Bir arkadaşınızla küçük bir krepçiye giriyorsunuz. Tereyağı kokuyor!", en: "Noon. You walk into a little crêperie with a friend. It smells of butter!" },
           say: [["F", "Bonjour mesdames ! Vous êtes combien ?"]],
           choices: [
             { fr: "Nous avons deux ans.", tr: "Biz iki yaşındayız.", en: "We are two years old.", ok: false,
               fb: { fr: "Deux ans ? Vous êtes très grandes pour des bébés 👶😄 ! Elle demande combien de personnes : « nous sommes deux ».", tr: "İki yaşında mı? Bebek için epey büyüksünüz 👶😄! Kaç kişi olduğunuzu soruyor: « nous sommes deux ».", en: "Two years old? You're very tall for babies 👶😄! She's asking how many people: « nous sommes deux »." } },
             { fr: "Bonjour ! Nous sommes deux.", tr: "Merhaba! İki kişiyiz.", en: "Hello! There are two of us.", ok: true, go: "b" },
             { fr: "Bonjour ! Ça coûte combien ?", tr: "Merhaba! Ne kadar tutuyor?", en: "Hello! How much does it cost?", ok: false,
               fb: { fr: "On n'a pas encore mangé 😄 ! « Vous êtes combien ? » = combien de personnes. Répondez « nous sommes deux ».", tr: "Daha yemek yemediniz 😄! « Vous êtes combien ? » = kaç kişisiniz. « Nous sommes deux » deyin.", en: "You haven't eaten yet 😄! « Vous êtes combien ? » = how many people. Answer « nous sommes deux »." } }
           ] },
      b: { say: [["F", "Très bien. Vous préférez une table près de la fenêtre ou au fond, au calme ?"]],
           choices: [
             { fr: "Près de la fenêtre, s'il vous plaît.", tr: "Pencerenin yanında, lütfen.", en: "By the window, please.", ok: true, go: "c" },
             { fr: "Au fond, s'il vous plaît. C'est plus calme.", tr: "Arkada, lütfen. Daha sakin.", en: "At the back, please. It's quieter.", ok: true, go: "c2" },
             { fr: "Dans la fenêtre, s'il vous plaît.", tr: "Pencerenin içinde, lütfen.", en: "In the window, please.", ok: false,
               fb: { fr: "Dans la fenêtre ? Comme une plante verte 🪴😄 ! On dit « près de la fenêtre ».", tr: "Pencerenin içinde mi? Saksı çiçeği gibi 🪴😄! « Près de la fenêtre » denir.", en: "In the window? Like a pot plant 🪴😄! You say « près de la fenêtre » (by the window)." } }
           ] },
      c: { scene: { fr: "La table est au soleil. Vous voyez la rue et les passants.", tr: "Masa güneşte. Sokağı ve yoldan geçenleri görüyorsunuz.", en: "The table is in the sun. You can see the street and the passers-by." },
           say: [["F", "Voilà votre table, avec un peu de soleil ! Et voici la carte."]],
           choices: [
             { fr: "Merci, c'est très joli ici !", tr: "Teşekkürler, burası çok güzel!", en: "Thank you, it's very nice here!", ok: true, go: "d" },
             { fr: "Merci, je suis très jolie ici !", tr: "Teşekkürler, ben burada çok güzelim!", en: "Thanks, I'm very pretty here!", ok: false,
               fb: { fr: "C'est vrai, sûrement 😄 ! Mais vous parlez de la table : « c'est très joli ici ».", tr: "Muhtemelen doğru 😄! Ama masadan bahsediyorsunuz: « c'est très joli ici ».", en: "Probably true 😄! But you mean the table: « c'est très joli ici »." } }
           ] },
      c2: { scene: { fr: "La table est dans un petit coin, avec des photos de Bretagne au mur.", tr: "Masa küçük bir köşede, duvarda Bretanya fotoğrafları var.", en: "The table is in a little corner, with photos of Brittany on the wall." },
           say: [["F", "Voilà, ici, c'est tranquille. Et voici la carte."]],
           choices: [
             { fr: "Je suis tranquille, merci.", tr: "Ben sakinim, teşekkürler.", en: "I'm calm, thanks.", ok: false,
               fb: { fr: "Tant mieux, pas de stress 😌😄 ! Mais elle parle de la table. Dites simplement « merci, c'est parfait ».", tr: "Ne güzel, stres yok 😌😄! Ama masadan bahsediyor. Sadece « merci, c'est parfait » deyin.", en: "Good, no stress 😌😄! But she means the table. Just say « merci, c'est parfait »." } },
             { fr: "Merci, c'est parfait.", tr: "Teşekkürler, mükemmel.", en: "Thanks, that's perfect.", ok: true, go: "d" }
           ] },
      d: { say: [["F", "Vous voulez boire quelque chose ? Nous avons du cidre ou du jus de pomme. C'est 3 € le verre."]],
           choices: [
             { fr: "Deux verres de cidre, s'il vous plaît.", tr: "İki bardak elma şarabı, lütfen.", en: "Two glasses of cider, please.", ok: true, go: "e" },
             { fr: "Je bois deux pommes.", tr: "İki elma içiyorum.", en: "I drink two apples.", ok: false,
               fb: { fr: "Boire des pommes, c'est difficile 🍎😄 ! Dites « deux jus de pomme » ou « deux verres de cidre ».", tr: "Elma içmek zor 🍎😄! « Deux jus de pomme » ya da « deux verres de cidre » deyin.", en: "Drinking apples is tricky 🍎😄! Say « deux jus de pomme » or « deux verres de cidre »." } },
             { fr: "Deux jus de pomme, s'il vous plaît.", tr: "İki elma suyu, lütfen.", en: "Two apple juices, please.", ok: true, go: "e" }
           ] },
      e: { say: [["F2", "Moi, je prends une galette complète : jambon, œuf, fromage !"], ["F", "Toutes nos galettes sont à 9 €. Et pour vous, madame ?"]],
           choices: [
             { fr: "Moi aussi, je suis complète.", tr: "Ben de tamamım.", en: "Me too, I'm complete.", ok: false,
               fb: { fr: "Vous êtes complète, comme un hôtel le 14 juillet 🏨😄 ? On dit « pour moi aussi, une complète ».", tr: "14 Temmuz'da bir otel gibi dolu musunuz 🏨😄? « Pour moi aussi, une complète » denir.", en: "You're full up, like a hotel on Bastille Day 🏨😄? You say « pour moi aussi, une complète »." } },
             { fr: "Pour moi aussi, une complète, s'il vous plaît.", tr: "Bana da bir komple galette, lütfen.", en: "A complète for me too, please.", ok: true, go: "f" },
             { fr: "Pour moi, une galette au fromage et aux champignons, s'il vous plaît.", tr: "Bana peynirli ve mantarlı bir galette, lütfen.", en: "For me, a cheese and mushroom galette, please.", ok: true, go: "f" }
           ] },
      f: { scene: { fr: "Les galettes sont délicieuses. Vos assiettes sont vides !", tr: "Galette'ler çok lezzetli. Tabaklarınız boş!", en: "The galettes are delicious. Your plates are empty!" },
           say: [["F", "C'était bon ? Un dessert ? Nos crêpes sucrées sont à 5 €."], ["F2", "Oh oui ! Moi, une crêpe au citron !"]],
           choices: [
             { fr: "Oui, c'était délicieux ! Une crêpe au chocolat pour moi, s'il vous plaît.", tr: "Evet, çok lezzetliydi! Bana bir çikolatalı krep, lütfen.", en: "Yes, it was delicious! A chocolate crêpe for me, please.", ok: true, go: "g" },
             { fr: "Oui, je suis bonne !", tr: "Evet, ben iyiyim!", en: "Yes, I'm good!", ok: false,
               fb: { fr: "Attention, « je suis bonne » a un autre sens 😳😄 ! Pour le repas, dites « c'était bon » ou « c'était délicieux ».", tr: "Dikkat, « je suis bonne » başka anlama gelir 😳😄! Yemek için « c'était bon » ya da « c'était délicieux » deyin.", en: "Careful, « je suis bonne » means something else 😳😄! For the meal, say « c'était bon » or « c'était délicieux »." } },
             { fr: "Oui, très bon ! Une crêpe caramel au beurre salé, s'il vous plaît.", tr: "Evet, çok güzeldi! Bir tuzlu tereyağlı karamelli krep, lütfen.", en: "Yes, very good! A salted butter caramel crêpe, please.", ok: true, go: "g" }
           ] },
      g: { say: [["F", "Et voilà vos crêpes ! Attention, l'assiette est très chaude."]],
           choices: [
             { fr: "Merci ! J'ai chaud.", tr: "Teşekkürler! Sıcakladım.", en: "Thanks! I'm hot.", ok: false,
               fb: { fr: "C'est l'assiette qui est chaude, pas vous 🔥😄 ! Dites « merci, ça sent très bon ! ».", tr: "Sıcak olan tabak, siz değil 🔥😄! « Merci, ça sent très bon ! » deyin.", en: "It's the plate that's hot, not you 🔥😄! Say « merci, ça sent très bon ! »." } },
             { fr: "Merci ! Ça sent très bon !", tr: "Teşekkürler! Çok güzel kokuyor!", en: "Thank you! It smells really good!", ok: true, go: "h" },
             { fr: "Merci, je fais attention !", tr: "Teşekkürler, dikkat ederim!", en: "Thanks, I'll be careful!", ok: true, go: "h" }
           ] },
      h: { scene: { fr: "Vous avez fini. C'est l'heure de payer.", tr: "Bitirdiniz. Ödeme zamanı.", en: "You've finished. Time to pay." },
           choices: [
             { fr: "Madame ! Le menu, s'il vous plaît !", tr: "Hanımefendi! Menü, lütfen!", en: "Excuse me! The menu, please!", ok: false,
               fb: { fr: "Encore une crêpe ? 😄 Pour payer, on demande « l'addition, s'il vous plaît ».", tr: "Bir krep daha mı? 😄 Ödemek için « l'addition, s'il vous plaît » denir.", en: "Another crêpe? 😄 To pay, you ask for « l'addition, s'il vous plaît »." } },
             { fr: "Madame ! L'addition, s'il vous plaît !", tr: "Hanımefendi! Hesap, lütfen!", en: "Excuse me! The bill, please!", ok: true, go: "i" },
             { fr: "Madame ! Combien je suis ?", tr: "Hanımefendi! Ben kaç kişiyim?", en: "Excuse me! How many am I?", ok: false,
               fb: { fr: "Vous êtes une seule personne, promis 😄 ! Demandez « l'addition, s'il vous plaît » ou « ça fait combien ? ».", tr: "Tek kişisiniz, söz 😄! « L'addition, s'il vous plaît » ya da « ça fait combien ? » deyin.", en: "You're just one person, promise 😄! Ask « l'addition, s'il vous plaît » or « ça fait combien ? »." } }
           ] },
      i: { say: [["F", "Alors : deux boissons, deux galettes, deux crêpes… ça fait 34 € en tout."], ["F2", "On partage ?"]],
           choices: [
             { fr: "Oui, on partage : 17 € chacune.", tr: "Evet, bölüşelim: kişi başı 17 €.", en: "Yes, let's split it: 17 € each.", ok: true, go: "j" },
             { fr: "Non, aujourd'hui, c'est moi qui invite !", tr: "Hayır, bugün ben ısmarlıyorum!", en: "No, today it's my treat!", ok: true, go: "j2" },
             { fr: "Oui, on partage : 34 € chacune.", tr: "Evet, bölüşelim: kişi başı 34 €.", en: "Yes, let's split it: 34 € each.", ok: false,
               fb: { fr: "La crêperie va adorer 😄💶 ! 34 divisé par 2 = 17. Donc « 17 € chacune ».", tr: "Krepçi buna bayılır 😄💶! 34 bölü 2 = 17. Yani « 17 € chacune ».", en: "The crêperie would love that 😄💶! 34 divided by 2 = 17. So « 17 € chacune »." } }
           ] },
      j: { say: [["F", "Pas de problème : 17 € et 17 €. Vous payez comment, madame ?"]],
           choices: [
             { fr: "Par carte, s'il vous plaît.", tr: "Kartla, lütfen.", en: "By card, please.", ok: true, go: "fin" },
             { fr: "Avec la carte de la crêperie.", tr: "Krepçinin menüsüyle.", en: "With the crêperie's menu.", ok: false,
               fb: { fr: "La carte du restaurant, c'est la liste des plats 📜😄 ! Pour payer : « par carte » (bancaire) ou « en espèces ».", tr: "Restoranın « carte »ı menüdür 📜😄! Ödemek için: « par carte » (banka kartı) ya da « en espèces ».", en: "The restaurant's « carte » is the menu 📜😄! To pay: « par carte » (bank card) or « en espèces » (cash)." } },
             { fr: "En espèces, voilà 20 €.", tr: "Nakit, buyurun 20 €.", en: "In cash, here's 20 €.", ok: true, go: "fin" }
           ] },
      j2: { say: [["F2", "Oh, merci, tu es gentille ! La prochaine fois, c'est moi qui invite."]],
           choices: [
             { fr: "Merci, vous êtes gentille aussi.", tr: "Teşekkürler, siz de naziksiniz.", en: "Thank you, you're kind too.", ok: false,
               fb: { fr: "C'est votre amie, pas votre banquière 😄 ! Avec une amie, on dit « tu » : « d'accord, avec plaisir ! ».", tr: "O sizin arkadaşınız, bankacınız değil 😄! Arkadaşla « tu » denir: « d'accord, avec plaisir ! ».", en: "She's your friend, not your bank manager 😄! With a friend, use « tu »: « d'accord, avec plaisir ! »." } },
             { fr: "D'accord, avec plaisir ! Madame, je paie par carte, s'il vous plaît.", tr: "Tamam, memnuniyetle! Hanımefendi, kartla ödüyorum, lütfen.", en: "OK, with pleasure! Excuse me, I'll pay by card, please.", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["F", "Merci beaucoup, mesdames ! À bientôt !"]],
             scene: { fr: "Vous sortez le ventre plein et le sourire aux lèvres. Commander à la crêperie en français : réussi ! 🥞🎉", tr: "Karnınız tok ve yüzünüzde bir gülümsemeyle çıkıyorsunuz. Krepçide Fransızca sipariş: başarılı! 🥞🎉", en: "You leave with a full tummy and a smile. Ordering at the crêperie in French: done! 🥞🎉" } }
    } },

  /* ───────────── 22. Un cadeau pour son mari ───────────── */
  { id: "av-cadeau-mari", level: "A1", emoji: "🎁",
    t: { fr: "Un cadeau pour mon mari", tr: "Kocama bir hediye", en: "A present for my husband" },
    goal: { fr: "Achetez un cadeau d'anniversaire pour votre mari dans un grand magasin.", tr: "Bir büyük mağazada kocanız için bir doğum günü hediyesi alın.", en: "Buy a birthday present for your husband in a department store." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Samedi, c'est l'anniversaire de votre mari. Vous entrez dans un grand magasin.", tr: "Cumartesi kocanızın doğum günü. Bir büyük mağazaya giriyorsunuz.", en: "Saturday is your husband's birthday. You walk into a department store." },
           say: [["M", "Bonjour madame ! Je peux vous aider ?"]],
           choices: [
             { fr: "Oui, je cherche mon mari.", tr: "Evet, kocamı arıyorum.", en: "Yes, I'm looking for my husband.", ok: false,
               fb: { fr: "Oh non, il est perdu dans le magasin ? 😄 Vous cherchez un cadeau POUR votre mari : « je cherche un cadeau pour mon mari ».", tr: "Eyvah, mağazada mı kayboldu? 😄 Kocanız İÇİN bir hediye arıyorsunuz: « je cherche un cadeau pour mon mari ».", en: "Oh no, is he lost in the shop? 😄 You're looking for a present FOR your husband: « je cherche un cadeau pour mon mari »." } },
             { fr: "Oui, merci. Je cherche un cadeau pour mon mari.", tr: "Evet, teşekkürler. Kocama bir hediye arıyorum.", en: "Yes, thanks. I'm looking for a present for my husband.", ok: true, go: "b" },
             { fr: "Non, merci, je regarde.", tr: "Hayır, teşekkürler, sadece bakıyorum.", en: "No thanks, I'm just looking.", ok: false,
               fb: { fr: "C'est très poli ! Mais vous avez besoin d'une idée de cadeau 🎁. Acceptez l'aide : « oui, je cherche un cadeau… ».", tr: "Çok kibar! Ama bir hediye fikrine ihtiyacınız var 🎁. Yardımı kabul edin: « oui, je cherche un cadeau… ».", en: "Very polite! But you need a present idea 🎁. Accept the help: « oui, je cherche un cadeau… »." } }
           ] },
      b: { say: [["M", "Avec plaisir ! C'est pour quelle occasion ?"]],
           choices: [
             { fr: "C'est pour son anniversaire, samedi.", tr: "Cumartesi günkü doğum günü için.", en: "It's for his birthday, on Saturday.", ok: true, go: "c" },
             { fr: "Joyeux anniversaire !", tr: "Doğum günün kutlu olsun!", en: "Happy birthday!", ok: false,
               fb: { fr: "Ce n'est pas l'anniversaire du vendeur 🎂😄 ! Expliquez : « c'est pour son anniversaire ».", tr: "Satıcının doğum günü değil 🎂😄! Açıklayın: « c'est pour son anniversaire ».", en: "It's not the sales assistant's birthday 🎂😄! Explain: « c'est pour son anniversaire »." } },
             { fr: "C'est pour son anniversaire, il est samedi.", tr: "Doğum günü için, o cumartesi.", en: "It's for his birthday, he is Saturday.", ok: false,
               fb: { fr: "Votre mari s'appelle Samedi ? 😄 On dit « c'est samedi » ou simplement « c'est pour son anniversaire, samedi ».", tr: "Kocanızın adı Cumartesi mi? 😄 « C'est samedi » ya da sadece « c'est pour son anniversaire, samedi » denir.", en: "Is your husband called Saturday? 😄 Say « c'est samedi » or just « c'est pour son anniversaire, samedi »." } }
           ] },
      c: { say: [["M", "Super ! Qu'est-ce qu'il aime ?"]],
           choices: [
             { fr: "Il aime beaucoup le sport.", tr: "Sporu çok sever.", en: "He really likes sport.", ok: true, go: "d1" },
             { fr: "Il aime beaucoup le café.", tr: "Kahveyi çok sever.", en: "He really likes coffee.", ok: true, go: "d2" },
             { fr: "Il aime moi.", tr: "Beni sever.", en: "He likes me.", ok: false,
               fb: { fr: "C'est mignon 🥰 (on dit « il m'aime »), mais vous n'êtes pas en vente 😄 ! Parlez de ses goûts : « il aime le sport ».", tr: "Çok tatlı 🥰 (« il m'aime » denir), ama siz satılık değilsiniz 😄! Zevklerinden bahsedin: « il aime le sport ».", en: "That's sweet 🥰 (you'd say « il m'aime »), but you're not for sale 😄! Talk about his tastes: « il aime le sport »." } }
           ] },
      d1: { scene: { fr: "Vous allez au rayon sport.", tr: "Spor reyonuna gidiyorsunuz.", en: "You go to the sports department." },
           say: [["M", "Regardez ce sac de sport : il est à 35 €. Il existe en bleu ou en noir."]],
           choices: [
             { fr: "Je prends le bleu, s'il vous plaît.", tr: "Maviyi alıyorum, lütfen.", en: "I'll take the blue one, please.", ok: true, go: "e1" },
             { fr: "Je prends le blanc, s'il vous plaît.", tr: "Beyazı alıyorum, lütfen.", en: "I'll take the white one, please.", ok: false,
               fb: { fr: "Il n'y a pas de blanc 🤍😄 ! Seulement bleu ou noir. Choisissez une des deux couleurs.", tr: "Beyaz yok 🤍😄! Sadece mavi ya da siyah. İki renkten birini seçin.", en: "There's no white 🤍😄! Only blue or black. Pick one of the two colours." } },
             { fr: "Le noir, s'il vous plaît.", tr: "Siyahı, lütfen.", en: "The black one, please.", ok: true, go: "e1" }
           ] },
      e1: { say: [["M", "Bon choix ! Il est grand et très pratique pour la salle de sport."]],
           choices: [
             { fr: "Elle est parfaite, je la prends !", tr: "O mükemmel, onu alıyorum!", en: "It's perfect, I'll take it! (feminine)", ok: false,
               fb: { fr: "Petit piège : on dit « UN sac », c'est masculin 😉. Donc « il est parfait, je le prends ! ».", tr: "Küçük tuzak: « UN sac » denir, eril 😉. Yani « il est parfait, je le prends ! ».", en: "Little trap: it's « UN sac », masculine 😉. So « il est parfait, je le prends ! »." } },
             { fr: "Il est parfait, je le prends !", tr: "Mükemmel, onu alıyorum!", en: "It's perfect, I'll take it!", ok: true, go: "f" },
             { fr: "Je prends le sac de mon mari.", tr: "Kocamın çantasını alıyorum.", en: "I'm taking my husband's bag.", ok: false,
               fb: { fr: "Il n'a pas encore ce sac, c'est une surprise 😄🎁 ! Dites « il est parfait, je le prends ».", tr: "Henüz o çanta onun değil, sürpriz 😄🎁! « Il est parfait, je le prends » deyin.", en: "He doesn't have this bag yet, it's a surprise 😄🎁! Say « il est parfait, je le prends »." } }
           ] },
      d2: { scene: { fr: "Vous allez au rayon cuisine.", tr: "Mutfak reyonuna gidiyorsunuz.", en: "You go to the kitchen department." },
           say: [["M", "Nous avons un joli coffret : une grande tasse et un paquet de café. C'est 25 €."]],
           choices: [
             { fr: "Je voudrais une tasse de café, s'il vous plaît.", tr: "Bir fincan kahve istiyorum, lütfen.", en: "I'd like a cup of coffee, please.", ok: false,
               fb: { fr: "Vous n'êtes pas au café ☕😄 ! Vous voulez le coffret : « oh, c'est joli, je le prends ! ».", tr: "Kafede değilsiniz ☕😄! Kutuyu istiyorsunuz: « oh, c'est joli, je le prends ! ».", en: "You're not in a café ☕😄! You want the gift box: « oh, c'est joli, je le prends ! »." } },
             { fr: "Oh, c'est joli ! Je le prends.", tr: "Ah, çok güzel! Onu alıyorum.", en: "Oh, that's lovely! I'll take it.", ok: true, go: "e2" },
             { fr: "C'est combien ?", tr: "Ne kadar?", en: "How much is it?", ok: false,
               fb: { fr: "Il vient de le dire : 25 € 👂😄. Écoutez bien les prix ! Vous pouvez dire « je le prends ».", tr: "Az önce söyledi: 25 € 👂😄. Fiyatları iyi dinleyin! « Je le prends » diyebilirsiniz.", en: "He just said it: 25 € 👂😄. Listen for prices! You can say « je le prends »." } }
           ] },
      e2: { say: [["M", "La tasse existe en rouge ou en vert. Vous préférez laquelle ?"]],
           choices: [
             { fr: "La rouge, s'il vous plaît.", tr: "Kırmızıyı, lütfen.", en: "The red one, please.", ok: true, go: "f" },
             { fr: "Le rouge, s'il vous plaît.", tr: "Kırmızıyı, lütfen. (eril)", en: "The red one, please. (masculine)", ok: false,
               fb: { fr: "« UNE tasse », c'est féminin 😉. Donc « la rouge » ou « la verte ».", tr: "« UNE tasse » dişildir 😉. Yani « la rouge » ya da « la verte ».", en: "« UNE tasse » is feminine 😉. So « la rouge » or « la verte »." } },
             { fr: "La verte, s'il vous plaît.", tr: "Yeşili, lütfen.", en: "The green one, please.", ok: true, go: "f" }
           ] },
      f: { say: [["M", "Très bien. Je vous fais un paquet cadeau ? C'est gratuit."]],
           choices: [
             { fr: "Oui, je fais un paquet.", tr: "Evet, ben bir paket yapıyorum.", en: "Yes, I'm making a package.", ok: false,
               fb: { fr: "« Je vous fais » = c'est LUI qui fait le paquet 🎀. Répondez « oui, s'il vous plaît ! ».", tr: "« Je vous fais » = paketi O yapıyor 🎀. « Oui, s'il vous plaît ! » diye cevap verin.", en: "« Je vous fais » = HE wraps it 🎀. Answer « oui, s'il vous plaît ! »." } },
             { fr: "Oui, s'il vous plaît ! C'est une surprise.", tr: "Evet, lütfen! Bu bir sürpriz.", en: "Yes, please! It's a surprise.", ok: true, go: "g" },
             { fr: "Oui, avec plaisir, merci !", tr: "Evet, memnuniyetle, teşekkürler!", en: "Yes, I'd love that, thanks!", ok: true, go: "g" }
           ] },
      g: { say: [["M", "Voilà, c'est très joli ! Vous payez comment ?"]],
           choices: [
             { fr: "Par carte, s'il vous plaît.", tr: "Kartla, lütfen.", en: "By card, please.", ok: true, go: "h" },
             { fr: "Je paie avec mon mari.", tr: "Kocamla ödüyorum.", en: "I'm paying with my husband.", ok: false,
               fb: { fr: "Il va payer son cadeau ? Ce n'est plus une surprise 😄 ! Dites « par carte » ou « en espèces ».", tr: "Kendi hediyesini o mu ödeyecek? O zaman sürpriz olmaz 😄! « Par carte » ya da « en espèces » deyin.", en: "He's paying for his own present? No more surprise 😄! Say « par carte » or « en espèces »." } },
             { fr: "En espèces.", tr: "Nakit.", en: "In cash.", ok: true, go: "h" }
           ] },
      h: { say: [["M", "Je mets aussi un ticket cadeau dans le sac ? Comme ça, il peut échanger."]],
           choices: [
             { fr: "Oui, bonne idée, merci !", tr: "Evet, iyi fikir, teşekkürler!", en: "Yes, good idea, thanks!", ok: true, go: "fin" },
             { fr: "Oui, un ticket de métro, merci.", tr: "Evet, bir metro bileti, teşekkürler.", en: "Yes, a metro ticket, thanks.", ok: false,
               fb: { fr: "Il ne vend pas de tickets de métro 🚇😄 ! Un « ticket cadeau » = un ticket sans prix, pour échanger. Répondez « oui, bonne idée ».", tr: "Metro bileti satmıyor 🚇😄! « Ticket cadeau » = değiştirmek için fiyatsız fiş. « Oui, bonne idée » deyin.", en: "He doesn't sell metro tickets 🚇😄! A « ticket cadeau » is a gift receipt with no price, for exchanges. Answer « oui, bonne idée »." } },
             { fr: "Non, merci. Il va aimer, j'en suis sûre !", tr: "Hayır, teşekkürler. Beğenecek, eminim!", en: "No thanks. He'll love it, I'm sure!", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["M", "Bon anniversaire à votre mari ! Au revoir, madame."]],
             scene: { fr: "Vous rentrez avec un joli paquet. Votre mari va être content… et vous avez tout fait en français ! 🎁🎉", tr: "Güzel bir paketle eve dönüyorsunuz. Kocanız çok sevinecek… ve her şeyi Fransızca yaptınız! 🎁🎉", en: "You head home with a lovely parcel. Your husband will be happy… and you did it all in French! 🎁🎉" } }
    } },

  /* ───────────── 23. Au tabac-presse ───────────── */
  { id: "av-tabac-presse", level: "A1", emoji: "📰",
    t: { fr: "Timbres et journal au tabac-presse", tr: "Tütüncü-gazete bayisinde pul ve gazete", en: "Stamps and a paper at the newsagent's" },
    goal: { fr: "Achetez trois timbres pour la Turquie et quelque chose à lire, puis trouvez la boîte aux lettres.", tr: "Türkiye için üç pul ve okuyacak bir şey alın, sonra posta kutusunu bulun.", en: "Buy three stamps for Turkey and something to read, then find the postbox." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous avez trois cartes postales pour votre famille en Turquie. Vous entrez au tabac-presse du quartier.", tr: "Türkiye'deki aileniz için üç kartpostalınız var. Mahalledeki tütüncü-gazete bayisine giriyorsunuz.", en: "You have three postcards for your family in Turkey. You go into the local newsagent's." },
           say: [["M", "Bonjour madame !"]],
           choices: [
             { fr: "Bonjour monsieur ! Vous avez des timbres ?", tr: "Merhaba beyefendi! Pulunuz var mı?", en: "Hello! Do you have stamps?", ok: true, go: "b" },
             { fr: "Bonjour ! Je voudrais un tabac, s'il vous plaît.", tr: "Merhaba! Bir tütün istiyorum, lütfen.", en: "Hello! I'd like a tobacco, please.", ok: false,
               fb: { fr: "Vous ne fumez pas 🚭😄 ! Le « tabac », c'est le nom du magasin. Demandez « vous avez des timbres ? ».", tr: "Sigara içmiyorsunuz 🚭😄! « Tabac » dükkânın adı. « Vous avez des timbres ? » diye sorun.", en: "You don't smoke 🚭😄! « Tabac » is the name of the shop. Ask « vous avez des timbres ? »." } },
             { fr: "Bonjour ! Vous êtes des timbres ?", tr: "Merhaba! Siz pul musunuz?", en: "Hello! Are you stamps?", ok: false,
               fb: { fr: "Le monsieur n'est pas un timbre 😄✉️ ! Pour demander, on utilise « avoir » : « vous avez des timbres ? ».", tr: "Beyefendi pul değil 😄✉️! Sormak için « avoir » kullanılır: « vous avez des timbres ? ».", en: "The man is not a stamp 😄✉️! Use « avoir » to ask: « vous avez des timbres ? »." } }
           ] },
      b: { say: [["M", "Oui, bien sûr. C'est pour la France ?"]],
           choices: [
             { fr: "Oui, c'est pour la Turquie.", tr: "Evet, Türkiye için.", en: "Yes, it's for Turkey.", ok: false,
               fb: { fr: "« Oui » = la France, mais vous dites la Turquie 🤔😄. Commencez par « non » : « non, c'est pour la Turquie ».", tr: "« Oui » = Fransa, ama Türkiye diyorsunuz 🤔😄. « Non » ile başlayın: « non, c'est pour la Turquie ».", en: "« Oui » = France, but you said Turkey 🤔😄. Start with « non »: « non, c'est pour la Turquie »." } },
             { fr: "Non, c'est pour la Turquie.", tr: "Hayır, Türkiye için.", en: "No, it's for Turkey.", ok: true, go: "c" },
             { fr: "Non, c'est pour mes cartes postales.", tr: "Hayır, kartpostallarım için.", en: "No, it's for my postcards.", ok: false,
               fb: { fr: "D'accord, mais il veut savoir le pays 🌍. Répondez « non, c'est pour la Turquie ».", tr: "Tamam, ama ülkeyi öğrenmek istiyor 🌍. « Non, c'est pour la Turquie » deyin.", en: "OK, but he wants to know the country 🌍. Answer « non, c'est pour la Turquie »." } }
           ] },
      c: { say: [["M", "Pour la Turquie, c'est 2,10 € le timbre. Vous en voulez combien ?"]],
           choices: [
             { fr: "J'en veux 2,10 €.", tr: "2,10 € istiyorum.", en: "I want 2.10 € of them.", ok: false,
               fb: { fr: "2,10 €, c'est le prix d'un timbre 💶. Il demande combien de timbres : « trois, s'il vous plaît ».", tr: "2,10 € bir pulun fiyatı 💶. Kaç pul istediğinizi soruyor: « trois, s'il vous plaît ».", en: "2.10 € is the price of one stamp 💶. He's asking how many: « trois, s'il vous plaît »." } },
             { fr: "Trois, s'il vous plaît.", tr: "Üç tane, lütfen.", en: "Three, please.", ok: true, go: "d" },
             { fr: "Je voudrais trois cartes postales.", tr: "Üç kartpostal istiyorum.", en: "I'd like three postcards.", ok: false,
               fb: { fr: "Vous avez déjà les cartes 😄 ! Vous voulez trois timbres : « trois, s'il vous plaît ».", tr: "Kartlar zaten sizde 😄! Üç pul istiyorsunuz: « trois, s'il vous plaît ».", en: "You already have the cards 😄! You want three stamps: « trois, s'il vous plaît »." } }
           ] },
      d: { say: [["M", "Voilà trois timbres : ça fait 6,30 €. Et avec ça ?"]],
           choices: [
             { fr: "Je voudrais aussi un journal, s'il vous plaît.", tr: "Bir de gazete istiyorum, lütfen.", en: "I'd also like a newspaper, please.", ok: true, go: "e1" },
             { fr: "Vous avez un magazine de sport ?", tr: "Spor dergisi var mı?", en: "Do you have a sports magazine?", ok: true, go: "e2" },
             { fr: "Non, je suis tout.", tr: "Hayır, ben hepsiyim.", en: "No, I am all.", ok: false,
               fb: { fr: "« Je suis tout » = vous êtes le monde entier 🌍😄 ! On dit « c'est tout »… mais vous voulez aussi quelque chose à lire !", tr: "« Je suis tout » = bütün dünya sizsiniz 🌍😄! « C'est tout » denir… ama okuyacak bir şey de istiyorsunuz!", en: "« Je suis tout » = you are the whole world 🌍😄! It's « c'est tout »… but you also want something to read!" } }
           ] },
      e1: { say: [["M", "Le journal d'aujourd'hui ? Il est à 1,50 €."]],
           choices: [
             { fr: "Oui, celui-là. C'est bien pour pratiquer le français !", tr: "Evet, şu. Fransızca pratik yapmak için iyi!", en: "Yes, that one. It's good for practising French!", ok: true, go: "f1" },
             { fr: "Non, le journal de demain, s'il vous plaît.", tr: "Hayır, yarının gazetesi, lütfen.", en: "No, tomorrow's paper, please.", ok: false,
               fb: { fr: "Le journal de demain ? Il n'existe pas encore 🔮😄 ! Prenez celui d'aujourd'hui : « oui, celui-là ».", tr: "Yarının gazetesi mi? Henüz yok 🔮😄! Bugünkünü alın: « oui, celui-là ».", en: "Tomorrow's paper? It doesn't exist yet 🔮😄! Take today's: « oui, celui-là »." } }
           ] },
      f1: { say: [["M", "Alors, 6,30 € et 1,50 € : ça fait 7,80 € en tout."]],
           choices: [
             { fr: "Voilà un billet de 10 €.", tr: "Buyurun, 10 €'luk bir banknot.", en: "Here's a 10 € note.", ok: true, go: "g1" },
             { fr: "Voilà 7,80 €.", tr: "Buyurun, 7,80 €.", en: "Here's 7.80 €.", ok: true, go: "h" },
             { fr: "Ça fait 9 € ?", tr: "9 € mu ediyor?", en: "That's 9 €?", ok: false,
               fb: { fr: "Presque ! 6,30 + 1,50 = 7,80 € 🧮. « Sept euros quatre-vingts ».", tr: "Neredeyse! 6,30 + 1,50 = 7,80 € 🧮. « Sept euros quatre-vingts ».", en: "Almost! 6.30 + 1.50 = 7.80 € 🧮. « Sept euros quatre-vingts »." } }
           ] },
      g1: { say: [["M", "Merci. Je vous rends 2,20 €."]],
           choices: [
             { fr: "Merci beaucoup !", tr: "Çok teşekkürler!", en: "Thank you very much!", ok: true, go: "h" },
             { fr: "Non, c'est moi qui rends 2,20 €.", tr: "Hayır, 2,20 €'yu ben geri veriyorum.", en: "No, I'm the one giving back 2.20 €.", ok: false,
               fb: { fr: "« Je vous rends » = il vous donne la monnaie 🪙. 10 − 7,80 = 2,20 €. Dites simplement « merci ! ».", tr: "« Je vous rends » = size para üstünü veriyor 🪙. 10 − 7,80 = 2,20 €. Sadece « merci ! » deyin.", en: "« Je vous rends » = he gives you your change 🪙. 10 − 7.80 = 2.20 €. Just say « merci ! »." } }
           ] },
      e2: { say: [["M", "Oui, il y a ce magazine de handball. Il est à 4 €."]],
           choices: [
             { fr: "Super, je la prends !", tr: "Süper, onu alıyorum! (dişil)", en: "Great, I'll take it! (feminine)", ok: false,
               fb: { fr: "Piège ! « magazine » finit par -e, mais c'est masculin : UN magazine 😉. Donc « je le prends ».", tr: "Tuzak! « magazine » -e ile bitiyor ama eril: UN magazine 😉. Yani « je le prends ».", en: "Trap! « magazine » ends in -e but it's masculine: UN magazine 😉. So « je le prends »." } },
             { fr: "Super, je le prends !", tr: "Süper, onu alıyorum!", en: "Great, I'll take it!", ok: true, go: "f2" }
           ] },
      f2: { say: [["M", "Alors, 6,30 € et 4 € : ça fait 10,30 € en tout."]],
           choices: [
             { fr: "Voilà un billet de 20 €.", tr: "Buyurun, 20 €'luk bir banknot.", en: "Here's a 20 € note.", ok: true, go: "g2" },
             { fr: "Voilà 10,30 €.", tr: "Buyurun, 10,30 €.", en: "Here's 10.30 €.", ok: true, go: "h" },
             { fr: "Voilà 10 €.", tr: "Buyurun, 10 €.", en: "Here's 10 €.", ok: false,
               fb: { fr: "Il manque 30 centimes 😄🪙 ! C'est 10,30 €, « dix euros trente ».", tr: "30 sent eksik 😄🪙! 10,30 €, « dix euros trente ».", en: "You're 30 cents short 😄🪙! It's 10.30 €, « dix euros trente »." } }
           ] },
      g2: { say: [["M", "Merci. Je vous rends 9,70 €."]],
           choices: [
             { fr: "Merci beaucoup !", tr: "Çok teşekkürler!", en: "Thank you very much!", ok: true, go: "h" },
             { fr: "Je n'ai pas de monnaie, désolée.", tr: "Bozuk param yok, kusura bakmayın.", en: "I don't have change, sorry.", ok: false,
               fb: { fr: "Pas de problème, c'est LUI qui vous rend la monnaie 😉 : 20 − 10,30 = 9,70 €. Dites « merci ! ».", tr: "Sorun değil, para üstünü veren O 😉: 20 − 10,30 = 9,70 €. « Merci ! » deyin.", en: "No problem, HE's giving you change 😉: 20 − 10.30 = 9.70 €. Say « merci ! »." } }
           ] },
      h: { scene: { fr: "Vous collez les timbres sur les cartes. Maintenant, il faut les poster.", tr: "Pulları kartlara yapıştırıyorsunuz. Şimdi onları postalamak gerekiyor.", en: "You stick the stamps on the cards. Now you need to post them." },
           choices: [
             { fr: "Il y a une boîte aux lettres près d'ici ?", tr: "Yakında bir posta kutusu var mı?", en: "Is there a postbox near here?", ok: true, go: "i" },
             { fr: "Il y a une boîte de nuit près d'ici ?", tr: "Yakında bir gece kulübü var mı?", en: "Is there a nightclub near here?", ok: false,
               fb: { fr: "Une boîte de nuit, c'est pour danser 💃😄 ! Pour les cartes, c'est « une boîte aux lettres ».", tr: "Gece kulübü dans etmek içindir 💃😄! Kartlar için « une boîte aux lettres » denir.", en: "A « boîte de nuit » is for dancing 💃😄! For cards, it's « une boîte aux lettres »." } },
             { fr: "Vous mangez mes cartes ?", tr: "Kartlarımı yer misiniz?", en: "Will you eat my cards?", ok: false,
               fb: { fr: "Il n'a pas faim 😄 ! Demandez où poster : « il y a une boîte aux lettres près d'ici ? ».", tr: "Aç değil 😄! Nereye atacağınızı sorun: « il y a une boîte aux lettres près d'ici ? ».", en: "He's not hungry 😄! Ask where to post them: « il y a une boîte aux lettres près d'ici ? »." } }
           ] },
      i: { say: [["M", "Oui, juste à côté, devant la boulangerie. Le facteur passe à 17 h."]],
           choices: [
             { fr: "Merci beaucoup ! Bonne journée !", tr: "Çok teşekkürler! İyi günler!", en: "Thanks a lot! Have a nice day!", ok: true, go: "fin" },
             { fr: "Merci ! Bonne nuit !", tr: "Teşekkürler! İyi geceler!", en: "Thanks! Good night!", ok: false,
               fb: { fr: "Il fait jour, et il travaille encore 😄🌞 ! Dites « bonne journée ».", tr: "Hava aydınlık ve o hâlâ çalışıyor 😄🌞! « Bonne journée » deyin.", en: "It's daytime and he's still working 😄🌞! Say « bonne journée »." } },
             { fr: "Merci, à 17 h, je passe le facteur !", tr: "Teşekkürler, saat 17'de postacıyı geçiyorum!", en: "Thanks, at 5 p.m. I'll overtake the postman!", ok: false,
               fb: { fr: "Une course contre le facteur ? 🏃‍♀️📮😄 C'est le facteur qui passe. Dites « merci beaucoup, bonne journée ! ».", tr: "Postacıyla yarış mı? 🏃‍♀️📮😄 Uğrayan postacı. « Merci beaucoup, bonne journée ! » deyin.", en: "A race against the postman? 🏃‍♀️📮😄 It's the postman who comes by. Say « merci beaucoup, bonne journée ! »." } }
           ] },
      fin: { end: "win", say: [["M", "Au revoir, madame, bonne lecture !"]],
             scene: { fr: "Les trois cartes sont dans la boîte aux lettres. Votre famille va être contente ! Bravo, tout en français ! 📮🎉", tr: "Üç kart posta kutusunda. Aileniz çok sevinecek! Bravo, hepsi Fransızca! 📮🎉", en: "The three cards are in the postbox. Your family will be pleased! Well done, all in French! 📮🎉" } }
    } },

  /* ───────────── 24. Le cours de yoga d'essai ───────────── */
  { id: "av-yoga-essai", level: "A1", emoji: "🧘",
    t: { fr: "Un cours de yoga d'essai", tr: "Deneme yoga dersi", en: "A trial yoga class" },
    goal: { fr: "Faites votre premier cours de yoga, puis décidez : vous vous inscrivez ou pas ?", tr: "İlk yoga dersinizi yapın, sonra karar verin: kaydolacak mısınız, yoksa olmayacak mısınız?", en: "Do your first yoga class, then decide: will you sign up or not?" },
    start: "a",
    nodes: {
      a: { scene: { fr: "Mardi, 18 h 45. Vous entrez dans un petit studio de yoga. Ça sent la lavande.", tr: "Salı, saat 18.45. Küçük bir yoga stüdyosuna giriyorsunuz. Lavanta kokuyor.", en: "Tuesday, 6:45 p.m. You walk into a small yoga studio. It smells of lavender." },
           say: [["F", "Bonsoir ! Vous venez pour le cours d'essai ?"]],
           choices: [
             { fr: "Oui, je viens de l'essai.", tr: "Evet, denemeden geliyorum.", en: "Yes, I come from the trial.", ok: false,
               fb: { fr: "« Je viens de… » = j'arrive d'un endroit 😄. Vous venez POUR le cours : « oui, c'est mon premier cours ».", tr: "« Je viens de… » = bir yerden geliyorum 😄. Ders İÇİN geldiniz: « oui, c'est mon premier cours ».", en: "« Je viens de… » = I'm coming from a place 😄. You've come FOR the class: « oui, c'est mon premier cours »." } },
             { fr: "Bonsoir ! Oui, c'est mon premier cours de yoga.", tr: "İyi akşamlar! Evet, bu benim ilk yoga dersim.", en: "Good evening! Yes, it's my first yoga class.", ok: true, go: "b" },
             { fr: "Non, je viens pour le cours d'essai.", tr: "Hayır, deneme dersi için geldim.", en: "No, I'm here for the trial class.", ok: false,
               fb: { fr: "Non… mais oui ? 😄 Vous êtes là pour l'essai, alors commencez par « oui ».", tr: "Hayır… ama evet mi? 😄 Deneme için buradasınız, o zaman « oui » ile başlayın.", en: "No… but yes? 😄 You're here for the trial, so start with « oui »." } }
           ] },
      b: { say: [["F", "Bienvenue ! Vous avez un tapis ?"]],
           choices: [
             { fr: "Non, je n'ai pas de tapis.", tr: "Hayır, matım yok.", en: "No, I don't have a mat.", ok: true, go: "c1" },
             { fr: "Oui, j'ai mon tapis dans mon sac.", tr: "Evet, matım çantamda.", en: "Yes, I have my mat in my bag.", ok: true, go: "c2" },
             { fr: "Non, je n'ai pas un tapis.", tr: "Hayır, bir matım yok.", en: "No, I don't have a mat. (wrong article)", ok: false,
               fb: { fr: "Presque ! Après « ne… pas », « un » devient « de » : « je n'ai pas DE tapis » 😉.", tr: "Neredeyse! « ne… pas »dan sonra « un », « de » olur: « je n'ai pas DE tapis » 😉.", en: "Almost! After « ne… pas », « un » becomes « de »: « je n'ai pas DE tapis » 😉." } }
           ] },
      c1: { say: [["F", "Pas de problème, je vous prête un tapis. Le bleu ou le violet ?"]],
           choices: [
             { fr: "Le violet, s'il vous plaît.", tr: "Mor olanı, lütfen.", en: "The purple one, please.", ok: true, go: "d" },
             { fr: "La violette, s'il vous plaît.", tr: "Menekşeyi, lütfen.", en: "The violet (flower), please.", ok: false,
               fb: { fr: "Une violette, c'est une petite fleur 🌸😄 ! Pour le tapis (masculin) : « le violet ».", tr: "« Violette » küçük bir çiçektir 🌸😄! Mat için (eril): « le violet ».", en: "A « violette » is a little flower 🌸😄! For the mat (masculine): « le violet »." } },
             { fr: "Le bleu, merci.", tr: "Mavi olanı, teşekkürler.", en: "The blue one, thanks.", ok: true, go: "d" }
           ] },
      c2: { say: [["F", "Parfait ! Vous pouvez laisser vos chaussures ici, s'il vous plaît."]],
           choices: [
             { fr: "Je garde mes chaussures, j'ai froid aux pieds.", tr: "Ayakkabılarımı çıkarmıyorum, ayaklarım üşüyor.", en: "I'll keep my shoes on, my feet are cold.", ok: false,
               fb: { fr: "Le yoga avec des baskets, c'est rare 👟😄 ! On fait du yoga pieds nus. Dites « d'accord, j'enlève mes chaussures ».", tr: "Spor ayakkabıyla yoga pek görülmez 👟😄! Yoga çıplak ayakla yapılır. « D'accord, j'enlève mes chaussures » deyin.", en: "Yoga in trainers is rare 👟😄! Yoga is done barefoot. Say « d'accord, j'enlève mes chaussures »." } },
             { fr: "D'accord, j'enlève mes chaussures.", tr: "Tamam, ayakkabılarımı çıkarıyorum.", en: "OK, I'll take my shoes off.", ok: true, go: "d" }
           ] },
      d: { scene: { fr: "Le cours commence. Il y a huit personnes. La prof parle doucement.", tr: "Ders başlıyor. Sekiz kişi var. Hoca yumuşak bir sesle konuşuyor.", en: "The class starts. There are eight people. The teacher speaks softly." },
           say: [["F2", "Bonsoir à tous ! Avant de commencer : est-ce que quelqu'un a mal quelque part ?"]],
           choices: [
             { fr: "Non, tout va bien, merci.", tr: "Hayır, her şey yolunda, teşekkürler.", en: "No, everything's fine, thanks.", ok: true, go: "e" },
             { fr: "Oui, j'ai un peu mal au dos.", tr: "Evet, belim biraz ağrıyor.", en: "Yes, my back hurts a little.", ok: true, go: "d2" },
             { fr: "Oui, je suis mal au dos.", tr: "Evet, ben sırt kötüyüm.", en: "Yes, I am bad back.", ok: false,
               fb: { fr: "Pour la douleur, on utilise « avoir » : « j'ai mal au dos » 😉. Et si tout va bien : « non, tout va bien ».", tr: "Ağrı için « avoir » kullanılır: « j'ai mal au dos » 😉. Her şey yolundaysa: « non, tout va bien ».", en: "For pain, use « avoir »: « j'ai mal au dos » 😉. And if all is well: « non, tout va bien »." } }
           ] },
      d2: { say: [["F2", "Merci de me le dire. Allez doucement, et si ça fait mal, vous arrêtez. D'accord ?"]],
           choices: [
             { fr: "Non, je continue, même si j'ai mal !", tr: "Hayır, ağrısa bile devam ediyorum!", en: "No, I'll keep going even if it hurts!", ok: false,
               fb: { fr: "Pas de héroïsme au yoga 🦸‍♀️😄 ! Si ça fait mal, on arrête. Dites « d'accord, merci ».", tr: "Yogada kahramanlık yok 🦸‍♀️😄! Ağrırsa durulur. « D'accord, merci » deyin.", en: "No heroics in yoga 🦸‍♀️😄! If it hurts, you stop. Say « d'accord, merci »." } },
             { fr: "D'accord, merci. Je vais doucement.", tr: "Tamam, teşekkürler. Yavaş yapacağım.", en: "OK, thanks. I'll go gently.", ok: true, go: "e" }
           ] },
      e: { say: [["F2", "On commence. Fermez les yeux… Inspirez… et expirez."]],
           choices: [
             { fr: "Je ferme la porte ?", tr: "Kapıyı kapatayım mı?", en: "Shall I close the door?", ok: false,
               fb: { fr: "Les YEUX, pas la porte 👀🚪😄 ! « D'accord, je ferme les yeux. »", tr: "GÖZLER, kapı değil 👀🚪😄! « D'accord, je ferme les yeux. »", en: "Your EYES, not the door 👀🚪😄! « D'accord, je ferme les yeux. »" } },
             { fr: "D'accord, je ferme les yeux.", tr: "Tamam, gözlerimi kapatıyorum.", en: "OK, I'm closing my eyes.", ok: true, go: "f" },
             { fr: "Je dors maintenant ?", tr: "Şimdi uyuyor muyum?", en: "Do I sleep now?", ok: false,
               fb: { fr: "Pas encore 😴😄 ! On respire, on ne dort pas. Dites « d'accord, je ferme les yeux ».", tr: "Henüz değil 😴😄! Nefes alıyoruz, uyumuyoruz. « D'accord, je ferme les yeux » deyin.", en: "Not yet 😴😄! We breathe, we don't sleep. Say « d'accord, je ferme les yeux »." } }
           ] },
      f: { say: [["F2", "Maintenant, le chien tête en bas : les mains au sol et les fesses en haut !"]],
           choices: [
             { fr: "Mais je n'ai pas de chien !", tr: "Ama benim köpeğim yok!", en: "But I don't have a dog!", ok: false,
               fb: { fr: "Pas besoin d'un vrai chien 🐶😄 ! C'est le nom d'une posture. Essayez : « comme ça ? »", tr: "Gerçek bir köpeğe gerek yok 🐶😄! Bu bir duruşun adı. Deneyin: « comme ça ? »", en: "No real dog needed 🐶😄! It's the name of a pose. Give it a go: « comme ça ? »" } },
             { fr: "Comme ça ? Oh là là, c'est difficile !", tr: "Böyle mi? Aman, çok zor!", en: "Like this? Oh my, it's hard!", ok: true, go: "g" },
             { fr: "Les fesses en bas ?", tr: "Kalçalar aşağıda mı?", en: "Bottom down?", ok: false,
               fb: { fr: "Non, en HAUT ⬆️, comme un V à l'envers 😄. Essayez et demandez « comme ça ? ».", tr: "Hayır, YUKARIDA ⬆️, ters bir V gibi 😄. Deneyin ve « comme ça ? » diye sorun.", en: "No, UP ⬆️, like an upside-down V 😄. Try it and ask « comme ça ? »." } }
           ] },
      g: { say: [["F2", "Très bien ! Ça va ? Pas de douleur ?"]],
           choices: [
             { fr: "Non, ça va bien, merci.", tr: "Hayır, iyiyim, teşekkürler.", en: "No, I'm fine, thanks.", ok: true, go: "h" },
             { fr: "Je suis chaude, mais ça va !", tr: "Ben sıcağım, ama iyiyim!", en: "I'm hot (wrong!), but I'm OK!", ok: false,
               fb: { fr: "Oups, « je suis chaude » a un autre sens en français 😳😄 ! Pour la température, on dit « j'ai chaud ».", tr: "Eyvah, « je suis chaude » Fransızcada başka anlama gelir 😳😄! Sıcaklık için « j'ai chaud » denir.", en: "Oops, « je suis chaude » means something else in French 😳😄! For temperature, say « j'ai chaud »." } },
             { fr: "J'ai chaud, mais ça va !", tr: "Sıcakladım ama iyiyim!", en: "I'm hot, but I'm fine!", ok: true, go: "h" }
           ] },
      h: { scene: { fr: "19 h 45. Le cours est fini. Vous êtes très détendue.", tr: "Saat 19.45. Ders bitti. Çok rahatlamış hissediyorsunuz.", en: "7:45 p.m. The class is over. You feel very relaxed." },
           say: [["F", "Alors, ce premier cours ? Vous voulez vous inscrire ? C'est 40 € par mois."]],
           choices: [
             { fr: "J'adore ! Je m'inscris.", tr: "Bayıldım! Kaydoluyorum.", en: "I love it! I'll sign up.", ok: true, go: "i1" },
             { fr: "C'est super, mais je vais réfléchir.", tr: "Harika, ama biraz düşüneceğim.", en: "It's great, but I'll think about it.", ok: true, go: "i2" },
             { fr: "Je suis très yoga !", tr: "Ben çok yogayım!", en: "I'm very yoga!", ok: false,
               fb: { fr: "Joli, mais ce n'est pas une réponse claire 🧘‍♀️😄. Dites « j'adore ! » ou « c'est super, mais je vais réfléchir ».", tr: "Hoş, ama net bir cevap değil 🧘‍♀️😄. « J'adore ! » ya da « c'est super, mais je vais réfléchir » deyin.", en: "Cute, but it's not a clear answer 🧘‍♀️😄. Say « j'adore ! » or « c'est super, mais je vais réfléchir »." } }
           ] },
      i1: { say: [["F", "Génial ! Il y a un cours le mardi et le jeudi à 19 h. Vous préférez quel jour ?"]],
           choices: [
             { fr: "Le mardi, c'est parfait.", tr: "Salı, mükemmel.", en: "Tuesday is perfect.", ok: true, go: "fin" },
             { fr: "Le dimanche, s'il vous plaît.", tr: "Pazar, lütfen.", en: "Sunday, please.", ok: false,
               fb: { fr: "Le dimanche, le studio dort 😴😄 ! Choisissez « le mardi » ou « le jeudi ».", tr: "Pazar günü stüdyo uyuyor 😴😄! « Le mardi » ya da « le jeudi » seçin.", en: "On Sundays the studio sleeps 😴😄! Choose « le mardi » or « le jeudi »." } },
             { fr: "Le jeudi, s'il vous plaît.", tr: "Perşembe, lütfen.", en: "Thursday, please.", ok: true, go: "fin" }
           ] },
      i2: { say: [["F", "Pas de problème ! Voici une carte avec les horaires et mon numéro."]],
           choices: [
             { fr: "Merci ! Au revoir pour toujours !", tr: "Teşekkürler! Sonsuza dek elveda!", en: "Thanks! Farewell forever!", ok: false,
               fb: { fr: "Très dramatique 🎭😄 ! Vous allez peut-être revenir. Dites « merci, à bientôt ! ».", tr: "Çok dramatik 🎭😄! Belki geri geleceksiniz. « Merci, à bientôt ! » deyin.", en: "Very dramatic 🎭😄! You might come back. Say « merci, à bientôt ! »." } },
             { fr: "Merci, à bientôt !", tr: "Teşekkürler, görüşmek üzere!", en: "Thanks, see you soon!", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["F", "Bonne soirée et à bientôt, namasté !"]],
             scene: { fr: "Vous sortez calme et légère. Un cours de yoga en français : réussi ! 🧘‍♀️🎉", tr: "Sakin ve hafiflemiş çıkıyorsunuz. Fransızca bir yoga dersi: başarılı! 🧘‍♀️🎉", en: "You leave calm and light. A yoga class in French: done! 🧘‍♀️🎉" } }
    } },

  /* ───────────── 25. Le chien de la voisine ───────────── */
  { id: "av-chien-voisine", level: "A1", emoji: "🐕",
    t: { fr: "Le chien de la voisine", tr: "Komşunun köpeği", en: "The neighbour's dog" },
    goal: { fr: "Promenez Biscuit, le chien de votre voisine, au parc, et ramenez-le à la maison.", tr: "Komşunuzun köpeği Biscuit'yi parkta gezdirin ve onu eve geri getirin.", en: "Walk Biscuit, your neighbour's dog, in the park and bring him back home." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Samedi, 10 h. Votre voisine, Madame Morel, a mal au pied. Vous allez promener son chien.", tr: "Cumartesi, saat 10. Komşunuz Madame Morel'in ayağı ağrıyor. Onun köpeğini gezdireceksiniz.", en: "Saturday, 10 a.m. Your neighbour, Madame Morel, has a sore foot. You're going to walk her dog." },
           say: [["F", "Bonjour ! Merci beaucoup ! Voici Biscuit, et voici la laisse."]],
           choices: [
             { fr: "Avec plaisir ! Il est gentil ?", tr: "Memnuniyetle! Uslu mu?", en: "With pleasure! Is he friendly?", ok: true, go: "b" },
             { fr: "De rien ! Je promène la laisse.", tr: "Rica ederim! Tasmayı gezdiriyorum.", en: "You're welcome! I'm walking the lead.", ok: false,
               fb: { fr: "La laisse toute seule, ça va être triste 😄 ! On promène le chien : « avec plaisir ! Il est gentil ? ».", tr: "Tek başına tasma, biraz hüzünlü olur 😄! Köpek gezdirilir: « avec plaisir ! Il est gentil ? ».", en: "Just the lead on its own would be sad 😄! You walk the dog: « avec plaisir ! Il est gentil ? »." } },
             { fr: "Bonjour, Biscuit ! Vous allez bien ?", tr: "Merhaba Biscuit! Nasılsınız?", en: "Hello, Biscuit! How are you? (formal)", ok: false,
               fb: { fr: "Très poli 🐶🎩😄 ! Mais à un chien, on dit « tu ». Parlez à la voisine : « avec plaisir ! Il est gentil ? ».", tr: "Çok kibar 🐶🎩😄! Ama köpeğe « tu » denir. Komşuyla konuşun: « avec plaisir ! Il est gentil ? ».", en: "Very polite 🐶🎩😄! But you say « tu » to a dog. Talk to your neighbour: « avec plaisir ! Il est gentil ? »." } }
           ] },
      b: { say: [["F", "Oh oui, très gentil ! Il a 4 ans et il adore courir. Vous revenez à quelle heure ?"]],
           choices: [
             { fr: "Il est 11 h.", tr: "Saat 11.", en: "It's 11 o'clock.", ok: false,
               fb: { fr: "Il est 10 h maintenant ⏰😄 ! Elle demande l'heure du retour : « je reviens à 11 h ».", tr: "Şu an saat 10 ⏰😄! Dönüş saatini soruyor: « je reviens à 11 h ».", en: "It's 10 o'clock now ⏰😄! She's asking when you'll be back: « je reviens à 11 h »." } },
             { fr: "Je reviens à 11 h.", tr: "Saat 11'de dönerim.", en: "I'll be back at 11.", ok: true, go: "c" },
             { fr: "Je suis 11 h.", tr: "Ben saat 11'im.", en: "I am 11 o'clock.", ok: false,
               fb: { fr: "Vous êtes une horloge ? 🕚😄 On dit « je reviens à 11 h ».", tr: "Siz bir saat misiniz? 🕚😄 « Je reviens à 11 h » denir.", en: "Are you a clock? 🕚😄 You say « je reviens à 11 h »." } }
           ] },
      c: { scene: { fr: "Au parc, une petite fille arrive en courant.", tr: "Parkta küçük bir kız koşarak geliyor.", en: "In the park, a little girl comes running up." },
           say: [["K", "Oh, un chien ! Je peux le caresser ?"]],
           choices: [
             { fr: "Oui, tu peux. Doucement !", tr: "Evet, sevebilirsin. Yavaşça!", en: "Yes, you can. Gently!", ok: true, go: "d" },
             { fr: "Oui, vous pouvez, madame.", tr: "Evet, sevebilirsiniz, hanımefendi.", en: "Yes, you may, madam.", ok: false,
               fb: { fr: "« Madame » ? Elle a six ans 😄 ! Avec un enfant, on dit « tu » : « oui, tu peux ».", tr: "« Madame » mı? Altı yaşında 😄! Çocukla « tu » denir: « oui, tu peux ».", en: "« Madame »? She's six 😄! With a child, use « tu »: « oui, tu peux »." } },
             { fr: "Oui, bien sûr ! Il est très gentil.", tr: "Evet, tabii! Çok uslu.", en: "Yes, of course! He's very friendly.", ok: true, go: "d" }
           ] },
      d: { say: [["K", "Il est trop mignon ! Il s'appelle comment ?"]],
           choices: [
             { fr: "Je m'appelle Biscuit.", tr: "Benim adım Biscuit.", en: "My name is Biscuit.", ok: false,
               fb: { fr: "Vous êtes un biscuit maintenant ? 🍪😄 C'est le chien : « IL s'appelle Biscuit ».", tr: "Artık bisküvi misiniz? 🍪😄 Köpek: « IL s'appelle Biscuit ».", en: "You're a biscuit now? 🍪😄 It's the dog: « IL s'appelle Biscuit »." } },
             { fr: "Il a 4 ans.", tr: "4 yaşında.", en: "He's 4.", ok: false,
               fb: { fr: "C'est vrai, mais elle demande son nom 😉. « Il s'appelle Biscuit. »", tr: "Doğru, ama adını soruyor 😉. « Il s'appelle Biscuit. »", en: "True, but she's asking his name 😉. « Il s'appelle Biscuit. »" } },
             { fr: "Il s'appelle Biscuit.", tr: "Adı Biscuit.", en: "His name is Biscuit.", ok: true, go: "e" }
           ] },
      e: { scene: { fr: "Tout à coup, Biscuit tire très fort sur la laisse… et il saute dans le bassin !", tr: "Birden Biscuit tasmayı çok sert çekiyor… ve havuza atlıyor!", en: "Suddenly Biscuit pulls hard on the lead… and jumps into the pond!" },
           say: [["M", "Madame ! Votre chien est dans l'eau !"]],
           choices: [
             { fr: "Oh non ! Biscuit, viens ici !", tr: "Eyvah! Biscuit, buraya gel!", en: "Oh no! Biscuit, come here!", ok: true, go: "f" },
             { fr: "Ce n'est pas mon chien.", tr: "O benim köpeğim değil.", en: "It's not my dog.", ok: false,
               fb: { fr: "C'est vrai… mais aujourd'hui, c'est votre responsabilité 😅🐕 ! Appelez-le : « Biscuit, viens ici ! ».", tr: "Doğru… ama bugün o sizin sorumluluğunuzda 😅🐕! Onu çağırın: « Biscuit, viens ici ! ».", en: "True… but today he's your responsibility 😅🐕! Call him: « Biscuit, viens ici ! »." } },
             { fr: "Biscuit, va dans l'eau !", tr: "Biscuit, suya gir!", en: "Biscuit, go in the water!", ok: false,
               fb: { fr: "Il est déjà dans l'eau, et il est très content 💦😄 ! Dites « viens ici ! ».", tr: "Zaten suda, hem de çok mutlu 💦😄! « Viens ici ! » deyin.", en: "He's already in the water, and very happy 💦😄! Say « viens ici ! »." } }
           ] },
      f: { scene: { fr: "Biscuit sort de l'eau et il se secoue… sur vous !", tr: "Biscuit sudan çıkıyor ve silkeleniyor… üstünüze!", en: "Biscuit gets out of the water and shakes himself… all over you!" },
           say: [["M", "Ha ha ! Il est tout mouillé, et vous aussi !"]],
           choices: [
             { fr: "Oui, je suis mouillée, mais il est content !", tr: "Evet, ıslandım ama o mutlu!", en: "Yes, I'm wet, but he's happy!", ok: true, go: "g" },
             { fr: "Oui, j'ai mouillé !", tr: "Evet, ıslattım!", en: "Yes, I have wet!", ok: false,
               fb: { fr: "Pour décrire, on utilise « être » : « je suis mouillée » 💦😉.", tr: "Tarif etmek için « être » kullanılır: « je suis mouillée » 💦😉.", en: "To describe yourself, use « être »: « je suis mouillée » 💦😉." } },
             { fr: "Oui, il fait mouillé aujourd'hui.", tr: "Evet, bugün hava ıslak.", en: "Yes, it's wet weather today.", ok: false,
               fb: { fr: "Il fait beau, c'est Biscuit le coupable 🐶💦😄 ! Dites « oui, je suis mouillée ! ».", tr: "Hava güzel, suçlu Biscuit 🐶💦😄! « Oui, je suis mouillée ! » deyin.", en: "The weather's fine, Biscuit's the culprit 🐶💦😄! Say « oui, je suis mouillée ! »." } }
           ] },
      g: { scene: { fr: "Il est 10 h 30. Il fait beau. Biscuit vous regarde, très content.", tr: "Saat 10.30. Hava güzel. Biscuit size çok mutlu bakıyor.", en: "It's 10:30. The weather's nice. Biscuit looks at you, very happy." },
           say: [["M", "Bonne promenade, madame !"]],
           choices: [
             { fr: "Merci ! Allez, Biscuit, on fait encore un tour du parc !", tr: "Teşekkürler! Hadi Biscuit, parkta bir tur daha atalım!", en: "Thanks! Come on, Biscuit, let's do another lap of the park!", ok: true, go: "h1" },
             { fr: "Merci ! Allez, Biscuit, on rentre à la maison.", tr: "Teşekkürler! Hadi Biscuit, eve dönüyoruz.", en: "Thanks! Come on, Biscuit, we're going home.", ok: true, go: "h2" },
             { fr: "Merci ! Bonne nuit !", tr: "Teşekkürler! İyi geceler!", en: "Thanks! Good night!", ok: false,
               fb: { fr: "Il est 10 h 30 du matin 🌞😄 ! Dites « merci ! » ou « bonne journée ! ».", tr: "Saat sabah 10.30 🌞😄! « Merci ! » ya da « bonne journée ! » deyin.", en: "It's 10:30 in the morning 🌞😄! Say « merci ! » or « bonne journée ! »." } }
           ] },
      h1: { scene: { fr: "Vous faites un grand tour. Biscuit sèche au soleil. À 11 h, vous sonnez chez la voisine.", tr: "Büyük bir tur atıyorsunuz. Biscuit güneşte kuruyor. Saat 11'de komşunun zilini çalıyorsunuz.", en: "You do a big lap. Biscuit dries in the sun. At 11 you ring your neighbour's bell." },
           say: [["F", "Ah, vous êtes à l'heure ! Oh, Biscuit a l'air très fatigué !"]],
           choices: [
             { fr: "Oui, il a fatigué.", tr: "Evet, o yorulttu.", en: "Yes, he has tired.", ok: false,
               fb: { fr: "Pour l'état, on dit « il EST fatigué » 😉. Essayez « oui, il est fatigué, mais très content ! ».", tr: "Durum için « il EST fatigué » denir 😉. « Oui, il est fatigué, mais très content ! » deneyin.", en: "For a state, it's « il EST fatigué » 😉. Try « oui, il est fatigué, mais très content ! »." } },
             { fr: "Oui, il est fatigué, mais très content !", tr: "Evet, yorgun ama çok mutlu!", en: "Yes, he's tired, but very happy!", ok: true, go: "i" }
           ] },
      h2: { scene: { fr: "À 10 h 45, vous sonnez chez la voisine. Biscuit est encore mouillé.", tr: "Saat 10.45'te komşunun zilini çalıyorsunuz. Biscuit hâlâ ıslak.", en: "At 10:45 you ring your neighbour's bell. Biscuit is still wet." },
           say: [["F", "Déjà là ? Oh là là, Biscuit est tout mouillé !"]],
           choices: [
             { fr: "Non, il n'est pas mouillé.", tr: "Hayır, ıslak değil.", en: "No, he's not wet.", ok: false,
               fb: { fr: "Il y a une petite flaque sous Biscuit… 💦😄 Dites la vérité : « oui, désolée, il adore le bassin ! ».", tr: "Biscuit'nin altında küçük bir su birikintisi var… 💦😄 Doğruyu söyleyin: « oui, désolée, il adore le bassin ! ».", en: "There's a little puddle under Biscuit… 💦😄 Tell the truth: « oui, désolée, il adore le bassin ! »." } },
             { fr: "Oui, désolée… il adore le bassin du parc !", tr: "Evet, kusura bakmayın… parktaki havuza bayılıyor!", en: "Yes, sorry… he loves the pond in the park!", ok: true, go: "i" }
           ] },
      i: { say: [["F", "Ha ha, c'est Biscuit ! Merci beaucoup. Vous voulez un café ?"]],
           choices: [
             { fr: "Oui, avec plaisir !", tr: "Evet, memnuniyetle!", en: "Yes, I'd love one!", ok: true, go: "fin" },
             { fr: "Non merci, c'est gentil. Une autre fois !", tr: "Hayır teşekkürler, çok naziksiniz. Başka bir zaman!", en: "No thanks, that's kind. Another time!", ok: true, go: "fin" },
             { fr: "Oui, un café pour Biscuit !", tr: "Evet, Biscuit'ye bir kahve!", en: "Yes, a coffee for Biscuit!", ok: false,
               fb: { fr: "Un café pour un chien ? Il va courir toute la nuit ☕🐕😄 ! Répondez pour vous : « oui, avec plaisir ».", tr: "Köpeğe kahve mi? Bütün gece koşar ☕🐕😄! Kendiniz için cevap verin: « oui, avec plaisir ».", en: "Coffee for a dog? He'd run around all night ☕🐕😄! Answer for yourself: « oui, avec plaisir »." } }
           ] },
      fin: { end: "win", say: [["F", "Merci encore ! Biscuit vous aime beaucoup, c'est sûr."]],
             scene: { fr: "Biscuit vous donne un petit coup de langue. Une belle matinée… et tout en français ! 🐕🎉", tr: "Biscuit sizi hafifçe yalıyor. Güzel bir sabah… ve hepsi Fransızca! 🐕🎉", en: "Biscuit gives you a little lick. A lovely morning… and all in French! 🐕🎉" } }
    } }
);
