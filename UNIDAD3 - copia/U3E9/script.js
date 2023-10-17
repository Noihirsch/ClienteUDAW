
// EJERCICIO 9 (objeto String)
// Estamos implementando una funcionalidad en nuestra aplicación de creación de NIFs y NIE y necesitamos una calculadora de la letra de control..
// – Los NIFs están formados por 8 dígitos y una letra de control.
// -Los NIEs están formados por una letra (X, Y o Z), 7 dígitos y una letra de control.
// enlace donde se explica cómo calcular ese dígito de control.
// Necesitamos un formulario con dos campos: en el primero se introducen los dígitos del NIF o NIE y en el segundo debería aparecer la letra correspondiente.

let digits;

function calcChar(){
        let dniChars = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
        digits = document.getElementById("digits").value;

        digits = digits.replace("X", "0");
        digits = digits.replace("Y", "1");
        digits = digits.replace("Z", "2");

        let p = parseInt(digits) % 23;
        document.getElementById("dniChars").innerHTML = `${dniChars[p]}`;
}


