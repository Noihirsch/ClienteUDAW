export default class Edificio {
  constructor(calle, numero, codigo) {
    this.calle = calle;
    this.numero = numero;
    this.codigo = codigo;
    this.plantas = [];
    this.duenyos = [];
  }

  agregarPlantasYPuertas(np, npu) {
    //no guardo por par de datos, sino por un unico identificador en el arraylist.
    for (let j = 1; j <= np; j++) {
      for (let k = 1; k <= npu; k++) {
        let p = "Planta " + j + " Puerta " + k;
        this.plantas.push(p);
      }
    }
  }

  modificarNumero(numero) {
    this.numero = numero;
  }

  modificarCalle(calle) {
    this.calle = calle;
  }

  modificarCodigo(codigo) {
    this.codigo = codigo;
  }

  imprimeCalle() {
    return this.calle;
  }

  imprimeNumero() {
    return this.numero;
  }

  imprimeCodigoPostal() {
    return this.codigo;
  }

  agregarPropietario(duenyo, numeroPiso) {
    if (numeroPiso >= 1 && numeroPiso <= this.plantas.length) {
      alert(
        "El dueño de " + this.plantas[numeroPiso - 1] + " es ahora " + duenyo
      );
      this.duenyos.push(duenyo);
    } else {
      console.error("Número inválido");
    }
  }

  imprimePlantas() {
    for (let i = 0; i < this.plantas.length; i++) {
	  console.log("Dueño:" + this.duenyos[i]);
        console.log("Planta:" + this.plantas[i]);
        
      }
    }
  }
