var veces = parseInt(prompt("Digame cuantos numeros va a escribir", ""));
var impar = 0;
var par = 0;
for (v = 1; v <= veces; v++) {
    var numero = parseInt(prompt("Digame el numero " + v, ""));
    if (numero % 2 == 0) {
    par++;
    } else {
    impar++;
    }
}

document.write("Ha escrito " + par + " numero(s) par(es) </br>");
document.write("Ha escrito " + impar + " numero(s) impar(es) </br>");