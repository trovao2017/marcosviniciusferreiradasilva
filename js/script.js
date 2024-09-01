//Menu hamburguer
const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
  toggleMenu();
});

function toggleMenu() {
  const nav = document.querySelector('.nav-responsive');
  menuHamburguer.classList.toggle('change');
  if (menuHamburguer.classList.contains('change')) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
}

// Dark Mode
const toggleTheme = document.getElementById('toggle-theme');
const body = document.body;

// Verifica se o usuário já escolheu um tema
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
}

toggleTheme.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem(
    'theme',
    body.classList.contains('dark-mode') ? 'dark' : 'light'
  );
});
