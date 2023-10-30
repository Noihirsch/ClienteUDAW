import Disco from './disco.js';
let d1 = new Disco("Black Holes and Revelations", "Muse", "2006", "Rock");
let d2 = new Disco("The Resistance", "Muse", "2009", "Rock");
let discoteca = [d1, d2];


function countDiscos(){
    let number = discoteca.length();
    document.getElementById("numberOfDisks").innerHTML = number;
    
}

function fillTabla(){
    const tableBody = document.querySelector("#tabla tbody");
    if (tableBody) {
      tableBody.innerHTML = discoteca.map(disco => `<tr><td>${disco.nombre}</td><td>${disco.interprete}</td><td>${disco.anyo}</td><td>${disco.genero}</td><td>${disco.localizacion}</td><td>${disco.prestado}</td><td>${disco.caratula}</td></tr>`).join('');
    } else {
      console.error('Table body not found.');
    }
}

function showTabla() {
  const tableBody = document.querySelector("#tabla tbody");
  tableBody.classList.toggle('tabla');
}

function disksInBetween() {
  let anyo1 = document.getElementById('anyo1').value;
  let anyo2 = document.getElementById('anyo2').value;
  let anyosInBetween = discoteca.filter(disco => disco.anyo > anyo1 && disco.anyo < anyo2);
  if (anyosInBetween) {
      const tableBody = document.querySelector("#tabla tbody");
      tableBody.innerHTML = anyosInBetween.map(disco => `<tr><td>${disco.nombre}</td><td>${disco.interprete}</td><td>${disco.anyo}</td></tr>`).join('');
  }
}
