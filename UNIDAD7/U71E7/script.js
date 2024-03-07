function mostrarPilotosPorNombre() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var pilotosJSON = JSON.parse(this.responseText);
      var select = document.createElement('select');
      select.id = "nombres";
      pilotosJSON.piloto.forEach(function (piloto) {
        var option = document.createElement('option');
        option.value = piloto.nombre;
        option.textContent = piloto.nombre;
        select.appendChild(option);
      });
      var selectsElement = document.getElementById("selects");
      while (selectsElement.firstChild) {
        selectsElement.removeChild(selectsElement.firstChild);
      }
      selectsElement.appendChild(select);
      select.addEventListener("change", obtenerDatosPorNombre);
    }
  };
  xhr.open("GET", "pilotos.json", true);
  xhr.send();
}

function mostrarPilotosPorEquipo() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        var pilotosJSON = JSON.parse(this.responseText);
        var select = document.createElement('select');
        select.id = "equipos";
        pilotosJSON.piloto.forEach(function (piloto) {
          var option = document.createElement('option');
          option.value = piloto.equipo;
          option.textContent = piloto.equipo;
          select.appendChild(option);
        });

        var selectsElement = document.getElementById("equipos");
        selectsElement.innerHTML = ''; // Clear the dropdown
        selectsElement.appendChild(select);
        select.addEventListener("change", obtenerDatosPorEquipo);
      } else {
        console.error("Error fetching data. Status code:", this.status);
      }
    }
  };
  xhr.open("GET", "pilotos.json", true);
  xhr.send();
}

document.addEventListener("DOMContentLoaded", function () {
  mostrarPilotosPorNombre();
  mostrarPilotosPorEquipo();
});


  
  function obtenerDatosPorNombre() {
    document.getElementById("datos").innerHTML = '';
  
    fetch('pilotos.json')
      .then((res) => res.json())
      .then((data) => {
        let output = "<h2>Equipos</h2>";
        output += "<table border='1'>";
        output += "<tr><th>Nombre</th><th>Equipo</th><th>Numero</th><th>Nacionalidad</th></tr>";
  
        var nombresSelect = document.getElementById("nombres");
        var nombresSeleccionados = Array.from(nombresSelect.selectedOptions).map(option => option.value);
  
        data.piloto.forEach(function (piloto) {
          if (nombresSeleccionados.includes(piloto.nombre)) {
            output += `
              <tr>
                <td>${piloto.nombre}</td>
                <td>${piloto.equipo}</td>
                <td>${piloto.numero}</td>
                <td>${piloto.nacionalidad}</td>
              </tr>
            `;
          }
        });
  
        output += "</table>";
        document.getElementById("datos").innerHTML = output;
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  function obtenerDatosPorEquipo() {
    document.getElementById("datos").innerHTML = '';

    fetch('pilotos.json')
      .then((res) => res.json())
      .then((data) => {
        let output = "<h2>Equipos</h2>";
        output += "<table border='1'>";
        output += "<tr><th>Nombre</th><th>Equipo</th><th>Numero</th><th>Nacionalidad</th></tr>";
  
        var equiposSelect = document.getElementById("equipos"); 
        var equiposSeleccionados = Array.from(equiposSelect.selectedOptions).map(option => option.value);
        
  
        data.piloto.forEach(function (piloto) {
          if (equiposSeleccionados.includes(piloto.equipo)) {
            output += `
              <tr>
                <td>${piloto.nombre}</td>
                <td>${piloto.equipo}</td>
                <td>${piloto.numero}</td>
                <td>${piloto.nacionalidad}</td>
              </tr>
            `;
          }
        });
  
        output += "</table>";
        document.getElementById("datos").innerHTML = output;
      })
      .catch((error) => console.error("Error fetching data:", error));
  }