const toggle = document.querySelector('.sidebar');
const menu = document.querySelector('.menu .toggle .action');

menu.addEventListener('click', () => {
  toggle.classList.toggle('show');
})


const elements = document.querySelectorAll('.menu ul li');

elements.forEach(element => {

  element.addEventListener('click', () => {
    let elements = document.querySelectorAll('.menu ul li');

    for (const option of elements) {
     option.classList.remove('select')
    }

    if (element.classList != 'select') {
      element.classList.add('select')
    }
  })
})
