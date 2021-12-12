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
document.querySelector("#powForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let numero = Number(document.querySelector("#numero").value);
  let potencia = Number(document.querySelector("#potencia").value);
  let numeroFinal = 1;
  while (potencia > 0) {
    numeroFinal = numeroFinal * numero;
    potencia--;
  }
  document.querySelector(
    "#powResult"
  ).innerHTML = `El valor de la elevación es de: ${numeroFinal}`;
});
//Segundo algoritmo
//Ni modo a invadir la UI, nel :v ya me di ideas de como
document.querySelector("#rangeForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let numeros = document
    .querySelector("#valores")
    .value.split(",")
    .map((item) => Number(item));
  let x = 0;
  let valueMin = Infinity;
  let valueMax = -Infinity;
  while (x < numeros.length) {
    if (numeros[x] > valueMax) {
      valueMax = numeros[x];
    } else if (numeros[x] < valueMin) {
      valueMin = numeros[x];
    }
    x++;
  }
  document.querySelector(
    "#rangeResult"
  ).innerHTML = `El número más pequeño de esa lista es el ${valueMin} y el número más grande es el ${valueMax}.`;
});

//Tercer algoritmo
let data = 0;
document.querySelector("#repForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let numeroDealumnos = Number(document.querySelector("#alumnos").value);
  let calificacionMinima = Number(document.querySelector("#aprobacion").value);
  let calificaciones = [];
  let x = 0;

  while (x < numeroDealumnos) {
    let calificacion = Number(
      prompt(`Ingresa la calificación del alumno ${x + 1}: `)
    );
    calificaciones = [...calificaciones, calificacion];
    x++;
  }
  document.querySelector("#repResults").innerHTML = `
  <p>Los datos han sido capturados</p>
  <p>Da click en el botón para iniciar el analisis.</p>
  <button onclick="getInformation()" class="button__form">Iniciar</button>
  `;
  data = {
    calificacionMinima,
    calificaciones,
  };
  return data;
});
function getInformation() {
  let {calificaciones, calificacionMinima} = data;
  //Promedio general del grupo
  let sum = calificaciones.reduce((acc, currentItem) => {
    return (acc += currentItem);
  }, 0);
  let media = sum / calificaciones.length;
  //Número de aprobados, pudo funcionar esta pero va una mejor :v
  // let reprobados = calificaciones.reduce((acc, currentItem) => {
  //   return currentItem < calificacionMinima ? acc += 1 : acc;
  // }, 0)

  //Reprobados
  let reprobados = calificaciones.filter((item) => calificacionMinima > item);
  //Aprobados
  let aprobados = calificaciones.filter((item) => calificacionMinima <= item);
  //calificacion maxima y minima
  let min = Infinity;
  let max = -Infinity;
  let x = 0;
  while (x < calificaciones.length) {
    if (calificaciones[x] > max) {
      max = calificaciones[x];
    } else if (calificaciones[x] < min) {
      min = calificaciones[x];
    }
    x++;
  }
  //Modas
  let muestraOrdenada = calificaciones.reduce((acc, currentItem) => {
    if (!acc[currentItem]) {
      acc[currentItem] = 1;
    } else {
      acc[currentItem] += 1;
    }
    return acc;
  }, {});
  // valor mas aparecido
  const valores = Object.values(muestraOrdenada);
  // asi haya más valores iguales va a retornar el primero que encuentre
  const valorDeLaModa = Math.max.apply(null, valores);
  const indexDeLaModa = valores.indexOf(valorDeLaModa);
  const moda = Object.keys(muestraOrdenada)[indexDeLaModa];
  console.log(moda);
  //Mostrar información
  const divInformation = document.createElement("div");
  divInformation.innerHTML = `
    <p>El promedio del grupo: ${media}</p>
    <p>La califación más obtenida fue ${moda} con ${valorDeLaModa} alumnos </p>
    <p>Alumno con el promedio más alto: ${max}</p>
    <p>Alumno con el promedio más bajo: ${min}</p>
    <p>Numero de aprobados: ${aprobados.length}</p>
    <p>Numero de reprobados: ${reprobados.length}</p>
  `;
  document
    .querySelector("#repResults")
    .insertAdjacentElement("afterend", divInformation);
}

//Cuarto algoritmo
document.querySelector('#parForm').addEventListener('submit', e => {
  e.preventDefault();
  let numero = Number(document.querySelector('#numeroPar').value);
  let x = 1;

  while (x <= numero) {
    if (x % 2 === 0) {
      document.querySelector('#parResults').innerHTML += '<p>' + x + '</p>';
    }
  x++;
  }
})

//Quinto Algoritmo
document.querySelector('#ultimoForm').addEventListener('submit', e => {
  e.preventDefault();
  let text = document.querySelector('#mensaje').value;
  let veces = document.querySelector('#veces').value;
  let x = 0;

  while (x < Number(veces)) {
    document.querySelector('#ultimoResults').innerHTML += `<p>${text}</p>`;
    x++;
  }
})
//al fin jajajajajajaja