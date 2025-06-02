// Services section logic
const services = [
  {
    icon: "🚗",
    title: "Car Sourcing",
    text: "We find and verify vehicles across Europe.",
    message: "Minimum fee for Car Sourcing is €250."
  },
  {
    icon: "🔍",
    title: "Inspection",
    text: "Technical and legal checks before purchase.",
    message: "Inspection starts from €120 per vehicle."
  },
  {
    icon: '<img src="images/avtovoz-emoji.png" alt="Car Transporter" class="h-10 w-auto mx-auto" />',
    title: "Transportation",
    text: "Safe and fast delivery to your location.",
    message: "Shipping cost varies by distance — ask for a quote."
  },
  {
    icon: "📝",
    title: "Customs",
    text: "We handle all import paperwork.",
    message: "Customs handling fee starts from €90."
  }
];

const container = document.getElementById("services");
if (container) {
  services.forEach(service => {
    const card = document.createElement("div");
    card.className = "p-4 bg-white shadow rounded-md transition hover:shadow-lg hover:scale-[1.02] cursor-pointer";
    card.innerHTML = `<div class="text-4xl mb-2">${service.icon}</div><h3 class="text-lg font-bold mb-1">${service.title}</h3><p class="text-sm text-gray-600">${service.text}</p>`;
    card.onclick = () => {
      const infoBox = document.getElementById("service-info");
      infoBox.textContent = service.message;
      infoBox.classList.remove("hidden");
      infoBox.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => infoBox.classList.add("hidden"), 5000);
    };
    container.appendChild(card);
  });
}
