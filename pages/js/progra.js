this.logueado = false;

$("#entrar").click(function () {
	if ($("#usuario").val() == "PARKA980" && $("#contraseña").val() == 'vendetta') {
		logueoado = true;
		if (logueado == true) {
			window.location = "./pag/kk.html";
		}
	}
	else{
		Swal.fire('Error');
	}
});

$(".btn").hover(function () {
	$().fadeIn();
});

window.addEventListener('load',function(){
	$('.container').show(1000);
});