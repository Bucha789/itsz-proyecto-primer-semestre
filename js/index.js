import info from './templates.js';

const infoContainer = document.querySelector('.info__container');
const buttons = document.querySelectorAll(".option-list");
const carruselImages = document.querySelectorAll('.image__slider');
let count = 0;
let elementsCarrusel = carruselImages.length;
function removeActiveClass(iterator) {
  for(let i = 0; i < iterator.length; i++) {
    if(iterator[i].classList.contains('active')) {
      iterator[i].classList.remove('active');
    }
  }
}


function slider() {
  if (count >= elementsCarrusel) {
    count = 0;
  }
  for (let i = 0; i < elementsCarrusel; i++) {
    carruselImages[i].classList.remove('active');
  }
  carruselImages[count].classList.add('active');
  count++;
}

setInterval(() => {
  slider()
}, 5000)
const openMenu = document.querySelector('.open')
const closeMenu = document.querySelector('.close')
const menu = document.querySelector('.mobile-options');

openMenu.addEventListener('click', () => {
  openMenu.style.display = 'none';
  menu.style.display = 'flex';
  closeMenu.style.display = 'flex';
})
closeMenu.addEventListener('click', () => {
  openMenu.style.display = 'flex';
  menu.style.display = 'none';
  closeMenu.style.display = 'none';
})
buttons.forEach((item) => {
  item.addEventListener("click", () => {
      infoContainer.removeChild(infoContainer.children[0]);
      removeActiveClass(buttons);
        item.classList.add('active');
      const div = document.createElement('div');
      const ID = item.getAttribute('data-id')
      div.innerHTML = info[ID];
      infoContainer.appendChild(div);
  });
});