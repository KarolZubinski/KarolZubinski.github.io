document.querySelectorAll('.top-nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const page = e.target.dataset.page;

    // usuwamy active ze wszystkich stron
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    // dodajemy active do właściwej sekcji
    document.getElementById(`page-${page}`).classList.add('active');
  });
});
