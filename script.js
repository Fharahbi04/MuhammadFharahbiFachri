document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  const yearElem = document.getElementById('year');
  const contactForm = document.getElementById('contactForm');

  yearElem.textContent = new Date().getFullYear();

  menuBtn.addEventListener('click', function () {
    nav.classList.toggle('show');
  });

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', function () {
      nav.classList.remove('show');
    });
  });

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Mohon lengkapi semua kolom sebelum mengirim.');
      return;
    }

    setTimeout(() => {
      alert(`Terima kasih, ${name}! Pesan Anda telah terkirim.`);
      contactForm.reset();
    }, 250);
  });
});
