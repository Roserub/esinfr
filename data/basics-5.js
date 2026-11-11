/* Basics, part 5: the imperative, c'est vs il est, cities and countries (à, en, au, aux), and time expressions (depuis, il y a, pendant, dans). Loads right after data/basics-4.js. */
(function () {
  // item line: "fr|tr|en" or "fr|tr|en|say" or "fr|tr|en|say|ex". say = what the French voice reads (default: fr, leave empty to keep default). ex = optional short French example (word or phrase) also read aloud.
  const I = s => s.trim().split("\n").map(l => { const [fr, tr, en, say, ex] = l.split("|").map(x => x.trim()); return { fr, tr, en, say: say || "", ex: ex || "" }; });
  const G = (fr, tr, en, items, tip) => ({ t: { fr, tr, en }, items: I(items), tip: tip || null });
  window.BASICS = window.BASICS || [];
  window.BASICS.push(

    /* ───────────── 41. The imperative ───────────── */
    { id: "imperative", emoji: "📣", kind: "words", t: { fr: "L'impératif : donner un conseil, un ordre", tr: "Emir kipi: öğüt vermek, rica etmek", en: "The imperative: giving advice and instructions" },
      intro: {
        fr: "Écoute ! Entrez ! Allons-y ! L'impératif sert à donner un conseil, une consigne ou un ordre gentil. Bonne nouvelle : c'est une forme très courte. On enlève le sujet, et c'est fini !",
        tr: "Écoute ! Entrez ! Allons-y ! Emir kipi öğüt, talimat ya da kibar bir rica için kullanılır. Türkçede emir çok kolaydır: fiil kökü yeter (bak!, gel!), kibarı için '-in' eklenir (bakın!, gelin!), birlikte yapmak için '-elim' (bakalım!). Fransızcada da mantık aynı: özne düşer ve üç biçim kalır: tu (bak), vous (bakın), nous (bakalım). Çok kısa ve pratik bir kip!",
        en: "Écoute ! Entrez ! Allons-y ! The imperative is for advice, instructions or friendly orders. Good news: it's a very short form. Drop the subject and you're done! There are three forms: tu, vous and nous (let's…)."
      },
      groups: [
        G("Les verbes réguliers", "Düzenli fiiller", "Regular verbs", `
Écoute !|Dinle!|Listen! (informal)||Écoute, c'est important.
Écoutez !|Dinleyin!|Listen! (formal or plural)||Écoutez bien la question.
Écoutons !|Dinleyelim!|Let's listen!
Regarde !|Bak!|Look! (informal)||Regarde, il neige !
Regardez l'écran.|Ekrana bakın.|Look at the screen.
Mange !|Ye!|Eat! (informal)||Mange ta soupe.
Mangeons ensemble !|Birlikte yiyelim!|Let's eat together!
Entrez, je vous en prie.|Buyurun, girin.|Come in, please.
Attends !|Bekle!|Wait! (informal)||Attends-moi !
Attendez ici.|Burada bekleyin.|Wait here.
Choisis une couleur.|Bir renk seç.|Choose a colour. (informal)
Finissez l'exercice.|Alıştırmayı bitirin.|Finish the exercise.`, {
          fr: "Pour les verbes en -er, la forme « tu » perd son « s » : tu manges → Mange ! tu regardes → Regarde ! Pour les autres verbes, on garde le « s » : tu attends → Attends !",
          tr: "-er ile biten fiillerde 'tu' biçimi sondaki 's' harfini kaybeder: tu manges → Mange ! (ye!). Diğer fiillerde 's' kalır: tu attends → Attends ! (bekle!). Telaffuzda fark yok, sadece yazarken dikkat. 'Nous' biçimi Türkçedeki '-elim' ekinin tam karşılığı: Mangeons ! = Yiyelim!",
          en: "For -er verbs, the « tu » form loses its « s »: tu manges → Mange ! For other verbs the « s » stays: tu attends → Attends ! The « nous » form means 'let's': Mangeons ! = Let's eat!"
        }),
        G("Les verbes irréguliers", "Düzensiz fiiller", "Irregular verbs", `
Sois gentil !|Uslu ol! / Nazik ol!|Be good! Be nice! (informal)||Sois sage avec mamie.
Soyez à l'heure.|Zamanında gelin.|Be on time.
Aie confiance !|Güven bana! / Kendine güven!|Have confidence! Trust me!||Aie confiance en toi.
Ayez votre carte prête.|Kartınızı hazır bulundurun.|Have your card ready.
Va au lit !|Yatağa git!|Go to bed! (informal)
Vas-y !|Hadi! / Haydi git!|Go on! Go for it! (informal)
Allons-y !|Hadi gidelim!|Let's go!
Fais attention !|Dikkat et!|Be careful! (informal)
Faites attention à la marche.|Basamağa dikkat edin.|Mind the step.
Viens ici !|Buraya gel!|Come here! (informal)
Venez avec nous.|Bizimle gelin.|Come with us.
Prends ton temps.|Acele etme, rahat ol.|Take your time. (informal)
Dis-moi.|Söyle bana.|Tell me. (informal)`, {
          fr: "Être et avoir ont des formes spéciales : sois, soyez, soyons / aie, ayez, ayons. « Va » n'a pas de « s »… sauf dans « Vas-y ! », pour la liaison avec « y ».",
          tr: "Être ve avoir fiillerinin emir biçimleri özeldir: sois, soyez (ol, olun) / aie, ayez (sahip ol, olun). 'Va' (git) 's' almaz, ama 'Vas-y !' (hadi!) içinde 'z' sesi için 's' geri gelir. 'Vas-y !' maçta, sınavda, her yerde cesaret vermek için kullanılır, tıpkı bizim 'Hadi, yaparsın!' gibi.",
          en: "Être and avoir have special forms: sois, soyez, soyons / aie, ayez, ayons. « Va » has no « s »… except in « Vas-y ! », for the liaison with « y ». « Vas-y ! » is also what you shout to cheer someone on."
        }),
        G("Dire « ne… pas »", "Olumsuz emir", "Negative instructions", `
Ne touche pas !|Dokunma!|Don't touch! (informal)
Ne cours pas dans le couloir.|Koridorda koşma.|Don't run in the corridor.
N'oubliez pas votre serviette.|Havlunuzu unutmayın.|Don't forget your towel.
N'aie pas peur.|Korkma.|Don't be afraid. (informal)
Ne bougez pas.|Kıpırdamayın.|Don't move.
Ne parlez pas trop vite, s'il vous plaît.|Lütfen çok hızlı konuşmayın.|Please don't speak too fast.
Ne t'inquiète pas.|Merak etme. / Endişelenme.|Don't worry. (informal)
Ne vous inquiétez pas.|Merak etmeyin. / Endişelenmeyin.|Don't worry. (formal)
N'hésitez pas à demander.|Sormaktan çekinmeyin.|Don't hesitate to ask.`, {
          fr: "« Ne… pas » entoure le verbe, comme d'habitude : Ne touche pas ! À l'oral, on entend souvent juste « Touche pas ! », mais à l'écrit, gardez le « ne ».",
          tr: "Türkçede olumsuz emir tek bir ekle yapılır: dokun → dokunMA. Fransızcada 'ne… pas' fiili iki taraftan sarar: Ne touche pas ! Konuşmada 'ne' çoğu zaman yutulur ('Touche pas !'), ama yazarken mutlaka kullanın. 'Ne vous inquiétez pas' bir hastaya ya da müşteriye söylenecek en güzel cümlelerden biri.",
          en: "« Ne… pas » goes around the verb as usual: Ne touche pas ! In speech people often drop « ne » (« Touche pas ! »), but keep it in writing."
        }),
        G("Avec moi, toi, nous, vous", "Moi, toi, nous, vous ile", "With moi, toi, nous, vous", `
Assieds-toi.|Otur.|Sit down. (informal)
Asseyez-vous, je vous en prie.|Buyurun, oturun.|Please sit down.
Lève-toi !|Kalk!|Get up! (informal)
Dépêche-toi !|Acele et! / Çabuk ol!|Hurry up! (informal)
Dépêchons-nous !|Acele edelim!|Let's hurry!
Repose-toi bien.|İyice dinlen.|Get some good rest. (informal)
Excusez-moi.|Affedersiniz.|Excuse me.
Appelle-moi ce soir.|Bu akşam beni ara.|Call me tonight. (informal)
Aidez-moi, s'il vous plaît !|Yardım edin lütfen!|Help me, please!
Donnez-moi deux baguettes.|Bana iki baget verin.|Give me two baguettes.`, {
          fr: "À l'impératif positif, le petit pronom va après le verbe, avec un tiret, et « me / te » deviennent « moi / toi » : tu te lèves → Lève-toi ! vous m'aidez → Aidez-moi !",
          tr: "Olumlu emirde küçük zamir fiilden SONRA gelir, araya tire konur; 'me / te' de 'moi / toi' olur: tu te lèves → Lève-toi ! (kalk!), vous m'aidez → Aidez-moi ! (yardım edin!). Türkçede zaten 'bana yardım edin' ya da 'kalk' deriz; Fransızcada sadece sırayı ezberlemek yeterli.",
          en: "In positive commands the small pronoun goes after the verb, with a hyphen, and « me / te » become « moi / toi »: tu te lèves → Lève-toi ! vous m'aidez → Aidez-moi !"
        }),
        G("À la salle de sport", "Spor salonunda", "At the gym", `
Pliez les genoux.|Dizlerinizi bükün.|Bend your knees.
Levez les bras.|Kollarınızı kaldırın.|Raise your arms.
Tendez la jambe.|Bacağınızı uzatın (gerin).|Stretch your leg out.
Gardez le dos droit.|Sırtınızı dik tutun.|Keep your back straight.
Inspirez…|Nefes alın…|Breathe in…
Expirez…|Nefes verin…|Breathe out…
Tenez dix secondes.|On saniye tutun.|Hold for ten seconds.
Relâchez.|Gevşeyin.|Relax. Let go.
Recommencez.|Tekrar edin.|Do it again.
Allongez-vous sur le dos.|Sırtüstü uzanın.|Lie down on your back.
Tournez doucement la tête.|Başınızı yavaşça çevirin.|Turn your head slowly.`, {
          fr: "Au cours de sport et chez le kiné, on entend l'impératif avec « vous » tout le temps. Si le coach dit « on y va ! », c'est comme « allons-y ! ».",
          tr: "Spor derslerinde ve kinede (fizyoterapistte) talimatlar hep 'vous' emir kipiyle verilir. Esin bunları zaten Türkçede her gün söylemişti: 'Dizlerinizi bükün, nefes verin…' Şimdi aynı cümleler Fransızca! Antrenör 'On y va !' derse, 'Allons-y !' ile aynı anlam: hadi başlayalım.",
          en: "In sports classes and at the physio's, instructions always use the « vous » imperative. If the coach says « On y va ! », it means the same as « Allons-y ! »: let's go."
        })
      ] },

    /* ───────────── 42. C'est or il est ───────────── */
    { id: "cestilest", emoji: "🎭", kind: "words", t: { fr: "C'est ou il est ?", tr: "C'est mi, il est mi?", en: "C'est or il est?" },
      intro: {
        fr: "« C'est un kiné » ou « Il est kiné » ? Les deux sont justes ! Mais on ne peut pas mélanger n'importe comment. La règle simple : un article (un, le, mon…) après ? C'est. Juste un adjectif pour une personne ? Il est, elle est.",
        tr: "'C'est un kiné' mi, 'Il est kiné' mi? İkisi de doğru! Türkçede tek yapı var: 'O kine', 'Bu güzel', '-dır' eki her şeye uyar. Fransızcada ise iki seçenek var ve karıştırılmamalı. Basit kural: arkadan artikel (un, le, mon…) + isim geliyorsa → c'est. Bir kişi için sadece sıfat ya da meslek geliyorsa → il est / elle est.",
        en: "« C'est un kiné » or « Il est kiné »? Both are correct! But you can't mix them freely. The simple rule: an article (un, le, mon…) comes next? C'est. Just an adjective about a person? Il est, elle est."
      },
      groups: [
        G("C'est + un nom", "C'est + isim", "C'est + a noun", `
Qui est-ce ?|Bu kim?|Who is it? Who's that?
C'est Sophie.|Bu Sophie.|It's Sophie. That's Sophie.
C'est ma sœur.|Bu benim kız kardeşim.|This is my sister.
C'est un ami.|Bu bir arkadaş.|He's a friend.
C'est le directeur.|Bu müdür.|That's the manager.
Ce sont mes collègues.|Bunlar iş arkadaşlarım.|These are my colleagues.
Qu'est-ce que c'est ?|Bu ne?|What is it?
C'est un tapis de yoga.|Bu bir yoga matı.|It's a yoga mat.
C'est une bonne idée !|Bu iyi bir fikir!|That's a good idea!
C'est moi !|Benim!|It's me!`, {
          fr: "Devant un nom avec un petit mot (un, une, le, la, mon, ma, ce…) ou un prénom, on dit « c'est ». Au pluriel : « ce sont » (mais à l'oral, beaucoup de Français disent « c'est » aussi).",
          tr: "Önünde küçük bir kelime (un, une, le, la, mon, ma…) olan bir isimden ya da bir özel isimden önce 'c'est' kullanılır: C'est Sophie (Bu Sophie), C'est ma sœur (Bu kız kardeşim). Çoğulda 'ce sont' (ama konuşmada birçok Fransız yine 'c'est' der). Kapıyı çalan siz olunca: C'est moi ! = Benim!",
          en: "Before a noun with a small word (un, une, le, la, mon, ma, ce…) or before a name, use « c'est ». Plural: « ce sont » (though many French people say « c'est » in speech)."
        }),
        G("Il est, elle est + adjectif", "Il est / elle est + sıfat", "Il est, elle est + adjective", `
Il est grand.|O uzun boylu.|He's tall.
Elle est gentille.|O çok nazik.|She's kind.
Il est fatigué.|O yorgun.|He's tired.
Elle est turque.|O Türk.|She's Turkish.
Ils sont sympas.|Onlar çok cana yakın.|They're nice.
Elles sont contentes.|Onlar memnun (kadınlar).|They're happy (women).
Elle est en retard.|O geç kaldı.|She's late.
Il est malade.|O hasta.|He's ill.`, {
          fr: "Pour décrire une personne (ou une chose déjà nommée) avec un adjectif, on dit « il est / elle est ». L'adjectif s'accorde : il est fatigué, elle est fatiguée.",
          tr: "Bir kişiyi (ya da daha önce adı geçen bir şeyi) sıfatla anlatırken 'il est / elle est' kullanılır. Türkçede 'o' kadın mı erkek mi belli değildir; Fransızcada hem zamir hem sıfat cinsiyete uyar: il est fatigué / elle est fatiguée. Uyruk sıfatı küçük harfle yazılır: elle est turque.",
          en: "To describe a person (or a thing already mentioned) with an adjective, use « il est / elle est ». The adjective agrees: il est fatigué, elle est fatiguée. Nationality adjectives take no capital letter."
        }),
        G("Les métiers et les nationalités", "Meslekler ve uyruklar", "Jobs and nationalities", `
Il est kiné.|O fizyoterapist.|He's a physio.
C'est un kiné.|Bu bir fizyoterapist.|He's a physio.
C'est un très bon kiné.|Çok iyi bir fizyoterapist.|He's a very good physio.
Elle est infirmière.|O hemşire.|She's a nurse.
C'est une infirmière.|Bu bir hemşire.|She's a nurse.
Elle est étudiante en STAPS.|O STAPS öğrencisi.|She's a sports science student.
Il est français.|O Fransız.|He's French.
C'est un Français.|Bu bir Fransız.|He's a Frenchman.
Je suis turque.|Türküm (kadın).|I'm Turkish (woman).`, {
          fr: "Deux façons correctes : « Il est kiné » (sans article) ou « C'est un kiné » (avec article). Jamais « Il est un kiné » ! Avec un adjectif en plus, on prend « c'est » : c'est un très bon kiné.",
          tr: "İki doğru yol var: 'Il est kiné' (artikelsiz) ya da 'C'est un kiné' (artikelli). Asla 'Il est un kiné' denmez; bu, Türk ve İngilizce konuşanların en sık hatası (İngilizcedeki 'He is a physio' yüzünden). Meslek bir sıfatla gelirse 'c'est' gerekir: C'est un très bon kiné. Dikkat: 'un Français' isim olduğu için büyük harfle yazılır.",
          en: "Two correct ways: « Il est kiné » (no article) or « C'est un kiné » (with article). Never « Il est un kiné », even though English says 'he is a physio'! With an extra adjective, use « c'est »: c'est un très bon kiné."
        }),
        G("C'est + adjectif : une situation", "C'est + sıfat: bir durum", "C'est + adjective: a situation", `
C'est bon !|Bu lezzetli! / Tamam!|It's tasty! / OK, fine!
C'est cher.|Pahalı.|It's expensive.
C'est gratuit.|Ücretsiz.|It's free.
C'est facile.|Kolay.|It's easy.
C'est difficile.|Zor.|It's difficult.
C'est génial !|Harika!|That's great!
C'est fermé.|Kapalı.|It's closed.
C'est loin ?|Uzak mı?|Is it far?
C'est normal.|Normal, olağan.|That's normal.
Ce n'est pas grave.|Önemli değil. / Sorun değil.|It doesn't matter. No problem.|Ce n'est pas grave, ou c'est pas grave.`, {
          fr: "Pour parler d'une situation, d'une idée ou d'une chose en général, on dit « c'est » + adjectif masculin : La ville ? C'est beau ! Mais pour une chose précise : La robe ? Elle est belle.",
          tr: "Genel bir durum, fikir ya da şey için 'c'est' + eril sıfat kullanılır: Paris ? C'est beau ! (Paris mi? Güzel!). Sıfat hiç değişmez. Belirli bir nesneyi anlatırken ise 'il / elle est': La robe ? Elle est belle. Konuşmada 'Ce n'est pas grave' genelde 'C'est pas grave' olarak söylenir; Türkçedeki 'Önemli değil' kadar sık!",
          en: "For a situation, an idea or things in general, use « c'est » + masculine adjective: Paris ? C'est beau ! But for a specific thing: La robe ? Elle est belle. In speech, « Ce n'est pas grave » is usually « C'est pas grave »."
        }),
        G("L'heure et le jour", "Saat ve gün", "Time and day", `
Il est quelle heure ?|Saat kaç?|What time is it?
Il est huit heures et demie.|Saat sekiz buçuk.|It's half past eight.
Il est midi.|Saat öğlen on iki.|It's noon.
Il est tard.|Geç oldu.|It's late.
Il est tôt.|Erken.|It's early.
C'est l'heure !|Vakit geldi!|It's time!
C'est l'heure de partir.|Gitme vakti.|It's time to go.
C'est lundi aujourd'hui.|Bugün pazartesi.|It's Monday today.
C'est mon anniversaire !|Bugün benim doğum günüm!|It's my birthday!`, {
          fr: "Pour l'heure, c'est toujours « il est » : il est dix heures, il est tard. Pour le jour ou un événement, on dit « c'est » (ou « on est » : on est lundi).",
          tr: "Saat söylerken hep 'il est' kullanılır: il est dix heures (saat on), il est tard (geç oldu). Buradaki 'il' bir kişi değil, Türkçede karşılığı olmayan boş bir özne. Gün ya da olay için 'c'est' (veya 'on est'): c'est lundi / on est lundi (bugün pazartesi).",
          en: "For the time, always « il est »: il est dix heures, il est tard. Here « il » is an empty subject, like 'it'. For the day or an event, use « c'est » (or « on est »: on est lundi)."
        })
      ] },

    /* ───────────── 43. Cities and countries ───────────── */
    { id: "countries", emoji: "🌍", kind: "words", t: { fr: "Villes et pays : à, en, au, aux", tr: "Şehirler ve ülkeler: à, en, au, aux", en: "Cities and countries: à, en, au, aux" },
      intro: {
        fr: "J'habite à Lyon, en France. Léa vit au Canada, et Karim aux États-Unis. Pour les villes et les pays, le français utilise plusieurs petits mots. Avec deux ou trois règles, vous ne vous tromperez presque plus !",
        tr: "J'habite à Lyon, en France. Türkçede şehir de ülke de aynı eki alır: İstanbul'da, Türkiye'de. Fransızcada şehirler için 'à', ülkeler için ise ülkenin cinsiyetine göre 'en, au' ya da 'aux' kullanılır. İyi haber: Türkçedeki '-de' ve '-e' ekleri için aynı edat geçerli: J'habite en France (Fransa'da yaşıyorum), je vais en France (Fransa'ya gidiyorum). İki üç kuralla neredeyse hiç hata yapmayacaksınız!",
        en: "J'habite à Lyon, en France. For cities and countries French uses several small words. Good news: the same word means both 'in' and 'to': j'habite en France, je vais en France. With two or three rules, you'll hardly ever get it wrong!"
      },
      groups: [
        G("À + une ville", "À + şehir", "À + a city", `
à Paris|Paris'te, Paris'e|in Paris, to Paris||Je vais à Paris demain.
J'habite à Lyon.|Lyon'da oturuyorum.|I live in Lyon.
Je suis née à Istanbul.|İstanbul'da doğdum (kadın).|I was born in Istanbul (woman).
Elle travaille à Marseille.|Marsilya'da çalışıyor.|She works in Marseille.
Nous allons à Nice cet été.|Bu yaz Nice'e gidiyoruz.|We're going to Nice this summer.
Il est à Lille pour le travail.|İş için Lille'de.|He's in Lille for work.
Ils vivent à Strasbourg.|Strazburg'da yaşıyorlar.|They live in Strasbourg.
au Havre|Le Havre'da, Le Havre'a|in / to Le Havre||Paul habite au Havre.`, {
          fr: "Pour une ville, c'est presque toujours « à » : à Paris, à Ankara, à Tokyo. Petite exception : les villes avec « le » dans le nom : Le Havre → au Havre, Le Mans → au Mans.",
          tr: "Şehirler için neredeyse hep 'à': à Paris, à Ankara, à Tokyo. Hem '-de' hem '-e' anlamına gelir: J'habite à Paris (Paris'te oturuyorum) / Je vais à Paris (Paris'e gidiyorum). Küçük istisna: adında 'Le' olan şehirler: Le Havre → au Havre, Le Mans → au Mans.",
          en: "For a city it's almost always « à », meaning both 'in' and 'to': à Paris, à Ankara. Small exception: cities with « Le » in the name: Le Havre → au Havre, Le Mans → au Mans."
        }),
        G("En + un pays féminin", "En + dişil ülke", "En + a feminine country", `
en France|Fransa'da, Fransa'ya|in France, to France||J'habite en France depuis un an.
en Turquie|Türkiye'de, Türkiye'ye|in Turkey, to Turkey||Ma famille est en Turquie.
en Allemagne|Almanya'da, Almanya'ya|in Germany, to Germany
en Espagne|İspanya'da, İspanya'ya|in Spain, to Spain
en Italie|İtalya'da, İtalya'ya|in Italy, to Italy
en Belgique|Belçika'da, Belçika'ya|in Belgium, to Belgium
en Suisse|İsviçre'de, İsviçre'ye|in Switzerland, to Switzerland
en Grèce|Yunanistan'da, Yunanistan'a|in Greece, to Greece
en Angleterre|İngiltere'de, İngiltere'ye|in England, to England
en Iran|İran'da, İran'a|in Iran, to Iran||Elle part en Iran en mai.`, {
          fr: "Les pays qui finissent par -e sont presque tous féminins : la France, la Turquie, l'Italie → en. On dit aussi « en » devant un pays masculin qui commence par une voyelle : l'Iran → en Iran.",
          tr: "-e harfiyle biten ülkelerin neredeyse hepsi dişildir: la France, la Turquie, l'Italie → en. Ünlüyle başlayan eril ülkelerde de 'en' kullanılır, çünkü söylemesi daha kolay: l'Iran → en Iran. Kısacası: 'Türkiye'de' de 'Türkiye'ye' de → en Turquie.",
          en: "Countries ending in -e are almost all feminine: la France, la Turquie, l'Italie → en. « En » is also used before a masculine country starting with a vowel: l'Iran → en Iran."
        }),
        G("Au + un pays masculin", "Au + eril ülke", "Au + a masculine country", `
au Maroc|Fas'ta, Fas'a|in Morocco, to Morocco||Ses parents vivent au Maroc.
au Canada|Kanada'da, Kanada'ya|in Canada, to Canada
au Portugal|Portekiz'de, Portekiz'e|in Portugal, to Portugal
au Japon|Japonya'da, Japonya'ya|in Japan, to Japan
au Brésil|Brezilya'da, Brezilya'ya|in Brazil, to Brazil
au Sénégal|Senegal'de, Senegal'e|in Senegal, to Senegal
au Danemark|Danimarka'da, Danimarka'ya|in Denmark, to Denmark
au Mexique|Meksika'da, Meksika'ya (istisna: -e ama eril)|in Mexico, to Mexico (exception: ends in -e but masculine)
au Cambodge|Kamboçya'da, Kamboçya'ya (istisna)|in Cambodia, to Cambodia (exception)`, {
          fr: "Les pays masculins (le Maroc, le Canada, le Japon) prennent « au » (= à + le). Attention aux exceptions : le Mexique, le Cambodge finissent par -e mais sont masculins.",
          tr: "Eril ülkeler (le Maroc, le Canada, le Japon) 'au' alır (à + le = au). Genelde -e ile bitmezler. Birkaç istisna var: le Mexique ve le Cambodge -e ile biter ama erildir → au Mexique. Emin değilseniz telefonda 'le' ya da 'la' ile ülke adını arayın.",
          en: "Masculine countries (le Maroc, le Canada, le Japon) take « au » (= à + le). Watch the exceptions: le Mexique and le Cambodge end in -e but are masculine."
        }),
        G("Aux, continents et régions", "Aux, kıtalar ve bölgeler", "Aux, continents and regions", `
aux États-Unis|ABD'de, ABD'ye|in / to the United States||Le cousin de Léa travaille aux États-Unis.
aux Pays-Bas|Hollanda'da, Hollanda'ya|in / to the Netherlands
aux Philippines|Filipinler'de, Filipinler'e|in / to the Philippines
en Europe|Avrupa'da, Avrupa'ya|in / to Europe
en Asie|Asya'da, Asya'ya|in / to Asia
en Afrique|Afrika'da, Afrika'ya|in / to Africa
en Bretagne|Bretanya'da, Bretanya'ya|in / to Brittany||On part en Bretagne en août.
en Normandie|Normandiya'da, Normandiya'ya|in / to Normandy
à la campagne|kırsalda, köyde|in / to the countryside
à la montagne|dağda, dağa|in / to the mountains
à la mer|denizde, denize (deniz kenarında)|at / to the seaside`, {
          fr: "Pays au pluriel → « aux » (attention à la liaison : aux‿États-Unis). Les continents et la plupart des régions françaises sont féminins → « en ». Et pour les vacances : à la mer, à la montagne, à la campagne.",
          tr: "Çoğul ülkeler 'aux' alır; ünlüden önce bağlantı yapılır: 'o-ze-ta-zü-ni' (aux États-Unis). Kıtalar ve Fransız bölgelerinin çoğu dişildir → en Europe, en Bretagne. Tatil için: à la mer (deniz kenarına), à la montagne (dağa), à la campagne (kırlara).",
          en: "Plural countries → « aux » (with liaison: aux‿États-Unis). Continents and most French regions are feminine → « en ». And for holidays: à la mer, à la montagne, à la campagne."
        }),
        G("Venir de… : d'où venez-vous ?", "Venir de…: nerelisiniz?", "Venir de…: where are you from?", `
Tu viens d'où ?|Nerelisin? / Nereden geliyorsun?|Where are you from? (informal)
D'où venez-vous ?|Nerelisiniz?|Where are you from? (formal)
Je viens de Turquie.|Türkiye'den geliyorum. / Türkiyeliyim.|I come from Turkey.
Je viens d'Istanbul.|İstanbul'dan geliyorum.|I come from Istanbul.
Elle vient d'Italie.|İtalya'dan geliyor.|She comes from Italy.
Il vient du Maroc.|Fas'tan geliyor.|He comes from Morocco.
Ils viennent des États-Unis.|ABD'den geliyorlar.|They come from the United States.
Je rentre de Lyon ce soir.|Bu akşam Lyon'dan dönüyorum.|I'm coming back from Lyon tonight.`, {
          fr: "Pour l'origine : de + ville ou pays féminin (de Turquie, d'Italie), du + pays masculin (du Maroc), des + pays pluriel (des États-Unis).",
          tr: "Türkçedeki '-den' eki için 'de' kullanılır: şehirler ve dişil ülkeler → de Turquie, d'Istanbul (ünlüden önce d'); eril ülkeler → du Maroc (de + le); çoğul ülkeler → des États-Unis. 'Je viens de Turquie' derken 'la' kullanılmaz: 'de la Turquie' değil!",
          en: "For origin: de + city or feminine country (de Turquie, d'Italie), du + masculine country (du Maroc), des + plural country (des États-Unis). Not « de la Turquie »!"
        })
      ] },

    /* ───────────── 44. Time expressions ───────────── */
    { id: "timeexpr", emoji: "⏳", kind: "words", t: { fr: "Depuis, il y a, pendant, dans", tr: "Depuis, il y a, pendant, dans: zaman ifadeleri", en: "Depuis, il y a, pendant, dans: talking about time" },
      intro: {
        fr: "J'habite en France depuis un an. Je suis arrivée il y a un an. J'ai étudié pendant cinq ans. Je commence dans deux mois. Quatre petits mots pour situer une action dans le temps : très utiles pour parler de votre vie !",
        tr: "J'habite en France depuis un an (Bir yıldır Fransa'da yaşıyorum). Türkçede bu işler eklerle yapılır: '-dır / -den beri', 'önce', 'boyunca', 'sonra'. Fransızcada her biri için küçük bir kelime var: depuis (-dır, -den beri), il y a (önce), pendant (boyunca), dans (sonra). Dikkat: Türkçede 'iki yıl önce' deriz, Fransızcada sıra ters: 'il y a deux ans'. Hayatınızı anlatmak için çok işe yarar!",
        en: "J'habite en France depuis un an. Je suis arrivée il y a un an. Four small words place an action in time: depuis (since, for, still going), il y a (ago), pendant (during, for), dans (in, from now). Very useful for talking about your life!"
      },
      groups: [
        G("Depuis : ça continue", "Depuis: hâlâ devam ediyor", "Depuis: it's still going on", `
depuis un an|bir yıldır|for a year (and still now)||J'habite en France depuis un an.
depuis trois semaines|üç haftadır|for three weeks (and still now)||Je fais du yoga depuis trois semaines.
depuis lundi|pazartesiden beri|since Monday||Il pleut depuis lundi.
depuis ce matin|bu sabahtan beri|since this morning||J'ai mal au dos depuis ce matin.
depuis 2020|2020'den beri|since 2020|depuis deux mille vingt|Il joue au handball depuis 2020.
depuis longtemps|uzun zamandır|for a long time||On se connaît depuis longtemps.
depuis quand ?|ne zamandan beri?|since when?||Depuis quand vous avez mal ?
depuis combien de temps ?|ne kadar zamandır?|for how long (so far)?||Depuis combien de temps tu apprends le français ?`, {
          fr: "Avec « depuis », l'action continue maintenant, donc on utilise le présent : J'habite ici depuis un an (et j'habite encore ici). Pas de passé composé !",
          tr: "'Depuis' Türkçedeki '-dır / -den beri' ile birebir aynı ve aynı mantıkla şimdiki zamanla kullanılır: 'Bir yıldır burada yaşıyorum' = J'habite ici depuis un an. İngilizcedeki 'I have lived' yapısını kopyalamayın; Fransızca, Türkçe gibi düşünür! Doktor ya da kine mutlaka sorar: Depuis quand vous avez mal ? (Ne zamandan beri ağrınız var?)",
          en: "With « depuis » the action is still going on, so French uses the present: J'habite ici depuis un an = I have lived here for a year. Don't copy the English present perfect!"
        }),
        G("Il y a : c'est fini", "Il y a: önce (bitti)", "Il y a: ago", `
il y a deux jours|iki gün önce|two days ago||Je suis arrivé il y a deux jours.
il y a une semaine|bir hafta önce|a week ago||Elle a commencé il y a une semaine.
il y a un an|bir yıl önce|a year ago||Nous sommes venus en France il y a un an.
il y a cinq minutes|beş dakika önce|five minutes ago||Le bus est parti il y a cinq minutes.
il y a dix ans|on yıl önce|ten years ago||Il a eu son diplôme il y a dix ans.
il y a longtemps|uzun zaman önce|a long time ago
Tu es arrivée quand ?|Ne zaman geldin? (kadına)|When did you arrive? (to a woman)`, {
          fr: "« Il y a » + durée = une action finie dans le passé, avec le passé composé : Le bus est parti il y a cinq minutes. Ne confondez pas avec « il y a » = « there is » (il y a un café ici).",
          tr: "'Il y a' + süre = Türkçedeki 'önce'; bitmiş bir eylemdir, geçmiş zamanla (passé composé) kullanılır: Le bus est parti il y a cinq minutes (Otobüs beş dakika önce kalktı). Sıraya dikkat: Türkçede 'beş dakika önce', Fransızcada 'il y a cinq minutes'. Bu 'il y a', 'var' anlamındaki 'il y a' ile aynı yazılır; cümleden anlaşılır.",
          en: "« Il y a » + a length of time = 'ago', for a finished action, with the passé composé: Le bus est parti il y a cinq minutes. Same words as « il y a » = 'there is'; context tells you which."
        }),
        G("Pendant : une durée", "Pendant: boyunca", "Pendant: during, for", `
pendant deux heures|iki saat boyunca|for two hours||J'ai couru pendant deux heures.
pendant une semaine|bir hafta boyunca|for a week||Ils sont restés à Nice pendant une semaine.
pendant les vacances|tatil boyunca, tatilde|during the holidays||Pendant les vacances, je dors beaucoup.
pendant le cours|ders sırasında|during the class||On ne mange pas pendant le cours.
pendant le match|maç sırasında|during the match||Il s'est blessé pendant le match.
pendant dix minutes|on dakika boyunca|for ten minutes||Marchez pendant dix minutes.
pendant ce temps|bu arada, o sırada|meanwhile||Pendant ce temps, je prépare le café.`, {
          fr: "« Pendant » donne la durée d'une action, souvent finie (j'ai couru pendant deux heures) ou répétée (pendant les vacances, je dors beaucoup). À l'oral, on l'enlève souvent : j'ai couru deux heures.",
          tr: "'Pendant' Türkçedeki 'boyunca / sırasında' demektir ve bir eylemin ne kadar sürdüğünü söyler: J'ai couru pendant deux heures (İki saat boyunca koştum). Türkçede 'iki saat koştum' da diyebildiğimiz gibi, Fransızcada da konuşurken 'pendant' çoğu zaman düşer: j'ai couru deux heures.",
          en: "« Pendant » gives the length of an action, often finished (j'ai couru pendant deux heures) or repeated (pendant les vacances, je dors beaucoup). In speech it's often dropped: j'ai couru deux heures."
        }),
        G("Dans : dans le futur", "Dans: sonra (gelecekte)", "Dans: in (from now)", `
dans cinq minutes|beş dakika sonra|in five minutes||Le cours commence dans cinq minutes.
dans une heure|bir saat sonra|in an hour||Je te rappelle dans une heure.
dans deux jours|iki gün sonra|in two days||On part en vacances dans deux jours.
dans un mois|bir ay sonra|in a month||L'examen est dans un mois.
dans trois ans|üç yıl sonra|in three years||Dans trois ans, je serai kiné.
dans un instant|birazdan, az sonra|in a moment||Le médecin arrive dans un instant.
en dix minutes|on dakikada (o kadar sürede)|in ten minutes (it took ten minutes)||J'ai fini l'exercice en dix minutes.`, {
          fr: "« Dans » + durée = dans le futur, à partir de maintenant : le cours commence dans cinq minutes. Attention : « en dix minutes » veut dire « il faut dix minutes pour le faire ».",
          tr: "'Dans' + süre = Türkçedeki 'sonra' (şimdiden itibaren): Le cours commence dans cinq minutes (Ders beş dakika sonra başlıyor). Yine sıra ters: 'beş dakika sonra' → 'dans cinq minutes'. 'En' ise işin ne kadar sürdüğünü söyler: J'ai fini en dix minutes (On dakikada bitirdim).",
          en: "« Dans » + a length of time = in the future, from now: le cours commence dans cinq minutes. Careful: « en dix minutes » means 'it takes ten minutes to do it'."
        }),
        G("Petites phrases utiles", "Faydalı küçük cümleler", "Handy little phrases", `
Ça fait longtemps !|Görüşmeyeli çok oldu!|Long time no see!
Ça fait une heure que j'attends.|Bir saattir bekliyorum.|I've been waiting for an hour.
Ça fait combien de temps ?|Ne kadar oldu?|How long has it been?
À dans une semaine !|Bir hafta sonra görüşürüz!|See you in a week!
il y a un instant|az önce|a moment ago||Il était là il y a un instant.
depuis toujours|her zaman, ezelden beri|forever, always (since ever)||Elle adore le sport depuis toujours.
pour une semaine|bir haftalığına|for a week (planned)||Je pars à Nice pour une semaine.`, {
          fr: "« Ça fait… que » = « depuis », très courant à l'oral : Ça fait une heure que j'attends = J'attends depuis une heure. « Pour » s'utilise pour une durée prévue : je pars pour une semaine.",
          tr: "'Ça fait… que' konuşmada 'depuis' ile aynı anlamda çok kullanılır: Ça fait une heure que j'attends = J'attends depuis une heure (Bir saattir bekliyorum). 'Pour' ise planlanan süre için: Je pars pour une semaine (Bir haftalığına gidiyorum). Eski bir arkadaşı görünce: Ça fait longtemps ! (Görüşmeyeli çok oldu!)",
          en: "« Ça fait… que » = « depuis », very common in speech: Ça fait une heure que j'attends. « Pour » is for a planned length of time: je pars pour une semaine."
        })
      ] }
  );
})();
