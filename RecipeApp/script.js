const imageMeal = document.querySelector('.imageMeal');
const text = document.querySelector('.text');
const btn = document.querySelector('button');


btn.addEventListener('click', (e) => {
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
	.then((res) => res.json())
	.then((data) => createMeal(data.meals[0]))
});

function createMeal(meal) {
	console.log(meal);
	const ingredients = [];
	for(i=1; i<=20; i++) {
		if(meal[`strIngredient${i}`]) {
			ingredients.push(
				`${meal[`strIngredient${i}`]} - 
				${meal[`strMeasure${i}`]}`
			)
		} else {
			break;
		}
	}

	console.log(ingredients)
	imageMeal.innerHTML = `
	<div class="row">
		<div class="column five">
			<img src="${meal.strMealThumb}" alt="Meal Img"/>
			<div class="text">
				<p><strong>Category:</strong> ${meal.strCategory}</p>
				<p><strong>Area:</strong> ${meal.strArea}</p>
				<p><strong>Tags:</strong> ${meal.strTags}</p>
			</div>
		</div>
		</div>
		<div class="column seven">
			<h3>Ingredients</h3>
			<ul>
				${ingredients.map(ingredient => `
					<li>${ingredient}</li>
				`).join('')}
			</ul>
			<h4>${meal.strMeal}</h4>
			<p>${meal.strInstructions}</p>
		</div>
	</div>
	<div class="rowV">
		<h3> Video Recipe</h3>
		<div class="videoWrapper">
			<iframe src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}" />
		</div>
	</div>
	`
}
