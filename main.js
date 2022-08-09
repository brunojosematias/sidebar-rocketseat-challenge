const toggle = document.querySelector('.sidebar');
const menu = document.querySelector('.menu .toggle .action');

menu.addEventListener('click', () => {
  toggle.classList.toggle('show');
})
