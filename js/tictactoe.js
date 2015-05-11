console.log("hello");

$(document).ready(function(){

	//get the 1st player
	$(".choosePlay").on("click", choosePlay);
	function choosePlay(){
		if ($(this).attr("id") === "playerX") {
			var player1 = "x";
			// setP1(player1);
		} else {
			var player1 = "o";
			// setP1(player1);
		}

		$(".playInput").on("click", set1stInput);
		var playInputsArray = [];
		function set1stInput(){
			if ($(this).attr("id") === "0") {
				var totalInputs = playInputsArray.push(player1);
				console.log(playInputsArray);
			} else if ($(this).attr("id") === "1") {
				var totalInputs = playInputsArray.push(player1);
				console.log(playInputsArray);
			}
		}	


	}


});//document.ready