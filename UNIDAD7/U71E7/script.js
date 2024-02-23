function mostrarPilotos() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var pilotosJSON = JSON.parse(this.responseText);
        var str = '<select id="equipos">';
        pilotosJSON.piloto.forEach(function (piloto) {
          str +='<option value="' + piloto.equipo + '">' + piloto.equipo + "</option>";
        });
        str += "</select>";
        document.getElementById("pilotos").innerHTML = str;
        document
          .getElementById("equipos")
          .addEventListener("change", obtenerDatos);
      }
    };
    xhr.open("GET", "pilotos.json", true);
    xhr.send();
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    mostrarPilotos();
    obtenerDatos(); 
  });
  
  function obtenerDatos() {
    fetch('pilotos.json')
      .then((res) => res.json())
      .then((data) => {
        let output = "<h2>Equipos</h2>";
        output += "<table border='1'>";
        output += "<tr><th>Nombre</th><th>Equipo</th><th>Numero</th><th>Nacionalidad</th></tr>";
  
        var equipoSeleccionado = document.getElementById("equipos").value;
  
        data.piloto.forEach(function (piloto) {
            output += `
              <tr>
                <td>${piloto.nombre}</td>
                <td>${piloto.equipo}</td>
                <td>${piloto.numero}</td>
                <td>${piloto.nacionalidad}</td>
              </tr>
            `;
          }
        );
  
        output += "</table>";
        document.getElementById("datos").innerHTML = output;
      })
      .catch((error) => console.error("Error fetching data:", error));
  }
  