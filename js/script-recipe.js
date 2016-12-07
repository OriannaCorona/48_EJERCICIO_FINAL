$(document).ready( function() {

	$('.icon-menu').hide();
	console.log('documento listo');

	quitarClaseMake();
	agregarClaseMake();
	volverHome();

});

function quitarClaseMake() {
	$('.js-show-recipe').on('click', function() {
		$('.page, .recipe').removeClass('make');
		$('.js-show-recipe').addClass('active');
		$('.js-show-make').removeClass('active');			
	});	
}

function agregarClaseMake() {
	$('.js-show-make').on('click', function() {
		$('.page, .recipe').addClass('make');
		$('.js-show-make').addClass('active');
		$('.js-show-recipe').removeClass('active');	
	});	
}

function volverHome() {
	$('.icon-arrow-left-alt').on('click', function() {
		window.location = 'index.html';
	});
}
	

