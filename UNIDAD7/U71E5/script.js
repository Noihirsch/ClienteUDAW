AllTareas = [];

const lista = document.querySelector("#misTareas");

class Tarea {
  constructor(texto) {
    this.nombre = texto;
    this.realizada = false;
  }

  add() {
    const todoInput = document.querySelector("#myInput").value;
    if (todoInput == "") {
      alert("Tarea vacía. Inténtalo de nuevo.");
    } else {
      const t1 = new Tarea(todoInput);
    }
    AllTareas.unshift(t1);
    this.display;
    document.querySelector("#myInput").value = "";
  }
  
  done(i) {
    const index = AllTareas.findIndex((item) => item.id == x);
    console.log(AllTareas[index].realizada);
    AllTareas[index].realizada == false
      ? (AllTareas[index].realizada = true)
      : (AllTareas[index].realizada = false);
    this.display();
  }
  
  delete(j) {
    const index = AllTareas.findIndex((item) => item.id == z);
    AllTareas.splice(index, 1);
    this.display();
  }
  
  display() {
    this.ulElement.innerHTML = "";

    AllTareas.forEach((item) => {
      const li = document.createElement("li");
      const borrar = document.createElement("i");

      li.innerText = item.nombre;
      li.setAttribute("data-nombre", item.nombre);

      borrar.setAttribute("data-nombre", item.realizada);
      borrar.innerHTML = "BORRAR?";
    });
  }

}
