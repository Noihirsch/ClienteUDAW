// Estamos implementando una funcionalidad en nuestra aplicación de creación de NIFs y NIE y necesitamos una calculadora de la letra de control..
// – Los NIFs están formados por 8 dígitos y una letra de control.
// -Los NIEs están formados por una letra (X, Y o Z), 7 dígitos y una letra de control.
// enlace donde se explica cómo calcular ese dígito de control.
// Necesitamos un formulario con dos campos: en el primero se introducen los dígitos del NIF o NIE y en el segundo debería aparecer la letra correspondiente.

let dniNum = document.getElementById("dniNum").value;
var charID = document.getElementById("char").value;
let total = 0;
var opc;

document.addEventListener("DOMContentLoaded", function() {
    function calChar() {
        let dni = document.getElementById("dniNum").value;
        // rest of your code
    }

    // Call the calChar function when the button is clicked
    document.getElementById("calButton").addEventListener("click", calChar);
});
function calChar (){
    
    for (let i = 0; i<dni.length; i++){
        total = total + dni.charAt(i);
    }
    opc = total % 23;
    if (opc == 0){ console.log("T") };
    if (opc == 1){ console.log("R") };
    if (opc == 2){ console.log("W") };
    if (opc == 3){ console.log("A") };
    if (opc == 4){ console.log("G") };
    if (opc == 5){ console.log("M") };
    if (opc == 6){ console.log("Y") };
    if (opc == 7){ console.log("F") };
    if (opc == 8){ console.log("P") };
    if (opc == 9){ console.log("D") };
    if (opc == 10){ console.log('X') };
    if (opc == 11){ console.log('B') };
    if (opc == 12){ console.log('N') };
    if (opc == 13){ console.log('J') };
    if (opc == 14){ console.log('Z') };
    if (opc == 15){ console.log('S') };
    if (opc == 16){ console.log('Q') };
    if (opc == 17){ console.log('V') };
    if (opc == 18){ console.log('H') };
    if (opc == 19){ console.log('L') };
    if (opc == 20){ console.log ('C') };
    if (opc == 21){ console.log ('K') };
    if (opc == 22){ console.log ('E') };
}
calChar();

