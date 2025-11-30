document.querySelectorAll('.top-nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const page = e.target.dataset.page;

    // 🔥 blokujemy scroll na ułamek sekundy
    document.body.classList.add("loading");
    setTimeout(() => document.body.classList.remove("loading"), 300);

    // reset aktywności
    document.querySelectorAll('.top-nav a').forEach(a =>
      a.classList.remove("active-link")
    );

    e.target.classList.add("active-link");

    // przełącz sekcję
    document.querySelectorAll('.page').forEach(p =>
      p.classList.remove('active')
    );

    document.getElementById(`page-${page}`).classList.add('active');
  });
});
