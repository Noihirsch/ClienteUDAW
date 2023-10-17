//DIANA GONCALVES. UDAW2
//CLIENTE. UNIDAD 3. EJERCICIO 1. 

//Crea un programa que muestre el número de días que quedan desde hoy hasta el fin de curso (por ejemplo, el 22 de junio).

let hoy = new Date();
var fin = new Date("2024/06/22");
dif = fin.getTime() - hoy.getTime();
var dif = Math.ceil(dif / (1000 * 3600 * 24));
alert("Quedan " + dif + " días para el fin de curso");
