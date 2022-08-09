const toggle = document.querySelector('.sidebar');
const menu = document.querySelector('.menu .toggle .action');
const options = document.querySelectorAll('.menu ul li');

for (const option of options) {
  option.addEventListener('click', () => {

    console.log(option)
    if (option.classList.contains('select')) {
      option.classList.remove('select')
      // option.classList.add('select')
      console.log(option)
    }
    option.classList.add('select');


  })
}

menu.addEventListener('click', () => {
  toggle.classList.toggle('show');
})


