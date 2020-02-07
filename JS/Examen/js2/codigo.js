var veces = parseInt(prompt("Digame cuantos numeros va a escribir", ""));
var suma = 0;
for (i = 1; i <= veces; i++) {
    var numero = parseFloat(prompt("Digame el numero " + i, ""));
    var suma = suma + numero;
}
resultado = suma / veces;
alert("La media es: " + resultado);

// ejercicio 2