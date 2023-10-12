// Crea una página web que tenga 3 botones (<button>), crear, parar y borrar. 
//     El botón crear mostrar una ventana de 500*200 y que se mueva automáticamente
//      de 10 px hacia la derecha y hacia abajo cada 100 milisegundos, cuando llegue
//       a la esquina inferior derecha deberá rebotar hacia la esquina superior izquierda.
//        El botón parar detendrá la ventana y el cerrar la eliminará.


function createWindow(){
    //create a window and make it move automaitcally
    newWindow = window.open();
    resizeBy(500,200);
    
}

function moveWindow(){
    newWindow.moveBy(10,1000);

}

function stopWindow(){

}

function deleteWindow() {

}

createWindow();
setInterval(moveWindow, 10000);
let movingWindow;