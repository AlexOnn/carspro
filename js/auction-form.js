document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('auctionForm');
  const status = document.getElementById('formStatus');

  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    status.classList.remove('hidden');
    status.textContent = '⏳ Sending your request...';

    const formData = new FormData(form);
    const body = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/auction-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        status.textContent = '✅ Request sent! We will contact you soon.';
        form.reset();
      } else {
        status.textContent = '❌ Something went wrong. Please try again later.';
      }
    } catch (err) {
      status.textContent = '❌ Network error. Please try again.';
    }
  });
});

