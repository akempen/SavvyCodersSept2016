(function() {
    'use strict';

    var Post = function( title, body ){
        this.title = title;
        this.body = body;
    };

    var view =  function( models ){
        models.forEach( function( model ){
            var post = new Post( model.title, model.body );

            post.append();
        } );
    };

    var controller = $.ajax( {
        "url": "https://jsonplaceholder.typicode.com/posts"
    } );

    controller.done( function( models ){
        view( models );
    });

    Post.prototype.append = function(){
        var $target = $( "<div class='post'></div>" );

        $target.append( "<h3>" + this.title + "</h3><br>" );
        $target.append( "<p>" + this.body + "</p><hr>" );

        $( ".blurb-text" ).append( $target );
    }


})();
