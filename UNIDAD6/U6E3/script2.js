import Disco from "./Disco";
const storedDiscos = [
    new Disco("Plastic Beach", "Gorillaz", 2010, "Hip hop", 1, false, "imagen.png"),
    new Disco ("Siamese Dreams", "Smashing Pumpkins", 1993, "Rock", 2, true, "imagen.png")             
];

let nombreSelect = document.getElementById("nombre");
let interpreteSelect = document.getElementById("interprete");
let anioSelect= document.getElementById("anio");
let generoSelect = document.getElementById("genero");
let localizacionSelect = document.getElementById("localizacion");
let caratulaSelect = document.getElementById("caratula");

function generarForm() {
    var generos = ["Rock", "Pop", "Punk", "Indie"];

    var br = document.createElement("br");
    var form = document.createElement("form");
    form.setAttribute("method", "");

    var NameLabel = document.createElement("label");
    NameLabel.innerHTML = "Nombre";
    NameLabel.setAttribute("for", "name");

    var NOMBRE = document.createElement("input");
    NOMBRE.setAttribute("type", "text");
    NOMBRE.setAttribute("id", "nombre");
    NOMBRE.setAttribute("placeholder", "Nombre del disco");

    var InterpreteLabel = document.createElement("label");
    InterpreteLabel.innerHTML = "Intérprete";
    InterpreteLabel.setAttribute("for", "interprete");

    var INT = document.createElement("input");
    INT.setAttribute("type", "text");
    INT.setAttribute("id", "interprete");
    INT.setAttribute("placeholder", "Intérprete");

    var AnyoLabel = document.createElement("label");
    AnyoLabel.innerHTML = "Año de publicación";
    AnyoLabel.setAttribute("for", "anio");

    var ANYO = document.createElement("input");
    ANYO.setAttribute("type", "text");
    ANYO.setAttribute("id", "anio");
    ANYO.setAttribute("placeholder", "Año");

    var GeneroLabel = document.createElement("label");
    GeneroLabel.innerHTML = "Género";
    GeneroLabel.setAttribute("for", "genero");

    var GENERO = document.createElement("select");
    GENERO.id = "genero";
    GENERO.name = "genero";
    GENERO.required = true;

    for (var i = 0; i < generos.length; i++) {
        var opcion = document.createElement("option");
        opcion.value = generos[i].toLowerCase();
        opcion.text = generos[i];
        GENERO.appendChild(opcion);
    }

    var LocalizacionLabel = document.createElement("label");
    LocalizacionLabel.innerHTML = "Localización";
    LocalizacionLabel.setAttribute("for", "localizacion");

    var LOC = document.createElement("input");
    LOC.setAttribute("type", "text");
    LOC.setAttribute("id", "localizacion");
    LOC.setAttribute("placeholder", "Localización");

    var prestadoLabel = document.createElement("label");
    prestadoLabel.innerHTML = "¿Prestado?";
    prestadoLabel.setAttribute("for", "prestado");

    var PR = document.createElement("input");
    PR.setAttribute("type", "checkbox");
    PR.setAttribute("id", "prestado");
    PR.setAttribute("name", "prestado");

    var CAR = document.createElement("input");
    CAR.setAttribute("type", "file");
    CAR.setAttribute("id", "caratula");
    CAR.setAttribute("placeholder", "Carátula");

    var BUT = document.createElement("button");
    BUT.setAttribute("type", "submit");
    BUT.setAttribute('id', "enviar");
    BUT.innerHTML = "Enviar datos";

    form.appendChild(NameLabel);
    form.appendChild(NOMBRE);
    form.appendChild(br.cloneNode());
    form.appendChild(InterpreteLabel);
    form.appendChild(INT);
    form.appendChild(br.cloneNode());
    form.appendChild(AnyoLabel);
    form.appendChild(ANYO);
    form.appendChild(br.cloneNode());
    form.appendChild(GeneroLabel);
    form.appendChild(GENERO);
    form.appendChild(br.cloneNode());
    form.appendChild(LocalizacionLabel);
    form.appendChild(LOC);
    form.appendChild(br.cloneNode());
    form.appendChild(prestadoLabel);
    form.appendChild(PR);
    form.appendChild(br.cloneNode());
    form.appendChild(CAR);
    form.appendChild(br.cloneNode());
    form.appendChild(BUT);


    form.id = "formDinamico";

    document.body.appendChild(form);

}

function enviar() {
    console.log("Enviando datos...");
    var miDisco = new Disco (NOMBRE, INT, ANYO , GENERO , LOC, PR, CAR);
    storedDiscos.push(miDisco);
    console.log("Disco creado y añadido");
    crearTabla();
 }

 function crearTabla(){
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");  
    var td6 = document.createElement("td");
    var td7 = document.createElement("td");

    

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    row.appendChild(td6);

 }

 document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("enviar").addEventListener("click", enviar);
});