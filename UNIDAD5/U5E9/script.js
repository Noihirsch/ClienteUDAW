window.onload = iniciar;


document.getElementById("iniciar").onclick = iniciar;


function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

let localData = localStorage.getItem("user");
if (localData) {
  document.getElementById("name").value = localData;
}


function validaNombre() {
    var elemento = document.getElementById("nombre");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error(elemento, "<b>!</b>Introduce tu nombre");
            return false;
        }
    }

    if (!elemento.checkValidity()) {
        if (elemento.validity.patternMismatch){
            error(elemento, "<b>!</b> Es necesario que el nombre tenga entre 1 y 40 caracteres")
        }
    }
    return true;
}

function validaNumeroCorreo() {
    var elemento = document.getElementById("movilmail");
    var valor = elemento.value.trim();

    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var numeroRegex = /^(\+34|0034|34)?[6789]\d{8}$/;

    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "<b>!</b> Debe introducir tus datos");
            return false;
        } else if (!correoRegex.test(valor) && !numeroRegex.test(valor)) {
            error2(elemento, "<b>!</b> Formato de correo o número no válido");
            return false;
        } else if (numeroRegex.test(valor)) {
            isNumero = true;
            console.log("<b>!</b> Usuario introdujo un número de teléfono.");
            return true;
        }
        else return true;
    }

}

function validaContrasenya() {
  var elemento1 = document.getElementById("contrasenya");
  var elemento2 = document.getElementById("contrasenya2");
  if (!elemento1.checkValidity()) {
    if (elemento1.validity.valueMissing || elemento2.validity.valueMissing) {
      error(elemento, "<b>!</b> Introduce tu contraseña");
    }

    if (elemento.validity.patternMismatch) {
        error(
          elemento,
          "<b>!</b> El número de caracteres mínimos es seis."
        );
      }

    if (elemento2.value !== elemento1.value) {
      error3(elemento, "Las contraseñas no coinciden");
      return false;
    }
    return true;
  }
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
    document.getElementById("errornombre").innerHTML = elemento.validationMessage;
    elemento.className = "error";
    elemento.focus();
}

function error1(elemento, mensaje) {
    document.getElementById("errorcorreo").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
}

function error2(elemento, mensaje) {
    document.getElementById("errorc1").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
}

function error3(elemento, mensaje) {
    document.getElementById("errorc2").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
}


function borrarError() {
    var formulario = document.forms[0];
    for (var i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].className = "";
    }
}



