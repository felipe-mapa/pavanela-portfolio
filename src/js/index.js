// MENU SCROLL DOWN AND SHOW UP
$(function () {
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
    var scrollDistance = $(window).scrollTop();

    if (scrollDistance >= 400) {
        $('nav').fadeIn("slow");
    } else {
        $('nav').fadeOut("slow");
    }

    $('.find-section').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $('.navigation svg.active').removeClass('active');
            $('.navigation svg').eq(i).addClass('active');
        }
    });
}).scroll();

$(document).ready(function () {
    $("#header__text-box").css("display", "block");
});