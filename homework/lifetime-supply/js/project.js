
//clicking the 'Calculate!' button triggers the function
document.getElementById('click-me').onclick = userInput;

function userInput(){

	//grabs current age from user and stores value
	var currentAge = document.getElementById('age').value;
		//validates positive integers and real number
		if (currentAge < 0 || isNaN(currentAge) == true){
			console.log('current age = '+ currentAge + ' ' +isNaN(currentAge));
			return false;
		}
		else{
			console.log(currentAge);
		}
	//grabs max age from user and stores value
	var maxAge = document.getElementById('max-age').value;
		//validates positive integer and real number
		if (maxAge < 0|| isNaN(maxAge) == true){
			console.log('max age = '+ maxAge + ' ' + isNaN(maxAge));
			return false;
		}
		else{
			console.log(maxAge);
		}
	//stores choice of drink
	var favDrink = document.getElementById('item').value;
		console.log(favDrink);
	//grabs number of drinks per day and store value
	var numDrink = document.getElementById('num-per-day').value;
		//validates positive integer and real number
		if (numDrink < 0 || isNaN(numDrink) == true){
			console.log('number of drinks = ' + numDrink + ' ' + isNaN(numDrink));
			return false;
		}
		else{
			console.log(numDrink);
		}
	//how many years left to live
	var totalYearsLeft = maxAge - currentAge;
		console.log(totalYearsLeft);
	//[number of drinks x total days in year] x total years left to live
	var totalDrinksLeft = (numDrink*365) * totalYearsLeft;
		console.log(totalDrinksLeft)
	//inputs number of drinks left in life into context
	document.querySelector('#solution').innerHTML = totalDrinksLeft;
	//inputs drink choice into context
	document.querySelector('#drink').innerHTML = favDrink;
}	

