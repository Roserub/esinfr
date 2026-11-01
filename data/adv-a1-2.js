/* Aventures A1 — 6 to 10 */
(window.ADVENTURES = window.ADVENTURES || []).push(

  { id: "av-pharma", level: "A1", emoji: "💊",
    t: { fr: "Mal à la gorge", tr: "Boğaz ağrısı", en: "A sore throat" },
    goal: { fr: "Expliquez votre problème au pharmacien, comprenez la posologie et payez.", tr: "Eczacıya sorununuzu anlatın, ilacın nasıl kullanılacağını anlayın ve ödeyin.", en: "Explain your problem to the pharmacist, understand the dosage and pay." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Il est 11 h. Vous avez mal à la gorge depuis deux jours. Vous entrez dans une pharmacie (la croix verte !).", tr: "Saat 11. İki gündür boğazınız ağrıyor. Bir eczaneye giriyorsunuz (yeşil haçlı olan!).", en: "It's 11 a.m. Your throat has been hurting for two days. You walk into a pharmacy (the green cross!)." },
           say: [["M", "Bonjour madame ! Je vous écoute."]],
           choices: [
             { fr: "Bonjour ! J'ai mal à la gorge.", tr: "Merhaba! Boğazım ağrıyor.", en: "Hello! I have a sore throat.", ok: true, go: "b" },
             { fr: "Bonjour ! Je suis mal à la gorge.", tr: "Merhaba! Ben boğazda kötüyüm.", en: "Hello! I am bad at the throat.", ok: false,
               fb: { fr: "Presque ! Pour une douleur, on utilise avoir : « j'ai mal à la gorge ». Comme « j'ai faim » ou « j'ai froid ».", tr: "Çok yakın! Ağrı için « avoir » (sahip olmak) fiili kullanılır: « j'ai mal à la gorge ». Tıpkı « j'ai faim » (açım) ya da « j'ai froid » (üşüyorum) gibi.", en: "Almost! For pain, French uses avoir (to have): « j'ai mal à la gorge ». Just like « j'ai faim » or « j'ai froid »." } },
             { fr: "Bonjour ! Ma gorge est très triste.", tr: "Merhaba! Boğazım çok üzgün.", en: "Hello! My throat is very sad.", ok: false,
               fb: { fr: "Pauvre gorge 😄 ! Mais une gorge n'est pas triste, elle fait mal. Dites « j'ai mal à la gorge ».", tr: "Zavallı boğaz 😄! Ama boğaz üzülmez, ağrır. « J'ai mal à la gorge » deyin.", en: "Poor throat 😄! But a throat isn't sad, it hurts. Say « j'ai mal à la gorge »." } }
           ] },
      b: { say: [["M", "Oh là là. Depuis quand ?"]],
           choices: [
             { fr: "Depuis deux jours.", tr: "İki gündür.", en: "For two days.", ok: true, go: "c" },
             { fr: "Pendant deux jours.", tr: "İki gün boyunca.", en: "During two days.", ok: false,
               fb: { fr: "Presque ! « Pendant », c'est une durée finie. Votre mal continue, donc : « depuis deux jours ».", tr: "Az kaldı! « Pendant » bitmiş bir süre için kullanılır. Ağrınız hâlâ devam ediyor, o yüzden: « depuis deux jours » (= iki gündür).", en: "Close! « Pendant » is for a finished period. Your pain is still going on, so: « depuis deux jours » (= for two days now)." } },
             { fr: "Demain.", tr: "Yarın.", en: "Tomorrow.", ok: false,
               fb: { fr: "Demain, c'est le futur 🔮 ! Il demande depuis quand vous avez mal : « depuis deux jours ».", tr: "Yarın gelecek zaman 🔮! Ne zamandan beri ağrınız olduğunu soruyor: « depuis deux jours ».", en: "Tomorrow is the future 🔮! He's asking since when it hurts: « depuis deux jours »." } }
           ] },
      c: { say: [["M", "Vous avez de la fièvre ? Vous toussez ?"]],
           choices: [
             { fr: "Non, pas de fièvre. Mais je tousse un peu.", tr: "Hayır, ateşim yok. Ama biraz öksürüyorum.", en: "No, no fever. But I'm coughing a bit.", ok: true, go: "d" },
             { fr: "Non, pas de fièvre. Mais je tue un peu.", tr: "Hayır, ateşim yok. Ama biraz öldürüyorum.", en: "No, no fever. But I kill a little.", ok: false,
               fb: { fr: "Aïe 😱 ! « Je tue » = je tue des gens ! Le bon verbe est « je tousse ». Le pharmacien recule d'un pas 😄.", tr: "Eyvah 😱! « Je tue » = öldürüyorum! Doğru fiil « je tousse » (öksürüyorum). Eczacı bir adım geri çekiliyor 😄.", en: "Yikes 😱! « Je tue » = I kill! The word you want is « je tousse » (I cough). The pharmacist takes a step back 😄." } },
             { fr: "Oui, je suis fièvre.", tr: "Evet, ben ateşim.", en: "Yes, I am fever.", ok: false,
               fb: { fr: "Vous n'êtes pas la fièvre 🔥 ! Encore avec avoir : « j'ai de la fièvre ». Et sinon : « pas de fièvre ».", tr: "Siz ateşin kendisi değilsiniz 🔥! Yine « avoir » ile: « j'ai de la fièvre » (ateşim var). Yoksa: « pas de fièvre ».", en: "You are not the fever 🔥! Again with avoir: « j'ai de la fièvre ». If not: « pas de fièvre »." } }
           ] },
      d: { say: [["M", "D'accord. Vous êtes allergique à un médicament ?"]],
           choices: [
             { fr: "Non, je ne suis pas allergique.", tr: "Hayır, alerjim yok.", en: "No, I'm not allergic.", ok: true, go: "e" },
             { fr: "Oui, merci beaucoup !", tr: "Evet, çok teşekkürler!", en: "Yes, thank you very much!", ok: false,
               fb: { fr: "Attention, « oui » = vous êtes allergique ! Le réflexe poli est mignon 😊, mais ici répondez : « non, je ne suis pas allergique ».", tr: "Dikkat, « oui » = alerjiniz var demek! Kibarlık refleksi çok tatlı 😊 ama burada şöyle cevap verin: « non, je ne suis pas allergique ».", en: "Careful, « oui » means you ARE allergic! The polite reflex is sweet 😊, but here answer: « non, je ne suis pas allergique »." } },
             { fr: "Oui, je suis allergique au lundi.", tr: "Evet, pazartesiye alerjim var.", en: "Yes, I'm allergic to Mondays.", ok: false,
               fb: { fr: "Ha, comme tout le monde 😄 ! Mais il parle des médicaments. Répondez : « non, je ne suis pas allergique ».", tr: "Ha, herkes gibi 😄! Ama ilaçlardan bahsediyor. Şöyle cevap verin: « non, je ne suis pas allergique ».", en: "Ha, like everyone 😄! But he means medicines. Answer: « non, je ne suis pas allergique »." } }
           ] },
      e: { say: [["M", "Alors, je vous propose des pastilles ou un sirop. Vous préférez quoi ?"]],
           choices: [
             { fr: "Les pastilles, s'il vous plaît.", tr: "Pastiller, lütfen.", en: "The lozenges, please.", ok: true, go: "f1" },
             { fr: "Le sirop, s'il vous plaît.", tr: "Şurup, lütfen.", en: "The syrup, please.", ok: true, go: "f2" },
             { fr: "Je préfère le chocolat.", tr: "Ben çikolatayı tercih ederim.", en: "I prefer chocolate.", ok: false,
               fb: { fr: "Nous aussi 🍫 ! Mais aujourd'hui, c'est pastilles ou sirop. Choisissez un des deux !", tr: "Biz de 🍫! Ama bugün seçenekler pastil ya da şurup. İkisinden birini seçin!", en: "Same here 🍫! But today it's lozenges or syrup. Pick one!" } }
           ] },
      f1: { say: [["M", "Alors : une pastille toutes les 2 heures. Maximum 6 pastilles par jour."]],
           choices: [
             { fr: "D'accord : une pastille toutes les 2 heures, 6 maximum.", tr: "Tamam: iki saatte bir pastil, en fazla 6 tane.", en: "OK: one lozenge every 2 hours, 6 max.", ok: true, go: "g" },
             { fr: "Donc 6 pastilles toutes les 2 heures ?", tr: "Yani iki saatte bir 6 pastil mi?", en: "So 6 lozenges every 2 hours?", ok: false,
               fb: { fr: "Oh là, ça fait beaucoup de pastilles 😅 ! C'est UNE pastille toutes les 2 heures, et 6 maximum par jour.", tr: "Aman, bu çok fazla pastil 😅! İki saatte BİR pastil, günde en fazla 6 tane.", en: "Whoa, that's a lot of lozenges 😅! It's ONE lozenge every 2 hours, and 6 max a day." } },
             { fr: "D'accord, je mange les 6 maintenant.", tr: "Tamam, 6'sını da şimdi yiyorum.", en: "OK, I'll eat all 6 now.", ok: false,
               fb: { fr: "Non, non 😄 ! Une seule à la fois, toutes les 2 heures. Et on ne la mange pas : on la suce doucement, comme un bonbon 🍬.", tr: "Yok yok 😄! Her seferinde sadece bir tane, iki saatte bir. Hem çiğnenmez: şeker gibi yavaş yavaş emilir 🍬.", en: "No, no 😄! Just one at a time, every 2 hours. And you don't chew it: you suck it slowly, like a sweet 🍬." } }
           ] },
      f2: { say: [["M", "Alors : une cuillère de sirop 3 fois par jour, après les repas."]],
           choices: [
             { fr: "D'accord : une cuillère 3 fois par jour, après les repas.", tr: "Tamam: günde 3 kez bir kaşık, yemeklerden sonra.", en: "OK: one spoonful 3 times a day, after meals.", ok: true, go: "g" },
             { fr: "Une cuillère avant les repas, c'est ça ?", tr: "Yemeklerden önce bir kaşık, değil mi?", en: "One spoonful before meals, right?", ok: false,
               fb: { fr: "Pas tout à fait : c'est APRÈS les repas, pas avant.", tr: "Tam değil: yemeklerden SONRA. « Avant » = önce, « après » = sonra.", en: "Not quite: it's AFTER meals. « Avant » = before, « après » = after." } },
             { fr: "D'accord, 3 bouteilles par jour.", tr: "Tamam, günde 3 şişe.", en: "OK, 3 bottles a day.", ok: false,
               fb: { fr: "Trois bouteilles 😱 ? Non, juste une cuillère, 3 fois par jour !", tr: "Üç şişe mi 😱? Hayır, sadece bir kaşık, günde 3 kez!", en: "Three bottles 😱? No, just one spoonful, 3 times a day!" } }
           ] },
      g: { say: [["M", "Et si ça ne va pas mieux dans 3 jours, allez chez le médecin."]],
           choices: [
             { fr: "D'accord, je vais aller chez le médecin.", tr: "Tamam, doktora gideceğim.", en: "OK, I'll go to the doctor.", ok: true, go: "h" },
             { fr: "D'accord, je vais aller à le médecin.", tr: "Tamam, doktora gideceğim.", en: "OK, I'll go to the doctor.", ok: false,
               fb: { fr: "Petit piège : pour aller voir une personne, on dit « chez » : « chez le médecin », « chez le coiffeur ».", tr: "Küçük bir tuzak: birinin yanına giderken « chez » denir: « chez le médecin », « chez le coiffeur » (kuaföre).", en: "Little trap: to go and see a person, French says « chez »: « chez le médecin », « chez le coiffeur »." } },
             { fr: "Oh non, le médecin est malade ?", tr: "Ah hayır, doktor hasta mı?", en: "Oh no, is the doctor sick?", ok: false,
               fb: { fr: "Non, non, le médecin va très bien 😄 ! C'est pour VOUS : si vous êtes encore malade dans 3 jours, allez chez le médecin.", tr: "Yok, doktor gayet iyi 😄! Söz konusu olan SİZSİNİZ: 3 gün sonra hâlâ hastaysanız doktora gidin.", en: "No, no, the doctor is fine 😄! It's about YOU: if you're still sick in 3 days, go to the doctor." } }
           ] },
      h: { say: [["M", "Très bien. Ça fait 6,80 €, s'il vous plaît."]],
           choices: [
             { fr: "Je peux payer par carte ?", tr: "Kartla ödeyebilir miyim?", en: "Can I pay by card?", ok: true, go: "i" },
             { fr: "Voilà 10 €.", tr: "Buyurun, 10 €.", en: "Here's 10 €.", ok: true, go: "i" },
             { fr: "Ça fait combien ?", tr: "Ne kadar tutuyor?", en: "How much is it?", ok: false,
               fb: { fr: "Il vient de le dire 😊 : 6,80 €, « six euros quatre-vingts ». Vous pouvez payer !", tr: "Az önce söyledi 😊: 6,80 €, « six euros quatre-vingts ». Ödeyebilirsiniz!", en: "He just said it 😊: 6.80 €, « six euros quatre-vingts ». You can pay now!" } }
           ] },
      i: { say: [["M", "Voilà ! Buvez du thé chaud avec du miel et reposez-vous bien. Bonne journée !"]],
           choices: [
             { fr: "Merci beaucoup, bonne journée !", tr: "Çok teşekkürler, iyi günler!", en: "Thank you very much, have a nice day!", ok: true, go: "fin" },
             { fr: "Merci, bonne nuit !", tr: "Teşekkürler, iyi geceler!", en: "Thanks, good night!", ok: false,
               fb: { fr: "Il est 11 h du matin 🌞 ! « Bonne nuit », c'est pour aller dormir. Dites « bonne journée ».", tr: "Saat sabahın 11'i 🌞! « Bonne nuit » yatmadan önce söylenir. « Bonne journée » deyin.", en: "It's 11 a.m. 🌞! « Bonne nuit » is for bedtime. Say « bonne journée »." } },
             { fr: "De rien !", tr: "Rica ederim!", en: "You're welcome!", ok: false,
               fb: { fr: "« De rien », c'est la réponse à « merci ». Ici, c'est vous qui dites « merci » 😊.", tr: "« De rien », « merci »ye verilen cevaptır. Burada teşekkür eden sizsiniz 😊.", en: "« De rien » is the answer to « merci ». Here, you're the one saying thank you 😊." } }
           ] },
      fin: { end: "win", say: [["M", "Au revoir madame, soignez-vous bien !"]],
             scene: { fr: "Bravo ! Vous avez expliqué votre problème et compris la posologie. Votre gorge dit merci ! 💊🎉", tr: "Bravo! Sorununuzu anlattınız ve ilacın nasıl kullanılacağını anladınız. Boğazınız teşekkür ediyor! 💊🎉", en: "Well done! You explained your problem and understood the dosage. Your throat says thank you! 💊🎉" } }
    } },

  { id: "av-resto", level: "A1", emoji: "🍽️",
    t: { fr: "Réserver une table", tr: "Masa ayırtmak", en: "Booking a table" },
    goal: { fr: "Réservez une table au restaurant par téléphone pour l'anniversaire de votre amie.", tr: "Arkadaşınızın doğum günü için telefonla restoranda masa ayırtın.", en: "Book a table at a restaurant by phone for your friend's birthday." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Nous sommes mardi matin. Samedi, c'est l'anniversaire de votre amie Aylin. Vous appelez un restaurant.", tr: "Bugün salı sabahı. Cumartesi, arkadaşınız Aylin'in doğum günü. Bir restoranı arıyorsunuz.", en: "It's Tuesday morning. Saturday is your friend Aylin's birthday. You call a restaurant." },
           say: [["M", "Restaurant Le Petit Jardin, bonjour !"]],
           choices: [
             { fr: "Bonjour monsieur ! Je voudrais réserver une table, s'il vous plaît.", tr: "Merhaba! Bir masa ayırtmak istiyorum, lütfen.", en: "Hello! I'd like to book a table, please.", ok: true, go: "b" },
             { fr: "Bonjour monsieur ! Je voudrais louer une table, s'il vous plaît.", tr: "Merhaba! Bir masa kiralamak istiyorum, lütfen.", en: "Hello! I'd like to rent a table, please.", ok: false,
               fb: { fr: "« Louer » = payer pour emporter la table chez vous 😄 ! Au restaurant, on dit « réserver une table ».", tr: "« Louer » = kiralamak 😄: masayı eve götürmeyeceksiniz ki! Restoranda « réserver une table » denir.", en: "« Louer » = to rent 😄: you're not taking the table home! At a restaurant, say « réserver une table »." } },
             { fr: "Salut ! Ça va ?", tr: "Selam! Naber?", en: "Hi! How's it going?", ok: false,
               fb: { fr: "Trop familier : vous ne connaissez pas ce monsieur ! Au téléphone, on dit « bonjour monsieur » et « je voudrais… ».", tr: "Fazla samimi: bu beyi tanımıyorsunuz! Telefonda « bonjour monsieur » ve « je voudrais… » denir.", en: "Too casual: you don't know this man! On the phone, say « bonjour monsieur » and « je voudrais… »." } }
           ] },
      b: { say: [["M", "Avec plaisir. C'est pour quel jour ?"]],
           choices: [
             { fr: "Pour samedi, s'il vous plaît.", tr: "Cumartesi için, lütfen.", en: "For Saturday, please.", ok: true, go: "c" },
             { fr: "Pour le samedi, s'il vous plaît.", tr: "Cumartesileri için, lütfen.", en: "For Saturdays, please.", ok: false,
               fb: { fr: "Attention : « le samedi » = tous les samedis 😄 ! Vous allez manger là chaque semaine ? Pour ce samedi : « pour samedi ».", tr: "Dikkat: « le samedi » = her cumartesi 😄! Her hafta orada mı yiyeceksiniz? Bu cumartesi için: « pour samedi ».", en: "Careful: « le samedi » = every Saturday 😄! Eating there every week? For this Saturday: « pour samedi »." } },
             { fr: "Pour 4 personnes.", tr: "4 kişilik.", en: "For 4 people.", ok: false,
               fb: { fr: "C'est une bonne information, mais il demande le jour 😊. Répondez : « pour samedi ».", tr: "İyi bir bilgi ama günü soruyor 😊. Cevap: « pour samedi ».", en: "Good info, but he's asking for the day 😊. Answer: « pour samedi »." } }
           ] },
      c: { say: [["M", "Samedi midi ou samedi soir ?"]],
           choices: [
             { fr: "Samedi soir, s'il vous plaît.", tr: "Cumartesi akşamı, lütfen.", en: "Saturday evening, please.", ok: true, go: "d1" },
             { fr: "Samedi midi, s'il vous plaît.", tr: "Cumartesi öğlen, lütfen.", en: "Saturday lunchtime, please.", ok: true, go: "d2" },
             { fr: "Samedi minuit, s'il vous plaît.", tr: "Cumartesi gece yarısı, lütfen.", en: "Saturday midnight, please.", ok: false,
               fb: { fr: "Minuit = 0 h 🌙, la cuisine dort ! « Midi » = 12 h, « soir » = le soir. Choisissez un des deux.", tr: "Minuit = gece yarısı 🌙, mutfak uyuyor! « Midi » = öğlen 12, « soir » = akşam. Birini seçin.", en: "Minuit = midnight 🌙, the kitchen is asleep! « Midi » = 12 noon, « soir » = evening. Pick one." } }
           ] },
      d1: { say: [["M", "Le soir, j'ai une table à 19 h 30 ou à 21 h. Vous préférez ?"]],
           choices: [
             { fr: "À 19 h 30, s'il vous plaît.", tr: "19.30'da, lütfen.", en: "At 7:30 p.m., please.", ok: true, go: "e" },
             { fr: "À 21 h, s'il vous plaît.", tr: "21.00'de, lütfen.", en: "At 9 p.m., please.", ok: true, go: "e" },
             { fr: "Pendant 2 heures, s'il vous plaît.", tr: "2 saat boyunca, lütfen.", en: "For 2 hours, please.", ok: false,
               fb: { fr: "Il demande « à quelle heure », pas « combien de temps » 😊. Choisissez : 19 h 30 ou 21 h.", tr: "« Saat kaçta » diye soruyor, « ne kadar süre » değil 😊. Seçin: 19.30 mu, 21.00 mi?", en: "He's asking « what time », not « how long » 😊. Choose: 7:30 or 9 p.m." } }
           ] },
      d2: { say: [["M", "Le midi, j'ai une table à 12 h ou à 13 h 30. Vous préférez ?"]],
           choices: [
             { fr: "À 12 h, s'il vous plaît.", tr: "Saat 12'de, lütfen.", en: "At 12, please.", ok: true, go: "e" },
             { fr: "À 13 h 30, s'il vous plaît.", tr: "13.30'da, lütfen.", en: "At 1:30, please.", ok: true, go: "e" },
             { fr: "Oui, je préfère.", tr: "Evet, tercih ederim.", en: "Yes, I prefer.", ok: false,
               fb: { fr: "« Oui »… mais quelle heure 🤔 ? Choisissez : « à 12 h » ou « à 13 h 30 ».", tr: "« Evet »… ama hangi saat 🤔? Seçin: « à 12 h » mı, « à 13 h 30 » mu?", en: "« Yes »… but which time 🤔? Choose: « à 12 h » or « à 13 h 30 »." } }
           ] },
      e: { say: [["M", "Très bien. Vous êtes combien de personnes ?"]],
           choices: [
             { fr: "Nous sommes quatre.", tr: "Dört kişiyiz.", en: "There are four of us.", ok: true, go: "f" },
             { fr: "Pour 4 personnes.", tr: "4 kişi için.", en: "For 4 people.", ok: true, go: "f" },
             { fr: "Nous avons quatre.", tr: "Dört tanemiz var.", en: "We have four.", ok: false,
               fb: { fr: "Petit piège 😊 ! Pour le nombre de personnes, on dit « nous sommes quatre », avec être.", tr: "Küçük bir tuzak 😊! Kişi sayısı için « nous sommes quatre » (« être » ile!) denir, tıpkı « dört kişiyiz » gibi.", en: "Little trap 😊! For the number of people, say « nous sommes quatre » (with être!), literally « we are four »." } }
           ] },
      f: { say: [["M", "C'est noté. C'est à quel nom ?"]],
           choices: [
             { fr: "Au nom de Çelik. C'est le nom de mon amie.", tr: "Çelik adına. Arkadaşımın soyadı.", en: "Under the name Çelik. It's my friend's name.", ok: true, go: "g" },
             { fr: "Le nom ? Oui, j'ai un nom.", tr: "İsim mi? Evet, bir ismim var.", en: "A name? Yes, I have a name.", ok: false,
               fb: { fr: "Bonne nouvelle 😄 ! Mais il veut savoir lequel : « au nom de Çelik ».", tr: "Ne güzel 😄! Ama hangisi olduğunu bilmek istiyor: « au nom de Çelik ».", en: "Good news 😄! But he wants to know which one: « au nom de Çelik »." } },
             { fr: "C'est à côté de la gare.", tr: "Garın yanında.", en: "It's next to the station.", ok: false,
               fb: { fr: "« À quel nom », pas « où » 😊 ! Il veut un nom pour la réservation : « au nom de Çelik ».", tr: "« Hangi isimle » diyor, « nerede » değil 😊! Rezervasyon için bir isim istiyor: « au nom de Çelik ».", en: "« Under what name », not « where » 😊! He needs a name for the booking: « au nom de Çelik »." } }
           ] },
      g: { say: [["M", "Çelik… Vous pouvez épeler, s'il vous plaît ?"]],
           choices: [
             { fr: "Oui : C cédille, E, L, I, K.", tr: "Evet: Ç, E, L, İ, K.", en: "Yes: C cedilla, E, L, I, K.", ok: true, go: "h" },
             { fr: "Oui : S, E, L, I, K.", tr: "Evet: S, E, L, İ, K.", en: "Yes: S, E, L, I, K.", ok: false,
               fb: { fr: "Presque ! Avec « S », il va écrire « Selik ». Bonne nouvelle : le « ç » existe en français, il s'appelle « C cédille » 😊.", tr: "Çok yakın! « S » derseniz « Selik » yazar. İyi haber: « ç » Fransızcada da var, adı « C cédille » 😊.", en: "Close! With « S », he'll write « Selik ». Good news: « ç » exists in French too, it's called « C cédille » 😊." } },
             { fr: "Non merci.", tr: "Hayır, teşekkürler.", en: "No, thanks.", ok: false,
               fb: { fr: "« Épeler » = dire les lettres une par une. Sans vous, il ne peut pas écrire 😊 ! Dites : C cédille, E, L, I, K.", tr: "« Épeler » = harf harf söylemek. Siz olmadan yazamaz 😊! Şöyle deyin: C cédille, E, L, I, K.", en: "« Épeler » = to spell, letter by letter. He can't write it without you 😊! Say: C cédille, E, L, I, K." } }
           ] },
      h: { say: [["M", "Parfait. Et un numéro de téléphone, s'il vous plaît ?"]],
           choices: [
             { fr: "Oui, c'est le 06 12 34 56 78.", tr: "Evet, 06 12 34 56 78.", en: "Yes, it's 06 12 34 56 78.", ok: true, go: "i" },
             { fr: "Oui, c'est le +90 555 123 45 67.", tr: "Evet, +90 555 123 45 67.", en: "Yes, it's +90 555 123 45 67.", ok: false,
               fb: { fr: "Oups, c'est votre ancien numéro turc 🇹🇷 ! Donnez votre numéro français : « 06… ».", tr: "Eyvah, bu eski Türkiye numaranız 🇹🇷! Fransız numaranızı verin: « 06… ».", en: "Oops, that's your old Turkish number 🇹🇷! Give your French number: « 06… »." } },
             { fr: "Mon téléphone est noir.", tr: "Telefonum siyah.", en: "My phone is black.", ok: false,
               fb: { fr: "Joli téléphone 😄 ! Mais il veut le numéro, pas la couleur : « c'est le 06… ».", tr: "Güzel telefon 😄! Ama rengini değil numarasını istiyor: « c'est le 06… ».", en: "Nice phone 😄! But he wants the number, not the colour: « c'est le 06… »." } }
           ] },
      i: { say: [["M", "C'est noté : samedi, 4 personnes, au nom de Çelik. Merci, madame !"]],
           choices: [
             { fr: "Merci ! Et… c'est pour un anniversaire !", tr: "Teşekkürler! Bu arada… bir doğum günü için!", en: "Thanks! And… it's for a birthday!", ok: true, go: "j" },
             { fr: "Parfait, merci ! Au revoir, à samedi !", tr: "Harika, teşekkürler! Hoşça kalın, cumartesi görüşürüz!", en: "Perfect, thanks! Goodbye, see you Saturday!", ok: true, go: "fin" },
             { fr: "Merci, à demain !", tr: "Teşekkürler, yarın görüşürüz!", en: "Thanks, see you tomorrow!", ok: false,
               fb: { fr: "Nous sommes mardi, et la réservation est samedi 😉. Dites « à samedi ! ».", tr: "Bugün salı, rezervasyon ise cumartesi 😉. « À samedi ! » deyin.", en: "It's Tuesday, and the booking is on Saturday 😉. Say « à samedi ! »." } }
           ] },
      j: { say: [["M", "Oh, super ! Nous allons préparer un petit gâteau avec une bougie."]],
           choices: [
             { fr: "Génial, merci beaucoup ! À samedi !", tr: "Harika, çok teşekkürler! Cumartesi görüşürüz!", en: "Great, thank you so much! See you Saturday!", ok: true, go: "fin" },
             { fr: "Oh merci, je suis très excitée !", tr: "Ah teşekkürler, çok heyecanlıyım!", en: "Oh thanks, I'm so excited!", ok: false,
               fb: { fr: "Attention, faux ami 🙈 ! En français, « excitée » a souvent un sens… un peu trop romantique. Dites plutôt « je suis très contente ! ».", tr: "Dikkat, sahte arkadaş 🙈! Fransızcada « excitée » çoğu zaman… fazla romantik bir anlam taşır. Bunun yerine « je suis très contente ! » (çok mutluyum) deyin.", en: "Careful, false friend 🙈! In French, « excitée » often sounds… a bit too romantic. Say « je suis très contente ! » instead." } },
             { fr: "Une bougie ? Il y a un problème d'électricité ?", tr: "Mum mu? Elektrik sorunu mu var?", en: "A candle? Is there a power cut?", ok: false,
               fb: { fr: "Ha ha, non 😄 ! La bougie, c'est pour le gâteau d'anniversaire 🎂. Dites « génial, merci ! ».", tr: "Yok yok 😄! Mum doğum günü pastası için 🎂. « Génial, merci ! » deyin.", en: "Ha, no 😄! The candle is for the birthday cake 🎂. Say « génial, merci ! »." } }
           ] },
      fin: { end: "win", say: [["M", "À samedi, madame !"]],
             scene: { fr: "Bravo ! Table réservée, nom épelé… et peut-être un gâteau en bonus. Aylin va être très contente ! 🎉", tr: "Bravo! Masa ayrıldı, isim harf harf söylendi… belki üstüne bir de pasta. Aylin çok sevinecek! 🎉", en: "Well done! Table booked, name spelled… and maybe a cake as a bonus. Aylin is going to be so happy! 🎉" } }
    } },

  { id: "av-cours", level: "A1", emoji: "📚",
    t: { fr: "Premier cours de français", tr: "İlk Fransızca dersi", en: "First French class" },
    goal: { fr: "Présentez-vous à la professeure et faites connaissance avec un camarade.", tr: "Kendinizi öğretmene tanıtın ve bir sınıf arkadaşınızla tanışın.", en: "Introduce yourself to the teacher and get to know a classmate." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Lundi, 9 h. C'est votre premier cours de français pour adultes. Vous ouvrez la porte de la salle 12.", tr: "Pazartesi, saat 9. Yetişkinler için ilk Fransızca dersiniz. 12 numaralı sınıfın kapısını açıyorsunuz.", en: "Monday, 9 a.m. Your first French class for adults. You open the door of room 12." },
           say: [["F", "Bonjour ! Vous êtes nouvelle ? Entrez, entrez !"]],
           choices: [
             { fr: "Bonjour madame ! Oui, je suis nouvelle.", tr: "Merhaba hocam! Evet, yeniyim.", en: "Hello! Yes, I'm new.", ok: true, go: "b" },
             { fr: "Bonjour madame ! Oui, je suis neuve.", tr: "Merhaba hocam! Evet, ben yepyeniyim.", en: "Hello! Yes, I'm brand new.", ok: false,
               fb: { fr: "« Neuf, neuve », c'est pour les objets : un téléphone neuf 📱, une robe neuve. Pour une personne : « je suis nouvelle ».", tr: "« Neuf, neuve » eşyalar için kullanılır: yeni bir telefon 📱, yeni bir elbise. Bir kişi için: « je suis nouvelle ».", en: "« Neuf, neuve » is for things: a brand-new phone 📱, a new dress. For a person: « je suis nouvelle »." } },
             { fr: "Bonsoir madame ! Oui, c'est moi.", tr: "İyi akşamlar hocam! Evet, benim.", en: "Good evening! Yes, it's me.", ok: false,
               fb: { fr: "Il est 9 h du matin ☀️ : on dit « bonjour ». « Bonsoir », c'est à partir de 18 h environ.", tr: "Saat sabahın 9'u ☀️: « bonjour » denir. « Bonsoir » akşam 6 civarından itibaren söylenir.", en: "It's 9 a.m. ☀️: say « bonjour ». « Bonsoir » is from about 6 p.m." } }
           ] },
      b: { say: [["F", "Bienvenue ! Je suis Nathalie, votre professeure. Vous venez d'où ?"]],
           choices: [
             { fr: "Je viens de Turquie.", tr: "Türkiye'den geliyorum.", en: "I'm from Turkey.", ok: true, go: "c" },
             { fr: "Je suis Turquie.", tr: "Ben Türkiye'yim.", en: "I am Turkey.", ok: false,
               fb: { fr: "Vous n'êtes pas un pays 😄 ! On dit « je viens de Turquie » ou « je suis turque ».", tr: "Siz bir ülke değilsiniz 😄! « Je viens de Turquie » ya da « je suis turque » denir.", en: "You're not a country 😄! Say « je viens de Turquie » or « je suis turque »." } },
             { fr: "J'habite en France.", tr: "Fransa'da yaşıyorum.", en: "I live in France.", ok: false,
               fb: { fr: "C'est vrai, mais elle demande votre pays d'origine 😊 : « je viens de Turquie ».", tr: "Doğru ama nereli olduğunuzu soruyor 😊: « je viens de Turquie ».", en: "True, but she's asking where you come from 😊: « je viens de Turquie »." } }
           ] },
      c: { say: [["F", "Super ! Pour commencer, un petit exercice. Quel âge avez-vous ?"]],
           choices: [
             { fr: "J'ai 25 ans.", tr: "25 yaşındayım.", en: "I'm 25.", ok: true, go: "d" },
             { fr: "Je suis 25 ans.", tr: "Ben 25 yaşım.", en: "I am 25 years.", ok: false,
               fb: { fr: "Le piège numéro 1 😄 ! En français, l'âge se dit avec avoir : « j'ai 25 ans ». Tout le monde fait cette erreur au début !", tr: "1 numaralı tuzak 😄! Fransızcada yaş « avoir » (sahip olmak) ile söylenir: « j'ai 25 ans ». Başta herkes bu hatayı yapar!", en: "Trap number 1 😄! In French, age uses avoir: « j'ai 25 ans ». Everyone makes this mistake at first!" } },
             { fr: "J'ai 25.", tr: "25'im var.", en: "I have 25.", ok: false,
               fb: { fr: "Il manque un petit mot : « ans ». Sinon, 25 quoi ? 25 chats ? 🐱 Dites « j'ai 25 ans ».", tr: "Küçük bir kelime eksik: « ans » (yıl). Yoksa 25 ne? 25 kedi mi? 🐱 « J'ai 25 ans » deyin.", en: "A little word is missing: « ans ». Otherwise, 25 what? 25 cats? 🐱 Say « j'ai 25 ans »." } }
           ] },
      d: { say: [["F", "Et qu'est-ce que vous faites dans la vie ?"]],
           choices: [
             { fr: "Je suis kinésithérapeute.", tr: "Fizyoterapistim.", en: "I'm a physiotherapist.", ok: true, go: "e" },
             { fr: "Je suis une kinésithérapeute.", tr: "Ben bir fizyoterapistim.", en: "I am a physiotherapist.", ok: false,
               fb: { fr: "Presque parfait ! Pour un métier, pas de « un » ou « une » : « je suis kinésithérapeute », « je suis professeure ».", tr: "Neredeyse mükemmel! Meslek söylerken « un » ya da « une » kullanılmaz: « je suis kinésithérapeute », « je suis professeure ».", en: "Almost perfect! No « un » or « une » before a job: « je suis kinésithérapeute », « je suis professeure »." } },
             { fr: "Je fais la vie.", tr: "Hayatı yapıyorum.", en: "I do life.", ok: false,
               fb: { fr: "Belle philosophie 😄 ! Mais elle demande votre métier : « je suis kinésithérapeute ».", tr: "Güzel bir felsefe 😄! Ama mesleğinizi soruyor: « je suis kinésithérapeute ».", en: "Lovely philosophy 😄! But she's asking about your job: « je suis kinésithérapeute »." } }
           ] },
      e: { say: [["F", "Oh, kiné ! Et pourquoi vous apprenez le français ?"]],
           choices: [
             { fr: "Pour travailler en France comme kiné.", tr: "Fransa'da fizyoterapist olarak çalışmak için.", en: "To work in France as a physio.", ok: true, go: "f" },
             { fr: "Parce que j'adore les croissants !", tr: "Çünkü kruvasanlara bayılıyorum!", en: "Because I love croissants!", ok: true, go: "e2" },
             { fr: "Pourquoi pas ?", tr: "Neden olmasın?", en: "Why not?", ok: false,
               fb: { fr: "Ha, réponse de philosophe 😄 ! Elle veut une raison : « pour travailler… » ou « parce que… ».", tr: "Ha, tam bir filozof cevabı 😄! Bir sebep istiyor: « pour travailler… » ya da « parce que… ».", en: "Ha, a philosopher's answer 😄! She wants a reason: « pour travailler… » or « parce que… »." } }
           ] },
      e2: { scene: { fr: "Toute la classe rit… avec vous !", tr: "Bütün sınıf gülüyor… sizinle birlikte!", en: "The whole class laughs… with you!" },
           say: [["F", "Ha ha ! Excellente raison ! Et aussi pour le travail, non ?"]],
           choices: [
             { fr: "Oui, aussi pour travailler comme kiné.", tr: "Evet, fizyoterapist olarak çalışmak için de.", en: "Yes, also to work as a physio.", ok: true, go: "f" },
             { fr: "Non, seulement pour les croissants.", tr: "Hayır, sadece kruvasanlar için.", en: "No, only for the croissants.", ok: false,
               fb: { fr: "😄 Les croissants, c'est important… Mais elle parle du travail : répondez « oui, aussi pour travailler comme kiné ».", tr: "😄 Kruvasanlar önemli tabii… Ama işten bahsediyor: « oui, aussi pour travailler comme kiné » deyin.", en: "😄 Croissants matter… But she's talking about work: say « oui, aussi pour travailler comme kiné »." } }
           ] },
      f: { scene: { fr: "La professeure vous montre une chaise à côté d'un jeune homme.", tr: "Öğretmen size genç bir adamın yanındaki sandalyeyi gösteriyor.", en: "The teacher points to a chair next to a young man." },
           say: [["F", "Asseyez-vous à côté de Lukas."], ["M2", "Salut ! Moi, c'est Lukas. Je suis allemand."]],
           choices: [
             { fr: "Salut Lukas ! Enchantée.", tr: "Selam Lukas! Memnun oldum.", en: "Hi Lukas! Nice to meet you.", ok: true, go: "g" },
             { fr: "Au revoir Lukas !", tr: "Hoşça kal Lukas!", en: "Bye Lukas!", ok: false,
               fb: { fr: "Vous venez d'arriver, ne partez pas déjà 😄 ! Pour dire bonjour : « salut Lukas, enchantée ! ».", tr: "Daha yeni geldiniz, hemen gitmeyin 😄! Selam vermek için: « salut Lukas, enchantée ! ».", en: "You just arrived, don't leave yet 😄! To say hi: « salut Lukas, enchantée ! »." } },
             { fr: "Moi aussi, je suis allemande !", tr: "Ben de Almanım!", en: "Me too, I'm German!", ok: false,
               fb: { fr: "Ah bon 😄 ? Vous venez de Turquie ! Dites simplement « salut Lukas, enchantée ! ».", tr: "Öyle mi 😄? Siz Türkiye'den geliyorsunuz! Sadece « salut Lukas, enchantée ! » deyin.", en: "Really 😄? You're from Turkey! Just say « salut Lukas, enchantée ! »." } }
           ] },
      g: { say: [["M2", "On se tutoie ? Tu habites où ?"]],
           choices: [
             { fr: "Oui, bien sûr ! J'habite près de l'école. Et toi ?", tr: "Evet, tabii! Okulun yakınında oturuyorum. Ya sen?", en: "Sure! I live near the school. And you?", ok: true, go: "h" },
             { fr: "Oui ! J'habite près de l'école. Et vous ?", tr: "Evet! Okulun yakınında oturuyorum. Ya siz?", en: "Yes! I live near the school. And you (formal)?", ok: false,
               fb: { fr: "Vous dites « oui » au « tu »… puis vous dites « vous » 😄. Avec Lukas, maintenant, c'est « et toi ? ».", tr: "« Tu »ya evet dediniz… sonra « vous » dediniz 😄. Artık Lukas'la « et toi ? » (ya sen?).", en: "You said yes to « tu »… then used « vous » 😄. With Lukas, it's « et toi ? » now." } },
             { fr: "Non, non, je ne tue pas !", tr: "Hayır hayır, ben kimseyi öldürmem!", en: "No, no, I don't kill!", ok: false,
               fb: { fr: "😄 « Tutoyer », ce n'est pas « tuer » ! « On se tutoie ? » = on se dit « tu » ? Répondez « oui, bien sûr ! ».", tr: "😄 « Tutoyer », « tuer » (öldürmek) değil! « On se tutoie ? » = birbirimize « sen » diyelim mi? « Oui, bien sûr ! » deyin.", en: "😄 « Tutoyer » isn't « tuer » (to kill)! « On se tutoie ? » = shall we say « tu » to each other? Answer « oui, bien sûr ! »." } }
           ] },
      h: { scene: { fr: "Oh non : vous n'avez pas le livre !", tr: "Eyvah: kitabınız yok!", en: "Oh no: you don't have the book!" },
           say: [["M2", "Moi, j'habite à côté de la gare. Chut, la prof commence…"], ["F", "Bon ! Ouvrez votre livre à la page 12, s'il vous plaît."]],
           choices: [
             { fr: "Pardon madame, je n'ai pas de livre.", tr: "Pardon hocam, kitabım yok.", en: "Sorry, I don't have a book.", ok: true, go: "i1" },
             { fr: "Lukas, je peux regarder ton livre ?", tr: "Lukas, kitabına bakabilir miyim?", en: "Lukas, can I look at your book?", ok: true, go: "i2" },
             { fr: "Pardon madame, je n'ai pas un livre.", tr: "Pardon hocam, bir kitabım yok.", en: "Sorry, I don't have one book.", ok: false,
               fb: { fr: "Presque ! Après « pas », « un » devient « de » : « je n'ai pas de livre ». Un grand classique !", tr: "Çok yakın! « pas »dan sonra « un », « de » olur: « je n'ai pas de livre ». Klasik bir tuzak!", en: "Close! After « pas », « un » becomes « de »: « je n'ai pas de livre ». A classic!" } }
           ] },
      i1: { say: [["F", "Pas de problème ! Voilà un livre pour aujourd'hui."]],
           choices: [
             { fr: "Merci beaucoup, madame !", tr: "Çok teşekkürler hocam!", en: "Thank you very much!", ok: true, go: "j" },
             { fr: "Merci, tu es gentille !", tr: "Sağ ol, sen çok tatlısın!", en: "Thanks, you're sweet!", ok: false,
               fb: { fr: "Avec la professeure, on garde « vous » : « merci, vous êtes gentille ! ».", tr: "Öğretmenle « vous » (siz) kullanılır: « merci, vous êtes gentille ! ».", en: "With the teacher, keep « vous »: « merci, vous êtes gentille ! »." } }
           ] },
      i2: { say: [["M2", "Bien sûr ! On regarde ensemble. Page 12… voilà !"]],
           choices: [
             { fr: "Merci Lukas, tu es sympa !", tr: "Sağ ol Lukas, çok iyisin!", en: "Thanks Lukas, you're nice!", ok: true, go: "j" },
             { fr: "Merci Lukas, vous êtes sympa !", tr: "Teşekkürler Lukas, çok iyisiniz!", en: "Thank you Lukas, you're nice (formal)!", ok: false,
               fb: { fr: "Avec Lukas, c'est « tu » maintenant 😉 : « merci Lukas, tu es sympa ! ».", tr: "Lukas'la artık « tu » diyorsunuz 😉: « merci Lukas, tu es sympa ! ».", en: "You're on « tu » terms with Lukas now 😉: « merci Lukas, tu es sympa ! »." } }
           ] },
      j: { scene: { fr: "Deux heures plus tard…", tr: "İki saat sonra…", en: "Two hours later…" },
           say: [["F", "Bravo à tous ! Le cours est fini. À jeudi, même heure !"]],
           choices: [
             { fr: "Merci madame, à jeudi !", tr: "Teşekkürler hocam, perşembe görüşürüz!", en: "Thank you, see you on Thursday!", ok: true, go: "fin" },
             { fr: "Au revoir madame ! Salut Lukas, à jeudi !", tr: "Hoşça kalın hocam! Görüşürüz Lukas, perşembeye!", en: "Goodbye! Bye Lukas, see you Thursday!", ok: true, go: "fin" },
             { fr: "Je suis finie !", tr: "Ben bittim!", en: "I'm finished!", ok: false,
               fb: { fr: "Oups ! « Je suis finie » veut dire « c'est la fin pour moi » 😵. C'est le cours qui est fini, pas vous ! Dites « merci, à jeudi ! ».", tr: "Eyvah! « Je suis finie » = « benim için her şey bitti » demek 😵. Biten ders, siz değilsiniz! « Merci, à jeudi ! » deyin.", en: "Oops! « Je suis finie » means « I'm done for » 😵. It's the class that's finished, not you! Say « merci, à jeudi ! »." } }
           ] },
      fin: { end: "win", say: [["F", "À jeudi ! Et bravo pour votre premier cours !"], ["M2", "Salut, à jeudi !"]],
             scene: { fr: "Premier cours : réussi ! Vous avez une prof sympa et un nouveau copain de classe. 📚✨", tr: "İlk ders: başarılı! Tatlı bir öğretmeniniz ve yeni bir sınıf arkadaşınız var. 📚✨", en: "First class: nailed it! You've got a nice teacher and a new classmate. 📚✨" } }
    } },

  { id: "av-vetements", level: "A1", emoji: "👗",
    t: { fr: "Une veste pour l'hiver", tr: "Kış için bir ceket", en: "A jacket for winter" },
    goal: { fr: "Achetez une veste à votre taille et demandez si l'échange est possible.", tr: "Bedeninize uygun bir ceket alın ve değişim yapılıp yapılamayacağını sorun.", en: "Buy a jacket in your size and ask if you can exchange it." },
    start: "a",
    nodes: {
      a: { scene: { fr: "C'est octobre et il fait froid ! Vous entrez dans un magasin de vêtements.", tr: "Ekim ayı ve hava soğuk! Bir giyim mağazasına giriyorsunuz.", en: "It's October and it's cold! You walk into a clothes shop." },
           say: [["F", "Bonjour madame ! Je peux vous aider ?"]],
           choices: [
             { fr: "Oui, je cherche une veste. J'ai froid !", tr: "Evet, bir ceket arıyorum. Üşüyorum!", en: "Yes, I'm looking for a jacket. I'm cold!", ok: true, go: "b" },
             { fr: "Non merci, je regarde.", tr: "Hayır, teşekkürler, sadece bakıyorum.", en: "No thanks, I'm just looking.", ok: true, go: "a2" },
             { fr: "Oui, je cherche une veste. Je suis froide !", tr: "Evet, bir ceket arıyorum. Ben soğuk biriyim!", en: "Yes, I'm looking for a jacket. I'm a cold person!", ok: false,
               fb: { fr: "Oups ! « Je suis froide » = je suis une personne froide ❄️… et ce n'est pas vrai ! Pour la température : « j'ai froid ».", tr: "Eyvah! « Je suis froide » = soğuk bir insanım demek ❄️… ki hiç doğru değil! Üşüdüğünüzü söylemek için: « j'ai froid ».", en: "Oops! « Je suis froide » = I'm a cold person ❄️… and that's not true! For temperature: « j'ai froid »." } }
           ] },
      a2: { scene: { fr: "Vous regardez les pulls, les robes, les chaussettes… mais pas de veste. La vendeuse revient.", tr: "Kazaklara, elbiselere, çoraplara bakıyorsunuz… ama ceket yok. Satıcı geri geliyor.", en: "You look at the jumpers, the dresses, the socks… but no jackets. The shop assistant comes back." },
           say: [["F", "Vous cherchez quelque chose ?"]],
           choices: [
             { fr: "Oui, je cherche une veste, s'il vous plaît.", tr: "Evet, bir ceket arıyorum, lütfen.", en: "Yes, I'm looking for a jacket, please.", ok: true, go: "b" },
             { fr: "Oui, je cherche la vendeuse.", tr: "Evet, satıcıyı arıyorum.", en: "Yes, I'm looking for the shop assistant.", ok: false,
               fb: { fr: "La vendeuse, c'est elle 😄 ! Dites ce que vous cherchez : « une veste ».", tr: "Satıcı zaten o 😄! Ne aradığınızı söyleyin: « une veste ».", en: "She IS the shop assistant 😄! Say what you're looking for: « une veste »." } }
           ] },
      b: { say: [["F", "Les vestes sont ici. Vous faites quelle taille ?"]],
           choices: [
             { fr: "Je fais du 38, je pense.", tr: "Sanırım 38 giyiyorum.", en: "I'm a size 38, I think.", ok: true, go: "c" },
             { fr: "Je fais 1 mètre 65.", tr: "Boyum 1 metre 65.", en: "I'm 1 metre 65.", ok: false,
               fb: { fr: "Ça, c'est votre hauteur 📏 ! Ici, « taille » = la taille du vêtement : 36, 38, 40… ou S, M, L.", tr: "Bu sizin boyunuz 📏! Burada « taille » = beden: 36, 38, 40… ya da S, M, L.", en: "That's your height 📏! Here, « taille » = clothing size: 36, 38, 40… or S, M, L." } },
             { fr: "Je suis 38.", tr: "Ben 38'im.", en: "I am 38.", ok: false,
               fb: { fr: "Presque ! Pour les vêtements, on dit « je fais du 38 ».", tr: "Çok yakın! Kıyafet bedeni için « je fais du 38 » denir.", en: "Close! For clothes, say « je fais du 38 »." } }
           ] },
      c: { say: [["F", "Et quelle couleur ? J'ai du noir, du bleu marine et du rouge."]],
           choices: [
             { fr: "En noir, s'il vous plaît.", tr: "Siyah olsun, lütfen.", en: "In black, please.", ok: true, go: "d" },
             { fr: "En rouge, s'il vous plaît !", tr: "Kırmızı olsun, lütfen!", en: "In red, please!", ok: true, go: "d" },
             { fr: "En blanc, s'il vous plaît.", tr: "Beyaz olsun, lütfen.", en: "In white, please.", ok: false,
               fb: { fr: "Il n'y a pas de blanc 😊. Écoutez bien : noir, bleu marine ou rouge.", tr: "Beyaz yok 😊. İyi dinleyin: siyah, lacivert ya da kırmızı.", en: "There's no white 😊. Listen again: black, navy blue or red." } }
           ] },
      d: { say: [["F", "Voilà, en 38. Vous voulez l'essayer ?"]],
           choices: [
             { fr: "Oui ! Où sont les cabines d'essayage ?", tr: "Evet! Deneme kabinleri nerede?", en: "Yes! Where are the fitting rooms?", ok: true, go: "e" },
             { fr: "Oui, je peux la goûter ?", tr: "Evet, tadına bakabilir miyim?", en: "Yes, can I taste it?", ok: false,
               fb: { fr: "« Goûter », c'est pour la nourriture 😋 ! Une veste, on l'essaie : « je peux l'essayer ? ».", tr: "« Goûter » yemekler için 😋! Ceket denenir: « je peux l'essayer ? ».", en: "« Goûter » is for food 😋! A jacket, you try on: « je peux l'essayer ? »." } },
             { fr: "Oui ! Où sont les toilettes ?", tr: "Evet! Tuvalet nerede?", en: "Yes! Where's the toilet?", ok: false,
               fb: { fr: "Les toilettes, c'est pour autre chose 🚽 ! Pour essayer un vêtement : « la cabine d'essayage ».", tr: "Tuvalet başka işler için 🚽! Kıyafet denemek için: « la cabine d'essayage » (deneme kabini).", en: "The toilet is for something else 🚽! To try on clothes: « la cabine d'essayage »." } }
           ] },
      e: { scene: { fr: "Dans la cabine : la veste est un peu petite aux bras.", tr: "Kabinde: ceketin kolları biraz dar.", en: "In the fitting room: the jacket is a bit tight in the arms." },
           say: [["F", "Alors, ça va ?"]],
           choices: [
             { fr: "Elle est un peu petite. Vous avez la taille au-dessus ?", tr: "Biraz küçük. Bir üst bedeni var mı?", en: "It's a bit small. Do you have the next size up?", ok: true, go: "f" },
             { fr: "Je suis petite.", tr: "Ben küçüğüm.", en: "I'm small.", ok: false,
               fb: { fr: "Mais non, vous êtes parfaite 😄 ! C'est la veste qui est petite : « elle est un peu petite ».", tr: "Yok canım, siz mükemmelsiniz 😄! Küçük olan ceket: « elle est un peu petite ».", en: "No way, you're perfect 😄! The jacket is the small one: « elle est un peu petite »." } },
             { fr: "Ça va bien, merci. Et vous ?", tr: "İyiyim, teşekkürler. Siz?", en: "I'm fine, thanks. And you?", ok: false,
               fb: { fr: "Ha ! Elle ne demande pas comment vous allez, elle demande si la veste va bien 😄. Dites « elle est un peu petite ».", tr: "Ha! Nasıl olduğunuzu değil, ceketin olup olmadığını soruyor 😄. « Elle est un peu petite » deyin.", en: "Ha! She's not asking how you are, she's asking if the jacket fits 😄. Say « elle est un peu petite »." } }
           ] },
      f: { say: [["F", "Voilà le 40. Alors ?"]],
           choices: [
             { fr: "Elle est parfaite ! Je la prends.", tr: "Mükemmel! Bunu alıyorum.", en: "It's perfect! I'll take it.", ok: true, go: "g" },
             { fr: "Elle me va très bien. Je la prends !", tr: "Bana çok yakıştı. Alıyorum!", en: "It fits me really well. I'll take it!", ok: true, go: "g" },
             { fr: "Elle est parfaite ! J'achète tout le magasin !", tr: "Mükemmel! Bütün mağazayı alıyorum!", en: "It's perfect! I'm buying the whole shop!", ok: false,
               fb: { fr: "Votre banque dit non 😄 ! Juste la veste : « je la prends ».", tr: "Bankanız hayır diyor 😄! Sadece ceket: « je la prends ».", en: "Your bank says no 😄! Just the jacket: « je la prends »." } }
           ] },
      g: { scene: { fr: "À la caisse.", tr: "Kasada.", en: "At the till." },
           say: [["F", "Ça fait 49,90 €. Vous payez comment ?"]],
           choices: [
             { fr: "Par carte, s'il vous plaît.", tr: "Kartla, lütfen.", en: "By card, please.", ok: true, go: "h1" },
             { fr: "En espèces. Voilà 50 €.", tr: "Nakit. Buyurun, 50 €.", en: "In cash. Here's 50 €.", ok: true, go: "h2" },
             { fr: "Quoi ? 4 990 € ?!", tr: "Ne? 4 990 € mu?!", en: "What? 4,990 €?!", ok: false,
               fb: { fr: "Respirez 😄 ! La virgule est importante : 49,90 € = « quarante-neuf euros quatre-vingt-dix ». Moins de 50 € !", tr: "Derin bir nefes alın 😄! Virgül önemli: 49,90 € = « quarante-neuf euros quatre-vingt-dix ». 50 €'dan az!", en: "Breathe 😄! The comma matters: 49,90 € = « quarante-neuf euros quatre-vingt-dix ». Under 50 €!" } }
           ] },
      h1: { say: [["F", "Tapez votre code, s'il vous plaît."]],
           choices: [
             { fr: "D'accord… voilà !", tr: "Tamam… oldu!", en: "OK… there you go!", ok: true, go: "i" },
             { fr: "Mon code ? C'est 1 2 3 4 !", tr: "Şifrem mi? 1 2 3 4!", en: "My PIN? It's 1 2 3 4!", ok: false,
               fb: { fr: "Chut 🤫 ! On ne dit jamais son code à voix haute : on le tape sur la machine.", tr: "Şşş 🤫! Şifre asla yüksek sesle söylenmez: makineye girilir.", en: "Shh 🤫! Never say your PIN out loud: you type it on the machine." } }
           ] },
      h2: { say: [["F", "Merci ! Et voilà 10 centimes."]],
           choices: [
             { fr: "Merci beaucoup !", tr: "Çok teşekkürler!", en: "Thank you very much!", ok: true, go: "i" },
             { fr: "Non merci, je ne veux pas d'argent.", tr: "Hayır teşekkürler, para istemiyorum.", en: "No thanks, I don't want money.", ok: false,
               fb: { fr: "C'est votre monnaie, elle est à vous 😄 ! Dites simplement « merci ».", tr: "Bu sizin para üstünüz, sizin hakkınız 😄! Sadece « merci » deyin.", en: "It's your change, it's yours 😄! Just say « merci »." } }
           ] },
      i: { say: [["F", "Voilà votre veste et votre ticket de caisse."]],
           choices: [
             { fr: "Merci. Je peux l'échanger, si elle ne va pas ?", tr: "Teşekkürler. Olmazsa değiştirebilir miyim?", en: "Thanks. Can I exchange it if it doesn't fit?", ok: true, go: "j" },
             { fr: "Merci. C'est un ticket de métro ?", tr: "Teşekkürler. Bu metro bileti mi?", en: "Thanks. Is this a metro ticket?", ok: false,
               fb: { fr: "😄 Non, c'est le ticket de caisse : la preuve de votre achat. Gardez-le, c'est important pour un échange !", tr: "😄 Hayır, bu kasa fişi: alışverişinizin kanıtı. Saklayın, değişim için önemli!", en: "😄 No, it's the receipt: proof of your purchase. Keep it, it matters for an exchange!" } }
           ] },
      j: { say: [["F", "Oui, vous avez 30 jours pour l'échanger, avec le ticket."]],
           choices: [
             { fr: "Parfait : 30 jours, avec le ticket. Merci, au revoir !", tr: "Harika: 30 gün, fişle. Teşekkürler, hoşça kalın!", en: "Perfect: 30 days, with the receipt. Thanks, goodbye!", ok: true, go: "fin" },
             { fr: "D'accord, 13 jours avec le ticket.", tr: "Tamam, fişle 13 gün.", en: "OK, 13 days with the receipt.", ok: false,
               fb: { fr: "« Trente » (30) et « treize » (13), ça se ressemble ! Ici, c'est 30 jours : « trente ».", tr: "« Trente » (30) ile « treize » (13) birbirine benziyor! Burada 30 gün: « trente ».", en: "« Trente » (30) and « treize » (13) sound alike! Here it's 30 days: « trente »." } },
             { fr: "D'accord, je jette le ticket.", tr: "Tamam, fişi atıyorum.", en: "OK, I'll throw the receipt away.", ok: false,
               fb: { fr: "Non, non, gardez-le 😄 ! Elle a dit « avec le ticket » : sans ticket, pas d'échange.", tr: "Yok yok, saklayın 😄! « Fişle » dedi: fiş yoksa değişim de yok.", en: "No, no, keep it 😄! She said « with the receipt »: no receipt, no exchange." } }
           ] },
      fin: { end: "win", say: [["F", "Merci, au revoir madame ! Bonne journée !"]],
             scene: { fr: "Bravo ! Vous avez une jolie veste chaude… et vous connaissez vos droits. Fini, le froid ! 🧥🎉", tr: "Bravo! Sıcacık, güzel bir ceketiniz var… ve haklarınızı biliyorsunuz. Soğuğa elveda! 🧥🎉", en: "Well done! You've got a nice warm jacket… and you know your rights. Goodbye, cold! 🧥🎉" } }
    } },

  { id: "av-voisins", level: "A1", emoji: "🏠",
    t: { fr: "La fête des voisins", tr: "Komşular şenliği", en: "The neighbours' party" },
    goal: { fr: "Faites connaissance avec votre voisine et acceptez son invitation.", tr: "Komşunuzla tanışın ve davetini kabul edin.", en: "Get to know your neighbour and accept her invitation." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Samedi matin. Vous sortez avec un sac poubelle. Sur le palier, il y a une dame et un petit garçon.", tr: "Cumartesi sabahı. Elinizde bir çöp torbasıyla dışarı çıkıyorsunuz. Sahanlıkta bir hanım ve küçük bir çocuk var.", en: "Saturday morning. You step out with a rubbish bag. On the landing, there's a lady and a little boy." },
           say: [["F", "Bonjour ! Vous êtes la nouvelle voisine ?"]],
           choices: [
             { fr: "Oui, bonjour ! C'est moi. J'habite au troisième étage.", tr: "Evet, merhaba! Benim. Üçüncü katta oturuyorum.", en: "Yes, hello! That's me. I live on the third floor.", ok: true, go: "b" },
             { fr: "Oui, je suis nouvelle voisine.", tr: "Evet, yeni komşuyum.", en: "Yes, I am new neighbour.", ok: false,
               fb: { fr: "Presque ! En turc, pas d'article… mais en français, il faut « la » : « je suis la nouvelle voisine ».", tr: "Çok yakın! Türkçede artikel yok… ama Fransızcada « la » gerekiyor: « je suis la nouvelle voisine ».", en: "Close! Turkish has no articles… but French needs « la »: « je suis la nouvelle voisine »." } },
             { fr: "Oui, bonjour ! J'habite à la troisième étagère.", tr: "Evet, merhaba! Üçüncü rafta oturuyorum.", en: "Yes, hello! I live on the third shelf.", ok: false,
               fb: { fr: "😄 Une étagère, c'est pour les livres ! Dans un immeuble, on dit « étage » : « au troisième étage ».", tr: "😄 « Étagère » kitaplık rafıdır! Apartmanda « étage » (kat) denir: « au troisième étage ».", en: "😄 « Étagère » is a bookshelf! In a building, it's « étage » (floor): « au troisième étage »." } }
           ] },
      b: { say: [["F", "Enchantée ! Moi, c'est Martine, j'habite en face. Et voici mon petit-fils, Léo."], ["K", "Bonjour madame !"]],
           choices: [
             { fr: "Enchantée, Martine ! Bonjour Léo, tu as quel âge ?", tr: "Memnun oldum Martine! Merhaba Léo, kaç yaşındasın?", en: "Nice to meet you, Martine! Hi Léo, how old are you?", ok: true, go: "c" },
             { fr: "Enchantée ! Léo, c'est votre fils ?", tr: "Memnun oldum! Léo sizin oğlunuz mu?", en: "Nice to meet you! Is Léo your son?", ok: false, go: "b2",
               fb: { fr: "Elle a dit « petit-fils » : Léo est son petit-fils 👵. Mais regardez : Martine adore votre question !", tr: "« Petit-fils » dedi: Léo onun torunu 👵. Ama bakın: Martine sorunuza bayıldı!", en: "She said « petit-fils »: Léo is her grandson 👵. But look: Martine loves your question!" } },
             { fr: "Bonjour Léo, vous allez bien ?", tr: "Merhaba Léo, nasılsınız?", en: "Hello Léo, how are you (formal)?", ok: false,
               fb: { fr: "C'est très poli… mais Léo est un petit garçon 😄 ! Avec un enfant, on dit « tu ».", tr: "Çok kibar… ama Léo küçük bir çocuk 😄! Çocuğa « tu » (sen) denir.", en: "Very polite… but Léo is a little boy 😄! With a child, use « tu »." } }
           ] },
      b2: { say: [["F", "Ha ha ! Merci, c'est gentil ! Mais non, je suis sa grand-mère !"]],
           choices: [
             { fr: "Oh pardon ! Vous êtes très jeune ! Léo, tu as quel âge ?", tr: "Ah pardon! Çok gençsiniz! Léo, kaç yaşındasın?", en: "Oh sorry! You look so young! Léo, how old are you?", ok: true, go: "c" },
             { fr: "Ah, vous êtes vieille !", tr: "Ah, siz yaşlısınız!", en: "Oh, you're old!", ok: false,
               fb: { fr: "Aïe 🙈 ! Même si c'est vrai, on ne dit pas ça ! Dites plutôt « vous êtes très jeune ! » : Martine va adorer.", tr: "Ah 🙈! Doğru olsa bile böyle söylenmez! « Vous êtes très jeune ! » (çok gençsiniz) deyin: Martine bayılacak.", en: "Ouch 🙈! Even if it's true, we don't say that! Try « vous êtes très jeune ! »: Martine will love it." } }
           ] },
      c: { say: [["K", "J'ai 6 ans ! Et toi, tu as un chat ?"]],
           choices: [
             { fr: "Non, je n'ai pas de chat. Et toi ?", tr: "Hayır, kedim yok. Ya senin?", en: "No, I don't have a cat. What about you?", ok: true, go: "d" },
             { fr: "Non, mais j'adore les chats !", tr: "Hayır, ama kedilere bayılırım!", en: "No, but I love cats!", ok: true, go: "d" },
             { fr: "Non, je ne suis pas un chat.", tr: "Hayır, ben kedi değilim.", en: "No, I'm not a cat.", ok: false,
               fb: { fr: "Miaou 🐱 ? Léo demande si vous AVEZ un chat : « non, je n'ai pas de chat ».", tr: "Miyav 🐱? Léo kediniz OLUP olmadığını soruyor: « non, je n'ai pas de chat ».", en: "Meow 🐱? Léo is asking if you HAVE a cat: « non, je n'ai pas de chat »." } }
           ] },
      d: { say: [["K", "Moi, j'ai un poisson rouge. Il s'appelle Bulle !"], ["F", "Léo, chut ! Et vous, vous travaillez dans le quartier ?"]],
           choices: [
             { fr: "Pas encore. Je suis kiné, je cherche du travail.", tr: "Henüz değil. Fizyoterapistim, iş arıyorum.", en: "Not yet. I'm a physio, I'm looking for work.", ok: true, go: "e" },
             { fr: "Pas encore. Je suis physique.", tr: "Henüz değil. Ben fiziğim.", en: "Not yet. I am physics.", ok: false,
               fb: { fr: "« La physique », c'est la science d'Einstein 🧪 ! Votre métier en français : « kinésithérapeute », ou plus court « kiné ».", tr: "« Physique » = fizik, Einstein'ın alanı 🧪! Mesleğinizin Fransızcası: « kinésithérapeute », kısaca « kiné ».", en: "« Physique » = physics, Einstein's field 🧪! Your job in French: « kinésithérapeute », or just « kiné »." } }
           ] },
      e: { say: [["F", "Kiné ? Génial, j'ai toujours mal au dos !"], ["K", "Et moi, je joue au foot !"]],
           choices: [
             { fr: "Super, Léo ! Moi, je joue au handball.", tr: "Süper Léo! Ben de hentbol oynuyorum.", en: "Great, Léo! I play handball.", ok: true, go: "f" },
             { fr: "Moi, je fais du handball !", tr: "Ben de hentbol oynuyorum!", en: "I do handball!", ok: true, go: "f" },
             { fr: "Moi, je joue du handball !", tr: "Ben de hentbol çalıyorum!", en: "I play the handball (like an instrument)!", ok: false,
               fb: { fr: "« Jouer du », c'est pour la musique 🎸 : jouer du piano. Pour un sport : « jouer au handball » ou « faire du handball ».", tr: "« Jouer du » müzik aletleri için 🎸: piyano çalmak gibi. Spor için: « jouer au handball » ya da « faire du handball ».", en: "« Jouer du » is for music 🎸: playing the piano. For a sport: « jouer au handball » or « faire du handball »." } }
           ] },
      f: { say: [["F", "Oh, une sportive ! Au fait, samedi prochain, c'est la fête des voisins, dans la cour. Vous venez ?"]],
           choices: [
             { fr: "Oui, avec plaisir ! C'est à quelle heure ?", tr: "Evet, memnuniyetle! Saat kaçta?", en: "Yes, I'd love to! What time is it?", ok: true, go: "g" },
             { fr: "Euh… c'est quoi, la fête des voisins ?", tr: "Şey… komşular şenliği ne demek?", en: "Um… what's the neighbours' party?", ok: true, go: "f2" },
             { fr: "Oui, je vais !", tr: "Evet, gidiyorum!", en: "Yes, I'm going!", ok: false,
               fb: { fr: "Il manque un petit mot ! « Je vais » tout seul, c'est bizarre. Dites « oui, je viens ! » ou « je vais venir ».", tr: "Küçük bir kelime eksik! Tek başına « je vais » tuhaf kaçıyor. « Oui, je viens ! » ya da « je vais venir » deyin.", en: "A little word is missing! « Je vais » on its own sounds odd. Say « oui, je viens ! » or « je vais venir »." } }
           ] },
      f2: { say: [["F", "C'est une petite fête entre voisins : chacun apporte quelque chose à manger ou à boire. C'est très sympa !"]],
           choices: [
             { fr: "Ah, c'est génial ! Je viens avec plaisir. C'est à quelle heure ?", tr: "Ah, harika! Memnuniyetle gelirim. Saat kaçta?", en: "Oh, that's great! I'd love to come. What time is it?", ok: true, go: "g" },
             { fr: "Super ! J'apporte mon sac poubelle ?", tr: "Süper! Çöp torbamı da getireyim mi?", en: "Great! Shall I bring my rubbish bag?", ok: false,
               fb: { fr: "😄 Le sac poubelle, c'est pour le local poubelles ! À la fête, on apporte à manger ou à boire.", tr: "😄 Çöp torbasının yeri çöp odası! Şenliğe yiyecek ya da içecek götürülür.", en: "😄 The rubbish bag goes to the bin room! For the party, you bring food or drinks." } }
           ] },
      g: { say: [["F", "À 19 h, dans la cour. Vous pouvez apporter un plat ou un dessert ?"]],
           choices: [
             { fr: "Oui, je vais apporter un dessert turc : du baklava !", tr: "Evet, bir Türk tatlısı getireceğim: baklava!", en: "Yes, I'll bring a Turkish dessert: baklava!", ok: true, go: "h" },
             { fr: "Oui, je vais faire un börek au fromage !", tr: "Evet, peynirli börek yapacağım!", en: "Yes, I'll make a cheese börek!", ok: true, go: "h" },
             { fr: "Oui, je vais apporter un désert.", tr: "Evet, bir çöl getireceğim.", en: "Yes, I'll bring a desert.", ok: false,
               fb: { fr: "Un désert 🏜️, c'est le Sahara : trop grand pour la cour ! Avec « ss », c'est « un dessert » 🍰.", tr: "« Désert » 🏜️ çöl demek, Sahra gibi: avluya sığmaz! « ss » ile « un dessert » 🍰 (tatlı).", en: "« Désert » 🏜️ is the Sahara: too big for the courtyard! With « ss », it's « un dessert » 🍰." } }
           ] },
      h: { say: [["F", "Miam ! Léo, tu entends ?"], ["K", "Youpi ! Et tu vas jouer au ballon avec moi à la fête ?"]],
           choices: [
             { fr: "Oui, bien sûr ! Je vais jouer avec toi.", tr: "Evet, tabii! Seninle oynayacağım.", en: "Yes, of course! I'll play with you.", ok: true, go: "i" },
             { fr: "Oui, je vais jouer le ballon.", tr: "Evet, topu oynayacağım.", en: "Yes, I'll play the ball.", ok: false,
               fb: { fr: "Presque ! Comme pour le handball, on dit « jouer au ballon », avec « au ». Léo attend votre réponse ⚽ !", tr: "Çok yakın! Hentboldaki gibi « jouer au ballon » (« au » ile) denir. Léo cevabınızı bekliyor ⚽!", en: "Close! Like with handball, it's « jouer au ballon », with « au ». Léo is waiting ⚽!" } }
           ] },
      i: { say: [["F", "Allez, à samedi ! Et bienvenue dans l'immeuble !"]],
           choices: [
             { fr: "Merci beaucoup, c'est très gentil ! À samedi !", tr: "Çok teşekkürler, çok naziksiniz! Cumartesi görüşürüz!", en: "Thank you so much, that's very kind! See you Saturday!", ok: true, go: "fin" },
             { fr: "Bien trouvée !", tr: "Hoş bulduk!", en: "Well found! (Turkish « hoş bulduk »)", ok: false,
               fb: { fr: "Ha, c'est « hoş bulduk » traduit mot à mot 😄 ! Joli, mais ça n'existe pas en français. Après « bienvenue », dites simplement « merci ! ».", tr: "Ha, bu « hoş bulduk »un kelimesi kelimesine çevirisi 😄! Çok tatlı ama Fransızcada böyle bir şey yok. « Bienvenue »ye sadece « merci ! » denir.", en: "Ha, that's Turkish « hoş bulduk » word for word 😄! Cute, but it doesn't exist in French. After « bienvenue », just say « merci ! »." } },
             { fr: "De rien, à samedi !", tr: "Rica ederim, cumartesi görüşürüz!", en: "You're welcome, see you Saturday!", ok: false,
               fb: { fr: "« De rien » répond à « merci ». Après « bienvenue », on dit « merci ! ».", tr: "« De rien », « merci »ye cevaptır. « Bienvenue »den sonra « merci ! » denir.", en: "« De rien » answers « merci ». After « bienvenue », say « merci ! »." } }
           ] },
      fin: { end: "win", say: [["F", "À samedi !"], ["K", "Au revoir ! À samedi !"]],
             scene: { fr: "Bravo ! Une voisine sympa, un petit copain pour jouer au ballon et une fête samedi. Ici, vous êtes chez vous ! 🏠🎉", tr: "Bravo! Tatlı bir komşu, top oynayacak küçük bir arkadaş ve cumartesi bir şenlik. Artık burası sizin eviniz! 🏠🎉", en: "Well done! A friendly neighbour, a little buddy to play ball with and a party on Saturday. You're at home here! 🏠🎉" } }
    } }
);
