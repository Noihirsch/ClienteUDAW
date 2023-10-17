// Controlar el tiempo de vida de una ventana emergente: Crea una ventana
//  emergente y permite al usuario cerrarla, si el usuario no la cierra se 
//  ha de cerrar a los 3 segundos de manera automática.

function createWindow() {
   newWindow = window.open();
 }
 
 function closeAutomatically(){
     if (!newWindow.closed){
         setTimeout(function() { newWindow.close(); }, 3000);
     }
 }
 
 let newWindow; // Declarar la variable fuera de las funciones para que sea accesible en ambos lugares
 
 createWindow();
 closeAutomatically();
 