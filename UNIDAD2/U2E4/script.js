//Crea un programa que pida al usuario que introduzca una edad y muestre el siguiente mensaje en función del número introducido:
//0-12: Niño
//13-26: Joven
//27-60: Adulto
//>60: Jubilado
//Para guardar un valor del usuario utilizamos el siguiente código:let respuesta = prompt (“Mensaje”);
//También comprobará que no se meta un número menor de 0. Comenta el código con los comentarios que estimes necesarios.

//Diana Goncalves. UDAW2. 
//Cliente. Unidad 2. Ejercicio 4.

let respuesta = prompt("Introduce una edad");
if(respuesta >= 0 && respuesta <= 12){
    alert ("Niño");
}


