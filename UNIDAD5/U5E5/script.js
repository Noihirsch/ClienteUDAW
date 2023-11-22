window.addEventListener("load",iniciar);
function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaNombreEInterprete() {
    var nombre = document.getElementById("nombre");
    var interprete = document.getElementById("interprete");
    limpiarError(nombre);
    if (nombre.value == "" || interprete.value=="") {
        alert("El campo no puede ser vacío");
        error(nombre);
        return false;
    }

    if (nombre.value.length>=20 ||interprete.value.length>=20 ){
        alert("El campo tiene un nombre muy largo.");
        error(nombre);
        return false;
    }
    return true;
}

function validaFecha() {

    var anyo = document.getElementById("anyo").value;

    var anyoValidar = new Date(anyo);
    if (isNaN(anyoValidar)) {
        alert("El año es incorrecto");
        return false;
    }
    return true;
}

function validaLocalizacion() {
    var localizacion = document.getElementById("localizacion");
    if (!localizacion.isInteger() || localizacion<0) {
        alert("Debe ser un valor válido");
        return false;
    }
    return true;
}


function validar(e) {
    if (validaNombreEInterprete() && validaFecha() && validaLocalizacion() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}


function error(elemento) {
    elemento.className = "error";
    elemento.focus();
}


function limpiarError(elemento) {
    elemento.className = "";
}

