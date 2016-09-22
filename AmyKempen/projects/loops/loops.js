var evenOdd = function() {
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


var fizzBuzz = function(){
    var outputTarget = document.querySelector( "#fizz-buzz");
    var outputHtml = "<ul>";
    var stop = 100;
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

evenOdd();
fizzBuzz();



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
