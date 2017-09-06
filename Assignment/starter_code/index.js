/* Psuedo Code

When a user enters "New York" or "New York City" or "NYC" and clicks the submit button the background of the page updates to the nyc.jpg image. 
When a user enters "San Francisco" or "SF" or "Bay Area" and clicks the submit buttonthe background of the page updates to the sf.jpg image.
When a user enters "Los Angeles" or "LA" or "LAX" and clicks the submit bUtton the background of the page updates to tje la.jpg image.
When a user enters "Austin" or "ATX"  and the clicks submit button the background of the page updates to the austin.jpg image.
When a user enters Sydney" or "SYD" and clicks the submit button the background of the page updates to the sydney.jpg image. 
After the user clicks the submit button, clear the text field. */

$(document).ready(function() {
	$('#submit-btn').click(function(event) {
		return false; 
	});
	
	var city = $('city-type').val();

	$("#submit-btn").click(compare);

	function compare () {

		if (city === 'New York City', 'New York', 'NYC') {
			$('body').css('background-image', 'url(file:///Users/brittany/Documents/GitHub/FEWD-NYC-7.31.17/Week_05_JS_ComputerScience/Assignment/starter_code/images/nyc.jpg)');
		} else if (city === 'San Francisco', 'SF', 'Bay Area') {
			$('body').css('background-image' , 'url(file:///Users/brittany/Documents/GitHub/FEWD-NYC-7.31.17/Week_05_JS_ComputerScience/Assignment/starter_code/images/sf.jpg)');
		} else if (city === 'Los Angeles', 'LA', 'LAX') {
			$('body').css('background-image', 'url(file:///Users/brittany/Documents/GitHub/FEWD-NYC-7.31.17/Week_05_JS_ComputerScience/Assignment/starter_code/images/la.jpg)');
		} else if (city === 'Austin', 'ATX') {
			$('body').css('background-image', 'url(file:///Users/brittany/Documents/GitHub/FEWD-NYC-7.31.17/Week_05_JS_ComputerScience/Assignment/starter_code/images/austin.jpg)');
		} else if (city === 'Sydney', 'SYD') {
			$('body').css('background-image' ,'url(file:///Users/brittany/Documents/GitHub/FEWD-NYC-7.31.17/Week_05_JS_ComputerScience/Assignment/starter_code/images/sydney.jpg)');
		}

		// Paris - for some reason only the NYC picture will display even if I enter a different city. 
	};

});