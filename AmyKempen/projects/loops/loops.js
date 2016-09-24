var userChoice = prompt ("Choose rock, paper, or scissor");
    console.log (userChoice);

var computerChoice = Math.random (); {
    if (computerChoice <= 0.3) {
        console.log ("rock")
    }
    else if (computerChoice <= 0.6) {
        console.log("scissor")
    }
    else {
        console.log ("paper")
    }
};

var compare = function ( userChoice, computerChoice ) {
    // if ( userChoice === computerChoice ) {
    //     console.log( "tie" );
    // }
    if (userChoice === "rock" && computerChoice === "scissor") {
        console.log ("ROCK WINS!");
    }
    else if (userChoice === "scissor" && computerChoice === "paper") {
        console.log ("SCISSOR WINS!")
    }
    else if (userChoice === "paper"  && computerChoice === "rock") {
        console.log ("PAPER WINS!")
    }
};

compare ();


// var object = function( numberOne ){
//     var outputTarget = document.querySelector( "#rock-paper-scissor");
//     var outputHtml = "";
//
//         if( numberOne <= 0.3 ) {
//             outputHtml += "<p>Rock</p>"
//         }
//         else if (numberOne <= 0.6) {
//             outputHtml += "<p>Scissor</p>"
//         }
//         else {
//             outputHtml += "<p>Paper</p>"
//         }
//
//     outputTarget.innerHTML = outputHtml;
// };
//
// object( 0.23 );




// var evenOdd = function() {
//     var outputTarget = document.querySelector("#even-odd");
//     var outputHtml = "";
//     var i = 15;
//
//     while( i > 0) {
//         if( i % 2 === 0 ){
//             outputHtml += "<li>" + i + " is EVEN</li>"
//         }
//             else {
//                 outputHtml += "<li>" + i +" is ODD</li>"
//             }
//
//         i--;
//     }
//
//     outputHtml += "</ul>";
//
//     outputTarget.innerHTML = outputHtml;
// };


// var fizzBuzz = function(){
//     var outputTarget = document.querySelector( "#fizz-buzz");
//     var outputHtml = "<ul>";
//     var stop = 100;
//     var i = 1;
//
//         while( i < stop ){
//             if( i % 3 === 0 && i % 5 === 0){
//                 outputHtml += "<li>FizzBuzz</li>";
//             }
//
//             else if( i % 5 === 0){
//                 outputHtml += "<li>Buzz</li>";
//             }
//
//             else if( i % 3 === 0){
//                 outputHtml += "<li>Fizz</li>";
//             }
//
//             else {
//                 outputHtml += "<li>" + i + "</li>";
//             }
//
//             i++;
//         }
//
//         outputHtml += "</ul>"
//         outputTarget.innerHTML = outputHtml;
//
// };
//
// evenOdd();
// fizzBuzz();


// var outputTarget = document.querySelector("#even-odd");
// var outputHtml = "";
// var i = 15;
//
// while( i > 0) {
//     if( i % 2 === 0 ){
//         outputHtml += "<li>" + i + " is EVEN</li>"
//     }
//         else {
//             outputHtml += "<li>" + i +" is ODD</li>"
//         }
//
//     i--;
// }
//
// outputHtml += "</ul>";
//
// outputTarget.innerHTML = outputHtml;
