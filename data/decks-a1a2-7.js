/* A2 decks (v9): the physio assessment interview, body movements (anatomy),
   online banking & security, cooking methods & recipes, volunteering & associations,
   character & personality. */
(function () {
  const D = (id, level, en, tr, fr, lines) => ({
    id, level, name: { en, tr, fr },
    cards: lines.trim().split("\n").map(l => {
      const [f, t, e, n] = l.split("|").map(s => (s || "").trim());
      return { id: id + ":" + f, fr: f, tr: t, en: e, note: n || "" };
    })
  });

  window.DECKS.push(
    D("a2-bilan-kine", "A2", "The physio assessment: questions for the patient", "Fizyoterapi değerlendirmesi: hastaya sorular", "Le bilan kiné : les questions au patient", `
le bilan|değerlendirme|the assessment|Le premier rendez-vous chez le kiné = le bilan.
les antécédents (m.)|tıbbi geçmiş|medical history|Always plural here.
le traitement en cours|devam eden tedavi|current treatment
l'allergie (f.)|alerji|the allergy
l'opération (f.)|ameliyat|the operation, surgery|Also: « l'intervention chirurgicale ».
la radio|röntgen|the X-ray|Short for « la radiographie ».
l'IRM (f.)|MR, MRG|the MRI|Say: « i-èr-èm ».
le compte rendu|rapor|the (medical) report
la gêne|rahatsızlık|discomfort|Less strong than « la douleur ».
la raideur|sertlik, tutukluk|stiffness
les fourmillements (m.)|karıncalanma|pins and needles, tingling
la douleur nocturne|gece ağrısı|night pain
Quel est votre métier ?|Mesleğiniz nedir?|What's your job?|Work posture matters in a bilan!
Vous avez déjà été opéré(e) ?|Daha önce ameliyat oldunuz mu?|Have you ever had surgery?
Vous prenez des médicaments ?|İlaç kullanıyor musunuz?|Are you taking any medication?
Vous avez des allergies ?|Alerjiniz var mı?|Do you have any allergies?
Vous avez fait une radio ?|Röntgen çektirdiniz mi?|Have you had an X-ray?
Vous avez apporté l'ordonnance ?|Reçeteyi getirdiniz mi?|Did you bring the prescription?
Comment ça a commencé ?|Nasıl başladı?|How did it start?
C'est arrivé brusquement ou petit à petit ?|Birden mi oldu, yavaş yavaş mı?|Did it happen suddenly or gradually?
La douleur reste là ou elle descend dans la jambe ?|Ağrı orada mı kalıyor, yoksa bacağa mı iniyor?|Does the pain stay there or go down the leg?
C'est pire le matin ou le soir ?|Sabah mı daha kötü, akşam mı?|Is it worse in the morning or in the evening?
La douleur vous réveille la nuit ?|Ağrı sizi geceleri uyandırıyor mu?|Does the pain wake you up at night?
Qu'est-ce qui vous soulage ?|Sizi ne rahatlatıyor?|What relieves it?|soulager = to relieve
Quels mouvements sont difficiles ?|Hangi hareketler zor?|Which movements are difficult?
Vous faites du sport ?|Spor yapıyor musunuz?|Do you do any sport?
Combien de fois par semaine ?|Haftada kaç kez?|How many times a week?
Vous dormez bien ?|İyi uyuyor musunuz?|Do you sleep well?
Vous avez déjà eu ce problème ?|Bu sorunu daha önce yaşadınız mı?|Have you had this problem before?
Quel est votre objectif ?|Hedefiniz nedir?|What is your goal?|Great final question: the patient feels heard.
Je vais vous examiner maintenant.|Şimdi sizi muayene edeceğim.|I'm going to examine you now.
Vous pouvez enlever votre pull, s'il vous plaît ?|Kazağınızı çıkarabilir misiniz lütfen?|Could you take off your jumper, please?
Prenez votre temps pour répondre.|Cevap vermek için acele etmeyin.|Take your time to answer.`),

    D("a2-movements", "A2", "Body movements (anatomy)", "Vücut hareketleri (anatomi)", "Les mouvements du corps (anatomie)", `
le mouvement|hareket|the movement
la flexion|fleksiyon, bükme|flexion|Same Latin word in Turkish physio class!
l'extension (f.)|ekstansiyon, açma|extension
l'abduction (f.)|abdüksiyon|abduction|Away from the body.
l'adduction (f.)|addüksiyon|adduction|Towards the body.
la rotation interne|iç rotasyon|internal rotation
la rotation externe|dış rotasyon|external rotation
la pronation|pronasyon|pronation|Palm down.
la supination|supinasyon|supination|Palm up, like carrying soup.
l'inclinaison latérale (f.)|lateral fleksiyon, yana eğilme|side bending
la circumduction|sirkümdüksiyon|circumduction
l'amplitude articulaire (f.)|eklem hareket açıklığı|range of motion
le côté droit|sağ taraf|the right side
le côté gauche|sol taraf|the left side
en avant|öne doğru|forwards
en arrière|geriye doğru|backwards
vers le haut|yukarı doğru|upwards
vers le bas|aşağı doğru|downwards
fléchir|bükmek|to flex, bend|Formal; everyday: « plier ».
étendre|açmak, uzatmak|to extend|j'étends, nous étendons
écarter|uzaklaştırmak, açmak|to move apart|Écartez les bras = abduction.
rapprocher|yaklaştırmak|to bring closer
tourner|döndürmek|to turn, rotate
pencher|eğmek|to lean, tilt
s'accroupir|çömelmek|to squat down|je m'accroupis
se pencher en avant|öne eğilmek|to bend forward
fléchir le coude|dirseği bükmek|to bend the elbow
écarter les jambes|bacakları açmak|to move the legs apart
tourner la paume vers le haut|avuç içini yukarı çevirmek|to turn the palm upwards
Penchez la tête sur le côté.|Başınızı yana eğin.|Tilt your head to the side.
Ramenez le genou vers la poitrine.|Dizinizi göğsünüze doğru çekin.|Bring your knee to your chest.
Tournez le pied vers l'intérieur.|Ayağınızı içe doğru çevirin.|Turn your foot inwards.
La flexion du genou est limitée à 90 degrés.|Diz fleksiyonu 90 dereceyle sınırlı.|Knee flexion is limited to 90 degrees.
Le mouvement est complet et sans douleur.|Hareket tam ve ağrısız.|The movement is full and pain-free.`),

    D("a2-online-banking", "A2", "Online banking & security", "İnternet bankacılığı ve güvenlik", "La banque en ligne et la sécurité", `
la banque en ligne|internet bankacılığı|online bank(ing)
l'appli bancaire (f.)|banka uygulaması|the banking app
l'espace client (m.)|müşteri alanı, hesabım|the customer area|Where you log in on the website.
l'identifiant (m.)|kullanıcı adı|the username, login ID
le mot de passe|şifre|the password
le code de validation|doğrulama kodu|the verification code|Often received by SMS.
le solde|bakiye|the balance|Not « les soldes » (the sales)!
le découvert|eksi bakiye, ek hesap|the overdraft|Être à découvert = to be in the red.
le plafond|limit|the (spending) limit|Literally: the ceiling.
le paiement sans contact|temassız ödeme|contactless payment
le virement instantané|anlık havale|instant transfer
le bénéficiaire|alıcı|the payee, beneficiary|Add a payee before a transfer.
l'IBAN (m.)|IBAN|the IBAN|It is on your RIB.
la carte virtuelle|sanal kart|the virtual card
l'opération (f.)|işlem|the transaction|On a statement: « les opérations ».
le débit|borç, çıkış|debit
le crédit|alacak, giriş|credit
les frais bancaires (m.)|banka masrafları|bank charges
l'hameçonnage (m.)|oltalama, kimlik avı|phishing|Also used: « le phishing ».
l'arnaque (f.)|dolandırıcılık|the scam|Informal but very common.
se connecter|giriş yapmak|to log in
se déconnecter|çıkış yapmak|to log out
valider|onaylamak|to confirm, validate
bloquer sa carte|kartını bloke etmek|to block one's card
faire opposition|kartı kullanıma kapattırmak|to cancel (a lost card)|Call quickly if your card is stolen.
J'ai oublié mon mot de passe.|Şifremi unuttum.|I forgot my password.
Mon compte est bloqué.|Hesabım bloke oldu.|My account is blocked.
Je n'ai pas reçu le code par SMS.|Kodu SMS ile almadım.|I didn't get the code by text.
J'ai perdu ma carte bancaire.|Banka kartımı kaybettim.|I've lost my bank card.
Je ne reconnais pas ce paiement.|Bu ödemeyi tanımıyorum.|I don't recognise this payment.
Je voudrais augmenter mon plafond.|Limitimi artırmak istiyorum.|I'd like to raise my limit.
Votre banque ne vous demande jamais votre code secret.|Bankanız şifrenizi asla sormaz.|Your bank never asks for your PIN.|Golden rule against scams!
Ne cliquez pas sur ce lien.|Bu bağlantıya tıklamayın.|Don't click on this link.`),

    D("a2-cooking-methods", "A2", "Cooking methods & recipes", "Pişirme yöntemleri ve tarifler", "Les modes de cuisson et les recettes", `
la recette|tarif|the recipe
les ingrédients (m.)|malzemeler|the ingredients
la cuisson|pişirme|cooking (time, method)|« Quelle cuisson ? » = how do you want your steak?
faire bouillir|kaynatmak|to boil
faire cuire|pişirmek|to cook|Faire cuire les pâtes 10 minutes.
faire revenir|kavurmak, hafif kızartmak|to brown, sauté lightly|Faire revenir les oignons.
faire frire|kızartmak|to deep-fry
faire griller|ızgara yapmak|to grill, toast
faire mijoter|kısık ateşte pişirmek|to simmer|Perfect for a güveç!
cuire au four|fırında pişirmek|to bake, roast
cuire à la vapeur|buharda pişirmek|to steam
préchauffer le four|fırını önceden ısıtmak|to preheat the oven
éplucher|soymak|to peel
couper en dés|küp küp doğramak|to dice|un dé = a cube (and a dice)
émincer|ince ince doğramak|to slice thinly
râper|rendelemek|to grate|le fromage râpé = grated cheese
mélanger|karıştırmak|to mix
battre les œufs|yumurtaları çırpmak|to beat the eggs
verser|dökmek|to pour
égoutter|süzmek|to drain|une passoire = a colander
saler et poivrer|tuz ve karabiber eklemek|to season with salt and pepper
assaisonner|baharatlamak, çeşnilendirmek|to season, dress (a salad)
une pincée de sel|bir tutam tuz|a pinch of salt
une cuillère à soupe|bir yemek kaşığı|a tablespoon|Abbreviation: c. à s.
une cuillère à café|bir tatlı / çay kaşığı|a teaspoon|Abbreviation: c. à c.
à feu doux|kısık ateşte|on a low heat
à feu vif|yüksek ateşte|on a high heat
bien cuit / bien cuite|iyi pişmiş|well done
saignant / saignante|az pişmiş|rare (meat)
C'est facile à faire.|Yapması kolay.|It's easy to make.
Laissez reposer dix minutes.|On dakika dinlendirin.|Let it rest for ten minutes.
Ajoutez le sucre petit à petit.|Şekeri azar azar ekleyin.|Add the sugar little by little.
Ça sent bon !|Ne güzel kokuyor!|It smells good!
Tu peux me donner la recette ?|Bana tarifi verebilir misin?|Can you give me the recipe?`),

    D("a2-volunteering", "A2", "Volunteering & associations", "Gönüllülük ve dernekler", "Le bénévolat et les associations", `
le bénévolat|gönüllülük|volunteering
le / la bénévole|gönüllü|the volunteer|Same form for m. and f.
l'association (f.)|dernek|the association, charity|Short: « l'asso ».
l'association sportive (f.)|spor kulübü / derneği|the sports club|Many French clubs are associations.
le / la président(e)|başkan|the president, chair
le trésorier|sayman|the treasurer|f. la trésorière
l'adhérent (m.)|üye|the member|f. l'adhérente
l'adhésion (f.)|üyelik (ücreti)|membership (fee)
la cotisation|aidat|the (annual) fee, subscription
l'assemblée générale (f.)|genel kurul|the general meeting|Short: « l'AG ».
le forum des associations|dernekler fuarı|the clubs and societies fair|Every September in most towns.
la collecte|yardım toplama kampanyası|the collection drive
le don|bağış|the donation
la banque alimentaire|gıda bankası|the food bank
les Restos du Cœur (m.)|Restos du Cœur (yardım derneği)|a famous French food charity|Founded by the comedian Coluche in 1985.
la maraude|sokakta yaşayanlara yardım turu|outreach round for homeless people
l'aide aux devoirs (f.)|ödev yardımı|homework help
le service civique|gönüllü kamu hizmeti|civic service (paid volunteering)|For 16–25-year-olds.
la solidarité|dayanışma|solidarity
l'entraide (f.)|yardımlaşma|mutual help
donner un coup de main|yardım etmek, el uzatmak|to lend a hand
s'engager|kendini adamak, katılmak|to get involved, commit
adhérer à une association|bir derneğe üye olmak|to join an association
s'inscrire comme bénévole|gönüllü olarak kaydolmak|to sign up as a volunteer
encadrer|yönetmek, rehberlik etmek|to supervise, coach|encadrer les enfants le samedi
organiser un événement|etkinlik düzenlemek|to organise an event
tenir un stand|stantta görev almak|to run a stall
Je fais du bénévolat le week-end.|Hafta sonları gönüllü çalışıyorum.|I volunteer at weekends.
Vous cherchez des bénévoles ?|Gönüllü arıyor musunuz?|Are you looking for volunteers?
Je peux donner deux heures par semaine.|Haftada iki saat verebilirim.|I can give two hours a week.
C'est une bonne façon de rencontrer des gens.|İnsanlarla tanışmak için iyi bir yol.|It's a good way to meet people.
Ça m'aide aussi à pratiquer le français.|Bu, Fransızca pratik yapmama da yardımcı oluyor.|It also helps me practise French.
Le club de hand cherche quelqu'un pour aider les jeunes.|Hentbol kulübü gençlere yardım edecek birini arıyor.|The handball club is looking for someone to help the young players.`),

    D("a2-character", "A2", "Character & personality", "Karakter ve kişilik", "Le caractère et la personnalité", `
le caractère|karakter|character, temper
la personnalité|kişilik|personality
la qualité|iyi özellik, erdem|the good quality
le défaut|kusur|the fault, flaw
patient / patiente|sabırlı|patient
impatient / impatiente|sabırsız|impatient
honnête|dürüst|honest|Same form for m. and f.
têtu / têtue|inatçı|stubborn
jaloux / jalouse|kıskanç|jealous
optimiste|iyimser|optimistic
pessimiste|kötümser|pessimistic
ambitieux / ambitieuse|hırslı|ambitious
modeste|alçakgönüllü|modest
prétentieux / prétentieuse|kendini beğenmiş|pretentious, full of oneself
organisé / organisée|düzenli|organised
désordonné / désordonnée|dağınık|messy, untidy
souriant / souriante|güler yüzlü|smiley, cheerful|Perfect for a front-desk job!
râleur / râleuse|homurdanan, şikâyetçi|grumpy, always complaining|Very French word, very French habit.
sensible|hassas, duygusal|sensitive|False friend: not « sensible » in English (= raisonnable).
susceptible|alıngan|touchy, easily offended|False friend!
ponctuel / ponctuelle|dakik|punctual
fiable|güvenilir|reliable
distrait / distraite|dalgın|absent-minded
maladroit / maladroite|sakar|clumsy
discret / discrète|ağzı sıkı, sessiz sakin|discreet, reserved
avoir bon caractère|iyi huylu olmak|to be good-natured
avoir mauvais caractère|huysuz olmak|to be bad-tempered
avoir le sens de l'humour|espri anlayışı olmak|to have a sense of humour
être de bonne humeur|keyfi yerinde olmak|to be in a good mood
être de mauvaise humeur|keyfi kaçık olmak|to be in a bad mood
Elle a un caractère fort.|Güçlü bir karakteri var.|She has a strong personality.
Il est toujours de bonne humeur, c'est agréable.|Hep keyfi yerinde, bu çok hoş.|He's always in a good mood, it's nice.
Mon principal défaut ? Je suis trop perfectionniste !|En büyük kusurum mu? Fazla mükemmeliyetçiyim!|My main flaw? I'm too much of a perfectionist!|Classic job interview answer.
Ma qualité principale, c'est la patience.|En önemli özelliğim sabır.|My main quality is patience.
Il n'est pas méchant, il est juste un peu râleur.|Kötü biri değil, sadece biraz söylenir.|He's not mean, he just grumbles a bit.`)
  );
})();
