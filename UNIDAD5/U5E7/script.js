window.onload = function() {
    document.getElementById("formulario").addEventListener("submit", validar, false);
};

function validaFecha() {
  let elemento = document.getElementById("fecha");
  let DATE_REGEX = /^(0[1-9]|[1-2]\d|3[01])\/(0[1-9]|1[012])\/(\d{4})$/;

  if (elemento.checkValidity()) {
    if (elemento.validity.valueMissing) {
      error2(elemento, "No se ha introducido una fecha.");
    }
    if (!elemento.validity.match(DATE_REGEX)) {
      error2(elemento, "La fecha introducida no es válida.");
    }
    //error(elemento);
    return false;
  }
  return true;
}

function validaEmpleado() {
  let elemento = document.getElementById("empleado");
  let EMPLEADO_REGEX = /^[A-Z]{2}\W\d{4}$/;

  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing) {
      error2(elemento, "No se ha introducido un código de empleado.");
    }
    if (!elemento.value.match(EMPLEADO_REGEX)) {
      error2(elemento, "El código de empleado es incorrecto.");
    }
    return false;
  }
  return true;
}

function validaDestinatario() {
  let elemento = document.getElementById("destinatario");
  let DESTINATARIO_REGEX = /^[A-Z]{2,3}_[A-Za-z]+:\d{4}$/;

  if (!elemento.checkValidity()) {
    if (elemento.value.valueMissing) {
      error2(elemento, "No se ha introducido un destinatario.");
    }
    if (!elemento.value.match(DESTINATARIO_REGEX)) {
      error2(elemento, "El código de destinatario es incorrecto.");
    }
    return false;
  }
  return true;
}

function validaPeso() {
  let elemento = document.getElementById("peso");
  let PESO_REGEX = /^(100|[1-9]\d{2}|[1-4]\d{3}|5000)$/;

  if (elemento.checkValidity()) {
    if (elemento.value.valueMissing) {
      error1(elemento, "No se ha introducido el peso.");
    }
    if (!elemento.value.match(PESO_REGEX)) {
      error2(elemento, "El peso es mayor/menor que el posible.");
    }
    return false;
  }
  return true;
}

function validaCuenta() {
  let elemento = document.getElementById("cuenta");
  let IBAN_REGEX = /^(ES\d{2}\d{4}\d{4}\d{1,10}|[A-Z]{4}\d{20})$/;

  if (!elemento.checkValidity()) {
    if (elemento.value.valueMissing) {
      error1(elemento, "No se ha introducido la cuenta");
    }
    if (IBAN_REGEX.test(elemento.value)) {
      return true;
    } else {
      error2(elemento, "El IBAN no es válido.");
      return false;
    }
  }
}

function validar(e) {
    borrarError();
    if (validaFecha() && validaEmpleado() && validaDestinatario()  && validaPeso() && validaCuenta() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
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




