
  export default class Disco {
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

let d1 = new Disco("Black Holes and Revelations", "Muse", "2006", "Rock");
let d2 = new Disco("The Resistance", "Muse", "2009", "Rock");
let discoteca = [d1, d2];
