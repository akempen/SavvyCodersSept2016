
//Characters
var mainCharacter = {}
var ancilliaryCharacter = {}

//Data
var story = {
        country: {
            good: "You pick up a copy of Rick Steves and some good walking shoes.",
            bad: "It's beach time so sit back and chillax with a margarita. You deserve it. The end."
        },
        city: {
            good: "You grab a cab and head to the Uffizi.",
            bad: "You realize Rome is in the middle of a zombie apocolypse so you run for dear life in search of other uninfected people."
        },
        adventure: {
            good: "You meet two Italians, fall madly in love, move to Florence, and live happily-ever-after.",
            bad: "You nerd out on art all afternoon, pig out on pizza, get drunk off wine, and end the night with gelato."
        }
};

var promptText;

//Helper functions
var updateOutput = function ( input ) {
    document.querySelector( "#output" ).textContent = input;
};


//Main CYOA

//Step 1: Names
mainCharacter.name = prompt ( "What's your name?" );

ancilliaryCharacter.name = prompt ( "Who do you want to travel with?" );

promptText = prompt ( mainCharacter.name + " and " + ancilliaryCharacter.name + " decide to go on a trip together. Should you go to Italy or Mexico?");
while( promptText !== "Italy" && promptText !== "Mexico" ){
    promptText = prompt ( mainCharacter.name + " and " + ancilliaryCharacter.name + " decide to go on a trip together. Should you go to Italy or Mexico?");
}

//Step 2: Country
if (promptText === "Mexico") {
    updateOutput ( story.country.bad );
}
else if ( promptText === "Italy" ) {
    promptText = prompt ( story.country.good + " Which city would you like to visit, Florence or Rome?" );
    while ( promptText !== "Florence" && promptText !== "Rome" ) {
        promptText = prompt ( story.country.good + " Which city would you like to visit, Florence or Rome?" );;
    }
}
// else if ( promptText === "Mexico" ) { // promptText is "Mexico", condition is true, code from lines 51-53 will run
//     updateOutput ( story.country.bad ); // promptText is "Mexico", "bad" condition is appended as HTML to screen
// }


//Step 3: City

if ( promptText === "Florence" ) {
    promptText = prompt ( story.city.good + " Are you feeling adventurous, yes or no?" );
    while ( promptText !== "yes" && promptText !== "no" ) {
        promptText = prompt ( story.city.good + " Are you feeling adventurous, yes or no?" );
    }
}
else if ( promptText === "Rome" ) {
    updateOutput ( story.city.bad );
};

//Step 4: Adventure
if ( promptText === "yes" ) {
    updateOutput ( story.adventure.good );
}
else if ( promptText === "no" ) {
    updateOutput ( story.adventure.bad );
};



//Works without loops
// //Characters
// var mainCharacter = {}
// var ancilliaryCharacter = {}
//
// //Data
// var story = {
//         country: {
//             good: "You pick up a copy of Rick Steves and some good walking shoes.",
//             bad: "It's beach time so sit back and chillax with a margarita. You deserve it. The end."
//         },
//         city: {
//             good: "You grab a cab and head to the Uffizi.",
//             bad: "You realize Rome is in the middle of a zombie apocolypse so you run for dear life in search of other uninfected people."
//         },
//         adventure: {
//             good: "You meet two Italians, fall madly in love, move to Florence, and live happily-ever-after.",
//             bad: "You nerd out on art all afternoon, pig out on pizza, get drunk off wine, and end the night with gelato."
//         }
// };
//
// //Helper functions
// var updateOutput = function ( input ) {
//     document.querySelector( "#output" ).textContent = input;
// };
//
// //Main CYOA
// mainCharacter.name = prompt ( "What's your name?" );
// ancilliaryCharacter.name = prompt ( "Who do you want to travel with?" );
//
// console.log (mainCharacter);
// console.log (ancilliaryCharacter);
//
// //Step 1
// promptText = prompt ( mainCharacter.name + " and " + ancilliaryCharacter.name + " decide to go on a trip together. Should you go to Italy or Mexico");
//
// if ( promptText === "Italy" ) {
//     promptText = prompt ( story.country.good + " Which city would you like to visit, Florence or Rome?" );
// }
//
// else if ( promptText === "Mexico" ) {
//     updateOutput ( story.country.bad );
// };
//
// //Step 2
// if ( promptText === "Florence" ) {
//     promptText = prompt ( story.city.good + " Are you feeling adventurous, yes or no?" );
// }
//
// else if ( promptText === "Rome" ) {
//     updateOutput ( story.city.bad );
// };
//
//
// //Step 3
// if ( promptText === "yes" ) {
//     updateOutput ( story.adventure.good );
// }
//
// else if ( promptText === "no" ) {
//     updateOutput ( story.adventure.bad );
// };
