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
document.querySelector('#estForm').addEventListener('submit', e => {
  e.preventDefault();
  const tiempo = Number(document.querySelector('#tiempo').value);
  let precio = 0;
  let tiempoEnHoras = Math.trunc(tiempo / 60);
  let minutosFaltantes = tiempo % 60;
  
  if (tiempoEnHoras > 0) {
    precio = tiempoEnHoras * 15;
  }
  if (!(minutosFaltantes > 10)) {
    precio += 5;
  } else {
    precio += 15;
  }
  document.querySelector('#estResult').innerHTML = `El tiempo del uso del estacionamiento es de: ${tiempoEnHoras} horas y ${minutosFaltantes} minutos. Tu precio a pagar es de $${precio} pesos`
})

//Segundo algoritmo
document.querySelector('#superForm').addEventListener('submit', e => {
  e.preventDefault();
  let p = Number(document.querySelector('#precio').value);
  let cantidad = Number(document.querySelector('#cantidad').value);
  let descuento = 0;
  
  if (cantidad >= 5) {
    descuento = 0.20;
  } else if (cantidad >= 3) {
    descuento = 0.15;
  }
  let precioFinal = (p * cantidad) - (p * descuento);
  
  document.querySelector('#superResult').innerHTML = `Tu producto tiene un descuento de ${descuento * 100}% y el precio final es de: $${precioFinal.toFixed(2)} pesos`;
  
})

//tercer algoritmo
document.querySelector('#jubiForm').addEventListener('submit', e => {
  e.preventDefault();
  let edad = Number(document.querySelector('#edad').value);
  let hombre = document.querySelector('#hombre').checked;
  let mujer = document.querySelector('#mujer').checked;
  console.log({hombre, mujer})
  let edadDeJubilacion = 0;
  if (hombre) {
    edadDeJubilacion = 56;
  } else if (mujer) {
    edadDeJubilacion = 54;
  }
  
  if (edad >= edadDeJubilacion) {
    document.querySelector('#jubiResult').innerHTML = `De acuerdo a los datos que ingresaste tu ya cuentas con el derecho de jubilarte`
  } else {
    let fechaActual = new Date().getFullYear();
    let diferencia = (((fechaActual - edad) + edadDeJubilacion) - fechaActual);
    document.querySelector('#jubiResult').innerHTML = `De acuerdo a los datos que ingresaste tu aún no cuentas con el derecho de jubilarte, faltandote al menos ${diferencia} años para ello.`
  }
  
})
//cuarto algoritmo
document.querySelector('#aduanaForm').addEventListener('submit', e => {
  e.preventDefault();
  let valueMXN = Number(document.querySelector('#p').value);
  let dolar = 21.27;
  let valueUSD = valueMXN / dolar;
  if (valueUSD >= 1000) {
    document.querySelector('#aduaResult').innerHTML = `Tu producto sobrepasa el límte permitido de importación de manera libre, debes de contactar a un agente aduanal para poder realizar la correcta liberación de tu producto(con un pago de impuestos)`;
  } else if (valueUSD >= 50) {
    document.querySelector('#aduaResult').innerHTML = `Tu producto tiene un pago de impuestos del 16%. Estarías pagando aproximadamente $${valueMXN - (valueMXN * .16)} pesos`;
  } else {
    document.querySelector('#aduaResult').innerHTML = `Tu producto esta libre de impuestos. Pagarías la misma cantidad de: $${valueMXN} pesos.`
  }
})

//quinto algoritmo
document.querySelector('#perimetroForm').addEventListener('submit', e => {
  e.preventDefault();
  let typeTrian = Number(document.querySelector('#type').value);
  let div = document.querySelector('#formSelected');
  if (typeTrian === 1) {
    div.innerHTML = `
    <p>Has elegido el triangulo equilatero. Por favor proporciona el valor de un lado del triangulo para poder calcular su perimetro:</p>
    <input class="input" type="number" id="pe" placeholder="Lado...">
    <button class="button__form" onclick="perimetroEquilatero()">Calcular</button>
    `
  } else if (typeTrian === 2) {
    div.innerHTML = `
    <p>Has elegido el triangulo isosceles. Por favor proporciona el valor de un lado del triangulo y de la base para poder calcular su perimetro:</p>
    <input class="input" type="number" id="pi" placeholder="Lado...">
    <input class="input" type="number" id="pib" placeholder="Base...">
    <button class="button__form" onclick="perimetroIsosceles()">Calcular</button>
    `
  } else if (typeTrian === 3) {
    div.innerHTML = `
    <p>Has elegido el triangulo isosceles. Por favor proporciona el valor de un lado del triangulo y de la base para poder calcular su perimetro:</p>
    <input class="input" type="number" id="pe1" placeholder="Lado 1...">
    <input class="input" type="number" id="pe2" placeholder="Lado 2...">
    <input class="input" type="number" id="pe3" placeholder="Lado 3...">
    <button class="button__form" onclick="perimetroEscaleno()">Calcular</button>
    `
  }
})

function perimetroEquilatero() {
  let h = Number(document.querySelector('#pe').value);
  let perimetro = h * 3;
  document.querySelector('#periResult').innerHTML = `El valor del perimetro es de: ${perimetro} u.`
}

function perimetroIsosceles() {
  let h = Number(document.querySelector('#pi').value);
  let b = Number(document.querySelector('#pib').value);
  let perimetro = 2 * h + b;
  document.querySelector('#periResult').innerHTML = `El valor del perimetro es de: ${perimetro} u.`
}
function perimetroEscaleno() {
  let l1 = Number(document.querySelector('#pe1').value);
  let l2 = Number(document.querySelector('#pe2').value);
  let l3 = Number(document.querySelector('#pe3').value);
  let perimetro = l1 + l2 + l3;
  document.querySelector('#periResult').innerHTML = `El valor del perimetro es de: ${perimetro} u.`
}