// Haz un programa que reciba cadenas del tipo: 
// “nombre:apellidos:teléfono:email:codigopostal” y que te muestre: 
// ◦ El código postal. 
// ◦ Los apellidos 
// ◦ El email. 
// ◦ Suponiendo un formato de email “direccion@servidor” te muestre el servidor asociado.
// ◦ El teléfono.

let infoString = "diana:goncalves:digoncaldaw@gmail.com:601413433:";

let dataName = ["Nombre" , "Apellido", "Email", "Dominio", "Teléfono"];
let j=0;
let k=0;
let data = "";
function writeStrings(){
    for (let i=0; i<infoString.length+1; i++){
        if ((infoString.charAt(i) !== ":"  && infoString.charAt(i) !== "@") &&  j<=6){ 
            data = data + infoString.charAt(i);
        }
        
        else {
        data = document.write(dataName[j] + " : " + data);
        document.write("<br>");
        data="";
        j++;
        }
    }
     }
writeStrings();