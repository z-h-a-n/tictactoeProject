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



		$(".playInput").on("click", setInput);

		var playInputsArray = [undefined, undefined, undefined, undefined,undefined, undefined, undefined, undefined, undefined];

		var lastInput = "";
		function setInput(){
		  //if input array is empty
			if (lastInput === "") {
				var input = $(this).attr("id");
				switch (input) {
					case "0":
						playInputsArray[$(this).attr("id")] = player1;
						$(this).text(player1);
						lastInput = player1;
						console.log(lastInput);
						console.log(playInputsArray);
					break;
					case "1":
						playInputsArray[$(this).attr("id")] = player1;
						$(this).text(player1);
						lastInput = player1;
						console.log(lastInput);
						console.log(playInputsArray);
					break;
					case "2":
						playInputsArray[$(this).attr("id")] = player1;
						$(this).text(player1);
						lastInput = player1;
						console.log(lastInput);
						console.log(playInputsArray);
					break;
					case "3":
						playInputsArray[$(this).attr("id")] = player1;
						$(this).text(player1);
						lastInput = player1;
						console.log(lastInput);
						console.log(playInputsArray);
					break;
					case "4":
						playInputsArray[$(this).attr("id")] = player1;
						$(this).text(player1);
						lastInput = player1;
						console.log(lastInput);
						console.log(playInputsArray);
					break;
					case "5":
						playInputsArray[$(this).attr("id")] = player1;
						$(this).text(player1);
						lastInput = player1;
						console.log(lastInput);
						console.log(playInputsArray);
					break;
					case "6":
						playInputsArray[$(this).attr("id")] = player1;
						$(this).text(player1);
						lastInput = player1;
						console.log(lastInput);
						console.log(playInputsArray);
					break;
					case "7":
						playInputsArray[$(this).attr("id")] = player1;
						$(this).text(player1);
						lastInput = player1;
						console.log(lastInput);
						console.log(playInputsArray);
					break;
					case "8":
						playInputsArray[$(this).attr("id")] = player1;
						$(this).text(player1);
						lastInput = player1;
						console.log(lastInput);
						console.log(playInputsArray);
				}	

			} else if (lastInput === "x") {
						$(this).text("o");
						playInputsArray[$(this).attr("id")] = "o";
						lastInput = "o";
						console.log(playInputsArray);	
			} else if (lastInput === "o") {
						$(this).text("x");
						playInputsArray[$(this).attr("id")] = "x";
						lastInput = "x";
						console.log(playInputsArray);	
			};//if
		
		
		
		};//function setInput	


	};//function choose play


});//document.ready