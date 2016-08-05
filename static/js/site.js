$(function() {

    "use strict";

    function e() {
        $(".container").css({
            width: $(window).width(),
            height: $(window).height()
        })
    }

    $(window).resize(function() {
        e()
    }).resize();

    $('.container').vegas({
        overlay: 5,
        transitionDuration: 4e3,
        delay: 6e3,
        slides: [
            { 
                src: 'static/images/bg01.jpg',
                animation: 'random'
            },
            { 
                src: 'static/images/bg02.jpg',
                animation: 'random'
            },
            { 
                src: 'static/images/bg03.jpg',
                animation: 'random',
                transition: 'swirlRight2'
            }
        ]
    });
});
