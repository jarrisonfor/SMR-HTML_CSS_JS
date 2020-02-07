function primo(numero) {
    for (i = 2; i < numero; i++) {
        if (numero % i == 0) {
            return 0;
        }
    }
    return 1;
}

var veces = prompt("Dame un numero", "10");
var i = 2;
while (i < veces) {
    var resultado = primo(i);
    if (resultado == 1) {
        document.write(i);
    }
    i++;
}
