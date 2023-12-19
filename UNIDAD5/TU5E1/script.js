//no código html
//hacer var intentos envío formulario con innerhtml
//NOMBRES Y APELLIDOS ROJO SI MAL

// Create form
window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaNombre() {
    var elemento = document.getElementById("nombre");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "Debe introducir un nombre")
        }
        if (elemento.validity.patternMismatch) {
            error2(elemento, "El nombre no se corresponde con el patrón");
        }
        return false;
    }
    return true;
}

function validaApellido() {
    var elemento = document.getElementById("apellido");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "Debe introducir un apellido")
        }
        if (elemento.validity.patternMismatch) {
            error2(elemento, "El apellido no se corresponde con el patrón");
        }
        //error(elemento);
        return false;
    }
    return true;
}


function validaApellido() {
    var elemento = document.getElementById("nif");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "Debes introducir un NIF")
        }
        if (elemento.validity.patternMismatch) {
            error2(elemento, "El NIF introducido no es válido");
        }
        //error(elemento);
        return false;
    }
    return true;
}


function validaEmail() {
    var elemento = document.getElementById("email");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "Debe introducir un email")
        }
        if (elemento.validity.patternMismatch) {
            error2(elemento, "El NIF introducido no es válido");
        }


        return false;
    }
    return true;
}

function validaTelefono() {
    var elemento = document.getElementById("telefono");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "Debe introducir un teléfono")
        }
        if (elemento.validity.patternMismatch) {
            error2(elemento, "El telefono debe tener 9 numeros");
        } 
        return false;
    }
    return true;
}

function validar(e) {
    borrarError();
    if (validaNombre() && validaEdad() && validaTelefono() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
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

function borrarError() {
    var formulario = document.forms[0];
    for (var i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].className = "";
    }
}

