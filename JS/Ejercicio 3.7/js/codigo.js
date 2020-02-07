var valores = [true, 5, false, "hola", "adios", 2];

var textos = valores[3].length < valores[4].length;
document.write('el valor 3 es menor que valor 4: ' + textos + '</br></br>');

var falso = valores[0] && valores[2];
document.write(falso + '</br>');

var verdadero = valores[0] || valores[2];
document.write(verdadero + '</br></br>');

document.write(valores[1] + valores[5] + "</br>");
document.write(valores[1] - valores[5] + "</br>");
document.write(valores[1] * valores[5] + "</br>");
document.write(valores[1] / valores[5] + "</br>");
document.write(valores[1] % valores[5] + "</br>");