$(document).ready(function() {
	$(":checkbox").click(function(event) {
        if ($(this).is(":checked"))
            $(".hamburger").fadeIn('slow');
        else
            $(".hamburger").fadeOut('fast');
    });

	let scrollTop = $("#scrollTop");

    $(window).scroll(function() {

        let topPos = $(this).scrollTop();

        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");
        } else {
            $(scrollTop).css("opacity", "0");
        }

    });

    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $(".photoflash").click(function() {
    	$("body, html").fadeOut(100).fadeIn(100);
    });

    let link1 = $('#home').position();
    let link2 = $('#photoapp').position();
    let link3 = $('#design').position();
    let link4 = $('#download').position();
   


    $('.homeLink').click(function() {
        $('body, html').animate({
            scrollTop: link1.top
        }, 400);
        return false;
    });
    $('.photoLink').click(function() {
        $('body, html').animate({
            scrollTop: link2.top
        }, 400);
        return false;
    });

    $('.designLink').click(function() {
        $('body, html').animate({
            scrollTop: link3.top
        }, 500);
        return false;
    });
    $('.downloadLink').click(function() {
        $('body, html').animate({
            scrollTop: link4.top
        }, 800);
        return false;
    });
   


})

	