// Realiza una web en la que el usuario pueda introducir el nombre de un ordenador con el siguiente formato:
// DOCXXXT
// 025PXXXT
// XXX sera un numero entre el 000 y el 252
// T puede ser A, B  o C
// Se le mostrará al usuario la siguiente dirección IP dependiendo de el nombre y de la letra T
// T= A  → 10.42.68.XXX
// T= B   → 10.42.69.XXX
// T= C   → 10.52.178.XXX


function generateName() {
let nameComp = document.getElementById('nameComp').value;
   let char = nameComp.charAt(nameComp.length - 1);
   let XXX = nameComp.substring(3, 6);
   let ip;
  
   switch (char) {
    case 'A':
        ip = `10.42.68.${XXX}`;
        console.log("ip generada");
        break;
    case 'B':
        ip = `10.42.69.${XXX}`;
        console.log("ip generada");
        break;
    case 'C':
        ip = `10.52.178.${X}`;
        console.log("ip generada");
        break;
    default:
        console.log("ip sin generar");
        break;
}
ip = document.getElementById('ip').innerHTML = ip;
  }
