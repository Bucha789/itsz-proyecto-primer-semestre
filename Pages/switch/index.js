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
document.querySelector("#pesoForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let planeta = document.querySelector("#planeta").value;
  let pesoTierra = Number(document.querySelector("#peso").value);
  let gravedad = 0;
  switch (planeta) {
    case "Mercurio":
      gravedad = 3.7;
      break;
    case "Venus":
      gravedad = 8.85;
      break;
    case "Marte":
      gravedad = 3.72;
      break;
    case "Jupiter":
      gravedad = 26.39;
      break;
    case "Saturno":
      gravedad = 11.47;
      break;
    case "Urano":
      gravedad = 11.43;
      break;
    case "Neptuno":
      gravedad = 11.07;
      break;
    case "Pluton":
      gravedad = 0.62;
      break;
    default:
      gravedad = 1;
  }

  let pesoEnPlaneta = (pesoTierra / 9.81) * gravedad;

  document.querySelector(
    "#pesoResult"
  ).innerHTML = `En ${planeta} pesarías aproximadamente ${pesoEnPlaneta.toFixed(
    2
  )}kg.`;
});
//Segundo algoritmo
document.querySelector("#poligonForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let option = document.querySelector("#poligono").value;
  let div = document.querySelector("#poligonResult");
  switch (option) {
    case "1":
      div.innerHTML = ` 
        <h3>Area de un Cuadrado</h3>
        <p>Por favor, ingresa la medida de un lado del cuadrado para poder hacer el calculo.</p>
        <span>Lado:</span>
        <input type="number" id="cuadrado" />
        <button onclick="areaCuadrado()">Saber</button>
        <p id="cuaResult"></p>
        `;
      break;
    case "2":
      div.innerHTML = `
          <h3>Area de un Rectangulo</h3>
          <p>Por favor, ingresa la medida de la base y altura del rectangulo para poder hacer el calculo.</p>
          <span>Base:</span>
          <input type="number" id="baseRec" />
          <span>Altura:</span>
          <input type="number" id="altuRec" />
          <button onclick="areaRectangulo()">Saber</button>
          <p id="recResult"></p>
          `;
      break;
    case "3":
      div.innerHTML = `
        <h3>Area de un Circulo</h3>
        <p>Por favor, ingresa la medida de un lado del cuadrado para poder hacer el calculo.</p>
        <span>Radio:</span>
        <input type="number" id="radio" />
        <button onclick="areaCirculo()">Saber</button>
        <p id="cirResult"></p>
        `;
      break;
    case "4":
      div.innerHTML = `
        <h3>Area de un Triangulo Equilatero</h3>
        <p>Por favor, ingresa la medida de un lado del Triangulo para poder hacer el calculo.</p>
        <span>Lado:</span>
        <input type="number" id="triangulo" />
        <button onclick="areaTriangulo()">Saber</button>
        <p id="trianResult"></p>
        `;
      break;
    default:
      div.innerHTML = 'Ha ocurrido algo jaja...'
  }
});
function areaCuadrado() {
  let value = Number(document.querySelector('#cuadrado').value);
  let area = value * value;
  document.querySelector('#cuaResult').innerHTML = `El valor del area del Cuadrado es de: ${area.toFixed(2)} u².`
}
const areaRectangulo = () => {
  let base = Number(document.querySelector('#baseRec').value);
  let altura = Number(document.querySelector('#altuRec').value);
  let area = base * altura;
  document.querySelector('#recResult').innerHTML = `El valor del area del Rectangulo es de: ${area.toFixed(2)} u².`
}

function areaCirculo() {
  let value = Number(document.querySelector('#radio').value);
  let area = Math.PI * (value ** 2);
  document.querySelector('#cirResult').innerHTML = `El valor del area del Círculo es de: ${area.toFixed(2)} u².`
}

const areaTriangulo = () => {
  let base = Number(document.querySelector('#triangulo').value);
  let area = (base * base) / 2;
  document.querySelector('#trianResult').innerHTML = `El valor del area del Triangulo es de: ${area.toFixed(2)} u².`
}

//Tercer algoritmo
document.querySelector("#divisasForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const amount = Number(document.querySelector("#valor").value);
  const currencieSelected = document.querySelector("#divisa").value;
  const currencieData = await getDataCurrences(currencieSelected);
  let res = amount * currencieData.value;
  document.querySelector(
    "#divisaResult"
  ).innerHTML = `El valor es: $${res.toFixed(2)}MXN. Actualizado a: <span>${
    currencieData.date
  } </span>`;
});

function getDataCurrences(currence = "USD") {
  const API_URL = `https://api.frankfurter.app/latest?from=${currence}&to=MXN`;
  return fetch(API_URL)
    .then((resquest) => resquest.json())
    .then((res) => {
      const { rates, date } = res;
      const { MXN } = rates;
      return {
        date: date,
        value: MXN,
      };
    })
    .catch((err) => console.error(err));
}
//Cuarto algoritmo
document.querySelector("#metroForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let option = document.querySelector("#medida").value;
  let metros = Number(document.querySelector("#medicion").value);
  let valorAmultiplicar = 0;
  switch (option) {
    case "1":
      valorAmultiplicar = 2.64;
      break;
    case "2":
      valorAmultiplicar = 30.48;
      break;
    case "3":
      valorAmultiplicar = 91.4;
      break;
    default:
      valorAmultiplicar = 1;
  }
  let producto = metros * valorAmultiplicar;
  document.querySelector("#metroResult").innerHTML = `${producto.toFixed(
    2
  )} metros.`;
});

//Quinto algoritmo
document.querySelector("#mruForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let option = document.querySelector("#tipo").value;
  let velocidad = Number(document.querySelector("#velocidad").value) || 0;
  let tiempo = Number(document.querySelector("#tiempo").value) || 0;
  let distancia = Number(document.querySelector("#distancia").value) || 0;
  let result = 0;
  switch (option) {
    case "velocidad":
      result = distancia / tiempo;
      document.querySelector(
        "#mruResult"
      ).innerHTML = `El valor de la velocidad es de: ${result.toFixed(2)}m/s.`;
      break;
    case "tiempo":
      result = distancia / velocidad;
      document.querySelector(
        "#mruResult"
      ).innerHTML = `El valor de la tiempo es de: ${result.toFixed(2)}s.`;
      break;
    case "distancia":
      result = tiempo * velocidad;
      document.querySelector(
        "#mruResult"
      ).innerHTML = `El valor de la tiempo es de: ${result.toFixed(2)}mts.`;
      break;
    default:
      result = 1;
  }
});
document.querySelector("#tipo").addEventListener("change", (e) => {
  const inputsOfForm = document.querySelectorAll('input[data-disabled="1"]');
  const elementSelected = e.target.value;
  inputsOfForm.forEach((item) => {
    if (item.id !== elementSelected) {
      item.removeAttribute("disabled");
    } else {
      item.setAttribute("disabled", "");
    }
  });
});
