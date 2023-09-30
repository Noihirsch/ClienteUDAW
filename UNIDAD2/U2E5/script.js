// Crea un programa que genere un listado de horas que vayan desde las 9 hasta las 21:30 de 30 minutos en 30 minutos.
// En lugar de mostrar un alert, utiliza la instrucción document.write(“Mensaje”) que muestra los datos en el propio HTML.
// Ten en cuenta que tendrás que utilizar un for para las horas y (por ejemplo) una variable booleana que irá cambiando de true a false si es hora en punto u hora media.
// Comenta el código con los comentarios que estimes necesarios.

function createHours (){
    document.write("<ul>");
    for (let i = 9; i <=21; i++){
        document.write(`<li>${i}:00 am</li>`);
        document.write(`<li>${i}:30 am</li>`);
    }
    document.write("</ul>");

}

createHours();