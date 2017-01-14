
document.getElementById('click-me').onclick = userInput;

function userInput(){
	var currentAge = document.getElementById('age').value;
		console.log(currentAge);

	var maxAge = document.getElementById('max-age').value;
		console.log(maxAge);

	var favDrink = document.getElementById('item').value;
		console.log(favDrink);

	var numDrink = document.getElementById('num-per-day').value;
		console.log(numDrink);

	var totalYearsLeft = maxAge - currentAge;
		console.log(totalYearsLeft);

	var totalDrinksLeft = (numDrink*365) * totalYearsLeft;
		console.log(totalDrinksLeft)

	document.querySelector('#solution').innerHTML = totalDrinksLeft;
	document.querySelector('#drink').innerHTML = favDrink;
}	

