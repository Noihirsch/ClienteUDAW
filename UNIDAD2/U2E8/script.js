
function verifEdad(){
    let quest = prompt('¿Cuál es el NOMBRE COMPLETO del primer presidente de la democracia?');
    let ans;
    let name = 'adolfo'
    let surname = 'suarez'

    do {
        prompt(quest);
        if (quest.toLocaleLowerCase == name) alert("“Te falta el NOMBRE"); 
        if (quest.toLocaleLowerCase == surname) alert("“Te falta el NOMBRE"); 
        } while (quest.toLocaleLowerCase != (name + ' ' + surname));

    alert ('correcto!');
}

verifEdad();