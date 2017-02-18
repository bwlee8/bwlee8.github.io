$(document).ready(function () {

	$(window).scroll(function(){
		var offset = $(window).scrollTop();

		if (offset > 150){
			console.log('greater than 150');
			$('header').addClass('header-offset');
		}
		else{
			console.log('less than 150');
			$('header').removeClass('header-offset');
		}
		console.log('scrolling');
	})

})
