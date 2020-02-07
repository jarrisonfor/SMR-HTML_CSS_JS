function Calificacion(num){
	if (num >=0 && num <=10){ // Vamos bien
	
		if (num >=9) window.alert("Sobresaliente");
			else if (num >=7) window.alert("Notable");
				else if (num>=5) window.alert("Aprobado");
					else if (num<5) window.alert("Suspenso");
	
	}
	else window.alert("Ha introducido un número incorrecto");
	
} // Fin de la función



function Media(cant){

	var i = 1;
	var num = 0;
	var acum = 0;
	
	while (i <= cant){
		num = parseFloat(prompt("Introduzca el número "+i));
		acum += num; // Vamos sumando los números	
		i++; // Incrementamos i en 1
	}

	window.alert("La media es "+(acum/cant));
	
} // Fin de la función



function Cumple(dianac, mesnac, anionac){

	var fechaactual = new Date();
	var diaactual = fechaactual.getDate();
	var anioactual = fechaactual.getFullYear(); 
	var mesactual = fechaactual.getMonth() + 1; // Entre 1 y 12

	var resultado = anioactual - anionac;

	if (mesactual < mesnac) window.alert("Tienes "+ (resultado - 1) +" años."); 
		else if (mesactual > mesnac) window.alert("Tienes "+ resultado +" años.");
	 		else if (mesactual == mesnac){ // Si los meses coinciden nos queda mirar día
						
				if (diaactual < dianac) window.alert("Tienes "+ (resultado - 1) +" años.");
				else window.alert("Tienes "+ resultado +" años."); 	
			
			}


} // Fin de la función

function esPrimo(numero){

	if (numero < 2) 
		return false;
	else {
		for (var i=2;i<numero;i++){
			if (numero % i == 0) 
				return false;
		}		
	}
	return true;
}



function encuentraPrimos(cantidad){
	var contprimos = 0;
	var numcandidato = 2;

	while (contprimos < cantidad){
		if (esPrimo(numcandidato)) {
			document.write(numcandidato+", ");
			contprimos++; // Contador de primos
		}
	numcandidato++;
	}
}
