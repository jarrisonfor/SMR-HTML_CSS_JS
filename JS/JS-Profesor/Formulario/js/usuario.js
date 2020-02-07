function contieneNumeros(nombrereal){
	if((nombrereal.indexOf('0') != -1) || (nombrereal.indexOf('1') != -1) || 
	(nombrereal.indexOf('2') != -1) || (nombrereal.indexOf('3') != -1) || 
	(nombrereal.indexOf('4') != -1) || (nombrereal.indexOf('5') != -1) || 
	(nombrereal.indexOf('6') != -1) || (nombrereal.indexOf('7') != -1) || 
	(nombrereal.indexOf('8') != -1) || (nombrereal.indexOf('9') != -1))
	{ 
		return true;
	}
return false;
}

function validaCorreo(correo){
	if ((correo.indexOf('.') != -1) && (correo.indexOf('@') != -1))
		return true; // Si hay una @ y un punto entonces puede estar correcto
	return false;
}


function deleteErrors(){
	document.getElementById("errores").innerHTML = "";
	document.getElementById("errores").style.visibility = "hidden";
	document.getElementById("username").style.backgroundColor="white";
	document.getElementById("password").style.backgroundColor="white";
	document.getElementById("rpassword").style.backgroundColor="white";
	document.getElementById("realname").style.backgroundColor="white";
	document.getElementById("apellido1").style.backgroundColor="white";
	document.getElementById("apellido2").style.backgroundColor="white";
	document.getElementById("email").style.backgroundColor="white";
	document.getElementById("dni").style.backgroundColor="white";
}

function addErrors(mensajes){
	eUL = document.createElement("ul");
	for (i=0; i < mensajes.length; i++){
		eLI = document.createElement("li");
		eLI.appendChild(document.createTextNode(mensajes[i]));
		eUL.appendChild(eLI);
	}
	document.getElementById("errores").appendChild(eUL);
}

function validarNuevo(){
	componentes = document.getElementById("usuarionuevo").elements;
	error = false;
	j = 0;
	merror = new Array;
	for (i=0; i< componentes.length; i++){
		switch (componentes[i].name){
			case "username" :if (componentes[i].value.length == 0){
                            merror[j] = "El campo 'Usuario' es obligatorio.";
                            error = true;
                            j++;
		            componentes[i].style.backgroundColor="red";
                        }
                        break;
			case "password" :if (componentes[i].value.length == 0){
                            merror[j] = "El campo 'Contraseña' es obligatorio.";
                            j++;
                            error = true;
			    componentes[i].style.backgroundColor="red";
                        }                        
                        break;
                        case "rpassword" :if (componentes[i].value.length == 0){
                            merror[j] = "El campo 'Repetir contraseña' es obligatorio.";
                            j++;
                            error = true;
			    componentes[i].style.backgroundColor="red";
                        }
                        break;
                    	case "dni" :if (componentes[i].value.length != 8){
                            merror[j] = "El campo DNI debe contener 8 caracteres.";
                            j++;
                            error = true;
			    componentes[i].style.backgroundColor="red";
                        }
                        break;
                        case "realname" :
				if (componentes[i].value.length == 0){
                            		merror[j] = "El campo 'Nombre' es obligatorio.";
                            		j++;
                            		error = true;
					componentes[i].style.backgroundColor="red";
                        	}
				if (contieneNumeros(componentes[i].value)){
					merror[j] = "El campo 'Nombre' no puede contener números";
        				j++;
        				error = true;
					componentes[i].style.backgroundColor="red";
				}

                        break;
			case "apellido1" :
				if (componentes[i].value.length == 0){
                            		merror[j] = "El campo 'Primer apellido' es obligatorio.";
                            		error = true;
                            		j++;
					componentes[i].style.backgroundColor="red";
                        	}
				if (contieneNumeros(componentes[i].value)){
					merror[j] = "El campo 'Primer Apellido' no puede contener números";
        				j++;
        				error = true;
					componentes[i].style.backgroundColor="red";
				}
			break;

			case "apellido2" :
				if (componentes[i].value.length == 0){
                            		merror[j] = "El campo 'Primer apellido' es obligatorio.";
                            		error = true;
                            		j++;
					componentes[i].style.backgroundColor="red";
                        	}
				if (contieneNumeros(componentes[i].value)){
					merror[j] = "El campo 'Segundo Apellido' no puede contener números";
        				j++;
        				error = true;
					componentes[i].style.backgroundColor="red";
				}
                        break;
                        case "email" :
				if (componentes[i].value.length == 0){
                            		merror[j] = "El campo 'Correo electrónico' es obligatorio.";
                            		j++;
                            		error = true;
			   		componentes[i].style.backgroundColor="red";
                        	}
				if (!validaCorreo(componentes[i].value)){
					merror[j] = "El campo 'Correo electrónico' no tiene un formato válido";
        				j++;
        				error = true;
					componentes[i].style.backgroundColor="red";
				}
			break;
			default: 
		}
	}

	// Comprobamos que clave y repetir clave coinciden

	var clave = document.getElementById("password").value; // Obtenemos el campo de contraseña
	var repetirclave = document.getElementById("rpassword").value; // Obtenemos el campo de repetir contraseña

	if (clave != repetirclave){ //Si las claves no coinciden
		merror[j] = "El campo 'Clave' y 'Repetir Clave' no coinciden";
        	j++;
        	error = true;
		clave.style.backgroundColor="red";
		repetirclave.style.backgroundColor="red";
	}


	if (error){
		addErrors(merror);
		document.getElementById("errores").style.visibility = "visible";
	}
	return (!error); // No hay errores y por lo tanto VALIDA
}


/* Para enviar un formulario */
function enviarNuevoUsuario(){
    deleteErrors();
    if (validarNuevo()){
		window.alert("Todo CORRECTO. A continuación, vamos a enviar el formulario")
		document.getElementById("usuarionuevo").submit();
		
	}
}

