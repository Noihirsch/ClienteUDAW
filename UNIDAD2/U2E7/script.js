//Crea un control parental para que no se pueda entrar en una página.
//Se pedirá al usuario que escriba el apellido del primer presidente de la democracia. (si no sabes quién fue, busca en Google)
//Para guardar un valor del usuario utilizamos el siguiente código:
//var respuesta = prompt (“Mensaje”);
//Mientras el usuario no introduzca el valor correcto, el mensaje seguirá saliendo.
//Comenta el código con los comentarios que estimes necesarios.



function verifEdad(){
    let quest = '¿Cuál es el apellido del primer presidente de la democracia?'
    do{ (prompt(quest)) }while (quest.toLocaleLowerCase != 'suárez')
}

verifEdad();


