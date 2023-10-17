// Realizar un programa que, pasados 2 segundos, nos muestre una vez la fecha actual del sistema. 
// Solucionarlo con los dos métodos mencionados en el encabezado del objeto Window.

let intervalTime;

//SEGUNDA FORMA (Set interval)
function startInterval(){

do{ intervalTime= setInterval(showDate, 2000);} while (i<0);
function showDate(){
    let currentDate = new Date();
    document.getElementById("currentDate").innerHTML = currentDate;}
}


function stopInterval(){
    clearInterval(intervalTime);
}