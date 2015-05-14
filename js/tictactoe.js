console.log("hello");

$(document).ready(function(){

	//get the 1st player
	$(".choosePlay").on("click", choosePlay);
	function choosePlay(){
		if ($(this).attr("id") === "playerX") {
			var player1 = "x";
			$(".chosenPlayer").text("First player has chosen x. Second player has chosen o.")
		} else {
			var player1 = "o";
			$(".chosenPlayer").text("First player has chosen o. Second player has chosen x.")
		};



		$(".playInput").on("click", setInput);

		var playInputsArray = [undefined, undefined, undefined, undefined,undefined, undefined, undefined, undefined, undefined];
		var lastInput = "";
		var buttonClicks = "";


		function setInput(){
		  //if input array is empty
			if (lastInput === "") {
				var input = $(this).attr("id");
				switch (input) {
					case "0":
						playInputsArray[$(this).attr("id")] = player1;
						$(this).text(player1);
						lastInput = player1;
						$(this).attr("class","playInput cube stayPress")
					break;
					case "1":
						playInputsArray[$(this).attr("id")] = player1;
						$(this).text(player1);
						lastInput = player1;
						$(this).attr("class","playInput cube stayPress")
					break;
					case "2":
						playInputsArray[$(this).attr("id")] = player1;
						$(this).text(player1);
						lastInput = player1;
						$(this).attr("class","playInput cube stayPress")
					break;
					case "3":
						playInputsArray[$(this).attr("id")] = player1;
						$(this).text(player1);
						lastInput = player1;
						$(this).attr("class","playInput cube stayPress")
					break;
					case "4":
						playInputsArray[$(this).attr("id")] = player1;
						$(this).text(player1);
						lastInput = player1;
						$(this).attr("class","playInput cube stayPress")
					break;
					case "5":
						playInputsArray[$(this).attr("id")] = player1;
						$(this).text(player1);
						lastInput = player1;
						$(this).attr("class","playInput cube stayPress")
					break;
					case "6":
						playInputsArray[$(this).attr("id")] = player1;
						$(this).text(player1);
						lastInput = player1;
						$(this).attr("class","playInput cube stayPress")
					break;
					case "7":
						playInputsArray[$(this).attr("id")] = player1;
						$(this).text(player1);
						lastInput = player1;
						$(this).attr("class","playInput cube stayPress")
					break;
					case "8":
						playInputsArray[$(this).attr("id")] = player1;
						$(this).text(player1);
						lastInput = player1;
						$(this).attr("class","playInput cube stayPress")
				};	
			} else if (lastInput === "x") {
						$(this).text("o");
						playInputsArray[$(this).attr("id")] = "o";
						lastInput = "o";
						$(this).attr("class","playInput cube stayPress")
			} else if (lastInput === "o") {
						$(this).text("x");
						playInputsArray[$(this).attr("id")] = "x";
						lastInput = "x";
						$(this).attr("class","playInput cube stayPress")
			};//if

			buttonClicks = Number(buttonClicks) + 1;
			

		winner(playInputsArray, buttonClicks);
		};//function setInput	


		//check all 8 conditions to determin if x or o wins or tie
		//max button input is 9 [need to track how many times a button is clicked]
		//if buttonClicks < 9 && there is a winner => display winner
		//if buttonClicks = 9 => display tie		
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


	};//function choose play


});//document.ready