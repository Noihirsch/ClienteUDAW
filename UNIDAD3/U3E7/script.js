// Realizar un programa que, pasados 2 segundos, nos muestre una vez la fecha actual del sistema. 
// Solucionarlo con los dos métodos mencionados en el encabezado del objeto Window.

var i =1000;

do{ setInterval(showDate, 2000);} while (i<0);
function showDate(){
    let currentDate = new Date();
    document.write(currentDate);
    document.write("<br>");

}


//forma 2 usando timeOut
// if (i>0){
//     setTimeout(showDate, 2000);
// }

// setTimeout(showDate, 2000);


