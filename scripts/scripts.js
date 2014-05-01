/* Hide the intro and bring in the main application on clicking 'get started' */
$('#start-button').click(function() {
	$('#intro').hide('slow', function() {
		$('#main').show('slow');
	});
});