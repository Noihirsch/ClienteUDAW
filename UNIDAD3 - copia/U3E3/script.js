// EJERCICIO 3 (objeto Math)
// Crea un programa que pida al usuario que elija una opción del siguiente menú:
// Potencia.
// Raíz.
// Redondeo.
// Trigonometría.
// Si el usuario introduce 1, se le deberá pedir una base y un exponente y se mostrará el resultado en pantalla (La potencia de X elevado a Y es: )
// Si el usuario introduce 2, se le pedirá un número (no negativo) y se mostrará el resultado en pantalla (La raíz de X es: )
// Si el usuario introduce 3, se le pedirá un decimal por pantalla y se mostrará el redondeo al entero más próximo, al alta y a la baja.
// Si el usuario introduce 4, se le pedirá un ángulo (entre 0 y 360) y se le mostrarán por pantalla los valores trigonométricos del seno, coseno y tangente.

function calculate(){
   
    let var1;
    let var2;
    do{
        var option = prompt("Elige la operación a realizar:\n1-Potencia\n2-Raiz cuadrada\n3-Redondeo al entero más próximo \n4-Valores trigonométricos");
        switch(option){
        case '1': var1 = prompt("Base"); var2 = prompt("Exponente"); alert(var1**var2); //Math.pow(var1,var2);
        break;
        case '2': do{(var1= prompt("Número:"))} while(var1<0); alert(Math.sqrt(var1));
        break;
        case '3': (var1 = prompt("Número decimal:")); alert(Math.round(parseFloat(var1)));
        break;
        case '4': (var1 = prompt("Ángulo:")); alert("Seno " + Math.sin(var1)); alert("Coseno " + Math.cos(var1)); alert("Tangente " + Math.tan(var1));
        }
    } while (option > 0 && option <= 4);

    }
calculate();