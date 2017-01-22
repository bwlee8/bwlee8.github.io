// $('#celcisu').append('celcius');

// $('#fahrenheit').append('fahrenheit')

//F=(C*1.8)+32
//C=(F-32)/1.8

$('#convert-celsius').click(function(){
	var celsius = $('#celsius').val();
	// console.log(celsius);
	var convertedTemp = (celsius*1.8)+32;
	console.log(convertedTemp);
	$('#result').html('Temperature converts to ' + convertedTemp +' degrees fahrenheit')
})

$('#convert-fahrenheit').click(function(){
	var fahrenheit = $('#fahrenheit').val();
	// console.log(fahrenheit);
	var convertedTemp = (fahrenheit-32)/1.8;
	console.log(convertedTemp);
	$('#result').html('Temperature converts to ' + convertedTemp +' degrees celsius')
})