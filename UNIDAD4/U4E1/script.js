// Vamos a gestionar una lista de países haciendo uso de Arrays. 
// Cuando el usuario cargue la página, se cargarán las opciones:
// Mostrar el número de países.
// Mostrar listado de países (y le preguntará si quiere mostrarlos en el orden que se encuentran en el array, del revés u ordenados alfabéticamente).
// Añadir un país (y le preguntará si quiere añadir al principio o al final).
// Borrar un país (y le preguntará si quiere borrar al principio o al final).
// Consultar un país (y le preguntará si quiere consultar por posición o por nombre).
let countries = ["españa", "alemania", "italia", "portugal"];
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
    let newCountry = prompt("1. Al principio 2. Al final")
    newCountry = prompt("Nombre del país:");
    newCountry.toLowerCase();
    if (newCountry != null && !countries.includes(newCountry)) {
        countries.push(newCountry);
        showCountries();
        countCountries();
        console.log("Se ha añadido" + newCountry);
    }
    
    else console.log("No se ha podido añadir el país");

}

function deleteCountry(){
    let deleteCountry = prompt("1. Por posición 2. Por nombre");
    switch(deleteCountry){
        case "1":
            let i = prompt("Inserte la posición en el array");
            i = parseInt(i);
            countries.splice(i, 1);
            showCountries();
            countCountries();
            console.log("Se ha borrado " + deleteCountry);
            break;
        case "2":
            deleteCountry = prompt("Inserte nombre del país a borrar");
            deleteCountry.toLowerCase();
            if (deleteCountry != null && countries.includes(deleteCountry)) {
                let i = countries.indexOf(deleteCountry);
                countries.splice(i, 1);
                showCountries();
                countCountries();
                console.log("Se ha borrado " + deleteCountry);
            }
            break;
        default:
            console.log("Opción inválida");
        }

    

}


    countCountries(); 

