function enviar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}


function validaNombre() {
    let elemento = document.getElementById("fecha");
    let DATE_REGEX = ^(0[1-9]|[1-2]\d|3[01])/(0[1-9]|1[012])/(\d{4})$

    if (!elemento.checkValidity()) {
        if (elemento.value.valueMissing) {
            error2(elemento, "No se ha introducido una fecha")
        }
        if (elemento.validity.patternMismatch) {
            error2(elemento, "El nombre debe tener entre 2 y 15 caracteres");
        }
        //error(elemento);
        return false;
    }
    return true;
}
