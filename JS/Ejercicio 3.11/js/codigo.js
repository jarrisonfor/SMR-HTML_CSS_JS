var numero1 = prompt("Escriba un numero", "");
var numero2 = prompt("Escriba un numero", "");
var numero3 = prompt("Escriba un numero", "");

if (numero1 < numero2 && numero1 < numero3) {
    document.write(numero1 + " es el mas pequeño");
} else if (numero1 < numero2 && numero1 > numero3 || numero1 > numero2 && numero1 < numero3) {
    document.write(numero1 + " es el mediano");
} else if (numero1 > numero2 && numero1 > numero3) {
    document.write(numero1 + " es el mas grande");
} else {
    document.write(numero1 + " esta repetido");
}
document.write("</br>")
if (numero2 < numero1 && numero2 < numero3) {
    document.write(numero2 + " es el mas pequeño");
} else if (numero2 < numero1 && numero2 > numero3 || numero2 > numero1 && numero2 < numero3) {
    document.write(numero2 + " es el mediano");
} else if (numero2 > numero1 && numero2 > numero3) {
    document.write(numero2 + " es el mas grande");
}else {
    document.write(numero2 + " esta repetido");
}
document.write("</br>")
if (numero3 < numero2 && numero3 < numero1) {
    document.write(numero3 + " es el mas pequeño");
} else if (numero3 < numero2 && numero3 > numero1 || numero3 > numero2 && numero3 < numero1) {
    document.write(numero3 + " es el mediano");
} else if (numero3 > numero2 && numero3 > numero1) {
    document.write(numero3 + " es el mas grande");
} else {
    document.write(numero3 + " esta repetido");
}