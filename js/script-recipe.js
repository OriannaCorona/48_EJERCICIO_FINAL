$(document).ready( function(){

	$('.icon-menu').hide();
	console.log('documento listo');

	quitarClaseMake();
	agregarClaseMake();

});

function quitarClaseMake() {
	$('.js-show-recipe').on('click', function(){
		$('.page, .recipe').removeClass('make');			
	});	
}

function agregarClaseMake() {
	$('.js-show-make').on('click', function(){
		$('.page, .recipe').addClass('make');	
	});	
}
	

