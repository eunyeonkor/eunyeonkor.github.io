/*Content JS*/
$(function () {
    $('#mail_popup').bind('click', function (e) {
        e.preventDefault();
        // Triggering bPopup when click event is fired
        $('#mail_bpopup_form').bPopup();
    });

    $("#top_btn").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, '500');
        return false;
    });

    $(".fm_btn").click(function () {
        $(this).next('ul').stop().slideToggle(200);
        $(this).toggleClass('active');
    });

});