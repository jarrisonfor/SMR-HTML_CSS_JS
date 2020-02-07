function comprobarFormulario() {
    // ----------------------------------------------------------------------
    // obtener elementos
    var ok = true;
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var dni = document.getElementById("dni").value;
    var contra = document.getElementById("contra").value;
    var crepe = document.getElementById("crepe").value;
    var condicion = document.getElementById("condicion").checked;
    // ----------------------------------------------------------------------
    // nombre
    if (nombre.length == 0) {
        ok = false;
        document.getElementById("nombre").style.backgroundColor = "red";
        alert("El campo Nombre no debe estar vacio");
    } else {
        var nombrev = nombre.split(" ").join("").split("");
        for (i = 0; i < nombrev.length; i++) {
            if (nombrev[i] == "1" || nombrev[i] == "2" || nombrev[i] == "3" || nombrev[i] == "4" || nombrev[i] == "5" || nombrev[i] == "6" || nombrev[i] == "7" || nombrev[i] == "8" || nombrev[i] == "9" || nombrev[i] == "0") {
                ok = false;
                document.getElementById("nombre").style.backgroundColor = "red";
                alert("El campo Nombre no debe contener numeros");
                break;
            }
        }
        if (ok == true) {
            document.getElementById("nombre").value = document.getElementById("nombre").value.toUpperCase();
        }
    }
    // ----------------------------------------------------------------------
    // apellidos
    if (apellidos.length == 0) {
        ok = false;
        document.getElementById("apellidos").style.backgroundColor = "red";
        alert("El campo Apellidos no debe estar vacio");
    } else {
        var apellidosv = apellidos.split(" ").join("").split("");
        for (i = 0; i < apellidosv.length; i++) {
            if (apellidosv[i] == "1" || apellidosv[i] == "2" || apellidosv[i] == "3" || apellidosv[i] == "4" || apellidosv[i] == "5" || apellidosv[i] == "6" || apellidosv[i] == "7" || apellidosv[i] == "8" || apellidosv[i] == "9" || apellidosv[i] == "0") {
                ok = false;
                document.getElementById("apellidos").style.backgroundColor = "red";
                alert("El campo Apellidos no debe contener numeros");
                break;
            }
        }
        if (ok == true) {
            document.getElementById("apellidos").value = document.getElementById("apellidos").value.toUpperCase();
        }
    }
    // ----------------------------------------------------------------------
    // dni
    if (dni.length == 0) {
        ok = false;
        document.getElementById("dni").style.backgroundColor = "red";
        alert("El campo DNI no debe estar vacio");
    } else if (isNaN(dni) || dni < 0 || dni > 99999999) {
        ok = false;
        document.getElementById("dni").style.backgroundColor = "red";
        alert("El DNI solo debe contener numeros del 0 al 99999999.");
    }
    // ----------------------------------------------------------------------
    // contraseña
    if (contra.length == 0) {
        ok = false;
        document.getElementById("contra").style.backgroundColor = "red";
        alert("El campo Contraseña no debe estar vacio");
    } else {
        document.getElementById("contra").value = document.getElementById("contra").value.toUpperCase();
    }
    if (crepe.length == 0) {
        ok = false;
        document.getElementById("crepe").style.backgroundColor = "red";
        alert("El campo Repite Contraseña no debe estar vacio");
    } else {
        document.getElementById("contra").value = document.getElementById("contra").value.toUpperCase();
    }
    if (contra !== crepe) {
        ok = false;
        document.getElementById("contra").style.backgroundColor = "red";
        document.getElementById("crepe").style.backgroundColor = "red";
        alert("Las contraseñas no coinciden");
    }
    // ----------------------------------------------------------------------
    // condicion
    if (condicion !== true) {
        ok = false;
        document.getElementById("condicion").style.backgroundColor = "red";
        alert("Debe aceptar los terminos y condiciones de uso");
    }


    return ok;
}

function limpiar(campo) {
    document.getElementById(campo).style.backgroundColor = "white";
}
