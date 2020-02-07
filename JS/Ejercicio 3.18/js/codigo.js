function palindromo(texto) {
    var letras = texto.toLocaleLowerCase().split(" ").join("").split("");
    var linver = texto.toLocaleLowerCase().split(" ").join("").split("").reverse();
   for (i = 0; i < letras.length; i++) {
        if (letras[i] !== linver[i]) {
            return false;
        }
    }
    return true;
}

var frase = prompt("Escribe un palindromo", "La sed sera mares de sal");
alert(palindromo(frase));