import {Disco} from './disco.js'


const discoPrueba1 = new Disco("Demon Days", "Gorillaz", 2005, "Rock");
const discoPrueba2 = new Disco("Black Holes and Revelations", "Muse", 2006, "Rock");

let catalogo = [discoPrueba1,discoPrueba2];

document.getElementById('newDisk').addEventListener('submit', function(event){
    event.preventDefault();

    let nombre = prompt("Nombre del disco");
    let interprete= prompt("Nombre del grupo");
    let anyo = prompt("Año");
    let genero = prompt("Genero");
    let localizacion = prompt("Localización");
    let caratula = prompt("Caratula");

    let newDisk = new Disco(nombre, interprete, anyo, genero, localizacion, caratula);
    catalogo.push(newDisk);
});

document.getElementById('countDiscos').addEventListener('click', function(){
    alert(`Número de discos: ${catalogo.length()}`);
});

document.getElementById('showTableDiscos').addEventListener('click', function(){    const tableBody = document.querySelector("#tabla tbody");
    if (tableBody) {
      tableBody.innerHTML = catalogo.map(disco => `<tr><td>${disco.nombre}</td><td>${disco.interprete}</td><td>${disco.anyo}</td><td>${disco.genero}</td><td>${disco.localizacion}</td><td>${disco.prestado}</td><td>${disco.caratula}</td></tr>`).join('');
    } else {
      console.error('Table body not found.');
    }
});

document.getElementById('showInterval').addEventListener('show', function(event){
    event.preventDefault();
  let anyo1 = document.getElementById('anyo1').value;
  let anyo2 = document.getElementById('anyo2').value;
  let anyosInBetween = discoteca.filter(disco => disco.anyo > anyo1 && disco.anyo < anyo2);
  if (anyosInBetween) {
      const tableBody = document.querySelector("#tabla tbody");
      tableBody.innerHTML = anyosInBetween.map(disco => `<tr><td>${disco.nombre}</td><td>${disco.interprete}</td><td>${disco.anyo}</td></tr>`).join('');
 }});


  document.getElementById('mostrarTabla').addEventListener('click', function(){
    let f= prompt("Mostrar en: 1. Normal 2. Orden diverso 3. Alfabeticamente")
    let tabla = `<table border="1"><tr><th>Posicion</th><th>Nombre</th><th>Grupo</th><th>Año</th><th>Tipo</th><th>Localización</th><th>Prestado</th><th>Carátula</th></tr>`;

    switch (f){
        case "1":
            catalogo =catalogo;
            break;
        case "2":
            catalogo = catalogo.slice().reverse(); 
            break;
        case "3":
            discosOrdenados = discos.sort((a, b) => a.nombre.localeCompare(b.nombre)); //Poniendo el sort con parámetros que comparan los nombres, podemos hacer que se ordenen alfabéticamente según el nombre de cada disco del array discos
            break;
        default: alert("No has introducido una opción válida"); return;
    }
    
    let i = 0;
    discosOrdenados.forEach(disco => {
        i++; 
        tabla += `<tr><td>` + i + `</td><td>${disco.nombre}</td><td>${disco.grupo}</td><td>${disco.year}</td><td>${disco.tipo}</td><td>${disco.localizacion}</td><td>${disco.prestado}</td><td>${disco.caratula}</td></tr>`;   
    });
    
    tabla += `</table>`;
    
    document.getElementById('discos').innerHTML = tabla;
});
