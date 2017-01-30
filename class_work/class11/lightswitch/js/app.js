$(document).ready(function () {

	var lights = 'on';

	//click function on #lightswitch
	//toggle classes switch-on and switch-off on lightswitch

	//toggle body a class of light-off

	$('#lightswitch').click(function(){
		if(lights == 'on'){
			console.log('Lights on');
			// $('#lightswitch').addClass('.switch-off');
			// $('#lightswitch').removeClass('.switch-on');

			// $('body').addClass('light-off');

			lights = "off";
		}		

		else{
			console.log('lights off');
			// $('#lightswitch').removeClass('.switch-off');
			// $('#lightswitch').addClass('.switch-on');
			
			// $('body').removeClass('light-off');
			lights = 'on';
		}

			$('#lightswitch').toggleClass('.switch-on');
			$('#lightswitch').toggleClass('.switch-off');
			$('body').toggleClass('light-off')

	})
})
