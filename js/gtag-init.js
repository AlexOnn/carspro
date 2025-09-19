window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2P7FWXC988');

// Tracking button "Request Quote" and "Gauti pasiūlymą"
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href="#shipping-form"]').forEach(el => {
    el.addEventListener('click', () => {
      console.log('GA4 event sent:', el.textContent.trim());
      gtag('event', 'request_quote_click', {
        'event_category': 'engagement',
        'event_label': el.textContent.trim()
      });
    });
  });
});

//calculate_price
document.addEventListener('DOMContentLoaded', () => {
  const calcForm = document.querySelector('form'); // если форма одна
  if (calcForm) {
    calcForm.addEventListener('submit', (e) => {
      console.log('GA4 event sent: calculate_price');
      gtag('event', 'calculate_price', {
        'event_category': 'engagement',
        'event_label': 'Calculator form submit'
      });
    });
  }
});

