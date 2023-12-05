//no código html
//hacer var intentos envío formulario con innerhtml
//NOMBRES Y APELLIDOS ROJO SI MAL

// Create form
var form = document.createElement('form');


var inputNombre = document.createElement('input');
inputNombre.type = 'text';
inputNombre.name = 'nombre';
inputNombre.placeholder = 'Nombre(s)';

var input = document.createElement('input');
inputApellido.type = 'text';
inputApellido.name = 'apellido';
inputApellido.placeholder = 'Apellidos';


var inputNif = document.createElement('input');
inputNif.type = 'text';
inputNif.name = 'nif';
inputNif.placeholder = 'NIF';

var inputEdad = document.createElement('input');
inputEdad.type = 'numbers';
inputEdad.name = 'edad';
inputEdad.placeholder = 'Edad';

var inputEmail = document.createElement('input');
inputEmail.type = 'text';
inputEmail.name = 'email';
inputEmail.placeholder = 'Email';

var inputProv = document.createElement('input');
inputProv.type = 'text';
inputProv.name = 'provincia';
inputProv.placeholder = 'Provincia de residencia';

var buttonSubmit = document.createElement('input');
buttonSubmit.type = 'submit';
buttonSubmit.value = 'Submit';

form.appendChild(inputNombre);
form.appendChild(inputApellido);
form.appendChild(inputEdad);
form.appendChild(buttonSubmit);

document.body.appendChild(form);