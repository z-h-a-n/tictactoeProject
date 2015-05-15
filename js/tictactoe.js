console.log("hello");

$(document).ready(function(){

	soundManager.onload = function () {

		var mouseHoverSound = soundManager.createSound({
			url:'audio/mouseHover.mp3'
		});

		$(".playInput").on('mouseenter', function() {
			mouseHoverSound.play({
				volume: 50
			});
		});		

		var mouseClickSound = soundManager.createSound({
			url:'audio/mouseClick.mp3'
		});

		$(".playInput").on('click', function() {
			mouseClickSound.play({
				volume: 50
			});
		});	

		var winSound = soundManager.createSound({
			url:'audio/win.mp3'
		});

		var navSound = soundManager.createSound({
			url:'audio/nav.mp3'
		});

		$(".chooseButtons").on('mouseenter', function() {
			navSound.play({
				volume: 50
			});
		});	

		$(".reset").on('mouseenter', function() {
			navSound.play({
				volume: 50
			});
		});	


	//get the 1st player
	// $(".choosePlay").on("click", choosePlay);
	// function choosePlay(){
	// 	if ($(this).attr("id") === "playerX") {
	// 		var player1 = "x";
	// 		$(".chosenPlayer").text("var firstMove = black;");
	// 	} else {
	// 		var player1 = "o";
	// 		$(".chosenPlayer").text("var firstMove = red;");
	// 	};

    //this replaces the above function
    var player1 = "o";


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
			} else if (lastInput === "x" && playInputsArray[$(this).attr("id")] === undefined) {
						// $(this).text("o");
						playInputsArray[$(this).attr("id")] = "o";
						lastInput = "o";
						$(this).attr("class", "playInput cube stayPresso")
			} else if (lastInput === "o" && playInputsArray[$(this).attr("id")] === undefined) {
						// $(this).text("x");
						playInputsArray[$(this).attr("id")] = "x";
						lastInput = "x";
						$(this).attr("class", "playInput cube stayPressx")
			};//if

			buttonClicks = Number(buttonClicks) + 1;
			

		winner(playInputsArray, buttonClicks);
		};//function setInput	

		function winner(playInputsArray, buttonClicks, winner) {
			var winnerArray = playInputsArray;
			var numClicks = buttonClicks;

			if (numClicks <= 9) {
				var winCombi = true;
				switch (winCombi) {
					case winnerArray[0] === winnerArray[1] && winnerArray[1] === winnerArray[2] && winnerArray[1] !== undefined:
						$(".winner").text("var winner = " + winnerArray[1] + ";");
						winSound.play()
						$("#0").attr("class", "playInput cube winner" + winnerArray[1]);
						$("#1").attr("class", "playInput cube winner" + winnerArray[1]);
						$("#2").attr("class", "playInput cube winner" + winnerArray[1]);
            $(".playInput").off("click");
					break;
					case winnerArray[3] === winnerArray[4] && winnerArray[4] === winnerArray[5] && winnerArray[4] !== undefined:
						$(".winner").text("var winner = " + winnerArray[4] + ";");
						winSound.play()
						$("#3").attr("class", "playInput cube winner" + winnerArray[4]);
						$("#4").attr("class", "playInput cube winner" + winnerArray[4]);
						$("#5").attr("class", "playInput cube winner" + winnerArray[4]);
            $(".playInput").off("click");
					break;
					case winnerArray[6] === winnerArray[7] && winnerArray[7] === winnerArray[8] && winnerArray[7] !== undefined:
						$(".winner").text("var winner = " + winnerArray[7] + ";");
						winSound.play()
						$("#6").attr("class", "playInput cube winner" + winnerArray[7]);
						$("#7").attr("class", "playInput cube winner" + winnerArray[7]);
						$("#8").attr("class", "playInput cube winner" + winnerArray[7]);
            $(".playInput").off("click");
					break;
					case winnerArray[0] === winnerArray[3] && winnerArray[3] === winnerArray[6] && winnerArray[3] !== undefined:
						$(".winner").text("var winner = " + winnerArray[3] + ";");
						winSound.play()
						$("#0").attr("class", "playInput cube winner" + winnerArray[3]);
						$("#3").attr("class", "playInput cube winner" + winnerArray[3]);
						$("#6").attr("class", "playInput cube winner" + winnerArray[3]);
            $(".playInput").off("click");
					break;
					case winnerArray[1] === winnerArray[4] && winnerArray[4] === winnerArray[7] && winnerArray[4] !== undefined:
						$(".winner").text("var winner = " + winnerArray[4] + ";");
						winSound.play()
						$("#1").attr("class", "playInput cube winner" + winnerArray[4]);
						$("#4").attr("class", "playInput cube winner" + winnerArray[4]);
						$("#7").attr("class", "playInput cube winner" + winnerArray[4]);
            $(".playInput").off("click");
					break;
					case winnerArray[2] === winnerArray[5] && winnerArray[5] === winnerArray[8] && winnerArray[5] !== undefined:
						$(".winner").text("var winner = " + winnerArray[5] + ";");
						winSound.play()
						$("#2").attr("class", "playInput cube winner" + winnerArray[5]);
						$("#5").attr("class", "playInput cube winner" + winnerArray[5]);
						$("#8").attr("class", "playInput cube winner" + winnerArray[5]);
            $(".playInput").off("click");
					break;
					case winnerArray[0] === winnerArray[4] && winnerArray[4] === winnerArray[8] && winnerArray[4] !== undefined:
						$(".winner").text("var winner = " + winnerArray[4] + ";");
						winSound.play()
						$("#0").attr("class", "playInput cube winner" + winnerArray[4]);
						$("#4").attr("class", "playInput cube winner" + winnerArray[4]);
						$("#8").attr("class", "playInput cube winner" + winnerArray[4]);
            $(".playInput").off("click");
					break;
					case winnerArray[2] === winnerArray[4] && winnerArray[4] === winnerArray[6] && winnerArray[4] !== undefined:
						$(".winner").text("var winner = " + winnerArray[4] + ";");
						winSound.play()
						$("#2").attr("class", "playInput cube winner" + winnerArray[4]);
						$("#4").attr("class", "playInput cube winner" + winnerArray[4]);
						$("#6").attr("class", "playInput cube winner" + winnerArray[4]);
            $(".playInput").off("click");
					break;
					case numClicks >= 9: 
						$(".winner").text("winner; undefined");

				};
			};

		console.log(winnerArray);
		};

		$(".reset").on("click", function() {
		$(".playInput").attr("class","playInput cube");
		playInputsArray = [undefined, undefined, undefined, undefined,undefined, undefined, undefined, undefined, undefined];
		buttonClicks = "";
		$(".winner").text("");
    $(".playInput").on("click", setInput);
		console.log(playInputsArray);
		});
	// };//function choose play
	
};//soundmanager2

});//document.ready