// 1. Besure to write your code within the $(document).ready(...)
$('#a10').click(function() {

    var out = $('#out').html()

    console.log(out);

    $('#out').html(parseInt(out) + 10);
})


$('#a20').click(function() {
    // console.log('Click is working');

    var out = $('#out').html();

    $('#out').html(parseInt(out) + 20);

    console.log(out);

})

$('#a30').click(function() {

    var out = $('#out').html()

    $('#out').html(parseInt(out) + 30);

    console.log(out);
})

$('#n10').click(function() {

    var out = $('#out').html()

    $('#out').html(parseInt(out) - 10);

    console.log(out);
})

$('#n20').click(function() {

    var out = $('#out').html()

    $('#out').html(parseInt(out) - 20);

    console.log(out);
})

$('#n30').click(function() {

    var out = $('#out').html()

    $('#out').html(parseInt(out) - 30);

    console.log(out);

})

$('#red').click(function() {

    $('#out').css('background', 'red');

})

$('#blue').click(function() {

    $('#out').css('background', 'blue');

})

$('#out').click(function() {

    // var count = 0;

    var out = $('#out').html(0);

    $('#out').css('background', 'white');

    console.log(out);

})



// 2. Add .click() event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, var count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - . text() or .html()
// - .css()
