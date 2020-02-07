var actual = new Date();
var dia = actual.getDate();
var anio = actual.getFullYear();
var mes = actual.getMonth();

var dian = parseInt(prompt("Introduzca el dia de nacimiento:", "20"));
var mesn = parseInt(prompt("Introduzca el mes de nacimiento:", "12"));
var anon = parseInt(prompt("Introduzca el año de nacimiento:", "1985"));

if (dian >= dia && mesn >= mes) {
    var resultado = anio - anon;
    document.write(resultado - 1);
} else {
    var resultado = anio - anon;
    document.write(resultado);
}