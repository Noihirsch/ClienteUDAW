import Tarea from "./tarea";
window.addEventListener("load", inicio);

AllTareas = [];

function inicio() {
    document.getElementById("add").addEventListener("click", añadirTarea);
}

function añadirTarea () {
    var tareaInput = document.getElementById("task");
    let newTarea = new Tarea(tareaInput.value);

    var texto = document.createTextNode(document.getElementById("<ul>dsd</ul>").value);
    parrafo.appendChild(texto);


    tareaInput.value = "";
}




