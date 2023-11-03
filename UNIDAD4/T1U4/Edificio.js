
class Edificio (calle, numero, codigo, planta){
this.calle = calle;
this.numero = numero;
this.codigo = codigo;
this.planta = planta;
edificioA[0][0] = "propietario1"
edificioB[0][1]= "propietario2"
edificioA[0][2]="propietario3"

	agregar(nplantas, npuertas){
	this.nplantas	= this.nplantas + nplantas;
	this.npuertas	= this.npuertas + npuertas;
	this.datos		= Array();
	var num = 0;
	for(var i = 1; i<=numplantas; i++){
		for(let j = 1; j<=npuertas; j++){
			console.log("Planta " + i + "Puerta" + j)
            num++;
				}
			}
        }


    }

	