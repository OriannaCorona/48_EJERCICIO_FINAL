$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	//Para esconder el icono de la flecha en esta pagina
	$('.icon-arrow-left-alt').hide();
	//para ejecutar la función
	printNews();

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
	for (i=0; i < recipesArray.lenght; i++ ) {
		
		if(recipesArray[i].highlighted == true){
			alert('El objeto que sí tiene esta propiedad es: ' + i);
			//renderRecipe(i);
		}
	}
	/*$(this).each();	
	var noTienen = {
		hasOwnProperty: function() {
        console.log ('false');
    	}
    }*/
};


/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


