var max = 14;
var min = 1;
 
document.write(aleatorio_intervalo(max,min));
document.write("<br>");

// Función que calcula un número aleatorio con un intervalo
function aleatorio_intervalo(maximo, minimo) {
	var numAleatorio = Math.random();  // devolver un número entre 0 y 1
	numAleatorio = parseInt(numAleatorio*(maximo-minimo+1)+minimo);
  	return numAleatorio;
}