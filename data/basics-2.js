/* Basics, part 2: articles, questions, prepositions of place, clothes, sport, jobs, shops and connectors. Loads right after data/basics.js. */
(function () {
  // item line: "fr|tr|en" or "fr|tr|en|say" or "fr|tr|en|say|ex". say = what the French voice reads (default: fr, leave empty to keep default). ex = optional short French example (word or phrase) also read aloud.
  const I = s => s.trim().split("\n").map(l => { const [fr, tr, en, say, ex] = l.split("|").map(x => x.trim()); return { fr, tr, en, say: say || "", ex: ex || "" }; });
  const G = (fr, tr, en, items, tip) => ({ t: { fr, tr, en }, items: I(items), tip: tip || null });
  window.BASICS = window.BASICS || [];
  window.BASICS.push(

    /* ───────────── 17. Articles ───────────── */
    { id: "articles", emoji: "📌", kind: "words", t: { fr: "Les articles", tr: "Tanımlıklar (artikeller)", en: "Articles" },
      intro: {
        fr: "Le, la, les, un, une, des : ces petits mots sont partout en français. En turc, il n'y a ni article ni genre, alors c'est nouveau. Pas de panique : on apprend chaque mot avec son article, et ça vient tout seul.",
        tr: "Le, la, les, un, une, des: bu küçük kelimeler Fransızcada her yerde. Türkçede ne artikel ne de dilbilgisel cinsiyet var, bu yüzden yeni bir şey. Panik yok: her kelimeyi artikeliyle birlikte öğrenin, zamanla kendiliğinden oturur.",
        en: "Le, la, les, un, une, des: these little words are everywhere in French. Turkish has no articles and no gender, so this is new. No panic: learn each noun with its article and it will come naturally."
      },
      groups: [
        G("Le, la, les (défini)", "Le, la, les (belirli)", "Le, la, les (definite)", `
le|belirli tanımlık, eril tekil|the (masculine singular)||le livre
la|belirli tanımlık, dişil tekil|the (feminine singular)||la porte
l'|le / la, ünlü veya okunmayan h önünde|le / la before a vowel or silent h|l apostrophe|l'eau, l'hôtel
les|belirli tanımlık, çoğul (eril ve dişil)|the (plural, both genders)||les clés
le sac|çanta (o belli çanta)|the bag
la table|masa (o belli masa)|the table
l'ami|arkadaş (o belli arkadaş)|the friend
les enfants|çocuklar ('le-zanfan' okunur)|the children (said 'lay-zon-fon')`, {
          fr: "« Le » et « la » deviennent « l' » devant une voyelle : on ne dit pas « le ami » mais « l'ami ». Au pluriel, « les » sert pour tout le monde.",
          tr: "Türkçede 'kitap' hem 'bir kitap' hem 'kitap' olabilir; Fransızca ise hep bir artikel ister. Ünlüden önce 'le / la' → 'l'' olur: 'le ami' değil 'l'ami'. Çoğulda tek kelime var: 'les'. Sevindirici!",
          en: "'Le' and 'la' become 'l'' before a vowel: not 'le ami' but 'l'ami'. In the plural, 'les' works for everything."
        }),
        G("Un, une, des (indéfini)", "Un, une, des (belirsiz)", "Un, une, des (indefinite)", `
un|bir (eril)|a, an (masculine)||un café
une|bir (dişil)|a, an (feminine)||une pomme
des|birkaç, bazı (çoğul)|some (plural)||des amis
un stylo|bir kalem|a pen
une voiture|bir araba|a car
des chaussures|ayakkabılar (birkaç)|(some) shoes
J'ai un frère.|Bir erkek kardeşim var.|I have a brother.
Il y a des pommes.|Elmalar var.|There are (some) apples.`, {
          fr: "« Un » et « une » ressemblent au « bir » turc. Mais au pluriel, le français veut encore un mot : « des ». « J'ai des amis » = « Arkadaşlarım var ».",
          tr: "'Un / une' tam Türkçedeki 'bir' gibi. Ama çoğulda bile Fransızca bir kelime ister: 'des'. Türkçede 'elmalar var' deriz, Fransızca 'il y a des pommes' der. 'Des'i '-ler' ekinin yardımcısı gibi düşünün.",
          en: "'Un / une' are like 'a / an'. In the plural French still needs a word, 'des', where English often says nothing: 'I have friends' = « J'ai des amis »."
        }),
        G("Masculin ou féminin ?", "Eril mi dişil mi?", "Masculine or feminine?", `
le soleil|güneş (eril)|the sun (masculine)
la lune|ay (dişil)|the moon (feminine)
la maison|ev (dişil, -tion/-son sonları çoğu zaman dişil)|the house (feminine: -son endings are often feminine)
la natation|yüzme (dişil: -tion hep dişil)|swimming (feminine: -tion is feminine)
le fromage|peynir (eril: -age çoğu zaman eril)|the cheese (masculine: -age is usually masculine)
le changement|değişiklik (eril: -ment eril)|the change (masculine: -ment is masculine)
la plage|plaj (dişil: -age kuralının istisnası!)|the beach (feminine: an -age exception!)
le problème|sorun (eril, -e ile bitse de)|the problem (masculine, despite the -e)`, {
          fr: "Le genre est souvent arbitraire : même les Français hésitent parfois ! Quelques indices aident : -tion = féminin, -ment = masculin, -age = souvent masculin. Le reste, apprenez « le » ou « la » avec le mot.",
          tr: "Cinsiyet çoğu zaman mantıksızdır; Fransızlar bile bazen tereddüt eder! Birkaç ipucu: -tion = dişil, -ment = eril, -age = genelde eril. Gerisi için kelimeyi 'le' ya da 'la' ile birlikte ezberleyin. Yanlış artikel kullansanız da herkes sizi anlar, merak etmeyin.",
          en: "Gender is often arbitrary: even French people hesitate sometimes! A few clues help: -tion = feminine, -ment = masculine, -age = usually masculine. For the rest, learn 'le' or 'la' with the noun. A wrong article never stops people understanding you."
        }),
        G("Du, de la, au, aux", "Du, de la, au, aux", "Du, de la, au, aux", `
du pain|(biraz) ekmek|(some) bread||Je mange du pain.
de la soupe|(biraz) çorba|(some) soup||Je mange de la soupe.
de l'eau|(biraz) su|(some) water||Je bois de l'eau.
au marché|pazara, pazarda (à + le)|to / at the market (à + le)||Je vais au marché.
aux toilettes|tuvalete, tuvalette (à + les)|to / at the toilet (à + les)
pas de café|kahve yok (olumsuz cümlede)|no coffee||Je ne bois pas de café.`, {
          fr: "Pour une quantité qu'on ne compte pas (pain, eau, soupe), on dit « du, de la, de l' ». Et « à + le » devient toujours « au » : je vais au cinéma.",
          tr: "Sayılamayan şeyler için (ekmek, su, çorba) 'du, de la, de l'' kullanılır; Türkçedeki 'biraz' gibi düşünün. 'À + le' her zaman 'au' olur: je vais au cinéma (sinemaya gidiyorum). Olumsuzda hepsi 'de' olur: pas de café.",
          en: "For things you don't count (bread, water, soup), use 'du, de la, de l''. And 'à + le' always becomes 'au': je vais au cinéma. In the negative, they all become 'de': pas de café."
        })
      ] },

    /* ───────────── 18. Questions ───────────── */
    { id: "questions", emoji: "❓", kind: "words", t: { fr: "Poser des questions", tr: "Soru sormak", en: "Asking questions" },
      intro: {
        fr: "Qui, quoi, où, quand, comment, combien, pourquoi : avec ces mots, vous pouvez demander presque tout. Et en français parlé, il suffit souvent de monter la voix à la fin de la phrase !",
        tr: "Kim, ne, nerede, ne zaman, nasıl, kaç, neden: bu kelimelerle neredeyse her şeyi sorabilirsiniz. Üstelik konuşma dilinde çoğu zaman cümlenin sonunda sesi yükseltmek yeterli; tıpkı Türkçede 'mi' demeden soru sormak gibi!",
        en: "Who, what, where, when, how, how much, why: with these words you can ask almost anything. And in spoken French, raising your voice at the end of the sentence is often enough!"
      },
      groups: [
        G("Les mots interrogatifs", "Soru kelimeleri", "Question words", `
qui ?|kim?|who?||Qui est-ce ?
quoi ?|ne?|what?||Tu fais quoi ?
qu'est-ce que… ?|ne…?|what…?||Qu'est-ce que tu manges ?
où ?|nerede? nereye?|where?||Où est la gare ?
d'où ?|nereden?|where from?||Tu viens d'où ?
quand ?|ne zaman?|when?||Tu pars quand ?
comment ?|nasıl?|how?||Comment tu t'appelles ?
combien ?|kaç? ne kadar?|how much? how many?||C'est combien ?
combien de… ?|kaç tane…?|how many…?||Combien de frères ?
pourquoi ?|neden? niçin?|why?||Pourquoi tu ris ?
parce que…|çünkü…|because…||Parce que c'est drôle.
à quelle heure ?|saat kaçta?|at what time?||À quelle heure ?`, {
          fr: "« Où » (avec accent) = le lieu ; « ou » (sans accent) = « ou bien ». Ils se prononcent pareil ! À « pourquoi ? », on répond « parce que… ».",
          tr: "'Où' (aksanlı) = nerede; 'ou' (aksansız) = veya. Okunuşları aynı! 'Pourquoi ?' (neden?) sorusuna 'parce que…' (çünkü…) ile cevap verilir. 'Pour-quoi' kelimesi kelimesine 'ne için' demek, Türkçedeki 'niçin' gibi.",
          en: "'Où' (with accent) = where; 'ou' (no accent) = or. Same sound! You answer 'pourquoi ?' with 'parce que…'."
        }),
        G("Quel, quelle…", "Hangi…", "Which / what…", `
quel ?|hangi? ne? (eril)|which? what? (masculine)||Quel jour ?
quelle ?|hangi? ne? (dişil)|which? what? (feminine)||Quelle heure est-il ?
quels ?|hangi? (eril çoğul)|which? (masculine plural)||Quels sports ?
quelles ?|hangi? (dişil çoğul)|which? (feminine plural)||Quelles couleurs ?
Quel âge as-tu ?|Kaç yaşındasın?|How old are you?
Quelle est ton adresse ?|Adresin ne?|What's your address?
C'est quel numéro ?|Hangi numara?|Which number is it?`, {
          fr: "Quel, quelle, quels, quelles : quatre façons d'écrire, mais une seule prononciation, « kel ». Facile à l'oral !",
          tr: "Quel, quelle, quels, quelles: dört farklı yazım ama tek bir okunuş: 'kel'. Konuşurken hiç düşünmenize gerek yok! Türkçedeki 'hangi' gibi, ama ismin cinsiyetine göre yazılışı değişir.",
          en: "Quel, quelle, quels, quelles: four spellings but only one pronunciation, 'kel'. Easy when speaking!"
        }),
        G("Trois façons de poser une question", "Soru sormanın üç yolu", "Three ways to ask", `
Tu viens ?|Geliyor musun? (sadece ses tonu)|Are you coming? (just intonation)
Est-ce que tu viens ?|Geliyor musun? (est-ce que ile)|Are you coming? (with est-ce que)
Viens-tu ?|Geliyor musun? (resmi, devrik)|Are you coming? (formal, inverted)
Est-ce que c'est loin ?|Uzak mı?|Is it far?
Vous parlez anglais ?|İngilizce konuşuyor musunuz?|Do you speak English?
Est-ce qu'il y a un bus ?|Otobüs var mı?|Is there a bus?
Tu as faim ?|Acıktın mı?|Are you hungry?`, {
          fr: "« Est-ce que » est votre meilleur ami : on le met devant une phrase normale et ça devient une question. Pas besoin de changer l'ordre des mots.",
          tr: "'Est-ce que' sizin en iyi dostunuz: normal bir cümlenin başına koyun, soru olur. Türkçedeki 'mı / mi' ekinin cümle başına gelmiş hali gibi. Günlük konuşmada ise sadece sesi yükseltmek yeter: 'Tu viens ?' ↗",
          en: "'Est-ce que' is your best friend: put it in front of a normal sentence and it becomes a question, no word-order change needed. In everyday speech, just raise your voice: 'Tu viens ?' ↗"
        })
      ] },

    /* ───────────── 19. Places / prepositions ───────────── */
    { id: "places", emoji: "📍", kind: "words", t: { fr: "Où est… ? Les prépositions", tr: "Nerede? Yer edatları", en: "Where is…? Prepositions" },
      intro: {
        fr: "Sur, sous, devant, derrière… Ces petits mots disent où sont les choses. En turc, on ajoute une fin au mot (masanın üstünde) ; en français, on met un mot devant (sur la table).",
        tr: "Sur, sous, devant, derrière… Bu küçük kelimeler eşyaların nerede olduğunu söyler. Türkçede kelimenin sonuna ek getiririz (masanın üstünde); Fransızcada ise kelime öne gelir (sur la table). Sırayı ters düşünün, yeter!",
        en: "Sur, sous, devant, derrière… These little words tell you where things are. They work like English prepositions: sur la table = on the table."
      },
      groups: [
        G("Dessus, dessous, dedans", "Üstünde, altında, içinde", "On, under, in", `
sur|üstünde|on||sur la table
sous|altında|under||sous le lit
dans|içinde|in, inside||dans le sac
devant|önünde|in front of||devant la porte
derrière|arkasında|behind||derrière la maison
entre|arasında|between||entre la gare et la poste
contre|-e dayalı, yaslanmış|against||contre le mur
au-dessus de|yukarısında, üstünde (dokunmadan)|above||au-dessus du lit`, {
          fr: "« Sur » et « sous » se ressemblent beaucoup ! Astuce : sOUs, c'est en dessOUs.",
          tr: "'Sur' (üstünde) ve 'sous' (altında) çok benziyor! Hatırlatıcı: 'sous'daki 'ou' sesi = 'u' → 'alt'. 'Sur' ise 'ü' sesiyle 'üst'. Türkçe kulağınız bu farkı kolayca duyar!",
          en: "'Sur' (on) and 'sous' (under) sound alike! Trick: 'sous' has the 'oo' sound, like 'under' goes low."
        }),
        G("À côté, en face, loin", "Yanında, karşısında, uzakta", "Next to, opposite, far", `
à côté de|yanında|next to||à côté de la banque
en face de|karşısında|opposite||en face de la gare
près de|yakınında|near||près d'ici
loin de|uzağında|far from||loin du centre
au bout de|sonunda|at the end of||au bout de la rue
autour de|etrafında|around||autour de la place
au coin de|köşesinde|on the corner of||au coin de la rue
au milieu de|ortasında|in the middle of||au milieu de la salle`, {
          fr: "Attention : « de + le » devient « du ». On dit « à côté du parc », « loin du centre ». Avec « la », rien ne change : « à côté de la poste ».",
          tr: "Dikkat: 'de + le' → 'du' olur: 'à côté du parc' (parkın yanında), 'loin du centre' (merkezden uzak). 'La' ile değişmez: 'à côté de la poste'. Bu 'de', Türkçedeki tamlama eki '-ın' gibi: parkın yanında.",
          en: "Careful: 'de + le' becomes 'du': « à côté du parc », « loin du centre ». With 'la' nothing changes: « à côté de la poste »."
        }),
        G("Gauche, droite, tout droit", "Sol, sağ, düz", "Left, right, straight on", `
à gauche|solda, sola|on / to the left||Tournez à gauche.
à droite|sağda, sağa|on / to the right||Tournez à droite.
tout droit|dümdüz|straight on||Allez tout droit.
en haut|yukarıda|upstairs, at the top
en bas|aşağıda|downstairs, at the bottom
ici|burada|here
là-bas|orada|over there
Où est mon téléphone ?|Telefonum nerede?|Where is my phone?
Il est sur le canapé.|Kanepenin üstünde.|It's on the sofa.
Les clés sont dans ton sac.|Anahtarlar çantanda.|The keys are in your bag.`, {
          fr: "« Droite » (à droite) et « droit » (tout droit) se ressemblent, mais ce n'est pas la même chose ! « Tout droit » = on ne tourne pas.",
          tr: "'À droite' (sağa) ile 'tout droit' (dümdüz) karıştırılır, ama farklıdır! 'Tout droit' = hiç dönmeden düz git. Yol tarif ederken Fransızlar elleriyle de gösterir, rahat olun.",
          en: "'À droite' (to the right) and 'tout droit' (straight on) look alike but are different! 'Tout droit' = don't turn at all."
        })
      ] },

    /* ───────────── 20. Clothes ───────────── */
    { id: "clothes", emoji: "👕", kind: "words", t: { fr: "Les vêtements", tr: "Giysiler", en: "Clothes" },
      intro: {
        fr: "Les vêtements et les accessoires de tous les jours, pour faire du shopping ou dire ce que vous portez. Avec « je porte… », vous pouvez décrire votre tenue.",
        tr: "Günlük giysiler ve aksesuarlar: alışveriş yapmak ya da ne giydiğinizi söylemek için. 'Je porte…' (… giyiyorum) ile kıyafetinizi anlatabilirsiniz.",
        en: "Everyday clothes and accessories, for shopping or saying what you're wearing. With « je porte… » you can describe your outfit."
      },
      groups: [
        G("Les vêtements", "Giysiler", "Clothes", `
un tee-shirt|tişört|a T-shirt
une chemise|gömlek|a shirt
un pull|kazak|a jumper, a sweater
un sweat|sweatshirt|a sweatshirt||un sweat à capuche
une veste|ceket|a jacket
un manteau|palto, mont|a coat
un pantalon|pantolon (tekil!)|trousers (singular in French!)
un jean|kot pantolon|jeans (singular in French!)|un djinn
un short|şort|shorts
une jupe|etek|a skirt
une robe|elbise|a dress
un jogging|eşofman|tracksuit, joggers
un pyjama|pijama|pyjamas`, {
          fr: "« Un pantalon », « un jean », « un short » : en français, c'est un seul objet, donc au singulier.",
          tr: "'Un pantalon', 'un jean', 'un short': Fransızcada tekil. Türkçede de 'bir pantolon' deriz, yani İngilizceden kolay! 'Robe' (elbise) ile 'robe de chambre' (sabahlık) farklı, dikkat.",
          en: "'Un pantalon', 'un jean', 'un short': in French these are singular, unlike English 'trousers', 'jeans', 'shorts'."
        }),
        G("Chaussures et accessoires", "Ayakkabılar ve aksesuarlar", "Shoes & accessories", `
des chaussures|ayakkabılar|shoes
des baskets|spor ayakkabı|trainers, sneakers
des bottes|çizme|boots
des sandales|sandalet|sandals
des chaussettes|çorap|socks
un sac|çanta|a bag
une casquette|kep, siperli şapka|a cap
un chapeau|şapka|a hat
un bonnet|bere|a beanie
une écharpe|atkı|a scarf
des gants|eldiven|gloves
des lunettes|gözlük|glasses
une montre|kol saati|a watch
une ceinture|kemer|a belt`, {
          fr: "« Les baskets » sont les chaussures de sport. On dit « une paire de chaussures » pour deux chaussures.",
          tr: "'Baskets' basketbolla ilgili değil: tüm spor ayakkabılarına denir! İki ayakkabıya 'une paire de chaussures' (bir çift ayakkabı) denir; Türkçedeki 'bir çift' ile aynı mantık.",
          en: "'Baskets' are any trainers, not just for basketball! Two shoes make 'une paire de chaussures' (a pair)."
        }),
        G("Porter, essayer, acheter", "Giymek, denemek, almak", "Wear, try on, buy", `
porter|giymek, takmak (üstünde olmak)|to wear||Je porte un jean.
mettre|giymek (giyinme anı)|to put on||Je mets mon manteau.
enlever|çıkarmak|to take off||J'enlève mes chaussures.
essayer|denemek|to try on||Je peux essayer ?
la taille|beden|size (clothes)||Quelle taille ?
la pointure|ayakkabı numarası|shoe size||Je fais du 38.
trop grand|çok büyük|too big
trop petit|çok küçük|too small
la cabine d'essayage|deneme kabini|fitting room
Aujourd'hui, je porte une robe bleue.|Bugün mavi bir elbise giyiyorum.|Today I'm wearing a blue dress.`, {
          fr: "« Porter » = avoir sur soi ; « mettre » = le geste de s'habiller. Au magasin, on demande : « Je peux essayer ? »",
          tr: "Türkçedeki 'giymek' Fransızcada ikiye ayrılır: 'porter' = üstünde olmak (bugün kot giyiyorum), 'mettre' = giyinme hareketi (montumu giyiyorum). Mağazada: 'Je peux essayer ?' (Deneyebilir miyim?). Ayakkabı numarası için 'taille' değil 'pointure' denir.",
          en: "'Porter' = to be wearing; 'mettre' = the action of putting on. In a shop: « Je peux essayer ? » For shoes, size is 'la pointure', not 'la taille'."
        })
      ] },

    /* ───────────── 21. Sport ───────────── */
    { id: "sport", emoji: "⚽", kind: "words", t: { fr: "Le sport", tr: "Spor", en: "Sport" },
      intro: {
        fr: "Les sports, la salle de sport et les deux verbes magiques : « faire du… » et « jouer au… ». Si vous aimez le sport, ce thème est pour vous !",
        tr: "Spor dalları, spor salonu ve iki sihirli fiil: 'faire du…' ve 'jouer au…'. Sporu seviyorsanız, bu konu tam size göre!",
        en: "Sports, the gym and the two magic verbs: « faire du… » and « jouer au… ». If you love sport, this topic is for you!"
      },
      groups: [
        G("Faire du / de la…", "Faire du / de la… (spor yapmak)", "Faire du / de la… (doing a sport)", `
faire du sport|spor yapmak|to do sport||Je fais du sport.
faire du vélo|bisiklete binmek|to cycle||Je fais du vélo.
faire du yoga|yoga yapmak|to do yoga
faire du footing|koşuya çıkmak|to go jogging
faire de la course à pied|koşu yapmak|to run (as a sport)
faire de la natation|yüzmek (yüzme sporu)|to swim (as a sport)
faire de la musculation|ağırlık çalışmak, fitness yapmak|to do weight training
faire de la danse|dans etmek|to dance
faire de la randonnée|doğa yürüyüşü yapmak|to go hiking
faire de l'escalade|tırmanış yapmak|to go climbing`, {
          fr: "Pour la plupart des sports, on dit « faire du / de la / de l' » + sport. C'est le même « du » que dans « du pain » !",
          tr: "Çoğu spor için 'faire du / de la / de l'' + spor denir. Türkçedeki 'yoga yapmak', 'koşu yapmak' ile aynı mantık: 'faire' = yapmak. Yani zaten bildiğiniz bir yapı!",
          en: "For most sports, use « faire du / de la / de l' » + sport. It's the same 'du' as in 'du pain'!"
        }),
        G("Jouer au…", "Jouer au… (oynamak)", "Jouer au… (playing a game)", `
jouer au football|futbol oynamak|to play football||Il joue au foot.
jouer au handball|hentbol oynamak|to play handball
jouer au basket|basketbol oynamak|to play basketball
jouer au volley|voleybol oynamak|to play volleyball
jouer au tennis|tenis oynamak|to play tennis
jouer aux cartes|kâğıt oynamak|to play cards
une équipe|takım|a team
un match|maç|a match, a game
gagner|kazanmak|to win||On a gagné !
perdre|kaybetmek|to lose
un entraînement|antrenman|a training session
un entraîneur|antrenör|a coach`, {
          fr: "Avec un ballon ou une équipe, on dit souvent « jouer au… » : jouer au handball, jouer au tennis. Pour le reste, « faire du… ».",
          tr: "Top ya da takımla oynanan sporlarda genelde 'jouer au…' denir: jouer au handball (hentbol oynamak). Türkçede de 'futbol oynamak' ama 'yoga yapmak' deriz; Fransızcada da aynı ayrım var. Ama 'faire du handball' da duyarsınız, ikisi de doğru!",
          en: "With a ball or a team, you usually say « jouer au… »: jouer au handball. Otherwise « faire du… ». (You'll also hear « faire du handball », both are fine.)"
        }),
        G("À la salle de sport", "Spor salonunda", "At the gym", `
la salle de sport|spor salonu|the gym
l'accueil|resepsiyon|reception, front desk
l'abonnement|üyelik, abonelik|membership, subscription
le vestiaire|soyunma odası|the changing room
la douche|duş|the shower
le casier|dolap|the locker
le tapis de course|koşu bandı|the treadmill
le vélo d'appartement|kondisyon bisikleti|the exercise bike
les haltères|dambıl|the dumbbells
le tapis|mat|the mat
s'échauffer|ısınmak|to warm up||Je m'échauffe.
s'étirer|esneme yapmak|to stretch||Je m'étire.
une serviette|havlu|a towel
une bouteille d'eau|su şişesi|a bottle of water`, {
          fr: "Avant le sport, on s'échauffe ; après, on s'étire. Bravo si vous le faites déjà !",
          tr: "Spordan önce 'on s'échauffe' (ısınılır), sonra 'on s'étire' (esneme yapılır). Bir fizyoterapist için bu kelimeler altın değerinde! Spor salonu resepsiyonunda en çok 'l'abonnement' (üyelik) ve 'le casier' (dolap) kelimelerini duyarsınız.",
          en: "Before sport you warm up (s'échauffer); after, you stretch (s'étirer). At a gym front desk you'll hear 'l'abonnement' (membership) and 'le casier' (locker) all the time."
        })
      ] },

    /* ───────────── 22. Jobs ───────────── */
    { id: "jobs", emoji: "💼", kind: "words", t: { fr: "Les métiers", tr: "Meslekler", en: "Jobs" },
      intro: {
        fr: "Les métiers, au masculin et au féminin. Pour dire son métier, on dit « je suis » + métier, sans article : « je suis kinésithérapeute », pas « je suis une kinésithérapeute ».",
        tr: "Meslekler, eril ve dişil halleriyle. Mesleğinizi söylerken 'je suis' + meslek, artikel olmadan: 'je suis kinésithérapeute' (fizyoterapistim). Tıpkı Türkçedeki gibi: 'bir' demeden!",
        en: "Jobs, in masculine and feminine forms. To say your job, use « je suis » + job, with no article: « je suis kinésithérapeute », not « je suis une kinésithérapeute »."
      },
      groups: [
        G("Santé et sport", "Sağlık ve spor", "Health & sport", `
kinésithérapeute|fizyoterapist (eril ve dişil aynı)|physiotherapist (same for both)||Je suis kinésithérapeute.
kiné|fizyoterapist (günlük dil, kısaltma)|physio (everyday short form)||Je vais chez le kiné.
médecin|doktor (eril ve dişil aynı)|doctor (same for both)
infirmier / infirmière|hemşire|nurse|infirmier, infirmière
pharmacien / pharmacienne|eczacı|pharmacist|pharmacien, pharmacienne
dentiste|diş hekimi|dentist
coach sportif / coach sportive|kişisel antrenör|personal trainer|coach sportif, coach sportive
professeur de sport|beden eğitimi öğretmeni|PE teacher
réceptionniste|resepsiyonist|receptionist||Je suis réceptionniste.`, {
          fr: "Beaucoup de métiers en -e sont pareils au masculin et au féminin : kinésithérapeute, dentiste, réceptionniste. Facile !",
          tr: "-e ile biten birçok meslek eril ve dişilde aynıdır: kinésithérapeute, dentiste, réceptionniste. Kolay! Fransızlar günlük konuşmada hep kısaca 'kiné' der.",
          en: "Many jobs ending in -e are the same for men and women: kinésithérapeute, dentiste, réceptionniste. Easy! In everyday speech the French just say 'kiné'."
        }),
        G("Masculin et féminin", "Eril ve dişil", "Masculine & feminine", `
étudiant / étudiante|öğrenci (üniversite)|student|étudiant, étudiante
professeur / professeure|öğretmen|teacher|professeur, professeure
vendeur / vendeuse|satış elemanı|shop assistant|vendeur, vendeuse
serveur / serveuse|garson|waiter, waitress|serveur, serveuse
cuisinier / cuisinière|aşçı|cook|cuisinier, cuisinière
boulanger / boulangère|fırıncı|baker|boulanger, boulangère
avocat / avocate|avukat|lawyer|avocat, avocate
ingénieur / ingénieure|mühendis|engineer|ingénieur, ingénieure
informaticien / informaticienne|bilgisayarcı, yazılımcı|IT worker|informaticien, informaticienne
chauffeur / chauffeuse|şoför|driver|chauffeur, chauffeuse
coiffeur / coiffeuse|kuaför|hairdresser|coiffeur, coiffeuse
agent d'accueil|resepsiyon / danışma görevlisi|front-desk agent`, {
          fr: "Les terminaisons changent : -eur → -euse, -ier → -ière, -ien → -ienne, -ant → -ante. Avec l'habitude, ça devient naturel.",
          tr: "Sonlar değişir: -eur → -euse, -ier → -ière, -ien → -ienne, -ant → -ante. Türkçede 'öğretmen' herkes için aynı, Fransızcada ise kadın ve erkek için farklı biçimler var. Zamanla kulağınız alışır, söz!",
          en: "Endings change: -eur → -euse, -ier → -ière, -ien → -ienne, -ant → -ante. It becomes natural with practice."
        }),
        G("Parler de son travail", "İşinden bahsetmek", "Talking about work", `
Qu'est-ce que vous faites dans la vie ?|Ne iş yapıyorsunuz?|What do you do for a living?
Je suis kinésithérapeute de formation.|Fizyoterapist eğitimi aldım.|I'm a physiotherapist by training.
Je travaille à l'accueil d'une salle de sport.|Bir spor salonunun resepsiyonunda çalışıyorum.|I work at the front desk of a gym.
Je travaille dans un hôpital.|Bir hastanede çalışıyorum.|I work in a hospital.
Je cherche du travail.|İş arıyorum.|I'm looking for work.
Je suis au chômage.|İşsizim.|I'm unemployed.
le travail|iş|work, job
un emploi|iş, istihdam|a job, employment
le salaire|maaş|salary
le diplôme|diploma|degree, diploma`, {
          fr: "« Je suis kinésithérapeute de formation » : très utile quand votre diplôme n'est pas encore reconnu. Votre expérience compte !",
          tr: "'Je suis kinésithérapeute de formation' = fizyoterapist eğitimi aldım. Diplomanız henüz Fransa'da tanınmadıysa bu cümle çok işe yarar. Deneyiminiz değerli, gururla söyleyin!",
          en: "« Je suis kinésithérapeute de formation » = I trained as a physio. Very handy when your diploma isn't recognised yet. Your experience counts!"
        })
      ] },

    /* ───────────── 23. Shops ───────────── */
    { id: "shops", emoji: "🛍️", kind: "words", t: { fr: "Les commerces", tr: "Dükkânlar", en: "Shops" },
      intro: {
        fr: "La boulangerie, la pharmacie, le supermarché… et comment dire où vous allez : « je vais à la… », « je vais au… » ou « je vais chez le… ».",
        tr: "Fırın, eczane, süpermarket… ve nereye gittiğinizi söylemek: 'je vais à la…', 'je vais au…' ya da 'je vais chez le…'.",
        en: "The bakery, the pharmacy, the supermarket… and how to say where you're going: « je vais à la… », « je vais au… » or « je vais chez le… »."
      },
      groups: [
        G("Les magasins", "Dükkânlar", "The shops", `
la boulangerie|fırın, ekmekçi|the bakery||Je vais à la boulangerie.
la pâtisserie|pastane|the cake shop
la boucherie|kasap|the butcher's
la boucherie halal|helal kasap|the halal butcher's
la poissonnerie|balıkçı|the fishmonger's
la fromagerie|peynirci|the cheese shop
l'épicerie|bakkal|the grocer's, corner shop
la pharmacie|eczane|the pharmacy
la librairie|kitapçı|the bookshop
le supermarché|süpermarket|the supermarket||Je vais au supermarché.
le marché|pazar|the market
le bureau de tabac|tütüncü (gazete, pul, bilet de satar)|the tobacconist's
le pressing|kuru temizleme|the dry cleaner's`, {
          fr: "Beaucoup de magasins finissent en « -erie » et sont féminins : la boulangerie, la boucherie, la fromagerie. Attention : la librairie vend des livres, ce n'est pas une bibliothèque !",
          tr: "Birçok dükkân '-erie' ile biter ve dişildir: la boulangerie, la boucherie. Türkçedeki '-ci' eki gibi: ekmek-çi, kasap, peynir-ci. Dikkat: 'la librairie' kitap SATAR (kitapçı), kütüphane 'la bibliothèque'tir!",
          en: "Many shops end in '-erie' and are feminine: la boulangerie, la boucherie. Careful: 'la librairie' is a bookshop, not a library (that's 'la bibliothèque')!"
        }),
        G("Les commerçants", "Esnaf", "Shopkeepers", `
le boulanger / la boulangère|fırıncı|the baker|le boulanger, la boulangère
le boucher / la bouchère|kasap|the butcher|le boucher, la bouchère
le pharmacien / la pharmacienne|eczacı|the pharmacist|le pharmacien, la pharmacienne
le coiffeur / la coiffeuse|kuaför|the hairdresser|le coiffeur, la coiffeuse
le médecin|doktor|the doctor
le dentiste|diş hekimi|the dentist
le caissier / la caissière|kasiyer|the cashier|le caissier, la caissière`),
        G("Je vais à la, au, chez…", "…'e gidiyorum", "I'm going to…", `
Je vais à la pharmacie.|Eczaneye gidiyorum.|I'm going to the pharmacy.
Je vais au marché.|Pazara gidiyorum.|I'm going to the market.
Je vais à l'épicerie.|Bakkala gidiyorum.|I'm going to the grocer's.
Je vais aux toilettes.|Tuvalete gidiyorum.|I'm going to the toilet.
Je vais chez le boulanger.|Fırıncıya gidiyorum.|I'm going to the baker's.
Je vais chez le coiffeur.|Kuaföre gidiyorum.|I'm going to the hairdresser's.
Je vais chez le médecin.|Doktora gidiyorum.|I'm going to the doctor's.
Je vais chez des amis.|Arkadaşlarıma gidiyorum.|I'm going to some friends' place.
C'est ouvert ?|Açık mı?|Is it open?
C'est fermé le dimanche.|Pazar günleri kapalı.|It's closed on Sundays.`, {
          fr: "Un lieu → « à la / au / à l' » : je vais à la boulangerie. Une personne → « chez » : je vais chez le boulanger. Les deux veulent dire la même chose !",
          tr: "Yer için 'à la / au / à l'': je vais à la boulangerie (fırına). Kişi için 'chez': je vais chez le boulanger (fırıncıya). İkisi de aynı anlama gelir! Türkçedeki '-e' yönelme eki gibi: ikisinde de 'fırına gidiyorum'. Not: birçok dükkân pazar günü kapalıdır.",
          en: "A place → « à la / au / à l' »: je vais à la boulangerie. A person → « chez »: je vais chez le boulanger. Same meaning! Note: many shops are closed on Sundays."
        })
      ] },

    /* ───────────── 24. Connectors ───────────── */
    { id: "connectors", emoji: "🔗", kind: "words", t: { fr: "Les mots de liaison", tr: "Bağlaçlar", en: "Linking words" },
      intro: {
        fr: "Et, mais, parce que, d'abord, ensuite… Ces petits mots relient vos phrases. Avec eux, votre français devient plus fluide et plus naturel, même avec des phrases simples.",
        tr: "Et, mais, parce que, d'abord, ensuite… Bu küçük kelimeler cümlelerinizi birbirine bağlar. Basit cümlelerle bile Fransızcanız daha akıcı ve doğal olur. Sınavda (DELF) da çok işe yararlar!",
        en: "Et, mais, parce que, d'abord, ensuite… These little words link your sentences. With them your French sounds smoother and more natural, even with simple sentences."
      },
      groups: [
        G("Ajouter, opposer, choisir", "Eklemek, karşıtlık, seçmek", "Adding, contrasting, choosing", `
et|ve|and||du pain et du fromage
aussi|de, da, ayrıca|also, too||Moi aussi !
mais|ama, fakat|but||C'est petit mais joli.
ou|veya, ya da|or||thé ou café ?
ou bien|ya da|or else
pourtant|yine de, oysa|yet, however
par contre|buna karşılık|on the other hand
Je parle turc et anglais.|Türkçe ve İngilizce konuşuyorum.|I speak Turkish and English.
J'aime le sport mais je suis fatiguée.|Sporu seviyorum ama yorgunum.|I like sport but I'm tired.`, {
          fr: "« Moi aussi ! » est parfait pour réagir vite dans une conversation. Et « moi non plus », c'est pour être d'accord avec une phrase négative.",
          tr: "'Moi aussi !' (Ben de!) sohbette hızlı tepki vermek için mükemmel. Olumsuz cümleye katılırken ise 'moi non plus' (ben de… -mıyorum) denir: 'Je n'aime pas ça.' – 'Moi non plus !'",
          en: "« Moi aussi ! » (me too) is perfect for reacting fast. To agree with a negative sentence, say « moi non plus » (me neither)."
        }),
        G("Cause et conséquence", "Neden ve sonuç", "Cause & consequence", `
parce que|çünkü|because||Je reste parce qu'il pleut.
car|çünkü (yazı dilinde)|because, as (more written)
comme|-dığı için (cümle başında)|as, since||Comme il pleut, je reste.
donc|bu yüzden, yani|so, therefore||Il pleut, donc je reste.
alors|o zaman, öyleyse|so, then||Alors, on y va ?
c'est pour ça que|o yüzden|that's why
Je suis fatiguée, donc je rentre.|Yorgunum, bu yüzden eve dönüyorum.|I'm tired, so I'm going home.`, {
          fr: "« Parce que » donne la cause, « donc » donne la conséquence. Et « alors » est partout à l'oral, un peu comme « bon » en début de phrase.",
          tr: "'Parce que' nedeni (çünkü), 'donc' sonucu (bu yüzden) verir. 'Alors' konuşma dilinde her yerde: Türkçedeki 'eee', 'yani', 'o zaman' gibi cümle başında kullanılır. Fransızlar gibi konuşmak için harika bir kelime!",
          en: "« Parce que » gives the cause, « donc » the consequence. « Alors » is everywhere in speech, like 'so…' or 'well…' at the start of a sentence."
        }),
        G("Raconter dans l'ordre", "Sırayla anlatmak", "Telling things in order", `
d'abord|önce, ilk olarak|first||D'abord, je prends un café.
ensuite|sonra, ardından|next, then||Ensuite, je vais au travail.
puis|sonra|then
après|sonra, -den sonra|after, afterwards||Après, je mange.
enfin|son olarak; nihayet|finally, at last||Enfin, je dors !
finalement|sonunda, en sonunda|in the end
pendant|sırasında, boyunca|during, for||pendant les vacances
avant|önce, -den önce|before||avant le travail
D'abord je me lève, ensuite je me douche, enfin je pars.|Önce kalkıyorum, sonra duş alıyorum, en son çıkıyorum.|First I get up, then I shower, finally I leave.`, {
          fr: "D'abord → ensuite → puis → enfin : avec ces quatre mots, vous pouvez raconter votre journée. C'est un super outil pour le DELF !",
          tr: "D'abord → ensuite → puis → enfin: bu dört kelimeyle gününüzü baştan sona anlatabilirsiniz. DELF yazılı ve sözlü sınavı için süper bir araç! Basit cümleler bile bu kelimelerle çok daha iyi görünür.",
          en: "D'abord → ensuite → puis → enfin: with these four words you can tell your whole day. A great tool for the DELF exam!"
        })
      ] }
  );
})();
