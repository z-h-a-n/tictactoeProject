console.log("hello");

$(document).ready(function(){

	//get the 1st player
	$(".choosePlay").on("click", choosePlay);
	function choosePlay(){
			if ($(this).attr("id") === "playerX") {
			var player1 = "x";
			choosePlay(player1);
			console.log(player1);
		} else {
			var player1 = "o";
			playInput(player1);
		}
	}

	//
	$(".playInput").on("click", playInput);
	var playInputs = [];
	function playInput(player1) {
	// if ($(this).attr("id") === "0") {
	// 	var totalInputs = playInputs.push(player1);
	// 	console.log(play1);
	// }
		// debugger;
		var totalInputs = playInputs.push(player1);
		console.log(playInputs);
	}



		




});//document.ready