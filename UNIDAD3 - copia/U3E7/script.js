// Realizar un programa que, pasados 2 segundos, nos muestre una vez la fecha actual del sistema. 
// Solucionarlo con los dos métodos mencionados en el encabezado del objeto Window.

let timeoutTime;

function updateDate() {
    showDate(); // Update the date
    timeoutTime = setTimeout(updateDate, 2000); // Schedule the next update in 2 seconds
}

function showDate(){
    let currentDate = new Date();
    document.getElementById("currentDate").innerHTML = currentDate;
}


function stopTimeout(){
    clearTimeout(timeoutTime);
}