$(document).ready(function() {
	
	var total = 0;

	$('#entry').submit(enter);

	function enter() {
		var entry = $('#newEntry').val();
		$('#newEntry').val('');
		
		entry = parseFloat (entry);

		var currency = entry.toFixed(2);
		currency = '$' + currency; 

		$('#entries').append('<tr><td></td><td>' + currency + '</td></tr>');

		currency + total += entry;

		$('#total').html(total)

		return false;
	}
});