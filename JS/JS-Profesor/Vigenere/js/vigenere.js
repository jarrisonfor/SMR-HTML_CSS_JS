
function Codificar(letra, carclave) // Escoge el caracter codificado.
{
	var cadena="abcdefghijklmnñopqrstuvwxyz";

	var tabla =[
	['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'],
	['b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a'],
	['c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b'],
	['d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c'],
	['e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d'],
	['f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e'],
	['g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f'],
	['h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g'],
	['i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h'],
	['j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i'],
	['k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j'],
	['l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k'],
	['m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l'],
	['n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m'],
	['ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n'],
	['o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ'],
	['p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o'],
	['q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p'],
	['r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q'],
	['s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r'],
	['t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s'],
	['u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t'],
	['v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u'],
	['w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v'],
	['x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w'],
	['y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x'],
	['z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y']
	];
	
	var horizontal = cadena.indexOf(letra);
	var vertical = cadena.indexOf(carclave);

	if (horizontal != -1 && vertical != -1)
		return tabla[horizontal][vertical];
	return letra; //Devolvemos el caracter que no podamos codificar.
}


function Decodificar(letra, carclave) // Escoge el caracter codificado.
{
	var cadena="abcdefghijklmnñopqrstuvwxyz";

	var tabla =[
	['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'],
	['b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a'],
	['c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b'],
	['d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c'],
	['e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d'],
	['f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e'],
	['g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f'],
	['h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g'],
	['i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h'],
	['j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i'],
	['k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j'],
	['l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k'],
	['m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l'],
	['n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m'],
	['ñ','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n'],
	['o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ'],
	['p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o'],
	['q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p'],
	['r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q'],
	['s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r'],
	['t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s'],
	['u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t'],
	['v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u'],
	['w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v'],
	['x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w'],
	['y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x'],
	['z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y']
	];
	
	if (carclave != ' '){
		var vertical = cadena.indexOf(carclave);
		for (var j=0;j<27;j++){
			if (tabla[vertical][j] == letra)
 				return tabla[0][j];
		}
	}	
	
	return letra; //Devolvemos el caracter que no podamos codificar.
}


function Vigenere(modo){
	var entrada = document.getElementById("entrada").value.toLowerCase(); // Todo a minúsculas para evitar problemas.
	var clave = document.getElementById("clave").value.toLowerCase();

	var vectorentrada = entrada.split(''); // Mensaje sin codificar
	var vectorsalida = entrada.split(''); // Almacenaremos el mensaje codificado
	var vectorauxclave = entrada.split('');	//Vector con la clave duplicada hasta longitud del mensaje
	var vectorclave = clave.split('');
	var j=0, i=0;
	
	for (i=0;i<vectorentrada.length;i++){
		if (vectorauxclave[i] != ' '){ 
			vectorauxclave[i] = vectorclave[j%clave.length];
			j++;
			//if (j == vectorclave.length) j=0; // Lo hacemos con el % arriba
		}
	}
	
	for (i=0;i<vectorentrada.length;i++){
		if (modo == 0)
			vectorsalida[i] = Codificar(vectorentrada[i],vectorauxclave[i]);
		else if (modo == 1)
			vectorsalida[i] = Decodificar(vectorentrada[i],vectorauxclave[i]);
	}

	//document.body.innerHTML += '<br>Mensaje: '+vectorsalida.join('')+' ';
	document.getElementById("entrada").value = vectorsalida.join('');
}


