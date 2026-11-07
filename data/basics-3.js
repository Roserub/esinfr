/* Basics, part 3: negation, possessives, adjectives, pronouns, near future, passé composé, health and classroom phrases. Loads right after data/basics-2.js. */
(function () {
  // item line: "fr|tr|en" or "fr|tr|en|say" or "fr|tr|en|say|ex". say = what the French voice reads (default: fr, leave empty to keep default). ex = optional short French example (word or phrase) also read aloud.
  const I = s => s.trim().split("\n").map(l => { const [fr, tr, en, say, ex] = l.split("|").map(x => x.trim()); return { fr, tr, en, say: say || "", ex: ex || "" }; });
  const G = (fr, tr, en, items, tip) => ({ t: { fr, tr, en }, items: I(items), tip: tip || null });
  window.BASICS = window.BASICS || [];
  window.BASICS.push(

    /* ───────────── 25. Negation ───────────── */
    { id: "negation", emoji: "🚫", kind: "words", t: { fr: "Dire non : la négation", tr: "Olumsuz cümleler", en: "Saying no: negation" },
      intro: {
        fr: "Ne… pas, ne… jamais, ne… plus : en français, la négation entoure le verbe comme un sandwich. C'est un petit réflexe à prendre, et après, c'est facile !",
        tr: "Ne… pas, ne… jamais, ne… plus: Fransızcada olumsuzluk fiilin iki yanına gelir, tıpkı bir sandviç gibi. Türkçede fiile '-me / -ma' ekleriz (gelmiyorum); Fransızca ise fiili iki kelimeyle sarar. Küçük bir alışkanlık, sonra çok kolay!",
        en: "Ne… pas, ne… jamais, ne… plus: in French, negation wraps around the verb like a sandwich. It's a small habit to build, and then it's easy!"
      },
      groups: [
        G("Ne… pas", "Ne… pas (-me / -ma)", "Ne… pas (not)", `
ne… pas|olumsuzluk: fiil + -me / -ma|not|ne, pas|Je ne mange pas.
n'… pas|ünlüden önce ne → n'|not (before a vowel)|n, pas|Je n'ai pas faim.
Je ne parle pas italien.|İtalyanca konuşmuyorum.|I don't speak Italian.
Je n'aime pas le café.|Kahveyi sevmiyorum.|I don't like coffee.
Ce n'est pas loin.|Uzak değil.|It's not far.
Il ne travaille pas le lundi.|Pazartesileri çalışmıyor.|He doesn't work on Mondays.
Nous ne sommes pas pressés.|Acelemiz yok.|We're not in a hurry.
Je ne suis pas d'accord.|Katılmıyorum.|I don't agree.
Pas maintenant.|Şimdi değil.|Not now.
Pas du tout !|Hiç de değil!|Not at all!`, {
          fr: "Le verbe va au milieu : ne + verbe + pas. Devant une voyelle, « ne » devient « n' » : je n'aime pas, ce n'est pas.",
          tr: "Fiil ortada durur: ne + fiil + pas. Türkçede olumsuzluk fiilin içine girer (sev-mi-yorum); Fransızcada ise fiilin iki yanına iki kelime gelir. Ünlüden önce 'ne', 'n'' olur: je n'aime pas ('je ne aime pas' değil).",
          en: "The verb sits in the middle: ne + verb + pas. Before a vowel, 'ne' becomes 'n'': je n'aime pas, ce n'est pas."
        }),
        G("Jamais, plus, rien, personne", "Asla, artık, hiçbir şey, hiç kimse", "Never, no longer, nothing, nobody", `
ne… jamais|asla, hiç (fiille)|never (with a verb)|ne, jamais|Je ne fume jamais.
ne… plus|artık… değil|not any more, no longer|ne, plus|Je ne fume plus.
ne… rien|hiçbir şey (fiille)|nothing (with a verb)|ne, rien|Je ne vois rien.
ne… personne|hiç kimse (fiille)|nobody (with a verb)|ne, personne|Je ne connais personne.
Il ne pleut jamais ici.|Burada hiç yağmur yağmaz.|It never rains here.
Elle n'habite plus à Paris.|Artık Paris'te oturmuyor.|She doesn't live in Paris any more.
Je ne comprends rien.|Hiçbir şey anlamıyorum.|I don't understand anything.
Personne ne répond.|Kimse cevap vermiyor.|Nobody is answering.
Jamais !|Asla! (tek kelimelik cevap)|Never! (one-word answer)
Rien.|Hiçbir şey. (tek kelimelik cevap)|Nothing. (one-word answer)
Personne.|Hiç kimse. (tek kelimelik cevap)|Nobody. (one-word answer)
De rien !|Rica ederim! Bir şey değil!|You're welcome! (literally 'of nothing')`, {
          fr: "« Jamais », « plus », « rien », « personne » prennent la place de « pas ». On ne dit pas « ne pas jamais » : juste « ne… jamais ».",
          tr: "Müjde: Türkçede de çift olumsuzluk var! 'Hiç kimse gelmedi', 'hiçbir şey görmüyorum' deriz; Fransızca da aynı: 'je ne vois rien'. İngilizcede bu yanlış ama Türkçe kulağınıza çok doğal gelecek. Dikkat: 'jamais, plus, rien, personne' 'pas'ın yerini alır, ikisi birden kullanılmaz.",
          en: "'Jamais', 'plus', 'rien' and 'personne' replace 'pas'. Unlike English, French keeps two negative words: « je ne vois rien » is correct, not a double-negative mistake."
        }),
        G("Pas de…", "Pas de… (yok)", "Pas de… (no / not any)", `
Je n'ai pas de voiture.|Arabam yok.|I don't have a car.
Il n'y a pas de bus le dimanche.|Pazar günleri otobüs yok.|There's no bus on Sundays.
Je ne bois pas d'alcool.|Alkol içmiyorum.|I don't drink alcohol.
Elle n'a pas d'enfants.|Çocuğu yok.|She doesn't have any children.
Il n'y a plus de pain.|Ekmek kalmadı.|There's no bread left.
Pas de sucre, merci.|Şekersiz, teşekkürler.|No sugar, thanks.
Pas de problème !|Sorun değil!|No problem!
Je n'ai pas de chien.|Köpeğim yok.|I don't have a dog.`, {
          fr: "Après une négation, un, une, des, du, de la deviennent « de » (ou « d' ») : j'ai une voiture → je n'ai pas de voiture.",
          tr: "Olumsuz cümlede un, une, des, du, de la hepsi 'de' (ünlüden önce 'd'') olur: j'ai une voiture (arabam var) → je n'ai pas de voiture (arabam yok). 'Pas de' = Türkçedeki 'yok' gibi düşünün!",
          en: "After a negative, un, une, des, du, de la all become 'de' (or 'd''): j'ai une voiture → je n'ai pas de voiture. Think of 'pas de' as 'no / not any'."
        }),
        G("À l'oral", "Konuşma dilinde", "In spoken French", `
C'est pas grave.|Önemli değil. (konuşma dili)|It's no big deal. (spoken)
Je sais pas.|Bilmem. (konuşma dili)|Dunno. (spoken)
Moi non plus.|Ben de. (olumsuz bir cümleye cevap)|Me neither.
Pas encore.|Henüz değil.|Not yet.
Pas vraiment.|Pek değil.|Not really.
Non merci.|Hayır, teşekkürler.|No thanks.`, {
          fr: "À l'oral, les Français oublient souvent « ne » : « je sais pas », « c'est pas grave ». À l'écrit et à l'examen, gardez « ne » !",
          tr: "Konuşurken Fransızlar 'ne'yi çoğu zaman yutar: 'je sais pas', 'c'est pas grave'. Duyduğunuzda şaşırmayın; asıl olumsuzluğu 'pas' taşır. Ama yazarken ve DELF sınavında 'ne'yi mutlaka yazın!",
          en: "In speech, French people often drop 'ne': « je sais pas », « c'est pas grave ». 'Pas' carries the meaning. In writing and in exams, keep 'ne'!"
        })
      ] },

    /* ───────────── 26. Possessives ───────────── */
    { id: "possessives", emoji: "🔑", kind: "words", t: { fr: "Mon, ma, mes : les possessifs", tr: "İyelik sözcükleri", en: "My, your, his: possessives" },
      intro: {
        fr: "Mon sac, ma clé, mes amis : les possessifs disent à qui est quelque chose. Ils changent selon l'objet, pas selon la personne qui le possède.",
        tr: "Mon sac (çantam), ma clé (anahtarım), mes amis (arkadaşlarım): iyelik sözcükleri bir şeyin kime ait olduğunu söyler. Türkçede ek kullanırız (-ım, -ın, -ı); Fransızcada kelime ismin önüne gelir ve sahibine değil, eşyanın cinsiyetine göre değişir.",
        en: "Mon sac, ma clé, mes amis: possessives say who something belongs to. They change according to the thing owned, not the owner."
      },
      groups: [
        G("Mon, ma, mes", "Benim (-ım)", "My", `
mon|benim (eril tekil isim)|my (masculine noun)||mon frère
ma|benim (dişil tekil isim)|my (feminine noun)||ma sœur
mes|benim (çoğul isim)|my (plural noun)||mes parents
mon téléphone|telefonum|my phone
ma maison|evim|my house
mes amis|arkadaşlarım|my friends
mon mari|kocam, eşim|my husband
ma mère|annem|my mother`, {
          fr: "Mon (masculin), ma (féminin), mes (pluriel). Au pluriel, c'est toujours « mes », pour les garçons et les filles.",
          tr: "Türkçede tek bir ek var: ev-im, telefon-um. Fransızcada ismin cinsiyetine göre üç seçenek var: mon (eril), ma (dişil), mes (çoğul). İyi haber: çoğulda hep 'mes', cinsiyet fark etmez.",
          en: "Mon (masculine), ma (feminine), mes (plural). In the plural it's always 'mes', whatever the gender."
        }),
        G("Ton, ta, tes / son, sa, ses", "Senin / onun", "Your (informal) / his, her", `
ton|senin (eril)|your (masculine, informal)||ton chat
ta|senin (dişil)|your (feminine, informal)||ta famille
tes|senin (çoğul)|your (plural, informal)||tes chaussures
son|onun (eril isim)|his, her (masculine noun)||son vélo
sa|onun (dişil isim)|his, her (feminine noun)||sa voiture
ses|onun (çoğul isim)|his, her (plural noun)||ses clés
son frère|onun erkek kardeşi|his brother, her brother
sa mère|onun annesi|his mother, her mother`, {
          fr: "« Sa voiture » peut être la voiture d'un homme ou d'une femme : c'est « voiture » (féminin) qui décide, pas le propriétaire !",
          tr: "Türkçe konuşanlar için avantaj: Türkçedeki 'onun' gibi, 'son / sa' da sahibin kadın mı erkek mi olduğunu söylemez! 'Sa voiture' = onun arabası (kadının veya erkeğin). Belirleyen 'voiture' kelimesinin dişil olması. İngilizce konuşanlar burada çok zorlanır, siz değil.",
          en: "« Sa voiture » can be his car or her car: the noun 'voiture' (feminine) decides, not the owner. English speakers often slip here: son / sa never means 'his' vs 'her'."
        }),
        G("Notre, votre, leur", "Bizim, sizin, onların", "Our, your, their", `
notre|bizim (tekil isim)|our (singular noun)||notre appartement
nos|bizim (çoğul isim)|our (plural noun)||nos voisins
votre|sizin (tekil isim)|your (formal or plural, singular noun)||votre nom
vos|sizin (çoğul isim)|your (formal or plural, plural noun)||vos papiers
leur|onların (tekil isim)|their (singular noun)|leur, au singulier|leur maison
leurs|onların (çoğul isim)|their (plural noun)|leurs, au pluriel|leurs enfants
Votre nom, s'il vous plaît ?|Adınız, lütfen?|Your name, please?
Ce sont nos amis.|Bunlar bizim arkadaşlarımız.|These are our friends.`, {
          fr: "Ici, plus de masculin ou féminin : seulement singulier ou pluriel. « Votre » est très utile avec « vous » de politesse : votre nom, votre adresse.",
          tr: "Burada cinsiyet yok, sadece tekil / çoğul var: notre / nos, votre / vos, leur / leurs. Resmi 'vous' ile konuşurken 'votre' kullanılır: votre nom (adınız), votre adresse (adresiniz). Resmi dairelerde çok duyacaksınız.",
          en: "No gender here, only singular or plural. 'Votre' goes with polite 'vous': votre nom, votre adresse. You'll hear it constantly in offices."
        }),
        G("Mon amie, mon école", "Ünlüden önce: mon", "Before a vowel: mon", `
mon amie|(kız) arkadaşım|my (female) friend
mon école|okulum|my school
mon adresse|adresim|my address
son équipe|onun takımı|his team, her team
ton idée|senin fikrin|your idea
C'est à moi.|Bu benim.|It's mine.
C'est à qui ?|Bu kimin?|Whose is it?
C'est le sac de Léa.|Bu Léa'nın çantası.|It's Léa's bag.`, {
          fr: "Devant une voyelle, on dit « mon, ton, son » même pour un mot féminin : mon amie (pas « ma amie »). C'est plus facile à prononcer.",
          tr: "Ünlüyle başlayan dişil kelimelerde 'ma, ta, sa' yerine 'mon, ton, son' gelir: mon amie (ma amie değil), son équipe. Sebep sadece telaffuz: 'ma amie' söylemesi zor. Ayrıca 'Léa'nın çantası' için Fransızca ters sıra kullanır: le sac de Léa (Léa'nın çantası).",
          en: "Before a vowel, use 'mon, ton, son' even with a feminine noun: mon amie (not 'ma amie'). It's just easier to say. And there's no 's: « le sac de Léa » = Léa's bag."
        })
      ] },

    /* ───────────── 27. Adjectives ───────────── */
    { id: "adjectives", emoji: "🧑", kind: "words", t: { fr: "Décrire une personne", tr: "Birini tarif etmek", en: "Describing people" },
      intro: {
        fr: "Grand, mince, sympa, drôle… Pour décrire quelqu'un, il faut des adjectifs. En français, ils s'accordent : on ajoute souvent un -e au féminin et un -s au pluriel.",
        tr: "Uzun boylu, zayıf, cana yakın, komik… Birini anlatmak için sıfatlar gerekir. Türkçede sıfat hiç değişmez; Fransızcada ise isme uyar: dişilde genelde -e, çoğulda -s eklenir. Bir de çoğu sıfat ismin arkasına gelir!",
        en: "Tall, slim, nice, funny… To describe someone you need adjectives. In French they agree: you usually add -e for feminine and -s for plural."
      },
      groups: [
        G("Le physique", "Dış görünüş", "Appearance", `
grand / grande|uzun boylu, büyük|tall, big|grand, grande
petit / petite|kısa boylu, küçük|short, small|petit, petite
mince|zayıf, ince|slim
costaud|iri yapılı, güçlü kuvvetli|stocky, strong
jeune|genç|young
âgé / âgée|yaşlı|elderly|âgé, âgée
beau / belle|yakışıklı / güzel|handsome / beautiful|beau, belle
joli / jolie|hoş, sevimli|pretty|joli, jolie
sportif / sportive|sportif, sporcu|sporty|sportif, sportive`, {
          fr: "Souvent, on ajoute -e au féminin : grand → grande. Le « d » qu'on n'entendait pas se prononce maintenant ! Si le mot finit déjà par -e (mince, jeune), rien ne change.",
          tr: "Dişilde genelde -e eklenir: grand → grande. Dikkat, duyulmayan son harf artık okunur: 'gran' → 'grand'! Kelime zaten -e ile bitiyorsa (mince, jeune) hiçbir şey değişmez. Türkçede 'uzun boylu' herkes için aynı; Fransızcada kime söylediğinize dikkat edin.",
          en: "Usually you add -e for the feminine: grand → grande. The silent final letter becomes audible: 'gron' → 'grond'! Words already ending in -e (mince, jeune) don't change."
        }),
        G("Les cheveux et les yeux", "Saç ve gözler", "Hair & eyes", `
les cheveux courts|kısa saç|short hair
les cheveux longs|uzun saç|long hair
les cheveux bruns|koyu kahverengi saç|dark brown hair
les cheveux blonds|sarı saç|blond hair
les cheveux frisés|kıvırcık saç|curly hair
les cheveux raides|düz saç|straight hair
les yeux verts|yeşil gözler|green eyes
les yeux marron|kahverengi gözler|brown eyes
Il a une barbe.|Sakalı var.|He has a beard.
Elle porte des lunettes.|Gözlük takıyor.|She wears glasses.`, {
          fr: "On dit « avoir les cheveux… » et « avoir les yeux… » : elle a les cheveux longs. « Marron » ne change jamais : des yeux marron.",
          tr: "Fransızca 'saçı uzun' demez, 'uzun saçlara sahip' der: elle a les cheveux longs. 'Les cheveux' hep çoğuldur, Türkçedeki tekil 'saç' gibi değil. 'Marron' (kahverengi) asla değişmez: des yeux marron.",
          en: "French uses 'avoir': elle a les cheveux longs (she has long hair). 'Les cheveux' is plural. 'Marron' never changes: des yeux marron."
        }),
        G("Le caractère", "Karakter", "Personality", `
gentil / gentille|nazik, iyi kalpli|kind|gentil, gentille
sympa|cana yakın, hoş|nice, friendly
drôle|komik, eğlenceli|funny
timide|utangaç, çekingen|shy
calme|sakin|calm
bavard / bavarde|konuşkan, geveze|chatty|bavard, bavarde
sérieux / sérieuse|ciddi, çalışkan|serious, hard-working|sérieux, sérieuse
patient / patiente|sabırlı|patient|patient, patiente
généreux / généreuse|cömert|generous|généreux, généreuse
courageux / courageuse|cesur|brave|courageux, courageuse`, {
          fr: "Les mots en -eux deviennent -euse au féminin : sérieux → sérieuse. « Sympa » est le mot préféré des Français pour dire qu'une personne est agréable.",
          tr: "-eux ile biten sıfatlar dişilde -euse olur: sérieux → sérieuse, courageux → courageuse. 'Sympa' Fransızların en sevdiği kelimelerden: Türkçedeki 'tatlı, cana yakın' gibi, herkes için kullanılır ve hiç değişmez.",
          en: "Adjectives in -eux become -euse in the feminine: sérieux → sérieuse. 'Sympa' is the French favourite for a pleasant person, and it never changes."
        }),
        G("Où mettre l'adjectif ?", "Sıfat nereye gelir?", "Where does the adjective go?", `
une femme sympa|cana yakın bir kadın|a nice woman
un ami drôle|komik bir arkadaş|a funny friend
une voiture rouge|kırmızı bir araba|a red car
un petit chien|küçük bir köpek|a small dog
une jolie maison|güzel bir ev|a pretty house
un grand appartement|büyük bir daire|a big flat
un bel homme|yakışıklı bir adam (ünlüden önce beau → bel)|a handsome man (beau → bel before a vowel)
Elle est grande et brune.|Uzun boylu ve esmer.|She's tall and dark-haired.
Ils sont très gentils.|Onlar çok nazik.|They're very kind.`, {
          fr: "En général, l'adjectif va après le nom : une voiture rouge. Mais les petits adjectifs très fréquents (beau, joli, grand, petit, jeune, bon) vont avant : un petit chien.",
          tr: "Türkçede sıfat hep önde: kırmızı araba. Fransızcada çoğu sıfat arkaya gelir: une voiture rouge (araba kırmızı). Ama kısa ve çok kullanılan birkaç sıfat (beau, joli, grand, petit, jeune, bon) önde kalır: un petit chien. Yanlış yere koysanız da anlaşılırsınız, rahat olun!",
          en: "Most adjectives go after the noun: une voiture rouge. But a few short, very common ones (beau, joli, grand, petit, jeune, bon) go before: un petit chien."
        })
      ] },

    /* ───────────── 28. Pronouns ───────────── */
    { id: "pronouns", emoji: "👥", kind: "words", t: { fr: "Je, tu, il… : les pronoms", tr: "Kişi zamirleri", en: "I, you, he…: pronouns" },
      intro: {
        fr: "Je, tu, il, elle, on, nous, vous, ils, elles : ces petits mots sont devant chaque verbe. En français, on ne peut pas les oublier.",
        tr: "Je, tu, il, elle, on, nous, vous, ils, elles: bu küçük kelimeler her fiilin önünde durur. Türkçede zamiri atabiliriz çünkü fiilin eki kişiyi söyler (geliyorum); Fransızcada ise zamir şart: je viens.",
        en: "Je, tu, il, elle, on, nous, vous, ils, elles: these little words come before every verb. In French you can't leave them out."
      },
      groups: [
        G("Les pronoms sujets", "Özne zamirleri", "Subject pronouns", `
je|ben|I||Je suis turque.
j'|ben (ünlüden önce)|I (before a vowel)|je|J'habite en France.
tu|sen|you (informal)||Tu viens ?
il|o (erkek veya eril şey)|he, it||Il est kiné.
elle|o (kadın veya dişil şey)|she, it||Elle est sympa.
on|biz (konuşma dili), insanlar|we (spoken), people, one||On y va !
nous|biz|we||Nous sommes amis.
vous|siz (resmi tekil veya çoğul)|you (formal or plural)||Vous êtes prête ?
ils|onlar (erkekler veya karışık grup)|they (masculine or mixed)|ils, au pluriel|Ils jouent au handball.
elles|onlar (sadece kadınlar)|they (all female)|elles, au pluriel|Elles courent.`, {
          fr: "« Il » et « elle » servent aussi pour les choses : la table → elle, le vélo → il. Un groupe de neuf filles et un garçon ? C'est « ils » !",
          tr: "Türkçede 'o' herkes ve her şey için tek kelime; Fransızca ise ayırır: il (erkek / eril şey), elle (kadın / dişil şey). Masa bile 'elle' olur: la table → elle! Ve dokuz kız bir erkek varsa grup 'ils' olur, Fransız dilbilgisi biraz eski kafalı.",
          en: "'Il' and 'elle' also mean 'it': la table → elle, le vélo → il. A group of nine girls and one boy? That's 'ils'!"
        }),
        G("Tu ou vous ?", "Sen mi, siz mi?", "Tu or vous?", `
Tu es d'où ?|Nerelisin?|Where are you from? (informal)
Vous êtes d'où ?|Nerelisiniz?|Where are you from? (formal)
On se tutoie ?|Sen diye konuşalım mı?|Shall we say 'tu' to each other?
tutoyer|'sen' diye hitap etmek|to say 'tu' to someone
vouvoyer|'siz' diye hitap etmek|to say 'vous' to someone`, {
          fr: "« Tu » pour la famille, les amis, les enfants. « Vous » pour les inconnus, les collègues au début, l'administration. En cas de doute : « vous ».",
          tr: "Bu konuda Türkçe konuşanlar şanslı: 'tu / vous' farkı tam 'sen / siz' farkı gibi! Aile, arkadaşlar, çocuklar → tu. Tanımadıklarınız, resmi daireler, ilk görüşme → vous. Emin değilseniz 'vous' deyin; karşı taraf 'on se tutoie ?' diye sorarsa geçebilirsiniz.",
          en: "'Tu' for family, friends and children. 'Vous' for strangers, new colleagues and offices. When in doubt, say 'vous': the other person will suggest 'tu' if they want."
        }),
        G("On = nous", "On = biz", "On = we", `
On mange ensemble ?|Birlikte yiyelim mi?|Shall we eat together?
On va au cinéma ce soir.|Bu akşam sinemaya gidiyoruz. (konuşma dili)|We're going to the cinema tonight. (spoken)
Nous allons au cinéma ce soir.|Bu akşam sinemaya gidiyoruz. (resmi, yazı dili)|We're going to the cinema tonight. (formal, written)
On parle français ici.|Burada Fransızca konuşulur.|French is spoken here.
On ne sait jamais.|Belli olmaz.|You never know.`, {
          fr: "À l'oral, les Français disent presque toujours « on » au lieu de « nous ». Et c'est plus simple : « on » se conjugue comme « il » (on va, on mange).",
          tr: "Konuşma dilinde Fransızlar 'nous' yerine neredeyse hep 'on' der: on va (gidiyoruz). Üstelik daha kolay: 'on' fiili 'il' gibi çekilir. 'On' ayrıca Türkçedeki edilgen yapıya benzer: 'on parle français ici' = burada Fransızca konuşulur.",
          en: "In speech French people nearly always say 'on' instead of 'nous', and it's easier: 'on' takes the same verb form as 'il' (on va, on mange). It can also mean 'people / one'."
        }),
        G("Moi, toi, lui…", "Vurgulu zamirler", "Me, you, him… (stressed)", `
moi|ben (vurgulu), beni|me||Moi, je suis turque.
toi|sen (vurgulu), seni|you||Et toi ?
lui|o (erkek), onu|him||C'est lui.
avec elle|onunla (kadın)|with her
chez nous|bizde, bizim evde|at our place
pour vous|sizin için|for you
eux|onlar (erkekler veya karışık)|them (masculine or mixed)||avec eux
C'est pour elles.|Bu onlar için (kadınlar).|It's for them (women).
Moi aussi.|Ben de.|Me too.
Et vous ?|Ya siz?|And you?
C'est moi !|Benim!|It's me!`, {
          fr: "Après « avec, pour, chez, c'est », on utilise moi, toi, lui, elle, nous, vous, eux, elles. Et pour insister : « Moi, je… ».",
          tr: "'Avec, pour, chez, c'est' sonrasında bu vurgulu zamirler gelir: avec moi (benimle), chez toi (sende). Türkçede vurgu için 'Ben, ben…' deriz; Fransızca da 'Moi, je…' der: 'Moi, je suis turque' = 'Ben Türküm (başkasını bilmem)'.",
          en: "After 'avec, pour, chez, c'est', use moi, toi, lui, elle, nous, vous, eux, elles. To stress yourself: « Moi, je… », like 'Me, I…'."
        })
      ] },

    /* ───────────── 29. Near future ───────────── */
    { id: "nearfuture", emoji: "⏩", kind: "words", t: { fr: "Le futur proche", tr: "Yakın gelecek zaman", en: "The near future" },
      intro: {
        fr: "Je vais manger, on va voir, il va pleuvoir : avec « aller + infinitif », vous parlez déjà du futur ! C'est le futur le plus utilisé à l'oral.",
        tr: "Je vais manger (yiyeceğim), on va voir (göreceğiz), il va pleuvoir (yağmur yağacak): 'aller + mastar' ile geleceği hemen anlatabilirsiniz! Konuşmada en çok kullanılan gelecek zaman bu, Türkçedeki '-ecek' gibi.",
        en: "Je vais manger, on va voir, il va pleuvoir: with 'aller + infinitive' you can already talk about the future! It's the most used future in speech, just like 'going to'."
      },
      groups: [
        G("Aller + infinitif", "Aller + mastar (-ecek)", "Aller + infinitive (going to)", `
je vais|-eceğim|I'm going to||Je vais manger.
tu vas|-eceksin|you're going to||Tu vas venir ?
il / elle / on va|-ecek (o) / -eceğiz (on)|he / she is going to, we're going to|il va, elle va, on va|Elle va partir.
nous allons|-eceğiz|we're going to||Nous allons voir.
vous allez|-eceksiniz|you're going to||Vous allez aimer.
ils / elles vont|-ecekler|they're going to|ils vont, elles vont|Ils vont jouer.
Je vais faire les courses.|Alışveriş yapacağım.|I'm going to do the shopping.
Il va pleuvoir.|Yağmur yağacak.|It's going to rain.
On va voir.|Bakarız. / Göreceğiz.|We'll see.
Je ne vais pas sortir.|Dışarı çıkmayacağım.|I'm not going to go out.
Qu'est-ce que tu vas faire ?|Ne yapacaksın?|What are you going to do?`, {
          fr: "Conjuguez seulement « aller », l'autre verbe reste à l'infinitif : je vais manger, nous allons manger. Pour la négation : je ne vais pas manger.",
          tr: "Sadece 'aller' çekilir, ikinci fiil hep mastar kalır: je vais manger, nous allons manger. İngilizcedeki 'going to' ile birebir aynı mantık. Olumsuzda 'ne… pas' sadece 'aller'i sarar: je ne vais pas manger (yemeyeceğim).",
          en: "Only 'aller' changes; the second verb stays in the infinitive: je vais manger, nous allons manger. It's exactly like 'going to'. Negative: je ne vais pas manger."
        }),
        G("Quand ? Les mots du futur", "Ne zaman? Gelecek kelimeleri", "When? Future time words", `
tout à l'heure|birazdan, az sonra|in a little while
ce soir|bu akşam|this evening, tonight
cet après-midi|bu öğleden sonra|this afternoon
demain|yarın|tomorrow
demain matin|yarın sabah|tomorrow morning
après-demain|öbür gün|the day after tomorrow
ce week-end|bu hafta sonu|this weekend
la semaine prochaine|gelecek hafta|next week
le mois prochain|gelecek ay|next month
l'année prochaine|gelecek yıl, seneye|next year
lundi prochain|gelecek pazartesi|next Monday
bientôt|yakında|soon
dans deux jours|iki gün sonra|in two days`, {
          fr: "« Prochain » va après le mot : la semaine prochaine, lundi prochain. « Dans deux jours » = deux jours à partir de maintenant.",
          tr: "'Prochain(e)' (gelecek) Türkçenin tersine arkaya gelir: la semaine prochaine = gelecek hafta. 'Dans' burada 'içinde' değil, 'sonra' demek: dans deux jours = iki gün sonra.",
          en: "'Prochain(e)' comes after the noun: la semaine prochaine, lundi prochain. 'Dans deux jours' = in two days' time."
        }),
        G("Des projets", "Planlar", "Plans", `
Demain, je vais courir au parc.|Yarın parkta koşacağım.|Tomorrow I'm going to run in the park.
Ce soir, on va regarder un film.|Bu akşam film izleyeceğiz.|Tonight we're going to watch a film.
La semaine prochaine, je vais commencer le yoga.|Gelecek hafta yogaya başlayacağım.|Next week I'm going to start yoga.
Ce week-end, nous allons voir nos amis.|Bu hafta sonu arkadaşlarımızı göreceğiz.|This weekend we're going to see our friends.
Cet été, ils vont partir en Bretagne.|Bu yaz Bretanya'ya gidecekler.|This summer they're going to go to Brittany.
L'année prochaine, je vais étudier à l'université.|Seneye üniversitede okuyacağım.|Next year I'm going to study at university.
Tu vas adorer !|Bayılacaksın!|You're going to love it!`, {
          fr: "Mettez le mot de temps au début, puis « aller + infinitif » : c'est parfait pour parler de vos projets à l'examen du DELF.",
          tr: "Zaman kelimesini başa koyun, sonra 'aller + mastar': Demain, je vais courir. Bu kalıpla DELF sözlü sınavında planlarınızı rahatça anlatabilirsiniz. Kendi planlarınızı yüksek sesle söyleyerek pratik yapın!",
          en: "Put the time word first, then 'aller + infinitive': Demain, je vais courir. Perfect for talking about your plans in the DELF speaking exam."
        })
      ] },

    /* ───────────── 30. Passé composé ───────────── */
    { id: "pastsimple", emoji: "⏪", kind: "words", t: { fr: "Le passé composé", tr: "Geçmiş zaman (passé composé)", en: "The past: passé composé" },
      intro: {
        fr: "Hier, j'ai mangé une pizza ; la semaine dernière, je suis allée à la piscine. Le passé composé raconte ce qui s'est passé. On le forme avec « avoir » ou « être » + un participe.",
        tr: "Hier, j'ai mangé une pizza (dün pizza yedim); la semaine dernière, je suis allée à la piscine (geçen hafta havuza gittim). Passé composé geçmişte olanları anlatır, Türkçedeki '-di' gibi. 'Avoir' veya 'être' + ortaç ile kurulur.",
        en: "Hier, j'ai mangé une pizza; la semaine dernière, je suis allée à la piscine. The passé composé tells what happened. It's made with 'avoir' or 'être' + a past participle."
      },
      groups: [
        G("Avec avoir", "Avoir ile", "With avoir", `
j'ai mangé|yedim|I ate, I've eaten
tu as fini|bitirdin|you finished
il a pris|aldı|he took
elle a fait|yaptı|she did, she made
nous avons vu|gördük|we saw
vous avez bu|içtiniz|you drank
ils ont dormi|uyudular|they slept
j'ai eu|sahip oldum, (bir şeyim) oldu|I had, I got||J'ai eu un rendez-vous.
j'ai été|oldum, bulundum|I was, I've been||J'ai été malade.`, {
          fr: "La plupart des verbes utilisent « avoir » : avoir au présent + participe. Les verbes en -er font -é : manger → mangé.",
          tr: "Çoğu fiil 'avoir' ile kurulur: avoir'ın şimdiki hali + ortaç. -er ile biten fiiller -é olur: manger → mangé. Bir kolaylık: Fransızcada Türkçedeki gibi -di / -miş ayrımı yok; 'j'ai mangé' = yedim.",
          en: "Most verbs use 'avoir': present of avoir + past participle. Verbs in -er end in -é: manger → mangé. One form covers both 'I ate' and 'I have eaten'."
        }),
        G("Des participes fréquents", "Sık kullanılan ortaçlar", "Common past participles", `
parlé (parler)|konuştu (konuşmak)|spoken (to speak)|parlé|J'ai parlé avec elle.
regardé (regarder)|izledi (izlemek)|watched (to watch)|regardé|On a regardé un film.
acheté (acheter)|satın aldı (almak)|bought (to buy)|acheté|J'ai acheté du pain.
travaillé (travailler)|çalıştı (çalışmak)|worked (to work)|travaillé|Il a travaillé hier.
écouté (écouter)|dinledi (dinlemek)|listened (to listen)|écouté|J'ai écouté la radio.
joué (jouer)|oynadı (oynamak)|played (to play)|joué|Ils ont joué au handball.
dit (dire)|dedi (demek)|said (to say)|dit|Il a dit oui.
écrit (écrire)|yazdı (yazmak)|written (to write)|écrit|J'ai écrit un message.
lu (lire)|okudu (okumak)|read (to read)|lu|J'ai lu le texte.
compris (comprendre)|anladı (anlamak)|understood (to understand)|compris|Tu as compris ?
attendu (attendre)|bekledi (beklemek)|waited (to wait)|attendu|J'ai attendu le bus.`, {
          fr: "-er → -é (parlé), -ir → souvent -i (fini, dormi), -re → souvent -u (attendu, lu). Mais les verbes très fréquents sont irréguliers : pris, fait, dit, écrit, eu, été.",
          tr: "Kısa bir harita: -er → -é (parlé), -ir → çoğu zaman -i (fini, dormi), -re → çoğu zaman -u (attendu, lu). En çok kullanılan fiiller ise düzensiz: pris, fait, dit, écrit, eu, été. Bu yirmi ortaçla geçmişi rahatça anlatabilirsiniz!",
          en: "-er → -é (parlé), -ir → often -i (fini, dormi), -re → often -u (attendu, lu). The most frequent verbs are irregular: pris, fait, dit, écrit, eu, été. With these twenty you can tell most stories!"
        }),
        G("Avec être", "Être ile", "With être", `
je suis allé(e)|gittim|I went|je suis allé
je suis venu(e)|geldim|I came|je suis venu
il est parti|gitti, ayrıldı|he left
elle est arrivée|vardı, geldi|she arrived
nous sommes rentrés|eve döndük|we came back home
ils sont restés|kaldılar|they stayed
elle est née|doğdu|she was born
je suis tombé(e)|düştüm|I fell|je suis tombé`, {
          fr: "Une quinzaine de verbes de mouvement (aller, venir, partir, arriver, rester, tomber, naître…) utilisent « être ». Avec « être », le participe s'accorde : elle est allée, ils sont partis.",
          tr: "Yaklaşık on beş hareket fiili (aller, venir, partir, arriver, rester, tomber, naître…) 'être' ile kurulur. 'Être' ile ortaç özneye uyar: bir kadın 'je suis allée' yazar (sonda -e), bir grup 'nous sommes allés'. Okunuş aynı, fark sadece yazıda!",
          en: "About fifteen verbs of movement (aller, venir, partir, arriver, rester, tomber, naître…) use 'être'. With 'être' the participle agrees: elle est allée, ils sont partis. It sounds the same; only the spelling changes."
        }),
        G("Hier, la semaine dernière", "Dün, geçen hafta", "Yesterday, last week", `
hier|dün|yesterday
hier soir|dün akşam|last night, yesterday evening
avant-hier|evvelsi gün|the day before yesterday
ce matin|bu sabah|this morning
la semaine dernière|geçen hafta|last week
le mois dernier|geçen ay|last month
l'année dernière|geçen yıl|last year
il y a deux jours|iki gün önce|two days ago
déjà|zaten, daha önce|already, ever
Je n'ai pas mangé.|Yemek yemedim.|I didn't eat.
Hier, je suis allée à la piscine.|Dün havuza gittim.|Yesterday I went to the pool.`, {
          fr: "« Il y a » + durée = « ago » : il y a deux jours. À la négation, « ne… pas » entoure seulement « avoir » ou « être » : je n'ai pas mangé.",
          tr: "'Il y a' + süre = '… önce': il y a deux jours (iki gün önce). Olumsuzda 'ne… pas' sadece yardımcı fiili sarar: je n'ai pas mangé (yemedim). 'Dernier / dernière' (geçen) de 'prochain' gibi arkaya gelir: la semaine dernière.",
          en: "'Il y a' + time = 'ago': il y a deux jours. In the negative, 'ne… pas' wraps only avoir or être: je n'ai pas mangé."
        })
      ] },

    /* ───────────── 31. Health ───────────── */
    { id: "health", emoji: "🩺", kind: "words", t: { fr: "Chez le médecin et à la pharmacie", tr: "Doktorda ve eczanede", en: "At the doctor & the pharmacy" },
      intro: {
        fr: "Dire ce qui ne va pas, comprendre le médecin et demander un médicament : les phrases essentielles pour se soigner en France, sans stress.",
        tr: "Neyinizin olduğunu söylemek, doktoru anlamak ve eczaneden ilaç istemek: Fransa'da stres yapmadan tedavi olmak için temel cümleler. Sağlık geçmişiniz sayesinde birçok kelime size tanıdık gelecek!",
        en: "Saying what's wrong, understanding the doctor and asking for medicine: the essential phrases for getting care in France, stress-free."
      },
      groups: [
        G("J'ai mal…", "… ağrıyor", "It hurts…", `
J'ai mal à la gorge.|Boğazım ağrıyor.|I have a sore throat.
J'ai mal au genou.|Dizim ağrıyor.|My knee hurts.
J'ai mal à l'oreille.|Kulağım ağrıyor.|I have an earache.
J'ai mal aux dents.|Dişlerim ağrıyor.|I have toothache.
J'ai mal partout.|Her yerim ağrıyor.|I ache all over.
Ça me gratte.|Kaşınıyor.|It itches.
Ça me fait mal quand je marche.|Yürüyünce acıyor.|It hurts when I walk.
Depuis quand ?|Ne zamandan beri?|Since when?
Depuis trois jours.|Üç gündür.|For three days.`, {
          fr: "Avoir mal + à la, au, à l', aux. Le médecin demande toujours « depuis quand ? » : préparez la réponse (depuis hier, depuis une semaine).",
          tr: "Türkçede 'başım ağrıyor' deriz, Fransızca 'başa ağrım var' der: j'ai mal à la tête. à la / au / à l' / aux seçimi organın cinsiyetine bağlı. Doktor hep 'depuis quand ?' (ne zamandır?) diye sorar; cevabı önceden hazırlayın: depuis hier (dünden beri).",
          en: "Avoir mal + à la, au, à l', aux. The doctor always asks « depuis quand ? »: prepare your answer (depuis hier, depuis une semaine)."
        }),
        G("Les symptômes", "Belirtiler", "Symptoms", `
J'ai de la fièvre.|Ateşim var.|I have a temperature.
Je tousse.|Öksürüyorum.|I'm coughing.
J'ai le nez qui coule.|Burnum akıyor.|I have a runny nose.
Je suis enrhumé(e).|Nezle oldum.|I have a cold.|je suis enrhumé
J'ai la grippe.|Grip oldum.|I have the flu.
J'ai mal au cœur.|Midem bulanıyor.|I feel sick (nauseous).
J'ai la tête qui tourne.|Başım dönüyor.|I feel dizzy.
J'ai vomi.|Kustum.|I've been sick (vomited).
Je dors mal.|Kötü uyuyorum.|I'm sleeping badly.
Je suis allergique à la pénicilline.|Penisiline alerjim var.|I'm allergic to penicillin.`, {
          fr: "Attention : « j'ai mal au cœur » ne parle pas du cœur ! Ça veut dire qu'on a envie de vomir.",
          tr: "Tuzak: 'j'ai mal au cœur' kelimesi kelimesine 'kalbim ağrıyor' ama aslında 'midem bulanıyor' demek! Kalp ağrısı için doktora 'j'ai mal à la poitrine' (göğsüm ağrıyor) deyin. Alerjiniz varsa bu cümleyi telefonunuza not edin.",
          en: "Trap: « j'ai mal au cœur » isn't about your heart! It means you feel nauseous. For chest pain, say « j'ai mal à la poitrine »."
        }),
        G("Chez le médecin", "Doktorda", "At the doctor's", `
le médecin généraliste|pratisyen hekim, aile hekimi|GP, family doctor
prendre rendez-vous|randevu almak|to make an appointment
la consultation|muayene|consultation, appointment
la salle d'attente|bekleme salonu|waiting room
la carte Vitale|Fransız sağlık sigortası kartı|French health insurance card|la carte vitale
Qu'est-ce qui ne va pas ?|Neyiniz var? Şikâyetiniz ne?|What's wrong?
Respirez fort.|Derin nefes alın.|Breathe in deeply.
Rien de grave.|Ciddi bir şey yok.|Nothing serious.
un arrêt maladie|hastalık izni, rapor|sick note, sick leave`, {
          fr: "Pour prendre rendez-vous, beaucoup de médecins utilisent une application ou un site internet. N'oubliez pas votre carte Vitale !",
          tr: "Fransa'da doktorların çoğuna internetten ya da bir uygulamadan randevu alınır. Muayeneye giderken carte Vitale'inizi unutmayın; masrafların geri ödenmesi buna bağlı. 'Un arrêt maladie' Türkiye'deki 'rapor' gibidir.",
          en: "Many doctors take appointments through an app or website. Don't forget your carte Vitale: your reimbursement depends on it. 'Un arrêt maladie' is a sick note for work."
        }),
        G("À la pharmacie", "Eczanede", "At the pharmacy", `
la pharmacie|eczane|chemist's, pharmacy
un médicament|ilaç|a medicine
un comprimé|tablet, hap|a tablet
du sirop|şurup|syrup||du sirop contre la toux
un pansement|yara bandı, pansuman|a plaster, a dressing
une pommade|merhem, krem|an ointment, a cream
le paracétamol|parasetamol|paracetamol
trois fois par jour|günde üç kez|three times a day
avant / après le repas|yemekten önce / sonra|before / after meals|avant le repas, après le repas
Vous avez quelque chose contre le mal de gorge ?|Boğaz ağrısı için bir şeyiniz var mı?|Do you have something for a sore throat?
la pharmacie de garde|nöbetçi eczane|duty pharmacy (open at night or on Sunday)`, {
          fr: "Le pharmacien donne beaucoup de bons conseils, gratuitement. La nuit et le dimanche, cherchez la « pharmacie de garde ».",
          tr: "Fransız eczacılar çok yardımsever ve ücretsiz tavsiye verir; küçük sorunlar için önce eczaneye gidebilirsiniz. Gece ve pazar günleri 'pharmacie de garde' (nöbetçi eczane) arayın, tam Türkiye'deki gibi! 'Contre' (karşı) = '… için': contre la toux = öksürük için.",
          en: "French pharmacists give lots of good advice for free. At night and on Sundays, look for the 'pharmacie de garde' (duty pharmacy). 'Contre' (against) = 'for': contre la toux = for a cough."
        })
      ] },

    /* ───────────── 32. Classroom ───────────── */
    { id: "classroom", emoji: "🏫", kind: "words", t: { fr: "En cours de français", tr: "Fransızca dersinde", en: "In French class" },
      intro: {
        fr: "Demander de répéter, épeler un mot, comprendre les consignes du professeur : avec ces phrases, vous participez au cours en français, même au début.",
        tr: "Tekrar istemek, bir kelimeyi harf harf sormak, öğretmenin talimatlarını anlamak: bu cümlelerle derse en başından Fransızca katılabilirsiniz. Soru sormak öğrenmenin bir parçası, utanmayın!",
        en: "Asking for repetition, spelling a word, understanding the teacher's instructions: with these phrases you can take part in class in French, right from the start."
      },
      groups: [
        G("Je ne comprends pas…", "Anlamıyorum…", "I don't understand…", `
Je ne comprends pas.|Anlamıyorum.|I don't understand.
Vous pouvez répéter, s'il vous plaît ?|Tekrar edebilir misiniz, lütfen?|Can you repeat, please?
Vous pouvez parler plus lentement ?|Daha yavaş konuşabilir misiniz?|Can you speak more slowly?
Je n'ai pas compris la question.|Soruyu anlamadım.|I didn't understand the question.
Pardon, je n'ai pas entendu.|Pardon, duymadım.|Sorry, I didn't hear.
Encore une fois, s'il vous plaît.|Bir kez daha, lütfen.|One more time, please.
C'est clair ?|Anlaşıldı mı?|Is that clear?
Oui, c'est clair.|Evet, anlaşıldı.|Yes, it's clear.`, {
          fr: "Ne pas comprendre, c'est normal en classe. « Vous pouvez répéter ? » est la phrase la plus utile de l'année !",
          tr: "Derste anlamamak tamamen normal; öğretmen sorulmasını ister. 'Vous pouvez répéter ?' yılın en faydalı cümlesi! Türkçedeki 'Bir daha söyler misiniz?' gibi kibar ve basit.",
          en: "Not understanding is normal in class. « Vous pouvez répéter ? » is the most useful sentence of the year!"
        }),
        G("Les mots", "Kelimeler hakkında", "Asking about words", `
Comment on dit « merci » en turc ?|'Merci' Türkçede nasıl denir?|How do you say 'merci' in Turkish?
Ça s'écrit comment ?|Nasıl yazılıyor?|How do you spell it?
Ça se prononce comment ?|Nasıl telaffuz ediliyor?|How do you pronounce it?
Que veut dire « rentrée » ?|'Rentrée' ne demek?|What does 'rentrée' mean?
C'est masculin ou féminin ?|Eril mi dişil mi?|Is it masculine or feminine?
Vous pouvez épeler, s'il vous plaît ?|Harf harf söyleyebilir misiniz?|Can you spell it, please?
Quelle est la différence entre « savoir » et « connaître » ?|'Savoir' ile 'connaître' arasındaki fark ne?|What's the difference between 'savoir' and 'connaître'?
C'est correct ?|Doğru mu?|Is that correct?
Je cherche le mot…|Kelimeyi arıyorum…|I'm looking for the word…|Je cherche le mot.`, {
          fr: "« Ça s'écrit comment ? » est très utile, car en français beaucoup de lettres ne se prononcent pas. Révisez l'alphabet pour comprendre la réponse !",
          tr: "Türkçe okunduğu gibi yazılır; Fransızca değil! Bu yüzden 'Ça s'écrit comment ?' (nasıl yazılıyor?) çok işe yarar. Cevabı anlamak için alfabe konusunu tekrar edin: özellikle 'g', 'j' ve 'e' harflerinin okunuşu Türkçeden farklı.",
          en: "« Ça s'écrit comment ? » is very handy because many French letters are silent. Review the alphabet so you understand the answer!"
        }),
        G("Les consignes du professeur", "Öğretmenin talimatları", "The teacher's instructions", `
Écoutez.|Dinleyin.|Listen.
Répétez.|Tekrar edin.|Repeat.
Lisez le texte.|Metni okuyun.|Read the text.
Écrivez.|Yazın.|Write.
Ouvrez votre livre page 12.|Kitabınızın 12. sayfasını açın.|Open your book at page 12.|Ouvrez votre livre page douze.
Travaillez à deux.|İkili çalışın.|Work in pairs.
Complétez les phrases.|Cümleleri tamamlayın.|Complete the sentences.
Cochez la bonne réponse.|Doğru cevabı işaretleyin.|Tick the right answer.
Soulignez les verbes.|Fiillerin altını çizin.|Underline the verbs.
Levez la main.|Elinizi kaldırın.|Raise your hand.`, {
          fr: "Les consignes utilisent l'impératif avec « vous » : écoutez, lisez, écrivez. Ce sont les mêmes mots dans les exercices du DELF.",
          tr: "Talimatlar 'vous' ile emir kipinde verilir: écoutez (dinleyin), lisez (okuyun), écrivez (yazın). Türkçedeki '-in / -ın' emri gibi. DELF sınavındaki talimatlar da aynı kelimeleri kullanır, şimdiden alışın!",
          en: "Instructions use the imperative with 'vous': écoutez, lisez, écrivez. The DELF exam uses exactly the same words."
        }),
        G("Dans la classe", "Sınıfta", "In the classroom", `
J'ai une question.|Bir sorum var.|I have a question.
Je peux aller aux toilettes ?|Tuvalete gidebilir miyim?|Can I go to the toilet?
Excusez-moi, je suis en retard.|Afedersiniz, geç kaldım.|Sorry, I'm late.
J'ai oublié mon cahier.|Defterimi unuttum.|I forgot my exercise book.
Vous pouvez l'écrire au tableau ?|Tahtaya yazabilir misiniz?|Can you write it on the board?
C'est quoi, les devoirs ?|Ödev ne?|What's the homework?
Je ne trouve pas le mot.|Kelimeyi bulamıyorum.|I can't find the word.`, {
          fr: "Si vous ne trouvez pas un mot, expliquez avec d'autres mots : « C'est une chose pour… ». C'est une vraie compétence, très appréciée à l'oral.",
          tr: "Bir kelimeyi bulamazsanız başka kelimelerle anlatın: 'C'est une chose pour…' (… için bir şey). Bu gerçek bir beceri ve sözlü sınavda çok takdir edilir. Türkçe kelimeyi söyleyip 'en français ?' diye sormak da tamamen serbest!",
          en: "If you can't find a word, explain it with other words: « C'est une chose pour… ». It's a real skill, and examiners appreciate it."
        })
      ] }
  );
})();
