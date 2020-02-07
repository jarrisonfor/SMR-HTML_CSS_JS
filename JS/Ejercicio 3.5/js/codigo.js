var dias = parseInt(prompt('Digame un numero de dias:', ''));
var horas = parseInt(prompt('Digame un numero de horas:', ''));
var minutos = parseInt(prompt('Digame un numero de minutos:', ''));
var segundos = parseInt(prompt('Digame un numero de segundos:', ''));

var resultado = dias * 24 * 3600 + horas * 3600 + minutos * 60 + segundos;

document.write("Convertidor a segundos </br>");
document.write(dias + " dias, " + horas + " horas, " + minutos + " minutos y " + segundos + " segundos son " + resultado + " segundos");
