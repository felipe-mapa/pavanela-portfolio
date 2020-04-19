// MENU SCROLL DOWN AND SHOW UP
$(function ($) {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 700);
                return false;
            }
        }
    });
});

// SHOW NAVIGATIN BAR
$(window).scroll(function () {
    var scrollDistance = jQuery(window).scrollTop();

    if (scrollDistance >= 400) {
        jQuery('nav').fadeIn("slow");
    } else {
        jQuery('nav').fadeOut("slow");
    }

    jQuery('.find-section').each(function (i) {
        if (jQuery(this).position().top <= scrollDistance) {
            jQuery('.Navigation svg.active').removeClass('active');
            jQuery('.Navigation svg').eq(i).addClass('active');
        }
    });
}).scroll();

$(document).ready(function () {
    jQuery("#header__text-box").css("display", "block");
});