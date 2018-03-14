
function getRandomNumber() {
	var minimo = document.getElementById("min").value;
	var maximo = document.getElementById("max").value;
	
	while (true) {
		var numAleatorio = Math.random();  // devolver un número entre 0 y 1
		numAleatorio = parseInt(numAleatorio*(maximo-minimo+1)+minimo);

		if (numAleatorio >= minimo){ 
			break; 
		}
	}

  	var resultado = document.getElementById("resultado");
  	resultado.innerHTML = numAleatorio;
}

document.onkeydown = PulsarTecla;

function PulsarTecla(e) {   
    var e = e || event;
    var tecla =  e.keyCode ;
   
    if (tecla == 13 || tecla == 32){
    	getRandomNumber();
    }
}
