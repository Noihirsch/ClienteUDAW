window.onload = iniciar;


document.getElementById("iniciar").onclick = iniciar;


function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaNombre() {
    var elemento = document.getElementById("nombre");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error(elemento, "Introduce tu nombre");
            return false;
        }
    }
    return true;
}

function validaNumeroCorreo() {
    let isNumero = false;
    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var elemento = document.getElementById("movilmail");

    if (correoRegex.test(elemento.value)) {
        isNumero=true;
        if (isNumero == true){
            if (isNaN(elemento.value)) {
                error2(elemento, "Indica tu dirección de email o teléfono móvil");
                return false;
        }
        return true;
    }
    return true;
}
}

function validaContrasenya() {

    var elemento1 = document.getElementById("contrasenya");
    var elemento2 = document.getElementById("contrasenya2");
    if (elemento1.length<6){
        error(elemento, "Mínimo de 6 caracteres obligatorios");
        return false;
    }
    if (elemento2!==elemento1){
        error3(elemento, "Las contraseñas no coinciden");
        return false;
    }
    return true;
}

function validar(e) {
    borrarError();
    if (validaNombre() && validaNumeroCorreo() && validaContrasenya()) {
        return true
    } else {
        e.preventDefault();
        return false;
    }
}

function error(elemento) {
    document.getElementById("mensajeError").innerHTML = elemento.validationMessage;
    elemento.className = "error";
    elemento.focus();
}

function error2(elemento, mensaje) {
    document.getElementById("mensajeError").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
}

function error3(elemento, mensaje) {
    document.getElementById("mensajeError").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
}

function borrarError() {
    var formulario = document.forms[0];
    for (var i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].className = "";
    }
}



