// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth

// $('#first').click(function(){
// 	$('#bigimage').attr('src', 'img/1.jpg');
// 	console.log(this);
// })

// $('#second').click(function(){
// 	$('#bigimage').attr('src', 'img/2.jpg');
// })

// $('#third').click(function(){
// 	$('#bigimage').attr('src', 'img/3.jpg');
// })

// $('#fourth').click(function(){
// 	$('#bigimage').attr('src', 'img/4.jpg');
// })

//The thumbnail you click on is changing the big photo of the thumbnail image. 'this' is reference on the thumbnail you're clicking on
$('.thumb').click(function(){
	
	//$(this).attr('src') is grabbing the attribute of that image (ex. 'img/1.jpg')
	//by setting image as a variable as $(this).attr('src'), img is now 'img/1.jpg' or 'img/2.jpg', and vice versa
	console.log($(this).attr('src'));

	//$(this).attr('src') = 'img/2.jpg' or 'img/3.jpg', etc
	var image = $(this).attr('src');

	//changes big image to 'img/2.jpg' or 'img/3.jpg', etc
	$('#bigimage').attr('src', image);
})

// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked
