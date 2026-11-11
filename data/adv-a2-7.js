/* Aventures A2 — 31 to 35: stage d'observation chez une kiné, covoiturage pour Lyon, malentendu avec un collègue, don du sang, entretien téléphonique pour un magasin de sport */
(window.ADVENTURES = window.ADVENTURES || []).push(

  /* ───────────── 31. Stage d'observation chez une kiné ───────────── */
  { id: "av-stage-observation", level: "A2", emoji: "🩻",
    t: { fr: "Un stage d'observation chez une kiné", tr: "Bir fizyoterapistin yanında gözlem stajı", en: "Observation placement with a physio" },
    goal: { fr: "Passez une matinée d'observation dans un cabinet de kiné et montrez votre motivation.", tr: "Bir fizyoterapi muayenehanesinde gözlem amaçlı bir sabah geçirin ve motivasyonunuzu gösterin.", en: "Spend an observation morning at a physio practice and show your motivation." },
    start: "a",
    nodes: {
      a: { scene: { fr: "8 h, dans un cabinet de kinésithérapie. Madame Leroy, la kiné, ouvre la porte.", tr: "Saat 8, bir fizyoterapi muayenehanesinde. Fizyoterapist Madame Leroy kapıyı açıyor.", en: "8 am, at a physiotherapy practice. Madame Leroy, the physio, opens the door." },
           say: [["F", "Bonjour ! Vous êtes la stagiaire pour l'observation ? Entrez, je vous en prie."]],
           choices: [
             { fr: "Oui, bonjour madame, je suis la stage. Merci de m'accueillir.", tr: "Evet, merhaba hanımefendi, ben stajım. Beni kabul ettiğiniz için teşekkürler.", en: "Yes, hello, madam, I am the internship. Thank you for having me.", ok: false,
               fb: { fr: "Vous n'êtes pas une période de trois semaines 😄 ! « Le stage » = la période, et la personne, c'est « la stagiaire ».", tr: "Siz üç haftalık bir dönem değilsiniz 😄! « Le stage » = staj dönemi, kişi ise « la stagiaire ».", en: "You're not a three-week period 😄! « Le stage » = the placement, the person is « la stagiaire »." } },
             { fr: "Oui, bonjour madame. Merci de m'accueillir pour ce stage.", tr: "Evet, merhaba hanımefendi. Bu staj için beni kabul ettiğiniz için teşekkürler.", en: "Yes, hello. Thank you for having me for this placement.", ok: true, go: "b" },
             { fr: "Salut ! Ouais, c'est moi. Merci pour le stage !", tr: "Selam! Evet, benim. Staj için sağ ol!", en: "Hi! Yeah, that's me. Thanks for the internship!", ok: false,
               fb: { fr: "Un peu trop décontracté pour un premier jour 😅. Avec une professionnelle, gardez « bonjour madame » et « merci ».", tr: "İlk gün için biraz fazla rahat 😅. Bir profesyonelle « bonjour madame » ve « merci » demeye devam edin.", en: "A bit too casual for a first day 😅. With a professional, stick to « bonjour madame » and « merci »." } }
           ] },
      b: { say: [["F", "Au téléphone, vous m'avez dit que vous étiez kiné en Turquie. Vous avez travaillé longtemps ?"]],
           choices: [
             { fr: "Je travaille comme kiné en France depuis longtemps.", tr: "Uzun zamandır Fransa'da fizyoterapist olarak çalışıyorum.", en: "I've been working as a physio in France for a long time.", ok: false,
               fb: { fr: "Attention, ce n'est pas vrai : votre diplôme n'est pas encore reconnu ici. Parlez du passé : « j'ai travaillé plusieurs années en Turquie ».", tr: "Dikkat, bu doğru değil: diplomanız burada henüz tanınmadı. Geçmişten bahsedin: « j'ai travaillé plusieurs années en Turquie ».", en: "Careful, that's not true: your diploma isn't recognised here yet. Talk about the past: « j'ai travaillé plusieurs années en Turquie »." } },
             { fr: "Vous avez travaillé longtemps ? Oui, avec une équipe de handball.", tr: "Uzun süre çalıştınız mı? Evet, bir hentbol takımıyla.", en: "Did you work for a long time? Yes, with a handball team.", ok: false,
               fb: { fr: "Vous répétez sa question 😄 ! Elle veut connaître VOTRE expérience : « j'ai travaillé plusieurs années… ».", tr: "Onun sorusunu tekrarlıyorsunuz 😄! O SİZİN deneyiminizi öğrenmek istiyor: « j'ai travaillé plusieurs années… ».", en: "You're repeating her question 😄! She wants to know YOUR experience: « j'ai travaillé plusieurs années… »." } },
             { fr: "Oui, plusieurs années, surtout avec une équipe de handball.", tr: "Evet, birkaç yıl, özellikle bir hentbol takımıyla.", en: "Yes, several years, mostly with a handball team.", ok: true, go: "c" }
           ] },
      c: { say: [["F", "Super. Mon premier patient arrive. Vous préférez regarder la séance de près ou prendre des notes au bureau ?"]],
           choices: [
             { fr: "Je voudrais regarder de près, si ça ne dérange pas le patient.", tr: "Hastayı rahatsız etmezse yakından izlemek isterim.", en: "I'd like to watch up close, if the patient doesn't mind.", ok: true, go: "c1" },
             { fr: "Je préfère soigner le patient moi-même.", tr: "Hastayı kendim tedavi etmeyi tercih ederim.", en: "I'd rather treat the patient myself.", ok: false,
               fb: { fr: "On comprend l'envie 😊, mais c'est un stage d'OBSERVATION : vous regardez, vous ne soignez pas. Choisissez « regarder » ou « prendre des notes ».", tr: "İsteğinizi anlıyoruz 😊 ama bu bir GÖZLEM stajı: izliyorsunuz, tedavi etmiyorsunuz. « Regarder » ya da « prendre des notes » seçin.", en: "We get the urge 😊, but it's an OBSERVATION placement: you watch, you don't treat. Choose « regarder » or « prendre des notes »." } },
             { fr: "Je vais prendre des notes au bureau, comme ça je ne gêne pas.", tr: "Ofiste not alacağım, böylece rahatsız etmem.", en: "I'll take notes in the office, that way I won't be in the way.", ok: true, go: "c2" }
           ] },
      c1: { scene: { fr: "Monsieur Dubois entre. Il marche avec une béquille.", tr: "Monsieur Dubois içeri giriyor. Tek koltuk değneğiyle yürüyor.", en: "Monsieur Dubois comes in. He's walking with a crutch." },
           say: [["M", "Bonjour ! Vous êtes nouvelle ? Moi, je me suis fait opérer du genou il y a trois semaines. Un accident de ski…"]],
           choices: [
             { fr: "Bonjour monsieur. Je suis stagiaire. Vous avez tombé au ski ?", tr: "Merhaba beyefendi. Ben stajyerim. Kayakta düştünüz mü?", en: "Hello, sir. I'm an intern. Did you has fallen skiing?", ok: false,
               fb: { fr: "Presque ! « Tomber » se conjugue avec « être » : « vous êtes tombé ». Avec un patient, présentez-vous aussi d'abord.", tr: "Neredeyse! « Tomber » fiili « être » ile çekimlenir: « vous êtes tombé ». Hastaya önce kendinizi de tanıtın.", en: "Almost! « Tomber » takes « être »: « vous êtes tombé ». With a patient, introduce yourself first too." } },
             { fr: "Oh là là, votre genou ne sera plus jamais comme avant !", tr: "Eyvah, dizin bir daha asla eskisi gibi olmayacak!", en: "Oh dear, your knee will never be the same again!", ok: false,
               fb: { fr: "Aïe, ne faites pas peur au patient 😬 ! Restez positive et présentez-vous : « je suis stagiaire, je viens seulement regarder ».", tr: "Aman, hastayı korkutmayın 😬! Olumlu kalın ve kendinizi tanıtın: « je suis stagiaire, je viens seulement regarder ».", en: "Ouch, don't scare the patient 😬! Stay positive and introduce yourself: « je suis stagiaire, je viens seulement regarder »." } },
             { fr: "Bonjour monsieur. Je suis stagiaire, je viens regarder. Ça vous va ?", tr: "Merhaba beyefendi. Stajyerim, izlemeye geldim. Sizin için uygun mu?", en: "Hello, sir. I'm an intern, I'm here to watch. Is that OK with you?", ok: true, go: "d" }
           ] },
      c2: { scene: { fr: "Au bureau, Madame Leroy vous montre le dossier du patient.", tr: "Ofiste Madame Leroy size hastanın dosyasını gösteriyor.", en: "In the office, Madame Leroy shows you the patient's file." },
           say: [["F", "Il s'est fait opérer du genou. En anglais, on dit « ACL ». Vous savez comment on dit en français ?"]],
           choices: [
             { fr: "Oui, c'est le ligament croissant antérieur, je crois.", tr: "Evet, ön kruvasan bağı, sanırım.", en: "Yes, it's the anterior croissant ligament, I think.", ok: false,
               fb: { fr: "Un ligament au beurre 🥐😄 ? On dit « croisé », pas « croissant » : le LCA, le ligament croisé antérieur.", tr: "Tereyağlı bir bağ mı 🥐😄? « Croissant » değil « croisé » denir: LCA, ön çapraz bağ.", en: "A buttery ligament 🥐😄? It's « croisé », not « croissant »: the LCA, the anterior cruciate ligament." } },
             { fr: "Oui, c'est le LCA, le ligament croisé antérieur.", tr: "Evet, LCA, yani ön çapraz bağ.", en: "Yes, it's the LCA, the anterior cruciate ligament.", ok: true, go: "d" },
             { fr: "Je ne sais pas le genou en français, désolée.", tr: "Fransızcada dizi bilmiyorum, üzgünüm.", en: "I don't know the knee in French, sorry.", ok: false,
               fb: { fr: "Bien sûr que vous connaissez le genou, vous êtes kiné 😉 ! Et c'est « connaître » pour une chose : « je ne connais pas le mot ». Essayez : le ligament croisé…", tr: "Dizi elbette biliyorsunuz, siz fizyoterapistsiniz 😉! Ayrıca bir şey için « connaître » kullanılır: « je ne connais pas le mot ». Deneyin: le ligament croisé…", en: "Of course you know the knee, you're a physio 😉! And it's « connaître » for a thing: « je ne connais pas le mot ». Try: le ligament croisé…" } }
           ] },
      d: { scene: { fr: "La séance commence. Madame Leroy fait faire des exercices au patient.", tr: "Seans başlıyor. Madame Leroy hastaya egzersizler yaptırıyor.", en: "The session starts. Madame Leroy has the patient do some exercises." },
           say: [["F", "Pliez la jambe, monsieur… doucement… voilà. Alors, qu'est-ce que vous remarquez ?"]],
           choices: [
             { fr: "Il pleut moins bien la jambe droite. Et je crois qu'il a un peu peur.", tr: "Sağ bacağı daha az iyi yağmur yağıyor. Bir de sanırım biraz korkuyor.", en: "He rains his right leg less well. And I think he's a bit scared.", ok: false,
               fb: { fr: "Il ne pleut pas dans le cabinet ☔😄 ! « Pleuvoir » = la pluie. Le verbe ici, c'est « plier » : « il plie moins bien la jambe ».", tr: "Muayenehanede yağmur yağmıyor ☔😄! « Pleuvoir » = yağmur yağmak. Buradaki fiil « plier »: « il plie moins bien la jambe ».", en: "It isn't raining in the practice ☔😄! « Pleuvoir » = to rain. The verb here is « plier »: « il plie moins bien la jambe »." } },
             { fr: "Il plie moins bien la jambe droite. Et je crois qu'il a un peu peur.", tr: "Sağ bacağını daha zor büküyor. Ve sanırım biraz korkuyor.", en: "He doesn't bend his right leg as well. And I think he's a bit scared.", ok: true, go: "e" },
             { fr: "Je remarque pas. Il a un peu peur, je crois.", tr: "Fark etmiyorum. Biraz korkuyor sanırım.", en: "I don't notice. He's a bit scared, I think.", ok: false,
               fb: { fr: "Il manque le « ne » et surtout un objet 😉. Vous avez l'œil d'une kiné : décrivez ce que vous voyez, par exemple « il plie moins bien la jambe ».", tr: "« Ne » ve özellikle bir nesne eksik 😉. Sizde fizyoterapist gözü var: gördüğünüzü anlatın, örneğin « il plie moins bien la jambe ».", en: "The « ne » is missing, and above all an object 😉. You have a physio's eye: describe what you see, e.g. « il plie moins bien la jambe »." } }
           ] },
      e: { say: [["F", "Exactement ! Après une opération, la peur est normale. En Turquie, vous faisiez quels exercices dans ce cas ?"]],
           choices: [
             { fr: "On faisait souvent des exercices d'équilibre, sur un coussin.", tr: "Sık sık denge egzersizleri yapardık, bir minderin üstünde.", en: "We often did balance exercises, on a cushion.", ok: true, go: "f" },
             { fr: "On a fait souvent des exercices d'équilibre, sur un coussin.", tr: "Sık sık denge egzersizleri yaptık, bir minderin üstünde.", en: "We have often done balance exercises, on a cushion.", ok: false,
               fb: { fr: "Bonne idée, mais c'est une habitude du passé : on utilise l'imparfait. « On faisait souvent des exercices d'équilibre. »", tr: "İyi fikir ama bu geçmişteki bir alışkanlık: imparfait kullanılır. « On faisait souvent des exercices d'équilibre. »", en: "Good idea, but it's a past habit: use the imparfait. « On faisait souvent des exercices d'équilibre. »" } },
             { fr: "Je faisais en Turquie.", tr: "Türkiye'de yapıyordum.", en: "I was doing in Turkey.", ok: false,
               fb: { fr: "La phrase est incomplète : vous faisiez QUOI ? Donnez un exemple : « on faisait des exercices d'équilibre ».", tr: "Cümle eksik: NE yapıyordunuz? Bir örnek verin: « on faisait des exercices d'équilibre ».", en: "The sentence is incomplete: you did WHAT? Give an example: « on faisait des exercices d'équilibre »." } }
           ] },
      f: { say: [["M", "Dites, madame, vous pensez que je pourrai skier l'hiver prochain ?"]],
           choices: [
             { fr: "Oui, bien sûr, dans deux semaines ! Vous travaillez très bien !", tr: "Evet, tabii ki, iki hafta sonra! Çok iyi çalışıyorsunuz!", en: "Yes, of course, in two weeks! You're working really well!", ok: false,
               fb: { fr: "Attention aux promesses 😅 ! Ici, ce n'est pas votre rôle. Renvoyez gentiment vers la kiné : « c'est Madame Leroy qui peut vous répondre ».", tr: "Söz verirken dikkat 😅! Burada bu sizin rolünüz değil. Nazikçe fizyoterapiste yönlendirin: « c'est Madame Leroy qui peut vous répondre ».", en: "Careful with promises 😅! That's not your role here. Kindly point him to the physio: « c'est Madame Leroy qui peut vous répondre »." } },
             { fr: "Je ne peux pas parler.", tr: "Konuşamam.", en: "I can't speak.", ok: false,
               fb: { fr: "Il va croire que vous avez perdu votre voix 😄 ! Dites plutôt « je ne peux pas répondre, c'est Madame Leroy qui sait ».", tr: "Sesinizi kaybettiğinizi sanacak 😄! Bunun yerine « je ne peux pas répondre, c'est Madame Leroy qui sait » deyin.", en: "He'll think you've lost your voice 😄! Say instead « je ne peux pas répondre, c'est Madame Leroy qui sait »." } },
             { fr: "C'est Madame Leroy qui peut répondre, mais vous travaillez bien !", tr: "Buna Leroy Hanım cevap verebilir ama çok iyi çalışıyorsunuz!", en: "Mrs Leroy is the one who can answer, but you're working well!", ok: true, go: "g" }
           ] },
      g: { scene: { fr: "11 h 30. La matinée est finie. Madame Leroy vous sourit.", tr: "Saat 11.30. Sabah bitti. Madame Leroy size gülümsüyor.", en: "11.30 am. The morning is over. Madame Leroy smiles at you." },
           say: [["F", "Vous avez de bonnes idées ! Vous voulez revenir jeudi pour une autre matinée ?"]],
           choices: [
             { fr: "Avec plaisir ! J'ai appris beaucoup de choses ce matin.", tr: "Memnuniyetle! Bu sabah çok şey öğrendim.", en: "With pleasure! I learned a lot this morning.", ok: true, go: "fin" },
             { fr: "Avec plaisir ! Je suis appris beaucoup de choses ce matin.", tr: "Memnuniyetle! Bu sabah çok şey öğrendim.", en: "With pleasure! I am learned lots of things this morning.", ok: false,
               fb: { fr: "Presque ! « Apprendre » se conjugue avec « avoir » : « j'ai appris beaucoup de choses ».", tr: "Neredeyse! « Apprendre » fiili « avoir » ile çekimlenir: « j'ai appris beaucoup de choses ».", en: "Almost! « Apprendre » takes « avoir »: « j'ai appris beaucoup de choses »." } },
             { fr: "Oui, merci beaucoup ! Je serai là jeudi.", tr: "Evet, çok teşekkürler! Perşembe burada olacağım.", en: "Yes, thank you so much! I'll be here on Thursday.", ok: true, go: "fin" }
           ] },
      fin: { end: "win", say: [["F", "Parfait ! Alors à jeudi, 8 h, comme aujourd'hui."]],
             scene: { fr: "Vous sortez du cabinet avec le sourire. Votre expérience de kiné compte aussi en France : bravo ! 🩻🎉", tr: "Muayenehaneden gülümseyerek çıkıyorsunuz. Fizyoterapi deneyiminiz Fransa'da da değerli: bravo! 🩻🎉", en: "You leave the practice smiling. Your physio experience counts in France too: well done! 🩻🎉" } }
    } },

  /* ───────────── 32. En covoiturage pour Lyon ───────────── */
  { id: "av-covoiturage", level: "A2", emoji: "🚙",
    t: { fr: "En covoiturage pour Lyon", tr: "Araç paylaşımıyla Lyon'a", en: "Car-sharing to Lyon" },
    goal: { fr: "Partez à Lyon en covoiturage : trouvez la voiture, discutez pendant le trajet et descendez au bon endroit.", tr: "Araç paylaşımıyla Lyon'a gidin: arabayı bulun, yolculuk boyunca sohbet edin ve doğru yerde inin.", en: "Go to Lyon by car-share: find the car, chat during the trip and get out at the right place." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Samedi, 7 h 45, sur un parking près de la gare. Vous avez réservé un trajet sur une appli. Un homme attend à côté d'une voiture grise.", tr: "Cumartesi, saat 7.45, garın yakınındaki bir otoparkta. Bir uygulamadan yolculuk ayırttınız. Bir adam gri bir arabanın yanında bekliyor.", en: "Saturday, 7.45 am, in a car park near the station. You booked a ride on an app. A man is waiting next to a grey car." },
           say: [["M", "Bonjour ! C'est vous qui avez réservé pour Lyon ? Moi, c'est Thomas."]],
           choices: [
             { fr: "Oui, bonjour ! C'est moi, je suis réservée. Enchantée !", tr: "Evet, merhaba! Benim, ben rezerve edildim. Memnun oldum!", en: "Yes, hello! It's me, I am booked. Nice to meet you!", ok: false,
               fb: { fr: "C'est une table de restaurant qui « est réservée » 😄. Vous, vous AVEZ réservé : « oui, c'est moi, j'ai réservé ».", tr: "« Est réservée » olan bir restoran masasıdır 😄. Siz ise rezervasyon YAPTINIZ: « oui, c'est moi, j'ai réservé ».", en: "It's a restaurant table that « est réservée » 😄. You HAVE booked: « oui, c'est moi, j'ai réservé »." } },
             { fr: "Oui, bonjour ! C'est bien moi. Enchantée !", tr: "Evet, merhaba! Evet, benim. Memnun oldum!", en: "Yes, hello! That's me. Nice to meet you!", ok: true, go: "b" },
             { fr: "Oui, bonjour ! J'ai réservé Thomas. Enchantée !", tr: "Evet, merhaba! Thomas'ı rezerve ettim. Memnun oldum!", en: "Yes, hello! I booked Thomas. Nice to meet you!", ok: false,
               fb: { fr: "Vous avez réservé une place, pas Thomas 😄 ! Dites simplement « oui, c'est moi. Enchantée ! ».", tr: "Thomas'ı değil, bir koltuk ayırttınız 😄! Sadece « oui, c'est moi. Enchantée ! » deyin.", en: "You booked a seat, not Thomas 😄! Just say « oui, c'est moi. Enchantée ! »." } }
           ] },
      b: { say: [["M", "Enchanté ! Vous avez un gros bagage ? Le coffre est presque plein."]],
           choices: [
             { fr: "Non, juste un petit sac à dos. Je le garde sur mes genoux.", tr: "Hayır, sadece küçük bir sırt çantası. Kucağımda tutarım.", en: "No, just a small backpack. I'll keep it on my lap.", ok: true, go: "c" },
             { fr: "Oui, j'ai une grosse bagage, mais je peux la garder sur mes genoux.", tr: "Evet, büyük bir bavulum var, ama kucağımda tutabilirim.", en: "Yes, I have a big luggage, but I can keep it on my lap.", ok: false,
               fb: { fr: "« Bagage » est masculin : « un gros bagage ». Et le coffre est presque plein… Un petit sac à dos, c'est plus pratique 😉.", tr: "« Bagage » erildir: « un gros bagage ». Ayrıca bagaj neredeyse dolu… Küçük bir sırt çantası daha pratik 😉.", en: "« Bagage » is masculine: « un gros bagage ». And the boot is almost full… a small backpack is handier 😉." } },
             { fr: "Oui, le coffre est presque plein.", tr: "Evet, bagaj neredeyse dolu.", en: "Yes, the boot is almost full.", ok: false,
               fb: { fr: "Il le sait déjà 😄 ! Il demande ce que VOUS avez : « non, juste un petit sac à dos ».", tr: "Bunu zaten biliyor 😄! SİZİN neyiniz olduğunu soruyor: « non, juste un petit sac à dos ».", en: "He already knows 😄! He's asking what YOU have: « non, juste un petit sac à dos »." } }
           ] },
      c: { scene: { fr: "Une autre passagère arrive en courant. Elle s'appelle Camille.", tr: "Başka bir yolcu koşarak geliyor. Adı Camille.", en: "Another passenger comes running up. Her name is Camille." },
           say: [["F", "Bonjour ! Pardon pour le retard ! Vous voulez vous asseoir devant ou derrière ?"]],
           choices: [
             { fr: "Je veux bien aller devant, merci !", tr: "Önde oturmak isterim, teşekkürler!", en: "I'd be happy to sit in the front, thanks!", ok: true, go: "d1" },
             { fr: "Je veux m'asseoir dedans.", tr: "İçeride oturmak istiyorum.", en: "I want to sit inside.", ok: false,
               fb: { fr: "Heureusement, tout le monde s'assoit dedans 🚗😄 ! Elle demande « devant » (à l'avant) ou « derrière » (à l'arrière).", tr: "Neyse ki herkes içeride oturuyor 🚗😄! « Devant » (önde) mi « derrière » (arkada) mı diye soruyor.", en: "Luckily, everyone sits inside 🚗😄! She's asking « devant » (in front) or « derrière » (in the back)." } },
             { fr: "Allez-y devant, je préfère derrière.", tr: "Siz öne geçin, ben arkayı tercih ederim.", en: "You go in the front, I prefer the back.", ok: true, go: "d2" }
           ] },
      d1: { scene: { fr: "Vous êtes à côté de Thomas. La voiture part.", tr: "Thomas'ın yanındasınız. Araba hareket ediyor.", en: "You're next to Thomas. The car sets off." },
           say: [["M", "Vous voulez choisir la musique ? Mon téléphone est branché."]],
           choices: [
             { fr: "Je ne sais pas conduire la musique. Vous aimez la musique turque ?", tr: "Müziği sürmeyi bilmiyorum. Türk müziğini sever misiniz?", en: "I can't drive the music. Do you like Turkish music?", ok: false,
               fb: { fr: "Personne ne conduit la musique 🎶😄 ! On « choisit » ou on « met » la musique : « je veux bien mettre un peu de musique ».", tr: "Kimse müziği sürmez 🎶😄! Müzik « seçilir » ya da « açılır »: « je veux bien mettre un peu de musique ».", en: "Nobody drives the music 🎶😄! You « choose » or « put on » music: « je veux bien mettre un peu de musique »." } },
             { fr: "Pourquoi pas ! Vous aimez la musique turque ?", tr: "Neden olmasın! Türk müziğini sever misiniz?", en: "Why not! Do you like Turkish music?", ok: true, go: "e" },
             { fr: "Merci, mais je préfère le calme. Je suis un peu fatiguée ce matin.", tr: "Teşekkürler ama sessizliği tercih ederim. Bu sabah biraz yorgunum.", en: "Thanks, but I prefer it quiet. I'm a bit tired this morning.", ok: true, go: "e" }
           ] },
      d2: { scene: { fr: "Camille est devant. Elle se retourne vers vous.", tr: "Camille önde. Size doğru dönüyor.", en: "Camille is in the front. She turns round to you." },
           say: [["F", "Vous allez à Lyon pour le travail ?"]],
           choices: [
             { fr: "Oui, je vais au Lyon pour le travail. Et vous ?", tr: "Evet, iş için Lyon'a gidiyorum. Ya siz?", en: "Yes, I'm going to the Lyon for work. And you?", ok: false,
               fb: { fr: "Pas d'article devant une ville : « à Lyon », « à Paris ». Et elle demande POURQUOI vous y allez 😉.", tr: "Şehir adlarının önüne artikel gelmez: « à Lyon », « à Paris ». Ayrıca oraya NEDEN gittiğinizi soruyor 😉.", en: "No article before a city: « à Lyon », « à Paris ». And she's asking WHY you're going 😉." } },
             { fr: "Je vais à Lyon en voiture, avec vous ! Je ne connais pas Lyon.", tr: "Lyon'a arabayla gidiyorum, sizinle! Lyon'u bilmiyorum.", en: "I'm going to Lyon by car, with you! I don't know Lyon.", ok: false,
               fb: { fr: "Oui, ça, elle le sait 🚗😄 ! Répondez à sa question : le travail ou le plaisir ?", tr: "Evet, bunu biliyor 🚗😄! Sorusuna cevap verin: iş mi, keyif mi?", en: "Yes, she knows that 🚗😄! Answer her question: work or pleasure?" } },
             { fr: "Non, pour le plaisir ! Je ne connais pas encore Lyon. Et vous ?", tr: "Hayır, keyif için! Lyon'u henüz bilmiyorum. Ya siz?", en: "No, for fun! I don't know Lyon yet. What about you?", ok: true, go: "e" }
           ] },
      e: { scene: { fr: "Deux heures plus tard, Thomas s'arrête sur une aire d'autoroute.", tr: "İki saat sonra Thomas bir otoyol dinlenme tesisinde duruyor.", en: "Two hours later, Thomas stops at a motorway service area." },
           say: [["M", "On fait une pause de 15 minutes. Vous avez besoin de quelque chose ?"]],
           choices: [
             { fr: "Oui, je vais à la toilette et acheter un café. Je reviens dans 10 minutes.", tr: "Evet, yıkanmaya ve kahve almaya gidiyorum. 10 dakikaya dönerim.", en: "Yes, I'm going to wash and buy a coffee. Back in 10 minutes.", ok: false,
               fb: { fr: "En français, les toilettes sont toujours au pluriel 🚻 : « je vais aux toilettes ». « La toilette », c'est quand on se lave !", tr: "Fransızcada « toilettes » hep çoğuldur 🚻: « je vais aux toilettes ». « La toilette » ise yıkanmak demek!", en: "In French, toilets are always plural 🚻: « je vais aux toilettes ». « La toilette » is when you wash yourself!" } },
             { fr: "Oui, je vais aller aux toilettes et acheter un café. Je reviens dans 10 minutes.", tr: "Evet, tuvalete gidip bir kahve alacağım. 10 dakikaya dönerim.", en: "Yes, I'm going to the toilet and to get a coffee. I'll be back in 10 minutes.", ok: true, go: "f" },
             { fr: "Oui, je vais acheter un café. Je reviens dans 15 heures.", tr: "Evet, kahve almaya gidiyorum. 15 saat sonra dönerim.", en: "Yes, I'm going to buy a coffee. I'll be back in 15 hours.", ok: false,
               fb: { fr: "Thomas ne va pas attendre jusqu'à demain 😄 ! La pause dure 15 MINUTES : « je reviens dans 10 minutes ».", tr: "Thomas yarına kadar beklemeyecek 😄! Mola 15 DAKİKA sürüyor: « je reviens dans 10 minutes ».", en: "Thomas won't wait until tomorrow 😄! The break lasts 15 MINUTES: « je reviens dans 10 minutes »." } }
           ] },
      f: { scene: { fr: "De retour sur l'autoroute, Camille regarde son téléphone.", tr: "Otoyola geri dönünce Camille telefonuna bakıyor.", en: "Back on the motorway, Camille looks at her phone." },
           say: [["F", "Oh non, il y a un bouchon de 10 km avant Lyon !"], ["M", "On va arriver avec 30 minutes de retard. Ça pose problème à quelqu'un ?"]],
           choices: [
             { fr: "Un bouchon ? On ouvre une bouteille ?", tr: "Bir mantar mı? Bir şişe mi açıyoruz?", en: "A cork? Are we opening a bottle?", ok: false,
               fb: { fr: "Bonne blague 🍾😄 ! Mais sur la route, « un bouchon » = un embouteillage. Dites si 30 minutes de retard, c'est un problème pour vous.", tr: "İyi espri 🍾😄! Ama yolda « un bouchon » = trafik sıkışıklığı. 30 dakika gecikmenin sizin için sorun olup olmadığını söyleyin.", en: "Good joke 🍾😄! But on the road « un bouchon » = a traffic jam. Say whether 30 minutes late is a problem for you." } },
             { fr: "Pas de problème pour moi, je ne suis pas pressé.", tr: "Benim için sorun yok, acelem yok.", en: "No problem for me, I'm not in a hurry.", ok: false,
               fb: { fr: "Presque parfait ! Vous êtes une femme, alors on accorde : « je ne suis pas pressÉE ».", tr: "Neredeyse mükemmel! Kadınsınız, o yüzden uyum yapılır: « je ne suis pas pressÉE ».", en: "Almost perfect! You're a woman, so it agrees: « je ne suis pas pressÉE »." } },
             { fr: "Pas de problème pour moi, je ne suis pas pressée.", tr: "Benim için sorun yok, acelem yok.", en: "No problem for me, I'm not in a hurry.", ok: true, go: "g" }
           ] },
      g: { scene: { fr: "Enfin, voici Lyon ! La voiture arrive près de la gare Part-Dieu.", tr: "Sonunda Lyon! Araba Part-Dieu garının yakınına geliyor.", en: "Finally, here's Lyon! The car gets near Part-Dieu station." },
           say: [["M", "Je vous dépose où exactement ?"]],
           choices: [
             { fr: "Devant la gare, ce sera parfait, merci.", tr: "Garın önü harika olur, teşekkürler.", en: "In front of the station would be perfect, thanks.", ok: true, go: "h" },
             { fr: "Déposez-moi mon sac, s'il vous plaît, près du tram.", tr: "Lütfen çantamı bırakın, tramvayın yanına.", en: "Drop my bag off, please, near the tram.", ok: false,
               fb: { fr: "C'est vous qu'il dépose, pas votre sac 😄 ! Il veut un lieu : « devant la gare », « près de l'arrêt de tram »…", tr: "Bırakacağı kişi sizsiniz, çantanız değil 😄! Bir yer istiyor: « devant la gare », « près de l'arrêt de tram »…", en: "It's you he's dropping off, not your bag 😄! He wants a place: « devant la gare », « près de l'arrêt de tram »…" } },
             { fr: "Si possible, près de l'arrêt de tram, s'il vous plaît.", tr: "Mümkünse tramvay durağının yakınında, lütfen.", en: "If possible, near the tram stop, please.", ok: true, go: "h" }
           ] },
      h: { say: [["M", "Et voilà ! Vous avez déjà payé sur l'appli, donc tout est bon. Bon séjour à Lyon !"]],
           choices: [
             { fr: "Merci beaucoup, c'était très agréable ! Je vous dois combien ?", tr: "Çok teşekkürler, çok keyifliydi! Size ne kadar borcum var?", en: "Thank you very much, it was very pleasant! How much do I owe you?", ok: false,
               fb: { fr: "Rien du tout, vous avez déjà payé sur l'appli 📱 ! Remerciez-le simplement pour le trajet.", tr: "Hiçbir şey, uygulamadan zaten ödediniz 📱! Yolculuk için ona sadece teşekkür edin.", en: "Nothing at all, you already paid on the app 📱! Just thank him for the ride." } },
             { fr: "Merci beaucoup, c'était très agréable ! Bon week-end !", tr: "Çok teşekkürler, çok keyifliydi! İyi hafta sonları!", en: "Thank you very much, it was very pleasant! Have a nice weekend!", ok: true, go: "fin" },
             { fr: "Merci beaucoup, c'était très agréable ! Bonne nuit !", tr: "Çok teşekkürler, çok keyifliydi! İyi geceler!", en: "Thank you very much, it was very pleasant! Good night!", ok: false,
               fb: { fr: "Il est 11 h du matin 🌞 ! Dites « bonne journée » ou « bon week-end ».", tr: "Saat sabahın 11'i 🌞! « Bonne journée » ya da « bon week-end » deyin.", en: "It's 11 in the morning 🌞! Say « bonne journée » or « bon week-end »." } }
           ] },
      fin: { end: "win", say: [["M", "Merci, c'est gentil ! Bon week-end !"], ["F", "Au revoir !"]],
             scene: { fr: "Vous êtes à Lyon, et vous avez discuté en français pendant tout le trajet. Bravo ! 🚙🎉", tr: "Lyon'dasınız ve yolculuk boyunca Fransızca sohbet ettiniz. Bravo! 🚙🎉", en: "You're in Lyon, and you chatted in French for the whole trip. Well done! 🚙🎉" } }
    } },

  /* ───────────── 33. Un malentendu avec un collègue ───────────── */
  { id: "av-malentendu", level: "A2", emoji: "🤝",
    t: { fr: "Un malentendu avec un collègue", tr: "Bir iş arkadaşıyla yanlış anlaşılma", en: "A misunderstanding with a colleague" },
    goal: { fr: "Votre collègue Karim est fâché : comprenez pourquoi, excusez-vous et réglez le problème d'horaires.", tr: "İş arkadaşınız Karim kızgın: nedenini anlayın, özür dileyin ve vardiya sorununu çözün.", en: "Your colleague Karim is upset: find out why, apologise and sort out the shift problem." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Lundi matin, à l'accueil de la salle de sport. Votre collègue Karim arrive. Il ne vous regarde pas. Entre collègues, on se dit « tu ».", tr: "Pazartesi sabahı, spor salonunun resepsiyonunda. İş arkadaşınız Karim geliyor. Size bakmıyor. İş arkadaşları arasında « tu » (sen) denir.", en: "Monday morning, at the gym's front desk. Your colleague Karim arrives. He doesn't look at you. Colleagues say « tu » to each other." },
           say: [["M", "Salut."]],
           choices: [
             { fr: "Bonjour monsieur, comment allez-vous ce matin ?", tr: "Merhaba beyefendi, bu sabah nasılsınız?", en: "Hello, sir, how are you this morning?", ok: false,
               fb: { fr: "Si froid avec un collègue 🥶 ? Il va croire que vous êtes fâchée aussi ! Entre collègues : « salut, ça va ? ».", tr: "Bir iş arkadaşına bu kadar soğuk mu 🥶? Sizin de kızgın olduğunuzu düşünecek! İş arkadaşları arasında: « salut, ça va ? ».", en: "So cold with a colleague 🥶? He'll think you're upset too! Between colleagues: « salut, ça va ? »." } },
             { fr: "Salut Karim ! Ça va ? Tu as l'air fâchée ce matin.", tr: "Selam Karim! Nasılsın? Bu sabah kızgın görünüyorsun.", en: "Hi Karim! You OK? You look angry this morning.", ok: false,
               fb: { fr: "Bonne idée, mais Karim est un homme : « tu as l'air fâché », sans « e ».", tr: "İyi fikir ama Karim bir erkek: « tu as l'air fâché », « e » olmadan.", en: "Good idea, but Karim is a man: « tu as l'air fâché », without the « e »." } },
             { fr: "Salut Karim ! Ça va ? Tu as l'air fâché ce matin.", tr: "Selam Karim! İyi misin? Bu sabah kızgın görünüyorsun.", en: "Hi Karim! You OK? You look upset this morning.", ok: true, go: "b" }
           ] },
      b: { say: [["M", "Bof… Tu sais, ton message de samedi, je ne l'ai pas trop aimé."]],
           choices: [
             { fr: "Mon message ? Qu'est-ce que j'ai écrit ?", tr: "Mesajım mı? Ne yazdım?", en: "My message? What did I write?", ok: true, go: "c" },
             { fr: "Mon message ? Je ne rappelle pas ce que j'ai écrit.", tr: "Mesajım mı? Ne yazdığımı tekrar aramıyorum.", en: "My message? I don't call back what I wrote.", ok: false,
               fb: { fr: "« Je ne rappelle pas » = je ne téléphone pas une deuxième fois 📞😄. Pour la mémoire : « je ne me rappelle pas » ou « je ne m'en souviens pas ».", tr: "« Je ne rappelle pas » = ikinci kez telefon etmiyorum 📞😄. Hafıza için: « je ne me rappelle pas » ya da « je ne m'en souviens pas ».", en: "« Je ne rappelle pas » = I'm not phoning a second time 📞😄. For memory: « je ne me rappelle pas » or « je ne m'en souviens pas »." } },
             { fr: "Moi non plus, je n'aime pas les messages.", tr: "Ben de mesajları sevmem.", en: "Me neither, I don't like messages.", ok: false,
               fb: { fr: "Il parle d'UN message précis 😉. Demandez-lui : « qu'est-ce que j'ai écrit ? ».", tr: "Belirli BİR mesajdan bahsediyor 😉. Ona sorun: « qu'est-ce que j'ai écrit ? ».", en: "He means ONE specific message 😉. Ask him: « qu'est-ce que j'ai écrit ? »." } }
           ] },
      c: { scene: { fr: "Il vous montre son téléphone. Votre message : « Échanger samedi et dimanche ? Je m'en fiche. »", tr: "Size telefonunu gösteriyor. Mesajınız: « Échanger samedi et dimanche ? Je m'en fiche. »", en: "He shows you his phone. Your message: « Échanger samedi et dimanche ? Je m'en fiche. »" },
           say: [["M", "Je t'ai demandé si on pouvait échanger nos horaires, et tu m'as répondu « je m'en fiche ». C'est un peu sec, non ?"]],
           choices: [
             { fr: "Ce n'est pas sec, il a plu samedi ! Je voulais dire pas de problème.", tr: "Kuru değil, cumartesi yağmur yağdı! Sorun yok demek istedim.", en: "It's not dry, it rained on Saturday! I meant no problem.", ok: false,
               fb: { fr: "Il ne parle pas de la météo 🌧️😄 ! Une réponse « sèche », c'est une réponse froide, pas gentille. Expliquez ce que vous vouliez dire.", tr: "Hava durumundan bahsetmiyor 🌧️😄! « Sèche » bir cevap, soğuk ve kaba bir cevaptır. Ne demek istediğinizi açıklayın.", en: "He's not talking about the weather 🌧️😄! A « sèche » answer is a cold, unfriendly one. Explain what you meant." } },
             { fr: "Oh non ! Je voulais dire « ça m'est égal », pas de problème !", tr: "Ah hayır! « Benim için fark etmez » demek istedim, sorun yok!", en: "Oh no! I meant « I don't mind », no problem!", ok: true, go: "d" },
             { fr: "Oui, je m'en fiche complètement, pas de problème pour moi !", tr: "Evet, hiç umurumda değil, benim için sorun yok!", en: "Yes, I couldn't care less, no problem for me!", ok: false,
               fb: { fr: "Aïe, c'est encore pire 😬 ! « Je m'en fiche » = ça ne m'intéresse pas. Vous vouliez dire « ça m'est égal ».", tr: "Eyvah, bu daha da kötü 😬! « Je m'en fiche » = umurumda değil. Siz « ça m'est égal » demek istediniz.", en: "Ouch, that's even worse 😬! « Je m'en fiche » = I don't care at all. You meant « ça m'est égal »." } }
           ] },
      d: { say: [["M", "Ah bon ? Pour moi, « je m'en fiche », ça veut dire « ça ne m'intéresse pas du tout »."]],
           choices: [
             { fr: "Excuse-moi, je suis vraiment désolé ! Je pensais que ça voulait dire autre chose.", tr: "Kusura bakma, gerçekten üzgünüm! Başka bir anlamı var sanıyordum.", en: "Sorry, I'm really sorry! I thought it meant something else.", ok: false,
               fb: { fr: "Très gentil ! Petit détail : au féminin, on écrit « désolée ». Et expliquez votre erreur : « je pensais que ça voulait dire… ».", tr: "Çok nazik! Küçük bir ayrıntı: dişil hâli « désolée » diye yazılır. Hatanızı da açıklayın: « je pensais que ça voulait dire… ».", en: "Very kind! Small detail: in the feminine it's « désolée ». And explain your mistake: « je pensais que ça voulait dire… »." } },
             { fr: "C'est ta faute, tu as mal compris. Je voulais dire « ça m'est égal ».", tr: "Senin hatan, yanlış anladın. « Fark etmez » demek istedim.", en: "It's your fault, you misunderstood. I meant « I don't mind ».", ok: false,
               fb: { fr: "Hmm, ça ne va pas le calmer 😅. Le mot était mal choisi : excusez-vous et expliquez ce que vous pensiez.", tr: "Hmm, bu onu sakinleştirmez 😅. Kelime yanlış seçilmişti: özür dileyin ve ne düşündüğünüzü açıklayın.", en: "Hmm, that won't calm him down 😅. The word was badly chosen: apologise and explain what you thought." } },
             { fr: "Je suis vraiment désolée ! Pour moi, ça voulait dire « pas de problème ».", tr: "Gerçekten üzgünüm! Benim için « sorun yok » demekti.", en: "I'm really sorry! For me, it meant « no problem ».", ok: true, go: "e" }
           ] },
      e: { scene: { fr: "Karim éclate de rire.", tr: "Karim kahkahayı basıyor.", en: "Karim bursts out laughing." },
           say: [["M", "Ha ha, d'accord, je comprends mieux ! Alors, l'échange, c'est toujours possible ? Moi samedi, toi dimanche ?"]],
           choices: [
             { fr: "Oui, bien sûr ! Je travaillerai dimanche, et toi samedi.", tr: "Evet, tabii ki! Ben pazar çalışırım, sen de cumartesi.", en: "Yes, of course! I'll work on Sunday, and you on Saturday.", ok: true, go: "f1" },
             { fr: "Oui, je m'en fiche ! Moi dimanche, toi samedi.", tr: "Evet, umurumda değil! Ben pazar, sen cumartesi.", en: "Yes, I couldn't care less! Me Sunday, you Saturday.", ok: false,
               fb: { fr: "Attention, l'ancienne habitude revient 😄 ! Dites plutôt « oui, ça m'est égal » ou « avec plaisir ».", tr: "Dikkat, eski alışkanlık geri geldi 😄! Bunun yerine « oui, ça m'est égal » ya da « avec plaisir » deyin.", en: "Careful, the old habit is back 😄! Say « oui, ça m'est égal » or « avec plaisir » instead." } },
             { fr: "Ça m'arrange, mais d'abord, on demande à Sophie.", tr: "İşime gelir ama önce Sophie'ye soralım.", en: "That suits me, but let's ask Sophie first.", ok: true, go: "f2" }
           ] },
      f1: { say: [["M", "Génial ! Il faut prévenir Sophie. Tu peux lui envoyer un message ?"]],
           choices: [
             { fr: "Oui, je la écris tout de suite.", tr: "Evet, onu hemen yazıyorum.", en: "Yes, I'm writing her right away.", ok: false,
               fb: { fr: "On écrit À quelqu'un, donc on dit « lui » : « je lui écris tout de suite ».", tr: "Fransızcada birine (« à ») yazılır, bu yüzden « lui » denir: « je lui écris tout de suite ».", en: "You write TO someone, so it's « lui »: « je lui écris tout de suite »." } },
             { fr: "Oui, je lui écris tout de suite.", tr: "Evet, ona hemen yazıyorum.", en: "Yes, I'll write to her right away.", ok: true, go: "g" },
             { fr: "Non, Sophie s'en fiche.", tr: "Hayır, Sophie'nin umurunda değil.", en: "No, Sophie doesn't care.", ok: false,
               fb: { fr: "Oh là là, cette expression vous suit partout 😄 ! La responsable doit savoir : « je lui écris tout de suite ».", tr: "Aman, bu ifade peşinizi bırakmıyor 😄! Müdürün bilmesi gerekiyor: « je lui écris tout de suite ».", en: "Oh dear, that expression follows you everywhere 😄! The manager needs to know: « je lui écris tout de suite »." } }
           ] },
      f2: { scene: { fr: "Justement, Sophie, la responsable, passe à l'accueil.", tr: "Tam o sırada müdür Sophie resepsiyondan geçiyor.", en: "Just then, Sophie, the manager, comes by the front desk." },
           say: [["F", "Salut vous deux ! Il y a un souci ?"]],
           choices: [
             { fr: "Bonjour madame la directrice. On voudrait échanger nos horaires.", tr: "Merhaba müdire hanım. Saatlerimizi değiştirmek istiyoruz.", en: "Hello, Madam Director. We'd like to swap our shifts.", ok: false,
               fb: { fr: "Sophie et vous, vous vous dites « tu » 😄 ! Restez simple : « salut Sophie ! ».", tr: "Sophie ile birbirinize « tu » diyorsunuz 😄! Sade kalın: « salut Sophie ! ».", en: "You and Sophie say « tu » to each other 😄! Keep it simple: « salut Sophie ! »." } },
             { fr: "Oui, un très gros souci, Karim est fâché contre moi !", tr: "Evet, çok büyük bir sorun var, Karim bana kızgın!", en: "Yes, a huge problem, Karim is angry with me!", ok: false,
               fb: { fr: "Mais c'est réglé maintenant 😅 ! Pas de drame : parlez juste de l'échange d'horaires.", tr: "Ama artık çözüldü 😅! Drama yok: sadece vardiya değişiminden bahsedin.", en: "But it's sorted now 😅! No drama: just talk about the shift swap." } },
             { fr: "Non, pas du tout ! Karim et moi, on voudrait échanger samedi et dimanche.", tr: "Hayır, hiç değil! Karim'le ben cumartesi ve pazarı değiştirmek istiyoruz.", en: "No, not at all! Karim and I would like to swap Saturday and Sunday.", ok: true, go: "g" }
           ] },
      g: { say: [["F", "Pas de problème pour moi. Mais notez bien le changement sur le planning, d'accord ?"]],
           choices: [
             { fr: "D'accord, je le note tout de suite sur le planning.", tr: "Tamam, hemen çizelgeye yazıyorum.", en: "OK, I'll write it on the schedule right away.", ok: true, go: "h" },
             { fr: "D'accord, je le note tout de suite sur la planète.", tr: "Tamam, hemen gezegene not ediyorum.", en: "OK, I'll write it down right now on the planet.", ok: false,
               fb: { fr: "La planète, c'est un peu grand pour écrire 🌍😄 ! « Le planning » = le tableau des horaires.", tr: "Gezegen yazmak için biraz büyük 🌍😄! « Le planning » = vardiya çizelgesi.", en: "The planet is a bit big to write on 🌍😄! « Le planning » = the shift schedule." } },
             { fr: "D'accord, je la note tout de suite sur le planning.", tr: "Tamam, onu hemen plana not ediyorum.", en: "OK, I'll write her down right now on the schedule.", ok: false,
               fb: { fr: "« Le changement » est masculin : « je LE note ». Avec « la », on croit que vous notez Sophie 😄.", tr: "« Le changement » erildir: « je LE note ». « La » ile Sophie'yi yazıyormuşsunuz gibi anlaşılır 😄.", en: "« Le changement » is masculine: « je LE note ». With « la », it sounds like you're writing down Sophie 😄." } }
           ] },
      h: { say: [["M", "Merci ! Et pardon d'avoir été froid ce matin. Pour fêter ça, je t'offre un café ?"]],
           choices: [
             { fr: "Oui, merci ! Je t'offre un café, et merci de m'avoir expliqué !", tr: "Evet, teşekkürler! Sana bir kahve ısmarlıyorum, açıkladığın için de teşekkürler!", en: "Yes, thanks! I'll buy you a coffee, and thanks for explaining!", ok: false,
               fb: { fr: "C'est LUI qui offre 😄 ! Acceptez simplement : « avec plaisir, merci ! ».", tr: "Ismarlayan O 😄! Sadece kabul edin: « avec plaisir, merci ! ».", en: "HE's the one buying 😄! Just accept: « avec plaisir, merci ! »." } },
             { fr: "Avec plaisir ! Et merci de m'avoir expliqué cette expression !", tr: "Memnuniyetle! Bu deyimi açıkladığın için de teşekkürler!", en: "With pleasure! And thanks for explaining that expression to me!", ok: true, go: "fin" },
             { fr: "Le café ? Je m'en fiche ! Mais merci de m'avoir expliqué.", tr: "Kahve mi? Umurumda değil! Ama açıkladığın için teşekkürler.", en: "Coffee? I couldn't care less! But thanks for explaining.", ok: false,
               fb: { fr: "Noooon 😂 ! On recommence ? Dites « avec plaisir ! ».", tr: "Hayııır 😂! Baştan mı başlıyoruz? « Avec plaisir ! » deyin.", en: "Nooo 😂! Are we starting again? Say « avec plaisir ! »." } }
           ] },
      fin: { end: "win", say: [["M", "Allez, viens, c'est l'heure de la pause !"]],
             scene: { fr: "Vous buvez un café ensemble et vous riez beaucoup. Un malentendu, ça se règle en parlant : bravo ! 🤝🎉", tr: "Birlikte kahve içiyor ve bolca gülüyorsunuz. Yanlış anlaşılmalar konuşarak çözülür: bravo! 🤝🎉", en: "You have a coffee together and laugh a lot. A misunderstanding gets sorted by talking: well done! 🤝🎉" } }
    } },

  /* ───────────── 34. Donner son sang ───────────── */
  { id: "av-don-sang", level: "A2", emoji: "🩸",
    t: { fr: "Donner son sang", tr: "Kan bağışlamak", en: "Giving blood" },
    goal: { fr: "Faites votre premier don de sang : répondez aux questions, faites le don et prenez la collation.", tr: "İlk kan bağışınızı yapın: soruları cevaplayın, bağışı yapın ve ikramdan yararlanın.", en: "Give blood for the first time: answer the questions, donate and have the snack." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Il y a une collecte de sang à la salle des fêtes. Vous entrez. Une bénévole vous accueille.", tr: "Belediye salonunda kan bağışı etkinliği var. İçeri giriyorsunuz. Bir gönüllü sizi karşılıyor.", en: "There's a blood drive at the village hall. You go in. A volunteer welcomes you." },
           say: [["F", "Bonjour madame ! C'est votre premier don ?"]],
           choices: [
             { fr: "Oui, je suis le premier don.", tr: "Evet, ben ilk bağışım.", en: "Yes, I am the first donation.", ok: false,
               fb: { fr: "Vous n'êtes pas un don, vous êtes une donneuse 😄 ! Dites « oui, c'est la première fois ».", tr: "Siz bir bağış değilsiniz, bağışçısınız 😄! « Oui, c'est la première fois » deyin.", en: "You're not a donation, you're a donor 😄! Say « oui, c'est la première fois »." } },
             { fr: "Oui, c'est la première fois. Je suis un peu stressée !", tr: "Evet, ilk kez. Biraz gerginim!", en: "Yes, it's the first time. I'm a bit nervous!", ok: true, go: "b" },
             { fr: "Oui, c'est la première fois. Je suis un peu stressé !", tr: "Evet, ilk kez. Biraz gerginim!", en: "Yes, it's the first time. I'm a bit nervous!", ok: false,
               fb: { fr: "C'est presque ça ! Au féminin, on ajoute un « e » : « je suis un peu stressÉE ». On ne l'entend pas, mais on l'écrit 😉.", tr: "Neredeyse! Dişilde bir « e » eklenir: « je suis un peu stressÉE ». Duyulmaz ama yazılır 😉.", en: "Nearly! In the feminine you add an « e »: « je suis un peu stressÉE ». You can't hear it, but you write it 😉." } }
           ] },
      b: { say: [["F", "C'est normal, on est là pour vous ! Vous avez une pièce d'identité ? Et vous avez mangé ce matin ?"]],
           choices: [
             { fr: "Oui, voici mon titre de séjour. Et oui, j'ai pris un bon petit-déjeuner.", tr: "Evet, işte oturma iznim. Ve evet, güzel bir kahvaltı yaptım.", en: "Yes, here's my residence permit. And yes, I had a good breakfast.", ok: true, go: "c" },
             { fr: "Voici ma pièce d'un euro.", tr: "İşte bir euroluk madeni param.", en: "Here's my one-euro coin.", ok: false,
               fb: { fr: "Le don est gratuit, pas besoin de pièce de monnaie 🪙😄 ! « Une pièce d'identité » = un passeport, une carte de séjour…", tr: "Bağış ücretsiz, bozuk paraya gerek yok 🪙😄! « Une pièce d'identité » = pasaport, oturma kartı…", en: "Donating is free, no coin needed 🪙😄! « Une pièce d'identité » = a passport, a residence card…" } },
             { fr: "Oui, voici ma carte. Mais je n'ai rien mangé, comme ça je suis plus légère !", tr: "Evet, işte kartım. Ama hiçbir şey yemedim, böylece daha hafifim!", en: "Yes, here's my card. But I haven't eaten anything, so I'm lighter!", ok: false, go: "b2",
               fb: { fr: "Oh non ! Pour donner son sang, il ne faut surtout pas venir à jeun. Voyons ce que dit la bénévole…", tr: "Ah hayır! Kan bağışlamak için kesinlikle aç gelmemek gerekir. Bakalım gönüllü ne diyecek…", en: "Oh no! To give blood, you really mustn't come on an empty stomach. Let's see what the volunteer says…" } }
           ] },
      b2: { say: [["F", "Ah non, il ne faut jamais venir à jeun ! Tenez, prenez ce jus d'orange et ces biscuits d'abord."]],
           choices: [
             { fr: "Non merci, je suis au régime. Je ne savais pas.", tr: "Hayır teşekkürler, diyetteyim. Bilmiyordum.", en: "No thanks, I'm on a diet. I didn't know.", ok: false,
               fb: { fr: "Aujourd'hui, le régime fait une pause 🍪 ! Sans manger, vous risquez un malaise. Acceptez gentiment.", tr: "Bugün diyet mola veriyor 🍪! Yemek yemeden fenalaşabilirsiniz. Nazikçe kabul edin.", en: "Today the diet takes a break 🍪! Without eating you might feel faint. Accept nicely." } },
             { fr: "D'accord, merci ! Je ne savais pas.", tr: "Tamam, teşekkürler! Bilmiyordum.", en: "OK, thank you! I didn't know.", ok: true, go: "c" }
           ] },
      c: { scene: { fr: "C'est l'heure de l'entretien avec la médecin. Elle a votre questionnaire.", tr: "Doktorla görüşme zamanı. Anketiniz elinde.", en: "It's time for the interview with the doctor. She has your questionnaire." },
           say: [["F2", "Bonjour. Vous pesez plus de 50 kilos ? Et vous avez fait un tatouage ou un piercing ces quatre derniers mois ?"]],
           choices: [
             { fr: "Oui, je pèse 50 ans. Et non, pas de tatouage ni de piercing.", tr: "Evet, 50 yıl çekiyorum. Hayır, dövme ya da piercing yok.", en: "Yes, I weigh 50 years. And no, no tattoo or piercing.", ok: false,
               fb: { fr: "Vous avez l'air beaucoup plus jeune 😄 ! On pèse des kilos : « oui, je pèse plus de 50 kilos ».", tr: "Çok daha genç görünüyorsunuz 😄! Kilo tartılır: « oui, je pèse plus de 50 kilos ».", en: "You look much younger 😄! You weigh kilos: « oui, je pèse plus de 50 kilos »." } },
             { fr: "Oui, je pèse plus de 50 kilos. Et non, pas de tatouage ni de piercing.", tr: "Evet, 50 kilodan fazlayım. Ve hayır, ne dövme ne piercing var.", en: "Yes, I weigh more than 50 kilos. And no, no tattoo or piercing.", ok: true, go: "d" },
             { fr: "Oui, j'ai eu quatre mois. Pas de tatouage ni de piercing.", tr: "Evet, dört aylık oldum. Dövme ya da piercing yok.", en: "Yes, I was four months old. No tattoo or piercing.", ok: false,
               fb: { fr: "Vous n'êtes plus un bébé 👶😄 ! Répondez aux deux questions : le poids, puis le tatouage.", tr: "Artık bebek değilsiniz 👶😄! İki soruyu da cevaplayın: önce kilo, sonra dövme.", en: "You're not a baby anymore 👶😄! Answer both questions: weight, then tattoo." } }
           ] },
      d: { say: [["F2", "Très bien. Vous prenez des médicaments en ce moment ?"]],
           choices: [
             { fr: "Non, aucun médicament.", tr: "Hayır, hiç ilaç kullanmıyorum.", en: "No, no medication at all.", ok: true, go: "e" },
             { fr: "Oui, je prends le bus tous les jours, pour le mal de tête.", tr: "Evet, baş ağrısı için her gün otobüse biniyorum.", en: "Yes, I take the bus every day, for the headache.", ok: false,
               fb: { fr: "Le bus n'est pas un médicament 🚌😄 ! Elle parle de pilules, de sirop… Répondez par « non, aucun » ou dites lequel.", tr: "Otobüs ilaç değil 🚌😄! Hap, şurup gibi şeylerden bahsediyor… « Non, aucun » deyin ya da hangisi olduğunu söyleyin.", en: "The bus isn't a medicine 🚌😄! She means pills, syrup… Answer « non, aucun » or say which one." } },
             { fr: "J'ai pris du paracétamol la semaine dernière, pour un mal de tête.", tr: "Geçen hafta baş ağrısı için parasetamol aldım.", en: "I took paracetamol last week, for a headache.", ok: true, go: "d2" }
           ] },
      d2: { say: [["F2", "Le paracétamol, ce n'est pas un problème. Et aujourd'hui, vous avez encore mal à la tête ?"]],
           choices: [
             { fr: "Non, je n'ai plus de tête aujourd'hui, merci.", tr: "Hayır, bugün artık kafam yok, teşekkürler.", en: "No, I don't have a head any more today, thanks.", ok: false,
               fb: { fr: "Heureusement que si 😄 ! On dit « je n'ai plus mal à la tête ».", tr: "Neyse ki var 😄! « Je n'ai plus mal à la tête » denir.", en: "Luckily you do 😄! You say « je n'ai plus mal à la tête »." } },
             { fr: "Non, ça va très bien aujourd'hui, merci.", tr: "Hayır, bugün çok iyiyim, teşekkürler.", en: "No, I'm feeling great today, thanks.", ok: true, go: "e" }
           ] },
      e: { scene: { fr: "Vous êtes installée dans un grand fauteuil. Un infirmier prépare le matériel.", tr: "Büyük bir koltuğa yerleştiniz. Bir hemşire malzemeleri hazırlıyor.", en: "You're settled in a big chair. A nurse is getting the equipment ready." },
           say: [["M", "Je vais piquer. Vous préférez le bras droit ou le bras gauche ?"]],
           choices: [
             { fr: "Ni l'un ni l'autre, merci ! Je suis droitière.", tr: "Hiçbiri, teşekkürler! Sağ elliyim.", en: "Neither, thanks! I'm right-handed.", ok: false,
               fb: { fr: "Courage, vous êtes venue pour ça 💪😄 ! Choisissez un bras, par exemple celui que vous utilisez moins.", tr: "Cesaret, bunun için geldiniz 💪😄! Bir kol seçin, örneğin daha az kullandığınızı.", en: "Be brave, that's what you came for 💪😄! Pick an arm, for example the one you use less." } },
             { fr: "Le bras du milieu, s'il vous plaît. Je suis droitière.", tr: "Ortadaki kol, lütfen. Sağ elliyim.", en: "The middle arm, please. I'm right-handed.", ok: false,
               fb: { fr: "Vous avez seulement deux bras, comme tout le monde 😄 ! « Le bras gauche » ou « le bras droit ».", tr: "Herkes gibi sadece iki kolunuz var 😄! « Le bras gauche » ya da « le bras droit ».", en: "You only have two arms, like everyone 😄! « Le bras gauche » or « le bras droit »." } },
             { fr: "Le bras gauche, s'il vous plaît. Je suis droitière.", tr: "Sol kol lütfen. Sağ elliyim.", en: "The left arm, please. I'm right-handed.", ok: true, go: "f" }
           ] },
      f: { scene: { fr: "Le don a commencé. Le sang coule doucement dans la poche.", tr: "Bağış başladı. Kan yavaşça torbaya akıyor.", en: "The donation has started. The blood flows slowly into the bag." },
           say: [["M", "Tout va bien ? Vous n'avez pas la tête qui tourne ?"]],
           choices: [
             { fr: "Non, merci, mais je suis froide. C'est moins terrible que je pensais !", tr: "Hayır, teşekkürler, ama ben soğuk biriyim. Düşündüğümden az korkunç!", en: "No, thanks, but I'm a cold person. It's less awful than I thought!", ok: false,
               fb: { fr: "« Je suis froide » = je ne suis pas chaleureuse 🧊. Pour la température, on dit « j'ai froid ». Mais dites d'abord si la tête tourne !", tr: "« Je suis froide » = sıcakkanlı değilim 🧊. Sıcaklık için « j'ai froid » denir. Ama önce başınızın dönüp dönmediğini söyleyin!", en: "« Je suis froide » = I'm not a warm person 🧊. For temperature it's « j'ai froid ». But first say whether you feel dizzy!" } },
             { fr: "Non, ça va bien, merci. C'est moins terrible que je pensais !", tr: "Hayır, iyiyim, teşekkürler. Düşündüğümden daha az korkunçmuş!", en: "No, I'm fine, thanks. It's not as bad as I thought!", ok: true, go: "g" },
             { fr: "Non, merci, je n'ai pas de tête. C'est moins terrible que je pensais !", tr: "Hayır, teşekkürler, kafam yok. Düşündüğümden az korkunç!", en: "No, thanks, I don't have a head. It's less awful than I thought!", ok: false,
               fb: { fr: "L'infirmier va s'inquiéter 😄 ! Dites « non, ça va bien » ou « non, la tête ne tourne pas ».", tr: "Hemşire endişelenecek 😄! « Non, ça va bien » ya da « non, la tête ne tourne pas » deyin.", en: "The nurse will worry 😄! Say « non, ça va bien » or « non, la tête ne tourne pas »." } }
           ] },
      g: { scene: { fr: "Dix minutes plus tard, c'est fini ! Vous allez à la collation.", tr: "On dakika sonra bitti! İkram masasına gidiyorsunuz.", en: "Ten minutes later, it's done! You go to the snack table." },
           say: [["F", "Bravo ! Il y a des boissons, des gâteaux et des sandwichs. Qu'est-ce qui vous ferait plaisir ?"]],
           choices: [
             { fr: "Je voudrais du sang et un sandwich au fromage, s'il vous plaît.", tr: "Kan ve peynirli sandviç istiyorum, lütfen.", en: "I'd like some blood and a cheese sandwich, please.", ok: false,
               fb: { fr: "Vous venez d'en donner, pas d'en prendre 🧛‍♀️😄 ! Choisissez une boisson ou un sandwich.", tr: "Kan vermeye geldiniz, almaya değil 🧛‍♀️😄! Bir içecek ya da sandviç seçin.", en: "You've just given some, not taken it 🧛‍♀️😄! Choose a drink or a sandwich." } },
             { fr: "Un jus d'orange et un sandwich au fromage, s'il vous plaît.", tr: "Bir portakal suyu ve peynirli sandviç, lütfen.", en: "An orange juice and a cheese sandwich, please.", ok: true, go: "h" },
             { fr: "Je veux bien un café et deux petits gâteaux, merci !", tr: "Bir kahve ve iki küçük kurabiye alırım, teşekkürler!", en: "I'd love a coffee and two little cakes, thanks!", ok: true, go: "h" }
           ] },
      h: { say: [["F", "Avec plaisir. Vous pourrez revenir donner dans 8 semaines. On vous envoie un SMS pour la prochaine collecte ?"]],
           choices: [
             { fr: "Oui, avec plaisir ! Je reviendrai sûrement.", tr: "Evet, memnuniyetle! Muhtemelen tekrar geleceğim.", en: "Yes, with pleasure! I'll definitely come back.", ok: true, go: "fin" },
             { fr: "Oui, je reviendrai demain !", tr: "Evet, yarın tekrar geleceğim!", en: "Yes, I'll come back tomorrow!", ok: false,
               fb: { fr: "Quel enthousiasme 😄 ! Mais le corps a besoin de temps : il faut attendre 8 semaines.", tr: "Ne heves 😄! Ama vücudun zamana ihtiyacı var: 8 hafta beklemek gerekiyor.", en: "What enthusiasm 😄! But your body needs time: you have to wait 8 weeks." } },
             { fr: "Non, je ne donne pas mon numéro de sang.", tr: "Hayır, kan numaramı vermiyorum.", en: "No, I don't give my blood number.", ok: false,
               fb: { fr: "« Numéro de sang » n'existe pas 😄 ! On parle de votre numéro de téléphone. Dites « oui, avec plaisir » ou « non merci ».", tr: "« Kan numarası » diye bir şey yok 😄! Telefon numaranızdan bahsediliyor. « Oui, avec plaisir » ya da « non merci » deyin.", en: "There's no such thing as a « blood number » 😄! It's about your phone number. Say « oui, avec plaisir » or « non merci »." } }
           ] },
      fin: { end: "win", say: [["F", "Merci beaucoup, madame ! Grâce à vous, on peut aider jusqu'à trois malades."]],
             scene: { fr: "Vous repartez avec un petit pansement et une grande fierté. Bravo pour ce geste ! 🩸🎉", tr: "Küçük bir bant ve büyük bir gururla ayrılıyorsunuz. Bu güzel davranışınız için bravo! 🩸🎉", en: "You leave with a small plaster and a lot of pride. Well done for doing this! 🩸🎉" } }
    } },

  /* ───────────── 35. Entretien au téléphone ───────────── */
  { id: "av-entretien-telephone", level: "A2", emoji: "📞",
    t: { fr: "Un entretien au téléphone", tr: "Telefonda bir iş görüşmesi", en: "A phone interview" },
    goal: { fr: "Réussissez un entretien téléphonique pour un job de vendeuse le week-end dans un magasin de sport.", tr: "Bir spor mağazasında hafta sonu satış elemanlığı işi için telefon görüşmesini başarıyla geçin.", en: "Do well in a phone interview for a weekend sales job in a sports shop." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Mardi, 14 h. Votre téléphone sonne. La semaine dernière, vous avez envoyé votre CV au magasin de sport du centre commercial.", tr: "Salı, saat 14. Telefonunuz çalıyor. Geçen hafta alışveriş merkezindeki spor mağazasına CV'nizi gönderdiniz.", en: "Tuesday, 2 pm. Your phone rings. Last week you sent your CV to the sports shop in the shopping centre." },
           say: [["M", "Allô, bonjour ! Julien Petit, du magasin de sport du centre commercial. Vous avez envoyé une candidature pour le poste de vendeuse le week-end ?"]],
           choices: [
             { fr: "Oui, bonjour monsieur, j'ai envoyé une candidate. Merci de m'appeler !", tr: "Evet, merhaba beyefendi, bir aday gönderdim. Aradığınız için teşekkürler!", en: "Yes, hello, sir, I sent a candidate. Thanks for calling!", ok: false,
               fb: { fr: "La candidate, c'est vous 😄 ! Ce que vous avez envoyé, c'est « une candidature » (CV + lettre).", tr: "Aday sizsiniz 😄! Gönderdiğiniz şey « une candidature » (CV + mektup).", en: "The candidate is you 😄! What you sent is « une candidature » (CV + letter)." } },
             { fr: "Allô ? Pardon, qui est à l'appareil, s'il vous plaît ?", tr: "Alo? Pardon, kiminle görüşüyorum, lütfen?", en: "Hello? Sorry, who's calling, please?", ok: false,
               fb: { fr: "Il vient de se présenter 😉 ! Écoutez bien le début : c'est Julien Petit, du magasin. Répondez à sa question.", tr: "Az önce kendini tanıttı 😉! Başını iyi dinleyin: mağazadan Julien Petit. Sorusuna cevap verin.", en: "He's just introduced himself 😉! Listen to the start: it's Julien Petit, from the shop. Answer his question." } },
             { fr: "Oui, bonjour monsieur, c'est bien moi. Merci de m'appeler !", tr: "Evet, merhaba beyefendi, evet benim. Aradığınız için teşekkürler!", en: "Yes, hello, that's me. Thank you for calling!", ok: true, go: "b" }
           ] },
      b: { say: [["M", "Vous avez cinq minutes pour un petit entretien maintenant, ou je vous rappelle plus tard ?"]],
           choices: [
             { fr: "Oui, j'ai le temps. Je vous écoute.", tr: "Evet, vaktim var. Sizi dinliyorum.", en: "Yes, I have time. I'm listening.", ok: true, go: "c" },
             { fr: "Oui, mais cinq minutes, pas une de plus !", tr: "Evet ama beş dakika, bir dakika bile fazla değil!", en: "Yes, but five minutes, not one more!", ok: false,
               fb: { fr: "Oups, un peu autoritaire pour une candidate 😅 ! Dites « oui, j'ai le temps » ou demandez poliment de rappeler.", tr: "Hoppala, bir aday için biraz otoriter 😅! « Oui, j'ai le temps » deyin ya da kibarca tekrar aramasını isteyin.", en: "Oops, a bit bossy for a candidate 😅! Say « oui, j'ai le temps » or politely ask him to call back." } },
             { fr: "Je suis dans le métro. Vous pourriez me rappeler dans dix minutes ?", tr: "Metrodayım. On dakika sonra beni tekrar arayabilir misiniz?", en: "I'm on the metro. Could you call me back in ten minutes?", ok: true, go: "b2" }
           ] },
      b2: { scene: { fr: "Dix minutes plus tard, vous êtes chez vous, au calme. Le téléphone sonne.", tr: "On dakika sonra evinizdesiniz, sessiz bir ortamda. Telefon çalıyor.", en: "Ten minutes later you're at home, somewhere quiet. The phone rings." },
           say: [["M", "Rebonjour, c'est encore Julien Petit ! C'est mieux maintenant ?"]],
           choices: [
             { fr: "Oui, merci de m'avoir rappelée. Je suis prête !", tr: "Evet, beni tekrar aradığınız için teşekkürler. Hazırım!", en: "Yes, thank you for calling me back. I'm ready!", ok: true, go: "c" },
             { fr: "Oui, merci, mais je suis encore dans le métro.", tr: "Evet, teşekkürler, ama hâlâ metrodayım.", en: "Yes, thanks, but I'm still on the metro.", ok: false,
               fb: { fr: "Mais vous êtes chez vous maintenant 🏠😉 ! Dites que c'est mieux : « oui, merci de m'avoir rappelée ».", tr: "Ama şimdi evdesiniz 🏠😉! Daha iyi olduğunu söyleyin: « oui, merci de m'avoir rappelée ».", en: "But you're at home now 🏠😉! Say it's better: « oui, merci de m'avoir rappelée »." } }
           ] },
      c: { say: [["M", "Parfait. Vous avez déjà travaillé dans la vente ?"]],
           choices: [
             { fr: "Pas dans un magasin, mais je travaille à l'accueil d'une salle de sport.", tr: "Mağazada değil ama bir spor salonunun resepsiyonunda çalışıyorum.", en: "Not in a shop, but I work at the front desk of a gym.", ok: false,
               fb: { fr: "Bien joué, mais ce n'est pas vraiment de l'expérience 😄 ! Parlez de votre travail à l'accueil : vous conseillez des clients tous les jours.", tr: "Güzel ama bu pek deneyim sayılmaz 😄! Resepsiyondaki işinizden bahsedin: her gün müşterilere tavsiye veriyorsunuz.", en: "Nice try, but that's not really experience 😄! Talk about your front-desk job: you advise customers every day." } },
             { fr: "Oui, j'ai vendu mon vélo l'année dernière, sur internet.", tr: "Evet, geçen yıl bisikletimi internetten sattım.", en: "Yes, I sold my bike last year, online.", ok: true, go: "d" },
             { fr: "Non, je ne sais rien faire.", tr: "Hayır, hiçbir şey yapamam.", en: "No, I can't do anything.", ok: false,
               fb: { fr: "Mais si, vous savez faire plein de choses 💪 ! En entretien, restez positive : parlez de votre travail à l'accueil.", tr: "Hayır, birçok şey yapabiliyorsunuz 💪! Görüşmede olumlu kalın: resepsiyondaki işinizden bahsedin.", en: "Oh yes you can, lots of things 💪! In an interview, stay positive: talk about your front-desk job." } }
           ] },
      d: { say: [["M", "Très bien ! Et le sport, vous connaissez ? Le poste est au rayon running."]],
           choices: [
             { fr: "Oui, je suis courante, tous les samedis matin au parc !", tr: "Evet, ben yaygınım, her cumartesi sabahı parkta!", en: "Yes, I'm common, every Saturday morning in the park!", ok: false,
               fb: { fr: "« Courante » = normale, fréquente (ou l'électricité ⚡😄). Pour la course, on dit « je cours » ou « je suis coureuse ».", tr: "« Courante » = olağan, sık rastlanan (ya da elektrik akımı ⚡😄). Koşu için « je cours » ya da « je suis coureuse » denir.", en: "« Courante » = ordinary, common (or electric current ⚡😄). For running, say « je cours » or « je suis coureuse »." } },
             { fr: "Oui, je connais le sport, il est très sympa.", tr: "Evet, sporu tanıyorum, çok sempatik biridir.", en: "Yes, I know sport, he's very nice.", ok: false,
               fb: { fr: "On dirait que le sport est une personne 😄 ! Parlez de VOTRE pratique : « je cours tous les samedis matin ».", tr: "Spor bir insanmış gibi 😄! KENDİ spor alışkanlığınızdan bahsedin: « je cours tous les samedis matin ».", en: "Sounds like sport is a person 😄! Talk about YOUR practice: « je cours tous les samedis matin »." } },
             { fr: "Oui ! Je cours tous les samedis, et j'étais kiné du sport en Turquie.", tr: "Evet! Her cumartesi koşuyorum ve Türkiye'de spor fizyoterapistiydim.", en: "Yes! I run every Saturday, and I was a sports physio in Turkey.", ok: true, go: "e" }
           ] },
      e: { say: [["M", "Kiné du sport ? Super, vous pourrez conseiller les clients sur les chaussures ! Vous êtes disponible le samedi et le dimanche ?"]],
           choices: [
             { fr: "Je suis disponible toute la semaine, sauf le week-end.", tr: "Hafta sonu hariç bütün hafta müsaitim.", en: "I'm available all week, except at weekends.", ok: false,
               fb: { fr: "Petit problème : c'est un job… le week-end 😅 ! Dites quand vous êtes libre le samedi et le dimanche.", tr: "Küçük bir sorun: bu bir hafta sonu işi 😅! Cumartesi ve pazar ne zaman boş olduğunuzu söyleyin.", en: "Small problem: it's a weekend job 😅! Say when you're free on Saturday and Sunday." } },
             { fr: "Le dimanche, oui. Le samedi, à partir de 11 h, après mon footing.", tr: "Pazar, evet. Cumartesi, koşumdan sonra 11'den itibaren.", en: "Sunday, yes. Saturday, from 11 a.m., after my run.", ok: true, go: "f" },
             { fr: "Oui, j'étais disponible le samedi et le dimanche derniers.", tr: "Evet, geçen cumartesi ve pazar müsaittim.", en: "Yes, I was available last Saturday and Sunday.", ok: false,
               fb: { fr: "Le week-end dernier est passé ⏪😄 ! Il parle de l'avenir : « le samedi » = tous les samedis.", tr: "Geçen hafta sonu geçti ⏪😄! Gelecekten bahsediyor: « le samedi » = her cumartesi.", en: "Last weekend is over ⏪😄! He means the future: « le samedi » = every Saturday." } }
           ] },
      f: { say: [["M", "D'accord, ça peut aller. Vous avez des questions ?"]],
           choices: [
             { fr: "Oui : quel est le salaire, et combien d'heures par week-end ?", tr: "Evet: maaş ne kadar ve hafta sonu kaç saat?", en: "Yes: what's the pay, and how many hours per weekend?", ok: true, go: "g" },
             { fr: "Non, aucune question, tout est très clair. Au revoir !", tr: "Hayır, sorum yok, her şey çok açık. Hoşça kalın!", en: "No, no questions, it's all very clear. Goodbye!", ok: false,
               fb: { fr: "Ne raccrochez pas si vite 😄 ! Une question montre votre intérêt : le salaire, les horaires, la formation…", tr: "Bu kadar çabuk kapatmayın 😄! Bir soru ilginizi gösterir: maaş, çalışma saatleri, eğitim…", en: "Don't hang up so fast 😄! A question shows you're interested: pay, hours, training…" } },
             { fr: "Oui : est-ce qu'il y a une formation au début ?", tr: "Evet: başlangıçta bir eğitim var mı?", en: "Yes: is there any training at the start?", ok: true, go: "g" }
           ] },
      g: { say: [["M", "C'est payé au SMIC, environ 14 heures par week-end, et on vous forme le premier jour. Vous pourriez passer au magasin jeudi à 15 h pour rencontrer l'équipe ?"]],
           choices: [
             { fr: "Oui, avec plaisir ! Jeudi à 5 h ? C'est un peu tôt !", tr: "Evet, memnuniyetle! Perşembe saat 5 mi? Biraz erken!", en: "Yes, with pleasure! Thursday at 5 a.m.? That's a bit early!", ok: false,
               fb: { fr: "Pas de panique, en France on compte jusqu'à 24 h : 15 h = 3 heures de l'après-midi 🕒.", tr: "Panik yok, Fransa'da saat 24'e kadar sayılır: 15 h = öğleden sonra 3 🕒.", en: "Don't panic, in France the clock goes up to 24: 15 h = 3 in the afternoon 🕒." } },
             { fr: "Oui, avec plaisir ! Jeudi à 15 h, c'est noté.", tr: "Evet, memnuniyetle! Perşembe saat 15, not ettim.", en: "Yes, with pleasure! Thursday at 3 pm, noted.", ok: true, go: "h" },
             { fr: "Oui, avec plaisir ! Je suis passée jeudi, à 15 h.", tr: "Evet, memnuniyetle! Perşembe saat 15'te uğradım.", en: "Yes, with pleasure! I dropped by on Thursday, at 3 p.m.", ok: false,
               fb: { fr: "C'est le passé composé : pour un rendez-vous, utilisez le futur : « je passerai jeudi à 15 h ».", tr: "Bu passé composé: bir randevu için gelecek zaman kullanın: « je passerai jeudi à 15 h ».", en: "That's the passé composé: for an appointment use the future: « je passerai jeudi à 15 h »." } }
           ] },
      h: { say: [["M", "Parfait. Pensez à apporter votre CV et une pièce d'identité. Vous avez bien mon numéro ?"]],
           choices: [
             { fr: "Oui, il s'affiche sur mon téléphone. Merci, bonne fin de journée !", tr: "Evet, telefonumda görünüyor. Teşekkürler, iyi akşamüstleri!", en: "Yes, it's showing on my phone. Thanks, have a nice afternoon!", ok: true, go: "fin" },
             { fr: "Oui, il s'affiche sur mon téléphone. Merci, bonne nuit !", tr: "Evet, telefonumda görünüyor. Teşekkürler, iyi geceler!", en: "Yes, it's showing on my phone. Thanks, good night!", ok: false,
               fb: { fr: "Il est 14 h, il va encore travailler 😄 ! Dites « bonne fin de journée » ou « bon après-midi ».", tr: "Saat 14, daha çalışacak 😄! « Bonne fin de journée » ya da « bon après-midi » deyin.", en: "It's 2 pm, he's still got work to do 😄! Say « bonne fin de journée » or « bon après-midi »." } },
             { fr: "Oui, je l'ai. Et je vais l'apporter mon CV, merci !", tr: "Evet, bende var. Onu CV'mi getireceğim, teşekkürler!", en: "Yes, I have it. And I'll bring it my CV, thanks!", ok: false,
               fb: { fr: "Un pronom en trop 😉 : « je vais apporter mon CV » ou « je vais l'apporter ». Et répondez aussi pour le numéro !", tr: "Fazladan bir zamir var 😉: « je vais apporter mon CV » ya da « je vais l'apporter ». Numara sorusuna da cevap verin!", en: "One pronoun too many 😉: « je vais apporter mon CV » or « je vais l'apporter ». And answer about the number too!" } }
           ] },
      fin: { end: "win", say: [["M", "Très bien. À jeudi, alors ! Au revoir, madame."]],
             scene: { fr: "Vous raccrochez, le cœur qui bat. Un entretien au téléphone en français, c'est difficile… et vous l'avez réussi ! 📞🎉", tr: "Kalbiniz çarparak telefonu kapatıyorsunuz. Fransızca telefon görüşmesi zordur… ve siz başardınız! 📞🎉", en: "You hang up, heart pounding. A phone interview in French is hard… and you nailed it! 📞🎉" } }
    } }
);
