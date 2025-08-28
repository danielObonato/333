// Navegação mobile
const nav = document.querySelector('.site-nav');
const navToggle = document.querySelector('.nav-toggle');
if (nav && navToggle){
  navToggle.addEventListener('click', () => {
    const isExp = nav.getAttribute('aria-expanded') === 'true';
    nav.setAttribute('aria-expanded', String(!isExp));
    navToggle.setAttribute('aria-expanded', String(!isExp));
  });
}

// Tabs
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('is-active'));
    panels.forEach(p => p.classList.remove('is-active'));
    tab.classList.add('is-active');
    const panel = document.getElementById(tab.getAttribute('aria-controls'));
    panel.classList.add('is-active');
    // ARIA
    tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
    tab.setAttribute('aria-selected', 'true');
  });
});

// Form (exemplo sem backend — apenas demonstração)
function handleSubmit(e){
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.textContent = 'Recebemos seus dados! Em breve entraremos em contato.';
  e.target.reset();
  return false;
}

// Ano do rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Tema claro/escuro
const modeBtn = document.querySelector('.mode-toggle');
modeBtn?.addEventListener('click', () => {
  document.documentElement.classList.toggle('light');
  localStorage.setItem('theme', document.documentElement.classList.contains('light') ? 'light' : 'dark');
});
// Restaurar preferência
if (localStorage.getItem('theme') === 'light'){
  document.documentElement.classList.add('light');
}
