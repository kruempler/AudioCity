/* Hide the intro and bring in the main application on clicking 'get started' */
$('#start-button').click(function() {
	$('.site-wrapper').hide('slow', 'linear', function() {
		$('#main').css('display', 'block');
		$('body').css('background-image', 'url(../AudioCity/media/images/CvilleBlur.png)');
	});
});