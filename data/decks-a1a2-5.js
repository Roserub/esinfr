/* A2 decks (v8): rehab exercises, muscles & joints, flat repairs & renting,
   formal emails, news & media, university life. */
(function () {
  const D = (id, level, en, tr, fr, lines) => ({
    id, level, name: { en, tr, fr },
    cards: lines.trim().split("\n").map(l => {
      const [f, t, e, n] = l.split("|").map(s => (s || "").trim());
      return { id: id + ":" + f, fr: f, tr: t, en: e, note: n || "" };
    })
  });

  window.DECKS.push(
    D("a2-rehab-exercises", "A2", "Rehab & physio exercises", "Rehabilitasyon ve fizyoterapi egzersizleri", "Les exercices de rééducation", `
la rééducation|rehabilitasyon|rehabilitation|Short: « la rééduc ».
l'exercice (m.)|egzersiz|the exercise|Masculine, even if it ends in -e.
la séance|seans|the session
le programme d'exercices|egzersiz programı|the exercise programme
l'étirement (m.)|esneme|the stretch|s'étirer = to stretch
le renforcement musculaire|kas güçlendirme|muscle strengthening
l'élastique (m.)|direnç bandı|the resistance band|Also called « la bande élastique ».
le tapis|mat|the mat
le ballon de gym|pilates topu|the gym ball
la répétition|tekrar|the repetition|Coaches say « dix répétitions » or just « dix ».
la série|set|the set|trois séries de dix = 3 x 10
la pause|mola|the break
l'équilibre (m.)|denge|balance|travailler l'équilibre = to work on balance
la proprioception|propriosepsiyon|proprioception|Same word in Turkish and English: easy!
la mobilité|hareketlilik|mobility
l'amplitude (f.)|hareket açıklığı|range of motion
plier|bükmek|to bend|plier le genou = bend the knee
tendre|uzatmak, düzleştirmek|to straighten|tendre la jambe = straighten the leg
lever|kaldırmak|to lift, raise|Je lève, nous levons.
baisser|indirmek|to lower
tenir|tutmak|to hold|Tenez cinq secondes ! = Hold for five seconds!
relâcher|gevşetmek|to release, relax
respirer|nefes almak|to breathe
souffler|nefes vermek, üflemek|to breathe out, blow
progresser|ilerlemek|to make progress
la douleur supportable|katlanılabilir ağrı|bearable pain
Allongez-vous sur le dos.|Sırt üstü uzanın.|Lie on your back.
Mettez-vous sur le ventre.|Yüzüstü yatın.|Lie on your stomach.
Gardez le dos droit.|Sırtınızı dik tutun.|Keep your back straight.
Refaites l'exercice deux fois par jour.|Egzersizi günde iki kez tekrarlayın.|Repeat the exercise twice a day.
Si ça fait mal, vous arrêtez.|Acırsa durun.|If it hurts, you stop.
Vous avez bien travaillé aujourd'hui.|Bugün çok iyi çalıştınız.|You worked well today.
On augmente un peu la difficulté.|Zorluğu biraz artırıyoruz.|We're making it a bit harder.
Je vous donne des exercices à faire à la maison.|Size evde yapmanız için egzersizler veriyorum.|I'm giving you exercises to do at home.`),

    D("a2-muscles-joints", "A2", "Muscles, bones & joints", "Kaslar, kemikler ve eklemler", "Les muscles, les os et les articulations", `
le muscle|kas|the muscle
l'os (m.)|kemik|the bone|Plural: les os (the s is silent).
l'articulation (f.)|eklem|the joint
le tendon|tendon|the tendon
le ligament|bağ|the ligament
le cartilage|kıkırdak|the cartilage
la colonne vertébrale|omurga|the spine
la vertèbre|omur|the vertebra
le bassin|leğen kemiği, pelvis|the pelvis|Also: the pool (swimming pool basin).
la hanche|kalça (eklemi)|the hip|Turkish « kalça » is also the buttocks: in French, les fesses.
la cuisse|uyluk|the thigh
le genou|diz|the knee|Plural: les genoux (with x).
la rotule|diz kapağı|the kneecap
le mollet|baldır|the calf
la cheville|ayak bileği|the ankle
le talon|topuk|the heel
l'épaule (f.)|omuz|the shoulder
le coude|dirsek|the elbow
le poignet|el bileği|the wrist
la nuque|ense|the back of the neck
les abdominaux (m.)|karın kasları|the abs|Short: « les abdos ».
les fessiers (m.)|kalça kasları|the glutes
les ischio-jambiers (m.)|arka uyluk kasları|the hamstrings|Gym slang: « les ischios ».
les quadriceps (m.)|ön uyluk kasları|the quadriceps|Short: « les quadris ».
le dos|sırt|the back|le bas du dos = the lower back
la contracture|kas spazmı|the muscle knot, spasm
la tendinite|tendinit|tendinitis
l'entorse (f.)|burkulma|the sprain
la fracture|kırık|the fracture
avoir des courbatures|(spor sonrası) kas ağrısı olmak|to have aching muscles|Usually plural: « J'ai des courbatures ! »
J'ai mal au genou droit.|Sağ dizim ağrıyor.|My right knee hurts.|à + le = au: au genou, au dos.
Mon épaule est bloquée.|Omzum tutuldu.|My shoulder is stiff.
Le muscle est très tendu.|Kas çok gergin.|The muscle is very tight.
Je me suis tordu la cheville.|Ayak bileğimi burktum.|I twisted my ankle.`),

    D("a2-flat-repairs", "A2", "Renting a flat & repairs", "Ev kiralamak ve tamirat", "La location et les réparations", `
le propriétaire|ev sahibi|the landlord|f. la propriétaire
le locataire|kiracı|the tenant|f. la locataire
le bail|kira sözleşmesi|the lease|Plural: les baux.
le loyer|kira|the rent
les charges (f.)|aidat, ortak giderler|the service charges|« Loyer charges comprises » = rent including charges.
la caution|depozito|the deposit|Also « le dépôt de garantie ».
l'état des lieux (m.)|ev teslim tutanağı|the inventory check|Done when you move in and when you move out.
l'agence immobilière (f.)|emlak ajansı|the estate agency
le garant|kefil|the guarantor
la quittance de loyer|kira makbuzu|the rent receipt
la fuite d'eau|su sızıntısı|the water leak
le robinet|musluk|the tap
l'évier (m.)|eviye|the kitchen sink
le chauffe-eau|şofben, termosifon|the water heater
le chauffage|ısıtma, kalorifer|the heating
la prise électrique|priz|the power socket
l'ampoule (f.)|ampul|the light bulb
la serrure|kilit|the lock
la moisissure|küf|mould
le plombier|tesisatçı|the plumber
l'électricien (m.)|elektrikçi|the electrician
le serrurier|çilingir|the locksmith
réparer|tamir etmek|to repair
changer|değiştirmek|to change, replace
déménager|taşınmak|to move house
emménager|yeni eve taşınmak|to move in
être en panne|bozuk olmak|to be out of order
Le chauffe-eau ne marche plus.|Şofben artık çalışmıyor.|The water heater doesn't work any more.
Il y a une fuite sous l'évier.|Eviyenin altında sızıntı var.|There's a leak under the sink.
Qui paie la réparation ?|Tamiri kim ödüyor?|Who pays for the repair?|Small repairs: tenant. Big repairs: landlord.
Quand est-ce que le plombier peut passer ?|Tesisatçı ne zaman gelebilir?|When can the plumber come?
J'ai perdu mes clés, je suis bloquée dehors.|Anahtarlarımı kaybettim, dışarıda kaldım.|I've lost my keys, I'm locked out.|bloquée: -e if the speaker is a woman.
Le loyer est payé le 5 de chaque mois.|Kira her ayın 5'inde ödenir.|The rent is paid on the 5th of each month.`),

    D("a2-formal-emails", "A2", "Emails & formal phrases", "E-postalar ve resmî ifadeler", "Les e-mails et les formules polies", `
l'e-mail (m.)|e-posta|the email|Also: « le mail », « le courriel ».
l'objet (m.)|konu|the subject line
la pièce jointe|ek|the attachment|PJ = pièce jointe
le destinataire|alıcı|the recipient
l'expéditeur (m.)|gönderen|the sender
en copie|bilgi olarak, CC'de|in copy, cc'd
répondre|cevap vermek|to reply|répondre à quelqu'un
transférer|iletmek|to forward
envoyer|göndermek|to send
Madame, Monsieur,|Sayın yetkili,|Dear Sir or Madam,|When you don't know the name.
Bonjour Madame Martin,|Merhaba Martin Hanım,|Hello Ms Martin,|Neutral and very common in emails today.
Je me permets de vous écrire…|Müsaadenizle size yazıyorum…|I am writing to you…|Very polite opening.
Je vous écris au sujet de…|… hakkında size yazıyorum.|I'm writing to you about…
Suite à notre conversation…|Görüşmemizin ardından…|Following our conversation…
Je souhaiterais obtenir des informations sur…|… hakkında bilgi almak istiyorum.|I would like some information about…|souhaiterais = conditionnel, softer than « je veux ».
Pourriez-vous me dire…|Bana … söyleyebilir misiniz?|Could you tell me…
Vous trouverez ci-joint…|Ekte … bulabilirsiniz.|Please find attached…
Je vous remercie par avance.|Şimdiden teşekkür ederim.|Thank you in advance.
Je reste à votre disposition.|Her türlü sorunuz için ulaşabilirsiniz.|I remain at your disposal.
N'hésitez pas à me contacter.|Benimle iletişime geçmekten çekinmeyin.|Don't hesitate to contact me.
Dans l'attente de votre réponse,|Cevabınızı beklerken,|Looking forward to your reply,
Cordialement,|Saygılarımla,|Kind regards,|The standard ending. Short and safe.
Bien cordialement,|En içten saygılarımla,|Best regards,
Bonne journée,|İyi günler,|Have a nice day,|Friendly ending for colleagues.
Je vous prie d'agréer mes salutations distinguées.|Saygılarımı sunarım.|Yours faithfully.|Very formal: letters to the administration.
Désolée pour le retard de ma réponse.|Geç cevap verdiğim için özür dilerim.|Sorry for my late reply.|Désolé (m.) / Désolée (f.).
Je n'ai pas reçu votre e-mail.|E-postanızı almadım.|I didn't receive your email.
Pourriez-vous confirmer le rendez-vous ?|Randevuyu onaylayabilir misiniz?|Could you confirm the appointment?
Je vous confirme ma présence.|Katılacağımı teyit ederim.|I confirm that I will attend.
Je ne pourrai pas venir mardi.|Salı günü gelemeyeceğim.|I won't be able to come on Tuesday.
Merci pour votre réponse rapide.|Hızlı cevabınız için teşekkürler.|Thank you for your quick reply.
Bien reçu, merci !|Aldım, teşekkürler!|Received, thanks!|Short and friendly reply.
la boîte de réception|gelen kutusu|the inbox
les courriers indésirables (m.)|istenmeyen e-postalar|spam, junk mail|Check here if an email never arrives!`),

    D("a2-news-media", "A2", "The news & media", "Haberler ve medya", "Les informations et les médias", `
les informations (f.)|haberler|the news|Short: « les infos ». Always plural in this sense.
le journal|gazete; haber bülteni|the newspaper; the news programme|le journal de 20 h = the 8 pm news
le journal télévisé|televizyon haberleri|the TV news|Short: « le JT ».
l'article (m.)|makale, haber yazısı|the article
le titre|başlık|the headline
la une|ön sayfa, manşet|the front page|« à la une » = on the front page
le journaliste|gazeteci|the journalist|f. la journaliste
la radio|radyo|the radio
la chaîne|kanal|the TV channel
l'émission (f.)|program|the programme, show
le reportage|özel haber, haber programı|the report, documentary piece
l'interview (f.)|röportaj, mülakat|the interview
le podcast|podcast|the podcast
la météo|hava durumu|the weather forecast
la presse|basın|the press
le magazine|dergi|the magazine
l'abonnement (m.)|abonelik|the subscription
les réseaux sociaux (m.)|sosyal medya|social media
la publicité|reklam|advertising, the advert|Short: « la pub ».
l'événement (m.)|olay|the event
l'accident (m.)|kaza|the accident
la grève|grev|the strike|Very common in French news!
les élections (f.)|seçimler|the elections
le gouvernement|hükümet|the government
une fausse information|yalan haber, sahte haber|fake news|Also used in French: « une fake news ».
en direct|canlı|live|en direct de Paris = live from Paris
se passer|olmak, yaşanmak|to happen|Qu'est-ce qui se passe ?
Tu as vu les infos ce matin ?|Bu sabah haberleri gördün mü?|Did you see the news this morning?
J'ai lu un article intéressant.|İlginç bir makale okudum.|I read an interesting article.
D'après la radio, il y a une grève demain.|Radyoya göre yarın grev var.|According to the radio, there's a strike tomorrow.
Je n'écoute pas les infos, ça me stresse.|Haberleri dinlemiyorum, beni strese sokuyor.|I don't listen to the news, it stresses me out.
Il faut vérifier la source.|Kaynağı kontrol etmek lazım.|You need to check the source.
C'est passé à la télé hier soir.|Dün akşam televizyonda çıktı.|It was on TV last night.`),

    D("a2-uni-life", "A2", "University life", "Üniversite hayatı", "La vie à l'université", `
l'université (f.)|üniversite|the university|Students say « la fac ».
l'étudiant (m.)|öğrenci|the student|f. l'étudiante
la licence|lisans|the bachelor's degree|3 years in France (L1, L2, L3).
le master|yüksek lisans|the master's degree
la première année|birinci sınıf|first year|Students say « en L1 ».
l'inscription (f.)|kayıt|enrolment, registration
le dossier de candidature|başvuru dosyası|the application file
le cours magistral|amfi dersi|the lecture|Short: « le CM ».
les travaux dirigés (m.)|uygulama dersi|tutorials, seminars|Short: « les TD ».
l'amphithéâtre (m.)|amfi|the lecture hall|Short: « l'amphi ».
le professeur|hoca, profesör|the lecturer, professor|Short: « le prof ».
l'emploi du temps (m.)|ders programı|the timetable
le semestre|dönem|the semester
l'examen (m.)|sınav|the exam|Short: « l'exam ».
le partiel|dönem sınavı|the end-of-semester exam|« J'ai mes partiels en janvier. »
le contrôle continu|ara sınavlar, sürekli değerlendirme|continuous assessment
la note|not|the mark, grade|In France: out of 20. 10/20 = pass.
la moyenne|ortalama|the average|avoir la moyenne = to pass
réussir un examen|sınavı geçmek|to pass an exam|Not « passer un examen » (= to take an exam)!
rater un examen|sınavda kalmak|to fail an exam|Informal; also « échouer à ».
réviser|ders çalışmak, tekrar etmek|to revise, study for an exam
prendre des notes|not almak|to take notes
le mémoire|tez|the dissertation|Masculine! « la mémoire » = memory.
le stage|staj|the internship
la bibliothèque universitaire|üniversite kütüphanesi|the university library|Short: « la BU ».
le resto U|üniversite yemekhanesi|the student canteen|Official name: le restaurant universitaire.
la carte d'étudiant|öğrenci kartı|the student card
la bourse|burs|the grant, scholarship
la résidence universitaire|öğrenci yurdu|the student residence
Je suis en première année de STAPS.|STAPS birinci sınıftayım.|I'm in my first year of sports science.
On se retrouve à la BU après le cours ?|Dersten sonra kütüphanede buluşalım mı?|Shall we meet at the library after class?
Tu peux me passer tes notes ?|Notlarını bana verebilir misin?|Can you lend me your notes?
J'ai eu 14 sur 20 au partiel !|Dönem sınavından 20 üzerinden 14 aldım!|I got 14 out of 20 in the exam!
Le cours est annulé cet après-midi.|Bu öğleden sonraki ders iptal.|This afternoon's class is cancelled.`)
  );
})();
