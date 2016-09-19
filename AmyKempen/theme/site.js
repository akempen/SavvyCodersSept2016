var favoriteCountry = prompt ( "What is your favorite country?" );

var freedomCheck = function(){
    if ( favoriteCountry === "USA" ){
        console.log( "You need to travel more");
    } else {
        console.log( "Keep on travelin'");
    }

};

freedomCheck();
