/* Original guide for a Turkish speaker learning French.
   Each section: { id, icon, t:{en,tr,fr}, en: html, tr: html } (FR interface shows the English text). */
(function () {
  window.GUIDE = [
    {
      id: "method", icon: "🌱",
      t: { en: "How to learn without stress", tr: "Stressiz nasıl öğrenilir", fr: "Apprendre sans stress" },
      en: `
<p><b>You don't need to be fast. You need to be regular.</b> 20 calm minutes a day beat 3 stressed hours on Sunday.</p>
<ul>
<li><b>Listen a lot, understand a little more each week.</b> Your brain learns from input it <i>almost</i> understands. It's normal to understand 50% at first.</li>
<li><b>Mix serious and easy.</b> On a good day, do a path step. On a tired day, a song on LyricsTraining or an episode of a series counts too.</li>
<li><b>Mistakes are the method.</b> French people make mistakes in French too. Every mistake you say aloud is a step forward.</li>
<li><b>Your profession is your shortcut.</b> You already know anatomy, injuries and sport. Learning them in French is relearning labels, not knowledge.</li>
<li><b>Be realistic.</b> B1 takes around 350–400 hours, B2 around 600. That's one to two years at a gentle pace — and living in France speeds it up a lot.</li>
<li><b>Use Turkish as a friend.</b> When grammar is confusing, watch an explanation in Turkish. Then go back to French.</li>
</ul>`,
      tr: `
<p><b>Hızlı olman gerekmiyor. Düzenli olman yeterli.</b> Günde 20 sakin dakika, pazar günü 3 stresli saatten iyidir.</p>
<ul>
<li><b>Çok dinle, her hafta biraz daha fazla anla.</b> Beynin <i>neredeyse</i> anladığı şeylerden öğrenir. Başta %50 anlaman normal.</li>
<li><b>Ciddi ve kolay olanı karıştır.</b> İyi bir günde bir yol adımı yap. Yorgun bir günde LyricsTraining'de bir şarkı veya bir dizi bölümü de sayılır.</li>
<li><b>Hatalar yöntemin kendisi.</b> Fransızlar da Fransızca hata yapar. Yüksek sesle söylediğin her hata bir adım ileri.</li>
<li><b>Mesleğin senin kısayolun.</b> Anatomiyi, sakatlıkları ve sporu zaten biliyorsun. Bunları Fransızca öğrenmek bilgiyi değil, sadece etiketleri yeniden öğrenmek.</li>
<li><b>Gerçekçi ol.</b> B1 yaklaşık 350–400 saat, B2 yaklaşık 600 saat sürer. Sakin bir tempoda bir-iki yıl — Fransa'da yaşamak bunu çok hızlandırır.</li>
<li><b>Türkçeyi dost olarak kullan.</b> Dilbilgisi kafa karıştırıcı olduğunda Türkçe bir anlatım izle. Sonra Fransızcaya dön.</li>
</ul>`
    },
    {
      id: "loanwords", icon: "🤝",
      t: { en: "You already know hundreds of French words", tr: "Yüzlerce Fransızca kelimeyi zaten biliyorsun", fr: "Tu connais déjà des centaines de mots" },
      en: `
<p>In the 19th century Ottoman elites spoke French, and Turkish borrowed <b>about 5,000 words</b> from it. Your Turkish is a secret French dictionary:</p>
<p class="ex">asansör → ascenseur · kuaför → coiffeur · şoför → chauffeur · randevu → rendez-vous · antrenman → entraînement · rötar → retard · kuzen → cousin · lise → lycée</p>
<p><b>Tricks to guess the French word:</b></p>
<ul>
<li>Turkish <b>-syon</b> = French <b>-tion</b>: televizyon → télévision, organizasyon → organisation, rehabilitasyon → réhabilitation.</li>
<li>Turkish <b>ş</b> often = French <b>ch</b>: şans → chance, şömine → cheminée, şampiyon → champion.</li>
<li>Turkish <b>j</b> = French <b>j/g</b> (same sound!): masaj → massage, garaj → garage, bagaj → bagage.</li>
<li>Turkish <b>ü/ö</b> often = French <b>u/eu</b> spelling: büro → bureau, kuaför → coiffeur, parfüm → parfum.</li>
</ul>
<p><b>But watch the faux amis</b> (false friends): <i>garson</i> (waiter) ≠ <i>garçon</i> (boy); <i>apartman</i> (building) ≠ <i>appartement</i> (flat); <i>kolej</i> (private school) ≠ <i>collège</i> (middle school). They're marked in the deck.</p>`,
      tr: `
<p>19. yüzyılda Osmanlı seçkinleri Fransızca konuşuyordu ve Türkçe Fransızcadan <b>yaklaşık 5.000 kelime</b> aldı. Türkçen gizli bir Fransızca sözlük:</p>
<p class="ex">asansör → ascenseur · kuaför → coiffeur · şoför → chauffeur · randevu → rendez-vous · antrenman → entraînement · rötar → retard · kuzen → cousin · lise → lycée</p>
<p><b>Fransızca kelimeyi tahmin etme taktikleri:</b></p>
<ul>
<li>Türkçe <b>-syon</b> = Fransızca <b>-tion</b>: televizyon → télévision, organizasyon → organisation.</li>
<li>Türkçe <b>ş</b> çoğu zaman = Fransızca <b>ch</b>: şans → chance, şömine → cheminée, şampiyon → champion.</li>
<li>Türkçe <b>j</b> = Fransızca <b>j/g</b> (aynı ses!): masaj → massage, garaj → garage, bagaj → bagage.</li>
<li>Türkçe <b>ü/ö</b> çoğu zaman = Fransızca <b>u/eu</b> yazımı: büro → bureau, kuaför → coiffeur, parfüm → parfum.</li>
</ul>
<p><b>Ama yanlış dostlara dikkat</b> (faux amis): <i>garson</i> ≠ <i>garçon</i> (erkek çocuk); <i>apartman</i> (bina) ≠ <i>appartement</i> (daire); <i>kolej</i> (özel okul) ≠ <i>collège</i> (ortaokul). Destede işaretli.</p>`
    },
    {
      id: "pron", icon: "👄",
      t: { en: "Pronunciation for Turkish speakers", tr: "Türkçe konuşanlar için telaffuz", fr: "La prononciation pour les turcophones" },
      en: `
<p>Good news: Turkish already has many French sounds — <b>ü, ö, j</b> exist in both! What's new:</p>
<table class="tbl">
<tr><th>French</th><th>Sounds like (Turkish)</th><th>Example</th></tr>
<tr><td><b>u</b></td><td>ü</td><td>tu, rue, musique</td></tr>
<tr><td><b>ou</b></td><td>u</td><td>vous, nous, bonjour</td></tr>
<tr><td><b>eu / œu</b></td><td>ö</td><td>deux, cœur, sœur</td></tr>
<tr><td><b>ch</b></td><td>ş</td><td>chat, chance</td></tr>
<tr><td><b>j / ge / gi</b></td><td>j</td><td>je, garage, gilet</td></tr>
<tr><td><b>é</b></td><td>closed e (like "e" in "ev" but tighter)</td><td>café, été</td></tr>
<tr><td><b>è / ê / ai</b></td><td>open e (like "e" in "sen")</td><td>père, tête, lait</td></tr>
<tr><td><b>oi</b></td><td>"va"</td><td>moi, toi, trois</td></tr>
<tr><td><b>gn</b></td><td>"ny"</td><td>montagne, Espagne</td></tr>
<tr><td><b>r</b></td><td>soft "ğ" from the throat, not the Turkish rolled r</td><td>Paris, rouge</td></tr>
</table>
<p><b>Nasal vowels</b> (new!): air goes through the nose, and the n/m is <i>not</i> pronounced.</p>
<ul>
<li><b>an / en</b> → <i>enfant, temps</i> (mouth open like "a")</li>
<li><b>on</b> → <i>bon, maison</i> (round lips like "o")</li>
<li><b>in / ain / un</b> → <i>vin, pain, un</i> (smile like "e")</li>
</ul>
<p><b>Silent letters:</b> unlike Turkish, French often doesn't pronounce the last consonant and the final <b>e</b>: <i>petit</i> = "pöti", <i>grand</i> = "gran", <i>ils parlent</i> = "il parl". Rule of thumb: final <b>c, r, f, l</b> are often pronounced (think "CaReFuL").</p>
<p><b>Liaison:</b> a silent letter wakes up before a vowel: <i>les amis</i> = "lezami", <i>vous avez</i> = "vuzave".</p>
<p><b>Stress:</b> Turkish stresses the last syllable too, so your French rhythm can be very natural. Keep every syllable even, with a small lift at the end of the group.</p>`,
      tr: `
<p>İyi haber: Türkçede birçok Fransızca ses zaten var — <b>ü, ö, j</b> iki dilde de var! Yeni olanlar:</p>
<table class="tbl">
<tr><th>Fransızca</th><th>Türkçede</th><th>Örnek</th></tr>
<tr><td><b>u</b></td><td>ü</td><td>tu, rue, musique</td></tr>
<tr><td><b>ou</b></td><td>u</td><td>vous, nous, bonjour</td></tr>
<tr><td><b>eu / œu</b></td><td>ö</td><td>deux, cœur, sœur</td></tr>
<tr><td><b>ch</b></td><td>ş</td><td>chat, chance</td></tr>
<tr><td><b>j / ge / gi</b></td><td>j</td><td>je, garage, gilet</td></tr>
<tr><td><b>é</b></td><td>kapalı e ("ev"deki e, daha gergin)</td><td>café, été</td></tr>
<tr><td><b>è / ê / ai</b></td><td>açık e ("sen"deki e)</td><td>père, tête, lait</td></tr>
<tr><td><b>oi</b></td><td>"va"</td><td>moi, toi, trois</td></tr>
<tr><td><b>gn</b></td><td>"ny"</td><td>montagne, Espagne</td></tr>
<tr><td><b>r</b></td><td>boğazdan yumuşak bir "ğ", Türkçedeki titrek r değil</td><td>Paris, rouge</td></tr>
</table>
<p><b>Genizden sesli harfler</b> (yeni!): hava burundan çıkar ve n/m <i>okunmaz</i>.</p>
<ul>
<li><b>an / en</b> → <i>enfant, temps</i> (ağız "a" gibi açık)</li>
<li><b>on</b> → <i>bon, maison</i> (dudaklar "o" gibi yuvarlak)</li>
<li><b>in / ain / un</b> → <i>vin, pain, un</i> ("e" gibi gülümse)</li>
</ul>
<p><b>Okunmayan harfler:</b> Türkçeden farklı olarak, Fransızca çoğu zaman son ünsüzü ve sondaki <b>e</b>'yi okumaz: <i>petit</i> = "pöti", <i>grand</i> = "gran", <i>ils parlent</i> = "il parl". Kural: sondaki <b>c, r, f, l</b> genelde okunur ("CaReFuL" diye düşün).</p>
<p><b>Liaison (bağlama):</b> okunmayan harf bir ünlüden önce uyanır: <i>les amis</i> = "lezami", <i>vous avez</i> = "vuzave".</p>
<p><b>Vurgu:</b> Türkçe de genelde son heceyi vurgular, bu yüzden Fransızca ritmin çok doğal olabilir. Heceleri eşit tut, grubun sonunda hafifçe yükselt.</p>`
    },
    {
      id: "grammar", icon: "🧩",
      t: { en: "French grammar compared with Turkish", tr: "Türkçeyle karşılaştırmalı Fransızca dilbilgisi", fr: "La grammaire française comparée au turc" },
      en: `
<table class="tbl">
<tr><th>Topic</th><th>Turkish</th><th>French</th></tr>
<tr><td>Word order</td><td>Esin kahve <b>içiyor</b> (SOV)</td><td>Esin <b>boit</b> un café (SVO): the verb comes in the middle</td></tr>
<tr><td>Gender</td><td>none</td><td>every noun is masculine (<i>le</i>) or feminine (<i>la</i>). Learn the article with the word: <i>la</i> chaise, <i>le</i> genou</td></tr>
<tr><td>Articles</td><td>bir / nothing</td><td><i>un/une</i> (a), <i>le/la/les</i> (the), <i>du/de la</i> (some): almost every noun needs one</td></tr>
<tr><td>Suffixes vs prepositions</td><td>ev<b>de</b>, ev<b>e</b>, ev<b>den</b></td><td><b>à</b> la maison, <b>à</b> la maison, <b>de</b> la maison: French puts small words <i>before</i></td></tr>
<tr><td>Possession</td><td>Esin'<b>in</b> kitab<b>ı</b></td><td>le livre <b>d'</b>Esin (reversed order)</td></tr>
<tr><td>Adjectives</td><td>güzel ev</td><td>most adjectives go <i>after</i> (une maison blanche), a few short ones before (une belle maison)</td></tr>
<tr><td>Pronouns</td><td>(Ben) geliyorum: pronoun optional</td><td><b>Je</b> viens: the pronoun is <b>always</b> required</td></tr>
<tr><td>Sen / Siz</td><td>sen / siz</td><td><b>tu / vous</b> — exactly the same logic! Use <i>vous</i> with strangers and at work</td></tr>
<tr><td>Var / Yok</td><td>Süt var / yok</td><td><b>Il y a</b> du lait / <b>Il n'y a pas</b> de lait</td></tr>
<tr><td>Question</td><td>Geliyor <b>musun</b>?</td><td><b>Est-ce que</b> tu viens ? / Tu viens ? (rising voice)</td></tr>
<tr><td>Negation</td><td>gel<b>me</b>iyorum</td><td>je <b>ne</b> viens <b>pas</b> (wraps the verb; in speech people drop <i>ne</i>)</td></tr>
<tr><td>Endings</td><td>gel-iyor-<b>um</b>, -sun, -uz…</td><td>Verbs also change with the person: je parl<b>e</b>, nous parl<b>ons</b>, vous parl<b>ez</b>. You already think this way!</td></tr>
</table>
<p><b>Tenses, roughly:</b></p>
<table class="tbl">
<tr><th>French</th><th>≈ Turkish</th><th>Example</th></tr>
<tr><td>présent</td><td>-iyor / -r</td><td>je travaille = çalışıyorum / çalışırım</td></tr>
<tr><td>passé composé</td><td>-dı</td><td>j'ai travaillé = çalıştım</td></tr>
<tr><td>imparfait</td><td>-iyordu / -rdı</td><td>je travaillais = çalışıyordum / çalışırdım</td></tr>
<tr><td>futur proche</td><td>-ecek (soon)</td><td>je vais travailler = çalışacağım</td></tr>
<tr><td>futur simple</td><td>-ecek</td><td>je travaillerai = çalışacağım</td></tr>
<tr><td>conditionnel</td><td>-erdi / -se…-r</td><td>je travaillerais = çalışırdım</td></tr>
<tr><td>subjonctif</td><td>-meli / -mesi (gerek)</td><td>il faut que je travaille = çalışmam gerek</td></tr>
</table>
<p>Note: French has no direct <b>-miş</b>. To report hearsay, use <i>apparemment</i>, <i>il paraît que…</i> or the conditionnel (« il serait malade »).</p>`,
      tr: `
<table class="tbl">
<tr><th>Konu</th><th>Türkçe</th><th>Fransızca</th></tr>
<tr><td>Sözcük dizimi</td><td>Esin kahve <b>içiyor</b> (ÖNY)</td><td>Esin <b>boit</b> un café (ÖYN): fiil ortaya gelir</td></tr>
<tr><td>Cinsiyet</td><td>yok</td><td>her isim eril (<i>le</i>) veya dişil (<i>la</i>). Kelimeyi artikeliyle öğren: <i>la</i> chaise, <i>le</i> genou</td></tr>
<tr><td>Artikeller</td><td>bir / hiçbir şey</td><td><i>un/une</i> (bir), <i>le/la/les</i> (belirli), <i>du/de la</i> (biraz): hemen her isim bir artikel ister</td></tr>
<tr><td>Ekler ve edatlar</td><td>ev<b>de</b>, ev<b>e</b>, ev<b>den</b></td><td><b>à</b> la maison, <b>à</b> la maison, <b>de</b> la maison: Fransızca küçük kelimeleri <i>öne</i> koyar</td></tr>
<tr><td>İyelik</td><td>Esin'<b>in</b> kitab<b>ı</b></td><td>le livre <b>d'</b>Esin (ters sıra)</td></tr>
<tr><td>Sıfatlar</td><td>beyaz ev</td><td>çoğu sıfat isimden <i>sonra</i> gelir (une maison blanche), birkaç kısa sıfat önce (une belle maison)</td></tr>
<tr><td>Zamirler</td><td>(Ben) geliyorum: zamir isteğe bağlı</td><td><b>Je</b> viens: zamir <b>her zaman</b> gerekli</td></tr>
<tr><td>Sen / Siz</td><td>sen / siz</td><td><b>tu / vous</b> — tamamen aynı mantık! Yabancılarla ve işte <i>vous</i> kullan</td></tr>
<tr><td>Var / Yok</td><td>Süt var / yok</td><td><b>Il y a</b> du lait / <b>Il n'y a pas</b> de lait</td></tr>
<tr><td>Soru</td><td>Geliyor <b>musun</b>?</td><td><b>Est-ce que</b> tu viens ? / Tu viens ? (yükselen ses)</td></tr>
<tr><td>Olumsuzluk</td><td>gel<b>me</b>iyorum</td><td>je <b>ne</b> viens <b>pas</b> (fiili sarar; konuşmada <i>ne</i> düşer)</td></tr>
<tr><td>Kişi ekleri</td><td>gel-iyor-<b>um</b>, -sun, -uz…</td><td>Fransızcada da fiil kişiye göre değişir: je parl<b>e</b>, nous parl<b>ons</b>, vous parl<b>ez</b>. Zaten böyle düşünüyorsun!</td></tr>
</table>
<p><b>Zamanlar, kabaca:</b></p>
<table class="tbl">
<tr><th>Fransızca</th><th>≈ Türkçe</th><th>Örnek</th></tr>
<tr><td>présent</td><td>-iyor / -r</td><td>je travaille = çalışıyorum / çalışırım</td></tr>
<tr><td>passé composé</td><td>-dı</td><td>j'ai travaillé = çalıştım</td></tr>
<tr><td>imparfait</td><td>-iyordu / -rdı</td><td>je travaillais = çalışıyordum / çalışırdım</td></tr>
<tr><td>futur proche</td><td>-ecek (yakın)</td><td>je vais travailler = çalışacağım</td></tr>
<tr><td>futur simple</td><td>-ecek</td><td>je travaillerai = çalışacağım</td></tr>
<tr><td>conditionnel</td><td>-erdi / -se…-r</td><td>je travaillerais = çalışırdım</td></tr>
<tr><td>subjonctif</td><td>-meli / -mesi (gerek)</td><td>il faut que je travaille = çalışmam gerek</td></tr>
</table>
<p>Not: Fransızcada doğrudan <b>-miş</b> yok. Duyulan bir şeyi aktarmak için <i>apparemment</i>, <i>il paraît que…</i> veya conditionnel kullan (« il serait malade » = hastaymış).</p>`
    },
    {
      id: "email", icon: "✉️",
      t: { en: "Polite emails & letters (templates)", tr: "Kibar e-postalar ve mektuplar (şablonlar)", fr: "E-mails et lettres polis (modèles)" },
      en: `
<p>French formal writing has fixed formulas. Copy them, change the middle.</p>
<p><b>Opening</b></p>
<ul><li><i>Madame, Monsieur,</i> (unknown person)</li><li><i>Bonjour Madame Martin,</i> (email, known name)</li></ul>
<p><b>Useful sentences</b></p>
<ul>
<li><i>Je me permets de vous contacter au sujet de…</i> — I'm writing regarding…</li>
<li><i>Je souhaiterais obtenir des informations sur…</i> — I would like information about…</li>
<li><i>Pourriez-vous m'indiquer les documents nécessaires ?</i> — Could you tell me which documents are needed?</li>
<li><i>Vous trouverez ci-joint…</i> — Please find attached…</li>
<li><i>Je reste à votre disposition pour tout renseignement complémentaire.</i> — I remain available for any further information.</li>
</ul>
<p><b>Closing</b></p>
<ul>
<li>Email: <i>Bien cordialement,</i> / <i>Cordialement,</i></li>
<li>Letter: <i>Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.</i></li>
</ul>
<p class="ex"><b>Example</b> — Bonjour Madame, Je me permets de vous contacter au sujet de l'inscription en licence STAPS pour la rentrée prochaine. Je suis diplômée en kinésithérapie à l'étranger. Pourriez-vous m'indiquer la procédure et les documents nécessaires ? Je vous remercie par avance. Bien cordialement, Esin</p>
<p><b>Essay structure (DELF B2 / university):</b> introduction (theme + question + plan) → part 1 (argument + example) → part 2 (counter-argument or second argument + example) → conclusion (answer + opening). Use the connectors deck.</p>`,
      tr: `
<p>Fransızca resmî yazışmanın kalıp ifadeleri var. Onları kopyala, ortasını değiştir.</p>
<p><b>Giriş</b></p>
<ul><li><i>Madame, Monsieur,</i> (tanımadığın kişi)</li><li><i>Bonjour Madame Martin,</i> (e-posta, ismi biliniyorsa)</li></ul>
<p><b>Faydalı cümleler</b></p>
<ul>
<li><i>Je me permets de vous contacter au sujet de…</i> — … hakkında size yazıyorum</li>
<li><i>Je souhaiterais obtenir des informations sur…</i> — … hakkında bilgi almak isterim</li>
<li><i>Pourriez-vous m'indiquer les documents nécessaires ?</i> — Gerekli belgeleri belirtebilir misiniz?</li>
<li><i>Vous trouverez ci-joint…</i> — Ekte … bulabilirsiniz</li>
<li><i>Je reste à votre disposition pour tout renseignement complémentaire.</i> — Her türlü ek bilgi için hazırım.</li>
</ul>
<p><b>Kapanış</b></p>
<ul>
<li>E-posta: <i>Bien cordialement,</i> / <i>Cordialement,</i> (Saygılarımla)</li>
<li>Mektup: <i>Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.</i></li>
</ul>
<p class="ex"><b>Örnek</b> — Bonjour Madame, Je me permets de vous contacter au sujet de l'inscription en licence STAPS pour la rentrée prochaine. Je suis diplômée en kinésithérapie à l'étranger. Pourriez-vous m'indiquer la procédure et les documents nécessaires ? Je vous remercie par avance. Bien cordialement, Esin</p>
<p><b>Kompozisyon yapısı (DELF B2 / üniversite):</b> giriş (konu + soru + plan) → 1. bölüm (argüman + örnek) → 2. bölüm (karşı argüman veya ikinci argüman + örnek) → sonuç (cevap + açılım). Bağlaçlar destesini kullan.</p>`
    },
    {
      id: "studies", icon: "🎓",
      t: { en: "French for your studies and profession", tr: "Eğitimin ve mesleğin için Fransızca", fr: "Le français pour tes études et ton métier" },
      en: `
<p>A realistic language roadmap for a physiotherapist who wants to study in France (always check the official sites, rules change):</p>
<ul>
<li><b>B1–B2</b>: most universities ask for B2 (DELF B2 or TCF) for a licence such as <b>STAPS</b>. Admission to first year goes through Parcoursup (or the DAP procedure for some foreign applicants — see Campus France).</li>
<li><b>C1</b>: very useful for clinical work and for school/exam situations in health. Some programmes ask for C1.</li>
<li><b>Diploma recognition</b>: ENIC-NARIC issues an "attestation de comparabilité" (not an equivalence). For physiotherapy, practising with a non-EU diploma follows a specific authorisation procedure; the Ordre des masseurs-kinésithérapeutes explains it.</li>
<li><b>Free French classes</b>: newcomers who sign the Contrat d'intégration républicaine with OFII may receive free French training. Public libraries and associations also run free workshops.</li>
</ul>
<p><b>Your advantage:</b> sports physiotherapy at Champions League level is real expertise. In French the vocabulary is close to Latin/English medical terms you already know (flexion, ligament, tendinopathie). Use the Physio deck daily and you'll feel at home quickly.</p>`,
      tr: `
<p>Fransa'da okumak isteyen bir fizyoterapist için gerçekçi bir dil yol haritası (her zaman resmî siteleri kontrol et, kurallar değişir):</p>
<ul>
<li><b>B1–B2</b>: çoğu üniversite <b>STAPS</b> gibi bir lisans için B2 (DELF B2 veya TCF) ister. Birinci sınıfa kabul Parcoursup üzerinden yapılır (bazı yabancı adaylar için DAP prosedürü — Campus France'a bak).</li>
<li><b>C1</b>: klinik çalışma ve sağlık alanındaki okul/sınav durumları için çok faydalı. Bazı programlar C1 ister.</li>
<li><b>Diploma tanınması</b>: ENIC-NARIC bir "attestation de comparabilité" verir (denklik değildir). Fizyoterapide AB dışı diploma ile çalışmak özel bir izin prosedürüne bağlıdır; Ordre des masseurs-kinésithérapeutes bunu açıklıyor.</li>
<li><b>Ücretsiz Fransızca kursları</b>: OFII ile Contrat d'intégration républicaine imzalayan yeni gelenler ücretsiz Fransızca eğitimi alabilir. Halk kütüphaneleri ve dernekler de ücretsiz atölyeler düzenler.</li>
</ul>
<p><b>Avantajın:</b> Şampiyonlar Ligi seviyesinde spor fizyoterapisi gerçek bir uzmanlık. Fransızcadaki kelimeler zaten bildiğin Latince/İngilizce tıp terimlerine yakın (flexion, ligament, tendinopathie). Fizyoterapi destesini her gün kullan, kısa sürede kendini evinde hissedeceksin.</p>`
    }
  ];
})();
