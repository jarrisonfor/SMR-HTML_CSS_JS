function addErrors(mensajes) {
    eUL = document.createElement("ul");
    for (i = 0; i < mensajes.length; i++) {
        eLI = document.createElement("li");
        eLI.appendChild(document.createTextNode(mensajes[i]));
        eUL.appendChild(eLI);
    }
    document.getElementById("errores").appendChild(eUL);
}

function deleteErrors() {
    document.getElementById("errores").innerHTML = "";
}

function comprobarFormulario() {
    deleteErrors(); // Borrar mensajes de error previos en el formulario	

    nombre = document.getElementById("nombre").value; // Cargamos el valor del nombre;
    apellido1 = document.getElementById("apellido1").value; // Cargamos el valor del primer apellido;	
    apellido2 = document.getElementById("apellido2").value; // Cargamos el valor del segundo apellido;
    dni = document.getElementById("dni").value; // Cargamos el valor del DNI;
    email = document.getElementById("email").value; // Cargamos el valor del correo electrónico;

    // NOTA: Para ultimo campo checkbox, debes mirar si está "checked" (explicado en apuntes).


    correcto = true; // Inicialmente el formulario estará correcto si no se dice lo contrario
    merror = new Array(); // Array de mensajes de error
    j = 0;



    // Escribir código A PARTIR DE AQUÍ AYUDÁNDOTE DE LOS EJEMPLOS en la parte inferior para el NOMBRE y los APELLIDOS.



    if (nombre.length == 0) {
        merror[j] = "No ha introducido ningún dato en NOMBRE";
        j++;
        correcto = false;
    } else if (nombre.length < 4) {
        merror[j] = "No puedes introducir un nombre menor de 4 caracteres";
        j++;
        correcto = false;
    }

    if (apellido1.length == 0) {
        merror[j] = "No ha introducido ningún dato en PRIMER APELLIDO"; // 
        j++;
        correcto = false;
    } else if (apellido1 < 2) {
        merror[j] = "No puedes introducir un apellido menor de 2 caracteres";
        j++;
        correcto = false;
    }

    if (apellido2.length == 0) {
        merror[j] = "No ha introducido ningún dato en SEGUNDO APELLIDO"; // 
        j++;
        correcto = false;
    } else if (apellido2 < 2) {
        merror[j] = "No puedes introducir un segundo apellido menor de 2 caracteres";
        j++;
        correcto = false;
    }

    if (dni.length == 0) {
        merror[j] = "El campo DNI es obligatorio";
        j++;
        correcto = false;
    } else if (isNaN(dni) || dni < 0 || dni > 99999999 || dni.length < 8) {
        merror[j] = "El DNI tiene que tener 8 digitos del 00000000 al 99999999 (SOLO NUMEROS)";
        j++;
        correcto = false;
    }

    if (email.length == 0) {
        merror[j] = "El campo email es obligatorio";
        j++;
        correcto = false;
    } else if (email.indexOf("@") > email.indexOf(".") || email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        merror[j] = "El campo email debe tener un arroba y un punto despues de la arroba";
        j++;
        correcto = false;
    }

    var condiciones = document.getElementById("condiciones").checked;

    if (condiciones != true) {
        merror[j] = "Tiene que aceptar las condiciones de uso";
        j++;
        correcto = false;
    }




    // FIN de las COMPROBACIONES


    if (correcto == false) {
        addErrors(merror); // Si no es correcto, entonces mostramos errores en el formulario.
    }
    return correcto; // Si ha ido bien "true" y en caso contrario "false" y no valida
}
