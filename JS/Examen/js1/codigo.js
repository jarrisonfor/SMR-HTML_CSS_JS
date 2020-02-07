var calificacion = parseInt(prompt("Introduzca la calificacion:", "8"));
if (calificacion < 0 || calificacion > 10 || isNaN(calificacion)) {
    alert("Introduce un numero entre 0 y 10");
} else if (calificacion >= 9) {
    alert("sobresaliente");
} else if (calificacion >= 7 && calificacion < 9) {
    alert("notable");
} else if (calificacion >= 5 && calificacion < 7) {
    alert("aprobado");
} else if (calificacion < 5) {
    alert("suspenso");
}

// primer ejercicio