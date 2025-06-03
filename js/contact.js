const contactTranslations = {
  lt: { telegram: "Susisiekite per Telegram", whatsapp: "Susisiekite per WhatsApp", email: "Rašykite mums el. paštu" },
  pl: { telegram: "Skontaktuj się przez Telegram", whatsapp: "Skontaktuj się przez WhatsApp", email: "Napisz do nas e-mail" },
  ro: { telegram: "Contactează prin Telegram", whatsapp: "Contactează prin WhatsApp", email: "Trimite-ne un e-mail" },
  et: { telegram: "Võta ühendust Telegrami kaudu", whatsapp: "Võta ühendust WhatsAppi kaudu", email: "Saada meile e-kiri" },
  lv: { telegram: "Sazinieties caur Telegram", whatsapp: "Sazinieties caur WhatsApp", email: "Sūtiet mums e-pastu" },
  tr: { telegram: "Telegram ile iletişime geç", whatsapp: "WhatsApp ile iletişime geç", email: "Bize e-posta gönder" },
  cs: { telegram: "Kontaktujte přes Telegram", whatsapp: "Kontaktujte přes WhatsApp", email: "Pošlete nám e-mail" },
  de: { telegram: "Kontakt über Telegram", whatsapp: "Kontakt über WhatsApp", email: "Schreiben Sie uns eine E-Mail" },
  fr: { telegram: "Contactez via Telegram", whatsapp: "Contactez via WhatsApp", email: "Envoyez-nous un e-mail" },
  nl: { telegram: "Contact via Telegram", whatsapp: "Contact via WhatsApp", email: "Stuur ons een e-mail" },
  ar: { telegram: "تواصل عبر تيليجرام", whatsapp: "تواصل عبر واتساب", email: "أرسل لنا بريداً إلكترونياً" },
  en: { telegram: "Contact via Telegram", whatsapp: "Contact via WhatsApp", email: "Send us an email" }
};

const lang = document.documentElement.lang.slice(0, 2);
const trans = contactTranslations[lang] || contactTranslations["en"];

const contactHtml = `
  <div class="mt-4 flex flex-col gap-2 items-center justify-center text-sm">
    <a href="https://t.me/CarsProEu" target="_blank" class="text-blue-700 underline hover:text-blue-900">${trans.telegram}</a>
    <a href="https://wa.me/+37060780220" target="_blank" class="text-green-700 underline hover:text-green-900">${trans.whatsapp}</a>
    <a href="mailto:administration@carspro.eu" class="text-gray-700 underline hover:text-black">${trans.email}</a>
  </div>`;
