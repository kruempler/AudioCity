/* Hide the intro and bring in the main application on clicking 'get started' */
$('#start-button').click(function() {
	$('.site-wrapper').hide('slow', 'linear', function() {
		$('#main').css('display', 'block');
		$('body').css('background-image', 'url(../AudioCity/media/images/CvilleBlur.png)');
		/* Place the audio buttons randomly */
		for (var i=0; i<4; i++) { // change the second number to be equal to the number of audio files
			drawBtn(rand($(window).width()/4, $(window).width()/2), rand($(window).height()/4, $(window).height()/2), i.toString());
		}
		/* Listen for button clicks */
		$('.audio-button').click(function(event) {
			$('#' + event.target.id.toString()).css('opacity', '0');
			var overlayOpacity = $('#main').css('opacity');
			overlayOpacity -= 0.02;
			$('#main').css('opacity', overlayOpacity);
			var finished = true;
			$('.audio-button').each(function() {
				if ( $(this).css('opacity') != 0 ) {
					finished = false;
				}
			});
			if (finished) {
				$('#main').css('opacity', 0);
				$('body').css('background-image', 'url(../AudioCity/media/images/CvilleCrop.png)');
				$('body').append('<h1 class="cover-heading">Complete</h1>');
			}
		});
	});
});

function drawBtn(x, y, name) {
	div = $('<div />')
		div.attr({id: name, class: 'audio-button'})
		div.css({top: y, left: x})
			$('#main').append(div)
}

function rand(min, max) {
	return Math.floor((Math.random() * max) + min);
}