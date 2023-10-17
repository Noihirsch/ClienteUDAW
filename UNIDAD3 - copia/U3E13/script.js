// Crea una página web que tenga 3 botones (<button>), crear, parar y borrar. 
//     El botón crear mostrar una ventana de 500*200 y que se mueva automáticamente
//      de 10 px hacia la derecha y hacia abajo cada 100 milisegundos, cuando llegue
//       a la esquina inferior derecha deberá rebotar hacia la esquina superior izquierda.
//        El botón parar detendrá la ventana y el cerrar la eliminará.


// EJERCICIO 13 (Objeto Window, método setInterval())

// Crea una página web que tenga 3 botones (<button>), crear, parar y borrar. 
// El botón crear mostrar una ventana de 500*200 y que se mueva automáticamente
// de 10 px hacia la derecha y hacia abajo cada 100 milisegundos,
// cuando llegue a la esquina inferior derecha deberá rebotar hacia
// la esquina superior izquierda. El botón parar detendrá la ventana 
// y el cerrar la eliminará.

function createWindow(){
    let win = window.open('http://somelocation.com','mywin','width=500,height=500');
    moveWindow();
 }

 function moveWindow() {
     let x = 0;
     let y = 0;
     let a = 10;
     let b = 10;
   
     move = setInterval(function () {
       if ((x + 500 > window.outerWidth || x < 0) && (y + 200 > window.outerHeight || y < 0))
       {
         a = -a;
         b = -b;
     }
       x = x + a;
       y = y + a;
       win.moveTo(x, y);}, 100);
   }

 function stopWindow(){
     if (!window.close && window !== null)
     win.close();
 }
