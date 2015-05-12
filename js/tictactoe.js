console.log("hello");

$(document).ready(function(){

	//get the 1st player
	$(".choosePlay").on("click", choosePlay);
	function choosePlay(){
		if ($(this).attr("id") === "playerX") {
			var player1 = "x";
			console.log("1st player has chosen x");
		} else {
			var player1 = "o";
			console.log("1st player has chosen o");
		}



		$(".playInput").on("click", set1stInput);
		var playInputsArray = [];
		function set1stInput(){
			if (playInputsArray.length === 0) {
				if ($(this).attr("id") === "0") {
					var totalInputs = playInputsArray.push(player1);
					$(this).text(player1)
					console.log(playInputsArray);
				} else if ($(this).attr("id") === "1") {
					var totalInputs = playInputsArray.push(player1);
					$(this).text(player1);
					console.log(playInputsArray);
					//add if statement for other keys
				}
			} else if (playInputsArray.length > 0) {
					//allow input as long as no winner and array.lengh < 9
						if (playInputsArray[playInputsArray.length - 1] === "x" && playInputsArray.length < 9 ) {
							var totalInputs = playInputsArray.push("o");
							console.log(playInputsArray);
						} else if (playInputsArray[playInputsArray.length - 1] === "o" && playInputsArray.length < 9) {
							var totalInputs = playInputsArray.push("x");
							console.log(playInputsArray);

						}
					
			}// end of else if playInputsArray.length > 0

		}	


	}


});//document.ready