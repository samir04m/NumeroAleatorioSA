$('.modal').modal();

$(document).ready(function(){

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   		showModal(`<hr><center><h5>Hola, Bienvenido :)</h5></center>
   			 Nos aseguramos de que esta pagina sea <b>Responsive Design</b> para brindarte los mejores resultados en tu dispositivo movil.`);
   		$('.card').removeClass('noShow');
   		$('.card').removeClass('opacity0');
   		$('#space').addClass('noShow');

	}else{

		$('.card').slideDown(1200);
		$(".card").css("opacity", 1);
		$('#space').slideUp(2000);

		setTimeout(function(){
		 	$('#title').slideDown(1200);
		}, 1000 );

		Materialize.toast('Bienvenido!', 3000, 'rounded') 
	}

	$('#btnGetRandomNumber').on('click', getRandomNumber);

	function getRandomNumber() {

		var minimo = $("#min").val();
		if (minimo == ''){ showModal("Debe especificar un valor minimo."); return; }

		var maximo = $("#max").val();
		if (maximo == '') { showModal("Debe especificar un valor maximo."); return; }

		if (minimo > maximo || minimo == maximo){
			showModal("El valor minimo debe ser menor y diferente al maximo.");	return;	
		}

		while (true) {
			var randomNumber = Math.random(); 
			randomNumber = parseInt(randomNumber*(maximo-minimo+1)+minimo);

			if (randomNumber >= minimo) break; 
		}

	  	$("#resultado").text(randomNumber);
	  	nuevoResultado();
	  	changeBackgroundColor();
	}

	document.onkeydown = PulsarTecla;

	function PulsarTecla(e) {   
	    var e = e || event;
	    var tecla =  e.keyCode ;
	   
	    if (tecla == 13) getRandomNumber();
	}
	
});

function showModal(message){
	$("#mensaje-modal").html(message);
	$('#modal-dialog').modal('open');
}

var colors = [
	"cyan darken-2", "blue darken-2", "blue darken-4", "purple darken-3",  "purple", "red darken-1", "red", "orange lighten-1",  "orange darken-2", "yellow darken-2", "green", "green darken-2", "teal darken-3"
]

var colorIndex = 0; 

function changeBackgroundColor(){

	if (colorIndex > colors.length-1){
		colorIndex = 0;
	}

	document.getElementsByTagName("body")[0].setAttribute("class", colors[colorIndex]);
	document.getElementById("btnGetRandomNumber").setAttribute("class", "btn btn-large pulse tooltipped "+colors[colorIndex]);
	document.getElementById("div-nav").setAttribute("class", "nav-wrapper "+colors[colorIndex]);
	document.getElementById("numeroResultados").setAttribute("class", "badge white-text circle "+colors[colorIndex]);
	colorIndex = colorIndex + 1;
}

var numeroResultados = 0;

function nuevoResultado(){
	numeroResultados++;
	$("#numeroResultados").text(numeroResultados);
}