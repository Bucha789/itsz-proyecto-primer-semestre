const infoContainer = document.querySelector(".info__container");
const buttons = document.querySelectorAll(".option-list");
const carruselImages = document.querySelectorAll(".image__slider");
let count = 0;
let elementsCarrusel = carruselImages.length;
function removeActiveClass(iterator) {
  for (let i = 0; i < iterator.length; i++) {
    if (iterator[i].classList.contains("active")) {
      iterator[i].classList.remove("active");
    }
  }
}

function slider() {
  if (count >= elementsCarrusel) {
    count = 0;
  }
  for (let i = 0; i < elementsCarrusel; i++) {
    carruselImages[i].classList.remove("active");
  }
  carruselImages[count].classList.add("active");
  count++;
}

setInterval(() => {
  slider();
}, 5000);
const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const menu = document.querySelector(".mobile-options");

openMenu.addEventListener("click", () => {
  openMenu.style.display = "none";
  menu.style.display = "flex";
  closeMenu.style.display = "flex";
});
closeMenu.addEventListener("click", () => {
  openMenu.style.display = "flex";
  menu.style.display = "none";
  closeMenu.style.display = "none";
});


//Primer algoritmo
document.querySelector('#dogsForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  let numberOfDogs = Number(document.querySelector('#numberOfDogs').value);
  let dogsResults = document.querySelector('#dogsResults');
  const data =  await getDogsImages(numberOfDogs)
    for (let i = 0; i < data.length; i++) {
      const img = document.createElement('img');
      img.src = data[i];
      dogsResults.append(img)
    }
})

function getDogsImages(n = 1) {
  const API_URL = `https://dog.ceo/api/breeds/image/random/${n}`
  return fetch(API_URL)
  .then(request => request.json())
  .then(res =>{
    const {message} = res;
    return message;
  })
  .catch(err => console.error(err))
}
// Segundo algoritmo
let buttonRick = document.querySelector('#rickButton');
buttonRick.addEventListener('click', async () => {
  let charactersDiv = document.createElement('div');
  let numberRandom = getNumberRandom(1, 42);
  let data = await getRickCharacters(numberRandom);
  charactersDiv.classList.add('results__container')
  for (let i = 0; i < data.length; i++) {
    let characterInfo = document.createElement('div');
    characterInfo.innerHTML = `
    <img src="${data[i].image}" alt="${data[i].name}"/> 
    <p>${data[i].name}</p>
    `
    charactersDiv.append(characterInfo);
  }
  buttonRick.insertAdjacentElement('afterend', charactersDiv)
})
function getNumberRandom(minValue = 1, maxValue = 282) {
  return Math.floor((Math.random() * (maxValue - minValue)) + minValue)
}
function getRickCharacters(n = 1) {
  const API_URL = `https://rickandmortyapi.com/api/character/?page=${n}`;

  return fetch(API_URL)
  .then(request =>  request.json())
  .then(res => {
    const { results } = res
    return results.map(item => ({name: item.name, image: item.image})) 
  })
  .catch(err => console.error(err));
}

//Tercer algoritmo
let ducksForm = document.querySelector('#quacksForm')
ducksForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let numberOfDucks = Number(document.querySelector('#numberOfDucks').value);
  let numberRandom = getNumberRandom(1, 282);
  let imagesContainer = document.createElement('div');
  imagesContainer.classList.add('results__container')
  //porque no quiero problemas de performance, solo usaré la función una vez, pero perfectamente podría mandarla a llamar en cada iteración del bucle
  for (let i = 0; i < numberOfDucks; i++) {
    const URL = `https://random-d.uk/api/v2/${numberRandom + i}.jpg`
    let img = document.createElement('img');
    img.src = URL;
    imagesContainer.append(img);
  }
  ducksForm.insertAdjacentElement('afterend', imagesContainer);
})

//Cuarto algoritmo
document.querySelector('#sigloForm').addEventListener('submit', e => {
  e.preventDefault();
  let year = Number(document.querySelector('#year').value)
  let siglo = 0;
  //se puede hacer sin un ciclo solo dividiendo entre 100 y sacando el valor minimo pero como no se me dan ideas lo haré con un ciclo :v
  for (let i = 1; i <= year; i++) {
    if ((siglo * 100) > year) {
      break;
    }
    siglo += 1;
  }
  document.querySelector('#sigloResult').innerHTML = `El siglo que representa ese año es el: ${siglo}`
})

//Quinto Algoritmo
document.querySelector('#factForm').addEventListener('submit', e => {
  e.preventDefault();
  let n = Number(document.querySelector('#number').value);
  let sum = 0;
	let product = 1;	
	for (let i = n; i > 0; i--) {
	sum += i;
	product *= i;
	}
  document.querySelector('#sumResult').innerHTML = `El valor de tu numero en el sumarial es de: ${sum}.`;
  document.querySelector('#facResult').innerHTML = `El valor de tu numero en el factorial es de: ${product}.`;
})