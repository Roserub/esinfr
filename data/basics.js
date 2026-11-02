/* Basics: the first building blocks of French (alphabet, sounds, numbers, days, the house…), with audio. */
(function () {
  // item line: "fr|tr|en" or "fr|tr|en|say" or "fr|tr|en|say|ex". say = what the French voice reads (default: fr, leave empty to keep default). ex = optional short French example (word or phrase) also read aloud.
  const I = s => s.trim().split("\n").map(l => { const [fr, tr, en, say, ex] = l.split("|").map(x => x.trim()); return { fr, tr, en, say: say || "", ex: ex || "" }; });
  const G = (fr, tr, en, items, tip) => ({ t: { fr, tr, en }, items: I(items), tip: tip || null });
  window.BASICS = [

    /* ───────────── 1. Alphabet ───────────── */
    { id: "alphabet", emoji: "🔤", kind: "letters", t: { fr: "L'alphabet", tr: "Alfabe", en: "The alphabet" },
      intro: {
        fr: "Les 26 lettres, les accents et comment épeler votre nom. Bonne nouvelle : c'est le même alphabet que le turc, seuls les noms des lettres changent.",
        tr: "26 harf, aksanlar ve adınızı harf harf nasıl söyleyeceğiniz. İyi haber: Türkçeyle aynı Latin alfabesi, sadece harflerin adları farklı.",
        en: "The 26 letters, the accents and how to spell your name. Good news: it's the same alphabet as Turkish, only the letter names change."
      },
      groups: [
        G("De A à I", "A'dan I'ya", "A to I", `
A|a (Türkçe 'a')|'ah'|a|ami
B|be|'bay'|bé|bonjour
C|se — 'a, o, u' önünde 'k', 'e, i' önünde 's' okunur|'say' — sounds k before a/o/u, s before e/i|cé|café, ici
D|de|'day'|dé|dame
E|ö (kısa, hafif)|'uh'|euh|le
F|ef|'eff'|effe|femme
G|je — 'a, o, u' önünde 'g', 'e, i' önünde 'j' okunur|'zhay' — hard g before a/o/u, 'zh' before e/i|gé|gâteau, girafe
H|aş — kelimede hiç okunmaz|'ash' — always silent in words|hache|hôtel
I|i|'ee'|i|île`, {
          fr: "Attention aux noms : E se dit « euh », G se dit « gé » et I se dit « i ». C'est souvent là qu'on se trompe en épelant.",
          tr: "Dikkat: E harfinin adı 'ö' gibi, G 'je', I ise 'i'. Harf harf söylerken en çok bu üçü karışır. H harfi kelimelerde asla okunmaz: hôtel = 'otel'.",
          en: "Careful with the names: E is 'uh', G is 'zhay' and I is 'ee'. These three are the usual spelling traps. H is never pronounced: hôtel = 'otel'."
        }),
        G("De J à R", "J'den R'ye", "J to R", `
J|ji (Türkçe 'j', 'jandarma'daki gibi)|'zhee' (s in 'measure')|ji|jour
K|ka (az kullanılır)|'kah' (rare letter)|ka|kilo
L|el|'ell'|elle|lune
M|em|'em'|emme|maman
N|en|'en'|enne|nuit
O|o|'oh'|o|orange
P|pe|'pay'|pé|pain
Q|kü — hemen hep 'qu' olarak, 'k' okunur|'kü' — almost always 'qu', sounds like k|ku|quatre
R|er — r gırtlaktan|'air' — throaty r|erre|rouge`, {
          fr: "J se dit « ji » : c'est exactement le « j » turc de « jandarma ». Q est presque toujours suivi de U, et « qu » se prononce « k ».",
          tr: "J harfi tam olarak Türkçedeki 'jandarma', 'garaj'daki j. Q harfinden sonra hemen hep U gelir ve 'qu' = 'k': quatre = 'katr'.",
          en: "J is the 's' sound of 'measure'. Q is almost always followed by U, and 'qu' sounds like 'k': quatre = 'katr'."
        }),
        G("De S à Z", "S'den Z'ye", "S to Z", `
S|es — iki ünlü arasında 'z' okunur|'ess' — between two vowels it sounds 'z'|esse|soleil, maison
T|te|'tay'|té|table
U|ü (Türkçe 'ü' ile aynı!)|say 'ee' with rounded lips|u|une
V|ve|'vay'|vé|vélo
W|dubl ve (az kullanılır)|'doo-bluh vay' (rare)|double vé|wagon
X|iks|'eeks'|ixe|taxi
Y|i grek (= 'Yunan i')|'ee grek' (Greek i)|i grec|yaourt
Z|zed|'zed'|zède|zéro`, {
          fr: "U se dit comme le « ü » turc : vous l'avez déjà ! W se dit « double vé » et Y « i grec ».",
          tr: "Fransızca U = Türkçe Ü. Bu sesi zaten biliyorsunuz, İngilizce konuşanlardan çok şanslısınız! W 'dubl ve', Y ise 'i grek' diye okunur.",
          en: "French U is the Turkish 'ü': lips round as for 'oo', tongue as for 'ee'. W is 'double vé' and Y is 'i grec' (Greek i)."
        }),
        G("Accents et lettres spéciales", "Aksanlar ve özel harfler", "Accents & special letters", `
é|accent aigu: kapalı 'e', Türkçe 'e' gibi|acute accent: like 'ay' in 'day', short|e accent aigu|café, été
è|accent grave: açık 'e', 'ev'deki e gibi|grave accent: 'e' in 'bed'|e accent grave|mère, très
ê|accent circonflexe: açık 'e' (è gibi)|circumflex: open 'e' like è|e accent circonflexe|fête, forêt
ë|tréma: ünlü ayrı okunur|diaeresis: the vowel is said separately|e tréma|Noël
à|accent grave: 'a', sadece anlamı ayırır (a = var, à = -e/-de)|just 'a': only changes the meaning (a = has, à = to/at)|a accent grave|à Paris, voilà
â|accent circonflexe: 'a'|just 'a'|a accent circonflexe|gâteau, âge
ç|cédille: 's' okunur (Türkçe 'ç' DEĞİL!)|cedilla: sounds 's'|c cédille|ça, garçon
î|accent circonflexe: 'i'|just 'i'|i accent circonflexe|île, dîner
ï|tréma: 'i' ayrı okunur|'i' said separately|i tréma|maïs, naïf
ô|accent circonflexe: kapalı 'o'|closed 'oh'|o accent circonflexe|hôtel, tôt
ù|accent grave: sadece 'où' (nerede) kelimesinde, 'u' okunur|only in 'où' (where), sounds 'oo'|u accent grave|où
û|accent circonflexe: 'ü'|sounds 'ü'|u accent circonflexe|sûr
œ|'ö' (o ve e bitişik)|'o' and 'e' joined: like 'ur' in 'fur'|o e dans l'o|cœur, sœur`, {
          fr: "Attention : le « ç » français se prononce « s », pas comme le « ç » turc ! Et « é » ressemble beaucoup au « e » turc.",
          tr: "Dikkat: Fransızca 'ç' = 's'! Türkçe 'ç' sesi değil: garçon = 'garson'. Fransızca 'é' ise Türkçe 'e'ye çok benzer. Aksanlar Türk klavyede yoksa telefonda harfe uzun basın.",
          en: "Careful: French 'ç' sounds like 's': garçon = 'garson'. The accents matter in writing; on a phone, long-press the letter to find them."
        }),
        G("Épeler son nom", "Adını harf harf söylemek", "Spelling your name", `
Comment ça s'écrit ?|Nasıl yazılıyor?|How do you spell it?
Ça s'écrit E-S-I-N.|E-S-I-N diye yazılıyor.|It's spelt E-S-I-N.|Ça s'écrit euh, esse, i, enne.
Vous pouvez épeler, s'il vous plaît ?|Harf harf söyler misiniz, lütfen?|Can you spell it, please?
mon prénom|adım (ilk adım)|my first name
mon nom de famille|soyadım|my surname
double l|çift l (ll)|double l
e accent aigu|aksanlı e (é)|e with an acute accent (é)
en majuscule|büyük harfle|in capital letters
en minuscule|küçük harfle|in small letters
un trait d'union|kısa çizgi (-)|a hyphen (-)
une apostrophe|kesme işareti (')|an apostrophe (')
arobase|@ işareti|at sign (@)
point|nokta (.)|dot (.)
tout attaché|bitişik, boşluksuz|all one word, no space`, {
          fr: "Pour une adresse e-mail : « esin point demir arobase gmail point com ». Prenez votre temps, c'est normal de demander de répéter.",
          tr: "E-posta adresi söylerken: 'esin point demir arobase gmail point com'. Acele etmeyin; tekrar istemek tamamen normal.",
          en: "For an e-mail address: 'esin point demir arobase gmail point com'. Take your time; asking someone to repeat is completely normal."
        })
      ] },

    /* ───────────── 2. Sounds ───────────── */
    { id: "sounds", emoji: "🗣️", kind: "sounds", t: { fr: "Les sons", tr: "Sesler", en: "Sounds" },
      intro: {
        fr: "Comment lire le français à voix haute : voyelles, sons nasaux, lettres muettes et liaisons. Le turc vous aide beaucoup : vous avez déjà « ü », « ö », « ş » et « j » !",
        tr: "Fransızcayı sesli okumayı öğreneceksiniz: ünlüler, genizden sesler, okunmayan harfler ve bağlamalar. Türkçe size çok yardım ediyor: 'ü', 'ö', 'ş' ve 'j' seslerini zaten biliyorsunuz!",
        en: "How to read French aloud: vowels, nasal sounds, silent letters and liaisons. Your Turkish helps a lot: you already have 'ü', 'ö', 'ş' and 'j'!"
      },
      groups: [
        G("Voyelles et groupes de voyelles", "Ünlüler ve ünlü grupları", "Vowels & vowel combinations", `
a|Türkçe 'a'|'a' in 'father', but short|chat|chat, ami, papa
é, -er, -ez|Türkçe 'e' (kapalı, gülümseyerek)|like 'ay' in 'day', short, no glide|été|été, parler, chez
è, ê, ai, ei|açık 'e', 'ev'deki e gibi|'e' in 'bed'|mère|mère, fête, lait
e (le, de)|kısa, hafif 'ö'|short 'uh' as in 'the'|le|le, petit, demain
i, y|Türkçe 'i'|'ee' in 'see', short|lit|lit, vie, stylo
o, au, eau|kapalı 'o', dudaklar yuvarlak|'oh' without the 'w' glide|beau|beau, chaud, vélo
o (porte)|açık 'o', 'kol'daki o gibi|'o' in British 'hot'|porte|porte, école, homme
ou, où|Türkçe 'u'|'oo' in 'food'|vous|vous, rouge, bonjour
u, û|Türkçe 'ü' — tamamen aynı!|say 'ee' with lips rounded as for 'oo'|tu|tu, rue, sûr
eu, œu (deux)|Türkçe 'ö'|like 'ur' in 'fur' with round lips, no r|deux|deux, bleu, peu
eu, œu (sœur)|biraz daha açık 'ö'|the same, a little more open|sœur|sœur, heure, fleur
oi|'ua' ('vua' gibi)|'wa' as in 'water', short|moi|moi, toi, trois
ui|'üi' — ü ve i hızlıca|'wee' with a rounded 'ü'|huit|huit, nuit, je suis`, {
          fr: "Le français est très régulier une fois qu'on connaît les groupes : « ou » = u turc, « u » = ü turc, « eu » = ö turc, « au/eau » = o.",
          tr: "Altın kural: 'ou' = Türkçe U, 'u' = Türkçe Ü, 'eu' = Türkçe Ö, 'au/eau' = O, 'oi' = 'ua'. Yazılışı garip görünse de kurallar çok düzenli.",
          en: "Golden rule: 'ou' = 'oo', 'u' = the rounded 'ü', 'eu' ≈ 'ur' with round lips, 'au/eau' = 'oh', 'oi' = 'wa'. The spelling looks odd but it's very regular."
        }),
        G("Les voyelles nasales", "Genizden ünlüler", "Nasal vowels", `
an, am, en, em|genizden 'a' — n okunmaz|nasal 'ah' — don't say the n|enfant|enfant, chambre, temps
on, om|genizden 'o' — n okunmaz|nasal 'oh' — no n|bon|bon, nom, maison
in, im, ain, ein|genizden açık 'e'|nasal version of 'a' in 'cat'|vin|vin, pain, plein
un, um|bugün çoğu kişi 'in' gibi söyler|today mostly said like 'in'|un|un, lundi, parfum
ien|'y' + genizden 'e'|'y' + nasal 'in'|bien|bien, chien, italien
oin|'u' + genizden 'e' ('vuen' gibi)|'w' + nasal 'in'|loin|loin, coin, besoin
bon / bonne|ünlü veya nn gelirse genizden ses kaybolur: 'bon' ↔ 'bon-n'|before a vowel or double n the nasal goes: 'bonne' has a clear n|bon, bonne|bonne, une, ami`, {
          fr: "Pour un son nasal, l'air passe aussi par le nez et on ne prononce pas le « n ». Pincez votre nez : vous devez sentir une vibration.",
          tr: "Türkçede bu sesler yok, o yüzden ilk başta zor gelmesi çok normal. Hava burundan da çıkar ve 'n' söylenmez: 'bon' = 'bo' + genizden. Burnunuzu hafifçe tutun: titreşim hissetmelisiniz.",
          en: "Air goes through the nose too, and the 'n' is not pronounced: 'bon' is 'bo' through the nose. Pinch your nose gently: you should feel it vibrate."
        }),
        G("Consonnes difficiles", "Zor ünsüzler", "Tricky consonants", `
r|gırtlaktan, hafif gargara gibi (yumuşak 'ğ'ye yakın)|in the throat, like a soft gargle|rouge|rouge, Paris, merci
j, ge, gi|Türkçe 'j' ('jandarma', 'garaj')|'s' in 'measure'|je|je, bonjour, manger
ga, go, gu, gr|Türkçe 'g'|hard 'g' as in 'go'|gare|gare, gomme, grand
gue, gui|'g' — u okunmaz|hard 'g' — the u is silent|guide|guide, langue, guitare
ch|Türkçe 'ş'|'sh'|chat|chat, chambre, chocolat
gn|'ny' ('nya' gibi)|'ny' as in 'canyon'|montagne|montagne, champignon, Espagne
ill, ille|Türkçe 'y'|'y' as in 'yes'|fille|fille, famille, travailler
ail, eil, euil|'ay', 'ey', 'öy'|'eye', 'ay', 'uh-y'|soleil|travail, soleil, fauteuil
qu|'k' — u okunmaz|'k' — the u is silent|qui|qui, quatre, quand
ca, co, cu|'k'|'k'|café|café, comme, cuisine
ç, ce, ci|'s'|'s'|ça|ça, merci, garçon
s (entre deux voyelles)|iki ünlü arasında 'z'|'z' between two vowels|maison|maison, rose, cuisine
ss|'s'|'s'|poisson|poisson, passer, aussi
th|sadece 't' (İngilizce 'th' değil)|just 't' — never English 'th'|thé|thé, théâtre, Thomas
ph|'f'|'f'|photo|photo, pharmacie, téléphone
h|hiç okunmaz|always silent|hôtel|hôtel, homme, hier
-tion|'syon'|'syon', not 'shun'|attention|attention, natation, station
x|'ks' veya 'gz'|'ks' or 'gz'|taxi|taxi, exemple, examen`, {
          fr: "Le « r » français se fait au fond de la gorge, comme un petit gargarisme. « ch » = ş turc et « j » = j turc.",
          tr: "Fransız 'r'si dil ucuyla değil, gırtlağın arkasında yapılır; hafif gargara gibi. 'ch' = Türkçe 'ş' (chat = 'şa'), 'j' = Türkçe 'j'. 'ill' çoğu zaman 'y' okunur: fille = 'fiy' (istisnalar: ville, mille).",
          en: "The French 'r' is made at the back of the throat, like a light gargle. 'ch' = 'sh' (chat = 'sha'). 'ill' usually sounds 'y': fille = 'fee-y' (except ville, mille)."
        }),
        G("Les lettres muettes", "Okunmayan harfler", "Silent letters", `
-s (à la fin)|sondaki s okunmaz|a final s is silent|trois|trois, vous, Paris
-t (à la fin)|sondaki t okunmaz|a final t is silent|petit|petit, chat, lit
-d (à la fin)|sondaki d okunmaz|a final d is silent|grand|grand, froid, pied
-x (à la fin)|sondaki x okunmaz|a final x is silent|deux|deux, prix, cheveux
-p, -g (à la fin)|sondaki p ve g okunmaz|a final p or g is silent|trop|trop, beaucoup, long
-z, -er (à la fin)|z okunmaz; -er = 'e'|z is silent; -er sounds 'ay'|nez|nez, chez, parler
-e (à la fin)|okunmaz, ama önceki ünsüzü duyurur|silent, but makes the consonant before it heard|petite|petit, petite, grande
-ent (verbes)|fiil sonundaki -ent okunmaz: 'ils parlent' = 'il parl'|silent on verbs: 'ils parlent' sounds like 'il parle'|ils parlent|ils parlent, elles mangent
c, r, f, l (à la fin)|sondaki c, r, f, l genelde okunur|a final c, r, f, l is usually pronounced|avec|avec, bonjour, neuf`, {
          fr: "En général, la dernière consonne ne se prononce pas. Astuce : les lettres de « CaReFuL » (c, r, f, l) se prononcent souvent.",
          tr: "Genel kural: kelimenin sonundaki ünsüz okunmaz. İngilizce 'CaReFuL' kelimesini hatırlayın: c, r, f, l harfleri sonda çoğu zaman okunur (avec, bonjour, neuf, sel).",
          en: "General rule: the last consonant is silent. Remember 'CaReFuL': final c, r, f and l are usually pronounced (avec, bonjour, neuf, sel)."
        }),
        G("Liaison et élision", "Bağlama ve kesme", "Liaison & elision", `
les amis|s bir sonraki ünlüye 'z' olarak bağlanır: 'le-za-mi'|the s joins the next vowel as 'z': 'lay-za-mee'|les amis|les amis, des enfants
vous avez|'vu-za-ve'|'voo-za-vay'|vous avez|vous avez, nous habitons
un homme|n bağlanır: 'ö-nom' (h okunmaz)|the n links: 'uh-nom' (silent h)|un homme|un homme, un ami
deux heures|x 'z' olur: 'dö-zör'|x becomes 'z': 'duh-zur'|deux heures|deux heures, trois ans
c'est un|t bağlanır: 'se-tön'|the t links: 'say-tuhn'|c'est un ami|c'est un ami, c'est important
l'eau|le + eau → l'eau (ünlüden önce e düşer)|le + eau → l'eau (the e drops before a vowel)|l'eau|l'eau, l'ami, l'hôtel
j'aime|je + aime → j'aime|je + aime → j'aime|j'aime|j'aime, j'ai, j'habite
c'est|ce + est → c'est|ce + est → c'est|c'est|c'est bon, c'est ici
n'|ne + ünlü → n'|ne before a vowel → n'|je n'ai pas|je n'ai pas, ce n'est pas
il y a|'ilya' — tek kelime gibi söylenir|'eel-ya', said as one word|il y a|il y a, il y a un problème
qu'est-ce que|'keskö'|'kess-kuh'|qu'est-ce que c'est|qu'est-ce que c'est, qu'il`, {
          fr: "Le français « coule » : les mots se lient entre eux. Le rythme est calme et régulier, avec juste un petit accent à la fin du groupe de mots.",
          tr: "Fransızca 'akar': kelimeler birbirine bağlanır, sanki tek kelimeymiş gibi. Ritim sakin ve düzenlidir; vurgu her kelimede değil, kelime grubunun sonunda hafifçe olur. Acele etmeyin.",
          en: "French flows: words link together as if they were one. The rhythm is calm and even, with a light stress only at the end of each group of words."
        }),
        G("Paires à ne pas confondre", "Karıştırılan çiftler", "Pairs not to confuse", `
vous / vu|u ↔ ü: 'siz' ↔ 'görülmüş'|'oo' vs 'ü': you vs seen|vous, vu|vous, vu
dessous / dessus|altında (u) ↔ üstünde (ü)|under ('oo') vs on top ('ü')|dessous, dessus|dessous, dessus
roue / rue|tekerlek (u) ↔ sokak (ü)|wheel ('oo') vs street ('ü')|roue, rue|roue, rue
pour / pur|için (u) ↔ saf (ü)|for ('oo') vs pure ('ü')|pour, pur|pour, pur
le / les|'lö' tekil ↔ 'le' çoğul|'luh' singular vs 'lay' plural|le, les|le livre, les livres
deux / douze|iki (ö) ↔ on iki (u + z)|two ('uh') vs twelve ('ooz')|deux, douze|deux, douze
cheveux / chevaux|saç (ö) ↔ atlar (o)|hair ('uh') vs horses ('oh')|cheveux, chevaux|cheveux, chevaux
poisson / poison|balık (ss = s) ↔ zehir (s = z)|fish (ss = s) vs poison (s = z)|poisson, poison|poisson, poison
dessert / désert|tatlı (ss = s) ↔ çöl (s = z)|dessert (s) vs desert (z)|dessert, désert|dessert, désert
bon / beau|genizden o ↔ normal o|nasal 'o' vs plain 'oh'|bon, beau|bon, beau
vin / vent / vont|şarap ↔ rüzgâr ↔ (onlar) gidiyor|wine, wind, (they) go|vin, vent, vont|vin, vent, vont
un / une|bir (eril, genizden) ↔ bir (dişil, 'ün')|a (masculine, nasal) vs a (feminine, 'ün')|un, une|un livre, une table
il / elle|o (erkek) ↔ o (kadın) — Türkçede tek 'o' var!|he vs she|il, elle|il est là, elle est là`, {
          fr: "Écoutez chaque paire plusieurs fois, puis répétez à voix haute. La différence « ou / u » est la plus importante.",
          tr: "Her çifti birkaç kez dinleyin, sonra yüksek sesle tekrarlayın. En önemlisi 'ou / u' farkı: Türkçede U ve Ü'yü zaten ayırıyorsunuz, aynısı!",
          en: "Listen to each pair a few times, then repeat aloud. The most important one is 'ou / u': 'oo' versus the rounded 'ü'."
        })
      ] },

    /* ───────────── 3. Numbers ───────────── */
    { id: "numbers", emoji: "🔢", kind: "words", t: { fr: "Les nombres", tr: "Sayılar", en: "Numbers" },
      intro: {
        fr: "Compter de 0 à un million, dire un prix et un numéro de téléphone. Le plus étrange : 70, 80 et 90, mais on y arrive pas à pas.",
        tr: "0'dan bir milyona kadar saymayı, fiyat ve telefon numarası söylemeyi öğreneceksiniz. En garip kısım 70, 80 ve 90; ama adım adım çözeceğiz.",
        en: "Count from 0 to a million, say prices and phone numbers. The strangest part is 70, 80 and 90, but we'll get there step by step."
      },
      groups: [
        G("De 0 à 20", "0'dan 20'ye", "0 to 20", `
0|sıfır|zero||zéro
1|bir|one||un
2|iki|two||deux
3|üç|three||trois
4|dört|four||quatre
5|beş|five||cinq
6|altı|six||six
7|yedi|seven||sept
8|sekiz|eight||huit
9|dokuz|nine||neuf
10|on|ten||dix
11|on bir|eleven||onze
12|on iki|twelve||douze
13|on üç|thirteen||treize
14|on dört|fourteen||quatorze
15|on beş|fifteen||quinze
16|on altı|sixteen||seize
17|on yedi|seventeen||dix-sept
18|on sekiz|eighteen||dix-huit
19|on dokuz|nineteen||dix-neuf
20|yirmi|twenty||vingt`, {
          fr: "De 11 à 16, chaque nombre a son propre mot. À partir de 17, c'est logique : dix-sept = dix + sept.",
          tr: "11'den 16'ya kadar her sayının kendi kelimesi var, ezberlemek gerekiyor. 17'den sonrası Türkçe gibi mantıklı: dix-sept = on + yedi.",
          en: "From 11 to 16 each number has its own word. From 17 it's logical: dix-sept = ten + seven."
        }),
        G("De 21 à 69", "21'den 69'a", "21 to 69", `
21|yirmi bir|twenty-one||vingt et un
22|yirmi iki|twenty-two||vingt-deux
25|yirmi beş|twenty-five||vingt-cinq
30|otuz|thirty||trente
31|otuz bir|thirty-one||trente et un
34|otuz dört|thirty-four||trente-quatre
40|kırk|forty||quarante
41|kırk bir|forty-one||quarante et un
48|kırk sekiz|forty-eight||quarante-huit
50|elli|fifty||cinquante
51|elli bir|fifty-one||cinquante et un
56|elli altı|fifty-six||cinquante-six
60|altmış|sixty||soixante
61|altmış bir|sixty-one||soixante et un
69|altmış dokuz|sixty-nine||soixante-neuf`, {
          fr: "Pour 21, 31, 41, 51 et 61, on dit « et un ». Pour les autres, on met un trait d'union : vingt-deux, trente-quatre.",
          tr: "21, 31, 41, 51, 61'de 've' (et) kullanılır: vingt et un = 'yirmi ve bir'. Diğerlerinde kısa çizgi var: vingt-deux.",
          en: "For 21, 31, 41, 51 and 61 you say 'and one' (et un). The others use a hyphen: vingt-deux."
        }),
        G("De 70 à 99", "70'ten 99'a", "70 to 99", `
70|yetmiş (60 + 10)|seventy (60 + 10)||soixante-dix
71|yetmiş bir (60 + 11)|seventy-one (60 + 11)||soixante et onze
72|yetmiş iki (60 + 12)|seventy-two (60 + 12)||soixante-douze
75|yetmiş beş (60 + 15)|seventy-five (60 + 15)||soixante-quinze
79|yetmiş dokuz (60 + 19)|seventy-nine (60 + 19)||soixante-dix-neuf
80|seksen (4 × 20)|eighty (4 × 20)||quatre-vingts
81|seksen bir (4 × 20 + 1)|eighty-one (4 × 20 + 1)||quatre-vingt-un
85|seksen beş|eighty-five||quatre-vingt-cinq
90|doksan (4 × 20 + 10)|ninety (4 × 20 + 10)||quatre-vingt-dix
91|doksan bir (4 × 20 + 11)|ninety-one (4 × 20 + 11)||quatre-vingt-onze
95|doksan beş|ninety-five||quatre-vingt-quinze
99|doksan dokuz (4 × 20 + 19)|ninety-nine (4 × 20 + 19)||quatre-vingt-dix-neuf`, {
          fr: "70 = 60 + 10, 80 = 4 × 20, 90 = 4 × 20 + 10. C'est étrange même pour les Français ! (En Belgique et en Suisse : septante, nonante.)",
          tr: "Türkçede yetmiş, seksen, doksan çok basit; Fransızcada ise hesap var: 70 = 60 + 10, 80 = 4 × 20, 90 = 4 × 20 + 10. Garip ama herkes zorlanır, siz de yavaş yavaş alışacaksınız. (Belçika ve İsviçre'de: septante, nonante.)",
          en: "70 = 60 + 10, 80 = 4 × 20, 90 = 4 × 20 + 10. Odd even to French people! (In Belgium and Switzerland: septante, nonante.)"
        }),
        G("Les grands nombres", "Büyük sayılar", "Big numbers", `
100|yüz|one hundred||cent
101|yüz bir|one hundred and one||cent un
150|yüz elli|one hundred and fifty||cent cinquante
200|iki yüz|two hundred||deux cents
250|iki yüz elli|two hundred and fifty||deux cent cinquante
500|beş yüz|five hundred||cinq cents
1000|bin|one thousand||mille
2000|iki bin|two thousand||deux mille
2026|iki bin yirmi altı|two thousand and twenty-six||deux mille vingt-six
10 000|on bin|ten thousand|dix mille|dix mille
1 000 000|bir milyon|one million|un million|un million`, {
          fr: "« Cent » ne prend pas « un » devant : on dit « cent », pas « un cent ». Pareil pour « mille ». Mille ne prend jamais de « s ».",
          tr: "Türkçedeki gibi 'yüz' ve 'bin' önüne 'bir' konmaz: cent = yüz, mille = bin. Binlikler nokta değil boşlukla ayrılır: 10 000.",
          en: "Like Turkish, no 'one' before cent (100) or mille (1000). Thousands are separated by a space, not a comma: 10 000."
        }),
        G("Les nombres ordinaux", "Sıra sayıları", "Ordinal numbers", `
premier / première|birinci (1er / 1re)|first (1st)||le premier jour
deuxième|ikinci (2e)|second (2nd)||le deuxième étage
troisième|üçüncü (3e)|third (3rd)||la troisième rue
quatrième|dördüncü|fourth||le quatrième mois
cinquième|beşinci|fifth||la cinquième leçon
sixième|altıncı|sixth||le sixième étage
septième|yedinci|seventh||le septième jour
huitième|sekizinci|eighth||la huitième place
neuvième|dokuzuncu|ninth||le neuvième mois
dixième|onuncu|tenth||la dixième fois
vingtième|yirminci|twentieth||le vingtième siècle
dernier / dernière|sonuncu|last||la dernière fois`, {
          fr: "Pour les ordinaux, on ajoute « -ième » : deux → deuxième. Seule exception : un → premier.",
          tr: "Türkçedeki '-inci' eki gibi Fransızcada '-ième' eklenir: deux → deuxième, trois → troisième. Tek istisna: bir → premier (birinci).",
          en: "Add '-ième', like '-th' in English: deux → deuxième. The only exception: un → premier (first)."
        }),
        G("Prix et téléphone", "Fiyat ve telefon", "Prices & phone numbers", `
1 €|bir avro|one euro|un euro
3,50 €|üç avro elli|three euros fifty|trois euros cinquante
0,80 €|seksen sent|eighty cents|quatre-vingts centimes
12,99 €|on iki avro doksan dokuz|twelve euros ninety-nine|douze euros quatre-vingt-dix-neuf
20 €|yirmi avro|twenty euros|vingt euros
le numéro de téléphone|telefon numarası|phone number
06 12 34 56 78|ikişer ikişer okunur|said in pairs|zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit
01 45 67 89 90|ikişer ikişer okunur (sabit hat)|said in pairs (landline)|zéro un, quarante-cinq, soixante-sept, quatre-vingt-neuf, quatre-vingt-dix`, {
          fr: "En France, on écrit une virgule pour les centimes (3,50 €) et on dit les numéros de téléphone deux chiffres par deux chiffres.",
          tr: "Fransa'da kuruşlar virgülle yazılır (3,50 €) ve fiyatta 'euros' kelimesi ortada söylenir: 'trois euros cinquante'. Telefon numaraları ikişer ikişer okunur: 06 = 'zéro six', 12 = 'douze'.",
          en: "In France a comma is used for cents (3,50 €) and 'euros' goes in the middle: 'trois euros cinquante'. Phone numbers are read two digits at a time: 06 = 'zéro six', 12 = 'douze'."
        })
      ] },

    /* ───────────── 4. Calendar ───────────── */
    { id: "calendar", emoji: "📅", kind: "words", t: { fr: "Le calendrier", tr: "Takvim", en: "The calendar" },
      intro: {
        fr: "Les jours, les mois, les saisons et les dates. Astuce : en français, les jours et les mois s'écrivent en minuscule.",
        tr: "Günler, aylar, mevsimler ve tarihler. İpucu: Fransızcada gün ve ay adları küçük harfle yazılır.",
        en: "Days, months, seasons and dates. Tip: in French, days and months are written in lowercase."
      },
      groups: [
        G("Les jours de la semaine", "Haftanın günleri", "Days of the week", `
lundi|pazartesi|Monday
mardi|salı|Tuesday
mercredi|çarşamba|Wednesday
jeudi|perşembe|Thursday
vendredi|cuma|Friday
samedi|cumartesi|Saturday
dimanche|pazar|Sunday
le lundi|her pazartesi|on Mondays (every Monday)||Le lundi, je travaille.
lundi prochain|gelecek pazartesi|next Monday
lundi dernier|geçen pazartesi|last Monday`, {
          fr: "Pas de préposition avec les jours : « lundi, je vais à Paris ». Avec « le », c'est une habitude : « le lundi » = tous les lundis.",
          tr: "Günlerle edat kullanılmaz: 'lundi, je vais à Paris' = pazartesi Paris'e gidiyorum. Başına 'le' gelirse alışkanlık olur: 'le lundi' = her pazartesi. Hafta pazartesi başlar.",
          en: "No preposition with days: 'lundi, je vais à Paris' = on Monday I'm going to Paris. With 'le' it's a habit: 'le lundi' = every Monday."
        }),
        G("Les mois", "Aylar", "Months", `
janvier|ocak|January
février|şubat|February
mars|mart|March
avril|nisan|April
mai|mayıs|May
juin|haziran|June
juillet|temmuz|July
août|ağustos ('ut' okunur)|August (said 'oot')
septembre|eylül|September
octobre|ekim|October
novembre|kasım|November
décembre|aralık|December
en mai|mayısta|in May`, {
          fr: "On dit « en » + mois : en mai, en août. « Août » se prononce simplement « oute ».",
          tr: "'Mayısta' demek için: en + ay: en mai, en août. 'Août' sadece 'ut' diye okunur. Aylar Türkçeden farklı olarak Latince köklü, İngilizceye çok benzer.",
          en: "Use 'en' + month: en mai (in May). 'Août' is just pronounced 'oot'. The months look a lot like the English ones."
        }),
        G("Les saisons", "Mevsimler", "Seasons", `
le printemps|ilkbahar|spring||au printemps
l'été|yaz|summer||en été
l'automne|sonbahar|autumn||en automne
l'hiver|kış|winter||en hiver
la saison|mevsim|season`, {
          fr: "On dit « en été, en automne, en hiver », mais « au printemps ».",
          tr: "'Yazın, sonbaharda, kışın' = en été, en automne, en hiver. Ama ilkbahar farklı: au printemps. Automne'deki m okunmaz: 'oton'.",
          en: "You say 'en été, en automne, en hiver' but 'au printemps'. The m in automne is silent: 'oton'."
        }),
        G("Les dates", "Tarihler", "Dates", `
le 1er mai|1 Mayıs|1st May|le premier mai
le 14 juillet|14 Temmuz (Fransa'nın milli bayramı)|14 July (French national day)|le quatorze juillet
le 29 octobre|29 Ekim (Cumhuriyet Bayramı)|29 October (Turkish Republic Day)|le vingt-neuf octobre
le 25 décembre|25 Aralık (Noel)|25 December (Christmas)|le vingt-cinq décembre
le 2 novembre 2026|2 Kasım 2026|2 November 2026|le deux novembre deux mille vingt-six
Quelle est la date aujourd'hui ?|Bugün ayın kaçı?|What's the date today?
On est le combien aujourd'hui ?|Bugün ayın kaçı? (günlük dil)|What's the date today? (casual)
Nous sommes le 3 mars.|Bugün 3 Mart.|It's the 3rd of March.|Nous sommes le trois mars.
Mon anniversaire, c'est le 12 avril.|Doğum günüm 12 Nisan'da.|My birthday is on 12 April.|Mon anniversaire, c'est le douze avril.`, {
          fr: "Pour les dates, on dit « le » + nombre normal : le 3 mars, le 14 juillet. Seule exception : le premier (1er).",
          tr: "Tarihlerde 'le' + normal sayı kullanılır (sıra sayısı değil): le 3 mars = 'le trois mars'. Tek istisna ayın biri: le premier mai (1er).",
          en: "Dates use 'le' + the normal number, not 'third': le 3 mars = 'le trois mars'. Only the 1st is different: le premier mai."
        }),
        G("Les mots du temps", "Zaman kelimeleri", "Time words", `
aujourd'hui|bugün|today
demain|yarın|tomorrow
hier|dün|yesterday
après-demain|öbür gün|the day after tomorrow
avant-hier|evvelsi gün|the day before yesterday
le jour|gün|day
la semaine|hafta|week
le week-end|hafta sonu|weekend
le mois|ay|month
l'année|yıl|year
le matin|sabah|morning
l'après-midi|öğleden sonra|afternoon
le soir|akşam|evening
la nuit|gece|night
ce matin|bu sabah|this morning
ce soir|bu akşam|this evening, tonight
tous les jours|her gün|every day
la semaine prochaine|gelecek hafta|next week
la semaine dernière|geçen hafta|last week
maintenant|şimdi|now
bientôt|yakında|soon`)
      ] },

    /* ───────────── 5. Time ───────────── */
    { id: "time", emoji: "🕐", kind: "words", t: { fr: "L'heure", tr: "Saat", en: "Telling the time" },
      intro: {
        fr: "Demander et dire l'heure, et être à l'heure à vos rendez-vous. Astuce : on dit toujours « Il est… heures ».",
        tr: "Saati sormayı, söylemeyi ve randevulara zamanında gitmeyi öğreneceksiniz. İpucu: saat her zaman 'Il est … heures' kalıbıyla söylenir.",
        en: "Ask and tell the time, and be on time for appointments. Tip: you always say 'Il est … heures' (it is … hours)."
      },
      groups: [
        G("Demander l'heure", "Saati sormak", "Asking the time", `
Quelle heure est-il ?|Saat kaç?|What time is it?
Il est quelle heure ?|Saat kaç? (günlük dil)|What time is it? (casual)
Vous avez l'heure, s'il vous plaît ?|Saatiniz var mı, lütfen?|Do you have the time, please?
À quelle heure ?|Saat kaçta?|At what time?
À quelle heure commence le cours ?|Ders saat kaçta başlıyor?|What time does the class start?`),
        G("Dire l'heure", "Saati söylemek", "Telling the time", `
Il est une heure.|Saat bir.|It's one o'clock.
8 h|saat sekiz|eight o'clock|huit heures
8 h 05|sekizi beş geçiyor|five past eight|huit heures cinq
8 h 15|sekizi çeyrek geçiyor|quarter past eight|huit heures et quart|huit heures quinze
8 h 20|sekizi yirmi geçiyor|twenty past eight|huit heures vingt
8 h 30|sekiz buçuk|half past eight|huit heures et demie|huit heures trente
8 h 45|dokuza çeyrek var|quarter to nine|neuf heures moins le quart|huit heures quarante-cinq
8 h 50|dokuza on var|ten to nine|neuf heures moins dix
midi|öğle, saat on iki|midday, noon
minuit|gece yarısı|midnight
12 h 30|on iki buçuk (öğlen)|half past twelve (midday)|midi et demi
14 h|saat on dört (öğleden sonra iki)|2 p.m. (14:00)|quatorze heures
17 h 45|on yedi kırk beş|5:45 p.m. (17:45)|dix-sept heures quarante-cinq
20 h 30|yirmi otuz (akşam sekiz buçuk)|8:30 p.m. (20:30)|vingt heures trente`, {
          fr: "« Et quart » = +15, « et demie » = +30, « moins le quart » = –15. Dans les gares et les horaires, on utilise les 24 heures : 14 h, 20 h 30.",
          tr: "'Et quart' = çeyrek geçiyor, 'et demie' = buçuk, 'moins le quart' = çeyrek var. Tren, doktor, iş saatlerinde 24 saat sistemi kullanılır, tıpkı Türkiye'deki gibi: 14 h = 'quatorze heures'. Yazarken 'h' kullanılır: 8 h 15.",
          en: "'Et quart' = quarter past, 'et demie' = half past, 'moins le quart' = quarter to. Timetables and appointments use the 24-hour clock: 14 h = 'quatorze heures'. Written with 'h': 8 h 15."
        }),
        G("Durées et ponctualité", "Süre ve dakiklik", "Durations & being on time", `
une seconde|bir saniye|a second
une minute|bir dakika|a minute
une heure|bir saat|an hour
un quart d'heure|çeyrek saat|a quarter of an hour
une demi-heure|yarım saat|half an hour
à l'heure|zamanında|on time
en retard|geç (kalmış)|late
en avance|erken (gelmiş)|early
tôt|erken|early
tard|geç|late
vers 18 h|saat 18 civarı|around 6 p.m.|vers dix-huit heures`),
        G("Phrases utiles", "Faydalı cümleler", "Useful phrases", `
Je suis en retard, désolée !|Geç kaldım, özür dilerim!|I'm late, sorry!
Le cours commence à 9 h.|Ders saat 9'da başlıyor.|The class starts at 9.|Le cours commence à neuf heures.
Le magasin est ouvert de 9 h à 19 h.|Mağaza 9'dan 19'a kadar açık.|The shop is open from 9 to 7.|Le magasin est ouvert de neuf heures à dix-neuf heures.
Je me lève à 7 h.|Saat 7'de kalkarım.|I get up at 7.|Je me lève à sept heures.
On se voit à 15 h ?|Saat 15'te görüşelim mi?|Shall we meet at 3?|On se voit à quinze heures ?
Ça dure une heure.|Bir saat sürüyor.|It lasts an hour.
J'ai rendez-vous à 10 h 30.|Saat 10.30'da randevum var.|I have an appointment at 10:30.|J'ai rendez-vous à dix heures trente.`)
      ] },

    /* ───────────── 6. Greetings ───────────── */
    { id: "greetings", emoji: "👋", kind: "words", t: { fr: "Saluer et se présenter", tr: "Selamlaşma ve tanışma", en: "Greetings & introductions" },
      intro: {
        fr: "Dire bonjour, au revoir, merci et vous présenter avec confiance. Astuce : en France, on dit toujours « Bonjour » en entrant dans un magasin.",
        tr: "Merhaba, hoşça kal, teşekkürler demeyi ve kendinizi rahatça tanıtmayı öğreneceksiniz. İpucu: Fransa'da bir dükkâna girerken mutlaka 'Bonjour' denir.",
        en: "Say hello, goodbye, thank you and introduce yourself with confidence. Tip: in France, always say 'Bonjour' when you walk into a shop."
      },
      groups: [
        G("Bonjour et au revoir", "Merhaba ve hoşça kal", "Hello & goodbye", `
Bonjour !|Merhaba! / Günaydın! (gündüz)|Hello! / Good morning! (daytime)
Bonsoir !|İyi akşamlar! (akşam selamı)|Good evening! (greeting)
Salut !|Selam! (arkadaşlar arası)|Hi! / Bye! (with friends)
Coucou !|Selam! (çok samimi)|Hey there! (very friendly)
Au revoir !|Hoşça kalın!|Goodbye!
À bientôt !|Yakında görüşürüz!|See you soon!
À demain !|Yarın görüşürüz!|See you tomorrow!
À plus tard !|Sonra görüşürüz!|See you later!
Bonne journée !|İyi günler!|Have a nice day!
Bonne soirée !|İyi akşamlar! (vedalaşırken)|Have a nice evening!
Bonne nuit !|İyi geceler!|Good night!
Bon week-end !|İyi hafta sonları!|Have a nice weekend!
Bienvenue !|Hoş geldiniz!|Welcome!`, {
          fr: "« Bonjour » s'utilise toute la journée, « Bonsoir » à partir de 18 h environ. En partant, on dit « Bonne journée » ou « Bonne soirée ».",
          tr: "'Bonjour' bütün gün kullanılır (sabah, öğle), akşam 18 civarından sonra 'Bonsoir'. Ayrılırken 'Bonne journée' / 'Bonne soirée' denir. 'Bonne nuit' sadece yatmadan önce.",
          en: "'Bonjour' works all day; 'Bonsoir' from about 6 p.m. When leaving, say 'Bonne journée' or 'Bonne soirée'. 'Bonne nuit' is only for bedtime."
        }),
        G("Tu ou vous ?", "Sen mi, siz mi?", "Tu or vous?", `
tu|sen (aile, arkadaş, çocuk)|you (family, friends, children)
vous|siz (resmî veya çoğul)|you (polite, or plural)
On se tutoie ?|Senli benli konuşalım mı?|Shall we say 'tu'?
Madame|Hanımefendi|Madam
Monsieur|Beyefendi|Sir
Bonjour, madame.|Merhaba, hanımefendi.|Hello, madam.`, {
          fr: "Comme en turc avec « sen » et « siz » ! Avec un inconnu, au travail ou dans un magasin, utilisez « vous ».",
          tr: "Türkçedeki 'sen / siz' ayrımının aynısı! Tanımadığınız kişilerle, işte, dükkânda 'vous' deyin. Karşınızdaki 'tu' derse siz de 'tu'ya geçebilirsiniz.",
          en: "Just like Turkish 'sen / siz'. With strangers, at work or in shops, use 'vous'. If the other person switches to 'tu', you can too."
        }),
        G("La politesse", "Nezaket", "Politeness", `
s'il vous plaît|lütfen (siz)|please (polite)
s'il te plaît|lütfen (sen)|please (informal)
Merci !|Teşekkürler!|Thank you!
Merci beaucoup !|Çok teşekkürler!|Thank you very much!
De rien.|Bir şey değil.|You're welcome.
Je vous en prie.|Rica ederim.|You're welcome. (polite)
Pardon !|Pardon!|Sorry! / Excuse me!
Excusez-moi.|Affedersiniz.|Excuse me.
Désolée.|Üzgünüm, özür dilerim. (kadın)|I'm sorry. (said by a woman)
Avec plaisir !|Memnuniyetle!|With pleasure!`),
        G("Se présenter", "Kendini tanıtmak", "Introducing yourself", `
Je m'appelle Esin.|Benim adım Esin.|My name is Esin.
Comment vous appelez-vous ?|Adınız ne?|What's your name? (polite)
Tu t'appelles comment ?|Adın ne?|What's your name? (casual)
J'ai 35 ans.|35 yaşındayım.|I'm 35.|J'ai trente-cinq ans.
Quel âge avez-vous ?|Kaç yaşındasınız?|How old are you?
Je viens de Turquie.|Türkiye'den geliyorum.|I come from Turkey.
Je suis turque.|Türküm. (kadın)|I'm Turkish. (woman)
J'habite en France.|Fransa'da yaşıyorum.|I live in France.
J'habite à Lyon.|Lyon'da oturuyorum.|I live in Lyon.
J'étais kinésithérapeute du sport.|Spor fizyoterapistiydim.|I was a sports physiotherapist.
Enchantée !|Memnun oldum! (kadın)|Nice to meet you! (said by a woman)
Ravie de vous rencontrer.|Sizinle tanıştığıma çok sevindim. (kadın)|Delighted to meet you. (woman)
Je vous présente Claire.|Size Claire'i tanıştırayım.|Let me introduce Claire.`, {
          fr: "Pour l'âge, on utilise « avoir » : « J'ai 35 ans » (littéralement : j'ai 35 années). Une femme écrit « Enchantée » et « turque » avec un « e ».",
          tr: "Yaş söylerken 'olmak' değil 'sahip olmak' fiili kullanılır: J'ai 35 ans = '35 yılım var'. Kadın olduğunuz için 'Enchantée', 'turque', 'désolée' yazılır (sonda e). Okunuşu genelde aynı.",
          en: "Age uses 'avoir' (to have): J'ai 35 ans = 'I have 35 years'. As a woman you write 'Enchantée', 'turque', 'désolée' with an extra e; the sound is usually the same."
        }),
        G("Comment ça va ?", "Nasılsınız?", "How are you?", `
Comment allez-vous ?|Nasılsınız?|How are you? (polite)
Comment ça va ?|Nasılsın? / Nasıl gidiyor?|How's it going?
Ça va ?|İyi misin?|You OK? / How are you?
Ça va bien, merci.|İyiyim, teşekkürler.|I'm fine, thanks.
Très bien, et vous ?|Çok iyiyim, ya siz?|Very well, and you?
Et toi ?|Ya sen?|And you? (casual)
Pas mal.|Fena değil.|Not bad.
Comme ci, comme ça.|Şöyle böyle.|So-so.
Pas très bien.|Pek iyi değilim.|Not very well.`, {
          fr: "La bise : entre amis, on se fait souvent deux bises sur les joues (le nombre change selon la région). Au travail ou avec un inconnu, on se serre la main.",
          tr: "La bise: arkadaşlar arasında yanaklara genelde iki öpücük (bölgeye göre sayı değişir), Türkiye'deki gibi. İşte veya ilk tanışmada el sıkışılır. Emin değilseniz, karşınızdakini takip edin.",
          en: "La bise: friends usually greet with two cheek kisses (the number varies by region). At work or when meeting someone new, people shake hands. If unsure, follow the other person."
        })
      ] },

    /* ───────────── 7. Survival ───────────── */
    { id: "survival", emoji: "🆘", kind: "words", t: { fr: "Phrases de survie", tr: "Kurtarıcı cümleler", en: "Survival phrases" },
      intro: {
        fr: "Les phrases qui vous sauvent en classe et dans la rue. Ne pas comprendre est normal : il suffit de le dire calmement.",
        tr: "Derste ve sokakta sizi kurtaracak cümleler. Anlamamak çok normal; sadece sakince söylemek yeterli.",
        en: "The phrases that save you in class and in the street. Not understanding is normal: just say so calmly."
      },
      groups: [
        G("En classe", "Derste", "In class", `
Je ne comprends pas.|Anlamıyorum.|I don't understand.
Pouvez-vous répéter, s'il vous plaît ?|Tekrar eder misiniz, lütfen?|Could you repeat, please?
Plus lentement, s'il vous plaît.|Daha yavaş, lütfen.|More slowly, please.
Qu'est-ce que ça veut dire ?|Bu ne demek?|What does that mean?
Comment on dit « kitchen » en français ?|Fransızcada 'kitchen' nasıl denir?|How do you say 'kitchen' in French?
Comment ça se prononce ?|Bu nasıl okunur?|How do you pronounce it?
Vous pouvez l'écrire, s'il vous plaît ?|Yazabilir misiniz, lütfen?|Could you write it down, please?
Je ne sais pas.|Bilmiyorum.|I don't know.
J'ai compris !|Anladım!|I understand! / Got it!
Je ne connais pas ce mot.|Bu kelimeyi bilmiyorum.|I don't know this word.
Je parle un peu français.|Biraz Fransızca konuşuyorum.|I speak a little French.
Je suis débutante.|Yeni başlıyorum. (kadın)|I'm a beginner. (woman)
Vous parlez anglais ?|İngilizce konuşuyor musunuz?|Do you speak English?
Vous parlez turc ?|Türkçe konuşuyor musunuz?|Do you speak Turkish?`, {
          fr: "Ces phrases sont vos meilleures amies. Les Français apprécient beaucoup l'effort, même avec des erreurs.",
          tr: "Bu cümleler en yakın dostlarınız. Fransızlar hatalı bile olsa çaba göstermenizi çok takdir eder. 'Je ne comprends pas' demek ayıp değil, akıllıca!",
          en: "These phrases are your best friends. French people really appreciate the effort, even with mistakes."
        }),
        G("Dehors", "Dışarıda", "Out and about", `
Où sont les toilettes ?|Tuvalet nerede?|Where is the toilet?
J'ai besoin d'aide.|Yardıma ihtiyacım var.|I need help.
Aidez-moi, s'il vous plaît !|Yardım edin, lütfen!|Help me, please!
C'est combien ?|Ne kadar?|How much is it?
Je cherche la gare.|Garı arıyorum.|I'm looking for the station.
Je suis perdue.|Kayboldum. (kadın)|I'm lost. (woman)
Appelez un médecin !|Doktor çağırın!|Call a doctor!
C'est urgent.|Acil.|It's urgent.
Il y a un problème.|Bir sorun var.|There's a problem.`, {
          fr: "Numéros d'urgence : 112 (européen), 15 (SAMU, médical), 17 (police), 18 (pompiers).",
          tr: "Acil numaralar: 112 (Avrupa geneli, her şey için), 15 (SAMU, ambulans), 17 (polis), 18 (itfaiye). Telefonunuza kaydedin.",
          en: "Emergency numbers: 112 (Europe-wide), 15 (SAMU, medical), 17 (police), 18 (fire brigade). Save them in your phone."
        }),
        G("Petits mots", "Küçük kelimeler", "Little words", `
Oui.|Evet.|Yes.
Non.|Hayır.|No.
Peut-être.|Belki.|Maybe.
D'accord.|Tamam.|OK.
Bien sûr !|Tabii ki!|Of course!
Ça marche !|Olur! / Anlaştık!|Sounds good!
Voilà.|İşte. / Buyurun.|There you go.
Attendez, s'il vous plaît.|Bekleyin, lütfen.|Wait, please.
Ce n'est pas grave.|Önemli değil.|It doesn't matter. / No problem.`),
        G("Les mots interrogatifs", "Soru kelimeleri", "Question words", `
qui ?|kim?|who?||Qui est-ce ?
quoi ?|ne?|what?||C'est quoi ?
où ?|nerede? nereye?|where?||Où est la gare ?
quand ?|ne zaman?|when?||Quand est le cours ?
comment ?|nasıl?|how?||Comment ça va ?
pourquoi ?|neden?|why?||Pourquoi pas ?
combien ?|kaç? ne kadar?|how much? how many?||Combien ça coûte ?
quel / quelle ?|hangi?|which? what?||Quelle heure est-il ?
qu'est-ce que ?|ne? (cümle başında)|what? (at the start)||Qu'est-ce que vous voulez ?
est-ce que ?|... mı? (evet/hayır sorusu)|turns a sentence into a yes/no question||Est-ce que vous parlez anglais ?`, {
          fr: "La façon la plus simple de poser une question : gardez la phrase normale et montez la voix à la fin. « Vous parlez anglais ? »",
          tr: "En kolay soru sorma yolu: normal cümleyi söyleyip sonda sesi yükseltin, Türkçedeki 'mı?' eki gibi: 'Vous parlez anglais ?' Ya da başa 'Est-ce que' ekleyin.",
          en: "The easiest way to ask a question: say a normal sentence and raise your voice at the end. 'Vous parlez anglais ?' Or put 'Est-ce que' in front."
        })
      ] },

    /* ───────────── 8. House ───────────── */
    { id: "house", emoji: "🏠", kind: "words", t: { fr: "La maison", tr: "Ev", en: "The house" },
      intro: {
        fr: "Les pièces, les meubles, la cuisine et les tâches ménagères. Astuce : apprenez toujours le mot avec « le » ou « la » pour savoir son genre.",
        tr: "Odalar, eşyalar, mutfak ve ev işleri. İpucu: her kelimeyi 'le' veya 'la' ile birlikte öğrenin; Fransızcada her ismin bir cinsiyeti var.",
        en: "Rooms, furniture, the kitchen and housework. Tip: always learn a word with 'le' or 'la' so you know its gender."
      },
      groups: [
        G("Les pièces", "Odalar", "Rooms", `
la maison|ev (müstakil)|house
l'appartement|daire|flat, apartment
la pièce|oda (genel)|room
la cuisine|mutfak|kitchen
la chambre|yatak odası|bedroom
le salon|oturma odası, salon|living room
la salle à manger|yemek odası|dining room
la salle de bain|banyo|bathroom
les toilettes|tuvalet|toilet
l'entrée|giriş, antre|entrance hall
le couloir|koridor|corridor, hallway
le balcon|balkon|balcony
l'escalier|merdiven|stairs
l'ascenseur|asansör|lift, elevator
le garage|garaj|garage
le jardin|bahçe|garden
la cave|bodrum, kiler|cellar`, {
          fr: "« La chambre » est la chambre à coucher. Pour dire « une pièce » en général, on dit « la pièce ». Un « T3 » = un appartement de 3 pièces.",
          tr: "Dikkat: 'la chambre' sadece yatak odası; genel 'oda' = 'la pièce'. İlanlarda 'T3' = 3 odalı daire (salon dahil, mutfak hariç). 'Les toilettes' hep çoğuldur.",
          en: "Careful: 'la chambre' is only a bedroom; a room in general is 'la pièce'. In ads, 'T3' = a 3-room flat. 'Les toilettes' is always plural."
        }),
        G("Les meubles", "Mobilya", "Furniture", `
le meuble|mobilya parçası|piece of furniture
le lit|yatak|bed
la table|masa|table
la chaise|sandalye|chair
le canapé|kanepe|sofa
le fauteuil|koltuk|armchair
l'armoire|gardırop, dolap|wardrobe
le bureau|çalışma masası, ofis|desk, office
l'étagère|raf|shelf
le placard|gömme dolap|cupboard
la lampe|lamba|lamp
le tapis|halı|rug, carpet
le rideau|perde|curtain
la fenêtre|pencere|window
la porte|kapı|door
le mur|duvar|wall
le sol|yer, zemin|floor
le plafond|tavan|ceiling`),
        G("Dans la cuisine", "Mutfakta", "In the kitchen", `
le frigo|buzdolabı|fridge
le congélateur|derin dondurucu|freezer
le four|fırın|oven
le micro-ondes|mikrodalga|microwave
la cuisinière|ocak, fırınlı ocak|cooker, stove
l'évier|eviye, lavabo (mutfak)|kitchen sink
le lave-vaisselle|bulaşık makinesi|dishwasher
la bouilloire|su ısıtıcısı, kettle|kettle
la poêle|tava ('pual' okunur)|frying pan (said 'pwal')
la casserole|tencere|saucepan
l'assiette|tabak|plate
le bol|kâse|bowl
le verre|bardak|glass
la tasse|fincan|cup
la fourchette|çatal|fork
le couteau|bıçak|knife
la cuillère|kaşık|spoon`, {
          fr: "« La poêle » se prononce « poile ». « Le verre » = le verre pour boire ; « la tasse » = pour le café ou le thé.",
          tr: "'La poêle' (tava) 'pual' diye okunur. 'Le verre' su bardağı, 'la tasse' çay veya kahve fincanı. Türk çay bardağına 'un verre à thé' denir.",
          en: "'La poêle' (frying pan) is pronounced 'pwal'. 'Le verre' is a glass; 'la tasse' is a cup for coffee or tea."
        }),
        G("Salle de bain et chambre", "Banyo ve yatak odası", "Bathroom & bedroom", `
la douche|duş|shower
la baignoire|küvet|bathtub
le lavabo|lavabo|washbasin
le miroir|ayna|mirror
la serviette|havlu|towel
le savon|sabun|soap
le shampoing|şampuan|shampoo
le dentifrice|diş macunu|toothpaste
la brosse à dents|diş fırçası|toothbrush
l'oreiller|yastık|pillow
la couverture|battaniye|blanket
le drap|çarşaf|sheet
la couette|yorgan|duvet
le réveil|çalar saat|alarm clock`),
        G("Les tâches ménagères", "Ev işleri", "Housework", `
faire le ménage|ev temizliği yapmak|to do the cleaning
faire la vaisselle|bulaşık yıkamak|to do the dishes
faire la lessive|çamaşır yıkamak|to do the laundry
passer l'aspirateur|elektrik süpürgesi çekmek|to vacuum
ranger|toplamak, yerleştirmek|to tidy up
cuisiner|yemek pişirmek|to cook
faire les courses|alışveriş yapmak (market)|to do the shopping
mettre la table|sofrayı kurmak|to set the table
débarrasser la table|sofrayı kaldırmak|to clear the table
sortir la poubelle|çöpü çıkarmak|to take out the bin
allumer la lumière|ışığı açmak|to switch on the light
éteindre la lumière|ışığı kapatmak|to switch off the light
fermer la porte à clé|kapıyı kilitlemek|to lock the door`, {
          fr: "Beaucoup de tâches utilisent « faire » : faire le ménage, faire la vaisselle, faire la lessive, faire les courses.",
          tr: "Ev işlerinin çoğu 'faire' (yapmak) ile kurulur: faire le ménage, faire la vaisselle... Türkçedeki 'temizlik yapmak' gibi. Işık için 'açmak' = allumer, 'kapatmak' = éteindre (kapı için ouvrir / fermer).",
          en: "Many chores use 'faire' (to do/make): faire le ménage, faire la vaisselle… For lights, 'turn on' = allumer and 'turn off' = éteindre."
        }),
        G("Louer un logement", "Ev kiralamak", "Renting a home", `
le logement|konut, ev|accommodation
l'immeuble|apartman (bina)|block of flats
le loyer|kira|rent
les charges|aidat, ortak giderler|service charges
le propriétaire / la propriétaire|ev sahibi|landlord / landlady
le colocataire / la colocataire|ev arkadaşı|flatmate
le bail|kira sözleşmesi|lease
la caution|depozito|deposit
le quartier|mahalle, semt|neighbourhood
l'étage|kat|floor, storey
le rez-de-chaussée|zemin kat|ground floor
la clé|anahtar|key
la boîte aux lettres|posta kutusu|letterbox
le chauffage|ısıtma, kalorifer|heating`, {
          fr: "En France, le « premier étage » est au-dessus du rez-de-chaussée, comme en Turquie. « Charges comprises » = les charges sont dans le loyer.",
          tr: "Fransa'da da Türkiye'deki gibi zemin kat 'rez-de-chaussée', üstü 'premier étage' (1. kat). İlanlarda 'charges comprises' (CC) = aidat kiraya dahil.",
          en: "As in the UK, the 'rez-de-chaussée' is the ground floor and the 'premier étage' is the floor above. 'Charges comprises' (CC) = service charges included in the rent."
        })
      ] },

    /* ───────────── 9. Family ───────────── */
    { id: "family", emoji: "👨‍👩‍👧", kind: "words", t: { fr: "La famille et les gens", tr: "Aile ve insanlar", en: "Family & people" },
      intro: {
        fr: "Les membres de la famille et les personnes autour de vous. Bonne nouvelle : c'est plus simple qu'en turc, il n'y a qu'un mot pour « oncle » et un pour « tante » !",
        tr: "Aile üyeleri ve çevrenizdeki insanlar. İyi haber: Türkçeden daha kolay; amca ve dayı için tek kelime (oncle), hala ve teyze için tek kelime (tante) var!",
        en: "Family members and the people around you. Good news: French has one word for 'uncle' and one for 'aunt', whichever side of the family."
      },
      groups: [
        G("Les parents proches", "Yakın aile", "Close family", `
la famille|aile|family
les parents|anne baba; akrabalar|parents; relatives
le père|baba|father
la mère|anne|mother
le mari|koca, eş (erkek)|husband
la femme|eş (kadın); kadın|wife; woman
le fils|oğul ('fis' okunur)|son (said 'feess')
la fille|kız evlat; kız|daughter; girl
les enfants|çocuklar|children
le frère|erkek kardeş, ağabey|brother
la sœur|kız kardeş, abla|sister
le bébé|bebek|baby`, {
          fr: "« La femme » = femme ET épouse ; « la fille » = fille ET enfant. « Fils » se prononce « fisse ».",
          tr: "'La femme' hem kadın hem eş; 'la fille' hem kız hem kız evlat demek. Türkçedeki abla / kız kardeş ayrımı yok: hepsi 'sœur'. 'Fils' (oğul) 'fis' diye okunur.",
          en: "'La femme' means both woman and wife; 'la fille' both girl and daughter. 'Fils' (son) is pronounced 'feess'."
        }),
        G("La grande famille", "Geniş aile", "Extended family", `
les grands-parents|büyükanne ve büyükbaba|grandparents
le grand-père|dede|grandfather
la grand-mère|babaanne, anneanne|grandmother
le petit-fils|erkek torun|grandson
la petite-fille|kız torun|granddaughter
l'oncle|amca, dayı, enişte|uncle
la tante|hala, teyze, yenge|aunt
le cousin|kuzen (erkek)|cousin (male)
la cousine|kuzen (kız)|cousin (female)
le neveu|erkek yeğen|nephew
la nièce|kız yeğen|niece
le beau-père|kayınpeder|father-in-law
la belle-mère|kayınvalide|mother-in-law
le beau-frère|kayınbirader, bacanak, enişte|brother-in-law
la belle-sœur|görümce, baldız, elti, yenge|sister-in-law`),
        G("Les gens", "İnsanlar", "People", `
les gens|insanlar|people
une personne|bir kişi|a person
un homme|bir adam, erkek|a man
une femme|bir kadın|a woman
un enfant|bir çocuk|a child
un garçon|bir erkek çocuk|a boy
une fille|bir kız çocuk|a girl
un ami / une amie|bir arkadaş, dost|a friend
un copain / une copine|arkadaş; erkek / kız arkadaş|friend; boyfriend / girlfriend
le voisin / la voisine|komşu|neighbour
le / la collègue|iş arkadaşı|colleague`),
        G("La situation familiale", "Medeni durum", "Family situation", `
célibataire|bekâr|single
marié / mariée|evli|married
en couple|bir ilişkisi var|in a relationship
pacsé / pacsée|medeni birlik (PACS) yapmış|in a civil partnership
fiancé / fiancée|nişanlı|engaged
divorcé / divorcée|boşanmış|divorced
veuf / veuve|dul|widowed
Je suis mariée.|Evliyim. (kadın)|I'm married. (woman)
Vous avez des enfants ?|Çocuğunuz var mı?|Do you have children?
J'ai un frère et une sœur.|Bir erkek bir kız kardeşim var.|I have a brother and a sister.`, {
          fr: "Les adjectifs changent avec le genre : un homme est « marié », une femme est « mariée ». À l'oral, c'est souvent pareil.",
          tr: "Sıfatlar cinsiyete göre değişir: erkek 'marié', kadın 'mariée' yazar. Okunuşu çoğu zaman aynıdır, sadece yazı farklı.",
          en: "Adjectives change with gender: a man is 'marié', a woman 'mariée'. Usually they sound the same; only the spelling differs."
        })
      ] },

    /* ───────────── 10. Body ───────────── */
    { id: "body", emoji: "💪", kind: "words", t: { fr: "Le corps", tr: "Vücut", en: "The body" },
      intro: {
        fr: "Les parties du corps et comment dire où vous avez mal. Pour une ancienne kiné, ces mots vont vite devenir familiers !",
        tr: "Vücut bölümleri ve nerenizin ağrıdığını söylemek. Eski bir fizyoterapist olarak bu kelimeler size çok çabuk tanıdık gelecek!",
        en: "Body parts and how to say where it hurts. For a former physio, these words will feel familiar fast!"
      },
      groups: [
        G("La tête", "Baş", "The head", `
la tête|baş, kafa|head
le visage|yüz|face
les cheveux|saç|hair
l'œil / les yeux|göz / gözler|eye / eyes
l'oreille|kulak|ear
le nez|burun|nose
la bouche|ağız|mouth
la dent|diş|tooth
la langue|dil|tongue
le cou|boyun|neck
la gorge|boğaz|throat`, {
          fr: "« Un œil », mais « des yeux » : le pluriel est complètement différent ! « Les cheveux » est presque toujours au pluriel.",
          tr: "Tekil 'un œil' (bir göz), çoğul 'les yeux' (gözler): tamamen farklı! 'Les cheveux' (saç) Fransızcada hep çoğuldur.",
          en: "One eye = 'un œil', two eyes = 'les yeux': completely different! 'Les cheveux' (hair) is plural."
        }),
        G("Le haut du corps", "Üst vücut", "Upper body", `
l'épaule|omuz|shoulder
le bras|kol|arm
le coude|dirsek|elbow
le poignet|el bileği|wrist
la main|el|hand
le doigt|parmak|finger
le pouce|başparmak|thumb
la poitrine|göğüs|chest
le dos|sırt|back
le ventre|karın|belly, stomach`),
        G("Le bas du corps", "Alt vücut", "Lower body", `
la hanche|kalça (eklem)|hip
les fesses|kalça, popo|buttocks
la cuisse|uyluk|thigh
la jambe|bacak|leg
le genou|diz|knee
le mollet|baldır|calf
la cheville|ayak bileği|ankle
le pied|ayak|foot
le talon|topuk|heel
l'orteil|ayak parmağı|toe`),
        G("À l'intérieur", "İç yapı", "Inside the body", `
le muscle|kas|muscle
l'os / les os|kemik / kemikler|bone / bones
l'articulation|eklem|joint
le tendon|tendon|tendon
le ligament|bağ (ligament)|ligament
la colonne vertébrale|omurga|spine
le cœur|kalp|heart
les poumons|akciğerler|lungs
l'estomac|mide|stomach
la peau|deri, cilt|skin
le sang|kan|blood`),
        G("J'ai mal…", "Ağrıyor…", "It hurts…", `
J'ai mal à la tête.|Başım ağrıyor.|I have a headache.
J'ai mal à l'épaule.|Omzum ağrıyor.|My shoulder hurts.
J'ai mal au dos.|Sırtım ağrıyor.|My back hurts.
J'ai mal au ventre.|Karnım ağrıyor.|I have a stomach ache.
J'ai mal aux pieds.|Ayaklarım ağrıyor.|My feet hurt.
Ça fait mal.|Acıyor.|It hurts.
Où avez-vous mal ?|Neresi ağrıyor?|Where does it hurt?
Je me suis tordu la cheville.|Ayak bileğimi burktum.|I twisted my ankle.`, {
          fr: "Avoir mal + à la (féminin), au (masculin : à + le), à l' (voyelle), aux (pluriel : à + les).",
          tr: "Kalıp: J'ai mal + à la (dişil: à la tête), au (eril, à + le birleşir: au dos), à l' (ünlüyle başlayan: à l'épaule), aux (çoğul: aux pieds). Türkçede 'başım ağrıyor' deriz, Fransızcada 'başta ağrım var' denir.",
          en: "Pattern: J'ai mal + à la (feminine), au (masculine, à + le), à l' (before a vowel), aux (plural, à + les). Literally 'I have pain at the head'."
        }),
        G("Chez le kiné", "Fizyoterapistte", "At the physio", `
le / la kinésithérapeute (le / la kiné)|fizyoterapist|physiotherapist|le kinésithérapeute, le kiné
la séance|seans|session
la rééducation|rehabilitasyon|rehabilitation
un massage|masaj|a massage
un étirement|esneme|a stretch
l'échauffement|ısınma|warm-up
une blessure|yaralanma, sakatlık|an injury
une entorse|burkulma|a sprain
une fracture|kırık|a fracture
une ordonnance|reçete|a prescription`, {
          fr: "En France, on dit souvent « le kiné » ou « la kiné » au lieu de « kinésithérapeute ». Il faut souvent une ordonnance du médecin.",
          tr: "Fransa'da fizyoterapiste kısaca 'le kiné / la kiné' denir. Seanslar için genelde doktordan reçete (ordonnance) gerekir.",
          en: "In France a physiotherapist is usually called 'le kiné / la kiné'. You often need a doctor's prescription (ordonnance) for sessions."
        })
      ] },

    /* ───────────── 11. Food ───────────── */
    { id: "food", emoji: "🥐", kind: "words", t: { fr: "La nourriture", tr: "Yiyecek ve içecek", en: "Food & drink" },
      intro: {
        fr: "Les aliments, les boissons, les repas et les phrases pour commander au café ou au restaurant. La phrase magique : « Je voudrais…, s'il vous plaît ».",
        tr: "Yiyecekler, içecekler, öğünler ve kafede ya da restoranda sipariş verme cümleleri. Sihirli cümle: 'Je voudrais…, s'il vous plaît' (… istiyorum, lütfen).",
        en: "Food, drinks, meals and phrases for ordering in a café or restaurant. The magic phrase: 'Je voudrais…, s'il vous plaît' (I'd like…, please)."
      },
      groups: [
        G("Les repas", "Öğünler", "Meals", `
le repas|yemek, öğün|meal
le petit-déjeuner|kahvaltı|breakfast
le déjeuner|öğle yemeği|lunch
le goûter|ikindi kahvaltısı (atıştırmalık)|afternoon snack
le dîner|akşam yemeği|dinner
l'entrée|başlangıç|starter
le plat principal|ana yemek|main course
le dessert|tatlı|dessert`, {
          fr: "En France, on déjeune vers 12 h – 13 h et on dîne vers 19 h 30 – 20 h. Le petit-déjeuner est souvent sucré.",
          tr: "Fransa'da öğle yemeği 12–13 arası, akşam yemeği 19.30–20 civarı. Kahvaltı genelde tatlıdır (kruvasan, reçel, kahve), Türk kahvaltısından çok daha hafif!",
          en: "In France lunch is around 12–1 p.m. and dinner around 7:30–8 p.m. Breakfast is usually sweet and light (croissant, jam, coffee)."
        }),
        G("Les aliments", "Temel gıdalar", "Basic foods", `
le pain|ekmek|bread
la baguette|baget ekmek|baguette
le croissant|kruvasan|croissant
le beurre|tereyağı|butter
la confiture|reçel|jam
le fromage|peynir|cheese
l'œuf / les œufs|yumurta / yumurtalar|egg / eggs
le yaourt|yoğurt|yoghurt
le riz|pirinç, pilav|rice
les pâtes|makarna|pasta
la viande|et|meat
le poulet|tavuk|chicken
le bœuf|sığır eti|beef
l'agneau|kuzu eti|lamb
le porc|domuz eti|pork
le poisson|balık|fish
la soupe|çorba|soup
le sel|tuz|salt
le poivre|karabiber|pepper
le sucre|şeker|sugar
l'huile d'olive|zeytinyağı|olive oil`),
        G("Fruits et légumes", "Meyve ve sebzeler", "Fruit & vegetables", `
les fruits|meyveler|fruit
les légumes|sebzeler|vegetables
la pomme|elma|apple
la banane|muz|banana
l'orange|portakal|orange
la fraise|çilek|strawberry
le citron|limon|lemon
le raisin|üzüm|grapes
la tomate|domates|tomato
la pomme de terre|patates|potato
la carotte|havuç|carrot
l'oignon|soğan ('onyon' okunur)|onion (said 'on-yon')
l'ail|sarımsak|garlic
le concombre|salatalık|cucumber
la salade|marul; salata|lettuce; salad
les lentilles|mercimek|lentils`),
        G("Les boissons", "İçecekler", "Drinks", `
l'eau|su|water
l'eau gazeuse|maden suyu, soda|sparkling water
le café|kahve|coffee
le thé|çay|tea
le lait|süt|milk
le jus d'orange|portakal suyu|orange juice
le vin|şarap|wine
la bière|bira|beer`),
        G("Au café et au restaurant", "Kafede ve restoranda", "At the café & restaurant", `
Je voudrais un café, s'il vous plaît.|Bir kahve istiyorum, lütfen.|I'd like a coffee, please.
Une table pour deux, s'il vous plaît.|İki kişilik bir masa, lütfen.|A table for two, please.
La carte, s'il vous plaît.|Menü, lütfen.|The menu, please.
Qu'est-ce que vous me conseillez ?|Ne önerirsiniz?|What do you recommend?
Il y a du porc dedans ?|İçinde domuz eti var mı?|Is there pork in it?
Sans sucre, s'il vous plaît.|Şekersiz, lütfen.|Without sugar, please.
Une carafe d'eau, s'il vous plaît.|Bir sürahi su, lütfen (ücretsiz).|A jug of tap water, please (free).
Sur place ou à emporter ?|Burada mı, paket mi?|Eat in or take away?
Bon appétit !|Afiyet olsun!|Enjoy your meal!
C'est délicieux !|Çok lezzetli!|It's delicious!
L'addition, s'il vous plaît.|Hesap, lütfen.|The bill, please.`, {
          fr: "« Je voudrais » est plus poli que « je veux ». Au restaurant, l'eau du robinet en carafe est gratuite.",
          tr: "'Je voudrais' (isterdim) 'je veux'dan (istiyorum) çok daha kibar; her zaman bunu kullanın. Restoranda sürahide musluk suyu (carafe d'eau) ücretsizdir. Garsonu çağırmak için: 'S'il vous plaît !'",
          en: "'Je voudrais' (I would like) is much politer than 'je veux' (I want). Tap water in a jug (carafe d'eau) is free in restaurants. To call the waiter: 'S'il vous plaît !'"
        })
      ] },

    /* ───────────── 12. Colors ───────────── */
    { id: "colors", emoji: "🎨", kind: "words", t: { fr: "Couleurs et formes", tr: "Renkler ve şekiller", en: "Colours & shapes" },
      intro: {
        fr: "Les couleurs, les formes et les tailles. Astuce : en français, la couleur se met après le nom : « une voiture rouge ».",
        tr: "Renkler, şekiller ve boyutlar. İpucu: Fransızcada renk ismin arkasına gelir: 'une voiture rouge' (kırmızı bir araba).",
        en: "Colours, shapes and sizes. Tip: in French, the colour comes after the noun: 'une voiture rouge' (a red car)."
      },
      groups: [
        G("Les couleurs", "Renkler", "Colours", `
noir / noire|siyah|black|noir, noire
blanc / blanche|beyaz|white|blanc, blanche
rouge|kırmızı|red
bleu / bleue|mavi|blue|bleu, bleue
vert / verte|yeşil|green|vert, verte
jaune|sarı|yellow
orange|turuncu|orange
rose|pembe|pink
violet / violette|mor|purple|violet, violette
marron|kahverengi|brown
gris / grise|gri|grey|gris, grise
beige|bej|beige
doré / dorée|altın rengi|golden|doré, dorée
clair|açık (renk)|light (colour)||bleu clair
foncé|koyu (renk)|dark (colour)||vert foncé`, {
          fr: "Au féminin, on ajoute souvent un « e » : vert → verte (le « t » s'entend). Les couleurs qui finissent déjà par « e » ne changent pas. « Marron » et « orange » ne changent jamais.",
          tr: "Dişil isimle genelde sona 'e' eklenir: vert → verte (t okunmaya başlar). Zaten 'e' ile bitenler (rouge, jaune, rose) değişmez. 'Marron' ve 'orange' hiç değişmez. Blanc → blanche özel.",
          en: "With feminine nouns you usually add 'e': vert → verte (now the t is heard). Colours already ending in 'e' don't change. 'Marron' and 'orange' never change. Blanc → blanche is special."
        }),
        G("Les formes", "Şekiller", "Shapes", `
la forme|şekil|shape
un cercle|daire|a circle
rond / ronde|yuvarlak|round|rond, ronde
un carré|kare|a square
un triangle|üçgen|a triangle
un rectangle|dikdörtgen|a rectangle
une ligne|çizgi|a line
une étoile|yıldız|a star
un cœur|kalp|a heart`),
        G("Tailles et aspects", "Boyut ve görünüş", "Size & appearance", `
grand / grande|büyük; uzun boylu|big; tall|grand, grande
petit / petite|küçük; kısa boylu|small; short|petit, petite
long / longue|uzun|long|long, longue
court / courte|kısa|short|court, courte
gros / grosse|kalın, iri, şişman|big, fat|gros, grosse
mince|ince, zayıf|thin, slim
large|geniş|wide
étroit / étroite|dar|narrow|étroit, étroite
haut / haute|yüksek|high|haut, haute
bas / basse|alçak|low|bas, basse
lourd / lourde|ağır|heavy|lourd, lourde
léger / légère|hafif|light (weight)|léger, légère`, {
          fr: "Quelques adjectifs courts se mettent avant le nom : un grand appartement, une petite maison. Les couleurs, toujours après.",
          tr: "Birkaç kısa sıfat ismin önüne gelir: un grand appartement (büyük bir daire), une petite maison (küçük bir ev). Renkler ise hep arkaya. Dikkat: 'large' İngilizcedeki gibi 'büyük' değil, 'geniş' demek.",
          en: "A few short adjectives go before the noun: un grand appartement, une petite maison. Colours always go after. Careful: 'large' means wide, not big."
        })
      ] },

    /* ───────────── 13. Weather ───────────── */
    { id: "weather", emoji: "☀️", kind: "words", t: { fr: "La météo", tr: "Hava durumu", en: "The weather" },
      intro: {
        fr: "Parler du temps qu'il fait, le sujet préféré pour discuter avec les voisins. Astuce : on commence presque toujours par « Il fait… » ou « Il y a… ».",
        tr: "Hava durumundan bahsetmek: komşularla sohbetin en sevilen konusu. İpucu: cümleler hemen hep 'Il fait…' veya 'Il y a…' ile başlar.",
        en: "Talk about the weather, everyone's favourite small talk with neighbours. Tip: sentences nearly always start with 'Il fait…' or 'Il y a…'."
      },
      groups: [
        G("Il fait…", "Hava…", "It's… (Il fait)", `
Quel temps fait-il ?|Hava nasıl?|What's the weather like?
Il fait beau.|Hava güzel.|The weather's nice.
Il fait mauvais.|Hava kötü.|The weather's bad.
Il fait chaud.|Hava sıcak.|It's hot.
Il fait froid.|Hava soğuk.|It's cold.
Il fait doux.|Hava ılık.|It's mild.
Il fait frais.|Hava serin.|It's cool.
Il fait gris.|Hava kapalı.|It's grey / overcast.
Il fait 20 degrés.|Hava 20 derece.|It's 20 degrees.|Il fait vingt degrés.
Il fait moins 5.|Hava eksi 5 derece.|It's minus 5.|Il fait moins cinq.`, {
          fr: "Pour la météo, on utilise « faire » : il fait beau, il fait froid. On ne dit pas « il est froid ».",
          tr: "Hava için 'faire' (yapmak) fiili kullanılır: il fait beau = 'güzel yapıyor'. 'Il est froid' denmez; o 'bu şey soğuk' demek olur.",
          en: "Weather uses 'faire' (to make/do): il fait beau, il fait froid. Never 'il est froid', which means 'he/it is cold' (a thing or person)."
        }),
        G("Il pleut, il neige…", "Yağmur yağıyor, kar yağıyor…", "It's raining, snowing…", `
Il pleut.|Yağmur yağıyor.|It's raining.
Il neige.|Kar yağıyor.|It's snowing.
Il gèle.|Don var. Buz tutuyor.|It's freezing.
Il y a du soleil.|Güneşli.|It's sunny.
Il y a du vent.|Rüzgârlı.|It's windy.
Il y a des nuages.|Bulutlu.|It's cloudy.
Il y a du brouillard.|Sisli.|It's foggy.
Il y a de l'orage.|Fırtına var. Gök gürlüyor.|There's a thunderstorm.
Il va pleuvoir demain.|Yarın yağmur yağacak.|It's going to rain tomorrow.
Le ciel est bleu.|Gökyüzü mavi.|The sky is blue.`),
        G("Les mots de la météo", "Hava durumu kelimeleri", "Weather words", `
la météo|hava durumu (tahmini)|weather forecast
le temps|hava; zaman|weather; time
la température|sıcaklık|temperature
le degré|derece|degree
le soleil|güneş|sun
la pluie|yağmur|rain
la neige|kar|snow
le vent|rüzgâr|wind
le nuage|bulut|cloud
l'orage|gök gürültülü fırtına|thunderstorm
la tempête|fırtına|storm
l'arc-en-ciel|gökkuşağı|rainbow
le ciel|gökyüzü|sky
le parapluie|şemsiye|umbrella`)
      ] },

    /* ───────────── 14. City ───────────── */
    { id: "city", emoji: "🚉", kind: "words", t: { fr: "En ville", tr: "Şehirde", en: "In town" },
      intro: {
        fr: "Les lieux de la ville, les transports et comment demander son chemin. N'ayez pas peur de demander : « Excusez-moi, où est… ? »",
        tr: "Şehirdeki yerler, ulaşım ve yol sormak. Sormaktan çekinmeyin: 'Excusez-moi, où est… ?' (Affedersiniz, … nerede?)",
        en: "Places in town, transport and asking the way. Don't be afraid to ask: 'Excusez-moi, où est… ?' (Excuse me, where is…?)"
      },
      groups: [
        G("Les lieux", "Yerler", "Places", `
la ville|şehir|town, city
le centre-ville|şehir merkezi|town centre
la rue|sokak, cadde|street
la place|meydan|square
la gare|tren garı|train station
la poste|postane|post office
la pharmacie|eczane|pharmacy
la banque|banka|bank
la mairie|belediye|town hall
l'hôpital|hastane|hospital
le médecin|doktor|doctor
le supermarché|süpermarket|supermarket
le marché|pazar|market
la boulangerie|fırın, ekmekçi|bakery
la boucherie|kasap|butcher's
le café|kafe|café
le restaurant|restoran|restaurant
l'école|okul|school
l'université|üniversite|university
la bibliothèque|kütüphane|library
le parc|park|park
le musée|müze|museum
la piscine|yüzme havuzu|swimming pool
la salle de sport|spor salonu|gym
l'église|kilise|church
la mosquée|cami|mosque`),
        G("Les transports", "Ulaşım", "Transport", `
le bus|otobüs|bus
le métro|metro|underground, metro
le train|tren|train
le tram|tramvay|tram
le vélo|bisiklet|bike
la voiture|araba|car
le taxi|taksi|taxi
l'avion|uçak|plane
en bus|otobüsle|by bus
en voiture|arabayla|by car
à pied|yürüyerek|on foot
à vélo|bisikletle|by bike
le ticket|bilet (metro, otobüs)|ticket
l'arrêt de bus|otobüs durağı|bus stop
la station de métro|metro istasyonu|metro station
le quai|peron|platform`, {
          fr: "« En » pour ce qui a un intérieur (en bus, en train, en voiture), « à » quand on est dessus ou sans véhicule (à pied, à vélo).",
          tr: "İçine bindiğiniz araçlarla 'en' (en bus, en train, en voiture), üstüne bindiklerinizle ve yürürken 'à' (à vélo, à pied). Trende biletinizi binmeden önce onaylamayı unutmayın.",
          en: "'En' for vehicles you sit inside (en bus, en train, en voiture), 'à' when you're on top or walking (à vélo, à pied)."
        }),
        G("Les directions", "Yön tarifi", "Directions", `
à droite|sağda, sağa|on the right, right
à gauche|solda, sola|on the left, left
tout droit|dümdüz|straight on
à côté de|yanında|next to
en face de|karşısında|opposite
près de|yakınında|near
loin de|uzağında|far from
devant|önünde|in front of
derrière|arkasında|behind
entre|arasında|between
au coin de la rue|sokağın köşesinde|on the street corner
Tournez à gauche.|Sola dönün.|Turn left.
Continuez tout droit.|Düz devam edin.|Go straight on.
Traversez la rue.|Caddenin karşısına geçin.|Cross the street.
Excusez-moi, où est la poste ?|Affedersiniz, postane nerede?|Excuse me, where's the post office?
C'est loin ?|Uzak mı?|Is it far?
C'est à cinq minutes à pied.|Yürüyerek beş dakika.|It's a five-minute walk.`, {
          fr: "Attention : « tout droit » = continuer devant vous, et « à droite » = tourner à droite. Ces deux-là se confondent facilement !",
          tr: "Dikkat: 'tout droit' = dümdüz ileri, 'à droite' = sağa. Bu ikisi çok karışır! Türkçedeki son eklerin (-de, -den) yerine Fransızcada ismin önüne kelime gelir: près de la gare = garın yakınında.",
          en: "Careful: 'tout droit' = straight ahead, 'à droite' = to the right. They're easily mixed up!"
        })
      ] },

    /* ───────────── 15. Feelings ───────────── */
    { id: "feelings", emoji: "🙂", kind: "words", t: { fr: "Les émotions", tr: "Duygular", en: "Feelings" },
      intro: {
        fr: "Dire comment vous vous sentez, avec des mots simples. Astuce : pour la faim, la soif, le froid ou la peur, le français utilise « avoir ».",
        tr: "Nasıl hissettiğinizi basit kelimelerle söylemek. İpucu: açlık, susuzluk, üşümek veya korkmak için Fransızca 'avoir' (sahip olmak) kullanır.",
        en: "Say how you feel, with simple words. Tip: for hunger, thirst, cold or fear, French uses 'avoir' (to have)."
      },
      groups: [
        G("Je suis…", "Ben … ım", "I am…", `
content / contente|memnun|happy, pleased|content, contente
heureux / heureuse|mutlu|happy|heureux, heureuse
triste|üzgün|sad
fatigué / fatiguée|yorgun|tired|fatigué, fatiguée
stressé / stressée|stresli|stressed|stressé, stressée
calme|sakin|calm
détendu / détendue|rahat|relaxed|détendu, détendue
nerveux / nerveuse|gergin|nervous|nerveux, nerveuse
inquiet / inquiète|endişeli|worried|inquiet, inquiète
malade|hasta|ill, sick
en forme|formda, zinde|fit, well
fier / fière|gururlu|proud|fier, fière
surpris / surprise|şaşkın|surprised|surpris, surprise
en colère|kızgın|angry
déçu / déçue|hayal kırıklığına uğramış|disappointed|déçu, déçue
seul / seule|yalnız|alone, lonely|seul, seule
prêt / prête|hazır|ready|prêt, prête`, {
          fr: "Une femme dit « Je suis contente, fatiguée, prête ». Souvent, on entend la différence : content / contente.",
          tr: "Kadın olarak dişil hâli kullanırsınız: Je suis contente, fatiguée, heureuse. Bazen fark duyulur (content / contente: t okunur), bazen sadece yazıda (fatigué / fatiguée).",
          en: "As a woman you use the feminine form: Je suis contente, fatiguée, heureuse. Sometimes you hear it (content / contente), sometimes it's only in the spelling."
        }),
        G("J'ai… (avec avoir)", "'Avoir' ile", "With avoir", `
J'ai faim.|Acıktım.|I'm hungry.
J'ai soif.|Susadım.|I'm thirsty.
J'ai froid.|Üşüyorum.|I'm cold.
J'ai chaud.|Sıcakladım.|I'm hot.
J'ai peur.|Korkuyorum.|I'm scared.
J'ai sommeil.|Uykum var.|I'm sleepy.
J'ai raison.|Haklıyım.|I'm right.
J'ai tort.|Haksızım.|I'm wrong.
J'ai besoin de repos.|Dinlenmeye ihtiyacım var.|I need rest.
J'ai envie d'un café.|Canım kahve istiyor.|I feel like a coffee.`, {
          fr: "En français, on « a » faim, soif, froid, peur… On ne dit jamais « je suis faim ».",
          tr: "Fransızcada açlık, susuzluk, korku 'sahip olunan' şeylerdir: J'ai faim = 'açlığım var'. Türkçedeki 'uykum var' gibi düşünün. 'Je suis faim' asla denmez.",
          en: "In French you 'have' hunger, thirst, cold, fear: J'ai faim = 'I have hunger'. Never 'je suis faim'. Note: 'J'ai chaud' (I feel hot) ≠ 'Il fait chaud' (the weather is hot)."
        }),
        G("Adjectifs utiles", "Faydalı sıfatlar", "Useful adjectives", `
bon / bonne|iyi; lezzetli|good; tasty|bon, bonne
mauvais / mauvaise|kötü|bad|mauvais, mauvaise
facile|kolay|easy
difficile|zor|difficult
beau / belle|güzel|beautiful|beau, belle
nouveau / nouvelle|yeni|new|nouveau, nouvelle
vieux / vieille|yaşlı, eski|old|vieux, vieille
jeune|genç|young
cher / chère|pahalı; sevgili|expensive; dear|cher, chère
gentil / gentille|kibar, nazik|kind, nice|gentil, gentille
sympa|sevimli, cana yakın|nice, friendly
intéressant / intéressante|ilginç|interesting|intéressant, intéressante`),
        G("Mots qui rassurent", "Rahatlatan sözler", "Comforting words", `
Ce n'est pas grave.|Önemli değil.|It's not a big deal.
Pas de panique !|Panik yok!|Don't panic!
Tout va bien.|Her şey yolunda.|Everything's fine.
Doucement.|Yavaş yavaş, sakin.|Gently, slowly.
Respire.|Nefes al.|Breathe.
Petit à petit.|Azar azar, adım adım.|Little by little.
Courage !|Cesaret! Haydi!|Hang in there!
Bravo !|Aferin! Bravo!|Well done!
Je suis fière de toi.|Seninle gurur duyuyorum. (kadın söylerse)|I'm proud of you. (said by a woman)`, {
          fr: "Apprendre une langue prend du temps. Chaque petit mot appris compte : petit à petit, l'oiseau fait son nid.",
          tr: "Dil öğrenmek zaman alır ve her öğrendiğiniz küçük kelime sayılır. Fransız atasözü: 'Petit à petit, l'oiseau fait son nid' = Kuş yuvasını azar azar yapar. Damlaya damlaya göl olur!",
          en: "Learning a language takes time, and every little word counts. French proverb: 'Petit à petit, l'oiseau fait son nid' = little by little, the bird builds its nest."
        })
      ] },

    /* ───────────── 16. Verbs ───────────── */
    { id: "verbs", emoji: "⚙️", kind: "words", t: { fr: "Les verbes essentiels", tr: "Temel fiiller", en: "Essential verbs" },
      intro: {
        fr: "Trente verbes indispensables, à l'infinitif et avec « je ». Avec ces verbes, vous pouvez déjà dire beaucoup de choses !",
        tr: "Otuz temel fiil, mastar hâlinde ve 'je' (ben) ile. Bu fiillerle şimdiden çok şey söyleyebilirsiniz!",
        en: "Thirty essential verbs, in the infinitive and with 'je' (I). With these, you can already say a lot!"
      },
      groups: [
        G("Les plus importants", "En önemlileri", "The most important", `
être|olmak|to be||je suis
avoir|sahip olmak (-si var)|to have||j'ai
aller|gitmek|to go||je vais
faire|yapmak, etmek|to do, to make||je fais
vouloir|istemek|to want||je veux
pouvoir|-ebilmek|can, to be able to||je peux
devoir|-meli, zorunda olmak|must, to have to||je dois
savoir|bilmek|to know (a fact, how to)||je sais
venir|gelmek|to come||je viens
prendre|almak|to take||je prends`, {
          fr: "Ces verbes sont irréguliers, mais ce sont les plus utiles. Apprenez d'abord la forme « je ».",
          tr: "Bu fiiller düzensiz ama en çok kullanılanlar. Önce sadece 'je' (ben) hâlini öğrenin: je suis, j'ai, je vais. Türkçeden farklı olarak özne (je) her zaman söylenir.",
          en: "These verbs are irregular but the most useful. Learn the 'je' form first: je suis, j'ai, je vais. Unlike Turkish, the subject (je) is always said."
        }),
        G("Verbes en -er (réguliers)", "-er ile biten fiiller (düzenli)", "-er verbs (regular)", `
parler|konuşmak|to speak||je parle
manger|yemek (yemek yemek)|to eat||je mange
habiter|oturmak, ikamet etmek|to live (somewhere)||j'habite
travailler|çalışmak|to work||je travaille
aimer|sevmek, hoşlanmak|to like, to love||j'aime
regarder|bakmak, izlemek|to look at, to watch||je regarde
écouter|dinlemek|to listen to||j'écoute
chercher|aramak (bir şeyi)|to look for||je cherche
trouver|bulmak|to find||je trouve
fermer|kapatmak|to close||je ferme
acheter|satın almak|to buy||j'achète
payer|ödemek|to pay||je paie
appeler|aramak (telefonla), çağırmak|to call||j'appelle`, {
          fr: "Les verbes en « -er » sont réguliers : on enlève « -er » et on ajoute « -e » pour « je ». Le « e » final ne se prononce pas : je parle = « je parl ».",
          tr: "-er ile biten fiiller düzenlidir: '-er'i atın, 'je' için '-e' ekleyin: parler → je parle. Sondaki e okunmaz: 'jö parl'. Fransızca fiillerin çoğu bu gruptandır, harika haber!",
          en: "-er verbs are regular: drop '-er', add '-e' for 'je': parler → je parle. The final e is silent. Most French verbs are in this group, great news!"
        }),
        G("Autres verbes utiles", "Diğer faydalı fiiller", "Other useful verbs", `
boire|içmek|to drink||je bois
comprendre|anlamak|to understand||je comprends
dormir|uyumak|to sleep||je dors
lire|okumak|to read||je lis
écrire|yazmak|to write||j'écris
ouvrir|açmak|to open||j'ouvre
attendre|beklemek|to wait (for)||j'attends`, {
          fr: "Devant une voyelle ou un h muet, « je » devient « j' » : j'ai, j'aime, j'habite, j'écris.",
          tr: "Ünlü veya okunmayan h ile başlayan fiillerden önce 'je' → 'j'' olur: j'ai, j'aime, j'habite, j'écris. Tek kelime gibi okunur.",
          en: "Before a vowel or silent h, 'je' becomes 'j'': j'ai, j'aime, j'habite, j'écris. Said as one word."
        })
      ] }
  ];
})();
