$(function(){
    //Load Templates
    $( "#header" ).load("/templates/header.html");


    //Nav fix on Top
    window.onscroll = function() {
        var nav = document.getElementById("nav");
        var sticky = nav.offsetTop;
        
        if (window.pageYOffset > sticky) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    }  
  });

