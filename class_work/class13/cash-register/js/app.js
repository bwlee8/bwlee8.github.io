// User flow:
// 1: user enters numerical value into #newEntry
// 2: user pushes enter key (submits the form), the new line is appended to the <tbody id="entries">
// 3: #total is updated to reflect the sum of all the #entries
//
// Instructions:

// Inside the anonymous function:

// 6: Figure out a way to update the number in #total (Hint: look back at the calculator box example)
// 7: Empty the input in #newEntry (clear it out)

$(document).ready(function () {
	
	var totalCost = 0;

	// 1: Add a .submit event to the form; use an anonymous function to handle the sumbit
	$('#entry').submit(function(event){
	// 2: Remeber to prevent the default action on the form!
		event.preventDefault();
	// 3: Create a variable to store the user input from #newEntry
	// 4: Remember to call parseFloat() on this variable! It needs to be a number.
		var numInput = $('#newEntry').val();

		console.log(numInput);

		numInput = parseFloat(numInput);

		$('#newEntry').val('').focus();

		console.log(numInput);
	// 5: Append a new <tr></tr> to the <tbody id="entries"> containing two <td>'s, one of which contains the new variable: <tr><td></td><td>NEW VALUE</td></tr>
		$('#entries').append('<tr><td></td><td>' + numInput + '</td></tr>');

		totalCost = totalCost + numInput;
		$('#total').html('$' + totalCost);

	})
})
