/* Interface strings for the Basics corner, the "listen to all" player and the translation (cheat) buttons. */
(function () {
  const L = {
    tr: {
      "bs.title": "Temeller", "bs.sub": "Fransızcanın ilk taşları: alfabe, sesler, sayılar, günler, ev… Her kelime sesli. Acele yok, her gün biraz 🌿",
      "bs.tile": "{n} konu · {d} denendi", "bs.quiz": "Kendimi deneyeyim", "bs.hide": "Anlamları gizle", "bs.best": "En iyi: {s}/{n}", "bs.back": "Konuya dön",
      "bs.q.listen": "Dinle ve duyduğunu seç:", "bs.q.meaning": "Fransızcası hangisi?", "bs.q.fr": "Bu ne demek?", "bs.qn": "Soru {i}/{n}",
      "bs.noCards": "Bu konu kartlara uygun değil: harfleri ve sesleri burada dinleyerek çalış.",
      "pl.stop": "Durdur", "pl.slow": "Yavaş", "tr.all": "Tüm çeviriler", "tr.show": "Çeviri", "tr.cheat": "Kopya",
      "rd.listenAll": "Tümünü dinle", "dg.playAll": "Tümünü dinle",
      "audio.hint": "Ses yok mu? Sesi aç, iPhone'un sessiz modunu kapat (yandaki düğme), sonra tekrar dokun. Hâlâ yoksa: Ayarlar › Erişilebilirlik › Seslendirilen İçerik › Sesler › Fransızca'dan bir ses indir."
    },
    en: {
      "bs.title": "Basics", "bs.sub": "The first building blocks of French: alphabet, sounds, numbers, days, the house… Every word has audio. No rush, a little every day 🌿",
      "bs.tile": "{n} topics · {d} tried", "bs.quiz": "Quiz me", "bs.hide": "Hide meanings", "bs.best": "Best: {s}/{n}", "bs.back": "Back to the topic",
      "bs.q.listen": "Listen and pick what you hear:", "bs.q.meaning": "Which one is the French?", "bs.q.fr": "What does it mean?", "bs.qn": "Question {i}/{n}",
      "bs.noCards": "This topic isn't made for cards: practise letters and sounds here by listening.",
      "pl.stop": "Stop", "pl.slow": "Slow", "tr.all": "All translations", "tr.show": "Translation", "tr.cheat": "Cheat",
      "rd.listenAll": "Listen to all", "dg.playAll": "Listen to all",
      "audio.hint": "No sound? Turn the volume up, switch off the iPhone's silent mode (side switch), then tap again. Still nothing: Settings › Accessibility › Spoken Content › Voices › French, and download a voice."
    },
    fr: {
      "bs.title": "Les bases", "bs.sub": "Les premières briques du français : alphabet, sons, nombres, jours, la maison… Chaque mot a son audio. Pas de stress, un peu chaque jour 🌿",
      "bs.tile": "{n} thèmes · {d} essayés", "bs.quiz": "Je m'entraîne", "bs.hide": "Cacher le sens", "bs.best": "Record : {s}/{n}", "bs.back": "Retour au thème",
      "bs.q.listen": "Écoute et choisis ce que tu entends :", "bs.q.meaning": "Lequel est le français ?", "bs.q.fr": "Qu'est-ce que ça veut dire ?", "bs.qn": "Question {i}/{n}",
      "bs.noCards": "Ce thème ne se prête pas aux cartes : travaille les lettres et les sons ici, à l'écoute.",
      "pl.stop": "Arrêter", "pl.slow": "Lent", "tr.all": "Toutes les traductions", "tr.show": "Traduction", "tr.cheat": "Triche",
      "rd.listenAll": "Tout écouter", "dg.playAll": "Tout écouter",
      "audio.hint": "Pas de son ? Monte le volume, désactive le mode silencieux de l'iPhone (bouton sur le côté), puis touche à nouveau. Toujours rien : Réglages › Accessibilité › Contenu énoncé › Voix › Français, et télécharge une voix."
    }
  };
  for (const k of ["tr", "en", "fr"]) Object.assign(window.I18N[k], L[k]);
})();
