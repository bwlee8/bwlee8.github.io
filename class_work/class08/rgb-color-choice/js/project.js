
// 1. Use document.getElementById() and assign the .onclick event to #color-button

// 2. Write a function, named changeColor, that is called when #color-button is clicked
// 3. Inside of the function changeColor, use variables to store the <input> values from #red, #green, and #blue
// - Use .value to get the values from the inputs
// HINT: var red = document.getElementById('red').value;

// 4. Create a variable, named colorStr, which concatenates the above red, green, and blue variables into the format:
// rgb(x, y, z)
// - If the user enters: 100, 150, and 200, colorStr should be: rgb(100, 150, 200)


// 5. Use .innerHTML to change the text inside of #colorful-text to colorStr


// 6. Use .style.background to change the background of #wrapper to colorStr


//when 'Change the Color!' button is clicked, changeColor function is called
//end result: background color changes
document.getElementById('color-button').onclick = changeColor;

function changeColor() {
    
    //gets input from user, converts to integer and sets integer as new value
    var redRGB = document.getElementById('red').value;
    redRGB = parseInt(redRGB);

    var greenRGB = document.getElementById('green').value;
    greenRGB = parseInt(greenRGB);


    var blueRGB = document.getElementById('blue').value;
    blueRGB = parseInt(blueRGB);
	
    //grabs value for red, green, and blue, and places in 'rgb(x,y,z)' format
	var colorStr = 'rgb(' + redRGB + ',' + greenRGB + ',' + blueRGB + ')';
	console.log(colorStr);

	//changes 'rgb(0,0,0)' in the html to show the values inputted by user. 
    // calls colorStr value.
    document.querySelector('#colorful-text').innerHTML = colorStr;

    // references id: wrapper in html and changes background color. 
    // calls colorStr for 'rgb' value
    var background = document.querySelector('#wrapper') ;
    background.style.background = colorStr;
}

