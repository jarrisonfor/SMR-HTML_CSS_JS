var veces = parseInt(prompt("Digame cuantos numeros va a escribir", ""));
var resultado = 0;
for (i = 1; i <= veces; i++) {
    var numero = parseInt(prompt("Digame el numero " + i, ""));
    if (numero > resultado) {
        resultado = numero;
    }
}

alert(resultado);

// 2