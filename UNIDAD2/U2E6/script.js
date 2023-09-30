// Crea un programa que genere un listado de horas que vayan desde las 9 hasta las 21 de 5 minutos en 5 minutos.
// En lugar de mostrar un alert, utiliza la instrucción document.write(“Mensaje”) que muestra los datos en el propio HTML.
// Comenta el código con los comentarios que estimes necesarios.

function createHours5Min() {
    var hours = 12; 
    var decena = 0;
    var minutes =0;
    for (let i = 9; i<21; i++){
        for (minutes = 0; minutes<60; minutes++){
            if (minutes >= 10){
                document.write("<li>" + i + ":" + minutes + "</li>");
            }
            else  document.write("<li>" + i + ":0" + minutes + "</li>");
            minutes= minutes+4;
        }
    }
}


createHours5Min();