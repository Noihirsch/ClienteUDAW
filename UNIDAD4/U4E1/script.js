// Vamos a gestionar una lista de países haciendo uso de Arrays. 
// Cuando el usuario cargue la página, se cargarán las opciones:
// Mostrar el número de países.
// Mostrar listado de países (y le preguntará si quiere mostrarlos en el orden que se encuentran en el array, del revés u ordenados alfabéticamente).
// Añadir un país (y le preguntará si quiere añadir al principio o al final).
// Borrar un país (y le preguntará si quiere borrar al principio o al final).
// Consultar un país (y le preguntará si quiere consultar por posición o por nombre).
let countries = ["España", "Alemania", "Italia", "Portugal"];
function countCountries() {
    let value = countries.length;
    console.log(value);
    document.getElementById("countriesnumber").innerHTML = value;
}

function showCountries(){
    let order = prompt("¿En qué orden quieres mostrarlos? 1. Orden del array. 2. Orden del revés 3. Alfabéticamente");
    switch(order){
    case "1":
        document.getElementById('unsorted').innerHTML = countries;
        break;
    case "2":
        countries.reverse();
        document.getElementById('reverse').innerHTML = countries;
        break;
  
    case "3": 
        countries.sort();
        document.getElementById('alphabet').innerHTML = countries;
        break;
    
    default:
        console.log("Opción inválida");
    }
}
function newCountry(){
    let newCountry = prompt("Nombre del país:");
    if (newCountry != null && !countries.includes(newCountry)) {
        countries.push(newCountry);
    }

    else console.log("No se ha podido añadir el país");

}

function deleteCountry(){
    let deleteCountry = prompt("Nombre del país a borrar:");
    
    if (deleteCountry != null && countries.includes(deleteCountry)) {
        let i = countries.indexOf(deleteCountry);
        countries.splice(i);
    }
}


    countCountries(); 

