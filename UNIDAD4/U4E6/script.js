let jugadores= ["Marcos, Luis, Pepe, Manuel, Lolo", "Marcos,Luis, Pepe, David, Antonio, Pedro"];
let convocados= "";
let partido1 = convocatorias[0].split(/,/g);
let partido2 = convocatorias[1].split(/,/g);


for (let i = 0; i < jugadores.length; i++) {
    for (let j = 0; j < partido2.length; i++){
        if (partido1[i] == partido2[j]){
           convocados = convocados + partido1[i] + ", ";
        }
        }
    }

    alert(convocados);