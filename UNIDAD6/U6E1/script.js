
const input = document.querySelector("input");
const botonAniadir = document.querySelector(".add-button");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

allMyTareas = [];

botonAniadir.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(1);

  const nombreTarea = input.value;

  if (nombreTarea !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = nombreTarea;

    li.appendChild(p);
    li.appendChild(addBorrar());
    ul.appendChild(li);

    let t1 = new Tarea(nombreTarea.value);
    allMyTareas.push(t1);
    input.value = "";
    empty.style.display = "none";
  }
});

function addBorrar() {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.className = "delete-button";

  deleteButton.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteButton;
}



