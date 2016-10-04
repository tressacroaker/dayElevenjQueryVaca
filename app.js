$(document).ready(function() {
    $("h1").css({
        "font-family": "Cutive Mono",
        "font-size": "60px",
        "opacity": "0.8"
    });

    $("p").css({
        "font-family": "Josefin Sans",
        "font-size": "20px",
        "opacity": "0.6"
    });

    $("#coffeeIcon").css({
        "opacity": "0.8",
    });


    $("h1").hover(function() {
        $("p").fadeIn();
    });


    $(".menu").on("click", function() {
        $(".menudropdown").toggle();
    });


    $("#plusdrink").on("click", function() {
        $(".drinkdropdown").slideToggle();
    });

    $("#plustype").on("click", function() {
        $(".typedropdown").slideToggle();
    });

    $("#pluslisten").on("click", function() {
        $(".listendropdown").slideToggle();
    });

});

$("#coffee").hover(function() {
    $("#coffee").fadeTo("slow", 0.4, function() {});
});

$("#typewriter").hover(function() {
    $("#typewriter").fadeTo("slow", 0.4, function() {});
});

$("#music").hover(function() {
    $("#music").fadeTo("slow", 0.4, function() {});
});
