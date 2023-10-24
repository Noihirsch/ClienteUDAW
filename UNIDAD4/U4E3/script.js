// Nombre;Localidad;Cuota
// Laura;Santander;50
// Álvaro;Castro;50
// Igor;Castro;60
// Ivan;Santander;40
// Mónica;Zamora;30
// Javi;Bilbao;30
// David;Bilbao;50
// A partir del mismo, el usuario podrá elegir del menú: Todos los clientes: se mostrará una tabla con los valores que están en la variable anterior.
// Usuarios de una provincia: y a partir de la provincia introducida por el usuario se mostrarán en una tabla los nombres y cuotas de las personas que viven en esa provincia.
// Usuarios que tengan una cuota mayor que un valor: y se mostrarán en una tabla los nombres de usuario, provincias y cuotas de aquellos que tienen una cuota superior al valor introducido por el usuario (valora cuál es el mejor modo de hacerlo).


class Cliente {
    constructor(nombre, localidad, cuota){
        this.nombre = nombre;
        this.localidad = localidad;
        this.cuota = cuota;
    }
}
//NOTA NO FUNCIONAN LAS FUNCIONES CUANDO SE HACE IMPORT

    let c1 = new Cliente('Laura', 'Santander', 50);
    let c2 = new Cliente('Alvaro', 'Castro', 50);
    let c3 = new Cliente('Igor', 'Castro', 60);
    let c4 = new Cliente('Ivan', 'Santander', 40);
    let c5 = new Cliente('Monica', 'Zamora', 30);
    let c6 = new Cliente('Javi', 'Bilbao', 30);
    let c7 = new Cliente('David', 'Bilbao', 50);

    let misClientes = [c1, c2, c3, c4, c5, c6, c7];

    function showAllClients(){
        const tableBody = document.querySelector("#tabla tbody");
        if (tableBody) {
          tableBody.innerHTML = misClientes.map(cliente => `<tr><td>${cliente.nombre}</td><td>${cliente.localidad}</td><td>${cliente.cuota}</td></tr>`).join('');
        } else {
          console.error('Table body not found.');
        }
      }
      
function searchByProvincia() {
    let provincia = document.getElementById('provId').value;
    let filteredClients = misClientes.filter(cliente => cliente.localidad === provincia);
    if (filteredClients) {
        const tableBody = document.querySelector("#tabla tbody");
        tableBody.innerHTML = filteredClients.map(cliente => `<tr><td>${cliente.nombre}</td><td>${cliente.localidad}</td><td>${cliente.cuota}</td></tr>`).join('');

    }
    console.log(filteredClients);
  }

  function searchByCuota() {
    let cuota = document.getElementById('cuotaId').value;
    let filteredClients = misClientes.filter(cliente => cliente.cuota > cuota);
    if (filteredClients) {
        const tableBody = document.querySelector("#tabla tbody");
        tableBody.innerHTML = filteredClients.map(cliente => `<tr><td>${cliente.nombre}</td><td>${cliente.localidad}</td><td>${cliente.cuota}</td></tr>`).join('');

    }
    console.log(filteredClients);
  }

  document.addEventListener("DOMContentLoaded", function() {
    showAllClients(); 
  });