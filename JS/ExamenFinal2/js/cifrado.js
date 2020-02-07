function Cifrar() {
    var entrada = document.getElementById("entrada").value.toUpperCase(); // Todo a minúsculas para evitar problemas.

    var ventrada = entrada.split(''); // Mensaje sin codificar
    var vsalida = entrada.split(''); // Vector vacío para almacenar el mensaje codificado.

    for (i = 0; i < ventrada.length; i++) {
        if (ventrada[i] == "O") {
            vsalida[i] = "0";
        } else if (ventrada[i] == "A") {
            vsalida[i] = "4";
        } else if (ventrada[i] == "E") {
            vsalida[i] = "3";
        } else if (ventrada[i] == "I") {
            vsalida[i] = "1";
        } else if (ventrada[i] == "S") {
            vsalida[i] = "5";
        } else if (ventrada[i] == "T") {
            vsalida[i] = "7";
        } else if (ventrada[i] == "G") {
            vsalida[i] = "6";
        } else if (ventrada[i] == "B") {
            vsalida[i] = "8";
        }
    }


    document.getElementById("entrada").value = vsalida.join(''); // Transformamos vector en cadena y mostramos.
}
