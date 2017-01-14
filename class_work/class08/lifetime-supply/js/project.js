
//when 'Calculate' button is clicked, userInput function is called
document.getElementById('click-me').onclick = userInput;

function userInput(){

	//gets input from user and sets it as a value
	var currentAge = document.getElementById('age').value;
		console.log(currentAge);

	var maxAge = document.getElementById('max-age').value;
		console.log(maxAge);

	//which ever item is selected in the drop-down-menu is the value for favDrink
	var favDrink = document.getElementById('item').value;
		console.log(favDrink);

	var numDrink = document.getElementById('num-per-day').value;
		console.log(numDrink);

	//calculates how many more years to live
	var totalYearsLeft = maxAge - currentAge;
		console.log(totalYearsLeft);

	//takes number of drinks per day and multiplies by the number of days in a year [365] (taking leap years out of factor)
	//then multiply by the number of years the user has left
	var totalDrinksLeft = (numDrink*365) * totalYearsLeft;
		console.log(totalDrinksLeft)

	//adds the value of number of drinks left into HTML
	document.querySelector('#solution').innerHTML = totalDrinksLeft;
	//adds the drink, the user selected, into HTML
	document.querySelector('#drink').innerHTML = favDrink;
}	

