
// EJERCICIO 9 (objeto String)
// Estamos implementando una funcionalidad en nuestra aplicación de creación de NIFs y NIE y necesitamos una calculadora de la letra de control..
// – Los NIFs están formados por 8 dígitos y una letra de control.
// -Los NIEs están formados por una letra (X, Y o Z), 7 dígitos y una letra de control.
// enlace donde se explica cómo calcular ese dígito de control.
// Necesitamos un formulario con dos campos: en el primero se introducen los dígitos del NIF o NIE y en el segundo debería aparecer la letra correspondiente.

function calcChar(){
    let total = 0;
    let d = document.getElementById('digits').value();
    for (let numero = 0; numero < d.length; numero){
        total = total + d.charAt(numero);
        total = total%23;
        if (d.length ==7) {
            if (total==0){ console.log("A")};
            if (total==1){ console.log("B")};
            if (total==2){ console.log("C")};
        }
        else {
        console.log(total);
     }
    }

}


calcChar();
