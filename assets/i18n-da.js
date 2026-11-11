/* Interface strings added with the Doucement art direction (home goal card, path steps, flashcard header). */
(function () {
  const L = {
    tr: { "home.goal": "Hedef", "home.resume": "Devam: {s}", "home.day": "Gün {n}", "home.allExams": "Deneme sınavları",
      "path.step": "Adım", "path.sub": "Seviye {lv} · {d}/{n} adım", "ex.close": "Kapat" },
    en: { "home.goal": "Goal", "home.resume": "Resume: {s}", "home.day": "Day {n}", "home.allExams": "Mock exams",
      "path.step": "Step", "path.sub": "Level {lv} · {d} of {n} steps", "ex.close": "Close" },
    fr: { "home.goal": "Objectif", "home.resume": "Reprendre : {s}", "home.day": "Jour {n}", "home.allExams": "Examens blancs",
      "path.step": "Étape", "path.sub": "Niveau {lv} · {d} étapes sur {n}", "ex.close": "Fermer" }
  };
  for (const k of ["tr", "en", "fr"]) Object.assign(window.I18N[k], L[k]);
})();
