//VALIDACION.JS
window.addEventListener("load",enviar);

function enviar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaFecha() {
    const regexDMA = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
    let elemento = document.getElementById("creationDate"); // Corrected variable name

    // SI ESTÁ VACÍA
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error(elemento);
            alert("La fecha está vacía");
            return false;
        }
        if (!elemento.value.match(regexDMA)) {
            error(elemento);
            alert("El formato de fecha no es el adecuado.");
            return false;
        }
    }
    return true;
}

function validaCodigoEmpleado() {
    let elemento = document.getElementById("codigoEmpleado");
    let patronCodigo = /^[A-Z]{2}[^A-Za-z0-9]{1}[0-9]{4}$/;
    if (patronCodigo.test(elemento.value)) {
        console.log("Valid empleado name");
        return true;
    } else {
        alert("Invalid empleado name");
        error(elemento);
        return false;
    }
}


function validaDestinatario() {
    let elemento = document.getElementById("destinatario");
    let patronDestinatario = /^[A-Z]{2,3}_[A-Za-z]+:[0-9]{4}$/;

    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error(elemento);
            alert("El destinatario está vacío");
            return false;
        }

        if (!patronDestinatario.test(elemento.value)) {
            alert("Invalid destinatario name");
            error(elemento);
            return false;
        } else {
            return true; // Added return true; here
        }
    }
}

function validaPeso() {
    var elemento = document.getElementById("peso");
    if (elemento.value <100 || elemento.value >5000) {
    console.log("El peso indicado no alcanza el mínimo y/o el máximo");
    error(elemento);
    return false;
    }
    console.log("Validado peso");
    return true;
    }
    


    function validaCuenta() {
        var elemento = document.getElementById("cuenta");
        let patronIban = /^[A-Z]{2}[0-9A-Za-z]{18}\d{20}$/;
    
        if (patronIban.test(elemento.value)) {
            console.log("No validado");
            error(elemento);
            return false;
        }
        return true;
    }
    
    function validar(e) {
        if (validaFecha() && validaCodigoEmpleado() && validaDestinatario() && validaPeso() && validaCuenta() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
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

