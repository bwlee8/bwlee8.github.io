// Expected User Flow:
// 1. User enters text into #text-input
// 2. User clicks #append: <p> containing the text is appended to #target and #text-input is cleared
// 3. User clicks #remove; call .empty() on #target

// 7 bugs total!

// Bonus: Once 10 <p> tags have been added, change background-color of <body> and disable the #append button. If user clicks #remove, renable the #append button and change the background-color of <body> back to blue

$('#append').click(function () {
  var someNewText = $('#text-input').val();
  
  appendText(someNewText);
  
  $('#text-input').val('').focus();})

$('#remove').click(function () {
  $('#target').empty();
})

function appendText (text) {
  $('#target').append('<p>' + text + '</p>');
  if($('p').length > 3){
  	$('body').css('background-color', 'red');
  }
}