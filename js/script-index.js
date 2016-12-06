$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	//Para esconder el icono de la flecha en esta pagina
	$('.icon-arrow-left-alt').hide();
	//para ejecutar la función
	printNews();
	renderActivities(activitiesArray);

});

//Funcion para poner de un color determinado una noticia
//y para agregarle un texto al div
function printNews() {
	$('#pNoticias').text('NUEVAS RECETAS');		
}
/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes ', recipesArray);

	for (i=0; i < recipesArray.length; i++ ) {
		
		if (recipesArray[i].highlighted == true) {
			//para corroborar si funciona
			//alert('El objeto que sí tiene esta propiedad es: ' + i);
			renderRecipe(recipesArray[i]);
		}
	}
};
/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	
	var aItem = $('<a class="item-recipe" href="#"></a>');

	var spanAttribution = $('<span class="attribution"></span>');

	var spanTitle = $('<span class="title-recipe"></span>');
	spanTitle.text(recipe.title);
	
	var spanMetadata = $('<span class="metadata-recipe"></span>');

	var spanAuthor = $('<span class="author-recipe"></span>');
	spanAuthor.text(recipe.source.name);

	var spanBook = $('<span class="bookmarks-recipe"></span>');

	var spanIcon = $('<span class="icon-bookmark"></span>');

	var img = $('<img>');
	img.attr('src', "img/recipes/640x480/" + recipe.name + ".jpg");

	aItem.append(spanAttribution);
	spanAttribution.append(spanMetadata, spanTitle);
	spanMetadata.append(spanAuthor, spanBook);
	spanBook.append(spanIcon);
	aItem.append(img);

	console.log(aItem);

	$('.list-recipes').append(aItem);
}

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
		
		if (activitiesArray.length > 0) {
			
			$('.wrapper-message').hide();		
		}
	
	

}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


