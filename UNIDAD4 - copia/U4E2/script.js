// EJERCICIO 2
// Haz un programa que pregunte una letra de la A a la Z. Tras ello 
// te dirá cuantos DNIs de 3 cifras (del 001 al 999) tienen esa letra y
//  los meterá en un array, tras ello te mostrará el listado de todos 
//  los DNIs que tienen esa letra.

let dniChars = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

let char;

function howManyDniHaveChar(){
    let char ="A";
    let a = 0;
    let b = 0;
    let c = 1;
    let val;
    const dni = [a, b, c];


    for (let a = 0; a <= 9; a++) {
        for (let b = 0; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                dni.push([a, b, c]);
                val = (a + b +c) / 23;
                if (parseInt(val) === dniChars.indexOf(char)){
                    console.log(dni);
                }
            }
        }
    } 
}

howManyDniHaveChar();