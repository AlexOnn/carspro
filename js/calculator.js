// Multilingual messages for calculator form
const calcMessages = {
  en: {
    fillFields: "Please fill in all fields correctly.",
    apiError: "Error: ",
    distance: "Distance",
    price: "Total Price",
    discount: "A discount of {percent}% has been applied."
  },
  lt: {
    fillFields: "Prašome teisingai užpildyti visus laukus.",
    apiError: "Klaida: ",
    distance: "Atstumas",
    price: "Kaina iš viso",
    discount: "Pritaikyta {percent}% nuolaida."
  }
};

const lang = document.documentElement.lang.startsWith("lt") ? "lt" : "en";
const msg = calcMessages[lang];

// Google Maps autocomplete init
function initAutocomplete() {
  const options = { types: ["geocode"] };
  new google.maps.places.Autocomplete(document.getElementById("pickup"), options);
  new google.maps.places.Autocomplete(document.getElementById("delivery"), options);
}

// Country synonyms
const countrySynonyms = {
  lithuania: ["lithuania", "lietuva", "litauen", "lituanie", "литва"],
  germany: ["germany", "vokietija", "deutschland", "allemagne", "германия"],
  belgium: ["belgium", "belgie", "belgique", "бельгия"],
  netherlands: ["netherlands", "holland", "nederland", "нидерланды"]
};

function matchesCountry(input, key) {
  const norm = input.toLowerCase();
  return countrySynonyms[key]?.some(s => norm.includes(s));
}

function isDiscountedRoute(pickup, delivery) {
  return matchesCountry(pickup, "lithuania") && matchesCountry(delivery, "germany") ? 0.3 : 0;
}

const maxPriceRules = [
  {
    from: "belgium",
    to: "lithuania",
    prices: { sedan: 650, suv: 700, motorcycle: 400 }
  },
  {
    from: "netherlands",
    to: "lithuania",
    prices: { sedan: 650, suv: 700, motorcycle: 400 }
  }
];

function applyMaxPriceRules(pickup, delivery, vehicle, currentPrice) {
  for (const rule of maxPriceRules) {
    if (matchesCountry(pickup, rule.from) && matchesCountry(delivery, rule.to)) {
      const max = rule.prices[vehicle];
      if (max && currentPrice > max) return max;
    }
  }
  return currentPrice;
}

// Calculator form logic
function validateCalculatorForm() {
  const pickup = document.getElementById("pickup").value.trim();
  const delivery = document.getElementById("delivery").value.trim();
  const vehicle = document.getElementById("vehicle").value;

  if (!pickup || !delivery || !vehicle) {
    alert(msg.fillFields);
    return false;
  }

  const rates = { sedan: 0.60, suv: 0.65, truck: 0.70, van: 0.75, motorcycle: 0.55, bus: 0.80 };
  const rate = rates[vehicle];
  const service = new google.maps.DistanceMatrixService();

  service.getDistanceMatrix({
    origins: [pickup],
    destinations: [delivery],
    travelMode: "DRIVING",
    unitSystem: google.maps.UnitSystem.METRIC,
  }, (response, status) => {
    if (status !== "OK") return alert(msg.apiError + status);

    const distanceMeters = response.rows[0].elements[0].distance.value;
    const distanceKm = distanceMeters / 1000;
    let price = distanceKm * rate;
    if (distanceKm < 100) price = Math.max(price, 250);
    else if (distanceKm >= 320 && distanceKm <= 420) price = Math.max(price, 350);

    const discount = isDiscountedRoute(pickup, delivery);
    if (discount > 0) price *= (1 - discount);
    price = applyMaxPriceRules(pickup, delivery, vehicle, price);

    let result = `${msg.distance}: ${distanceKm.toFixed(1)} km<br>${msg.price}: €${price.toFixed(2)}`;
    if (discount > 0) {
      result += `<div class=\"text-green-700 text-sm mt-2\">${msg.discount.replace("{percent}", Math.round(discount * 100))}</div>`;
    }

    document.getElementById("calc-output").innerHTML = result;
    const resultDiv = document.getElementById("calc-result");
    resultDiv.classList.remove("hidden");
    resultDiv.scrollIntoView({ behavior: "smooth" });
  });
  return false;
}

