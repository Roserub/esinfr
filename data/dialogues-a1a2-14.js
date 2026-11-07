/* More real-life dialogues (A2): health, sport and physio, played line by line with French audio.
   Lines: "A|français|Türkçe|English" or "B|…". In role-play, the learner says the "me" side. */
(function () {
  const L = s => s.trim().split("\n").map(l => { const [who, fr, tr, en] = l.split("|").map(x => x.trim()); return { who, fr, tr, en }; });
  const D = (id, level, fr, tr, en, roles, me, lines) => ({ id, level, t: { fr, tr, en }, roles, me, lines: L(lines) });

  window.DIALOGUES = window.DIALOGUES || [];
  window.DIALOGUES.push(
    D("d14-sos-medecins", "A2", "Appeler SOS Médecins pour un enfant fiévreux", "Ateşli bir çocuk için SOS Médecins'i aramak", "Calling SOS Médecins for a child with a fever", { A: "Standard SOS Médecins", B: "Claire" }, "B", `
A|SOS Médecins, bonsoir. Je vous écoute.|SOS Médecins, iyi akşamlar. Sizi dinliyorum.|SOS Médecins, good evening. I'm listening.
B|Bonsoir madame. J'appelle pour mon fils, Hugo. Il a quatre ans et il a beaucoup de fièvre.|İyi akşamlar hanımefendi. Oğlum Hugo için arıyorum. Dört yaşında ve ateşi çok yüksek.|Good evening. I'm calling about my son, Hugo. He's four and he has a high fever.
A|D'accord. Depuis quand a-t-il de la fièvre ?|Tamam. Ne zamandan beri ateşi var?|OK. How long has he had a fever?
B|Depuis hier soir. Tout à l'heure, il avait 39,5.|Dün akşamdan beri. Az önce ateşi 39,5'ti.|Since last night. Earlier it was 39.5.
A|Vous lui avez donné un médicament ?|Ona bir ilaç verdiniz mi?|Have you given him any medicine?
B|Oui, du paracétamol en sirop, il y a deux heures, comme sur la notice. Mais la fièvre est revenue.|Evet, iki saat önce prospektüsteki gibi parasetamol şurubu verdim. Ama ateş geri geldi.|Yes, paracetamol syrup two hours ago, as it says on the leaflet. But the fever has come back.
A|Est-ce qu'il boit bien ? Est-ce qu'il respire normalement ?|İyi su içiyor mu? Normal nefes alıyor mu?|Is he drinking well? Is he breathing normally?
B|Il boit un peu d'eau, oui. Il respire normalement, mais il est très fatigué et il a mal à la gorge.|Evet, biraz su içiyor. Normal nefes alıyor ama çok yorgun ve boğazı ağrıyor.|He's drinking a little water, yes. He's breathing normally, but he's very tired and he has a sore throat.
A|Il a des boutons sur la peau ? Il peut bouger la tête normalement ?|Cildinde döküntü var mı? Başını normal hareket ettirebiliyor mu?|Does he have any spots on his skin? Can he move his head normally?
B|Non, pas de boutons. Et oui, il tourne la tête sans problème.|Hayır, döküntü yok. Evet, başını rahatça çeviriyor.|No, no spots. And yes, he turns his head with no problem.
A|Bien. Un médecin peut passer chez vous dans deux heures environ. Ou vous pouvez venir au centre de consultation tout de suite.|Güzel. Bir doktor yaklaşık iki saat içinde evinize gelebilir. Ya da hemen muayene merkezine gelebilirsiniz.|Good. A doctor can come to your home in about two hours. Or you can come to the consultation centre right away.
B|Je n'ai pas de voiture ce soir. Je préfère attendre le médecin à la maison.|Bu akşam arabam yok. Doktoru evde beklemeyi tercih ederim.|I don't have a car tonight. I'd rather wait for the doctor at home.
A|Très bien. Donnez-moi votre adresse et un numéro de téléphone, s'il vous plaît.|Çok iyi. Adresinizi ve bir telefon numarası verir misiniz lütfen?|Very well. Please give me your address and a phone number.
B|C'est 8, rue des Tilleuls, troisième étage, porte gauche. Mon numéro, c'est le 06 00 00 00 27.|Rue des Tilleuls 8 numara, üçüncü kat, soldaki kapı. Numaram 06 00 00 00 27.|It's 8 rue des Tilleuls, third floor, door on the left. My number is 06 00 00 00 27.
A|C'est noté. En attendant, enlevez-lui les vêtements trop chauds et donnez-lui à boire souvent.|Not aldım. Beklerken üzerindeki kalın kıyafetleri çıkarın ve sık sık su verin.|Noted. In the meantime, take off any clothes that are too warm and give him something to drink often.
B|D'accord. Et si ça ne va pas mieux ?|Tamam. Peki düzelmezse?|OK. And if he doesn't get better?
A|S'il a du mal à respirer, s'il ne se réveille pas bien ou s'il a des taches violettes sur la peau, appelez le 15 tout de suite.|Nefes almakta zorlanırsa, zor uyanırsa ya da cildinde mor lekeler çıkarsa hemen 15'i arayın.|If he has trouble breathing, if he doesn't wake up properly or if he has purple spots on his skin, call 15 straight away.
B|Compris. Merci beaucoup, madame. Ça me rassure.|Anladım. Çok teşekkür ederim hanımefendi. İçim rahatladı.|Understood. Thank you very much. That reassures me.`),

    D("d14-doigt-handball", "A2", "Après l'entraînement : un doigt retourné", "Antrenmandan sonra: burkulan parmak", "After training: a jammed finger", { A: "Karim (entraîneur)", B: "Mme Petit" }, "B", `
A|Bonsoir madame Petit ! Je voulais vous parler de Léa avant de partir.|İyi akşamlar Petit Hanım! Gitmeden önce sizinle Léa hakkında konuşmak istedim.|Good evening, Mrs Petit! I wanted to talk to you about Léa before you leave.
B|Bonsoir Karim. Qu'est-ce qui s'est passé ? Elle a l'air un peu triste.|İyi akşamlar Karim. Ne oldu? Biraz üzgün görünüyor.|Good evening, Karim. What happened? She looks a bit sad.
A|Rien de grave, ne vous inquiétez pas. Pendant un exercice, elle a mal attrapé le ballon et elle s'est retourné le doigt.|Ciddi bir şey yok, merak etmeyin. Bir alıştırma sırasında topu kötü tuttu ve parmağı burkuldu.|Nothing serious, don't worry. During an exercise, she caught the ball badly and jammed her finger.
B|Oh, la pauvre ! Quel doigt ?|Ah, zavallıcık! Hangi parmak?|Oh, poor thing! Which finger?
A|L'index de la main droite. Il est un peu gonflé. Elle a pleuré, mais après, elle a regardé la fin de l'entraînement.|Sağ elin işaret parmağı. Biraz şişti. Ağladı ama sonra antrenmanın sonunu izledi.|The index finger of her right hand. It's a bit swollen. She cried, but afterwards she watched the end of training.
B|Vous avez fait quelque chose ?|Bir şey yaptınız mı?|Did you do anything?
A|Oui, j'ai mis de la glace dans un torchon pendant quinze minutes. Jamais directement sur la peau.|Evet, on beş dakika bir beze sarılı buz koydum. Asla doğrudan cilde değil.|Yes, I put some ice wrapped in a cloth on it for fifteen minutes. Never directly on the skin.
B|Merci. Et ce soir, à la maison, je fais quoi ?|Teşekkürler. Peki bu akşam evde ne yapayım?|Thank you. And tonight, at home, what should I do?
A|Vous pouvez remettre de la glace deux ou trois fois. Et elle doit garder la main un peu en hauteur, sur un coussin par exemple.|İki üç kez daha buz koyabilirsiniz. Elini de biraz yukarıda tutmalı, mesela bir yastığın üstünde.|You can put ice on it again two or three times. And she should keep her hand a little raised, on a cushion for example.
B|Et elle doit voir un médecin ?|Doktora görünmesi gerekiyor mu?|And does she need to see a doctor?
A|Si demain le doigt est toujours très gonflé, ou si elle ne peut pas le plier, oui. Il faut peut-être faire une radio.|Yarın parmak hâlâ çok şişse ya da bükemezse, evet. Belki röntgen çekmek gerekir.|If her finger is still very swollen tomorrow, or if she can't bend it, yes. She might need an X-ray.
B|D'accord. Elle a un match samedi. Elle va être déçue si elle ne joue pas…|Tamam. Cumartesi maçı var. Oynamazsa hayal kırıklığına uğrayacak…|OK. She has a match on Saturday. She'll be disappointed if she doesn't play…
A|Je comprends. Mais d'abord, la santé ! Si elle a encore mal, elle viendra avec l'équipe, mais elle ne jouera pas.|Anlıyorum. Ama önce sağlık! Hâlâ ağrısı olursa takımla gelir ama oynamaz.|I understand. But health comes first! If it still hurts, she'll come with the team, but she won't play.
B|Vous avez raison. Je vous envoie un message demain pour vous donner des nouvelles.|Haklısınız. Yarın size haber vermek için bir mesaj atarım.|You're right. I'll send you a message tomorrow to let you know how she is.
A|Parfait. Et dites-lui qu'elle a été très courageuse !|Mükemmel. Ona da çok cesur olduğunu söyleyin!|Perfect. And tell her she was very brave!
B|Je lui dirai. Merci, Karim. Bonne soirée !|Söylerim. Teşekkürler Karim. İyi akşamlar!|I'll tell her. Thanks, Karim. Have a nice evening!`),

    D("d14-epaule-kine", "A2", "Chez le kiné : une douleur à l'épaule", "Fizyoterapistte: omuz ağrısı", "At the physio's: shoulder pain", { A: "Kinésithérapeute", B: "M. Garnier" }, "B", `
A|Bonjour monsieur Garnier. Vous avez l'ordonnance de votre médecin ?|Merhaba Garnier Bey. Doktorunuzun reçetesi yanınızda mı?|Hello, Mr Garnier. Do you have your doctor's prescription?
B|Oui, la voilà. Le médecin a prescrit dix séances.|Evet, işte burada. Doktor on seans yazdı.|Yes, here it is. The doctor prescribed ten sessions.
A|Merci. Alors, racontez-moi. Où avez-vous mal exactement ?|Teşekkürler. Anlatın bakalım. Tam olarak neresi ağrıyor?|Thank you. So, tell me. Where exactly does it hurt?
B|Ici, sur le côté de l'épaule droite. Surtout quand je lève le bras.|Burası, sağ omzun yan tarafı. Özellikle kolumu kaldırdığımda.|Here, on the side of my right shoulder. Especially when I raise my arm.
A|Depuis combien de temps ?|Ne zamandır?|For how long?
B|Depuis trois semaines. J'ai repeint le plafond de ma cuisine, et le lendemain, j'avais très mal.|Üç haftadır. Mutfağımın tavanını boyadım ve ertesi gün çok ağrım vardı.|For three weeks. I repainted my kitchen ceiling, and the next day it really hurt.
A|Je vois. Vous avez mal la nuit aussi ?|Anlıyorum. Gece de ağrınız oluyor mu?|I see. Does it hurt at night too?
B|Oui, quand je dors sur le côté droit. Alors je dors sur le dos, mais je dors mal.|Evet, sağ tarafıma yatınca. O yüzden sırtüstü yatıyorum ama kötü uyuyorum.|Yes, when I sleep on my right side. So I sleep on my back, but I don't sleep well.
A|D'accord. Levez doucement le bras devant vous… Stop ! Ça fait mal à partir d'ici ?|Tamam. Kolunuzu yavaşça önünüze kaldırın… Dur! Buradan itibaren mi ağrıyor?|OK. Slowly raise your arm in front of you… Stop! Does it start hurting from here?
B|Oui, juste là. Ça tire et ça pique un peu.|Evet, tam orası. Çekiyor ve biraz batıyor.|Yes, right there. It pulls and stings a bit.
A|C'est une tendinite de l'épaule, c'est assez fréquent. On va travailler avec des exercices doux et un élastique.|Bu bir omuz tendiniti, oldukça yaygın. Yumuşak egzersizler ve bir lastik bantla çalışacağız.|It's shoulder tendinitis, it's quite common. We'll work with gentle exercises and a resistance band.
B|Je dois arrêter le tennis ? Je joue tous les jeudis avec mon voisin.|Tenisi bırakmam gerekiyor mu? Her perşembe komşumla oynuyorum.|Do I have to stop tennis? I play every Thursday with my neighbour.
A|Pour le moment, oui. Pas de tennis, et évitez de lever le bras au-dessus de la tête pendant deux ou trois semaines. Après, on verra.|Şimdilik evet. İki üç hafta tenis yok, kolunuzu da başınızın üstüne kaldırmaktan kaçının. Sonra bakarız.|For now, yes. No tennis, and avoid raising your arm above your head for two or three weeks. After that, we'll see.
B|Et à la maison, je peux faire quelque chose ?|Evde bir şey yapabilir miyim?|And at home, can I do anything?
A|Oui. Je vais vous montrer deux exercices. Faites-les tous les jours, sans forcer. Si la douleur augmente, vous arrêtez.|Evet. Size iki egzersiz göstereceğim. Her gün zorlamadan yapın. Ağrı artarsa bırakın.|Yes. I'm going to show you two exercises. Do them every day, without forcing. If the pain gets worse, you stop.
B|Entendu. Et pour le plafond, je demanderai à mon fils de finir !|Anlaşıldı. Tavanı da bitirmesini oğlumdan isterim!|Understood. And as for the ceiling, I'll ask my son to finish it!
A|Excellente idée ! On se revoit jeudi pour la deuxième séance.|Harika fikir! İkinci seans için perşembe görüşürüz.|Excellent idea! See you on Thursday for the second session.`),

    D("d14-plan-entrainement", "A2", "Discuter d'un plan d'entraînement avec un étudiant en STAPS", "STAPS öğrencisiyle antrenman planı konuşmak", "Discussing a training plan with a sports science student", { A: "Théo", B: "Esin" }, "B", `
A|Salut Esin ! Tu as cinq minutes ? Je voudrais ton avis sur un programme.|Selam Esin! Beş dakikan var mı? Bir program hakkında fikrini almak istiyorum.|Hi, Esin! Have you got five minutes? I'd like your opinion on a programme.
B|Bien sûr, Théo. C'est pour tes cours de STAPS ?|Tabii Théo. STAPS dersin için mi?|Of course, Théo. Is it for your sports science course?
A|Oui, pour mon stage ici. Je prépare un plan pour une adhérente, Nathalie. Elle a cinquante ans et elle veut reprendre le sport.|Evet, buradaki stajım için. Bir üye için plan hazırlıyorum, Nathalie. Elli yaşında ve spora yeniden başlamak istiyor.|Yes, for my placement here. I'm preparing a plan for a member, Nathalie. She's fifty and she wants to get back into sport.
B|Super. Tu as prévu combien de séances par semaine ?|Süper. Haftada kaç seans planladın?|Great. How many sessions a week have you planned?
A|Cinq séances d'une heure. Du vélo, du renforcement musculaire et du cardio.|Birer saatlik beş seans. Bisiklet, kas güçlendirme ve kardiyo.|Five one-hour sessions. Cycling, strength training and cardio.
B|Cinq ? Hmm, c'est beaucoup pour commencer. Elle n'a pas fait de sport depuis longtemps ?|Beş mi? Hmm, başlangıç için çok fazla. Uzun zamandır spor yapmıyor mu?|Five? Hmm, that's a lot to start with. Hasn't she done any sport for a long time?
A|Non, depuis dix ans environ. Mais elle est très motivée !|Hayır, yaklaşık on yıldır. Ama çok motive!|No, for about ten years. But she's very motivated!
B|C'est bien, mais la motivation ne suffit pas. Si elle va trop vite, elle risque de se blesser, ou d'abandonner après deux semaines.|Bu iyi ama motivasyon yetmez. Çok hızlı giderse sakatlanabilir ya da iki hafta sonra bırakabilir.|That's good, but motivation isn't enough. If she goes too fast, she could get injured, or give up after two weeks.
A|Alors, tu proposes quoi ?|Peki sen ne önerirsin?|So what do you suggest?
B|Moi, je commencerais avec trois séances de quarante-cinq minutes. Avec un jour de repos entre les séances.|Ben haftada üç seans, kırk beşer dakikayla başlardım. Seanslar arasında birer gün dinlenmeyle.|Personally, I'd start with three forty-five-minute sessions. With a rest day between sessions.
A|Le repos, c'est vraiment important ?|Dinlenme gerçekten önemli mi?|Is rest really that important?
B|Oui ! Le muscle devient plus fort pendant le repos, pas seulement pendant l'effort. Le sommeil aussi compte beaucoup.|Evet! Kas sadece efor sırasında değil, dinlenirken de güçlenir. Uyku da çok önemli.|Yes! Muscles get stronger during rest, not only during exercise. Sleep matters a lot too.
A|D'accord. Et après, j'augmente quand ?|Tamam. Sonra ne zaman artırayım?|OK. And then, when do I increase?
B|Petit à petit. Par exemple, après trois ou quatre semaines, tu ajoutes une séance ou quelques minutes. Et tu lui demandes toujours comment elle se sent.|Yavaş yavaş. Mesela üç dört hafta sonra bir seans ya da birkaç dakika eklersin. Ve ona her zaman nasıl hissettiğini sorarsın.|Little by little. For example, after three or four weeks, you add a session or a few minutes. And you always ask her how she feels.
A|Merci, Esin. Tu parles comme ma prof de physiologie !|Teşekkürler Esin. Fizyoloji hocam gibi konuşuyorsun!|Thanks, Esin. You sound like my physiology teacher!
B|Ha ha ! J'ai travaillé avec une équipe de handball en Turquie. J'ai vu beaucoup de blessures à cause de programmes trop durs.|Ha ha! Türkiye'de bir hentbol takımıyla çalıştım. Çok ağır programlar yüzünden birçok sakatlık gördüm.|Ha ha! I worked with a handball team in Turkey. I saw a lot of injuries because of programmes that were too hard.
A|Et toi, tu vas faire STAPS aussi, non ?|Sen de STAPS okuyacaksın, değil mi?|And you're going to do STAPS too, aren't you?
B|Oui, j'espère ! Alors l'année prochaine, c'est toi qui m'aideras avec mes cours !|Evet, umarım! O zaman seneye derslerimde sen bana yardım edeceksin!|Yes, I hope so! So next year, you'll be the one helping me with my course!`),

    D("d14-repas-10km", "A2", "Que manger avant un 10 km ?", "10 km koşusundan önce ne yemeli?", "What to eat before a 10 km race?", { A: "Nadia", B: "Esin" }, "B", `
A|Esin, tu cours le samedi, toi ? Je fais mon premier 10 km dimanche, et je stresse un peu.|Esin, sen cumartesi günleri koşuyorsun, değil mi? Pazar günü ilk 10 km koşumu yapıyorum ve biraz stresliyim.|Esin, you run on Saturdays, don't you? I'm doing my first 10 km on Sunday, and I'm a bit stressed.
B|Oui, au parc, tous les samedis matin ! Bravo pour ton 10 km. Qu'est-ce qui te stresse ?|Evet, her cumartesi sabahı parkta! 10 km için tebrikler. Seni ne strese sokuyor?|Yes, in the park, every Saturday morning! Well done for your 10 km. What's stressing you?
A|Surtout la nourriture. Une amie m'a dit de manger un énorme plat de pâtes samedi soir.|En çok yemek. Bir arkadaşım cumartesi akşamı kocaman bir tabak makarna yememi söyledi.|Mostly the food. A friend told me to eat a huge plate of pasta on Saturday night.
B|Des pâtes, c'est une bonne idée, mais pas besoin d'un énorme plat pour 10 km. Une assiette normale, ça suffit.|Makarna iyi bir fikir ama 10 km için kocaman bir tabağa gerek yok. Normal bir tabak yeter.|Pasta is a good idea, but you don't need a huge plate for 10 km. A normal plate is enough.
A|Ah bon ? Et avec quoi ?|Öyle mi? Peki yanında ne olsun?|Really? And with what?
B|Avec un peu de poulet ou de poisson, par exemple. Mais évite les plats très gras ou très épicés. Ton ventre doit être tranquille !|Mesela biraz tavuk ya da balıkla. Ama çok yağlı ya da çok baharatlı yemeklerden kaçın. Miden rahat olmalı!|With a little chicken or fish, for example. But avoid very fatty or very spicy dishes. Your stomach needs to be calm!
A|D'accord, pas de kebab samedi soir, alors.|Tamam, o zaman cumartesi akşamı döner yok.|OK, no kebab on Saturday night, then.
B|Ha ha, non ! Garde le kebab pour fêter ta course dimanche soir.|Ha ha, hayır! Dönerini pazar akşamı yarışını kutlamak için sakla.|Ha ha, no! Save the kebab to celebrate your race on Sunday night.
A|Et le matin ? La course est à neuf heures et demie.|Peki sabah? Koşu dokuz buçukta.|And in the morning? The race is at half past nine.
B|Prends ton petit-déjeuner deux ou trois heures avant. Du pain avec un peu de miel, une banane, un thé ou un café. Des choses simples.|Kahvaltını iki üç saat önce yap. Biraz ballı ekmek, bir muz, bir çay ya da kahve. Basit şeyler.|Have your breakfast two or three hours before. Some bread with a little honey, a banana, a tea or a coffee. Simple things.
A|J'ai vu des gels énergétiques au magasin de sport. Je les essaie ?|Spor mağazasında enerji jelleri gördüm. Deneyeyim mi?|I saw some energy gels at the sports shop. Shall I try them?
B|Pas le jour de la course ! Règle numéro un : rien de nouveau le jour J. Et pour 10 km, en général, on n'a pas besoin de manger pendant la course.|Yarış günü olmaz! Bir numaralı kural: büyük günde yeni hiçbir şey yok. Hem 10 km için genelde koşu sırasında bir şey yemeye gerek yoktur.|Not on race day! Rule number one: nothing new on the big day. And for 10 km, you don't usually need to eat during the race.
A|Et l'eau ? Je bois beaucoup le matin ?|Ya su? Sabah çok mu su içeyim?|And water? Should I drink a lot in the morning?
B|Bois normalement les jours avant, et un verre ou deux le matin. Pas un litre juste avant le départ, sinon tu vas chercher des toilettes !|Önceki günlerde normal iç, sabah da bir iki bardak. Başlangıçtan hemen önce bir litre içme, yoksa tuvalet arayacaksın!|Drink normally the days before, and a glass or two in the morning. Not a litre just before the start, or you'll be looking for a toilet!
A|Ha ha, c'est noté ! Et après la course ?|Ha ha, not ettim! Peki koşudan sonra?|Ha ha, noted! And after the race?
B|Bois de l'eau, mange un fruit, et marche un peu. Et surtout, profite ! Ton premier 10 km, c'est un grand moment.|Su iç, bir meyve ye ve biraz yürü. Ve en önemlisi, tadını çıkar! İlk 10 km'n büyük bir an.|Drink some water, eat a piece of fruit and walk a bit. And above all, enjoy it! Your first 10 km is a big moment.
A|Merci, Esin. Je me sens déjà plus calme !|Teşekkürler Esin. Şimdiden daha sakin hissediyorum!|Thanks, Esin. I already feel calmer!`),

    D("d14-cou-bureau", "A2", "Des étirements pour le cou au bureau", "Ofiste boyun için esneme hareketleri", "Neck stretches at the office", { A: "Sophie", B: "Esin" }, "B", `
A|Aïe, aïe, aïe… Mon cou me fait mal depuis ce matin.|Ay, ay, ay… Sabahtan beri boynum ağrıyor.|Ouch, ouch, ouch… My neck has been hurting since this morning.
B|Qu'est-ce qui t'arrive, Sophie ? Tu as fait du sport hier ?|Ne oldu Sophie? Dün spor mu yaptın?|What's wrong, Sophie? Did you do some sport yesterday?
A|Non, justement ! J'ai passé toute la journée devant l'ordinateur pour faire les plannings. Six heures sans pause.|Hayır, işte! Bütün günü programları hazırlamak için bilgisayar başında geçirdim. Altı saat aralıksız.|No, that's the thing! I spent the whole day at the computer doing the schedules. Six hours without a break.
B|Ah, je comprends. Montre-moi ton bureau… Ton écran est trop bas. Tu baisses la tête tout le temps.|Ah, anlıyorum. Masanı göster bana… Ekranın çok alçakta. Sürekli başını eğiyorsun.|Ah, I understand. Show me your desk… Your screen is too low. You're looking down all the time.
A|C'est vrai. Qu'est-ce que je peux faire ?|Doğru. Ne yapabilirim?|That's true. What can I do?
B|D'abord, mets l'écran à la hauteur des yeux. Tu peux poser deux ou trois gros classeurs dessous.|Önce ekranı göz hizasına getir. Altına iki üç kalın klasör koyabilirsin.|First, put the screen at eye level. You can put two or three big binders under it.
A|D'accord, je fais ça tout de suite. Et pour la douleur ?|Tamam, hemen yapıyorum. Peki ağrı için?|OK, I'll do that right away. And for the pain?
B|Je te montre trois étirements simples. Assieds-toi bien droite, les pieds par terre.|Sana üç basit esneme hareketi göstereyim. Dik otur, ayakların yerde.|I'll show you three simple stretches. Sit up nice and straight, feet on the floor.
A|Voilà. Comme ça ?|İşte. Böyle mi?|There. Like this?
B|Parfait. Penche doucement la tête à droite, l'oreille vers l'épaule. Reste vingt secondes, et respire calmement.|Mükemmel. Başını yavaşça sağa eğ, kulağın omzuna doğru. Yirmi saniye kal ve sakin nefes al.|Perfect. Gently tilt your head to the right, ear towards your shoulder. Stay there for twenty seconds, and breathe calmly.
A|Oh, ça tire un peu…|Ah, biraz çekiyor…|Oh, it pulls a bit…
B|Ça peut tirer, mais ça ne doit pas faire mal. Maintenant, la même chose à gauche.|Çekebilir ama acıtmamalı. Şimdi aynısını sola yap.|It can pull, but it mustn't hurt. Now do the same on the left.
A|Et le troisième exercice ?|Peki üçüncü egzersiz?|And the third exercise?
B|Tu fais des cercles avec les épaules, vers l'arrière, dix fois. Lentement.|Omuzlarınla geriye doğru on kez daire çiziyorsun. Yavaşça.|You make circles with your shoulders, backwards, ten times. Slowly.
A|Oh là là, ça fait du bien ! Tu es une vraie kiné, toi.|Vay canına, çok iyi geldi! Sen gerçek bir fizyoterapistsin.|Oh wow, that feels good! You're a real physio.
B|En Turquie, oui ! Ici, pas encore… Mais le plus important, c'est de faire une petite pause toutes les heures. Tu te lèves et tu marches deux minutes.|Türkiye'de evet! Burada henüz değil… Ama en önemlisi her saat kısa bir ara vermek. Kalkıp iki dakika yürüyorsun.|In Turkey, yes! Here, not yet… But the most important thing is to take a short break every hour. You get up and walk for two minutes.
A|Promis. Et si j'ai encore mal dans quelques jours ?|Söz. Peki birkaç gün sonra hâlâ ağrım olursa?|Promise. And what if it still hurts in a few days?
B|Alors va voir ton médecin, surtout si la douleur descend dans le bras. Mais je pense qu'avec les pauses, ça va aller mieux.|O zaman doktoruna git, özellikle ağrı koluna yayılırsa. Ama bence aralarla daha iyi olacak.|Then go and see your doctor, especially if the pain goes down into your arm. But I think that with the breaks, it'll get better.
A|Merci, Esin. Pour te remercier, c'est moi qui offre le café !|Teşekkürler Esin. Teşekkür olarak kahveler benden!|Thanks, Esin. To thank you, the coffee's on me!`)
  );
})();
