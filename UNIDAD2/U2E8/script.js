
// Modifica el ejercicio anterior de la siguiente forma:
// En primer lugar, se carga un prompt donde pregunta: “¿Cuál fue el primer presidente de la democracia española?”
// En caso de que el usuario introduzca mal nombre y apellido, muestre como mensaje: “ERROR. Inténtelo de nuevo. ¿Cuál fue el primer presidente de la democracia española?”
// En caso de que el usuario introduzca el nombre del presidente (solamente) el prompt muestre como mensaje “Te falta el apellido. ¿Cuál fue el primer presidente de la democracia española?”.
// En caso de que el usuario introduzca el apellido del presidente (solamente) el prompt muestre como mensaje “Te falta el nombre. ¿Cuál fue el primer presidente de la democracia española?”.
// Comenta el código con los comentarios que estimes necesarios.



function verifEdad() {
    let quest = '¿Cuál es el nombre del primer presidente de la democracia?';
    let name = "adolfo";
    let surname = "suárez";
    let ans;
    do { 
        ans = prompt(quest);
        if (ans==name) { prompt("Te falta el nombre " + quest);}
        if (ans==surname) { prompt("Te falta el apellido " + quest);}
    } while (ans.toLowerCase() !== (name + ' ' + surname));
}

verifEdad();