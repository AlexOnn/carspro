const translations = {
  en: {
    title: "🚚 Logistics without hassle",
    subtitle: "We organize deliveries across Europe. Door-to-door. Reliable and guaranteed.",
    cta: "Request Quote",
    why: "Why choose us?",
    point1: "📍 Delivering all over the EU",
    point2: "💬 Working with individuals and businesses",
    point3: "⏱ Fast route optimization",
    howTitle: "How it works",
    how1: "Submit a request",
    how2: "We find the best transport",
    how3: "Confirm the route",
    how4: "We monitor delivery",
    formTitle: "Transport Request",
    submitBtn: "Send"
  },
  lt: {
    title: "🚚 Logistika be rūpesčių",
    subtitle: "Organizuojame pervežimus visoje Europoje. Nuo durų iki durų. Patikimai ir su garantija.",
    cta: "Pateikti užklausą",
    why: "Kodėl rinktis mus?",
    point1: "📍 Vežame visoje ES",
    point2: "💬 Dirbame su įmonėmis ir fiziniais asmenimis",
    point3: "⏱ Greitai optimizuojame maršrutą",
    howTitle: "Kaip tai veikia",
    how1: "Pateikiate užklausą",
    how2: "Randame tinkamiausią transportą",
    how3: "Patvirtiname maršrutą",
    how4: "Sekame pristatymą",
    formTitle: "Pervežimo užklausa",
    submitBtn: "Siųsti"
  }
};

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
}

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const lang = localStorage.getItem('lang') || 'en';
  applyTranslations(lang);

  document.getElementById('requestForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('status').textContent = lang === 'lt' ?
      "Užklausa išsiųsta! (testinis režimas)" :
      "Request sent! (test mode)";
    this.reset();
  });
});
