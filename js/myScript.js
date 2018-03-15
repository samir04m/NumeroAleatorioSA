$('.modal').modal();
Materialize.toast('Bienvenido!', 3000, 'rounded') 
var numeroResultados = 0;

function getRandomNumber() {
	var minimo = document.getElementById("min").value;
	if (minimo == '') {
		document.getElementById("mensaje-modal").innerHTML = "Debe especificar un valor minimo";
		$('#modal-dialog').modal('open');
		return;
	}

	var maximo = document.getElementById("max").value;
	if (maximo == '') {
		document.getElementById("mensaje-modal").innerHTML = "Debe especificar un valor maximo";
		$('#modal-dialog').modal('open');
		return;
	}

	if (minimo > maximo || minimo == maximo){
		document.getElementById("mensaje-modal").innerHTML = "El valor minimo debe ser menor y diferente al maximo";
		$('#modal-dialog').modal('open');
		return;
	}

	while (true) {
		var numAleatorio = Math.random();  // devolver un número entre 0 y 1
		numAleatorio = parseInt(numAleatorio*(maximo-minimo+1)+minimo);

		if (numAleatorio >= minimo){ 
			break; 
		}
	}

  	var resultado = document.getElementById("resultado");
  	resultado.innerHTML = numAleatorio;
  	nuevoResultado();
  	changeBackgroundColor();
}


document.onkeydown = PulsarTecla;

function PulsarTecla(e) {   
    var e = e || event;
    var tecla =  e.keyCode ;
   
    if (tecla == 13){
    	getRandomNumber();
    }
}

var colors = [
	"cyan darken-2", "blue darken-2", "blue darken-4", "purple darken-3",  "purple", "red darken-1", "red", "orange lighten-1",  "orange darken-2", "yellow darken-2", "green", "green darken-2", "teal darken-3"
]

var indiceColor = 0; 

function changeBackgroundColor(){

	if (indiceColor > colors.length-1){
		indiceColor = 0;
	}

	document.getElementsByTagName("body")[0].setAttribute("class", colors[indiceColor]);
	document.getElementById("btn").setAttribute("class", "btn btn-large waves-effect waves-teal pulse tooltipped "+colors[indiceColor]);
	document.getElementById("div-nav").setAttribute("class", "nav-wrapper "+colors[indiceColor]);
	document.getElementById("numeroResultados").setAttribute("class", "badge white-text circle "+colors[indiceColor]);
	indiceColor = indiceColor + 1;
}

function nuevoResultado(){
	numeroResultados = numeroResultados + 1;
	document.getElementById("numeroResultados").innerHTML = numeroResultados;
}