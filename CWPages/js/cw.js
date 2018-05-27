$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".gotop").fadeIn(200);
            $(".gotop2").fadeIn(200);
        }
        else {
            $(".gotop").fadeOut(200);
            $(".gotop2").fadeOut(200);
        }
    });
    // Scroll Page to Top when clicked on "go to top" button
    $(".gotop").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    $(".gotop2").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $(".scrollLink").click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 700);
        return false;
    });

})