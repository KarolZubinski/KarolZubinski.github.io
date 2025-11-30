const links = document.querySelectorAll('.top-nav a');
const pages = document.querySelectorAll('.page');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const page = link.dataset.page;
    if (!page) return;

    // przełącz sekcję
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${page}`).classList.add('active');

    // podświetl aktywny link
    links.forEach(l => l.classList.remove('active-link'));
    link.classList.add('active-link');
  });
});

// domyślnie – home aktywny
document.querySelector('.top-nav a[data-page="home"]').classList.add('active-link');
