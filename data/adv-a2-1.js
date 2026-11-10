/* Aventures A2 — 1 to 5: appartement, fuite d'eau, carte avalée, préfecture, salle de sport */
(window.ADVENTURES = window.ADVENTURES || []).push(

  /* 1. Visite d'un appartement */
  { id: "av-appart", level: "A2", emoji: "🔑",
    t: { fr: "Visite d'un appartement", tr: "Bir daire gezmek", en: "Viewing a flat" },
    goal: { fr: "Visitez un appartement et posez vos questions sur le loyer, les charges, la caution et le dossier.", tr: "Bir daireyi gezin; kira, aidat, depozito ve gerekli evraklar hakkında sorularınızı sorun.", en: "View a flat and ask about the rent, the service charges, the deposit and the paperwork." },
    start: "a",
    nodes: {
      a: { scene: { fr: "18 h, devant un immeuble. Un monsieur avec des clés vous attend.", tr: "Saat 18.00, bir apartmanın önündesiniz. Elinde anahtarlarla bir bey sizi bekliyor.", en: "6 pm, in front of a building. A man holding keys is waiting for you." },
           say: [["M", "Bonsoir madame ! Vous êtes venue pour la visite du deux-pièces ?"]],
           choices: [
             { fr: "Bonsoir monsieur, oui, c'est moi. Nous nous sommes parlé hier.", tr: "İyi akşamlar beyefendi, evet, benim. Dün konuşmuştuk.", en: "Good evening, sir, yes, it's me. We spoke yesterday.", ok: true, go: "b" },
             { fr: "Bonsoir monsieur, oui, j'ai venu pour la visite. On s'est appelés hier.", tr: "İyi akşamlar beyefendi, evet, ziyaret için geldim. Dün telefonlaşmıştık.", en: "Good evening, sir, yes, I have come for the viewing. We phoned yesterday.", ok: false,
               fb: { fr: "Presque ! « Venir » se conjugue avec être : « je suis venue » (avec un e, car vous êtes une femme).", tr: "Az kaldı! « Venir » fiili être ile çekimlenir: « je suis venue » (kadın olduğunuz için sonunda e var).", en: "Almost! « Venir » takes être: « je suis venue » (with an e, because you're a woman)." } },
             { fr: "Salut ! Ouais, c'est moi pour l'appart.", tr: "Selam! He, daire için ben geldim.", en: "Hi! Yeah, it's me for the flat.", ok: false,
               fb: { fr: "Un peu trop décontracté avec un futur propriétaire 😄. Gardez « bonsoir monsieur » et « oui » : ça fait sérieux.", tr: "Müstakbel ev sahibine karşı biraz fazla rahat 😄. « Bonsoir monsieur » ve « oui » deyin: daha ciddi durur.", en: "A bit too casual with a future landlord 😄. Stick with « bonsoir monsieur » and « oui »: it sounds serious." } }
           ] },
      b: { scene: { fr: "Vous montez au 2e étage. Le salon est lumineux.", tr: "2. kata çıkıyorsunuz. Salon aydınlık.", en: "You go up to the 2nd floor. The living room is bright." },
           say: [["M", "Voilà le salon : 20 mètres carrés, le soleil le matin. Vous cherchez un logement depuis longtemps ?"]],
           choices: [
             { fr: "Je cherche depuis trois semaines. Ce n'est pas facile !", tr: "Üç haftadır arıyorum. Hiç kolay değil!", en: "I've been looking for three weeks. It's not easy!", ok: true, go: "c" },
             { fr: "Je cherche il y a trois semaines. Ce n'est pas facile !", tr: "Üç hafta önce arıyorum. Kolay değil!", en: "I'm looking three weeks ago. It's not easy!", ok: false,
               fb: { fr: "« Il y a » marque un moment passé : « j'ai commencé il y a trois semaines ». Pour une action qui continue : « je cherche depuis trois semaines ».", tr: "« Il y a » geçmişte bir anı gösterir: « üç hafta önce başladım ». Devam eden bir iş için: « je cherche depuis trois semaines ».", en: "« Il y a » points to a moment in the past: « I started three weeks ago ». For something still going on: « je cherche depuis trois semaines »." } },
             { fr: "J'ai cherché depuis trois semaines. Ce n'est pas facile !", tr: "Üç haftadır aradım. Kolay değil!", en: "I have looked for three weeks. It's not easy!", ok: false,
               fb: { fr: "Piège de l'anglais « I have been looking » ! En français, avec « depuis », on garde le présent : « je cherche depuis… ».", tr: "İngilizcedeki « I have been looking » tuzağı! Fransızcada « depuis » ile şimdiki zaman kullanılır: « je cherche depuis… ».", en: "The « I have been looking » trap! In French, with « depuis » you keep the present: « je cherche depuis… »." } }
           ] },
      c: { say: [["M", "Je comprends, ce n'est pas simple en ce moment. Vous avez des questions ?"]],
           choices: [
             { fr: "Oui : le loyer est de combien par mois ?", tr: "Evet: aylık kira ne kadar?", en: "Yes: how much is the rent per month?", ok: true, go: "d" },
             { fr: "D'abord, est-ce que je pourrais voir la cuisine ?", tr: "Önce mutfağı görebilir miyim?", en: "First, could I see the kitchen?", ok: true, go: "cuisine" },
             { fr: "Oui : combien vous êtes, pour le loyer, par mois ?", tr: "Evet: kira için, aylık, kaç kişisiniz?", en: "Yes: how many are you, for the rent, per month?", ok: false,
               fb: { fr: "« Combien vous êtes ? » = vous êtes combien de personnes ? 😄 Pour l'argent : « Le loyer, c'est combien ? »", tr: "« Combien vous êtes ? » = kaç kişisiniz? 😄 Para için: « Le loyer, c'est combien ? »", en: "« Combien vous êtes ? » = how many people are you? 😄 For money: « Le loyer, c'est combien ? »" } }
           ] },
      cuisine: { scene: { fr: "La cuisine est petite, avec une fenêtre sur la cour.", tr: "Mutfak küçük, avluya bakan bir penceresi var.", en: "The kitchen is small, with a window onto the courtyard." },
           say: [["M", "La cuisine est équipée : plaques, four et frigo. La machine à laver est dans la salle de bains. Elle vous plaît ?"]],
           choices: [
             { fr: "Oui, elle est petite mais très claire. Et le loyer, c'est combien ?", tr: "Evet, küçük ama çok aydınlık. Peki kira ne kadar?", en: "Yes, it's small but very bright. And how much is the rent?", ok: true, go: "d" },
             { fr: "Oui, il est petit mais très joli. Et le loyer, c'est combien ?", tr: "Evet, küçük ama çok güzel. Kira ne kadar?", en: "Yes, it is small but very pretty. And how much is the rent?", ok: false,
               fb: { fr: "« La cuisine » est féminin, donc « elle est très jolie ». En turc, pas de genre… en français, il faut choisir 😉.", tr: "« La cuisine » dişildir, yani « elle est très jolie ». Türkçede cinsiyet yok… Fransızcada seçmek gerekiyor 😉.", en: "« La cuisine » is feminine, so « elle est très jolie ». English has no gender here… French makes you choose 😉." } },
             { fr: "Je ne sais pas cuisiner, je mange des pâtes tous les jours.", tr: "Yemek yapmayı bilmiyorum, her gün makarna yiyorum.", en: "I can't cook, I eat pasta every day.", ok: false,
               fb: { fr: "Très honnête 🍝😄 ! Mais il parle de la pièce, pas de cuisiner. Dites par exemple : « Oui, elle est très claire. »", tr: "Çok dürüst 🍝😄! Ama o odadan bahsediyor, yemek yapmaktan değil. Örneğin: « Oui, elle est très claire. »", en: "Very honest 🍝😄! But he means the room, not cooking. Say for example: « Oui, elle est très claire. »" } }
           ] },
      d: { say: [["M", "Le loyer est de 780 € par mois, plus 60 € de charges."]],
           choices: [
             { fr: "D'accord. Qu'est-ce qui est compris dans les charges ?", tr: "Tamam. Aidata neler dahil?", en: "OK. What's included in the service charges?", ok: true, go: "e" },
             { fr: "D'accord. 780 € plus 60 €… donc 720 € par mois en tout ?", tr: "Tamam. 780 € artı 60 €… yani toplam ayda 720 € mü?", en: "OK. €780 plus €60… so €720 a month in total?", ok: false,
               fb: { fr: "Ce serait génial 😄, mais « plus » = on ajoute : 780 + 60 = 840 € par mois.", tr: "Harika olurdu 😄 ama « plus » = ekliyoruz: 780 + 60 = ayda 840 €.", en: "That would be great 😄, but « plus » means add: 780 + 60 = 840 € a month." } },
             { fr: "Les charges ? C'est pour charger mon téléphone ?", tr: "« Charges » mı? Telefonumu şarj etmek için mi?", en: "Charges? Is that for charging my phone?", ok: false,
               fb: { fr: "🔋😄 Non ! Les charges, ce sont les frais en plus du loyer : eau, chauffage, entretien de l'immeuble…", tr: "🔋😄 Hayır! « Charges » kiranın üstüne ödenen masraflardır: su, ısınma, binanın bakımı…", en: "🔋😄 No! « Les charges » are the costs on top of the rent: water, heating, building maintenance…" } }
           ] },
      e: { say: [["M", "L'eau froide, le chauffage et l'entretien de l'immeuble. L'électricité, c'est à part."], ["M", "Pour la caution, je demande un mois de loyer."]],
           choices: [
             { fr: "D'accord. Et vous me rendrez la caution quand je partirai ?", tr: "Tamam. Taşınırken depozitoyu bana geri verecek misiniz?", en: "OK. And will you give me the deposit back when I leave?", ok: true, go: "f" },
             { fr: "La caution ? Ne vous inquiétez pas, je suis très prudente !", tr: "« Caution » mı? Merak etmeyin, ben çok dikkatliyimdir!", en: "Caution? Don't worry, I'm very careful!", ok: false,
               fb: { fr: "Faux ami ! Ici, « la caution » = l'argent de garantie (deposit), pas la prudence 😄.", tr: "Yalancı eş anlamlı! Burada « la caution » = depozito, dikkat değil 😄.", en: "False friend! Here « la caution » = the deposit, not being cautious 😄." } },
             { fr: "D'accord. Et je vous la rendrai quand je partirai ?", tr: "Tamam. Ben taşınırken onu size geri vereceğim, değil mi?", en: "OK. And I'll give it back to you when I leave?", ok: false,
               fb: { fr: "Attention, c'est l'inverse : c'est lui qui rend la caution ! On dit « vous me la rendrez ».", tr: "Dikkat, tam tersi: depozitoyu geri veren o! « Vous me la rendrez » denir.", en: "Careful, it's the other way round: he gives the deposit back! Say « vous me la rendrez »." } }
           ] },
      f: { say: [["M", "Oui, si l'appartement est en bon état, je vous la rends dans un délai d'un mois. Et vous travaillez en ce moment ?"]],
           choices: [
             { fr: "Oui, à l'accueil d'une salle de sport. Je suis kiné de formation.", tr: "Evet, bir spor salonunun resepsiyonunda. Eğitimim fizyoterapist.", en: "Yes, at the front desk of a gym. I trained as a physio.", ok: true, go: "g" },
             { fr: "Oui, à l'accueil d'une salle de sport. Je suis une kinésithérapeute de formation.", tr: "Evet, bir spor salonunun resepsiyonunda. Ben eğitim olarak bir fizyoterapistim.", en: "Yes, at the front desk of a gym. I am a physiotherapist by training.", ok: false,
               fb: { fr: "Pour un métier, pas d'article : « je suis kinésithérapeute de formation », comme « je suis médecin ».", tr: "Meslek söylerken artikel kullanılmaz: « je suis kinésithérapeute de formation », tıpkı « je suis médecin » gibi.", en: "No article with a job: « je suis kinésithérapeute de formation », like « je suis médecin »." } },
             { fr: "Non, je ne travaille jamais. J'attends l'équivalence de mon diplôme.", tr: "Hayır, hiç çalışmıyorum. Diplomamın denkliğini bekliyorum.", en: "No, I never work. I'm waiting for my diploma to be recognised.", ok: false,
               fb: { fr: "Oups, on dirait que vous détestez le travail 😄 ! Et c'est faux : vous travaillez à l'accueil d'une salle de sport. Dites-le : « oui, je travaille à l'accueil… ».", tr: "Eyvah, işten nefret ediyormuşsunuz gibi oldu 😄! Üstelik doğru değil: bir spor salonunun resepsiyonunda çalışıyorsunuz. Bunu söyleyin: « oui, je travaille à l'accueil… ».", en: "Oops, it sounds like you hate working 😄! And it's not true: you work at a gym's front desk. Say so: « oui, je travaille à l'accueil… »." } }
           ] },
      g: { say: [["M", "D'accord. Alors il me faut un garant. Vous connaissez quelqu'un en France ?"]],
           choices: [
             { fr: "Je connais une amie qui pourrait être garante. Sinon, il y a Visale.", tr: "Kefil olabilecek bir arkadaşımı tanıyorum. Yoksa Visale var.", en: "I know a friend who could be a guarantor. Otherwise there's Visale.", ok: true, go: "h" },
             { fr: "Oui, je sais une amie qui peut être garante. Sinon, il y a Visale.", tr: "Evet, kefil olabilecek bir arkadaş biliyorum. Yoksa Visale var.", en: "Yes, I know a friend who can be a guarantor. Otherwise there's Visale.", ok: false,
               fb: { fr: "Pour une personne, c'est « connaître » : « je connais une amie ». « Savoir », c'est pour une info : « je sais nager ».", tr: "Bir kişi için « connaître » kullanılır: « je connais une amie ». « Savoir » bilgi içindir: « je sais nager ».", en: "For a person, use « connaître »: « je connais une amie ». « Savoir » is for facts and skills: « je sais nager »." } },
             { fr: "Un garant ? Je vous garantis que je suis très gentille !", tr: "Kefil mi? Size çok iyi biri olduğumu garanti ederim!", en: "A guarantor? I guarantee you I'm very nice!", ok: false,
               fb: { fr: "On vous croit 😄 ! Mais un garant, c'est une personne qui paie si vous ne pouvez pas payer le loyer.", tr: "Size inanıyoruz 😄! Ama « garant », siz kirayı ödeyemezseniz ödeyecek kişidir.", en: "We believe you 😄! But « un garant » is a person who pays if you can't pay the rent." } }
           ] },
      h: { say: [["M", "Très bien. Pour le dossier, il faut une pièce d'identité, un justificatif de revenus et les papiers du garant. Vous pouvez m'envoyer tout ça ?"]],
           choices: [
             { fr: "Oui, je vous enverrai le dossier complet par e-mail ce soir.", tr: "Evet, tüm dosyayı bu akşam size e-postayla göndereceğim.", en: "Yes, I'll email you the full file tonight.", ok: true, go: "i" },
             { fr: "Oui, je vous ai envoyé le dossier complet par e-mail demain.", tr: "Evet, eksiksiz dosyayı yarın e-postayla gönderdim.", en: "Yes, I sent you the complete file by email tomorrow.", ok: false,
               fb: { fr: "« Demain » + passé composé, c'est de la science-fiction 🚀😄. Pour le futur : « je vous enverrai le dossier demain ».", tr: "« Demain » + geçmiş zaman, bilim kurgu oldu 🚀😄. Gelecek için: « je vous enverrai le dossier demain ».", en: "« Tomorrow » + past tense is science fiction 🚀😄. For the future: « je vous enverrai le dossier demain »." } },
             { fr: "Je vous envoie ça quand j'ai le temps, tranquille.", tr: "Vaktim olunca gönderirim, rahat.", en: "I'll send it when I have time, no rush.", ok: false,
               fb: { fr: "Il a beaucoup de candidats ! Montrez que vous êtes sérieuse : « je vous l'enverrai ce soir ».", tr: "Çok fazla adayı var! Ciddi olduğunuzu gösterin: « je vous l'enverrai ce soir ».", en: "He has lots of applicants! Show you're serious: « je vous l'enverrai ce soir »." } }
           ] },
      i: { say: [["M", "Parfait. J'ai encore deux visites demain, mais votre profil m'intéresse."]],
           choices: [
             { fr: "Merci beaucoup pour la visite. J'espère avoir de vos nouvelles bientôt. Bonne soirée !", tr: "Gezdirdiğiniz için çok teşekkürler. Umarım yakında sizden haber alırım. İyi akşamlar!", en: "Thank you very much for the viewing. I hope to hear from you soon. Have a good evening!", ok: true, go: "fin" },
             { fr: "Merci ! L'appartement me plaît beaucoup. Est-ce que je pourrais vous appeler vendredi ?", tr: "Teşekkürler! Daireyi çok beğendim. Cuma günü sizi arayabilir miyim?", en: "Thank you! I really like the flat. Could I call you on Friday?", ok: true, go: "fin" },
             { fr: "Merci, bonne nuit !", tr: "Teşekkürler, iyi geceler!", en: "Thanks, good night!", ok: false,
               fb: { fr: "« Bonne nuit », c'est quand on va se coucher 😴. À 18 h, on dit « bonne soirée ».", tr: "« Bonne nuit » yatmaya giderken söylenir 😴. Saat 18.00'de « bonne soirée » denir.", en: "« Bonne nuit » is for when you're going to bed 😴. At 6 pm, say « bonne soirée »." } }
           ] },
      fin: { end: "win",
           say: [["M", "Merci à vous, madame. Je vous rappelle très vite. Bonne soirée !"]],
           scene: { fr: "Bravo ! Vous avez posé toutes les bonnes questions… et maintenant, « caution » ne vous fait plus peur 🔑🎉", tr: "Bravo! Tüm doğru soruları sordunuz… ve artık « caution » kelimesi sizi korkutmuyor 🔑🎉", en: "Well done! You asked all the right questions… and « caution » doesn't scare you any more 🔑🎉" } }
    } },

  /* 2. Une fuite d'eau */
  { id: "av-fuite", level: "A2", emoji: "💧",
    t: { fr: "Une fuite d'eau", tr: "Su sızıntısı", en: "A water leak" },
    goal: { fr: "Appelez votre propriétaire, expliquez ce qui s'est passé et organisez la visite d'un plombier.", tr: "Ev sahibinizi arayın, ne olduğunu anlatın ve bir tesisatçının gelmesini ayarlayın.", en: "Call your landlady, explain what happened and arrange a plumber's visit." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Dimanche matin. Dans la salle de bains, il y a de l'eau partout par terre ! Vous appelez votre propriétaire, Mme Roux.", tr: "Pazar sabahı. Banyoda yerler su içinde! Ev sahibiniz Mme Roux'yu arıyorsunuz.", en: "Sunday morning. There's water all over the bathroom floor! You call your landlady, Mme Roux." },
           say: [["F", "Allô, oui ?"]],
           choices: [
             { fr: "Allô, bonjour madame Roux. C'est votre locataire du 3e étage.", tr: "Alo, merhaba Roux Hanım. Üçüncü kattaki kiracınızım.", en: "Hello, Mrs Roux. It's your tenant on the 3rd floor.", ok: true, go: "b" },
             { fr: "Allô, c'est moi ! Vous savez, la locataire, rue des Lilas.", tr: "Alo, benim! Bilirsiniz, kiracı, Lilas sokağı.", en: "Hello, it's me! You know, the tenant, rue des Lilas.", ok: false,
               fb: { fr: "Elle a peut-être dix locataires rue des Lilas 😄. Dites bonjour et précisez qui vous êtes : « C'est votre locataire du 3e étage. »", tr: "Lilas sokağında belki on kiracısı var 😄. Merhaba deyin ve kim olduğunuzu netleştirin: « C'est votre locataire du 3e étage. »", en: "She may have ten tenants on rue des Lilas 😄. Say hello and be precise: « C'est votre locataire du 3e étage. »" } },
             { fr: "Salut madame Roux, ça va ou quoi ? C'est votre locataire !", tr: "Selam Roux Hanım, naber? Kiracınızım!", en: "Hi Mrs Roux, how's it going? It's your tenant!", ok: false,
               fb: { fr: "Trop familier avec une propriétaire ! « Bonjour madame Roux » est parfait.", tr: "Bir ev sahibine karşı fazla samimi! « Bonjour madame Roux » mükemmel.", en: "Too familiar for a landlady! « Bonjour madame Roux » is perfect." } }
           ] },
      b: { say: [["F", "Ah, bonjour ! Qu'est-ce qui se passe ? Vous avez l'air stressée."]],
           choices: [
             { fr: "Il y a une fuite d'eau dans la salle de bains. C'est partout !", tr: "Banyoda su kaçağı var. Her yerde!", en: "There's a water leak in the bathroom. It's everywhere!", ok: true, go: "c" },
             { fr: "Il y a une fête d'eau dans la salle de bains ! Il y en a partout !", tr: "Banyoda su partisi var! Her yerde!", en: "There's a water party in the bathroom! It's everywhere!", ok: false,
               fb: { fr: "Une fête 🎉💦 ? Ça a l'air amusant ! Mais le mot, c'est « une fuite » (leak).", tr: "Parti mi 🎉💦? Eğlenceli görünüyor! Ama doğru kelime « une fuite » (sızıntı).", en: "A party 🎉💦? Sounds fun! But the word is « une fuite » (leak)." } },
             { fr: "Ma salle de bains est fuitée. Il y a de l'eau partout !", tr: "Banyom kaçaklandı. Her yerde su var!", en: "My bathroom is leaked. There's water everywhere!", ok: false,
               fb: { fr: "On ne dit pas ça. La phrase magique : « Il y a une fuite d'eau dans la salle de bains. »", tr: "Böyle denmez. Sihirli cümle: « Il y a une fuite d'eau dans la salle de bains. »", en: "That's not how you say it. The magic sentence: « Il y a une fuite d'eau dans la salle de bains. »" } }
           ] },
      c: { say: [["F", "Oh non ! Et vous l'avez vue quand ?"]],
           choices: [
             { fr: "Je l'ai vue il y a vingt minutes, quand je me suis levée.", tr: "Yirmi dakika önce, kalktığımda gördüm.", en: "I saw it twenty minutes ago, when I got up.", ok: true, go: "d" },
             { fr: "Je l'ai vue depuis vingt minutes, quand je me suis levée.", tr: "Kalktığımda, yirmi dakikadır gördüm.", en: "I've seen it since twenty minutes, when I got up.", ok: false,
               fb: { fr: "Un moment précis dans le passé → « il y a » : « je l'ai vue il y a vingt minutes ».", tr: "Geçmişte belirli bir an → « il y a »: « je l'ai vue il y a vingt minutes ».", en: "A precise moment in the past → « il y a »: « je l'ai vue il y a vingt minutes »." } },
             { fr: "Je l'ai vue il y a vingt minutes, quand j'ai levé.", tr: "Yirmi dakika önce, kaldırdığımda gördüm.", en: "I saw it twenty minutes ago, when I lifted.", ok: false,
               fb: { fr: "« Se lever » est pronominal, donc avec être : « quand je me suis levée ». Sinon, on se demande ce que vous avez levé 😄.", tr: "« Se lever » dönüşlü bir fiil, yani être ile: « quand je me suis levée ». Yoksa neyi kaldırdığınızı merak ediyoruz 😄.", en: "« Se lever » is reflexive, so it takes être: « quand je me suis levée ». Otherwise we wonder what you lifted 😄." } }
           ] },
      d: { say: [["F", "D'accord. L'eau vient d'où ? Du lavabo, de la douche ou des toilettes ?"]],
           choices: [
             { fr: "Elle vient du tuyau sous le lavabo. Ça coule sans arrêt.", tr: "Lavabonun altındaki borudan geliyor. Durmadan akıyor.", en: "It's coming from the pipe under the sink. It keeps running.", ok: true, go: "e" },
             { fr: "Elle vient de Turquie, comme moi. Ça coule sans arrêt.", tr: "O da benim gibi Türkiye'den geliyor. Durmadan akıyor.", en: "It comes from Turkey, like me. It's running non-stop.", ok: false,
               fb: { fr: "😄 Elle vous demande d'où vient l'eau dans la salle de bains, pas sa nationalité !", tr: "😄 Size banyodaki suyun nereden geldiğini soruyor, milliyetini değil!", en: "😄 She's asking where the water in the bathroom is coming from, not its nationality!" } },
             { fr: "Elle a venu du tuyau sous le lavabo. Ça coule sans arrêt.", tr: "Lavabonun altındaki borudan geldi. Durmadan akıyor.", en: "It has came from the pipe under the sink. It's running non-stop.", ok: false,
               fb: { fr: "« Venir » prend être : « elle est venue ». Mais ici, le présent est plus simple : « elle vient du lavabo ».", tr: "« Venir » être alır: « elle est venue ». Ama burada şimdiki zaman daha kolay: « elle vient du lavabo ».", en: "« Venir » takes être: « elle est venue ». But here the present is simpler: « elle vient du lavabo »." } }
           ] },
      e: { say: [["F", "Vous avez fermé le robinet d'arrivée d'eau ? Il est sous l'évier, dans la cuisine."]],
           choices: [
             { fr: "Oui, je l'ai fermé tout de suite et j'ai mis des serviettes par terre.", tr: "Evet, hemen kapattım ve yere havlu serdim.", en: "Yes, I turned it off straight away and put towels on the floor.", ok: true, go: "f" },
             { fr: "Non, je ne savais pas qu'il y en avait un ! Attendez, je regarde.", tr: "Hayır, öyle bir vana olduğunu bilmiyordum! Bekleyin, bakıyorum.", en: "No, I didn't know there was one! Hang on, I'll look.", ok: true, go: "robinet" },
             { fr: "Oui, j'ai fermé la porte de la salle de bains et j'ai mis des serviettes.", tr: "Evet, banyonun kapısını kapattım ve havlu koydum.", en: "Yes, I closed the bathroom door and put towels down.", ok: false,
               fb: { fr: "Malheureusement, l'eau passe sous la porte 😅. Le robinet d'arrivée d'eau, c'est la vanne qui coupe l'eau de l'appartement.", tr: "Ne yazık ki su kapının altından geçer 😅. « Robinet d'arrivée d'eau », dairenin suyunu kesen ana vanadır.", en: "Sadly, water goes under doors 😅. The « robinet d'arrivée d'eau » is the valve that cuts the flat's water supply." } }
           ] },
      robinet: { scene: { fr: "Vous ouvrez le placard sous l'évier. Derrière les produits ménagers, il y a un petit robinet bleu.", tr: "Evyenin altındaki dolabı açıyorsunuz. Temizlik malzemelerinin arkasında küçük mavi bir vana var.", en: "You open the cupboard under the sink. Behind the cleaning products, there's a little blue tap." },
           say: [["F", "Vous le voyez ? Tournez-le vers la droite, jusqu'au bout."]],
           choices: [
             { fr: "Ça y est, je l'ai tourné. L'eau ne coule plus !", tr: "Tamam, çevirdim. Su artık akmıyor!", en: "Done, I've turned it. The water has stopped!", ok: true, go: "f" },
             { fr: "Ça y est, je suis tourné le robinet. L'eau ne coule plus !", tr: "Tamam, ben musluğu döndüm. Su artık akmıyor!", en: "Done, I am turned the tap. The water's stopped!", ok: false,
               fb: { fr: "« Tourner » quelque chose → avoir : « j'ai tourné le robinet ». Sinon, c'est vous qui tournez sur vous-même 💃😄.", tr: "Bir şeyi « tourner » → avoir: « j'ai tourné le robinet ». Yoksa kendi etrafınızda dönen siz oluyorsunuz 💃😄.", en: "« Tourner » something → avoir: « j'ai tourné le robinet ». Otherwise you're the one spinning around 💃😄." } },
             { fr: "Je le vois, mais je ne le connais pas.", tr: "Görüyorum ama onu tanımıyorum.", en: "I see it, but I've never met it.", ok: false,
               fb: { fr: "On ne « connaît » pas un robinet comme un ami 😄. Tournez-le simplement, et dites : « Ça y est, je l'ai tourné. »", tr: "Bir vanayı arkadaş gibi « tanımazsınız » 😄. Sadece çevirin ve şöyle deyin: « Ça y est, je l'ai tourné. »", en: "You don't « know » a tap like a friend 😄. Just turn it and say: « Ça y est, je l'ai tourné. »" } }
           ] },
      f: { say: [["F", "Très bien, vous avez bien réagi. Est-ce que l'eau est passée chez la voisine du dessous ?"]],
           choices: [
             { fr: "Je ne sais pas. Je vais descendre lui demander tout de suite.", tr: "Bilmiyorum. Hemen aşağı inip ona soracağım.", en: "I don't know. I'll go down and ask her right away.", ok: true, go: "g" },
             { fr: "Je ne sais pas. Je vais monter chez la voisine du dessus.", tr: "Bilmiyorum. Üst kattaki komşuya çıkacağım.", en: "I don't know. I'll go up to the neighbour above.", ok: false,
               fb: { fr: "L'eau descend, elle ne monte pas 💧⬇️ ! « Dessous » = en bas, « dessus » = en haut.", tr: "Su aşağı akar, yukarı çıkmaz 💧⬇️! « Dessous » = aşağıda, « dessus » = yukarıda.", en: "Water goes down, not up 💧⬇️! « Dessous » = below, « dessus » = above." } },
             { fr: "Je ne connais pas.", tr: "Tanımıyorum.", en: "I don't know her.", ok: false,
               fb: { fr: "Pour une information, c'est « savoir » : « je ne sais pas ». « Je ne connais pas » = je n'ai jamais rencontré cette personne.", tr: "Bir bilgi için « savoir » kullanılır: « je ne sais pas ». « Je ne connais pas » = o kişiyle hiç tanışmadım.", en: "For information, use « savoir »: « je ne sais pas ». « Je ne connais pas » = I've never met that person." } }
           ] },
      g: { scene: { fr: "Vous descendez au 2e étage. La voisine, Mme Benali, ouvre la porte en pyjama.", tr: "2. kata iniyorsunuz. Komşu Mme Benali kapıyı pijamayla açıyor.", en: "You go down to the 2nd floor. The neighbour, Mme Benali, opens the door in her pyjamas." },
           say: [["F2", "Bonjour… Oh, vous êtes toute pâle ! Ça va ?"]],
           choices: [
             { fr: "Bonjour madame, excusez-moi. J'ai eu une fuite. Vous avez de l'eau au plafond ?", tr: "Merhaba hanımefendi, affedersiniz. Bende kaçak oldu. Tavanınızda su var mı?", en: "Hello, madam, excuse me. I had a leak. Is there water on your ceiling?", ok: true, go: "h" },
             { fr: "Bonjour madame, excusez-moi. Je suis eu une fuite. Vous avez de l'eau au plafond ?", tr: "Merhaba hanımefendi, affedersiniz. Ben kaçak oldum. Tavanınızda su var mı?", en: "Hello, madam, excuse me. I am had a leak. Is there water on your ceiling?", ok: false,
               fb: { fr: "« Avoir » au passé composé, c'est « j'ai eu ». Deux fois avoir, c'est normal 😉.", tr: "« Avoir » fiilinin geçmiş zamanı « j'ai eu ». İki kere avoir, bu normal 😉.", en: "« Avoir » in the passé composé is « j'ai eu ». Avoir twice, that's normal 😉." } },
             { fr: "Salut ! Pardon, t'as de l'eau au plafond chez toi ?", tr: "Selam! Pardon, senin tavanında su var mı?", en: "Hi! Sorry, have you got water on your ceiling?", ok: false,
               fb: { fr: "Vous ne la connaissez pas encore : on utilise « vous ». Et un petit « excusez-moi de vous déranger », c'est magique.", tr: "Onu henüz tanımıyorsunuz: « vous » kullanılır. Bir de « excusez-moi de vous déranger » demek sihir gibi etki eder.", en: "You don't know her yet: use « vous ». And a little « excusez-moi de vous déranger » works like magic." } }
           ] },
      h: { scene: { fr: "Mme Benali regarde partout : rien. Vous remontez et rappelez Mme Roux.", tr: "Mme Benali her yere bakıyor: hiçbir şey yok. Yukarı çıkıp Mme Roux'yu tekrar arıyorsunuz.", en: "Mme Benali checks everywhere: nothing. You go back up and call Mme Roux again." },
           say: [["F", "Alors ? Chez la voisine, ça va ?"]],
           choices: [
             { fr: "Bonne nouvelle : chez elle, tout est sec. Mais il faudrait un plombier.", tr: "İyi haber: onun evinde her şey kuru. Ama bir tesisatçı lazım.", en: "Good news: at her place, everything's dry. But we'd need a plumber.", ok: true, go: "i" },
             { fr: "Bonne nouvelle : la voisine est sèche. Mais il faudrait un plombier.", tr: "İyi haber: komşu kuru. Ama bir tesisatçı lazım.", en: "Good news: the neighbour is dry. But we'd need a plumber.", ok: false,
               fb: { fr: "On espère bien qu'elle est sèche 😄 ! Mais on parle de son appartement : « chez elle, tout est sec ».", tr: "Umarız kendisi kurudur 😄! Ama dairesinden bahsediyoruz: « chez elle, tout est sec ».", en: "We certainly hope she's dry 😄! But we mean her flat: « chez elle, tout est sec »." } },
             { fr: "Tout est sec. Vous envoyez un plombier, oui ou non ?", tr: "Her yer kuru. Tesisatçı gönderiyor musunuz, evet mi hayır mı?", en: "It's all dry. Are you sending a plumber, yes or no?", ok: false,
               fb: { fr: "Un peu trop direct ! Avec le conditionnel, c'est plus doux : « il faudrait un plombier » ou « pourriez-vous envoyer un plombier ? ».", tr: "Biraz fazla direkt! Şart kipiyle daha yumuşak olur: « il faudrait un plombier » ya da « pourriez-vous envoyer un plombier ? ».", en: "A bit too direct! The conditional is softer: « il faudrait un plombier » or « pourriez-vous envoyer un plombier ? »." } }
           ] },
      i: { say: [["F", "Je vais appeler mon plombier. Il pourrait passer demain à 9 h ou à 14 h. Qu'est-ce qui vous arrange ?"]],
           choices: [
             { fr: "Demain à 9 h, ce serait parfait. Je serai là.", tr: "Yarın 9'da mükemmel olur. Evde olacağım.", en: "Tomorrow at 9 would be perfect. I'll be there.", ok: true, go: "j" },
             { fr: "14 h, ça m'arrangerait mieux : le matin, j'ai mon cours de français.", tr: "Saat 14 benim için daha uygun olur: sabahları Fransızca dersim var.", en: "2 pm would suit me better: in the morning I have my French class.", ok: true, go: "j" },
             { fr: "Demain à 9 h, c'est parfait. J'étais à la maison, le matin.", tr: "Yarın 9'da, mükemmel. Sabahları evdeydim.", en: "Tomorrow at 9 is perfect. I was at home, in the morning.", ok: false,
               fb: { fr: "Demain, c'est le futur : « je serai à la maison ». « J'étais », c'était avant 😉.", tr: "Yarın gelecek zamandır: « je serai à la maison ». « J'étais » geçmişte kaldı 😉.", en: "Tomorrow is the future: « je serai à la maison ». « J'étais » is the past 😉." } }
           ] },
      j: { say: [["F", "C'est noté, le plombier s'appelle M. Duval. Et surtout, prenez des photos des dégâts pour l'assurance."]],
           choices: [
             { fr: "D'accord, je vais prendre des photos tout de suite. Merci beaucoup, madame Roux !", tr: "Tamam, hemen fotoğraf çekeceğim. Çok teşekkürler Mme Roux!", en: "OK, I'll take photos right away. Thank you so much, Mme Roux!", ok: true, go: "fin" },
             { fr: "D'accord, j'ai pris des photos demain. Merci beaucoup, madame Roux !", tr: "Tamam, yarın fotoğraf çektim. Çok teşekkürler Roux Hanım!", en: "OK, I took photos tomorrow. Thank you very much, Mrs Roux!", ok: false,
               fb: { fr: "Passé + demain, ça ne va pas ensemble 😄. Dites « je vais prendre des photos » ou « je prendrai des photos ».", tr: "Geçmiş zaman + yarın birbirine uymuyor 😄. « Je vais prendre des photos » ya da « je prendrai des photos » deyin.", en: "Past tense + tomorrow don't go together 😄. Say « je vais prendre des photos » or « je prendrai des photos »." } },
             { fr: "D'accord, je vais faire un selfie avec la fuite ! Merci, madame Roux !", tr: "Tamam, kaçakla bir selfie çekeceğim! Teşekkürler Roux Hanım!", en: "OK, I'll take a selfie with the leak! Thanks, Mrs Roux!", ok: false,
               fb: { fr: "Joli souvenir 🤳😄, mais l'assurance veut voir les dégâts (le sol, le meuble…), pas votre sourire !", tr: "Güzel bir hatıra 🤳😄 ama sigorta gülüşünüzü değil, hasarı (zemin, dolap…) görmek istiyor!", en: "Nice souvenir 🤳😄, but the insurance wants to see the damage (floor, cupboard…), not your smile!" } }
           ] },
      fin: { end: "win",
           say: [["F", "Merci à vous. Et bravo, vous avez été très calme !"]],
           scene: { fr: "Mission réussie : la fuite est arrêtée, le plombier vient demain et vous avez raconté tout ça au passé composé 💧🔧🎉", tr: "Görev tamam: sızıntı durdu, tesisatçı yarın geliyor ve hepsini geçmiş zamanla anlattınız 💧🔧🎉", en: "Mission accomplished: the leak has stopped, the plumber's coming tomorrow and you told it all in the passé composé 💧🔧🎉" } }
    } },

  /* 3. La carte avalée */
  { id: "av-carte", level: "A2", emoji: "💳",
    t: { fr: "La carte avalée", tr: "ATM kartımı yuttu", en: "The swallowed card" },
    goal: { fr: "Appelez votre banque, expliquez ce qui s'est passé, faites bloquer votre carte et demandez-en une nouvelle.", tr: "Bankanızı arayın, ne olduğunu anlatın, kartınızı bloke ettirin ve yenisini isteyin.", en: "Call your bank, explain what happened, get your card blocked and ask for a new one." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vendredi soir, devant un distributeur. Vous avez tapé votre code… et la machine a gardé votre carte 😱. Vous appelez la banque.", tr: "Cuma akşamı, bir ATM'nin önündesiniz. Şifrenizi girdiniz… ve makine kartınızı yuttu 😱. Bankayı arıyorsunuz.", en: "Friday evening, at a cash machine. You typed your PIN… and the machine kept your card 😱. You call the bank." },
           say: [["N", "Bienvenue à la Banque du Centre. Dites en quelques mots la raison de votre appel."]],
           choices: [
             { fr: "Un problème avec ma carte bancaire.", tr: "Banka kartımla ilgili bir sorun.", en: "A problem with my bank card.", ok: true, go: "b" },
             { fr: "Bonsoir ! Comment allez-vous, madame la machine ?", tr: "İyi akşamlar! Nasılsınız, makine hanım?", en: "Good evening! How are you, Mrs Machine?", ok: false,
               fb: { fr: "Très polie 😄, mais c'est un robot 🤖 ! Il comprend mieux des mots simples : « un problème avec ma carte bancaire ».", tr: "Çok kibarsınız 😄 ama bu bir robot 🤖! Basit kelimeleri daha iyi anlar: « un problème avec ma carte bancaire ».", en: "Very polite 😄, but it's a robot 🤖! It understands simple words better: « un problème avec ma carte bancaire »." } },
             { fr: "Un problème avec ma carte postale.", tr: "Kartpostalımla ilgili bir sorun.", en: "A problem with my postcard.", ok: false,
               fb: { fr: "Une carte postale, c'est pour envoyer des bisous de vacances 🏖️. Pour l'argent : « carte bancaire ».", tr: "Kartpostal tatilden selam göndermek içindir 🏖️. Para için: « carte bancaire ».", en: "A « carte postale » is for sending holiday kisses 🏖️. For money: « carte bancaire »." } }
           ] },
      b: { say: [["F", "Banque du Centre, Sandrine à l'appareil, bonsoir. Que puis-je faire pour vous ?"]],
           choices: [
             { fr: "Bonsoir madame. Le distributeur a avalé ma carte il y a dix minutes.", tr: "İyi akşamlar hanımefendi. ATM on dakika önce kartımı yuttu.", en: "Good evening. The cash machine swallowed my card ten minutes ago.", ok: true, go: "c" },
             { fr: "Bonsoir. Le distributeur a mangé ma carte… il avait faim, je crois.", tr: "İyi akşamlar. ATM kartımı yedi… galiba acıkmıştı.", en: "Good evening. The cash machine ate my card… I think it was hungry.", ok: false,
               fb: { fr: "Il avait peut-être faim 😄 ! Mais pour une machine, on dit « avaler » : « le distributeur a avalé ma carte ».", tr: "Belki acıkmıştı 😄! Ama makine için « avaler » (yutmak) denir: « le distributeur a avalé ma carte ».", en: "Maybe it was hungry 😄! But for a machine, French says « avaler » (swallow): « le distributeur a avalé ma carte »." } },
             { fr: "Bonsoir. Le distributeur est avalé ma carte.", tr: "İyi akşamlar. ATM kartımı yuttu.", en: "Good evening. The cash machine is swallowed my card.", ok: false,
               fb: { fr: "« Avaler » se conjugue avec avoir : « il a avalé ». Être, c'est surtout pour les verbes de mouvement (aller, venir, arriver…).", tr: "« Avaler » avoir ile çekimlenir: « il a avalé ». Être daha çok hareket fiilleri içindir (aller, venir, arriver…).", en: "« Avaler » takes avoir: « il a avalé ». Être is mostly for movement verbs (aller, venir, arriver…)." } }
           ] },
      c: { say: [["F", "Oh, je suis désolée. Ça vous est arrivé où, exactement ?"]],
           choices: [
             { fr: "Au distributeur de la place de la République, à côté de la pharmacie.", tr: "Cumhuriyet Meydanı'ndaki ATM'de, eczanenin yanında.", en: "At the cash machine on the place de la République, next to the pharmacy.", ok: true, go: "d" },
             { fr: "Ça m'est arrivé à 21 h, hier soir, après le travail.", tr: "Dün akşam 21'de, işten sonra oldu.", en: "It happened at 9 p.m., last night, after work.", ok: false,
               fb: { fr: "Elle demande « où » (le lieu), pas « quand » (l'heure). Donnez l'adresse du distributeur.", tr: "« Où » (nerede) diye soruyor, « quand » (ne zaman) değil. ATM'nin adresini söyleyin.", en: "She's asking « où » (where), not « quand » (when). Give the cash machine's location." } },
             { fr: "Dans le distributeur, à l'intérieur. La carte est dedans !", tr: "Bankamatiğin içinde. Kart içeride!", en: "In the cash machine, inside. The card is in there!", ok: false,
               fb: { fr: "C'est vrai, la carte est dedans 😄 ! Mais elle veut savoir quel distributeur : dans quelle rue, sur quelle place.", tr: "Doğru, kart içeride 😄! Ama hangi ATM olduğunu bilmek istiyor: hangi sokak, hangi meydan.", en: "True, the card is in there 😄! But she wants to know which machine: which street, which square." } }
           ] },
      d: { say: [["F", "D'accord. Et qu'est-ce qui s'est passé ? Vous vous êtes trompée de code ?"]],
           choices: [
             { fr: "Non, j'ai tapé le bon code, mais l'écran est devenu noir.", tr: "Hayır, doğru şifreyi girdim ama ekran karardı.", en: "No, I typed the right code, but the screen went black.", ok: true, go: "e" },
             { fr: "Non, j'ai tapé le bon code, mais l'écran a devenu noir et voilà.", tr: "Hayır, doğru şifreyi girdim ama ekran karardı ve işte.", en: "No, I typed the right code, but the screen has became black and that's it.", ok: false,
               fb: { fr: "« Devenir » prend être : « l'écran est devenu noir ». Petit truc : devenir, c'est comme venir 😉.", tr: "« Devenir » être alır: « l'écran est devenu noir ». Küçük ipucu: devenir, venir gibidir 😉.", en: "« Devenir » takes être: « l'écran est devenu noir ». Little tip: devenir works like venir 😉." } },
             { fr: "Non, j'ai tapé le bon code, mais la carte est ressortie pas.", tr: "Hayır, doğru şifreyi girdim ama kart geri çıkmadı.", en: "No, I typed the right PIN, but the card came out not.", ok: false,
               fb: { fr: "La négation entoure l'auxiliaire : « la carte n'est pas ressortie ». Ne… pas, c'est un sandwich autour de « est » 🥪.", tr: "Olumsuzluk yardımcı fiili sarar: « la carte n'est pas ressortie ». Ne… pas, « est »in etrafında bir sandviç gibi 🥪.", en: "The negation wraps around the auxiliary: « la carte n'est pas ressortie ». Ne… pas is a sandwich around « est » 🥪." } }
           ] },
      e: { say: [["F", "Je vois. Pour votre sécurité, je vais faire opposition sur la carte. Vous êtes d'accord ?"]],
           choices: [
             { fr: "Oui, bien sûr. Mais est-ce que je pourrai encore payer ce week-end ?", tr: "Evet, tabii. Ama bu hafta sonu yine de ödeme yapabilecek miyim?", en: "Yes, of course. But will I still be able to pay this weekend?", ok: true, go: "f" },
             { fr: "Pardon, qu'est-ce que ça veut dire, « faire opposition » ?", tr: "Pardon, « faire opposition » ne demek?", en: "Sorry, what does « faire opposition » mean?", ok: true, go: "opposition" },
             { fr: "Non, attendez ! Je vais secouer le distributeur, ça marche parfois.", tr: "Hayır, bekleyin! Bankamatiği sallayacağım, bazen işe yarıyor.", en: "No, wait! I'll shake the cash machine, it works sometimes.", ok: false,
               fb: { fr: "Le distributeur ne va pas vous rendre votre carte comme ça 😄. Acceptez l'opposition, c'est plus sûr.", tr: "ATM kartınızı öyle kolay kolay geri vermeyecek 😄. Bloke ettirmeyi kabul edin, daha güvenli.", en: "The machine won't cough up your card 😄. Accept the block, it's safer." } }
           ] },
      opposition: { say: [["F", "Bonne question ! Faire opposition, c'est bloquer la carte : plus personne ne pourra l'utiliser. Je la bloque ?"]],
           choices: [
             { fr: "Ah, d'accord ! Oui, bloquez-la, s'il vous plaît.", tr: "Ha, anladım! Evet, bloke edin lütfen.", en: "Oh, I see! Yes, please block it.", ok: true, go: "f" },
             { fr: "Ah, d'accord ! Oui, bloquez-le, s'il vous plaît.", tr: "Ah, tamam! Evet, onu bloke edin, lütfen.", en: "Oh, OK! Yes, block him, please.", ok: false,
               fb: { fr: "« La carte » est féminin : « bloquez-la ». « Bloquez-le », c'est pour un homme… ou un compte 😄.", tr: "« La carte » dişildir: « bloquez-la ». « Bloquez-le » bir erkek… ya da bir hesap için 😄.", en: "« La carte » is feminine: « bloquez-la ». « Bloquez-le » is for a man… or an account 😄." } },
             { fr: "Ah, d'accord ! Oui, bloquez-moi, s'il vous plaît.", tr: "Ah, tamam! Evet, beni bloke edin, lütfen.", en: "Oh, OK! Yes, block me, please.", ok: false,
               fb: { fr: "Vous bloquer, vous ? Comme sur Instagram 😄 ? C'est la carte qu'on bloque : « bloquez-la ».", tr: "Sizi mi bloke etsin? Instagram'daki gibi mi 😄? Bloke edilen kart: « bloquez-la ».", en: "Block you? Like on Instagram 😄? It's the card that gets blocked: « bloquez-la »." } }
           ] },
      f: { say: [["F", "C'est fait, votre carte est bloquée. Ce week-end, vous pourrez retirer de l'argent au guichet de votre agence, samedi matin. La nouvelle carte arrivera dans 5 à 7 jours."]],
           choices: [
             { fr: "Est-ce que je pourrais la recevoir à l'agence, plutôt ?", tr: "Onu şubeden alabilir miyim, daha iyi?", en: "Could I collect it at the branch instead?", ok: true, go: "g" },
             { fr: "D'accord. Et je recevrai la nouvelle carte il y a cinq jours ?", tr: "Tamam. Yeni kartı beş gün önce mi alacağım?", en: "OK. And I'll get the new card five days ago?", ok: false,
               fb: { fr: "« Il y a » regarde le passé ⏪. Pour le futur, c'est « dans » : « dans cinq jours ».", tr: "« Il y a » geçmişe bakar ⏪. Gelecek için « dans » kullanılır: « dans cinq jours » (beş gün içinde).", en: "« Il y a » looks back ⏪. For the future, use « dans »: « dans cinq jours » (in five days)." } },
             { fr: "Cinq à sept jours ? Mais je vais mourir de faim !", tr: "Beş ila yedi gün mü? Ama açlıktan öleceğim!", en: "Five to seven days? But I'll starve!", ok: false,
               fb: { fr: "Pas de panique 😄 : vous pouvez prendre de l'argent au guichet samedi. Demandez plutôt où recevoir la nouvelle carte.", tr: "Panik yok 😄: cumartesi şubeden para çekebilirsiniz. Bunun yerine yeni kartı nereden alacağınızı sorun.", en: "Don't panic 😄: you can get cash at the counter on Saturday. Ask instead where you can receive the new card." } }
           ] },
      g: { say: [["F", "Bien sûr, c'est possible. Je dois juste vérifier votre identité. Quelle est votre date de naissance ?"]],
           choices: [
             { fr: "Je suis née le 14 mars 1996.", tr: "14 Mart 1996'da doğdum.", en: "I was born on 14 March 1996.", ok: true, go: "h" },
             { fr: "J'ai né le 14 mars 1996.", tr: "14 Mart 1996'da doğdum.", en: "I have born on 14 March 1996.", ok: false,
               fb: { fr: "« Naître » prend être : « je suis née ». Le verbe de la naissance mérite bien être 👶😉.", tr: "« Naître » être alır: « je suis née ». Doğum fiili être'yi hak ediyor 👶😉.", en: "« Naître » takes être: « je suis née ». The verb of being born deserves être 👶😉." } },
             { fr: "J'ai 30 ans.", tr: "30 yaşındayım.", en: "I'm 30.", ok: false,
               fb: { fr: "Elle veut la date complète, pas l'âge : « je suis née le… ».", tr: "Yaşınızı değil, tam doğum tarihinizi istiyor: « je suis née le… ».", en: "She wants the full date, not your age: « je suis née le… »." } }
           ] },
      h: { say: [["F", "Merci. Et vous pouvez me confirmer votre adresse e-mail ?"]],
           choices: [
             { fr: "Oui : c'est mon prénom, point, mon nom, arobase exemple point fr.", tr: "Evet: adım, nokta, soyadım, et işareti exemple nokta fr.", en: "Yes: it's my first name, dot, my surname, at exemple dot fr.", ok: true, go: "i" },
             { fr: "Oui : c'est mon prénom, point, mon nom, at exemple point fr.", tr: "Evet: adım, nokta, soyadım, « at » exemple nokta fr.", en: "Yes: it's my first name, dot, my surname, at exemple dot fr.", ok: false,
               fb: { fr: "En France, « @ » se dit « arobase ». « At », c'est l'anglais… ou le cheval en turc 🐎😄 !", tr: "Fransa'da « @ » işaretine « arobase » denir. « At » İngilizce… ya da Türkçede at 🐎😄!", en: "In France, « @ » is « arobase ». « At » is English… or « horse » in Turkish 🐎😄!" } },
             { fr: "Bien sûr : prénom, point, nom, arobase exemple point fr. Et mon mot de passe : soleil123.", tr: "Tabii: ad, nokta, soyad, et işareti örnek nokta fr. Şifrem de: soleil123.", en: "Sure: first name, dot, surname, at exemple dot fr. And my password: soleil123.", ok: false,
               fb: { fr: "Stop 🔐 ! On ne donne jamais son mot de passe, même à sa banque. L'adresse e-mail suffit.", tr: "Dur 🔐! Şifre kimseye verilmez, bankaya bile. E-posta adresi yeterli.", en: "Stop 🔐! Never give your password, not even to your bank. The email address is enough." } }
           ] },
      i: { say: [["F", "Parfait, c'est vérifié. Votre carte arrivera à l'agence mercredi ou jeudi, on vous enverra un SMS. Je peux faire autre chose pour vous ?"]],
           choices: [
             { fr: "Non, c'est tout. Merci beaucoup, vous m'avez beaucoup aidée !", tr: "Hayır, bu kadar. Çok teşekkürler, bana çok yardımcı oldunuz!", en: "No, that's all. Thank you so much, you've been a great help!", ok: true, go: "fin" },
             { fr: "Oui, une question : est-ce que l'opposition est payante ?", tr: "Evet, bir sorum var: kartı bloke ettirmek ücretli mi?", en: "Yes, one question: do you charge for blocking the card?", ok: true, go: "frais" },
             { fr: "Non, c'est tout. Je vous remercie, de rien !", tr: "Hayır, bu kadar. Teşekkür ederim, rica ederim!", en: "No, that's all. Thank you, you're welcome!", ok: false,
               fb: { fr: "« De rien », c'est la réponse à « merci ». Ici, c'est elle qui vous dira « de rien » 😉.", tr: "« De rien », « merci »ye verilen cevaptır. Burada « de rien » diyecek olan o 😉.", en: "« De rien » is the reply to « merci ». Here, she's the one who'll say « de rien » 😉." } }
           ] },
      frais: { say: [["F", "Non, l'opposition est gratuite. Mais la nouvelle carte coûte 15 €."]],
           choices: [
             { fr: "D'accord, ce n'est pas grave. Merci pour votre aide, bonne soirée !", tr: "Tamam, sorun değil. Yardımınız için teşekkürler, iyi akşamlar!", en: "OK, no problem. Thanks for your help, have a good evening!", ok: true, go: "fin" },
             { fr: "15 € ? Alors je préfère garder l'ancienne carte. Merci, bonne soirée !", tr: "15 € mu? O zaman eski kartı tutmayı tercih ederim. Teşekkürler, iyi akşamlar!", en: "€15? Then I'd rather keep the old card. Thanks, have a good evening!", ok: false,
               fb: { fr: "L'ancienne dort dans le distributeur, et elle est bloquée 😄. La nouvelle, c'est la seule solution !", tr: "Eskisi ATM'nin içinde uyuyor ve bloke 😄. Tek çözüm yeni kart!", en: "The old one is asleep inside the machine, and it's blocked 😄. The new one is the only option!" } }
           ] },
      fin: { end: "win",
           say: [["F", "Avec plaisir, madame. Bonne soirée et bon week-end !"]],
           scene: { fr: "Bravo ! Carte bloquée, nouvelle carte commandée, et vous savez dire « arobase » comme une vraie Française 💳🎉", tr: "Bravo! Kart bloke edildi, yeni kart sipariş edildi ve artık « arobase » demeyi gerçek bir Fransız gibi biliyorsunuz 💳🎉", en: "Well done! Card blocked, new card ordered, and you can say « arobase » like a real French person 💳🎉" } }
    } },

  /* 4. Rendez-vous à la préfecture */
  { id: "av-prefecture", level: "A2", emoji: "🏛️",
    t: { fr: "Rendez-vous à la préfecture", tr: "Valilikte randevu", en: "An appointment at the préfecture" },
    goal: { fr: "Déposez votre dossier de titre de séjour et, s'il manque un papier, obtenez un nouveau rendez-vous.", tr: "Oturma izni dosyanızı teslim edin; bir belge eksikse yeni bir randevu alın.", en: "Hand in your residence permit file and, if a paper is missing, get a new appointment." },
    start: "a",
    nodes: {
      a: { scene: { fr: "8 h 45, devant la préfecture. Il y a déjà une longue file. Un agent d'accueil s'approche.", tr: "Saat 8.45, valiliğin önündesiniz. Şimdiden uzun bir kuyruk var. Bir danışma görevlisi yaklaşıyor.", en: "8.45 am, outside the préfecture. There's already a long queue. A reception officer comes over." },
           say: [["M", "Bonjour madame. Vous avez un rendez-vous ?"]],
           choices: [
             { fr: "Bonjour. Oui, j'ai rendez-vous à 9 h 10. Voici ma convocation.", tr: "Merhaba. Evet, 9.10'da randevum var. Davet mektubum burada.", en: "Hello. Yes, I have an appointment at 9:10. Here's my letter.", ok: true, go: "b" },
             { fr: "Bonjour. Oui, je suis rendez-vous à 9 h 10. Voici ma convocation.", tr: "Merhaba. Evet, ben 9.10'da randevuyum. Davet mektubum burada.", en: "Hello. Yes, I am appointment at 9:10. Here's my letter.", ok: false,
               fb: { fr: "On « a » un rendez-vous : « j'ai rendez-vous à 9 h 10 ». Vous n'êtes pas le rendez-vous 😄.", tr: "Randevu « sahip olunan » bir şeydir: « j'ai rendez-vous à 9 h 10 ». Randevunun kendisi siz değilsiniz 😄.", en: "You « have » an appointment: « j'ai rendez-vous à 9 h 10 ». You aren't the appointment 😄." } },
             { fr: "Oui, à 9 h 10. Je peux passer devant tout le monde ?", tr: "Evet, 9.10'da. Herkesin önüne geçebilir miyim?", en: "Yes, at 9.10. Can I skip the whole queue?", ok: false,
               fb: { fr: "Courageux 😄 ! Mais à la préfecture, on suit les consignes. Dites simplement votre heure et montrez votre convocation.", tr: "Cesurca 😄! Ama valilikte kurallara uyulur. Sadece saatinizi söyleyin ve randevu belgenizi gösterin.", en: "Brave 😄! But at the préfecture you follow the rules. Just give your time and show your appointment letter." } }
           ] },
      b: { scene: { fr: "L'agent vous donne un ticket. Après 40 minutes d'attente, c'est votre tour au guichet 4.", tr: "Görevli size bir sıra numarası veriyor. 40 dakika bekledikten sonra sıra 4 numaralı gişede size geliyor.", en: "The officer gives you a ticket. After a 40-minute wait, it's your turn at counter 4." },
           say: [["N", "Le numéro 112 est attendu au guichet 4."], ["F", "Bonjour madame, asseyez-vous. C'est une première demande ?"]],
           choices: [
             { fr: "Oui, c'est ma première demande. Je suis arrivée en France il y a un an.", tr: "Evet, ilk başvurum. Bir yıl önce Fransa'ya geldim.", en: "Yes, it's my first application. I arrived in France a year ago.", ok: true, go: "c" },
             { fr: "Oui, c'est ma première demande. J'ai arrivé en France il y a un an.", tr: "Evet, ilk başvurum. Bir yıl önce Fransa'ya geldim.", en: "Yes, it's my first application. I have arrived in France a year ago.", ok: false,
               fb: { fr: "« Arriver » prend être : « je suis arrivée » (avec un e). C'est un des verbes de la « maison d'être » 🏠.", tr: "« Arriver » être alır: « je suis arrivée » (sonunda e ile). « Être'nin evi » 🏠 denen fiillerden biri.", en: "« Arriver » takes être: « je suis arrivée » (with an e). It's one of the « house of être » verbs 🏠." } },
             { fr: "Oui, c'est ma première demande. Je suis en France il y a un an.", tr: "Evet, ilk başvurum. Bir yıl önce Fransa'dayım.", en: "Yes, it's my first application. I am in France a year ago.", ok: false,
               fb: { fr: "Deux bonnes solutions : « je suis en France depuis un an » ou « je suis arrivée il y a un an ».", tr: "İki doğru seçenek var: « je suis en France depuis un an » (bir yıldır) ya da « je suis arrivée il y a un an » (bir yıl önce geldim).", en: "Two correct options: « je suis en France depuis un an » or « je suis arrivée il y a un an »." } }
           ] },
      c: { say: [["F", "Très bien. Vous avez votre passeport et votre visa ?"]],
           choices: [
             { fr: "Oui, voici mon passeport. Le visa est à la page 12.", tr: "Evet, işte pasaportum. Vize 12. sayfada.", en: "Yes, here's my passport. The visa is on page 12.", ok: true, go: "d" },
             { fr: "Oui, voici mon passeport et ma visa.", tr: "Evet, işte pasaportum ve vizem.", en: "Yes, here's my passport and my visa.", ok: false,
               fb: { fr: "« Visa » est masculin : « mon visa ». Oui, même s'il finit par -a, le coquin 😄.", tr: "« Visa » erildir: « mon visa ». Evet, -a ile bitmesine rağmen, yaramaz 😄.", en: "« Visa » is masculine: « mon visa ». Yes, even though it ends in -a, the rascal 😄." } },
             { fr: "Oui, voici mon passeport. Le visa est dedans le passeport.", tr: "Evet, işte pasaportum. Vize pasaportun içinde.", en: "Yes, here's my passport. The visa is inside of the passport.", ok: false,
               fb: { fr: "Devant un nom, on dit « dans » : « le visa est dans le passeport ». « Dedans » s'utilise seul : « il est dedans ».", tr: "İsimden önce « dans » denir: « le visa est dans le passeport ». « Dedans » tek başına kullanılır: « il est dedans ».", en: "Before a noun, use « dans »: « le visa est dans le passeport ». « Dedans » stands alone: « il est dedans »." } }
           ] },
      d: { say: [["F", "Merci. Il me faut aussi un justificatif de domicile de moins de trois mois."]],
           choices: [
             { fr: "Voici une facture d'électricité du mois dernier, à mon nom.", tr: "İşte geçen aya ait, benim adıma bir elektrik faturası.", en: "Here's last month's electricity bill, in my name.", ok: true, go: "e" },
             { fr: "Voici une facture d'électricité de l'année dernière.", tr: "İşte geçen yılın elektrik faturası.", en: "Here's an electricity bill from last year.", ok: false,
               fb: { fr: "Trop vieille ! Elle doit avoir moins de trois mois. Cherchez une facture récente 📄.", tr: "Çok eski! Üç aydan yeni olmalı. Yeni tarihli bir fatura bulun 📄.", en: "Too old! It must be less than three months old. Look for a recent bill 📄." } },
             { fr: "Je n'ai pas de domicile, mais j'ai un appartement, à mon nom.", tr: "İkametgâhım yok ama adıma bir dairem var.", en: "I don't have a home address, but I have a flat, in my name.", ok: false,
               fb: { fr: "Bonne nouvelle : votre appartement, c'est votre domicile 🏠😄 ! Domicile = l'endroit où vous habitez.", tr: "İyi haber: daireniz sizin ikametgâhınız 🏠😄! « Domicile » = oturduğunuz yer.", en: "Good news: your flat is your domicile 🏠😄! « Domicile » = the place where you live." } }
           ] },
      e: { say: [["F", "Parfait. Et votre acte de naissance, avec la traduction officielle ?"]],
           choices: [
             { fr: "Voici mon acte de naissance… Oh non ! J'ai oublié la traduction.", tr: "Doğum belgem burada… Ah hayır! Çeviriyi unuttum.", en: "Here's my birth certificate… Oh no! I forgot the translation.", ok: true, go: "f" },
             { fr: "Voici mon acte de naissance… Oh non ! J'ai oublié de la traduction.", tr: "Doğum belgem burada… Ah hayır! Çeviriyi unuttum.", en: "Here's my birth certificate… Oh no! I forgot of the translation.", ok: false,
               fb: { fr: "« Oublier » + nom, sans « de » : « j'ai oublié la traduction ». On met « de » devant un verbe : « j'ai oublié de la prendre ».", tr: "« Oublier » + isim, « de » olmadan: « j'ai oublié la traduction ». « De » fiilden önce gelir: « j'ai oublié de la prendre ».", en: "« Oublier » + noun, no « de »: « j'ai oublié la traduction ». « De » goes before a verb: « j'ai oublié de la prendre »." } },
             { fr: "Voici mon acte de naissance. Je l'ai traduit moi-même avec mon téléphone !", tr: "İşte doğum belgem. Telefonumla kendim tercüme ettim!", en: "Here's my birth certificate. I translated it myself with my phone!", ok: false,
               fb: { fr: "Bravo pour l'effort 📱😄 ! Mais la préfecture veut une traduction par un traducteur assermenté (officiel).", tr: "Çaba için bravo 📱😄! Ama valilik yeminli (resmî) bir tercümanın yaptığı tercümeyi istiyor.", en: "Points for effort 📱😄! But the préfecture wants a translation by a sworn (official) translator." } }
           ] },
      f: { say: [["F", "Ah… Sans la traduction, je ne peux pas valider votre dossier aujourd'hui."]],
           choices: [
             { fr: "D'accord. Comment est-ce que je peux avoir un nouveau rendez-vous ?", tr: "Tamam. Nasıl yeni bir randevu alabilirim?", en: "OK. How can I get a new appointment?", ok: true, go: "g" },
             { fr: "J'habite à 15 minutes. Je pourrais aller la chercher et revenir ce matin ?", tr: "15 dakika uzakta oturuyorum. Gidip alıp bu sabah geri gelebilir miyim?", en: "I live 15 minutes away. Could I go and get it and come back this morning?", ok: true, go: "complet" },
             { fr: "Je comprends, mais vous pourriez fermer les yeux, juste cette fois ?", tr: "Anlıyorum ama bu seferlik göz yumabilir misiniz?", en: "I understand, but could you turn a blind eye, just this once?", ok: false,
               fb: { fr: "Bien essayé, et bravo pour l'expression 😄 ! Mais à la préfecture, personne ne ferme les yeux. Demandez un nouveau rendez-vous.", tr: "İyi denemeydi, deyim için de bravo 😄! Ama valilikte kimse göz yummaz. Yeni bir randevu isteyin.", en: "Nice try, and well done on the idiom 😄! But nobody turns a blind eye at the préfecture. Ask for a new appointment." } }
           ] },
      complet: { say: [["F", "Je comprends, mais malheureusement, ce matin, c'est complet. Ne vous inquiétez pas, on va trouver une solution."]],
           choices: [
             { fr: "D'accord, je comprends. Comment je peux avoir un nouveau rendez-vous ?", tr: "Tamam, anlıyorum. Nasıl yeni randevu alabilirim?", en: "OK, I understand. How can I get a new appointment?", ok: true, go: "g" },
             { fr: "Pas de problème, je comprends. Je reviens à 11 h avec la traduction, alors !", tr: "Sorun değil, anlıyorum. O zaman çeviriyle saat 11'de dönerim!", en: "No problem, I understand. I'll come back at 11 with the translation, then!", ok: false,
               fb: { fr: "« C'est complet » = il n'y a plus aucune place ce matin 😅. Il faut demander un nouveau rendez-vous.", tr: "« C'est complet » = bu sabah hiç yer kalmadı 😅. Yeni bir randevu istemeniz gerekiyor.", en: "« C'est complet » = there are no slots left this morning 😅. You need to ask for a new appointment." } }
           ] },
      g: { say: [["F", "Je peux vous donner un nouveau rendez-vous tout de suite. J'ai le mardi 17 novembre à 10 h 30, ou le jeudi 19 à 14 h."]],
           choices: [
             { fr: "Le mardi 17 à 10 h 30, ça me va très bien.", tr: "17 Kasım salı 10.30 bana çok uyar.", en: "Tuesday the 17th at 10.30 suits me very well.", ok: true, go: "h" },
             { fr: "Le jeudi 19 à 14 h, ce serait mieux pour moi.", tr: "19'u perşembe saat 14 benim için daha iyi olur.", en: "Thursday the 19th at 2 pm would be better for me.", ok: true, go: "h" },
             { fr: "Le mardi 17 à 10 h 30 du soir, c'est parfait.", tr: "17'si salı akşam 10.30 mükemmel.", en: "Tuesday the 17th at 10.30 in the evening is perfect.", ok: false,
               fb: { fr: "La préfecture dort à 22 h 30 😴 ! « 10 h 30 », c'est le matin. Le soir, on dirait « 22 h 30 ».", tr: "Valilik akşam 22.30'da uyuyor 😴! « 10 h 30 » sabahtır. Akşam için « 22 h 30 » denir.", en: "The préfecture is asleep at 10.30 pm 😴! « 10 h 30 » is morning. The evening would be « 22 h 30 »." } }
           ] },
      h: { say: [["F", "C'est noté. Ce jour-là, vous apporterez le dossier complet, avec la traduction. C'est clair pour vous ?"]],
           choices: [
             { fr: "Oui : je reviendrai avec tout le dossier et la traduction officielle.", tr: "Evet: tüm dosya ve resmî çeviriyle geri geleceğim.", en: "Yes: I'll come back with the whole file and the official translation.", ok: true, go: "i" },
             { fr: "Oui : je reviendrai seulement avec la traduction officielle de mon acte.", tr: "Evet: sadece belgemin resmî çevirisiyle geri geleceğim.", en: "Yes: I'll come back with only the official translation of my certificate.", ok: false,
               fb: { fr: "Elle a dit « le dossier complet » : il faut tout rapporter, pas seulement la traduction 📂.", tr: "« Le dossier complet » dedi: sadece tercümeyi değil, her şeyi getirmek gerekiyor 📂.", en: "She said « le dossier complet »: bring everything back, not just the translation 📂." } },
             { fr: "Oui : je suis revenue avec tout le dossier et la traduction officielle.", tr: "Evet: tüm dosya ve resmî çeviriyle geri geldim.", en: "Yes: I came back with the whole file and the official translation.", ok: false,
               fb: { fr: "C'est pour plus tard, donc au futur : « je reviendrai ». « Je suis revenue », c'est déjà fait 😉.", tr: "Bu ileride olacak, yani gelecek zaman: « je reviendrai ». « Je suis revenue » zaten olmuş bir şey 😉.", en: "It's for later, so use the future: « je reviendrai ». « Je suis revenue » means it already happened 😉." } }
           ] },
      i: { say: [["F", "Voilà votre nouvelle convocation. Vous avez d'autres questions ?"]],
           choices: [
             { fr: "Non, c'est très clair. Merci beaucoup pour votre patience !", tr: "Hayır, her şey çok açık. Sabrınız için çok teşekkürler!", en: "No, it's very clear. Thank you very much for your patience!", ok: true, go: "fin" },
             { fr: "Oui : mon visa expire le 30 novembre. Est-ce que c'est un problème ?", tr: "Evet: vizemin süresi 30 Kasım'da doluyor. Bu bir sorun mu?", en: "Yes: my visa expires on 30 November. Is that a problem?", ok: true, go: "visa" },
             { fr: "Non, merci. Vous êtes très gentille… vous êtes mariée, madame ?", tr: "Hayır, teşekkürler. Çok naziksiniz… evli misiniz hanımefendi?", en: "No, thanks. You're very kind… are you married, madam?", ok: false,
               fb: { fr: "Beaucoup trop personnel pour une préfecture 😄 ! Un simple « merci pour votre patience » suffit.", tr: "Valilik için fazla kişisel 😄! Basit bir « merci pour votre patience » yeterli.", en: "Far too personal for a préfecture 😄! A simple « merci pour votre patience » is enough." } }
           ] },
      visa: { say: [["F", "Non, ne vous inquiétez pas : votre rendez-vous est avant cette date. Et quand le dossier sera complet, vous recevrez un récépissé."]],
           choices: [
             { fr: "Ah, je suis rassurée ! Merci beaucoup, bonne journée.", tr: "Oh, içim rahatladı! Çok teşekkürler, iyi günler.", en: "Oh, that's a relief! Thank you very much, have a nice day.", ok: true, go: "fin" },
             { fr: "Ah, je suis rassurée ! Merci beaucoup, bonsoir, madame.", tr: "Ah, içim rahatladı! Çok teşekkürler, iyi akşamlar hanımefendi.", en: "Oh, I'm relieved! Thank you very much, good evening, madam.", ok: false,
               fb: { fr: "Il est 10 h du matin ☀️ : on dit « bonne journée ». « Bonsoir », c'est à partir de 18 h environ.", tr: "Saat sabah 10 ☀️: « bonne journée » denir. « Bonsoir » yaklaşık 18.00'den sonra kullanılır.", en: "It's 10 am ☀️: say « bonne journée ». « Bonsoir » is from about 6 pm." } }
           ] },
      fin: { end: "win",
           say: [["F", "Au revoir, madame. Et n'oubliez pas la traduction, cette fois !"]],
           scene: { fr: "Bravo ! Un papier manquait, mais vous êtes restée calme et vous avez obtenu un nouveau rendez-vous. La préfecture, c'est le boss final… et vous l'avez battu 🏛️💪", tr: "Bravo! Bir belge eksikti ama sakin kaldınız ve yeni bir randevu aldınız. Valilik oyunun son boss'u… ve onu yendiniz 🏛️💪", en: "Well done! A paper was missing, but you stayed calm and got a new appointment. The préfecture is the final boss… and you beat it 🏛️💪" } }
    } },

  /* 5. Inscription à la salle de sport */
  { id: "av-salle", level: "A2", emoji: "🏋️",
    t: { fr: "À la salle de sport", tr: "Spor salonunda", en: "At the gym" },
    goal: { fr: "Inscrivez-vous à une salle de sport : comparez les formules, renseignez-vous sur les cours et les conditions de résiliation.", tr: "Bir spor salonuna kaydolun: üyelik seçeneklerini karşılaştırın, dersleri ve iptal koşullarını sorun.", en: "Join a gym: compare the plans, ask about the classes and the cancellation terms." },
    start: "a",
    nodes: {
      a: { scene: { fr: "Vous entrez dans une salle de sport près de chez vous. Musique, odeur de caoutchouc… Un jeune coach sourit à l'accueil.", tr: "Evinizin yakınındaki bir spor salonuna giriyorsunuz. Müzik, kauçuk kokusu… Danışmada genç bir antrenör gülümsüyor.", en: "You walk into a gym near your home. Music, the smell of rubber… A young coach smiles at the front desk." },
           say: [["M", "Bonjour madame ! Je peux vous renseigner ?"]],
           choices: [
             { fr: "Bonjour ! Oui, je voudrais des informations sur les abonnements.", tr: "Merhaba! Evet, üyelikler hakkında bilgi almak istiyorum.", en: "Hello! Yes, I'd like some information about memberships.", ok: true, go: "b" },
             { fr: "Bonjour ! Je voudrais m'inscrire à la salle de bains.", tr: "Merhaba! Banyoya kaydolmak istiyorum.", en: "Hello! I'd like to sign up for the bathroom.", ok: false,
               fb: { fr: "La salle de bains 🛁, c'est chez vous 😄 ! Ici, c'est « la salle de sport » (ou « la salle »).", tr: "Banyo 🛁 sizin evinizde 😄! Burası « la salle de sport » (ya da kısaca « la salle »).", en: "The bathroom 🛁 is at home 😄! This is « la salle de sport » (or just « la salle »)." } },
             { fr: "Bonjour. Je veux les prix des abonnements. Vite, s'il vous plaît.", tr: "Merhaba. Abonelik fiyatlarını istiyorum. Çabuk, lütfen.", en: "Hello. I want the membership prices. Quickly, please.", ok: false,
               fb: { fr: "Ça sonne un peu sec ! Le conditionnel est plus doux : « je voudrais des informations ».", tr: "Biraz sert duruyor! Şart kipi daha yumuşak: « je voudrais des informations ».", en: "That sounds a bit curt! The conditional is softer: « je voudrais des informations »." } }
           ] },
      b: { say: [["M", "Avec plaisir. Vous avez déjà fait du sport ?"]],
           choices: [
             { fr: "Oui, j'ai joué au handball pendant dix ans, en Turquie.", tr: "Evet, Türkiye'de on yıl hentbol oynadım.", en: "Yes, I played handball for ten years, in Turkey.", ok: true, go: "c" },
             { fr: "Oui, j'ai joué du handball pendant dix ans.", tr: "Evet, on yıl hentbol çaldım.", en: "Yes, I played the handball for ten years.", ok: false,
               fb: { fr: "« Jouer de », c'est pour la musique 🎸 ; pour un sport, c'est « jouer à » : « j'ai joué au handball ».", tr: "« Jouer de » müzik aletleri içindir 🎸; spor için « jouer à » denir: « j'ai joué au handball ».", en: "« Jouer de » is for instruments 🎸; for a sport it's « jouer à »: « j'ai joué au handball »." } },
             { fr: "Oui, je joue au handball depuis dix ans, mais j'ai arrêté l'année dernière.", tr: "Evet, on yıldır hentbol oynuyorum ama geçen yıl bıraktım.", en: "Yes, I've been playing handball for ten years, but I stopped last year.", ok: false,
               fb: { fr: "« Depuis » + présent = ça continue encore. Si vous avez arrêté : « j'ai joué pendant dix ans ».", tr: "« Depuis » + şimdiki zaman = hâlâ devam ediyor. Bıraktıysanız: « j'ai joué pendant dix ans ».", en: "« Depuis » + present = it's still going on. If you stopped: « j'ai joué pendant dix ans »." } }
           ] },
      c: { say: [["M", "Du handball ? Génial ! Alors, on a deux formules : sans engagement à 39 € par mois, ou avec un engagement d'un an à 29 € par mois."]],
           choices: [
             { fr: "Quelle est la différence, à part le prix ?", tr: "Fiyat dışında fark ne?", en: "What's the difference, apart from the price?", ok: true, go: "d" },
             { fr: "Un engagement ? Non merci, je ne veux pas me marier !", tr: "Nişan mı? Hayır teşekkürler, evlenmek istemiyorum!", en: "An engagement? No thanks, I don't want to get married!", ok: false,
               fb: { fr: "💍😄 Ici, l'engagement, c'est un contrat : vous promettez de rester un an. Les fiançailles, c'est autre chose !", tr: "💍😄 Burada « engagement » bir sözleşme: bir yıl kalmayı taahhüt ediyorsunuz. Nişan başka bir şey!", en: "💍😄 Here « engagement » is a contract: you commit to staying a year. Getting engaged is « les fiançailles »!" } },
             { fr: "Laquelle est la plus bonne ?", tr: "Hangisi daha iyi?", en: "Which one is the most good?", ok: false,
               fb: { fr: "« Bon » a une forme spéciale : « meilleur ». On dit « laquelle est la meilleure ? ».", tr: "« Bon » sıfatının özel bir biçimi var: « meilleur ». « Laquelle est la meilleure ? » denir.", en: "« Bon » has a special form: « meilleur ». Say « laquelle est la meilleure ? »." } }
           ] },
      d: { say: [["M", "Avec engagement, vous payez moins, mais vous restez un an. Sans engagement, vous pouvez arrêter quand vous voulez, avec un préavis d'un mois."]],
           choices: [
             { fr: "Et si je déménage, je pourrais résilier l'abonnement ?", tr: "Peki taşınırsam aboneliği iptal edebilir miyim?", en: "And if I move, could I cancel the membership?", ok: true, go: "e" },
             { fr: "Et si je déménage, est-ce que je pourrai résister l'abonnement avec engagement ?", tr: "Peki taşınırsam taahhütlü aboneliğe direnebilir miyim?", en: "And if I move, will I be able to resist the contract membership?", ok: false,
               fb: { fr: "Résister ✊😄 ? Le mot, c'est « résilier » = arrêter un contrat.", tr: "Direnmek mi ✊😄? Doğru kelime « résilier » = bir sözleşmeyi feshetmek.", en: "Resist ✊😄? The word is « résilier » = to cancel a contract." } },
             { fr: "Un préavis ? Je n'ai pas d'avis, merci.", tr: "« Préavis » mi? Bir fikrim yok, teşekkürler.", en: "A notice period? I have no opinion, thanks.", ok: false,
               fb: { fr: "« Un avis » = une opinion, mais « un préavis » = le délai pour prévenir avant d'arrêter (ici, un mois).", tr: "« Un avis » = görüş, ama « un préavis » = bırakmadan önceki bildirim süresi (burada bir ay).", en: "« Un avis » = an opinion, but « un préavis » = the notice you give before stopping (here, one month)." } }
           ] },
      e: { say: [["M", "Oui, avec un justificatif de déménagement ou un certificat médical, c'est possible. Vous voulez savoir quels cours on propose ?"]],
           choices: [
             { fr: "Oui, avec plaisir ! Vous avez des cours de pilates ?", tr: "Evet, memnuniyetle! Pilates dersiniz var mı?", en: "Yes, with pleasure! Do you have pilates classes?", ok: true, go: "f" },
             { fr: "Oui, avec plaisir ! Je voudrais connaître quels cours vous avez.", tr: "Evet, memnuniyetle! Hangi dersleriniz olduğunu tanımak istiyorum.", en: "Yes, with pleasure! I'd like to know which classes you have.", ok: false,
               fb: { fr: "Devant « quels », « où », « si »… on utilise « savoir » : « je voudrais savoir quels cours vous avez ». « Connaître » va devant un nom : « connaître vos cours ».", tr: "« Quels », « où », « si »… önünde « savoir » kullanılır: « je voudrais savoir quels cours vous avez ». « Connaître » isimden önce gelir: « connaître vos cours ».", en: "Before « quels », « où », « si »… use « savoir »: « je voudrais savoir quels cours vous avez ». « Connaître » goes before a noun: « connaître vos cours »." } },
             { fr: "Oui ! Il y a des cours pour le dos ? J'ai mal à mon dos.", tr: "Evet! Sırt için dersler var mı? Sırtım ağrıyor.", en: "Yes! Are there classes for the back? My back hurts.", ok: false,
               fb: { fr: "Avec le corps, pas de « mon » : « j'ai mal au dos ». Votre kiné intérieure le sait déjà 😉.", tr: "Vücut bölümleriyle « mon » kullanılmaz: « j'ai mal au dos ». İçinizdeki fizyoterapist bunu zaten biliyor 😉.", en: "No « mon » with body parts: « j'ai mal au dos ». The physio in you already knows that 😉." } }
           ] },
      f: { say: [["M", "Oui ! Pilates le lundi et le jeudi à 19 h, renforcement le samedi à 10 h. C'est compris dans l'abonnement. Vous voulez faire une séance d'essai gratuite ?"]],
           choices: [
             { fr: "Oui, avec plaisir ! Je peux essayer maintenant ?", tr: "Evet, memnuniyetle! Şimdi deneyebilir miyim?", en: "Yes, I'd love to! Can I try now?", ok: true, go: "essai" },
             { fr: "Pas aujourd'hui, mais je pourrais revenir samedi ?", tr: "Bugün değil, ama cumartesi gelebilir miyim?", en: "Not today, but could I come back on Saturday?", ok: true, go: "g" },
             { fr: "Oui, avec plaisir ! Et la séance gratuite, elle coûte combien ?", tr: "Evet, memnuniyetle! Ücretsiz seans ne kadar tutuyor?", en: "Yes, with pleasure! And the free session, how much does it cost?", ok: false,
               fb: { fr: "Bonne nouvelle : « gratuit » = 0 € 🎉. Elle ne coûte rien !", tr: "İyi haber: « gratuit » = 0 € 🎉. Hiçbir şey ödemiyorsunuz!", en: "Good news: « gratuit » = 0 € 🎉. It costs nothing!" } }
           ] },
      essai: { scene: { fr: "30 minutes de vélo, de rameur et d'abdos. Vous êtes toute rouge, mais contente !", tr: "30 dakika bisiklet, kürek makinesi ve mekik. Kıpkırmızı oldunuz ama mutlusunuz!", en: "30 minutes of bike, rowing machine and sit-ups. You're bright red, but happy!" },
           say: [["M", "Alors, comment ça s'est passé ?"]],
           choices: [
             { fr: "C'était super ! J'ai eu un peu chaud, mais j'ai adoré.", tr: "Harikaydı! Biraz terledim ama bayıldım.", en: "It was great! I got a bit hot, but I loved it.", ok: true, go: "g" },
             { fr: "C'était super ! J'étais très chaude, mais j'ai adoré.", tr: "Süperdi! Çok ateşliydim, ama bayıldım.", en: "It was great! I was very hot, but I loved it.", ok: false,
               fb: { fr: "Oups 🙈 ! « Être chaude » pour une personne a un sens… pas sportif. On dit « j'ai chaud » / « j'ai eu chaud ».", tr: "Eyvah 🙈! Bir kişi için « être chaude » demek… pek sporla ilgili olmayan bir anlam taşır. « J'ai chaud » / « j'ai eu chaud » denir.", en: "Oops 🙈! « Être chaude » about a person has a meaning that's… not about sport. Say « j'ai chaud » / « j'ai eu chaud »." } },
             { fr: "C'est été super ! J'ai eu un peu chaud.", tr: "Süper olmuştu! Biraz sıcakladım.", en: "It's been great! I got a bit hot.", ok: false,
               fb: { fr: "Pour raconter, on dit « c'était super » ou « ça a été super ». « C'est été » n'existe pas 😉.", tr: "Anlatırken « c'était super » ya da « ça a été super » denir. « C'est été » diye bir şey yok 😉.", en: "To describe it, say « c'était super » or « ça a été super ». « C'est été » doesn't exist 😉." } }
           ] },
      g: { say: [["M", "Super ! Alors, vous avez choisi votre formule ?"]],
           choices: [
             { fr: "Je vais prendre la formule sans engagement : je vais peut-être déménager.", tr: "Taahhütsüz paketi alacağım: belki taşınacağım.", en: "I'll take the no-contract plan: I might move.", ok: true, go: "h" },
             { fr: "Je vais prendre la formule à 29 €, avec engagement. Je suis motivée !", tr: "29 €'luk taahhütlü üyeliği alacağım. Çok hevesliyim!", en: "I'll take the 29 € plan with commitment. I'm motivated!", ok: true, go: "h" },
             { fr: "Je vais prendre la formule à 39 €, avec engagement : c'est la moins chère.", tr: "Taahhütlü 39 €'luk paketi alacağım: en ucuzu o.", en: "I'll take the €39 plan, with a contract: it's the cheapest.", ok: false,
               fb: { fr: "Attention aux chiffres : 39 € > 29 € 😄. La formule à 39 € est la plus chère (mais sans engagement).", tr: "Rakamlara dikkat: 39 € > 29 € 😄. 39 €'luk seçenek en pahalısı (ama taahhütsüz).", en: "Watch the numbers: 39 € > 29 € 😄. The 39 € plan is the most expensive one (but no commitment)." } }
           ] },
      h: { say: [["M", "Très bien. Pour l'inscription, il me faut une pièce d'identité, un RIB pour le prélèvement et 20 € de frais d'inscription."]],
           choices: [
             { fr: "Voici mon passeport et mon RIB. Je peux payer les 20 € par carte ?", tr: "İşte pasaportum ve IBAN belgem. 20 €'yu kartla ödeyebilir miyim?", en: "Here's my passport and my bank details. Can I pay the 20 € by card?", ok: true, go: "i" },
             { fr: "Voici mon passeport. Le RIB, je vous l'ai apporté demain.", tr: "İşte pasaportum. IBAN belgesini size yarın getirdim.", en: "Here's my passport. The bank details, I brought them tomorrow.", ok: false,
               fb: { fr: "Demain = futur : « je vous l'apporterai demain ». Le passé composé ne voyage pas dans le futur 😄.", tr: "Yarın = gelecek zaman: « je vous l'apporterai demain ». Geçmiş zaman geleceğe yolculuk yapamaz 😄.", en: "Tomorrow = future: « je vous l'apporterai demain ». The passé composé can't time-travel 😄." } },
             { fr: "Voici mon passeport et mon RIB. Les 20 €, je les paie chaque semaine ?", tr: "Pasaportum ve IBAN belgem burada. 20 €'yu her hafta mı ödüyorum?", en: "Here's my passport and bank details. Do I pay the €20 every week?", ok: false,
               fb: { fr: "Heureusement non 😅 ! Les frais d'inscription, on les paie une seule fois, au début.", tr: "Neyse ki hayır 😅! Kayıt ücreti sadece bir kez, başta ödenir.", en: "Luckily not 😅! The sign-up fee is paid only once, at the start." } }
           ] },
      i: { say: [["M", "Pas de souci. Voilà votre carte de membre ! La salle est ouverte de 6 h à 23 h, 7 jours sur 7."]],
           choices: [
             { fr: "Parfait, merci ! À samedi pour le cours de renforcement !", tr: "Mükemmel, teşekkürler! Cumartesi kas güçlendirme dersinde görüşürüz!", en: "Perfect, thanks! See you on Saturday for the strength class!", ok: true, go: "fin" },
             { fr: "Merci beaucoup ! Je reviendrai demain matin, avant mon cours.", tr: "Çok teşekkürler! Yarın sabah dersimden önce geleceğim.", en: "Thank you very much! I'll come back tomorrow morning, before my class.", ok: true, go: "fin" },
             { fr: "Merci ! Alors je viendrai tous les jours, de 23 h à 6 h du matin.", tr: "Teşekkürler! O zaman her gün gece 23'ten sabah 6'ya kadar geleceğim.", en: "Thanks! Then I'll come every day, from 11 p.m. to 6 a.m.", ok: false,
               fb: { fr: "La nuit, la salle dort 🌙😄 ! Elle est ouverte de 6 h à 23 h, pas l'inverse.", tr: "Gece salon uyuyor 🌙😄! 6.00'dan 23.00'e kadar açık, tersi değil.", en: "At night the gym sleeps 🌙😄! It's open from 6 am to 11 pm, not the other way round." } }
           ] },
      fin: { end: "win",
           say: [["M", "Bienvenue au club ! Et on a aussi une équipe de handball loisir le mercredi soir… si ça vous tente 😉"]],
           scene: { fr: "Bravo ! Vous avez comparé les offres, posé les bonnes questions… et vous savez dire « j'ai chaud » sans rougir 🏋️🎉", tr: "Bravo! Seçenekleri karşılaştırdınız, doğru soruları sordunuz… ve artık kızarmadan « j'ai chaud » demeyi biliyorsunuz 🏋️🎉", en: "Well done! You compared the plans, asked the right questions… and you can say « j'ai chaud » without blushing 🏋️🎉" } }
    } }
);
