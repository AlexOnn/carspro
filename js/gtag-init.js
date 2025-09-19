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

