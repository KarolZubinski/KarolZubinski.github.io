// ===============================
// SPA NAVIGATION
// ===============================

document.querySelectorAll('.top-nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const page = e.target.dataset.page;



    // reset aktywnego linku
    document.querySelectorAll('.top-nav a').forEach(a =>
      a.classList.remove("active-link")
    );
    e.target.classList.add("active-link");

    // przełącz sekcje
    document.querySelectorAll('.page').forEach(p =>
      p.classList.remove('active')
    );

    document
      .getElementById(`page-${page}`)
      .classList.add('active');
  });
});
