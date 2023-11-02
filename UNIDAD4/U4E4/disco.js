    class Disco {
    constructor(nombre, interprete, anyo, genero, localizacion = 0, prestado = false, caratula = 'imagen.png') {
        this.nombre = nombre;
        this.interprete = interprete;
        this.anyo = anyo;
        this.genero = genero;
        this.localizacion = localizacion;
        this.prestado = prestado;
        this.caratula = caratula;
}

    changeLocalizacion(nuevaLocalizacion){
    this.localizacion = nuevaLocalizacion;
}

    changePrestado(){
    this.prestado= true;
}

    showInfo(Disco){
    let info = `Disco: ${this.nombre} Interprete: ${this.interprete} Año: ${this.color} Género ${this.genero} Localización: ${this.localizacion} Prestado ${this.prestado} Caratula: ${this.caratula}`;
    document.getElementById("infoDisco").innerHTML = info;
}
    }

    let disco1= new Disco("Black Holes and Revelations", "Muse", "2006", "Rock");
    let disco2= new Disco("The Resistance", "Muse", "2009", "Rock");
    const discoteca = [disco1, disco2];
function countDiscos(){
    let countres = discoteca.length;
    document.getElementById("countres").innerHTML = countres;
}

function fillTabla(){
    const tableBody = document.querySelector("#tabla tbody");
    if (tableBody) {
      tableBody.innerHTML = discoteca.map(disco => `<tr><td>${disco.nombre}</td><td>${disco.interprete}</td><td>${disco.anyo}</td><td>${disco.genero}</td><td>${disco.localizacion}</td><td>${disco.prestado}</td><td>${disco.caratula}</td></tr>`).join('');
    } else {
      console.error('Table body not found.');
    }
}

function showTabla() {
  const tableBody = document.querySelector("#tabla tbody");
  tableBody.classList.toggle('tabla');
}

function disksInBetween() {
  let anyo1 = document.getElementById('anyo1').value;
  let anyo2 = document.getElementById('anyo2').value;
  let anyosInBetween = discoteca.filter(disco => disco.anyo > anyo1 && disco.anyo < anyo2);
  if (anyosInBetween) {
      const tableBody = document.querySelector("#tabla tbody");
      tableBody.innerHTML = anyosInBetween.map(disco => `<tr><td>${disco.nombre}</td><td>${disco.interprete}</td><td>${disco.anyo}</td></tr>`).join('');
  }
}

