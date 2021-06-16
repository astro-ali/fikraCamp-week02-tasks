$(function() {
    'use strict';

    $(window).scroll(function() {
        if($('nav').offset().top > 50){
            $('nav').addClass('fixed-top');
        }
        else {
            $('nav').removeClass('fixed-top');
        }
    });
});
