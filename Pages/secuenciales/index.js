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
//el primer algoritmo
document.querySelector("#percentForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let valor = Number(document.querySelector("#valor").value);
  let porcentaje = Number(document.querySelector("#porcentaje").value);

  let producto = valor * (porcentaje / 100);

  document.querySelector(
    "#percentResult"
  ).innerHTML = `El ${porcentaje}% de ${valor} es igual a: ${producto.toFixed(
    2
  )}`;
});
//segundo algoritmo
document.querySelector('#tempForm').addEventListener('submit', (e) => {
  e.preventDefault();
  let tempC = Number(document.querySelector('#temp').value);
  let tempF = ((tempC * 1.8) + 32);
document.querySelector('#tempResult').innerHTML = "El resultado es: " + tempF.toFixed(2) + " °F"
})
// tercer algoritmo
document.querySelector("#potenForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let number = Number(document.querySelector('#potencia').value);
  let cubo = number ** 3;
  let cuadrado = number ** 2;
  document.querySelector('#valorPotenciado').innerHTML = `
    <p>El cuadrado del número que proporcionaste es de: ${cuadrado} </p>
    <p>El cubo del número que proporcionaste es de: ${cubo} </p>
  `
});

//Cuarto algoritmo
document.querySelector('#distForm').addEventListener('submit', (e) => {
  e.preventDefault();
  let x1 = Number(document.querySelector('input[name="x1"]').value);
  let y1 = Number(document.querySelector('input[name="y1"]').value);
  let x2 = Number(document.querySelector('input[name="x2"]').value);
  let y2 = Number(document.querySelector('input[name="y2"]').value);

  let distancia = Math.sqrt((x2 - x1) + (y2- y1));

  document.querySelector('#distResult').innerHTML = `el valor de la distancia entre los puntos (${x1},${y1}) y (${x2},${y2}) es de: ${distancia.toFixed(2)}u`
})
//Quinto Algoritmo
document.querySelector('#circleForm').addEventListener('submit', (e) => {
  e.preventDefault();
  let radio = Number(document.querySelector('#radio').value);

  let area = Math.PI * radio ** 2;
  document.querySelector('#circleResult').innerHTML = `El valor del area es de: ${area.toFixed(2)} u²`
})