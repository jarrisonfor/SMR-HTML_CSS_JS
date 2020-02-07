var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var dni = prompt("Introduce tu número de DNI (sin la letra)", "");
if (dni < 0 || dni > 99999999) {
    alert("numero de digitos incorrecto");
} else {
    alert(letras[dni % 23])
}