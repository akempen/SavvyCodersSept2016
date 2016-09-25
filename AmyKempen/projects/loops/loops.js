//Rock-Paper-Scissor

var rockPaperScissor = function() {
    var userOutputTarget = document.querySelector("#rock-paper-scissor-user");
    var computerOutputTarget = document.querySelector("#rock-paper-scissor-computer");
    var outputTarget = document.querySelector("#rock-paper-scissor");

    var userOutputHtml = "";

    var computerOutputHtml = "";

    var outputHtml = "";

    var userChoice = prompt ("Choose rock, paper, or scissor");
        userOutputHtml += "<p>user: " + userChoice + "</p>";

    var computerChoice = Math.random (); {
        if (computerChoice <= 0.3) {
            computerChoice = "rock";
            userOutputHtml += "<p>computer: " + computerChoice + "</p>";
        }
        else if (computerChoice <= 0.6) {
            computerChoice = "scissor";
            computerOutputHtml += "<p>computer: " + computerChoice + "</p>";
        }
        else {
            computerChoice = "paper";
            computerOutputHtml += "<p>computer: " + computerChoice + "</p>";
        }
    };

    var compare = function ( userChoice, computerChoice ) {
        if ( userChoice === computerChoice ) {
            outputHtml = "<p>It's a tie!</p>";
        }
        if ( ( userChoice === "rock" && computerChoice === "scissor" ) || ( userChoice === "scissor" && computerChoice === "rock" ) ) {
            outputHtml = "<p>Rock crushes scissor, Rock wins!</p>";
        }
        else if ( ( userChoice === "scissor" && computerChoice === "paper" ) || ( userChoice === "paper" && computerChoice === "scissor" ) ) {
            outputHtml = "<p>Scissor cuts paper, Scissor wins!</p>";
        }
        else if ( ( userChoice === "paper"  && computerChoice === "rock" ) || ( userChoice === "rock" && computerChoice === "paper" ) ) {
            outputHtml = "<p>Paper covers rock. Paper wins!</p>";
        }

    };
    compare ( userChoice, computerChoice );
    userOutputTarget.innerHTML = userOutputHtml;
    computerOutputTarget.innerHTML = computerOutputHtml;
    outputTarget.innerHTML = outputHtml;

};
rockPaperScissor ();



//FizzBuzz

var fizzBuzz = function(){
    var outputTarget = document.querySelector( "#fizz-buzz");
    var outputHtml = "<ul>";
    var stop = 50;
    var i = 1;

        while( i < stop ){
            if( i % 3 === 0 && i % 5 === 0){
                outputHtml += "<li>FizzBuzz</li>";
            }

            else if( i % 5 === 0){
                outputHtml += "<li>Buzz</li>";
            }

            else if( i % 3 === 0){
                outputHtml += "<li>Fizz</li>";
            }

            else {
                outputHtml += "<li>" + i + "</li>";
            }

            i++;
        }

        outputHtml += "</ul>"
        outputTarget.innerHTML = outputHtml;

};

fizzBuzz();


//EvenOdd

var evenOdd = function () {

    var outputTarget = document.querySelector("#even-odd");
    var outputHtml = "";
    var i = 15;

    while( i > 0) {
        if( i % 2 === 0 ){
            outputHtml += "<li>" + i + " is EVEN</li>"
        }
            else {
                outputHtml += "<li>" + i +" is ODD</li>"
            }

        i--;
    }

    outputHtml += "</ul>";
    outputTarget.innerHTML = outputHtml;
};

evenOdd();
