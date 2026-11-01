/* DELF A1–A2 annexes: a compact exam grammar, the marking criteria + an 8-week plan,
   and the extra "classic mistakes" of Turkish speakers that were not in window.MISTAKES yet.
   Loaded after guide.js, guide-master.js and guide-fr.js. */
(function () {
  const T = (head, rows) => `<table class="tbl"><tr>${head.map(h => `<th>${h}</th>`).join("")}</tr>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</table>`;
  const pick = l => (en, tr, fr) => ({ en, tr, fr })[l];

  /* ── 1. Mini grammar for DELF A1–A2 ── */
  const PRESENT = [
    ["être", "be", "olmak", "je suis · tu es · il est · nous sommes · vous êtes · ils sont"],
    ["avoir", "have", "sahip olmak", "j'ai · tu as · il a · nous avons · vous avez · ils ont"],
    ["aller", "go", "gitmek", "je vais · tu vas · il va · nous allons · vous allez · ils vont"],
    ["faire", "do, make", "yapmak", "je fais · tu fais · il fait · nous faisons · vous faites · ils font"],
    ["venir", "come", "gelmek", "je viens · tu viens · il vient · nous venons · vous venez · ils viennent"],
    ["pouvoir", "can", "-ebilmek", "je peux · tu peux · il peut · nous pouvons · vous pouvez · ils peuvent"],
    ["vouloir", "want", "istemek", "je veux · tu veux · il veut · nous voulons · vous voulez · ils veulent"],
    ["devoir", "must", "zorunda olmak", "je dois · tu dois · il doit · nous devons · vous devez · ils doivent"],
    ["prendre", "take", "almak", "je prends · tu prends · il prend · nous prenons · vous prenez · ils prennent"],
    ["savoir", "know", "bilmek", "je sais · tu sais · il sait · nous savons · vous savez · ils savent"],
    ["mettre", "put, put on", "koymak, giymek", "je mets · tu mets · il met · nous mettons · vous mettez · ils mettent"],
    ["parler", "speak — the -er model", "konuşmak — -er modeli", "je parle · tu parles · il parle · nous parlons · vous parlez · ils parlent"]
  ];

  const grammar = l => {
    const s = pick(l);
    return `
<p><b>${s("The whole DELF A1–A2 grammar on one page.", "DELF A1–A2'nin bütün dilbilgisi tek sayfada.", "Toute la grammaire du DELF A1–A2 sur une seule page.")}</b> ${s(
      "The « Grammar map » explains the logic of French from Turkish; this page is the checklist: the forms in tables, with the traps examiners see every day. Revise one block before each mock paper in the DELF tab.",
      "« Dilbilgisi haritası » Fransızcanın mantığını Türkçeden yola çıkarak açıklar; bu sayfa ise kontrol listesidir: biçimler tablolar hâlinde, düzeltmenlerin her gün gördüğü tuzaklarla birlikte. DELF sekmesindeki her deneme sınavından önce bir bölümü tekrar et.",
      "La « Carte de grammaire » explique la logique du français à partir du turc ; cette page, c'est la liste à réviser : les formes en tableaux, avec les pièges que les correcteurs voient tous les jours. Révise un bloc avant chaque examen blanc de l'onglet DELF.")}</p>

<h3>1) ${s("Articles: three kinds", "Artikeller: üç tür", "Les articles : trois sortes")}</h3>
${T([s("article", "artikel", "article"), s("masculine", "eril", "masculin"), s("feminine", "dişil", "féminin"), s("before a vowel", "ünlüden önce", "devant voyelle"), s("plural", "çoğul", "pluriel")], [
      [s("definite (the)", "belirli", "défini"), "le", "la", "l'", "les"],
      [s("indefinite (a)", "belirsiz (bir)", "indéfini"), "un", "une", "un / une", "des"],
      [s("partitive (some)", "parçalı (biraz)", "partitif"), "du", "de la", "de l'", "des"]])}
<ul>
<li><b>le, la, les</b>: ${s("something known, or a general idea", "bilinen bir şey ya da genel bir kavram", "une chose connue ou une idée générale")}: <i>Je prends le bus de 8 h. J'aime le café.</i></li>
<li><b>un, une, des</b>: ${s("« a », for things you can count", "« bir », sayılabilen şeyler için", "« un », pour ce qu'on peut compter")}: <i>J'ai un frère et une sœur.</i></li>
<li><b>du, de la, de l'</b>: ${s("an unknown amount of something you can't count; Turkish uses no article here", "sayılamayan bir şeyin belirsiz miktarı; Türkçede burada artikel yok", "une quantité non précisée de quelque chose qu'on ne compte pas ; le turc n'a pas d'article ici")}: Ekmek aldım = <i>J'ai acheté du pain.</i> · <i>Je bois de l'eau.</i></li>
<li>${s("After a negation", "Olumsuzlukta", "Après une négation")} un / une / des / du / de la → <b>de / d'</b>: <i>J'ai une voiture → Je n'ai pas de voiture. · Il n'y a pas d'eau.</i> ${s("But le / la / les don't change", "Ama le / la / les değişmez", "Mais le / la / les ne changent pas")} (<i>Je n'aime pas le café</i>), ${s("and nothing changes after être", "être'den sonra da hiçbir şey değişmez", "et rien ne change après être")} (<i>Ce n'est pas un problème</i>).</li>
<li>${s("After a quantity", "Miktardan sonra", "Après une quantité")}: <b>de / d'</b> — <i>beaucoup de travail, un peu de sucre, un kilo de pommes, trop de bruit.</i></li>
</ul>
<p><b>${s("Compulsory contractions", "Zorunlu kaynaşmalar", "Contractions obligatoires")}:</b> à + le = <b>au</b> (<i>Je vais au marché</i>) · à + les = <b>aux</b> (<i>Je parle aux enfants</i>) · de + le = <b>du</b> (<i>Je viens du travail</i>) · de + les = <b>des</b> (<i>la fin des vacances</i>). ${s("Never with la or l'", "la ve l' ile asla", "Jamais avec la ou l'")}: <i>à la gare, à l'école, de l'hôtel.</i></p>
<p><b>${s("This / these", "Bu / şu (işaret sıfatları)", "Les démonstratifs")}:</b> ce livre · cet homme (${s("masc. before a vowel", "ünlüden önce eril", "masc. devant voyelle")}) · cette femme · ces enfants.</p>

<h3>2) ${s("Possessives (my, your, his…)", "İyelik sıfatları (benim, senin…)", "Les possessifs (mon, ton, son…)")}</h3>
${T([s("owner", "sahip", "possesseur"), s("masc.", "eril", "masc."), s("fem.", "dişil", "fém."), s("plural", "çoğul", "pluriel")], [
      [s("my", "benim", "je"), "mon", "ma", "mes"],
      [s("your (tu)", "senin", "tu"), "ton", "ta", "tes"],
      [s("his / her", "onun", "il / elle"), "son", "sa", "ses"],
      [s("our", "bizim", "nous"), "notre", "notre", "nos"],
      [s("your (vous)", "sizin", "vous"), "votre", "votre", "vos"],
      [s("their", "onların", "ils / elles"), "leur", "leur", "leurs"]])}
<ul>
<li>${s("It agrees with the THING owned, not with the owner", "Sahibe değil, sahip olunan ŞEYE uyar", "Il s'accorde avec la CHOSE possédée, pas avec le possesseur")}: <i>sa mère</i> = ${s("his OR her mother — like Turkish « o », the owner's gender is not shown", "onun annesi (erkeğin de kadının da) — Türkçedeki « o » gibi sahibin cinsiyeti belli değil", "la mère de lui OU d'elle : comme le « o » turc, on ne voit pas le genre du possesseur")}.</li>
<li>${s("Before a feminine word starting with a vowel, ma / ta / sa → mon / ton / son", "Ünlüyle başlayan dişil isimden önce ma / ta / sa → mon / ton / son", "Devant un nom féminin qui commence par une voyelle, ma / ta / sa → mon / ton / son")}: <i>mon amie, ton école, son adresse.</i></li>
</ul>

<h3>3) ${s("Plural", "Çoğul", "Le pluriel")}</h3>
<ul>
<li>+ s, ${s("silent", "okunmaz", "muet")}: <i>un livre → des livres</i>. ${s("Singular and plural sound the same: the article tells you", "Tekil ve çoğul aynı okunur: farkı artikel gösterir", "Singulier et pluriel se prononcent pareil : c'est l'article qui fait la différence")} (<i>le / les livres</i>).</li>
<li>-s, -x, -z: ${s("no change", "değişmez", "pas de changement")} — <i>un bras → des bras, un prix → des prix.</i></li>
<li>-eau, -eu → + x: <i>des gâteaux, des cheveux, des jeux.</i> · -al → -aux: <i>des journaux, des animaux, des hôpitaux.</i></li>
<li>${s("Irregular", "Düzensiz", "Irréguliers")}: <i>un œil → des yeux · monsieur → messieurs · madame → mesdames.</i> ${s("Always plural", "Hep çoğul", "Toujours au pluriel")}: <i>les vacances (f.), les gens.</i></li>
<li>⚠️ ${s("After a number, Turkish stays singular (iki elma); French goes plural", "Türkçede sayıdan sonra isim tekildir (iki elma); Fransızcada çoğuldur", "Après un nombre, le turc reste au singulier (iki elma) ; le français passe au pluriel")}: <i>deux pommes, trois enfants, dix euros.</i></li>
</ul>

<h3>4) ${s("Adjectives: agreement and place", "Sıfatlar: uyum ve yer", "Les adjectifs : accord et place")}</h3>
<p>${s("The adjective takes the gender and number of its noun", "Sıfat, nitelediği ismin cinsiyetine ve sayısına uyar", "L'adjectif prend le genre et le nombre du nom")}: <i>un petit chat, une petite maison, des petits chats, des petites maisons.</i></p>
${T([s("feminine", "dişil yapma", "féminin"), s("examples", "örnekler", "exemples")], [
      ["+ e", "grand → grande · content → contente"],
      [s("already ends in -e: no change", "zaten -e ile biter: değişmez", "finit déjà par -e : pas de changement"), "jeune → jeune · rouge → rouge"],
      ["-eux → -euse", "heureux → heureuse · sérieux → sérieuse"],
      ["-f → -ve", "sportif → sportive · neuf → neuve"],
      ["-er → -ère", "cher → chère · premier → première"],
      ["-en / -on → -enne / -onne", "italien → italienne · bon → bonne"],
      ["-el → -elle", "naturel → naturelle · cruel → cruelle"],
      [s("irregular", "düzensiz", "irréguliers"), "beau → belle · nouveau → nouvelle · vieux → vieille · blanc → blanche · long → longue · gentil → gentille"]])}
<ul>
<li>${s("Before a masculine noun starting with a vowel, beau / nouveau / vieux become", "Ünlüyle başlayan eril isimden önce beau / nouveau / vieux şöyle olur", "Devant un nom masculin qui commence par une voyelle, beau / nouveau / vieux deviennent")} <b>bel / nouvel / vieil</b>: <i>un bel appartement, un vieil hôtel.</i></li>
<li>${s("You HEAR the feminine: the final consonant comes back", "Dişili DUYARSIN: son ünsüz okunur", "On ENTEND le féminin : la consonne finale revient")}: petit « pöti » / petite « pötit » · grand « gra~ » / grande « gra~d ».</li>
<li>${s("Plural", "Çoğul", "Pluriel")}: + s; -eau → -eaux (<i>beaux</i>); -al → -aux (<i>normaux</i>); -eux ${s("doesn't change", "değişmez", "ne change pas")}.</li>
<li>${s("Place: MOST adjectives come AFTER the noun", "Yeri: ÇOĞU sıfat isimden SONRA gelir", "Place : la PLUPART des adjectifs se mettent APRÈS le nom")} (<i>une voiture rouge, un film intéressant, un restaurant turc</i>). ${s("A few short, frequent ones come before", "Kısa ve sık kullanılan birkaçı önce gelir", "Quelques adjectifs courts et fréquents se mettent avant")}: beau, joli, jeune, vieux, nouveau, bon, mauvais, petit, grand, gros — <i>un petit appartement, une jolie robe, un bon repas.</i></li>
</ul>

<h3>5) ${s("Negation", "Olumsuzluk", "La négation")}</h3>
${T([s("form", "yapı", "forme"), s("meaning", "anlamı", "sens"), s("example", "örnek", "exemple")], [
      ["ne … pas", s("not", "-me, değil", "négation simple"), "Je ne parle pas allemand. · Je n'aime pas le froid."],
      ["ne … plus", s("not any more", "artık … değil", "plus maintenant"), "Je ne fume plus."],
      ["ne … jamais", s("never", "hiç, asla", "à aucun moment"), "Je ne bois jamais d'alcool."],
      ["ne … rien (A2)", s("nothing", "hiçbir şey", "aucune chose"), "Je ne comprends rien."],
      ["ne … personne (A2)", s("nobody", "kimse", "aucune personne"), "Je ne connais personne ici."]])}
<ul>
<li>${s("Compound tense: around the auxiliary", "Birleşik zamanda: yardımcı fiilin iki yanında", "Temps composé : autour de l'auxiliaire")}: <i>Je n'ai pas mangé. Elle n'est jamais venue.</i></li>
<li>${s("Verb + infinitive: around the conjugated verb", "Fiil + mastar: çekimli fiilin iki yanında", "Verbe + infinitif : autour du verbe conjugué")}: <i>Je ne peux pas venir. Je ne vais pas partir.</i> ${s("With a pronoun", "Zamirle", "Avec un pronom")}: <i>Je ne le connais pas.</i></li>
<li>${s("In speech « ne » often disappears (Je sais pas). In the exam, especially in writing, ALWAYS write « ne ».", "Günlük konuşmada « ne » çoğu zaman düşer (Je sais pas). Sınavda, özellikle yazıda, « ne »yi HER ZAMAN yaz.", "À l'oral, le « ne » disparaît souvent (Je sais pas). À l'examen, surtout à l'écrit, écris TOUJOURS le « ne ».")}</li>
<li>${s("« Yes » to a negative question is", "Olumsuz bir soruya « evet » cevabı", "Pour dire « oui » à une question négative, on dit")} <b>si</b>: <i>Tu n'aimes pas le thé ? — Si, j'adore le thé !</i></li>
</ul>

<h3>6) ${s("Questions", "Sorular", "Les questions")}</h3>
<p>${s("Three ways", "Üç yol", "Trois façons")}: <i>Tu habites où ?</i> (${s("speech", "konuşma", "oral")}) · <i>Où est-ce que tu habites ?</i> (${s("everywhere", "her yerde", "partout")}) · <i>Où habites-tu ?</i> (${s("formal", "resmî", "soutenu")}). ${s("« Est-ce que » works like Turkish « mi », but at the start", "« Est-ce que » Türkçedeki « mi » gibidir, tek fark başa gelmesi", "« Est-ce que » fonctionne comme le « mi » turc, mais au début")}: <i>Est-ce que tu viens ?</i> = Geliyor musun? · <i>Qu'est-ce que c'est ? Qu'est-ce que tu fais ?</i></p>
<p><b>quel</b> ${s("agrees with the noun", "isme uyar", "s'accorde avec le nom")}: <i>Quel âge avez-vous ? · Quelle heure est-il ? · Quels sports aimez-vous ? · Quelles langues parlez-vous ?</i></p>

<h3>7) ${s("Present: 12 verbs to know by heart", "Şimdiki zaman: ezberlenecek 12 fiil", "Le présent : 12 verbes à connaître par cœur")}</h3>
<p>${s("The present means both « I'm doing » and « I do »", "Fransızcada şimdiki zaman hem « yapıyorum » hem « yaparım » demektir", "Le présent veut dire « je fais » et « je suis en train de faire »")}: <i>Je travaille</i> = çalışıyorum / çalışırım. ${s("The subject pronoun is always said (« Travaille. » alone is wrong). « On » = « we » in everyday speech, conjugated like « il »", "Kişi zamiri her zaman söylenir (tek başına « Travaille. » YANLIŞ). « On » günlük dilde « biz » demektir ve « il » gibi çekimlenir", "Le pronom sujet est obligatoire (« Travaille. » seul est faux). « On » = « nous » à l'oral, conjugué comme « il »")}: <i>On va au parc.</i></p>
${T([s("verb", "fiil", "verbe"), "je · tu · il/elle/on · nous · vous · ils/elles"], PRESENT.map(v => [`<b>${v[0]}</b>${l === "fr" ? "" : ` (${l === "tr" ? v[2] : v[1]})`}`, v[3]]))}
<ul>
<li><i>nous faisons</i> = « nu fözo~ ». <i>vous faites</i> ${s("and", "ve", "et")} <i>vous dites</i> ${s("don't end in -ez (« vous faisez » is wrong)", "-ez ile bitmez (« vous faisez » YANLIŞ)", "ne finissent pas en -ez (« vous faisez » est faux)")}.</li>
<li>${s("Same pattern", "Aynı çekim", "Même modèle")}: prendre → apprendre, comprendre · venir → revenir, devenir · mettre → permettre, promettre.</li>
<li>pouvoir, vouloir, devoir + ${s("infinitive", "mastar", "infinitif")}: <i>Je peux venir. Je veux partir. Je dois travailler.</i> ${s("To ask politely, say « je voudrais », not « je veux ».", "Kibarca istemek için « je veux » yerine « je voudrais » de.", "Pour demander poliment, dis « je voudrais » et pas « je veux ».")}</li>
<li>${s("-er verbs (about 90% of verbs): stem + -e, -es, -e, -ons, -ez, -ent. The endings -e, -es, -ent are silent", "-er fiilleri (fiillerin yaklaşık %90'ı): kök + -e, -es, -e, -ons, -ez, -ent. -e, -es, -ent OKUNMAZ", "Verbes en -er (environ 90 % des verbes) : radical + -e, -es, -e, -ons, -ez, -ent. Les finales -e, -es, -ent sont muettes")}: <i>je parle, tu parles, ils parlent</i> = « parl ».</li>
<li>${s("Spelling changes", "Yazım değişiklikleri", "Changements d'orthographe")}: <i>nous mangeons · nous commençons · j'achète · je préfère · je m'appelle · je paie (je paye)</i>.</li>
<li>${s("Reflexive verbs", "Dönüşlü fiiller", "Verbes pronominaux")}: <i>se lever → je me lève, tu te lèves, il se lève, nous nous levons, vous vous levez, ils se lèvent.</i> ${s("Same with", "Aynı şekilde", "Pareil pour")} s'appeler, se reposer, se promener, s'habiller, se coucher, se laver, s'inscrire.</li>
</ul>

<h3>8) ${s("Imperative", "Emir kipi", "L'impératif")}</h3>
<p>${s("Three persons (tu, nous, vous) and no subject pronoun", "Üç kişi var (tu, nous, vous) ve özne zamiri söylenmez", "Trois personnes (tu, nous, vous) et pas de pronom sujet")}: <i>Parle ! Parlons ! Parlez ! · Prends ! Prenons ! Prenez !</i></p>
<ul>
<li>${s("-er verbs lose the -s with « tu »", "-er fiilleri « tu » emrinde -s'yi kaybeder", "Les verbes en -er perdent le -s avec « tu »")}: <i>Mange ! Écoute !</i> — ${s("and", "ve", "et")} aller: <i>Va !</i></li>
<li>${s("Irregular", "Düzensiz", "Irréguliers")}: être → <i>sois, soyons, soyez</i> · avoir → <i>aie, ayons, ayez</i>.</li>
<li>${s("Negative", "Olumsuz", "Négatif")}: <i>Ne parle pas ! Ne prenez pas ce bus !</i> · ${s("Reflexive", "Dönüşlü", "Pronominal")}: <i>Lève-toi ! Asseyez-vous ! → Ne te lève pas !</i> · ${s("With a pronoun", "Zamirle", "Avec un pronom")}: <i>Dis-moi ! Appelle-moi ! Regardez-le !</i></li>
<li>${s("The exam instructions are in the imperative", "Sınav yönergeleri emir kipindedir", "Les consignes de l'examen sont à l'impératif")}: <i>Lisez les questions. Écrivez. Cochez la bonne réponse. Répondez aux questions.</i></li>
</ul>

<h3>9) ${s("Near future (futur proche)", "Yakın gelecek (futur proche)", "Le futur proche")}</h3>
<p>aller (${s("present", "şimdiki zaman", "présent")}) + ${s("infinitive", "mastar", "infinitif")} = -ecek: <i>Je vais partir. · Ce soir, nous allons regarder un film. · Il va pleuvoir.</i> ${s("Negative", "Olumsuz", "Négatif")}: <i>Je ne vais pas venir.</i> ${s("The easiest and safest future at A1.", "A1'de gelecek için en kolay ve en güvenli yapı.", "Le futur le plus facile et le plus sûr en A1.")}</p>

<h3>10) ${s("Passé composé", "Birleşik geçmiş zaman (passé composé)", "Le passé composé")}</h3>
<p>avoir ${s("OR", "VEYA", "OU")} être (${s("present", "şimdiki zaman", "présent")}) + participe passé = -di (${s("a finished event", "bitmiş bir olay", "un événement terminé")}): <i>J'ai mangé. / Je suis allée.</i></p>
${T([s("infinitive", "mastar", "infinitif"), "participe passé"], [
      ["-er", "-é: parler → parlé, manger → mangé, aller → allé"],
      ["-ir", "-i: finir → fini, choisir → choisi, partir → parti"],
      [s("irregular", "düzensiz", "irréguliers"), "être → été · avoir → eu · faire → fait · dire → dit · prendre → pris · apprendre → appris · comprendre → compris · mettre → mis · écrire → écrit · voir → vu · lire → lu · boire → bu · pouvoir → pu · vouloir → voulu · devoir → dû · savoir → su · connaître → connu · venir → venu · recevoir → reçu · ouvrir → ouvert · attendre → attendu · répondre → répondu · vendre → vendu · perdre → perdu · vivre → vécu · naître → né · mourir → mort · pleuvoir → plu"]])}
<p><b>${s("With être (all the other verbs take avoir)", "être ile çekimlenenler (diğer bütün fiiller avoir alır)", "Avec être (tous les autres verbes prennent avoir)")}:</b> 1) aller, venir, arriver, partir, entrer, sortir, monter, descendre, tomber, rester, naître, mourir, retourner, rentrer, passer, revenir, devenir · 2) ${s("all reflexive verbs", "bütün dönüşlü fiiller", "tous les verbes pronominaux")}: <i>Je me suis levée à 7 h.</i></p>
<ul>
<li>${s("With être, the participle agrees with the subject", "être ile participe özneye uyar", "Avec être, le participe s'accorde avec le sujet")}: <i>il est allé · elle est allée · ils sont allés · elles sont allées · Je suis arrivée</i> (${s("a woman speaking", "kadın konuşuyor", "une femme parle")}) · <i>Nous sommes partis</i> (${s("men or a mixed group", "erkekler veya karışık grup", "des hommes ou un groupe mixte")}).</li>
<li>${s("With avoir, no agreement with the subject", "avoir ile özneye uyum YOK", "Avec avoir, pas d'accord avec le sujet")}: <i>Elle a mangé. Elles ont travaillé.</i></li>
<li>${s("Negative and question", "Olumsuz ve soru", "Négation et question")}: <i>Je n'ai pas compris. Elle n'est pas venue. Je ne suis jamais allée à Nice. · Est-ce que tu as fini ? / As-tu fini ?</i></li>
<li>${s("A2 trap: monter, descendre, sortir, rentrer, passer take avoir when they have an object", "A2 tuzağı: monter, descendre, sortir, rentrer, passer bir nesne alırsa avoir ile çekimlenir", "Piège A2 : monter, descendre, sortir, rentrer, passer prennent avoir quand ils ont un complément d'objet")}: <i>J'ai monté les valises.</i></li>
</ul>

<h3>11) ${s("Imparfait (A2) and how it differs from the passé composé", "Imparfait (A2) ve passé composé ile farkı", "L'imparfait (A2) et sa différence avec le passé composé")}</h3>
<p>${s("Form: the « nous » stem of the present + -ais, -ais, -ait, -ions, -iez, -aient", "Yapılışı: şimdiki zamanın « nous » kökü + -ais, -ais, -ait, -ions, -iez, -aient", "Formation : le radical de « nous » au présent + -ais, -ais, -ait, -ions, -iez, -aient")}: <i>nous avons → j'avais · nous faisons → je faisais · nous allons → j'allais · nous prenons → je prenais · nous mangeons → je mangeais.</i> ${s("Only exception", "Tek istisna", "Seule exception")}: être → <i>j'étais</i>. -ais, -ait, -aient ${s("sound the same (« e »)", "aynı okunur (« e »)", "se prononcent pareil (« è »)")}.</p>
<ul>
<li><b>${s("Description in the past", "Geçmişte tarif", "Description au passé")}</b> (${s("setting, weather, people, feelings, age", "dekor, hava, kişiler, duygular, yaş", "décor, météo, personnes, sentiments, âge")}): <i>C'était magnifique. Il faisait froid. Il y avait beaucoup de monde. J'avais vingt ans.</i></li>
<li><b>${s("Past habits", "Geçmişteki alışkanlıklar", "Habitudes passées")}</b> (-erdi): <i>Quand j'étais petite, j'allais à la mer chaque été.</i></li>
<li><b>${s("An action in progress interrupted by an event", "Bir olayla kesilen süregiden eylem", "Une action en cours interrompue par un événement")}</b> (-iyordu): <i>Je regardais la télé quand le téléphone a sonné.</i></li>
</ul>
<p>${s("Think of a film: imparfait = the background; passé composé = the events that move the story on.", "Bir film düşün: imparfait = dekor, arka plan; passé composé = hikâyeyi ilerleten olaylar.", "Pense à un film : imparfait = le décor ; passé composé = les événements qui font avancer l'histoire.")}</p>
<p class="ex"><i>Samedi, il faisait beau</i> (${s("background", "dekor", "décor")}). <i>Je suis allée au parc avec mon fils</i> (${s("event", "olay", "événement")}). <i>Il y avait beaucoup d'enfants</i> (${s("background", "dekor", "décor")}). <i>Nous avons mangé une glace et nous sommes rentrés à 18 h</i> (${s("events", "olaylar", "événements")}). <i>C'était super !</i> (${s("feeling", "duygu", "sentiment")})</p>
<p>${s("Turkish tip: « Hava güzeldi », « yorgundum », « çok kalabalıktı » take -di but describe a situation, so in French they are imparfait", "Türkçe ipucu: « Hava güzeldi », « yorgundum », « çok kalabalıktı » gibi -di ekli ama bir durumu anlatan cümleler Fransızcada imparfait olur", "Astuce turque : « Hava güzeldi », « yorgundum », « çok kalabalıktı » prennent -di mais décrivent une situation : en français, c'est l'imparfait")}: <i>Il faisait beau. J'étais fatiguée. Il y avait beaucoup de monde.</i></p>
${T([s("tense", "zaman", "temps"), s("signal words", "sinyal kelimeler", "mots signaux")], [
      ["passé composé", "hier, un jour, soudain, tout à coup, d'abord, ensuite"],
      ["imparfait", "autrefois, avant, d'habitude, tous les jours, quand j'étais petite"]])}

<h3>12) ${s("Simple future (futur simple, A2)", "Basit gelecek zaman (futur simple, A2)", "Le futur simple (A2)")}</h3>
<p>${s("Infinitive + -ai, -as, -a, -ons, -ez, -ont (verbs in -re drop the final e)", "Mastar + -ai, -as, -a, -ons, -ez, -ont (-re ile bitenlerde son -e düşer)", "Infinitif + -ai, -as, -a, -ons, -ez, -ont (les verbes en -re perdent le e final)")}: <i>je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, ils parleront · prendre → je prendrai.</i></p>
<p><b>${s("Irregular stems (same endings)", "Düzensiz kökler (ekler aynı)", "Radicaux irréguliers (mêmes terminaisons)")}:</b> être → je serai · avoir → j'aurai · aller → j'irai · faire → je ferai · venir → je viendrai · pouvoir → je pourrai · vouloir → je voudrai · voir → je verrai · devoir → je devrai · savoir → je saurai · envoyer → j'enverrai · il faut → il faudra.</p>
<ul>
<li>${s("For plans, forecasts and promises", "Planlar, tahminler (hava durumu) ve sözler için", "Pour les projets, les prévisions et les promesses")}: <i>Demain, il fera beau. Je t'appellerai ce soir.</i></li>
<li>si + ${s("present", "şimdiki zaman", "présent")} → futur: <i>S'il fait beau, nous irons à la plage.</i></li>
<li>${s("Futur proche = near, sure, spoken; futur simple = further away, written, promises. Both translate Turkish -ecek.", "Futur proche daha yakın, kesin ve günlük konuşmaya ait; futur simple daha uzak, yazı dili ve sözler için. İkisi de « -ecek » ile çevrilir.", "Futur proche = proche, sûr, plutôt oral ; futur simple = plus lointain, plutôt écrit, promesses. Les deux traduisent le « -ecek » turc.")}</li>
<li><i>je voudrai</i> (${s("I will want", "isteyeceğim", "futur")}) ≠ <i>je voudrais</i> (${s("I would like", "isterdim, kibar istek", "demande polie")}): ${s("they sound almost the same — watch the spelling!", "okunuşları çok yakın — yazarken dikkat!", "ils se prononcent presque pareil : attention à l'orthographe !")}</li>
</ul>

<h3>13) ${s("Object pronouns (COD and COI)", "Nesne zamirleri (COD ve COI)", "Les pronoms COD et COI")}</h3>
${T([s("subject", "özne", "sujet"), s("direct object (COD, no preposition)", "doğrudan nesne (COD, edatsız)", "COD (sans préposition)"), s("à + person (COI)", "à + kişi (COI)", "COI (à + personne)")], [
      ["je", "me (m')", "me (m')"], ["tu", "te (t')", "te (t')"], ["il / elle", "le / la (l')", "lui"],
      ["nous", "nous", "nous"], ["vous", "vous", "vous"], ["ils / elles", "les", "leur"]])}
<p><i>Tu connais Paul ? — Oui, je le connais. · Je regarde la télé → Je la regarde. · Je téléphone à ma mère → Je lui téléphone. · J'écris à mes amis → Je leur écris.</i> ${s("Verbs with à + person", "à + kişi alan sık fiiller", "Verbes avec à + personne")}: téléphoner, parler, écrire, répondre, dire, donner, envoyer, demander, offrir.</p>
<ul>
<li>${s("A noun object comes after the verb (Je vois Paul), but the pronoun comes BEFORE it, just like in Turkish", "İsim nesne fiilden sonra gelir (Je vois Paul), ama nesne zamiri fiilden ÖNCE gelir, tıpkı Türkçedeki gibi", "Un nom complément se met après le verbe (Je vois Paul), mais le pronom se met AVANT, comme en turc")}: <i>Je le vois</i> (Onu görüyorum) · <i>Je ne le vois pas.</i></li>
<li>${s("With an infinitive: before the infinitive", "Mastar varsa: mastarın önüne", "Avec un infinitif : devant l'infinitif")}: <i>Je vais le voir. Je peux t'aider ?</i> · ${s("Passé composé: before the auxiliary", "Passé composé'de: yardımcı fiilin önüne", "Au passé composé : devant l'auxiliaire")}: <i>Je l'ai vu. Je lui ai parlé.</i></li>
<li>${s("Positive imperative: after the verb, with a hyphen", "Olumlu emirde: fiilden SONRA, tireyle", "Impératif positif : après le verbe, avec un trait d'union")}: <i>Regarde-le ! Téléphone-moi !</i> — ${s("negative", "olumsuz", "négatif")}: <i>Ne le regarde pas !</i></li>
<li>${s("Turkish traps — Turkish says « ONA » but French uses a direct object", "Türkçeyle karıştırılanlar — Türkçede « ONA » ama Fransızcada doğrudan nesne", "Pièges du turc — le turc dit « ONA » mais le français utilise un COD")}: <i>aider quelqu'un → Je l'aide</i> (ona yardım ediyorum) · <i>regarder quelqu'un → Je le regarde</i> (ona bakıyorum). ${s("And", "Ve", "Et")}: <i>téléphoner à → Je lui téléphone</i>, ${s("but", "ama", "mais")} <i>appeler quelqu'un → Je l'appelle</i> (onu arıyorum).</li>
</ul>

<h3>14) ${s("« y » and « en » (the simple version)", "« y » ve « en » (çok basit)", "« y » et « en » (version simple)")}</h3>
<ul>
<li><b>y</b> = ${s("there (replaces à / en / dans + a place)", "oraya, orada (à / en / dans + bir yer yerine)", "là (remplace à / en / dans + un lieu)")}: <i>Tu vas à Lille demain ? — Oui, j'y vais en train. · Elle habite en Belgique ? — Oui, elle y habite depuis un an.</i> ${s("Set phrases", "Kalıplar", "Expressions figées")}: <i>On y va ! · il y a.</i></li>
<li><b>en</b> = ${s("some, of it (replaces de / du / de la / des + a thing, often with a quantity)", "ondan, ondan biraz (de / du / de la / des + bir şey yerine, çoğu zaman miktarla)", "remplace de / du / de la / des + une chose, souvent avec une quantité")}: <i>Tu veux du café ? — Oui, j'en veux bien. / Non merci, je n'en veux pas. · Vous avez des enfants ? — Oui, j'en ai deux. · Il y a des tomates ? — Non, il n'y en a plus.</i></li>
<li>${s("Place: before the verb, like the other pronouns", "Yeri: diğer zamirler gibi fiilden önce", "Place : devant le verbe, comme les autres pronoms")}: <i>j'y vais, je n'en ai pas.</i></li>
</ul>

<h3>15) ${s("Cities and countries", "Şehir ve ülkelerle edatlar", "Villes et pays")}</h3>
${T([s("place", "yer", "lieu"), s("in / to", "-de / -e", "lieu / direction"), s("from", "-den", "origine")], [
      [s("cities", "şehirler", "villes"), "à Lille, à Istanbul", "de Lille, d'Izmir"],
      [s("feminine countries (in -e)", "dişil ülkeler (-e ile biten)", "pays féminins (en -e)"), "en France, en Turquie, en Belgique", "de France, de Turquie"],
      [s("countries starting with a vowel", "ünlüyle başlayan ülkeler", "pays qui commencent par une voyelle"), "en Iran, en Allemagne", "d'Iran, d'Allemagne"],
      [s("masculine countries", "eril ülkeler", "pays masculins"), "au Maroc, au Portugal, au Canada, au Japon", "du Maroc, du Portugal, du Japon"],
      [s("plural countries", "çoğul ülkeler", "pays au pluriel"), "aux Pays-Bas, aux États-Unis", "des Pays-Bas, des États-Unis"]])}
<ul>
<li>${s("Same word for « in » and « to »", "« -de » ve « -e » aynı edatı alır", "Même préposition pour le lieu et la direction")}: <i>J'habite à Lille / Je vais à Lille · J'habite en France / Je vais en France.</i></li>
<li>${s("A few masculine countries end in -e", "-e ile biten birkaç eril ülke", "Quelques pays masculins finissent en -e")}: <i>au Mexique, au Cambodge</i>. ${s("Cities with an article", "Artikelli şehirler", "Villes avec article")}: <i>au Havre, au Caire</i>. ${s("Regions", "Bölgeler", "Régions")}: <i>en Normandie, en Bretagne, dans le Nord.</i></li>
<li>chez + ${s("person = at someone's place", "kişi = …'in evinde / yanında", "personne = à la maison de quelqu'un")}: <i>chez moi, chez Paul, chez le médecin.</i></li>
</ul>

<h3>16) ${s("c'est or il est?", "c'est mi, il est mi?", "c'est ou il est ?")}</h3>
${T([s("use", "kullanım", "emploi"), s("examples", "örnekler", "exemples")], [
      [s("c'est + article or possessive + noun (plural: ce sont)", "c'est + artikel / iyelik + isim (çoğul: ce sont)", "c'est + article ou possessif + nom (pluriel : ce sont)"), "C'est un ami. C'est ma sœur. C'est une bonne idée. Ce sont mes enfants."],
      [s("c'est + name or pronoun", "c'est + özel isim / zamir", "c'est + nom propre ou pronom"), "C'est Marie. C'est moi."],
      [s("c'est + adjective (a general comment)", "c'est + sıfat (genel yorum)", "c'est + adjectif (commentaire général)"), "C'est beau ! C'est cher. Lille, c'est très agréable."],
      [s("il / elle est + adjective (a person or a precise thing)", "il / elle est + sıfat (bir kişi veya belirli bir şey)", "il / elle est + adjectif (une personne, une chose précise)"), "Il est gentil. Elle est fatiguée. La soupe ? Elle est chaude."],
      [s("il / elle est + job, nationality, religion — NO article", "il / elle est + meslek, uyruk, din — ARTİKELSİZ", "il / elle est + métier, nationalité, religion — SANS article"), "Il est médecin. Elle est turque."],
      [s("the time", "saat", "l'heure"), "Il est huit heures."]])}
<p>« Il est un médecin » ✗ → <i>Il est médecin.</i> ${s("or", "veya", "ou")} <i>C'est un médecin.</i> · « C'est huit heures » ✗ → <i>Il est huit heures.</i></p>

<h3>17) ${s("Comparing", "Karşılaştırma", "La comparaison")}</h3>
${T([s("structure", "yapı", "structure"), s("example", "örnek", "exemple")], [
      ["plus + adj. + que", "Lille est plus grande que Roubaix."],
      ["moins + adj. + que", "Le train est moins cher que l'avion."],
      ["aussi + adj. + que", "Elle est aussi grande que moi."],
      [s("plus de / moins de / autant de + noun + que", "plus de / moins de / autant de + isim + que", "plus de / moins de / autant de + nom + que"), "J'ai plus de travail que toi."],
      [s("verb + plus / moins / autant que", "fiil + plus / moins / autant que", "verbe + plus / moins / autant que"), "Je travaille plus que toi."],
      ["bon → meilleur · bien → mieux", "Ce restaurant est meilleur que l'autre. Elle parle mieux français que moi."],
      [s("superlative (A2)", "en üstünlük (A2)", "superlatif (A2)"), "C'est la plus belle ville du Nord. C'est le meilleur restaurant du quartier."]])}
<p>${s("Turkish says « Roubaix'den daha büyük »; French says « plus grande que Roubaix »: first plus + adjective, then que + what you compare. After que: moi, toi, lui, nous. « plus bon » is wrong → meilleur.", "Türkçede sıra « Roubaix'den daha büyük »; Fransızcada « plus grande que Roubaix »: önce plus + sıfat, sonra que + karşılaştırılan. « que »dan sonra vurgulu zamir: que moi, que toi, que lui, que nous. « plus bon » YANLIŞ → meilleur.", "Le turc dit « Roubaix'den daha büyük » ; le français dit « plus grande que Roubaix » : d'abord plus + adjectif, puis que + ce qu'on compare. Après que : moi, toi, lui, nous. « plus bon » est faux → meilleur.")}</p>`;
  };

  /* ── 2. How DELF A1–A2 is marked + an 8-week plan ── */
  const plan = l => {
    const s = pick(l), n = x => l === "en" ? x : x.replace(".", ",");
    const good = s("what a good answer does", "iyi bir cevap ne yapar", "ce que fait une bonne réponse");
    return `
<p><b>${s("DELF A1 and A2 = 4 parts × 25 points.", "DELF A1 ve A2 = 4 bölüm × 25 puan.", "DELF A1 et A2 = 4 épreuves × 25 points.")}</b> ${s(
      "You pass with <b>50/100</b> and at least <b>5/25 in each part</b>. In your mock papers aim higher — 15/25 per part and 65–70/100 in total — because stress on the day costs a few points.",
      "Diploma için toplam en az <b>50/100</b> VE <b>her bölümde en az 5/25</b> gerekir. Deneme sınavlarında daha yükseğini hedefle — her bölümde 15/25 ve toplamda 65–70/100 — çünkü sınav günü stres puanını biraz düşürebilir.",
      "On réussit avec <b>50/100</b> et au moins <b>5/25 à chaque épreuve</b>. Aux examens blancs, vise plus haut — 15/25 par épreuve et 65–70/100 au total — car le stress du jour J coûte quelques points.")}</p>
<p>${s(
      "The grids below are a <b>simplified</b> version of the official criteria of France Éducation international, and the points are <b>indicative</b>: the real grids (Manuel du candidat, grilles d'évaluation) are on france-education-international.fr. Use them to mark yourself and follow your progress — and if you can, ask a French speaker to read your texts.",
      "Aşağıdaki tablolar France Éducation international'ın resmî ölçütlerinden <b>basitleştirilmiştir</b> ve puanlar <b>gösterge niteliğindedir</b>: düzeltmenlerin kullandığı gerçek tablolar (Manuel du candidat, grilles d'évaluation) france-education-international.fr sitesindedir. Bunları kendine puan vermek ve ilerlemeni izlemek için kullan — mümkünse yazdıklarını Fransızca bilen birine de okut.",
      "Les grilles ci-dessous <b>simplifient</b> les critères officiels de France Éducation international et les points sont <b>indicatifs</b> : les vraies grilles (Manuel du candidat, grilles d'évaluation) sont sur france-education-international.fr. Sers-t'en pour t'auto-évaluer et suivre tes progrès, et si possible, fais relire tes textes par un francophone.")}</p>

<h3>${s("Writing A1 (production écrite, 25 points)", "Yazma A1 (production écrite, 25 puan)", "Production écrite A1 (25 points)")}</h3>
<p><b>${s("Exercise 1 — form (10 pts)", "1. alıştırma — form (10 puan)", "Exercice 1 — formulaire (10 pts)")}:</b> ${s(
      "about 1 point per correct, readable field. Check capitals, the date format (DD/MM/YYYY), the nationality (turque, lowercase), the order of the address, and answers that fit the field (under « Activités : » write an activity).",
      "doğru ve okunaklı her alan yaklaşık 1 puan. Kontrol et: büyük harfler, tarih biçimi (GG/AA/YYYY), uyruk (turque, küçük harfle), adres sırası, alana uygun cevaplar (« Activités : » alanına bir etkinlik adı).",
      "environ 1 point par case juste et lisible. Vérifie les majuscules, le format de la date (JJ/MM/AAAA), la nationalité (turque, en minuscule), l'ordre de l'adresse et des réponses adaptées à la case (après « Activités : », une activité).")}</p>
<p><b>${s("Exercise 2 — message (15 pts)", "2. alıştırma — mesaj (15 puan)", "Exercice 2 — message (15 pts)")}:</b></p>
${T([s("criterion", "ölçüt", "critère"), "pts", good], [
      ["Respect de la consigne", "2", s("all the information asked, the right type of text (postcard, e-mail…), at least 40 words", "istenen bütün bilgiler, doğru metin türü (kartpostal, e-posta…), en az 40 kelime", "toutes les informations demandées, le bon type de texte (carte postale, e-mail…), au moins 40 mots")],
      ["Correction sociolinguistique", "2", s("a fitting greeting (Cher… / Bonjour…) and closing (Bises / À bientôt); tu OR vous from start to finish", "uygun selamlama (Cher… / Bonjour…) ve kapanış (Bises / À bientôt); baştan sona tu VEYA vous", "une salutation (Cher… / Bonjour…) et une formule finale (Bises / À bientôt) adaptées ; tu OU vous du début à la fin")],
      ["Capacité à informer / décrire", "4", s("talks clearly about yourself, a place or an activity in simple sentences, with small details (tastes, weather, time)", "kendinden, bir yerden, bir etkinlikten basit cümlelerle açıkça bahseder; küçük ayrıntılar ekler (zevkler, hava, saat)", "parle clairement de soi, d'un lieu, d'une activité avec des phrases simples et des petits détails (goûts, météo, heure)")],
      ["Lexique / orthographe lexicale", "3", s("varied words that fit the topic; frequent words spelled right", "konuya uygun, çeşitli kelimeler; sık kelimelerde yazım doğru", "des mots variés et adaptés ; les mots fréquents bien écrits")],
      ["Morphosyntaxe", "3", s("present, negation, articles and adjective agreement mostly right", "şimdiki zaman, olumsuzluk, artikeller, sıfat uyumu çoğunlukla doğru", "présent, négation, articles, accord des adjectifs le plus souvent justes")],
      ["Cohérence", "1", s("simple links: et, mais, parce que, après", "basit bağlaçlar: et, mais, parce que, après", "des liens simples : et, mais, parce que, après")]])}
<p>${s("Points go fast when the topic is misunderstood or the text is far below 40 words, when there is no greeting or closing, when tu and vous are mixed, or when the text is a list of words with no links.", "Puanlar hızla gider: konu anlaşılmamışsa veya metin 40 kelimeden çok azsa, selamlama ya da kapanış yoksa, tu ve vous karışıksa, metin bağlaçsız bir kelime listesi gibiyse.", "Les points partent vite quand le sujet est mal compris ou que le texte fait bien moins de 40 mots, quand il manque la salutation ou la formule finale, quand tu et vous sont mélangés, ou quand le texte est une liste de mots sans liens.")}</p>

<h3>${s("Writing A2 (25 points)", "Yazma A2 (25 puan)", "Production écrite A2 (25 points)")}</h3>
${T([s("criterion", "ölçüt", "critère"), s("Ex. 1: tell an event", "1. alıştırma: bir olayı anlatmak", "Ex. 1 : raconter un événement"), s("Ex. 2: reply (invite, thank, apologise…)", "2. alıştırma: cevap (davet, teşekkür, özür…)", "Ex. 2 : répondre (inviter, remercier, s'excuser…)")], [
      [s("Respect de la consigne (at least 60 words)", "Respect de la consigne (en az 60 kelime)", "Respect de la consigne (60 mots minimum)"), "1", "1"],
      ["Correction sociolinguistique", "—", "1"],
      [s("Raconter et décrire (ex. 1) / Interagir (ex. 2)", "Raconter et décrire (1) / Interagir (2)", "Raconter et décrire (ex. 1) / Interagir (ex. 2)"), "4", "4"],
      ["Donner ses impressions", "2", "—"],
      ["Lexique / orthographe lexicale", "2", "2"],
      ["Morphosyntaxe / orthographe grammaticale", n("2.5"), n("2.5")],
      ["Cohérence et cohésion", n("1.5"), n("1.5")],
      [`<b>${s("total", "toplam", "total")}</b>`, "<b>13</b>", "<b>12</b>"]])}
<ul>
<li><b>${s("Telling (ex. 1)", "Anlatma (1. alıştırma)", "Raconter (ex. 1)")}:</b> ${s("good = events in order (d'abord, ensuite, enfin), passé composé for the events, imparfait for the setting and the weather. Average = the events are clear but there's no imparfait, or lots of mistakes. Weak = no order, almost no past tense.", "iyi = olaylar sıralı (d'abord, ensuite, enfin), olaylar passé composé, dekor ve hava imparfait ile. Orta = olaylar anlaşılıyor ama imparfait yok ya da çok hatalı. Zayıf = sıra yok, geçmiş zaman neredeyse hiç yok.", "bien = des événements dans l'ordre (d'abord, ensuite, enfin), le passé composé pour les événements, l'imparfait pour le décor et la météo. Moyen = on comprend les faits mais pas d'imparfait, ou beaucoup d'erreurs. Faible = pas d'ordre, presque pas de passé.")}</li>
<li><b>${s("Impressions (ex. 1)", "İzlenimler (1. alıştırma)", "Impressions (ex. 1)")}:</b> <i>C'était génial, j'ai adoré, j'étais un peu déçue parce que…</i> — ${s("no feeling or opinion = no points here.", "duygu veya görüş yoksa burada puan yok.", "sans sentiment ni avis, pas de points ici.")}</li>
<li><b>${s("Interaction (ex. 2)", "Etkileşim (2. alıştırma)", "Interagir (ex. 2)")}:</b> ${s("do EVERY action the instructions ask (thank, refuse, explain, suggest…), clearly and politely. Most lost points: one action is missing — often the new suggestion.", "yönergenin istediği BÜTÜN eylemleri (teşekkür etmek, reddetmek, açıklamak, önermek…) açık ve kibar biçimde yap. En sık puan kaybı: bir eylem eksik — çoğu zaman yeni öneri.", "fais TOUTES les actions demandées (remercier, refuser, expliquer, proposer…), clairement et poliment. Erreur la plus fréquente : une action manque, souvent la nouvelle proposition.")}</li>
<li><b>${s("Grammar", "Dilbilgisi", "Grammaire")}:</b> ${s("passé composé (être / avoir, agreement), imparfait, futur proche, je voudrais / pourriez-vous, simple pronouns mostly right.", "passé composé (être / avoir, uyum), imparfait, futur proche, je voudrais / pourriez-vous, basit zamirler çoğunlukla doğru.", "passé composé (être / avoir, accord), imparfait, futur proche, je voudrais / pourriez-vous, pronoms simples le plus souvent justes.")} <b>${s("Links", "Bağlantı", "Liens")}:</b> d'abord, ensuite, parce que, mais, donc, alors, quand ${s("+ paragraphs.", "+ paragraf düzeni.", "+ des paragraphes.")}</li>
</ul>

<h3>${s("Speaking A1 (production orale, 25 points)", "Konuşma A1 (production orale, 25 puan)", "Production orale A1 (25 points)")}</h3>
${T([s("part / criterion", "bölüm / ölçüt", "partie / critère"), "pts", good], [
      ["1. Entretien dirigé", "4", s("name, age, nationality, town, family, job and tastes in simple sentences", "adını, yaşını, uyruğunu, şehrini, ailesini, işini, zevklerini basit cümlelerle söyler", "nom, âge, nationalité, ville, famille, métier, goûts en phrases simples")],
      ["2. Échange d'informations", "4", s("a real question for each card (Est-ce que… ? / Quel… ? / Où… ?) with vous — not just « Sport ? »", "her kart için gerçek bir soru (Est-ce que… ? / Quel… ? / Où… ?), vous ile — sadece « Sport ? » değil", "une vraie question pour chaque carte (Est-ce que… ? / Quel… ? / Où… ?) avec vous, pas seulement « Sport ? »")],
      ["3. Dialogue simulé", "5", s("Bonjour, je voudrais…, c'est combien ?, merci, au revoir; prices and total right; you pay", "Bonjour, je voudrais…, c'est combien ?, merci, au revoir; fiyatlar ve toplam doğru; ödeme yapar", "Bonjour, je voudrais…, c'est combien ?, merci, au revoir ; prix et total justes ; on paie")],
      ["Lexique", "4", s("varied and correct words", "çeşitli ve doğru kelimeler", "des mots variés et justes")],
      ["Morphosyntaxe", "4", s("simple structures correct", "basit yapılar doğru", "des structures simples correctes")],
      [s("Phonologie (pronunciation)", "Phonologie (telaffuz)", "Phonologie"), "4", s("easy to understand despite an accent: u / ou, nasals, silent final letters mostly right", "aksan olsa da kolayca anlaşılır: u / ou, genizden ünlüler, okunmayan son harfler büyük ölçüde doğru", "facile à comprendre malgré l'accent : u / ou, nasales, lettres finales muettes le plus souvent justes")]])}

<h3>${s("Speaking A2 (25 points)", "Konuşma A2 (25 puan)", "Production orale A2 (25 points)")}</h3>
${T([s("part / criterion", "bölüm / ölçüt", "partie / critère"), "pts", good], [
      ["1. Entretien dirigé", "4", s("greet, introduce yourself, talk about your life, react to the questions", "selamlar, kendini tanıtır, çevresini anlatır, sorulara tepki verir", "saluer, se présenter, parler de sa vie, réagir aux questions")],
      ["2. Monologue suivi", "5", s("about 2 minutes: intro + 2–3 ideas + an example + conclusion, with d'abord, ensuite, par exemple, parce que, enfin (weak = under 30 seconds or off topic)", "yaklaşık 2 dakika: giriş + 2–3 fikir + örnek + sonuç; d'abord, ensuite, par exemple, parce que, enfin (zayıf = 30 saniyeden kısa veya konu dışı)", "environ 2 minutes : introduction + 2–3 idées + un exemple + conclusion, avec d'abord, ensuite, par exemple, parce que, enfin (faible = moins de 30 secondes ou hors sujet)")],
      ["3. Exercice en interaction", "6", s("ask, suggest, and when the examiner says no, suggest something else; agree politely; tu or vous according to the role (weak = only oui / non)", "soru sorar, önerir, ret karşısında başka bir çözüm önerir, kibarca anlaşır; role göre tu / vous (zayıf = sadece oui / non)", "demander, proposer et, si l'examinateur refuse, proposer autre chose ; se mettre d'accord poliment ; tu ou vous selon le rôle (faible = seulement oui / non)")],
      ["Lexique", "3", s("words that fit the topic, varied enough", "konuya uygun, yeterince çeşitli kelimeler", "des mots adaptés et assez variés")],
      ["Morphosyntaxe", "4", s("present, passé composé, futur proche, je voudrais, comparisons right", "şimdiki zaman, passé composé, futur proche, je voudrais, karşılaştırma doğru", "présent, passé composé, futur proche, je voudrais, comparaisons justes")],
      ["Phonologie", "3", s("easy to understand", "kolayca anlaşılır", "facile à comprendre")]])}
<p>${s("Record your answers to the speaking parts of the DELF tab and mark the recording with these grids.", "DELF sekmesindeki konuşma bölümlerinde cevaplarını kaydet ve kaydı bu tablolarla puanla.", "Enregistre tes réponses aux épreuves orales de l'onglet DELF et note l'enregistrement avec ces grilles.")}</p>

<h3>${s("Correct yourself: the error notebook", "Kendini düzelt: hata defteri", "Se corriger : le carnet d'erreurs")}</h3>
<ul>
<li><b>${s("Listening and reading", "Dinleme ve okuma", "Écoute et lecture")}:</b> ${s(
      "mark the questions you weren't sure of BEFORE checking. For each wrong answer write a code: <b>V</b> didn't know the word · <b>C</b> careless, misread · <b>N</b> number, time or date · <b>T</b> fell for a trap · <b>Z</b> ran out of time. Find the passage in the transcript, listen while reading, then listen again without the text. Write new words down with their article.",
      "cevap anahtarına bakmadan ÖNCE emin olmadığın soruları işaretle. Her yanlış için bir kod yaz: <b>K</b> kelimeyi bilmiyordum · <b>D</b> dikkatsizlik, yanlış okudum · <b>S</b> sayı, saat, tarih · <b>T</b> tuzak şıkka düştüm · <b>Z</b> zaman yetmedi. Yanlış yaptığın kısmı dinleme metninde bul, okuyarak dinle, sonra metinsiz dinle. Bilinmeyen kelimeleri artikeliyle deftere yaz.",
      "avant de corriger, marque les questions dont tu n'étais pas sûre. Pour chaque erreur, note un code : <b>V</b> vocabulaire inconnu · <b>I</b> inattention · <b>N</b> nombre, heure, date · <b>P</b> piège · <b>T</b> manque de temps. Retrouve le passage dans la transcription, écoute en lisant, puis réécoute sans le texte. Note les mots nouveaux avec leur article.")}</li>
<li><b>${s("Writing", "Yazma", "Écrit")}:</b> ${s(
      "wait 5 minutes, check with the list below, compare with the model answer (which phrases didn't you use?), then rewrite the corrected text — very effective — and mark it with the grid.",
      "yazdıktan sonra 5 dakika bekle, aşağıdaki listeyle kontrol et, model metinle karşılaştır (hangi kalıpları kullanmadın?), sonra metni düzelterek yeniden yaz — çok etkilidir — ve tabloyla puanla.",
      "attends 5 minutes, vérifie avec la liste ci-dessous, compare avec le modèle (quelles expressions n'as-tu pas utilisées ?), puis réécris le texte corrigé — très efficace — et note-le avec la grille.")}</li>
<li><b>${s("Speaking", "Konuşma", "Oral")}:</b> ${s(
      "record yourself on your phone. Long pauses? Turkish or English words? tu / vous right? Read the model dialogues aloud, then say them again without looking.",
      "kendini telefonla kaydet. Uzun duraklamalar var mı? Türkçe ya da İngilizce kelime kullandın mı? tu / vous doğru mu? Model diyalogları sesli oku, sonra kâğıda bakmadan tekrarla.",
      "enregistre-toi avec ton téléphone. De longues pauses ? Des mots turcs ou anglais ? tu / vous correct ? Lis les dialogues modèles à voix haute, puis redis-les sans regarder.")}</li>
</ul>
${T([s("my mistake", "yaptığım hata", "mon erreur"), s("correct", "doğrusu", "correction"), s("rule", "kural", "règle")], [
      ["J'ai allé au marché.", "Je suis allée au marché.", s("aller → être", "aller → être", "aller → être")],
      ["Je suis 30 ans.", "J'ai 30 ans.", s("age → avoir", "yaş → avoir", "âge → avoir")],
      ["une maison petit", "une petite maison", s("agreement + place", "sıfat uyumu ve yeri", "accord et place")],
      ["Je suis une infirmière.", "Je suis infirmière.", s("job: no article", "meslek: artikel yok", "métier : pas d'article")],
      ["en Lille", "à Lille", s("city → à", "şehir → à", "ville → à")]])}
<p>${s("Reread the notebook every week; cross a mistake out once it hasn't come back three times.", "Defteri her hafta baştan oku; bir hata üç kez tekrarlanmazsa üstünü çiz.", "Relis le carnet chaque semaine ; barre une erreur quand elle n'est pas revenue trois fois.")}</p>

<h3>${s("Checklist after every text", "Her metinden sonra kontrol listesi", "La liste à vérifier après chaque texte")}</h3>
<ul>
<li>${s("An article (or a possessive) before every noun?", "Her ismin önünde artikel (veya iyelik sıfatı) var mı?", "Un article (ou un possessif) devant chaque nom ?")}</li>
<li>${s("Adjectives agree (gender, number)? If you're a woman: contente, allée, née…", "Sıfatlar isme uyuyor mu (cinsiyet, sayı)? Kadınsan: contente, allée, née…", "Les adjectifs sont accordés (genre, nombre) ? Si tu es une femme : contente, allée, née…")}</li>
<li>${s("A subject + a conjugated verb in every sentence?", "Her cümlede özne + çekimli fiil var mı?", "Un sujet + un verbe conjugué dans chaque phrase ?")}</li>
<li>${s("Passé composé: the right être / avoir, and agreement with être?", "Passé composé'de être / avoir doğru mu, être ile uyum yapıldı mı?", "Passé composé : le bon auxiliaire, et l'accord avec être ?")}</li>
<li>${s("Negation in two parts (ne… pas)?", "Olumsuzluk iki parçalı mı (ne… pas)?", "Négation en deux parties (ne… pas) ?")}</li>
<li>${s("tu OR vous from start to finish?", "Baştan sona tu VEYA vous mu?", "tu OU vous du début à la fin ?")}</li>
<li>${s("Days, months, languages and nationality adjectives in lowercase?", "Gün, ay, dil ve uyruk sıfatları küçük harfle mi?", "Jours, mois, langues et adjectifs de nationalité en minuscule ?")}</li>
<li>${s("Accents right (é, è, à, ç)? a (has) / à (to) · ou (or) / où (where) · et (and) / est (is).", "Aksanlar doğru mu (é, è, à, ç)? a (fiil) / à (edat) · ou (veya) / où (nerede) · et (ve) / est (-dır).", "Accents justes (é, è, à, ç) ? a (verbe) / à (préposition) · ou / où · et / est.")}</li>
<li>${s("A greeting and a closing? Every task in the instructions done?", "Selamlama ve kapanış var mı? Konudaki bütün görevler yapıldı mı?", "Une salutation et une formule finale ? Toutes les tâches de la consigne ?")}</li>
<li>${s("Enough words (A1: at least 40, A2: at least 60)?", "Kelime sayısı yeterli mi (A1: en az 40, A2: en az 60)?", "Assez de mots (A1 : au moins 40, A2 : au moins 60) ?")}</li>
</ul>

<h3>${s("An 8-week plan (A1 → A2)", "8 haftalık çalışma planı (A1 → A2)", "Un plan sur 8 semaines (A1 → A2)")}</h3>
<p>${s(
      "45–60 minutes a day, 5–6 days a week, and a mock paper (whole or half) at the weekend in the DELF tab. For the speaking parts, ask a French speaker to play the examiner. The block numbers refer to the « Mini grammar for DELF » page.",
      "Günde 45–60 dakika, haftada 5–6 gün; hafta sonu DELF sekmesinde bir deneme sınavı (tamamı veya yarısı). Sözlü bölümler için Fransızca bilen birinden sınav görevlisini oynamasını iste. Bölüm numaraları « DELF için mini gramer » sayfasına aittir.",
      "45 à 60 minutes par jour, 5 à 6 jours par semaine, et un examen blanc (entier ou à moitié) le week-end dans l'onglet DELF. Pour l'oral, demande à un francophone de jouer l'examinateur. Les numéros de blocs renvoient à la page « Mini-grammaire du DELF ».")}</p>
${T([s("week", "hafta", "semaine"), s("what to do", "ne yapmalı", "au programme")], [
      ["1", s("A first A1 paper in real conditions (timer, no dictionary): your starting score — low is normal. Grammar blocks 1–7. Every day 10 min of numbers (phone numbers, prices, times). Write your self-introduction and learn it aloud.",
        "Gerçek koşullarda ilk A1 sınavı (süre tut, sözlük yok): başlangıç puanın — düşük olması normal. Gramer 1–7. Her gün 10 dakika sayı dinleme (telefon numarası, fiyat, saat). Kendini tanıtma metnini yaz ve sesli ezberle.",
        "Un premier sujet A1 en conditions réelles (chrono, pas de dictionnaire) : ton score de départ — bas, c'est normal. Grammaire, blocs 1 à 7. Chaque jour, 10 min de nombres (numéros de téléphone, prix, heures). Écris ta présentation et apprends-la à voix haute.")],
      ["2", s("Two A1 papers (one in the week, one at the weekend). Everyday vocabulary: health, housing, town, transport, shopping, restaurant (Cards tab). Ask 10 questions a day in the 3 forms — vital for part 2 of the A1 oral. Read the classic mistakes and start your error notebook.",
        "İki A1 sınavı (biri hafta içinde, biri hafta sonu). Günlük hayat kelimeleri: sağlık, konut, şehir, ulaşım, alışveriş, restoran (Kartlar sekmesi). Her gün 3 biçimde 10 soru sor — A1 sözlüsünün 2. bölümü için çok önemli. Klasik hataları oku ve hata defterine başla.",
        "Deux sujets A1 (un dans la semaine, un le week-end). Vocabulaire du quotidien : santé, logement, ville, transports, courses, restaurant (onglet Cartes). Pose 10 questions par jour sous les 3 formes : essentiel pour la partie 2 de l'oral A1. Lis les erreurs classiques et commence ton carnet d'erreurs.")],
      ["3", s("Two more A1 papers. Blocks 8–10 (imperative, futur proche, passé composé). Two short messages a week (postcard, invitation). Role-plays: shopping, booking — add up the prices aloud.",
        "İki A1 sınavı daha. Gramer 8–10 (emir kipi, futur proche, passé composé). Haftada iki kısa mesaj (kartpostal, davet). Canlandırma: alışveriş, rezervasyon — fiyatları yüksek sesle topla.",
        "Deux autres sujets A1. Blocs 8 à 10 (impératif, futur proche, passé composé). Deux petits messages par semaine (carte postale, invitation). Jeux de rôle : courses, réservation ; additionne les prix à voix haute.")],
      ["4", s("A full A1 paper in one sitting, in exam order: listening → reading → writing, then speaking. 70/100 or more on two A1 papers → move on to A2; if not, redo two A1 papers in week 5 and push the A2 plan back a week. Sitting the A1? Read the exam-day list below this week.",
        "Tam bir A1 sınavı tek oturumda, gerçek sırasıyla: dinleme → okuma → yazma, sonra sözlü. İki A1 sınavında 70/100 ve üzeri → A2'ye geç; değilse 5. haftada iki A1 sınavını tekrar çöz ve A2 planını bir hafta kaydır. A1 sınavına mı gireceksin? Bu hafta aşağıdaki sınav günü listesini oku.",
        "Un sujet A1 complet d'une traite, dans l'ordre de l'examen : écoute → lecture → écrit, puis oral. 70/100 ou plus à deux sujets A1 → passe à l'A2 ; sinon, refais deux sujets A1 en semaine 5 et décale le plan A2 d'une semaine. Tu passes l'A1 ? Lis cette semaine la liste du jour J ci-dessous.")],
      ["5", s("Two A2 papers. Blocks 10–12 (passé composé, imparfait, futur simple): 5 sentences a day. Verbs, connectors, time expressions. A2 writing: at least 60 words, plan first, then write. A2 speaking: one monologue topic a day, 2 minutes, recorded.",
        "İki A2 sınavı. Gramer 10–12 (passé composé, imparfait, futur simple): her gün 5 cümle. Fiiller, bağlaçlar, zaman ifadeleri. A2 yazma: en az 60 kelime, önce plan sonra yazı. A2 konuşma: her gün bir monolog konusu, 2 dakika, kayıtlı.",
        "Deux sujets A2. Blocs 10 à 12 (passé composé, imparfait, futur simple) : 5 phrases par jour. Verbes, connecteurs, expressions de temps. Écrit A2 : au moins 60 mots, d'abord un plan, puis le texte. Oral A2 : un sujet de monologue par jour, 2 minutes, enregistré.")],
      ["6", s("Two more A2 papers. Blocks 13–17 (pronouns, y / en, places, c'est / il est, comparing). Write one story about an event + one reply letter. Interaction: your helper REFUSES your first idea and you suggest another one. Reread your notebook and pick your 3 most frequent mistakes.",
        "İki A2 sınavı daha. Gramer 13–17 (zamirler, y / en, edatlar, c'est / il est, karşılaştırma). Bir olay anlatımı + bir cevap mektubu yaz. Etkileşim: yardımcın ilk önerini REDDETSİN, sen başka bir çözüm öner. Hata defterini tekrar oku, en sık 3 hatanı seç.",
        "Deux autres sujets A2. Blocs 13 à 17 (pronoms, y / en, lieux, c'est / il est, comparaison). Écris un récit + une lettre de réponse. Interaction : ton partenaire REFUSE ta première idée et tu proposes autre chose. Relis ton carnet et choisis tes 3 erreurs les plus fréquentes.")],
      ["7", s("One A2 paper, then focus on your weakest part. Redo the writing and speaking of a paper from two weeks ago and compare with your first version. Spelling of familiar loanwords (kuaför → coiffeur…) and the checklist above.",
        "Bir A2 sınavı, sonra en düşük puanlı bölümüne odaklan. İki hafta önce çözdüğün bir sınavın yazma ve konuşma bölümlerini yeniden yap, ilk hâliyle karşılaştır. Tanıdık kelimelerin yazımı (kuaför → coiffeur…) ve yukarıdaki kontrol listesi.",
        "Un sujet A2, puis concentre-toi sur ton épreuve la plus faible. Refais l'écrit et l'oral d'un sujet d'il y a deux semaines et compare avec ta première version. Orthographe des mots familiers (kuaför → coiffeur…) et la liste ci-dessus.")],
      ["8", s("7–10 days before the exam: a full A2 paper in real conditions, at the exam time. No new topics — reread your notebook, your model phrases and dialogues. The day before: light review, good sleep, documents ready.",
        "Sınavdan 7–10 gün önce: tam bir A2 sınavı, gerçek koşullarda ve sınav saatinde. Yeni konu öğrenme — hata defterini, kalıp cümleleri ve diyalogları tekrar et. Sınavdan önceki gün: hafif tekrar, iyi uyku, belgeler hazır.",
        "7 à 10 jours avant l'examen : un sujet A2 complet en conditions réelles, à l'heure de l'examen. Rien de nouveau : relis ton carnet, tes phrases modèles et tes dialogues. La veille : révision légère, bonne nuit, papiers prêts.")]])}
<p><b>${s("Daily routine (45–60 min)", "Günlük rutin (45–60 dakika)", "Routine quotidienne (45–60 min)")}:</b> ${s(
      "10 min vocabulary (Cards) · 10 min listening (French radio, short videos, the recordings of the papers) · 15 min grammar or reading · 10 min writing (3–5 sentences) or speaking (recorded) · 5 min error notebook.",
      "10 dk kelime (Kartlar) · 10 dk dinleme (Fransızca radyo, kısa videolar, sınavların kayıtları) · 15 dk gramer veya okuma · 10 dk yazma (3–5 cümle) veya sesli konuşma (kayıt) · 5 dk hata defteri.",
      "10 min de vocabulaire (Cartes) · 10 min d'écoute (radio française, petites vidéos, enregistrements des sujets) · 15 min de grammaire ou de lecture · 10 min d'écrit (3 à 5 phrases) ou d'oral (enregistré) · 5 min de carnet d'erreurs.")}</p>
<p>${s(
      "Living in France is your advantage: speak French at the bakery, the pharmacy, the post office and the town hall; read posters and ads, listen to the bus announcements. These are exactly the DELF topics. Your scores are kept in « My results » in the DELF tab.",
      "Fransa'da yaşamanın avantajını kullan: fırında, eczanede, postanede, belediyede Fransızca konuş; afişleri, ilanları oku, otobüs anonslarını dinle. Bunlar tam da DELF'in konuları. Puanların DELF sekmesindeki « Sonuçlarım » bölümünde saklanır.",
      "Vivre en France, c'est un avantage : parle français à la boulangerie, à la pharmacie, à la poste, à la mairie ; lis les affiches et les annonces, écoute les annonces dans le bus. Ce sont exactement les thèmes du DELF. Tes scores sont gardés dans « Mes résultats » de l'onglet DELF.")}</p>

<h3>${s("Exam day", "Sınav günü", "Le jour de l'examen")}</h3>
<p><b>${s("Bring", "Yanına al", "À emporter")}:</b> ${s(
      "the convocation (check the address, date and times) · an original photo ID (passport or residence permit — a photocopy or a picture on your phone is usually refused) · 2 dark pens (black or blue) · a watch (no phone in the room) · water and a snack (the oral may be at another time).",
      "sınav davet belgesi (la convocation: adresi, tarihi ve saatleri kontrol et) · fotoğraflı geçerli kimliğin aslı (pasaport veya oturma izni — fotokopi ya da telefondaki görüntü genellikle kabul edilmez) · 2 koyu renk tükenmez kalem (siyah veya mavi) · kol saati (salonda telefon yok) · su ve hafif bir atıştırmalık (sözlü başka bir saatte olabilir).",
      "la convocation (vérifie l'adresse, la date et les horaires) · une pièce d'identité originale avec photo (passeport ou titre de séjour : une photocopie ou une photo sur le téléphone est en général refusée) · 2 stylos foncés (noir ou bleu) · une montre (pas de téléphone dans la salle) · de l'eau et un en-cas (l'oral peut être à un autre moment).")}</p>
<ul>
<li>${s("Arrive at least 30 minutes early for the group parts: latecomers may be refused.", "Toplu sınavlara en az 30 dakika önce gel: geç kalanlar salona alınmayabilir.", "Arrive au moins 30 minutes en avance pour les épreuves collectives : les retardataires peuvent être refusés.")}</li>
<li>${s("No dictionary at A1 and A2; phone off and where the supervisor says.", "A1 ve A2'de sözlük YOK; telefon kapalı ve gözetmenin gösterdiği yerde.", "Pas de dictionnaire en A1 et A2 ; téléphone éteint et rangé là où le surveillant l'indique.")}</li>
<li>${s("Write your name and candidate number (code candidat) only where the first page asks; never use your real name or sign inside your texts.", "Adını ve aday numaranı (code candidat) sadece ilk sayfada istenen yere yaz; metinlerinde gerçek adını kullanma, imza atma.", "Écris ton nom et ton code candidat seulement là où la première page le demande ; n'utilise jamais ton vrai nom et ne signe pas dans tes textes.")}</li>
<li>${s("The draft (brouillon) is NOT marked: keep time to copy your final text.", "Müsvedde (brouillon) DÜZELTİLMEZ: son metni temize çekmeye zaman ayır.", "Le brouillon n'est PAS corrigé : garde du temps pour recopier ton texte.")}</li>
</ul>
${T([s("part", "bölüm", "épreuve"), s("strategy", "strateji", "stratégie")], [
      [s("Listening and reading", "Dinleme ve okuma", "Écoute et lecture"), s("Read the questions before the recording and underline the key words (time, price, day, place). First listening: mark what you're sure of; second: check. NEVER leave a blank — wrong answers don't lose points. Stuck? Move on and come back.",
        "Kayıt başlamadan önce soruları oku, anahtar kelimelerin (saat, fiyat, gün, yer) altını çiz. İlk dinlemede emin olduklarını işaretle, ikincide kontrol et. HİÇBİR SORUYU BOŞ BIRAKMA — yanlış cevap puan götürmez. Takılırsan geç, sonra dön.",
        "Lis les questions avant l'enregistrement et souligne les mots clés (heure, prix, jour, lieu). Première écoute : coche ce dont tu es sûre ; deuxième : vérifie. Ne laisse JAMAIS de blanc : une mauvaise réponse ne retire pas de points. Bloquée ? Passe et reviens plus tard.")],
      [s("Writing", "Yazma", "Écrit"), s("A1: 30 min (form ~8, message ~20, check ~2). A2: 45 min (each text ~20, check ~5). Number every piece of information asked; count your words and write the number under the text; greeting + closing; finish with the checklist.",
        "A1: 30 dakika (form ~8, mesaj ~20, kontrol ~2). A2: 45 dakika (her metin ~20, kontrol ~5). İstenen bütün bilgileri numaralandır; kelimelerini say ve sayıyı metnin altına yaz; selamlama + kapanış; sonunda kontrol listesi.",
        "A1 : 30 min (formulaire ~8, message ~20, relecture ~2). A2 : 45 min (chaque texte ~20, relecture ~5). Numérote toutes les informations demandées ; compte tes mots et écris le nombre sous le texte ; salutation + formule finale ; termine par la liste de vérification.")],
      [s("Speaking", "Konuşma", "Oral"), s("In the 10 minutes of preparation, note key words and questions for parts 2 and 3 (no full text: you may glance at your notes, not read them). Start with « Bonjour Madame / Monsieur », use vous, smile. Didn't understand? Ask them to repeat — it costs nothing. Never stay silent: « Euh… », « Alors… ». If the examiner disagrees, it's on purpose: stay calm and suggest something else. End with « Merci beaucoup, au revoir, bonne journée ! »",
        "10 dakikalık hazırlıkta 2. ve 3. bölümler için anahtar kelimeleri ve soruları not et (tam metin yazma: notlarına bakabilirsin ama okuma). « Bonjour Madame / Monsieur » ile başla, vous kullan, gülümse. Anlamazsan tekrar etmesini iste — puan kaybettirmez. Sessiz kalma: « Euh… », « Alors… ». Görevli itiraz ederse bu kasıtlıdır: sakin kal, başka bir öneri yap. Sonunda: « Merci beaucoup, au revoir, bonne journée ! »",
        "Pendant les 10 minutes de préparation, note des mots clés et des questions pour les parties 2 et 3 (pas de texte entier : tu peux jeter un œil à tes notes, pas les lire). Commence par « Bonjour Madame / Monsieur », vouvoie, souris. Pas compris ? Demande de répéter : ça ne coûte rien. Ne reste jamais silencieuse : « Euh… », « Alors… ». Si l'examinateur n'est pas d'accord, c'est voulu : reste calme et propose autre chose. Pour finir : « Merci beaucoup, au revoir, bonne journée ! »")]])}
<p>${s(
      "<b>Results</b> usually come a few weeks later from the exam centre; the diploma follows a few months later and is valid for life. Before the day, also do at least one official sample paper (exemples de sujets) on france-education-international.fr — the papers on this site are practice, not official ones. Bon courage et bonne chance !",
      "<b>Sonuçlar</b> genellikle birkaç hafta sonra sınav merkezi tarafından açıklanır; diploma birkaç ay sonra merkezden alınır ve ömür boyu geçerlidir. Sınav gününden önce france-education-international.fr sitesindeki resmî örnek sınavlardan (exemples de sujets) en az birini de çöz — bu sitedeki sınavlar alıştırmadır, resmî değildir. Bon courage et bonne chance!",
      "Les <b>résultats</b> arrivent en général quelques semaines plus tard par le centre d'examen ; le diplôme suit quelques mois après et il est valable à vie. Avant le jour J, fais aussi au moins un sujet officiel (exemples de sujets) sur france-education-international.fr : les sujets de ce site sont des entraînements, pas des sujets officiels. Bon courage et bonne chance !")}</p>`;
  };

  window.GUIDE.push({
    id: "delf-grammar", icon: "📐",
    t: { en: "Mini grammar for DELF A1–A2", tr: "DELF A1–A2 için mini gramer", fr: "Mini-grammaire du DELF A1–A2" },
    res: ["kwiziq", "lawless", "tex", "pointdufle", "conjugueur"],
    en: grammar("en"), tr: grammar("tr"), fr: grammar("fr")
  });

  window.GUIDE.push({
    id: "delf-plan", icon: "🎯",
    t: { en: "DELF A1–A2: how you are marked + a study plan", tr: "DELF A1–A2: nasıl puanlanırsın + çalışma planı", fr: "DELF A1–A2 : comment on est noté + un plan de travail" },
    res: ["fei-delf", "tv5-delf", "delfdalfch", "pointdufle-eval", "pff", "bonpatron"],
    en: plan("en"), tr: plan("tr"), fr: plan("fr")
  });

  /* ── 3. Extra classic mistakes (from the DELF annex), only those not already in window.MISTAKES ──
     [wrong, right, why EN, why TR, why FR] */
  const MORE = [
    ["J'ai acheté pain.", "J'ai acheté <b>du</b> pain.", "uncountable « some » = du / de la", "sayılamayan « biraz » = du / de la", "quantité non comptable = du / de la"],
    ["Je travaille à hôpital.", "Je travaille à <b>l'</b>hôpital.", "the article stays after à / de (l' before a vowel or a silent h)", "à / de'den sonra da artikel gerekir (ünlü ve h önünde l')", "l'article reste après à / de (l' devant une voyelle ou un h muet)"],
    ["Je suis une étudiante. / Il est un médecin.", "Je suis <b>étudiante</b>. / Il est <b>médecin</b>.", "job or nationality after être: no article", "être'den sonra meslek / uyruk: artikel yok", "métier ou nationalité après être : pas d'article"],
    ["J'aime du chocolat.", "J'aime <b>le</b> chocolat.", "aimer, adorer, détester + le / la / les (a general taste)", "aimer, adorer, détester + le / la / les (genel zevk)", "aimer, adorer, détester + le / la / les (goût en général)"],
    ["Je vais au médecin.", "Je vais <b>chez</b> le médecin.", "to a person (doktora) = chez", "birinin yanına (doktora) = chez", "chez + une personne, à + un lieu"],
    ["J'ai besoin un médecin.", "J'ai besoin <b>d'</b>un médecin.", "learn verbs with their preposition: avoir besoin de, penser à, parler de", "fiilleri edatıyla öğren: avoir besoin de, penser à, parler de", "on apprend le verbe avec sa préposition : avoir besoin de, penser à, parler de"],
    ["J'habite à Lille'de.", "J'habite <b>à Lille</b>.", "no Turkish suffix or apostrophe on a French word", "Fransızca kelimeye Türkçe ek ve kesme işareti eklenmez", "pas de suffixe turc ni d'apostrophe sur un mot français"],
    ["tu = « tu », vous = « vüs »", "tu = « tü », vous = « vu »", "u = Turkish ü, ou = Turkish u (tu ≠ tout, rue ≠ roue)", "u = ü, ou = u (tu ≠ tout, rue ≠ roue)", "u se dit « ü », ou se dit « u » (tu ≠ tout, rue ≠ roue)"],
    ["parler = « parler » with an r", "parler = « parlé »", "the r of -er infinitives is silent", "-er mastarlarında r okunmaz", "le r des infinitifs en -er ne se prononce pas"],
    ["petit, grand, deux: every letter read", "« pöti », « gra~ », « dö »", "final consonants are usually silent (except c, r, f, l)", "sondaki ünsüzler genelde okunmaz (c, r, f, l hariç)", "les consonnes finales sont souvent muettes (sauf c, r, f, l)"],
    ["un homme et une femme = « e-tün »", "« e ün »: <b>no liaison</b> after et", "never a liaison after « et »", "« et »den sonra liaison yapılmaz", "jamais de liaison après « et »"],
    ["les haricots = « le-zariko »", "« le ariko »", "h aspiré: no liaison and no l' (le héros, la Hollande)", "h aspiré: liaison ve kısalma yok (le héros, la Hollande)", "h aspiré : ni liaison ni élision (le héros, la Hollande)"],
    ["Je suis mangé.", "<b>J'ai</b> mangé.", "manger takes avoir — « je suis mangé » means « I am eaten »!", "manger avoir alır — « je suis mangé » = « yeniyorum » (edilgen)!", "manger se conjugue avec avoir : « je suis mangé » est un passif !"],
    ["Samedi, il a fait beau. (description)", "Samedi, il <b>faisait</b> beau.", "describing a past situation = imparfait", "geçmişte bir durumu anlatmak = imparfait", "décrire une situation passée = imparfait"],
    ["Je suis Turque. Je parle Français.", "Je suis <b>t</b>urque. Je parle <b>f</b>rançais.", "nationality adjectives and languages: lowercase (but les Turcs)", "uyruk sıfatı ve dil adları küçük harfle (ama les Turcs)", "adjectifs de nationalité et langues : minuscule (mais les Turcs)"],
    ["le Lundi 2 Mars", "le <b>l</b>undi 2 <b>m</b>ars", "days and months: lowercase", "gün ve ay adları küçük harfle", "jours et mois : minuscule"],
    ["en 15 juillet / à 15 juillet", "<b>le</b> 15 juillet · en juillet · en 2026", "a date = le + day + month; en + month or year", "tarih = le + gün + ay; ay veya yıl = en", "une date = le + jour + mois ; en + mois ou année"],
    ["le un mai", "le <b>1er</b> mai", "the 1st = le premier (1er)", "ayın 1'i = le premier (1er)", "le premier jour du mois = le 1er"],
    ["à 15.30", "à 15 <b>h</b> 30", "times are written with h", "saat « h » ile yazılır", "l'heure s'écrit avec h"],
    ["Garçon ! (to call the waiter)", "<b>S'il vous plaît !</b>", "« garçon » = boy; calling a waiter that way is old-fashioned and rude", "« garçon » = erkek çocuk; garsona böyle seslenmek eski ve kaba", "« Garçon ! » est vieilli et impoli pour appeler un serveur"],
    ["l'asansör, le kuaför", "l'<b>ascenseur</b>, le <b>coiffeur</b>", "loanwords: same sound, French spelling", "alıntı kelimeler: ses aynı, yazım Fransızca", "mots empruntés au turc : même son, orthographe française"],
    ["le plage, la musée", "<b>la</b> plage, <b>le</b> musée", "check the gender of familiar loanwords (la plage despite -age; le musée, le lycée)", "tanıdık kelimelerin cinsiyetini kontrol et (-age'e rağmen la plage; le musée, le lycée)", "vérifie le genre des mots familiers (la plage malgré -age ; le musée, le lycée)"],
    ["Il à un chat et il et content.", "Il <b>a</b> un chat et il <b>est</b> content.", "a (has) / à (to) · et (and) / est (is)", "a (fiil) / à (edat) · et (ve) / est (-dır)", "a (verbe) / à (préposition) · et (et) / est (verbe être)"]
  ];
  const M = window.MISTAKES = window.MISTAKES || [];
  const key = x => x.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim().toLowerCase();
  const seen = new Set(M.map(m => key(m[0])));
  MORE.forEach(m => { if (!seen.has(key(m[0]))) { M.push(m); seen.add(key(m[0])); } });

  /* Refresh the "classic mistakes" guide page so its table and title include the new entries. */
  const g = window.GUIDE.find(x => x.id === "mistakes");
  if (g) {
    const col = { en: 2, tr: 3, fr: 4 };
    for (const l of ["en", "tr", "fr"]) {
      if (g[l]) g[l] = g[l].replace(/<table[\s\S]*<\/table>/, () => {
        const head = (g[l].match(/<tr>(<th>[\s\S]*?)<\/tr>/) || [])[1] || "";
        const heads = (head.match(/<th>([\s\S]*?)<\/th>/g) || []).map(h => h.replace(/<\/?th>/g, ""));
        return T(heads, M.map(m => [m[0], m[1], m[col[l]] || m[2]]));
      });
      if (g.t[l]) g.t[l] = g.t[l].replace(/\d+/, M.length);
    }
  }
})();
