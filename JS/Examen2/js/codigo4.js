var megas = parseInt(prompt("Introduzca la cantidad en megabytes", "2012034"));
do {
    var opcion = parseInt(prompt("Tus megas seleccionados son: " + megas + "\n 0. Salir \n 1. Terabytes \n 2. Gigabytes \n 3. Kilobytes \n 4. Bytes", "Escoja una opcion"));
    switch (opcion) {
        case 0:
            break;
        case 1:
            alert(megas / 1024 / 1024);
            break;
        case 2:
            alert(megas / 1024);
            break;
        case 3:
            alert(megas * 1024);
            break;
        case 4:
            alert(megas * 1024 * 1024);
            break;
    }
} while (opcion !== 0);

// 4