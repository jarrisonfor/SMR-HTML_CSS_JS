var numero = parseInt(prompt("Indica el numero para calcular su factorial", ""));
var resultado = numero;
for (n = numero - 1; n > 0; n--) {
    resultado = resultado * n;
}

document.write("for:" + resultado + "</br>");

var wn = numero - 1;
var wresultado = numero;
while (wn > 0) {
    wresultado = wresultado * wn;
    wn--;
}

document.write("while:" + wresultado);