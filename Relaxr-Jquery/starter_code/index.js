$(document).ready(function() {
	
	$(".readless").hide();

// Prevent function
	$("#bottom-cta").click(function(event) {
		event.preventDefault();
	});


// Read more/Read Less link
	$(".readmore").click(displayMore)
	$(".readless").click(displayLess)

	function displayMore () {
		$(".readmore").hide ();
		$("#show-this-on-click").show ();
		// It seems to work without the slidedown and slideups $("#show-this-on-click").slideDown ();
		$(".readless").show();
	}

	function displayLess () {
		$("#show-this-on-click").hide();
		$(".readless").hide ();
		// It seems to work without the slidedown and slideups $(".readmore").slideUp ();
		$(".readmore").show ();
	}

// Learnmore link 

	$(".learnmore").click(LearnMore);

	function LearnMore () {
		$("#learnmoretext").slideDown ();
		$("#learnmoretext").show ();
		$(".learnmore").hide ();
	}
})