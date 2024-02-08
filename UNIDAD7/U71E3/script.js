const CARTAS = document.querySelectorAll(".memory-card");
const CARTA_IMG = document.querySelectorAll(".front-face");
const SPAN = document.querySelectorAll(".mail");

let personas = [];
let contador = 0;

// Acceso y Gestión de los datos de la API
function cargarXML(xml) {
  let documentoXML = xml.responseXML;
  let resultadosXML = documentoXML.getElementsByTagName("results");

  for (let i = 0; i < resultadosXML.length - 1; i++) {
    let imagenesXML = resultadosXML[i].getElementsByTagName("picture")[0];
    let imagenXML = imagenesXML.getElementsByTagName("medium")[0].textContent;

    let persona = {
      imagen: imagenXML,
      mail: resultadosXML[i].getElementsByTagName("email")[0].textContent,
    };

    personas.push(persona);
  }

  gestionImagenes();
}

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    cargarXML(this);
  }
};
xhr.open("GET", "https://randomuser.me/api/?results=6&format=XML", true);
xhr.send();

function gestionImagenes() {
  CARTA_IMG.forEach((imagen) => {
    let tipoimagen = imagen.getAttribute("data-value");

    switch (tipoimagen) {
      case "0":
        imagen.src = personas[Number.parseInt(tipoimagen)].imagen;
        break;
      case "1":
        imagen.src = personas[Number.parseInt(tipoimagen)].imagen;
        break;
      case "2":
        imagen.src = personas[Number.parseInt(tipoimagen)].imagen;
        break;
      case "3":
        imagen.src = personas[Number.parseInt(tipoimagen)].imagen;
        break;
      case "4":
        imagen.src = personas[Number.parseInt(tipoimagen)].imagen;
        break;
      case "5":
        imagen.src = personas[Number.parseInt(tipoimagen)].imagen;
        break;
    }
    SPAN[contador].innerHTML = personas[Number.parseInt(tipoimagen)].mail;

    contador++;
  });
}

// Código del 5.6
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let cont = 0;

function flipCard(e) {
  if (lockBoard) return;
  if (e.target.parentNode.firstElementChild === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = e.target.parentNode.firstElementChild;

    return;
  }

  secondCard = e.target.parentNode.firstElementChild;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.src === secondCard.src;

  if (isMatch) {
    disableCARTAS();
    cont++;
    document.getElementById("aciertos").innerHTML =
      "Número de aciertos: " + cont;
  } else {
    unflipCARTAS();
  }
}

function disableCARTAS() {
  firstCard.parentNode.removeEventListener("click", flipCard);
  secondCard.parentNode.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCARTAS() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.parentNode.classList.remove("flip");
    secondCard.parentNode.classList.remove("flip");

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  CARTAS.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

CARTAS.forEach((card) => card.addEventListener("click", flipCard));
