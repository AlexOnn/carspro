document.addEventListener("DOMContentLoaded", () => {
  const lang = document.documentElement.lang.slice(0, 2);

  const formTranslations = {
    en: {
      title: "Request Auction Evaluation",
      desc: "Found a car on a European auction site? Send us the link — we’ll verify it, estimate full costs (including transport & fees), and reply within hours.",
      beta: "Note: This form is currently in beta. Automatic email processing is under development.",
      urlLabel: "Auction Listing URL",
      urlPlaceholder: "https://www.bca.com/...",
      commentsLabel: "Additional Comments",
      commentsPlaceholder: "Preferred budget, delivery location, color, etc.",
      emailLabel: "Your Email",
      emailPlaceholder: "your@email.com",
      whatsappLabel: "WhatsApp (optional)",
      whatsappPlaceholder: "+370...",
      button: "Send Request",
      footer: "Just send the vehicle listing URL — we'll take care of the rest.",
      statusSending: "⏳ Sending your request...",
      statusSuccess: "✅ Request sent! We will contact you soon.",
      statusError: "❌ Something went wrong. Please try again later.",
      statusNetwork: "❌ Network error. Please try again.",
      cards: [
        { title: "BCA Europe", text: "Commission from €250. Wide selection of cars across Europe. VIN reports and inspection available." },
        { title: "Auto1", text: "Commission from €250. Fast turnover, ideal for verified dealers. Local and cross-border listings." },
        { title: "Copart", text: "Commission from €250. Salvage and damaged vehicles. Important to check repair viability." },
        { title: "Openlane (formerly ADESA)", text: "Commission from €250. Dealer-to-dealer transactions. Well-documented auction terms." }
      ]
    },
    lt: {
      title: "Pateikti aukciono įvertinimo užklausą",
      desc: "Radote automobilį Europos aukcione? Siųskite nuorodą — patikrinsime, apskaičiuosime visą kainą (su transportu ir mokesčiais) ir atsakysime per kelias valandas.",
      beta: "Pastaba: Ši forma šiuo metu beta versijoje. Automatinis el. laiškų apdorojimas dar kuriamas.",
      urlLabel: "Aukciono nuoroda",
      urlPlaceholder: "https://www.bca.com/...",
      commentsLabel: "Papildomi komentarai",
      commentsPlaceholder: "Pageidaujamas biudžetas, pristatymo vieta, spalva ir kt.",
      emailLabel: "Jūsų el. paštas",
      emailPlaceholder: "jūsų@email.lt",
      whatsappLabel: "WhatsApp (pasirinktinai)",
      whatsappPlaceholder: "+370...",
      button: "Siųsti užklausą",
      footer: "Tiesiog atsiųskite automobilio nuorodą — viskuo pasirūpinsime.",
      statusSending: "⏳ Siunčiame jūsų užklausą...",
      statusSuccess: "✅ Užklausa išsiųsta! Susisieksime greitai.",
      statusError: "❌ Įvyko klaida. Bandykite dar kartą.",
      statusNetwork: "❌ Tinklo klaida. Bandykite dar kartą.",
      cards: [
        { title: "BCA Europe", text: "Komisinis nuo €250. Platus automobilių pasirinkimas Europoje. VIN ataskaitos ir patikra prieinamos." },
        { title: "Auto1", text: "Komisinis nuo €250. Greita prekyba, idealiai tinka patikimiems pardavėjams. Vietiniai ir tarptautiniai pasiūlymai." },
        { title: "Copart", text: "Komisinis nuo €250. Apgadinti ir po avarijų automobiliai. Svarbu įvertinti remonto galimybes." },
        { title: "Openlane (anksčiau ADESA)", text: "Komisinis nuo €250. Pardavėjo-pardavėjui sandoriai. Aiškios aukciono sąlygos." }
      ]
    }
    // Add other languages here as needed
  };

  const t = formTranslations[lang] || formTranslations.en;

  // Populate static elements
  document.getElementById("form-title").textContent = t.title;
  document.getElementById("form-desc").textContent = t.desc;
  document.getElementById("form-beta").textContent = t.beta;
  document.getElementById("label-auction-url").textContent = t.urlLabel;
  document.getElementById("auction-url").placeholder = t.urlPlaceholder;
  document.getElementById("label-comments").textContent = t.commentsLabel;
  document.getElementById("notes").placeholder = t.commentsPlaceholder;
  document.getElementById("label-email").textContent = t.emailLabel;
  document.getElementById("email").placeholder = t.emailPlaceholder;
  document.getElementById("label-whatsapp").textContent = t.whatsappLabel;
  document.getElementById("whatsapp").placeholder = t.whatsappPlaceholder;
  document.getElementById("button-submit").textContent = t.button;
  document.getElementById("form-footer").textContent = t.footer;

  // Populate auction cards
  const cardsContainer = document.getElementById("auction-cards");
  t.cards.forEach(card => {
    const div = document.createElement("div");
    div.className = "border rounded shadow p-4";
    div.innerHTML = `<h3 class="text-lg font-semibold mb-1">${card.title}</h3><p>${card.text}</p>`;
    cardsContainer.appendChild(div);
  });

  // Handle form submission
  const form = document.getElementById("auctionForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    status.classList.remove("hidden");
    status.textContent = t.statusSending;

    const formData = new FormData(form);
    const body = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/auction-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
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
