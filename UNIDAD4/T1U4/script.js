import Edificio from './Edificio.js'

let edificioA = new Edificio("Garcia Prieto", 58, 15706);
let edificioB = new Edificio("Camino Caneiro", 29, 32004);
let edificioC = new Edificio("San Clemente", "s/n", 15705);


console.log(
    `El código postal del edificio A es: ${edificioA.imprimeCodigoPostal()}`
  );
  
  console.log(`La calle del edificio C es: ${edificioC.imprimeCalle()}`);
  
  console.log(
    `El edificio B está situado en la calle ${edificioB.imprimeCalle()} número ${edificioB.imprimeNumero()}`
  );
  edificioA.agregarPlantasYPuertas(2, 3);
  //Se mejorará el programa a mayores para que el input pueda incluir ambos parámetros en vez de en el que se encuentra el apartamento.
  edificioA.agregarPropietario("Jose Antonio Lopez", 1);
  edificioA.agregarPropietario("Luisa Martinez", 1);
  edificioA.agregarPropietario("Marta Castellón", 1);
  edificioA.agregarPropietario("Antonio Pereira", 2);
  
  edificioA.imprimePlantas();
  edificioA.agregarPlantasYPuertas(1, 3);
  edificioA.agregarPropietario("Pedro Meijide", 3);
  edificioA.imprimePlantas();