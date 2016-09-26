
//Story with innerHTML that still doesn't work
    var userOutputTarget = document.querySelector("#cyoa");
    var storyOutcomeHtml = "";
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
    //Characters
    var characters = function () {
        mainCharacter.name = prompt ( "What's your name?" );
        ancilliaryCharacter.name = prompt ( "Who do you want to travel with?" );
    }

    characters ();
    prompt ( mainCharacter.name + " and " + ancilliaryCharacter.name + " decide to go on a trip together. Should you go to Italy or Mexico");

    //Country
    var countries = function (){
        if ( characterPromptResult = "Italy" ) {
            prompt ( story.country.good + " Which city would you like to visit, Florence or Rome?" );
            while ( characterPromptResult != "Italy" && characterPromptResult != "Mexico" ) {
                prompt ( mainCharacter.name + " and " + ancilliaryCharacter.name + " decide to go on a trip together. Should you go to Italy or Mexico");
            }
        }
        else if ( characterPromptResult = "Mexico" ) {
            storyOutcomeHtml = "<p>" + story.country.bad + "</p>";
        }
    };
    countries ();
    userOutputTarget.innerHTML = storyOutcomeHtml;

//City
    var city = function (){
        if ( cityPromptResult = "Florence" ) {
            prompt ( story.city.good + " Are you feeling adventurous, yes or no?" );
            while ( cityPromptResult != "Florence" && cityPromptResult != "Rome" ) {
                prompt ( story.country.good + " Which city would you like to visit, Florence or Rome?" );
            }
        }
        else if ( cityPromptResult = "Rome" ) {
            storyOutcomeHtml = "<p>" + story.city.bad + "</p>";
        }
    };
    city ();
    userOutputTarget.innerHTML = storyOutcomeHtml;


//Step 4: Adventure
    var adventure = function (){
        if ( adventurePromptResult === "yes" ) {
            updateOutput ( story.adventure.good );
            while ( adventurePromptResult !== "yes" && adventurePromptResult !== "no" ) {
                prompt ( story.city.good + " Are you feeling adventurous, yes or no?" );
            }
        }
        else if ( adventurePromptResult === "no" ) {
            storyOutcomeHtml = "<p>" + story.adventure.bad + "</p>";
        }
    };
    adventure ();
    userOutputTarget.innerHTML = storyOutcomeHtml;




//Story with lots of functions that doesn't work
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
//
// //Main CYOA
//
// //Step 1: Names
// var characters = function () {
//     mainCharacter.name = prompt ( "What's your name?" );
//     ancilliaryCharacter.name = prompt ( "Who do you want to travel with?" );
// }
//
// characters ();
// characterPromptResult = prompt ( mainCharacter.name + " and " + ancilliaryCharacter.name + " decide to go on a trip together. Should you go to Italy or Mexico");
//
//
// //Step 2: Country
// if ( characterPromptResult = "Italy" ) {
//     prompt ( story.country.good + " Which city would you like to visit, Florence or Rome?" );
//     while ( characterPromptResult != "Italy" && characterPromptResult != "Mexico" ) {
//         prompt ( mainCharacter.name + " and " + ancilliaryCharacter.name + " decide to go on a trip together. Should you go to Italy or Mexico");
//     }
// }
// else if ( characterPromptResult = "Mexico" ) {
//     updateOutput ( story.country.bad );
// }
//
//
// //Step 3: City
// var city = function (){
//     if ( cityPromptResult === "Florence" ) {
//         cityPromptResult = prompt ( story.city.good + " Are you feeling adventurous, yes or no?" );
//         while ( cityPromptResult !== "Florence" && cityPromptResult !== "Rome" ) {
//             cityPromptResult = prompt ( story.country.good + " Which city would you like to visit, Florence or Rome?" );
//         }
//     }
//     else if ( cityPromptResult === "Rome" ) {
//         updateOutput ( story.city.bad );
//     }
// };
// city ();
//
//
// //Step 4: Adventure
// var adventure = function (){
//     if ( cityPromptResult === "yes" ) {
//         updateOutput ( story.adventure.good );
//         while ( cityPromptResult !== "yes" && cityPromptResult !== "no" ) {
//             promptText = prompt ( story.city.good + " Are you feeling adventurous, yes or no?" );
//         }
//     }
//     else if ( cityPromptResult === "no" ) {
//         updateOutput ( story.adventure.bad );
//     }
// };
// adventure ();



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
