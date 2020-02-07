var horas = parseInt(prompt('Digame un numero de horas:', ''));
var minutos = parseInt(prompt('Digame un numero de minutos:', ''));
var segundos = parseInt(prompt('Digame un numero de segundos:', ''));
segundos++;
if (segundos === 60) {
    var segundos = 0;
    minutos++;
}

if (minutos === 60) {
    var minutos = 0;
    horas++;
}

if (horas === 24) {
    var horas = 0;
}

document.write(horas + ":" + minutos + ":" + segundos);

// 3