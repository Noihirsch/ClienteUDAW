//DIANA GONCALVES. UDAW2
//CLIENTE. UNIDAD 3. EJERCICIO 1. 

//Crea un programa que muestre el número de días que quedan desde hoy hasta el fin de curso (por ejemplo, el 22 de junio).


const tiempoActual = Date.now();
const hoy = new Date(date1);

const fin = new Date('Jun 22 2024');

console.log(hoy);
console.log(fin);
function calcularFinDeCurso(hoy, fin) {
    let dias = ((fin.getTime()) - (hoy.getTime()));
    dias = ((dias / 86400000));
    console.log(dias);

    return dias;
  }

calcularFinDeCurso();