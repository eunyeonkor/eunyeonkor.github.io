/*Content JS*/
$(window).scroll(function (e) {
    if ($(this).scrollTop() > 10) {
        $('body').addClass('scrolled');
    }
    else {
        $('body').removeClass('scrolled');
    }
});

$(document).ready(function () {
    $('.gnb > li').mouseenter(function (e) {
        $(this).find('.snb').stop().fadeIn('fast').css('display', 'flex');
        $(this).addClass('active');

        if ($(this).find('ul').length > 0) {
            $('.snb_bg').stop().slideDown('fast');
        }
    });
    $('.gnb > li').mouseleave(function (e) {
        $(this).find('.snb').stop().fadeOut('fast');
        $(this).removeClass('active');
        $('.snb_bg').stop().slideUp('fast');
    });

    $(".menu_slider_btn").on("click", function () {
        $(".hidden_nav_box").fadeIn('fast');
        $(".hidden_nav").animate({
            right: "0",
        }, 340, function () {
            // Complete.
        });
    });
    $(".menu_slider_btn2").on("click", function () {
        // $("article").css("opacity",1);
        $(".hidden_nav_box").fadeOut('fast');
        $(".hidden_nav").animate({
            right: "-640px",
        }, 340, function () {
            // Complete.
        });
    });

    $(".hidden_nav_box").on("click", function () {
        $(".hidden_nav_box").fadeOut('fast');
        $(".hidden_nav").animate({
            right: "-640px",
        }, 340, function () {
            // Complete.
        });
    });

    $('.h_gnb > li').mouseover(function () {
        $(this).find('a').addClass('active');
        $(this).find('.h_snb').stop().fadeIn(200);
    });

    $('.h_gnb > li').mouseout(function () {
        $(this).find('a').removeClass('active');
        $(this).find('.h_snb').stop().fadeOut(200);
    });


});