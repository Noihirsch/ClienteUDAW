    class Disco {
    constructor(nombre, interprete, anyo, genero) {
        this.nombre = nombre;
        this.interprete = interprete;
        this.anyo = anyo;
        this.genero = genero;
        this.localizacion = 0;
        this.prestado = false;
        this.caratula = "imagen.png";
}

    changeLocalizacion(nuevaLocalizacion){
    this.localizacion = nuevaLocalizacion;
}

    changePrestado(){
    this.prestado= true;
}

    showInfo(Disco){
      return `Nombre: ${this.nombre}, 
      Interprete: ${this.interprete},
      Año: ${this.anyo}, 
      Genero: ${this.genero}, 
      Localizacion: ${this.localizacion}, 
      Prestado: ${this.prestado}, 
      Carátula: ${this.caratula}`;  
}
    }

    let disco1= new Disco("Black Holes and Revelations", "Muse", "2006", "Rock");
    let disco2= new Disco("The Resistance", "Muse", "2009", "Rock");
    

export {Disco}

