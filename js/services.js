const servicesLang = document.documentElement.lang.slice(0, 2);

const translations = {
  en: [
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
      icon: '<img src="/images/avtovoz-emoji.png" alt="Car Transporter" class="h-10 w-auto mx-auto" />',
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
  ],
  lt: [
    {
      icon: "🚗",
      title: "Automobilių paieška",
      text: "Randame ir tikriname automobilius visoje Europoje.",
      message: "Minimali paslaugos kaina – €250."
    },
    {
      icon: "🔍",
      title: "Patikra",
      text: "Techninis ir teisinis tikrinimas prieš pirkimą.",
      message: "Patikros kaina nuo €120 už transporto priemonę."
    },
    {
      icon: '<img src="/images/avtovoz-emoji.png" alt="Automobilių pervežimas" class="h-10 w-auto mx-auto" />',
      title: "Transportavimas",
      text: "Saugus ir greitas pristatymas į Jūsų vietą.",
      message: "Kaina priklauso nuo atstumo – kreipkitės dėl pasiūlymo."
    },
    {
      icon: "📝",
      title: "Muitinė",
      text: "Sutvarkome visus importo dokumentus.",
      message: "Muitinės tvarkymo mokestis nuo €90."
    }
  ]
};

const services = translations[servicesLang] || translations["en"];

const container = document.getElementById("services");
if (container) {
  services.forEach(service => {
    const card = document.createElement("div");
    card.className = "p-4 bg-white shadow rounded-md transition hover:shadow-lg hover:scale-[1.02] cursor-pointer";
    card.innerHTML = `<div class="text-4xl mb-2">${service.icon}</div><h3 class="text-lg font-bold mb-1">${service.title}</h3><p class="text-sm text-gray-600">${service.text}</p>`;
    card.onclick = () => {
      const infoBox = document.getElementById("service-info");
      // infoBox.textContent = service.message;
      // infoBox.innerHTML = `
      //   ${service.message}<br>
      //     <a href="/lt/contacts/" class="underline text-blue-700 hover:text-blue-900 text-sm mt-2 inline-block">
      //     Susisiekti dėl šios paslaugos
      //     </a>
      //   `;
      const lang = document.documentElement.lang;
        const translations = {
          lt: 'Susisiekti dėl šios paslaugos',
          en: 'Contact us about this service',
          pl: 'Skontaktuj się w sprawie tej usługi',
          de: 'Kontaktieren Sie uns zu diesem Service',
          fr: 'Contactez-nous pour ce service',
          ro: 'Contactați-ne pentru acest serviciu',
          et: 'Võta selle teenuse kohta ühendust',
          lv: 'Sazinieties par šo pakalpojumu',
          cs: 'Kontaktujte nás ohledně této služby',
          nl: 'Neem contact met ons op over deze dienst',
          ar: 'اتصل بنا بشأن هذه الخدمة',
          tr: 'Bu hizmet hakkında bizimle iletişime geçin',
        };
        
        const contactText = translations[lang] || translations.en;
        const contactLink = lang === 'en' ? '/contacts/' : `/${lang}/contacts/`;
        
        infoBox.innerHTML = `
          ${service.message}<br>
          <a href="${contactLink}" class="underline text-blue-700 hover:text-blue-900 text-sm mt-2 inline-block">
            ${contactText}
          </a>
        `;
      infoBox.classList.remove("hidden");
      infoBox.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => infoBox.classList.add("hidden"), 5000);
    };
    container.appendChild(card);
  });
}
