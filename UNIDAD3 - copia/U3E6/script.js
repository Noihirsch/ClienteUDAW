// Crea un programa que pida al usuario su nombre y apellidos (todo junto) y muestre:
// El tamaño del nombre más los apellidos (sin contar espacios).
// La cadena en minúsculas y en mayúsculas.
// Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga 
// Nombre: 
// Apellido 1: 
// Apellido 2:
// Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido.  Ej. Para Marcos Prado Fernández sería mpradof
// Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y de los dos apellidos: ej. MarPraFer


function operateWithName(){
    let myName = document.getElementById("name").value;
    let i=0;
    document.write("Largo: " + (myName.trim().length));
    document.write("<br> Mi nombre en minúsculas: " + myName.toLowerCase());
    document.write("<br> Mi nombre es mayúsculas: " + myName.toUpperCase());


    document.write("<br> Mi nombre es ")

     for (i=0; i<myName.length(); i++){
    	if (myName.charAt(i) !== " "){ 
            document.write(charAt(i));
        }
        else { 
            document.write("<br>");
        };
    	}
    }


operateWithName();


