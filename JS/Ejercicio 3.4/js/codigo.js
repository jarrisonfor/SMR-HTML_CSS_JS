var nombre = prompt('Ingrese su nombre:', '');
var edad = prompt('Ingrese su edad:', '');
document.write('Hola ' + nombre + ', tengo entendido que tienes ' + edad + ' años y los resultados de tus numeros son: ');

var pri = prompt('Ingrese un numero', '');
var sec = prompt('Ingrese otro numero', '');
var suma = parseInt(pri) + parseInt(sec);
var resta = pri - sec;
var multi = pri * sec;
var divid = pri / sec;
document.write(" suma: " + suma + " resta: " + resta + " multiplicacion " + multi + " Division: " + divid);