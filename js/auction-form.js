document.addEventListener("DOMContentLoaded", () => {
  const lang = document.documentElement.lang.slice(0, 2);

  const formTranslations = {
    en: {
      urlLabel: "Auction Listing URL",
      urlPlaceholder: "https://www.bca.com/...",
      commentsLabel: "Additional Comments",
      commentsPlaceholder: "Preferred budget, delivery location, color, etc.",
      emailLabel: "Your Email",
      whatsappLabel: "WhatsApp (optional)",
      button: "Send Request",
      statusSending: "⏳ Sending your request...",
      statusSuccess: "✅ Request sent! We will contact you soon.",
      statusError: "❌ Something went wrong. Please try again later.",
      statusNetwork: "❌ Network error. Please try again."
    },
    lt: {
      urlLabel: "Aukciono nuoroda",
      urlPlaceholder: "https://www.bca.com/...",
      commentsLabel: "Papildomi komentarai",
      commentsPlaceholder: "Pageidaujamas biudžetas, pristatymo vieta, spalva ir kt.",
      emailLabel: "Jūsų el. paštas",
      whatsappLabel: "WhatsApp (pasirinktinai)",
      button: "Siųsti užklausą",
      statusSending: "⏳ Siunčiame jūsų užklausą...",
      statusSuccess: "✅ Užklausa išsiųsta! Susisieksime greitai.",
      statusError: "❌ Įvyko klaida. Bandykite dar kartą.",
      statusNetwork: "❌ Tinklo klaida. Bandykite dar kartą."
    }
    // other lng
  };

  const t = formTranslations[lang] || formTranslations.en;

  // updates of labels
  document.querySelector('label[for="auction-url"]').textContent = t.urlLabel;
  document.getElementById("auction-url").placeholder = t.urlPlaceholder;

  document.querySelector('label[for="notes"]').textContent = t.commentsLabel;
  document.getElementById("notes").placeholder = t.commentsPlaceholder;

  document.querySelector('label[for="email"]').textContent = t.emailLabel;
  document.querySelector('label[for="whatsapp"]').textContent = t.whatsappLabel;

  document.querySelector('#auctionForm button[type="submit"]').textContent = t.button;

  // Form logics
  const form = document.getElementById('auctionForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    status.classList.remove('hidden');
    status.textContent = t.statusSending;

    const formData = new FormData(form);
    const body = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/auction-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        status.textContent = t.statusSuccess;
        form.reset();
      } else {
        status.textContent = t.statusError;
      }
    } catch (err) {
      status.textContent = t.statusNetwork;
    }
  });
});
