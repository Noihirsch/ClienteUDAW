//Redirigir a una página de error personalizada:
//Crea una función que redirija a una página de 
//error personalizada cuando ocurra un error. Al
//usuario se le ha de presentar una ventana de confirmación
//(confirm) y en el caso de que conteste que no mostrará
//una página indicando el error.

function redirectToError() {
    let ans = prompt("¿Cuánto es 2+2");
    ans= parseInt(ans); 
    if (ans ==! 4){
        location.replace("UNIDAD3/U3E10/error.html");
    }
    else alert("Correcto!");
}

redirectToError();