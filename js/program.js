this.logueado = false;

$("#entrar").click(function () {
	if ($("#usuario").val() == "Marvin" && $("#contraseña").val() == '123456') {
		logueado = true;
		if (logueado == true) {
			window.location = "./pages/Inicio.html";
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