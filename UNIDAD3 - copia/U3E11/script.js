
// Obtener la ubicación actual del usuario: Utiliza el método navigator.geolocation
//  para obtener la ubicación actual del usuario y muestra las coordenadas en la consola.


document.querySelector('.localization').addEventListener('click', showLocalization);



if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
}
else {
    document.getElementById("geolocalizacion".innerHTML ="");

}

function showPosition(position){
    (console.log("Latitud" + position.coords.latitude + "longitud " + position.oords.longitude) )
}