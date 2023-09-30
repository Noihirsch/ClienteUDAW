//Modifica el programa 4 que utilizaba ifelse para que realice la misma operación pero utilizando un switch

function newVersionEx4() {
    do {
    let respuesta = prompt("Introduce una edad");
    switch (true){
        case ((respuesta >= 0) && (respuesta <= 12)): alert("Niño"); break;
        case ((respuesta >= 13) && (respuesta <= 26)): alert("Jóven"); break;
        case ((respuesta >=27) && (respuesta <= 60)): alert("Adulto"); break;
        default: alert("Jubilado"); break;
        }
    } while (respuesta < 0);

}

newVersionEx4();


