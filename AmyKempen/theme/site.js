// $(".hamburger").click (function () { // hamburger is visible
//     $(".dropdown").slideToggle(); // slideToggle triggered, hamburger hidden
// });

(function() {

    $(".hamburger").click(
        function() {
            if ($( ".dropdown" ).hasClass( "toggle" )){
                $( ".dropdown" ).removeClass("toggle")
            }
            else {
                $( ".dropdown" ).addClass("toggle")
            }
        }
    );

    $("li").on( "mouseover", function(){
        $( this ).addClass( "highlight");
    } );

    $("li").on( "mouseleave", function(){
        $( this ).removeClass( "highlight");
    } );

    //fade in contact-list
    var $contactList = $( ".contact-list" ).children();

    console.log( $contactList );

    for( var i = 0; i < $contactList.length; i++){
        var $listElement = $( $contactList[i] );
        var propertiesObject = {
            "opacity": 1.0
        };

        $listElement.animate( propertiesObject, 1000 * (i + 1) );
    }

})();

// var contactArray = [ "Github", "LinkedIn", "Email" ];
//
// for ( var i = 0; i < contactArray.length; i++ ){
//     console.log( contactArray[i] );
// }


// $("li").on( "mouseover", function(){
//     $( this ).addClass( "highlight");
// } );
//
// $("li").on( "mouseleave", function(){
//     $( this ).removeClass( "highlight");
// } );





// var firstName = prompt ( "Hi! What's your first name?");
// var lastName = prompt ( "Hi! What's your last name?");
//
// if (!firstName){
//     username = prompt ("Oops! You need to enter your name");
// }
//
// var lastName = prompt ( "What's your last name?");
// var output = document.querySelector ( "#greeting" );
//
// if (!firstName){
//     alert ("Please enter your first name");
//
//     username = prompt ("Oops! You need to enter your name");
// }
//
// output.innerHTML = "<h3>Hello, thanks for visiting, " + username + "</h3>";
