// //VALIDACION.JS
// //SELECCION DEL FORMULARIO


// //Conociendo el id

// var formulario = document.getElementById("miFormulario");
// var formulario2 = document.forms["miFormulario"];


// //Conociendo el número de formulario dentro de la página
// var formulario3 = document.getElementsByTagName("form")[0];
// var formulario4 = document.forms[0];

//TODO LO DE ARRIBA NO VALE PA NADA PORQUE NO HA CARGADO EL HTML!!!!!!!!!!!!
//SELECCIONAR ELEMENTOS DE UN FORMULARIO
//.elements[] Devuelve un array con todos los input del formulario
//getElementById("idElemento") Devuelve un elemento con un id determinado
//getElementsByTagName("etiqueta") Devuelve un array con elementos de un tipo de etiqueta (input, select, etc.)
//getElementsByName("nombre") Devuelve un array con elementos que tienen el mismo nombre (por ejemplo, radiobutton).


//window.onload = iniciar; //Sin paréntesis
//TODO on load: modo tradicional gestión de evento. No está bien mezclar event listeners y los loads. 
//TODO no va acorde a w3c
window.addEventListener("load", iniciar); 

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}


function validaNombre() {
    var elemento = document.getElementById("nombre");
    limpiarError(elemento);
    if (elemento.value == "") {
        alert("El campo no puede ser vacío");
        error(elemento);
        return false;
    }
    return true;
}


function validaTelefono() {
    var elemento = document.getElementById("telefono");

    //comprueba q sólo sean números. le da igual si va vacía la variable.
    if (isNaN(elemento.value)) {
        alert("El campo teléfono tiene que ser numérico");
        return false;
    }
    return true;
}


function validaFecha() {
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;


    var fecha = new Date(ano, mes, dia);
    if (isNaN(fecha)) {
        alert("Los campos de la fecha son incorrectos");
        return false;
    }
    return true;
}


function validaCheck() {
    var campoCheck = document.getElementById("mayor");
    if (!campoCheck.checked) {
        alert("Debes ser mayor de edad");
        return false
    }
    return true;
}


function validar(e) {
    if (validaNombre() && validaTelefono() && validaFecha() && validaCheck() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

// La función e.preventDefault(); se utiliza para evitar que ocurra el comportamiento predeterminado de un evento. 
// Aquí, e generalmente representa el objeto de evento pasado como argumento a la función manejadora del evento 
// (por ejemplo, una función de devolución de llamada en JavaScript). Llamar a e.preventDefault(); dentro de esta 
// función evita que el evento siga su curso normal y permite al programador tomar el control de lo que sucede a
//  continuación. Por ejemplo, se puede utilizar para validar un formulario antes de enviar datos al servidor o para 
//  realizar acciones personalizadas en lugar de la navegación estándar al hacer clic en un enlace.


function error(elemento) {
    elemento.className = "error";
    elemento.focus();
}


function limpiarError(elemento) {
    elemento.className = "";
}
