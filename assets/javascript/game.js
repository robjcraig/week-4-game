
$(document).ready(function(){

// The random number will be between 19 and 120.

var randomNumber = Math.floor(Math.random() * 120) + 19;

var wins = 0;
var losses = 0;
var totalScore = 0;

// Each button box will have a value between 1 and 12.

var buttonBox1 = Math.floor(Math.random() * 12) + 1;
var buttonBox2 = Math.floor(Math.random() * 12) + 1;
var buttonBox3 = Math.floor(Math.random() * 12) + 1;
var buttonBox4 = Math.floor(Math.random() * 12) + 1;





function initializeGame() {
        wins = 0;
        losses = 0;
        totalScore = 0;
        isOperatorChosen = false;
        isCalculated = false;
}


$("#buttonBox1").on("click",function() {
          var totalScore = totalScore + buttonBox1; 
          $("#totalScoreBox").html(totalScore);
          });

// need a function to compare the value of totalScore to the value of randomNumber

function addButtonValueToTotalScore () {


	var randomNumber;
	var totalScore;
    if (totalScore > randomNumber) {
        	$("#losses").html(losses++);
        }
    else (totalScore = randomNumber)
        	$("#wins").html(wins++);
    	}  


for (var i = 0; i < buttonBox1.length; i++) {

        // Inside the loop...

        // 2. Create a variable named "letterBtn" equal to $("<button>");
        var letterBtn1 = $("#buttonBox1");

        // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        letterBtn1.addClass("letter-button letter letter-button-color");

        // 4. Then give each "letterBtn" a data-attribute called "data-letter".
        letterBtn1.attr("data-letter", buttonBox1[i]);

        // 5. Then give each "letterBtns" a text equal to "letters[i]".
        letterBtn1.text(buttonBox1[i]);

        // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
        $("#totalScoreBox").append(letterBtn1);

   	
};


$("#buttonBox1").click(function(){
        // $("#buttonBox1").append(buttonBox1);
		document.getElementById("#totalScoreBox").innerHTML = totalScore});

});
// $("#buttonBox1").on("click", function() {
// 	$("#totalScoreBox").append();
// });

// $("#buttonBox2").on("click", function() {
// 	$("#totalScoreBox").append();
// });

// $("#buttonBox3").on("click", function() {
// 	$("#totalScoreBox").append();
// });

// $("#buttonBox4").on("click", function() {
// 	$("#totalScoreBox").append();
// });


// console.log(randomNumber);
// console.log(wins);
// console.log(losses);
// console.log(totalScore);
console.log(buttonBox1);
console.log(buttonBox2);
console.log(buttonBox3);
console.log(buttonBox4);

// need a function to add the value of buttonBox1-4 to the totalScoreBox div

// $("reset-button").on("click", function()) {
//     gameStart();
// }

// function gameStart() {
//     randomNumber = 
    
// }


    // return randomNumber;

	// document.getElementById("randomNumber").innerHTML = getRandomNumber(this);


// // $("#youWin").innerHTML("You win!");



// });
// if (totalScore=randomNumber) {
// 	$("youWin")displays, wins++;
// 	run gameStart function
// }
// if (totalScore>randomNumber) {
// 	$("youLose")displays, losses++;
// 	run gameStart function
// }
