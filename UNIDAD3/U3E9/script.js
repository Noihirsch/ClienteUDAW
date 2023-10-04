// Estamos implementando una funcionalidad en nuestra aplicación de creación de NIFs y NIE y necesitamos una calculadora de la letra de control..
// – Los NIFs están formados por 8 dígitos y una letra de control.
// -Los NIEs están formados por una letra (X, Y o Z), 7 dígitos y una letra de control.
// enlace donde se explica cómo calcular ese dígito de control.
// Necesitamos un formulario con dos campos: en el primero se introducen los dígitos del NIF o NIE y en el segundo debería aparecer la letra correspondiente.

let numId;
numId = document.getElementById("dni").value;
var charID = document.getElementById("char").value;
let total = 0;
var opc;
function calChar (){
    
    for (let i = 0; i<numID.length(); i++){
        total = total + numID.charAt(i);
    }
    opc = total % 23;

    switch(opc){
        case 0: return "T";
        case 1:return "R";
        case 2:return "W";
        case 3:return "A";
        case 4:return "G";
        case 5: return "M";
        case 6: return "Y";
        case 7:return "F";
        case 8: return "P";
        case 9:return "D";
        case 10:return "X";
        case 11:return "B";
        case 12:return "N";
        case 13:return "J";
        case 14:return "Z";
        case 15:return "S";
        case 16:return "Q";
        case 17:return "V";
        case 18:return "H";
        case 19:return "L";
        case 20:return "C";
        case 21:return "K";
        case 22:return "E";
    }

}
calChar();

