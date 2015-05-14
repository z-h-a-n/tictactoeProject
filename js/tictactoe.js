console.log("hello");

$(document).ready(function(){

	//get the 1st player
	$(".choosePlay").on("click", choosePlay);
	function choosePlay(){
		if ($(this).attr("id") === "playerX") {
			var player1 = "x";
			$(".chosenPlayer").text("BLACK has the first move");
		} else {
			var player1 = "o";
			$(".chosenPlayer").text("RED has the first move.");
		};



		$(".playInput").on("click", setInput);

		var playInputsArray = [undefined, undefined, undefined, undefined,undefined, undefined, undefined, undefined, undefined];
		var lastInput = "";
		var buttonClicks = "";


		function setInput(){
			$(".chosenPlayer").text("");
		  //if input array is empty
			if (lastInput === "") {
				var input = $(this).attr("id");
				switch (input) {
					case "0":
						playInputsArray[$(this).attr("id")] = player1;
						// $(this).text(player1);
						// debugger;
						lastInput = player1;
						$(this).attr("class", "playInput cube stayPress" + player1)
					break;
					case "1":
						playInputsArray[$(this).attr("id")] = player1;
						// $(this).text(player1);
						lastInput = player1;
						$(this).attr("class", "playInput cube stayPress" + player1)
					break;
					case "2":
						playInputsArray[$(this).attr("id")] = player1;
						// $(this).text(player1);
						lastInput = player1;
						$(this).attr("class", "playInput cube stayPress" + player1)
					break;
					case "3":
						playInputsArray[$(this).attr("id")] = player1;
						// $(this).text(player1);
						lastInput = player1;
						$(this).attr("class", "playInput cube stayPress" + player1)
					break;
					case "4":
						playInputsArray[$(this).attr("id")] = player1;
						// $(this).text(player1);
						lastInput = player1;
						$(this).attr("class", "playInput cube stayPress" + player1)
					break;
					case "5":
						playInputsArray[$(this).attr("id")] = player1;
						// $(this).text(player1);
						lastInput = player1;
						$(this).attr("class", "playInput cube stayPress" + player1)
					break;
					case "6":
						playInputsArray[$(this).attr("id")] = player1;
						// $(this).text(player1);
						lastInput = player1;
						$(this).attr("class", "playInput cube stayPress" + player1)
					break;
					case "7":
						playInputsArray[$(this).attr("id")] = player1;
						// $(this).text(player1);
						lastInput = player1;
						$(this).attr("class", "playInput cube stayPress" + player1)
					break;
					case "8":
						playInputsArray[$(this).attr("id")] = player1;
						// $(this).text(player1);
						lastInput = player1;
						$(this).attr("class", "playInput cube stayPress" + player1)
				};	
			} else if (lastInput === "x") {
						// $(this).text("o");
						playInputsArray[$(this).attr("id")] = "o";
						lastInput = "o";
						$(this).attr("class", "playInput cube stayPresso")
			} else if (lastInput === "o") {
						// $(this).text("x");
						playInputsArray[$(this).attr("id")] = "x";
						lastInput = "x";
						$(this).attr("class", "playInput cube stayPressx")
			};//if

			buttonClicks = Number(buttonClicks) + 1;
			

		winner(playInputsArray, buttonClicks);
		};//function setInput	

		function winner(playInputsArray, buttonClicks) {
			var winnerArray = playInputsArray;
			var numClicks = buttonClicks;

			if (numClicks <= 9) {
				var winCombi = true;
				switch (winCombi) {
					case winnerArray[0] === winnerArray[1] && winnerArray[1] === winnerArray[2] && winnerArray[1] !== undefined:
						$(".winner").text(winnerArray[1] + " won");
					break;
					case winnerArray[3] === winnerArray[4] && winnerArray[4] === winnerArray[5] && winnerArray[4] !== undefined:
						$(".winner").text(winnerArray[4] + " won");
					break;
					case winnerArray[6] === winnerArray[7] && winnerArray[7] === winnerArray[8] && winnerArray[7] !== undefined:
						$(".winner").text(winnerArray[7] + " won");
					break;
					case winnerArray[0] === winnerArray[3] && winnerArray[3] === winnerArray[6] && winnerArray[3] !== undefined:
						$(".winner").text(winnerArray[3] + " won");
					break;
					case winnerArray[1] === winnerArray[4] && winnerArray[4] === winnerArray[7] && winnerArray[4] !== undefined:
						$(".winner").text(winnerArray[4] + " won");
					break;
					case winnerArray[2] === winnerArray[5] && winnerArray[5] === winnerArray[8] && winnerArray[5] !== undefined:
						$(".winner").text(winnerArray[5] + " won");
					break;
					case winnerArray[0] === winnerArray[4] && winnerArray[4] === winnerArray[8] && winnerArray[4] !== undefined:
						$(".winner").text(winnerArray[4] + " won");
					break;
					case winnerArray[2] === winnerArray[4] && winnerArray[4] === winnerArray[6] && winnerArray[4] !== undefined:
						$(".winner").text(winnerArray[4] + " won");
					break;
					case numClicks >= 9: 
						$(".winner").text("It's a tie");
				};
			};

		console.log(winnerArray);
		};

		$(".reset").on("click", function() {
		$(".playInput").attr("class","playInput cube");
		playInputsArray = [undefined, undefined, undefined, undefined,undefined, undefined, undefined, undefined, undefined];
		player1="";
		buttonClicks = "";
			$(".winner").text("");
		console.log(playInputsArray);
		});
	};//function choose play


});//document.ready