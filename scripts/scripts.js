/* Hide the intro and bring in the main application on clicking 'get started' */
$('#start-button').click(function() {
	$('.site-wrapper').hide('slow', 'linear', function() {
		
		$('#main').css('display', 'block');
		$('body').css('background-image', 'url(../AudioCity/media/images/CvilleBlur.png)');
		
		/* Place the audio buttons randomly */
		for (var i=0; i<45; i++) { // change the second number to be equal to the number of audio files
			drawBtn(rand($(window).width()/4, $(window).width()/2), rand($(window).height()/4, $(window).height()/2), i.toString(), '../AudioCity/media/audio/Audio00' + (i+1).toString() + '.mp3');
		}

		/* Listen for button clicks */
		$('.audio-button').click(function(event) {
			$('#' + event.target.id.toString()).remove();
			var overlayOpacity = $('#main').css('opacity');
			overlayOpacity -= 0.02;
			$('#main').css('opacity', overlayOpacity);

			console.log('#audio' + event.target.id.toString());
			console.log($('#audio' + event.target.id.toString()));
			$('#audio' + event.target.id.toString())[0].play();

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

function drawBtn(x, y, name, audiofile) {
	// filename hack
	// will break if more than 99 audio files
	if (audiofile.length > 37) {
		// if the audiofile passed in has an extra 0, get rid of it
		// extremely pressed for time
		// I'm so sorry
		audiofile = audiofile.replace('o0','o');
	}
	div = $('<div />')
	div.attr({id: name, class: 'audio-button'})
	div.css({top: y, left: x})

	audioElement = '<audio id="audio' + name +'"">';
	audioElement = audioElement + '<source src="' + audiofile + '" type="audio/mpeg"></source>';
	audioElement = audioElement + '</audio>';

	$('#main').append(audioElement);

	$('#main').append(div)
}

function rand(min, max) {
	return Math.floor((Math.random() * max) + min);
}