var texto = prompt("Introduzca una cadena de texto:", "Voy a aprobar el examen de Javascript");
var vocal = 0;
for (i = 0; i < texto.length; i++) {
    if (texto.charAt(i) === "a" || texto.charAt(i) === "e" || texto.charAt(i) === "i" || texto.charAt(i) === "o" || texto.charAt(i) === "u") {
        vocal++;
    }
}
alert("La cadena tiene " + vocal + " vocal(es)");

// 1