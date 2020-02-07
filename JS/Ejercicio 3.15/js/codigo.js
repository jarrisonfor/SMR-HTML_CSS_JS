var numero1 = parseInt(prompt("Introduzca numero 1", ""));
var numero2 = parseInt(prompt("Introduzca numero 2", ""));
do {
    var opcion = parseInt(prompt("Los numeros que has seleccionado son " + numero1 + " y " + numero2 + "\n**************\n0.Salir\n**************\n1.Modificar numero 1\n2.Modificar numero 2\n**************\n3.Sumar\n4.Restar\n5.Multiplicar\n6.Dividir\n**************", "Escoja una opcion"));
    switch (opcion) {
        case 0:
            break;
        case 1:
            var numero1 = parseInt(prompt("Introduzca numero 1", ""));
            break;
        case 2:
            var numero2 = parseInt(prompt("Introduzca numero 2", ""));
            break;
        case 3:
            var resultado = numero1 + numero2;
            alert("La suma de " + numero1 + " y " + numero2 + " es " + resultado);
            break;
        case 4:
            var resultado = numero1 - numero2;
            alert("La resta de " + numero1 + " y " + numero2 + " es " + resultado);
            break;
        case 5:
            var resultado = numero1 * numero2;
            alert("La multiplicacion de " + numero1 + " y " + numero2 + " es " + resultado);
            break;
        case 6:
            var resultado = numero1 / numero2;
            alert("La division de " + numero1 + " y " + numero2 + " es " + resultado);
            break;
    }
} while (opcion != 0);