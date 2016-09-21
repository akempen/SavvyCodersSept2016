//Characters
var mainCharacter = {}
var ancilliaryCharacter = {}

//Data
var story = {
    italy: {
        italyCityPrompt: "Which city should we go to?",
        italyCityOptions: {
            yay: "Florence",
            nay: "Rome"
        }
    },
    mexico: "Boo, Italy is WAY better."
};

//Helper functions
var updateOutput = function ( input ) {
    document.querySelector( "#output" ).textContent = input;
};

//Main CYOA
mainCharacter.name = prompt ( "What's your name?" );
ancilliaryCharacter.name = prompt ( "What's your friend's name?" );

console.log (mainCharacter);
console.log (ancilliaryCharacter);

promptText = prompt ( mainCharacter.name + " and " + ancilliaryCharacter.name + " decide to go on a trip together. Where should they go? Italy/Mexico");

if (promptText === "Italy") {
    prompt (story.italy.italyCityPrompt);
}

else if (promptText === "Mexico") {
    updateOutput (story.mexico);
}




// var promptText = prompt ( "What would you like to enter? hello/goodbye" );
//
// if(promptText === "hello") {
//     updateOutput ( "Howdy there partner" );
// }
//
// else if (promptText === "goodbye") {
//     updateOutput ( "See ya later alligater" );
// }
