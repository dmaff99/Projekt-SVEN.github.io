$(function(){
    //Load Templates
    $( "header" ).load("/templates/header.html");

    //Nav fix on Top
    var sticky = null;
    window.onscroll = function() {
        if (sticky == null) {
            sticky = $("nav").offset().top;
        }
        
        if (window.pageYOffset > sticky) {
            $("nav").addClass("sticky");
            $("article").addClass("sticky_article");

            //Breite setzen
            $("nav").css("width", $("article").outerWidth());
        } else {
            $("nav").removeClass("sticky");
            $("article").removeClass("sticky_article");

            //Breite löschen
            $("nav").css("width", '');
        }
    }  

    window.onresize = function() {
        //set Nav-Breite
        $("nav").css("width", $("article").outerWidth());
    }

});

