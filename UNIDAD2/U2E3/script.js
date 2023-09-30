//Crea un programa en el que muestres el resultado de varias operaciones mediante alert, mostrando el texto exacto de la operación realizada y su resultado.
// Las operaciones a realizar son:
// 10 == 10
// 10 === 10
// 10 === 10.0
// “Laura” == “laura”
// “Laura” > “laura”
// “Laura” < “laura”
// “123” == 123
// “123” === 123
// parseInt(“123”) === 123
// Comenta el código con los comentarios que estimes necesarios.


var operacion1 = 10==10;
var operacion2 = 10===10;
var operacion3 = 10==10.0;
var operacion4 = "Laura"=="laura";
var operacion5 = "Laura" > "laura";
var operacion6 = "Laura" < "laura";
var operacion7 = "123" == 123;
var operacion8 = "123" === 123;
var operacion9 = parseInt("123") === 123;


alert ("La operación 10==10 es " + operacion1);
alert ("La operación 10===10 es " + operacion2);
alert ("La operación 10==10.0 es "+ operacion3);
alert ("La operación Laura==laura es " + operacion4);
alert ("La operación Laura>laura es " + operacion5);
alert ("La operación Laura < laura" + operacion6);
alert ("La operación '123' == 123" + operacion7);
alert ("La operación 123 === 123" + operacion8);
alert ("La operación parseInt('123')" + operacion9);
