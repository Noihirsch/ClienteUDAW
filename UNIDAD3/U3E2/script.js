//Crea un programa que pida el día y el mes de tu cumpleaños y 
//muestre los años en que tu cumpleaños va a caer en domingo
 //desde el año actual hasta el año 2100.

 function birthdaysOnSunday(){
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    
    

    for (year=2002; year<=2100; year++) {
        let cumpleanyos = new Date(year,mes-1,dia);
        if(cumpleanyos.getDay()===0){
           document.write(cumpleanyos.toString());
           document.write("<br>");
        }

        }
    }