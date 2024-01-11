
var generos=  ["Rock" , "Pop", "Punk", "Indie"];

var br = document.createElement("br"); 
var form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", "submit.php");

var NOMBRE = document.createElement("input");
NOMBRE.setAttribute("type", "text");
NOMBRE.setAttribute("id", "name");
NOMBRE.setAttribute("placeholder", "Nombre del disco");

var INT = document.createElement("interprete");
INT.setAttribute("type", "text");
INT.setAttribute("id", "interprete");
INT.setAttribute("placeholder", "Intérprete");

var ANYO = document.createElement("anyo");
ANYO.setAttribute("type","text");
ANYO.setAttribute("id", "interprete");
ANYO.setAttribute("placeholder", "Año");

var GENERO = Document.createElement("select");
GENERO.id = "genero";
GENERO.name = "genero";
GENERO.required = true;

for (var i = 0; i < generos.length; i++) {
    var opcion = document.createElement("generos");
    opcion.value = generos[i].toLowerCase();
    opcion.text = generos[i];
    selectElement.appendChild(opcion);
}

var LOC = document.createElement("localizacion");
LOC.setAttribute("type","text");
LOC.setAttribute("id", "localizacion");
LOC.setAttribute("placeholder", "Localización");

