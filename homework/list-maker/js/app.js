// Users should be able to:
// 1. Enter an item into #item
// 2. Click on #clickme
// 3. New item is appended as a <li> element to the #list
// 4. After item is added, the text inside #item should clear

// Requirements: Create a separate function, called appendItem, that accepts one argument, item, that is called when #clickme is clicked and appends the <li> to #list


// Itermediate Bonus: If the value of #item is blank, do not append the <li> and alert user (hint: use an if/else statement)
// Legendary Bonus: Remove individual <li> elements when they are clicked (hint: use $(this) and .remove())

	
$(document).ready(function () { 

	// 1. Attach a .click() event to #clickme; attach an anonymous function to the .click()
	$('#clickme').click(function(){

		// 1A. This anonymous function should create a variable, newItem equal to the value of #item
		var newItem = $('#item').val();
		if( !$('#item').val() ) {
          alert('There is nothing to add to the list!');
    	}

		// 1C. This anonymous function should then clear the text inside of #item
		$('#item').val('');
		// Bonus: Focus on #item after the item is added (hint: look up "jquery focus")
		$('#item').focus();
		// 1B. This anonymous function should call a separate function, appendItem, and pass it the variable newItem
		appendItem(newItem);
		removeItem();
	})

	// 2. Write the appendItem function here
	function appendItem(newItem){
		$('#listItem').append(newItem + ' ');
		
	}

	function removeItem(){
		$('#list').on('click',function(){
			$(this).children().remove();
		})
	}
	
})

	