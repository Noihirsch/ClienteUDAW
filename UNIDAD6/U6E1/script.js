import Tarea from "./tarea";

window.addEventListener("load", inicio);
allMyTasks = [];

function inicio() {
    document.getElementById("add").addEventListener("click", addTask);
    }

function addTask(texto, realizada){
    new Tarea = Tarea(texto, realizada);
    var parrafo = document.createElement("p");
    }

