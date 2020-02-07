
function Letra(caracter) // Escoge el caracter codificado.
{
	var alfabeto =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
	var reves =['z','y','x','w','v','u','t','s','r','q','p','o','ñ','n','m','l','k','j','i','h','g','f','e','d','c','b','a'];
	
	for (var i=0;i<alfabeto.length;i++){
		if (alfabeto[i] == caracter){
			return reves[i]; // Codifica	
		}
	}
	return caracter;

}


function Atbash(){
	var entrada = document.getElementById("entrada").value.toLowerCase(); // Todo a minúsculas para evitar problemas.
	var vector = entrada.split('');
	var aux = entrada.split(''); // Vector auxiliar copiado en memoria.
	for (var i=0;i<vector.length;i++){
		aux[i] = Letra(vector[i]); // Rellenamos el vector que mostrará la codificación/decodificación
	}

	var salida = aux.join(''); // Volvemos a transformar el vector en cadena.
	//window.alert(salida); // El mensaje codificado
	document.getElementById("entrada").value = salida;
	
}

