

function palindromo(){

    var texto = document.getElementById("txtFrase").value;

	var numeroLetras;
	var tests;
	var checkTexto = "";
	var palindromo = 0;

	for (var i in texto){
		var letra = texto[i];
		if (letra != " ")
        {
			checkTexto += letra;
		}
	}
	numeroLetras = checkTexto.length;
	tests = Math.floor(numeroLetras/2);

	var more,less;
	for(more = 0, less = 1; more < tests; more++, less++)
    {
		if(checkTexto[more] != checkTexto[numeroLetras-less]){
			alert("La frase " + texto + "\n no es un palíndromo ");
			break;
		}else
            {
                palindromo++;
            }
	}
	if(palindromo === tests){

        alert("La frase " + texto +  "\n es un PALÍNDROMO.");
	  //console.log("La frase " + texto +  "\n es un PALÍNDROMO.");
	}			
}

