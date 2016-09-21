//Characters
var mainCharacter = {}
var ancilliaryCharacter = {}

//Data
var story = {
        italy: {
            florence: "You grab a cab and head to the Uffizi.",
            florenceYes: "You meet two charming Italians, fall madly in love, move to Florence, and live happily-ever-after.",
            florenceNo: "You nerd out on art all afternoon, pig out on pizza, get drunk off wine, and end the night with gelato.",
            rome: "You realize Rome is in the middle of a zombie apocolypse so you run for dear life in search of other uninfected people."
        },
        mexico: "It's beach time so sit back and chillax with a margarita. You deserve it. The end."
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

//Step 1
promptText = prompt ( mainCharacter.name + " and " + ancilliaryCharacter.name + " decide to go on a trip together. Should you go to Italy or Mexico");

if (promptText === "Italy") {
    promptText = prompt ( " Which city would you like to visit? Florence or Rome" );
}

else if (promptText === "Mexico") {
    updateOutput ( story.mexico );
};

//Step 2
if (promptText === "Florence") {
    promptText = prompt ( story.italy.florence + " Are you feeling adventurous, yes or no?" );
}

else if (promptText === "Rome") {
    updateOutput ( story.italy.rome );
};


//Step 3
if (promptText === "yes") {
    updateOutput (story.italy.florenceYes);
}

else if (promptText === "no") {
    updateOutput (story.italy.florenceNo);
};




// var promptText = prompt ( "What would you like to enter? hello/goodbye" );
//
// if(promptText === "hello") {
//     updateOutput ( "Howdy there partner" );
// }
//
// else if (promptText === "goodbye") {
//     updateOutput ( "See ya later alligater" );
// }
