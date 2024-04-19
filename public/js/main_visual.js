/*Content JS*/
$(document).ready(function () {
    var centerSlider = $('.center_slidelist');
    centerSlider.find('>div').each(function (index, element) {
        $(this).attr('data-idx', "" + (index + 1));
    });

    centerSlider.owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        startPosition: 0,
        dots: true,
        animateOut: 'fadeOut',
    });


});