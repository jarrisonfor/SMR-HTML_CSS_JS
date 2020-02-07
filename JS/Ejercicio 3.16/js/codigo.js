var ordenar = [];
for (n = 1; n <= 7; n++) {
    var numero = parseInt(prompt("Digame el numero " + n, ""));
    ordenar.push(numero);
}

document.write("Array sin ordenar: " + ordenar + "</br>");

for (i = 0; i < (ordenar.length - 1); i++) {
    for (j = 0; j < (ordenar.length - i); j++) {
        if (ordenar[j] < ordenar[j + 1]) {
             aux = ordenar[j];
             ordenar[j] = ordenar[j + 1];
             ordenar[j + 1] = aux;
        }
    }
}
document.write("Array ordenada de forma complicada (burbuja): " + ordenar + " </br></br>");

document.write("Array ordenada de forma facil (funcion): " + ordenar.reverse(ordenar.sort(function(a, b){return a - b})) + " </br></br>");

document.write("El numero mayor es el " + ordenar[0] + " </br>");
document.write("El numero medio es el " + ordenar[3] + " </br>");
document.write("El numero menor es el " + ordenar[6] + " </br>");