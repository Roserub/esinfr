/* Decks from "French from zero — the master list": new decks + cards added to existing ones.
   Same line format as decks.js: "français|Türkçe|English|optional note". Existing card ids never change. */
(function () {
  const parse = (id, lines) => lines.trim().split("\n").map(l => {
    const [f, t, e, n] = l.split("|").map(s => (s || "").trim());
    return { id: id + ":" + f, fr: f, tr: t, en: e, note: n || "" };
  });
  const D = (id, level, en, tr, fr, lines) => ({ id, level, name: { en, tr, fr }, cards: parse(id, lines) });
  const add = (id, lines) => {
    const d = window.DECKS.find(x => x.id === id); if (!d) return;
    const have = new Set(d.cards.map(c => c.fr.toLowerCase()));
    parse(id, lines).forEach(c => { if (!have.has(c.fr.toLowerCase())) d.cards.push(c); });
  };

  /* §11 — the 40 survival phrases: add the ones the deck didn't have yet. */
  add("survival", `
À bientôt !|Görüşürüz|See you soon
Bonne soirée !|İyi akşamlar (vedalaşırken)|Have a nice evening
Désolé(e)|Özür dilerim|Sorry|(e) = add -e when the speaker is a woman: désolée.
Je viens de Turquie|Türkiye'den geliyorum|I come from Turkey
Ça va bien, merci. Et vous ?|İyiyim, teşekkürler. Ya siz?|Fine, thanks. And you?|Et vous ? = polite / plural. Et toi ? = a friend.
J'apprends le français|Fransızca öğreniyorum|I'm learning French
Je ne parle pas bien français|Fransızcam iyi değil|I don't speak French well
Vous pouvez l'écrire ?|Yazabilir misiniz?|Can you write it down?
C'est combien ?|Bu ne kadar?|How much is it?
Je peux payer par carte ?|Kartla ödeyebilir miyim?|Can I pay by card?
Un billet pour Lyon, s'il vous plaît|Lyon için bir bilet, lütfen|A ticket to Lyon, please
J'ai un rendez-vous|Randevum var|I have an appointment
Je suis malade|Hastayım|I'm ill
J'ai mal ici|Burası ağrıyor|It hurts here
Appelez un médecin !|Doktor çağırın!|Call a doctor!
Appelez une ambulance !|Ambulans çağırın!|Call an ambulance!|Emergency numbers: 112 (EU) · 15 (SAMU) · 17 (police) · 18 (fire) · 114 (by text).
Au secours !|İmdat!|Help!
Je suis perdu(e)|Kayboldum|I'm lost|Woman: je suis perdue (same sound).
Bon appétit !|Afiyet olsun!|Enjoy your meal!
Santé !|Şerefe!|Cheers!
`);

  /* §31 — physiotherapy mini-glossary. */
  add("physio", `
la raideur|sertlik, tutukluk|stiffness
la nuque|ense, boyun arkası|nape of the neck
l'articulation|eklem|joint
l'épaule / la hanche|omuz / kalça|shoulder / hip
le genou / la cheville|diz / ayak bileği|knee / ankle
l'ordonnance|reçete|prescription
Où avez-vous mal ?|Neresi ağrıyor?|Where does it hurt?
Respirez profondément|Derin nefes alın|Breathe deeply
Dites-moi si ça fait mal|Acırsa söyleyin|Tell me if it hurts
De 0 à 10, vous avez mal à combien ?|0'dan 10'a ağrınız kaç?|From 0 to 10, how bad is the pain?
l'IFMK (institut de formation en masso-kinésithérapie)|fizyoterapi okulu|physiotherapy school|Entry is selective; ask about equivalence routes for foreign diplomas.
le DE (diplôme d'État)|devlet diploması|state diploma|The diploma needed to practise as a kiné in France.
l'Ordre des masseurs-kinésithérapeutes|Fizyoterapistler Odası|the physiotherapists' professional body
le cabinet (de kiné)|muayenehane, klinik|practice (private clinic)
la feuille de soins|tedavi formu (sigorta için)|treatment form (for health insurance)
`);

  add("academic", `
la prise de notes|not alma|note-taking
la dissertation|kompozisyon, deneme (sınav)|essay (argumentative)
la synthèse|sentez, özet|synthesis / summary
l'emploi du temps|ders programı|timetable
le semestre|dönem, yarıyıl|semester
l'amphithéâtre (l'amphi)|amfi|lecture hall
l'inscription|kayıt|enrolment
le contrôle continu|sürekli değerlendirme|continuous assessment
le rattrapage|bütünleme|resit exam
les crédits ECTS|AKTS kredileri|ECTS credits
la BU (bibliothèque universitaire)|üniversite kütüphanesi|university library
la bourse|burs|grant, scholarship
`);

  window.DECKS.push(
    D("falsefriends", "A2", "False friends (Turkish & English)", "Yanlış dostlar (Türkçe ve İngilizce)", "Les faux amis (turc et anglais)", `
le garçon|oğlan, erkek çocuk|boy|garson = waiter → le serveur / la serveuse
l'appartement|daire|flat, apartment|apartman = the building → l'immeuble
le collège|ortaokul (devlet)|state middle school (11–15)|kolej (özel okul) ≠ collège
le chemisier|bluz|blouse|la blouse = mostly a work smock / lab coat
le foulard|eşarp, başörtüsü|headscarf|l'écharpe = winter neck scarf
le déplacement|yolculuk, seyahat|trip, travel|deplasman maçı = un match à l'extérieur
la maîtresse|ilkokul öğretmeni (kadın)|primary-school teacher|Also "mistress", but first of all the teacher!
le maillot de bain|mayo|swimsuit|le maillot alone = sports jersey
le quai|peron|platform|le perron = front steps of a building
le survêtement|eşofman|tracksuit|l'échauffement = warm-up
la fermeture éclair|fermuar|zip|le fermoir = clasp of a bag or necklace
la baignoire|küvet|bathtub|la cuvette = basin, toilet bowl
la robe de soirée|abiye|evening dress|habillé(e) = dressed up
le bulletin (scolaire)|karne|school report|le carnet = notebook, booklet of tickets
la bougie|mum (ve buji)|candle (also spark plug)|
la jalousie|kıskançlık (ve jaluzi)|jealousy (also Venetian blind)|
le soutien-gorge|sütyen|bra|le soutien = support
les toilettes|tuvalet|toilet (WC)|la toilette (singular) = washing, outfit
le gâteau|pasta|cake|les pâtes = pasta (noodles)
le gilet|hırka, yelek|cardigan, waistcoat|jilet = razor blade → la lame de rasoir
la gare routière|otogar|bus station|"otogar" doesn't exist in French
le volet|panjur|shutter|"panjur" doesn't exist in French
actuel(le)|güncel, aktüel|current|English "actual" = réel
l'agenda|ajanda|diary, planner|English "agenda" = l'ordre du jour
sympathique (sympa)|sempatik|nice, likeable|English "sympathetic" ≠ sympa
actuellement|şu anda|currently|actually = en fait
éventuellement|muhtemelen, belki|possibly|eventually = finalement
la librairie|kitapçı|bookshop|library = la bibliothèque
assister à|katılmak (bir etkinliğe)|to attend|to assist = aider
attendre|beklemek|to wait|to attend = assister à
rester|kalmak|to stay|to rest = se reposer
sensible|hassas, duyarlı|sensitive|sensible = raisonnable
la location|kiralama|rental|location = l'endroit, le lieu
la journée|gün (boyu)|day|journey = le voyage, le trajet
le coin|köşe|corner|coin = la pièce (de monnaie)
la monnaie|bozuk para, para birimi|change, currency|money = l'argent
car|çünkü|because|a car = une voiture
blesser|yaralamak|to injure|to bless = bénir
le préservatif|prezervatif|condom|preservative = le conservateur
le raisin|üzüm|grape|raisin = le raisin sec
le pain|ekmek|bread|pain = la douleur
la chair|et (ten)|flesh|chair = la chaise
sale|kirli|dirty|sale = les soldes
le stage|staj, kurs|internship, short course|stage (theatre) = la scène
l'habit|giysi|garment|habit = l'habitude
l'entrée|başlangıç yemeği|starter (menu)|US "entree" = le plat principal
la déception|hayal kırıklığı|disappointment|deception = la tromperie
demander|sormak, istemek|to ask|to demand = exiger
la lecture|okuma|reading|a lecture = un cours magistral, une conférence
J'ai hâte !|Sabırsızlanıyorum!|I'm excited! / I can't wait!|Avoid "je suis excitée" — it can sound sexual.
`),

    D("lifefr", "A2", "Life in France: housing, admin, bank", "Fransa'da yaşam: ev, evrak, banka", "La vie en France : logement, papiers, banque", `
le loyer|kira|rent
les charges|aidat, ortak giderler|service charges
le bail|kira sözleşmesi|lease
la caution / le dépôt de garantie|depozito|deposit
l'état des lieux|giriş/çıkış tespit tutanağı|move-in / move-out inspection
la quittance de loyer|kira makbuzu|rent receipt
l'assurance habitation|konut sigortası|home insurance
le justificatif de domicile|ikametgâh belgesi|proof of address
le propriétaire|ev sahibi|landlord
le locataire|kiracı|tenant
la mairie|belediye|town hall
la préfecture|valilik (oturma izni işleri)|prefecture
le rendez-vous|randevu|appointment
le formulaire|form|form
la pièce d'identité|kimlik belgesi|ID document
l'attestation|belge|certificate
le dossier|dosya, başvuru|file, application
la carte Vitale|sağlık sigortası kartı|health-insurance card
le médecin traitant|aile hekimi (kayıtlı)|registered GP
l'ordonnance|reçete|prescription
la mutuelle|tamamlayıcı sağlık sigortası|top-up health insurance
la pharmacie|eczane|pharmacy
les urgences|acil servis|A&E / ER
le RIB|IBAN belgesi|bank-details slip (IBAN)
le virement|havale|transfer
le prélèvement|otomatik ödeme|direct debit
la facture|fatura|bill
le relevé (de compte)|hesap özeti|bank statement
l'abonnement|abonelik, aylık kart|pass, subscription
le quai|peron|platform
la correspondance|aktarma|connection (train, metro)
la caisse|kasa|checkout
le ticket de caisse|fiş|receipt
les soldes|indirim dönemi|the sales
la déchetterie|atık toplama merkezi|recycling centre
Je voudrais ouvrir un compte|Hesap açmak istiyorum|I'd like to open an account
Il me manque un document ?|Bir belgem eksik mi?|Am I missing a document?
`),

    D("work", "B1", "Work & job hunting", "İş ve iş arama", "Le travail et la recherche d'emploi", `
le CV|özgeçmiş|CV, résumé
la lettre de motivation|ön yazı|cover letter
l'entretien d'embauche|iş görüşmesi|job interview
le CDI|süresiz iş sözleşmesi|permanent contract
le CDD|belirli süreli sözleşme|fixed-term contract
la période d'essai|deneme süresi|trial period
la fiche de paie|maaş bordrosu|payslip
les congés payés|ücretli izin|paid leave
le / la responsable|yönetici, sorumlu|manager
le salaire brut / net|brüt / net maaş|gross / net salary
l'offre d'emploi|iş ilanı|job offer
postuler|başvurmak|to apply
le poste|pozisyon|position, job
l'expérience professionnelle|iş deneyimi|work experience
les compétences|yetkinlikler|skills
le temps plein / le temps partiel|tam zamanlı / yarı zamanlı|full-time / part-time
France Travail|İş ve İşçi Bulma Kurumu (Fransa)|French public employment service|Formerly Pôle emploi.
le CPF (compte personnel de formation)|kişisel eğitim hesabı|personal training account
la formation|eğitim, kurs|training
le stage|staj|internship
Je suis disponible à partir de lundi|Pazartesiden itibaren müsaitim|I'm available from Monday
J'ai travaillé comme kinésithérapeute du sport|Spor fizyoterapisti olarak çalıştım|I worked as a sports physiotherapist
Mon diplôme n'est pas encore reconnu en France|Diplomam Fransa'da henüz tanınmıyor|My degree isn't recognised in France yet
Quelles sont les prochaines étapes ?|Sonraki adımlar neler?|What are the next steps?
`)
  );
})();
