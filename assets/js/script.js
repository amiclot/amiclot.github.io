// SEE IT IN DETAILS VIEW !

$(document).ready(function() {
    
    console.log('Document ready');

    $('.fa-bars').click(function() {
        $('.text-menu').toggleClass('menu-appear');
    });

    $('nav .text-menu a').click(function() {
        $('.text-menu').toggleClass('menu-appear');
    });

    $(".arrow-right").on("click", function (event) {
        event.preventDefault();
        $(".vid-list-container").stop().animate({
            scrollLeft: "+=336"
        }, 750);
    });
    $(".arrow-left").on("click", function (event) {
        event.preventDefault();
        $(".vid-list-container").stop().animate({
            scrollLeft: "-=336"
        }, 750);
    });

    
    
});