// $(".hamburger").click (function () { // hamburger is visible
//     $(".dropdown").slideToggle(); // slideToggle triggered, hamburger hidden
// });

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
