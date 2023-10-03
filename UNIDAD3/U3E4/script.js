// EJERCICIO 4 (objeto Math)
// Crea un programa que pida al usuario el valor del radio y muestre por pantalla:
// El valor del radio.
// El valor del diámetro.
// El valor del perímetro de la circunferencia.
// El valor del área del círculo.
// El valor del área de la esfera.
// El valor del volumen de la esfera.
// • El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente.
// • Debes escribir al lado si son cm, o cm2, o cm3.
// Por ejemplo, si metes 5, deberías obtener: 5cm / 10 cm / 31,41 cm / 78,54 cm2 / 314,15 cm2 / 523,59 cm3.

function calculateGivenRadius() {
    let pi = Math.PI;
    let radius = document.getElementById("radius").value;

    document.write("Radio: " + radius + "<br>");
    document.write("Diametro: " + radius*2 + "<br>");
    document.write("Area: " + pi*(radius*2) + "<br>");
    document.write("Esfera: " + (4*pi*radius*2) + "<br>");
    document.write("Volúmen de la esfera: " + ((4/3)*pi*(radius**3)));

    }

