
document.getElementById('click-me').onclick = userInput;

function userInput(){
	var currentAge = document.getElementById('age').value;
		if (currentAge < 0 || isNaN(currentAge) == true){
			console.log('current age = '+ currentAge + ' ' +isNaN(currentAge));
			return false;
		}
		else{
			console.log(currentAge);
		}
	var maxAge = document.getElementById('max-age').value;
		if (maxAge < 0|| isNaN(maxAge) == true){
			console.log('max age = '+ maxAge + ' ' + isNaN(maxAge));
			return false;
		}
		else{
			console.log(maxAge);
		}



	var favDrink = document.getElementById('item').value;
		console.log(favDrink);

	var numDrink = document.getElementById('num-per-day').value;

		if (numDrink < 0 || isNaN(numDrink) == true){
			console.log('number of drinks = ' + numDrink + ' ' + isNaN(numDrink));
			return false;
		}

		else{
			console.log(numDrink);
		}

	var totalYearsLeft = maxAge - currentAge;
		console.log(totalYearsLeft);

	var totalDrinksLeft = (numDrink*365) * totalYearsLeft;
		console.log(totalDrinksLeft)

	document.querySelector('#solution').innerHTML = totalDrinksLeft;
	document.querySelector('#drink').innerHTML = favDrink;
}	

