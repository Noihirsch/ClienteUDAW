  default class Player {
  constructor(nombre) {
    console.log("Player 1 created");
    this.nombre= nombre;
    this.fuerza= 1;
  }

  incrementarFuerza(){
    this.fuerza++;
  }

  verFuerza(){
    console.log(this.fuerza);
  }

  export Player;
}