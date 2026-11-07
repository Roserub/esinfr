/* Aventures A1 — 16 to 20: boulangerie le dimanche, marché aux puces, pique-nique entre collègues, guichet du musée, clé du casier */
(window.ADVENTURES = window.ADVENTURES || []).push(

  /* ───────────── 16. Boulangerie le dimanche ───────────── */
  { id: "av-boulangerie-dimanche", level: "A1", emoji: "🥖",
    t: { fr: "Dimanche matin à la boulangerie", tr: "Pazar sabahı fırında", en: "Sunday morning at the bakery" },
    goal: { fr: "Achetez votre pain et un dessert pour un déjeuner chez des amis, puis payez.", tr: "Ekmeğinizi ve arkadaşlarınızdaki öğle yemeği için bir tatlı alın, sonra ödeyin.", en: "Buy your bread and a dessert for lunch at your friends' place, then pay." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Dimanche, 8 h 30. Il y a une longue queue à la boulangerie. Ça sent bon le pain chaud !", tr: "Pazar, saat 8.30. Fırında uzun bir kuyruk var. Sıcak ekmek kokusu harika!", en: "Sunday, 8:30 a.m. There's a long queue at the bakery. It smells of warm bread!" },
           say: [["F", "Bonjour ! C'est à qui ?"]],
           choices: [
             { fr: "Bonsoir ! C'est à moi.", tr: "İyi akşamlar! Sıra bende.", en: "Good evening! It's my turn.", ok: false,
               fb: { fr: "Il est 8 h 30, le soleil se lève à peine 🌅😄 ! Le matin, on dit « bonjour ».", tr: "Saat 8.30, güneş daha yeni doğuyor 🌅😄! Sabah « bonjour » denir.", en: "It's 8:30, the sun is barely up 🌅😄! In the morning you say « bonjour »." } },
             { fr: "Bonjour ! C'est à moi.", tr: "Merhaba! Sıra bende.", en: "Hello! It's my turn.", ok: true, go: "b" },
             { fr: "Bonjour ! C'est à toi.", tr: "Merhaba! Sıra sende.", en: "Hello! It's your turn.", ok: false,
               fb: { fr: "Elle n'est pas dans la queue, elle travaille 😄 ! Et c'est votre tour : dites « c'est à moi ».", tr: "O kuyrukta değil, çalışıyor 😄! Ve sıra sizde: « c'est à moi » deyin.", en: "She's not in the queue, she's working 😄! And it's your turn: say « c'est à moi »." } }
           ] },
      b: { say: [["F", "Qu'est-ce que je vous sers ?"]],
           choices: [
             { fr: "Une baguette tradition, s'il vous plaît.", tr: "Bir geleneksel baget, lütfen.", en: "A traditional baguette, please.", ok: true, go: "c" },
             { fr: "Je sers une baguette.", tr: "Ben bir baget servis ediyorum.", en: "I'm serving a baguette.", ok: false,
               fb: { fr: "Vous voulez travailler à la boulangerie ? 😄 C'est elle qui sert. Dites simplement « une baguette, s'il vous plaît ».", tr: "Fırında çalışmak mı istiyorsunuz? 😄 Servis eden o. Sadece « une baguette, s'il vous plaît » deyin.", en: "Do you want a job at the bakery? 😄 She's the one serving. Just say « une baguette, s'il vous plaît »." } },
             { fr: "Deux croissants et deux pains au chocolat, s'il vous plaît.", tr: "İki kruvasan ve iki çikolatalı ekmek, lütfen.", en: "Two croissants and two pains au chocolat, please.", ok: true, go: "c2" }
           ] },
      c: { say: [["F", "Une tradition. Bien cuite ou pas trop cuite ?"]],
           choices: [
             { fr: "Pas trop cuite, s'il vous plaît.", tr: "Çok pişmiş olmasın, lütfen.", en: "Not too well done, please.", ok: true, go: "d" },
             { fr: "Je suis cuite.", tr: "Ben piştim.", en: "I'm cooked.", ok: false,
               fb: { fr: "Haha ! « Je suis cuite » = je suis très fatiguée ou j'ai un gros problème 😅. On parle de la baguette : « bien cuite » ou « pas trop cuite ».", tr: "Haha! « Je suis cuite » = çok yorgunum ya da başım büyük dertte 😅. Konu baget: « bien cuite » ya da « pas trop cuite ».", en: "Haha! « Je suis cuite » = I'm exhausted or in big trouble 😅. We're talking about the baguette: « bien cuite » or « pas trop cuite »." } },
             { fr: "Bien cuite, merci.", tr: "İyi pişmiş, teşekkürler.", en: "Well done, thanks.", ok: true, go: "d" }
           ] },
      c2: { say: [["F", "Oh, désolée, il reste un seul pain au chocolat ! Ça va ?"]],
           choices: [
             { fr: "Il reste où ?", tr: "Nerede kalıyor?", en: "Where does it stay?", ok: false,
               fb: { fr: "« Il reste un… » = il y a encore un… (le dernier !). Ce n'est pas une adresse 😄. Répondez « oui, ça va ».", tr: "« Il reste un… » = hâlâ bir tane var (sonuncusu!). Bu bir adres değil 😄. « Oui, ça va » diye cevap verin.", en: "« Il reste un… » = there's one left (the last one!). It's not an address 😄. Answer « oui, ça va »." } },
             { fr: "Oui, ça va ! Un pain au chocolat, c'est parfait.", tr: "Evet, olur! Bir çikolatalı ekmek, mükemmel.", en: "Yes, that's fine! One pain au chocolat is perfect.", ok: true, go: "d" },
             { fr: "Ça va bien, merci, et vous ?", tr: "İyiyim, teşekkürler, ya siz?", en: "I'm fine, thanks, and you?", ok: false,
               fb: { fr: "Elle ne demande pas comment vous allez 😄. « Ça va ? » ici = c'est d'accord pour vous ? Répondez « oui, ça va ! ».", tr: "Nasıl olduğunuzu sormuyor 😄. Burada « Ça va ? » = sizin için uygun mu? « Oui, ça va ! » deyin.", en: "She's not asking how you are 😄. Here « Ça va ? » = is that OK for you? Answer « oui, ça va ! »." } }
           ] },
      d: { scene: { fr: "À midi, vous mangez chez des amis. Vous voulez apporter un dessert.", tr: "Öğlen arkadaşlarınızda yemek yiyeceksiniz. Bir tatlı götürmek istiyorsunuz.", en: "At noon you're eating at some friends' place. You want to bring a dessert." },
           say: [["F", "Et avec ceci ?"]],
           choices: [
             { fr: "C'est tout, merci.", tr: "Hepsi bu, teşekkürler.", en: "That's all, thanks.", ok: false,
               fb: { fr: "Et le dessert pour vos amis ? 🍰 Ils vont être tristes 😄 ! Demandez un gâteau ou une tarte.", tr: "Peki arkadaşlarınızın tatlısı? 🍰 Üzülecekler 😄! Bir pasta ya da tart isteyin.", en: "What about dessert for your friends? 🍰 They'll be sad 😄! Ask for a cake or a tart." } },
             { fr: "Avec ceci.", tr: "Bununla.", en: "With this.", ok: false,
               fb: { fr: "« Et avec ceci ? » = vous voulez autre chose ? On ne répète pas la question 😉. Dites ce que vous voulez en plus.", tr: "« Et avec ceci ? » = başka bir şey ister misiniz? Soru tekrarlanmaz 😉. Ek olarak ne istediğinizi söyleyin.", en: "« Et avec ceci ? » = anything else? Don't repeat the question 😉. Say what else you'd like." } },
             { fr: "Je voudrais aussi un dessert pour midi. Qu'est-ce que vous avez ?", tr: "Öğlen için bir de tatlı istiyorum. Neleriniz var?", en: "I'd also like a dessert for lunch. What do you have?", ok: true, go: "e" }
           ] },
      e: { say: [["F", "Nous avons une tarte aux fraises ou un gâteau au chocolat. C'est pour combien de personnes ?"]],
           choices: [
             { fr: "Une tarte aux fraises pour six personnes, s'il vous plaît.", tr: "Altı kişilik bir çilekli tart, lütfen.", en: "A strawberry tart for six people, please.", ok: true, go: "f" },
             { fr: "Pour six heures.", tr: "Saat altı için.", en: "For six o'clock.", ok: false,
               fb: { fr: "Elle demande le nombre de personnes, pas l'heure ⏰😄. Dites « pour six personnes ».", tr: "Kişi sayısını soruyor, saati değil ⏰😄. « Pour six personnes » deyin.", en: "She's asking how many people, not what time ⏰😄. Say « pour six personnes »." } },
             { fr: "Un gâteau au chocolat pour six personnes, s'il vous plaît.", tr: "Altı kişilik bir çikolatalı pasta, lütfen.", en: "A chocolate cake for six people, please.", ok: true, go: "f" }
           ] },
      f: { say: [["F", "Très bon choix ! Pour six, c'est 18 €. Ça vous va ?"]],
           choices: [
             { fr: "Oui, ça me va. C'est dimanche !", tr: "Evet, uygun. Bugün pazar!", en: "Yes, that's fine. It's Sunday!", ok: true, go: "g" },
             { fr: "Je vais bien, merci.", tr: "İyiyim, teşekkürler.", en: "I'm well, thank you.", ok: false,
               fb: { fr: "« Ça vous va ? » = c'est d'accord pour vous ? Ce n'est pas « comment allez-vous » 😉. Dites « oui, ça me va ».", tr: "« Ça vous va ? » = sizin için uygun mu? « Nasılsınız » değil 😉. « Oui, ça me va » deyin.", en: "« Ça vous va ? » = is that OK for you? Not « how are you » 😉. Say « oui, ça me va »." } },
             { fr: "Oui, c'est parfait.", tr: "Evet, mükemmel.", en: "Yes, that's perfect.", ok: true, go: "g" }
           ] },
      g: { say: [["F", "Voilà, tout est prêt. Vous payez comment ?"]],
           choices: [
             { fr: "Par carte, s'il vous plaît.", tr: "Kartla, lütfen.", en: "By card, please.", ok: true, go: "h" },
             { fr: "Avec ma carte Vitale.", tr: "Carte Vitale'imle.", en: "With my Carte Vitale.", ok: false,
               fb: { fr: "La carte Vitale, c'est pour le médecin et la pharmacie 💊😄, pas pour les gâteaux ! Payez par carte bancaire ou en espèces.", tr: "Carte Vitale doktor ve eczane içindir 💊😄, pasta için değil! Banka kartıyla ya da nakit ödeyin.", en: "The Carte Vitale is for the doctor and the pharmacy 💊😄, not for cakes! Pay by bank card or in cash." } },
             { fr: "En espèces, s'il vous plaît.", tr: "Nakit, lütfen.", en: "In cash, please.", ok: true, go: "h" }
           ] },
      h: { say: [["F", "Merci ! Attention, le dessert est fragile. Vous voulez un sac ?"]],
           choices: [
             { fr: "Oui, merci. Bon dimanche !", tr: "Evet, teşekkürler. İyi pazarlar!", en: "Yes, thanks. Have a nice Sunday!", ok: true, go: "fin" },
             { fr: "Bon appétit !", tr: "Afiyet olsun!", en: "Enjoy your meal!", ok: false,
               fb: { fr: "Elle ne mange pas, elle travaille 😄. Pour partir, dites « merci, bon dimanche ! » ou « bonne journée ! ».", tr: "O yemek yemiyor, çalışıyor 😄. Çıkarken « merci, bon dimanche ! » ya da « bonne journée ! » deyin.", en: "She isn't eating, she's working 😄. When you leave, say « merci, bon dimanche ! » or « bonne journée ! »." } },
             { fr: "Non merci, j'ai mon sac. Bonne journée !", tr: "Hayır teşekkürler, çantam var. İyi günler!", en: "No thanks, I have my bag. Have a nice day!", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["F", "Merci, à vous aussi ! Au revoir, madame !"]],
             scene: { fr: "Vous partez avec le pain chaud et le dessert. Vos amis vont être contents ! Bravo ! 🥖🍰", tr: "Sıcak ekmek ve tatlıyla çıkıyorsunuz. Arkadaşlarınız çok sevinecek! Bravo! 🥖🍰", en: "You leave with warm bread and dessert. Your friends will be happy! Well done! 🥖🍰" } }
    } },

  /* ───────────── 17. Marché aux puces ───────────── */
  { id: "av-puces", level: "A1", emoji: "🪔",
    t: { fr: "Au marché aux puces", tr: "Bit pazarında", en: "At the flea market" },
    goal: { fr: "Achetez une vieille lampe et négociez le prix.", tr: "Eski bir lamba alın ve fiyat için pazarlık edin.", en: "Buy an old lamp and haggle over the price." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Dimanche matin, au marché aux puces. Sur une table, vous voyez une jolie lampe verte.", tr: "Pazar sabahı, bit pazarındasınız. Bir masanın üstünde güzel, yeşil bir lamba görüyorsunuz.", en: "Sunday morning at the flea market. On a table you see a pretty green lamp." },
           say: [["M", "Bonjour madame ! Vous cherchez quelque chose ?"]],
           choices: [
             { fr: "Bonjour ! Je regarde, merci.", tr: "Merhaba! Sadece bakıyorum, teşekkürler.", en: "Hello! I'm just looking, thanks.", ok: true, go: "b" },
             { fr: "Oui, je cherche mes clés.", tr: "Evet, anahtarlarımı arıyorum.", en: "Yes, I'm looking for my keys.", ok: false,
               fb: { fr: "Ici, il y a beaucoup de vieilles clés… mais pas les vôtres 🔑😄 ! Il parle des objets à vendre. Dites « je regarde » ou parlez de la lampe.", tr: "Burada çok eski anahtar var… ama sizinkiler yok 🔑😄! Satılık eşyalardan söz ediyor. « Je regarde » deyin ya da lambadan bahsedin.", en: "There are lots of old keys here… but not yours 🔑😄! He means things for sale. Say « je regarde » or ask about the lamp." } },
             { fr: "Bonjour ! Elle coûte combien, la lampe verte ?", tr: "Merhaba! Yeşil lamba ne kadar?", en: "Hello! How much is the green lamp?", ok: true, go: "c" }
           ] },
      b: { say: [["M", "Prenez votre temps ! Ici, tout est vieux… comme moi ! Ha ha !"]],
           choices: [
             { fr: "Oui, vous êtes très vieux !", tr: "Evet, çok yaşlısınız!", en: "Yes, you're very old!", ok: false,
               fb: { fr: "Il fait une blague, mais il ne faut pas être d'accord 😅 ! Riez et parlez de la lampe.", tr: "Şaka yapıyor ama ona katılmamak lazım 😅! Gülün ve lambadan bahsedin.", en: "He's joking, but you shouldn't agree 😅! Laugh and talk about the lamp." } },
             { fr: "Ha ha ! Et cette lampe verte, elle coûte combien ?", tr: "Ha ha! Peki bu yeşil lamba ne kadar?", en: "Ha ha! And this green lamp, how much is it?", ok: true, go: "c" },
             { fr: "Comment coûte la lampe ?", tr: "Lamba nasıl tutuyor?", en: "How does the lamp cost?", ok: false,
               fb: { fr: "« Comment » = how. Pour le prix, on dit « combien » : « elle coûte combien ? » 💶.", tr: "« Comment » = nasıl. Fiyat için « combien » denir: « elle coûte combien ? » 💶.", en: "« Comment » = how. For the price, say « combien »: « elle coûte combien ? » 💶." } }
           ] },
      c: { say: [["M", "Cette lampe ? 40 €. Elle est des années 70, très rare !"]],
           choices: [
             { fr: "C'est cher ! Vous faites 50 € ?", tr: "Pahalı! 50 € yapar mısınız?", en: "That's expensive! Would you do 50 €?", ok: false,
               fb: { fr: "50 € ? Il va être très content 😄 ! Pour négocier, on propose un prix plus bas, par exemple 25 €.", tr: "50 € mu? Çok sevinecek 😄! Pazarlık için daha düşük bir fiyat önerilir, örneğin 25 €.", en: "50 €? He'll be delighted 😄! To haggle, offer a lower price, for example 25 €." } },
             { fr: "D'accord, 40 €.", tr: "Tamam, 40 €.", en: "OK, 40 €.", ok: false,
               fb: { fr: "Au marché aux puces, on négocie, c'est le jeu 😉 ! Proposez un prix plus bas.", tr: "Bit pazarında pazarlık edilir, oyunun kuralı bu 😉! Daha düşük bir fiyat önerin.", en: "At the flea market you haggle, it's part of the game 😉! Offer a lower price." } },
             { fr: "40 € ? C'est un peu cher. Vous faites 25 € ?", tr: "40 € mu? Biraz pahalı. 25 € yapar mısınız?", en: "40 €? That's a bit expensive. Would you do 25 €?", ok: true, go: "d" }
           ] },
      d: { say: [["M", "25 € ? Oh là là, madame ! Bon… je fais 35 €."]],
           choices: [
             { fr: "30 €, et je prends aussi ce petit vase ?", tr: "30 €, ve şu küçük vazoyu da alıyorum, olur mu?", en: "30 €, and I take this little vase too?", ok: true, go: "e" },
             { fr: "35 € ? C'est trop bon marché !", tr: "35 € mu? Bu çok ucuz!", en: "35 €? That's too cheap!", ok: false,
               fb: { fr: "Il va vous adorer 😄 ! « Bon marché » = pas cher. Proposez plutôt un autre prix, ou dites « d'accord ».", tr: "Size bayılacak 😄! « Bon marché » = ucuz. Bunun yerine başka bir fiyat önerin ya da « d'accord » deyin.", en: "He'll love you 😄! « Bon marché » = cheap. Offer another price instead, or say « d'accord »." } },
             { fr: "Bon, d'accord pour 35 €.", tr: "Peki, 35 €'ya tamam.", en: "OK, fine, 35 €.", ok: true, go: "e2" }
           ] },
      e: { say: [["M", "La lampe et le vase pour 30 € ? Vous êtes dure en affaires ! Allez, d'accord, pour vous !"]],
           choices: [
             { fr: "Merci, vous êtes cher !", tr: "Teşekkürler, siz pahalısınız!", en: "Thank you, you're expensive!", ok: false,
               fb: { fr: "« Cher » = qui coûte beaucoup 💸😄. Pour remercier, dites « vous êtes très gentil ».", tr: "« Cher » = pahalı 💸😄. Teşekkür etmek için « vous êtes très gentil » deyin.", en: "« Cher » = costing a lot 💸😄. To thank him, say « vous êtes très gentil »." } },
             { fr: "Merci, vous êtes très gentil ! Elle marche, la lampe ?", tr: "Teşekkürler, çok naziksiniz! Lamba çalışıyor mu?", en: "Thanks, you're very kind! Does the lamp work?", ok: true, go: "f" }
           ] },
      e2: { say: [["M", "35 €, c'est un très bon prix, vous savez !"]],
           choices: [
             { fr: "Je sais quoi ?", tr: "Neyi biliyorum?", en: "I know what?", ok: false,
               fb: { fr: "« Vous savez » est juste une petite expression, comme « you know » 😉. Pas de question ! Demandez plutôt si la lampe marche.", tr: "« Vous savez » sadece küçük bir ifade, « biliyorsunuz ya » gibi 😉. Soru değil! Bunun yerine lambanın çalışıp çalışmadığını sorun.", en: "« Vous savez » is just a little phrase, like « you know » 😉. Not a question! Ask whether the lamp works instead." } },
             { fr: "Oui, merci ! Elle marche bien, la lampe ?", tr: "Evet, teşekkürler! Lamba iyi çalışıyor mu?", en: "Yes, thanks! Does the lamp work well?", ok: true, go: "f" }
           ] },
      f: { scene: { fr: "Il branche la lampe sur une batterie. Elle s'allume !", tr: "Lambayı bir aküye bağlıyor. Lamba yanıyor!", en: "He plugs the lamp into a battery. It lights up!" },
           say: [["M", "Voilà, elle marche ! Vous payez en espèces ? Ici, pas de carte."]],
           choices: [
             { fr: "Oui, j'ai des espèces. Voilà.", tr: "Evet, nakit param var. Buyurun.", en: "Yes, I have cash. Here you go.", ok: true, go: "g" },
             { fr: "Oui, je paie par carte.", tr: "Evet, kartla ödüyorum.", en: "Yes, I'm paying by card.", ok: false,
               fb: { fr: "Écoutez bien : « pas de carte » 💳❌ ! Ici, c'est seulement en espèces.", tr: "İyi dinleyin: « pas de carte » 💳❌! Burada sadece nakit geçiyor.", en: "Listen carefully: « pas de carte » 💳❌! Here it's cash only." } },
             { fr: "Oh, je n'ai pas d'espèces ! Il y a un distributeur près d'ici ?", tr: "Ah, nakit param yok! Yakınlarda bir bankamatik var mı?", en: "Oh, I don't have any cash! Is there a cash machine nearby?", ok: true, go: "f2" }
           ] },
      f2: { say: [["M", "Oui, au coin de la rue, à 2 minutes. Je garde la lampe pour vous !"]],
           choices: [
             { fr: "Merci, je pars !", tr: "Teşekkürler, gidiyorum!", en: "Thanks, I'm leaving!", ok: false,
               fb: { fr: "Il va croire que vous ne revenez pas 😢😄 ! Dites « je reviens tout de suite ».", tr: "Geri dönmeyeceğinizi sanacak 😢😄! « Je reviens tout de suite » deyin.", en: "He'll think you're not coming back 😢😄! Say « je reviens tout de suite »." } },
             { fr: "Merci, je reviens tout de suite !", tr: "Teşekkürler, hemen geliyorum!", en: "Thanks, I'll be right back!", ok: true, go: "g" }
           ] },
      g: { say: [["M", "Merci, madame. Attention, c'est fragile. Je mets du papier journal autour ?"]],
           choices: [
             { fr: "Oui, c'est gentil, merci.", tr: "Evet, çok naziksiniz, teşekkürler.", en: "Yes, that's kind, thanks.", ok: true, go: "h" },
             { fr: "Je mets du papier journal.", tr: "Gazete kâğıdı koyuyorum.", en: "I'm putting newspaper around it.", ok: false,
               fb: { fr: "Il demande s'il peut le faire pour vous 🗞️. Répondez « oui, merci » ou « non merci ».", tr: "Sizin için yapıp yapamayacağını soruyor 🗞️. « Oui, merci » ya da « non merci » diye cevap verin.", en: "He's asking if he can do it for you 🗞️. Answer « oui, merci » or « non merci »." } },
             { fr: "Non merci, j'ai un grand sac.", tr: "Hayır teşekkürler, büyük bir çantam var.", en: "No thanks, I have a big bag.", ok: true, go: "h" }
           ] },
      h: { say: [["M", "Bonne journée, madame ! Et bonne lumière !"]],
           choices: [
             { fr: "De rien !", tr: "Rica ederim!", en: "You're welcome!", ok: false,
               fb: { fr: "« De rien » répond à « merci ». Ici, il vous souhaite une bonne journée : dites « merci, à vous aussi ! » ☀️.", tr: "« De rien », « merci »ye cevaptır. Burada size iyi günler diliyor: « merci, à vous aussi ! » deyin ☀️.", en: "« De rien » answers « merci ». Here he's wishing you a nice day: say « merci, à vous aussi ! » ☀️." } },
             { fr: "Merci, à vous aussi ! Au revoir !", tr: "Teşekkürler, size de! Hoşça kalın!", en: "Thanks, you too! Goodbye!", ok: true, go: "fin" },
             { fr: "Merci beaucoup ! Bonne journée !", tr: "Çok teşekkürler! İyi günler!", en: "Thanks a lot! Have a nice day!", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["M", "Au revoir, et revenez dimanche prochain !"]],
             scene: { fr: "Vous rentrez avec votre jolie lampe verte. Vous avez négocié en français, comme une pro ! 🪔🎉", tr: "Güzel yeşil lambanızla eve dönüyorsunuz. Bir profesyonel gibi Fransızca pazarlık ettiniz! 🪔🎉", en: "You head home with your pretty green lamp. You haggled in French like a pro! 🪔🎉" } }
    } },

  /* ───────────── 18. Pique-nique entre collègues ───────────── */
  { id: "av-pique-nique-collegues", level: "A1", emoji: "🧺",
    t: { fr: "Pique-nique avec les collègues", tr: "İş arkadaşlarıyla piknik", en: "A picnic with colleagues" },
    goal: { fr: "Passez un bon moment au pique-nique avec vos collègues de la salle de sport.", tr: "Spor salonundaki iş arkadaşlarınızla piknikte güzel vakit geçirin.", en: "Have a good time at the picnic with your colleagues from the gym." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Samedi, midi. Vos collègues de la salle de sport font un pique-nique au parc. Entre collègues, on se dit « tu ».", tr: "Cumartesi, öğlen. Spor salonundaki iş arkadaşlarınız parkta piknik yapıyor. İş arkadaşları arasında « tu » (sen) denir.", en: "Saturday, noon. Your colleagues from the gym are having a picnic in the park. Colleagues say « tu » to each other." },
           say: [["F", "Coucou ! Tu as trouvé le parc facilement ?"]],
           choices: [
             { fr: "Coucou ! Oui, c'est facile, c'est près du métro.", tr: "Selam! Evet, kolaydı, metroya yakın.", en: "Hi! Yes, it's easy, it's near the metro.", ok: true, go: "b" },
             { fr: "Oui, je suis trouvée.", tr: "Evet, ben bulundum.", en: "Yes, I am found.", ok: false,
               fb: { fr: "Vous étiez perdue comme un objet ? 😄 Dites « oui, c'est facile » ou « non, mais je suis là ! ».", tr: "Kayıp bir eşya gibi miydiniz? 😄 « Oui, c'est facile » ya da « non, mais je suis là ! » deyin.", en: "Were you lost like an object? 😄 Say « oui, c'est facile » or « non, mais je suis là ! »." } },
             { fr: "Coucou ! Non, c'est difficile… mais je suis là !", tr: "Selam! Hayır, zordu… ama buradayım!", en: "Hi! No, it was hard… but I'm here!", ok: true, go: "b" }
           ] },
      b: { say: [["F", "Super ! Qu'est-ce que tu apportes ?"]],
           choices: [
             { fr: "Je suis apportée une salade.", tr: "Ben bir salata getirildim.", en: "I am brought a salad.", ok: false,
               fb: { fr: "Vous n'êtes pas une salade 🥗😄 ! Dites « j'apporte une salade ».", tr: "Siz bir salata değilsiniz 🥗😄! « J'apporte une salade » deyin.", en: "You're not a salad 🥗😄! Say « j'apporte une salade »." } },
             { fr: "J'apporte des börek turcs, faits maison !", tr: "Ev yapımı Türk böreği getirdim!", en: "I've brought some homemade Turkish börek!", ok: true, go: "c" },
             { fr: "J'apporte des fruits et de l'eau.", tr: "Meyve ve su getirdim.", en: "I've brought fruit and water.", ok: true, go: "c2" }
           ] },
      c: { say: [["F", "Des börek ? Qu'est-ce que c'est ?"]],
           choices: [
             { fr: "C'est un börek.", tr: "Bu bir börek.", en: "It's a börek.", ok: false,
               fb: { fr: "C'est vrai… mais elle ne sait toujours pas 😄 ! Expliquez : « c'est une spécialité turque avec du fromage ».", tr: "Doğru… ama hâlâ bilmiyor 😄! Açıklayın: « c'est une spécialité turque avec du fromage ».", en: "True… but she still doesn't know 😄! Explain: « c'est une spécialité turque avec du fromage »." } },
             { fr: "C'est une spécialité turque, avec du fromage. Goûte !", tr: "Peynirli bir Türk spesiyali. Tadına bak!", en: "It's a Turkish speciality, with cheese. Try some!", ok: true, go: "d" }
           ] },
      c2: { say: [["F", "Parfait, il fait très chaud aujourd'hui !"]],
           choices: [
             { fr: "Oui, je suis chaude !", tr: "Evet, ben sıcağım!", en: "Yes, I'm hot!", ok: false,
               fb: { fr: "Attention 😳 ! « Je suis chaude » a un autre sens… Pour la température, on dit « j'ai chaud ».", tr: "Dikkat 😳! « Je suis chaude » başka bir anlama geliyor… Sıcaklık için « j'ai chaud » denir.", en: "Careful 😳! « Je suis chaude » means something else… For the temperature, say « j'ai chaud »." } },
             { fr: "Oui, j'ai chaud ! Tu veux de l'eau ?", tr: "Evet, sıcakladım! Su ister misin?", en: "Yes, I'm hot! Do you want some water?", ok: true, go: "d" }
           ] },
      d: { say: [["M", "Tu veux un peu de quiche ? C'est ma quiche maison !"]],
           choices: [
             { fr: "Oui, avec plaisir ! Elle a l'air délicieuse.", tr: "Evet, memnuniyetle! Çok lezzetli görünüyor.", en: "Yes, I'd love some! It looks delicious.", ok: true, go: "e" },
             { fr: "Oui. Donne !", tr: "Evet. Ver!", en: "Yes. Give it!", ok: false,
               fb: { fr: "Un peu brusque, même avec « tu » 😅. Dites « oui, avec plaisir ! » ou « oui, merci ! ».", tr: "« Tu » ile bile biraz sert 😅. « Oui, avec plaisir ! » ya da « oui, merci ! » deyin.", en: "A bit abrupt, even with « tu » 😅. Say « oui, avec plaisir ! » or « oui, merci ! »." } },
             { fr: "Non merci, je n'ai pas faim pour le moment.", tr: "Hayır teşekkürler, şu an aç değilim.", en: "No thanks, I'm not hungry right now.", ok: true, go: "e" }
           ] },
      e: { say: [["M", "On joue au frisbee ? Tu viens ?"]],
           choices: [
             { fr: "Oui, je viens ! J'adore le frisbee.", tr: "Evet, geliyorum! Frizbiye bayılırım.", en: "Yes, I'm coming! I love frisbee.", ok: true, go: "f" },
             { fr: "Oui, je vais.", tr: "Evet, gidiyorum.", en: "Yes, I go.", ok: false,
               fb: { fr: "« Je vais » demande une destination : je vais où ? 😉 Pour répondre à « tu viens ? », dites « oui, je viens ! ».", tr: "« Je vais » bir yer ister: nereye gidiyorum? 😉 « Tu viens ? » sorusuna « oui, je viens ! » diye cevap verin.", en: "« Je vais » needs a destination: going where? 😉 To answer « tu viens ? », say « oui, je viens ! »." } },
             { fr: "Non merci, je reste ici sur la couverture.", tr: "Hayır teşekkürler, burada örtünün üstünde kalıyorum.", en: "No thanks, I'll stay here on the blanket.", ok: true, go: "f2" }
           ] },
      f: { scene: { fr: "Vous jouez. Thomas lance le frisbee… trop fort. Il est dans un arbre !", tr: "Oynuyorsunuz. Thomas frizbiyi atıyor… çok sert. Frizbi bir ağaçta!", en: "You play. Thomas throws the frisbee… too hard. It's stuck in a tree!" },
           say: [["M", "Oh non ! Le frisbee est dans l'arbre !"]],
           choices: [
             { fr: "Pas de problème ! Il y a un grand bâton là-bas.", tr: "Sorun değil! Orada büyük bir sopa var.", en: "No problem! There's a big stick over there.", ok: true, go: "g" },
             { fr: "Le frisbee mange des pommes ?", tr: "Frizbi elma mı yiyor?", en: "Is the frisbee eating apples?", ok: false,
               fb: { fr: "Ha ha, un frisbee gourmand 🍎😄 ! Aidez plutôt Thomas : « il y a un bâton là-bas ».", tr: "Ha ha, obur bir frizbi 🍎😄! Thomas'a yardım edin: « il y a un bâton là-bas ».", en: "Ha ha, a greedy frisbee 🍎😄! Help Thomas instead: « il y a un bâton là-bas »." } },
             { fr: "Thomas, vous êtes nul !", tr: "Thomas, siz berbatsınız!", en: "Thomas, you (formal) are useless!", ok: false,
               fb: { fr: "Aïe, c'est méchant… et avec « vous » 😅 ! Restez gentille : « pas de problème ! ».", tr: "Ay, bu kaba… hem de « vous » ile 😅! Nazik kalın: « pas de problème ! ».", en: "Ouch, that's mean… and with « vous » 😅! Stay kind: « pas de problème ! »." } }
           ] },
      f2: { say: [["F", "Moi aussi, je reste. Tu travailles le week-end prochain ?"]],
           choices: [
             { fr: "Oui, samedi matin, à l'accueil.", tr: "Evet, cumartesi sabahı, resepsiyonda.", en: "Yes, Saturday morning, at the front desk.", ok: true, go: "g" },
             { fr: "Oui, je travaille le week-end dernier.", tr: "Evet, geçen hafta sonu çalışıyorum.", en: "Yes, I work last weekend.", ok: false,
               fb: { fr: "« Dernier » = passé, « prochain » = futur ⏳. Elle parle du week-end prochain !", tr: "« Dernier » = geçmiş, « prochain » = gelecek ⏳. Gelecek hafta sonundan bahsediyor!", en: "« Dernier » = past, « prochain » = future ⏳. She's talking about next weekend!" } },
             { fr: "Non, je suis libre. On fait une balade ?", tr: "Hayır, boşum. Yürüyüşe çıkalım mı?", en: "No, I'm free. Shall we go for a walk?", ok: true, go: "g" }
           ] },
      g: { scene: { fr: "Tout à coup, le ciel devient gris. Il y a de gros nuages.", tr: "Birden gökyüzü griye dönüyor. Kocaman bulutlar var.", en: "Suddenly the sky turns grey. There are big clouds." },
           say: [["F", "Oh, regarde le ciel ! Il va pleuvoir, non ?"]],
           choices: [
             { fr: "Oui, il fait pluie.", tr: "Evet, yağmur yapıyor.", en: "Yes, it makes rain.", ok: false,
               fb: { fr: "Presque ! On dit « il pleut » ou « il va pleuvoir » 🌧️.", tr: "Az kaldı! « Il pleut » ya da « il va pleuvoir » denir 🌧️.", en: "Almost! You say « il pleut » or « il va pleuvoir » 🌧️." } },
             { fr: "Oui, il va pleuvoir ! On range vite ?", tr: "Evet, yağmur yağacak! Hızlıca toplayalım mı?", en: "Yes, it's going to rain! Shall we pack up quickly?", ok: true, go: "h" }
           ] },
      h: { say: [["M", "Vite, on met tout dans les sacs ! Tu peux prendre la couverture ?"]],
           choices: [
             { fr: "Oui, je prends le couvercle !", tr: "Evet, kapağı alıyorum!", en: "Yes, I'll take the lid!", ok: false,
               fb: { fr: "Le couvercle, c'est sur une casserole 🍲😄. Pour s'asseoir dans l'herbe, c'est « la couverture ».", tr: "Kapak tencerenin üstünde olur 🍲😄. Çimde oturmak için olan « la couverture » (örtü).", en: "The lid goes on a pan 🍲😄. The thing you sit on in the grass is « la couverture »." } },
             { fr: "Oui, je prends la couverture !", tr: "Evet, örtüyü alıyorum!", en: "Yes, I'll take the blanket!", ok: true, go: "i" }
           ] },
      i: { scene: { fr: "Vous courez sous la pluie. Tout le monde rit.", tr: "Yağmurun altında koşuyorsunuz. Herkes gülüyor.", en: "You run in the rain. Everyone is laughing." },
           say: [["F", "Bon, on finit le pique-nique au café ?"]],
           choices: [
             { fr: "Bonne idée ! Un chocolat chaud pour moi.", tr: "İyi fikir! Bana bir sıcak çikolata.", en: "Good idea! A hot chocolate for me.", ok: true, go: "fin" },
             { fr: "Non, je préfère manger sous la pluie.", tr: "Hayır, yağmurun altında yemeyi tercih ederim.", en: "No, I prefer eating in the rain.", ok: false,
               fb: { fr: "Une soupe de quiche ? 🌧️😄 Allez au café avec vos collègues : « bonne idée ! ».", tr: "Kiş çorbası mı? 🌧️😄 İş arkadaşlarınızla kafeye gidin: « bonne idée ! ».", en: "Quiche soup? 🌧️😄 Go to the café with your colleagues: « bonne idée ! »." } },
             { fr: "Oui, avec plaisir !", tr: "Evet, memnuniyetle!", en: "Yes, I'd love to!", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["M", "Super pique-nique ! On recommence bientôt, hein !"]],
             scene: { fr: "Au café, tout le monde parle et rit. Vous avez passé un super moment en français ! ☕🎉", tr: "Kafede herkes konuşup gülüyor. Fransızca harika vakit geçirdiniz! ☕🎉", en: "At the café everyone chats and laughs. You had a great time in French! ☕🎉" } }
    } },

  /* ───────────── 19. Au guichet du musée ───────────── */
  { id: "av-musee", level: "A1", emoji: "🖼️",
    t: { fr: "Au guichet du musée", tr: "Müze gişesinde", en: "At the museum ticket desk" },
    goal: { fr: "Achetez votre billet, laissez votre sac et trouvez les tableaux impressionnistes.", tr: "Biletinizi alın, çantanızı bırakın ve empresyonist tabloları bulun.", en: "Buy your ticket, leave your bag and find the Impressionist paintings." },
    start: "a",
    nodes: {
      a: { scene: { fr: "C'est samedi après-midi. Vous êtes au guichet d'un musée de peinture.", tr: "Cumartesi öğleden sonra. Bir resim müzesinin gişesindesiniz.", en: "It's Saturday afternoon. You're at the ticket desk of an art museum." },
           say: [["F", "Bonjour madame ! Vous avez une réservation ?"]],
           choices: [
             { fr: "Oui, je réserve une table pour deux.", tr: "Evet, iki kişilik bir masa ayırtıyorum.", en: "Yes, I'm booking a table for two.", ok: false,
               fb: { fr: "On n'est pas au restaurant 🍽️😄 ! Dites « non, je n'ai pas de réservation » et demandez un billet.", tr: "Restoranda değiliz 🍽️😄! « Non, je n'ai pas de réservation » deyin ve bir bilet isteyin.", en: "We're not at a restaurant 🍽️😄! Say « non, je n'ai pas de réservation » and ask for a ticket." } },
             { fr: "Non, je n'ai pas de réservation. Je voudrais un billet, s'il vous plaît.", tr: "Hayır, rezervasyonum yok. Bir bilet istiyorum, lütfen.", en: "No, I don't have a booking. I'd like a ticket, please.", ok: true, go: "b" },
             { fr: "Non, je n'ai pas une réservation.", tr: "Hayır, bir rezervasyonum yok (yanlış artikel).", en: "No, I don't have a booking (wrong article).", ok: false,
               fb: { fr: "Presque ! Après « ne… pas », « un / une » devient « de » : « je n'ai pas de réservation » 😉.", tr: "Az kaldı! « ne… pas »dan sonra « un / une », « de » olur: « je n'ai pas de réservation » 😉.", en: "Almost! After « ne… pas », « un / une » becomes « de »: « je n'ai pas de réservation » 😉." } }
           ] },
      b: { say: [["F", "Pas de problème. Vous avez moins de 26 ans ? C'est gratuit pour les jeunes."]],
           choices: [
             { fr: "Non, je suis plus de 26 ans.", tr: "Hayır, ben 26 yaşından fazlayım (yanlış fiil).", en: "No, I am more than 26 years (wrong verb).", ok: false,
               fb: { fr: "En français, on « a » son âge : « j'ai plus de 26 ans » 🎂.", tr: "Fransızcada yaş « avoir » ile söylenir: « j'ai plus de 26 ans » 🎂.", en: "In French you « have » your age: « j'ai plus de 26 ans » 🎂." } },
             { fr: "Non, j'ai plus de 26 ans. Dommage !", tr: "Hayır, 26 yaşından büyüğüm. Ne yazık!", en: "No, I'm over 26. Too bad!", ok: true, go: "c" },
             { fr: "Non, j'ai 26 euros.", tr: "Hayır, 26 eurom var.", en: "No, I have 26 euros.", ok: false,
               fb: { fr: "Elle demande votre âge, pas votre argent 😄. Dites « j'ai plus de 26 ans ».", tr: "Yaşınızı soruyor, paranızı değil 😄. « J'ai plus de 26 ans » deyin.", en: "She's asking your age, not your money 😄. Say « j'ai plus de 26 ans »." } }
           ] },
      c: { say: [["F", "Alors, c'est 14 €. Vous voulez aussi un audioguide ? C'est 5 € en plus."]],
           choices: [
             { fr: "Oui, je veux le audioguide.", tr: "Evet, le audioguide istiyorum (yanlış).", en: "Yes, I want the audioguide (wrong).", ok: false,
               fb: { fr: "Devant une voyelle, « le » devient « l' » : « l'audioguide ». Et « je voudrais » est plus poli 😉.", tr: "Sesli harften önce « le », « l' » olur: « l'audioguide ». Ve « je voudrais » daha kibar 😉.", en: "Before a vowel, « le » becomes « l' »: « l'audioguide ». And « je voudrais » is more polite 😉." } },
             { fr: "Oui, avec l'audioguide, s'il vous plaît.", tr: "Evet, sesli rehberle birlikte, lütfen.", en: "Yes, with the audioguide, please.", ok: true, go: "d" },
             { fr: "Non merci, juste le billet.", tr: "Hayır teşekkürler, sadece bilet.", en: "No thanks, just the ticket.", ok: true, go: "d2" }
           ] },
      d: { say: [["F", "L'audioguide est en français, en anglais ou en espagnol. Quelle langue ?"]],
           choices: [
             { fr: "En anglais, s'il vous plaît.", tr: "İngilizce, lütfen.", en: "In English, please.", ok: true, go: "e" },
             { fr: "En Angleterre, s'il vous plaît.", tr: "İngiltere'de, lütfen.", en: "In England, please.", ok: false,
               fb: { fr: "Le musée ne va pas déménager en Angleterre 🇬🇧😄 ! La langue, c'est « l'anglais » : « en anglais ».", tr: "Müze İngiltere'ye taşınmayacak 🇬🇧😄! Dilin adı « l'anglais »: « en anglais ».", en: "The museum isn't moving to England 🇬🇧😄! The language is « l'anglais »: « en anglais »." } },
             { fr: "En français. C'est bien pour pratiquer !", tr: "Fransızca. Pratik için iyi!", en: "In French. It's good practice!", ok: true, go: "e" }
           ] },
      d2: { say: [["F", "D'accord. Le plan du musée est gratuit. Vous en voulez un ?"]],
           choices: [
             { fr: "Oui, merci, c'est gentil.", tr: "Evet, teşekkürler, çok naziksiniz.", en: "Yes, thanks, that's kind.", ok: true, go: "e" },
             { fr: "Non, je n'ai pas de plan pour ce soir.", tr: "Hayır, bu akşam için bir planım yok.", en: "No, I don't have any plans for tonight.", ok: false,
               fb: { fr: "Ici, « le plan », c'est la carte du musée 🗺️, pas votre programme de la soirée 😄. Dites « oui, merci ».", tr: "Burada « le plan » müzenin haritası 🗺️, akşam programınız değil 😄. « Oui, merci » deyin.", en: "Here « le plan » is the museum map 🗺️, not your evening plans 😄. Say « oui, merci »." } }
           ] },
      e: { say: [["F", "Très bien. Vous payez comment ?"]],
           choices: [
             { fr: "Par carte, s'il vous plaît.", tr: "Kartla, lütfen.", en: "By card, please.", ok: true, go: "f" },
             { fr: "Je paie avec de l'argent, bien sûr !", tr: "Tabii ki parayla ödüyorum!", en: "With money, of course!", ok: false,
               fb: { fr: "Bien sûr 😄 ! Mais « comment » = par carte ou en espèces ? Choisissez.", tr: "Tabii ki 😄! Ama « comment » = kartla mı, nakit mi? Birini seçin.", en: "Of course 😄! But « comment » = by card or in cash? Pick one." } },
             { fr: "Sans contact, c'est possible ?", tr: "Temassız olur mu?", en: "Contactless, is that possible?", ok: true, go: "f" }
           ] },
      f: { say: [["F", "Voilà votre billet. Attention : les sacs à dos sont interdits dans les salles. Le vestiaire est à gauche."]],
           choices: [
             { fr: "Le vestiaire ? Mais je ne veux pas me changer !", tr: "Soyunma odası mı? Ama üstümü değiştirmek istemiyorum!", en: "The changing room? But I don't want to get changed!", ok: false,
               fb: { fr: "Au musée, le vestiaire, c'est pour laisser son manteau et son sac 🧥. Pas besoin de maillot de bain 😄 !", tr: "Müzede « vestiaire » vestiyerdir: paltonuzu ve çantanızı bırakırsınız 🧥. Mayoya gerek yok 😄!", en: "At a museum, the « vestiaire » is the cloakroom for your coat and bag 🧥. No swimsuit needed 😄!" } },
             { fr: "D'accord, je laisse mon sac au vestiaire.", tr: "Tamam, çantamı vestiyere bırakıyorum.", en: "OK, I'll leave my bag in the cloakroom.", ok: true, go: "g" },
             { fr: "Mon sac à dos est interdit ? Mais il est gentil !", tr: "Sırt çantam yasak mı? Ama o çok uslu!", en: "My backpack is banned? But it's well-behaved!", ok: false,
               fb: { fr: "Il est sûrement très sage 🎒😄, mais c'est la règle. Laissez-le au vestiaire.", tr: "Eminim çok usludur 🎒😄, ama kural bu. Onu vestiyere bırakın.", en: "I'm sure it's very good 🎒😄, but it's the rule. Leave it in the cloakroom." } }
           ] },
      g: { scene: { fr: "Dans une salle, vous prenez une photo d'un tableau. Flash ! Un gardien arrive.", tr: "Bir salonda bir tablonun fotoğrafını çekiyorsunuz. Flaş! Bir görevli geliyor.", en: "In a gallery you take a photo of a painting. Flash! A guard comes over." },
           say: [["M", "Madame, pas de flash, s'il vous plaît !"]],
           choices: [
             { fr: "De rien !", tr: "Rica ederim!", en: "You're welcome!", ok: false,
               fb: { fr: "« De rien » répond à « merci » 😅. Ici, on s'excuse : « oh, pardon ! ».", tr: "« De rien », « merci »ye cevaptır 😅. Burada özür dilenir: « oh, pardon ! ».", en: "« De rien » answers « merci » 😅. Here you apologise: « oh, pardon ! »." } },
             { fr: "Oh, pardon ! Je suis désolée.", tr: "Ah, pardon! Çok üzgünüm.", en: "Oh, sorry! I'm so sorry.", ok: true, go: "h" }
           ] },
      h: { say: [["M", "Pas de problème. Vous cherchez quelque chose ?"]],
           choices: [
             { fr: "Oui, je cherche la Joconde.", tr: "Evet, Mona Lisa'yı arıyorum.", en: "Yes, I'm looking for the Mona Lisa.", ok: false,
               fb: { fr: "La Joconde est au Louvre, à Paris 😄 ! Ici, demandez les tableaux impressionnistes.", tr: "Mona Lisa Paris'te, Louvre'da 😄! Burada empresyonist tabloları sorun.", en: "The Mona Lisa is at the Louvre in Paris 😄! Here, ask for the Impressionist paintings." } },
             { fr: "Oui, où sont les tableaux impressionnistes, s'il vous plaît ?", tr: "Evet, empresyonist tablolar nerede, lütfen?", en: "Yes, where are the Impressionist paintings, please?", ok: true, go: "i" },
             { fr: "Oui, je cherche un tableau. Il est où ?", tr: "Evet, bir tablo arıyorum. Nerede?", en: "Yes, I'm looking for a painting. Where is it?", ok: false,
               fb: { fr: "Il y a 500 tableaux ici 🖼️😄 ! Soyez plus précise : « les tableaux impressionnistes ».", tr: "Burada 500 tablo var 🖼️😄! Daha net olun: « les tableaux impressionnistes ».", en: "There are 500 paintings here 🖼️😄! Be more specific: « les tableaux impressionnistes »." } }
           ] },
      i: { say: [["M", "Au premier étage, salle 12. L'escalier est à droite."]],
           choices: [
             { fr: "Merci beaucoup, monsieur !", tr: "Çok teşekkürler, beyefendi!", en: "Thank you very much, sir!", ok: true, go: "fin" },
             { fr: "Merci, bonne visite !", tr: "Teşekkürler, iyi geziler!", en: "Thanks, enjoy your visit!", ok: false,
               fb: { fr: "C'est vous qui visitez, pas lui 😄 ! Dites simplement « merci beaucoup, monsieur ».", tr: "Gezen sizsiniz, o değil 😄! Sadece « merci beaucoup, monsieur » deyin.", en: "You're the visitor, not him 😄! Just say « merci beaucoup, monsieur »." } }
           ] },
      fin: { end: "win", say: [["M", "Avec plaisir. Bonne visite, madame !"]],
             scene: { fr: "Vous montez au premier étage. Les couleurs de Monet sont magnifiques. Bravo, visite réussie, et tout en français ! 🎨", tr: "Birinci kata çıkıyorsunuz. Monet'nin renkleri harika. Bravo, ziyaret başarılı, hem de tamamen Fransızca! 🎨", en: "You go up to the first floor. Monet's colours are beautiful. Well done: a successful visit, all in French! 🎨" } }
    } },

  /* ───────────── 20. La clé du casier ───────────── */
  { id: "av-cle-casier", level: "A1", emoji: "🔑",
    t: { fr: "La clé du casier", tr: "Dolap anahtarı", en: "The locker key" },
    goal: { fr: "Vous avez perdu la clé de votre casier à la piscine : demandez de l'aide et retrouvez-la.", tr: "Havuzda dolabınızın anahtarını kaybettiniz: yardım isteyin ve onu bulun.", en: "You've lost your locker key at the pool: ask for help and find it." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Après la natation, vous regardez votre poignet : le bracelet avec la clé n'est plus là ! Vous allez à l'accueil.", tr: "Yüzdükten sonra bileğinize bakıyorsunuz: anahtarlı bileklik yok! Resepsiyona gidiyorsunuz.", en: "After your swim you look at your wrist: the bracelet with the key is gone! You go to the front desk." },
           say: [["M", "Bonjour madame ! Ça va ? Vous avez l'air inquiète."]],
           choices: [
             { fr: "Bonjour… Non, ça ne va pas. J'ai perdu la clé de mon casier.", tr: "Merhaba… Hayır, iyi değilim. Dolabımın anahtarını kaybettim.", en: "Hello… No, not really. I've lost my locker key.", ok: true, go: "b" },
             { fr: "Bonjour, je suis perdue la clé.", tr: "Merhaba, ben anahtar kayboldum.", en: "Hello, I am lost the key.", ok: false,
               fb: { fr: "Ce n'est pas vous qui êtes perdue, c'est la clé 😄 ! Dites « j'ai perdu la clé ».", tr: "Kaybolan siz değilsiniz, anahtar 😄! « J'ai perdu la clé » deyin.", en: "It's not you who's lost, it's the key 😄! Say « j'ai perdu la clé »." } },
             { fr: "Bonjour ! J'ai perdu la tête !", tr: "Merhaba! Aklımı kaçırdım!", en: "Hello! I've lost my head!", ok: false,
               fb: { fr: "« Perdre la tête » = devenir un peu folle 🤪😄 ! Vous avez perdu la clé, pas la tête.", tr: "« Perdre la tête » = biraz aklını kaçırmak 🤪😄! Anahtarınızı kaybettiniz, aklınızı değil.", en: "« Perdre la tête » = to go a bit crazy 🤪😄! You lost your key, not your head." } }
           ] },
      b: { say: [["M", "Pas de panique ! C'est quel numéro, votre casier ?"]],
           choices: [
             { fr: "C'est le numéro 47.", tr: "47 numara.", en: "It's number 47.", ok: true, go: "c" },
             { fr: "C'est le 47 ans.", tr: "47 yaşında.", en: "It's 47 years old.", ok: false,
               fb: { fr: "Un casier de 47 ans ? Il est vieux 😄 ! Pour un numéro, dites juste « le numéro 47 ».", tr: "47 yaşında bir dolap mı? Epey yaşlı 😄! Numara için sadece « le numéro 47 » deyin.", en: "A 47-year-old locker? That's old 😄! For a number, just say « le numéro 47 »." } },
             { fr: "Je ne sais pas… Il est près des douches.", tr: "Bilmiyorum… Duşların yanında.", en: "I don't know… It's near the showers.", ok: true, go: "c2" }
           ] },
      c2: { say: [["M", "Près des douches, ce sont les numéros 40 à 50. Le bracelet est de quelle couleur ?"]],
           choices: [
             { fr: "Il est jeune.", tr: "O genç.", en: "It's young.", ok: false,
               fb: { fr: "Attention à la prononciation : « jeune » = pas vieux, « jaune » = la couleur 💛 !", tr: "Telaffuza dikkat: « jeune » = genç, « jaune » = sarı renk 💛!", en: "Watch the pronunciation: « jeune » = young, « jaune » = the colour yellow 💛!" } },
             { fr: "Il est jaune.", tr: "Sarı.", en: "It's yellow.", ok: true, go: "c" }
           ] },
      c: { say: [["M", "D'accord. Vous avez regardé dans le bassin ? Les clés tombent souvent au fond de l'eau."]],
           choices: [
             { fr: "Non ! Je vais regarder avec le maître-nageur.", tr: "Hayır! Cankurtaranla bakacağım.", en: "No! I'm going to look with the lifeguard.", ok: true, go: "d" },
             { fr: "Oui, je suis au fond.", tr: "Evet, ben dipteyim.", en: "Yes, I'm at the bottom.", ok: false,
               fb: { fr: "Au fond de l'eau ? Remontez vite respirer 🫧😄 ! Il demande si vous avez regardé. Dites « non, je vais regarder ».", tr: "Suyun dibinde mi? Hemen nefes almaya çıkın 🫧😄! Bakıp bakmadığınızı soruyor. « Non, je vais regarder » deyin.", en: "At the bottom of the water? Come up for air 🫧😄! He's asking if you looked. Say « non, je vais regarder »." } }
           ] },
      d: { scene: { fr: "Vous allez au bord de la piscine. Une maître-nageuse est sur sa chaise.", tr: "Havuzun kenarına gidiyorsunuz. Bir kadın cankurtaran sandalyesinde oturuyor.", en: "You go to the edge of the pool. A lifeguard is on her chair." },
           say: [["F", "Une clé perdue ? Vous avez nagé dans quelle ligne ?"]],
           choices: [
             { fr: "Dans la ligne 3, la ligne lente.", tr: "3. kulvarda, yavaş kulvarda.", en: "In lane 3, the slow lane.", ok: true, go: "e" },
             { fr: "Dans le vestiaire.", tr: "Soyunma odasında.", en: "In the changing room.", ok: false,
               fb: { fr: "Nager dans le vestiaire ? 🏊😄 Elle demande la ligne d'eau : « dans la ligne 3 ».", tr: "Soyunma odasında yüzmek mi? 🏊😄 Kulvarı soruyor: « dans la ligne 3 ».", en: "Swimming in the changing room? 🏊😄 She's asking which lane: « dans la ligne 3 »." } },
             { fr: "Dans la ligne 6, la ligne rapide !", tr: "6. kulvarda, hızlı kulvarda!", en: "In lane 6, the fast lane!", ok: true, go: "e" }
           ] },
      e: { scene: { fr: "Elle regarde au fond de l'eau avec attention.", tr: "Dikkatle suyun dibine bakıyor.", en: "She looks carefully at the bottom of the water." },
           say: [["F", "Ah ! Il y a quelque chose au fond. Vous plongez, ou je plonge ?"]],
           choices: [
             { fr: "Vous pouvez plonger, s'il vous plaît ? Je ne plonge pas bien.", tr: "Siz dalabilir misiniz, lütfen? Ben iyi dalamıyorum.", en: "Could you dive, please? I'm not good at diving.", ok: true, go: "f" },
             { fr: "Tu plonges ?", tr: "Sen dalıyor musun?", en: "Are you diving? (informal)", ok: false,
               fb: { fr: "Elle est sympa, mais c'est une inconnue : on dit « vous » 😉. « Vous pouvez plonger, s'il vous plaît ? »", tr: "Sevimli ama tanımadığınız biri: « vous » denir 😉. « Vous pouvez plonger, s'il vous plaît ? »", en: "She's nice, but she's a stranger: use « vous » 😉. « Vous pouvez plonger, s'il vous plaît ? »" } },
             { fr: "Je plonge ! J'adore ça.", tr: "Ben dalıyorum! Buna bayılırım.", en: "I'll dive! I love it.", ok: true, go: "f2" }
           ] },
      f: { scene: { fr: "Elle plonge et remonte avec… une barrette rose.", tr: "Dalıyor ve elinde… pembe bir tokayla çıkıyor.", en: "She dives and comes back up with… a pink hair clip." },
           say: [["F", "C'est votre clé ?"]],
           choices: [
             { fr: "Oui, c'est ma clé !", tr: "Evet, bu benim anahtarım!", en: "Yes, that's my key!", ok: false,
               fb: { fr: "Une barrette rose pour ouvrir un casier ? Bonne chance 😄 ! Dites « non, ce n'est pas ma clé ».", tr: "Pembe bir tokayla dolap açmak mı? Bol şans 😄! « Non, ce n'est pas ma clé » deyin.", en: "Opening a locker with a pink hair clip? Good luck 😄! Say « non, ce n'est pas ma clé »." } },
             { fr: "Non, ce n'est pas ma clé ! Ma clé est sur un bracelet jaune.", tr: "Hayır, bu benim anahtarım değil! Anahtarım sarı bir bileklikte.", en: "No, that's not my key! My key is on a yellow bracelet.", ok: true, go: "g" }
           ] },
      f2: { scene: { fr: "Vous plongez… et vous remontez avec une barrette rose !", tr: "Dalıyorsunuz… ve elinizde pembe bir tokayla çıkıyorsunuz!", en: "You dive… and come back up with a pink hair clip!" },
           say: [["F", "Alors, c'est votre clé ?"]],
           choices: [
             { fr: "Non, c'est une barrette ! Je plonge encore une fois.", tr: "Hayır, bu bir toka! Bir kez daha dalıyorum.", en: "No, it's a hair clip! I'll dive one more time.", ok: true, go: "g" },
             { fr: "Oui, c'est ma clé rose.", tr: "Evet, bu benim pembe anahtarım.", en: "Yes, it's my pink key.", ok: false,
               fb: { fr: "Regardez bien : c'est une barrette, et votre bracelet est jaune 💛😄 ! Plongez encore une fois.", tr: "İyi bakın: bu bir toka ve sizin bileklik sarı 💛😄! Bir kez daha dalın.", en: "Look closely: it's a hair clip, and your bracelet is yellow 💛😄! Dive one more time." } }
           ] },
      g: { scene: { fr: "Deuxième essai… Voilà le bracelet jaune avec la clé !", tr: "İkinci deneme… İşte anahtarlı sarı bileklik!", en: "Second try… There's the yellow bracelet with the key!" },
           say: [["F", "Bravo ! Il y a un numéro sur la clé : 47. C'est votre casier ?"]],
           choices: [
             { fr: "Oui, c'est le 47 ! Merci beaucoup !", tr: "Evet, 47! Çok teşekkürler!", en: "Yes, it's 47! Thank you so much!", ok: true, go: "h" },
             { fr: "Oui, il y a 47 personnes.", tr: "Evet, 47 kişi var.", en: "Yes, there are 47 people.", ok: false,
               fb: { fr: "47 personnes dans votre casier ? Il est grand 😄 ! C'est le numéro du casier : « oui, c'est le 47 ! ».", tr: "Dolabınızda 47 kişi mi? Epey büyükmüş 😄! Bu dolap numarası: « oui, c'est le 47 ! ».", en: "47 people in your locker? It must be big 😄! It's the locker number: « oui, c'est le 47 ! »." } }
           ] },
      h: { scene: { fr: "Vous retournez à l'accueil avec la clé et la barrette rose.", tr: "Anahtar ve pembe tokayla resepsiyona dönüyorsunuz.", en: "You go back to the front desk with the key and the pink hair clip." },
           say: [["M", "Super, vous avez la clé ! Et cette barrette rose ?"]],
           choices: [
             { fr: "Je la garde, elle est jolie !", tr: "Bende kalsın, çok güzel!", en: "I'm keeping it, it's pretty!", ok: false,
               fb: { fr: "Elle est jolie, c'est vrai 😄, mais quelqu'un la cherche peut-être. Donnez-la aux objets trouvés.", tr: "Güzel, doğru 😄, ama belki biri onu arıyor. Kayıp eşya bürosuna verin.", en: "It's pretty, true 😄, but someone might be looking for it. Hand it in to lost property." } },
             { fr: "Elle était dans l'eau. C'est pour les objets trouvés.", tr: "Suyun içindeydi. Kayıp eşya için.", en: "It was in the water. It's for lost property.", ok: true, go: "i" },
             { fr: "Voilà, c'est pour les objets trouvés.", tr: "Buyurun, kayıp eşya için.", en: "Here you go, it's for lost property.", ok: true, go: "i" }
           ] },
      i: { say: [["M", "Merci ! Un conseil : la prochaine fois, serrez bien le bracelet sur le poignet."]],
           choices: [
             { fr: "Merci, je mets la clé dans ma bouche !", tr: "Teşekkürler, anahtarı ağzıma koyuyorum!", en: "Thanks, I'll put the key in my mouth!", ok: false,
               fb: { fr: "Ce n'est pas très pratique pour nager 😄🔑 ! Dites « d'accord, merci pour le conseil ».", tr: "Yüzmek için pek pratik değil 😄🔑! « D'accord, merci pour le conseil » deyin.", en: "Not very practical for swimming 😄🔑! Say « d'accord, merci pour le conseil »." } },
             { fr: "D'accord, merci pour le conseil ! Bonne journée !", tr: "Tamam, tavsiye için teşekkürler! İyi günler!", en: "OK, thanks for the advice! Have a nice day!", ok: true, go: "fin" },
             { fr: "Oui, promis ! À la semaine prochaine !", tr: "Evet, söz! Haftaya görüşürüz!", en: "Yes, I promise! See you next week!", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["M", "Bonne journée, madame, et bonne douche !"]],
             scene: { fr: "Vous ouvrez le casier 47. Vos vêtements sont là ! Ouf… et bravo, tout en français ! 🔑🎉", tr: "47 numaralı dolabı açıyorsunuz. Kıyafetleriniz orada! Oh be… ve bravo, hepsi Fransızca! 🔑🎉", en: "You open locker 47. Your clothes are there! Phew… and well done, all in French! 🔑🎉" } }
    } }
);
