//	Realiza un programa que solicite, un nombre de una jugadora de fútbol de la selección 
//y que responda si está convocada o no para el siguiente partido. La lista de convocadas es:
// Luisa, Maria, Carlota, Ana, Martina y Claudia.
//Resuélvelo de dos maneras distintas.


function mostrarMetodo(){
    let x = prompt('Bienvenido, Fernando. ¿Qué método deseas emplear? (escribe 1 para usar el primero.)')
    if (x == '1'){
        verConvocada1();
    }
    else verConvocada2();
}

mostrarMetodo();

function verConvocada1(){
let convocadas = ["Luisa", "Maria", "Carlota", "Ana", "Martina", "Claudia"];
let quest = prompt('Nombre de la jugadora')

if (quest == convocadas.includes(quest)){
    alert(quest + " está convocada");
}

else alert("no convocada")
}



function verConvocada2(){
    let convocadas = ["Luisa", "Maria", "Carlota", "Ana", "Martina", "Claudia"];
    let quest = prompt('Nombre de la jugadora')

    for (j=0; j<= convocadas.size(); i++){
        if (quest === convocadas[i]){
            alert( quest + "está convocada");
        }
    alert (quest + "no está convocada");
}
}